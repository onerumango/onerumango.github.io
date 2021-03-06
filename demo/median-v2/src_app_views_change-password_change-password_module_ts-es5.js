(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_change-password_change-password_module_ts"], {
    /***/
    5551:
    /*!**************************************************************!*\
      !*** ./src/app/views/change-password/change-password-dto.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangePasswordDTO": function ChangePasswordDTO() {
          return (
            /* binding */
            _ChangePasswordDTO
          );
        },

        /* harmony export */
        "ChangePasswordRespDTO": function ChangePasswordRespDTO() {
          return (
            /* binding */
            _ChangePasswordRespDTO
          );
        }
        /* harmony export */

      });

      var _ChangePasswordDTO = /*#__PURE__*/_createClass(function _ChangePasswordDTO() {
        _classCallCheck(this, _ChangePasswordDTO);
      });

      var _ChangePasswordRespDTO = /*#__PURE__*/_createClass(function _ChangePasswordRespDTO() {
        _classCallCheck(this, _ChangePasswordRespDTO);
      });
      /***/

    },

    /***/
    78250:
    /*!*************************************************************************!*\
      !*** ./src/app/views/change-password/change-password-routing.module.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangePasswordRoutingModule": function ChangePasswordRoutingModule() {
          return (
            /* binding */
            _ChangePasswordRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _change_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./change-password.component */
      87654);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _change_password_component__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordComponent
      }];

      var _ChangePasswordRoutingModule = /*#__PURE__*/_createClass(function _ChangePasswordRoutingModule() {
        _classCallCheck(this, _ChangePasswordRoutingModule);
      });

      _ChangePasswordRoutingModule.??fac = function ChangePasswordRoutingModule_Factory(t) {
        return new (t || _ChangePasswordRoutingModule)();
      };

      _ChangePasswordRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: _ChangePasswordRoutingModule
      });
      _ChangePasswordRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](_ChangePasswordRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    87654:
    /*!********************************************************************!*\
      !*** ./src/app/views/change-password/change-password.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangePasswordComponent": function ChangePasswordComponent() {
          return (
            /* binding */
            _ChangePasswordComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _change_password_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./change-password-dto */
      5551);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var crypto_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! crypto-js */
      95373);
      /* harmony import */


      var crypto_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_services_security_policy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/security-policy.service */
      10402);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function ChangePasswordComponent_img_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "img", 25);
        }
      }

      function ChangePasswordComponent_img_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "img", 26);
        }
      }

      function ChangePasswordComponent_img_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "img", 25);
        }
      }

      function ChangePasswordComponent_img_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "img", 26);
        }
      }

      function ChangePasswordComponent_div_30_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r15.errorMsg);
        }
      }

      function ChangePasswordComponent_div_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](1, ChangePasswordComponent_div_30_div_1_Template, 2, 1, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r6.userForm.get("newPassword").errors.pattern);
        }
      }

      function ChangePasswordComponent_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" New Password must contain Minimum ", ctx_r7.minPass, " digits. ");
        }
      }

      function ChangePasswordComponent_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" New Password must contain Maximum ", ctx_r8.maxPass, " digits. ");
        }
      }

      function ChangePasswordComponent_img_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "img", 25);
        }
      }

      function ChangePasswordComponent_img_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "img", 26);
        }
      }

      function ChangePasswordComponent_div_44_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r16.errorMsg);
        }
      }

      function ChangePasswordComponent_div_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](1, ChangePasswordComponent_div_44_div_1_Template, 2, 1, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r12.userForm.get("confirmPassword").errors.pattern);
        }
      }

      function ChangePasswordComponent_div_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" Confirm Password must contain Minimum ", ctx_r13.minPass, " digits. ");
        }
      }

      function ChangePasswordComponent_div_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" Confirm Password must contain Maximum ", ctx_r14.maxPass, " digits. ");
        }
      }

      var _c0 = function _c0() {
        return ["/dashboard"];
      };

      var _ChangePasswordComponent = /*#__PURE__*/function () {
        function _ChangePasswordComponent(api, fb, router, apiService) {
          _classCallCheck(this, _ChangePasswordComponent);

          this.api = api;
          this.fb = fb;
          this.router = router;
          this.apiService = apiService;
          this.changePassword = new _change_password_dto__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordDTO();
          this.enableLoader = false;
          this.userObj = new _change_password_dto__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordDTO(); // added by vidya for issue id 776

          this.hide1 = true;
          this.hide = true;
          this.hide2 = true; // userId: string;
          // oldPassword: string;
          // newPassword: string;
          // confirmPassword: string;
          // otp: string;

          this.submit = true;
        }

        _createClass(_ChangePasswordComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.loggedInUser = localStorage.getItem('userFromLogin');
            this.otpEnableFlag = false;
            var a, b;
            this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
              userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
              oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
              newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.passwordRegex), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(this.maxPass), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(this.minPass)])]),
              confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
              otp: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required)
            });
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
              _this2.errorMsg = '';
              _this2.passwordRegex = '';
              console.log("Upper case", _this2.ucase);
              console.log("Lower case", _this2.lcase);
              console.log("num case", _this2.num);
              console.log("splc case", _this2.splc);

              if (_this2.security1.pswdComplexUcase == "true") {
                _this2.passwordRegex = '(?=[^A-Z]*[A-Z])';
                _this2.errorMsg = ' UpperCase';
              }

              if (_this2.security1.pswdComplexLcase == "true") {
                _this2.passwordRegex = _this2.passwordRegex + '(?=[^a-z]*[a-z])';

                if (_this2.errorMsg != '') {
                  _this2.errorMsg = _this2.errorMsg + ', LowerCase';
                } else {
                  _this2.errorMsg = _this2.errorMsg + ' LowerCase';
                }
              } // if (this.security1.pswdComplexSplc=="true") {
              //   this.passwordRegex = this.passwordRegex + '(?=[^!-@]*[!-@])';
              //   if (this.errorMsg != '') {
              //     this.errorMsg = this.errorMsg + ', Special Character';
              //   }
              //   else {
              //     this.errorMsg = this.errorMsg + ' Special Character';
              //   }
              // }


              if (_this2.splc == "true") {
                _this2.passwordRegex = _this2.passwordRegex + '(?=.*[!@#$%^&*])';
                if (_this2.errorMsg != '') _this2.errorMsg = _this2.errorMsg + ", Special Character";else _this2.errorMsg = _this2.errorMsg + " Special Character";
              }

              if (_this2.security1.pswdComplexNum == "true") {
                _this2.passwordRegex = _this2.passwordRegex + '(?=[^0-9]*[0-9])';

                if (_this2.errorMsg != '') {
                  _this2.errorMsg = _this2.errorMsg + ', Number';
                } else {
                  _this2.errorMsg = _this2.errorMsg + ' Number';
                }
              }

              _this2.passwordRegex = _this2.passwordRegex + '.{' + _this2.minPass + ',' + _this2.maxPass + '}'; // this.passwordRegex = "(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=[^!-@]*[!-@]).{10,15}";

              _this2.errorMsg = 'Password must contain atleast one ' + _this2.errorMsg + '.';
              console.log(_this2.passwordRegex); // ---------- Password Policy Implementation (END) ----------

              _this2.userForm = _this2.fb.group({
                // password: new FormControl('', [Validators.required, Validators.pattern(this.passwordPattern)]),
                // newPassword: new FormControl('', [Validators.required,
                // Validators.compose([Validators.pattern(this.passwordRegex),
                // Validators.maxLength(this.maxPass),
                // Validators.minLength(this.minPass)])]),
                newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(_this2.passwordRegex), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(_this2.maxPass), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(_this2.minPass)])]),
                oldPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
                confirmPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required)
              });
            });
            console.log(this.minPass, this.maxPass);
            console.log('form', this.userForm);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this3 = this;

            this.changePassword.userId = this.loggedInUser;
            this.changePassword.newPassword = this.userForm.get('newPassword').value;
            this.changePassword.oldPassword = this.userForm.get('oldPassword').value;
            this.changePassword.confirmPassword = this.userForm.get('confirmPassword').value; // this.changePassword.otp=this.userForm.get('otp').value;

            if (this.changePassword.newPassword != this.changePassword.confirmPassword) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                text: 'New Password and Confirm Password values are not same ',
                icon: 'error'
              });
            } else if (!this.changePassword.newPassword || !this.changePassword.confirmPassword || !this.changePassword.oldPassword) {
              console.log("inside else if");
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                text: 'Please enter all the fields ',
                icon: 'info'
              });
            } else {
              // if (this.changePassword.newPassword === null || this.changePassword.confirmPassword === null || this.changePassword.oldPassword === null) {
              //   Swal.fire({
              //     title: 'Oops...',
              //     text: 'Please enter all the fields !!!',
              //   });
              // }
              this.changePassword.userId = this.loggedInUser;
              var encryptedAES = crypto_js__WEBPACK_IMPORTED_MODULE_2__.AES.encrypt(this.changePassword.newPassword, "@12#90!^*NPR*g&*()$34#$");
              var USERNAME = crypto_js__WEBPACK_IMPORTED_MODULE_2__.AES.encrypt(this.changePassword.userId, "@12#90!^*NPR*g&*()$34#$");
              var old = crypto_js__WEBPACK_IMPORTED_MODULE_2__.AES.encrypt(this.changePassword.oldPassword, "@12#90!^*NPR*g&*()$34#$");
              var data = encryptedAES.toString();
              var uname = USERNAME.toString();
              var oldPassword = encryptedAES.toString(); // console.log(data);

              this.changePassword.newPassword = data;
              this.changePassword.userId = uname; // this.changePassword.oldPassword=oldPassword;

              console.log(this.changePassword);
              this.enableLoader = true;
              this.api.changePasswordService(this.changePassword).subscribe(function (resp) {
                _this3.var1 = resp; // this.changePasswordRespDTO = resp;

                console.log(resp[0]); // //console.log('changePasswordRespDTO :' );
                // //console.log( this.changePasswordRespDTO);
                // this.enableLoader = false;

                if (resp == "You cannot use your previous password. Please choose another password") {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    title: "You can not use your last " + _this3.security.pswdReuseAft + " passwords. Please choose another password.",
                    icon: 'error'
                  });
                }

                if (resp == "Incorrect old Password") {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    title: "Incorrect old password.",
                    icon: "error"
                  });
                }

                if (resp == "successfull") {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    title: "Password Changed Successfully.",
                    icon: 'success'
                  });
                  _this3.submit = false;
                } //         // if(resp === true){
                //         //   this.otpEnableFlag = true;
                //         // }
                //         if(resp === true){
                //           Swal.fire(
                //             'You Changed The Password ',
                //           );
                //           this.router.navigate(["/dashboard"]);
                //         }

              });
            }
          }
        }]);

        return _ChangePasswordComponent;
      }();

      _ChangePasswordComponent.??fac = function ChangePasswordComponent_Factory(t) {
        return new (t || _ChangePasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](src_app_shared_services_security_policy_service__WEBPACK_IMPORTED_MODULE_4__.SecurityPolicyService));
      };

      _ChangePasswordComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({
        type: _ChangePasswordComponent,
        selectors: [["npr-change-password"]],
        decls: 55,
        vars: 20,
        consts: [[1, "mt-4"], [1, "pageTitleCol"], [1, "pageTitle"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "dbCardStyle", "fieldwidth", 2, "width", "400px"], [3, "disabled"], [1, "row", "gy-4"], [1, "col-12"], [1, "formLbl"], [1, "colorRed"], [1, "d-flex"], ["id", "oldPassword", "placeholder", "Old Password", "required", "", "value", "", "name", "oldPassword", "formControlName", "oldPassword", 1, "form-control", 3, "type"], ["newPassword", ""], ["toggle", "#pwdFld", 1, "visibility", 3, "click"], ["class", "showPwd", "src", "assets/images/show-icon.svg", "alt", "...", 4, "ngIf"], ["class", "hidePwd", "src", "assets/images/hide-icon.svg", "alt", "...", 4, "ngIf"], ["id", "password", "placeholder", "New Password", "required", "", "value", "", "name", "password", "formControlName", "newPassword", 1, "form-control", 3, "type"], ["class", "invalid-feedback", 4, "ngIf"], ["id", "confirm password", "placeholder", "Confirm Password", "required", "", "value", "", "name", "confirmPassword", "formControlName", "confirmPassword", 1, "form-control", 3, "type"], ["confirmPassword", ""], [1, "col-lg-12", 2, "margin-left", "40%"], [1, "row", "g-3", "pb-3", "pt-3"], [1, "col-auto"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["src", "assets/images/show-icon.svg", "alt", "...", 1, "showPwd"], ["src", "assets/images/hide-icon.svg", "alt", "...", 1, "hidePwd"], [1, "invalid-feedback"], [4, "ngIf"]],
        template: function ChangePasswordComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](3, "Password Management");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "fieldset", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](9, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](10, "Old Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](11, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](12, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](13, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](14, "input", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function ChangePasswordComponent_Template_span_click_16_listener() {
              return ctx.hide = !ctx.hide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](17, ChangePasswordComponent_img_17_Template, 1, 0, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](18, ChangePasswordComponent_img_18_Template, 1, 0, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](19, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](20, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](21, "New Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](22, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](23, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](24, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](25, "input", 16, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](27, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function ChangePasswordComponent_Template_span_click_27_listener() {
              return ctx.hide1 = !ctx.hide1;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](28, ChangePasswordComponent_img_28_Template, 1, 0, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](29, ChangePasswordComponent_img_29_Template, 1, 0, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](30, ChangePasswordComponent_div_30_Template, 2, 1, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](31, ChangePasswordComponent_div_31_Template, 2, 1, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](32, ChangePasswordComponent_div_32_Template, 2, 1, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](33, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](34, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](35, "Confirm Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](36, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](37, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](38, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](39, "input", 18, 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](41, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function ChangePasswordComponent_Template_span_click_41_listener() {
              return ctx.hide2 = !ctx.hide2;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](42, ChangePasswordComponent_img_42_Template, 1, 0, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](43, ChangePasswordComponent_img_43_Template, 1, 0, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](44, ChangePasswordComponent_div_44_Template, 2, 1, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](45, ChangePasswordComponent_div_45_Template, 2, 1, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](46, ChangePasswordComponent_div_46_Template, 2, 1, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](47, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](48, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](49, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](50, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function ChangePasswordComponent_Template_button_click_50_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](51, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](52, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](53, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](54, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroup", ctx.userForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", !ctx.submit);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("type", ctx.hide ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", !ctx.hide);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.hide);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("type", ctx.hide1 ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", !ctx.hide1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.hide1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.userForm.get("newPassword").touched && !ctx.userForm.get("newPassword").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.userForm.get("newPassword").hasError("minlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.userForm.get("newPassword").hasError("maxlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("type", ctx.hide2 ? "password" : "text");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", !ctx.hide2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.hide2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.userForm.get("confirmPassword").touched && !ctx.userForm.get("confirmPassword").valid);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.userForm.get("confirmPassword").hasError("minlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.userForm.get("confirmPassword").hasError("maxlength"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", !ctx.userForm.valid || !ctx.submit);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction0"](19, _c0));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref],
        styles: [".visibility[_ngcontent-%COMP%] {\n  margin-left: 10px;\n  margin-top: 5px;\n}\n\n.dbCardStylePassword[_ngcontent-%COMP%] {\n  max-width: 400px;\n  margin: 0 auto;\n  padding: 30px 65px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZS1wYXNzd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFFSiIsImZpbGUiOiJjaGFuZ2UtcGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudmlzaWJpbGl0eXtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcbi5kYkNhcmRTdHlsZVBhc3N3b3Jke1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcGFkZGluZzogMzBweCA2NXB4O1xyXG59Il19 */"]
      });
      /***/
    },

    /***/
    87015:
    /*!*****************************************************************!*\
      !*** ./src/app/views/change-password/change-password.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ChangePasswordModule": function ChangePasswordModule() {
          return (
            /* binding */
            _ChangePasswordModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _change_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./change-password-routing.module */
      78250);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _change_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./change-password.component */
      87654);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ChangePasswordModule = /*#__PURE__*/_createClass(function _ChangePasswordModule() {
        _classCallCheck(this, _ChangePasswordModule);
      });

      _ChangePasswordModule.??fac = function ChangePasswordModule_Factory(t) {
        return new (t || _ChangePasswordModule)();
      };

      _ChangePasswordModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({
        type: _ChangePasswordModule
      });
      _ChangePasswordModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _change_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](_ChangePasswordModule, {
          declarations: [_change_password_component__WEBPACK_IMPORTED_MODULE_1__.ChangePasswordComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _change_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangePasswordRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.ReactiveFormsModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_views_change-password_change-password_module_ts-es5.js.map