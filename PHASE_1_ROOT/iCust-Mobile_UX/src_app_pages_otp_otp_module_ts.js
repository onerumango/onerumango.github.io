"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_otp_otp_module_ts"],{

/***/ 47315:
/*!*************************************************!*\
  !*** ./src/app/pages/otp/otp-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpPageRoutingModule": () => (/* binding */ OtpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _otp_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp.page */ 53369);




const routes = [
    {
        path: '',
        component: _otp_page__WEBPACK_IMPORTED_MODULE_0__.OtpPage
    }
];
let OtpPageRoutingModule = class OtpPageRoutingModule {
};
OtpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], OtpPageRoutingModule);



/***/ }),

/***/ 17631:
/*!*****************************************!*\
  !*** ./src/app/pages/otp/otp.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpPageModule": () => (/* binding */ OtpPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _otp_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp-routing.module */ 47315);
/* harmony import */ var _otp_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp.page */ 53369);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-otp-input */ 2981);









let OtpPageModule = class OtpPageModule {
};
OtpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            ng_otp_input__WEBPACK_IMPORTED_MODULE_7__.NgOtpInputModule,
            _otp_routing_module__WEBPACK_IMPORTED_MODULE_0__.OtpPageRoutingModule,
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrModule.forRoot()
        ],
        declarations: [_otp_page__WEBPACK_IMPORTED_MODULE_1__.OtpPage],
        providers: [ngx_toastr__WEBPACK_IMPORTED_MODULE_8__.ToastrService]
    })
], OtpPageModule);



/***/ }),

/***/ 53369:
/*!***************************************!*\
  !*** ./src/app/pages/otp/otp.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpPage": () => (/* binding */ OtpPage),
/* harmony export */   "otpModel": () => (/* binding */ otpModel),
/* harmony export */   "verifyotpModel": () => (/* binding */ verifyotpModel)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _otp_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./otp.page.html?ngResource */ 93684);
/* harmony import */ var _otp_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp.page.scss?ngResource */ 79706);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ 34101);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ 52468);












class otpModel {
}
class verifyotpModel {
}
let OtpPage = class OtpPage {
    constructor(cdk, router, fb, api, toastr, toastCtrl, _location, dataService) {
        this.cdk = cdk;
        this.router = router;
        this.fb = fb;
        this.api = api;
        this.toastr = toastr;
        this.toastCtrl = toastCtrl;
        this._location = _location;
        this.dataService = dataService;
        this.otpValue = null;
        this.otpValid = false;
        this.verifyOtpModel = new verifyotpModel();
        this.oTpModel = new otpModel();
        this.showPassword = false;
        this.showOtp = false;
        this.userPasswordUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.otp = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl();
        this.countryCode = '+91';
        this.errMsg = '';
        this.isLoading = false;
        this.config = {
            allowNumbersOnly: true,
            length: 6,
            isPasswordInput: true,
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
        this.otpForm = this.fb.group({
            phoneNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            otp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
        this.PhoneNumLogin = localStorage.getItem('customerPhonenum');
        this.navSubscription = this.api.getNavParam.subscribe((data) => (this.screenNames = data));
    }
    onOtpChange() {
    }
    getOTP() {
        this.oTpModel.source = 'customer';
        this.oTpModel.source_key = 'mobile';
        this.oTpModel.source_value = this.customerPhonenum;
        this.oTpModel.isMobileLogin = true;
        this.api.getOtp(this.oTpModel).subscribe((res) => {
            if (res.status == 200) {
                this.openToast(res === null || res === void 0 ? void 0 : res.message);
            }
            else {
                this.openToast(res === null || res === void 0 ? void 0 : res.message);
            }
        }, (err) => {
            this.openToast(err);
        });
        ;
    }
    resendOTP() {
        this.ngOtpInput.setValue('');
        this.getOTP();
    }
    validateOtp() {
        console.log(this.customerPhonenum);
        this.verifyOtpModel.sourceKey = 'mobile';
        this.verifyOtpModel.sourceValue = this.customerPhonenum;
        this.verifyOtpModel.otp = this.otp.value;
        this.verifyOtpModel.type = '';
        this.verifyOtpModel.isMobileLogin = true;
        this.isLoading = true;
        this.api.verifyOtp(this.verifyOtpModel).subscribe((otpResp) => {
            var _a, _b, _c, _d, _e;
            if ((otpResp === null || otpResp === void 0 ? void 0 : otpResp.status) == 200) {
                if (((_a = otpResp['data']) === null || _a === void 0 ? void 0 : _a.firstTimeLogin) == "Y") {
                    localStorage.setItem('customerPhonenum', this.customerPhonenum);
                    const navigationExtras = {
                        queryParams: {
                            'screenName': 'reset'
                        },
                    };
                    this.api.sendNavParam(navigationExtras);
                    this.router.navigateByUrl('/new-passwordchange');
                }
                else {
                    // TODO:
                    if (this.screenNames) {
                        if (this.screenNames.queryParams.screenName == "mpinotpValidate" || this.screenNames.queryParams.screenName == "forgotmpin") {
                            const navigationExtras = {
                                queryParams: {
                                    'screenName': 'forgotmpin'
                                },
                            };
                            this.api.sendNavParam(navigationExtras);
                            this.router.navigateByUrl('/setmpin');
                        }
                        else if (this.screenNames.queryParams.screenName == "forget-password") {
                            const navigationExtras = {
                                queryParams: {
                                    'screenName': 'forget-password'
                                },
                            };
                            this.api.sendNavParam(navigationExtras);
                            this.router.navigateByUrl('/new-passwordchange');
                        }
                        else {
                            sessionStorage.setItem('customer_id', (_b = otpResp['data']) === null || _b === void 0 ? void 0 : _b.customerId);
                            localStorage.setItem('firstName', (_c = otpResp['data']) === null || _c === void 0 ? void 0 : _c.firstName);
                            localStorage.setItem('lastName', (_d = otpResp['data']) === null || _d === void 0 ? void 0 : _d.lastName);
                            localStorage.setItem('customer_id', (_e = otpResp['data']) === null || _e === void 0 ? void 0 : _e.customerId);
                            localStorage.setItem('customer_details', JSON.stringify(otpResp['data']));
                            localStorage.setItem('isShowed', "no");
                            this.router.navigate(['dashboard'], { replaceUrl: true });
                            this.otpForm.reset();
                            this.dataService.isLoggedIn.next(true);
                            this.openToast(otpResp === null || otpResp === void 0 ? void 0 : otpResp.message);
                        }
                    }
                }
            }
            else {
                this.router.navigateByUrl('/login');
                this.openToast(otpResp === null || otpResp === void 0 ? void 0 : otpResp.message);
            }
            this.isLoading = false;
        }, (err) => {
            this.errMsg = 'Please enter a valid OTP';
            setTimeout(() => this.errMsg = '', 3000);
            this.isLoading = false;
        });
    }
    goBack() {
        this.router.navigateByUrl('/login');
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
    openToast1(errorMessage) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: `${errorMessage}`,
                duration: 2500,
                position: 'bottom',
            });
            toast.present();
        });
    }
    back() {
        this._location.back();
    }
    obscureText() {
        this.config.isPasswordInput = !this.config.isPasswordInput;
        this.cdk.markForCheck();
    }
};
OtpPage.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__.ToastrService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.Location },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService }
];
OtpPage.propDecorators = {
    ngOtpInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ViewChild, args: ['ngOtpInput', { static: false },] }]
};
OtpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-otp',
        template: _otp_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_otp_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], OtpPage);



