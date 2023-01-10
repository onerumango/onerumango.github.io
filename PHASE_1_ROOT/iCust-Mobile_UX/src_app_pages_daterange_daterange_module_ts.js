"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_daterange_daterange_module_ts"],{

/***/ 69191:
/*!*************************************************************!*\
  !*** ./src/app/pages/daterange/daterange-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DaterangePageRoutingModule": () => (/* binding */ DaterangePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _daterange_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./daterange.page */ 36675);




const routes = [
    {
        path: '',
        component: _daterange_page__WEBPACK_IMPORTED_MODULE_0__.DaterangePage
    }
];
let DaterangePageRoutingModule = class DaterangePageRoutingModule {
};
DaterangePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DaterangePageRoutingModule);



/***/ }),

/***/ 87349:
/*!*****************************************************!*\
  !*** ./src/app/pages/daterange/daterange.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DaterangePageModule": () => (/* binding */ DaterangePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _daterange_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./daterange-routing.module */ 69191);
/* harmony import */ var _daterange_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./daterange.page */ 36675);







let DaterangePageModule = class DaterangePageModule {
};
DaterangePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _daterange_routing_module__WEBPACK_IMPORTED_MODULE_0__.DaterangePageRoutingModule,
        ],
        declarations: [_daterange_page__WEBPACK_IMPORTED_MODULE_1__.DaterangePage]
    })
], DaterangePageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_daterange_daterange_module_ts.js.map