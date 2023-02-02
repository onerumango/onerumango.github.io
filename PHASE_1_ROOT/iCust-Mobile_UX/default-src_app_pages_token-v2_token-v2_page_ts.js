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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _token_v2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token-v2.page.html?ngResource */ 95409);
/* harmony import */ var _token_v2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token-v2.page.scss?ngResource */ 37386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var _transaction_popup_transaction_popup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../transaction-popup/transaction-popup.page */ 123);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 96772);
/* harmony import */ var _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/clipboard/ngx */ 42697);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);














let TokenV2Page = class TokenV2Page {
    constructor(router, dataRoute, api, clipboard, sanitizer, platform, actionSheetCtrl, socialSharing, toastService, alertController, modalCtrl, shareDataService) {
        this.router = router;
        this.dataRoute = dataRoute;
        this.api = api;
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
        this.myAngularxQrCode = 'Your QR code data string';
    }
    ngOnInit() {
        var _a;
        this.phoneNumber = localStorage.getItem('customerPhonenum');
        this.isDevice = this.platform.is('cordova');
        this.api.getIndex().subscribe(resp => {
            console.log(resp.index);
            this.assignProductCode(resp.index);
        });
        localStorage.getItem('AccountNumber');
        localStorage.getItem('TransactionDate');
        localStorage.getItem('TransactionTime');
        console.log(this.value);
        this.appointmentDetails = JSON.parse(localStorage.getItem('AppointmentDetails'));
        console.log("NEW", this.appointmentDetails);
        if (this.appointmentDetails) {
            this.trans = this.appointmentDetails;
            this.appointmentStatus = this.appointmentDetails.appointmentStatus;
            this.appointmentId = this.appointmentDetails.appointmentId;
            this.transAmount = this.appointmentDetails.transactionAmount;
            this.transDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.appointmentDetails.transactionDate).format("D MMMM y");
            this.transTime = this.appointmentDetails.transactionTime;
            this.branch = this.appointmentDetails.transactionBranch;
            this.accountNum = this.appointmentDetails.accountNumber;
            this.accounttype = this.appointmentDetails.accountType;
            console.log(this.accounttype);
            this.accountcurrency = this.appointmentDetails.accountCurrency;
            this.tranType = (_a = this.appointmentDetails) === null || _a === void 0 ? void 0 : _a.trnType;
            this.remarks = this.appointmentDetails.remarks;
            console.log(this.remarks);
            this.generateQRCode();
        }
        else {
            this.getData();
        }
    }
    assignProductCode(index) {
        this.productCode = index;
    }
    close() {
        localStorage.removeItem('AppointmentDetails');
        if (this.screen == 'wallet') {
            this.modalCtrl.dismiss();
        }
        else {
            this.modalCtrl.dismiss();
        }
    }
    generateQRCode() {
        var _a;
        this.tokenObjects.transactionId = (_a = this.value) === null || _a === void 0 ? void 0 : _a.transactionId;
        this.tokenObjects.accountId = this.accountNum;
        this.tokenObjects.transactionDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date(localStorage.getItem('TransactionDate'))).format("DD-MM-YYYY");
        this.tokenObjects.transactionDate = localStorage.getItem('TransactionDate');
        this.tokenObjects.timeSlot = localStorage.getItem('TransactionTime');
        this.tokenObjects.productCode = this.productCode;
        this.tokenObjects.phoneNumber = this.phoneNumber;
        this.api.generateQRCode(this.tokenObjects).subscribe(tokenResp => {
            this.image = tokenResp;
            this.imageURL = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.image));
        }, err => {
            console.log("err : ", err);
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log(event);
            const alert = yield this.alertController.create({
                header: 'Are you sure you want to Cancel this appointment?',
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'confirm',
                        handler: () => {
                            this.handlerMessage = 'Alert confirmed';
                            this.delete();
                        },
                    },
                    {
                        text: 'Back',
                        role: 'cancel',
                        handler: () => {
                            this.handlerMessage = 'Alert canceled';
                        },
                    },
                ],
            });
            console.log(this.handlerMessage);
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            this.roleMessage = `Dismissed with role: ${role}`;
        });
    }
    editTransaction() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.appointmentDetails);
            this.value = this.appointmentDetails;
            console.log('value------', this.value);
            localStorage.removeItem('AppointmentDetails');
            history.pushState({ data: this.value }, '', '');
            this.router.navigateByUrl(`/${this.value.trnType.toLowerCase().replace(' ', '')}`, {
                state: { data: this.value },
            });
            this.modalCtrl.dismiss(this.value);
        });
    }
    delete() {
        const data = {
            appointmentId: this.trans.appointmentId,
            operation: 'cancel'
        };
        console.log('cancelled!', data);
        this.api.appointmentBooking(data).subscribe(resp => {
            console.log(resp);
            localStorage.setItem("canceledAppointment", resp.transactionTime);
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
        this.shareDataService.getAccountInfo.subscribe((data) => {
            console.log('Data', data);
            this.accountInfo = data;
        });
        this.api.getByTransactionId(this.value.transactionId).subscribe((response) => {
            console.log(response);
            this.tellerId = response.tellerId;
            this.trans = JSON.stringify(response);
            this.trans = JSON.parse(this.trans);
            this.appointmentDetails = this.trans;
            this.appointmentStatus = this.trans.appointmentStatus;
            this.appointmentId = this.trans.appointmentId;
            this.transAmount = this.trans.transactionAmount;
            this.transDate = moment__WEBPACK_IMPORTED_MODULE_2__(this.trans.transactionDate).format("D MMMM y");
            this.transTime = this.trans.transactionTime;
            this.branch = this.trans.transactionBranch;
            this.accountNum = this.trans.accountNumber;
            this.accounttype = this.trans.accountType;
            this.accountcurrency = this.trans.accountCurrency;
            this.tranType = this.trans.trnType;
            this.remarks = this.trans.remarks;
            this.generateQRCode();
        });
    }
    addToWallet() {
        let payload = {
            transactionId: this.value.transactionId,
            addToWallet: true
        };
        this.api.updateAddToWallet(payload).subscribe(res => {
            this.toastService.showToast("Added Successfully");
            this.router.navigate(['dashboard']);
        }, (err) => {
            console.error(err);
        });
    }
    convertDate(date) {
        let cDate = moment__WEBPACK_IMPORTED_MODULE_2__(date).format("D MMM y");
        return cDate;
    }
    openSheet() {
        var _a, _b;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__awaiter)(this, void 0, void 0, function* () {
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
                    }, {
                        text: 'Copy',
                        icon: 'copy',
                        data: {
                            action: 'copy',
                        },
                    }, {
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
                    this.toastService.showToast("Try to share through native mobile");
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
        this.clipboard.copy(`Your appointment token is ${this.appointmentId}`).then(res => {
            this.toastService.showToast("copied");
        }).catch(err => {
            this.toastService.showToast("Try to share through native mobile");
        });
    }
    openWhatsApp() {
        this.openLink.nativeElement.click();
    }
};
TokenV2Page.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _ionic_native_clipboard_ngx__WEBPACK_IMPORTED_MODULE_8__.Clipboard },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.DomSanitizer },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ActionSheetController },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__.SocialSharing },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.ModalController },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService }
];
TokenV2Page.propDecorators = {
    openLink: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChild, args: ['openLink',] }],
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input }],
    screen: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Input }]
};
TokenV2Page = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-token-v2',
        template: _token_v2_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_token_v2_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TokenV2Page);



