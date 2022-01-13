(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-token-generation-token-generation-module"],{

/***/ "2g2N":
/*!*******************************************!*\
  !*** ./src/app/services/toast.service.ts ***!
  \*******************************************/
/*! exports provided: ToastService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastService", function() { return ToastService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "TEn/");



let ToastService = class ToastService {
    constructor(toast) {
        this.toast = toast;
    }
    showToast(msg) {
        this.myToast = this.toast.create({
            message: msg,
            duration: 3000
        }).then((toastData) => {
            toastData.present();
        });
    }
    dismissToast() {
        this.myToast = this.toast.dismiss();
    }
};
ToastService.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] }
];
ToastService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ToastService);



/***/ }),

/***/ "54h/":
/*!***************************************************************************!*\
  !*** ./src/app/views/token-generation/token-generation-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: TokenGenerationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenGenerationPageRoutingModule", function() { return TokenGenerationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _token_generation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./token-generation.page */ "s9/0");




const routes = [
    {
        path: '',
        component: _token_generation_page__WEBPACK_IMPORTED_MODULE_3__["TokenGenerationPage"]
    }
];
let TokenGenerationPageRoutingModule = class TokenGenerationPageRoutingModule {
};
TokenGenerationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TokenGenerationPageRoutingModule);



/***/ }),

/***/ "7viV":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/token-generation/token-generation.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<ion-content>\r\n  <div class=\"rect\">\r\n    <ion-header class=\"head\">\r\n      \r\n      <ion-toolbar  class=\"new-background-color\" style=\"--border-width: 0;\">\r\n        <ion-icon name=\"close\" class=\"close\" slot=\"end\" (click)=\"next()\"></ion-icon>\r\n        <div class=\"text\" style=\"margin-left:35px;\">Appointment Summary</div>\r\n      \r\n        <!-- <span class=\"text1\">Token Number <br> <span class=\"text2\" style=\"opacity:100%;\">{{tokenNo}}</span></span> -->\r\n  \r\n  \r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <div class=\"innerRect\">\r\n      <span class=\"circle\"></span>\r\n    <div class=\"inputCard\">\r\n      <ion-label style=\"opacity: 51%;\">Transaction Amount</ion-label>\r\n      <ion-label class=\"display\">{{transAmount}}</ion-label>\r\n      <!-- <ion-input class=\"box\" placeholder=\"Enter Current Password\"></ion-input> -->\r\n    \r\n      <!-- </div>\r\n  \r\n  \r\n  \r\n        <div class=\"inputCard\"> -->\r\n          <ion-label style=\"opacity: 51%;\">Transaction Branch</ion-label>\r\n          <ion-label class=\"display\">{{branch}}</ion-label>\r\n          <!-- <ion-input class=\"box\" placeholder=\"Enter Current Password\"></ion-input> -->\r\n        \r\n     \r\n  \r\n         \r\n            <ion-label style=\"opacity: 51%;\">Transaction Date</ion-label>\r\n            <ion-label class=\"display\">{{transDate}}</ion-label>\r\n            <!-- <ion-input class=\"box\" placeholder=\"Enter Current Password\"></ion-input> -->\r\n          \r\n        \r\n              <ion-label style=\"opacity: 51%;\">Time Slot</ion-label>\r\n              <ion-label class=\"display\">{{transTime}}</ion-label>\r\n              <!-- <ion-input class=\"box\" placeholder=\"Enter Current Password\"></ion-input> -->\r\n   \r\n              </div>\r\n              <!-- <img src=\"data:image/png;base64,{{blobUrl}}\">  -->\r\n              <img [src]=\"imageToShow\">\r\n              <!-- <qrcode [qrdata]=\"myAngularxQrCode\" [width]=\"256\" [errorCorrectionLevel]=\"'M'\"></qrcode> -->\r\n             \r\n              <ion-label class=\"inputCard\" style=\"display:block;opacity: 70%;font-size: 16pt;\" (click)=\"addToWallet()\">Add to wallet</ion-label> \r\n            \r\n    </div>\r\n   \r\n     \r\n  \r\n  <div class=\"inputCard\">\r\n   \r\n  </div>\r\n  </div>\r\n  \r\n  \r\n  </ion-content>\r\n  ");

/***/ }),

