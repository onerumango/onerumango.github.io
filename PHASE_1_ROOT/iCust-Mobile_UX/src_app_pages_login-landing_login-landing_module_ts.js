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
        this.isAndroid = false;
    }
    ngOnInit() {
        this.currentUser = this.dataService.getCurrentUser();
        this.platform.ready().then(() => {
            if (this.platform.is("android")) {
                this.isAndroid = true;
            }
            if (this.platform.is('ios') || this.platform.is("iphone") || this.platform.is("ipad")) {
                this.isAndroid = false;
            }
        });
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

module.exports = ".logo_div {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 85%;\n}\n\n.logo {\n  width: 175px;\n  margin: auto;\n}\n\n.sub-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #000000;\n  opacity: 70%;\n}\n\n.landing_div {\n  background: linear-gradient(180deg, #FFFFFF, #F8FAFE);\n  filter: drop-shadow(0px 3px 6px rgba(0, 0, 0, 0.1607843137));\n  border-radius: 10px;\n  padding: 10px;\n  padding-left: 25px;\n  display: flex;\n  align-items: center;\n  height: 70px;\n  position: relative;\n  margin-bottom: 20px;\n}\n\n.landing_div .color_box {\n  height: 50px;\n  width: 50px;\n  min-width: 50px;\n  border-radius: 10px;\n  position: relative;\n}\n\n.landing_div .color_box img {\n  width: 25px;\n  height: 25px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.landing_div .content_div {\n  padding-left: 16px;\n}\n\n.landing_div .content_div .name {\n  color: #000000;\n  font-size: 17px;\n  font-weight: 500;\n  margin-bottom: 3px;\n}\n\n.landing_div .content_div .date {\n  font-size: 13px;\n  color: #77869E;\n  font-family: \"regular\";\n}\n\n.landing_div ion-icon {\n  position: absolute;\n  right: 25px;\n  color: #000000;\n  font-size: 20px;\n}\n\nsection {\n  position: relative;\n  background: url('3@3x.png');\n  background-repeat: round;\n  color: #fff;\n  text-align: center;\n  height: 40%;\n}\n\n.item-box-white {\n  width: 100%;\n  height: 100%;\n  background: #ffffff;\n  border-radius: 60px 0 0 0;\n  height: 60%;\n  position: absolute;\n}\n\n.bottom-btn-box {\n  position: absolute;\n  bottom: 50px;\n  left: 0px;\n  right: 0px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLWxhbmRpbmcucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcR0lUSFVCJTIwUkVQT1NJVE9SWV9VSVxcaUN1c3RNb2JpbGUtdjJcXHNyY1xcYXBwXFxwYWdlc1xcbG9naW4tbGFuZGluZ1xcbG9naW4tbGFuZGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDRUo7O0FEQ0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREVBO0VBQ0kscURBQUE7RUFDQSw0REFBQTtFQUVBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURHSTtFQUNJLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNEUjs7QURJUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDRlo7O0FETUk7RUFDSSxrQkFBQTtBQ0pSOztBRE1RO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSlo7O0FEUVE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0FDTlo7O0FEVUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ1JSOztBRFlBO0VBQ0ksa0JBQUE7RUFHQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQ1hKOztBRGNBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDWEo7O0FEY0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FDWEoiLCJmaWxlIjoibG9naW4tbGFuZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9nb19kaXYge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogODUlO1xyXG59XHJcbi5sb2dvIHtcclxuICAgIHdpZHRoOiAxNzVweDtcclxuICAgIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnN1Yi10aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBvcGFjaXR5OiA3MCU7XHJcbn1cclxuXHJcblxyXG4ubGFuZGluZ19kaXYge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI0ZGRkZGRiwgI0Y4RkFGRSk7XHJcbiAgICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAzcHggNnB4ICMwMDAwMDAyOSk7XHJcbiAgICAvLyBib3gtc2hhZG93OiA1cHggMTBweCAjODg4ODg4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICAvLyBvcGFjaXR5OiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogNzBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcblxyXG4gICAgLmNvbG9yX2JveCB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kOiAjREZFN0Y1O1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgICBsZWZ0OiA1MCU7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudF9kaXYge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcclxuXHJcbiAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICBjb2xvcjojMDAwMDAwO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNweDtcclxuICAgICAgICAgICAgLy8gb3BhY2l0eTogODMlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRhdGUge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNzc4NjlFO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3JlZ3VsYXInO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpb24taWNvbiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAyNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAvLyBwYWRkaW5nOiAxMGVtO1xyXG4gICAgLy8gYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy8zQDN4LnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJvdW5kO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxufVxyXG5cclxuLml0ZW0tYm94LXdoaXRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDYwcHggMCAwIDA7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmJvdHRvbS1idG4tYm94IHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogNTBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iLCIubG9nb19kaXYge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA4NSU7XG59XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDE3NXB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5zdWItdGl0bGUge1xuICBmb250LXNpemU6IDE4cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBvcGFjaXR5OiA3MCU7XG59XG5cbi5sYW5kaW5nX2RpdiB7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNGRkZGRkYsICNGOEZBRkUpO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAzcHggNnB4IHJnYmEoMCwgMCwgMCwgMC4xNjA3ODQzMTM3KSk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgaGVpZ2h0OiA3MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG4ubGFuZGluZ19kaXYgLmNvbG9yX2JveCB7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDUwcHg7XG4gIG1pbi13aWR0aDogNTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmxhbmRpbmdfZGl2IC5jb2xvcl9ib3ggaW1nIHtcbiAgd2lkdGg6IDI1cHg7XG4gIGhlaWdodDogMjVweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi5sYW5kaW5nX2RpdiAuY29udGVudF9kaXYge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG4ubGFuZGluZ19kaXYgLmNvbnRlbnRfZGl2IC5uYW1lIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xufVxuLmxhbmRpbmdfZGl2IC5jb250ZW50X2RpdiAuZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICM3Nzg2OUU7XG4gIGZvbnQtZmFtaWx5OiBcInJlZ3VsYXJcIjtcbn1cbi5sYW5kaW5nX2RpdiBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDI1cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbnNlY3Rpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvM0AzeC5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiA0MCU7XG59XG5cbi5pdGVtLWJveC13aGl0ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDYwcHggMCAwIDA7XG4gIGhlaWdodDogNjAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5ib3R0b20tYnRuLWJveCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiA1MHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";

/***/ }),

