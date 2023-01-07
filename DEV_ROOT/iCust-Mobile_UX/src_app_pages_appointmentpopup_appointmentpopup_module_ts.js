"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_appointmentpopup_appointmentpopup_module_ts"],{

/***/ 58095:
/*!***************************************************************************!*\
  !*** ./src/app/pages/appointmentpopup/appointmentpopup-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentpopupPageRoutingModule": () => (/* binding */ AppointmentpopupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _appointmentpopup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appointmentpopup.page */ 14808);




const routes = [
    {
        path: '',
        component: _appointmentpopup_page__WEBPACK_IMPORTED_MODULE_0__.AppointmentpopupPage
    },
];
let AppointmentpopupPageRoutingModule = class AppointmentpopupPageRoutingModule {
};
AppointmentpopupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], AppointmentpopupPageRoutingModule);



/***/ }),

/***/ 48198:
/*!*******************************************************************!*\
  !*** ./src/app/pages/appointmentpopup/appointmentpopup.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppointmentpopupPageModule": () => (/* binding */ AppointmentpopupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _appointmentpopup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./appointmentpopup-routing.module */ 58095);
/* harmony import */ var _appointmentpopup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./appointmentpopup.page */ 14808);
/* harmony import */ var _appointment_appointment_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../appointment/appointment.module */ 43817);








let AppointmentpopupPageModule = class AppointmentpopupPageModule {
};
AppointmentpopupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _appointment_appointment_module__WEBPACK_IMPORTED_MODULE_2__.AppointmentPageModule,
            _appointmentpopup_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppointmentpopupPageRoutingModule
        ],
        declarations: [_appointmentpopup_page__WEBPACK_IMPORTED_MODULE_1__.AppointmentpopupPage]
    })
], AppointmentpopupPageModule);



/***/ })

}]);
//# sourceMappingURL=src_app_pages_appointmentpopup_appointmentpopup_module_ts.js.map