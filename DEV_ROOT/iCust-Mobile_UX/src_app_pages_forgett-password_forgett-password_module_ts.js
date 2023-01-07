"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_forgett-password_forgett-password_module_ts"],{

/***/ 22002:
/*!***************************************************************************!*\
  !*** ./src/app/pages/forgett-password/forgett-password-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgettPasswordPageRoutingModule": () => (/* binding */ ForgettPasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _forgett_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgett-password.page */ 28321);




const routes = [
    {
        path: '',
        component: _forgett_password_page__WEBPACK_IMPORTED_MODULE_0__.ForgettPasswordPage
    }
];
let ForgettPasswordPageRoutingModule = class ForgettPasswordPageRoutingModule {
};
ForgettPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgettPasswordPageRoutingModule);



/***/ }),

/***/ 4242:
/*!*******************************************************************!*\
  !*** ./src/app/pages/forgett-password/forgett-password.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgettPasswordPageModule": () => (/* binding */ ForgettPasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _forgett_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgett-password-routing.module */ 22002);
/* harmony import */ var _forgett_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgett-password.page */ 28321);







let ForgettPasswordPageModule = class ForgettPasswordPageModule {
};
ForgettPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _forgett_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgettPasswordPageRoutingModule,
        ],
        declarations: [_forgett_password_page__WEBPACK_IMPORTED_MODULE_1__.ForgettPasswordPage],
    })
], ForgettPasswordPageModule);



/***/ }),

/***/ 28321:
/*!*****************************************************************!*\
  !*** ./src/app/pages/forgett-password/forgett-password.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgettPasswordPage": () => (/* binding */ ForgettPasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _forgett_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgett-password.page.html?ngResource */ 54985);
/* harmony import */ var _forgett_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgett-password.page.scss?ngResource */ 91199);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);







let ForgettPasswordPage = class ForgettPasswordPage {
    constructor(router, toastCtrl) {
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.phoneNumber = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControl('');
    }
    ngOnInit() { }
    back() {
        this.router.navigateByUrl('/login');
    }
    openToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: `${message}`,
                duration: 2500,
                position: 'middle',
            });
            toast.present();
        });
    }
    getOtp() {
        const pattern = /^([\+0-9]{3}[0-9]{10}|[0-9]{10})$/;
        if (pattern.test(this.phoneNumber.value)) {
            localStorage.setItem('customerPhonenum', this.phoneNumber.value);
            this.router.navigateByUrl('/otp', { state: { resetPass: true } });
        }
        else {
            this.openToast('Enter valid phone number');
        }
    }
};
ForgettPasswordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
ForgettPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-forgett-password',
        template: _forgett_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_forgett_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ForgettPasswordPage);



/***/ }),

