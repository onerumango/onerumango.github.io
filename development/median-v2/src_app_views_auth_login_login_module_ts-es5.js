(function () {
  "use strict";

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_auth_login_login_module_ts"], {
    /***/
    65336:
    /*!*****************************************************!*\
      !*** ./src/@npr/animations/fade-in-up.animation.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "fadeInUpAnimation": function fadeInUpAnimation() {
          return (
            /* binding */
            _fadeInUpAnimation
          );
        },

        /* harmony export */
        "fadeInUp400ms": function fadeInUp400ms() {
          return (
            /* binding */
            _fadeInUp400ms
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/animations */
      97175);

      function _fadeInUpAnimation(duration) {
        return (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeInUp', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [(0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
          transform: 'translateY(20px)',
          opacity: 0
        }), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)("".concat(duration, "ms cubic-bezier(0.35, 0, 0.25, 1)"), (0, _angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
          transform: 'translateY(0)',
          opacity: 1
        }))])]);
      }

      var _fadeInUp400ms = _fadeInUpAnimation(400);
      /***/

    },

    /***/
    8888:
    /*!***********************************************!*\
      !*** ./src/app/views/auth/login/DEMO_USER.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DEMO_USER": function DEMO_USER() {
          return (
            /* binding */
            _DEMO_USER
          );
        }
        /* harmony export */

      });

      var _DEMO_USER = /*#__PURE__*/_createClass(function _DEMO_USER() {
        _classCallCheck(this, _DEMO_USER);

        this.currentUser = "SAKTHI"; // this.userPermissions = { "screenAndPermissionsDTO": [{ "permissions": "1111111111", "screenId": 2, "screenName": "Users" }, { "permissions": "1111111111", "screenId": 3, "screenName": "Roles" }, { "permissions": "1111111111", "screenId": 4, "screenName": "Audit Logs" }, { "permissions": "1111111111", "screenId": 5, "screenName": "Password Policy" }, { "permissions": "1111111111", "screenId": 6, "screenName": "Process Monitoring" }, { "permissions": "1111111111", "screenId": 7, "screenName": "External Systems" }, { "permissions": "1111111111", "screenId": 8, "screenName": "Process Code Mapping" }, { "permissions": "1111111111", "screenId": 9, "screenName": "Excel Mapping" }, { "permissions": "1111111111", "screenId": 10, "screenName": "Upload Excel" }, { "permissions": "1111111111", "screenId": 11, "screenName": "Authorize Excel" }, { "permissions": "1111111111", "screenId": 12, "screenName": "Rejection Queue" }, { "permissions": "1111111111", "screenId": 13, "screenName": "Authorize Modifications" }, { "permissions": "1111111111", "screenId": 14, "screenName": "Excel Processing Summary" }, { "permissions": "1111111111", "screenId": 15, "screenName": "Customer search" }, { "permissions": "1111111111", "screenId": 16, "screenName": "Email-Management" }, { "permissions": "1111111111", "screenId": 17, "screenName": "Transaction Code Maint" }, { "permissions": "1111111111", "screenId": 18, "screenName": "Initiate Account Closure" }, { "permissions": "1111111111", "screenId": 19, "screenName": "Process Account Closure" }, { "permissions": "1111111111", "screenId": 20, "screenName": "Acc Closure Maintenance" }, { "permissions": "1111111111", "screenId": 21, "screenName": "Charge Maintenance" }, { "permissions": "1111111111", "screenId": 22, "screenName": "GlobalCodeMaintenance" }, { "permissions": "1111111111", "screenId": 23, "screenName": "UserCodeMaintenance" }, { "permissions": "1111111111", "screenId": 24, "screenName": "AcumenJournal" }, { "permissions": "1111111111", "screenId": 25, "screenName": "Treasury Reference" }, { "permissions": "1111111111", "screenId": 26, "screenName": "Cash Payments" }, { "permissions": "1111111111", "screenId": 27, "screenName": "Authorize Cash Payments" }], "labels": [{ "labelId": 1, "labelName": "NEW", "labelDescription": "New", "language": "EN" }, { "labelId": 2, "labelName": "EDIT", "labelDescription": "Edit", "language": "EN" }, { "labelId": 3, "labelName": "DELETE", "labelDescription": "Delete", "language": "EN" }, { "labelId": 4, "labelName": "CLOSE", "labelDescription": "Close", "language": "EN" }, { "labelId": 5, "labelName": "REOPEN", "labelDescription": "Reopen", "language": "EN" }, { "labelId": 6, "labelName": "UNLOCK", "labelDescription": "Unlock", "language": "EN" }, { "labelId": 7, "labelName": "PRINT", "labelDescription": "Print", "language": "EN" }, { "labelId": 8, "labelName": "AUTH", "labelDescription": "Auth", "language": "EN" }, { "labelId": 9, "labelName": "VIEW", "labelDescription": "View", "language": "EN" }, { "labelId": 10, "labelName": "REJECT", "labelDescription": "Reject", "language": "EN" }] };

        this.department = null;
        this.LoggedInUser = "SAKTHI";
        this.userobj = "28/12/2021 10:51:30";
        this.usercompleteobj = {
          "pwdChangeDate": 1640597099000,
          "intime": "09:00",
          "outtime": "22:55",
          "userId": "SAKTHI",
          "verifiedStatus": "A",
          "creatorDtStamp": 1593082262162,
          "creatorId": "TEST1",
          "email": "sakthivel.m@rumango.com",
          "emailNotification": null,
          "encryptedPassword": "$2a$10$7qdgqLg6lANIjAIu/45I6.s/ydmtHjzjbhEkN25H1e779uaiWtyue",
          "failedAttempts": 0,
          "verifiedOnce": "Y",
          "firstTimeLogin": "true",
          "ldapUserId": null,
          "logoutTime": "Tue Dec 28 10:51:28 IST 2021",
          "mobile": "1234567890",
          "msadUserId": null,
          "newRoleForUser": ["ROLE_NEW_ADMIN"],
          "passwordAge": 54563535663,
          "recordStatus": "O",
          "smsNotification": null,
          "updatedAt": null,
          "updatedBy": null,
          "userName": "PRABHAT",
          "userRole": "ROLE1",
          "verifierDtStamp": null,
          "verifierId": null,
          "versionNo": 1,
          "modNo": 6,
          "disableUser": "N",
          "statusForUser": "Enable",
          "department": null
        };
      });
      /***/

    },

    /***/
    93140:
    /*!**********************************************************!*\
      !*** ./src/app/views/auth/login/login-routing.module.ts ***!
      \**********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginRoutingModule": function LoginRoutingModule() {
          return (
            /* binding */
            _LoginRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login.component */
      2783);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var loginRoutes = [{
        path: "",
        children: [{
          path: 'login',
          component: _login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
        }]
      }];

      var _LoginRoutingModule = /*#__PURE__*/_createClass(function _LoginRoutingModule() {
        _classCallCheck(this, _LoginRoutingModule);
      });

      _LoginRoutingModule.??fac = function LoginRoutingModule_Factory(t) {
        return new (t || _LoginRoutingModule)();
      };

      _LoginRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
        type: _LoginRoutingModule
      });
      _LoginRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(loginRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["????setNgModuleScope"](_LoginRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    2783:
    /*!*****************************************************!*\
      !*** ./src/app/views/auth/login/login.component.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginComponent": function LoginComponent() {
          return (
            /* binding */
            _LoginComponent
          );
        },

        /* harmony export */
        "User": function User() {
          return (
            /* binding */
            _User
          );
        },

        /* harmony export */
        "SecurityDto": function SecurityDto() {
          return (
            /* binding */
            _SecurityDto
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_npr_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/@npr/animations/fade-in-up.animation */
      65336);
      /* harmony import */


      var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! crypto-js */
      95373);
      /* harmony import */


      var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_services_jwt_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/jwt-auth.service */
      79389);
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      31443);
      /* harmony import */


      var src_app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/local-store.service */
      69122);
      /* harmony import */


      var _DEMO_USER__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./DEMO_USER */
      8888);
      /* harmony import */


      var ng2_izitoast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng2-izitoast */
      27218);
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ngx-spinner */
      55314);
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      77382);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var ng_otp_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng-otp-input */
      50287);

      var _c0 = ["ngOtpInput"];

      function LoginComponent_div_7_img_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](0, "img", 35);
        }
      }

      function LoginComponent_div_7_img_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](0, "img", 36);
        }
      }

      var _c1 = function _c1() {
        return ["/forget-password"];
      };

      function LoginComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](2, "h2", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](3, "Log in");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](4, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](5, "form", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](6, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](7, "label", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](8, "User ID*");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](9, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](10, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](11, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](12, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](13, "label", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](14, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](15, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](16, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](17, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](18, "span", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????listener"]("click", function LoginComponent_div_7_Template_span_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????restoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["????nextContext"]();

            return ctx_r4.hide = !ctx_r4.hide;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????template"](19, LoginComponent_div_7_img_19_Template, 1, 0, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????template"](20, LoginComponent_div_7_img_20_Template, 1, 0, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](21, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](22, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????listener"]("click", function LoginComponent_div_7_Template_button_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????restoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["????nextContext"]();

            return ctx_r6.getOtp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](23, "Get OTP");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](24, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](25, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](26, "Forgot Password?");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](27, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](28, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](29, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????pipe"](31, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("formGroup", ctx_r0.signinForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("type", ctx_r0.hide ? "password" : "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("ngIf", !ctx_r0.hide);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("ngIf", ctx_r0.hide);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("disabled", !ctx_r0.signinForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["????pureFunction0"](10, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????textInterpolate1"]("MEDIAN ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["????pipeBind2"](31, 7, ctx_r0.copyRightDate, "YYYY"), " - Connecting Systems");
        }
      }

      function LoginComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](1, "form", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](2, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](3, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](4, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](5, "h1", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](6, "Two Step Verification");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](7, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](8, "Enter the verification code we sent to");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](9, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](11, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](12, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](13, "Type your 6 digit security code");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](14, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](15, "ng-otp-input", 46, 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????listener"]("onInputChange", function LoginComponent_div_9_Template_ng_otp_input_onInputChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????restoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["????nextContext"]();

            return ctx_r8.onOtpChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](17, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](18, "button", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????listener"]("click", function LoginComponent_div_9_Template_button_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????restoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["????nextContext"]();

            return ctx_r10.signin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](19, " Verify ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](20, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????listener"]("click", function LoginComponent_div_9_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????restoreView"](_r9);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["????nextContext"]();

            return ctx_r11.resendOtpMethod();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](21, " Resend OTP ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](22, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????listener"]("click", function LoginComponent_div_9_Template_button_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????restoreView"](_r9);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["????nextContext"]();

            return ctx_r12.backToLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????text"](23, " Exit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????textInterpolate"](ctx_r1.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("config", ctx_r1.config);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("disabled", !ctx_r1.isValid);
        }
      }

      var _LoginComponent = /*#__PURE__*/function () {
        // currentDate: any;
        // changePwdDate: any;
        function _LoginComponent(router, jwtAuth, toastService, fb, cd, ls, demoUser, iziToast, spinner, apiService, roleService) {
          _classCallCheck(this, _LoginComponent);

          this.router = router;
          this.jwtAuth = jwtAuth;
          this.toastService = toastService;
          this.fb = fb;
          this.cd = cd;
          this.ls = ls;
          this.demoUser = demoUser;
          this.iziToast = iziToast;
          this.spinner = spinner;
          this.apiService = apiService;
          this.roleService = roleService;
          this.hide = true;
          this.copyRightDate = new Date();
          this.showOtpComponent = false;
          this.inputType = "password";
          this.visible = false;
          this.config = {
            allowNumbersOnly: true,
            length: 6,
            isPasswordInput: false,
            disableAutoFocus: false,
            placeholder: "*",
            inputStyles: {
              width: "50px",
              height: "50px"
            }
          };
          this.arrayOfAuthStatus = [];
        }

        _createClass(_LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.signinForm = this.fb.group({
              username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
              password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.min(3)]]
            });
          }
        }, {
          key: "toggle",
          value: function toggle() {
            var _this = this;

            setTimeout(function () {
              //  this.spinner.hide();
              _this.showOtpComponent = !_this.showOtpComponent;

              _this.showTimer(60);
            }, 2500);
          }
        }, {
          key: "getOtp",
          value: function getOtp() {
            var _this2 = this;

            //  this.spinner.show();
            localStorage.setItem("getOtpClicked", "true");
            var login = {};
            login.username = this.signinForm.value.username;
            login.password = this.signinForm.value.password;
            var encryptedAES = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(this.signinForm.value.password, "@12#90!^*NPR*g&*()$34#$");
            var USERNAME = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(this.signinForm.value.username, "@12#90!^*NPR*g&*()$34#$");
            var data = encryptedAES.toString();
            var uname = USERNAME.toString(); // this.skipLoginUser();

            console.log("jygjh");
            this.apiService.fetchMedUser(this.signinForm.value.username).subscribe(function (response) {
              console.log(response);
              _this2.user = response;

              if (_this2.user.verifiedStatus == "U") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                  text: "User Is Unauthorized",
                  'icon': "error"
                });
                return;
              }

              if (_this2.user.statusForUser == "Disable") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                  text: "User Is Disabled",
                  'icon': "error"
                });
                return;
              }

              _this2.ls.setItem("departmentHeader", _this2.user.department);

              _this2.ls.setItem("LoggedInUserHeader", _this2.user.logoutTime);

              _this2.email = _this2.user.email;
              localStorage.setItem("userFromLogin", _this2.user.userId);
              sessionStorage.setItem("user_id", _this2.user.userId);

              if (_this2.user.statusForUser === "Enable" && _this2.user.verifiedStatus === "A") {
                //---------- Password Policy Implementation (BEGIN) ----------
                _this2.apiService.fetchSecurityPolicyService().subscribe(function (resp) {
                  _this2.security = resp;
                  console.log(resp);
                  _this2.notifyPswdExpry = _this2.security.notifyPasswordExpiryInDays;
                  _this2.pswdExpiry = _this2.security.pswdExpiry;

                  if (_this2.pswdExpiry === 0 && _this2.notifyPswdExpry === 0) {
                    console.log("Hitting dashboard"); // this.router
                    //   .navigate(["/dashboard"])
                    //   .then((data) => console.log("dashboard hit", data));
                  } else {
                    _this2.currentDate = new Date();
                    _this2.changePwdDate = new Date(_this2.user.pwdChangeDate);
                    _this2.differnceInTime = _this2.currentDate - _this2.changePwdDate;
                    _this2.differnceInDays = Math.floor(_this2.differnceInTime / (1000 * 3600 * 24));
                    _this2.finalDiff = _this2.pswdExpiry - _this2.differnceInDays;

                    if (_this2.finalDiff === 0 || _this2.finalDiff <= 0) {
                      _this2.toastService.errorMessage("Your Password is expired. Please reset your password.", "");
                    } else {
                      _this2.check = true;

                      if (_this2.signinForm.value.password === "" || _this2.signinForm.value.username === "") {
                        _this2.toastService.errorMessage("Please enter login credentials.", "");
                      } else {
                        var encryptedAES = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(login.password, "@12#90!^*NPR*g&*()$34#$");
                        var USERNAME = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(login.username, "@12#90!^*NPR*g&*()$34#$");
                        var data = encryptedAES.toString();
                        var uname = USERNAME.toString();
                        login.password = data;
                        login.username = uname;
                        _this2.apiService.getOtp(login).subscribe(function (res) {
                          _this2.variable = res;
                          _this2.otpreceivedtime = new Date();

                          if (_this2.variable) {
                            if (_this2.variable[0] === "Username or password wrong") {// this.toastService.errorMessage(
                              //   "Invalid UserId or Password !!!",
                              //   ""
                              // );
                            }

                            if (res.failLgnCounter != 0) {
                              _this2.apiService.fetchSecurityPolicyService().subscribe(function (sp) {
                                _this2.security = sp;
                                _this2.invLogins = _this2.security.maxInvLogins;

                                if (_this2.invLogins !== 0) {
                                  _this2.invLogins = _this2.invLogins - 1;

                                  if (_this2.invLogins === res.failLgnCounter) {
                                    _this2.toastService.errorMessage("Contact Admin, User Account locked after " + "".concat(res.failLgnCounter + 1) + " wrong attempts.", "");
                                  }
                                }
                              });
                            } // ---------- Password Policy Implementation (END) ----------


                            if (_this2.variable[0] === "true") {
                              _this2.progress = true;

                              _this2.toggle();

                              _this2.toastService.successMessage("OTP sent successfully to " + _this2.email, "");

                              _this2.loginProcessing = false;
                              _this2.verifyOTP = true;
                            } else {
                              if (_this2.variable[0] === "Username or password wrong") {
                                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire("Username or Password is wrong");
                              } else {
                                // Swal.fire(this.variable[0]);
                                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Account blocked, maximum failed attempts reached. To login, please do Forgot Password and then try for login.');
                                _this2.loginProcessing = false;
                              }
                            }
                          }
                        }, function (err) {
                          _this2.toastService.errorMessage("Server Error", "");

                          _this2.loginProcessing = false;
                        }), function (error) {};
                      }
                    }
                  }
                });
              }
            }, function (err) {
              console.log(err);
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire(err.error.message); // this.toastService.errorMessage('Unable to update the record, server error!', '');
            });
          }
        }, {
          key: "roles",
          value: function roles(user) {
            var _this3 = this;

            var remainingRolesToFetch = user.newRoleForUser.length;

            var _loop = function _loop(index) {
              _this3.roleService.fetchdynamicrolesdata(user.newRoleForUser[index]).subscribe(function (data) {
                _this3.arrayOfAuthStatus[index] = data.roleDto.authStatus;
                remainingRolesToFetch--;

                if (remainingRolesToFetch === 0) {
                  _this3.isUserRoleAuthorized();
                }
              }), function (error) {};
            };

            for (var index = 0; index < user.newRoleForUser.length; index++) {
              _loop(index);
            }
          }
        }, {
          key: "isUserRoleAuthorized",
          value: function isUserRoleAuthorized() {
            var _this4 = this;

            if (this.arrayOfAuthStatus.includes('A') !== true) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                text: "Role is not authorized for the user",
                icon: "error"
              }).then(function (result) {
                localStorage.clear();
                sessionStorage.clear();

                _this4.signinForm.reset();

                _this4.backToLogin();
              });
            } else {
              this.showToast();
            }

            this.arrayOfAuthStatus = [];
          }
        }, {
          key: "skipLoginUser",
          value: function skipLoginUser() {
            this.ls.setItem("currentUser", this.demoUser.currentUser);
            this.ls.setItem("userPermissions", this.demoUser.userPermissions);
            this.ls.setItem("department", this.demoUser.department);
            this.ls.setItem("LoggedInUser", this.demoUser.LoggedInUser);
            this.ls.setItem("userobj", this.demoUser.userobj);
            this.ls.setItem("usercompleteobj", this.demoUser.usercompleteobj);
            sessionStorage.setItem("user_id", this.demoUser.currentUser);
            this.router.navigate(["/dashboard"]);
            this.jwtAuth.setUserAndToken("affsff", {}, true); // Skip login Section end
          }
        }, {
          key: "resendOtpMethod",
          value: function resendOtpMethod() {
            var _this5 = this;

            var login = {};
            login.username = this.signinForm.value.username;
            login.password = this.signinForm.value.password;
            var encryptedAES = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(this.signinForm.value.password, "@12#90!^*NPR*g&*()$34#$");
            var USERNAME = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(this.signinForm.value.username, "@12#90!^*NPR*g&*()$34#$");
            var data = encryptedAES.toString();
            var uname = USERNAME.toString();
            this.apiService.fetchMedUser(this.signinForm.value.username).subscribe(function (response) {
              _this5.user = response;
              _this5.email = _this5.user.email;
              localStorage.setItem("userFromLogin", _this5.user.userId);
              sessionStorage.setItem("user_id", _this5.user.userId);

              if (_this5.user.statusForUser === "Enable" && _this5.user.verifiedStatus === "A") {
                //---------- Password Policy Implementation (BEGIN) ----------
                _this5.apiService.fetchSecurityPolicyService().subscribe(function (resp) {
                  _this5.security = resp;
                  _this5.notifyPswdExpry = _this5.security.notifyPasswordExpiryInDays;
                  _this5.pswdExpiry = _this5.security.pswdExpiry;

                  if (_this5.pswdExpiry === 0 && _this5.notifyPswdExpry === 0) {} else {
                    _this5.currentDate = new Date();
                    _this5.changePwdDate = new Date(_this5.user.pwdChangeDate);
                    _this5.differnceInTime = _this5.currentDate - _this5.changePwdDate;
                    _this5.differnceInDays = Math.floor(_this5.differnceInTime / (1000 * 3600 * 24));
                    _this5.finalDiff = _this5.pswdExpiry - _this5.differnceInDays;

                    if (_this5.finalDiff === 0 || _this5.finalDiff <= 0) {
                      _this5.toastService.errorMessage("Your Password is expired. Please reset your password.", "");
                    } else {
                      _this5.check = true;

                      if (_this5.signinForm.value.password === "" || _this5.signinForm.value.username === "") {
                        _this5.toastService.errorMessage("Please enter login credentials.", "");
                      } else {
                        var encryptedAES = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(login.password, "@12#90!^*NPR*g&*()$34#$");
                        var USERNAME = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(login.username, "@12#90!^*NPR*g&*()$34#$");
                        var data = encryptedAES.toString();
                        var uname = USERNAME.toString();
                        login.password = data;
                        login.username = uname;

                        _this5.apiService.getOtp(login).subscribe(function (res) {
                          _this5.variable = res;
                          _this5.otpreceivedtime = new Date();

                          if (_this5.variable) {
                            if (_this5.variable[0] === "Username or password wrong") {
                              _this5.toastService.errorMessage("Invalid UserId or Password !!!", "");
                            }

                            if (res.failLgnCounter != 0) {
                              _this5.apiService.fetchSecurityPolicyService().subscribe(function (sp) {
                                _this5.security = sp;
                                _this5.invLogins = _this5.security.maxInvLogins;

                                if (_this5.invLogins !== 0) {
                                  _this5.invLogins = _this5.invLogins - 1;

                                  if (_this5.invLogins === res.failLgnCounter) {
                                    _this5.toastService.errorMessage("Contact Admin, User Account locked after " + "".concat(res.failLgnCounter + 1) + " wrong attempts.", "");
                                  }
                                }
                              });
                            } // ---------- Password Policy Implementation (END) ----------


                            if (_this5.variable[0] === "true") {
                              _this5.progress = true;

                              _this5.toastService.successMessage("OTP sent successfully to " + _this5.email, "");

                              _this5.loginProcessing = false;
                              _this5.verifyOTP = true;
                            } else {}
                          }
                        }, function (err) {
                          _this5.toastService.errorMessage("Server Error", "");

                          _this5.loginProcessing = false;
                        });
                      }
                    }
                  }
                });
              }
            });
          }
        }, {
          key: "signin",
          value: function signin() {
            var _this6 = this;

            var otp = {};
            otp.username = this.signinForm.value.username;
            otp.otp = this.otp;
            this.apiService.loginService(otp).subscribe(function (res) {
              _this6.responseforotp = res;

              if (_this6.responseforotp[0] == "OTP is invalid") {
                _this6.toastService.errorMessage("Enter the Valid OTP.", "");
              }

              _this6.apiService.fetchMedUser(otp.username).subscribe(function (response) {
                _this6.user = response; // if (this.responseforotp) {

                if (_this6.user != null) {
                  if (_this6.responseforotp[0] == "Time Expired") {
                    _this6.toastService.errorMessage("This OTP is expired. Please click on Resend OTP to get a new OTP.", "");

                    _this6.check = false;
                  }

                  _this6.loginProcessing = false;
                  _this6.user = _this6.responseforotp[1];
                  _this6.loginProcessing = false;
                  localStorage.setItem("userFromLogin", _this6.user.userId);
                  sessionStorage.setItem("user_id", _this6.user.userId);

                  if (_this6.user.statusForUser === "Enable" && _this6.user.verifiedStatus === "A") {
                    //---------- Password Policy Implementation (BEGIN) ----------
                    _this6.apiService.fetchSecurityPolicyService().subscribe(function (resp) {
                      _this6.security = resp;
                      _this6.notifyPswdExpry = _this6.security.notifyPasswordExpiryInDays;
                      _this6.pswdExpiry = _this6.security.pswdExpiry;

                      if (_this6.pswdExpiry === 0 && _this6.notifyPswdExpry === 0) {// this.router
                        //   .navigate(["/dashboard"])
                        //   .then((data) => console.log("dashboard hit", data));
                      } else {
                        _this6.currentDate = new Date();
                        _this6.changePwdDate = new Date(_this6.user.pwdChangeDate);
                        _this6.differnceInTime = _this6.currentDate - _this6.changePwdDate;
                        _this6.differnceInDays = Math.floor(_this6.differnceInTime / (1000 * 3600 * 24));
                        _this6.finalDiff = _this6.pswdExpiry - _this6.differnceInDays;

                        if (_this6.finalDiff === 0 || _this6.finalDiff <= 0) {
                          _this6.toastService.errorMessage("Your password expired, Please change your password", "");

                          _this6.router.navigate(["/forget-password"]).then(function (data) {
                            return console.log("Forget password hit", data);
                          });
                        } else {
                          //---------- Password Policy Implementation (END) ----------
                          // this.router.navigate(["/dashboard"])
                          //---------- Password Policy Implementation (BEGIN) ----------
                          _this6.currentUser = localStorage.getItem("currentUser");

                          _this6.apiService.fetchMedUser(otp.username).subscribe(function (response) {
                            _this6.userEntity = response;
                            console.log("userEntity ", _this6.userEntity);

                            _this6.apiService.fetchSecurityPolicyService().subscribe(function (resp) {
                              _this6.security = resp;
                              _this6.notifyPswdExpry = _this6.security.notifyPasswordExpiryInDays;
                              _this6.pswdExpiry = _this6.security.pswdExpiry;

                              if (_this6.pswdExpiry !== 0 && _this6.notifyPswdExpry !== 0) {
                                _this6.currentDate = new Date();
                                _this6.changePwdDate = new Date(_this6.userEntity.pwdChangeDate);
                                _this6.differnceInTime = _this6.currentDate - _this6.changePwdDate;
                                _this6.differnceInDays = Math.floor(_this6.differnceInTime / (1000 * 3600 * 24));
                                console.log("today's date ", _this6.currentDate);
                                console.log("pswd created date ", _this6.changePwdDate);
                                console.log("no of days diff ", _this6.differnceInDays);
                                _this6.finalDiff = _this6.pswdExpiry - _this6.differnceInDays;
                                console.log("notify user on password expiry", _this6.notifyPswdExpry);
                                console.log("pwd expiry ", _this6.security.pswdExpiry);
                                console.log("final diff", _this6.finalDiff);

                                if (_this6.finalDiff > 0 && _this6.finalDiff <= _this6.notifyPswdExpry) {
                                  _this6.toastService.errorMessage("Your password will expire in " + "".concat(_this6.finalDiff) + " day(s)", "");
                                }

                                _this6.roles(_this6.user);
                              }
                            });
                          }); //  ---------- Password Policy Implementation (END) ----------

                        }
                      }
                    });
                  }

                  _this6.roleService.fetchNewRolePermissions(_this6.user.userId);
                }
              });
            }, function (err) {
              _this6.loginProcessing = false;

              _this6.toastService.errorMessage("Server Error ", "");
            });
          }
        }, {
          key: "routing",
          value: function routing() {
            var _this7 = this;

            console.log(this.userEntity);
            this.jwtAuth.signin().subscribe(function (response) {
              setTimeout(function () {
                _this7.ls.setItem("currentUser", _this7.userEntity.userId);

                _this7.ls.setItem("userobj", _this7.userEntity);

                _this7.ls.setItem("usercompleteobj", _this7.userEntity);

                _this7.router.navigate(["/dashboard"]);

                _this7.iziToast.show({
                  title: "DTB Bank - Median!",
                  message: "Welcome, ".concat(_this7.userEntity.userId, "!"),
                  image: "assets/images/user.png",
                  icon: "ico ico-success",
                  // theme:"dark",
                  layout: 2,
                  // imageWidth:50,
                  balloon: false,
                  position: "topRight",
                  progressBarColor: "red",
                  pauseOnHover: true
                });
              }, 2500);
            }, function (err) {// console.log(err);
            });
          }
        }, {
          key: "getUser",
          value: function getUser() {
            var _this8 = this;

            this.user1 = localStorage.getItem("userobj");
            this.apiService.fetchMedUser(JSON.parse(this.user1).userId).subscribe(function (response) {
              _this8.initTheme(response.screenThemeSelected);
            });
          }
        }, {
          key: "initTheme",
          value: function initTheme(bgClass) {
            var lastBg = bgClass === "theme2" ? "theme2" : "theme1";
            $('body').removeClass(lastBg).addClass(bgClass);
            this.lastBg = bgClass;
            $('.ddParent').removeClass('actDD');
            ;

            if (bgClass === "theme1") {
              console.log($('#themeChangeRadio:nth-child(1)'));
              $('[data-id="theme1"]').addClass('active');
              $('[data-id="theme2"]').removeClass('active');
            } else {
              $('[data-id="theme1"]').removeClass('active');
              $('[data-id="theme2"]').addClass('active');
            }
          }
        }, {
          key: "showToast",
          value: function showToast() {
            this.ls.setItem("currentUser", this.userEntity.userId);
            this.ls.setItem("userobj", this.userEntity);
            this.ls.setItem("usercompleteobj", this.userEntity);

            if (this.userEntity.logoutTime === null && this.userEntity.passwordGenerationType === 'Auto') {
              this.router.navigate(["/change-password"]);
            } else {
              this.router.navigate(["/dashboard"]);
            }

            this.iziToast.show({
              title: "DTB Bank - Median!",
              message: "Welcome, ".concat(this.userEntity.userId, "!"),
              image: "assets/images/user.png",
              icon: "ico ico-success",
              // theme:"dark",
              layout: 2,
              // imageWidth:50,
              balloon: false,
              position: "topRight",
              progressBarColor: "red",
              pauseOnHover: true
            });
          }
        }, {
          key: "backToLogin",
          value: function backToLogin() {
            this.showOtpComponent = false;
          }
        }, {
          key: "onOtpChange",
          value: function onOtpChange(otp) {
            this.otp = otp;

            if (this.otp.length === 6) {
              this.isValid = true;
              var signinData = this.signinForm.value;
            }
          }
        }, {
          key: "showTimer",
          value: function showTimer(remaining) {
            var _this9 = this;

            var timerOn = true;
            this.m = Math.floor(remaining / 60);
            this.s = remaining % 60;
            this.m = this.m < 10 ? "0" + this.m : this.m;
            this.s = this.s < 10 ? "0" + this.s : this.s;
            this.cd.detectChanges();
            remaining -= 1;

            if (remaining >= 0 && timerOn) {
              setTimeout(function () {
                _this9.showTimer(remaining);
              }, 1000);
              return;
            }

            if (!timerOn) {
              // Do validate stuff here
              return;
            } // Do timeout stuff here


            this.timeOutOtp = true;
            this.m = null;
            this.s = null;
            this.cd.markForCheck();
          }
        }, {
          key: "toggleVisibility",
          value: function toggleVisibility() {
            if (this.visible) {
              this.inputType = "password";
              this.visible = false;
              this.cd.markForCheck();
            } else {
              this.inputType = "text";
              this.visible = true;
              this.cd.markForCheck();
            }
          }
        }, {
          key: "resendOtp",
          value: function resendOtp() {
            this.timeOutOtp = false;
            this.showTimer(60);
          }
        }, {
          key: "obscureEmail",
          value: function obscureEmail(email) {
            var _email$split = email.split("@"),
                _email$split2 = _slicedToArray(_email$split, 2),
                name = _email$split2[0],
                domain = _email$split2[1];

            return "".concat(name.substring(0, 5)).concat(new Array(name.length).join("*"), "@").concat(domain);
          }
        }]);

        return _LoginComponent;
      }();

      _LoginComponent.??fac = function LoginComponent_Factory(t) {
        return new (t || _LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["????directiveInject"](src_app_shared_services_jwt_auth_service__WEBPACK_IMPORTED_MODULE_3__.JwtAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["????directiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["????directiveInject"](src_app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__.LocalStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["????directiveInject"](_DEMO_USER__WEBPACK_IMPORTED_MODULE_6__.DEMO_USER), _angular_core__WEBPACK_IMPORTED_MODULE_10__["????directiveInject"](ng2_izitoast__WEBPACK_IMPORTED_MODULE_7__.Ng2IzitoastService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_13__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["????directiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_8__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["????directiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_9__.RoleService));
      };

      _LoginComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["????defineComponent"]({
        type: _LoginComponent,
        selectors: [["npr-login"]],
        viewQuery: function LoginComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????viewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["????loadQuery"]()) && (ctx.ngOtpInput = _t.first);
          }
        },
        decls: 14,
        vars: 2,
        consts: [[1, "bg-white"], [1, "loginLogoCol", "text-center", "text-lg-start"], ["href", "JavaScript:void(0)"], ["src", "assets/images/logo.png", "alt", "logo"], [1, "container"], [1, "row", "g-0", "loginRow", "align-items-center"], [1, "col-lg-6"], ["class", "loginFormCol", 4, "ngIf"], [1, "loginFormCol"], ["class", "loginCol", 4, "ngIf"], [1, "loginImgCol", "d-none", "d-lg-block"], ["src", "assets/images/login-img.svg", "alt", "loginimg"], ["size", "small", "type", "square-loader"], [1, "loginCol"], [1, "lgTitle", "secondaryColor"], [1, "loginFormStyle"], [1, "row", "g-4", 3, "formGroup"], [1, "col-12"], ["for", "exampleInputEmail1", 1, "form-label", "lblStyles"], ["type", "text", "autofocus", "autofocus", "oninput", "this.value = this.value.toUpperCase()", "formControlName", "username", "id", "exampleInputEmail1", "placeholder", "Your User Id", 1, "form-control", "lineField"], [1, "row"], [1, "col"], ["for", "exampleInputPassword1", 1, "form-label", "lblStyles"], [1, "inputField"], [1, "inputField", "pwdFldCol", "d-flex"], ["type", "password", "formControlName", "password", "id", "pwdFld", "placeholder", "Your Password", 1, "form-control", "lineField", 3, "type"], ["toggle", "#pwdFld", 1, "alignSelf", 3, "click"], ["class", "showPwd", "src", "assets/images/show-icon.svg", "alt", "...", 4, "ngIf"], ["class", "hidePwd", "src", "assets/images/hide-icon.svg", "alt", "...", 4, "ngIf"], ["type", "submit", 1, "btn", "btnPrimary", "w-100", "btnLg", "roundedBorder", 3, "disabled", "click"], [1, "float"], [1, "primaryColor", "fpLink", 3, "routerLink"], [1, "rumanogoCol", "text-center", "pt-3"], ["src", "assets/images/rumango-img.png", "alt", "rumango-img"], [1, "medainStyle", "mt-3"], ["src", "assets/images/show-icon.svg", "alt", "...", 1, "showPwd"], ["src", "assets/images/hide-icon.svg", "alt", "...", 1, "hidePwd"], [1, "form", "w-100", "mb-10"], [1, "text-center", "mb-10"], ["alt", "Logo", "src", "assets/images/smartphone.svg", 1, "mh-125px"], [1, "text-dark", "mb-3"], [1, "text-muted", "fw-bold", "fs-5", "mb-5"], [1, "fw-bolder", "text-dark", "fs-3"], [1, "mb-10", "px-md-10"], [1, "fw-bolder", "text-start", "text-dark", "fs-6", "mb-1", "ms-1"], [1, "d-flex", "flex-wrap", "flex-stack"], ["inputControls", "6", 3, "config", "onInputChange"], ["ngOtpInput", ""], [1, "d-flex", 2, "gap", "10px"], ["type", "button", 1, "btn", "btn-lg", "btnPrimary", "fw-bolder", 3, "disabled", "click"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "click"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????template"](7, LoginComponent_div_7_Template, 32, 11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????template"](9, LoginComponent_div_9_Template, 24, 3, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](12, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????element"](13, "ngx-spinner", 12);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("ngIf", !ctx.showOtpComponent);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["????property"]("ngIf", ctx.showOtpComponent);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, ngx_spinner__WEBPACK_IMPORTED_MODULE_13__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, ng_otp_input__WEBPACK_IMPORTED_MODULE_15__.NgOtpInputComponent],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.DatePipe],
        styles: [".flex-stack[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.flex-center[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n}\n\n.flex-wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap !important;\n}\n\n.d-flex[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n.mh-125px[_ngcontent-%COMP%] {\n  max-height: 90px !important;\n}\n\n.border-hover[_ngcontent-%COMP%]:not(:hover):not(:focus):not(.active):not(:active) {\n  cursor: pointer;\n  border-color: transparent !important;\n}\n\n.form-control.form-control-solid[_ngcontent-%COMP%] {\n  background-color: #f5f8fa;\n  border-color: #f5f8fa;\n  color: #5e6278;\n  transition: color 0.2s ease, background-color 0.2s ease;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.fs-2qx[_ngcontent-%COMP%] {\n  font-size: calc(1.35rem + 1.2vw) !important;\n}\n\n.my-2[_ngcontent-%COMP%] {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n\n.mx-1[_ngcontent-%COMP%] {\n  margin-right: 0.25rem !important;\n  margin-left: 0.25rem !important;\n}\n\n.h-60px[_ngcontent-%COMP%] {\n  height: 60px !important;\n}\n\n.w-60px[_ngcontent-%COMP%] {\n  width: 60px !important;\n}\n\n.text-dark[_ngcontent-%COMP%] {\n  color: #181c32 !important;\n}\n\n.text-dark[_ngcontent-%COMP%] {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-dark[_ngcontent-%COMP%] {\n  color: #181c32 !important;\n}\n\n.mb-3[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem !important;\n}\n\n.h1[_ngcontent-%COMP%], h1[_ngcontent-%COMP%] {\n  font-size: calc(1.3rem + .6vw);\n}\n\n.text-start[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n\n.fw-bolder[_ngcontent-%COMP%] {\n  font-weight: 600 !important;\n}\n\n.text-muted[_ngcontent-%COMP%] {\n  color: #a1a5b7 !important;\n}\n\n.text-muted[_ngcontent-%COMP%] {\n  --bs-text-opacity: 1;\n  color: #a1a5b7 !important;\n}\n\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 500 !important;\n}\n\n.fs-5[_ngcontent-%COMP%] {\n  font-size: 1.15rem !important;\n}\n\n.mb-5[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem !important;\n}\n\n.fs-6[_ngcontent-%COMP%] {\n  font-size: 1.075rem !important;\n}\n\n.ms-1[_ngcontent-%COMP%] {\n  margin-left: 0.25rem !important;\n}\n\n.mb-1[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem !important;\n}\n\n.mb-10[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem !important;\n}\n\n.fs-3[_ngcontent-%COMP%] {\n  font-size: calc(1.26rem + .12vw) !important;\n}\n\nimg[_ngcontent-%COMP%], svg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUFBO0VBQ0ksMEJBQUE7QUFHSjs7QUFEQTtFQUNJLHdCQUFBO0FBSUo7O0FBRkE7RUFDSSwyQkFBQTtBQUtKOztBQUZBO0VBQ0ksZUFBQTtFQUNBLG9DQUFBO0FBS0o7O0FBSEE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHVEQUFBO0FBTUo7O0FBSkE7RUFDSSwyQkFBQTtBQU9KOztBQUpBO0VBQ0ksMkNBQUE7QUFPSjs7QUFMQTtFQUNJLDZCQUFBO0VBQ0EsZ0NBQUE7QUFRSjs7QUFOQTtFQUNJLGdDQUFBO0VBQ0EsK0JBQUE7QUFTSjs7QUFQQTtFQUNJLHVCQUFBO0FBVUo7O0FBUkE7RUFDSSxzQkFBQTtBQVdKOztBQVRBO0VBQ0kseUJBQUE7QUFZSjs7QUFUQTtFQUNJLG9CQUFBO0VBQ0Esa0VBQUE7QUFZSjs7QUFWQTtFQUNJLHlCQUFBO0FBYUo7O0FBWEE7RUFDSSxpQ0FBQTtBQWNKOztBQVpBO0VBQ0ksOEJBQUE7QUFlSjs7QUFaQTtFQUNJLDJCQUFBO0FBZUo7O0FBYkE7RUFDSSwyQkFBQTtBQWdCSjs7QUFkQTtFQUNJLHlCQUFBO0FBaUJKOztBQWRBO0VBQ0ksb0JBQUE7RUFDQSx5QkFBQTtBQWlCSjs7QUFmQTtFQUNJLDJCQUFBO0FBa0JKOztBQWhCQTtFQUNJLDZCQUFBO0FBbUJKOztBQWpCQTtFQUNJLGlDQUFBO0FBb0JKOztBQWxCQTtFQUNJLDhCQUFBO0FBcUJKOztBQW5CQTtFQUNJLCtCQUFBO0FBc0JKOztBQXBCQTtFQUNJLGlDQUFBO0FBdUJKOztBQXJCQTtFQUNJLGdDQUFBO0FBd0JKOztBQXRCQTtFQUNJLDJDQUFBO0FBeUJKOztBQXRCQTtFQUNJLHNCQUFBO0FBeUJKIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgtc3RhY2sge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZmxleC1jZW50ZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5mbGV4LXdyYXAge1xyXG4gICAgZmxleC13cmFwOiB3cmFwIWltcG9ydGFudDtcclxufVxyXG4uZC1mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xyXG59XHJcbi5taC0xMjVweCB7XHJcbiAgICBtYXgtaGVpZ2h0OiA5MHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlci1ob3Zlcjpub3QoOmhvdmVyKTpub3QoOmZvY3VzKTpub3QoLmFjdGl2ZSk6bm90KDphY3RpdmUpIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG59XHJcbi5mb3JtLWNvbnRyb2wuZm9ybS1jb250cm9sLXNvbGlkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY4ZmE7XHJcbiAgICBib3JkZXItY29sb3I6ICNmNWY4ZmE7XHJcbiAgICBjb2xvcjogIzVlNjI3ODtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIC4ycyBlYXNlLGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2U7XHJcbn1cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICBib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZzLTJxeCB7XHJcbiAgICBmb250LXNpemU6IGNhbGMoMS4zNXJlbSArIDEuMnZ3KSFpbXBvcnRhbnQ7XHJcbn1cclxuLm15LTIge1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuLm14LTEge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtIWltcG9ydGFudDtcclxufVxyXG4uaC02MHB4IHtcclxuICAgIGhlaWdodDogNjBweCFpbXBvcnRhbnQ7XHJcbn1cclxuLnctNjBweCB7XHJcbiAgICB3aWR0aDogNjBweCFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQtZGFyayB7XHJcbiAgICBjb2xvcjogIzE4MWMzMiFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LWRhcmsge1xyXG4gICAgLS1icy10ZXh0LW9wYWNpdHk6IDE7XHJcbiAgICBjb2xvcjogcmdiYSh2YXIoLS1icy1kYXJrLXJnYiksdmFyKC0tYnMtdGV4dC1vcGFjaXR5KSkhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0LWRhcmsge1xyXG4gICAgY29sb3I6ICMxODFjMzIhaW1wb3J0YW50O1xyXG59XHJcbi5tYi0zIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW0haW1wb3J0YW50O1xyXG59XHJcbi5oMSwgaDEge1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDEuM3JlbSArIC42dncpO1xyXG59XHJcblxyXG4udGV4dC1zdGFydCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0IWltcG9ydGFudDtcclxufVxyXG4uZnctYm9sZGVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0LW11dGVkIHtcclxuICAgIGNvbG9yOiAjYTFhNWI3IWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtbXV0ZWQge1xyXG4gICAgLS1icy10ZXh0LW9wYWNpdHk6IDE7XHJcbiAgICBjb2xvcjogI2ExYTViNyFpbXBvcnRhbnQ7XHJcbn1cclxuLmZ3LWJvbGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMCFpbXBvcnRhbnQ7XHJcbn1cclxuLmZzLTUge1xyXG4gICAgZm9udC1zaXplOiAxLjE1cmVtIWltcG9ydGFudDtcclxufVxyXG4ubWItNSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtIWltcG9ydGFudDtcclxufVxyXG4uZnMtNiB7XHJcbiAgICBmb250LXNpemU6IDEuMDc1cmVtIWltcG9ydGFudDtcclxufVxyXG4ubXMtMSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuLm1iLTEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuLm1iLTEwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuLmZzLTMge1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDEuMjZyZW0gKyAuMTJ2dykhaW1wb3J0YW50O1xyXG59IFxyXG5cclxuaW1nLCBzdmcge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufSJdfQ== */"],
        data: {
          animation: [src_npr_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInUp400ms]
        },
        changeDetection: 0
      });

      var _User = /*#__PURE__*/_createClass(function _User() {
        _classCallCheck(this, _User);
      });

      var _SecurityDto = /*#__PURE__*/_createClass(function _SecurityDto() {
        _classCallCheck(this, _SecurityDto);
      });
      /***/

    },

    /***/
    33794:
    /*!**************************************************!*\
      !*** ./src/app/views/auth/login/login.module.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginModule": function LoginModule() {
          return (
            /* binding */
            _LoginModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login-routing.module */
      93140);
      /* harmony import */


      var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.component */
      2783);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _DEMO_USER__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./DEMO_USER */
      8888);
      /* harmony import */


      var ng_otp_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ng-otp-input */
      50287);
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-spinner */
      55314);
      /* harmony import */


      var ng2_izitoast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng2-izitoast */
      27218);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _LoginModule = /*#__PURE__*/_createClass(function _LoginModule() {
        _classCallCheck(this, _LoginModule);
      });

      _LoginModule.??fac = function LoginModule_Factory(t) {
        return new (t || _LoginModule)();
      };

      _LoginModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({
        type: _LoginModule
      });
      _LoginModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({
        providers: [_DEMO_USER__WEBPACK_IMPORTED_MODULE_2__.DEMO_USER],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, ng_otp_input__WEBPACK_IMPORTED_MODULE_7__.NgOtpInputModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerModule, ng2_izitoast__WEBPACK_IMPORTED_MODULE_3__.Ng2IziToastModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](_LoginModule, {
          declarations: [_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, ng_otp_input__WEBPACK_IMPORTED_MODULE_7__.NgOtpInputModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerModule, ng2_izitoast__WEBPACK_IMPORTED_MODULE_3__.Ng2IziToastModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_views_auth_login_login_module_ts-es5.js.map