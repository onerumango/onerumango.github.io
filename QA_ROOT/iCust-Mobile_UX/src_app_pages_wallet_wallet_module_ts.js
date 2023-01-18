"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_wallet_wallet_module_ts"],{

/***/ 74134:
/*!*******************************************************************!*\
  !*** ./src/app/pages/wallet/wallet-list/wallet-list.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletListComponent": () => (/* binding */ WalletListComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _wallet_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wallet-list.component.html?ngResource */ 41827);
/* harmony import */ var _wallet_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet-list.component.scss?ngResource */ 19816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _appointmentpopup_appointmentpopup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../appointmentpopup/appointmentpopup.page */ 14808);








let WalletListComponent = class WalletListComponent {
    constructor(location, apiService, modalController) {
        this.location = location;
        this.apiService = apiService;
        this.modalController = modalController;
        this.walletList = [];
    }
    ngOnInit() {
        this.currentUser = JSON.parse(localStorage.getItem('customer_details'));
        this.getSavedWalletByCustomerId();
    }
    // Fetch List of Wallet Items
    getSavedWalletByCustomerId() {
        this.apiService.fetchWalletInfo(this.currentUser['customerId'])
            .subscribe((result) => {
            if (result.status == 200) {
                this.walletList = result.data;
            }
            else {
                this.walletList = [];
            }
        }, (err) => {
            console.error(err);
        });
    }
    openTicketModal(data) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            console.log("Data check", data);
            if (data != null) {
                const modal = yield this.modalController.create({
                    component: _appointmentpopup_appointmentpopup_page__WEBPACK_IMPORTED_MODULE_3__.AppointmentpopupPage,
                    componentProps: {
                        value: data ? data : {}
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
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController }
];
WalletListComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-wallet-list',
        template: _wallet_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_wallet_list_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WalletListComponent);



/***/ }),

/***/ 62093:
/*!*********************************************************************!*\
  !*** ./src/app/pages/wallet/wallet-popup/wallet-popup.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenObjects": () => (/* binding */ TokenObjects),
/* harmony export */   "WalletPopupComponent": () => (/* binding */ WalletPopupComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _wallet_popup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wallet-popup.component.html?ngResource */ 71326);
/* harmony import */ var _wallet_popup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet-popup.component.scss?ngResource */ 71578);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);







class TokenObjects {
}
let WalletPopupComponent = class WalletPopupComponent {
    constructor(modalController, api, sanitizer) {
        this.modalController = modalController;
        this.api = api;
        this.sanitizer = sanitizer;
        this.tokenObjects = new TokenObjects();
    }
    ngOnInit() {
        console.log("Data?", this.data);
        this.tokenObjects.transactionId = this.data.transactionId;
        this.tokenObjects.accountId = this.data.accountNumber;
        // this.tokenObjects.transactionDate = this.data.transactionDate;
        // this.tokenObjects.timeSlot = this.data.TransactionTime;
        // this.tokenObjects.productCode = this.data.productCode;
        this.tokenObjects.phoneNumber = this.data.phoneNumber;
        this.getQrCode(this.tokenObjects);
    }
    close() {
        this.modalController.dismiss(true);
    }
    getQrCode(data) {
        this.api.generateQRCode(data).subscribe(tokenResp => {
            console.log("Token Response", tokenResp);
            this.image = tokenResp;
            this.imageURL = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(this.image));
            // this.createImageFromBlob(tokenResp);
        }, err => {
            console.log("err : ", err);
        });
    }
};
WalletPopupComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.DomSanitizer }
];
WalletPopupComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
WalletPopupComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-wallet-popup',
        template: _wallet_popup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_wallet_popup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], WalletPopupComponent);



/***/ }),

/***/ 48685:
/*!*******************************************************!*\
  !*** ./src/app/pages/wallet/wallet-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletRoutingModule": () => (/* binding */ WalletRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _wallet_list_wallet_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wallet-list/wallet-list.component */ 74134);




const routes = [
    {
        path: '',
        component: _wallet_list_wallet_list_component__WEBPACK_IMPORTED_MODULE_0__.WalletListComponent
    },
];
let WalletRoutingModule = class WalletRoutingModule {
};
WalletRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], WalletRoutingModule);



/***/ }),

/***/ 33632:
/*!***********************************************!*\
  !*** ./src/app/pages/wallet/wallet.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WalletModule": () => (/* binding */ WalletModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _wallet_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wallet-routing.module */ 48685);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _wallet_list_wallet_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet-list/wallet-list.component */ 74134);
/* harmony import */ var _wallet_popup_wallet_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./wallet-popup/wallet-popup.component */ 62093);







