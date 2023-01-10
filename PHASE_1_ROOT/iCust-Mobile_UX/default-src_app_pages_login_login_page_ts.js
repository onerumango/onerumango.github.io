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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ 52468);










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
            this.api.validatePassword(loginForm.phoneNo, loginForm.password).subscribe((res) => {
                var _a, _b, _c, _d, _e;
                if (res.status == 200) {
                    localStorage.setItem('customerPhonenum', loginForm.phoneNo);
                    sessionStorage.setItem('customer_id', (_a = res['data']) === null || _a === void 0 ? void 0 : _a.customerId);
                    localStorage.setItem('firstName', (_b = res['data']) === null || _b === void 0 ? void 0 : _b.firstName);
                    localStorage.setItem('lastName', (_c = res['data']) === null || _c === void 0 ? void 0 : _c.lastName);
                    localStorage.setItem('customer_id', (_d = res['data']) === null || _d === void 0 ? void 0 : _d.customerId);
                    localStorage.setItem('customer_details', JSON.stringify(res['data']));
                    if (((_e = res['data']) === null || _e === void 0 ? void 0 : _e.firstTimeLogin) == "Y") {
                        this.router.navigateByUrl('/new-passwordchange');
                    }
                    else {
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

module.exports = "section {\n  position: relative;\n  background: url('3@3x.png');\n  background-repeat: round;\n  color: #fff;\n  height: 40%;\n}\n\n.item-box-white {\n  width: 100%;\n  height: 100%;\n  background: #ffffff;\n  border-radius: 60px 0 0 0;\n  height: 60%;\n  position: absolute;\n}\n\nion-toolbar {\n  --background: transparent;\n  --color: white;\n}\n\n.bg-home-6 {\n  height: 132px;\n  width: 184px;\n  right: 0px;\n  background: radial-gradient(circle at 10% 130%, rgba(214, 214, 214, 0.2117647059) 68%, transparent 67.5%);\n  position: absolute;\n  top: 0px;\n  transform: rotate(180deg);\n}\n\n.bg-bottom-home-6 {\n  height: 132px;\n  width: 184px;\n  margin-left: 0px;\n  background: radial-gradient(circle at 10% 130%, rgba(214, 214, 214, 0.2117647059) 68%, transparent 67.5%);\n  float: left;\n  position: absolute;\n  bottom: 0px;\n}\n\n.fontpassword {\n  position: relative;\n}\n\n.forgot,\na {\n  text-align: center;\n  font-size: 14px;\n  color: #456EFE !important;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n}\n\n.ml-10 {\n  margin-left: -10px;\n  font-size: 13px;\n  opacity: 67%;\n}\n\n.fontpassword i {\n  position: absolute;\n  right: 15px;\n  top: 44px;\n  color: #456EFE;\n}\n\n.form-box {\n  padding: 25px;\n  height: 250px;\n  position: relative;\n  top: -10%;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n\n.form-box .logo {\n  width: 130px;\n  margin: auto;\n}\n\n.title {\n  vertical-align: top;\n  color: #231F20;\n  font-size: 24px;\n  font-weight: bold;\n  font-family: \"Montserrat\" !important;\n  position: relative;\n  text-align: left;\n  margin-top: 15px;\n  margin-bottom: 6px;\n}\n\n.sub-title {\n  vertical-align: top;\n  color: #000000 !important;\n  font-size: 14px;\n  font-family: \"Montserrat\" !important;\n  opacity: 83%;\n  position: relative;\n  text-align: left;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.form-box .or {\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 15px;\n  font-weight: 600;\n  color: #231F20;\n}\n\n.form-box .forgot a:hover {\n  color: #EB001B;\n}\n\nion-item {\n  --highlight-color-valid: #456efe !important;\n}\n\n.footer-link {\n  font-size: 14px;\n  font-weight: 400;\n  color: #231F20;\n  text-align: center;\n  position: fixed;\n  bottom: 20px;\n  left: 0px;\n  right: 0px;\n}\n\n.logo-icon {\n  margin: 0 auto;\n  text-align: start;\n  width: 175px;\n  height: 45px;\n  margin-top: 60px;\n  opacity: 100%;\n}\n\n.back-nav {\n  padding: 19px 0px 0px 0px;\n}\n\n.back-nav-color {\n  color: #000000 !important;\n}\n\n.footer-link a {\n  color: #be2623;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.footer-link a:hover {\n  color: #f79e1b;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.pass_field {\n  position: relative;\n}\n\n.pass_field ion-icon {\n  color: #456EFE;\n  position: absolute;\n  top: 50%;\n  right: 4%;\n  transform: translateY(-50%);\n  z-index: 2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUdBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFLQSx5QkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHlHQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUtBO0VBQ0Usa0JBQUE7QUFGRjs7QUFLQTs7RUFFRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBRkY7O0FBS0E7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsY0FBQTtBQUZGOztBQUtBO0VBRUUsYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFIRjs7QUFNQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FBSEY7O0FBTUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUVBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBSkY7O0FBU0E7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFORjs7QUFVQTtFQUNFLGNBQUE7QUFQRjs7QUFVQTtFQUNFLDJDQUFBO0FBUEY7O0FBVUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBUEY7O0FBVUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQVBGOztBQVVBO0VBQ0UseUJBQUE7QUFQRjs7QUFVQTtFQUNFLHlCQUFBO0FBUEY7O0FBVUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBUEY7O0FBVUE7RUFDRSxjQUFBO0FBUEY7O0FBVUE7RUFDRSxXQUFBO0FBUEY7O0FBVUE7RUFDRSxrQkFBQTtBQVBGOztBQVNFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtFQUNBLFVBQUE7QUFQSiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzLzNAM3gucG5nJyk7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJvdW5kO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGhlaWdodDogNDAlO1xyXG59XHJcblxyXG4uaXRlbS1ib3gtd2hpdGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDYwcHggMCAwIDA7XHJcbiAgaGVpZ2h0OiA2MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi5iZy1ob21lLTYge1xyXG4gIGhlaWdodDogMTMycHg7XHJcbiAgd2lkdGg6IDE4NHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAxMCUgMTMwJSwgI2Q2ZDZkNjM2IDY4JSwgdHJhbnNwYXJlbnQgNjcuNSUpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDBweDtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG5cclxuLmJnLWJvdHRvbS1ob21lLTYge1xyXG4gIGhlaWdodDogMTMycHg7XHJcbiAgd2lkdGg6IDE4NHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAxMCUgMTMwJSwgI2Q2ZDZkNjM2IDY4JSwgdHJhbnNwYXJlbnQgNjcuNSUpO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBib3R0b206IDBweDtcclxufVxyXG5cclxuXHJcblxyXG4uZm9udHBhc3N3b3JkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5mb3Jnb3QsXHJcbmEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM0NTZFRkUgIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLm1sLTEwIHtcclxuICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgZm9udC1zaXplOiAxM3B4O1xyXG4gIG9wYWNpdHk6IDY3JTtcclxufVxyXG5cclxuLmZvbnRwYXNzd29yZCBpIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDE1cHg7XHJcbiAgdG9wOiA0NHB4O1xyXG4gIGNvbG9yOiAjNDU2RUZFO1xyXG59XHJcblxyXG4uZm9ybS1ib3gge1xyXG4gIC8vIHdpZHRoOiAzMDBweDtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTEwJTtcclxuICBib3R0b206IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgcmlnaHQ6IDBweFxyXG59XHJcblxyXG4uZm9ybS1ib3ggLmxvZ28ge1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBtYXJnaW46IGF1dG87XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBjb2xvcjogIzIzMUYyMDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luLXRvcDogMTVweDtcclxuICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbn1cclxuXHJcbi5zdWItdGl0bGUge1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgLy8gZm9udC13ZWlnaHQ6IDYwMDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiA4MyU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5mb3JtLWJveCAub3Ige1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBjb2xvcjogIzIzMUYyMDtcclxufVxyXG5cclxuXHJcbi5mb3JtLWJveCAuZm9yZ290IGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjRUIwMDFCO1xyXG59XHJcblxyXG5pb24taXRlbSB7XHJcbiAgLS1oaWdobGlnaHQtY29sb3ItdmFsaWQ6ICM0NTZlZmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvb3Rlci1saW5rIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBjb2xvcjogIzIzMUYyMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMjBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgcmlnaHQ6IDBweDtcclxufVxyXG5cclxuLmxvZ28taWNvbiB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgd2lkdGg6IDE3NXB4O1xyXG4gIGhlaWdodDogNDVweDtcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIG9wYWNpdHk6IDEwMCU7XHJcbn1cclxuXHJcbi5iYWNrLW5hdiB7XHJcbiAgcGFkZGluZzogMTlweCAwcHggMHB4IDBweDtcclxufVxyXG5cclxuLmJhY2stbmF2LWNvbG9yIHtcclxuICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9vdGVyLWxpbmsgYSB7XHJcbiAgY29sb3I6ICNiZTI2MjM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmZvb3Rlci1saW5rIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjZjc5ZTFiO1xyXG59XHJcblxyXG4uZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wYXNzX2ZpZWxkIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjNDU2RUZFO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICByaWdodDogNCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxufSJdfQ== */";

/***/ }),

/***/ 96752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <section>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button fill=\"clear\" (click)=\"back()\">\r\n          <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" class=\"back-nav-color\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n    \r\n    <div class=\"logo-icon\">\r\n      <div class=\"logo\"><img src=\"assets/images/Demobank.svg\" class=\"w-100\"></div>\r\n    </div>\r\n  </section>\r\n  <div class=\"item-box-white\">\r\n    <div class=\"form-box\">\r\n      <div class=\"title\">Sign In</div>\r\n      <p class=\"sub-title\">Enter your details to get started</p>\r\n\r\n      <form [formGroup]=\"loginForm\" *ngIf=\"loginForm\">\r\n\r\n        <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n          <mat-label>Phone Number</mat-label>\r\n          <input type=\"tel\" matInput name=\"username\" formControlName=\"phoneNo\" #phone (keyup)=\"_keyPress($event)\"\r\n            placeholder=\"Phone Number\" maxLength=\"10\" autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n\r\n\r\n        <mat-checkbox formControlName=\"isOtp\" color=\"primary\" class=\"app-font\">\r\n          Sign in using OTP\r\n        </mat-checkbox>\r\n\r\n        <mat-form-field class=\"full-width mt-2\" appearance=\"outline\" *ngIf=\"loginForm.get('isOtp').value == false\">\r\n          <mat-label>Password</mat-label>\r\n          <input [type]=\"hide ? 'text' : 'password'\" name=\"password\" matInput formControlName=\"password\"\r\n            placeholder=\"Enter Password\" autocomplete=\"off\" />\r\n          <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\"\r\n            [attr.aria-pressed]=\"hide\">\r\n            <mat-icon color=\"primary\">{{hide ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n          </button>\r\n        </mat-form-field>\r\n\r\n\r\n        <div class=\"forgot\">\r\n          <a class=\"text-right\" (click)=\"forgotPassword()\">Forgot password ?</a>\r\n        </div>\r\n\r\n      </form>\r\n\r\n      <div class=\"continue_btn\">\r\n        <ng-container *ngIf=\"isLoading; else showLoading\">\r\n          <ion-button expand=\"full\" shape=\"round\" class=\"my-5\">\r\n            <ion-spinner name=\"circles\"></ion-spinner>\r\n          </ion-button>\r\n        </ng-container>\r\n        <ng-template #showLoading>\r\n          <ion-button expand=\"full\" shape=\"round\" class=\"my-3\" (click)=\"continue(loginForm.value)\">CONTINUE\r\n          </ion-button>\r\n        </ng-template>\r\n      </div>\r\n      <!-- <ion-button expand=\"full\" shape=\"round\" class=\"my-3\" (click)=\"fingerprint()\">fingerprint\r\n      </ion-button>\r\n      <ion-button expand=\"full\" shape=\"round\" class=\"my-3\" (click)=\"faceid()\">faceid\r\n      </ion-button> -->\r\n\r\n      <ion-item class=\"ion-no-border\" lines=\"none\">\r\n        <ion-label class=\"text-center app-font\">\r\n          <h6><small>Version 0.0.11</small></h6>\r\n          <p><small>Build 11</small></p>\r\n        </ion-label>\r\n      </ion-item>\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_login_login_page_ts.js.map