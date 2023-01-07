"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_transaction-popup_transaction-popup_page_ts"],{

/***/ 123:
/*!*******************************************************************!*\
  !*** ./src/app/pages/transaction-popup/transaction-popup.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenObjects": () => (/* binding */ TokenObjects),
/* harmony export */   "TransactionPopupPage": () => (/* binding */ TransactionPopupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _transaction_popup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transaction-popup.page.html?ngResource */ 43450);
/* harmony import */ var _transaction_popup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transaction-popup.page.scss?ngResource */ 57728);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 50318);










class TokenObjects {
}
let TransactionPopupPage = class TransactionPopupPage {
    // sanitizer: any;
    constructor(navCtrl, api, modalCtrl, sanitizer, shareDataService, apiService, router, toastService) {
        this.navCtrl = navCtrl;
        this.api = api;
        this.modalCtrl = modalCtrl;
        this.sanitizer = sanitizer;
        this.shareDataService = shareDataService;
        this.apiService = apiService;
        this.router = router;
        this.toastService = toastService;
        this.tokenObjects = new TokenObjects();
    }
    ngOnInit() {
        setTimeout(() => {
            this.generateQRCode(this.tokenObjects);
        }, 100);
        this.getData();
        this.generateQRCode(this.tokenObjects);
    }
    getData() {
        this.shareDataService.getAccountInfo.subscribe(data => {
            console.log("Data", data);
            this.accountInfo = data;
        });
        this.apiService.getByTransactionId(this.value).subscribe(response => {
            this.tellerId = response.tellerId;
            this.trans = JSON.stringify(response);
            this.trans = JSON.parse(this.trans);
            let objectURL = 'data:image/jpeg;base64,' + this.trans.qrCodeImage;
            this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL);
        });
    }
    generateQRCode(token) {
        this.api.generateQRCode(this.tokenObjects).subscribe(tokenResp => {
            console.log("Token Response", tokenResp);
            this.createImageFromBlob(tokenResp);
        }, err => {
        });
    }
    createImageFromBlob(image) {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            this.imageToShow = reader.result;
        }, false);
        if (image) {
            console.log("i->", image);
            reader.readAsDataURL(image);
        }
    }
    next() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            console.log("before");
            // this.router.navigate(['/tabs/transaction']);
            yield this.modalCtrl.dismiss();
            console.log("after", this.router);
        });
    }
    addToWallet() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            this.toastService.showToast("Added Successfully!");
            this.router.navigate(['tabs']);
            yield this.modalCtrl.dismiss();
        });
    }
};
TransactionPopupPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.DomSanitizer },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService }
];
TransactionPopupPage.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Input }]
};
TransactionPopupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-transaction-popup',
        template: _transaction_popup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_transaction_popup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TransactionPopupPage);



/***/ }),

/***/ 52468:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 84505);



let DataService = class DataService {
    constructor() {
        this.sendTransactionId = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
        this.getTransactionId = this.sendTransactionId.asObservable();
        this.sendAccountInfo = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
        this.getAccountInfo = this.sendAccountInfo.asObservable();
        this.sendAvatarUrl = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(null);
        this.getAvatarUrl = this.sendAvatarUrl.asObservable();
        this.sendAppointmentId = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject({});
        this.getAppointmentId = this.sendAppointmentId.asObservable();
    }
    shareTransactionId(params) {
        this.sendTransactionId.next(params);
    }
    shareAppointmentId(params) {
        this.sendAppointmentId.next(params);
    }
    shareAccountInfo(params) {
        this.sendAccountInfo.next(params);
    }
    shareAvatarUrl(avatarInfo) {
        this.sendAvatarUrl.next(avatarInfo);
    }
};
DataService.ctorParameters = () => [];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ 84465:
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastService": () => (/* binding */ ToastService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ionic/angular */ 93819);



let ToastService = class ToastService {
    constructor(toast) {
        this.toast = toast;
    }
    showToast(msg) {
        this.myToast = this.toast.create({
            message: msg,
            duration: 3000,
            buttons: [
                {
                    text: 'Dismiss',
                    role: 'cancel',
                    handler: () => { }
                }
            ]
        }).then((toastData) => {
            toastData.present();
        });
    }
    dismissToast() {
        this.myToast = this.toast.dismiss();
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_0__.ToastController }
];
ToastService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], ToastService);



