function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-security-policy-change-password-change-password-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/security-policy/change-password/change-password.component.html":
  /*!****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/security-policy/change-password/change-password.component.html ***!
    \****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsSecurityPolicyChangePasswordChangePasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar>Process Monitoring Screen</mat-toolbar>\r\n\r\n\r\n\r\n<mat-card class=\"navigation\">\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n  </mat-form-field>\r\n  <div class=\"mat-elevation-z8\">\r\n    <table mat-table [dataSource]=\"dataSource\">\r\n\r\n      <!-- Position Column -->\r\n      <ng-container matColumnDef=\"userId\">\r\n        <th mat-header-cell *matHeaderCellDef> Authorizer</th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.userId}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"batchNo\">\r\n        <th mat-header-cell *matHeaderCellDef> Batch No</th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.batchNo}} </td>\r\n      </ng-container>\r\n\r\n      <ng-container matColumnDef=\"date\">\r\n        <th mat-header-cell *matHeaderCellDef> Date</th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.date | date}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"relatedProcess\">\r\n        <th mat-header-cell *matHeaderCellDef> Related Process </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.relatedProcess}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Weight Column -->\r\n      <ng-container matColumnDef=\"totalNoOfRecord\">\r\n        <th mat-header-cell *matHeaderCellDef> Total Record </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.totalNoOfRecord}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Symbol Column -->\r\n      <ng-container matColumnDef=\"success\">\r\n        <th mat-header-cell *matHeaderCellDef> Success Record </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.success}} </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"failed\">\r\n        <th mat-header-cell *matHeaderCellDef> Failed Record </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.failed}} </td>\r\n      </ng-container>\r\n      <ng-container matColumnDef=\"status\">\r\n        <th mat-header-cell *matHeaderCellDef> Status </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.status}} </td>\r\n      </ng-container>\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n\r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n  </div>\r\n\r\n</mat-card>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/shared/models/login.ts":
  /*!****************************************!*\
    !*** ./src/app/shared/models/login.ts ***!
    \****************************************/

  /*! exports provided: Login */

  /***/
  function srcAppSharedModelsLoginTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Login", function () {
      return Login;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Login = /*#__PURE__*/_createClass(function Login() {
      _classCallCheck(this, Login);
    });
    /***/

  },

  /***/
  "./src/app/views/security-policy/change-password/change-password.component.scss":
  /*!**************************************************************************************!*\
    !*** ./src/app/views/security-policy/change-password/change-password.component.scss ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsSecurityPolicyChangePasswordChangePasswordComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  width: 100%;\n}\n\n.navigation {\n  /* width: 300px; */\n  height: 475px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3Mvc2VjdXJpdHktcG9saWN5L2NoYW5nZS1wYXNzd29yZC9GOlxcbXV0aHUtb25ib2FyZFxcbWVkaWFuLXBoMi11aS9zcmNcXGFwcFxcdmlld3NcXHNlY3VyaXR5LXBvbGljeVxcY2hhbmdlLXBhc3N3b3JkXFxjaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL3NlY3VyaXR5LXBvbGljeS9jaGFuZ2UtcGFzc3dvcmQvY2hhbmdlLXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9zZWN1cml0eS1wb2xpY3kvY2hhbmdlLXBhc3N3b3JkL2NoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5uYXZpZ2F0aW9uIHtcclxuICAgIC8qIHdpZHRoOiAzMDBweDsgKi9cclxuICAgIGhlaWdodDogNDc1cHg7XHJcbiAgXHJcbiAgfSIsInRhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5uYXZpZ2F0aW9uIHtcbiAgLyogd2lkdGg6IDMwMHB4OyAqL1xuICBoZWlnaHQ6IDQ3NXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/views/security-policy/change-password/change-password.component.ts":
  /*!************************************************************************************!*\
    !*** ./src/app/views/security-policy/change-password/change-password.component.ts ***!
    \************************************************************************************/

  /*! exports provided: ChangePasswordComponent */

  /***/
  function srcAppViewsSecurityPolicyChangePasswordChangePasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordComponent", function () {
      return ChangePasswordComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _security_policy_security_policy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../security-policy/security-policy.service */
    "./src/app/views/security-policy/security-policy/security-policy.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var crypto_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! crypto-js */
    "./node_modules/crypto-js/index.js");
    /* harmony import */


    var crypto_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var src_app_shared_models_login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/models/login */
    "./src/app/shared/models/login.ts");
    /* harmony import */


    var _login_login_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../login/login.service */
    "./src/app/views/login/login.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ChangePasswordComponent = /*#__PURE__*/function () {
      function ChangePasswordComponent(apiService, fb, toastr, loginservice) {
        _classCallCheck(this, ChangePasswordComponent);

        this.apiService = apiService;
        this.fb = fb;
        this.toastr = toastr;
        this.loginservice = loginservice;
        this.login = new src_app_shared_models_login__WEBPACK_IMPORTED_MODULE_7__["Login"]();
        this.editable = false;
        this.errorMsg = '';
        this.displayedColumns = ['userId', 'batchNo', 'relatedProcess', 'date', 'totalNoOfRecord', 'success', 'failed', 'status'];
      }

      _createClass(ChangePasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.getDataForMonitor();
          this.reactiveForm = this.fb.group({
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.passwordRegex), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(this.maxPass), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.minPass)])]),
            confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(this.passwordRegex), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(this.maxPass), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(this.minPass)])])
          });
          this.userId = localStorage.getItem('userIdForChangePassword');
          var a, b;
          this.apiService.fetchSecurityPolicyService().subscribe(function (resp) {
            _this.security = resp;
            console.log(_this.security);
            _this.minPass = _this.security.minPswdLength;
            _this.maxPass = _this.security.maxPswdLength;

            _this.buildForm(_this.minPass, _this.maxPass);

            console.log(_this.minPass, _this.maxPass);
            console.log(_this.security);
          });
          this.buildForm(this.minPass ? this.minPass : a, this.maxPass ? this.maxPass : b);
        }
      }, {
        key: "buildForm",
        value: function buildForm(a, b) {
          var _this2 = this;

          // ---------- Password Policy Implementation (BEGIN) ----------
          this.apiService.fetchSecurityPolicyService().subscribe(function (resp) {
            _this2.security1 = resp;
            _this2.ucase = _this2.security1.pswdComplexUcase;
            _this2.lcase = _this2.security1.pswdComplexLcase;
            _this2.num = _this2.security1.pswdComplexNum;
            _this2.splc = _this2.security1.pswdComplexSplc;

            if (_this2.security1.pswdComplexUcase) {
              _this2.passwordRegex = '(?=[^A-Z]*[A-Z])';
              _this2.errorMsg = ' UpperCase';
            }

            if (_this2.security1.pswdComplexLcase) {
              _this2.passwordRegex = _this2.passwordRegex + '(?=[^a-z]*[a-z])';

              if (_this2.errorMsg != null) {
                _this2.errorMsg = _this2.errorMsg + ', LowerCase';
              } else {
                _this2.errorMsg = _this2.errorMsg + ' LowerCase';
              }
            }

            if (_this2.security1.pswdComplexNum) {
              _this2.passwordRegex = _this2.passwordRegex + '(?=[^0-9]*[0-9])';

              if (_this2.errorMsg != null) {
                _this2.errorMsg = _this2.errorMsg + ', Number';
              } else {
                _this2.errorMsg = _this2.errorMsg + ' Number';
              }
            }

            if (_this2.security1.pswdComplexSplc) {
              _this2.passwordRegex = _this2.passwordRegex + '(?=[^!-@]*[!-@])';

              if (_this2.errorMsg != null) {
                _this2.errorMsg = _this2.errorMsg + ', Special Character';
              } else {
                _this2.errorMsg = _this2.errorMsg + ' Special Character';
              }
            }

            _this2.passwordRegex = _this2.passwordRegex + '.{' + _this2.minPass + ',' + _this2.maxPass + '}'; // this.passwordRegex = "(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^!-@]*[!-@]).{10,15}";

            _this2.errorMsg = 'Password must contain atleast one ' + _this2.errorMsg + '.';
            console.log(_this2.passwordRegex); // ---------- Password Policy Implementation (END) ----------

            _this2.reactiveForm = _this2.fb.group({
              userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
              otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_this2.passwordRegex), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(_this2.maxPass), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(_this2.minPass)])]),
              confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(_this2.passwordRegex), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(_this2.maxPass), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(_this2.minPass)])])
            });
          });
          console.log(this.minPass, this.maxPass);
          console.log('form', this.reactiveForm);
        }
      }, {
        key: "pwdMatchValidator",
        value: function pwdMatchValidator(frm) {
          return !this.passwordRegex ? null : {
            mismatch: true
          };
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "reloadData",
        value: function reloadData() {
          var _this3 = this;

          console.log('method invoked');
          this.apiService.fetchSecurityPolicyService().subscribe(function (resp) {
            _this3.security = resp;
            console.log(_this3.security);
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.dataSource.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "changePassword",
        value: function changePassword(newPassword, confirmPassword, userId, otp) {
          var _this4 = this;

          console.log(newPassword, confirmPassword, userId, otp);

          if (newPassword === confirmPassword) {} else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Password Not Matched.');
          }

          var encryptedAES = crypto_js__WEBPACK_IMPORTED_MODULE_6__["AES"].encrypt(newPassword, '@12#90!^*NPR*g&*()$34#$');
          var USERNAME = crypto_js__WEBPACK_IMPORTED_MODULE_6__["AES"].encrypt(userId, '@12#90!^*NPR*g&*()$34#$');
          var data = encryptedAES.toString();
          var uname = USERNAME.toString();
          this.login.password = data;
          this.login.username = uname;
          this.login.otp = otp;
          console.log(this.login);
          this.loginservice.forgetPassword(this.login).subscribe(function (res) {
            _this4.res = res;
            console.log(_this4.res);

            if (_this4.res) {
              // this.spinnerbutton = false;
              if (_this4.res[0] === 'Login success.') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('password Changed Successfully.');
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire(_this4.res[0]);
              } // this.router.navigate(['/dashboard']);

            } else {
              // this.spinnerbutton = false;
              // this.snack.open('Choose Other Password Unable to Reset!', 'OK', { duration: 4000 });
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Choose Other Password ', 'or otp is invalid.');
            }
          });
        }
      }, {
        key: "reset",
        value: function reset() {
          this.responseError = null;
          this.responseMsg = null;
          this.passwordStatus = false;
        }
      }, {
        key: "getOtp1",
        value: function getOtp1(userId) {
          console.log(userId);
          this.editable = true;
        }
      }, {
        key: "getDataForMonitor",
        value: function getDataForMonitor() {
          var _this5 = this;

          this.apiService.getMonitorData().subscribe(function (dataresp) {
            _this5.dataresp = dataresp;
            console.log(_this5.dataresp);
            _this5.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTableDataSource"](_this5.dataresp);
            _this5.dataSource.paginator = _this5.paginator;
          });
        } //  submit(login: Login) {
        //     if(!login.username){
        //       Swal.fire('Enter User Id.');
        //       return;
        //     }
        //       var encryptedAES = CryptoJS.AES.encrypt(login.password, "@12#90!^*NPR*g&*()$34#$");
        //     var USERNAME = CryptoJS.AES.encrypt(login.username, "@12#90!^*NPR*g&*()$34#$");
        //    var data=encryptedAES.toString();
        //     var uname=USERNAME.toString();
        //     this.login1.password=data;
        //     this.login1.username=uname;
        //     console.log("otp is",this.otp);
        //     this.login1.otp=this.otp;
        //     console.log(this.login1);
        //     this.spinnerbutton = true;
        //     this.loginservice.forgetPassword(this.login1).subscribe(res => {
        //       this.var1 = res;
        //       console.log(this.var1);
        //       if (this.var1) {
        //         this.spinnerbutton = false;
        //         if(this.var1[0] ==='Login success.'){
        //           Swal.fire('password Changed Successfully.');
        //         }else{
        //           Swal.fire(this.var1[0]);
        //         }
        //         // this.router.navigate(['/dashboard']);
        //       } else {
        //         this.spinnerbutton = false;
        //         // this.snack.open('Choose Other Password Unable to Reset!', 'OK', { duration: 4000 });
        //         Swal.fire('Choose Other Password !','or otp is invalid.');
        //       }
        //     });
        //   }

      }, {
        key: "getOtp",
        value: function getOtp(userId) {
          var _this6 = this;

          console.log(userId);
          this.editable = true;

          if (!userId) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Enter User Id.');
            return;
          } // var encryptedAES = CryptoJS.AES.encrypt(login.password, "@12#90!^*NPR*g&*()$34#$");


          var USERNAME = crypto_js__WEBPACK_IMPORTED_MODULE_6__["AES"].encrypt(userId, '@12#90!^*NPR*g&*()$34#$');
          var uname = USERNAME.toString();
          this.passwordReset1 = uname;
          this.loginservice.getOtpForReset(this.passwordReset1).subscribe(function (res) {
            _this6.res = res;

            if (_this6.res) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Otp Send to user mail id.');
            }
          });
        }
      }]);

      return ChangePasswordComponent;
    }();

    ChangePasswordComponent.ctorParameters = function () {
      return [{
        type: _security_policy_security_policy_service__WEBPACK_IMPORTED_MODULE_4__["SecurityPolicyService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: _login_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"], {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatPaginator"])], ChangePasswordComponent.prototype, "paginator", void 0);
    ChangePasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-change-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./change-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/security-policy/change-password/change-password.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./change-password.component.scss */
      "./src/app/views/security-policy/change-password/change-password.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_security_policy_security_policy_service__WEBPACK_IMPORTED_MODULE_4__["SecurityPolicyService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"], _login_login_service__WEBPACK_IMPORTED_MODULE_8__["LoginService"]])], ChangePasswordComponent);
    /***/
  },

  /***/
  "./src/app/views/security-policy/change-password/change-password.module.ts":
  /*!*********************************************************************************!*\
    !*** ./src/app/views/security-policy/change-password/change-password.module.ts ***!
    \*********************************************************************************/

  /*! exports provided: ChangePasswordModule */

  /***/
  function srcAppViewsSecurityPolicyChangePasswordChangePasswordModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChangePasswordModule", function () {
      return ChangePasswordModule;
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


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _change_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./change-password.component */
    "./src/app/views/security-policy/change-password/change-password.component.ts");
    /* harmony import */


    var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./change-password.routing.module */
    "./src/app/views/security-policy/change-password/change-password.routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var ChangePasswordModule = /*#__PURE__*/_createClass(function ChangePasswordModule() {
      _classCallCheck(this, ChangePasswordModule);
    });

    ChangePasswordModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_change_password_component__WEBPACK_IMPORTED_MODULE_5__["ChangePasswordComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_3__["FlexLayoutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_change_password_routing_module__WEBPACK_IMPORTED_MODULE_6__["changePasswordRoutes"])]
    })], ChangePasswordModule);
    /***/
  },

  /***/
  "./src/app/views/security-policy/change-password/change-password.routing.module.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/views/security-policy/change-password/change-password.routing.module.ts ***!
    \*****************************************************************************************/

  /*! exports provided: changePasswordRoutes */

  /***/
  function srcAppViewsSecurityPolicyChangePasswordChangePasswordRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "changePasswordRoutes", function () {
      return changePasswordRoutes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _change_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./change-password.component */
    "./src/app/views/security-policy/change-password/change-password.component.ts");

    var changePasswordRoutes = [{
      path: '',
      component: _change_password_component__WEBPACK_IMPORTED_MODULE_1__["ChangePasswordComponent"]
    }];
    /***/
  }
}]);
//# sourceMappingURL=views-security-policy-change-password-change-password-module-es5.js.map