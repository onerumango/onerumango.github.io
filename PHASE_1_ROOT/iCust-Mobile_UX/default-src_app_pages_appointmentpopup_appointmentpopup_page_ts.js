"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_appointmentpopup_appointmentpopup_page_ts"],{

/***/ 14808:
/*!*****************************************************************!*\
  !*** ./src/app/pages/appointmentpopup/appointmentpopup.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentpopupPage": () => (/* binding */ AppointmentpopupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _appointmentpopup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appointmentpopup.page.html?ngResource */ 49308);
/* harmony import */ var _appointmentpopup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appointmentpopup.page.scss?ngResource */ 97645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var _transaction_popup_transaction_popup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../transaction-popup/transaction-popup.page */ 123);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ 96772);













let AppointmentpopupPage = class AppointmentpopupPage {
    constructor(router, dataRoute, api, sanitizer, platform, actionSheetCtrl, socialSharing, toastService, alertController, modalCtrl, shareDataService) {
        this.router = router;
        this.dataRoute = dataRoute;
        this.api = api;
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
        this.modalCtrl.dismiss();
        this.router.navigate(['dashboard']);
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
    openSheet() {
        var _a;
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                header: 'Appointment Token Share',
                animated: true,
                buttons: [
                    {
                        text: 'Share via Email',
                        icon: 'share',
                        data: {
                            action: 'share',
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
                    this.shareViaEmail();
                }
                else {
                    this.toastService.showToast("Try to share through native mobile");
                }
            }
            else {
                return;
            }
        });
    }
    shareViaEmail() {
        this.socialSharing.canShareViaEmail().then((res) => {
            this.socialSharing.shareViaEmail(this.appointmentId, 'Your appointment token is', null, null, null).then(() => {
                this.modalCtrl.dismiss();
            });
        }).catch((e) => {
            // Error!
        });
    }
};
AppointmentpopupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.DomSanitizer },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ActionSheetController },
    { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_7__.SocialSharing },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ModalController },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService }
];
AppointmentpopupPage.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_12__.Input }]
};
AppointmentpopupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.Component)({
        selector: 'app-appointmentpopup',
        template: _appointmentpopup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_appointmentpopup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppointmentpopupPage);



/***/ }),

