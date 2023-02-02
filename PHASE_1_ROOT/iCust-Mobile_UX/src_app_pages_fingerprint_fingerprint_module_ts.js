"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_fingerprint_fingerprint_module_ts"],{

/***/ 44290:
/*!*****************************************************************!*\
  !*** ./src/app/pages/fingerprint/fingerprint-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FingerprintPageRoutingModule": () => (/* binding */ FingerprintPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _fingerprint_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fingerprint.page */ 41174);




const routes = [
    {
        path: '',
        component: _fingerprint_page__WEBPACK_IMPORTED_MODULE_0__.FingerprintPage
    }
];
let FingerprintPageRoutingModule = class FingerprintPageRoutingModule {
};
FingerprintPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FingerprintPageRoutingModule);



/***/ }),

/***/ 82006:
/*!*********************************************************!*\
  !*** ./src/app/pages/fingerprint/fingerprint.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FingerprintPageModule": () => (/* binding */ FingerprintPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _fingerprint_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fingerprint-routing.module */ 44290);
/* harmony import */ var _fingerprint_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fingerprint.page */ 41174);







let FingerprintPageModule = class FingerprintPageModule {
};
FingerprintPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _fingerprint_routing_module__WEBPACK_IMPORTED_MODULE_0__.FingerprintPageRoutingModule
        ],
        declarations: [_fingerprint_page__WEBPACK_IMPORTED_MODULE_1__.FingerprintPage]
    })
], FingerprintPageModule);



/***/ }),

/***/ 41174:
/*!*******************************************************!*\
  !*** ./src/app/pages/fingerprint/fingerprint.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FingerprintPage": () => (/* binding */ FingerprintPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _fingerprint_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fingerprint.page.html?ngResource */ 19972);
/* harmony import */ var _fingerprint_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./fingerprint.page.scss?ngResource */ 78736);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/fingerprint-aio/ngx */ 63427);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);








let FingerprintPage = class FingerprintPage {
    constructor(router, faio, plt, toastController, dataService) {
        this.router = router;
        this.faio = faio;
        this.plt = plt;
        this.toastController = toastController;
        this.dataService = dataService;
    }
    ngOnInit() {
        this.currentUser = this.dataService.getCurrentUser();
    }
    ionViewWillEnter() {
        this.plt.ready().then(() => {
            this.showBioDialog();
        });
    }
    showBioDialog() {
        this.faio.isAvailable().then((result) => {
            console.log("result of bio", result);
            if (result === "finger" || result === "biometric") {
                this.verify();
            }
            else {
                this.presentToast("Biometric Authentication Not Available in your device!");
                this.router.navigate(["login-landing"], { replaceUrl: true });
            }
        }).catch((error) => {
            console.log(error);
            this.presentToast("Biometric Authentication Not Available in your device!");
            this.router.navigate(["dashboard"], { replaceUrl: true });
        });
    }
    verify() {
        this.faio.show({
            title: 'Demobank Biometric Verification',
            disableBackup: false,
        }).then((result) => {
            localStorage.setItem("isBioAuth", "true");
            this.router.navigate(["dashboard"], { replaceUrl: true });
            this.presentToast("Biometric Verified!");
        }).catch((error) => {
            console.log("Bio error ", error);
            if (error.code == -102) {
                this.verify();
            }
            else {
                this.presentToast(`${error.message}`);
                this.router.navigate(["login-landing"], { replaceUrl: true });
            }
        });
    }
    presentToast(msg, position) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 800,
                position: position || 'bottom'
            });
            toast.present();
        });
    }
    back() {
        this.router.navigate(['login-landing']);
    }
};
FingerprintPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_3__.FingerprintAIO },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
FingerprintPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-fingerprint',
        template: _fingerprint_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_fingerprint_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FingerprintPage);



/***/ }),

/***/ 78736:
/*!********************************************************************!*\
  !*** ./src/app/pages/fingerprint/fingerprint.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: url(\"/assets/images/finger-bg.png\");\n}\n\nion-toolbar {\n  --background: transparent;\n  --color: white;\n}\n\n.icon-content {\n  margin-top: 75px;\n}\n\n.otp-text {\n  color: #A2A0A8;\n}\n\n.back-nav-color {\n  color: #000000 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmdlcnByaW50LnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEdJVEhVQiUyMFJFUE9TSVRPUllfVUlcXGlDdXN0TW9iaWxlLXYyXFxzcmNcXGFwcFxccGFnZXNcXGZpbmdlcnByaW50XFxmaW5nZXJwcmludC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpREFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRiIsImZpbGUiOiJmaW5nZXJwcmludC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2Zpbmdlci1iZy5wbmcnKTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pY29uLWNvbnRlbnQge1xyXG4gIG1hcmdpbi10b3A6IDc1cHg7XHJcbn1cclxuXHJcbi5vdHAtdGV4dCB7XHJcbiAgY29sb3I6ICNBMkEwQTg7XHJcbn1cclxuXHJcbi5iYWNrLW5hdi1jb2xvciB7XHJcbiAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ltYWdlcy9maW5nZXItYmcucG5nXCIpO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4uaWNvbi1jb250ZW50IHtcbiAgbWFyZ2luLXRvcDogNzVweDtcbn1cblxuLm90cC10ZXh0IHtcbiAgY29sb3I6ICNBMkEwQTg7XG59XG5cbi5iYWNrLW5hdi1jb2xvciB7XG4gIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG59Il19 */";

/***/ }),

/***/ 19972:
/*!********************************************************************!*\
  !*** ./src/app/pages/fingerprint/fingerprint.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"clear\" (click)=\"back()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" class=\"back-nav-color\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title class=\"text-center\">\r\n      <img src=\"assets/images/Demobank.svg\">\r\n    </ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"text-center ion-padding icon-content\">\r\n    <h4 style=\"color: #000000;font-weight: bold;\">Fingerprint</h4>\r\n    <p class=\"otp-text\">\r\n      {{ currentUser?.firstName }} {{ currentUser?.lastName }} logs into his bank account using his fingerprint\r\n    </p>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_fingerprint_fingerprint_module_ts.js.map