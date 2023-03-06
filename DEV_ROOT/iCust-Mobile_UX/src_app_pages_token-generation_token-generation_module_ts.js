"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_token-generation_token-generation_module_ts"],{

/***/ 62832:
/*!***************************************************************************!*\
  !*** ./src/app/pages/token-generation/token-generation-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenGenerationPageRoutingModule": () => (/* binding */ TokenGenerationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _token_generation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token-generation.page */ 12788);




const routes = [
    {
        path: '',
        component: _token_generation_page__WEBPACK_IMPORTED_MODULE_0__.TokenGenerationPage
    }
];
let TokenGenerationPageRoutingModule = class TokenGenerationPageRoutingModule {
};
TokenGenerationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TokenGenerationPageRoutingModule);



/***/ }),

/***/ 79957:
/*!*******************************************************************!*\
  !*** ./src/app/pages/token-generation/token-generation.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenGenerationPageModule": () => (/* binding */ TokenGenerationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _token_generation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token-generation-routing.module */ 62832);
/* harmony import */ var _token_generation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token-generation.page */ 12788);







let TokenGenerationPageModule = class TokenGenerationPageModule {
};
TokenGenerationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _token_generation_routing_module__WEBPACK_IMPORTED_MODULE_0__.TokenGenerationPageRoutingModule
        ],
        declarations: [_token_generation_page__WEBPACK_IMPORTED_MODULE_1__.TokenGenerationPage]
    })
], TokenGenerationPageModule);



/***/ }),

/***/ 12788:
/*!*****************************************************************!*\
  !*** ./src/app/pages/token-generation/token-generation.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenGenerationPage": () => (/* binding */ TokenGenerationPage),
/* harmony export */   "TokenObjects": () => (/* binding */ TokenObjects)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _token_generation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token-generation.page.html?ngResource */ 70148);
/* harmony import */ var _token_generation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./token-generation.page.scss?ngResource */ 40723);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);









// import { setTimeout } from 'timers';
class TokenObjects {
}
let TokenGenerationPage = class TokenGenerationPage {
    constructor(router, dataRoute, api, toastService, shareDataService) {
        this.router = router;
        this.dataRoute = dataRoute;
        this.api = api;
        this.toastService = toastService;
        this.shareDataService = shareDataService;
        this.tokenObjects = new TokenObjects();
        this.myAngularxQrCode = null;
        this.myAngularxQrCode = 'Your QR code data string';
        this.dataTransactionId = this.dataRoute.snapshot.params['transactionId'];
        console.log("this.dataTransactionId", this.dataTransactionId);
    }
    ngOnInit() {
        console.log("token generation");
        this.phoneNumber = localStorage.getItem('customerPhonenum');
        this.api.getIndex().subscribe(resp => {
            console.log(resp.index);
            this.assignProductCode(resp.index);
        });
        setTimeout(() => {
            this.generateQRCode(this.tokenObjects);
        }, 100);
        localStorage.getItem('AccountNumber');
        localStorage.getItem('TransactionDate');
        localStorage.getItem('TransactionTime');
        console.log(localStorage.getItem('TransactionTime'));
        this.transAmount = localStorage.getItem('TransactionAmount');
        this.transDate = localStorage.getItem('TransactionDate');
        this.transTime = localStorage.getItem('TransactionTime');
        this.branch = localStorage.getItem('TransactionBranch');
        console.log(this.transDate);
        console.log(this.transTime);
        this.generateQRCode(this.tokenObjects);
    }
    assignProductCode(index) {
        this.productCode = index;
    }
    next() {
        this.router.navigate(['dashboard']);
    }
    generateQRCode(token) {
        this.shareDataService.getTransactionId.subscribe(transId => {
            console.log("transId::", transId);
            if (transId != null) {
                this.tokenObjects.transactionId = Object.getOwnPropertyNames(transId).length === 0 ? this.dataTransactionId || '' : transId;
            }
        });
        console.log('this.tokenObjects.transactionId -- ', this.tokenObjects.transactionId);
        this.tokenObjects.accountId = localStorage.getItem('AccountNumber');
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
    addToWallet() {
        let payload = {
            transactionId: this.tokenObjects.transactionId,
            addToWallet: true
        };
        console.log("payload", payload);
        this.api.updateAddToWallet(payload).subscribe(res => {
            this.toastService.showToast("Added Successfully");
            this.router.navigate(['dashboard']);
        }, (err) => {
            console.error(err);
        });
    }
};
TokenGenerationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__.DataService }
];
TokenGenerationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-token-generation',
        template: _token_generation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_token_generation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TokenGenerationPage);



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

