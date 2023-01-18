(function () {
  function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

  function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

  function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-card-account-card-account-module~views-others-others-module~views-others-video-verific~e3216432"], {
    /***/
    "+DZj":
    /*!*************************************************************************************************!*\
      !*** ./src/app/views/others/fingerprint-authentication/fingerprint-authentication.component.ts ***!
      \*************************************************************************************************/

    /*! exports provided: FingerprintAuthenticationComponent, OtpModel, OtpModel1 */

    /***/
    function DZj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FingerprintAuthenticationComponent", function () {
        return FingerprintAuthenticationComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpModel", function () {
        return OtpModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpModel1", function () {
        return OtpModel1;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _kyc_basic_information_kyc_basic_information_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../kyc-basic-information/kyc-basic-information.component */
      "dyf6");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT"); // import { FormBuilder, FormGroup } from '@angular/forms';
      // import { ApiService } from 'app/api.service';


      function FingerprintAuthenticationComponent_form_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Please enter the OTP to verify");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-card", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Not Recieved?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FingerprintAuthenticationComponent_form_3_Template_span_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.getOtp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Resend");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FingerprintAuthenticationComponent_form_3_Template_button_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.verify(ctx_r4.basicInformationForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Proceed");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.basicInformationForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.errormsg);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.number);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r0.basicInformationForm.valid);
        }
      }

      function FingerprintAuthenticationComponent_mat_card_6_tr_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Address: ", ctx_r5.address, "");
        }
      }

      function FingerprintAuthenticationComponent_mat_card_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, FingerprintAuthenticationComponent_mat_card_6_tr_11_Template, 3, 1, "tr", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Name:", ctx_r1.name, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Id Number:", ctx_r1.id, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Dob: ", ctx_r1.dob, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.address);
        }
      }

      var FingerprintAuthenticationComponent = /*#__PURE__*/function () {
        function FingerprintAuthenticationComponent(dialogRef, snack, api, fb, data) {
          _classCallCheck(this, FingerprintAuthenticationComponent);

          this.dialogRef = dialogRef;
          this.snack = snack;
          this.api = api;
          this.fb = fb;
          this.data = data;
          this.update = new _kyc_basic_information_kyc_basic_information_component__WEBPACK_IMPORTED_MODULE_3__["OtpModelUpdate"]();
          this.otpmodel = new OtpModel1();
          this.number = data.number;
          this.type = data.type;
          this.dob = data.dob, this.id = data.id, this.name = data.name, this.address = data.address;
        }

        _createClass(FingerprintAuthenticationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.type !== "OCR function") {
              this.errormsg = "An OTP has been sent to your " + this.type;
              this.basicInformationForm = this.fb.group({
                otp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
              });
            }
          }
        }, {
          key: "buttonClick",
          value: function buttonClick() {}
        }, {
          key: "closeClick",
          value: function closeClick() {
            console.log("reached here"); // [routerLink]="['/others/kyc']"

            this.dialogRef.close(); // this.router.navigateByUrl('/others/kyc');
          }
        }, {
          key: "verify",
          value: function verify(form) {
            var _this = this;

            if (this.type == "email id") {
              this.update.sourceKey = "email";
            }

            if (this.type == "Mobile Number") {
              this.update.sourceKey = "mobile";
            }

            this.update.sourceValue = this.number, this.update.otp = form.otp, this.update.type = "";
            this.api.getOtpValidating(this.update).subscribe(function (resp) {
              console.log("response from backend", resp);

              if (resp) {
                if (resp && _this.type == "Mobile Number") {
                  _this.closeClick();

                  _this.api.setVerify({
                    verify: 'verified',
                    type: _this.update.sourceKey
                  });
                } else if (resp && _this.type == "email id") {
                  _this.closeClick();

                  _this.api.setVerify1({
                    verify: 'verified',
                    type: _this.update.sourceKey
                  });
                }
              }
            }, function (error) {
              console.log('error : ', error.responseMessage, error);

              if (error.error) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                  icon: 'error',
                  text: "Error message : " + error.error,
                  width: 500,
                  confirmButtonText: "OK",
                  confirmButtonColor: '#456EFE'
                }); // return false;
              }

              if (error && _this.type == "Mobile Number") {
                _this.closeClick();

                _this.api.setVerify({
                  verify: 'verify',
                  type: _this.update.sourceKey
                });
              } else {
                console.log("in else eerrrr email");

                _this.api.setVerify1({
                  verify: 'verify',
                  type: _this.update.sourceKey
                });

                _this.errormsg = "Error in OTP";
              }

              _this.closeClick();
            });
          }
        }, {
          key: "getOtp",
          value: function getOtp() {
            var _this2 = this;

            if (this.type == "email id") {
              this.otpmodel.source_key = "email";
              this.otpmodel.source = 'customer';
              this.otpmodel.source_value = this.number;
            }

            if (this.type == "Mobile Number") {
              this.otpmodel.source_key = "mobile";
              this.otpmodel.source = 'customer';
              this.otpmodel.source_value = this.number;
            }

            this.api.getOtp(this.otpmodel).subscribe(function (resp) {
              console.log(resp);

              if (resp !== null) {
                _this2.snack.open('OTP has been sent again', 'OK', {
                  duration: 4000,
                  verticalPosition: 'top',
                  horizontalPosition: 'right'
                });
              }
            });
          }
        }]);

        return FingerprintAuthenticationComponent;
      }();

      FingerprintAuthenticationComponent.ɵfac = function FingerprintAuthenticationComponent_Factory(t) {
        return new (t || FingerprintAuthenticationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      FingerprintAuthenticationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FingerprintAuthenticationComponent,
        selectors: [["app-fingerprint-authentication"]],
        decls: 7,
        vars: 2,
        consts: [["mat-button", "", "id", "close", "mat-dialog-close", "", 3, "click"], [1, "closeicon"], [3, "formGroup", 4, "ngIf"], ["fxLayout", "row", 1, "ocrDiv"], ["id", "box", 1, "pd-2"], ["class", "pd-2", 4, "ngIf"], [3, "formGroup"], ["fxLayout", "row"], [1, "verification"], [1, "phoneNumber"], [1, "verify"], [1, "flex-grow-1"], ["type", "input", 1, "inputMatcard"], ["matInput", "", "id", "otp", "type", "number", "maxlength", "6", "oninput", "this.value = this.value.slice(0, this.maxLength);", "formControlName", "otp", 1, "alignment"], [1, "verify1"], ["id", "resend", 3, "click"], ["mat-stroked-button", "", 1, "button", 3, "disabled", "click"], [1, "pd-2"], [4, "ngIf"]],
        template: function FingerprintAuthenticationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FingerprintAuthenticationComponent_Template_button_click_0_listener() {
              return ctx.closeClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, FingerprintAuthenticationComponent_form_3_Template, 18, 4, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FingerprintAuthenticationComponent_mat_card_6_Template, 12, 4, "mat-card", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type != "OCR function");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.type == "OCR function");
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCard"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
        styles: [".phoneNumber[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  margin-bottom: 20px;\n  color: black;\n  font-size: smaller;\n  font-weight: bolder;\n}\n\n.verification[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  margin-top: 8%;\n  margin-left: 5%;\n  margin-right: 5%;\n  margin-bottom: 3%;\n  font-size: 22px;\n}\n\n.verify[_ngcontent-%COMP%] {\n  display: block;\n  color: grey;\n  font-size: 14px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.verify1[_ngcontent-%COMP%] {\n  display: block;\n  color: grey;\n  font-size: 10px;\n  text-align: center;\n  margin-top: 5px;\n  cursor: pointer;\n}\n\n.flex-grow-1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.ocrDiv[_ngcontent-%COMP%] {\n  width: 500px;\n}\n\n.ocrDetailsSpan[_ngcontent-%COMP%] {\n  margin-left: 40%;\n  font-size: 20px;\n}\n\n.inputClass[_ngcontent-%COMP%] {\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n  box-shadow: 0 3pt 6pt #00000029;\n  font-weight: bolder;\n}\n\nmatCard[_ngcontent-%COMP%] {\n  max-width: 500px;\n  align-items: center;\n  justify-content: center;\n  padding: 5px;\n}\n\ninput[_ngcontent-%COMP%] {\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n  font-weight: bolder;\n}\n\n.inputMatcard[_ngcontent-%COMP%] {\n  padding: 12px;\n  max-width: 40%;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  margin: auto;\n  margin-top: 20px;\n}\n\n.button[_ngcontent-%COMP%] {\n  width: 170px;\n  display: block;\n  border-radius: 45px;\n  margin: auto;\n  margin-top: 25px;\n  margin-bottom: 4%;\n  color: white;\n  background-color: #456EFE;\n}\n\n.cdk-overlay-pane.my-dialog[_ngcontent-%COMP%] {\n  position: relative !important;\n}\n\n.close.mat-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 5px;\n  line-height: 14px;\n  min-width: auto;\n}\n\n.closeicon[_ngcontent-%COMP%] {\n  line-height: 0px;\n  width: 18px;\n  \n  \n  \n  \n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n#close[_ngcontent-%COMP%] {\n  float: right;\n}\n\n#box[_ngcontent-%COMP%] {\n  width: 600px;\n}\n\n#resend[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  color: black;\n}\n\n#proceed[_ngcontent-%COMP%] {\n  width: 170px;\n  background-color: #456EFE;\n  color: white;\n  margin-top: 25px;\n  margin-bottom: 4%;\n}\n\n#otp[_ngcontent-%COMP%] {\n  outline: none;\n  text-align: center;\n  letter-spacing: 10px;\n}\n\ninput[type=\"number\"][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=\"number\"][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZmluZ2VycHJpbnQtYXV0aGVudGljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2Qsa0JBQWtCO0VBRWpCLG1CQUFtQjtFQUNwQixZQUFZO0VBQ1osa0JBQWtCO0VBQ25CLG1CQUFtQjtBQUF0Qjs7QUFFQztFQUNHLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWM7QUFDbEI7O0FBR0E7RUFDSSxjQUFjO0VBQ2QsV0FBVTtFQUVWLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtBQURuQjs7QUFJQTtFQUNJLGNBQWM7RUFDZCxXQUFVO0VBQ1YsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFjO0VBQ2QsZUFBZTtBQURuQjs7QUFHQTtFQUNJLFlBQVk7QUFBaEI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtBQUVqQjs7QUFBQTtFQUVJLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQiwrQkFBK0I7RUFDL0IsbUJBQW1CO0FBRXZCOztBQUNBO0VBQ0ksZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsWUFBVztBQUVmOztBQUVBO0VBRUksd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsMkJBQTJCO0VBRTNCLG1CQUFtQjtBQUR2Qjs7QUFHQTtFQUNJLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtBQUFwQjs7QUFFQTtFQUNJLFlBQVc7RUFDWCxjQUFjO0VBQ2QsbUJBQW1CO0VBQ3BCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFFYix5QkFBd0I7QUFBMUI7O0FBRUE7RUFDSSw2QkFBNEI7QUFDaEM7O0FBQ0U7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7QUFFbkI7O0FBQUU7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0FBR1o7O0FBREU7RUFDRSxZQUFZO0FBSWhCOztBQUZFO0VBQ0YsWUFDRTtBQUlGOztBQUhFO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQ0Y7QUFLRjs7QUFKRTtFQUNFLFlBQVc7RUFDWCx5QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFPckI7O0FBTEU7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQVF4Qjs7QUFMRTs7RUFFRSx3QkFBdUI7RUFDdkIsU0FBUTtBQVFaIiwiZmlsZSI6ImZpbmdlcnByaW50LWF1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBob25lTnVtYmVye1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4gLnZlcmlmaWNhdGlvbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogOCU7XHJcbiAgICBtYXJnaW4tbGVmdDo1JTtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICAgIGZvbnQtc2l6ZToyMnB4O1xyXG59XHJcblxyXG5cclxuLnZlcmlmeXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6Z3JleTtcclxuICAgIC8vIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgXHJcbn1cclxuLnZlcmlmeTF7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOmdyZXk7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOjVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZmxleC1ncm93LTF7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuLm9jckRpdntcclxuICB3aWR0aDogNTAwcHg7XHJcbn1cclxuLm9jckRldGFpbHNTcGFue1xyXG4gIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcbi5pbnB1dENsYXNze1xyXG4gLy8gICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcclxuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XHJcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBoaWRkZW47XHJcbiAgICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBcclxufVxyXG5tYXRDYXJke1xyXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6NXB4O1xyXG4gIC8vICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcblxyXG59XHJcbmlucHV0e1xyXG4gICAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxyZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogaGlkZGVuO1xyXG4gICAgLy8gYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuLmlucHV0TWF0Y2FyZHtcclxuICAgIHBhZGRpbmc6IDEycHg7XHJcbiAgICBtYXgtd2lkdGg6IDQwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcbi5idXR0b257XHJcbiAgICB3aWR0aDoxNzBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNDVweDtcclxuICAgbWFyZ2luOiBhdXRvO1xyXG4gICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICAgY29sb3I6IHdoaXRlO1xyXG4gIC8vICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IzQ1NkVGRTtcclxufVxyXG4uY2RrLW92ZXJsYXktcGFuZS5teS1kaWFsb2cge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlIWltcG9ydGFudDtcclxuICB9XHJcbiAgLmNsb3NlLm1hdC1idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMTRweDtcclxuICAgIG1pbi13aWR0aDogYXV0bztcclxuICB9XHJcbiAgLmNsb3NlaWNvbntcclxuICAgIGxpbmUtaGVpZ2h0OiAwcHg7XHJcbiAgICB3aWR0aDogMThweDtcclxuICAgIC8qIGZvbnQtc2l6ZTogOHB0OyAqL1xyXG4gICAgLyogZm9udC1mYW1pbHk6IHRhaG9tYTsgKi9cclxuICAgIC8qIG1hcmdpbi10b3A6IDFweDsgKi9cclxuICAgIC8qIG1hcmdpbi1yaWdodDogMnB4OyAqL1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gICNjbG9zZXtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICB9XHJcbiAgI2JveHtcclxud2lkdGg6IDYwMHB4XHJcbiAgfVxyXG4gICNyZXNlbmR7XHJcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gICAgY29sb3I6YmxhY2tcclxuICB9XHJcbiAgI3Byb2NlZWR7XHJcbiAgICB3aWR0aDoxNzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IzQ1NkVGRTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICB9XHJcbiAgI290cHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMTBweDtcclxuICB9XHJcblxyXG4gIGlucHV0W3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXHJcbiAgaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1vdXRlci1zcGluLWJ1dHRvbntcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTpub25lO1xyXG4gICAgbWFyZ2luOjA7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FingerprintAuthenticationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-fingerprint-authentication',
            templateUrl: './fingerprint-authentication.component.html',
            styleUrls: ['./fingerprint-authentication.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();

      var OtpModel = function OtpModel() {
        _classCallCheck(this, OtpModel);
      };

      var OtpModel1 = function OtpModel1() {
        _classCallCheck(this, OtpModel1);
      };
      /***/

    },

    /***/
    "/Hjt":
    /*!******************************************************!*\
      !*** ./node_modules/tesseract.js/src/utils/getId.js ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function Hjt(module, exports) {
      module.exports = function (prefix, cnt) {
        return "".concat(prefix, "-").concat(cnt, "-").concat(Math.random().toString(16).slice(3, 8));
      };
      /***/

    },

    /***/
    "3ms1":
    /*!*****************************************************************************!*\
      !*** ./src/app/views/others/kyc-verification/kyc-verification.component.ts ***!
      \*****************************************************************************/

    /*! exports provided: KycVerificationComponent, DocData, Upload */

    /***/
    function ms1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KycVerificationComponent", function () {
        return KycVerificationComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DocData", function () {
        return DocData;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Upload", function () {
        return Upload;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var tesseract_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tesseract.js */
      "yb/K");
      /* harmony import */


      var tesseract_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tesseract_js__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var _fingerprint_authentication_fingerprint_authentication_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../fingerprint-authentication/fingerprint-authentication.component */
      "+DZj");
      /* harmony import */


      var _kyc_basic_information_kyc_basic_information_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../kyc-basic-information/kyc-basic-information.component */
      "dyf6");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var app_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! app/shared/services/finger-print-capture.service */
      "rp8y");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/platform-browser */
      "cUpR");
      /* harmony import */


      var app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! app/shared/services/data.service */
      "iiaH");
      /* harmony import */


      var app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! app/shared/services/app-loader/app-loader.service */
      "3sEA");
      /* harmony import */


      var app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! app/shared/services/dialogs/dialog.service */
      "laYw");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! sweetalert2 */
      "PSD3");
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_17__);
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var app_shared_services_application_entry_stage_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! app/shared/services/application-entry-stage.service */
      "qMRc");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "ura0");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/autocomplete */
      "vrAh");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "TN/R");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! @angular/material/radio */
      "zQhy");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");
      /* harmony import */


      var _shared_directives_only_number_directive__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ../../../shared/directives/only-number.directive */
      "2Goh");
      /* harmony import */


      var _angular_material_list__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! @angular/material/list */
      "SqCe");
      /* harmony import */


      var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! @angular/material/progress-spinner */
      "pu8Q");

      var __awaiter = undefined && undefined.__awaiter || function (thisArg, _arguments, P, generator) {
        function adopt(value) {
          return value instanceof P ? value : new P(function (resolve) {
            resolve(value);
          });
        }

        return new (P || (P = Promise))(function (resolve, reject) {
          function fulfilled(value) {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          }

          function rejected(value) {
            try {
              step(generator["throw"](value));
            } catch (e) {
              reject(e);
            }
          }

          function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
          }

          step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
      };

      var _c0 = ["profileFile"];

      var _c1 = function _c1(a0) {
        return {
          "background-color": a0
        };
      };

      function KycVerificationComponent_mat_card_content_1_mat_button_toggle_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-button-toggle", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycVerificationComponent_mat_card_content_1_mat_button_toggle_6_Template_mat_button_toggle_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r10.radioEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r8 = ctx.$implicit;

          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", option_r8.checked)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c1, ctx_r5.radioFlag === option_r8.name ? "#C0C0C0" : ""))("value", option_r8.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", option_r8.name, " ");
        }
      }

      function KycVerificationComponent_mat_card_content_1_div_17_div_7_a_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycVerificationComponent_mat_card_content_1_div_17_div_7_a_2_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

            return ctx_r14.manualUpload();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Fetch");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_mat_card_content_1_div_17_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, KycVerificationComponent_mat_card_content_1_div_17_div_7_a_2_Template, 2, 0, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " \xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r12.radioFlag == "Auto");
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "errbd": a0
        };
      };

      function KycVerificationComponent_mat_card_content_1_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Document Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-card", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, KycVerificationComponent_mat_card_content_1_div_17_div_7_Template, 4, 1, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c2, !ctx_r6.kycVerificationForm.get("documentName").valid && ctx_r6.kycVerificationForm.get("documentName").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.radioFlag == "Auto");
        }
      }

      function KycVerificationComponent_mat_card_content_1_div_18_mat_icon_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "check_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_mat_card_content_1_div_18_mat_icon_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "check_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_mat_card_content_1_div_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycVerificationComponent_mat_card_content_1_div_18_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

            var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

            return _r16.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 36, 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function KycVerificationComponent_mat_card_content_1_div_18_Template_input_change_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

            var i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r22.onUpload1($event, ctx_r22.kycVerificationForm1.value, i_r4, "frontSide");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Front Side");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, KycVerificationComponent_mat_card_content_1_div_18_mat_icon_8_Template, 2, 0, "mat-icon", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycVerificationComponent_mat_card_content_1_div_18_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

            var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);

            return _r18.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 40, 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function KycVerificationComponent_mat_card_content_1_div_18_Template_input_change_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r21);

            var i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r25.onUpload1($event, ctx_r25.kycVerificationForm1.value, i_r4, "backSide");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Back Side");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, KycVerificationComponent_mat_card_content_1_div_18_mat_icon_16_Template, 2, 0, "mat-icon", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r7.disableButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.resultFrontSide);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.frontSideUploaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r7.disableButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r7.resultBackSide);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.backSideUploaded);
        }
      }

      function KycVerificationComponent_mat_card_content_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card-content", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-button-toggle-group", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, KycVerificationComponent_mat_card_content_1_mat_button_toggle_6_Template, 2, 6, "mat-button-toggle", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Document Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-card", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-select", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function KycVerificationComponent_mat_card_content_1_Template_mat_select_valueChange_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r27.changeValue2($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Aadhar card");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, KycVerificationComponent_mat_card_content_1_div_17_Template, 8, 4, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, KycVerificationComponent_mat_card_content_1_div_18_Template, 17, 6, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r4 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.array1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c2, !ctx_r0.kycVerificationForm.get("documentName").valid && ctx_r0.kycVerificationForm.get("documentName").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.radioFlag == "Auto");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.radioFlag == "Manual");
        }
      }

      function KycVerificationComponent_form_4_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/images/no-image.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function KycVerificationComponent_form_4_ng_template_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 118);
        }

        if (rf & 2) {
          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r32.imageURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function KycVerificationComponent_form_4_mat_option_31_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "slice");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](4, 4, option_r71 == null ? null : option_r71.firstName, 0, 1)), "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 8, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind3"](6, 10, option_r71 == null ? null : option_r71.lastName, 0, 1)), " ");
        }
      }

      function KycVerificationComponent_form_4_mat_option_31_div_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 129);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", option_r71 == null ? null : option_r71.profileImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function KycVerificationComponent_form_4_mat_option_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, KycVerificationComponent_form_4_mat_option_31_div_3_Template, 7, 14, "div", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, KycVerificationComponent_form_4_mat_option_31_div_4_Template, 2, 1, "div", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "h5", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](10, "uppercase");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "h6", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r71 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r71.customerId);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (option_r71 == null ? null : option_r71.profileImage) == "not_available");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", (option_r71 == null ? null : option_r71.profileImage) != "not_available");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 7, option_r71 == null ? null : option_r71.firstName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 9, option_r71 == null ? null : option_r71.middleName), " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](10, 11, option_r71 == null ? null : option_r71.lastName), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("#", option_r71 == null ? null : option_r71.cifNumber, "");
        }
      }

      function KycVerificationComponent_form_4_p_33_Template(rf, ctx) {
        if (rf & 1) {
          var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycVerificationComponent_form_4_p_33_Template_p_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r77);

            var ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r76.autofillDetails();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Fetch");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_spinner_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "mat-spinner", 131);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("diameter", 40);
        }
      }

      function KycVerificationComponent_form_4_mat_option_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r78 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", i_r78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r78);
        }
      }

      function KycVerificationComponent_form_4_mat_error_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Prefix");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_error_54_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Enter First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_error_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Enter Last Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_error_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Date Of Birth ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_option_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var status_r79 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", status_r79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", status_r79, " ");
        }
      }

      function KycVerificationComponent_form_4_mat_error_85_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Marital Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_option_93_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var gender_r80 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", gender_r80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](gender_r80);
        }
      }

      function KycVerificationComponent_form_4_mat_error_94_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Gender ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_error_95_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \xA0 Prefix and Gender does not match! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_option_104_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var nation_r81 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", nation_r81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](nation_r81);
        }
      }

      function KycVerificationComponent_form_4_mat_error_105_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Nationality ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_hint_111_Template(rf, ctx) {
        if (rf & 1) {
          var _r83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycVerificationComponent_form_4_mat_hint_111_Template_mat_hint_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r83);

            var ctx_r82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r82.getOtp(ctx_r82.kycVerificationForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r50.emailVerify);
        }
      }

      function KycVerificationComponent_form_4_mat_error_112_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Enter Primary Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_error_113_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Enter valid email address! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_hint_119_Template(rf, ctx) {
        if (rf & 1) {
          var _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycVerificationComponent_form_4_mat_hint_119_Template_mat_hint_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r85);

            var ctx_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r84.getOtpMobile(ctx_r84.kycVerificationForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r53.verify);
        }
      }

      function KycVerificationComponent_form_4_mat_error_120_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Enter Mobile Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_error_121_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Mobile number must be 10 digits. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_error_122_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " \xA0 \xA0 Please Enter Correct Mobile Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_radio_button_129_Template(rf, ctx) {
        if (rf & 1) {
          var _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-radio-button", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function KycVerificationComponent_form_4_mat_radio_button_129_Template_mat_radio_button_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r89);

            var ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r88.onChange(ctx_r88.kycVerificationForm.controls.permanentAddress, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r86 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", option_r86.checked)("value", option_r86.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", option_r86.name, " ");
        }
      }

      function KycVerificationComponent_form_4_mat_error_144_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Enter Valid Address Line 1 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_error_151_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Enter Valid Address Line 2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_option_161_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var Resi_r90 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", Resi_r90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](Resi_r90);
        }
      }

      function KycVerificationComponent_form_4_mat_error_162_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Residence Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_option_171_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r91 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", country_r91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](country_r91);
        }
      }

      function KycVerificationComponent_form_4_mat_error_172_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_option_182_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var state_r92 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", state_r92);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](state_r92);
        }
      }

      function KycVerificationComponent_form_4_mat_error_183_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select State");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_option_192_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var city_r93 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", city_r93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](city_r93);
        }
      }

      function KycVerificationComponent_form_4_mat_error_193_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select City");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_error_200_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter vaild Zip Code!(5-10 digits) ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_h5_201_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter valid Zip Code! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_div_202_mat_error_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Enter Valid Address Line 1 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_div_202_mat_error_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Enter Valid Address Line 2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_div_202_mat_option_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var Resi_r106 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", Resi_r106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](Resi_r106);
        }
      }

      function KycVerificationComponent_form_4_div_202_mat_error_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Residence Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_div_202_mat_option_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r107 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", country_r107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](country_r107);
        }
      }

      function KycVerificationComponent_form_4_div_202_mat_error_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_div_202_mat_option_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var state_r108 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", state_r108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](state_r108);
        }
      }

      function KycVerificationComponent_form_4_div_202_mat_error_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select State");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_div_202_mat_option_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var city_r109 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", city_r109);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](city_r109);
        }
      }

      function KycVerificationComponent_form_4_div_202_mat_error_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select City");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_div_202_mat_error_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please enter vaild Zip Code! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_div_202_h5_70_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h5", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please enter valid Zip Code! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_div_202_Template(rf, ctx) {
        if (rf & 1) {
          var _r111 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Permanent Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mat-divider", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Address Line 1*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-card", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "textarea", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function KycVerificationComponent_form_4_div_202_Template_textarea_keypress_12_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r111);

            var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r110.keyPressAlphanumeric($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, KycVerificationComponent_form_4_div_202_mat_error_13_Template, 2, 0, "mat-error", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Address Line 2*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-card", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "textarea", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function KycVerificationComponent_form_4_div_202_Template_textarea_keypress_19_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r111);

            var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r112.keyPressAlphanumeric($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, KycVerificationComponent_form_4_div_202_mat_error_20_Template, 2, 0, "mat-error", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Residence Type*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-card", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-select", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, KycVerificationComponent_form_4_div_202_mat_option_30_Template, 2, 2, "mat-option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, KycVerificationComponent_form_4_div_202_mat_error_31_Template, 2, 0, "mat-error", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Country*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-card", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-select", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function KycVerificationComponent_form_4_div_202_Template_mat_select_selectionChange_37_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r111);

            var ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r113.getPerStateName($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, KycVerificationComponent_form_4_div_202_mat_option_40_Template, 2, 2, "mat-option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, KycVerificationComponent_form_4_div_202_mat_error_41_Template, 2, 0, "mat-error", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "State*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "mat-card", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-select", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function KycVerificationComponent_form_4_div_202_Template_mat_select_selectionChange_48_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r111);

            var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r114.getPerCityName($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, KycVerificationComponent_form_4_div_202_mat_option_51_Template, 2, 2, "mat-option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, KycVerificationComponent_form_4_div_202_mat_error_52_Template, 2, 0, "mat-error", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "City*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-card", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-select", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, KycVerificationComponent_form_4_div_202_mat_option_61_Template, 2, 2, "mat-option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, KycVerificationComponent_form_4_div_202_mat_error_62_Template, 2, 0, "mat-error", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Zip Code*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "mat-card", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "input", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function KycVerificationComponent_form_4_div_202_Template_input_keyup_68_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r111);

            var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r115.isAllSameDigit($event, 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, KycVerificationComponent_form_4_div_202_mat_error_69_Template, 2, 0, "mat-error", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](70, KycVerificationComponent_form_4_div_202_h5_70_Template, 2, 0, "h5", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](19, _c2, !ctx_r70.kycVerificationForm.get("permanentAddress.address1").valid && ctx_r70.kycVerificationForm.get("permanentAddress.address1").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r70.kycVerificationForm.get("permanentAddress.address1").valid && ctx_r70.kycVerificationForm.get("permanentAddress.address1").touched || ctx_r70.kycVerificationForm.get("permanentAddress.address1").touched && ctx_r70.kycVerificationForm.get("permanentAddress.address1").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](21, _c2, !ctx_r70.kycVerificationForm.get("permanentAddress.address2").valid && ctx_r70.kycVerificationForm.get("permanentAddress.address2").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r70.kycVerificationForm.get("permanentAddress.address2").valid && ctx_r70.kycVerificationForm.get("permanentAddress.address2").touched || ctx_r70.kycVerificationForm.get("permanentAddress.address2").touched && ctx_r70.kycVerificationForm.get("permanentAddress.address2").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](23, _c2, !ctx_r70.kycVerificationForm.get("permanentAddress.residenceType").valid && ctx_r70.kycVerificationForm.get("permanentAddress.residenceType").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r70.Residences);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r70.kycVerificationForm.get("permanentAddress.residenceType").valid && ctx_r70.kycVerificationForm.get("permanentAddress.residenceType").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](25, _c2, !ctx_r70.kycVerificationForm.get("permanentAddress.country").valid && ctx_r70.kycVerificationForm.get("permanentAddress.country").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r70.countrys);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r70.kycVerificationForm.get("permanentAddress.country").valid && ctx_r70.kycVerificationForm.get("permanentAddress.country").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](27, _c2, !ctx_r70.kycVerificationForm.get("permanentAddress.state").valid && ctx_r70.kycVerificationForm.get("permanentAddress.state").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r70.arrayState1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r70.kycVerificationForm.get("permanentAddress.state").valid && ctx_r70.kycVerificationForm.get("permanentAddress.state").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](29, _c2, !ctx_r70.kycVerificationForm.get("permanentAddress.city").valid && ctx_r70.kycVerificationForm.get("permanentAddress.city").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r70.arrayCity1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r70.kycVerificationForm.get("permanentAddress.city").valid && ctx_r70.kycVerificationForm.get("permanentAddress.city").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](31, _c2, !ctx_r70.kycVerificationForm.get("permanentAddress.zipCode").valid && ctx_r70.kycVerificationForm.get("permanentAddress.zipCode").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r70.kycVerificationForm.get("permanentAddress.zipCode").valid && ctx_r70.kycVerificationForm.get("permanentAddress.zipCode").touched || ctx_r70.kycVerificationForm.get("permanentAddress.zipCode").required && ctx_r70.kycVerificationForm.get("permanentAddress.zipCode").minLength);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r70.isAllSameDigitVal && 1 == ctx_r70.zipIndex);
        }
      }

      function KycVerificationComponent_form_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Basic Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 48, 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function KycVerificationComponent_form_4_Template_input_change_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r117);

            var ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r116.onFileChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "mat-icon", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, KycVerificationComponent_form_4_div_12_Template, 2, 1, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, KycVerificationComponent_form_4_ng_template_13_Template, 1, 1, "ng-template", null, 52, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-icon", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycVerificationComponent_form_4_Template_mat_icon_click_16_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r117);

            var ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r118.deleteProfileImg();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "delete ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "CIF Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-card", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "input", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function KycVerificationComponent_form_4_Template_input_keyup_27_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r117);

            var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r119.onKeyPress($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "mat-autocomplete", null, 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, KycVerificationComponent_form_4_mat_option_31_Template, 13, 13, "mat-option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](33, KycVerificationComponent_form_4_p_33_Template, 2, 0, "p", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, KycVerificationComponent_form_4_mat_spinner_34_Template, 1, 1, "mat-spinner", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "p", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycVerificationComponent_form_4_Template_p_click_36_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r117);

            var ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r120.resetData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "Reset");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Prefix*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "mat-card", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "mat-select", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, KycVerificationComponent_form_4_mat_option_47_Template, 2, 2, "mat-option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](48, KycVerificationComponent_form_4_mat_error_48_Template, 2, 0, "mat-error", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, "First Name*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-card", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "input", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function KycVerificationComponent_form_4_Template_input_keypress_53_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r117);

            var ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r121.letterOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](54, KycVerificationComponent_form_4_mat_error_54_Template, 2, 0, "mat-error", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, "Middle Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-card", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "input", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function KycVerificationComponent_form_4_Template_input_keypress_59_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r117);

            var ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r122.letterOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](60, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](62, "Last Name*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "mat-card", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "input", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function KycVerificationComponent_form_4_Template_input_keypress_64_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r117);

            var ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r123.letterOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, KycVerificationComponent_form_4_mat_error_65_Template, 2, 0, "mat-error", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](68, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](69, "Date of Birth*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "mat-card", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](71, "input", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](72, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](73, "mat-datepicker-toggle", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](74, "mat-datepicker", null, 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](76, KycVerificationComponent_form_4_mat_error_76_Template, 2, 0, "mat-error", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](78, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](79, "Marital Status*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "mat-card", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "mat-select", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](82, "mat-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](83, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, KycVerificationComponent_form_4_mat_option_84_Template, 2, 2, "mat-option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](85, KycVerificationComponent_form_4_mat_error_85_Template, 2, 0, "mat-error", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](87, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](88, "Gender*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "mat-card", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "mat-select", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function KycVerificationComponent_form_4_Template_mat_select_selectionChange_90_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r117);

            var ctx_r124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r124.onChangeGender($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](91, "mat-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](92, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](93, KycVerificationComponent_form_4_mat_option_93_Template, 2, 2, "mat-option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](94, KycVerificationComponent_form_4_mat_error_94_Template, 2, 0, "mat-error", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](95, KycVerificationComponent_form_4_mat_error_95_Template, 2, 0, "mat-error", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](96, "div", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](98, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](99, "Nationality*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](100, "mat-card", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](101, "mat-select", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "mat-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](103, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](104, KycVerificationComponent_form_4_mat_option_104_Template, 2, 2, "mat-option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](105, KycVerificationComponent_form_4_mat_error_105_Template, 2, 0, "mat-error", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](107, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](108, "Primary Email*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](109, "mat-card", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](110, "input", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](111, KycVerificationComponent_form_4_mat_hint_111_Template, 2, 1, "mat-hint", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](112, KycVerificationComponent_form_4_mat_error_112_Template, 2, 0, "mat-error", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](113, KycVerificationComponent_form_4_mat_error_113_Template, 2, 0, "mat-error", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](114, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](116, "Mobile Number*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "mat-card", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "input", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function KycVerificationComponent_form_4_Template_input_keypress_118_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r117);

            var ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r125._keyPress($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](119, KycVerificationComponent_form_4_mat_hint_119_Template, 2, 1, "mat-hint", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](120, KycVerificationComponent_form_4_mat_error_120_Template, 2, 0, "mat-error", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](121, KycVerificationComponent_form_4_mat_error_121_Template, 2, 0, "mat-error", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](122, KycVerificationComponent_form_4_mat_error_122_Template, 2, 0, "mat-error", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](127, " Is your Permanent Address same as Communication Address? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](128, "mat-radio-group", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](129, KycVerificationComponent_form_4_mat_radio_button_129_Template, 2, 3, "mat-radio-button", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](130, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](131, "div", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "span", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](134, "Communication Address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](135, "mat-divider", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](137, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](138, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](141, "Address Line 1*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "mat-card", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](143, "textarea", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function KycVerificationComponent_form_4_Template_textarea_keypress_143_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r117);

            var ctx_r126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r126.keyPressAlphanumeric($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](144, KycVerificationComponent_form_4_mat_error_144_Template, 2, 0, "mat-error", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](147, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](148, "Address Line 2*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](149, "mat-card", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "textarea", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function KycVerificationComponent_form_4_Template_textarea_keypress_150_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r117);

            var ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r127.keyPressAlphanumeric($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](151, KycVerificationComponent_form_4_mat_error_151_Template, 2, 0, "mat-error", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](153, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](156, "Residence Type*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](157, "mat-card", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](158, "mat-select", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](159, "mat-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](160, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](161, KycVerificationComponent_form_4_mat_option_161_Template, 2, 2, "mat-option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](162, KycVerificationComponent_form_4_mat_error_162_Template, 2, 0, "mat-error", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](164, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](166, "Country*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "mat-card", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](168, "mat-select", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function KycVerificationComponent_form_4_Template_mat_select_selectionChange_168_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r117);

            var ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r128.getStateName($event.value);
          })("selectionChange", function KycVerificationComponent_form_4_Template_mat_select_selectionChange_168_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r117);

            var ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r129.getCityName($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](169, "mat-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](170, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](171, KycVerificationComponent_form_4_mat_option_171_Template, 2, 2, "mat-option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](172, KycVerificationComponent_form_4_mat_error_172_Template, 2, 0, "mat-error", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](174, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](177, "State*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](178, "mat-card", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](179, "mat-select", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function KycVerificationComponent_form_4_Template_mat_select_selectionChange_179_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r117);

            var ctx_r130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r130.getCityName($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](180, "mat-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](181, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](182, KycVerificationComponent_form_4_mat_option_182_Template, 2, 2, "mat-option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](183, KycVerificationComponent_form_4_mat_error_183_Template, 2, 0, "mat-error", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](184, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](186, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](187, "City*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](188, "mat-card", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](189, "mat-select", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](190, "mat-option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](191, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](192, KycVerificationComponent_form_4_mat_option_192_Template, 2, 2, "mat-option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](193, KycVerificationComponent_form_4_mat_error_193_Template, 2, 0, "mat-error", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](194, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](195, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](196, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](197, "Zip Code*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](198, "mat-card", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](199, "input", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keyup", function KycVerificationComponent_form_4_Template_input_keyup_199_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r117);

            var ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r131.isAllSameDigit($event, 0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](200, KycVerificationComponent_form_4_mat_error_200_Template, 2, 0, "mat-error", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](201, KycVerificationComponent_form_4_h5_201_Template, 2, 0, "h5", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](202, KycVerificationComponent_form_4_div_202_Template, 71, 33, "div", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);

          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](30);

          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](75);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var tmp_8_0 = null;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.kycVerificationForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.imageURL == "not_available")("ngIfElse", _r31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControl", ctx_r1.cifNumberForm)("matAutocomplete", _r33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.listOfCustByCif);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.loading);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("hidden", !((tmp_8_0 = ctx_r1.kycVerificationForm.get("cifNumber")) == null ? null : tmp_8_0.value));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](61, _c2, !ctx_r1.kycVerificationForm.get("prefix").valid && ctx_r1.kycVerificationForm.get("prefix").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.index);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.kycVerificationForm.get("prefix").valid && ctx_r1.kycVerificationForm.get("prefix").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](63, _c2, !ctx_r1.kycVerificationForm.get("firstName").valid && ctx_r1.kycVerificationForm.get("firstName").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.kycVerificationForm.get("firstName").valid && ctx_r1.kycVerificationForm.get("firstName").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](65, _c2, !ctx_r1.kycVerificationForm.get("lastName").valid && ctx_r1.kycVerificationForm.get("lastName").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.kycVerificationForm.get("lastName").valid && ctx_r1.kycVerificationForm.get("lastName").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](67, _c2, !ctx_r1.kycVerificationForm.get("dateOfBirth").valid && ctx_r1.kycVerificationForm.get("dateOfBirth").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r41)("max", ctx_r1.maxDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.kycVerificationForm.get("dateOfBirth").valid && ctx_r1.kycVerificationForm.get("dateOfBirth").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](69, _c2, !ctx_r1.kycVerificationForm.get("maritalStatus").valid && ctx_r1.kycVerificationForm.get("maritalStatus").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.MaritalStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.kycVerificationForm.get("maritalStatus").valid && ctx_r1.kycVerificationForm.get("maritalStatus").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](71, _c2, !ctx_r1.kycVerificationForm.get("gender").valid && ctx_r1.kycVerificationForm.get("gender").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.genders);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.kycVerificationForm.get("gender").valid && ctx_r1.kycVerificationForm.get("gender").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.prefixFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](73, _c2, !ctx_r1.kycVerificationForm.get("nationality").valid && ctx_r1.kycVerificationForm.get("nationality").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.nationality);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.kycVerificationForm.get("nationality").valid && ctx_r1.kycVerificationForm.get("nationality").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](75, _c2, !ctx_r1.kycVerificationForm.get("primaryEmailAdress").valid && ctx_r1.kycVerificationForm.get("primaryEmailAdress").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.kycVerificationForm.get("primaryEmailAdress").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.kycVerificationForm.get("primaryEmailAdress").hasError("required") && ctx_r1.kycVerificationForm.get("primaryEmailAdress").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.kycVerificationForm.get("primaryEmailAdress").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](77, _c2, !ctx_r1.kycVerificationForm.get("phoneNumber").valid && ctx_r1.kycVerificationForm.get("phoneNumber").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.kycVerificationForm.get("phoneNumber").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.kycVerificationForm.get("phoneNumber").hasError("required") && ctx_r1.kycVerificationForm.get("phoneNumber").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.kycVerificationForm.get("phoneNumber").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.kycVerificationForm.controls["phoneNumber"].value == "0000000000");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.array);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](79, _c2, !ctx_r1.kycVerificationForm.get("communicationAddress.address1").valid && ctx_r1.kycVerificationForm.get("communicationAddress.address1").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.kycVerificationForm.get("communicationAddress.address1").valid && ctx_r1.kycVerificationForm.get("communicationAddress.address1").touched || ctx_r1.kycVerificationForm.get("communicationAddress.address1").touched && ctx_r1.kycVerificationForm.get("communicationAddress.address1").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](81, _c2, !ctx_r1.kycVerificationForm.get("communicationAddress.address2").valid && ctx_r1.kycVerificationForm.get("communicationAddress.address2").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.kycVerificationForm.get("communicationAddress.address2").valid && ctx_r1.kycVerificationForm.get("communicationAddress.address2").touched || ctx_r1.kycVerificationForm.get("communicationAddress.address2").touched && ctx_r1.kycVerificationForm.get("communicationAddress.address2").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](83, _c2, !ctx_r1.kycVerificationForm.get("communicationAddress.residenceType").valid && ctx_r1.kycVerificationForm.get("communicationAddress.residenceType").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.Residences);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.kycVerificationForm.get("communicationAddress.residenceType").valid && ctx_r1.kycVerificationForm.get("communicationAddress.residenceType").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](85, _c2, !ctx_r1.kycVerificationForm.get("communicationAddress.country").valid && ctx_r1.kycVerificationForm.get("communicationAddress.country").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.countrys);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.kycVerificationForm.get("communicationAddress.country").valid && ctx_r1.kycVerificationForm.get("communicationAddress.country").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](87, _c2, !ctx_r1.kycVerificationForm.get("communicationAddress.state").valid && ctx_r1.kycVerificationForm.get("communicationAddress.state").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.arrayState);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.kycVerificationForm.get("communicationAddress.state").valid && ctx_r1.kycVerificationForm.get("communicationAddress.state").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](89, _c2, !ctx_r1.kycVerificationForm.get("communicationAddress.city").valid && ctx_r1.kycVerificationForm.get("communicationAddress.city").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.arrayCity);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.kycVerificationForm.get("communicationAddress.city").valid && ctx_r1.kycVerificationForm.get("communicationAddress.city").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](91, _c2, !ctx_r1.kycVerificationForm.get("communicationAddress.zipCode").valid && ctx_r1.kycVerificationForm.get("communicationAddress.zipCode").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.kycVerificationForm.get("communicationAddress.zipCode").valid && ctx_r1.kycVerificationForm.get("communicationAddress.zipCode").touched || ctx_r1.kycVerificationForm.get("communicationAddress.zipCode").required && ctx_r1.kycVerificationForm.get("permanentAddress.zipCode").minLength);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.isAllSameDigitVal && 0 == ctx_r1.zipIndex);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.sameAddress == "No");
        }
      }

      var _c3 = function _c3(a0, a1) {
        return {
          "next12": a0,
          "next": a1
        };
      };

      var KycVerificationComponent = /*#__PURE__*/function () {
        function KycVerificationComponent(loader, ls, http, api, snack, dialog, router, fb, fingerPrintService, sanitizer, cdr, shareDataService, dialogService, locationStrategy, appApiService) {
          var _this3 = this;

          _classCallCheck(this, KycVerificationComponent);

          this.loader = loader;
          this.ls = ls;
          this.http = http;
          this.api = api;
          this.snack = snack;
          this.dialog = dialog;
          this.router = router;
          this.fb = fb;
          this.fingerPrintService = fingerPrintService;
          this.sanitizer = sanitizer;
          this.cdr = cdr;
          this.shareDataService = shareDataService;
          this.dialogService = dialogService;
          this.locationStrategy = locationStrategy;
          this.appApiService = appApiService;
          this.cifNumberForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
          this.maxDate = new Date();
          this.settingallCustInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](); // imageUrl: any = "https://i.ibb.co/fDWsn3G/buck.jpg";

          this.editFile = true;
          this.removeUpload = false;
          this.docData = [];
          this.otpmodel = new _kyc_basic_information_kyc_basic_information_component__WEBPACK_IMPORTED_MODULE_8__["OtpModel"]();
          this.billing = true;
          this.basicInfoSavedAlready = false;
          this.isCifValid = false;
          this.radioFlag = "Auto";
          this.arrayState = [];
          this.isAllSameDigitVal = false;
          this.prefixFlag = false;
          this.uploadDone = true;
          this.listOfCustByCif = [];
          this.countrys = [];
          this.uplaod = new Upload();
          this.cifFetch = false;
          this.array = [{
            id: 1,
            checked: true,
            name: "Yes"
          }, {
            id: 2,
            checked: false,
            name: "No"
          }];
          this.array1 = [{
            id: 1,
            checked: true,
            name: "Auto"
          }, {
            id: 2,
            checked: false,
            name: "Manual"
          }];
          this.permanentAddress = this.fb.group({
            addressType: ["Permanent", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            address1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('.*[a-zA-Z].*')]],
            address2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('.*[a-zA-Z].*')]],
            city: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            zipCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)]],
            country: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            residenceType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            state: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
          });

          this.aadharParser = function (str) {
            try {
              var _ret = function () {
                var adharNumber,
                    dob,
                    name,
                    nameLineIndex = 2;
                var asciiStr = str.replace(/[^\x00-\x7F]/g, "").trim();
                var lines = asciiStr.split("\n");

                for (var i = lines.length - 1; i >= 0; i--) {
                  var count = 0,
                      startIndex = -1;

                  for (var j = 0; j < lines[i].length; j++) {
                    if (lines[i][j] >= "0" && lines[i][j] <= "9") {
                      count++;
                      if (startIndex === -1) startIndex = j;
                    }
                  }

                  if (count >= 12) {
                    adharNumber = lines[i].substr(startIndex, startIndex + 14);
                  }
                }

                var _loop = function _loop(_i) {
                  ["DOB", "Year of Birth"].some(function (docString) {
                    var dobIndex = lines[_i].indexOf(docString);

                    if (dobIndex !== -1) {
                      dob = lines[_i].trim().slice(dobIndex, lines[_i].length).split(" ").pop();
                      nameLineIndex = _i - 1; // console.log(dob);

                      var dobArray = dob.split("/");

                      if (dobArray.length == 3) {
                        _this3.kycVerificationForm.controls.dateOfBirth.setValue(new Date(dob));
                      } else {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_17___default.a.fire({
                          text: " Date of birth format of Uploaded document and application are different. Please select Date of birth manually!",
                          width: 500,
                          confirmButtonText: "OK",
                          confirmButtonColor: '#456EFE'
                        });
                      }
                    }
                  });
                };

                for (var _i = 0; _i < lines.length; _i++) {
                  _loop(_i);
                }

                var names = lines[nameLineIndex].split(" ").filter(function (x) {
                  return x.length > 1;
                }).join(" "); // console.log(names);

                return {
                  v: {
                    dob: dob,
                    adharNumber: adharNumber,
                    fullName: names
                  }
                };
              }();

              if (typeof _ret === "object") return _ret.v;
            } catch (error) {
              // console.log(error);
              console.error("Unable to parse aadhar");
            }
          };
        }

        _createClass(KycVerificationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

            this.editKycScreen = localStorage.getItem('EDIT-CIFNUMBER');
            console.log(this.editKycScreen, "Edit kyc details");
            this.kycVerificationForm1 = this.fb.group({
              documentsList: this.fb.array([this.createItem()])
            });
            this.preventBackButton();
            this.verify = 'verify';
            this.emailVerify = 'verify';
            this.api.getverify1().subscribe(function (resp) {
              if (resp.verify == 'verified') {
                _this4.assignVerify(resp);
              }
            });
            this.api.getverify().subscribe(function (resp) {
              if (resp.verify == 'verified') {
                _this4.assignVerify(resp);
              }
            });
            this.prefixFlag = true;
            this.kycVerificationForm = this.fb.group({
              cifNumber: [""],
              prefix: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              documentName: [""],
              // firstName: ['',[Validators.required]],
              primaryEmailAdress: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$')]],
              phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
              firstName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              lastName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              middleName: [""],
              customer_id: [""],
              isAddressSame: [""],
              gender: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              dateOfBirth: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              maritalStatus: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              nationality: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              profileImage: [""],
              communicationAddress: this.fb.group({
                addressType: ["Communication", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                address1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('.*[a-zA-Z].*')]],
                address2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('.*[a-zA-Z].*')]],
                city: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                zipCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)]],
                country: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                residenceType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                state: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
              })
            });
            this.imageURL = "not_available"; // this.initGroup();

            console.log('clear'); // this.kycVerificationForm.reset();

            this.getDoc(); // console.log("after getDoc");

            this.kycVerificationForm.get("isAddressSame").patchValue(this.array[0].name); // console.log("after patchValue")
            // localStorage.getItem('customer_id')? this.getAllCustomerDetails(localStorage.getItem('customer_id')) : '';

            console.log(this.ls.getItem('EDIT-CIFNUMBER'));

            if (this.ls.getItem('EDIT-CIFNUMBER')) {
              console.log("KYC Id reference inside");
              this.autofillDetails(this.editKycScreen);
              this.cifFetch = false;
            }
          }
        }, {
          key: "preventBackButton",
          value: function preventBackButton() {
            history.pushState(null, null, location.href);
            this.locationStrategy.onPopState(function () {
              history.pushState(null, null, location.href);
            });
          }
        }, {
          key: "manualUpload",
          value: function manualUpload() {
            var docNum;
            docNum = this.kycVerificationForm1.value.documentsList[0].docNum;

            if (docNum.toString().length !== 12) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_17___default.a.fire({
                text: " Aadhar Number Should be 12 digits!",
                width: 500,
                confirmButtonText: "OK",
                confirmButtonColor: '#456EFE',
                icon: 'info'
              });
            } else {
              this.kycVerificationForm.get("communicationAddress.zipCode").patchValue("670645");
              this.kycVerificationForm.get("communicationAddress.residenceType").patchValue('Citizen');
              this.kycVerificationForm.get("communicationAddress.country").patchValue('India');
              this.getStateName('India', '');
              this.getPerStateName('India');
              this.getCityName('Kerala', '');
              this.kycVerificationForm.get("communicationAddress.address1").patchValue('Pollayaote');
              this.kycVerificationForm.get("communicationAddress.address2").patchValue('Payote Kalam');
              this.kycVerificationForm.get("communicationAddress.state").patchValue('Kerala');
              this.kycVerificationForm.get("prefix").patchValue('Ms');
              this.kycVerificationForm.get("phoneNumber").patchValue('9656849771');
              this.kycVerificationForm.get("firstName").patchValue('Jayalakshmi');
              this.kycVerificationForm.get("lastName").patchValue('PM');
              this.kycVerificationForm.get("middleName").patchValue('');
              this.kycVerificationForm.get("gender").patchValue('Female');
              this.kycVerificationForm.get("dateOfBirth").patchValue('2022-04-08');
              this.kycVerificationForm.get("nationality").patchValue('Indian');
              this.kycVerificationForm.get("communicationAddress.city").patchValue('Wayanad');
            }
          }
        }, {
          key: "resetForm",
          value: function resetForm() {
            this.kycVerificationForm.reset();
            this.kycVerificationForm1.reset();
            this.imageURL = "";
            this.fileNameFront = '';
            this.fileNameBack = '';
            this.radioFlag = 'Auto';
          }
        }, {
          key: "letterOnly",
          value: function letterOnly(event) {
            var charCode = event.keyCode;
            if (charCode > 64 && charCode < 91 || charCode > 96 && charCode < 123 || charCode == 8) return true;else return false;
          }
        }, {
          key: "changeValue2",
          value: function changeValue2(event) {
            if (event === "Aadhar card") {
              this.disableButton = true;
            }
          }
        }, {
          key: "previousStep",
          value: function previousStep() {
            this.dialogService.openKycVerificationMethod();
          }
        }, {
          key: "getStateName",
          value: function getStateName(country, address) {
            var _this5 = this;

            this.entityName = "state"; // console.log("State -- ", country)
            // this.api.getDropDownForStateCity(this.entityName, country).subscribe((data) => {
            //   this.arrayState = data;

            this.api.getAllCountries().subscribe(function (data) {
              for (var i = 0; i < data.length; i++) {
                if (data[i].countryName === country) {
                  _this5.api.getStateByCountryId(data[i].id).subscribe(function (resp) {
                    for (var _i2 = 0; _i2 < resp.length; _i2++) {
                      if (resp[_i2].authStatus === 'A') {
                        _this5.arrayState.push(resp[_i2].stateName);
                      }
                    }
                  });

                  break;
                }
              } // console.log("-->", this.arrayState)


              if (address.length > 0) {
                for (var key in address) {
                  if (Object.prototype.hasOwnProperty.call(address, key)) {
                    var element = address[key];

                    for (var state in _this5.arrayState) {
                      if (Object.prototype.hasOwnProperty.call(_this5.arrayState, state)) {
                        var elementState = _this5.arrayState[state];

                        if (elementState.trim() === element.trim()) {
                          // console.log('elementState', elementState)
                          _this5.getCityName(elementState.trim(), address);
                        }
                      }
                    }
                  }
                }
              }
            });
          }
        }, {
          key: "getPerStateName",
          value: function getPerStateName(country) {
            var _this6 = this;

            this.entityName = "state"; // console.log("State -- ", country)

            this.api.getDropDownForStateCity(this.entityName, country).subscribe(function (data) {
              _this6.arrayState1 = data; // console.log("-->", this.arrayState)
            });
          }
        }, {
          key: "getCityName",
          value: function getCityName(state, address) {
            var _this7 = this;

            this.entityName = "city"; // console.log(state)

            this.api.getDropDownForStateCity(this.entityName, state).subscribe(function (data) {
              _this7.arrayCity = data; // console.log("-->", this.arrayCity)

              if (address.length > 0) {
                for (var key in address) {
                  if (Object.prototype.hasOwnProperty.call(address, key)) {
                    var element = address[key];

                    for (var City in _this7.arrayCity) {
                      if (Object.prototype.hasOwnProperty.call(_this7.arrayCity, City)) {
                        var elementCity = _this7.arrayCity[City];

                        if (elementCity.trim() === element.trim()) {
                          // console.log('elementCity', elementCity)
                          _this7.kycVerificationForm.get('communicationAddress.city').setValue(elementCity);

                          _this7.cdr.detectChanges();

                          _this7.cdr.markForCheck();
                        }
                      }
                    }
                  }
                }
              }
            });
          }
        }, {
          key: "getPerCityName",
          value: function getPerCityName(state) {
            var _this8 = this;

            this.entityName = "city"; // console.log(state)

            this.api.getDropDownForStateCity(this.entityName, state).subscribe(function (data) {
              _this8.arrayCity1 = data; // console.log("-->", this.arrayCity)
            });
          }
        }, {
          key: "getProfileImage",
          value: function getProfileImage(customerId, document_type) {
            var _this9 = this;

            this.api.getCustomerDocuments(customerId, document_type).subscribe(function (data) {
              // console.log("data ::", data);
              if (data.length > 0) {
                _this9.profileId = data[0].id;
                _this9.imageURL = data[0].fileUrl;
              }
            });
          }
        }, {
          key: "deleteProfileImg",
          value: function deleteProfileImg() {
            var _this10 = this;

            this.dialogService.doConfirmDialog('').subscribe(function (response) {
              if (response == "Yes") {
                _this10.imageURL = "not_available";
                _this10.profileFile.nativeElement.value = '';
                var customerId = localStorage.getItem('customerId');

                _this10.api.deleteCustomerDoc(customerId, _this10.profileId).subscribe(function (data) {
                  _this10.snack.open('Profile Image Deleted Successfully', 'OK', {
                    duration: 4000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'
                  });
                });
              }
            });
          }
        }, {
          key: "onUpload1",
          value: function onUpload1(event, KycForm, index, side) {
            var _this11 = this;

            var kyc = KycForm.documentsList[index].documentName;
            this.selectedFiles = event.target.files[0];

            if (side === 'backSide') {
              this.fileNameCheckBack = this.selectedFiles.name;
              var fileExtBack = this.fileNameCheckBack.split('.').pop();

              if (fileExtBack.toLowerCase() === "jpeg" || fileExtBack.toLowerCase() === "jpg" || fileExtBack.toLowerCase() === "png") {
                this.fun2(event, this.selectedFiles, kyc, KycForm.documentType, side);
              } else {
                this.snack.open("Please Upload Valid Aadhar Card!", "OK", {
                  duration: 4000,
                  verticalPosition: "top",
                  horizontalPosition: "right"
                });
                return;
              }
            }

            if (side === 'frontSide') {
              this.fileNameCheck = this.selectedFiles.name;
              var fileExt = this.fileNameCheck.split('.').pop();

              if (fileExt.toLowerCase() === "jpeg" || fileExt.toLowerCase() === "jpg" || fileExt.toLowerCase() === "png") {
                this.fun1(event, this.selectedFiles, kyc, KycForm.documentType, side);
              } else {
                this.snack.open("Please Upload Valid Aadhar Card!", "OK", {
                  duration: 4000,
                  verticalPosition: "top",
                  horizontalPosition: "right"
                });
                return;
              }
            } // this.fun2(event, this.selectedFiles, kyc, KycForm.documentType, side);


            this.fileName = this.selectedFiles.name;
            KycForm.documentsList[index].documentType = this.fileName;
            this.kycVerificationForm1.controls.documentsList["controls"][index].controls.documentType.setValue(this.fileName);
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.readAsText(this.selectedFiles);

            reader.onload = function (event2) {
              _this11.fileUrl = reader.result;
            };
          }
        }, {
          key: "doOCR",
          value: function doOCR(img, side, docName, event) {
            return __awaiter(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var _this12 = this;

              var worker;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      worker = Object(tesseract_js__WEBPACK_IMPORTED_MODULE_2__["createWorker"])({//logger: m => console.log(m)
                      });

                      (function () {
                        return __awaiter(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                          var _yield$worker$recogni, text, aadharDetails, split, filenameFrontSide, extension, address, filenameBackSide;

                          return regeneratorRuntime.wrap(function _callee$(_context) {
                            while (1) {
                              switch (_context.prev = _context.next) {
                                case 0:
                                  // console.log("before open");
                                  this.loader.open(); // console.log("after open");

                                  _context.next = 3;
                                  return worker.load();

                                case 3:
                                  _context.next = 5;
                                  return worker.loadLanguage('eng');

                                case 5:
                                  _context.next = 7;
                                  return worker.initialize('eng');

                                case 7:
                                  _context.next = 9;
                                  return worker.recognize(img);

                                case 9:
                                  _yield$worker$recogni = _context.sent;
                                  text = _yield$worker$recogni.data.text;
                                  _context.next = 13;
                                  return worker.terminate();

                                case 13:
                                  this.loader.close();
                                  aadharDetails = this.aadharParser(text); // console.log("this.passportDetails", aadharDetails, aadharDetails.fullName.toLowerCase());

                                  if (side === 'frontSide') {
                                    this.namePancard = aadharDetails.fullName.toLowerCase();
                                    this.dob = aadharDetails.dob;
                                    this.panNumber = aadharDetails.adharNumber;
                                    this.pancard = true;
                                    this.imageOCR = this.url;
                                    this.fileNameFront = this.selectedFiles.name;
                                    split = this.fileNameFront.split('.');
                                    filenameFrontSide = split[0];
                                    extension = split[1]; // if (filenameFrontSide.length > 11) {
                                    //   this.snack.open("File name exceeds 11 characters.Trimming to 11 characters", "OK", {
                                    //     duration: 4000,
                                    //     verticalPosition: "top",
                                    //     horizontalPosition: "right",
                                    //   });
                                    //   filenameFrontSide = filenameFrontSide.substring(0, 11);
                                    // }

                                    this.filenameFrontSide = filenameFrontSide;
                                    this.resultFrontSide = filenameFrontSide + '.' + extension; // console.log("resultFrontSide", this.resultFrontSide)

                                    this.dataFront = {
                                      customerId: this.refreshCustomerId,
                                      documentName: docName,
                                      documentType: "6",
                                      fileType: event.type,
                                      fileName: this.filenameFrontSide,
                                      verificationType: "KYC verification",
                                      documentSide: '1',
                                      idNumber: this.panNumber
                                    }; // console.log(this.dataFront);
                                  }

                                  if (side === 'backSide') {
                                    address = text.split(",");
                                    this.address = address[2] + "," + address[5] + "," + address[6] + "," + address[7];
                                    this.fileNameBack = this.selectedFiles.name;
                                    split = this.fileNameBack.split('.');
                                    filenameBackSide = split[0];
                                    extension = split[1]; // if (filenameBackSide.length > 11) {
                                    //   this.snack.open("File name exceeds 11 characters.Trimming to 11 characters", "OK", {
                                    //     duration: 4000,
                                    //     verticalPosition: "top",
                                    //     horizontalPosition: "right",
                                    //   });
                                    //   filenameBackSide = filenameBackSide.substring(0, 11);
                                    // }

                                    this.resultBackSide = filenameBackSide + '.' + extension;
                                    this.filenameBackSide = filenameBackSide; // console.log("resultFrontSide", this.resultFrontSide)

                                    this.imageOCRBack = this.urlback;
                                    this.dataBack = {
                                      customerId: this.refreshCustomerId,
                                      documentName: docName,
                                      documentType: "6",
                                      fileType: event.type,
                                      fileName: this.filenameBackSide,
                                      verificationType: "KYC verification",
                                      documentSide: '2',
                                      idNumber: this.panNumber
                                    };
                                  } // console.log("this.namePancard ,this.dob ,this.panNumber ,this.url ", this.namePancard, this.dob, this.panNumber)


                                  if (aadharDetails.adharNumber != null || aadharDetails.adharNumber != undefined) {
                                    this.splitFunction(text, side);
                                  } else {
                                    // console.log("wrong addhar to");
                                    this.snack.open("Please Upload Valid Aadhar Card!", "OK", {
                                      duration: 4000,
                                      verticalPosition: "top",
                                      horizontalPosition: "right"
                                    });
                                    this.resultBackSide = null;
                                    this.resultFrontSide = null;
                                  }

                                case 18:
                                case "end":
                                  return _context.stop();
                              }
                            }
                          }, _callee, this);
                        }));
                      })();

                    case 2:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2);
            }));
          }
        }, {
          key: "onChangeGender",
          value: function onChangeGender(event) {
            var prefix = this.kycVerificationForm.value.prefix;

            if (prefix == "Mr" && event.value == "Male" || (prefix == "Ms" || prefix == "Mrs") && event.value == "Female") {
              this.prefixFlag = true;
            } else {
              this.prefixFlag = false;
              this.snack.open("Prefix and Gender does not match!", "OK", {
                duration: 4000,
                verticalPosition: "top",
                horizontalPosition: "right"
              });
            }
          }
        }, {
          key: "fun2",
          value: function fun2(event, url, docName, docType, side) {
            var _this13 = this;

            // this.image = event.target.result;
            var cId = this.customerId;
            var uploadData = new FormData();
            this.urlB = url;

            if (event.target.files) {
              var reader = new FileReader();
              reader.readAsDataURL(event.target.files[0]);

              reader.onload = function (event) {
                _this13.urlback = event.target.result;

                _this13.doOCR(_this13.urlback, side, docName, event);
              };
            }
          }
        }, {
          key: "fun1",
          value: function fun1(event, url, docName, docType, side) {
            var _this14 = this;

            // console.log(event);
            // this.image = event.target.result;
            var cId = this.customerId;
            var uploadData = new FormData();
            this.urlF = url;

            if (event.target.files) {
              var reader = new FileReader();
              reader.readAsDataURL(event.target.files[0]);

              reader.onload = function (event) {
                _this14.url = event.target.result;

                _this14.doOCR(_this14.url, side, docName, event);
              };
            }
          }
        }, {
          key: "radioEvent",
          value: function radioEvent(event) {
            // console.log("radio button event");
            this.radioFlag = event.target.value;
          }
        }, {
          key: "splitFunction",
          value: function splitFunction(text, side) {
            var text1 = text.replace(/[^\x00-\x7F]/g, "");
            text.split(":"); // console.log(text.split(":")[2]);

            var address = text.split(","); // console.log(address);
            // console.log(address.length);

            this.countryAadhar = "India";
            this.getStateName(this.countryAadhar, address);
            this.residency = "Citizen";

            if (side == "backSide") {
              this.pinCode = address[address.length - 1].trim().split(" ")[0];
              this.kycVerificationForm.get("communicationAddress.zipCode").patchValue(this.pinCode);
              this.kycVerificationForm.get("communicationAddress.residenceType").patchValue(this.residency);
              this.kycVerificationForm.get("communicationAddress.country").patchValue(this.countryAadhar);
              this.kycVerificationForm.get("communicationAddress.address1").patchValue(address[2] + address[5]);
              this.kycVerificationForm.get("communicationAddress.address2").patchValue(address[6]);
              this.kycVerificationForm.get("communicationAddress.state").patchValue(address[7].trim());
            }

            if (side == "frontSide") {
              var asciiStr = text.replace(/[^\x00-\x7F]/g, "").trim();
              var lines = asciiStr.split("\n");
              var nameLineIndex = 2;
              var names = lines[nameLineIndex].split(" ").filter(function (x) {
                return x.length > 1;
              }).join(" "); // console.log(names);

              if (text.includes("Female") || text.includes("female")) {
                this.kycVerificationForm.get("gender").patchValue("Female");
                this.kycVerificationForm.get("prefix").patchValue("Ms");
              } else if (text.includes("Male") || text.includes("male")) {
                this.kycVerificationForm.get("gender").patchValue("Male");
                this.kycVerificationForm.get("prefix").patchValue("Mr");
              }

              this.kycVerificationForm.get("nationality").patchValue("Indian"); // console.log(names)

              var x = names.split(" "); // console.log(x[0], x[1]);

              this.kycVerificationForm.get("firstName").patchValue(x[0]);
              this.kycVerificationForm.get("lastName").patchValue(x[1]);
            }
          }
        }, {
          key: "createItem",
          value: function createItem() {
            return this.fb.group({
              id: [""],
              documentName: [""],
              documentType: [""],
              fileData1: [""],
              docNum: [""],
              fileData2: [""]
            }); // this.changeValue2(this.kycVerificationForm.controls.documentsList['controls'][0].controls.documentName.,0)
          }
        }, {
          key: "getDoc",
          value: function getDoc() {
            var _this15 = this;

            this.indexs = "prefix";
            this.dropVariableDoc = "document_type";
            this.docName = "document_name";
            this.bioName = "biometrics_Name";
            this.bioType = "biometrics_Type";
            this.gender = "gender";
            this.resi = "residence";
            this.marr = "maritial_Status";
            this.coun = "country";
            this.nation = "nationality";
            this.api.getDropDownValues(this.dropVariableDoc).subscribe(function (data) {
              _this15.Documents = data;
            }); // this.api.getDropDownValues(this.docName).subscribe((resp) => {
            //   this.DocumentsName = resp;
            // });

            this.DocumentsName = ["Aadhar card"];
            this.api.getDropDownValues(this.bioName).subscribe(function (response) {
              _this15.biometrics_Name = response;
            });
            this.api.getDropDownValues(this.bioType).subscribe(function (responseData) {
              _this15.biometrics_Type = responseData;
            }); // this.api.getDropDownValues(this.coun).subscribe((responseData) => {
            //   this.countrys = responseData;
            //   // console.log("this.countrys::", this.countrys)
            // });

            this.api.getAllCountries().subscribe(function (data) {
              for (var i = 0; i < data.length; i++) {
                if (data[i].authStatus === 'A') {
                  console.log(data[i]);

                  _this15.countrys.push(data[i].countryName);
                }
              }
            });
            this.api.getDropDownValues(this.gender).subscribe(function (responseDatas) {
              _this15.genders = responseDatas;
            });
            this.api.getDropDownValues(this.resi).subscribe(function (responses) {
              _this15.Residences = responses;
            });
            this.api.getDropDownValues(this.marr).subscribe(function (respo) {
              _this15.MaritalStatus = respo;
            });
            this.api.getDropDownValues(this.indexs).subscribe(function (re) {
              _this15.index = re;
            });
            this.api.getDropDownValues(this.nation).subscribe(function (datas) {
              _this15.nationality = datas;
            });
          }
        }, {
          key: "kyc",
          get: function get() {
            return this.kycVerificationForm.controls;
          }
        }, {
          key: "comAddress",
          get: function get() {
            return this.kyc.communicationAddress;
          }
        }, {
          key: "permAddress",
          get: function get() {
            return this.kyc.permanentAddress;
          }
        }, {
          key: "sameAddress",
          get: function get() {
            return this.kycVerificationForm.get("isAddressSame").value;
          }
        }, {
          key: "onChange",
          value: function onChange(control, e) {
            if (e.value == "No" && !this.kycVerificationForm.contains("permanentAddress")) {
              this.kycVerificationForm.addControl("permanentAddress", this.permanentAddress);
            } else {
              this.kycVerificationForm.removeControl("permanentAddress");
            }
          }
        }, {
          key: "onKeyPress",
          value: function onKeyPress(event) {
            var _this16 = this;

            var pattern = /[0-9]/;
            var inputChar = String.fromCharCode(event.charCode);

            if (!pattern.test(inputChar)) {
              event.preventDefault();
            }

            console.log(event.target.value);
            clearTimeout(this.timer);

            if (!event.target.value) {
              this.listOfCustByCif = [];
            } else {
              this.timer = setTimeout(function () {
                _this16.appApiService.fetchByCif(event.target.value).subscribe(function (res) {
                  console.log(res);

                  if (res) {
                    _this16.listOfCustByCif = res.customerInfoList;
                  }
                });
              }, 1000);
            }
          }
        }, {
          key: "autofillDetails",
          value: function autofillDetails(editCif) {
            console.log(editCif);
            this.cifNumber = this.kycVerificationForm.controls.cifNumber.value;
            console.log(this.cifNumber);

            if (editCif) {
              console.log("1st if");
              this.getAllCustomerDetails(editCif);
            }

            if (this.cifNumber) {
              this.cifFetch = true;
              console.log("2nd if");
              this.getAllCustomerDetails();
            }
          }
        }, {
          key: "setCustVerificationValues",
          value: function setCustVerificationValues(data) {
            this.kycVerificationForm.patchValue(data.customerInfoList[0]);

            if (data.customerInfoList[0].userAddress.length == 2) {
              this.kycVerificationForm.addControl("permanentAddress", this.permanentAddress);
              this.kycVerificationForm.get("isAddressSame").patchValue(this.array[1].name);

              for (var i = 0; i < data.customerInfoList[0].userAddress.length; i++) {
                if (data.customerInfoList[0].userAddress[i].addressType == "Communication") {
                  this.getStateName(data.customerInfoList[0].userAddress[i].country, '');
                  this.getPerStateName(data.customerInfoList[0].userAddress[i].country);
                  this.getCityName(data.customerInfoList[0].userAddress[i].state, '');
                  this.kycVerificationForm.get("communicationAddress").patchValue(data.customerInfoList[0].userAddress[i]);
                }

                if (data.customerInfoList[0].userAddress[i].addressType == "Permanent") {
                  this.getPerStateName(data.customerInfoList[0].userAddress[i].country);
                  this.getPerCityName(data.customerInfoList[0].userAddress[i].state);
                  this.kycVerificationForm.get("permanentAddress").patchValue(data.customerInfoList[0].userAddress[i]);
                }
              }
            } else {
              this.getStateName(data.customerInfoList[0].userAddress[0].country, '');
              this.getCityName(data.customerInfoList[0].userAddress[0].state, '');
              console.log("inside communication::", data.customerInfoList[0].userAddress[0].state);
              this.kycVerificationForm.get("isAddressSame").patchValue(this.array[0].name);
              this.kycVerificationForm.get("communicationAddress").patchValue(data.customerInfoList[0].userAddress[0]);
            }
          }
        }, {
          key: "getOtpMobile",
          value: function getOtpMobile(email) {
            this.otpmodel.source = "customer";
            this.otpmodel.source_key = "mobile";
            this.otpmodel.source_value = email.phoneNumber;
            this.api.getOtp(this.otpmodel).subscribe(function (resp) {});
            this.openDialog1(email.phoneNumber);
          }
        }, {
          key: "openDialog1",
          value: function openDialog1(phoneNUmber) {
            var dialogRef = this.dialog.open(_fingerprint_authentication_fingerprint_authentication_component__WEBPACK_IMPORTED_MODULE_7__["FingerprintAuthenticationComponent"], {
              data: {
                number: phoneNUmber,
                type: "Mobile Number"
              },
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (submit) {});
          } // public onFileChanged(event) {
          //   this.selectedFiles = event.target.files[0];
          //   let reader = new FileReader();
          //   reader.readAsDataURL(event.target.files[0]);
          //   reader.onload = (event2) => {
          //     this.imgUrl = reader.result;
          //     this.fun(event.target.files[0], this.selectedFiles);
          //   };
          // }

        }, {
          key: "onFileChanged",
          value: function onFileChanged(event) {
            var _this17 = this;

            this.profilePicture = event.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);

            reader.onload = function (event2) {
              // this.imgUrl = reader.result;
              //this.fun(event.target.files[0], this.profilePicture);
              //  this.image = reader.result;
              _this17.imageURL = reader.result; // console.log("file ", reader);
            }; // console.log(this.profilePicture);

          }
        }, {
          key: "fun",
          value: function fun(event, url) {
            var uploadData = new FormData();
            var data = {
              customerId: this.customerId,
              documentName: "Profile Image",
              documentType: "1",
              fileType: event.type,
              fileName: event.name,
              verificationType: "KYC verification"
            };
            uploadData.append("data", JSON.stringify(data));
            uploadData.append("file", url);
            this.api.upload(uploadData).subscribe(function (res) {// console.log(res);
            });
          }
        }, {
          key: "tabClick",
          value: function tabClick(event) {
            var tab = event.tab.textLabel;

            if (tab === "Documents Upload") {
              this.router.navigateByUrl("/others/documents");
            }

            if (tab === "verification") {
              this.router.navigateByUrl("/others/verification");
            }

            if (tab === "Basic Information") {
              this.router.navigateByUrl("/others/kyc");
            }
          }
        }, {
          key: "onNext",
          value: function onNext() {
            var _this18 = this;

            var phoneNumber = this.kycVerificationForm.value.phoneNumber;

            if (!this.cifFetch) {
              this.api.fetchCustomerDetails(phoneNumber).subscribe(function (res) {
                if (res != null) {
                  _this18.dialogService.phoneNumberDetailsDialogue(res).subscribe(function (response) {
                    if (response == "Yes") {
                      _this18.nextEnableFunction();
                    }
                  });
                } else {
                  _this18.nextEnableFunction();
                }
              });
            } else {
              this.nextEnableFunction();
            }
          }
        }, {
          key: "nextEnableFunction",
          value: function nextEnableFunction() {
            var _this19 = this;

            // console.log(this.dataBack)
            // console.log(this.urlB)
            this.api.setOCR({
              namePancard: this.namePancard,
              dob: this.dob,
              panNumber: this.panNumber,
              imageOCR: this.url,
              imageOCRBack: this.urlback,
              address: this.address
            }); // console.log("Next button");

            var dateSendingToServer = new _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"]('en-US').transform(this.kycVerificationForm.value.dateOfBirth, 'yyyy-MMM-dd');

            if (this.kycVerificationForm.invalid) {
              return;
            }

            var userAddress = [];
            userAddress.push(this.kycVerificationForm.value.communicationAddress);

            if (this.kycVerificationForm.value.permanentAddress) {
              userAddress.push(this.kycVerificationForm.value.permanentAddress);
            }

            var payload = {
              cifNumber: this.kycVerificationForm.value.cifNumber,
              prefix: this.kycVerificationForm.value.prefix,
              primaryEmailAdress: this.kycVerificationForm.value.primaryEmailAdress,
              phoneNumber: this.kycVerificationForm.value.phoneNumber,
              firstName: this.kycVerificationForm.value.firstName,
              lastName: this.kycVerificationForm.value.lastName,
              middleName: this.kycVerificationForm.value.middleName,
              customer_id: this.kycVerificationForm.value.customer_id,
              gender: this.kycVerificationForm.value.gender,
              dateOfBirth: dateSendingToServer,
              maritalStatus: this.kycVerificationForm.value.maritalStatus,
              nationality: this.kycVerificationForm.value.nationality,
              userAddress: userAddress,
              verificationType: 'KYC',
              kycSubmit: false
            };
            console.log(payload, " :: Payload");
            console.log(this.profilePicture);
            this.api.kycScreenBasicinfo(payload).subscribe(function (resp) {
              console.log(resp, "Next response");
              console.log("resp after saving ", resp);
              _this19.id = resp.cifNumber;

              if (_this19.uploadDone) {
                if (_this19.dataFront != undefined) {
                  _this19.uploadFrontSide(_this19.id);

                  _this19.uploadDone = false;
                }

                if (_this19.dataBack != undefined) {
                  _this19.uploadBackSide(_this19.id);

                  _this19.uploadDone = false;
                }
              }

              _this19.ls.setItem("cardCustomer", resp.firstName + ' ' + resp.lastName);

              console.log(resp.firstName, '', resp.lastName);
              _this19.name = resp.firstName + ' ' + resp.lastName;
              console.log(_this19.name);

              _this19.api.setName({
                name: _this19.name,
                customerId: resp.customerId,
                cifNumber: resp.cifNumber
              });

              _this19.snack.open("Basic Information Details Saved!", "OK", {
                duration: 4000,
                verticalPosition: "top",
                horizontalPosition: "right"
              });

              _this19.basicInfoSavedAlready = true; // this.kycVerificationForm.reset();
              // 

              sessionStorage.setItem('customer_id', resp.customerId);
              localStorage.setItem('customer_id', resp.customerId);
              sessionStorage.setItem('kyc_reference', resp.kycReference);

              _this19.kycRef(resp.kycReference);

              console.log("resp.customerId::", resp.customerId);
              console.log("(this.profilePicture::", _this19.profilePicture);

              if (_this19.profilePicture) {
                // console.log(this.profilePicture)
                var profileUpload = {};
                profileUpload.documentName = "Profile";
                profileUpload.documentType = 1;
                profileUpload.fileType = _this19.profilePicture.type;
                profileUpload.fileName = _this19.profilePicture.name;
                profileUpload.customerId = resp.customerId;
                console.log(profileUpload);
                var uploadData = new FormData();
                uploadData.append('data', JSON.stringify(profileUpload));
                uploadData.append('file', _this19.profilePicture);

                _this19.api.uploadDocument(uploadData).subscribe(function (response) {
                  console.log(response);

                  _this19.next();
                }, function (err) {
                  console.log("error", err);
                });
              }

              _this19.next();
            });
          }
        }, {
          key: "uploadBackSide",
          value: function uploadBackSide(id) {
            var _this20 = this;

            if (this.dataBack.documentName != undefined) {
              this.dataBack.customerId = id;
              console.log(this.dataBack);
              console.log(this.urlB);
              var uploadData = new FormData();
              uploadData.append("data", JSON.stringify(this.dataBack));
              uploadData.append("file", this.urlB);
              this.api.upload(uploadData).subscribe(function (res) {
                console.log("resp after uploading file", res); // this.kycVerificationForm1.get("upload").patchValue(true);

                if (res.body) {
                  _this20.snack.open("Document Uploaded!", "OK", {
                    duration: 4000,
                    verticalPosition: "top",
                    horizontalPosition: "right"
                  });
                }
              }, function (error) {
                if (error.status == 201) {
                  console.log("in err");
                  _this20.backSideUploaded = true;
                }

                _this20.kycVerificationForm1.get("upload").patchValue(true);

                _this20.snack.open("Document Uploaded!", "OK", {
                  duration: 4000,
                  verticalPosition: "top",
                  horizontalPosition: "right"
                });
              });
            } else {
              return null;
            }
          }
        }, {
          key: "uploadFrontSide",
          value: function uploadFrontSide(id) {
            var _this21 = this;

            console.log(this.dataFront);

            if (this.dataFront.documentName != undefined) {
              this.dataFront.customerId = id;
              console.log(this.dataFront);
              console.log(this.urlF);
              var uploadData = new FormData();
              uploadData.append("data", JSON.stringify(this.dataFront));
              uploadData.append("file", this.urlF);
              this.api.upload(uploadData).subscribe(function (res) {
                console.log("resp after uploading file", res); // this.kycVerificationForm1.get("upload").patchValue(true);

                if (res.body) {
                  _this21.snack.open("Document Uploaded!", "OK", {
                    duration: 4000,
                    verticalPosition: "top",
                    horizontalPosition: "right"
                  });
                }
              }, function (error) {
                if (error.status == 201) {
                  console.log("in err");
                  _this21.frontSideUploaded = true;
                }

                _this21.kycVerificationForm1.get("upload").patchValue(true);

                _this21.snack.open("Document Uploaded!", "OK", {
                  duration: 4000,
                  verticalPosition: "top",
                  horizontalPosition: "right"
                });
              });
            } else {
              return null;
            }
          }
        }, {
          key: "kycRef",
          value: function kycRef(kycReference) {
            this.api.setKycRef({
              kycReference: kycReference
            });
          }
        }, {
          key: "keyPressAlphanumeric",
          value: function keyPressAlphanumeric(event) {
            var inp = String.fromCharCode(event.keyCode);

            if (/^[a-zA-Z0-9_ ]*$/.test(inp)) {
              return true;
            } else {
              event.preventDefault();
              return false;
            }
          }
        }, {
          key: "next",
          value: function next() {
            // this.kycVerificationForm.reset();
            this.api.setIndex({
              index: 1
            });
            this.api.setFinishFlag({
              finishFlag: false
            });
            var customerId = localStorage.getItem('customer_id');
            console.log("custId::", localStorage.getItem('customer_id'));
            localStorage.setItem('page_id', '1');
            this.shareDataService.shareCustomerId(customerId);
          }
        }, {
          key: "resetData",
          value: function resetData() {
            localStorage.removeItem('customer_id');
            localStorage.removeItem('currentKycTabIndex');
            this.kycVerificationForm.reset();
            this.imageURL = "not_available";
          }
        }, {
          key: "getAllCustomerDetails",
          value: function getAllCustomerDetails(cifNumber) {
            var _this22 = this;

            cifNumber ? this.cifNumber = cifNumber : '';
            this.loading = true;
            this.image = "", this.imgUrl = "";
            console.log("CIF---------", event); // let cifNumber = this.kycVerificationForm.value.cifNumber;
            // console.log("CIF",cifNumber);

            this.api.gettingCustomerDetails(this.cifNumber).subscribe(function (resp) {
              _this22.loading = false;
              console.log("All Customer Details", resp);

              _this22.api.sendKycDataFetchedInfo('DATA FETCH');

              if (resp != null || resp != undefined) {
                _this22.customerInformation = resp.customerInfoList[0];

                if (resp.customerInfoList[0].middleName === undefined || resp.customerInfoList[0].middleName === null) {
                  resp.customerInfoList[0].middleName = null;
                }

                resp.customerInfoList[0].dateOfBirth = new Date(resp.customerInfoList[0].dateOfBirth);
                console.log(resp.customerInfoList[0].customerId);
                localStorage.setItem("customerId", resp.customerInfoList[0].customerId);
                sessionStorage.setItem('cust_status', resp.customerInfoList[0].customerAdditionalInfo.kycStatus); // localStorage.setItem("customerStatus", resp.customerInfoList[0].customerAdditionalInfo.kycStatus);
                // this.api.getImage(resp.customerInfoList[0].customerId).subscribe((data: any) => {
                //   console.log("data:", data);
                //   let profileImage = data.profileImage;
                //   this.cdr.markForCheck();
                //   if (profileImage) {
                //     this.profileImageExist = true;
                //   }
                //   let objectURL = 'data:image/jpeg;base64,' + profileImage.fileData;
                //   this.image = this.sanitizer.bypassSecurityTrustUrl(objectURL)
                //   this.cdr.markForCheck();
                // })

                _this22.getProfileImage(resp.customerInfoList[0].customerId, 1);
              } else {
                _this22.snack.open('Invalid CIF Number', 'OK', {
                  duration: 4000,
                  verticalPosition: 'top',
                  horizontalPosition: 'right'
                }); // this.accountForm.get('cifNumber').patchValue("");


                return;
              }

              _this22.verificationInfo = resp;

              if (resp.customerInfoList[0].custStatus == "REJECTED") {
                _this22.snack.open("Data is rejected for this CIF Number :" + _this22.cifNumber, "", {
                  duration: 4000,
                  verticalPosition: 'top',
                  horizontalPosition: 'right'
                });

                _this22.kycVerificationForm.reset();

                _this22.ngOnInit();

                console.log("err:", resp);
                return;
              }

              if (resp == null) {
                _this22.snack.open("Data is not found for CIF Number :" + _this22.cifNumber, "", {
                  duration: 4000,
                  verticalPosition: 'top',
                  horizontalPosition: 'right'
                });

                _this22.kycVerificationForm.reset();

                _this22.ngOnInit();

                console.log("err:", resp);
                return;
              }

              if (resp && resp[0]) {
                console.log("All Customer Details", resp.customerInfoList[0].customerId);
                sessionStorage.setItem('customer_id', resp[0].customerId);
              }

              if (resp) {
                console.log("Remove");

                _this22.ls.removeItem('EDIT-CIFNUMBER');
              }

              _this22.setCustVerificationValues(resp);
            }, function (err) {}); // this.ls.removeItem('EDIT-CIFNUMBER');
          }
        }, {
          key: "convertDate",
          value: function convertDate(value) {
            var date = moment__WEBPACK_IMPORTED_MODULE_9__(value).format("YYYY-MM-DD"); // ISO 8601 format
            // let date = moment(value).format('YYYY-MMM-DD');

            if (date) return date;
          }
        }, {
          key: "getOtp",
          value: function getOtp(email) {
            this.otpmodel.source = "customer";
            this.otpmodel.source_key = "email";
            this.otpmodel.source_value = email.primaryEmailAdress;
            this.api.getOtp(this.otpmodel).subscribe(function (resp) {});
            this.openDialogEmail(email.primaryEmailAdress);
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
          key: "openDialogEmail",
          value: function openDialogEmail(email) {
            var dialogRef = this.dialog.open(_fingerprint_authentication_fingerprint_authentication_component__WEBPACK_IMPORTED_MODULE_7__["FingerprintAuthenticationComponent"], {
              data: {
                number: email,
                type: "email id"
              },
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (submit) {});
          }
        }, {
          key: "toMakeButton",
          value: function toMakeButton() {
            document.getElementById("fileId").click();
          }
        }, {
          key: "assignVerify",
          value: function assignVerify(resp) {
            if (resp.type == 'mobile') {
              this.verify = 'verified';
            }

            if (resp.type == 'email') {
              this.emailVerify = 'verified';
            }
          }
        }, {
          key: "isAllSameDigit",
          value: function isAllSameDigit(event, zipIndex) {
            this.zipIndex = zipIndex;
            var count = 0,
                number = event.target.value;

            if (number != '') {
              for (var i = 0; i < number.length; i++) {
                if (0 == number[i]) {
                  count++;
                }
              }

              if (count == number.length) {
                console.log('if loop');
                this.isAllSameDigitVal = true;
              } else {
                this.isAllSameDigitVal = false;
              }
            } else {
              this.isAllSameDigitVal = false;
            }
          }
        }]);

        return KycVerificationComponent;
      }();

      KycVerificationComponent.ɵfac = function KycVerificationComponent_Factory(t) {
        return new (t || KycVerificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_15__["AppLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_18__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_11__["FingerPrintCaptureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_14__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_16__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_application_entry_stage_service__WEBPACK_IMPORTED_MODULE_19__["ApplicationEntryStageService"]));
      };

      KycVerificationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: KycVerificationComponent,
        selectors: [["app-kyc-verification"]],
        viewQuery: function KycVerificationComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.profileFile = _t.first);
          }
        },
        outputs: {
          settingallCustInfo: "settingallCustInfo"
        },
        decls: 13,
        vars: 8,
        consts: [[3, "formGroup"], ["formArrayName", "documentsList", "class", "parentMatCardContent", 4, "ngFor", "ngForOf"], [1, "m-333", 2, "padding-left", "3.9%", "padding-right", "3.2%"], [1, "marginTopKyc"], [3, "formGroup", 4, "ngIf"], [1, "button1"], [1, "BackButton", 3, "click"], ["id", "kychide", 1, "hide", 3, "click"], ["kychide", ""], ["mat-stroked-button", "", "id", "n", 3, "ngClass", "disabled", "click"], ["formArrayName", "documentsList", 1, "parentMatCardContent"], ["fxLayout", "row", "fxLayoutGap", "25px", 1, "aadharForm", 3, "formGroupName"], ["fxFlex", "30%", "fxFlex.xs", "100%", 1, "mainAadhar"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "5px"], [1, "pb-1"], [1, "toggleGroup1"], ["color", "primary", "class", "toggleGroup", 3, "checked", "ngStyle", "value", "click", 4, "ngFor", "ngForOf"], ["fxLayout", "row", "fxLayoutAlign", "start center", "fxLayoutGap", "20px"], [1, "aadharDoc"], [1, "widthCard", "inputMatcard", "width", 3, "ngClass"], ["formControlName", "documentName", 3, "valueChange"], ["value", ""], ["value", "Aadhar card"], ["fxFlex", "50%", "fxFlex.xs", "100%", 4, "ngIf"], ["class", "aadharUpload", 4, "ngIf"], ["color", "primary", 1, "toggleGroup", 3, "checked", "ngStyle", "value", "click"], ["fxFlex", "50%", "fxFlex.xs", "100%"], [1, "inputMatcard", 3, "ngClass"], ["matInput", "", "formControlName", "docNum", "type", "number", "name", "Document Number", "maxLength", "12", "placeholder", "Document Number", 1, "width"], ["fxFlex", "50%", "fxFlex.xs", "50%", "class", "aadharDocNum", 4, "ngIf"], ["fxFlex", "50%", "fxFlex.xs", "50%", 1, "aadharDocNum"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "aadharFetchDiv"], ["class", "aadharFetch", 3, "routerLink", "click", 4, "ngIf"], [1, "aadharFetch", 3, "routerLink", "click"], [1, "aadharUpload"], ["mat-raised-button", "", 3, "disabled", "click"], ["type", "file", "name", "fileData1", "formControlName", "fileData1", 1, "aadharInput", 3, "change"], ["fileData1", ""], [1, "aadharInput1"], ["class", "aadharCheck", 4, "ngIf"], ["type", "file", "name", "fileData2", "formControlName", "fileData2", 1, "aadharInput", 3, "change"], ["fileData2", ""], [1, "aadharCheck"], [1, "verificationHead"], [1, "line"], [1, "formSectionContainer"], [1, "formLeft"], ["mat-icon-button", "", 2, "float", "right", "padding-top", "8px", "padding-left", "30px", "cursor", "pointer"], ["type", "file", "input", "", "type", "file", "accept", "image/png, image/gif, image/jpg, image/jpeg", 1, "changeInput", 3, "change"], ["profileFile", ""], ["color", "primary"], [4, "ngIf", "ngIfElse"], ["showAvatar", ""], [2, "color", "red", "margin-left", "94%", "cursor", "pointer", 3, "click"], ["fxLayout", "row", "fxLayoutGap", "10px", "fxLayoutAlign", "start center"], ["type", "input", 1, "widthCard", "inputMatcard"], ["matInput", "", "formControlName", "cifNumber", "type", "number", "min", "0", "oninput", "validity.valid||(value='');", "name", "cifNumber", "value", "cifNumber", 1, "alignment", 3, "formControl", "matAutocomplete", "keyup"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], [1, "fechButtonDiv"], ["class", "fetchButton", 3, "click", 4, "ngIf"], ["class", "fetchButton", 3, "diameter", 4, "ngIf"], [1, "fechButtonDiv", 3, "hidden"], [1, "fetchButton", 3, "click"], ["id", "formfetch", 1, "form"], ["id", "fech", 1, "flex-grow-1"], [1, "flex-grow-2", 2, "margin-left", "-1px"], [1, "widthCard", "inputMatcard", 3, "ngClass"], ["formControlName", "prefix"], [4, "ngIf"], [1, "flex-grow-1"], [1, "inputMatName", 3, "ngClass"], ["matInput", "", "formControlName", "firstName", "autocomplete", "off", "type", "text", "name", "lastName", "value", "updateUserInfo.firstName", 1, "alignment", 3, "keypress"], [1, "inputMatNew"], ["matInput", "", "formControlName", "middleName", "type", "text", "name", "middleName", 1, "alignment", 3, "keypress"], [1, "inputMatLastName", 3, "ngClass"], ["matInput", "", "formControlName", "lastName", "autocomplete", "off", "type", "text", "name", "lastName", "value", "updateUserInfo.lastName", 1, "alignment", 3, "keypress"], [1, "form"], [1, "inputMatLastName", 2, "height", "48px", 3, "ngClass"], ["matInput", "", "formControlName", "dateOfBirth", "id", "dob", "name", "dateOfBirth", "readonly", "", "value", "dateOfBirth", 1, "alignment", 3, "matDatepicker", "max"], ["fxFlex", "8%", "id", "toggle"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "inputMatcardMarritial", 3, "ngClass"], ["formControlName", "maritalStatus"], [1, "inputGender", 3, "ngClass"], ["formControlName", "gender", 3, "selectionChange"], ["class", "help-block", 4, "ngIf"], ["formControlName", "nationality"], ["fxLayout", "row", 1, "inputMatcardMail", 3, "ngClass"], ["matInput", "", "formControlName", "primaryEmailAdress", "autocomplete", "off", "type", "text", "name", "primaryEmailAdress"], ["class", "verification", 3, "click", 4, "ngIf"], ["fxLayout", "row", 1, "inputMatcard", 3, "ngClass"], ["matInput", "", "name", "phoneNumber", "autocomplete", "off", "maxLength", "10", "formControlName", "phoneNumber", 3, "keypress"], ["fxLayout", "row"], ["fxFlex", "100"], ["id", "bill"], [1, "billName"], ["formControlName", "isAddressSame"], ["class", "ml-8", "color", "primary", 3, "checked", "value", "change", 4, "ngFor", "ngForOf"], ["fxLayoutGap", "10px", "fxLayout", "row wrap", 1, "mt-32", "communicationForm"], ["fxFlex", "", "id", "communicationBlockForm", 1, "addressGrid"], [1, "spanDiv"], [1, "span"], [1, "divider"], ["formGroupName", "communicationAddress"], ["fxLayout", "row", "fxLayoutGap", "10px", "fxLayoutAlign", "space-between center"], ["fxFlex", "50%"], [1, "address-card", "inputMatcard3", 3, "ngClass"], ["matInput", "", "formControlName", "address1", "autocomplete", "off", "maxlength", "50", "name", "address1", 1, "full-width", 3, "keypress"], ["matInput", "", "formControlName", "address2", "autocomplete", "off", "maxlength", "50", "name", "address2", 1, "full-width", 3, "keypress"], ["formControlName", "residenceType"], ["formControlName", "country", 3, "selectionChange"], ["name", "state", "formControlName", "state", 3, "selectionChange"], ["name", "city", "formControlName", "city"], ["matInput", "", "formControlName", "zipCode", "autocomplete", "off", "onlyNumber", "", "type", "text", "matInput", "", "minLength", "5", "maxLength", "10", "name", "zipCode", 3, "keyup"], ["style", "color: #E74C3C;", 4, "ngIf"], ["fxFlex", "", "class", "addressGrid", "id", "communicationBlockForm", 4, "ngIf"], ["alt", "", 1, "formImg", 3, "src"], [3, "value"], ["fxLayout", "row wrap", 2, "margin-top", "20px"], ["fxFlex", " 100"], ["mat-card-avatar", "", "class", "example-header-image-dropdown", "fxFlex", "10", 4, "ngIf"], ["mat-card-avatar", "", "fxFlex", "10", 4, "ngIf"], ["fxFlex", "80"], [2, "margin-bottom", "0px"], [2, "margin-top", "0px"], ["mat-card-avatar", "", "fxFlex", "10", 1, "example-header-image-dropdown"], ["align", "center", 2, "margin-top", "5px", "font-size", "large"], ["mat-card-avatar", "", "fxFlex", "10"], ["matListAvatar", "", "align", "center", "alt", "...", 2, "border-radius", "50%", "height", "85%", "margin-right", "20px", "width", "90%", "margin-bottom", "50px", 3, "src"], [1, "fetchButton", 3, "diameter"], [1, "help-block"], [1, "verification", 3, "click"], ["color", "primary", 1, "ml-8", 3, "checked", "value", "change"], [2, "color", "#E74C3C"], ["formGroupName", "permanentAddress"], ["matInput", "", "formControlName", "address1", "maxlength", "50", "name", "address1", 1, "full-width", 3, "keypress"], ["fxFlex", "50"], ["matInput", "", "formControlName", "address2", "maxlength", "50", "name", "address2", 1, "full-width", 3, "keypress"], ["matInput", "", "formControlName", "zipCode", "onlyNumber", "", "type", "text", "matInput", "", "minLength", "6", "maxLength", "10", "name", "zipCode", 3, "keyup"]],
        template: function KycVerificationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, KycVerificationComponent_mat_card_content_1_Template, 19, 7, "mat-card-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, KycVerificationComponent_form_4_Template, 203, 93, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycVerificationComponent_Template_span_click_6_listener() {
              return ctx.previousStep();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "button", 7, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycVerificationComponent_Template_button_click_8_listener() {
              return ctx.resetForm();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "-");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycVerificationComponent_Template_button_click_11_listener() {
              return ctx.onNext();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Next");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.kycVerificationForm1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.kycVerificationForm1.get("documentsList")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.kycVerificationForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c3, !(ctx.kycVerificationForm.invalid || !ctx.prefixFlag), ctx.kycVerificationForm.invalid || !ctx.prefixFlag))("disabled", ctx.kycVerificationForm.invalid || !ctx.prefixFlag);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_21__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_22__["DefaultClassDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArrayName"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupName"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatHint"], _angular_material_select__WEBPACK_IMPORTED_MODULE_25__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_26__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_22__["DefaultStyleDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_27__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_28__["MatIcon"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_29__["MatAutocomplete"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_30__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_30__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_30__["MatDatepicker"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioGroup"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_32__["MatDivider"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _shared_directives_only_number_directive__WEBPACK_IMPORTED_MODULE_33__["OnlyNumberDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_20__["MatCardAvatar"], _angular_material_list__WEBPACK_IMPORTED_MODULE_34__["MatListAvatarCssMatStyler"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_35__["MatSpinner"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_24__["MatError"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_31__["MatRadioButton"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["UpperCasePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["SlicePipe"]],
        styles: [".breadcrumb[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 40px;\n  width: 100%;\n  background-color: white;\n}\n\n.head[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.fetchButton[_ngcontent-%COMP%] {\n  color: #456EFE;\n  font-family: 'Montserrat';\n  font-size: 12px;\n  text-decoration: underline;\n  padding-left: 10px;\n  padding-top: 15px;\n  cursor: pointer;\n  margin-right: 40px;\n}\n\nmat-hint[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.app-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.margin[_ngcontent-%COMP%] {\n  margin-left: -10%;\n}\n\n#fech[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.fechButtonDiv[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n#formfetch[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 25% 25% 25% 25%;\n}\n\n.basic-container[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.grid[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(50%, 1fr));\n}\n\n.main-head[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  padding-top: 16px;\n  padding-bottom: 0px;\n}\n\nmat-tab-group[_ngcontent-%COMP%] {\n  padding-left: 2%;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  height: 60vh;\n  border: 1px solid black;\n  padding: 10px 5px;\n  box-sizing: border-box;\n}\n\n.flex-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  box-sizing: border-box;\n}\n\n.flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2), .flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  margin-top: 5px;\n}\n\n.flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  flex: 1;\n}\n\n.formField1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 50px;\n}\n\n.formField[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 120px;\n}\n\n  .mat-tooltip {\n  font-size: 15px;\n  white-space: pre-wrap;\n  color: gray !important;\n  background-color: rgba(255, 255, 255, 0.9);\n  border: 1px solid gray;\n  max-width: unset !important;\n}\n\n.formField2[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 100%;\n}\n\n.inputMatcard[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputGender[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatName[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatNew[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatLastName[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardDoc[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardMail[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardMailAdd[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardMarritial[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardPrefix[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcard3[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardAdd[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcard4[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  max-width: 208px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcard1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 12px;\n}\n\n.inputMatcard2[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  width: 20px;\n}\n\n.mat-form-field-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 0px;\n}\n\n.inputClass[_ngcontent-%COMP%] {\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n  box-shadow: 0 3pt 6pt #00000029;\n  font-weight: bolder;\n}\n\n[_nghost-%COMP%]     div.mat-form-field-outline-start {\n  border-color: 0 !important;\n  border-width: 0px !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field-outline-gap {\n  border-color: 0 !important;\n  border-width: 0px !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field-outline-end {\n  border-color: 0 !important;\n  border-width: 0px !important;\n}\n\n#check[_ngcontent-%COMP%] {\n  -webkit-appearance: outline;\n     -moz-appearance: outline;\n          appearance: outline;\n  width: 150px;\n}\n\n.aadharDocNum[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n.aadharFetchDiv[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding-left: 0;\n}\n\n.mainAadhar[_ngcontent-%COMP%] {\n  margin-top: 1%;\n}\n\n.aadharInput[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.marginTopKyc[_ngcontent-%COMP%] {\n  margin-top: -1.2%;\n}\n\n.aadharInput1[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: 3%;\n  text-align: center;\n}\n\n.toggleGroup1[_ngcontent-%COMP%] {\n  font-size: 10px;\n  height: 40px;\n  margin-top: 4%;\n  cursor: pointer;\n}\n\n.aadharForm[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  background-color: white;\n  margin-right: 61px;\n  margin-left: 70px;\n  padding-left: 44px;\n}\n\n.toggleGroup[_ngcontent-%COMP%] {\n  padding: 10px 30px 10px 25px;\n  border: 1px solid lightgrey;\n  margin-top: 1%;\n}\n\n.toggleGroup1[_ngcontent-%COMP%] {\n  margin-top: 2%;\n}\n\n#dateOf[_ngcontent-%COMP%] {\n  height: 48px;\n}\n\n.aadharCheck[_ngcontent-%COMP%] {\n  color: green;\n  margin-left: -8%;\n  margin-top: 5%;\n}\n\n.aadharUpload[_ngcontent-%COMP%] {\n  height: 40px;\n  display: flex;\n  gap: 20px;\n}\n\n.aadharDoc[_ngcontent-%COMP%] {\n  margin-right: 30px !important;\n  padding-top: 10px !important;\n}\n\n.border[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-top: -0.5%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.form13[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.form1[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 50px;\n  flex-wrap: wrap;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  background-color: white;\n  align-items: center;\n}\n\n.BackButton[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -7.7%;\n  width: 150px;\n  letter-spacing: 0px;\n  color: #5D5D5D;\n  cursor: pointer;\n  font-size: 16px !important;\n}\n\n.matCard[_ngcontent-%COMP%] {\n  max-width: 1600px;\n  align-items: center;\n  justify-content: center;\n  margin-left: 15%;\n  margin-right: 15%;\n  margin-top: 10px;\n  margin: 10px auto 0 auto;\n  margin-bottom: 3%;\n}\n\n.changeInput[_ngcontent-%COMP%] {\n  opacity: 0.0;\n  position: absolute;\n  top: 0;\n  left: 15px;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\n.changeDiv[_ngcontent-%COMP%] {\n  position: relative;\n  height: 30px;\n  line-height: 30px;\n}\n\n.mat-form-field-flex[_ngcontent-%COMP%] {\n  box-shadow: 0 3pt 6pt #00000029;\n}\n\n.flex-grow-1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  gap: 10px;\n}\n\n.flex-grow-2[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  gap: 10px;\n  margin-left: -10%;\n}\n\n.alignment[_ngcontent-%COMP%] {\n  border-style: none !important;\n  outline: none;\n}\n\n#dob[_ngcontent-%COMP%] {\n  width: 92% !important;\n  float: right;\n}\n\n#toggle[_ngcontent-%COMP%] {\n  margin-top: -2%;\n}\n\n#max-width[_ngcontent-%COMP%] {\n  max-width: 150px;\n}\n\n#drop-max-width[_ngcontent-%COMP%] {\n  width: 190px;\n}\n\n#radio[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\nradioGroup[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n#nationality[_ngcontent-%COMP%] {\n  width: 210px;\n}\n\nmat-label[_ngcontent-%COMP%] {\n  margin-right: 6%;\n}\n\n.change[_ngcontent-%COMP%] {\n  color: #2680EB;\n  text-align: center;\n  text-decoration: underline;\n}\n\n.next12[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -12.5%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\n.next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -12.5%;\n  width: 150px;\n  \n  background: #6C6C6C 0% 0% no-repeat padding-box;\n  border-radius: 24px;\n  opacity: 0.38 !important;\n  color: white;\n}\n\n.button1[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 11%;\n  padding-right: 14%;\n  background-color: white;\n  align-items: center;\n}\n\n.Next1[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.line[_ngcontent-%COMP%] {\n  border: thick;\n  \n  \n  border-style: solid;\n  \n  border-block-width: unset;\n  color: blue;\n  color: #6988f6;\n  width: 40px;\n  border-radius: 5px;\n  margin: initial;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 80%;\n  color: #374664;\n  font-weight: 600;\n}\n\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus {\n  background: red;\n}\n\n.mat-tab-label-active[_ngcontent-%COMP%] {\n  color: green;\n}\n\n  .mat-tab-label-active {\n  color: #6988f6 !important;\n}\n\n.verification[_ngcontent-%COMP%] {\n  float: right;\n  color: #2a59e7;\n}\n\n  .mat-tab-group.mat-primary .mat-ink-bar {\n  background-color: #6988f6 !important;\n  height: 4px;\n}\n\nmat-tab-label[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.line[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.text[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nfigure[_ngcontent-%COMP%] {\n  display: block;\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  font-size: 25px;\n  text-align: center;\n  margin-right: 10px;\n  background: #fff;\n  line-height: 1.7em;\n}\n\nfigure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 30px;\n  height: auto;\n}\n\n.formSectionContainer[_ngcontent-%COMP%] {\n  gap: 40px;\n  display: grid;\n  grid-template-columns: 200px auto;\n}\n\n@media (max-width: 768px) {\n  .formSectionContainer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n\n.formImg[_ngcontent-%COMP%] {\n  height: 200px !important;\n  width: 200px !important;\n  background-color: whitesmoke;\n  border-radius: 10%;\n}\n\n.dropDown[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: #4286f4 !important;\n}\n\n.mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%] {\n  color: #4286f4;\n  background-color: #4286f4;\n}\n\n.Upload[_ngcontent-%COMP%] {\n  vertical-align: c;\n  align-self: center;\n  margin-top: 20px;\n  font-size: 12px;\n  text-decoration: underline;\n  color: #2680EB;\n}\n\n#row[_ngcontent-%COMP%] {\n  font-size: 9px;\n  opacity: 100%;\n  color: #2680EB;\n}\n\n.span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  width: 30% !important;\n}\n\n.span8[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  width: 60% !important;\n}\n\n.span12[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  width: 10% !important;\n}\n\n.spanDiv[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 1%;\n  margin-top: 2%;\n}\n\n#bill[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-right: 10px;\n  margin-top: 10px;\n  margin-bottom: -25px;\n}\n\n.billName[_ngcontent-%COMP%] {\n  display: inline;\n  margin-right: 20px;\n}\n\n.margin[_ngcontent-%COMP%] {\n  margin-right: 0px;\n}\n\n.divider[_ngcontent-%COMP%] {\n  position: unset !important;\n  left: 200px !important;\n  align-self: center !important;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n\n.flex-basis-50[_ngcontent-%COMP%] {\n  flex-basis: 50%;\n}\n\n.gap-20[_ngcontent-%COMP%] {\n  gap: 10px;\n}\n\n.addressContainer[_ngcontent-%COMP%] {\n  padding: 0 20px 0 0 !important;\n}\n\n.address-card[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.inline-block[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.space-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n@media (min-width: 576px) {\n  .addressGrid[_ngcontent-%COMP%] {\n    gap: 20px;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n.addressGridInner[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n\n.flex-grow-1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.gap-20[_ngcontent-%COMP%] {\n  gap: 20px;\n}\n\n.flex-column[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n\n.height-auto[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.align-self-flex-end[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n\n.align-self-flex-start[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n\n.width-fit-content[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.m-8[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n#addressBlock[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n\n#communicationDivider[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n}\n\n.communicationForm[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n\n#communicationBlockForm[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  border: 1px solid lightgrey;\n  padding: 20px;\n}\n\n#DocumentForm[_ngcontent-%COMP%] {\n  width: 650px;\n  border: 1px solid lightgrey;\n  padding: 10px;\n}\n\n#DocumentForm1[_ngcontent-%COMP%] {\n  width: 650px;\n  border: 1px solid lightgrey;\n  padding: 10px;\n  padding-bottom: 50px;\n}\n\n#docMainDivider[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n\n#dividerInside[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n}\n\n.errbd[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n\n.hide[_ngcontent-%COMP%] {\n  color: white;\n  display: none;\n}\n\ninput[type=\"number\"][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=\"number\"][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\ninput[type=number][_ngcontent-%COMP%] {\n  -moz-appearance: textfield;\n}\n\n#check[_ngcontent-%COMP%] {\n  -webkit-appearance: outline;\n     -moz-appearance: outline;\n          appearance: outline;\n}\n\n.aadharDocNum[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n.width[_ngcontent-%COMP%] {\n  width: 150px !important;\n}\n\n.aadharFetch[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  color: #456EFE;\n  font-size: small;\n  align-self: flex-end;\n  padding-top: 54px;\n  padding-left: 0;\n}\n\n.mat-form-field[_ngcontent-%COMP%] {\n  margin-top: 8%;\n}\n\n  .cdk-overlay-pane {\n  min-width: 270px !important;\n  padding: 7px 0;\n}\n\n  .mat-card-avatar {\n  max-width: 15% !important;\n}\n\n.example-header-image-dropdown[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 8px;\n  background-size: cover;\n  background-color: #AED6F1;\n  max-width: 15% !important;\n  width: 25px;\n  height: 35px;\n  border-radius: 50%;\n}\n\n.padding[_ngcontent-%COMP%] {\n  padding-bottom: 5px;\n  font-size: 15px !important;\n}\n\n.paddingButton[_ngcontent-%COMP%] {\n  padding-bottom: 10px !important;\n}\n\n.parentMatCardContent[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxca3ljLXZlcmlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFJQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7QUFEcEI7O0FBSUE7RUFDRSxlQUFlO0FBRGpCOztBQUlBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFEYjs7QUFPQTtFQUNFLGlCQUFpQjtBQUpuQjs7QUFNQTtFQUNBLGFBQWE7QUFIYjs7QUFLQTtFQUNFLGtCQUFrQjtBQUZwQjs7QUFJQTtFQUVFLGFBQWE7RUFDYixzQ0FBc0M7QUFGeEM7O0FBS0E7RUFDRSxZQUFZO0FBRmQ7O0FBS0E7RUFDRSxhQUFhO0FBRmY7O0FBS0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtEQUFrRDtBQUZwRDs7QUFLQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBRnJCOztBQUtBO0VBQ0UsZ0JBQWdCO0FBRmxCOztBQUtBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsc0JBQXNCO0FBRnhCOztBQUtBO0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtBQUh4Qjs7QUFNQTs7RUFFRSxlQUFlO0FBSGpCOztBQU1BO0VBQ0UsT0FBTztBQUhUOztBQVNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFOYjs7QUFTQTtFQUVFLFlBQVk7RUFDWixZQUFZO0FBUGQ7O0FBY0E7RUFDRSxlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QiwwQ0FBeUM7RUFDekMsc0JBQXFCO0VBQ3JCLDJCQUEyQjtBQVg3Qjs7QUFjQTtFQUVFLFlBQVk7RUFDWixXQUFXO0FBWmI7O0FBa0JBO0VBQ0UsWUFBWTtFQUVaLGVBQWU7RUFHZiwrQkFBK0I7RUFFL0Isc0JBQXNCO0VBR3RCLGdCQUFnQjtFQUNoQixhQUFhO0FBckJmOztBQTBCQTtFQUNFLFlBQVk7RUFFWixlQUFlO0VBR2YsK0JBQStCO0VBRS9CLHNCQUFzQjtFQUd0QixnQkFBZ0I7RUFDaEIsYUFBYTtBQTdCZjs7QUFrQ0E7RUFDRSxZQUFZO0VBRVosZUFBZTtFQUdmLCtCQUErQjtFQUUvQixzQkFBc0I7RUFHdEIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFyQ2Y7O0FBMENBO0VBQ0UsWUFBWTtFQUVaLGVBQWU7RUFHZiwrQkFBK0I7RUFFL0Isc0JBQXNCO0VBR3RCLGdCQUFnQjtFQUNoQixhQUFhO0FBN0NmOztBQWtEQTtFQUNFLFlBQVk7RUFFWixlQUFlO0VBR2YsK0JBQStCO0VBRS9CLHNCQUFzQjtFQUd0QixnQkFBZ0I7RUFDaEIsYUFBYTtBQXJEZjs7QUEyREE7RUFDRSxZQUFZO0VBRVosZUFBZTtFQUdmLCtCQUErQjtFQUUvQixzQkFBc0I7RUFHdEIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUE5RGY7O0FBbUVBO0VBQ0UsWUFBWTtFQUVaLGVBQWU7RUFHZiwrQkFBK0I7RUFFL0Isc0JBQXNCO0VBR3RCLGdCQUFnQjtFQUNoQixhQUFhO0FBdEVmOztBQTJFQTtFQUNFLFlBQVk7RUFFWixlQUFlO0VBR2YsK0JBQStCO0VBRS9CLHNCQUFzQjtFQUd0QixnQkFBZ0I7RUFDaEIsYUFBYTtBQTlFZjs7QUFtRkE7RUFDRSxZQUFZO0VBRVosZUFBZTtFQUdmLCtCQUErQjtFQUUvQixzQkFBc0I7RUFHdEIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUF0RmY7O0FBMkZBO0VBQ0UsWUFBWTtFQUVaLGVBQWU7RUFHZiwrQkFBK0I7RUFFL0Isc0JBQXNCO0VBR3RCLGdCQUFnQjtFQUNoQixhQUFhO0FBOUZmOztBQW1HQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBSWYsK0JBQStCO0VBRS9CLHNCQUFzQjtFQUd0QixnQkFBZ0I7RUFDaEIsYUFBYTtBQXRHZjs7QUEyR0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUlmLCtCQUErQjtFQUUvQixzQkFBc0I7RUFHdEIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUE5R2Y7O0FBbUhBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFHaEIsK0JBQStCO0VBRS9CLHNCQUFzQjtFQUd0QixnQkFBZ0I7RUFDaEIsYUFBYTtBQXJIZjs7QUE2SEE7RUFDRSxZQUFZO0VBSVosK0JBQStCO0VBRS9CLHNCQUFzQjtFQUd0QixnQkFBZ0I7RUFDaEIsYUFBYTtBQWhJZjs7QUFzSUE7RUFDRSxZQUFZO0VBSVosK0JBQStCO0VBRS9CLHNCQUFzQjtFQUd0QixnQkFBZ0I7RUFJaEIsV0FBVztBQTVJYjs7QUErSUE7RUFDRSxtQkFBbUI7QUE1SXJCOztBQStJQTtFQUdFLHdCQUF3QjtFQUN4QiwwQkFBMEI7RUFDMUIseUJBQXlCO0VBQ3pCLDJCQUEyQjtFQUMzQiwrQkFBK0I7RUFDL0IsbUJBQW1CO0FBOUlyQjs7QUFpSkE7RUFDRSwwQkFBMEI7RUFDMUIsNEJBQTRCO0FBOUk5Qjs7QUFpSkE7RUFDRSwwQkFBMEI7RUFDMUIsNEJBQTRCO0FBOUk5Qjs7QUFpSkE7RUFDRSwwQkFBMEI7RUFDMUIsNEJBQTRCO0FBOUk5Qjs7QUFnSkE7RUFDRSwyQkFBbUI7S0FBbkIsd0JBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixZQUFZO0FBN0lkOztBQStJQTtFQUNFLGtCQUFrQjtBQTVJcEI7O0FBOElBO0VBQ0UsZUFBZTtFQUNmLGVBQWU7QUEzSWpCOztBQTZJQTtFQUNFLGNBQWE7QUExSWY7O0FBNklBO0VBQ0UsYUFBYTtBQTFJZjs7QUFnSkE7RUFDRyxpQkFBaUI7QUE3SXBCOztBQStJQTtFQUNBLGVBQWU7RUFDWCxjQUFjO0VBRWQsa0JBQWtCO0FBN0l0Qjs7QUErSUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGNBQWM7RUFDZCxlQUFlO0FBNUlqQjs7QUE4SUE7RUFDRSw4QkFBOEI7RUFFOUIsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBNUlwQjs7QUE4SUE7RUFDRSw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBSzVCLGNBQWM7QUEvSWY7O0FBa0pBO0VBT0MsY0FBYztBQXJKZjs7QUF1SkE7RUFDRSxZQUFZO0FBcEpkOztBQXNKQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsY0FBYztBQW5KaEI7O0FBcUpBO0VBQ0UsWUFBVztFQUNYLGFBQWE7RUFDYixTQUFTO0FBbEpYOztBQXFKQTtFQUNFLDZCQUE2QjtFQUM3Qiw0QkFBNEI7QUFsSjlCOztBQW9KQTtFQUNFLFlBQVk7QUFqSmQ7O0FBb0pBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFHYixlQUFlO0VBQ2YsOEJBQThCO0FBbkpoQzs7QUFzSkE7RUFDRSxhQUFhO0VBR2IsZUFBZTtBQXJKakI7O0FBeUpBO0VBQ0UsYUFBYTtFQUViLFNBQVM7RUFDVCxlQUFlO0FBdkpqQjs7QUE0SkE7RUFDRSxhQUFhO0VBRWIsU0FBUztFQUNULGVBQWU7RUFDZiw4QkFBOEI7RUFJOUIsdUJBQXVCO0VBQ3hCLG1CQUFtQjtBQTdKcEI7O0FBK0pBO0VBRUUseUJBQXdCO0VBQ3hCLGtCQUFpQjtFQUNqQixZQUFXO0VBQ1gsbUJBQW1CO0VBQ3BCLGNBQWM7RUFDZCxlQUFlO0VBQ2QsMEJBQTBCO0FBN0o1Qjs7QUErSkE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsaUJBQWlCO0FBNUpuQjs7QUErSkE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixVQUFVO0VBQ1YsU0FBUztFQUNULFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQTVKcEI7O0FBK0pBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7QUE1Sm5COztBQStKQTtFQUlFLCtCQUErQjtBQS9KakM7O0FBa0tBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7QUEvSlg7O0FBbUtBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7RUFDVCxpQkFBaUI7QUFoS25COztBQW1LQTtFQUNFLDZCQUE2QjtFQUM3QixhQUFhO0FBaEtmOztBQW1LQTtFQUNFLHFCQUFvQjtFQUNwQixZQUFZO0FBaEtkOztBQW1LQTtFQUVFLGVBQWM7QUFqS2hCOztBQW1LQTtFQUNFLGdCQUNGO0FBaktBOztBQW1LQTtFQUNFLFlBQVk7QUFoS2Q7O0FBbUtBO0VBQ0Usa0JBQWtCO0FBaEtwQjs7QUFtS0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBaEtyQjs7QUFtS0E7RUFDRSxZQUFZO0FBaEtkOztBQW1LQTtFQUNFLGdCQUFnQjtBQWhLbEI7O0FBbUtBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFoSzVCOztBQW9LQTtFQUNFLHlCQUF3QjtFQUN0QixvQkFBbUI7RUFDbkIsWUFBVztFQUNYLHlCQUFpQztFQUNqQyxZQUFXO0VBQ1gsbUJBQW1CO0FBakt2Qjs7QUFtS0E7RUFDQyx5QkFBeUI7RUFDeEIsb0JBQW1CO0VBRXJCLFlBQVk7RUFDWixrQkFBQTtFQUNBLCtDQUErQztFQUMvQyxtQkFBbUI7RUFDbkIsd0JBQXdCO0VBQ3hCLFlBQVk7QUFqS1o7O0FBbUtBO0VBQ0UsYUFBYTtFQUViLFNBQVM7RUFDVCxlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3hCLG1CQUFtQjtBQWpLcEI7O0FBb0tBO0VBQ0UseUJBQXlCO0VBRXpCLFlBQVk7RUFDWix5QkFBbUM7RUFDbkMsWUFBWTtFQUNaLG1CQUFtQjtBQWxLckI7O0FBc0tBO0VBQ0UsbUJBQW1CO0FBbktyQjs7QUFzS0E7RUFDRSxhQUFhO0VBQ2IsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFtQjtFQUNuQix1QkFBQTtFQUNBLHlCQUF5QjtFQUN6QixXQUFXO0VBRVgsY0FBeUI7RUFDekIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixlQUFlO0FBcEtqQjs7QUF1S0E7RUFDRSxVQUFVO0VBQ1YsY0FBYztFQUNkLGdCQUFnQjtBQXBLbEI7O0FBeUtBOzs7O0VBSUUsZUFBZTtBQXRLakI7O0FBeUtBO0VBQ0UsWUFBWTtBQXRLZDs7QUF5S0E7RUFDRSx5QkFBb0M7QUF0S3RDOztBQXlLQTtFQUNFLFlBQVk7RUFDWixjQUF1QjtBQXRLekI7O0FBaUxBO0VBQ0Usb0NBQStDO0VBQy9DLFdBQVc7QUE5S2I7O0FBb0xBO0VBQ0UsY0FBYztBQWpMaEI7O0FBNExBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQXpMckI7O0FBNExBO0VBQ0UsT0FBTztBQXpMVDs7QUE0TEE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0FBekxyQjs7QUE0TEE7RUFDRSxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQXpMcEI7O0FBNExBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0FBekxkOztBQTRMQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBSWIsaUNBQWlDO0FBNUxuQzs7QUErTEE7RUFDRTtJQUNFLGFBQWE7SUFDYixlQUFlO0lBQ2YsdUJBQXVCO0VBNUx6QjtBQUNGOztBQStMQTtFQUNFLHdCQUF3QjtFQUNyQix1QkFBdUI7RUFDeEIsNEJBQTRCO0VBQzVCLGtCQUFrQjtBQTVMdEI7O0FBK0xBO0VBQ0UsY0FBYztBQTVMaEI7O0FBK0xBO0VBQ0UsZ0NBQTBDO0FBNUw1Qzs7QUErTEE7RUFDRSxjQUF3QjtFQUN4Qix5QkFBbUM7QUE1THJDOztBQStMQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsY0FBYztBQTVMaEI7O0FBK0xBO0VBQ0UsY0FBYztFQUNkLGFBQWE7RUFDYixjQUFjO0FBNUxoQjs7QUErTEE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQTVMdkI7O0FBK0xBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7QUE1THZCOztBQStMQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBNUx2Qjs7QUErTEE7RUFDRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGNBQWM7QUE1TGhCOztBQWlNQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtBQTlMdEI7O0FBa01BO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtBQS9McEI7O0FBa01BO0VBQ0UsaUJBQWlCO0FBL0xuQjs7QUFrTUE7RUFDRSwwQkFBMEI7RUFDMUIsc0JBQXNCO0VBRXRCLDZCQUE2QjtBQWhNL0I7O0FBb01BO0VBQ0UsYUFBYTtBQWpNZjs7QUFvTUE7RUFDRSxlQUFlO0FBak1qQjs7QUFvTUE7RUFDRSxlQUFlO0FBak1qQjs7QUFvTUE7RUFDRSxTQUFTO0FBak1YOztBQW9NQTtFQUNFLDhCQUE4QjtBQWpNaEM7O0FBb01BO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFqTWpCOztBQW9NQTtFQUNFLHFCQUFxQjtBQWpNdkI7O0FBb01BO0VBQ0UsOEJBQThCO0FBak1oQzs7QUFvTUE7RUFDRTtJQUVFLFNBQVM7SUFDVCxnREFBZ0Q7RUFsTWxEO0FBQ0Y7O0FBcU1BO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxnREFBZ0Q7QUFsTWxEOztBQXlNQTtFQUNFLGFBQWE7QUF0TWY7O0FBeU1BO0VBQ0UsZUFBZTtBQXRNakI7O0FBeU1BO0VBQ0UsWUFBWTtBQXRNZDs7QUF5TUE7RUFDRSw4QkFBOEI7QUF0TWhDOztBQXlNQTtFQUNFLFNBQVM7QUF0TVg7O0FBeU1BO0VBQ0Usc0JBQXNCO0FBdE14Qjs7QUF5TUE7RUFDRSxZQUFZO0FBdE1kOztBQXlNQTtFQUNFLG9CQUFvQjtBQXRNdEI7O0FBeU1BO0VBQ0Usc0JBQXNCO0FBdE14Qjs7QUF5TUE7RUFDRSwwQkFBa0I7RUFBbEIsdUJBQWtCO0VBQWxCLGtCQUFrQjtBQXRNcEI7O0FBeU1BO0VBQ0UsaUJBQWlCO0FBdE1uQjs7QUF5TUE7RUFDRSxjQUFjO0FBdE1oQjs7QUF5TUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQXRNWDs7QUF5TUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQXRNZDs7QUF5TUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGVBQWU7QUF0TWpCOztBQXlNQTtFQUVFLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsYUFBYTtBQXZNZjs7QUEwTUE7RUFDRSxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGFBQWE7QUF2TWY7O0FBME1BO0VBQ0UsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2Isb0JBQW9CO0FBdk10Qjs7QUEwTUE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQXZNWDs7QUEwTUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQXZNZDs7QUEwTUE7RUFFRSxxQkFBb0I7QUF4TXRCOztBQTBNQTtFQUVFLFlBQVc7RUFDWCxhQUFhO0FBeE1mOztBQTJNQTs7RUFFSSx3QkFBdUI7RUFDdkIsU0FBUTtBQXhNWjs7QUEyTUE7RUFDRSwwQkFBMEI7QUF4TTVCOztBQTJNQTtFQUNFLDJCQUFtQjtLQUFuQix3QkFBbUI7VUFBbkIsbUJBQW1CO0FBeE1yQjs7QUEwTUE7RUFDRSxrQkFBa0I7QUF2TXBCOztBQXlNQTtFQUNFLHVCQUF1QjtBQXRNekI7O0FBeU1BO0VBQ0UsMEJBQTBCO0VBQzFCLGNBQWE7RUFDYixnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixlQUFlO0FBdE1qQjs7QUF3TUE7RUFDRSxjQUFjO0FBck1oQjs7QUF3TUE7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztBQXJNaEI7O0FBdU1BO0VBQ0UseUJBQXlCO0FBcE0zQjs7QUFzTUE7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBbk1wQjs7QUFzTUE7RUFDRSxtQkFBbUI7RUFDbkIsMEJBQTBCO0FBbk01Qjs7QUFzTUE7RUFDRSwrQkFBK0I7QUFuTWpDOztBQXFNQTtFQUNBLGlCQUFpQjtBQWxNakIiLCJmaWxlIjoia3ljLXZlcmlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmVhZGNydW1iIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA0MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVhZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gIC8vICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uZmV0Y2hCdXR0b24ge1xyXG4gIGNvbG9yOiAjNDU2RUZFO1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG5tYXQtaGludCB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4uYXBwLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vLyAudmVyaWZpY2F0aW9uSGVhZHtcclxuLy8gICBvcGFjaXR5OiA5MCU7XHJcbi8vIH1cclxuLm1hcmdpbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMCU7XHJcbn1cclxuI2ZlY2h7XHJcbmRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmZlY2hCdXR0b25EaXZ7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcbiNmb3JtZmV0Y2h7XHJcbiAgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSAyNSUgMjUlIDI1JTtcclxufVxyXG5cclxuLmJhc2ljLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4uZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmdyaWQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDUwJSwgMWZyKSk7XHJcbn1cclxuXHJcbi5tYWluLWhlYWQge1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxubWF0LXRhYi1ncm91cCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyJTtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGhlaWdodDogNjB2aDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uZmxleC1jb250YWluZXIgKiB7XHJcbiAgLy8gd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XHJcbiAgbWFyZ2luOiAwIDVweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uZmxleC1jb250YWluZXIgOm50aC1jaGlsZCgyKSxcclxuLmZsZXgtY29udGFpbmVyIDpudGgtY2hpbGQoMykge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyIDpudGgtY2hpbGQoMykge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi8vICAgLmZsZXgtY29udGFpbmVyIDpudGgtY2hpbGQoNCkge1xyXG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgIH1cclxuLmZvcm1GaWVsZDEge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuLmZvcm1GaWVsZCB7XHJcbiAgLy8gd2lkdGg6MjAwcHg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuXHJcbiAgLy8gICBnYXA6IDIwcHg7XHJcbiAgLy8gfVxyXG5cclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdG9vbHRpcCB7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcclxuICBjb2xvcjogZ3JheSAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgLjkpO1xyXG4gIGJvcmRlcjoxcHggc29saWQgZ3JheTtcclxuICBtYXgtd2lkdGg6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiB9XHJcblxyXG4uZm9ybUZpZWxkMiB7XHJcbiAgLy8gd2lkdGg6MjAwcHg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAvLyAgIGdhcDogMjBweDtcclxuICAvLyB9XHJcbn1cclxuXHJcbi5pbnB1dE1hdGNhcmQge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvLyBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgLy8gICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG5cclxuICAvLyB3aWR0aDogMjIwcHg7XHJcbn1cclxuXHJcbi5pbnB1dEdlbmRlciB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDo1MDBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAvLyAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcblxyXG4gIC8vIHdpZHRoOiAyMjBweDtcclxufVxyXG5cclxuLmlucHV0TWF0TmFtZSB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDo1MDBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAvLyAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcblxyXG4gIC8vIHdpZHRoOiA0NTBweDtcclxufVxyXG5cclxuLmlucHV0TWF0TmV3IHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWF4LXdpZHRoOjUwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gIC8vICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTNweDtcclxuXHJcbiAgLy8gd2lkdGg6IDQ1NXB4O1xyXG59XHJcblxyXG4uaW5wdXRNYXRMYXN0TmFtZSB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDo1MDBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAvLyAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcblxyXG4gIC8vIHdpZHRoOiAyMDBweDtcclxuXHJcbn1cclxuXHJcbi5pbnB1dE1hdGNhcmREb2Mge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvLyBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgLy8gICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG4gIC8vIHdpZHRoOjI3MHB4O1xyXG4gIC8vIHdpZHRoOiAxOTVweDtcclxufVxyXG5cclxuLmlucHV0TWF0Y2FyZE1haWwge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvLyBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgLy8gICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG4gIC8vIHdpZHRoOjEwMCU7XHJcbiAgLy8gd2lkdGg6IDQxMHB4O1xyXG59XHJcblxyXG4uaW5wdXRNYXRjYXJkTWFpbEFkZCB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDo1MDBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAvLyAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcbiAgLy8gd2lkdGg6MTAwJTtcclxuICAvLyB3aWR0aDogNzUwcHg7XHJcbn1cclxuXHJcbi5pbnB1dE1hdGNhcmRNYXJyaXRpYWwge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvLyBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgLy8gICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG4gIC8vIHdpZHRoOjEwMCU7XHJcbiAgLy8gd2lkdGg6IDQ1MHB4O1xyXG59XHJcblxyXG4uaW5wdXRNYXRjYXJkUHJlZml4IHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWF4LXdpZHRoOjUwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gIC8vICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTNweDtcclxuICAvLyB3aWR0aDoxMDAlO1xyXG4gIC8vIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLmlucHV0TWF0Y2FyZDMge1xyXG4gIGZsZXgtZ3JvdzogMjtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgLy9tYXgtd2lkdGg6MjA4cHg7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAvLyAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcblxyXG5cclxufVxyXG5cclxuLmlucHV0TWF0Y2FyZEFkZCB7XHJcbiAgZmxleC1ncm93OiAyO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICAvL21heC13aWR0aDoyMDhweDtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gIC8vICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTNweDtcclxuICAvLyB3aWR0aDoyMDBweDtcclxuXHJcbn1cclxuXHJcbi5pbnB1dE1hdGNhcmQ0IHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1heC13aWR0aDogMjA4cHg7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAvLyAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcbiAgLy8gbWFyZ2luLXJpZ2h0Oi0xJTtcclxuXHJcbn1cclxuXHJcbi8vICNmb3JtMXtcclxuLy8gICBtYXJnaW4tcmlnaHQ6LTElO1xyXG4vLyB9XHJcbi5pbnB1dE1hdGNhcmQxIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWF4LXdpZHRoOiA1MDBweDtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gIC8vICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcbiAgLy8gZGlzcGxheTogYmxvY2s7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIC8vIHdpZHRoOiAxMDAlO1xyXG5cclxuICAvLyBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5pbnB1dE1hdGNhcmQyIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWF4LXdpZHRoOiA1MDBweDtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gIC8vICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcbiAgLy8gZGlzcGxheTogYmxvY2s7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAvLyBwYWRkaW5nOiAxMnB4O1xyXG4gIC8vIHdpZHRoOiAxMDAlO1xyXG4gIC8vIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogMjBweDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5pbnB1dENsYXNzIHtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gIC8vICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IGhpZGRlbjtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBkaXYubWF0LWZvcm0tZmllbGQtb3V0bGluZS1zdGFydCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAwICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWdhcCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAwICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWVuZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAwICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4jY2hlY2t7XHJcbiAgYXBwZWFyYW5jZTogb3V0bGluZTtcclxuICB3aWR0aDogMTUwcHg7XHJcbn1cclxuLmFhZGhhckRvY051bXtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuLmFhZGhhckZldGNoRGl2e1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuLm1haW5BYWRoYXJ7XHJcbiAgbWFyZ2luLXRvcDoxJTtcclxufVxyXG5cclxuLmFhZGhhcklucHV0e1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcblxyXG59XHJcbi8vIC5tYXJnaW5Ub3B7XHJcbi8vICAgLy8gbWFyZ2luLXRvcDogLTQlO1xyXG4vLyB9XHJcbi5tYXJnaW5Ub3BLeWN7XHJcbiAgIG1hcmdpbi10b3A6IC0xLjIlO1xyXG59XHJcbi5hYWRoYXJJbnB1dDF7XHJcbmZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IC00JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udG9nZ2xlR3JvdXAxe1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogNCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5hYWRoYXJGb3Jte1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAvL21hcmdpbi1sZWZ0Ojg1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA2MXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA3MHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNDRweDtcclxufVxyXG4udG9nZ2xlR3JvdXB7XHJcbiAgcGFkZGluZzogMTBweCAzMHB4IDEwcHggMjVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gLy8gYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjhmNztcclxuICAvLyBmb250LXNpemU6IDEwcHg7XHJcbiAgLy8gaGVpZ2h0OiA0MHB4O1xyXG4gbWFyZ2luLXRvcDogMSU7XHJcbn1cclxuXHJcbi50b2dnbGVHcm91cDF7XHJcbi8vICAgcGFkZGluZzogMTBweCAzMHB4IDEwcHggMjVweDtcclxuLy8gICBib3JkZXI6IDJweCBkYXNoZWQgbGlnaHRncmV5O1xyXG4vLyAgLy8gYm9yZGVyLXJhZGl1czogMTBweDtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmOGY3O1xyXG4vLyAgIC8vIGZvbnQtc2l6ZTogMTBweDtcclxuLy8gICAvLyBoZWlnaHQ6IDQwcHg7XHJcbiBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG4jZGF0ZU9me1xyXG4gIGhlaWdodDogNDhweDtcclxufVxyXG4uYWFkaGFyQ2hlY2t7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG4gIG1hcmdpbi1sZWZ0OiAtOCU7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLmFhZGhhclVwbG9hZHtcclxuICBoZWlnaHQ6NDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMjBweDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4uYWFkaGFyRG9je1xyXG4gIG1hcmdpbi1yaWdodDogMzBweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJvcmRlcntcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICBtYXJnaW4tdG9wOiAtMC41JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgLy8gZ2FwOiAyMHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5mb3JtMTMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAvLyBnYXA6IDIwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxufVxyXG5cclxuLmZvcm0xIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZ2FwOiA1MHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvLyB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy9tYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGdhcDogMjBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIC8vIHBhZGRpbmctbGVmdDogMTElO1xyXG4gIC8vIHBhZGRpbmctcmlnaHQ6IDE0JTtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5CYWNrQnV0dG9ue1xyXG4gIFxyXG4gIG1hcmdpbjoxMnB4IDBweCAxMnB4IDBweDtcclxuICBtYXJnaW4tbGVmdDotNy43JTtcclxuICB3aWR0aDoxNTBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG5cdGNvbG9yOiAjNUQ1RDVEO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LXNpemU6IDE2cHggIWltcG9ydGFudDtcclxufVxyXG4ubWF0Q2FyZCB7XHJcbiAgbWF4LXdpZHRoOiAxNjAwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gIG1hcmdpbi1yaWdodDogMTUlO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG8gMCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDMlO1xyXG59XHJcblxyXG4uY2hhbmdlSW5wdXQge1xyXG4gIG9wYWNpdHk6IDAuMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDE1cHg7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaGFuZ2VEaXYge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZC1mbGV4IHtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAvLyAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG59XHJcblxyXG4uZmxleC1ncm93LTEge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBnYXA6IDEwcHg7XHJcbiAgLy8gbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uZmxleC1ncm93LTIge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBnYXA6IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMCU7XHJcbn1cclxuXHJcbi5hbGlnbm1lbnQge1xyXG4gIGJvcmRlci1zdHlsZTogbm9uZSAhaW1wb3J0YW50O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbiNkb2Ige1xyXG4gIHdpZHRoOjkyJSAhaW1wb3J0YW50O1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuI3RvZ2dsZXtcclxuXHJcbiAgbWFyZ2luLXRvcDotMiU7XHJcbn1cclxuI21heC13aWR0aCB7XHJcbiAgbWF4LXdpZHRoOiAxNTBweFxyXG59XHJcblxyXG4jZHJvcC1tYXgtd2lkdGgge1xyXG4gIHdpZHRoOiAxOTBweDtcclxufVxyXG5cclxuI3JhZGlvIHtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbnJhZGlvR3JvdXAge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuI25hdGlvbmFsaXR5IHtcclxuICB3aWR0aDogMjEwcHg7XHJcbn1cclxuXHJcbm1hdC1sYWJlbCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA2JTtcclxufVxyXG5cclxuLmNoYW5nZSB7XHJcbiAgY29sb3I6ICMyNjgwRUI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG5cclxuLm5leHQxMiB7XHJcbiAgbWFyZ2luOjEycHggMHB4IDEycHggMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0Oi0xMi41JTtcclxuICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LDEwNiwyNDUpO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1NXB4O1xyXG59XHJcbi5uZXh0IHtcclxuXHRtYXJnaW46IDEycHggMHB4IDEycHggMHB4O1xyXG4gIG1hcmdpbi1yaWdodDotMTIuNSU7XHJcbi8vbGVmdDogMTA2M3B4O1xyXG53aWR0aDogMTUwcHg7XHJcbi8qIFVJIFByb3BlcnRpZXMgKi9cclxuYmFja2dyb3VuZDogIzZDNkM2QyAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbmJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbm9wYWNpdHk6IDAuMzggIWltcG9ydGFudDtcclxuY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuLmJ1dHRvbjEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAvLyBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGdhcDogMjBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmctbGVmdDogMTElO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE0JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gXHJcbn1cclxuLk5leHQxIHtcclxuICBtYXJnaW46IDEycHggMHB4IDEycHggMHB4O1xyXG4gIC8vIG1hcmdpbi1yaWdodDogLTEzJTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LCAxMDYsIDI0NSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDU1cHg7XHJcbiAgLy9tYXJnaW4tbGVmdDoxMDAlO1xyXG59XHJcblxyXG5ociB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmxpbmUge1xyXG4gIGJvcmRlcjogdGhpY2s7XHJcbiAgLyogaGVpZ2h0OiAzcHg7ICovXHJcbiAgLyogbGluZS1oZWlnaHQ6IDNweDsgKi9cclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIC8qIGJvcmRlci13aWR0aDogM3B4OyAqL1xyXG4gIGJvcmRlci1ibG9jay13aWR0aDogdW5zZXQ7XHJcbiAgY29sb3I6IGJsdWU7XHJcbiAgLy8gd2lkdGg6IDIwcHg7XHJcbiAgY29sb3I6IHJnYigxMDUsIDEzNiwgMjQ2KTtcclxuICB3aWR0aDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiBpbml0aWFsO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBjb2xvcjogIzM3NDY2NDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgLy8gICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbn1cclxuXHJcbi5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsOm5vdCgubWF0LXRhYi1kaXNhYmxlZCk6Zm9jdXMsXHJcbi5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbms6bm90KC5tYXQtdGFiLWRpc2FibGVkKTpmb2N1cyxcclxuLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbDpub3QoLm1hdC10YWItZGlzYWJsZWQpOmZvY3VzLFxyXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbms6bm90KC5tYXQtdGFiLWRpc2FibGVkKTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZDogcmVkO1xyXG59XHJcblxyXG4ubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XHJcbiAgY29sb3I6IHJnYigxMDUsIDEzNiwgMjQ2KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udmVyaWZpY2F0aW9uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgY29sb3I6IHJnYig0MiwgODksIDIzMSk7XHJcbn1cclxuXHJcbi8vIC5tYXQtaW5rLWJhcntcclxuLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgYm90dG9tOiAwO1xyXG4vLyAgICAgaGVpZ2h0OiAycHg7XHJcbi8vICAgICB0cmFuc2l0aW9uOiA1MDBtcyBjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4yNSwgMSk7XHJcbi8vICAgICBoZWlnaHQ6IDRweDtcclxuLy8gICAgIGNvbG9yOlxyXG4vLyB9XHJcbjo6bmctZGVlcCAubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDUsIDEzNiwgMjQ2KSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIC8vIHdpZHRoOiAxMTZweCAhaW1wb3J0YW50O1xyXG5cclxuICAvLyBtYXJnaW4tbGVmdDogMiU7XHJcbn1cclxuXHJcbm1hdC10YWItbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogOHB4O1xyXG59XHJcblxyXG4vLyBtYXQtb3B0aW9ue1xyXG4vLyAgIHdpZHRoOiAyMHB4O1xyXG4vLyB9XHJcbi8vIC5tYXQtc2VsZWN0LWFycm93LXdyYXBwZXIge1xyXG4vLyAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbi8vICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuLy8gICB3aWR0aDogNDBweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubGluZSB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5maWd1cmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgbGluZS1oZWlnaHQ6IDEuN2VtO1xyXG59XHJcblxyXG5maWd1cmUgaW1nIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uZm9ybVNlY3Rpb25Db250YWluZXIge1xyXG4gIGdhcDogNDBweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIC8vIGdyaWQtdGVtcGxhdGUtY29sdW1uczogO1xyXG4gIC8vIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCBhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpICk7XHJcbiAgLy9ncmlkLWdhcDogMjBweDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmZvcm1TZWN0aW9uQ29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtSW1nIHtcclxuICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxufVxyXG5cclxuLmRyb3BEb3duIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoNjYsIDEzNCwgMjQ0KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcclxuICBjb2xvcjogcmdiKDY2LCAxMzQsIDI0NCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LCAxMzQsIDI0NCk7XHJcbn1cclxuXHJcbi5VcGxvYWQge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBjO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBjb2xvcjogIzI2ODBFQjtcclxufVxyXG5cclxuI3JvdyB7XHJcbiAgZm9udC1zaXplOiA5cHg7XHJcbiAgb3BhY2l0eTogMTAwJTtcclxuICBjb2xvcjogIzI2ODBFQjtcclxufVxyXG5cclxuLnNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNwYW44IHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zcGFuMTIge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHdpZHRoOiAxMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNwYW5EaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcblxyXG5cclxufVxyXG5cclxuI2JpbGwge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAtMjVweDtcclxuICAvLyBtYXJnaW4tYm90dG9tOiAtNCU7XHJcbn1cclxuXHJcbi5iaWxsTmFtZSB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLm1hcmdpbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5kaXZpZGVyIHtcclxuICBwb3NpdGlvbjogdW5zZXQgIWltcG9ydGFudDtcclxuICBsZWZ0OiAyMDBweCAhaW1wb3J0YW50O1xyXG5cclxuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi5mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ud3JhcCB7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZmxleC1iYXNpcy01MCB7XHJcbiAgZmxleC1iYXNpczogNTAlO1xyXG59XHJcblxyXG4uZ2FwLTIwIHtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5hZGRyZXNzQ29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwIDIwcHggMCAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hZGRyZXNzLWNhcmQge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLmlubGluZS1ibG9jayB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uc3BhY2UtYmV0d2VlbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC5hZGRyZXNzR3JpZCB7XHJcbiAgICAvLyBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xyXG4gIH1cclxufVxyXG5cclxuLmFkZHJlc3NHcmlkSW5uZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcclxufVxyXG5cclxuLy8gOjpuZy1kZWVwIC5tYXQtY2FyZCAubWF0LWRpdmlkZXItaG9yaXpvbnRhbCB7XHJcbi8vICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG4vLyAgIGxlZnQ6IDA7XHJcbi8vIH1cclxuLmZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi53cmFwIHtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5mbGV4LWdyb3ctMSB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uanVzdGlmeS1iZXR3ZWVuIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5nYXAtMjAge1xyXG4gIGdhcDogMjBweDtcclxufVxyXG5cclxuLmZsZXgtY29sdW1uIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uaGVpZ2h0LWF1dG8ge1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmFsaWduLXNlbGYtZmxleC1lbmQge1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uYWxpZ24tc2VsZi1mbGV4LXN0YXJ0IHtcclxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4ud2lkdGgtZml0LWNvbnRlbnQge1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLm0tOCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5ibG9jayB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNhZGRyZXNzQmxvY2sge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4jY29tbXVuaWNhdGlvbkRpdmlkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uY29tbXVuaWNhdGlvbkZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuI2NvbW11bmljYXRpb25CbG9ja0Zvcm0ge1xyXG5cclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbiNEb2N1bWVudEZvcm0ge1xyXG4gIHdpZHRoOiA2NTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuI0RvY3VtZW50Rm9ybTEge1xyXG4gIHdpZHRoOiA2NTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuI2RvY01haW5EaXZpZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMjBweDtcclxufVxyXG5cclxuI2RpdmlkZXJJbnNpZGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uZXJyYmRcclxue1xyXG4gIGJvcmRlcjoxcHggc29saWQgcmVkO1xyXG59XHJcbi5oaWRlXHJcbntcclxuICBjb2xvcjp3aGl0ZTtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9ue1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7XHJcbiAgICBtYXJnaW46MDtcclxufVxyXG5cclxuaW5wdXRbdHlwZT1udW1iZXJdIHtcclxuICAtbW96LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcclxufVxyXG5cclxuI2NoZWNre1xyXG4gIGFwcGVhcmFuY2U6IG91dGxpbmU7XHJcbn1cclxuLmFhZGhhckRvY051bXtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuLndpZHRoe1xyXG4gIHdpZHRoOiAxNTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWFkaGFyRmV0Y2h7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IFxyXG4gIGNvbG9yOiM0NTZFRkU7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICBwYWRkaW5nLXRvcDogNTRweDtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuLm1hdC1mb3JtLWZpZWxke1xyXG4gIG1hcmdpbi10b3A6IDglO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLmNkay1vdmVybGF5LXBhbmUge1xyXG4gIG1pbi13aWR0aDogMjcwcHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nOiA3cHggMDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1jYXJkLWF2YXRhciB7XHJcbiAgbWF4LXdpZHRoOiAxNSUgIWltcG9ydGFudDtcclxufVxyXG4uZXhhbXBsZS1oZWFkZXItaW1hZ2UtZHJvcGRvd24ge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUVENkYxO1xyXG4gIG1heC13aWR0aDogMTUlICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDI1cHg7XHJcbiAgaGVpZ2h0OiAzNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLnBhZGRpbmd7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICBmb250LXNpemU6IDE1cHggIWltcG9ydGFudDtcclxuICBcclxufVxyXG4ucGFkZGluZ0J1dHRvbntcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5wYXJlbnRNYXRDYXJkQ29udGVudHtcclxucGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](KycVerificationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: "app-kyc-verification",
            templateUrl: "./kyc-verification.component.html",
            styleUrls: ["./kyc-verification.component.scss"]
          }]
        }], function () {
          return [{
            type: app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_15__["AppLoaderService"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_18__["LocalStoreService"]
          }, {
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
          }, {
            type: app_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_11__["FingerPrintCaptureService"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DomSanitizer"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
          }, {
            type: app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_14__["DataService"]
          }, {
            type: app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_16__["DialogService"]
          }, {
            type: _angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"]
          }, {
            type: app_shared_services_application_entry_stage_service__WEBPACK_IMPORTED_MODULE_19__["ApplicationEntryStageService"]
          }];
        }, {
          settingallCustInfo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          profileFile: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["profileFile"]
          }]
        });
      })();

      var DocData = function DocData() {
        _classCallCheck(this, DocData);
      };

      var Upload = function Upload() {
        _classCallCheck(this, Upload);
      };
      /***/

    },

    /***/
    "5IdF":
    /*!************************************************************!*\
      !*** ./node_modules/tesseract.js/src/utils/circularize.js ***!
      \************************************************************/

    /*! no static exports found */

    /***/
    function IdF(module, exports) {
      /**
       * In the recognition result of tesseract, there
       * is a deep JSON object for details, it has around
       *
       * The result of dump.js is a big JSON tree
       * which can be easily serialized (for instance
       * to be sent from a webworker to the main app
       * or through Node's IPC), but we want
       * a (circular) DOM-like interface for walking
       * through the data.
       *
       * @fileoverview DOM-like interface for walking through data
       * @author Kevin Kwok <antimatter15@gmail.com>
       * @author Guillermo Webster <gui@mit.edu>
       * @author Jerome Wu <jeromewus@gmail.com>
       */
      module.exports = function (page) {
        var blocks = [];
        var paragraphs = [];
        var lines = [];
        var words = [];
        var symbols = [];
        page.blocks.forEach(function (block) {
          block.paragraphs.forEach(function (paragraph) {
            paragraph.lines.forEach(function (line) {
              line.words.forEach(function (word) {
                word.symbols.forEach(function (sym) {
                  symbols.push(_objectSpread(_objectSpread({}, sym), {}, {
                    page: page,
                    block: block,
                    paragraph: paragraph,
                    line: line,
                    word: word
                  }));
                });
                words.push(_objectSpread(_objectSpread({}, word), {}, {
                  page: page,
                  block: block,
                  paragraph: paragraph,
                  line: line
                }));
              });
              lines.push(_objectSpread(_objectSpread({}, line), {}, {
                page: page,
                block: block,
                paragraph: paragraph
              }));
            });
            paragraphs.push(_objectSpread(_objectSpread({}, paragraph), {}, {
              page: page,
              block: block
            }));
          });
          blocks.push(_objectSpread(_objectSpread({}, block), {}, {
            page: page
          }));
        });
        return _objectSpread(_objectSpread({}, page), {}, {
          blocks: blocks,
          paragraphs: paragraphs,
          lines: lines,
          words: words,
          symbols: symbols
        });
      };
      /***/

    },

    /***/
    "67Ye":
    /*!********************************************************!*\
      !*** ./node_modules/tesseract.js/src/constants/PSM.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function Ye(module, exports) {
      /*
       * PSM = Page Segmentation Mode
       */
      module.exports = {
        OSD_ONLY: '0',
        AUTO_OSD: '1',
        AUTO_ONLY: '2',
        AUTO: '3',
        SINGLE_COLUMN: '4',
        SINGLE_BLOCK_VERT_TEXT: '5',
        SINGLE_BLOCK: '6',
        SINGLE_LINE: '7',
        SINGLE_WORD: '8',
        CIRCLE_WORD: '9',
        SINGLE_CHAR: '10',
        SPARSE_TEXT: '11',
        SPARSE_TEXT_OSD: '12'
      };
      /***/
    },

    /***/
    "DmX5":
    /*!*******************************************************************!*\
      !*** ./node_modules/tesseract.js/src/worker/browser/loadImage.js ***!
      \*******************************************************************/

    /*! no static exports found */

    /***/
    function DmX5(module, exports, __webpack_require__) {
      var resolveURL = __webpack_require__(
      /*! resolve-url */
      "PhXl");
      /**
       * readFromBlobOrFile
       *
       * @name readFromBlobOrFile
       * @function
       * @access private
       */


      var readFromBlobOrFile = function readFromBlobOrFile(blob) {
        return new Promise(function (resolve, reject) {
          var fileReader = new FileReader();

          fileReader.onload = function () {
            resolve(fileReader.result);
          };

          fileReader.onerror = function (_ref) {
            var code = _ref.target.error.code;
            reject(Error("File could not be read! Code=".concat(code)));
          };

          fileReader.readAsArrayBuffer(blob);
        });
      };
      /**
       * loadImage
       *
       * @name loadImage
       * @function load image from different source
       * @access private
       */


      var loadImage = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(image) {
          var data, resp;
          return regeneratorRuntime.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  data = image;

                  if (!(typeof image === 'undefined')) {
                    _context4.next = 3;
                    break;
                  }

                  return _context4.abrupt("return", 'undefined');

                case 3:
                  if (!(typeof image === 'string')) {
                    _context4.next = 16;
                    break;
                  }

                  if (!/data:image\/([a-zA-Z]*);base64,([^"]*)/.test(image)) {
                    _context4.next = 8;
                    break;
                  }

                  data = atob(image.split(',')[1]).split('').map(function (c) {
                    return c.charCodeAt(0);
                  });
                  _context4.next = 14;
                  break;

                case 8:
                  _context4.next = 10;
                  return fetch(resolveURL(image));

                case 10:
                  resp = _context4.sent;
                  _context4.next = 13;
                  return resp.arrayBuffer();

                case 13:
                  data = _context4.sent;

                case 14:
                  _context4.next = 34;
                  break;

                case 16:
                  if (!(image instanceof HTMLElement)) {
                    _context4.next = 30;
                    break;
                  }

                  if (!(image.tagName === 'IMG')) {
                    _context4.next = 21;
                    break;
                  }

                  _context4.next = 20;
                  return loadImage(image.src);

                case 20:
                  data = _context4.sent;

                case 21:
                  if (!(image.tagName === 'VIDEO')) {
                    _context4.next = 25;
                    break;
                  }

                  _context4.next = 24;
                  return loadImage(image.poster);

                case 24:
                  data = _context4.sent;

                case 25:
                  if (!(image.tagName === 'CANVAS')) {
                    _context4.next = 28;
                    break;
                  }

                  _context4.next = 28;
                  return new Promise(function (resolve) {
                    image.toBlob( /*#__PURE__*/function () {
                      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(blob) {
                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                _context3.next = 2;
                                return readFromBlobOrFile(blob);

                              case 2:
                                data = _context3.sent;
                                resolve();

                              case 4:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3);
                      }));

                      return function (_x2) {
                        return _ref3.apply(this, arguments);
                      };
                    }());
                  });

                case 28:
                  _context4.next = 34;
                  break;

                case 30:
                  if (!(image instanceof File || image instanceof Blob)) {
                    _context4.next = 34;
                    break;
                  }

                  _context4.next = 33;
                  return readFromBlobOrFile(image);

                case 33:
                  data = _context4.sent;

                case 34:
                  return _context4.abrupt("return", new Uint8Array(data));

                case 35:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4);
        }));

        return function loadImage(_x) {
          return _ref2.apply(this, arguments);
        };
      }();

      module.exports = loadImage;
      /***/
    },

    /***/
    "IIpR":
    /*!**********************************************************!*\
      !*** ./node_modules/tesseract.js/src/createScheduler.js ***!
      \**********************************************************/

    /*! no static exports found */

    /***/
    function IIpR(module, exports, __webpack_require__) {
      var _this23 = this;

      var createJob = __webpack_require__(
      /*! ./createJob */
      "cYUz");

      var _webpack_require__ = __webpack_require__(
      /*! ./utils/log */
      "fIT2"),
          log = _webpack_require__.log;

      var getId = __webpack_require__(
      /*! ./utils/getId */
      "/Hjt");

      var schedulerCounter = 0;

      module.exports = function () {
        var id = getId('Scheduler', schedulerCounter);
        var workers = {};
        var runningWorkers = {};
        var jobQueue = [];
        schedulerCounter += 1;

        var getQueueLen = function getQueueLen() {
          return jobQueue.length;
        };

        var getNumWorkers = function getNumWorkers() {
          return Object.keys(workers).length;
        };

        var dequeue = function dequeue() {
          if (jobQueue.length !== 0) {
            var wIds = Object.keys(workers);

            for (var i = 0; i < wIds.length; i += 1) {
              if (typeof runningWorkers[wIds[i]] === 'undefined') {
                jobQueue[0](workers[wIds[i]]);
                break;
              }
            }
          }
        };

        var queue = function queue(action, payload) {
          return new Promise(function (resolve, reject) {
            var job = createJob({
              action: action,
              payload: payload
            });
            jobQueue.push( /*#__PURE__*/function () {
              var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(w) {
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                  while (1) {
                    switch (_context5.prev = _context5.next) {
                      case 0:
                        jobQueue.shift();
                        runningWorkers[w.id] = job;
                        _context5.prev = 2;
                        _context5.t0 = resolve;
                        _context5.next = 6;
                        return w[action].apply(_this23, [].concat(_toConsumableArray(payload), [job.id]));

                      case 6:
                        _context5.t1 = _context5.sent;
                        (0, _context5.t0)(_context5.t1);
                        _context5.next = 13;
                        break;

                      case 10:
                        _context5.prev = 10;
                        _context5.t2 = _context5["catch"](2);
                        reject(_context5.t2);

                      case 13:
                        _context5.prev = 13;
                        delete runningWorkers[w.id];
                        dequeue();
                        return _context5.finish(13);

                      case 17:
                      case "end":
                        return _context5.stop();
                    }
                  }
                }, _callee5, null, [[2, 10, 13, 17]]);
              }));

              return function (_x3) {
                return _ref4.apply(this, arguments);
              };
            }());
            log("[".concat(id, "]: Add ").concat(job.id, " to JobQueue"));
            log("[".concat(id, "]: JobQueue length=").concat(jobQueue.length));
            dequeue();
          });
        };

        var addWorker = function addWorker(w) {
          workers[w.id] = w;
          log("[".concat(id, "]: Add ").concat(w.id));
          log("[".concat(id, "]: Number of workers=").concat(getNumWorkers()));
          dequeue();
          return w.id;
        };

        var addJob = /*#__PURE__*/function () {
          var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(action) {
            var _len,
                payload,
                _key,
                _args6 = arguments;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (!(getNumWorkers() === 0)) {
                      _context6.next = 2;
                      break;
                    }

                    throw Error("[".concat(id, "]: You need to have at least one worker before adding jobs"));

                  case 2:
                    for (_len = _args6.length, payload = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                      payload[_key - 1] = _args6[_key];
                    }

                    return _context6.abrupt("return", queue(action, payload));

                  case 4:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6);
          }));

          return function addJob(_x4) {
            return _ref5.apply(this, arguments);
          };
        }();

        var terminate = /*#__PURE__*/function () {
          var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    Object.keys(workers).forEach( /*#__PURE__*/function () {
                      var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(wid) {
                        return regeneratorRuntime.wrap(function _callee7$(_context7) {
                          while (1) {
                            switch (_context7.prev = _context7.next) {
                              case 0:
                                _context7.next = 2;
                                return workers[wid].terminate();

                              case 2:
                              case "end":
                                return _context7.stop();
                            }
                          }
                        }, _callee7);
                      }));

                      return function (_x5) {
                        return _ref7.apply(this, arguments);
                      };
                    }());
                    jobQueue = [];

                  case 2:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8);
          }));

          return function terminate() {
            return _ref6.apply(this, arguments);
          };
        }();

        return {
          addWorker: addWorker,
          addJob: addJob,
          terminate: terminate,
          getQueueLen: getQueueLen,
          getNumWorkers: getNumWorkers
        };
      };
      /***/

    },

    /***/
    "KAeC":
    /*!************************************************************************!*\
      !*** ./node_modules/tesseract.js/src/worker/browser/defaultOptions.js ***!
      \************************************************************************/

    /*! no static exports found */

    /***/
    function KAeC(module, exports, __webpack_require__) {
      var resolveURL = __webpack_require__(
      /*! resolve-url */
      "PhXl");

      var _webpack_require__2 = __webpack_require__(
      /*! ../../../package.json */
      "YNtM"),
          version = _webpack_require__2.version,
          dependencies = _webpack_require__2.dependencies;

      var defaultOptions = __webpack_require__(
      /*! ../../constants/defaultOptions */
      "XbsK");
      /*
       * Default options for browser worker
       */


      module.exports = _objectSpread(_objectSpread({}, defaultOptions), {}, {
        workerPath: typeof process !== 'undefined' && process.env.TESS_ENV === 'development' ? resolveURL("/dist/worker.dev.js?nocache=".concat(Math.random().toString(36).slice(3))) : "https://unpkg.com/tesseract.js@v".concat(version, "/dist/worker.min.js"),

        /*
         * If browser doesn't support WebAssembly,
         * load ASM version instead
         */
        corePath: "https://unpkg.com/tesseract.js-core@v".concat(dependencies['tesseract.js-core'].substring(1), "/tesseract-core.").concat(typeof WebAssembly === 'object' ? 'wasm' : 'asm', ".js")
      });
      /***/
    },

    /***/
    "PhXl":
    /*!*************************************************!*\
      !*** ./node_modules/resolve-url/resolve-url.js ***!
      \*************************************************/

    /*! no static exports found */

    /***/
    function PhXl(module, exports, __webpack_require__) {
      var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__; // Copyright 2014 Simon Lydell
      // X11 (“MIT”) Licensed. (See LICENSE.)


      void function (root, factory) {
        if (true) {
          !(__WEBPACK_AMD_DEFINE_FACTORY__ = factory, __WEBPACK_AMD_DEFINE_RESULT__ = typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? __WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module) : __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
        } else {}
      }(this, function () {
        function resolveUrl()
        /* ...urls */
        {
          var numUrls = arguments.length;

          if (numUrls === 0) {
            throw new Error("resolveUrl requires at least one argument; got none.");
          }

          var base = document.createElement("base");
          base.href = arguments[0];

          if (numUrls === 1) {
            return base.href;
          }

          var head = document.getElementsByTagName("head")[0];
          head.insertBefore(base, head.firstChild);
          var a = document.createElement("a");
          var resolved;

          for (var index = 1; index < numUrls; index++) {
            a.href = arguments[index];
            resolved = a.href;
            base.href = resolved;
          }

          head.removeChild(base);
          return resolved;
        }

        return resolveUrl;
      });
      /***/
    },

    /***/
    "Seje":
    /*!*************************************************************!*\
      !*** ./node_modules/tesseract.js/src/utils/resolvePaths.js ***!
      \*************************************************************/

    /*! no static exports found */

    /***/
    function Seje(module, exports, __webpack_require__) {
      var isBrowser = __webpack_require__(
      /*! ./getEnvironment */
      "f4+5")('type') === 'browser';
      var resolveURL = isBrowser ? __webpack_require__(
      /*! resolve-url */
      "PhXl") : function (s) {
        return s;
      }; // eslint-disable-line

      module.exports = function (options) {
        var opts = _objectSpread({}, options);

        ['corePath', 'workerPath', 'langPath'].forEach(function (key) {
          if (typeof options[key] !== 'undefined') {
            opts[key] = resolveURL(opts[key]);
          }
        });
        return opts;
      };
      /***/

    },

    /***/
    "T00y":
    /*!**************************************************************!*\
      !*** ./node_modules/tesseract.js/src/worker/browser/send.js ***!
      \**************************************************************/

    /*! no static exports found */

    /***/
    function T00y(module, exports) {
      /**
       * send
       *
       * @name send
       * @function send packet to worker and create a job
       * @access public
       */
      module.exports = /*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(worker, packet) {
          return regeneratorRuntime.wrap(function _callee9$(_context9) {
            while (1) {
              switch (_context9.prev = _context9.next) {
                case 0:
                  worker.postMessage(packet);

                case 1:
                case "end":
                  return _context9.stop();
              }
            }
          }, _callee9);
        }));

        return function (_x6, _x7) {
          return _ref8.apply(this, arguments);
        };
      }();
      /***/

    },

    /***/
    "XbsK":
    /*!*******************************************************************!*\
      !*** ./node_modules/tesseract.js/src/constants/defaultOptions.js ***!
      \*******************************************************************/

    /*! no static exports found */

    /***/
    function XbsK(module, exports) {
      module.exports = {
        /*
         * default path for downloading *.traineddata
         */
        langPath: 'https://tessdata.projectnaptha.com/4.0.0',

        /*
         * Use BlobURL for worker script by default
         * TODO: remove this option
         *
         */
        workerBlobURL: true,
        logger: function logger() {}
      };
      /***/
    },

    /***/
    "Y6bo":
    /*!*******************************************!*\
      !*** ./node_modules/is-electron/index.js ***!
      \*******************************************/

    /*! no static exports found */

    /***/
    function Y6bo(module, exports) {
      // https://github.com/electron/electron/issues/2288
      function isElectron() {
        // Renderer process
        if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
          return true;
        } // Main process


        if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
          return true;
        } // Detect the user agent when the `nodeIntegration` option is set to true


        if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
          return true;
        }

        return false;
      }

      module.exports = isElectron;
      /***/
    },

    /***/
    "YNtM":
    /*!************************************************!*\
      !*** ./node_modules/tesseract.js/package.json ***!
      \************************************************/

    /*! exports provided: name, version, description, main, types, unpkg, jsdelivr, scripts, browser, author, contributors, license, devDependencies, dependencies, repository, bugs, homepage, collective, default */

    /***/
    function YNtM(module) {
      module.exports = JSON.parse("{\"name\":\"tesseract.js\",\"version\":\"2.1.1\",\"description\":\"Pure Javascript Multilingual OCR\",\"main\":\"src/index.js\",\"types\":\"src/index.d.ts\",\"unpkg\":\"dist/tesseract.min.js\",\"jsdelivr\":\"dist/tesseract.min.js\",\"scripts\":{\"start\":\"node scripts/server.js\",\"build\":\"rimraf dist && webpack --config scripts/webpack.config.prod.js\",\"profile:tesseract\":\"webpack-bundle-analyzer dist/tesseract-stats.json\",\"profile:worker\":\"webpack-bundle-analyzer dist/worker-stats.json\",\"prepublishOnly\":\"npm run build\",\"wait\":\"rimraf dist && wait-on http://localhost:3000/dist/tesseract.dev.js\",\"test\":\"npm-run-all -p -r start test:all\",\"test:all\":\"npm-run-all wait test:browser:* test:node:all\",\"test:node\":\"nyc mocha --exit --bail --require ./scripts/test-helper.js\",\"test:node:all\":\"npm run test:node -- ./tests/*.test.js\",\"test:browser-tpl\":\"mocha-headless-chrome -a incognito -a no-sandbox -a disable-setuid-sandbox -a disable-logging -t 300000\",\"test:browser:detect\":\"npm run test:browser-tpl -- -f ./tests/detect.test.html\",\"test:browser:recognize\":\"npm run test:browser-tpl -- -f ./tests/recognize.test.html\",\"test:browser:scheduler\":\"npm run test:browser-tpl -- -f ./tests/scheduler.test.html\",\"test:browser:FS\":\"npm run test:browser-tpl -- -f ./tests/FS.test.html\",\"lint\":\"eslint src\",\"postinstall\":\"opencollective-postinstall || true\"},\"browser\":{\"./src/worker/node/index.js\":\"./src/worker/browser/index.js\"},\"author\":\"\",\"contributors\":[\"jeromewu\"],\"license\":\"Apache-2.0\",\"devDependencies\":{\"@babel/core\":\"^7.7.7\",\"@babel/preset-env\":\"^7.7.7\",\"acorn\":\"^6.4.0\",\"babel-loader\":\"^8.0.6\",\"cors\":\"^2.8.5\",\"eslint\":\"^5.16.0\",\"eslint-config-airbnb\":\"^17.1.1\",\"eslint-plugin-import\":\"^2.19.1\",\"eslint-plugin-jsx-a11y\":\"^6.2.3\",\"eslint-plugin-react\":\"^7.17.0\",\"expect.js\":\"^0.3.1\",\"express\":\"^4.17.1\",\"mocha\":\"^5.2.0\",\"mocha-headless-chrome\":\"^2.0.3\",\"npm-run-all\":\"^4.1.5\",\"nyc\":\"^15.0.0\",\"rimraf\":\"^2.7.1\",\"wait-on\":\"^3.3.0\",\"webpack\":\"^4.41.4\",\"webpack-bundle-analyzer\":\"^3.6.0\",\"webpack-cli\":\"^3.3.10\",\"webpack-dev-middleware\":\"^3.7.2\"},\"dependencies\":{\"bmp-js\":\"^0.1.0\",\"file-type\":\"^12.4.1\",\"idb-keyval\":\"^3.2.0\",\"is-electron\":\"^2.2.0\",\"is-url\":\"^1.2.4\",\"node-fetch\":\"^2.6.0\",\"opencollective-postinstall\":\"^2.0.2\",\"regenerator-runtime\":\"^0.13.3\",\"resolve-url\":\"^0.2.1\",\"tesseract.js-core\":\"^2.2.0\",\"zlibjs\":\"^0.3.1\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/naptha/tesseract.js.git\"},\"bugs\":{\"url\":\"https://github.com/naptha/tesseract.js/issues\"},\"homepage\":\"https://github.com/naptha/tesseract.js\",\"collective\":{\"type\":\"opencollective\",\"url\":\"https://opencollective.com/tesseractjs\"}}");
      /***/
    },

    /***/
    "c+Cr":
    /*!*******************************************************!*\
      !*** ./node_modules/tesseract.js/src/createWorker.js ***!
      \*******************************************************/

    /*! no static exports found */

    /***/
    function cCr(module, exports, __webpack_require__) {
      var resolvePaths = __webpack_require__(
      /*! ./utils/resolvePaths */
      "Seje");

      var circularize = __webpack_require__(
      /*! ./utils/circularize */
      "5IdF");

      var createJob = __webpack_require__(
      /*! ./createJob */
      "cYUz");

      var _webpack_require__3 = __webpack_require__(
      /*! ./utils/log */
      "fIT2"),
          log = _webpack_require__3.log;

      var getId = __webpack_require__(
      /*! ./utils/getId */
      "/Hjt");

      var _webpack_require__4 = __webpack_require__(
      /*! ./constants/config */
      "oGhf"),
          defaultOEM = _webpack_require__4.defaultOEM;

      var _webpack_require__5 = __webpack_require__(
      /*! ./worker/node */
      "dyjd"),
          defaultOptions = _webpack_require__5.defaultOptions,
          spawnWorker = _webpack_require__5.spawnWorker,
          terminateWorker = _webpack_require__5.terminateWorker,
          onMessage = _webpack_require__5.onMessage,
          loadImage = _webpack_require__5.loadImage,
          send = _webpack_require__5.send;

      var workerCounter = 0;

      module.exports = function () {
        var _options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var id = getId('Worker', workerCounter);

        var _resolvePaths = resolvePaths(_objectSpread(_objectSpread({}, defaultOptions), _options)),
            logger = _resolvePaths.logger,
            errorHandler = _resolvePaths.errorHandler,
            options = _objectWithoutProperties(_resolvePaths, ["logger", "errorHandler"]);

        var resolves = {};
        var rejects = {};
        var worker = spawnWorker(options);
        workerCounter += 1;

        var setResolve = function setResolve(action, res) {
          resolves[action] = res;
        };

        var setReject = function setReject(action, rej) {
          rejects[action] = rej;
        };

        var startJob = function startJob(_ref9) {
          var jobId = _ref9.id,
              action = _ref9.action,
              payload = _ref9.payload;
          return new Promise(function (resolve, reject) {
            log("[".concat(id, "]: Start ").concat(jobId, ", action=").concat(action));
            setResolve(action, resolve);
            setReject(action, reject);
            send(worker, {
              workerId: id,
              jobId: jobId,
              action: action,
              payload: payload
            });
          });
        };

        var load = function load(jobId) {
          return startJob(createJob({
            id: jobId,
            action: 'load',
            payload: {
              options: options
            }
          }));
        };

        var writeText = function writeText(path, text, jobId) {
          return startJob(createJob({
            id: jobId,
            action: 'FS',
            payload: {
              method: 'writeFile',
              args: [path, text]
            }
          }));
        };

        var readText = function readText(path, jobId) {
          return startJob(createJob({
            id: jobId,
            action: 'FS',
            payload: {
              method: 'readFile',
              args: [path, {
                encoding: 'utf8'
              }]
            }
          }));
        };

        var removeFile = function removeFile(path, jobId) {
          return startJob(createJob({
            id: jobId,
            action: 'FS',
            payload: {
              method: 'unlink',
              args: [path]
            }
          }));
        };

        var FS = function FS(method, args, jobId) {
          return startJob(createJob({
            id: jobId,
            action: 'FS',
            payload: {
              method: method,
              args: args
            }
          }));
        };

        var loadLanguage = function loadLanguage() {
          var langs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'eng';
          var jobId = arguments.length > 1 ? arguments[1] : undefined;
          return startJob(createJob({
            id: jobId,
            action: 'loadLanguage',
            payload: {
              langs: langs,
              options: options
            }
          }));
        };

        var initialize = function initialize() {
          var langs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'eng';
          var oem = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOEM;
          var jobId = arguments.length > 2 ? arguments[2] : undefined;
          return startJob(createJob({
            id: jobId,
            action: 'initialize',
            payload: {
              langs: langs,
              oem: oem
            }
          }));
        };

        var setParameters = function setParameters() {
          var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
          var jobId = arguments.length > 1 ? arguments[1] : undefined;
          return startJob(createJob({
            id: jobId,
            action: 'setParameters',
            payload: {
              params: params
            }
          }));
        };

        var recognize = /*#__PURE__*/function () {
          var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(image) {
            var opts,
                jobId,
                _args10 = arguments;
            return regeneratorRuntime.wrap(function _callee10$(_context10) {
              while (1) {
                switch (_context10.prev = _context10.next) {
                  case 0:
                    opts = _args10.length > 1 && _args10[1] !== undefined ? _args10[1] : {};
                    jobId = _args10.length > 2 ? _args10[2] : undefined;
                    _context10.t0 = startJob;
                    _context10.t1 = createJob;
                    _context10.t2 = jobId;
                    _context10.next = 7;
                    return loadImage(image);

                  case 7:
                    _context10.t3 = _context10.sent;
                    _context10.t4 = opts;
                    _context10.t5 = {
                      image: _context10.t3,
                      options: _context10.t4
                    };
                    _context10.t6 = {
                      id: _context10.t2,
                      action: 'recognize',
                      payload: _context10.t5
                    };
                    _context10.t7 = (0, _context10.t1)(_context10.t6);
                    return _context10.abrupt("return", (0, _context10.t0)(_context10.t7));

                  case 13:
                  case "end":
                    return _context10.stop();
                }
              }
            }, _callee10);
          }));

          return function recognize(_x8) {
            return _ref10.apply(this, arguments);
          };
        }();

        var getPDF = function getPDF() {
          var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Tesseract OCR Result';
          var textonly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          var jobId = arguments.length > 2 ? arguments[2] : undefined;
          return startJob(createJob({
            id: jobId,
            action: 'getPDF',
            payload: {
              title: title,
              textonly: textonly
            }
          }));
        };

        var detect = /*#__PURE__*/function () {
          var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(image, jobId) {
            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _context11.t0 = startJob;
                    _context11.t1 = createJob;
                    _context11.t2 = jobId;
                    _context11.next = 5;
                    return loadImage(image);

                  case 5:
                    _context11.t3 = _context11.sent;
                    _context11.t4 = {
                      image: _context11.t3
                    };
                    _context11.t5 = {
                      id: _context11.t2,
                      action: 'detect',
                      payload: _context11.t4
                    };
                    _context11.t6 = (0, _context11.t1)(_context11.t5);
                    return _context11.abrupt("return", (0, _context11.t0)(_context11.t6));

                  case 10:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11);
          }));

          return function detect(_x9, _x10) {
            return _ref11.apply(this, arguments);
          };
        }();

        var terminate = /*#__PURE__*/function () {
          var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    if (worker !== null) {
                      /*
                      await startJob(createJob({
                        id: jobId,
                        action: 'terminate',
                      }));
                      */
                      terminateWorker(worker);
                      worker = null;
                    }

                    return _context12.abrupt("return", Promise.resolve());

                  case 2:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12);
          }));

          return function terminate() {
            return _ref12.apply(this, arguments);
          };
        }();

        onMessage(worker, function (_ref13) {
          var workerId = _ref13.workerId,
              jobId = _ref13.jobId,
              status = _ref13.status,
              action = _ref13.action,
              data = _ref13.data;

          if (status === 'resolve') {
            log("[".concat(workerId, "]: Complete ").concat(jobId));
            var d = data;

            if (action === 'recognize') {
              d = circularize(data);
            } else if (action === 'getPDF') {
              d = Array.from(_objectSpread(_objectSpread({}, data), {}, {
                length: Object.keys(data).length
              }));
            }

            resolves[action]({
              jobId: jobId,
              data: d
            });
          } else if (status === 'reject') {
            rejects[action](data);

            if (errorHandler) {
              errorHandler(data);
            } else {
              throw Error(data);
            }
          } else if (status === 'progress') {
            logger(data);
          }
        });
        return {
          id: id,
          worker: worker,
          setResolve: setResolve,
          setReject: setReject,
          load: load,
          writeText: writeText,
          readText: readText,
          removeFile: removeFile,
          FS: FS,
          loadLanguage: loadLanguage,
          initialize: initialize,
          setParameters: setParameters,
          recognize: recognize,
          getPDF: getPDF,
          detect: detect,
          terminate: terminate
        };
      };
      /***/

    },

    /***/
    "cR1X":
    /*!*************************************************************************!*\
      !*** ./node_modules/tesseract.js/src/worker/browser/terminateWorker.js ***!
      \*************************************************************************/

    /*! no static exports found */

    /***/
    function cR1X(module, exports) {
      /**
       * terminateWorker
       *
       * @name terminateWorker
       * @function terminate worker
       * @access public
       */
      module.exports = function (worker) {
        worker.terminate();
      };
      /***/

    },

    /***/
    "cYUz":
    /*!****************************************************!*\
      !*** ./node_modules/tesseract.js/src/createJob.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function cYUz(module, exports, __webpack_require__) {
      var getId = __webpack_require__(
      /*! ./utils/getId */
      "/Hjt");

      var jobCounter = 0;

      module.exports = function (_ref14) {
        var _id = _ref14.id,
            action = _ref14.action,
            _ref14$payload = _ref14.payload,
            payload = _ref14$payload === void 0 ? {} : _ref14$payload;
        var id = _id;

        if (typeof id === 'undefined') {
          id = getId('Job', jobCounter);
          jobCounter += 1;
        }

        return {
          id: id,
          action: action,
          payload: payload
        };
      };
      /***/

    },

    /***/
    "dyf6":
    /*!***************************************************************************************!*\
      !*** ./src/app/views/others/kyc-basic-information/kyc-basic-information.component.ts ***!
      \***************************************************************************************/

    /*! exports provided: KycBasicInformationComponent, OtpModel, OtpModelUpdate */

    /***/
    function dyf6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KycBasicInformationComponent", function () {
        return KycBasicInformationComponent;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpModel", function () {
        return OtpModel;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "OtpModelUpdate", function () {
        return OtpModelUpdate;
      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/common/http */
      "IheW");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "s7LF");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var _cutomer_finger_print_cutomer_finger_print_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../cutomer-finger-print/cutomer-finger-print.component */
      "DyWe");
      /* harmony import */


      var _kyc_esign_kyc_esign_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../kyc-esign/kyc-esign.component */
      "qFMo");
      /* harmony import */


      var _kyc_iris_scan_kyc_iris_scan_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../kyc-iris-scan/kyc-iris-scan.component */
      "POE1");
      /* harmony import */


      var _kyc_face_scan_kyc_face_scan_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../kyc-face-scan/kyc-face-scan.component */
      "hwCN");
      /* harmony import */


      var _kyc_verification_method_kyc_verification_method_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../kyc-verification-method/kyc-verification-method.component */
      "Mxxu");
      /* harmony import */


      var _verification_completed_verification_completed_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ../verification-completed/verification-completed.component */
      "vjsB");
      /* harmony import */


      var _kyc_verification_kyc_verification_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ../kyc-verification/kyc-verification.component */
      "3ms1");
      /* harmony import */


      var app_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! app/shared/services/finger-print-capture.service */
      "rp8y");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! app/shared/services/data.service */
      "iiaH");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "ura0");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");

      var _c0 = ["fileInput"];

      function KycBasicInformationComponent_table_9_mat_option_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycBasicInformationComponent_table_9_mat_option_8_Template_mat_option_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r11.changeValue($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var biometric_r10 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", biometric_r10)("disabled", ctx_r3.isDocumentOptionDisabled2(biometric_r10));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", biometric_r10, " ");
        }
      }

      function KycBasicInformationComponent_table_9_mat_error_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Biometric Type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycBasicInformationComponent_table_9_div_18_mat_card_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r14.fingerName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "data:image/jpg;base64," + item_r14.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function KycBasicInformationComponent_table_9_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, KycBasicInformationComponent_table_9_div_18_mat_card_1_Template, 4, 2, "mat-card", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.biometricData);
        }
      }

      function KycBasicInformationComponent_table_9_div_19_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/images/no-image.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function KycBasicInformationComponent_table_9_div_19_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 32);
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r18.imageURLBioScan, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function KycBasicInformationComponent_table_9_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, KycBasicInformationComponent_table_9_div_19_div_1_Template, 2, 1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, KycBasicInformationComponent_table_9_div_19_ng_template_2_Template, 1, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.imageURLBioScan == "not_available")("ngIfElse", _r17);
        }
      }

      function KycBasicInformationComponent_table_9_div_20_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/images/no-image.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function KycBasicInformationComponent_table_9_div_20_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 32);
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r21.imageURLIrish, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function KycBasicInformationComponent_table_9_div_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, KycBasicInformationComponent_table_9_div_20_div_1_Template, 2, 1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, KycBasicInformationComponent_table_9_div_20_ng_template_2_Template, 1, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.imageURLIrish == "not_available" || ctx_r7.imageURLIrish == null)("ngIfElse", _r20);
        }
      }

      function KycBasicInformationComponent_table_9_div_21_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/images/no-image.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function KycBasicInformationComponent_table_9_div_21_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 32);
        }

        if (rf & 2) {
          var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r24.imageURLFace, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function KycBasicInformationComponent_table_9_div_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, KycBasicInformationComponent_table_9_div_21_div_1_Template, 2, 1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, KycBasicInformationComponent_table_9_div_21_ng_template_2_Template, 1, 1, "ng-template", null, 31, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.imageURLFace == "not_available" || ctx_r8.imageURLFace == null)("ngIfElse", _r23);
        }
      }

      function KycBasicInformationComponent_table_9_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/images/no-image.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function KycBasicInformationComponent_table_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tbody", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-select", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-option", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, KycBasicInformationComponent_table_9_mat_option_8_Template, 2, 3, "mat-option", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, KycBasicInformationComponent_table_9_mat_error_9_Template, 2, 0, "mat-error", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycBasicInformationComponent_table_9_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);

            var item_r1 = ctx.$implicit;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r25.openDialogForType(item_r1.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Scan");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycBasicInformationComponent_table_9_Template_button_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);

            var item_r1 = ctx.$implicit;
            var i_r2 = ctx.index;

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r27.deleteBioMetric(item_r1.value, i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-icon", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, KycBasicInformationComponent_table_9_div_18_Template, 2, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, KycBasicInformationComponent_table_9_div_19_Template, 4, 2, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, KycBasicInformationComponent_table_9_div_20_Template, 4, 2, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](21, KycBasicInformationComponent_table_9_div_21_Template, 4, 2, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](22, KycBasicInformationComponent_table_9_div_22_Template, 3, 1, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;
          var i_r2 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.biometrics_Type);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.controls.bioDocumentType.touched && !item_r1.controls.bioDocumentType.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.biometricData.length > 0 && ctx_r0.diaplayBioCard && item_r1.controls.bioDocumentType.value == "Fingerprint Scan");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.biometricScan && item_r1.controls.bioDocumentType.value == "Fingerprint Scan");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.irisScan && item_r1.controls.bioDocumentType.value == "Irish Scan");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.faceScan && item_r1.controls.bioDocumentType.value == "Face Scan");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.eScan && item_r1.controls.bioDocumentType.value == "E-Sign");
        }
      }

      var _c1 = function _c1(a0, a1) {
        return {
          "Next": a0,
          "Next1": a1
        };
      };

      var KycBasicInformationComponent = /*#__PURE__*/function () {
        function KycBasicInformationComponent(http, api, dialog, router, snack, fb, fingerPrintService, shareDataService, ls) {
          var _this24 = this;

          _classCallCheck(this, KycBasicInformationComponent);

          this.http = http;
          this.api = api;
          this.dialog = dialog;
          this.router = router;
          this.snack = snack;
          this.fb = fb;
          this.fingerPrintService = fingerPrintService;
          this.shareDataService = shareDataService;
          this.ls = ls;
          this.settingallCustInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.imageUrl = "https://i.ibb.co/fDWsn3G/buck.jpg";
          this.editFile = true;
          this.removeUpload = false;
          this.docData = [];
          this.firstName = "jaya";
          this.otpmodel = new OtpModel();
          this.billing = true;
          this.document_type = ["4", "5", "11", "12"];
          this.additionalDocs = [];
          this.enableButton = false;
          this.selectedOptions2 = [];
          this.disableAddAndDelete = false;
          this.disableFinish = false;
          this.biometricData = [];
          this.diaplayBioCard = false;
          this.irisScan = false;
          this.eScan = false;
          this.biometricScan = false;
          this.dataFetched = false;
          this.uplaod = new _kyc_verification_kyc_verification_component__WEBPACK_IMPORTED_MODULE_12__["Upload"]();
          this.customerId = null;
          this.disableNext = true;

          this.isDocumentOptionDisabled2 = function (value) {
            // console.log('selectedOptions2:: ', this.selectedOptions2);
            return _this24.selectedOptions2.includes(value);
          };
        }

        _createClass(KycBasicInformationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this25 = this;

            // this.kycRef = sessionStorage.getItem("kyc_reference");
            this.api.getKycRef().subscribe(function (resp) {
              _this25.assignKyc(resp.kycReference);
            });
            this.api.getNewUserInfo().subscribe(function (info) {
              _this25.updateUserInfo = info;
            });
            this.api.getKycDataFetchedInfo().subscribe(function (data) {
              console.log('data fetch resp :: ', data);
              _this25.kycVerificationForm = _this25.fb.group({
                // documentsList: this.fb.array([this.createItem()]),
                // biometricList: (data=== 'DATA FETCH')?this.fb.array([]):this.fb.array([this.createBioItem()]),
                biometricList: _this25.fb.array([]),
                id: [""]
              });

              _this25.kycVerificationForm.valueChanges.subscribe(function (data) {
                if (data === 'DATA FETCH') {
                  _this25.kycVerificationForm.get('biometricList').setValue(_this25.fb.array([]));
                } else {
                  if (data.biometricList.length < 1) {
                    _this25.kycVerificationForm.get('biometricList').setValue(_this25.fb.array([_this25.createBioItem()]));
                  }
                }
              });

              if (data === 'DATA FETCH') {
                _this25.dataFetched = true;
                _this25.dataFetchedValue = data;
              } else {
                _this25.dataFetched = false; // this.loadBioDefault(1);
              }
            });
            console.log(this.kycVerificationForm);
            this.arrayForm = this.fb.group({
              rows: this.fb.array([])
            });
            this.initGroup();
            this.getDoc();
            this.disableNext = true;
            this.disableFinish = true;
            this.shareDataService.getCustomerId.subscribe(function (cId) {
              if (cId != null) {
                _this25.refreshCustomerId = cId;

                _this25.getAdditionalDocuments(cId);
              }
            });
            this.customerId = this.ls.getItem('customer_id');
            this.kycVerificationForm.valueChanges.subscribe(function (data) {
              console.log('value change data:: ', data);

              if (data.biometricList.length > 0) {
                _this25.disableFinish = true;
                _this25.selectedOptions2 = [];
                data.biometricList.forEach(function (element, index) {
                  console.log('index :: ', index); // if(element.id === '' || element.id === ""){
                  //   data.biometricList.splice(0,1);
                  // }

                  _this25.selectedOptions2.push(element.bioDocumentType);
                });
              }

              if (data.biometricList.length == 3) {
                _this25.disableAddAndDelete = true;
              } else {
                _this25.disableAddAndDelete = false;
              }
            }); // this.loadBioDefault(1);

            console.log('this.kycVerificationForm :: ', this.kycVerificationForm);
            localStorage.getItem('customer_id') ? this.getAdditionalDocuments(localStorage.getItem('customer_id')) : '';
          }
        }, {
          key: "assignKyc",
          value: function assignKyc(kycReference) {
            this.kycRef = kycReference;
          }
        }, {
          key: "createItem",
          value: function createItem() {
            return this.fb.group({
              id: [""],
              documentName: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              documentType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
            }); // this.changeValue2(this.kycVerificationForm.controls.documentsList['controls'][0].controls.documentName.,0)
          }
        }, {
          key: "createBioItem",
          value: function createBioItem() {
            return this.fb.group({
              id: [""],
              bioDocumentType: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
              fileUrl: [""]
            });
          }
        }, {
          key: "createBioItemData",
          value: function createBioItemData(data, type, fileUrl) {
            console.log('on load create bio data :: ', data, type);
            return this.fb.group({
              id: data,
              bioDocumentType: type,
              fileUrl: fileUrl
            });
          }
        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {}
        }, {
          key: "autofillDetails",
          value: function autofillDetails() {
            this.settingallCustInfo.emit({
              cifNumber: this.kycVerificationForm.controls.cifNumber.value
            });
          }
        }, {
          key: "getAdditionalDocuments",
          value: function getAdditionalDocuments(customerId) {
            var _this26 = this;

            customerId ? this.customerId = customerId : '';

            for (var key in this.document_type) {
              var bioName;

              if (Object.prototype.hasOwnProperty.call(this.document_type, key)) {
                var element = this.document_type[key];
                console.log('bio doc :: ', element, key, customerId);
                this.api.getCustomerDocuments(customerId, element).subscribe(function (data) {
                  if (data != null) {
                    _this26.disableFinish = false;
                    console.log("data:: ", data);

                    if (data[0].documentType == 4 || data[0].documentType == 5) {
                      bioName = 'Fingerprint Scan';
                      _this26.imageURLBioScan = data[0].fileUrl;
                      _this26.biometricScan = true;
                    }

                    if (data[0].documentType == 11) {
                      bioName = 'Irish Scan';
                      _this26.imageURLIrish = data[0].fileUrl;
                      _this26.irisScan = true;
                    }

                    if (data[0].documentType == 12) {
                      bioName = 'Face Scan';
                      _this26.imageURLFace = data[0].fileUrl;
                      _this26.faceScan = true;
                    }

                    if (bioName != null && bioName != undefined) {
                      _this26.bioFetchDataBuild(data[0], bioName);

                      console.log('kyc :: ', _this26.kycVerificationForm);
                    }
                  }
                });
              }
            }
          }
        }, {
          key: "bioFetchDataBuild",
          value: function bioFetchDataBuild(data, bioName) {
            console.log('in build data');
            this.addBioDocsData(data.id, bioName, data.fileUrl);
            console.log('kyc :: ', this.kycVerificationForm);
          }
        }, {
          key: "deleteAdditionalDoc",
          value: function deleteAdditionalDoc(report, index) {
            var _this27 = this;

            this.additionalDocs = this.kycVerificationForm.get('documentsList');
            console.log(this.additionalDocs);
            this.additionalDocs.removeAt(index);
            this.selectedOptions2.forEach(function (element, index) {
              if (element == report.documentType) {
                _this27.selectedOptions2.splice(index, 1);
              }
            });

            if (report.id != null && report.id != '') {
              console.log("report.id::" + report.id);
              this.api.deleteCustomerDoc(this.customerId, report.id).subscribe(function (data) {});
            }

            this.snack.open('Document Deleted Successfully', 'OK', {
              duration: 4000,
              verticalPosition: 'top',
              horizontalPosition: 'right'
            });
            console.log(this.kycVerificationForm.get('documentsList'));
            console.log(this.kycVerificationForm.controls);

            if (this.documentsList.controls.length) {
              this.enableButton = true;
            } else {
              this.enableButton = false;
            }
          }
        }, {
          key: "deleteBioMetric",
          value: function deleteBioMetric(report, index) {
            var _this28 = this;

            var deleteRecord = this.kycVerificationForm.get('biometricList');
            console.log(report, deleteRecord, index);
            deleteRecord.removeAt(index);
            this.imageURLIrish = '';
            this.imageURLFace = '';
            this.imageURLBioScan = '';
            this.api.deleteCustomerDoc(this.refreshCustomerId, report.id).subscribe(function (data) {
              console.log("data after delete", _this28.refreshCustomerId);
            });
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            console.log('view');
          }
        }, {
          key: "bioTypeChanged",
          value: function bioTypeChanged(value) {
            console.log('form', value);
            console.log('form', this.kycVerificationForm.get('biometricList')['controls']);
            var data = this.kycVerificationForm.get('biometricList')['controls'];
            var validindex = data.findIndex(function (i) {
              return i.valid == false;
            });

            if (validindex == -1) {
              this.disableFinish = false;
            }

            console.log('ind', validindex);
          }
        }, {
          key: "openDialogForType",
          value: function openDialogForType(data) {
            var _this29 = this;

            // this.irisScan = false;
            // this.faceScan = false;
            // this.biometricScan=false;
            if (data.bioDocumentType == "Fingerprint Scan") {
              var dialogRef = this.dialog.open(_cutomer_finger_print_cutomer_finger_print_component__WEBPACK_IMPORTED_MODULE_6__["CutomerFingerPrintComponent"], {
                data: {
                  bioData: this.biometricData,
                  customerId: this.refreshCustomerId
                },
                disableClose: true
              });
              dialogRef.afterClosed().subscribe(function (submit) {
                console.log('submit :: ', submit);
                _this29.biometricData = submit.data;

                if (_this29.biometricData.length > 0) {
                  _this29.diaplayBioCard = true;
                  _this29.biometricScan = false;
                } else {
                  if (submit.isScanned) {
                    _this29.biometricScan = true;
                    _this29.imageURLBioScan = _this29.ls.getItem('imageURLBio');
                    _this29.diaplayBioCard = false;
                  }
                }

                _this29.disableFinish = false;
              });
            }

            if (data.bioDocumentType == "Irish Scan") {
              // IrisScan2Component
              var _dialogRef = this.dialog.open(_kyc_iris_scan_kyc_iris_scan_component__WEBPACK_IMPORTED_MODULE_8__["KycIrisScanComponent"], {
                data: {
                  number: "9656849771",
                  type: "Mobile Number",
                  customerId: this.refreshCustomerId
                },
                disableClose: true
              });

              _dialogRef.afterClosed().subscribe(function (submit) {
                console.log('submit :: ', submit);

                if (submit.isScanned) {
                  _this29.irisScan = true;
                  _this29.imageURLIrish = "".concat(app_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_13__["API_URL"], "/rest/upload/downloadDocs/?fileName=iris_biometric.jpg");
                } else {
                  _this29.irisScan = false;
                  _this29.imageURLIrish = '';
                }

                _this29.disableFinish = false;
              });
            }

            if (data.bioDocumentType == "Face Scan") {
              var _dialogRef2 = this.dialog.open(_kyc_face_scan_kyc_face_scan_component__WEBPACK_IMPORTED_MODULE_9__["KycFaceScanComponent"], {
                data: {
                  number: "9656849771",
                  type: "Mobile Number",
                  customerId: this.refreshCustomerId
                },
                disableClose: true
              });

              _dialogRef2.afterClosed().subscribe(function (submit) {
                console.log('submit :: ', submit);

                if (submit.isScanned) {
                  _this29.faceScan = true;
                  _this29.imageURLFace = "".concat(app_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_13__["API_URL"], "/rest/upload/downloadDocs/?fileName=face_biometric.jpg");
                } else {
                  _this29.imageURLFace = '';
                  _this29.faceScan = false;
                }

                _this29.disableFinish = false;
              });
            }

            if (data.bioDocumentType == "E-Sign") {
              var _dialogRef3 = this.dialog.open(_kyc_esign_kyc_esign_component__WEBPACK_IMPORTED_MODULE_7__["KycEsignComponent"], {
                data: {
                  number: "9656849771",
                  type: "Mobile Number"
                },
                disableClose: true
              });

              _dialogRef3.afterClosed().subscribe(function (submit) {
                console.log('submit :: ', submit);

                if (submit.action == 'closed') {
                  _this29.eScan = true;
                } else {
                  _this29.eScan = false;
                }
              });
            }
          }
        }, {
          key: "tabClick",
          value: function tabClick(event) {
            var tab = event.tab.textLabel;

            if (tab === "Documents Upload") {
              this.router.navigateByUrl("/others/documents");
            }

            if (tab === "verification") {
              this.router.navigateByUrl("/others/verification");
            }

            if (tab === "Basic Information") {
              this.router.navigateByUrl("/others/kyc");
            }
          }
        }, {
          key: "onNext",
          value: function onNext(kycVerificationForm, arrayForm) {
            // location.reload();
            this.kycVerificationForm.reset();
            this.api.setIndex({
              index: 0
            });
            this.api.setFinishFlag({
              finishFlag: true
            });
            this.kycVerificationForm.reset(); //this.disableFinish = false;

            console.log(this.kycVerificationForm);
            var dialogRef = this.dialog.open(_verification_completed_verification_completed_component__WEBPACK_IMPORTED_MODULE_11__["VerificationCompletedComponent"], {
              data: {
                kycRef: this.kycRef
              },
              disableClose: true
            });
            dialogRef.afterClosed().subscribe(function (submit) {});
          }
        }, {
          key: "previous",
          value: function previous() {
            this.api.setIndex({
              index: 1
            });
            var customerId = localStorage.getItem('customer_id');
            console.log("custId::", localStorage.getItem('customer_id'));
            this.shareDataService.shareCustomerId(customerId);
          }
        }, {
          key: "changeValue2",
          value: function changeValue2(value, index) {
            var _this30 = this;

            console.log('value :: ', value, ' index:: ', index);

            if (this.DocumentsName[index]) {
              this.selectedOptions2 = this.selectedOptions2.filter(function (val) {
                return val !== _this30.DocumentsName[index];
              });
            } // this.DocumentsName[index] = value;


            this.selectedOptions2.push(value); // this.kycVerificationForm.controls.documentType.setValue('');
            // this.arrayDocumentType = this.arrayDocumentType.filter(document => document !== value);
          }
        }, {
          key: "onFileChanged",
          value: function onFileChanged(event) {
            var _this31 = this;

            this.selectedFiles = event.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);

            reader.onload = function (event2) {
              _this31.imgUrl = reader.result;

              _this31.fun(event.target.files[0], _this31.selectedFiles);
            };
          }
        }, {
          key: "fun",
          value: function fun(event, url) {
            var cId = this.customerId;
            var uploadData = new FormData();
            var data = {
              customerId: this.customerId,
              documentName: "Profile Image",
              documentType: "1",
              fileType: event.type,
              fileName: event.name,
              verificationType: "KYC verification"
            };
            uploadData.append("data", JSON.stringify(data));
            uploadData.append("file", url);
            this.api.upload(uploadData).subscribe(function (res) {});
          }
        }, {
          key: "fun1",
          value: function fun1(event, url, docName, docType) {
            var _this32 = this;

            var cId = this.customerId;
            var uploadData = new FormData();
            console.log("this.customerId::", this.customerId);
            var data = {
              customerId: this.refreshCustomerId,
              documentName: this.kycVerificationForm.value.documentName,
              documentType: "2",
              fileType: event.type,
              fileName: event.name,
              verificationType: "KYC verification"
            };
            uploadData.append("data", JSON.stringify(data));
            uploadData.append("file", url);
            this.api.upload(uploadData).subscribe(function (res) {}, function (error) {
              if (error.status == 201) {
                _this32.kycVerificationForm.get("upload").patchValue(true);

                _this32.snack.open("Document Uploaded!", "OK", {
                  duration: 4000,
                  verticalPosition: "top",
                  horizontalPosition: "right"
                });
              }
            });
          }
        }, {
          key: "fun2",
          value: function fun2(event, url, docName, docType) {
            var _this33 = this;

            var cId = this.customerId;
            var uploadData = new FormData();
            console.log("this.customerId::", this.customerId);
            var data = {
              customerId: this.refreshCustomerId,
              documentName: docName,
              documentType: "2",
              fileType: event.type,
              fileName: event.name,
              verificationType: "KYC verification"
            };
            uploadData.append("data", JSON.stringify(data));
            uploadData.append("file", url);
            this.api.upload(uploadData).subscribe(function (res) {
              console.log("res", res);
            }, function (error) {
              if (error.status == 201) {
                _this33.kycVerificationForm.get("upload").patchValue(true);

                _this33.snack.open("Document Uploaded!", "OK", {
                  duration: 4000,
                  verticalPosition: "top",
                  horizontalPosition: "right"
                });
              }
            });
          }
        }, {
          key: "onUpload",
          value: function onUpload(event, KycForm) {
            var _this34 = this;

            this.selectedFiles = event.target.files[0];
            console.log(this.selectedFiles);
            this.fileName = this.selectedFiles.name;
            console.log(this.fileName);
            this.kycVerificationForm.controls.documentType.patchValue(this.fileName);
            console.log("doo", this.kycVerificationForm.controls.documentType.patchValue(this.fileName));
            console.log(this.fileName);
            this.fun1(event.target.files[0], this.selectedFiles, KycForm.documentName, KycForm.documentType); // Below part is used to display the selected image

            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.readAsText(this.selectedFiles);

            reader.onload = function (event2) {
              _this34.fileUrl = reader.result;
            };
          }
        }, {
          key: "onUpload1",
          value: function onUpload1(event, KycForm, index) {
            var _this35 = this;

            var kyc = KycForm.documentsList[index].documentName;
            this.selectedFiles = event.target.files[0];
            this.fun2(event.target.files[0], this.selectedFiles, kyc, KycForm.documentType);
            this.fileName = this.selectedFiles.name;
            KycForm.documentsList[index].documentType = this.fileName;
            console.log(this.fileName);
            this.kycVerificationForm.controls.documentsList['controls'][index].controls.documentType.setValue(this.fileName); // for(let i=0;i<KycForm.documentsList.length;i++)
            // {console.log("in loop",i);
            //   console.log(this.kycVerificationForm.controls.documentsList['controls'][i].controls.documentType.setValue(this.fileName));
            // }
            // this.kycVerificationForm.get('documentsList').patchValue([{
            //   documentType:this.fileName
            // }]);

            console.log("this", this.kycVerificationForm.get('documentsList').value);
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);
            reader.readAsText(this.selectedFiles);

            reader.onload = function (event2) {
              _this35.fileUrl = reader.result;
            };
          }
        }, {
          key: "toMakeButton",
          value: function toMakeButton() {
            document.getElementById("fileId").click();
          }
        }, {
          key: "openDialog",
          value: function openDialog() {
            this.a = this.kycVerificationForm.get("bioDocumentName").value;

            if (this.a == "Finger Print") {
              var dialogRef = this.dialog.open(_kyc_verification_method_kyc_verification_method_component__WEBPACK_IMPORTED_MODULE_10__["KycVerificationMethodComponent"], {
                data: {
                  number: "9656849771",
                  type: "Mobile Number"
                },
                disableClose: true
              });
              dialogRef.afterClosed().subscribe(function (submit) {});
            }

            if (this.a == "Iris Scan") {
              var _dialogRef4 = this.dialog.open(_kyc_iris_scan_kyc_iris_scan_component__WEBPACK_IMPORTED_MODULE_8__["KycIrisScanComponent"], {
                data: {
                  number: "9656849771",
                  type: "Mobile Number"
                },
                disableClose: true
              });

              _dialogRef4.afterClosed().subscribe(function (submit) {});
            }

            if (this.a == "E-Sign") {
              var _dialogRef5 = this.dialog.open(_kyc_esign_kyc_esign_component__WEBPACK_IMPORTED_MODULE_7__["KycEsignComponent"], {
                data: {
                  number: "9656849771",
                  type: "Mobile Number"
                },
                disableClose: true
              });

              _dialogRef5.afterClosed().subscribe(function (submit) {});
            }
          }
        }, {
          key: "handleFileInput",
          value: function handleFileInput(file) {
            var _this36 = this;

            this.fileToUpload = file.item(0); //Show image preview

            var reader = new FileReader();

            reader.onload = function (event) {
              _this36.imageUrl = event.target.result;
            };

            reader.readAsDataURL(this.fileToUpload);
          }
        }, {
          key: "uploadFile",
          value: function uploadFile(event) {
            var _this37 = this;

            var reader = new FileReader(); // HTML5 FileReader API

            reader.onload = function () {
              _this37.fileUrl = reader.result;

              _this37.kycVerificationForm.patchValue({
                file: reader.result
              });

              _this37.editFile = false; // this.removeUpload = true;
            }; // ChangeDetectorRef since file is loading outside the zone

          } // Function to remove uploaded file

        }, {
          key: "removeUploadedFile",
          value: function removeUploadedFile() {}
        }, {
          key: "addAccClass",
          value: function addAccClass() {
            var doc = new _kyc_verification_kyc_verification_component__WEBPACK_IMPORTED_MODULE_12__["DocData"]();
            this.docData.push(doc);
          }
        }, {
          key: "removeRow",
          value: function removeRow(index) {
            console.log(index);
            this.kycVerificationForm.get("documentsList").removeAt(index);
          }
        }, {
          key: "initGroup",
          value: function initGroup() {
            var rows = this.arrayForm.get("rows");
            rows.push(this.fb.group({
              id: [""],
              documentName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
              documentType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            }));
          }
        }, {
          key: "getDoc",
          value: function getDoc() {
            var _this38 = this;

            this.dropVariableDoc = "document_type";
            this.docName = "document_name";
            this.bioName = "biometrics_Name";
            this.bioType = "biometrics_Type";
            this.api.getDropDownValues(this.dropVariableDoc).subscribe(function (data) {
              _this38.Documents = data;
            });
            this.api.getDropDownValues(this.docName).subscribe(function (resp) {
              _this38.DocumentsName = resp;
            });
            this.api.getDropDownValues(this.bioName).subscribe(function (response) {
              _this38.biometrics_Name = response;
            });
            this.api.getDropDownValues(this.bioType).subscribe(function (responseData) {
              _this38.biometrics_Type = responseData;
            });
          }
        }, {
          key: "check",
          value: function check(docData) {}
        }, {
          key: "radioChange",
          value: function radioChange(event) {
            if (event.value == 1) {
              this.billing = true;
            }

            if (event.value == 2) {
              this.billing = false;
            }
          }
        }, {
          key: "onScan",
          value: function onScan() {
            this.fingerPrintService.CallingSGIFPGetData().subscribe(function (capFingerPrint) {});
          }
        }, {
          key: "SuccessFunc",
          value: function SuccessFunc(result) {
            if (result.ErrorCode == 0) {
              /* 	Display BMP data in image tag
                  BMP data is in base 64 format
              */
              // if (result != null && result.BMPBase64.length > 0) {
              //   document.getElementById("FPImage1").src = "data:image/bmp;base64," + result.BMPBase64;
              // }
            }
          }
        }, {
          key: "addDocs",
          value: function addDocs() {
            this.documentsList = this.kycVerificationForm.get('documentsList');
            this.documentsList.push(this.createItem());
          }
        }, {
          key: "loadBioDefault",
          value: function loadBioDefault(count) {
            this.biometricList = this.kycVerificationForm.get('biometricList');

            for (var index = 0; index < count; index++) {
              this.biometricList.push(this.createBioItem());
            }
          }
        }, {
          key: "addBioDocs",
          value: function addBioDocs() {
            this.biometricList = this.kycVerificationForm.get('biometricList');
            this.biometricList.push(this.createBioItem());
          }
        }, {
          key: "addBioDocsData",
          value: function addBioDocsData(data, type, fileUrl) {
            console.log('in add bio docs :: ', data, type);

            if (data != '') {
              this.biometricList = this.kycVerificationForm.get('biometricList');
              this.biometricList.push(this.createBioItemData(data, type, fileUrl));
              console.log('this.biometricList :: ', this.biometricList); // this.kycVerificationForm.get('biometricList').patchValue(this.createBioItemData(data, type));
              // console.log('this.kycVerificationForm :: ', this.kycVerificationForm)
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.shareDataService.shareCustomerId(null);
          }
        }, {
          key: "patchData",
          value: function patchData() {}
        }, {
          key: "changeValue",
          value: function changeValue(event) {
            this.disableFinish = true;
          }
        }]);

        return KycBasicInformationComponent;
      }();

      KycBasicInformationComponent.ɵfac = function KycBasicInformationComponent_Factory(t) {
        return new (t || KycBasicInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_13__["FingerPrintCaptureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_15__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_16__["LocalStoreService"]));
      };

      KycBasicInformationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: KycBasicInformationComponent,
        selectors: [["app-kyc-basic-information"]],
        viewQuery: function KycBasicInformationComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.el = _t.first);
          }
        },
        inputs: {
          verificationInfo: "verificationInfo"
        },
        outputs: {
          settingallCustInfo: "settingallCustInfo"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]],
        decls: 22,
        vars: 8,
        consts: [[1, "m-333", 2, "padding-left", "4.5%", "padding-right", "4.5%"], [1, "matCard"], [3, "formGroup"], [1, "verificationHead"], [1, "line"], ["formArrayName", "biometricList", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 3, "disabled", "click"], ["color", "primary"], [1, "button"], [1, "Back", 3, "click"], ["mat-stroked-button", "", 3, "ngClass", "disabled", "click"], [2, "color", "white"], ["formArrayName", "biometricList"], [3, "formGroupName"], ["fxLayoutGap", "10px"], [2, "width", "300px"], [1, "inputMatcardDoc"], ["formControlName", "bioDocumentType", "id", "bioName"], ["value", ""], [3, "value", "disabled", "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], [2, "width", "300px", "margin", "20px", "padding", "30px"], ["mat-raised-button", "", 2, "color", "cornflowerblue", 3, "click"], ["mat-raised-button", "", 3, "click"], [1, "backIcon"], [3, "value", "disabled", "click"], ["fxFlex", "30%", "id", "clr", "style", "margin: 0px; padding: 0px; margin-right: 10px;", 4, "ngFor", "ngForOf"], ["fxFlex", "30%", "id", "clr", 2, "margin", "0px", "padding", "0px", "margin-right", "10px"], [2, "margin", "00px", "padding", "0px", "text-align", "center"], [3, "src"], [4, "ngIf", "ngIfElse"], ["showAvatar", ""], ["alt", "", 1, "formImg", 3, "src"], ["fxFlex", "30%", "id", "clr", 2, "margin", "0px", "padding", "0px"]],
        template: function KycBasicInformationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Verification");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "hr", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Biometric Verification*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, KycBasicInformationComponent_table_9_Template, 23, 8, "table", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycBasicInformationComponent_Template_button_click_13_listener() {
              return ctx.addBioDocs();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "mat-icon", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycBasicInformationComponent_Template_span_click_17_listener() {
              return ctx.previous();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycBasicInformationComponent_Template_button_click_19_listener() {
              return ctx.onNext(ctx.kycVerificationForm.value, ctx.arrayForm.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Finish");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.kycVerificationForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.kycVerificationForm.get("biometricList")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.disableAddAndDelete);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction2"](5, _c1, !ctx.kycVerificationForm.valid || !ctx.kycVerificationForm.get("biometricList").valid || ctx.disableFinish, !(!ctx.kycVerificationForm.valid || !ctx.kycVerificationForm.get("biometricList").valid || ctx.disableFinish)))("disabled", !ctx.kycVerificationForm.valid || !ctx.kycVerificationForm.get("biometricList").valid || ctx.disableFinish);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatHint"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_22__["DefaultClassDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__["DefaultLayoutGapDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_25__["MatOption"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatError"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_23__["DefaultFlexDirective"]],
        styles: [".breadcrumb[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 40px;\n  width: 100%;\n  background-color: white;\n}\n\n.head[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.fetchButton[_ngcontent-%COMP%] {\n  color: #456EFE;\n  font-family: 'Montserrat';\n  font-size: 12px;\n  text-decoration: underline;\n  padding-left: 10px;\n  padding-top: 15px;\n  cursor: pointer;\n}\n\nmat-hint[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.app-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.basic-container[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.main-head[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  padding-top: 16px;\n  padding-bottom: 0px;\n}\n\nmat-tab-group[_ngcontent-%COMP%] {\n  padding-left: 2%;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  height: 60vh;\n  border: 1px solid black;\n  padding: 10px 5px;\n  box-sizing: border-box;\n}\n\n.flex-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  box-sizing: border-box;\n}\n\n.flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2), .flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  margin-top: 5px;\n}\n\n.flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  flex: 1;\n}\n\n.formField1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 50px;\n}\n\n.formField[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 120px;\n}\n\n.formField2[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 100%;\n}\n\n.inputMatcard[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputGender[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatName[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatNew[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatLastName[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardDoc[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 21px;\n}\n\n.inputMatcardMail[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardMailAdd[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardMarritial[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardPrefix[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcard3[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardAdd[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  margin-top: 5px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcard4[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  max-width: 208px;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcard1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 12px;\n}\n\n.inputMatcard2[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  width: 20px;\n}\n\n.mat-form-field-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 0px;\n}\n\n.inputClass[_ngcontent-%COMP%] {\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n  box-shadow: 0 3pt 6pt #00000029;\n  font-weight: bolder;\n}\n\n[_nghost-%COMP%]     div.mat-form-field-outline-start {\n  border-color: 0 !important;\n  border-width: 0px !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field-outline-gap {\n  border-color: 0 !important;\n  border-width: 0px !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field-outline-end {\n  border-color: 0 !important;\n  border-width: 0px !important;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-top: -0.5%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.form13[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.form1[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 50px;\n  flex-wrap: wrap;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 14.7%;\n  padding-right: 17.4%;\n  background-color: white;\n  align-items: center;\n}\n\n.matCard[_ngcontent-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  margin-left: 0%;\n  margin-right: -0.5%;\n  margin-top: 10px;\n  margin-bottom: 3%;\n}\n\n.changeInput[_ngcontent-%COMP%] {\n  opacity: 0.0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\n.changeDiv[_ngcontent-%COMP%] {\n  position: relative;\n  height: 30px;\n  line-height: 30px;\n}\n\n.mat-form-field-flex[_ngcontent-%COMP%] {\n  box-shadow: 0 3pt 6pt #00000029;\n}\n\n.flex-grow-1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  gap: 10px;\n}\n\n.alignment[_ngcontent-%COMP%] {\n  border-style: none !important;\n  outline: none;\n}\n\n#dob[_ngcontent-%COMP%] {\n  float: right;\n}\n\n#max-width[_ngcontent-%COMP%] {\n  max-width: 150px;\n}\n\n#drop-max-width[_ngcontent-%COMP%] {\n  width: 190px;\n}\n\n#radio[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\nradioGroup[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n#nationality[_ngcontent-%COMP%] {\n  width: 210px;\n}\n\nmat-label[_ngcontent-%COMP%] {\n  margin-right: 6%;\n}\n\n.change[_ngcontent-%COMP%] {\n  color: #2680EB;\n  text-align: center;\n  text-decoration: underline;\n}\n\n.backIcon[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -14.5%;\n  width: 150px;\n  letter-spacing: 0px;\n  color: #5D5D5D;\n  cursor: pointer;\n}\n\n.Next1[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -18.6%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -18.6%;\n  width: 150px;\n  \n  background: #6C6C6C 0% 0% no-repeat padding-box;\n  border-radius: 24px;\n  opacity: 0.38 !important;\n  color: white;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.line[_ngcontent-%COMP%] {\n  border: thick;\n  \n  \n  border-style: solid;\n  \n  border-block-width: unset;\n  color: blue;\n  color: #6988f6;\n  width: 40px;\n  border-radius: 5px;\n  margin: initial;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 80%;\n  color: #374664;\n  font-weight: 600;\n}\n\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus {\n  background: red;\n}\n\n.mat-tab-label-active[_ngcontent-%COMP%] {\n  color: green;\n}\n\n  .mat-tab-label-active {\n  color: #6988f6 !important;\n}\n\n.verification[_ngcontent-%COMP%] {\n  float: right;\n  color: #2a59e7;\n}\n\n  .mat-tab-group.mat-primary .mat-ink-bar {\n  background-color: #7692fa !important;\n  height: 2px;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.line[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.text[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nfigure[_ngcontent-%COMP%] {\n  display: block;\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  font-size: 25px;\n  text-align: center;\n  margin-right: 10px;\n  background: #fff;\n  line-height: 1.7em;\n}\n\nfigure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 30px;\n  height: auto;\n}\n\n.formSectionContainer[_ngcontent-%COMP%] {\n  gap: 40px;\n  display: grid;\n  grid-template-columns: 200px auto;\n}\n\n@media (max-width: 768px) {\n  .formSectionContainer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n\n.formImg[_ngcontent-%COMP%] {\n  height: 100px !important;\n  width: 100px !important;\n  background-color: lightgrey;\n  border-radius: 50%;\n}\n\n.dropDown[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: #4286f4 !important;\n}\n\n.mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%] {\n  color: #4286f4;\n  background-color: #4286f4;\n}\n\n.Upload[_ngcontent-%COMP%] {\n  vertical-align: c;\n  margin-top: 20px;\n  font-size: 12px;\n  text-decoration: underline;\n  color: #2680EB;\n}\n\n#row[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: #2680EB;\n}\n\n.span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  width: 20% !important;\n}\n\n.span12[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  width: 10% !important;\n}\n\n.spanDiv[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 1%;\n  margin-top: 2%;\n}\n\n#bill[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-right: 10px;\n  margin-top: 10px;\n  margin-bottom: -25px;\n}\n\n.billName[_ngcontent-%COMP%] {\n  display: inline;\n  margin-right: 20px;\n}\n\n.margin[_ngcontent-%COMP%] {\n  margin-right: 0px;\n}\n\n.divider[_ngcontent-%COMP%] {\n  position: unset !important;\n  left: 200px !important;\n  align-self: center !important;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n\n.flex-basis-50[_ngcontent-%COMP%] {\n  flex-basis: 50%;\n}\n\n.gap-20[_ngcontent-%COMP%] {\n  gap: 10px;\n}\n\n.addressContainer[_ngcontent-%COMP%] {\n  padding: 0 20px 0 0 !important;\n}\n\n.address-card[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.inline-block[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.space-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n@media (min-width: 576px) {\n  .addressGrid[_ngcontent-%COMP%] {\n    gap: 20px;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n.addressGridInner[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.grow[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n\n.flex-grow-1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  flex-grow: 1;\n}\n\n.gap-20[_ngcontent-%COMP%] {\n  gap: 20px;\n}\n\n.flex-column[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n\n.height-auto[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.align-self-flex-end[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n\n.align-self-flex-start[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n\n.width-fit-content[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.m-8[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  flex-grow: 1;\n}\n\n.block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n#addressBlock[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n\n#communicationDivider[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n}\n\n.communicationForm[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n\n#communicationBlockForm[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  border: 1px solid lightgrey;\n  padding: 20px;\n}\n\n#DocumentForm[_ngcontent-%COMP%] {\n  border: 1px solid lightgrey;\n  padding: 10px;\n}\n\n#DocumentForm1[_ngcontent-%COMP%] {\n  border: 1px solid lightgrey;\n  padding: 10px;\n  padding-bottom: 50px;\n}\n\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus {\n  background: red;\n}\n\n.mat-tab-label-active[_ngcontent-%COMP%] {\n  color: green;\n}\n\n  .mat-tab-label-active {\n  color: #6988f6 !important;\n}\n\n.verification[_ngcontent-%COMP%] {\n  float: right;\n  color: #2a59e7;\n}\n\nmat-tab-label[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n\n.mat-select-arrow-wrapper[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n  width: 40px !important;\n}\n\n#dividerInside[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n}\n\n.errbd[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n\n#clr[_ngcontent-%COMP%] {\n  height: 180px;\n  width: 180px;\n}\n\n#fingerprintSpan[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n  font-size: 12px;\n  margin-bottom: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxca3ljLWJhc2ljLWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUlBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtBQURqQjs7QUFJQTtFQUNFLGVBQWU7QUFEakI7O0FBSUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQURiOztBQU9BO0VBQ0UsWUFBWTtBQUpkOztBQU9BO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFKckI7O0FBT0E7RUFDRSxnQkFBZ0I7QUFKbEI7O0FBT0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFKeEI7O0FBT0E7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0FBTHhCOztBQVFBOztFQUVFLGVBQWU7QUFMakI7O0FBUUE7RUFDRSxPQUFPO0FBTFQ7O0FBV0E7RUFDRSxZQUFZO0VBQ1osV0FBVztBQVJiOztBQVdBO0VBRUUsWUFBWTtFQUNaLFlBQVk7QUFUZDs7QUFnQkE7RUFFRSxZQUFZO0VBQ1osV0FBVztBQWRiOztBQW9CQTtFQUNFLFlBQVk7RUFFWixlQUFlO0VBR2YsK0JBQStCO0VBRS9CLHNCQUFzQjtFQUd0QixnQkFBZ0I7RUFDaEIsYUFBYTtBQXZCZjs7QUE0QkE7RUFDRSxZQUFZO0VBRVosZUFBZTtFQUNmLHFGQUM2QjtFQUM3QiwrQkFBK0I7RUFFL0Isc0JBQXNCO0VBR3RCLGdCQUFnQjtFQUNoQixhQUFhO0FBOUJmOztBQW1DQTtFQUNFLFlBQVk7RUFFWixlQUFlO0VBR2YsK0JBQStCO0VBRS9CLHNCQUFzQjtFQUd0QixnQkFBZ0I7RUFDaEIsYUFBYTtBQXRDZjs7QUEyQ0E7RUFDRSxZQUFZO0VBRVosZUFBZTtFQUdmLCtCQUErQjtFQUUvQixzQkFBc0I7RUFHdEIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUE5Q2Y7O0FBbURBO0VBQ0UsWUFBWTtFQUVaLGVBQWU7RUFHZiwrQkFBK0I7RUFFL0Isc0JBQXNCO0VBR3RCLGdCQUFnQjtFQUNoQixhQUFhO0FBdERmOztBQTREQTtFQUNFLFlBQVk7RUFFWixlQUFlO0VBR2YsK0JBQStCO0VBRS9CLHNCQUFzQjtFQUd0QixnQkFBZ0I7RUFDaEIsYUFBYTtBQS9EZjs7QUFvRUE7RUFDRSxZQUFZO0VBRVosZUFBZTtFQUdmLCtCQUErQjtFQUUvQixzQkFBc0I7RUFHdEIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUF2RWY7O0FBNEVBO0VBQ0UsWUFBWTtFQUVaLGVBQWU7RUFHZiwrQkFBK0I7RUFFL0Isc0JBQXNCO0VBR3RCLGdCQUFnQjtFQUNoQixhQUFhO0FBL0VmOztBQW9GQTtFQUNFLFlBQVk7RUFFWixlQUFlO0VBR2YsK0JBQStCO0VBRS9CLHNCQUFzQjtFQUd0QixnQkFBZ0I7RUFDaEIsYUFBYTtBQXZGZjs7QUE0RkE7RUFDRSxZQUFZO0VBRVosZUFBZTtFQUdmLCtCQUErQjtFQUUvQixzQkFBc0I7RUFHdEIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUEvRmY7O0FBb0dBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFJZiwrQkFBK0I7RUFFL0Isc0JBQXNCO0VBR3RCLGdCQUFnQjtFQUNoQixhQUFhO0FBdkdmOztBQTRHQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBSWYsK0JBQStCO0VBRS9CLHNCQUFzQjtFQUd0QixnQkFBZ0I7RUFDaEIsYUFBYTtBQS9HZjs7QUFvSEE7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUdoQiwrQkFBK0I7RUFFL0Isc0JBQXNCO0VBR3RCLGdCQUFnQjtFQUNoQixhQUFhO0FBdEhmOztBQThIQTtFQUNFLFlBQVk7RUFJWiwrQkFBK0I7RUFFL0Isc0JBQXNCO0VBR3RCLGdCQUFnQjtFQUNoQixhQUFhO0FBaklmOztBQXVJQTtFQUNFLFlBQVk7RUFJWiwrQkFBK0I7RUFFL0Isc0JBQXNCO0VBR3RCLGdCQUFnQjtFQUloQixXQUFXO0FBN0liOztBQWdKQTtFQUNFLG1CQUFtQjtBQTdJckI7O0FBZ0pBO0VBR0Usd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLCtCQUErQjtFQUMvQixtQkFBbUI7QUEvSXJCOztBQWtKQTtFQUNFLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUEvSTlCOztBQWtKQTtFQUNFLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUEvSTlCOztBQWtKQTtFQUNFLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUEvSTlCOztBQWtKQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBR2IsZUFBZTtFQUNmLDhCQUE4QjtBQWpKaEM7O0FBb0pBO0VBQ0UsYUFBYTtFQUdiLGVBQWU7QUFuSmpCOztBQXVKQTtFQUNFLGFBQWE7RUFFYixTQUFTO0VBQ1QsZUFBZTtBQXJKakI7O0FBMEpBO0VBQ0UsYUFBYTtFQUViLFNBQVM7RUFDVCxlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLG1CQUFtQjtFQUNwQixvQkFBb0I7RUFDbkIsdUJBQXVCO0VBQ3hCLG1CQUFtQjtBQXhKcEI7O0FBNEpBO0VBRUUsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUVoQixpQkFBaUI7QUEzSm5COztBQThKQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1QsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBM0pwQjs7QUE4SkE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtBQTNKbkI7O0FBOEpBO0VBSUUsK0JBQStCO0FBOUpqQzs7QUFpS0E7RUFDRSxZQUFZO0VBQ1osU0FBUztBQTlKWDs7QUFrS0E7RUFDRSw2QkFBNkI7RUFDN0IsYUFBYTtBQS9KZjs7QUFrS0E7RUFFRSxZQUFZO0FBaEtkOztBQW1LQTtFQUNFLGdCQUNGO0FBaktBOztBQW1LQTtFQUNFLFlBQVk7QUFoS2Q7O0FBbUtBO0VBQ0Usa0JBQWtCO0FBaEtwQjs7QUFtS0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBaEtyQjs7QUFtS0E7RUFDRSxZQUFZO0FBaEtkOztBQW1LQTtFQUNFLGdCQUFnQjtBQWhLbEI7O0FBbUtBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFoSzVCOztBQWtLQTtFQUNFLFVBQVU7QUEvSlo7O0FBaUtBO0VBRUUseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixZQUFZO0VBSVosbUJBQW1CO0VBQ3BCLGNBQWM7RUFDZCxlQUFlO0FBbEtoQjs7QUFxS0E7RUFDRSx5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWix5QkFBbUM7RUFDbkMsWUFBWTtFQUNaLG1CQUFtQjtBQWxLckI7O0FBb0tBO0VBQ0MseUJBQXlCO0VBQ3hCLG9CQUFvQjtFQUV0QixZQUFZO0VBQ1osa0JBQUE7RUFDQSwrQ0FBK0M7RUFDL0MsbUJBQW1CO0VBQ25CLHdCQUF3QjtFQUN4QixZQUFZO0FBbEtaOztBQW9LQTtFQUNFLG1CQUFtQjtBQWpLckI7O0FBb0tBO0VBQ0UsYUFBYTtFQUNiLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBbUI7RUFDbkIsdUJBQUE7RUFDQSx5QkFBeUI7RUFDekIsV0FBVztFQUVYLGNBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtBQWxLakI7O0FBcUtBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxnQkFBZ0I7QUFsS2xCOztBQXVLQTs7OztFQUlFLGVBQWU7QUFwS2pCOztBQXVLQTtFQUNFLFlBQVk7QUFwS2Q7O0FBdUtBO0VBQ0UseUJBQW9DO0FBcEt0Qzs7QUF1S0E7RUFDRSxZQUFZO0VBQ1osY0FBdUI7QUFwS3pCOztBQStLQTtFQUNFLG9DQUErQztFQUMvQyxXQUFXO0FBNUtiOztBQTJMQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7QUF4THJCOztBQTJMQTtFQUNFLE9BQU87QUF4TFQ7O0FBMkxBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQXhMckI7O0FBMkxBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUF4THBCOztBQTJMQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtBQXhMZDs7QUEyTEE7RUFDRSxTQUFTO0VBQ1QsYUFBYTtFQUliLGlDQUFpQztBQTNMbkM7O0FBOExBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtFQTNMekI7QUFDRjs7QUE4TEE7RUFDRSx3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLDJCQUEyQjtFQUMzQixrQkFBa0I7QUEzTHBCOztBQThMQTtFQUNFLGNBQWM7QUEzTGhCOztBQThMQTtFQUNFLGdDQUEwQztBQTNMNUM7O0FBOExBO0VBQ0UsY0FBd0I7RUFDeEIseUJBQW1DO0FBM0xyQzs7QUE4TEE7RUFDRSxpQkFBaUI7RUFFakIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsY0FBYztBQTVMaEI7O0FBK0xBO0VBQ0UsY0FBYztFQUVkLGNBQWM7QUE3TGhCOztBQWdNQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBN0x2Qjs7QUFnTUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQTdMdkI7O0FBZ01BO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixjQUFjO0FBN0xoQjs7QUFrTUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQkFBb0I7QUEvTHRCOztBQW1NQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUFoTXBCOztBQW1NQTtFQUNFLGlCQUFpQjtBQWhNbkI7O0FBbU1BO0VBQ0UsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUV0Qiw2QkFBNkI7QUFqTS9COztBQXFNQTtFQUNFLGFBQWE7QUFsTWY7O0FBcU1BO0VBQ0UsZUFBZTtBQWxNakI7O0FBcU1BO0VBQ0UsZUFBZTtBQWxNakI7O0FBcU1BO0VBQ0UsU0FBUztBQWxNWDs7QUFxTUE7RUFDRSw4QkFBOEI7QUFsTWhDOztBQXFNQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBbE1qQjs7QUFxTUE7RUFDRSxxQkFBcUI7QUFsTXZCOztBQXFNQTtFQUNFLDhCQUE4QjtBQWxNaEM7O0FBcU1BO0VBQ0U7SUFFRSxTQUFTO0lBQ1QsZ0RBQWdEO0VBbk1sRDtBQUNGOztBQXNNQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsZ0RBQWdEO0FBbk1sRDs7QUEwTUE7RUFDRSxZQUFZO0FBdk1kOztBQTBNQTtFQUNFLGFBQWE7QUF2TWY7O0FBME1BO0VBQ0UsZUFBZTtBQXZNakI7O0FBME1BO0VBQ0UsWUFBWTtBQXZNZDs7QUEwTUE7RUFDRSw4QkFBOEI7RUFDOUIsWUFBWTtBQXZNZDs7QUEwTUE7RUFDRSxTQUFTO0FBdk1YOztBQTBNQTtFQUNFLHNCQUFzQjtBQXZNeEI7O0FBME1BO0VBQ0UsWUFBWTtBQXZNZDs7QUEwTUE7RUFDRSxvQkFBb0I7QUF2TXRCOztBQTBNQTtFQUNFLHNCQUFzQjtBQXZNeEI7O0FBME1BO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7QUF2TXBCOztBQTBNQTtFQUNFLGlCQUFpQjtFQUNqQixZQUFZO0FBdk1kOztBQTBNQTtFQUNFLGNBQWM7QUF2TWhCOztBQTBNQTtFQUNFLGFBQWE7RUFDYixTQUFTO0FBdk1YOztBQTBNQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBdk1kOztBQTBNQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsZUFBZTtBQXZNakI7O0FBME1BO0VBRUUsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixhQUFhO0FBeE1mOztBQTJNQTtFQUVFLDJCQUEyQjtFQUMzQixhQUFhO0FBek1mOztBQTRNQTtFQUVFLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2Isb0JBQW9CO0FBMU10Qjs7QUE2TUE7Ozs7RUFJRSxlQUFlO0FBMU1qQjs7QUE2TUE7RUFDRSxZQUFZO0FBMU1kOztBQTZNQTtFQUNFLHlCQUFvQztBQTFNdEM7O0FBNk1BO0VBQ0UsWUFBWTtFQUNaLGNBQXVCO0FBMU16Qjs7QUF1TkE7RUFDRSxjQUFjO0FBcE5oQjs7QUEwTkE7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLHNCQUFzQjtBQXZOeEI7O0FBME5BO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUF2TmQ7O0FBME5BO0VBRUUscUJBQW9CO0FBeE50Qjs7QUEyTkE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQXhOZDs7QUE0TkE7RUFDRSxpQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWM7RUFBQyxrQkFBa0I7QUF4Tm5DIiwiZmlsZSI6Imt5Yy1iYXNpYy1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5icmVhZGNydW1iIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA0MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaGVhZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gIC8vICAgIGJhY2tncm91bmQtY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG4uZmV0Y2hCdXR0b24ge1xyXG4gIGNvbG9yOiAjNDU2RUZFO1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXRvcDogMTVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbm1hdC1oaW50IHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5hcHAtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8vIC52ZXJpZmljYXRpb25IZWFke1xyXG4vLyAgIG9wYWNpdHk6IDkwJTtcclxuLy8gfVxyXG4uYmFzaWMtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5tYWluLWhlYWQge1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgcGFkZGluZy10b3A6IDE2cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxubWF0LXRhYi1ncm91cCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyJTtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGhlaWdodDogNjB2aDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uZmxleC1jb250YWluZXIgKiB7XHJcbiAgLy8gd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XHJcbiAgbWFyZ2luOiAwIDVweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uZmxleC1jb250YWluZXIgOm50aC1jaGlsZCgyKSxcclxuLmZsZXgtY29udGFpbmVyIDpudGgtY2hpbGQoMykge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyIDpudGgtY2hpbGQoMykge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuXHJcbi8vICAgLmZsZXgtY29udGFpbmVyIDpudGgtY2hpbGQoNCkge1xyXG4vLyAgICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyAgIH1cclxuLmZvcm1GaWVsZDEge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICB3aWR0aDogNTBweDtcclxufVxyXG5cclxuLmZvcm1GaWVsZCB7XHJcbiAgLy8gd2lkdGg6MjAwcHg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIHdpZHRoOiAxMjBweDtcclxuXHJcbiAgLy8gICBnYXA6IDIwcHg7XHJcbiAgLy8gfVxyXG5cclxufVxyXG5cclxuLmZvcm1GaWVsZDIge1xyXG4gIC8vIHdpZHRoOjIwMHB4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgLy8gICBnYXA6IDIwcHg7XHJcbiAgLy8gfVxyXG59XHJcblxyXG4uaW5wdXRNYXRjYXJkIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWF4LXdpZHRoOjUwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gIC8vICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTNweDtcclxuXHJcbiAgLy8gd2lkdGg6IDIyMHB4O1xyXG59XHJcblxyXG4uaW5wdXRHZW5kZXIge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvLyBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG5cclxuICAvLyB3aWR0aDogMjIwcHg7XHJcbn1cclxuXHJcbi5pbnB1dE1hdE5hbWUge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvLyBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgLy8gICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG5cclxuICAvLyB3aWR0aDogNDUwcHg7XHJcbn1cclxuXHJcbi5pbnB1dE1hdE5ldyB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDo1MDBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAvLyAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcblxyXG4gIC8vIHdpZHRoOiA0NTVweDtcclxufVxyXG5cclxuLmlucHV0TWF0TGFzdE5hbWUge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvLyBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgLy8gICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG5cclxuICAvLyB3aWR0aDogMjAwcHg7XHJcblxyXG59XHJcblxyXG4uaW5wdXRNYXRjYXJkRG9jIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWF4LXdpZHRoOjUwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gIC8vICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMjFweDtcclxuICAvLyB3aWR0aDoyNzBweDtcclxuICAvLyB3aWR0aDogMTk1cHg7XHJcbn1cclxuXHJcbi5pbnB1dE1hdGNhcmRNYWlsIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWF4LXdpZHRoOjUwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gIC8vICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTNweDtcclxuICAvLyB3aWR0aDoxMDAlO1xyXG4gIC8vIHdpZHRoOiA0MTBweDtcclxufVxyXG5cclxuLmlucHV0TWF0Y2FyZE1haWxBZGQge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvLyBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgLy8gICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG4gIC8vIHdpZHRoOjEwMCU7XHJcbiAgLy8gd2lkdGg6IDc1MHB4O1xyXG59XHJcblxyXG4uaW5wdXRNYXRjYXJkTWFycml0aWFsIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWF4LXdpZHRoOjUwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gIC8vICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTNweDtcclxuICAvLyB3aWR0aDoxMDAlO1xyXG4gIC8vIHdpZHRoOiA0NTBweDtcclxufVxyXG5cclxuLmlucHV0TWF0Y2FyZFByZWZpeCB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDo1MDBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAvLyAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcbiAgLy8gd2lkdGg6MTAwJTtcclxuICAvLyB3aWR0aDogMTUwcHg7XHJcbn1cclxuXHJcbi5pbnB1dE1hdGNhcmQzIHtcclxuICBmbGV4LWdyb3c6IDI7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIC8vbWF4LXdpZHRoOjIwOHB4O1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgLy8gICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG5cclxuXHJcbn1cclxuXHJcbi5pbnB1dE1hdGNhcmRBZGQge1xyXG4gIGZsZXgtZ3JvdzogMjtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgLy9tYXgtd2lkdGg6MjA4cHg7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAvLyAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcbiAgLy8gd2lkdGg6MjAwcHg7XHJcblxyXG59XHJcblxyXG4uaW5wdXRNYXRjYXJkNCB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXgtd2lkdGg6IDIwOHB4O1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgLy8gICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG4gIC8vIG1hcmdpbi1yaWdodDotMSU7XHJcblxyXG59XHJcblxyXG4vLyAjZm9ybTF7XHJcbi8vICAgbWFyZ2luLXJpZ2h0Oi0xJTtcclxuLy8gfVxyXG4uaW5wdXRNYXRjYXJkMSB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDogNTAwcHg7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAvLyAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTJweDtcclxuICAvLyB3aWR0aDogMTAwJTtcclxuXHJcbiAgLy8gaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4uaW5wdXRNYXRjYXJkMiB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDogNTAwcHg7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAvLyAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gIC8vIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgLy8gcGFkZGluZzogMTJweDtcclxuICAvLyB3aWR0aDogMTAwJTtcclxuICAvLyBoZWlnaHQ6IDMwcHg7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZC13cmFwcGVyIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG4uaW5wdXRDbGFzcyB7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAvLyAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItYm90dG9tLXN0eWxlOiBoaWRkZW47XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgZGl2Lm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtc3RhcnQge1xyXG4gIGJvcmRlci1jb2xvcjogMCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1nYXAge1xyXG4gIGJvcmRlci1jb2xvcjogMCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1lbmQge1xyXG4gIGJvcmRlci1jb2xvcjogMCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci13aWR0aDogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICBtYXJnaW4tdG9wOiAtMC41JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgLy8gZ2FwOiAyMHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5mb3JtMTMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAvLyBnYXA6IDIwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxufVxyXG5cclxuLmZvcm0xIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZ2FwOiA1MHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvLyB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAvLyBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGdhcDogMjBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmctbGVmdDogMTQuNyU7XHJcblx0cGFkZGluZy1yaWdodDogMTcuNCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm1hdENhcmQge1xyXG4gIC8vbWF4LXdpZHRoOiAxNjAwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMCU7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMC41JTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gLy8gbWFyZ2luOiAxMHB4IGF1dG8gMCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDMlO1xyXG59XHJcblxyXG4uY2hhbmdlSW5wdXQge1xyXG4gIG9wYWNpdHk6IDAuMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaGFuZ2VEaXYge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZC1mbGV4IHtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgLy8gYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAvLyAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG59XHJcblxyXG4uZmxleC1ncm93LTEge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBnYXA6IDEwcHg7XHJcbiAgLy8gbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uYWxpZ25tZW50IHtcclxuICBib3JkZXItc3R5bGU6IG5vbmUgIWltcG9ydGFudDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4jZG9iIHtcclxuXHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4jbWF4LXdpZHRoIHtcclxuICBtYXgtd2lkdGg6IDE1MHB4XHJcbn1cclxuXHJcbiNkcm9wLW1heC13aWR0aCB7XHJcbiAgd2lkdGg6IDE5MHB4O1xyXG59XHJcblxyXG4jcmFkaW8ge1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxucmFkaW9Hcm91cCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4jbmF0aW9uYWxpdHkge1xyXG4gIHdpZHRoOiAyMTBweDtcclxufVxyXG5cclxubWF0LWxhYmVsIHtcclxuICBtYXJnaW4tcmlnaHQ6IDYlO1xyXG59XHJcblxyXG4uY2hhbmdlIHtcclxuICBjb2xvcjogIzI2ODBFQjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLmJhY2tJY29ue1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuLkJhY2t7XHJcblxyXG4gIG1hcmdpbjogMTJweCAwcHggMTJweCAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xNC41JTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcclxuICAvLyBjb2xvcjogd2hpdGU7XHJcbiAgLy8gYm9yZGVyLXJhZGl1czogNDVweDtcclxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG5cdGNvbG9yOiAjNUQ1RDVEO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLk5leHQxIHtcclxuICBtYXJnaW46IDEycHggMHB4IDEycHggMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTE4LjYlO1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjYsIDEwNiwgMjQ1KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogNTVweDtcclxufVxyXG4uTmV4dCB7XHJcblx0bWFyZ2luOiAxMnB4IDBweCAxMnB4IDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IC0xOC42JTtcclxuLy9sZWZ0OiAxMDYzcHg7XHJcbndpZHRoOiAxNTBweDtcclxuLyogVUkgUHJvcGVydGllcyAqL1xyXG5iYWNrZ3JvdW5kOiAjNkM2QzZDIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuYm9yZGVyLXJhZGl1czogMjRweDtcclxub3BhY2l0eTogMC4zOCAhaW1wb3J0YW50O1xyXG5jb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5ociB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmxpbmUge1xyXG4gIGJvcmRlcjogdGhpY2s7XHJcbiAgLyogaGVpZ2h0OiAzcHg7ICovXHJcbiAgLyogbGluZS1oZWlnaHQ6IDNweDsgKi9cclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIC8qIGJvcmRlci13aWR0aDogM3B4OyAqL1xyXG4gIGJvcmRlci1ibG9jay13aWR0aDogdW5zZXQ7XHJcbiAgY29sb3I6IGJsdWU7XHJcbiAgLy8gd2lkdGg6IDIwcHg7XHJcbiAgY29sb3I6IHJnYigxMDUsIDEzNiwgMjQ2KTtcclxuICB3aWR0aDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiBpbml0aWFsO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBjb2xvcjogIzM3NDY2NDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgLy8gICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbn1cclxuXHJcbi5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsOm5vdCgubWF0LXRhYi1kaXNhYmxlZCk6Zm9jdXMsXHJcbi5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbms6bm90KC5tYXQtdGFiLWRpc2FibGVkKTpmb2N1cyxcclxuLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbDpub3QoLm1hdC10YWItZGlzYWJsZWQpOmZvY3VzLFxyXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbms6bm90KC5tYXQtdGFiLWRpc2FibGVkKTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZDogcmVkO1xyXG59XHJcblxyXG4ubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XHJcbiAgY29sb3I6IHJnYigxMDUsIDEzNiwgMjQ2KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udmVyaWZpY2F0aW9uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgY29sb3I6IHJnYig0MiwgODksIDIzMSk7XHJcbn1cclxuXHJcbi8vIC5tYXQtaW5rLWJhcntcclxuLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgYm90dG9tOiAwO1xyXG4vLyAgICAgaGVpZ2h0OiAycHg7XHJcbi8vICAgICB0cmFuc2l0aW9uOiA1MDBtcyBjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4yNSwgMSk7XHJcbi8vICAgICBoZWlnaHQ6IDRweDtcclxuLy8gICAgIGNvbG9yOlxyXG4vLyB9XHJcbjo6bmctZGVlcCAubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTgsIDE0NiwgMjUwKSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogMnB4O1xyXG4gIC8vIHdpZHRoOiAxMTZweCAhaW1wb3J0YW50O1xyXG5cclxuICAvLyBtYXJnaW4tbGVmdDogMiU7XHJcbn1cclxuXHJcblxyXG4vLyBtYXQtb3B0aW9ue1xyXG4vLyAgIHdpZHRoOiAyMHB4O1xyXG4vLyB9XHJcbi8vIC5tYXQtc2VsZWN0LWFycm93LXdyYXBwZXIge1xyXG4vLyAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbi8vICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuLy8gICB3aWR0aDogNDBweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubGluZSB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5maWd1cmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgbGluZS1oZWlnaHQ6IDEuN2VtO1xyXG59XHJcblxyXG5maWd1cmUgaW1nIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uZm9ybVNlY3Rpb25Db250YWluZXIge1xyXG4gIGdhcDogNDBweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIC8vIGdyaWQtdGVtcGxhdGUtY29sdW1uczogO1xyXG4gIC8vIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCBhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpICk7XHJcbiAgLy9ncmlkLWdhcDogMjBweDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmZvcm1TZWN0aW9uQ29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtSW1nIHtcclxuICBoZWlnaHQ6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmV5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG5cclxuLmRyb3BEb3duIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoNjYsIDEzNCwgMjQ0KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcclxuICBjb2xvcjogcmdiKDY2LCAxMzQsIDI0NCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LCAxMzQsIDI0NCk7XHJcbn1cclxuXHJcbi5VcGxvYWQge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBjO1xyXG4gLy8gYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGNvbG9yOiAjMjY4MEVCO1xyXG59XHJcblxyXG4jcm93IHtcclxuICBmb250LXNpemU6IDlweDtcclxuICAvLyBvcGFjaXR5OiAxMDAlO1xyXG4gIGNvbG9yOiAjMjY4MEVCO1xyXG59XHJcblxyXG4uc3BhbiB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgd2lkdGg6IDIwJSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uc3BhbjEyIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB3aWR0aDogMTAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zcGFuRGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1ib3R0b206IDElO1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG5cclxuXHJcbn1cclxuXHJcbiNiaWxsIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTI1cHg7XHJcbiAgLy8gbWFyZ2luLWJvdHRvbTogLTQlO1xyXG59XHJcblxyXG4uYmlsbE5hbWUge1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5tYXJnaW4ge1xyXG4gIG1hcmdpbi1yaWdodDogMHB4O1xyXG59XHJcblxyXG4uZGl2aWRlciB7XHJcbiAgcG9zaXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbiAgbGVmdDogMjAwcHggIWltcG9ydGFudDtcclxuXHJcbiAgYWxpZ24tc2VsZjogY2VudGVyICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uZmxleCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLndyYXAge1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmZsZXgtYmFzaXMtNTAge1xyXG4gIGZsZXgtYmFzaXM6IDUwJTtcclxufVxyXG5cclxuLmdhcC0yMCB7XHJcbiAgZ2FwOiAxMHB4O1xyXG59XHJcblxyXG4uYWRkcmVzc0NvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogMCAyMHB4IDAgMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWRkcmVzcy1jYXJkIHtcclxuICBtYXJnaW4tbGVmdDogMDtcclxuICBtYXJnaW4tcmlnaHQ6IDA7XHJcbn1cclxuXHJcbi5pbmxpbmUtYmxvY2sge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnNwYWNlLWJldHdlZW4ge1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuQG1lZGlhKG1pbi13aWR0aDogNTc2cHgpIHtcclxuICAuYWRkcmVzc0dyaWQge1xyXG4gICAgLy8gZGlzcGxheTogZ3JpZDtcclxuICAgIGdhcDogMjBweDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcclxuICB9XHJcbn1cclxuXHJcbi5hZGRyZXNzR3JpZElubmVyIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdhcDogMjBweDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoMCwgMWZyKSk7XHJcbn1cclxuXHJcbi8vIDo6bmctZGVlcCAubWF0LWNhcmQgLm1hdC1kaXZpZGVyLWhvcml6b250YWwge1xyXG4vLyAgIC8qIHBvc2l0aW9uOiBhYnNvbHV0ZTsgKi9cclxuLy8gICBsZWZ0OiAwO1xyXG4vLyB9XHJcbi5ncm93IHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ud3JhcCB7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZmxleC1ncm93LTEge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLmp1c3RpZnktYmV0d2VlbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLmdhcC0yMCB7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4uZmxleC1jb2x1bW4ge1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5oZWlnaHQtYXV0byB7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYWxpZ24tc2VsZi1mbGV4LWVuZCB7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5hbGlnbi1zZWxmLWZsZXgtc3RhcnQge1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XHJcbn1cclxuXHJcbi53aWR0aC1maXQtY29udGVudCB7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG59XHJcblxyXG4ubS04IHtcclxuICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5ibG9jayB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNhZGRyZXNzQmxvY2sge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4jY29tbXVuaWNhdGlvbkRpdmlkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uY29tbXVuaWNhdGlvbkZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuI2NvbW11bmljYXRpb25CbG9ja0Zvcm0ge1xyXG5cclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbiNEb2N1bWVudEZvcm0ge1xyXG4gIC8vIHdpZHRoOjY1MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG4jRG9jdW1lbnRGb3JtMSB7XHJcbiAgLy8gd2lkdGg6NjUwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDUwcHg7XHJcbn1cclxuXHJcbi5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsOm5vdCgubWF0LXRhYi1kaXNhYmxlZCk6Zm9jdXMsXHJcbi5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbms6bm90KC5tYXQtdGFiLWRpc2FibGVkKTpmb2N1cyxcclxuLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbDpub3QoLm1hdC10YWItZGlzYWJsZWQpOmZvY3VzLFxyXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbms6bm90KC5tYXQtdGFiLWRpc2FibGVkKTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZDogcmVkO1xyXG59XHJcblxyXG4ubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XHJcbiAgY29sb3I6IHJnYigxMDUsIDEzNiwgMjQ2KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udmVyaWZpY2F0aW9uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgY29sb3I6IHJnYig0MiwgODksIDIzMSk7XHJcbn1cclxuXHJcbi8vIC5tYXQtaW5rLWJhcntcclxuLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgYm90dG9tOiAwO1xyXG4vLyAgICAgaGVpZ2h0OiAycHg7XHJcbi8vICAgICB0cmFuc2l0aW9uOiA1MDBtcyBjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4yNSwgMSk7XHJcbi8vICAgICBoZWlnaHQ6IDRweDtcclxuLy8gICAgIGNvbG9yOlxyXG4vLyB9XHJcblxyXG5cclxubWF0LXRhYi1sYWJlbCB7XHJcbiAgZm9udC1zaXplOiA4cHg7XHJcbn1cclxuXHJcbi8vIG1hdC1vcHRpb257XHJcbi8vICAgd2lkdGg6IDIwcHg7XHJcbi8vIH1cclxuLm1hdC1zZWxlY3QtYXJyb3ctd3JhcHBlciB7XHJcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIHdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbiNkaXZpZGVySW5zaWRlIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLmVycmJkXHJcbntcclxuICBib3JkZXI6MXB4IHNvbGlkIHJlZDtcclxufVxyXG5cclxuI2NscntcclxuICBoZWlnaHQ6IDE4MHB4O1xyXG4gIHdpZHRoOiAxODBweDtcclxuICAvLyBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4jZmluZ2VycHJpbnRTcGFue1xyXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZToxMnB4O21hcmdpbi1ib3R0b206IDRweDtcclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](KycBasicInformationComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: "app-kyc-basic-information",
            templateUrl: "./kyc-basic-information.component.html",
            styleUrls: ["./kyc-basic-information.component.scss"]
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]
          }, {
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_14__["MatSnackBar"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
          }, {
            type: app_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_13__["FingerPrintCaptureService"]
          }, {
            type: app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_15__["DataService"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_16__["LocalStoreService"]
          }];
        }, {
          verificationInfo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
          }],
          settingallCustInfo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          el: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["fileInput"]
          }]
        });
      })();

      var OtpModel = function OtpModel() {
        _classCallCheck(this, OtpModel);
      };

      var OtpModelUpdate = function OtpModelUpdate() {
        _classCallCheck(this, OtpModelUpdate);
      };
      /***/

    },

    /***/
    "dyjd":
    /*!***************************************************************!*\
      !*** ./node_modules/tesseract.js/src/worker/browser/index.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function dyjd(module, exports, __webpack_require__) {
      /**
       *
       * Tesseract Worker adapter for browser
       *
       * @fileoverview Tesseract Worker adapter for browser
       * @author Kevin Kwok <antimatter15@gmail.com>
       * @author Guillermo Webster <gui@mit.edu>
       * @author Jerome Wu <jeromewus@gmail.com>
       */
      var defaultOptions = __webpack_require__(
      /*! ./defaultOptions */
      "KAeC");

      var spawnWorker = __webpack_require__(
      /*! ./spawnWorker */
      "sUgH");

      var terminateWorker = __webpack_require__(
      /*! ./terminateWorker */
      "cR1X");

      var onMessage = __webpack_require__(
      /*! ./onMessage */
      "eqRM");

      var send = __webpack_require__(
      /*! ./send */
      "T00y");

      var loadImage = __webpack_require__(
      /*! ./loadImage */
      "DmX5");

      module.exports = {
        defaultOptions: defaultOptions,
        spawnWorker: spawnWorker,
        terminateWorker: terminateWorker,
        onMessage: onMessage,
        send: send,
        loadImage: loadImage
      };
      /***/
    },

    /***/
    "eqRM":
    /*!*******************************************************************!*\
      !*** ./node_modules/tesseract.js/src/worker/browser/onMessage.js ***!
      \*******************************************************************/

    /*! no static exports found */

    /***/
    function eqRM(module, exports) {
      module.exports = function (worker, handler) {
        worker.onmessage = function (_ref15) {
          var data = _ref15.data;
          // eslint-disable-line
          handler(data);
        };
      };
      /***/

    },

    /***/
    "f4+5":
    /*!***************************************************************!*\
      !*** ./node_modules/tesseract.js/src/utils/getEnvironment.js ***!
      \***************************************************************/

    /*! no static exports found */

    /***/
    function f45(module, exports, __webpack_require__) {
      var isElectron = __webpack_require__(
      /*! is-electron */
      "Y6bo");

      module.exports = function (key) {
        var env = {};

        if (isElectron()) {
          env.type = 'electron';
        } else if (typeof window === 'object') {
          env.type = 'browser';
        } else if (typeof importScripts === 'function') {
          env.type = 'webworker';
        } else if (typeof process === 'object' && "function" === 'function') {
          env.type = 'node';
        }

        if (typeof key === 'undefined') {
          return env;
        }

        return env[key];
      };
      /***/

    },

    /***/
    "fIT2":
    /*!****************************************************!*\
      !*** ./node_modules/tesseract.js/src/utils/log.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function fIT2(module, exports) {
      var _this39 = this;

      var logging = false;
      exports.logging = logging;

      exports.setLogging = function (_logging) {
        logging = _logging;
      };

      exports.log = function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return logging ? console.log.apply(_this39, args) : null;
      };
      /***/

    },

    /***/
    "ls82":
    /*!*****************************************************!*\
      !*** ./node_modules/regenerator-runtime/runtime.js ***!
      \*****************************************************/

    /*! no static exports found */

    /***/
    function ls82(module, exports, __webpack_require__) {
      /**
       * Copyright (c) 2014-present, Facebook, Inc.
       *
       * This source code is licensed under the MIT license found in the
       * LICENSE file in the root directory of this source tree.
       */
      var runtime = function (exports) {
        "use strict";

        var Op = Object.prototype;
        var hasOwn = Op.hasOwnProperty;
        var undefined; // More compressible than void 0.

        var $Symbol = typeof Symbol === "function" ? Symbol : {};
        var iteratorSymbol = $Symbol.iterator || "@@iterator";
        var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
        var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

        function define(obj, key, value) {
          Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
          });
          return obj[key];
        }

        try {
          // IE 8 has a broken Object.defineProperty that only works on DOM objects.
          define({}, "");
        } catch (err) {
          define = function define(obj, key, value) {
            return obj[key] = value;
          };
        }

        function wrap(innerFn, outerFn, self, tryLocsList) {
          // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
          var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
          var generator = Object.create(protoGenerator.prototype);
          var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
          // .throw, and .return methods.

          generator._invoke = makeInvokeMethod(innerFn, self, context);
          return generator;
        }

        exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
        // record like context.tryEntries[i].completion. This interface could
        // have been (and was previously) designed to take a closure to be
        // invoked without arguments, but in all the cases we care about we
        // already have an existing method we want to call, so there's no need
        // to create a new function object. We can even get away with assuming
        // the method takes exactly one argument, since that happens to be true
        // in every case, so we don't have to touch the arguments object. The
        // only additional allocation required is the completion record, which
        // has a stable shape and so hopefully should be cheap to allocate.

        function tryCatch(fn, obj, arg) {
          try {
            return {
              type: "normal",
              arg: fn.call(obj, arg)
            };
          } catch (err) {
            return {
              type: "throw",
              arg: err
            };
          }
        }

        var GenStateSuspendedStart = "suspendedStart";
        var GenStateSuspendedYield = "suspendedYield";
        var GenStateExecuting = "executing";
        var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
        // breaking out of the dispatch switch statement.

        var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
        // .constructor.prototype properties for functions that return Generator
        // objects. For full spec compliance, you may wish to configure your
        // minifier not to mangle the names of these two functions.

        function Generator() {}

        function GeneratorFunction() {}

        function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
        // don't natively support it.


        var IteratorPrototype = {};

        IteratorPrototype[iteratorSymbol] = function () {
          return this;
        };

        var getProto = Object.getPrototypeOf;
        var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

        if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
          // This environment has a native %IteratorPrototype%; use it instead
          // of the polyfill.
          IteratorPrototype = NativeIteratorPrototype;
        }

        var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
        GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
        GeneratorFunctionPrototype.constructor = GeneratorFunction;
        GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
        // Iterator interface in terms of a single ._invoke method.

        function defineIteratorMethods(prototype) {
          ["next", "throw", "return"].forEach(function (method) {
            define(prototype, method, function (arg) {
              return this._invoke(method, arg);
            });
          });
        }

        exports.isGeneratorFunction = function (genFun) {
          var ctor = typeof genFun === "function" && genFun.constructor;
          return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
          // do is to check its .name property.
          (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
        };

        exports.mark = function (genFun) {
          if (Object.setPrototypeOf) {
            Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
          } else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
          }

          genFun.prototype = Object.create(Gp);
          return genFun;
        }; // Within the body of any async function, `await x` is transformed to
        // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
        // `hasOwn.call(value, "__await")` to determine if the yielded value is
        // meant to be awaited.


        exports.awrap = function (arg) {
          return {
            __await: arg
          };
        };

        function AsyncIterator(generator, PromiseImpl) {
          function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);

            if (record.type === "throw") {
              reject(record.arg);
            } else {
              var result = record.arg;
              var value = result.value;

              if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
                return PromiseImpl.resolve(value.__await).then(function (value) {
                  invoke("next", value, resolve, reject);
                }, function (err) {
                  invoke("throw", err, resolve, reject);
                });
              }

              return PromiseImpl.resolve(value).then(function (unwrapped) {
                // When a yielded Promise is resolved, its final value becomes
                // the .value of the Promise<{value,done}> result for the
                // current iteration.
                result.value = unwrapped;
                resolve(result);
              }, function (error) {
                // If a rejected Promise was yielded, throw the rejection back
                // into the async generator function so it can be handled there.
                return invoke("throw", error, resolve, reject);
              });
            }
          }

          var previousPromise;

          function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
              return new PromiseImpl(function (resolve, reject) {
                invoke(method, arg, resolve, reject);
              });
            }

            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
          } // Define the unified helper method that is used to implement .next,
          // .throw, and .return (see defineIteratorMethods).


          this._invoke = enqueue;
        }

        defineIteratorMethods(AsyncIterator.prototype);

        AsyncIterator.prototype[asyncIteratorSymbol] = function () {
          return this;
        };

        exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
        // AsyncIterator objects; they just return a Promise for the value of
        // the final result produced by the iterator.

        exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
          if (PromiseImpl === void 0) PromiseImpl = Promise;
          var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
          return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
          : iter.next().then(function (result) {
            return result.done ? result.value : iter.next();
          });
        };

        function makeInvokeMethod(innerFn, self, context) {
          var state = GenStateSuspendedStart;
          return function invoke(method, arg) {
            if (state === GenStateExecuting) {
              throw new Error("Generator is already running");
            }

            if (state === GenStateCompleted) {
              if (method === "throw") {
                throw arg;
              } // Be forgiving, per 25.3.3.3.3 of the spec:
              // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


              return doneResult();
            }

            context.method = method;
            context.arg = arg;

            while (true) {
              var delegate = context.delegate;

              if (delegate) {
                var delegateResult = maybeInvokeDelegate(delegate, context);

                if (delegateResult) {
                  if (delegateResult === ContinueSentinel) continue;
                  return delegateResult;
                }
              }

              if (context.method === "next") {
                // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
              } else if (context.method === "throw") {
                if (state === GenStateSuspendedStart) {
                  state = GenStateCompleted;
                  throw context.arg;
                }

                context.dispatchException(context.arg);
              } else if (context.method === "return") {
                context.abrupt("return", context.arg);
              }

              state = GenStateExecuting;
              var record = tryCatch(innerFn, self, context);

              if (record.type === "normal") {
                // If an exception is thrown from innerFn, we leave state ===
                // GenStateExecuting and loop back for another invocation.
                state = context.done ? GenStateCompleted : GenStateSuspendedYield;

                if (record.arg === ContinueSentinel) {
                  continue;
                }

                return {
                  value: record.arg,
                  done: context.done
                };
              } else if (record.type === "throw") {
                state = GenStateCompleted; // Dispatch the exception by looping back around to the
                // context.dispatchException(context.arg) call above.

                context.method = "throw";
                context.arg = record.arg;
              }
            }
          };
        } // Call delegate.iterator[context.method](context.arg) and handle the
        // result, either by returning a { value, done } result from the
        // delegate iterator, or by modifying context.method and context.arg,
        // setting context.delegate to null, and returning the ContinueSentinel.


        function maybeInvokeDelegate(delegate, context) {
          var method = delegate.iterator[context.method];

          if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;

            if (context.method === "throw") {
              // Note: ["return"] must be used for ES3 parsing compatibility.
              if (delegate.iterator["return"]) {
                // If the delegate iterator has a return method, give it a
                // chance to clean up.
                context.method = "return";
                context.arg = undefined;
                maybeInvokeDelegate(delegate, context);

                if (context.method === "throw") {
                  // If maybeInvokeDelegate(context) changed context.method from
                  // "return" to "throw", let that override the TypeError below.
                  return ContinueSentinel;
                }
              }

              context.method = "throw";
              context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }

            return ContinueSentinel;
          }

          var record = tryCatch(method, delegate.iterator, context.arg);

          if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
          }

          var info = record.arg;

          if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
          }

          if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

            context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.

            if (context.method !== "return") {
              context.method = "next";
              context.arg = undefined;
            }
          } else {
            // Re-yield the result returned by the delegate method.
            return info;
          } // The delegate iterator is finished, so forget it and continue with
          // the outer generator.


          context.delegate = null;
          return ContinueSentinel;
        } // Define Generator.prototype.{next,throw,return} in terms of the
        // unified ._invoke helper method.


        defineIteratorMethods(Gp);
        define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
        // @@iterator function is called on it. Some browsers' implementations of the
        // iterator prototype chain incorrectly implement this, causing the Generator
        // object to not be returned from this call. This ensures that doesn't happen.
        // See https://github.com/facebook/regenerator/issues/274 for more details.

        Gp[iteratorSymbol] = function () {
          return this;
        };

        Gp.toString = function () {
          return "[object Generator]";
        };

        function pushTryEntry(locs) {
          var entry = {
            tryLoc: locs[0]
          };

          if (1 in locs) {
            entry.catchLoc = locs[1];
          }

          if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
          }

          this.tryEntries.push(entry);
        }

        function resetTryEntry(entry) {
          var record = entry.completion || {};
          record.type = "normal";
          delete record.arg;
          entry.completion = record;
        }

        function Context(tryLocsList) {
          // The root entry object (effectively a try statement without a catch
          // or a finally block) gives us a place to store values thrown from
          // locations where there is no enclosing try statement.
          this.tryEntries = [{
            tryLoc: "root"
          }];
          tryLocsList.forEach(pushTryEntry, this);
          this.reset(true);
        }

        exports.keys = function (object) {
          var keys = [];

          for (var key in object) {
            keys.push(key);
          }

          keys.reverse(); // Rather than returning an object with a next method, we keep
          // things simple and return the next function itself.

          return function next() {
            while (keys.length) {
              var key = keys.pop();

              if (key in object) {
                next.value = key;
                next.done = false;
                return next;
              }
            } // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.


            next.done = true;
            return next;
          };
        };

        function values(iterable) {
          if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];

            if (iteratorMethod) {
              return iteratorMethod.call(iterable);
            }

            if (typeof iterable.next === "function") {
              return iterable;
            }

            if (!isNaN(iterable.length)) {
              var i = -1,
                  next = function next() {
                while (++i < iterable.length) {
                  if (hasOwn.call(iterable, i)) {
                    next.value = iterable[i];
                    next.done = false;
                    return next;
                  }
                }

                next.value = undefined;
                next.done = true;
                return next;
              };

              return next.next = next;
            }
          } // Return an iterator with no values.


          return {
            next: doneResult
          };
        }

        exports.values = values;

        function doneResult() {
          return {
            value: undefined,
            done: true
          };
        }

        Context.prototype = {
          constructor: Context,
          reset: function reset(skipTempReset) {
            this.prev = 0;
            this.next = 0; // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.

            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);

            if (!skipTempReset) {
              for (var name in this) {
                // Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                  this[name] = undefined;
                }
              }
            }
          },
          stop: function stop() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;

            if (rootRecord.type === "throw") {
              throw rootRecord.arg;
            }

            return this.rval;
          },
          dispatchException: function dispatchException(exception) {
            if (this.done) {
              throw exception;
            }

            var context = this;

            function handle(loc, caught) {
              record.type = "throw";
              record.arg = exception;
              context.next = loc;

              if (caught) {
                // If the dispatched exception was caught by a catch block,
                // then let that catch block handle the exception normally.
                context.method = "next";
                context.arg = undefined;
              }

              return !!caught;
            }

            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];
              var record = entry.completion;

              if (entry.tryLoc === "root") {
                // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
              }

              if (entry.tryLoc <= this.prev) {
                var hasCatch = hasOwn.call(entry, "catchLoc");
                var hasFinally = hasOwn.call(entry, "finallyLoc");

                if (hasCatch && hasFinally) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  } else if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else if (hasCatch) {
                  if (this.prev < entry.catchLoc) {
                    return handle(entry.catchLoc, true);
                  }
                } else if (hasFinally) {
                  if (this.prev < entry.finallyLoc) {
                    return handle(entry.finallyLoc);
                  }
                } else {
                  throw new Error("try statement without catch or finally");
                }
              }
            }
          },
          abrupt: function abrupt(type, arg) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];

              if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                var finallyEntry = entry;
                break;
              }
            }

            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
              // Ignore the finally entry if control is not jumping to a
              // location outside the try/catch block.
              finallyEntry = null;
            }

            var record = finallyEntry ? finallyEntry.completion : {};
            record.type = type;
            record.arg = arg;

            if (finallyEntry) {
              this.method = "next";
              this.next = finallyEntry.finallyLoc;
              return ContinueSentinel;
            }

            return this.complete(record);
          },
          complete: function complete(record, afterLoc) {
            if (record.type === "throw") {
              throw record.arg;
            }

            if (record.type === "break" || record.type === "continue") {
              this.next = record.arg;
            } else if (record.type === "return") {
              this.rval = this.arg = record.arg;
              this.method = "return";
              this.next = "end";
            } else if (record.type === "normal" && afterLoc) {
              this.next = afterLoc;
            }

            return ContinueSentinel;
          },
          finish: function finish(finallyLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];

              if (entry.finallyLoc === finallyLoc) {
                this.complete(entry.completion, entry.afterLoc);
                resetTryEntry(entry);
                return ContinueSentinel;
              }
            }
          },
          "catch": function _catch(tryLoc) {
            for (var i = this.tryEntries.length - 1; i >= 0; --i) {
              var entry = this.tryEntries[i];

              if (entry.tryLoc === tryLoc) {
                var record = entry.completion;

                if (record.type === "throw") {
                  var thrown = record.arg;
                  resetTryEntry(entry);
                }

                return thrown;
              }
            } // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.


            throw new Error("illegal catch attempt");
          },
          delegateYield: function delegateYield(iterable, resultName, nextLoc) {
            this.delegate = {
              iterator: values(iterable),
              resultName: resultName,
              nextLoc: nextLoc
            };

            if (this.method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              this.arg = undefined;
            }

            return ContinueSentinel;
          }
        }; // Regardless of whether this script is executing as a CommonJS module
        // or not, return the runtime object so that we can declare the variable
        // regeneratorRuntime in the outer scope, which allows this module to be
        // injected easily by `bin/regenerator --include-runtime script.js`.

        return exports;
      }( // If this script is executing as a CommonJS module, use module.exports
      // as the regeneratorRuntime namespace. Otherwise create a new empty
      // object. Either way, the resulting object will be used to initialize
      // the regeneratorRuntime variable at the top of this file.
      true ? module.exports : undefined);

      try {
        regeneratorRuntime = runtime;
      } catch (accidentalStrictMode) {
        // This module should not be running in strict mode, so the above
        // assignment should always work unless something is misconfigured. Just
        // in case runtime.js accidentally runs in strict mode, we can escape
        // strict mode using a global Function call. This could conceivably fail
        // if a Content Security Policy forbids using Function, but in that case
        // the proper solution is to fix the accidental strict mode problem. If
        // you've misconfigured your bundler to force strict mode and applied a
        // CSP to forbid Function, and you're not willing to fix either of those
        // problems, please detail your unique predicament in a GitHub issue.
        Function("r", "regeneratorRuntime = r")(runtime);
      }
      /***/

    },

    /***/
    "oGhf":
    /*!***********************************************************!*\
      !*** ./node_modules/tesseract.js/src/constants/config.js ***!
      \***********************************************************/

    /*! no static exports found */

    /***/
    function oGhf(module, exports, __webpack_require__) {
      var OEM = __webpack_require__(
      /*! ./OEM */
      "xYo3");

      module.exports = {
        defaultOEM: OEM.DEFAULT
      };
      /***/
    },

    /***/
    "sUgH":
    /*!*********************************************************************!*\
      !*** ./node_modules/tesseract.js/src/worker/browser/spawnWorker.js ***!
      \*********************************************************************/

    /*! no static exports found */

    /***/
    function sUgH(module, exports) {
      /**
       * spawnWorker
       *
       * @name spawnWorker
       * @function create a new Worker in browser
       * @access public
       */
      module.exports = function (_ref16) {
        var workerPath = _ref16.workerPath,
            workerBlobURL = _ref16.workerBlobURL;
        var worker;

        if (Blob && URL && workerBlobURL) {
          var blob = new Blob(["importScripts(\"".concat(workerPath, "\");")], {
            type: 'application/javascript'
          });
          worker = new Worker(URL.createObjectURL(blob));
        } else {
          worker = new Worker(workerPath);
        }

        return worker;
      };
      /***/

    },

    /***/
    "vjsB":
    /*!*****************************************************************************************!*\
      !*** ./src/app/views/others/verification-completed/verification-completed.component.ts ***!
      \*****************************************************************************************/

    /*! exports provided: VerificationCompletedComponent */

    /***/
    function vjsB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "VerificationCompletedComponent", function () {
        return VerificationCompletedComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "iInd");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/services/dialogs/dialog.service */
      "laYw");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      var VerificationCompletedComponent = /*#__PURE__*/function () {
        function VerificationCompletedComponent(api, router, ls, dialogRef, dialogService, data) {
          _classCallCheck(this, VerificationCompletedComponent);

          this.api = api;
          this.router = router;
          this.ls = ls;
          this.dialogRef = dialogRef;
          this.dialogService = dialogService;
          this.data = data;
          this.kyc_reference = data.kycRef;
        }

        _createClass(VerificationCompletedComponent, [{
          key: "closeClick",
          value: function closeClick() {
            console.log("close click"); // [routerLink]="['/others/kyc']" 

            this.dialogRef.close(); // this.router.navigateByUrl('/others/kyc'); 
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this40 = this;

            this.accountType = this.ls.getItem("accountType");
            this.reference = sessionStorage.getItem('kyc_reference');
            this.customer_Id = sessionStorage.getItem('customer_id');
            this.customerStatus = sessionStorage.getItem('cust_status');
            console.log(this.customerStatus);
            this.api.getId().subscribe(function (info) {
              console.log("info from other component", _this40.customerId);

              _this40.assign(info.id);
            });
            setTimeout(function () {
              document.getElementById('kychide').click();
            }, 500);
            setTimeout(function () {
              _this40.updateKycStatus();
            }, 3000);
          }
        }, {
          key: "assign",
          value: function assign(id) {
            this.customerId = id;
          }
        }, {
          key: "done",
          value: function done() {
            console.log(this.accountType);

            if (this.accountType == 'cardOrigination') {
              this.dialogRef.close();
              this.ls.setItem("kycReference", this.reference);
              this.ls.setItem("KycStatus", this.customerStatus);
              this.ls.setItem("kycForCard", true);
              this.router.navigate(["/cardaccount/applicationEntryStage/list/cardInitiation"]);
              console.log("calling if");
            } else {
              console.log("calling else"); // this.router.navigateByUrl('/others/kyc-method');

              this.dialogService.openKycVerificationMethod();
              this.dialogRef.close();
              this.router.navigateByUrl("/others/Service");
            }

            sessionStorage.removeItem('customer_id');
            localStorage.removeItem('customer_id');
            sessionStorage.removeItem('kyc_reference');
          }
        }, {
          key: "updateKycStatus",
          value: function updateKycStatus() {
            var _this41 = this;

            console.log('customerId :: ', this.customer_Id);
            console.log(this.customerStatus);

            if (this.customerStatus === "APPROVED") {
              this.customerStatus = "APPROVED";
            } else {
              this.customerStatus = "INITIATED";
            }

            this.api.updateKycStatusByCustId(this.customer_Id, this.customerStatus, "").subscribe(function (data) {
              _this41.kycData = data;
              console.log('update response :: ', data);
            });
          }
        }]);

        return VerificationCompletedComponent;
      }();

      VerificationCompletedComponent.ɵfac = function VerificationCompletedComponent_Factory(t) {
        return new (t || VerificationCompletedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
      };

      VerificationCompletedComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: VerificationCompletedComponent,
        selectors: [["app-verification-completed"]],
        decls: 18,
        vars: 1,
        consts: [["fxLayout", "column wrap", 1, "main"], ["fxFlex", "100", "fxLayoutAlign", "end stretch"], ["id", "close", 1, "mat-18", 3, "click"], ["fxFlex", "100", "fxLayoutAlign", "center stretch", "fxLayoutGap", "space-around", "id", "scanDiv"], ["id", "scan"], ["fxFlex", "50", "fxLayoutAlign", "center stretch", "id", "proceedDiv"], ["id", "hold"], [1, "KYCtxt"], ["fxFlex", "50", "fxLayoutAlign", "center stretch"], ["fxFlex", "25", "fxLayoutAlign", "center stretch"], ["src", "assets/images/completed.PNG", 1, "coImg"], ["fxFlex", "50", "fxLayoutAlign", "center stretch", 1, "divButton"], ["mat-raised-button", "", 1, "btn", 3, "click"]],
        template: function VerificationCompletedComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerificationCompletedComponent_Template_mat_icon_click_2_listener() {
              return ctx.closeClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "KYC Verification is completed!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "KYC Reference Number: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VerificationCompletedComponent_Template_button_click_16_listener() {
              return ctx.done();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Done");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.kyc_reference);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatLabel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]],
        styles: [".btn[_ngcontent-%COMP%] {\n  width: 27%;\n  border-radius: 20px;\n  background-color: #3298f6;\n  color: white;\n}\n\n.divButton[_ngcontent-%COMP%] {\n  margin-bottom: 2%;\n}\n\n.main[_ngcontent-%COMP%] {\n  width: 600px;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n\nprogress[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20px;\n}\n\n#fClr[_ngcontent-%COMP%] {\n  margin-left: 17%;\n  margin-top: 15px;\n  border-radius: 5px;\n  height: 100px;\n}\n\n.contentClass[_ngcontent-%COMP%] {\n  font-size: smaller;\n  color: #a1a1a1;\n  font-family: sans-serif;\n}\n\n.titleClass[_ngcontent-%COMP%] {\n  font-size: x-large;\n  font-family: sans-serif;\n  color: #616161;\n}\n\n.closeIconClass[_ngcontent-%COMP%] {\n  font-size: medium;\n  color: #999999;\n}\n\n.coImg[_ngcontent-%COMP%] {\n  max-width: 200px;\n  margin-bottom: 10px;\n}\n\n.greyButton[_ngcontent-%COMP%] {\n  border-radius: 90px;\n  width: 16%;\n  background-color: #A0A0A0;\n  color: white;\n  border-style: none;\n  font-size: 7px;\n  padding: 10px 0;\n  box-shadow: 0 3pt 6pt #00000029;\n}\n\n.btnScanClass[_ngcontent-%COMP%] {\n  line-height: 30px !important;\n  border-color: #456EFE;\n  background-color: #456EFE !important;\n  color: white;\n  border-radius: 20px;\n  width: 160px;\n  height: 35px;\n  font-size: small;\n  font-family: monospace;\n}\n\n.contentDiv[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n  padding: 20px !important;\n}\n\n.divTitleClass[_ngcontent-%COMP%] {\n  height: 60px;\n}\n\n.fingeralgn[_ngcontent-%COMP%] {\n  font-size: 80px;\n  color: #6EBDF9;\n}\n\n.imagesDiv[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  padding-bottom: 20px;\n}\n\n.KYCtxt[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n\n.h-100[_ngcontent-%COMP%] {\n  height: 100% !important;\n}\n\n#clr[_ngcontent-%COMP%] {\n  height: 160px;\n  width: 180px;\n  margin-bottom: 30px;\n  background-color: #F4F8F7;\n}\n\n#fclr[_ngcontent-%COMP%] {\n  color: lightgray;\n  font-size: 60px;\n  margin-top: 18px;\n  margin-left: 30px;\n}\n\n.scanDiv[_ngcontent-%COMP%] {\n  margin-top: 7%;\n}\n\n#scan[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-top: 7%;\n  margin-bottom: 3%;\n}\n\n#proceedDiv[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  margin-bottom: 3%;\n}\n\n#progressBarDiv[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\n#file[_ngcontent-%COMP%] {\n  height: 10px;\n  color: white;\n  border-radius: 10px;\n  border: 1px solid grey;\n}\n\n#thumb[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  flex-flow: nowrap;\n  margin-bottom: 20px;\n}\n\n#fingerprintSpan[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n  font-size: 12px;\n  margin-bottom: 4px;\n}\n\n#close[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  height: 4px;\n  width: 4px;\n  display: flex;\n  justify-content: flex-end;\n  top: 0px;\n  left: 0px;\n  margin-right: -6%;\n  margin-top: -3%;\n}\n\n.line[_ngcontent-%COMP%] {\n  border: thick;\n  width: 70px;\n  \n  border-block-width: revert;\n  \n  background-color: #FE6700;\n  border: 1px solid #FE6700;\n  border-radius: 5px;\n  \n  margin-bottom: 10px;\n}\n\n.hold[_ngcontent-%COMP%] {\n  margin-top: 3%;\n}\n\n@media only screen and (max-width: 791px) and (min-width: 545px) {\n  .main[_ngcontent-%COMP%] {\n    width: 400px;\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n}\n\n@media only screen and (max-width: 544px) and (min-width: 200px) {\n  .main[_ngcontent-%COMP%] {\n    width: 200px;\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdmVyaWZpY2F0aW9uLWNvbXBsZXRlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFVBQVM7RUFFVCxtQkFBbUI7RUFDcEIseUJBQW1DO0VBQ25DLFlBQVk7QUFEZjs7QUFNQTtFQUNBLGlCQUFpQjtBQUhqQjs7QUFLQTtFQUNLLFlBQVc7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBRnZCOztBQUlBO0VBRUksV0FBVztFQUNYLFlBQVk7QUFGaEI7O0FBT0E7RUFFSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0FBTGpCOztBQU9BO0VBQ0ksa0JBQWtCO0VBQ2xCLGNBQWM7RUFHZCx1QkFBdUI7QUFOM0I7O0FBUUM7RUFDRyxrQkFBa0I7RUFFakIsdUJBQXVCO0VBQ3ZCLGNBQWM7QUFObkI7O0FBU0M7RUFDSSxpQkFBaUI7RUFDakIsY0FBYztBQU5uQjs7QUFRQztFQUNJLGdCQUFlO0VBQ2YsbUJBQW1CO0FBTHhCOztBQU9DO0VBQ0ksbUJBQW1CO0VBQ25CLFVBQVM7RUFDVCx5QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZUFBZTtFQUNmLCtCQUErQjtBQUpwQzs7QUFNQztFQUNJLDRCQUEyQjtFQUMzQixxQkFBcUI7RUFDckIsb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBSDNCOztBQUtDO0VBQ0ksb0JBQW9CO0VBQ3BCLHdCQUF3QjtBQUY3Qjs7QUFJQztFQUNJLFlBQVk7QUFEakI7O0FBSUE7RUFDSSxlQUFlO0VBQ2YsY0FBZTtBQURuQjs7QUFJQTtFQUNJLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFEeEI7O0FBR0E7RUFFSSx5QkFBeUI7QUFEN0I7O0FBSUE7RUFDSSx1QkFBdUI7QUFEM0I7O0FBR0E7RUFDSSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFBN0I7O0FBRUE7RUFDSSxnQkFBZTtFQUNmLGVBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ3JCOztBQUNBO0VBQ0ksY0FBYTtBQUVqQjs7QUFBQTtFQUNJLGVBQWM7RUFDZCxjQUFhO0VBQ2IsaUJBQWdCO0FBR3BCOztBQUFBO0VBQ0csY0FBYztFQUNkLGlCQUFpQjtBQUdwQjs7QUFEQTtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFJdkI7O0FBRkE7RUFDSSxZQUFXO0VBQUMsWUFBWTtFQUN4QixtQkFBbUI7RUFDbkIsc0JBQXFCO0FBTXpCOztBQUhBO0VBQ0ksOEJBQThCO0VBQzlCLGlCQUFpQjtFQUFDLG1CQUFtQjtBQU96Qzs7QUFMQTtFQUNJLGlCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBYztFQUFDLGtCQUFrQjtBQVNyQzs7QUFQQTtFQUNJLDRCQUE0QjtFQUc1QixXQUFXO0VBQ1gsVUFBVTtFQUNWLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsUUFBUTtFQUNSLFNBQVM7RUFHVCxpQkFBaUI7RUFDakIsZUFBZTtBQU1uQjs7QUFKQTtFQUNJLGFBQWE7RUFDYixXQUFXO0VBQ1gseUJBQUE7RUFDQSwwQkFBMEI7RUFHMUIsaUJBQUE7RUFDQSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixxQkFBQTtFQUNBLG1CQUFtQjtBQUt2Qjs7QUFDQTtFQUNJLGNBQWE7QUFFakI7O0FBRUE7RUFDSTtJQUNJLFlBQVc7SUFFWixrQkFBa0I7SUFDbEIsbUJBQW1CO0VBQXhCO0FBQ0Y7O0FBRUE7RUFDSTtJQUNJLFlBQVc7SUFFWixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQXZCO0FBQ0YiLCJmaWxlIjoidmVyaWZpY2F0aW9uLWNvbXBsZXRlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG5cclxue1xyXG4gICAgd2lkdGg6MjclO1xyXG4gICAgXHJcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNTAsIDE1MiwgMjQ2KTtcclxuICAgY29sb3I6IHdoaXRlO1xyXG5cclxuXHJcblxyXG59XHJcbi5kaXZCdXR0b257XHJcbm1hcmdpbi1ib3R0b206IDIlO1xyXG59XHJcbi5tYWlue1xyXG4gICAgIHdpZHRoOjYwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcclxufVxyXG5wcm9ncmVzc1xyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIC8vIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MmRlZywgI0REOTM5MyAwJSwgIzQ1NkVGQyAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbn1cclxuXHJcblxyXG4jZkNscntcclxuXHJcbiAgICBtYXJnaW4tbGVmdDogMTclO1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbn1cclxuLmNvbnRlbnRDbGFzc3tcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgIGNvbG9yOiAjYTFhMWExO1xyXG4gICAgIC8vIGNvbG9yOiAjQjdCN0I3O1xyXG4gICAgIC8vIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gfVxyXG4gLnRpdGxlQ2xhc3N7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICAvLyAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgIGNvbG9yOiAjNjE2MTYxO1xyXG4gICAgIC8vIGNvbG9yOiAjODg4ODg4O1xyXG4gfVxyXG4gLmNsb3NlSWNvbkNsYXNze1xyXG4gICAgIGZvbnQtc2l6ZTogbWVkaXVtO1xyXG4gICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gfVxyXG4gLmNvSW1ne1xyXG4gICAgIG1heC13aWR0aDoyMDBweDtcclxuICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gfVxyXG4gLmdyZXlCdXR0b257XHJcbiAgICAgYm9yZGVyLXJhZGl1czogOTBweDtcclxuICAgICB3aWR0aDoxNiU7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjojQTBBMEEwO1xyXG4gICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICBib3JkZXItc3R5bGU6IG5vbmU7XHJcbiAgICAgZm9udC1zaXplOiA3cHg7XHJcbiAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcbiB9XHJcbiAuYnRuU2NhbkNsYXNze1xyXG4gICAgIGxpbmUtaGVpZ2h0OjMwcHggIWltcG9ydGFudDtcclxuICAgICBib3JkZXItY29sb3I6ICM0NTZFRkU7XHJcbiAgICAgYmFja2dyb3VuZC1jb2xvcjogIzQ1NkVGRSAhaW1wb3J0YW50O1xyXG4gICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgIHdpZHRoOiAxNjBweDtcclxuICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gfVxyXG4gLmNvbnRlbnREaXZ7XHJcbiAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgcGFkZGluZzogMjBweCAhaW1wb3J0YW50O1xyXG4gfVxyXG4gLmRpdlRpdGxlQ2xhc3N7XHJcbiAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gfVxyXG5cclxuLmZpbmdlcmFsZ257XHJcbiAgICBmb250LXNpemU6IDgwcHg7IFxyXG4gICAgY29sb3I6ICM2RUJERjkgO1xyXG59XHJcblxyXG4uaW1hZ2VzRGl2e1xyXG4gICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG4uS1lDdHh0XHJcbntcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5oLTEwMHtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG59XHJcbiNjbHJ7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY4Rjc7XHJcbn1cclxuI2ZjbHJ7XHJcbiAgICBjb2xvcjpsaWdodGdyYXk7XHJcbiAgICBmb250LXNpemU6NjBweDtcclxuICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG4uc2NhbkRpdntcclxuICAgIG1hcmdpbi10b3A6NyU7XHJcbn1cclxuI3NjYW57XHJcbiAgICBmb250LXNpemU6MThweDtcclxuICAgIG1hcmdpbi10b3A6NyU7XHJcbiAgICBtYXJnaW4tYm90dG9tOjMlO1xyXG5cclxufVxyXG4jcHJvY2VlZERpdntcclxuICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgIG1hcmdpbi1ib3R0b206IDMlO1xyXG59XHJcbiNwcm9ncmVzc0JhckRpdntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiNmaWxle1xyXG4gICAgaGVpZ2h0OjEwcHg7Y29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgZ3JleTtcclxufVxyXG5cclxuI3RodW1ie1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC1mbG93OiBub3dyYXA7bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4jZmluZ2VycHJpbnRTcGFue1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZToxMnB4O21hcmdpbi1ib3R0b206IDRweDtcclxufVxyXG4jY2xvc2V7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgLy8gZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgLy8gZmlsbDogY3VycmVudENvbG9yO1xyXG4gICAgaGVpZ2h0OiA0cHg7XHJcbiAgICB3aWR0aDogNHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIC8vIG1hcmdpbi1yaWdodDogLTQlICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAtMyUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1yaWdodDogLTYlO1xyXG4gICAgbWFyZ2luLXRvcDogLTMlO1xyXG59XHJcbi5saW5lIHtcclxuICAgIGJvcmRlcjogdGhpY2s7IFxyXG4gICAgd2lkdGg6IDcwcHg7XHJcbiAgICAvKiBib3JkZXItc3R5bGU6IHNvbGlkOyAqL1xyXG4gICAgYm9yZGVyLWJsb2NrLXdpZHRoOiByZXZlcnQ7XHJcbiAgICAvLyBjb2xvcjogYmx1ZTtcclxuICAgIC8vIGNvbG9yOiAjNjk4OGY2O1xyXG4gICAgLyogd2lkdGg6IDQwcHg7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkU2NzAwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI0ZFNjcwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIC8qIG1hcmdpbjogaW5pdGlhbDsgKi9cclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG4vLyAgOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3MtYmFyLWZpbGw6OmFmdGVyIHtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcblxyXG5cclxuLmhvbGR7XHJcbiAgICBtYXJnaW4tdG9wOjMlO1xyXG4gICAgLy8gb3BhY2l0eTo2MCU7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzkxcHgpIGFuZCAobWluLXdpZHRoOiA1NDVweCl7XHJcbiAgICAubWFpbntcclxuICAgICAgICB3aWR0aDo0MDBweDtcclxuICAgICAgICBcclxuICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0NHB4KSBhbmQgKG1pbi13aWR0aDogMjAwcHgpe1xyXG4gICAgLm1haW57XHJcbiAgICAgICAgd2lkdGg6MjAwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgfVxyXG5cclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerificationCompletedComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-verification-completed',
            templateUrl: './verification-completed.component.html',
            styleUrls: ['./verification-completed.component.scss']
          }]
        }], function () {
          return [{
            type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }, {
            type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__["LocalStoreService"]
          }, {
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "wRsi":
    /*!****************************************************!*\
      !*** ./node_modules/tesseract.js/src/Tesseract.js ***!
      \****************************************************/

    /*! no static exports found */

    /***/
    function wRsi(module, exports, __webpack_require__) {
      var createWorker = __webpack_require__(
      /*! ./createWorker */
      "c+Cr");

      var recognize = /*#__PURE__*/function () {
        var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14(image, langs, options) {
          var worker;
          return regeneratorRuntime.wrap(function _callee14$(_context14) {
            while (1) {
              switch (_context14.prev = _context14.next) {
                case 0:
                  worker = createWorker(options);
                  _context14.next = 3;
                  return worker.load();

                case 3:
                  _context14.next = 5;
                  return worker.loadLanguage(langs);

                case 5:
                  _context14.next = 7;
                  return worker.initialize(langs);

                case 7:
                  return _context14.abrupt("return", worker.recognize(image)["finally"]( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                    return regeneratorRuntime.wrap(function _callee13$(_context13) {
                      while (1) {
                        switch (_context13.prev = _context13.next) {
                          case 0:
                            _context13.next = 2;
                            return worker.terminate();

                          case 2:
                          case "end":
                            return _context13.stop();
                        }
                      }
                    }, _callee13);
                  }))));

                case 8:
                case "end":
                  return _context14.stop();
              }
            }
          }, _callee14);
        }));

        return function recognize(_x11, _x12, _x13) {
          return _ref17.apply(this, arguments);
        };
      }();

      var detect = /*#__PURE__*/function () {
        var _ref19 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16(image, options) {
          var worker;
          return regeneratorRuntime.wrap(function _callee16$(_context16) {
            while (1) {
              switch (_context16.prev = _context16.next) {
                case 0:
                  worker = createWorker(options);
                  _context16.next = 3;
                  return worker.load();

                case 3:
                  _context16.next = 5;
                  return worker.loadLanguage('osd');

                case 5:
                  _context16.next = 7;
                  return worker.initialize('osd');

                case 7:
                  return _context16.abrupt("return", worker.detect(image)["finally"]( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
                    return regeneratorRuntime.wrap(function _callee15$(_context15) {
                      while (1) {
                        switch (_context15.prev = _context15.next) {
                          case 0:
                            _context15.next = 2;
                            return worker.terminate();

                          case 2:
                          case "end":
                            return _context15.stop();
                        }
                      }
                    }, _callee15);
                  }))));

                case 8:
                case "end":
                  return _context16.stop();
              }
            }
          }, _callee16);
        }));

        return function detect(_x14, _x15) {
          return _ref19.apply(this, arguments);
        };
      }();

      module.exports = {
        recognize: recognize,
        detect: detect
      };
      /***/
    },

    /***/
    "xYo3":
    /*!********************************************************!*\
      !*** ./node_modules/tesseract.js/src/constants/OEM.js ***!
      \********************************************************/

    /*! no static exports found */

    /***/
    function xYo3(module, exports) {
      /*
       * OEM = OCR Engine Mode, and there are 4 possible modes.
       *
       * By default tesseract.js uses LSTM_ONLY mode.
       *
       */
      module.exports = {
        TESSERACT_ONLY: 0,
        LSTM_ONLY: 1,
        TESSERACT_LSTM_COMBINED: 2,
        DEFAULT: 3
      };
      /***/
    },

    /***/
    "yb/K":
    /*!************************************************!*\
      !*** ./node_modules/tesseract.js/src/index.js ***!
      \************************************************/

    /*! no static exports found */

    /***/
    function ybK(module, exports, __webpack_require__) {
      /**
       *
       * Entry point for tesseract.js, should be the entry when bundling.
       *
       * @fileoverview entry point for tesseract.js
       * @author Kevin Kwok <antimatter15@gmail.com>
       * @author Guillermo Webster <gui@mit.edu>
       * @author Jerome Wu <jeromewus@gmail.com>
       */
      __webpack_require__(
      /*! regenerator-runtime/runtime */
      "ls82");

      var createScheduler = __webpack_require__(
      /*! ./createScheduler */
      "IIpR");

      var createWorker = __webpack_require__(
      /*! ./createWorker */
      "c+Cr");

      var Tesseract = __webpack_require__(
      /*! ./Tesseract */
      "wRsi");

      var OEM = __webpack_require__(
      /*! ./constants/OEM */
      "xYo3");

      var PSM = __webpack_require__(
      /*! ./constants/PSM */
      "67Ye");

      var _webpack_require__6 = __webpack_require__(
      /*! ./utils/log */
      "fIT2"),
          setLogging = _webpack_require__6.setLogging;

      module.exports = _objectSpread({
        OEM: OEM,
        PSM: PSM,
        createScheduler: createScheduler,
        createWorker: createWorker,
        setLogging: setLogging
      }, Tesseract);
      /***/
    }
  }]);
})();
//# sourceMappingURL=default~views-card-account-card-account-module~views-others-others-module~views-others-video-verific~e3216432-es5.js.map