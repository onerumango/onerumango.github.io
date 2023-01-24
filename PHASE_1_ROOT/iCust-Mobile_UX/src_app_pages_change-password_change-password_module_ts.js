"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_change-password_change-password_module_ts"],{

/***/ 47381:
/*!*************************************************************************!*\
  !*** ./src/app/pages/change-password/change-password-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordPageRoutingModule": () => (/* binding */ ChangePasswordPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password.page */ 23286);




const routes = [
    {
        path: '',
        component: _change_password_page__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordPage
    }
];
let ChangePasswordPageRoutingModule = class ChangePasswordPageRoutingModule {
};
ChangePasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChangePasswordPageRoutingModule);



/***/ }),

/***/ 68292:
/*!*****************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordPageModule": () => (/* binding */ ChangePasswordPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password-routing.module */ 47381);
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.page */ 23286);
/* harmony import */ var src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/shared-material.module */ 84390);








let ChangePasswordPageModule = class ChangePasswordPageModule {
};
ChangePasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            _change_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordPageRoutingModule,
            src_app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_2__.SharedMaterialModule
        ],
        declarations: [_change_password_page__WEBPACK_IMPORTED_MODULE_1__.ChangePasswordPage]
    })
], ChangePasswordPageModule);



/***/ }),

/***/ 23286:
/*!***************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangePasswordPage": () => (/* binding */ ChangePasswordPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _change_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password.page.html?ngResource */ 91590);
/* harmony import */ var _change_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.page.scss?ngResource */ 2799);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_custom_validators_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/custom-validators.service */ 46077);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);









let ChangePasswordPage = class ChangePasswordPage {
    constructor(fb, location, api, toastCtrl) {
        this.fb = fb;
        this.location = location;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.currShowPassword = false;
        this.newShowPassword = false;
        this.reEnterShowPassword = false;
        this.firstTimeLogin = 'N';
    }
    ngOnInit() {
        this.customerPhonenum = localStorage.getItem('customerPhonenum');
        this.changePasswordForm = this.fb.group({
            currentPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
            newPassword: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([
                    // 1. Password Field is Required
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required,
                    // 2. check whether the entered password has a number
                    src_app_services_custom_validators_service__WEBPACK_IMPORTED_MODULE_3__.CustomValidatorsService.patternValidator(/\d/, { hasNumber: true }),
                    // 3. check whether the entered password has upper case letter
                    src_app_services_custom_validators_service__WEBPACK_IMPORTED_MODULE_3__.CustomValidatorsService.patternValidator(/[A-Z]/, {
                        hasCapitalCase: true,
                    }),
                    // 4. check whether the entered password has a lower-case letter
                    src_app_services_custom_validators_service__WEBPACK_IMPORTED_MODULE_3__.CustomValidatorsService.patternValidator(/[a-z]/, {
                        hasSmallCase: true,
                    }),
                    // 5. check whether the entered password has a special character
                    src_app_services_custom_validators_service__WEBPACK_IMPORTED_MODULE_3__.CustomValidatorsService.patternValidator(/[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, {
                        hasSpecialCharacters: true,
                    }),
                    // 6. Has a minimum length of 8 characters
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(8),
                ]),
            ],
            newPasswordConfirmation: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required])],
        }, {
            // check whether our password and confirm password match
            validator: src_app_services_custom_validators_service__WEBPACK_IMPORTED_MODULE_3__.CustomValidatorsService.passwordMatchValidator,
        });
    }
    checkDisable() {
        return this.changePasswordForm.get('currentPassword').value === ''
            || this.changePasswordForm.get('newPassword').value === ''
            || this.changePasswordForm.get('newPasswordConfirmation').value === ''
            || !this.changePasswordForm.valid;
    }
    save() {
        if (this.changePasswordForm.value.newPassword !==
            this.changePasswordForm.value.newPasswordConfirmation) {
            this.openToast('Password do not match');
            return;
        }
        if (this.changePasswordForm.value.currentPassword ===
            this.changePasswordForm.value.newPassword) {
            this.openToast('Current Password and New password can not be same');
            return;
        }
        var obj = {
            phoneNumber: this.customerPhonenum,
            currentPassword: this.changePasswordForm.value.currentPassword,
            newPassword: this.changePasswordForm.value.newPasswordConfirmation,
        };
        this.api.updateCustomerPassword(obj).subscribe((res) => {
            if (res.status == 200) {
                this.openToast('Updated password successfully');
            }
            else {
                this.openToast(res === null || res === void 0 ? void 0 : res.message);
            }
            this.goBack();
        }, (error) => {
            this.openToast('Unable to update password');
        });
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
    goBack() {
        this.location.back();
    }
};
ChangePasswordPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
ChangePasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-change-password',
        template: _change_password_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_change_password_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChangePasswordPage);



