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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _forgett_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgett-password-routing.module */ 22002);
/* harmony import */ var _forgett_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgett-password.page */ 28321);
/* harmony import */ var src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared-material.module */ 84390);








let ForgettPasswordPageModule = class ForgettPasswordPageModule {
};
ForgettPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_2__.SharedMaterialModule,
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _forgett_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgett-password.page.html?ngResource */ 54985);
/* harmony import */ var _forgett_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgett-password.page.scss?ngResource */ 91199);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);








let ForgettPasswordPage = class ForgettPasswordPage {
    constructor(router, toastCtrl, api) {
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.api = api;
        this.phoneNumber = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('');
        this.isLoading = false;
    }
    ngOnInit() {
        if (this.routerData = this.router.getCurrentNavigation().extras.state) {
            this.routerData = this.router.getCurrentNavigation().extras.state;
            this.phoneNumber.setValue(this.routerData.data);
        }
    }
    back() {
        this.router.navigateByUrl('/login');
    }
    openToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
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
            this.isLoading = true;
            this.api.custpomerDetails(this.phoneNumber.value).subscribe((resp) => {
                this.isLoading = false;
                if (resp.custStatus === 'APPROVED') {
                    resp.custAccount = resp.custAccount.filter((card) => card.status === 'APPROVED');
                    localStorage.setItem('customerPhonenum', this.phoneNumber.value);
                    this.router.navigateByUrl('/otp', { state: { resetPass: true } });
                }
                else {
                    this.openToast('Your account status is not approved');
                    this.router.navigate(['login'], { replaceUrl: true });
                    this.isLoading = false;
                }
            });
        }
        else {
            this.openToast('Enter valid phone number');
        }
    }
};
ForgettPasswordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
ForgettPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
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

module.exports = "section {\n  position: relative;\n  background: url(\"/assets/images/3@3x.png\");\n  background-repeat: round;\n  color: #fff;\n  height: 40%;\n}\n\nion-toolbar {\n  --background: transparent;\n  --color: white;\n}\n\n.logo-icon {\n  margin: 0 auto;\n  text-align: start;\n  width: 175px;\n  height: 45px;\n  margin-top: 60px;\n  opacity: 100%;\n}\n\n.back-nav {\n  padding: 19px 0px 0px 0px;\n}\n\n.back-nav-color {\n  color: #000000 !important;\n}\n\n.item-box-white {\n  width: 100%;\n  height: 100%;\n  background: #ffffff;\n  border-radius: 60px 0 0 0;\n  height: 60%;\n  position: absolute;\n}\n\n.login-logo {\n  padding: 20px;\n  min-height: 140px;\n  margin-top: 15%;\n  text-align: center;\n}\n\n.login-logo img {\n  max-width: 120px;\n  margin-top: -9%;\n}\n\n.otp-text {\n  color: #A2A0A8;\n  font-size: 16px;\n}\n\n.forgot,\na {\n  text-align: center;\n  font-size: 14px;\n  color: #456EFE !important;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n}\n\n.fieldCard {\n  padding-top: 50%;\n  padding-left: 5%;\n}\n\n.subtitle {\n  padding-left: 5%;\n}\n\n.form-box {\n  padding: 25px;\n  height: 100%;\n  position: relative;\n  top: -10%;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.forgot_pass {\n  font-size: 24px;\n  font-weight: 700;\n}\n\n.phone_num_field {\n  margin-top: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdldHQtcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBRUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUFBRjs7QUFHQTs7RUFFRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtBQUFGIiwiZmlsZSI6ImZvcmdldHQtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvM0AzeC5wbmcnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgaGVpZ2h0OiA0MCU7XHJcbn1cclxuXHJcbmlvbi10b29sYmFyIHtcclxuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIC0tY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubG9nby1pY29uIHtcclxuICBtYXJnaW46IDAgYXV0bztcclxuICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICB3aWR0aDogMTc1cHg7XHJcbiAgaGVpZ2h0OiA0NXB4O1xyXG4gIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgb3BhY2l0eTogMTAwJTtcclxufVxyXG5cclxuLmJhY2stbmF2IHtcclxuICBwYWRkaW5nOiAxOXB4IDBweCAwcHggMHB4O1xyXG59XHJcblxyXG4uYmFjay1uYXYtY29sb3Ige1xyXG4gIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pdGVtLWJveC13aGl0ZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgYm9yZGVyLXJhZGl1czogNjBweCAwIDAgMDtcclxuICBoZWlnaHQ6IDYwJTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn1cclxuXHJcbi5sb2dpbi1sb2dvIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIC8vIG1pbi1oZWlnaHQ6IDE5MHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDE0MHB4O1xyXG4gIG1hcmdpbi10b3A6IDE1JTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5sb2dpbi1sb2dvIGltZyB7XHJcbiAgbWF4LXdpZHRoOiAxMjBweDtcclxuICBtYXJnaW4tdG9wOiAtOSU7XHJcbn1cclxuXHJcbi5vdHAtdGV4dCB7XHJcbiAgY29sb3I6ICNBMkEwQTg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcblxyXG4uZm9yZ290LFxyXG5hIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjNDU2RUZFICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5maWVsZENhcmQge1xyXG4gIHBhZGRpbmctdG9wOiA1MCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxufVxyXG5cclxuLnN1YnRpdGxlIHtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG59XHJcblxyXG4uZm9ybS1ib3gge1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0xMCU7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmZvcmdvdF9wYXNzIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnBob25lX251bV9maWVsZCB7XHJcbiAgbWFyZ2luLXRvcDogMnJlbTtcclxufSJdfQ== */";

