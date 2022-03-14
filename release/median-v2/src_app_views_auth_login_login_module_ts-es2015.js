"use strict";
(self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_auth_login_login_module_ts"],{

/***/ 49624:
/*!*************************************************************************!*\
  !*** ./node_modules/ng-otp-input/__ivy_ngcc__/fesm2015/ng-otp-input.js ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgOtpInputComponent": function() { return /* binding */ NgOtpInputComponent; },
/* harmony export */   "NgOtpInputModule": function() { return /* binding */ NgOtpInputModule; },
/* harmony export */   "ɵa": function() { return /* binding */ KeysPipe; },
/* harmony export */   "ɵb": function() { return /* binding */ NumberOnlyDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 54364);








function NgOtpInputComponent_div_0_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "input", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function NgOtpInputComponent_div_0_input_1_Template_input_keydown_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.onKeyDown($event); })("keyup", function NgOtpInputComponent_div_0_input_1_Template_input_keyup_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = restoredCtx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r6.onKeyUp($event, i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("otp-input ", ctx_r1.config.inputClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("id", "otp_", i_r3, "_", ctx_r1.componentKey, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pattern", ctx_r1.config.allowNumbersOnly ? "\\d*" : "")("type", ctx_r1.inputType)("placeholder", (ctx_r1.config == null ? null : ctx_r1.config.placeholder) || "")("disabledNumberOnly", !ctx_r1.config.allowNumbersOnly)("ngStyle", ctx_r1.config.inputStyles)("formControl", ctx_r1.otpForm.controls[item_r2]);
} }
function NgOtpInputComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NgOtpInputComponent_div_0_input_1_Template, 1, 11, "input", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keys");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("wrapper ", ctx_r0.config.containerClass, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "c_", ctx_r0.componentKey, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r0.config.containerStyles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 6, ctx_r0.otpForm == null ? null : ctx_r0.otpForm.controls));
} }
class KeysPipe {
    transform(value) {
        return Object.keys(value);
    }
}
KeysPipe.ɵfac = function KeysPipe_Factory(t) { return new (t || KeysPipe)(); };
KeysPipe.ɵpipe = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "keys", type: KeysPipe, pure: true });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KeysPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Pipe,
        args: [{
                name: 'keys'
            }]
    }], null, null); })();

class Config {
}

class NgOtpInputComponent {
    constructor(keysPipe) {
        this.keysPipe = keysPipe;
        this.config = { length: 4 };
        // tslint:disable-next-line: no-output-on-prefix
        this.onInputChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.inputControls = new Array(this.config.length);
        this.componentKey = Math.random()
            .toString(36)
            .substring(2) + new Date().getTime().toString(36);
    }
    ngOnInit() {
        this.otpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup({});
        for (let index = 0; index < this.config.length; index++) {
            this.otpForm.addControl(this.getControlName(index), new _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl());
        }
        this.otpForm.valueChanges.subscribe((v) => {
            this.keysPipe.transform(this.otpForm.controls).forEach((k) => {
                var val = this.otpForm.controls[k].value;
                if (val && val.length > 1) {
                    if (val.length >= this.config.length) {
                        this.setValue(val);
                    }
                    else {
                        this.rebuildValue();
                    }
                }
            });
        });
        this.inputType = this.getInputType();
    }
    ngAfterViewInit() {
        if (!this.config.disableAutoFocus) {
            const containerItem = document.getElementById(`c_${this.componentKey}`);
            if (containerItem) {
                containerItem.addEventListener('paste', (evt) => this.handlePaste(evt));
                const ele = containerItem.getElementsByClassName('otp-input')[0];
                if (ele && ele.focus) {
                    ele.focus();
                }
            }
        }
    }
    getControlName(idx) {
        return `ctrl_${idx}`;
    }
    ifLeftArrow(event) {
        return this.ifKeyCode(event, 37);
    }
    ifRightArrow(event) {
        return this.ifKeyCode(event, 39);
    }
    ifBackspaceOrDelete(event) {
        return (event.key === 'Backspace' ||
            event.key === 'Delete' ||
            this.ifKeyCode(event, 8) ||
            this.ifKeyCode(event, 46));
    }
    ifKeyCode(event, targetCode) {
        const key = event.keyCode || event.charCode;
        // tslint:disable-next-line: triple-equals
        return key == targetCode ? true : false;
    }
    onKeyDown($event) {
        var isSpace = this.ifKeyCode($event, 32);
        if (isSpace) { // prevent space
            return false;
        }
    }
    onKeyUp($event, inputIdx) {
        const nextInputId = this.appendKey(`otp_${inputIdx + 1}`);
        const prevInputId = this.appendKey(`otp_${inputIdx - 1}`);
        if (this.ifRightArrow($event)) {
            this.setSelected(nextInputId);
            return;
        }
        if (this.ifLeftArrow($event)) {
            this.setSelected(prevInputId);
            return;
        }
        const isBackspace = this.ifBackspaceOrDelete($event);
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
    appendKey(id) {
        return `${id}_${this.componentKey}`;
    }
    setSelected(eleId) {
        this.focusTo(eleId);
        const ele = document.getElementById(eleId);
        if (ele && ele.setSelectionRange) {
            setTimeout(() => {
                ele.setSelectionRange(0, 1);
            }, 0);
        }
    }
    ifValidEntry(event) {
        const inp = String.fromCharCode(event.keyCode);
        const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        return (isMobile ||
            /[a-zA-Z0-9-_]/.test(inp) ||
            (this.config.allowKeyCodes &&
                this.config.allowKeyCodes.includes(event.keyCode)) ||
            (event.keyCode >= 96 && event.keyCode <= 105));
    }
    focusTo(eleId) {
        const ele = document.getElementById(eleId);
        if (ele) {
            ele.focus();
        }
    }
    // method to set component value
    setValue(value) {
        if (this.config.allowNumbersOnly && isNaN(value)) {
            return;
        }
        this.otpForm.reset();
        if (!value) {
            this.rebuildValue();
            return;
        }
        value = value.toString().replace(/\s/g, ''); // remove whitespace
        Array.from(value).forEach((c, idx) => {
            if (this.otpForm.get(this.getControlName(idx))) {
                this.otpForm.get(this.getControlName(idx)).setValue(c);
            }
        });
        if (!this.config.disableAutoFocus) {
            const containerItem = document.getElementById(`c_${this.componentKey}`);
            var indexOfElementToFocus = value.length < this.config.length ? value.length : (this.config.length - 1);
            let ele = containerItem.getElementsByClassName('otp-input')[indexOfElementToFocus];
            if (ele && ele.focus) {
                ele.focus();
            }
        }
        this.rebuildValue();
    }
    rebuildValue() {
        let val = '';
        this.keysPipe.transform(this.otpForm.controls).forEach(k => {
            if (this.otpForm.controls[k].value) {
                let ctrlVal = this.otpForm.controls[k].value;
                let isLengthExceed = ctrlVal.length > 1;
                let isCaseTransformEnabled = !this.config.allowNumbersOnly && this.config.letterCase && (this.config.letterCase.toLocaleLowerCase() == 'upper' || this.config.letterCase.toLocaleLowerCase() == 'lower');
                ctrlVal = ctrlVal[0];
                let transformedVal = isCaseTransformEnabled ? this.config.letterCase.toLocaleLowerCase() == 'upper' ? ctrlVal.toUpperCase() : ctrlVal.toLowerCase() : ctrlVal;
                if (isCaseTransformEnabled && transformedVal == ctrlVal) {
                    isCaseTransformEnabled = false;
                }
                else {
                    ctrlVal = transformedVal;
                }
                val += ctrlVal;
                if (isLengthExceed || isCaseTransformEnabled) {
                    this.otpForm.controls[k].setValue(ctrlVal);
                }
            }
        });
        this.onInputChange.emit(val);
    }
    getInputType() {
        return this.config.isPasswordInput
            ? 'password'
            : this.config.allowNumbersOnly
                ? 'tel'
                : 'text';
    }
    handlePaste(e) {
        // Get pasted data via clipboard API
        let clipboardData = e.clipboardData || window['clipboardData'];
        if (clipboardData) {
            var pastedData = clipboardData.getData('Text');
        }
        // Stop data actually being pasted into div
        e.stopPropagation();
        e.preventDefault();
        if (!pastedData) {
            return;
        }
        this.setValue(pastedData);
    }
}
NgOtpInputComponent.ɵfac = function NgOtpInputComponent_Factory(t) { return new (t || NgOtpInputComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](KeysPipe)); };
NgOtpInputComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgOtpInputComponent, selectors: [["ng-otp-input"]], inputs: { config: "config" }, outputs: { onInputChange: "onInputChange" }, decls: 1, vars: 1, consts: [[3, "class", "id", "ngStyle", 4, "ngIf"], [3, "id", "ngStyle"], ["numberOnly", "", "autocomplete", "one-time-code", 3, "pattern", "type", "placeholder", "disabledNumberOnly", "ngStyle", "class", "formControl", "id", "keydown", "keyup", 4, "ngFor", "ngForOf"], ["numberOnly", "", "autocomplete", "one-time-code", 3, "pattern", "type", "placeholder", "disabledNumberOnly", "ngStyle", "formControl", "id", "keydown", "keyup"]], template: function NgOtpInputComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NgOtpInputComponent_div_0_Template, 3, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.otpForm == null ? null : ctx.otpForm.controls);
    } }, directives: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgStyle, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, NumberOnlyDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlDirective]; }, pipes: function () { return [KeysPipe]; }, styles: [".otp-input[_ngcontent-%COMP%]{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.wrapper[_ngcontent-%COMP%]   .otp-input[_ngcontent-%COMP%]:not(:last-child){margin-right:8px}@media screen and (max-width: 767px){.otp-input[_ngcontent-%COMP%]{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input[_ngcontent-%COMP%]{width:30px;font-size:18px;height:30px}}"] });
