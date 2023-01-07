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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _securitycenter_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./securitycenter.page.html?ngResource */ 5038);
/* harmony import */ var _securitycenter_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./securitycenter.page.scss?ngResource */ 84046);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/fingerprint-aio/ngx */ 63427);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);










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
    }
    ngOnInit() {
        var _a, _b, _c;
        this.buildBioAuthStateForm();
        this.currentUser = this.dataService.getCurrentUser();
        this.isDevice = this.platform.is('cordova');
        this.isFaceId = ((_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.faceLoginEnable) ? true : false;
        this.isFingerPrint = ((_b = this.currentUser) === null || _b === void 0 ? void 0 : _b.fingerprintLoginEnable) ? true : false;
        this.setmpinFlag = ((_c = this.currentUser) === null || _c === void 0 ? void 0 : _c.mpinActive) ? true : false;
        this.bioForm.get('isFaceId').patchValue(this.isFaceId);
        this.bioForm.get('isFingerPrint').patchValue(this.isFingerPrint);
        this.onChanges();
        this.cdr.markForCheck();
    }
    buildBioAuthStateForm() {
        this.bioForm = this.fb.group({
            isFaceId: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            isFingerPrint: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
        });
    }
    ionViewWillEnter() {
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
    onChanges() {
        var _a;
        let customerId = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.customerId;
        this.bioForm.get('isFaceId').valueChanges.subscribe(res => {
            var _a, _b;
            if (res) {
                this.faio.isAvailable().then((result) => {
                    var _a, _b, _c;
                    if (result === "face" || result === "biometric") {
                        let payload = {
                            customerId: customerId,
                            faceLoginEnable: (_a = this.bioForm.get('isFaceId')) === null || _a === void 0 ? void 0 : _a.value,
                            fingerprintLoginEnable: (_b = this.bioForm.get('isFingerPrint')) === null || _b === void 0 ? void 0 : _b.value
                        };
                        this.apiProvider.registerFaceIdORFingerPrint(payload).subscribe((res) => {
                            localStorage.setItem('customer_details', JSON.stringify(res.data));
                            this.dataService.isLoggedIn.next(true);
                            this.presentToast("Biometric Authentication has been Enabled!");
                        }, err => {
                            console.log(err);
                        });
                    }
                    else {
                        this.presentToast("Biometric Authentication Not Available in your device!");
                        (_c = this.bioForm.get('isFaceId')) === null || _c === void 0 ? void 0 : _c.patchValue(false);
                    }
                    this.cdr.markForCheck();
                }).catch((error) => {
                    var _a;
                    this.presentToast("Biometric Authentication Not Available in your device!");
                    (_a = this.bioForm.get('isFaceId')) === null || _a === void 0 ? void 0 : _a.patchValue(false);
                });
            }
            else {
                console.log("update");
                let payload = {
                    customerId: customerId,
                    faceLoginEnable: (_a = this.bioForm.get('isFaceId')) === null || _a === void 0 ? void 0 : _a.value,
                    fingerprintLoginEnable: (_b = this.bioForm.get('isFingerPrint')) === null || _b === void 0 ? void 0 : _b.value
                };
                this.apiProvider.registerFaceIdORFingerPrint(payload).subscribe((res) => {
                    localStorage.setItem('customer_details', JSON.stringify(res.data));
                    this.dataService.isLoggedIn.next(true);
                    this.presentToast("Biometric Authentication has been Enabled!");
                    this.cdr.markForCheck();
                }, err => {
                    console.log(err);
                });
            }
        });
        this.bioForm.get('isFingerPrint').valueChanges.subscribe(res => {
            var _a, _b;
            if (res) {
                this.faio.isAvailable().then((result) => {
                    var _a, _b, _c;
                    if (result === "face" || result === "biometric") {
                        let payload = {
                            customerId: customerId,
                            faceLoginEnable: (_a = this.bioForm.get('isFaceId')) === null || _a === void 0 ? void 0 : _a.value,
                            fingerprintLoginEnable: (_b = this.bioForm.get('isFingerPrint')) === null || _b === void 0 ? void 0 : _b.value
                        };
                        this.apiProvider.registerFaceIdORFingerPrint(payload).subscribe((res) => {
                            localStorage.setItem('customer_details', JSON.stringify(res.data));
                            this.dataService.isLoggedIn.next(true);
                            this.presentToast("Biometric Authentication has been Enabled!");
                        }, err => {
                            console.log(err);
                        });
                    }
                    else {
                        this.presentToast("Biometric Authentication Not Available in your device!");
                        (_c = this.bioForm.get('isFingerPrint')) === null || _c === void 0 ? void 0 : _c.patchValue(false);
                    }
                    this.cdr.markForCheck();
                }).catch((error) => {
                    var _a;
                    this.presentToast("Biometric Authentication Not Available in your device!");
                    (_a = this.bioForm.get('isFingerPrint')) === null || _a === void 0 ? void 0 : _a.patchValue(false);
                    this.cdr.markForCheck();
                });
            }
            else {
                console.log("update");
                let payload = {
                    customerId: customerId,
                    faceLoginEnable: (_a = this.bioForm.get('isFaceId')) === null || _a === void 0 ? void 0 : _a.value,
                    fingerprintLoginEnable: (_b = this.bioForm.get('isFingerPrint')) === null || _b === void 0 ? void 0 : _b.value
                };
                this.apiProvider.registerFaceIdORFingerPrint(payload).subscribe((res) => {
                    localStorage.setItem('customer_details', JSON.stringify(res.data));
                    this.dataService.isLoggedIn.next(true);
                    this.presentToast("Biometric Authentication has been Enabled!");
                    this.cdr.markForCheck();
                }, err => {
                    console.log(err);
                });
            }
        });
    }
    presentToast(msg, position) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_4__.FingerprintAIO },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
SecuritycenterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
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

module.exports = "ion-avatar {\n  --border-radius: unset;\n}\n\n.avatar-img {\n  width: auto !important;\n  object-fit: contain !important;\n}\n\n.backIcon {\n  font-size: x-large;\n  margin-bottom: 4%;\n  color: #102245;\n  display: inline-block;\n  vertical-align: middle;\n  opacity: 100%;\n}\n\n.mpin-img {\n  width: 10%;\n  margin-bottom: 5%;\n}\n\n.text {\n  margin-left: 2%;\n  margin-bottom: 4%;\n  display: inline-block;\n  vertical-align: middle;\n  color: #102245;\n  font-size: 15pt;\n  opacity: 100%;\n  font-weight: 800;\n}\n\n.labelCard {\n  margin-left: 5%;\n}\n\n.iconCard {\n  margin-bottom: 8%;\n}\n\n.item {\n  margin-top: 16px;\n}\n\n.newCard {\n  font-family: \"Montserrat\" !important;\n  opacity: 114%;\n  font-size: large;\n  margin-bottom: 10%;\n  margin-left: 3%;\n}\n\n.icon {\n  margin-left: 25%;\n  margin-top: 10%;\n  font-family: \"Montserrat\";\n}\n\n.icon2 {\n  margin-left: 5%;\n  width: 10%;\n  margin-bottom: 8%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3VyaXR5Y2VudGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBQUo7O0FBR0E7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdBO0VBS0ksZUFBQTtBQUpKOztBQU9BO0VBQ0ksaUJBQUE7QUFKSjs7QUFPQTtFQUNJLGdCQUFBO0FBSko7O0FBT0E7RUFDSSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUpKOztBQU9BO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFKSjs7QUFPQTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFKSiIsImZpbGUiOiJzZWN1cml0eWNlbnRlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYXZhdGFyIHtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogdW5zZXQ7XHJcbn1cclxuXHJcbi5hdmF0YXItaW1ne1xyXG4gICAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW4gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmJhY2tJY29uIHtcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuXHJcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICAgIGNvbG9yOiAjMTAyMjQ1O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG9wYWNpdHk6IDEwMCU7XHJcbn1cclxuXHJcbi5tcGluLWltZyB7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGNvbG9yOiAjMTAyMjQ1O1xyXG4gICAgZm9udC1zaXplOiAxNXB0O1xyXG4gICAgb3BhY2l0eTogMTAwJTtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5sYWJlbENhcmQge1xyXG4gICAgLy8gZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgLy8gb3BhY2l0eTogNzUlO1xyXG4gICAgLy8gZm9udC1zaXplOiAxM3B0O1xyXG4gICAgLy8gbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcblxyXG4uaWNvbkNhcmQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOCU7XHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cHg7XHJcbn1cclxuXHJcbi5uZXdDYXJkIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDExNCU7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG59XHJcblxyXG4uaWNvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxufVxyXG5cclxuLmljb24yIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4JTtcclxuXHJcbn0iXX0= */";

/***/ }),

