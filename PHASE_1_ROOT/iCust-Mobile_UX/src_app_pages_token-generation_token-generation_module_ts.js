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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/toast.service */ 84465);









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

module.exports = ".rect {\n  margin-top: 50pt;\n  background-color: #456efe;\n  margin-left: 24pt;\n  margin-right: 24pt;\n  margin-bottom: 53pt;\n  border-radius: 20px;\n  border-bottom-style: hidden;\n}\n\nion-header {\n  bottom: none;\n}\n\nion-content {\n  --ion-background-color: #111d12;\n}\n\n.new-background-color {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  --background: white;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-top: 30px;\n  display: inline-block;\n  vertical-align: middle;\n  color: #3477c6;\n  font-size: 13pt;\n  padding-top: 24pt;\n  padding-left: 4pt;\n  font-family: \"Montserrat\" !important;\n  box-shadow: none;\n}\n\n.text1 {\n  display: block;\n  text-align: center;\n  padding-top: 10pt;\n  color: #102245;\n  opacity: 27%;\n  size: 10pt;\n  font-family: \"Montserrat\" !important;\n  justify-content: center;\n}\n\n.text2 {\n  display: block;\n  text-align: center;\n  padding-top: 10pt;\n  color: #102245;\n  opacity: 100%;\n  font-size: 27pt;\n  padding-bottom: 10pt;\n  font-family: \"Montserrat\" !important;\n  justify-content: center;\n}\n\n.accountSummaryText {\n  text-align: center;\n}\n\n.innerRect {\n  position: relative;\n}\n\n.circle {\n  position: absolute;\n  left: 48%;\n  top: -18px;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background-color: white;\n}\n\n.head {\n  box-shadow: none;\n}\n\n.inputCard:not(.display) {\n  padding-left: 32pt;\n  padding-top: 42pt;\n  font-family: \"Montserrat\" !important;\n  color: #ffffff;\n  size: 14pt;\n}\n\n.display {\n  display: block;\n  font-size: 17pt;\n  color: #ffffff;\n  padding-top: 10pt;\n  padding-bottom: 20pt;\n}\n\n.qr_img {\n  padding-top: 10pt;\n  width: 100pt;\n  height: 100pt;\n  margin-left: 32pt;\n  position: relative;\n  overflow: hidden;\n}\n\n.qr_img img {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%) scale(1.25);\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0;\n}\n\n.header-md::after {\n  left: unset;\n  bottom: -5px;\n  background-position: left 0 top -2px;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);\n  background-repeat: repeat-x;\n  content: \"\";\n}\n\n.close {\n  color: lightgrey;\n  height: 18pt;\n  width: 18pt;\n  position: absolute;\n  right: 10px;\n  top: -5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRva2VuLWdlbmVyYXRpb24ucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcR0lUSFVCJTIwUkVQT1NJVE9SWV9VSVxcaUN1c3RNb2JpbGUtdjJcXHNyY1xcYXBwXFxwYWdlc1xcdG9rZW4tZ2VuZXJhdGlvblxcdG9rZW4tZ2VuZXJhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUdBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQ0RGOztBREdBO0VBQ0UsWUFBQTtBQ0FGOztBREVBO0VBQ0UsK0JBQUE7QUNDRjs7QURDQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxpQkFBQTtFQUVBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBRUEsa0JBQUE7RUFFQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO0VBQ0EsdUJBQUE7QUNERjs7QURHQTtFQUNFLGNBQUE7RUFFQSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBRUEsb0JBQUE7RUFDQSxvQ0FBQTtFQUNBLHVCQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0Usa0JBQUE7QUNIRjs7QURLQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QUNGRjs7QURJQTtFQUNFLGdCQUFBO0FDREY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxjQUFBO0VBRUEsVUFBQTtBQ0RGOztBREdBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0FGOztBRENFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLDRDQUFBO0FDQ0o7O0FER0E7RUFDRSxpQkFBQTtBQ0FGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5TkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBRENBO0VBRUUsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLFNBQUE7QUNBRiIsImZpbGUiOiJ0b2tlbi1nZW5lcmF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWN0IHtcclxuICBtYXJnaW4tdG9wOiA1MHB0O1xyXG4gIC8vIG1pbi13aWR0aDogMzI3cHQ7XHJcbiAgLy9taW4taGVpZ2h0OiA0NzBwdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU2ZWZlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyNHB0O1xyXG4gIG1hcmdpbi1yaWdodDogMjRwdDtcclxuICBtYXJnaW4tYm90dG9tOiA1M3B0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogaGlkZGVuO1xyXG59XHJcbmlvbi1oZWFkZXIge1xyXG4gIGJvdHRvbTogbm9uZTtcclxufVxyXG5pb24tY29udGVudCB7XHJcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzExMWQxMjtcclxufVxyXG4ubmV3LWJhY2tncm91bmQtY29sb3Ige1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gIC8vIG1hcmdpbi1sZWZ0OiAyJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBjb2xvcjogIzM0NzdjNjtcclxuICBmb250LXNpemU6IDEzcHQ7XHJcbiAgcGFkZGluZy10b3A6IDI0cHQ7XHJcbiAgcGFkZGluZy1sZWZ0OiA0cHQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLnRleHQxIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAvLyBwYWRkaW5nLWxlZnQ6NjBwdDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8gbWFyZ2luLXRvcDo2NnB0O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB0O1xyXG4gIGNvbG9yOiAjMTAyMjQ1O1xyXG4gIG9wYWNpdHk6IDI3JTtcclxuICBzaXplOiAxMHB0O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi50ZXh0MiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OjYwcHQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIC8vIG1hcmdpbi10b3A6NjZwdDtcclxuICBwYWRkaW5nLXRvcDogMTBwdDtcclxuICBjb2xvcjogIzEwMjI0NTtcclxuICBvcGFjaXR5OiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMjdwdDtcclxuICAvLyBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB0O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uYWNjb3VudFN1bW1hcnlUZXh0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbm5lclJlY3Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uY2lyY2xlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogNDglO1xyXG4gIHRvcDogLTE4cHg7XHJcbiAgd2lkdGg6IDM2cHg7XHJcbiAgaGVpZ2h0OiAzNnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uaGVhZCB7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4uaW5wdXRDYXJkOm5vdCguZGlzcGxheSkge1xyXG4gIHBhZGRpbmctbGVmdDogMzJwdDtcclxuICBwYWRkaW5nLXRvcDogNDJwdDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICAvLyBvcGFjaXR5OiA1MSU7XHJcbiAgc2l6ZTogMTRwdDtcclxufVxyXG4uZGlzcGxheSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxN3B0O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB0O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB0O1xyXG4gIC8vIG9wYWNpdHk6IDEwMCU7XHJcbn1cclxuLnFyX2ltZyB7XHJcbiAgcGFkZGluZy10b3A6IDEwcHQ7XHJcbiAgd2lkdGg6IDEwMHB0O1xyXG4gIGhlaWdodDogMTAwcHQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDMycHQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMS4yNSk7XHJcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogMThwdDtcclxuICB9XHJcbn1cclxuLmhlYWRlci1pb3MgaW9uLXRvb2xiYXI6bGFzdC1vZi10eXBlIHtcclxuICAtLWJvcmRlci13aWR0aDogMDtcclxufVxyXG4uaGVhZGVyLW1kOjphZnRlciB7XHJcbiAgbGVmdDogdW5zZXQ7XHJcbiAgYm90dG9tOiAtNXB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgMCB0b3AgLTJweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiA1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBSEJBTUFBQUR6RHRCeEFBQUFEMUJNVkVVQUFBQUFBQUFBQUFBQUFBQUFBQUJQRHVlTkFBQUFCWFJTVGxNVUNTMGdCSWgvVFhFQUFBQWFTVVJCVkFqWFl4Q0VBZ1k0VUlJQ0JtTW9nTXNnRkx0QUFRQ05Td1haS09kUHhnQUFBQUJKUlU1RXJrSmdnZz09KTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgY29udGVudDogXCJcIjtcclxufVxyXG4uY2xvc2Uge1xyXG4gIC8vIG1hcmdpbi1ib3R0b206MTQwcHg7XHJcbiAgY29sb3I6IGxpZ2h0Z3JleTtcclxuICBoZWlnaHQ6IDE4cHQ7XHJcbiAgd2lkdGg6IDE4cHQ7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIC8vIGp1c3RpZnktY29udGVudDogcmlnaHQ7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgdG9wOiAtNXB4O1xyXG4gIC8vIHBhZGRpbmctYm90dG9tOiAxMzBweDtcclxuICAvLyBwYWRkaW5nLXJpZ2h0OjEwcHg7XHJcbn1cclxuIiwiLnJlY3Qge1xuICBtYXJnaW4tdG9wOiA1MHB0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU2ZWZlO1xuICBtYXJnaW4tbGVmdDogMjRwdDtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB0O1xuICBtYXJnaW4tYm90dG9tOiA1M3B0O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBoaWRkZW47XG59XG5cbmlvbi1oZWFkZXIge1xuICBib3R0b206IG5vbmU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzExMWQxMjtcbn1cblxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiAjMzQ3N2M2O1xuICBmb250LXNpemU6IDEzcHQ7XG4gIHBhZGRpbmctdG9wOiAyNHB0O1xuICBwYWRkaW5nLWxlZnQ6IDRwdDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi50ZXh0MSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMHB0O1xuICBjb2xvcjogIzEwMjI0NTtcbiAgb3BhY2l0eTogMjclO1xuICBzaXplOiAxMHB0O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50ZXh0MiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMHB0O1xuICBjb2xvcjogIzEwMjI0NTtcbiAgb3BhY2l0eTogMTAwJTtcbiAgZm9udC1zaXplOiAyN3B0O1xuICBwYWRkaW5nLWJvdHRvbTogMTBwdDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWNjb3VudFN1bW1hcnlUZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5uZXJSZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2lyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0OCU7XG4gIHRvcDogLTE4cHg7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5oZWFkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmlucHV0Q2FyZDpub3QoLmRpc3BsYXkpIHtcbiAgcGFkZGluZy1sZWZ0OiAzMnB0O1xuICBwYWRkaW5nLXRvcDogNDJwdDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBzaXplOiAxNHB0O1xufVxuXG4uZGlzcGxheSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE3cHQ7XG4gIGNvbG9yOiAjZmZmZmZmO1xuICBwYWRkaW5nLXRvcDogMTBwdDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHQ7XG59XG5cbi5xcl9pbWcge1xuICBwYWRkaW5nLXRvcDogMTBwdDtcbiAgd2lkdGg6IDEwMHB0O1xuICBoZWlnaHQ6IDEwMHB0O1xuICBtYXJnaW4tbGVmdDogMzJwdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLnFyX2ltZyBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEuMjUpO1xufVxuXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xuICAtLWJvcmRlci13aWR0aDogMDtcbn1cblxuLmhlYWRlci1tZDo6YWZ0ZXIge1xuICBsZWZ0OiB1bnNldDtcbiAgYm90dG9tOiAtNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDAgdG9wIC0ycHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFIQkFNQUFBRHpEdEJ4QUFBQUQxQk1WRVVBQUFBQUFBQUFBQUFBQUFBQUFBQlBEdWVOQUFBQUJYUlNUbE1VQ1MwZ0JJaC9UWEVBQUFBYVNVUkJWQWpYWXhDRUFnWTRVSUlDQm1Nb2dNc2dGTHRBQVFDTlN3WFpLT2RQeGdBQUFBQkpSVTVFcmtKZ2dnPT0pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gIGNvbnRlbnQ6IFwiXCI7XG59XG5cbi5jbG9zZSB7XG4gIGNvbG9yOiBsaWdodGdyZXk7XG4gIGhlaWdodDogMThwdDtcbiAgd2lkdGg6IDE4cHQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDEwcHg7XG4gIHRvcDogLTVweDtcbn0iXX0= */";

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