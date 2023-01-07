"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_new-passwordchange_new-passwordchange_module_ts"],{

/***/ 52491:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/new-passwordchange/new-passwordchange-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPasswordchangePageRoutingModule": () => (/* binding */ NewPasswordchangePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _new_passwordchange_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-passwordchange.page */ 9367);




const routes = [
    {
        path: '',
        component: _new_passwordchange_page__WEBPACK_IMPORTED_MODULE_0__.NewPasswordchangePage
    }
];
let NewPasswordchangePageRoutingModule = class NewPasswordchangePageRoutingModule {
};
NewPasswordchangePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], NewPasswordchangePageRoutingModule);



/***/ }),

/***/ 31307:
/*!***********************************************************************!*\
  !*** ./src/app/pages/new-passwordchange/new-passwordchange.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPasswordchangePageModule": () => (/* binding */ NewPasswordchangePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _new_passwordchange_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-passwordchange-routing.module */ 52491);
/* harmony import */ var _new_passwordchange_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-passwordchange.page */ 9367);







let NewPasswordchangePageModule = class NewPasswordchangePageModule {
};
NewPasswordchangePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _new_passwordchange_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewPasswordchangePageRoutingModule,
        ],
        declarations: [_new_passwordchange_page__WEBPACK_IMPORTED_MODULE_1__.NewPasswordchangePage],
    })
], NewPasswordchangePageModule);



/***/ }),

/***/ 9367:
/*!*********************************************************************!*\
  !*** ./src/app/pages/new-passwordchange/new-passwordchange.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NewPasswordchangePage": () => (/* binding */ NewPasswordchangePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _new_passwordchange_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-passwordchange.page.html?ngResource */ 83384);
/* harmony import */ var _new_passwordchange_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-passwordchange.page.scss?ngResource */ 75481);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);








let NewPasswordchangePage = class NewPasswordchangePage {
    constructor(router, toastCtrl, api) {
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.api = api;
        this.newPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('');
        this.repeatPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('');
        this.phoneNumber = localStorage.getItem('customerPhonenum');
    }
    openToast(errorMessage) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: `${errorMessage}`,
                duration: 2500,
                position: 'middle',
            });
            toast.present();
        });
    }
    ngOnInit() {
        this.newPassword.patchValue('');
        this.repeatPassword.patchValue('');
    }
    back() {
        this.router.navigateByUrl('/login');
    }
    updatePassword() {
        if (this.newPassword.value === '' || this.repeatPassword.value === '') {
            this.openToast('Fill all fields');
            return;
        }
        if (this.newPassword.value !== this.repeatPassword.value) {
            this.openToast("Passwords didn't match");
            return;
        }
        this.api
            .validatePassword(this.phoneNumber, this.newPassword.value)
            .subscribe((res) => {
            if (res && res.hasOwnProperty('message')) {
                if (res.message === 'Password Matched') {
                    this.openToast('New password must be different from previous');
                    return;
                }
                else {
                    const data = {
                        phoneNumber: this.phoneNumber,
                        custPassword: this.newPassword.value,
                    };
                    this.api.updateCustomerPassword(data).subscribe((resp) => {
                        this.openToast('Password updated successfully');
                        this.newPassword.patchValue('');
                        this.repeatPassword.patchValue('');
                        const navigationExtras = {
                            queryParams: {
                                'screenDetails': 'Password Changed!',
                                'screenDescription': 'Your password has been changed successfully',
                                'screenName': 'new-passwordchange'
                            },
                        };
                        this.api.sendNavParam(navigationExtras);
                        this.router.navigateByUrl('/success-message');
                    });
                }
            }
        });
    }
};
NewPasswordchangePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ToastController },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
NewPasswordchangePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-new-passwordchange',
        template: _new_passwordchange_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_new_passwordchange_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], NewPasswordchangePage);



/***/ }),

