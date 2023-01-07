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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _transaction_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transaction-routing.module */ 44424);
/* harmony import */ var _transaction_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transaction.page */ 65057);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let TransactionPageModule = class TransactionPageModule {
};
TransactionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _transaction_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transaction.page.html?ngResource */ 80954);
/* harmony import */ var _transaction_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transaction.page.scss?ngResource */ 34554);
/* harmony import */ var _services_trxn_pdf_doc_download_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/trxn-pdf-doc-download.service */ 72734);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loading.service */ 4471);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 86527);
/* harmony import */ var _daterange_daterange_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../daterange/daterange.page */ 36675);
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ 61832);
/* harmony import */ var _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @awesome-cordova-plugins/file/ngx */ 50646);


















let TransactionPage = class TransactionPage {
    constructor(router, alertController, navCtrl, loadingService, modalCtrl, apiService, cdr, location, shareDataService, androidPermissions, loadingCtrl, platform, file, toastrCtrl, pdfService, actionSheetController) {
        this.router = router;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.loadingService = loadingService;
        this.modalCtrl = modalCtrl;
        this.apiService = apiService;
        this.cdr = cdr;
        this.location = location;
        this.shareDataService = shareDataService;
        this.androidPermissions = androidPermissions;
        this.loadingCtrl = loadingCtrl;
        this.platform = platform;
        this.file = file;
        this.toastrCtrl = toastrCtrl;
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
        this.isDevice = this.platform.is('cordova');
        this.phoneNumber = localStorage.getItem('customerPhonenum');
        this.accountsData = JSON.parse(localStorage.getItem('cardData'));
        this.accountsData.forEach((v, k) => {
            this.accountIdArray.push(v.accountId);
        });
        this.shareDataService.getAccountInfo.subscribe(data => {
            this.accountInfo = data;
            if (this.accountInfo != null && this.accountInfo != undefined) {
                this.accountNumber = this.accountInfo.accountId;
                this.loginRespAccountId = this.accountNumber;
            }
            else {
                this.loginRespAccountId = localStorage.getItem('loginRespAccountId');
            }
            console.log("Account", this.accountNumber);
        });
        this.loadData();
        this.getTransactionByAccountId('onload', 0, '', null, null, 20);
        this.priviousDate = this.getYesterdayDate();
        this.priviousDate = this.priviousDate.toISOString();
        // this.getBeforeDateBasedOnDays(this.selectNoOfDaysVal);
        if (this.isDevice) {
            this.platform.ready().then(() => {
                // Reset for later copy/move operations
                this.createDirectory();
                if (this.platform.is("ios")) {
                    this.targetPath = this.file.dataDirectory;
                }
                else {
                    this.targetPath = this.file.externalRootDirectory + `Download/`;
                    console.log("For android", this.targetPath);
                }
            });
        }
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
    accountChange(e) {
        this.loginRespAccountId = e.detail.value;
        this.getTransactionByAccountId('onAccount', 0, '', null, null, 20);
    }
    addCustomTask() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _daterange_daterange_page__WEBPACK_IMPORTED_MODULE_6__.DaterangePage,
                cssClass: 'small-modal'
            });
            modal.present();
            const { data } = yield modal.onWillDismiss();
            if (data.fromDate != null && data.toDate != null) {
                this.getTransactionByAccountId('onAccount', 0, '', data === null || data === void 0 ? void 0 : data.fromDate, data === null || data === void 0 ? void 0 : data.toDate, 20);
            }
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
            const formatFromDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(d, "yyyy-MM-dd");
            this.fromDate = formatFromDate;
            const formatToDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(this.currentDate, "yyyy-MM-dd");
            this.toDate = formatToDate;
            console.log('formatFromDate :: ', formatFromDate, ' ::formatToDate::  ', formatToDate);
            this.isNoOfDays = true;
        }
    }
    getTransactionByAccountId(dataLoad, page, event, formattedFromDate, formattedToDate, size) {
        this.loadingService.present();
        this.loggedInCust = sessionStorage.getItem('customer_id');
        this.page = page;
        this.apiService.getTransactionByAccountId(this.loginRespAccountId, this.page, formattedFromDate, formattedToDate, size)
            .subscribe((data) => {
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
                this.loadingService.dismiss();
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
            this.loadingService.dismiss();
            if (err.error == null) {
                this.transactionDataArr = [];
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
        var currDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(this.currentDate, "yyyy-MM-dd");
        if (!isNoOfDays) {
            const formattedFromDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(this.fromDate), "yyyy-MM-dd'T'HH:mm:ss");
            this.formattedFromDate = formattedFromDate;
            // console.log('fromDate :: ',this.formattedFromDate);
            const formattedToDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(this.toDate), "yyyy-MM-dd'T'HH:mm:ss");
            this.formattedToDate = formattedToDate;
            formatFromDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(this.fromDate), "yyyy-MM-dd");
            formatToDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(this.toDate), "yyyy-MM-dd");
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
        var currDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(this.currentDate, "yyyy-MM-dd");
        const formattedFromDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(this.fromDate), "yyyy-MM-dd");
        console.log('formatted:: ', currDate, formattedFromDate);
        this.fromDateVal = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(this.fromDate).toISOString();
        this.toDate = '';
        if (formattedFromDate > currDate) {
            this.openAlert('Future dates not allowed!');
            this.fromDate = null;
            this.toDate = null;
        }
    }
    openAlert(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
            this.accountNumber = this.accountNumber != null ? this.accountNumber : resp.custAccount.accountId;
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log("Inside onClick", event.transactionId);
        });
    }
    downloadPdf(trxnArrayList, fromDate, toDate) {
        console.log("inside download pdf", trxnArrayList, fromDate, toDate);
        if (this.isDevice) {
            if (fromDate == undefined || fromDate == null) {
                this.deviceDownload('download', 0, '', null, null, this.totalElements);
            }
            else {
                this.deviceDownload('download', 0, '', this.formattedFromDate, this.formattedToDate, this.totalElements);
            }
        }
        else {
            if (fromDate == undefined || fromDate == null) {
                this.getTransactionByAccountId('download', 0, '', null, null, this.totalElements);
            }
            else {
                this.getTransactionByAccountId('download', 0, '', this.formattedFromDate, this.formattedToDate, this.totalElements);
            }
        }
    }
    deviceDownload(dataLoad, page, event, formattedFromDate, formattedToDate, size) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let fileName = "transaction.pdf";
            const loading = yield this.loadingCtrl.create({
                message: 'Downloading...',
                spinner: 'circles',
            });
            loading.present();
            let name = fileName.replace(/\s/g, '');
            this.apiService.getTransactionByAccountId(this.loginRespAccountId, this.page, formattedFromDate, formattedToDate, size)
                .subscribe((blob) => {
                this.file.writeFile(this.targetPath, name, new Blob([blob]), {
                    replace: true,
                });
                loading.dismiss();
                this.openToast("Downloaded!");
                this.cdr.markForCheck();
            }, (err) => {
                console.log("err", err);
                this.openToast("Download Failed!");
                loading.dismiss();
            });
        });
    }
    createDirectory() {
        this.file.checkDir(`${this.file.externalRootDirectory}`, "rumango")
            .then(res => {
            console.log("check dir is exist", res);
            if (!res) {
                if (this.platform.is('android')) {
                    this.androidPermissions.hasPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
                        .then(status => {
                        if (status.hasPermission) {
                            this.newDir();
                        }
                        else {
                            this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.WRITE_EXTERNAL_STORAGE)
                                .then(status => {
                                if (status.hasPermission) {
                                    this.newDir();
                                }
                            });
                        }
                    });
                }
            }
        });
    }
    openToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastrCtrl.create({
                message: `${message}`,
                duration: 2500,
                position: 'bottom',
            });
            toast.present();
        });
    }
    newDir() {
        this.file
            .createDir(`${this.file.externalRootDirectory}`, "rumango", false)
            .then(res => {
            console.log("Response dir", res);
        });
    }
    loadAllTransactionData(data) {
        var currDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(this.currentDate, "dd-MM-yyyy HH:mm:ss");
        this.pdfService.createPdf(data, this.customerDetails, currDate);
    }
    shareAllTransactionData(event) {
        var currDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(this.currentDate, "dd-MM-yyyy HH:mm:ss");
        this.pdfService.sharePdf(event, this.customerDetails, currDate);
    }
};
TransactionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.NavController },
    { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_15__.Location },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService },
    { type: _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__.AndroidPermissions },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.Platform },
    { type: _awesome_cordova_plugins_file_ngx__WEBPACK_IMPORTED_MODULE_8__.File },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ToastController },
    { type: _services_trxn_pdf_doc_download_service__WEBPACK_IMPORTED_MODULE_2__.TrxnPdfDocDownloadService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ActionSheetController }
];
TransactionPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonInfiniteScroll,] }]
};
TransactionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
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

