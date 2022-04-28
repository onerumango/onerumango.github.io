(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-operation-operation-module"],{

/***/ "tONg":
/*!*************************************************************!*\
  !*** ./src/app/views/operation/operation-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: OperationPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationPageRoutingModule", function() { return OperationPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _operation_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./operation.page */ "H7HN");




const routes = [
    {
        path: '',
        component: _operation_page__WEBPACK_IMPORTED_MODULE_3__["OperationPage"]
    }
];
let OperationPageRoutingModule = class OperationPageRoutingModule {
};
OperationPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OperationPageRoutingModule);



/***/ }),

/***/ "y6o+":
/*!*****************************************************!*\
  !*** ./src/app/views/operation/operation.module.ts ***!
  \*****************************************************/
/*! exports provided: OperationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationPageModule", function() { return OperationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _operation_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./operation-routing.module */ "tONg");
/* harmony import */ var _operation_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./operation.page */ "H7HN");







let OperationPageModule = class OperationPageModule {
};
OperationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _operation_routing_module__WEBPACK_IMPORTED_MODULE_5__["OperationPageRoutingModule"]
        ],
        declarations: [_operation_page__WEBPACK_IMPORTED_MODULE_6__["OperationPage"]]
    })
], OperationPageModule);



/***/ })

}]);
//# sourceMappingURL=views-operation-operation-module.js.map