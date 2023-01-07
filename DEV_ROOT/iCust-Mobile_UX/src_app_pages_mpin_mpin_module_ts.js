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
                        this.router.navigate(['dashboard']);
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
                position: 'middle',
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

module.exports = "section {\n  position: relative;\n  background: url('3@3x.png');\n  background-repeat: round;\n  color: #fff;\n  height: 40%;\n}\n\n.logo-icon {\n  margin: 0 auto;\n  text-align: start;\n  width: 175px;\n  height: 45px;\n  margin-top: 60px;\n  opacity: 100%;\n}\n\n.back-nav {\n  padding: 19px 0px 0px 0px;\n}\n\n.back-nav-color {\n  color: #000000 !important;\n}\n\n.item-box-white {\n  width: 100%;\n  height: 100%;\n  background: #ffffff;\n  border-radius: 60px 0 0 0;\n  height: 60%;\n  position: absolute;\n}\n\n.login-logo {\n  padding: 20px;\n  min-height: 140px;\n  margin-top: 15%;\n  text-align: center;\n}\n\n.login-logo img {\n  max-width: 120px;\n  margin-top: -9%;\n}\n\n.otp-text {\n  color: #B1B1B1;\n  font-size: 15px;\n  opacity: 83%;\n}\n\n.forgot,\na {\n  text-align: center;\n  font-size: 18px;\n  color: #456EFE !important;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n}\n\n.fieldCard {\n  padding-top: 50%;\n  padding-left: 5%;\n}\n\n.subtitle {\n  padding-left: 5%;\n}\n\n.form-box {\n  padding: 25px;\n  height: 250px;\n  position: relative;\n  top: -10%;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.m_pin {\n  font-weight: 700;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1waW4ucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0SHViJTIwUmVwb3NpdG9yeSUyMG9sZFxcaUN1c3RNb2JpbGUtdjJcXHNyY1xcYXBwXFxwYWdlc1xcbXBpblxcbXBpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFRTtFQUNFLHlCQUFBO0FDQ0o7O0FERUU7RUFDRSx5QkFBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0VBRUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDQUo7O0FER0U7O0VBRUUsa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0FKOztBREdFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdFO0VBQ0UsZ0JBQUE7QUNBSjs7QURHRTtFQUVFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUNESjs7QURJRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0RKIiwiZmlsZSI6Im1waW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvM0AzeC5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dvLWljb24ge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIHdpZHRoOiAxNzVweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICBvcGFjaXR5OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuYmFjay1uYXYge1xyXG4gICAgcGFkZGluZzogMTlweCAwcHggMHB4IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJhY2stbmF2LWNvbG9yIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5pdGVtLWJveC13aGl0ZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4IDAgMCAwO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi1sb2dvIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAvLyBtaW4taGVpZ2h0OiAxOTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDE0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAubG9naW4tbG9nbyBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC05JTtcclxuICB9XHJcbiAgXHJcbiAgLm90cC10ZXh0IHtcclxuICAgIGNvbG9yOiAjQjFCMUIxO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgb3BhY2l0eTogODMlO1xyXG4gIH1cclxuICBcclxuICAuZm9yZ290LFxyXG4gIGEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICM0NTZFRkUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmZpZWxkQ2FyZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICB9XHJcbiAgXHJcbiAgLnN1YnRpdGxlIHtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWJveCB7XHJcbiAgICAvLyB3aWR0aDogMzAwcHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTEwJTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgLm1fcGlue1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9Iiwic2VjdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy8zQDN4LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJvdW5kO1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiA0MCU7XG59XG5cbi5sb2dvLWljb24ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIHdpZHRoOiAxNzVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICBvcGFjaXR5OiAxMDAlO1xufVxuXG4uYmFjay1uYXYge1xuICBwYWRkaW5nOiAxOXB4IDBweCAwcHggMHB4O1xufVxuXG4uYmFjay1uYXYtY29sb3Ige1xuICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xufVxuXG4uaXRlbS1ib3gtd2hpdGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA2MHB4IDAgMCAwO1xuICBoZWlnaHQ6IDYwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubG9naW4tbG9nbyB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1pbi1oZWlnaHQ6IDE0MHB4O1xuICBtYXJnaW4tdG9wOiAxNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luLWxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAxMjBweDtcbiAgbWFyZ2luLXRvcDogLTklO1xufVxuXG4ub3RwLXRleHQge1xuICBjb2xvcjogI0IxQjFCMTtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBvcGFjaXR5OiA4MyU7XG59XG5cbi5mb3Jnb3QsXG5hIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGNvbG9yOiAjNDU2RUZFICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5maWVsZENhcmQge1xuICBwYWRkaW5nLXRvcDogNTAlO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xufVxuXG4uc3VidGl0bGUge1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xufVxuXG4uZm9ybS1ib3gge1xuICBwYWRkaW5nOiAyNXB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEwJTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4ubV9waW4ge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDI0cHg7XG59Il19 */";

/***/ }),

/***/ 40741:
/*!******************************************************!*\
  !*** ./src/app/pages/mpin/mpin.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <section>\r\n    <div class=\"back-nav\">\r\n      <ion-button fill=\"clear\" (click)=\"back()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" class=\"back-nav-color\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n\r\n    <div class=\"logo-icon\">\r\n      <div class=\"logo\"><img src=\"assets/images/Demobank.svg\" class=\"w-100\"></div>\r\n    </div>\r\n  </section>\r\n  <div class=\"item-box-white\">\r\n    <div class=\"form-box\">\r\n      <form class=\"form_container\" [formGroup]=\"mpinForm\" novalidate>\r\n        <div class=\"otp-box text-left\">\r\n          <ion-text>\r\n            <h4 class=\"m_pin\">Enter your 4 digit mPIN</h4>\r\n            <p class=\"otp-text\">An authentiction need to enter your mPIN </p>\r\n            <!-- <h6>{{customerPhonenum}}</h6> -->\r\n          </ion-text>\r\n        </div>\r\n        <!-- OTP INPUT START -->\r\n        <div class=\"text-center my-5\">\r\n          <ng-otp-input [formCtrl]=\"mpin\" [config]=\"{length:4}\"></ng-otp-input>\r\n        </div>\r\n         <!-- OTP INPUT END -->\r\n        <div class=\"forgot my-5\" (click)=\"forgotmpin()\">\r\n          <a class=\"text-center\">Forgot mPIN</a>\r\n        </div>\r\n      </form>\r\n      <div class=\"my-5\">\r\n        <ng-container *ngIf=\"isLoading; else showLoading\">\r\n          <ion-button expand=\"full\" shape=\"round\" class=\"my-5\">\r\n            <ion-spinner name=\"circles\"></ion-spinner>\r\n          </ion-button>\r\n        </ng-container>\r\n        <ng-template #showLoading>\r\n          <ion-button expand=\"full\" shape=\"round\" class=\"my-5\" (click)=\"goToDashboard()\">\r\n            CONTINUE\r\n          </ion-button>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mpin_mpin_module_ts.js.map