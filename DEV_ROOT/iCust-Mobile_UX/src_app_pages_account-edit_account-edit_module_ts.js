"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_account-edit_account-edit_module_ts"],{

/***/ 95022:
/*!*******************************************************************!*\
  !*** ./src/app/pages/account-edit/account-edit-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountEditPageRoutingModule": () => (/* binding */ AccountEditPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _account_edit_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-edit.page */ 41562);




const routes = [
    {
        path: '',
        component: _account_edit_page__WEBPACK_IMPORTED_MODULE_0__.AccountEditPage
    }
];
let AccountEditPageRoutingModule = class AccountEditPageRoutingModule {
};
AccountEditPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AccountEditPageRoutingModule);



/***/ }),

/***/ 60519:
/*!***********************************************************!*\
  !*** ./src/app/pages/account-edit/account-edit.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountEditPageModule": () => (/* binding */ AccountEditPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _account_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-edit-routing.module */ 95022);
/* harmony import */ var _account_edit_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-edit.page */ 41562);







let AccountEditPageModule = class AccountEditPageModule {
};
AccountEditPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _account_edit_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountEditPageRoutingModule
        ],
        declarations: [_account_edit_page__WEBPACK_IMPORTED_MODULE_1__.AccountEditPage]
    })
], AccountEditPageModule);



/***/ }),

/***/ 41562:
/*!*********************************************************!*\
  !*** ./src/app/pages/account-edit/account-edit.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountEditPage": () => (/* binding */ AccountEditPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _account_edit_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-edit.page.html?ngResource */ 22325);
/* harmony import */ var _account_edit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-edit.page.scss?ngResource */ 26703);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let AccountEditPage = class AccountEditPage {
    constructor() { }
    ngOnInit() {
    }
};
AccountEditPage.ctorParameters = () => [];
AccountEditPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-account-edit',
        template: _account_edit_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_account_edit_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AccountEditPage);



/***/ }),

/***/ 26703:
/*!**********************************************************************!*\
  !*** ./src/app/pages/account-edit/account-edit.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LWVkaXQucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 22325:
/*!**********************************************************************!*\
  !*** ./src/app/pages/account-edit/account-edit.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>accountEdit</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_account-edit_account-edit_module_ts.js.map