"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_securitycenter_securitycenter_module_ts"],{

/***/ 4039:
/*!***********************************************************************!*\
  !*** ./src/app/pages/securitycenter/securitycenter-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecuritycenterPageRoutingModule": () => (/* binding */ SecuritycenterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _securitycenter_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./securitycenter.page */ 5108);




const routes = [
    {
        path: '',
        component: _securitycenter_page__WEBPACK_IMPORTED_MODULE_0__.SecuritycenterPage
    }
];
let SecuritycenterPageRoutingModule = class SecuritycenterPageRoutingModule {
};
SecuritycenterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SecuritycenterPageRoutingModule);



/***/ }),

/***/ 50936:
/*!***************************************************************!*\
  !*** ./src/app/pages/securitycenter/securitycenter.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecuritycenterPageModule": () => (/* binding */ SecuritycenterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _securitycenter_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./securitycenter-routing.module */ 4039);
/* harmony import */ var _securitycenter_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./securitycenter.page */ 5108);







let SecuritycenterPageModule = class SecuritycenterPageModule {
};
SecuritycenterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _securitycenter_routing_module__WEBPACK_IMPORTED_MODULE_0__.SecuritycenterPageRoutingModule
        ],
        declarations: [_securitycenter_page__WEBPACK_IMPORTED_MODULE_1__.SecuritycenterPage]
    })
], SecuritycenterPageModule);



/***/ }),

/***/ 5108:
/*!*************************************************************!*\
  !*** ./src/app/pages/securitycenter/securitycenter.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecuritycenterPage": () => (/* binding */ SecuritycenterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _securitycenter_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./securitycenter.page.html?ngResource */ 5038);
/* harmony import */ var _securitycenter_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./securitycenter.page.scss?ngResource */ 84046);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/fingerprint-aio/ngx */ 63427);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);