/***/ }),

/***/ 79706:
/*!****************************************************!*\
  !*** ./src/app/pages/otp/otp.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "section {\n  position: relative;\n  background: url(\"/assets/images/3@3x.png\");\n  background-repeat: round;\n  color: #fff;\n  height: 40%;\n}\n\nion-toolbar {\n  --background: transparent;\n  --color: white;\n}\n\n.logo-icon {\n  margin: 0 auto;\n  text-align: start;\n  width: 175px;\n  height: 45px;\n  margin-top: 62px;\n  opacity: 100%;\n}\n\n.back-nav {\n  padding: 19px 0px 0px 0px;\n}\n\n.back-nav-color {\n  color: #000000 !important;\n}\n\n.item-box-white {\n  width: 100%;\n  height: 100%;\n  background: #ffffff;\n  border-radius: 60px 0 0 0;\n  height: 60%;\n  position: absolute;\n}\n\n.login-logo {\n  padding: 20px;\n  min-height: 140px;\n  margin-top: 15%;\n  text-align: center;\n}\n\n.login-logo img {\n  max-width: 120px;\n  margin-top: -9%;\n}\n\n.otp_title {\n  font-size: 23px;\n}\n\n.otp-text {\n  color: #A2A0A8;\n  font-size: 15px;\n  font-weight: 400;\n  margin: 0;\n}\n\n.forgot,\na {\n  text-align: center;\n  font-size: 18px;\n  font-weight: 600;\n  color: #456EFE !important;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n}\n\n.fieldCard {\n  padding-top: 50%;\n  padding-left: 5%;\n}\n\n.subtitle {\n  padding-left: 5%;\n}\n\n.form-box {\n  padding: 25px;\n  height: 100%;\n  position: relative;\n  top: -10%;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.font_bold {\n  font-weight: 700;\n}\n\n.err_msg {\n  color: #ff3e3e;\n  transition: all 0.34s;\n  margin-top: 20px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm90cC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxHSVRIVUIlMjBSRVBPU0lUT1JZX1VJXFxpQ3VzdE1vYmlsZS12Mlxcc3JjXFxhcHBcXHBhZ2VzXFxvdHBcXG90cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFFQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtBQ0FGOztBREdBOztFQUVFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQUYiLCJmaWxlIjoib3RwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzLzNAM3gucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJvdW5kO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGhlaWdodDogNDAlO1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxvZ28taWNvbiB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgd2lkdGg6IDE3NXB4O1xyXG4gIGhlaWdodDogNDVweDtcclxuICBtYXJnaW4tdG9wOiA2MnB4O1xyXG4gIG9wYWNpdHk6IDEwMCU7XHJcbn1cclxuXHJcbi5iYWNrLW5hdiB7XHJcbiAgcGFkZGluZzogMTlweCAwcHggMHB4IDBweDtcclxufVxyXG5cclxuLmJhY2stbmF2LWNvbG9yIHtcclxuICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaXRlbS1ib3gtd2hpdGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDYwcHggMCAwIDA7XHJcbiAgaGVpZ2h0OiA2MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4ubG9naW4tbG9nbyB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICAvLyBtaW4taGVpZ2h0OiAxOTBweDtcclxuICBtaW4taGVpZ2h0OiAxNDBweDtcclxuICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubG9naW4tbG9nbyBpbWcge1xyXG4gIG1heC13aWR0aDogMTIwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTklO1xyXG59XHJcblxyXG4ub3RwX3RpdGxlIHtcclxuICBmb250LXNpemU6IDIzcHg7XHJcbn1cclxuXHJcbi5vdHAtdGV4dCB7XHJcbiAgY29sb3I6ICNBMkEwQTg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4uZm9yZ290LFxyXG5hIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICM0NTZFRkUgIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmZpZWxkQ2FyZCB7XHJcbiAgcGFkZGluZy10b3A6IDUwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG59XHJcblxyXG4uc3VidGl0bGUge1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbn1cclxuXHJcbi5mb3JtLWJveCB7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTEwJTtcclxuICBib3R0b206IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZm9udF9ib2xkIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uZXJyX21zZyB7XHJcbiAgY29sb3I6ICNmZjNlM2U7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzRzO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Iiwic2VjdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvM0AzeC5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogNDAlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4ubG9nby1pY29uIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICB3aWR0aDogMTc1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luLXRvcDogNjJweDtcbiAgb3BhY2l0eTogMTAwJTtcbn1cblxuLmJhY2stbmF2IHtcbiAgcGFkZGluZzogMTlweCAwcHggMHB4IDBweDtcbn1cblxuLmJhY2stbmF2LWNvbG9yIHtcbiAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbn1cblxuLml0ZW0tYm94LXdoaXRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNjBweCAwIDAgMDtcbiAgaGVpZ2h0OiA2MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmxvZ2luLWxvZ28ge1xuICBwYWRkaW5nOiAyMHB4O1xuICBtaW4taGVpZ2h0OiAxNDBweDtcbiAgbWFyZ2luLXRvcDogMTUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1sb2dvIGltZyB7XG4gIG1heC13aWR0aDogMTIwcHg7XG4gIG1hcmdpbi10b3A6IC05JTtcbn1cblxuLm90cF90aXRsZSB7XG4gIGZvbnQtc2l6ZTogMjNweDtcbn1cblxuLm90cC10ZXh0IHtcbiAgY29sb3I6ICNBMkEwQTg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZm9yZ290LFxuYSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzQ1NkVGRSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZmllbGRDYXJkIHtcbiAgcGFkZGluZy10b3A6IDUwJTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxuLnN1YnRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxuLmZvcm0tYm94IHtcbiAgcGFkZGluZzogMjVweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEwJTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZm9udF9ib2xkIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmVycl9tc2cge1xuICBjb2xvcjogI2ZmM2UzZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMzRzO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";

/***/ }),