/***/ 91199:
/*!******************************************************************************!*\
  !*** ./src/app/pages/forgett-password/forgett-password.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "section {\n  position: relative;\n  background: url('3@3x.png');\n  background-repeat: round;\n  color: #fff;\n  height: 40%;\n}\n\n.logo-icon {\n  margin: 0 auto;\n  text-align: start;\n  width: 175px;\n  height: 45px;\n  margin-top: 60px;\n  opacity: 100%;\n}\n\n.back-nav {\n  padding: 19px 0px 0px 0px;\n}\n\n.back-nav-color {\n  color: #000000 !important;\n}\n\n.item-box-white {\n  width: 100%;\n  height: 100%;\n  background: #ffffff;\n  border-radius: 60px 0 0 0;\n  height: 60%;\n  position: absolute;\n}\n\n.login-logo {\n  padding: 20px;\n  min-height: 140px;\n  margin-top: 15%;\n  text-align: center;\n}\n\n.login-logo img {\n  max-width: 120px;\n  margin-top: -9%;\n}\n\n.otp-text {\n  color: #A2A0A8;\n}\n\n.forgot,\na {\n  text-align: center;\n  font-size: 14px;\n  color: #456EFE !important;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n}\n\n.fieldCard {\n  padding-top: 50%;\n  padding-left: 5%;\n}\n\n.subtitle {\n  padding-left: 5%;\n}\n\n.form-box {\n  padding: 25px;\n  height: 100%;\n  position: relative;\n  top: -10%;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.forgot_pass {\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdldHQtcGFzc3dvcmQucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0SHViJTIwUmVwb3NpdG9yeSUyMG9sZFxcaUN1c3RNb2JpbGUtdjJcXHNyY1xcYXBwXFxwYWdlc1xcZm9yZ2V0dC1wYXNzd29yZFxcZm9yZ2V0dC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFRTtFQUNFLHlCQUFBO0FDQ0o7O0FERUU7RUFDRSx5QkFBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0VBRUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdFO0VBQ0UsY0FBQTtBQ0FKOztBREdFOztFQUVFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNBSjs7QURHRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBSjs7QURHRTtFQUNFLGdCQUFBO0FDQUo7O0FER0U7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FDQUo7O0FERUU7RUFDRSxnQkFBQTtBQ0NKIiwiZmlsZSI6ImZvcmdldHQtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvM0AzeC5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dvLWljb24ge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIHdpZHRoOiAxNzVweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICBvcGFjaXR5OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuYmFjay1uYXYge1xyXG4gICAgcGFkZGluZzogMTlweCAwcHggMHB4IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJhY2stbmF2LWNvbG9yIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5pdGVtLWJveC13aGl0ZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4IDAgMCAwO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi1sb2dvIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAvLyBtaW4taGVpZ2h0OiAxOTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDE0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAubG9naW4tbG9nbyBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC05JTtcclxuICB9XHJcbiAgXHJcbiAgLm90cC10ZXh0IHtcclxuICAgIGNvbG9yOiAjQTJBMEE4O1xyXG4gIH1cclxuICBcclxuICAuZm9yZ290LFxyXG4gIGEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM0NTZFRkUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmZpZWxkQ2FyZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICB9XHJcbiAgXHJcbiAgLnN1YnRpdGxlIHtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWJveCB7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMTAlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICByaWdodDogMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgfVxyXG4gIC5mb3Jnb3RfcGFzcyB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gIH0iLCJzZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzLzNAM3gucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDQwJTtcbn1cblxuLmxvZ28taWNvbiB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgd2lkdGg6IDE3NXB4O1xuICBoZWlnaHQ6IDQ1cHg7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG9wYWNpdHk6IDEwMCU7XG59XG5cbi5iYWNrLW5hdiB7XG4gIHBhZGRpbmc6IDE5cHggMHB4IDBweCAwcHg7XG59XG5cbi5iYWNrLW5hdi1jb2xvciB7XG4gIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtLWJveC13aGl0ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDYwcHggMCAwIDA7XG4gIGhlaWdodDogNjAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5sb2dpbi1sb2dvIHtcbiAgcGFkZGluZzogMjBweDtcbiAgbWluLWhlaWdodDogMTQwcHg7XG4gIG1hcmdpbi10b3A6IDE1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW4tbG9nbyBpbWcge1xuICBtYXgtd2lkdGg6IDEyMHB4O1xuICBtYXJnaW4tdG9wOiAtOSU7XG59XG5cbi5vdHAtdGV4dCB7XG4gIGNvbG9yOiAjQTJBMEE4O1xufVxuXG4uZm9yZ290LFxuYSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzQ1NkVGRSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZmllbGRDYXJkIHtcbiAgcGFkZGluZy10b3A6IDUwJTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxuLnN1YnRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxuLmZvcm0tYm94IHtcbiAgcGFkZGluZzogMjVweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTEwJTtcbiAgYm90dG9tOiAwcHg7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZm9yZ290X3Bhc3Mge1xuICBmb250LXdlaWdodDogNzAwO1xufSJdfQ== */";

/***/ }),

/***/ 54985:
/*!******************************************************************************!*\
  !*** ./src/app/pages/forgett-password/forgett-password.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <section>\r\n    <div class=\"back-nav\">\r\n      <ion-button fill=\"clear\" (click)=\"back()\">\r\n        <ion-icon\r\n          slot=\"icon-only\"\r\n          name=\"chevron-back-outline\"\r\n          class=\"back-nav-color\"\r\n        ></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n\r\n    <div class=\"logo-icon\">\r\n      <div class=\"logo\">\r\n        <img src=\"assets/images/Demobank.svg\" class=\"w-100\" />\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <div class=\"item-box-white\">\r\n    <div class=\"form-box\">\r\n      <form class=\"form_container\" novalidate>\r\n        <div class=\"otp-box text-left\">\r\n          <ion-text>\r\n            <h4 class=\"forgot_pass\">Forgot Password</h4>\r\n            <p class=\"otp-text\">\r\n              Enter your mobile number we will send You 6 digits verification\r\n              code\r\n            </p>\r\n            <!-- <h6>{{customerPhonenum}}</h6> -->\r\n          </ion-text>\r\n        </div>\r\n        <!-- OTP INPUT START -->\r\n        <ion-item fill=\"outline\">\r\n          <ion-label position=\"floating\">Phone Number</ion-label>\r\n          <ion-input\r\n            type=\"text\"\r\n            [formControl]=\"phoneNumber\"\r\n            class=\"form-control\"\r\n            id=\"phonenumber\"\r\n            placeholder=\"Phone Number\"\r\n            name=\"Username\"\r\n            placeholder=\"Phone Number\"\r\n            autocomplete=\"off\"\r\n            maxLength=\"10\"\r\n          ></ion-input>\r\n        </ion-item>\r\n        <!-- OTP INPUT END -->\r\n      </form>\r\n      <div>\r\n        <ng-container *ngIf=\"isLoading; else showLoading\">\r\n          <ion-button expand=\"full\" shape=\"round\" class=\"my-5\">\r\n            <ion-spinner name=\"circles\"></ion-spinner>\r\n          </ion-button>\r\n        </ng-container>\r\n        <ng-template #showLoading>\r\n          <ion-button\r\n            expand=\"full\"\r\n            shape=\"round\"\r\n            (click)=\"getOtp()\"\r\n          >\r\n            CONTINUE\r\n          </ion-button>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_forgett-password_forgett-password_module_ts.js.map