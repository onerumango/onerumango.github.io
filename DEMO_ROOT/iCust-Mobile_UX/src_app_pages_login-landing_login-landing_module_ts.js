"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login-landing_login-landing_module_ts"],{

/***/ 2159:
/*!*********************************************************************!*\
  !*** ./src/app/pages/login-landing/login-landing-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginLandingPageRoutingModule": () => (/* binding */ LoginLandingPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _login_landing_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-landing.page */ 21646);




const routes = [
    {
        path: '',
        component: _login_landing_page__WEBPACK_IMPORTED_MODULE_0__.LoginLandingPage
    }
];
let LoginLandingPageRoutingModule = class LoginLandingPageRoutingModule {
};
LoginLandingPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginLandingPageRoutingModule);



/***/ }),

/***/ 60676:
/*!*************************************************************!*\
  !*** ./src/app/pages/login-landing/login-landing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginLandingPageModule": () => (/* binding */ LoginLandingPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _login_landing_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-landing-routing.module */ 2159);
/* harmony import */ var _login_landing_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-landing.page */ 21646);







let LoginLandingPageModule = class LoginLandingPageModule {
};
LoginLandingPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_landing_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginLandingPageRoutingModule
        ],
        declarations: [_login_landing_page__WEBPACK_IMPORTED_MODULE_1__.LoginLandingPage]
    })
], LoginLandingPageModule);



/***/ }),

/***/ 21646:
/*!***********************************************************!*\
  !*** ./src/app/pages/login-landing/login-landing.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginLandingPage": () => (/* binding */ LoginLandingPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_landing_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-landing.page.html?ngResource */ 17956);
/* harmony import */ var _login_landing_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-landing.page.scss?ngResource */ 34404);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ 52468);







let LoginLandingPage = class LoginLandingPage {
    constructor(router, platform, dataService) {
        this.router = router;
        this.platform = platform;
        this.dataService = dataService;
    }
    ngOnInit() {
        this.currentUser = this.dataService.getCurrentUser();
    }
    goToLogin() {
        this.router.navigate(['login']);
    }
    goToMpin() {
        this.router.navigate(['mpin']);
    }
    goToFaceId() {
        this.router.navigate(['/faceidrecognition']);
    }
    goToFingerprint() {
        this.router.navigate(['/fingerprint']);
    }
};
LoginLandingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.Platform },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
LoginLandingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login-landing',
        template: _login_landing_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_landing_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginLandingPage);



/***/ }),

/***/ 34404:
/*!************************************************************************!*\
  !*** ./src/app/pages/login-landing/login-landing.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".logo {\n  width: 200px;\n  margin-left: -16px;\n}\n\n.sub-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #000000;\n  opacity: 70%;\n}\n\n.landing_div {\n  background: linear-gradient(180deg, #FFFFFF, #F8FAFE);\n  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.1607843137));\n  border-radius: 10px;\n  padding: 10px;\n  padding-left: 25px;\n  display: flex;\n  align-items: center;\n  height: 70px;\n  position: relative;\n  margin-bottom: 20px;\n}\n\n.landing_div .color_box {\n  height: 50px;\n  width: 50px;\n  min-width: 50px;\n  border-radius: 10px;\n  position: relative;\n}\n\n.landing_div .color_box img {\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.landing_div .content_div {\n  padding-left: 16px;\n}\n\n.landing_div .content_div .name {\n  color: #000000;\n  font-size: 17px;\n  font-weight: 500;\n  margin-bottom: 3px;\n}\n\n.landing_div .content_div .date {\n  font-size: 13px;\n  color: #77869E;\n  font-family: \"regular\";\n}\n\n.landing_div ion-icon {\n  position: absolute;\n  right: 25px;\n  color: #000000;\n  font-size: 20px;\n}\n\nsection {\n  position: relative;\n  padding: 10em;\n  background: url('3@3x.png');\n  background-repeat: round;\n  color: #fff;\n  text-align: center;\n  height: 40%;\n}\n\n.item-box-white {\n  width: 100%;\n  height: 100%;\n  background: #ffffff;\n  border-radius: 60px 0 0 0;\n  height: 60%;\n  position: absolute;\n}\n\n.bottom-btn-box {\n  position: absolute;\n  bottom: 50px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWxhbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUdBO0VBQ0kscURBQUE7RUFDQSw0REFBQTtFQUVBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFGSjs7QUFJSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFGUjs7QUFLUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FBSFo7O0FBT0k7RUFDSSxrQkFBQTtBQUxSOztBQU9RO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBTFo7O0FBU1E7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FBUFo7O0FBV0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQVRSOztBQWFBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBRUEsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFYSjs7QUFjQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQVhKOztBQWNBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQVhKIiwiZmlsZSI6ImxvZ2luLWxhbmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ28ge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xNnB4O1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIG9wYWNpdHk6IDcwJTtcclxufVxyXG5cclxuXHJcbi5sYW5kaW5nX2RpdiB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjRkZGRkZGLCAjRjhGQUZFKTtcclxuICAgIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDNweCA2cHggIzAwMDAwMDI5KTtcclxuICAgIC8vIGJveC1zaGFkb3c6IDVweCAxMHB4ICM4ODg4ODg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHBhZGRpbmctbGVmdDogMjVweDtcclxuICAgIC8vIG9wYWNpdHk6IDUwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAuY29sb3JfYm94IHtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgbWluLXdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQ6ICNERkU3RjU7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50X2RpdiB7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG5cclxuICAgICAgICAubmFtZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiMwMDAwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xyXG4gICAgICAgICAgICAvLyBvcGFjaXR5OiA4MyU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZGF0ZSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgY29sb3I6ICM3Nzg2OUU7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAncmVndWxhcic7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgfVxyXG59XHJcblxyXG5zZWN0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDEwZW07XHJcbiAgICAvLyBiYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzLzNAM3gucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGhlaWdodDogNDAlO1xyXG59XHJcblxyXG4uaXRlbS1ib3gtd2hpdGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNjBweCAwIDAgMDtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uYm90dG9tLWJ0bi1ib3gge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA1MHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufSJdfQ== */";

