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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _new_passwordchange_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./new-passwordchange-routing.module */ 52491);
/* harmony import */ var _new_passwordchange_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./new-passwordchange.page */ 9367);
/* harmony import */ var src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared-material.module */ 84390);
/* harmony import */ var src_app_directives_directive_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/directives/directive.module */ 27589);









let NewPasswordchangePageModule = class NewPasswordchangePageModule {
};
NewPasswordchangePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_2__.SharedMaterialModule,
            _new_passwordchange_routing_module__WEBPACK_IMPORTED_MODULE_0__.NewPasswordchangePageRoutingModule,
            src_app_directives_directive_module__WEBPACK_IMPORTED_MODULE_3__.DirectiveModule
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
        this.confirmPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('');
        this.phoneNumber = localStorage.getItem('customerPhonenum');
    }
    openToast(errorMessage) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: `${errorMessage}`,
                duration: 2500,
                position: 'bottom',
            });
            toast.present();
        });
    }
    ngOnInit() {
        this.newPassword.patchValue('');
        this.confirmPassword.patchValue('');
        this.navSubscription = this.api.getNavParam.subscribe((data) => (this.screenNames = data));
    }
    back() {
        this.router.navigateByUrl('/login');
    }
    continue() {
        if (this.screenNames.queryParams.screenName == 'forget-password') {
            this.resetPassword();
            return;
        }
        else {
            this.setFirstTimePassword();
            return;
        }
    }
    resetPassword() {
        if (this.newPassword.value === '' || this.confirmPassword.value === '') {
            this.openToast('Fill all fields');
            return;
        }
        if (this.newPassword.value !== this.confirmPassword.value) {
            this.openToast("Passwords didn't match");
            return;
        }
        const data = {
            phoneNumber: this.phoneNumber,
            newPassword: this.newPassword.value,
        };
        this.api.resetPassword(data).subscribe((resp) => {
            if ((resp === null || resp === void 0 ? void 0 : resp.status) == 200) {
                const navigationExtras = {
                    queryParams: {
                        'screenDetails': this.screenNames.queryParams.screenName == 'forget-password' ? 'Password Update' : 'Password Set',
                        'screenDescription': this.screenNames.queryParams.screenName == 'forget-password' ? 'Password updated successfully!' : 'Password set successfully!',
                        'screenName': 'new-passwordchange'
                    },
                };
                this.api.sendNavParam(navigationExtras);
                this.router.navigateByUrl('/success-message');
                this.newPassword.patchValue('');
                this.confirmPassword.patchValue('');
            }
            else {
                this.router.navigate(['/login'], { replaceUrl: true });
                this.openToast(resp === null || resp === void 0 ? void 0 : resp.message);
            }
        }, (err) => {
            this.openToast(err === null || err === void 0 ? void 0 : err.error);
        });
    }
    setFirstTimePassword() {
        if (this.newPassword.value === '' || this.confirmPassword.value === '') {
            this.openToast('Fill all fields');
            return;
        }
        if (this.newPassword.value !== this.confirmPassword.value) {
            this.openToast("Passwords didn't match");
            return;
        }
        var obj = {
            phoneNumber: this.phoneNumber,
            currentPassword: "Rumango@123",
            newPassword: this.newPassword.value,
        };
        this.api.updateCustomerPassword(obj).subscribe((res) => {
            if (res.status == 200) {
                const navigationExtras = {
                    queryParams: {
                        'screenDetails': this.screenNames.queryParams.screenName == 'forget-password' ? 'Password Update' : 'Password Set',
                        'screenDescription': this.screenNames.queryParams.screenName == 'forget-password' ? 'Password updated successfully!' : 'Password set successfully!',
                        'screenName': 'new-passwordchange'
                    },
                };
                this.api.sendNavParam(navigationExtras);
                this.router.navigateByUrl('/success-message');
                this.newPassword.patchValue('');
                this.confirmPassword.patchValue('');
            }
            else {
                this.router.navigate(['/login'], { replaceUrl: true });
                this.openToast(res === null || res === void 0 ? void 0 : res.message);
            }
        }, (error) => {
            this.openToast('Unable to set password');
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

module.exports = "section {\n  position: relative;\n  background: url(\"/assets/images/3@3x.png\");\n  background-repeat: round;\n  color: #fff;\n  height: 40%;\n}\n\nion-toolbar {\n  --background: transparent;\n  --color: white;\n}\n\n.logo-icon {\n  margin: 0 auto;\n  text-align: start;\n  width: 175px;\n  height: 45px;\n  margin-top: 60px;\n  opacity: 100%;\n}\n\n.back-nav {\n  padding: 19px 0px 0px 0px;\n}\n\n.back-nav-color {\n  color: #000000 !important;\n}\n\n.item-box-white {\n  width: 100%;\n  height: 100%;\n  background: #ffffff;\n  border-radius: 60px 0 0 0;\n  height: 60%;\n  position: absolute;\n}\n\n.login-logo {\n  padding: 20px;\n  min-height: 140px;\n  margin-top: 15%;\n  text-align: center;\n}\n\n.login-logo img {\n  max-width: 120px;\n  margin-top: -9%;\n}\n\n.otp-text {\n  color: #B1B1B1;\n  font-size: 15px;\n}\n\n.forgot,\na {\n  text-align: center;\n  font-size: 14px;\n  color: #456EFE !important;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n}\n\n.fieldCard {\n  padding-top: 50%;\n  padding-left: 5%;\n}\n\n.subtitle {\n  padding-left: 5%;\n}\n\n.form-box {\n  padding: 25px;\n  height: 250px;\n  position: relative;\n  top: -10%;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.new_pass {\n  font-weight: 700;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5ldy1wYXNzd29yZGNoYW5nZS5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxHSVRIVUIlMjBSRVBPU0lUT1JZX1VJXFxpQ3VzdE1vYmlsZS12Mlxcc3JjXFxhcHBcXHBhZ2VzXFxuZXctcGFzc3dvcmRjaGFuZ2VcXG5ldy1wYXNzd29yZGNoYW5nZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0NGOztBRENBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDRUY7O0FEQ0E7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBQ0VGOztBRENBO0VBQ0UseUJBQUE7QUNFRjs7QURDQTtFQUNFLHlCQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNFRjs7QURDQTtFQUNFLGFBQUE7RUFFQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBOztFQUVFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0Y7O0FERUE7RUFFRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FDQUY7O0FER0E7RUFDRSxnQkFBQTtBQ0FGIiwiZmlsZSI6Im5ldy1wYXNzd29yZGNoYW5nZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy8zQDN4LnBuZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBoZWlnaHQ6IDQwJTtcclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAtLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmxvZ28taWNvbiB7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgd2lkdGg6IDE3NXB4O1xyXG4gIGhlaWdodDogNDVweDtcclxuICBtYXJnaW4tdG9wOiA2MHB4O1xyXG4gIG9wYWNpdHk6IDEwMCU7XHJcbn1cclxuXHJcbi5iYWNrLW5hdiB7XHJcbiAgcGFkZGluZzogMTlweCAwcHggMHB4IDBweDtcclxufVxyXG5cclxuLmJhY2stbmF2LWNvbG9yIHtcclxuICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaXRlbS1ib3gtd2hpdGUge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDYwcHggMCAwIDA7XHJcbiAgaGVpZ2h0OiA2MCU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4ubG9naW4tbG9nbyB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICAvLyBtaW4taGVpZ2h0OiAxOTBweDtcclxuICBtaW4taGVpZ2h0OiAxNDBweDtcclxuICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubG9naW4tbG9nbyBpbWcge1xyXG4gIG1heC13aWR0aDogMTIwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTklO1xyXG59XHJcblxyXG4ub3RwLXRleHQge1xyXG4gIGNvbG9yOiAjQjFCMUIxO1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLmZvcmdvdCxcclxuYSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogIzQ1NkVGRSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4uZmllbGRDYXJkIHtcclxuICBwYWRkaW5nLXRvcDogNTAlO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbn1cclxuXHJcbi5zdWJ0aXRsZSB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxufVxyXG5cclxuLmZvcm0tYm94IHtcclxuICAvLyB3aWR0aDogMzAwcHg7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0xMCU7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLm5ld19wYXNzIHtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG59Iiwic2VjdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9pbWFnZXMvM0AzeC5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogNDAlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4ubG9nby1pY29uIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICB3aWR0aDogMTc1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgb3BhY2l0eTogMTAwJTtcbn1cblxuLmJhY2stbmF2IHtcbiAgcGFkZGluZzogMTlweCAwcHggMHB4IDBweDtcbn1cblxuLmJhY2stbmF2LWNvbG9yIHtcbiAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbn1cblxuLml0ZW0tYm94LXdoaXRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNjBweCAwIDAgMDtcbiAgaGVpZ2h0OiA2MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuLmxvZ2luLWxvZ28ge1xuICBwYWRkaW5nOiAyMHB4O1xuICBtaW4taGVpZ2h0OiAxNDBweDtcbiAgbWFyZ2luLXRvcDogMTUlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5sb2dpbi1sb2dvIGltZyB7XG4gIG1heC13aWR0aDogMTIwcHg7XG4gIG1hcmdpbi10b3A6IC05JTtcbn1cblxuLm90cC10ZXh0IHtcbiAgY29sb3I6ICNCMUIxQjE7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmZvcmdvdCxcbmEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICM0NTZFRkUgIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmZpZWxkQ2FyZCB7XG4gIHBhZGRpbmctdG9wOiA1MCU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG59XG5cbi5zdWJ0aXRsZSB7XG4gIHBhZGRpbmctbGVmdDogNSU7XG59XG5cbi5mb3JtLWJveCB7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTAlO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi5uZXdfcGFzcyB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59Il19 */";

/***/ }),

/***/ 83384:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/new-passwordchange/new-passwordchange.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <section>\r\n\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button fill=\"clear\" (click)=\"back()\">\r\n          <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" class=\"back-nav-color\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n\r\n    <div class=\"logo-icon\">\r\n      <div class=\"logo\"><img src=\"assets/images/Demobank.svg\" class=\"w-100\" /></div>\r\n    </div>\r\n  </section>\r\n  <div class=\"item-box-white\">\r\n    <div class=\"form-box\">\r\n      <form class=\"form_container\" novalidate >\r\n        <div class=\"otp-box text-left\">\r\n          <ion-text>\r\n            <h4 class=\"new_pass\">New Password</h4>\r\n            <p class=\"otp-text\">\r\n              Enter your new password and don’t forget It again because it take\r\n              time to return it\r\n            </p>\r\n          </ion-text>\r\n        </div>\r\n        <!-- OTP INPUT START -->\r\n        <div class=\"my-4\">\r\n          <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n            <mat-label>New Password</mat-label>\r\n            <input matInput type=\"text\" class=\"form-control\" [formControl]=\"newPassword\" placeholder=\"New password\"\r\n              name=\"new-password\" autocomplete=\"off\" minLength=\"4\" />\r\n          </mat-form-field>\r\n  \r\n          <mat-form-field class=\"full-width\" appearance=\"outline\">\r\n            <mat-label>Confirm Password</mat-label>\r\n            <input matInput type=\"text\" class=\"form-control\" [formControl]=\"confirmPassword\" placeholder=\"Confirm Password\"\r\n              name=\"repeat-password\" autocomplete=\"off\" minLength=\"4\" />\r\n          </mat-form-field>\r\n        </div>\r\n      \r\n        <!-- OTP INPUT END -->\r\n      </form>\r\n      <div class=\"my-5\">\r\n        <ng-container *ngIf=\"isLoading; else showLoading\">\r\n          <ion-button expand=\"full\" shape=\"round\" class=\"my-5\">\r\n            <ion-spinner name=\"circles\"></ion-spinner>\r\n          </ion-button>\r\n        </ng-container>\r\n        <ng-template #showLoading>\r\n          <ion-button expand=\"full\" shape=\"round\" class=\"my-5\" (click)=\"continue()\">\r\n            CONTINUE\r\n          </ion-button>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_new-passwordchange_new-passwordchange_module_ts.js.map