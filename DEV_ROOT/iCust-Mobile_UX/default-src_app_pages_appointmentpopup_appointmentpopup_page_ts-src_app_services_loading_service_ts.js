"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_appointmentpopup_appointmentpopup_page_ts-src_app_services_loading_service_ts"],{

/***/ 14808:
/*!*****************************************************************!*\
  !*** ./src/app/pages/appointmentpopup/appointmentpopup.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentpopupPage": () => (/* binding */ AppointmentpopupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _appointmentpopup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appointmentpopup.page.html?ngResource */ 49308);
/* harmony import */ var _appointmentpopup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appointmentpopup.page.scss?ngResource */ 97645);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var _transaction_popup_transaction_popup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../transaction-popup/transaction-popup.page */ 123);











let AppointmentpopupPage = class AppointmentpopupPage {
    constructor(router, dataRoute, api, toastService, alertController, modalCtrl, shareDataService) {
        this.router = router;
        this.dataRoute = dataRoute;
        this.api = api;
        this.toastService = toastService;
        this.alertController = alertController;
        this.modalCtrl = modalCtrl;
        this.shareDataService = shareDataService;
        this.tokenObjects = new _transaction_popup_transaction_popup_page__WEBPACK_IMPORTED_MODULE_6__.TokenObjects();
        this.myAngularxQrCode = null;
        this.handlerMessage = '';
        this.roleMessage = '';
        this.myAngularxQrCode = 'Your QR code data string';
        // if (this.router.getCurrentNavigation().extras.state) {
        //   console.log(this.router.getCurrentNavigation().extras.state)
        // }
        this.dataTransactionId = this.dataRoute.snapshot.params['transactionId'];
    }
    ngOnInit() {
        this.phoneNumber = localStorage.getItem('customerPhonenum');
        this.api.getIndex().subscribe(resp => {
            console.log(resp.index);
            this.assignProductCode(resp.index);
        });
        // setTimeout(() => {
        //   this.generateQRCode();
        // }, 100);
        localStorage.getItem('AccountNumber');
        localStorage.getItem('TransactionDate');
        localStorage.getItem('TransactionTime');
        // console.log(localStorage.getItem('TransactionTime'));
        // this.appointmentDetails = localStorage.getItem('AppointmentDetails');
        this.appointmentDetails = JSON.parse(localStorage.getItem('AppointmentDetails'));
        console.log(this.appointmentDetails);
        if (this.appointmentDetails) {
            this.appointmentStatus = this.appointmentDetails.appointmentStatus;
            this.appointmentId = this.appointmentDetails.appointmentId;
            this.transAmount = this.appointmentDetails.transactionAmount;
            this.transDate = this.appointmentDetails.transactionDate;
            this.transTime = this.appointmentDetails.transactionTime;
            this.branch = this.appointmentDetails.transactionBranch;
            this.accountNum = this.appointmentDetails.accountNumber;
            this.generateQRCode();
        }
        else {
            this.getData();
        }
        console.log(this.tokenObjects);
        // this.generateQRCode();
    }
    assignProductCode(index) {
        this.productCode = index;
    }
    next() {
        this.modalCtrl.dismiss();
        this.router.navigate(['appointment']);
        localStorage.removeItem('AppointmentDetails');
    }
    generateQRCode() {
        this.shareDataService.getTransactionId.subscribe(transId => {
            console.log("transId::", transId);
            if (transId != null) {
                this.tokenObjects.transactionId = Object.getOwnPropertyNames(transId).length === 0 ? this.dataTransactionId || '' : transId;
            }
        });
        console.log('this.tokenObjects.transactionId -- ', this.tokenObjects.transactionId);
        console.log('this.tokenObjects.accnum -- ', localStorage.getItem('AccountNumber'));
        this.tokenObjects.accountId = this.accountNum;
        this.tokenObjects.transactionDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date(localStorage.getItem('TransactionDate'))).format("DD-MM-YYYY");
        this.tokenObjects.transactionDate = localStorage.getItem('TransactionDate');
        this.tokenObjects.timeSlot = localStorage.getItem('TransactionTime');
        this.tokenObjects.productCode = this.productCode;
        this.tokenObjects.phoneNumber = this.phoneNumber;
        this.api.generateQRCode(this.tokenObjects).subscribe(tokenResp => {
            console.log("Token Response", tokenResp);
            this.createImageFromBlob(tokenResp);
        }, err => {
            console.log("err : ", err);
        });
    }
    createImageFromBlob(image) {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            this.imageToShow = reader.result;
        }, false);
        if (image) {
            reader.readAsDataURL(image);
        }
    }
    presentAlert(event) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log(event);
            const alert = yield this.alertController.create({
                header: 'Are you sure you want to Cancle this appointment?',
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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            console.log(this.appointmentDetails);
            this.value = this.appointmentDetails;
            console.log(this.value.trnType.toLowerCase().replace(' ', ''));
            this.router.navigateByUrl(`/${this.value.trnType.toLowerCase().replace(' ', '')}`, {
                state: { data: this.value },
            });
            this.modalCtrl.dismiss(this.value);
            localStorage.removeItem('AppointmentDetails');
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
            this.appointmentStatus = resp.appointmentStatus;
            this.appointmentId = resp.appointmentId;
            this.transAmount = resp.transactionAmount;
            this.transDate = resp.transactionDate;
            this.transTime = resp.transactionTime;
            this.branch = resp.transactionBranch;
            this.accountNum = resp.accountNumber;
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
            this.transDate = this.trans.transactionDate;
            this.transTime = this.trans.transactionTime;
            this.branch = this.trans.transactionBranch;
            this.accountNum = this.trans.accountNumber;
            this.tranType = this.trans.trnType;
            console.log(this.trans.trnType);
            this.generateQRCode();
            // let objectURL = 'data:image/jpeg;base64,' + this.trans.qrCodeImage;
            // this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        });
    }
    addToWallet() {
        let payload = {
            transactionId: this.tokenObjects.transactionId,
            addToWallet: true
        };
        this.api.updateAddToWallet(payload).subscribe(res => {
            this.toastService.showToast("Added Successfully");
            this.router.navigate(['tabs']);
        }, (err) => {
            console.error(err);
        });
    }
};
AppointmentpopupPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ModalController },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService }
];
AppointmentpopupPage.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.Input }]
};
AppointmentpopupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-appointmentpopup',
        template: _appointmentpopup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_appointmentpopup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppointmentpopupPage);



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

