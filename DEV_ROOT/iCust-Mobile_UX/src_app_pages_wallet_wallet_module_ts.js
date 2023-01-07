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
/* harmony import */ var _wallet_popup_wallet_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../wallet-popup/wallet-popup.component */ 62093);








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
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            if (data != null) {
                const modal = yield this.modalController.create({
                    component: _wallet_popup_wallet_popup_component__WEBPACK_IMPORTED_MODULE_3__.WalletPopupComponent,
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _wallet_popup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wallet-popup.component.html?ngResource */ 71326);
/* harmony import */ var _wallet_popup_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./wallet-popup.component.scss?ngResource */ 71578);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ 5830);







class TokenObjects {
}
let WalletPopupComponent = class WalletPopupComponent {
    constructor(modalController, api) {
        this.modalController = modalController;
        this.api = api;
        this.tokenObjects = new TokenObjects();
    }
    ngOnInit() {
        this.tokenObjects.transactionId = this.data.transactionId;
        this.tokenObjects.accountId = localStorage.getItem('AccountNumber');
        this.tokenObjects.transactionDate = moment__WEBPACK_IMPORTED_MODULE_2__(new Date(localStorage.getItem('TransactionDate'))).format("DD-MM-YYYY");
        this.tokenObjects.transactionDate = localStorage.getItem('TransactionDate');
        this.tokenObjects.timeSlot = localStorage.getItem('TransactionTime');
        this.tokenObjects.productCode = this.data.productCode;
        this.tokenObjects.phoneNumber = this.data.phoneNumber;
        this.getQrCode(this.tokenObjects);
    }
    close() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(true);
        });
    }
    getQrCode(data) {
        this.api.generateQRCode(data).subscribe(tokenResp => {
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
};
WalletPopupComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService }
];
WalletPopupComponent.propDecorators = {
    data: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input }]
};
WalletPopupComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
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

module.exports = ".wallet_header {\n  --background: #ecf3f2;\n  height: 88.5px;\n  padding-top: 20px;\n  display: inline-block;\n  vertical-align: middle;\n  color: black;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n.wallet_header ion-title {\n  font-size: 20px;\n  font-weight: bold;\n  padding-left: 10%;\n  text-align: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbGxldC1saXN0LmNvbXBvbmVudC5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdEh1YiUyMFJlcG9zaXRvcnklMjBvbGRcXGlDdXN0TW9iaWxlLXYyXFxzcmNcXGFwcFxccGFnZXNcXHdhbGxldFxcd2FsbGV0LWxpc3RcXHdhbGxldC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFFQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQ0FGO0FERUU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDQUoiLCJmaWxlIjoid2FsbGV0LWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud2FsbGV0X2hlYWRlciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZWNmM2YyO1xyXG4gIGhlaWdodDogODguNXB4O1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIC8vIG1hcmdpbi1sZWZ0OiAyJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIC8vIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIGlvbi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB9XHJcbn1cclxuIiwiLndhbGxldF9oZWFkZXIge1xuICAtLWJhY2tncm91bmQ6ICNlY2YzZjI7XG4gIGhlaWdodDogODguNXB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG59XG4ud2FsbGV0X2hlYWRlciBpb24tdGl0bGUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLWxlZnQ6IDEwJTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn0iXX0= */";

/***/ }),

