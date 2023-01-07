"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_mpinotpvalidate_mpinotpvalidate_module_ts"],{

/***/ 48230:
/*!*************************************************************************!*\
  !*** ./src/app/pages/mpinotpvalidate/mpinotpvalidate-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MpinotpvalidatePageRoutingModule": () => (/* binding */ MpinotpvalidatePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _mpinotpvalidate_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mpinotpvalidate.page */ 15516);




const routes = [
    {
        path: '',
        component: _mpinotpvalidate_page__WEBPACK_IMPORTED_MODULE_0__.MpinotpvalidatePage
    }
];
let MpinotpvalidatePageRoutingModule = class MpinotpvalidatePageRoutingModule {
};
MpinotpvalidatePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], MpinotpvalidatePageRoutingModule);



/***/ }),

/***/ 56166:
/*!*****************************************************************!*\
  !*** ./src/app/pages/mpinotpvalidate/mpinotpvalidate.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MpinotpvalidatePageModule": () => (/* binding */ MpinotpvalidatePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _mpinotpvalidate_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mpinotpvalidate-routing.module */ 48230);
/* harmony import */ var _mpinotpvalidate_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mpinotpvalidate.page */ 15516);







let MpinotpvalidatePageModule = class MpinotpvalidatePageModule {
};
MpinotpvalidatePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _mpinotpvalidate_routing_module__WEBPACK_IMPORTED_MODULE_0__.MpinotpvalidatePageRoutingModule
        ],
        declarations: [_mpinotpvalidate_page__WEBPACK_IMPORTED_MODULE_1__.MpinotpvalidatePage]
    })
], MpinotpvalidatePageModule);



/***/ }),

/***/ 15516:
/*!***************************************************************!*\
  !*** ./src/app/pages/mpinotpvalidate/mpinotpvalidate.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MpinotpvalidatePage": () => (/* binding */ MpinotpvalidatePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _mpinotpvalidate_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mpinotpvalidate.page.html?ngResource */ 15736);
/* harmony import */ var _mpinotpvalidate_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mpinotpvalidate.page.scss?ngResource */ 29343);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/finger-print-capture.service */ 26009);
/* harmony import */ var _login_login_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../login/login.page */ 3058);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);












