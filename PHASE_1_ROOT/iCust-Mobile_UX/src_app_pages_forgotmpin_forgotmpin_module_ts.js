"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_forgotmpin_forgotmpin_module_ts"],{

/***/ 88890:
/*!***************************************************************!*\
  !*** ./src/app/pages/forgotmpin/forgotmpin-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotmpinPageRoutingModule": () => (/* binding */ ForgotmpinPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _forgotmpin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotmpin.page */ 91401);




const routes = [
    {
        path: '',
        component: _forgotmpin_page__WEBPACK_IMPORTED_MODULE_0__.ForgotmpinPage
    }
];
let ForgotmpinPageRoutingModule = class ForgotmpinPageRoutingModule {
};
ForgotmpinPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgotmpinPageRoutingModule);



/***/ }),

/***/ 92135:
/*!*******************************************************!*\
  !*** ./src/app/pages/forgotmpin/forgotmpin.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotmpinPageModule": () => (/* binding */ ForgotmpinPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _forgotmpin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotmpin-routing.module */ 88890);
/* harmony import */ var _forgotmpin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotmpin.page */ 91401);
/* harmony import */ var src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared-material.module */ 84390);








let ForgotmpinPageModule = class ForgotmpinPageModule {
};
ForgotmpinPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _forgotmpin_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotmpinPageRoutingModule,
            src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_2__.SharedMaterialModule
        ],
        declarations: [_forgotmpin_page__WEBPACK_IMPORTED_MODULE_1__.ForgotmpinPage]
    })
], ForgotmpinPageModule);



/***/ }),

/***/ 91401:
/*!*****************************************************!*\
  !*** ./src/app/pages/forgotmpin/forgotmpin.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotmpinPage": () => (/* binding */ ForgotmpinPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _forgotmpin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotmpin.page.html?ngResource */ 10747);
/* harmony import */ var _forgotmpin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotmpin.page.scss?ngResource */ 66149);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.page */ 3058);









let ForgotmpinPage = class ForgotmpinPage {
    constructor(router, api, toastCtrl, fb) {
        this.router = router;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.fb = fb;
        this.oTpModel = new _login_login_page__WEBPACK_IMPORTED_MODULE_3__.otpModel();
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            phoneNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
        });
    }
    back() {
        this.router.navigateByUrl('/mpin');
    }
    getOtp(phone) {
        console.log(this.customerPhonenum, phone.phoneNo);
        const pattern = /^([\+0-9]{3}[0-9]{10}|[0-9]{10})$/;
        if (pattern.test(phone.phoneNo)) {
            this.oTpModel.source = 'customer';
            this.oTpModel.source_key = 'mobile';
            this.oTpModel.source_value = phone.phoneNo;
            this.oTpModel.isMobileLogin = true;
            this.api.getOtp(this.oTpModel).subscribe((res) => {
                var _a, _b;
                if (res.status == 200) {
                    localStorage.setItem('customerPhonenum', (_b = (_a = res['data']) === null || _a === void 0 ? void 0 : _a.otpVal) === null || _b === void 0 ? void 0 : _b.sourceValue);
                    this.router.navigate(['otp']);
                    this.openToast(res === null || res === void 0 ? void 0 : res.message);
                    const navigationExtras = {
                        queryParams: {
                            'screenName': 'forgotmpin'
                        },
                    };
                    this.api.sendNavParam(navigationExtras);
                    this.loginForm.reset();
                }
                else {
                    this.openToast(res === null || res === void 0 ? void 0 : res.message);
                }
            });
        }
        else {
            this.openToast('Enter valid phone number');
        }
    }
    openToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: `${message}`,
                duration: 2500,
                position: 'bottom',
            });
            toast.present();
        });
    }
};
ForgotmpinPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder }
];
ForgotmpinPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-forgotmpin',
        template: _forgotmpin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forgotmpin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgotmpinPage);



/***/ }),

