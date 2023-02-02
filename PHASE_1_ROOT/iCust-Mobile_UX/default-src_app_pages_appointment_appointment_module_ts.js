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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _appointment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appointment-routing.module */ 1213);
/* harmony import */ var _appointment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appointment.page */ 96648);
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/components/components.module */ 45642);








let AppointmentPageModule = class AppointmentPageModule {
};
AppointmentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_2__.ComponentsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _appointment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appointment.page.html?ngResource */ 25204);
/* harmony import */ var _appointment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appointment.page.scss?ngResource */ 87918);
/* harmony import */ var _services_trxn_pdf_doc_download_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/trxn-pdf-doc-download.service */ 72734);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/loading.service */ 4471);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! date-fns */ 86712);
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! date-fns */ 86527);
/* harmony import */ var _daterange_daterange_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../daterange/daterange.page */ 36675);
/* harmony import */ var _appointmentpopup_appointmentpopup_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../appointmentpopup/appointmentpopup.page */ 14808);
/* harmony import */ var _token_v2_token_v2_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../token-v2/token-v2.page */ 68106);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);


















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
        this.trnxArrCopy = [];
        this.trxnArrayList = [];
        this.transactionDataArrDownLoad = [];
        this.accountsData = [];
        this.accountIdArray = [];
        this.noOfDaysList = [];
        this.isNoOfDays = false;
        this.originalTransArr = [];
        this.quickOptions = [
            {
                id: 0,
                options: "Recent Transaction"
            },
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
        this.loggedInCust = sessionStorage.getItem('customer_id') || localStorage.getItem('customer_id');
        this.shareDataService.getAccountInfo.subscribe((data) => {
            this.accountInfo = data;
            if (this.accountInfo != null && this.accountInfo != undefined) {
                this.accountNumber = this.accountInfo.accountId;
            }
        });
        this.loadData();
        this.appointmentForm = this.fb.group({
            accountNumber: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            filterOption: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            fromDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            toDate: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
            customerId: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
        });
        // this.getAppointmentByCustomerId('onload',null,null,null,null,null,null);
        this.getAppointmentByCustomerId('', this.loggedInCust, '');
        // this.getTransactionByAccountId('onload', 0, '', null, null, 20);
        this.priviousDate = this.getYesterdayDate();
        this.priviousDate = this.priviousDate.toISOString();
        // this.getBeforeDateBasedOnDays(this.selectNoOfDaysVal);
        this.compareWith = this.compareWithFn;
        this.appointmentForm.get('filterOption').patchValue(this.quickOptions[0]);
    }
    compareWithFn(o1, o2) {
        return o1 === o2;
    }
    ;
    ionViewDidEnter() {
        var _a, _b;
        this.slideNo = localStorage.getItem('slideNo') || 0;
        this.accountInfo.accountType = this.accountsData[this.slideNo].accountType;
        this.accountIdArrayVal = (_b = (_a = this.accountsData) === null || _a === void 0 ? void 0 : _a[this.slideNo]) === null || _b === void 0 ? void 0 : _b.accountId;
    }
    openActionSheet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.transactionDataArr);
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
                            this.apiService.filterAppointment(this.loggedInCust, 'COMPLETED').subscribe(resp => {
                                console.log(resp);
                                if (resp)
                                    this.trxnArrayList = resp === null || resp === void 0 ? void 0 : resp.data;
                            }, error => {
                                console.log(error);
                            });
                            // this.trxnArrayList = this.transactionDataArr.filter(
                            //   (trans) => trans.tokenStatus === 'COMPLETED'
                            // );
                            // console.log("txnlist------",this.transactionDataArr)
                        },
                    },
                    {
                        text: 'Failed',
                        // icon: 'share',
                        handler: () => {
                            this.apiService.filterAppointment(this.loggedInCust, 'FAILED').subscribe(resp => {
                                console.log(resp);
                                if (resp)
                                    this.trxnArrayList = resp === null || resp === void 0 ? void 0 : resp.data;
                            }, error => {
                                console.log(error);
                            });
                            // this.trxnArrayList = this.transactionDataArr.filter(
                            //   (trans) => trans.tokenStatus === 'FAILED'
                            // );
                            // this.selectAction('CANCELED');
                        },
                    },
                    {
                        text: 'In Progress',
                        // icon: 'share',
                        handler: () => {
                            // this.selectAction('CANCELED');
                            this.apiService.filterAppointment(this.loggedInCust, 'INPROGRESS').subscribe(resp => {
                                console.log(resp);
                                if (resp)
                                    this.trxnArrayList = resp === null || resp === void 0 ? void 0 : resp.data;
                            }, error => {
                                console.log(error);
                            });
                            // this.trxnArrayList = this.transactionDataArr.filter(
                            //   (trans) => trans.appointmentStatus === 'INPROGRESS'
                            // );
                            // console.log("txnlist",this.trxnArrayList)
                        },
                    },
                    {
                        text: 'Scheduled',
                        // icon: 'share',
                        handler: () => {
                            // this.selectAction('CANCELED');
                            this.apiService.filterAppointment(this.loggedInCust, 'SCHEDULED').subscribe(resp => {
                                console.log(resp);
                                if (resp)
                                    this.trxnArrayList = resp === null || resp === void 0 ? void 0 : resp.data;
                            }, error => {
                                console.log(error);
                            });
                            // this.trxnArrayList = this.transactionDataArr.filter(
                            //   (trans) => trans.appointmentStatus === 'SCHEDULED'
                            // );
                        },
                    },
                    {
                        text: 'Cancelled',
                        // icon: 'share',
                        handler: () => {
                            this.apiService.filterAppointment(this.loggedInCust, 'CANCELLED').subscribe(resp => {
                                console.log(resp);
                                if (resp)
                                    this.trxnArrayList = resp === null || resp === void 0 ? void 0 : resp.data;
                            }, error => {
                                console.log(error);
                            });
                            // this.selectAction('CANCELED');
                            // this.trxnArrayList = this.transactionDataArr.filter(
                            //   (trans) => trans.appointmentStatus === 'CANCELED'
                            // );
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
        if (event.target.value.options == 'Select Date Range') {
            this.addCustomTask();
        }
        else {
            console.log(val, this.loggedInCust);
            this.getAppointmentByCustomerId(val, this.loggedInCust, null);
            this.filterOptions = event.target.value.data;
            this.selectedFilter = event.target.value;
        }
    }
    addCustomTask() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            let modal = yield this.modalCtrl.create({
                component: _daterange_daterange_page__WEBPACK_IMPORTED_MODULE_6__.DaterangePage,
                cssClass: 'small-modal',
            });
            modal.onDidDismiss().then((modelData) => {
                this.enableDate = true;
                return this.appointmentForm.patchValue({
                    fromDate: [(new Date(modelData.data)).toJSON(), [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
                    toDate: [(new Date(modelData.role)).toJSON(), [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required]],
                });
            });
            return yield modal.present();
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
            const formatFromDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(d, 'yyyy-MM-dd');
            this.fromDate = formatFromDate;
            const formatToDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(this.currentDate, 'yyyy-MM-dd');
            this.toDate = formatToDate;
            console.log('formatFromDate :: ', formatFromDate, ' ::formatToDate::  ', formatToDate);
            this.isNoOfDays = true;
        }
    }
    getAppointmentByCustomerId(Value, custId, accId) {
        console.log(Value);
        if (Value.filterOption) {
            Value.filterOption = Value.filterOption.data;
        }
        if (Value.fromDate) {
            Value.fromDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(Value.fromDate), 'yyyy-MM-dd');
        }
        if (Value.toDate) {
            Value.toDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(Value.toDate), 'yyyy-MM-dd');
            // Value.toDate='2022-11-12';
        }
        this.loadingService.present();
        this.apiService
            .fetchAppointmentInfo(Value.filterOption, Value.fromDate, Value.toDate, custId, accId)
            .subscribe((data) => {
            this.loadingService.dismiss();
            console.log('data:::', data);
            if (data.status === 404) {
                this.loadingService.dismiss();
                this.transactionDataArr = [];
                this.trxnArrayList = [];
                this.displayInfo = true;
                this.message = 'There are no appoinments to display';
            }
            else {
                if (data != null || data != undefined) {
                    this.displayInfo = false;
                    this.originalTransArr = data;
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
                }
                else {
                    this.loadingService.dismiss();
                    console.log('else part.....');
                    this.transactionDataArr = [];
                    this.trxnArrayList = [];
                    this.displayInfo = true;
                    this.message = 'There are no appoinments to display';
                }
            }
            this.cdr.markForCheck();
        }, (err) => {
            this.loadingService.dismiss();
            if (err.error == null) {
                this.transactionDataArr = [];
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
                this.loadingService.dismiss();
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
            this.loadingService.dismiss();
            if (err.error == null) {
                this.transactionDataArr = [];
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
            this.trxnArrayList = arr;
        }
        this.trnxArrCopy = this.trxnArrayList;
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
        var currDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(this.currentDate, 'yyyy-MM-dd');
        if (!isNoOfDays) {
            const formattedFromDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(this.fromDate), "yyyy-MM-dd'T'HH:mm:ss");
            this.formattedFromDate = formattedFromDate;
            // console.log('fromDate :: ',this.formattedFromDate);
            const formattedToDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(this.toDate), "yyyy-MM-dd'T'HH:mm:ss");
            this.formattedToDate = formattedToDate;
            formatFromDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(this.fromDate), 'yyyy-MM-dd');
            formatToDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(this.toDate), 'yyyy-MM-dd');
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
        var currDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(this.currentDate, 'yyyy-MM-dd');
        this.formattedToDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(event.target.value), 'yyyy-MM-dd');
        console.log('formatted:: ', currDate, this.formattedToDate);
        this.fromDateVal = (0,date_fns__WEBPACK_IMPORTED_MODULE_12__["default"])(this.fromDate).toISOString();
        this.toDate = '';
        // this.getAppointmentByCustomerId('fromDate','','',this.formattedFromDate,this.formattedToDate,this.loggedInCust,this.accountIdNum);
    }
    openAlert(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
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
            this.loggedInCust = resp.customerId;
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__awaiter)(this, void 0, void 0, function* () {
            console.log(event);
            localStorage.setItem('AppointmentDetails', JSON.stringify(event));
            let modal = yield this.modalCtrl.create({
                component: event.trnType == "Forex Transaction" ? _token_v2_token_v2_page__WEBPACK_IMPORTED_MODULE_8__.TokenV2Page : _appointmentpopup_appointmentpopup_page__WEBPACK_IMPORTED_MODULE_7__.AppointmentpopupPage,
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
        var currDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_11__["default"])(this.currentDate, 'dd-MM-yyyy HH:mm:ss');
        this.pdfService.createPdf(data, this.customerDetails, currDate);
    }
};
AppointmentPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_13__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.NavController },
    { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_5__.LoadingService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ChangeDetectorRef },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_16__.Location },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService },
    { type: _services_trxn_pdf_doc_download_service__WEBPACK_IMPORTED_MODULE_2__.TrxnPdfDocDownloadService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ActionSheetController }
];
AppointmentPage.propDecorators = {
    infiniteScroll: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonInfiniteScroll,] }]
};
AppointmentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
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