let MpinotpvalidatePage = class MpinotpvalidatePage {
    constructor(router, cdk, fb, api, _location, fpCaptureService, toastCtrl) {
        this.router = router;
        this.cdk = cdk;
        this.fb = fb;
        this.api = api;
        this._location = _location;
        this.fpCaptureService = fpCaptureService;
        this.toastCtrl = toastCtrl;
        this.otpValue = null;
        this.otpValid = false;
        this.oTpModel = new _login_login_page__WEBPACK_IMPORTED_MODULE_4__.otpModel();
        this.verifyOtpModel = new _login_login_page__WEBPACK_IMPORTED_MODULE_4__.verifyotpModel();
        this.userResp = false;
        this.showPassword = false;
        this.userPasswordUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
        this.showPasswordFeild = true;
        this.isLoading = false;
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            phoneNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
            isOtp: [false],
            otp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
        });
    }
    // public onPasswordToggle(showType): void {
    //   if (showType === 'new') {
    //     this.showPassword = !this.showPassword;
    //   }
    // }
    _keyPress(event) {
        console.log('key', event);
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    getOtp(phone) {
        console.log('Phonenumber for OTP', phone.phoneNo);
        this.customerPhonenum = phone.phoneNo;
        console.log(this.customerPhonenum);
        // localStorage.setItem("PhoneNumLogin", this.customerPhonenum);
        if (this.customerPhonenum == '')
            this.openToast('Please enter the registered Mobile Number');
        // localStorage.setItem("PhoneNumLogin", this.customerPhonenum);
        this.oTpModel.source = 'customer';
        this.oTpModel.source_key = 'mobile';
        this.oTpModel.source_value = phone.phoneNo;
        console.log('model', this.oTpModel);
        if (this.oTpModel.source_value != '') {
            this.api.getOtp(this.oTpModel).subscribe((otpResp) => {
                var _a, _b;
                console.log('response :: ', otpResp);
                if (Object.keys(otpResp).length === 0) {
                    this.openToast('No data found for Phone No. :' + phone.phoneNo);
                }
                else {
                    var custStatus = '';
                    if (otpResp.hasOwnProperty('icust')) {
                        if (((_a = otpResp === null || otpResp === void 0 ? void 0 : otpResp.icust) === null || _a === void 0 ? void 0 : _a.custStatus) &&
                            ((_b = otpResp === null || otpResp === void 0 ? void 0 : otpResp.icust) === null || _b === void 0 ? void 0 : _b.custStatus.toString().includes('APPROVED'))) {
                            custStatus = otpResp.icust.custStatus;
                        }
                    }
                    if (otpResp.hasOwnProperty('otpVal')) {
                        if (otpResp.otpVal.status.toString().includes('APPROVED')) {
                            custStatus = otpResp.otpVal.status;
                        }
                    }
                    if (!custStatus.toString().includes('APPROVED')) {
                        this.openToast('Customer Id or Account Status is not approved');
                    }
                    else {
                        console.log('Response Success', otpResp);
                        this.otpResponse = otpResp;
                        /* Added validation for un-registered mobile nummber is entered */
                        if (this.otpResponse.otpVal.userId === 'New Customer' ||
                            (this.otpResponse.otpVal.userId === '' &&
                                this.otpResponse.otpVal.userId === null)) {
                            this.cdk.detectChanges();
                            this.userResp = true;
                            this.openToast('Please enter the registered Mobile Number');
                        }
                        else {
                            console.log('first time login :: ', this.otpResponse.icust.firstTimeLogin);
                            if (this.otpResponse.icust.firstTimeLogin === 'Y') {
                                localStorage.setItem('firstTimeLogin', this.otpResponse.icust.firstTimeLogin);
                                localStorage.setItem('customerPhonenum', this.customerPhonenum);
                                this.showPasswordFeild = false;
                                // this.api.sendOtp(this.otpResponse['otpVal'].token);
                                this.router.navigate(['change-password']);
                            }
                            else {
                                localStorage.setItem('firstTimeLogin', 'N');
                                localStorage.setItem('customerPhonenum', this.customerPhonenum);
                                if (this.showPasswordFeild &&
                                    this.otpResponse.icust.firstTimeLogin == 'N') {
                                    this.openToast('Enter Password');
                                }
                                this.api.sendOtp(this.otpResponse['otpVal'].token);
                                const navigationExtras = {
                                    queryParams: {
                                        'screenName': 'mpinotpValidate'
                                    },
                                };
                                this.api.sendNavParam(navigationExtras);
                                this.router.navigateByUrl('/otp');
                                // this.router.navigate(['/rule-mapping/edit', 'mpinotpValidate']);
                                // this.router.navigate( ['/otp/'],{queryParams:{screen:'mpinotpValidate'}});
                                // this.goToCashWithdrawal(this.loginForm);
                            }
                        }
                    }
                }
            });
        }
    }
    validateOtp(otpValue) {
        console.log('OTP validaion', otpValue);
        console.log('Phonenumber for OTP', otpValue, this.loginForm.value.otp);
        this.verifyOtpModel.sourceKey = 'mobile';
        this.verifyOtpModel.sourceValue = '9059029994';
        this.verifyOtpModel.otp = otpValue.otpNumber;
        this.verifyOtpModel.type = '';
        console.log('model', this.verifyOtpModel);
        this.api.verifyOtp(this.verifyOtpModel).subscribe((otpResp) => {
            console.log('Response Success', otpResp);
            this.otpResponse = otpResp;
        });
        if (this.otpResponse !== null) {
            // this.router.navigateByUrl('/others/services');
            // this.goToCashWithdrawal(this.loginForm);
        }
        else {
            this.router.navigateByUrl('/sessions/login');
        }
    }
    continue(loginForm) {
        // if (!this.loginForm.get('isOtp').value) {
        if (!loginForm.phoneNo) {
            this.openToast('Phone number is required!');
            return;
        }
        this.isLoading = true;
        // this.api
        //   .validatePassword(loginForm.phoneNo, loginForm.password)
        //   .subscribe(
        //     (data) => {
        //       console.log('validate password-- ', data);
        //       if (data) {
        //         if (data.hasOwnProperty('message')) {
        //           if (data.message.toString().includes('Wrong Password')) {
        //             this.openToast('Wrong Password');
        //             this.isLoading = false;
        //           } else {
        //             this.api
        //               .custpomerDetails(loginForm.phoneNo)
        //               .subscribe((resp) => {
        //                 //where u need to add?
        //                 if (resp != null) {
        //                   if (resp.custStatus === 'APPROVED') {
        //                     resp.custAccount = resp.custAccount.filter(
        //                       (card) => card.status === 'APPROVED'
        //                     );
        //                     const cards = JSON.stringify(resp.custAccount);
        //                     localStorage.setItem('cardData', cards);
        //                     localStorage.setItem(
        //                       'customerPhonenum',
        //                       loginForm.phoneNo
        //                     );
        //                     sessionStorage.setItem(
        //                       'customer_id',
        //                       resp.customerId
        //                     );
        //                     localStorage.setItem('firstName', resp?.firstName);
        //                     localStorage.setItem('lastName', resp?.lastName);
        //                     localStorage.setItem('customer_id', resp.customerId);
        //                     localStorage.setItem(
        //                       'customer_details',
        //                       JSON.stringify(resp)
        //                     );
        //                     this.openToast('Login Successful');
        //                     this.router.navigate(['dashboard']);
        //                     this.isLoading = false;
        //                   } else {
        //                     this.openToast(
        //                       'Customer Id or Account Status is not approved'
        //                     );
        //                     this.isLoading = false;
        //                   }
        //                 }
        //               });
        //           }
        //         }
        //       } else {
        //         this.openToast('Invalid login credential');
        //         this.isLoading = false;
        //       }
        //     },
        //     (error) => {
        //       console.log('Error :: ', error);
        //       this.isLoading = false;
        //     }
        //   );
        // } 
        // else if (!this.showPasswordFeild && localStorage.getItem('firstTimeLogin') === 'Y') {
        //   this.router.navigate(['change-password']);
        // } 
        // else {
        this.getOtp(loginForm);
        // this.router.navigate(['otp']);
        // }
    }
    openToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: `${message}`,
                duration: 2500,
                position: 'middle',
            });
            toast.present();
        });
    }
    openDialog() {
        console.log('capture finger print');
        this.captureFingerPrintHttps();
    }
    /* @method : to capture the the finger print */
    captureFingerPrintHttps() {
        console.log('in component');
        this.fpCaptureService.CallingSGIFPCapture().subscribe((capturedData) => {
            console.log('capturedData:: ', capturedData);
            if (capturedData.ErrorCode == 0) {
                this.openToast(`Finding ,is registed customer`);
                this.getFpDataForMatchOnPageLoad(capturedData.TemplateBase64);
            }
            else {
                this.getError(capturedData.ErrorCode);
            }
        }, (error) => {
            this.openToast(`${error}`);
        });
    }
    getFpDataForMatchOnPageLoad(templateBase64) {
        console.log('TemplateBase64 :: ', templateBase64);
        this.fpCaptureService.getCustInfoByFp(0, 100, 4).subscribe((resp) => {
            console.log('resp:: ', resp);
            // this.totalItems=resp.totalItems;
            // this.totalPages=resp.totalPages;
            if (resp.totalPages - 1 == 0) {
                Object.keys(resp.data).forEach((key) => {
                    this.matchFpFromUi(templateBase64, resp.data[key]);
                });
            }
            else {
                for (let i = 0; i < resp.totalPages; i++) {
                    if (i == 0) {
                        Object.keys(resp.data).forEach((key) => {
                            this.matchFpFromUi(templateBase64, resp.data[key]);
                        });
                    }
                    else {
                        // to-da: need to implement logic when more data is present
                        console.log('in fg cap else');
                    }
                }
            }
        });
    }
    matchFpFromUi(template1, data) {
        this.fpCaptureService
            .CallingSGIFPMatch(template1, data.fpTemplateBase64)
            .subscribe((fpResp) => {
            console.log('fpResp : ', fpResp);
            if (fpResp.MatchingScore >= 100) {
                let custId = data.customerId;
                console.log('res', data);
                // this.jwtService.setUserAndToken(data,true);
                // this.router.navigateByUrl('/others/dashboard');
                localStorage.setItem('customerId', custId);
                // this.cdr.markForCheck();
                // this.cdr.detectChanges();
                this.openToast(`User found : ${data.customerId}`);
                return;
            }
        });
    }
    /* @method : to get error code of finger print device */
    getError(errorCode) {
        let error = this.fpCaptureService.errorCodeService(errorCode);
        console.log('error code', error);
    }
    validatePassword(password) {
        console.log('password ==> ', password);
        console.log(this.loginForm.value.phoneNo);
        this.loginForm.value.phoneNo &&
            this.api
                .validatePassword(this.loginForm.value.phoneNo, password)
                .subscribe((data) => {
                console.log('data', data);
                if (data.hasOwnProperty('message')) {
                    if (data.message.toString().includes('Wrong Password')) {
                        this.openToast('Wrong Password');
                    }
                    else {
                        localStorage.setItem('firstTimeLogin', 'N');
                    }
                }
            }, (error) => {
                console.error('Invalid password');
            });
    }
    back() {
        this.router.navigateByUrl('login-landing');
    }
    forgotPassword() {
        this.router.navigateByUrl('forget-password');
    }
};
MpinotpvalidatePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_10__.Location },
    { type: src_app_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_3__.FingerPrintCaptureService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController }
];
MpinotpvalidatePage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
        selector: 'app-mpinotpvalidate',
        template: _mpinotpvalidate_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_mpinotpvalidate_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], MpinotpvalidatePage);



