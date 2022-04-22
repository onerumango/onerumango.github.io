(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-login-login-module~views-otp-otp-module"],{

/***/ "6Gs0":
/*!*********************************************!*\
  !*** ./src/app/views/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 30%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\n.maincard {\n  background-color: white;\n}\n\n.box {\n  border-color: #403E39;\n  border-width: thin;\n  border-style: solid;\n  border-radius: 10px;\n  width: 85%;\n  height: 45px;\n}\n\n.inputCard {\n  padding-top: 3%;\n  padding-left: 10%;\n}\n\n.inputCardButton {\n  padding-top: 16%;\n  padding-left: 10%;\n}\n\n.titleCard {\n  padding-left: 5%;\n}\n\n.login-logo {\n  padding: 20px;\n  min-height: 90px;\n  text-align: center;\n}\n\n.login-logo img {\n  max-width: 120px;\n  margin-top: -9%;\n}\n\n.fieldCard {\n  padding-top: 50%;\n  padding-left: 5%;\n}\n\n.subtitle {\n  padding-left: 5%;\n}\n\n.top-right-quarter-circle {\n  width: 300px;\n  height: 290px;\n  margin-top: -20%;\n  margin-left: 60%;\n  border-radius: 250px 0 250px 250px;\n  background-color: #d8d8d8;\n}\n\n.top-left-quarter-circle {\n  width: 200px;\n  height: 160px;\n  margin-top: -20%;\n  border-radius: 0 300px 0 0;\n  background-color: #d8d8d8;\n}\n\nion-button {\n  width: 85%;\n  height: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUVELGtCQUFBO0VBQ0MsT0FBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7QUFBSjs7QUFFRTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUVFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBRUEsY0FBQTtFQUVBLFNBQUE7QUFESjs7QUFJRTtFQUNFLHFCQUFBO0FBREo7O0FBR0U7RUFDQyx1QkFBQTtBQUFIOztBQUdFO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQUFKOztBQUdFO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0FBQUo7O0FBRUU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBQ0U7RUFFSSxnQkFBQTtBQUNOOztBQUNFO0VBQ0UsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUNFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQUVKOztBQUNFO0VBQ0UsZ0JBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0QsZ0JBQUE7RUFDQSxnQkFBQTtFQUVDLGtDQUFBO0VBQ0EseUJBQUE7QUFDSjs7QUFDRTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFFQSwwQkFBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBQ0U7RUFDRSxVQUFBO0VBQ0EsWUFBQTtBQUVKIiwiZmlsZSI6ImxvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG4gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICB9XHJcbiAgI2NvbnRhaW5lciBzdHJvbmcge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNjb250YWluZXIgcCB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjJweDtcclxuICBcclxuICAgIGNvbG9yOiAjOGM4YzhjO1xyXG4gIFxyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBcclxuICAjY29udGFpbmVyIGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICAubWFpbmNhcmR7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuYm94IHtcclxuICAgIGJvcmRlci1jb2xvcjogIzQwM0UzOTtcclxuICAgIGJvcmRlci13aWR0aDogdGhpbjtcclxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgd2lkdGg6IDg1JTtcclxuICAgIGhlaWdodDogNDVweDtcclxuICAgXHJcbiAgfVxyXG4gIC5pbnB1dENhcmR7XHJcbiAgICBwYWRkaW5nLXRvcDogMyU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxuICB9XHJcbiAgLmlucHV0Q2FyZEJ1dHRvbntcclxuICAgIHBhZGRpbmctdG9wOiAxNiU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwJTtcclxuICB9XHJcbiAgLnRpdGxlQ2FyZFxyXG4gIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICB9XHJcbiAgLmxvZ2luLWxvZ28ge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDkwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi1sb2dvIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTklO1xyXG4gIH1cclxuICBcclxuICAuZmllbGRDYXJke1xyXG4gICAgcGFkZGluZy10b3A6IDUwJTtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgfVxyXG5cclxuICAuc3VidGl0bGV7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIH1cclxuIFxyXG4udG9wLXJpZ2h0LXF1YXJ0ZXItY2lyY2xlIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMjkwcHg7XHJcbiAgIG1hcmdpbi10b3A6IC0yMCU7XHJcbiAgIG1hcmdpbi1sZWZ0OiA2MCU7XHJcbiAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMjUwcHggMCAyNTBweCAyNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDIxNiwgMjE2KTtcclxuICB9XHJcbiAgLnRvcC1sZWZ0LXF1YXJ0ZXItY2lyY2xlIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMTYwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMjAlO1xyXG4gICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAwIDMwMHB4IDAgMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMTYsIDIxNiwgMjE2KTtcclxuICB9XHJcbiAgaW9uLWJ1dHRvbntcclxuICAgIHdpZHRoOiA4NSU7XHJcbiAgICBoZWlnaHQ6IDQ1cHg7XHJcbn1cclxuXHJcbiJdfQ== */");

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








class otpModel {
}
class verifyotpModel {
}
let LoginPage = class LoginPage {
    constructor(router, cdk, fb, api, toastCtrl) {
        this.router = router;
        this.cdk = cdk;
        this.fb = fb;
        this.api = api;
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
            this.openToast();
        // localStorage.setItem("PhoneNumLogin", this.customerPhonenum);
        this.oTpModel.source = 'customer';
        this.oTpModel.source_key = 'mobile';
        this.oTpModel.source_value = phone.phoneNo;
        console.log("model", this.oTpModel);
        if (this.oTpModel.source_value != '') {
            this.api.getOtp(this.oTpModel).subscribe(otpResp => {
                if (otpResp.icust.custStatus != "APPROVED" || otpResp.icust.custAccount[0].status != "APPROVED") {
                    this.openToast1();
                }
                else {
                    console.log("Response Success", otpResp);
                    this.otpResponse = otpResp;
                    console.log("Response otpResp['otpVal'].token", otpResp['otpVal'].token);
                    this.api.sendOtp(this.otpResponse['otpVal'].token);
                    /* Added validation for un-registered mobile nummber is entered */
                    if (this.otpResponse.otpVal.userId === "New Customer" || (this.otpResponse.otpVal.userId === '' && this.otpResponse.otpVal.userId === null)) {
                        this.cdk.detectChanges();
                        this.userResp = true;
                        this.openToast();
                    }
                    else {
                        // this.otpResponse.otpVal.userId !='' && this.otpResponse.otpVal.userId!=null && 
                        console.log('in else');
                        this.router.navigateByUrl('/otp');
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
    openToast1() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Customer Id or Account Status is not approved',
                duration: 2000
            });
            toast.present();
        });
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
    openToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Please enter the registered Mobile Number',
                duration: 5000
            });
            toast.present();
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
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
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\r\n  <!-- <div class=\"float-right-lg\"> -->\r\n    <div class=\"top-right-quarter-circle\"></div>\r\n  <!-- </div> -->\r\n  \r\n \r\n    <form [formGroup]=\"loginForm\" style=\"height: 890px;\">\r\n      <div class=\"login-logo\">\r\n        <img src=\"assets\\images\\BL1.png\" alt=\"Ionic logo\">\r\n      </div>\r\n    <div style=\"padding-top: -60%;\">\r\n\r\n    \r\n      <div class=\"titleCard\">\r\n        <ion-text>\r\n          <h2 style=\"color:black\">Sign In</h2>\r\n          <h5 style=\"color: gray;\">Enter your details to get started</h5>\r\n        </ion-text>\r\n      </div>\r\n    \r\n    \r\n      <div class=\"inputCard\" >\r\n       <ion-label position=\"floating\">Mobile number</ion-label>\r\n        <ion-input class=\"box\" formControlName=\"phoneNo\" (keypress)=_keyPress($event) maxLength = \"10\"></ion-input>\r\n    </div>\r\n<!--     \r\n    <div class=\"inputCard\"  *ngIf=\"otpValid\" >\r\n      <ion-label position=\"floating\">OTP</ion-label>\r\n       <ion-input class=\"box\" formControlName=\"otp\"></ion-input>\r\n    </div> -->\r\n    \r\n    <div class=\"inputCardButton\">\r\n      <ion-button expand=\"block\" shape=\"round\" (click) =\"getOtp(loginForm.value)\"\r\n      >Continue</ion-button>\r\n      <!-- <span *ngIf=\"userResp\">\r\n        <small style=\"color: red;\">User Not Registered</small>\r\n      </span> -->\r\n      <!-- <ion-button expand=\"block\" shape=\"round\" (click) =\"validateOtp(loginForm.value.otp) ;goToCashWithdrawal(loginForm.value)\"\r\n      >Login</ion-button> -->\r\n      <!-- (click)=\"goToCashWithdrawal(loginForm.value)\" -->\r\n    </div>\r\n    \r\n    <div class=\"ion-padding-top\">\r\n      <!-- <p style=\"padding-left: 20%;display: inline;\">Didn't Received your OTP?</p> -->\r\n      <!-- <p (click) =\"getOtp(loginForm.value)\"   style=\"display: inline; font-weight: bolder; cursor: pointer;\">Resend</p> -->\r\n    </div>\r\n  </div>\r\n    </form> <div class=\"top-left-quarter-circle\"></div>\r\n  </ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=default~views-login-login-module~views-otp-otp-module.js.map