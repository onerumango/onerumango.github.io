"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_mpin_mpin_module_ts"],{

/***/ 55521:
/*!***************************************************!*\
  !*** ./src/app/pages/mpin/mpin-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MpinPageRoutingModule": () => (/* binding */ MpinPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _mpin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mpin.page */ 91700);




const routes = [
    {
        path: '',
        component: _mpin_page__WEBPACK_IMPORTED_MODULE_0__.MpinPage
    }
];
let MpinPageRoutingModule = class MpinPageRoutingModule {
};
MpinPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MpinPageRoutingModule);



/***/ }),

/***/ 73777:
/*!*******************************************!*\
  !*** ./src/app/pages/mpin/mpin.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MpinPageModule": () => (/* binding */ MpinPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _mpin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mpin-routing.module */ 55521);
/* harmony import */ var _mpin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mpin.page */ 91700);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-otp-input */ 2981);








let MpinPageModule = class MpinPageModule {
};
MpinPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            ng_otp_input__WEBPACK_IMPORTED_MODULE_7__.NgOtpInputModule,
            _mpin_routing_module__WEBPACK_IMPORTED_MODULE_0__.MpinPageRoutingModule
        ],
        declarations: [_mpin_page__WEBPACK_IMPORTED_MODULE_1__.MpinPage]
    })
], MpinPageModule);



/***/ }),

/***/ 91700:
/*!*****************************************!*\
  !*** ./src/app/pages/mpin/mpin.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MpinPage": () => (/* binding */ MpinPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _mpin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mpin.page.html?ngResource */ 40741);
/* harmony import */ var _mpin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mpin.page.scss?ngResource */ 89951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _setmpin_setmpin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../setmpin/setmpin.page */ 76088);
/* harmony import */ var src_app_services_device_access_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/device-access.service */ 34910);
/* harmony import */ var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/unique-device-id/ngx */ 83181);











let MpinPage = class MpinPage {
    constructor(router, fb, api, toastCtrl, device, cdk, uniqueDeviceID) {
        this.router = router;
        this.fb = fb;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.device = device;
        this.cdk = cdk;
        this.uniqueDeviceID = uniqueDeviceID;
        this.mpin = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl();
        this.mpinobj = new _setmpin_setmpin_page__WEBPACK_IMPORTED_MODULE_3__.mpinObjects();
        this.isLoading = false;
        this.config = {
            allowNumbersOnly: true,
            length: 4,
            isPasswordInput: true,
            disableAutoFocus: false,
            placeholder: '*',
            inputStyles: {
                'width': '50px',
                'height': '50px'
            }
        };
    }
    ngOnInit() {
        this.customerPhonenum = localStorage.getItem('customerPhonenum');
        this.mpinForm = this.fb.group({
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            mpin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            deviceId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
    }
    ionViewWillEnter() {
        this.getUniqueDeviceID();
    }
    getUniqueDeviceID() {
        this.uniqueDeviceID.get()
            .then((uuid) => {
            console.log(uuid);
            this.deviceUUID = uuid;
        })
            .catch((error) => {
            console.log(error);
            this.deviceUUID = "";
        });
    }
    back() {
        this.router.navigateByUrl('/login-landing');
    }
    forgotmpin() {
        this.router.navigateByUrl('/forgotmpin');
    }
    goToDashboard() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.mpin.value || this.mpin.value.length < 4) {
                this.openToast('Enter a valid mPin');
                return;
            }
            console.log(this.mpin.value);
            this.mpinobj.mpin = this.mpin.value;
            this.mpinobj.deviceId = this.deviceUUID;
            this.api.authenticateMpin(this.mpinobj).subscribe((resp) => {
                console.log('validate password-- ', resp);
                resp = resp.body;
                if (resp != null) {
                    if (resp.custStatus === 'APPROVED') {
                        resp.custAccount = resp.custAccount.filter((card) => card.status === 'APPROVED');
                        const cards = JSON.stringify(resp.custAccount);
                        localStorage.setItem('cardData', cards);
                        localStorage.setItem('customerPhonenum', resp.phoneNumber);
                        sessionStorage.setItem('customer_id', resp.cifNumber);
                        localStorage.setItem('firstName', resp === null || resp === void 0 ? void 0 : resp.firstName);
                        localStorage.setItem('lastName', resp === null || resp === void 0 ? void 0 : resp.lastName);
                        localStorage.setItem('customer_details', JSON.stringify(resp));
                        this.openToast('Login Successful');
                        this.router.navigate(['dashboard'], { replaceUrl: true });
                        this.isLoading = false;
                    }
                    else {
                        this.openToast('Customer Id or Account Status is not approved');
                        this.isLoading = false;
                    }
                }
                // if (data.mpin) {
                //   console.log("data")
                //   const navigationExtras: NavigationExtras = {
                //     queryParams: {
                //       'screenDetails': 'mPIN Password Changed!',
                //       'screenDescription':'Your mPIN password has been changed successfully'
                //     },
                //   };
                // this.api.sendNavParam(navigationExtras);
                this.router.navigate(['dashboard']);
                // }
            }, (error) => {
                console.log('Error :: ', error);
                this.openToast('User doesn\'t exist with current mPin');
            });
        });
    }
    obscureText() {
        this.config.isPasswordInput = !this.config.isPasswordInput;
        this.cdk.markForCheck();
    }
    openToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: `${message}`,
                duration: 2500,
                position: 'bottom',
            });
            toast.present();
        });
    }
};
MpinPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: src_app_services_device_access_service__WEBPACK_IMPORTED_MODULE_4__.DeviceAccess },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef },
    { type: _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_5__.UniqueDeviceID }
];
MpinPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-mpin',
        template: _mpin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_mpin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MpinPage);