/***/ 93684:
/*!****************************************************!*\
  !*** ./src/app/pages/otp/otp.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <section>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button fill=\"clear\" (click)=\"back()\">\r\n          <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" class=\"back-nav-color\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n\r\n    <div class=\"logo-icon\">\r\n      <div class=\"logo\">\r\n        <img src=\"assets/images/Demobank.svg\" class=\"w-100\" />\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <div class=\"item-box-white\">\r\n    <div class=\"form-box\">\r\n      <form\r\n        *ngIf=\"otpForm\"\r\n        [formGroup]=\"otpForm\"\r\n        class=\"form_container\"\r\n        novalidate\r\n      >\r\n        <div class=\"otp-box text-left\">\r\n          <ion-text>\r\n            <h4 class=\"font_bold otp_title\">OTP Authentication</h4>\r\n            <p class=\"otp-text\">An authentication code has been sent to</p>\r\n            <h6 class=\"font_bold mt-1\">({{countryCode}}) {{customerPhonenum}}</h6>\r\n          </ion-text>\r\n        </div>\r\n        <!-- OTP INPUT START -->\r\n        <div class=\"text-center my-5\">\r\n          <ng-otp-input [formCtrl]=\"otp\" [config]=\"config\" #ngOtpInput></ng-otp-input>\r\n          <p class=\"err_msg\">{{errMsg}}</p>\r\n        </div>\r\n      \r\n        <!-- OTP INPUT END -->\r\n        <ion-grid>\r\n          <ion-row  class=\"ion-justify-content-around\">\r\n            <ion-col>\r\n              <div class=\"forgot my-2\">\r\n                <a class=\"text-center\" (click)=\"resendOTP()\">Resend code</a>\r\n              </div>\r\n            </ion-col>\r\n            <ion-col>\r\n              <div class=\"forgot my-2\">\r\n                <a class=\"text-center\" (click)=\"obscureText()\">{{ config?.isPasswordInput ? 'View OTP' : 'Hide OTP'}}</a>\r\n              </div>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n      </form>\r\n      <div>\r\n        <ng-container *ngIf=\"isLoading; else showLoading\">\r\n          <ion-button expand=\"full\" shape=\"round\" class=\"my-5\">\r\n            <ion-spinner name=\"circles\"></ion-spinner>\r\n          </ion-button>\r\n        </ng-container>\r\n        <ng-template #showLoading>\r\n          <ion-button\r\n            expand=\"full\"\r\n            shape=\"round\"\r\n            (click)=\"validateOtp()\"\r\n          >\r\n            CONTINUE\r\n          </ion-button>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 34101:
/*!*********************************************************!*\
  !*** ./node_modules/ngx-toastr/fesm2015/ngx-toastr.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BasePortalHost": () => (/* binding */ BasePortalHost),
/* harmony export */   "ComponentPortal": () => (/* binding */ ComponentPortal),
/* harmony export */   "DefaultGlobalConfig": () => (/* binding */ DefaultGlobalConfig),
/* harmony export */   "DefaultNoAnimationsGlobalConfig": () => (/* binding */ DefaultNoAnimationsGlobalConfig),
/* harmony export */   "DefaultNoComponentGlobalConfig": () => (/* binding */ DefaultNoComponentGlobalConfig),
/* harmony export */   "Overlay": () => (/* binding */ Overlay),
/* harmony export */   "OverlayContainer": () => (/* binding */ OverlayContainer),
/* harmony export */   "OverlayRef": () => (/* binding */ OverlayRef),
/* harmony export */   "TOAST_CONFIG": () => (/* binding */ TOAST_CONFIG),
/* harmony export */   "Toast": () => (/* binding */ Toast),
/* harmony export */   "ToastContainerDirective": () => (/* binding */ ToastContainerDirective),
/* harmony export */   "ToastContainerModule": () => (/* binding */ ToastContainerModule),
/* harmony export */   "ToastInjector": () => (/* binding */ ToastInjector),
/* harmony export */   "ToastNoAnimation": () => (/* binding */ ToastNoAnimation),
/* harmony export */   "ToastNoAnimationModule": () => (/* binding */ ToastNoAnimationModule),
/* harmony export */   "ToastPackage": () => (/* binding */ ToastPackage),
/* harmony export */   "ToastRef": () => (/* binding */ ToastRef),
/* harmony export */   "ToastrComponentlessModule": () => (/* binding */ ToastrComponentlessModule),
/* harmony export */   "ToastrModule": () => (/* binding */ ToastrModule),
/* harmony export */   "ToastrService": () => (/* binding */ ToastrService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/animations */ 31631);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 50318);







const _c0 = ["toast-component", ""];

function Toast_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Toast_button_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.remove());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xD7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}

function Toast_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("[", ctx_r7.duplicatesCount + 1, "]");
  }
}

function Toast_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Toast_div_1_ng_container_2_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.options.titleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.duplicatesCount);
  }
}

function Toast_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.options.messageClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}

function Toast_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.options.messageClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r3.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.message, " ");
  }
}

function Toast_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r4.width + "%");
  }
}

function ToastNoAnimation_button_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastNoAnimation_button_0_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresetView"](ctx_r5.remove());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\xD7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
}

function ToastNoAnimation_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("[", ctx_r7.duplicatesCount + 1, "]");
  }
}

function ToastNoAnimation_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ToastNoAnimation_div_1_ng_container_2_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r1.options.titleClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.duplicatesCount);
  }
}

function ToastNoAnimation_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 7);
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r2.options.messageClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r2.message, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
  }
}

function ToastNoAnimation_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r3.options.messageClass);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx_r3.message);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.message, " ");
  }
}

function ToastNoAnimation_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r4.width + "%");
  }
}

class ToastContainerDirective {
  constructor(el) {
    this.el = el;
  }

  getContainerElement() {
    return this.el.nativeElement;
  }

}

ToastContainerDirective.ɵfac = function ToastContainerDirective_Factory(t) {
  return new (t || ToastContainerDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
};

ToastContainerDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: ToastContainerDirective,
  selectors: [["", "toastContainer", ""]],
  exportAs: ["toastContainer"]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastContainerDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[toastContainer]',
      exportAs: 'toastContainer'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }];
  }, null);
})();

class ToastContainerModule {}

ToastContainerModule.ɵfac = function ToastContainerModule_Factory(t) {
  return new (t || ToastContainerModule)();
};

ToastContainerModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: ToastContainerModule,
  declarations: [ToastContainerDirective],
  exports: [ToastContainerDirective]
});
ToastContainerModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastContainerModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      declarations: [ToastContainerDirective],
      exports: [ToastContainerDirective]
    }]
  }], null, null);
})();
/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 */


class ComponentPortal {
  constructor(component, injector) {
    this.component = component;
    this.injector = injector;
  }
  /** Attach this portal to a host. */


  attach(host, newestOnTop) {
    this._attachedHost = host;
    return host.attach(this, newestOnTop);
  }
  /** Detach this portal from its host */


  detach() {
    const host = this._attachedHost;

    if (host) {
      this._attachedHost = undefined;
      return host.detach();
    }
  }
  /** Whether this portal is attached to a host. */


  get isAttached() {
    return this._attachedHost != null;
  }
  /**
   * Sets the PortalHost reference without performing `attach()`. This is used directly by
   * the PortalHost when it is performing an `attach()` or `detach()`.
   */


  setAttachedHost(host) {
    this._attachedHost = host;
  }

}
/**
 * Partial implementation of PortalHost that only deals with attaching a
 * ComponentPortal
 */


class BasePortalHost {
  attach(portal, newestOnTop) {
    this._attachedPortal = portal;
    return this.attachComponentPortal(portal, newestOnTop);
  }

  detach() {
    if (this._attachedPortal) {
      this._attachedPortal.setAttachedHost();
    }

    this._attachedPortal = undefined;

    if (this._disposeFn) {
      this._disposeFn();

      this._disposeFn = undefined;
    }
  }

