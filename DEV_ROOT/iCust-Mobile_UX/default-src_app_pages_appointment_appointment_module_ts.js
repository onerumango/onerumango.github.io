"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_appointment_appointment_module_ts"],{

/***/ 1213:
/*!*****************************************************************!*\
  !*** ./src/app/pages/appointment/appointment-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentPageRoutingModule": () => (/* binding */ AppointmentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _appointment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appointment.page */ 96648);




const routes = [
    {
        path: '',
        component: _appointment_page__WEBPACK_IMPORTED_MODULE_0__.AppointmentPage
    }
];
let AppointmentPageRoutingModule = class AppointmentPageRoutingModule {
};
AppointmentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AppointmentPageRoutingModule);



/***/ }),

/***/ 43817:
/*!*********************************************************!*\
  !*** ./src/app/pages/appointment/appointment.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentPageModule": () => (/* binding */ AppointmentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _appointment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appointment-routing.module */ 1213);
/* harmony import */ var _appointment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appointment.page */ 96648);







let AppointmentPageModule = class AppointmentPageModule {
};
AppointmentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _appointment_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppointmentPageRoutingModule,
        ],
        declarations: [_appointment_page__WEBPACK_IMPORTED_MODULE_1__.AppointmentPage]
    })
], AppointmentPageModule);



/***/ }),

/***/ 96648:
/*!*******************************************************!*\
  !*** ./src/app/pages/appointment/appointment.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentPage": () => (/* binding */ AppointmentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _appointment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appointment.page.html?ngResource */ 25204);
/* harmony import */ var _appointment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appointment.page.scss?ngResource */ 87918);
/* harmony import */ var _services_trxn_pdf_doc_download_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/trxn-pdf-doc-download.service */ 72734);
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _appointmentpopup_appointmentpopup_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../appointmentpopup/appointmentpopup.page */ 14808);

















