(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-login-login-module~views-otp-otp-module"],{

/***/ "6Gs0":
/*!*********************************************!*\
  !*** ./src/app/views/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 30%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.maincard {\n  background-color: white;\n}\n\n.box {\n  border-color: #403E39;\n  border-width: thin;\n  border-style: solid;\n  border-radius: 10px;\n  width: 85%;\n  height: 45px;\n}\n\n.inputCard {\n  padding-top: 3%;\n  padding-left: 10%;\n}\n\n.inputCardButton {\n  padding-top: 16%;\n  padding-left: 10%;\n}\n\n.titleCard {\n  padding-left: 5%;\n}\n\n.login-logo {\n  padding: 20px;\n  min-height: 90px;\n  text-align: center;\n}\n\n.login-logo img {\n  max-width: 120px;\n  margin-top: -9%;\n}\n\n.fieldCard {\n  padding-top: 50%;\n  padding-left: 5%;\n}\n\n.subtitle {\n  padding-left: 5%;\n}\n\n.top-right-quarter-circle {\n  width: 300px;\n  height: 290px;\n  margin-top: -20%;\n  margin-left: 60%;\n  border-radius: 250px 0 250px 250px;\n  background-color: #d8d8d8;\n}\n\n.top-left-quarter-circle {\n  width: 200px;\n  height: 160px;\n  margin-top: -20%;\n  border-radius: 0 300px 0 0;\n  background-color: #d8d8d8;\n}\n\nion-button {\n  width: 85%;\n  height: 45px;\n}\n\n.fingerPrint {\n  width: 100px;\n  height: 100px;\n  display: block;\n  color: #1F618D;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUVELGtCQUFBO0VBQ0MsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFESjs7QUFJRTtFQUNFLHFCQUFBO0FBREo7O0FBR0U7RUFDQyx1QkFBQTtBQUFIOztBQUdFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0U7RUFFSSxnQkFBQTtBQUNOOztBQUNFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNFO0VBQ0UsZ0JBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0QsZ0JBQUE7RUFDQSxnQkFBQTtFQUVDLGtDQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFDRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFFQSwwQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUVKOztBQUFBO0VBTUUsWUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBRUEsY0FBQTtFQUNBLFlBQUE7QUFIRiIsImZpbGUiOiJsb2dpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBcclxuICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgfVxyXG4gICNjb250YWluZXIgc3Ryb25nIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIHAge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgXHJcbiAgICBjb2xvcjogIzhjOGM4YztcclxuICBcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgXHJcbiAgI2NvbnRhaW5lciBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgLm1haW5jYXJke1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmJveCB7XHJcbiAgICBib3JkZXItY29sb3I6ICM0MDNFMzk7XHJcbiAgICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgIFxyXG4gIH1cclxuICAuaW5wdXRDYXJke1xyXG4gICAgcGFkZGluZy10b3A6IDMlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgfVxyXG4gIC5pbnB1dENhcmRCdXR0b257XHJcbiAgICBwYWRkaW5nLXRvcDogMTYlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMCU7XHJcbiAgfVxyXG4gIC50aXRsZUNhcmRcclxuICB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgfVxyXG4gIC5sb2dpbi1sb2dvIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA5MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAubG9naW4tbG9nbyBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC05JTtcclxuICB9XHJcbiAgXHJcbiAgLmZpZWxkQ2FyZHtcclxuICAgIHBhZGRpbmctdG9wOiA1MCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIH1cclxuXHJcbiAgLnN1YnRpdGxle1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICB9XHJcbiBcclxuLnRvcC1yaWdodC1xdWFydGVyLWNpcmNsZSB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDI5MHB4O1xyXG4gICBtYXJnaW4tdG9wOiAtMjAlO1xyXG4gICBtYXJnaW4tbGVmdDogNjAlO1xyXG4gICBcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1MHB4IDAgMjUwcHggMjUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAyMTYsIDIxNik7XHJcbiAgfVxyXG4gIC50b3AtbGVmdC1xdWFydGVyLWNpcmNsZSB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTIwJTtcclxuICAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMCAzMDBweCAwIDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE2LCAyMTYsIDIxNik7XHJcbiAgfVxyXG4gIGlvbi1idXR0b257XHJcbiAgICB3aWR0aDogODUlO1xyXG4gICAgaGVpZ2h0OiA0NXB4O1xyXG59XHJcbi5maW5nZXJQcmludHtcclxuICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgLy8gdG9wOiAxMTAlO1xyXG4gIC8vIGxlZnQ6IDUwJTtcclxuICAvLyBoZWlnaHQ6IDUwJTtcclxuICAvLyB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICAvLyBiYWNrZ3JvdW5kOiAxRjYxOEQ7XHJcbiAgY29sb3I6IzFGNjE4RDtcclxuICBtYXJnaW46YXV0bztcclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "Klcu":
/*!*******************************************!*\
  !*** ./src/app/views/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: otpModel, verifyotpModel, LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "otpModel", function() { return otpModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "verifyotpModel", function() { return verifyotpModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.page.html */ "Q39c");
