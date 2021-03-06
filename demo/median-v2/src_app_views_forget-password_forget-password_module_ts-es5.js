(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_forget-password_forget-password_module_ts"], {
    /***/
    68264:
    /*!**************************************************!*\
      !*** ./src/app/shared/services/login.service.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginService": function LoginService() {
          return (
            /* binding */
            _LoginService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/config/app.constant */
      3118);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      53882); // import { any } from 'src/app/shared/models/user';
      // import  } from 'src/app/shared/models/login';
      // import { any } from '../security-policy/security-policy/security-dto';


      var _LoginService = /*#__PURE__*/function () {
        function _LoginService(http) {
          _classCallCheck(this, _LoginService);

          this.http = http;
          this.uri = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL;
          this.dashboardapi = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/dashboard';
          this.userapi = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/users';
          this.departmentname = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
          this.logouttime = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('');
        }

        _createClass(_LoginService, [{
          key: "getOtp",
          value: function getOtp(login) {
            return this.http.post("".concat(this.uri, "/login/otp"), login);
          }
        }, {
          key: "loginService",
          value: function loginService(login) {
            return this.http.post("".concat(this.uri, "/login/credentials"), login);
          }
        }, {
          key: "forgetPassword",
          value: function forgetPassword(login) {
            return this.http.post("".concat(this.uri, "/login/forgetPsw"), login);
          }
        }, {
          key: "fristTimePassword",
          value: function fristTimePassword(login) {
            return this.http.post("".concat(this.uri, "/user/passwordReset"), login);
          }
        }, {
          key: "getOtpForReset",
          value: function getOtpForReset(login) {
            return this.http.post("".concat(this.uri, "/users/otpForReset"), login);
          }
        }, {
          key: "userPasswordExpireNotif",
          value: function userPasswordExpireNotif(user_id) {
            return this.http.get("".concat(this.uri, "/login/pwdNotif/").concat(user_id));
          }
        }, {
          key: "fetchSecurityPolicyService",
          value: function fetchSecurityPolicyService() {
            return this.http.get("".concat(this.uri, "/securityPolicy/fetch"));
          }
        }, {
          key: "fetchMedUser",
          value: function fetchMedUser(userId) {
            return this.http.get("".concat(this.uri, "/login/getUserByUserId/").concat(userId));
          }
        }, {
          key: "settingdepartmentlogged",
          value: function settingdepartmentlogged(department, lastloggedin) {
            this.departmentname.next(department);
            this.logouttime.next(lastloggedin);
          }
        }, {
          key: "gettingloginTimeandDepartment",
          value: function gettingloginTimeandDepartment(userName) {
            return this.http.get("".concat(this.userapi, "/loganddept/").concat(userName));
          }
        }]);

        return _LoginService;
      }();

      _LoginService.??fac = function LoginService_Factory(t) {
        return new (t || _LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _LoginService.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({
        token: _LoginService,
        factory: _LoginService.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    31443:
    /*!**************************************************!*\
      !*** ./src/app/shared/services/toast.service.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ToastService": function ToastService() {
          return (
            /* binding */
            _ToastService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var ng2_izitoast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ng2-izitoast */
      27218);

      var _ToastService = /*#__PURE__*/function () {
        function _ToastService(iziToast) {
          _classCallCheck(this, _ToastService);

          this.iziToast = iziToast;
        }

        _createClass(_ToastService, [{
          key: "successMessage",
          value: function successMessage(title, msg) {
            this.iziToast.success({
              title: title,
              message: msg,
              layout: 2,
              balloon: false,
              position: "topRight",
              progressBarColor: "red",
              pauseOnHover: true
            });
          }
        }, {
          key: "errorMessage",
          value: function errorMessage(title, msg) {
            this.iziToast.error({
              title: title,
              message: msg,
              layout: 2,
              balloon: false,
              position: "topRight",
              progressBarColor: "red",
              pauseOnHover: true
            });
          }
        }, {
          key: "infoMessage",
          value: function infoMessage(title, msg) {
            this.iziToast.info({
              title: title,
              message: msg,
              layout: 2,
              balloon: false,
              position: "topRight",
              progressBarColor: "red",
              pauseOnHover: true
            });
          }
        }]);

        return _ToastService;
      }();

      _ToastService.??fac = function ToastService_Factory(t) {
        return new (t || _ToastService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](ng2_izitoast__WEBPACK_IMPORTED_MODULE_0__.Ng2IzitoastService));
      };

      _ToastService.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: _ToastService,
        factory: _ToastService.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    14020:
    /*!*************************************************************************!*\
      !*** ./src/app/views/forget-password/forget-password-routing.module.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ForgetPasswordRoutingModule": function ForgetPasswordRoutingModule() {
          return (
            /* binding */
            _ForgetPasswordRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _forget_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./forget-password.component */
      28241);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _forget_password_component__WEBPACK_IMPORTED_MODULE_0__.ForgetPasswordComponent
      }];

      var _ForgetPasswordRoutingModule = /*#__PURE__*/_createClass(function _ForgetPasswordRoutingModule() {
        _classCallCheck(this, _ForgetPasswordRoutingModule);
      });

      _ForgetPasswordRoutingModule.??fac = function ForgetPasswordRoutingModule_Factory(t) {
        return new (t || _ForgetPasswordRoutingModule)();
      };

      _ForgetPasswordRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: _ForgetPasswordRoutingModule
      });
      _ForgetPasswordRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](_ForgetPasswordRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    28241:
    /*!********************************************************************!*\
      !*** ./src/app/views/forget-password/forget-password.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ForgetPasswordComponent": function ForgetPasswordComponent() {
          return (
            /* binding */
            _ForgetPasswordComponent
          );
        },

        /* harmony export */
        "Login": function Login() {
          return (
            /* binding */
            _Login
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! crypto-js */
      95373);
      /* harmony import */


      var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/login.service */
      68264);
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      31443);
      /* harmony import */


      var src_app_shared_services_security_policy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/security-policy.service */
      10402);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function ForgetPasswordComponent_div_27_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r10.errorMsg);
        }
      }

      function ForgetPasswordComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](1, ForgetPasswordComponent_div_27_div_1_Template, 2, 1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r3.reactiveForm.get("password").errors.pattern);
        }
      }

      function ForgetPasswordComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" New Password Password must contain Minimum ", ctx_r4.minPass, " digits. ");
        }
      }

      function ForgetPasswordComponent_div_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" New Password must contain Maximum ", ctx_r5.maxPass, " digits. ");
        }
      }

      function ForgetPasswordComponent_div_37_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r11.errorMsg);
        }
      }

      function ForgetPasswordComponent_div_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](1, ForgetPasswordComponent_div_37_div_1_Template, 2, 1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r7.reactiveForm.get("confirmPassword").errors.pattern);
        }
      }

      function ForgetPasswordComponent_div_38_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" Confirm Password must contain Minimum ", ctx_r8.minPass, " digits. ");
        }
      }

      function ForgetPasswordComponent_div_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" Confirm Password must contain Maximum ", ctx_r9.maxPass, " digits. ");
        }
      }

      var _c0 = function _c0() {
        return ["/login"];
      };

      var _ForgetPasswordComponent = /*#__PURE__*/function () {
        function _ForgetPasswordComponent(router, route, apiService, fb, toastService, securityService) {
          var _this = this;

          _classCallCheck(this, _ForgetPasswordComponent);

          this.router = router;
          this.route = route;
          this.apiService = apiService;
          this.fb = fb;
          this.toastService = toastService;
          this.securityService = securityService;
          this.loginProcessing = false;
          this.login = new _Login();
          this.editable = false;
          this.errorMsg = "";
          this.hide = true;
          this.hideConfirm = true;
          this.modifyUserObject = new _Login();
          this.login1 = new _Login();
          this.otpBtn = false;
          this.submitBtn = false;
          this.route.queryParams.subscribe(function (params) {
            _this.modifyUserObject.username = params.userId;
          });
        }

        _createClass(_ForgetPasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.isReadOnly = false;
            this.button2 = true;
            this.reactiveForm = this.fb.group({
              userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(""),
              otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.passwordRegex), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(this.maxPass), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(this.minPass)])]),
              confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.passwordRegex), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(this.maxPass), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(this.minPass)])])
            });
            this.userId = localStorage.getItem("userIdForChangePassword");
            var a, b;
            this.securityService.fetchSecurityPolicyService().subscribe(function (resp) {
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

            this.securityService.fetchSecurityPolicyService().subscribe(function (resp) {
              _this3.security1 = resp;
              _this3.ucase = _this3.security1.pswdComplexUcase;
              _this3.lcase = _this3.security1.pswdComplexLcase;
              _this3.num = _this3.security1.pswdComplexNum;
              _this3.splc = _this3.security1.pswdComplexSplc;

              if (_this3.security1.pswdComplexUcase) {
                _this3.passwordRegex = "(?=[^A-Z]*[A-Z])";
                _this3.errorMsg = " UpperCase";
              }

              if (_this3.security1.pswdComplexLcase) {
                _this3.passwordRegex = _this3.passwordRegex + "(?=[^a-z]*[a-z])";

                if (_this3.errorMsg != null) {
                  _this3.errorMsg = _this3.errorMsg + ", LowerCase";
                } else {
                  _this3.errorMsg = _this3.errorMsg + " LowerCase";
                }
              }

              if (_this3.security1.pswdComplexNum) {
                _this3.passwordRegex = _this3.passwordRegex + "(?=[^0-9]*[0-9])";

                if (_this3.errorMsg != null) {
                  _this3.errorMsg = _this3.errorMsg + ", Number";
                } else {
                  _this3.errorMsg = _this3.errorMsg + " Number";
                }
              }

              if (_this3.security1.pswdComplexSplc) {
                _this3.passwordRegex = _this3.passwordRegex + "(?=[^!-@]*[!-@])";

                if (_this3.errorMsg != null) {
                  _this3.errorMsg = _this3.errorMsg + ", Special Character";
                } else {
                  _this3.errorMsg = _this3.errorMsg + " Special Character";
                }
              }

              _this3.passwordRegex = _this3.passwordRegex + ".{" + _this3.minPass + "," + _this3.maxPass + "}";
              _this3.errorMsg = "Password must contain atleast one " + _this3.errorMsg + ".";
              console.log(_this3.passwordRegex);
              _this3.reactiveForm = _this3.fb.group({
                userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(""),
                otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
                password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(_this3.passwordRegex), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(_this3.maxPass), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(_this3.minPass)])]),
                confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl("", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(_this3.passwordRegex), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(_this3.maxPass), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(_this3.minPass)])])
              });
            });
            console.log(this.minPass, this.maxPass);
            console.log("form", this.reactiveForm);
          }
        }, {
          key: "resetButton",
          value: function resetButton() {
            this.reactiveForm.reset();
          }
        }, {
          key: "reset",
          value: function reset(login) {
            var _this4 = this;

            if (!login.username) {
              this.toastService.infoMessage("Enter User Id.", "");
              return;
            }

            var encryptedAES = crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.encrypt(login.password, "@12#90!^*NPR*g&*()$34#$");
            var USERNAME = crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.encrypt(login.username, "@12#90!^*NPR*g&*()$34#$");
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

                if (_this4.var1[0] === "Login success.") {
                  _this4.otpBtn = true;
                  _this4.submitBtn = true;
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    text: "password Changed Successfully."
                  });
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    text: _this4.var1[0]
                  });
                }
              } else {
                _this4.spinnerbutton = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  text: "Choose Other Password or otp is invalid."
                });
              }
            });
          }
        }, {
          key: "getOtp",
          value: function getOtp(username) {
            var _this5 = this;

            this.loginProcessing = true;

            if (!username) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                text: "Enter User Id."
              });
              return;
            }

            var USERNAME = crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.encrypt(username, "@12#90!^*NPR*g&*()$34#$");
            var uname = USERNAME.toString();
            console.log(uname);
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

                _this5.toastService.successMessage("OTP sent successfully", "");
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  text: "Unable to find User details.Verify your userid."
                });
                _this5.button1 = false;
                _this5.button2 = true;
                _this5.isReadOnly = true;
                _this5.spinnerbutton = false;
              }
            }, function (error) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                text: "Server Error,Unable to connect server."
              });
            });
          }
        }, {
          key: "goHome",
          value: function goHome() {
            this.router.navigate(["/login"]);
          }
        }, {
          key: "changePassword",
          value: function changePassword(newPassword, confirmPassword, userId, otp) {
            var _this6 = this;

            console.log(newPassword, confirmPassword, userId, otp);

            if (newPassword != confirmPassword) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                text: "Password Not Matched."
              });
            } else {
              this.loginProcessing = true;
              var encryptedAES = crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.encrypt(newPassword, "@12#90!^*NPR*g&*()$34#$");
              var USERNAME = crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.encrypt(userId, "@12#90!^*NPR*g&*()$34#$");
              var data = encryptedAES.toString();
              var uname = USERNAME.toString();
              this.login.password = data;
              this.login.username = uname;
              this.login.otp = otp;
              console.log(this.login);
              this.apiService.forgetPassword(this.login).subscribe(function (res) {
                _this6.loginProcessing = false;
                _this6.res = res;
                console.log(_this6.res);

                if (_this6.res) {
                  // this.spinnerbutton = false;
                  if (_this6.res[0] === "Login success.") {
                    _this6.otpBtn = true;
                    _this6.submitBtn = true;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: "Password Changed Successfully."
                    });
                  }

                  if (res[0] == "You cannot use your previous password. Please choose another password") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire("You can not use your last " + _this6.security.pswdReuseAft + " passwords. Please choose another password.", "");
                  }

                  if (res[0] == "OTP is invalid") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: "Otp is invalid."
                    });
                  }

                  if (res[0] == "successfull") {
                    _this6.otpBtn = true;
                    _this6.submitBtn = true;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: "Password Changed Successfully."
                    });
                  }
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    text: "Choose Other Password or otp is invalid."
                  });
                }
              });
            }
          }
        }]);

        return _ForgetPasswordComponent;
      }();

      _ForgetPasswordComponent.??fac = function ForgetPasswordComponent_Factory(t) {
        return new (t || _ForgetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](src_app_shared_services_security_policy_service__WEBPACK_IMPORTED_MODULE_4__.SecurityPolicyService));
      };

      _ForgetPasswordComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({
        type: _ForgetPasswordComponent,
        selectors: [["npr-forget-password"]],
        decls: 51,
        vars: 11,
        consts: [[1, "mt-4"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "dbCardStyle", "fieldwidth"], [1, "pageTitle", "text-center", "mb-md-4", "mb-3"], [1, "row", "gy-4"], [1, "col-12"], [1, "formLbl"], [1, "colorRed"], ["id", "User Id", "placeholder", "User Id", "required", "", "value", "", "name", "userId", "formControlName", "userId", "oninput", "this.value = this.value.toUpperCase()", 1, "form-control"], ["user", ""], ["id", "Otp", "placeholder", "OTP", "required", "", "value", "", "name", "otp", "formControlName", "otp", 1, "form-control"], ["otp", ""], ["id", "password", "placeholder", "New Password", "required", "", "value", "", "name", "password", "formControlName", "password", 1, "form-control"], ["newPassword", ""], ["class", "invalid-feedback", 4, "ngIf"], ["id", "confirm password", "placeholder", "Confirm Password", "required", "", "value", "", "name", "confirmPassword", "formControlName", "confirmPassword", 1, "form-control"], ["confirmPassword", ""], [1, "col-lg-12"], [1, "row", "g-3", "pb-3", "pt-3"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "disabled", "click"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [1, "invalid-feedback"], [4, "ngIf"]],
        template: function ForgetPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "h2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](4, "Reset Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](8, "User ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](9, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](10, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](11, "input", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](13, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](14, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](15, "OTP");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](17, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](18, "input", 10, 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](20, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](21, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](22, "New Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](23, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](24, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](25, "input", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](27, ForgetPasswordComponent_div_27_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](28, ForgetPasswordComponent_div_28_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](29, ForgetPasswordComponent_div_29_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](30, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](31, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](32, "confirm password");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](33, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](34, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](35, "input", 15, 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](37, ForgetPasswordComponent_div_37_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](38, ForgetPasswordComponent_div_38_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](39, ForgetPasswordComponent_div_39_Template, 2, 1, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](40, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](41, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](42, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](43, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function ForgetPasswordComponent_Template_button_click_43_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r12);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](12);

              return ctx.getOtp(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](44, "Get OTP");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](45, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](46, "button", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function ForgetPasswordComponent_Template_button_click_46_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r12);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](26);

              var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](36);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](12);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????reference"](19);

              return ctx.changePassword(_r2.value, _r6.value, _r0.value, _r1.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](47, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](48, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](49, "a", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](50, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroup", ctx.reactiveForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.reactiveForm.get("password").touched && !ctx.reactiveForm.get("password").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.reactiveForm.get("password").hasError("minlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.reactiveForm.get("password").hasError("maxlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.reactiveForm.get("confirmPassword").touched && !ctx.reactiveForm.get("confirmPassword").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.reactiveForm.get("confirmPassword").hasError("minlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.reactiveForm.get("confirmPassword").hasError("maxlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", ctx.otpBtn);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", !ctx.reactiveForm.valid || ctx.submitBtn);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction0"](10, _c0));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JnZXQtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MifQ== */"]
      });

      var _Login = /*#__PURE__*/_createClass(function _Login() {
        _classCallCheck(this, _Login);
      });
      /***/

    },

    /***/
    82352:
    /*!*****************************************************************!*\
      !*** ./src/app/views/forget-password/forget-password.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ForgetPasswordModule": function ForgetPasswordModule() {
          return (
            /* binding */
            _ForgetPasswordModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./forget-password-routing.module */
      14020);
      /* harmony import */


      var _forget_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./forget-password.component */
      28241);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ForgetPasswordModule = /*#__PURE__*/_createClass(function _ForgetPasswordModule() {
        _classCallCheck(this, _ForgetPasswordModule);
      });

      _ForgetPasswordModule.??fac = function ForgetPasswordModule_Factory(t) {
        return new (t || _ForgetPasswordModule)();
      };

      _ForgetPasswordModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({
        type: _ForgetPasswordModule
      });
      _ForgetPasswordModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgetPasswordRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](_ForgetPasswordModule, {
          declarations: [_forget_password_component__WEBPACK_IMPORTED_MODULE_1__.ForgetPasswordComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgetPasswordRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_views_forget-password_forget-password_module_ts-es5.js.map