let SecuritycenterPage = class SecuritycenterPage {
    constructor(router, cdr, dataService, toastController, faio, platform, fb, apiProvider) {
        this.router = router;
        this.cdr = cdr;
        this.dataService = dataService;
        this.toastController = toastController;
        this.faio = faio;
        this.platform = platform;
        this.fb = fb;
        this.apiProvider = apiProvider;
        this.title = 'Security Center';
        this.setmpinFlag = true;
        this.isFaceId = false;
        this.isFingerPrint = false;
        this.isBioFeature = false;
        this.isAndroid = false;
    }
    ngOnInit() {
        this.buildBioAuthStateForm();
        this.currentUser = this.dataService.getCurrentUser();
        this.isDevice = this.platform.is('cordova');
        this.platform.ready().then(() => {
            if (this.platform.is("android")) {
                this.isAndroid = true;
            }
            if (this.platform.is('ios') || this.platform.is("iphone") || this.platform.is("ipad")) {
                this.isAndroid = false;
            }
        });
        this.cdr.markForCheck();
    }
    buildBioAuthStateForm() {
        this.bioForm = this.fb.group({
            faceId: [null],
            fingerPrint: [null]
        });
    }
    ionViewWillEnter() {
        var _a, _b, _c;
        this.currentUser = this.dataService.getCurrentUser();
        this.isFaceId = ((_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.faceLoginEnable) ? true : false;
        this.isFingerPrint = ((_b = this.currentUser) === null || _b === void 0 ? void 0 : _b.fingerprintLoginEnable) ? true : false;
        this.setmpinFlag = ((_c = this.currentUser) === null || _c === void 0 ? void 0 : _c.mpinActive) ? true : false;
    }
    goToHome() {
        this.router.navigate(['/profile']);
    }
    setmpin() {
        this.router.navigate(['/setmpin']);
    }
    changempin() {
        this.router.navigate(['/changempin']);
    }
    changePassword() {
        this.router.navigate(['/changepassword']);
    }
    goToLoginActivity() {
        this.router.navigate(['/loginactivity']);
    }
    updateFinger(e) {
        var _a;
        console.log(e);
        let title = 'fingerprint';
        if ((_a = this.bioForm.get('fingerPrint')) === null || _a === void 0 ? void 0 : _a.value) {
            this.checkHardwareAvailability(title, true);
        }
        else {
            this.setBioAuth(title, false);
        }
    }
    updateFaceId(e) {
        var _a;
        let title = 'faceId';
        if ((_a = this.bioForm.get('faceId')) === null || _a === void 0 ? void 0 : _a.value) {
            this.checkHardwareAvailability(title, true);
        }
        else {
            this.setBioAuth(title, false);
        }
    }
    checkHardwareAvailability(title, status) {
        this.faio.isAvailable().then((result) => {
            console.log("result of bio", result);
            if (result === "finger" || result === "face" || result === "biometric") {
                this.isBioFeature = true;
                this.setBioAuth(title, status);
            }
            else {
                this.isBioFeature = false;
            }
        }).catch((error) => {
            console.log(error);
            this.presentToast("BIOMETRIC UNAVAILABLE!");
        });
    }
    setBioAuth(title, status) {
        var _a, _b, _c;
        let payload = {
            customerId: (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.customerId,
            faceLoginEnable: (_b = this.bioForm.get('faceId')) === null || _b === void 0 ? void 0 : _b.value,
            fingerprintLoginEnable: (_c = this.bioForm.get('fingerPrint')) === null || _c === void 0 ? void 0 : _c.value
        };
        this.apiProvider.registerFaceIdORFingerPrint(payload).subscribe((res) => {
            localStorage.setItem('customer_details', JSON.stringify(res.data));
            this.dataService.isLoggedIn.next(true);
            if (status) {
                if (this.isFaceId || this.isFingerPrint) {
                    return;
                }
                else {
                    this.presentToast(`${title} Enabled Successfully!`);
                }
            }
            else {
                this.presentToast(`${title} Disabled Successfully!`);
            }
            this.cdr.markForCheck();
        }, (err) => {
            console.log(err);
        });
    }
    presentToast(msg, position) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastController.create({
                message: msg,
                duration: 800,
                position: position || 'bottom'
            });
            toast.present();
        });
    }
};
SecuritycenterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_4__.FingerprintAIO },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.Platform },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
SecuritycenterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-securitycenter',
        template: _securitycenter_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_securitycenter_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SecuritycenterPage);



/***/ }),