/***/ }),

/***/ 46077:
/*!*******************************************************!*\
  !*** ./src/app/services/custom-validators.service.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomValidatorsService": () => (/* binding */ CustomValidatorsService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);


let CustomValidatorsService = class CustomValidatorsService {
    constructor() { }
    static patternValidator(regex, error) {
        return (control) => {
            if (!control.value) {
                // if control is empty return no error
                return null;
            }
            // test the value of the control against the regexp supplied
            const valid = regex.test(control.value);
            // if true, return no error (no error), else return error passed in the second parameter
            return valid ? null : error;
        };
    }
    static passwordMatchValidator(control) {
        const password = control.get('newPassword').value; // get password from our password form control
        const confirmPassword = control.get('newPasswordConfirmation').value; // get password from our confirmPassword form control
        // compare is the password math
        if (password !== confirmPassword) {
            // if they don't match, set an error in our confirmPassword form control
            control.get('newPasswordConfirmation').setErrors({ NoPassswordMatch: true });
        }
    }
};
CustomValidatorsService.ctorParameters = () => [];
CustomValidatorsService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
        providedIn: 'root'
    })
], CustomValidatorsService);



/***/ }),

/***/ 2799:
/*!****************************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".new-background-color {\n  --background: #ecf3f2;\n  height: 108.5px;\n  display: inline-block;\n  vertical-align: middle;\n  color: #54627a;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n  display: flex;\n  align-items: center;\n}\n.new-background-color span.text {\n  font-weight: bold;\n  margin-left: 2%;\n}\n.mat-form-field-subscript-wrapper {\n  font-size: 14px !important;\n}\n.box {\n  border-width: 1pt;\n  border-style: solid;\n  width: 95%;\n  height: 55px;\n  background-color: white;\n  border-color: #456efe;\n}\n.inputCard {\n  padding-top: 7%;\n  padding-left: 5%;\n  font-family: \"Montserrat\" !important;\n}\n.form_label {\n  color: #1f618d;\n  font-size: 20px;\n  font-family: Arial, sans-serif;\n  letter-spacing: 0.5px;\n}\nion-input {\n  color: black !important;\n  font-size: 26px;\n  background-color: white !important;\n  --placeholder-color: black !important;\n  min-height: 70px !important;\n  width: 95%;\n  font-family: \"Montserrat\" !important;\n  margin-top: 5pt;\n  border: 2px solid #456efe;\n}\nion-footer {\n  margin-bottom: 0px;\n}\nion-button {\n  font-size: 16px;\n  font-family: \"Montserrat\" !important;\n  text-transform: capitalize;\n}\n.suffix-icon {\n  position: absolute;\n  bottom: 0;\n  right: 20px;\n  margin: 20px;\n  font-size: xx-large;\n  color: #1f618d;\n  z-index: 2;\n}\nion-item {\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUFGO0FBRUU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFBSjtBQUlBO0VBQ0UsMEJBQUE7QUFERjtBQUlBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBRUEsdUJBQUE7RUFDQSxxQkFBQTtBQUZGO0FBS0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSxvQ0FBQTtBQUhGO0FBTUE7RUFDRSxjQUFBO0VBQ0EsZUFBQTtFQUVBLDhCQUFBO0VBR0EscUJBQUE7QUFORjtBQVNBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0NBQUE7RUFDQSxxQ0FBQTtFQUdBLDJCQUFBO0VBQ0EsVUFBQTtFQUNBLG9DQUFBO0VBQ0EsZUFBQTtFQUVBLHlCQUFBO0FBVEY7QUFZQTtFQUNFLGtCQUFBO0FBVEY7QUFZQTtFQUNFLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLDBCQUFBO0FBVEY7QUFZQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQVRGO0FBWUE7RUFDRSxnQkFBQTtBQVRGIiwiZmlsZSI6ImNoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LWJhY2tncm91bmQtY29sb3Ige1xyXG4gIC0tYmFja2dyb3VuZDogI2VjZjNmMjtcclxuICBoZWlnaHQ6IDEwOC41cHg7XHJcbiAgLy8gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGNvbG9yOiAjNTQ2MjdhO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gIHNwYW4udGV4dCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICB9XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZC1zdWJzY3JpcHQtd3JhcHBlciB7XHJcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ib3gge1xyXG4gIGJvcmRlci13aWR0aDogMXB0O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBoZWlnaHQ6IDU1cHg7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1jb2xvcjogIzQ1NmVmZTtcclxufVxyXG5cclxuLmlucHV0Q2FyZCB7XHJcbiAgcGFkZGluZy10b3A6IDclO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcblxyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9ybV9sYWJlbCB7XHJcbiAgY29sb3I6ICMxZjYxOGQ7IC8vIDFmNjE4ZFxyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICAvLyBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIC8vIG1hcmdpbi1ib3R0b206IDEzcHQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgLy8gLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxMDAlO1xyXG4gIC8vIGhlaWdodDoxNTBwdCFpbXBvcnRhbnQ7XHJcbiAgbWluLWhlaWdodDogNzBweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogNXB0O1xyXG5cclxuICBib3JkZXI6IDJweCBzb2xpZCAjNDU2ZWZlO1xyXG59XHJcblxyXG5pb24tZm9vdGVyIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG5cclxuLnN1ZmZpeC1pY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIGNvbG9yOiAjMWY2MThkO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbmlvbi1pdGVtIHtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59Il19 */";

