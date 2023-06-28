"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_v2_no-permission_no-permission_module_ts"],{

/***/ 90571:
/*!************************************************************************!*\
  !*** ./src/app/pages/v2/no-permission/no-permission-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoPermissionPageRoutingModule": () => (/* binding */ NoPermissionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _no_permission_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./no-permission.page */ 68511);




const routes = [
    {
        path: '',
        component: _no_permission_page__WEBPACK_IMPORTED_MODULE_0__.NoPermissionPage
    }
];
let NoPermissionPageRoutingModule = class NoPermissionPageRoutingModule {
};
NoPermissionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NoPermissionPageRoutingModule);



/***/ }),

/***/ 82963:
/*!****************************************************************!*\
  !*** ./src/app/pages/v2/no-permission/no-permission.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoPermissionPageModule": () => (/* binding */ NoPermissionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _no_permission_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./no-permission-routing.module */ 90571);
/* harmony import */ var _no_permission_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./no-permission.page */ 68511);







let NoPermissionPageModule = class NoPermissionPageModule {
};
NoPermissionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _no_permission_routing_module__WEBPACK_IMPORTED_MODULE_0__.NoPermissionPageRoutingModule
        ],
        declarations: [_no_permission_page__WEBPACK_IMPORTED_MODULE_1__.NoPermissionPage]
    })
], NoPermissionPageModule);



/***/ }),

/***/ 68511:
/*!**************************************************************!*\
  !*** ./src/app/pages/v2/no-permission/no-permission.page.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoPermissionPage": () => (/* binding */ NoPermissionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _no_permission_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./no-permission.page.html?ngResource */ 74899);
/* harmony import */ var _no_permission_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./no-permission.page.scss?ngResource */ 42811);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let NoPermissionPage = class NoPermissionPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    goBack() {
        this.router.navigate(['login'], { replaceUrl: true });
    }
};
NoPermissionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
NoPermissionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-no-permission',
        template: _no_permission_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_no_permission_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NoPermissionPage);



/***/ }),

/***/ 42811:
/*!***************************************************************************!*\
  !*** ./src/app/pages/v2/no-permission/no-permission.page.scss?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = ".otp-text {\n  color: #a2a0a8;\n}\n\n.otp-box {\n  margin-top: 50%;\n}\n\n.no-perm-img {\n  width: 100px;\n  height: 100px;\n}\n\n.inputCardButton {\n  padding-top: 50%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.inputCardButton ion-button {\n  width: 100%;\n  height: 45px;\n  --background: var(--primary-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vLXBlcm1pc3Npb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQUNKIiwiZmlsZSI6Im5vLXBlcm1pc3Npb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm90cC10ZXh0IHtcclxuICBjb2xvcjogI2EyYTBhODtcclxufVxyXG5cclxuLm90cC1ib3gge1xyXG4gIG1hcmdpbi10b3A6IDUwJTtcclxufVxyXG5cclxuLm5vLXBlcm0taW1nIHtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLmlucHV0Q2FyZEJ1dHRvbiB7XHJcbiAgcGFkZGluZy10b3A6IDUwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG5cclxuICBpb24tYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcclxuICB9XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 74899:
/*!***************************************************************************!*\
  !*** ./src/app/pages/v2/no-permission/no-permission.page.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <div class=\"otp-box text-center\">\r\n    <img\r\n      src=\"assets/access-denied.png\"\r\n      alt=\"No permission\"\r\n      class=\"no-perm-img\"\r\n    />\r\n    <ion-text>\r\n      <h4 style=\"font-weight: bold\">No permission</h4>\r\n      <p class=\"otp-text\">Access Denied</p>\r\n    </ion-text>\r\n  </div>\r\n  <div class=\"inputCardButton\">\r\n    <ion-button expand=\"block\" shape=\"round\" (click)=\"goBack()\"\r\n      >Back</ion-button\r\n    >\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_v2_no-permission_no-permission_module_ts.js.map