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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _loginactivity_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loginactivity.page.html?ngResource */ 26836);
/* harmony import */ var _loginactivity_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loginactivity.page.scss?ngResource */ 1189);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);







let LoginactivityPage = class LoginactivityPage {
    constructor(router, dataService) {
        this.router = router;
        this.dataService = dataService;
        this.title = 'Login Activity';
    }
    ngOnInit() {
        this.currentUser = this.dataService.getCurrentUser();
        console.log("CurrentUSer?", this.currentUser);
    }
    goToLogin() {
        this.router.navigate(['/securitycenter']);
    }
    formatDateTo(dateParam) {
        const date = moment__WEBPACK_IMPORTED_MODULE_3__(dateParam);
        let dateTo = date.format('DD/MM/YYYY');
        return dateTo;
    }
    formatDateTimeTo(dateParam) {
        const date = moment__WEBPACK_IMPORTED_MODULE_3__(dateParam);
        let time = date.format('DD/MM/YYYY | HH:mmA');
        return time;
    }
};
LoginactivityPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
LoginactivityPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
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

module.exports = ".backIcon {\n  font-size: x-large;\n  margin-bottom: 4%;\n  color: #102245;\n  display: inline-block;\n  vertical-align: middle;\n  opacity: 100%;\n}\n\n.text {\n  margin-left: 2%;\n  margin-bottom: 4%;\n  display: inline-block;\n  vertical-align: middle;\n  color: #102245;\n  font-size: large;\n  opacity: 70%;\n}\n\n.new-background-color {\n  --background: #ECF3F2;\n  padding-top: 4%;\n  padding-left: 3%;\n}\n\nion-list ion-item.item {\n  margin-bottom: 15px;\n}\n\nion-list ion-item.item:last-child {\n  margin-bottom: 0;\n}\n\n.labelcard {\n  font-family: \"Montserrat\" !important;\n  opacity: 75%;\n  font-size: 13pt;\n  margin-bottom: 10px;\n}\n\n.head-title-list {\n  color: #456EFE;\n  font-size: 18px;\n  font-weight: 900;\n  font-family: inherit;\n  margin-bottom: 7px;\n}\n\n.date {\n  font-weight: 900;\n  color: #102245;\n  font-size: 18px;\n  font-family: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luYWN0aXZpdHkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFFQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUdBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHQTtFQUNJLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBQUo7O0FBR0E7RUFDSSxtQkFBQTtBQUFKOztBQUNJO0VBQ0ksZ0JBQUE7QUFDUjs7QUFHQTtFQUNJLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUFKIiwiZmlsZSI6ImxvZ2luYWN0aXZpdHkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tJY29uIHtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuXHJcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICAgIGNvbG9yOiAjMTAyMjQ1O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG9wYWNpdHk6IDEwMCU7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGNvbG9yOiAjMTAyMjQ1O1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIG9wYWNpdHk6IDcwJTtcclxufVxyXG5cclxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9yIHtcclxuICAgIC0tYmFja2dyb3VuZDogI0VDRjNGMjtcclxuICAgIHBhZGRpbmctdG9wOiA0JTtcclxuICAgIHBhZGRpbmctbGVmdDogMyU7XHJcbn1cclxuXHJcbmlvbi1saXN0IGlvbi1pdGVtLml0ZW0ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIH1cclxufVxyXG5cclxuLmxhYmVsY2FyZCB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiA3NSU7XHJcbiAgICBmb250LXNpemU6IDEzcHQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4uaGVhZC10aXRsZS1saXN0IHtcclxuICAgIGNvbG9yOiAjNDU2RUZFO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgY29sb3I6ICMxMDIyNDU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcclxufSJdfQ== */";

/***/ }),

/***/ 26836:
/*!************************************************************************!*\
  !*** ./src/app/pages/loginactivity/loginactivity.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"new-background-color\">\r\n    <ion-icon class=\"backIcon\" name=\"chevron-back-outline\" (click)=\"goToLogin()\"></ion-icon>\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <ion-list>\r\n    <ion-list-header class=\"head-title-list\">Login Password</ion-list-header>\r\n    <ion-item class=\"item\">\r\n      <ion-label>\r\n        <p class=\"labelcard\">Login Password Changed On</p>\r\n        <span class=\"date\">\r\n          <strong>\r\n            {{currentUser?.pwdChangeDate !== null ? formatDateTo(currentUser?.pwdChangeDate) : 'date not available'}}\r\n          </strong>\r\n        </span>\r\n      </ion-label>\r\n    </ion-item>\r\n \r\n  \r\n    <ion-item class=\"item\">\r\n      <ion-label>\r\n        <p class=\"labelcard\">Login Password Expiry Date</p>\r\n        <span class=\"date\">\r\n          <strong>\r\n            {{currentUser?.pwdExpiryDate !== null ? formatDateTo(currentUser?.pwdExpiryDate) : 'N/A' }}\r\n          </strong>\r\n        </span>\r\n      </ion-label>\r\n    </ion-item>\r\n\r\n  </ion-list>\r\n\r\n   \r\n  <ion-list>\r\n    <ion-list-header class=\"head-title-list\">mPIN</ion-list-header>\r\n    <ion-item class=\"item\">\r\n      <ion-label>\r\n        <p class=\"labelcard\">mPIN setup date</p>\r\n        <span class=\"date\">\r\n          <strong>\r\n            {{currentUser?.mPinSetupDate !== null ? formatDateTimeTo(currentUser?.mPinSetupDate) : 'N/A' }}\r\n          </strong>\r\n        </span>\r\n      </ion-label>\r\n    </ion-item>\r\n  </ion-list>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_loginactivity_loginactivity_module_ts.js.map