/***/ 71578:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/wallet/wallet-popup/wallet-popup.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = ".rect {\n  margin-top: 50pt;\n  background-color: #456EFE;\n  margin-left: 24pt;\n  margin-right: 24pt;\n  margin-bottom: 53pt;\n  border-radius: 20px;\n  border-bottom-style: hidden;\n}\n\nion-header {\n  bottom: none;\n}\n\nion-content {\n  --ion-background-color: #111D12;\n}\n\n.new-background-color {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  --background: white;\n  height: -moz-fit-content;\n  height: fit-content;\n  padding-top: 30px;\n  display: inline-block;\n  vertical-align: middle;\n  color: #3477C6;\n  font-size: 13pt;\n  padding-top: 24pt;\n  padding-left: 4pt;\n  font-family: \"Montserrat\" !important;\n  box-shadow: none;\n}\n\n.text1 {\n  display: block;\n  text-align: center;\n  padding-top: 10pt;\n  color: #102245;\n  opacity: 27%;\n  size: 10pt;\n  font-family: \"Montserrat\" !important;\n  justify-content: center;\n}\n\n.text2 {\n  display: block;\n  text-align: center;\n  padding-top: 10pt;\n  color: #102245;\n  opacity: 100%;\n  font-size: 27pt;\n  padding-bottom: 10pt;\n  font-family: \"Montserrat\" !important;\n  justify-content: center;\n}\n\n.accountSummaryText {\n  text-align: center;\n}\n\n.innerRect {\n  position: relative;\n}\n\n.circle {\n  position: absolute;\n  left: 48%;\n  top: -18px;\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background-color: white;\n}\n\n.head {\n  box-shadow: none;\n}\n\n.inputCard:not(.display) {\n  padding-left: 32pt;\n  padding-top: 42pt;\n  font-family: \"Montserrat\" !important;\n  color: #FFFFFF;\n  size: 14pt;\n}\n\n.display {\n  display: block;\n  font-size: 17pt;\n  color: #FFFFFF;\n  padding-top: 10pt;\n  padding-bottom: 20pt;\n}\n\nimg {\n  padding-top: 10pt;\n  min-height: 96pt;\n  width: 96pt;\n  margin-left: 32pt;\n}\n\n.header-ios ion-toolbar:last-of-type {\n  --border-width: 0;\n}\n\n.header-md::after {\n  left: unset;\n  bottom: -5px;\n  background-position: left 0 top -2px;\n  position: absolute;\n  width: 100%;\n  height: 5px;\n  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHBAMAAADzDtBxAAAAD1BMVEUAAAAAAAAAAAAAAAAAAABPDueNAAAABXRSTlMUCS0gBIh/TXEAAAAaSURBVAjXYxCEAgY4UIICBmMogMsgFLtAAQCNSwXZKOdPxgAAAABJRU5ErkJggg==);\n  background-repeat: repeat-x;\n  content: \"\";\n}\n\n.close {\n  color: lightgrey;\n  height: 18pt;\n  width: 18pt;\n  position: absolute;\n  right: 10px;\n  top: -5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndhbGxldC1wb3B1cC5jb21wb25lbnQuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxHaXRIdWIlMjBSZXBvc2l0b3J5JTIwb2xkXFxpQ3VzdE1vYmlsZS12Mlxcc3JjXFxhcHBcXHBhZ2VzXFx3YWxsZXRcXHdhbGxldC1wb3B1cFxcd2FsbGV0LXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFHQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUNESjs7QURJQTtFQUNJLFlBQUE7QUNESjs7QURJQTtFQUNJLCtCQUFBO0FDREo7O0FESUE7RUFDSSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsaUJBQUE7RUFFQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtBQ0ZKOztBRE1BO0VBQ0ksY0FBQTtFQUVBLGtCQUFBO0VBRUEsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLHVCQUFBO0FDTEo7O0FEUUE7RUFDSSxjQUFBO0VBRUEsa0JBQUE7RUFFQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUVBLG9CQUFBO0VBQ0Esb0NBQUE7RUFDQSx1QkFBQTtBQ1JKOztBRFlBO0VBQ0ksa0JBQUE7QUNUSjs7QURZQTtFQUNJLGtCQUFBO0FDVEo7O0FEWUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDVEo7O0FEWUE7RUFDSSxnQkFBQTtBQ1RKOztBRFlBO0VBRUksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0VBQ0EsY0FBQTtFQUVBLFVBQUE7QUNYSjs7QURjQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNYSjs7QURlQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNaSjs7QURnQkE7RUFDSSxpQkFBQTtBQ2JKOztBRGdCQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EseU5BQUE7RUFDQSwyQkFBQTtFQUNBLFdBQUE7QUNiSjs7QURnQkE7RUFFSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFFQSxXQUFBO0VBQ0EsU0FBQTtBQ2ZKIiwiZmlsZSI6IndhbGxldC1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5yZWN0IHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHQ7XHJcbiAgICAvLyBtaW4td2lkdGg6IDMyN3B0O1xyXG4gICAgLy9taW4taGVpZ2h0OiA0NzBwdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NTZFRkU7XHJcbiAgICBtYXJnaW4tbGVmdDogMjRwdDtcclxuICAgIG1hcmdpbi1yaWdodDogMjRwdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDUzcHQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogaGlkZGVuO1xyXG59XHJcblxyXG5pb24taGVhZGVyIHtcclxuICAgIGJvdHRvbTogbm9uZTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzExMUQxMjtcclxufVxyXG5cclxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9yIHtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgY29sb3I6ICMzNDc3QzY7XHJcbiAgICBmb250LXNpemU6IDEzcHQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMjRwdDtcclxuICAgIHBhZGRpbmctbGVmdDogNHB0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuXHJcbn1cclxuXHJcbi50ZXh0MSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIC8vIHBhZGRpbmctbGVmdDo2MHB0O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gbWFyZ2luLXRvcDo2NnB0O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHQ7XHJcbiAgICBjb2xvcjogIzEwMjI0NTtcclxuICAgIG9wYWNpdHk6IDI3JTtcclxuICAgIHNpemU6IDEwcHQ7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRleHQyIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OjYwcHQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyBtYXJnaW4tdG9wOjY2cHQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBwdDtcclxuICAgIGNvbG9yOiAjMTAyMjQ1O1xyXG4gICAgb3BhY2l0eTogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMjdwdDtcclxuICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBwdDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmFjY291bnRTdW1tYXJ5VGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pbm5lclJlY3Qge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uY2lyY2xlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDQ4JTtcclxuICAgIHRvcDogLTE4cHg7XHJcbiAgICB3aWR0aDogMzZweDtcclxuICAgIGhlaWdodDogMzZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVhZCB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4uaW5wdXRDYXJkOm5vdCguZGlzcGxheSkge1xyXG5cclxuICAgIHBhZGRpbmctbGVmdDogMzJwdDtcclxuICAgIHBhZGRpbmctdG9wOiA0MnB0O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAvLyBvcGFjaXR5OiA1MSU7XHJcbiAgICBzaXplOiAxNHB0O1xyXG59XHJcblxyXG4uZGlzcGxheSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMTdwdDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBwdDtcclxuICAgIC8vIG9wYWNpdHk6IDEwMCU7XHJcbn1cclxuXHJcbmltZyB7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBwdDtcclxuICAgIG1pbi1oZWlnaHQ6IDk2cHQ7XHJcbiAgICB3aWR0aDogOTZwdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMnB0O1xyXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDE4cHQ7XHJcbn1cclxuXHJcbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XHJcbiAgICAtLWJvcmRlci13aWR0aDogMDtcclxufVxyXG5cclxuLmhlYWRlci1tZDo6YWZ0ZXIge1xyXG4gICAgbGVmdDogdW5zZXQ7XHJcbiAgICBib3R0b206IC01cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDAgdG9wIC0ycHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBSEJBTUFBQUR6RHRCeEFBQUFEMUJNVkVVQUFBQUFBQUFBQUFBQUFBQUFBQUJQRHVlTkFBQUFCWFJTVGxNVUNTMGdCSWgvVFhFQUFBQWFTVVJCVkFqWFl4Q0VBZ1k0VUlJQ0JtTW9nTXNnRkx0QUFRQ05Td1haS09kUHhnQUFBQUJKUlU1RXJrSmdnZz09KTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbn1cclxuXHJcbi5jbG9zZSB7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOjE0MHB4O1xyXG4gICAgY29sb3I6IGxpZ2h0Z3JleTtcclxuICAgIGhlaWdodDogMThwdDtcclxuICAgIHdpZHRoOiAxOHB0O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiByaWdodDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgdG9wOiAtNXB4O1xyXG4gICAgLy8gcGFkZGluZy1ib3R0b206IDEzMHB4O1xyXG4gICAgLy8gcGFkZGluZy1yaWdodDoxMHB4O1xyXG59IiwiLnJlY3Qge1xuICBtYXJnaW4tdG9wOiA1MHB0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU2RUZFO1xuICBtYXJnaW4tbGVmdDogMjRwdDtcbiAgbWFyZ2luLXJpZ2h0OiAyNHB0O1xuICBtYXJnaW4tYm90dG9tOiA1M3B0O1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBib3JkZXItYm90dG9tLXN0eWxlOiBoaWRkZW47XG59XG5cbmlvbi1oZWFkZXIge1xuICBib3R0b206IG5vbmU7XG59XG5cbmlvbi1jb250ZW50IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogIzExMUQxMjtcbn1cblxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiAjMzQ3N0M2O1xuICBmb250LXNpemU6IDEzcHQ7XG4gIHBhZGRpbmctdG9wOiAyNHB0O1xuICBwYWRkaW5nLWxlZnQ6IDRwdDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi50ZXh0MSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMHB0O1xuICBjb2xvcjogIzEwMjI0NTtcbiAgb3BhY2l0eTogMjclO1xuICBzaXplOiAxMHB0O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi50ZXh0MiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxMHB0O1xuICBjb2xvcjogIzEwMjI0NTtcbiAgb3BhY2l0eTogMTAwJTtcbiAgZm9udC1zaXplOiAyN3B0O1xuICBwYWRkaW5nLWJvdHRvbTogMTBwdDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uYWNjb3VudFN1bW1hcnlUZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaW5uZXJSZWN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2lyY2xlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA0OCU7XG4gIHRvcDogLTE4cHg7XG4gIHdpZHRoOiAzNnB4O1xuICBoZWlnaHQ6IDM2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbi5oZWFkIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuLmlucHV0Q2FyZDpub3QoLmRpc3BsYXkpIHtcbiAgcGFkZGluZy1sZWZ0OiAzMnB0O1xuICBwYWRkaW5nLXRvcDogNDJwdDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBzaXplOiAxNHB0O1xufVxuXG4uZGlzcGxheSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE3cHQ7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBwYWRkaW5nLXRvcDogMTBwdDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHQ7XG59XG5cbmltZyB7XG4gIHBhZGRpbmctdG9wOiAxMHB0O1xuICBtaW4taGVpZ2h0OiA5NnB0O1xuICB3aWR0aDogOTZwdDtcbiAgbWFyZ2luLWxlZnQ6IDMycHQ7XG59XG5cbi5oZWFkZXItaW9zIGlvbi10b29sYmFyOmxhc3Qtb2YtdHlwZSB7XG4gIC0tYm9yZGVyLXdpZHRoOiAwO1xufVxuXG4uaGVhZGVyLW1kOjphZnRlciB7XG4gIGxlZnQ6IHVuc2V0O1xuICBib3R0b206IC01cHg7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgMCB0b3AgLTJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQUhCQU1BQUFEekR0QnhBQUFBRDFCTVZFVUFBQUFBQUFBQUFBQUFBQUFBQUFCUER1ZU5BQUFBQlhSU1RsTVVDUzBnQkloL1RYRUFBQUFhU1VSQlZBalhZeENFQWdZNFVJSUNCbU1vZ01zZ0ZMdEFBUUNOU3dYWktPZFB4Z0FBQUFCSlJVNUVya0pnZ2c9PSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgY29udGVudDogXCJcIjtcbn1cblxuLmNsb3NlIHtcbiAgY29sb3I6IGxpZ2h0Z3JleTtcbiAgaGVpZ2h0OiAxOHB0O1xuICB3aWR0aDogMThwdDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMTBweDtcbiAgdG9wOiAtNXB4O1xufSJdfQ== */";