let WalletModule = class WalletModule {
};
WalletModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        declarations: [
            _wallet_list_wallet_list_component__WEBPACK_IMPORTED_MODULE_1__.WalletListComponent,
            _wallet_popup_wallet_popup_component__WEBPACK_IMPORTED_MODULE_2__.WalletPopupComponent
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _wallet_routing_module__WEBPACK_IMPORTED_MODULE_0__.WalletRoutingModule
        ]
    })
], WalletModule);



/***/ }),

/***/ 19816:
/*!********************************************************************************!*\
  !*** ./src/app/pages/wallet/wallet-list/wallet-list.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = ".wallet_header {\n  --background: #ecf3f2;\n  height: 88.5px;\n  padding-top: 20px;\n  display: inline-block;\n  vertical-align: middle;\n  color: black;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n.wallet_header ion-title {\n  font-size: 20px;\n}\nion-item::part(native) {\n  height: auto !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbGxldC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFFQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQUFGO0FBRUU7RUFDRSxlQUFBO0FBQUo7QUFJQTtFQUNFLHVCQUFBO0FBREYiLCJmaWxlIjoid2FsbGV0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2FsbGV0X2hlYWRlciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZWNmM2YyO1xyXG4gIGhlaWdodDogODguNXB4O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIC8vIG1hcmdpbi1sZWZ0OiAyJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIC8vIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIGlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5pb24taXRlbTo6cGFydChuYXRpdmUpIHtcclxuICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxufSJdfQ== */";

/***/ }),