/***/ 97645:
/*!******************************************************************************!*\
  !*** ./src/app/pages/appointmentpopup/appointmentpopup.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".rect {\n  margin-top: 50pt;\n  background-color: #456efe;\n  margin-left: 24pt;\n  margin-right: 24pt;\n  margin-bottom: 53pt;\n  border-radius: 20px;\n  border-bottom-style: hidden;\n}\n\nion-header {\n  bottom: none;\n}\n\nion-content {\n  --ion-background-color: #111d12;\n}\n\n.new-background-color {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  --background: white;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: inline-block;\n  vertical-align: middle;\n  color: #3477c6;\n  font-size: 13pt;\n  font-family: \"Montserrat\" !important;\n  box-shadow: none;\n}\n\n.text1 {\n  display: block;\n  text-align: center;\n  padding-top: 10pt;\n  color: #102245;\n  opacity: 27%;\n  size: 10pt;\n  font-family: \"Montserrat\" !important;\n  justify-content: center;\n}\n\n.text2 {\n  display: block;\n  text-align: center;\n  padding-top: 10pt;\n  color: #102245;\n  opacity: 100%;\n  font-size: 27pt;\n  padding-bottom: 10pt;\n  font-family: \"Montserrat\" !important;\n  justify-content: center;\n}\n\n.accountSummaryText {\n  text-align: center;\n}\n\n.innerRect {\n  position: relative;\n}\n\n.circle {\n  position: absolute;\n  left: 48%;\n  top: -18px;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background-color: white;\n}\n\n.head {\n  box-shadow: none;\n}\n\n.inputCard:not(.display) {\n  padding-left: 32pt;\n  padding-top: 42pt;\n  font-family: \"Montserrat\" !important;\n  color: #ffffff;\n  size: 14pt;\n}\n\n.display {\n  display: block;\n  font-size: 17pt;\n  color: #ffffff;\n  padding-top: 10pt;\n  padding-bottom: 20pt;\n}\n\n.qr_img {\n  padding-top: 10pt;\n  width: 100pt;\n  height: 100pt;\n  margin-left: 32pt;\n  position: relative;\n  overflow: hidden;\n}\n\n.qr_img img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(1.25);\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0;\n}\n\n.header-md::after {\n  left: unset;\n  bottom: -5px;\n  background-position: left 0 top -2px;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);\n  background-repeat: repeat-x;\n  content: \"\";\n}\n\n.close {\n  color: lightgrey;\n  height: 18pt;\n  width: 18pt;\n  position: absolute;\n  right: 10px;\n  top: -5px;\n}\n\n.header_title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 10px 20px;\n}\n\n.header_title p.text {\n  font-size: 16px;\n  font-weight: bold;\n  margin-bottom: 0;\n}\n\n.token {\n  padding: 15px 20px 20px;\n}\n\n.token p {\n  text-align: center;\n  margin: 0;\n}\n\n.token_number {\n  color: #999;\n  font-size: 15px;\n}\n\n.token_value_row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.token_value_row ion-icon {\n  font-size: x-large;\n  color: #888;\n}\n\n.token_value_row p {\n  flex-grow: 1;\n  color: #777;\n  font-size: x-large;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcG9pbnRtZW50cG9wdXAucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0SHViJTIwUmVwb3NpdG9yeSUyMG9sZFxcaUN1c3RNb2JpbGUtdjJcXHNyY1xcYXBwXFxwYWdlc1xcYXBwb2ludG1lbnRwb3B1cFxcYXBwb2ludG1lbnRwb3B1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUdBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQ0RGOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBREVBO0VBQ0UsK0JBQUE7QUNDRjs7QURDQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFHQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFHQSxvQ0FBQTtFQUNBLGdCQUFBO0FDRkY7O0FES0E7RUFDRSxjQUFBO0VBRUEsa0JBQUE7RUFFQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO0VBQ0EsdUJBQUE7QUNKRjs7QURNQTtFQUNFLGNBQUE7RUFFQSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBRUEsb0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHVCQUFBO0FDTkY7O0FEU0E7RUFDRSxrQkFBQTtBQ05GOztBRFNBO0VBQ0Usa0JBQUE7QUNORjs7QURRQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNMRjs7QURPQTtFQUNFLGdCQUFBO0FDSkY7O0FETUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0VBRUEsVUFBQTtBQ0pGOztBRE1BO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0hGOztBRE1BO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0hGOztBREtFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDRDQUFBO0FDSEo7O0FET0E7RUFDRSxpQkFBQTtBQ0pGOztBRE1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5TkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQ0hGOztBREtBO0VBRUUsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLFNBQUE7QUNKRjs7QURTQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNORjs7QURPRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDTEo7O0FEUUE7RUFDRSx1QkFBQTtBQ0xGOztBRE1FO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FDSko7O0FETUU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ0pKOztBRE1FO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNKSjs7QURLSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ0hOOztBREtJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDSE4iLCJmaWxlIjoiYXBwb2ludG1lbnRwb3B1cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVjdCB7XHJcbiAgbWFyZ2luLXRvcDogNTBwdDtcclxuICAvLyBtaW4td2lkdGg6IDMyN3B0O1xyXG4gIC8vbWluLWhlaWdodDogNDcwcHQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NmVmZTtcclxuICBtYXJnaW4tbGVmdDogMjRwdDtcclxuICBtYXJnaW4tcmlnaHQ6IDI0cHQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTNwdDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IGhpZGRlbjtcclxufVxyXG5pb24taGVhZGVyIHtcclxuICBib3R0b206IG5vbmU7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMxMTFkMTI7XHJcbn1cclxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9yIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAvLyAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgLy8gbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGNvbG9yOiAjMzQ3N2M2O1xyXG4gIGZvbnQtc2l6ZTogMTNwdDtcclxuICAvLyBwYWRkaW5nLXRvcDoyNHB0O1xyXG4gIC8vIHBhZGRpbmctbGVmdDo0cHQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLnRleHQxIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAvLyBwYWRkaW5nLWxlZnQ6NjBwdDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gbWFyZ2luLXRvcDo2NnB0O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB0O1xyXG4gIGNvbG9yOiAjMTAyMjQ1O1xyXG4gIG9wYWNpdHk6IDI3JTtcclxuICBzaXplOiAxMHB0O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi50ZXh0MiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OjYwcHQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vIG1hcmdpbi10b3A6NjZwdDtcclxuICBwYWRkaW5nLXRvcDogMTBwdDtcclxuICBjb2xvcjogIzEwMjI0NTtcclxuICBvcGFjaXR5OiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMjdwdDtcclxuICAvLyBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB0O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYWNjb3VudFN1bW1hcnlUZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbm5lclJlY3Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY2lyY2xlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNDglO1xyXG4gIHRvcDogLTE4cHg7XHJcbiAgd2lkdGg6IDM2cHg7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uaGVhZCB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uaW5wdXRDYXJkOm5vdCguZGlzcGxheSkge1xyXG4gIHBhZGRpbmctbGVmdDogMzJwdDtcclxuICBwYWRkaW5nLXRvcDogNDJwdDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICAvLyBvcGFjaXR5OiA1MSU7XHJcbiAgc2l6ZTogMTRwdDtcclxufVxyXG4uZGlzcGxheSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxN3B0O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB0O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB0O1xyXG4gIC8vIG9wYWNpdHk6IDEwMCU7XHJcbn1cclxuLnFyX2ltZyB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHQ7XHJcbiAgd2lkdGg6IDEwMHB0O1xyXG4gIGhlaWdodDogMTAwcHQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDMycHQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIGltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEuMjUpO1xyXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDE4cHQ7XHJcbiAgfVxyXG59XHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDA7XHJcbn1cclxuLmhlYWRlci1tZDo6YWZ0ZXIge1xyXG4gIGxlZnQ6IHVuc2V0O1xyXG4gIGJvdHRvbTogLTVweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDAgdG9wIC0ycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQUhCQU1BQUFEekR0QnhBQUFBRDFCTVZFVUFBQUFBQUFBQUFBQUFBQUFBQUFCUER1ZU5BQUFBQlhSU1RsTVVDUzBnQkloL1RYRUFBQUFhU1VSQlZBalhZeENFQWdZNFVJSUNCbU1vZ01zZ0ZMdEFBUUNOU3dYWktPZFB4Z0FBQUFCSlJVNUVya0pnZ2c9PSk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuLmNsb3NlIHtcclxuICAvLyBtYXJnaW4tYm90dG9tOjE0MHB4O1xyXG4gIGNvbG9yOiBsaWdodGdyZXk7XHJcbiAgaGVpZ2h0OiAxOHB0O1xyXG4gIHdpZHRoOiAxOHB0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIHRvcDogLTVweDtcclxuICAvLyBwYWRkaW5nLWJvdHRvbTogMTMwcHg7XHJcbiAgLy8gcGFkZGluZy1yaWdodDoxMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyX3RpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICBwLnRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIH1cclxufVxyXG4udG9rZW4ge1xyXG4gIHBhZGRpbmc6IDE1cHggMjBweCAyMHB4O1xyXG4gIHAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAmX251bWJlciB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgJl92YWx1ZV9yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgICAgY29sb3I6ICM4ODg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBjb2xvcjogIzc3NztcclxuICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnJlY3Qge1xuICBtYXJnaW4tdG9wOiA1MHB0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU2ZWZlO1xuICBtYXJnaW4tbGVmdDogMjRwdDtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB0O1xuICBtYXJnaW4tYm90dG9tOiA1M3B0O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBoaWRkZW47XG59XG5cbmlvbi1oZWFkZXIge1xuICBib3R0b206IG5vbmU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzExMWQxMjtcbn1cblxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6ICMzNDc3YzY7XG4gIGZvbnQtc2l6ZTogMTNwdDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi50ZXh0MSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMHB0O1xuICBjb2xvcjogIzEwMjI0NTtcbiAgb3BhY2l0eTogMjclO1xuICBzaXplOiAxMHB0O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50ZXh0MiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMHB0O1xuICBjb2xvcjogIzEwMjI0NTtcbiAgb3BhY2l0eTogMTAwJTtcbiAgZm9udC1zaXplOiAyN3B0O1xuICBwYWRkaW5nLWJvdHRvbTogMTBwdDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWNjb3VudFN1bW1hcnlUZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5uZXJSZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2lyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0OCU7XG4gIHRvcDogLTE4cHg7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5oZWFkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmlucHV0Q2FyZDpub3QoLmRpc3BsYXkpIHtcbiAgcGFkZGluZy1sZWZ0OiAzMnB0O1xuICBwYWRkaW5nLXRvcDogNDJwdDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBzaXplOiAxNHB0O1xufVxuXG4uZGlzcGxheSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE3cHQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nLXRvcDogMTBwdDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHQ7XG59XG5cbi5xcl9pbWcge1xuICBwYWRkaW5nLXRvcDogMTBwdDtcbiAgd2lkdGg6IDEwMHB0O1xuICBoZWlnaHQ6IDEwMHB0O1xuICBtYXJnaW4tbGVmdDogMzJwdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnFyX2ltZyBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEuMjUpO1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAtLWJvcmRlci13aWR0aDogMDtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBsZWZ0OiB1bnNldDtcbiAgYm90dG9tOiAtNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDAgdG9wIC0ycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFIQkFNQUFBRHpEdEJ4QUFBQUQxQk1WRVVBQUFBQUFBQUFBQUFBQUFBQUFBQlBEdWVOQUFBQUJYUlNUbE1VQ1MwZ0JJaC9UWEVBQUFBYVNVUkJWQWpYWXhDRUFnWTRVSUlDQm1Nb2dNc2dGTHRBQVFDTlN3WFpLT2RQeGdBQUFBQkpSVTVFcmtKZ2dnPT0pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi5jbG9zZSB7XG4gIGNvbG9yOiBsaWdodGdyZXk7XG4gIGhlaWdodDogMThwdDtcbiAgd2lkdGg6IDE4cHQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogLTVweDtcbn1cblxuLmhlYWRlcl90aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xufVxuLmhlYWRlcl90aXRsZSBwLnRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4udG9rZW4ge1xuICBwYWRkaW5nOiAxNXB4IDIwcHggMjBweDtcbn1cbi50b2tlbiBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG59XG4udG9rZW5fbnVtYmVyIHtcbiAgY29sb3I6ICM5OTk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi50b2tlbl92YWx1ZV9yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udG9rZW5fdmFsdWVfcm93IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICBjb2xvcjogIzg4ODtcbn1cbi50b2tlbl92YWx1ZV9yb3cgcCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgY29sb3I6ICM3Nzc7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */";

