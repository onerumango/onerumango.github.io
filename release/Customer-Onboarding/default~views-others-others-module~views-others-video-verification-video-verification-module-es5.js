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

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~views-others-others-module~views-others-video-verification-video-verification-module"], {
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


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT"); // import { FormBuilder, FormGroup } from '@angular/forms';
      // import { ApiService } from 'app/api.service';


      var FingerprintAuthenticationComponent = /*#__PURE__*/function () {
        //constructor(@Inject(MAT_DIALOG_DATA) public data: {animal: string},private router: Router,public dialog: MatDialog,public dialogRef: MatDialogRef<FingerprintAuthenticationComponent>) { }
        // constructor(private dialogRef: MatDialogRef<FingerprintAuthenticationComponent>
        // ){} 
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
        }

        _createClass(FingerprintAuthenticationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.errormsg = "An OTP has been sent to your " + this.type;
            this.basicInformationForm = this.fb.group({
              otp: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
            });
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
        decls: 21,
        vars: 4,
        consts: [["mat-button", "", "id", "close", "mat-dialog-close", "", 3, "click"], [1, "closeicon"], [3, "formGroup"], ["fxLayout", "row"], ["id", "box", 1, "pd-2"], [1, "verification"], [1, "phoneNumber"], [1, "verify"], [1, "flex-grow-1"], ["type", "input", 1, "inputMatcard"], ["matInput", "", "id", "otp", "type", "number", "maxlength", "6", "oninput", "this.value = this.value.slice(0, this.maxLength);", "formControlName", "otp", 1, "alignment"], [1, "verify1"], ["id", "resend", 3, "click"], ["mat-stroked-button", "", 1, "button", 3, "disabled", "click"]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Please enter the OTP to verify");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-card", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Not Recieved?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FingerprintAuthenticationComponent_Template_span_click_17_listener() {
              return ctx.getOtp();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Resend");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FingerprintAuthenticationComponent_Template_button_click_19_listener() {
              return ctx.verify(ctx.basicInformationForm.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Proceed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.basicInformationForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.errormsg);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.number);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.basicInformationForm.valid);
          }
        },
        directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_9__["DefaultLayoutDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["MaxLengthValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"]],
        styles: [".phoneNumber[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  margin-bottom: 20px;\n  color: black;\n  font-size: smaller;\n  font-weight: bolder;\n}\n\n.verification[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n  margin-top: 8%;\n  margin-left: 5%;\n  margin-right: 5%;\n  margin-bottom: 3%;\n  font-size: 22px;\n}\n\n.verify[_ngcontent-%COMP%] {\n  display: block;\n  color: grey;\n  font-size: 14px;\n  text-align: center;\n  cursor: pointer;\n}\n\n.verify1[_ngcontent-%COMP%] {\n  display: block;\n  color: grey;\n  font-size: 10px;\n  text-align: center;\n  margin-top: 5px;\n  cursor: pointer;\n}\n\n.flex-grow-1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.inputClass[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n  box-shadow: 0 3pt 6pt #00000029;\n  font-weight: bolder;\n}\n\nmatCard[_ngcontent-%COMP%] {\n  max-width: 500px;\n  align-items: center;\n  justify-content: center;\n  padding: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n}\n\ninput[_ngcontent-%COMP%] {\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n  font-weight: bolder;\n}\n\n.inputMatcard[_ngcontent-%COMP%] {\n  padding: 12px;\n  max-width: 40%;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  margin: auto;\n  margin-top: 20px;\n}\n\n.button[_ngcontent-%COMP%] {\n  width: 170px;\n  display: block;\n  border-radius: 45px;\n  margin: auto;\n  margin-top: 25px;\n  margin-bottom: 4%;\n  color: white;\n  background-color: #456EFE;\n}\n\n.cdk-overlay-pane.my-dialog[_ngcontent-%COMP%] {\n  position: relative !important;\n}\n\n.close.mat-button[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 5px;\n  line-height: 14px;\n  min-width: auto;\n}\n\n.closeicon[_ngcontent-%COMP%] {\n  line-height: 0px;\n  width: 18px;\n  \n  \n  \n  \n  position: absolute;\n  top: 0;\n  right: 0;\n}\n\n#close[_ngcontent-%COMP%] {\n  float: right;\n}\n\n#box[_ngcontent-%COMP%] {\n  width: 600px;\n}\n\n#resend[_ngcontent-%COMP%] {\n  font-weight: bolder;\n  color: black;\n}\n\n#proceed[_ngcontent-%COMP%] {\n  width: 170px;\n  background-color: #456EFE;\n  color: white;\n  margin-top: 25px;\n  margin-bottom: 4%;\n}\n\n#otp[_ngcontent-%COMP%] {\n  outline: none;\n  text-align: center;\n  letter-spacing: 10px;\n}\n\ninput[type=\"number\"][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=\"number\"][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZmluZ2VycHJpbnQtYXV0aGVudGljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFjO0VBQ2Qsa0JBQWtCO0VBRWpCLG1CQUFtQjtFQUNwQixZQUFZO0VBQ1osa0JBQWtCO0VBQ25CLG1CQUFtQjtBQUF0Qjs7QUFFQztFQUNHLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGVBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGVBQWM7QUFDbEI7O0FBR0E7RUFDSSxjQUFjO0VBQ2QsV0FBVTtFQUVWLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtBQURuQjs7QUFJQTtFQUNJLGNBQWM7RUFDZCxXQUFVO0VBQ1YsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixlQUFjO0VBQ2QsZUFBZTtBQURuQjs7QUFHQTtFQUNJLFlBQVk7QUFBaEI7O0FBR0E7RUFDSSxxRkFBb0Y7RUFDcEYsd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLCtCQUErQjtFQUMvQixtQkFBbUI7QUFBdkI7O0FBR0E7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixZQUFXO0VBQ1gscUZBQW9GO0FBQXhGOztBQUdBO0VBRUksd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsMkJBQTJCO0VBRTNCLG1CQUFtQjtBQUZ2Qjs7QUFJQTtFQUNJLGFBQWE7RUFDYixjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsWUFBWTtFQUNaLGdCQUFnQjtBQURwQjs7QUFHQTtFQUNJLFlBQVc7RUFDWCxjQUFjO0VBQ2QsbUJBQW1CO0VBQ3BCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFFYix5QkFBd0I7QUFEMUI7O0FBR0E7RUFDSSw2QkFBNEI7QUFBaEM7O0FBRUU7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFFBQVE7RUFDUixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7QUFDbkI7O0FBQ0U7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG9CQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0FBRVo7O0FBQUU7RUFDRSxZQUFZO0FBR2hCOztBQURFO0VBQ0YsWUFDRTtBQUdGOztBQUZFO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQ0Y7QUFJRjs7QUFIRTtFQUNFLFlBQVc7RUFDWCx5QkFBd0I7RUFDeEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFNckI7O0FBSkU7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQU94Qjs7QUFKRTs7RUFFRSx3QkFBdUI7RUFDdkIsU0FBUTtBQU9aIiwiZmlsZSI6ImZpbmdlcnByaW50LWF1dGhlbnRpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBob25lTnVtYmVye1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyBtYXJnaW4tdG9wOjEwcHg7XHJcbiAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4gLnZlcmlmaWNhdGlvbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogOCU7XHJcbiAgICBtYXJnaW4tbGVmdDo1JTtcclxuICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzJTtcclxuICAgIGZvbnQtc2l6ZToyMnB4O1xyXG59XHJcblxyXG5cclxuLnZlcmlmeXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6Z3JleTtcclxuICAgIC8vIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgXHJcbn1cclxuLnZlcmlmeTF7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGNvbG9yOmdyZXk7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOjVweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZmxleC1ncm93LTF7XHJcbiAgICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5pbnB1dENsYXNze1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxyZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gICAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogaGlkZGVuO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgXHJcbn1cclxubWF0Q2FyZHtcclxuICAgIG1heC13aWR0aDogNTAwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkscmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuXHJcbn1cclxuaW5wdXR7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcclxuICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XHJcbiAgICBib3JkZXItYm90dG9tLXN0eWxlOiBoaWRkZW47XHJcbiAgICAvLyBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4uaW5wdXRNYXRjYXJke1xyXG4gICAgcGFkZGluZzogMTJweDtcclxuICAgIG1heC13aWR0aDogNDAlO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLmJ1dHRvbntcclxuICAgIHdpZHRoOjE3MHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0NXB4O1xyXG4gICBtYXJnaW46IGF1dG87XHJcbiAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gICBjb2xvcjogd2hpdGU7XHJcbiAgLy8gIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojNDU2RUZFO1xyXG59XHJcbi5jZGstb3ZlcmxheS1wYW5lLm15LWRpYWxvZyB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmUhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuY2xvc2UubWF0LWJ1dHRvbiB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgbWluLXdpZHRoOiBhdXRvO1xyXG4gIH1cclxuICAuY2xvc2VpY29ue1xyXG4gICAgbGluZS1oZWlnaHQ6IDBweDtcclxuICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgLyogZm9udC1zaXplOiA4cHQ7ICovXHJcbiAgICAvKiBmb250LWZhbWlseTogdGFob21hOyAqL1xyXG4gICAgLyogbWFyZ2luLXRvcDogMXB4OyAqL1xyXG4gICAgLyogbWFyZ2luLXJpZ2h0OiAycHg7ICovXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICByaWdodDogMDtcclxuICB9XHJcbiAgI2Nsb3Nle1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuICAjYm94e1xyXG53aWR0aDogNjAwcHhcclxuICB9XHJcbiAgI3Jlc2VuZHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbiAgICBjb2xvcjpibGFja1xyXG4gIH1cclxuICAjcHJvY2VlZHtcclxuICAgIHdpZHRoOjE3MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojNDU2RUZFO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gIH1cclxuICAjb3Rwe1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgaW5wdXRbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcclxuICBpbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9ue1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7XHJcbiAgICBtYXJnaW46MDtcclxufSJdfQ== */"]
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


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");
      /* harmony import */


      var _angular_material_input__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/input */
      "e6WT");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "ura0");
      /* harmony import */


      var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! @angular/material/datepicker */
      "TN/R");
      /* harmony import */


      var _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! @angular/material/radio */
      "zQhy");
      /* harmony import */


      var _angular_material_divider__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! @angular/material/divider */
      "BSbQ");
      /* harmony import */


      var _shared_directives_only_number_directive__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ../../../shared/directives/only-number.directive */
      "2Goh");

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

      var _c0 = ["fileInput"];

      function KycVerificationComponent_mat_card_content_1_div_10_div_6_a_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Fetch");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_mat_card_content_1_div_10_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, KycVerificationComponent_mat_card_content_1_div_10_div_6_a_2_Template, 2, 0, "a", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " \xA0\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.radioFlag == "Auto");
        }
      }

      function KycVerificationComponent_mat_card_content_1_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Document Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, KycVerificationComponent_mat_card_content_1_div_10_div_6_Template, 4, 1, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r5.radioFlag == "Auto");
        }
      }

      function KycVerificationComponent_mat_card_content_1_div_11_mat_icon_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "check_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_mat_card_content_1_div_11_mat_icon_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-icon", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "check_circle");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_mat_card_content_1_div_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycVerificationComponent_mat_card_content_1_div_11_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

            return _r10.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "input", 31, 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function KycVerificationComponent_mat_card_content_1_div_11_Template_input_change_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

            var i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r16.onUpload1($event, ctx_r16.kycVerificationForm1.value, i_r4, "frontSide");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Front Side");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, KycVerificationComponent_mat_card_content_1_div_11_mat_icon_8_Template, 2, 0, "mat-icon", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycVerificationComponent_mat_card_content_1_div_11_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

            var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](12);

            return _r12.click();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "input", 35, 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function KycVerificationComponent_mat_card_content_1_div_11_Template_input_change_11_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r15);

            var i_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().index;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r19.onUpload1($event, ctx_r19.kycVerificationForm1.value, i_r4, "backSide");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Back Side");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, KycVerificationComponent_mat_card_content_1_div_11_mat_icon_16_Template, 2, 0, "mat-icon", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r6.disableButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.resultFrontSide);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.frontSideUploaded);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", !ctx_r6.disableButton);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r6.resultBackSide);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.backSideUploaded);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "background-color": a0
        };
      };

      function KycVerificationComponent_mat_card_content_1_mat_button_toggle_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-button-toggle", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycVerificationComponent_mat_card_content_1_mat_button_toggle_13_Template_mat_button_toggle_click_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r23.radioEvent($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r21 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", option_r21.checked)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](4, _c1, ctx_r7.radioFlag === option_r21.name ? "#C0C0C0" : ""))("value", option_r21.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", option_r21.name, " ");
        }
      }

      function KycVerificationComponent_mat_card_content_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card-content", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-form-field", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Document Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("valueChange", function KycVerificationComponent_mat_card_content_1_Template_mat_select_valueChange_7_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r25.changeValue2($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Aadhar card");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, KycVerificationComponent_mat_card_content_1_div_10_Template, 7, 1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, KycVerificationComponent_mat_card_content_1_div_11_Template, 17, 6, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-button-toggle-group", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, KycVerificationComponent_mat_card_content_1_mat_button_toggle_13_Template, 2, 6, "mat-button-toggle", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r4 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.radioFlag == "Auto");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.radioFlag == "Manual");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.array1);
        }
      }

      function KycVerificationComponent_form_4_div_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/images/no-image.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function KycVerificationComponent_form_4_ng_template_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 109);
        }

        if (rf & 2) {
          var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r29.imageURL, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function KycVerificationComponent_form_4_mat_option_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r61 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", i_r61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](i_r61);
        }
      }

      function KycVerificationComponent_form_4_mat_error_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Prefix");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_error_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Enter First Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_error_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Enter Last Name ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_error_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Date Of Birth ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_option_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var status_r62 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", status_r62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", status_r62, " ");
        }
      }

      function KycVerificationComponent_form_4_mat_error_74_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Marital Status ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_option_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var gender_r63 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", gender_r63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](gender_r63);
        }
      }

      function KycVerificationComponent_form_4_mat_error_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Gender ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_option_92_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var nation_r64 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", nation_r64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](nation_r64);
        }
      }

      function KycVerificationComponent_form_4_mat_error_93_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Nationality ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_hint_99_Template(rf, ctx) {
        if (rf & 1) {
          var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycVerificationComponent_form_4_mat_hint_99_Template_mat_hint_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r66);

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r65.getOtp(ctx_r65.kycVerificationForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r42.emailVerify);
        }
      }

      function KycVerificationComponent_form_4_mat_error_100_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Enter Primary Email ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_error_101_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Enter valid email address! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_hint_107_Template(rf, ctx) {
        if (rf & 1) {
          var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-hint", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycVerificationComponent_form_4_mat_hint_107_Template_mat_hint_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r68);

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r67.getOtpMobile(ctx_r67.kycVerificationForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r45.verify);
        }
      }

      function KycVerificationComponent_form_4_mat_error_108_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Enter Mobile Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_error_109_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Mobile number must be 10 digits. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_radio_button_116_Template(rf, ctx) {
        if (rf & 1) {
          var _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-radio-button", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function KycVerificationComponent_form_4_mat_radio_button_116_Template_mat_radio_button_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r72);

            var ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r71.onChange(ctx_r71.kycVerificationForm.controls.permanentAddress, $event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r69 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", option_r69.checked)("value", option_r69.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", option_r69.name, " ");
        }
      }

      function KycVerificationComponent_form_4_mat_error_131_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Enter Address Line 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_error_138_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Enter Address Line 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_option_148_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var Resi_r73 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", Resi_r73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](Resi_r73);
        }
      }

      function KycVerificationComponent_form_4_mat_error_149_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Residence Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_option_158_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r74 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", country_r74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](country_r74);
        }
      }

      function KycVerificationComponent_form_4_mat_error_159_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_option_169_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var state_r75 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", state_r75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](state_r75);
        }
      }

      function KycVerificationComponent_form_4_mat_error_170_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select State");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_option_179_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var city_r76 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", city_r76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](city_r76);
        }
      }

      function KycVerificationComponent_form_4_mat_error_180_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select City");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_mat_error_187_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Please Enter valid Zip Code ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_div_188_mat_error_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Enter Address Line 1");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_div_188_mat_error_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Enter Address Line 2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_div_188_mat_option_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var Resi_r88 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", Resi_r88);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](Resi_r88);
        }
      }

      function KycVerificationComponent_form_4_div_188_mat_error_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Residence Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_div_188_mat_option_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var country_r89 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", country_r89);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](country_r89);
        }
      }

      function KycVerificationComponent_form_4_div_188_mat_error_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Country");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_div_188_mat_option_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var state_r90 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", state_r90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](state_r90);
        }
      }

      function KycVerificationComponent_form_4_div_188_mat_error_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select State");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_div_188_mat_option_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var city_r91 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", city_r91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](city_r91);
        }
      }

      function KycVerificationComponent_form_4_div_188_mat_error_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select City");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycVerificationComponent_form_4_div_188_mat_error_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Enter valid Zip Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      var _c2 = function _c2(a0) {
        return {
          "errbd": a0
        };
      };

      function KycVerificationComponent_form_4_div_188_Template(rf, ctx) {
        if (rf & 1) {
          var _r93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "span", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, " Permanent Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "mat-divider", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Address Line 1*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "mat-card", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, KycVerificationComponent_form_4_div_188_mat_error_13_Template, 2, 0, "mat-error", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Address Line 2*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "mat-card", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, KycVerificationComponent_form_4_div_188_mat_error_20_Template, 2, 0, "mat-error", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Residence Type*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "mat-card", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "mat-select", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, KycVerificationComponent_form_4_div_188_mat_option_30_Template, 2, 2, "mat-option", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, KycVerificationComponent_form_4_div_188_mat_error_31_Template, 2, 0, "mat-error", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Country*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "mat-card", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "mat-select", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function KycVerificationComponent_form_4_div_188_Template_mat_select_selectionChange_37_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r93);

            var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r92.getPerStateName($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](40, KycVerificationComponent_form_4_div_188_mat_option_40_Template, 2, 2, "mat-option", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](41, KycVerificationComponent_form_4_div_188_mat_error_41_Template, 2, 0, "mat-error", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "State*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "mat-card", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "mat-select", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function KycVerificationComponent_form_4_div_188_Template_mat_select_selectionChange_48_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r93);

            var ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

            return ctx_r94.getPerCityName($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](51, KycVerificationComponent_form_4_div_188_mat_option_51_Template, 2, 2, "mat-option", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](52, KycVerificationComponent_form_4_div_188_mat_error_52_Template, 2, 0, "mat-error", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](53, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](56, "City*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-card", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](58, "mat-select", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](60, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](61, KycVerificationComponent_form_4_div_188_mat_option_61_Template, 2, 2, "mat-option", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](62, KycVerificationComponent_form_4_div_188_mat_error_62_Template, 2, 0, "mat-error", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](63, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](64, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](65, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](66, "Zip Code*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "mat-card", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](68, "input", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](69, KycVerificationComponent_form_4_div_188_mat_error_69_Template, 2, 0, "mat-error", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](18, _c2, !ctx_r60.kycVerificationForm.get("permanentAddress.address1").valid && ctx_r60.kycVerificationForm.get("permanentAddress.address1").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r60.kycVerificationForm.get("permanentAddress.address1").valid && ctx_r60.kycVerificationForm.get("permanentAddress.address1").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](20, _c2, !ctx_r60.kycVerificationForm.get("permanentAddress.address2").valid && ctx_r60.kycVerificationForm.get("permanentAddress.address2").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r60.kycVerificationForm.get("permanentAddress.address2").valid && ctx_r60.kycVerificationForm.get("permanentAddress.address2").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](22, _c2, !ctx_r60.kycVerificationForm.get("permanentAddress.residenceType").valid && ctx_r60.kycVerificationForm.get("permanentAddress.residenceType").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r60.Residences);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r60.kycVerificationForm.get("permanentAddress.residenceType").valid && ctx_r60.kycVerificationForm.get("permanentAddress.residenceType").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](24, _c2, !ctx_r60.kycVerificationForm.get("permanentAddress.country").valid && ctx_r60.kycVerificationForm.get("permanentAddress.country").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r60.countrys);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r60.kycVerificationForm.get("permanentAddress.country").valid && ctx_r60.kycVerificationForm.get("permanentAddress.country").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](26, _c2, !ctx_r60.kycVerificationForm.get("permanentAddress.state").valid && ctx_r60.kycVerificationForm.get("permanentAddress.state").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r60.arrayState1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r60.kycVerificationForm.get("permanentAddress.state").valid && ctx_r60.kycVerificationForm.get("permanentAddress.state").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](28, _c2, !ctx_r60.kycVerificationForm.get("permanentAddress.city").valid && ctx_r60.kycVerificationForm.get("permanentAddress.city").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r60.arrayCity1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r60.kycVerificationForm.get("permanentAddress.city").valid && ctx_r60.kycVerificationForm.get("permanentAddress.city").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](30, _c2, !ctx_r60.kycVerificationForm.get("permanentAddress.zipCode").valid && ctx_r60.kycVerificationForm.get("permanentAddress.zipCode").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r60.kycVerificationForm.get("permanentAddress.zipCode").valid && ctx_r60.kycVerificationForm.get("permanentAddress.zipCode").touched);
        }
      }

      function KycVerificationComponent_form_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Basic Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "hr", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("change", function KycVerificationComponent_form_4_Template_input_change_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96);

            var ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r95.onFileChanged($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "mat-icon", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, KycVerificationComponent_form_4_div_11_Template, 2, 1, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, KycVerificationComponent_form_4_ng_template_12_Template, 1, 1, "ng-template", null, 47, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "mat-icon", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycVerificationComponent_form_4_Template_mat_icon_click_15_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96);

            var ctx_r97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r97.deleteProfileImg();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "CIF Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "mat-card", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "input", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "p", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycVerificationComponent_form_4_Template_p_click_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96);

            var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r98.autofillDetails();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Fetch");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, "Prefix*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-card", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-select", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, KycVerificationComponent_form_4_mat_option_36_Template, 2, 2, "mat-option", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, KycVerificationComponent_form_4_mat_error_37_Template, 2, 0, "mat-error", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "First Name*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "mat-card", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function KycVerificationComponent_form_4_Template_input_keypress_42_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96);

            var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r99.letterOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](43, KycVerificationComponent_form_4_mat_error_43_Template, 2, 0, "mat-error", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, "Last Name*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "mat-card", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function KycVerificationComponent_form_4_Template_input_keypress_48_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96);

            var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r100.letterOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](49, KycVerificationComponent_form_4_mat_error_49_Template, 2, 0, "mat-error", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](51, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, "Middle Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "mat-card", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](55, "input", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function KycVerificationComponent_form_4_Template_input_keypress_55_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96);

            var ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r101.letterOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](57, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](58, "Date of Birth*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](59, "mat-card", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](60, "input", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](61, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](62, "mat-datepicker-toggle", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](63, "mat-datepicker", null, 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](65, KycVerificationComponent_form_4_mat_error_65_Template, 2, 0, "mat-error", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](66, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](67, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](68, "Marital Status*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](69, "mat-card", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](70, "mat-select", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](71, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](72, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](73, KycVerificationComponent_form_4_mat_option_73_Template, 2, 2, "mat-option", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](74, KycVerificationComponent_form_4_mat_error_74_Template, 2, 0, "mat-error", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](75, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](76, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](77, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](78, "Gender*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](79, "mat-card", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](80, "mat-select", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](81, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](82, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](83, KycVerificationComponent_form_4_mat_option_83_Template, 2, 2, "mat-option", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](84, KycVerificationComponent_form_4_mat_error_84_Template, 2, 0, "mat-error", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](85, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](86, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](87, "Nationality*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](88, "mat-card", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](89, "mat-select", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](90, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](91, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](92, KycVerificationComponent_form_4_mat_option_92_Template, 2, 2, "mat-option", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](93, KycVerificationComponent_form_4_mat_error_93_Template, 2, 0, "mat-error", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](94, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](95, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](96, "Primary Email*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](97, "mat-card", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](98, "input", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](99, KycVerificationComponent_form_4_mat_hint_99_Template, 2, 1, "mat-hint", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](100, KycVerificationComponent_form_4_mat_error_100_Template, 2, 0, "mat-error", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](101, KycVerificationComponent_form_4_mat_error_101_Template, 2, 0, "mat-error", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](102, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](103, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](104, "Mobile Number*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](105, "mat-card", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](106, "input", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function KycVerificationComponent_form_4_Template_input_keypress_106_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96);

            var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r102._keyPress($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](107, KycVerificationComponent_form_4_mat_hint_107_Template, 2, 1, "mat-hint", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](108, KycVerificationComponent_form_4_mat_error_108_Template, 2, 0, "mat-error", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](109, KycVerificationComponent_form_4_mat_error_109_Template, 2, 0, "mat-error", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](110, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](111, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](112, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](113, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](114, " Is your Permanent Address same as Communication Address? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](115, "mat-radio-group", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](116, KycVerificationComponent_form_4_mat_radio_button_116_Template, 2, 3, "mat-radio-button", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](117, "div", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](118, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](119, "div", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](120, "span", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](121, "Communication Address ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](122, "mat-divider", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](123, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](124, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](125, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](126, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](127, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](128, "Address Line 1*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](129, "mat-card", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](130, "input", 101);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](131, KycVerificationComponent_form_4_mat_error_131_Template, 2, 0, "mat-error", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](132, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](133, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](134, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](135, "Address Line 2*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](136, "mat-card", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](137, "input", 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](138, KycVerificationComponent_form_4_mat_error_138_Template, 2, 0, "mat-error", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](139, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](140, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](141, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](142, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](143, "Residence Type*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](144, "mat-card", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](145, "mat-select", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](146, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](147, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](148, KycVerificationComponent_form_4_mat_option_148_Template, 2, 2, "mat-option", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](149, KycVerificationComponent_form_4_mat_error_149_Template, 2, 0, "mat-error", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](150, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](151, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](152, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](153, "Country*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](154, "mat-card", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](155, "mat-select", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function KycVerificationComponent_form_4_Template_mat_select_selectionChange_155_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96);

            var ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r103.getStateName($event.value);
          })("selectionChange", function KycVerificationComponent_form_4_Template_mat_select_selectionChange_155_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96);

            var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r104.getCityName($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](156, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](157, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](158, KycVerificationComponent_form_4_mat_option_158_Template, 2, 2, "mat-option", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](159, KycVerificationComponent_form_4_mat_error_159_Template, 2, 0, "mat-error", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](160, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](161, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](162, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](163, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](164, "State*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](165, "mat-card", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](166, "mat-select", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("selectionChange", function KycVerificationComponent_form_4_Template_mat_select_selectionChange_166_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r96);

            var ctx_r105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r105.getCityName($event.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](167, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](168, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](169, KycVerificationComponent_form_4_mat_option_169_Template, 2, 2, "mat-option", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](170, KycVerificationComponent_form_4_mat_error_170_Template, 2, 0, "mat-error", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](171, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](172, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](173, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](174, "City*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](175, "mat-card", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](176, "mat-select", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](177, "mat-option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](178, "Select");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](179, KycVerificationComponent_form_4_mat_option_179_Template, 2, 2, "mat-option", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](180, KycVerificationComponent_form_4_mat_error_180_Template, 2, 0, "mat-error", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](181, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](182, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](183, "mat-hint");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](184, "Zip Code*");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](185, "mat-card", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](186, "input", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](187, KycVerificationComponent_form_4_mat_error_187_Template, 2, 0, "mat-error", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](188, KycVerificationComponent_form_4_div_188_Template, 70, 32, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](13);

          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](64);

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx_r1.kycVerificationForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.imageURL == "available")("ngIfElse", _r28);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](52, _c2, !ctx_r1.kycVerificationForm.get("prefix").valid && ctx_r1.kycVerificationForm.get("prefix").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.index);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.kycVerificationForm.get("prefix").valid && ctx_r1.kycVerificationForm.get("prefix").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](54, _c2, !ctx_r1.kycVerificationForm.get("firstName").valid && ctx_r1.kycVerificationForm.get("firstName").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.kycVerificationForm.get("firstName").valid && ctx_r1.kycVerificationForm.get("firstName").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](56, _c2, !ctx_r1.kycVerificationForm.get("lastName").valid && ctx_r1.kycVerificationForm.get("lastName").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.kycVerificationForm.get("lastName").valid && ctx_r1.kycVerificationForm.get("lastName").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](58, _c2, !ctx_r1.kycVerificationForm.get("dateOfBirth").valid && ctx_r1.kycVerificationForm.get("dateOfBirth").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matDatepicker", _r34)("max", ctx_r1.maxDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("for", _r34);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.kycVerificationForm.get("dateOfBirth").valid && ctx_r1.kycVerificationForm.get("dateOfBirth").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](60, _c2, !ctx_r1.kycVerificationForm.get("materialStatus").valid && ctx_r1.kycVerificationForm.get("materialStatus").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.MarritialStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.kycVerificationForm.get("materialStatus").valid && ctx_r1.kycVerificationForm.get("materialStatus").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](62, _c2, !ctx_r1.kycVerificationForm.get("gender").valid && ctx_r1.kycVerificationForm.get("gender").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.genders);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.kycVerificationForm.get("gender").valid && ctx_r1.kycVerificationForm.get("gender").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](64, _c2, !ctx_r1.kycVerificationForm.get("nationality").valid && ctx_r1.kycVerificationForm.get("nationality").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.nationality);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.kycVerificationForm.get("nationality").valid && ctx_r1.kycVerificationForm.get("nationality").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](66, _c2, !ctx_r1.kycVerificationForm.get("primaryEmailAdress").valid && ctx_r1.kycVerificationForm.get("primaryEmailAdress").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.kycVerificationForm.get("primaryEmailAdress").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.kycVerificationForm.get("primaryEmailAdress").hasError("required") && ctx_r1.kycVerificationForm.get("primaryEmailAdress").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.kycVerificationForm.get("primaryEmailAdress").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](68, _c2, !ctx_r1.kycVerificationForm.get("phoneNumber").valid && ctx_r1.kycVerificationForm.get("phoneNumber").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.kycVerificationForm.get("phoneNumber").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.kycVerificationForm.get("phoneNumber").hasError("required") && ctx_r1.kycVerificationForm.get("phoneNumber").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.kycVerificationForm.get("phoneNumber").hasError("pattern"));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.array);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](70, _c2, !ctx_r1.kycVerificationForm.get("communicationAddress.address1").valid && ctx_r1.kycVerificationForm.get("communicationAddress.address1").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.kycVerificationForm.get("communicationAddress.address1").valid && ctx_r1.kycVerificationForm.get("communicationAddress.address1").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](72, _c2, !ctx_r1.kycVerificationForm.get("communicationAddress.address2").valid && ctx_r1.kycVerificationForm.get("communicationAddress.address2").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.kycVerificationForm.get("communicationAddress.address2").valid && ctx_r1.kycVerificationForm.get("communicationAddress.address2").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](74, _c2, !ctx_r1.kycVerificationForm.get("communicationAddress.residenceType").valid && ctx_r1.kycVerificationForm.get("communicationAddress.residenceType").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.Residences);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.kycVerificationForm.get("communicationAddress.residenceType").valid && ctx_r1.kycVerificationForm.get("communicationAddress.residenceType").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](76, _c2, !ctx_r1.kycVerificationForm.get("communicationAddress.country").valid && ctx_r1.kycVerificationForm.get("communicationAddress.country").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.countrys);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.kycVerificationForm.get("communicationAddress.country").valid && ctx_r1.kycVerificationForm.get("communicationAddress.country").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](78, _c2, !ctx_r1.kycVerificationForm.get("communicationAddress.state").valid && ctx_r1.kycVerificationForm.get("communicationAddress.state").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.arrayState);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.kycVerificationForm.get("communicationAddress.state").valid && ctx_r1.kycVerificationForm.get("communicationAddress.state").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](80, _c2, !ctx_r1.kycVerificationForm.get("communicationAddress.city").valid && ctx_r1.kycVerificationForm.get("communicationAddress.city").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.arrayCity);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.kycVerificationForm.get("communicationAddress.city").valid && ctx_r1.kycVerificationForm.get("communicationAddress.city").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](82, _c2, !ctx_r1.kycVerificationForm.get("communicationAddress.zipCode").valid && ctx_r1.kycVerificationForm.get("communicationAddress.zipCode").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r1.kycVerificationForm.get("communicationAddress.zipCode").valid && ctx_r1.kycVerificationForm.get("communicationAddress.zipCode").touched);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.sameAddress == "No");
        }
      }

      var KycVerificationComponent = /*#__PURE__*/function () {
        function KycVerificationComponent(loader, http, api, snack, dialog, router, fb, fingerPrintService, sanitizer, cdr, shareDataService, dialogService, locationStrategy) {
          var _this3 = this;

          _classCallCheck(this, KycVerificationComponent);

          this.loader = loader;
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
          this.maxDate = new Date();
          this.settingallCustInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
          this.imageUrl = "https://i.ibb.co/fDWsn3G/buck.jpg";
          this.editFile = true;
          this.removeUpload = false;
          this.docData = [];
          this.otpmodel = new _kyc_basic_information_kyc_basic_information_component__WEBPACK_IMPORTED_MODULE_8__["OtpModel"]();
          this.billing = true;
          this.basicInfoSavedAlready = false;
          this.isCifValid = false;
          this.radioFlag = "Auto";
          this.isAllSameDigitVal = false;
          this.uplaod = new Upload();
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
            address1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            address2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            city: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            zipCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("[123456789]{1}[0-9]{5}")]],
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
                      nameLineIndex = _i - 1;
                      console.log(dob);
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
                }).join(" ");
                console.log(names);
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
              console.log(error);
              console.error("Unable to parse aadhar");
            }
          };
        }

        _createClass(KycVerificationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this4 = this;

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
              materialStatus: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              nationality: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
              profileImage: [""],
              communicationAddress: this.fb.group({
                addressType: ["Communication", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                address1: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                address2: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                city: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                zipCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("[123456789]{1}[0-9]{5}")]],
                country: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                residenceType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                state: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
              })
            });
            this.imageURL = "not_available"; // this.initGroup();

            console.log('clear'); // this.kycVerificationForm.reset();

            this.getDoc();
            this.kycVerificationForm.get("isAddressSame").patchValue(this.array[0].name);
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
          key: "resetForm",
          value: function resetForm() {
            this.kycVerificationForm.reset();
            this.kycVerificationForm1.reset();
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

            this.entityName = "state";
            console.log("State -- ", country);
            this.api.getDropDownForStateCity(this.entityName, country).subscribe(function (data) {
              _this5.arrayState = data;
              console.log("-->", _this5.arrayState);

              if (address.length > 0) {
                for (var key in address) {
                  if (Object.prototype.hasOwnProperty.call(address, key)) {
                    var element = address[key];

                    for (var state in _this5.arrayState) {
                      if (Object.prototype.hasOwnProperty.call(_this5.arrayState, state)) {
                        var elementState = _this5.arrayState[state];

                        if (elementState.trim() === element.trim()) {
                          console.log('elementState', elementState);

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

            this.entityName = "state";
            console.log("State -- ", country);
            this.api.getDropDownForStateCity(this.entityName, country).subscribe(function (data) {
              _this6.arrayState1 = data;
              console.log("-->", _this6.arrayState);
            });
          }
        }, {
          key: "getCityName",
          value: function getCityName(state, address) {
            var _this7 = this;

            this.entityName = "city";
            console.log(state);
            this.api.getDropDownForStateCity(this.entityName, state).subscribe(function (data) {
              _this7.arrayCity = data;
              console.log("-->", _this7.arrayCity);

              if (address.length > 0) {
                for (var key in address) {
                  if (Object.prototype.hasOwnProperty.call(address, key)) {
                    var element = address[key];

                    for (var City in _this7.arrayCity) {
                      if (Object.prototype.hasOwnProperty.call(_this7.arrayCity, City)) {
                        var elementCity = _this7.arrayCity[City];

                        if (elementCity.trim() === element.trim()) {
                          console.log('elementCity', elementCity);

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

            this.entityName = "city";
            console.log(state);
            this.api.getDropDownForStateCity(this.entityName, state).subscribe(function (data) {
              _this8.arrayCity1 = data;
              console.log("-->", _this8.arrayCity);
            });
          }
        }, {
          key: "getProfileImage",
          value: function getProfileImage(customerId, document_type) {
            var _this9 = this;

            this.api.getCustomerDocuments(customerId, document_type).subscribe(function (data) {
              console.log("data ::", data);

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

            this.imageURL = "not_available";
            var customerId = localStorage.getItem('customerId');
            this.api.deleteCustomerDoc(customerId, this.profileId).subscribe(function (data) {
              _this10.snack.open('Profile Image Deleted Successfully', 'OK', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });
            });
          }
        }, {
          key: "onUpload1",
          value: function onUpload1(event, KycForm, index, side) {
            var _this11 = this;

            var kyc = KycForm.documentsList[index].documentName;
            this.selectedFiles = event.target.files[0];

            if (side === 'backSide') {
              this.fun2(event, this.selectedFiles, kyc, KycForm.documentType, side);
            }

            if (side === 'frontSide') {
              this.fun1(event, this.selectedFiles, kyc, KycForm.documentType, side);
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
                                  console.log("before open");
                                  this.loader.open();
                                  console.log("after open");
                                  _context.next = 5;
                                  return worker.load();

                                case 5:
                                  _context.next = 7;
                                  return worker.loadLanguage('eng');

                                case 7:
                                  _context.next = 9;
                                  return worker.initialize('eng');

                                case 9:
                                  _context.next = 11;
                                  return worker.recognize(img);

                                case 11:
                                  _yield$worker$recogni = _context.sent;
                                  text = _yield$worker$recogni.data.text;
                                  console.log(text);
                                  _context.next = 16;
                                  return worker.terminate();

                                case 16:
                                  this.loader.close();
                                  aadharDetails = this.aadharParser(text);
                                  console.log("this.passportDetails", aadharDetails, aadharDetails.fullName.toLowerCase());

                                  if (side === 'frontSide') {
                                    this.namePancard = aadharDetails.fullName.toLowerCase();
                                    this.dob = aadharDetails.dob;
                                    this.panNumber = aadharDetails.adharNumber;
                                    this.pancard = true;
                                    this.imageOCR = this.url;
                                    this.fileNameFront = this.selectedFiles.name;
                                    split = this.fileNameFront.split('.');
                                    filenameFrontSide = split[0];
                                    extension = split[1];

                                    if (filenameFrontSide.length > 11) {
                                      this.snack.open("File name exceeds 11 characters.Trimming to 11 characters", "OK", {
                                        duration: 4000,
                                        verticalPosition: "top",
                                        horizontalPosition: "right"
                                      });
                                      filenameFrontSide = filenameFrontSide.substring(0, 11);
                                    }

                                    this.filenameFrontSide = filenameFrontSide;
                                    this.resultFrontSide = filenameFrontSide + '.' + extension;
                                    console.log("resultFrontSide", this.resultFrontSide);
                                    this.dataFront = {
                                      customerId: this.refreshCustomerId,
                                      documentName: docName,
                                      documentType: "3",
                                      fileType: event.type,
                                      fileName: this.filenameFrontSide,
                                      verificationType: "KYC verification",
                                      documentSide: '1',
                                      idNumber: this.panNumber
                                    };
                                    console.log(this.dataFront);
                                  }

                                  if (side === 'backSide') {
                                    address = text.split(",");
                                    this.address = address[2] + "," + address[5] + "," + address[6] + "," + address[7];
                                    this.fileNameBack = this.selectedFiles.name;
                                    split = this.fileNameBack.split('.');
                                    filenameBackSide = split[0];
                                    extension = split[1];

                                    if (filenameBackSide.length > 11) {
                                      this.snack.open("File name exceeds 11 characters.Trimming to 11 characters", "OK", {
                                        duration: 4000,
                                        verticalPosition: "top",
                                        horizontalPosition: "right"
                                      });
                                      filenameBackSide = filenameBackSide.substring(0, 11);
                                    }

                                    this.resultBackSide = filenameBackSide + '.' + extension;
                                    this.filenameBackSide = filenameBackSide;
                                    console.log("resultFrontSide", this.resultFrontSide);
                                    this.imageOCRBack = this.urlback;
                                    this.dataBack = {
                                      customerId: this.refreshCustomerId,
                                      documentName: docName,
                                      documentType: "3",
                                      fileType: event.type,
                                      fileName: this.filenameBackSide,
                                      verificationType: "KYC verification",
                                      documentSide: '2',
                                      idNumber: this.panNumber
                                    };
                                  }

                                  console.log("this.namePancard ,this.dob ,this.panNumber ,this.url ", this.namePancard, this.dob, this.panNumber);

                                  if (aadharDetails.adharNumber != null || aadharDetails.adharNumber != undefined) {
                                    this.splitFunction(text, side);
                                  } else {
                                    console.log("wrong addhar to");
                                    this.snack.open("Please Upload Valid Aadhar Card!", "OK", {
                                      duration: 4000,
                                      verticalPosition: "top",
                                      horizontalPosition: "right"
                                    });
                                    this.resultBackSide = null;
                                    this.resultFrontSide = null;
                                  }

                                case 23:
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

            console.log(event); // this.image = event.target.result;

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
            console.log("radio button event");
            this.radioFlag = event.target.value;
          }
        }, {
          key: "splitFunction",
          value: function splitFunction(text, side) {
            var text1 = text.replace(/[^\x00-\x7F]/g, "");
            text.split(":");
            console.log(text.split(":")[2]);
            var address = text.split(",");
            console.log(address);
            console.log(address.length);
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
              }).join(" ");
              console.log(names);

              if (text.includes("Female") || text.includes("female")) {
                this.kycVerificationForm.get("gender").patchValue("Female");
                this.kycVerificationForm.get("prefix").patchValue("Ms");
              } else if (text.includes("Male") || text.includes("male")) {
                this.kycVerificationForm.get("gender").patchValue("Male");
                this.kycVerificationForm.get("prefix").patchValue("Mr");
              }

              this.kycVerificationForm.get("nationality").patchValue("Indian");
              console.log(names);
              var x = names.split(" ");
              console.log(x[0], x[1]);
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
            });
            this.api.getDropDownValues(this.coun).subscribe(function (responseData) {
              _this15.countrys = responseData;
              console.log("this.countrys::", _this15.countrys);
            });
            this.api.getDropDownValues(this.gender).subscribe(function (responseDatas) {
              _this15.genders = responseDatas;
            });
            this.api.getDropDownValues(this.resi).subscribe(function (responses) {
              _this15.Residences = responses;
            });
            this.api.getDropDownValues(this.marr).subscribe(function (respo) {
              _this15.MarritialStatus = respo;
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
          key: "autofillDetails",
          value: function autofillDetails() {
            this.cifNumber = this.kycVerificationForm.controls.cifNumber.value;
            console.log(this.cifNumber);

            if (this.cifNumber) {
              this.getAllCustomerDetails();
            } // this.getAllCustomerDetails();

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
            var _this16 = this;

            this.profilePicture = event.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);

            reader.onload = function (event2) {
              // this.imgUrl = reader.result;
              //this.fun(event.target.files[0], this.profilePicture);
              //  this.image = reader.result;
              _this16.imageURL = reader.result;
              console.log("file ", reader);
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
            this.api.upload(uploadData).subscribe(function (res) {
              console.log(res);
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
            var _this17 = this;

            // console.log(this.dataBack)
            // console.log(this.urlB)
            this.api.setOCR({
              namePancard: this.namePancard,
              dob: this.dob,
              panNumber: this.panNumber,
              imageOCR: this.url,
              imageOCRBack: this.urlback,
              address: this.address
            });
            console.log("Next button");
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
              materialStatus: this.kycVerificationForm.value.materialStatus,
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
              _this17.id = resp.cifNumber;
              console.log(resp.firstName, '', resp.lastName);
              _this17.name = resp.firstName + ' ' + resp.lastName;
              console.log(_this17.name);

              _this17.api.setName({
                name: _this17.name
              });

              _this17.snack.open("Data Saved!", "OK", {
                duration: 4000,
                verticalPosition: "top",
                horizontalPosition: "right"
              });

              _this17.basicInfoSavedAlready = true; // this.kycVerificationForm.reset();
              // 

              sessionStorage.setItem('customer_id', resp.customerId);
              localStorage.setItem('customer_id', resp.customerId);
              sessionStorage.setItem('kyc_reference', resp.kycReference);

              _this17.kycRef(resp.kycReference);

              console.log("resp.customerId::", resp.customerId);
              console.log("(this.profilePicture::", _this17.profilePicture);

              if (_this17.profilePicture) {
                // console.log(this.profilePicture)
                var profileUpload = {};
                profileUpload.documentName = "Profile";
                profileUpload.documentType = 1;
                profileUpload.fileType = _this17.profilePicture.type;
                profileUpload.fileName = _this17.profilePicture.name;
                profileUpload.customerId = resp.customerId;
                console.log(profileUpload);
                var uploadData = new FormData();
                uploadData.append('data', JSON.stringify(profileUpload));
                uploadData.append('file', _this17.profilePicture);

                _this17.api.uploadDocument(uploadData).subscribe(function (response) {
                  console.log(response);

                  _this17.next();
                }, function (err) {
                  console.log("error", err);
                });
              }

              if (_this17.dataFront != undefined) {
                _this17.uploadFrontSide(_this17.id);
              }

              if (_this17.dataBack != undefined) {
                _this17.uploadBackSide(_this17.id);
              }

              _this17.next();
            });
          }
        }, {
          key: "uploadBackSide",
          value: function uploadBackSide(id) {
            var _this18 = this;

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
                  _this18.snack.open("Document Uploaded!", "OK", {
                    duration: 4000,
                    verticalPosition: "top",
                    horizontalPosition: "right"
                  });
                }
              }, function (error) {
                if (error.status == 201) {
                  console.log("in err");
                  _this18.backSideUploaded = true;
                }

                _this18.kycVerificationForm1.get("upload").patchValue(true);

                _this18.snack.open("Document Uploaded!", "OK", {
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
            var _this19 = this;

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
                  _this19.snack.open("Document Uploaded!", "OK", {
                    duration: 4000,
                    verticalPosition: "top",
                    horizontalPosition: "right"
                  });
                }
              }, function (error) {
                if (error.status == 201) {
                  console.log("in err");
                  _this19.frontSideUploaded = true;
                }

                _this19.kycVerificationForm1.get("upload").patchValue(true);

                _this19.snack.open("Document Uploaded!", "OK", {
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
            this.shareDataService.shareCustomerId(customerId);
          }
        }, {
          key: "getAllCustomerDetails",
          value: function getAllCustomerDetails() {
            var _this20 = this;

            this.image = "", this.imgUrl = "";
            console.log("CIF---------", event); // let cifNumber = this.kycVerificationForm.value.cifNumber;
            // console.log("CIF",cifNumber);

            this.api.gettingCustomerDetails(this.cifNumber).subscribe(function (resp) {
              console.log("All Customer Details", resp);

              _this20.api.sendKycDataFetchedInfo('DATA FETCH');

              if (resp != null || resp != undefined) {
                _this20.customerInformation = resp.customerInfoList[0];

                if (resp.customerInfoList[0].middleName === undefined || resp.customerInfoList[0].middleName === null) {
                  resp.customerInfoList[0].middleName = null;
                }

                resp.customerInfoList[0].dateOfBirth = new Date(resp.customerInfoList[0].dateOfBirth);
                console.log(resp.customerInfoList[0].customerId);
                localStorage.setItem("customerId", resp.customerInfoList[0].customerId); // this.api.getImage(resp.customerInfoList[0].customerId).subscribe((data: any) => {
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

                _this20.getProfileImage(resp.customerInfoList[0].customerId, 1);
              } else {
                _this20.snack.open('Invalid CIF Number', 'OK', {
                  duration: 4000,
                  verticalPosition: 'top',
                  horizontalPosition: 'right'
                }); // this.accountForm.get('cifNumber').patchValue("");


                return;
              }

              _this20.verificationInfo = resp;

              if (resp.customerInfoList[0].custStatus == "REJECTED") {
                _this20.snack.open("Data is rejected for this CIF Number :" + _this20.cifNumber, "", {
                  duration: 4000,
                  verticalPosition: 'top',
                  horizontalPosition: 'right'
                });

                _this20.kycVerificationForm.reset();

                _this20.ngOnInit();

                console.log("err:", resp);
                return;
              }

              if (resp == null) {
                _this20.snack.open("Data is not found for CIF Number :" + _this20.cifNumber, "", {
                  duration: 4000,
                  verticalPosition: 'top',
                  horizontalPosition: 'right'
                });

                _this20.kycVerificationForm.reset();

                _this20.ngOnInit();

                console.log("err:", resp);
                return;
              }

              if (resp && resp[0]) {
                console.log("All Customer Details", resp.customerInfoList[0].customerId);
                sessionStorage.setItem('customer_id', resp[0].customerId);
              }

              _this20.setCustVerificationValues(resp);
            }, function (err) {});
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
          value: function isAllSameDigit(event) {
            var count = 0,
                number = event.target.value;
            console.log('event zipcode :: ', event.target.value);

            for (var i = 0; i < number.length; i++) {
              if (0 != number[i]) {
                count++;
              }
            }

            if (count == number.length) {
              this.isAllSameDigitVal = true;
            } else {
              this.isAllSameDigitVal = false;
            }
          }
        }]);

        return KycVerificationComponent;
      }();

      KycVerificationComponent.ɵfac = function KycVerificationComponent_Factory(t) {
        return new (t || KycVerificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_app_loader_app_loader_service__WEBPACK_IMPORTED_MODULE_15__["AppLoaderService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_11__["FingerPrintCaptureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_data_service__WEBPACK_IMPORTED_MODULE_14__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_16__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"]));
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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.el = _t.first);
          }
        },
        outputs: {
          settingallCustInfo: "settingallCustInfo"
        },
        decls: 13,
        vars: 4,
        consts: [[3, "formGroup"], ["formArrayName", "documentsList", 4, "ngFor", "ngForOf"], [1, "m-333"], [1, "marginTopKyc"], [3, "formGroup", 4, "ngIf"], [1, "button1"], ["mat-button", "", 1, "Back", 3, "click"], ["id", "kychide", 1, "hide", 3, "click"], ["kychide", ""], ["mat-stroked-button", "", "id", "n", 1, "Next", 3, "disabled", "click"], ["formArrayName", "documentsList"], ["fxLayout", "row", "fxLayoutGap", "25px", 1, "aadharForm", 3, "formGroupName"], ["fxFlex", "15%", "fxFlex.xs", "100%", 1, "mainAadhar"], [1, "aadharDoc"], ["id", "check"], ["formControlName", "documentName", 3, "valueChange"], ["value", "Aadhar card"], ["fxFlex", "25%", "fxFlex.xs", "100%", 4, "ngIf"], ["class", "aadharUpload", 4, "ngIf"], [1, "toggleGroup1"], ["color", "primary", "class", "toggleGroup", 3, "checked", "ngStyle", "value", "click", 4, "ngFor", "ngForOf"], ["fxFlex", "25%", "fxFlex.xs", "100%"], [1, "pb-1"], ["matInput", "", "name", "Document Number", "placeholder", "Document Number"], ["fxFlex", "8%", "fxFlex.xs", "100%", "class", "aadharDocNum", 4, "ngIf"], ["fxFlex", "8%", "fxFlex.xs", "100%", 1, "aadharDocNum"], ["fxLayout", "row", "fxLayoutAlign", "start center", 1, "aadharFetchDiv"], ["class", "aadharFetch", 3, "routerLink", 4, "ngIf"], [1, "aadharFetch", 3, "routerLink"], [1, "aadharUpload"], ["mat-raised-button", "", 3, "disabled", "click"], ["type", "file", "name", "fileData1", "formControlName", "fileData1", 1, "aadharInput", 3, "change"], ["fileData1", ""], [1, "aadharInput1"], ["class", "aadharCheck", 4, "ngIf"], ["type", "file", "name", "fileData2", "formControlName", "fileData2", 1, "aadharInput", 3, "change"], ["fileData2", ""], [1, "aadharCheck"], ["color", "primary", 1, "toggleGroup", 3, "checked", "ngStyle", "value", "click"], [1, "verificationHead"], [1, "line"], [1, "formSectionContainer"], [1, "formLeft"], ["mat-icon-button", "", 2, "float", "right", "padding-top", "8px", "padding-left", "30px", "cursor", "pointer"], ["type", "file", "input", "", "type", "file", "accept", "image/png, image/gif, image/jpg, image/jpeg", 1, "changeInput", 3, "change"], ["color", "primary"], [4, "ngIf", "ngIfElse"], ["showAvatar", ""], [2, "color", "red", "padding-left", "94%", "cursor", "pointer", 3, "click"], ["id", "formfetch", 1, "form"], ["id", "fech", 1, "flex-grow-1"], ["fxLayout", "row", "fxLayoutAlign", "start center"], ["type", "input", 1, "widthCard", "inputMatcard"], ["matInput", "", "formControlName", "cifNumber", "type", "number", "min", "0", "oninput", "validity.valid||(value='');", "name", "cifNumber", "value", "cifNumber", 1, "alignment"], [1, "fechButtonDiv"], [1, "fetchButton", 3, "click"], [1, "flex-grow-2"], [1, "widthCard", "inputMatcard", 3, "ngClass"], ["formControlName", "prefix"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "flex-grow-1"], [1, "inputMatName", 3, "ngClass"], ["matInput", "", "formControlName", "firstName", "type", "text", "name", "lastName", "value", "updateUserInfo.firstName", 1, "alignment", 3, "keypress"], [1, "inputMatLastName", 3, "ngClass"], ["matInput", "", "formControlName", "lastName", "type", "text", "name", "lastName", "value", "updateUserInfo.lastName", 1, "alignment", 3, "keypress"], [1, "form"], [1, "inputMatNew"], ["matInput", "", "formControlName", "middleName", "type", "text", "name", "middleName", 1, "alignment", 3, "keypress"], [1, "inputMatLastName", 2, "height", "48px", 3, "ngClass"], ["matInput", "", "formControlName", "dateOfBirth", "id", "dob", "name", "dateOfBirth", "readonly", "", "value", "dateOfBirth", 1, "alignment", 3, "matDatepicker", "max"], ["fxFlex", "8%", "id", "toggle"], ["matSuffix", "", 3, "for"], ["picker", ""], [1, "inputMatcardMarritial", 3, "ngClass"], ["formControlName", "materialStatus"], [1, "inputGender", 3, "ngClass"], ["formControlName", "gender"], ["class", "help-block", 4, "ngIf"], ["formControlName", "nationality"], [1, "inputMatcardMail", 3, "ngClass"], ["matInput", "", "formControlName", "primaryEmailAdress", "type", "text", "name", "primaryEmailAdress"], ["class", "verification", 3, "click", 4, "ngIf"], [1, "inputMatcard", 3, "ngClass"], ["matInput", "", "name", "phoneNumber", "maxLength", "10", "formControlName", "phoneNumber", "required", "", 3, "keypress"], ["fxLayout", "row"], ["fxFlex", "100"], ["id", "bill"], [1, "billName"], ["formControlName", "isAddressSame"], ["class", "ml-8", "color", "primary", 3, "checked", "value", "change", 4, "ngFor", "ngForOf"], ["fxLayoutGap", "10px", "fxLayout", "row wrap", 1, "mt-32", "communicationForm"], ["fxFlex", "", "id", "communicationBlockForm", 1, "addressGrid"], [1, "spanDiv"], [1, "span"], [1, "divider"], ["formGroupName", "communicationAddress"], ["fxLayout", "row", "fxLayoutGap", "10px", "fxLayoutAlign", "space-between center"], ["fxFlex", "50%"], [1, "address-card", "inputMatcard3", 3, "ngClass"], ["matInput", "", "formControlName", "address1", "type", "text", "name", "address1"], ["matInput", "", "formControlName", "address2", "type", "text", "name", "address2"], ["formControlName", "residenceType"], ["formControlName", "country", 3, "selectionChange"], ["name", "state", "formControlName", "state", 3, "selectionChange"], ["name", "city", "formControlName", "city"], ["matInput", "", "formControlName", "zipCode", "onlyNumber", "", "type", "text", "matInput", "", "maxlength", "06", "name", "zipCode"], ["fxFlex", "", "class", "addressGrid", "id", "communicationBlockForm", 4, "ngIf"], ["alt", "", 1, "formImg", 3, "src"], [3, "value"], [1, "help-block"], [1, "verification", 3, "click"], ["color", "primary", 1, "ml-8", 3, "checked", "value", "change"], ["formGroupName", "permanentAddress"], ["fxFlex", "50"]],
        template: function KycVerificationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, KycVerificationComponent_mat_card_content_1_Template, 14, 4, "mat-card-content", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "mat-card", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, KycVerificationComponent_form_4_Template, 189, 84, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "button", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycVerificationComponent_Template_button_click_6_listener() {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.kycVerificationForm1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.kycVerificationForm1.get("documentsList")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.kycVerificationForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.kycVerificationForm.invalid);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCard"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_19__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_18__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArrayName"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutGapDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupName"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_22__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_23__["MatOption"], _angular_material_input__WEBPACK_IMPORTED_MODULE_24__["MatInput"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_20__["DefaultLayoutAlignDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_25__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_26__["DefaultStyleDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatHint"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NumberValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_26__["DefaultClassDirective"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerInput"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepickerToggle"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatSuffix"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_27__["MatDatepicker"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__["MatRadioGroup"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_29__["MatDivider"], _shared_directives_only_number_directive__WEBPACK_IMPORTED_MODULE_30__["OnlyNumberDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["MaxLengthValidator"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatError"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_28__["MatRadioButton"]],
        styles: [".breadcrumb[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 40px;\n  width: 100%;\n  background-color: white;\n}\n\n.head[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.fetchButton[_ngcontent-%COMP%] {\n  color: #456EFE;\n  font-family: 'Montserrat';\n  font-size: 12px;\n  text-decoration: underline;\n  padding-left: 10px;\n  padding-top: 15px;\n  cursor: pointer;\n  margin-right: 40px;\n}\n\nmat-hint[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.app-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.margin[_ngcontent-%COMP%] {\n  margin-left: -10%;\n}\n\n#fech[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.fechButtonDiv[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n#formfetch[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 25% 25% 25% 25%;\n}\n\n.basic-container[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.grid[_ngcontent-%COMP%] {\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(2, minmax(50%, 1fr));\n}\n\n.main-head[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  padding-top: 16px;\n  padding-bottom: 0px;\n}\n\nmat-tab-group[_ngcontent-%COMP%] {\n  padding-left: 2%;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  height: 60vh;\n  border: 1px solid black;\n  padding: 10px 5px;\n  box-sizing: border-box;\n}\n\n.flex-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  box-sizing: border-box;\n}\n\n.flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2), .flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  margin-top: 5px;\n}\n\n.flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  flex: 1;\n}\n\n.formField1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 50px;\n}\n\n.formField[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 120px;\n}\n\n.formField2[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 100%;\n}\n\n.inputMatcard[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputGender[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatName[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatNew[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatLastName[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardDoc[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardMail[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardMailAdd[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardMarritial[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardPrefix[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcard3[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardAdd[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcard4[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  max-width: 208px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcard1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 12px;\n}\n\n.inputMatcard2[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  width: 20px;\n}\n\n.mat-form-field-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 0px;\n}\n\n.inputClass[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n  box-shadow: 0 3pt 6pt #00000029;\n  font-weight: bolder;\n}\n\n[_nghost-%COMP%]     div.mat-form-field-outline-start {\n  border-color: 0 !important;\n  border-width: 0px !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field-outline-gap {\n  border-color: 0 !important;\n  border-width: 0px !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field-outline-end {\n  border-color: 0 !important;\n  border-width: 0px !important;\n}\n\n#check[_ngcontent-%COMP%] {\n  -webkit-appearance: outline;\n     -moz-appearance: outline;\n          appearance: outline;\n  width: 150px;\n}\n\n.aadharDocNum[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n.aadharFetchDiv[_ngcontent-%COMP%] {\n  font-size: 20px;\n  padding-left: 10px;\n}\n\n.mainAadhar[_ngcontent-%COMP%] {\n  margin-top: 1%;\n}\n\n.aadharInput[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.marginTopKyc[_ngcontent-%COMP%] {\n  margin-top: -1.2%;\n}\n\n.aadharInput1[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: 3%;\n  text-align: center;\n}\n\n.toggleGroup1[_ngcontent-%COMP%] {\n  font-size: 10px;\n  height: 40px;\n  margin-top: 4%;\n  cursor: pointer;\n}\n\n.aadharForm[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.toggleGroup[_ngcontent-%COMP%] {\n  padding: 10px 30px 10px 25px;\n  border: 1px solid lightgrey;\n  margin-top: 1%;\n}\n\n.toggleGroup1[_ngcontent-%COMP%] {\n  margin-top: 2%;\n}\n\n#dateOf[_ngcontent-%COMP%] {\n  height: 48px;\n}\n\n.aadharCheck[_ngcontent-%COMP%] {\n  color: green;\n  margin-left: -8%;\n  margin-top: 5%;\n}\n\n.aadharUpload[_ngcontent-%COMP%] {\n  height: 40px;\n  display: flex;\n  gap: 20px;\n}\n\n.aadharDoc[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-top: -0.5%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.form13[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.form1[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 50px;\n  flex-wrap: wrap;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -9%;\n  width: 150px;\n  color: white;\n  background-color: gray;\n  border-radius: 45px;\n}\n\n.matCard[_ngcontent-%COMP%] {\n  max-width: 1600px;\n  align-items: center;\n  justify-content: center;\n  margin-left: 15%;\n  margin-right: 15%;\n  margin-top: 10px;\n  margin: 10px auto 0 auto;\n  margin-bottom: 3%;\n}\n\n.changeInput[_ngcontent-%COMP%] {\n  opacity: 0.0;\n  position: absolute;\n  top: 0;\n  left: 15px;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\n.changeDiv[_ngcontent-%COMP%] {\n  position: relative;\n  height: 30px;\n  line-height: 30px;\n}\n\n.mat-form-field-flex[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n}\n\n.flex-grow-1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  gap: 10px;\n}\n\n.flex-grow-2[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  gap: 10px;\n  margin-left: -10%;\n}\n\n.alignment[_ngcontent-%COMP%] {\n  border-style: none !important;\n  outline: none;\n}\n\n#dob[_ngcontent-%COMP%] {\n  width: 92% !important;\n  float: right;\n}\n\n#toggle[_ngcontent-%COMP%] {\n  margin-top: -2%;\n}\n\n#max-width[_ngcontent-%COMP%] {\n  max-width: 150px;\n}\n\n#drop-max-width[_ngcontent-%COMP%] {\n  width: 190px;\n}\n\n#radio[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\nradioGroup[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n#nationality[_ngcontent-%COMP%] {\n  width: 210px;\n}\n\nmat-label[_ngcontent-%COMP%] {\n  margin-right: 6%;\n}\n\n.change[_ngcontent-%COMP%] {\n  color: #2680EB;\n  text-align: center;\n  text-decoration: underline;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -13%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\n.button1[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 11%;\n  padding-right: 14%;\n}\n\n.Next1[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.line[_ngcontent-%COMP%] {\n  border: thick;\n  \n  \n  border-style: solid;\n  \n  border-block-width: unset;\n  color: blue;\n  color: #6988f6;\n  width: 40px;\n  border-radius: 5px;\n  margin: initial;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 80%;\n  color: #374664;\n  font-weight: 600;\n}\n\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus {\n  background: red;\n}\n\n.mat-tab-label-active[_ngcontent-%COMP%] {\n  color: green;\n}\n\n  .mat-tab-label-active {\n  color: #6988f6 !important;\n}\n\n.verification[_ngcontent-%COMP%] {\n  float: right;\n  color: #2a59e7;\n}\n\n  .mat-tab-group.mat-primary .mat-ink-bar {\n  background-color: #6988f6 !important;\n  height: 4px;\n}\n\nmat-tab-label[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.line[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.text[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nfigure[_ngcontent-%COMP%] {\n  display: block;\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  font-size: 25px;\n  text-align: center;\n  margin-right: 10px;\n  background: #fff;\n  line-height: 1.7em;\n}\n\nfigure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 30px;\n  height: auto;\n}\n\n.formSectionContainer[_ngcontent-%COMP%] {\n  gap: 40px;\n  display: grid;\n  grid-template-columns: 200px auto;\n}\n\n@media (max-width: 768px) {\n  .formSectionContainer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n\n.formImg[_ngcontent-%COMP%] {\n  height: 200px !important;\n  width: 200px !important;\n  background-color: whitesmoke;\n  border-radius: 10%;\n}\n\n.dropDown[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: #4286f4 !important;\n}\n\n.mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%] {\n  color: #4286f4;\n  background-color: #4286f4;\n}\n\n.Upload[_ngcontent-%COMP%] {\n  vertical-align: c;\n  align-self: center;\n  margin-top: 20px;\n  font-size: 12px;\n  text-decoration: underline;\n  color: #2680EB;\n}\n\n#row[_ngcontent-%COMP%] {\n  font-size: 9px;\n  opacity: 100%;\n  color: #2680EB;\n}\n\n.span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  width: 30% !important;\n}\n\n.span8[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  width: 60% !important;\n}\n\n.span12[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  width: 10% !important;\n}\n\n.spanDiv[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 1%;\n  margin-top: 2%;\n}\n\n#bill[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-right: 10px;\n  margin-top: 10px;\n  margin-bottom: -25px;\n}\n\n.billName[_ngcontent-%COMP%] {\n  display: inline;\n  margin-right: 20px;\n}\n\n.margin[_ngcontent-%COMP%] {\n  margin-right: 0px;\n}\n\n.divider[_ngcontent-%COMP%] {\n  position: unset !important;\n  left: 200px !important;\n  align-self: center !important;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n\n.flex-basis-50[_ngcontent-%COMP%] {\n  flex-basis: 50%;\n}\n\n.gap-20[_ngcontent-%COMP%] {\n  gap: 10px;\n}\n\n.addressContainer[_ngcontent-%COMP%] {\n  padding: 0 20px 0 0 !important;\n}\n\n.address-card[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.inline-block[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.space-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n@media (min-width: 576px) {\n  .addressGrid[_ngcontent-%COMP%] {\n    gap: 20px;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n.addressGridInner[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n\n.flex-grow-1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n.gap-20[_ngcontent-%COMP%] {\n  gap: 20px;\n}\n\n.flex-column[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n\n.height-auto[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.align-self-flex-end[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n\n.align-self-flex-start[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n\n.width-fit-content[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.m-8[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n\n.block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n#addressBlock[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n\n#communicationDivider[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n}\n\n.communicationForm[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n\n#communicationBlockForm[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  border: 1px solid lightgrey;\n  padding: 20px;\n}\n\n#DocumentForm[_ngcontent-%COMP%] {\n  width: 650px;\n  border: 1px solid lightgrey;\n  padding: 10px;\n}\n\n#DocumentForm1[_ngcontent-%COMP%] {\n  width: 650px;\n  border: 1px solid lightgrey;\n  padding: 10px;\n  padding-bottom: 50px;\n}\n\n#docMainDivider[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n\n#dividerInside[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n}\n\n.errbd[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n\n.hide[_ngcontent-%COMP%] {\n  color: white;\n  display: none;\n}\n\ninput[type=\"number\"][_ngcontent-%COMP%]::-webkit-inner-spin-button, input[type=\"number\"][_ngcontent-%COMP%]::-webkit-outer-spin-button {\n  -webkit-appearance: none;\n  margin: 0;\n}\n\n#check[_ngcontent-%COMP%] {\n  -webkit-appearance: outline;\n     -moz-appearance: outline;\n          appearance: outline;\n}\n\n.aadharDocNum[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n.aadharFetch[_ngcontent-%COMP%] {\n  text-decoration: underline;\n  color: #456EFE;\n  font-size: small;\n  align-self: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxca3ljLXZlcmlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsV0FBVztFQUNYLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFJQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7QUFEcEI7O0FBSUE7RUFDRSxlQUFlO0FBRGpCOztBQUlBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFEYjs7QUFPQTtFQUNFLGlCQUFpQjtBQUpuQjs7QUFNQTtFQUNBLGFBQWE7QUFIYjs7QUFLQTtFQUNFLGtCQUFrQjtBQUZwQjs7QUFJQTtFQUVFLGFBQWE7RUFDYixzQ0FBc0M7QUFGeEM7O0FBS0E7RUFDRSxZQUFZO0FBRmQ7O0FBS0E7RUFDRSxhQUFhO0FBRmY7O0FBS0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGtEQUFrRDtBQUZwRDs7QUFLQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsbUJBQW1CO0FBRnJCOztBQUtBO0VBQ0UsZ0JBQWdCO0FBRmxCOztBQUtBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsWUFBWTtFQUNaLHVCQUF1QjtFQUN2QixpQkFBaUI7RUFDakIsc0JBQXNCO0FBRnhCOztBQUtBO0VBRUUsYUFBYTtFQUNiLHNCQUFzQjtBQUh4Qjs7QUFNQTs7RUFFRSxlQUFlO0FBSGpCOztBQU1BO0VBQ0UsT0FBTztBQUhUOztBQVNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFOYjs7QUFTQTtFQUVFLFlBQVk7RUFDWixZQUFZO0FBUGQ7O0FBY0E7RUFFRSxZQUFZO0VBQ1osV0FBVztBQVpiOztBQWtCQTtFQUNFLFlBQVk7RUFFWixlQUFlO0VBQ2YscUZBQzZCO0VBQzdCLCtCQUErQjtFQUUvQixzQkFBc0I7RUFHdEIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFwQmY7O0FBeUJBO0VBQ0UsWUFBWTtFQUVaLGVBQWU7RUFDZixxRkFDNkI7RUFDN0IsK0JBQStCO0VBRS9CLHNCQUFzQjtFQUd0QixnQkFBZ0I7RUFDaEIsYUFBYTtBQTNCZjs7QUFnQ0E7RUFDRSxZQUFZO0VBRVosZUFBZTtFQUNmLHFGQUM2QjtFQUM3QiwrQkFBK0I7RUFFL0Isc0JBQXNCO0VBR3RCLGdCQUFnQjtFQUNoQixhQUFhO0FBbENmOztBQXVDQTtFQUNFLFlBQVk7RUFFWixlQUFlO0VBQ2YscUZBQzZCO0VBQzdCLCtCQUErQjtFQUUvQixzQkFBc0I7RUFHdEIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUF6Q2Y7O0FBOENBO0VBQ0UsWUFBWTtFQUVaLGVBQWU7RUFDZixxRkFDNkI7RUFDN0IsK0JBQStCO0VBRS9CLHNCQUFzQjtFQUd0QixnQkFBZ0I7RUFDaEIsYUFBYTtBQWhEZjs7QUFzREE7RUFDRSxZQUFZO0VBRVosZUFBZTtFQUNmLHFGQUM2QjtFQUM3QiwrQkFBK0I7RUFFL0Isc0JBQXNCO0VBR3RCLGdCQUFnQjtFQUNoQixhQUFhO0FBeERmOztBQTZEQTtFQUNFLFlBQVk7RUFFWixlQUFlO0VBQ2YscUZBQzZCO0VBQzdCLCtCQUErQjtFQUUvQixzQkFBc0I7RUFHdEIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUEvRGY7O0FBb0VBO0VBQ0UsWUFBWTtFQUVaLGVBQWU7RUFDZixxRkFDNkI7RUFDN0IsK0JBQStCO0VBRS9CLHNCQUFzQjtFQUd0QixnQkFBZ0I7RUFDaEIsYUFBYTtBQXRFZjs7QUEyRUE7RUFDRSxZQUFZO0VBRVosZUFBZTtFQUNmLHFGQUM2QjtFQUM3QiwrQkFBK0I7RUFFL0Isc0JBQXNCO0VBR3RCLGdCQUFnQjtFQUNoQixhQUFhO0FBN0VmOztBQWtGQTtFQUNFLFlBQVk7RUFFWixlQUFlO0VBQ2YscUZBQzZCO0VBQzdCLCtCQUErQjtFQUUvQixzQkFBc0I7RUFHdEIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFwRmY7O0FBeUZBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFFZixxRkFDNkI7RUFDN0IsK0JBQStCO0VBRS9CLHNCQUFzQjtFQUd0QixnQkFBZ0I7RUFDaEIsYUFBYTtBQTNGZjs7QUFnR0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUVmLHFGQUM2QjtFQUM3QiwrQkFBK0I7RUFFL0Isc0JBQXNCO0VBR3RCLGdCQUFnQjtFQUNoQixhQUFhO0FBbEdmOztBQXVHQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFGQUM2QjtFQUM3QiwrQkFBK0I7RUFFL0Isc0JBQXNCO0VBR3RCLGdCQUFnQjtFQUNoQixhQUFhO0FBeEdmOztBQWdIQTtFQUNFLFlBQVk7RUFFWixxRkFDNkI7RUFDN0IsK0JBQStCO0VBRS9CLHNCQUFzQjtFQUd0QixnQkFBZ0I7RUFDaEIsYUFBYTtBQWxIZjs7QUF3SEE7RUFDRSxZQUFZO0VBRVoscUZBQzZCO0VBQzdCLCtCQUErQjtFQUUvQixzQkFBc0I7RUFHdEIsZ0JBQWdCO0VBSWhCLFdBQVc7QUE3SGI7O0FBZ0lBO0VBQ0UsbUJBQW1CO0FBN0hyQjs7QUFnSUE7RUFDRSxxRkFDNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLCtCQUErQjtFQUMvQixtQkFBbUI7QUE5SHJCOztBQWlJQTtFQUNFLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUE5SDlCOztBQWlJQTtFQUNFLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUE5SDlCOztBQWlJQTtFQUNFLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUE5SDlCOztBQWdJQTtFQUNFLDJCQUFtQjtLQUFuQix3QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLFlBQVk7QUE3SGQ7O0FBK0hBO0VBQ0Usa0JBQWtCO0FBNUhwQjs7QUE4SEE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBM0hwQjs7QUE2SEE7RUFDRSxjQUFhO0FBMUhmOztBQTZIQTtFQUNFLGFBQWE7QUExSGY7O0FBZ0lBO0VBQ0csaUJBQWlCO0FBN0hwQjs7QUErSEE7RUFDQSxlQUFlO0VBQ1gsY0FBYztFQUVkLGtCQUFrQjtBQTdIdEI7O0FBK0hBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixjQUFjO0VBQ2QsZUFBZTtBQTVIakI7O0FBOEhBO0VBQ0UsOEJBQThCO0FBM0hoQzs7QUErSEE7RUFDRSw0QkFBNEI7RUFDNUIsMkJBQTJCO0VBSzVCLGNBQWM7QUFoSWY7O0FBbUlBO0VBT0MsY0FBYztBQXRJZjs7QUF3SUE7RUFDRSxZQUFZO0FBcklkOztBQXVJQTtFQUNFLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsY0FBYztBQXBJaEI7O0FBc0lBO0VBQ0UsWUFBVztFQUNYLGFBQWE7RUFDYixTQUFTO0FBbklYOztBQXNJQTtFQUNFLGtCQUFrQjtBQW5JcEI7O0FBc0lBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7RUFHYixlQUFlO0VBQ2YsOEJBQThCO0FBckloQzs7QUF3SUE7RUFDRSxhQUFhO0VBR2IsZUFBZTtBQXZJakI7O0FBMklBO0VBQ0UsYUFBYTtFQUViLFNBQVM7RUFDVCxlQUFlO0FBeklqQjs7QUE4SUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxlQUFlO0VBQ2YsOEJBQThCO0FBM0loQzs7QUFnSkE7RUFFRSx5QkFBd0I7RUFDeEIsZ0JBQWU7RUFDZixZQUFXO0VBQ1gsWUFBVztFQUNYLHNCQUFzQjtFQUN0QixtQkFBbUI7QUE5SXJCOztBQWdKQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixpQkFBaUI7QUE3SW5COztBQWdKQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFVBQVU7RUFDVixTQUFTO0VBQ1QsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0FBN0lwQjs7QUFnSkE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtBQTdJbkI7O0FBZ0pBO0VBRUUscUZBQzZCO0VBQzdCLCtCQUErQjtBQS9JakM7O0FBa0pBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7QUEvSVg7O0FBbUpBO0VBQ0UsWUFBWTtFQUNaLFNBQVM7RUFDVCxpQkFBaUI7QUFoSm5COztBQW1KQTtFQUNFLDZCQUE2QjtFQUM3QixhQUFhO0FBaEpmOztBQW1KQTtFQUNFLHFCQUFvQjtFQUNwQixZQUFZO0FBaEpkOztBQW1KQTtFQUVFLGVBQWM7QUFqSmhCOztBQW1KQTtFQUNFLGdCQUNGO0FBakpBOztBQW1KQTtFQUNFLFlBQVk7QUFoSmQ7O0FBbUpBO0VBQ0Usa0JBQWtCO0FBaEpwQjs7QUFtSkE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBaEpyQjs7QUFtSkE7RUFDRSxZQUFZO0FBaEpkOztBQW1KQTtFQUNFLGdCQUFnQjtBQWhKbEI7O0FBbUpBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFoSjVCOztBQW9KQTtFQUNFLHlCQUF3QjtFQUN0QixrQkFBaUI7RUFDakIsWUFBVztFQUNYLHlCQUFpQztFQUNqQyxZQUFXO0VBQ1gsbUJBQW1CO0FBakp2Qjs7QUFtSkE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxlQUFlO0VBQ2YsOEJBQThCO0VBQzlCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFoSnBCOztBQW1KQTtFQUNFLHlCQUF5QjtFQUV6QixZQUFZO0VBQ1oseUJBQW1DO0VBQ25DLFlBQVk7RUFDWixtQkFBbUI7QUFqSnJCOztBQXFKQTtFQUNFLG1CQUFtQjtBQWxKckI7O0FBcUpBO0VBQ0UsYUFBYTtFQUNiLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBbUI7RUFDbkIsdUJBQUE7RUFDQSx5QkFBeUI7RUFDekIsV0FBVztFQUVYLGNBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtBQW5KakI7O0FBc0pBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxnQkFBZ0I7QUFuSmxCOztBQXdKQTs7OztFQUlFLGVBQWU7QUFySmpCOztBQXdKQTtFQUNFLFlBQVk7QUFySmQ7O0FBd0pBO0VBQ0UseUJBQW9DO0FBckp0Qzs7QUF3SkE7RUFDRSxZQUFZO0VBQ1osY0FBdUI7QUFySnpCOztBQWdLQTtFQUNFLG9DQUErQztFQUMvQyxXQUFXO0FBN0piOztBQW1LQTtFQUNFLGNBQWM7QUFoS2hCOztBQTJLQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7QUF4S3JCOztBQTJLQTtFQUNFLE9BQU87QUF4S1Q7O0FBMktBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQXhLckI7O0FBMktBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUF4S3BCOztBQTJLQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtBQXhLZDs7QUEyS0E7RUFDRSxTQUFTO0VBQ1QsYUFBYTtFQUliLGlDQUFpQztBQTNLbkM7O0FBOEtBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsZUFBZTtJQUNmLHVCQUF1QjtFQTNLekI7QUFDRjs7QUE4S0E7RUFDRSx3QkFBd0I7RUFDckIsdUJBQXVCO0VBQ3hCLDRCQUE0QjtFQUM1QixrQkFBa0I7QUEzS3RCOztBQThLQTtFQUNFLGNBQWM7QUEzS2hCOztBQThLQTtFQUNFLGdDQUEwQztBQTNLNUM7O0FBOEtBO0VBQ0UsY0FBd0I7RUFDeEIseUJBQW1DO0FBM0tyQzs7QUE4S0E7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGNBQWM7QUEzS2hCOztBQThLQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsY0FBYztBQTNLaEI7O0FBOEtBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7QUEzS3ZCOztBQThLQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBM0t2Qjs7QUE4S0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQTNLdkI7O0FBOEtBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixjQUFjO0FBM0toQjs7QUFnTEE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQkFBb0I7QUE3S3RCOztBQWlMQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7QUE5S3BCOztBQWlMQTtFQUNFLGlCQUFpQjtBQTlLbkI7O0FBaUxBO0VBQ0UsMEJBQTBCO0VBQzFCLHNCQUFzQjtFQUV0Qiw2QkFBNkI7QUEvSy9COztBQW1MQTtFQUNFLGFBQWE7QUFoTGY7O0FBbUxBO0VBQ0UsZUFBZTtBQWhMakI7O0FBbUxBO0VBQ0UsZUFBZTtBQWhMakI7O0FBbUxBO0VBQ0UsU0FBUztBQWhMWDs7QUFtTEE7RUFDRSw4QkFBOEI7QUFoTGhDOztBQW1MQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBaExqQjs7QUFtTEE7RUFDRSxxQkFBcUI7QUFoTHZCOztBQW1MQTtFQUNFLDhCQUE4QjtBQWhMaEM7O0FBbUxBO0VBQ0U7SUFFRSxTQUFTO0lBQ1QsZ0RBQWdEO0VBakxsRDtBQUNGOztBQW9MQTtFQUNFLGFBQWE7RUFDYixTQUFTO0VBQ1QsZ0RBQWdEO0FBakxsRDs7QUF3TEE7RUFDRSxhQUFhO0FBckxmOztBQXdMQTtFQUNFLGVBQWU7QUFyTGpCOztBQXdMQTtFQUNFLFlBQVk7QUFyTGQ7O0FBd0xBO0VBQ0UsOEJBQThCO0FBckxoQzs7QUF3TEE7RUFDRSxTQUFTO0FBckxYOztBQXdMQTtFQUNFLHNCQUFzQjtBQXJMeEI7O0FBd0xBO0VBQ0UsWUFBWTtBQXJMZDs7QUF3TEE7RUFDRSxvQkFBb0I7QUFyTHRCOztBQXdMQTtFQUNFLHNCQUFzQjtBQXJMeEI7O0FBd0xBO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7QUFyTHBCOztBQXdMQTtFQUNFLGlCQUFpQjtBQXJMbkI7O0FBd0xBO0VBQ0UsY0FBYztBQXJMaEI7O0FBd0xBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUFyTFg7O0FBd0xBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFyTGQ7O0FBd0xBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxlQUFlO0FBckxqQjs7QUF3TEE7RUFFRSxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLGFBQWE7QUF0TGY7O0FBeUxBO0VBQ0UsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixhQUFhO0FBdExmOztBQXlMQTtFQUNFLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLG9CQUFvQjtBQXRMdEI7O0FBeUxBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7QUF0TFg7O0FBeUxBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUF0TGQ7O0FBeUxBO0VBRUUscUJBQW9CO0FBdkx0Qjs7QUF5TEE7RUFFRSxZQUFXO0VBQ1gsYUFBYTtBQXZMZjs7QUEwTEE7O0VBRUksd0JBQXVCO0VBQ3ZCLFNBQVE7QUF2TFo7O0FBMExBO0VBQ0UsMkJBQW1CO0tBQW5CLHdCQUFtQjtVQUFuQixtQkFBbUI7QUF2THJCOztBQXlMQTtFQUNFLGtCQUFrQjtBQXRMcEI7O0FBeUxBO0VBQ0UsMEJBQTBCO0VBQzFCLGNBQWE7RUFDYixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBdExwQiIsImZpbGUiOiJreWMtdmVyaWZpY2F0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJyZWFkY3J1bWIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDQwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5oZWFkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgLy8gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JlZW47XHJcbn1cclxuXHJcbi5mZXRjaEJ1dHRvbiB7XHJcbiAgY29sb3I6ICM0NTZFRkU7XHJcbiAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbm1hdC1oaW50IHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5hcHAtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi8vIC52ZXJpZmljYXRpb25IZWFke1xyXG4vLyAgIG9wYWNpdHk6IDkwJTtcclxuLy8gfVxyXG4ubWFyZ2luIHtcclxuICBtYXJnaW4tbGVmdDogLTEwJTtcclxufVxyXG4jZmVjaHtcclxuZGlzcGxheTogZmxleDtcclxufVxyXG4uZmVjaEJ1dHRvbkRpdntcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuI2Zvcm1mZXRjaHtcclxuICBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUlIDI1JSAyNSUgMjUlO1xyXG59XHJcblxyXG4uYmFzaWMtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbi5mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZ3JpZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCBtaW5tYXgoNTAlLCAxZnIpKTtcclxufVxyXG5cclxuLm1haW4taGVhZCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBwYWRkaW5nLXRvcDogMTZweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG59XHJcblxyXG5tYXQtdGFiLWdyb3VwIHtcclxuICBwYWRkaW5nLWxlZnQ6IDIlO1xyXG59XHJcblxyXG4uZmxleC1jb250YWluZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgaGVpZ2h0OiA2MHZoO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gIHBhZGRpbmc6IDEwcHggNXB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lciAqIHtcclxuICAvLyB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcclxuICBtYXJnaW46IDAgNXB4O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lciA6bnRoLWNoaWxkKDIpLFxyXG4uZmxleC1jb250YWluZXIgOm50aC1jaGlsZCgzKSB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uZmxleC1jb250YWluZXIgOm50aC1jaGlsZCgzKSB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLy8gICAuZmxleC1jb250YWluZXIgOm50aC1jaGlsZCg0KSB7XHJcbi8vICAgICBoZWlnaHQ6IDEwMCU7XHJcbi8vICAgfVxyXG4uZm9ybUZpZWxkMSB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcblxyXG4uZm9ybUZpZWxkIHtcclxuICAvLyB3aWR0aDoyMDBweDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG5cclxuICAvLyAgIGdhcDogMjBweDtcclxuICAvLyB9XHJcblxyXG59XHJcblxyXG4uZm9ybUZpZWxkMiB7XHJcbiAgLy8gd2lkdGg6MjAwcHg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuICAvLyAgIGdhcDogMjBweDtcclxuICAvLyB9XHJcbn1cclxuXHJcbi5pbnB1dE1hdGNhcmQge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvLyBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG5cclxuICAvLyB3aWR0aDogMjIwcHg7XHJcbn1cclxuXHJcbi5pbnB1dEdlbmRlciB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDo1MDBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcblxyXG4gIC8vIHdpZHRoOiAyMjBweDtcclxufVxyXG5cclxuLmlucHV0TWF0TmFtZSB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDo1MDBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcblxyXG4gIC8vIHdpZHRoOiA0NTBweDtcclxufVxyXG5cclxuLmlucHV0TWF0TmV3IHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWF4LXdpZHRoOjUwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTNweDtcclxuXHJcbiAgLy8gd2lkdGg6IDQ1NXB4O1xyXG59XHJcblxyXG4uaW5wdXRNYXRMYXN0TmFtZSB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDo1MDBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcblxyXG4gIC8vIHdpZHRoOiAyMDBweDtcclxuXHJcbn1cclxuXHJcbi5pbnB1dE1hdGNhcmREb2Mge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvLyBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG4gIC8vIHdpZHRoOjI3MHB4O1xyXG4gIC8vIHdpZHRoOiAxOTVweDtcclxufVxyXG5cclxuLmlucHV0TWF0Y2FyZE1haWwge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvLyBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG4gIC8vIHdpZHRoOjEwMCU7XHJcbiAgLy8gd2lkdGg6IDQxMHB4O1xyXG59XHJcblxyXG4uaW5wdXRNYXRjYXJkTWFpbEFkZCB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDo1MDBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcbiAgLy8gd2lkdGg6MTAwJTtcclxuICAvLyB3aWR0aDogNzUwcHg7XHJcbn1cclxuXHJcbi5pbnB1dE1hdGNhcmRNYXJyaXRpYWwge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvLyBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG4gIC8vIHdpZHRoOjEwMCU7XHJcbiAgLy8gd2lkdGg6IDQ1MHB4O1xyXG59XHJcblxyXG4uaW5wdXRNYXRjYXJkUHJlZml4IHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWF4LXdpZHRoOjUwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTNweDtcclxuICAvLyB3aWR0aDoxMDAlO1xyXG4gIC8vIHdpZHRoOiAxNTBweDtcclxufVxyXG5cclxuLmlucHV0TWF0Y2FyZDMge1xyXG4gIGZsZXgtZ3JvdzogMjtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgLy9tYXgtd2lkdGg6MjA4cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcblxyXG5cclxufVxyXG5cclxuLmlucHV0TWF0Y2FyZEFkZCB7XHJcbiAgZmxleC1ncm93OiAyO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICAvL21heC13aWR0aDoyMDhweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTNweDtcclxuICAvLyB3aWR0aDoyMDBweDtcclxuXHJcbn1cclxuXHJcbi5pbnB1dE1hdGNhcmQ0IHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIG1heC13aWR0aDogMjA4cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcbiAgLy8gbWFyZ2luLXJpZ2h0Oi0xJTtcclxuXHJcbn1cclxuXHJcbi8vICNmb3JtMXtcclxuLy8gICBtYXJnaW4tcmlnaHQ6LTElO1xyXG4vLyB9XHJcbi5pbnB1dE1hdGNhcmQxIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWF4LXdpZHRoOiA1MDBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcbiAgLy8gZGlzcGxheTogYmxvY2s7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxMnB4O1xyXG4gIC8vIHdpZHRoOiAxMDAlO1xyXG5cclxuICAvLyBoZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5pbnB1dE1hdGNhcmQyIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWF4LXdpZHRoOiA1MDBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcbiAgLy8gZGlzcGxheTogYmxvY2s7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAvLyBwYWRkaW5nOiAxMnB4O1xyXG4gIC8vIHdpZHRoOiAxMDAlO1xyXG4gIC8vIGhlaWdodDogMzBweDtcclxuICB3aWR0aDogMjBweDtcclxufVxyXG5cclxuLm1hdC1mb3JtLWZpZWxkLXdyYXBwZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbi5pbnB1dENsYXNzIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IGhpZGRlbjtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBkaXYubWF0LWZvcm0tZmllbGQtb3V0bGluZS1zdGFydCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAwICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWdhcCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAwICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLWVuZCB7XHJcbiAgYm9yZGVyLWNvbG9yOiAwICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAwcHggIWltcG9ydGFudDtcclxufVxyXG4jY2hlY2t7XHJcbiAgYXBwZWFyYW5jZTogb3V0bGluZTtcclxuICB3aWR0aDogMTUwcHg7XHJcbn1cclxuLmFhZGhhckRvY051bXtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuLmFhZGhhckZldGNoRGl2e1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLm1haW5BYWRoYXJ7XHJcbiAgbWFyZ2luLXRvcDoxJTtcclxufVxyXG5cclxuLmFhZGhhcklucHV0e1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcblxyXG59XHJcbi8vIC5tYXJnaW5Ub3B7XHJcbi8vICAgLy8gbWFyZ2luLXRvcDogLTQlO1xyXG4vLyB9XHJcbi5tYXJnaW5Ub3BLeWN7XHJcbiAgIG1hcmdpbi10b3A6IC0xLjIlO1xyXG59XHJcbi5hYWRoYXJJbnB1dDF7XHJcbmZvbnQtc2l6ZTogMTJweDtcclxuICAgIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgLy8gbWFyZ2luLWxlZnQ6IC00JTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udG9nZ2xlR3JvdXAxe1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogNCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5hYWRoYXJGb3Jte1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBcclxuICAvLyBtYXJnaW4tdG9wOjUwcHg7XHJcbn1cclxuLnRvZ2dsZUdyb3Vwe1xyXG4gIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4IDI1cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gLy8gYm9yZGVyLXJhZGl1czogMTBweDtcclxuIC8vIGJhY2tncm91bmQtY29sb3I6ICNmNGY4Zjc7XHJcbiAgLy8gZm9udC1zaXplOiAxMHB4O1xyXG4gIC8vIGhlaWdodDogNDBweDtcclxuIG1hcmdpbi10b3A6IDElO1xyXG59XHJcblxyXG4udG9nZ2xlR3JvdXAxe1xyXG4vLyAgIHBhZGRpbmc6IDEwcHggMzBweCAxMHB4IDI1cHg7XHJcbi8vICAgYm9yZGVyOiAycHggZGFzaGVkIGxpZ2h0Z3JleTtcclxuLy8gIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjhmNztcclxuLy8gICAvLyBmb250LXNpemU6IDEwcHg7XHJcbi8vICAgLy8gaGVpZ2h0OiA0MHB4O1xyXG4gbWFyZ2luLXRvcDogMiU7XHJcbn1cclxuI2RhdGVPZntcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbn1cclxuLmFhZGhhckNoZWNre1xyXG4gIGNvbG9yOiBncmVlbjtcclxuICBtYXJnaW4tbGVmdDogLTglO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG59XHJcbi5hYWRoYXJVcGxvYWR7XHJcbiAgaGVpZ2h0OjQwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDIwcHg7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLmFhZGhhckRvY3tcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICBtYXJnaW4tdG9wOiAtMC41JTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgLy8gZ2FwOiAyMHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5mb3JtMTMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgLy8gbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAvLyBnYXA6IDIwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxufVxyXG5cclxuLmZvcm0xIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZ2FwOiA1MHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAvLyB3aWR0aDogMjAwcHg7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICBnYXA6IDIwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAvLyBwYWRkaW5nLWxlZnQ6IDExJTtcclxuICAvLyBwYWRkaW5nLXJpZ2h0OiAxNCU7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbn1cclxuLkJhY2t7XHJcbiAgXHJcbiAgbWFyZ2luOjEycHggMHB4IDEycHggMHB4O1xyXG4gIG1hcmdpbi1sZWZ0Oi05JTtcclxuICB3aWR0aDoxNTBweDtcclxuICBjb2xvcjp3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDQ1cHg7XHJcbn1cclxuLm1hdENhcmQge1xyXG4gIG1heC13aWR0aDogMTYwMHB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1JTtcclxuICBtYXJnaW4tcmlnaHQ6IDE1JTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbjogMTBweCBhdXRvIDAgYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAzJTtcclxufVxyXG5cclxuLmNoYW5nZUlucHV0IHtcclxuICBvcGFjaXR5OiAwLjA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAxNXB4O1xyXG4gIGJvdHRvbTogMDtcclxuICByaWdodDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2hhbmdlRGl2IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQtZmxleCB7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmF5O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxufVxyXG5cclxuLmZsZXgtZ3Jvdy0xIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIC8vIG1hcmdpbi1yaWdodDogNTBweDtcclxufVxyXG5cclxuLmZsZXgtZ3Jvdy0yIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZ2FwOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTAlO1xyXG59XHJcblxyXG4uYWxpZ25tZW50IHtcclxuICBib3JkZXItc3R5bGU6IG5vbmUgIWltcG9ydGFudDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4jZG9iIHtcclxuICB3aWR0aDo5MiUgIWltcG9ydGFudDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbiN0b2dnbGV7XHJcblxyXG4gIG1hcmdpbi10b3A6LTIlO1xyXG59XHJcbiNtYXgtd2lkdGgge1xyXG4gIG1heC13aWR0aDogMTUwcHhcclxufVxyXG5cclxuI2Ryb3AtbWF4LXdpZHRoIHtcclxuICB3aWR0aDogMTkwcHg7XHJcbn1cclxuXHJcbiNyYWRpbyB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG5yYWRpb0dyb3VwIHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbiNuYXRpb25hbGl0eSB7XHJcbiAgd2lkdGg6IDIxMHB4O1xyXG59XHJcblxyXG5tYXQtbGFiZWwge1xyXG4gIG1hcmdpbi1yaWdodDogNiU7XHJcbn1cclxuXHJcbi5jaGFuZ2Uge1xyXG4gIGNvbG9yOiAjMjY4MEVCO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuXHJcbi5OZXh0IHtcclxuICBtYXJnaW46MTJweCAwcHggMTJweCAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6LTEzJTtcclxuICAgIHdpZHRoOjE1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LDEwNiwyNDUpO1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1NXB4O1xyXG59XHJcbi5idXR0b24xIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZy1sZWZ0OiAxMSU7XHJcbiAgcGFkZGluZy1yaWdodDogMTQlO1xyXG4gXHJcbn1cclxuLk5leHQxIHtcclxuICBtYXJnaW46IDEycHggMHB4IDEycHggMHB4O1xyXG4gIC8vIG1hcmdpbi1yaWdodDogLTEzJTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LCAxMDYsIDI0NSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDU1cHg7XHJcbiAgLy9tYXJnaW4tbGVmdDoxMDAlO1xyXG59XHJcblxyXG5ociB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmxpbmUge1xyXG4gIGJvcmRlcjogdGhpY2s7XHJcbiAgLyogaGVpZ2h0OiAzcHg7ICovXHJcbiAgLyogbGluZS1oZWlnaHQ6IDNweDsgKi9cclxuICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIC8qIGJvcmRlci13aWR0aDogM3B4OyAqL1xyXG4gIGJvcmRlci1ibG9jay13aWR0aDogdW5zZXQ7XHJcbiAgY29sb3I6IGJsdWU7XHJcbiAgLy8gd2lkdGg6IDIwcHg7XHJcbiAgY29sb3I6IHJnYigxMDUsIDEzNiwgMjQ2KTtcclxuICB3aWR0aDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgbWFyZ2luOiBpbml0aWFsO1xyXG59XHJcblxyXG5pbnB1dCB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBjb2xvcjogIzM3NDY2NDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIC8vIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgLy8gICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbn1cclxuXHJcbi5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsOm5vdCgubWF0LXRhYi1kaXNhYmxlZCk6Zm9jdXMsXHJcbi5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbms6bm90KC5tYXQtdGFiLWRpc2FibGVkKTpmb2N1cyxcclxuLm1hdC10YWItbmF2LWJhci5tYXQtcHJpbWFyeSAubWF0LXRhYi1sYWJlbDpub3QoLm1hdC10YWItZGlzYWJsZWQpOmZvY3VzLFxyXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxpbms6bm90KC5tYXQtdGFiLWRpc2FibGVkKTpmb2N1cyB7XHJcbiAgYmFja2dyb3VuZDogcmVkO1xyXG59XHJcblxyXG4ubWF0LXRhYi1sYWJlbC1hY3RpdmUge1xyXG4gIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XHJcbiAgY29sb3I6IHJnYigxMDUsIDEzNiwgMjQ2KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udmVyaWZpY2F0aW9uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgY29sb3I6IHJnYig0MiwgODksIDIzMSk7XHJcbn1cclxuXHJcbi8vIC5tYXQtaW5rLWJhcntcclxuLy8gcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgICAgYm90dG9tOiAwO1xyXG4vLyAgICAgaGVpZ2h0OiAycHg7XHJcbi8vICAgICB0cmFuc2l0aW9uOiA1MDBtcyBjdWJpYy1iZXppZXIoMC4zNSwgMCwgMC4yNSwgMSk7XHJcbi8vICAgICBoZWlnaHQ6IDRweDtcclxuLy8gICAgIGNvbG9yOlxyXG4vLyB9XHJcbjo6bmctZGVlcCAubWF0LXRhYi1ncm91cC5tYXQtcHJpbWFyeSAubWF0LWluay1iYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDUsIDEzNiwgMjQ2KSAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNHB4O1xyXG4gIC8vIHdpZHRoOiAxMTZweCAhaW1wb3J0YW50O1xyXG5cclxuICAvLyBtYXJnaW4tbGVmdDogMiU7XHJcbn1cclxuXHJcbm1hdC10YWItbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogOHB4O1xyXG59XHJcblxyXG4vLyBtYXQtb3B0aW9ue1xyXG4vLyAgIHdpZHRoOiAyMHB4O1xyXG4vLyB9XHJcbi8vIC5tYXQtc2VsZWN0LWFycm93LXdyYXBwZXIge1xyXG4vLyAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbi8vICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuLy8gICB3aWR0aDogNDBweCAhaW1wb3J0YW50O1xyXG4vLyB9XHJcbi5jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4ubGluZSB7XHJcbiAgZmxleDogMTtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG59XHJcblxyXG5maWd1cmUge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgbGluZS1oZWlnaHQ6IDEuN2VtO1xyXG59XHJcblxyXG5maWd1cmUgaW1nIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uZm9ybVNlY3Rpb25Db250YWluZXIge1xyXG4gIGdhcDogNDBweDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIC8vIGdyaWQtdGVtcGxhdGUtY29sdW1uczogO1xyXG4gIC8vIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KCBhdXRvLWZpdCwgbWlubWF4KDE1MHB4LCAxZnIpICk7XHJcbiAgLy9ncmlkLWdhcDogMjBweDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDIwMHB4IGF1dG87XHJcbn1cclxuXHJcbkBtZWRpYShtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmZvcm1TZWN0aW9uQ29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtSW1nIHtcclxuICBoZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgd2lkdGg6IDIwMHB4ICFpbXBvcnRhbnQ7IFxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcclxufVxyXG5cclxuLmRyb3BEb3duIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2IoNjYsIDEzNCwgMjQ0KSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50IC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcclxuICBjb2xvcjogcmdiKDY2LCAxMzQsIDI0NCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LCAxMzQsIDI0NCk7XHJcbn1cclxuXHJcbi5VcGxvYWQge1xyXG4gIHZlcnRpY2FsLWFsaWduOiBjO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBjb2xvcjogIzI2ODBFQjtcclxufVxyXG5cclxuI3JvdyB7XHJcbiAgZm9udC1zaXplOiA5cHg7XHJcbiAgb3BhY2l0eTogMTAwJTtcclxuICBjb2xvcjogIzI2ODBFQjtcclxufVxyXG5cclxuLnNwYW4ge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHdpZHRoOiAzMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNwYW44IHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB3aWR0aDogNjAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zcGFuMTIge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHdpZHRoOiAxMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNwYW5EaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcblxyXG5cclxufVxyXG5cclxuI2JpbGwge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAtMjVweDtcclxuICAvLyBtYXJnaW4tYm90dG9tOiAtNCU7XHJcbn1cclxuXHJcbi5iaWxsTmFtZSB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLm1hcmdpbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5kaXZpZGVyIHtcclxuICBwb3NpdGlvbjogdW5zZXQgIWltcG9ydGFudDtcclxuICBsZWZ0OiAyMDBweCAhaW1wb3J0YW50O1xyXG5cclxuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi5mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ud3JhcCB7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZmxleC1iYXNpcy01MCB7XHJcbiAgZmxleC1iYXNpczogNTAlO1xyXG59XHJcblxyXG4uZ2FwLTIwIHtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5hZGRyZXNzQ29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwIDIwcHggMCAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hZGRyZXNzLWNhcmQge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLmlubGluZS1ibG9jayB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uc3BhY2UtYmV0d2VlbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC5hZGRyZXNzR3JpZCB7XHJcbiAgICAvLyBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xyXG4gIH1cclxufVxyXG5cclxuLmFkZHJlc3NHcmlkSW5uZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcclxufVxyXG5cclxuLy8gOjpuZy1kZWVwIC5tYXQtY2FyZCAubWF0LWRpdmlkZXItaG9yaXpvbnRhbCB7XHJcbi8vICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG4vLyAgIGxlZnQ6IDA7XHJcbi8vIH1cclxuLmZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi53cmFwIHtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5mbGV4LWdyb3ctMSB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uanVzdGlmeS1iZXR3ZWVuIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbi5nYXAtMjAge1xyXG4gIGdhcDogMjBweDtcclxufVxyXG5cclxuLmZsZXgtY29sdW1uIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4uaGVpZ2h0LWF1dG8ge1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG5cclxuLmFsaWduLXNlbGYtZmxleC1lbmQge1xyXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uYWxpZ24tc2VsZi1mbGV4LXN0YXJ0IHtcclxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG59XHJcblxyXG4ud2lkdGgtZml0LWNvbnRlbnQge1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxufVxyXG5cclxuLm0tOCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi5ibG9jayB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiNhZGRyZXNzQmxvY2sge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAyMHB4O1xyXG59XHJcblxyXG4jY29tbXVuaWNhdGlvbkRpdmlkZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uY29tbXVuaWNhdGlvbkZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuI2NvbW11bmljYXRpb25CbG9ja0Zvcm0ge1xyXG5cclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcbiNEb2N1bWVudEZvcm0ge1xyXG4gIHdpZHRoOiA2NTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuI0RvY3VtZW50Rm9ybTEge1xyXG4gIHdpZHRoOiA2NTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuI2RvY01haW5EaXZpZGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMjBweDtcclxufVxyXG5cclxuI2RpdmlkZXJJbnNpZGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uZXJyYmRcclxue1xyXG4gIGJvcmRlcjoxcHggc29saWQgcmVkO1xyXG59XHJcbi5oaWRlXHJcbntcclxuICBjb2xvcjp3aGl0ZTtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFxyXG5pbnB1dFt0eXBlPVwibnVtYmVyXCJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9ue1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOm5vbmU7XHJcbiAgICBtYXJnaW46MDtcclxufVxyXG5cclxuI2NoZWNre1xyXG4gIGFwcGVhcmFuY2U6IG91dGxpbmU7XHJcbn1cclxuLmFhZGhhckRvY051bXtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hYWRoYXJGZXRjaHtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgXHJcbiAgY29sb3I6IzQ1NkVGRTtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuXHJcbiJdfQ== */"]
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
          }];
        }, {
          settingallCustInfo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
          }],
          el: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ["fileInput"]
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
    "DyWe":
    /*!*************************************************************************************!*\
      !*** ./src/app/views/others/cutomer-finger-print/cutomer-finger-print.component.ts ***!
      \*************************************************************************************/

    /*! exports provided: CutomerFingerPrintComponent */

    /***/
    function DyWe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CutomerFingerPrintComponent", function () {
        return CutomerFingerPrintComponent;
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


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var app_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/finger-print-capture.service */
      "rp8y");
      /* harmony import */


      var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! app/shared/services/local-store.service */
      "tZUg");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/progress-bar */
      "BTe0");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      function CutomerFingerPrintComponent_mat_card_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "fingerprint");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.fingerName);
        }
      }

      function CutomerFingerPrintComponent_mat_card_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "data:image/jpg;base64," + ctx_r1.thumbData, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.fingerName);
        }
      }

      function CutomerFingerPrintComponent_mat_card_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "data:image/jpg;base64," + ctx_r2.indexData, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.fingerName);
        }
      }

      function CutomerFingerPrintComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CutomerFingerPrintComponent_div_25_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6);

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r5.dummyscan();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.scan);
        }
      }

      function CutomerFingerPrintComponent_div_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CutomerFingerPrintComponent_div_26_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r7.onReScan();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Rescan");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      var CutomerFingerPrintComponent = /*#__PURE__*/function () {
        function CutomerFingerPrintComponent(dialogRef, ls, fingerPrintService, data, snack, cdr) {
          _classCallCheck(this, CutomerFingerPrintComponent);

          this.dialogRef = dialogRef;
          this.ls = ls;
          this.fingerPrintService = fingerPrintService;
          this.data = data;
          this.snack = snack;
          this.cdr = cdr;
          this.isScanned = false;
          this.fingerName = "Thumb";
          this.prec = "32%";
          this.clicks = 0;
          this.scan = "SCAN";
          this.progressbarValue = 0;
          this.figPrintResp = '';
          this.capturedThumb = false;
          this.capturedIndex = false;
          this.fingerPrintArr = [];
        }

        _createClass(CutomerFingerPrintComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this21 = this;

            this.customerId = sessionStorage.getItem('customer_id');
            this.refreshedCustId = this.data.customerId;
            console.log('customer id :: ', this.customerId, this.refreshedCustId);
            console.log('data :: ', this.data.bioData);

            if (this.data.bioData.length > 0) {
              this.scan = "Done";
              this.fingerName = 'done';
              this.data.bioData.forEach(function (element, key) {
                _this21.capturedThumb = true;
                _this21.capturedIndex = true;
                _this21.progressbarValue = 100;

                if (element.fingerName != undefined && element.fingerName === 'Thumb') {
                  _this21.thumbData = element.image;
                }

                if (element.fingerName != undefined && element.fingerName === 'index') {
                  _this21.indexData = element.image;
                }
              });
            }
          }
        }, {
          key: "onScan",
          value: function onScan(fingerName) {
            console.log('fingerName :: ', fingerName);
            document.getElementById('clr').style.backgroundColor = "#F4F8F7";
            this.prec = "50%";
            this.clicks += 1;

            if (fingerName === 'Thumb') {
              document.getElementById('clr').style.backgroundColor = "white";
              document.getElementById('fClr').style.color = "grey";
              console.log("THUMB");
              var progressVal = 50;
              this.captureFingerPrint(fingerName, progressVal, 'index');
            } else if (fingerName === 'index') {
              this.scan = "Done";
              document.getElementById('clr').style.backgroundColor = "#F4F8F7";
              document.getElementById('fClr').style.color = "#6EBDF9";
              console.log("else if");
              var _progressVal = 100;
              this.captureFingerPrint(fingerName, _progressVal, 'done');
            } else {
              console.log("this.fpArr :: ", this.fpArr);
              this.scan = "Done";
              console.log("else");
              this.closeClick(this.isScanned);
            }
          }
        }, {
          key: "captureFingerPrint",
          value: function captureFingerPrint(fingerName, progressVal, nextFigPrintVal) {
            var _this22 = this;

            this.fingerPrintService.CallingSGIFPCapture().subscribe(function (capFingerPrint) {
              console.log("capFingerPrint 29 ::: ", capFingerPrint);
              console.log('fingerName :: ', fingerName);
              console.log('nextFigPrintVal :: ', nextFigPrintVal);

              if (capFingerPrint.ErrorCode == 0) {
                _this22.cdr.detectChanges();

                if (fingerName === 'Thumb') {
                  _this22.capturedThumb = true;
                  _this22.thumbData = capFingerPrint.BMPBase64;
                  var obj = {
                    fingerName: fingerName,
                    image: capFingerPrint.BMPBase64
                  };

                  _this22.fingerPrintArr.push(obj);
                }

                if (fingerName === 'index') {
                  _this22.capturedThumb = true;
                  _this22.capturedIndex = true;
                  _this22.indexData = capFingerPrint.BMPBase64;
                  var _obj = {
                    fingerName: fingerName,
                    image: capFingerPrint.BMPBase64
                  };

                  _this22.fingerPrintArr.push(_obj);
                }

                _this22.capFingerPrint = capFingerPrint;
                _this22.fingerName = nextFigPrintVal;
                _this22.progressbarValue = progressVal;
                var cId = _this22.customerId;
                console.log('this.customerId :: ', _this22.customerId);

                _this22.saveBiometric(capFingerPrint, fingerName, cId);
              } else {
                _this22.getError(capFingerPrint.ErrorCode);
              }
            });
          }
        }, {
          key: "getError",
          value: function getError(errorCode) {
            var error = this.fingerPrintService.errorCodeService(errorCode);
            console.log('error code', error);
          }
        }, {
          key: "saveBiometric",
          value: function saveBiometric(capFingerPrint, fingerName, cId) {
            var _this23 = this;

            console.log('save biometric');
            var screen = 'kyc-verification';
            this.fingerPrintService.saveBiometric(capFingerPrint, fingerName, cId, screen).subscribe(function (data) {
              _this23.isScanned = true;
              console.log("after save ", data);

              _this23.ls.setItem('imageURLBio', data.fileUrl);

              _this23.cdr.markForCheck();

              _this23.snack.open('Captured ' + fingerName + ' Finger', 'OK', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });
            });
          }
        }, {
          key: "closeClick",
          value: function closeClick(isScanned) {
            console.log("close click"); // [routerLink]="['/others/kyc']"

            var data = this.fingerPrintArr;
            this.dialogRef.close({
              message: 'Confirm',
              data: data,
              isScanned: isScanned
            });
          }
        }, {
          key: "dummyscan",
          value: function dummyscan() {
            /* TO-DO : NEED TO REMOVE IN FUTURE , DUMMY CALL */
            var obj = {
              fileUrl: "".concat(app_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/rest/upload/downloadDocs/?fileName=biometric.jpg")
            };
            this.saveBiometric(obj, 'FINGERPRINT', this.customerId);
          }
        }, {
          key: "onReScan",
          value: function onReScan() {
            console.log('this.fingerPrintArr :: ', this.fingerPrintArr);
            this.fingerPrintArr = [];
            console.log('this.fingerPrintArr after:: ', this.fingerPrintArr);
            this.capturedThumb = false;
            this.capturedIndex = false;
            this.indexData = '';
            this.thumbData = '';
            this.fingerName = "Thumb";
            this.progressbarValue = 0;
          }
        }]);

        return CutomerFingerPrintComponent;
      }();

      CutomerFingerPrintComponent.ɵfac = function CutomerFingerPrintComponent_Factory(t) {
        return new (t || CutomerFingerPrintComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_4__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_3__["FingerPrintCaptureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
      };

      CutomerFingerPrintComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CutomerFingerPrintComponent,
        selectors: [["app-cutomer-finger-print"]],
        decls: 27,
        vars: 6,
        consts: [["fxLayout", "column wrap", 1, "main"], ["fxFlex", "100", "fxLayoutAlign", "end stretch"], [1, "mat-18", 3, "click"], ["fxFlex", "100", "fxLayoutAlign", "center stretch", "fxLayoutGap", "space-around", "id", "scanDiv"], ["id", "scan"], ["fxFlex", "50", "fxLayoutAlign", "center stretch", "id", "proceedDiv"], [1, "text-muted"], ["fxFlex", "50", "fxLayoutAlign", "center stretch", "id", "progressBarDiv"], ["id", "file", "max", "100", 3, "value"], ["fxFlex", "50", "fxLayout", "no wrap", "id", "thumb", 1, "labels"], ["fxLayoutAlign", "start stretch"], ["fxLayoutAlign", "center stretch", 1, "text-muted"], ["fxLayoutAlign", "end stretch", 1, "text-muted"], ["fxFlex", "50", "fxLayoutAlign", "center stretch"], ["fxFlex", "50", "fxLayoutAlign", "center stretch", "fxLayoutGap", "20px"], ["id", "clr", 4, "ngIf"], ["id", "clr", "style", "margin: 0px; padding: 0px;", 4, "ngIf"], ["fxFlex", "50", "fxLayoutAlign", "center stretch", 4, "ngIf"], ["id", "clr"], ["id", "fingerprintSpan", "fxLayoutAlign", "center"], [1, "line"], ["fxLayoutAlign", "center stretch", "id", "fClr", 1, "fingeralgn", "material-icons"], ["id", "clr", 2, "margin", "0px", "padding", "0px"], [3, "src"], ["mat-raised-button", "", 1, "btn", 3, "click"]],
        template: function CutomerFingerPrintComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CutomerFingerPrintComponent_Template_mat_icon_click_2_listener() {
              return ctx.closeClick(ctx.isScanned);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Scan your Fingerprints to complete the verification");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Place the finger and scan each one to proceed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-progress-bar", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " 100%");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Thumb Verification");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Index Finger Verification");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Completed");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CutomerFingerPrintComponent_mat_card_22_Template, 6, 1, "mat-card", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CutomerFingerPrintComponent_mat_card_23_Template, 4, 2, "mat-card", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CutomerFingerPrintComponent_mat_card_24_Template, 4, 2, "mat-card", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, CutomerFingerPrintComponent_div_25_Template, 3, 1, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CutomerFingerPrintComponent_div_26_Template, 3, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.progressbarValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fingerName != "done");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.capturedThumb);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.capturedIndex);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fingerName != "done");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.fingerName == "done");
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_8__["MatProgressBar"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_10__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"]],
        styles: [".btn[_ngcontent-%COMP%] {\n  width: 30%;\n  border-radius: 20px;\n  background-color: #3298f6;\n  color: white;\n}\n\n.main[_ngcontent-%COMP%] {\n  width: 600px;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n\nprogress[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20px;\n}\n\nimg[_ngcontent-%COMP%] {\n  margin-top: 30px;\n  border-radius: 5px;\n}\n\n.contentClass[_ngcontent-%COMP%] {\n  font-size: smaller;\n  color: #a1a1a1;\n  font-family: sans-serif;\n}\n\n.titleClass[_ngcontent-%COMP%] {\n  font-size: x-large;\n  font-family: sans-serif;\n  color: #616161;\n}\n\n.closeIconClass[_ngcontent-%COMP%] {\n  font-size: medium;\n  color: #999999;\n}\n\n.btnScanClass[_ngcontent-%COMP%] {\n  line-height: 30px !important;\n  border-color: #456EFE;\n  background-color: #456EFE !important;\n  color: white;\n  border-radius: 20px;\n  width: 160px;\n  height: 35px;\n  font-size: small;\n  font-family: monospace;\n}\n\n.contentDiv[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n  padding: 20px !important;\n}\n\n.divTitleClass[_ngcontent-%COMP%] {\n  height: 60px;\n}\n\n.fingeralgn[_ngcontent-%COMP%] {\n  font-size: 80px;\n  color: #6EBDF9;\n}\n\n.imagesDiv[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  padding-bottom: 20px;\n}\n\n.h-100[_ngcontent-%COMP%] {\n  height: 100% !important;\n}\n\n@media (max-width: 406px) {\n  .main[_ngcontent-%COMP%] {\n    width: 200px;\n    padding: 5px;\n  }\n  .labels[_ngcontent-%COMP%] {\n    font-size: 7px;\n  }\n}\n\n@media only screen and (min-width: 791px) and (min-width: 655px) {\n  .labels[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\n\n@media only screen and (max-width: 790px) and (min-width: 655px) {\n  .main[_ngcontent-%COMP%] {\n    width: 500px;\n    padding-left: 15px;\n    padding-right: 15px;\n  }\n}\n\n@media only screen and (max-width: 654px) and (min-width: 407px) {\n  .main[_ngcontent-%COMP%] {\n    font-size: 7px;\n    width: 300px;\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n}\n\n  .egret-navy .mat-progress-bar-buffer {\n  background-color: white;\n}\n\n  .egret-navy .mat-progress-bar-fill::after {\n  background-color: #857DCF;\n}\n\n#clr[_ngcontent-%COMP%] {\n  height: 160px;\n  width: 180px;\n  margin-bottom: 30px;\n}\n\n#fclr[_ngcontent-%COMP%] {\n  color: lightgray;\n  font-size: 90px;\n}\n\n.scanDiv[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n\n#scan[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n\n#proceedDiv[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n#progressBarDiv[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\n#file[_ngcontent-%COMP%] {\n  height: 10px;\n  color: white;\n  border-radius: 10px;\n  border: 1px solid grey;\n}\n\n#thumb[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  flex-flow: nowrap;\n  margin-bottom: 20px;\n}\n\n#fingerprintSpan[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n  font-size: 12px;\n  margin-bottom: 4px;\n}\n\nmat-icon[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  height: 7px;\n  width: 7;\n  width: 7px;\n  display: flex;\n  justify-content: flex-end;\n  top: 0px;\n  left: 0px;\n  margin-right: -6%;\n  margin-top: -3%;\n}\n\n.line[_ngcontent-%COMP%] {\n  border: thick;\n  width: 70px;\n  \n  border-block-width: revert;\n  \n  background-color: #FE6700;\n  border: 1px solid #FE6700;\n  border-radius: 5px;\n  \n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY3V0b21lci1maW5nZXItcHJpbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxVQUFTO0VBRVQsbUJBQW1CO0VBQ3BCLHlCQUFtQztFQUNuQyxZQUFZO0FBRGY7O0FBS0E7RUFDSSxZQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUZ2Qjs7QUFJQTtFQUVJLFdBQVc7RUFDWCxZQUFZO0FBRmhCOztBQU9BO0VBRUEsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUxsQjs7QUFPQTtFQUNJLGtCQUFrQjtFQUNsQixjQUFjO0VBR2QsdUJBQXVCO0FBTjNCOztBQVFDO0VBQ0csa0JBQWtCO0VBRWpCLHVCQUF1QjtFQUN2QixjQUFjO0FBTm5COztBQVNDO0VBQ0ksaUJBQWlCO0VBQ2pCLGNBQWM7QUFObkI7O0FBUUM7RUFDSSw0QkFBMkI7RUFDM0IscUJBQXFCO0VBQ3JCLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLHNCQUFzQjtBQUwzQjs7QUFPQztFQUNJLG9CQUFvQjtFQUNwQix3QkFBd0I7QUFKN0I7O0FBTUM7RUFDSSxZQUFZO0FBSGpCOztBQU1BO0VBQ0ksZUFBZTtFQUNmLGNBQWU7QUFIbkI7O0FBTUE7RUFDSSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBSHhCOztBQU1BO0VBQ0ksdUJBQXVCO0FBSDNCOztBQUtBO0VBQ0M7SUFDRyxZQUFXO0lBQ1YsWUFBWTtFQUZmO0VBSUQ7SUFDSSxjQUFjO0VBRmpCO0FBQ0Y7O0FBSUE7RUFDSTtJQUNJLGVBQWM7RUFEcEI7QUFDRjs7QUFHQTtFQUNJO0lBQ0ksWUFBVztJQUNYLGtCQUFrQjtJQUN0QixtQkFBbUI7RUFBckI7QUFDRjs7QUFLRztFQUNDO0lBQ0ksY0FBYztJQUNkLFlBQVc7SUFDWCxpQkFBaUI7SUFDckIsa0JBQWtCO0VBRnBCO0FBQ0Y7O0FBT0E7RUFFSSx1QkFBdUI7QUFMM0I7O0FBT0E7RUFDSSx5QkFBeUI7QUFKN0I7O0FBTUE7RUFDSSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtBQUh2Qjs7QUFLQTtFQUNJLGdCQUFlO0VBQ2YsZUFBYztBQUZsQjs7QUFJQTtFQUNJLGdCQUNKO0FBRkE7O0FBR0E7RUFDSSxlQUFjO0FBQWxCOztBQUVBO0VBQ0csZ0JBQ0g7QUFBQTs7QUFDQTtFQUNJLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFFdkI7O0FBQUE7RUFDSSxZQUFXO0VBQUMsWUFBWTtFQUN4QixtQkFBbUI7RUFDbkIsc0JBQXFCO0FBSXpCOztBQURBO0VBQ0ksOEJBQThCO0VBQzlCLGlCQUFpQjtFQUFDLG1CQUFtQjtBQUt6Qzs7QUFIQTtFQUNJLGlCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBYztFQUFDLGtCQUFrQjtBQU9yQzs7QUFMQTtFQUNJLDRCQUE0QjtFQUc1QixXQUFXO0VBQ1gsUUFBUTtFQUNSLFVBQVU7RUFDVixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFFBQVE7RUFDUixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGVBQWU7QUFNbkI7O0FBSkE7RUFDSSxhQUFhO0VBQ2IsV0FBVztFQUNYLHlCQUFBO0VBQ0EsMEJBQTBCO0VBRzFCLGlCQUFBO0VBQ0EseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIscUJBQUE7RUFDQSxtQkFBbUI7QUFLdkIiLCJmaWxlIjoiY3V0b21lci1maW5nZXItcHJpbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuXHJcbntcclxuICAgIHdpZHRoOjMwJTtcclxuICAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCAxNTIsIDI0Nik7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcblxyXG59XHJcbi5tYWlue1xyXG4gICAgd2lkdGg6NjAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG59XHJcbnByb2dyZXNzXHJcbntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgLy8gYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkyZGVnLCAjREQ5MzkzIDAlLCAjNDU2RUZDIDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxufVxyXG5cclxuXHJcbmltZ3tcclxuICBcclxubWFyZ2luLXRvcDogMzBweDtcclxuYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi5jb250ZW50Q2xhc3N7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICBjb2xvcjogI2ExYTFhMTtcclxuICAgICAvLyBjb2xvcjogI0I3QjdCNztcclxuICAgICAvLyBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuIH1cclxuIC50aXRsZUNsYXNze1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgLy8gIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICBjb2xvcjogIzYxNjE2MTtcclxuICAgICAvLyBjb2xvcjogIzg4ODg4ODtcclxuIH1cclxuIC5jbG9zZUljb25DbGFzc3tcclxuICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgICBjb2xvcjogIzk5OTk5OTtcclxuIH1cclxuIC5idG5TY2FuQ2xhc3N7XHJcbiAgICAgbGluZS1oZWlnaHQ6MzBweCAhaW1wb3J0YW50O1xyXG4gICAgIGJvcmRlci1jb2xvcjogIzQ1NkVGRTtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU2RUZFICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgIGhlaWdodDogMzVweDtcclxuICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiB9XHJcbiAuY29udGVudERpdntcclxuICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICBwYWRkaW5nOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAuZGl2VGl0bGVDbGFzc3tcclxuICAgICBoZWlnaHQ6IDYwcHg7XHJcbiB9XHJcblxyXG4uZmluZ2VyYWxnbntcclxuICAgIGZvbnQtc2l6ZTogODBweDsgXHJcbiAgICBjb2xvcjogIzZFQkRGOSA7XHJcbn1cclxuXHJcbi5pbWFnZXNEaXZ7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uaC0xMDB7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOiA0MDZweCkge1xyXG4gLm1haW57XHJcbiAgICB3aWR0aDoyMDBweDtcclxuICAgICBwYWRkaW5nOiA1cHg7XHJcbiB9XHJcbiAubGFiZWxze1xyXG4gICAgIGZvbnQtc2l6ZTogN3B4O1xyXG4gfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzkxcHgpIGFuZCAobWluLXdpZHRoOiA2NTVweCl7XHJcbiAgICAubGFiZWxze1xyXG4gICAgICAgIGZvbnQtc2l6ZToxMHB4O1xyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzkwcHgpIGFuZCAobWluLXdpZHRoOiA2NTVweCkge1xyXG4gICAgLm1haW57XHJcbiAgICAgICAgd2lkdGg6NTAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIH1cclxuICAgIC8vIC5sYWJlbHN7XHJcbiAgICAvLyAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICAvLyB9XHJcbiAgIH1cclxuICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTRweCkgYW5kIChtaW4td2lkdGg6NDA3cHgpIHtcclxuICAgIC5tYWlue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogN3B4O1xyXG4gICAgICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgfVxyXG4gICAgLy8gLmxhYmVsc3tcclxuICAgIC8vICAgICBmb250LXNpemU6IDhweDtcclxuICAgIC8vIH1cclxuICAgfVxyXG46Om5nLWRlZXAgLmVncmV0LW5hdnkgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcclxuICAgIC8vYmFja2dyb3VuZC1jb2xvcjogI2IzZDlmZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbjo6bmctZGVlcCAuZWdyZXQtbmF2eSAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODU3RENGO1xyXG59XHJcbiNjbHJ7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG4jZmNscntcclxuICAgIGNvbG9yOmxpZ2h0Z3JheTtcclxuICAgIGZvbnQtc2l6ZTo5MHB4O1xyXG59XHJcbi5zY2FuRGl2e1xyXG4gICAgbWFyZ2luLXRvcDoyMHB4XHJcbn1cclxuI3NjYW57XHJcbiAgICBmb250LXNpemU6MThweDtcclxufVxyXG4jcHJvY2VlZERpdntcclxuICAgbWFyZ2luLXRvcDogMTVweFxyXG59XHJcbiNwcm9ncmVzc0JhckRpdntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiNmaWxle1xyXG4gICAgaGVpZ2h0OjEwcHg7Y29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgZ3JleTtcclxufVxyXG5cclxuI3RodW1ie1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZmxleC1mbG93OiBub3dyYXA7bWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4jZmluZ2VycHJpbnRTcGFue1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZToxMnB4O21hcmdpbi1ib3R0b206IDRweDtcclxufVxyXG5tYXQtaWNvbntcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAvLyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvLyBmaWxsOiBjdXJyZW50Q29sb3I7XHJcbiAgICBoZWlnaHQ6IDdweDtcclxuICAgIHdpZHRoOiA3O1xyXG4gICAgd2lkdGg6IDdweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC02JTtcclxuICAgIG1hcmdpbi10b3A6IC0zJTtcclxufVxyXG4ubGluZSB7XHJcbiAgICBib3JkZXI6IHRoaWNrOyBcclxuICAgIHdpZHRoOiA3MHB4O1xyXG4gICAgLyogYm9yZGVyLXN0eWxlOiBzb2xpZDsgKi9cclxuICAgIGJvcmRlci1ibG9jay13aWR0aDogcmV2ZXJ0O1xyXG4gICAgLy8gY29sb3I6IGJsdWU7XHJcbiAgICAvLyBjb2xvcjogIzY5ODhmNjtcclxuICAgIC8qIHdpZHRoOiA0MHB4OyAqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZFNjcwMDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNGRTY3MDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAvKiBtYXJnaW46IGluaXRpYWw7ICovXHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH1cclxuLy8gIDo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhci1maWxsOjphZnRlciB7XHJcbi8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOndoaXRlO1xyXG4vLyB9XHJcblxyXG4vLyA6Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcclxuLy8gICAgIGJhY2tncm91bmQ6ICNFNEU4RUI7XHJcbi8vIH1cclxuXHJcbi8vIDo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhciB7XHJcbi8vICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbi8vIH1cclxuLy8gcHJvZ3Jlc3M6Oi13ZWJraXQtcHJvZ3Jlc3MtdmFsdWUge2JhY2tncm91bmQtY29sb3I6IHJnYigxODQsIDY5LCA2OSkgIWltcG9ydGFudDt9XHJcblxyXG4vLyB9XHJcbi8vIEBtZWRpYShtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbi8vICAgICAubWFpbntcclxuLy8gICAgICAgIHdpZHRoOjIwMHB4O1xyXG4vLyAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuLy8gICAgIH1cclxuLy8gICAgIC5sYWJlbHN7XHJcbi8vICAgICAgICAgZm9udC1zaXplOiA3cHg7XHJcbi8vICAgICB9XHJcbi8vICAgIH0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CutomerFingerPrintComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-cutomer-finger-print',
            templateUrl: './cutomer-finger-print.component.html',
            styleUrls: ['./cutomer-finger-print.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }, {
            type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_4__["LocalStoreService"]
          }, {
            type: app_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_3__["FingerPrintCaptureService"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
          }];
        }, null);
      })();
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
      var _this24 = this;

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
                        return w[action].apply(_this24, [].concat(_toConsumableArray(payload), [job.id]));

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
    "POE1":
    /*!***********************************************************************!*\
      !*** ./src/app/views/others/kyc-iris-scan/kyc-iris-scan.component.ts ***!
      \***********************************************************************/

    /*! exports provided: KycIrisScanComponent */

    /***/
    function POE1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KycIrisScanComponent", function () {
        return KycIrisScanComponent;
      });
      /* harmony import */


      var _shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../../shared/services/finger-print-capture.service */
      "rp8y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! app/shared/services/api.service */
      "nm5K");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      var KycIrisScanComponent = /*#__PURE__*/function () {
        function KycIrisScanComponent(dialogRef, snack, data, fingerPrintService) {
          _classCallCheck(this, KycIrisScanComponent);

          this.dialogRef = dialogRef;
          this.snack = snack;
          this.data = data;
          this.fingerPrintService = fingerPrintService;
          this.isScanned = false;
        }

        _createClass(KycIrisScanComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.customerId = sessionStorage.getItem('customer_id');
            this.refreshedCustId = this.data.customerId;
            console.log('customer id :: ', this.customerId, this.refreshedCustId);
          }
        }, {
          key: "closeClick",
          value: function closeClick(isScanned) {
            console.log("close click"); // [routerLink]="['/others/kyc']" 

            this.dialogRef.close({
              message: 'Confirm',
              isScanned: isScanned
            }); // this.router.navigateByUrl('/others/kyc'); 
          }
        }, {
          key: "scan",
          value: function scan() {
            var obj = {
              fileUrl: "".concat(app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/rest/upload/downloadDocs/?fileName=iris_biometric.jpg")
            };
            this.saveBiometric(obj, 'IRIS', this.refreshedCustId);
          }
        }, {
          key: "saveBiometric",
          value: function saveBiometric(capFingerPrint, fingerName, cId) {
            var _this25 = this;

            console.log('save biometric');
            var screen = 'kyc-verification';
            this.fingerPrintService.saveBiometric(capFingerPrint, fingerName, cId, screen).subscribe(function (data) {
              console.log("after save ", data);
              _this25.isScanned = true; // this.cdr.markForCheck();

              _this25.snack.open('Captured ' + fingerName + ' Finger', 'OK', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });
            });
          }
        }]);

        return KycIrisScanComponent;
      }();

      KycIrisScanComponent.ɵfac = function KycIrisScanComponent_Factory(t) {
        return new (t || KycIrisScanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_0__["FingerPrintCaptureService"]));
      };

      KycIrisScanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: KycIrisScanComponent,
        selectors: [["app-kyc-iris-scan"]],
        decls: 17,
        vars: 0,
        consts: [["fxLayout", "column wrap", 1, "main"], ["fxFlex", "100", "fxLayoutAlign", "end stretch"], ["id", "close", 1, "mat-18", 3, "click"], ["fxFlex", "100", "fxLayoutAlign", "center stretch", "fxLayoutGap", "space-around", "id", "scanDiv"], ["id", "scan"], ["fxFlex", "50", "fxLayoutAlign", "center stretch", "id", "proceedDiv"], ["id", "hold", 1, "text-muted"], ["fxFlex", "50", "fxLayoutAlign", "center stretch"], ["id", "clr"], ["src", "assets/images/iris.PNG", "id", "fClr1"], ["mat-raised-button", "", 1, "btn", 3, "click"]],
        template: function KycIrisScanComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycIrisScanComponent_Template_mat_icon_click_2_listener() {
              return ctx.closeClick(ctx.isScanned);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Scan your IRIS to complete the verification");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Hold the device still,Look at the camera!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-card", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycIrisScanComponent_Template_button_click_15_listener() {
              return ctx.scan();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "SCAN");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]],
        styles: [".btn[_ngcontent-%COMP%] {\n  width: 30%;\n  border-radius: 20px;\n  background-color: #3298f6;\n  color: white;\n}\n\n.main[_ngcontent-%COMP%] {\n  width: 600px;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n\nprogress[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20px;\n}\n\n#fClr1[_ngcontent-%COMP%] {\n  margin-left: 15%;\n  margin-top: 12px;\n  border-radius: 5px;\n  height: 100px;\n}\n\n.contentClass[_ngcontent-%COMP%] {\n  font-size: smaller;\n  color: #a1a1a1;\n  font-family: sans-serif;\n}\n\n.titleClass[_ngcontent-%COMP%] {\n  font-size: x-large;\n  font-family: sans-serif;\n  color: #616161;\n}\n\n.closeIconClass[_ngcontent-%COMP%] {\n  font-size: medium;\n  color: #999999;\n}\n\n.btnScanClass[_ngcontent-%COMP%] {\n  line-height: 30px !important;\n  border-color: #456EFE;\n  background-color: #456EFE !important;\n  color: white;\n  border-radius: 20px;\n  width: 160px;\n  height: 35px;\n  font-size: small;\n  font-family: monospace;\n}\n\n.contentDiv[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n  padding: 20px !important;\n}\n\n.divTitleClass[_ngcontent-%COMP%] {\n  height: 60px;\n}\n\n.fingeralgn[_ngcontent-%COMP%] {\n  font-size: 80px;\n  color: #6EBDF9;\n}\n\n.imagesDiv[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  padding-bottom: 20px;\n}\n\n.h-100[_ngcontent-%COMP%] {\n  height: 100% !important;\n}\n\n#clr[_ngcontent-%COMP%] {\n  height: 160px;\n  width: 180px;\n  margin-bottom: 30px;\n}\n\n#fclr[_ngcontent-%COMP%] {\n  color: lightgray;\n  font-size: 60px;\n}\n\n.scanDiv[_ngcontent-%COMP%] {\n  margin-top: 7%;\n}\n\n#scan[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-top: 7%;\n  margin-bottom: 3%;\n}\n\n#proceedDiv[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  margin-bottom: 2%;\n  opacity: 50%;\n}\n\n#progressBarDiv[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\n#file[_ngcontent-%COMP%] {\n  height: 10px;\n  color: white;\n  border-radius: 10px;\n  border: 1px solid grey;\n}\n\n#thumb[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  flex-flow: nowrap;\n  margin-bottom: 20px;\n}\n\n#fingerprintSpan[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n  font-size: 12px;\n  margin-bottom: 4px;\n}\n\n#close[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  height: 4px;\n  width: 4px;\n  display: flex;\n  justify-content: flex-end;\n  top: 0px;\n  left: 0px;\n  margin-right: -6%;\n  margin-top: -3%;\n}\n\n.line[_ngcontent-%COMP%] {\n  border: thick;\n  width: 70px;\n  \n  border-block-width: revert;\n  \n  background-color: #FE6700;\n  border: 1px solid #FE6700;\n  border-radius: 5px;\n  \n  margin-bottom: 10px;\n}\n\n.hold[_ngcontent-%COMP%] {\n  margin-top: 3%;\n  opacity: 60%;\n}\n\n@media only screen and (max-width: 791px) and (min-width: 529px) {\n  .main[_ngcontent-%COMP%] {\n    width: 400px;\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n}\n\n@media only screen and (max-width: 528px) and (min-width: 200px) {\n  .main[_ngcontent-%COMP%] {\n    width: 200px;\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxca3ljLWlyaXMtc2Nhbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFVBQVM7RUFFVCxtQkFBbUI7RUFDcEIseUJBQW1DO0VBQ25DLFlBQVk7QUFEZjs7QUFLQTtFQUNLLFlBQVc7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBRnZCOztBQUlBO0VBRUksV0FBVztFQUNYLFlBQVk7QUFGaEI7O0FBT0E7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ3BCLGtCQUFrQjtFQUNsQixhQUFhO0FBSmI7O0FBTUE7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYztFQUdkLHVCQUF1QjtBQUwzQjs7QUFPQztFQUNHLGtCQUFrQjtFQUVqQix1QkFBdUI7RUFDdkIsY0FBYztBQUxuQjs7QUFRQztFQUNJLGlCQUFpQjtFQUNqQixjQUFjO0FBTG5COztBQU9DO0VBQ0ksNEJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQixvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFKM0I7O0FBTUM7RUFDSSxvQkFBb0I7RUFDcEIsd0JBQXdCO0FBSDdCOztBQUtDO0VBQ0ksWUFBWTtBQUZqQjs7QUFLQTtFQUNJLGVBQWU7RUFDZixjQUFlO0FBRm5COztBQUtBO0VBQ0ksaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUZ4Qjs7QUFLQTtFQUNJLHVCQUF1QjtBQUYzQjs7QUFJQTtFQUNJLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0FBRHZCOztBQUdBO0VBQ0ksZ0JBQWU7RUFDZixlQUFjO0FBQWxCOztBQUVBO0VBQ0ksY0FBYTtBQUNqQjs7QUFDQTtFQUNJLGVBQWM7RUFDZCxjQUFhO0VBQ2IsaUJBQWdCO0FBRXBCOztBQUNBO0VBQ0csY0FBYztFQUNkLGlCQUFpQjtFQUNqQixZQUFZO0FBRWY7O0FBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBR3ZCOztBQURBO0VBQ0ksWUFBVztFQUFDLFlBQVk7RUFDeEIsbUJBQW1CO0VBQ25CLHNCQUFxQjtBQUt6Qjs7QUFGQTtFQUNJLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFBQyxtQkFBbUI7QUFNekM7O0FBSkE7RUFDSSxpQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWM7RUFBQyxrQkFBa0I7QUFRckM7O0FBTkE7RUFDSSw0QkFBNEI7RUFHNUIsV0FBVztFQUNYLFVBQVU7RUFDVixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFFBQVE7RUFDUixTQUFTO0VBR1QsaUJBQWlCO0VBQ2pCLGVBQWU7QUFLbkI7O0FBSEE7RUFDSSxhQUFhO0VBQ2IsV0FBVztFQUNYLHlCQUFBO0VBQ0EsMEJBQTBCO0VBRzFCLGlCQUFBO0VBQ0EseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIscUJBQUE7RUFDQSxtQkFBbUI7QUFJdkI7O0FBRUE7RUFDSSxjQUFhO0VBQ2IsWUFBVztBQUNmOztBQUVBO0VBQ0k7SUFDSSxZQUFXO0lBRVosa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUF4QjtBQUNGOztBQUVBO0VBQ0k7SUFDSSxZQUFXO0lBRVosaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUF2QjtBQUNGIiwiZmlsZSI6Imt5Yy1pcmlzLXNjYW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuXHJcbntcclxuICAgIHdpZHRoOjMwJTtcclxuICAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCAxNTIsIDI0Nik7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcblxyXG59XHJcbi5tYWlue1xyXG4gICAgIHdpZHRoOjYwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcclxufVxyXG5wcm9ncmVzc1xyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIC8vIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MmRlZywgI0REOTM5MyAwJSwgIzQ1NkVGQyAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbn1cclxuXHJcblxyXG4jZkNscjF7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuYm9yZGVyLXJhZGl1czogNXB4O1xyXG5oZWlnaHQ6IDEwMHB4O1xyXG59XHJcbi5jb250ZW50Q2xhc3N7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICBjb2xvcjogI2ExYTFhMTtcclxuICAgICAvLyBjb2xvcjogI0I3QjdCNztcclxuICAgICAvLyBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuIH1cclxuIC50aXRsZUNsYXNze1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgLy8gIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICBjb2xvcjogIzYxNjE2MTtcclxuICAgICAvLyBjb2xvcjogIzg4ODg4ODtcclxuIH1cclxuIC5jbG9zZUljb25DbGFzc3tcclxuICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgICBjb2xvcjogIzk5OTk5OTtcclxuIH1cclxuIC5idG5TY2FuQ2xhc3N7XHJcbiAgICAgbGluZS1oZWlnaHQ6MzBweCAhaW1wb3J0YW50O1xyXG4gICAgIGJvcmRlci1jb2xvcjogIzQ1NkVGRTtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU2RUZFICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgIGhlaWdodDogMzVweDtcclxuICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiB9XHJcbiAuY29udGVudERpdntcclxuICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICBwYWRkaW5nOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAuZGl2VGl0bGVDbGFzc3tcclxuICAgICBoZWlnaHQ6IDYwcHg7XHJcbiB9XHJcblxyXG4uZmluZ2VyYWxnbntcclxuICAgIGZvbnQtc2l6ZTogODBweDsgXHJcbiAgICBjb2xvcjogIzZFQkRGOSA7XHJcbn1cclxuXHJcbi5pbWFnZXNEaXZ7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uaC0xMDB7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4jY2xye1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuI2ZjbHJ7XHJcbiAgICBjb2xvcjpsaWdodGdyYXk7XHJcbiAgICBmb250LXNpemU6NjBweDtcclxufVxyXG4uc2NhbkRpdntcclxuICAgIG1hcmdpbi10b3A6NyU7XHJcbn1cclxuI3NjYW57XHJcbiAgICBmb250LXNpemU6MThweDtcclxuICAgIG1hcmdpbi10b3A6NyU7XHJcbiAgICBtYXJnaW4tYm90dG9tOjMlO1xyXG5cclxufVxyXG4jcHJvY2VlZERpdntcclxuICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICBvcGFjaXR5OiA1MCU7XHJcbn1cclxuI3Byb2dyZXNzQmFyRGl2e1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuI2ZpbGV7XHJcbiAgICBoZWlnaHQ6MTBweDtjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCBncmV5O1xyXG59XHJcblxyXG4jdGh1bWJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LWZsb3c6IG5vd3JhcDttYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbiNmaW5nZXJwcmludFNwYW57XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOjEycHg7bWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcbiNjbG9zZXtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAvLyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvLyBmaWxsOiBjdXJyZW50Q29sb3I7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIHdpZHRoOiA0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgLy8gbWFyZ2luLXJpZ2h0OiAtNCUgIWltcG9ydGFudDtcclxuICAgIC8vIG1hcmdpbi10b3A6IC0zJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNiU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMyU7XHJcbn1cclxuLmxpbmUge1xyXG4gICAgYm9yZGVyOiB0aGljazsgXHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIC8qIGJvcmRlci1zdHlsZTogc29saWQ7ICovXHJcbiAgICBib3JkZXItYmxvY2std2lkdGg6IHJldmVydDtcclxuICAgIC8vIGNvbG9yOiBibHVlO1xyXG4gICAgLy8gY29sb3I6ICM2OTg4ZjY7XHJcbiAgICAvKiB3aWR0aDogNDBweDsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRTY3MDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRkU2NzAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLyogbWFyZ2luOiBpbml0aWFsOyAqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbi8vICA6Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuXHJcblxyXG4uaG9sZHtcclxuICAgIG1hcmdpbi10b3A6MyU7XHJcbiAgICBvcGFjaXR5OjYwJTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OTFweCkgYW5kIChtaW4td2lkdGg6IDUyOXB4KXtcclxuICAgIC5tYWlue1xyXG4gICAgICAgIHdpZHRoOjQwMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTI4cHgpIGFuZCAobWluLXdpZHRoOiAyMDBweCl7XHJcbiAgICAubWFpbntcclxuICAgICAgICB3aWR0aDoyMDBweDtcclxuICAgICAgICBcclxuICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICB9XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](KycIrisScanComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-kyc-iris-scan',
            templateUrl: './kyc-iris-scan.component.html',
            styleUrls: ['./kyc-iris-scan.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_0__["FingerPrintCaptureService"]
          }];
        }, null);
      })();
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


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_select__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/material/select */
      "ZTz/");
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/material/core */
      "UhP/");

      var _c0 = ["fileInput"];

      function KycBasicInformationComponent_table_8_mat_option_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var biometric_r10 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", biometric_r10)("disabled", ctx_r3.isDocumentOptionDisabled2(biometric_r10));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", biometric_r10, " ");
        }
      }

      function KycBasicInformationComponent_table_8_mat_error_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-error");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please Select Document Type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }
      }

      function KycBasicInformationComponent_table_8_div_15_mat_card_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](item_r12.fingerName);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "data:image/jpg;base64," + item_r12.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function KycBasicInformationComponent_table_8_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, KycBasicInformationComponent_table_8_div_15_mat_card_1_Template, 4, 2, "mat-card", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.biometricData);
        }
      }

      function KycBasicInformationComponent_table_8_div_16_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/images/no-image.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function KycBasicInformationComponent_table_8_div_16_ng_template_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 29);
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r16.imageURLBioScan, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function KycBasicInformationComponent_table_8_div_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, KycBasicInformationComponent_table_8_div_16_div_1_Template, 2, 1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, KycBasicInformationComponent_table_8_div_16_ng_template_2_Template, 1, 1, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);

          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r6.imageURLBioScan == "not_available")("ngIfElse", _r15);
        }
      }

      function KycBasicInformationComponent_table_8_div_17_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/images/no-image.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function KycBasicInformationComponent_table_8_div_17_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 29);
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r19.imageURLIrish, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function KycBasicInformationComponent_table_8_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, KycBasicInformationComponent_table_8_div_17_div_2_Template, 2, 1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, KycBasicInformationComponent_table_8_div_17_ng_template_3_Template, 1, 1, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r7.imageURLIrish == "not_available" || ctx_r7.imageURLIrish == null)("ngIfElse", _r18);
        }
      }

      function KycBasicInformationComponent_table_8_div_18_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/images/no-image.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function KycBasicInformationComponent_table_8_div_18_ng_template_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 29);
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx_r22.imageURLFace, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function KycBasicInformationComponent_table_8_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, KycBasicInformationComponent_table_8_div_18_div_2_Template, 2, 1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, KycBasicInformationComponent_table_8_div_18_ng_template_3_Template, 1, 1, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4);

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r8.imageURLFace == "not_available" || ctx_r8.imageURLFace == null)("ngIfElse", _r21);
        }
      }

      function KycBasicInformationComponent_table_8_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", "assets/images/no-image.jpg", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        }
      }

      function KycBasicInformationComponent_table_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "table", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "tbody", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-select", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, KycBasicInformationComponent_table_8_mat_option_6_Template, 2, 3, "mat-option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, KycBasicInformationComponent_table_8_mat_error_7_Template, 2, 0, "mat-error", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycBasicInformationComponent_table_8_Template_button_click_9_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

            var item_r1 = ctx.$implicit;

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r23.openDialogForType(item_r1.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Scan");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycBasicInformationComponent_table_8_Template_button_click_11_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r24);

            var item_r1 = ctx.$implicit;
            var i_r2 = ctx.index;

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r25.deleteBioMetric(item_r1.value, i_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-icon", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "td", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, KycBasicInformationComponent_table_8_div_15_Template, 2, 1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, KycBasicInformationComponent_table_8_div_16_Template, 4, 2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, KycBasicInformationComponent_table_8_div_17_Template, 5, 2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, KycBasicInformationComponent_table_8_div_18_Template, 5, 2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, KycBasicInformationComponent_table_8_div_19_Template, 3, 1, "div", 17);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.biometrics_Type);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", item_r1.controls.bioDocumentType.touched && !item_r1.controls.bioDocumentType.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](8);

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

      var KycBasicInformationComponent = /*#__PURE__*/function () {
        function KycBasicInformationComponent(http, api, dialog, router, snack, fb, fingerPrintService, shareDataService, ls) {
          var _this26 = this;

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
          this.disableFinish = true;
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
            return _this26.selectedOptions2.includes(value);
          };
        }

        _createClass(KycBasicInformationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this27 = this;

            // this.kycRef = sessionStorage.getItem("kyc_reference");
            //
            this.api.getKycRef().subscribe(function (resp) {
              _this27.assignKyc(resp.kycReference);
            });
            this.api.getNewUserInfo().subscribe(function (info) {
              _this27.updateUserInfo = info;
            });
            this.api.getKycDataFetchedInfo().subscribe(function (data) {
              console.log('data fetch resp :: ', data);
              _this27.kycVerificationForm = _this27.fb.group({
                documentsList: _this27.fb.array([_this27.createItem()]),
                biometricList: data === 'DATA FETCH' ? _this27.fb.array([]) : _this27.fb.array([_this27.createBioItem()]),
                id: [""],
                upload: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
              });

              if (data === 'DATA FETCH') {
                _this27.dataFetched = true;
                _this27.dataFetchedValue = data;
              } else {
                _this27.dataFetched = false; // this.loadBioDefault(1);
              }
            });
            this.arrayForm = this.fb.group({
              rows: this.fb.array([])
            });
            this.initGroup();
            this.getDoc();
            this.disableNext = true;
            this.shareDataService.getCustomerId.subscribe(function (cId) {
              if (cId != null) {
                _this27.refreshCustomerId = cId;

                _this27.getAdditionalDocuments(cId);
              }
            });
            this.customerId = this.ls.getItem('customer_id');
            this.kycVerificationForm.valueChanges.subscribe(function (data) {
              console.log('value change data:: ', data);

              if (data.biometricList.length > 0) {
                _this27.disableFinish = false;
                _this27.selectedOptions2 = [];
                data.biometricList.forEach(function (element, index) {
                  console.log('index :: ', index); // if(element.id === '' || element.id === ""){
                  //   data.biometricList.splice(0,1);
                  // }

                  _this27.selectedOptions2.push(element.bioDocumentType);
                });
              }

              if (data.biometricList.length == 3) {
                _this27.disableAddAndDelete = true;
              } else {
                _this27.disableAddAndDelete = false;
              }
            }); // this.loadBioDefault(1);

            console.log('this.kycVerificationForm :: ', this.kycVerificationForm);
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
            var _this28 = this;

            for (var key in this.document_type) {
              var bioName;

              if (Object.prototype.hasOwnProperty.call(this.document_type, key)) {
                var element = this.document_type[key];
                console.log('bio doc :: ', element, key, customerId);
                this.api.getCustomerDocuments(customerId, element).subscribe(function (data) {
                  if (data != null) {
                    _this28.disableFinish = false;
                    console.log("data:: ", data);

                    if (data[0].documentType == 4 || data[0].documentType == 5) {
                      bioName = 'Fingerprint Scan';
                      _this28.imageURLBioScan = data[0].fileUrl;
                      _this28.biometricScan = true;
                    }

                    if (data[0].documentType == 11) {
                      bioName = 'Irish Scan';
                      _this28.imageURLIrish = data[0].fileUrl;
                      _this28.irisScan = true;
                    }

                    if (data[0].documentType == 12) {
                      bioName = 'Face Scan';
                      _this28.imageURLFace = data[0].fileUrl;
                      _this28.faceScan = true;
                    }

                    if (bioName != null && bioName != undefined) {
                      _this28.bioFetchDataBuild(data[0], bioName);

                      console.log('kyc :: ', _this28.kycVerificationForm);
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
            var _this29 = this;

            this.additionalDocs = this.kycVerificationForm.get('documentsList');
            console.log(this.additionalDocs);
            this.additionalDocs.removeAt(index);
            this.selectedOptions2.forEach(function (element, index) {
              if (element == report.documentType) {
                _this29.selectedOptions2.splice(index, 1);
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
            var _this30 = this;

            var deleteRecord = this.kycVerificationForm.get('biometricList');
            console.log(report, deleteRecord, index);
            deleteRecord.removeAt(index);
            this.imageURLIrish = '';
            this.imageURLFace = '';
            this.imageURLBioScan = '';
            this.api.deleteCustomerDoc(this.refreshCustomerId, report.id).subscribe(function (data) {
              console.log("data after delete", _this30.refreshCustomerId);
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
            var _this31 = this;

            console.log("------292--------- ", this.kycVerificationForm.value);
            console.log("bioDocumentType :: ", data.bioDocumentType); // this.irisScan = false;
            // this.faceScan = false;
            // this.biometricScan=false;

            if (data.bioDocumentType == "Fingerprint Scan") {
              console.log('inside biometric');
              var dialogRef = this.dialog.open(_cutomer_finger_print_cutomer_finger_print_component__WEBPACK_IMPORTED_MODULE_6__["CutomerFingerPrintComponent"], {
                data: {
                  bioData: this.biometricData,
                  customerId: this.refreshCustomerId
                },
                disableClose: true
              });
              dialogRef.afterClosed().subscribe(function (submit) {
                console.log('submit :: ', submit);
                _this31.biometricData = submit.data;
                console.log('this.biometricData :: ', _this31.biometricData);

                if (_this31.biometricData.length > 0) {
                  _this31.diaplayBioCard = true;
                  _this31.biometricScan = false;
                } else {
                  if (submit.isScanned) {
                    _this31.biometricScan = true;
                    _this31.imageURLBioScan = _this31.ls.getItem('imageURLBio');
                    _this31.diaplayBioCard = false;
                  }
                }
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
                  _this31.irisScan = true;
                  _this31.imageURLIrish = "".concat(app_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_13__["API_URL"], "/rest/upload/downloadDocs/?fileName=iris_biometric.jpg");
                } else {
                  _this31.irisScan = false;
                  _this31.imageURLIrish = '';
                }
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
                  _this31.faceScan = true;
                  _this31.imageURLFace = "".concat(app_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_13__["API_URL"], "/rest/upload/downloadDocs/?fileName=face_biometric.jpg");
                } else {
                  _this31.imageURLFace = '';
                  _this31.faceScan = false;
                }
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
                  _this31.eScan = true;
                } else {
                  _this31.eScan = false;
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
            this.kycVerificationForm.reset();
            this.disableFinish = true;
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
          }
        }, {
          key: "changeValue2",
          value: function changeValue2(value, index) {
            var _this32 = this;

            console.log('value :: ', value, ' index:: ', index);

            if (this.DocumentsName[index]) {
              this.selectedOptions2 = this.selectedOptions2.filter(function (val) {
                return val !== _this32.DocumentsName[index];
              });
            } // this.DocumentsName[index] = value;


            this.selectedOptions2.push(value); // this.kycVerificationForm.controls.documentType.setValue('');
            // this.arrayDocumentType = this.arrayDocumentType.filter(document => document !== value);
          }
        }, {
          key: "onFileChanged",
          value: function onFileChanged(event) {
            var _this33 = this;

            this.selectedFiles = event.target.files[0];
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]);

            reader.onload = function (event2) {
              _this33.imgUrl = reader.result;

              _this33.fun(event.target.files[0], _this33.selectedFiles);
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
            var _this34 = this;

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
                _this34.kycVerificationForm.get("upload").patchValue(true);

                _this34.snack.open("Document Uploaded!", "OK", {
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
            var _this35 = this;

            console.log("hitting in fun2", docName);
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
                console.log("in err");

                _this35.kycVerificationForm.get("upload").patchValue(true);

                _this35.snack.open("Document Uploaded!", "OK", {
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
            var _this36 = this;

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
              _this36.fileUrl = reader.result;
            };
          }
        }, {
          key: "onUpload1",
          value: function onUpload1(event, KycForm, index) {
            var _this37 = this;

            console.log("index", index);
            console.log(event);
            console.log(KycForm.documentsList[index].documentName);
            console.log(KycForm);
            var kyc = KycForm.documentsList[index].documentName;
            this.selectedFiles = event.target.files[0];
            this.fun2(event.target.files[0], this.selectedFiles, kyc, KycForm.documentType);
            console.log(this.selectedFiles);
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
              _this37.fileUrl = reader.result;
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
            var _this38 = this;

            this.fileToUpload = file.item(0); //Show image preview

            var reader = new FileReader();

            reader.onload = function (event) {
              _this38.imageUrl = event.target.result;
            };

            reader.readAsDataURL(this.fileToUpload);
          }
        }, {
          key: "uploadFile",
          value: function uploadFile(event) {
            var _this39 = this;

            var reader = new FileReader(); // HTML5 FileReader API

            reader.onload = function () {
              _this39.fileUrl = reader.result;

              _this39.kycVerificationForm.patchValue({
                file: reader.result
              });

              _this39.editFile = false; // this.removeUpload = true;
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
            var _this40 = this;

            this.dropVariableDoc = "document_type";
            this.docName = "document_name";
            this.bioName = "biometrics_Name";
            this.bioType = "biometrics_Type";
            this.api.getDropDownValues(this.dropVariableDoc).subscribe(function (data) {
              _this40.Documents = data;
            });
            this.api.getDropDownValues(this.docName).subscribe(function (resp) {
              _this40.DocumentsName = resp;
            });
            this.api.getDropDownValues(this.bioName).subscribe(function (response) {
              _this40.biometrics_Name = response;
            });
            this.api.getDropDownValues(this.bioType).subscribe(function (responseData) {
              _this40.biometrics_Type = responseData;
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
        decls: 20,
        vars: 4,
        consts: [[1, "matCard"], [3, "formGroup"], [1, "verificationHead"], [1, "line"], ["formArrayName", "biometricList", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", 3, "disabled", "click"], ["color", "primary"], [1, "button"], ["mat-button", "", 1, "Back", 3, "click"], ["mat-stroked-button", "", 1, "Next", 3, "disabled", "click"], ["formArrayName", "biometricList"], [3, "formGroupName"], ["fxLayoutGap", "10px"], [2, "width", "300px"], [1, "inputMatcardDoc"], ["formControlName", "bioDocumentType", "id", "bioName"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [4, "ngIf"], [2, "width", "300px", "margin", "20px", "padding", "30px"], ["mat-raised-button", "", 2, "color", "cornflowerblue", 3, "click"], ["mat-raised-button", "", 3, "click"], [1, "backIcon"], [3, "value", "disabled"], ["fxFlex", "30%", "id", "clr", "style", "margin: 0px; padding: 0px; margin-right: 10px;", 4, "ngFor", "ngForOf"], ["fxFlex", "30%", "id", "clr", 2, "margin", "0px", "padding", "0px", "margin-right", "10px"], [2, "margin", "00px", "padding", "0px", "text-align", "center"], [3, "src"], [4, "ngIf", "ngIfElse"], ["showAvatar", ""], ["alt", "", 1, "formImg", 3, "src"], ["fxFlex", "30%", "id", "clr", 2, "margin", "5px", "padding", "5px"], ["fxFlex", "30%", "id", "clr", 2, "margin", "0px", "padding", "0px"]],
        template: function KycBasicInformationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Verification");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "hr", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "mat-hint");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Biometric Verification*");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, KycBasicInformationComponent_table_8_Template, 20, 8, "table", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "table");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "button", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycBasicInformationComponent_Template_button_click_12_listener() {
              return ctx.addBioDocs();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "mat-icon", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "add");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycBasicInformationComponent_Template_button_click_16_listener() {
              return ctx.previous();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "Back");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycBasicInformationComponent_Template_button_click_18_listener() {
              return ctx.onNext(ctx.kycVerificationForm.value, ctx.arrayForm.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Finish");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.kycVerificationForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.kycVerificationForm.get("biometricList")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.disableAddAndDelete);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx.disableFinish);
          }
        },
        directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCard"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatHint"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_20__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_21__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupName"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__["DefaultLayoutGapDirective"], _angular_material_select__WEBPACK_IMPORTED_MODULE_23__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_24__["MatOption"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatError"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_22__["DefaultFlexDirective"]],
        styles: [".breadcrumb[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 40px;\n  width: 100%;\n  background-color: white;\n}\n\n.head[_ngcontent-%COMP%] {\n  background-color: white;\n}\n\n.fetchButton[_ngcontent-%COMP%] {\n  color: #456EFE;\n  font-family: 'Montserrat';\n  font-size: 12px;\n  text-decoration: underline;\n  padding-left: 10px;\n  padding-top: 15px;\n  cursor: pointer;\n}\n\nmat-hint[_ngcontent-%COMP%] {\n  font-size: 10px;\n}\n\n.app-container[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n.basic-container[_ngcontent-%COMP%] {\n  padding: 5px;\n}\n\n.main-head[_ngcontent-%COMP%] {\n  padding-left: 5%;\n  padding-top: 16px;\n  padding-bottom: 0px;\n}\n\nmat-tab-group[_ngcontent-%COMP%] {\n  padding-left: 2%;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  height: 60vh;\n  border: 1px solid black;\n  padding: 10px 5px;\n  box-sizing: border-box;\n}\n\n.flex-container[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 0 5px;\n  box-sizing: border-box;\n}\n\n.flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(2), .flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  margin-top: 5px;\n}\n\n.flex-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:nth-child(3) {\n  flex: 1;\n}\n\n.formField1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 50px;\n}\n\n.formField[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 120px;\n}\n\n.formField2[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  width: 100%;\n}\n\n.inputMatcard[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputGender[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatName[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatNew[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatLastName[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardDoc[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 21px;\n}\n\n.inputMatcardMail[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardMailAdd[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardMarritial[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardPrefix[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcard3[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcardAdd[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  margin-top: 5px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcard4[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  margin-top: 5px;\n  max-width: 208px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 13px;\n}\n\n.inputMatcard1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  padding: 12px;\n}\n\n.inputMatcard2[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  box-sizing: border-box;\n  margin-left: 0px;\n  width: 20px;\n}\n\n.mat-form-field-wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 0px;\n}\n\n.inputClass[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n  box-shadow: 0 3pt 6pt #00000029;\n  font-weight: bolder;\n}\n\n[_nghost-%COMP%]     div.mat-form-field-outline-start {\n  border-color: 0 !important;\n  border-width: 0px !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field-outline-gap {\n  border-color: 0 !important;\n  border-width: 0px !important;\n}\n\n[_nghost-%COMP%]     .mat-form-field-outline-end {\n  border-color: 0 !important;\n  border-width: 0px !important;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-top: -0.5%;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n}\n\n.form13[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.form1[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 50px;\n  flex-wrap: wrap;\n}\n\n.button[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 20px;\n  gap: 20px;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding-left: 11%;\n  padding-right: 14%;\n}\n\n.matCard[_ngcontent-%COMP%] {\n  max-width: 1600px;\n  align-items: center;\n  justify-content: center;\n  margin-left: 15%;\n  margin-right: 15%;\n  margin-top: 10px;\n  margin: 10px auto 0 auto;\n  margin-bottom: 3%;\n}\n\n.changeInput[_ngcontent-%COMP%] {\n  opacity: 0.0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n}\n\n.changeDiv[_ngcontent-%COMP%] {\n  position: relative;\n  height: 30px;\n  line-height: 30px;\n}\n\n.mat-form-field-flex[_ngcontent-%COMP%] {\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n}\n\n.flex-grow-1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  gap: 10px;\n}\n\n.alignment[_ngcontent-%COMP%] {\n  border-style: none !important;\n  outline: none;\n}\n\n#dob[_ngcontent-%COMP%] {\n  float: right;\n}\n\n#max-width[_ngcontent-%COMP%] {\n  max-width: 150px;\n}\n\n#drop-max-width[_ngcontent-%COMP%] {\n  width: 190px;\n}\n\n#radio[_ngcontent-%COMP%] {\n  margin-right: 20px;\n}\n\nradioGroup[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n#nationality[_ngcontent-%COMP%] {\n  width: 210px;\n}\n\nmat-label[_ngcontent-%COMP%] {\n  margin-right: 6%;\n}\n\n.change[_ngcontent-%COMP%] {\n  color: #2680EB;\n  text-align: center;\n  text-decoration: underline;\n}\n\n.backIcon[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.Back[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-left: -12%;\n  width: 150px;\n  background-color: gray;\n  color: white;\n  border-radius: 45px;\n}\n\n.Next[_ngcontent-%COMP%] {\n  margin: 12px 0px 12px 0px;\n  margin-right: -13%;\n  width: 150px;\n  background-color: #426af5;\n  color: white;\n  border-radius: 55px;\n}\n\nhr[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.line[_ngcontent-%COMP%] {\n  border: thick;\n  \n  \n  border-style: solid;\n  \n  border-block-width: unset;\n  color: blue;\n  color: #6988f6;\n  width: 40px;\n  border-radius: 5px;\n  margin: initial;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 80%;\n  color: #374664;\n  font-weight: 600;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n}\n\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus {\n  background: red;\n}\n\n.mat-tab-label-active[_ngcontent-%COMP%] {\n  color: green;\n}\n\n  .mat-tab-label-active {\n  color: #6988f6 !important;\n}\n\n.verification[_ngcontent-%COMP%] {\n  float: right;\n  color: #2a59e7;\n}\n\n  .mat-tab-group.mat-primary .mat-ink-bar {\n  background-color: #6988f6 !important;\n  height: 4px;\n}\n\n.container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\n\n.line[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.text[_ngcontent-%COMP%] {\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\nfigure[_ngcontent-%COMP%] {\n  display: block;\n  width: 50px;\n  height: 50px;\n  border-radius: 50px;\n  font-size: 25px;\n  text-align: center;\n  margin-right: 10px;\n  background: #fff;\n  line-height: 1.7em;\n}\n\nfigure[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 30px;\n  height: auto;\n}\n\n.formSectionContainer[_ngcontent-%COMP%] {\n  gap: 40px;\n  display: grid;\n  grid-template-columns: 200px auto;\n}\n\n@media (max-width: 768px) {\n  .formSectionContainer[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n  }\n}\n\n.formImg[_ngcontent-%COMP%] {\n  height: 100px !important;\n  width: 100px !important;\n  background-color: lightgrey;\n  border-radius: 50%;\n}\n\n.dropDown[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.mat-radio-button.mat-accent.mat-radio-checked[_ngcontent-%COMP%]   .mat-radio-outer-circle[_ngcontent-%COMP%] {\n  border-color: #4286f4 !important;\n}\n\n.mat-radio-button.mat-accent[_ngcontent-%COMP%]   .mat-radio-inner-circle[_ngcontent-%COMP%] {\n  color: #4286f4;\n  background-color: #4286f4;\n}\n\n.Upload[_ngcontent-%COMP%] {\n  vertical-align: c;\n  margin-top: 20px;\n  font-size: 12px;\n  text-decoration: underline;\n  color: #2680EB;\n}\n\n#row[_ngcontent-%COMP%] {\n  font-size: 9px;\n  color: #2680EB;\n}\n\n.span[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  width: 20% !important;\n}\n\n.span12[_ngcontent-%COMP%] {\n  font-size: 10px;\n  font-weight: 600;\n  width: 10% !important;\n}\n\n.spanDiv[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 1%;\n  margin-top: 2%;\n}\n\n#bill[_ngcontent-%COMP%] {\n  font-size: 10px;\n  margin-right: 10px;\n  margin-top: 10px;\n  margin-bottom: -25px;\n}\n\n.billName[_ngcontent-%COMP%] {\n  display: inline;\n  margin-right: 20px;\n}\n\n.margin[_ngcontent-%COMP%] {\n  margin-right: 0px;\n}\n\n.divider[_ngcontent-%COMP%] {\n  position: unset !important;\n  left: 200px !important;\n  align-self: center !important;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n\n.flex-basis-50[_ngcontent-%COMP%] {\n  flex-basis: 50%;\n}\n\n.gap-20[_ngcontent-%COMP%] {\n  gap: 10px;\n}\n\n.addressContainer[_ngcontent-%COMP%] {\n  padding: 0 20px 0 0 !important;\n}\n\n.address-card[_ngcontent-%COMP%] {\n  margin-left: 0;\n  margin-right: 0;\n}\n\n.inline-block[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n\n.space-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n\n@media (min-width: 576px) {\n  .addressGrid[_ngcontent-%COMP%] {\n    gap: 20px;\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n.addressGridInner[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 20px;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n\n.grow[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.flex[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n}\n\n.flex-grow-1[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.justify-between[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  flex-grow: 1;\n}\n\n.gap-20[_ngcontent-%COMP%] {\n  gap: 20px;\n}\n\n.flex-column[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n\n.height-auto[_ngcontent-%COMP%] {\n  height: auto;\n}\n\n.align-self-flex-end[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n\n.align-self-flex-start[_ngcontent-%COMP%] {\n  align-self: flex-start;\n}\n\n.width-fit-content[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.m-8[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  flex-grow: 1;\n}\n\n.block[_ngcontent-%COMP%] {\n  display: block;\n}\n\n#addressBlock[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n}\n\n#communicationDivider[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n}\n\n.communicationForm[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 20px;\n  flex-wrap: wrap;\n}\n\n#communicationBlockForm[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  border: 1px solid lightgrey;\n  padding: 20px;\n}\n\n#DocumentForm[_ngcontent-%COMP%] {\n  border: 1px solid lightgrey;\n  padding: 10px;\n}\n\n#DocumentForm1[_ngcontent-%COMP%] {\n  border: 1px solid lightgrey;\n  padding: 10px;\n  padding-bottom: 50px;\n}\n\n.mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-group.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-label[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus, .mat-tab-nav-bar.mat-primary[_ngcontent-%COMP%]   .mat-tab-link[_ngcontent-%COMP%]:not(.mat-tab-disabled):focus {\n  background: red;\n}\n\n.mat-tab-label-active[_ngcontent-%COMP%] {\n  color: green;\n}\n\n  .mat-tab-label-active {\n  color: #6988f6 !important;\n}\n\n.verification[_ngcontent-%COMP%] {\n  float: right;\n  color: #2a59e7;\n}\n\nmat-tab-label[_ngcontent-%COMP%] {\n  font-size: 8px;\n}\n\n.mat-select-arrow-wrapper[_ngcontent-%COMP%] {\n  display: table-cell;\n  vertical-align: middle;\n  width: 40px !important;\n}\n\n#dividerInside[_ngcontent-%COMP%] {\n  display: flex;\n  flex-grow: 1;\n}\n\n.errbd[_ngcontent-%COMP%] {\n  border: 1px solid red;\n}\n\n#clr[_ngcontent-%COMP%] {\n  height: 180px;\n  width: 180px;\n}\n\n#fingerprintSpan[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n  font-size: 12px;\n  margin-bottom: 4px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxca3ljLWJhc2ljLWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUlBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsZUFBZTtBQURqQjs7QUFJQTtFQUNFLGVBQWU7QUFEakI7O0FBSUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQURiOztBQU9BO0VBQ0UsWUFBWTtBQUpkOztBQU9BO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFKckI7O0FBT0E7RUFDRSxnQkFBZ0I7QUFKbEI7O0FBT0E7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFKeEI7O0FBT0E7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0FBTHhCOztBQVFBOztFQUVFLGVBQWU7QUFMakI7O0FBUUE7RUFDRSxPQUFPO0FBTFQ7O0FBV0E7RUFDRSxZQUFZO0VBQ1osV0FBVztBQVJiOztBQVdBO0VBRUUsWUFBWTtFQUNaLFlBQVk7QUFUZDs7QUFnQkE7RUFFRSxZQUFZO0VBQ1osV0FBVztBQWRiOztBQW9CQTtFQUNFLFlBQVk7RUFFWixlQUFlO0VBQ2YscUZBQzZCO0VBQzdCLCtCQUErQjtFQUUvQixzQkFBc0I7RUFHdEIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUF0QmY7O0FBMkJBO0VBQ0UsWUFBWTtFQUVaLGVBQWU7RUFDZixxRkFDNkI7RUFDN0IsK0JBQStCO0VBRS9CLHNCQUFzQjtFQUd0QixnQkFBZ0I7RUFDaEIsYUFBYTtBQTdCZjs7QUFrQ0E7RUFDRSxZQUFZO0VBRVosZUFBZTtFQUNmLHFGQUM2QjtFQUM3QiwrQkFBK0I7RUFFL0Isc0JBQXNCO0VBR3RCLGdCQUFnQjtFQUNoQixhQUFhO0FBcENmOztBQXlDQTtFQUNFLFlBQVk7RUFFWixlQUFlO0VBQ2YscUZBQzZCO0VBQzdCLCtCQUErQjtFQUUvQixzQkFBc0I7RUFHdEIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUEzQ2Y7O0FBZ0RBO0VBQ0UsWUFBWTtFQUVaLGVBQWU7RUFDZixxRkFDNkI7RUFDN0IsK0JBQStCO0VBRS9CLHNCQUFzQjtFQUd0QixnQkFBZ0I7RUFDaEIsYUFBYTtBQWxEZjs7QUF3REE7RUFDRSxZQUFZO0VBRVosZUFBZTtFQUNmLHFGQUM2QjtFQUM3QiwrQkFBK0I7RUFFL0Isc0JBQXNCO0VBR3RCLGdCQUFnQjtFQUNoQixhQUFhO0FBMURmOztBQStEQTtFQUNFLFlBQVk7RUFFWixlQUFlO0VBQ2YscUZBQzZCO0VBQzdCLCtCQUErQjtFQUUvQixzQkFBc0I7RUFHdEIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFqRWY7O0FBc0VBO0VBQ0UsWUFBWTtFQUVaLGVBQWU7RUFDZixxRkFDNkI7RUFDN0IsK0JBQStCO0VBRS9CLHNCQUFzQjtFQUd0QixnQkFBZ0I7RUFDaEIsYUFBYTtBQXhFZjs7QUE2RUE7RUFDRSxZQUFZO0VBRVosZUFBZTtFQUNmLHFGQUM2QjtFQUM3QiwrQkFBK0I7RUFFL0Isc0JBQXNCO0VBR3RCLGdCQUFnQjtFQUNoQixhQUFhO0FBL0VmOztBQW9GQTtFQUNFLFlBQVk7RUFFWixlQUFlO0VBQ2YscUZBQzZCO0VBQzdCLCtCQUErQjtFQUUvQixzQkFBc0I7RUFHdEIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUF0RmY7O0FBMkZBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFFZixxRkFDNkI7RUFDN0IsK0JBQStCO0VBRS9CLHNCQUFzQjtFQUd0QixnQkFBZ0I7RUFDaEIsYUFBYTtBQTdGZjs7QUFrR0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUVmLHFGQUM2QjtFQUM3QiwrQkFBK0I7RUFFL0Isc0JBQXNCO0VBR3RCLGdCQUFnQjtFQUNoQixhQUFhO0FBcEdmOztBQXlHQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFGQUM2QjtFQUM3QiwrQkFBK0I7RUFFL0Isc0JBQXNCO0VBR3RCLGdCQUFnQjtFQUNoQixhQUFhO0FBMUdmOztBQWtIQTtFQUNFLFlBQVk7RUFFWixxRkFDNkI7RUFDN0IsK0JBQStCO0VBRS9CLHNCQUFzQjtFQUd0QixnQkFBZ0I7RUFDaEIsYUFBYTtBQXBIZjs7QUEwSEE7RUFDRSxZQUFZO0VBRVoscUZBQzZCO0VBQzdCLCtCQUErQjtFQUUvQixzQkFBc0I7RUFHdEIsZ0JBQWdCO0VBSWhCLFdBQVc7QUEvSGI7O0FBa0lBO0VBQ0UsbUJBQW1CO0FBL0hyQjs7QUFrSUE7RUFDRSxxRkFDNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsMkJBQTJCO0VBQzNCLCtCQUErQjtFQUMvQixtQkFBbUI7QUFoSXJCOztBQW1JQTtFQUNFLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUFoSTlCOztBQW1JQTtFQUNFLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUFoSTlCOztBQW1JQTtFQUNFLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUFoSTlCOztBQW1JQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBR2IsZUFBZTtFQUNmLDhCQUE4QjtBQWxJaEM7O0FBcUlBO0VBQ0UsYUFBYTtFQUdiLGVBQWU7QUFwSWpCOztBQXdJQTtFQUNFLGFBQWE7RUFFYixTQUFTO0VBQ1QsZUFBZTtBQXRJakI7O0FBMklBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsZUFBZTtFQUNmLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsa0JBQWtCO0FBeElwQjs7QUE0SUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsaUJBQWlCO0FBekluQjs7QUE0SUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsU0FBUztFQUNULFFBQVE7RUFDUixXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQXpJcEI7O0FBNElBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7QUF6SW5COztBQTRJQTtFQUVFLHFGQUM2QjtFQUM3QiwrQkFBK0I7QUEzSWpDOztBQThJQTtFQUNFLFlBQVk7RUFDWixTQUFTO0FBM0lYOztBQStJQTtFQUNFLDZCQUE2QjtFQUM3QixhQUFhO0FBNUlmOztBQStJQTtFQUVFLFlBQVk7QUE3SWQ7O0FBZ0pBO0VBQ0UsZ0JBQ0Y7QUE5SUE7O0FBZ0pBO0VBQ0UsWUFBWTtBQTdJZDs7QUFnSkE7RUFDRSxrQkFBa0I7QUE3SXBCOztBQWdKQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUE3SXJCOztBQWdKQTtFQUNFLFlBQVk7QUE3SWQ7O0FBZ0pBO0VBQ0UsZ0JBQWdCO0FBN0lsQjs7QUFnSkE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLDBCQUEwQjtBQTdJNUI7O0FBK0lBO0VBQ0UsVUFBVTtBQTVJWjs7QUE4SUE7RUFFRSx5QkFBeUI7RUFDekIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLG1CQUFtQjtBQTVJckI7O0FBK0lBO0VBQ0UseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1oseUJBQW1DO0VBQ25DLFlBQVk7RUFDWixtQkFBbUI7QUE1SXJCOztBQStJQTtFQUNFLG1CQUFtQjtBQTVJckI7O0FBK0lBO0VBQ0UsYUFBYTtFQUNiLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBbUI7RUFDbkIsdUJBQUE7RUFDQSx5QkFBeUI7RUFDekIsV0FBVztFQUVYLGNBQXlCO0VBQ3pCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtBQTdJakI7O0FBZ0pBO0VBQ0UsVUFBVTtFQUNWLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIscUZBQzZCO0FBOUkvQjs7QUFpSkE7Ozs7RUFJRSxlQUFlO0FBOUlqQjs7QUFpSkE7RUFDRSxZQUFZO0FBOUlkOztBQWlKQTtFQUNFLHlCQUFvQztBQTlJdEM7O0FBaUpBO0VBQ0UsWUFBWTtFQUNaLGNBQXVCO0FBOUl6Qjs7QUF5SkE7RUFDRSxvQ0FBK0M7RUFDL0MsV0FBVztBQXRKYjs7QUFxS0E7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBbEtyQjs7QUFxS0E7RUFDRSxPQUFPO0FBbEtUOztBQXFLQTtFQUNFLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFsS3JCOztBQXFLQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBbEtwQjs7QUFxS0E7RUFDRSxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7QUFsS2Q7O0FBcUtBO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFJYixpQ0FBaUM7QUFyS25DOztBQXdLQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLGVBQWU7SUFDZix1QkFBdUI7RUFyS3pCO0FBQ0Y7O0FBd0tBO0VBQ0Usd0JBQXdCO0VBQ3hCLHVCQUF1QjtFQUN2QiwyQkFBMkI7RUFDM0Isa0JBQWtCO0FBcktwQjs7QUF3S0E7RUFDRSxjQUFjO0FBcktoQjs7QUF3S0E7RUFDRSxnQ0FBMEM7QUFySzVDOztBQXdLQTtFQUNFLGNBQXdCO0VBQ3hCLHlCQUFtQztBQXJLckM7O0FBd0tBO0VBQ0UsaUJBQWlCO0VBRWpCLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLGNBQWM7QUF0S2hCOztBQXlLQTtFQUNFLGNBQWM7RUFFZCxjQUFjO0FBdktoQjs7QUEwS0E7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtBQXZLdkI7O0FBMEtBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixxQkFBcUI7QUF2S3ZCOztBQTBLQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsY0FBYztBQXZLaEI7O0FBNEtBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBekt0Qjs7QUE2S0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBMUtwQjs7QUE2S0E7RUFDRSxpQkFBaUI7QUExS25COztBQTZLQTtFQUNFLDBCQUEwQjtFQUMxQixzQkFBc0I7RUFFdEIsNkJBQTZCO0FBM0svQjs7QUErS0E7RUFDRSxhQUFhO0FBNUtmOztBQStLQTtFQUNFLGVBQWU7QUE1S2pCOztBQStLQTtFQUNFLGVBQWU7QUE1S2pCOztBQStLQTtFQUNFLFNBQVM7QUE1S1g7O0FBK0tBO0VBQ0UsOEJBQThCO0FBNUtoQzs7QUErS0E7RUFDRSxjQUFjO0VBQ2QsZUFBZTtBQTVLakI7O0FBK0tBO0VBQ0UscUJBQXFCO0FBNUt2Qjs7QUErS0E7RUFDRSw4QkFBOEI7QUE1S2hDOztBQStLQTtFQUNFO0lBRUUsU0FBUztJQUNULGdEQUFnRDtFQTdLbEQ7QUFDRjs7QUFnTEE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGdEQUFnRDtBQTdLbEQ7O0FBb0xBO0VBQ0UsWUFBWTtBQWpMZDs7QUFvTEE7RUFDRSxhQUFhO0FBakxmOztBQW9MQTtFQUNFLGVBQWU7QUFqTGpCOztBQW9MQTtFQUNFLFlBQVk7QUFqTGQ7O0FBb0xBO0VBQ0UsOEJBQThCO0VBQzlCLFlBQVk7QUFqTGQ7O0FBb0xBO0VBQ0UsU0FBUztBQWpMWDs7QUFvTEE7RUFDRSxzQkFBc0I7QUFqTHhCOztBQW9MQTtFQUNFLFlBQVk7QUFqTGQ7O0FBb0xBO0VBQ0Usb0JBQW9CO0FBakx0Qjs7QUFvTEE7RUFDRSxzQkFBc0I7QUFqTHhCOztBQW9MQTtFQUNFLDBCQUFrQjtFQUFsQix1QkFBa0I7RUFBbEIsa0JBQWtCO0FBakxwQjs7QUFvTEE7RUFDRSxpQkFBaUI7RUFDakIsWUFBWTtBQWpMZDs7QUFvTEE7RUFDRSxjQUFjO0FBakxoQjs7QUFvTEE7RUFDRSxhQUFhO0VBQ2IsU0FBUztBQWpMWDs7QUFvTEE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQWpMZDs7QUFvTEE7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULGVBQWU7QUFqTGpCOztBQW9MQTtFQUVFLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsYUFBYTtBQWxMZjs7QUFxTEE7RUFFRSwyQkFBMkI7RUFDM0IsYUFBYTtBQW5MZjs7QUFzTEE7RUFFRSwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLG9CQUFvQjtBQXBMdEI7O0FBdUxBOzs7O0VBSUUsZUFBZTtBQXBMakI7O0FBdUxBO0VBQ0UsWUFBWTtBQXBMZDs7QUF1TEE7RUFDRSx5QkFBb0M7QUFwTHRDOztBQXVMQTtFQUNFLFlBQVk7RUFDWixjQUF1QjtBQXBMekI7O0FBaU1BO0VBQ0UsY0FBYztBQTlMaEI7O0FBb01BO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixzQkFBc0I7QUFqTXhCOztBQW9NQTtFQUNFLGFBQWE7RUFDYixZQUFZO0FBak1kOztBQW9NQTtFQUVFLHFCQUFvQjtBQWxNdEI7O0FBcU1BO0VBQ0UsYUFBYTtFQUNiLFlBQVk7QUFsTWQ7O0FBc01BO0VBQ0UsaUJBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFjO0VBQUMsa0JBQWtCO0FBbE1uQyIsImZpbGUiOiJreWMtYmFzaWMtaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJlYWRjcnVtYiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLmhlYWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxuICAvLyAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmZldGNoQnV0dG9uIHtcclxuICBjb2xvcjogIzQ1NkVGRTtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5tYXQtaGludCB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcblxyXG4uYXBwLWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vLyAudmVyaWZpY2F0aW9uSGVhZHtcclxuLy8gICBvcGFjaXR5OiA5MCU7XHJcbi8vIH1cclxuLmJhc2ljLWNvbnRhaW5lciB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcblxyXG4ubWFpbi1oZWFkIHtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XHJcbn1cclxuXHJcbm1hdC10YWItZ3JvdXAge1xyXG4gIHBhZGRpbmctbGVmdDogMiU7XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBoZWlnaHQ6IDYwdmg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyICoge1xyXG4gIC8vIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xyXG4gIG1hcmdpbjogMCA1cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmZsZXgtY29udGFpbmVyIDpudGgtY2hpbGQoMiksXHJcbi5mbGV4LWNvbnRhaW5lciA6bnRoLWNoaWxkKDMpIHtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi5mbGV4LWNvbnRhaW5lciA6bnRoLWNoaWxkKDMpIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4vLyAgIC5mbGV4LWNvbnRhaW5lciA6bnRoLWNoaWxkKDQpIHtcclxuLy8gICAgIGhlaWdodDogMTAwJTtcclxuLy8gICB9XHJcbi5mb3JtRmllbGQxIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbn1cclxuXHJcbi5mb3JtRmllbGQge1xyXG4gIC8vIHdpZHRoOjIwMHB4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICB3aWR0aDogMTIwcHg7XHJcblxyXG4gIC8vICAgZ2FwOiAyMHB4O1xyXG4gIC8vIH1cclxuXHJcbn1cclxuXHJcbi5mb3JtRmllbGQyIHtcclxuICAvLyB3aWR0aDoyMDBweDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcblxyXG4gIC8vICAgZ2FwOiAyMHB4O1xyXG4gIC8vIH1cclxufVxyXG5cclxuLmlucHV0TWF0Y2FyZCB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDo1MDBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcblxyXG4gIC8vIHdpZHRoOiAyMjBweDtcclxufVxyXG5cclxuLmlucHV0R2VuZGVyIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWF4LXdpZHRoOjUwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTNweDtcclxuXHJcbiAgLy8gd2lkdGg6IDIyMHB4O1xyXG59XHJcblxyXG4uaW5wdXRNYXROYW1lIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWF4LXdpZHRoOjUwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTNweDtcclxuXHJcbiAgLy8gd2lkdGg6IDQ1MHB4O1xyXG59XHJcblxyXG4uaW5wdXRNYXROZXcge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvLyBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG5cclxuICAvLyB3aWR0aDogNDU1cHg7XHJcbn1cclxuXHJcbi5pbnB1dE1hdExhc3ROYW1lIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWF4LXdpZHRoOjUwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTNweDtcclxuXHJcbiAgLy8gd2lkdGg6IDIwMHB4O1xyXG5cclxufVxyXG5cclxuLmlucHV0TWF0Y2FyZERvYyB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDo1MDBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDIxcHg7XHJcbiAgLy8gd2lkdGg6MjcwcHg7XHJcbiAgLy8gd2lkdGg6IDE5NXB4O1xyXG59XHJcblxyXG4uaW5wdXRNYXRjYXJkTWFpbCB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDo1MDBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcbiAgLy8gd2lkdGg6MTAwJTtcclxuICAvLyB3aWR0aDogNDEwcHg7XHJcbn1cclxuXHJcbi5pbnB1dE1hdGNhcmRNYWlsQWRkIHtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgLy8gbWF4LXdpZHRoOjUwMHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTNweDtcclxuICAvLyB3aWR0aDoxMDAlO1xyXG4gIC8vIHdpZHRoOiA3NTBweDtcclxufVxyXG5cclxuLmlucHV0TWF0Y2FyZE1hcnJpdGlhbCB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG4gIC8vIG1heC13aWR0aDo1MDBweDtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG5cclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEzcHg7XHJcbiAgLy8gd2lkdGg6MTAwJTtcclxuICAvLyB3aWR0aDogNDUwcHg7XHJcbn1cclxuXHJcbi5pbnB1dE1hdGNhcmRQcmVmaXgge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvLyBtYXgtd2lkdGg6NTAwcHg7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG4gIC8vIHdpZHRoOjEwMCU7XHJcbiAgLy8gd2lkdGg6IDE1MHB4O1xyXG59XHJcblxyXG4uaW5wdXRNYXRjYXJkMyB7XHJcbiAgZmxleC1ncm93OiAyO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICAvL21heC13aWR0aDoyMDhweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTNweDtcclxuXHJcblxyXG59XHJcblxyXG4uaW5wdXRNYXRjYXJkQWRkIHtcclxuICBmbGV4LWdyb3c6IDI7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG4gIC8vbWF4LXdpZHRoOjIwOHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAvLyAgIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDIwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICBwYWRkaW5nOiAxM3B4O1xyXG4gIC8vIHdpZHRoOjIwMHB4O1xyXG5cclxufVxyXG5cclxuLmlucHV0TWF0Y2FyZDQge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgbWF4LXdpZHRoOiAyMDhweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgLy8gICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICAvLyBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgcGFkZGluZzogMTNweDtcclxuICAvLyBtYXJnaW4tcmlnaHQ6LTElO1xyXG5cclxufVxyXG5cclxuLy8gI2Zvcm0xe1xyXG4vLyAgIG1hcmdpbi1yaWdodDotMSU7XHJcbi8vIH1cclxuLmlucHV0TWF0Y2FyZDEge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvLyBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuICAvLyBkaXNwbGF5OiBibG9jaztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIHBhZGRpbmc6IDEycHg7XHJcbiAgLy8gd2lkdGg6IDEwMCU7XHJcblxyXG4gIC8vIGhlaWdodDogMzBweDtcclxufVxyXG5cclxuLmlucHV0TWF0Y2FyZDIge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICAvLyBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuICAvLyBkaXNwbGF5OiBibG9jaztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIC8vICAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgLy8gcGFkZGluZzogMjBweDtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gIC8vIHBhZGRpbmc6IDEycHg7XHJcbiAgLy8gd2lkdGg6IDEwMCU7XHJcbiAgLy8gaGVpZ2h0OiAzMHB4O1xyXG4gIHdpZHRoOiAyMHB4O1xyXG59XHJcblxyXG4ubWF0LWZvcm0tZmllbGQtd3JhcHBlciB7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmlucHV0Q2xhc3Mge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogaGlkZGVuO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIGRpdi5tYXQtZm9ybS1maWVsZC1vdXRsaW5lLXN0YXJ0IHtcclxuICBib3JkZXItY29sb3I6IDAgIWltcG9ydGFudDtcclxuICBib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZ2FwIHtcclxuICBib3JkZXItY29sb3I6IDAgIWltcG9ydGFudDtcclxuICBib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZW5kIHtcclxuICBib3JkZXItY29sb3I6IDAgIWltcG9ydGFudDtcclxuICBib3JkZXItd2lkdGg6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZm9ybSB7XHJcbiAgbWFyZ2luLXRvcDogLTAuNSU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvLyBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIC8vIGdhcDogMjBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uZm9ybTEzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8vIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgLy8gZ2FwOiAyMHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuXHJcbn1cclxuXHJcbi5mb3JtMSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICAvLyBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIGdhcDogNTBweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLy8gd2lkdGg6IDIwMHB4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZy1sZWZ0OiAxMSU7XHJcbiAgcGFkZGluZy1yaWdodDogMTQlO1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4ubWF0Q2FyZCB7XHJcbiAgbWF4LXdpZHRoOiAxNjAwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gIG1hcmdpbi1yaWdodDogMTUlO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luOiAxMHB4IGF1dG8gMCBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDMlO1xyXG59XHJcblxyXG4uY2hhbmdlSW5wdXQge1xyXG4gIG9wYWNpdHk6IDAuMDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jaGFuZ2VEaXYge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDMwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbn1cclxuXHJcbi5tYXQtZm9ybS1maWVsZC1mbGV4IHtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyYXk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG59XHJcblxyXG4uZmxleC1ncm93LTEge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBnYXA6IDEwcHg7XHJcbiAgLy8gbWFyZ2luLXJpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4uYWxpZ25tZW50IHtcclxuICBib3JkZXItc3R5bGU6IG5vbmUgIWltcG9ydGFudDtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG4jZG9iIHtcclxuXHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4jbWF4LXdpZHRoIHtcclxuICBtYXgtd2lkdGg6IDE1MHB4XHJcbn1cclxuXHJcbiNkcm9wLW1heC13aWR0aCB7XHJcbiAgd2lkdGg6IDE5MHB4O1xyXG59XHJcblxyXG4jcmFkaW8ge1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxucmFkaW9Hcm91cCB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcblxyXG4jbmF0aW9uYWxpdHkge1xyXG4gIHdpZHRoOiAyMTBweDtcclxufVxyXG5cclxubWF0LWxhYmVsIHtcclxuICBtYXJnaW4tcmlnaHQ6IDYlO1xyXG59XHJcblxyXG4uY2hhbmdlIHtcclxuICBjb2xvcjogIzI2ODBFQjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbn1cclxuLmJhY2tJY29ue1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuLkJhY2t7XHJcblxyXG4gIG1hcmdpbjogMTJweCAwcHggMTJweCAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IC0xMiU7XHJcbiAgd2lkdGg6IDE1MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQ1cHg7XHJcbn1cclxuXHJcbi5OZXh0IHtcclxuICBtYXJnaW46IDEycHggMHB4IDEycHggMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTEzJTtcclxuICB3aWR0aDogMTUwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY2LCAxMDYsIDI0NSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDU1cHg7XHJcbn1cclxuXHJcbmhyIHtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4ubGluZSB7XHJcbiAgYm9yZGVyOiB0aGljaztcclxuICAvKiBoZWlnaHQ6IDNweDsgKi9cclxuICAvKiBsaW5lLWhlaWdodDogM3B4OyAqL1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgLyogYm9yZGVyLXdpZHRoOiAzcHg7ICovXHJcbiAgYm9yZGVyLWJsb2NrLXdpZHRoOiB1bnNldDtcclxuICBjb2xvcjogYmx1ZTtcclxuICAvLyB3aWR0aDogMjBweDtcclxuICBjb2xvcjogcmdiKDEwNSwgMTM2LCAyNDYpO1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBtYXJnaW46IGluaXRpYWw7XHJcbn1cclxuXHJcbmlucHV0IHtcclxuICB3aWR0aDogODAlO1xyXG4gIGNvbG9yOiAjMzc0NjY0O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxufVxyXG5cclxuLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWw6bm90KC5tYXQtdGFiLWRpc2FibGVkKTpmb2N1cyxcclxuLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGluazpub3QoLm1hdC10YWItZGlzYWJsZWQpOmZvY3VzLFxyXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsOm5vdCgubWF0LXRhYi1kaXNhYmxlZCk6Zm9jdXMsXHJcbi5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGluazpub3QoLm1hdC10YWItZGlzYWJsZWQpOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kOiByZWQ7XHJcbn1cclxuXHJcbi5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcclxuICBjb2xvcjogcmdiKDEwNSwgMTM2LCAyNDYpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi52ZXJpZmljYXRpb24ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBjb2xvcjogcmdiKDQyLCA4OSwgMjMxKTtcclxufVxyXG5cclxuLy8gLm1hdC1pbmstYmFye1xyXG4vLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICBib3R0b206IDA7XHJcbi8vICAgICBoZWlnaHQ6IDJweDtcclxuLy8gICAgIHRyYW5zaXRpb246IDUwMG1zIGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKTtcclxuLy8gICAgIGhlaWdodDogNHB4O1xyXG4vLyAgICAgY29sb3I6XHJcbi8vIH1cclxuOjpuZy1kZWVwIC5tYXQtdGFiLWdyb3VwLm1hdC1wcmltYXJ5IC5tYXQtaW5rLWJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEwNSwgMTM2LCAyNDYpICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgLy8gd2lkdGg6IDExNnB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gIC8vIG1hcmdpbi1sZWZ0OiAyJTtcclxufVxyXG5cclxuXHJcbi8vIG1hdC1vcHRpb257XHJcbi8vICAgd2lkdGg6IDIwcHg7XHJcbi8vIH1cclxuLy8gLm1hdC1zZWxlY3QtYXJyb3ctd3JhcHBlciB7XHJcbi8vICAgZGlzcGxheTogdGFibGUtY2VsbDtcclxuLy8gICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4vLyAgIHdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbi8vIH1cclxuLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICBmbGV4OiAxO1xyXG59XHJcblxyXG4udGV4dCB7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbmZpZ3VyZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBsaW5lLWhlaWdodDogMS43ZW07XHJcbn1cclxuXHJcbmZpZ3VyZSBpbWcge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMzBweDtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5mb3JtU2VjdGlvbkNvbnRhaW5lciB7XHJcbiAgZ2FwOiA0MHB4O1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA7XHJcbiAgLy8gZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoIGF1dG8tZml0LCBtaW5tYXgoMTUwcHgsIDFmcikgKTtcclxuICAvL2dyaWQtZ2FwOiAyMHB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjAwcHggYXV0bztcclxufVxyXG5cclxuQG1lZGlhKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuZm9ybVNlY3Rpb25Db250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm1JbWcge1xyXG4gIGhlaWdodDogMTAwcHggIWltcG9ydGFudDtcclxuICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGdyZXk7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uZHJvcERvd24ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4ubWF0LXJhZGlvLWJ1dHRvbi5tYXQtYWNjZW50Lm1hdC1yYWRpby1jaGVja2VkIC5tYXQtcmFkaW8tb3V0ZXItY2lyY2xlIHtcclxuICBib3JkZXItY29sb3I6IHJnYig2NiwgMTM0LCAyNDQpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xyXG4gIGNvbG9yOiByZ2IoNjYsIDEzNCwgMjQ0KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjYsIDEzNCwgMjQ0KTtcclxufVxyXG5cclxuLlVwbG9hZCB7XHJcbiAgdmVydGljYWwtYWxpZ246IGM7XHJcbiAvLyBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgY29sb3I6ICMyNjgwRUI7XHJcbn1cclxuXHJcbiNyb3cge1xyXG4gIGZvbnQtc2l6ZTogOXB4O1xyXG4gIC8vIG9wYWNpdHk6IDEwMCU7XHJcbiAgY29sb3I6ICMyNjgwRUI7XHJcbn1cclxuXHJcbi5zcGFuIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICB3aWR0aDogMjAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zcGFuMTIge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHdpZHRoOiAxMCUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnNwYW5EaXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcblxyXG5cclxufVxyXG5cclxuI2JpbGwge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAtMjVweDtcclxuICAvLyBtYXJnaW4tYm90dG9tOiAtNCU7XHJcbn1cclxuXHJcbi5iaWxsTmFtZSB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG4gIG1hcmdpbi1yaWdodDogMjBweDtcclxufVxyXG5cclxuLm1hcmdpbiB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5kaXZpZGVyIHtcclxuICBwb3NpdGlvbjogdW5zZXQgIWltcG9ydGFudDtcclxuICBsZWZ0OiAyMDBweCAhaW1wb3J0YW50O1xyXG5cclxuICBhbGlnbi1zZWxmOiBjZW50ZXIgIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi5mbGV4IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4ud3JhcCB7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uZmxleC1iYXNpcy01MCB7XHJcbiAgZmxleC1iYXNpczogNTAlO1xyXG59XHJcblxyXG4uZ2FwLTIwIHtcclxuICBnYXA6IDEwcHg7XHJcbn1cclxuXHJcbi5hZGRyZXNzQ29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwIDIwcHggMCAwICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5hZGRyZXNzLWNhcmQge1xyXG4gIG1hcmdpbi1sZWZ0OiAwO1xyXG4gIG1hcmdpbi1yaWdodDogMDtcclxufVxyXG5cclxuLmlubGluZS1ibG9jayB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59XHJcblxyXG4uc3BhY2UtYmV0d2VlbiB7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5AbWVkaWEobWluLXdpZHRoOiA1NzZweCkge1xyXG4gIC5hZGRyZXNzR3JpZCB7XHJcbiAgICAvLyBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgbWlubWF4KDAsIDFmcikpO1xyXG4gIH1cclxufVxyXG5cclxuLmFkZHJlc3NHcmlkSW5uZXIge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ2FwOiAyMHB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIG1pbm1heCgwLCAxZnIpKTtcclxufVxyXG5cclxuLy8gOjpuZy1kZWVwIC5tYXQtY2FyZCAubWF0LWRpdmlkZXItaG9yaXpvbnRhbCB7XHJcbi8vICAgLyogcG9zaXRpb246IGFic29sdXRlOyAqL1xyXG4vLyAgIGxlZnQ6IDA7XHJcbi8vIH1cclxuLmdyb3cge1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLmZsZXgge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi53cmFwIHtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5mbGV4LWdyb3ctMSB7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uanVzdGlmeS1iZXR3ZWVuIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uZ2FwLTIwIHtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbi5mbGV4LWNvbHVtbiB7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmhlaWdodC1hdXRvIHtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5hbGlnbi1zZWxmLWZsZXgtZW5kIHtcclxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmFsaWduLXNlbGYtZmxleC1zdGFydCB7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxufVxyXG5cclxuLndpZHRoLWZpdC1jb250ZW50IHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5tLTgge1xyXG4gIG1hcmdpbi1yaWdodDogOHB4O1xyXG4gIGZsZXgtZ3JvdzogMTtcclxufVxyXG5cclxuLmJsb2NrIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuI2FkZHJlc3NCbG9jayB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDIwcHg7XHJcbn1cclxuXHJcbiNjb21tdW5pY2F0aW9uRGl2aWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5jb21tdW5pY2F0aW9uRm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDIwcHg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4jY29tbXVuaWNhdGlvbkJsb2NrRm9ybSB7XHJcblxyXG4gIGZsZXgtZ3JvdzogMTtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgcGFkZGluZzogMjBweDtcclxufVxyXG5cclxuI0RvY3VtZW50Rm9ybSB7XHJcbiAgLy8gd2lkdGg6NjUwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmV5O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbn1cclxuXHJcbiNEb2N1bWVudEZvcm0xIHtcclxuICAvLyB3aWR0aDo2NTBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyZXk7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG5cclxuLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGFiZWw6bm90KC5tYXQtdGFiLWRpc2FibGVkKTpmb2N1cyxcclxuLm1hdC10YWItZ3JvdXAubWF0LXByaW1hcnkgLm1hdC10YWItbGluazpub3QoLm1hdC10YWItZGlzYWJsZWQpOmZvY3VzLFxyXG4ubWF0LXRhYi1uYXYtYmFyLm1hdC1wcmltYXJ5IC5tYXQtdGFiLWxhYmVsOm5vdCgubWF0LXRhYi1kaXNhYmxlZCk6Zm9jdXMsXHJcbi5tYXQtdGFiLW5hdi1iYXIubWF0LXByaW1hcnkgLm1hdC10YWItbGluazpub3QoLm1hdC10YWItZGlzYWJsZWQpOmZvY3VzIHtcclxuICBiYWNrZ3JvdW5kOiByZWQ7XHJcbn1cclxuXHJcbi5tYXQtdGFiLWxhYmVsLWFjdGl2ZSB7XHJcbiAgY29sb3I6IGdyZWVuO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC10YWItbGFiZWwtYWN0aXZlIHtcclxuICBjb2xvcjogcmdiKDEwNSwgMTM2LCAyNDYpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi52ZXJpZmljYXRpb24ge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBjb2xvcjogcmdiKDQyLCA4OSwgMjMxKTtcclxufVxyXG5cclxuLy8gLm1hdC1pbmstYmFye1xyXG4vLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vICAgICBib3R0b206IDA7XHJcbi8vICAgICBoZWlnaHQ6IDJweDtcclxuLy8gICAgIHRyYW5zaXRpb246IDUwMG1zIGN1YmljLWJlemllcigwLjM1LCAwLCAwLjI1LCAxKTtcclxuLy8gICAgIGhlaWdodDogNHB4O1xyXG4vLyAgICAgY29sb3I6XHJcbi8vIH1cclxuXHJcblxyXG5tYXQtdGFiLWxhYmVsIHtcclxuICBmb250LXNpemU6IDhweDtcclxufVxyXG5cclxuLy8gbWF0LW9wdGlvbntcclxuLy8gICB3aWR0aDogMjBweDtcclxuLy8gfVxyXG4ubWF0LXNlbGVjdC1hcnJvdy13cmFwcGVyIHtcclxuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgd2lkdGg6IDQwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuI2RpdmlkZXJJbnNpZGUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1ncm93OiAxO1xyXG59XHJcblxyXG4uZXJyYmRcclxue1xyXG4gIGJvcmRlcjoxcHggc29saWQgcmVkO1xyXG59XHJcblxyXG4jY2xye1xyXG4gIGhlaWdodDogMTgwcHg7XHJcbiAgd2lkdGg6IDE4MHB4O1xyXG4gIC8vIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbiNmaW5nZXJwcmludFNwYW57XHJcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOjEycHg7bWFyZ2luLWJvdHRvbTogNHB4O1xyXG59Il19 */"]
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
      var _this41 = this;

      var logging = false;
      exports.logging = logging;

      exports.setLogging = function (_logging) {
        logging = _logging;
      };

      exports.log = function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return logging ? console.log.apply(_this41, args) : null;
      };
      /***/

    },

    /***/
    "hwCN":
    /*!***********************************************************************!*\
      !*** ./src/app/views/others/kyc-face-scan/kyc-face-scan.component.ts ***!
      \***********************************************************************/

    /*! exports provided: KycFaceScanComponent */

    /***/
    function hwCN(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KycFaceScanComponent", function () {
        return KycFaceScanComponent;
      });
      /* harmony import */


      var _shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./../../../shared/services/finger-print-capture.service */
      "rp8y");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "8Y7J");
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/dialog */
      "iELJ");
      /* harmony import */


      var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/snack-bar */
      "zHaW");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      var KycFaceScanComponent = /*#__PURE__*/function () {
        function KycFaceScanComponent(dialogRef, data, snack, fingerPrintService) {
          _classCallCheck(this, KycFaceScanComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.snack = snack;
          this.fingerPrintService = fingerPrintService;
          this.isScanned = false;
        }

        _createClass(KycFaceScanComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.customerId = sessionStorage.getItem('customer_id');
            this.refreshedCustId = this.data.customerId;
            console.log('customer id :: ', this.customerId, this.refreshedCustId);
          }
        }, {
          key: "closeClick",
          value: function closeClick(isScanned) {
            console.log("close click"); // [routerLink]="['/others/kyc']" 

            this.dialogRef.close({
              message: 'Confirm',
              isScanned: isScanned
            }); // this.router.navigateByUrl('/others/kyc'); 
          }
        }, {
          key: "scan",
          value: function scan() {
            var obj = {
              fileUrl: "".concat(_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_0__["API_URL"], "/rest/upload/downloadDocs/?fileName=face_biometric.jpg")
            };
            this.saveBiometric(obj, 'FACE', this.refreshedCustId);
          }
        }, {
          key: "saveBiometric",
          value: function saveBiometric(capFingerPrint, fingerName, cId) {
            var _this42 = this;

            console.log('save biometric');
            var screen = 'kyc-verification';
            this.fingerPrintService.saveBiometric(capFingerPrint, fingerName, cId, screen).subscribe(function (data) {
              console.log("after save ", data);
              _this42.isScanned = true; // this.cdr.markForCheck();

              _this42.snack.open('Captured ' + fingerName + ' Finger', 'OK', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
              });
            });
          }
        }]);

        return KycFaceScanComponent;
      }();

      KycFaceScanComponent.ɵfac = function KycFaceScanComponent_Factory(t) {
        return new (t || KycFaceScanComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_0__["FingerPrintCaptureService"]));
      };

      KycFaceScanComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: KycFaceScanComponent,
        selectors: [["app-kyc-face-scan"]],
        decls: 17,
        vars: 0,
        consts: [["fxLayout", "column wrap", 1, "main"], ["fxFlex", "100", "fxLayoutAlign", "end stretch"], ["id", "close", 1, "mat-18", 3, "click"], ["fxFlex", "100", "fxLayoutAlign", "center stretch", "fxLayoutGap", "space-around", "id", "scanDiv"], ["id", "scan"], ["fxFlex", "50", "fxLayoutAlign", "center stretch", "id", "proceedDiv"], ["id", "hold", 1, "text-muted"], ["fxFlex", "50", "fxLayoutAlign", "center stretch"], ["id", "clr"], ["src", "assets/images/iris.PNG", "id", "fClr1"], ["mat-raised-button", "", 1, "btn", 3, "click"]],
        template: function KycFaceScanComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycFaceScanComponent_Template_mat_icon_click_2_listener() {
              return ctx.closeClick(ctx.isScanned);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-label", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Scan your Face to complete the verification");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "mat-label", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Hold the device still,Look at the camera!");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "mat-card", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function KycFaceScanComponent_Template_button_click_15_listener() {
              return ctx.scan();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "SCAN");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_4__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
        styles: [".btn[_ngcontent-%COMP%] {\n  width: 30%;\n  border-radius: 20px;\n  background-color: #3298f6;\n  color: white;\n}\n\n.main[_ngcontent-%COMP%] {\n  width: 600px;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n\nprogress[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 20px;\n}\n\n#fClr1[_ngcontent-%COMP%] {\n  margin-left: 15%;\n  margin-top: 12px;\n  border-radius: 5px;\n  height: 100px;\n}\n\n.contentClass[_ngcontent-%COMP%] {\n  font-size: smaller;\n  color: #a1a1a1;\n  font-family: sans-serif;\n}\n\n.titleClass[_ngcontent-%COMP%] {\n  font-size: x-large;\n  font-family: sans-serif;\n  color: #616161;\n}\n\n.closeIconClass[_ngcontent-%COMP%] {\n  font-size: medium;\n  color: #999999;\n}\n\n.btnScanClass[_ngcontent-%COMP%] {\n  line-height: 30px !important;\n  border-color: #456EFE;\n  background-color: #456EFE !important;\n  color: white;\n  border-radius: 20px;\n  width: 160px;\n  height: 35px;\n  font-size: small;\n  font-family: monospace;\n}\n\n.contentDiv[_ngcontent-%COMP%] {\n  padding-bottom: 20px;\n  padding: 20px !important;\n}\n\n.divTitleClass[_ngcontent-%COMP%] {\n  height: 60px;\n}\n\n.fingeralgn[_ngcontent-%COMP%] {\n  font-size: 80px;\n  color: #6EBDF9;\n}\n\n.imagesDiv[_ngcontent-%COMP%] {\n  padding-top: 30px;\n  padding-bottom: 20px;\n}\n\n.h-100[_ngcontent-%COMP%] {\n  height: 100% !important;\n}\n\n#clr[_ngcontent-%COMP%] {\n  height: 160px;\n  width: 180px;\n  margin-bottom: 30px;\n}\n\n#fclr[_ngcontent-%COMP%] {\n  color: lightgray;\n  font-size: 60px;\n}\n\n.scanDiv[_ngcontent-%COMP%] {\n  margin-top: 7%;\n}\n\n#scan[_ngcontent-%COMP%] {\n  font-size: 18px;\n  margin-top: 7%;\n  margin-bottom: 3%;\n}\n\n#proceedDiv[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  margin-bottom: 2%;\n  opacity: 50%;\n}\n\n#progressBarDiv[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\n\n#file[_ngcontent-%COMP%] {\n  height: 10px;\n  color: white;\n  border-radius: 10px;\n  border: 1px solid grey;\n}\n\n#thumb[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  flex-flow: nowrap;\n  margin-bottom: 20px;\n}\n\n#fingerprintSpan[_ngcontent-%COMP%] {\n  font-weight: bold;\n  text-align: center;\n  font-size: 12px;\n  margin-bottom: 4px;\n}\n\n#close[_ngcontent-%COMP%] {\n  background-repeat: no-repeat;\n  height: 4px;\n  width: 4px;\n  display: flex;\n  justify-content: flex-end;\n  top: 0px;\n  left: 0px;\n  margin-right: -6%;\n  margin-top: -3%;\n}\n\n.line[_ngcontent-%COMP%] {\n  border: thick;\n  width: 70px;\n  \n  border-block-width: revert;\n  \n  background-color: #FE6700;\n  border: 1px solid #FE6700;\n  border-radius: 5px;\n  \n  margin-bottom: 10px;\n}\n\n.hold[_ngcontent-%COMP%] {\n  margin-top: 3%;\n  opacity: 60%;\n}\n\n@media only screen and (max-width: 791px) and (min-width: 529px) {\n  .main[_ngcontent-%COMP%] {\n    width: 400px;\n    padding-left: 10px;\n    padding-right: 10px;\n  }\n}\n\n@media only screen and (max-width: 528px) and (min-width: 200px) {\n  .main[_ngcontent-%COMP%] {\n    width: 200px;\n    padding-left: 5px;\n    padding-right: 5px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxca3ljLWZhY2Utc2Nhbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLFVBQVM7RUFFVCxtQkFBbUI7RUFDcEIseUJBQW1DO0VBQ25DLFlBQVk7QUFEZjs7QUFLQTtFQUNLLFlBQVc7RUFDWixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBRnZCOztBQUlBO0VBRUksV0FBVztFQUNYLFlBQVk7QUFGaEI7O0FBT0E7RUFDSSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ3BCLGtCQUFrQjtFQUNsQixhQUFhO0FBSmI7O0FBTUE7RUFDSSxrQkFBa0I7RUFDbEIsY0FBYztFQUdkLHVCQUF1QjtBQUwzQjs7QUFPQztFQUNHLGtCQUFrQjtFQUVqQix1QkFBdUI7RUFDdkIsY0FBYztBQUxuQjs7QUFRQztFQUNJLGlCQUFpQjtFQUNqQixjQUFjO0FBTG5COztBQU9DO0VBQ0ksNEJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQixvQ0FBb0M7RUFDcEMsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFKM0I7O0FBTUM7RUFDSSxvQkFBb0I7RUFDcEIsd0JBQXdCO0FBSDdCOztBQUtDO0VBQ0ksWUFBWTtBQUZqQjs7QUFLQTtFQUNJLGVBQWU7RUFDZixjQUFlO0FBRm5COztBQUtBO0VBQ0ksaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUZ4Qjs7QUFLQTtFQUNJLHVCQUF1QjtBQUYzQjs7QUFJQTtFQUNJLGFBQWE7RUFDYixZQUFZO0VBQ1osbUJBQW1CO0FBRHZCOztBQUdBO0VBQ0ksZ0JBQWU7RUFDZixlQUFjO0FBQWxCOztBQUVBO0VBQ0ksY0FBYTtBQUNqQjs7QUFDQTtFQUNJLGVBQWM7RUFDZCxjQUFhO0VBQ2IsaUJBQWdCO0FBRXBCOztBQUNBO0VBQ0csY0FBYztFQUNkLGlCQUFpQjtFQUNqQixZQUFZO0FBRWY7O0FBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBR3ZCOztBQURBO0VBQ0ksWUFBVztFQUFDLFlBQVk7RUFDeEIsbUJBQW1CO0VBQ25CLHNCQUFxQjtBQUt6Qjs7QUFGQTtFQUNJLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFBQyxtQkFBbUI7QUFNekM7O0FBSkE7RUFDSSxpQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGVBQWM7RUFBQyxrQkFBa0I7QUFRckM7O0FBTkE7RUFDSSw0QkFBNEI7RUFHNUIsV0FBVztFQUNYLFVBQVU7RUFDVixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLFFBQVE7RUFDUixTQUFTO0VBR1QsaUJBQWlCO0VBQ2pCLGVBQWU7QUFLbkI7O0FBSEE7RUFDSSxhQUFhO0VBQ2IsV0FBVztFQUNYLHlCQUFBO0VBQ0EsMEJBQTBCO0VBRzFCLGlCQUFBO0VBQ0EseUJBQXlCO0VBQ3pCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIscUJBQUE7RUFDQSxtQkFBbUI7QUFJdkI7O0FBRUE7RUFDSSxjQUFhO0VBQ2IsWUFBVztBQUNmOztBQUVBO0VBQ0k7SUFDSSxZQUFXO0lBRVosa0JBQWtCO0lBQ2xCLG1CQUFtQjtFQUF4QjtBQUNGOztBQUVBO0VBQ0k7SUFDSSxZQUFXO0lBRVosaUJBQWlCO0lBQ2pCLGtCQUFrQjtFQUF2QjtBQUNGIiwiZmlsZSI6Imt5Yy1mYWNlLXNjYW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuXHJcbntcclxuICAgIHdpZHRoOjMwJTtcclxuICAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDUwLCAxNTIsIDI0Nik7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcblxyXG59XHJcbi5tYWlue1xyXG4gICAgIHdpZHRoOjYwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjVweDtcclxufVxyXG5wcm9ncmVzc1xyXG57XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIC8vIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MmRlZywgI0REOTM5MyAwJSwgIzQ1NkVGQyAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbn1cclxuXHJcblxyXG4jZkNscjF7XHJcbiAgICBtYXJnaW4tbGVmdDogMTUlO1xyXG4gICAgbWFyZ2luLXRvcDogMTJweDtcclxuYm9yZGVyLXJhZGl1czogNXB4O1xyXG5oZWlnaHQ6IDEwMHB4O1xyXG59XHJcbi5jb250ZW50Q2xhc3N7XHJcbiAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICBjb2xvcjogI2ExYTFhMTtcclxuICAgICAvLyBjb2xvcjogI0I3QjdCNztcclxuICAgICAvLyBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuIH1cclxuIC50aXRsZUNsYXNze1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgLy8gIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcclxuICAgICBjb2xvcjogIzYxNjE2MTtcclxuICAgICAvLyBjb2xvcjogIzg4ODg4ODtcclxuIH1cclxuIC5jbG9zZUljb25DbGFzc3tcclxuICAgICBmb250LXNpemU6IG1lZGl1bTtcclxuICAgICBjb2xvcjogIzk5OTk5OTtcclxuIH1cclxuIC5idG5TY2FuQ2xhc3N7XHJcbiAgICAgbGluZS1oZWlnaHQ6MzBweCAhaW1wb3J0YW50O1xyXG4gICAgIGJvcmRlci1jb2xvcjogIzQ1NkVGRTtcclxuICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU2RUZFICFpbXBvcnRhbnQ7XHJcbiAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgIGhlaWdodDogMzVweDtcclxuICAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XHJcbiB9XHJcbiAuY29udGVudERpdntcclxuICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICBwYWRkaW5nOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiB9XHJcbiAuZGl2VGl0bGVDbGFzc3tcclxuICAgICBoZWlnaHQ6IDYwcHg7XHJcbiB9XHJcblxyXG4uZmluZ2VyYWxnbntcclxuICAgIGZvbnQtc2l6ZTogODBweDsgXHJcbiAgICBjb2xvcjogIzZFQkRGOSA7XHJcbn1cclxuXHJcbi5pbWFnZXNEaXZ7XHJcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uaC0xMDB7XHJcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxufVxyXG4jY2xye1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuI2ZjbHJ7XHJcbiAgICBjb2xvcjpsaWdodGdyYXk7XHJcbiAgICBmb250LXNpemU6NjBweDtcclxufVxyXG4uc2NhbkRpdntcclxuICAgIG1hcmdpbi10b3A6NyU7XHJcbn1cclxuI3NjYW57XHJcbiAgICBmb250LXNpemU6MThweDtcclxuICAgIG1hcmdpbi10b3A6NyU7XHJcbiAgICBtYXJnaW4tYm90dG9tOjMlO1xyXG5cclxufVxyXG4jcHJvY2VlZERpdntcclxuICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICBvcGFjaXR5OiA1MCU7XHJcbn1cclxuI3Byb2dyZXNzQmFyRGl2e1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuI2ZpbGV7XHJcbiAgICBoZWlnaHQ6MTBweDtjb2xvcjogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCBncmV5O1xyXG59XHJcblxyXG4jdGh1bWJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBmbGV4LWZsb3c6IG5vd3JhcDttYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbiNmaW5nZXJwcmludFNwYW57XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOjEycHg7bWFyZ2luLWJvdHRvbTogNHB4O1xyXG59XHJcbiNjbG9zZXtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAvLyBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAvLyBmaWxsOiBjdXJyZW50Q29sb3I7XHJcbiAgICBoZWlnaHQ6IDRweDtcclxuICAgIHdpZHRoOiA0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgLy8gbWFyZ2luLXJpZ2h0OiAtNCUgIWltcG9ydGFudDtcclxuICAgIC8vIG1hcmdpbi10b3A6IC0zJSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAtNiU7XHJcbiAgICBtYXJnaW4tdG9wOiAtMyU7XHJcbn1cclxuLmxpbmUge1xyXG4gICAgYm9yZGVyOiB0aGljazsgXHJcbiAgICB3aWR0aDogNzBweDtcclxuICAgIC8qIGJvcmRlci1zdHlsZTogc29saWQ7ICovXHJcbiAgICBib3JkZXItYmxvY2std2lkdGg6IHJldmVydDtcclxuICAgIC8vIGNvbG9yOiBibHVlO1xyXG4gICAgLy8gY29sb3I6ICM2OTg4ZjY7XHJcbiAgICAvKiB3aWR0aDogNDBweDsgKi9cclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRTY3MDA7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjRkU2NzAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgLyogbWFyZ2luOiBpbml0aWFsOyAqL1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbi8vICA6Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXItZmlsbDo6YWZ0ZXIge1xyXG4vLyAgICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuXHJcblxyXG4uaG9sZHtcclxuICAgIG1hcmdpbi10b3A6MyU7XHJcbiAgICBvcGFjaXR5OjYwJTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3OTFweCkgYW5kIChtaW4td2lkdGg6IDUyOXB4KXtcclxuICAgIC5tYWlue1xyXG4gICAgICAgIHdpZHRoOjQwMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTI4cHgpIGFuZCAobWluLXdpZHRoOiAyMDBweCl7XHJcbiAgICAubWFpbntcclxuICAgICAgICB3aWR0aDoyMDBweDtcclxuICAgICAgICBcclxuICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICB9XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](KycFaceScanComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-kyc-face-scan',
            templateUrl: './kyc-face-scan.component.html',
            styleUrls: ['./kyc-face-scan.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
              args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
            }]
          }, {
            type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
          }, {
            type: _shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_0__["FingerPrintCaptureService"]
          }];
        }, null);
      })();
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
    "qFMo":
    /*!***************************************************************!*\
      !*** ./src/app/views/others/kyc-esign/kyc-esign.component.ts ***!
      \***************************************************************/

    /*! exports provided: KycEsignComponent */

    /***/
    function qFMo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "KycEsignComponent", function () {
        return KycEsignComponent;
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


      var angular2_signaturepad__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular2-signaturepad */
      "r1zJ");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      "SVse");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/card */
      "PDjf");

      function KycEsignComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycEsignComponent_div_4_Template_div_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.signNow();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Sign Now ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Enables you to digitally sign the document. To e sign the document, click on it, create your eSignature, click on Done and it will add to your document.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Or");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycEsignComponent_div_4_Template_div_click_14_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.signLater();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Sign Later ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Enables you to sign the document later. To sign later, click here, an email will be sent to the respective email id provided with a sign link. You can verify and sign later.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function KycEsignComponent_div_5_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Please e-sign the application!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-card", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "signature-pad", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onBeginEvent", function KycEsignComponent_div_5_div_1_Template_signature_pad_onBeginEvent_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r7.drawStart();
          })("onEndEvent", function KycEsignComponent_div_5_div_1_Template_signature_pad_onEndEvent_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r9.drawComplete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx_r5.signaturePadOptions);
        }
      }

      function KycEsignComponent_div_5_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sign Link on your Email!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "An email has been sent to ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "johndoe@gmail.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " with the sign link. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function KycEsignComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, KycEsignComponent_div_5_div_1_Template, 9, 1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, KycEsignComponent_div_5_div_2_Template, 16, 0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Done");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.eSignnow);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.eSignlater);
        }
      }

      var KycEsignComponent = /*#__PURE__*/function () {
        function KycEsignComponent(dialogRef) {
          _classCallCheck(this, KycEsignComponent);

          this.dialogRef = dialogRef;
          this.signOptions = true;
          this.onSelection = false;
          this.eSignnow = false;
          this.eSignlater = false;
          this.signaturePadOptions = {// passed through to szimek/signature_pad constructor
          };
        }

        _createClass(KycEsignComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this.signaturePad.set('minWidth', 5);
            this.signaturePad.clear();
            console.log('test console');
          }
        }, {
          key: "drawComplete",
          value: function drawComplete() {
            console.log(this.signaturePad.toDataURL());
          }
        }, {
          key: "drawStart",
          value: function drawStart() {
            console.log('begin drawing');
          }
        }, {
          key: "closeClick",
          value: function closeClick() {
            console.log("close click"); // [routerLink]="['/others/kyc']" 

            this.dialogRef.close({
              message: 'Confirm',
              action: 'closed'
            }); // this.router.navigateByUrl('/others/kyc'); 
          }
        }, {
          key: "signNow",
          value: function signNow() {
            console.log("Sign Now");
            this.onSelection = true;
            this.eSignnow = true;
            this.signOptions = false;
          }
        }, {
          key: "signLater",
          value: function signLater() {
            console.log("Sign Later");
            this.onSelection = true;
            this.eSignlater = true;
            this.signOptions = false;
          }
        }]);

        return KycEsignComponent;
      }();

      KycEsignComponent.ɵfac = function KycEsignComponent_Factory(t) {
        return new (t || KycEsignComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]));
      };

      KycEsignComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: KycEsignComponent,
        selectors: [["app-kyc-esign"]],
        viewQuery: function KycEsignComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](angular2_signaturepad__WEBPACK_IMPORTED_MODULE_2__["SignaturePad"], true);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.signaturePad = _t.first);
          }
        },
        decls: 6,
        vars: 2,
        consts: [[1, "dialog-wrapper"], ["fxLayoutAlign", "end stretch"], ["id", "close", 1, "mat-18", 3, "click"], ["class", "signoptions", 4, "ngIf"], ["class", "on-selection", 4, "ngIf"], [1, "signoptions"], [1, "signnow", 3, "click"], [1, "img"], ["src", "assets/images/signnow.png", "alt", "", 1, "signnowImg"], [1, "signnow-wrapper"], ["fxFlex", "15", 1, "header-font"], ["fxFlex", "80", 1, "para-font"], [1, "Or"], [1, "signlater", 3, "click"], ["src", "assets/images/signlater.png", "alt", "", 1, "signlaterImg"], [1, "on-selection"], ["class", "e-sign", "fxLayout", "column", 4, "ngIf"], ["class", "later", "fxLayout", "column", 4, "ngIf"], ["fxLayoutAlign", "center stretch", 1, "done"], ["mat-raised-button", "", 1, "doneButton"], ["fxLayout", "column", 1, "e-sign"], ["fxFlex", "50", "fxLayoutAlign", "center stretch"], ["src", "assets/images/esign.png", "alt", "", 1, "esignImg"], ["fxFlex", "50", "fxLayoutAlign", "center stretch", 1, "esign-header"], [1, "inputMatcard"], [3, "options", "onBeginEvent", "onEndEvent"], ["fxLayout", "column", 1, "later"], ["src", "assets/images/esignlater.png", "alt", "", 1, "esignImg"], [1, "email-text"]],
        template: function KycEsignComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function KycEsignComponent_Template_mat_icon_click_2_listener() {
              return ctx.closeClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "close");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, KycEsignComponent_div_4_Template, 23, 0, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, KycEsignComponent_div_5_Template, 6, 2, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.signOptions);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.onSelection);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_3__["DefaultLayoutDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], angular2_signaturepad__WEBPACK_IMPORTED_MODULE_2__["SignaturePad"]],
        styles: [".dialog-wrapper[_ngcontent-%COMP%] {\n  width: 800px;\n  height: 500px;\n  padding-left: 25px;\n  padding-right: 25px;\n}\n\n#close[_ngcontent-%COMP%] {\n  font-size: 20px;\n  display: flex;\n  justify-content: flex-end;\n  color: #000000;\n  padding-top: 10px;\n  padding-right: 10px;\n  margin-right: -6%;\n  margin-top: -3%;\n}\n\n.signnow[_ngcontent-%COMP%] {\n  width: 697px;\n  height: 146px;\n  margin-top: 5%;\n  border-radius: 36px;\n  border: 1px solid #f8f8f8;\n  box-shadow: 4px 4px 4px #eeeeee;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n}\n\n.signnow[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 4px #456EFE;\n}\n\n.Or[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: 'Montserrat' !important;\n  color: #8a8a8a;\n  font-size: 18px;\n}\n\n.signlater[_ngcontent-%COMP%] {\n  width: 697px;\n  height: 146px;\n  border-radius: 36px;\n  border: 1px solid #f8f8f8;\n  box-shadow: 4px 4px 4px #eeeeee;\n  margin-left: auto;\n  margin-right: auto;\n  cursor: pointer;\n  display: flex;\n  flex-direction: row;\n}\n\n.signlater[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 0 4px #456EFE;\n}\n\n.signnowImg[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.signlaterImg[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.header-font[_ngcontent-%COMP%] {\n  font-family: 'Montserrat' !important;\n  color: #000000;\n  font-size: 14px;\n  padding: 20px;\n}\n\n.para-font[_ngcontent-%COMP%] {\n  font-family: 'Montserrat' !important;\n  color: #7e7e7e;\n  font-size: 10px;\n  padding-top: 10px;\n  padding-left: 20px;\n}\n\n.esignImg[_ngcontent-%COMP%] {\n  padding-top: 10px;\n}\n\n.esign-header[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: 'Montserrat' !important;\n  color: #000000;\n  font-size: 26px;\n}\n\n.inputMatcard[_ngcontent-%COMP%] {\n  height: 159px;\n  width: 354px;\n  background-image: linear-gradient(#fdfdfd, whitesmoke);\n}\n\n.doneButton[_ngcontent-%COMP%] {\n  height: 50px;\n  width: 228px;\n  border-radius: 24px;\n  background-color: #456EFE;\n  color: white;\n}\n\n.done[_ngcontent-%COMP%] {\n  padding: 2%;\n}\n\n.email-text[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n\n.signnow-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.img[_ngcontent-%COMP%] {\n  width: 24%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxca3ljLWVzaWduLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBVztFQUNYLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsbUJBQW1CO0FBQ3ZCOztBQUNBO0VBQ0ksZUFBZTtFQUNmLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFFbkI7O0FBQUE7RUFDSSxZQUFXO0VBQ1gsYUFBYTtFQUNiLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIseUJBQXdCO0VBQ3hCLCtCQUErQjtFQUMvQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0FBR3ZCOztBQURBO0VBQ0ksMkJBQTJCO0FBSS9COztBQUZBO0VBQ0ksa0JBQWtCO0VBQ2xCLG9DQUFvQztFQUNwQyxjQUFjO0VBQ2QsZUFBZTtBQUtuQjs7QUFIQTtFQUNJLFlBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHlCQUF3QjtFQUN4QiwrQkFBK0I7RUFDL0IsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFjO0VBQ2QsYUFBYTtFQUNiLG1CQUFtQjtBQU12Qjs7QUFKQTtFQUNJLDJCQUEyQjtBQU8vQjs7QUFMQTtFQUNHLGFBQWE7QUFRaEI7O0FBTkE7RUFDSSxhQUFhO0FBU2pCOztBQVBDO0VBQ0csb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtBQVVqQjs7QUFSQztFQUNHLG9DQUFvQztFQUNwQyxjQUFjO0VBQ2QsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFXdEI7O0FBVEM7RUFDRyxpQkFBaUI7QUFZckI7O0FBVkM7RUFDRyxrQkFBa0I7RUFDbEIsb0NBQW9DO0VBQ3BDLGNBQWM7RUFDZCxlQUFlO0FBYW5COztBQVhDO0VBQ0csYUFBYTtFQUNiLFlBQVc7RUFDWCxzREFBeUU7QUFjN0U7O0FBWkM7RUFFRSxZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsWUFBWTtBQWNmOztBQVpBO0VBQ0EsV0FBVztBQWVYOztBQWJBO0VBQ0ksZUFBZTtBQWdCbkI7O0FBZEE7RUFDRyxhQUFhO0VBQ2Isc0JBQXNCO0FBaUJ6Qjs7QUFmQTtFQUNJLFVBQVU7QUFrQmQiLCJmaWxlIjoia3ljLWVzaWduLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpYWxvZy13cmFwcGVye1xyXG4gICAgd2lkdGg6ODAwcHg7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMjVweDsgXHJcbn1cclxuI2Nsb3Nle1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTYlO1xyXG4gICAgbWFyZ2luLXRvcDogLTMlO1xyXG59XHJcbi5zaWdubm93e1xyXG4gICAgd2lkdGg6Njk3cHg7XHJcbiAgICBoZWlnaHQ6IDE0NnB4O1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNnB4OyBcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2Y4ZjhmODtcclxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggNHB4ICNlZWVlZWU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLnNpZ25ub3c6aG92ZXIge1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDRweCAjNDU2RUZFOyBcclxuICB9XHJcbi5PcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjOGE4YThhO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcbi5zaWdubGF0ZXJ7XHJcbiAgICB3aWR0aDo2OTdweDtcclxuICAgIGhlaWdodDogMTQ2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzNnB4OyBcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2Y4ZjhmODtcclxuICAgIGJveC1zaGFkb3c6IDRweCA0cHggNHB4ICNlZWVlZWU7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuLnNpZ25sYXRlcjpob3ZlciB7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgNHB4ICM0NTZFRkU7IFxyXG4gIH1cclxuLnNpZ25ub3dJbWd7XHJcbiAgIHBhZGRpbmc6IDEwcHg7ICAgXHJcbn1cclxuLnNpZ25sYXRlckltZ3tcclxuICAgIHBhZGRpbmc6IDEwcHg7ICAgXHJcbiB9XHJcbiAuaGVhZGVyLWZvbnR7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDsgXHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gfVxyXG4gLnBhcmEtZm9udHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjN2U3ZTdlO1xyXG4gICAgZm9udC1zaXplOiAxMHB4OyBcclxuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gfVxyXG4gLmVzaWduSW1ne1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiB9XHJcbiAuZXNpZ24taGVhZGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBmb250LXNpemU6IDI2cHg7IFxyXG4gfVxyXG4gLmlucHV0TWF0Y2FyZHtcclxuICAgIGhlaWdodDogMTU5cHg7XHJcbiAgICB3aWR0aDozNTRweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2IoMjUzLCAyNTMsIDI1MyksIHJnYigyNDUsIDI0NSwgMjQ1KSk7XHJcbiB9XHJcbiAuZG9uZUJ1dHRvblxyXG57XHJcbiAgIGhlaWdodDogNTBweDtcclxuICAgd2lkdGg6IDIyOHB4O1xyXG4gICBib3JkZXItcmFkaXVzOiAyNHB4O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU2RUZFO1xyXG4gICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmRvbmV7XHJcbnBhZGRpbmc6IDIlO1xyXG59XHJcbi5lbWFpbC10ZXh0e1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5zaWdubm93LXdyYXBwZXJ7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuLmltZ3tcclxuICAgIHdpZHRoOiAyNCU7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KycEsignComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-kyc-esign',
            templateUrl: './kyc-esign.component.html',
            styleUrls: ['./kyc-esign.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]
          }];
        }, {
          signaturePad: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [angular2_signaturepad__WEBPACK_IMPORTED_MODULE_2__["SignaturePad"]]
          }]
        });
      })();
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


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "VDRc");
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/icon */
      "Tj54");
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      "Q2Ze");
      /* harmony import */


      var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/material/button */
      "Dxy4");

      var VerificationCompletedComponent = /*#__PURE__*/function () {
        function VerificationCompletedComponent(api, router, dialogRef, dialogService, data) {
          _classCallCheck(this, VerificationCompletedComponent);

          this.api = api;
          this.router = router;
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
            var _this43 = this;

            this.reference = sessionStorage.getItem('kyc_reference');
            this.customer_Id = sessionStorage.getItem('customer_id');
            this.api.getId().subscribe(function (info) {
              console.log("info from other component", _this43.customerId);

              _this43.assign(info.id);
            });
            setTimeout(function () {
              document.getElementById('kychide').click();
            }, 500);
            setTimeout(function () {
              _this43.updateKycStatus();
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
            this.dialogRef.close();
            sessionStorage.removeItem('customer_id');
            localStorage.removeItem('customer_id');
            sessionStorage.removeItem('kyc_reference');
            this.router.navigateByUrl("/others/Service"); // this.router.navigateByUrl('/others/kyc-method');

            this.dialogService.openKycVerificationMethod();
          }
        }, {
          key: "updateKycStatus",
          value: function updateKycStatus() {
            console.log('customerId :: ', this.customer_Id);
            this.api.updateKycStatusByCustId(this.customer_Id, 'INITIATED', "").subscribe(function (data) {
              console.log('update response :: ', data);
            });
          }
        }]);

        return VerificationCompletedComponent;
      }();

      VerificationCompletedComponent.ɵfac = function VerificationCompletedComponent_Factory(t) {
        return new (t || VerificationCompletedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_dialogs_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
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
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"]],
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
//# sourceMappingURL=default~views-others-others-module~views-others-video-verification-video-verification-module-es5.js.map