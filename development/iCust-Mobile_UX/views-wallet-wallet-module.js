(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-wallet-wallet-module"],{

/***/ "2+xu":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/wallet/wallet-list/wallet-list.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"back()\">\r\n        <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>My Wallet</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"toolbar-bg\">\r\n  <ion-list>\r\n    <ion-item button *ngFor=\"let item of walletList; let i = index\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <img\r\n          src=\"assets/icon/ticket-vector-icon-26.jpg\"\r\n        />\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h2>{{ item?.trnType }}</h2>\r\n        <p>\r\n          {{ item.transactionCurrency }} {{ item?.transactionAmount }} @\r\n          {{ item?.transactionBranch }}\r\n        </p>\r\n        <p>{{ item?.transactionDate }} {{ item?.transactionTime }}</p>\r\n      </ion-label>\r\n      <ion-button fill=\"outline\" slot=\"end\" (click)=\"openTicketModal(item)\">View</ion-button>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <p *ngIf=\"walletList.length == 0\" style=\"margin-top: 50%; text-align: center;\" lines=\"none\">\r\n    No Saved Wallet\r\n  </p>\r\n</ion-content>\r\n");

/***/ }),

/***/ "833i":
/*!***********************************************************************!*\
  !*** ./src/app/views/wallet/wallet-popup/wallet-popup.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".rect {\n  margin-top: 50pt;\n  background-color: #456EFE;\n  margin-left: 24pt;\n  margin-right: 24pt;\n  margin-bottom: 53pt;\n  border-radius: 20px;\n  border-bottom-style: hidden;\n}\n\nion-header {\n  bottom: none;\n}\n\nion-content {\n  --ion-background-color: #111D12;\n}\n\n.new-background-color {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  --background: white;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-top: 30px;\n  display: inline-block;\n  vertical-align: middle;\n  color: #3477C6;\n  font-size: 13pt;\n  padding-top: 24pt;\n  padding-left: 4pt;\n  font-family: \"Montserrat\" !important;\n  box-shadow: none;\n}\n\n.text1 {\n  display: block;\n  text-align: center;\n  padding-top: 10pt;\n  color: #102245;\n  opacity: 27%;\n  size: 10pt;\n  font-family: \"Montserrat\" !important;\n  justify-content: center;\n}\n\n.text2 {\n  display: block;\n  text-align: center;\n  padding-top: 10pt;\n  color: #102245;\n  opacity: 100%;\n  font-size: 27pt;\n  padding-bottom: 10pt;\n  font-family: \"Montserrat\" !important;\n  justify-content: center;\n}\n\n.accountSummaryText {\n  text-align: center;\n}\n\n.innerRect {\n  position: relative;\n}\n\n.circle {\n  position: absolute;\n  left: 48%;\n  top: -18px;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background-color: white;\n}\n\n.head {\n  box-shadow: none;\n}\n\n.inputCard:not(.display) {\n  padding-left: 32pt;\n  padding-top: 42pt;\n  font-family: \"Montserrat\" !important;\n  color: #FFFFFF;\n  size: 14pt;\n}\n\n.display {\n  display: block;\n  font-size: 17pt;\n  color: #FFFFFF;\n  padding-top: 10pt;\n  padding-bottom: 20pt;\n}\n\nimg {\n  padding-top: 10pt;\n  min-height: 96pt;\n  width: 96pt;\n  margin-left: 32pt;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0;\n}\n\n.header-md::after {\n  left: unset;\n  bottom: -5px;\n  background-position: left 0 top -2px;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);\n  background-repeat: repeat-x;\n  content: \"\";\n}\n\n.close {\n  color: lightgrey;\n  height: 18pt;\n  width: 18pt;\n  position: absolute;\n  right: 10px;\n  top: -5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcd2FsbGV0LXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFHQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUFESjs7QUFJQTtFQUNJLFlBQUE7QUFESjs7QUFJQTtFQUNJLCtCQUFBO0FBREo7O0FBSUE7RUFDSSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsaUJBQUE7RUFFQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQUZKOztBQU1BO0VBQ0ksY0FBQTtFQUVBLGtCQUFBO0VBRUEsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLHVCQUFBO0FBTEo7O0FBUUE7RUFDSSxjQUFBO0VBRUEsa0JBQUE7RUFFQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUVBLG9CQUFBO0VBQ0Esb0NBQUE7RUFDQSx1QkFBQTtBQVJKOztBQVlBO0VBQ0ksa0JBQUE7QUFUSjs7QUFZQTtFQUNJLGtCQUFBO0FBVEo7O0FBWUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FBVEo7O0FBWUE7RUFDSSxnQkFBQTtBQVRKOztBQVlBO0VBRUksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUVBLFVBQUE7QUFYSjs7QUFjQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFYSjs7QUFlQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUFaSjs7QUFnQkE7RUFDSSxpQkFBQTtBQWJKOztBQWdCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseU5BQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUFiSjs7QUFnQkE7RUFFSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0EsU0FBQTtBQWZKIiwiZmlsZSI6IndhbGxldC1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWN0IHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHQ7XHJcbiAgICAvLyBtaW4td2lkdGg6IDMyN3B0O1xyXG4gICAgLy9taW4taGVpZ2h0OiA0NzBwdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTZFRkU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjRwdDtcclxuICAgIG1hcmdpbi1yaWdodDogMjRwdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUzcHQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogaGlkZGVuO1xyXG59XHJcblxyXG5pb24taGVhZGVyIHtcclxuICAgIGJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzExMUQxMjtcclxufVxyXG5cclxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9yIHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgY29sb3I6ICMzNDc3QzY7XHJcbiAgICBmb250LXNpemU6IDEzcHQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMjRwdDtcclxuICAgIHBhZGRpbmctbGVmdDogNHB0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbn1cclxuXHJcbi50ZXh0MSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8vIHBhZGRpbmctbGVmdDo2MHB0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gbWFyZ2luLXRvcDo2NnB0O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHQ7XHJcbiAgICBjb2xvcjogIzEwMjI0NTtcclxuICAgIG9wYWNpdHk6IDI3JTtcclxuICAgIHNpemU6IDEwcHQ7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRleHQyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OjYwcHQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyBtYXJnaW4tdG9wOjY2cHQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBwdDtcclxuICAgIGNvbG9yOiAjMTAyMjQ1O1xyXG4gICAgb3BhY2l0eTogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMjdwdDtcclxuICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBwdDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmFjY291bnRTdW1tYXJ5VGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbm5lclJlY3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2lyY2xlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDQ4JTtcclxuICAgIHRvcDogLTE4cHg7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVhZCB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uaW5wdXRDYXJkOm5vdCguZGlzcGxheSkge1xyXG5cclxuICAgIHBhZGRpbmctbGVmdDogMzJwdDtcclxuICAgIHBhZGRpbmctdG9wOiA0MnB0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAvLyBvcGFjaXR5OiA1MSU7XHJcbiAgICBzaXplOiAxNHB0O1xyXG59XHJcblxyXG4uZGlzcGxheSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTdwdDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBwdDtcclxuICAgIC8vIG9wYWNpdHk6IDEwMCU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBwdDtcclxuICAgIG1pbi1oZWlnaHQ6IDk2cHQ7XHJcbiAgICB3aWR0aDogOTZwdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMnB0O1xyXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDE4cHQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMDtcclxufVxyXG5cclxuLmhlYWRlci1tZDo6YWZ0ZXIge1xyXG4gICAgbGVmdDogdW5zZXQ7XHJcbiAgICBib3R0b206IC01cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDAgdG9wIC0ycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBSEJBTUFBQUR6RHRCeEFBQUFEMUJNVkVVQUFBQUFBQUFBQUFBQUFBQUFBQUJQRHVlTkFBQUFCWFJTVGxNVUNTMGdCSWgvVFhFQUFBQWFTVVJCVkFqWFl4Q0VBZ1k0VUlJQ0JtTW9nTXNnRkx0QUFRQ05Td1haS09kUHhnQUFBQUJKUlU1RXJrSmdnZz09KTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOjE0MHB4O1xyXG4gICAgY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGhlaWdodDogMThwdDtcclxuICAgIHdpZHRoOiAxOHB0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiByaWdodDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiAtNXB4O1xyXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDEzMHB4O1xyXG4gICAgLy8gcGFkZGluZy1yaWdodDoxMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "IbL0":
/*!*********************************************************************!*\
  !*** ./src/app/views/wallet/wallet-popup/wallet-popup.component.ts ***!
  \*********************************************************************/