/***/ 71578:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/wallet/wallet-popup/wallet-popup.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = ".rect {\n  margin-top: 50pt;\n  background-color: #456EFE;\n  margin-left: 24pt;\n  margin-right: 24pt;\n  margin-bottom: 53pt;\n  border-radius: 20px;\n  border-bottom-style: hidden;\n}\n\nion-header {\n  bottom: none;\n}\n\nion-content {\n  --ion-background-color: #111D12;\n}\n\n.new-background-color {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  --background: white;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-top: 30px;\n  display: inline-block;\n  vertical-align: middle;\n  color: #3477C6;\n  font-size: 13pt;\n  padding-top: 24pt;\n  padding-left: 4pt;\n  font-family: \"Montserrat\" !important;\n  box-shadow: none;\n}\n\n.text1 {\n  display: block;\n  text-align: center;\n  padding-top: 10pt;\n  color: #102245;\n  opacity: 27%;\n  size: 10pt;\n  font-family: \"Montserrat\" !important;\n  justify-content: center;\n}\n\n.text2 {\n  display: block;\n  text-align: center;\n  padding-top: 10pt;\n  color: #102245;\n  opacity: 100%;\n  font-size: 27pt;\n  padding-bottom: 10pt;\n  font-family: \"Montserrat\" !important;\n  justify-content: center;\n}\n\n.accountSummaryText {\n  text-align: center;\n}\n\n.innerRect {\n  position: relative;\n}\n\n.circle {\n  position: absolute;\n  left: 48%;\n  top: -18px;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background-color: white;\n}\n\n.head {\n  box-shadow: none;\n}\n\n.inputCard:not(.display) {\n  padding-left: 32pt;\n  padding-top: 42pt;\n  font-family: \"Montserrat\" !important;\n  color: #FFFFFF;\n  size: 14pt;\n}\n\n.display {\n  display: block;\n  font-size: 17pt;\n  color: #FFFFFF;\n  padding-top: 10pt;\n  padding-bottom: 20pt;\n}\n\nimg {\n  padding-top: 10pt;\n  min-height: 96pt;\n  width: 96pt;\n  margin-left: 32pt;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0;\n}\n\n.header-md::after {\n  left: unset;\n  bottom: -5px;\n  background-position: left 0 top -2px;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);\n  background-repeat: repeat-x;\n  content: \"\";\n}\n\n.close {\n  color: lightgrey;\n  height: 18pt;\n  width: 18pt;\n  position: absolute;\n  right: 10px;\n  top: -5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbGxldC1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBR0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0FBREo7O0FBSUE7RUFDSSwrQkFBQTtBQURKOztBQUlBO0VBQ0ksNEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNBLGlCQUFBO0VBRUEscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUFGSjs7QUFNQTtFQUNJLGNBQUE7RUFFQSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSx1QkFBQTtBQUxKOztBQVFBO0VBQ0ksY0FBQTtFQUVBLGtCQUFBO0VBRUEsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFFQSxvQkFBQTtFQUNBLG9DQUFBO0VBQ0EsdUJBQUE7QUFSSjs7QUFZQTtFQUNJLGtCQUFBO0FBVEo7O0FBWUE7RUFDSSxrQkFBQTtBQVRKOztBQVlBO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtBQVRKOztBQVlBO0VBQ0ksZ0JBQUE7QUFUSjs7QUFZQTtFQUVJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGNBQUE7RUFFQSxVQUFBO0FBWEo7O0FBY0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBWEo7O0FBZUE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBWko7O0FBZ0JBO0VBQ0ksaUJBQUE7QUFiSjs7QUFnQkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLHlOQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FBYko7O0FBZ0JBO0VBRUksZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLFNBQUE7QUFmSiIsImZpbGUiOiJ3YWxsZXQtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVjdCB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB0O1xyXG4gICAgLy8gbWluLXdpZHRoOiAzMjdwdDtcclxuICAgIC8vbWluLWhlaWdodDogNDcwcHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU2RUZFO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI0cHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI0cHQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1M3B0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IGhpZGRlbjtcclxufVxyXG5cclxuaW9uLWhlYWRlciB7XHJcbiAgICBib3R0b206IG5vbmU7XHJcbn1cclxuXHJcbmlvbi1jb250ZW50IHtcclxuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICMxMTFEMTI7XHJcbn1cclxuXHJcbi5uZXctYmFja2dyb3VuZC1jb2xvciB7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XHJcbiAgICAtLWJhY2tncm91bmQ6IHdoaXRlO1xyXG4gICAgaGVpZ2h0OiBmaXQtY29udGVudDtcclxuICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGNvbG9yOiAjMzQ3N0M2O1xyXG4gICAgZm9udC1zaXplOiAxM3B0O1xyXG4gICAgcGFkZGluZy10b3A6IDI0cHQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDRwdDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG59XHJcblxyXG4udGV4dDEge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6NjBwdDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIC8vIG1hcmdpbi10b3A6NjZwdDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB0O1xyXG4gICAgY29sb3I6ICMxMDIyNDU7XHJcbiAgICBvcGFjaXR5OiAyNyU7XHJcbiAgICBzaXplOiAxMHB0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50ZXh0MiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8vIHBhZGRpbmctbGVmdDo2MHB0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gbWFyZ2luLXRvcDo2NnB0O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHQ7XHJcbiAgICBjb2xvcjogIzEwMjI0NTtcclxuICAgIG9wYWNpdHk6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDI3cHQ7XHJcbiAgICAvLyBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHQ7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbn1cclxuXHJcbi5hY2NvdW50U3VtbWFyeVRleHQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uaW5uZXJSZWN0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNpcmNsZSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA0OCU7XHJcbiAgICB0b3A6IC0xOHB4O1xyXG4gICAgd2lkdGg6IDM2cHg7XHJcbiAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhlYWQge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmlucHV0Q2FyZDpub3QoLmRpc3BsYXkpIHtcclxuXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMycHQ7XHJcbiAgICBwYWRkaW5nLXRvcDogNDJwdDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgLy8gb3BhY2l0eTogNTElO1xyXG4gICAgc2l6ZTogMTRwdDtcclxufVxyXG5cclxuLmRpc3BsYXkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDE3cHQ7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB0O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwcHQ7XHJcbiAgICAvLyBvcGFjaXR5OiAxMDAlO1xyXG59XHJcblxyXG5pbWcge1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHQ7XHJcbiAgICBtaW4taGVpZ2h0OiA5NnB0O1xyXG4gICAgd2lkdGg6IDk2cHQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMzJwdDtcclxuICAgIC8vIHBhZGRpbmctYm90dG9tOiAxOHB0O1xyXG59XHJcblxyXG4uaGVhZGVyLWlvcyBpb24tdG9vbGJhcjpsYXN0LW9mLXR5cGUge1xyXG4gICAgLS1ib3JkZXItd2lkdGg6IDA7XHJcbn1cclxuXHJcbi5oZWFkZXItbWQ6OmFmdGVyIHtcclxuICAgIGxlZnQ6IHVuc2V0O1xyXG4gICAgYm90dG9tOiAtNXB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCAwIHRvcCAtMnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQUhCQU1BQUFEekR0QnhBQUFBRDFCTVZFVUFBQUFBQUFBQUFBQUFBQUFBQUFCUER1ZU5BQUFBQlhSU1RsTVVDUzBnQkloL1RYRUFBQUFhU1VSQlZBalhZeENFQWdZNFVJSUNCbU1vZ01zZ0ZMdEFBUUNOU3dYWktPZFB4Z0FBQUFCSlJVNUVya0pnZ2c9PSk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG59XHJcblxyXG4uY2xvc2Uge1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbToxNDBweDtcclxuICAgIGNvbG9yOiBsaWdodGdyZXk7XHJcbiAgICBoZWlnaHQ6IDE4cHQ7XHJcbiAgICB3aWR0aDogMThwdDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vIGp1c3RpZnktY29udGVudDogcmlnaHQ7XHJcbiAgICByaWdodDogMTBweDtcclxuICAgIHRvcDogLTVweDtcclxuICAgIC8vIHBhZGRpbmctYm90dG9tOiAxMzBweDtcclxuICAgIC8vIHBhZGRpbmctcmlnaHQ6MTBweDtcclxufSJdfQ== */";

