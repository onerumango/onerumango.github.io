"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_token-v2_token-v2_page_ts"],{

/***/ 68106:
/*!*************************************************!*\
  !*** ./src/app/pages/token-v2/token-v2.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenV2Page": () => (/* binding */ TokenV2Page)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _token_v2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token-v2.page.html?ngResource */ 95409);
/* harmony import */ var _token_v2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token-v2.page.scss?ngResource */ 37386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var _transaction_popup_transaction_popup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../transaction-popup/transaction-popup.page */ 123);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 96772);
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ 42697);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_retail_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/retail.service */ 92284);
/* harmony import */ var src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/token-storage.service */ 11573);
















let TokenV2Page = class TokenV2Page {
    constructor(router, dataRoute, api, retailService, tokenService, clipboard, sanitizer, platform, actionSheetCtrl, socialSharing, toastService, alertController, modalCtrl, shareDataService) {
        this.router = router;
        this.dataRoute = dataRoute;
        this.api = api;
        this.retailService = retailService;
        this.tokenService = tokenService;
        this.clipboard = clipboard;
        this.sanitizer = sanitizer;
        this.platform = platform;
        this.actionSheetCtrl = actionSheetCtrl;
        this.socialSharing = socialSharing;
        this.toastService = toastService;
        this.alertController = alertController;
        this.modalCtrl = modalCtrl;
        this.shareDataService = shareDataService;
        this.tokenObjects = new _transaction_popup_transaction_popup_page__WEBPACK_IMPORTED_MODULE_6__.TokenObjects();
        this.myAngularxQrCode = null;
        this.handlerMessage = '';
        this.roleMessage = '';
        this.screen = 'mobile-kyc';
        this.myAngularxQrCode = 'Your QR code data string';
    }
    ngOnInit() {
        this.currentUser = this.tokenService.getUser();
        this.isDevice = this.platform.is('cordova');
        console.log(this.value);
        this.generateQRCode();
        // this.getData();
    }
    assignProductCode(index) {
        this.productCode = index;
    }
    close() {
        if (this.screen == 'onScreen') {
            this.modalCtrl.dismiss();
            this.router.navigate(['dashboard']);
        }
        else {
            this.modalCtrl.dismiss();
        }
    }
    convertToCapital(value) {
        return value.toLocaleLowerCase();
    }
    generateQRCode() {
        var _a, _b, _c, _d, _e;
        let payload = {
            transactionId: (_a = this.value) === null || _a === void 0 ? void 0 : _a.transactionId,
            accountNo: (_b = this.value) === null || _b === void 0 ? void 0 : _b.accountNo,
            transactionDate: (_c = this.value) === null || _c === void 0 ? void 0 : _c.transactionDate,
            timeSlot: (_d = this.value) === null || _d === void 0 ? void 0 : _d.TransactionTime,
            productCode: '',
            phoneNumber: (_e = this.currentUser) === null || _e === void 0 ? void 0 : _e.mobile,
        };
        this.retailService.generateQRCode(payload).subscribe((resp) => {
            console.log(resp);
            this.image = resp;
            this.imageURL = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.image));
        }, (err) => {
            console.log('err : ', err);
        });
    }
    nativeDevice(image) {
        const reader = new FileReader();
        reader.onloadend = () => {
            this.imageToShow = reader.result;
            console.log(this.imageToShow);
        };
        reader.readAsDataURL(image);
    }
    presentAlert(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            console.log(event);
            const alert = yield this.alertController.create({
                // header: `<ion-icon ios="ios-add" md="md-add"></ion-icon>Add your info`,
                message: '<div class="alert-container">' +
                    '<ion-icon class="alert-icon" src="/assets/icon/v2/delete.svg"></ion-icon>' +
                    '<div class="alert-header">Cancel the Appointment?</div>' +
                    '<p class="alert-subHeader">You will not have a chance to undo it.</p>' +
                    '</div>',
                cssClass: 'delete-alert',
                buttons: [
                    {
                        text: 'Cancel',
                        cssClass: 'alert-delete-confirm',
                        role: 'confirm',
                        handler: () => {
                            this.handlerMessage = 'Alert confirmed';
                            this.delete();
                        },
                    },
                    {
                        text: 'Back',
                        cssClass: 'alert-delete-cancel',
                        role: 'cancel',
                        handler: () => {
                            this.handlerMessage = 'Alert canceled';
                        },
                    },
                ],
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            this.roleMessage = `Dismissed with role: ${role}`;
        });
    }
    editTransaction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            console.log('value------', this.value);
            history.pushState({ data: this.value }, '', '');
            if (this.value.trnType == 'Cheque Deposit') {
                this.router.navigateByUrl('/cheque-deposit-v2', {
                    state: { data: this.value },
                });
            }
            else if (this.value.trnType == 'Cheque Withdrawal') {
                this.router.navigateByUrl('/cheque-withdrawal-v2', {
                    state: { data: this.value },
                });
            }
            else
                this.router.navigateByUrl(`/${this.value.trnType.toLowerCase().replace(' ', '')}`, {
                    state: { data: this.value },
                });
            this.modalCtrl.dismiss(this.value);
        });
    }
    delete() {
        const data = {
            appointmentId: this.trans.appointmentId,
            operation: 'cancel',
        };
        console.log('cancelled!', data);
        this.api.appointmentBooking(data).subscribe((resp) => {
            console.log(resp);
            localStorage.setItem('canceledAppointment', resp.transactionTime);
            this.appointmentStatus = resp.appointmentStatus;
            this.appointmentId = resp.appointmentId;
            this.transAmount = resp.transactionAmount;
            this.transDate = resp.transactionDate;
            this.transTime = resp.transactionTime;
            this.branch = resp.transactionBranch;
            this.accountNum = resp.accountNumber;
            this.accounttype = resp.accountType;
            this.accountcurrency = resp.accountCurrency;
            this.remarks = resp.remarks;
        });
    }
    getData() {
        this.api
            .getByTransactionId(this.value.transactionId)
            .subscribe((response) => {
            console.log(response);
            this.tellerId = response.tellerId;
            this.trans = JSON.stringify(response);
            this.trans = JSON.parse(this.trans);
            // this.appointmentDetails = this.trans;
            this.appointmentStatus = this.trans.appointmentStatus;
            this.appointmentId = this.trans.appointmentId;
            this.transAmount = this.trans.transactionAmount;
            this.transDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.trans.transactionDate).format('D MMMM y');
            this.transTime = this.trans.transactionTime;
            this.branch = this.trans.transactionBranch;
            this.accountNum = this.trans.accountNumber;
            this.accounttype = this.trans.accountType;
            this.accountcurrency = this.trans.accountCurrency;
            this.tranType = this.trans.transactionType;
            this.remarks = this.trans.remarks;
            this.generateQRCode();
        });
    }
    addToWallet() {
        var _a;
        let payload = {
            transactionId: (_a = this.value) === null || _a === void 0 ? void 0 : _a.transactionId,
            addToWallet: true,
        };
        this.retailService.addToWallet(payload).subscribe((res) => {
            this.toastService.showToast('Added Successfully');
            this.router.navigate(['dashboard']);
        }, (err) => {
            console.error(err);
        });
    }
    convertDate(date) {
        let cDate = moment__WEBPACK_IMPORTED_MODULE_2__(date).format('D MMM y');
        return cDate;
    }
    // TO Be Removed
    convertTime(date) {
        let cDate = moment__WEBPACK_IMPORTED_MODULE_2__(date).format('HH:MM A');
        return cDate;
    }
    formatAMPM(dateVal, TimeVal) {
        let date = new Date(dateVal + ' ' + TimeVal);
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        minutes = minutes < 10 ? '0' + minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        return strTime;
    }
    openSheet() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Appointment Token Share',
                animated: true,
                buttons: [
                    {
                        text: 'Share via WhatsApp',
                        icon: 'share',
                        data: {
                            action: 'share',
                        },
                    },
                    {
                        text: 'Copy',
                        icon: 'copy',
                        data: {
                            action: 'copy',
                        },
                    },
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        icon: 'close',
                        data: {
                            action: 'cancel',
                        },
                    },
                ],
            });
            yield actionSheet.present();
            const result = yield actionSheet.onDidDismiss();
            if (((_a = result === null || result === void 0 ? void 0 : result.data) === null || _a === void 0 ? void 0 : _a.action) == 'share') {
                if (this.isDevice) {
                    this.openWhatsApp();
                }
                else {
                    this.toastService.showToast('Try to share through native mobile');
                }
            }
            else if (((_b = result === null || result === void 0 ? void 0 : result.data) === null || _b === void 0 ? void 0 : _b.action) == 'copy') {
                this.copyToken();
            }
            {
                return;
            }
        });
    }
    mask(str, amt = 1) {
        if (amt > str.length) {
            return '*'.repeat(str.length);
        }
        else {
            return str.substr(0, str.length - amt) + '*'.repeat(amt);
        }
    }
    copyToken() {
        this.clipboard
            .copy(`Your appointment token is ${this.appointmentId}`)
            .then((res) => {
            this.toastService.showToast('copied');
        })
            .catch((err) => {
            this.toastService.showToast('Try to share through native mobile');
        });
    }
    openWhatsApp() {
        this.openLink.nativeElement.click();
    }
};
TokenV2Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.ActivatedRoute },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: src_app_services_retail_service__WEBPACK_IMPORTED_MODULE_9__.RetailService },
    { type: src_app_services_token_storage_service__WEBPACK_IMPORTED_MODULE_10__.TokenStorageService },
    { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_8__.Clipboard },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.DomSanitizer },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ActionSheetController },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__.SocialSharing },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.ModalController },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService }
];
TokenV2Page.propDecorators = {
    openLink: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.ViewChild, args: ['openLink',] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    screen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    txntitle: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    scheduleInfo: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }],
    screenType: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_15__.Input }]
};
TokenV2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.Component)({
        selector: 'app-token-v2',
        template: _token_v2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_token_v2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TokenV2Page);



/***/ }),

