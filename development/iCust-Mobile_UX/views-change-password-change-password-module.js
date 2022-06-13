(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-change-password-change-password-module"],{

/***/ "7YD/":
/*!***************************************************************!*\
  !*** ./src/app/views/change-password/change-password.page.ts ***!
  \***************************************************************/
/*! exports provided: ChangePasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPage", function() { return ChangePasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_change_password_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./change-password.page.html */ "FtkW");
/* harmony import */ var _change_password_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./change-password.page.scss */ "C/vr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let ChangePasswordPage = class ChangePasswordPage {
    constructor(fb, router) {
        this.fb = fb;
        this.router = router;
        this.currShowPassword = false;
        this.newShowPassword = false;
        this.reEnterShowPassword = false;
    }
    ngOnInit() {
        this.changePasswordForm = this.fb.group({
            currentPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            newPasswordConfirmation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
        console.log(this.changePasswordForm.value);
    }
    onPasswordToggle(showType) {
        if (showType === 'current') {
            this.currShowPassword = !this.currShowPassword;
        }
        if (showType === 'new') {
            this.newShowPassword = !this.newShowPassword;
        }
        if (showType === 'reenter') {
            this.reEnterShowPassword = !this.reEnterShowPassword;
        }
    }
    save() {
        console.log(this.changePasswordForm.value);
    }
    previous() {
        this.router.navigate(['/tabs/profile']);
    }
};
ChangePasswordPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
ChangePasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-change-password',
        template: _raw_loader_change_password_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_change_password_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChangePasswordPage);



/***/ }),

/***/ "C/vr":
/*!*****************************************************************!*\
  !*** ./src/app/views/change-password/change-password.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".new-background-color {\n  --background:#ECF3F2;\n  height: 88.5px;\n  padding-top: 20px;\n  display: inline-block;\n  vertical-align: middle;\n  color: black;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n\n.box {\n  border-width: 1pt;\n  border-style: solid;\n  width: 95%;\n  height: 55px;\n  background-color: white;\n  border-color: #456EFE;\n}\n\n.inputCard {\n  padding-top: 7%;\n  padding-left: 5%;\n  font-family: \"Montserrat\" !important;\n}\n\nion-input {\n  color: black !important;\n  font-size: 24px;\n  background-color: white !important;\n  --placeholder-color: black !important;\n  min-height: 70px !important;\n  width: 90%;\n  font-family: \"Montserrat\" !important;\n  margin-top: 13pt;\n  border-width: 1pt;\n  border-style: solid;\n  border-color: #456EFE;\n}\n\nion-footer {\n  margin-bottom: 0px;\n}\n\nion-button {\n  font-size: 16px;\n  font-family: \"Montserrat\" !important;\n  text-transform: capitalize;\n}\n\n.suffix-icon {\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  margin: 20px;\n  font-size: xx-large;\n  color: #1F618D;\n}\n\nion-item {\n  margin-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGFuZ2UtcGFzc3dvcmQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxjQUFBO0VBQ0MsaUJBQUE7RUFFRCxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQUFKOztBQVVBO0VBQ0ksaUJBQUE7RUFHQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBRUEsdUJBQUE7RUFDQSxxQkFBQTtBQVZKOztBQWVBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBRUEsb0NBQUE7QUFiQTs7QUF1Qkk7RUFDSSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLHFDQUFBO0VBR0EsMkJBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSxnQkFBQTtFQUVBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtBQXZCUjs7QUF5QlE7RUFDSSxrQkFBQTtBQXRCWjs7QUF3QlE7RUFDSSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSwwQkFBQTtBQXJCWjs7QUF1QlE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQXBCWjs7QUFzQlE7RUFDSSxnQkFBQTtBQW5CWiIsImZpbGUiOiJjaGFuZ2UtcGFzc3dvcmQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiNFQ0YzRjI7XHJcbiAgICBoZWlnaHQ6ODguNXB4O1xyXG4gICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGNvbG9yOmJsYWNrO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgXHJcbn1cclxuLy8gaW9uLWljb257XHJcbi8vICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4vLyAgICAgY29sb3I6YmxhY2s7XHJcbi8vICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbi8vICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gXHJcbi8vIH1cclxuLmJveCB7XHJcbiAgICBib3JkZXItd2lkdGg6IDFwdDtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAvLyBib3gtc2hhZG93OiAwIDVwdCA1cHQgLTJwdCAjRDNEM0QzO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXItY29sb3I6IzQ1NkVGRTtcclxuICAgIC8vIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcclxuICAgIC8vIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xyXG4gICAgLy8gYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICB9XHJcbi5pbnB1dENhcmR7XHJcbnBhZGRpbmctdG9wOiA3JTtcclxucGFkZGluZy1sZWZ0OiA1JTtcclxuXHJcbmZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxufVxyXG5cclxuLy8gaW9uLWxhYmVse1xyXG4vLyAgICAgY29sb3I6IzEwMjI0NTtcclxuLy8gICAgIGZvbnQtc2l6ZTogMjZweDtcclxuLy8gICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuLy8gICAgIC8vIG1hcmdpbi1ib3R0b206IDEzcHQ7XHJcbi8vIH1cclxuXHJcbiAgICBpb24taW5wdXQge1xyXG4gICAgICAgIGNvbG9yOmJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGUhaW1wb3J0YW50O1xyXG4gICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgLy8gLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxMDAlO1xyXG4gICAgICAgIC8vIGhlaWdodDoxNTBwdCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWluLWhlaWdodDo3MHB4IWltcG9ydGFudDtcclxuICAgICAgICB3aWR0aDo5MCU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEzcHQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHQ7XHJcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgICAgICBib3JkZXItY29sb3I6IzQ1NkVGRTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWZvb3RlcntcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdWZmaXgtaWNvbiB7IFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxyXG4gICAgICAgICAgICBib3R0b206IDA7IFxyXG4gICAgICAgICAgICByaWdodDogMDsgXHJcbiAgICAgICAgICAgIG1hcmdpbjoyMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgICAgICAgICBjb2xvcjojMUY2MThEO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taXRlbXtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDo1MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAiXX0= */");