  setDisposeFn(fn) {
    this._disposeFn = fn;
  }

}
/**
 * Everything a toast needs to launch
 */


class ToastPackage {
  constructor(toastId, config, message, title, toastType, toastRef) {
    this.toastId = toastId;
    this.config = config;
    this.message = message;
    this.title = title;
    this.toastType = toastType;
    this.toastRef = toastRef;
    this._onTap = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this._onAction = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    this.toastRef.afterClosed().subscribe(() => {
      this._onAction.complete();

      this._onTap.complete();
    });
  }
  /** Fired on click */


  triggerTap() {
    this._onTap.next();

    if (this.config.tapToDismiss) {
      this._onTap.complete();
    }
  }

  onTap() {
    return this._onTap.asObservable();
  }
  /** available for use in custom toast */


  triggerAction(action) {
    this._onAction.next(action);
  }

  onAction() {
    return this._onAction.asObservable();
  }

}

const DefaultNoComponentGlobalConfig = {
  maxOpened: 0,
  autoDismiss: false,
  newestOnTop: true,
  preventDuplicates: false,
  countDuplicates: false,
  resetTimeoutOnDuplicate: false,
  includeTitleDuplicates: false,
  iconClasses: {
    error: 'toast-error',
    info: 'toast-info',
    success: 'toast-success',
    warning: 'toast-warning'
  },
  // Individual
  closeButton: false,
  disableTimeOut: false,
  timeOut: 5000,
  extendedTimeOut: 1000,
  enableHtml: false,
  progressBar: false,
  toastClass: 'ngx-toastr',
  positionClass: 'toast-top-right',
  titleClass: 'toast-title',
  messageClass: 'toast-message',
  easing: 'ease-in',
  easeTime: 300,
  tapToDismiss: true,
  onActivateTick: false,
  progressAnimation: 'decreasing',
  payload: null
};
const TOAST_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('ToastConfig');
/**
 * Reference to a toast opened via the Toastr service.
 */

class ToastRef {
  constructor(_overlayRef) {
    this._overlayRef = _overlayRef;
    /** Count of duplicates of this toast */

    this.duplicatesCount = 0;
    /** Subject for notifying the user that the toast has finished closing. */

    this._afterClosed = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** triggered when toast is activated */

    this._activate = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** notifies the toast that it should close before the timeout */

    this._manualClose = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** notifies the toast that it should reset the timeouts */

    this._resetTimeout = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    /** notifies the toast that it should count a duplicate toast */

    this._countDuplicate = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
  }

  manualClose() {
    this._manualClose.next();

    this._manualClose.complete();
  }

  manualClosed() {
    return this._manualClose.asObservable();
  }

  timeoutReset() {
    return this._resetTimeout.asObservable();
  }

  countDuplicate() {
    return this._countDuplicate.asObservable();
  }
  /**
   * Close the toast.
   */


  close() {
    this._overlayRef.detach();

    this._afterClosed.next();

    this._manualClose.next();

    this._afterClosed.complete();

    this._manualClose.complete();

    this._activate.complete();

    this._resetTimeout.complete();

    this._countDuplicate.complete();
  }
  /** Gets an observable that is notified when the toast is finished closing. */


  afterClosed() {
    return this._afterClosed.asObservable();
  }

  isInactive() {
    return this._activate.isStopped;
  }

  activate() {
    this._activate.next();

    this._activate.complete();
  }
  /** Gets an observable that is notified when the toast has started opening. */


  afterActivate() {
    return this._activate.asObservable();
  }
  /** Reset the toast timouts and count duplicates */


  onDuplicate(resetTimeout, countDuplicate) {
    if (resetTimeout) {
      this._resetTimeout.next();
    }

    if (countDuplicate) {
      this._countDuplicate.next(++this.duplicatesCount);
    }
  }

}
/** Custom injector type specifically for instantiating components with a toast. */


class ToastInjector {
  constructor(_toastPackage, _parentInjector) {
    this._toastPackage = _toastPackage;
    this._parentInjector = _parentInjector;
  }

  get(token, notFoundValue, flags) {
    if (token === ToastPackage) {
      return this._toastPackage;
    }

    return this._parentInjector.get(token, notFoundValue, flags);
  }

}
/**
 * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 *
 * This is the only part of the portal core that directly touches the DOM.
 */


class DomPortalHost extends BasePortalHost {
  constructor(_hostDomElement, _componentFactoryResolver, _appRef) {
    super();
    this._hostDomElement = _hostDomElement;
    this._componentFactoryResolver = _componentFactoryResolver;
    this._appRef = _appRef;
  }
  /**
   * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
   * @param portal Portal to be attached
   */


  attachComponentPortal(portal, newestOnTop) {
    const componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);

    let componentRef; // If the portal specifies a ViewContainerRef, we will use that as the attachment point
    // for the component (in terms of Angular's component tree, not rendering).
    // When the ViewContainerRef is missing, we use the factory to create the component directly
    // and then manually attach the ChangeDetector for that component to the application (which
    // happens automatically when using a ViewContainer).

    componentRef = componentFactory.create(portal.injector); // When creating a component outside of a ViewContainer, we need to manually register
    // its ChangeDetector with the application. This API is unfortunately not yet published
    // in Angular core. The change detector must also be deregistered when the component
    // is destroyed to prevent memory leaks.

    this._appRef.attachView(componentRef.hostView);

    this.setDisposeFn(() => {
      this._appRef.detachView(componentRef.hostView);

      componentRef.destroy();
    }); // At this point the component has been instantiated, so we move it to the location in the DOM
    // where we want it to be rendered.

    if (newestOnTop) {
      this._hostDomElement.insertBefore(this._getComponentRootNode(componentRef), this._hostDomElement.firstChild);
    } else {
      this._hostDomElement.appendChild(this._getComponentRootNode(componentRef));
    }

    return componentRef;
  }
  /** Gets the root HTMLElement for an instantiated component. */


  _getComponentRootNode(componentRef) {
    return componentRef.hostView.rootNodes[0];
  }

}
/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */


class OverlayRef {
  constructor(_portalHost) {
    this._portalHost = _portalHost;
  }

  attach(portal, newestOnTop = true) {
    return this._portalHost.attach(portal, newestOnTop);
  }
  /**
   * Detaches an overlay from a portal.
   * @returns Resolves when the overlay has been detached.
   */


  detach() {
    return this._portalHost.detach();
  }

}
/** Container inside which all toasts will render. */


class OverlayContainer {
  constructor(_document) {
    this._document = _document;
  }

  ngOnDestroy() {
    if (this._containerElement && this._containerElement.parentNode) {
      this._containerElement.parentNode.removeChild(this._containerElement);
    }
  }
  /**
   * This method returns the overlay container element. It will lazily
   * create the element the first time  it is called to facilitate using
   * the container in non-browser environments.
   * @returns the container element
   */