/***/ "BQLN":
/*!*******************************************************************!*\
  !*** ./src/app/views/token-generation/token-generation.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".rect {\n  margin-top: 50pt;\n  background-color: #456EFE;\n  margin-left: 24pt;\n  margin-right: 24pt;\n  margin-bottom: 53pt;\n  border-radius: 20px;\n  border-bottom-style: hidden;\n}\n\nion-header {\n  bottom: none;\n}\n\nion-content {\n  --ion-background-color:#111D12;\n}\n\n.new-background-color {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  --background:white;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-top: 30px;\n  display: inline-block;\n  vertical-align: middle;\n  color: #3477C6;\n  font-size: 13pt;\n  padding-top: 24pt;\n  padding-left: 4pt;\n  font-family: \"Montserrat\" !important;\n  box-shadow: none;\n}\n\n.text1 {\n  display: block;\n  text-align: center;\n  padding-top: 10pt;\n  color: #102245;\n  opacity: 27%;\n  size: 10pt;\n  font-family: \"Montserrat\" !important;\n  justify-content: center;\n}\n\n.text2 {\n  display: block;\n  text-align: center;\n  padding-top: 10pt;\n  color: #102245;\n  opacity: 100%;\n  font-size: 27pt;\n  padding-bottom: 10pt;\n  font-family: \"Montserrat\" !important;\n  justify-content: center;\n}\n\n.accountSummaryText {\n  text-align: center;\n}\n\n.innerRect {\n  position: relative;\n}\n\n.circle {\n  position: absolute;\n  left: 48%;\n  top: -18px;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background-color: white;\n}\n\n.head {\n  box-shadow: none;\n}\n\n.inputCard:not(.display) {\n  padding-left: 32pt;\n  padding-top: 42pt;\n  font-family: \"Montserrat\" !important;\n  color: #FFFFFF;\n  size: 14pt;\n}\n\n.display {\n  display: block;\n  font-size: 17pt;\n  color: #FFFFFF;\n  padding-top: 10pt;\n  padding-bottom: 20pt;\n}\n\nimg {\n  padding-top: 10pt;\n  min-height: 96pt;\n  width: 96pt;\n  margin-left: 32pt;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0;\n}\n\n.header-md::after {\n  left: unset;\n  bottom: -5px;\n  background-position: left 0 top -2px;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);\n  background-repeat: repeat-x;\n  content: \"\";\n}\n\n.close {\n  color: lightgrey;\n  height: 18pt;\n  width: 18pt;\n  position: absolute;\n  right: 10px;\n  top: -5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0b2tlbi1nZW5lcmF0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBR0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBREY7O0FBR0U7RUFDRSxZQUFBO0FBQUo7O0FBRUU7RUFDSSw4QkFBQTtBQUNOOztBQUNJO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNDLGlCQUFBO0VBRUQscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUFDTjs7QUFHRTtFQUNFLGNBQUE7RUFFQSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSx1QkFBQTtBQUZKOztBQUlFO0VBQ0UsY0FBQTtFQUVBLGtCQUFBO0VBRUEsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFFQSxvQkFBQTtFQUNBLG9DQUFBO0VBQ0EsdUJBQUE7QUFKSjs7QUFRRTtFQUNFLGtCQUFBO0FBTEo7O0FBUUU7RUFDRSxrQkFBQTtBQUxKOztBQU9FO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQUpKOztBQU1FO0VBQ0UsZ0JBQUE7QUFISjs7QUFLRTtFQUVFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFFQSxVQUFBO0FBSko7O0FBTUk7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNDLG9CQUFBO0FBSFA7O0FBTUk7RUFDRyxpQkFBQTtFQUNMLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBSEY7O0FBTUk7RUFDRSxpQkFBQTtBQUhOOztBQUtFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSx5TkFBQTtFQUNBLDJCQUFBO0VBQ0EsV0FBQTtBQUZKOztBQUlBO0VBRUUsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNFLFNBQUE7QUFISiIsImZpbGUiOiJ0b2tlbi1nZW5lcmF0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWN0e1xyXG4gIG1hcmdpbi10b3A6NTBwdDtcclxuICAvLyBtaW4td2lkdGg6IDMyN3B0O1xyXG4gIC8vbWluLWhlaWdodDogNDcwcHQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojNDU2RUZFO1xyXG4gIG1hcmdpbi1sZWZ0OiAyNHB0O1xyXG4gIG1hcmdpbi1yaWdodDogMjRwdDtcclxuICBtYXJnaW4tYm90dG9tOiA1M3B0O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogaGlkZGVuO1xyXG4gIH1cclxuICBpb24taGVhZGVye1xyXG4gICAgYm90dG9tOiBub25lO1xyXG4gIH1cclxuICBpb24tY29udGVudHtcclxuICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojMTExRDEyO1xyXG4gICAgfVxyXG4gICAgLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgICAgLS1iYWNrZ3JvdW5kOndoaXRlO1xyXG4gICAgICBoZWlnaHQ6Zml0LWNvbnRlbnQ7XHJcbiAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgLy8gbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIGNvbG9yOiMzNDc3QzY7XHJcbiAgICAgIGZvbnQtc2l6ZToxM3B0O1xyXG4gICAgICBwYWRkaW5nLXRvcDoyNHB0O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6NHB0O1xyXG4gICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgIFxyXG4gIH1cclxuICBcclxuICAudGV4dDF7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8vIHBhZGRpbmctbGVmdDo2MHB0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gbWFyZ2luLXRvcDo2NnB0O1xyXG4gICAgcGFkZGluZy10b3A6MTBwdDtcclxuICAgIGNvbG9yOiMxMDIyNDU7XHJcbiAgICBvcGFjaXR5OiAyNyU7XHJcbiAgICBzaXplOjEwcHQ7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLnRleHQye1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6NjBwdDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vIG1hcmdpbi10b3A6NjZwdDtcclxuICAgIHBhZGRpbmctdG9wOjEwcHQ7XHJcbiAgICBjb2xvcjojMTAyMjQ1O1xyXG4gICAgb3BhY2l0eTogMTAwJTtcclxuICAgIGZvbnQtc2l6ZToyN3B0O1xyXG4gICAgLy8gZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC5hY2NvdW50U3VtbWFyeVRleHR7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbm5lclJlY3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAuY2lyY2xlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDQ4JTtcclxuICAgIHRvcDogLTE4cHg7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAuaGVhZHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG4gIC5pbnB1dENhcmQ6bm90KC5kaXNwbGF5KXtcclxuICAgXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMycHQ7XHJcbiAgICBwYWRkaW5nLXRvcDogNDJwdDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiNGRkZGRkY7XHJcbiAgICAvLyBvcGFjaXR5OiA1MSU7XHJcbiAgICBzaXplOjE0cHQ7XHJcbiAgICB9XHJcbiAgICAuZGlzcGxheXtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTdwdDtcclxuICAgICAgY29sb3I6I0ZGRkZGRjtcclxuICAgICAgcGFkZGluZy10b3A6MTBwdDtcclxuICAgICAgIHBhZGRpbmctYm90dG9tOjIwcHQ7XHJcbiAgICAgIC8vIG9wYWNpdHk6IDEwMCU7XHJcbiAgICB9XHJcbiAgICBpbWd7XHJcbiAgICAgICBwYWRkaW5nLXRvcDoxMHB0O1xyXG4gIG1pbi1oZWlnaHQ6IDk2cHQ7XHJcbiAgd2lkdGg6IDk2cHQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDMycHQ7XHJcbiAgICAvLyBwYWRkaW5nLWJvdHRvbTogMThwdDtcclxuICAgIH1cclxuICAgIC5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAgIC0tYm9yZGVyLXdpZHRoOiAwO1xyXG4gIH1cclxuICAuaGVhZGVyLW1kOjphZnRlciB7XHJcbiAgICBsZWZ0OnVuc2V0O1xyXG4gICAgYm90dG9tOiAtNXB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCAwIHRvcCAtMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQUhCQU1BQUFEekR0QnhBQUFBRDFCTVZFVUFBQUFBQUFBQUFBQUFBQUFBQUFCUER1ZU5BQUFBQlhSU1RsTVVDUzBnQkloL1RYRUFBQUFhU1VSQlZBalhZeENFQWdZNFVJSUNCbU1vZ01zZ0ZMdEFBUUNOU3dYWktPZFB4Z0FBQUFCSlJVNUVya0pnZ2c9PSk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG59XHJcbi5jbG9zZXtcclxuICAvLyBtYXJnaW4tYm90dG9tOjE0MHB4O1xyXG4gIGNvbG9yOiBsaWdodGdyZXk7XHJcbiAgaGVpZ2h0OiAxOHB0O1xyXG4gIHdpZHRoOiAxOHB0O1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIC8vIGp1c3RpZnktY29udGVudDogcmlnaHQ7XHJcbiAgcmlnaHQ6IDEwcHg7XHJcbiAgICB0b3A6IC01cHg7XHJcbiAgLy8gcGFkZGluZy1ib3R0b206IDEzMHB4O1xyXG4gIC8vIHBhZGRpbmctcmlnaHQ6MTBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "POVk":
/*!*******************************************************************!*\
  !*** ./src/app/views/token-generation/token-generation.module.ts ***!
  \*******************************************************************/