module.exports = "ion-header .header ion-icon {\n  font-size: larger;\n}\nion-header .header_title {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\nion-header .header_title ion-title {\n  font-weight: bold;\n  text-align: left;\n  padding-left: 11%;\n  margin-top: -5px;\n}\nion-header .header_title ion-icon {\n  color: #5dade2;\n  padding-top: 5px;\n}\n::ng-deep .wider-popover-apt {\n  --width: 100%;\n  --max-width: 100%;\n  --offset-x: -12px;\n}\n.dateField {\n  border: none;\n  width: 150px;\n}\n.selectAccId {\n  width: 100%;\n}\n.shareIcon {\n  width: 50px;\n}\n.date_range ion-label {\n  padding: 0 4%;\n}\n.dateLabel {\n  color: #5499c7;\n  font-weight: 400px;\n}\n.resetBtn {\n  background: #c0392b;\n  border-radius: 6px;\n  width: 175px;\n  height: 50px;\n}\n.downloadBtn {\n  background: #5dade2;\n  border-radius: 6px;\n  width: 174px;\n  height: 50px;\n}\n.btnColumn {\n  display: flex;\n  justify-content: center;\n}\n.statuscls {\n  font-size: 10px;\n}\n.quickOption {\n  background-color: #8c0;\n  height: 80px;\n}\n.toolbar-bg {\n  margin-top: 0px;\n  background: rgba(31, 107, 255, 0.2) !important;\n  width: auto;\n  height: 60px;\n  padding: 1px;\n}\np {\n  font-size: 12px;\n}\n.transactionCard {\n  min-height: 525px;\n  width: 100%;\n}\n#wrapper {\n  margin-left: auto;\n  margin-right: auto;\n  height: auto;\n  width: 75%;\n}\n.text-right {\n  text-align: end;\n}\n.secondary-text {\n  line-height: 1.5rem;\n  text-align: center;\n  color: #1f6bff !important;\n}\n.event {\n  flex-flow: row wrap;\n  box-sizing: border-box;\n  display: flex;\n}\n.cusNameClass {\n  font-size: small;\n}\n.cusHistoryContent {\n  color: #aba9a9;\n  font-size: 10px;\n}\n.email-icon {\n  color: #707070;\n  cursor: pointer;\n  float: right;\n  font-size: large;\n}\n.imgStyle {\n  margin-left: 10px;\n  margin-right: 10px;\n  height: 35px;\n  width: 30px;\n}\n.search-results {\n  height: 35rem;\n  overflow: scroll;\n}\n.dateLabel {\n  color: #5499c7;\n  font-weight: 400px;\n}\n.ion_list ion-label {\n  font-weight: bold;\n}\n.ion_list ion-label h3 {\n  font-size: 17px;\n  font-weight: bold;\n  line-height: 2;\n}\n.ion_list ion-label p {\n  font-size: 13px;\n  font-weight: bold;\n  color: #999;\n}\n.pl-80 {\n  padding-left: 95%;\n  color: #456EFE !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcG9pbnRtZW50LnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEdJVEhVQiUyMFJFUE9TSVRPUllfVUlcXGlDdXN0TW9iaWxlLXYyXFxzcmNcXGFwcFxccGFnZXNcXGFwcG9pbnRtZW50XFxhcHBvaW50bWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSxpQkFBQTtBQ0ROO0FESUk7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FDRk47QURJTTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDRlI7QURLTTtFQUNFLGNBQUE7RUFFQSxnQkFBQTtBQ0pSO0FEVUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ1BGO0FEVUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ1BGO0FEVUE7RUFDRSxXQUFBO0FDUEY7QURVQTtFQUNFLFdBQUE7QUNQRjtBRFVBO0VBQ0UsYUFBQTtBQ1BGO0FEVUE7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7QUNQRjtBRFVBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDUEY7QURVQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ1BGO0FEVUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNQRjtBRFVBO0VBQ0UsZUFBQTtBQ1BGO0FEVUE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUNQRjtBRFVBO0VBQ0UsZUFBQTtFQUNBLDhDQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDUEY7QURVQTtFQUNFLGVBQUE7QUNQRjtBRFVBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FDUEY7QURVQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ1BGO0FEVUE7RUFDRSxlQUFBO0FDUEY7QURVQTtFQUNFLG1CQUFBO0VBRUEsa0JBQUE7RUFDQSx5QkFBQTtBQ1JGO0FEV0E7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQ1JGO0FEYUE7RUFDRSxnQkFBQTtBQ1ZGO0FEYUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ1ZGO0FEYUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ1ZGO0FEYUE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNWRjtBRGFBO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0FDVkY7QURhQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ1ZGO0FEY0U7RUFDRSxpQkFBQTtBQ1hKO0FEYUk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDWE47QURjSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNaTjtBRDhCQTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7QUMzQkYiLCJmaWxlIjoiYXBwb2ludG1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWhlYWRlciB7XHJcbiAgLmhlYWRlciB7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgfVxyXG5cclxuICAgICZfdGl0bGUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG5cclxuICAgICAgaW9uLXRpdGxlIHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTElO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICBjb2xvcjogIzVkYWRlMjtcclxuICAgICAgICAvLyBwYWRkaW5nLWxlZnQ6IDMyM3B4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAud2lkZXItcG9wb3Zlci1hcHQge1xyXG4gIC0td2lkdGg6IDEwMCU7XHJcbiAgLS1tYXgtd2lkdGg6IDEwMCU7XHJcbiAgLS1vZmZzZXQteDogLTEycHg7XHJcbn1cclxuXHJcbi5kYXRlRmllbGQge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5zZWxlY3RBY2NJZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zaGFyZUljb24ge1xyXG4gIHdpZHRoOiA1MHB4XHJcbn1cclxuXHJcbi5kYXRlX3JhbmdlIGlvbi1sYWJlbCB7XHJcbiAgcGFkZGluZzogMCA0JTtcclxufVxyXG5cclxuLmRhdGVMYWJlbCB7XHJcbiAgY29sb3I6ICM1NDk5Yzc7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMHB4O1xyXG59XHJcblxyXG4ucmVzZXRCdG4ge1xyXG4gIGJhY2tncm91bmQ6ICNjMDM5MmI7XHJcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gIHdpZHRoOiAxNzVweDtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5kb3dubG9hZEJ0biB7XHJcbiAgYmFja2dyb3VuZDogIzVkYWRlMjtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgd2lkdGg6IDE3NHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG5cclxuLmJ0bkNvbHVtbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlclxyXG59XHJcblxyXG4uc3RhdHVzY2xzIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5xdWlja09wdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhjMDtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbn1cclxuXHJcbi50b29sYmFyLWJnIHtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgYmFja2dyb3VuZDogcmdiYSgzMSwgMTA3LCAyNTUsIDAuMikgIWltcG9ydGFudDtcclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgcGFkZGluZzogMXB4O1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbkNhcmQge1xyXG4gIG1pbi1oZWlnaHQ6IDUyNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4jd3JhcHBlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB3aWR0aDogNzUlO1xyXG59XHJcblxyXG4udGV4dC1yaWdodCB7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG59XHJcblxyXG4uc2Vjb25kYXJ5LXRleHQge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbiAgLy8gIGxpbmUtaGVpZ2h0OiAwLjVyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiAjMWY2YmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ldmVudCB7XHJcbiAgZmxleC1mbG93OiByb3cgd3JhcDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG4gIC8vIGhlaWdodDogNTI1cHg7XHJcbn1cclxuXHJcbi5jdXNOYW1lQ2xhc3Mge1xyXG4gIGZvbnQtc2l6ZTogc21hbGw7XHJcbn1cclxuXHJcbi5jdXNIaXN0b3J5Q29udGVudCB7XHJcbiAgY29sb3I6ICNhYmE5YTk7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4uZW1haWwtaWNvbiB7XHJcbiAgY29sb3I6ICM3MDcwNzA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG59XHJcblxyXG4uaW1nU3R5bGUge1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbn1cclxuXHJcbi5zZWFyY2gtcmVzdWx0cyB7XHJcbiAgaGVpZ2h0OiAzNXJlbTtcclxuICBvdmVyZmxvdzogc2Nyb2xsO1xyXG59XHJcblxyXG4uZGF0ZUxhYmVsIHtcclxuICBjb2xvcjogIzU0OTljNztcclxuICBmb250LXdlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcbi5pb25fbGlzdCB7XHJcbiAgaW9uLWxhYmVsIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgIGgzIHtcclxuICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLy8gLmNvbnN0cnVjdGVkIHN0eWxlc2hlZXRcclxuXHJcbi8vIC5jb25zdHJ1Y3RlZCBzdHlsZXNoZWV0XHJcbi8vIDpob3N0IGJ1dHRvbiB7XHJcblxyXG4vLyAgIC0tcGFkZGluZy1pbmxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxuLy8gfVxyXG4vLyA6aG9zdCBidXR0b24ge1xyXG4vLyBpb24tZGF0ZXRpbWUtYnV0dG9uIHtcclxuLy8gICBwYWRkaW5nLWlubGluZTogbm9uZTtcclxuLy8gICBwYWRkaW5nLWlubGluZS1zdGFydDogbm9uZTtcclxuLy8gICBwYWRkaW5nLWlubGluZS1lbmQ6IG5vbmU7XHJcbi8vIH1cclxuLnBsLTgwIHtcclxuICBwYWRkaW5nLWxlZnQ6IDk1JTtcclxuICBjb2xvcjogIzQ1NkVGRSAhaW1wb3J0YW50O1xyXG59IiwiaW9uLWhlYWRlciAuaGVhZGVyIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiBsYXJnZXI7XG59XG5pb24taGVhZGVyIC5oZWFkZXJfdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWhlYWRlciAuaGVhZGVyX3RpdGxlIGlvbi10aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDExJTtcbiAgbWFyZ2luLXRvcDogLTVweDtcbn1cbmlvbi1oZWFkZXIgLmhlYWRlcl90aXRsZSBpb24taWNvbiB7XG4gIGNvbG9yOiAjNWRhZGUyO1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuXG46Om5nLWRlZXAgLndpZGVyLXBvcG92ZXItYXB0IHtcbiAgLS13aWR0aDogMTAwJTtcbiAgLS1tYXgtd2lkdGg6IDEwMCU7XG4gIC0tb2Zmc2V0LXg6IC0xMnB4O1xufVxuXG4uZGF0ZUZpZWxkIHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMTUwcHg7XG59XG5cbi5zZWxlY3RBY2NJZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uc2hhcmVJY29uIHtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5kYXRlX3JhbmdlIGlvbi1sYWJlbCB7XG4gIHBhZGRpbmc6IDAgNCU7XG59XG5cbi5kYXRlTGFiZWwge1xuICBjb2xvcjogIzU0OTljNztcbiAgZm9udC13ZWlnaHQ6IDQwMHB4O1xufVxuXG4ucmVzZXRCdG4ge1xuICBiYWNrZ3JvdW5kOiAjYzAzOTJiO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHdpZHRoOiAxNzVweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uZG93bmxvYWRCdG4ge1xuICBiYWNrZ3JvdW5kOiAjNWRhZGUyO1xuICBib3JkZXItcmFkaXVzOiA2cHg7XG4gIHdpZHRoOiAxNzRweDtcbiAgaGVpZ2h0OiA1MHB4O1xufVxuXG4uYnRuQ29sdW1uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5zdGF0dXNjbHMge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5xdWlja09wdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4YzA7XG4gIGhlaWdodDogODBweDtcbn1cblxuLnRvb2xiYXItYmcge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGJhY2tncm91bmQ6IHJnYmEoMzEsIDEwNywgMjU1LCAwLjIpICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiBhdXRvO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHBhZGRpbmc6IDFweDtcbn1cblxucCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnRyYW5zYWN0aW9uQ2FyZCB7XG4gIG1pbi1oZWlnaHQ6IDUyNXB4O1xuICB3aWR0aDogMTAwJTtcbn1cblxuI3dyYXBwZXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBoZWlnaHQ6IGF1dG87XG4gIHdpZHRoOiA3NSU7XG59XG5cbi50ZXh0LXJpZ2h0IHtcbiAgdGV4dC1hbGlnbjogZW5kO1xufVxuXG4uc2Vjb25kYXJ5LXRleHQge1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMWY2YmZmICFpbXBvcnRhbnQ7XG59XG5cbi5ldmVudCB7XG4gIGZsZXgtZmxvdzogcm93IHdyYXA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jdXNOYW1lQ2xhc3Mge1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG4uY3VzSGlzdG9yeUNvbnRlbnQge1xuICBjb2xvcjogI2FiYTlhOTtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uZW1haWwtaWNvbiB7XG4gIGNvbG9yOiAjNzA3MDcwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsb2F0OiByaWdodDtcbiAgZm9udC1zaXplOiBsYXJnZTtcbn1cblxuLmltZ1N0eWxlIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICB3aWR0aDogMzBweDtcbn1cblxuLnNlYXJjaC1yZXN1bHRzIHtcbiAgaGVpZ2h0OiAzNXJlbTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuLmRhdGVMYWJlbCB7XG4gIGNvbG9yOiAjNTQ5OWM3O1xuICBmb250LXdlaWdodDogNDAwcHg7XG59XG5cbi5pb25fbGlzdCBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5pb25fbGlzdCBpb24tbGFiZWwgaDMge1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogMjtcbn1cbi5pb25fbGlzdCBpb24tbGFiZWwgcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjOTk5O1xufVxuXG4ucGwtODAge1xuICBwYWRkaW5nLWxlZnQ6IDk1JTtcbiAgY29sb3I6ICM0NTZFRkUgIWltcG9ydGFudDtcbn0iXX0= */";

