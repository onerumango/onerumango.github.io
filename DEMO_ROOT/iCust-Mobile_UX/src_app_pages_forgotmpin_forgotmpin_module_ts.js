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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _forgotmpin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotmpin-routing.module */ 88890);
/* harmony import */ var _forgotmpin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotmpin.page */ 91401);







let ForgotmpinPageModule = class ForgotmpinPageModule {
};
ForgotmpinPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _forgotmpin_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotmpinPageRoutingModule
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
        // this.customerPhonenum = localStorage.getItem('customerPhonenum');
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
            this.api.getOtp(this.oTpModel).subscribe((otpResp) => {
                console.log('Response Success', otpResp, phone.phoneNo);
                // if(otpResp){
                localStorage.setItem('customerPhonenum', otpResp.otpVal.sourceValue);
                // }
                if (Object.keys(otpResp).length === 0) {
                    this.openToast('No data found for Phone No. :' + phone.phoneNo);
                }
            });
            const navigationExtras = {
                queryParams: {
                    'screenName': 'forgotmpin'
                },
            };
            this.api.sendNavParam(navigationExtras);
            this.router.navigateByUrl('/otp');
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
                position: 'middle',
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

module.exports = "section {\n  position: relative;\n  background: url('3@3x.png');\n  background-repeat: round;\n  color: #fff;\n  height: 40%;\n}\n\n.logo-icon {\n  margin: 0 auto;\n  text-align: start;\n  width: 175px;\n  height: 45px;\n  margin-top: 60px;\n  opacity: 100%;\n}\n\n.back-nav {\n  padding: 19px 0px 0px 0px;\n}\n\n.back-nav-color {\n  color: #000000 !important;\n}\n\n.item-box-white {\n  width: 100%;\n  height: 100%;\n  background: #ffffff;\n  border-radius: 60px 0 0 0;\n  height: 60%;\n  position: absolute;\n}\n\n.login-logo {\n  padding: 20px;\n  min-height: 140px;\n  margin-top: 15%;\n  text-align: center;\n}\n\n.login-logo img {\n  max-width: 120px;\n  margin-top: -9%;\n}\n\n.otp-text {\n  color: #B1B1B1;\n  font-size: 15px;\n  opacity: 83%;\n}\n\n.forgot,\na {\n  text-align: center;\n  font-size: 14px;\n  color: #456EFE !important;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n}\n\n.fieldCard {\n  padding-top: 50%;\n  padding-left: 5%;\n}\n\n.subtitle {\n  padding-left: 5%;\n}\n\n.form-box {\n  padding: 25px;\n  height: 250px;\n  position: relative;\n  top: -10%;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n\n.f_mpin {\n  font-weight: 700;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdG1waW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtBQUNKOztBQUVFO0VBQ0UseUJBQUE7QUFDSjs7QUFFRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVFO0VBQ0UsYUFBQTtFQUVBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQUo7O0FBR0U7RUFDRSxnQkFBQTtFQUNBLGVBQUE7QUFBSjs7QUFHRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdFOztFQUVFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHRTtFQUNFLGdCQUFBO0FBQUo7O0FBR0U7RUFFRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQURKOztBQUtFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBRkoiLCJmaWxlIjoiZm9yZ290bXBpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy8zQDN4LnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJvdW5kO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ28taWNvbiB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgd2lkdGg6IDE3NXB4O1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgIG9wYWNpdHk6IDEwMCVcclxuICB9XHJcbiAgXHJcbiAgLmJhY2stbmF2IHtcclxuICAgIHBhZGRpbmc6IDE5cHggMHB4IDBweCAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5iYWNrLW5hdi1jb2xvciB7XHJcbiAgICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICBcclxuICAuaXRlbS1ib3gtd2hpdGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNjBweCAwIDAgMDtcclxuICAgIGhlaWdodDogNjAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuICBcclxuICAubG9naW4tbG9nbyB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgLy8gbWluLWhlaWdodDogMTkwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAxNDBweDtcclxuICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWxvZ28gaW1nIHtcclxuICAgIG1heC13aWR0aDogMTIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtOSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5vdHAtdGV4dCB7XHJcbiAgICBjb2xvcjogI0IxQjFCMTtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIG9wYWNpdHk6IDgzJTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcmdvdCxcclxuICBhIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjNDU2RUZFICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5maWVsZENhcmQge1xyXG4gICAgcGFkZGluZy10b3A6IDUwJTtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdWJ0aXRsZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIH1cclxuICBcclxuICAuZm9ybS1ib3gge1xyXG4gICAgLy8gd2lkdGg6IDMwMHB4O1xyXG4gICAgcGFkZGluZzogMjVweDtcclxuICAgIGhlaWdodDogMjUwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0xMCU7XHJcbiAgICBib3R0b206IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBcclxuICB9XHJcblxyXG4gIC5mX21waW57XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gIH0iXX0= */";

/***/ }),

/***/ 10747:
/*!******************************************************************!*\
  !*** ./src/app/pages/forgotmpin/forgotmpin.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <section>\r\n    <div class=\"back-nav\">\r\n      <ion-button fill=\"clear\" (click)=\"back()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" class=\"back-nav-color\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n\r\n    <div class=\"logo-icon\">\r\n      <div class=\"logo\"><img src=\"assets/images/Demobank.svg\" class=\"w-100\"></div>\r\n    </div>\r\n  </section>\r\n  <div class=\"item-box-white\">\r\n    <div class=\"form-box\">\r\n      <form class=\"form_container\" [formGroup]=\"loginForm\" novalidate>\r\n        <div class=\"otp-box text-left\">\r\n          <ion-text>\r\n            <h4 class=\"f_mpin\">Forgot mPIN</h4>\r\n            <p class=\"otp-text\">Enter your mobile number we will send You 6 digits verification code</p>\r\n            <!-- <h6>{{customerPhonenum}}</h6> -->\r\n          </ion-text>\r\n        </div>\r\n        <!-- OTP INPUT START -->\r\n        <ion-item fill=\"outline\">\r\n          <ion-label position=\"floating\">Phone Number</ion-label>\r\n          <ion-input type=\"text\" class=\"form-control\" id=\"phonenumber\" placeholder=\"Phone Number\" name=\"Username\"\r\n          formControlName=\"phoneNo\"  placeholder=\"Phone Number\" autocomplete=\"off\"\r\n            maxLength=\"10\"></ion-input>\r\n        </ion-item>\r\n         <!-- OTP INPUT END -->\r\n       \r\n      </form>\r\n      <div class=\"my-5\">\r\n        <ng-container *ngIf=\"isLoading; else showLoading\">\r\n          <ion-button expand=\"full\" shape=\"round\" class=\"my-5\">\r\n            <ion-spinner name=\"circles\"></ion-spinner>\r\n          </ion-button>\r\n        </ng-container>\r\n        <ng-template #showLoading>\r\n          <ion-button expand=\"full\" shape=\"round\" class=\"my-5\" (click)=\"getOtp(loginForm.value)\">\r\n            CONTINUE\r\n          </ion-button>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_forgotmpin_forgotmpin_module_ts.js.map