/***/ 84046:
/*!**************************************************************************!*\
  !*** ./src/app/pages/securitycenter/securitycenter.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "ion-avatar {\n  --border-radius: unset;\n}\n\n.avatar-img {\n  width: auto !important;\n  object-fit: contain !important;\n}\n\n.backIcon {\n  font-size: x-large;\n  margin-bottom: 4%;\n  color: #102245;\n  display: inline-block;\n  vertical-align: middle;\n  opacity: 100%;\n}\n\n.mpin-img {\n  width: 10%;\n  margin-bottom: 5%;\n}\n\n.text {\n  margin-left: 2%;\n  margin-bottom: 4%;\n  display: inline-block;\n  vertical-align: middle;\n  color: #102245;\n  font-size: 15pt;\n  opacity: 100%;\n  font-weight: 800;\n}\n\n.labelCard {\n  margin-left: 5%;\n}\n\n.iconCard {\n  margin-bottom: 8%;\n}\n\n.item {\n  margin-top: 16px;\n}\n\n.newCard {\n  font-family: \"Montserrat\" !important;\n  opacity: 114%;\n  font-size: large;\n  margin-bottom: 10%;\n  margin-left: 3%;\n}\n\n.icon {\n  margin-left: 25%;\n  margin-top: 10%;\n  font-family: \"Montserrat\";\n}\n\n.icon2 {\n  margin-left: 5%;\n  width: 10%;\n  margin-bottom: 8%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3VyaXR5Y2VudGVyLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEdJVEhVQiUyMFJFUE9TSVRPUllfVUlcXGlDdXN0TW9iaWxlLXYyXFxzcmNcXGFwcFxccGFnZXNcXHNlY3VyaXR5Y2VudGVyXFxzZWN1cml0eWNlbnRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxzQkFBQTtBQ0NKOztBREVBO0VBQ0ksc0JBQUE7RUFDQSw4QkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFFQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREdBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHQTtFQUtJLGVBQUE7QUNKSjs7QURPQTtFQUNJLGlCQUFBO0FDSko7O0FET0E7RUFDSSxnQkFBQTtBQ0pKOztBRE9BO0VBQ0ksb0NBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNKSjs7QURPQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDSko7O0FET0E7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDSkoiLCJmaWxlIjoic2VjdXJpdHljZW50ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWF2YXRhciB7XHJcbiAgICAtLWJvcmRlci1yYWRpdXM6IHVuc2V0O1xyXG59XHJcblxyXG4uYXZhdGFyLWltZ3tcclxuICAgIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5iYWNrSWNvbiB7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcblxyXG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgICBjb2xvcjogIzEwMjI0NTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBvcGFjaXR5OiAxMDAlO1xyXG59XHJcblxyXG4ubXBpbi1pbWcge1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBjb2xvcjogIzEwMjI0NTtcclxuICAgIGZvbnQtc2l6ZTogMTVwdDtcclxuICAgIG9wYWNpdHk6IDEwMCU7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4ubGFiZWxDYXJkIHtcclxuICAgIC8vIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgIC8vIG9wYWNpdHk6IDc1JTtcclxuICAgIC8vIGZvbnQtc2l6ZTogMTNwdDtcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG5cclxuLmljb25DYXJkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDglO1xyXG59XHJcblxyXG4uaXRlbSB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG59XHJcblxyXG4ubmV3Q2FyZCB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAxMTQlO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbn1cclxuXHJcbi5pY29uMiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOCU7XHJcblxyXG59IiwiaW9uLWF2YXRhciB7XG4gIC0tYm9yZGVyLXJhZGl1czogdW5zZXQ7XG59XG5cbi5hdmF0YXItaW1nIHtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgb2JqZWN0LWZpdDogY29udGFpbiAhaW1wb3J0YW50O1xufVxuXG4uYmFja0ljb24ge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIG1hcmdpbi1ib3R0b206IDQlO1xuICBjb2xvcjogIzEwMjI0NTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBvcGFjaXR5OiAxMDAlO1xufVxuXG4ubXBpbi1pbWcge1xuICB3aWR0aDogMTAlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbn1cblxuLnRleHQge1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIG1hcmdpbi1ib3R0b206IDQlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiAjMTAyMjQ1O1xuICBmb250LXNpemU6IDE1cHQ7XG4gIG9wYWNpdHk6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5sYWJlbENhcmQge1xuICBtYXJnaW4tbGVmdDogNSU7XG59XG5cbi5pY29uQ2FyZCB7XG4gIG1hcmdpbi1ib3R0b206IDglO1xufVxuXG4uaXRlbSB7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5cbi5uZXdDYXJkIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDExNCU7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xufVxuXG4uaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xufVxuXG4uaWNvbjIge1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIHdpZHRoOiAxMCU7XG4gIG1hcmdpbi1ib3R0b206IDglO1xufSJdfQ== */";

/***/ }),

