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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/fingerprint-aio/ngx */ 63427);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);








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

module.exports = "section {\n  position: relative;\n  padding: 10em;\n  background: url(\"/assets/images/finger-bg.png\");\n  color: #fff;\n  text-align: center;\n  height: 100%;\n}\n\nion-toolbar {\n  --background: transparent;\n  --color: white;\n}\n\n.otp-text {\n  color: #A2A0A8;\n  width: 240%;\n  margin-left: -60%;\n}\n\n.logo-icon {\n  margin: 0 auto;\n  text-align: start;\n  width: 130px;\n  height: 130px;\n  margin-top: -40px;\n}\n\n.logo {\n  width: 150px;\n}\n\n.back-nav {\n  margin-top: -110px;\n  margin-left: -190% !important;\n  width: 60px;\n}\n\n.back-nav-color {\n  color: #000000 !important;\n  width: 290px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbmdlcnByaW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUVBLCtDQUFBO0VBRUEsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBREY7O0FBSUE7RUFDRSxZQUFBO0FBREY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLDZCQUFBO0VBRUEsV0FBQTtBQUhGOztBQU1BO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0FBSEYiLCJmaWxlIjoiZmluZ2VycHJpbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDEwZW07XHJcbiAgLy8gYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL2Zpbmdlci1iZy5wbmcnKTtcclxuICAvLyBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5vdHAtdGV4dCB7XHJcbiAgY29sb3I6ICNBMkEwQTg7XHJcbiAgd2lkdGg6IDI0MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IC02MCU7XHJcbn1cclxuXHJcbi5sb2dvLWljb24ge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG4gIG1hcmdpbi10b3A6IC00MHB4O1xyXG59XHJcblxyXG4ubG9nbyB7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIC8vIG1hcmdpbi10b3A6IC0xNTBweDtcclxufVxyXG5cclxuLmJhY2stbmF2IHtcclxuICBtYXJnaW4tdG9wOiAtMTEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xOTAlICFpbXBvcnRhbnQ7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICB3aWR0aDogNjBweDtcclxufVxyXG5cclxuLmJhY2stbmF2LWNvbG9yIHtcclxuICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAyOTBweDtcclxuICAvLyBtYXJnaW4tbGVmdDogLTYwcHggIWltcG9ydGFudDtcclxuICAvLyB3aWR0aDogMjAwJTtcclxufSJdfQ== */";

/***/ }),

/***/ 19972:
/*!********************************************************************!*\
  !*** ./src/app/pages/fingerprint/fingerprint.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button fill=\"clear\" (click)=\"back()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" class=\"back-nav-color\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n\r\n  <section>\r\n    <div class=\"logo-icon\">\r\n      <div class=\"logo\"><img src=\"assets/images/Demobank.svg\" class=\"w-100\"></div>\r\n    </div>\r\n\r\n    <div>\r\n      <ion-text>\r\n        <h4 style=\"color: #000000;font-weight: bold;\">Fingerprint</h4>\r\n        <p class=\"otp-text\">{{ currentUser?.firstName }} {{ currentUser?.lastName }} logs into his bank account using\r\n          his fingerprint</p>\r\n      </ion-text>\r\n    </div>\r\n  </section>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_fingerprint_fingerprint_module_ts.js.map