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

module.exports = ".form-box {\n  width: 300px;\n  margin: auto;\n  height: 240px;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n\n.form-box .logo {\n  width: 60px;\n  margin: auto;\n}\n\n.title {\n  vertical-align: top;\n  color: #231F20;\n  font-size: 16px;\n  font-weight: 600;\n  position: relative;\n  text-align: center;\n  margin-top: 15px;\n  margin-bottom: 20px;\n}\n\n.footer-link {\n  font-size: 14px;\n  font-weight: 400;\n  color: #231F20;\n  text-align: center;\n  position: fixed;\n  bottom: 20px;\n  left: 0px;\n  right: 0px;\n}\n\n.footer-link a {\n  color: #be2623;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.footer-link a:hover {\n  color: #f79e1b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdHBhc3N3b3JkLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdEh1YiUyMFJlcG9zaXRvcnklMjBvbGRcXGlDdXN0TW9iaWxlLXYyXFxzcmNcXGFwcFxccGFnZXNcXGZvcmdvdHBhc3N3b3JkXFxmb3Jnb3RwYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFFRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0RGOztBREdBO0VBRUUsV0FBQTtFQUNBLFlBQUE7QUNERjs7QURJQTtFQUVBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDRkE7O0FES0E7RUFFRyxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDSEg7O0FETUE7RUFFRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FDSkY7O0FETUE7RUFFRyxjQUFBO0FDSkgiLCJmaWxlIjoiZm9yZ290cGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWJveFxyXG57XHJcbiAgd2lkdGg6MzAwcHg7XHJcbiAgbWFyZ2luOmF1dG87XHJcbiAgaGVpZ2h0OjI0MHB4O1xyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIHRvcDowcHg7XHJcbiAgYm90dG9tOjBweDtcclxuICBsZWZ0OjBweDtcclxuICByaWdodDowcHg7XHJcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuLmZvcm0tYm94IC5sb2dvXHJcbntcclxuICB3aWR0aDo2MHB4O1xyXG4gIG1hcmdpbjphdXRvO1xyXG59XHJcblxyXG4udGl0bGVcclxue1xyXG52ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG5jb2xvcjojMjMxRjIwO1xyXG5mb250LXNpemU6MTZweDtcclxuZm9udC13ZWlnaHQ6NjAwO1xyXG5wb3NpdGlvbjpyZWxhdGl2ZTtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbm1hcmdpbi10b3A6MTVweDtcclxubWFyZ2luLWJvdHRvbToyMHB4O1xyXG59XHJcblxyXG4uZm9vdGVyLWxpbmtcclxue1xyXG4gICBmb250LXNpemU6MTRweDtcclxuICAgZm9udC13ZWlnaHQ6NDAwO1xyXG4gICBjb2xvcjojMjMxRjIwO1xyXG4gICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgcG9zaXRpb246Zml4ZWQ7XHJcbiAgIGJvdHRvbToyMHB4O1xyXG4gICBsZWZ0OjBweDtcclxuICAgcmlnaHQ6MHB4O1xyXG59XHJcblxyXG4uZm9vdGVyLWxpbmsgYVxyXG57XHJcbiAgY29sb3I6I2JlMjYyMztcclxuICBjdXJzb3I6cG9pbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246bm9uZTtcclxufVxyXG4uZm9vdGVyLWxpbmsgYTpob3ZlclxyXG57XHJcbiAgIGNvbG9yOiNmNzllMWI7XHJcbn0iLCIuZm9ybS1ib3gge1xuICB3aWR0aDogMzAwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgaGVpZ2h0OiAyNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZm9ybS1ib3ggLmxvZ28ge1xuICB3aWR0aDogNjBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4udGl0bGUge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBjb2xvcjogIzIzMUYyMDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZvb3Rlci1saW5rIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzIzMUYyMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xufVxuXG4uZm9vdGVyLWxpbmsgYSB7XG4gIGNvbG9yOiAjYmUyNjIzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmZvb3Rlci1saW5rIGE6aG92ZXIge1xuICBjb2xvcjogI2Y3OWUxYjtcbn0iXX0= */";

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