/***/ 92284:
/*!********************************************!*\
  !*** ./src/app/services/retail.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RetailService": () => (/* binding */ RetailService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _token_storage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token-storage.service */ 11573);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 92340);





let RetailService = class RetailService {
    constructor(httpClient, tokenService) {
        this.httpClient = httpClient;
        this.tokenService = tokenService;
        this.basePath = src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.microServiceURL;
    }
    getCurrencies() {
        return this.httpClient.get(`${this.basePath}/icCurrency`);
    }
    getBranch() {
        return this.httpClient.get(`${this.basePath}/branch`);
    }
    createAppointment(payload) {
        return this.httpClient.post(`${this.basePath}/transaction/scheduleAppointment`, payload);
    }
    getTransactionDetailsById(transId) {
        return this.httpClient.get(`${this.basePath}/fetchByTransId/${transId}`);
    }
    generateQRCode(payload) {
        return this.httpClient.post(`${this.basePath}/token/qr-code-generator`, payload, {
            responseType: 'blob',
        });
    }
    addToWallet(payload) {
        return this.httpClient.put(`${this.basePath}/token/updateAddToWallet`, payload);
    }
};
RetailService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient },
    { type: _token_storage_service__WEBPACK_IMPORTED_MODULE_0__.TokenStorageService }
];
RetailService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
        providedIn: 'root',
    })
], RetailService);



