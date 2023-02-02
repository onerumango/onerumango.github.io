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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _forgett_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgett-password.page.html?ngResource */ 54985);
/* harmony import */ var _forgett_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgett-password.page.scss?ngResource */ 91199);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login/login.page */ 3058);









let ForgettPasswordPage = class ForgettPasswordPage {
    constructor(router, toastCtrl, api) {
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.api = api;
        this.phoneNumber = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('');
        this.isLoading = false;
        this.oTpModel = new _login_login_page__WEBPACK_IMPORTED_MODULE_3__.otpModel();
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
    getOtp() {
        this.oTpModel.source = 'customer';
        this.oTpModel.source_key = 'mobile';
        this.oTpModel.source_value = this.phoneNumber.value;
        this.oTpModel.isMobileLogin = true;
        const pattern = /^([\+0-9]{3}[0-9]{10}|[0-9]{10})$/;
        if (pattern.test(this.phoneNumber.value)) {
            this.isLoading = true;
            this.api.getOtp(this.oTpModel).subscribe((res) => {
                if (res.status == 200) {
                    localStorage.setItem('customerPhonenum', this.phoneNumber.value);
                    const navigationExtras = {
                        queryParams: {
                            'screenName': 'forget-password'
                        },
                    };
                    this.api.sendNavParam(navigationExtras);
                    this.router.navigate(['otp']);
                    this.openToast(res === null || res === void 0 ? void 0 : res.message);
                }
                else {
                    this.openToast(res === null || res === void 0 ? void 0 : res.message);
                }
                this.isLoading = false;
            }, (err) => {
                this.openToast(err);
                this.isLoading = false;
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
ForgettPasswordPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
ForgettPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
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

module.exports = "section {\n  position: relative;\n  background: url(\"/assets/images/3@3x.png\");\n  background-repeat: round;\n  color: #fff;\n  height: 40%;\n}\n\nion-toolbar {\n  --background: transparent;\n  --color: white;\n}\n\n.logo-icon {\n  margin: 0 auto;\n  text-align: start;\n  width: 175px;\n  height: 45px;\n  margin-top: 60px;\n  opacity: 100%;\n}\n\n.back-nav {\n  padding: 19px 0px 0px 0px;\n}\n\n.back-nav-color {\n  color: #000000 !important;\n}\n\n.item-box-white {\n  width: 100%;\n  height: 100%;\n  background: #ffffff;\n  border-radius: 60px 0 0 0;\n  height: 60%;\n  position: absolute;\n}\n\n.login-logo {\n  padding: 20px;\n  min-height: 140px;\n  margin-top: 15%;\n  text-align: center;\n}\n\n.login-logo img {\n  max-width: 120px;\n  margin-top: -9%;\n}\n\n.otp-text {\n  color: #A2A0A8;\n  font-size: 16px;\n}\n\n.forgot,\na {\n  text-align: center;\n  font-size: 14px;\n  color: #456EFE !important;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n}\n\n.fieldCard {\n  padding-top: 50%;\n  padding-left: 5%;\n}\n\n.subtitle {\n  padding-left: 5%;\n}\n\n.form-box {\n  padding: 25px;\n  height: 100%;\n  position: relative;\n  top: -10%;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.forgot_pass {\n  font-size: 24px;\n  font-weight: 700;\n}\n\n.phone_num_field {\n  margin-top: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdldHQtcGFzc3dvcmQucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcR0lUSFVCJTIwUkVQT1NJVE9SWV9VSVxcaUN1c3RNb2JpbGUtdjJcXHNyY1xcYXBwXFxwYWdlc1xcZm9yZ2V0dC1wYXNzd29yZFxcZm9yZ2V0dC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGFBQUE7RUFFQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0FGOztBREdBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDQUY7O0FER0E7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBOztFQUVFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0FDQUY7O0FER0E7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FDQUY7O0FER0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNBRjs7QURHQTtFQUNFLGdCQUFBO0FDQUYiLCJmaWxlIjoiZm9yZ2V0dC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy8zQDN4LnBuZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBoZWlnaHQ6IDQwJTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5sb2dvLWljb24ge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIHdpZHRoOiAxNzVweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICBvcGFjaXR5OiAxMDAlO1xyXG59XHJcblxyXG4uYmFjay1uYXYge1xyXG4gIHBhZGRpbmc6IDE5cHggMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5iYWNrLW5hdi1jb2xvciB7XHJcbiAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLml0ZW0tYm94LXdoaXRlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiA2MHB4IDAgMCAwO1xyXG4gIGhlaWdodDogNjAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuLmxvZ2luLWxvZ28ge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgLy8gbWluLWhlaWdodDogMTkwcHg7XHJcbiAgbWluLWhlaWdodDogMTQwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTUlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmxvZ2luLWxvZ28gaW1nIHtcclxuICBtYXgtd2lkdGg6IDEyMHB4O1xyXG4gIG1hcmdpbi10b3A6IC05JTtcclxufVxyXG5cclxuLm90cC10ZXh0IHtcclxuICBjb2xvcjogI0EyQTBBODtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5mb3Jnb3QsXHJcbmEge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM0NTZFRkUgIWltcG9ydGFudDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmZpZWxkQ2FyZCB7XHJcbiAgcGFkZGluZy10b3A6IDUwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG59XHJcblxyXG4uc3VidGl0bGUge1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbn1cclxuXHJcbi5mb3JtLWJveCB7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogLTEwJTtcclxuICBib3R0b206IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZm9yZ290X3Bhc3Mge1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4ucGhvbmVfbnVtX2ZpZWxkIHtcclxuICBtYXJnaW4tdG9wOiAycmVtO1xyXG59Iiwic2VjdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvM0AzeC5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogNDAlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4ubG9nby1pY29uIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICB3aWR0aDogMTc1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgb3BhY2l0eTogMTAwJTtcbn1cblxuLmJhY2stbmF2IHtcbiAgcGFkZGluZzogMTlweCAwcHggMHB4IDBweDtcbn1cblxuLmJhY2stbmF2LWNvbG9yIHtcbiAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbn1cblxuLml0ZW0tYm94LXdoaXRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNjBweCAwIDAgMDtcbiAgaGVpZ2h0OiA2MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmxvZ2luLWxvZ28ge1xuICBwYWRkaW5nOiAyMHB4O1xuICBtaW4taGVpZ2h0OiAxNDBweDtcbiAgbWFyZ2luLXRvcDogMTUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1sb2dvIGltZyB7XG4gIG1heC13aWR0aDogMTIwcHg7XG4gIG1hcmdpbi10b3A6IC05JTtcbn1cblxuLm90cC10ZXh0IHtcbiAgY29sb3I6ICNBMkEwQTg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmZvcmdvdCxcbmEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM0NTZFRkUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmZpZWxkQ2FyZCB7XG4gIHBhZGRpbmctdG9wOiA1MCU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogNSU7XG59XG5cbi5mb3JtLWJveCB7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xMCU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmZvcmdvdF9wYXNzIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4ucGhvbmVfbnVtX2ZpZWxkIHtcbiAgbWFyZ2luLXRvcDogMnJlbTtcbn0iXX0= */";

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