/***/ 97645:
/*!******************************************************************************!*\
  !*** ./src/app/pages/appointmentpopup/appointmentpopup.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".rect {\n  margin-top: 50pt;\n  background-color: #456efe;\n  margin-left: 24pt;\n  margin-right: 24pt;\n  margin-bottom: 53pt;\n  border-radius: 20px;\n  border-bottom-style: hidden;\n}\n\nion-header {\n  bottom: none;\n}\n\nion-content {\n  --ion-background-color: #111d12;\n}\n\n.new-background-color {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  --background: white;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: inline-block;\n  vertical-align: middle;\n  color: #3477c6;\n  font-size: 13pt;\n  font-family: \"Montserrat\" !important;\n  box-shadow: none;\n}\n\n.text1 {\n  display: block;\n  text-align: center;\n  padding-top: 10pt;\n  color: #102245;\n  opacity: 27%;\n  size: 10pt;\n  font-family: \"Montserrat\" !important;\n  justify-content: center;\n}\n\n.text2 {\n  display: block;\n  text-align: center;\n  padding-top: 10pt;\n  color: #102245;\n  opacity: 100%;\n  font-size: 27pt;\n  padding-bottom: 10pt;\n  font-family: \"Montserrat\" !important;\n  justify-content: center;\n}\n\n.accountSummaryText {\n  text-align: center;\n}\n\n.innerRect {\n  position: relative;\n}\n\n.circle {\n  position: absolute;\n  left: 48%;\n  top: -18px;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background-color: white;\n}\n\n.head {\n  box-shadow: none;\n}\n\n.inputCard:not(.display) {\n  padding-left: 32pt;\n  padding-top: 42pt;\n  font-family: \"Montserrat\" !important;\n  color: #ffffff;\n  size: 14pt;\n}\n\n.display {\n  display: block;\n  font-size: 17pt;\n  color: #ffffff;\n  padding-top: 10pt;\n  padding-bottom: 20pt;\n}\n\n.qr_img {\n  padding-top: 10pt;\n  width: 100pt;\n  height: 100pt;\n  margin-left: 32pt;\n  position: relative;\n  overflow: hidden;\n}\n\n.qr_img img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(1.25);\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0;\n}\n\n.header-md::after {\n  left: unset;\n  bottom: -5px;\n  background-position: left 0 top -2px;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);\n  background-repeat: repeat-x;\n  content: \"\";\n}\n\n.close {\n  color: lightgrey;\n  height: 18pt;\n  width: 18pt;\n  position: absolute;\n  right: 10px;\n  top: -5px;\n}\n\n.header_title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 20px;\n}\n\n.header_title p.text {\n  font-size: 16px;\n  font-weight: bold;\n  margin-bottom: 0;\n}\n\n.token {\n  padding: 15px 20px 20px;\n}\n\n.token p {\n  text-align: center;\n  margin: 0;\n}\n\n.token_number {\n  color: #999;\n  font-size: 15px;\n}\n\n.token_value_row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.token_value_row ion-icon {\n  font-size: x-large;\n  color: #888;\n}\n\n.token_value_row p {\n  flex-grow: 1;\n  color: #777;\n  font-size: x-large;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcG9pbnRtZW50cG9wdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFHQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFERjs7QUFHQTtFQUNFLFlBQUE7QUFBRjs7QUFFQTtFQUNFLCtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBR0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBR0Esb0NBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0UsY0FBQTtFQUVBLGtCQUFBO0VBRUEsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLHVCQUFBO0FBSkY7O0FBTUE7RUFDRSxjQUFBO0VBRUEsa0JBQUE7RUFFQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUVBLG9CQUFBO0VBQ0Esb0NBQUE7RUFDQSx1QkFBQTtBQU5GOztBQVNBO0VBQ0Usa0JBQUE7QUFORjs7QUFTQTtFQUNFLGtCQUFBO0FBTkY7O0FBUUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBTEY7O0FBT0E7RUFDRSxnQkFBQTtBQUpGOztBQU1BO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUVBLFVBQUE7QUFKRjs7QUFNQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFIRjs7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFIRjs7QUFLRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw0Q0FBQTtBQUhKOztBQU9BO0VBQ0UsaUJBQUE7QUFKRjs7QUFNQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseU5BQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUFIRjs7QUFLQTtFQUVFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxTQUFBO0FBSkY7O0FBU0E7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBTkY7O0FBT0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUxKOztBQVFBO0VBQ0UsdUJBQUE7QUFMRjs7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtBQUpKOztBQU1FO0VBQ0UsV0FBQTtFQUNBLGVBQUE7QUFKSjs7QUFNRTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBSko7O0FBS0k7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFITjs7QUFLSTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUhOIiwiZmlsZSI6ImFwcG9pbnRtZW50cG9wdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlY3Qge1xyXG4gIG1hcmdpbi10b3A6IDUwcHQ7XHJcbiAgLy8gbWluLXdpZHRoOiAzMjdwdDtcclxuICAvL21pbi1oZWlnaHQ6IDQ3MHB0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NTZlZmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDI0cHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyNHB0O1xyXG4gIG1hcmdpbi1ib3R0b206IDUzcHQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3JkZXItYm90dG9tLXN0eWxlOiBoaWRkZW47XHJcbn1cclxuaW9uLWhlYWRlciB7XHJcbiAgYm90dG9tOiBub25lO1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMTExZDEyO1xyXG59XHJcbi5uZXctYmFja2dyb3VuZC1jb2xvciB7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgLy8gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIC8vIG1hcmdpbi1sZWZ0OiAyJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBjb2xvcjogIzM0NzdjNjtcclxuICBmb250LXNpemU6IDEzcHQ7XHJcbiAgLy8gcGFkZGluZy10b3A6MjRwdDtcclxuICAvLyBwYWRkaW5nLWxlZnQ6NHB0O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi50ZXh0MSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OjYwcHQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vIG1hcmdpbi10b3A6NjZwdDtcclxuICBwYWRkaW5nLXRvcDogMTBwdDtcclxuICBjb2xvcjogIzEwMjI0NTtcclxuICBvcGFjaXR5OiAyNyU7XHJcbiAgc2l6ZTogMTBwdDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4udGV4dDIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIC8vIHBhZGRpbmctbGVmdDo2MHB0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvLyBtYXJnaW4tdG9wOjY2cHQ7XHJcbiAgcGFkZGluZy10b3A6IDEwcHQ7XHJcbiAgY29sb3I6ICMxMDIyNDU7XHJcbiAgb3BhY2l0eTogMTAwJTtcclxuICBmb250LXNpemU6IDI3cHQ7XHJcbiAgLy8gZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBwdDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmFjY291bnRTdW1tYXJ5VGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5uZXJSZWN0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNpcmNsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDQ4JTtcclxuICB0b3A6IC0xOHB4O1xyXG4gIHdpZHRoOiAzNnB4O1xyXG4gIGhlaWdodDogMzZweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmhlYWQge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmlucHV0Q2FyZDpub3QoLmRpc3BsYXkpIHtcclxuICBwYWRkaW5nLWxlZnQ6IDMycHQ7XHJcbiAgcGFkZGluZy10b3A6IDQycHQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgLy8gb3BhY2l0eTogNTElO1xyXG4gIHNpemU6IDE0cHQ7XHJcbn1cclxuLmRpc3BsYXkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTdwdDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBwYWRkaW5nLXRvcDogMTBwdDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBwdDtcclxuICAvLyBvcGFjaXR5OiAxMDAlO1xyXG59XHJcbi5xcl9pbWcge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB0O1xyXG4gIHdpZHRoOiAxMDBwdDtcclxuICBoZWlnaHQ6IDEwMHB0O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMnB0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICBpbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLjI1KTtcclxuICAgIC8vIHBhZGRpbmctYm90dG9tOiAxOHB0O1xyXG4gIH1cclxufVxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG59XHJcbi5oZWFkZXItbWQ6OmFmdGVyIHtcclxuICBsZWZ0OiB1bnNldDtcclxuICBib3R0b206IC01cHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCAwIHRvcCAtMnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDVweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFIQkFNQUFBRHpEdEJ4QUFBQUQxQk1WRVVBQUFBQUFBQUFBQUFBQUFBQUFBQlBEdWVOQUFBQUJYUlNUbE1VQ1MwZ0JJaC9UWEVBQUFBYVNVUkJWQWpYWXhDRUFnWTRVSUlDQm1Nb2dNc2dGTHRBQVFDTlN3WFpLT2RQeGdBQUFBQkpSVTVFcmtKZ2dnPT0pO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICBjb250ZW50OiBcIlwiO1xyXG59XHJcbi5jbG9zZSB7XHJcbiAgLy8gbWFyZ2luLWJvdHRvbToxNDBweDtcclxuICBjb2xvcjogbGlnaHRncmV5O1xyXG4gIGhlaWdodDogMThwdDtcclxuICB3aWR0aDogMThwdDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8ganVzdGlmeS1jb250ZW50OiByaWdodDtcclxuICByaWdodDogMTBweDtcclxuICB0b3A6IC01cHg7XHJcbiAgLy8gcGFkZGluZy1ib3R0b206IDEzMHB4O1xyXG4gIC8vIHBhZGRpbmctcmlnaHQ6MTBweDtcclxufVxyXG5cclxuLmhlYWRlcl90aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgcC50ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbn1cclxuLnRva2VuIHtcclxuICBwYWRkaW5nOiAxNXB4IDIwcHggMjBweDtcclxuICBwIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgJl9udW1iZXIge1xyXG4gICAgY29sb3I6ICM5OTk7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG4gICZfdmFsdWVfcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICAgIGNvbG9yOiAjODg4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgY29sb3I6ICM3Nzc7XHJcbiAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */";

