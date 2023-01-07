(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
      "fXoL");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var _c0 = function _c0() {
        return ["/"];
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
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/services/auth/jwt-auth.service */
      "nZzT");
      /* harmony import */


      var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-custom-validators */
      "uxn7");
      /* harmony import */


      var _fingerprint_fingerprint_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../fingerprint/fingerprint.component */
      "hxFr");
      /* harmony import */


      var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ngx-perfect-scrollbar */
      "Kdsb");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/divider */
      "f0Cb");

      var _c0 = function _c0() {
        return {};
      };

      var SigninComponent = /*#__PURE__*/function () {
        function SigninComponent(fb, router, jwtService, dialog) {
          _classCallCheck(this, SigninComponent);

          this.fb = fb;
          this.router = router;
          this.jwtService = jwtService;
          this.dialog = dialog;
        }

        _createClass(SigninComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
            var confirmPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', ngx_custom_validators__WEBPACK_IMPORTED_MODULE_5__["CustomValidators"].equalTo(password));
            this.signinForm = this.fb.group({
              email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
              password: password,
              agreed: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            var _this = this;

            if (!this.signinForm.invalid) {
              // do what you wnat with your data
              console.log(this.signinForm.value);
              this.jwtService.signin().subscribe(function (res) {
                _this.router.navigateByUrl('/others/blank');
              }, function (err) {
                return console.error("Err", err);
              });
            }
          }
        }, {
          key: "openDialog",
          value: function openDialog() {
            var dialogRef = this.dialog.open(_fingerprint_fingerprint_component__WEBPACK_IMPORTED_MODULE_6__["FingerprintComponent"]);
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("Dialog result: ".concat(result));
            });
          }
        }]);

        return SigninComponent;
      }();

      SigninComponent.ɵfac = function SigninComponent_Factory(t) {
        return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JwtAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]));
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sign in");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Signin");

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
        directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"]],
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
    "Kj45":
    /*!************************************************************!*\
      !*** ./src/app/views/sessions/otp/onlynumber.directive.ts ***!
      \************************************************************/

    /*! exports provided: CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR, OnlynumberDirective */

    /***/
    function Kj45(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR", function () {
        return CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OnlynumberDirective", function () {
        return OnlynumberDirective;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function () {
          return OnlynumberDirective;
        }),
        multi: true
      };

      var OnlynumberDirective = /*#__PURE__*/function () {
        function OnlynumberDirective(elementRef, renderer) {
          _classCallCheck(this, OnlynumberDirective);

          this.elementRef = elementRef;
          this.renderer = renderer;
        }

        _createClass(OnlynumberDirective, [{
          key: "onInputChange",
          value: function onInputChange(value) {
            var filteredValue = filterValue(value);
            this.updateTextInput(filteredValue, this.value !== filteredValue);
          }
        }, {
          key: "onBlur",
          value: function onBlur() {
            this.onTouched();
          }
        }, {
          key: "updateTextInput",
          value: function updateTextInput(value, propagateChange) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'value', value);

            if (propagateChange) {
              this.onChange(value);
            }

            this.value = value;
          } // ControlValueAccessor Interface

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
          }
        }, {
          key: "writeValue",
          value: function writeValue(value) {
            value = value ? String(value) : '';
            this.updateTextInput(value, false);
          }
        }]);

        return OnlynumberDirective;
      }();

      OnlynumberDirective.ɵfac = function OnlynumberDirective_Factory(t) {
        return new (t || OnlynumberDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]));
      };

      OnlynumberDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: OnlynumberDirective,
        selectors: [["", "onlyNumber", ""]],
        hostBindings: function OnlynumberDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function OnlynumberDirective_input_HostBindingHandler($event) {
              return ctx.onInputChange($event.target.value);
            })("blur", function OnlynumberDirective_blur_HostBindingHandler() {
              return ctx.onBlur();
            });
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR])]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnlynumberDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
          args: [{
            selector: '[onlyNumber]',
            providers: [CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
          }];
        }, {
          onInputChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['input', ['$event.target.value']]
          }],
          onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['blur']
          }]
        });
      })();

      function filterValue(value) {
        return value.replace(/[^0-9]*/g, '');
      }
      /***/

    },

    /***/
    "KvEN":
    /*!*****************************************************!*\
      !*** ./src/app/views/sessions/otp/otp.component.ts ***!
      \*****************************************************/

    /*! exports provided: OtpComponent */

    /***/
    function KvEN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpComponent", function () {
        return OtpComponent;
      });
      /* harmony import */


      var _shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../../shared/services/finger-print-capture.service */
      "rp8y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var app_shared_components_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/components/toastr/toastr.component */
      "YJH2");
      /* harmony import */


      var app_shared_models_otp_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/shared/models/otp.model */
      "V4gq");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var _fingerprint_fingerprint_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../fingerprint/fingerprint.component */
      "hxFr");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");

      var OtpComponent = /*#__PURE__*/function () {
        function OtpComponent(router, _formBuilder, toast, apiService, ls, dialog, snack, fpCaptureService, cdk, toastr) {
          _classCallCheck(this, OtpComponent);

          this.router = router;
          this._formBuilder = _formBuilder;
          this.toast = toast;
          this.apiService = apiService;
          this.ls = ls;
          this.dialog = dialog;
          this.snack = snack;
          this.fpCaptureService = fpCaptureService;
          this.cdk = cdk;
          this.toastr = toastr;
          this.bankName = 'DEMOBANK';
          this.otpValue = null;
          this.otpValid = false;
          this.verifyOtpModel = new app_shared_models_otp_model__WEBPACK_IMPORTED_MODULE_6__["verifyotpModel"]();
          this.oTpModel = new app_shared_models_otp_model__WEBPACK_IMPORTED_MODULE_6__["otpModel"]();
        }

        _createClass(OtpComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.transactionTypeValue = this.ls.getItem('TransactionType'); //this.appointmentIdvalue = this.ls.getItem('appointmentId');

            console.log(this.transactionTypeValue);
            this.oTpForm = this._formBuilder.group({
              otpNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
            this.toast.showSuccess('', 'OTP is sent to registered Mobile Number');
            this.PhoneNumLogin = localStorage.getItem('phonenumFromLogin');
          }
        }, {
          key: "validateOtp",
          value: function validateOtp(otpValue) {
            var _this2 = this;

            console.log("OTP validaion", otpValue);

            if (otpValue.otpNumber == "") {
              this.snack.open("Please enter OTP to continue", 'OK', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });
            } else {
              // if (this.otpValue == "" || this.otpValue == null) {
              //   // Backend validation 
              //   console.log("OTP null");
              //   this.otpValid = false ;
              // } else {
              //   console.log("OTP not null");
              //   this.otpValid = true ;
              // }
              this.customerPhoneNum = localStorage.getItem("phonenumFromLogin");
              console.log("Phonenumber from Local", this.customerPhoneNum, otpValue);
              this.verifyOtpModel.sourceKey = 'mobile';
              this.verifyOtpModel.sourceValue = this.customerPhoneNum;
              this.verifyOtpModel.otp = otpValue.otpNumber;
              this.verifyOtpModel.type = '';
              console.log("model", this.verifyOtpModel);
              this.apiService.verifyOtp(this.verifyOtpModel).subscribe(function (otpResp) {
                console.log('otpResp :: ', otpResp);

                if (otpResp != null) {
                  if (otpResp.userId != '' && otpResp.userId != null) {
                    // this.router.navigateByUrl('/others/services');

                    /* TO-DO: need to uncomment this.openDialog() for fingerprint verification */
                    // this.openDialog(otpResp);
                    console.log(_this2.transactionTypeValue);

                    if (_this2.transactionTypeValue) {
                      console.log(_this2.transactionTypeValue);

                      if (_this2.transactionTypeValue.data.appointmentId != null) {
                        if (_this2.transactionTypeValue.data.trnType === 'Cash Withdrawal') {
                          _this2.router.navigateByUrl('/others/cw-cash-withdrawal');
                        } else if (_this2.transactionTypeValue.data.trnType == 'Cash Deposit') {
                          _this2.router.navigateByUrl('/others/cash-deposit');
                        } else if (_this2.transactionTypeValue.data.trnType == 'Cheque Deposit') {
                          _this2.router.navigateByUrl('/others/cheque-deposit');
                        } else if (_this2.transactionTypeValue.data.trnType == 'Cheque Withdrawal') {
                          _this2.router.navigateByUrl('/others/cheque-withdrawal');
                        }
                      }
                    } else {
                      _this2.openDialog(otpResp);
                    }

                    localStorage.setItem('userId', otpResp.userId);

                    _this2.snack.open("Validation successful", 'OK', {
                      duration: 4000,
                      verticalPosition: 'top',
                      horizontalPosition: 'right'
                    });
                  } else {
                    _this2.snack.open("".concat(otpResp.responseMessage), 'OK', {
                      duration: 4000,
                      verticalPosition: 'top',
                      horizontalPosition: 'right'
                    });
                  }
                }
              }, function (error) {
                console.log(error.status); // this.errorStatus = error.status;

                _this2.snack.open("Incorrect OTP. Please try again.", 'OK', {
                  duration: 4000,
                  verticalPosition: 'top',
                  horizontalPosition: 'right'
                }); // if (this.errorStatus == 200) {
                //   // this.router.navigateByUrl('/others/services');
                //   /* TO-DO: need to uncomment this for fingerprint verification */
                //   // this.openDialog();
                // }

              });
            }
          }
        }, {
          key: "getOtp",
          value: function getOtp() {
            var _this3 = this;

            localStorage.setItem("PhoneNumLogin", this.customerPhoneNum);
            this.oTpModel.source = 'customer';
            this.oTpModel.source_key = 'mobile';
            this.oTpModel.source_value = this.PhoneNumLogin;
            console.log("model", this.oTpModel);
            this.apiService.getOtp(this.oTpModel).subscribe(function (otpResp) {
              console.log("Response Success", otpResp);
              _this3.otpResponse = otpResp;

              _this3.snack.open("OTP has been sent again", 'OK', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });
              /* Added validation for un-registered mobile nummber is entered */


              if (_this3.otpResponse.otpVal.userId === "New Customer" || _this3.otpResponse.otpVal.userId === '' && _this3.otpResponse.otpVal.userId === null) {
                _this3.cdk.detectChanges(); // this.userResp = true;

              }
            }); // this.router.navigateByUrl('/otp');
          }
        }, {
          key: "openDialog",
          value: function openDialog(otpResp) {
            this.userData = this.fpCaptureService.userDataService(otpResp);
            var dialogRef = this.dialog.open(_fingerprint_fingerprint_component__WEBPACK_IMPORTED_MODULE_8__["FingerprintComponent"], {
              width: '50%',
              data: otpResp
            });
            dialogRef.afterClosed().subscribe(function (result) {
              console.log("Dialog result: ".concat(result));
            });
          }
        }, {
          key: "goToServiceScreen",
          value: function goToServiceScreen() {
            console.log("Go to Service");

            if (this.otpValid) {
              if (this.transactionTypeValue == 'Cash Withdrawal') {
                this.router.navigateByUrl('/others/cash-withdrawal');
              } else if (this.transactionTypeValue == 'Cash Deposit') {
                this.router.navigateByUrl('/others/cash-deposit');
              } else if (this.transactionTypeValue == 'Cheque Withdrawal') {
                this.router.navigateByUrl('/others/cheque-withdrawal');
              } else if (this.transactionTypeValue == 'Cheque Deposit') {
                this.router.navigateByUrl('/others/cheque-deposit');
              }
            }
          }
        }, {
          key: "goToLoginScreen",
          value: function goToLoginScreen() {
            this.router.navigateByUrl('/sessions/login');
          }
        }]);

        return OtpComponent;
      }();

      OtpComponent.ɵfac = function OtpComponent_Factory(t) {
        return new (t || OtpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_components_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_5__["ToastrComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_11__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_0__["FingerPrintCaptureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"]));
      };

      OtpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: OtpComponent,
        selectors: [["app-otp"]],
        decls: 36,
        vars: 4,
        consts: [[1, "login_page"], [1, "card_container"], ["fxFlex", "50%", 1, "left_container"], [1, "border-text"], ["fxLayout", "row"], [1, "backIcon", 3, "click"], [1, "card-title"], ["novalidate", "", 3, "formGroup"], [1, "number"], [1, "phoneCard"], ["matPrefix", ""], ["fxLayout", "row", "fxLayoutGap", "10px", 2, "margin-top", "-5px"], ["matInput", "", "type", "text", "formControlName", "otpNumber", 1, "no-outline"], ["fxLayout", "row", 2, "width", "200%", "margin-left", "78%", "font-size", "13px"], [2, "color", "lightgray"], [2, "color", "#004c97", "cursor", "pointer", 3, "click"], ["fxLayout", "row", 1, "button1"], ["mat-flat-button", "", "color", "primary", 1, "login_btn", 3, "ngClass", "disabled", "click"], ["fxFlex", "50%", 1, "right_container"], ["src", "assets/images/otp.png", 1, "img1"]],
        template: function OtpComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-icon", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OtpComponent_Template_mat_icon_click_10_listener() {
              return ctx.goToLoginScreen();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "keyboard_backspace ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " \xA0\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "OTP");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Please Enter Your OTP");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "mat-card", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "span", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OtpComponent_Template_span_click_26_listener() {
              return ctx.getOtp();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Resend OTP");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OtpComponent_Template_button_click_30_listener() {
              ctx.validateOtp(ctx.oTpForm.value);
              return ctx.goToServiceScreen();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.bankName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.oTpForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.oTpForm.invalid ? "beforeContinue" : "afterContinue")("disabled", ctx.oTpForm.get("otpNumber").invalid);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardTitle"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatPrefix"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutGapDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__["DefaultClassDirective"]],
        styles: [".login_page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.login_page[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50%;\n  height: 100%;\n  background-color: #3858cb0d;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 530px;\n  min-height: 500px;\n  border-radius: 30px 0 0 30px;\n  padding: 0;\n  margin: 2rem auto;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%] {\n  padding: 3rem;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   .border-text[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  text-align: left;\n  font-family: \"Phosphate\";\n  font-size: 18px;\n  color: #004c97;\n  font: normal normal normal 25px/31px Phosphate;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   .backIcon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 20px;\n  font-weight: bold;\n  padding: 0px 0px;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  color: #7e84a3;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .phoneCard[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px;\n  height: 45px;\n  margin: 0.75rem 0;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .phoneCard[_ngcontent-%COMP%]   .vertical-line[_ngcontent-%COMP%] {\n  width: 2px;\n  background-color: #2c2c2c1f;\n  height: 50px;\n  margin-top: -17px;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .phoneCard[_ngcontent-%COMP%]   .no-outline[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  height: 20px;\n  width: 80%;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .login_btn[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 30px;\n  height: 35px;\n  margin: 1.7rem 0;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .login_btn.afterContinue[_ngcontent-%COMP%] {\n  border-color: transparent;\n  color: #fff;\n  background: transparent linear-gradient(90deg, #051a2d 0%, #004c97 100%);\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .clickHereText[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .clickHereText[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-right: 10px;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .clickHereText[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 8px;\n  text-align: center;\n  padding: 0 4px;\n  width: 100%;\n  line-height: 1.4;\n  white-space: break-spaces;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .right_container[_ngcontent-%COMP%]   .img1[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n  .clickHereText button .mat-button-wrapper {\n  width: 100%;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcb3RwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO0FBRU47QUFBSTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSw0QkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQUVOO0FBRE07RUFDRSxhQUFBO0FBR1I7QUFGUTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsOENBQUE7QUFJVjtBQUZRO0VBQ0ksZUFBQTtBQUlaO0FBRlE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FBSVY7QUFEVTtFQUNFLGNBQUE7QUFHWjtBQURVO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBR1o7QUFGWTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUlkO0FBRlk7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBSWQ7QUFEVTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUdaO0FBRlk7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSx3RUFBQTtBQUlkO0FBQVU7RUFDRSxlQUFBO0FBRVo7QUFEWTtFQUNFLGVBQUE7QUFHZDtBQUFVO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBRVo7QUFEWTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQUdkO0FBRmM7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUloQjtBQUdRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFEVjtBQU9FO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUFKSiIsImZpbGUiOiJvdHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW5fcGFnZSB7XHJcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAmOjpiZWZvcmUge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMDtcclxuICAgICAgbGVmdDogMDtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzg1OGNiMGQ7XHJcbiAgICB9XHJcbiAgICBtYXQtY2FyZC5jYXJkX2NvbnRhaW5lciB7XHJcbiAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgIGhlaWdodDogNTMwcHg7XHJcbiAgICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAzMHB4IDAgMCAzMHB4O1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBtYXJnaW46IDJyZW0gYXV0bztcclxuICAgICAgLmxlZnRfY29udGFpbmVyIHtcclxuICAgICAgICBwYWRkaW5nOiAzcmVtO1xyXG4gICAgICAgIC5ib3JkZXItdGV4dCB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMnB4O1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBob3NwaGF0ZVwiO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgY29sb3I6ICMwMDRjOTc7XHJcbiAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAyNXB4LzMxcHggUGhvc3BoYXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYmFja0ljb257XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgLm51bWJlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjN2U4NGEzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBob25lQ2FyZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwLjc1cmVtIDA7XHJcbiAgICAgICAgICAgIC52ZXJ0aWNhbC1saW5lIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzJjMmMxZjtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTE3cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5vLW91dGxpbmUge1xyXG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubG9naW5fYnRuIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxLjdyZW0gMDtcclxuICAgICAgICAgICAgJi5hZnRlckNvbnRpbnVlIHtcclxuICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50XHJcbiAgICAgICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwNTFhMmQgMCUsICMwMDRjOTcgMTAwJSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZpZWxkc2V0IHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBsZWdlbmQge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNsaWNrSGVyZVRleHQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgYiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDhweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5yaWdodF9jb250YWluZXIge1xyXG4gICAgICAgIC5pbWcxIHtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLmNsaWNrSGVyZVRleHQgYnV0dG9uIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICAiXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OtpComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-otp',
            templateUrl: './otp.component.html',
            styleUrls: ['./otp.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: app_shared_components_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_5__["ToastrComponent"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_11__["LocalStoreService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]
          }, {
            type: _shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_0__["FingerPrintCaptureService"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"]
          }];
        }, null);
      })();

      function openToast() {
        throw new Error('Function not implemented.');
      }

      function errorMessage(errorMessage) {
        throw new Error('Function not implemented.');
      }
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
      "fXoL");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

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
    "OoMb":
    /*!*********************************************************!*\
      !*** ./src/app/views/sessions/login/login.component.ts ***!
      \*********************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function OoMb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var _shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../../shared/services/finger-print-capture.service */
      "rp8y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/services/Dialog/dialog.service */
      "LP5l");
      /* harmony import */


      var app_shared_models_otp_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/models/otp.model */
      "V4gq");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var app_shared_services_showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/shared/services/showMessage/show-message.service */
      "x/2q");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _otp_onlynumber_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../otp/onlynumber.directive */
      "Kj45");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(router, _formBuilder, dialogService, apiService, showMessageService, snack, cdr, fpCaptureService) {
          _classCallCheck(this, LoginComponent);

          this.router = router;
          this._formBuilder = _formBuilder;
          this.dialogService = dialogService;
          this.apiService = apiService;
          this.showMessageService = showMessageService;
          this.snack = snack;
          this.cdr = cdr;
          this.fpCaptureService = fpCaptureService;
          this.showWalkinCustomerLink = true;
          this.isShow = true;
          this.oTpModel = new app_shared_models_otp_model__WEBPACK_IMPORTED_MODULE_5__["otpModel"]();
          this.isValid = false;
          this.bankName = 'DEMOBANK';
          this.loginValid = true;
          this.required = true;
          this.defaultValue = {
            callingCode: '+49',
            name: 'Deutschland',
            alpha2Code: 'DE',
            alpha3Code: 'DEU',
            numericCode: '276'
          }; // if(error.status){
          // this.router.navigateByUrl('/sessions/otp');
          // }
          // let lngth ;
          // for (let i = 0; i < this.maskingNumber.length; i++) {
          //   if (this.maskingNumber[i].phone ==this.countryCode)
          //    {
          //     lngth = this.maskingNumber[i].phone.length + this.maskingNumber[i].mask.replace(/ /, "").replace(/-/, "").length ;
          //     if(this.fieldLength == lngth){
          //         this.router.navigateByUrl('/sessions/otp');
          //         this.loginValid = true;
          //      } else {
          //        console.log("Not Matching");
          //        this.loginValid = false;
          //      }
          //     }
          // }

          this.maskingNumber = [{
            code: 'AD',
            phone: '+376',
            mask: '999 999'
          }, {
            code: 'AE',
            phone: '+971',
            mask: '999 999 9999'
          }, {
            code: 'AF',
            phone: '+93',
            mask: '999 999 9999'
          }, {
            code: 'AG',
            phone: '+1 (268)',
            mask: '999-9999'
          }, {
            code: 'AI',
            phone: '+1 (264)',
            mask: '999-9999'
          }, {
            code: 'AL',
            phone: '+355',
            mask: '999 999 9999'
          }, {
            code: 'AM',
            phone: '+374',
            mask: '999 999999'
          }, {
            code: 'AN',
            phone: '+599',
            mask: '999 9999'
          }, {
            code: 'AO',
            phone: '+244',
            mask: '999 999 999'
          }, {
            code: 'AQ',
            phone: '+672',
            mask: '9 99999'
          }, {
            code: 'AR',
            phone: '+54',
            mask: '999 99-9999-9999'
          }, {
            code: 'AS',
            phone: '+1 (684)',
            mask: '999-9999'
          }, {
            code: 'AT',
            phone: '+43',
            mask: '9999 999999'
          }, {
            code: 'AU',
            phone: '+61',
            mask: '9999 999 999'
          }, {
            code: 'AW',
            phone: '+297',
            mask: '999 9999'
          }, {
            code: 'AZ',
            phone: '+994',
            mask: '999 999 99 99'
          }, {
            code: 'BA',
            phone: '+387',
            mask: '999 999 999'
          }, {
            code: 'BB',
            phone: '+1 (246)',
            mask: '999-9999'
          }, {
            code: 'BD',
            phone: '+880',
            mask: '99999-999999'
          }, {
            code: 'BE',
            phone: '+32',
            mask: '9999 99 99 99'
          }, {
            code: 'BF',
            phone: '+226',
            mask: '99 99 99 99'
          }, {
            code: 'BG',
            phone: '+359',
            mask: '999 999 999'
          }, {
            code: 'BH',
            phone: '+973',
            mask: '9999 9999'
          }, {
            code: 'BI',
            phone: '+257',
            mask: '99 99 99 99'
          }, {
            code: 'BJ',
            phone: '+229',
            mask: '99 99 99 99'
          }, {
            code: 'BL',
            phone: '+590',
            mask: '9999 99 99 99'
          }, {
            code: 'BM',
            phone: '+1 (441)',
            mask: '999-9999'
          }, {
            code: 'BN',
            phone: '+673',
            mask: '999 9999'
          }, {
            code: 'BO',
            phone: '+591',
            mask: '99999999'
          }, {
            code: 'BR',
            phone: '+55',
            mask: '(99) 99999-9999'
          }, {
            code: 'BS',
            phone: '+1 (242)',
            mask: '999-9999'
          }, {
            code: 'BT',
            phone: '+975',
            mask: '99 99 99 99'
          }, {
            code: 'BW',
            phone: '+267',
            mask: '99 999 999'
          }, {
            code: 'BY',
            phone: '+375',
            mask: '9 999 999-99-99'
          }, {
            code: 'BZ',
            phone: '+501',
            mask: '999-9999'
          }, {
            code: 'CA',
            phone: '+1',
            mask: '(999) 999-9999'
          }, {
            code: 'CC',
            phone: '+61',
            mask: '9999 999 999'
          }, {
            code: 'CD',
            phone: '+243',
            mask: '9999 999 999'
          }, {
            code: 'CF',
            phone: '+236',
            mask: '99 99 99 99'
          }, {
            code: 'CG',
            phone: '+242',
            mask: '99 999 9999'
          }, {
            code: 'CH',
            phone: '+41',
            mask: '999 999 99 99'
          }, {
            code: 'CI',
            phone: '+225',
            mask: '99 99 99 99'
          }, {
            code: 'CK',
            phone: '+682',
            mask: '99 9999'
          }, {
            code: 'CL',
            phone: '+56',
            mask: '9 9999 9999'
          }, {
            code: 'CM',
            phone: '+237',
            mask: '9 99 99 99 99'
          }, {
            code: 'CN',
            phone: '+86',
            mask: '999 9999 9999'
          }, {
            code: 'CO',
            phone: '+57',
            mask: '999 9999999'
          }, {
            code: 'CR',
            phone: '+506',
            mask: '9999 9999'
          }, {
            code: 'CU',
            phone: '+53',
            mask: '99 9999999'
          }, {
            code: 'CV',
            phone: '+238',
            mask: '999 99 99'
          }, {
            code: 'CW',
            phone: '+599',
            mask: '999 9999'
          }, {
            code: 'CX',
            phone: '+61',
            mask: '9999 999 999'
          }, {
            code: 'CY',
            phone: '+357',
            mask: '99 999999'
          }, {
            code: 'CZ',
            phone: '+420',
            mask: '999 999 999'
          }, {
            code: 'DE',
            phone: '+49',
            mask: '99999 9999999'
          }, {
            code: 'DJ',
            phone: '+253',
            mask: '99 99 99 99'
          }, {
            code: 'DK',
            phone: '+45',
            mask: '99 99 99 99'
          }, {
            code: 'DM',
            phone: '+1 (767)',
            mask: '999-9999'
          }, {
            code: 'DO',
            phone: '+1 (809)',
            mask: '999-9999'
          }, {
            code: 'DZ',
            phone: '+213',
            mask: '9999 99 99 99'
          }, {
            code: 'EC',
            phone: '+593',
            mask: '999 999 9999'
          }, {
            code: 'EE',
            phone: '+372',
            mask: '9999 9999'
          }, {
            code: 'EG',
            phone: '+20',
            mask: '9999 999 9999'
          }, {
            code: 'EH',
            phone: '+212',
            mask: '9999-999999'
          }, {
            code: 'ER',
            phone: '+291',
            mask: '99 999 999'
          }, {
            code: 'ES',
            phone: '+34',
            mask: '999 99 99 99'
          }, {
            code: 'ET',
            phone: '+251',
            mask: '999 999 9999'
          }, {
            code: 'FI',
            phone: '+358',
            mask: '999 9999999'
          }, {
            code: 'FJ',
            phone: '+679',
            mask: '999 9999'
          }, {
            code: 'FK',
            phone: '+500',
            mask: '99999'
          }, {
            code: 'FM',
            phone: '+691',
            mask: '999 9999'
          }, {
            code: 'FO',
            phone: '+298',
            mask: '999999'
          }, {
            code: 'FR',
            phone: '+33',
            mask: '99 99 99 99 99'
          }, {
            code: 'GA',
            phone: '+241',
            mask: '99 99 99 99'
          }, {
            code: 'GB',
            phone: '+44',
            mask: '99999 99999'
          }, {
            code: 'GD',
            phone: '+1 (473)',
            mask: '999-9999'
          }, {
            code: 'GE',
            phone: '+995',
            mask: '999 99 99 99'
          }, {
            code: 'GG',
            phone: '+44',
            mask: '99999 999999'
          }, {
            code: 'GH',
            phone: '+233',
            mask: '999 999 9999'
          }, {
            code: 'GI',
            phone: '+350',
            mask: '99999999'
          }, {
            code: 'GL',
            phone: '+299',
            mask: '99 99 99'
          }, {
            code: 'GM',
            phone: '+220',
            mask: '999 9999'
          }, {
            code: 'GN',
            phone: '+224',
            mask: '999 99 99 99'
          }, {
            code: 'GQ',
            phone: '+240',
            mask: '999 999 999'
          }, {
            code: 'GR',
            phone: '+30',
            mask: '999 999 9999'
          }, {
            code: 'GT',
            phone: '+502',
            mask: '9999 9999'
          }, {
            code: 'GU',
            phone: '+1 (671)',
            mask: '999-9999'
          }, {
            code: 'GW',
            phone: '+245',
            mask: '999 999 999'
          }, {
            code: 'GY',
            phone: '+592',
            mask: '999 9999'
          }, {
            code: 'HK',
            phone: '+852',
            mask: '9999 9999'
          }, {
            code: 'HN',
            phone: '+504',
            mask: '9999-9999'
          }, {
            code: 'HR',
            phone: '+385',
            mask: '999 999 9999'
          }, {
            code: 'HT',
            phone: '+509',
            mask: '99 99 9999'
          }, {
            code: 'HU',
            phone: '+36',
            mask: '(99) 999 9999'
          }, {
            code: 'ID',
            phone: '+62',
            mask: '9999-999-999'
          }, {
            code: 'IE',
            phone: '+353',
            mask: '999 999 9999'
          }, {
            code: 'IL',
            phone: '+972',
            mask: '999-999-9999'
          }, {
            code: 'IM',
            phone: '+44',
            mask: '99999 999999'
          }, {
            code: 'IN',
            phone: '+91',
            mask: '99999 99999'
          }, {
            code: 'IO',
            phone: '+246',
            mask: '999 9999'
          }, {
            code: 'IQ',
            phone: '+964',
            mask: '9999 999 9999'
          }, {
            code: 'IR',
            phone: '+98',
            mask: '9999 999 9999'
          }, {
            code: 'IS',
            phone: '+354',
            mask: '999 9999'
          }, {
            code: 'IT',
            phone: '+39',
            mask: '999 999 9999'
          }, {
            code: 'JE',
            phone: '+44',
            mask: '99999 999999'
          }, {
            code: 'JM',
            phone: '+1 (876)',
            mask: '999-9999'
          }, {
            code: 'JO',
            phone: '+962',
            mask: '99 9999 9999'
          }, {
            code: 'JP',
            phone: '+81',
            mask: '999 9999-9999'
          }, {
            code: 'KE',
            phone: '+254',
            mask: '9999 999999'
          }, {
            code: 'KG',
            phone: '+996',
            mask: '9999 999 999'
          }, {
            code: 'KH',
            phone: '+855',
            mask: '999 999 999'
          }, {
            code: 'KI',
            phone: '+686',
            mask: '99999999'
          }, {
            code: 'KM',
            phone: '+269',
            mask: '999 99 99'
          }, {
            code: 'KN',
            phone: '+1 (869)',
            mask: '999-9999'
          }, {
            code: 'KP',
            phone: '+850',
            mask: '9999 999 9999'
          }, {
            code: 'KR',
            phone: '+82',
            mask: '999-9999-9999'
          }, {
            code: 'KW',
            phone: '+965',
            mask: '999 99999'
          }, {
            code: 'KY',
            phone: '+1 (345)',
            mask: '999-9999'
          }, {
            code: 'KZ',
            phone: '+7',
            mask: '9 (999) 999 9999'
          }, {
            code: 'LA',
            phone: '+856',
            mask: '999 99 999 999'
          }, {
            code: 'LB',
            phone: '+961',
            mask: '99 999 999'
          }, {
            code: 'LC',
            phone: '+1 (758)',
            mask: '999-9999'
          }, {
            code: 'LI',
            phone: '+423',
            mask: '999 999 999'
          }, {
            code: 'LK',
            phone: '+94',
            mask: '999 999 9999'
          }, {
            code: 'LR',
            phone: '+231',
            mask: '999 999 9999'
          }, {
            code: 'LS',
            phone: '+266',
            mask: '9999 9999'
          }, {
            code: 'LT',
            phone: '+370',
            mask: '(9-999) 99999'
          }, {
            code: 'LU',
            phone: '+352',
            mask: '999 999 999'
          }, {
            code: 'LV',
            phone: '+371',
            mask: '99 999 999'
          }, {
            code: 'LY',
            phone: '+218',
            mask: '999-9999999'
          }, {
            code: 'MA',
            phone: '+212',
            mask: '9999-999999'
          }, {
            code: 'MC',
            phone: '+377',
            mask: '99 99 99 99 99'
          }, {
            code: 'MD',
            phone: '+373',
            mask: '9999 99 999'
          }, {
            code: 'ME',
            phone: '+382',
            mask: '999 999 999'
          }, {
            code: 'MF',
            phone: '+590',
            mask: '9999 99 99 99'
          }, {
            code: 'MG',
            phone: '+261',
            mask: '999 99 999 99'
          }, {
            code: 'MH',
            phone: '+692',
            mask: '999-9999'
          }, {
            code: 'MK',
            phone: '+389',
            mask: '999 999 999'
          }, {
            code: 'ML',
            phone: '+223',
            mask: '99 99 99 99'
          }, {
            code: 'MM',
            phone: '+95',
            mask: '99 999 9999'
          }, {
            code: 'MN',
            phone: '+976',
            mask: '9999 9999'
          }, {
            code: 'MO',
            phone: '+853',
            mask: '9999 9999'
          }, {
            code: 'MP',
            phone: '+1 (670)',
            mask: '999-9999'
          }, {
            code: 'MR',
            phone: '+222',
            mask: '99 99 99 99'
          }, {
            code: 'MS',
            phone: '+1 (664)',
            mask: '999-9999'
          }, {
            code: 'MT',
            phone: '+356',
            mask: '9999 9999'
          }, {
            code: 'MU',
            phone: '+230',
            mask: '9999 9999'
          }, {
            code: 'MV',
            phone: '+960',
            mask: '999-9999'
          }, {
            code: 'MW',
            phone: '+265',
            mask: '9999 99 99 99'
          }, {
            code: 'MX',
            phone: '+52',
            mask: '999 999 999 9999'
          }, {
            code: 'MY',
            phone: '+60',
            mask: '999-999 9999'
          }, {
            code: 'MZ',
            phone: '+258',
            mask: '99 999 9999'
          }, {
            code: 'NA',
            phone: '+264',
            mask: '999 999 9999'
          }, {
            code: 'NC',
            phone: '+687',
            mask: '99 99 99'
          }, {
            code: 'NE',
            phone: '+227',
            mask: '99 99 99 99'
          }, {
            code: 'NG',
            phone: '+234',
            mask: '9999 999 9999'
          }, {
            code: 'NI',
            phone: '+505',
            mask: '9999 9999'
          }, {
            code: 'NL',
            phone: '+31',
            mask: '99 99999999'
          }, {
            code: 'NO',
            phone: '+47',
            mask: '999 99 999'
          }, {
            code: 'NP',
            phone: '+977',
            mask: '999-9999999'
          }, {
            code: 'NR',
            phone: '+674',
            mask: '999 9999'
          }, {
            code: 'NU',
            phone: '+683',
            mask: '999 9999'
          }, {
            code: 'NZ',
            phone: '+64',
            mask: '999 999 9999'
          }, {
            code: 'OM',
            phone: '+968',
            mask: '9999 9999'
          }, {
            code: 'PA',
            phone: '+507',
            mask: '9999-9999'
          }, {
            code: 'PE',
            phone: '+51',
            mask: '999 999 999'
          }, {
            code: 'PF',
            phone: '+689',
            mask: '99 99 99 99'
          }, {
            code: 'PG',
            phone: '+675',
            mask: '9999 9999'
          }, {
            code: 'PH',
            phone: '+63',
            mask: '9999 999 9999'
          }, {
            code: 'PK',
            phone: '+92',
            mask: '9999 9999999'
          }, {
            code: 'PL',
            phone: '+48',
            mask: '999 999 999'
          }, {
            code: 'PM',
            phone: '+508',
            mask: '999 99 99'
          }, {
            code: 'PN',
            phone: '+64',
            mask: '99 999999'
          }, {
            code: 'PR',
            phone: '+1 (787)',
            mask: '999-9999'
          }, {
            code: 'PS',
            phone: '+970',
            mask: '9999 999 999'
          }, {
            code: 'PT',
            phone: '+351',
            mask: '999 999 999'
          }, {
            code: 'PW',
            phone: '+680',
            mask: '999 9999'
          }, {
            code: 'PY',
            phone: '+595',
            mask: '9999 999999'
          }, {
            code: 'QA',
            phone: '+974',
            mask: '9999 9999'
          }, {
            code: 'RE',
            phone: '+262',
            mask: '9999 99 99 99'
          }, {
            code: 'RO',
            phone: '+40',
            mask: '9999 999 999'
          }, {
            code: 'RS',
            phone: '+381',
            mask: '999 9999999'
          }, {
            code: 'RU',
            phone: '+7',
            mask: '9 (999) 999-99'
          }, {
            code: 'RW',
            phone: '+250',
            mask: '9999 999 999'
          }, {
            code: 'SA',
            phone: '+966',
            mask: '999 999 9999'
          }, {
            code: 'SB',
            phone: '+677',
            mask: '99 99999'
          }, {
            code: 'SC',
            phone: '+248',
            mask: '9 999 999'
          }, {
            code: 'SD',
            phone: '+249',
            mask: '999 999 9999'
          }, {
            code: 'SE',
            phone: '+46',
            mask: '999-999 99 99'
          }, {
            code: 'SG',
            phone: '+65',
            mask: '9999 9999'
          }, {
            code: 'SH',
            phone: '+290',
            mask: '99999'
          }, {
            code: 'SI',
            phone: '+386',
            mask: '999 999 999'
          }, {
            code: 'SJ',
            phone: '+47',
            mask: '999 99 999'
          }, {
            code: 'SK',
            phone: '+421',
            mask: '9999 999 999'
          }, {
            code: 'SL',
            phone: '+232',
            mask: '(999) 999999'
          }, {
            code: 'SM',
            phone: '+378',
            mask: '99 99 99 99'
          }, {
            code: 'SN',
            phone: '+221',
            mask: '99 999 99 99'
          }, {
            code: 'SO',
            phone: '+252',
            mask: '9 9999999'
          }, {
            code: 'SR',
            phone: '+597',
            mask: '999-9999'
          }, {
            code: 'SS',
            phone: '+211',
            mask: '9999 999 999'
          }, {
            code: 'ST',
            phone: '+239',
            mask: '999 9999'
          }, {
            code: 'SV',
            phone: '+503',
            mask: '9999 9999'
          }, {
            code: 'SX',
            phone: '+1 (721)',
            mask: '999-9999'
          }, {
            code: 'SY',
            phone: '+963',
            mask: '9999 999 999'
          }, {
            code: 'SZ',
            phone: '+268',
            mask: '9999 9999'
          }, {
            code: 'TC',
            phone: '+1 (649)',
            mask: '999-9999'
          }, {
            code: 'TD',
            phone: '+235',
            mask: '99 99 99 99'
          }, {
            code: 'TG',
            phone: '+228',
            mask: '99 99 99 99'
          }, {
            code: 'TH',
            phone: '+66',
            mask: '999 999 9999'
          }, {
            code: 'TJ',
            phone: '+992',
            mask: '999 99 9999'
          }, {
            code: 'TK',
            phone: '+690',
            mask: '9999'
          }, {
            code: 'TL',
            phone: '+670',
            mask: '9999 9999'
          }, {
            code: 'TM',
            phone: '+993',
            mask: '9 99 999999'
          }, {
            code: 'TN',
            phone: '+216',
            mask: '99 999 999'
          }, {
            code: 'TO',
            phone: '+676',
            mask: '999 9999'
          }, {
            code: 'TR',
            phone: '+90',
            mask: '9999 999 99 99'
          }, {
            code: 'TT',
            phone: '+1 (868)',
            mask: '999-9999'
          }, {
            code: 'TV',
            phone: '+688',
            mask: '999999'
          }, {
            code: 'TW',
            phone: '+886',
            mask: '9999 999 999'
          }, {
            code: 'TZ',
            phone: '+255',
            mask: '9999 999 999'
          }, {
            code: 'UA',
            phone: '+380',
            mask: '999 999 9999'
          }, {
            code: 'UG',
            phone: '+256',
            mask: '9999 999999'
          }, {
            code: 'US',
            phone: '+1',
            mask: '(999) 999-9999'
          }, {
            code: 'UY',
            phone: '+598',
            mask: '999 999 999'
          }, {
            code: 'UZ',
            phone: '+998',
            mask: '9 99 999 99 99'
          }, {
            code: 'VA',
            phone: '+39',
            mask: '999 999 9999'
          }, {
            code: 'VC',
            phone: '+1 (784)',
            mask: '999-9999'
          }, {
            code: 'VE',
            phone: '+58',
            mask: '9999-9999999'
          }, {
            code: 'VG',
            phone: '+1 (284)',
            mask: '999-9999'
          }, {
            code: 'VI',
            phone: '+1 (340)',
            mask: '999-9999'
          }, {
            code: 'VN',
            phone: '+84',
            mask: '999 999 99 99'
          }, {
            code: 'VU',
            phone: '+678',
            mask: '999 9999'
          }, {
            code: 'WF',
            phone: '+681',
            mask: '99 99 99'
          }, {
            code: 'WS',
            phone: '+685',
            mask: '99 99999'
          }, {
            code: 'XK',
            phone: '+383',
            mask: '999 999 999'
          }, {
            code: 'YE',
            phone: '+967',
            mask: '9999 999 999'
          }, {
            code: 'YT',
            phone: '+262',
            mask: '9999 99 99 99'
          }, {
            code: 'ZA',
            phone: '+27',
            mask: '999 999 9999'
          }, {
            code: 'ZM',
            phone: '+260',
            mask: '999 9999999'
          }, {
            code: 'ZW',
            phone: '+263',
            mask: '999 999 9999'
          }];
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginForm = this._formBuilder.group({
              //      country: [
              //       {
              //         alpha2Code: "US",
              //         alpha3Code: "USA",
              //         callingCode: "+1",
              //         name: "United States of America",
              //         numericCode: "840"
              //     }
              // ],
              phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$"), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)]]
            }); // this.countryCallCode="+1" ;
            // this.countryCode = "+1" ;
            // console.log(this.loginForm) ; 
            //   this.loginForm.get('country').valueChanges
            //   .subscribe(country => console
            //       .log('this.loginForm.get("country").valueChanges', country));
            //   this.loginForm.valueChanges
            //       .subscribe(country => console
            //           .log('this.countryFormControl.valueChanges', country));
          }
        }, {
          key: "_keyPress",
          value: function _keyPress(event) {
            // console.log("key",event);
            var pattern = /[0-9]/;
            var inputChar = String.fromCharCode(event.charCode);

            if (!pattern.test(inputChar)) {
              event.preventDefault();
            }
          }
        }, {
          key: "onCountrySelected",
          value: function onCountrySelected($event) {
            console.log($event.callingCode);
            this.countryCode = $event.callingCode;
          }
        }, {
          key: "inputChanged",
          value: function inputChanged(val) {
            console.log(val);
            this.fieldLength = val.length;
          }
        }, {
          key: "goToScanner",
          value: function goToScanner() {
            localStorage.removeItem('phonenumFromLogin');
            this.router.navigateByUrl('/sessions/scanner');
          }
        }, {
          key: "goToWalkinCustomer",
          value: function goToWalkinCustomer() {
            this.showWalkinCustomerLink = false;
            this.router.navigate(['/sessions/walkInCustomer/']);
          }
        }, {
          key: "goToExitingCustomer",
          value: function goToExitingCustomer() {
            this.showWalkinCustomerLink = true;
            this.router.navigate(['/sessions/login/']);
          }
        }, {
          key: "goToAppointment",
          value: function goToAppointment() {
            this.showWalkinCustomerLink = false;
            this.router.navigate(['/sessions/appointment-id/']);
          }
        }, {
          key: "goToOtp",
          value: function goToOtp(phone) {
            var _this4 = this;

            if (phone.phoneNumber == "") {
              console.log("in if");
              this.snack.open('Enter Mobile Number to Login', 'OK', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });
            } else {
              console.log("Phonenumber for OTP", phone, phone.phoneNumber);
              this.customerPhoneNum = phone.phoneNumber;
              localStorage.setItem("phonenumFromLogin", this.customerPhoneNum);
              this.oTpModel.source = 'customer';
              this.oTpModel.source_key = 'mobile';
              this.oTpModel.source_value = phone.phoneNumber;
              console.log("model", this.oTpModel);
              this.apiService.getOtp(this.oTpModel).subscribe(function (otpResp) {
                var _a;

                console.log("cust resp", otpResp);

                if (!(otpResp === null || otpResp === void 0 ? void 0 : otpResp.icust) || !otpResp.otpVal) {
                  _this4.snack.open("No customer exists with this mobile number.", "", {
                    duration: 4000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'
                  });
                } else if (((_a = otpResp === null || otpResp === void 0 ? void 0 : otpResp.icust) === null || _a === void 0 ? void 0 : _a.custStatus) != "APPROVED" && (otpResp === null || otpResp === void 0 ? void 0 : otpResp.icust) && otpResp.otpVal) {
                  _this4.snack.open("Customer Id is not Approved.", "", {
                    duration: 4000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'
                  });
                } else {
                  console.log("Response Success", otpResp);
                  _this4.otpResp = otpResp;
                  _this4.custStatus = _this4.otpResp.otpVal.userId;
                  localStorage.setItem("customerValidation", _this4.custStatus);
                  /* Added validation for un-registered mobile nummber is entered */
                  // if (this.otpResp.otpVal && this.otpResp.otpVal.userId && this.otpResp.otpVal.userId.localeCompare("New Customer") == 0) {
                  //   this.snack.open('User Phone Number is not Registered', 'OK', {
                  //     duration: 4000,
                  //     verticalPosition: 'top',
                  //     horizontalPosition: 'right'
                  //   });
                  // } 
                  // else {

                  _this4.fpCaptureService.userDataService(otpResp);

                  _this4.router.navigateByUrl('/sessions/otp'); // }

                }
              }, function (error) {
                console.log(error.status);
                _this4.errorStatus = error.status;

                if (_this4.errorStatus == 200) {// this.router.navigateByUrl('/sessions/otp');
                }
              });
            }
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_7__["ShowMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_0__["FingerPrintCaptureService"]));
      };

      LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: LoginComponent,
        selectors: [["app-login"]],
        inputs: {
          countries: "countries",
          required: "required"
        },
        decls: 40,
        vars: 4,
        consts: [[1, "login_page"], [1, "card_container"], ["fxFlex", "50%", 1, "left_container"], [1, "border-text"], [1, "card-title"], ["novalidate", "", 3, "formGroup"], [1, "number"], [1, "phoneCard"], ["matPrefix", ""], ["fxLayout", "row", "fxLayoutGap", "10px"], [1, "currency-flag", "currency-flag-inr"], [1, "country"], [1, "vertical-line"], ["matInput", "", "type", "text", "formControlName", "phoneNumber", "onlyNumber", "", "maxLength", "10", 1, "no-outline", 3, "keypress"], ["fxLayout", "row"], [1, "login_btn", 3, "ngClass", "disabled", "click"], ["visible", "true"], [1, "clickHereText"], ["mat-raised-button", "", "type", "button", 1, "Nextbtn", 3, "click"], ["src", "assets/images/Walkk.png", "alt", "account", 1, "customerIcon"], ["fxlayout", "row", 1, "FontSize"], ["src", "assets/images/QR_code.png", "alt", "account", 1, "scanner"], [1, "FontSize"], ["src", "assets/images/Appointment_ID.png", "alt", "Appointment ID", 1, "appointmentIcon"], ["fxFlex", "50%", 1, "right_container"], ["src", "assets/images/login1.png", 1, "img1"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Login");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Mobile Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-card", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "IND");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function LoginComponent_Template_input_keypress_18_listener($event) {
              return ctx._keyPress($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_20_listener() {
              return ctx.goToOtp(ctx.loginForm.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " CONTINUE ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "fieldset");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "legend", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Already having a");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_26_listener() {
              return ctx.goToWalkinCustomer();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "b", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Walk in Customer");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_30_listener() {
              return ctx.goToScanner();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "b", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "QR code");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_34_listener() {
              return ctx.goToAppointment();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "b", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Appointment ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.bankName);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.loginForm.invalid ? "beforeContinue" : "afterContinue")("disabled", ctx.loginForm.invalid);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatPrefix"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _otp_onlynumber_directive__WEBPACK_IMPORTED_MODULE_13__["OnlynumberDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__["DefaultClassDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"]],
        styles: [".login_page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.login_page[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50%;\n  height: 100%;\n  background-color: #3858cb0d;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 530px;\n  min-height: 500px;\n  border-radius: 30px 0 0 30px;\n  padding: 0;\n  margin: 2rem auto;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%] {\n  padding: 3rem;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   .border-text[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  text-align: left;\n  font-family: \"Phosphate\";\n  font-size: 18px;\n  color: #004c97;\n  font: normal normal normal 25px/31px Phosphate;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 20px;\n  font-weight: bold;\n  padding: 30px 0px;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  color: #7e84a3;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .phoneCard[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px;\n  height: 45px;\n  margin: 0.75rem 0;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .phoneCard[_ngcontent-%COMP%]   .vertical-line[_ngcontent-%COMP%] {\n  width: 2px;\n  background-color: #2c2c2c1f;\n  height: 50px;\n  margin-top: -17px;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .phoneCard[_ngcontent-%COMP%]   .no-outline[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  height: 20px;\n  width: 80%;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .login_btn[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 30px;\n  height: 35px;\n  margin: 1.7rem 0;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .login_btn.afterContinue[_ngcontent-%COMP%] {\n  border-color: transparent;\n  color: #fff;\n  background: transparent linear-gradient(90deg, #051a2d 0%, #004c97 100%);\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .clickHereText[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .clickHereText[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-right: 10px;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .clickHereText[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 8px;\n  text-align: center;\n  padding: 0 4px;\n  width: 100%;\n  line-height: 1.4;\n  white-space: break-spaces;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .right_container[_ngcontent-%COMP%]   .img1[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n  .clickHereText button .mat-button-wrapper {\n  width: 100%;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNGO0FBQUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7QUFFSjtBQUFFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLDRCQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBRUo7QUFESTtFQUNFLGFBQUE7QUFHTjtBQUZNO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSw4Q0FBQTtBQUlSO0FBRk07RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBSVI7QUFEUTtFQUNFLGNBQUE7QUFHVjtBQURRO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBR1Y7QUFGVTtFQUNFLFVBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUlaO0FBRlU7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBSVo7QUFEUTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQUdWO0FBRlU7RUFDRSx5QkFBQTtFQUNBLFdBQUE7RUFDQSx3RUFBQTtBQUlaO0FBQVE7RUFDRSxlQUFBO0FBRVY7QUFEVTtFQUNFLGVBQUE7QUFHWjtBQUFRO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBRVY7QUFEVTtFQUNFLFlBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQUdaO0FBRlk7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQUlkO0FBR007RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQURSO0FBT0E7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQUpGIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luX3BhZ2Uge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODU4Y2IwZDtcclxuICB9XHJcbiAgbWF0LWNhcmQuY2FyZF9jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogNTMwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHggMCAwIDMwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgICAubGVmdF9jb250YWluZXIge1xyXG4gICAgICBwYWRkaW5nOiAzcmVtO1xyXG4gICAgICAuYm9yZGVyLXRleHQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQaG9zcGhhdGVcIjtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDRjOTc7XHJcbiAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMjVweC8zMXB4IFBob3NwaGF0ZTtcclxuICAgICAgfVxyXG4gICAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGZvcm0ge1xyXG4gICAgICAgIC5udW1iZXIge1xyXG4gICAgICAgICAgY29sb3I6ICM3ZTg0YTM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5waG9uZUNhcmQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDAuNzVyZW0gMDtcclxuICAgICAgICAgIC52ZXJ0aWNhbC1saW5lIHtcclxuICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJjMmMyYzFmO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xN3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm5vLW91dGxpbmUge1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvZ2luX2J0biB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDEuN3JlbSAwO1xyXG4gICAgICAgICAgJi5hZnRlckNvbnRpbnVlIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50XHJcbiAgICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDUxYTJkIDAlLCAjMDA0Yzk3IDEwMCUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmaWVsZHNldCB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICAgICAgICBsZWdlbmQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jbGlja0hlcmVUZXh0IHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIGIge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogOHB4O1xyXG4gICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwIDRweDtcclxuICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAucmlnaHRfY29udGFpbmVyIHtcclxuICAgICAgLmltZzEge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5jbGlja0hlcmVUZXh0IGJ1dHRvbiAubWF0LWJ1dHRvbi13cmFwcGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
          }, {
            type: app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
          }, {
            type: app_shared_services_showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_7__["ShowMessageService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: _shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_0__["FingerPrintCaptureService"]
          }];
        }, {
          countries: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "UXNm":
    /*!*******************************************************************************!*\
      !*** ./src/app/views/sessions/walk-in-customer/walk-in-customer.component.ts ***!
      \*******************************************************************************/

    /*! exports provided: WalkInCustomerComponent */

    /***/
    function UXNm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WalkInCustomerComponent", function () {
        return WalkInCustomerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var app_shared_models_otp_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/models/otp.model */
      "V4gq");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/shared/services/Dialog/dialog.service */
      "LP5l");
      /* harmony import */


      var app_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! app/shared/services/finger-print-capture.service */
      "rp8y");
      /* harmony import */


      var app_shared_services_showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! app/shared/services/showMessage/show-message.service */
      "x/2q");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/form-field */
      "kmnG");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      "qFsG");
      /* harmony import */


      var _otp_onlynumber_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ../otp/onlynumber.directive */
      "Kj45");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var WalkInCustomerComponent = /*#__PURE__*/function () {
        function WalkInCustomerComponent(router, _formBuilder, dialogService, apiService, showMessageService, snack, cdr, fpCaptureService) {
          _classCallCheck(this, WalkInCustomerComponent);

          this.router = router;
          this._formBuilder = _formBuilder;
          this.dialogService = dialogService;
          this.apiService = apiService;
          this.showMessageService = showMessageService;
          this.snack = snack;
          this.cdr = cdr;
          this.fpCaptureService = fpCaptureService;
          this.showWalkinCustomerLink = true;
          this.isShow = true;
          this.oTpModel = new app_shared_models_otp_model__WEBPACK_IMPORTED_MODULE_4__["otpModel"]();
          this.isValid = false;
          this.bankName = 'DEMOBANK';
          this.loginValid = true;
          this.required = true;
          this.defaultValue = {
            callingCode: '+49',
            name: 'Deutschland',
            alpha2Code: 'DE',
            alpha3Code: 'DEU',
            numericCode: '276'
          }; // if(error.status){
          // this.router.navigateByUrl('/sessions/otp');
          // }
          // let lngth ;
          // for (let i = 0; i < this.maskingNumber.length; i++) {
          //   if (this.maskingNumber[i].phone ==this.countryCode)
          //    {
          //     lngth = this.maskingNumber[i].phone.length + this.maskingNumber[i].mask.replace(/ /, "").replace(/-/, "").length ;
          //     if(this.fieldLength == lngth){
          //         this.router.navigateByUrl('/sessions/otp');
          //         this.loginValid = true;
          //      } else {
          //        console.log("Not Matching");
          //        this.loginValid = false;
          //      }
          //     }
          // }

          this.maskingNumber = [{
            code: 'AD',
            phone: '+376',
            mask: '999 999'
          }, {
            code: 'AE',
            phone: '+971',
            mask: '999 999 9999'
          }, {
            code: 'AF',
            phone: '+93',
            mask: '999 999 9999'
          }, {
            code: 'AG',
            phone: '+1 (268)',
            mask: '999-9999'
          }, {
            code: 'AI',
            phone: '+1 (264)',
            mask: '999-9999'
          }, {
            code: 'AL',
            phone: '+355',
            mask: '999 999 9999'
          }, {
            code: 'AM',
            phone: '+374',
            mask: '999 999999'
          }, {
            code: 'AN',
            phone: '+599',
            mask: '999 9999'
          }, {
            code: 'AO',
            phone: '+244',
            mask: '999 999 999'
          }, {
            code: 'AQ',
            phone: '+672',
            mask: '9 99999'
          }, {
            code: 'AR',
            phone: '+54',
            mask: '999 99-9999-9999'
          }, {
            code: 'AS',
            phone: '+1 (684)',
            mask: '999-9999'
          }, {
            code: 'AT',
            phone: '+43',
            mask: '9999 999999'
          }, {
            code: 'AU',
            phone: '+61',
            mask: '9999 999 999'
          }, {
            code: 'AW',
            phone: '+297',
            mask: '999 9999'
          }, {
            code: 'AZ',
            phone: '+994',
            mask: '999 999 99 99'
          }, {
            code: 'BA',
            phone: '+387',
            mask: '999 999 999'
          }, {
            code: 'BB',
            phone: '+1 (246)',
            mask: '999-9999'
          }, {
            code: 'BD',
            phone: '+880',
            mask: '99999-999999'
          }, {
            code: 'BE',
            phone: '+32',
            mask: '9999 99 99 99'
          }, {
            code: 'BF',
            phone: '+226',
            mask: '99 99 99 99'
          }, {
            code: 'BG',
            phone: '+359',
            mask: '999 999 999'
          }, {
            code: 'BH',
            phone: '+973',
            mask: '9999 9999'
          }, {
            code: 'BI',
            phone: '+257',
            mask: '99 99 99 99'
          }, {
            code: 'BJ',
            phone: '+229',
            mask: '99 99 99 99'
          }, {
            code: 'BL',
            phone: '+590',
            mask: '9999 99 99 99'
          }, {
            code: 'BM',
            phone: '+1 (441)',
            mask: '999-9999'
          }, {
            code: 'BN',
            phone: '+673',
            mask: '999 9999'
          }, {
            code: 'BO',
            phone: '+591',
            mask: '99999999'
          }, {
            code: 'BR',
            phone: '+55',
            mask: '(99) 99999-9999'
          }, {
            code: 'BS',
            phone: '+1 (242)',
            mask: '999-9999'
          }, {
            code: 'BT',
            phone: '+975',
            mask: '99 99 99 99'
          }, {
            code: 'BW',
            phone: '+267',
            mask: '99 999 999'
          }, {
            code: 'BY',
            phone: '+375',
            mask: '9 999 999-99-99'
          }, {
            code: 'BZ',
            phone: '+501',
            mask: '999-9999'
          }, {
            code: 'CA',
            phone: '+1',
            mask: '(999) 999-9999'
          }, {
            code: 'CC',
            phone: '+61',
            mask: '9999 999 999'
          }, {
            code: 'CD',
            phone: '+243',
            mask: '9999 999 999'
          }, {
            code: 'CF',
            phone: '+236',
            mask: '99 99 99 99'
          }, {
            code: 'CG',
            phone: '+242',
            mask: '99 999 9999'
          }, {
            code: 'CH',
            phone: '+41',
            mask: '999 999 99 99'
          }, {
            code: 'CI',
            phone: '+225',
            mask: '99 99 99 99'
          }, {
            code: 'CK',
            phone: '+682',
            mask: '99 9999'
          }, {
            code: 'CL',
            phone: '+56',
            mask: '9 9999 9999'
          }, {
            code: 'CM',
            phone: '+237',
            mask: '9 99 99 99 99'
          }, {
            code: 'CN',
            phone: '+86',
            mask: '999 9999 9999'
          }, {
            code: 'CO',
            phone: '+57',
            mask: '999 9999999'
          }, {
            code: 'CR',
            phone: '+506',
            mask: '9999 9999'
          }, {
            code: 'CU',
            phone: '+53',
            mask: '99 9999999'
          }, {
            code: 'CV',
            phone: '+238',
            mask: '999 99 99'
          }, {
            code: 'CW',
            phone: '+599',
            mask: '999 9999'
          }, {
            code: 'CX',
            phone: '+61',
            mask: '9999 999 999'
          }, {
            code: 'CY',
            phone: '+357',
            mask: '99 999999'
          }, {
            code: 'CZ',
            phone: '+420',
            mask: '999 999 999'
          }, {
            code: 'DE',
            phone: '+49',
            mask: '99999 9999999'
          }, {
            code: 'DJ',
            phone: '+253',
            mask: '99 99 99 99'
          }, {
            code: 'DK',
            phone: '+45',
            mask: '99 99 99 99'
          }, {
            code: 'DM',
            phone: '+1 (767)',
            mask: '999-9999'
          }, {
            code: 'DO',
            phone: '+1 (809)',
            mask: '999-9999'
          }, {
            code: 'DZ',
            phone: '+213',
            mask: '9999 99 99 99'
          }, {
            code: 'EC',
            phone: '+593',
            mask: '999 999 9999'
          }, {
            code: 'EE',
            phone: '+372',
            mask: '9999 9999'
          }, {
            code: 'EG',
            phone: '+20',
            mask: '9999 999 9999'
          }, {
            code: 'EH',
            phone: '+212',
            mask: '9999-999999'
          }, {
            code: 'ER',
            phone: '+291',
            mask: '99 999 999'
          }, {
            code: 'ES',
            phone: '+34',
            mask: '999 99 99 99'
          }, {
            code: 'ET',
            phone: '+251',
            mask: '999 999 9999'
          }, {
            code: 'FI',
            phone: '+358',
            mask: '999 9999999'
          }, {
            code: 'FJ',
            phone: '+679',
            mask: '999 9999'
          }, {
            code: 'FK',
            phone: '+500',
            mask: '99999'
          }, {
            code: 'FM',
            phone: '+691',
            mask: '999 9999'
          }, {
            code: 'FO',
            phone: '+298',
            mask: '999999'
          }, {
            code: 'FR',
            phone: '+33',
            mask: '99 99 99 99 99'
          }, {
            code: 'GA',
            phone: '+241',
            mask: '99 99 99 99'
          }, {
            code: 'GB',
            phone: '+44',
            mask: '99999 99999'
          }, {
            code: 'GD',
            phone: '+1 (473)',
            mask: '999-9999'
          }, {
            code: 'GE',
            phone: '+995',
            mask: '999 99 99 99'
          }, {
            code: 'GG',
            phone: '+44',
            mask: '99999 999999'
          }, {
            code: 'GH',
            phone: '+233',
            mask: '999 999 9999'
          }, {
            code: 'GI',
            phone: '+350',
            mask: '99999999'
          }, {
            code: 'GL',
            phone: '+299',
            mask: '99 99 99'
          }, {
            code: 'GM',
            phone: '+220',
            mask: '999 9999'
          }, {
            code: 'GN',
            phone: '+224',
            mask: '999 99 99 99'
          }, {
            code: 'GQ',
            phone: '+240',
            mask: '999 999 999'
          }, {
            code: 'GR',
            phone: '+30',
            mask: '999 999 9999'
          }, {
            code: 'GT',
            phone: '+502',
            mask: '9999 9999'
          }, {
            code: 'GU',
            phone: '+1 (671)',
            mask: '999-9999'
          }, {
            code: 'GW',
            phone: '+245',
            mask: '999 999 999'
          }, {
            code: 'GY',
            phone: '+592',
            mask: '999 9999'
          }, {
            code: 'HK',
            phone: '+852',
            mask: '9999 9999'
          }, {
            code: 'HN',
            phone: '+504',
            mask: '9999-9999'
          }, {
            code: 'HR',
            phone: '+385',
            mask: '999 999 9999'
          }, {
            code: 'HT',
            phone: '+509',
            mask: '99 99 9999'
          }, {
            code: 'HU',
            phone: '+36',
            mask: '(99) 999 9999'
          }, {
            code: 'ID',
            phone: '+62',
            mask: '9999-999-999'
          }, {
            code: 'IE',
            phone: '+353',
            mask: '999 999 9999'
          }, {
            code: 'IL',
            phone: '+972',
            mask: '999-999-9999'
          }, {
            code: 'IM',
            phone: '+44',
            mask: '99999 999999'
          }, {
            code: 'IN',
            phone: '+91',
            mask: '99999 99999'
          }, {
            code: 'IO',
            phone: '+246',
            mask: '999 9999'
          }, {
            code: 'IQ',
            phone: '+964',
            mask: '9999 999 9999'
          }, {
            code: 'IR',
            phone: '+98',
            mask: '9999 999 9999'
          }, {
            code: 'IS',
            phone: '+354',
            mask: '999 9999'
          }, {
            code: 'IT',
            phone: '+39',
            mask: '999 999 9999'
          }, {
            code: 'JE',
            phone: '+44',
            mask: '99999 999999'
          }, {
            code: 'JM',
            phone: '+1 (876)',
            mask: '999-9999'
          }, {
            code: 'JO',
            phone: '+962',
            mask: '99 9999 9999'
          }, {
            code: 'JP',
            phone: '+81',
            mask: '999 9999-9999'
          }, {
            code: 'KE',
            phone: '+254',
            mask: '9999 999999'
          }, {
            code: 'KG',
            phone: '+996',
            mask: '9999 999 999'
          }, {
            code: 'KH',
            phone: '+855',
            mask: '999 999 999'
          }, {
            code: 'KI',
            phone: '+686',
            mask: '99999999'
          }, {
            code: 'KM',
            phone: '+269',
            mask: '999 99 99'
          }, {
            code: 'KN',
            phone: '+1 (869)',
            mask: '999-9999'
          }, {
            code: 'KP',
            phone: '+850',
            mask: '9999 999 9999'
          }, {
            code: 'KR',
            phone: '+82',
            mask: '999-9999-9999'
          }, {
            code: 'KW',
            phone: '+965',
            mask: '999 99999'
          }, {
            code: 'KY',
            phone: '+1 (345)',
            mask: '999-9999'
          }, {
            code: 'KZ',
            phone: '+7',
            mask: '9 (999) 999 9999'
          }, {
            code: 'LA',
            phone: '+856',
            mask: '999 99 999 999'
          }, {
            code: 'LB',
            phone: '+961',
            mask: '99 999 999'
          }, {
            code: 'LC',
            phone: '+1 (758)',
            mask: '999-9999'
          }, {
            code: 'LI',
            phone: '+423',
            mask: '999 999 999'
          }, {
            code: 'LK',
            phone: '+94',
            mask: '999 999 9999'
          }, {
            code: 'LR',
            phone: '+231',
            mask: '999 999 9999'
          }, {
            code: 'LS',
            phone: '+266',
            mask: '9999 9999'
          }, {
            code: 'LT',
            phone: '+370',
            mask: '(9-999) 99999'
          }, {
            code: 'LU',
            phone: '+352',
            mask: '999 999 999'
          }, {
            code: 'LV',
            phone: '+371',
            mask: '99 999 999'
          }, {
            code: 'LY',
            phone: '+218',
            mask: '999-9999999'
          }, {
            code: 'MA',
            phone: '+212',
            mask: '9999-999999'
          }, {
            code: 'MC',
            phone: '+377',
            mask: '99 99 99 99 99'
          }, {
            code: 'MD',
            phone: '+373',
            mask: '9999 99 999'
          }, {
            code: 'ME',
            phone: '+382',
            mask: '999 999 999'
          }, {
            code: 'MF',
            phone: '+590',
            mask: '9999 99 99 99'
          }, {
            code: 'MG',
            phone: '+261',
            mask: '999 99 999 99'
          }, {
            code: 'MH',
            phone: '+692',
            mask: '999-9999'
          }, {
            code: 'MK',
            phone: '+389',
            mask: '999 999 999'
          }, {
            code: 'ML',
            phone: '+223',
            mask: '99 99 99 99'
          }, {
            code: 'MM',
            phone: '+95',
            mask: '99 999 9999'
          }, {
            code: 'MN',
            phone: '+976',
            mask: '9999 9999'
          }, {
            code: 'MO',
            phone: '+853',
            mask: '9999 9999'
          }, {
            code: 'MP',
            phone: '+1 (670)',
            mask: '999-9999'
          }, {
            code: 'MR',
            phone: '+222',
            mask: '99 99 99 99'
          }, {
            code: 'MS',
            phone: '+1 (664)',
            mask: '999-9999'
          }, {
            code: 'MT',
            phone: '+356',
            mask: '9999 9999'
          }, {
            code: 'MU',
            phone: '+230',
            mask: '9999 9999'
          }, {
            code: 'MV',
            phone: '+960',
            mask: '999-9999'
          }, {
            code: 'MW',
            phone: '+265',
            mask: '9999 99 99 99'
          }, {
            code: 'MX',
            phone: '+52',
            mask: '999 999 999 9999'
          }, {
            code: 'MY',
            phone: '+60',
            mask: '999-999 9999'
          }, {
            code: 'MZ',
            phone: '+258',
            mask: '99 999 9999'
          }, {
            code: 'NA',
            phone: '+264',
            mask: '999 999 9999'
          }, {
            code: 'NC',
            phone: '+687',
            mask: '99 99 99'
          }, {
            code: 'NE',
            phone: '+227',
            mask: '99 99 99 99'
          }, {
            code: 'NG',
            phone: '+234',
            mask: '9999 999 9999'
          }, {
            code: 'NI',
            phone: '+505',
            mask: '9999 9999'
          }, {
            code: 'NL',
            phone: '+31',
            mask: '99 99999999'
          }, {
            code: 'NO',
            phone: '+47',
            mask: '999 99 999'
          }, {
            code: 'NP',
            phone: '+977',
            mask: '999-9999999'
          }, {
            code: 'NR',
            phone: '+674',
            mask: '999 9999'
          }, {
            code: 'NU',
            phone: '+683',
            mask: '999 9999'
          }, {
            code: 'NZ',
            phone: '+64',
            mask: '999 999 9999'
          }, {
            code: 'OM',
            phone: '+968',
            mask: '9999 9999'
          }, {
            code: 'PA',
            phone: '+507',
            mask: '9999-9999'
          }, {
            code: 'PE',
            phone: '+51',
            mask: '999 999 999'
          }, {
            code: 'PF',
            phone: '+689',
            mask: '99 99 99 99'
          }, {
            code: 'PG',
            phone: '+675',
            mask: '9999 9999'
          }, {
            code: 'PH',
            phone: '+63',
            mask: '9999 999 9999'
          }, {
            code: 'PK',
            phone: '+92',
            mask: '9999 9999999'
          }, {
            code: 'PL',
            phone: '+48',
            mask: '999 999 999'
          }, {
            code: 'PM',
            phone: '+508',
            mask: '999 99 99'
          }, {
            code: 'PN',
            phone: '+64',
            mask: '99 999999'
          }, {
            code: 'PR',
            phone: '+1 (787)',
            mask: '999-9999'
          }, {
            code: 'PS',
            phone: '+970',
            mask: '9999 999 999'
          }, {
            code: 'PT',
            phone: '+351',
            mask: '999 999 999'
          }, {
            code: 'PW',
            phone: '+680',
            mask: '999 9999'
          }, {
            code: 'PY',
            phone: '+595',
            mask: '9999 999999'
          }, {
            code: 'QA',
            phone: '+974',
            mask: '9999 9999'
          }, {
            code: 'RE',
            phone: '+262',
            mask: '9999 99 99 99'
          }, {
            code: 'RO',
            phone: '+40',
            mask: '9999 999 999'
          }, {
            code: 'RS',
            phone: '+381',
            mask: '999 9999999'
          }, {
            code: 'RU',
            phone: '+7',
            mask: '9 (999) 999-99'
          }, {
            code: 'RW',
            phone: '+250',
            mask: '9999 999 999'
          }, {
            code: 'SA',
            phone: '+966',
            mask: '999 999 9999'
          }, {
            code: 'SB',
            phone: '+677',
            mask: '99 99999'
          }, {
            code: 'SC',
            phone: '+248',
            mask: '9 999 999'
          }, {
            code: 'SD',
            phone: '+249',
            mask: '999 999 9999'
          }, {
            code: 'SE',
            phone: '+46',
            mask: '999-999 99 99'
          }, {
            code: 'SG',
            phone: '+65',
            mask: '9999 9999'
          }, {
            code: 'SH',
            phone: '+290',
            mask: '99999'
          }, {
            code: 'SI',
            phone: '+386',
            mask: '999 999 999'
          }, {
            code: 'SJ',
            phone: '+47',
            mask: '999 99 999'
          }, {
            code: 'SK',
            phone: '+421',
            mask: '9999 999 999'
          }, {
            code: 'SL',
            phone: '+232',
            mask: '(999) 999999'
          }, {
            code: 'SM',
            phone: '+378',
            mask: '99 99 99 99'
          }, {
            code: 'SN',
            phone: '+221',
            mask: '99 999 99 99'
          }, {
            code: 'SO',
            phone: '+252',
            mask: '9 9999999'
          }, {
            code: 'SR',
            phone: '+597',
            mask: '999-9999'
          }, {
            code: 'SS',
            phone: '+211',
            mask: '9999 999 999'
          }, {
            code: 'ST',
            phone: '+239',
            mask: '999 9999'
          }, {
            code: 'SV',
            phone: '+503',
            mask: '9999 9999'
          }, {
            code: 'SX',
            phone: '+1 (721)',
            mask: '999-9999'
          }, {
            code: 'SY',
            phone: '+963',
            mask: '9999 999 999'
          }, {
            code: 'SZ',
            phone: '+268',
            mask: '9999 9999'
          }, {
            code: 'TC',
            phone: '+1 (649)',
            mask: '999-9999'
          }, {
            code: 'TD',
            phone: '+235',
            mask: '99 99 99 99'
          }, {
            code: 'TG',
            phone: '+228',
            mask: '99 99 99 99'
          }, {
            code: 'TH',
            phone: '+66',
            mask: '999 999 9999'
          }, {
            code: 'TJ',
            phone: '+992',
            mask: '999 99 9999'
          }, {
            code: 'TK',
            phone: '+690',
            mask: '9999'
          }, {
            code: 'TL',
            phone: '+670',
            mask: '9999 9999'
          }, {
            code: 'TM',
            phone: '+993',
            mask: '9 99 999999'
          }, {
            code: 'TN',
            phone: '+216',
            mask: '99 999 999'
          }, {
            code: 'TO',
            phone: '+676',
            mask: '999 9999'
          }, {
            code: 'TR',
            phone: '+90',
            mask: '9999 999 99 99'
          }, {
            code: 'TT',
            phone: '+1 (868)',
            mask: '999-9999'
          }, {
            code: 'TV',
            phone: '+688',
            mask: '999999'
          }, {
            code: 'TW',
            phone: '+886',
            mask: '9999 999 999'
          }, {
            code: 'TZ',
            phone: '+255',
            mask: '9999 999 999'
          }, {
            code: 'UA',
            phone: '+380',
            mask: '999 999 9999'
          }, {
            code: 'UG',
            phone: '+256',
            mask: '9999 999999'
          }, {
            code: 'US',
            phone: '+1',
            mask: '(999) 999-9999'
          }, {
            code: 'UY',
            phone: '+598',
            mask: '999 999 999'
          }, {
            code: 'UZ',
            phone: '+998',
            mask: '9 99 999 99 99'
          }, {
            code: 'VA',
            phone: '+39',
            mask: '999 999 9999'
          }, {
            code: 'VC',
            phone: '+1 (784)',
            mask: '999-9999'
          }, {
            code: 'VE',
            phone: '+58',
            mask: '9999-9999999'
          }, {
            code: 'VG',
            phone: '+1 (284)',
            mask: '999-9999'
          }, {
            code: 'VI',
            phone: '+1 (340)',
            mask: '999-9999'
          }, {
            code: 'VN',
            phone: '+84',
            mask: '999 999 99 99'
          }, {
            code: 'VU',
            phone: '+678',
            mask: '999 9999'
          }, {
            code: 'WF',
            phone: '+681',
            mask: '99 99 99'
          }, {
            code: 'WS',
            phone: '+685',
            mask: '99 99999'
          }, {
            code: 'XK',
            phone: '+383',
            mask: '999 999 999'
          }, {
            code: 'YE',
            phone: '+967',
            mask: '9999 999 999'
          }, {
            code: 'YT',
            phone: '+262',
            mask: '9999 99 99 99'
          }, {
            code: 'ZA',
            phone: '+27',
            mask: '999 999 9999'
          }, {
            code: 'ZM',
            phone: '+260',
            mask: '999 9999999'
          }, {
            code: 'ZW',
            phone: '+263',
            mask: '999 999 9999'
          }];
        }

        _createClass(WalkInCustomerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginForm = this._formBuilder.group({
              //      country: [
              //       {
              //         alpha2Code: "US",
              //         alpha3Code: "USA",
              //         callingCode: "+1",
              //         name: "United States of America",
              //         numericCode: "840"
              //     }
              // ],
              custName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
              phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$"), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]]
            }); // this.countryCallCode="+1" ;
            // this.countryCode = "+1" ;
            // console.log(this.loginForm) ; 
            //   this.loginForm.get('country').valueChanges
            //   .subscribe(country => console
            //       .log('this.loginForm.get("country").valueChanges', country));
            //   this.loginForm.valueChanges
            //       .subscribe(country => console
            //           .log('this.countryFormControl.valueChanges', country));
          }
        }, {
          key: "_keyPress",
          value: function _keyPress(event) {
            // console.log("key",event);
            var pattern = /[0-9]/;
            var inputChar = String.fromCharCode(event.charCode);

            if (!pattern.test(inputChar)) {
              event.preventDefault();
            }
          }
        }, {
          key: "onCountrySelected",
          value: function onCountrySelected($event) {
            console.log($event.callingCode);
            this.countryCode = $event.callingCode;
          }
        }, {
          key: "inputChanged",
          value: function inputChanged(val) {
            console.log(val);
            this.fieldLength = val.length;
          }
        }, {
          key: "goToScanner",
          value: function goToScanner() {
            localStorage.removeItem('phonenumFromLogin');
            this.router.navigateByUrl('/sessions/scanner');
          }
        }, {
          key: "goToAppointment",
          value: function goToAppointment() {
            this.showWalkinCustomerLink = false;
            this.router.navigate(['/sessions/appointment-id/']);
          }
        }, {
          key: "goToLogin",
          value: function goToLogin() {
            this.showWalkinCustomerLink = false;
            this.router.navigate(['/sessions/login/']);
          }
        }, {
          key: "goToExitingCustomer",
          value: function goToExitingCustomer() {
            this.showWalkinCustomerLink = true;
            this.router.navigate(['/sessions/login/']);
          }
        }, {
          key: "goToOtp",
          value: function goToOtp(phone) {
            var _this5 = this;

            console.log(this.loginForm.value.custName);

            if (phone.phoneNumber == "") {
              console.log("in if");
              this.snack.open('Enter Mobile Number to Login', 'OK', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });
            } else {
              console.log("Phonenumber for OTP", phone, phone.phoneNumber);
              this.customerPhoneNum = phone.phoneNumber;
              localStorage.setItem("phonenumFromLogin", this.customerPhoneNum);
              localStorage.setItem("FromLogin", this.loginForm.value.custName);
              this.oTpModel.source = 'customer';
              this.oTpModel.source_key = 'mobile';
              this.oTpModel.source_value = phone.phoneNumber;
              console.log("model", this.oTpModel);
              this.apiService.getOtp(this.oTpModel).subscribe(function (otpResp) {
                console.log("cust resp", otpResp); // if (!otpResp?.icust ||  !otpResp.otpVal) {
                //    this.snack.open("No customer exists with this mobile number." , "", {
                //     duration: 4000,
                //     verticalPosition: 'top',
                //     horizontalPosition: 'right'
                //   });
                // }
                // else if (otpResp?.icust?.custStatus !="APPROVED" && (otpResp?.icust && otpResp.otpVal) ) {
                //   this.snack.open("Customer Id is not Approved." , "", {
                //     duration: 4000,
                //     verticalPosition: 'top',
                //     horizontalPosition: 'right'
                //   });
                // } else {

                console.log("Response Success", otpResp);
                _this5.otpResp = otpResp;
                _this5.custStatus = _this5.otpResp.otpVal.userId;
                localStorage.setItem("customerValidation", _this5.custStatus);
                /* Added validation for un-registered mobile nummber is entered */
                // if (this.otpResp.otpVal && this.otpResp.otpVal.userId && this.otpResp.otpVal.userId.localeCompare("New Customer") == 0) {
                //   this.snack.open('User Phone Number is not Registered', 'OK', {
                //     duration: 4000,
                //     verticalPosition: 'top',
                //     horizontalPosition: 'right'
                //   });
                // } 
                // else {

                _this5.fpCaptureService.userDataService(otpResp);

                _this5.router.navigateByUrl('/sessions/otp'); // }
                // }

              }, function (error) {
                console.log(error.status);
                _this5.errorStatus = error.status;

                if (_this5.errorStatus == 200) {// this.router.navigateByUrl('/sessions/otp');
                }
              });
            }
          }
        }]);

        return WalkInCustomerComponent;
      }();

      WalkInCustomerComponent.ɵfac = function WalkInCustomerComponent_Factory(t) {
        return new (t || WalkInCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_8__["ShowMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_7__["FingerPrintCaptureService"]));
      };

      WalkInCustomerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: WalkInCustomerComponent,
        selectors: [["app-walk-in-customer"]],
        inputs: {
          countries: "countries",
          required: "required"
        },
        decls: 47,
        vars: 4,
        consts: [[1, "login_page"], [1, "card_container"], ["fxFlex", "50%", 1, "left_container"], [1, "border-text"], [1, "card-title"], ["novalidate", "", 3, "formGroup"], [1, "number"], [1, "phoneCard"], ["matPrefix", ""], ["fxLayout", "row", "fxLayoutGap", "10px", 2, "margin-top", "-5px"], ["matInput", "", "type", "text", "formControlName", "custName", 1, "no-outline"], ["fxLayout", "row", "fxLayoutGap", "10px"], [1, "currency-flag", "currency-flag-inr"], [1, "country"], [1, "vertical-line"], ["matInput", "", "type", "text", "formControlName", "phoneNumber", "onlyNumber", "", "maxLength", "10", 1, "no-outline", 3, "keypress"], ["fxLayout", "row"], [1, "login_btn", 3, "ngClass", "disabled", "click"], ["visible", "true"], [1, "clickHereText"], ["mat-raised-button", "", "type", "button", 1, "Nextbtn", 3, "click"], ["src", "assets/images/Account.png", "alt", "account", 1, "customerIcon"], ["fxlayout", "row", 1, "FontSize"], ["src", "assets/images/QR_code.png", "alt", "account", 1, "scanner"], [1, "FontSize"], ["src", "assets/images/Appointment_ID.png", "alt", "Appointment ID", 1, "appointmentIcon"], ["fxFlex", "50%", 1, "right_container"], ["src", "assets/images/Walk.png", 1, "img1"]],
        template: function WalkInCustomerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Walk in customer");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-card", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Mobile Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-card", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "IND");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "span", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function WalkInCustomerComponent_Template_input_keypress_25_listener($event) {
              return ctx._keyPress($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalkInCustomerComponent_Template_button_click_27_listener() {
              return ctx.goToOtp(ctx.loginForm.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " CONTINUE ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "fieldset");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "legend", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Already having a");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalkInCustomerComponent_Template_button_click_33_listener() {
              return ctx.goToLogin();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalkInCustomerComponent_Template_button_click_37_listener() {
              return ctx.goToScanner();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "QR code");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalkInCustomerComponent_Template_button_click_41_listener() {
              return ctx.goToAppointment();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "img", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "b", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Appointment ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bankName);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.loginForm.invalid ? "beforeContinue" : "afterContinue")("disabled", ctx.loginForm.invalid);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatPrefix"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _otp_onlynumber_directive__WEBPACK_IMPORTED_MODULE_13__["OnlynumberDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__["DefaultClassDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"]],
        styles: [".login_page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.login_page[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50%;\n  height: 100%;\n  background-color: #3858cb0d;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 530px;\n  min-height: 500px;\n  border-radius: 30px 0 0 30px;\n  padding: 0;\n  margin: 2rem auto;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%] {\n  padding: 3rem;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   .border-text[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  text-align: left;\n  font-family: \"Phosphate\";\n  font-size: 18px;\n  color: #004c97;\n  font: normal normal normal 25px/31px Phosphate;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 20px;\n  font-weight: bold;\n  padding: 10px 0px;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  color: #7e84a3;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .phoneCard[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px;\n  height: 45px;\n  margin: 0.75rem 0;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .phoneCard[_ngcontent-%COMP%]   .vertical-line[_ngcontent-%COMP%] {\n  width: 2px;\n  background-color: #2c2c2c1f;\n  height: 50px;\n  margin-top: -17px;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .phoneCard[_ngcontent-%COMP%]   .no-outline[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  height: 20px;\n  width: 80%;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .login_btn[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 30px;\n  height: 35px;\n  margin: 1.7rem 0;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .login_btn.afterContinue[_ngcontent-%COMP%] {\n  border-color: transparent;\n  color: #fff;\n  background: transparent linear-gradient(90deg, #051a2d 0%, #004c97 100%);\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .clickHereText[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .clickHereText[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-right: 10px;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .clickHereText[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 8px;\n  text-align: center;\n  padding: 0 4px;\n  width: 100%;\n  line-height: 1.4;\n  white-space: break-spaces;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .right_container[_ngcontent-%COMP%]   .img1[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n  .clickHereText button .mat-button-wrapper {\n  width: 100%;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcd2Fsay1pbi1jdXN0b21lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQUo7QUFDSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQUNOO0FBQ0k7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUFDTjtBQUFNO0VBQ0UsYUFBQTtBQUVSO0FBRFE7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLDhDQUFBO0FBR1Y7QUFEUTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFHVjtBQUFVO0VBQ0UsY0FBQTtBQUVaO0FBQVU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFFWjtBQURZO0VBQ0UsVUFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBR2Q7QUFEWTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7QUFHZDtBQUFVO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRVo7QUFEWTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLHdFQUFBO0FBR2Q7QUFDVTtFQUNFLGVBQUE7QUFDWjtBQUFZO0VBQ0UsZUFBQTtBQUVkO0FBQ1U7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUFDWjtBQUFZO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0FBRWQ7QUFEYztFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBR2hCO0FBSVE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQUZWO0FBUUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQUxKIiwiZmlsZSI6IndhbGstaW4tY3VzdG9tZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmxvZ2luX3BhZ2Uge1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NThjYjBkO1xyXG4gICAgfVxyXG4gICAgbWF0LWNhcmQuY2FyZF9jb250YWluZXIge1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgICBoZWlnaHQ6IDUzMHB4O1xyXG4gICAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMzBweCAwIDAgMzBweDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgICAgIC5sZWZ0X2NvbnRhaW5lciB7XHJcbiAgICAgICAgcGFkZGluZzogM3JlbTtcclxuICAgICAgICAuYm9yZGVyLXRleHQge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMjJweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQaG9zcGhhdGVcIjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIGNvbG9yOiAjMDA0Yzk3O1xyXG4gICAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMjVweC8zMXB4IFBob3NwaGF0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3JtIHtcclxuICAgICAgICAgIC5udW1iZXIge1xyXG4gICAgICAgICAgICBjb2xvcjogIzdlODRhMztcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5waG9uZUNhcmQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMC43NXJlbSAwO1xyXG4gICAgICAgICAgICAudmVydGljYWwtbGluZSB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmMyYzJjMWY7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xN3B4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uby1vdXRsaW5lIHtcclxuICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmxvZ2luX2J0biB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMS43cmVtIDA7XHJcbiAgICAgICAgICAgICYuYWZ0ZXJDb250aW51ZSB7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudFxyXG4gICAgICAgICAgICAgICAgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDUxYTJkIDAlLCAjMDA0Yzk3IDEwMCUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBmaWVsZHNldCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgICAgbGVnZW5kIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5jbGlja0hlcmVUZXh0IHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICAgIGIge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDRweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAucmlnaHRfY29udGFpbmVyIHtcclxuICAgICAgICAuaW1nMSB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgOjpuZy1kZWVwIC5jbGlja0hlcmVUZXh0IGJ1dHRvbiAubWF0LWJ1dHRvbi13cmFwcGVyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAiXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WalkInCustomerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-walk-in-customer',
            templateUrl: './walk-in-customer.component.html',
            styleUrls: ['./walk-in-customer.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
          }, {
            type: app_shared_services_showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_8__["ShowMessageService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }, {
            type: app_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_7__["FingerPrintCaptureService"]
          }];
        }, {
          countries: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
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
      "Kdsb");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/shared-material.module */
      "zMWy");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @ngx-translate/core */
      "sYmb");
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


      var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @swimlane/ngx-datatable */
      "lDzL");
      /* harmony import */


      var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! app/shared/shared.module */
      "PCNd");
      /* harmony import */


      var ng2_charts__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ng2-charts */
      "LPYB");
      /* harmony import */


      var _otp_otp_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./otp/otp.component */
      "KvEN");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./login/login.component */
      "OoMb");
      /* harmony import */


      var _angular_material_extensions_select_country__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular-material-extensions/select-country */
      "6xI8");
      /* harmony import */


      var _others_scanner_scanner_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ../others/scanner/scanner.component */
      "qxMs");
      /* harmony import */


      var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @zxing/ngx-scanner */
      "IyRd");
      /* harmony import */


      var _logout_popup_logout_popup_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./logout-popup/logout-popup.component */
      "8n/o");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _otp_onlynumber_directive__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./otp/onlynumber.directive */
      "Kj45");
      /* harmony import */


      var _walk_in_customer_walk_in_customer_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./walk-in-customer/walk-in-customer.component */
      "UXNm");

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
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_extensions_select_country__WEBPACK_IMPORTED_MODULE_18__["MatSelectCountryModule"].forRoot('en'), // MatListModule,
        // MatIconModule,
        // MatButtonModule,
        // MatCardModule,
        // MatMenuModule,
        // MatSlideToggleModule,
        // MatGridListModule,
        // MatChipsModule,
        // MatCheckboxModule,
        // MatRadioModule,
        // MatTabsModule,
        // MatInputModule,
        // MatProgressBarModule,
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["NgxDatatableModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_15__["ChartsModule"], app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"], _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_20__["ZXingScannerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_sessions_routing__WEBPACK_IMPORTED_MODULE_8__["SessionsRoutes"])]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SessionsModule, {
          declarations: [_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"], _others_scanner_scanner_component__WEBPACK_IMPORTED_MODULE_19__["ScannerComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"], _signin_signin_component__WEBPACK_IMPORTED_MODULE_11__["SigninComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"], _otp_otp_component__WEBPACK_IMPORTED_MODULE_16__["OtpComponent"], _logout_popup_logout_popup_component__WEBPACK_IMPORTED_MODULE_21__["LogoutPopupComponent"], _fingerprint_fingerprint_component__WEBPACK_IMPORTED_MODULE_12__["FingerprintComponent"], _otp_onlynumber_directive__WEBPACK_IMPORTED_MODULE_23__["OnlynumberDirective"], _walk_in_customer_walk_in_customer_component__WEBPACK_IMPORTED_MODULE_24__["WalkInCustomerComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_extensions_select_country__WEBPACK_IMPORTED_MODULE_18__["MatSelectCountryModule"], // MatListModule,
          // MatIconModule,
          // MatButtonModule,
          // MatCardModule,
          // MatMenuModule,
          // MatSlideToggleModule,
          // MatGridListModule,
          // MatChipsModule,
          // MatCheckboxModule,
          // MatRadioModule,
          // MatTabsModule,
          // MatInputModule,
          // MatProgressBarModule,
          _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["NgxDatatableModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_15__["ChartsModule"], app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"], _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_20__["ZXingScannerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SessionsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_extensions_select_country__WEBPACK_IMPORTED_MODULE_18__["MatSelectCountryModule"].forRoot('en'), // MatListModule,
            // MatIconModule,
            // MatButtonModule,
            // MatCardModule,
            // MatMenuModule,
            // MatSlideToggleModule,
            // MatGridListModule,
            // MatChipsModule,
            // MatCheckboxModule,
            // MatRadioModule,
            // MatTabsModule,
            // MatInputModule,
            // MatProgressBarModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_22__["MatDialogModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_13__["NgxDatatableModule"], ng2_charts__WEBPACK_IMPORTED_MODULE_15__["ChartsModule"], app_shared_shared_module__WEBPACK_IMPORTED_MODULE_14__["SharedModule"], _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_20__["ZXingScannerModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_sessions_routing__WEBPACK_IMPORTED_MODULE_8__["SessionsRoutes"])],
            entryComponents: [_fingerprint_fingerprint_component__WEBPACK_IMPORTED_MODULE_12__["FingerprintComponent"], _logout_popup_logout_popup_component__WEBPACK_IMPORTED_MODULE_21__["LogoutPopupComponent"]],
            declarations: [_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"], _others_scanner_scanner_component__WEBPACK_IMPORTED_MODULE_19__["ScannerComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"], _signin_signin_component__WEBPACK_IMPORTED_MODULE_11__["SigninComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"], _otp_otp_component__WEBPACK_IMPORTED_MODULE_16__["OtpComponent"], _logout_popup_logout_popup_component__WEBPACK_IMPORTED_MODULE_21__["LogoutPopupComponent"], _fingerprint_fingerprint_component__WEBPACK_IMPORTED_MODULE_12__["FingerprintComponent"], _otp_onlynumber_directive__WEBPACK_IMPORTED_MODULE_23__["OnlynumberDirective"], _walk_in_customer_walk_in_customer_component__WEBPACK_IMPORTED_MODULE_24__["WalkInCustomerComponent"]]
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


      var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./not-found/not-found.component */
      "8Wtu");
      /* harmony import */


      var _error_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./error/error.component */
      "NjAb");
      /* harmony import */


      var _otp_otp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./otp/otp.component */
      "KvEN");
      /* harmony import */


      var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./login/login.component */
      "OoMb");
      /* harmony import */


      var _others_scanner_scanner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../others/scanner/scanner.component */
      "qxMs");
      /* harmony import */


      var _fingerprint_fingerprint_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./fingerprint/fingerprint.component */
      "hxFr");
      /* harmony import */


      var _walk_in_customer_walk_in_customer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./walk-in-customer/walk-in-customer.component */
      "UXNm");
      /* harmony import */


      var _others_appointment_id_appointment_id_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../others/appointment-id/appointment-id.component */
      "Rfrn");

      var SessionsRoutes = [{
        path: "",
        children: [{
          // path: "signin",
          // component: SigninComponent,
          // data: { title: "Signin" }
          path: 'login',
          component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
          data: {
            title: 'Login',
            breadcrumb: 'LOGIN'
          }
        }, {
          path: 'otp',
          component: _otp_otp_component__WEBPACK_IMPORTED_MODULE_2__["OtpComponent"],
          data: {
            title: 'otp',
            breadcrumb: 'OTP'
          }
        }, {
          path: 'walkInCustomer',
          component: _walk_in_customer_walk_in_customer_component__WEBPACK_IMPORTED_MODULE_6__["WalkInCustomerComponent"],
          data: {
            title: 'otp',
            breadcrumb: 'WALKIN'
          }
        }, {
          path: 'appointment-id',
          component: _others_appointment_id_appointment_id_component__WEBPACK_IMPORTED_MODULE_7__["AppointmentIdComponent"],
          data: {
            title: 'otp',
            breadcrumb: 'WALKIN'
          }
        }, {
          path: "404",
          component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotFoundComponent"],
          data: {
            title: "Not Found"
          }
        }, {
          path: "error",
          component: _error_error_component__WEBPACK_IMPORTED_MODULE_1__["ErrorComponent"],
          data: {
            title: "Error"
          }
        }, {
          path: "scanner",
          component: _others_scanner_scanner_component__WEBPACK_IMPORTED_MODULE_4__["ScannerComponent"]
        }, {
          path: "scanFinger",
          component: _fingerprint_fingerprint_component__WEBPACK_IMPORTED_MODULE_5__["FingerprintComponent"]
        }]
      }]; // {
      //   path: '',
      //   children: [{
      //     path: 'login',
      //     component: LoginComponent,
      //     data: { title: 'Login', breadcrumb: 'LOGIN' }
      //   }]
      // },
      // {
      //   path: '',
      //   children: [{
      //     path: 'otp',
      //     component: OtpComponent,
      //     data: { title: 'otp', breadcrumb: 'OTP' }
      //   }]
      // },

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


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var _shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../shared/services/finger-print-capture.service */
      "rp8y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "0IaG");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");

      var FingerprintComponent = /*#__PURE__*/function () {
        function FingerprintComponent(router, dialogRef, fpCaptureService, data, cdr, snack) {
          _classCallCheck(this, FingerprintComponent);

          this.router = router;
          this.dialogRef = dialogRef;
          this.fpCaptureService = fpCaptureService;
          this.data = data;
          this.cdr = cdr;
          this.snack = snack;
          this.titleMessage = "Please use your fingerprint to authenticate";
          this.contentMessage = "Please place your thumb on the fingerprint reader to proceed.";
        }

        _createClass(FingerprintComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.userId = localStorage.getItem('userId');
            console.log('data :: ', this.data);
          }
        }, {
          key: "goToClose",
          value: function goToClose() {
            this.dialogRef.close();
          }
        }, {
          key: "goToScanner",
          value: function goToScanner() {
            var _this6 = this;

            this.fpCaptureService.CallingSGIFPCapture().subscribe(function (capturedData) {
              console.log('capturedData:: ', capturedData);
              var customerId = _this6.data.userId;

              if (capturedData.ErrorCode == 0) {
                _this6.getCustInfoById(customerId, capturedData.templateBase64);
              }
            });
          }
        }, {
          key: "getCustInfoById",
          value: function getCustInfoById(custId, templateBase64) {
            var _this7 = this;

            this.fpCaptureService.getCustInfoByCustomerId(custId).subscribe(function (resp) {
              console.log('customer resp :: ', resp); //fpTemplateBase64

              resp.data.forEach(function (item) {
                if (item.documentType == 4) {
                  console.log('documentType :: ', item.documentType);

                  _this7.matchFpFromUi(templateBase64, item.fpTemplateBase64);
                }
              });
            });
          }
        }, {
          key: "matchFpFromUi",
          value: function matchFpFromUi(template1, data) {
            var _this8 = this;

            console.log('inside match:: ');
            this.fpCaptureService.CallingSGIFPMatch(template1, data).subscribe(function (fpResp) {
              console.log('fpResp : ', fpResp);

              if (fpResp.MatchingScore >= 100) {
                var custId = _this8.data.userId;

                _this8.router.navigateByUrl('/others/kioskHome');

                _this8.dialogRef.close({
                  message: 'Confirm',
                  custId: custId
                });

                _this8.snack.open("User found : ".concat(custId), 'OK', {
                  duration: 1000,
                  verticalPosition: 'top',
                  horizontalPosition: 'right'
                });

                return;
              }
            });
          }
        }, {
          key: "skip",
          value: function skip() {
            var data = 'skip';
            this.router.navigateByUrl('/others/kioskHome');
            this.dialogRef.close({
              message: 'Confirm',
              data: data
            });
          }
        }, {
          key: "saveBiometric",
          value: function saveBiometric(capFingerPrint, fingerName, cId) {
            var _this9 = this;

            var screen = 'Kisok Authenticate';
            this.fpCaptureService.saveBiometric(capFingerPrint, fingerName, cId, screen).subscribe(function (data) {
              console.log("after save ", data);

              _this9.cdr.markForCheck();

              _this9.snack.open('Captured ' + fingerName + ' Finger', 'OK', {
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
        return new (t || FingerprintComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_1__["FingerPrintCaptureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MatSnackBar"]));
      };

      FingerprintComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: FingerprintComponent,
        selectors: [["app-fingerprint"]],
        decls: 22,
        vars: 2,
        consts: [[2, "background-color", "white"], ["fxLayout", "row", 1, "contain"], [1, "backIcon", 2, "color", "black", 3, "click"], ["fxLayout", "column", "fxLayoutGap", "5%", "fxLayoutAlign", "space-between center", 1, ""], [1, "card-title", 2, "color", "black"], [1, "para", 2, "color", "black"], [1, "matIcon"], ["mat-flat-button", "", 1, "buttonScan", 3, "click"]],
        template: function FingerprintComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FingerprintComponent_Template_mat_icon_click_2_listener() {
              return ctx.goToClose();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h3", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "p", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "fingerprint");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FingerprintComponent_Template_button_click_17_listener() {
              return ctx.goToScanner();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "SCAN");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FingerprintComponent_Template_button_click_20_listener() {
              return ctx.skip();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "SKIP");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.titleMessage);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.contentMessage);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]],
        styles: [".main-div[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.contain[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.text[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding-top: 25px;\n}\n\n.backIcon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 0% 0% 0% 0%;\n  font-size: 20px;\n  color: #000000;\n}\n\n.para[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: center;\n}\n\n.matIcon[_ngcontent-%COMP%] {\n  color: #004c97;\n  padding-right: 4rem;\n  font-size: 6rem;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 24px;\n  text-align: center;\n  color: #000000;\n}\n\np[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: sans-serif;\n  font-size: 12px;\n}\n\n.buttonScan[_ngcontent-%COMP%] {\n  width: 170px;\n  border-radius: 25px;\n  background-color: #004c97;\n  color: #FFFFFF;\n  font-family: sans-serif;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZmluZ2VycHJpbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFDRDs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBQ0E7RUFDSSx1QkFBQTtFQUNBLGlCQUFBO0FBRUo7O0FBQUE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUdKOztBQUFBO0VBQ0ksY0FBQTtFQUVBLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBR0o7O0FBREE7RUFDSSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFJSjs7QUFEQTtFQUNJLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7QUFJSjs7QUFGQTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0FBS0o7O0FBSEU7RUFDRSxtQkFBQTtBQU1KIiwiZmlsZSI6ImZpbmdlcnByaW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tZGl2e1xyXG5cdGhlaWdodDogMTAwdmg7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbi5jb250YWlue1xyXG4gICAganVzdGlmeS1jb250ZW50OiAgZmxleC1lbmQ7XHJcbn1cclxuLnRleHR7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAyNXB4O1xyXG59XHJcbi5iYWNrSWNvbntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBhZGRpbmc6IDAlIDAlIDAlIDAlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAvLyBvcGFjaXR5OiA0MCU7XHJcbn1cclxuLnBhcmF7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIC8vIG9wYWNpdHk6IDM3JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4ubWF0SWNvbntcclxuICAgIGNvbG9yOiAjMDA0Yzk3O1xyXG4gICAgcGFkZGluZy1yaWdodDogNHJlbTtcclxuICAgIGZvbnQtc2l6ZTogNnJlbTtcclxufVxyXG4uY2FyZC10aXRsZXtcclxuICAgIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIC8vIG9wYWNpdHk6IDYyJTtcclxufVxyXG5we1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxMnB4OyBcclxufVxyXG4uYnV0dG9uU2NhbntcclxuICAgIHdpZHRoOiAxNzBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0Yzk3O1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xyXG4gIH1cclxuICAuZnVsbC13aWR0aHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FingerprintComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
          args: [{
            selector: 'app-fingerprint',
            templateUrl: './fingerprint.component.html',
            styleUrls: ['./fingerprint.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
          }, {
            type: _shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_1__["FingerPrintCaptureService"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "qxMs":
    /*!***********************************************************!*\
      !*** ./src/app/views/others/scanner/scanner.component.ts ***!
      \***********************************************************/

    /*! exports provided: ScannerComponent */

    /***/
    function qxMs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ScannerComponent", function () {
        return ScannerComponent;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var app_shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/services/app-confirm/app-confirm.service */
      "3kSh");
      /* harmony import */


      var app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/shared/services/Dialog/dialog.service */
      "LP5l");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "Wp6s");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      "NFeN");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "bTqV");
      /* harmony import */


      var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @zxing/ngx-scanner */
      "IyRd"); // import { MatDialogRef } from '@angular/material/dialog';


      function ScannerComponent_zxing_scanner_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "zxing-scanner", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scanSuccess", function ScannerComponent_zxing_scanner_7_Template_zxing_scanner_scanSuccess_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2);

            var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r1.scanSuccessHandler($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formats", ctx_r0.allowedFormats)("torch", true);
        }
      }

      var ScannerComponent = /*#__PURE__*/function () {
        function ScannerComponent(router, apiService, fb, http, cdr, dialogService, confirmService) {
          _classCallCheck(this, ScannerComponent);

          this.router = router;
          this.apiService = apiService;
          this.fb = fb;
          this.http = http;
          this.cdr = cdr;
          this.dialogService = dialogService;
          this.confirmService = confirmService;
        }

        _createClass(ScannerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getBankBranches();
          }
        }, {
          key: "getBankBranches",
          value: function getBankBranches() {
            var _this10 = this;

            this.apiService.getBranchforKiosk().subscribe(function (data) {
              _this10.branchData = data;
              console.log(_this10.branchData);
              data.forEach(function (element, index) {
                _this10.branch = data[index].branchName;
                console.log(_this10.branch);
              });
            });
          }
        }, {
          key: "scanSuccessHandler",
          value: function scanSuccessHandler(scannedEvent) {
            var _this11 = this;

            console.log("QR Code Scanned Data : ", scannedEvent, JSON.parse(scannedEvent).accountId);
            this.transcationType = JSON.parse(scannedEvent).productCode;
            this.transBranch = JSON.parse(scannedEvent).transactionBranch;
            this.customerholderName = JSON.parse(scannedEvent).holderName;
            this.scanneedData = scannedEvent;
            localStorage.setItem("scannerData", JSON.stringify(this.scanneedData));
            localStorage.setItem("custholderName", this.customerholderName);
            this.date = this.convertTo24Hours(new Date().toLocaleTimeString());
            this.timeslot = this.convertTo24Hours(JSON.parse(scannedEvent).timeSlot);
            this.diff = this.secondsToHMS(this.hmsToSeconds(this.date) - this.hmsToSeconds(this.timeslot));
            console.log("Branches", this.branch);

            if (this.transBranch == this.branch) {
              if (this.diff.split(':')[0] > 1 || this.diff.split(':')[1] > 1) {
                this.confirmService.confirm({
                  title: "Confirm",
                  message: "Please scan code within 1hr of selected transaction time",
                  ok: "Yes",
                  cancel: "No"
                }).subscribe(function (res) {
                  console.log("Response", res);

                  if (res === true) {
                    _this11.cdr.markForCheck();
                  } else {
                    _this11.router.navigate(['/sessions/login/']);
                  }

                  ;
                });
              }

              console.log("Same");

              if (this.transcationType == 'CHW') {
                this.router.navigateByUrl('/others/cw-cash-withdrawal');
              } else if (this.transcationType == 'CHD') {
                this.router.navigateByUrl('/others/cd-cash-deposit');
              } else if (this.transcationType == 'CQW') {
                this.router.navigateByUrl('/others/cheq-withdrawal');
              } else if (this.transcationType == 'CQD') {
                this.router.navigateByUrl('/others/cheq-deposit');
              }
            } else {
              console.log("Not True");
              this.confirmService.confirm({
                title: "Confirm",
                message: "Transaction Branch selected on Mobile and this Kiosk Branch are different. Would you like to continue your transaction in this branch? ",
                ok: "Yes",
                cancel: "No"
              }).subscribe(function (res) {
                console.log("Response", res);

                if (res === true) {
                  if (_this11.diff.split(':')[0] > 1 || _this11.diff.split(':')[1] > 1) {
                    _this11.confirmService.confirm({
                      title: "Confirm",
                      message: "Please scan code within 1hr of selected transaction time",
                      ok: "Yes",
                      cancel: "No"
                    }).subscribe(function (res) {
                      console.log("Response", res);

                      if (res === true) {
                        _this11.cdr.markForCheck();
                      } else {
                        _this11.router.navigate(['/sessions/login/']);
                      }

                      ;
                    });
                  }

                  console.log("Same");

                  if (_this11.transcationType == 'CHW') {
                    _this11.router.navigateByUrl('/others/cw-cash-withdrawal');
                  } else if (_this11.transcationType == 'CHD') {
                    _this11.router.navigateByUrl('/others/cash-deposit');
                  } else if (_this11.transcationType == 'CQW') {
                    _this11.router.navigateByUrl('/others/cheque-withdrawal');
                  } else if (_this11.transcationType == 'CQD') {
                    _this11.router.navigateByUrl('/others/cheque-deposit');
                  }
                } else {
                  _this11.router.navigate(['/sessions/login/']);
                }

                ;
              });
            }
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.router.navigate(['/sessions/login/']);
          }
        }, {
          key: "convertTo24Hours",
          value: function convertTo24Hours(timeIn12Hrs) {
            var _timeIn12Hrs$split = timeIn12Hrs.split(" "),
                _timeIn12Hrs$split2 = _slicedToArray(_timeIn12Hrs$split, 2),
                time = _timeIn12Hrs$split2[0],
                modifier = _timeIn12Hrs$split2[1];

            var _time$split = time.split(":"),
                _time$split2 = _slicedToArray(_time$split, 2),
                hours = _time$split2[0],
                minutes = _time$split2[1];

            console.log("hours::", hours);

            if (hours === "12") {
              hours = "00";
            }

            if (modifier === "PM") {
              hours = parseInt(hours, 10) + 12;
            }

            var currentDate = hours + ":" + minutes;
            return currentDate;
          }
        }, {
          key: "hmsToSeconds",
          value: function hmsToSeconds(s) {
            var b = s.split(':');
            return b[0] * 3600 + b[1] * 60 + (+b[2] || 0);
          }
        }, {
          key: "secondsToHMS",
          value: function secondsToHMS(secs) {
            function z(n) {
              return (n < 10 ? '0' : '') + n;
            }

            var sign = secs < 0 ? '-' : '';
            secs = Math.abs(secs);
            return sign + z(secs / 3600 | 0) + ':' + z(secs % 3600 / 60 | 0) + ':' + z(secs % 60);
          }
        }]);

        return ScannerComponent;
      }();

      ScannerComponent.ɵfac = function ScannerComponent_Factory(t) {
        return new (t || ScannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_5__["AppConfirmService"]));
      };

      ScannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ScannerComponent,
        selectors: [["app-scanner"]],
        decls: 47,
        vars: 1,
        consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "fullcard"], ["fxFlex", "60%"], [1, "chequecard"], ["fxLayout", "row", 1, "contain"], [1, "scanBox"], [1, "scan-area"], ["class", "icust-scanner", 3, "formats", "torch", "scanSuccess", 4, "ngIf"], [1, "card-title"], [1, "arrowBox"], [1, "qrIcon"], [1, "helpcard"], [1, "content"], [1, "mobileBox"], ["fxLayout", "row-wrap", 1, "flex-gap"], [1, "insideDiv"], ["src", "assets/images/scanner1.png", "alt", "", 1, "scannerImg"], [1, "text"], ["src", "assets/images/scan2.png", "alt", "", 1, "scannerImg2"], ["src", "assets/images/scanner3.png", "alt", "", 1, "scannerImg"], ["mat-button", "", "rounded", "", "color", "grey", 3, "click"], [1, "icust-scanner", 3, "formats", "torch", "scanSuccess"]],
        template: function ScannerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-card", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card-title");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ScannerComponent_zxing_scanner_7_Template, 1, 2, "zxing-scanner", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Use the XYZ Bank App QR Scanner ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " to generate token. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-card", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-icon", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "autorenew");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Waiting for you to scan... ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](18, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Need help to get started ?");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-card-content", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-card", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "img", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Open XYZ Bank App ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "on your phone.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "img", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Select QR code from the ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " Transaction details for");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " required Transaction.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "img", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Point the camera at the");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, " QR Code above.");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScannerComponent_Template_button_click_45_listener() {
              return ctx.goBack();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Back ");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", true);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_12__["ZXingScannerComponent"]],
        styles: [".fullcard[_ngcontent-%COMP%] {\n  background-color: #004c97;\n  width: 100%;\n  height: 100%;\n}\n\n.scan-area[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n\n.icust-scanner[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  max-width: 100% !important;\n  max-height: 100% !important;\n  -o-object-fit: contain !important;\n     object-fit: contain !important;\n}\n\n.helpcard[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-left: 3%;\n}\n\n.topbar-branding[_ngcontent-%COMP%] {\n  line-height: 30px;\n  margin-left: 5%;\n}\n\n.chequecard[_ngcontent-%COMP%] {\n  margin-top: 10%;\n  height: 540px;\n  border-radius: 10px;\n  background-color: #ECF3F2;\n}\n\n.contain[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n\n.scanBox[_ngcontent-%COMP%] {\n  width: 290px;\n  height: 222px;\n  margin-left: 8%;\n  margin-top: 5%;\n  padding: 9px;\n}\n\n.scanIcon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 20px;\n  text-align: center;\n  color: #000000;\n  padding-top: 50px;\n  padding-left: 20px;\n}\n\n.arrowBox[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 34px;\n  border-radius: 20px;\n  padding-top: 6px;\n  color: #acacac;\n}\n\n.qrIcon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  float: left;\n}\n\n.content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.mobileBox[_ngcontent-%COMP%] {\n  height: 155px;\n  border-radius: 10px;\n}\n\n.phoneIcon[_ngcontent-%COMP%] {\n  font-size: 65px;\n  color: #456EFE;\n  margin-top: -40%;\n}\n\n.flex-gap[_ngcontent-%COMP%] {\n  gap: 22%;\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n}\n\np[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: sans-serif;\n  font-size: 10px;\n  padding-left: 10px;\n  padding-top: 5px;\n}\n\n.circle[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 20px;\n  width: 20px;\n  padding: 2px;\n  font: 12px Arial, sans-serif;\n  color: white;\n  background-color: #456EFE;\n  margin-top: 5%;\n}\n\n.insideDiv[_ngcontent-%COMP%] {\n  margin-bottom: 5%;\n  justify-content: space-around;\n}\n\n.scannerImg[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 90px;\n}\n\n.scannerImg2[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 110px;\n}\n\n.text[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.fullcard[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 32%;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: white;\n}\n\n.buttonNext[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  background-color: #FFFFFF;\n  color: #929292;\n  font-family: sans-serif;\n  width: 280px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2Nhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFDRTtFQUNFLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQ0FBQTtLQUFBLDhCQUFBO0FBRUo7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUFBRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSwyQkFBQTtBQUVGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLFlBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7QUFJRjs7QUFGQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFLRjs7QUFGQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFLRjs7QUFIQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FBTUY7O0FBSkE7RUFDRSxrQkFBQTtBQU9GOztBQUxBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0FBUUY7O0FBTkE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBU0Y7O0FBUEE7RUFDRSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQVVGOztBQVJBO0VBQ0UsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFXRjs7QUFURTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBWUo7O0FBVkU7RUFDRSxpQkFBQTtFQUNBLDZCQUFBO0FBYUo7O0FBVkU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQWFKOztBQVhFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUFjSjs7QUFaRTtFQUNFLHVCQUFBO0FBZUo7O0FBWkk7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFFQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsaUJBQUE7QUFjSjs7QUFaSTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0FBZU4iLCJmaWxlIjoic2Nhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsY2FyZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzAwNGM5NztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnNjYW4tYXJlYXtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5pY3VzdC1zY2FubmVye1xyXG4gIHZpZGVve1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmhlbHBjYXJke1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1sZWZ0OiAzJTtcclxufVxyXG4udG9wYmFyLWJyYW5kaW5ne1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgLy8gei1pbmRleDogLTE7XHJcbn1cclxuLmNoZXF1ZWNhcmR7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIGhlaWdodDogNTQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNGM0YyO1xyXG59XHJcbi5jb250YWlue1xyXG4gIGp1c3RpZnktY29udGVudDogIGZsZXgtc3RhcnQ7XHJcbn1cclxuLnNjYW5Cb3h7XHJcbiAgd2lkdGg6IDI5MHB4O1xyXG4gIGhlaWdodDogMjIycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDglO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIHBhZGRpbmc6IDlweDtcclxufVxyXG4uc2Nhbkljb257XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jYXJkLXRpdGxle1xyXG4gIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgXHJcbn1cclxuLmFycm93Qm94e1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gIGNvbG9yOiAjYWNhY2FjO1xyXG59XHJcbi5xckljb257XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZsb2F0OmxlZnQ7XHJcbn1cclxuLmNvbnRlbnR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5tb2JpbGVCb3h7XHJcbiAgaGVpZ2h0OiAxNTVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5waG9uZUljb257XHJcbiAgZm9udC1zaXplOiA2NXB4O1xyXG4gIGNvbG9yOiAjNDU2RUZFO1xyXG4gIG1hcmdpbi10b3A6IC00MCU7XHJcbn1cclxuLmZsZXgtZ2FwIHtcclxuICBnYXA6IDIyJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbnB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4OyBcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcbiAgLmNpcmNsZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGZvbnQ6IDEycHggQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU2RUZFO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgfVxyXG4gIC5pbnNpZGVEaXZ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIH1cclxuXHJcbiAgLnNjYW5uZXJJbWd7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICB9XHJcbiAgLnNjYW5uZXJJbWcye1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDExMHB4O1xyXG4gIH1cclxuICAudGV4dHtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAgIC5mdWxsY2FyZDpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vIHotaW5kZXg6IC0xO1xyXG4gICAgdG9wOiAzMiU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uTmV4dHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgICAgY29sb3I6ICM5MjkyOTI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICB3aWR0aDogMjgwcHg7XHJcbiAgfVxyXG5cclxuIFxyXG5cclxuXHJcblxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScannerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-scanner',
            templateUrl: './scanner.component.html',
            styleUrls: ['./scanner.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]
          }, {
            type: app_shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_5__["AppConfirmService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "rp8y":
    /*!*****************************************************************!*\
      !*** ./src/app/shared/services/finger-print-capture.service.ts ***!
      \*****************************************************************/

    /*! exports provided: FingerPrintCaptureService */

    /***/
    function rp8y(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FingerPrintCaptureService", function () {
        return FingerPrintCaptureService;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "dNgK");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./api.service */
      "nm5K");

      var FingerPrintCaptureService = /*#__PURE__*/function () {
        function FingerPrintCaptureService(http, snack) {
          _classCallCheck(this, FingerPrintCaptureService);

          this.http = http;
          this.snack = snack;
          this.userData = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('');

          this.getJSON_rd = function (url, callback) {
            var xhr = new XMLHttpRequest();
            xhr.open('RDSERVICE', url, true);
            xhr.responseType = 'text';

            xhr.onload = function () {
              var status = xhr.status;

              if (status == 200) {
                callback(null, xhr.response);
              } else {
                callback(status);
              }
            };

            xhr.send();
          };
        }

        _createClass(FingerPrintCaptureService, [{
          key: "userDataService",
          value: function userDataService(data) {
            this.userData.next(data);
          }
          /* NOTE:
          biometric call type: webapi
          lisence: used 60 free trail version
          desc: currently using this service for finger print capturing
           */

        }, {
          key: "CallingSGIFPGetData",
          value: function CallingSGIFPGetData() {
            return this.http.get('http://localhost:8000/SGIFPCapture').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (result) {
              console.log('result-->', result);
              return result;
            }));
          }
        }, {
          key: "handleError",
          value: function handleError(arg0, arg1) {
            throw new Error('Method not implemented.');
          }
          /* NOTE:
          biometric call type: registered device service
          lisence: paid
          desc: currently not using this service
           */

        }, {
          key: "rdservice",
          value: function rdservice() {
            var port;
            var urlStr = '';
            urlStr = 'http://localhost:11100/';
            this.getJSON_rd(urlStr, function (err, data) {
              if (err != null) {
                alert('Something went wrong: ' + err);
              } else {
                alert('Response:-' + String(data));
              }
            });
          }
        }, {
          key: "saveBiometric",
          value: function saveBiometric(capFingerPrint, fingerName, cId, screen) {
            return this.http.post("".concat(_api_service__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "/rest/upload/saveOrUpdateBio/").concat(fingerName, "/").concat(cId, "/").concat(screen), capFingerPrint);
          }
        }, {
          key: "errorCodeService",
          value: function errorCodeService(errorCode) {
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
            this.snack.open("".concat(error), 'OK', {
              duration: 4000,
              verticalPosition: 'top',
              horizontalPosition: 'right'
            });
          }
        }, {
          key: "getCustInfoByFp",
          value: function getCustInfoByFp(page, size, fingerIndex) {
            var params;
            console.log("fingerIndex ".concat(fingerIndex, " and page ").concat(page));
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append('fingerIndex', fingerIndex); //.append('page', page);

            return this.http.get("".concat(_api_service__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "/rest/upload/getCustomerDataByFp?").concat(params));
          }
        }, {
          key: "getCustInfoByCustomerId",
          value: function getCustInfoByCustomerId(customerId) {
            var params;
            console.log("customerId ".concat(customerId));
            params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append('customerId', customerId);
            return this.http.get("".concat(_api_service__WEBPACK_IMPORTED_MODULE_5__["API_URL"], "/rest/upload/getCustomerDataByFp?").concat(params));
          }
          /* To-Do: https api capture */

        }, {
          key: "CallingSGIFPCapture",
          value: function CallingSGIFPCapture() {
            console.log(" in service ");
            return this.http.get('https://localhost:8443/SGIFPCapture').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (result) {
              console.log('result-->', result);
              return result;
            }));
          }
          /* To-Do: https api capture */

        }, {
          key: "CallingSGIFPMatch",
          value: function CallingSGIFPMatch(templeData1, templeData2) {
            var secuLicc = "ae7VmpMA9ZwEGVYVr1LMWrqjCEx+eFmya9VX0v+vNfQ=";
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append('template1', templeData1).append('template2', templeData2); //  .append('licstr',secuLicc);
            //  .append('licstr',secuLicc);
            // http://localhost:8000/SGIMatchScore

            return this.http.post("https://localhost:8443/SGIMatchScore", params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (result) {
              // console.log('result-->', result)
              return result;
            }));
          }
        }]);

        return FingerPrintCaptureService;
      }();

      FingerPrintCaptureService.ɵfac = function FingerPrintCaptureService_Factory(t) {
        return new (t || FingerPrintCaptureService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]));
      };

      FingerPrintCaptureService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: FingerPrintCaptureService,
        factory: FingerPrintCaptureService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FingerPrintCaptureService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "uxn7":
    /*!*******************************************************************************************!*\
      !*** ./node_modules/ngx-custom-validators/__ivy_ngcc__/fesm2015/ngx-custom-validators.js ***!
      \*******************************************************************************************/

    /*! exports provided: CustomFormsModule, CustomValidators, ɵa, ɵb, ɵba, ɵbb, ɵbc, ɵbd, ɵbe, ɵbf, ɵbg, ɵbh, ɵbi, ɵbj, ɵbk, ɵbl, ɵbm, ɵbn, ɵbo, ɵbp, ɵbq, ɵbr, ɵbs, ɵbt, ɵbu, ɵbv, ɵbw, ɵbx, ɵby, ɵbz, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs, ɵt, ɵu, ɵv, ɵw, ɵx, ɵy, ɵz */

    /***/
    function uxn7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomFormsModule", function () {
        return CustomFormsModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CustomValidators", function () {
        return CustomValidators;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵa", function () {
        return arrayLength;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵb", function () {
        return base64;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵba", function () {
        return ArrayLengthValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbb", function () {
        return Base64Validator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbc", function () {
        return CreditCardValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbd", function () {
        return DateValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbe", function () {
        return DateISOValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbf", function () {
        return DigitsValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbg", function () {
        return EmailValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbh", function () {
        return EqualValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbi", function () {
        return EqualToValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbj", function () {
        return GreaterThanValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbk", function () {
        return GreaterThanEqualValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbl", function () {
        return JSONValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbm", function () {
        return LessThanValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbn", function () {
        return LessThanEqualValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbo", function () {
        return MaxValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbp", function () {
        return MaxDateValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbq", function () {
        return MinValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbr", function () {
        return MinDateValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbs", function () {
        return NotEqualValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbt", function () {
        return NotEqualToValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbu", function () {
        return NumberValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbv", function () {
        return PropertyValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbw", function () {
        return RangeValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbx", function () {
        return RangeLengthValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵby", function () {
        return UrlValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵbz", function () {
        return UUIDValidator;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵc", function () {
        return creditCard;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵd", function () {
        return date;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵe", function () {
        return dateISO;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵf", function () {
        return digits;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵg", function () {
        return email;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵh", function () {
        return equal;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵi", function () {
        return equalTo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵj", function () {
        return gt;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵk", function () {
        return gte;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵl", function () {
        return json;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵm", function () {
        return lt;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵn", function () {
        return lte;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵo", function () {
        return max;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵp", function () {
        return maxDate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵq", function () {
        return min;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵr", function () {
        return minDate;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵs", function () {
        return notEqual;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵt", function () {
        return notEqualTo;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵu", function () {
        return number;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵv", function () {
        return property;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵw", function () {
        return range;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵx", function () {
        return rangeLength;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵy", function () {
        return url;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ɵz", function () {
        return uuid;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "aOmE");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      function isPresent(obj) {
        return obj !== undefined && obj !== null;
      }

      function isDate(obj) {
        try {
          var _date = new Date(obj);

          return !isNaN(_date.getTime());
        } catch (e) {
          return false;
        }
      }

      function parseDate(obj) {
        try {
          // Moment.js
          if (obj._d instanceof Date) {
            var d = obj._d;
            var month = +d.getMonth() + 1;
            var day = +d.getDate();
            return "".concat(d.getFullYear(), "-").concat(formatDayOrMonth(month), "-").concat(formatDayOrMonth(day));
          } // NgbDateStruct


          if (typeof obj === 'object' && obj.year != null && obj.month != null && obj.day != null) {
            var _month = +obj.month;

            var _day = +obj.day;

            return "".concat(obj.year, "-").concat(formatDayOrMonth(_month), "-").concat(formatDayOrMonth(_day));
          }
        } catch (e) {}

        return obj;
      }

      function formatDayOrMonth(month) {
        return month < 10 ? "0".concat(month) : month;
      }

      var arrayLength = function arrayLength(value) {
        return function (control) {
          if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
          }

          var obj = control.value;
          return Array.isArray(obj) && obj.length >= +value ? null : {
            arrayLength: {
              minLength: value
            }
          };
        };
      };

      var base64 = function base64(control) {
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
          return null;
        }

        var v = control.value;
        return /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i.test(v) ? null : {
          base64: true
        };
      };

      var creditCard = function creditCard(control) {
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
          return null;
        }

        var v = control.value;
        var sanitized = v.replace(/[^0-9]+/g, ''); // problem with chrome

        /* tslint:disable */

        if (!/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|(?:9792)\d{12})$/.test(sanitized)) {
          return {
            creditCard: true
          };
        }
        /* tslint:enable */


        var sum = 0;
        var digit;
        var tmpNum;
        var shouldDouble;

        for (var i = sanitized.length - 1; i >= 0; i--) {
          digit = sanitized.substring(i, i + 1);
          tmpNum = parseInt(digit, 10);

          if (shouldDouble) {
            tmpNum *= 2;

            if (tmpNum >= 10) {
              sum += tmpNum % 10 + 1;
            } else {
              sum += tmpNum;
            }
          } else {
            sum += tmpNum;
          }

          shouldDouble = !shouldDouble;
        }

        if (Boolean(sum % 10 === 0 ? sanitized : false)) {
          return null;
        }

        return {
          creditCard: true
        };
      };

      var date = function date(control) {
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
          return null;
        }

        var v = control.value;
        v = parseDate(v);
        return isDate(v) ? null : {
          date: true
        };
      };

      var dateISO = function dateISO(control) {
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
          return null;
        }

        var v = control.value;
        return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(v) ? null : {
          dateISO: true
        };
      };

      var digits = function digits(control) {
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
          return null;
        }

        var v = control.value;
        return /^\d+$/.test(v) ? null : {
          digits: true
        };
      };

      var email = function email(control) {
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
          return null;
        }

        var v = control.value;
        /* tslint:disable */

        return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) ? null : {
          'email': true
        };
        /* tslint:enable */
      };

      var equal = function equal(val) {
        return function (control) {
          if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
          }

          var v = control.value;
          return val === v ? null : {
            equal: {
              value: val
            }
          };
        };
      };

      var equalTo = function equalTo(equalControl) {
        var subscribe = false;
        return function (control) {
          if (!subscribe) {
            subscribe = true;
            equalControl.valueChanges.subscribe(function () {
              control.updateValueAndValidity();
            });
          }

          var v = control.value;
          return equalControl.value === v ? null : {
            equalTo: {
              control: equalControl,
              value: equalControl.value
            }
          };
        };
      };

      var gt = function gt(value) {
        return function (control) {
          if (!isPresent(value)) {
            return null;
          }

          if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
          }

          var v = +control.value;
          return v > +value ? null : {
            gt: {
              value: value
            }
          };
        };
      };

      var gte = function gte(value) {
        return function (control) {
          if (!isPresent(value)) {
            return null;
          }

          if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
          }

          var v = +control.value;
          return v >= +value ? null : {
            gte: {
              value: value
            }
          };
        };
      };

      var json = function json(control) {
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
          return null;
        }

        var v = control.value;

        try {
          var obj = JSON.parse(v);

          if (Boolean(obj) && typeof obj === 'object') {
            return null;
          }
        } catch (e) {}

        return {
          json: true
        };
      };

      var lt = function lt(value) {
        return function (control) {
          if (!isPresent(value)) {
            return null;
          }

          if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
          }

          var v = +control.value;
          return v < +value ? null : {
            lt: {
              value: value
            }
          };
        };
      };

      var lte = function lte(value) {
        return function (control) {
          if (!isPresent(value)) {
            return null;
          }

          if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
          }

          var v = +control.value;
          return v <= +value ? null : {
            lte: {
              value: value
            }
          };
        };
      };

      var max = function max(value) {
        return function (control) {
          if (!isPresent(value)) {
            return null;
          }

          if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
          }

          var v = +control.value;
          return v <= +value ? null : {
            max: {
              value: value
            }
          };
        };
      };

      var maxDate = function maxDate(maxInput) {
        var value;
        var subscribe = false;
        var maxValue = maxInput;
        var isForm = maxInput instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"] || maxInput instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"];
        return function (control) {
          if (!subscribe && isForm) {
            subscribe = true;
            maxInput.valueChanges.subscribe(function () {
              control.updateValueAndValidity();
            });
          }

          if (isForm) {
            maxValue = maxInput.value;
          }

          value = parseDate(maxValue);

          if (!isDate(value) && !(value instanceof Function)) {
            if (value == null) {
              return null;
            } else if (isForm) {
              return {
                maxDate: {
                  error: 'maxDate is invalid'
                }
              };
            } else {
              throw Error('maxDate value must be or return a formatted date');
            }
          }

          if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
          }

          var d = new Date(parseDate(control.value)).getTime();

          if (!isDate(d)) {
            return {
              value: true
            };
          }

          if (value instanceof Function) {
            value = value();
          }

          return d <= new Date(value).getTime() ? null : isForm ? {
            maxDate: {
              control: maxInput,
              value: maxInput.value
            }
          } : {
            maxDate: {
              value: maxValue,
              control: undefined
            }
          };
        };
      };

      var min = function min(value) {
        return function (control) {
          if (!isPresent(value)) {
            return null;
          }

          if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
          }

          var v = +control.value;
          return v >= +value ? null : {
            min: {
              value: value
            }
          };
        };
      };

      var minDate = function minDate(minInput) {
        var value;
        var subscribe = false;
        var minValue = minInput;
        var isForm = minInput instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"] || minInput instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"];
        return function (control) {
          if (!subscribe && isForm) {
            subscribe = true;
            minInput.valueChanges.subscribe(function () {
              control.updateValueAndValidity();
            });
          }

          if (isForm) {
            minValue = minInput.value;
          }

          value = parseDate(minValue);

          if (!isDate(value) && !(value instanceof Function)) {
            if (value == null) {
              return null;
            } else if (isForm) {
              return {
                minDate: {
                  error: 'minDate is invalid'
                }
              };
            } else {
              throw Error('minDate value must be or return a formatted date');
            }
          }

          if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
          }

          var d = new Date(parseDate(control.value)).getTime();

          if (!isDate(d)) {
            return {
              value: true
            };
          }

          if (value instanceof Function) {
            value = value();
          }

          return d >= new Date(value).getTime() ? null : isForm ? {
            minDate: {
              control: minInput,
              value: minInput.value
            }
          } : {
            minDate: {
              value: minValue,
              control: undefined
            }
          };
        };
      };

      var notEqual = function notEqual(val) {
        return function (control) {
          if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
          }

          var v = control.value;
          return val !== v ? null : {
            notEqual: {
              value: val
            }
          };
        };
      };

      var notEqualTo = function notEqualTo(notEqualControl) {
        var subscribe = false;
        return function (control) {
          if (!subscribe) {
            subscribe = true;
            notEqualControl.valueChanges.subscribe(function () {
              control.updateValueAndValidity();
            });
          }

          var v = control.value;

          if (notEqualControl.value == null && v == null) {
            return null;
          }

          return notEqualControl.value !== v ? null : {
            notEqualTo: {
              control: notEqualControl,
              value: notEqualControl.value
            }
          };
        };
      };

      var number = function number(control) {
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
          return null;
        }

        var v = control.value;
        return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(v) ? null : {
          'number': true
        };
      };

      var property = function property(value) {
        return function (control) {
          if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
          }

          var properties = value.split(',');
          var obj = control.value;
          var isValid = true;

          var _iterator = _createForOfIteratorHelper(properties),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var prop = _step.value;

              if (obj[prop] == null) {
                isValid = false;
                break;
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          return isValid ? null : {
            hasProperty: {
              value: value
            }
          };
        };
      };

      var range = function range(value) {
        return function (control) {
          if (!isPresent(value)) {
            return null;
          }

          if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
          }

          var v = +control.value;
          return v >= value[0] && v <= value[1] ? null : {
            range: {
              value: value
            }
          };
        };
      };

      var rangeLength = function rangeLength(value) {
        return function (control) {
          if (!isPresent(value)) {
            return null;
          }

          if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
          }

          var v = control.value;
          return v.length >= value[0] && v.length <= value[1] ? null : {
            rangeLength: {
              value: value
            }
          };
        };
      };

      var uuids = {
        '3': /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
        '4': /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        '5': /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
        'all': /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
      };

      var uuid = function uuid(version) {
        return function (control) {
          if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
          }

          var v = control.value;
          var pattern = uuids[version] || uuids.all;
          return new RegExp(pattern).test(v) ? null : {
            uuid: true
          };
        };
      };

      var url = function url(control) {
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
          return null;
        }

        var v = control.value;
        /* tslint:disable */

        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(v) ? null : {
          'url': true
        };
        /* tslint:enable */
      };

      var ARRAY_LENGTH_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return ArrayLengthValidator;
        }),
        multi: true
      };

      var ArrayLengthValidator = /*#__PURE__*/function () {
        function ArrayLengthValidator() {
          _classCallCheck(this, ArrayLengthValidator);
        }

        _createClass(ArrayLengthValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = arrayLength(this.arrayLength);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            for (var key in changes) {
              if (key === 'arrayLength') {
                this.validator = arrayLength(changes[key].currentValue);

                if (this.onChange) {
                  this.onChange();
                }
              }
            }
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onChange = fn;
          }
        }]);

        return ArrayLengthValidator;
      }();

      ArrayLengthValidator.ɵfac = function ArrayLengthValidator_Factory(t) {
        return new (t || ArrayLengthValidator)();
      };

      ArrayLengthValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: ArrayLengthValidator,
        selectors: [["", "arrayLength", "", "formControlName", ""], ["", "arrayLength", "", "formControl", ""], ["", "arrayLength", "", "ngModel", ""]],
        inputs: {
          arrayLength: "arrayLength"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([ARRAY_LENGTH_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], ArrayLengthValidator.prototype, "arrayLength", void 0);
      var BASE64_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return Base64Validator;
        }),
        multi: true
      };

      var Base64Validator = /*#__PURE__*/function () {
        function Base64Validator() {
          _classCallCheck(this, Base64Validator);
        }

        _createClass(Base64Validator, [{
          key: "validate",
          value: function validate(c) {
            return base64(c);
          }
        }]);

        return Base64Validator;
      }();

      Base64Validator.ɵfac = function Base64Validator_Factory(t) {
        return new (t || Base64Validator)();
      };

      Base64Validator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: Base64Validator,
        selectors: [["", "base64", "", "formControlName", ""], ["", "base64", "", "formControl", ""], ["", "base64", "", "ngModel", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([BASE64_VALIDATOR])]
      });
      var CREDIT_CARD_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return CreditCardValidator;
        }),
        multi: true
      };

      var CreditCardValidator = /*#__PURE__*/function () {
        function CreditCardValidator() {
          _classCallCheck(this, CreditCardValidator);
        }

        _createClass(CreditCardValidator, [{
          key: "validate",
          value: function validate(c) {
            return creditCard(c);
          }
        }]);

        return CreditCardValidator;
      }();

      CreditCardValidator.ɵfac = function CreditCardValidator_Factory(t) {
        return new (t || CreditCardValidator)();
      };

      CreditCardValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: CreditCardValidator,
        selectors: [["", "creditCard", "", "formControlName", ""], ["", "creditCard", "", "formControl", ""], ["", "creditCard", "", "ngModel", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([CREDIT_CARD_VALIDATOR])]
      });
      var DATE_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return DateValidator;
        }),
        multi: true
      };

      var DateValidator = /*#__PURE__*/function () {
        function DateValidator() {
          _classCallCheck(this, DateValidator);
        }

        _createClass(DateValidator, [{
          key: "validate",
          value: function validate(c) {
            return date(c);
          }
        }]);

        return DateValidator;
      }();

      DateValidator.ɵfac = function DateValidator_Factory(t) {
        return new (t || DateValidator)();
      };

      DateValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: DateValidator,
        selectors: [["", "date", "", "formControlName", ""], ["", "date", "", "formControl", ""], ["", "date", "", "ngModel", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([DATE_VALIDATOR])]
      });
      var DATE_ISO_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return DateISOValidator;
        }),
        multi: true
      };

      var DateISOValidator = /*#__PURE__*/function () {
        function DateISOValidator() {
          _classCallCheck(this, DateISOValidator);
        }

        _createClass(DateISOValidator, [{
          key: "validate",
          value: function validate(c) {
            return dateISO(c);
          }
        }]);

        return DateISOValidator;
      }();

      DateISOValidator.ɵfac = function DateISOValidator_Factory(t) {
        return new (t || DateISOValidator)();
      };

      DateISOValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: DateISOValidator,
        selectors: [["", "dateISO", "", "formControlName", ""], ["", "dateISO", "", "formControl", ""], ["", "dateISO", "", "ngModel", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([DATE_ISO_VALIDATOR])]
      });
      var DIGITS_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return DigitsValidator;
        }),
        multi: true
      };

      var DigitsValidator = /*#__PURE__*/function () {
        function DigitsValidator() {
          _classCallCheck(this, DigitsValidator);
        }

        _createClass(DigitsValidator, [{
          key: "validate",
          value: function validate(c) {
            return digits(c);
          }
        }]);

        return DigitsValidator;
      }();

      DigitsValidator.ɵfac = function DigitsValidator_Factory(t) {
        return new (t || DigitsValidator)();
      };

      DigitsValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: DigitsValidator,
        selectors: [["", "digits", "", "formControlName", ""], ["", "digits", "", "formControl", ""], ["", "digits", "", "ngModel", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([DIGITS_VALIDATOR])]
      });
      var EMAIL_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return EmailValidator;
        }),
        multi: true
      };

      var EmailValidator = /*#__PURE__*/function () {
        function EmailValidator() {
          _classCallCheck(this, EmailValidator);
        }

        _createClass(EmailValidator, [{
          key: "validate",
          value: function validate(c) {
            return email(c);
          }
        }]);

        return EmailValidator;
      }();

      EmailValidator.ɵfac = function EmailValidator_Factory(t) {
        return new (t || EmailValidator)();
      };

      EmailValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: EmailValidator,
        selectors: [["", "ngvemail", "", "formControlName", ""], ["", "ngvemail", "", "formControl", ""], ["", "ngvemail", "", "ngModel", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([EMAIL_VALIDATOR])]
      });
      var EQUAL_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return EqualValidator;
        }),
        multi: true
      };

      var EqualValidator = /*#__PURE__*/function () {
        function EqualValidator() {
          _classCallCheck(this, EqualValidator);
        }

        _createClass(EqualValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = equal(this.equal);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            for (var key in changes) {
              if (key === 'equal') {
                this.validator = equal(changes[key].currentValue);

                if (this.onChange) {
                  this.onChange();
                }
              }
            }
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onChange = fn;
          }
        }]);

        return EqualValidator;
      }();

      EqualValidator.ɵfac = function EqualValidator_Factory(t) {
        return new (t || EqualValidator)();
      };

      EqualValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: EqualValidator,
        selectors: [["", "equal", "", "formControlName", ""], ["", "equal", "", "formControl", ""], ["", "equal", "", "ngModel", ""]],
        inputs: {
          equal: "equal"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([EQUAL_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], EqualValidator.prototype, "equal", void 0);
      var EQUAL_TO_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return EqualToValidator;
        }),
        multi: true
      };

      var EqualToValidator = /*#__PURE__*/function () {
        function EqualToValidator() {
          _classCallCheck(this, EqualToValidator);
        }

        _createClass(EqualToValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = equalTo(this.equalTo);
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }]);

        return EqualToValidator;
      }();

      EqualToValidator.ɵfac = function EqualToValidator_Factory(t) {
        return new (t || EqualToValidator)();
      };

      EqualToValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: EqualToValidator,
        selectors: [["", "equalTo", "", "formControlName", ""], ["", "equalTo", "", "formControl", ""], ["", "equalTo", "", "ngModel", ""]],
        inputs: {
          equalTo: "equalTo"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([EQUAL_TO_VALIDATOR])]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"])], EqualToValidator.prototype, "equalTo", void 0);
      var GREATER_THAN_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return GreaterThanValidator;
        }),
        multi: true
      };

      var GreaterThanValidator = /*#__PURE__*/function () {
        function GreaterThanValidator() {
          _classCallCheck(this, GreaterThanValidator);
        }

        _createClass(GreaterThanValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = gt(this.gt);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            for (var key in changes) {
              if (key === 'gt') {
                this.validator = gt(changes[key].currentValue);

                if (this.onChange) {
                  this.onChange();
                }
              }
            }
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onChange = fn;
          }
        }]);

        return GreaterThanValidator;
      }();

      GreaterThanValidator.ɵfac = function GreaterThanValidator_Factory(t) {
        return new (t || GreaterThanValidator)();
      };

      GreaterThanValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: GreaterThanValidator,
        selectors: [["", "gt", "", "formControlName", ""], ["", "gt", "", "formControl", ""], ["", "gt", "", "ngModel", ""]],
        inputs: {
          gt: "gt"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([GREATER_THAN_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GreaterThanValidator.prototype, "gt", void 0);
      var GREATER_THAN_EQUAL_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return GreaterThanEqualValidator;
        }),
        multi: true
      };

      var GreaterThanEqualValidator = /*#__PURE__*/function () {
        function GreaterThanEqualValidator() {
          _classCallCheck(this, GreaterThanEqualValidator);
        }

        _createClass(GreaterThanEqualValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = gte(this.gte);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            for (var key in changes) {
              if (key === 'gte') {
                this.validator = gte(changes[key].currentValue);

                if (this.onChange) {
                  this.onChange();
                }
              }
            }
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onChange = fn;
          }
        }]);

        return GreaterThanEqualValidator;
      }();

      GreaterThanEqualValidator.ɵfac = function GreaterThanEqualValidator_Factory(t) {
        return new (t || GreaterThanEqualValidator)();
      };

      GreaterThanEqualValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: GreaterThanEqualValidator,
        selectors: [["", "gte", "", "formControlName", ""], ["", "gte", "", "formControl", ""], ["", "gte", "", "ngModel", ""]],
        inputs: {
          gte: "gte"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([GREATER_THAN_EQUAL_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], GreaterThanEqualValidator.prototype, "gte", void 0);
      var JSON_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return JSONValidator;
        }),
        multi: true
      };

      var JSONValidator = /*#__PURE__*/function () {
        function JSONValidator() {
          _classCallCheck(this, JSONValidator);
        }

        _createClass(JSONValidator, [{
          key: "validate",
          value: function validate(c) {
            return json(c);
          }
        }]);

        return JSONValidator;
      }();

      JSONValidator.ɵfac = function JSONValidator_Factory(t) {
        return new (t || JSONValidator)();
      };

      JSONValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: JSONValidator,
        selectors: [["", "json", "", "formControlName", ""], ["", "json", "", "formControl", ""], ["", "json", "", "ngModel", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([JSON_VALIDATOR])]
      });
      var LESS_THAN_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return LessThanValidator;
        }),
        multi: true
      };

      var LessThanValidator = /*#__PURE__*/function () {
        function LessThanValidator() {
          _classCallCheck(this, LessThanValidator);
        }

        _createClass(LessThanValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = lt(this.lt);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            for (var key in changes) {
              if (key === 'lt') {
                this.validator = lt(changes[key].currentValue);

                if (this.onChange) {
                  this.onChange();
                }
              }
            }
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onChange = fn;
          }
        }]);

        return LessThanValidator;
      }();

      LessThanValidator.ɵfac = function LessThanValidator_Factory(t) {
        return new (t || LessThanValidator)();
      };

      LessThanValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: LessThanValidator,
        selectors: [["", "lt", "", "formControlName", ""], ["", "lt", "", "formControl", ""], ["", "lt", "", "ngModel", ""]],
        inputs: {
          lt: "lt"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([LESS_THAN_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], LessThanValidator.prototype, "lt", void 0);
      var LESS_THAN_EQUAL_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return LessThanEqualValidator;
        }),
        multi: true
      };

      var LessThanEqualValidator = /*#__PURE__*/function () {
        function LessThanEqualValidator() {
          _classCallCheck(this, LessThanEqualValidator);
        }

        _createClass(LessThanEqualValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = lte(this.lte);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            for (var key in changes) {
              if (key === 'lte') {
                this.validator = lte(changes[key].currentValue);

                if (this.onChange) {
                  this.onChange();
                }
              }
            }
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onChange = fn;
          }
        }]);

        return LessThanEqualValidator;
      }();

      LessThanEqualValidator.ɵfac = function LessThanEqualValidator_Factory(t) {
        return new (t || LessThanEqualValidator)();
      };

      LessThanEqualValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: LessThanEqualValidator,
        selectors: [["", "lte", "", "formControlName", ""], ["", "lte", "", "formControl", ""], ["", "lte", "", "ngModel", ""]],
        inputs: {
          lte: "lte"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([LESS_THAN_EQUAL_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], LessThanEqualValidator.prototype, "lte", void 0);
      var MAX_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return MaxValidator;
        }),
        multi: true
      };

      var MaxValidator = /*#__PURE__*/function () {
        function MaxValidator() {
          _classCallCheck(this, MaxValidator);
        }

        _createClass(MaxValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = max(this.max);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            for (var key in changes) {
              if (key === 'max') {
                this.validator = max(changes[key].currentValue);

                if (this.onChange) {
                  this.onChange();
                }
              }
            }
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onChange = fn;
          }
        }]);

        return MaxValidator;
      }();

      MaxValidator.ɵfac = function MaxValidator_Factory(t) {
        return new (t || MaxValidator)();
      };

      MaxValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MaxValidator,
        selectors: [["", "max", "", "formControlName", ""], ["", "max", "", "formControl", ""], ["", "max", "", "ngModel", ""]],
        inputs: {
          max: "max"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAX_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], MaxValidator.prototype, "max", void 0);
      var MAX_DATE_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return MaxDateValidator;
        }),
        multi: true
      };

      var MaxDateValidator = /*#__PURE__*/function () {
        function MaxDateValidator() {
          _classCallCheck(this, MaxDateValidator);
        }

        _createClass(MaxDateValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = maxDate(this.maxDate);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            for (var key in changes) {
              if (key === 'maxDate') {
                this.validator = maxDate(changes[key].currentValue);

                if (this.onChange) {
                  this.onChange();
                }
              }
            }
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onChange = fn;
          }
        }]);

        return MaxDateValidator;
      }();

      MaxDateValidator.ɵfac = function MaxDateValidator_Factory(t) {
        return new (t || MaxDateValidator)();
      };

      MaxDateValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MaxDateValidator,
        selectors: [["", "maxDate", "", "formControlName", ""], ["", "maxDate", "", "formControl", ""], ["", "maxDate", "", "ngModel", ""]],
        inputs: {
          maxDate: "maxDate"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAX_DATE_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MaxDateValidator.prototype, "maxDate", void 0);
      var MIN_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return MinValidator;
        }),
        multi: true
      };

      var MinValidator = /*#__PURE__*/function () {
        function MinValidator() {
          _classCallCheck(this, MinValidator);
        }

        _createClass(MinValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = min(this.min);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            for (var key in changes) {
              if (key === 'min') {
                this.validator = min(changes[key].currentValue);

                if (this.onChange) {
                  this.onChange();
                }
              }
            }
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onChange = fn;
          }
        }]);

        return MinValidator;
      }();

      MinValidator.ɵfac = function MinValidator_Factory(t) {
        return new (t || MinValidator)();
      };

      MinValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MinValidator,
        selectors: [["", "min", "", "formControlName", ""], ["", "min", "", "formControl", ""], ["", "min", "", "ngModel", ""]],
        inputs: {
          min: "min"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MIN_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)], MinValidator.prototype, "min", void 0);
      var MIN_DATE_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return MinDateValidator;
        }),
        multi: true
      };

      var MinDateValidator = /*#__PURE__*/function () {
        function MinDateValidator() {
          _classCallCheck(this, MinDateValidator);
        }

        _createClass(MinDateValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = minDate(this.minDate);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            for (var key in changes) {
              if (key === 'minDate') {
                this.validator = minDate(changes[key].currentValue);

                if (this.onChange) {
                  this.onChange();
                }
              }
            }
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onChange = fn;
          }
        }]);

        return MinDateValidator;
      }();

      MinDateValidator.ɵfac = function MinDateValidator_Factory(t) {
        return new (t || MinDateValidator)();
      };

      MinDateValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: MinDateValidator,
        selectors: [["", "minDate", "", "formControlName", ""], ["", "minDate", "", "formControl", ""], ["", "minDate", "", "ngModel", ""]],
        inputs: {
          minDate: "minDate"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MIN_DATE_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], MinDateValidator.prototype, "minDate", void 0);
      var NOT_EQUAL_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return NotEqualValidator;
        }),
        multi: true
      };

      var NotEqualValidator = /*#__PURE__*/function () {
        function NotEqualValidator() {
          _classCallCheck(this, NotEqualValidator);
        }

        _createClass(NotEqualValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = notEqual(this.notEqual);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            for (var key in changes) {
              if (key === 'notEqual') {
                this.validator = notEqual(changes[key].currentValue);

                if (this.onChange) {
                  this.onChange();
                }
              }
            }
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onChange = fn;
          }
        }]);

        return NotEqualValidator;
      }();

      NotEqualValidator.ɵfac = function NotEqualValidator_Factory(t) {
        return new (t || NotEqualValidator)();
      };

      NotEqualValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: NotEqualValidator,
        selectors: [["", "notEqual", "", "formControlName", ""], ["", "notEqual", "", "formControl", ""], ["", "notEqual", "", "ngModel", ""]],
        inputs: {
          notEqual: "notEqual"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([NOT_EQUAL_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], NotEqualValidator.prototype, "notEqual", void 0);
      var NOT_EQUAL_TO_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return NotEqualToValidator;
        }),
        multi: true
      };

      var NotEqualToValidator = /*#__PURE__*/function () {
        function NotEqualToValidator() {
          _classCallCheck(this, NotEqualToValidator);
        }

        _createClass(NotEqualToValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = notEqualTo(this.notEqualTo);
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }]);

        return NotEqualToValidator;
      }();

      NotEqualToValidator.ɵfac = function NotEqualToValidator_Factory(t) {
        return new (t || NotEqualToValidator)();
      };

      NotEqualToValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: NotEqualToValidator,
        selectors: [["", "notEqualTo", "", "formControlName", ""], ["", "notEqualTo", "", "formControl", ""], ["", "notEqualTo", "", "ngModel", ""]],
        inputs: {
          notEqualTo: "notEqualTo"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([NOT_EQUAL_TO_VALIDATOR])]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"])], NotEqualToValidator.prototype, "notEqualTo", void 0);
      var NUMBER_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return NumberValidator;
        }),
        multi: true
      };

      var NumberValidator = /*#__PURE__*/function () {
        function NumberValidator() {
          _classCallCheck(this, NumberValidator);
        }

        _createClass(NumberValidator, [{
          key: "validate",
          value: function validate(c) {
            return number(c);
          }
        }]);

        return NumberValidator;
      }();

      NumberValidator.ɵfac = function NumberValidator_Factory(t) {
        return new (t || NumberValidator)();
      };

      NumberValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: NumberValidator,
        selectors: [["", "number", "", "formControlName", ""], ["", "number", "", "formControl", ""], ["", "number", "", "ngModel", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([NUMBER_VALIDATOR])]
      });
      var PROPERTY_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return PropertyValidator;
        }),
        multi: true
      };

      var PropertyValidator = /*#__PURE__*/function () {
        function PropertyValidator() {
          _classCallCheck(this, PropertyValidator);
        }

        _createClass(PropertyValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = property(this.property);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            for (var key in changes) {
              if (key === 'property') {
                this.validator = property(changes[key].currentValue);

                if (this.onChange) {
                  this.onChange();
                }
              }
            }
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onChange = fn;
          }
        }]);

        return PropertyValidator;
      }();

      PropertyValidator.ɵfac = function PropertyValidator_Factory(t) {
        return new (t || PropertyValidator)();
      };

      PropertyValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: PropertyValidator,
        selectors: [["", "property", "", "formControlName", ""], ["", "property", "", "formControl", ""], ["", "property", "", "ngModel", ""]],
        inputs: {
          property: "property"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([PROPERTY_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], PropertyValidator.prototype, "property", void 0);
      var RANGE_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return RangeValidator;
        }),
        multi: true
      };

      var RangeValidator = /*#__PURE__*/function () {
        function RangeValidator() {
          _classCallCheck(this, RangeValidator);
        }

        _createClass(RangeValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = range(this.range);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            for (var key in changes) {
              if (key === 'range') {
                this.validator = range(changes[key].currentValue);

                if (this.onChange) {
                  this.onChange();
                }
              }
            }
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onChange = fn;
          }
        }]);

        return RangeValidator;
      }();

      RangeValidator.ɵfac = function RangeValidator_Factory(t) {
        return new (t || RangeValidator)();
      };

      RangeValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: RangeValidator,
        selectors: [["", "range", "", "formControlName", ""], ["", "range", "", "formControl", ""], ["", "range", "", "ngModel", ""]],
        inputs: {
          range: "range"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([RANGE_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], RangeValidator.prototype, "range", void 0);
      var RANGE_LENGTH_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return RangeLengthValidator;
        }),
        multi: true
      };

      var RangeLengthValidator = /*#__PURE__*/function () {
        function RangeLengthValidator() {
          _classCallCheck(this, RangeLengthValidator);
        }

        _createClass(RangeLengthValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = rangeLength(this.rangeLength);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            for (var key in changes) {
              if (key === 'rangeLength') {
                this.validator = rangeLength(changes[key].currentValue);

                if (this.onChange) {
                  this.onChange();
                }
              }
            }
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onChange = fn;
          }
        }]);

        return RangeLengthValidator;
      }();

      RangeLengthValidator.ɵfac = function RangeLengthValidator_Factory(t) {
        return new (t || RangeLengthValidator)();
      };

      RangeLengthValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: RangeLengthValidator,
        selectors: [["", "rangeLength", "", "formControlName", ""], ["", "rangeLength", "", "formControl", ""], ["", "rangeLength", "", "ngModel", ""]],
        inputs: {
          rangeLength: "rangeLength"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([RANGE_LENGTH_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)], RangeLengthValidator.prototype, "rangeLength", void 0);
      var URL_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return UrlValidator;
        }),
        multi: true
      };

      var UrlValidator = /*#__PURE__*/function () {
        function UrlValidator() {
          _classCallCheck(this, UrlValidator);
        }

        _createClass(UrlValidator, [{
          key: "validate",
          value: function validate(c) {
            return url(c);
          }
        }]);

        return UrlValidator;
      }();

      UrlValidator.ɵfac = function UrlValidator_Factory(t) {
        return new (t || UrlValidator)();
      };

      UrlValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: UrlValidator,
        selectors: [["", "url", "", "formControlName", ""], ["", "url", "", "formControl", ""], ["", "url", "", "ngModel", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([URL_VALIDATOR])]
      });
      var UUID_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return UUIDValidator;
        }),
        multi: true
      };

      var UUIDValidator = /*#__PURE__*/function () {
        function UUIDValidator() {
          _classCallCheck(this, UUIDValidator);
        }

        _createClass(UUIDValidator, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.validator = uuid(this.uuid);
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            for (var key in changes) {
              if (key === 'uuid') {
                this.validator = uuid(changes[key].currentValue);

                if (this.onChange) {
                  this.onChange();
                }
              }
            }
          }
        }, {
          key: "validate",
          value: function validate(c) {
            return this.validator(c);
          }
        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this.onChange = fn;
          }
        }]);

        return UUIDValidator;
      }();

      UUIDValidator.ɵfac = function UUIDValidator_Factory(t) {
        return new (t || UUIDValidator)();
      };

      UUIDValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
        type: UUIDValidator,
        selectors: [["", "uuid", "", "formControlName", ""], ["", "uuid", "", "formControl", ""], ["", "uuid", "", "ngModel", ""]],
        inputs: {
          uuid: "uuid"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([UUID_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
      });
      Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], UUIDValidator.prototype, "uuid", void 0);
      var CustomValidators = {
        arrayLength: arrayLength,
        base64: base64,
        creditCard: creditCard,
        date: date,
        dateISO: dateISO,
        digits: digits,
        email: email,
        equal: equal,
        equalTo: equalTo,
        gt: gt,
        gte: gte,
        json: json,
        lt: lt,
        lte: lte,
        max: max,
        maxDate: maxDate,
        min: min,
        minDate: minDate,
        notEqual: notEqual,
        notEqualTo: notEqualTo,
        number: number,
        property: property,
        range: range,
        rangeLength: rangeLength,
        url: url,
        uuid: uuid
      };
      var CustomDirectives = [ArrayLengthValidator, Base64Validator, CreditCardValidator, DateValidator, DateISOValidator, DigitsValidator, EmailValidator, EqualValidator, EqualToValidator, GreaterThanValidator, GreaterThanEqualValidator, JSONValidator, LessThanValidator, LessThanEqualValidator, MaxValidator, MaxDateValidator, MinValidator, MinDateValidator, NotEqualValidator, NotEqualToValidator, NumberValidator, PropertyValidator, RangeValidator, RangeLengthValidator, UrlValidator, UUIDValidator];

      var CustomFormsModule = function CustomFormsModule() {
        _classCallCheck(this, CustomFormsModule);
      };

      CustomFormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: CustomFormsModule
      });
      CustomFormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function CustomFormsModule_Factory(t) {
          return new (t || CustomFormsModule)();
        }
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ArrayLengthValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[arrayLength][formControlName],[arrayLength][formControl],[arrayLength][ngModel]',
            providers: [ARRAY_LENGTH_VALIDATOR]
          }]
        }], null, {
          arrayLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Base64Validator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[base64][formControlName],[base64][formControl],[base64][ngModel]',
            providers: [BASE64_VALIDATOR]
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreditCardValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]',
            providers: [CREDIT_CARD_VALIDATOR]
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DateValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[date][formControlName],[date][formControl],[date][ngModel]',
            providers: [DATE_VALIDATOR]
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DateISOValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[dateISO][formControlName],[dateISO][formControl],[dateISO][ngModel]',
            providers: [DATE_ISO_VALIDATOR]
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DigitsValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[digits][formControlName],[digits][formControl],[digits][ngModel]',
            providers: [DIGITS_VALIDATOR]
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EmailValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[ngvemail][formControlName],[ngvemail][formControl],[ngvemail][ngModel]',
            providers: [EMAIL_VALIDATOR]
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EqualValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[equal][formControlName],[equal][formControl],[equal][ngModel]',
            providers: [EQUAL_VALIDATOR]
          }]
        }], null, {
          equal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EqualToValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[equalTo][formControlName],[equalTo][formControl],[equalTo][ngModel]',
            providers: [EQUAL_TO_VALIDATOR]
          }]
        }], null, {
          equalTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GreaterThanValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[gt][formControlName],[gt][formControl],[gt][ngModel]',
            providers: [GREATER_THAN_VALIDATOR]
          }]
        }], null, {
          gt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GreaterThanEqualValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[gte][formControlName],[gte][formControl],[gte][ngModel]',
            providers: [GREATER_THAN_EQUAL_VALIDATOR]
          }]
        }], null, {
          gte: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JSONValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[json][formControlName],[json][formControl],[json][ngModel]',
            providers: [JSON_VALIDATOR]
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LessThanValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[lt][formControlName],[lt][formControl],[lt][ngModel]',
            providers: [LESS_THAN_VALIDATOR]
          }]
        }], null, {
          lt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LessThanEqualValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[lte][formControlName],[lte][formControl],[lte][ngModel]',
            providers: [LESS_THAN_EQUAL_VALIDATOR]
          }]
        }], null, {
          lte: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaxValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[max][formControlName],[max][formControl],[max][ngModel]',
            providers: [MAX_VALIDATOR]
          }]
        }], null, {
          max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaxDateValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[maxDate][formControlName],[maxDate][formControl],[maxDate][ngModel]',
            providers: [MAX_DATE_VALIDATOR]
          }]
        }], null, {
          maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MinValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[min][formControlName],[min][formControl],[min][ngModel]',
            providers: [MIN_VALIDATOR]
          }]
        }], null, {
          min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MinDateValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[minDate][formControlName],[minDate][formControl],[minDate][ngModel]',
            providers: [MIN_DATE_VALIDATOR]
          }]
        }], null, {
          minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NotEqualValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[notEqual][formControlName],[notEqual][formControl],[notEqual][ngModel]',
            providers: [NOT_EQUAL_VALIDATOR]
          }]
        }], null, {
          notEqual: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NotEqualToValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[notEqualTo][formControlName],[notEqualTo][formControl],[notEqualTo][ngModel]',
            providers: [NOT_EQUAL_TO_VALIDATOR]
          }]
        }], null, {
          notEqualTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NumberValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[number][formControlName],[number][formControl],[number][ngModel]',
            providers: [NUMBER_VALIDATOR]
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PropertyValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[property][formControlName],[property][formControl],[property][ngModel]',
            providers: [PROPERTY_VALIDATOR]
          }]
        }], null, {
          property: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RangeValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[range][formControlName],[range][formControl],[range][ngModel]',
            providers: [RANGE_VALIDATOR]
          }]
        }], null, {
          range: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RangeLengthValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[rangeLength][formControlName],[rangeLength][formControl],[rangeLength][ngModel]',
            providers: [RANGE_LENGTH_VALIDATOR]
          }]
        }], null, {
          rangeLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UrlValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[url][formControlName],[url][formControl],[url][ngModel]',
            providers: [URL_VALIDATOR]
          }]
        }], null, null);
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UUIDValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
          args: [{
            selector: '[uuid][formControlName],[uuid][formControl],[uuid][ngModel]',
            providers: [UUID_VALIDATOR]
          }]
        }], null, {
          uuid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }]
        });
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CustomFormsModule, {
          declarations: [ArrayLengthValidator, Base64Validator, CreditCardValidator, DateValidator, DateISOValidator, DigitsValidator, EmailValidator, EqualValidator, EqualToValidator, GreaterThanValidator, GreaterThanEqualValidator, JSONValidator, LessThanValidator, LessThanEqualValidator, MaxValidator, MaxDateValidator, MinValidator, MinDateValidator, NotEqualValidator, NotEqualToValidator, NumberValidator, PropertyValidator, RangeValidator, RangeLengthValidator, UrlValidator, UUIDValidator],
          exports: [ArrayLengthValidator, Base64Validator, CreditCardValidator, DateValidator, DateISOValidator, DigitsValidator, EmailValidator, EqualValidator, EqualToValidator, GreaterThanValidator, GreaterThanEqualValidator, JSONValidator, LessThanValidator, LessThanEqualValidator, MaxValidator, MaxDateValidator, MinValidator, MinDateValidator, NotEqualValidator, NotEqualToValidator, NumberValidator, PropertyValidator, RangeValidator, RangeLengthValidator, UrlValidator, UUIDValidator]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomFormsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [CustomDirectives],
            exports: [CustomDirectives]
          }]
        }], null, null);
      })();
      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=ngx-custom-validators.js.map

      /***/

    }
  }]);
})();
//# sourceMappingURL=views-sessions-sessions-module-es5.js.map