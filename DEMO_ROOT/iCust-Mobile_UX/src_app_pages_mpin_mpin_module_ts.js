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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _mpin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mpin.page.html?ngResource */ 40741);
/* harmony import */ var _mpin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mpin.page.scss?ngResource */ 89951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _setmpin_setmpin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../setmpin/setmpin.page */ 76088);
/* harmony import */ var src_app_services_device_access_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/device-access.service */ 34910);










let MpinPage = class MpinPage {
    constructor(router, fb, api, toastCtrl, device) {
        this.router = router;
        this.fb = fb;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.device = device;
        this.mpin = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl();
        this.mpinobj = new _setmpin_setmpin_page__WEBPACK_IMPORTED_MODULE_3__.mpinObjects();
        this.isLoading = false;
        this.config = {
            allowNumbersOnly: true,
            length: 4,
            isPasswordInput: false,
            disableAutoFocus: false,
            placeholder: '',
            inputStyles: {
                'width': '40px',
                'height': '40px'
            }
        };
    }
    ngOnInit() {
        this.customerPhonenum = localStorage.getItem('customerPhonenum');
        this.mpinForm = this.fb.group({
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            mpin: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            deviceId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
    }
    back() {
        this.router.navigateByUrl('/login-landing');
    }
    forgotmpin() {
        this.router.navigateByUrl('/forgotmpin');
    }
    goToDashboard() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.mpin.value || this.mpin.value.length < 4) {
                this.openToast('Enter a valid mPin');
                return;
            }
            const deviceId = yield this.device.getDeviceId();
            console.log(deviceId);
            console.log(this.mpin.value);
            this.mpinobj.mpin = this.mpin.value;
            this.mpinobj.deviceId = deviceId;
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
    openToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController },
    { type: src_app_services_device_access_service__WEBPACK_IMPORTED_MODULE_4__.DeviceAccess }
];
MpinPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
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

module.exports = "section {\n  position: relative;\n  background: url('3@3x.png');\n  background-repeat: round;\n  color: #fff;\n  height: 40%;\n}\n\n.logo-icon {\n  margin: 0 auto;\n  text-align: start;\n  width: 175px;\n  height: 45px;\n  margin-top: 60px;\n  opacity: 100%;\n}\n\n.back-nav {\n  padding: 19px 0px 0px 0px;\n}\n\n.back-nav-color {\n  color: #000000 !important;\n}\n\n.item-box-white {\n  width: 100%;\n  height: 100%;\n  background: #ffffff;\n  border-radius: 60px 0 0 0;\n  height: 60%;\n  position: absolute;\n}\n\n.login-logo {\n  padding: 20px;\n  min-height: 140px;\n  margin-top: 15%;\n  text-align: center;\n}\n\n.login-logo img {\n  max-width: 120px;\n  margin-top: -9%;\n}\n\n.otp-text {\n  color: #B1B1B1;\n  font-size: 15px;\n  opacity: 83%;\n}\n\n.forgot,\na {\n  text-align: center;\n  font-size: 18px;\n  color: #456EFE !important;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n}\n\n.fieldCard {\n  padding-top: 50%;\n  padding-left: 5%;\n}\n\n.subtitle {\n  padding-left: 5%;\n}\n\n.form-box {\n  padding: 25px;\n  height: 250px;\n  position: relative;\n  top: -10%;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.m_pin {\n  font-weight: 700;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1waW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtBQUNKOztBQUVFO0VBQ0UseUJBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtFQUVBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdFOztFQUVFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHRTtFQUNFLGdCQUFBO0FBQUo7O0FBR0U7RUFFRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBREo7O0FBSUU7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFESiIsImZpbGUiOiJtcGluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzLzNAM3gucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gIH1cclxuICBcclxuICAubG9nby1pY29uIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICB3aWR0aDogMTc1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgb3BhY2l0eTogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmJhY2stbmF2IHtcclxuICAgIHBhZGRpbmc6IDE5cHggMHB4IDBweCAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5iYWNrLW5hdi1jb2xvciB7XHJcbiAgICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuaXRlbS1ib3gtd2hpdGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNjBweCAwIDAgMDtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuICBcclxuICAubG9naW4tbG9nbyB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgLy8gbWluLWhlaWdodDogMTkwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxNDBweDtcclxuICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWxvZ28gaW1nIHtcclxuICAgIG1heC13aWR0aDogMTIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtOSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5vdHAtdGV4dCB7XHJcbiAgICBjb2xvcjogI0IxQjFCMTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG9wYWNpdHk6IDgzJTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcmdvdCxcclxuICBhIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGNvbG9yOiAjNDU2RUZFICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5maWVsZENhcmQge1xyXG4gICAgcGFkZGluZy10b3A6IDUwJTtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdWJ0aXRsZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1ib3gge1xyXG4gICAgLy8gd2lkdGg6IDMwMHB4O1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0xMCU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcblxyXG4gIC5tX3BpbntcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 40741:
/*!******************************************************!*\
  !*** ./src/app/pages/mpin/mpin.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <section>\r\n    <div class=\"back-nav\">\r\n      <ion-button fill=\"clear\" (click)=\"back()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" class=\"back-nav-color\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n\r\n    <div class=\"logo-icon\">\r\n      <div class=\"logo\"><img src=\"assets/images/Demobank.svg\" class=\"w-100\"></div>\r\n    </div>\r\n  </section>\r\n  <div class=\"item-box-white\">\r\n    <div class=\"form-box\">\r\n      <form class=\"form_container\" [formGroup]=\"mpinForm\" novalidate>\r\n        <div class=\"otp-box text-left\">\r\n          <ion-text>\r\n            <h4 class=\"m_pin\">Enter your 4 digit mPIN</h4>\r\n            <p class=\"otp-text\">An authentiction need to enter your mPIN </p>\r\n            <!-- <h6>{{customerPhonenum}}</h6> -->\r\n          </ion-text>\r\n        </div>\r\n        <!-- OTP INPUT START -->\r\n        <div class=\"text-center my-5\">\r\n          <ng-otp-input [formCtrl]=\"mpin\" [config]=\"config\"></ng-otp-input>\r\n        </div>\r\n         <!-- OTP INPUT END -->\r\n        <div class=\"forgot my-5\" (click)=\"forgotmpin()\">\r\n          <a class=\"text-center\">Forgot mPIN</a>\r\n        </div>\r\n      </form>\r\n      <div class=\"my-5\">\r\n        <ng-container *ngIf=\"isLoading; else showLoading\">\r\n          <ion-button expand=\"full\" shape=\"round\" class=\"my-5\">\r\n            <ion-spinner name=\"circles\"></ion-spinner>\r\n          </ion-button>\r\n        </ng-container>\r\n        <ng-template #showLoading>\r\n          <ion-button expand=\"full\" shape=\"round\" class=\"my-5\" (click)=\"goToDashboard()\">\r\n            CONTINUE\r\n          </ion-button>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mpin_mpin_module_ts.js.map