/***/ }),

/***/ "FtkW":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/change-password/change-password.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar  class=\"new-background-color\">\r\n    <ion-icon name=\"chevron-back-outline\" (click)=\"previous()\"></ion-icon>\r\n    <span class=\"text\" style=\"margin-left: 2%;\">Change Password</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n \r\n  <form  [formGroup]=\"changePasswordForm\">\r\n\r\n    <ion-list>\r\n      <ion-item>\r\n        <ion-label style=\"font-size: 26px;color:#1F618D;font-weight: 600;\" position=\"stacked\">Current Password</ion-label>\r\n    <ion-input placeholder=\"Enter Current Password\" [type]=\"currShowPassword ? 'text' : 'password'\"\r\n    formControlName=\"currentPassword\"></ion-input>\r\n      <ion-icon  class=\"suffix-icon\" (click)=\"onPasswordToggle('current')\" ion-button clear small item-end [name]=\"currShowPassword ? 'eye' : 'eye-off'\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label style=\"font-size: 26px;color:#1F618D;font-weight: 600;\" position=\"stacked\">New Password</ion-label>\r\n        <ion-input [type]=\"newShowPassword ? 'text' : 'password'\" placeholder=\"Enter New Password\" formControlName=\"newPassword\"\r\n        ></ion-input>\r\n      <ion-icon  class=\"suffix-icon\" (click)=\"onPasswordToggle('new')\" ion-button clear small item-end [name]=\"newShowPassword ? 'eye' : 'eye-off'\"></ion-icon>\r\n      </ion-item>\r\n      <ion-item>\r\n        <ion-label style=\"font-size: 26px;color:#1F618D;font-weight: 600;\" position=\"stacked\">Re-enter New Password</ion-label>\r\n        <ion-input [type]=\"reEnterShowPassword ? 'text' : 'password'\" placeholder=\"Re-enter Current Password\" formControlName=\"newPasswordConfirmation\"></ion-input>\r\n      <ion-icon  class=\"suffix-icon\" (click)=\"onPasswordToggle('reenter')\" ion-button clear small item-end [name]=\"reEnterShowPassword ? 'eye' : 'eye-off'\"></ion-icon>\r\n      </ion-item>\r\n    </ion-list>\r\n    <!-- <div >\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Current Password</ion-label>\r\n    <ion-input placeholder=\"Enter Current Password\" [type]=\"showPassword ? 'text' : 'password'\"\r\n    formControlName=\"currentPassword\" ngDefaultControl></ion-input>\r\n    <button class=\"suffix-icon\" (click)=\"onPasswordToggle()\" ion-button clear small item-end icon-only>\r\n      <ion-icon  class=\"suffix-icon\" (click)=\"onPasswordToggle()\" ion-button clear small item-end [name]=\"showPassword ? 'eye' : 'eye-off'\"></ion-icon>\r\n    </button>\r\n      </ion-item>\r\n    \r\n    </div>\r\n    <div class=\"inputCard\">\r\n      <ion-label>New Password</ion-label>\r\n      <ion-input class=\"box\" placeholder=\"Enter New Password\" formControlName=\"newPassword\" ngDefaultControl></ion-input>\r\n    \r\n      </div>\r\n      <div class=\"inputCard\">\r\n        <ion-label>Re-enter New Password</ion-label>\r\n        <ion-input class=\"box\" placeholder=\"Re-enter Current Password\" formControlName=\"newPasswordConfirmation\" ngDefaultControl></ion-input>\r\n      \r\n        </div> -->\r\n\r\n    </form>\r\n  \r\n     \r\n  \r\n  </ion-content>\r\n  <div>\r\n    <ion-button  expand=\"block\" shape=\"round\" style=\"height:56px;margin-left:16pt;margin-right:16pt;margin-bottom: 31px;\"\r\n    (click)=\"save()\">Save Changes</ion-button>\r\n    </div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "NwVD":
/*!*************************************************************************!*\
  !*** ./src/app/views/change-password/change-password-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: ChangePasswordPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageRoutingModule", function() { return ChangePasswordPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./change-password.page */ "7YD/");




const routes = [
    {
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_3__["ChangePasswordPage"]
    }
];
let ChangePasswordPageRoutingModule = class ChangePasswordPageRoutingModule {
};
ChangePasswordPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChangePasswordPageRoutingModule);



/***/ }),

/***/ "if1o":
/*!*****************************************************************!*\
  !*** ./src/app/views/change-password/change-password.module.ts ***!
  \*****************************************************************/
/*! exports provided: ChangePasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangePasswordPageModule", function() { return ChangePasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./change-password-routing.module */ "NwVD");
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./change-password.page */ "7YD/");







let ChangePasswordPageModule = class ChangePasswordPageModule {
};
ChangePasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _change_password_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordPageRoutingModule"]
        ],
        declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_6__["ChangePasswordPage"]]
    })
], ChangePasswordPageModule);



/***/ })

}]);
//# sourceMappingURL=views-change-password-change-password-module.js.map