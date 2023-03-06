"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_operation_operation_module_ts"],{

/***/ 69204:
/*!*************************************************************!*\
  !*** ./src/app/pages/operation/operation-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperationPageRoutingModule": () => (/* binding */ OperationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _operation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operation.page */ 97329);




const routes = [
    {
        path: '',
        component: _operation_page__WEBPACK_IMPORTED_MODULE_0__.OperationPage
    }
];
let OperationPageRoutingModule = class OperationPageRoutingModule {
};
OperationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OperationPageRoutingModule);



/***/ }),

/***/ 74125:
/*!*****************************************************!*\
  !*** ./src/app/pages/operation/operation.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OperationPageModule": () => (/* binding */ OperationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _operation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./operation-routing.module */ 69204);
/* harmony import */ var _operation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./operation.page */ 97329);







let OperationPageModule = class OperationPageModule {
};
OperationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _operation_routing_module__WEBPACK_IMPORTED_MODULE_0__.OperationPageRoutingModule
        ],
        declarations: [_operation_page__WEBPACK_IMPORTED_MODULE_1__.OperationPage]
    })
], OperationPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_operation_operation_module_ts.js.map