/**
 * @type {function(): !Array<(null|{
 *   type: ?,
 *   decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>),
 * })>}
 * @nocollapse
 */
NgOtpInputComponent.ctorParameters = () => [
    { type: KeysPipe }
];
/** @type {!Object<string, !Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
NgOtpInputComponent.propDecorators = {
    config: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    onInputChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOtpInputComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
        args: [{
                // tslint:disable-next-line: component-selector
                selector: 'ng-otp-input',
                template: "<div class=\"wrapper {{config.containerClass}}\" id=\"c_{{componentKey}}\" *ngIf=\"otpForm?.controls\"\r\n  [ngStyle]=\"config.containerStyles\">\r\n  <input [pattern]=\"config.allowNumbersOnly ? '\\\\d*' : ''\" [type]=\"inputType\" numberOnly [placeholder]=\"config?.placeholder || ''\"\r\n    [disabledNumberOnly]=\"!config.allowNumbersOnly\" [ngStyle]=\"config.inputStyles\" \r\n    class=\"otp-input {{config.inputClass}}\" autocomplete=\"one-time-code\" *ngFor=\"let item of otpForm?.controls | keys;let i=index\"\r\n    [formControl]=\"otpForm.controls[item]\" id=\"otp_{{i}}_{{componentKey}}\" (keydown)=\"onKeyDown($event)\"\r\n    (keyup)=\"onKeyUp($event,i)\">\r\n</div>",
                styles: [".otp-input{width:50px;height:50px;border-radius:4px;border:solid 1px #c5c5c5;text-align:center;font-size:32px}.wrapper .otp-input:not(:last-child){margin-right:8px}@media screen and (max-width: 767px){.otp-input{width:40px;font-size:24px;height:40px}}@media screen and (max-width: 420px){.otp-input{width:30px;font-size:18px;height:30px}}\n"]
            }]
    }], function () { return [{ type: KeysPipe }]; }, { config: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], onInputChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }] }); })();

class NumberOnlyDirective {
    constructor(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
    }
    ngOnInit() {
        if (!this.disabledNumberOnly) {
            this._renderer.setAttribute(this._elRef.nativeElement, 'onkeypress', 'return (event.charCode >= 48 && event.charCode <= 57) || event.charCode == 0');
        }
    }
}
NumberOnlyDirective.ɵfac = function NumberOnlyDirective_Factory(t) { return new (t || NumberOnlyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2)); };
NumberOnlyDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: NumberOnlyDirective, selectors: [["", "numberOnly", ""]], inputs: { disabledNumberOnly: "disabledNumberOnly" } });
/**
 * @type {function(): !Array<(null|{
 *   type: ?,
 *   decorators: (undefined|!Array<{type: !Function, args: (undefined|!Array<?>)}>),
 * })>}
 * @nocollapse
 */
NumberOnlyDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }
];
/** @type {!Object<string, !Array<{type: !Function, args: (undefined|!Array<?>)}>>} */
NumberOnlyDirective.propDecorators = {
    disabledNumberOnly: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NumberOnlyDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[numberOnly]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2 }]; }, { disabledNumberOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();

class NgOtpInputModule {
}
NgOtpInputModule.ɵfac = function NgOtpInputModule_Factory(t) { return new (t || NgOtpInputModule)(); };
NgOtpInputModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgOtpInputModule });
NgOtpInputModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [KeysPipe], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule
        ]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgOtpInputModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule
                ],
                declarations: [NgOtpInputComponent, KeysPipe, NumberOnlyDirective],
                exports: [NgOtpInputComponent],
                providers: [KeysPipe]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgOtpInputModule, { declarations: function () { return [NgOtpInputComponent, KeysPipe, NumberOnlyDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ReactiveFormsModule]; }, exports: function () { return [NgOtpInputComponent]; } }); })();

/*
 * Public API Surface of ng-otp-input
 */

/**
 * Generated bundle index. Do not edit.
 */





/***/ }),