/***/ }),

/***/ 29343:
/*!****************************************************************************!*\
  !*** ./src/app/pages/mpinotpvalidate/mpinotpvalidate.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "section {\n  position: relative;\n  background: url(\"/assets/images/3@3x.png\");\n  background-repeat: round;\n  color: #fff;\n  height: 40%;\n}\n\n.item-box-white {\n  width: 100%;\n  height: 100%;\n  background: #ffffff;\n  border-radius: 60px 0 0 0;\n  height: 60%;\n  position: absolute;\n}\n\nion-toolbar {\n  --background: transparent;\n  --color: white;\n}\n\n.bg-home-6 {\n  height: 132px;\n  width: 184px;\n  right: 0px;\n  background: radial-gradient(circle at 10% 130%, rgba(214, 214, 214, 0.2117647059) 68%, transparent 67.5%);\n  position: absolute;\n  top: 0px;\n  transform: rotate(180deg);\n}\n\n.bg-bottom-home-6 {\n  height: 132px;\n  width: 184px;\n  margin-left: 0px;\n  background: radial-gradient(circle at 10% 130%, rgba(214, 214, 214, 0.2117647059) 68%, transparent 67.5%);\n  float: left;\n  position: absolute;\n  bottom: 0px;\n}\n\n.fontpassword {\n  position: relative;\n}\n\n.forgot,\na {\n  text-align: center;\n  font-size: 14px;\n  color: #456EFE !important;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n}\n\n.ml-10 {\n  margin-left: -10px;\n}\n\n.fontpassword i {\n  position: absolute;\n  right: 15px;\n  top: 44px;\n  color: #456EFE;\n}\n\n.form-box {\n  padding: 25px;\n  height: 250px;\n  position: relative;\n  top: -10%;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n\n.form-box .logo {\n  width: 130px;\n  margin: auto;\n}\n\n.title {\n  vertical-align: top;\n  color: #231F20;\n  font-size: 16px;\n  font-weight: 600;\n  position: relative;\n  text-align: left;\n  margin-top: 15px;\n  margin-bottom: 6px;\n}\n\n.sub-title {\n  vertical-align: top;\n  color: #231F20;\n  font-size: 12px;\n  position: relative;\n  text-align: left;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.form-box .or {\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 15px;\n  font-weight: 600;\n  color: #231F20;\n}\n\n.form-box .forgot a:hover {\n  color: #EB001B;\n}\n\nion-item {\n  --highlight-color-valid: #456efe !important;\n}\n\n.footer-link {\n  font-size: 14px;\n  font-weight: 400;\n  color: #231F20;\n  text-align: center;\n  position: fixed;\n  bottom: 20px;\n  left: 0px;\n  right: 0px;\n}\n\n.logo-icon {\n  margin: 0 auto;\n  text-align: start;\n  width: 130px;\n  height: 130px;\n  margin-top: 30px;\n}\n\n.back-nav {\n  padding: 19px 0px 0px 0px;\n}\n\n.back-nav-color {\n  color: #000000 !important;\n}\n\n.footer-link a {\n  color: #be2623;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.footer-link a:hover {\n  color: #f79e1b;\n}\n\n.full-width {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1waW5vdHB2YWxpZGF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHlHQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBS0EseUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5R0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFBRjs7QUFLQTtFQUNFLGtCQUFBO0FBRkY7O0FBS0E7O0VBRUUsa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQUZGOztBQUtBO0VBQ0Usa0JBQUE7QUFGRjs7QUFLQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FBRkY7O0FBS0E7RUFFRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQUhGOztBQU1BO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUFKRjs7QUFTQTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQU5GOztBQVVBO0VBQ0UsY0FBQTtBQVBGOztBQVVBO0VBQ0UsMkNBQUE7QUFQRjs7QUFVQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFQRjs7QUFVQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFQRjs7QUFVQTtFQUNFLHlCQUFBO0FBUEY7O0FBVUE7RUFDRSx5QkFBQTtBQVBGOztBQVVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQVBGOztBQVVBO0VBQ0UsY0FBQTtBQVBGOztBQVVBO0VBQ0UsV0FBQTtBQVBGIiwiZmlsZSI6Im1waW5vdHB2YWxpZGF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy8zQDN4LnBuZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBoZWlnaHQ6IDQwJTtcclxufVxyXG5cclxuLml0ZW0tYm94LXdoaXRlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiA2MHB4IDAgMCAwO1xyXG4gIGhlaWdodDogNjAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4uYmctaG9tZS02IHtcclxuICBoZWlnaHQ6IDEzMnB4O1xyXG4gIHdpZHRoOiAxODRweDtcclxuICByaWdodDogMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTAlIDEzMCUsICNkNmQ2ZDYzNiA2OCUsIHRyYW5zcGFyZW50IDY3LjUlKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5iZy1ib3R0b20taG9tZS02IHtcclxuICBoZWlnaHQ6IDEzMnB4O1xyXG4gIHdpZHRoOiAxODRweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTAlIDEzMCUsICNkNmQ2ZDYzNiA2OCUsIHRyYW5zcGFyZW50IDY3LjUlKTtcclxuICBmbG9hdDogbGVmdDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmZvbnRwYXNzd29yZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZm9yZ290LFxyXG5hIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjNDU2RUZFICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5tbC0xMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG59XHJcblxyXG4uZm9udHBhc3N3b3JkIGkge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMTVweDtcclxuICB0b3A6IDQ0cHg7XHJcbiAgY29sb3I6ICM0NTZFRkU7XHJcbn1cclxuXHJcbi5mb3JtLWJveCB7XHJcbiAgLy8gd2lkdGg6IDMwMHB4O1xyXG4gIHBhZGRpbmc6IDI1cHg7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdG9wOiAtMTAlO1xyXG4gIGJvdHRvbTogMHB4O1xyXG4gIGxlZnQ6IDBweDtcclxuICByaWdodDogMHB4XHJcbn1cclxuXHJcbi5mb3JtLWJveCAubG9nbyB7XHJcbiAgd2lkdGg6IDEzMHB4O1xyXG4gIG1hcmdpbjogYXV0bztcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGNvbG9yOiAjMjMxRjIwO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGNvbG9yOiAjMjMxRjIwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICAvLyBmb250LXdlaWdodDogNjAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuXHJcblxyXG4uZm9ybS1ib3ggLm9yIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMyMzFGMjA7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1ib3ggLmZvcmdvdCBhOmhvdmVyIHtcclxuICBjb2xvcjogI0VCMDAxQjtcclxufVxyXG5cclxuaW9uLWl0ZW0ge1xyXG4gIC0taGlnaGxpZ2h0LWNvbG9yLXZhbGlkOiAjNDU2ZWZlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb290ZXItbGluayB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICMyMzFGMjA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDIwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5sb2dvLWljb24ge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIHdpZHRoOiAxMzBweDtcclxuICBoZWlnaHQ6IDEzMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuXHJcbi5iYWNrLW5hdiB7XHJcbiAgcGFkZGluZzogMTlweCAwcHggMHB4IDBweDtcclxufVxyXG5cclxuLmJhY2stbmF2LWNvbG9yIHtcclxuICBjb2xvcjogIzAwMDAwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9vdGVyLWxpbmsgYSB7XHJcbiAgY29sb3I6ICNiZTI2MjM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmZvb3Rlci1saW5rIGE6aG92ZXIge1xyXG4gIGNvbG9yOiAjZjc5ZTFiO1xyXG59XHJcblxyXG4uZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */";