let AppointmentPage = class AppointmentPage {
    constructor(router, alertController, navCtrl, loadingService, modalCtrl, apiService, cdr, fb, location, shareDataService, pdfService, actionSheetController) {
        this.router = router;
        this.alertController = alertController;
        this.navCtrl = navCtrl;
        this.loadingService = loadingService;
        this.modalCtrl = modalCtrl;
        this.apiService = apiService;
        this.cdr = cdr;
        this.fb = fb;
        this.location = location;
        this.shareDataService = shareDataService;
        this.pdfService = pdfService;
        this.actionSheetController = actionSheetController;
        this.notToShowAll2 = false;
        this.displayInfo = false;
        this.users = [];
        this.page = 0;
        this.enableDate = false;
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
                options: '7 days',
                data: 'SEVENDAYS',
            },
            {
                id: 2,
                options: 'Current Month',
                data: 'CURRMONTH',
            },
            {
                id: 3,
                options: 'Last Month',
                data: 'LASTMONTH',
            },
            {
                id: 4,
                options: 'Last 3 Month',
                data: 'LASTTHREEMONTH',
            },
            {
                id: 5,
                options: 'Select Date Range',
                data: '',
            },
        ];
        this.noOfDaysList = Array.from({ length: 60 }, (v, k) => k + 1);
    }
    ngOnInit() {
        this.loginRespAccountId = localStorage.getItem('loginRespAccountId');
        this.phoneNumber = localStorage.getItem('customerPhonenum');
        this.accountsData = JSON.parse(localStorage.getItem('cardData'));
        this.loggedInCust = sessionStorage.getItem('customer_id');
        this.accountsData.forEach((v, k) => {
            this.accountIdArray.push(v.accountId);
        });
        console.log(this.accountIdArray);
        this.shareDataService.getAccountInfo.subscribe((data) => {
            this.accountInfo = data;
            if (this.accountInfo != null && this.accountInfo != undefined) {
                this.accountNumber = this.accountInfo.accountId;
            }
        });
        this.loadData();
        this.appointmentForm = this.fb.group({
            accountNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            filterOption: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            fromDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            toDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
            customerId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
        });
        // this.getAppointmentByCustomerId('onload',null,null,null,null,null,null);
        this.getAppointmentByCustomerId('', this.loggedInCust, '');
        // this.getTransactionByAccountId('onload', 0, '', null, null, 20);
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
    openActionSheet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                // header: 'Albums',
                // subHeader: 'Subtitle',
                animated: false,
                backdropDismiss: false,
                cssClass: 'my-custom-class',
                mode: 'ios',
                buttons: [
                    {
                        text: 'Completed',
                        // icon: 'share',
                        handler: () => {
                            this.trxnArrayList = this.transactionDataArr.filter((trans) => trans.tokenStatus === 'COMPLETED');
                        },
                    },
                    {
                        text: 'Failed',
                        // icon: 'share',
                        handler: () => {
                            this.trxnArrayList = this.transactionDataArr.filter((trans) => trans.tokenStatus === 'FAILED');
                            // this.selectAction('CANCELED');
                        },
                    },
                    {
                        text: 'In Progress',
                        // icon: 'share',
                        handler: () => {
                            // this.selectAction('CANCELED');
                            this.trxnArrayList = this.transactionDataArr.filter((trans) => trans.appointmentStatus === 'INPROGRESS');
                        },
                    },
                    {
                        text: 'Scheduled',
                        // icon: 'share',
                        handler: () => {
                            // this.selectAction('CANCELED');
                            this.trxnArrayList = this.transactionDataArr.filter((trans) => trans.appointmentStatus === 'SCHEDULED');
                        },
                    },
                    {
                        text: 'Cancelled',
                        // icon: 'share',
                        handler: () => {
                            // this.selectAction('CANCELED');
                            this.trxnArrayList = this.transactionDataArr.filter((trans) => trans.appointmentStatus === 'CANCELED');
                        },
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        // icon: 'share',
                        handler: () => {
                            this.trxnArrayList = this.transactionDataArr.filter((trans) => trans.appointmentStatus === 'CANCEL');
                        },
                    },
                ],
            });
            yield actionSheet.present();
        });
    }
    //   onSelectAccountId(event){
    //     console.log(event.target.value);
    //     this.accountIdNum=event.target.value;
    //     this.fetchAppointmentsInfoandFilter(null,null,null,this.loggedInCust,this.accountIdNum);
    // }
    // fetchAppointmentsInfoandFilter(filterOption?:any,fromDate?:any,toDate?:any,customerId?:any,accountNumber?:any){
    //   console.log(filterOption,fromDate,toDate,customerId,accountNumber);
    // }
    selectAction(action) {
        console.log(action, "Action");
        console.log(this.transactionDataArr, "Appointment List");
        console.log(this.transactionDataArr[0].appointmentStatus);
        let filterArray = [];
        console.log(filterArray, "Before push");
        for (let i = 0; i < this.transactionDataArr.length; i++) {
            // if(this.transactionDataArr[i].appointmentStatus){
            if (action == this.transactionDataArr[i].appointmentStatus) {
                console.log(i);
                filterArray.push(this.transactionDataArr[i]);
            }
            // }
        }
        this.trxnArrayList = filterArray;
        console.log(this.trxnArrayList, "Array list");
        // this.transactionDataArr=filterArray;
        console.log(filterArray, "After push");
    }
    OnselectQuickOption(event, val) {
        // this.getAppointmentByCustomerId('quickOption',null,this.filterOptions,null,null,this.loggedInCust,null);
        // this.fetchAppointmentsInfoandFilter(this.filterOptions,null,null,this.loggedInCust,this.accountIdNum);
        if (event.target.value.options == 'Select Date Range') {
            this.addCustomTask();
        }
        else {
            this.getAppointmentByCustomerId(val, this.loggedInCust, null);
            this.filterOptions = event.target.value.data;
        }
    }
    addCustomTask() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _daterange_daterange_page__WEBPACK_IMPORTED_MODULE_6__.DaterangePage,
                cssClass: 'small-modal',
            });
            modal.onDidDismiss().then((modelData) => {
                this.enableDate = true;
                return this.appointmentForm.patchValue({
                    fromDate: [(new Date(modelData.data)).toJSON(), [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                    toDate: [(new Date(modelData.role)).toJSON(), [_angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required]],
                });
            });
            return yield modal.present();
        });
    }
    // async addCustomTask() {
    //   console.log("addCustomTask");
    //   const alert = await this.alertController.create({
    //     header: 'Duration',
    //     cssClass:'alertCancel',
    //     inputs: [
    //       {
    //         name: 'selectdaterange',
    //         type: 'text',
    //         placeholder: 'Select date range',
    //         disabled:true
    //       },
    //       {
    //         name: 'task',
    //         type: 'date',
    //         placeholder: 'From date'
    //       },
    //       {
    //         name: 'To Date',
    //         type: 'date',
    //         placeholder: 'To date'
    //       }
    //     ],
    //     buttons: [
    //       {
    //         text: 'Confirm',
    //         role: 'cancel',
    //         cssClass: 'primary',
    //         // handler: () => {
    //         //   return false;
    //         // }
    //       },
    //       {
    //         text: 'Cancel',
    //         role: 'cancel',
    //         cssClass: 'secondary',
    //         // handler: () => {
    //         //   return false;
    //         // }
    //       },
    //     ]
    //   });
    //   await alert.present();
    //   };
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
            const formatFromDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(d, 'yyyy-MM-dd');
            this.fromDate = formatFromDate;
            const formatToDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(this.currentDate, 'yyyy-MM-dd');
            this.toDate = formatToDate;
            console.log('formatFromDate :: ', formatFromDate, ' ::formatToDate::  ', formatToDate);
            this.isNoOfDays = true;
        }
    }
    // getAppointmentByCustomerId(dataLoad,event,filterOption?:any,fromDate?:any,toDate?:any,customerId?:any,accountNumber?:any) {
    getAppointmentByCustomerId(Value, custId, accId) {
        console.log(Value);
        if (Value.filterOption) {
            Value.filterOption = Value.filterOption.data;
        }
        if (Value.fromDate) {
            Value.fromDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(Value.fromDate), 'yyyy-MM-dd');
        }
        if (Value.toDate) {
            Value.toDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(Value.toDate), 'yyyy-MM-dd');
            // Value.toDate='2022-11-12';
        }
        this.loadingService.present();
        this.apiService
            .fetchAppointmentInfo(Value.filterOption, Value.fromDate, Value.toDate, custId, accId)
            .subscribe((data) => {
            this.loadingService.dismiss();
            if (data != null || data != undefined) {
                this.displayInfo = false;
                console.log('data:::', data);
                this.originalTransArr = data;
                // if (Value.fromDate != null && Value.dataLoad != 'download') {
                //   if (this.page == 0) {
                //     // console.log('from date not null :: ',formattedFromDate);
                //     this.transactionDataArr = [];
                //     this.trxnArrayList = [];
                //   }
                // }
                // if (dataLoad != 'download') {
                console.log('onload........');
                this.transactionDataArr = data.data;
                console.log(this.transactionDataArr);
                this.totalElements = data;
                if (this.transactionDataArr == null) {
                    this.trxnArrayList = [];
                }
                console.log(this.trxnArrayList);
                if (this.transactionDataArr != null) {
                    this.trxnArrayList = [];
                    this.pushArray(this.trxnArrayList, this.transactionDataArr);
                }
                // }
                // if (dataLoad === 'download') {
                //   // this.transactionDataArr = [];
                //   // this.trxnArrayList = [];
                //   this.loadAllTransactionData(data);
                // }
                // if (dataLoad === 'scroll') {
                //   event.target.disabled = false;
                // }
            }
            else {
                console.log('else part.....');
                this.transactionDataArr = [];
                this.trxnArrayList = [];
                if (this.trxnArrayList.length == 0) {
                    this.displayInfo = true;
                    this.message = 'There are no transactions to display';
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
                this.message = 'There are no transactions to display';
            }
        });
    }
    getTransactionByAccountId(dataLoad, page, event, formattedFromDate, formattedToDate, size) {
        this.loadingService.present();
        this.loggedInCust = sessionStorage.getItem('customer_id');
        this.page = page;
        // console.log("Logged In Customer -- ", this.loggedInCust);
        this.apiService
            .getTransactionByAccountId(this.loginRespAccountId, this.page, formattedFromDate, formattedToDate, size)
            .subscribe((data) => {
            this.loadingService.dismiss();
            if (data != null || data != undefined) {
                console.log('!st Iff condition.....');
                this.displayInfo = false;
                console.log('data:::', data);
                this.originalTransArr = data;
                if (formattedFromDate != null && dataLoad != 'download') {
                    if (this.page == 0) {
                        // console.log('from date not null :: ',formattedFromDate);
                        this.transactionDataArr = [];
                        this.trxnArrayList = [];
                    }
                }
                if (dataLoad != 'download') {
                    console.log('from date not null');
                    this.transactionDataArr = data;
                    this.totalElements = data;
                    this.pushArray(this.trxnArrayList, this.transactionDataArr);
                }
                if (dataLoad === 'download') {
                    // this.transactionDataArr = [];
                    // this.trxnArrayList = [];
                    this.loadAllTransactionData(data);
                }
                if (dataLoad === 'scroll') {
                    event.target.disabled = false;
                }
            }
            else {
                console.log('else part.....');
                this.transactionDataArr = [];
                this.trxnArrayList = [];
                if (this.trxnArrayList.length == 0) {
                    this.displayInfo = true;
                    this.message = 'There are no transactions to display';
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
                this.message = 'There are no transactions to display';
            }
        });
    }
    pushArray(arr, arr2) {
        console.log('--push array--');
        arr.push.apply(arr, arr2);
        console.log('trxnArrayList:::', arr);
        // Format of this.formattedFromDate and this.formattedToDate = 2022-10-12T12:59:49
        if (this.formattedFromDate && this.formattedToDate) {
            const fromDate = this.formattedFromDate.split('T')[0];
            const toDate = this.formattedToDate.split('T')[0];
            this.trxnArrayList = arr.filter((list) => list.accountNumber == this.accountIdArrayVal &&
                list.transactionDate >= fromDate &&
                list.transactionDate <= toDate);
            this.trxnArrayList.map((i) => console.log('trnx date', i.transactionDate));
        }
        else {
            console.log('ghj');
            this.trxnArrayList = arr;
        }
        this.cdr.markForCheck();
        this.cdr.detectChanges();
    }
    onScrollingFinished(event) {
        // console.log('event  called when scrolled :: ', event)
        event.target.complete();
        console.log('Page : ', this.page);
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
        var currDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(this.currentDate, 'yyyy-MM-dd');
        if (!isNoOfDays) {
            const formattedFromDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(this.fromDate), "yyyy-MM-dd'T'HH:mm:ss");
            this.formattedFromDate = formattedFromDate;
            // console.log('fromDate :: ',this.formattedFromDate);
            const formattedToDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(this.toDate), "yyyy-MM-dd'T'HH:mm:ss");
            this.formattedToDate = formattedToDate;
            formatFromDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(this.fromDate), 'yyyy-MM-dd');
            formatToDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(this.toDate), 'yyyy-MM-dd');
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
        if (!isNoOfDays && formatToDate < formatFromDate) {
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
            this.getTransactionByAccountId('dateBase', 0, '', this.formattedFromDate, this.formattedToDate, 20);
        }
    }
    checktoDate(val) {
        console.log(val);
        this.getAppointmentByCustomerId(val, this.loggedInCust, null);
        // this.getAppointmentByCustomerId('fromDate','',val.filterOption,val.fromDate,val.toDate,this.loggedInCust,this.accountNumber);
        // var currDate = format(this.currentDate, 'yyyy-MM-dd');
        // this.formattedFromDate = format(parseISO(event.target.value), 'yyyy-MM-dd');
        // console.log('formatted:: ', currDate, this.formattedFromDate);
        // this.fromDateVal = parseISO(this.fromDate).toISOString();
        // this.toDate = '';
    }
    checkToDate(event) {
        console.log(event.target.value);
        var currDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(this.currentDate, 'yyyy-MM-dd');
        this.formattedToDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(event.target.value), 'yyyy-MM-dd');
        console.log('formatted:: ', currDate, this.formattedToDate);
        this.fromDateVal = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(this.fromDate).toISOString();
        this.toDate = '';
        // this.getAppointmentByCustomerId('fromDate','','',this.formattedFromDate,this.formattedToDate,this.loggedInCust,this.accountIdNum);
    }
    openAlert(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                message: `${message}`,
                backdropDismiss: false,
                cssClass: 'example-alert',
                buttons: [
                    {
                        text: 'Ok',
                    },
                ],
            });
            yield alert.present();
        });
    }
    reset() {
        this.trxnArrayList = [];
        this.fromDate = null;
        this.toDate = null;
        this.accountIdArrayVal = '';
        this.selectNoOfDaysVal = 0;
        this.loginRespAccountId = localStorage.getItem('loginRespAccountId');
        this.getTransactionByAccountId('onload', 0, '', null, null, 20);
    }
    getYesterdayDate() {
        return new Date(new Date().getTime() - 24 * 60 * 60 * 1000);
    }
    toggleInfiniteScroll() {
        this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
    }
    loadData() {
        this.loadingService.present();
        this.apiService.custpomerDetails(this.phoneNumber).subscribe((resp) => {
            this.loadingService.dismiss();
            console.log('backend resp in home', resp);
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log(event);
            let modal = yield this.modalCtrl.create({
                component: _appointmentpopup_appointmentpopup_page__WEBPACK_IMPORTED_MODULE_7__.AppointmentpopupPage,
                componentProps: {
                    value: event,
                },
            });
            modal.onDidDismiss().then((modelData) => {
                this.getAppointmentByCustomerId('', this.loggedInCust, '');
            });
            return yield modal.present();
        });
    }
    // const modal = await modalController.create({ component: UploadPage });
    // const { data } = await modal.onDidDismiss();
    // if (data) {
    //    this.getData();
    // }
    downloadPdf(trxnArrayList, fromDate, toDate) {
        console.log('inside download pdf', trxnArrayList, fromDate, toDate);
        if (fromDate == undefined || fromDate == null) {
            this.getTransactionByAccountId('download', 0, '', null, null, this.totalElements);
        }
        else {
            this.getTransactionByAccountId('download', 0, '', this.formattedFromDate, this.formattedToDate, this.totalElements);
        }
    }
    loadAllTransactionData(data) {
        var currDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_10__["default"])(this.currentDate, 'dd-MM-yyyy HH:mm:ss');
        this.pdfService.createPdf(data, this.customerDetails, currDate);
    }
};
AppointmentPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.NavController },
    { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ModalController },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ChangeDetectorRef },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_15__.Location },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService },
    { type: _services_trxn_pdf_doc_download_service__WEBPACK_IMPORTED_MODULE_2__.TrxnPdfDocDownloadService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_13__.ActionSheetController }
];
AppointmentPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_14__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_13__.IonInfiniteScroll,] }]
};
AppointmentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.Component)({
        selector: 'app-appointment',
        template: _appointment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_appointment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppointmentPage);



/***/ }),

