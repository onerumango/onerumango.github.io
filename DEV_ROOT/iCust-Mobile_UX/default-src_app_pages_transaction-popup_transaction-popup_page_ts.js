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

module.exports = ".rect {\n  margin-top: 50pt;\n  background-color: #456efe;\n  margin-left: 24pt;\n  margin-right: 24pt;\n  margin-bottom: 53pt;\n  border-radius: 20px;\n  border-bottom-style: hidden;\n}\n\nion-header {\n  bottom: none;\n}\n\nion-content {\n  --ion-background-color: #111d12;\n}\n\n.new-background-color {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  --background: white;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: inline-block;\n  vertical-align: middle;\n  color: #3477c6;\n  font-size: 13pt;\n  font-family: \"Montserrat\" !important;\n  box-shadow: none;\n}\n\n.text1 {\n  display: block;\n  text-align: center;\n  padding-top: 10pt;\n  color: #102245;\n  opacity: 27%;\n  size: 10pt;\n  font-family: \"Montserrat\" !important;\n  justify-content: center;\n}\n\n.text2 {\n  display: block;\n  text-align: center;\n  padding-top: 10pt;\n  color: #102245;\n  opacity: 100%;\n  font-size: 27pt;\n  padding-bottom: 10pt;\n  font-family: \"Montserrat\" !important;\n  justify-content: center;\n}\n\n.accountSummaryText {\n  text-align: center;\n}\n\n.innerRect {\n  position: relative;\n}\n\n.circle {\n  position: absolute;\n  left: 48%;\n  top: -18px;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background-color: white;\n}\n\n.head {\n  box-shadow: none;\n}\n\n.inputCard:not(.display) {\n  padding-left: 32pt;\n  padding-top: 42pt;\n  font-family: \"Montserrat\" !important;\n  color: #ffffff;\n  size: 14pt;\n}\n\n.display {\n  display: block;\n  font-size: 17pt;\n  color: #ffffff;\n  padding-top: 10pt;\n  padding-bottom: 20pt;\n}\n\n.qr_img {\n  padding-top: 10pt;\n  width: 100pt;\n  height: 100pt;\n  margin-left: 32pt;\n  position: relative;\n  overflow: hidden;\n}\n\n.qr_img img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(1.25);\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0;\n}\n\n.header-md::after {\n  left: unset;\n  bottom: -5px;\n  background-position: left 0 top -2px;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);\n  background-repeat: repeat-x;\n  content: \"\";\n}\n\n.close {\n  color: lightgrey;\n  height: 18pt;\n  width: 18pt;\n  position: absolute;\n  right: 10px;\n  top: -5px;\n}\n\n.header_title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 0 20px;\n}\n\n.header_title p.text {\n  font-size: 16px;\n  font-weight: bold;\n}\n\n.token {\n  padding: 15px 20px 20px;\n}\n\n.token p {\n  text-align: center;\n  margin: 0;\n}\n\n.token_number {\n  color: #999;\n  font-size: 15px;\n}\n\n.token_value_row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.token_value_row ion-icon {\n  font-size: x-large;\n  color: #888;\n}\n\n.token_value_row p {\n  flex-grow: 1;\n  color: #777;\n  font-size: x-large;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zYWN0aW9uLXBvcHVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBR0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBREY7O0FBR0E7RUFDRSxZQUFBO0FBQUY7O0FBRUE7RUFDRSwrQkFBQTtBQUNGOztBQUNBO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUdBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUdBLG9DQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFLQTtFQUNFLGNBQUE7RUFFQSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSx1QkFBQTtBQUpGOztBQU1BO0VBQ0UsY0FBQTtFQUVBLGtCQUFBO0VBRUEsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFFQSxvQkFBQTtFQUNBLG9DQUFBO0VBQ0EsdUJBQUE7QUFORjs7QUFTQTtFQUNFLGtCQUFBO0FBTkY7O0FBU0E7RUFDRSxrQkFBQTtBQU5GOztBQVFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUxGOztBQU9BO0VBQ0UsZ0JBQUE7QUFKRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFFQSxVQUFBO0FBSkY7O0FBTUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBSEY7O0FBS0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsNENBQUE7QUFISjs7QUFPQTtFQUNFLGlCQUFBO0FBSkY7O0FBTUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlOQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FBSEY7O0FBS0E7RUFFRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0EsU0FBQTtBQUpGOztBQVNBO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBTkY7O0FBT0U7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFMSjs7QUFRQTtFQUNFLHVCQUFBO0FBTEY7O0FBTUU7RUFDRSxrQkFBQTtFQUNBLFNBQUE7QUFKSjs7QUFNRTtFQUNFLFdBQUE7RUFDQSxlQUFBO0FBSko7O0FBTUU7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUpKOztBQUtJO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0FBSE47O0FBS0k7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFITiIsImZpbGUiOiJ0cmFuc2FjdGlvbi1wb3B1cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVjdCB7XHJcbiAgbWFyZ2luLXRvcDogNTBwdDtcclxuICAvLyBtaW4td2lkdGg6IDMyN3B0O1xyXG4gIC8vbWluLWhlaWdodDogNDcwcHQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NmVmZTtcclxuICBtYXJnaW4tbGVmdDogMjRwdDtcclxuICBtYXJnaW4tcmlnaHQ6IDI0cHQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTNwdDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IGhpZGRlbjtcclxufVxyXG5pb24taGVhZGVyIHtcclxuICBib3R0b206IG5vbmU7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMxMTFkMTI7XHJcbn1cclxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9yIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAvLyAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgLy8gbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGNvbG9yOiAjMzQ3N2M2O1xyXG4gIGZvbnQtc2l6ZTogMTNwdDtcclxuICAvLyBwYWRkaW5nLXRvcDoyNHB0O1xyXG4gIC8vIHBhZGRpbmctbGVmdDo0cHQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLnRleHQxIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAvLyBwYWRkaW5nLWxlZnQ6NjBwdDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gbWFyZ2luLXRvcDo2NnB0O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB0O1xyXG4gIGNvbG9yOiAjMTAyMjQ1O1xyXG4gIG9wYWNpdHk6IDI3JTtcclxuICBzaXplOiAxMHB0O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi50ZXh0MiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OjYwcHQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vIG1hcmdpbi10b3A6NjZwdDtcclxuICBwYWRkaW5nLXRvcDogMTBwdDtcclxuICBjb2xvcjogIzEwMjI0NTtcclxuICBvcGFjaXR5OiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMjdwdDtcclxuICAvLyBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB0O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYWNjb3VudFN1bW1hcnlUZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbm5lclJlY3Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY2lyY2xlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNDglO1xyXG4gIHRvcDogLTE4cHg7XHJcbiAgd2lkdGg6IDM2cHg7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uaGVhZCB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uaW5wdXRDYXJkOm5vdCguZGlzcGxheSkge1xyXG4gIHBhZGRpbmctbGVmdDogMzJwdDtcclxuICBwYWRkaW5nLXRvcDogNDJwdDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICAvLyBvcGFjaXR5OiA1MSU7XHJcbiAgc2l6ZTogMTRwdDtcclxufVxyXG4uZGlzcGxheSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxN3B0O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB0O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB0O1xyXG4gIC8vIG9wYWNpdHk6IDEwMCU7XHJcbn1cclxuLnFyX2ltZyB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHQ7XHJcbiAgd2lkdGg6IDEwMHB0O1xyXG4gIGhlaWdodDogMTAwcHQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDMycHQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIGltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEuMjUpO1xyXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDE4cHQ7XHJcbiAgfVxyXG59XHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDA7XHJcbn1cclxuLmhlYWRlci1tZDo6YWZ0ZXIge1xyXG4gIGxlZnQ6IHVuc2V0O1xyXG4gIGJvdHRvbTogLTVweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDAgdG9wIC0ycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQUhCQU1BQUFEekR0QnhBQUFBRDFCTVZFVUFBQUFBQUFBQUFBQUFBQUFBQUFCUER1ZU5BQUFBQlhSU1RsTVVDUzBnQkloL1RYRUFBQUFhU1VSQlZBalhZeENFQWdZNFVJSUNCbU1vZ01zZ0ZMdEFBUUNOU3dYWktPZFB4Z0FBQUFCSlJVNUVya0pnZ2c9PSk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuLmNsb3NlIHtcclxuICAvLyBtYXJnaW4tYm90dG9tOjE0MHB4O1xyXG4gIGNvbG9yOiBsaWdodGdyZXk7XHJcbiAgaGVpZ2h0OiAxOHB0O1xyXG4gIHdpZHRoOiAxOHB0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIHRvcDogLTVweDtcclxuICAvLyBwYWRkaW5nLWJvdHRvbTogMTMwcHg7XHJcbiAgLy8gcGFkZGluZy1yaWdodDoxMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyX3RpdGxlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxuICBwLnRleHQge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG59XHJcbi50b2tlbiB7XHJcbiAgcGFkZGluZzogMTVweCAyMHB4IDIwcHg7XHJcbiAgcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gICZfbnVtYmVyIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuICAmX3ZhbHVlX3JvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgICBjb2xvcjogIzg4ODtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgIGNvbG9yOiAjNzc3O1xyXG4gICAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */";

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