/***/ }),

/***/ 57728:
/*!********************************************************************************!*\
  !*** ./src/app/pages/transaction-popup/transaction-popup.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".rect {\n  margin-top: 50pt;\n  background-color: #456efe;\n  margin-left: 24pt;\n  margin-right: 24pt;\n  margin-bottom: 53pt;\n  border-radius: 20px;\n  border-bottom-style: hidden;\n}\n\nion-header {\n  bottom: none;\n}\n\nion-content {\n  --ion-background-color: #111d12;\n}\n\n.new-background-color {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  --background: white;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: inline-block;\n  vertical-align: middle;\n  color: #3477c6;\n  font-size: 13pt;\n  font-family: \"Montserrat\" !important;\n  box-shadow: none;\n}\n\n.text1 {\n  display: block;\n  text-align: center;\n  padding-top: 10pt;\n  color: #102245;\n  opacity: 27%;\n  size: 10pt;\n  font-family: \"Montserrat\" !important;\n  justify-content: center;\n}\n\n.text2 {\n  display: block;\n  text-align: center;\n  padding-top: 10pt;\n  color: #102245;\n  opacity: 100%;\n  font-size: 27pt;\n  padding-bottom: 10pt;\n  font-family: \"Montserrat\" !important;\n  justify-content: center;\n}\n\n.accountSummaryText {\n  text-align: center;\n}\n\n.innerRect {\n  position: relative;\n}\n\n.circle {\n  position: absolute;\n  left: 48%;\n  top: -18px;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background-color: white;\n}\n\n.head {\n  box-shadow: none;\n}\n\n.inputCard:not(.display) {\n  padding-left: 32pt;\n  padding-top: 42pt;\n  font-family: \"Montserrat\" !important;\n  color: #ffffff;\n  size: 14pt;\n}\n\n.display {\n  display: block;\n  font-size: 17pt;\n  color: #ffffff;\n  padding-top: 10pt;\n  padding-bottom: 20pt;\n}\n\n.qr_img {\n  padding-top: 10pt;\n  width: 100pt;\n  height: 100pt;\n  margin-left: 32pt;\n  position: relative;\n  overflow: hidden;\n}\n\n.qr_img img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(1.25);\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0;\n}\n\n.header-md::after {\n  left: unset;\n  bottom: -5px;\n  background-position: left 0 top -2px;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);\n  background-repeat: repeat-x;\n  content: \"\";\n}\n\n.close {\n  color: lightgrey;\n  height: 18pt;\n  width: 18pt;\n  position: absolute;\n  right: 10px;\n  top: -5px;\n}\n\n.header_title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n}\n\n.header_title p.text {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.token {\n  padding: 15px 20px 20px;\n}\n\n.token p {\n  text-align: center;\n  margin: 0;\n}\n\n.token_number {\n  color: #999;\n  font-size: 15px;\n}\n\n.token_value_row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.token_value_row ion-icon {\n  font-size: x-large;\n  color: #888;\n}\n\n.token_value_row p {\n  flex-grow: 1;\n  color: #777;\n  font-size: x-large;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zYWN0aW9uLXBvcHVwLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdEh1YiUyMFJlcG9zaXRvcnklMjBvbGRcXGlDdXN0TW9iaWxlLXYyXFxzcmNcXGFwcFxccGFnZXNcXHRyYW5zYWN0aW9uLXBvcHVwXFx0cmFuc2FjdGlvbi1wb3B1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUdBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQ0RGOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBREVBO0VBQ0UsK0JBQUE7QUNDRjs7QURDQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFHQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFHQSxvQ0FBQTtFQUNBLGdCQUFBO0FDRkY7O0FES0E7RUFDRSxjQUFBO0VBRUEsa0JBQUE7RUFFQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO0VBQ0EsdUJBQUE7QUNKRjs7QURNQTtFQUNFLGNBQUE7RUFFQSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBRUEsb0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHVCQUFBO0FDTkY7O0FEU0E7RUFDRSxrQkFBQTtBQ05GOztBRFNBO0VBQ0Usa0JBQUE7QUNORjs7QURRQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNMRjs7QURPQTtFQUNFLGdCQUFBO0FDSkY7O0FETUE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0VBRUEsVUFBQTtBQ0pGOztBRE1BO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0hGOztBRE1BO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0hGOztBREtFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDRDQUFBO0FDSEo7O0FET0E7RUFDRSxpQkFBQTtBQ0pGOztBRE1BO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5TkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQ0hGOztBREtBO0VBRUUsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLFNBQUE7QUNKRjs7QURTQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ05GOztBRE9FO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FDTEo7O0FEUUE7RUFDRSx1QkFBQTtBQ0xGOztBRE1FO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FDSko7O0FETUU7RUFDRSxXQUFBO0VBQ0EsZUFBQTtBQ0pKOztBRE1FO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUNKSjs7QURLSTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQ0hOOztBREtJO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDSE4iLCJmaWxlIjoidHJhbnNhY3Rpb24tcG9wdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlY3Qge1xyXG4gIG1hcmdpbi10b3A6IDUwcHQ7XHJcbiAgLy8gbWluLXdpZHRoOiAzMjdwdDtcclxuICAvL21pbi1oZWlnaHQ6IDQ3MHB0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NTZlZmU7XHJcbiAgbWFyZ2luLWxlZnQ6IDI0cHQ7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyNHB0O1xyXG4gIG1hcmdpbi1ib3R0b206IDUzcHQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBib3JkZXItYm90dG9tLXN0eWxlOiBoaWRkZW47XHJcbn1cclxuaW9uLWhlYWRlciB7XHJcbiAgYm90dG9tOiBub25lO1xyXG59XHJcbmlvbi1jb250ZW50IHtcclxuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiAjMTExZDEyO1xyXG59XHJcbi5uZXctYmFja2dyb3VuZC1jb2xvciB7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgLy8gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIC8vIG1hcmdpbi1sZWZ0OiAyJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBjb2xvcjogIzM0NzdjNjtcclxuICBmb250LXNpemU6IDEzcHQ7XHJcbiAgLy8gcGFkZGluZy10b3A6MjRwdDtcclxuICAvLyBwYWRkaW5nLWxlZnQ6NHB0O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi50ZXh0MSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OjYwcHQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vIG1hcmdpbi10b3A6NjZwdDtcclxuICBwYWRkaW5nLXRvcDogMTBwdDtcclxuICBjb2xvcjogIzEwMjI0NTtcclxuICBvcGFjaXR5OiAyNyU7XHJcbiAgc2l6ZTogMTBwdDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4udGV4dDIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIC8vIHBhZGRpbmctbGVmdDo2MHB0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvLyBtYXJnaW4tdG9wOjY2cHQ7XHJcbiAgcGFkZGluZy10b3A6IDEwcHQ7XHJcbiAgY29sb3I6ICMxMDIyNDU7XHJcbiAgb3BhY2l0eTogMTAwJTtcclxuICBmb250LXNpemU6IDI3cHQ7XHJcbiAgLy8gZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBwdDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmFjY291bnRTdW1tYXJ5VGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5uZXJSZWN0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNpcmNsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDQ4JTtcclxuICB0b3A6IC0xOHB4O1xyXG4gIHdpZHRoOiAzNnB4O1xyXG4gIGhlaWdodDogMzZweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmhlYWQge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmlucHV0Q2FyZDpub3QoLmRpc3BsYXkpIHtcclxuICBwYWRkaW5nLWxlZnQ6IDMycHQ7XHJcbiAgcGFkZGluZy10b3A6IDQycHQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgLy8gb3BhY2l0eTogNTElO1xyXG4gIHNpemU6IDE0cHQ7XHJcbn1cclxuLmRpc3BsYXkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTdwdDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBwYWRkaW5nLXRvcDogMTBwdDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBwdDtcclxuICAvLyBvcGFjaXR5OiAxMDAlO1xyXG59XHJcbi5xcl9pbWcge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB0O1xyXG4gIHdpZHRoOiAxMDBwdDtcclxuICBoZWlnaHQ6IDEwMHB0O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMnB0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG5cclxuICBpbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKSBzY2FsZSgxLjI1KTtcclxuICAgIC8vIHBhZGRpbmctYm90dG9tOiAxOHB0O1xyXG4gIH1cclxufVxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xyXG4gIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG59XHJcbi5oZWFkZXItbWQ6OmFmdGVyIHtcclxuICBsZWZ0OiB1bnNldDtcclxuICBib3R0b206IC01cHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCAwIHRvcCAtMnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDVweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFIQkFNQUFBRHpEdEJ4QUFBQUQxQk1WRVVBQUFBQUFBQUFBQUFBQUFBQUFBQlBEdWVOQUFBQUJYUlNUbE1VQ1MwZ0JJaC9UWEVBQUFBYVNVUkJWQWpYWXhDRUFnWTRVSUlDQm1Nb2dNc2dGTHRBQVFDTlN3WFpLT2RQeGdBQUFBQkpSVTVFcmtKZ2dnPT0pO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICBjb250ZW50OiBcIlwiO1xyXG59XHJcbi5jbG9zZSB7XHJcbiAgLy8gbWFyZ2luLWJvdHRvbToxNDBweDtcclxuICBjb2xvcjogbGlnaHRncmV5O1xyXG4gIGhlaWdodDogMThwdDtcclxuICB3aWR0aDogMThwdDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8ganVzdGlmeS1jb250ZW50OiByaWdodDtcclxuICByaWdodDogMTBweDtcclxuICB0b3A6IC01cHg7XHJcbiAgLy8gcGFkZGluZy1ib3R0b206IDEzMHB4O1xyXG4gIC8vIHBhZGRpbmctcmlnaHQ6MTBweDtcclxufVxyXG5cclxuLmhlYWRlcl90aXRsZSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgcC50ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG4udG9rZW4ge1xyXG4gIHBhZGRpbmc6IDE1cHggMjBweCAyMHB4O1xyXG4gIHAge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAmX251bWJlciB7XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgJl92YWx1ZV9yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgICAgY29sb3I6ICM4ODg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICBjb2xvcjogIzc3NztcclxuICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLnJlY3Qge1xuICBtYXJnaW4tdG9wOiA1MHB0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU2ZWZlO1xuICBtYXJnaW4tbGVmdDogMjRwdDtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB0O1xuICBtYXJnaW4tYm90dG9tOiA1M3B0O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBoaWRkZW47XG59XG5cbmlvbi1oZWFkZXIge1xuICBib3R0b206IG5vbmU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzExMWQxMjtcbn1cblxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6ICMzNDc3YzY7XG4gIGZvbnQtc2l6ZTogMTNwdDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi50ZXh0MSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMHB0O1xuICBjb2xvcjogIzEwMjI0NTtcbiAgb3BhY2l0eTogMjclO1xuICBzaXplOiAxMHB0O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50ZXh0MiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMHB0O1xuICBjb2xvcjogIzEwMjI0NTtcbiAgb3BhY2l0eTogMTAwJTtcbiAgZm9udC1zaXplOiAyN3B0O1xuICBwYWRkaW5nLWJvdHRvbTogMTBwdDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWNjb3VudFN1bW1hcnlUZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5uZXJSZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2lyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0OCU7XG4gIHRvcDogLTE4cHg7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5oZWFkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmlucHV0Q2FyZDpub3QoLmRpc3BsYXkpIHtcbiAgcGFkZGluZy1sZWZ0OiAzMnB0O1xuICBwYWRkaW5nLXRvcDogNDJwdDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBzaXplOiAxNHB0O1xufVxuXG4uZGlzcGxheSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE3cHQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nLXRvcDogMTBwdDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHQ7XG59XG5cbi5xcl9pbWcge1xuICBwYWRkaW5nLXRvcDogMTBwdDtcbiAgd2lkdGg6IDEwMHB0O1xuICBoZWlnaHQ6IDEwMHB0O1xuICBtYXJnaW4tbGVmdDogMzJwdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnFyX2ltZyBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEuMjUpO1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAtLWJvcmRlci13aWR0aDogMDtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBsZWZ0OiB1bnNldDtcbiAgYm90dG9tOiAtNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDAgdG9wIC0ycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFIQkFNQUFBRHpEdEJ4QUFBQUQxQk1WRVVBQUFBQUFBQUFBQUFBQUFBQUFBQlBEdWVOQUFBQUJYUlNUbE1VQ1MwZ0JJaC9UWEVBQUFBYVNVUkJWQWpYWXhDRUFnWTRVSUlDQm1Nb2dNc2dGTHRBQVFDTlN3WFpLT2RQeGdBQUFBQkpSVTVFcmtKZ2dnPT0pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi5jbG9zZSB7XG4gIGNvbG9yOiBsaWdodGdyZXk7XG4gIGhlaWdodDogMThwdDtcbiAgd2lkdGg6IDE4cHQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogLTVweDtcbn1cblxuLmhlYWRlcl90aXRsZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMCAyMHB4O1xufVxuLmhlYWRlcl90aXRsZSBwLnRleHQge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4udG9rZW4ge1xuICBwYWRkaW5nOiAxNXB4IDIwcHggMjBweDtcbn1cbi50b2tlbiBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDA7XG59XG4udG9rZW5fbnVtYmVyIHtcbiAgY29sb3I6ICM5OTk7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi50b2tlbl92YWx1ZV9yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udG9rZW5fdmFsdWVfcm93IGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICBjb2xvcjogIzg4ODtcbn1cbi50b2tlbl92YWx1ZV9yb3cgcCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgY29sb3I6ICM3Nzc7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */";