/***/ 87918:
/*!********************************************************************!*\
  !*** ./src/app/pages/appointment/appointment.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "ion-header .header {\n  padding: 6% 8% 6% 3%;\n  display: flex;\n}\nion-header .header ion-icon {\n  font-size: larger;\n}\nion-header .header_title {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\nion-header .header_title ion-title {\n  font-weight: bold;\n  text-align: left;\n  padding-left: 11%;\n  margin-top: -5px;\n}\nion-header .header_title ion-icon {\n  color: #5dade2;\n  padding-top: 5px;\n}\n.dateField {\n  border: none;\n  width: 150px;\n}\n.selectAccId {\n  width: 100%;\n}\n.shareIcon {\n  width: 50px;\n}\n.date_range ion-label {\n  padding: 0 4%;\n}\n.dateLabel {\n  color: #5499c7;\n  font-weight: 400px;\n}\n.resetBtn {\n  background: #c0392b;\n  border-radius: 6px;\n  width: 175px;\n  height: 50px;\n}\n.downloadBtn {\n  background: #5dade2;\n  border-radius: 6px;\n  width: 174px;\n  height: 50px;\n}\n.btnColumn {\n  display: flex;\n  justify-content: center;\n}\n.statuscls {\n  font-size: 10px;\n}\n.quickOption {\n  background-color: #8c0;\n  height: 80px;\n}\n.toolbar-bg {\n  margin-top: 0px;\n  background: rgba(31, 107, 255, 0.2) !important;\n  width: auto;\n  height: 60px;\n  padding: 1px;\n}\np {\n  font-size: 12px;\n}\n.transactionCard {\n  min-height: 525px;\n  width: 100%;\n}\n#wrapper {\n  margin-left: auto;\n  margin-right: auto;\n  height: auto;\n  width: 75%;\n}\n.text-right {\n  text-align: end;\n}\n.secondary-text {\n  line-height: 1.5rem;\n  text-align: center;\n  color: #1f6bff !important;\n}\n.event {\n  flex-flow: row wrap;\n  box-sizing: border-box;\n  display: flex;\n}\n.cusNameClass {\n  font-size: small;\n}\n.cusHistoryContent {\n  color: #aba9a9;\n  font-size: 10px;\n}\n.email-icon {\n  color: #707070;\n  cursor: pointer;\n  float: right;\n  font-size: large;\n}\n.imgStyle {\n  margin-left: 10px;\n  margin-right: 10px;\n  height: 35px;\n  width: 30px;\n}\n.search-results {\n  height: 35rem;\n  overflow: scroll;\n}\n.dateLabel {\n  color: #5499c7;\n  font-weight: 400px;\n}\n.ion_list ion-label {\n  font-weight: bold;\n}\n.ion_list ion-label h3 {\n  font-size: 17px;\n  font-weight: bold;\n  line-height: 2;\n}\n.ion_list ion-label p {\n  font-size: 15px;\n  font-weight: bold;\n  color: #999;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcG9pbnRtZW50LnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdEh1YiUyMFJlcG9zaXRvcnklMjBvbGRcXGlDdXN0TW9iaWxlLXYyXFxzcmNcXGFwcFxccGFnZXNcXGFwcG9pbnRtZW50XFxhcHBvaW50bWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxvQkFBQTtFQUNBLGFBQUE7QUNBSjtBREdJO0VBQ0UsaUJBQUE7QUNETjtBRElJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQ0ZOO0FESU07RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0ZSO0FES007RUFDRSxjQUFBO0VBRUEsZ0JBQUE7QUNKUjtBRFVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNQRjtBRFVBO0VBQ0UsV0FBQTtBQ1BGO0FEVUE7RUFDRSxXQUFBO0FDUEY7QURVQTtFQUNFLGFBQUE7QUNQRjtBRFVBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDUEY7QURVQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ1BGO0FEVUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNQRjtBRFVBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0FDUEY7QURTQTtFQUNFLGVBQUE7QUNORjtBRFFBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0FDTEY7QURRQTtFQUNFLGVBQUE7RUFDQSw4Q0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0xGO0FEUUE7RUFDRSxlQUFBO0FDTEY7QURRQTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQ0xGO0FEUUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUNMRjtBRFFBO0VBQ0UsZUFBQTtBQ0xGO0FEUUE7RUFDRSxtQkFBQTtFQUVBLGtCQUFBO0VBQ0EseUJBQUE7QUNORjtBRFNBO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNORjtBRFdBO0VBQ0UsZ0JBQUE7QUNSRjtBRFdBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNSRjtBRFdBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNSRjtBRFdBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FDUkY7QURXQTtFQUNFLGFBQUE7RUFDQSxnQkFBQTtBQ1JGO0FEV0E7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNSRjtBRFlFO0VBQ0UsaUJBQUE7QUNUSjtBRFdJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtBQ1ROO0FEWUk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDVk4iLCJmaWxlIjoiYXBwb2ludG1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgLmhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiA2JSA4JSA2JSAzJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgIH1cclxuXHJcbiAgICAmX3RpdGxlIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIGlvbi10aXRsZSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDExJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgY29sb3I6ICM1ZGFkZTI7XHJcbiAgICAgICAgLy8gcGFkZGluZy1sZWZ0OiAzMjNweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uZGF0ZUZpZWxkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4uc2VsZWN0QWNjSWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uc2hhcmVJY29uIHtcclxuICB3aWR0aDogNTBweFxyXG59XHJcblxyXG4uZGF0ZV9yYW5nZSBpb24tbGFiZWwge1xyXG4gIHBhZGRpbmc6IDAgNCU7XHJcbn1cclxuXHJcbi5kYXRlTGFiZWwge1xyXG4gIGNvbG9yOiAjNTQ5OWM3O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDBweDtcclxufVxyXG5cclxuLnJlc2V0QnRuIHtcclxuICBiYWNrZ3JvdW5kOiAjYzAzOTJiO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB3aWR0aDogMTc1cHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uZG93bmxvYWRCdG4ge1xyXG4gIGJhY2tncm91bmQ6ICM1ZGFkZTI7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHdpZHRoOiAxNzRweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5idG5Db2x1bW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXJcclxufVxyXG4uc3RhdHVzY2xze1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4ucXVpY2tPcHRpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YzA7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG59XHJcblxyXG4udG9vbGJhci1iZyB7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMzEsIDEwNywgMjU1LCAwLjIpICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIHBhZGRpbmc6IDFweDtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4udHJhbnNhY3Rpb25DYXJkIHtcclxuICBtaW4taGVpZ2h0OiA1MjVweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuI3dyYXBwZXIge1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgd2lkdGg6IDc1JTtcclxufVxyXG5cclxuLnRleHQtcmlnaHQge1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG5cclxuLnNlY29uZGFyeS10ZXh0IHtcclxuICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG4gIC8vICBsaW5lLWhlaWdodDogMC41cmVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzFmNmJmZiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZXZlbnQge1xyXG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAvLyBoZWlnaHQ6IDUyNXB4O1xyXG59XHJcblxyXG4uY3VzTmFtZUNsYXNzIHtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcblxyXG4uY3VzSGlzdG9yeUNvbnRlbnQge1xyXG4gIGNvbG9yOiAjYWJhOWE5O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLmVtYWlsLWljb24ge1xyXG4gIGNvbG9yOiAjNzA3MDcwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiBsYXJnZTtcclxufVxyXG5cclxuLmltZ1N0eWxlIHtcclxuICBtYXJnaW4tbGVmdDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIHdpZHRoOiAzMHB4O1xyXG59XHJcblxyXG4uc2VhcmNoLXJlc3VsdHMge1xyXG4gIGhlaWdodDogMzVyZW07XHJcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcclxufVxyXG5cclxuLmRhdGVMYWJlbCB7XHJcbiAgY29sb3I6ICM1NDk5Yzc7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG4uaW9uX2xpc3Qge1xyXG4gIGlvbi1sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogIzk5OTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLy8gLmNvbnN0cnVjdGVkIHN0eWxlc2hlZXRcclxuXHJcbi8vIC5jb25zdHJ1Y3RlZCBzdHlsZXNoZWV0XHJcbi8vIDpob3N0IGJ1dHRvbiB7XHJcbiBcclxuLy8gICAtLXBhZGRpbmctaW5saW5lOiBub25lICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLy8gOmhvc3QgYnV0dG9uIHtcclxuLy8gaW9uLWRhdGV0aW1lLWJ1dHRvbiB7XHJcbi8vICAgcGFkZGluZy1pbmxpbmU6IG5vbmU7XHJcbi8vICAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IG5vbmU7XHJcbi8vICAgcGFkZGluZy1pbmxpbmUtZW5kOiBub25lO1xyXG4vLyB9XHJcbiIsImlvbi1oZWFkZXIgLmhlYWRlciB7XG4gIHBhZGRpbmc6IDYlIDglIDYlIDMlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuaW9uLWhlYWRlciAuaGVhZGVyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG59XG5pb24taGVhZGVyIC5oZWFkZXJfdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWhlYWRlciAuaGVhZGVyX3RpdGxlIGlvbi10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDExJTtcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cbmlvbi1oZWFkZXIgLmhlYWRlcl90aXRsZSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNWRhZGUyO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG4uZGF0ZUZpZWxkIHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5zZWxlY3RBY2NJZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2hhcmVJY29uIHtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5kYXRlX3JhbmdlIGlvbi1sYWJlbCB7XG4gIHBhZGRpbmc6IDAgNCU7XG59XG5cbi5kYXRlTGFiZWwge1xuICBjb2xvcjogIzU0OTljNztcbiAgZm9udC13ZWlnaHQ6IDQwMHB4O1xufVxuXG4ucmVzZXRCdG4ge1xuICBiYWNrZ3JvdW5kOiAjYzAzOTJiO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHdpZHRoOiAxNzVweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uZG93bmxvYWRCdG4ge1xuICBiYWNrZ3JvdW5kOiAjNWRhZGUyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHdpZHRoOiAxNzRweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uYnRuQ29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zdGF0dXNjbHMge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5xdWlja09wdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4YzA7XG4gIGhlaWdodDogODBweDtcbn1cblxuLnRvb2xiYXItYmcge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzEsIDEwNywgMjU1LCAwLjIpICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBhZGRpbmc6IDFweDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRyYW5zYWN0aW9uQ2FyZCB7XG4gIG1pbi1oZWlnaHQ6IDUyNXB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuI3dyYXBwZXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiA3NSU7XG59XG5cbi50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG4uc2Vjb25kYXJ5LXRleHQge1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMWY2YmZmICFpbXBvcnRhbnQ7XG59XG5cbi5ldmVudCB7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jdXNOYW1lQ2xhc3Mge1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4uY3VzSGlzdG9yeUNvbnRlbnQge1xuICBjb2xvcjogI2FiYTlhOTtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uZW1haWwtaWNvbiB7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLmltZ1N0eWxlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMzBweDtcbn1cblxuLnNlYXJjaC1yZXN1bHRzIHtcbiAgaGVpZ2h0OiAzNXJlbTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLmRhdGVMYWJlbCB7XG4gIGNvbG9yOiAjNTQ5OWM3O1xuICBmb250LXdlaWdodDogNDAwcHg7XG59XG5cbi5pb25fbGlzdCBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5pb25fbGlzdCBpb24tbGFiZWwgaDMge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMjtcbn1cbi5pb25fbGlzdCBpb24tbGFiZWwgcCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjOTk5O1xufSJdfQ== */";