/***/ 5038:
/*!**************************************************************************!*\
  !*** ./src/app/pages/securitycenter/securitycenter.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goToHome()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>{{title}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n\r\n  <ion-item class=\"item\" (click)=\"changePassword()\">\r\n    <ion-avatar slot=\"start\">\r\n      <img class=\"avatar-img\" src=\"assets/icon/security/key-sec.svg\" alt=\"Ionic logo\">\r\n    </ion-avatar>\r\n    <ion-label class=\"labelCard\">\r\n      Change Password\r\n    </ion-label>\r\n    <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n  </ion-item>\r\n\r\n\r\n  <ion-item class=\"item\">\r\n    <ion-avatar slot=\"start\">\r\n      <img class=\"avatar-img\" src=\"assets/icon/security/transaction-sec.svg\" alt=\"Ionic logo\">\r\n    </ion-avatar>\r\n    <ion-label class=\"labelCard\">\r\n      My Transaction Limits\r\n    </ion-label>\r\n    <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n  </ion-item>\r\n\r\n\r\n  <ion-item class=\"item\">\r\n    <ion-avatar slot=\"start\">\r\n      <img class=\"avatar-img\" src=\"assets/icon/security/card-service.svg\" alt=\"Ionic logo\">\r\n    </ion-avatar>\r\n    <ion-label class=\"labelCard\">\r\n      Manage Your Card\r\n    </ion-label>\r\n    <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n  </ion-item>\r\n\r\n\r\n  <ion-item class=\"item\" (click)=\"goToLoginActivity()\">\r\n    <ion-avatar slot=\"start\">\r\n      <img class=\"avatar-img\" src=\"assets/icon/security/transaction-sec.svg\" alt=\"Ionic logo\">\r\n    </ion-avatar>\r\n    <ion-label class=\"labelCard\">\r\n      Login Activity\r\n    </ion-label>\r\n    <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n  </ion-item>\r\n\r\n  <form *ngIf=\"bioForm\" [formGroup]=\"bioForm\">\r\n    <ion-item class=\"item\">\r\n      <ion-avatar slot=\"start\">\r\n        <img class=\"avatar-img\" src=\"assets/icon/security/finger-sec.svg\" alt=\"Ionic logo\">\r\n      </ion-avatar>\r\n      <ion-label class=\"labelCard\"> Enable/Disable Fingerprint</ion-label>\r\n      <ion-toggle slot=\"end\" formControlName=\"isFingerPrint\" [disabled]=\"!isDevice\">\r\n      </ion-toggle>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"item\">\r\n      <ion-avatar slot=\"start\">\r\n        <img class=\"avatar-img\" src=\"assets/icon/security/face-id-sec.svg\" alt=\"Ionic logo\">\r\n      </ion-avatar>\r\n      <ion-label class=\"labelCard\">Enable/Disable Face ID</ion-label>\r\n      <ion-toggle slot=\"end\" formControlName=\"isFaceId\" [disabled]=\"!isDevice\">\r\n      </ion-toggle>\r\n    </ion-item>\r\n  </form>\r\n\r\n\r\n  <div *ngIf=\"setmpinFlag; else showChangeMpin\">\r\n    <ion-item class=\"item\" lines=\"none\" (click)=\"changempin()\">\r\n      <ion-avatar slot=\"start\">\r\n        <img class=\"avatar-img\" src=\"assets/icon/security/feather-lock-sec.svg\" alt=\"MPIN\">\r\n      </ion-avatar>\r\n      <ion-label class=\"labelCard\">\r\n        Change login mPIN\r\n      </ion-label>\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n    </ion-item>\r\n  </div>\r\n\r\n  <ng-template #showChangeMpin>\r\n    <ion-item class=\"item\" lines=\"none\" (click)=\"setmpin()\">\r\n      <ion-avatar slot=\"start\">\r\n        <img class=\"avatar-img\" src=\"assets/icon/security/feather-lock-sec.svg\" alt=\"MPIN\">\r\n      </ion-avatar>\r\n      <ion-label class=\"labelCard\">\r\n        Set login mPIN\r\n      </ion-label>\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\"></ion-icon>\r\n    </ion-item>\r\n  </ng-template>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_securitycenter_securitycenter_module_ts.js.map