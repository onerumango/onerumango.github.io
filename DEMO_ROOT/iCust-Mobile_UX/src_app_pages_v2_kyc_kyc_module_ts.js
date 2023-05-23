"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_v2_kyc_kyc_module_ts"],{

/***/ 89553:
/*!****************************************************!*\
  !*** ./src/app/pages/v2/kyc/kyc-routing.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KycPageRoutingModule": () => (/* binding */ KycPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _kyc_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kyc.page */ 81747);




const routes = [
    {
        path: '',
        component: _kyc_page__WEBPACK_IMPORTED_MODULE_0__.KycPage
    }
];
let KycPageRoutingModule = class KycPageRoutingModule {
};
KycPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], KycPageRoutingModule);



/***/ }),

/***/ 76769:
/*!********************************************!*\
  !*** ./src/app/pages/v2/kyc/kyc.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KycPageModule": () => (/* binding */ KycPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _kyc_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kyc-routing.module */ 89553);
/* harmony import */ var _kyc_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kyc.page */ 81747);







let KycPageModule = class KycPageModule {
};
KycPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _kyc_routing_module__WEBPACK_IMPORTED_MODULE_0__.KycPageRoutingModule
        ],
        declarations: [_kyc_page__WEBPACK_IMPORTED_MODULE_1__.KycPage]
    })
], KycPageModule);



/***/ }),

/***/ 81747:
/*!******************************************!*\
  !*** ./src/app/pages/v2/kyc/kyc.page.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KycPage": () => (/* binding */ KycPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _kyc_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./kyc.page.html?ngResource */ 94984);
/* harmony import */ var _kyc_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./kyc.page.scss?ngResource */ 92297);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store */ 10910);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);







let KycPage = class KycPage {
    constructor(router, toastCtrl) {
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.cards = _store__WEBPACK_IMPORTED_MODULE_2__.Store.verificationMethod;
    }
    ngOnInit() { }
    openLink(page) {
        if (page.link) {
            this.router.navigate([`${page.link}`]);
            localStorage.removeItem('kycRef');
            localStorage.removeItem('UploadedDocument');
        }
        else {
            this.showToast();
        }
    }
    goBack() {
        this.router.navigate(['dashboard']);
    }
    showToast() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Service not Available',
                duration: 2000,
                position: 'bottom',
            });
            toast.present();
        });
    }
};
KycPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
KycPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-kyc',
        template: _kyc_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_kyc_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], KycPage);



/***/ }),

/***/ 10910:
/*!***************************************!*\
  !*** ./src/app/pages/v2/kyc/store.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Store": () => (/* binding */ Store)
/* harmony export */ });
class Store {
}
Store.verificationMethod = [
    {
        title: 'Branch Verification',
        id: 1,
        link: 'kyc-branch',
        white_bg_img: 'assets/images/kyc/branch.svg',
        selected: false,
    },
    {
        title: 'Video Verification',
        id: 2,
        link: 'kyc-video',
        white_bg_img: 'assets/images/kyc/video.svg',
        selected: false,
    },
    {
        title: 'KYC Registration Agency',
        id: 3,
        link: null,
        white_bg_img: 'assets/images/kyc/agent.svg',
        selected: false,
    },
];


/***/ }),

/***/ 92297:
/*!*******************************************************!*\
  !*** ./src/app/pages/v2/kyc/kyc.page.scss?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = ".card_branch {\n  height: 250px !important;\n  filter: drop-shadow(0pt 3pt 15pt rgba(0, 0, 0, 0.0705882353));\n  border-radius: 16px;\n}\n\n.card-content {\n  margin: 30px;\n  text-align: center;\n  transition: ease-in-out all 0.35s;\n}\n\n.card-content .card-logo {\n  margin: 0 auto;\n}\n\n.card-content p {\n  margin: 16px !important;\n  color: #000000;\n  opacity: 100%;\n  font-size: 18px;\n}\n\n.hover-top:hover {\n  background: #d6dbea;\n  transition: ease-in-out all 0.15s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImt5Yy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtFQUNBLDZEQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBQ0Y7O0FBQUU7RUFDRSxjQUFBO0FBRUo7O0FBQUU7RUFDRSx1QkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSxpQ0FBQTtBQUNGIiwiZmlsZSI6Imt5Yy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZF9icmFuY2gge1xyXG4gIGhlaWdodDogMjUwcHggIWltcG9ydGFudDtcclxuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBwdCAzcHQgMTVwdCAjMDAwMDAwMTIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE2cHg7XHJcbn1cclxuXHJcbi5jYXJkLWNvbnRlbnQge1xyXG4gIG1hcmdpbjogMzBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogZWFzZS1pbi1vdXQgYWxsIDAuMzVzO1xyXG4gIC5jYXJkLWxvZ28ge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgbWFyZ2luOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIG9wYWNpdHk6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcblxyXG4uaG92ZXItdG9wOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZDZkYmVhO1xyXG4gIHRyYW5zaXRpb246IGVhc2UtaW4tb3V0IGFsbCAwLjE1cztcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 94984:
/*!*******************************************************!*\
  !*** ./src/app/pages/v2/kyc/kyc.page.html?ngResource ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon\n          slot=\"icon-only\"\n          name=\"chevron-back-outline\"\n          style=\"color: #004c97\"\n        ></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title color=\"bank\" class=\"font-size-16\"\n      >Select KYC Verification Method</ion-title\n    >\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n  <ion-card\n    class=\"card_branch hover-top\"\n    *ngFor=\"let card of cards; let i = index\"\n  >\n    <div class=\"card-content\" (click)=\"openLink(card)\">\n      <div class=\"card-logo\">\n        <img [src]=\"card?.white_bg_img\" [alt]=\"card?.title\" />\n      </div>\n      <p>{{card?.title}}</p>\n    </div>\n  </ion-card>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_v2_kyc_kyc_module_ts.js.map