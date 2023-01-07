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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_landing_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-landing.page.html?ngResource */ 17956);
/* harmony import */ var _login_landing_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-landing.page.scss?ngResource */ 34404);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ 52468);







let LoginLandingPage = class LoginLandingPage {
    constructor(router, platform, cdr, dataService) {
        this.router = router;
        this.platform = platform;
        this.cdr = cdr;
        this.dataService = dataService;
        this.isFaceId = false;
        this.isFingerPrint = false;
    }
    ngOnInit() {
        this.currentUser = this.dataService.getCurrentUser();
        this.dataService.share.subscribe((data) => {
            if (data) {
                this.currentUser = this.dataService.getCurrentUser();
                this.cdr.markForCheck();
            }
        });
        this.cdr.markForCheck();
    }
    ionViewWillEnter() {
        this.currentUser = this.dataService.getCurrentUser();
        this.cdr.markForCheck();
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
LoginLandingPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
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

module.exports = ".logo_div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 85%;\n}\n\n.logo {\n  width: 175px;\n  margin: auto;\n}\n\n.sub-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #000000;\n  opacity: 70%;\n}\n\n.landing_div {\n  background: linear-gradient(180deg, #FFFFFF, #F8FAFE);\n  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.1607843137));\n  border-radius: 10px;\n  padding: 10px;\n  padding-left: 25px;\n  display: flex;\n  align-items: center;\n  height: 70px;\n  position: relative;\n  margin-bottom: 20px;\n}\n\n.landing_div .color_box {\n  height: 50px;\n  width: 50px;\n  min-width: 50px;\n  border-radius: 10px;\n  position: relative;\n}\n\n.landing_div .color_box img {\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.landing_div .content_div {\n  padding-left: 16px;\n}\n\n.landing_div .content_div .name {\n  color: #000000;\n  font-size: 17px;\n  font-weight: 500;\n  margin-bottom: 3px;\n}\n\n.landing_div .content_div .date {\n  font-size: 13px;\n  color: #77869E;\n  font-family: \"regular\";\n}\n\n.landing_div ion-icon {\n  position: absolute;\n  right: 25px;\n  color: #000000;\n  font-size: 20px;\n}\n\nsection {\n  position: relative;\n  background: url('3@3x.png');\n  background-repeat: round;\n  color: #fff;\n  text-align: center;\n  height: 40%;\n}\n\n.item-box-white {\n  width: 100%;\n  height: 100%;\n  background: #ffffff;\n  border-radius: 60px 0 0 0;\n  height: 60%;\n  position: absolute;\n}\n\n.bottom-btn-box {\n  position: absolute;\n  bottom: 50px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWxhbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFFSjs7QUFFQTtFQUNJLHFEQUFBO0VBQ0EsNERBQUE7RUFFQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBREo7O0FBR0k7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRFI7O0FBSVE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQUZaOztBQU1JO0VBQ0ksa0JBQUE7QUFKUjs7QUFNUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUpaOztBQVFRO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtBQU5aOztBQVVJO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUFSUjs7QUFZQTtFQUNJLGtCQUFBO0VBR0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFYSjs7QUFjQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQVhKOztBQWNBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQVhKIiwiZmlsZSI6ImxvZ2luLWxhbmRpbmcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ29fZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDg1JTtcclxufVxyXG4ubG9nbyB7XHJcbiAgICB3aWR0aDogMTc1cHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgb3BhY2l0eTogNzAlO1xyXG59XHJcblxyXG5cclxuLmxhbmRpbmdfZGl2IHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNGRkZGRkYsICNGOEZBRkUpO1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwcHggM3B4IDZweCAjMDAwMDAwMjkpO1xyXG4gICAgLy8gYm94LXNoYWRvdzogNXB4IDEwcHggIzg4ODg4ODtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgLy8gb3BhY2l0eTogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG5cclxuICAgIC5jb2xvcl9ib3gge1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBtaW4td2lkdGg6IDUwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgLy8gYmFja2dyb3VuZDogI0RGRTdGNTtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDUwJTtcclxuICAgICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnRfZGl2IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcblxyXG4gICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgY29sb3I6IzAwMDAwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzcHg7XHJcbiAgICAgICAgICAgIC8vIG9wYWNpdHk6IDgzJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kYXRlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzc3ODY5RTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdyZWd1bGFyJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMjVweDtcclxuICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbnNlY3Rpb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgLy8gcGFkZGluZzogMTBlbTtcclxuICAgIC8vIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvM0AzeC5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbn1cclxuXHJcbi5pdGVtLWJveC13aGl0ZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4IDAgMCAwO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5ib3R0b20tYnRuLWJveCB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDUwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */";

/***/ }),

/***/ 17956:
/*!************************************************************************!*\
  !*** ./src/app/pages/login-landing/login-landing.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <section>\r\n    <div class=\"column logo_div\">\r\n      <div class=\"logo\"><img src=\"assets/images/Demobank.svg\" class=\"w-100\"></div>\r\n    </div>\r\n  </section>\r\n  <div class=\"item-box-white\">\r\n    <div class=\"sub-title\">\r\n      <div class=\"container\">Choose the option</div>\r\n    </div>\r\n    <div class=\"container my-5\">\r\n      <div class=\"landing_div\" (click)=\"goToLogin()\">\r\n        <div class=\"color_box\">\r\n          <img src=\"assets/images/user-icon.png\">\r\n        </div>\r\n        <div class=\"content_div\">\r\n          <p class=\"name\">Sign in</p>\r\n        </div>\r\n        <ion-icon name=\"chevron-forward-sharp\"></ion-icon>\r\n      </div>\r\n      <div class=\"landing_div\" (click)=\"goToMpin()\" *ngIf=\"platform.is('cordova') && currentUser?.mpinActive\">\r\n        <div class=\"color_box\">\r\n          <img src=\"assets/images/Icon-feather.png\">\r\n        </div>\r\n        <div class=\"content_div\">\r\n          <p class=\"name\">mPIN</p>\r\n        </div>\r\n        <ion-icon name=\"chevron-forward-sharp\"></ion-icon>\r\n      </div>\r\n\r\n      <div class=\"landing_div\" (click)=\"goToFaceId()\" *ngIf=\"platform.is('cordova') && currentUser?.faceLoginEnable\">\r\n        <div class=\"color_box\">\r\n          <img src=\"assets/images/face-id.png\">\r\n        </div>\r\n        <div class=\"content_div\">\r\n          <p class=\"name\">Face ID</p>\r\n        </div>\r\n        <ion-icon name=\"chevron-forward-sharp\"></ion-icon>\r\n      </div>\r\n\r\n      <div class=\"landing_div\" (click)=\"goToFingerprint()\" *ngIf=\"platform.is('cordova') && currentUser?.fingerprintLoginEnable\">\r\n        <div class=\"color_box\">\r\n          <img src=\"assets/images/fingerprint.png\">\r\n        </div>\r\n        <div class=\"content_div\">\r\n          <p class=\"name\">Fingerprint</p>\r\n        </div>\r\n        <ion-icon name=\"chevron-forward-sharp\"></ion-icon>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login-landing_login-landing_module_ts.js.map