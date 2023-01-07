"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_forgotpassword_forgotpassword_module_ts"],{

/***/ 5326:
/*!***********************************************************************!*\
  !*** ./src/app/pages/forgotpassword/forgotpassword-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpasswordPageRoutingModule": () => (/* binding */ ForgotpasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotpassword.page */ 54314);




const routes = [
    {
        path: '',
        component: _forgotpassword_page__WEBPACK_IMPORTED_MODULE_0__.ForgotpasswordPage
    }
];
let ForgotpasswordPageRoutingModule = class ForgotpasswordPageRoutingModule {
};
ForgotpasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgotpasswordPageRoutingModule);



/***/ }),

/***/ 95862:
/*!***************************************************************!*\
  !*** ./src/app/pages/forgotpassword/forgotpassword.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpasswordPageModule": () => (/* binding */ ForgotpasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotpassword-routing.module */ 5326);
/* harmony import */ var _forgotpassword_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotpassword.page */ 54314);







let ForgotpasswordPageModule = class ForgotpasswordPageModule {
};
ForgotpasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _forgotpassword_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotpasswordPageRoutingModule
        ],
        declarations: [_forgotpassword_page__WEBPACK_IMPORTED_MODULE_1__.ForgotpasswordPage]
    })
], ForgotpasswordPageModule);



/***/ }),

/***/ 54314:
/*!*************************************************************!*\
  !*** ./src/app/pages/forgotpassword/forgotpassword.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotpasswordPage": () => (/* binding */ ForgotpasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _forgotpassword_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotpassword.page.html?ngResource */ 37461);
/* harmony import */ var _forgotpassword_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotpassword.page.scss?ngResource */ 35223);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let ForgotpasswordPage = class ForgotpasswordPage {
    constructor(router) {
        this.router = router;
    }
    registerPage() {
        this.router.navigate(['register']);
    }
    ngOnInit() {
    }
};
ForgotpasswordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ForgotpasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-forgotpassword',
        template: _forgotpassword_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forgotpassword_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgotpasswordPage);



/***/ }),

/***/ 35223:
/*!**************************************************************************!*\
  !*** ./src/app/pages/forgotpassword/forgotpassword.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".form-box {\n  width: 300px;\n  margin: auto;\n  height: 240px;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n\n.form-box .logo {\n  width: 60px;\n  margin: auto;\n}\n\n.title {\n  vertical-align: top;\n  color: #231F20;\n  font-size: 16px;\n  font-weight: 600;\n  position: relative;\n  text-align: center;\n  margin-top: 15px;\n  margin-bottom: 20px;\n}\n\n.footer-link {\n  font-size: 14px;\n  font-weight: 400;\n  color: #231F20;\n  text-align: center;\n  position: fixed;\n  bottom: 20px;\n  left: 0px;\n  right: 0px;\n}\n\n.footer-link a {\n  color: #be2623;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.footer-link a:hover {\n  color: #f79e1b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdHBhc3N3b3JkLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUVFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBREY7O0FBR0E7RUFFRSxXQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBRUEsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFGQTs7QUFLQTtFQUVHLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFISDs7QUFNQTtFQUVFLGNBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFKRjs7QUFNQTtFQUVHLGNBQUE7QUFKSCIsImZpbGUiOiJmb3Jnb3RwYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmZvcm0tYm94XHJcbntcclxuICB3aWR0aDozMDBweDtcclxuICBtYXJnaW46YXV0bztcclxuICBoZWlnaHQ6MjQwcHg7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgdG9wOjBweDtcclxuICBib3R0b206MHB4O1xyXG4gIGxlZnQ6MHB4O1xyXG4gIHJpZ2h0OjBweDtcclxuICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG4uZm9ybS1ib3ggLmxvZ29cclxue1xyXG4gIHdpZHRoOjYwcHg7XHJcbiAgbWFyZ2luOmF1dG87XHJcbn1cclxuXHJcbi50aXRsZVxyXG57XHJcbnZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbmNvbG9yOiMyMzFGMjA7XHJcbmZvbnQtc2l6ZToxNnB4O1xyXG5mb250LXdlaWdodDo2MDA7XHJcbnBvc2l0aW9uOnJlbGF0aXZlO1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxubWFyZ2luLXRvcDoxNXB4O1xyXG5tYXJnaW4tYm90dG9tOjIwcHg7XHJcbn1cclxuXHJcbi5mb290ZXItbGlua1xyXG57XHJcbiAgIGZvbnQtc2l6ZToxNHB4O1xyXG4gICBmb250LXdlaWdodDo0MDA7XHJcbiAgIGNvbG9yOiMyMzFGMjA7XHJcbiAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICBwb3NpdGlvbjpmaXhlZDtcclxuICAgYm90dG9tOjIwcHg7XHJcbiAgIGxlZnQ6MHB4O1xyXG4gICByaWdodDowcHg7XHJcbn1cclxuXHJcbi5mb290ZXItbGluayBhXHJcbntcclxuICBjb2xvcjojYmUyNjIzO1xyXG4gIGN1cnNvcjpwb2ludGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG59XHJcbi5mb290ZXItbGluayBhOmhvdmVyXHJcbntcclxuICAgY29sb3I6I2Y3OWUxYjtcclxufSJdfQ== */";

/***/ }),

/***/ 37461:
/*!**************************************************************************!*\
  !*** ./src/app/pages/forgotpassword/forgotpassword.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"mainbackground\">\r\n\r\n<div class=\"form-box\">\r\n<div class=\"logo\"><img src=\"assets/images/logoicon.svg\" class=\"w-100\"></div>\r\n<div class=\"title-box\">\r\n<div class=\"title\">Forgot password?</div>\r\n</div>\r\n<form>\r\n<div class=\"form-group\">\r\n<input type=\"text\" placeholder=\"Username\" class=\"form-control\" />\r\n</div>\r\n<div class=\"text-center\">\r\n<button type=\"submit\" class=\"theme btn btn-primary\">Submit</button>\r\n</div>\r\n</form>\r\n</div>\r\n\r\n<div class=\"footer-link\"> Back to <a (click)=\"registerPage()\">Sign up</a></div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_forgotpassword_forgotpassword_module_ts.js.map