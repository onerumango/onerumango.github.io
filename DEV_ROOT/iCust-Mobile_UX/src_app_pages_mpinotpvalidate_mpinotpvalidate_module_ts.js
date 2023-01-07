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

module.exports = "section {\n  position: relative;\n  background: url(\"/assets/images/3@3x.png\");\n  background-repeat: round;\n  color: #fff;\n  height: 40%;\n}\n\n.item-box-white {\n  width: 100%;\n  height: 100%;\n  background: #ffffff;\n  border-radius: 60px 0 0 0;\n  height: 60%;\n  position: absolute;\n}\n\nion-toolbar {\n  --background: url(\"/assets/images/3@3x.png\");\n  --color: white;\n}\n\n.bg-home-6 {\n  height: 132px;\n  width: 184px;\n  right: 0px;\n  background: radial-gradient(circle at 10% 130%, rgba(214, 214, 214, 0.2117647059) 68%, transparent 67.5%);\n  position: absolute;\n  top: 0px;\n  transform: rotate(180deg);\n}\n\n.bg-bottom-home-6 {\n  height: 132px;\n  width: 184px;\n  margin-left: 0px;\n  background: radial-gradient(circle at 10% 130%, rgba(214, 214, 214, 0.2117647059) 68%, transparent 67.5%);\n  float: left;\n  position: absolute;\n  bottom: 0px;\n}\n\n.fontpassword {\n  position: relative;\n}\n\n.forgot,\na {\n  text-align: center;\n  font-size: 14px;\n  color: #456EFE !important;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n}\n\n.ml-10 {\n  margin-left: -10px;\n}\n\n.fontpassword i {\n  position: absolute;\n  right: 15px;\n  top: 44px;\n  color: #456EFE;\n}\n\n.form-box {\n  padding: 25px;\n  height: 250px;\n  position: relative;\n  top: -10%;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n\n.form-box .logo {\n  width: 130px;\n  margin: auto;\n}\n\n.title {\n  vertical-align: top;\n  color: #231F20;\n  font-size: 16px;\n  font-weight: 600;\n  position: relative;\n  text-align: left;\n  margin-top: 15px;\n  margin-bottom: 6px;\n}\n\n.sub-title {\n  vertical-align: top;\n  color: #231F20;\n  font-size: 12px;\n  position: relative;\n  text-align: left;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.form-box .or {\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 15px;\n  font-weight: 600;\n  color: #231F20;\n}\n\n.form-box .forgot a:hover {\n  color: #EB001B;\n}\n\nion-item {\n  --highlight-color-valid:#456efe !important;\n}\n\n.footer-link {\n  font-size: 14px;\n  font-weight: 400;\n  color: #231F20;\n  text-align: center;\n  position: fixed;\n  bottom: 20px;\n  left: 0px;\n  right: 0px;\n}\n\n.logo-icon {\n  margin: 0 auto;\n  text-align: start;\n  width: 130px;\n  height: 130px;\n  margin-top: 30px;\n}\n\n.back-nav {\n  padding: 19px 0px 0px 0px;\n}\n\n.back-nav-color {\n  color: #000000 !important;\n}\n\n.footer-link a {\n  color: #be2623;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.footer-link a:hover {\n  color: #f79e1b;\n}\n\n.full-width {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1waW5vdHB2YWxpZGF0ZS5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxHaXRIdWIlMjBSZXBvc2l0b3J5JTIwb2xkXFxpQ3VzdE1vYmlsZS12Mlxcc3JjXFxhcHBcXHBhZ2VzXFxtcGlub3RwdmFsaWRhdGVcXG1waW5vdHB2YWxpZGF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLDBDQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUU7RUFDRSw0Q0FBQTtFQUNBLGNBQUE7QUNDSjs7QURHRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHlHQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBS0EseUJBQUE7QUNBSjs7QURHRTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5R0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNBSjs7QURLRTtFQUNFLGtCQUFBO0FDRko7O0FES0U7O0VBRUUsa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0ZKOztBREtFO0VBQ0Usa0JBQUE7QUNGSjs7QURLRTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0FDRko7O0FES0U7RUFFRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ0hKOztBRE1FO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNISjs7QURNRTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDSEo7O0FETUU7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QUNKSjs7QURTRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQ05KOztBRFVFO0VBQ0UsY0FBQTtBQ1BKOztBRFVFO0VBQ0UsMENBQUE7QUNQSjs7QURVRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNQSjs7QURVRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNQSjs7QURVRTtFQUNFLHlCQUFBO0FDUEo7O0FEVUU7RUFDRSx5QkFBQTtBQ1BKOztBRFVFO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ1BKOztBRFVFO0VBQ0UsY0FBQTtBQ1BKOztBRFVFO0VBQ0UsV0FBQTtBQ1BKIiwiZmlsZSI6Im1waW5vdHB2YWxpZGF0ZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnL2Fzc2V0cy9pbWFnZXMvM0AzeC5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5pdGVtLWJveC13aGl0ZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4IDAgMCAwO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi10b29sYmFyIHtcclxuICAgIC0tYmFja2dyb3VuZDogdXJsKCcvYXNzZXRzL2ltYWdlcy8zQDN4LnBuZycpO1xyXG4gICAgLS1jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC5iZy1ob21lLTYge1xyXG4gICAgaGVpZ2h0OiAxMzJweDtcclxuICAgIHdpZHRoOiAxODRweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDEwJSAxMzAlLCAjZDZkNmQ2MzYgNjglLCB0cmFuc3BhcmVudCA2Ny41JSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5iZy1ib3R0b20taG9tZS02IHtcclxuICAgIGhlaWdodDogMTMycHg7XHJcbiAgICB3aWR0aDogMTg0cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAxMCUgMTMwJSwgI2Q2ZDZkNjM2IDY4JSwgdHJhbnNwYXJlbnQgNjcuNSUpO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLmZvbnRwYXNzd29yZCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3Jnb3QsXHJcbiAgYSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzQ1NkVGRSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICAubWwtMTAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gIH1cclxuICBcclxuICAuZm9udHBhc3N3b3JkIGkge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDE1cHg7XHJcbiAgICB0b3A6IDQ0cHg7XHJcbiAgICBjb2xvcjogIzQ1NkVGRTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tYm94IHtcclxuICAgIC8vIHdpZHRoOiAzMDBweDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMTAlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICByaWdodDogMHB4XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWJveCAubG9nbyB7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC50aXRsZSB7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgY29sb3I6ICMyMzFGMjA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA2cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdWItdGl0bGUge1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGNvbG9yOiAjMjMxRjIwO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgLy8gZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgXHJcbiAgLmZvcm0tYm94IC5vciB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzIzMUYyMDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLmZvcm0tYm94IC5mb3Jnb3QgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogI0VCMDAxQjtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWl0ZW17XHJcbiAgICAtLWhpZ2hsaWdodC1jb2xvci12YWxpZCA6IzQ1NmVmZSAhaW1wb3J0YW50OyBcclxuICB9XHJcbiAgXHJcbiAgLmZvb3Rlci1saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBjb2xvcjogIzIzMUYyMDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMjBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dvLWljb24ge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAuYmFjay1uYXYge1xyXG4gICAgcGFkZGluZzogMTlweCAwcHggMHB4IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJhY2stbmF2LWNvbG9yIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb290ZXItbGluayBhIHtcclxuICAgIGNvbG9yOiAjYmUyNjIzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuZm9vdGVyLWxpbmsgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogI2Y3OWUxYjtcclxuICB9XHJcbiAgXHJcbiAgLmZ1bGwtd2lkdGgge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfSIsInNlY3Rpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzLzNAM3gucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDQwJTtcbn1cblxuLml0ZW0tYm94LXdoaXRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNjBweCAwIDAgMDtcbiAgaGVpZ2h0OiA2MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvaW1hZ2VzLzNAM3gucG5nXCIpO1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmJnLWhvbWUtNiB7XG4gIGhlaWdodDogMTMycHg7XG4gIHdpZHRoOiAxODRweDtcbiAgcmlnaHQ6IDBweDtcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGNpcmNsZSBhdCAxMCUgMTMwJSwgcmdiYSgyMTQsIDIxNCwgMjE0LCAwLjIxMTc2NDcwNTkpIDY4JSwgdHJhbnNwYXJlbnQgNjcuNSUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMHB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG59XG5cbi5iZy1ib3R0b20taG9tZS02IHtcbiAgaGVpZ2h0OiAxMzJweDtcbiAgd2lkdGg6IDE4NHB4O1xuICBtYXJnaW4tbGVmdDogMHB4O1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDEwJSAxMzAlLCByZ2JhKDIxNCwgMjE0LCAyMTQsIDAuMjExNzY0NzA1OSkgNjglLCB0cmFuc3BhcmVudCA2Ny41JSk7XG4gIGZsb2F0OiBsZWZ0O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMHB4O1xufVxuXG4uZm9udHBhc3N3b3JkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uZm9yZ290LFxuYSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzQ1NkVGRSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubWwtMTAge1xuICBtYXJnaW4tbGVmdDogLTEwcHg7XG59XG5cbi5mb250cGFzc3dvcmQgaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogNDRweDtcbiAgY29sb3I6ICM0NTZFRkU7XG59XG5cbi5mb3JtLWJveCB7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTAlO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xufVxuXG4uZm9ybS1ib3ggLmxvZ28ge1xuICB3aWR0aDogMTMwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnRpdGxlIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgY29sb3I6ICMyMzFGMjA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBtYXJnaW4tYm90dG9tOiA2cHg7XG59XG5cbi5zdWItdGl0bGUge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBjb2xvcjogIzIzMUYyMDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5mb3JtLWJveCAub3Ige1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGNvbG9yOiAjMjMxRjIwO1xufVxuXG4uZm9ybS1ib3ggLmZvcmdvdCBhOmhvdmVyIHtcbiAgY29sb3I6ICNFQjAwMUI7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1oaWdobGlnaHQtY29sb3ItdmFsaWQ6IzQ1NmVmZSAhaW1wb3J0YW50O1xufVxuXG4uZm9vdGVyLWxpbmsge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGNvbG9yOiAjMjMxRjIwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiAyMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG59XG5cbi5sb2dvLWljb24ge1xuICBtYXJnaW46IDAgYXV0bztcbiAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gIHdpZHRoOiAxMzBweDtcbiAgaGVpZ2h0OiAxMzBweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLmJhY2stbmF2IHtcbiAgcGFkZGluZzogMTlweCAwcHggMHB4IDBweDtcbn1cblxuLmJhY2stbmF2LWNvbG9yIHtcbiAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbn1cblxuLmZvb3Rlci1saW5rIGEge1xuICBjb2xvcjogI2JlMjYyMztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb290ZXItbGluayBhOmhvdmVyIHtcbiAgY29sb3I6ICNmNzllMWI7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";

