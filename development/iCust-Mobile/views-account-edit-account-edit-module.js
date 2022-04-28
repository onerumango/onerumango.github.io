(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-account-edit-account-edit-module"],{

/***/ "3opN":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/account-edit/account-edit.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>accountEdit</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "QgWU":
/*!*********************************************************!*\
  !*** ./src/app/views/account-edit/account-edit.page.ts ***!
  \*********************************************************/
/*! exports provided: AccountEditPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountEditPage", function() { return AccountEditPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_account_edit_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./account-edit.page.html */ "3opN");
/* harmony import */ var _account_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./account-edit.page.scss */ "hfnM");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AccountEditPage = class AccountEditPage {
    constructor() { }
    ngOnInit() {
    }
};
AccountEditPage.ctorParameters = () => [];
AccountEditPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-account-edit',
        template: _raw_loader_account_edit_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_account_edit_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AccountEditPage);



/***/ }),

/***/ "aeOH":
/*!*******************************************************************!*\
  !*** ./src/app/views/account-edit/account-edit-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: AccountEditPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountEditPageRoutingModule", function() { return AccountEditPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _account_edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account-edit.page */ "QgWU");




const routes = [
    {
        path: '',
        component: _account_edit_page__WEBPACK_IMPORTED_MODULE_3__["AccountEditPage"]
    }
];
let AccountEditPageRoutingModule = class AccountEditPageRoutingModule {
};
AccountEditPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AccountEditPageRoutingModule);



/***/ }),

/***/ "dU0v":
/*!***********************************************************!*\
  !*** ./src/app/views/account-edit/account-edit.module.ts ***!
  \***********************************************************/
/*! exports provided: AccountEditPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountEditPageModule", function() { return AccountEditPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _account_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./account-edit-routing.module */ "aeOH");
/* harmony import */ var _account_edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./account-edit.page */ "QgWU");







let AccountEditPageModule = class AccountEditPageModule {
};
AccountEditPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _account_edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountEditPageRoutingModule"]
        ],
        declarations: [_account_edit_page__WEBPACK_IMPORTED_MODULE_6__["AccountEditPage"]]
    })
], AccountEditPageModule);



/***/ }),

/***/ "hfnM":
/*!***********************************************************!*\
  !*** ./src/app/views/account-edit/account-edit.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LWVkaXQucGFnZS5zY3NzIn0= */");

/***/ })

}]);
//# sourceMappingURL=views-account-edit-account-edit-module.js.map