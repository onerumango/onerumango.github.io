(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-sessions-sessions-module"], {
    /***/
    "8Wtu":
    /*!*****************************************************************!*\
      !*** ./src/app/views/sessions/not-found/not-found.component.ts ***!
      \*****************************************************************/

    /*! exports provided: NotFoundComponent */

    /***/
    function Wtu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
        return NotFoundComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var _c0 = function _c0() {
        return ["/home"];
      };

      var NotFoundComponent = /*#__PURE__*/function () {
        function NotFoundComponent() {
          _classCallCheck(this, NotFoundComponent);
        }

        _createClass(NotFoundComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return NotFoundComponent;
      }();

      NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
        return new (t || NotFoundComponent)();
      };

      NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: NotFoundComponent,
        selectors: [["app-not-found"]],
        decls: 15,
        vars: 2,
        consts: [[1, "d-flex", "align-items-center", "h-full", "mat-bg-default"], [1, "app-error"], [1, "fix"], ["color", "warn", 1, "error-icon"], [1, "error-text"], [1, "error-title"], [1, "error-subtitle"], [1, "error-actions"], ["mat-raised-button", "", "color", "primary", 1, "mb-16", "mr-8", 3, "routerLink"], ["mat-raised-button", "", "color", "warn"]],
        template: function NotFoundComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "error");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "404");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Page Not Found!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Back to Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Report this Problem");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-not-found',
            templateUrl: './not-found.component.html',
            styleUrls: ['./not-found.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Ekgz":
    /*!***********************************************************!*\
      !*** ./src/app/views/sessions/signin/signin.component.ts ***!
      \***********************************************************/

    /*! exports provided: SigninComponent */

    /***/
    function Ekgz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SigninComponent", function () {
        return SigninComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/services/auth/jwt-auth.service */
      "nZzT");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var app_views_home_account_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/views/home/account.service */
      "kA6c");
      /* harmony import */


      var _fingerprint_fingerprint_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../fingerprint/fingerprint.component */
      "hxFr");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "aLe/");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");

      var _c0 = function _c0() {
        return {};
      };

      var SigninComponent = /*#__PURE__*/function () {
        function SigninComponent(fb, accountService, ls, router, jwtService, dialog) {
          _classCallCheck(this, SigninComponent);

          this.fb = fb;
          this.accountService = accountService;
          this.ls = ls;
          this.router = router;
          this.jwtService = jwtService;
          this.dialog = dialog;
        }

        _createClass(SigninComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.signinForm = this.fb.group({
              email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
              password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this = this;

            if (!this.signinForm.invalid) {
              // do what you wnat with your data
              // console.log(this.signinForm.value);
              this.jwtService.signin().subscribe(function (res) {
                console.log('res: ', res);
                localStorage.setItem('userName', res.user.userName);

                _this.router.navigateByUrl('/others/Service'); //clearing local storage data 


                _this.ls.removeItem('appEntryStage');

                _this.ls.removeItem('ACC_DONE');

                _this.ls.removeItem('ACC_OPEN_DONE');

                _this.ls.removeItem('ACC_SERVICE_DONE');

                _this.ls.removeItem('ACC_MANDATE_DONE');

                _this.ls.removeItem('ACC_NOMINEE_DONE');

                _this.ls.removeItem('limitEntryStage');

                _this.ls.removeItem('LIMIT_SECURED_DONE');

                _this.ls.removeItem('LIMIT_UNSECURED_DONE');

                _this.ls.removeItem('LIMIT_FIN_DONE'); // Parent 3


                _this.ls.removeItem('enrichmentStage'); // Subnave of parent 3


                _this.ls.removeItem('ENRICHMENT_CHARGES_DONE');

                _this.ls.removeItem('ENRICHMENT_INTEREST_DONE'); // PArent 4


                _this.ls.removeItem('assessmentStage'); // Subnave of parent 4


                _this.ls.removeItem('ASSESSMENT_QA_DONE');

                _this.ls.removeItem('ASSESSMENT_REPORT_DONE'); // PArent 5


                _this.ls.removeItem('fundingStage'); // Subnave of parent 5


                _this.ls.removeItem('FUNDING_INI_DONE'); // Parent 6


                _this.ls.removeItem('approvalStage'); // Parent 6 childs nav


                _this.ls.removeItem('APPROVAL_DETAILS_DONE');

                _this.ls.removeItem('accountId');

                _this.ls.removeItem('eSignStage');

                _this.ls.removeItem('PRODUCT_CUSTOMER_ID');

                _this.ls.removeItem('cId');

                _this.accountService.refresh.next(); //end of lcoal storage data for create account

              }, function (err) {
                return console.error("Err", err);
              });
            }
          }
        }, {
          key: "openDialog",
          value: function openDialog() {
            var dialogRef = this.dialog.open(_fingerprint_fingerprint_component__WEBPACK_IMPORTED_MODULE_7__["FingerprintComponent"]);
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("Dialog result: ".concat(result));
            });
          }
        }]);

        return SigninComponent;
      }();

      SigninComponent.ɵfac = function SigninComponent_Factory(t) {
        return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_views_home_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JwtAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
      };

      SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: SigninComponent,
        selectors: [["app-signin"]],
        decls: 26,
        vars: 3,
        consts: [[1, "seciton-left"], [1, "section-left-content"], [1, "text-36", "font-weight-light"], [1, "mb-24", "text-small"], [1, "form-holder", "h-full-screen", "mat-bg-card", "mat-elevation-z4", 3, "perfectScrollbar"], ["fxLayout", "column", 1, "signup-form", 3, "formGroup", "ngSubmit"], [1, "form-headline", "text-center", "mb-32"], [1, "font-weight-light"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "mb-48"], ["width", "200px", "src", "assets/images/logo.png", "alt", ""], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "email", "type", "email", "name", "email", "placeholder", "Email"], ["matInput", "", "formControlName", "password", "type", "password", "name", "password", "placeholder", "********"], ["mat-raised-button", "", "color", "primary"], [1, "my-32"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "mb-48", 3, "click"], ["width", "90px", "height", "90px", "src", "assets/images/fingerprint.png", "alt", ""]],
        template: function SigninComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Sample Text over here?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Content of the app if required!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_7_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h1", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sign In");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Email");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-form-field", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Password");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Sign In");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "mat-divider", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SigninComponent_Template_div_click_24_listener() {
              return ctx.openDialog();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signinForm);
          }
        },
        directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_8__["PerfectScrollbarDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_10__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_13__["MatDivider"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduaW4uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-signin',
            templateUrl: './signin.component.html',
            styleUrls: ['./signin.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: app_views_home_account_service__WEBPACK_IMPORTED_MODULE_6__["AccountService"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__["LocalStoreService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JwtAuthService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "NjAb":
    /*!*********************************************************!*\
      !*** ./src/app/views/sessions/error/error.component.ts ***!
      \*********************************************************/

    /*! exports provided: ErrorComponent */

    /***/
    function NjAb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
        return ErrorComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "iInd");

      var _c0 = function _c0() {
        return ["/"];
      };

      var ErrorComponent = /*#__PURE__*/function () {
        function ErrorComponent() {
          _classCallCheck(this, ErrorComponent);
        }

        _createClass(ErrorComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ErrorComponent;
      }();

      ErrorComponent.ɵfac = function ErrorComponent_Factory(t) {
        return new (t || ErrorComponent)();
      };

      ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ErrorComponent,
        selectors: [["app-error"]],
        decls: 15,
        vars: 2,
        consts: [[1, "page-wrap", "h-full", "mat-bg-default"], [1, "app-error"], [1, "fix"], ["color", "warn", 1, "error-icon"], [1, "error-text"], [1, "error-title"], [1, "error-subtitle"], [1, "error-actions"], ["mat-raised-button", "", "color", "primary", 1, "mb-16", "mr-8", 3, "routerLink"], ["mat-raised-button", "", "color", "warn"]],
        template: function ErrorComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-icon", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "warning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "500");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Server Error!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Back to Dashboard");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Report this Problem");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-error',
            templateUrl: './error.component.html',
            styleUrls: ['./error.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "VVaf":
    /*!***************************************************!*\
      !*** ./src/app/views/sessions/sessions.module.ts ***!
      \***************************************************/

    /*! exports provided: SessionsModule */

    /***/
    function VVaf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SessionsModule", function () {
        return SessionsModule;
      });
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "aLe/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/shared-material.module */
      "zMWy");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout */
      "u9T3");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "TSSN");
      /* harmony import */


      var _sessions_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./sessions.routing */
      "WYVF");
      /* harmony import */


      var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./not-found/not-found.component */
      "8Wtu");
      /* harmony import */


      var _error_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./error/error.component */
      "NjAb");
      /* harmony import */


      var _signin_signin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./signin/signin.component */
      "Ekgz");
      /* harmony import */


      var _fingerprint_fingerprint_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./fingerprint/fingerprint.component */
      "hxFr");
      /* harmony import */


      var _auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./auth-callback/auth-callback.component */
      "hIfn");

      var SessionsModule = function SessionsModule() {
        _classCallCheck(this, SessionsModule);
      };

      SessionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: SessionsModule
      });
      SessionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function SessionsModule_Factory(t) {
          return new (t || SessionsModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_sessions_routing__WEBPACK_IMPORTED_MODULE_8__["SessionsRoutes"])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SessionsModule, {
          declarations: [_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"], _signin_signin_component__WEBPACK_IMPORTED_MODULE_11__["SigninComponent"], _auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_13__["AuthCallbackComponent"], _fingerprint_fingerprint_component__WEBPACK_IMPORTED_MODULE_12__["FingerprintComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SessionsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_sessions_routing__WEBPACK_IMPORTED_MODULE_8__["SessionsRoutes"])],
            entryComponents: [_fingerprint_fingerprint_component__WEBPACK_IMPORTED_MODULE_12__["FingerprintComponent"]],
            declarations: [_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"], _signin_signin_component__WEBPACK_IMPORTED_MODULE_11__["SigninComponent"], _auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_13__["AuthCallbackComponent"], _fingerprint_fingerprint_component__WEBPACK_IMPORTED_MODULE_12__["FingerprintComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "WYVF":
    /*!****************************************************!*\
      !*** ./src/app/views/sessions/sessions.routing.ts ***!
      \****************************************************/

    /*! exports provided: SessionsRoutes */

    /***/
    function WYVF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SessionsRoutes", function () {
        return SessionsRoutes;
      });
      /* harmony import */


      var _fingerprint_fingerprint_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./fingerprint/fingerprint.component */
      "hxFr");
      /* harmony import */


      var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./not-found/not-found.component */
      "8Wtu");
      /* harmony import */


      var _error_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./error/error.component */
      "NjAb");
      /* harmony import */


      var _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./signin/signin.component */
      "Ekgz");
      /* harmony import */


      var _auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./auth-callback/auth-callback.component */
      "hIfn");

      var SessionsRoutes = [{
        path: "",
        children: [{
          path: "signin",
          component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"],
          data: {
            title: "Signin"
          }
        }, {
          path: 'callback',
          component: _auth_callback_auth_callback_component__WEBPACK_IMPORTED_MODULE_4__["AuthCallbackComponent"]
        }, {
          path: "404",
          component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_1__["NotFoundComponent"],
          data: {
            title: "Not Found"
          }
        }, {
          path: "error",
          component: _error_error_component__WEBPACK_IMPORTED_MODULE_2__["ErrorComponent"],
          data: {
            title: "Error"
          }
        }, {
          path: "fingerPrint",
          component: _fingerprint_fingerprint_component__WEBPACK_IMPORTED_MODULE_0__["FingerprintComponent"],
          data: {
            title: "Error"
          }
        }]
      }];
      /***/
    },

    /***/
    "hIfn":
    /*!*************************************************************************!*\
      !*** ./src/app/views/sessions/auth-callback/auth-callback.component.ts ***!
      \*************************************************************************/

    /*! exports provided: AuthCallbackComponent */

    /***/
    function hIfn(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthCallbackComponent", function () {
        return AuthCallbackComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! app/shared/services/app-loader/app-loader.service */
      "3sEA");
      /* harmony import */


      var app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/auth/jwt-auth.service */
      "nZzT");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var app_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/services/theme.service */
      "ETNk");

      var AuthCallbackComponent = /*#__PURE__*/function () {
        function AuthCallbackComponent(spinner, jwtService, router, ls, themeService) {
          _classCallCheck(this, AuthCallbackComponent);

          this.spinner = spinner;
          this.jwtService = jwtService;
          this.router = router;
          this.ls = ls;
          this.themeService = themeService;
        }

        _createClass(AuthCallbackComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.spinner.open();
            var redirectedFromTellerDashboard = window.location.href.indexOf('appType');
            this.ls.setItem('redirectedFromTellerDashboard', redirectedFromTellerDashboard.toString());
            var codeIndex = window.location.href.indexOf('code');
            var encodedUser = this.ls.getParameterByName('code');
            var appType = this.ls.getParameterByName('appType');
            var theme = this.ls.getParameterByName('theme');
            this.CID_360 = this.ls.getParameterByName('CID_360');

            if (this.ls.getParameterByName('searchTerm') != null || this.ls.getParameterByName('searchTerm') != undefined) {
              this.searchTerm = this.ls.getParameterByName('searchTerm');
            }

            console.log(this.searchTerm);
            var userContext = this.jwtService.decodeData(encodedUser);
            var accessToken = this.parseAccessTokenFromUserObject(userContext);

            if (theme) {
              theme = theme.replace(/['"]+/g, '');

              if (theme == 'dark') {
                this.ls.setItem('theme', 'egret-dark-purple');
              } else {
                this.ls.setItem('theme', 'egret-blue');
              }
            }

            console.log(this.ls.getParameterByName('code'));
            console.log(this.ls.getParameterByName('appType'));
            console.log(userContext);

            if (codeIndex != -1) {
              this.jwtService.setUserAndToken(accessToken, userContext, true);
              this.switchRoute(appType);
              this.spinner.close();
              return;
            } else {
              return window.location.href = 'http://192.168.0.14:8081/iCust-Teller/';
            }
          }
        }, {
          key: "parseAccessTokenFromUserObject",
          value: function parseAccessTokenFromUserObject(user) {
            var _a;

            var accessToken = (_a = user['jwtResp']) === null || _a === void 0 ? void 0 : _a.accessToken;
            return accessToken;
          }
        }, {
          key: "switchRoute",
          value: function switchRoute(type) {
            console.log(type);

            switch (type) {
              case "KYC":
                {
                  this.router.navigateByUrl('/others/Service');
                  break;
                }

              case "INDIVIDUAL":
                {
                  this.router.navigateByUrl('/others/customerTypeDialog');
                  break;
                }

              case "CORPORATE":
                {
                  this.router.navigateByUrl('/onboardingCorporate/corporate');
                  break;
                }

              case "CUSTACC":
                {
                  this.router.navigateByUrl('/home/application/list');
                  break;
                }

              case "TASKS":
                {
                  this.router.navigateByUrl("/tasks/task-summary".concat(this.searchTerm ? "?searchTerm=".concat(this.searchTerm) : ''));
                  break;
                }

              case "KYCTASKS":
                {
                  this.router.navigateByUrl("/tasks/kyc-task-summary".concat(this.searchTerm ? "?searchTerm=".concat(this.searchTerm) : ''));
                  break;
                }

              case "CUSTOMERTASKS":
                {
                  this.router.navigateByUrl("/tasks/cust-on-boarding-task-summary".concat(this.searchTerm ? "?searchTerm=".concat(this.searchTerm) : ''));
                  break;
                }

              case "CORPORATETASKS":
                {
                  this.router.navigateByUrl('/tasks/corporate-task-summary');
                  break;
                }

              case "DASHBOARD360":
                {
                  this.router.navigateByUrl("/others/mainNavigation?cId=".concat(this.CID_360));
                  break;
                }

              case "LOANACC":
                {
                  this.router.navigateByUrl('/loan/account/list');
                  break;
                }

              case "CARDACC":
                {
                  this.router.navigateByUrl('/cardaccount/applicationEntryStage/list');
                  break;
                }

              default:
                {
                  this.router.navigateByUrl('/others/Service');
                  break;
                }

              case "LOANACCTASKS":
                {
                  this.router.navigateByUrl("/tasks/loan-account-task-summary".concat(this.searchTerm ? "?searchTerm=".concat(this.searchTerm) : ''));
                  break;
                }

              case "CARDACCTASKS":
                {
                  this.router.navigateByUrl("/tasks/card-account-task-summary".concat(this.searchTerm ? "?searchTerm=".concat(this.searchTerm) : ''));
                  break;
                }
            }
          }
        }]);

        return AuthCallbackComponent;
      }();

      AuthCallbackComponent.ɵfac = function AuthCallbackComponent_Factory(t) {
        return new (t || AuthCallbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_2__["AppLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_3__["JwtAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_4__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_5__["ThemeService"]));
      };

      AuthCallbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AuthCallbackComponent,
        selectors: [["app-auth-callback"]],
        decls: 2,
        vars: 0,
        template: function AuthCallbackComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Loading, Please wait...\n");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRoLWNhbGxiYWNrLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthCallbackComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-auth-callback',
            templateUrl: './auth-callback.component.html',
            styleUrls: ['./auth-callback.component.scss']
          }]
        }], function () {
          return [{
            type: app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_2__["AppLoaderService"]
          }, {
            type: app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_3__["JwtAuthService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_4__["LocalStoreService"]
          }, {
            type: app_shared_services_theme_service__WEBPACK_IMPORTED_MODULE_5__["ThemeService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "hxFr":
    /*!*********************************************************************!*\
      !*** ./src/app/views/sessions/fingerprint/fingerprint.component.ts ***!
      \*********************************************************************/

    /*! exports provided: FingerprintComponent */

    /***/
    function hxFr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FingerprintComponent", function () {
        return FingerprintComponent;
      });
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var _shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../../../shared/services/finger-print-capture.service */
      "rp8y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/shared/services/auth/jwt-auth.service */
      "nZzT");
      /* harmony import */


      var app_views_home_account_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/views/home/account.service */
      "kA6c");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      var FingerprintComponent = /*#__PURE__*/function () {
        function FingerprintComponent(dialogRef, fpCaptureService, data, cdr, snack, formBuilder, ls, router, jwtService, accountService) {
          _classCallCheck(this, FingerprintComponent);

          this.dialogRef = dialogRef;
          this.fpCaptureService = fpCaptureService;
          this.data = data;
          this.cdr = cdr;
          this.snack = snack;
          this.formBuilder = formBuilder;
          this.ls = ls;
          this.router = router;
          this.jwtService = jwtService;
          this.accountService = accountService;
          this.titleMessage = "Please use your fingerprint to authenticate";
          this.contentMessage = "Please place your thumb on the fingerprint reader to proceed.";
          this.totalItems = 0;
          this.totalPages = 0;
          this.flag = false;
        }

        _createClass(FingerprintComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.custFormGroup = this.formBuilder.group({
              "anyCustomerId": ['']
            });
          }
        }, {
          key: "applyFilter",
          value: function applyFilter(event) {
            event.target.value = event.target.value.trim();
            this.customerId = event.target.value;
            console.log("Value : ", this.customerId);
          }
        }, {
          key: "getCutomerData",
          value: function getCutomerData(formData) {
            console.log('formData :: ', formData);
          }
        }, {
          key: "goToClose",
          value: function goToClose() {
            this.dialogRef.close();
          }
          /* @method : to capture the the finger print */

        }, {
          key: "captureFingerPrintHttps",
          value: function captureFingerPrintHttps() {
            var _this2 = this;

            console.log("in component");
            this.fpCaptureService.CallingSGIFPCapture().subscribe(function (capturedData) {
              console.log('capturedData:: ', capturedData);

              if (capturedData.ErrorCode == 0) {
                _this2.snack.open("Finding ,is registed customer", 'OK', {
                  duration: 1000,
                  verticalPosition: 'top',
                  horizontalPosition: 'right'
                });

                _this2.getFpDataForMatchOnPageLoad(capturedData.TemplateBase64);
              } else {
                _this2.getError(capturedData.ErrorCode);
              }
            }, function (error) {
              _this2.snack.open("".concat(error), 'OK', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });
            });
          }
        }, {
          key: "getFpDataForMatchOnPageLoad",
          value: function getFpDataForMatchOnPageLoad(templateBase64) {
            var _this3 = this;

            console.log('TemplateBase64 :: ', templateBase64);
            this.fpCaptureService.getCustInfoByFp(0, 100, 4).subscribe(function (resp) {
              console.log('resp:: ', resp); // this.totalItems=resp.totalItems;
              // this.totalPages=resp.totalPages;

              if (resp.totalPages - 1 == 0) {
                Object.keys(resp.data).forEach(function (key) {
                  _this3.matchFpFromUi(templateBase64, resp.data[key]);
                });
              } else {
                for (var i = 0; i < resp.totalPages; i++) {
                  if (i == 0) {
                    Object.keys(resp.data).forEach(function (key) {
                      _this3.matchFpFromUi(templateBase64, resp.data[key]);
                    });
                  } else {// to-da: need to implement logic when more data is present
                  }
                }
              }
            });
          }
        }, {
          key: "matchFpFromUi",
          value: function matchFpFromUi(template1, data) {
            var _this4 = this;

            this.fpCaptureService.CallingSGIFPMatch(template1, data.fpTemplateBase64).subscribe(function (fpResp) {
              console.log('fpResp : ', fpResp);

              if (fpResp.MatchingScore >= 100) {
                var custId = data.customerId;

                _this4.router.navigateByUrl('/others/Service');

                _this4.ls.setItem('customer_id', custId);

                _this4.cdr.markForCheck();

                _this4.cdr.detectChanges();

                _this4.dialogRef.close({
                  message: 'Confirm',
                  custId: custId
                });

                _this4.snack.open("User found : ".concat(data.customerId), 'OK', {
                  duration: 1000,
                  verticalPosition: 'top',
                  horizontalPosition: 'right'
                });

                return;
              }
            });
          }
          /* @method : to get error code of finger print device */

        }, {
          key: "getError",
          value: function getError(errorCode) {
            var error = this.fpCaptureService.errorCodeService(errorCode);
            console.log('error code', error);
          }
          /* @method : to verify the captured finger print from stored data */

        }, {
          key: "matchFingerPrint",
          value: function matchFingerPrint(capturedData) {
            var _this5 = this;

            this.fpCaptureService.matchCapturedFp(4, capturedData).subscribe(function (matchFp) {
              console.log('matchFp:: ', matchFp);

              if (matchFp.customerId) {
                var data = matchFp.customerId;

                _this5.router.navigateByUrl('/others/Service');

                _this5.ls.setItem('customer_id', matchFp.customerId);

                _this5.cdr.markForCheck();

                _this5.cdr.detectChanges();

                _this5.dialogRef.close({
                  message: 'Confirm',
                  data: data
                });
              } else {
                console.log('else');
              }
            });
          }
        }, {
          key: "saveBiometric",
          value: function saveBiometric(capFingerPrint, fingerName, cId) {
            var _this6 = this;

            var screen = 'Kisok Authenticate';
            this.fpCaptureService.saveBiometric(capFingerPrint, fingerName, cId, screen).subscribe(function (data) {
              console.log("after save ", data);

              _this6.cdr.markForCheck();

              _this6.snack.open('Captured ' + fingerName + ' Finger', 'OK', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });
            });
          }
        }]);

        return FingerprintComponent;
      }();

      FingerprintComponent.ɵfac = function FingerprintComponent_Factory(t) {
        return new (t || FingerprintComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_2__["FingerPrintCaptureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_0__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_7__["JwtAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](app_views_home_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"]));
      };

      FingerprintComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: FingerprintComponent,
        selectors: [["app-fingerprint"]],
        decls: 19,
        vars: 2,
        consts: [[2, "background-color", "white"], ["fxLayout", "row", 1, "contain"], [1, "backIcon", 3, "click"], ["fxLayout", "column", "fxLayoutGap", "5%", "fxLayoutAlign", "space-between center", 1, ""], [1, "card-title"], [1, "para"], [1, "matIcon"], ["mat-flat-button", "", 1, "buttonScan", 3, "click"]],
        template: function FingerprintComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FingerprintComponent_Template_mat_icon_click_2_listener() {
              return ctx.goToClose();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "fingerprint");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function FingerprintComponent_Template_button_click_17_listener() {
              return ctx.captureFingerPrintHttps();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "SCAN");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.titleMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.contentMessage);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"]],
        styles: [".main-div[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.contain[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.text[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding-top: 25px;\n}\n\n.backIcon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 0% 0% 0% 0%;\n  font-size: 20px;\n  color: #000000;\n}\n\n.para[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: center;\n}\n\n.matIcon[_ngcontent-%COMP%] {\n  color: #4BADF7;\n  padding-right: 4rem;\n  font-size: 6rem;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 24px;\n  text-align: center;\n  color: #000000;\n}\n\np[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: sans-serif;\n  font-size: 12px;\n}\n\n.buttonScan[_ngcontent-%COMP%] {\n  width: 170px;\n  border-radius: 25px;\n  background-color: #456EFE;\n  color: #FFFFFF;\n  font-family: sans-serif;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZmluZ2VycHJpbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDcEI7O0FBRUE7RUFDSSx5QkFBMEI7QUFDOUI7O0FBQ0E7RUFDSSx1QkFBdUI7RUFDdkIsaUJBQWlCO0FBRXJCOztBQUFBO0VBQ0ksZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsY0FBYztBQUdsQjs7QUFBQTtFQUNJLGNBQWM7RUFFZCxrQkFBa0I7QUFFdEI7O0FBQUE7RUFDSSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7QUFHbkI7O0FBREE7RUFDSSx1QkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0FBSWxCOztBQURBO0VBQ0ksY0FBYztFQUNkLHVCQUFzQjtFQUN0QixlQUFlO0FBSW5COztBQUZBO0VBQ0ksWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLHVCQUFzQjtBQUsxQjs7QUFIRTtFQUNFLG1CQUFtQjtBQU12QiIsImZpbGUiOiJmaW5nZXJwcmludC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWRpdntcclxuXHRoZWlnaHQ6IDEwMHZoO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4uY29udGFpbntcclxuICAgIGp1c3RpZnktY29udGVudDogIGZsZXgtZW5kO1xyXG59XHJcbi50ZXh0e1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcclxufVxyXG4uYmFja0ljb257XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwJSAwJSAwJSAwJTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgLy8gb3BhY2l0eTogNDAlO1xyXG59XHJcbi5wYXJhe1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAvLyBvcGFjaXR5OiAzNyU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1hdEljb257XHJcbiAgICBjb2xvcjogIzRCQURGNztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDRyZW07XHJcbiAgICBmb250LXNpemU6IDZyZW07XHJcbn1cclxuLmNhcmQtdGl0bGV7XHJcbiAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAvLyBvcGFjaXR5OiA2MiU7XHJcbn1cclxucHtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDsgXHJcbn1cclxuLmJ1dHRvblNjYW57XHJcbiAgICB3aWR0aDogMTcwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NkVGRTtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLmZ1bGwtd2lkdGh7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](FingerprintComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
          args: [{
            selector: 'app-fingerprint',
            templateUrl: './fingerprint.component.html',
            styleUrls: ['./fingerprint.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
          }, {
            type: _shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_2__["FingerPrintCaptureService"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_0__["LocalStoreService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_7__["JwtAuthService"]
          }, {
            type: app_views_home_account_service__WEBPACK_IMPORTED_MODULE_8__["AccountService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=views-sessions-sessions-module-es5.js.map