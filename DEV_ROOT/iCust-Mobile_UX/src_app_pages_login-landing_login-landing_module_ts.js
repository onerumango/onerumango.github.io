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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_landing_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-landing.page.html?ngResource */ 17956);
/* harmony import */ var _login_landing_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-landing.page.scss?ngResource */ 34404);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let LoginLandingPage = class LoginLandingPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    goToLogin() {
        this.router.navigate(['login']);
    }
    goToMpin() {
        this.router.navigate(['mpin']);
    }
    goToFaceId() {
        this.router.navigate(['faceidrecognition']);
    }
    goToFingerprint() {
        this.router.navigate(['fingerprint']);
    }
};
LoginLandingPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
LoginLandingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
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

module.exports = ".logo {\n  width: 120px;\n  margin: auto;\n}\n\n.sub-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #000000;\n  opacity: 70%;\n}\n\n.landing_div {\n  background: linear-gradient(180deg, #FFFFFF, #F8FAFE);\n  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.1607843137));\n  border-radius: 10px;\n  padding: 10px;\n  padding-left: 25px;\n  display: flex;\n  align-items: center;\n  height: 70px;\n  position: relative;\n  margin-bottom: 20px;\n}\n\n.landing_div .color_box {\n  height: 50px;\n  width: 50px;\n  min-width: 50px;\n  border-radius: 10px;\n  position: relative;\n}\n\n.landing_div .color_box img {\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.landing_div .content_div {\n  padding-left: 16px;\n}\n\n.landing_div .content_div .name {\n  color: #000000;\n  font-size: 17px;\n  font-weight: 500;\n  margin-bottom: 3px;\n}\n\n.landing_div .content_div .date {\n  font-size: 13px;\n  color: #77869E;\n  font-family: \"regular\";\n}\n\n.landing_div ion-icon {\n  position: absolute;\n  right: 25px;\n  color: #000000;\n  font-size: 20px;\n}\n\nsection {\n  position: relative;\n  padding: 10em;\n  background: url('3@3x.png');\n  background-repeat: round;\n  color: #fff;\n  text-align: center;\n  height: 40%;\n}\n\n.item-box-white {\n  width: 100%;\n  height: 100%;\n  background: #ffffff;\n  border-radius: 60px 0 0 0;\n  height: 60%;\n  position: absolute;\n}\n\n.bottom-btn-box {\n  position: absolute;\n  bottom: 50px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWxhbmRpbmcucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0SHViJTIwUmVwb3NpdG9yeSUyMG9sZFxcaUN1c3RNb2JpbGUtdjJcXHNyY1xcYXBwXFxwYWdlc1xcbG9naW4tbGFuZGluZ1xcbG9naW4tbGFuZGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUNDSjs7QURHQTtFQUNJLHFEQUFBO0VBQ0EsNERBQUE7RUFFQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDRko7O0FESUk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDRlI7O0FES1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ0haOztBRE9JO0VBQ0ksa0JBQUE7QUNMUjs7QURPUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0xaOztBRFNRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQ1BaOztBRFdJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNUUjs7QURhQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUVBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDWEo7O0FEY0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNYSjs7QURjQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNYSiIsImZpbGUiOiJsb2dpbi1sYW5kaW5nLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dvIHtcclxuICAgIHdpZHRoOiAxMjBweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBvcGFjaXR5OiA3MCU7XHJcbn1cclxuXHJcblxyXG4ubGFuZGluZ19kaXYge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0ZGRkZGRiwgI0Y4RkFGRSk7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAzcHggNnB4ICMwMDAwMDAyOSk7XHJcbiAgICAvLyBib3gtc2hhZG93OiA1cHggMTBweCAjODg4ODg4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICAvLyBvcGFjaXR5OiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgLmNvbG9yX2JveCB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjREZFN0Y1O1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudF9kaXYge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuXHJcbiAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICBjb2xvcjojMDAwMDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICAgICAgLy8gb3BhY2l0eTogODMlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRhdGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzc4NjlFO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3JlZ3VsYXInO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAxMGVtO1xyXG4gICAgLy8gYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy8zQDN4LnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJvdW5kO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxufVxyXG5cclxuLml0ZW0tYm94LXdoaXRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDYwcHggMCAwIDA7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmJvdHRvbS1idG4tYm94IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogNTBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iLCIubG9nbyB7XG4gIHdpZHRoOiAxMjBweDtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4uc3ViLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xuICBjb2xvcjogIzAwMDAwMDtcbiAgb3BhY2l0eTogNzAlO1xufVxuXG4ubGFuZGluZ19kaXYge1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCAjRkZGRkZGLCAjRjhGQUZFKTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggM3B4IDZweCByZ2JhKDAsIDAsIDAsIDAuMTYwNzg0MzEzNykpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogNzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmxhbmRpbmdfZGl2IC5jb2xvcl9ib3gge1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MHB4O1xuICBtaW4td2lkdGg6IDUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5sYW5kaW5nX2RpdiAuY29sb3JfYm94IGltZyB7XG4gIHdpZHRoOiAyNXB4O1xuICBoZWlnaHQ6IDI1cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4ubGFuZGluZ19kaXYgLmNvbnRlbnRfZGl2IHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuLmxhbmRpbmdfZGl2IC5jb250ZW50X2RpdiAubmFtZSB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDNweDtcbn1cbi5sYW5kaW5nX2RpdiAuY29udGVudF9kaXYgLmRhdGUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjNzc4NjlFO1xuICBmb250LWZhbWlseTogXCJyZWd1bGFyXCI7XG59XG4ubGFuZGluZ19kaXYgaW9uLWljb24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAyNXB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG5zZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAxMGVtO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzLzNAM3gucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogNDAlO1xufVxuXG4uaXRlbS1ib3gtd2hpdGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA2MHB4IDAgMCAwO1xuICBoZWlnaHQ6IDYwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYm90dG9tLWJ0bi1ib3gge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogNTBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";

