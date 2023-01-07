"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_login_login_page_ts"],{

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage),
/* harmony export */   "otpModel": () => (/* binding */ otpModel),
/* harmony export */   "verifyotpModel": () => (/* binding */ verifyotpModel)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 96752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 98433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 92218);
/* harmony import */ var src_app_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/finger-print-capture.service */ 26009);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);











class otpModel {
}
class verifyotpModel {
}
let LoginPage = class LoginPage {
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
        this.oTpModel = new otpModel();
        this.verifyOtpModel = new verifyotpModel();
        this.userResp = false;
        this.showPassword = false;
        this.userPasswordUpdate = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        this.showPasswordFeild = true;
        this.isLoading = false;
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            phoneNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            isOtp: [false],
            otp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
        });
    }
    onPasswordToggle(showType) {
        if (showType === 'new') {
            this.showPassword = !this.showPassword;
        }
    }
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
                                console.log("First Time Login customer");
                                localStorage.setItem('firstTimeLogin', this.otpResponse.icust.firstTimeLogin);
                                localStorage.setItem('customerPhonenum', this.customerPhonenum);
                                this.showPasswordFeild = false;
                                // this.api.sendOtp(this.otpResponse['otpVal'].token);
                                this.router.navigate(['change-password']);
                            }
                            else {
                                localStorage.setItem('firstTimeLogin', 'N');
                                localStorage.setItem('customerPhonenum', this.customerPhonenum);
                                if (!this.showPasswordFeild &&
                                    this.otpResponse.icust.firstTimeLogin == 'N') {
                                    this.openToast('Enter Password');
                                }
                                this.api.sendOtp(this.otpResponse['otpVal'].token);
                                const navigationExtras = {
                                    queryParams: {
                                        // 'screenDetails': 'mPIN Password Changed!',
                                        // 'screenDescription':'Your mPIN password has been changed successfully',
                                        'screenName': 'login'
                                    },
                                };
                                this.api.sendNavParam(navigationExtras);
                                this.router.navigateByUrl('/otp');
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
        if (!this.loginForm.get('isOtp').value) {
            if (!loginForm.phoneNo) {
                this.openToast('Phone number is required!');
                return;
            }
            if (!loginForm.password) {
                this.openToast('Password is required!');
                return;
            }
            this.isLoading = true;
            this.api
                .validatePassword(loginForm.phoneNo, loginForm.password)
                .subscribe((data) => {
                console.log('validate password-- ', data);
                if (data) {
                    if (data.hasOwnProperty('message')) {
                        if (data.message.toString().includes('Wrong Password')) {
                            this.openToast('Wrong Password');
                            this.isLoading = false;
                        }
                        else {
                            this.api
                                .custpomerDetails(loginForm.phoneNo)
                                .subscribe((resp) => {
                                //where u need to add?
                                if (resp != null) {
                                    if (resp.custStatus === 'APPROVED') {
                                        resp.custAccount = resp.custAccount.filter((card) => card.status === 'APPROVED');
                                        const cards = JSON.stringify(resp.custAccount);
                                        localStorage.setItem('cardData', cards);
                                        localStorage.setItem('customerPhonenum', loginForm.phoneNo);
                                        sessionStorage.setItem('customer_id', resp.customerId);
                                        localStorage.setItem('firstName', resp === null || resp === void 0 ? void 0 : resp.firstName);
                                        localStorage.setItem('lastName', resp === null || resp === void 0 ? void 0 : resp.lastName);
                                        localStorage.setItem('customer_id', resp.customerId);
                                        localStorage.setItem('customer_details', JSON.stringify(resp));
                                        this.openToast('Login Successful');
                                        this.router.navigate(['dashboard']);
                                        this.isLoading = false;
                                    }
                                    else {
                                        this.openToast('Customer Id or Account Status is not approved');
                                        this.isLoading = false;
                                    }
                                }
                            });
                        }
                    }
                }
                else {
                    this.openToast('Invalid login credential');
                    this.isLoading = false;
                }
            }, (error) => {
                console.log('Error :: ', error);
                this.isLoading = false;
            });
        }
        else if (!this.showPasswordFeild && localStorage.getItem('firstTimeLogin') === 'Y') {
            this.router.navigate(['change-password']);
        }
        else {
            this.getOtp(loginForm);
            // this.router.navigate(['otp']);
        }
    }
    openToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
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
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__.Location },
    { type: src_app_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_3__.FingerPrintCaptureService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 26009:
/*!**********************************************************!*\
  !*** ./src/app/services/finger-print-capture.service.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": () => (/* binding */ API_URL),