/***/ 17956:
/*!************************************************************************!*\
  !*** ./src/app/pages/login-landing/login-landing.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <section>\r\n    <div class=\"column logo_div\">\r\n      <div class=\"logo\"><img src=\"assets/images/Demobank.svg\" class=\"w-100\"></div>\r\n    </div>\r\n  </section>\r\n  <div class=\"item-box-white\">\r\n    <div class=\"sub-title\">\r\n      <div class=\"container\">Choose the option</div>\r\n    </div>\r\n    <div class=\"container my-5\">\r\n      <div class=\"landing_div\" (click)=\"goToLogin()\">\r\n        <div class=\"color_box\">\r\n          <img src=\"assets/images/user-icon.png\">\r\n        </div>\r\n        <div class=\"content_div\">\r\n          <p class=\"name\">Sign in</p>\r\n        </div>\r\n        <ion-icon name=\"chevron-forward-sharp\"></ion-icon>\r\n      </div>\r\n\r\n      <div class=\"landing_div\" (click)=\"goToMpin()\" *ngIf=\"platform.is('cordova') && currentUser?.mpinActive\">\r\n        <div class=\"color_box\">\r\n          <img src=\"assets/images/Icon-feather.png\">\r\n        </div>\r\n        <div class=\"content_div\">\r\n          <p class=\"name\">mPIN</p>\r\n        </div>\r\n        <ion-icon name=\"chevron-forward-sharp\"></ion-icon>\r\n      </div>\r\n\r\n      <ng-container *ngIf=\"!isAndroid\">\r\n        <div class=\"landing_div\" (click)=\"goToFaceId()\" *ngIf=\"platform.is('cordova') && currentUser?.faceLoginEnable\">\r\n          <div class=\"color_box\">\r\n            <img src=\"assets/images/face-id.png\">\r\n          </div>\r\n          <div class=\"content_div\">\r\n            <p class=\"name\">Face ID</p>\r\n          </div>\r\n          <ion-icon name=\"chevron-forward-sharp\"></ion-icon>\r\n        </div>\r\n      </ng-container>\r\n\r\n      <ng-container *ngIf=\"isAndroid\">\r\n        <div class=\"landing_div\" (click)=\"goToFingerprint()\"\r\n          *ngIf=\"platform.is('cordova') && currentUser?.fingerprintLoginEnable\">\r\n          <div class=\"color_box\">\r\n            <img src=\"assets/images/fingerprint.png\">\r\n          </div>\r\n          <div class=\"content_div\">\r\n            <p class=\"name\">Fingerprint</p>\r\n          </div>\r\n          <ion-icon name=\"chevron-forward-sharp\"></ion-icon>\r\n        </div>\r\n      </ng-container>\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login-landing_login-landing_module_ts.js.map