/***/ 34554:
/*!********************************************************************!*\
  !*** ./src/app/pages/transaction/transaction.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "ion-header .header {\n  display: flex;\n}\nion-header .header ion-icon {\n  font-size: x-large;\n}\nion-header .header_title {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\nion-header .header_title ion-title {\n  font-weight: 600;\n  text-align: left;\n  padding-left: 11%;\n  margin-top: 11px;\n}\nion-header .header_title ion-icon {\n  color: #5dade2;\n  padding-left: 323px;\n}\n::ng-deep .wider-popover-ext {\n  --width: 100%;\n  --max-width: 100%;\n  --offset-x: -12px;\n}\n.toolbar-bg {\n  margin-top: 0px;\n  background: rgba(31, 107, 255, 0.2) !important;\n  width: auto;\n  height: 60px;\n  padding: 1px;\n}\np {\n  font-size: 12px;\n}\n.selectAccId {\n  width: 100%;\n}\n.date_range ion-label {\n  padding: 0 4%;\n}\n.btnColumn {\n  display: flex;\n  justify-content: center;\n}\n.resetBtn {\n  background: #c0392b;\n  border-radius: 6px;\n  width: 175px;\n  height: 50px;\n}\n.shareIcon {\n  width: 50px;\n}\n.downloadBtn {\n  background: #5dade2;\n  border-radius: 6px;\n  width: 174px;\n  height: 50px;\n}\n.quickOption {\n  background-color: #8c0;\n  height: 80px;\n}\n.transactionCard {\n  min-height: 525px;\n  width: 100%;\n}\n#wrapper {\n  margin-left: auto;\n  margin-right: auto;\n  height: auto;\n  width: 75%;\n}\n.text-right {\n  text-align: end;\n}\n.secondary-text {\n  line-height: 1.5rem;\n  text-align: center;\n  color: #1f6bff !important;\n}\n.event {\n  flex-flow: row wrap;\n  box-sizing: border-box;\n  display: flex;\n}\n.cusNameClass {\n  font-size: small;\n}\n.cusHistoryContent {\n  color: #aba9a9;\n  font-size: 10px;\n}\n.email-icon {\n  color: #707070;\n  cursor: pointer;\n  float: right;\n  font-size: large;\n}\n.imgStyle {\n  margin-left: 10px;\n  margin-right: 10px;\n  height: 35px;\n  width: 30px;\n}\n.search-results {\n  height: 35rem;\n  overflow: scroll;\n}\n.dateLabel {\n  color: #5499c7;\n  font-weight: 400px;\n}\n.ion_list ion-label {\n  font-weight: 600;\n}\n.ion_list ion-label h3 {\n  font-size: 17px;\n  font-weight: 600;\n  line-height: 2;\n}\n.ion_list ion-label p {\n  font-size: 15px;\n  font-weight: 600;\n  color: #999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zYWN0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGFBQUE7QUFBSjtBQUdJO0VBQ0Usa0JBQUE7QUFETjtBQUlJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQUZOO0FBSU07RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUZSO0FBS007RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFIUjtBQVNBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFORjtBQVVBO0VBQ0UsZUFBQTtFQUNBLDhDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBUEY7QUFVQTtFQUNFLGVBQUE7QUFQRjtBQVVBO0VBQ0UsV0FBQTtBQVBGO0FBVUE7RUFDRSxhQUFBO0FBUEY7QUFVQTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBQVBGO0FBVUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFQRjtBQVVBO0VBQ0UsV0FBQTtBQVBGO0FBVUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFQRjtBQVVBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FBUEY7QUFVQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQVBGO0FBVUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFQRjtBQVVBO0VBQ0UsZUFBQTtBQVBGO0FBVUE7RUFDRSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0EseUJBQUE7QUFSRjtBQVdBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFSRjtBQWFBO0VBQ0UsZ0JBQUE7QUFWRjtBQWFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFWRjtBQWFBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFWRjtBQWFBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBVkY7QUFhQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQVZGO0FBYUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUFWRjtBQWNFO0VBQ0UsZ0JBQUE7QUFYSjtBQWFJO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQVhOO0FBY0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FBWk4iLCJmaWxlIjoidHJhbnNhY3Rpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgLmhlYWRlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgIC8vIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgfVxyXG5cclxuICAgICZfdGl0bGUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgaW9uLXRpdGxlIHtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxMSU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTFweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaW9uLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiAjNWRhZGUyO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMzIzcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAud2lkZXItcG9wb3Zlci1leHQge1xyXG4gIC0td2lkdGg6IDEwMCU7XHJcbiAgLS1tYXgtd2lkdGg6IDEwMCU7XHJcbiAgLS1vZmZzZXQteDogLTEycHg7XHJcbn1cclxuXHJcblxyXG4udG9vbGJhci1iZyB7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMzEsIDEwNywgMjU1LCAwLjIpICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHBhZGRpbmc6IDFweDtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uc2VsZWN0QWNjSWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uZGF0ZV9yYW5nZSBpb24tbGFiZWwge1xyXG4gIHBhZGRpbmc6IDAgNCU7XHJcbn1cclxuXHJcbi5idG5Db2x1bW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxufVxyXG5cclxuLnJlc2V0QnRuIHtcclxuICBiYWNrZ3JvdW5kOiAjYzAzOTJiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB3aWR0aDogMTc1cHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uc2hhcmVJY29uIHtcclxuICB3aWR0aDogNTBweFxyXG59XHJcblxyXG4uZG93bmxvYWRCdG4ge1xyXG4gIGJhY2tncm91bmQ6ICM1ZGFkZTI7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHdpZHRoOiAxNzRweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5xdWlja09wdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhjMDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbkNhcmQge1xyXG4gIG1pbi1oZWlnaHQ6IDUyNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jd3JhcHBlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogNzUlO1xyXG59XHJcblxyXG4udGV4dC1yaWdodCB7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5LXRleHQge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbiAgLy8gIGxpbmUtaGVpZ2h0OiAwLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMWY2YmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ldmVudCB7XHJcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIC8vIGhlaWdodDogNTI1cHg7XHJcbn1cclxuXHJcbi5jdXNOYW1lQ2xhc3Mge1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbi5jdXNIaXN0b3J5Q29udGVudCB7XHJcbiAgY29sb3I6ICNhYmE5YTk7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4uZW1haWwtaWNvbiB7XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4uaW1nU3R5bGUge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0cyB7XHJcbiAgaGVpZ2h0OiAzNXJlbTtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG59XHJcblxyXG4uZGF0ZUxhYmVsIHtcclxuICBjb2xvcjogIzU0OTljNztcclxuICBmb250LXdlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcbi5pb25fbGlzdCB7XHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgfVxyXG4gIH1cclxufSJdfQ== */";