/* harmony export */   "FingerPrintCaptureService": () => (/* binding */ FingerPrintCaptureService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 28784);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 84505);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88759);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 92340);







const API_URL = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.BASE_URL;
let FingerPrintCaptureService = class FingerPrintCaptureService {
    constructor(http, toastCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
        this.getJSON_rd = function (url, callback) {
            var xhr = new XMLHttpRequest();
            xhr.open('RDSERVICE', url, true);
            xhr.responseType = 'text';
            xhr.onload = function () {
                var status = xhr.status;
                if (status == 200) {
                    callback(null, xhr.response);
                }
                else {
                    callback(status);
                }
            };
            xhr.send();
        };
    }
    userDataService(data) {
        this.userData.next(data);
    }
    /* NOTE:
    biometric call type: webapi
    lisence: used 60 free trail version
    desc: currently using this service for finger print capturing
     */
    CallingSGIFPGetData() {
        return this.http.get('http://localhost:8000/SGIFPCapture')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)((result) => {
            console.log('result-->', result);
            return result;
        }));
    }
    handleError(arg0, arg1) {
        throw new Error('Method not implemented.');
    }
    /* NOTE:
    biometric call type: registered device service
    lisence: paid
    desc: currently not using this service
     */
    rdservice() {
        var port;
        var urlStr = '';
        urlStr = 'http://localhost:11100/';
        this.getJSON_rd(urlStr, function (err, data) {
            if (err != null) {
                alert('Something went wrong: ' + err);
            }
            else {
                alert('Response:-' + String(data));
            }
        });
    }
    saveBiometric(capFingerPrint, fingerName, cId, screen) {
        return this.http.post(`${API_URL}/rest/upload/saveOrUpdateBio/${fingerName}/${cId}/${screen}`, capFingerPrint);
    }
    errorCodeService(errorCode) {
        var error = '';
        if (errorCode == 1) {
            error = 'Creation failed : A driver is missing/not correctly configured';
        }
        if (errorCode == 3) {
            error = 'Please check again. Either driver is corrupted or Device is not connected';
        }
        if (errorCode == 2) {
            error = 'Function failed ';
        }
        if (errorCode == 51) {
            error = 'System file load failure';
        }
        if (errorCode == 52) {
            error = 'Sensor chip initialization failed';
        }
        if (errorCode == 53) {
            error = 'Sensor line dropped';
        }
        if (errorCode == 54) {
            error = 'Timeout/Failed to scan. Clean your fingers and try again';
        }
        if (errorCode == 103 || errorCode == 104 || errorCode == 106) {
            error = 'Match failed , try again';
        }
        console.log('error :: ', error);
        this.openToast(`${error}`);
    }
    getCustInfoByFp(page, size, fingerIndex) {
        var params;
        console.log(`fingerIndex ${fingerIndex} and page ${page}`);
        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams().append('fingerIndex', fingerIndex); //.append('page', page);
        return this.http.get(`${API_URL}/rest/upload/getCustomerDataByFp?${params}`);
    }
    getCustInfoByCustomerId(customerId) {
        var params;
        console.log(`customerId ${customerId}`);
        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams().append('customerId', customerId);
        return this.http.get(`${API_URL}/rest/upload/getCustomerDataByFp?${params}`);
    }
    /* To-Do: https api capture */
    CallingSGIFPCapture() {
        console.log(" in service ");
        return this.http.get('https://localhost:8443/SGIFPCapture')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)((result) => {
            console.log('result-->', result);
            return result;
        }));
    }
    /* To-Do: https api capture */
    CallingSGIFPMatch(templeData1, templeData2) {
        var secuLicc = "ae7VmpMA9ZwEGVYVr1LMWrqjCEx+eFmya9VX0v+vNfQ=";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams()
            .append('template1', templeData1)
            .append('template2', templeData2);
        //  .append('licstr',secuLicc);
        //  .append('licstr',secuLicc);
        // http://localhost:8000/SGIMatchScore
        return this.http.post(`https://localhost:8443/SGIMatchScore`, params)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)((result) => {
            // console.log('result-->', result)
            return result;
        }));
    }
    openToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: `${message}`,
                duration: 5000,
                position: 'middle'
            });
            toast.present();
        });
    }
};
FingerPrintCaptureService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ToastController }
];
FingerPrintCaptureService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
    })
], FingerPrintCaptureService);