/***/ }),

/***/ 25204:
/*!********************************************************************!*\
  !*** ./src/app/pages/appointment/appointment.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header >\r\n  <ion-toolbar>\r\n    <div class=\"header\">\r\n      <ion-icon name=\"chevron-back-outline\" size=\"large\" (click)=\"goBack()\"></ion-icon>\r\n      <div class=\"header_title\">\r\n        <ion-title>Appointment History</ion-title>\r\n          <ion-icon name=\"funnel-outline\" (click)=\"openActionSheet()\"></ion-icon>\r\n     \r\n      </div>\r\n    </div>\r\n  </ion-toolbar>\r\n  \r\n</ion-header>\r\n\r\n<div>\r\n  <form [formGroup]=\"appointmentForm\">\r\n  <ion-row *ngIf=\"enableDate\">\r\n    <ion-col class=\"date_range\">\r\n      <ion-label position=\"floating\" class=\"dateLabel\">From date</ion-label>\r\n      <ion-item>\r\n        <!--  [max]=\"currentDate2\"  -->\r\n        <ion-datetime-button datetime=\"datetime1\" showTimeLabel=\"false\"></ion-datetime-button>\r\n        <ion-modal [keepContentsMounted]=\"true\">\r\n          <ng-template>\r\n            <ion-datetime\r\n            presentation=\"date\"\r\n            id=\"datetime1\"\r\n            [max]=\"currentDate2\"\r\n            formControlName=\"fromDate\"\r\n            \r\n            displayFormat=\"DDD. MMM DD, YY\"\r\n            ></ion-datetime>\r\n          </ng-template>\r\n         \r\n        </ion-modal>\r\n        <ion-icon name=\"calendar\" slot=\"end\"></ion-icon>\r\n        <!-- <ion-datetime\r\n          presentation=\"fromDate\"\r\n          [(ngModel)]=\"fromDate\"\r\n          [max]=\"currentDate2\"\r\n          (ionChange)=\"checkFromDate($event)\"\r\n        ></ion-datetime> -->\r\n      </ion-item>\r\n    </ion-col>\r\n    <ion-col class=\"date_range\">\r\n      <ion-label position=\"floating\" class=\"dateLabel\">To date</ion-label>\r\n      <ion-item>\r\n        <!-- [min]=\"fromDateVal\" [max]=\"currentDate2\" -->\r\n        <ion-datetime-button datetime=\"datetime\" showTimeLabel=\"false\"></ion-datetime-button>\r\n        <ion-modal [keepContentsMounted]=\"true\">\r\n          <ng-template>\r\n            <ion-datetime\r\n            presentation=\"date\"\r\n            id=\"datetime\"\r\n            [max]=\"currentDate2\"\r\n            formControlName=\"toDate\"\r\n            (ionChange)=\"checktoDate(appointmentForm.value)\"\r\n            displayFormat=\"DDD. MMM DD, YY\"\r\n            ></ion-datetime>\r\n          </ng-template>\r\n        \r\n        </ion-modal>\r\n        <ion-icon name=\"calendar\" slot=\"end\"></ion-icon>\r\n       \r\n        <!-- <ion-datetime\r\n          [(ngModel)]=\"toDate\"\r\n          [max]=\"currentDate2\"\r\n          (ionChange)=\"changed($event,isNoOfDays)\"\r\n        ></ion-datetime> -->\r\n      </ion-item>\r\n    </ion-col>\r\n  </ion-row>\r\n   <ion-row>\r\n    <ion-col>\r\n      <ion-list>\r\n        <ion-item>\r\n          <ion-select class=\"selectAccId\" interface=\"popover\"  formControlName=\"filterOption\" placeholder=\"Quick Options\" (ionChange)=\"OnselectQuickOption($event,appointmentForm.value)\">\r\n            <ion-select-option *ngFor=\"let item of quickOptions\" [value]=\"item\">\r\n                <div class=\"select_option\" class=\"quickOption\" >\r\n                  <div class=\"acc_num\" >{{item.options}}</div>\r\n                </div>\r\n              </ion-select-option>\r\n          </ion-select>\r\n        </ion-item>\r\n      </ion-list>\r\n    </ion-col>\r\n  </ion-row> \r\n\r\n  <ion-row>\r\n    <ion-col>\r\n    \r\n    </ion-col>\r\n    <ion-col>\r\n    </ion-col>\r\n  </ion-row>\r\n  <!-- <ion-row>\r\n    <ion-col class=\"btnColumn\">\r\n      <ion-button\r\n        (click)=\"reset()\"\r\n        color=\"light\"\r\n        fill=\"outline\"\r\n        class=\"resetBtn\"\r\n      >\r\n        <ion-icon name=\"share-social\" class=\"shareIcon\" (click)=\"reset()\"></ion-icon> \r\n       Share Details\r\n      </ion-button>\r\n    </ion-col>\r\n    <ion-col class=\"btnColumn\">\r\n      <ion-button\r\n        (click)=\"downloadPdf(trxnArrayList,fromDate,toDate)\"\r\n        class=\"downloadBtn\"\r\n        color=\"light\"\r\n        fill=\"outline\"\r\n      >\r\n        <ion-icon\r\n          name=\"add-outline\"\r\n          (click)=\"downloadPdf(trxnArrayList,fromDate,toDate)\"\r\n        ></ion-icon\r\n        >&nbsp; Download\r\n      </ion-button>\r\n    </ion-col>\r\n  </ion-row> -->\r\n  <!-- <ion-col > -->\r\n  <!-- <ion-item style=\"margin-top:5px; color:red; border-radius: 10px;\"> -->\r\n\r\n  <!-- </ion-item> -->\r\n  <!-- <ion-item style=\"margin-top:5px; color:red; border-radius: 10px;\"> -->\r\n\r\n  <!-- </ion-item> -->\r\n  <!-- </ion-col> -->\r\n</form>\r\n</div>\r\n\r\n<ion-content>\r\n  <div class=\"transactionCard\">\r\n    <div *ngIf=\"displayInfo\">\r\n      <p>{{message}}</p>\r\n    </div>\r\n    <ion-list class=\"ion_list\">\r\n      <ion-item *ngFor=\"let trans of trxnArrayList;\" (click)=\"onClick(trans)\">\r\n        <!-- <ion-button slot=\"start\">\r\n        <ion-icon slot=\"icon-only\" name=\"wallet-outline\"></ion-icon>\r\n      </ion-button> -->\r\n\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-label>\r\n                <h3>{{trans.trnType}}</h3>\r\n                <p>\r\n                  Ref No:{{ trans.transactionId }}-{{trans.transactionDate}}-{{\r\n                  trans.creatorDtStamp }}\r\n                </p>\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col class=\"ion-align-self-center\">\r\n              <ion-label\r\n                [color]=\"trans.appointmentStatus == 'COMPLETED' || trans.appointmentStatus == 'SCHEDULED' ? 'success' : 'danger'\"\r\n                class=\"text-xs text-right\"\r\n              >\r\n                {{trans.transactionAmount |\r\n                currency:trans.transactionCurrency:'symbol':'1.0-1'}} <br>\r\n               <p class=\"statuscls\">{{trans.appointmentStatus}}</p> \r\n              </ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-infinite-scroll\r\n      threshold=\"100px\"\r\n      (ionInfinite)=\"onScrollingFinished($event)\"\r\n    >\r\n      <ion-infinite-scroll-content\r\n        loadingSpinner=\"bubbles\"\r\n        loadingText=\"Loading more data...\"\r\n      >\r\n      </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n  </div>\r\n</ion-content>\r\n<!-- <app-footer></app-footer> -->";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_appointment_appointment_module_ts.js.map