/***/ }),

/***/ 15736:
/*!****************************************************************************!*\
  !*** ./src/app/pages/mpinotpvalidate/mpinotpvalidate.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <section>\r\n    <div class=\"back-nav\">\r\n      <ion-button fill=\"clear\" (click)=\"back()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" class=\"back-nav-color\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n\r\n    <div class=\"logo-icon\">\r\n      <div class=\"logo\"><img src=\"/assets/images/logo.svg\" class=\"w-100\"></div>\r\n    </div>\r\n  </section>\r\n  <div class=\"item-box-white\">\r\n    <div class=\"form-box\">\r\n      <div class=\"title\">Validate OTP to set mpin</div>\r\n      <p class=\"sub-title\">Enter your details to get started</p>\r\n\r\n      <form [formGroup]=\"loginForm\">\r\n\r\n        <ion-item fill=\"outline\">\r\n          <ion-label position=\"floating\">Phone Number</ion-label>\r\n          <ion-input type=\"text\" class=\"form-control\" id=\"phonenumber\" placeholder=\"Phone Number\" name=\"Username\"\r\n            formControlName=\"phoneNo\" (keyup)=\"_keyPress($event)\" placeholder=\"Phone Number\" autocomplete=\"off\"\r\n            maxLength=\"10\"></ion-input>\r\n        </ion-item>\r\n\r\n        <!-- <ion-item lines=\"none\" class=\"my-2\">\r\n          <ion-checkbox slot=\"start\" class=\"ml-10\" formControlName=\"isOtp\"></ion-checkbox>\r\n          <ion-label>Sign in using OTP</ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item fill=\"outline\" *ngIf=\"loginForm.get('isOtp').value == false\">\r\n          <ion-label position=\"floating\">Password</ion-label>\r\n          <ion-input type=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Password\" name=\"Password\"\r\n            [type]=\"showPassword ? 'text' : 'password'\" formControlName=\"password\"></ion-input>\r\n        </ion-item> -->\r\n\r\n\r\n<!-- \r\n        <div class=\"forgot\">\r\n          <a class=\"text-right\" (click)=\"forgotPassword()\">Forgot password ?</a>\r\n        </div> -->\r\n\r\n      </form>\r\n\r\n      <div class=\"my-5\">\r\n        <ng-container *ngIf=\"isLoading; else showLoading\">\r\n          <ion-button expand=\"full\" shape=\"round\" class=\"my-5\">\r\n            <ion-spinner name=\"circles\"></ion-spinner>\r\n          </ion-button>\r\n        </ng-container>\r\n        <ng-template #showLoading>\r\n          <ion-button expand=\"full\" shape=\"round\" class=\"my-5\" (click)=\"continue(loginForm.value)\">CONTINUE\r\n          </ion-button>\r\n        </ng-template>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_mpinotpvalidate_mpinotpvalidate_module_ts.js.map