/***/ }),

/***/ 89951:
/*!******************************************************!*\
  !*** ./src/app/pages/mpin/mpin.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "section {\n  position: relative;\n  background: url(\"/assets/images/3@3x.png\");\n  background-repeat: round;\n  color: #fff;\n  height: 40%;\n}\n\nion-toolbar {\n  --background: transparent;\n  --color: white;\n}\n\n.logo-icon {\n  margin: 0 auto;\n  text-align: start;\n  width: 175px;\n  height: 45px;\n  margin-top: 60px;\n  opacity: 100%;\n}\n\n.back-nav {\n  padding: 19px 0px 0px 0px;\n}\n\n.back-nav-color {\n  color: #000000 !important;\n}\n\n.item-box-white {\n  width: 100%;\n  height: 100%;\n  background: #ffffff;\n  border-radius: 60px 0 0 0;\n  height: 60%;\n  position: absolute;\n}\n\n.login-logo {\n  padding: 20px;\n  min-height: 140px;\n  margin-top: 15%;\n  text-align: center;\n}\n\n.login-logo img {\n  max-width: 120px;\n  margin-top: -9%;\n}\n\n.otp-text {\n  color: #B1B1B1;\n  font-size: 15px;\n  opacity: 83%;\n}\n\n.forgot,\na {\n  text-align: center;\n  font-size: 18px;\n  color: #456EFE !important;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n}\n\n.fieldCard {\n  padding-top: 50%;\n  padding-left: 5%;\n}\n\n.subtitle {\n  padding-left: 5%;\n}\n\n.form-box {\n  padding: 25px;\n  height: 250px;\n  position: relative;\n  top: -10%;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.m_pin {\n  font-weight: 700;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1waW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBRUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQUY7O0FBR0E7O0VBRUUsa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7QUFBRjs7QUFHQTtFQUVFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFERjs7QUFJQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQURGIiwiZmlsZSI6Im1waW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvM0AzeC5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgaGVpZ2h0OiA0MCU7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubG9nby1pY29uIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICB3aWR0aDogMTc1cHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgb3BhY2l0eTogMTAwJTtcclxufVxyXG5cclxuLmJhY2stbmF2IHtcclxuICBwYWRkaW5nOiAxOXB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG4uYmFjay1uYXYtY29sb3Ige1xyXG4gIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pdGVtLWJveC13aGl0ZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNjBweCAwIDAgMDtcclxuICBoZWlnaHQ6IDYwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5sb2dpbi1sb2dvIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIC8vIG1pbi1oZWlnaHQ6IDE5MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDE0MHB4O1xyXG4gIG1hcmdpbi10b3A6IDE1JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1sb2dvIGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMjBweDtcclxuICBtYXJnaW4tdG9wOiAtOSU7XHJcbn1cclxuXHJcbi5vdHAtdGV4dCB7XHJcbiAgY29sb3I6ICNCMUIxQjE7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG9wYWNpdHk6IDgzJTtcclxufVxyXG5cclxuLmZvcmdvdCxcclxuYSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogIzQ1NkVGRSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZmllbGRDYXJkIHtcclxuICBwYWRkaW5nLXRvcDogNTAlO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxufVxyXG5cclxuLmZvcm0tYm94IHtcclxuICAvLyB3aWR0aDogMzAwcHg7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0xMCU7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLm1fcGluIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxufSJdfQ== */";

/***/ }),

/***/ 40741:
/*!******************************************************!*\
  !*** ./src/app/pages/mpin/mpin.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <section>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button fill=\"clear\" (click)=\"back()\">\r\n          <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" class=\"back-nav-color\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n\r\n    <div class=\"logo-icon\">\r\n      <div class=\"logo\"><img src=\"assets/images/Demobank.svg\" class=\"w-100\"></div>\r\n    </div>\r\n  </section>\r\n  <div class=\"item-box-white\">\r\n    <div class=\"form-box\">\r\n      <form class=\"form_container\" [formGroup]=\"mpinForm\" novalidate>\r\n        <div class=\"otp-box text-left\">\r\n          <ion-text>\r\n            <h4 class=\"m_pin\">Enter your 4 digit mPIN</h4>\r\n            <p class=\"otp-text\">An authentiction need to enter your mPIN </p>\r\n            <!-- <h6>{{customerPhonenum}}</h6> -->\r\n          </ion-text>\r\n        </div>\r\n        <!-- OTP INPUT START -->\r\n        <div class=\"text-center my-5\">\r\n          <ng-otp-input [formCtrl]=\"mpin\" [config]=\"config\"></ng-otp-input>\r\n        </div>\r\n         <!-- OTP INPUT END -->\r\n         <ion-grid>\r\n          <ion-row  class=\"ion-justify-content-around\">\r\n            <ion-col>\r\n              <div class=\"forgot my-3\">\r\n                <a class=\"text-center\" (click)=\"forgotmpin()\">Forgot mPIN</a>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col>\r\n              <div class=\"forgot my-3\">\r\n                <a class=\"text-center\" (click)=\"obscureText()\">{{ config?.isPasswordInput ? 'View mPIN' : 'Hide mPIN'}}</a>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n      </form>\r\n      <div class=\"my-5\">\r\n        <ng-container *ngIf=\"isLoading; else showLoading\">\r\n          <ion-button expand=\"full\" shape=\"round\" class=\"my-5\">\r\n            <ion-spinner name=\"circles\"></ion-spinner>\r\n          </ion-button>\r\n        </ng-container>\r\n        <ng-template #showLoading>\r\n          <ion-button expand=\"full\" shape=\"round\" class=\"my-5\" (click)=\"goToDashboard()\">\r\n            CONTINUE\r\n          </ion-button>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mpin_mpin_module_ts.js.map