/***/ }),

/***/ 17956:
/*!************************************************************************!*\
  !*** ./src/app/pages/login-landing/login-landing.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <section>\r\n    <div class=\"column\">\r\n      <div class=\"logo\"><img src=\"assets/images/Demobank.svg\" class=\"w-100\"></div>\r\n    </div>\r\n  </section>\r\n  <div class=\"item-box-white\">\r\n    <div class=\"sub-title\">\r\n      <div class=\"container\">Choose the option</div>\r\n    </div>\r\n    <div class=\"container my-5\">\r\n      <div class=\"landing_div\" (click)=\"goToLogin()\">\r\n        <div class=\"color_box\">\r\n          <img src=\"assets/images/user-icon.png\">\r\n        </div>\r\n        <div class=\"content_div\">\r\n          <p class=\"name\">Sign in</p>\r\n        </div>\r\n        <ion-icon name=\"chevron-forward-sharp\"></ion-icon>\r\n      </div>\r\n      <div class=\"landing_div\" (click)=\"goToMpin()\">\r\n        <div class=\"color_box\">\r\n          <img src=\"assets/images/Icon-feather.png\">\r\n        </div>\r\n        <div class=\"content_div\">\r\n          <p class=\"name\">mPIN</p>\r\n        </div>\r\n        <ion-icon name=\"chevron-forward-sharp\"></ion-icon>\r\n      </div>\r\n\r\n      <div class=\"landing_div\" (click)=\"goToFingerprint()\">\r\n        <div class=\"color_box\">\r\n          <img src=\"assets/images/fingerprint.png\">\r\n        </div>\r\n        <div class=\"content_div\">\r\n          <p class=\"name\">Fingerprint</p>\r\n        </div>\r\n        <ion-icon name=\"chevron-forward-sharp\"></ion-icon>\r\n      </div>\r\n\r\n      <div class=\"landing_div\"  (click)=\"goToFaceId()\">\r\n        <div class=\"color_box\">\r\n          <img src=\"assets/images/face-id.png\">\r\n        </div>\r\n        <div class=\"content_div\">\r\n          <p class=\"name\">Face ID</p>\r\n        </div>\r\n        <ion-icon name=\"chevron-forward-sharp\"></ion-icon>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login-landing_login-landing_module_ts.js.map