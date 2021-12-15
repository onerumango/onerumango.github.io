(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["transaction-transaction-module"],{

/***/ "6QSt":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/transaction/transaction.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon slot=\"icon-only\" name=\"arrow-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>My Transaction</ion-title>\r\n  </ion-toolbar>\r\n  <ion-toolbar *ngIf=\"accountInfo.accountType != undefined\">\r\n    <div class=\"toolbar-bg\">\r\n      <h5 class=\"capitalize secondary-text\">{{ accountInfo?.accountType + ' Account' }}</h5>\r\n      <p class=\"capitalize secondary-text\">{{ accountInfo?.accountId }}</p>\r\n    </div>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"transactionCard\">\r\n    <div *ngIf=\"displayInfo\">\r\n      <p>{{message}}</p>\r\n    </div>\r\n   \r\n      <ion-list>\r\n        <ion-item *ngFor=\"let trans of transactionDataArr;trackBy: trackByFn\" (click)=\"onClick(trans)\">\r\n          <ion-button slot=\"start\">\r\n            <ion-icon slot=\"icon-only\" name=\"wallet-outline\"></ion-icon>\r\n          </ion-button>\r\n      \r\n            <ion-grid>\r\n              <ion-row>\r\n                <ion-col>\r\n                  <ion-label>\r\n                  <h3>\r\n                    {{trans.trnType}} \r\n                  </h3>\r\n                  <p> \r\n                   \r\n                    Ref No:{{ trans.transactionId }}-{{trans.transactionDate}}-{{ trans.transactionTime }}\r\n                    \r\n                  </p>\r\n                </ion-label>\r\n                </ion-col>\r\n                <ion-col class=\"ion-align-self-center\">\r\n                  <ion-label [color]=\"trans.trnType == 'Cash Withdrawal' ? 'danger' : 'success'\" class=\"text-xs text-right\">{{trans.transactionAmount | currency:trans.transactionCurrency:'symbol':'1.0-1'}} </ion-label>\r\n                </ion-col>\r\n              </ion-row>\r\n            </ion-grid>\r\n           \r\n          \r\n    \r\n        </ion-item>\r\n      </ion-list>\r\n   \r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "QvzP":
/*!*******************************************************!*\
  !*** ./src/app/views/transaction/transaction.page.ts ***!
  \*******************************************************/
/*! exports provided: TransactionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionPage", function() { return TransactionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_transaction_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./transaction.page.html */ "6QSt");
/* harmony import */ var _transaction_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transaction.page.scss */ "oFlD");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/loading.service */ "7ch9");










let TransactionPage = class TransactionPage {
    constructor(router, alertController, loadingService, apiService, cdr, location, shareDataService) {
        this.router = router;
        this.alertController = alertController;
        this.loadingService = loadingService;
        this.apiService = apiService;
        this.cdr = cdr;
        this.location = location;
        this.shareDataService = shareDataService;
        this.notToShowAll2 = false;
        this.displayInfo = false;
    }
    ngOnInit() {
        this.shareDataService.getAccountInfo.subscribe(data => {
            console.log("Data", data);
            this.accountInfo = data;
        });
        this.getTransactionByAccountId();
    }
    getTransactionByAccountId() {
        this.loadingService.present();
        this.loggedInCust = sessionStorage.getItem('customer_id');
        console.log("Logged In Customer -- ", this.loggedInCust);
        this.apiService.getTransactionByAccountId(this.accountInfo.accountId)
            .subscribe(data => {
            this.loadingService.dismiss();
            console.log("data:::", data);
            if (data.length > 0) {
                this.transactionDataArr = data;
            }
            else {
                console.log("Inside else");
                this.displayInfo = true;
                this.notToShowAll2 = true;
                this.message = "There are no transactions to display";
                console.log(this.displayInfo, this.message);
            }
            this.cdr.markForCheck();
        }, (err) => {
        });
    }
    onClick(event) {
        console.log("Event = ", event);
        this.loadingService.present();
        this.apiService.getByTransactionId(event.transactionId).subscribe(response => {
            console.log("response -- " + response);
            this.data = JSON.parse(JSON.stringify(response));
            console.log("response -- " + this.data);
        });
        setTimeout(() => {
            this.loadingService.dismiss();
            this.dialog(this.data);
        }, 3000);
    }
    dialog(data) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: data.trnType,
                inputs: [
                    {
                        name: 'Transaction ID',
                        type: 'text',
                        value: 'Transaction ID: ' + data.transactionId,
                        disabled: true
                    },
                    {
                        name: 'Account Number',
                        type: 'text',
                        value: 'Account Number: ' + data.accountNumber,
                        disabled: true
                    },
                    {
                        name: 'Account Type',
                        type: 'text',
                        value: 'Account Type: ' + data.accountType,
                        disabled: true
                    },
                    {
                        name: 'Account Currency',
                        type: 'text',
                        value: 'Account Currency: ' + data.transactionCurrency,
                        disabled: true
                    },
                    {
                        name: 'Transaction Amount',
                        type: 'text',
                        value: 'Transaction Amount: ' + data.transactionAmount,
                        disabled: true
                    },
                    {
                        name: 'Balance',
                        type: 'text',
                        value: 'Balance: ' + data.accountBalance,
                        disabled: true
                    },
                ],
                buttons: ['OK']
            });
            yield alert.present();
            let result = yield alert.onDidDismiss();
            console.log(result);
        });
    }
    goBack() {
        this.location.back();
    }
};
TransactionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_9__["LoadingService"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_8__["DataService"] }
];
TransactionPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-transaction',
        template: _raw_loader_transaction_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_transaction_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TransactionPage);