/***/ }),

/***/ 37386:
/*!**************************************************************!*\
  !*** ./src/app/pages/token-v2/token-v2.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "ion-toolbar {\n  --background: linear-gradient(90deg, #051A2D, #004C97);\n  color: #ffffff;\n  height: 175px !important;\n  z-index: -1;\n}\n\nion-card {\n  height: 1000px;\n  margin-top: -90px;\n  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px !important;\n}\n\n.rounded-icon-trash {\n  width: 70px;\n  height: 70px;\n  text-align: left;\n  margin-top: 15px;\n  background: url(\"/assets/icon/delete.svg\");\n}\n\n.rounded-icon-edit {\n  width: 70px;\n  height: 70px;\n  margin-top: 15px;\n  text-align: right;\n  background: url(\"/assets/icon/edit.svg\");\n}\n\n.row {\n  margin-right: 0px !important;\n  margin-left: -25px !important;\n}\n\nspan {\n  font-size: 12px;\n}\n\np {\n  color: #000000 !important;\n}\n\n.holes-lower {\n  position: relative;\n  margin: 25px;\n  border: 1px dashed #aaa;\n}\n\n.holes-lower:before, .holes-lower:after {\n  content: \"\";\n  height: 50px;\n  width: 50px;\n  background-color: #f8f9fa;\n  position: absolute;\n  border-radius: 50%;\n}\n\n.holes-lower:before {\n  top: -25px;\n  left: -50px;\n}\n\n.holes-lower:after {\n  top: -25px;\n  right: -50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRva2VuLXYyLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEdJVEhVQiUyMFJFUE9TSVRPUllfVUlcXGlDdXN0TW9iaWxlLXYyXFxzcmNcXGFwcFxccGFnZXNcXHRva2VuLXYyXFx0b2tlbi12Mi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUFDSSxzREFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7QUNISjs7QURNQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGdHQUFBO0FDSEo7O0FETUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtBQ0hKOztBRE1BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0NBQUE7QUNISjs7QURPQTtFQUNJLDRCQUFBO0VBQ0EsNkJBQUE7QUNKSjs7QURPQTtFQUNJLGVBQUE7QUNKSjs7QURPQTtFQUNJLHlCQUFBO0FDSko7O0FEUUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtBQ0xKOztBRE9JO0VBRUksV0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EseUJBMURXO0VBMkRYLGtCQUFBO0VBQ0Esa0JBQUE7QUNOUjs7QURTSTtFQUNJLFVBQUE7RUFDQSxXQUFBO0FDUFI7O0FEVUk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQ1JSIiwiZmlsZSI6InRva2VuLXYyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4kd2lkdGg6IDQwMDtcclxuJGNpcmNsZS1zaXplOiA1MDtcclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDUxQTJELCAjMDA0Qzk3KTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgaGVpZ2h0OiAxNzVweCAhaW1wb3J0YW50O1xyXG4gICAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbmlvbi1jYXJkIHtcclxuICAgIGhlaWdodDogMTAwMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTkwcHg7XHJcbiAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMDUpIDBweCA2cHggMjRweCAwcHgsIHJnYmEoMCwgMCwgMCwgMC4wOCkgMHB4IDBweCAwcHggMXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5yb3VuZGVkLWljb24tdHJhc2gge1xyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pY29uL2RlbGV0ZS5zdmcnKTtcclxufVxyXG5cclxuLnJvdW5kZWQtaWNvbi1lZGl0IHtcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ljb24vZWRpdC5zdmcnKTtcclxuXHJcbn1cclxuXHJcbi5yb3cge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5zcGFuIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxucCB7XHJcbiAgICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxuLmhvbGVzLWxvd2VyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMjVweDtcclxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCAjYWFhO1xyXG5cclxuICAgICY6YmVmb3JlLFxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgaGVpZ2h0OiAkY2lyY2xlLXNpemUgKyBweDtcclxuICAgICAgICB3aWR0aDogJGNpcmNsZS1zaXplICsgcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhY2tncm91bmQtY29sb3I7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgICAgdG9wOiAtMjVweDtcclxuICAgICAgICBsZWZ0OiAtNTBweDtcclxuICAgIH1cclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgICB0b3A6IC0yNXB4O1xyXG4gICAgICAgIHJpZ2h0OiAtNTBweDtcclxuICAgIH1cclxufSIsImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwNTFBMkQsICMwMDRDOTcpO1xuICBjb2xvcjogI2ZmZmZmZjtcbiAgaGVpZ2h0OiAxNzVweCAhaW1wb3J0YW50O1xuICB6LWluZGV4OiAtMTtcbn1cblxuaW9uLWNhcmQge1xuICBoZWlnaHQ6IDEwMDBweDtcbiAgbWFyZ2luLXRvcDogLTkwcHg7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4wNSkgMHB4IDZweCAyNHB4IDBweCwgcmdiYSgwLCAwLCAwLCAwLjA4KSAwcHggMHB4IDBweCAxcHggIWltcG9ydGFudDtcbn1cblxuLnJvdW5kZWQtaWNvbi10cmFzaCB7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaWNvbi9kZWxldGUuc3ZnXCIpO1xufVxuXG4ucm91bmRlZC1pY29uLWVkaXQge1xuICB3aWR0aDogNzBweDtcbiAgaGVpZ2h0OiA3MHB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pY29uL2VkaXQuc3ZnXCIpO1xufVxuXG4ucm93IHtcbiAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWxlZnQ6IC0yNXB4ICFpbXBvcnRhbnQ7XG59XG5cbnNwYW4ge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbnAge1xuICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xufVxuXG4uaG9sZXMtbG93ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbjogMjVweDtcbiAgYm9yZGVyOiAxcHggZGFzaGVkICNhYWE7XG59XG4uaG9sZXMtbG93ZXI6YmVmb3JlLCAuaG9sZXMtbG93ZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbi5ob2xlcy1sb3dlcjpiZWZvcmUge1xuICB0b3A6IC0yNXB4O1xuICBsZWZ0OiAtNTBweDtcbn1cbi5ob2xlcy1sb3dlcjphZnRlciB7XG4gIHRvcDogLTI1cHg7XG4gIHJpZ2h0OiAtNTBweDtcbn0iXX0= */";