  getContainerElement() {
    if (!this._containerElement) {
      this._createContainer();
    }

    return this._containerElement;
  }
  /**
   * Create the overlay container element, which is simply a div
   * with the 'cdk-overlay-container' class on the document body
   * and 'aria-live="polite"'
   */


  _createContainer() {
    const container = this._document.createElement('div');

    container.classList.add('overlay-container');
    container.setAttribute('aria-live', 'polite');

    this._document.body.appendChild(container);

    this._containerElement = container;
  }

}

OverlayContainer.ɵfac = function OverlayContainer_Factory(t) {
  return new (t || OverlayContainer)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT));
};

OverlayContainer.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: OverlayContainer,
  factory: OverlayContainer.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OverlayContainer, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT]
      }]
    }];
  }, null);
})();
/* eslint-disable @typescript-eslint/no-non-null-assertion */

/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalHost, so any kind of Portal can be loaded into one.
 */


class Overlay {
  constructor(_overlayContainer, _componentFactoryResolver, _appRef, _document) {
    this._overlayContainer = _overlayContainer;
    this._componentFactoryResolver = _componentFactoryResolver;
    this._appRef = _appRef;
    this._document = _document; // Namespace panes by overlay container

    this._paneElements = new Map();
  }
  /**
   * Creates an overlay.
   * @returns A reference to the created overlay.
   */


  create(positionClass, overlayContainer) {
    // get existing pane if possible
    return this._createOverlayRef(this.getPaneElement(positionClass, overlayContainer));
  }

  getPaneElement(positionClass = '', overlayContainer) {
    if (!this._paneElements.get(overlayContainer)) {
      this._paneElements.set(overlayContainer, {});
    }

    if (!this._paneElements.get(overlayContainer)[positionClass]) {
      this._paneElements.get(overlayContainer)[positionClass] = this._createPaneElement(positionClass, overlayContainer);
    }

    return this._paneElements.get(overlayContainer)[positionClass];
  }
  /**
   * Creates the DOM element for an overlay and appends it to the overlay container.
   * @returns Newly-created pane element
   */


  _createPaneElement(positionClass, overlayContainer) {
    const pane = this._document.createElement('div');

    pane.id = 'toast-container';
    pane.classList.add(positionClass);
    pane.classList.add('toast-container');

    if (!overlayContainer) {
      this._overlayContainer.getContainerElement().appendChild(pane);
    } else {
      overlayContainer.getContainerElement().appendChild(pane);
    }

    return pane;
  }
  /**
   * Create a DomPortalHost into which the overlay content can be loaded.
   * @param pane The DOM element to turn into a portal host.
   * @returns A portal host for the given DOM element.
   */


  _createPortalHost(pane) {
    return new DomPortalHost(pane, this._componentFactoryResolver, this._appRef);
  }
  /**
   * Creates an OverlayRef for an overlay in the given DOM element.
   * @param pane DOM element for the overlay
   */


  _createOverlayRef(pane) {
    return new OverlayRef(this._createPortalHost(pane));
  }

}

Overlay.ɵfac = function Overlay_Factory(t) {
  return new (t || Overlay)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](OverlayContainer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT));
};

Overlay.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: Overlay,
  factory: Overlay.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Overlay, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: OverlayContainer
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ComponentFactoryResolver
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT]
      }]
    }];
  }, null);
})();

class ToastrService {
  constructor(token, overlay, _injector, sanitizer, ngZone) {
    this.overlay = overlay;
    this._injector = _injector;
    this.sanitizer = sanitizer;
    this.ngZone = ngZone;
    this.currentlyActive = 0;
    this.toasts = [];
    this.index = 0;
    this.toastrConfig = Object.assign(Object.assign({}, token.default), token.config);

    if (token.config.iconClasses) {
      this.toastrConfig.iconClasses = Object.assign(Object.assign({}, token.default.iconClasses), token.config.iconClasses);
    }
  }
  /** show toast */


  show(message, title, override = {}, type = '') {
    return this._preBuildNotification(type, message, title, this.applyConfig(override));
  }
  /** show successful toast */


  success(message, title, override = {}) {
    const type = this.toastrConfig.iconClasses.success || '';
    return this._preBuildNotification(type, message, title, this.applyConfig(override));
  }
  /** show error toast */


  error(message, title, override = {}) {
    const type = this.toastrConfig.iconClasses.error || '';
    return this._preBuildNotification(type, message, title, this.applyConfig(override));
  }
  /** show info toast */


  info(message, title, override = {}) {
    const type = this.toastrConfig.iconClasses.info || '';
    return this._preBuildNotification(type, message, title, this.applyConfig(override));
  }
  /** show warning toast */


  warning(message, title, override = {}) {
    const type = this.toastrConfig.iconClasses.warning || '';
    return this._preBuildNotification(type, message, title, this.applyConfig(override));
  }
  /**
   * Remove all or a single toast by id
   */


  clear(toastId) {
    // Call every toastRef manualClose function
    for (const toast of this.toasts) {
      if (toastId !== undefined) {
        if (toast.toastId === toastId) {
          toast.toastRef.manualClose();
          return;
        }
      } else {
        toast.toastRef.manualClose();
      }
    }
  }
  /**
   * Remove and destroy a single toast by id
   */


  remove(toastId) {
    const found = this._findToast(toastId);

    if (!found) {
      return false;
    }

    found.activeToast.toastRef.close();
    this.toasts.splice(found.index, 1);
    this.currentlyActive = this.currentlyActive - 1;

    if (!this.toastrConfig.maxOpened || !this.toasts.length) {
      return false;
    }

    if (this.currentlyActive < this.toastrConfig.maxOpened && this.toasts[this.currentlyActive]) {
      const p = this.toasts[this.currentlyActive].toastRef;

      if (!p.isInactive()) {
        this.currentlyActive = this.currentlyActive + 1;
        p.activate();
      }
    }

    return true;
  }
  /**
   * Determines if toast message is already shown
   */


  findDuplicate(title = '', message = '', resetOnDuplicate, countDuplicates) {
    const {
      includeTitleDuplicates
    } = this.toastrConfig;

    for (const toast of this.toasts) {
      const hasDuplicateTitle = includeTitleDuplicates && toast.title === title;

      if ((!includeTitleDuplicates || hasDuplicateTitle) && toast.message === message) {
        toast.toastRef.onDuplicate(resetOnDuplicate, countDuplicates);
        return toast;
      }
    }

    return null;
  }
  /** create a clone of global config and apply individual settings */


  applyConfig(override = {}) {
    return Object.assign(Object.assign({}, this.toastrConfig), override);
  }
  /**
   * Find toast object by id
   */


  _findToast(toastId) {
    for (let i = 0; i < this.toasts.length; i++) {
      if (this.toasts[i].toastId === toastId) {
        return {
          index: i,
          activeToast: this.toasts[i]
        };
      }
    }

    return null;
  }
  /**
   * Determines the need to run inside angular's zone then builds the toast
   */


  _preBuildNotification(toastType, message, title, config) {
    if (config.onActivateTick) {
      return this.ngZone.run(() => this._buildNotification(toastType, message, title, config));
    }

    return this._buildNotification(toastType, message, title, config);
  }
  /**
   * Creates and attaches toast data to component
   * returns the active toast, or in case preventDuplicates is enabled the original/non-duplicate active toast.
   */


