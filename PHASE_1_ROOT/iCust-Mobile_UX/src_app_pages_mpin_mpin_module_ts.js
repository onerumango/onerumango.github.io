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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _setmpin_setmpin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../setmpin/setmpin.page */ 76088);
/* harmony import */ var src_app_services_device_access_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/device-access.service */ 34910);
/* harmony import */ var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/unique-device-id/ngx */ 83181);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);











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

module.exports = "section {\n  position: relative;\n  background: url(\"/assets/images/3@3x.png\");\n  background-repeat: round;\n  color: #fff;\n  height: 40%;\n}\n\nion-toolbar {\n  --background: transparent;\n  --color: white;\n}\n\n.logo-icon {\n  margin: 0 auto;\n  text-align: start;\n  width: 175px;\n  height: 45px;\n  margin-top: 60px;\n  opacity: 100%;\n}\n\n.back-nav {\n  padding: 19px 0px 0px 0px;\n}\n\n.back-nav-color {\n  color: #000000 !important;\n}\n\n.item-box-white {\n  width: 100%;\n  height: 100%;\n  background: #ffffff;\n  border-radius: 60px 0 0 0;\n  height: 60%;\n  position: absolute;\n}\n\n.login-logo {\n  padding: 20px;\n  min-height: 140px;\n  margin-top: 15%;\n  text-align: center;\n}\n\n.login-logo img {\n  max-width: 120px;\n  margin-top: -9%;\n}\n\n.otp-text {\n  color: #B1B1B1;\n  font-size: 15px;\n  opacity: 83%;\n}\n\n.forgot,\na {\n  text-align: center;\n  font-size: 18px;\n  color: #456EFE !important;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n}\n\n.fieldCard {\n  padding-top: 50%;\n  padding-left: 5%;\n}\n\n.subtitle {\n  padding-left: 5%;\n}\n\n.form-box {\n  padding: 25px;\n  height: 250px;\n  position: relative;\n  top: -10%;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.m_pin {\n  font-weight: 700;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1waW4ucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcR0lUSFVCJTIwUkVQT1NJVE9SWV9VSVxcaUN1c3RNb2JpbGUtdjJcXHNyY1xcYXBwXFxwYWdlc1xcbXBpblxcbXBpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFFQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTs7RUFFRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtBQ0FGOztBREdBO0VBRUUsYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQ0RGOztBRElBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDREYiLCJmaWxlIjoibXBpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy8zQDN4LnBuZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBoZWlnaHQ6IDQwJTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5sb2dvLWljb24ge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIHdpZHRoOiAxNzVweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICBvcGFjaXR5OiAxMDAlO1xyXG59XHJcblxyXG4uYmFjay1uYXYge1xyXG4gIHBhZGRpbmc6IDE5cHggMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5iYWNrLW5hdi1jb2xvciB7XHJcbiAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLml0ZW0tYm94LXdoaXRlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiA2MHB4IDAgMCAwO1xyXG4gIGhlaWdodDogNjAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmxvZ2luLWxvZ28ge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgLy8gbWluLWhlaWdodDogMTkwcHg7XHJcbiAgbWluLWhlaWdodDogMTQwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTUlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luLWxvZ28gaW1nIHtcclxuICBtYXgtd2lkdGg6IDEyMHB4O1xyXG4gIG1hcmdpbi10b3A6IC05JTtcclxufVxyXG5cclxuLm90cC10ZXh0IHtcclxuICBjb2xvcjogI0IxQjFCMTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgb3BhY2l0eTogODMlO1xyXG59XHJcblxyXG4uZm9yZ290LFxyXG5hIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGNvbG9yOiAjNDU2RUZFICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5maWVsZENhcmQge1xyXG4gIHBhZGRpbmctdG9wOiA1MCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxufVxyXG5cclxuLnN1YnRpdGxlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG59XHJcblxyXG4uZm9ybS1ib3gge1xyXG4gIC8vIHdpZHRoOiAzMDBweDtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTEwJTtcclxuICBib3R0b206IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4ubV9waW4ge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59Iiwic2VjdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvM0AzeC5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogNDAlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4ubG9nby1pY29uIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICB3aWR0aDogMTc1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgb3BhY2l0eTogMTAwJTtcbn1cblxuLmJhY2stbmF2IHtcbiAgcGFkZGluZzogMTlweCAwcHggMHB4IDBweDtcbn1cblxuLmJhY2stbmF2LWNvbG9yIHtcbiAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbn1cblxuLml0ZW0tYm94LXdoaXRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNjBweCAwIDAgMDtcbiAgaGVpZ2h0OiA2MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmxvZ2luLWxvZ28ge1xuICBwYWRkaW5nOiAyMHB4O1xuICBtaW4taGVpZ2h0OiAxNDBweDtcbiAgbWFyZ2luLXRvcDogMTUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1sb2dvIGltZyB7XG4gIG1heC13aWR0aDogMTIwcHg7XG4gIG1hcmdpbi10b3A6IC05JTtcbn1cblxuLm90cC10ZXh0IHtcbiAgY29sb3I6ICNCMUIxQjE7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgb3BhY2l0eTogODMlO1xufVxuXG4uZm9yZ290LFxuYSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogIzQ1NkVGRSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZmllbGRDYXJkIHtcbiAgcGFkZGluZy10b3A6IDUwJTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxuLnN1YnRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxuLmZvcm0tYm94IHtcbiAgcGFkZGluZzogMjVweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xMCU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm1fcGluIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xufSJdfQ== */";

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