/***/ }),

/***/ 98433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "section {\n  position: relative;\n  background: url('3@3x.png');\n  background-repeat: round;\n  color: #fff;\n  height: 40%;\n}\n\n.item-box-white {\n  width: 100%;\n  height: 100%;\n  background: #ffffff;\n  border-radius: 60px 0 0 0;\n  height: 60%;\n  position: absolute;\n}\n\nion-toolbar {\n  --background: url('3@3x.png');\n  --color: white;\n}\n\n.bg-home-6 {\n  height: 132px;\n  width: 184px;\n  right: 0px;\n  background: radial-gradient(circle at 10% 130%, rgba(214, 214, 214, 0.2117647059) 68%, transparent 67.5%);\n  position: absolute;\n  top: 0px;\n  transform: rotate(180deg);\n}\n\n.bg-bottom-home-6 {\n  height: 132px;\n  width: 184px;\n  margin-left: 0px;\n  background: radial-gradient(circle at 10% 130%, rgba(214, 214, 214, 0.2117647059) 68%, transparent 67.5%);\n  float: left;\n  position: absolute;\n  bottom: 0px;\n}\n\n.fontpassword {\n  position: relative;\n}\n\n.forgot,\na {\n  text-align: center;\n  font-size: 14px;\n  color: #456EFE !important;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n}\n\n.ml-10 {\n  margin-left: -10px;\n  font-size: 13px;\n  opacity: 67%;\n}\n\n.fontpassword i {\n  position: absolute;\n  right: 15px;\n  top: 44px;\n  color: #456EFE;\n}\n\n.form-box {\n  padding: 25px;\n  height: 250px;\n  position: relative;\n  top: -10%;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n\n.form-box .logo {\n  width: 130px;\n  margin: auto;\n}\n\n.title {\n  vertical-align: top;\n  color: #231F20;\n  font-size: 24px;\n  font-weight: bold;\n  font-family: \"Montserrat\" !important;\n  position: relative;\n  text-align: left;\n  margin-top: 15px;\n  margin-bottom: 6px;\n}\n\n.sub-title {\n  vertical-align: top;\n  color: #000000 !important;\n  font-size: 14px;\n  font-family: \"Montserrat\" !important;\n  opacity: 83%;\n  position: relative;\n  text-align: left;\n  margin-top: 10px;\n  margin-bottom: 20px;\n}\n\n.form-box .or {\n  text-align: center;\n  margin-top: 20px;\n  margin-bottom: 15px;\n  font-weight: 600;\n  color: #231F20;\n}\n\n.form-box .forgot a:hover {\n  color: #EB001B;\n}\n\nion-item {\n  --highlight-color-valid:#456efe !important;\n}\n\n.footer-link {\n  font-size: 14px;\n  font-weight: 400;\n  color: #231F20;\n  text-align: center;\n  position: fixed;\n  bottom: 20px;\n  left: 0px;\n  right: 0px;\n}\n\n.logo-icon {\n  margin: 0 auto;\n  text-align: start;\n  width: 175px;\n  height: 45px;\n  margin-top: 60px;\n  opacity: 100%;\n}\n\n.back-nav {\n  padding: 19px 0px 0px 0px;\n}\n\n.back-nav-color {\n  color: #000000 !important;\n}\n\n.footer-link a {\n  color: #be2623;\n  cursor: pointer;\n  text-decoration: none;\n}\n\n.footer-link a:hover {\n  color: #f79e1b;\n}\n\n.full-width {\n  width: 100%;\n}\n\n.pass_field {\n  position: relative;\n}\n\n.pass_field ion-icon {\n  color: #456EFE;\n  position: absolute;\n  top: 50%;\n  right: 4%;\n  transform: translateY(-50%);\n  z-index: 2;\n}\n\n.continue_btn {\n  margin-top: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdEh1YiUyMFJlcG9zaXRvcnklMjBvbGRcXGlDdXN0TW9iaWxlLXYyXFxzcmNcXGFwcFxccGFnZXNcXGxvZ2luXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSw2QkFBQTtFQUNBLGNBQUE7QUNDRjs7QURHQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHlHQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBS0EseUJBQUE7QUNBRjs7QURHQTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5R0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNBRjs7QURLQTtFQUNFLGtCQUFBO0FDRkY7O0FES0E7O0VBRUUsa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0ZGOztBREtBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7QUNGRjs7QURLQTtFQUVFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDSEY7O0FETUE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ0hGOztBRE1BO0VBQ0UsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFFQSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ0pGOztBRFNBO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FDTkY7O0FEVUE7RUFDRSxjQUFBO0FDUEY7O0FEVUE7RUFDRSwwQ0FBQTtBQ1BGOztBRFVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQ1BGOztBRFVBO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7QUNQRjs7QURVQTtFQUNFLHlCQUFBO0FDUEY7O0FEVUE7RUFDRSx5QkFBQTtBQ1BGOztBRFVBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQ1BGOztBRFVBO0VBQ0UsY0FBQTtBQ1BGOztBRFVBO0VBQ0UsV0FBQTtBQ1BGOztBRFVBO0VBQ0Usa0JBQUE7QUNQRjs7QURRRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsMkJBQUE7RUFDQSxVQUFBO0FDTko7O0FEU0E7RUFDRSxlQUFBO0FDTkYiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy8zQDN4LnBuZycpO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBoZWlnaHQ6IDQwJTtcclxufVxyXG5cclxuLml0ZW0tYm94LXdoaXRlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICBib3JkZXItcmFkaXVzOiA2MHB4IDAgMCAwO1xyXG4gIGhlaWdodDogNjAlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzLzNAM3gucG5nJyk7XHJcbiAgLS1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4uYmctaG9tZS02IHtcclxuICBoZWlnaHQ6IDEzMnB4O1xyXG4gIHdpZHRoOiAxODRweDtcclxuICByaWdodDogMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTAlIDEzMCUsICNkNmQ2ZDYzNiA2OCUsIHRyYW5zcGFyZW50IDY3LjUlKTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbn1cclxuXHJcbi5iZy1ib3R0b20taG9tZS02IHtcclxuICBoZWlnaHQ6IDEzMnB4O1xyXG4gIHdpZHRoOiAxODRweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTAlIDEzMCUsICNkNmQ2ZDYzNiA2OCUsIHRyYW5zcGFyZW50IDY3LjUlKTtcclxuICBmbG9hdDogbGVmdDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcblxyXG5cclxuLmZvbnRwYXNzd29yZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uZm9yZ290LFxyXG5hIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjNDU2RUZFICFpbXBvcnRhbnQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5tbC0xMCB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBvcGFjaXR5OiA2NyU7XHJcbn1cclxuXHJcbi5mb250cGFzc3dvcmQgaSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxNXB4O1xyXG4gIHRvcDogNDRweDtcclxuICBjb2xvcjogIzQ1NkVGRTtcclxufVxyXG5cclxuLmZvcm0tYm94IHtcclxuICAvLyB3aWR0aDogMzAwcHg7XHJcbiAgcGFkZGluZzogMjVweDtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IC0xMCU7XHJcbiAgYm90dG9tOiAwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHJpZ2h0OiAwcHhcclxufVxyXG5cclxuLmZvcm0tYm94IC5sb2dvIHtcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgY29sb3I6ICMyMzFGMjA7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNnB4O1xyXG59XHJcblxyXG4uc3ViLXRpdGxlIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIC8vIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogODMlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuXHJcblxyXG4uZm9ybS1ib3ggLm9yIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgY29sb3I6ICMyMzFGMjA7XHJcbn1cclxuXHJcblxyXG4uZm9ybS1ib3ggLmZvcmdvdCBhOmhvdmVyIHtcclxuICBjb2xvcjogI0VCMDAxQjtcclxufVxyXG5cclxuaW9uLWl0ZW17XHJcbiAgLS1oaWdobGlnaHQtY29sb3ItdmFsaWQgOiM0NTZlZmUgIWltcG9ydGFudDsgXHJcbn1cclxuXHJcbi5mb290ZXItbGluayB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgY29sb3I6ICMyMzFGMjA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDIwcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5sb2dvLWljb24ge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIHdpZHRoOiAxNzVweDtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICBvcGFjaXR5OiAxMDAlO1xyXG59XHJcblxyXG4uYmFjay1uYXYge1xyXG4gIHBhZGRpbmc6IDE5cHggMHB4IDBweCAwcHg7XHJcbn1cclxuXHJcbi5iYWNrLW5hdi1jb2xvciB7XHJcbiAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZvb3Rlci1saW5rIGEge1xyXG4gIGNvbG9yOiAjYmUyNjIzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi5mb290ZXItbGluayBhOmhvdmVyIHtcclxuICBjb2xvcjogI2Y3OWUxYjtcclxufVxyXG5cclxuLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ucGFzc19maWVsZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGlvbi1pY29uIHtcclxuICAgIGNvbG9yOiAjNDU2RUZFO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICByaWdodDogNCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxufVxyXG4uY29udGludWVfYnRuIHtcclxuICBtYXJnaW4tdG9wOiAyNSU7XHJcbn0iLCJzZWN0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvaW1hZ2VzLzNAM3gucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcm91bmQ7XG4gIGNvbG9yOiAjZmZmO1xuICBoZWlnaHQ6IDQwJTtcbn1cblxuLml0ZW0tYm94LXdoaXRlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLXJhZGl1czogNjBweCAwIDAgMDtcbiAgaGVpZ2h0OiA2MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvM0AzeC5wbmdcIik7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4uYmctaG9tZS02IHtcbiAgaGVpZ2h0OiAxMzJweDtcbiAgd2lkdGg6IDE4NHB4O1xuICByaWdodDogMHB4O1xuICBiYWNrZ3JvdW5kOiByYWRpYWwtZ3JhZGllbnQoY2lyY2xlIGF0IDEwJSAxMzAlLCByZ2JhKDIxNCwgMjE0LCAyMTQsIDAuMjExNzY0NzA1OSkgNjglLCB0cmFuc3BhcmVudCA2Ny41JSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbn1cblxuLmJnLWJvdHRvbS1ob21lLTYge1xuICBoZWlnaHQ6IDEzMnB4O1xuICB3aWR0aDogMTg0cHg7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG4gIGJhY2tncm91bmQ6IHJhZGlhbC1ncmFkaWVudChjaXJjbGUgYXQgMTAlIDEzMCUsIHJnYmEoMjE0LCAyMTQsIDIxNCwgMC4yMTE3NjQ3MDU5KSA2OCUsIHRyYW5zcGFyZW50IDY3LjUlKTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwcHg7XG59XG5cbi5mb250cGFzc3dvcmQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5mb3Jnb3QsXG5hIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjNDU2RUZFICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5tbC0xMCB7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBvcGFjaXR5OiA2NyU7XG59XG5cbi5mb250cGFzc3dvcmQgaSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1cHg7XG4gIHRvcDogNDRweDtcbiAgY29sb3I6ICM0NTZFRkU7XG59XG5cbi5mb3JtLWJveCB7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGhlaWdodDogMjUwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTAlO1xuICBib3R0b206IDBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xufVxuXG4uZm9ybS1ib3ggLmxvZ28ge1xuICB3aWR0aDogMTMwcHg7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLnRpdGxlIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgY29sb3I6ICMyMzFGMjA7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIG1hcmdpbi1ib3R0b206IDZweDtcbn1cblxuLnN1Yi10aXRsZSB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDgzJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uZm9ybS1ib3ggLm9yIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBjb2xvcjogIzIzMUYyMDtcbn1cblxuLmZvcm0tYm94IC5mb3Jnb3QgYTpob3ZlciB7XG4gIGNvbG9yOiAjRUIwMDFCO1xufVxuXG5pb24taXRlbSB7XG4gIC0taGlnaGxpZ2h0LWNvbG9yLXZhbGlkOiM0NTZlZmUgIWltcG9ydGFudDtcbn1cblxuLmZvb3Rlci1saW5rIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBjb2xvcjogIzIzMUYyMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGJvdHRvbTogMjBweDtcbiAgbGVmdDogMHB4O1xuICByaWdodDogMHB4O1xufVxuXG4ubG9nby1pY29uIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICB3aWR0aDogMTc1cHg7XG4gIGhlaWdodDogNDVweDtcbiAgbWFyZ2luLXRvcDogNjBweDtcbiAgb3BhY2l0eTogMTAwJTtcbn1cblxuLmJhY2stbmF2IHtcbiAgcGFkZGluZzogMTlweCAwcHggMHB4IDBweDtcbn1cblxuLmJhY2stbmF2LWNvbG9yIHtcbiAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcbn1cblxuLmZvb3Rlci1saW5rIGEge1xuICBjb2xvcjogI2JlMjYyMztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb290ZXItbGluayBhOmhvdmVyIHtcbiAgY29sb3I6ICNmNzllMWI7XG59XG5cbi5mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5wYXNzX2ZpZWxkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnBhc3NfZmllbGQgaW9uLWljb24ge1xuICBjb2xvcjogIzQ1NkVGRTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgcmlnaHQ6IDQlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIHotaW5kZXg6IDI7XG59XG5cbi5jb250aW51ZV9idG4ge1xuICBtYXJnaW4tdG9wOiAyNSU7XG59Il19 */";

