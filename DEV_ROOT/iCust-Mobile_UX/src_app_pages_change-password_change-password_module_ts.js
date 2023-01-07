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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./change-password-routing.module */ 47381);
/* harmony import */ var _change_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./change-password.page */ 23286);







let ChangePasswordPageModule = class ChangePasswordPageModule {
};
ChangePasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _change_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordPageRoutingModule
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_custom_validators_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/custom-validators.service */ 46077);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);










let ChangePasswordPage = class ChangePasswordPage {
    constructor(fb, router, location, api, toastCtrl) {
        this.fb = fb;
        this.router = router;
        this.location = location;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.currShowPassword = false;
        this.newShowPassword = false;
        this.reEnterShowPassword = false;
        this.firstTimeLogin = 'N';
    }
    ngOnInit() {
        this.firstTimeLogin = localStorage.getItem('firstTimeLogin');
        if (this.firstTimeLogin == null ||
            this.firstTimeLogin == undefined ||
            this.firstTimeLogin == '') {
            this.firstTimeLogin = 'N';
        }
        this.customerPhonenum = localStorage.getItem('customerPhonenum');
        console.log('<===> ', this.firstTimeLogin === 'Y' ? 'YES' : 'NO');
        this.changePasswordForm = this.fb.group({
            currentPassword: [
                '',
                this.firstTimeLogin === 'Y' ? [] : [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            ],
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
            newPasswordConfirmation: [
                '',
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]),
            ],
        }, {
            // check whether our password and confirm password match
            validator: src_app_services_custom_validators_service__WEBPACK_IMPORTED_MODULE_3__.CustomValidatorsService.passwordMatchValidator,
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
        if (this.firstTimeLogin === 'Y') {
            var obj = {
                phoneNumber: this.customerPhonenum,
                custPassword: this.changePasswordForm.value.newPasswordConfirmation,
            };
            this.api.updateCustomerPassword(obj).subscribe((data) => {
                if (data.hasOwnProperty('content')) {
                    if (data.content
                        .toString()
                        .includes('No record exists for given phone number')) {
                        this.openToast('No record exists for given phone number');
                    }
                }
                else {
                    localStorage.setItem('firstTimeLogin', 'Y');
                    if (this.firstTimeLogin == 'Y') {
                        this.openToast('Created password successfully');
                        this.router.navigate(['/profile']);
                    }
                }
            });
        }
        else {
            this.api
                .validatePassword(localStorage.getItem('customerPhonenum'), this.changePasswordForm.value.currentPassword)
                .subscribe((res) => {
                console.log('validate pass -- ', res);
                if (res.hasOwnProperty('message')) {
                    if (res.message.toString().includes('Wrong Password')) {
                        this.openToast('Incorrect Current Password');
                    }
                    else {
                        var obj = {
                            phoneNumber: this.customerPhonenum,
                            custPassword: this.changePasswordForm.value.newPasswordConfirmation,
                        };
                        this.api.updateCustomerPassword(obj).subscribe((data) => {
                            if (data.hasOwnProperty('content')) {
                                if (data.content
                                    .toString()
                                    .includes('No record exists for given phone number')) {
                                    this.openToast('No record exists for given phone number');
                                }
                            }
                            else {
                                localStorage.setItem('firstTimeLogin', 'N');
                                if (this.firstTimeLogin == 'Y') {
                                    this.openToast('Created password successfully');
                                    this.router.navigateByUrl('/otp');
                                }
                                else {
                                    this.openToast('Updated password successfully');
                                }
                            }
                        }, (error) => {
                            console.log('Error: ', error);
                            this.openToast('Unable to update password');
                        });
                    }
                }
            }, (err) => {
                console.log('Error:: ', err);
                this.openToast('Something went wrong!');
            });
        }
    }
    openToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: `${message}`,
                duration: 5000,
                position: 'middle',
            });
            toast.present();
        });
    }
    previous() {
        if (this.firstTimeLogin === 'Y') {
            this.router.navigateByUrl('/login');
        }
        else {
            // this.router.navigate(['/profile']);
            this.location.back();
        }
    }
};
ChangePasswordPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_7__.Location },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ToastController }
];
ChangePasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
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