/***/ }),

/***/ 91590:
/*!****************************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goBack()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Change Password</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content class=\"ion-padding\">\r\n  <form [formGroup]=\"changePasswordForm\" *ngIf=\"changePasswordForm\">\r\n\r\n    <mat-form-field class=\"full-width my-3\" appearance=\"outline\">\r\n      <mat-label>Current Password</mat-label>\r\n      <input name=\"password\" matInput placeholder=\"Enter Current Password\" [type]=\"cpass ? 'text' : 'password'\"\r\n        formControlName=\"currentPassword\" />\r\n      <button mat-icon-button matSuffix (click)=\"cpass = !cpass\">\r\n        <mat-icon color=\"primary\">{{cpass ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n      </button>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"full-width my-3\" appearance=\"outline\">\r\n      <mat-label>New Password</mat-label>\r\n      <input name=\"password\" matInput [type]=\"npass ? 'text' : 'password'\" placeholder=\"Enter New Password\"\r\n        formControlName=\"newPassword\" />\r\n      <button mat-icon-button matSuffix (click)=\"npass = !npass\">\r\n        <mat-icon color=\"primary\">{{npass ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n      </button>\r\n\r\n      <mat-error *ngIf=\"changePasswordForm.controls['newPassword'].invalid && (changePasswordForm.controls['newPassword'].dirty\r\n      || changePasswordForm.controls['newPassword'].touched)\">\r\n\r\n        <span *ngIf=\"changePasswordForm.controls['newPassword'].hasError('required')\" style=\"color: red\">Password is\r\n          required</span>\r\n      </mat-error>\r\n\r\n      <mat-error *ngIf=\"changePasswordForm.controls['newPassword'].hasError('minlength')\"> Must be at least 8\r\n        characters!</mat-error>\r\n      <mat-error *ngIf=\"changePasswordForm.controls['newPassword'].hasError('hasNumber')\"> Must contain at least 1\r\n        number!</mat-error>\r\n      <mat-error *ngIf=\"changePasswordForm.controls['newPassword'].hasError('hasCapitalCase')\"> Must contain at least 1\r\n        in Capital Case!</mat-error>\r\n      <mat-error *ngIf=\"changePasswordForm.controls['newPassword'].hasError('hasSmallCase')\"> Must contain at least 1\r\n        Letter in small Case!</mat-error>\r\n      <mat-error *ngIf=\"changePasswordForm.controls['newPassword'].hasError('hasSpecialCharacters')\"> Must contain at\r\n        least 1 Special Character!</mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"full-width my-4\" appearance=\"outline\">\r\n      <mat-label>Re-enter New Password</mat-label>\r\n      <input name=\"password\" matInput [type]=\"repass ? 'text' : 'password'\" placeholder=\"Re-enter Current Password\"\r\n        formControlName=\"newPasswordConfirmation\" />\r\n      <button mat-icon-button matSuffix (click)=\"repass = !repass\">\r\n        <mat-icon color=\"primary\">{{repass ? 'visibility' : 'visibility_off'}}</mat-icon>\r\n      </button>\r\n\r\n      <ng-container  *ngIf=\"changePasswordForm.controls['newPasswordConfirmation'].invalid && (changePasswordForm.controls['newPasswordConfirmation'].dirty || changePasswordForm.controls['newPasswordConfirmation'].touched)\">\r\n\r\n      </ng-container>\r\n      \r\n      <mat-error *ngIf=\"changePasswordForm.controls['newPasswordConfirmation'].hasError('required')\">Confirm Password is Required!</mat-error>\r\n      <mat-error  *ngIf=\"changePasswordForm.controls['newPasswordConfirmation'].hasError('NoPassswordMatch')\">Password do not match</mat-error>\r\n    </mat-form-field>\r\n  </form>\r\n\r\n  <div>\r\n    <ion-button expand=\"block\" shape=\"round\" style=\"\r\n        height: 56px;\r\n        margin-left: 16pt;\r\n        margin-right: 16pt;\r\n        margin-bottom: 31px;\r\n      \" (click)=\"save()\" [disabled]=\"checkDisable()\">Save Changes</ion-button>\r\n  </div>\r\n\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_change-password_change-password_module_ts.js.map