/***/ 40723:
/*!******************************************************************************!*\
  !*** ./src/app/pages/token-generation/token-generation.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".rect {\n  margin-top: 50pt;\n  background-color: #456efe;\n  margin-left: 24pt;\n  margin-right: 24pt;\n  margin-bottom: 53pt;\n  border-radius: 20px;\n  border-bottom-style: hidden;\n}\n\nion-header {\n  bottom: none;\n}\n\nion-content {\n  --ion-background-color: #111d12;\n}\n\n.new-background-color {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  --background: white;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-top: 30px;\n  display: inline-block;\n  vertical-align: middle;\n  color: #3477c6;\n  font-size: 13pt;\n  padding-top: 24pt;\n  padding-left: 4pt;\n  font-family: \"Montserrat\" !important;\n  box-shadow: none;\n}\n\n.text1 {\n  display: block;\n  text-align: center;\n  padding-top: 10pt;\n  color: #102245;\n  opacity: 27%;\n  size: 10pt;\n  font-family: \"Montserrat\" !important;\n  justify-content: center;\n}\n\n.text2 {\n  display: block;\n  text-align: center;\n  padding-top: 10pt;\n  color: #102245;\n  opacity: 100%;\n  font-size: 27pt;\n  padding-bottom: 10pt;\n  font-family: \"Montserrat\" !important;\n  justify-content: center;\n}\n\n.accountSummaryText {\n  text-align: center;\n}\n\n.innerRect {\n  position: relative;\n}\n\n.circle {\n  position: absolute;\n  left: 48%;\n  top: -18px;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background-color: white;\n}\n\n.head {\n  box-shadow: none;\n}\n\n.inputCard:not(.display) {\n  padding-left: 32pt;\n  padding-top: 42pt;\n  font-family: \"Montserrat\" !important;\n  color: #ffffff;\n  size: 14pt;\n}\n\n.display {\n  display: block;\n  font-size: 17pt;\n  color: #ffffff;\n  padding-top: 10pt;\n  padding-bottom: 20pt;\n}\n\n.qr_img {\n  padding-top: 10pt;\n  width: 100pt;\n  height: 100pt;\n  margin-left: 32pt;\n  position: relative;\n  overflow: hidden;\n}\n\n.qr_img img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(1.25);\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0;\n}\n\n.header-md::after {\n  left: unset;\n  bottom: -5px;\n  background-position: left 0 top -2px;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);\n  background-repeat: repeat-x;\n  content: \"\";\n}\n\n.close {\n  color: lightgrey;\n  height: 18pt;\n  width: 18pt;\n  position: absolute;\n  right: 10px;\n  top: -5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRva2VuLWdlbmVyYXRpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFHQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFERjs7QUFHQTtFQUNFLFlBQUE7QUFBRjs7QUFFQTtFQUNFLCtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsaUJBQUE7RUFFQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUVBLGtCQUFBO0VBRUEsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLHVCQUFBO0FBREY7O0FBR0E7RUFDRSxjQUFBO0VBRUEsa0JBQUE7RUFFQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUVBLG9CQUFBO0VBQ0Esb0NBQUE7RUFDQSx1QkFBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBRkY7O0FBSUE7RUFDRSxnQkFBQTtBQURGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUVBLFVBQUE7QUFERjs7QUFHQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBRjs7QUFDRTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSw0Q0FBQTtBQUNKOztBQUdBO0VBQ0UsaUJBQUE7QUFBRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseU5BQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFDQTtFQUVFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUVBLFdBQUE7RUFDQSxTQUFBO0FBQUYiLCJmaWxlIjoidG9rZW4tZ2VuZXJhdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVjdCB7XHJcbiAgbWFyZ2luLXRvcDogNTBwdDtcclxuICAvLyBtaW4td2lkdGg6IDMyN3B0O1xyXG4gIC8vbWluLWhlaWdodDogNDcwcHQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NmVmZTtcclxuICBtYXJnaW4tbGVmdDogMjRwdDtcclxuICBtYXJnaW4tcmlnaHQ6IDI0cHQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTNwdDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IGhpZGRlbjtcclxufVxyXG5pb24taGVhZGVyIHtcclxuICBib3R0b206IG5vbmU7XHJcbn1cclxuaW9uLWNvbnRlbnQge1xyXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMxMTFkMTI7XHJcbn1cclxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9yIHtcclxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAvLyBtYXJnaW4tbGVmdDogMiU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgY29sb3I6ICMzNDc3YzY7XHJcbiAgZm9udC1zaXplOiAxM3B0O1xyXG4gIHBhZGRpbmctdG9wOiAyNHB0O1xyXG4gIHBhZGRpbmctbGVmdDogNHB0O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi50ZXh0MSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OjYwcHQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vIG1hcmdpbi10b3A6NjZwdDtcclxuICBwYWRkaW5nLXRvcDogMTBwdDtcclxuICBjb2xvcjogIzEwMjI0NTtcclxuICBvcGFjaXR5OiAyNyU7XHJcbiAgc2l6ZTogMTBwdDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4udGV4dDIge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIC8vIHBhZGRpbmctbGVmdDo2MHB0O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvLyBtYXJnaW4tdG9wOjY2cHQ7XHJcbiAgcGFkZGluZy10b3A6IDEwcHQ7XHJcbiAgY29sb3I6ICMxMDIyNDU7XHJcbiAgb3BhY2l0eTogMTAwJTtcclxuICBmb250LXNpemU6IDI3cHQ7XHJcbiAgLy8gZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBwdDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmFjY291bnRTdW1tYXJ5VGV4dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5uZXJSZWN0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmNpcmNsZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDQ4JTtcclxuICB0b3A6IC0xOHB4O1xyXG4gIHdpZHRoOiAzNnB4O1xyXG4gIGhlaWdodDogMzZweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmhlYWQge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuLmlucHV0Q2FyZDpub3QoLmRpc3BsYXkpIHtcclxuICBwYWRkaW5nLWxlZnQ6IDMycHQ7XHJcbiAgcGFkZGluZy10b3A6IDQycHQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgLy8gb3BhY2l0eTogNTElO1xyXG4gIHNpemU6IDE0cHQ7XHJcbn1cclxuLmRpc3BsYXkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMTdwdDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBwYWRkaW5nLXRvcDogMTBwdDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBwdDtcclxuICAvLyBvcGFjaXR5OiAxMDAlO1xyXG59XHJcbi5xcl9pbWcge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB0O1xyXG4gIHdpZHRoOiAxMDBwdDtcclxuICBoZWlnaHQ6IDEwMHB0O1xyXG4gIG1hcmdpbi1sZWZ0OiAzMnB0O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEuMjUpO1xyXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDE4cHQ7XHJcbiAgfVxyXG59XHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XHJcbiAgLS1ib3JkZXItd2lkdGg6IDA7XHJcbn1cclxuLmhlYWRlci1tZDo6YWZ0ZXIge1xyXG4gIGxlZnQ6IHVuc2V0O1xyXG4gIGJvdHRvbTogLTVweDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDAgdG9wIC0ycHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQUhCQU1BQUFEekR0QnhBQUFBRDFCTVZFVUFBQUFBQUFBQUFBQUFBQUFBQUFCUER1ZU5BQUFBQlhSU1RsTVVDUzBnQkloL1RYRUFBQUFhU1VSQlZBalhZeENFQWdZNFVJSUNCbU1vZ01zZ0ZMdEFBUUNOU3dYWktPZFB4Z0FBQUFCSlJVNUVya0pnZ2c9PSk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuLmNsb3NlIHtcclxuICAvLyBtYXJnaW4tYm90dG9tOjE0MHB4O1xyXG4gIGNvbG9yOiBsaWdodGdyZXk7XHJcbiAgaGVpZ2h0OiAxOHB0O1xyXG4gIHdpZHRoOiAxOHB0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHJpZ2h0O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIHRvcDogLTVweDtcclxuICAvLyBwYWRkaW5nLWJvdHRvbTogMTMwcHg7XHJcbiAgLy8gcGFkZGluZy1yaWdodDoxMHB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 70148:
/*!******************************************************************************!*\
  !*** ./src/app/pages/token-generation/token-generation.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <div class=\"rect\">\r\n    <ion-header class=\"head\">\r\n      <ion-toolbar class=\"new-background-color\" style=\"--border-width: 0\">\r\n        <ion-icon\r\n          name=\"close\"\r\n          class=\"close\"\r\n          slot=\"end\"\r\n          (click)=\"next()\"\r\n        ></ion-icon>\r\n        <div class=\"text\" style=\"margin-left: 35px\">Appointment Summary</div>\r\n\r\n        <!-- <span class=\"text1\">Token Number <br> <span class=\"text2\" style=\"opacity:100%;\">{{tokenNo}}</span></span> -->\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <div class=\"innerRect\">\r\n      <span class=\"circle\"></span>\r\n      <div class=\"inputCard\">\r\n        <ion-label style=\"opacity: 51%\">Transaction Amount</ion-label>\r\n        <ion-label class=\"display\">{{transAmount}}</ion-label>\r\n        <!-- <ion-input class=\"box\" placeholder=\"Enter Current Password\"></ion-input> -->\r\n\r\n        <!-- </div>\r\n  \r\n  \r\n  \r\n        <div class=\"inputCard\"> -->\r\n        <ion-label style=\"opacity: 51%\">Transaction Branch</ion-label>\r\n        <ion-label class=\"display\">{{branch}}</ion-label>\r\n        <!-- <ion-input class=\"box\" placeholder=\"Enter Current Password\"></ion-input> -->\r\n\r\n        <ion-label style=\"opacity: 51%\">Transaction Date</ion-label>\r\n        <ion-label class=\"display\">{{transDate}}</ion-label>\r\n        <!-- <ion-input class=\"box\" placeholder=\"Enter Current Password\"></ion-input> -->\r\n\r\n        <ion-label style=\"opacity: 51%\">Time Slot</ion-label>\r\n        <ion-label class=\"display\">{{transTime}}</ion-label>\r\n        <!-- <ion-input class=\"box\" placeholder=\"Enter Current Password\"></ion-input> -->\r\n      </div>\r\n      <!-- <img src=\"data:image/png;base64,{{blobUrl}}\">  -->\r\n      <div class=\"qr_img\">\r\n        <img [src]=\"imageToShow\" />\r\n      </div>\r\n      <!-- <qrcode [qrdata]=\"myAngularxQrCode\" [width]=\"256\" [errorCorrectionLevel]=\"'M'\"></qrcode> -->\r\n\r\n      <ion-label\r\n        class=\"inputCard\"\r\n        style=\"display: block; opacity: 70%; font-size: 16pt\"\r\n        (click)=\"addToWallet()\"\r\n        >Add to wallet</ion-label\r\n      >\r\n    </div>\r\n\r\n    <div class=\"inputCard\"></div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_token-generation_token-generation_module_ts.js.map