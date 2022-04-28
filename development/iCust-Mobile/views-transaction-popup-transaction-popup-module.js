(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-transaction-popup-transaction-popup-module"],{

/***/ "rf77":
/*!*********************************************************************!*\
  !*** ./src/app/views/transaction-popup/transaction-popup.module.ts ***!
  \*********************************************************************/
/*! exports provided: TransactionPopupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionPopupPageModule", function() { return TransactionPopupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _transaction_popup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transaction-popup-routing.module */ "xMnm");
/* harmony import */ var _transaction_popup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./transaction-popup.page */ "COR3");







let TransactionPopupPageModule = class TransactionPopupPageModule {
};
TransactionPopupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _transaction_popup_routing_module__WEBPACK_IMPORTED_MODULE_5__["TransactionPopupPageRoutingModule"]
        ],
        declarations: [_transaction_popup_page__WEBPACK_IMPORTED_MODULE_6__["TransactionPopupPage"]]
    })
], TransactionPopupPageModule);



/***/ }),

/***/ "xMnm":
/*!*****************************************************************************!*\
  !*** ./src/app/views/transaction-popup/transaction-popup-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: TransactionPopupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionPopupPageRoutingModule", function() { return TransactionPopupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _transaction_popup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transaction-popup.page */ "COR3");




const routes = [
    {
        path: '',
        component: _transaction_popup_page__WEBPACK_IMPORTED_MODULE_3__["TransactionPopupPage"]
    }
];
let TransactionPopupPageRoutingModule = class TransactionPopupPageRoutingModule {
};
TransactionPopupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TransactionPopupPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=views-transaction-popup-transaction-popup-module.js.map