/***/ }),

/***/ 17956:
/*!************************************************************************!*\
  !*** ./src/app/pages/login-landing/login-landing.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <section>\r\n    <div class=\"column\">\r\n      <div class=\"logo\"><img src=\"assets/images/Demobank.svg\" class=\"w-100\"></div>\r\n    </div>\r\n  </section>\r\n  <div class=\"item-box-white\">\r\n    <div class=\"sub-title\">\r\n      <div class=\"container\">Choose the option</div>\r\n    </div>\r\n    <div class=\"container my-5\">\r\n      <div class=\"landing_div\" (click)=\"goToLogin()\">\r\n        <div class=\"color_box\">\r\n          <img src=\"assets/images/user-icon.png\">\r\n        </div>\r\n        <div class=\"content_div\">\r\n          <p class=\"name\">Sign in</p>\r\n        </div>\r\n        <ion-icon name=\"chevron-forward-sharp\"></ion-icon>\r\n      </div>\r\n      <div class=\"landing_div\" (click)=\"goToMpin()\" *ngIf=\"platform.is('cordova') && currentUser?.mpinActive\">\r\n        <div class=\"color_box\">\r\n          <img src=\"assets/images/Icon-feather.png\">\r\n        </div>\r\n        <div class=\"content_div\">\r\n          <p class=\"name\">mPIN</p>\r\n        </div>\r\n        <ion-icon name=\"chevron-forward-sharp\"></ion-icon>\r\n      </div>\r\n\r\n      <div class=\"landing_div\" (click)=\"goToFaceId()\" *ngIf=\"platform.is('cordova') && currentUser?.faceLoginEnable\">\r\n        <div class=\"color_box\">\r\n          <img src=\"assets/images/face-id.png\">\r\n        </div>\r\n        <div class=\"content_div\">\r\n          <p class=\"name\">Face ID</p>\r\n        </div>\r\n        <ion-icon name=\"chevron-forward-sharp\"></ion-icon>\r\n      </div>\r\n\r\n      <div class=\"landing_div\" (click)=\"goToFingerprint()\" *ngIf=\"platform.is('cordova') && currentUser?.fingerprintLoginEnable\">\r\n        <div class=\"color_box\">\r\n          <img src=\"assets/images/fingerprint.png\">\r\n        </div>\r\n        <div class=\"content_div\">\r\n          <p class=\"name\">Fingerprint</p>\r\n        </div>\r\n        <ion-icon name=\"chevron-forward-sharp\"></ion-icon>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login-landing_login-landing_module_ts.js.map