/***/ 75481:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/new-passwordchange/new-passwordchange.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "section {\n  position: relative;\n  background: url('3@3x.png');\n  background-repeat: round;\n  color: #fff;\n  height: 40%;\n}\n\n.logo-icon {\n  margin: 0 auto;\n  text-align: start;\n  width: 175px;\n  height: 45px;\n  margin-top: 60px;\n  opacity: 100%;\n}\n\n.back-nav {\n  padding: 19px 0px 0px 0px;\n}\n\n.back-nav-color {\n  color: #000000 !important;\n}\n\n.item-box-white {\n  width: 100%;\n  height: 100%;\n  background: #ffffff;\n  border-radius: 60px 0 0 0;\n  height: 60%;\n  position: absolute;\n}\n\n.login-logo {\n  padding: 20px;\n  min-height: 140px;\n  margin-top: 15%;\n  text-align: center;\n}\n\n.login-logo img {\n  max-width: 120px;\n  margin-top: -9%;\n}\n\n.otp-text {\n  color: #B1B1B1;\n  font-size: 15px;\n}\n\n.forgot,\na {\n  text-align: center;\n  font-size: 14px;\n  color: #456EFE !important;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n}\n\n.fieldCard {\n  padding-top: 50%;\n  padding-left: 5%;\n}\n\n.subtitle {\n  padding-left: 5%;\n}\n\n.form-box {\n  padding: 25px;\n  height: 250px;\n  position: relative;\n  top: -10%;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.new_pass {\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1wYXNzd29yZGNoYW5nZS5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxHaXRIdWIlMjBSZXBvc2l0b3J5JTIwb2xkXFxpQ3VzdE1vYmlsZS12Mlxcc3JjXFxhcHBcXHBhZ2VzXFxuZXctcGFzc3dvcmRjaGFuZ2VcXG5ldy1wYXNzd29yZGNoYW5nZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNDSjs7QURFRTtFQUNFLHlCQUFBO0FDQ0o7O0FERUU7RUFDRSx5QkFBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSxhQUFBO0VBRUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBSjs7QURHRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQ0FKOztBREdFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNBSjs7QURHRTs7RUFFRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDQUo7O0FER0U7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0U7RUFDRSxnQkFBQTtBQ0FKOztBREdFO0VBRUUsYUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQ0RKOztBRElFO0VBQ0UsZ0JBQUE7QUNESiIsImZpbGUiOiJuZXctcGFzc3dvcmRjaGFuZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvM0AzeC5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dvLWljb24ge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIHdpZHRoOiAxNzVweDtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICBvcGFjaXR5OiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAuYmFjay1uYXYge1xyXG4gICAgcGFkZGluZzogMTlweCAwcHggMHB4IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJhY2stbmF2LWNvbG9yIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5pdGVtLWJveC13aGl0ZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4IDAgMCAwO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi1sb2dvIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAvLyBtaW4taGVpZ2h0OiAxOTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDE0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAubG9naW4tbG9nbyBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC05JTtcclxuICB9XHJcbiAgXHJcbiAgLm90cC10ZXh0IHtcclxuICAgIGNvbG9yOiAjQjFCMUIxO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxuICBcclxuICAuZm9yZ290LFxyXG4gIGEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM0NTZFRkUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmZpZWxkQ2FyZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICB9XHJcbiAgXHJcbiAgLnN1YnRpdGxlIHtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWJveCB7XHJcbiAgICAvLyB3aWR0aDogMzAwcHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTEwJTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuXHJcbiAgLm5ld19wYXNze1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICB9Iiwic2VjdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy8zQDN4LnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJvdW5kO1xuICBjb2xvcjogI2ZmZjtcbiAgaGVpZ2h0OiA0MCU7XG59XG5cbi5sb2dvLWljb24ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIHdpZHRoOiAxNzVweDtcbiAgaGVpZ2h0OiA0NXB4O1xuICBtYXJnaW4tdG9wOiA2MHB4O1xuICBvcGFjaXR5OiAxMDAlO1xufVxuXG4uYmFjay1uYXYge1xuICBwYWRkaW5nOiAxOXB4IDBweCAwcHggMHB4O1xufVxuXG4uYmFjay1uYXYtY29sb3Ige1xuICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xufVxuXG4uaXRlbS1ib3gtd2hpdGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICBib3JkZXItcmFkaXVzOiA2MHB4IDAgMCAwO1xuICBoZWlnaHQ6IDYwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4ubG9naW4tbG9nbyB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1pbi1oZWlnaHQ6IDE0MHB4O1xuICBtYXJnaW4tdG9wOiAxNSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luLWxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAxMjBweDtcbiAgbWFyZ2luLXRvcDogLTklO1xufVxuXG4ub3RwLXRleHQge1xuICBjb2xvcjogI0IxQjFCMTtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuXG4uZm9yZ290LFxuYSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzQ1NkVGRSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZmllbGRDYXJkIHtcbiAgcGFkZGluZy10b3A6IDUwJTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxuLnN1YnRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxuLmZvcm0tYm94IHtcbiAgcGFkZGluZzogMjVweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xMCU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLm5ld19wYXNzIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn0iXX0= */";