/***/ 5038:
/*!**************************************************************************!*\
  !*** ./src/app/pages/securitycenter/securitycenter.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goToHome()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>{{title}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\r\n  <ion-item class=\"item\" (click)=\"changePassword()\">\r\n    <ion-avatar slot=\"start\">\r\n      <img class=\"avatar-img\" src=\"assets/icon/security/key-sec.svg\" alt=\"Ionic logo\">\r\n    </ion-avatar>\r\n    <ion-label class=\"labelCard\">\r\n      Change Password\r\n    </ion-label>\r\n    <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n  </ion-item>\r\n\r\n\r\n  <ion-item class=\"item\">\r\n    <ion-avatar slot=\"start\">\r\n      <img class=\"avatar-img\" src=\"assets/icon/security/transaction-sec.svg\" alt=\"Ionic logo\">\r\n    </ion-avatar>\r\n    <ion-label class=\"labelCard\">\r\n      My Transaction Limits\r\n    </ion-label>\r\n    <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n  </ion-item>\r\n\r\n\r\n  <ion-item class=\"item\">\r\n    <ion-avatar slot=\"start\">\r\n      <img class=\"avatar-img\" src=\"assets/icon/security/card-service.svg\" alt=\"Ionic logo\">\r\n    </ion-avatar>\r\n    <ion-label class=\"labelCard\">\r\n      Manage Your Card\r\n    </ion-label>\r\n    <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n  </ion-item>\r\n\r\n\r\n  <ion-item class=\"item\" (click)=\"goToLoginActivity()\">\r\n    <ion-avatar slot=\"start\">\r\n      <img class=\"avatar-img\" src=\"assets/icon/security/transaction-sec.svg\" alt=\"Ionic logo\">\r\n    </ion-avatar>\r\n    <ion-label class=\"labelCard\">\r\n      Login Activity\r\n    </ion-label>\r\n    <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n  </ion-item>\r\n\r\n  <form *ngIf=\"bioForm\" [formGroup]=\"bioForm\">\r\n    <ion-item class=\"item\" *ngIf=\"isAndroid\">\r\n      <ion-avatar slot=\"start\">\r\n        <img class=\"avatar-img\" src=\"assets/icon/security/finger-sec.svg\" alt=\"Ionic logo\">\r\n      </ion-avatar>\r\n      <ion-label class=\"labelCard\"> Enable/Disable Fingerprint</ion-label>\r\n      <ion-toggle slot=\"end\" enableOnOffLabels=\"false\" (ionChange)=\"updateFinger($event)\" [checked]=\"isFingerPrint\" formControlName=\"fingerPrint\" [disabled]=\"!isDevice\">\r\n      </ion-toggle>\r\n    </ion-item>\r\n\r\n    <!-- [disabled]=\"!isDevice\" -->\r\n    <ion-item class=\"item\" *ngIf=\"!isAndroid\">\r\n      <ion-avatar slot=\"start\">\r\n        <img class=\"avatar-img\" src=\"assets/icon/security/face-id-sec.svg\" alt=\"Ionic logo\">  \r\n      </ion-avatar>\r\n      <ion-label class=\"labelCard\">Enable/Disable Face ID</ion-label>\r\n      <ion-toggle slot=\"end\" enableOnOffLabels=\"false\" (ionChange)=\"updateFaceId($event)\" [checked]=\"isFaceId\" formControlName=\"faceId\" [disabled]=\"!isDevice\">\r\n      </ion-toggle>\r\n    </ion-item>\r\n  </form>\r\n\r\n\r\n  <div *ngIf=\"setmpinFlag; else showChangeMpin\">\r\n    <ion-item class=\"item\" lines=\"none\" (click)=\"changempin()\">\r\n      <ion-avatar slot=\"start\">\r\n        <img class=\"avatar-img\" src=\"assets/icon/security/feather-lock-sec.svg\" alt=\"MPIN\">\r\n      </ion-avatar>\r\n      <ion-label class=\"labelCard\">\r\n        Change login mPIN\r\n      </ion-label>\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n    </ion-item>\r\n  </div>\r\n\r\n  <ng-template #showChangeMpin>\r\n    <ion-item class=\"item\" lines=\"none\" (click)=\"setmpin()\">\r\n      <ion-avatar slot=\"start\">\r\n        <img class=\"avatar-img\" src=\"assets/icon/security/feather-lock-sec.svg\" alt=\"MPIN\">\r\n      </ion-avatar>\r\n      <ion-label class=\"labelCard\">\r\n        Set login mPIN\r\n      </ion-label>\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n    </ion-item>\r\n  </ng-template>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_securitycenter_securitycenter_module_ts.js.map