/***/ }),

/***/ 49308:
/*!******************************************************************************!*\
  !*** ./src/app/pages/appointmentpopup/appointmentpopup.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <div class=\"rect\">\r\n    <ion-header class=\"head\">\r\n      <ion-toolbar class=\"new-background-color\" style=\"--border-width: 0\">\r\n        <div class=\"header_title\">\r\n          <p class=\"text\">{{trans?.trnType}}</p>\r\n          <ion-icon\r\n            name=\"close\"\r\n            class=\"\"\r\n            slot=\"end\"\r\n            (click)=\"next()\"\r\n          ></ion-icon>\r\n        </div>\r\n        <div class=\"token\">\r\n          <p class=\"token_number\">Appointment Id</p>\r\n          <div class=\"token_value_row\">\r\n            <div (click)=\"editTransaction()\">\r\n              <ion-icon name=\"pencil\"></ion-icon>\r\n            </div>\r\n            <p class=\"token_value\">{{appointmentId}}</p>\r\n            <div>\r\n              <ion-icon\r\n                name=\"trash-outline\"\r\n                (click)=\"presentAlert(trans)\"\r\n              ></ion-icon>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <div class=\"innerRect\">\r\n      <span class=\"circle\"></span>\r\n      <div class=\"inputCard\">\r\n        <ion-label style=\"opacity: 51%\">Account Number</ion-label>\r\n        <ion-label class=\"display\">{{accountNum}}</ion-label>\r\n\r\n        <ion-label style=\"opacity: 51%\">Transaction Amount</ion-label>\r\n        <ion-label class=\"display\">{{transAmount}}</ion-label>\r\n\r\n        <ion-label style=\"opacity: 51%\">Transaction Branch</ion-label>\r\n        <ion-label class=\"display\">{{branch}}</ion-label>\r\n\r\n        <ion-label style=\"opacity: 51%\">Transaction Date</ion-label>\r\n        <ion-label class=\"display\">{{transDate}}</ion-label>\r\n\r\n        <ion-label style=\"opacity: 51%\">Time Slot</ion-label>\r\n        <ion-label class=\"display\">{{transTime}}</ion-label>\r\n        \r\n        <ion-label style=\"opacity: 51%\">Appointment Status</ion-label>\r\n        <ion-label class=\"display\">{{appointmentStatus}}</ion-label>\r\n      </div>\r\n\r\n      <!-- <img [src]=\"imageToShow\"> -->\r\n      <!-- <img [src]=\"image\"> -->\r\n      <div class=\"qr_img\">\r\n        <img [src]=\"imageToShow\" />\r\n      </div>\r\n\r\n      <ion-label\r\n        class=\"inputCard\"\r\n        style=\"display: block; opacity: 70%; font-size: 16pt\"\r\n        (click)=\"addToWallet()\"\r\n        >Add to wallet</ion-label\r\n      >\r\n    </div>\r\n\r\n    <div class=\"inputCard\"></div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_appointmentpopup_appointmentpopup_page_ts-src_app_services_loading_service_ts.js.map