/***/ }),

/***/ 80954:
/*!********************************************************************!*\
  !*** ./src/app/pages/transaction/transaction.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"header\">\r\n  <ion-buttons slot=\"start\">\r\n    <ion-button (click)=\"goBack()\">\r\n      <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" size=\"large\"></ion-icon>\r\n    </ion-button>\r\n  </ion-buttons>\r\n  <ion-title class=\"header_title\">My Transaction</ion-title>\r\n</ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-toolbar>\r\n    <div>\r\n      <ion-row>\r\n        <ion-col>\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-select class=\"selectAccId\" interface=\"popover\" placeholder=\"Select AccountId\"\r\n                [interfaceOptions]=\"{'cssClass': 'wider-popover-ext'}\"  (ionChange)=\"accountChange($event)\">\r\n                <ion-select-option *ngFor=\"let item of accountIdArray\" [value]=\"item\">\r\n                  {{item}} - {{accountInfo?.accountType}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-list>\r\n          <ion-list>\r\n            <ion-item>\r\n              <ion-select [interfaceOptions]=\"{'cssClass': 'wider-popover-ext'}\" class=\"selectAccId\" interface=\"popover\"\r\n                placeholder=\"Quick Options\" (ionChange)=\"OnselectQuickOption($event)\">\r\n                <ion-select-option *ngFor=\"let item of quickOptions\" [value]=\"item\">\r\n                  {{item.options}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </ion-item>\r\n          </ion-list>\r\n        </ion-col>\r\n      </ion-row>\r\n     \r\n      <ion-row>\r\n        <ion-col class=\"btnColumn\">\r\n          <ion-button (click)=\"reset(trxnArrayList,fromDate,toDate)\" color=\"light\" fill=\"outline\" class=\"resetBtn\">\r\n            <ion-icon name=\"share-social\" class=\"shareIcon\" (click)=\"reset(trxnArrayList,fromDate,toDate)\"></ion-icon>\r\n            Share Details\r\n          </ion-button>\r\n        </ion-col>\r\n        <ion-col class=\"btnColumn\">\r\n          <ion-button (click)=\"downloadPdf(trxnArrayList,fromDate,toDate)\" color=\"light\" class=\"downloadBtn\" fill=\"outline\">\r\n            <ion-icon name=\"add-outline\" (click)=\"downloadPdf(trxnArrayList,fromDate,toDate)\"></ion-icon>&nbsp; Download\r\n          </ion-button>\r\n        </ion-col>\r\n      </ion-row>\r\n    </div>\r\n  </ion-toolbar>\r\n  <div class=\"transactionCard\">\r\n    <div *ngIf=\"displayInfo\" class=\"text-center\">\r\n      <p>{{message}}</p>\r\n    </div>\r\n    <ion-list class=\"ion_list\">\r\n      <ion-item *ngFor=\"let trans of trxnArrayList;\" (click)=\"onClick(trans)\">\r\n        <!-- <ion-button slot=\"start\">\r\n        <ion-icon slot=\"icon-only\" name=\"wallet-outline\"></ion-icon>\r\n      </ion-button> -->\r\n\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-label>\r\n                <h3>{{ trans?.trnType }}</h3>\r\n                <p>\r\n                  <small> Ref No:{{ trans.transactionId }}-{{trans.transactionDate}}-{{\r\n                    trans.transactionTime }}\r\n                  </small>\r\n                </p>\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col class=\"ion-align-self-center\">\r\n              <ion-label\r\n                [color]=\"trans.trnType == 'Cash Withdrawal' || trans.trnType == 'Cheque Withdrawal' ? 'danger' : 'success'\"\r\n                class=\"text-xs text-right\">\r\n                <small> {{trans.transactionAmount |\r\n                  currency:trans.transactionCurrency:'symbol':'1.0-1'}}</small>\r\n              </ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"onScrollingFinished($event)\">\r\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n      </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n  </div>\r\n</ion-content>\r\n<app-footer></app-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_transaction_transaction_module_ts.js.map