/***/ }),

/***/ 83384:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/new-passwordchange/new-passwordchange.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <section>\r\n    <div class=\"back-nav\">\r\n      <ion-button fill=\"clear\" (click)=\"back()\">\r\n        <ion-icon\r\n          slot=\"icon-only\"\r\n          name=\"chevron-back-outline\"\r\n          class=\"back-nav-color\"\r\n        ></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n\r\n    <div class=\"logo-icon\">\r\n      <div class=\"logo\"><img src=\"assets/images/Demobank.svg\" class=\"w-100\" /></div>\r\n    </div>\r\n  </section>\r\n  <div class=\"item-box-white\">\r\n    <div class=\"form-box\">\r\n      <form class=\"form_container\" novalidate>\r\n        <div class=\"otp-box text-left\">\r\n          <ion-text>\r\n            <h4 class=\"new_pass\">New Password</h4>\r\n            <p class=\"otp-text\">\r\n              Enter your new password and don’t forget It again because it take\r\n              time to return it\r\n            </p>\r\n            <!-- <h6>{{customerPhonenum}}</h6> -->\r\n          </ion-text>\r\n        </div>\r\n        <!-- OTP INPUT START -->\r\n        <ion-item fill=\"outline\">\r\n          <ion-label position=\"floating\">New Password</ion-label>\r\n          <ion-input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            [formControl]=\"newPassword\"\r\n            placeholder=\"New password\"\r\n            name=\"new-password\"\r\n            autocomplete=\"off\"\r\n            minLength=\"4\"\r\n          ></ion-input> </ion-item\r\n        ><br />\r\n        <ion-item fill=\"outline\">\r\n          <ion-label position=\"floating\">Confirm Password</ion-label>\r\n          <ion-input\r\n            type=\"text\"\r\n            class=\"form-control\"\r\n            [formControl]=\"repeatPassword\"\r\n            placeholder=\"Confirm Password\"\r\n            name=\"repeat-password\"\r\n            autocomplete=\"off\"\r\n            minLength=\"4\"\r\n          ></ion-input>\r\n        </ion-item>\r\n        <!-- OTP INPUT END -->\r\n      </form>\r\n      <div class=\"my-5\">\r\n        <ng-container *ngIf=\"isLoading; else showLoading\">\r\n          <ion-button expand=\"full\" shape=\"round\" class=\"my-5\">\r\n            <ion-spinner name=\"circles\"></ion-spinner>\r\n          </ion-button>\r\n        </ng-container>\r\n        <ng-template #showLoading>\r\n          <ion-button\r\n            expand=\"full\"\r\n            shape=\"round\"\r\n            class=\"my-5\"\r\n            (click)=\"updatePassword()\"\r\n          >\r\n            CONTINUE\r\n          </ion-button>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_new-passwordchange_new-passwordchange_module_ts.js.map