module.exports = ".new-background-color {\n  --background: #ecf3f2;\n  height: 108.5px;\n  display: inline-block;\n  vertical-align: middle;\n  color: #54627a;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n  display: flex;\n  align-items: center;\n}\n.new-background-color span.text {\n  font-weight: bold;\n  margin-left: 2%;\n}\n.box {\n  border-width: 1pt;\n  border-style: solid;\n  width: 95%;\n  height: 55px;\n  background-color: white;\n  border-color: #456efe;\n}\n.inputCard {\n  padding-top: 7%;\n  padding-left: 5%;\n  font-family: \"Montserrat\" !important;\n}\n.form_label {\n  color: #1f618d;\n  font-size: 20px;\n  font-family: Arial, sans-serif;\n  letter-spacing: 0.5px;\n}\nion-input {\n  color: black !important;\n  font-size: 26px;\n  background-color: white !important;\n  --placeholder-color: black !important;\n  min-height: 70px !important;\n  width: 95%;\n  font-family: \"Montserrat\" !important;\n  margin-top: 5pt;\n  border: 2px solid #456efe;\n}\nion-footer {\n  margin-bottom: 0px;\n}\nion-button {\n  font-size: 16px;\n  font-family: \"Montserrat\" !important;\n  text-transform: capitalize;\n}\n.suffix-icon {\n  position: absolute;\n  bottom: 0;\n  right: 20px;\n  margin: 20px;\n  font-size: xx-large;\n  color: #1f618d;\n  z-index: 2;\n}\nion-item {\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxHaXRIdWIlMjBSZXBvc2l0b3J5JTIwb2xkXFxpQ3VzdE1vYmlsZS12Mlxcc3JjXFxhcHBcXHBhZ2VzXFxjaGFuZ2UtcGFzc3dvcmRcXGNoYW5nZS1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0FGO0FEQ0U7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNDSjtBRFNBO0VBQ0UsaUJBQUE7RUFHQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBRUEsdUJBQUE7RUFDQSxxQkFBQTtBQ1RGO0FEY0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSxvQ0FBQTtBQ1pGO0FEZUE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUVBLDhCQUFBO0VBR0EscUJBQUE7QUNmSjtBRGtCQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtDQUFBO0VBQ0EscUNBQUE7RUFHQSwyQkFBQTtFQUNBLFVBQUE7RUFDQSxvQ0FBQTtFQUNBLGVBQUE7RUFFQSx5QkFBQTtBQ2xCRjtBRG9CQTtFQUNFLGtCQUFBO0FDakJGO0FEbUJBO0VBQ0UsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsMEJBQUE7QUNoQkY7QURrQkE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7QUNmRjtBRGlCQTtFQUNFLGdCQUFBO0FDZEYiLCJmaWxlIjoiY2hhbmdlLXBhc3N3b3JkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXctYmFja2dyb3VuZC1jb2xvciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZWNmM2YyO1xyXG4gIGhlaWdodDogMTA4LjVweDtcclxuICAvLyAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgY29sb3I6ICM1NDYyN2E7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBzcGFuLnRleHQge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgfVxyXG59XHJcbi8vIGlvbi1pY29ue1xyXG4vLyAgICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuLy8gICAgIGNvbG9yOmJsYWNrO1xyXG4vLyAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4vLyAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuXHJcbi8vIH1cclxuLmJveCB7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHQ7XHJcbiAgLy8gYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAvLyBib3gtc2hhZG93OiAwIDVwdCA1cHQgLTJwdCAjRDNEM0QzO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBoZWlnaHQ6IDU1cHg7XHJcblxyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1jb2xvcjogIzQ1NmVmZTtcclxuICAvLyBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgLy8gYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgLy8gYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxufVxyXG4uaW5wdXRDYXJkIHtcclxuICBwYWRkaW5nLXRvcDogNyU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuXHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb3JtX2xhYmVsIHtcclxuICAgIGNvbG9yOiMxZjYxOGQ7IC8vIDFmNjE4ZFxyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgLy8gZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgLy8gZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAvLyBtYXJnaW4tYm90dG9tOiAxM3B0O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG59XHJcblxyXG5pb24taW5wdXQge1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgLy8gLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxMDAlO1xyXG4gIC8vIGhlaWdodDoxNTBwdCFpbXBvcnRhbnQ7XHJcbiAgbWluLWhlaWdodDogNzBweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogNXB0O1xyXG5cclxuICBib3JkZXI6IDJweCBzb2xpZCAjNDU2ZWZlO1xyXG59XHJcbmlvbi1mb290ZXIge1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5pb24tYnV0dG9uIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLnN1ZmZpeC1pY29uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIGNvbG9yOiAjMWY2MThkO1xyXG4gIHotaW5kZXg6IDI7XHJcbn1cclxuaW9uLWl0ZW0ge1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuIiwiLm5ldy1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZWNmM2YyO1xuICBoZWlnaHQ6IDEwOC41cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6ICM1NDYyN2E7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubmV3LWJhY2tncm91bmQtY29sb3Igc3Bhbi50ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuLmJveCB7XG4gIGJvcmRlci13aWR0aDogMXB0O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICB3aWR0aDogOTUlO1xuICBoZWlnaHQ6IDU1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBib3JkZXItY29sb3I6ICM0NTZlZmU7XG59XG5cbi5pbnB1dENhcmQge1xuICBwYWRkaW5nLXRvcDogNyU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xufVxuXG4uZm9ybV9sYWJlbCB7XG4gIGNvbG9yOiAjMWY2MThkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xufVxuXG5pb24taW5wdXQge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICBtaW4taGVpZ2h0OiA3MHB4ICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiA5NSU7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiA1cHQ7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM0NTZlZmU7XG59XG5cbmlvbi1mb290ZXIge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG5cbmlvbi1idXR0b24ge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbn1cblxuLnN1ZmZpeC1pY29uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAyMHB4O1xuICBtYXJnaW46IDIwcHg7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIGNvbG9yOiAjMWY2MThkO1xuICB6LWluZGV4OiAyO1xufVxuXG5pb24taXRlbSB7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59Il19 */";

