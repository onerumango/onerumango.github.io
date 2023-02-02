"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_login_login_page_ts"],{

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage),
/* harmony export */   "otpModel": () => (/* binding */ otpModel),
/* harmony export */   "verifyotpModel": () => (/* binding */ verifyotpModel)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 96752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 98433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);










class otpModel {
}
class verifyotpModel {
}
let LoginPage = class LoginPage {
    constructor(router, cdk, fb, api, toastCtrl, dataService) {
        this.router = router;
        this.cdk = cdk;
        this.fb = fb;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.dataService = dataService;
        this.otpValue = null;
        this.otpValid = false;
        this.oTpModel = new otpModel();
        this.verifyOtpModel = new verifyotpModel();
        this.userResp = false;
        this.showPassword = false;
        this.userPasswordUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.isLoading = false;
    }
    ngOnInit() {
        this.initForm();
    }
    initForm() {
        this.loginForm = this.fb.group({
            phoneNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            isOtp: [false],
            otp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
    }
    onPasswordToggle(showType) {
        if (showType === 'new') {
            this.showPassword = !this.showPassword;
        }
    }
    _keyPress(event) {
        console.log('key', event);
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    continue(loginForm) {
        if (!this.loginForm.get('isOtp').value) {
            if (!loginForm.phoneNo) {
                this.openToast('Phone number is required!');
                return;
            }
            if (!loginForm.password) {
                this.openToast('Password is required!');
                return;
            }
            this.isLoading = true;
            let payload = {
                phoneNumber: loginForm.phoneNo,
                password: loginForm.password
            };
            this.api.validatePassword(payload).subscribe((res) => {
                var _a, _b, _c, _d, _e;
                if (res.status == 200) {
                    if (((_a = res['data']) === null || _a === void 0 ? void 0 : _a.firstTimeLogin) == "Y") {
                        localStorage.setItem('customerPhonenum', loginForm.phoneNo);
                        const navigationExtras = {
                            queryParams: {
                                'screenName': 'reset'
                            },
                        };
                        this.api.sendNavParam(navigationExtras);
                        this.router.navigateByUrl('/new-passwordchange');
                    }
                    else {
                        localStorage.setItem('customerPhonenum', loginForm.phoneNo);
                        sessionStorage.setItem('customer_id', (_b = res['data']) === null || _b === void 0 ? void 0 : _b.customerId);
                        localStorage.setItem('firstName', (_c = res['data']) === null || _c === void 0 ? void 0 : _c.firstName);
                        localStorage.setItem('lastName', (_d = res['data']) === null || _d === void 0 ? void 0 : _d.lastName);
                        localStorage.setItem('customer_id', (_e = res['data']) === null || _e === void 0 ? void 0 : _e.customerId);
                        localStorage.setItem('customer_details', JSON.stringify(res['data']));
                        localStorage.setItem('isShowed', "no");
                        this.router.navigate(['dashboard'], { replaceUrl: true });
                        this.dataService.isLoggedIn.next(true);
                        this.openToast("Logged in Successfully!");
                    }
                }
                else {
                    this.openToast(res === null || res === void 0 ? void 0 : res.message);
                }
                this.isLoading = false;
            }, (err) => {
                this.isLoading = false;
            });
        }
        else {
            this.getOtp(loginForm);
        }
    }
    getOtp(phone) {
        this.customerPhonenum = phone.phoneNo;
        this.oTpModel.source = 'customer';
        this.oTpModel.source_key = 'mobile';
        this.oTpModel.source_value = phone.phoneNo;
        this.oTpModel.isMobileLogin = true;
        if (this.customerPhonenum == '') {
            this.openToast('Please enter the registered Mobile Number');
            return;
        }
        this.api.getOtp(this.oTpModel).subscribe((res) => {
            if (res.status == 200) {
                localStorage.setItem('customerPhonenum', this.customerPhonenum);
                this.router.navigate(['otp']);
                this.openToast(res === null || res === void 0 ? void 0 : res.message);
                const navigationExtras = {
                    queryParams: {
                        'screenName': 'login'
                    },
                };
                this.api.sendNavParam(navigationExtras);
                this.loginForm.reset();
            }
            else {
                this.openToast(res === null || res === void 0 ? void 0 : res.message);
            }
        }, (err) => {
            this.openToast(err);
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
    back() {
        this.router.navigateByUrl('login-landing');
    }
    forgotPassword() {
        var _a;
        if ((_a = this.loginForm.get('phoneNo')) === null || _a === void 0 ? void 0 : _a.valid) {
            this.router.navigateByUrl('/forget-password', {
                state: { data: this.loginForm.value.phoneNo },
            });
        }
        else {
            this.router.navigateByUrl('/forget-password');
        }
    }
    ionViewWillLeave() {
        var _a;
        (_a = this.loginForm.get('isOtp')) === null || _a === void 0 ? void 0 : _a.patchValue(false);
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 98433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "section {\n  position: relative;\n  background: url('3@3x.png');\n  background-repeat: round;\n  color: #fff;\n  height: 40%;\n}\n\n.item-box-white {\n  width: 100%;\n  height: 100%;\n  background: #ffffff;\n  border-radius: 60px 0 0 0;\n  height: 60%;\n  position: absolute;\n}\n\nion-toolbar {\n  --background: transparent;\n  --color: white;\n}\n\n.bg-home-6 {\n  height: 132px;\n  width: 184px;\n  right: 0px;\n  background: radial-gradient(circle at 10% 130%, rgba(214, 214, 214, 0.2117647059) 68%, transparent 67.5%);\n  position: absolute;\n  top: 0px;\n  transform: rotate(180deg);\n}\n\n.bg-bottom-home-6 {\n  height: 132px;\n  width: 184px;\n  margin-left: 0px;\n  background: radial-gradient(circle at 10% 130%, rgba(214, 214, 214, 0.2117647059) 68%, transparent 67.5%);\n  float: left;\n  position: absolute;\n  bottom: 0px;\n}\n\n.fontpassword {\n  position: relative;\n}\n\n.forgot,\na {\n  text-align: center;\n  font-size: 14px;\n  color: #456EFE !important;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n}\n\n.ml-10 {\n  margin-left: -10px;\n  font-size: 13px;\n  opacity: 67%;\n}\n\n.fontpassword i {\n  position: absolute;\n  right: 15px;\n  top: 44px;\n  color: #456EFE;\n}\n\n.form-box {\n  padding: 25px;\n  height: 250px;\n  position: relative;\n  top: -10%;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n\n.form-box .logo {\n  width: 130px;\n  margin: auto;\n}\n\n.title {\n  vertical-align: top;\n  color: #231F20;\n  font-size: 24px;\n  font-weight: bold;\n  font-family: \"Montserrat\" !important;\n  position: relative;\n  text-align: left;\n  margin-top: 15px;\n  margin-bottom: 6px;\n}\n\n.sub-title {\n  vertical-align: top;\n  color: #000000 !important;\n  font-size: 14px;\n  font-family: \"Montserrat\" !important;\n  opacity: 83%;\n  position: relative;\n  text-align: left;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.form-box .or {\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 15px;\n  font-weight: 600;\n  color: #231F20;\n}\n\n.form-box .forgot a:hover {\n  color: #EB001B;\n}\n\nion-item {\n  --highlight-color-valid: #456efe !important;\n}\n\n.footer-link {\n  font-size: 14px;\n  font-weight: 400;\n  color: #231F20;\n  text-align: center;\n  position: fixed;\n  bottom: 20px;\n  left: 0px;\n  right: 0px;\n}\n\n.logo-icon {\n  margin: 0 auto;\n  text-align: start;\n  width: 175px;\n  height: 45px;\n  margin-top: 60px;\n  opacity: 100%;\n}\n\n.back-nav {\n  padding: 19px 0px 0px 0px;\n}\n\n.back-nav-color {\n  color: #000000 !important;\n}\n\n.footer-link a {\n  color: #be2623;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.footer-link a:hover {\n  color: #f79e1b;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.pass_field {\n  position: relative;\n}\n\n.pass_field ion-icon {\n  color: #456EFE;\n  position: absolute;\n  top: 50%;\n  right: 4%;\n  transform: translateY(-50%);\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEdJVEhVQiUyMFJFUE9TSVRPUllfVUlcXGlDdXN0TW9iaWxlLXYyXFxzcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUNDRjs7QURHQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHlHQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBS0EseUJBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5R0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNBRjs7QURLQTtFQUNFLGtCQUFBO0FDRkY7O0FES0E7O0VBRUUsa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUNGRjs7QURLQTtFQUVFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDSEY7O0FETUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0hGOztBRE1BO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0pGOztBRFNBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDTkY7O0FEVUE7RUFDRSxjQUFBO0FDUEY7O0FEVUE7RUFDRSwyQ0FBQTtBQ1BGOztBRFVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ1BGOztBRFVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNQRjs7QURVQTtFQUNFLHlCQUFBO0FDUEY7O0FEVUE7RUFDRSx5QkFBQTtBQ1BGOztBRFVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ1BGOztBRFVBO0VBQ0UsY0FBQTtBQ1BGOztBRFVBO0VBQ0UsV0FBQTtBQ1BGOztBRFVBO0VBQ0Usa0JBQUE7QUNQRjs7QURTRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0FDUEoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy8zQDN4LnBuZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBoZWlnaHQ6IDQwJTtcclxufVxyXG5cclxuLml0ZW0tYm94LXdoaXRlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiA2MHB4IDAgMCAwO1xyXG4gIGhlaWdodDogNjAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4uYmctaG9tZS02IHtcclxuICBoZWlnaHQ6IDEzMnB4O1xyXG4gIHdpZHRoOiAxODRweDtcclxuICByaWdodDogMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTAlIDEzMCUsICNkNmQ2ZDYzNiA2OCUsIHRyYW5zcGFyZW50IDY3LjUlKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5iZy1ib3R0b20taG9tZS02IHtcclxuICBoZWlnaHQ6IDEzMnB4O1xyXG4gIHdpZHRoOiAxODRweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTAlIDEzMCUsICNkNmQ2ZDYzNiA2OCUsIHRyYW5zcGFyZW50IDY3LjUlKTtcclxuICBmbG9hdDogbGVmdDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmZvbnRwYXNzd29yZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZm9yZ290LFxyXG5hIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjNDU2RUZFICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5tbC0xMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBvcGFjaXR5OiA2NyU7XHJcbn1cclxuXHJcbi5mb250cGFzc3dvcmQgaSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIHRvcDogNDRweDtcclxuICBjb2xvcjogIzQ1NkVGRTtcclxufVxyXG5cclxuLmZvcm0tYm94IHtcclxuICAvLyB3aWR0aDogMzAwcHg7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0xMCU7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHJpZ2h0OiAwcHhcclxufVxyXG5cclxuLmZvcm0tYm94IC5sb2dvIHtcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgY29sb3I6ICMyMzFGMjA7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIC8vIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogODMlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuXHJcblxyXG4uZm9ybS1ib3ggLm9yIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMyMzFGMjA7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1ib3ggLmZvcmdvdCBhOmhvdmVyIHtcclxuICBjb2xvcjogI0VCMDAxQjtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIC0taGlnaGxpZ2h0LWNvbG9yLXZhbGlkOiAjNDU2ZWZlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb290ZXItbGluayB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICMyMzFGMjA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDIwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5sb2dvLWljb24ge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIHdpZHRoOiAxNzVweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICBvcGFjaXR5OiAxMDAlO1xyXG59XHJcblxyXG4uYmFjay1uYXYge1xyXG4gIHBhZGRpbmc6IDE5cHggMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5iYWNrLW5hdi1jb2xvciB7XHJcbiAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvb3Rlci1saW5rIGEge1xyXG4gIGNvbG9yOiAjYmUyNjIzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5mb290ZXItbGluayBhOmhvdmVyIHtcclxuICBjb2xvcjogI2Y3OWUxYjtcclxufVxyXG5cclxuLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucGFzc19maWVsZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBpb24taWNvbiB7XHJcbiAgICBjb2xvcjogIzQ1NkVGRTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgcmlnaHQ6IDQlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgei1pbmRleDogMjtcclxuICB9XHJcbn0iLCJzZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzLzNAM3gucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDQwJTtcbn1cblxuLml0ZW0tYm94LXdoaXRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNjBweCAwIDAgMDtcbiAgaGVpZ2h0OiA2MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmJnLWhvbWUtNiB7XG4gIGhlaWdodDogMTMycHg7XG4gIHdpZHRoOiAxODRweDtcbiAgcmlnaHQ6IDBweDtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAxMCUgMTMwJSwgcmdiYSgyMTQsIDIxNCwgMjE0LCAwLjIxMTc2NDcwNTkpIDY4JSwgdHJhbnNwYXJlbnQgNjcuNSUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5iZy1ib3R0b20taG9tZS02IHtcbiAgaGVpZ2h0OiAxMzJweDtcbiAgd2lkdGg6IDE4NHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDEwJSAxMzAlLCByZ2JhKDIxNCwgMjE0LCAyMTQsIDAuMjExNzY0NzA1OSkgNjglLCB0cmFuc3BhcmVudCA2Ny41JSk7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xufVxuXG4uZm9udHBhc3N3b3JkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZm9yZ290LFxuYSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzQ1NkVGRSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubWwtMTAge1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgb3BhY2l0eTogNjclO1xufVxuXG4uZm9udHBhc3N3b3JkIGkge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNXB4O1xuICB0b3A6IDQ0cHg7XG4gIGNvbG9yOiAjNDU2RUZFO1xufVxuXG4uZm9ybS1ib3gge1xuICBwYWRkaW5nOiAyNXB4O1xuICBoZWlnaHQ6IDI1MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEwJTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbn1cblxuLmZvcm0tYm94IC5sb2dvIHtcbiAgd2lkdGg6IDEzMHB4O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi50aXRsZSB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGNvbG9yOiAjMjMxRjIwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5zdWItdGl0bGUge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiA4MyU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmZvcm0tYm94IC5vciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgY29sb3I6ICMyMzFGMjA7XG59XG5cbi5mb3JtLWJveCAuZm9yZ290IGE6aG92ZXIge1xuICBjb2xvcjogI0VCMDAxQjtcbn1cblxuaW9uLWl0ZW0ge1xuICAtLWhpZ2hsaWdodC1jb2xvci12YWxpZDogIzQ1NmVmZSAhaW1wb3J0YW50O1xufVxuXG4uZm9vdGVyLWxpbmsge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMjMxRjIwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG59XG5cbi5sb2dvLWljb24ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIHdpZHRoOiAxNzVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICBvcGFjaXR5OiAxMDAlO1xufVxuXG4uYmFjay1uYXYge1xuICBwYWRkaW5nOiAxOXB4IDBweCAwcHggMHB4O1xufVxuXG4uYmFjay1uYXYtY29sb3Ige1xuICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xufVxuXG4uZm9vdGVyLWxpbmsgYSB7XG4gIGNvbG9yOiAjYmUyNjIzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmZvb3Rlci1saW5rIGE6aG92ZXIge1xuICBjb2xvcjogI2Y3OWUxYjtcbn1cblxuLmZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnBhc3NfZmllbGQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ucGFzc19maWVsZCBpb24taWNvbiB7XG4gIGNvbG9yOiAjNDU2RUZFO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICByaWdodDogNCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgei1pbmRleDogMjtcbn0iXX0= */";

/***/ }),

/***/ 96752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <section>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button fill=\"clear\" (click)=\"back()\">\r\n          <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" class=\"back-nav-color\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n    \r\n    <div class=\"logo-icon\">\r\n      <div class=\"logo\"><img src=\"assets/images/Demobank.svg\" class=\"w-100\"></div>\r\n    </div>\r\n  </section>\r\n  <div class=\"item-box-white\">\r\n    <div class=\"form-box\">\r\n      <div class=\"title\">Sign In</div>\r\n      <p class=\"sub-title\">Enter your details to get started</p>\r\n\r\n      <form [formGroup]=\"loginForm\" *ngIf=\"loginForm\">\r\n\r\n        <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n          <mat-label>Phone Number</mat-label>\r\n          <input type=\"tel\" matInput name=\"username\" formControlName=\"phoneNo\" #phone (keyup)=\"_keyPress($event)\"\r\n            placeholder=\"Phone Number\" maxLength=\"10\" autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n\r\n\r\n        <mat-checkbox formControlName=\"isOtp\" color=\"primary\" class=\"app-font\">\r\n          Sign in using OTP\r\n        </mat-checkbox>\r\n\r\n        <mat-form-field class=\"full-width mt-2\" appearance=\"outline\" *ngIf=\"loginForm.get('isOtp').value == false\">\r\n          <mat-label>Password</mat-label>\r\n          <input [type]=\"hide ? 'text' : 'password'\" name=\"password\" matInput formControlName=\"password\"\r\n            placeholder=\"Enter Password\" autocomplete=\"off\" />\r\n          <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\"\r\n            [attr.aria-pressed]=\"hide\">\r\n            <mat-icon color=\"primary\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n          </button>\r\n        </mat-form-field>\r\n\r\n\r\n        <div class=\"forgot\">\r\n          <a class=\"text-right\" (click)=\"forgotPassword()\">Forgot password ?</a>\r\n        </div>\r\n\r\n      </form>\r\n\r\n      <div class=\"continue_btn\">\r\n        <ng-container *ngIf=\"isLoading; else showLoading\">\r\n          <ion-button expand=\"full\" shape=\"round\" class=\"my-5\">\r\n            <ion-spinner name=\"circles\"></ion-spinner>\r\n          </ion-button>\r\n        </ng-container>\r\n        <ng-template #showLoading>\r\n          <ion-button expand=\"full\" shape=\"round\" class=\"my-3\" (click)=\"continue(loginForm.value)\">CONTINUE\r\n          </ion-button>\r\n        </ng-template>\r\n      </div>\r\n      <!-- <ion-button expand=\"full\" shape=\"round\" class=\"my-3\" (click)=\"fingerprint()\">fingerprint\r\n      </ion-button>\r\n      <ion-button expand=\"full\" shape=\"round\" class=\"my-3\" (click)=\"faceid()\">faceid\r\n      </ion-button> -->\r\n\r\n      <ion-item class=\"ion-no-border\" lines=\"none\">\r\n        <ion-label class=\"text-center app-font\">\r\n          <h6><small>Version 0.0.19</small></h6>\r\n          <p><small>Build 19</small></p>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_login_login_page_ts.js.map