/***/ }),

/***/ 25204:
/*!********************************************************************!*\
  !*** ./src/app/pages/appointment/appointment.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" size=\"large\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"header_title\">Appointment History</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button (click)=\"openActionSheet()\">\r\n        <ion-icon slot=\"icon-only\" name=\"funnel-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-toolbar>\r\n    <div>\r\n      <form [formGroup]=\"appointmentForm\">\r\n        <ion-row>\r\n          <ion-col>\r\n            <ion-list>\r\n              <ion-item>\r\n                <ion-select class=\"selectAccId\" [interfaceOptions]=\"{'cssClass': 'wider-popover-apt'}\"\r\n                  interface=\"popover\" formControlName=\"filterOption\" placeholder=\"Quick Options\"\r\n                  (ionChange)=\"OnselectQuickOption($event,appointmentForm.value)\" [compareWith]=\"compareWith\">\r\n                  <ion-select-option *ngFor=\"let item of quickOptions\" [value]=\"item\">\r\n                    <div class=\"select_option\" class=\"quickOption\">\r\n                      <div class=\"acc_num\">{{item.options}}</div>\r\n                    </div>\r\n                  </ion-select-option>\r\n                </ion-select>\r\n              </ion-item>\r\n            </ion-list>\r\n          </ion-col>\r\n        </ion-row>\r\n      </form>\r\n    </div>\r\n  </ion-toolbar>\r\n\r\n  <div class=\"transactionCard\">\r\n    <div *ngIf=\"displayInfo\" class=\"text-center\">\r\n      <p>{{message}}</p>\r\n    </div>\r\n    <ion-list class=\"ion_list\">\r\n      <ion-item *ngFor=\"let trans of trxnArrayList;\" (click)=\"onClick(trans)\">\r\n        <!-- <ion-button slot=\"start\">\r\n        <ion-icon slot=\"icon-only\" name=\"wallet-outline\"></ion-icon>\r\n      </ion-button> -->\r\n\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-label>\r\n                <h3>{{trans.trnType}}</h3>\r\n                <p>\r\n                  <small>\r\n                    Ref No:{{ trans.transactionId }}-{{trans.transactionDate}}-{{\r\n                    trans.creatorDtStamp }}\r\n                  </small>\r\n                </p>\r\n              </ion-label>\r\n            </ion-col>\r\n            <ion-col class=\"ion-align-self-center\">\r\n              <ion-label\r\n                [color]=\"trans.appointmentStatus == 'COMPLETED' || trans.appointmentStatus == 'SCHEDULED' ? 'success' : 'danger'\"\r\n                class=\"text-xs text-right\">\r\n                <ng-container *ngIf=\" trans.trnType == 'Forex Transaction'; else showOtherTxn\">\r\n                  <small>\r\n                    {{ trans.forexTransAmount  |\r\n                    currency:trans.forexTransCurrency :'symbol':'1.0-1'}}</small>\r\n                  <br>\r\n                </ng-container>\r\n                <ng-template #showOtherTxn>\r\n                  <small>\r\n                    {{trans.transactionAmount | currency:trans.transactionCurrency :'symbol':'1.0-1'}}\r\n                  </small>\r\n                  <br>\r\n                </ng-template>\r\n                <p class=\"statuscls\"><small>{{trans.appointmentStatus}}</small></p>\r\n              </ion-label>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </ion-item>\r\n    </ion-list>\r\n\r\n    <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"onScrollingFinished($event)\">\r\n      <ion-infinite-scroll-content loadingSpinner=\"bubbles\" loadingText=\"Loading more data...\">\r\n      </ion-infinite-scroll-content>\r\n    </ion-infinite-scroll>\r\n  </div>\r\n</ion-content>\r\n<app-footer></app-footer>\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_appointment_appointment_module_ts.js.map