/***/ }),

/***/ 95409:
/*!**************************************************************!*\
  !*** ./src/app/pages/token-v2/token-v2.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"close()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Cash Forex Transaction</ion-title>\r\n    <ion-buttons slot=\"end\">\r\n      <ion-button fill=\"clear\" (click)=\"openSheet()\">\r\n        <ion-icon slot=\"icon-only\" src=\"assets/icon/share.svg\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <div>\r\n    <ion-card class=\"\">\r\n\r\n      <div class=\"row\" style=\"background: #004C9708;\">\r\n        <div class=\"col-3\">\r\n          <div (click)=\"editTransaction()\" *ngIf=\"appointmentStatus == 'SCHEDULED'\" class=\"rounded-icon-edit\"></div>\r\n        </div>\r\n        <div class=\"col-6 text-center\" style=\"margin-top: 15px;\">\r\n          <p style=\"color:#102245\">Appointment ID</p>\r\n          <p style=\"color: #000000;\"><strong>{{ appointmentId }}</strong></p>\r\n        </div>\r\n        <div class=\"col-3\">\r\n          <div *ngIf=\"appointmentStatus == 'SCHEDULED'\" (click)=\"presentAlert()\" class=\"rounded-icon-trash\"></div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"container\" style=\"margin-left: 25px;\">\r\n        <div class=\"row my-3 text-center\">\r\n          <div class=\"col-6\" style=\"text-align: start;\">\r\n            <span style=\"text-align: start;\">Forex Currency</span>\r\n            <p style=\"text-align: start;\">{{ value?.forexCurrency }}</p>\r\n          </div>\r\n          <div class=\"col-6\" style=\"text-align: start;\">\r\n            <span style=\"text-align: start;\">Forex Amount</span>\r\n            <p style=\"text-align: start;\">{{ value?.forexAmount }}</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row my-3 text-center\">\r\n          <div class=\"col-6\" style=\"text-align: start;\">\r\n            <span style=\"text-align: start;\">Receive Currency</span>\r\n            <p style=\"text-align: start;\">{{ value?.forexTransCurrency }}</p>\r\n          </div>\r\n          <div class=\"col-6\" style=\"text-align: start;\">\r\n            <span style=\"text-align: start;\">Exchange Rate</span>\r\n            <p style=\"text-align: start;\">{{ value?.exchangeRate }}</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row my-3 text-center\">\r\n          <div class=\"col-6\" style=\"text-align: start;\">\r\n            <span style=\"text-align: start;\">Receive amount</span>\r\n            <p style=\"text-align: start;\">{{ value?.forexTransAmount }}</p>\r\n          </div>\r\n          <div class=\"col-6\" style=\"text-align: start;\">\r\n            <span style=\"text-align: start;\">Total Charge Amount</span>\r\n            <p style=\"text-align: start;\">{{ value?.totalChargeAmount }}</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row my-3 text-center\">\r\n          <div class=\"col-6\" style=\"text-align: start;\">\r\n            <span style=\"text-align: start;\">Total Transaction Amount</span>\r\n            <p style=\"text-align: start;\">{{ value?.totalTransactionAmount }}</p>\r\n          </div>\r\n          <div class=\"col-6\" style=\"text-align: start;\">\r\n            <span style=\"text-align: start;\">Transaction branch</span>\r\n            <p style=\"text-align: start;\">{{ value?.transactionBranch }}</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row my-3 text-center\">\r\n          <div class=\"col-6\" style=\"text-align: start;\">\r\n            <span style=\"text-align: start;\">Transaction Date</span>\r\n            <p style=\"text-align: start;\">{{ convertDate(value?.transactionDate) }}</p>\r\n          </div>\r\n          <div class=\"col-6\" style=\"text-align: start;\">\r\n            <span style=\"text-align: start;\">Time Slot</span>\r\n            <p style=\"text-align: start;\">{{ value?.transactionTime }}</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row my-3 text-center\">\r\n          <div class=\"col-6\" style=\"text-align: start;\">\r\n            <span style=\"text-align: start;\">Current Status</span>\r\n            <p style=\"text-align: start;\">{{ value?.appointmentStatus }}</p>\r\n          </div>\r\n\r\n          <div class=\"col-6\" style=\"text-align: start;\" *ngIf=\"value?.representativeInfo.length != 0\">\r\n            <span style=\"text-align: start;white-space: nowrap;\">Representative Name</span>\r\n            <p style=\"text-align: start;\">{{ value?.representativeInfo[0]?.personName }}</p>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row my-3 text-center\" *ngIf=\"value?.representativeInfo.length != 0\">\r\n          <div class=\"col-6\" style=\"text-align: start;\">\r\n            <span style=\"text-align: start;white-space: nowrap;\">Representative Mobile No</span>\r\n            <p style=\"text-align: start;\">{{ mask(value?.representativeInfo[0]?.phoneNo, 3) }}</p>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"holes-lower\"></div>\r\n      <div class=\"container token-conteiner\">\r\n        <div class=\"qr_img text-center\">\r\n          <img [src]=\"'assets/icon/qr-6865526__340.png'\" />\r\n        </div>\r\n        <div class=\"my-1 text-center\">\r\n          <a (click)=\"addToWallet()\">Add to wallet</a>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div style=\"height: 0px;width: 0px;overflow:hidden;\">\r\n        <a href=\"https://wa.me?text={{ appointmentId}}\" data-action=\"share/whatsapp/share\" #openLink></a>\r\n      </div>\r\n\r\n    </ion-card>\r\n  </div>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_token-v2_token-v2_page_ts.js.map