/***/ }),

/***/ 37386:
/*!**************************************************************!*\
  !*** ./src/app/pages/token-v2/token-v2.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: linear-gradient(90deg, #051a2d, #004c97);\n  color: #ffffff;\n  height: 175px !important;\n  z-index: -1;\n}\n\nion-card {\n  height: 1300px;\n  margin-top: -90px;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px !important;\n}\n\n.qrImg {\n  width: 300px !important;\n  height: 300px !important;\n  margin-top: -30px !important;\n}\n\n.rounded-icon-trash {\n  width: 70px;\n  height: 70px;\n  text-align: center;\n  margin-top: 25px;\n  background: url(\"/assets/icon/v2/delete.svg\");\n  background-repeat: no-repeat;\n}\n\n.rounded-icon-edit {\n  width: 70px;\n  height: 70px;\n  margin-top: 25px;\n  text-align: center;\n  background: url(\"/assets/icon/v2/edit.png\");\n  background-repeat: no-repeat;\n  margin-left: 30px;\n}\n\n.row {\n  margin-right: 0px !important;\n  margin-left: -25px !important;\n}\n\nspan {\n  font-size: 10px;\n}\n\np {\n  color: #000000 !important;\n}\n\n.appointment_id {\n  font-size: 28px;\n}\n\n.holes-lower {\n  position: relative;\n  margin: 25px;\n  border: 1px dashed #aaa;\n}\n\n.holes-lower:before, .holes-lower:after {\n  content: \"\";\n  height: 50px;\n  width: 50px;\n  background-color: #f8f9fa;\n  position: absolute;\n  border-radius: 50%;\n}\n\n.holes-lower:before {\n  top: -25px;\n  left: -50px;\n}\n\n.holes-lower:after {\n  top: -25px;\n  right: -50px;\n}\n\np.schedule {\n  color: #d68c00 !important;\n  text-transform: capitalize !important;\n}\n\np.completed {\n  color: #008461 !important;\n  text-transform: capitalize !important;\n}\n\np.rejected {\n  color: #b20000 !important;\n  text-transform: capitalize !important;\n}\n\n::ng-deep .alert-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  position: relative;\n}\n\n::ng-deep .alert-container .alert-icon {\n  width: 90px;\n  height: 60px;\n  margin-bottom: 15px;\n}\n\n::ng-deep .alert-container .alert-icon-close {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n::ng-deep .alert-container .alert-header {\n  font-size: 17px;\n  color: #000000;\n  font-weight: bold;\n  margin-bottom: 4px;\n}\n\n::ng-deep .alert-container .alert-subHeader {\n  font-size: 10px;\n}\n\n::ng-deep button.alert-button.alert-delete-confirm {\n  background-color: #ffffff;\n  color: #b20000;\n  text-transform: capitalize;\n  width: 45%;\n  border-radius: 50px;\n  height: 50px;\n  margin-bottom: 15px;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.0901960784);\n}\n\n::ng-deep button.alert-button.alert-delete-confirm span.alert-button-inner {\n  justify-content: center !important;\n}\n\n::ng-deep button.alert-button.alert-delete-cancel {\n  background-color: #ffffff;\n  color: #000;\n  text-transform: capitalize;\n  width: 45%;\n  border-radius: 50px;\n  height: 50px;\n  margin-bottom: 15px;\n  box-shadow: 0 0 15px rgba(0, 0, 0, 0.0901960784);\n}\n\n::ng-deep button.alert-button.alert-delete-cancel span.alert-button-inner {\n  justify-content: center !important;\n}\n\n::ng-deep .alert-wrapper.ion-overlay-wrapper {\n  min-width: 75%;\n  border-radius: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRva2VuLXYyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLHNEQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtBQUhGOztBQU1BO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZ0dBQUE7QUFIRjs7QUFPQTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtBQUpGOztBQU9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkNBQUE7RUFDQSw0QkFBQTtBQUpGOztBQU9BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkNBQUE7RUFDQSw0QkFBQTtFQUNBLGlCQUFBO0FBSkY7O0FBT0E7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0FBSkY7O0FBT0E7RUFDRSxlQUFBO0FBSkY7O0FBT0E7RUFDRSx5QkFBQTtBQUpGOztBQU9BO0VBQ0UsZUFBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFKRjs7QUFNRTtFQUVFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQXRFZTtFQXVFZixrQkFBQTtFQUNBLGtCQUFBO0FBTEo7O0FBUUU7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQU5KOztBQVNFO0VBQ0UsVUFBQTtFQUNBLFlBQUE7QUFQSjs7QUFXQTtFQUNFLHlCQUFBO0VBQ0EscUNBQUE7QUFSRjs7QUFXQTtFQUNFLHlCQUFBO0VBQ0EscUNBQUE7QUFSRjs7QUFXQTtFQUNFLHlCQUFBO0VBQ0EscUNBQUE7QUFSRjs7QUFZRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFUSjs7QUFVSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFSTjs7QUFTTTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7QUFQUjs7QUFVSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVJOOztBQVVJO0VBQ0UsZUFBQTtBQVJOOztBQVlFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnREFBQTtBQVZKOztBQVdJO0VBQ0Usa0NBQUE7QUFUTjs7QUFZRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0RBQUE7QUFWSjs7QUFXSTtFQUNFLGtDQUFBO0FBVE47O0FBWUU7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUFWSiIsImZpbGUiOiJ0b2tlbi12Mi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuJHdpZHRoOiA0MDA7XHJcbiRjaXJjbGUtc2l6ZTogNTA7XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwNTFhMmQsICMwMDRjOTcpO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGhlaWdodDogMTc1cHggIWltcG9ydGFudDtcclxuICB6LWluZGV4OiAtMTtcclxufVxyXG5cclxuaW9uLWNhcmQge1xyXG4gIGhlaWdodDogMTMwMHB4O1xyXG4gIG1hcmdpbi10b3A6IC05MHB4O1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDZweCAyNHB4IDBweCxcclxuICAgIHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDBweCAwcHggMXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5xckltZyB7XHJcbiAgd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IC0zMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yb3VuZGVkLWljb24tdHJhc2gge1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGhlaWdodDogNzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjVweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ljb24vdjIvZGVsZXRlLnN2Z1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG59XHJcblxyXG4ucm91bmRlZC1pY29uLWVkaXQge1xyXG4gIHdpZHRoOiA3MHB4O1xyXG4gIGhlaWdodDogNzBweDtcclxuICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ljb24vdjIvZWRpdC5wbmdcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICBtYXJnaW4tbGVmdDogLTI1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuc3BhbiB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG5wIHtcclxuICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYXBwb2ludG1lbnRfaWQge1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG5cclxuLmhvbGVzLWxvd2VyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAyNXB4O1xyXG4gIGJvcmRlcjogMXB4IGRhc2hlZCAjYWFhO1xyXG5cclxuICAmOmJlZm9yZSxcclxuICAmOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBoZWlnaHQ6ICRjaXJjbGUtc2l6ZSArIHB4O1xyXG4gICAgd2lkdGg6ICRjaXJjbGUtc2l6ZSArIHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG5cclxuICAmOmJlZm9yZSB7XHJcbiAgICB0b3A6IC0yNXB4O1xyXG4gICAgbGVmdDogLTUwcHg7XHJcbiAgfVxyXG5cclxuICAmOmFmdGVyIHtcclxuICAgIHRvcDogLTI1cHg7XHJcbiAgICByaWdodDogLTUwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5wLnNjaGVkdWxlIHtcclxuICBjb2xvcjogI2Q2OGMwMCAhaW1wb3J0YW50O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnAuY29tcGxldGVkIHtcclxuICBjb2xvcjogIzAwODQ2MSAhaW1wb3J0YW50O1xyXG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnAucmVqZWN0ZWQge1xyXG4gIGNvbG9yOiAjYjIwMDAwICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIHtcclxuICAuYWxlcnQtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIC5hbGVydC1pY29uIHtcclxuICAgICAgd2lkdGg6IDkwcHg7XHJcbiAgICAgIGhlaWdodDogNjBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgJi1jbG9zZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICByaWdodDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFsZXJ0LWhlYWRlciB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICB9XHJcbiAgICAuYWxlcnQtc3ViSGVhZGVyIHtcclxuICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYnV0dG9uLmFsZXJ0LWJ1dHRvbi5hbGVydC1kZWxldGUtY29uZmlybSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgY29sb3I6ICNiMjAwMDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxNXB4ICMwMDAwMDAxNztcclxuICAgIHNwYW4uYWxlcnQtYnV0dG9uLWlubmVyIHtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxuICAgIH1cclxuICB9XHJcbiAgYnV0dG9uLmFsZXJ0LWJ1dHRvbi5hbGVydC1kZWxldGUtY2FuY2VsIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDE1cHggIzAwMDAwMDE3O1xyXG4gICAgc3Bhbi5hbGVydC1idXR0b24taW5uZXIge1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlciAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuICAuYWxlcnQtd3JhcHBlci5pb24tb3ZlcmxheS13cmFwcGVyIHtcclxuICAgIG1pbi13aWR0aDogNzUlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 95409:
/*!**************************************************************!*\
  !*** ./src/app/pages/token-v2/token-v2.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"close()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>{{ value?.transactionType }}</ion-title>\r\n   \r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"clear\" (click)=\"openSheet()\">\r\n        <ion-icon\r\n          *ngIf=\"appointmentStatus == 'SCHEDULED'\"\r\n          slot=\"icon-only\"\r\n          src=\"assets/icon/share.svg\"\r\n        ></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <ion-card>\r\n    <ng-container *ngIf=\"screen != 'mobile-kyc'\">\r\n      <div class=\"row\" style=\"background: #004c9708\">\r\n        <div class=\"col-3\">\r\n          <div\r\n            (click)=\"editTransaction()\"\r\n            *ngIf=\"value?.appointmentStatus == 'SCHEDULED'\"\r\n            class=\"rounded-icon-edit\"\r\n          ></div>\r\n        </div>\r\n        <div class=\"col-6 text-center\" style=\"margin-top: 15px\">\r\n          <p style=\"color: #102245\">Appointment ID</p>\r\n          <p style=\"color: #000000\">\r\n            <strong class=\"appointment_id\">{{ value?.appointmentId }}</strong>\r\n          </p>\r\n        </div>\r\n        <div class=\"col-3\">\r\n          <div\r\n            *ngIf=\"value?.appointmentStatus == 'SCHEDULED'\"\r\n            (click)=\"presentAlert()\"\r\n            class=\"rounded-icon-trash\"\r\n          ></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"container\" style=\"margin-left: 25px\">\r\n        <ng-container\r\n          *ngIf=\"tranType != 'Cash Forex Transaction' && tranType != 'Loan Disbursement' && tranType != 'Loan Repayment'\"\r\n        >\r\n          <div class=\"row my-3 text-center\">\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Account Number</span>\r\n              <p style=\"text-align: start\">{{ value?.accountNo }}</p>\r\n            </div>\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Type</span>\r\n              <p style=\"text-align: start\">{{ value?.accountType }}</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row my-3 text-center\">\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Customer Name</span>\r\n              <p style=\"text-align: start\">{{ value?.holderName }}</p>\r\n            </div>\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Account Currency</span>\r\n              <p style=\"text-align: start\">{{ value?.accountCurrency }}</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row my-3 text-center\">\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Transaction branch</span>\r\n              <p style=\"text-align: start\">{{ value?.transactionBranch }}</p>\r\n            </div>\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Transaction Currency</span>\r\n              <p style=\"text-align: start\">{{ value?.transactionCurrency }}</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row my-3 text-center\">\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Transaction Amount</span>\r\n              <p style=\"text-align: start\">{{ value?.transactionAmount }}</p>\r\n            </div>\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Total Charge Amount</span>\r\n              <p style=\"text-align: start\">{{ value?.totalChargeAmount }}</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row my-3 text-center\">\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Total Transaction Amount</span>\r\n              <p style=\"text-align: start\">\r\n                {{ value?.totalTransactionAmount }}\r\n              </p>\r\n            </div>\r\n            <div\r\n              class=\"col-6\"\r\n              style=\"text-align: start\"\r\n              *ngIf=\"value?.accountCurrency != value?.transactionCurrency\"\r\n            >\r\n              <span style=\"text-align: start\">Exchange Rate</span>\r\n              <p style=\"text-align: start\">{{ value?.exchangeRate }}</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row my-3 text-center\">\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Transaction Date</span>\r\n              <p style=\"text-align: start\">\r\n                {{ convertDate(value?.transactionDate) }}\r\n              </p>\r\n            </div>\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Time Slot</span>\r\n              <p style=\"text-align: start\">{{ value?.transactionTime }}</p>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"tranType == 'Cash Forex Transaction'\">\r\n          <div class=\"row my-3 text-center\">\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Forex Currency</span>\r\n              <p style=\"text-align: start\">{{ value?.forexCurrency }}</p>\r\n            </div>\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Forex Amount</span>\r\n              <p style=\"text-align: start\">{{ value?.forexAmount }}</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row my-3 text-center\">\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Receive/Pay Currency</span>\r\n              <p style=\"text-align: start\">{{ value?.forexTransCurrency }}</p>\r\n            </div>\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Exchange Rate</span>\r\n              <p style=\"text-align: start\">{{ value?.exchangeRate }}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row my-3 text-center\">\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Receive/Pay amount</span>\r\n              <p style=\"text-align: start\">{{ value?.forexTransAmount }}</p>\r\n            </div>\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Total Charge Amount</span>\r\n              <p style=\"text-align: start\">{{ value?.totalChargeAmount }}</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row my-3 text-center\">\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Total Transaction Amount</span>\r\n              <p style=\"text-align: start\">\r\n                {{ value?.totalTransactionAmount }}\r\n              </p>\r\n            </div>\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Transaction branch</span>\r\n              <p style=\"text-align: start\">{{ value?.transactionBranch }}</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row my-3 text-center\">\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Transaction Date</span>\r\n              <p style=\"text-align: start\">\r\n                {{ convertDate(value?.transactionDate) }}\r\n              </p>\r\n            </div>\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Time Slot</span>\r\n              <p style=\"text-align: start\">{{ value?.transactionTime }}</p>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"tranType == 'Loan Disbursement'\">\r\n          <div class=\"row my-3 text-center\">\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Loan Account</span>\r\n              <p style=\"text-align: start\">{{ value?.accountNo }}</p>\r\n            </div>\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\"> Loan Type</span>\r\n              <p style=\"text-align: start\">{{ value?.accountType }}</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row my-3 text-center\">\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Customer Name</span>\r\n              <p style=\"text-align: start\">{{ value?.holderName }}</p>\r\n            </div>\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Account Currency</span>\r\n              <p style=\"text-align: start\">{{ value?.accountCurrency }}</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row my-3 text-center\">\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Payment Mode</span>\r\n              <p style=\"text-align: start\">\r\n                {{ value?.modeInfo[0]?.rePaymentMode }}\r\n              </p>\r\n            </div>\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Transaction Currency</span>\r\n              <p style=\"text-align: start\">{{ value?.transactionCurrency }}</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row my-3 text-center\">\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Exchange Rate</span>\r\n              <p style=\"text-align: start\">{{ value?.exchangeRate }}</p>\r\n            </div>\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Transaction Account</span>\r\n              <p style=\"text-align: start\">{{ value?.transactionCurrency }}</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row my-3 text-center\">\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Total Charge Amount</span>\r\n              <p style=\"text-align: start\">{{ value?.totalChargeAmount }}</p>\r\n            </div>\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Total Transaction Amount</span>\r\n              <p style=\"text-align: start\">\r\n                {{ value?.totalTransactionAmount }}\r\n              </p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row my-3 text-center\">\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Transaction Branch</span>\r\n              <p style=\"text-align: start\">{{ value?.transactionBranch}}</p>\r\n            </div>\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Transaction Date</span>\r\n              <p style=\"text-align: start\">\r\n                {{ convertDate(value?.transactionDate) }}\r\n              </p>\r\n            </div>\r\n\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Time Slot</span>\r\n              <p style=\"text-align: start\">{{ value?.transactionTime }}</p>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"tranType == 'Loan Repayment'\">\r\n          <div class=\"row my-3 text-center\">\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Loan Account</span>\r\n              <p style=\"text-align: start\">{{ value?.accountNo }}</p>\r\n            </div>\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\"> Type</span>\r\n              <p style=\"text-align: start\">{{ value?.accountType }}</p>\r\n            </div>\r\n\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Account Branch</span>\r\n              <p style=\"text-align: start\">{{ value?.accountBranch }}</p>\r\n            </div>\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Current arrears</span>\r\n              <p style=\"text-align: start\">\r\n                {{ value?.loanInfo[0]?.currentArrears ?? 0 }}\r\n              </p>\r\n            </div>\r\n\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Principal Outstanding</span>\r\n              <p style=\"text-align: start\">\r\n                {{ value?.loanInfo[0]?.principalOutstanding ?? 0 }}\r\n              </p>\r\n            </div>\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Loan Breakup Dues</span>\r\n              <p style=\"text-align: start\">\r\n                {{ value?.loanInfo[0]?.loanBreakupDues ?? 0 }}\r\n              </p>\r\n            </div>\r\n\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Payment Mode</span>\r\n              <p style=\"text-align: start\">\r\n                {{ value?.modeInfo[0]?.rePaymentMode }}\r\n              </p>\r\n            </div>\r\n\r\n            <div\r\n              class=\"col-6\"\r\n              style=\"text-align: start\"\r\n              *ngIf=\"value?.modeInfo[0]?.rePaymentMode == 'Account'\"\r\n            >\r\n              <span style=\"text-align: start\">Account Number</span>\r\n              <p style=\"text-align: start\">\r\n                {{ value?.modeInfo[0]?.accountNumber }}\r\n              </p>\r\n            </div>\r\n\r\n            <div\r\n              class=\"col-6\"\r\n              style=\"text-align: start\"\r\n              *ngIf=\"value?.modeInfo[0]?.rePaymentMode == 'Cheque'\"\r\n            >\r\n              <span style=\"text-align: start\">Cheque Number</span>\r\n              <p style=\"text-align: start\">\r\n                {{ value?.modeInfo[0]?.chequeNo }}\r\n              </p>\r\n            </div>\r\n\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Transaction Currency</span>\r\n              <p style=\"text-align: start\">{{ value?.transactionCurrency }}</p>\r\n            </div>\r\n\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Exchange Rate</span>\r\n              <p style=\"text-align: start\">{{ value?.exchangeRate }}</p>\r\n            </div>\r\n\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Transaction Amount</span>\r\n              <p style=\"text-align: start\">{{ value?.transactionAmount }}</p>\r\n            </div>\r\n\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Total Charge Amount</span>\r\n              <p style=\"text-align: start\">{{ value?.totalChargeAmount }}</p>\r\n            </div>\r\n\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Total Transaction Amount</span>\r\n              <p style=\"text-align: start\">\r\n                {{ value?.totalTransactionAmount }}\r\n              </p>\r\n            </div>\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Transaction Branch</span>\r\n              <p style=\"text-align: start\">{{ value?.transactionBranch}}</p>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n\r\n        <div class=\"row my-3 text-center\">\r\n          <div class=\"col-6\" style=\"text-align: start\">\r\n            <span style=\"text-align: start\">Transaction Date</span>\r\n            <p style=\"text-align: start\">\r\n              {{ convertDate(value?.transactionDate) }}\r\n            </p>\r\n          </div>\r\n          <div class=\"col-6\" style=\"text-align: start\">\r\n            <span style=\"text-align: start\">Time Slot</span>\r\n            <p style=\"text-align: start\">{{ value?.transactionTime }}</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div\r\n          class=\"row my-3 text-center\"\r\n          *ngIf=\"value?.representativeInfo.length != 0\"\r\n        >\r\n          <div class=\"col-6\" style=\"text-align: start\">\r\n            <span style=\"text-align: start; white-space: nowrap\"\r\n              >Representative Name</span\r\n            >\r\n            <p style=\"text-align: start\">\r\n              {{ value?.representativeInfo[0]?.personName }}\r\n            </p>\r\n          </div>\r\n\r\n          <div class=\"col-6\" style=\"text-align: start\">\r\n            <span style=\"text-align: start; white-space: nowrap\"\r\n              >Representative Mobile No</span\r\n            >\r\n            <p style=\"text-align: start\">\r\n              {{ mask(value?.representativeInfo[0]?.phoneNo, 3) }}\r\n            </p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row my-3 text-center\">\r\n          <div class=\"col-6\" style=\"text-align: start\">\r\n            <span style=\"text-align: start\">Current Status</span>\r\n            <p\r\n              style=\"text-align: start\"\r\n              [ngClass]=\"{\r\n            'schedule' :value?.appointmentStatus == 'SCHEDULED' || value?.appointmentStatus == 'INPROGRESS',\r\n            'completed' : value?.appointmentStatus == 'COMPLETED',\r\n            'rejected' : value?.appointmentStatus == 'CANCELLED'\r\n          }\"\r\n            >\r\n              {{ convertToCapital(value?.appointmentStatus) }}\r\n            </p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"holes-lower\"></div>\r\n      <div class=\"container token-conteiner\">\r\n        <div class=\"qr_img text-center\">\r\n          <img [src]=\"imageURL\" class=\"qrImg\" />\r\n        </div>\r\n        <div class=\"text-center\" style=\"margin-top: -12px\">\r\n          <a (click)=\"addToWallet()\">Add to wallet</a>\r\n        </div>\r\n      </div>\r\n      <div style=\"height: 0px; width: 0px; overflow: hidden\">\r\n        <a\r\n          href=\"https://wa.me?text={{ appointmentId}}\"\r\n          data-action=\"share/whatsapp/share\"\r\n          #openLink\r\n        ></a>\r\n      </div>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"scheduleInfo && screen == 'mobile-kyc'\">\r\n      <ng-container *ngIf=\"screenType == 'branch'\">\r\n        <div class=\"row\" style=\"background: #004c9708\">\r\n          <div class=\"col-3\"></div>\r\n          <div class=\"col-6 text-center\" style=\"margin-top: 15px\">\r\n            <p style=\"color: #102245\">KYC Ref No</p>\r\n            <p style=\"color: #000000\">\r\n              <strong class=\"appointment_id\"\r\n                >{{ scheduleInfo?.kycReference }}</strong\r\n              >\r\n            </p>\r\n          </div>\r\n          <div class=\"col-3\"></div>\r\n        </div>\r\n        <div class=\"container\" style=\"margin-left: 25px\">\r\n          <div class=\"row my-3 text-center\">\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">customer ID</span>\r\n              <p style=\"text-align: start\">{{ scheduleInfo?.customerId }}</p>\r\n            </div>\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Mobile</span>\r\n              <p style=\"text-align: start\">{{ scheduleInfo?.phoneNumber }}</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row my-3 text-center\">\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Customer Name</span>\r\n              <p style=\"text-align: start\">\r\n                {{ scheduleInfo?.firstName }} {{scheduleInfo?.lastName}}\r\n              </p>\r\n            </div>\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">KYC Status</span>\r\n              <p style=\"text-align: start\">{{ scheduleInfo?.kycStatus }}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row my-3 text-center\">\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Transaction Date</span>\r\n              <p style=\"text-align: start\">\r\n                {{ convertDate(scheduleInfo?.createdTime) }}\r\n              </p>\r\n            </div>\r\n            <!-- <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Time Slot</span>\r\n              <p style=\"text-align: start\">\r\n                {{ convertTime(scheduleInfo?.createdTime) }}\r\n              </p>\r\n            </div> -->\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"screenType == 'video'\">\r\n        <div class=\"row\" style=\"background: #004c9708\">\r\n          <div class=\"col-3\"></div>\r\n          <div class=\"col-6 text-center\" style=\"margin-top: 15px\">\r\n            <p style=\"color: #102245\">KYC Ref No</p>\r\n            <p style=\"color: #000000\">\r\n              <strong class=\"appointment_id\"\r\n                >{{ scheduleInfo?.kycReference }}</strong\r\n              >\r\n            </p>\r\n          </div>\r\n          <div class=\"col-3\"></div>\r\n        </div>\r\n        <div class=\"container\" style=\"margin-left: 25px\">\r\n          <div class=\"row my-3 text-center\">\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Customer Name</span>\r\n              <p style=\"text-align: start\">\r\n                {{ scheduleInfo?.firstName }} {{scheduleInfo?.lastName}}\r\n              </p>\r\n            </div>\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Status</span>\r\n              <p style=\"text-align: start\">{{ scheduleInfo?.status }}</p>\r\n            </div>\r\n          </div>\r\n          <div class=\"row my-3 text-center\">\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Transaction Date</span>\r\n              <p style=\"text-align: start\">\r\n                {{ convertDate(scheduleInfo?.scheduledDate) }}\r\n              </p>\r\n            </div>\r\n            <div class=\"col-6\" style=\"text-align: start\">\r\n              <span style=\"text-align: start\">Time Slot</span>\r\n              <p style=\"text-align: start\">\r\n                {{\r\n                formatAMPM(scheduleInfo?.scheduledDate,scheduleInfo?.scheduledTime[0])\r\n                }}\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n\r\n      <div class=\"holes-lower\"></div>\r\n      <div class=\"container token-conteiner\">\r\n        <div class=\"qr_img text-center\">\r\n          <qrcode\r\n            [qrdata]=\"screenType == 'video' ? scheduleInfo?.generatedLink : scheduleInfo?.kycReference\"\r\n            [width]=\"250\"\r\n          ></qrcode>\r\n        </div>\r\n        <!-- <div class=\"text-center\" style=\"margin-top: -12px\">\r\n          <a (click)=\"addToWallet()\">Add to wallet</a>\r\n        </div> -->\r\n      </div>\r\n    </ng-container>\r\n  </ion-card>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_token-v2_token-v2_page_ts.js.map