/***/ }),

/***/ 49308:
/*!******************************************************************************!*\
  !*** ./src/app/pages/appointmentpopup/appointmentpopup.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <div class=\"rect\">\r\n    <ion-header class=\"head\">\r\n      <ion-toolbar class=\"new-background-color\" style=\"--border-width: 0\">\r\n        <div class=\"header_title\">\r\n          <p class=\"text\">{{tranType}}</p>\r\n          <ion-buttons slot=\"end\">\r\n            <ion-button (click)=\"openSheet()\">\r\n              <ion-icon slot=\"icon-only\" name=\"share-social\"></ion-icon>\r\n            </ion-button>\r\n            <ion-button (click)=\"close()\">\r\n              <ion-icon name=\"close\" class=\"\" slot=\"icon-only\"></ion-icon>\r\n            </ion-button>\r\n          </ion-buttons>\r\n        </div>\r\n        <div class=\"token\">\r\n          <p class=\"token_number\">Appointment Id</p>\r\n          <div class=\"token_value_row\">\r\n            <div (click)=\"editTransaction()\" *ngIf=\"appointmentStatus == 'SCHEDULED'\">\r\n              <ion-icon name=\"pencil\"></ion-icon>\r\n            </div>\r\n            \r\n            <p class=\"token_value\">{{appointmentId}}</p>\r\n            <div *ngIf=\"appointmentStatus == 'SCHEDULED'\">\r\n              <ion-icon name=\"trash-outline\" (click)=\"presentAlert()\"></ion-icon>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <div class=\"innerRect\">\r\n      <span class=\"circle\"></span>\r\n      <div class=\"inputCard\">\r\n        <ion-label style=\"opacity: 51%\">Account Number</ion-label>\r\n        <ion-label class=\"display\">{{accountNum}}</ion-label>\r\n\r\n        <ion-label style=\"opacity: 51%\">Account Type</ion-label>\r\n        <ion-label class=\"display\">{{accounttype}}</ion-label>\r\n\r\n        <ion-label style=\"opacity: 51%\">Account Currency</ion-label>\r\n        <ion-label class=\"display\">{{accountcurrency}}</ion-label>\r\n\r\n        <ion-label style=\"opacity: 51%\">Transaction Amount</ion-label>\r\n        <ion-label class=\"display\">{{transAmount}}</ion-label>\r\n\r\n        <ion-label style=\"opacity: 51%\">Transaction Branch</ion-label>\r\n        <ion-label class=\"display\">{{branch}}</ion-label>\r\n\r\n        <ion-label style=\"opacity: 51%\">Transaction Date</ion-label>\r\n        <ion-label class=\"display\">{{transDate}}</ion-label>\r\n        <ion-label style=\"opacity: 51%\">Time Slot</ion-label>\r\n        <ion-label class=\"display\">{{transTime}}</ion-label>\r\n\r\n      <div *ngIf=\"remarks\">\r\n        <ion-label  style=\"opacity: 51%\">Remark</ion-label>\r\n        <ion-label class=\"display\">{{remarks}}</ion-label>\r\n      </div>\r\n        \r\n\r\n        <ion-label style=\"opacity: 51%\">Appointment Status</ion-label>\r\n        <ion-label class=\"display\">{{appointmentStatus}}</ion-label>\r\n      </div>\r\n\r\n      <!-- <img [src]=\"imageToShow\"> -->\r\n      <!-- <img [src]=\"image\"> -->\r\n      <div class=\"qr_img\">\r\n        <img [src]=\"imageURL\" />\r\n      </div>\r\n\r\n      <ion-label class=\"inputCard\" style=\"display: block; opacity: 70%; font-size: 16pt\" (click)=\"addToWallet()\">Add to\r\n        wallet</ion-label>\r\n    </div>\r\n\r\n    <div class=\"inputCard\"></div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_appointmentpopup_appointmentpopup_page_ts.js.map