/***/ }),

/***/ 15736:
/*!****************************************************************************!*\
  !*** ./src/app/pages/mpinotpvalidate/mpinotpvalidate.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <section>\r\n\r\n    <ion-toolbar>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-button fill=\"clear\" (click)=\"back()\">\r\n          <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" class=\"back-nav-color\"></ion-icon>\r\n        </ion-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n\r\n    <div class=\"logo-icon\">\r\n      <div class=\"logo\"><img src=\"/assets/images/logo.svg\" class=\"w-100\"></div>\r\n    </div>\r\n  </section>\r\n  <div class=\"item-box-white\">\r\n    <div class=\"form-box\">\r\n      <div class=\"title\">Validate OTP to set mpin</div>\r\n      <p class=\"sub-title\">Enter your details to get started</p>\r\n\r\n      <form [formGroup]=\"loginForm\">\r\n\r\n        <ion-item fill=\"outline\">\r\n          <ion-label position=\"floating\">Phone Number</ion-label>\r\n          <ion-input type=\"text\" class=\"form-control\" id=\"phonenumber\" placeholder=\"Phone Number\" name=\"Username\"\r\n            formControlName=\"phoneNo\" (keyup)=\"_keyPress($event)\" placeholder=\"Phone Number\" autocomplete=\"off\"\r\n            maxLength=\"10\"></ion-input>\r\n        </ion-item>\r\n\r\n        <!-- <ion-item lines=\"none\" class=\"my-2\">\r\n          <ion-checkbox slot=\"start\" class=\"ml-10\" formControlName=\"isOtp\"></ion-checkbox>\r\n          <ion-label>Sign in using OTP</ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item fill=\"outline\" *ngIf=\"loginForm.get('isOtp').value == false\">\r\n          <ion-label position=\"floating\">Password</ion-label>\r\n          <ion-input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" name=\"Password\"\r\n            [type]=\"showPassword ? 'text' : 'password'\" formControlName=\"password\"></ion-input>\r\n        </ion-item> -->\r\n\r\n\r\n        <!-- \r\n        <div class=\"forgot\">\r\n          <a class=\"text-right\" (click)=\"forgotPassword()\">Forgot password ?</a>\r\n        </div> -->\r\n\r\n      </form>\r\n\r\n      <div class=\"my-5\">\r\n        <ng-container *ngIf=\"isLoading; else showLoading\">\r\n          <ion-button expand=\"full\" shape=\"round\" class=\"my-5\">\r\n            <ion-spinner name=\"circles\"></ion-spinner>\r\n          </ion-button>\r\n        </ng-container>\r\n        <ng-template #showLoading>\r\n          <ion-button expand=\"full\" shape=\"round\" class=\"my-5\" (click)=\"continue(loginForm.value)\">CONTINUE\r\n          </ion-button>\r\n        </ng-template>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mpinotpvalidate_mpinotpvalidate_module_ts.js.map