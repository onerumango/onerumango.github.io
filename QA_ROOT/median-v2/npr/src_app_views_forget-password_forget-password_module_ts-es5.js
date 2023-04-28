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

      _LoginService.ɵfac = function LoginService_Factory(t) {
        return new (t || _LoginService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _LoginService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _LoginService,
        factory: _LoginService.ɵfac,
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

      _ToastService.ɵfac = function ToastService_Factory(t) {
        return new (t || _ToastService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ng2_izitoast__WEBPACK_IMPORTED_MODULE_0__.Ng2IzitoastService));
      };

      _ToastService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _ToastService,
        factory: _ToastService.ɵfac,
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

      _ForgetPasswordRoutingModule.ɵfac = function ForgetPasswordRoutingModule_Factory(t) {
        return new (t || _ForgetPasswordRoutingModule)();
      };

      _ForgetPasswordRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _ForgetPasswordRoutingModule
      });
      _ForgetPasswordRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_ForgetPasswordRoutingModule, {
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


      var ng_otp_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ng-otp-input */
      50287);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      54364);

      var _c0 = ["ngOtpInput"];

      function ForgetPasswordComponent_img_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 32);
        }
      }

      function ForgetPasswordComponent_img_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 33);
        }
      }

      function ForgetPasswordComponent_div_35_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r14.errorMsg);
        }
      }

      function ForgetPasswordComponent_div_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ForgetPasswordComponent_div_35_div_1_Template, 2, 1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.reactiveForm.get("password").errors.pattern);
        }
      }

      function ForgetPasswordComponent_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" New Password Password must contain Minimum ", ctx_r6.minPass, " digits. ");
        }
      }

      function ForgetPasswordComponent_div_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" New Password must contain Maximum ", ctx_r7.maxPass, " digits. ");
        }
      }

      function ForgetPasswordComponent_img_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 32);
        }
      }

      function ForgetPasswordComponent_img_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 33);
        }
      }

      function ForgetPasswordComponent_div_52_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r15.errorMsg);
        }
      }

      function ForgetPasswordComponent_div_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ForgetPasswordComponent_div_52_div_1_Template, 2, 1, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r11.reactiveForm.get("confirmPassword").errors.pattern);
        }
      }

      function ForgetPasswordComponent_div_53_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Confirm Password must contain Minimum ", ctx_r12.minPass, " digits. ");
        }
      }

      function ForgetPasswordComponent_div_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" Confirm Password must contain Maximum ", ctx_r13.maxPass, " digits. ");
        }
      }

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
          this.config = {
            allowNumbersOnly: true,
            length: 6,
            isPasswordInput: false,
            disableAutoFocus: false,
            placeholder: "*",
            inputStyles: {
              width: "40px",
              height: "40px"
            }
          };
          this.loginProcessing = false;
          this.login = new _Login();
          this.editable = false;
          this.errorMsg = "";
          this.hide = true;
          this.hide1 = true;
          this.hideConfirm = true;
          this.modifyUserObject = new _Login();
          this.login1 = new _Login();
          this.otpBtn = false;
          this.submitBtn = false;
          this.getOtpButtonEnable = true;
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

              if (_this3.security1.pswdComplexUcase == "true") {
                _this3.passwordRegex = '(?=[^A-Z]*[A-Z])';
                _this3.errorMsg = ' UpperCase';
              }

              if (_this3.security1.pswdComplexLcase == "true") {
                _this3.passwordRegex = _this3.passwordRegex + '(?=[^a-z]*[a-z])';

                if (_this3.errorMsg != '') {
                  _this3.errorMsg = _this3.errorMsg + ', LowerCase';
                } else {
                  _this3.errorMsg = _this3.errorMsg + ' LowerCase';
                }
              }

              if (_this3.splc == "true") {
                _this3.passwordRegex = _this3.passwordRegex + '(?=.*[!@#$%^&*])';
                if (_this3.errorMsg != '') _this3.errorMsg = _this3.errorMsg + ", Special Character";else _this3.errorMsg = _this3.errorMsg + " Special Character";
              }

              if (_this3.security1.pswdComplexNum == "true") {
                _this3.passwordRegex = _this3.passwordRegex + '(?=[^0-9]*[0-9])';

                if (_this3.errorMsg != '') {
                  _this3.errorMsg = _this3.errorMsg + ', Number';
                } else {
                  _this3.errorMsg = _this3.errorMsg + ' Number';
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

            this.apiService.fetchMedUser(username).subscribe(function (response) {
              console.log(response);
              _this5.user = response;
              _this5.email = _this5.user.email;
              localStorage.setItem("userFromLogin", _this5.user.userId);
              sessionStorage.setItem("user_id", _this5.user.userId);
              var USERNAME = crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.encrypt(username, "@12#90!^*NPR*g&*()$34#$");
              var uname = USERNAME.toString();
              console.log(uname);
              _this5.spinnerbutton = true;
              _this5.passwordReset1 = uname;
              console.log("uname", uname);

              _this5.apiService.getOtpForReset(_this5.passwordReset1).subscribe(function (res) {
                _this5.loginProcessing = false;
                _this5["var"] = res;

                if (_this5["var"]) {
                  _this5.button1 = true;
                  _this5.button2 = false;
                  _this5.isReadOnly = true;
                  _this5.spinnerbutton = false;

                  _this5.toastService.successMessage("OTP sent successfully to " + _this5.email, "");

                  _this5.getOtpButtonEnable = false;
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    text: "Unable to find User details.Verify your userid."
                  });
                  _this5.button1 = false;
                  _this5.button2 = true;
                  _this5.isReadOnly = true;
                  _this5.spinnerbutton = false;
                }
              });
            }, function (err) {
              // Swal.fire(
              // {text:  "Server Error,Unable to connect server."}
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire(err.error.message);
            });
          }
        }, {
          key: "goHome",
          value: function goHome() {
            this.router.navigate(["/login"]);
          }
        }, {
          key: "onOtpChange",
          value: function onOtpChange(otp) {
            this.otp = otp;

            if (this.otp.length === 6) {
              this.reactiveForm.get('otp').setValue(this.otp);
            }
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

                  if (_this6.res[0] == "Time Expired") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: "This OTP is expired. Please click on Resend OTP to get a new OTP."
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
        }, {
          key: "exit",
          value: function exit() {
            localStorage.clear();
            sessionStorage.clear();
            this.router.navigate(['/session/login']);
          }
        }]);

        return _ForgetPasswordComponent;
      }();

      _ForgetPasswordComponent.ɵfac = function ForgetPasswordComponent_Factory(t) {
        return new (t || _ForgetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_security_policy_service__WEBPACK_IMPORTED_MODULE_4__.SecurityPolicyService));
      };

      _ForgetPasswordComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _ForgetPasswordComponent,
        selectors: [["npr-forget-password"]],
        viewQuery: function ForgetPasswordComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.ngOtpInput = _t.first);
          }
        },
        decls: 66,
        vars: 16,
        consts: [[1, "mt-4"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "dbCardStyle", "fieldwidth"], [1, "pageTitle", "text-center", "mb-md-4", "mb-3"], [1, "row", "gy-4"], [1, "col-12"], [1, "formLbl"], [1, "colorRed"], ["id", "User Id", "placeholder", "User Id", "required", "", "value", "", "name", "userId", "formControlName", "userId", "oninput", "this.value = this.value.toUpperCase()", 1, "form-control"], ["user", ""], [1, "mb-10", "px-md-10"], [1, "d-flex", "flex-wrap", "flex-stack"], ["inputControls", "9", 2, "font-size", "20px", 3, "config", "onInputChange"], ["ngOtpInput", ""], [1, "row"], [1, "col"], [1, "inputField"], [1, "inputField", "pwdFldCol", "d-flex"], ["id", "password", "placeholder", "New Password", "required", "", "type", "password", "value", "", "name", "password", "formControlName", "password", 1, "form-control", 3, "type"], ["newPassword", ""], ["toggle", "#pwdFld", 1, "alignSelf", 3, "click"], ["class", "showPwd", "src", "assets/images/show-icon.svg", "alt", "...", 4, "ngIf"], ["class", "hidePwd", "src", "assets/images/hide-icon.svg", "alt", "...", 4, "ngIf"], ["class", "invalid-feedback", 4, "ngIf"], ["id", "confirm password", "placeholder", "Confirm Password", "required", "", "value", "", "name", "confirmPassword", "formControlName", "confirmPassword", 1, "form-control", 3, "type"], ["confirmPassword", ""], [1, "col-lg-12"], [1, "row", "g-3", "pb-3", "pt-3", "justify"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "click"], ["src", "assets/images/show-icon.svg", "alt", "...", 1, "showPwd"], ["src", "assets/images/hide-icon.svg", "alt", "...", 1, "hidePwd"], [1, "invalid-feedback"], [4, "ngIf"]],
        template: function ForgetPasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Reset Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "User ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 8, 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "OTP");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "ng-otp-input", 12, 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onInputChange", function ForgetPasswordComponent_Template_ng_otp_input_onInputChange_19_listener($event) {
              return ctx.onOtpChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "New Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "input", 18, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ForgetPasswordComponent_Template_span_click_32_listener() {
              return ctx.hide = !ctx.hide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, ForgetPasswordComponent_img_33_Template, 1, 0, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, ForgetPasswordComponent_img_34_Template, 1, 0, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, ForgetPasswordComponent_div_35_Template, 2, 1, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](36, ForgetPasswordComponent_div_36_Template, 2, 1, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, ForgetPasswordComponent_div_37_Template, 2, 1, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Confirm Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "input", 24, 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "span", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ForgetPasswordComponent_Template_span_click_49_listener() {
              return ctx.hide1 = !ctx.hide1;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, ForgetPasswordComponent_img_50_Template, 1, 0, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, ForgetPasswordComponent_img_51_Template, 1, 0, "img", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](52, ForgetPasswordComponent_div_52_Template, 2, 1, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](53, ForgetPasswordComponent_div_53_Template, 2, 1, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, ForgetPasswordComponent_div_54_Template, 2, 1, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "button", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ForgetPasswordComponent_Template_button_click_58_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](12);

              return ctx.getOtp(_r0.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "Get OTP");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](60, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ForgetPasswordComponent_Template_button_click_61_listener() {
              _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);

              var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](31);

              var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](48);

              var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](12);

              return ctx.changePassword(_r2.value, _r8.value, _r0.value, ctx.otp);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "a", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ForgetPasswordComponent_Template_a_click_64_listener() {
              return ctx.exit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](65, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.reactiveForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("config", ctx.config);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx.hide ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.hide);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hide);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.reactiveForm.get("password").touched && !ctx.reactiveForm.get("password").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.reactiveForm.get("password").hasError("minlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.reactiveForm.get("password").hasError("maxlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx.hide1 ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.hide1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hide1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.reactiveForm.get("confirmPassword").touched && !ctx.reactiveForm.get("confirmPassword").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.reactiveForm.get("confirmPassword").hasError("minlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.reactiveForm.get("confirmPassword").hasError("maxlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.otpBtn || !ctx.getOtpButtonEnable);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.reactiveForm.valid || ctx.submitBtn);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, ng_otp_input__WEBPACK_IMPORTED_MODULE_8__.NgOtpInputComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf],
        styles: ["img[_ngcontent-%COMP%], svg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNCQUFBO0FBQ0oiLCJmaWxlIjoiZm9yZ2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW1nLCBzdmcge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTsgXHJcbn1cclxuIl19 */"]
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


      var ng_otp_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng-otp-input */
      50287);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ForgetPasswordModule = /*#__PURE__*/_createClass(function _ForgetPasswordModule() {
        _classCallCheck(this, _ForgetPasswordModule);
      });

      _ForgetPasswordModule.ɵfac = function ForgetPasswordModule_Factory(t) {
        return new (t || _ForgetPasswordModule)();
      };

      _ForgetPasswordModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _ForgetPasswordModule
      });
      _ForgetPasswordModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgetPasswordRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, ng_otp_input__WEBPACK_IMPORTED_MODULE_5__.NgOtpInputModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_ForgetPasswordModule, {
          declarations: [_forget_password_component__WEBPACK_IMPORTED_MODULE_1__.ForgetPasswordComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _forget_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgetPasswordRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule, ng_otp_input__WEBPACK_IMPORTED_MODULE_5__.NgOtpInputModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_views_forget-password_forget-password_module_ts-es5.js.map