  _buildNotification(toastType, message, title, config) {
    if (!config.toastComponent) {
      throw new Error('toastComponent required');
    } // max opened and auto dismiss = true
    // if timeout = 0 resetting it would result in setting this.hideTime = Date.now(). Hence, we only want to reset timeout if there is
    // a timeout at all


    const duplicate = this.findDuplicate(title, message, this.toastrConfig.resetTimeoutOnDuplicate && config.timeOut > 0, this.toastrConfig.countDuplicates);

    if ((this.toastrConfig.includeTitleDuplicates && title || message) && this.toastrConfig.preventDuplicates && duplicate !== null) {
      return duplicate;
    }

    this.previousToastMessage = message;
    let keepInactive = false;

    if (this.toastrConfig.maxOpened && this.currentlyActive >= this.toastrConfig.maxOpened) {
      keepInactive = true;

      if (this.toastrConfig.autoDismiss) {
        this.clear(this.toasts[0].toastId);
      }
    }

    const overlayRef = this.overlay.create(config.positionClass, this.overlayContainer);
    this.index = this.index + 1;
    let sanitizedMessage = message;

    if (message && config.enableHtml) {
      sanitizedMessage = this.sanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__.SecurityContext.HTML, message);
    }

    const toastRef = new ToastRef(overlayRef);
    const toastPackage = new ToastPackage(this.index, config, sanitizedMessage, title, toastType, toastRef);
    const toastInjector = new ToastInjector(toastPackage, this._injector);
    const component = new ComponentPortal(config.toastComponent, toastInjector);
    const portal = overlayRef.attach(component, this.toastrConfig.newestOnTop);
    toastRef.componentInstance = portal.instance;
    const ins = {
      toastId: this.index,
      title: title || '',
      message: message || '',
      toastRef,
      onShown: toastRef.afterActivate(),
      onHidden: toastRef.afterClosed(),
      onTap: toastPackage.onTap(),
      onAction: toastPackage.onAction(),
      portal
    };

    if (!keepInactive) {
      this.currentlyActive = this.currentlyActive + 1;
      setTimeout(() => {
        ins.toastRef.activate();
      });
    }

    this.toasts.push(ins);
    return ins;
  }

}

ToastrService.ɵfac = function ToastrService_Factory(t) {
  return new (t || ToastrService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](TOAST_CONFIG), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](Overlay), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

ToastrService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: ToastrService,
  factory: ToastrService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastrService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [TOAST_CONFIG]
      }]
    }, {
      type: Overlay
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }, {
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.DomSanitizer
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, null);
})();

class Toast {
  constructor(toastrService, toastPackage, ngZone) {
    this.toastrService = toastrService;
    this.toastPackage = toastPackage;
    this.ngZone = ngZone;
    /** width of progress bar */

    this.width = -1;
    /** a combination of toast type and options.toastClass */

    this.toastClasses = '';
    /** controls animation */

    this.state = {
      value: 'inactive',
      params: {
        easeTime: this.toastPackage.config.easeTime,
        easing: 'ease-in'
      }
    };
    this.message = toastPackage.message;
    this.title = toastPackage.title;
    this.options = toastPackage.config;
    this.originalTimeout = toastPackage.config.timeOut;
    this.toastClasses = `${toastPackage.toastType} ${toastPackage.config.toastClass}`;
    this.sub = toastPackage.toastRef.afterActivate().subscribe(() => {
      this.activateToast();
    });
    this.sub1 = toastPackage.toastRef.manualClosed().subscribe(() => {
      this.remove();
    });
    this.sub2 = toastPackage.toastRef.timeoutReset().subscribe(() => {
      this.resetTimeout();
    });
    this.sub3 = toastPackage.toastRef.countDuplicate().subscribe(count => {
      this.duplicatesCount = count;
    });
  }
  /** hides component when waiting to be displayed */


  get displayStyle() {
    if (this.state.value === 'inactive') {
      return 'none';
    }

    return;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
    clearInterval(this.intervalId);
    clearTimeout(this.timeout);
  }
  /**
   * activates toast and sets timeout
   */


  activateToast() {
    this.state = Object.assign(Object.assign({}, this.state), {
      value: 'active'
    });

    if (!(this.options.disableTimeOut === true || this.options.disableTimeOut === 'timeOut') && this.options.timeOut) {
      this.outsideTimeout(() => this.remove(), this.options.timeOut);
      this.hideTime = new Date().getTime() + this.options.timeOut;

      if (this.options.progressBar) {
        this.outsideInterval(() => this.updateProgress(), 10);
      }
    }
  }
  /**
   * updates progress bar width
   */


  updateProgress() {
    if (this.width === 0 || this.width === 100 || !this.options.timeOut) {
      return;
    }

    const now = new Date().getTime();
    const remaining = this.hideTime - now;
    this.width = remaining / this.options.timeOut * 100;

    if (this.options.progressAnimation === 'increasing') {
      this.width = 100 - this.width;
    }

    if (this.width <= 0) {
      this.width = 0;
    }

    if (this.width >= 100) {
      this.width = 100;
    }
  }

  resetTimeout() {
    clearTimeout(this.timeout);
    clearInterval(this.intervalId);
    this.state = Object.assign(Object.assign({}, this.state), {
      value: 'active'
    });
    this.outsideTimeout(() => this.remove(), this.originalTimeout);
    this.options.timeOut = this.originalTimeout;
    this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
    this.width = -1;

    if (this.options.progressBar) {
      this.outsideInterval(() => this.updateProgress(), 10);
    }
  }
  /**
   * tells toastrService to remove this toast after animation time
   */


  remove() {
    if (this.state.value === 'removed') {
      return;
    }

    clearTimeout(this.timeout);
    this.state = Object.assign(Object.assign({}, this.state), {
      value: 'removed'
    });
    this.outsideTimeout(() => this.toastrService.remove(this.toastPackage.toastId), +this.toastPackage.config.easeTime);
  }

  tapToast() {
    if (this.state.value === 'removed') {
      return;
    }

    this.toastPackage.triggerTap();

    if (this.options.tapToDismiss) {
      this.remove();
    }
  }

  stickAround() {
    if (this.state.value === 'removed') {
      return;
    }

    clearTimeout(this.timeout);
    this.options.timeOut = 0;
    this.hideTime = 0; // disable progressBar

    clearInterval(this.intervalId);
    this.width = 0;
  }

  delayedHideToast() {
    if (this.options.disableTimeOut === true || this.options.disableTimeOut === 'extendedTimeOut' || this.options.extendedTimeOut === 0 || this.state.value === 'removed') {
      return;
    }

    this.outsideTimeout(() => this.remove(), this.options.extendedTimeOut);
    this.options.timeOut = this.options.extendedTimeOut;
    this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
    this.width = -1;

    if (this.options.progressBar) {
      this.outsideInterval(() => this.updateProgress(), 10);
    }
  }