/***/ 65336:
/*!*****************************************************!*\
  !*** ./src/@npr/animations/fade-in-up.animation.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fadeInUpAnimation": function() { return /* binding */ fadeInUpAnimation; },
/* harmony export */   "fadeInUp400ms": function() { return /* binding */ fadeInUp400ms; }
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ 97175);

function fadeInUpAnimation(duration) {
    return (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.trigger)('fadeInUp', [
        (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.transition)(':enter', [
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'translateY(20px)',
                opacity: 0
            }),
            (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.animate)(`${duration}ms cubic-bezier(0.35, 0, 0.25, 1)`, (0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.style)({
                transform: 'translateY(0)',
                opacity: 1
            }))
        ])
    ]);
}
const fadeInUp400ms = fadeInUpAnimation(400);


/***/ }),

/***/ 31443:
/*!**************************************************!*\
  !*** ./src/app/shared/services/toast.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastService": function() { return /* binding */ ToastService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-izitoast */ 27218);


class ToastService {
    constructor(iziToast) {
        this.iziToast = iziToast;
    }
    successMessage(title, msg) {
        this.iziToast.success({
            title: title,
            message: msg,
            layout: 2,
            balloon: false,
            position: "topRight",
            progressBarColor: "red",
            pauseOnHover: true,
        });
    }
    errorMessage(title, msg) {
        this.iziToast.error({
            title: title,
            message: msg,
            layout: 2,
            balloon: false,
            position: "topRight",
            progressBarColor: "red",
            pauseOnHover: true,
        });
    }
    infoMessage(title, msg) {
        this.iziToast.info({
            title: title,
            message: msg,
            layout: 2,
            balloon: false,
            position: "topRight",
            progressBarColor: "red",
            pauseOnHover: true,
        });
    }
}
ToastService.ɵfac = function ToastService_Factory(t) { return new (t || ToastService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ng2_izitoast__WEBPACK_IMPORTED_MODULE_0__.Ng2IzitoastService)); };
ToastService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ToastService, factory: ToastService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8888:
/*!***********************************************!*\
  !*** ./src/app/views/auth/login/DEMO_USER.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DEMO_USER": function() { return /* binding */ DEMO_USER; }
/* harmony export */ });
class DEMO_USER {
    constructor() {
        this.currentUser = "SAKTHI";
        // this.userPermissions = { "screenAndPermissionsDTO": [{ "permissions": "1111111111", "screenId": 2, "screenName": "Users" }, { "permissions": "1111111111", "screenId": 3, "screenName": "Roles" }, { "permissions": "1111111111", "screenId": 4, "screenName": "Audit Logs" }, { "permissions": "1111111111", "screenId": 5, "screenName": "Password Policy" }, { "permissions": "1111111111", "screenId": 6, "screenName": "Process Monitoring" }, { "permissions": "1111111111", "screenId": 7, "screenName": "External Systems" }, { "permissions": "1111111111", "screenId": 8, "screenName": "Process Code Mapping" }, { "permissions": "1111111111", "screenId": 9, "screenName": "Excel Mapping" }, { "permissions": "1111111111", "screenId": 10, "screenName": "Upload Excel" }, { "permissions": "1111111111", "screenId": 11, "screenName": "Authorize Excel" }, { "permissions": "1111111111", "screenId": 12, "screenName": "Rejection Queue" }, { "permissions": "1111111111", "screenId": 13, "screenName": "Authorize Modifications" }, { "permissions": "1111111111", "screenId": 14, "screenName": "Excel Processing Summary" }, { "permissions": "1111111111", "screenId": 15, "screenName": "Customer search" }, { "permissions": "1111111111", "screenId": 16, "screenName": "Email-Management" }, { "permissions": "1111111111", "screenId": 17, "screenName": "Transaction Code Maint" }, { "permissions": "1111111111", "screenId": 18, "screenName": "Initiate Account Closure" }, { "permissions": "1111111111", "screenId": 19, "screenName": "Process Account Closure" }, { "permissions": "1111111111", "screenId": 20, "screenName": "Acc Closure Maintenance" }, { "permissions": "1111111111", "screenId": 21, "screenName": "Charge Maintenance" }, { "permissions": "1111111111", "screenId": 22, "screenName": "GlobalCodeMaintenance" }, { "permissions": "1111111111", "screenId": 23, "screenName": "UserCodeMaintenance" }, { "permissions": "1111111111", "screenId": 24, "screenName": "AcumenJournal" }, { "permissions": "1111111111", "screenId": 25, "screenName": "Treasury Reference" }, { "permissions": "1111111111", "screenId": 26, "screenName": "Cash Payments" }, { "permissions": "1111111111", "screenId": 27, "screenName": "Authorize Cash Payments" }], "labels": [{ "labelId": 1, "labelName": "NEW", "labelDescription": "New", "language": "EN" }, { "labelId": 2, "labelName": "EDIT", "labelDescription": "Edit", "language": "EN" }, { "labelId": 3, "labelName": "DELETE", "labelDescription": "Delete", "language": "EN" }, { "labelId": 4, "labelName": "CLOSE", "labelDescription": "Close", "language": "EN" }, { "labelId": 5, "labelName": "REOPEN", "labelDescription": "Reopen", "language": "EN" }, { "labelId": 6, "labelName": "UNLOCK", "labelDescription": "Unlock", "language": "EN" }, { "labelId": 7, "labelName": "PRINT", "labelDescription": "Print", "language": "EN" }, { "labelId": 8, "labelName": "AUTH", "labelDescription": "Auth", "language": "EN" }, { "labelId": 9, "labelName": "VIEW", "labelDescription": "View", "language": "EN" }, { "labelId": 10, "labelName": "REJECT", "labelDescription": "Reject", "language": "EN" }] };
        this.department = null;
        this.LoggedInUser = "SAKTHI";
        this.userobj = "28/12/2021 10:51:30";
        this.usercompleteobj = { "pwdChangeDate": 1640597099000, "intime": "09:00", "outtime": "22:55", "userId": "SAKTHI", "verifiedStatus": "A", "creatorDtStamp": 1593082262162, "creatorId": "TEST1", "email": "sakthivel.m@rumango.com", "emailNotification": null, "encryptedPassword": "$2a$10$7qdgqLg6lANIjAIu/45I6.s/ydmtHjzjbhEkN25H1e779uaiWtyue", "failedAttempts": 0, "verifiedOnce": "Y", "firstTimeLogin": "true", "ldapUserId": null, "logoutTime": "Tue Dec 28 10:51:28 IST 2021", "mobile": "1234567890", "msadUserId": null, "newRoleForUser": ["ROLE_NEW_ADMIN"], "passwordAge": 54563535663, "recordStatus": "O", "smsNotification": null, "updatedAt": null, "updatedBy": null, "userName": "PRABHAT", "userRole": "ROLE1", "verifierDtStamp": null, "verifierId": null, "versionNo": 1, "modNo": 6, "disableUser": "N", "statusForUser": "Enable", "department": null };
    }
}


/***/ }),