/***/ }),

/***/ 43450:
/*!********************************************************************************!*\
  !*** ./src/app/pages/transaction-popup/transaction-popup.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <div class=\"rect\">\r\n    <ion-header class=\"head\">\r\n\r\n      <ion-toolbar class=\"new-background-color\" style=\"--border-width: 0;\">\r\n        <div class=\"header_title\">\r\n          <p class=\"text\">{{trans?.trnType}}</p>\r\n          <ion-icon name=\"close\" class=\"\" slot=\"end\" (click)=\"next()\"></ion-icon>\r\n        </div>\r\n        <div class=\"token\">\r\n          <p class=\"token_number\">Token Number</p>\r\n          <div class=\"token_value_row\">\r\n            <div>\r\n              <ion-icon name=\"pencil\"></ion-icon>\r\n            </div>\r\n            <p class=\"token_value\">{{trans?.tokenNo || trans?.transactionId || ''}}</p>\r\n            <div>\r\n              <ion-icon name=\"trash-outline\"></ion-icon>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ion-toolbar>\r\n    </ion-header>\r\n\r\n    <div class=\"innerRect\">\r\n      <span class=\"circle\"></span>\r\n      <div class=\"inputCard\">\r\n\r\n        <ion-label style=\"opacity: 51%;\">Transaction Id</ion-label>\r\n        <ion-label class=\"display\">{{trans?.transactionId}}</ion-label>\r\n\r\n        <ion-label style=\"opacity: 51%;\">Account Number</ion-label>\r\n        <ion-label class=\"display\">{{trans?.accountNumber}}</ion-label>\r\n\r\n        <ion-label style=\"opacity: 51%;\">Account Type</ion-label>\r\n        <ion-label class=\"display\">{{accountInfo.accountType}}</ion-label>\r\n\r\n        <ion-label style=\"opacity: 51%;\">Account Currency</ion-label>\r\n        <ion-label class=\"display\">{{trans?.transactionCurrency}}</ion-label>\r\n\r\n        <ion-label style=\"opacity: 51%;\">Transaction Amount</ion-label>\r\n        <ion-label class=\"display\">{{trans?.transactionAmount}}</ion-label>\r\n        \r\n        <ion-label style=\"opacity: 51%;\">Transaction Branch</ion-label>\r\n        <ion-label class=\"display\">{{trans?.transactionBranch}}</ion-label>\r\n        \r\n        <ion-label style=\"opacity: 51%;\">Transaction Date</ion-label>\r\n        <ion-label class=\"display\">{{trans?.transactionDate}}</ion-label>\r\n        \r\n        <ion-label style=\"opacity: 51%;\">Time Slot</ion-label>\r\n        <ion-label class=\"display\">{{trans?.transactionTime}}</ion-label>\r\n        \r\n      </div>\r\n      \r\n      <!-- <img [src]=\"imageToShow\"> -->\r\n      <!-- <img [src]=\"image\"> -->\r\n      <div class=\"qr_img\">\r\n        <img  [src]=\"tellerId != null ? item : image\">\r\n      </div>\r\n      \r\n      <ion-label class=\"inputCard\" style=\"display:block;opacity: 70%;font-size: 16pt;\" (click)=\"addToWallet()\">Add to\r\n        wallet</ion-label>\r\n\r\n    </div>\r\n\r\n    <div class=\"inputCard\">\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_transaction-popup_transaction-popup_page_ts.js.map