/*! exports provided: WalletPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPopupComponent", function() { return WalletPopupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_wallet_popup_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./wallet-popup.component.html */ "cN9T");
/* harmony import */ var _wallet_popup_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallet-popup.component.scss */ "833i");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");





let WalletPopupComponent = class WalletPopupComponent {
    constructor(modalController) {
        this.modalController = modalController;
    }
    ngOnInit() {
        console.log(this.data);
    }
    close() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(true);
        });
    }
};
WalletPopupComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] }
];
WalletPopupComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
WalletPopupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-wallet-popup',
        template: _raw_loader_wallet_popup_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_wallet_popup_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WalletPopupComponent);



/***/ }),

/***/ "PSIy":
/*!***********************************************!*\
  !*** ./src/app/views/wallet/wallet.module.ts ***!
  \***********************************************/
/*! exports provided: WalletModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletModule", function() { return WalletModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _wallet_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallet-routing.module */ "PbMR");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _wallet_list_wallet_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wallet-list/wallet-list.component */ "m8Kh");
/* harmony import */ var _wallet_popup_wallet_popup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wallet-popup/wallet-popup.component */ "IbL0");







let WalletModule = class WalletModule {
};
WalletModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _wallet_list_wallet_list_component__WEBPACK_IMPORTED_MODULE_5__["WalletListComponent"],
            _wallet_popup_wallet_popup_component__WEBPACK_IMPORTED_MODULE_6__["WalletPopupComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _wallet_routing_module__WEBPACK_IMPORTED_MODULE_3__["WalletRoutingModule"]
        ]
    })
], WalletModule);