/***/ }),

/***/ 41827:
/*!********************************************************************************!*\
  !*** ./src/app/pages/wallet/wallet-list/wallet-list.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar class=\"wallet_header\">\r\n    <ion-icon name=\"chevron-back-outline\" (click)=\"back()\"></ion-icon>\r\n    <ion-title>My Wallet</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content class=\"toolbar-bg\">\r\n  <ion-list>\r\n    <ion-item button *ngFor=\"let item of walletList; let i = index\">\r\n      <ion-thumbnail slot=\"start\">\r\n        <img src=\"assets/icon/ticket-vector-icon-26.jpg\" />\r\n      </ion-thumbnail>\r\n      <ion-label>\r\n        <h2>{{ item?.trnType }}</h2>\r\n        <p>\r\n          {{ item.transactionCurrency }} {{ item?.transactionAmount }} @\r\n          {{ item?.transactionBranch }}\r\n        </p>\r\n        <p>{{ item?.transactionDate }} {{ item?.transactionTime }}</p>\r\n      </ion-label>\r\n      <ion-button fill=\"outline\" slot=\"end\" (click)=\"openTicketModal(item)\"\r\n        >View</ion-button\r\n      >\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  <p\r\n    *ngIf=\"walletList.length == 0\"\r\n    style=\"margin-top: 50%; text-align: center\"\r\n    lines=\"none\"\r\n  >\r\n    No Saved Wallet\r\n  </p>\r\n</ion-content>\r\n";

/***/ }),

