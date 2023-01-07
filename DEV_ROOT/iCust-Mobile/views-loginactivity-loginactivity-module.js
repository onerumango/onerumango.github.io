(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-loginactivity-loginactivity-module"],{

/***/ "DNEh":
/*!*************************************************************!*\
  !*** ./src/app/views/loginactivity/loginactivity.module.ts ***!
  \*************************************************************/
/*! exports provided: LoginactivityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginactivityPageModule", function() { return LoginactivityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _loginactivity_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loginactivity-routing.module */ "o59P");
/* harmony import */ var _loginactivity_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loginactivity.page */ "kqEp");







let LoginactivityPageModule = class LoginactivityPageModule {
};
LoginactivityPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _loginactivity_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginactivityPageRoutingModule"]
        ],
        declarations: [_loginactivity_page__WEBPACK_IMPORTED_MODULE_6__["LoginactivityPage"]]
    })
], LoginactivityPageModule);



/***/ }),

/***/ "G6yE":
/*!*************************************************************!*\
  !*** ./src/app/views/loginactivity/loginactivity.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".backIcon {\n  font-size: x-large;\n  margin-bottom: 4%;\n  color: #102245;\n  display: inline-block;\n  vertical-align: middle;\n  opacity: 100%;\n}\n\n.text {\n  margin-left: 2%;\n  margin-bottom: 4%;\n  display: inline-block;\n  vertical-align: middle;\n  color: #102245;\n  font-size: large;\n  opacity: 70%;\n}\n\n.new-background-color {\n  --background: #ECF3F2;\n}\n\n.labelcard {\n  font-family: \"Montserrat\" !important;\n  opacity: 75%;\n  font-size: 13pt;\n  margin-bottom: 7%;\n}\n\n.item {\n  max-width: 95% !important;\n  list-style: none;\n  display: list-item;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbmFjdGl2aXR5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBRUEsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFBSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNGLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDSSxxQkFBQTtBQUNKOztBQUVBO0VBQ0ksb0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDRyx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Msa0JBQUE7QUFDSiIsImZpbGUiOiJsb2dpbmFjdGl2aXR5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrSWNvbntcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgXHJcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICAgIGNvbG9yOiMxMDIyNDU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgb3BhY2l0eTogMTAwJTtcclxufVxyXG4udGV4dHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGNvbG9yOiAjMTAyMjQ1O1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgb3BhY2l0eTogNzAlO1xyXG59XHJcblxyXG4ubmV3LWJhY2tncm91bmQtY29sb3J7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNFQ0YzRjI7XHJcbiAgICBcclxufVxyXG4ubGFiZWxjYXJke1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogNzUlO1xyXG4gICAgZm9udC1zaXplOiAxM3B0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNyU7XHJcblxyXG59XHJcbi5pdGVte1xyXG4gICBtYXgtd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG4gICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTpsaXN0LWl0ZW07XHJcbiAgICBcclxufVxyXG4vLyBpb24tdGV4dHtcclxuLy8gICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICBcclxuLy8gfVxyXG4iXX0= */");

/***/ }),

/***/ "T/fQ":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/loginactivity/loginactivity.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n  <ion-header>\r\n    <ion-toolbar style=\"padding-top: 7%;\" class=\"new-background-color\">\r\n      <ion-icon class=\"backIcon\" name=\"chevron-back-outline\" (click)=\"goToLogin()\"></ion-icon>\r\n      <span class=\"text\">{{title}}</span>\r\n    </ion-toolbar>\r\n  </ion-header>\r\n<ion-content>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <ion-label>\r\n       <p class=\"labelcard\">Login Password Changed On</p> \r\n       {{title}} \r\n      </ion-label>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <ion-label>\r\n       <p class=\"labelcard\">Login Password Expiry Date</p> \r\n       {{title}} \r\n      </ion-label>\r\n    </ion-item>\r\n  </div>\r\n</ion-content>\r\n");

/***/ }),

/***/ "kqEp":
/*!***********************************************************!*\
  !*** ./src/app/views/loginactivity/loginactivity.page.ts ***!
  \***********************************************************/
/*! exports provided: LoginactivityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginactivityPage", function() { return LoginactivityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_loginactivity_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./loginactivity.page.html */ "T/fQ");
/* harmony import */ var _loginactivity_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loginactivity.page.scss */ "G6yE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let LoginactivityPage = class LoginactivityPage {
    constructor() {
        this.title = 'Login Activity';
    }
    ngOnInit() {
    }
};
LoginactivityPage.ctorParameters = () => [];
LoginactivityPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-loginactivity',
        template: _raw_loader_loginactivity_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_loginactivity_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginactivityPage);



/***/ }),

/***/ "o59P":
/*!*********************************************************************!*\
  !*** ./src/app/views/loginactivity/loginactivity-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: LoginactivityPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginactivityPageRoutingModule", function() { return LoginactivityPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _loginactivity_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loginactivity.page */ "kqEp");




const routes = [
    {
        path: '',
        component: _loginactivity_page__WEBPACK_IMPORTED_MODULE_3__["LoginactivityPage"]
    }
];
let LoginactivityPageRoutingModule = class LoginactivityPageRoutingModule {
};
LoginactivityPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoginactivityPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=views-loginactivity-loginactivity-module.js.map