/***/ 66149:
/*!******************************************************************!*\
  !*** ./src/app/pages/forgotmpin/forgotmpin.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "section {\n  position: relative;\n  background: url(\"/assets/images/3@3x.png\");\n  background-repeat: round;\n  color: #fff;\n  height: 40%;\n}\n\nion-toolbar {\n  --background: transparent;\n  --color: white;\n}\n\n.logo-icon {\n  margin: 0 auto;\n  text-align: start;\n  width: 175px;\n  height: 45px;\n  margin-top: 60px;\n  opacity: 100%;\n}\n\n.back-nav {\n  padding: 19px 0px 0px 0px;\n}\n\n.back-nav-color {\n  color: #000000 !important;\n}\n\n.item-box-white {\n  width: 100%;\n  height: 100%;\n  background: #ffffff;\n  border-radius: 60px 0 0 0;\n  height: 60%;\n  position: absolute;\n}\n\n.login-logo {\n  padding: 20px;\n  min-height: 140px;\n  margin-top: 15%;\n  text-align: center;\n}\n\n.login-logo img {\n  max-width: 120px;\n  margin-top: -9%;\n}\n\n.otp-text {\n  color: #B1B1B1;\n  font-size: 15px;\n  opacity: 83%;\n}\n\n.forgot,\na {\n  text-align: center;\n  font-size: 14px;\n  color: #456EFE !important;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n}\n\n.fieldCard {\n  padding-top: 50%;\n  padding-left: 5%;\n}\n\n.subtitle {\n  padding-left: 5%;\n}\n\n.form-box {\n  padding: 25px;\n  height: 250px;\n  position: relative;\n  top: -10%;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n\n.f_mpin {\n  font-weight: 700;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdG1waW4ucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcR0lUSFVCJTIwUkVQT1NJVE9SWV9VSVxcaUN1c3RNb2JpbGUtdjJcXHNyY1xcYXBwXFxwYWdlc1xcZm9yZ290bXBpblxcZm9yZ290bXBpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFFQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTs7RUFFRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtBQ0FGOztBREdBO0VBRUUsYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNERjs7QURLQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0ZGIiwiZmlsZSI6ImZvcmdvdG1waW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvM0AzeC5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgaGVpZ2h0OiA0MCU7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubG9nby1pY29uIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICB3aWR0aDogMTc1cHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgb3BhY2l0eTogMTAwJVxyXG59XHJcblxyXG4uYmFjay1uYXYge1xyXG4gIHBhZGRpbmc6IDE5cHggMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5iYWNrLW5hdi1jb2xvciB7XHJcbiAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLml0ZW0tYm94LXdoaXRlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiA2MHB4IDAgMCAwO1xyXG4gIGhlaWdodDogNjAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmxvZ2luLWxvZ28ge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgLy8gbWluLWhlaWdodDogMTkwcHg7XHJcbiAgbWluLWhlaWdodDogMTQwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTUlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luLWxvZ28gaW1nIHtcclxuICBtYXgtd2lkdGg6IDEyMHB4O1xyXG4gIG1hcmdpbi10b3A6IC05JTtcclxufVxyXG5cclxuLm90cC10ZXh0IHtcclxuICBjb2xvcjogI0IxQjFCMTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgb3BhY2l0eTogODMlO1xyXG59XHJcblxyXG4uZm9yZ290LFxyXG5hIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjNDU2RUZFICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5maWVsZENhcmQge1xyXG4gIHBhZGRpbmctdG9wOiA1MCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxufVxyXG5cclxuLnN1YnRpdGxlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG59XHJcblxyXG4uZm9ybS1ib3gge1xyXG4gIC8vIHdpZHRoOiAzMDBweDtcclxuICBwYWRkaW5nOiAyNXB4O1xyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTEwJTtcclxuICBib3R0b206IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuXHJcbn1cclxuXHJcbi5mX21waW4ge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG59Iiwic2VjdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvM0AzeC5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogNDAlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4ubG9nby1pY29uIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICB3aWR0aDogMTc1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgb3BhY2l0eTogMTAwJTtcbn1cblxuLmJhY2stbmF2IHtcbiAgcGFkZGluZzogMTlweCAwcHggMHB4IDBweDtcbn1cblxuLmJhY2stbmF2LWNvbG9yIHtcbiAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbn1cblxuLml0ZW0tYm94LXdoaXRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNjBweCAwIDAgMDtcbiAgaGVpZ2h0OiA2MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmxvZ2luLWxvZ28ge1xuICBwYWRkaW5nOiAyMHB4O1xuICBtaW4taGVpZ2h0OiAxNDBweDtcbiAgbWFyZ2luLXRvcDogMTUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1sb2dvIGltZyB7XG4gIG1heC13aWR0aDogMTIwcHg7XG4gIG1hcmdpbi10b3A6IC05JTtcbn1cblxuLm90cC10ZXh0IHtcbiAgY29sb3I6ICNCMUIxQjE7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgb3BhY2l0eTogODMlO1xufVxuXG4uZm9yZ290LFxuYSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzQ1NkVGRSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZmllbGRDYXJkIHtcbiAgcGFkZGluZy10b3A6IDUwJTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxuLnN1YnRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxuLmZvcm0tYm94IHtcbiAgcGFkZGluZzogMjVweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xMCU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG59XG5cbi5mX21waW4ge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDI0cHg7XG59Il19 */";

/***/ }),

/***/ 10747:
/*!******************************************************************!*\
  !*** ./src/app/pages/forgotmpin/forgotmpin.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <section>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button fill=\"clear\" (click)=\"back()\">\r\n          <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" class=\"back-nav-color\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n\r\n    <div class=\"logo-icon\">\r\n      <div class=\"logo\"><img src=\"assets/images/Demobank.svg\" class=\"w-100\"></div>\r\n    </div>\r\n  </section>\r\n  <div class=\"item-box-white\">\r\n    <div class=\"form-box\">\r\n      <form class=\"form_container\" [formGroup]=\"loginForm\" novalidate>\r\n        <div class=\"otp-box text-left\">\r\n          <ion-text>\r\n            <h4 class=\"f_mpin\">Forgot mPIN</h4>\r\n            <p class=\"otp-text\">Enter your mobile number we will send You 6 digits verification code</p>\r\n            <!-- <h6>{{customerPhonenum}}</h6> -->\r\n          </ion-text>\r\n        </div>\r\n        <!-- OTP INPUT START -->\r\n        <mat-form-field class=\"full-width mt-2\" appearance=\"outline\">\r\n          <mat-label>Phone Number</mat-label>\r\n          <input matInput type=\"text\" class=\"form-control\" id=\"phonenumber\" placeholder=\"Phone Number\" name=\"Username\"\r\n            formControlName=\"phoneNo\" placeholder=\"Phone Number\" autocomplete=\"off\" maxLength=\"10\" />\r\n        </mat-form-field>\r\n\r\n        <!-- OTP INPUT END -->\r\n\r\n      </form>\r\n      <div class=\"my-5\">\r\n        <ng-container *ngIf=\"isLoading; else showLoading\">\r\n          <ion-button expand=\"full\" shape=\"round\" class=\"my-5\">\r\n            <ion-spinner name=\"circles\"></ion-spinner>\r\n          </ion-button>\r\n        </ng-container>\r\n        <ng-template #showLoading>\r\n          <ion-button expand=\"full\" shape=\"round\" class=\"my-5\" (click)=\"getOtp(loginForm.value)\">\r\n            CONTINUE\r\n          </ion-button>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_forgotmpin_forgotmpin_module_ts.js.map