/***/ 71326:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/wallet/wallet-popup/wallet-popup.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "\r\n\r\n<ion-content>\r\n  <div class=\"rect\">\r\n    <ion-header class=\"head\">\r\n      <ion-toolbar class=\"new-background-color\" style=\"--border-width: 0\">\r\n        <ion-icon\r\n          name=\"close\"\r\n          class=\"close\"\r\n          slot=\"end\"\r\n          (click)=\"close()\"\r\n        ></ion-icon>\r\n        <div class=\"text\" style=\"margin-left: 35px\">Appointment Summary</div>\r\n\r\n        <!-- <span class=\"text1\">Token Number <br> <span class=\"text2\" style=\"opacity:100%;\">{{tokenNo}}</span></span> -->\r\n      </ion-toolbar>\r\n    </ion-header>\r\n    <div class=\"innerRect\">\r\n      <span class=\"circle\"></span>\r\n      <div class=\"inputCard\">\r\n        <ion-label style=\"opacity: 51%\">Transaction Amount</ion-label>\r\n        <ion-label class=\"display\">{{ data?.transactionAmount }}</ion-label>\r\n        <!-- <ion-input class=\"box\" placeholder=\"Enter Current Password\"></ion-input> -->\r\n\r\n        <!-- </div>\r\n  \r\n  \r\n  \r\n        <div class=\"inputCard\"> -->\r\n        <ion-label style=\"opacity: 51%\">Transaction Branch</ion-label>\r\n        <ion-label class=\"display\">{{ data?.transactionBranch }}</ion-label>\r\n        <!-- <ion-input class=\"box\" placeholder=\"Enter Current Password\"></ion-input> -->\r\n\r\n        <ion-label style=\"opacity: 51%\">Transaction Date</ion-label>\r\n        <ion-label class=\"display\">{{ data?.transactionDate }}</ion-label>\r\n        <!-- <ion-input class=\"box\" placeholder=\"Enter Current Password\"></ion-input> -->\r\n\r\n        <ion-label style=\"opacity: 51%\">Time Slot</ion-label>\r\n        <ion-label class=\"display\">{{ data?.transactionTime }}</ion-label>\r\n        <!-- <ion-input class=\"box\" placeholder=\"Enter Current Password\"></ion-input> -->\r\n      </div>\r\n      <!-- <img src=\"data:image/png;base64,{{blobUrl}}\">  -->\r\n      <img [src]=\"imageToShow\" />\r\n      <!-- <qrcode [qrdata]=\"myAngularxQrCode\" [width]=\"256\" [errorCorrectionLevel]=\"'M'\"></qrcode> -->\r\n\r\n      <!-- <ion-label\r\n        class=\"inputCard\"\r\n        style=\"display: block; opacity: 70%; font-size: 16pt\"\r\n        (click)=\"addToWallet()\"\r\n        >Add to wallet</ion-label> -->\r\n    </div>\r\n\r\n    <div class=\"inputCard\"></div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_wallet_wallet_module_ts.js.map