/*! exports provided: TokenGenerationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenGenerationPageModule", function() { return TokenGenerationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _token_generation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./token-generation-routing.module */ "54h/");
/* harmony import */ var _token_generation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./token-generation.page */ "s9/0");







let TokenGenerationPageModule = class TokenGenerationPageModule {
};
TokenGenerationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _token_generation_routing_module__WEBPACK_IMPORTED_MODULE_5__["TokenGenerationPageRoutingModule"]
        ],
        declarations: [_token_generation_page__WEBPACK_IMPORTED_MODULE_6__["TokenGenerationPage"]]
    })
], TokenGenerationPageModule);



/***/ }),

/***/ "s9/0":
/*!*****************************************************************!*\
  !*** ./src/app/views/token-generation/token-generation.page.ts ***!
  \*****************************************************************/
/*! exports provided: TokenObjects, TokenGenerationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenObjects", function() { return TokenObjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenGenerationPage", function() { return TokenGenerationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_token_generation_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./token-generation.page.html */ "7viV");
/* harmony import */ var _token_generation_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./token-generation.page.scss */ "BQLN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/toast.service */ "2g2N");









// import { setTimeout } from 'timers';
class TokenObjects {
}
let TokenGenerationPage = class TokenGenerationPage {
    constructor(router, api, toastService, shareDataService) {
        this.router = router;
        this.api = api;
        this.toastService = toastService;
        this.shareDataService = shareDataService;
        this.tokenObjects = new TokenObjects();
        this.myAngularxQrCode = null;
        this.myAngularxQrCode = 'Your QR code data string';
    }
    ngOnInit() {
        console.log("token generation");
        this.phoneNumber = localStorage.getItem('PhoneNumLogin');
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
        console.log(this.transAmount);
        console.log(this.tokenObjects);
        this.generateQRCode(this.tokenObjects);
    }
    assignProductCode(index) {
        this.productCode = index;
    }
    next() {
        this.router.navigate(['tabs']);
    }
    generateQRCode(token) {
        console.log("Token", token);
        this.shareDataService.getTransactionId.subscribe(transId => {
            console.log("transId::", transId);
            if (transId != null) {
                this.tokenObjects.transactionId = transId;
            }
        });
        this.tokenObjects.accountId = localStorage.getItem('AccountNumber');
        this.tokenObjects.transactionDate = moment__WEBPACK_IMPORTED_MODULE_5__(new Date(localStorage.getItem('TransactionDate'))).format("DD-MM-YYYY");
        this.tokenObjects.transactionDate = localStorage.getItem('TransactionDate');
        // this.tokenObjects.timeSlot=moment(new Date(localStorage.getItem('TransactionTime'))).format("MM/DD/YYYY hh:mm:ss a");
        this.tokenObjects.timeSlot = localStorage.getItem('TransactionTime');
        this.tokenObjects.productCode = this.productCode;
        this.tokenObjects.phoneNumber = this.phoneNumber;
        console.log("tokenObjects", this.tokenObjects);
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
        this.toastService.showToast("Added Successfully!");
        this.router.navigate(['tabs']);
    }
};
TokenGenerationPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] },
    { type: src_app_services_toast_service__WEBPACK_IMPORTED_MODULE_8__["ToastService"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] }
];
TokenGenerationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-token-generation',
        template: _raw_loader_token_generation_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_token_generation_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TokenGenerationPage);



/***/ })

}]);
//# sourceMappingURL=views-token-generation-token-generation-module.js.map