/***/ }),

/***/ 96752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <section>\r\n    <div class=\"back-nav\">\r\n      <ion-button fill=\"clear\" (click)=\"back()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" class=\"back-nav-color\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n\r\n    <div class=\"logo-icon\">\r\n      <div class=\"logo\"><img src=\"assets/images/Demobank.svg\" class=\"w-100\"></div>\r\n    </div>\r\n  </section>\r\n  <div class=\"item-box-white\">\r\n    <div class=\"form-box\">\r\n      <div class=\"title\">Sign In</div>\r\n      <p class=\"sub-title\">Enter your details to get started</p>\r\n\r\n      <form [formGroup]=\"loginForm\">\r\n\r\n        <ion-item fill=\"outline\">\r\n          <ion-label position=\"floating\">Phone Number</ion-label>\r\n          <ion-input type=\"text\" class=\"form-control\" id=\"phonenumber\" placeholder=\"Phone Number\" name=\"Username\"\r\n            formControlName=\"phoneNo\" (keyup)=\"_keyPress($event)\" placeholder=\"Phone Number\" autocomplete=\"off\"\r\n            maxLength=\"10\"></ion-input>\r\n        </ion-item>\r\n\r\n        <ion-item lines=\"none\" class=\"my-2\">\r\n          <ion-checkbox slot=\"start\" class=\"ml-10\" formControlName=\"isOtp\"></ion-checkbox>\r\n          <ion-label>Sign in using OTP</ion-label>\r\n        </ion-item>\r\n\r\n        <ion-item fill=\"outline\" class=\"pass_field\" *ngIf=\"loginForm.get('isOtp').value == false\">\r\n          <ion-label position=\"floating\">Password</ion-label>\r\n          <ion-input [type]=\"hide ? 'password' : 'text'\" class=\"form-control\" id=\"password\" placeholder=\"Enter Password\" name=\"Password\"\r\n          [type]=\"showPassword ? 'text' : 'password'\" formControlName=\"password\"></ion-input>\r\n          <!-- <ion-icon name=\"eye-outline\"></ion-icon> -->\r\n          <ion-icon (click)=\"hide = !hide\" *ngIf=\"hide\" name=\"eye-off-outline\"></ion-icon>\r\n          <ion-icon (click)=\"hide = !hide\" *ngIf=\"!hide\" name=\"eye-outline\"></ion-icon>\r\n\r\n        </ion-item>\r\n\r\n\r\n\r\n        <div class=\"forgot\">\r\n          <a class=\"text-right\" (click)=\"forgotPassword()\">Forgot password ?</a>\r\n        </div>\r\n\r\n      </form>\r\n\r\n      <div class=\"continue_btn\">\r\n        <ng-container *ngIf=\"isLoading; else showLoading\">\r\n          <ion-button expand=\"full\" shape=\"round\" class=\"my-5\">\r\n            <ion-spinner name=\"circles\"></ion-spinner>\r\n          </ion-button>\r\n        </ng-container>\r\n        <ng-template #showLoading>\r\n          <ion-button expand=\"full\" shape=\"round\" class=\"my-5\" (click)=\"continue(loginForm.value)\">CONTINUE\r\n          </ion-button>\r\n        </ng-template>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_login_login_page_ts.js.map