/***/ }),

/***/ 91590:
/*!****************************************************************************!*\
  !*** ./src/app/pages/change-password/change-password.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"new-background-color\" *ngIf=\"firstTimeLogin == 'N' \">\r\n    <ion-icon name=\"chevron-back-outline\" (click)=\"previous()\"></ion-icon>\r\n    <span class=\"text\">Change Password</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-header>\r\n  <ion-toolbar class=\"new-background-color\" *ngIf=\"firstTimeLogin == 'Y' \">\r\n    <ion-icon name=\"chevron-back-outline\" (click)=\"previous()\"></ion-icon>\r\n    <span class=\"text\">Create Password</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <form [formGroup]=\"changePasswordForm\">\r\n    <ion-list>\r\n      <ion-item lines=\"none\" *ngIf=\"firstTimeLogin == 'N' \">\r\n        <ion-label\r\n        class=\"form_label\"\r\n          position=\"stacked\"\r\n          >Current Password</ion-label\r\n        >\r\n        <ion-input\r\n          placeholder=\"Enter Current Password\"\r\n          [type]=\"currShowPassword ? 'text' : 'password'\"\r\n          formControlName=\"currentPassword\"\r\n        ></ion-input>\r\n        <ion-icon\r\n          class=\"suffix-icon\"\r\n          (click)=\"onPasswordToggle('current')\"\r\n          ion-button\r\n          clear\r\n          small\r\n          item-end\r\n          [name]=\"currShowPassword ? 'eye' : 'eye-off'\"\r\n        ></ion-icon>\r\n      </ion-item>\r\n      <ion-item lines=\"none\">\r\n        <ion-label\r\n        class=\"form_label\"\r\n          position=\"stacked\"\r\n          >New Password</ion-label\r\n        >\r\n        <ion-input\r\n          [type]=\"newShowPassword ? 'text' : 'password'\"\r\n          placeholder=\"Enter New Password\"\r\n          formControlName=\"newPassword\"\r\n        ></ion-input>\r\n        <ion-icon\r\n          class=\"suffix-icon\"\r\n          (click)=\"onPasswordToggle('new')\"\r\n          ion-button\r\n          clear\r\n          small\r\n          item-end\r\n          [name]=\"newShowPassword ? 'eye' : 'eye-off'\"\r\n        ></ion-icon>\r\n        <div\r\n          *ngIf=\"changePasswordForm.controls['newPassword'].invalid && (changePasswordForm.controls['newPassword'].dirty\r\n       || changePasswordForm.controls['newPassword'].touched)\"\r\n          class=\"alert\"\r\n        >\r\n          <div\r\n            *ngIf=\"changePasswordForm.controls['newPassword'].hasError('required')\"\r\n            style=\"color: red\"\r\n          >\r\n            <span slot=\"error\">Password is required</span>\r\n          </div>\r\n        </div>\r\n      </ion-item>\r\n      <div\r\n        *ngIf=\"changePasswordForm.controls['newPassword'].hasError('minlength')\"\r\n        style=\"color: red; padding-left: 20px;\"\r\n      >\r\n        <span slot=\"error\"> Must be at least 8 characters!</span>\r\n      </div>\r\n      <div\r\n        *ngIf=\"changePasswordForm.controls['newPassword'].hasError('hasNumber')\"\r\n        style=\"color: red; padding-left: 20px;\"\r\n      >\r\n        <span slot=\"error\"> Must contain at least 1 number!</span>\r\n      </div>\r\n      <div\r\n        *ngIf=\"changePasswordForm.controls['newPassword'].hasError('hasCapitalCase')\"\r\n        style=\"color: red; padding-left: 20px;\"\r\n      >\r\n        <span slot=\"error\"> Must contain at least 1 in Capital Case!</span>\r\n      </div>\r\n      <div\r\n        *ngIf=\"changePasswordForm.controls['newPassword'].hasError('hasSmallCase')\"\r\n        style=\"color: red; padding-left: 20px;\"\r\n      >\r\n        <span slot=\"error\"> Must contain at least 1 Letter in small Case!</span>\r\n      </div>\r\n      <div\r\n        *ngIf=\"changePasswordForm.controls['newPassword'].hasError('hasSpecialCharacters')\"\r\n        style=\"color: red; padding-left: 20px;\"\r\n      >\r\n        <span slot=\"error\"> Must contain at least 1 Special Character!</span>\r\n      </div>\r\n      <ion-item lines=\"none\">\r\n        <ion-label\r\n        class=\"form_label\"\r\n          position=\"stacked\"\r\n          >Re-enter New Password</ion-label\r\n        >\r\n        <ion-input\r\n          [type]=\"reEnterShowPassword ? 'text' : 'password'\"\r\n          placeholder=\"Re-enter Current Password\"\r\n          formControlName=\"newPasswordConfirmation\"\r\n        ></ion-input>\r\n        <ion-icon\r\n          class=\"suffix-icon\"\r\n          (click)=\"onPasswordToggle('reenter')\"\r\n          ion-button\r\n          clear\r\n          small\r\n          item-end\r\n          [name]=\"reEnterShowPassword ? 'eye' : 'eye-off'\"\r\n        ></ion-icon>\r\n      </ion-item>\r\n      <div\r\n        *ngIf=\"changePasswordForm.controls['newPasswordConfirmation'].invalid && (changePasswordForm.controls['newPasswordConfirmation'].dirty || changePasswordForm.controls['newPasswordConfirmation'].touched)\"\r\n        class=\"alert\"\r\n      >\r\n        <div\r\n          *ngIf=\"changePasswordForm.controls['newPasswordConfirmation'].hasError('required')\"\r\n          style=\"color: red; padding-left: 20px;\"\r\n        >\r\n          Confirm Password is Required!\r\n        </div>\r\n\r\n        <div\r\n          *ngIf=\"changePasswordForm.controls['newPasswordConfirmation'].hasError('NoPassswordMatch')\"\r\n          style=\"color: red; padding-left: 20px;\"\r\n        >\r\n          Password do not match\r\n        </div>\r\n      </div>\r\n    </ion-list>\r\n    <!-- <div >\r\n      <ion-item>\r\n        <ion-label position=\"stacked\">Current Password</ion-label>\r\n    <ion-input placeholder=\"Enter Current Password\" [type]=\"showPassword ? 'text' : 'password'\"\r\n    formControlName=\"currentPassword\" ngDefaultControl></ion-input>\r\n    <button class=\"suffix-icon\" (click)=\"onPasswordToggle()\" ion-button clear small item-end icon-only>\r\n      <ion-icon  class=\"suffix-icon\" (click)=\"onPasswordToggle()\" ion-button clear small item-end [name]=\"showPassword ? 'eye' : 'eye-off'\"></ion-icon>\r\n    </button>\r\n      </ion-item>\r\n    \r\n    </div>\r\n    <div class=\"inputCard\">\r\n      <ion-label>New Password</ion-label>\r\n      <ion-input class=\"box\" placeholder=\"Enter New Password\" formControlName=\"newPassword\" ngDefaultControl></ion-input>\r\n    \r\n      </div>\r\n      <div class=\"inputCard\">\r\n        <ion-label>Re-enter New Password</ion-label>\r\n        <ion-input class=\"box\" placeholder=\"Re-enter Current Password\" formControlName=\"newPasswordConfirmation\" ngDefaultControl></ion-input>\r\n      \r\n        </div> -->\r\n  </form>\r\n</ion-content>\r\n<div>\r\n  <ion-button\r\n    *ngIf=\"firstTimeLogin == 'N' \"\r\n    expand=\"block\"\r\n    shape=\"round\"\r\n    style=\"\r\n      height: 56px;\r\n      margin-left: 16pt;\r\n      margin-right: 16pt;\r\n      margin-bottom: 31px;\r\n    \"\r\n    (click)=\"save()\"\r\n    >Save Changes</ion-button\r\n  >\r\n</div>\r\n<div>\r\n  <ion-button\r\n    *ngIf=\"firstTimeLogin == 'Y' \"\r\n    expand=\"block\"\r\n    shape=\"round\"\r\n    style=\"\r\n      height: 56px;\r\n      margin-left: 16pt;\r\n      margin-right: 16pt;\r\n      margin-bottom: 31px;\r\n    \"\r\n    (click)=\"save()\"\r\n    >Save</ion-button\r\n  >\r\n</div>\r\n<div></div>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_change-password_change-password_module_ts.js.map