  outsideTimeout(func, timeout) {
    if (this.ngZone) {
      this.ngZone.runOutsideAngular(() => this.timeout = setTimeout(() => this.runInsideAngular(func), timeout));
    } else {
      this.timeout = setTimeout(() => func(), timeout);
    }
  }

  outsideInterval(func, timeout) {
    if (this.ngZone) {
      this.ngZone.runOutsideAngular(() => this.intervalId = setInterval(() => this.runInsideAngular(func), timeout));
    } else {
      this.intervalId = setInterval(() => func(), timeout);
    }
  }

  runInsideAngular(func) {
    if (this.ngZone) {
      this.ngZone.run(() => func());
    } else {
      func();
    }
  }

}

Toast.ɵfac = function Toast_Factory(t) {
  return new (t || Toast)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ToastPackage), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone));
};

Toast.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: Toast,
  selectors: [["", "toast-component", ""]],
  hostVars: 5,
  hostBindings: function Toast_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function Toast_click_HostBindingHandler() {
        return ctx.tapToast();
      })("mouseenter", function Toast_mouseenter_HostBindingHandler() {
        return ctx.stickAround();
      })("mouseleave", function Toast_mouseleave_HostBindingHandler() {
        return ctx.delayedHideToast();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsyntheticHostProperty"]("@flyInOut", ctx.state);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.toastClasses);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.displayStyle);
    }
  },
  attrs: _c0,
  decls: 5,
  vars: 5,
  consts: [["type", "button", "class", "toast-close-button", "aria-label", "Close", 3, "click", 4, "ngIf"], [3, "class", 4, "ngIf"], ["role", "alert", 3, "class", "innerHTML", 4, "ngIf"], ["role", "alert", 3, "class", 4, "ngIf"], [4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "toast-close-button", 3, "click"], ["aria-hidden", "true"], ["role", "alert", 3, "innerHTML"], ["role", "alert"], [1, "toast-progress"]],
  template: function Toast_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, Toast_button_0_Template, 3, 0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, Toast_div_1_Template, 3, 5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, Toast_div_2_Template, 1, 3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, Toast_div_3_Template, 2, 4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, Toast_div_4_Template, 2, 2, "div", 4);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options.closeButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message && ctx.options.enableHtml);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message && !ctx.options.enableHtml);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options.progressBar);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  encapsulation: 2,
  data: {
    animation: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('flyInOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('inactive', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
      opacity: 0
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
      opacity: 1
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('removed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
      opacity: 0
    })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('inactive => active', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('{{ easeTime }}ms {{ easing }}')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('active => removed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('{{ easeTime }}ms {{ easing }}'))])]
  }
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Toast, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: '[toast-component]',
      template: `
  <button *ngIf="options.closeButton" (click)="remove()" type="button" class="toast-close-button" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <div *ngIf="title" [class]="options.titleClass" [attr.aria-label]="title">
    {{ title }} <ng-container *ngIf="duplicatesCount">[{{ duplicatesCount + 1 }}]</ng-container>
  </div>
  <div *ngIf="message && options.enableHtml" role="alert"
    [class]="options.messageClass" [innerHTML]="message">
  </div>
  <div *ngIf="message && !options.enableHtml" role="alert"
    [class]="options.messageClass" [attr.aria-label]="message">
    {{ message }}
  </div>
  <div *ngIf="options.progressBar">
    <div class="toast-progress" [style.width]="width + '%'"></div>
  </div>
  `,
      animations: [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.trigger)('flyInOut', [(0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('inactive', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
        opacity: 0
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('active', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
        opacity: 1
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.state)('removed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.style)({
        opacity: 0
      })), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('inactive => active', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('{{ easeTime }}ms {{ easing }}')), (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.transition)('active => removed', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_4__.animate)('{{ easeTime }}ms {{ easing }}'))])],
      preserveWhitespaces: false
    }]
  }], function () {
    return [{
      type: ToastrService
    }, {
      type: ToastPackage
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone
    }];
  }, {
    toastClasses: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class']
    }],
    state: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['@flyInOut']
    }],
    displayStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.display']
    }],
    tapToast: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click']
    }],
    stickAround: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['mouseenter']
    }],
    delayedHideToast: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['mouseleave']
    }]
  });
})();

const DefaultGlobalConfig = Object.assign(Object.assign({}, DefaultNoComponentGlobalConfig), {
  toastComponent: Toast
});

class ToastrModule {
  static forRoot(config = {}) {
    return {
      ngModule: ToastrModule,
      providers: [{
        provide: TOAST_CONFIG,
        useValue: {
          default: DefaultGlobalConfig,
          config
        }
      }]
    };
  }

}

ToastrModule.ɵfac = function ToastrModule_Factory(t) {
  return new (t || ToastrModule)();
};

ToastrModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: ToastrModule,
  declarations: [Toast],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
  exports: [Toast]
});
ToastrModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastrModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      declarations: [Toast],
      exports: [Toast],
      entryComponents: [Toast]
    }]
  }], null, null);
})();

class ToastrComponentlessModule {
  static forRoot(config = {}) {
    return {
      ngModule: ToastrModule,
      providers: [{
        provide: TOAST_CONFIG,
        useValue: {
          default: DefaultNoComponentGlobalConfig,
          config
        }
      }]
    };
  }

}

ToastrComponentlessModule.ɵfac = function ToastrComponentlessModule_Factory(t) {
  return new (t || ToastrComponentlessModule)();
};

ToastrComponentlessModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: ToastrComponentlessModule,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
});
ToastrComponentlessModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastrComponentlessModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]
    }]
  }], null, null);
})();

class ToastNoAnimation {
  constructor(toastrService, toastPackage, appRef) {
    this.toastrService = toastrService;
    this.toastPackage = toastPackage;
    this.appRef = appRef;
    /** width of progress bar */

    this.width = -1;
    /** a combination of toast type and options.toastClass */

    this.toastClasses = '';
    /** controls animation */

    this.state = 'inactive';
    this.message = toastPackage.message;
    this.title = toastPackage.title;
    this.options = toastPackage.config;
    this.originalTimeout = toastPackage.config.timeOut;
    this.toastClasses = `${toastPackage.toastType} ${toastPackage.config.toastClass}`;
    this.sub = toastPackage.toastRef.afterActivate().subscribe(() => {
      this.activateToast();
    });
    this.sub1 = toastPackage.toastRef.manualClosed().subscribe(() => {
      this.remove();
    });
    this.sub2 = toastPackage.toastRef.timeoutReset().subscribe(() => {
      this.resetTimeout();
    });
    this.sub3 = toastPackage.toastRef.countDuplicate().subscribe(count => {
      this.duplicatesCount = count;
    });
  }
  /** hides component when waiting to be displayed */