/***/ }),

/***/ "PbMR":
/*!*******************************************************!*\
  !*** ./src/app/views/wallet/wallet-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: WalletRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletRoutingModule", function() { return WalletRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _wallet_list_wallet_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallet-list/wallet-list.component */ "m8Kh");




const routes = [
    {
        path: '',
        component: _wallet_list_wallet_list_component__WEBPACK_IMPORTED_MODULE_3__["WalletListComponent"]
    },
];
let WalletRoutingModule = class WalletRoutingModule {
};
WalletRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], WalletRoutingModule);



/***/ }),

/***/ "Qmln":
/*!*********************************************************************!*\
  !*** ./src/app/views/wallet/wallet-list/wallet-list.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3YWxsZXQtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "cN9T":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/wallet/wallet-popup/wallet-popup.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<ion-content>\r\n  <div class=\"rect\">\r\n    <ion-header class=\"head\">\r\n      <ion-toolbar class=\"new-background-color\" style=\"--border-width: 0\">\r\n        <ion-icon\r\n          name=\"close\"\r\n          class=\"close\"\r\n          slot=\"end\"\r\n          (click)=\"close()\"\r\n        ></ion-icon>\r\n        <div class=\"text\" style=\"margin-left: 35px\">Appointment Summary</div>\r\n\r\n        <!-- <span class=\"text1\">Token Number <br> <span class=\"text2\" style=\"opacity:100%;\">{{tokenNo}}</span></span> -->\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <div class=\"innerRect\">\r\n      <span class=\"circle\"></span>\r\n      <div class=\"inputCard\">\r\n        <ion-label style=\"opacity: 51%\">Transaction Amount</ion-label>\r\n        <ion-label class=\"display\">{{ data?.transactionAmount }}</ion-label>\r\n        <!-- <ion-input class=\"box\" placeholder=\"Enter Current Password\"></ion-input> -->\r\n\r\n        <!-- </div>\r\n  \r\n  \r\n  \r\n        <div class=\"inputCard\"> -->\r\n        <ion-label style=\"opacity: 51%\">Transaction Branch</ion-label>\r\n        <ion-label class=\"display\">{{ data?.transactionBranch }}</ion-label>\r\n        <!-- <ion-input class=\"box\" placeholder=\"Enter Current Password\"></ion-input> -->\r\n\r\n        <ion-label style=\"opacity: 51%\">Transaction Date</ion-label>\r\n        <ion-label class=\"display\">{{ data?.transactionDate }}</ion-label>\r\n        <!-- <ion-input class=\"box\" placeholder=\"Enter Current Password\"></ion-input> -->\r\n\r\n        <ion-label style=\"opacity: 51%\">Time Slot</ion-label>\r\n        <ion-label class=\"display\">{{ data?.transactionTime }}</ion-label>\r\n        <!-- <ion-input class=\"box\" placeholder=\"Enter Current Password\"></ion-input> -->\r\n      </div>\r\n      <!-- <img src=\"data:image/png;base64,{{blobUrl}}\">  -->\r\n      <img [src]=\"imageToShow\" />\r\n      <!-- <qrcode [qrdata]=\"myAngularxQrCode\" [width]=\"256\" [errorCorrectionLevel]=\"'M'\"></qrcode> -->\r\n\r\n      <!-- <ion-label\r\n        class=\"inputCard\"\r\n        style=\"display: block; opacity: 70%; font-size: 16pt\"\r\n        (click)=\"addToWallet()\"\r\n        >Add to wallet</ion-label> -->\r\n    </div>\r\n\r\n    <div class=\"inputCard\"></div>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "m8Kh":
/*!*******************************************************************!*\
  !*** ./src/app/views/wallet/wallet-list/wallet-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: WalletListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletListComponent", function() { return WalletListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_wallet_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./wallet-list.component.html */ "2+xu");