/***/ 93140:
/*!**********************************************************!*\
  !*** ./src/app/views/auth/login/login-routing.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginRoutingModule": function() { return /* binding */ LoginRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ 2783);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);




const loginRoutes = [
    {
        path: "",
        children: [
            {
                path: 'login',
                component: _login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
            }
        ]
    }
];
class LoginRoutingModule {
}
LoginRoutingModule.ɵfac = function LoginRoutingModule_Factory(t) { return new (t || LoginRoutingModule)(); };
LoginRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LoginRoutingModule });
LoginRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(loginRoutes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 2783:
/*!*****************************************************!*\
  !*** ./src/app/views/auth/login/login.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": function() { return /* binding */ LoginComponent; },
/* harmony export */   "User": function() { return /* binding */ User; },
/* harmony export */   "SecurityDto": function() { return /* binding */ SecurityDto; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var src_npr_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/@npr/animations/fade-in-up.animation */ 65336);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ 95373);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_services_jwt_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/jwt-auth.service */ 79389);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 31443);
/* harmony import */ var src_app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/local-store.service */ 69122);
/* harmony import */ var _DEMO_USER__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DEMO_USER */ 8888);
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng2-izitoast */ 27218);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ 55314);
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/api.service */ 94761);
/* harmony import */ var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/role.service */ 77382);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng-otp-input */ 49624);

