/***/ }),

/***/ 54985:
/*!******************************************************************************!*\
  !*** ./src/app/pages/forgett-password/forgett-password.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <section>\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button fill=\"clear\" (click)=\"back()\">\r\n          <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" class=\"back-nav-color\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n\r\n    <div class=\"logo-icon\">\r\n      <div class=\"logo\">\r\n        <img src=\"assets/images/Demobank.svg\" class=\"w-100\" />\r\n      </div>\r\n    </div>\r\n  </section>\r\n  <div class=\"item-box-white\">\r\n    <div class=\"form-box\">\r\n      <form class=\"form_container\" novalidate>\r\n        <div class=\"otp-box text-left\">\r\n          <ion-text>\r\n            <h4 class=\"forgot_pass\">Forgot Password</h4>\r\n            <p class=\"otp-text\">\r\n              Enter your mobile number we will send You 6 digits verification\r\n              code\r\n            </p>\r\n            <!-- <h6>{{customerPhonenum}}</h6> -->\r\n          </ion-text>\r\n        </div>\r\n        <!-- OTP INPUT START -->\r\n\r\n        <mat-form-field class=\"full-width my-4\" appearance=\"outline\">\r\n          <mat-label>Phone Number</mat-label>\r\n          <input matInput \r\n          type=\"text\"\r\n          [formControl]=\"phoneNumber\"\r\n          placeholder=\"Phone Number\"\r\n          name=\"Username\"\r\n          placeholder=\"Phone Number\"\r\n          autocomplete=\"off\"\r\n          maxLength=\"10\"/>\r\n        </mat-form-field>\r\n\r\n        <!-- OTP INPUT END -->\r\n      </form>\r\n      <div>\r\n        <ng-container *ngIf=\"isLoading; else showLoading\">\r\n          <ion-button expand=\"full\" shape=\"round\" class=\"my-5\">\r\n            <ion-spinner name=\"circles\"></ion-spinner>\r\n          </ion-button>\r\n        </ng-container>\r\n        <ng-template #showLoading>\r\n          <ion-button\r\n            expand=\"full\"\r\n            shape=\"round\"\r\n            (click)=\"getOtp()\"\r\n          >\r\n            CONTINUE\r\n          </ion-button>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_forgett-password_forgett-password_module_ts.js.map