/* harmony import */ var _wallet_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallet-list.component.scss */ "Qmln");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _wallet_popup_wallet_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../wallet-popup/wallet-popup.component */ "IbL0");








let WalletListComponent = class WalletListComponent {
    constructor(location, apiService, modalController) {
        this.location = location;
        this.apiService = apiService;
        this.modalController = modalController;
        this.walletList = [];
    }
    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('customer_details'));
        console.log("USer", this.currentUser);
        this.getSavedWalletByCustomerId();
    }
    // Fetch List of Wallet Items
    getSavedWalletByCustomerId() {
        console.log("USer", this.currentUser['customerId']);
        this.apiService.fetchWalletInfo(this.currentUser['customerId'])
            .subscribe((result) => {
            if (result.status == 200) {
                this.walletList = result.data;
                console.log("Wallet items", result);
            }
            else {
                this.walletList = [];
            }
        }, (err) => {
            console.error(err);
        });
    }
    openTicketModal(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (data != null) {
                const modal = yield this.modalController.create({
                    component: _wallet_popup_wallet_popup_component__WEBPACK_IMPORTED_MODULE_7__["WalletPopupComponent"],
                    componentProps: {
                        data: data ? data : {}
                    }
                });
                modal.onDidDismiss().then((modelData) => {
                    if (modelData) {
                        console.log('Modal Data : ', modelData);
                    }
                });
                return yield modal.present();
            }
        });
    }
    back() {
        this.location.back();
    }
};
WalletListComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
WalletListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-wallet-list',
        template: _raw_loader_wallet_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_wallet_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], WalletListComponent);



/***/ })

}]);
//# sourceMappingURL=views-wallet-wallet-module.js.map