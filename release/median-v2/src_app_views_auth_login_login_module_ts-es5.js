(function () {
  "use strict";

  function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

  function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

  function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_auth_login_login_module_ts"], {
    /***/
    49624:
    /*!*************************************************************************!*\
      !*** ./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NgOtpInputComponent": function NgOtpInputComponent() {
          return (
            /* binding */
            _NgOtpInputComponent
          );
        },

        /* harmony export */
        "NgOtpInputModule": function NgOtpInputModule() {
          return (
            /* binding */
            _NgOtpInputModule
          );
        },

        /* harmony export */
        "ɵa": function ɵa() {
          return (
            /* binding */
            KeysPipe
          );
        },

        /* harmony export */
        "ɵb": function ɵb() {
          return (
            /* binding */
            NumberOnlyDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function NgOtpInputComponent_div_0_input_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NgOtpInputComponent_div_0_input_1_Template_input_keydown_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r4.onKeyDown($event);
          })("keyup", function NgOtpInputComponent_div_0_input_1_Template_input_keyup_0_listener($event) {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var i_r3 = restoredCtx.index;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r6.onKeyUp($event, i_r3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r2 = ctx.$implicit;
          var i_r3 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("otp-input ", ctx_r1.config.inputClass, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "otp_", i_r3, "_", ctx_r1.componentKey, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pattern", ctx_r1.config.allowNumbersOnly ? "\\d*" : "")("type", ctx_r1.inputType)("placeholder", (ctx_r1.config == null ? null : ctx_r1.config.placeholder) || "")("disabledNumberOnly", !ctx_r1.config.allowNumbersOnly)("ngStyle", ctx_r1.config.inputStyles)("formControl", ctx_r1.otpForm.controls[item_r2]);
        }
      }

      function NgOtpInputComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgOtpInputComponent_div_0_input_1_Template, 1, 11, "input", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keys");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("wrapper ", ctx_r0.config.containerClass, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "c_", ctx_r0.componentKey, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.config.containerStyles);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx_r0.otpForm == null ? null : ctx_r0.otpForm.controls));
        }
      }

      var KeysPipe = /*#__PURE__*/function () {
        function KeysPipe() {
          _classCallCheck(this, KeysPipe);
        }

        _createClass(KeysPipe, [{
          key: "transform",
          value: function transform(value) {
            return Object.keys(value);
          }
        }]);

        return KeysPipe;
      }();

      KeysPipe.ɵfac = function KeysPipe_Factory(t) {
        return new (t || KeysPipe)();
      };

      KeysPipe.ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "keys",
        type: KeysPipe,
        pure: true
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeysPipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
          args: [{
            name: 'keys'
          }]
        }], null, null);
      })();

      var Config = /*#__PURE__*/_createClass(function Config() {
        _classCallCheck(this, Config);
      });

      var _NgOtpInputComponent = /*#__PURE__*/function () {
        function _NgOtpInputComponent(keysPipe) {
          _classCallCheck(this, _NgOtpInputComponent);

          this.keysPipe = keysPipe;
          this.config = {
            length: 4
          }; // tslint:disable-next-line: no-output-on-prefix

          this.onInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.inputControls = new Array(this.config.length);
          this.componentKey = Math.random().toString(36).substring(2) + new Date().getTime().toString(36);
        }

        _createClass(_NgOtpInputComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.otpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({});

            for (var index = 0; index < this.config.length; index++) {
              this.otpForm.addControl(this.getControlName(index), new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl());
            }

            this.otpForm.valueChanges.subscribe(function (v) {
              _this.keysPipe.transform(_this.otpForm.controls).forEach(function (k) {
                var val = _this.otpForm.controls[k].value;

                if (val && val.length > 1) {
                  if (val.length >= _this.config.length) {
                    _this.setValue(val);
                  } else {
                    _this.rebuildValue();
                  }
                }
              });
            });
            this.inputType = this.getInputType();
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this2 = this;

            if (!this.config.disableAutoFocus) {
              var containerItem = document.getElementById("c_".concat(this.componentKey));

              if (containerItem) {
                containerItem.addEventListener('paste', function (evt) {
                  return _this2.handlePaste(evt);
                });
                var ele = containerItem.getElementsByClassName('otp-input')[0];

                if (ele && ele.focus) {
                  ele.focus();
                }
              }
            }
          }
        }, {
          key: "getControlName",
          value: function getControlName(idx) {
            return "ctrl_".concat(idx);
          }
        }, {
          key: "ifLeftArrow",
          value: function ifLeftArrow(event) {
            return this.ifKeyCode(event, 37);
          }
        }, {
          key: "ifRightArrow",
          value: function ifRightArrow(event) {
            return this.ifKeyCode(event, 39);
          }
        }, {
          key: "ifBackspaceOrDelete",
          value: function ifBackspaceOrDelete(event) {
            return event.key === 'Backspace' || event.key === 'Delete' || this.ifKeyCode(event, 8) || this.ifKeyCode(event, 46);
          }
        }, {
          key: "ifKeyCode",
          value: function ifKeyCode(event, targetCode) {
            var key = event.keyCode || event.charCode; // tslint:disable-next-line: triple-equals

            return key == targetCode ? true : false;
          }
        }, {
          key: "onKeyDown",
          value: function onKeyDown($event) {
            var isSpace = this.ifKeyCode($event, 32);

            if (isSpace) {
              // prevent space
              return false;
            }
          }
        }, {
          key: "onKeyUp",
          value: function onKeyUp($event, inputIdx) {
            var nextInputId = this.appendKey("otp_".concat(inputIdx + 1));
            var prevInputId = this.appendKey("otp_".concat(inputIdx - 1));

            if (this.ifRightArrow($event)) {
              this.setSelected(nextInputId);
              return;
            }

            if (this.ifLeftArrow($event)) {
              this.setSelected(prevInputId);
              return;
            }

            var isBackspace = this.ifBackspaceOrDelete($event);

            if (isBackspace && !$event.target.value) {
              this.setSelected(prevInputId);
              this.rebuildValue();
              return;
            }

            if (!$event.target.value) {
              return;
            }

            if (this.ifValidEntry($event)) {
              this.setSelected(nextInputId);
            }

            this.rebuildValue();
          }
        }, {
          key: "appendKey",
          value: function appendKey(id) {
            return "".concat(id, "_").concat(this.componentKey);
          }
        }, {
          key: "setSelected",
          value: function setSelected(eleId) {
            this.focusTo(eleId);
            var ele = document.getElementById(eleId);

            if (ele && ele.setSelectionRange) {
              setTimeout(function () {
                ele.setSelectionRange(0, 1);
              }, 0);
            }
          }
        }, {
          key: "ifValidEntry",
          value: function ifValidEntry(event) {
            var inp = String.fromCharCode(event.keyCode);
            var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
            return isMobile || /[a-zA-Z0-9-_]/.test(inp) || this.config.allowKeyCodes && this.config.allowKeyCodes.includes(event.keyCode) || event.keyCode >= 96 && event.keyCode <= 105;
          }
        }, {
          key: "focusTo",
          value: function focusTo(eleId) {
            var ele = document.getElementById(eleId);

            if (ele) {
              ele.focus();
            }
          } // method to set component value

        }, {
          key: "setValue",
          value: function setValue(value) {
            var _this3 = this;

            if (this.config.allowNumbersOnly && isNaN(value)) {
              return;
            }

            this.otpForm.reset();

            if (!value) {
              this.rebuildValue();
              return;
            }

            value = value.toString().replace(/\s/g, ''); // remove whitespace

            Array.from(value).forEach(function (c, idx) {
              if (_this3.otpForm.get(_this3.getControlName(idx))) {
                _this3.otpForm.get(_this3.getControlName(idx)).setValue(c);
              }
            });

            if (!this.config.disableAutoFocus) {
              var containerItem = document.getElementById("c_".concat(this.componentKey));
              var indexOfElementToFocus = value.length < this.config.length ? value.length : this.config.length - 1;
              var ele = containerItem.getElementsByClassName('otp-input')[indexOfElementToFocus];

              if (ele && ele.focus) {
                ele.focus();
              }
            }

            this.rebuildValue();
          }
        }, {
          key: "rebuildValue",
          value: function rebuildValue() {
            var _this4 = this;

            var val = '';
            this.keysPipe.transform(this.otpForm.controls).forEach(function (k) {
              if (_this4.otpForm.controls[k].value) {
                var ctrlVal = _this4.otpForm.controls[k].value;
                var isLengthExceed = ctrlVal.length > 1;
                var isCaseTransformEnabled = !_this4.config.allowNumbersOnly && _this4.config.letterCase && (_this4.config.letterCase.toLocaleLowerCase() == 'upper' || _this4.config.letterCase.toLocaleLowerCase() == 'lower');
                ctrlVal = ctrlVal[0];
                var transformedVal = isCaseTransformEnabled ? _this4.config.letterCase.toLocaleLowerCase() == 'upper' ? ctrlVal.toUpperCase() : ctrlVal.toLowerCase() : ctrlVal;

                if (isCaseTransformEnabled && transformedVal == ctrlVal) {
                  isCaseTransformEnabled = false;
                } else {
                  ctrlVal = transformedVal;
                }

                val += ctrlVal;

                if (isLengthExceed || isCaseTransformEnabled) {
                  _this4.otpForm.controls[k].setValue(ctrlVal);
                }
              }
            });
            this.onInputChange.emit(val);
          }
        }, {
          key: "getInputType",
          value: function getInputType() {
            return this.config.isPasswordInput ? 'password' : this.config.allowNumbersOnly ? 'tel' : 'text';
          }
        }, {
          key: "handlePaste",
          value: function handlePaste(e) {
            // Get pasted data via clipboard API
            var clipboardData = e.clipboardData || window['clipboardData'];

            if (clipboardData) {
              var pastedData = clipboardData.getData('Text');
            } // Stop data actually being pasted into div


            e.stopPropagation();
            e.preventDefault();

            if (!pastedData) {
              return;
            }

            this.setValue(pastedData);
          }
        }]);

        return _NgOtpInputComponent;
      }();

      _NgOtpInputComponent.ɵfac = function NgOtpInputComponent_Factory(t) {
        return new (t || _NgOtpInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](KeysPipe));
      };

      _NgOtpInputComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _NgOtpInputComponent,
        selectors: [["ng-otp-input"]],
        inputs: {
          config: "config"
        },
        outputs: {
          onInputChange: "onInputChange"
        },
        decls: 1,
        vars: 1,
        consts: [[3, "class", "id", "ngStyle", 4, "ngIf"], [3, "id", "ngStyle"], ["numberOnly", "", "autocomplete", "one-time-code", 3, "pattern", "type", "placeholder", "disabledNumberOnly", "ngStyle", "class", "formControl", "id", "keydown", "keyup", 4, "ngFor", "ngForOf"], ["numberOnly", "", "autocomplete", "one-time-code", 3, "pattern", "type", "placeholder", "disabledNumberOnly", "ngStyle", "formControl", "id", "keydown", "keyup"]],
        template: function NgOtpInputComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgOtpInputComponent_div_0_Template, 3, 8, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.otpForm == null ? null : ctx.otpForm.controls);
          }
        },
        directives: function directives() {
          return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, NumberOnlyDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective];
        },
        pipes: function pipes() {
          return [KeysPipe];
        },
        styles: [".otp-input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}@media screen and (max-width: 767px){.otp-input[_ngcontent-%COMP%]{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input[_ngcontent-%COMP%]{width:30px;font-size:18px;height:30px}}"]
      });
      /**
       * @type {function(): !Array<(null|{
       *   type: ?,
       *   decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>),
       * })>}
       * @nocollapse
       */

      _NgOtpInputComponent.ctorParameters = function () {
        return [{
          type: KeysPipe
        }];
      };
      /** @type {!Object<string, !Array<{type: !Function, args: (undefined|!Array<?>)}>>} */


      _NgOtpInputComponent.propDecorators = {
        config: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        onInputChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_NgOtpInputComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            // tslint:disable-next-line: component-selector
            selector: 'ng-otp-input',
            template: "<div class=\"wrapper {{config.containerClass}}\" id=\"c_{{componentKey}}\" *ngIf=\"otpForm?.controls\"\r\n  [ngStyle]=\"config.containerStyles\">\r\n  <input [pattern]=\"config.allowNumbersOnly ? '\\\\d*' : ''\" [type]=\"inputType\" numberOnly [placeholder]=\"config?.placeholder || ''\"\r\n    [disabledNumberOnly]=\"!config.allowNumbersOnly\" [ngStyle]=\"config.inputStyles\" \r\n    class=\"otp-input {{config.inputClass}}\" autocomplete=\"one-time-code\" *ngFor=\"let item of otpForm?.controls | keys;let i=index\"\r\n    [formControl]=\"otpForm.controls[item]\" id=\"otp_{{i}}_{{componentKey}}\" (keydown)=\"onKeyDown($event)\"\r\n    (keyup)=\"onKeyUp($event,i)\">\r\n</div>",
            styles: [".otp-input{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.wrapper .otp-input:not(:last-child){margin-right:8px}@media screen and (max-width: 767px){.otp-input{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input{width:30px;font-size:18px;height:30px}}\n"]
          }]
        }], function () {
          return [{
            type: KeysPipe
          }];
        }, {
          config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          onInputChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }]
        });
      })();

      var NumberOnlyDirective = /*#__PURE__*/function () {
        function NumberOnlyDirective(_elRef, _renderer) {
          _classCallCheck(this, NumberOnlyDirective);

          this._elRef = _elRef;
          this._renderer = _renderer;
        }

        _createClass(NumberOnlyDirective, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (!this.disabledNumberOnly) {
              this._renderer.setAttribute(this._elRef.nativeElement, 'onkeypress', 'return (event.charCode >= 48 && event.charCode <= 57) || event.charCode == 0');
            }
          }
        }]);

        return NumberOnlyDirective;
      }();

      NumberOnlyDirective.ɵfac = function NumberOnlyDirective_Factory(t) {
        return new (t || NumberOnlyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
      };

      NumberOnlyDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: NumberOnlyDirective,
        selectors: [["", "numberOnly", ""]],
        inputs: {
          disabledNumberOnly: "disabledNumberOnly"
        }
      });
      /**
       * @type {function(): !Array<(null|{
       *   type: ?,
       *   decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>),
       * })>}
       * @nocollapse
       */

      NumberOnlyDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
        }];
      };
      /** @type {!Object<string, !Array<{type: !Function, args: (undefined|!Array<?>)}>>} */


      NumberOnlyDirective.propDecorators = {
        disabledNumberOnly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberOnlyDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[numberOnly]'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
          }];
        }, {
          disabledNumberOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();

      var _NgOtpInputModule = /*#__PURE__*/_createClass(function _NgOtpInputModule() {
        _classCallCheck(this, _NgOtpInputModule);
      });

      _NgOtpInputModule.ɵfac = function NgOtpInputModule_Factory(t) {
        return new (t || _NgOtpInputModule)();
      };

      _NgOtpInputModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _NgOtpInputModule
      });
      _NgOtpInputModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        providers: [KeysPipe],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_NgOtpInputModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule],
            declarations: [_NgOtpInputComponent, KeysPipe, NumberOnlyDirective],
            exports: [_NgOtpInputComponent],
            providers: [KeysPipe]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_NgOtpInputModule, {
          declarations: function declarations() {
            return [_NgOtpInputComponent, KeysPipe, NumberOnlyDirective];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule];
          },
          exports: function exports() {
            return [_NgOtpInputComponent];
          }
        });
      })();
      /*
       * Public API Surface of ng-otp-input
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

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

        this.currentUser = "SAKTHI";
        this.userPermissions = {
          "screenAndPermissionsDTO": [{
            "permissions": "1111111111",
            "screenId": 2,
            "screenName": "Users"
          }, {
            "permissions": "1111111111",
            "screenId": 3,
            "screenName": "Roles"
          }, {
            "permissions": "1111111111",
            "screenId": 4,
            "screenName": "Audit Logs"
          }, {
            "permissions": "1111111111",
            "screenId": 5,
            "screenName": "Password Policy"
          }, {
            "permissions": "1111111111",
            "screenId": 6,
            "screenName": "Process Monitoring"
          }, {
            "permissions": "1111111111",
            "screenId": 7,
            "screenName": "External Systems"
          }, {
            "permissions": "1111111111",
            "screenId": 8,
            "screenName": "Process Code Mapping"
          }, {
            "permissions": "1111111111",
            "screenId": 9,
            "screenName": "Excel Mapping"
          }, {
            "permissions": "1111111111",
            "screenId": 10,
            "screenName": "Upload Excel"
          }, {
            "permissions": "1111111111",
            "screenId": 11,
            "screenName": "Authorize Excel"
          }, {
            "permissions": "1111111111",
            "screenId": 12,
            "screenName": "Rejection Queue"
          }, {
            "permissions": "1111111111",
            "screenId": 13,
            "screenName": "Authorize Modifications"
          }, {
            "permissions": "1111111111",
            "screenId": 14,
            "screenName": "Excel Processing Summary"
          }, {
            "permissions": "1111111111",
            "screenId": 15,
            "screenName": "Customer search"
          }, {
            "permissions": "1111111111",
            "screenId": 16,
            "screenName": "Email-Management"
          }, {
            "permissions": "1111111111",
            "screenId": 17,
            "screenName": "Transaction Code Maint"
          }, {
            "permissions": "1111111111",
            "screenId": 18,
            "screenName": "Initiate Account Closure"
          }, {
            "permissions": "1111111111",
            "screenId": 19,
            "screenName": "Process Account Closure"
          }, {
            "permissions": "1111111111",
            "screenId": 20,
            "screenName": "Acc Closure Maintenance"
          }, {
            "permissions": "1111111111",
            "screenId": 21,
            "screenName": "Charge Maintenance"
          }, {
            "permissions": "1111111111",
            "screenId": 22,
            "screenName": "GlobalCodeMaintenance"
          }, {
            "permissions": "1111111111",
            "screenId": 23,
            "screenName": "UserCodeMaintenance"
          }, {
            "permissions": "1111111111",
            "screenId": 24,
            "screenName": "AcumenJournal"
          }, {
            "permissions": "1111111111",
            "screenId": 25,
            "screenName": "Treasury Reference"
          }, {
            "permissions": "1111111111",
            "screenId": 26,
            "screenName": "Cash Payments"
          }, {
            "permissions": "1111111111",
            "screenId": 27,
            "screenName": "Authorize Cash Payments"
          }],
          "labels": [{
            "labelId": 1,
            "labelName": "NEW",
            "labelDescription": "New",
            "language": "EN"
          }, {
            "labelId": 2,
            "labelName": "EDIT",
            "labelDescription": "Edit",
            "language": "EN"
          }, {
            "labelId": 3,
            "labelName": "DELETE",
            "labelDescription": "Delete",
            "language": "EN"
          }, {
            "labelId": 4,
            "labelName": "CLOSE",
            "labelDescription": "Close",
            "language": "EN"
          }, {
            "labelId": 5,
            "labelName": "REOPEN",
            "labelDescription": "Reopen",
            "language": "EN"
          }, {
            "labelId": 6,
            "labelName": "UNLOCK",
            "labelDescription": "Unlock",
            "language": "EN"
          }, {
            "labelId": 7,
            "labelName": "PRINT",
            "labelDescription": "Print",
            "language": "EN"
          }, {
            "labelId": 8,
            "labelName": "AUTH",
            "labelDescription": "Auth",
            "language": "EN"
          }, {
            "labelId": 9,
            "labelName": "VIEW",
            "labelDescription": "View",
            "language": "EN"
          }, {
            "labelId": 10,
            "labelName": "REJECT",
            "labelDescription": "Reject",
            "language": "EN"
          }]
        };
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

      _LoginRoutingModule.ɵfac = function LoginRoutingModule_Factory(t) {
        return new (t || _LoginRoutingModule)();
      };

      _LoginRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _LoginRoutingModule
      });
      _LoginRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(loginRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_LoginRoutingModule, {
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
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


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
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


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ngx-spinner */
      55314);
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var ng_otp_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ng-otp-input */
      49624);

      var _c0 = ["ngOtpInput"];

      function LoginComponent_div_7_img_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "img", 36);
        }
      }

      function LoginComponent_div_7_img_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "img", 37);
        }
      }

      var _c1 = function _c1() {
        return ["/forget-password"];
      };

      function LoginComponent_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "h2", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Log in");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "p", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5, "How do i get started lorem ipsum dolor at?");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "form", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "label", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10, "User ID*");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](11, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "label", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "input", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "span", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginComponent_div_7_Template_span_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r4.hide = !ctx_r4.hide;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](21, LoginComponent_div_7_img_21_Template, 1, 0, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, LoginComponent_div_7_img_22_Template, 1, 0, "img", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginComponent_div_7_Template_button_click_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r5);

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r6.getOtp();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "Get OTP");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "a", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, "Forgot Password?");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](30, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, "MEDIAN 2021-Connecting Systems");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r0.signinForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("type", ctx_r0.hide ? "password" : "text");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r0.hide);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.hide);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx_r0.signinForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](6, _c1));
        }
      }

      function LoginComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "form", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "h1", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6, "Two Step Verification");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Enter the verification code we sent to");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Type your 6 digit security code");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "ng-otp-input", 47, 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("onInputChange", function LoginComponent_div_9_Template_ng_otp_input_onInputChange_15_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r8.onOtpChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginComponent_div_9_Template_button_click_18_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r10.signin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, " Verify ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginComponent_div_9_Template_button_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r11.resendOtpMethod();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, " Resend OTP ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "button", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LoginComponent_div_9_Template_button_click_22_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r9);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r12.backToLogin();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, " Exit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r1.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("config", ctx_r1.config);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", !ctx_r1.isValid);
        }
      }

      var _LoginComponent = /*#__PURE__*/function () {
        // currentDate: any;
        // changePwdDate: any;
        function _LoginComponent(router, jwtAuth, toastService, fb, cd, ls, demoUser, iziToast, spinner, apiService) {
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
          this.hide = true;
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
        }

        _createClass(_LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.signinForm = this.fb.group({
              username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
              password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.min(3)]]
            });
          }
        }, {
          key: "toggle",
          value: function toggle() {
            var _this5 = this;

            setTimeout(function () {
              //  this.spinner.hide();
              _this5.showOtpComponent = !_this5.showOtpComponent;

              _this5.showTimer(60);
            }, 2500);
          }
        }, {
          key: "getOtp",
          value: function getOtp() {
            var _this6 = this;

            //  this.spinner.show();
            var login = {};
            login.username = this.signinForm.value.username;
            login.password = this.signinForm.value.password;
            var encryptedAES = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(this.signinForm.value.password, "@12#90!^*NPR*g&*()$34#$");
            var USERNAME = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(this.signinForm.value.username, "@12#90!^*NPR*g&*()$34#$");
            var data = encryptedAES.toString();
            var uname = USERNAME.toString(); // Skip login Section start
            // this.signinForm.value.password = data;
            // this.ls.setItem("currentUser", this.demoUser.currentUser);
            // this.ls.setItem("userPermissions", this.demoUser.userPermissions);
            // this.ls.setItem("department", this.demoUser.department);
            // this.ls.setItem("LoggedInUser", this.demoUser.LoggedInUser);
            // this.ls.setItem("userobj", this.demoUser.userobj);
            // this.ls.setItem("usercompleteobj", this.demoUser.usercompleteobj);
            // this.router.navigate(["/dashboard"]);
            // this.jwtAuth.setUserAndToken("affsff", {}, true);
            // Skip login Section end

            console.log("jygjh");
            this.apiService.fetchMedUser(this.signinForm.value.username).subscribe(function (response) {
              console.log(response);
              _this6.user = response;
              _this6.email = _this6.user.email;
              localStorage.setItem("userFromLogin", _this6.user.userId);
              sessionStorage.setItem("user_id", _this6.user.userId);

              if (_this6.user.statusForUser === "Enable" && _this6.user.verifiedStatus === "A") {
                //---------- Password Policy Implementation (BEGIN) ----------
                _this6.apiService.fetchSecurityPolicyService().subscribe(function (resp) {
                  _this6.security = resp;
                  _this6.notifyPswdExpry = _this6.security.notifyPasswordExpiryInDays;
                  _this6.pswdExpiry = _this6.security.pswdExpiry;

                  if (_this6.pswdExpiry === 0 && _this6.notifyPswdExpry === 0) {
                    console.log("Hitting dashboard");

                    _this6.router.navigate(["/dashboard"]).then(function (data) {
                      return console.log("dashboard hit", data);
                    });
                  } else {
                    _this6.currentDate = new Date();
                    _this6.changePwdDate = new Date(_this6.user.pwdChangeDate);
                    _this6.differnceInTime = _this6.currentDate - _this6.changePwdDate;
                    _this6.differnceInDays = Math.floor(_this6.differnceInTime / (1000 * 3600 * 24));
                    _this6.finalDiff = _this6.pswdExpiry - _this6.differnceInDays;

                    if (_this6.finalDiff === 0 || _this6.finalDiff <= 0) {
                      _this6.toastService.errorMessage("Your Password is expired. Please reset your password.", "");
                    } else {
                      _this6.check = true;

                      if (_this6.signinForm.value.password === "" || _this6.signinForm.value.username === "") {
                        _this6.toastService.errorMessage("Please enter login credentials.", "");
                      } else {
                        var encryptedAES = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(login.password, "@12#90!^*NPR*g&*()$34#$");
                        var USERNAME = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(login.username, "@12#90!^*NPR*g&*()$34#$");
                        var data = encryptedAES.toString();
                        var uname = USERNAME.toString();
                        login.password = data;
                        login.username = uname;

                        _this6.apiService.getOtp(login).subscribe(function (res) {
                          _this6.variable = res;
                          _this6.otpreceivedtime = new Date();

                          if (_this6.variable) {
                            if (_this6.variable[0] === "Username or password wrong") {
                              _this6.toastService.errorMessage("Invalid Username or Password !!!", "");
                            }

                            if (res.failLgnCounter != 0) {
                              _this6.apiService.fetchSecurityPolicyService().subscribe(function (sp) {
                                _this6.security = sp;
                                _this6.invLogins = _this6.security.maxInvLogins;

                                if (_this6.invLogins !== 0) {
                                  _this6.invLogins = _this6.invLogins - 1;

                                  if (_this6.invLogins === res.failLgnCounter) {
                                    _this6.toastService.errorMessage("Contact Admin, User Account locked after " + "".concat(res.failLgnCounter + 1) + " wrong attempts.", "");
                                  }
                                }
                              });
                            } // ---------- Password Policy Implementation (END) ----------


                            if (_this6.variable[0] === "true") {
                              _this6.progress = true;

                              _this6.toggle();

                              _this6.toastService.successMessage("OTP sent successfully to " + _this6.email, "");

                              _this6.loginProcessing = false;
                              _this6.verifyOTP = true;
                            } else {}
                          }
                        }, function (err) {
                          _this6.toastService.errorMessage("Server Error", "");

                          _this6.loginProcessing = false;
                        });
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
          key: "resendOtpMethod",
          value: function resendOtpMethod() {
            var _this7 = this;

            var login = {};
            login.username = this.signinForm.value.username;
            login.password = this.signinForm.value.password;
            var encryptedAES = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(this.signinForm.value.password, "@12#90!^*NPR*g&*()$34#$");
            var USERNAME = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(this.signinForm.value.username, "@12#90!^*NPR*g&*()$34#$");
            var data = encryptedAES.toString();
            var uname = USERNAME.toString(); // Skip login Section start
            // this.signinForm.value.password = data;
            // this.ls.setItem("currentUser", this.demoUser.currentUser);
            // this.ls.setItem("userPermissions", this.demoUser.userPermissions);
            // this.ls.setItem("department", this.demoUser.department);
            // this.ls.setItem("LoggedInUser", this.demoUser.LoggedInUser);
            // this.ls.setItem("userobj", this.demoUser.userobj);
            // this.ls.setItem("usercompleteobj", this.demoUser.usercompleteobj);
            // this.router.navigate(["/dashboard"]);
            // this.jwtAuth.setUserAndToken("affsff", {}, true);
            // Skip login Section end

            this.apiService.fetchMedUser(this.signinForm.value.username).subscribe(function (response) {
              _this7.user = response;
              _this7.email = _this7.user.email;
              localStorage.setItem("userFromLogin", _this7.user.userId);
              sessionStorage.setItem("user_id", _this7.user.userId);

              if (_this7.user.statusForUser === "Enable" && _this7.user.verifiedStatus === "A") {
                //---------- Password Policy Implementation (BEGIN) ----------
                _this7.apiService.fetchSecurityPolicyService().subscribe(function (resp) {
                  _this7.security = resp;
                  _this7.notifyPswdExpry = _this7.security.notifyPasswordExpiryInDays;
                  _this7.pswdExpiry = _this7.security.pswdExpiry;

                  if (_this7.pswdExpiry === 0 && _this7.notifyPswdExpry === 0) {
                    console.log("Hitting dashboard");

                    _this7.router.navigate(["/dashboard"]).then(function (data) {
                      return console.log("dashboard hit", data);
                    });
                  } else {
                    _this7.currentDate = new Date();
                    _this7.changePwdDate = new Date(_this7.user.pwdChangeDate);
                    _this7.differnceInTime = _this7.currentDate - _this7.changePwdDate;
                    _this7.differnceInDays = Math.floor(_this7.differnceInTime / (1000 * 3600 * 24));
                    _this7.finalDiff = _this7.pswdExpiry - _this7.differnceInDays;

                    if (_this7.finalDiff === 0 || _this7.finalDiff <= 0) {
                      _this7.toastService.errorMessage("Your Password is expired. Please reset your password.", "");
                    } else {
                      _this7.check = true;

                      if (_this7.signinForm.value.password === "" || _this7.signinForm.value.username === "") {
                        _this7.toastService.errorMessage("Please enter login credentials.", "");
                      } else {
                        var encryptedAES = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(login.password, "@12#90!^*NPR*g&*()$34#$");
                        var USERNAME = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(login.username, "@12#90!^*NPR*g&*()$34#$");
                        var data = encryptedAES.toString();
                        var uname = USERNAME.toString();
                        login.password = data;
                        login.username = uname;

                        _this7.apiService.getOtp(login).subscribe(function (res) {
                          _this7.variable = res;
                          _this7.otpreceivedtime = new Date();

                          if (_this7.variable) {
                            if (_this7.variable[0] === "Username or password wrong") {
                              _this7.toastService.errorMessage("Invalid Username or Password !!!", "");
                            }

                            if (res.failLgnCounter != 0) {
                              _this7.apiService.fetchSecurityPolicyService().subscribe(function (sp) {
                                _this7.security = sp;
                                _this7.invLogins = _this7.security.maxInvLogins;

                                if (_this7.invLogins !== 0) {
                                  _this7.invLogins = _this7.invLogins - 1;

                                  if (_this7.invLogins === res.failLgnCounter) {
                                    _this7.toastService.errorMessage("Contact Admin, User Account locked after " + "".concat(res.failLgnCounter + 1) + " wrong attempts.", "");
                                  }
                                }
                              });
                            } // ---------- Password Policy Implementation (END) ----------


                            if (_this7.variable[0] === "true") {
                              _this7.progress = true;

                              _this7.toastService.successMessage("OTP sent successfully to " + _this7.email, "");

                              _this7.loginProcessing = false;
                              _this7.verifyOTP = true;
                            } else {}
                          }
                        }, function (err) {
                          _this7.toastService.errorMessage("Server Error", "");

                          _this7.loginProcessing = false;
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
            var _this8 = this;

            var otp = {};
            otp.username = this.signinForm.value.username;
            otp.otp = this.otp;
            this.apiService.loginService(otp).subscribe(function (res) {
              _this8.responseforotp = res;

              if (_this8.responseforotp[0] == "OTP is invalid") {
                _this8.toastService.errorMessage("Enter the Valid OTP.", "");
              }

              _this8.apiService.fetchMedUser(otp.username).subscribe(function (response) {
                _this8.user = response; // if (this.responseforotp) {

                if (_this8.user != null) {
                  if (_this8.responseforotp[0] == "Time Expired") {
                    _this8.toastService.errorMessage("This OTP is expired. Please click on Resend OTP to get a new OTP.", "");

                    _this8.check = false;
                  }

                  _this8.loginProcessing = false;
                  _this8.user = _this8.responseforotp[1];
                  _this8.loginProcessing = false;
                  localStorage.setItem("userFromLogin", _this8.user.userId);
                  sessionStorage.setItem("user_id", _this8.user.userId);

                  if (_this8.user.statusForUser === "Enable" && _this8.user.verifiedStatus === "A") {
                    //---------- Password Policy Implementation (BEGIN) ----------
                    _this8.apiService.fetchSecurityPolicyService().subscribe(function (resp) {
                      _this8.security = resp;
                      _this8.notifyPswdExpry = _this8.security.notifyPasswordExpiryInDays;
                      _this8.pswdExpiry = _this8.security.pswdExpiry;

                      if (_this8.pswdExpiry === 0 && _this8.notifyPswdExpry === 0) {
                        _this8.router.navigate(["/dashboard"]).then(function (data) {
                          return console.log("dashboard hit", data);
                        });
                      } else {
                        _this8.currentDate = new Date();
                        _this8.changePwdDate = new Date(_this8.user.pwdChangeDate);
                        _this8.differnceInTime = _this8.currentDate - _this8.changePwdDate;
                        _this8.differnceInDays = Math.floor(_this8.differnceInTime / (1000 * 3600 * 24));
                        _this8.finalDiff = _this8.pswdExpiry - _this8.differnceInDays;

                        if (_this8.finalDiff === 0 || _this8.finalDiff <= 0) {
                          _this8.toastService.errorMessage("Your password expired, Please change your password", "");

                          _this8.router.navigate(["/forget-password"]).then(function (data) {
                            return console.log("Forget password hit", data);
                          });
                        } else {
                          //---------- Password Policy Implementation (END) ----------
                          _this8.router.navigate(["/dashboard"]); //---------- Password Policy Implementation (BEGIN) ----------


                          _this8.currentUser = localStorage.getItem("currentUser");

                          _this8.apiService.fetchMedUser(otp.username).subscribe(function (response) {
                            _this8.userEntity = response;
                            console.log("userEntity ", _this8.userEntity);

                            _this8.apiService.fetchSecurityPolicyService().subscribe(function (resp) {
                              _this8.security = resp;
                              _this8.notifyPswdExpry = _this8.security.notifyPasswordExpiryInDays;
                              _this8.pswdExpiry = _this8.security.pswdExpiry;

                              if (_this8.pswdExpiry !== 0 && _this8.notifyPswdExpry !== 0) {
                                _this8.currentDate = new Date();
                                _this8.changePwdDate = new Date(_this8.userEntity.pwdChangeDate);
                                _this8.differnceInTime = _this8.currentDate - _this8.changePwdDate;
                                _this8.differnceInDays = Math.floor(_this8.differnceInTime / (1000 * 3600 * 24));
                                _this8.finalDiff = _this8.pswdExpiry - _this8.differnceInDays;

                                if (_this8.finalDiff > 0 && _this8.finalDiff <= _this8.notifyPswdExpry) {
                                  _this8.toastService.errorMessage("Your password will expire in " + "".concat(_this8.finalDiff) + " day(s)", "");
                                }
                              }
                            });
                          }); //  ---------- Password Policy Implementation (END) ----------

                        }
                      }
                    });
                  }

                  _this8.routing();
                }
              });
            }, function (err) {
              _this8.loginProcessing = false;

              _this8.toastService.errorMessage("Server Error ", "");
            });
          }
        }, {
          key: "routing",
          value: function routing() {
            var _this9 = this;

            console.log(this.userEntity);
            this.jwtAuth.signin().subscribe(function (response) {
              setTimeout(function () {
                _this9.ls.setItem("currentUser", _this9.userEntity.userId);

                _this9.ls.setItem("userPermissions", _this9.demoUser.userPermissions);

                _this9.ls.setItem("department", _this9.userEntity.department);

                _this9.ls.setItem("LoggedInUser", _this9.userEntity.userId);

                _this9.ls.setItem("userobj", _this9.userEntity);

                _this9.ls.setItem("usercompleteobj", _this9.userEntity);

                _this9.router.navigate(['/dashboard']);

                _this9.iziToast.show({
                  title: "DTB Bank - Median!",
                  message: "Welcome, ".concat(_this9.userEntity.userId, "!"),
                  image: "assets/images/user.png",
                  icon: 'ico ico-success',
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
            } // if (this.otp.length === 6) {
            //   this.isValid = true;
            //   const signinData = this.signinForm.value;
            //   if (!this.signinForm.invalid) {
            //     this.jwtAuth.signin().subscribe(
            //       (response) => {
            //         setTimeout(() => {
            //           this.ls.setItem("currentUser", this.demoUser.currentUser);
            //           this.ls.setItem("userPermissions", this.demoUser.userPermissions);
            //           this.ls.setItem("department", this.demoUser.department);
            //           this.ls.setItem("LoggedInUser", this.demoUser.LoggedInUser);
            //           this.ls.setItem("userobj", this.demoUser.userobj);
            //           this.ls.setItem("usercompleteobj", this.demoUser.usercompleteobj);
            //           this.router.navigate(["/dashboard"]);
            //           this.iziToast.show({
            //             title: `DTB Bank - Median!`,
            //             message: `Welcome, ${this.demoUser.currentUser}!`,
            //             image: "assets/images/user.png",
            //             icon: "ico ico-success",
            //             // theme:"dark",
            //             layout: 2,
            //             // imageWidth:50,
            //             balloon: false,
            //             position: "topRight",
            //             progressBarColor: "red",
            //             pauseOnHover: true,
            //           });
            //         }, 2500);
            //       },
            //       (err) => {
            //         // console.log(err);
            //       }
            //     );
            //   }
            // } else {
            //   this.isValid = false;
            // }

          }
        }, {
          key: "showTimer",
          value: function showTimer(remaining) {
            var _this10 = this;

            var timerOn = true;
            this.m = Math.floor(remaining / 60);
            this.s = remaining % 60;
            this.m = this.m < 10 ? "0" + this.m : this.m;
            this.s = this.s < 10 ? "0" + this.s : this.s;
            this.cd.detectChanges();
            remaining -= 1;

            if (remaining >= 0 && timerOn) {
              setTimeout(function () {
                _this10.showTimer(remaining);
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

      _LoginComponent.ɵfac = function LoginComponent_Factory(t) {
        return new (t || _LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_jwt_auth_service__WEBPACK_IMPORTED_MODULE_3__.JwtAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__.LocalStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_DEMO_USER__WEBPACK_IMPORTED_MODULE_6__.DEMO_USER), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ng2_izitoast__WEBPACK_IMPORTED_MODULE_7__.Ng2IzitoastService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_8__.ApiService));
      };

      _LoginComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
        type: _LoginComponent,
        selectors: [["npr-login"]],
        viewQuery: function LoginComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.ngOtpInput = _t.first);
          }
        },
        decls: 14,
        vars: 2,
        consts: [[1, "bg-white"], [1, "loginLogoCol", "text-center", "text-lg-start"], ["href", "JavaScript:void(0)"], ["src", "assets/images/logo.png", "alt", "logo"], [1, "container"], [1, "row", "g-0", "loginRow", "align-items-center"], [1, "col-lg-6"], ["class", "loginFormCol", 4, "ngIf"], [1, "loginFormCol"], ["class", "loginCol", 4, "ngIf"], [1, "loginImgCol", "d-none", "d-lg-block"], ["src", "assets/images/login-img.svg", "alt", "loginimg"], ["size", "small", "type", "square-loader"], [1, "loginCol"], [1, "lgTitle", "secondaryColor"], [1, "lightColor"], [1, "loginFormStyle"], [1, "row", "g-4", 3, "formGroup"], [1, "col-12"], ["for", "exampleInputEmail1", 1, "form-label", "lblStyles"], ["type", "text", "autofocus", "autofocus", "oninput", "this.value = this.value.toUpperCase()", "formControlName", "username", "id", "exampleInputEmail1", "placeholder", "you@example.com", 1, "form-control", "lineField"], [1, "row"], [1, "col"], ["for", "exampleInputPassword1", 1, "form-label", "lblStyles"], [1, "inputField"], [1, "inputField", "pwdFldCol", "d-flex"], ["type", "password", "formControlName", "password", "id", "pwdFld", "placeholder", "Your Password", 1, "form-control", "lineField", 3, "type"], ["toggle", "#pwdFld", 1, "fieldIcon", "toggle-password", "fa-eye", "mt-2", 3, "click"], ["class", "showPwd", "src", "assets/images/show-icon.svg", "alt", "...", 4, "ngIf"], ["class", "hidePwd", "src", "assets/images/hide-icon.svg", "alt", "...", 4, "ngIf"], ["type", "submit", 1, "btn", "btnPrimary", "w-100", "btnLg", "roundedBorder", 3, "disabled", "click"], [1, "float"], [1, "primaryColor", "fpLink", 3, "routerLink"], [1, "rumanogoCol", "text-center", "pt-3"], ["src", "assets/images/rumango-img.png", "alt", "rumango-img"], [1, "medainStyle", "mt-3"], ["src", "assets/images/show-icon.svg", "alt", "...", 1, "showPwd"], ["src", "assets/images/hide-icon.svg", "alt", "...", 1, "hidePwd"], [1, "form", "w-100", "mb-10"], [1, "text-center", "mb-10"], ["alt", "Logo", "src", "assets/images/smartphone.svg", 1, "mh-125px"], [1, "text-dark", "mb-3"], [1, "text-muted", "fw-bold", "fs-5", "mb-5"], [1, "fw-bolder", "text-dark", "fs-3"], [1, "mb-10", "px-md-10"], [1, "fw-bolder", "text-start", "text-dark", "fs-6", "mb-1", "ms-1"], [1, "d-flex", "flex-wrap", "flex-stack"], ["inputControls", "6", 3, "config", "onInputChange"], ["ngOtpInput", ""], [1, "d-flex", 2, "gap", "10px"], ["type", "button", 1, "btn", "btn-lg", "btnPrimary", "fw-bolder", 3, "disabled", "click"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "click"]],
        template: function LoginComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "section", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "a", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "img", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, LoginComponent_div_7_Template, 33, 7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, LoginComponent_div_9_Template, 24, 3, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](13, "ngx-spinner", 12);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.showOtpComponent);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showOtpComponent);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLinkWithHref, ng_otp_input__WEBPACK_IMPORTED_MODULE_14__.NgOtpInputComponent],
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
      49624);
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

      _LoginModule.ɵfac = function LoginModule_Factory(t) {
        return new (t || _LoginModule)();
      };

      _LoginModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _LoginModule
      });
      _LoginModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        providers: [_DEMO_USER__WEBPACK_IMPORTED_MODULE_2__.DEMO_USER],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, ng_otp_input__WEBPACK_IMPORTED_MODULE_7__.NgOtpInputModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerModule, ng2_izitoast__WEBPACK_IMPORTED_MODULE_3__.Ng2IziToastModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_LoginModule, {
          declarations: [_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, ng_otp_input__WEBPACK_IMPORTED_MODULE_7__.NgOtpInputModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerModule, ng2_izitoast__WEBPACK_IMPORTED_MODULE_3__.Ng2IziToastModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_views_auth_login_login_module_ts-es5.js.map