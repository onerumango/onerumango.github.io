"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_loginactivity_loginactivity_module_ts"],{

/***/ 84658:
/*!*********************************************************************!*\
  !*** ./src/app/pages/loginactivity/loginactivity-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginactivityPageRoutingModule": () => (/* binding */ LoginactivityPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _loginactivity_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loginactivity.page */ 99774);




const routes = [
    {
        path: '',
        component: _loginactivity_page__WEBPACK_IMPORTED_MODULE_0__.LoginactivityPage
    }
];
let LoginactivityPageRoutingModule = class LoginactivityPageRoutingModule {
};
LoginactivityPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginactivityPageRoutingModule);



/***/ }),

/***/ 51278:
/*!*************************************************************!*\
  !*** ./src/app/pages/loginactivity/loginactivity.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginactivityPageModule": () => (/* binding */ LoginactivityPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _loginactivity_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loginactivity-routing.module */ 84658);
/* harmony import */ var _loginactivity_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginactivity.page */ 99774);







let LoginactivityPageModule = class LoginactivityPageModule {
};
LoginactivityPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _loginactivity_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginactivityPageRoutingModule
        ],
        declarations: [_loginactivity_page__WEBPACK_IMPORTED_MODULE_1__.LoginactivityPage]
    })
], LoginactivityPageModule);



/***/ }),

/***/ 99774:
/*!***********************************************************!*\
  !*** ./src/app/pages/loginactivity/loginactivity.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginactivityPage": () => (/* binding */ LoginactivityPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _loginactivity_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loginactivity.page.html?ngResource */ 26836);
/* harmony import */ var _loginactivity_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginactivity.page.scss?ngResource */ 1189);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let LoginactivityPage = class LoginactivityPage {
    constructor() {
        this.title = 'Login Activity';
    }
    ngOnInit() {
    }
};
LoginactivityPage.ctorParameters = () => [];
LoginactivityPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-loginactivity',
        template: _loginactivity_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_loginactivity_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginactivityPage);



/***/ }),

/***/ 1189:
/*!************************************************************************!*\
  !*** ./src/app/pages/loginactivity/loginactivity.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".backIcon {\n  font-size: x-large;\n  margin-bottom: 4%;\n  color: #102245;\n  display: inline-block;\n  vertical-align: middle;\n  opacity: 100%;\n}\n\n.text {\n  margin-left: 2%;\n  margin-bottom: 4%;\n  display: inline-block;\n  vertical-align: middle;\n  color: #102245;\n  font-size: large;\n  opacity: 70%;\n}\n\n.new-background-color {\n  --background: #ECF3F2;\n}\n\n.labelcard {\n  font-family: \"Montserrat\" !important;\n  opacity: 75%;\n  font-size: 13pt;\n  margin-bottom: 7%;\n}\n\n.item {\n  max-width: 95% !important;\n  list-style: none;\n  display: list-item;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luYWN0aXZpdHkucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0SHViJTIwUmVwb3NpdG9yeSUyMG9sZFxcaUN1c3RNb2JpbGUtdjJcXHNyY1xcYXBwXFxwYWdlc1xcbG9naW5hY3Rpdml0eVxcbG9naW5hY3Rpdml0eS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDQUo7O0FERUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDRixxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0kscUJBQUE7QUNDSjs7QURFQTtFQUNJLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0cseUJBQUE7RUFDQSxnQkFBQTtFQUNDLGtCQUFBO0FDQ0oiLCJmaWxlIjoibG9naW5hY3Rpdml0eS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja0ljb257XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgIFxyXG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgICBjb2xvcjojMTAyMjQ1O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG9wYWNpdHk6IDEwMCU7XHJcbn1cclxuLnRleHR7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBjb2xvcjogIzEwMjI0NTtcclxuICBmb250LXNpemU6IGxhcmdlO1xyXG4gIG9wYWNpdHk6IDcwJTtcclxufVxyXG5cclxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRUNGM0YyO1xyXG4gICAgXHJcbn1cclxuLmxhYmVsY2FyZHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDc1JTtcclxuICAgIGZvbnQtc2l6ZTogMTNwdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDclO1xyXG5cclxufVxyXG4uaXRlbXtcclxuICAgbWF4LXdpZHRoOiA5NSUgIWltcG9ydGFudDtcclxuICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6bGlzdC1pdGVtO1xyXG4gICAgXHJcbn1cclxuLy8gaW9uLXRleHR7XHJcbi8vICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgXHJcbi8vIH1cclxuIiwiLmJhY2tJY29uIHtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICBtYXJnaW4tYm90dG9tOiA0JTtcbiAgY29sb3I6ICMxMDIyNDU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgb3BhY2l0eTogMTAwJTtcbn1cblxuLnRleHQge1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIG1hcmdpbi1ib3R0b206IDQlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiAjMTAyMjQ1O1xuICBmb250LXNpemU6IGxhcmdlO1xuICBvcGFjaXR5OiA3MCU7XG59XG5cbi5uZXctYmFja2dyb3VuZC1jb2xvciB7XG4gIC0tYmFja2dyb3VuZDogI0VDRjNGMjtcbn1cblxuLmxhYmVsY2FyZCB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiA3NSU7XG4gIGZvbnQtc2l6ZTogMTNwdDtcbiAgbWFyZ2luLWJvdHRvbTogNyU7XG59XG5cbi5pdGVtIHtcbiAgbWF4LXdpZHRoOiA5NSUgIWltcG9ydGFudDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xufSJdfQ== */";

/***/ }),

/***/ 26836:
/*!************************************************************************!*\
  !*** ./src/app/pages/loginactivity/loginactivity.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "\r\n  <ion-header>\r\n    <ion-toolbar style=\"padding-top: 7%;\" class=\"new-background-color\">\r\n      <ion-icon class=\"backIcon\" name=\"chevron-back-outline\" (click)=\"goToLogin()\"></ion-icon>\r\n      <span class=\"text\">{{title}}</span>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n<ion-content>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <ion-label>\r\n       <p class=\"labelcard\">Login Password Changed On</p> \r\n       {{title}} \r\n      </ion-label>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <ion-label>\r\n       <p class=\"labelcard\">Login Password Expiry Date</p> \r\n       {{title}} \r\n      </ion-label>\r\n    </ion-item>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_loginactivity_loginactivity_module_ts.js.map