function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-forget-password-forget-password-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/forget-password/forget-password.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/forget-password/forget-password.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsForgetPasswordForgetPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar style=\"background-color: crimson;border-bottom-color: 5px solid yellow;\"><img src=\"assets/images/dtb1.png\"\r\n    alt=\"image\"></mat-toolbar>\r\n\r\n\r\n<div class=\"main-div\" *ngIf>\r\n  <div class=\"page-wrap height-100 black\">\r\n    <div class=\"session-form-hold\">\r\n      <mat-progress-bar mode=\"determinate\" class=\"session-progress\"></mat-progress-bar>\r\n      <mat-card>\r\n        <mat-card-content>\r\n          <div class=\"text-center pt-8 pb-16\">\r\n            <img width=\"60px\" src=\"assets/images/dtb1.png\" alt=\"\" class=\"mb-05\">\r\n            <p class=\"text-muted m-0\">New password will be sent to your email address</p>\r\n          </div>\r\n          <form #passwordReset=\"ngForm\">\r\n\r\n            <div class=\"pb-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput placeholder=\"User Id\" oninput=\"this.value = this.value.toUpperCase()\" type=\"text\"\r\n                  name=\"username\" [(ngModel)]=\"username\" required [readonly]=\"isReadOnly\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <div *ngIf=\"button1\">\r\n              <div class=\"pb-1\">\r\n                <mat-form-field class=\"full-width\">\r\n                  <input id=\"otp\" autocomplete=\"off\" maxlength=\"6\" minlength=\"6\" matInput placeholder=\"Enter otp\"\r\n                    type=\"text\" name=\"otp\" [(ngModel)]=\"otp\" required>\r\n                </mat-form-field>\r\n\r\n              </div>\r\n              <div class=\"pb-1\">\r\n                <mat-form-field class=\"full-width\">\r\n                  <input matInput placeholder=\"New password\" type=\"password\" password1 #password1=\"ngModel\"\r\n                    pattern=\"^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$\"\r\n                    [(ngModel)]=\"password\" name=\"password\" [type]=\"hide ? 'password' : 'text'\" required>\r\n                  <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                </mat-form-field>\r\n              </div>\r\n              <small class=\"form-error-msg\" *ngIf=\"password1.touched && !password1.valid\" style=\"color:blue\">\r\n                Please enter Minimum 8 characters, at least one uppercase letter, <br>one lowercase letter, one number\r\n                and\r\n                one special character </small>\r\n              <br>\r\n              <small style=\"color: red;\"> Submit Button Will be Enabled Only after entering valid password and OTP\r\n              </small>\r\n              <div class=\"text-center\">\r\n                <button mat-raised-button color=\"primary\" (click)=\"reset(passwordReset.value)\"\r\n                  [disabled]=\"!passwordReset.form.valid\" class=\"text-center full-width\">Submit</button>\r\n                <span fxFlex=\"5%\"></span>\r\n                <!-- <a mat-raised-button color=\"primary\" class=\"text-center full-width\" (click)=\"goHome()\">Home</a> -->\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <button mat-raised-button color=\"primary\" class=\"full-width mb-1\" (click)=\"getOtp(username)\"\r\n              *ngIf=\"button2\">Generate Otp</button>\r\n            <button mat-raised-button color=\"warn\" class=\"full-width mb-1\" (click)=\"goHome()\">Go to Login</button>\r\n          </form>\r\n        </mat-card-content>\r\n        <mat-progress-bar mode=\"indeterminate\" *ngIf='spinnerbutton'></mat-progress-bar>\r\n      </mat-card>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div fxLayout=\"row\" >  \r\n  <div fxFlex=\"25%\">\r\n\r\n  </div>\r\n  <div fxFlex>\r\n    <br>\r\n    <mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n        Reset Password\r\n        </mat-toolbar>\r\n    <mat-card>\r\n      <!-- <mat-card-title>\r\n        Change Password\r\n      </mat-card-title> -->\r\n      \r\n      <mat-card-content>\r\n        <form *ngIf=\"reactiveForm\" [formGroup]=\"reactiveForm\" novalidate>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n            <div fxFlex=\"100\" fxFlex.gt-xs=\"50\" class=\"pr-1\">\r\n              <div class=\"pb-1\">\r\n                <mat-form-field class=\"full-width\">\r\n                  <input matInput type=\"text\" [readonly]=\"editable\" placeholder=\"User Id\" #user name=\"userId\"\r\n                    formControlName=\"userId\" oninput=\"this.value = this.value.toUpperCase()\">\r\n                </mat-form-field>\r\n               \r\n             \r\n             <mat-form-field class=\"full-width\">\r\n              <input matInput type=\"text\"  placeholder=\"OTP\" #otp name=\"otp\"\r\n                formControlName=\"otp\">\r\n            </mat-form-field>\r\n                <mat-form-field class=\"full-width\">\r\n                  <input matInput type=\"password\" placeholder=\"New Password\" #newPassword name=\"password\"  [type]=\"hide ? 'password' : 'text'\"\r\n                    formControlName=\"password\">\r\n                    <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                </mat-form-field>\r\n                  \r\n                <mat-error *ngIf=\"reactiveForm.controls.password.errors && (reactiveForm.controls.password.touched || reactiveForm.controls.password.dirty)\">\r\n                  <small class=\"form-error-msg\" *ngIf=\"reactiveForm.hasError('required','password')\">\r\n                    Please enter your new password.\r\n                  </small>\r\n                  <small class=\"form-error-msg\" *ngIf=\"reactiveForm.hasError('pattern','password')\">\r\n                    {{errorMsg}}\r\n                  </small>\r\n                  <small class=\"form-error-msg\" *ngIf=\"reactiveForm.hasError('minlength','password')\">\r\n                    Password must contain Minimum {{minPass}} characters.\r\n                  </small>\r\n                  <small class=\"form-error-msg\" *ngIf=\"reactiveForm.hasError('maxlength','password')\">\r\n                    Password must contain Maximum {{maxPass}} characters.\r\n                  </small>\r\n                </mat-error>\r\n                <mat-hint>\r\n                  <!-- <p> {{newPassword.value}}</p> -->\r\n                </mat-hint>\r\n              </div>\r\n              <div class=\"pb-1\">\r\n                <!-- [type]=\"hideConfirm ? 'password' : 'text'\"  this added by vidya for issue id 777-->\r\n                <mat-form-field class=\"full-width\">\r\n                  <input matInput type=\"password\" placeholder=\"Confirm Password\" #confirmPassword name=\"confirmPassword\"\r\n                    formControlName=\"confirmPassword\"    [type]=\"hideConfirm ? 'password' : 'text'\">\r\n                    <!-- added by vidya for issue id 777 -->\r\n                    <mat-icon matSuffix (click)=\"hideConfirm = !hideConfirm\">{{hideConfirm ? 'visibility_off' : 'visibility'}}</mat-icon>     \r\n                </mat-form-field>\r\n                <mat-error *ngIf=\"reactiveForm.controls.confirmPassword.errors && (reactiveForm.controls.confirmPassword.touched || reactiveForm.controls.confirmPassword.dirty)\">\r\n                  <small class=\"form-error-msg\" *ngIf=\"reactiveForm.hasError('required','confirmPassword')\">\r\n                    Please enter your new password again.\r\n                  </small>\r\n                  <small class=\"form-error-msg\" *ngIf=\"reactiveForm.hasError('pattern','confirmPassword')\">\r\n                    {{errorMsg}}\r\n                  </small>\r\n                  \r\n                  <small class=\"form-error-msg\" *ngIf=\"reactiveForm.hasError('minlength','confirmPassword')\">\r\n                    Confirm Password must contain Minimum {{minPass}} digits.\r\n                  </small>\r\n                  <small class=\"form-error-msg\" *ngIf=\"reactiveForm.hasError('maxlength','confirmPassword')\">\r\n                    Confirm Password must contain Maximum {{maxPass}} digits.\r\n                  </small>\r\n                </mat-error>\r\n\r\n                <mat-hint>\r\n                  <!-- <p>{{confirmPassword.value}}</p> -->\r\n                </mat-hint>            \r\n              </div>\r\n            </div>\r\n          </div>\r\n          <mat-progress-bar mode=\"indeterminate\"  *ngIf=\"loginProcessing\"></mat-progress-bar>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"10px\" class=\"mt-4\">\r\n            <button  mat-raised-button color=\"primary\"  class=\"full-width mb-1\" (click)=\"getOtp(user.value)\"\r\n            >Generate OTP</button>\r\n            <button mat-raised-button color=\"primary\" class=\"text-center full-width\" \r\n              [disabled]=\"!reactiveForm.valid\"\r\n              (click)=\"changePassword(newPassword.value,confirmPassword.value,user.value,otp.value)\">\r\n                Submit\r\n            </button>\r\n            <button mat-raised-button color=\"warn\" type=\"reset\" \r\n              class=\"text-center full-width\">\r\n                Reset\r\n            </button>\r\n             <button mat-raised-button color=\"warn\" class=\"full-width mb-1\" (click)=\"goHome()\">Go to Login</button>\r\n          </div>\r\n        </form>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  \r\n  <div fxFlex=\"25%\">\r\n\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/views/forget-password/forget-password-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/views/forget-password/forget-password-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: forgetPasswordRoutes */

  /***/
  function srcAppViewsForgetPasswordForgetPasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "forgetPasswordRoutes", function () {
      return forgetPasswordRoutes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _forget_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./forget-password.component */
    "./src/app/views/forget-password/forget-password.component.ts");

    var forgetPasswordRoutes = [{
      path: '',
      component: _forget_password_component__WEBPACK_IMPORTED_MODULE_1__["ForgetPasswordComponent"]
    }];
    /***/
  },

  /***/
  "./src/app/views/forget-password/forget-password.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/views/forget-password/forget-password.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsForgetPasswordForgetPasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\ninput#otp {\r\n  letter-spacing: 10px;\r\n  border-radius: 2px;\r\n  z-index: 1;\r\n  text-align: center;\r\n}\r\n.main-div{\r\n  height: 70vh;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  margin-top: auto;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZm9yZ2V0LXBhc3N3b3JkL2ZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2ZvcmdldC1wYXNzd29yZC9mb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbnB1dCNvdHAge1xyXG4gIGxldHRlci1zcGFjaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICB6LWluZGV4OiAxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubWFpbi1kaXZ7XHJcbiAgaGVpZ2h0OiA3MHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/views/forget-password/forget-password.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/views/forget-password/forget-password.component.ts ***!
    \********************************************************************/

  /*! exports provided: ForgetPasswordComponent */

  /***/
  function srcAppViewsForgetPasswordForgetPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgetPasswordComponent", function () {
      return ForgetPasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../login/login.service */
    "./src/app/views/login/login.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_shared_models_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/models/login */
    "./src/app/shared/models/login.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var crypto_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! crypto-js */
    "./node_modules/crypto-js/index.js");
    /* harmony import */


    var crypto_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _security_policy_security_policy_security_policy_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../security-policy/security-policy/security-policy.service */
    "./src/app/views/security-policy/security-policy/security-policy.service.ts");

    var ForgetPasswordComponent = /*#__PURE__*/function () {
      function ForgetPasswordComponent(router, route, apiService, fb, loginservice, apiService1, snack) {
        var _this = this;

        _classCallCheck(this, ForgetPasswordComponent);

        this.router = router;
        this.route = route;
        this.apiService = apiService;
        this.fb = fb;
        this.loginservice = loginservice;
        this.apiService1 = apiService1;
        this.snack = snack;
        this.loginProcessing = false;
        this.login = new src_app_shared_models_login__WEBPACK_IMPORTED_MODULE_5__["Login"]();
        this.editable = false;
        this.errorMsg = '';
        this.hide = true;
        this.hideConfirm = true;
        this.modifyUserObject = new src_app_shared_models_login__WEBPACK_IMPORTED_MODULE_5__["Login"]();
        this.login1 = new src_app_shared_models_login__WEBPACK_IMPORTED_MODULE_5__["Login"]();
        this.route.queryParams.subscribe(function (params) {
          // this.modifyUserObject.id = params['id'];
          _this.modifyUserObject.username = params.userId; // console.log(this.modifyUserObject.username);
        });
      }

      _createClass(ForgetPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.isReadOnly = false;
          this.button2 = true;
          this.reactiveForm = this.fb.group({
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
            otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(this.passwordRegex), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(this.maxPass), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(this.minPass)])]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(this.passwordRegex), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(this.maxPass), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(this.minPass)])])
          });
          this.userId = localStorage.getItem('userIdForChangePassword');
          var a, b;
          this.apiService1.fetchSecurityPolicyService().subscribe(function (resp) {
            _this2.security = resp;
            console.log(_this2.security);
            _this2.minPass = _this2.security.minPswdLength;
            _this2.maxPass = _this2.security.maxPswdLength;

            _this2.buildForm(_this2.minPass, _this2.maxPass);

            console.log(_this2.minPass, _this2.maxPass);
            console.log(_this2.security);
          });
          this.buildForm(this.minPass ? this.minPass : a, this.maxPass ? this.maxPass : b);
        }
      }, {
        key: "buildForm",
        value: function buildForm(a, b) {
          var _this3 = this;

          // ---------- Password Policy Implementation (BEGIN) ----------
          this.apiService1.fetchSecurityPolicyService().subscribe(function (resp) {
            _this3.security1 = resp;
            _this3.ucase = _this3.security1.pswdComplexUcase;
            _this3.lcase = _this3.security1.pswdComplexLcase;
            _this3.num = _this3.security1.pswdComplexNum;
            _this3.splc = _this3.security1.pswdComplexSplc;

            if (_this3.security1.pswdComplexUcase) {
              _this3.passwordRegex = '(?=[^A-Z]*[A-Z])';
              _this3.errorMsg = ' UpperCase';
            }

            if (_this3.security1.pswdComplexLcase) {
              _this3.passwordRegex = _this3.passwordRegex + '(?=[^a-z]*[a-z])';

              if (_this3.errorMsg != null) {
                _this3.errorMsg = _this3.errorMsg + ', LowerCase';
              } else {
                _this3.errorMsg = _this3.errorMsg + ' LowerCase';
              }
            }

            if (_this3.security1.pswdComplexNum) {
              _this3.passwordRegex = _this3.passwordRegex + '(?=[^0-9]*[0-9])';

              if (_this3.errorMsg != null) {
                _this3.errorMsg = _this3.errorMsg + ', Number';
              } else {
                _this3.errorMsg = _this3.errorMsg + ' Number';
              }
            }

            if (_this3.security1.pswdComplexSplc) {
              _this3.passwordRegex = _this3.passwordRegex + '(?=[^!-@]*[!-@])';

              if (_this3.errorMsg != null) {
                _this3.errorMsg = _this3.errorMsg + ', Special Character';
              } else {
                _this3.errorMsg = _this3.errorMsg + ' Special Character';
              }
            }

            _this3.passwordRegex = _this3.passwordRegex + '.{' + _this3.minPass + ',' + _this3.maxPass + '}'; // this.passwordRegex = "(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^!-@]*[!-@]).{10,15}";

            _this3.errorMsg = 'Password must contain atleast one ' + _this3.errorMsg + '.';
            console.log(_this3.passwordRegex); // ---------- Password Policy Implementation (END) ----------

            _this3.reactiveForm = _this3.fb.group({
              userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"](''),
              otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required]),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(_this3.passwordRegex), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(_this3.maxPass), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(_this3.minPass)])]),
              confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].pattern(_this3.passwordRegex), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].maxLength(_this3.maxPass), _angular_forms__WEBPACK_IMPORTED_MODULE_8__["Validators"].minLength(_this3.minPass)])])
            });
          });
          console.log(this.minPass, this.maxPass);
          console.log('form', this.reactiveForm);
        }
      }, {
        key: "reset",
        value: function reset(login) {
          var _this4 = this;

          if (!login.username) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Enter User Id.');
            return;
          }

          var encryptedAES = crypto_js__WEBPACK_IMPORTED_MODULE_7__["AES"].encrypt(login.password, "@12#90!^*NPR*g&*()$34#$");
          var USERNAME = crypto_js__WEBPACK_IMPORTED_MODULE_7__["AES"].encrypt(login.username, "@12#90!^*NPR*g&*()$34#$");
          var data = encryptedAES.toString();
          var uname = USERNAME.toString();
          this.login1.password = data;
          this.login1.username = uname;
          this.login1.otp = this.otp;
          console.log(this.login1);
          this.spinnerbutton = true;
          this.apiService.forgetPassword(this.login1).subscribe(function (res) {
            _this4.var1 = res;
            console.log(_this4.var1);

            if (_this4.var1) {
              _this4.spinnerbutton = false;

              if (_this4.var1[0] === 'Login success.') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('password Changed Successfully.');
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire(_this4.var1[0]);
              } // this.router.navigate(['/dashboard']);

            } else {
              _this4.spinnerbutton = false; // this.snack.open('Choose Other Password Unable to Reset!', 'OK', { duration: 4000 });

              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Choose Other Password ', 'or otp is invalid.');
            }
          });
        }
      }, {
        key: "getOtp",
        value: function getOtp(username) {
          var _this5 = this;

          this.loginProcessing = true;

          if (!username) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Enter User Id.');
            return;
          } //var encryptedAES = CryptoJS.AES.encrypt(login.password, "@12#90!^*NPR*g&*()$34#$");


          var USERNAME = crypto_js__WEBPACK_IMPORTED_MODULE_7__["AES"].encrypt(username, "@12#90!^*NPR*g&*()$34#$"); //console.log(encryptedAES) ;
          // var data=encryptedAES.toString();

          var uname = USERNAME.toString();
          console.log(uname); // this.logindata1.password=data;
          // this.logindata1.username=uname;

          this.spinnerbutton = true;
          this.passwordReset1 = uname;
          console.log("uname", uname);
          this.apiService.getOtpForReset(this.passwordReset1).subscribe(function (res) {
            _this5.loginProcessing = false;
            _this5["var"] = res;

            if (_this5["var"]) {
              _this5.button1 = true;
              _this5.button2 = false;
              _this5.isReadOnly = true;
              _this5.spinnerbutton = false;
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Unable to find User details.', 'Verify your userid.');
              _this5.button1 = false;
              _this5.button2 = true;
              _this5.isReadOnly = true;
              _this5.spinnerbutton = false;
            }
          }, function (error) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Server Error', 'Unable to connect server.');
          });
        }
      }, {
        key: "goHome",
        value: function goHome() {
          this.router.navigate(['/login']);
        }
      }, {
        key: "changePassword",
        value: function changePassword(newPassword, confirmPassword, userId, otp) {
          var _this6 = this;

          console.log(newPassword, confirmPassword, userId, otp);

          if (newPassword != confirmPassword) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Password Not Matched.');
          } else {
            this.loginProcessing = true;
            var encryptedAES = crypto_js__WEBPACK_IMPORTED_MODULE_7__["AES"].encrypt(newPassword, '@12#90!^*NPR*g&*()$34#$');
            var USERNAME = crypto_js__WEBPACK_IMPORTED_MODULE_7__["AES"].encrypt(userId, '@12#90!^*NPR*g&*()$34#$');
            var data = encryptedAES.toString();
            var uname = USERNAME.toString();
            this.login.password = data;
            this.login.username = uname;
            this.login.otp = otp;
            console.log(this.login);
            this.loginservice.forgetPassword(this.login).subscribe(function (res) {
              _this6.loginProcessing = false;
              _this6.res = res;
              console.log(_this6.res);

              if (_this6.res) {
                // this.spinnerbutton = false;
                if (_this6.res[0] === 'Login success.') {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Password Changed Successfully.');
                }

                if (res[0] == "You cannot use your previous password. Please choose another password") {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    title: "You can not use your last " + _this6.security.pswdReuseAft + " passwords. Please choose another password."
                  });
                }

                if (res[0] == "OTP is invalid") {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    title: "Otp is invalid."
                  });
                }

                if (res[0] == "successfull") {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    title: "Password Changed Successfully."
                  });
                } // } else {
                //   Swal.fire(this.res[0]);
                // }
                // this.router.navigate(['/dashboard']);

              } else {
                // this.spinnerbutton = false;
                // this.snack.open('Choose Other Password Unable to Reset!', 'OK', { duration: 4000 });
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('Choose Other Password ', 'or otp is invalid.');
              }
            });
          }
        }
      }]);

      return ForgetPasswordComponent;
    }();

    ForgetPasswordComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"]
      }, {
        type: _login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"]
      }, {
        type: _security_policy_security_policy_security_policy_service__WEBPACK_IMPORTED_MODULE_9__["SecurityPolicyService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
      }];
    };

    ForgetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forget-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forget-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/forget-password/forget-password.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forget-password.component.css */
      "./src/app/views/forget-password/forget-password.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormBuilder"], _login_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"], _security_policy_security_policy_security_policy_service__WEBPACK_IMPORTED_MODULE_9__["SecurityPolicyService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])], ForgetPasswordComponent);
    /***/
  },

  /***/
  "./src/app/views/forget-password/forget-password.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/views/forget-password/forget-password.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ForgetPasswordModule */

  /***/
  function srcAppViewsForgetPasswordForgetPasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgetPasswordModule", function () {
      return ForgetPasswordModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./forget-password-routing.module */
    "./src/app/views/forget-password/forget-password-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _forget_password_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./forget-password.component */
    "./src/app/views/forget-password/forget-password.component.ts");
    /* harmony import */


    var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/components/components.module */
    "./src/app/shared/components/components.module.ts");
    /* harmony import */


    var src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/shared/angular-material/angular-material.module */
    "./src/app/shared/angular-material/angular-material.module.ts");

    var ForgetPasswordModule = function ForgetPasswordModule() {
      _classCallCheck(this, ForgetPasswordModule);
    };

    ForgetPasswordModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_forget_password_component__WEBPACK_IMPORTED_MODULE_8__["ForgetPasswordComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"], src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_10__["AngularMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__["PerfectScrollbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(_forget_password_routing_module__WEBPACK_IMPORTED_MODULE_3__["forgetPasswordRoutes"])]
    })], ForgetPasswordModule);
    /***/
  }
}]);
//# sourceMappingURL=views-forget-password-forget-password-module-es5.js.map