/***/ }),

/***/ 41827:
/*!********************************************************************************!*\
  !*** ./src/app/pages/wallet/wallet-list/wallet-list.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"back()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>My Wallet</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n \r\n    <ion-item  *ngFor=\"let item of walletList; let i = index\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <img src=\"assets/icon/ticket-vector-icon-26.jpg\" />\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h2>{{ item?.trnType }}</h2>\r\n        <p>\r\n          {{ item.transactionCurrency }} {{ item?.transactionAmount }} @\r\n          {{ item?.transactionBranch }}\r\n        </p>\r\n        <p class=\"date\">{{ item?.transactionDate }} {{ item?.transactionTime }}</p>\r\n      </ion-label>\r\n      <ion-button fill=\"outline\" slot=\"end\" (click)=\"openTicketModal(item)\">View</ion-button>\r\n    </ion-item>\r\n \r\n\r\n  <p *ngIf=\"walletList.length == 0\" style=\"margin-top: 50%; text-align: center\" lines=\"none\">\r\n    No Saved Wallet\r\n  </p>\r\n</ion-content>\r\n";

/***/ }),

/***/ 71326:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/wallet/wallet-popup/wallet-popup.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "\r\n\r\n<ion-content>\r\n  <div class=\"rect\">\r\n    <ion-header class=\"head\">\r\n      <ion-toolbar class=\"new-background-color\" style=\"--border-width: 0\">\r\n        <ion-icon\r\n          name=\"close\"\r\n          class=\"close\"\r\n          slot=\"end\"\r\n          (click)=\"close()\"\r\n        ></ion-icon>\r\n        <div class=\"text\" style=\"margin-left: 35px\">Appointment Summary</div>\r\n\r\n        <!-- <span class=\"text1\">Token Number <br> <span class=\"text2\" style=\"opacity:100%;\">{{tokenNo}}</span></span> -->\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <div class=\"innerRect\">\r\n      <span class=\"circle\"></span>\r\n      <div class=\"inputCard\">\r\n        <ion-label style=\"opacity: 51%\">Transaction Amount</ion-label>\r\n        <ion-label class=\"display\">{{ data?.transactionAmount }}</ion-label>\r\n        <!-- <ion-input class=\"box\" placeholder=\"Enter Current Password\"></ion-input> -->\r\n\r\n        <!-- </div>\r\n  \r\n  \r\n  \r\n        <div class=\"inputCard\"> -->\r\n        <ion-label style=\"opacity: 51%\">Transaction Branch</ion-label>\r\n        <ion-label class=\"display\">{{ data?.transactionBranch }}</ion-label>\r\n        <!-- <ion-input class=\"box\" placeholder=\"Enter Current Password\"></ion-input> -->\r\n\r\n        <ion-label style=\"opacity: 51%\">Transaction Date</ion-label>\r\n        <ion-label class=\"display\">{{ data?.transactionDate }}</ion-label>\r\n        <!-- <ion-input class=\"box\" placeholder=\"Enter Current Password\"></ion-input> -->\r\n\r\n        <ion-label style=\"opacity: 51%\">Time Slot</ion-label>\r\n        <ion-label class=\"display\">{{ data?.transactionTime }}</ion-label>\r\n        <!-- <ion-input class=\"box\" placeholder=\"Enter Current Password\"></ion-input> -->\r\n      </div>\r\n      <!-- <img src=\"data:image/png;base64,{{blobUrl}}\">  -->\r\n      <img [src]=\"imageURL\" />\r\n      <!-- <qrcode [qrdata]=\"myAngularxQrCode\" [width]=\"256\" [errorCorrectionLevel]=\"'M'\"></qrcode> -->\r\n\r\n      <!-- <ion-label\r\n        class=\"inputCard\"\r\n        style=\"display: block; opacity: 70%; font-size: 16pt\"\r\n        (click)=\"addToWallet()\"\r\n        >Add to wallet</ion-label> -->\r\n    </div>\r\n\r\n    <div class=\"inputCard\"></div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_wallet_wallet_module_ts.js.map