/* harmony import */ var _login_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss */ "6Gs0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var src_app_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/finger-print-capture.service */ "U6Oz");









class otpModel {
}
class verifyotpModel {
}
let LoginPage = class LoginPage {
    constructor(router, cdk, fb, api, fpCaptureService, toastCtrl) {
        this.router = router;
        this.cdk = cdk;
        this.fb = fb;
        this.api = api;
        this.fpCaptureService = fpCaptureService;
        this.toastCtrl = toastCtrl;
        this.otpValue = null;
        this.otpValid = false;
        this.oTpModel = new otpModel();
        this.verifyOtpModel = new verifyotpModel();
        this.userResp = false;
    }
    ngOnInit() {
        this.loginForm = this.fb.group({
            phoneNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            otp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
        console.log(this.loginForm.value.otp);
        console.log('login :: ', this.loginForm.value);
    }
    _keyPress(event) {
        // console.log("key",event);
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    getOtp(phone) {
        console.log("Phonenumber for OTP", phone.phoneNo);
        this.customerPhonenum = phone.phoneNo;
        console.log(this.customerPhonenum);
        localStorage.setItem("PhoneNumLogin", this.customerPhonenum);
        if (this.customerPhonenum == '')
            this.openToast('Please enter the registered Mobile Number');
        // localStorage.setItem("PhoneNumLogin", this.customerPhonenum);
        this.oTpModel.source = 'customer';
        this.oTpModel.source_key = 'mobile';
        this.oTpModel.source_value = phone.phoneNo;
        console.log("model", this.oTpModel);
        if (this.oTpModel.source_value != '') {
            this.api.getOtp(this.oTpModel).subscribe(otpResp => {
                console.log('response :: ', otpResp);
                if (Object.keys(otpResp).length === 0) {
                    this.openToast('No data found for Phone No. :' + phone.phoneNo);
                }
                else {
                    var custStatus = '';
                    if (otpResp.hasOwnProperty("icust")) {
                        if (otpResp.icust.custStatus.toString().includes('APPROVED')) {
                            custStatus = otpResp.icust.custStatus;
                        }
                    }
                    if (otpResp.hasOwnProperty("otpVal")) {
                        if (otpResp.otpVal.status.toString().includes('APPROVED')) {
                            custStatus = otpResp.otpVal.status;
                        }
                    }
                    if (!custStatus.toString().includes('APPROVED')) {
                        this.openToast('Customer Id or Account Status is not approved');
                    }
                    else {
                        console.log("Response Success", otpResp);
                        this.otpResponse = otpResp;
                        /* Added validation for un-registered mobile nummber is entered */
                        if (this.otpResponse.otpVal.userId === "New Customer" || (this.otpResponse.otpVal.userId === '' && this.otpResponse.otpVal.userId === null)) {
                            this.cdk.detectChanges();
                            this.userResp = true;
                            this.openToast('Please enter the registered Mobile Number');
                        }
                        else {
                            console.log('first time login :: ', this.otpResponse.icust.firstTimeLogin);
                            if (this.otpResponse.icust.firstTimeLogin === 'Y') {
                                localStorage.setItem('firstTimeLogin', this.otpResponse.icust.firstTimeLogin);
                                localStorage.setItem('customerPhonenum', this.customerPhonenum);
                                this.router.navigate(['change-password']);
                                this.api.sendOtp(this.otpResponse['otpVal'].token);
                            }
                            else {
                                localStorage.setItem('firstTimeLogin', 'N');
                                localStorage.setItem('customerPhonenum', this.customerPhonenum);
                                this.api.sendOtp(this.otpResponse['otpVal'].token);
                                this.router.navigateByUrl('/otp');
                            }
                        }
                    }
                }
            });
        }
        // this.router.navigateByUrl('/otp');
    }
    validateOtp(otpValue) {
        console.log("OTP validaion", otpValue);
        console.log("Phonenumber for OTP", otpValue, this.loginForm.value.otp);
        this.verifyOtpModel.sourceKey = 'mobile';
        this.verifyOtpModel.sourceValue = '9059029994';
        this.verifyOtpModel.otp = otpValue.otpNumber;
        this.verifyOtpModel.type = '';
        console.log("model", this.verifyOtpModel);
        this.api.verifyOtp(this.verifyOtpModel).subscribe(otpResp => {
            console.log("Response Success", otpResp);
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
    goToCashWithdrawal(loginForm) {
        // console.log(loginForm.value.otp);
        console.log(loginForm.phoneNo);
        this.api.custpomerDetails(loginForm.phoneNo).subscribe((resp) => {
            console.log('backend resp', resp);
            if (resp != null) {
                sessionStorage.setItem('customer_id', resp.customerId);
                this.router.navigate(['tabs']);
            }
        });
        // this.router.navigate(['tabs']);
    }
    openToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: `${message}`,
                duration: 5000
            });
            toast.present();
        });
    }
    openDialog() {
        console.log("capture finger print");
        this.captureFingerPrintHttps();
    }
    /* @method : to capture the the finger print */
    captureFingerPrintHttps() {
        console.log("in component");
        this.fpCaptureService.CallingSGIFPCapture()
            .subscribe(capturedData => {
            console.log('capturedData:: ', capturedData);
            if (capturedData.ErrorCode == 0) {
                this.openToast(`Finding ,is registed customer`);
                this.getFpDataForMatchOnPageLoad(capturedData.TemplateBase64);
            }
            else {
                this.getError(capturedData.ErrorCode);
            }
        }, error => {
            this.openToast(`${error}`);
        });
    }
    getFpDataForMatchOnPageLoad(templateBase64) {
        console.log('TemplateBase64 :: ', templateBase64);
        this.fpCaptureService.getCustInfoByFp(0, 100, 4)
            .subscribe(resp => {
            console.log('resp:: ', resp);
            // this.totalItems=resp.totalItems;
            // this.totalPages=resp.totalPages;
            if ((resp.totalPages - 1) == 0) {
                Object.keys(resp.data).forEach(key => {
                    this.matchFpFromUi(templateBase64, resp.data[key]);
                });
            }
            else {
                for (let i = 0; i < resp.totalPages; i++) {
                    if (i == 0) {
                        Object.keys(resp.data).forEach(key => {
                            this.matchFpFromUi(templateBase64, resp.data[key]);
                        });
                    }
                    else {
                        // to-da: need to implement logic when more data is present
                        console.log("in fg cap else");
                    }
                }
            }
        });
    }
    matchFpFromUi(template1, data) {
        this.fpCaptureService.CallingSGIFPMatch(template1, data.fpTemplateBase64)
            .subscribe(fpResp => {
            console.log('fpResp : ', fpResp);
            if (fpResp.MatchingScore >= 100) {
                let custId = data.customerId;
                console.log("res", data);
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
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: src_app_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_8__["FingerPrintCaptureService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginPage);



/***/ }),

/***/ "Q39c":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <!-- <div class=\"float-right-lg\"> -->\r\n    <div class=\"top-right-quarter-circle\"></div>\r\n  <!-- </div> -->\r\n  \r\n \r\n    <form [formGroup]=\"loginForm\" style=\"height: 890px;\">\r\n      <div class=\"login-logo\">\r\n        <img src=\"assets\\images\\BL1.png\" alt=\"Ionic logo\">\r\n      </div>\r\n    <div style=\"padding-top: -60%;\">\r\n\r\n    \r\n      <div class=\"titleCard\">\r\n        <ion-text>\r\n          <h2 style=\"color:black\">Sign In</h2>\r\n          <h5 style=\"color: gray;\">Enter your details to get started</h5>\r\n        </ion-text>\r\n      </div>\r\n    \r\n    \r\n      <div class=\"inputCard\" >\r\n       <ion-label position=\"floating\">Mobile number</ion-label>\r\n        <ion-input class=\"box\" formControlName=\"phoneNo\" (keypress)=_keyPress($event) maxLength = \"10\"></ion-input>\r\n    </div>\r\n<!--     \r\n    <div class=\"inputCard\"  *ngIf=\"otpValid\" >\r\n      <ion-label position=\"floating\">OTP</ion-label>\r\n       <ion-input class=\"box\" formControlName=\"otp\"></ion-input>\r\n    </div> -->\r\n    \r\n    <div class=\"inputCardButton\">\r\n      <ion-button expand=\"block\" shape=\"round\" (click) =\"getOtp(loginForm.value)\"\r\n      >Continue</ion-button>\r\n      <!-- <span *ngIf=\"userResp\">\r\n        <small style=\"color: red;\">User Not Registered</small>\r\n      </span> -->\r\n      <!-- <ion-button expand=\"block\" shape=\"round\" (click) =\"validateOtp(loginForm.value.otp) ;goToCashWithdrawal(loginForm.value)\"\r\n      >Login</ion-button> -->\r\n      <!-- (click)=\"goToCashWithdrawal(loginForm.value)\" -->\r\n    </div>\r\n\r\n    <!-- <ion-item-divider style=\"border-bottom: 5px solid #1F618D;\">\r\n      <ion-label>\r\n        or scan finger\r\n      </ion-label>\r\n    </ion-item-divider> -->\r\n    \r\n    <div class=\"ion-padding-top\">\r\n      <ion-icon name=\"finger-print\" class=\"fingerPrint\" \r\n      (click)=\"openDialog()\"></ion-icon>\r\n    </div>\r\n  </div>\r\n    </form> <div class=\"top-left-quarter-circle\"></div>\r\n  </ion-content>\r\n");

/***/ }),

/***/ "U6Oz":
/*!**********************************************************!*\
  !*** ./src/app/services/finger-print-capture.service.ts ***!
  \**********************************************************/
/*! exports provided: API_URL, FingerPrintCaptureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FingerPrintCaptureService", function() { return FingerPrintCaptureService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_config_app_constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/config/app.constant */ "7KtZ");







const API_URL = src_config_app_constant__WEBPACK_IMPORTED_MODULE_6__["AppConstants"].baseURL;
let FingerPrintCaptureService = class FingerPrintCaptureService {
    constructor(http, toastCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((result) => {
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
        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('fingerIndex', fingerIndex); //.append('page', page);
        return this.http.get(`${API_URL}/rest/upload/getCustomerDataByFp?${params}`);
    }
    getCustInfoByCustomerId(customerId) {
        var params;
        console.log(`customerId ${customerId}`);
        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().append('customerId', customerId);
        return this.http.get(`${API_URL}/rest/upload/getCustomerDataByFp?${params}`);
    }
    /* To-Do: https api capture */
    CallingSGIFPCapture() {
        console.log(" in service ");
        return this.http.get('https://localhost:8443/SGIFPCapture')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((result) => {
            console.log('result-->', result);
            return result;
        }));
    }
    /* To-Do: https api capture */
    CallingSGIFPMatch(templeData1, templeData2) {
        var secuLicc = "ae7VmpMA9ZwEGVYVr1LMWrqjCEx+eFmya9VX0v+vNfQ=";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .append('template1', templeData1)
            .append('template2', templeData2);
        //  .append('licstr',secuLicc);
        //  .append('licstr',secuLicc);
        // http://localhost:8000/SGIMatchScore
        return this.http.post(`https://localhost:8443/SGIMatchScore`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((result) => {
            // console.log('result-->', result)
            return result;
        }));
    }
    openToast(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: `${message}`,
                duration: 5000
            });
            toast.present();
        });
    }
};
FingerPrintCaptureService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ToastController"] }
];
FingerPrintCaptureService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], FingerPrintCaptureService);



/***/ })

}]);
//# sourceMappingURL=default~views-login-login-module~views-otp-otp-module.js.map