const _c0 = ["ngOtpInput"];
function LoginComponent_div_7_img_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 35);
} }
function LoginComponent_div_7_img_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](0, "img", 36);
} }
const _c1 = function () { return ["/forget-password"]; };
function LoginComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "h2", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Log in");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "User ID*");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](9, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](17, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginComponent_div_7_Template_span_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r4.hide = !ctx_r4.hide; });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](19, LoginComponent_div_7_img_19_Template, 1, 0, "img", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](20, LoginComponent_div_7_img_20_Template, 1, 0, "img", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginComponent_div_7_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r6.getOtp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "Get OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "a", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "Forgot Password?");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](27, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](28, "img", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "MEDIAN 2021-Connecting Systems");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx_r0.signinForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("type", ctx_r0.hide ? "password" : "text");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx_r0.hide);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r0.hide);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r0.signinForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](6, _c1));
} }
function LoginComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "form", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "img", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "h1", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6, "Two Step Verification");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](8, "Enter the verification code we sent to");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](12, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](13, "Type your 6 digit security code");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "ng-otp-input", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onInputChange", function LoginComponent_div_9_Template_ng_otp_input_onInputChange_15_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r8.onOtpChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginComponent_div_9_Template_button_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r10.signin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, " Verify ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginComponent_div_9_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r11.resendOtpMethod(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, " Resend OTP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function LoginComponent_div_9_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r9); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r12.backToLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, " Exit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("config", ctx_r1.config);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx_r1.isValid);
} }
class LoginComponent {
    // currentDate: any;
    // changePwdDate: any;
    constructor(router, jwtAuth, toastService, fb, cd, ls, demoUser, iziToast, spinner, apiService, roleService) {
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
        this.showOtpComponent = false;
        this.inputType = "password";
        this.visible = false;
        this.config = {
            allowNumbersOnly: true,
            length: 6,
            isPasswordInput: false,
            disableAutoFocus: false,
            placeholder: "*",
            inputStyles: { width: "50px", height: "50px" },
        };
    }
    ngOnInit() {
        this.signinForm = this.fb.group({
            username: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required],
            password: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.Validators.min(3)]],
        });
    }
    toggle() {
        setTimeout(() => {
            //  this.spinner.hide();
            this.showOtpComponent = !this.showOtpComponent;
            this.showTimer(60);
        }, 2500);
    }
    getOtp() {
        //  this.spinner.show();
        localStorage.setItem('getOtpClicked', 'true');
        let login = {};
        login.username = this.signinForm.value.username;
        login.password = this.signinForm.value.password;
        var encryptedAES = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(this.signinForm.value.password, "@12#90!^*NPR*g&*()$34#$");
        var USERNAME = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(this.signinForm.value.username, "@12#90!^*NPR*g&*()$34#$");
        var data = encryptedAES.toString();
        var uname = USERNAME.toString();
        // this.skipLoginUser();
        console.log("jygjh");
        this.apiService.fetchMedUser(this.signinForm.value.username).subscribe((response) => {
            console.log(response);
            this.user = response;
            this.ls.setItem("departmentHeader", this.user.department);
            this.ls.setItem('LoggedInUserHeader', this.user.logoutTime);
            this.email = this.user.email;
            localStorage.setItem("userFromLogin", this.user.userId);
            sessionStorage.setItem("user_id", this.user.userId);
            if (this.user.statusForUser === "Enable" &&
                this.user.verifiedStatus === "A") {
                //---------- Password Policy Implementation (BEGIN) ----------
                this.apiService.fetchSecurityPolicyService().subscribe((resp) => {
                    this.security = resp;
                    this.notifyPswdExpry = this.security.notifyPasswordExpiryInDays;
                    this.pswdExpiry = this.security.pswdExpiry;
                    if (this.pswdExpiry === 0 && this.notifyPswdExpry === 0) {
                        console.log("Hitting dashboard");
                        this.router
                            .navigate(["/dashboard"])
                            .then((data) => console.log("dashboard hit", data));
                    }
                    else {
                        this.currentDate = new Date();
                        this.changePwdDate = new Date(this.user.pwdChangeDate);
                        this.differnceInTime = this.currentDate - this.changePwdDate;
                        this.differnceInDays = Math.floor(this.differnceInTime / (1000 * 3600 * 24));
                        this.finalDiff = this.pswdExpiry - this.differnceInDays;
                        if (this.finalDiff === 0 || this.finalDiff <= 0) {
                            this.toastService.errorMessage("Your Password is expired. Please reset your password.", "");
                        }
                        else {
                            this.check = true;
                            if (this.signinForm.value.password === "" ||
                                this.signinForm.value.username === "") {
                                this.toastService.errorMessage("Please enter login credentials.", "");
                            }
                            else {
                                var encryptedAES = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(login.password, "@12#90!^*NPR*g&*()$34#$");
                                var USERNAME = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(login.username, "@12#90!^*NPR*g&*()$34#$");
                                var data = encryptedAES.toString();
                                var uname = USERNAME.toString();
                                login.password = data;
                                login.username = uname;
                                this.apiService.getOtp(login).subscribe((res) => {
                                    this.variable = res;
                                    this.otpreceivedtime = new Date();
                                    if (this.variable) {
                                        if (this.variable[0] === "Username or password wrong") {
                                            this.toastService.errorMessage("Invalid Username or Password !!!", "");
                                        }
                                        if (res.failLgnCounter != 0) {
                                            this.apiService
                                                .fetchSecurityPolicyService()
                                                .subscribe((sp) => {
                                                this.security = sp;
                                                this.invLogins = this.security.maxInvLogins;
                                                if (this.invLogins !== 0) {
                                                    this.invLogins = this.invLogins - 1;
                                                    if (this.invLogins === res.failLgnCounter) {
                                                        this.toastService.errorMessage("Contact Admin, User Account locked after " +
                                                            `${res.failLgnCounter + 1}` +
                                                            " wrong attempts.", "");
                                                    }
                                                }
                                            });
                                        }
                                        // ---------- Password Policy Implementation (END) ----------
                                        if (this.variable[0] === "true") {
                                            this.progress = true;
                                            this.toggle();
                                            this.toastService.successMessage("OTP sent successfully to " + this.email, "");
                                            this.loginProcessing = false;
                                            this.verifyOTP = true;
                                        }
                                        else {
                                        }
                                    }
                                }, (err) => {
                                    this.toastService.errorMessage("Server Error", "");
                                    this.loginProcessing = false;
                                });
                            }
                        }
                    }
                });
            }
        }, (err) => {
            console.log(err);
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire(err.error.message);
            // this.toastService.errorMessage('Unable to update the record, server error!', '');
        });
    }
    skipLoginUser() {
        // Skip login Section start
        this.ls.setItem("currentUser", this.demoUser.currentUser);
        this.ls.setItem("userPermissions", this.demoUser.userPermissions);
        this.ls.setItem("department", this.demoUser.department);
        this.ls.setItem("LoggedInUser", this.demoUser.LoggedInUser);
        this.ls.setItem("userobj", this.demoUser.userobj);
        this.ls.setItem("usercompleteobj", this.demoUser.usercompleteobj);
        sessionStorage.setItem("user_id", this.demoUser.currentUser);
        this.router.navigate(["/dashboard"]);
        this.jwtAuth.setUserAndToken("affsff", {}, true);
        // Skip login Section end
    }
    resendOtpMethod() {
        let login = {};
        login.username = this.signinForm.value.username;
        login.password = this.signinForm.value.password;
        var encryptedAES = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(this.signinForm.value.password, "@12#90!^*NPR*g&*()$34#$");
        var USERNAME = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(this.signinForm.value.username, "@12#90!^*NPR*g&*()$34#$");
        var data = encryptedAES.toString();
        var uname = USERNAME.toString();
        // Skip login Section start
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
        this.apiService.fetchMedUser(this.signinForm.value.username).subscribe((response) => {
            this.user = response;
            this.email = this.user.email;
            localStorage.setItem("userFromLogin", this.user.userId);
            sessionStorage.setItem("user_id", this.user.userId);
            if (this.user.statusForUser === "Enable" &&
                this.user.verifiedStatus === "A") {
                //---------- Password Policy Implementation (BEGIN) ----------
                this.apiService.fetchSecurityPolicyService().subscribe((resp) => {
                    this.security = resp;
                    this.notifyPswdExpry = this.security.notifyPasswordExpiryInDays;
                    this.pswdExpiry = this.security.pswdExpiry;
                    if (this.pswdExpiry === 0 && this.notifyPswdExpry === 0) {
                        console.log("Hitting dashboard");
                        this.router
                            .navigate(["/dashboard"])
                            .then((data) => console.log("dashboard hit", data));
                    }
                    else {
                        this.currentDate = new Date();
                        this.changePwdDate = new Date(this.user.pwdChangeDate);
                        this.differnceInTime = this.currentDate - this.changePwdDate;
                        this.differnceInDays = Math.floor(this.differnceInTime / (1000 * 3600 * 24));
                        this.finalDiff = this.pswdExpiry - this.differnceInDays;
                        if (this.finalDiff === 0 || this.finalDiff <= 0) {
                            this.toastService.errorMessage("Your Password is expired. Please reset your password.", "");
                        }
                        else {
                            this.check = true;
                            if (this.signinForm.value.password === "" ||
                                this.signinForm.value.username === "") {
                                this.toastService.errorMessage("Please enter login credentials.", "");
                            }
                            else {
                                var encryptedAES = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(login.password, "@12#90!^*NPR*g&*()$34#$");
                                var USERNAME = crypto_js__WEBPACK_IMPORTED_MODULE_1__.AES.encrypt(login.username, "@12#90!^*NPR*g&*()$34#$");
                                var data = encryptedAES.toString();
                                var uname = USERNAME.toString();
                                login.password = data;
                                login.username = uname;
                                this.apiService.getOtp(login).subscribe((res) => {
                                    this.variable = res;
                                    this.otpreceivedtime = new Date();
                                    if (this.variable) {
                                        if (this.variable[0] === "Username or password wrong") {
                                            this.toastService.errorMessage("Invalid Username or Password !!!", "");
                                        }
                                        if (res.failLgnCounter != 0) {
                                            this.apiService
                                                .fetchSecurityPolicyService()
                                                .subscribe((sp) => {
                                                this.security = sp;
                                                this.invLogins = this.security.maxInvLogins;
                                                if (this.invLogins !== 0) {
                                                    this.invLogins = this.invLogins - 1;
                                                    if (this.invLogins === res.failLgnCounter) {
                                                        this.toastService.errorMessage("Contact Admin, User Account locked after " +
                                                            `${res.failLgnCounter + 1}` +
                                                            " wrong attempts.", "");
                                                    }
                                                }
                                            });
                                        }
                                        // ---------- Password Policy Implementation (END) ----------
                                        if (this.variable[0] === "true") {
                                            this.progress = true;
                                            this.toastService.successMessage("OTP sent successfully to " + this.email, "");
                                            this.loginProcessing = false;
                                            this.verifyOTP = true;
                                        }
                                        else {
                                        }
                                    }
                                }, (err) => {
                                    this.toastService.errorMessage("Server Error", "");
                                    this.loginProcessing = false;
                                });
                            }
                        }
                    }
                });
            }
        });
    }
    signin() {
        let otp = {};
        otp.username = this.signinForm.value.username;
        otp.otp = this.otp;
        this.apiService.loginService(otp).subscribe((res) => {
            this.responseforotp = res;
            if (this.responseforotp[0] == "OTP is invalid") {
                this.toastService.errorMessage("Enter the Valid OTP.", "");
            }
            this.apiService.fetchMedUser(otp.username).subscribe((response) => {
                this.user = response;
                // if (this.responseforotp) {
                if (this.user != null) {
                    if (this.responseforotp[0] == "Time Expired") {
                        this.toastService.errorMessage("This OTP is expired. Please click on Resend OTP to get a new OTP.", "");
                        this.check = false;
                    }
                    this.loginProcessing = false;
                    this.user = this.responseforotp[1];
                    this.loginProcessing = false;
                    localStorage.setItem("userFromLogin", this.user.userId);
                    sessionStorage.setItem("user_id", this.user.userId);
                    if (this.user.statusForUser === "Enable" &&
                        this.user.verifiedStatus === "A") {
                        //---------- Password Policy Implementation (BEGIN) ----------
                        this.apiService.fetchSecurityPolicyService().subscribe((resp) => {
                            this.security = resp;
                            this.notifyPswdExpry = this.security.notifyPasswordExpiryInDays;
                            this.pswdExpiry = this.security.pswdExpiry;
                            if (this.pswdExpiry === 0 && this.notifyPswdExpry === 0) {
                                this.router
                                    .navigate(["/dashboard"])
                                    .then((data) => console.log("dashboard hit", data));
                            }
                            else {
                                this.currentDate = new Date();
                                this.changePwdDate = new Date(this.user.pwdChangeDate);
                                this.differnceInTime = this.currentDate - this.changePwdDate;
                                this.differnceInDays = Math.floor(this.differnceInTime / (1000 * 3600 * 24));
                                this.finalDiff = this.pswdExpiry - this.differnceInDays;
                                if (this.finalDiff === 0 || this.finalDiff <= 0) {
                                    this.toastService.errorMessage("Your password expired, Please change your password", "");
                                    this.router
                                        .navigate(["/forget-password"])
                                        .then((data) => console.log("Forget password hit", data));
                                }
                                else {
                                    //---------- Password Policy Implementation (END) ----------
                                    this.router.navigate(["/dashboard"]);
                                    //---------- Password Policy Implementation (BEGIN) ----------
                                    this.currentUser = localStorage.getItem("currentUser");
                                    this.apiService
                                        .fetchMedUser(otp.username)
                                        .subscribe((response) => {
                                        this.userEntity = response;
                                        console.log("userEntity ", this.userEntity);
                                        this.apiService
                                            .fetchSecurityPolicyService()
                                            .subscribe((resp) => {
                                            this.security = resp;
                                            this.notifyPswdExpry =
                                                this.security.notifyPasswordExpiryInDays;
                                            this.pswdExpiry = this.security.pswdExpiry;
                                            if (this.pswdExpiry !== 0 &&
                                                this.notifyPswdExpry !== 0) {
                                                this.currentDate = new Date();
                                                this.changePwdDate = new Date(this.userEntity.pwdChangeDate);
                                                this.differnceInTime =
                                                    this.currentDate - this.changePwdDate;
                                                this.differnceInDays = Math.floor(this.differnceInTime / (1000 * 3600 * 24));
                                                this.finalDiff =
                                                    this.pswdExpiry - this.differnceInDays;
                                                if (this.finalDiff > 0 &&
                                                    this.finalDiff <= this.notifyPswdExpry) {
                                                    this.toastService.errorMessage("Your password will expire in " +
                                                        `${this.finalDiff}` +
                                                        " day(s)", "");
                                                }
                                            }
                                        });
                                    });
                                    //  ---------- Password Policy Implementation (END) ----------
                                }
                            }
                        });
                    }
                    this.roleService.fetchNewRolePermissions(this.user.userId);
                    this.routing();
                }
            });
        }, (err) => {
            this.loginProcessing = false;
            this.toastService.errorMessage("Server Error ", "");
        });
    }
    routing() {
        console.log(this.userEntity);
        this.jwtAuth.signin()
            .subscribe(response => {
            setTimeout(() => {
                this.ls.setItem("currentUser", this.userEntity.userId);
                // this.ls.setItem("userPermissions", this.demoUser.userPermissions);
                this.ls.setItem("userobj", this.userEntity);
                this.ls.setItem("usercompleteobj", this.userEntity);
                this.router.navigate(['/dashboard']);
                this.iziToast.show({
                    title: `DTB Bank - Median!`,
                    message: `Welcome, ${this.userEntity.userId}!`,
                    image: "assets/images/user.png",
                    icon: 'ico ico-success',
                    // theme:"dark",
                    layout: 2,
                    // imageWidth:50,
                    balloon: false,
                    position: "topRight",
                    progressBarColor: "red",
                    pauseOnHover: true,
                });
            }, 2500);
        }, err => {
            // console.log(err);
        });
    }
    backToLogin() {
        this.showOtpComponent = false;
    }
    onOtpChange(otp) {
        this.otp = otp;
        if (this.otp.length === 6) {
            this.isValid = true;
            const signinData = this.signinForm.value;
        }
        // if (this.otp.length === 6) {
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
    showTimer(remaining) {
        let timerOn = true;
        this.m = Math.floor(remaining / 60);
        this.s = remaining % 60;
        this.m = this.m < 10 ? "0" + this.m : this.m;
        this.s = this.s < 10 ? "0" + this.s : this.s;
        this.cd.detectChanges();
        remaining -= 1;
        if (remaining >= 0 && timerOn) {
            setTimeout(() => {
                this.showTimer(remaining);
            }, 1000);
            return;
        }
        if (!timerOn) {
            // Do validate stuff here
            return;
        }
        // Do timeout stuff here
        this.timeOutOtp = true;
        this.m = null;
        this.s = null;
        this.cd.markForCheck();
    }
    toggleVisibility() {
        if (this.visible) {
            this.inputType = "password";
            this.visible = false;
            this.cd.markForCheck();
        }
        else {
            this.inputType = "text";
            this.visible = true;
            this.cd.markForCheck();
        }
    }
    resendOtp() {
        this.timeOutOtp = false;
        this.showTimer(60);
    }
    obscureEmail(email) {
        const [name, domain] = email.split("@");
        return `${name.substring(0, 5)}${new Array(name.length).join("*")}@${domain}`;
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_12__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_jwt_auth_service__WEBPACK_IMPORTED_MODULE_3__.JwtAuthService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_5__.LocalStoreService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_DEMO_USER__WEBPACK_IMPORTED_MODULE_6__.DEMO_USER), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ng2_izitoast__WEBPACK_IMPORTED_MODULE_7__.Ng2IzitoastService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_13__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_8__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_9__.RoleService)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["npr-login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.ngOtpInput = _t.first);
    } }, decls: 14, vars: 2, consts: [[1, "bg-white"], [1, "loginLogoCol", "text-center", "text-lg-start"], ["href", "JavaScript:void(0)"], ["src", "assets/images/logo.png", "alt", "logo"], [1, "container"], [1, "row", "g-0", "loginRow", "align-items-center"], [1, "col-lg-6"], ["class", "loginFormCol", 4, "ngIf"], [1, "loginFormCol"], ["class", "loginCol", 4, "ngIf"], [1, "loginImgCol", "d-none", "d-lg-block"], ["src", "assets/images/login-img.svg", "alt", "loginimg"], ["size", "small", "type", "square-loader"], [1, "loginCol"], [1, "lgTitle", "secondaryColor"], [1, "loginFormStyle"], [1, "row", "g-4", 3, "formGroup"], [1, "col-12"], ["for", "exampleInputEmail1", 1, "form-label", "lblStyles"], ["type", "text", "autofocus", "autofocus", "oninput", "this.value = this.value.toUpperCase()", "formControlName", "username", "id", "exampleInputEmail1", "placeholder", "you@example.com", 1, "form-control", "lineField"], [1, "row"], [1, "col"], ["for", "exampleInputPassword1", 1, "form-label", "lblStyles"], [1, "inputField"], [1, "inputField", "pwdFldCol", "d-flex"], ["type", "password", "formControlName", "password", "id", "pwdFld", "placeholder", "Your Password", 1, "form-control", "lineField", 3, "type"], ["toggle", "#pwdFld", 1, "alignSelf", 3, "click"], ["class", "showPwd", "src", "assets/images/show-icon.svg", "alt", "...", 4, "ngIf"], ["class", "hidePwd", "src", "assets/images/hide-icon.svg", "alt", "...", 4, "ngIf"], ["type", "submit", 1, "btn", "btnPrimary", "w-100", "btnLg", "roundedBorder", 3, "disabled", "click"], [1, "float"], [1, "primaryColor", "fpLink", 3, "routerLink"], [1, "rumanogoCol", "text-center", "pt-3"], ["src", "assets/images/rumango-img.png", "alt", "rumango-img"], [1, "medainStyle", "mt-3"], ["src", "assets/images/show-icon.svg", "alt", "...", 1, "showPwd"], ["src", "assets/images/hide-icon.svg", "alt", "...", 1, "hidePwd"], [1, "form", "w-100", "mb-10"], [1, "text-center", "mb-10"], ["alt", "Logo", "src", "assets/images/smartphone.svg", 1, "mh-125px"], [1, "text-dark", "mb-3"], [1, "text-muted", "fw-bold", "fs-5", "mb-5"], [1, "fw-bolder", "text-dark", "fs-3"], [1, "mb-10", "px-md-10"], [1, "fw-bolder", "text-start", "text-dark", "fs-6", "mb-1", "ms-1"], [1, "d-flex", "flex-wrap", "flex-stack"], ["inputControls", "6", 3, "config", "onInputChange"], ["ngOtpInput", ""], [1, "d-flex", 2, "gap", "10px"], ["type", "button", 1, "btn", "btn-lg", "btnPrimary", "fw-bolder", 3, "disabled", "click"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](7, LoginComponent_div_7_Template, 31, 7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](9, LoginComponent_div_9_Template, 24, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](12, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](13, "ngx-spinner", 12);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", !ctx.showOtpComponent);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.showOtpComponent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, ngx_spinner__WEBPACK_IMPORTED_MODULE_13__.NgxSpinnerComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormControlName, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLinkWithHref, ng_otp_input__WEBPACK_IMPORTED_MODULE_15__.NgOtpInputComponent], styles: [".flex-stack[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.flex-center[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n}\n\n.flex-wrap[_ngcontent-%COMP%] {\n  flex-wrap: wrap !important;\n}\n\n.d-flex[_ngcontent-%COMP%] {\n  display: flex !important;\n}\n\n.mh-125px[_ngcontent-%COMP%] {\n  max-height: 90px !important;\n}\n\n.border-hover[_ngcontent-%COMP%]:not(:hover):not(:focus):not(.active):not(:active) {\n  cursor: pointer;\n  border-color: transparent !important;\n}\n\n.form-control.form-control-solid[_ngcontent-%COMP%] {\n  background-color: #f5f8fa;\n  border-color: #f5f8fa;\n  color: #5e6278;\n  transition: color 0.2s ease, background-color 0.2s ease;\n}\n\n.form-control[_ngcontent-%COMP%] {\n  box-shadow: none !important;\n}\n\n.fs-2qx[_ngcontent-%COMP%] {\n  font-size: calc(1.35rem + 1.2vw) !important;\n}\n\n.my-2[_ngcontent-%COMP%] {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n\n.mx-1[_ngcontent-%COMP%] {\n  margin-right: 0.25rem !important;\n  margin-left: 0.25rem !important;\n}\n\n.h-60px[_ngcontent-%COMP%] {\n  height: 60px !important;\n}\n\n.w-60px[_ngcontent-%COMP%] {\n  width: 60px !important;\n}\n\n.text-dark[_ngcontent-%COMP%] {\n  color: #181c32 !important;\n}\n\n.text-dark[_ngcontent-%COMP%] {\n  --bs-text-opacity: 1;\n  color: rgba(var(--bs-dark-rgb), var(--bs-text-opacity)) !important;\n}\n\n.text-dark[_ngcontent-%COMP%] {\n  color: #181c32 !important;\n}\n\n.mb-3[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem !important;\n}\n\n.h1[_ngcontent-%COMP%], h1[_ngcontent-%COMP%] {\n  font-size: calc(1.3rem + .6vw);\n}\n\n.text-start[_ngcontent-%COMP%] {\n  text-align: left !important;\n}\n\n.fw-bolder[_ngcontent-%COMP%] {\n  font-weight: 600 !important;\n}\n\n.text-muted[_ngcontent-%COMP%] {\n  color: #a1a5b7 !important;\n}\n\n.text-muted[_ngcontent-%COMP%] {\n  --bs-text-opacity: 1;\n  color: #a1a5b7 !important;\n}\n\n.fw-bold[_ngcontent-%COMP%] {\n  font-weight: 500 !important;\n}\n\n.fs-5[_ngcontent-%COMP%] {\n  font-size: 1.15rem !important;\n}\n\n.mb-5[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem !important;\n}\n\n.fs-6[_ngcontent-%COMP%] {\n  font-size: 1.075rem !important;\n}\n\n.ms-1[_ngcontent-%COMP%] {\n  margin-left: 0.25rem !important;\n}\n\n.mb-1[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem !important;\n}\n\n.mb-10[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem !important;\n}\n\n.fs-3[_ngcontent-%COMP%] {\n  font-size: calc(1.26rem + .12vw) !important;\n}\n\nimg[_ngcontent-%COMP%], svg[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOEJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUNBO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtBQUVKOztBQUFBO0VBQ0ksMEJBQUE7QUFHSjs7QUFEQTtFQUNJLHdCQUFBO0FBSUo7O0FBRkE7RUFDSSwyQkFBQTtBQUtKOztBQUZBO0VBQ0ksZUFBQTtFQUNBLG9DQUFBO0FBS0o7O0FBSEE7RUFDSSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLHVEQUFBO0FBTUo7O0FBSkE7RUFDSSwyQkFBQTtBQU9KOztBQUpBO0VBQ0ksMkNBQUE7QUFPSjs7QUFMQTtFQUNJLDZCQUFBO0VBQ0EsZ0NBQUE7QUFRSjs7QUFOQTtFQUNJLGdDQUFBO0VBQ0EsK0JBQUE7QUFTSjs7QUFQQTtFQUNJLHVCQUFBO0FBVUo7O0FBUkE7RUFDSSxzQkFBQTtBQVdKOztBQVRBO0VBQ0kseUJBQUE7QUFZSjs7QUFUQTtFQUNJLG9CQUFBO0VBQ0Esa0VBQUE7QUFZSjs7QUFWQTtFQUNJLHlCQUFBO0FBYUo7O0FBWEE7RUFDSSxpQ0FBQTtBQWNKOztBQVpBO0VBQ0ksOEJBQUE7QUFlSjs7QUFaQTtFQUNJLDJCQUFBO0FBZUo7O0FBYkE7RUFDSSwyQkFBQTtBQWdCSjs7QUFkQTtFQUNJLHlCQUFBO0FBaUJKOztBQWRBO0VBQ0ksb0JBQUE7RUFDQSx5QkFBQTtBQWlCSjs7QUFmQTtFQUNJLDJCQUFBO0FBa0JKOztBQWhCQTtFQUNJLDZCQUFBO0FBbUJKOztBQWpCQTtFQUNJLGlDQUFBO0FBb0JKOztBQWxCQTtFQUNJLDhCQUFBO0FBcUJKOztBQW5CQTtFQUNJLCtCQUFBO0FBc0JKOztBQXBCQTtFQUNJLGlDQUFBO0FBdUJKOztBQXJCQTtFQUNJLGdDQUFBO0FBd0JKOztBQXRCQTtFQUNJLDJDQUFBO0FBeUJKOztBQXRCQTtFQUNJLHNCQUFBO0FBeUJKIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgtc3RhY2sge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4uZmxleC1jZW50ZXIge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5mbGV4LXdyYXAge1xyXG4gICAgZmxleC13cmFwOiB3cmFwIWltcG9ydGFudDtcclxufVxyXG4uZC1mbGV4IHtcclxuICAgIGRpc3BsYXk6IGZsZXghaW1wb3J0YW50O1xyXG59XHJcbi5taC0xMjVweCB7XHJcbiAgICBtYXgtaGVpZ2h0OiA5MHB4IWltcG9ydGFudDtcclxufVxyXG5cclxuLmJvcmRlci1ob3Zlcjpub3QoOmhvdmVyKTpub3QoOmZvY3VzKTpub3QoLmFjdGl2ZSk6bm90KDphY3RpdmUpIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQhaW1wb3J0YW50O1xyXG59XHJcbi5mb3JtLWNvbnRyb2wuZm9ybS1jb250cm9sLXNvbGlkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY4ZmE7XHJcbiAgICBib3JkZXItY29sb3I6ICNmNWY4ZmE7XHJcbiAgICBjb2xvcjogIzVlNjI3ODtcclxuICAgIHRyYW5zaXRpb246IGNvbG9yIC4ycyBlYXNlLGJhY2tncm91bmQtY29sb3IgLjJzIGVhc2U7XHJcbn1cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICBib3gtc2hhZG93OiBub25lIWltcG9ydGFudDtcclxufVxyXG5cclxuLmZzLTJxeCB7XHJcbiAgICBmb250LXNpemU6IGNhbGMoMS4zNXJlbSArIDEuMnZ3KSFpbXBvcnRhbnQ7XHJcbn1cclxuLm15LTIge1xyXG4gICAgbWFyZ2luLXRvcDogMC41cmVtIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuLm14LTEge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjI1cmVtIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwLjI1cmVtIWltcG9ydGFudDtcclxufVxyXG4uaC02MHB4IHtcclxuICAgIGhlaWdodDogNjBweCFpbXBvcnRhbnQ7XHJcbn1cclxuLnctNjBweCB7XHJcbiAgICB3aWR0aDogNjBweCFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQtZGFyayB7XHJcbiAgICBjb2xvcjogIzE4MWMzMiFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50ZXh0LWRhcmsge1xyXG4gICAgLS1icy10ZXh0LW9wYWNpdHk6IDE7XHJcbiAgICBjb2xvcjogcmdiYSh2YXIoLS1icy1kYXJrLXJnYiksdmFyKC0tYnMtdGV4dC1vcGFjaXR5KSkhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0LWRhcmsge1xyXG4gICAgY29sb3I6ICMxODFjMzIhaW1wb3J0YW50O1xyXG59XHJcbi5tYi0zIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW0haW1wb3J0YW50O1xyXG59XHJcbi5oMSwgaDEge1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDEuM3JlbSArIC42dncpO1xyXG59XHJcblxyXG4udGV4dC1zdGFydCB7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0IWltcG9ydGFudDtcclxufVxyXG4uZnctYm9sZGVyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDAhaW1wb3J0YW50O1xyXG59XHJcbi50ZXh0LW11dGVkIHtcclxuICAgIGNvbG9yOiAjYTFhNWI3IWltcG9ydGFudDtcclxufVxyXG5cclxuLnRleHQtbXV0ZWQge1xyXG4gICAgLS1icy10ZXh0LW9wYWNpdHk6IDE7XHJcbiAgICBjb2xvcjogI2ExYTViNyFpbXBvcnRhbnQ7XHJcbn1cclxuLmZ3LWJvbGQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMCFpbXBvcnRhbnQ7XHJcbn1cclxuLmZzLTUge1xyXG4gICAgZm9udC1zaXplOiAxLjE1cmVtIWltcG9ydGFudDtcclxufVxyXG4ubWItNSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtIWltcG9ydGFudDtcclxufVxyXG4uZnMtNiB7XHJcbiAgICBmb250LXNpemU6IDEuMDc1cmVtIWltcG9ydGFudDtcclxufVxyXG4ubXMtMSB7XHJcbiAgICBtYXJnaW4tbGVmdDogMC4yNXJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuLm1iLTEge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuLm1iLTEwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbSFpbXBvcnRhbnQ7XHJcbn1cclxuLmZzLTMge1xyXG4gICAgZm9udC1zaXplOiBjYWxjKDEuMjZyZW0gKyAuMTJ2dykhaW1wb3J0YW50O1xyXG59IFxyXG5cclxuaW1nLCBzdmcge1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufSJdfQ== */"], data: { animation: [src_npr_animations_fade_in_up_animation__WEBPACK_IMPORTED_MODULE_0__.fadeInUp400ms] }, changeDetection: 0 });
class User {
}
class SecurityDto {
}


/***/ }),

/***/ 33794:
/*!**************************************************!*\
  !*** ./src/app/views/auth/login/login.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginModule": function() { return /* binding */ LoginModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 93140);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ 2783);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _DEMO_USER__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DEMO_USER */ 8888);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-otp-input */ 49624);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 55314);
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-izitoast */ 27218);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);









class LoginModule {
}
LoginModule.ɵfac = function LoginModule_Factory(t) { return new (t || LoginModule)(); };
LoginModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: LoginModule });
LoginModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [_DEMO_USER__WEBPACK_IMPORTED_MODULE_2__.DEMO_USER], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
            ng_otp_input__WEBPACK_IMPORTED_MODULE_7__.NgOtpInputModule,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerModule,
            ng2_izitoast__WEBPACK_IMPORTED_MODULE_3__.Ng2IziToastModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](LoginModule, { declarations: [_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        ng_otp_input__WEBPACK_IMPORTED_MODULE_7__.NgOtpInputModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerModule,
        ng2_izitoast__WEBPACK_IMPORTED_MODULE_3__.Ng2IziToastModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_views_auth_login_login_module_ts-es2015.js.map