  get displayStyle() {
    if (this.state === 'inactive') {
      return 'none';
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.sub1.unsubscribe();
    this.sub2.unsubscribe();
    this.sub3.unsubscribe();
    clearInterval(this.intervalId);
    clearTimeout(this.timeout);
  }
  /**
   * activates toast and sets timeout
   */


  activateToast() {
    this.state = 'active';

    if (!(this.options.disableTimeOut === true || this.options.disableTimeOut === 'timeOut') && this.options.timeOut) {
      this.timeout = setTimeout(() => {
        this.remove();
      }, this.options.timeOut);
      this.hideTime = new Date().getTime() + this.options.timeOut;

      if (this.options.progressBar) {
        this.intervalId = setInterval(() => this.updateProgress(), 10);
      }
    }

    if (this.options.onActivateTick) {
      this.appRef.tick();
    }
  }
  /**
   * updates progress bar width
   */


  updateProgress() {
    if (this.width === 0 || this.width === 100 || !this.options.timeOut) {
      return;
    }

    const now = new Date().getTime();
    const remaining = this.hideTime - now;
    this.width = remaining / this.options.timeOut * 100;

    if (this.options.progressAnimation === 'increasing') {
      this.width = 100 - this.width;
    }

    if (this.width <= 0) {
      this.width = 0;
    }

    if (this.width >= 100) {
      this.width = 100;
    }
  }

  resetTimeout() {
    clearTimeout(this.timeout);
    clearInterval(this.intervalId);
    this.state = 'active';
    this.options.timeOut = this.originalTimeout;
    this.timeout = setTimeout(() => this.remove(), this.originalTimeout);
    this.hideTime = new Date().getTime() + (this.originalTimeout || 0);
    this.width = -1;

    if (this.options.progressBar) {
      this.intervalId = setInterval(() => this.updateProgress(), 10);
    }
  }
  /**
   * tells toastrService to remove this toast after animation time
   */


  remove() {
    if (this.state === 'removed') {
      return;
    }

    clearTimeout(this.timeout);
    this.state = 'removed';
    this.timeout = setTimeout(() => this.toastrService.remove(this.toastPackage.toastId));
  }

  tapToast() {
    if (this.state === 'removed') {
      return;
    }

    this.toastPackage.triggerTap();

    if (this.options.tapToDismiss) {
      this.remove();
    }
  }

  stickAround() {
    if (this.state === 'removed') {
      return;
    }

    clearTimeout(this.timeout);
    this.options.timeOut = 0;
    this.hideTime = 0; // disable progressBar

    clearInterval(this.intervalId);
    this.width = 0;
  }

  delayedHideToast() {
    if (this.options.disableTimeOut === true || this.options.disableTimeOut === 'extendedTimeOut' || this.options.extendedTimeOut === 0 || this.state === 'removed') {
      return;
    }

    this.timeout = setTimeout(() => this.remove(), this.options.extendedTimeOut);
    this.options.timeOut = this.options.extendedTimeOut;
    this.hideTime = new Date().getTime() + (this.options.timeOut || 0);
    this.width = -1;

    if (this.options.progressBar) {
      this.intervalId = setInterval(() => this.updateProgress(), 10);
    }
  }

}

ToastNoAnimation.ɵfac = function ToastNoAnimation_Factory(t) {
  return new (t || ToastNoAnimation)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ToastrService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ToastPackage), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef));
};

ToastNoAnimation.ɵcmp = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: ToastNoAnimation,
  selectors: [["", "toast-component", ""]],
  hostVars: 4,
  hostBindings: function ToastNoAnimation_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ToastNoAnimation_click_HostBindingHandler() {
        return ctx.tapToast();
      })("mouseenter", function ToastNoAnimation_mouseenter_HostBindingHandler() {
        return ctx.stickAround();
      })("mouseleave", function ToastNoAnimation_mouseleave_HostBindingHandler() {
        return ctx.delayedHideToast();
      });
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.toastClasses);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("display", ctx.displayStyle);
    }
  },
  attrs: _c0,
  decls: 5,
  vars: 5,
  consts: [["type", "button", "class", "toast-close-button", "aria-label", "Close", 3, "click", 4, "ngIf"], [3, "class", 4, "ngIf"], ["role", "alert", 3, "class", "innerHTML", 4, "ngIf"], ["role", "alert", 3, "class", 4, "ngIf"], [4, "ngIf"], ["type", "button", "aria-label", "Close", 1, "toast-close-button", 3, "click"], ["aria-hidden", "true"], ["role", "alert", 3, "innerHTML"], ["role", "alert"], [1, "toast-progress"]],
  template: function ToastNoAnimation_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ToastNoAnimation_button_0_Template, 3, 0, "button", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ToastNoAnimation_div_1_Template, 3, 5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ToastNoAnimation_div_2_Template, 1, 3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ToastNoAnimation_div_3_Template, 2, 4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ToastNoAnimation_div_4_Template, 2, 2, "div", 4);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options.closeButton);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.title);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message && ctx.options.enableHtml);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.message && !ctx.options.enableHtml);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.options.progressBar);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  encapsulation: 2
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastNoAnimation, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: '[toast-component]',
      template: `
  <button *ngIf="options.closeButton" (click)="remove()" type="button" class="toast-close-button" aria-label="Close">
    <span aria-hidden="true">&times;</span>
  </button>
  <div *ngIf="title" [class]="options.titleClass" [attr.aria-label]="title">
    {{ title }} <ng-container *ngIf="duplicatesCount">[{{ duplicatesCount + 1 }}]</ng-container>
  </div>
  <div *ngIf="message && options.enableHtml" role="alert"
    [class]="options.messageClass" [innerHTML]="message">
  </div>
  <div *ngIf="message && !options.enableHtml" role="alert"
    [class]="options.messageClass" [attr.aria-label]="message">
    {{ message }}
  </div>
  <div *ngIf="options.progressBar">
    <div class="toast-progress" [style.width]="width + '%'"></div>
  </div>
  `
    }]
  }], function () {
    return [{
      type: ToastrService
    }, {
      type: ToastPackage
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ApplicationRef
    }];
  }, {
    toastClasses: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['class']
    }],
    displayStyle: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ['style.display']
    }],
    tapToast: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['click']
    }],
    stickAround: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['mouseenter']
    }],
    delayedHideToast: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ['mouseleave']
    }]
  });
})();

const DefaultNoAnimationsGlobalConfig = Object.assign(Object.assign({}, DefaultNoComponentGlobalConfig), {
  toastComponent: ToastNoAnimation
});

class ToastNoAnimationModule {
  static forRoot(config = {}) {
    return {
      ngModule: ToastNoAnimationModule,
      providers: [{
        provide: TOAST_CONFIG,
        useValue: {
          default: DefaultNoAnimationsGlobalConfig,
          config
        }
      }]
    };
  }

}

ToastNoAnimationModule.ɵfac = function ToastNoAnimationModule_Factory(t) {
  return new (t || ToastNoAnimationModule)();
};

ToastNoAnimationModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: ToastNoAnimationModule,
  declarations: [ToastNoAnimation],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
  exports: [ToastNoAnimation]
});
ToastNoAnimationModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ToastNoAnimationModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      declarations: [ToastNoAnimation],
      exports: [ToastNoAnimation],
      entryComponents: [ToastNoAnimation]
    }]
  }], null, null);
})();
/**
 * Generated bundle index. Do not edit.
 */




/***/ })

}]);
//# sourceMappingURL=src_app_pages_otp_otp_module_ts.js.map