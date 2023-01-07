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

module.exports = "section {\n  position: relative;\n  background: url('3@3x.png');\n  background-repeat: round;\n  color: #fff;\n  height: 40%;\n}\n\n.logo-icon {\n  margin: 0 auto;\n  text-align: start;\n  width: 175px;\n  height: 45px;\n  margin-top: 60px;\n  opacity: 100%;\n}\n\n.back-nav {\n  padding: 19px 0px 0px 0px;\n}\n\n.back-nav-color {\n  color: #000000 !important;\n}\n\n.item-box-white {\n  width: 100%;\n  height: 100%;\n  background: #ffffff;\n  border-radius: 60px 0 0 0;\n  height: 60%;\n  position: absolute;\n}\n\n.login-logo {\n  padding: 20px;\n  min-height: 140px;\n  margin-top: 15%;\n  text-align: center;\n}\n\n.login-logo img {\n  max-width: 120px;\n  margin-top: -9%;\n}\n\n.otp-text {\n  color: #A2A0A8;\n  font-size: 16px;\n}\n\n.forgot,\na {\n  text-align: center;\n  font-size: 14px;\n  color: #456EFE !important;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n}\n\n.fieldCard {\n  padding-top: 50%;\n  padding-left: 5%;\n}\n\n.subtitle {\n  padding-left: 5%;\n}\n\n.form-box {\n  padding: 25px;\n  height: 100%;\n  position: relative;\n  top: -10%;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.forgot_pass {\n  font-size: 24px;\n  font-weight: 700;\n}\n\n.phone_num_field {\n  margin-top: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdldHQtcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtBQUNKOztBQUVFO0VBQ0UseUJBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtFQUVBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBQUo7O0FBR0U7O0VBRUUsa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUFKOztBQUdFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdFO0VBQ0UsZ0JBQUE7QUFBSjs7QUFHRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFBSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUNFO0VBQ0UsZ0JBQUE7QUFFSiIsImZpbGUiOiJmb3JnZXR0LXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzLzNAM3gucG5nJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGhlaWdodDogNDAlO1xyXG4gIH1cclxuICBcclxuICAubG9nby1pY29uIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICB3aWR0aDogMTc1cHg7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gICAgb3BhY2l0eTogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgLmJhY2stbmF2IHtcclxuICAgIHBhZGRpbmc6IDE5cHggMHB4IDBweCAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5iYWNrLW5hdi1jb2xvciB7XHJcbiAgICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuaXRlbS1ib3gtd2hpdGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNjBweCAwIDAgMDtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuICBcclxuICAubG9naW4tbG9nbyB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgLy8gbWluLWhlaWdodDogMTkwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxNDBweDtcclxuICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWxvZ28gaW1nIHtcclxuICAgIG1heC13aWR0aDogMTIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtOSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5vdHAtdGV4dCB7XHJcbiAgICBjb2xvcjogI0EyQTBBODtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbiAgXHJcbiAgLmZvcmdvdCxcclxuICBhIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjNDU2RUZFICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5maWVsZENhcmQge1xyXG4gICAgcGFkZGluZy10b3A6IDUwJTtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdWJ0aXRsZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1ib3gge1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTEwJTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICAuZm9yZ290X3Bhc3Mge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9XHJcbiAgLnBob25lX251bV9maWVsZCB7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gIH0iXX0= */";

/***/ }),

/***/ 54985:
/*!******************************************************************************!*\
  !*** ./src/app/pages/forgett-password/forgett-password.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <section>\r\n    <div class=\"back-nav\">\r\n      <ion-button fill=\"clear\" (click)=\"back()\">\r\n        <ion-icon\r\n          slot=\"icon-only\"\r\n          name=\"chevron-back-outline\"\r\n          class=\"back-nav-color\"\r\n        ></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n\r\n    <div class=\"logo-icon\">\r\n      <div class=\"logo\">\r\n        <img src=\"assets/images/Demobank.svg\" class=\"w-100\" />\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <div class=\"item-box-white\">\r\n    <div class=\"form-box\">\r\n      <form class=\"form_container\" novalidate>\r\n        <div class=\"otp-box text-left\">\r\n          <ion-text>\r\n            <h4 class=\"forgot_pass\">Forgot Password</h4>\r\n            <p class=\"otp-text\">\r\n              Enter your mobile number we will send You 6 digits verification\r\n              code\r\n            </p>\r\n            <!-- <h6>{{customerPhonenum}}</h6> -->\r\n          </ion-text>\r\n        </div>\r\n        <!-- OTP INPUT START -->\r\n        <ion-item fill=\"outline\" class=\"phone_num_field\">\r\n          <ion-label position=\"floating\">Phone Number</ion-label>\r\n          <ion-input\r\n            type=\"text\"\r\n            [formControl]=\"phoneNumber\"\r\n            class=\"form-control\"\r\n            id=\"phonenumber\"\r\n            placeholder=\"Phone Number\"\r\n            name=\"Username\"\r\n            placeholder=\"Phone Number\"\r\n            autocomplete=\"off\"\r\n            maxLength=\"10\"\r\n          ></ion-input>\r\n        </ion-item>\r\n        <!-- OTP INPUT END -->\r\n      </form>\r\n      <div>\r\n        <ng-container *ngIf=\"isLoading; else showLoading\">\r\n          <ion-button expand=\"full\" shape=\"round\" class=\"my-5\">\r\n            <ion-spinner name=\"circles\"></ion-spinner>\r\n          </ion-button>\r\n        </ng-container>\r\n        <ng-template #showLoading>\r\n          <ion-button\r\n            expand=\"full\"\r\n            shape=\"round\"\r\n            (click)=\"getOtp()\"\r\n          >\r\n            CONTINUE\r\n          </ion-button>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_forgett-password_forgett-password_module_ts.js.map