/***/ }),

/***/ "eD7N":
/*!*****************************************************************!*\
  !*** ./src/app/views/transaction/transaction-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: TransactionPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionPageRoutingModule", function() { return TransactionPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _transaction_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transaction.page */ "QvzP");




const routes = [
    {
        path: '',
        component: _transaction_page__WEBPACK_IMPORTED_MODULE_3__["TransactionPage"]
    }
];
let TransactionPageRoutingModule = class TransactionPageRoutingModule {
};
TransactionPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TransactionPageRoutingModule);



/***/ }),

/***/ "oFlD":
/*!*********************************************************!*\
  !*** ./src/app/views/transaction/transaction.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".toolbar-bg {\n  margin-top: 0px;\n  background: rgba(31, 107, 255, 0.2) !important;\n  width: auto;\n  height: 60px;\n  padding: 1px;\n}\n\np {\n  font-size: 12px;\n}\n\n.transactionCard {\n  height: 525px;\n  width: 100%;\n}\n\n#wrapper {\n  margin-left: auto;\n  margin-right: auto;\n  height: auto;\n  width: 75%;\n}\n\n.text-right {\n  text-align: end;\n}\n\n.secondary-text {\n  line-height: 0.5rem;\n  text-align: center;\n  color: #1f6bff !important;\n}\n\n.event {\n  flex-flow: row wrap;\n  box-sizing: border-box;\n  display: flex;\n}\n\n.cusNameClass {\n  font-size: small;\n}\n\n.cusHistoryContent {\n  color: #aba9a9;\n  font-size: 10px;\n}\n\n.email-icon {\n  color: #707070;\n  cursor: pointer;\n  float: right;\n  font-size: large;\n}\n\n.imgStyle {\n  margin-left: 10px;\n  margin-right: 10px;\n  height: 35px;\n  width: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0cmFuc2FjdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxlQUFBO0VBQ0EsOENBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFDQTtFQUNJLGVBQUE7QUFFSjs7QUFDQTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FBRUo7O0FBQUE7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7QUFJSjs7QUFGQTtFQUVJLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQUlKOztBQUZBO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFLSjs7QUFEQTtFQUNJLGdCQUFBO0FBSUo7O0FBRkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQUtKOztBQUhBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFNSjs7QUFKQTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQU9KIiwiZmlsZSI6InRyYW5zYWN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyLWJne1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgzMSwgMTA3LCAyNTUsIDAuMikgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiBhdXRvO1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG59XHJcbnB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi50cmFuc2FjdGlvbkNhcmQge1xyXG4gICAgaGVpZ2h0OiA1MjVweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbiN3cmFwcGVyIHtcclxuICAgIG1hcmdpbi1sZWZ0OmF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6YXV0bztcclxuICAgIGhlaWdodDphdXRvOyBcclxuICAgIHdpZHRoOjc1JTtcclxufVxyXG4udGV4dC1yaWdodHtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG4uc2Vjb25kYXJ5LXRleHR7XHJcbiAgICBcclxuICAgIGxpbmUtaGVpZ2h0OiAwLjVyZW07XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzFmNmJmZiFpbXBvcnRhbnQ7XHJcbn1cclxuLmV2ZW50IHtcclxuICAgIGZsZXgtZmxvdzogcm93IHdyYXA7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIC8vIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIC8vIGhlaWdodDogNTI1cHg7XHJcbn1cclxuLmN1c05hbWVDbGFzcyB7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG59XHJcbi5jdXNIaXN0b3J5Q29udGVudCB7XHJcbiAgICBjb2xvcjogI2FiYTlhOTtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4uZW1haWwtaWNvbiB7XHJcbiAgICBjb2xvcjogIzcwNzA3MDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbn1cclxuLmltZ1N0eWxlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyBcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDsgXHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB3aWR0aDogMzBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "rHaX":
/*!*********************************************************!*\
  !*** ./src/app/views/transaction/transaction.module.ts ***!
  \*********************************************************/
/*! exports provided: TransactionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionPageModule", function() { return TransactionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _transaction_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transaction-routing.module */ "eD7N");
/* harmony import */ var _transaction_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transaction.page */ "QvzP");







let TransactionPageModule = class TransactionPageModule {
};
TransactionPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _transaction_routing_module__WEBPACK_IMPORTED_MODULE_5__["TransactionPageRoutingModule"]
        ],
        declarations: [_transaction_page__WEBPACK_IMPORTED_MODULE_6__["TransactionPage"]]
    })
], TransactionPageModule);



/***/ })

}]);
//# sourceMappingURL=transaction-transaction-module.js.map