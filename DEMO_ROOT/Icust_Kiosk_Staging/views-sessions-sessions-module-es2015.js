(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-sessions-sessions-module"],{

/***/ "7FO4":
/*!****************************************************************************!*\
  !*** ./node_modules/ngx-custom-validators/node_modules/tslib/tslib.es6.js ***!
  \****************************************************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "8Wtu":
/*!*****************************************************************!*\
  !*** ./src/app/views/sessions/not-found/not-found.component.ts ***!
  \*****************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function () { return ["/"]; };
class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 15, vars: 2, consts: [[1, "d-flex", "align-items-center", "h-full", "mat-bg-default"], [1, "app-error"], [1, "fix"], ["color", "warn", 1, "error-icon"], [1, "error-text"], [1, "error-title"], [1, "error-subtitle"], [1, "error-actions"], ["mat-raised-button", "", "color", "primary", 1, "mb-16", "mr-8", 3, "routerLink"], ["mat-raised-button", "", "color", "warn"]], template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-not-found',
                templateUrl: './not-found.component.html',
                styleUrls: ['./not-found.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Ekgz":
/*!***********************************************************!*\
  !*** ./src/app/views/sessions/signin/signin.component.ts ***!
  \***********************************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/auth/jwt-auth.service */ "nZzT");
/* harmony import */ var ngx_custom_validators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-custom-validators */ "uxn7");
/* harmony import */ var _fingerprint_fingerprint_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../fingerprint/fingerprint.component */ "hxFr");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");


















const _c0 = function () { return {}; };
class SigninComponent {
    constructor(fb, router, jwtService, dialog) {
        this.fb = fb;
        this.router = router;
        this.jwtService = jwtService;
        this.dialog = dialog;
    }
    ngOnInit() {
        const password = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        const confirmPassword = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', ngx_custom_validators__WEBPACK_IMPORTED_MODULE_5__["CustomValidators"].equalTo(password));
        this.signinForm = this.fb.group({
            email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            password: password,
            agreed: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    onSubmit() {
        if (!this.signinForm.invalid) {
            // do what you wnat with your data
            console.log(this.signinForm.value);
            this.jwtService.signin().subscribe((res) => {
                this.router.navigateByUrl('/others/blank');
            }, err => console.error("Err", err));
        }
    }
    openDialog() {
        const dialogRef = this.dialog.open(_fingerprint_fingerprint_component__WEBPACK_IMPORTED_MODULE_6__["FingerprintComponent"]);
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
}
SigninComponent.ɵfac = function SigninComponent_Factory(t) { return new (t || SigninComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JwtAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
SigninComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SigninComponent, selectors: [["app-signin"]], decls: 26, vars: 3, consts: [[1, "seciton-left"], [1, "section-left-content"], [1, "text-36", "font-weight-light"], [1, "mb-24", "text-small"], [1, "form-holder", "h-full-screen", "mat-bg-card", "mat-elevation-z4", 3, "perfectScrollbar"], ["fxLayout", "column", 1, "signup-form", 3, "formGroup", "ngSubmit"], [1, "form-headline", "text-center", "mb-32"], [1, "font-weight-light"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "mb-48"], ["width", "200px", "src", "assets/images/logo.png", "alt", ""], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "email", "type", "email", "name", "email", "placeholder", "Email"], ["matInput", "", "formControlName", "password", "type", "password", "name", "password", "placeholder", "********"], ["mat-raised-button", "", "color", "primary"], [1, "my-32"], ["fxLayout", "row wrap", "fxLayoutAlign", "center center", 1, "mb-48", 3, "click"], ["width", "90px", "height", "90px", "src", "assets/images/fingerprint.png", "alt", ""]], template: function SigninComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function SigninComponent_Template_form_ngSubmit_7_listener() { return ctx.onSubmit(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SigninComponent_Template_div_click_24_listener() { return ctx.openDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("perfectScrollbar", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.signinForm);
    } }, directives: [ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_7__["PerfectScrollbarDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_8__["DefaultLayoutAlignDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_12__["MatDivider"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaWduaW4uY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SigninComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signin',
                templateUrl: './signin.component.html',
                styleUrls: ['./signin.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: app_shared_services_auth_jwt_auth_service__WEBPACK_IMPORTED_MODULE_4__["JwtAuthService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "Kj45":
/*!************************************************************!*\
  !*** ./src/app/views/sessions/otp/onlynumber.directive.ts ***!
  \************************************************************/
/*! exports provided: CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR, OnlynumberDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR", function() { return CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OnlynumberDirective", function() { return OnlynumberDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



const CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(() => OnlynumberDirective),
    multi: true
};
class OnlynumberDirective {
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    onInputChange(value) {
        const filteredValue = filterValue(value);
        this.updateTextInput(filteredValue, this.value !== filteredValue);
    }
    onBlur() {
        this.onTouched();
    }
    updateTextInput(value, propagateChange) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'value', value);
        if (propagateChange) {
            this.onChange(value);
        }
        this.value = value;
    }
    // ControlValueAccessor Interface
    registerOnChange(fn) {
        this.onChange = fn;
    }
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    setDisabledState(isDisabled) {
        this.renderer.setProperty(this.elementRef.nativeElement, 'disabled', isDisabled);
    }
    writeValue(value) {
        value = value ? String(value) : '';
        this.updateTextInput(value, false);
    }
}
OnlynumberDirective.ɵfac = function OnlynumberDirective_Factory(t) { return new (t || OnlynumberDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
OnlynumberDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: OnlynumberDirective, selectors: [["", "onlyNumber", ""]], hostBindings: function OnlynumberDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function OnlynumberDirective_input_HostBindingHandler($event) { return ctx.onInputChange($event.target.value); })("blur", function OnlynumberDirective_blur_HostBindingHandler() { return ctx.onBlur(); });
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR])] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OnlynumberDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[onlyNumber]',
                providers: [CUSTOM_INPUT_DATE_PICKER_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { onInputChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['input', ['$event.target.value']]
        }], onBlur: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['blur']
        }] }); })();
function filterValue(value) {
    return value.replace(/[^0-9]*/g, '');
}


/***/ }),

/***/ "KvEN":
/*!*****************************************************!*\
  !*** ./src/app/views/sessions/otp/otp.component.ts ***!
  \*****************************************************/
/*! exports provided: OtpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpComponent", function() { return OtpComponent; });
/* harmony import */ var _shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/services/finger-print-capture.service */ "rp8y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_shared_components_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/components/toastr/toastr.component */ "YJH2");
/* harmony import */ var app_shared_models_otp_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/models/otp.model */ "V4gq");
/* harmony import */ var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/api.service */ "nm5K");
/* harmony import */ var _fingerprint_fingerprint_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../fingerprint/fingerprint.component */ "hxFr");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! app/shared/services/local-store.service */ "tZUg");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");






























class OtpComponent {
    constructor(router, _formBuilder, toast, apiService, ls, dialog, snack, fpCaptureService, cdk, toastr) {
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
        this.nextdis = false;
        this.oTpModel = new app_shared_models_otp_model__WEBPACK_IMPORTED_MODULE_6__["otpModel"]();
    }
    ngOnInit() {
        this.transactionTypeValue = this.ls.getItem('TransactionType');
        //this.appointmentIdvalue = this.ls.getItem('appointmentId');
        console.log(this.transactionTypeValue);
        this.oTpForm = this._formBuilder.group({
            otpNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
        this.toast.showSuccess('', 'OTP is sent to registered Mobile Number');
        this.PhoneNumLogin = localStorage.getItem('phonenumFromLogin');
    }
    validateOtp(otpValue) {
        console.log("OTP validaion", otpValue);
        if (otpValue.otpNumber == "") {
            this.snack.open(`Please enter OTP to continue`, 'OK', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
            });
        }
        else {
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
            this.verifyOtpModel.isMobileLogin = false;
            console.log("model", this.verifyOtpModel);
            this.nextdis = true;
            this.apiService.verifyOtp(this.verifyOtpModel).subscribe(otpResp => {
                var _a, _b;
                console.log('otpResp :: ', otpResp);
                if (otpResp != null) {
                    if (((_a = otpResp.data) === null || _a === void 0 ? void 0 : _a.userId) != '' && ((_b = otpResp.data) === null || _b === void 0 ? void 0 : _b.userId) != null) {
                        // this.router.navigateByUrl('/others/services');
                        /* TO-DO: need to uncomment this.openDialog() for fingerprint verification */
                        // this.openDialog(otpResp);
                        console.log(this.transactionTypeValue);
                        this.nextdis = true;
                        if (this.transactionTypeValue) {
                            console.log(this.transactionTypeValue);
                            if (this.transactionTypeValue.data.appointmentId != null) {
                                if (this.transactionTypeValue.data.trnType === 'Cash Withdrawal') {
                                    this.router.navigateByUrl('/others/cw-cash-withdrawal');
                                }
                                else if (this.transactionTypeValue.data.trnType == 'Cash Deposit') {
                                    this.router.navigateByUrl('/others/cash-deposit');
                                }
                                else if (this.transactionTypeValue.data.trnType == 'Cheque Deposit') {
                                    this.router.navigateByUrl('/others/cheque-deposit');
                                }
                                else if (this.transactionTypeValue.data.trnType == 'Cheque Withdrawal') {
                                    this.router.navigateByUrl('/others/cheque-withdrawal');
                                }
                            }
                        }
                        else {
                            this.openDialog(otpResp.data);
                        }
                        localStorage.setItem('userId', otpResp.data.userId);
                        this.snack.open(`Validation successful`, 'OK', {
                            duration: 1000,
                            verticalPosition: 'top',
                            horizontalPosition: 'right'
                        });
                    }
                    else {
                        this.nextdis = false;
                        this.snack.open(`Please Enter a Valid OTP`, 'OK', {
                            duration: 4000,
                            verticalPosition: 'top',
                            horizontalPosition: 'right'
                        });
                    }
                }
            }, (error) => {
                console.log(error.status);
                // this.errorStatus = error.status;
                this.nextdis = false;
                this.snack.open(`Incorrect OTP. Please try again.`, 'OK', {
                    duration: 4000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'
                });
                // if (this.errorStatus == 200) {
                //   // this.router.navigateByUrl('/others/services');
                //   /* TO-DO: need to uncomment this for fingerprint verification */
                //   // this.openDialog();
                // }
            });
        }
    }
    getOtp() {
        localStorage.setItem("PhoneNumLogin", this.customerPhoneNum);
        this.oTpModel.source = 'customer';
        this.oTpModel.source_key = 'mobile';
        this.oTpModel.source_value = this.PhoneNumLogin;
        console.log("model", this.oTpModel);
        this.apiService.getOtp(this.oTpModel).subscribe(otpResp => {
            console.log("Response Success", otpResp);
            this.otpResponse = otpResp;
            this.snack.open(`OTP has been sent again`, 'OK', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
            });
            /* Added validation for un-registered mobile nummber is entered */
            if (this.otpResponse.data.otpVal.userId === "New Customer" || (this.otpResponse.data.otpVal.userId === '' && this.otpResponse.data.otpVal.userId === null)) {
                this.cdk.detectChanges();
                // this.userResp = true;
            }
        });
        // this.router.navigateByUrl('/otp');
    }
    openDialog(otpResp) {
        this.userData = this.fpCaptureService.userDataService(otpResp);
        const dialogRef = this.dialog.open(_fingerprint_fingerprint_component__WEBPACK_IMPORTED_MODULE_8__["FingerprintComponent"], {
            width: '50%',
            data: otpResp
        });
        dialogRef.afterClosed().subscribe(result => {
            console.log(`Dialog result: ${result}`);
        });
    }
    goToServiceScreen() {
        console.log("Go to Service");
        if (this.otpValid) {
            if (this.transactionTypeValue == 'Cash Withdrawal') {
                this.router.navigateByUrl('/others/cash-withdrawal');
            }
            else if (this.transactionTypeValue == 'Cash Deposit') {
                this.router.navigateByUrl('/others/cash-deposit');
            }
            else if (this.transactionTypeValue == 'Cheque Withdrawal') {
                this.router.navigateByUrl('/others/cheque-withdrawal');
            }
            else if (this.transactionTypeValue == 'Cheque Deposit') {
                this.router.navigateByUrl('/others/cheque-deposit');
            }
        }
    }
    goToLoginScreen() {
        this.router.navigateByUrl('/sessions/login');
    }
}
OtpComponent.ɵfac = function OtpComponent_Factory(t) { return new (t || OtpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_components_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_5__["ToastrComponent"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_11__["LocalStoreService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_0__["FingerPrintCaptureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"])); };
OtpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: OtpComponent, selectors: [["app-otp"]], decls: 36, vars: 4, consts: [[1, "login_page"], [1, "card_container"], ["fxFlex", "50%", 1, "left_container"], [1, "border-text"], ["fxLayout", "row"], [1, "backIcon", 3, "click"], [1, "card-title"], ["novalidate", "", 3, "formGroup"], [1, "number"], [1, "phoneCard"], ["matPrefix", ""], ["fxLayout", "row", "fxLayoutGap", "10px", 2, "margin-top", "-5px"], ["matInput", "", "type", "text", "formControlName", "otpNumber", "placeholder", "Enter OTP", 1, "no-outline"], ["fxLayout", "row", 2, "width", "200%", "margin-left", "78%", "font-size", "13px"], [2, "color", "lightgray"], [2, "color", "#004c97", "cursor", "pointer", 3, "click"], ["fxLayout", "row", 1, "button1"], ["mat-flat-button", "", "color", "primary", 1, "login_btn", 3, "ngClass", "disabled", "click"], ["fxFlex", "50%", 1, "right_container"], ["src", "assets/images/otp.png", 1, "img1"]], template: function OtpComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OtpComponent_Template_mat_icon_click_10_listener() { return ctx.goToLoginScreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "keyboard_backspace ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " \u00A0\u00A0 ");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OtpComponent_Template_span_click_26_listener() { return ctx.getOtp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Resend OTP");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function OtpComponent_Template_button_click_30_listener() { ctx.validateOtp(ctx.oTpForm.value); return ctx.goToServiceScreen(); });
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.bankName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.oTpForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.oTpForm.invalid ? "beforeContinue" : "afterContinue")("disabled", ctx.oTpForm.get("otpNumber").invalid || ctx.nextdis);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardTitle"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIcon"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_15__["MatPrefix"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_13__["DefaultLayoutGapDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_16__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_18__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_19__["DefaultClassDirective"]], styles: [".login_page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n\n.login_page[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50%;\n  height: 100%;\n  background-color: #3858cb0d;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 530px;\n  min-height: 500px;\n  border-radius: 30px 0 0 30px;\n  padding: 0;\n  margin: 2rem auto;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%] {\n  padding: 3rem;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   .border-text[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  text-align: left;\n  font-family: \"Phosphate\";\n  font-size: 18px;\n  color: #004c97;\n  font: normal normal normal 25px/31px Phosphate;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   .backIcon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  margin-top: 4.5px;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 20px;\n  font-weight: bold;\n  padding: 0px 0px;\n  margin-left: -8px;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  color: #7e84a3;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .phoneCard[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px;\n  height: 45px;\n  margin: 0.75rem 0;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .phoneCard[_ngcontent-%COMP%]   .vertical-line[_ngcontent-%COMP%] {\n  width: 2px;\n  background-color: #2c2c2c1f;\n  height: 50px;\n  margin-top: -17px;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .phoneCard[_ngcontent-%COMP%]   .no-outline[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  height: 20px;\n  width: 80%;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .login_btn[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 30px;\n  height: 35px;\n  margin: 1.7rem 0;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .login_btn.afterContinue[_ngcontent-%COMP%] {\n  border-color: transparent;\n  color: #fff;\n  background: transparent linear-gradient(90deg, #051a2d 0%, #004c97 100%);\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .clickHereText[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .clickHereText[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-right: 10px;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .clickHereText[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 8px;\n  text-align: center;\n  padding: 0 4px;\n  width: 100%;\n  line-height: 1.4;\n  white-space: break-spaces;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .right_container[_ngcontent-%COMP%]   .img1[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n  .clickHereText button .mat-button-wrapper {\n  width: 100%;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcb3RwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtBQUN0Qjs7QUFOQTtFQU9NLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxVQUFVO0VBQ1YsWUFBWTtFQUNaLDJCQUEyQjtBQUdqQzs7QUFoQkE7RUFnQk0sVUFBVTtFQUNWLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsNEJBQTRCO0VBQzVCLFVBQVU7RUFDVixpQkFBaUI7QUFJdkI7O0FBekJBO0VBdUJRLGFBQWE7QUFNckI7O0FBN0JBO0VBeUJVLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsd0JBQXdCO0VBQ3hCLGVBQWU7RUFDZixjQUFjO0VBQ2QsOENBQThDO0FBUXhEOztBQXRDQTtFQWlDWSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFnQjtBQVM1Qjs7QUE1Q0E7RUFzQ1UsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQVUzQjs7QUFwREE7RUE4Q1ksY0FBYztBQVUxQjs7QUF4REE7RUFpRFksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0FBVzdCOztBQS9EQTtFQXNEYyxVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixpQkFBaUI7QUFhL0I7O0FBdEVBO0VBNERjLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7QUFjeEI7O0FBN0VBO0VBbUVZLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtBQWM1Qjs7QUFwRkE7RUF3RWMseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCx3RUFDa0Q7QUFlaEU7O0FBMUZBO0VBK0VZLGVBQWU7QUFlM0I7O0FBOUZBO0VBaUZjLGVBQWU7QUFpQjdCOztBQWxHQTtFQXFGWSxXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw2QkFBNkI7QUFpQnpDOztBQXpHQTtFQTBGYyxZQUFZO0VBQ1osVUFBVTtFQUNWLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGtCQUFrQjtBQW1CaEM7O0FBbEhBO0VBaUdnQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtBQXFCdkM7O0FBOUhBO0VBaUhVLFlBQVk7RUFDWixXQUFXO0FBaUJyQjs7QUFYRTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBY2pCIiwiZmlsZSI6Im90cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbl9wYWdlIHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICB3aWR0aDogNTAlO1xyXG4gICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzODU4Y2IwZDtcclxuICAgIH1cclxuICAgIG1hdC1jYXJkLmNhcmRfY29udGFpbmVyIHtcclxuICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgaGVpZ2h0OiA1MzBweDtcclxuICAgICAgbWluLWhlaWdodDogNTAwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHggMCAwIDMwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgIG1hcmdpbjogMnJlbSBhdXRvO1xyXG4gICAgICAubGVmdF9jb250YWluZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICAgICAgLmJvcmRlci10ZXh0IHtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiUGhvc3BoYXRlXCI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBjb2xvcjogIzAwNGM5NztcclxuICAgICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDI1cHgvMzFweCBQaG9zcGhhdGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iYWNrSWNvbntcclxuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6NC41cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jYXJkLXRpdGxlIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IC04cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcm0ge1xyXG4gICAgICAgICAgLm51bWJlciB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjN2U4NGEzO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnBob25lQ2FyZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwLjc1cmVtIDA7XHJcbiAgICAgICAgICAgIC52ZXJ0aWNhbC1saW5lIHtcclxuICAgICAgICAgICAgICB3aWR0aDogMnB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzJjMmMxZjtcclxuICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTE3cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLm5vLW91dGxpbmUge1xyXG4gICAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAubG9naW5fYnRuIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxLjdyZW0gMDtcclxuICAgICAgICAgICAgJi5hZnRlckNvbnRpbnVlIHtcclxuICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50XHJcbiAgICAgICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwNTFhMmQgMCUsICMwMDRjOTcgMTAwJSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGZpZWxkc2V0IHtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgICBsZWdlbmQge1xyXG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmNsaWNrSGVyZVRleHQge1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgYiB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDhweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgNHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IGJyZWFrLXNwYWNlcztcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5yaWdodF9jb250YWluZXIge1xyXG4gICAgICAgIC5pbWcxIHtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICA6Om5nLWRlZXAgLmNsaWNrSGVyZVRleHQgYnV0dG9uIC5tYXQtYnV0dG9uLXdyYXBwZXIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](OtpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-otp',
                templateUrl: './otp.component.html',
                styleUrls: ['./otp.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: app_shared_components_toastr_toastr_component__WEBPACK_IMPORTED_MODULE_5__["ToastrComponent"] }, { type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] }, { type: app_shared_services_local_store_service__WEBPACK_IMPORTED_MODULE_11__["LocalStoreService"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"] }, { type: _shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_0__["FingerPrintCaptureService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"] }]; }, null); })();
function openToast() {
    throw new Error('Function not implemented.');
}
function errorMessage(errorMessage) {
    throw new Error('Function not implemented.');
}


/***/ }),

/***/ "NjAb":
/*!*********************************************************!*\
  !*** ./src/app/views/sessions/error/error.component.ts ***!
  \*********************************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = function () { return ["/"]; };
class ErrorComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorComponent.ɵfac = function ErrorComponent_Factory(t) { return new (t || ErrorComponent)(); };
ErrorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorComponent, selectors: [["app-error"]], decls: 15, vars: 2, consts: [[1, "page-wrap", "h-full", "mat-bg-default"], [1, "app-error"], [1, "fix"], ["color", "warn", 1, "error-icon"], [1, "error-text"], [1, "error-title"], [1, "error-subtitle"], [1, "error-actions"], ["mat-raised-button", "", "color", "primary", 1, "mb-16", "mr-8", 3, "routerLink"], ["mat-raised-button", "", "color", "warn"]], template: function ErrorComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error',
                templateUrl: './error.component.html',
                styleUrls: ['./error.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "OoMb":
/*!*********************************************************!*\
  !*** ./src/app/views/sessions/login/login.component.ts ***!
  \*********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../shared/services/finger-print-capture.service */ "rp8y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/Dialog/dialog.service */ "LP5l");
/* harmony import */ var app_shared_models_otp_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/models/otp.model */ "V4gq");
/* harmony import */ var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/api.service */ "nm5K");
/* harmony import */ var app_shared_services_showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/showMessage/show-message.service */ "x/2q");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _otp_onlynumber_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../otp/onlynumber.directive */ "Kj45");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");



























class LoginComponent {
    constructor(router, _formBuilder, dialogService, apiService, showMessageService, snack, cdr, fpCaptureService) {
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
        this.cntdis = false;
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
            numericCode: '276',
        };
        // if(error.status){
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
        this.maskingNumber = [
            { code: 'AD', phone: '+376', mask: '999 999' },
            { code: 'AE', phone: '+971', mask: '999 999 9999' },
            { code: 'AF', phone: '+93', mask: '999 999 9999' },
            { code: 'AG', phone: '+1 (268)', mask: '999-9999' },
            { code: 'AI', phone: '+1 (264)', mask: '999-9999' },
            { code: 'AL', phone: '+355', mask: '999 999 9999' },
            { code: 'AM', phone: '+374', mask: '999 999999' },
            { code: 'AN', phone: '+599', mask: '999 9999' },
            { code: 'AO', phone: '+244', mask: '999 999 999' },
            { code: 'AQ', phone: '+672', mask: '9 99999' },
            { code: 'AR', phone: '+54', mask: '999 99-9999-9999' },
            { code: 'AS', phone: '+1 (684)', mask: '999-9999' },
            { code: 'AT', phone: '+43', mask: '9999 999999' },
            { code: 'AU', phone: '+61', mask: '9999 999 999' },
            { code: 'AW', phone: '+297', mask: '999 9999' },
            { code: 'AZ', phone: '+994', mask: '999 999 99 99' },
            { code: 'BA', phone: '+387', mask: '999 999 999' },
            { code: 'BB', phone: '+1 (246)', mask: '999-9999' },
            { code: 'BD', phone: '+880', mask: '99999-999999' },
            { code: 'BE', phone: '+32', mask: '9999 99 99 99' },
            { code: 'BF', phone: '+226', mask: '99 99 99 99' },
            { code: 'BG', phone: '+359', mask: '999 999 999' },
            { code: 'BH', phone: '+973', mask: '9999 9999' },
            { code: 'BI', phone: '+257', mask: '99 99 99 99' },
            { code: 'BJ', phone: '+229', mask: '99 99 99 99' },
            { code: 'BL', phone: '+590', mask: '9999 99 99 99' },
            { code: 'BM', phone: '+1 (441)', mask: '999-9999' },
            { code: 'BN', phone: '+673', mask: '999 9999' },
            { code: 'BO', phone: '+591', mask: '99999999' },
            { code: 'BR', phone: '+55', mask: '(99) 99999-9999' },
            { code: 'BS', phone: '+1 (242)', mask: '999-9999' },
            { code: 'BT', phone: '+975', mask: '99 99 99 99' },
            { code: 'BW', phone: '+267', mask: '99 999 999' },
            { code: 'BY', phone: '+375', mask: '9 999 999-99-99' },
            { code: 'BZ', phone: '+501', mask: '999-9999' },
            { code: 'CA', phone: '+1', mask: '(999) 999-9999' },
            { code: 'CC', phone: '+61', mask: '9999 999 999' },
            { code: 'CD', phone: '+243', mask: '9999 999 999' },
            { code: 'CF', phone: '+236', mask: '99 99 99 99' },
            { code: 'CG', phone: '+242', mask: '99 999 9999' },
            { code: 'CH', phone: '+41', mask: '999 999 99 99' },
            { code: 'CI', phone: '+225', mask: '99 99 99 99' },
            { code: 'CK', phone: '+682', mask: '99 9999' },
            { code: 'CL', phone: '+56', mask: '9 9999 9999' },
            { code: 'CM', phone: '+237', mask: '9 99 99 99 99' },
            { code: 'CN', phone: '+86', mask: '999 9999 9999' },
            { code: 'CO', phone: '+57', mask: '999 9999999' },
            { code: 'CR', phone: '+506', mask: '9999 9999' },
            { code: 'CU', phone: '+53', mask: '99 9999999' },
            { code: 'CV', phone: '+238', mask: '999 99 99' },
            { code: 'CW', phone: '+599', mask: '999 9999' },
            { code: 'CX', phone: '+61', mask: '9999 999 999' },
            { code: 'CY', phone: '+357', mask: '99 999999' },
            { code: 'CZ', phone: '+420', mask: '999 999 999' },
            { code: 'DE', phone: '+49', mask: '99999 9999999' },
            { code: 'DJ', phone: '+253', mask: '99 99 99 99' },
            { code: 'DK', phone: '+45', mask: '99 99 99 99' },
            { code: 'DM', phone: '+1 (767)', mask: '999-9999' },
            { code: 'DO', phone: '+1 (809)', mask: '999-9999' },
            { code: 'DZ', phone: '+213', mask: '9999 99 99 99' },
            { code: 'EC', phone: '+593', mask: '999 999 9999' },
            { code: 'EE', phone: '+372', mask: '9999 9999' },
            { code: 'EG', phone: '+20', mask: '9999 999 9999' },
            { code: 'EH', phone: '+212', mask: '9999-999999' },
            { code: 'ER', phone: '+291', mask: '99 999 999' },
            { code: 'ES', phone: '+34', mask: '999 99 99 99' },
            { code: 'ET', phone: '+251', mask: '999 999 9999' },
            { code: 'FI', phone: '+358', mask: '999 9999999' },
            { code: 'FJ', phone: '+679', mask: '999 9999' },
            { code: 'FK', phone: '+500', mask: '99999' },
            { code: 'FM', phone: '+691', mask: '999 9999' },
            { code: 'FO', phone: '+298', mask: '999999' },
            { code: 'FR', phone: '+33', mask: '99 99 99 99 99' },
            { code: 'GA', phone: '+241', mask: '99 99 99 99' },
            { code: 'GB', phone: '+44', mask: '99999 99999' },
            { code: 'GD', phone: '+1 (473)', mask: '999-9999' },
            { code: 'GE', phone: '+995', mask: '999 99 99 99' },
            { code: 'GG', phone: '+44', mask: '99999 999999' },
            { code: 'GH', phone: '+233', mask: '999 999 9999' },
            { code: 'GI', phone: '+350', mask: '99999999' },
            { code: 'GL', phone: '+299', mask: '99 99 99' },
            { code: 'GM', phone: '+220', mask: '999 9999' },
            { code: 'GN', phone: '+224', mask: '999 99 99 99' },
            { code: 'GQ', phone: '+240', mask: '999 999 999' },
            { code: 'GR', phone: '+30', mask: '999 999 9999' },
            { code: 'GT', phone: '+502', mask: '9999 9999' },
            { code: 'GU', phone: '+1 (671)', mask: '999-9999' },
            { code: 'GW', phone: '+245', mask: '999 999 999' },
            { code: 'GY', phone: '+592', mask: '999 9999' },
            { code: 'HK', phone: '+852', mask: '9999 9999' },
            { code: 'HN', phone: '+504', mask: '9999-9999' },
            { code: 'HR', phone: '+385', mask: '999 999 9999' },
            { code: 'HT', phone: '+509', mask: '99 99 9999' },
            { code: 'HU', phone: '+36', mask: '(99) 999 9999' },
            { code: 'ID', phone: '+62', mask: '9999-999-999' },
            { code: 'IE', phone: '+353', mask: '999 999 9999' },
            { code: 'IL', phone: '+972', mask: '999-999-9999' },
            { code: 'IM', phone: '+44', mask: '99999 999999' },
            { code: 'IN', phone: '+91', mask: '99999 99999' },
            { code: 'IO', phone: '+246', mask: '999 9999' },
            { code: 'IQ', phone: '+964', mask: '9999 999 9999' },
            { code: 'IR', phone: '+98', mask: '9999 999 9999' },
            { code: 'IS', phone: '+354', mask: '999 9999' },
            { code: 'IT', phone: '+39', mask: '999 999 9999' },
            { code: 'JE', phone: '+44', mask: '99999 999999' },
            { code: 'JM', phone: '+1 (876)', mask: '999-9999' },
            { code: 'JO', phone: '+962', mask: '99 9999 9999' },
            { code: 'JP', phone: '+81', mask: '999 9999-9999' },
            { code: 'KE', phone: '+254', mask: '9999 999999' },
            { code: 'KG', phone: '+996', mask: '9999 999 999' },
            { code: 'KH', phone: '+855', mask: '999 999 999' },
            { code: 'KI', phone: '+686', mask: '99999999' },
            { code: 'KM', phone: '+269', mask: '999 99 99' },
            { code: 'KN', phone: '+1 (869)', mask: '999-9999' },
            { code: 'KP', phone: '+850', mask: '9999 999 9999' },
            { code: 'KR', phone: '+82', mask: '999-9999-9999' },
            { code: 'KW', phone: '+965', mask: '999 99999' },
            { code: 'KY', phone: '+1 (345)', mask: '999-9999' },
            { code: 'KZ', phone: '+7', mask: '9 (999) 999 9999' },
            { code: 'LA', phone: '+856', mask: '999 99 999 999' },
            { code: 'LB', phone: '+961', mask: '99 999 999' },
            { code: 'LC', phone: '+1 (758)', mask: '999-9999' },
            { code: 'LI', phone: '+423', mask: '999 999 999' },
            { code: 'LK', phone: '+94', mask: '999 999 9999' },
            { code: 'LR', phone: '+231', mask: '999 999 9999' },
            { code: 'LS', phone: '+266', mask: '9999 9999' },
            { code: 'LT', phone: '+370', mask: '(9-999) 99999' },
            { code: 'LU', phone: '+352', mask: '999 999 999' },
            { code: 'LV', phone: '+371', mask: '99 999 999' },
            { code: 'LY', phone: '+218', mask: '999-9999999' },
            { code: 'MA', phone: '+212', mask: '9999-999999' },
            { code: 'MC', phone: '+377', mask: '99 99 99 99 99' },
            { code: 'MD', phone: '+373', mask: '9999 99 999' },
            { code: 'ME', phone: '+382', mask: '999 999 999' },
            { code: 'MF', phone: '+590', mask: '9999 99 99 99' },
            { code: 'MG', phone: '+261', mask: '999 99 999 99' },
            { code: 'MH', phone: '+692', mask: '999-9999' },
            { code: 'MK', phone: '+389', mask: '999 999 999' },
            { code: 'ML', phone: '+223', mask: '99 99 99 99' },
            { code: 'MM', phone: '+95', mask: '99 999 9999' },
            { code: 'MN', phone: '+976', mask: '9999 9999' },
            { code: 'MO', phone: '+853', mask: '9999 9999' },
            { code: 'MP', phone: '+1 (670)', mask: '999-9999' },
            { code: 'MR', phone: '+222', mask: '99 99 99 99' },
            { code: 'MS', phone: '+1 (664)', mask: '999-9999' },
            { code: 'MT', phone: '+356', mask: '9999 9999' },
            { code: 'MU', phone: '+230', mask: '9999 9999' },
            { code: 'MV', phone: '+960', mask: '999-9999' },
            { code: 'MW', phone: '+265', mask: '9999 99 99 99' },
            { code: 'MX', phone: '+52', mask: '999 999 999 9999' },
            { code: 'MY', phone: '+60', mask: '999-999 9999' },
            { code: 'MZ', phone: '+258', mask: '99 999 9999' },
            { code: 'NA', phone: '+264', mask: '999 999 9999' },
            { code: 'NC', phone: '+687', mask: '99 99 99' },
            { code: 'NE', phone: '+227', mask: '99 99 99 99' },
            { code: 'NG', phone: '+234', mask: '9999 999 9999' },
            { code: 'NI', phone: '+505', mask: '9999 9999' },
            { code: 'NL', phone: '+31', mask: '99 99999999' },
            { code: 'NO', phone: '+47', mask: '999 99 999' },
            { code: 'NP', phone: '+977', mask: '999-9999999' },
            { code: 'NR', phone: '+674', mask: '999 9999' },
            { code: 'NU', phone: '+683', mask: '999 9999' },
            { code: 'NZ', phone: '+64', mask: '999 999 9999' },
            { code: 'OM', phone: '+968', mask: '9999 9999' },
            { code: 'PA', phone: '+507', mask: '9999-9999' },
            { code: 'PE', phone: '+51', mask: '999 999 999' },
            { code: 'PF', phone: '+689', mask: '99 99 99 99' },
            { code: 'PG', phone: '+675', mask: '9999 9999' },
            { code: 'PH', phone: '+63', mask: '9999 999 9999' },
            { code: 'PK', phone: '+92', mask: '9999 9999999' },
            { code: 'PL', phone: '+48', mask: '999 999 999' },
            { code: 'PM', phone: '+508', mask: '999 99 99' },
            { code: 'PN', phone: '+64', mask: '99 999999' },
            { code: 'PR', phone: '+1 (787)', mask: '999-9999' },
            { code: 'PS', phone: '+970', mask: '9999 999 999' },
            { code: 'PT', phone: '+351', mask: '999 999 999' },
            { code: 'PW', phone: '+680', mask: '999 9999' },
            { code: 'PY', phone: '+595', mask: '9999 999999' },
            { code: 'QA', phone: '+974', mask: '9999 9999' },
            { code: 'RE', phone: '+262', mask: '9999 99 99 99' },
            { code: 'RO', phone: '+40', mask: '9999 999 999' },
            { code: 'RS', phone: '+381', mask: '999 9999999' },
            { code: 'RU', phone: '+7', mask: '9 (999) 999-99' },
            { code: 'RW', phone: '+250', mask: '9999 999 999' },
            { code: 'SA', phone: '+966', mask: '999 999 9999' },
            { code: 'SB', phone: '+677', mask: '99 99999' },
            { code: 'SC', phone: '+248', mask: '9 999 999' },
            { code: 'SD', phone: '+249', mask: '999 999 9999' },
            { code: 'SE', phone: '+46', mask: '999-999 99 99' },
            { code: 'SG', phone: '+65', mask: '9999 9999' },
            { code: 'SH', phone: '+290', mask: '99999' },
            { code: 'SI', phone: '+386', mask: '999 999 999' },
            { code: 'SJ', phone: '+47', mask: '999 99 999' },
            { code: 'SK', phone: '+421', mask: '9999 999 999' },
            { code: 'SL', phone: '+232', mask: '(999) 999999' },
            { code: 'SM', phone: '+378', mask: '99 99 99 99' },
            { code: 'SN', phone: '+221', mask: '99 999 99 99' },
            { code: 'SO', phone: '+252', mask: '9 9999999' },
            { code: 'SR', phone: '+597', mask: '999-9999' },
            { code: 'SS', phone: '+211', mask: '9999 999 999' },
            { code: 'ST', phone: '+239', mask: '999 9999' },
            { code: 'SV', phone: '+503', mask: '9999 9999' },
            { code: 'SX', phone: '+1 (721)', mask: '999-9999' },
            { code: 'SY', phone: '+963', mask: '9999 999 999' },
            { code: 'SZ', phone: '+268', mask: '9999 9999' },
            { code: 'TC', phone: '+1 (649)', mask: '999-9999' },
            { code: 'TD', phone: '+235', mask: '99 99 99 99' },
            { code: 'TG', phone: '+228', mask: '99 99 99 99' },
            { code: 'TH', phone: '+66', mask: '999 999 9999' },
            { code: 'TJ', phone: '+992', mask: '999 99 9999' },
            { code: 'TK', phone: '+690', mask: '9999' },
            { code: 'TL', phone: '+670', mask: '9999 9999' },
            { code: 'TM', phone: '+993', mask: '9 99 999999' },
            { code: 'TN', phone: '+216', mask: '99 999 999' },
            { code: 'TO', phone: '+676', mask: '999 9999' },
            { code: 'TR', phone: '+90', mask: '9999 999 99 99' },
            { code: 'TT', phone: '+1 (868)', mask: '999-9999' },
            { code: 'TV', phone: '+688', mask: '999999' },
            { code: 'TW', phone: '+886', mask: '9999 999 999' },
            { code: 'TZ', phone: '+255', mask: '9999 999 999' },
            { code: 'UA', phone: '+380', mask: '999 999 9999' },
            { code: 'UG', phone: '+256', mask: '9999 999999' },
            { code: 'US', phone: '+1', mask: '(999) 999-9999' },
            { code: 'UY', phone: '+598', mask: '999 999 999' },
            { code: 'UZ', phone: '+998', mask: '9 99 999 99 99' },
            { code: 'VA', phone: '+39', mask: '999 999 9999' },
            { code: 'VC', phone: '+1 (784)', mask: '999-9999' },
            { code: 'VE', phone: '+58', mask: '9999-9999999' },
            { code: 'VG', phone: '+1 (284)', mask: '999-9999' },
            { code: 'VI', phone: '+1 (340)', mask: '999-9999' },
            { code: 'VN', phone: '+84', mask: '999 999 99 99' },
            { code: 'VU', phone: '+678', mask: '999 9999' },
            { code: 'WF', phone: '+681', mask: '99 99 99' },
            { code: 'WS', phone: '+685', mask: '99 99999' },
            { code: 'XK', phone: '+383', mask: '999 999 999' },
            { code: 'YE', phone: '+967', mask: '9999 999 999' },
            { code: 'YT', phone: '+262', mask: '9999 99 99 99' },
            { code: 'ZA', phone: '+27', mask: '999 999 9999' },
            { code: 'ZM', phone: '+260', mask: '999 9999999' },
            { code: 'ZW', phone: '+263', mask: '999 999 9999' },
        ];
    }
    ngOnInit() {
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
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$"), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10)]],
        });
        // this.countryCallCode="+1" ;
        // this.countryCode = "+1" ;
        // console.log(this.loginForm) ; 
        //   this.loginForm.get('country').valueChanges
        //   .subscribe(country => console
        //       .log('this.loginForm.get("country").valueChanges', country));
        //   this.loginForm.valueChanges
        //       .subscribe(country => console
        //           .log('this.countryFormControl.valueChanges', country));
    }
    _keyPress(event) {
        // console.log("key",event);
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    onCountrySelected($event) {
        console.log($event.callingCode);
        this.countryCode = $event.callingCode;
    }
    inputChanged(val) {
        console.log(val);
        this.fieldLength = val.length;
    }
    goToScanner() {
        localStorage.removeItem('phonenumFromLogin');
        this.router.navigateByUrl('/sessions/scanner');
    }
    goToWalkinCustomer() {
        this.showWalkinCustomerLink = false;
        this.router.navigate(['/sessions/walkInCustomer/']);
    }
    goToExitingCustomer() {
        this.showWalkinCustomerLink = true;
        this.router.navigate(['/sessions/login/']);
    }
    goToAppointment() {
        this.showWalkinCustomerLink = false;
        this.router.navigate(['/sessions/appointment-id/']);
    }
    goTobranchlogout() {
        this.router.navigate(['/sessions/branch-logout/']);
    }
    goToOtp(phone) {
        if (phone.phoneNumber == "") {
            console.log("in if");
            this.snack.open('Enter Mobile Number to Login', 'OK', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
            });
        }
        else {
            console.log("Phonenumber for OTP", phone, phone.phoneNumber);
            this.customerPhoneNum = phone.phoneNumber;
            localStorage.setItem("phonenumFromLogin", this.customerPhoneNum);
            this.oTpModel.source = 'customer';
            this.oTpModel.source_key = 'mobile';
            this.oTpModel.source_value = phone.phoneNumber;
            this.oTpModel.isMobileLogin = false;
            console.log("model", this.oTpModel);
            this.cntdis = true;
            this.apiService.getOtp(this.oTpModel).subscribe(otpResp => {
                var _a, _b;
                console.log("cust resp", otpResp);
                if (((_b = (_a = otpResp === null || otpResp === void 0 ? void 0 : otpResp.data) === null || _a === void 0 ? void 0 : _a.otpVal) === null || _b === void 0 ? void 0 : _b.userId) == "New Customer") {
                    console.log("Not a valid number");
                    this.cntdis = false;
                    this.snack.open("No customer exists with this mobile number.", "", {
                        duration: 4000,
                        verticalPosition: 'top',
                        horizontalPosition: 'right'
                    });
                }
                else if ((otpResp === null || otpResp === void 0 ? void 0 : otpResp.message) == "CustomerId is not approved.") {
                    this.cntdis = false;
                    this.snack.open("Customer Id is not Approved.", "", {
                        duration: 4000,
                        verticalPosition: 'top',
                        horizontalPosition: 'right'
                    });
                }
                else {
                    this.cntdis = true;
                    console.log("Response Success", otpResp);
                    this.otpResp = otpResp.data;
                    this.custStatus = this.otpResp.otpVal.userId;
                    localStorage.setItem("customerValidation", this.custStatus);
                    /* Added validation for un-registered mobile nummber is entered */
                    // if (this.otpResp.otpVal && this.otpResp.otpVal.userId && this.otpResp.otpVal.userId.localeCompare("New Customer") == 0) {
                    //   this.snack.open('User Phone Number is not Registered', 'OK', {
                    //     duration: 4000,
                    //     verticalPosition: 'top',
                    //     horizontalPosition: 'right'
                    //   });
                    // } 
                    // else {
                    this.fpCaptureService.userDataService(otpResp);
                    this.router.navigateByUrl('/sessions/otp');
                    // }
                }
            }, (error) => {
                console.log(error.status);
                this.cntdis = false;
                this.errorStatus = error.status;
                if (this.errorStatus == 200) {
                    // this.router.navigateByUrl('/sessions/otp');
                }
            });
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_7__["ShowMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_0__["FingerPrintCaptureService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], inputs: { countries: "countries", required: "required" }, decls: 52, vars: 5, consts: [[1, "login_page"], [1, "card_container"], ["fxFlex", "50%", 1, "left_container"], ["mat-icon-button", "", 1, "toggle_menu_icon", 3, "matMenuTriggerFor"], ["src", "assets/images/menubars.png", "alt", "", 2, "margin-top", "-81px"], ["accountMenu", "matMenu"], ["src", "assets/images/menuclose.png", "alt", "", 1, "closeicon"], ["mat-menu-item", "", 1, "branchlogout", 3, "click"], ["src", "assets/images/branchlogout.png", "alt", "", 1, "logoutimg"], [1, "logouttext"], [1, "versiontext"], [1, "border-text"], [1, "card-title"], ["novalidate", "", 3, "formGroup"], [1, "number"], [1, "phoneCard"], ["matPrefix", ""], ["fxLayout", "row", "fxLayoutGap", "10px"], [1, "currency-flag", "currency-flag-inr"], [1, "country"], [1, "vertical-line"], ["matInput", "", "type", "text", "formControlName", "phoneNumber", "onlyNumber", "", "maxLength", "10", 1, "no-outline", 3, "keypress"], ["fxLayout", "row"], [1, "login_btn", 3, "ngClass", "disabled", "click"], ["visible", "true"], [1, "clickHereText", 2, "flex-wrap", "wrap"], ["mat-raised-button", "", "type", "button", 1, "Nextbtn", 3, "click"], ["src", "assets/images/Walkk.png", "alt", "account", 1, "customerIcon"], ["fxlayout", "row", 1, "FontSize"], ["src", "assets/images/QR_code.png", "alt", "account", 1, "scanner"], [1, "FontSize"], ["src", "assets/images/Appointment_ID.png", "alt", "Appointment ID", 1, "appointmentIcon"], ["fxFlex", "50%", 1, "right_container"], ["src", "assets/images/login1.png", 1, "img1"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "mat-menu", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_9_listener() { return ctx.goTobranchlogout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "KIOSK-Branch Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Ver 1.0");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "form", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "mat-label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "mat-card", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "IND");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("keypress", function LoginComponent_Template_input_keypress_30_listener($event) { return ctx._keyPress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_32_listener() { return ctx.goToOtp(ctx.loginForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, " Continue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "legend", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Already having a");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_38_listener() { return ctx.goToWalkinCustomer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](39, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "b", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, "Walk in Customer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_42_listener() { return ctx.goToScanner(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](43, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "b", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, "QR code");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_46_listener() { return ctx.goToAppointment(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](47, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "b", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "Appointment ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](51, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("matMenuTriggerFor", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.bankName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", ctx.loginForm.invalid ? "beforeContinue" : "afterContinue")("disabled", ctx.loginForm.invalid || ctx.cntdis);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenu"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_13__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__["MatMenuItem"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_14__["MatPrefix"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _otp_onlynumber_directive__WEBPACK_IMPORTED_MODULE_16__["OnlynumberDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_17__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_18__["DefaultClassDirective"]], styles: [".login_page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n\n.login_page[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50%;\n  height: 100%;\n  background-color: #3858cb0d;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 530px;\n  min-height: 500px;\n  border-radius: 30px 0 0 30px;\n  padding: 0;\n  margin: 2rem auto;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%] {\n  padding: 3rem;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   .border-text[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  text-align: left;\n  font-family: \"Phosphate\";\n  font-size: 18px;\n  color: #004c97;\n  font: normal normal normal 25px/31px Phosphate;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 20px;\n  font-weight: bold;\n  padding: 30px 0px;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  color: #7e84a3;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .phoneCard[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px;\n  height: 45px;\n  margin: 0.75rem 0;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .phoneCard[_ngcontent-%COMP%]   .vertical-line[_ngcontent-%COMP%] {\n  width: 2px;\n  background-color: #2c2c2c1f;\n  height: 50px;\n  margin-top: -17px;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .phoneCard[_ngcontent-%COMP%]   .no-outline[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  height: 20px;\n  width: 80%;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .login_btn[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 30px;\n  height: 35px;\n  margin: 1.7rem 0;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .login_btn.afterContinue[_ngcontent-%COMP%] {\n  border-color: transparent;\n  color: #fff;\n  border: 1px;\n  background: transparent linear-gradient(90deg, #051a2d 0%, #004c97 100%);\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .clickHereText[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-around;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .clickHereText[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-right: 10px;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .clickHereText[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 8px;\n  text-align: center;\n  padding: 0 4px;\n  width: 100%;\n  line-height: 1.4;\n  white-space: break-spaces;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .right_container[_ngcontent-%COMP%]   .img1[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n  .clickHereText button .mat-button-wrapper {\n  width: 80%;\n  display: flex;\n}\n\n.toggle_menu_icon[_ngcontent-%COMP%] {\n  color: #004C97;\n  width: 78px;\n  -webkit-margin-start: -62px;\n          margin-inline-start: -62px;\n}\n\n  .egret-navy .mat-menu-panel {\n  margin-left: 15px;\n  margin-top: -87px;\n  border-radius: 30px 0 30px !important;\n  width: 240px;\n  height: 156px;\n}\n\n.closeicon[_ngcontent-%COMP%] {\n  margin-left: 19px;\n  margin-top: 10px;\n  height: 20px;\n}\n\n.branchlogout[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  background-color: #004C9717;\n  margin-bottom: 10px;\n}\n\n.logouttext[_ngcontent-%COMP%] {\n  font-size: 16px;\n  margin-left: 20px;\n  color: #004C97;\n}\n\n.logoutimg[_ngcontent-%COMP%] {\n  height: 19px;\n}\n\n.versiontext[_ngcontent-%COMP%] {\n  color: #C6C6C6;\n  margin-left: 20px;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0FBQ3BCOztBQU5BO0VBT0ksV0FBVztFQUNYLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFVBQVU7RUFDVixZQUFZO0VBQ1osMkJBQTJCO0FBRy9COztBQWhCQTtFQWdCSSxVQUFVO0VBQ1YsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQiw0QkFBNEI7RUFDNUIsVUFBVTtFQUNWLGlCQUFpQjtBQUlyQjs7QUF6QkE7RUF1Qk0sYUFBYTtBQU1uQjs7QUE3QkE7RUF5QlEsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLGNBQWM7RUFDZCw4Q0FBOEM7QUFRdEQ7O0FBdENBO0VBaUNRLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQVN6Qjs7QUE3Q0E7RUF3Q1UsY0FBYztBQVN4Qjs7QUFqREE7RUEyQ1UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osaUJBQWlCO0FBVTNCOztBQXhEQTtFQWdEWSxVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLFlBQVk7RUFDWixpQkFBaUI7QUFZN0I7O0FBL0RBO0VBc0RZLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7QUFhdEI7O0FBdEVBO0VBNkRVLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGdCQUFnQjtBQWExQjs7QUE3RUE7RUFrRVkseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxXQUFXO0VBQ1gsd0VBQ2tEO0FBYzlEOztBQXBGQTtFQTBFVSxlQUFlO0FBY3pCOztBQXhGQTtFQTRFWSxlQUFlO0FBZ0IzQjs7QUE1RkE7RUFnRlUsV0FBVztFQUNYLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsNkJBQTZCO0FBZ0J2Qzs7QUFuR0E7RUFzRlksWUFBWTtFQUNaLFVBQVU7RUFDVixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixrQkFBa0I7QUFpQjlCOztBQTVHQTtFQTZGYyxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtBQW1CckM7O0FBeEhBO0VBNkdRLFlBQVk7RUFDWixXQUFXO0FBZW5COztBQVRBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7QUFZZjs7QUFWQTtFQUNFLGNBQWM7RUFDZCxXQUFXO0VBRVosMkJBQTBCO1VBQTFCLDBCQUEwQjtBQVkzQjs7QUFWQTtFQUNFLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIscUNBQXFDO0VBQ3JDLFlBQVk7RUFDWixhQUFhO0FBYWY7O0FBWEE7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFlBQVk7QUFjZDs7QUFaQTtFQUNFLGdCQUFnQjtFQUNoQiwyQkFBMEI7RUFDMUIsbUJBQW1CO0FBZXJCOztBQWJBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixjQUFjO0FBZ0JoQjs7QUFkQTtFQUNFLFlBQVk7QUFpQmQ7O0FBZkE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGVBQWU7QUFrQmpCIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2luX3BhZ2Uge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzODU4Y2IwZDtcclxuICB9XHJcbiAgbWF0LWNhcmQuY2FyZF9jb250YWluZXIge1xyXG4gICAgd2lkdGg6IDcwJTtcclxuICAgIGhlaWdodDogNTMwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDMwcHggMCAwIDMwcHg7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgbWFyZ2luOiAycmVtIGF1dG87XHJcbiAgICAubGVmdF9jb250YWluZXIge1xyXG4gICAgICBwYWRkaW5nOiAzcmVtO1xyXG4gICAgICAuYm9yZGVyLXRleHQge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIycHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQaG9zcGhhdGVcIjtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgY29sb3I6ICMwMDRjOTc7XHJcbiAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCBub3JtYWwgMjVweC8zMXB4IFBob3NwaGF0ZTtcclxuICAgICAgfVxyXG4gICAgICAuY2FyZC10aXRsZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGZvcm0ge1xyXG4gICAgICAgIC5udW1iZXIge1xyXG4gICAgICAgICAgY29sb3I6ICM3ZTg0YTM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5waG9uZUNhcmQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDAuNzVyZW0gMDtcclxuICAgICAgICAgIC52ZXJ0aWNhbC1saW5lIHtcclxuICAgICAgICAgICAgd2lkdGg6IDJweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJjMmMyYzFmO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xN3B4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLm5vLW91dGxpbmUge1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvZ2luX2J0biB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICBtYXJnaW46IDEuN3JlbSAwO1xyXG4gICAgICAgICAgJi5hZnRlckNvbnRpbnVlIHtcclxuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudFxyXG4gICAgICAgICAgICAgIGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzA1MWEyZCAwJSwgIzAwNGM5NyAxMDAlKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZmllbGRzZXQge1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgICAgICAgbGVnZW5kIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuY2xpY2tIZXJlVGV4dCB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBiIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDhweDtcclxuICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgcGFkZGluZzogMCA0cHg7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJpZ2h0X2NvbnRhaW5lciB7XHJcbiAgICAgIC5pbWcxIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2xpY2tIZXJlVGV4dCBidXR0b24gLm1hdC1idXR0b24td3JhcHBlciB7XHJcbiAgd2lkdGg6IDgwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi50b2dnbGVfbWVudV9pY29uIHtcclxuICBjb2xvcjogIzAwNEM5NztcclxuICB3aWR0aDogNzhweDtcclxuICAvLyBoZWlnaHQ6IDc3cHg7XHJcbiBtYXJnaW4taW5saW5lLXN0YXJ0OiAtNjJweDtcclxufVxyXG46Om5nLWRlZXAgLmVncmV0LW5hdnkgLm1hdC1tZW51LXBhbmVsIHtcclxuICBtYXJnaW4tbGVmdDogMTVweDtcclxuICBtYXJnaW4tdG9wOiAtODdweDtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4IDAgMzBweCAhaW1wb3J0YW50O1xyXG4gIHdpZHRoOiAyNDBweDtcclxuICBoZWlnaHQ6IDE1NnB4O1xyXG59XHJcbi5jbG9zZWljb24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAxOXB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcbi5icmFuY2hsb2dvdXQge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjojMDA0Qzk3MTc7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4ubG9nb3V0dGV4dCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGNvbG9yOiAjMDA0Qzk3O1xyXG59XHJcbi5sb2dvdXRpbWcge1xyXG4gIGhlaWdodDogMTlweDtcclxufVxyXG4udmVyc2lvbnRleHQge1xyXG4gIGNvbG9yOiAjQzZDNkM2O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_4__["DialogService"] }, { type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"] }, { type: app_shared_services_showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_7__["ShowMessageService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: _shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_0__["FingerPrintCaptureService"] }]; }, { countries: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "PjJD":
/*!*************************************************************************!*\
  !*** ./src/app/views/sessions/branch-logout/branch-logout.component.ts ***!
  \*************************************************************************/
/*! exports provided: BranchLogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchLogoutComponent", function() { return BranchLogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/api.service */ "nm5K");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-otp-input */ "9OaD");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");





















const _c0 = ["otpvalue"];
function BranchLogoutComponent_div_32_mat_form_field_10_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", data_r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r6, " ");
} }
function BranchLogoutComponent_div_32_mat_form_field_10_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BranchLogoutComponent_div_32_mat_form_field_10_mat_option_4_Template, 2, 2, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BranchLogoutComponent_div_32_mat_form_field_10_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.getOtp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Get OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.emailValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r3.otpdis);
} }
function BranchLogoutComponent_div_32_mat_form_field_11_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", data_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r10, " ");
} }
function BranchLogoutComponent_div_32_mat_form_field_11_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BranchLogoutComponent_div_32_mat_form_field_11_mat_option_4_Template, 2, 2, "mat-option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BranchLogoutComponent_div_32_mat_form_field_11_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.getOtp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Get OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.mobileNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r4.otpdis);
} }
function BranchLogoutComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "OTP Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-radio-group", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-radio-button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BranchLogoutComponent_div_32_Template_mat_radio_button_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.onChangeValue($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "E-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-radio-button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BranchLogoutComponent_div_32_Template_mat_radio_button_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.onChangeValue($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BranchLogoutComponent_div_32_mat_form_field_10_Template, 8, 2, "mat-form-field", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BranchLogoutComponent_div_32_mat_form_field_11_Template, 8, 2, "mat-form-field", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r0.mobilechk);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.optionType == 2 && ctx_r0.radioType == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.optionType == 2 && ctx_r0.radioType == 4);
} }
function BranchLogoutComponent_div_33_ng_otp_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-otp-input", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onInputChange", function BranchLogoutComponent_div_33_ng_otp_input_3_Template_ng_otp_input_onInputChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.onOtpChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r16.ngOtpErr ? "error" : "")("config", ctx_r16.ngOtpConfig1);
} }
function BranchLogoutComponent_div_33_ng_otp_input_4_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-otp-input", 42, 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onInputChange", function BranchLogoutComponent_div_33_ng_otp_input_4_Template_ng_otp_input_onInputChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.onOtpChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r17.ngOtpErr ? "error" : "")("config", ctx_r17.ngOtpConfig2);
} }
function BranchLogoutComponent_div_33_p_5_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BranchLogoutComponent_div_33_p_5_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r26); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r25.resendis(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Resend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r18.otpResp && ctx_r18.cli < 3 ? "resend1" : "resend2");
} }
function BranchLogoutComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BranchLogoutComponent_div_33_ng_otp_input_3_Template, 2, 2, "ng-otp-input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BranchLogoutComponent_div_33_ng_otp_input_4_Template, 2, 2, "ng-otp-input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BranchLogoutComponent_div_33_p_5_Template, 2, 1, "p", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Enter ", ctx_r1.optionType == 1 ? "Logout Code" : "OTP", " to verify");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.optionType == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.optionType == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.optionType == 2 && ctx_r1.radioType);
} }
function BranchLogoutComponent_div_34_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BranchLogoutComponent_div_34_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r29.gotoLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r27.ngOtpErr || !ctx_r27.otpResp || ctx_r27.otpVal.length < ctx_r27.otpValLen ? true : false);
} }
function BranchLogoutComponent_div_34_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BranchLogoutComponent_div_34_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.gotoLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r28.ngOtpErr || ctx_r28.otpVal.length < ctx_r28.otpValLen ? true : false);
} }
function BranchLogoutComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BranchLogoutComponent_div_34_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r33.gotoBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Back");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BranchLogoutComponent_div_34_button_3_Template, 2, 1, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BranchLogoutComponent_div_34_button_4_Template, 2, 1, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.optionType == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.optionType == 1);
} }
class BranchLogoutComponent {
    constructor(formBuilder, ApiService, snack, router) {
        this.formBuilder = formBuilder;
        this.ApiService = ApiService;
        this.snack = snack;
        this.router = router;
        this.otpVal = "";
        this.otpValLen = 6;
        this.kioskCode = [];
        this.emailValue = [];
        this.mobileNo = [];
        this.ngOtpErr = false;
        this.checked = false;
        this.mobilechk = false;
        this.kisoksystemCode = false;
        this.otpfield = false;
        this.otpdis = false;
        this.enablelogin = true;
        this.ngOtpConfig1 = {
            length: 6,
            allowNumbersOnly: false,
            isPasswordInput: true,
        };
        this.ngOtpConfig2 = {
            length: 6,
            allowNumbersOnly: true,
            isPasswordInput: true,
        };
        this.cli = 0;
    }
    ngOnInit() {
        this.loginBranchCode = localStorage.getItem("LOGINBRANCHCODE");
        console.log(this.loginBranchCode);
        this.fetchKioskCode();
        this.kisoksystemCode = false;
        this.radioType = 3;
        this.branchLogout = this.formBuilder.group({
            branchCode: [""],
            systemCode: [""],
            emailId: [""],
            mobileNo: [""],
        });
    }
    fetchKioskCode() {
        this.ApiService.fetchKioskSystemDetails().subscribe((data) => {
            this.systemDetails = data;
            console.log(data);
            this.kioskCode = data.map((i) => i.kioskSystemCode);
            this.branchCode = data.find((i) => i.kioskSystemCode === this.loginBranchCode);
            console.log(this.branchCode);
        });
    }
    changeSystemCode(event) {
        var _a;
        this.kisoksystemCode = true;
        console.log(this.systemDetails);
        this.ApiService.fetchMobileOrEmail(event.value).subscribe((data) => {
            console.log(data);
            this.emailValue = data && data.map((i) => i === null || i === void 0 ? void 0 : i.emailId);
            this.mobileNo = data && data.map((i) => i === null || i === void 0 ? void 0 : i.mobileNumber);
            this.branchLogout.get("emailId").enable();
            this.branchLogout.get("mobileNo").enable();
        });
        const branchCodeObj = this.systemDetails.find((i) => i.kioskSystemCode === event.value);
        this.branchLogout.get("branchCode").patchValue((_a = this.branchCode) === null || _a === void 0 ? void 0 : _a.branchCode);
    }
    getOtp() {
        if (this.radioType == 3 && this.branchLogout.get("emailId").value) {
            this.branchLogout.get("emailId").disable();
            this.otpfield = true;
            this.ApiService.generateOtp({
                source: "test",
                source_key: "email",
                source_value: this.branchLogout.get("emailId").value,
                kioskSystemCode: this.branchLogout.get("systemCode").value,
            }).subscribe((resp) => {
                var _a, _b;
                console.log(resp);
                this.otpResp = (_b = (_a = resp === null || resp === void 0 ? void 0 : resp.data) === null || _a === void 0 ? void 0 : _a.otpVal) === null || _b === void 0 ? void 0 : _b.token;
                this.snack.open("OTP sent!", "OK", {
                    duration: 3000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right',
                });
                this.branchLogout.get("emailId").enable();
                this.otpdis = true;
            });
        }
        if (this.radioType == 4 && this.branchLogout.get("mobileNo").value) {
            this.branchLogout.get("mobileNo").disable();
            this.otpfield = true;
            this.ApiService.generateOtp({
                source: "test",
                source_key: "mobile",
                source_value: this.branchLogout.get("mobileNo").value,
            }).subscribe((resp) => {
                var _a, _b;
                console.log(resp);
                this.otpResp = (_b = (_a = resp === null || resp === void 0 ? void 0 : resp.data) === null || _a === void 0 ? void 0 : _a.otpVal) === null || _b === void 0 ? void 0 : _b.token;
                this.branchLogout.get("mobileNo").enable();
                this.snack.open("OTP sent!", "OK", {
                    duration: 3000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right',
                });
                this.otpdis = true;
            });
        }
    }
    getPasscode() {
        // this.ApiService.generateOtp().subscribe((data) =>
        //  {
        //   this.systemDetails = data;
        // });
    }
    onOtpChange(value) {
        this.otpVal = value;
        if (this.otpResp && this.otpVal.length == this.otpValLen) {
            if (this.otpVal != this.otpResp) {
                this.ngOtpErr = true;
                this.snack.open("Invalid OTP!", "OK", {
                    duration: 3000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right',
                    panelClass: ["error-msg"],
                });
            }
            else {
                this.ngOtpErr = false;
            }
        }
    }
    gotoLogin() {
        let payload;
        if (this.optionType == 1) {
            payload = {
                loginType: "passcode",
                branchCode: this.branchLogout.get("branchCode").value,
                kioskSystemCode: this.branchLogout.get("systemCode").value,
                passcode: this.otpVal,
            };
        }
        else {
            if (this.radioType == 3) {
                payload = {
                    loginType: "otp",
                    branchCode: this.branchLogout.get("branchCode").value,
                    kioskSystemCode: this.branchLogout.get("systemCode").value,
                    otp: this.otpVal,
                    emailId: this.branchLogout.get("emailId").value,
                    sourceKey: "email",
                    sourceValue: this.branchLogout.get("emailId").value,
                };
            }
            else {
                payload = {
                    loginType: "otp",
                    branchCode: this.branchLogout.get("branchCode").value,
                    kioskSystemCode: this.branchLogout.get("systemCode").value,
                    otp: this.otpVal,
                    mobileNumber: this.branchLogout.get("mobileNo").value,
                    sourceKey: "mobile",
                    sourceValue: this.branchLogout.get("mobileNo").value,
                };
            }
        }
        this.ApiService.goToLogin(payload).subscribe((resp) => {
            console.log(resp);
            this.router.navigateByUrl("/sessions/branch-login");
        }, (error) => {
            console.log(error.status);
            this.errorStatus = error.status;
            if (this.errorStatus == 500) {
                console.log(error.status);
                //  this.errorStatus = error.status;
                this.snack.open(`Incorrect Logout code. Please try again.`, 'OK', {
                    duration: 4000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'
                });
            }
        });
    }
    gotoBack() {
        this.router.navigateByUrl("/sessions/login");
    }
    onChangeOption(event) {
        console.log(event);
        this.optionType = event.value;
        // this.radioType = "";
        if (this.optionType == 2 && this.branchLogout.value.mobileNo != "") {
            this.radioType = 3;
            this.branchLogout.controls.mobileNo.setValue("");
            this.mobilechk = false;
            this.checked = true;
            this.otpfield = false;
            this.otpdis = false;
            console.log(this.branchLogout.value.mobileNo);
        }
        else if (this.optionType == 2 && this.branchLogout.value.emailId != "") {
            this.radioType = 3;
            this.branchLogout.controls.emailId.setValue("");
            this.mobilechk = false;
            this.checked = true;
            this.otpfield = false;
            this.otpdis = false;
        }
        else {
            this.radioType = 3;
            this.checked = true;
            this.mobilechk = false;
            console.log();
        }
    }
    onChangeValue(event) {
        var _a;
        if (event.value == 3 && this.branchLogout.value.mobileNo != "") {
            this.radioType = event.value;
            this.branchLogout.controls.mobileNo.setValue("");
            this.otpfield = false;
            this.otpdis = false;
        }
        else if (event.value == 4 && this.branchLogout.value.emailId != "") {
            this.radioType = event.value;
            this.branchLogout.controls.emailId.setValue("");
            this.otpfield = false;
            this.otpdis = false;
        }
        else {
            this.radioType = event.value;
            console.log(event.value);
        }
        (_a = this.newotp) === null || _a === void 0 ? void 0 : _a.otpForm.reset();
    }
    resendis() {
        if (this.otpResp !== undefined) {
            this.cli++;
            console.log("otpresp is not null", this.otpResp);
            if (this.cli > 3) {
                console.log("for disable_is working", this.cli);
            }
            else {
                this.getOtp();
                console.log("for disable");
            }
        }
        else {
            //this.cli = 0;
            console.log("otprsep is null");
        }
    }
}
BranchLogoutComponent.ɵfac = function BranchLogoutComponent_Factory(t) { return new (t || BranchLogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
BranchLogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BranchLogoutComponent, selectors: [["app-branch-logout"]], viewQuery: function BranchLogoutComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.newotp = _t.first);
    } }, decls: 35, vars: 8, consts: [[1, "branch_login_page"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], [1, "logo"], [1, "welcome"], ["fxLayout", "column", 3, "formGroup"], ["fxLayoutGap", "4%", "fxLayout", "row", "fxLayoutAlign", "center", 1, "form_container"], ["appearance", "outline", "fxFlex", "50%", 2, "border-radius", "50px"], [1, "totalAmount", "fieldtext"], ["name", "systemCode", "formControlName", "systemCode", 1, "full_width_select", 3, "selectionChange"], [3, "value"], [1, "totalAmount", "fieldtext", 2, "color", "#004C97"], ["formControlName", "branchCode", "matInput", "", "readonly", ""], ["fxLayoutGap", "4%", "fxLayout", "column", "fxLayoutAlign", "center", 1, "form_container"], [1, "field_heading"], ["fxLayout", "row", "fxLayoutGap", "4%", "name", "fontStyle", "aria-label", "Font Style"], ["value", "1", "fxFlex", "50%", 1, "button-toggle", 2, "border-radius", "12px", 3, "disabled", "change"], ["fxFlex", "", 1, "passfield"], [1, "dot"], ["fxFlex", "", "fxLayoutAlign", "center center", 1, "text"], ["value", "2", "fxFlex", "50%", 1, "button-toggle", 2, "border-radius", "12px", 3, "disabled", "change"], ["fxFlex", "", 1, "otpfield"], ["fxFlex", "", "fxLayoutAlign", "center center", 1, "otptext"], ["class", "form_container option_row", "fxLayout", "row", "fxLayoutGap", "4%", "fxLayoutAlign", "center", 4, "ngIf"], ["class", "ng_otp_field", "fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "row", "fxLayoutGap", "4%", "fxLayoutAlign", "center", "class", "btn_wrapper", 4, "ngIf"], ["fxLayout", "row", "fxLayoutGap", "4%", "fxLayoutAlign", "center", 1, "form_container", "option_row"], ["fxFlex", "50%"], [1, "field_heading_text"], ["fxLayout", "row"], ["value", "3", "fxFlex", "50%", 3, "checked", "change"], ["value", "4", "fxFlex", "50%", 3, "checked", "change"], ["appearance", "outline", "class", "otp_select_field", 4, "ngIf"], ["appearance", "outline", 1, "otp_select_field"], ["name", "emailId", "formControlName", "emailId", 1, "arrow-design"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "Nextbtn", 3, "disabled", "click"], [1, "submitBtn"], ["name", "mobileNo", "formControlName", "mobileNo"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "ng_otp_field"], [1, "verifycode"], [3, "ngClass", "config", "onInputChange", 4, "ngIf"], [3, "ngClass", "click", 4, "ngIf"], [3, "ngClass", "config", "onInputChange"], ["otpvalue", ""], [3, "ngClass", "click"], ["fxLayout", "row", "fxLayoutGap", "4%", "fxLayoutAlign", "center", 1, "btn_wrapper"], ["mat-flat-button", "", "fxFlex", "30%", 1, "branch-reset", 3, "click"], ["mat-flat-button", "", "class", "branch_login", "fxFlex", "70%", 3, "disabled", "click", 4, "ngIf"], ["mat-flat-button", "", "fxFlex", "70%", 1, "branch_login", 3, "disabled", "click"]], template: function BranchLogoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "DemoBank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "KIOSK Branch Logout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "KIOSK System code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function BranchLogoutComponent_Template_mat_select_selectionChange_11_listener($event) { return ctx.changeSystemCode($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-form-field", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Branch Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Choose the option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-button-toggle-group", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-button-toggle", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BranchLogoutComponent_Template_mat_button_toggle_change_22_listener($event) { return ctx.onChangeOption($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Logout Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-button-toggle", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BranchLogoutComponent_Template_mat_button_toggle_change_27_listener($event) { return ctx.onChangeOption($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "OTP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](32, BranchLogoutComponent_div_32_Template, 12, 4, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, BranchLogoutComponent_div_33_Template, 6, 4, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, BranchLogoutComponent_div_34_Template, 5, 2, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.branchLogout);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.branchCode.kioskSystemCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.branchCode.kioskSystemCode, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.kisoksystemCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.kisoksystemCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.optionType == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.optionType == 1 || ctx.optionType == 2 && ctx.radioType && ctx.otpfield);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.optionType);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioButton"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], ng_otp_input__WEBPACK_IMPORTED_MODULE_14__["NgOtpInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__["DefaultClassDirective"]], styles: [".branch_login_page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-image: url('branch-login-background.png');\n  background-position: center;\n  background-size: 100% 100%;\n  padding: 0 4rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  margin-top: 2rem;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p.logo[_ngcontent-%COMP%] {\n  font: normal normal medium Big Caslon;\n  font-size: 28px;\n  color: #004B94;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p.welcome[_ngcontent-%COMP%] {\n  color: #131523;\n  font-size: 33px;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 550;\n  letter-spacing: 0.28px;\n  margin-right: 36%;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: 0 auto;\n  margin-bottom: 1rem;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%]   .field_heading[_ngcontent-%COMP%] {\n  margin-bottom: 10px !important;\n  margin-left: 20px;\n  font-size: 16px;\n  color: #051A2D;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%]   .fieldtext[_ngcontent-%COMP%] {\n  color: #004C97;\n  top: 135px;\n  left: 235px;\n  width: 102px;\n  height: 23px;\n  text-align: left;\n  font: normal normal medium 16px/25px Poppins;\n  letter-spacing: -0.25px;\n  opacity: 1;\n  font-weight: 500px;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form_container.option_row[_ngcontent-%COMP%]   .otp_select_field[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form_container.option_row[_ngcontent-%COMP%]   .otp_select_field[_ngcontent-%COMP%]   mat-select[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form_container.option_row[_ngcontent-%COMP%]   .otp_select_field[_ngcontent-%COMP%]   button.Nextbtn[_ngcontent-%COMP%] {\n  height: 44px;\n  background: transparent linear-gradient(90deg, #051a2d 0%, #004c97 100%) 0% 0% no-repeat padding-box;\n  border-radius: 16px !important;\n  position: absolute;\n  top: 53%;\n  right: -2px;\n  transform: translateY(-50%);\n  z-index: 9;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form_container.option_row[_ngcontent-%COMP%]   .otp_select_field[_ngcontent-%COMP%]   button.Nextbtn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin-top: 5px;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .ng_otp_field[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .ng_otp_field[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  margin-bottom: 1rem;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .ng_otp_field[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   .btn_wrapper[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: auto;\n  padding: 2rem 0;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   .btn_wrapper[_ngcontent-%COMP%]   .branch-reset[_ngcontent-%COMP%] {\n  height: 43px;\n  border-radius: 97px;\n  background: #fffefe 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 15px #00000017;\n  font-weight: 800;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   .btn_wrapper[_ngcontent-%COMP%]   .branch_login[_ngcontent-%COMP%] {\n  height: 43px;\n  border-radius: 97px;\n  background: transparent linear-gradient(90deg, #051a2d 0%, #004c97 100%) 0% 0% no-repeat padding-box;\n  border: 1px solid #00000000;\n  color: #ffffff;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   .btn_wrapper[_ngcontent-%COMP%]   .branch_login.mat-button-disabled[_ngcontent-%COMP%] {\n  background: #B4B4B4;\n}\n\n \n.branch_login_page\n.mat-form-field-appearance-outline\n.mat-form-field-outline {\n  background-color: white;\n  border-radius: 10px;\n  height: 60px;\n}\n\n  .ng_otp_field .otp-input:focus {\n  outline-color: #004c97;\n}\n\n  .otp-input {\n  color: #004c97;\n}\n\n  .ng_otp_field ng-otp-input.error .otp-input {\n  color: #b20000;\n  border: solid 1px #ff0000 !important;\n}\n\n  .ng_otp_field ng-otp-input.error .otp-input:focus {\n  outline-color: #ff0000;\n}\n\n  .error-msg {\n  color: red !important;\n  border: 2px solid #b20000;\n  background: #fff !important;\n}\n\n.dot[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n  background-color: #FFFFFF;\n  border-radius: 50%;\n  border: 5px solid;\n  margin-top: 15px !important;\n  margin-bottom: 12px;\n}\n\n.text[_ngcontent-%COMP%] {\n  letter-spacing: -0.44px;\n  margin-top: 4px !important;\n}\n\n.otptext[_ngcontent-%COMP%] {\n  letter-spacing: -0.44px;\n  margin-top: 4px !important;\n}\n\n  .mat-form-field-outline .mat-select {\n  color: #58657D65 !important;\n}\n\n  .mat-primary.mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #131523 !important;\n}\n\n  .mat-primary .mat-form-field-outline .mat-select-arrow {\n  color: #58657D65 !important;\n}\n\n  .mat-form-field-appearance-outline .mat-form-field-infix {\n  font-weight: 500;\n}\n\n.button-toggle[_ngcontent-%COMP%] {\n  color: #B4B4B4;\n  letter-spacing: -0.44px;\n  font-size: 16px;\n}\n\n  .egret-navy .mat-button-toggle-checked.mat-button-toggle-appearance-standard {\n  color: #004C97 !important;\n  border: 1px solid #B4B4B4;\n  background-color: #FFFFFF;\n}\n\n.verifycode[_ngcontent-%COMP%] {\n  color: #131523;\n  font-weight: 600;\n  letter-spacing: 0.17px;\n}\n\n  .otp-input {\n  border: solid 1px #ffffff !important;\n}\n\n  .mat-radio-inner-circle {\n  background-color: #004C97 !important;\n}\n\n  .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #004C97 !important;\n  border: solid 1px !important;\n}\n\n.resend1[_ngcontent-%COMP%] {\n  color: #131523;\n  font-weight: bold !important;\n}\n\n.resend2[_ngcontent-%COMP%] {\n  color: #b4b4b4;\n}\n\n  .egret-navy .mat-select-value {\n  color: #004C97 !important;\n}\n\n  .egret-navy .mat-input-element {\n  color: #004C97 !important;\n}\n\n.otpfield[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n@media (max-width: 15%) {\n  .otpfield[_ngcontent-%COMP%] {\n    max-width: 15%;\n  }\n}\n\n.passfield[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n@media (max-width: 24%) {\n  .passfield[_ngcontent-%COMP%] {\n    max-width: 24%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYnJhbmNoLWxvZ291dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFpQjtFQUNqQixvREFBOEU7RUFDOUUsMkJBQTJCO0VBQzNCLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtBQUMxQjs7QUFSQTtFQVNNLGNBQWM7RUFDZCxnQkFBZ0I7QUFHdEI7O0FBYkE7RUFZUSxnQkFBZ0I7QUFLeEI7O0FBakJBO0VBY1UscUNBQXFDO0VBQ3JDLGVBQWU7RUFDZixjQUFjO0FBT3hCOztBQXZCQTtFQW1CVSxjQUFjO0VBQ2QsZUFBZTtFQUNmLGtDQUFrQztFQUNsQyxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQVEzQjs7QUFoQ0E7RUE4QlEsVUFBVTtFQUNWLGNBQWM7RUFDZCxtQkFBbUI7QUFNM0I7O0FBdENBO0VBbUNVLDhCQUE4QjtFQUM5QixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGNBQWM7QUFPeEI7O0FBN0NBO0VBeUNVLFlBQVk7QUFRdEI7O0FBakRBO0VBNENVLGNBQWM7RUFDZCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLDRDQUE0QztFQUM1Qyx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGtCQUFrQjtBQVM1Qjs7QUE5REE7RUF5RFksV0FBVztFQUNYLGtCQUFrQjtBQVM5Qjs7QUFuRUE7RUE2RGMsVUFBVTtBQVV4Qjs7QUF2RUE7RUFnRWMsWUFBWTtFQUNaLG9HQUFvRztFQUNwRyw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLFVBQVU7QUFXeEI7O0FBbEZBO0VBeUVnQixlQUFlO0VBQ2YsZUFBZTtBQWEvQjs7QUF2RkE7RUFpRlEsZ0JBQWdCO0FBVXhCOztBQTNGQTtFQW1GVSxrQ0FBa0M7RUFDbEMsbUJBQW1CO0FBWTdCOztBQWhHQTtFQXdGVSxnQkFBZ0I7RUFDaEIsa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixlQUFlO0FBWXpCOztBQXZHQTtFQWdHTSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7QUFXckI7O0FBN0dBO0VBb0dRLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsK0NBQStDO0VBQy9DLGtDQUFrQztFQUNsQyxnQkFBZ0I7QUFheEI7O0FBckhBO0VBMkdRLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsb0dBQzZCO0VBQzdCLDJCQUEyQjtFQUMzQixjQUFjO0FBYXRCOztBQTdIQTtFQWtIVSxtQkFBbUI7QUFlN0I7O0FBVEU7Ozs7RUFJQSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFZZDs7QUFUSTtFQUlNLHNCQUFzQjtBQVNoQzs7QUFKSTtFQUNFLGNBQWM7QUFPcEI7O0FBSE07RUFDRSxjQUFjO0VBQ2Qsb0NBQW9DO0FBTTVDOztBQVJNO0VBSUksc0JBQXNCO0FBUWhDOztBQUpNO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QiwyQkFBMkI7QUFPbkM7O0FBSk07RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFPM0I7O0FBSk07RUFDRSx1QkFBdUI7RUFDdkIsMEJBQTBCO0FBT2xDOztBQUxNO0VBQ0UsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtBQVFsQzs7QUFMTTtFQUNFLDJCQUEyQjtBQVFuQzs7QUFOTTtFQUNFLHlCQUF5QjtBQVNqQzs7QUFQTTtFQUNFLDJCQUEyQjtBQVVuQzs7QUFSTTtFQUNFLGdCQUFnQjtBQVd4Qjs7QUFUTTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsZUFBZTtBQVl2Qjs7QUFWTTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIseUJBQXlCO0FBYWpDOztBQVhNO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFjOUI7O0FBWkE7RUFDRSxvQ0FBb0M7QUFldEM7O0FBYkE7RUFDRSxvQ0FBb0M7QUFnQnRDOztBQWRBO0VBQ0UsZ0NBQWlDO0VBQ2pDLDRCQUE0QjtBQWlCOUI7O0FBZkE7RUFDRSxjQUFlO0VBQ2YsNEJBQTRCO0FBa0I5Qjs7QUFoQkE7RUFDQyxjQUFjO0FBbUJmOztBQWpCQTtFQUNFLHlCQUEwQjtBQW9CNUI7O0FBbEJBO0VBQ0UseUJBQTBCO0FBcUI1Qjs7QUFuQkE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBc0JyQjs7QUFyQkU7RUFIRjtJQUlJLGNBQWM7RUF5QmhCO0FBQ0Y7O0FBdkJBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQTBCckI7O0FBekJFO0VBSEY7SUFJSSxjQUFjO0VBNkJoQjtBQUNGIiwiZmlsZSI6ImJyYW5jaC1sb2dvdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJhbmNoX2xvZ2luX3BhZ2Uge1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1hZ2VzL2JyYW5jaC1sb2dpbi1iYWNrZ3JvdW5kLnBuZ1wiKTtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgcGFkZGluZzogMCA0cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBoZWFkZXIge1xyXG4gICAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgICAgcCB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAmLmxvZ28ge1xyXG4gICAgICAgICAgZm9udDogbm9ybWFsIG5vcm1hbCBtZWRpdW0gQmlnIENhc2xvbjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICAgIGNvbG9yOiAjMDA0Qjk0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAmLndlbGNvbWUge1xyXG4gICAgICAgICAgY29sb3I6ICMxMzE1MjM7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMzcHg7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNTUwO1xyXG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMjhweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMzYlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9ybSB7XHJcbiAgICAgIC5mb3JtX2NvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIFxyXG4gICAgICAgIC5maWVsZF9oZWFkaW5nIHtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgY29sb3I6ICMwNTFBMkQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIHtcclxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmZpZWxkdGV4dCB7XHJcbiAgICAgICAgICBjb2xvcjogIzAwNEM5NztcclxuICAgICAgICAgIHRvcDogMTM1cHg7XHJcbiAgICAgICAgICBsZWZ0OiAyMzVweDtcclxuICAgICAgICAgIHdpZHRoOiAxMDJweDtcclxuICAgICAgICAgIGhlaWdodDogMjNweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIG1lZGl1bSAxNnB4LzI1cHggUG9wcGlucztcclxuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yNXB4O1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5vcHRpb25fcm93IHtcclxuICAgICAgICAgIC5vdHBfc2VsZWN0X2ZpZWxkIHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBcclxuICAgICAgICAgICAgbWF0LXNlbGVjdCB7XHJcbiAgICAgICAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidXR0b24uTmV4dGJ0biB7XHJcbiAgICAgICAgICAgICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzA1MWEyZCAwJSwgIzAwNGM5NyAxMDAlKSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICB0b3A6IDUzJTtcclxuICAgICAgICAgICAgICByaWdodDogLTJweDtcclxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICAgICAgICAgICAgei1pbmRleDogOTtcclxuICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLm5nX290cF9maWVsZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIC8vIGNvbG9yOiAjYjRiNGI0O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuYnRuX3dyYXBwZXIge1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgIHBhZGRpbmc6IDJyZW0gMDtcclxuICAgICAgLmJyYW5jaC1yZXNldCB7XHJcbiAgICAgICAgaGVpZ2h0OiA0M3B4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDk3cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZmVmZSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDNweCAxNXB4ICMwMDAwMDAxNztcclxuICAgICAgICBmb250LXdlaWdodDogODAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5icmFuY2hfbG9naW4ge1xyXG4gICAgICAgIGhlaWdodDogNDNweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA5N3B4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzA1MWEyZCAwJSwgIzAwNGM5NyAxMDAlKVxyXG4gICAgICAgICAgMCUgMCUgbm8tcmVwZWF0IHBhZGRpbmctYm94O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAwMDtcclxuICAgICAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgICAgICAmLm1hdC1idXR0b24tZGlzYWJsZWQge1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI0I0QjRCNDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuICA6Om5nLWRlZXBcclxuICAuYnJhbmNoX2xvZ2luX3BhZ2VcclxuICAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lXHJcbiAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIH0gICBcclxuICBcclxuICAgIDo6bmctZGVlcCAubmdfb3RwX2ZpZWxkIC5vdHAtaW5wdXQge1xyXG4gICAgICAgIC8vIGNvbG9yOiAjMDA0Yzk3O1xyXG4gICAgICAgIC8vIGJvcmRlcjogc29saWQgMXB4ICMwMDRjOTcgIWltcG9ydGFudDtcclxuICAgICAgICAmOmZvY3VzIHtcclxuICAgICAgICAgIG91dGxpbmUtY29sb3I6ICMwMDRjOTc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgXHJcbiAgICA6Om5nLWRlZXAgLm90cC1pbnB1dCB7XHJcbiAgICAgIGNvbG9yOiAjMDA0Yzk3O1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgICA6Om5nLWRlZXAgLm5nX290cF9maWVsZCBuZy1vdHAtaW5wdXQuZXJyb3IgLm90cC1pbnB1dCB7XHJcbiAgICAgICAgY29sb3I6ICNiMjAwMDA7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmMDAwMCAhaW1wb3J0YW50O1xyXG4gICAgICAgICY6Zm9jdXMge1xyXG4gICAgICAgICAgb3V0bGluZS1jb2xvcjogI2ZmMDAwMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIDo6bmctZGVlcCAuZXJyb3ItbXNnIHtcclxuICAgICAgICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2IyMDAwMDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5kb3R7XHJcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgIGJvcmRlcjogNXB4IHNvbGlkO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHggIWltcG9ydGFudDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAudGV4dHtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNDRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICAub3RwdGV4dHtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNDRweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIC5tYXQtc2VsZWN0ICB7XHJcbiAgICAgICAgY29sb3I6ICM1ODY1N0Q2NSAhaW1wb3J0YW50O1xyXG4gICAgICB9XHJcbiAgICAgIDo6bmctZGVlcCAubWF0LXByaW1hcnkubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XHJcbiAgICAgICAgY29sb3I6ICMxMzE1MjMgIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICA6Om5nLWRlZXAgLm1hdC1wcmltYXJ5IC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIC5tYXQtc2VsZWN0LWFycm93IHtcclxuICAgICAgICBjb2xvcjogIzU4NjU3RDY1ICFpbXBvcnRhbnQ7XHJcbiAgICAgIH1cclxuICAgICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLWluZml4IHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB9XHJcbiAgICAgIC5idXR0b24tdG9nZ2xlIHtcclxuICAgICAgICBjb2xvcjogI0I0QjRCNDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogLTAuNDRweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIH1cclxuICAgICAgOjpuZy1kZWVwIC5lZ3JldC1uYXZ5IC5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkLm1hdC1idXR0b24tdG9nZ2xlLWFwcGVhcmFuY2Utc3RhbmRhcmQge1xyXG4gICAgICAgIGNvbG9yOiAjMDA0Qzk3ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0I0QjRCNDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICB9XHJcbiAgICAgIC52ZXJpZnljb2RlIHtcclxuICAgICAgICBjb2xvcjogIzEzMTUyMztcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjE3cHg7XHJcbiAgICAgIH1cclxuOjpuZy1kZWVwIC5vdHAtaW5wdXQge1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICNmZmZmZmYgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1yYWRpby1pbm5lci1jaXJjbGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDRDOTcgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1yYWRpby1idXR0b24ubWF0LWFjY2VudC5tYXQtcmFkaW8tY2hlY2tlZCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XHJcbiAgYm9yZGVyLWNvbG9yOiAgIzAwNEM5NyAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogc29saWQgMXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnJlc2VuZDEge1xyXG4gIGNvbG9yOiAgIzEzMTUyMztcclxuICBmb250LXdlaWdodDogYm9sZCAhaW1wb3J0YW50O1xyXG59XHJcbi5yZXNlbmQyIHtcclxuIGNvbG9yOiAjYjRiNGI0O1xyXG59XHJcbjo6bmctZGVlcCAuZWdyZXQtbmF2eSAubWF0LXNlbGVjdC12YWx1ZSB7XHJcbiAgY29sb3I6ICAjMDA0Qzk3ICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5lZ3JldC1uYXZ5IC5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgY29sb3I6ICAjMDA0Qzk3ICFpbXBvcnRhbnQ7XHJcbn1cclxuLm90cGZpZWxke1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBAbWVkaWEoIG1heC13aWR0aDoxNSUpIHtcclxuICAgIG1heC13aWR0aDogMTUlO1xyXG4gIH1cclxufVxyXG4ucGFzc2ZpZWxke1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBAbWVkaWEoIG1heC13aWR0aDoyNCUpIHtcclxuICAgIG1heC13aWR0aDogMjQlO1xyXG4gIH1cclxufVxyXG5cclxuICAgIFxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BranchLogoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-branch-logout",
                templateUrl: "./branch-logout.component.html",
                styleUrls: ["./branch-logout.component.scss"],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { newotp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['otpvalue']
        }] }); })();


/***/ }),

/***/ "UXNm":
/*!*******************************************************************************!*\
  !*** ./src/app/views/sessions/walk-in-customer/walk-in-customer.component.ts ***!
  \*******************************************************************************/
/*! exports provided: WalkInCustomerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalkInCustomerComponent", function() { return WalkInCustomerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_shared_models_otp_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/models/otp.model */ "V4gq");
/* harmony import */ var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/api.service */ "nm5K");
/* harmony import */ var app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/Dialog/dialog.service */ "LP5l");
/* harmony import */ var app_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/services/finger-print-capture.service */ "rp8y");
/* harmony import */ var app_shared_services_showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/shared/services/showMessage/show-message.service */ "x/2q");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _otp_onlynumber_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../otp/onlynumber.directive */ "Kj45");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");

























class WalkInCustomerComponent {
    constructor(router, _formBuilder, dialogService, apiService, showMessageService, snack, cdr, fpCaptureService) {
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
            numericCode: '276',
        };
        this.cntdis = false;
        // if(error.status){
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
        this.maskingNumber = [
            { code: 'AD', phone: '+376', mask: '999 999' },
            { code: 'AE', phone: '+971', mask: '999 999 9999' },
            { code: 'AF', phone: '+93', mask: '999 999 9999' },
            { code: 'AG', phone: '+1 (268)', mask: '999-9999' },
            { code: 'AI', phone: '+1 (264)', mask: '999-9999' },
            { code: 'AL', phone: '+355', mask: '999 999 9999' },
            { code: 'AM', phone: '+374', mask: '999 999999' },
            { code: 'AN', phone: '+599', mask: '999 9999' },
            { code: 'AO', phone: '+244', mask: '999 999 999' },
            { code: 'AQ', phone: '+672', mask: '9 99999' },
            { code: 'AR', phone: '+54', mask: '999 99-9999-9999' },
            { code: 'AS', phone: '+1 (684)', mask: '999-9999' },
            { code: 'AT', phone: '+43', mask: '9999 999999' },
            { code: 'AU', phone: '+61', mask: '9999 999 999' },
            { code: 'AW', phone: '+297', mask: '999 9999' },
            { code: 'AZ', phone: '+994', mask: '999 999 99 99' },
            { code: 'BA', phone: '+387', mask: '999 999 999' },
            { code: 'BB', phone: '+1 (246)', mask: '999-9999' },
            { code: 'BD', phone: '+880', mask: '99999-999999' },
            { code: 'BE', phone: '+32', mask: '9999 99 99 99' },
            { code: 'BF', phone: '+226', mask: '99 99 99 99' },
            { code: 'BG', phone: '+359', mask: '999 999 999' },
            { code: 'BH', phone: '+973', mask: '9999 9999' },
            { code: 'BI', phone: '+257', mask: '99 99 99 99' },
            { code: 'BJ', phone: '+229', mask: '99 99 99 99' },
            { code: 'BL', phone: '+590', mask: '9999 99 99 99' },
            { code: 'BM', phone: '+1 (441)', mask: '999-9999' },
            { code: 'BN', phone: '+673', mask: '999 9999' },
            { code: 'BO', phone: '+591', mask: '99999999' },
            { code: 'BR', phone: '+55', mask: '(99) 99999-9999' },
            { code: 'BS', phone: '+1 (242)', mask: '999-9999' },
            { code: 'BT', phone: '+975', mask: '99 99 99 99' },
            { code: 'BW', phone: '+267', mask: '99 999 999' },
            { code: 'BY', phone: '+375', mask: '9 999 999-99-99' },
            { code: 'BZ', phone: '+501', mask: '999-9999' },
            { code: 'CA', phone: '+1', mask: '(999) 999-9999' },
            { code: 'CC', phone: '+61', mask: '9999 999 999' },
            { code: 'CD', phone: '+243', mask: '9999 999 999' },
            { code: 'CF', phone: '+236', mask: '99 99 99 99' },
            { code: 'CG', phone: '+242', mask: '99 999 9999' },
            { code: 'CH', phone: '+41', mask: '999 999 99 99' },
            { code: 'CI', phone: '+225', mask: '99 99 99 99' },
            { code: 'CK', phone: '+682', mask: '99 9999' },
            { code: 'CL', phone: '+56', mask: '9 9999 9999' },
            { code: 'CM', phone: '+237', mask: '9 99 99 99 99' },
            { code: 'CN', phone: '+86', mask: '999 9999 9999' },
            { code: 'CO', phone: '+57', mask: '999 9999999' },
            { code: 'CR', phone: '+506', mask: '9999 9999' },
            { code: 'CU', phone: '+53', mask: '99 9999999' },
            { code: 'CV', phone: '+238', mask: '999 99 99' },
            { code: 'CW', phone: '+599', mask: '999 9999' },
            { code: 'CX', phone: '+61', mask: '9999 999 999' },
            { code: 'CY', phone: '+357', mask: '99 999999' },
            { code: 'CZ', phone: '+420', mask: '999 999 999' },
            { code: 'DE', phone: '+49', mask: '99999 9999999' },
            { code: 'DJ', phone: '+253', mask: '99 99 99 99' },
            { code: 'DK', phone: '+45', mask: '99 99 99 99' },
            { code: 'DM', phone: '+1 (767)', mask: '999-9999' },
            { code: 'DO', phone: '+1 (809)', mask: '999-9999' },
            { code: 'DZ', phone: '+213', mask: '9999 99 99 99' },
            { code: 'EC', phone: '+593', mask: '999 999 9999' },
            { code: 'EE', phone: '+372', mask: '9999 9999' },
            { code: 'EG', phone: '+20', mask: '9999 999 9999' },
            { code: 'EH', phone: '+212', mask: '9999-999999' },
            { code: 'ER', phone: '+291', mask: '99 999 999' },
            { code: 'ES', phone: '+34', mask: '999 99 99 99' },
            { code: 'ET', phone: '+251', mask: '999 999 9999' },
            { code: 'FI', phone: '+358', mask: '999 9999999' },
            { code: 'FJ', phone: '+679', mask: '999 9999' },
            { code: 'FK', phone: '+500', mask: '99999' },
            { code: 'FM', phone: '+691', mask: '999 9999' },
            { code: 'FO', phone: '+298', mask: '999999' },
            { code: 'FR', phone: '+33', mask: '99 99 99 99 99' },
            { code: 'GA', phone: '+241', mask: '99 99 99 99' },
            { code: 'GB', phone: '+44', mask: '99999 99999' },
            { code: 'GD', phone: '+1 (473)', mask: '999-9999' },
            { code: 'GE', phone: '+995', mask: '999 99 99 99' },
            { code: 'GG', phone: '+44', mask: '99999 999999' },
            { code: 'GH', phone: '+233', mask: '999 999 9999' },
            { code: 'GI', phone: '+350', mask: '99999999' },
            { code: 'GL', phone: '+299', mask: '99 99 99' },
            { code: 'GM', phone: '+220', mask: '999 9999' },
            { code: 'GN', phone: '+224', mask: '999 99 99 99' },
            { code: 'GQ', phone: '+240', mask: '999 999 999' },
            { code: 'GR', phone: '+30', mask: '999 999 9999' },
            { code: 'GT', phone: '+502', mask: '9999 9999' },
            { code: 'GU', phone: '+1 (671)', mask: '999-9999' },
            { code: 'GW', phone: '+245', mask: '999 999 999' },
            { code: 'GY', phone: '+592', mask: '999 9999' },
            { code: 'HK', phone: '+852', mask: '9999 9999' },
            { code: 'HN', phone: '+504', mask: '9999-9999' },
            { code: 'HR', phone: '+385', mask: '999 999 9999' },
            { code: 'HT', phone: '+509', mask: '99 99 9999' },
            { code: 'HU', phone: '+36', mask: '(99) 999 9999' },
            { code: 'ID', phone: '+62', mask: '9999-999-999' },
            { code: 'IE', phone: '+353', mask: '999 999 9999' },
            { code: 'IL', phone: '+972', mask: '999-999-9999' },
            { code: 'IM', phone: '+44', mask: '99999 999999' },
            { code: 'IN', phone: '+91', mask: '99999 99999' },
            { code: 'IO', phone: '+246', mask: '999 9999' },
            { code: 'IQ', phone: '+964', mask: '9999 999 9999' },
            { code: 'IR', phone: '+98', mask: '9999 999 9999' },
            { code: 'IS', phone: '+354', mask: '999 9999' },
            { code: 'IT', phone: '+39', mask: '999 999 9999' },
            { code: 'JE', phone: '+44', mask: '99999 999999' },
            { code: 'JM', phone: '+1 (876)', mask: '999-9999' },
            { code: 'JO', phone: '+962', mask: '99 9999 9999' },
            { code: 'JP', phone: '+81', mask: '999 9999-9999' },
            { code: 'KE', phone: '+254', mask: '9999 999999' },
            { code: 'KG', phone: '+996', mask: '9999 999 999' },
            { code: 'KH', phone: '+855', mask: '999 999 999' },
            { code: 'KI', phone: '+686', mask: '99999999' },
            { code: 'KM', phone: '+269', mask: '999 99 99' },
            { code: 'KN', phone: '+1 (869)', mask: '999-9999' },
            { code: 'KP', phone: '+850', mask: '9999 999 9999' },
            { code: 'KR', phone: '+82', mask: '999-9999-9999' },
            { code: 'KW', phone: '+965', mask: '999 99999' },
            { code: 'KY', phone: '+1 (345)', mask: '999-9999' },
            { code: 'KZ', phone: '+7', mask: '9 (999) 999 9999' },
            { code: 'LA', phone: '+856', mask: '999 99 999 999' },
            { code: 'LB', phone: '+961', mask: '99 999 999' },
            { code: 'LC', phone: '+1 (758)', mask: '999-9999' },
            { code: 'LI', phone: '+423', mask: '999 999 999' },
            { code: 'LK', phone: '+94', mask: '999 999 9999' },
            { code: 'LR', phone: '+231', mask: '999 999 9999' },
            { code: 'LS', phone: '+266', mask: '9999 9999' },
            { code: 'LT', phone: '+370', mask: '(9-999) 99999' },
            { code: 'LU', phone: '+352', mask: '999 999 999' },
            { code: 'LV', phone: '+371', mask: '99 999 999' },
            { code: 'LY', phone: '+218', mask: '999-9999999' },
            { code: 'MA', phone: '+212', mask: '9999-999999' },
            { code: 'MC', phone: '+377', mask: '99 99 99 99 99' },
            { code: 'MD', phone: '+373', mask: '9999 99 999' },
            { code: 'ME', phone: '+382', mask: '999 999 999' },
            { code: 'MF', phone: '+590', mask: '9999 99 99 99' },
            { code: 'MG', phone: '+261', mask: '999 99 999 99' },
            { code: 'MH', phone: '+692', mask: '999-9999' },
            { code: 'MK', phone: '+389', mask: '999 999 999' },
            { code: 'ML', phone: '+223', mask: '99 99 99 99' },
            { code: 'MM', phone: '+95', mask: '99 999 9999' },
            { code: 'MN', phone: '+976', mask: '9999 9999' },
            { code: 'MO', phone: '+853', mask: '9999 9999' },
            { code: 'MP', phone: '+1 (670)', mask: '999-9999' },
            { code: 'MR', phone: '+222', mask: '99 99 99 99' },
            { code: 'MS', phone: '+1 (664)', mask: '999-9999' },
            { code: 'MT', phone: '+356', mask: '9999 9999' },
            { code: 'MU', phone: '+230', mask: '9999 9999' },
            { code: 'MV', phone: '+960', mask: '999-9999' },
            { code: 'MW', phone: '+265', mask: '9999 99 99 99' },
            { code: 'MX', phone: '+52', mask: '999 999 999 9999' },
            { code: 'MY', phone: '+60', mask: '999-999 9999' },
            { code: 'MZ', phone: '+258', mask: '99 999 9999' },
            { code: 'NA', phone: '+264', mask: '999 999 9999' },
            { code: 'NC', phone: '+687', mask: '99 99 99' },
            { code: 'NE', phone: '+227', mask: '99 99 99 99' },
            { code: 'NG', phone: '+234', mask: '9999 999 9999' },
            { code: 'NI', phone: '+505', mask: '9999 9999' },
            { code: 'NL', phone: '+31', mask: '99 99999999' },
            { code: 'NO', phone: '+47', mask: '999 99 999' },
            { code: 'NP', phone: '+977', mask: '999-9999999' },
            { code: 'NR', phone: '+674', mask: '999 9999' },
            { code: 'NU', phone: '+683', mask: '999 9999' },
            { code: 'NZ', phone: '+64', mask: '999 999 9999' },
            { code: 'OM', phone: '+968', mask: '9999 9999' },
            { code: 'PA', phone: '+507', mask: '9999-9999' },
            { code: 'PE', phone: '+51', mask: '999 999 999' },
            { code: 'PF', phone: '+689', mask: '99 99 99 99' },
            { code: 'PG', phone: '+675', mask: '9999 9999' },
            { code: 'PH', phone: '+63', mask: '9999 999 9999' },
            { code: 'PK', phone: '+92', mask: '9999 9999999' },
            { code: 'PL', phone: '+48', mask: '999 999 999' },
            { code: 'PM', phone: '+508', mask: '999 99 99' },
            { code: 'PN', phone: '+64', mask: '99 999999' },
            { code: 'PR', phone: '+1 (787)', mask: '999-9999' },
            { code: 'PS', phone: '+970', mask: '9999 999 999' },
            { code: 'PT', phone: '+351', mask: '999 999 999' },
            { code: 'PW', phone: '+680', mask: '999 9999' },
            { code: 'PY', phone: '+595', mask: '9999 999999' },
            { code: 'QA', phone: '+974', mask: '9999 9999' },
            { code: 'RE', phone: '+262', mask: '9999 99 99 99' },
            { code: 'RO', phone: '+40', mask: '9999 999 999' },
            { code: 'RS', phone: '+381', mask: '999 9999999' },
            { code: 'RU', phone: '+7', mask: '9 (999) 999-99' },
            { code: 'RW', phone: '+250', mask: '9999 999 999' },
            { code: 'SA', phone: '+966', mask: '999 999 9999' },
            { code: 'SB', phone: '+677', mask: '99 99999' },
            { code: 'SC', phone: '+248', mask: '9 999 999' },
            { code: 'SD', phone: '+249', mask: '999 999 9999' },
            { code: 'SE', phone: '+46', mask: '999-999 99 99' },
            { code: 'SG', phone: '+65', mask: '9999 9999' },
            { code: 'SH', phone: '+290', mask: '99999' },
            { code: 'SI', phone: '+386', mask: '999 999 999' },
            { code: 'SJ', phone: '+47', mask: '999 99 999' },
            { code: 'SK', phone: '+421', mask: '9999 999 999' },
            { code: 'SL', phone: '+232', mask: '(999) 999999' },
            { code: 'SM', phone: '+378', mask: '99 99 99 99' },
            { code: 'SN', phone: '+221', mask: '99 999 99 99' },
            { code: 'SO', phone: '+252', mask: '9 9999999' },
            { code: 'SR', phone: '+597', mask: '999-9999' },
            { code: 'SS', phone: '+211', mask: '9999 999 999' },
            { code: 'ST', phone: '+239', mask: '999 9999' },
            { code: 'SV', phone: '+503', mask: '9999 9999' },
            { code: 'SX', phone: '+1 (721)', mask: '999-9999' },
            { code: 'SY', phone: '+963', mask: '9999 999 999' },
            { code: 'SZ', phone: '+268', mask: '9999 9999' },
            { code: 'TC', phone: '+1 (649)', mask: '999-9999' },
            { code: 'TD', phone: '+235', mask: '99 99 99 99' },
            { code: 'TG', phone: '+228', mask: '99 99 99 99' },
            { code: 'TH', phone: '+66', mask: '999 999 9999' },
            { code: 'TJ', phone: '+992', mask: '999 99 9999' },
            { code: 'TK', phone: '+690', mask: '9999' },
            { code: 'TL', phone: '+670', mask: '9999 9999' },
            { code: 'TM', phone: '+993', mask: '9 99 999999' },
            { code: 'TN', phone: '+216', mask: '99 999 999' },
            { code: 'TO', phone: '+676', mask: '999 9999' },
            { code: 'TR', phone: '+90', mask: '9999 999 99 99' },
            { code: 'TT', phone: '+1 (868)', mask: '999-9999' },
            { code: 'TV', phone: '+688', mask: '999999' },
            { code: 'TW', phone: '+886', mask: '9999 999 999' },
            { code: 'TZ', phone: '+255', mask: '9999 999 999' },
            { code: 'UA', phone: '+380', mask: '999 999 9999' },
            { code: 'UG', phone: '+256', mask: '9999 999999' },
            { code: 'US', phone: '+1', mask: '(999) 999-9999' },
            { code: 'UY', phone: '+598', mask: '999 999 999' },
            { code: 'UZ', phone: '+998', mask: '9 99 999 99 99' },
            { code: 'VA', phone: '+39', mask: '999 999 9999' },
            { code: 'VC', phone: '+1 (784)', mask: '999-9999' },
            { code: 'VE', phone: '+58', mask: '9999-9999999' },
            { code: 'VG', phone: '+1 (284)', mask: '999-9999' },
            { code: 'VI', phone: '+1 (340)', mask: '999-9999' },
            { code: 'VN', phone: '+84', mask: '999 999 99 99' },
            { code: 'VU', phone: '+678', mask: '999 9999' },
            { code: 'WF', phone: '+681', mask: '99 99 99' },
            { code: 'WS', phone: '+685', mask: '99 99999' },
            { code: 'XK', phone: '+383', mask: '999 999 999' },
            { code: 'YE', phone: '+967', mask: '9999 999 999' },
            { code: 'YT', phone: '+262', mask: '9999 99 99 99' },
            { code: 'ZA', phone: '+27', mask: '999 999 9999' },
            { code: 'ZM', phone: '+260', mask: '999 9999999' },
            { code: 'ZW', phone: '+263', mask: '999 999 9999' },
        ];
    }
    ngOnInit() {
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
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("^((\\+91-?)|0)?[0-9]{10}$"), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(10)]],
        });
        // this.countryCallCode="+1" ;
        // this.countryCode = "+1" ;
        // console.log(this.loginForm) ; 
        //   this.loginForm.get('country').valueChanges
        //   .subscribe(country => console
        //       .log('this.loginForm.get("country").valueChanges', country));
        //   this.loginForm.valueChanges
        //       .subscribe(country => console
        //           .log('this.countryFormControl.valueChanges', country));
    }
    _keyPress(event) {
        // console.log("key",event);
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    letterOnly(event) {
        var charCode = event.keyCode;
        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123) || charCode == 8)
            return true;
        else
            return false;
    }
    onCountrySelected($event) {
        console.log($event.callingCode);
        this.countryCode = $event.callingCode;
    }
    inputChanged(val) {
        console.log(val);
        this.fieldLength = val.length;
    }
    goToScanner() {
        localStorage.removeItem('phonenumFromLogin');
        this.router.navigateByUrl('/sessions/scanner');
    }
    goToAppointment() {
        this.showWalkinCustomerLink = false;
        this.router.navigate(['/sessions/appointment-id/']);
    }
    goToLogin() {
        this.showWalkinCustomerLink = false;
        this.router.navigate(['/sessions/login/']);
    }
    goToExitingCustomer() {
        this.showWalkinCustomerLink = true;
        this.router.navigate(['/sessions/login/']);
    }
    goToOtp(phone) {
        console.log(this.loginForm.value.custName);
        if (phone.phoneNumber == "") {
            console.log("in if");
            this.snack.open('Enter Mobile Number to Login', 'OK', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
            });
        }
        else {
            console.log("Phonenumber for OTP", phone, phone.phoneNumber);
            this.customerPhoneNum = phone.phoneNumber;
            localStorage.setItem("phonenumFromLogin", this.customerPhoneNum);
            localStorage.setItem("FromLogin", this.loginForm.value.custName);
            this.oTpModel.source = 'customer';
            this.oTpModel.source_key = 'mobile';
            this.oTpModel.source_value = phone.phoneNumber;
            this.oTpModel.isMobileLogin = false;
            console.log("model", this.oTpModel);
            this.cntdis = true;
            this.apiService.getOtp(this.oTpModel).subscribe(otpResp => {
                console.log("cust resp", otpResp);
                // if (!otpResp?.icust ||  !otpResp.otpVal) {
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
                this.cntdis = true;
                console.log("Response Success", otpResp);
                this.otpResp = otpResp.data;
                this.custStatus = this.otpResp.otpVal.userId;
                localStorage.setItem("customerValidation", this.custStatus);
                /* Added validation for un-registered mobile nummber is entered */
                // if (this.otpResp.otpVal && this.otpResp.otpVal.userId && this.otpResp.otpVal.userId.localeCompare("New Customer") == 0) {
                //   this.snack.open('User Phone Number is not Registered', 'OK', {
                //     duration: 4000,
                //     verticalPosition: 'top',
                //     horizontalPosition: 'right'
                //   });
                // } 
                // else {
                this.fpCaptureService.userDataService(otpResp.data);
                this.router.navigateByUrl('/sessions/otp');
                // }
                // }
            }, (error) => {
                console.log(error.status);
                this.cntdis = false;
                this.errorStatus = error.status;
                if (this.errorStatus == 200) {
                    // this.router.navigateByUrl('/sessions/otp');
                }
            });
        }
    }
}
WalkInCustomerComponent.ɵfac = function WalkInCustomerComponent_Factory(t) { return new (t || WalkInCustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_8__["ShowMessageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_7__["FingerPrintCaptureService"])); };
WalkInCustomerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WalkInCustomerComponent, selectors: [["app-walk-in-customer"]], inputs: { countries: "countries", required: "required" }, decls: 47, vars: 4, consts: [[1, "login_page"], [1, "card_container"], ["fxFlex", "50%", 1, "left_container"], [1, "border-text"], [1, "card-title"], ["novalidate", "", 3, "formGroup"], [1, "number"], [1, "phoneCard"], ["matPrefix", ""], ["fxLayout", "row", "fxLayoutGap", "10px", 2, "margin-top", "-5px"], ["matInput", "", "type", "text", "formControlName", "custName", 1, "no-outline", 3, "keypress"], ["fxLayout", "row", "fxLayoutGap", "10px"], [1, "currency-flag", "currency-flag-inr"], [1, "country"], [1, "vertical-line"], ["matInput", "", "type", "text", "formControlName", "phoneNumber", "onlyNumber", "", "maxLength", "10", 1, "no-outline", 3, "keypress"], ["fxLayout", "row"], [1, "login_btn", 3, "ngClass", "disabled", "click"], ["visible", "true"], [1, "clickHereText"], ["mat-raised-button", "", "type", "button", 1, "Nextbtn", 3, "click"], ["src", "assets/images/Account.png", "alt", "account", 1, "customerIcon"], ["fxlayout", "row", 1, "FontSize"], ["src", "assets/images/QR_code.png", "alt", "account", 1, "scanner"], [1, "FontSize"], ["src", "assets/images/Appointment_ID.png", "alt", "Appointment ID", 1, "appointmentIcon"], ["fxFlex", "50%", 1, "right_container"], ["src", "assets/images/Walk.png", 1, "img1"]], template: function WalkInCustomerComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function WalkInCustomerComponent_Template_input_keypress_14_listener($event) { return ctx.letterOnly($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keypress", function WalkInCustomerComponent_Template_input_keypress_25_listener($event) { return ctx._keyPress($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalkInCustomerComponent_Template_button_click_27_listener() { return ctx.goToOtp(ctx.loginForm.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Continue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "fieldset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "legend", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Already having a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalkInCustomerComponent_Template_button_click_33_listener() { return ctx.goToLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "b", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalkInCustomerComponent_Template_button_click_37_listener() { return ctx.goToScanner(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "b", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "QR code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WalkInCustomerComponent_Template_button_click_41_listener() { return ctx.goToAppointment(); });
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bankName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.loginForm.invalid ? "beforeContinue" : "afterContinue")("disabled", ctx.loginForm.invalid || ctx.cntdis);
    } }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCard"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultFlexDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatLabel"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_11__["MatPrefix"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_10__["DefaultLayoutGapDirective"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _otp_onlynumber_directive__WEBPACK_IMPORTED_MODULE_13__["OnlynumberDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_14__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__["DefaultClassDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButton"]], styles: [".login_page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n\n.login_page[_ngcontent-%COMP%]::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 50%;\n  height: 100%;\n  background-color: #3858cb0d;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%] {\n  width: 70%;\n  height: 530px;\n  min-height: 500px;\n  border-radius: 30px 0 0 30px;\n  padding: 0;\n  margin: 2rem auto;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%] {\n  overflow: scroll;\n  padding: 3rem 1.5rem;\n}\n\n@media (max-width: 678px) {\n  .login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%] {\n    padding: 2rem 0.7rem;\n  }\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 5px;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #ccc;\n  border-radius: 40px;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   .border-text[_ngcontent-%COMP%] {\n  margin-top: 22px;\n  text-align: left;\n  font-family: \"Phosphate\";\n  font-size: 18px;\n  color: #004c97;\n  font: normal normal normal 25px/31px Phosphate;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   .card-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 20px;\n  font-weight: bold;\n  padding: 10px 0px;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .number[_ngcontent-%COMP%] {\n  color: #7e84a3;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .phoneCard[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 5px;\n  height: 45px;\n  margin: 0.75rem 0;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .phoneCard[_ngcontent-%COMP%]   .vertical-line[_ngcontent-%COMP%] {\n  width: 2px;\n  background-color: #2c2c2c1f;\n  height: 50px;\n  margin-top: -17px;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .phoneCard[_ngcontent-%COMP%]   .no-outline[_ngcontent-%COMP%] {\n  outline: none;\n  border: none;\n  height: 20px;\n  width: 80%;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .login_btn[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 30px;\n  height: 35px;\n  margin: 1.7rem 0;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .login_btn.afterContinue[_ngcontent-%COMP%] {\n  border-color: transparent;\n  color: #fff;\n  border: 1px;\n  background: transparent linear-gradient(90deg, #051a2d 0%, #004c97 100%);\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%] {\n  margin-right: 0;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   fieldset[_ngcontent-%COMP%]   legend[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .clickHereText[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .clickHereText[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  max-width: 50%;\n  flex-grow: 1;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-right: 10px;\n  margin-bottom: 10px;\n}\n\n@media (max-width: 678px) {\n  .login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .clickHereText[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .left_container[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .clickHereText[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   b[_ngcontent-%COMP%] {\n  font-size: 8px;\n  text-align: center;\n  padding: 0 5px;\n  width: 35%;\n  line-height: 1.4;\n  white-space: break-spaces;\n  align-items: center;\n  display: flex;\n  justify-content: center;\n}\n\n.login_page[_ngcontent-%COMP%]   mat-card.card_container[_ngcontent-%COMP%]   .right_container[_ngcontent-%COMP%]   .img1[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n\n  .clickHereText button .mat-button-wrapper {\n  width: 100%;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcd2Fsay1pbi1jdXN0b21lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBTkE7RUFPSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsVUFBVTtFQUNWLFlBQVk7RUFDWiwyQkFBMkI7QUFHL0I7O0FBaEJBO0VBZ0JJLFVBQVU7RUFDVixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLDRCQUE0QjtFQUM1QixVQUFVO0VBQ1YsaUJBQWlCO0FBSXJCOztBQXpCQTtFQXVCTSxnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBTTFCOztBQUxNO0VBekJOO0lBMEJRLG9CQUFvQjtFQVMxQjtBQUNGOztBQXBDQTtFQTZCUSxVQUFVO0FBV2xCOztBQXhDQTtFQWdDVSxzQkFBc0I7RUFDdEIsbUJBQW1CO0FBWTdCOztBQTdDQTtFQXFDUSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLHdCQUF3QjtFQUN4QixlQUFlO0VBQ2YsY0FBYztFQUNkLDhDQUE4QztBQVl0RDs7QUF0REE7RUE2Q1EsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsaUJBQWlCO0FBYXpCOztBQTdEQTtFQW9EVSxjQUFjO0FBYXhCOztBQWpFQTtFQXVEVSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixpQkFBaUI7QUFjM0I7O0FBeEVBO0VBNERZLFVBQVU7RUFDViwyQkFBMkI7RUFDM0IsWUFBWTtFQUNaLGlCQUFpQjtBQWdCN0I7O0FBL0VBO0VBa0VZLGFBQWE7RUFDYixZQUFZO0VBQ1osWUFBWTtFQUNaLFVBQVU7QUFpQnRCOztBQXRGQTtFQXlFVSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixnQkFBZ0I7QUFpQjFCOztBQTdGQTtFQThFWSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLFdBQVc7RUFDWCx3RUFDa0Q7QUFrQjlEOztBQXBHQTtFQXNGVSxlQUFlO0FBa0J6Qjs7QUF4R0E7RUF3RlksZUFBZTtBQW9CM0I7O0FBNUdBO0VBNEZVLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixlQUFlO0FBb0J6Qjs7QUFwSEE7RUFrR1ksY0FBYztFQUNkLFlBQVk7RUFDWixVQUFVO0VBQ1YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQXNCL0I7O0FBckJZO0VBMUdaO0lBMkdjLGVBQWU7RUF5QjNCO0FBQ0Y7O0FBcklBO0VBOEdjLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsdUJBQXVCO0FBMkJyQzs7QUFqSkE7RUE4SFEsWUFBWTtFQUNaLFdBQVc7QUF1Qm5COztBQWpCQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0FBb0JmIiwiZmlsZSI6IndhbGstaW4tY3VzdG9tZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW5fcGFnZSB7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM4NThjYjBkO1xyXG4gIH1cclxuICBtYXQtY2FyZC5jYXJkX2NvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgaGVpZ2h0OiA1MzBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDUwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweCAwIDAgMzBweDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDJyZW0gYXV0bztcclxuICAgIC5sZWZ0X2NvbnRhaW5lciB7XHJcbiAgICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICAgIHBhZGRpbmc6IDNyZW0gMS41cmVtO1xyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNjc4cHgpIHtcclxuICAgICAgICBwYWRkaW5nOiAycmVtIDAuN3JlbTtcclxuICAgICAgfVxyXG4gICAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgd2lkdGg6IDVweDtcclxuICAgICAgICAmLXRodW1iIHtcclxuICAgICAgICAgIC8vIHdpZHRoOiA4cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NjO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmJvcmRlci10ZXh0IHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMnB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUGhvc3BoYXRlXCI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDA0Yzk3O1xyXG4gICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbm9ybWFsIDI1cHgvMzFweCBQaG9zcGhhdGU7XHJcbiAgICAgIH1cclxuICAgICAgLmNhcmQtdGl0bGUge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcclxuICAgICAgfVxyXG4gICAgICBmb3JtIHtcclxuICAgICAgICAubnVtYmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAjN2U4NGEzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGhvbmVDYXJkIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwLjc1cmVtIDA7XHJcbiAgICAgICAgICAudmVydGljYWwtbGluZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAycHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYzJjMmMxZjtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTdweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5uby1vdXRsaW5lIHtcclxuICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2dpbl9idG4ge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAxLjdyZW0gMDtcclxuICAgICAgICAgICYuYWZ0ZXJDb250aW51ZSB7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnRcclxuICAgICAgICAgICAgICBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwNTFhMmQgMCUsICMwMDRjOTcgMTAwJSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpZWxkc2V0IHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICAgIGxlZ2VuZCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNsaWNrSGVyZVRleHQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBmbGV4LWdyb3c6IDE7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjc4cHgpIHtcclxuICAgICAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYiB7XHJcbiAgICAgICAgICAgICAgZm9udC1zaXplOiA4cHg7XHJcbiAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogYnJlYWstc3BhY2VzO1xyXG4gICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJpZ2h0X2NvbnRhaW5lciB7XHJcbiAgICAgIC5pbWcxIHtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuY2xpY2tIZXJlVGV4dCBidXR0b24gLm1hdC1idXR0b24td3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WalkInCustomerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-walk-in-customer',
                templateUrl: './walk-in-customer.component.html',
                styleUrls: ['./walk-in-customer.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"] }, { type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }, { type: app_shared_services_showMessage_show_message_service__WEBPACK_IMPORTED_MODULE_8__["ShowMessageService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: app_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_7__["FingerPrintCaptureService"] }]; }, { countries: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "VQ1A":
/*!***********************************************************************!*\
  !*** ./src/app/views/sessions/branch-login/branch-login.component.ts ***!
  \***********************************************************************/
/*! exports provided: BranchLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BranchLoginComponent", function() { return BranchLoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/api.service */ "nm5K");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ng-otp-input */ "9OaD");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/flex-layout/extended */ "znSr");





















const _c0 = ["otpvalue"];
function BranchLoginComponent_mat_option_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", data_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r5, " ");
} }
function BranchLoginComponent_div_34_mat_form_field_10_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", data_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r9, " ");
} }
function BranchLoginComponent_div_34_mat_form_field_10_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BranchLoginComponent_div_34_mat_form_field_10_mat_option_4_Template, 2, 2, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BranchLoginComponent_div_34_mat_form_field_10_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.getOtp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Get OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.emailValue);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx_r6.getOTpflag)("disabled", ctx_r6.otpdis);
} }
function BranchLoginComponent_div_34_mat_form_field_11_mat_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", data_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r13, " ");
} }
function BranchLoginComponent_div_34_mat_form_field_11_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-form-field", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-select", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BranchLoginComponent_div_34_mat_form_field_11_mat_option_4_Template, 2, 2, "mat-option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BranchLoginComponent_div_34_mat_form_field_11_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.getOtp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Get OTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.mobileNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r7.otpdis);
} }
function BranchLoginComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "OTP Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-radio-group", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-radio-button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BranchLoginComponent_div_34_Template_mat_radio_button_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.onChangeValue($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "E-mail");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-radio-button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BranchLoginComponent_div_34_Template_mat_radio_button_change_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.onChangeValue($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Mobile");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BranchLoginComponent_div_34_mat_form_field_10_Template, 8, 3, "mat-form-field", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BranchLoginComponent_div_34_mat_form_field_11_Template, 8, 2, "mat-form-field", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r2.checked);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r2.mobilechk);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.optionType == 2 && ctx_r2.radioType == 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.optionType == 2 && ctx_r2.radioType == 4);
} }
function BranchLoginComponent_div_35_ng_otp_input_3_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-otp-input", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onInputChange", function BranchLoginComponent_div_35_ng_otp_input_3_Template_ng_otp_input_onInputChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r23.onOtpChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r19.ngOtpErr ? "error" : "")("config", ctx_r19.ngOtpConfig1);
} }
function BranchLoginComponent_div_35_ng_otp_input_4_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ng-otp-input", 46, 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onInputChange", function BranchLoginComponent_div_35_ng_otp_input_4_Template_ng_otp_input_onInputChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.onOtpChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r20.ngOtpErr ? "error" : "")("config", ctx_r20.ngOtpConfig2);
} }
function BranchLoginComponent_div_35_p_5_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BranchLoginComponent_div_35_p_5_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r28.resendis(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Resend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r21.otpResp && ctx_r21.cli < 3 ? "resend1" : "resend2");
} }
function BranchLoginComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BranchLoginComponent_div_35_ng_otp_input_3_Template, 2, 2, "ng-otp-input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BranchLoginComponent_div_35_ng_otp_input_4_Template, 2, 2, "ng-otp-input", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BranchLoginComponent_div_35_p_5_Template, 2, 1, "p", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Enter ", ctx_r3.optionType == 1 ? "Passcode" : "OTP", " to verify");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.optionType == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.optionType == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.optionType == 2 && ctx_r3.radioType);
} }
function BranchLoginComponent_div_36_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BranchLoginComponent_div_36_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r32.gotoLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r30.ngOtpErr || !ctx_r30.otpResp || ctx_r30.otpVal.length < ctx_r30.otpValLen ? true : false);
} }
function BranchLoginComponent_div_36_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BranchLoginComponent_div_36_button_4_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r34.gotoLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Login ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r31.ngOtpErr || ctx_r31.otpVal.length < ctx_r31.otpValLen ? true : false);
} }
function BranchLoginComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BranchLoginComponent_div_36_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r36.reset(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Reset");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BranchLoginComponent_div_36_button_3_Template, 2, 1, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BranchLoginComponent_div_36_button_4_Template, 2, 1, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.optionType == 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.optionType == 1);
} }
class BranchLoginComponent {
    constructor(formBuilder, ApiService, snack, router) {
        this.formBuilder = formBuilder;
        this.ApiService = ApiService;
        this.snack = snack;
        this.router = router;
        this.otpVal = "";
        this.otpValLen = 6;
        this.kioskCode = [];
        this.emailValue = [];
        this.mobileNo = [];
        this.ngOtpErr = false;
        this.checked = false;
        this.mobilechk = false;
        this.cli = 0;
        this.kisoksystemCode = false;
        this.kisoksystem = false;
        this.otpfield = false;
        this.otpdis = false;
        this.enablelogin = true;
        this.ngOtpConfig1 = {
            length: 6,
            allowNumbersOnly: false,
            isPasswordInput: true,
        };
        this.ngOtpConfig2 = {
            length: 6,
            allowNumbersOnly: true,
            isPasswordInput: true,
        };
    }
    ngOnInit() {
        this.fetchKioskCode();
        this.kisoksystemCode = false;
        this.kisoksystem = false;
        this.radioType = 3;
        this.cli = 0;
        this.branchLogin = this.formBuilder.group({
            branchCode: [""],
            systemCode: [""],
            emailId: [""],
            mobileNo: [""],
        });
    }
    fetchKioskCode() {
        this.ApiService.fetchKioskSystemDetails().subscribe((data) => {
            this.systemDetails = data;
            console.log(this.systemDetails);
            if (this.systemDetails) {
                for (let i = 0; i < this.systemDetails.length; i++) {
                    if (this.systemDetails[i].kioskSystemEnable == true &&
                        this.systemDetails[i].authStatus == 'A') {
                        this.kioskCode.push(this.systemDetails[i].kioskSystemCode);
                    }
                }
                console.log(this.kioskCode);
            }
            // this.kioskCode = data.map((i) => i.kioskSystemCode);
        });
    }
    changeSystemCode(event) {
        this.kisoksystemCode = true;
        console.log(event);
        this.ApiService.fetchMobileOrEmail(event.value).subscribe((data) => {
            console.log(data);
            this.emailValue = data && data.map((i) => i === null || i === void 0 ? void 0 : i.emailId);
            this.mobileNo = data && data.map((i) => i === null || i === void 0 ? void 0 : i.mobileNumber);
            this.branchLogin.get("emailId").enable();
            this.branchLogin.get("mobileNo").enable();
        });
        const branchCodeObj = this.systemDetails.find((i) => i.kioskSystemCode === event.value);
        this.branchLogin.get("branchCode").patchValue(branchCodeObj === null || branchCodeObj === void 0 ? void 0 : branchCodeObj.branchCode);
    }
    getOtp() {
        if (this.radioType == 3 && this.branchLogin.get("emailId").value) {
            this.branchLogin.get("emailId").disable();
            this.otpfield = true;
            this.ApiService.generateOtp({
                source: "test",
                source_key: "email",
                source_value: this.branchLogin.get("emailId").value,
                kioskSystemCode: this.branchLogin.get("systemCode").value,
            }).subscribe((resp) => {
                var _a, _b;
                console.log(resp);
                this.otpResp = (_b = (_a = resp === null || resp === void 0 ? void 0 : resp.data) === null || _a === void 0 ? void 0 : _a.otpVal) === null || _b === void 0 ? void 0 : _b.token;
                this.snack.open("OTP sent!", "OK", {
                    duration: 3000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right',
                });
                this.branchLogin.get("emailId").enable();
                this.otpdis = true;
            });
        }
        if (this.radioType == 4 && this.branchLogin.get("mobileNo").value) {
            this.branchLogin.get("mobileNo").disable();
            this.otpfield = true;
            this.ApiService.generateOtp({
                source: "test",
                source_key: "mobile",
                source_value: this.branchLogin.get("mobileNo").value,
            }).subscribe((resp) => {
                var _a, _b;
                console.log(resp);
                this.otpResp = (_b = (_a = resp === null || resp === void 0 ? void 0 : resp.data) === null || _a === void 0 ? void 0 : _a.otpVal) === null || _b === void 0 ? void 0 : _b.token;
                this.branchLogin.get("mobileNo").enable();
                this.snack.open("OTP sent!", "OK", {
                    duration: 3000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right',
                });
                this.otpdis = true;
            });
        }
    }
    getPasscode() {
        // this.ApiService.generateOtp().subscribe((data) =>
        //  {
        //   this.systemDetails = data;
        // });
    }
    onOtpChange(value) {
        this.otpVal = value;
        if (this.otpResp && this.otpVal.length == this.otpValLen) {
            if (this.otpVal != this.otpResp) {
                this.ngOtpErr = true;
                this.snack.open("Invalid OTP!", "OK", {
                    duration: 3000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right',
                    panelClass: ["error-msg"],
                });
            }
            else {
                this.ngOtpErr = false;
            }
        }
    }
    gotoLogin() {
        let payload;
        if (this.optionType == 1) {
            payload = {
                loginType: "passcode",
                branchCode: this.branchLogin.get("branchCode").value,
                kioskSystemCode: this.branchLogin.get("systemCode").value,
                passcode: this.otpVal,
            };
        }
        else {
            if (this.radioType == 3) {
                payload = {
                    loginType: "otp",
                    branchCode: this.branchLogin.get("branchCode").value,
                    kioskSystemCode: this.branchLogin.get("systemCode").value,
                    otp: this.otpVal,
                    emailId: this.branchLogin.get("emailId").value,
                    sourceKey: "email",
                    sourceValue: this.branchLogin.get("emailId").value,
                };
            }
            else {
                payload = {
                    loginType: "otp",
                    branchCode: this.branchLogin.get("branchCode").value,
                    kioskSystemCode: this.branchLogin.get("systemCode").value,
                    otp: this.otpVal,
                    mobileNumber: this.branchLogin.get("mobileNo").value,
                    sourceKey: "mobile",
                    sourceValue: this.branchLogin.get("mobileNo").value,
                };
            }
        }
        this.ApiService.goToLogin(payload).subscribe((resp) => {
            console.log(resp);
            if (resp) {
                localStorage.setItem('LOGINBRANCHCODE', resp.kioskSystemCode);
            }
            this.router.navigateByUrl("/sessions/login");
        }, (error) => {
            console.log(error.status);
            this.errorStatus = error.status;
            if (this.errorStatus == 500) {
                console.log(error.status);
                //  this.errorStatus = error.status;
                this.snack.open(`Incorrect Passcode. Please try again.`, 'OK', {
                    duration: 4000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'
                });
            }
        });
    }
    onChangeOption(event) {
        this.optionType = event.value;
        console.log(this.optionType);
        // this.radioType = "";
        if (this.optionType == 2 && this.branchLogin.value.mobileNo != "") {
            this.radioType = 3;
            this.branchLogin.controls.mobileNo.setValue("");
            this.mobilechk = false;
            this.checked = true;
            this.otpfield = false;
            this.otpdis = false;
            console.log(this.branchLogin.value.mobileNo);
        }
        else if (this.optionType == 2 && this.branchLogin.value.emailId != "") {
            this.radioType = 3;
            this.branchLogin.controls.emailId.setValue("");
            this.mobilechk = false;
            this.checked = true;
            this.otpfield = false;
            this.otpdis = false;
        }
        else {
            this.radioType = 3;
            this.checked = true;
            this.mobilechk = false;
            console.log();
        }
    }
    onChangeValue(event) {
        var _a;
        if (event.value == 3 && this.branchLogin.value.mobileNo != "") {
            this.radioType = event.value;
            this.branchLogin.controls.mobileNo.setValue("");
            this.otpfield = false;
            this.otpdis = false;
        }
        else if (event.value == 4 && this.branchLogin.value.emailId != "") {
            this.radioType = event.value;
            this.branchLogin.controls.emailId.setValue("");
            this.otpfield = false;
            this.otpdis = false;
        }
        else {
            this.radioType = event.value;
            console.log(event.value);
        }
        (_a = this.newotp) === null || _a === void 0 ? void 0 : _a.otpForm.reset();
    }
    reset() {
        if (this.otpfield == false) {
            this.branchLogin.reset();
            this.radioType = 3;
            this.optionType = "";
            this.kisoksystemCode = false;
            this.otpdis = false;
        }
        else {
            this.branchLogin.reset();
            this.radioType = 3;
            this.newotp.otpForm.reset();
            this.optionType = "";
            this.otpResp = undefined;
            this.cli = 0;
            this.kisoksystemCode = false;
            this.otpfield = false;
            this.otpdis = false;
        }
    }
    resendis() {
        if (this.otpResp !== undefined) {
            this.cli++;
            console.log("otpresp is not null", this.otpResp);
            if (this.cli > 3) {
                console.log("for disable_is working", this.cli);
            }
            else {
                this.getOtp();
                console.log("for disable");
            }
        }
        else {
            //this.cli = 0;
            console.log("otprsep is null", this.otpResp);
        }
    }
}
BranchLoginComponent.ɵfac = function BranchLoginComponent_Factory(t) { return new (t || BranchLoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
BranchLoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BranchLoginComponent, selectors: [["app-branch-login"]], viewQuery: function BranchLoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.newotp = _t.first);
    } }, decls: 37, vars: 7, consts: [[1, "branch_login_page"], ["fxLayout", "row", "fxLayoutAlign", "space-between center"], [1, "logo"], [1, "welcome"], [1, "login"], ["fxLayout", "column", 3, "formGroup"], ["fxLayoutGap", "4%", "fxLayout", "row", "fxLayoutAlign", "center", 1, "form_container"], ["appearance", "outline", "fxFlex", "50%", 2, "border-radius", "50px"], [1, "totalAmount", "fieldtext"], ["name", "systemCode", "formControlName", "systemCode", 1, "full_width_select", 3, "selectionChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "totalAmount", "fieldtext", 2, "color", "#004C97"], ["formControlName", "branchCode", "matInput", "", "readonly", ""], ["fxLayoutGap", "4%", "fxLayout", "column", "fxLayoutAlign", "center", 1, "form_container"], [1, "field_heading"], ["fxLayout", "row", "fxLayoutGap", "4%", "name", "fontStyle", "aria-label", "Font Style"], ["group", "matButtonToggleGroup"], ["value", "1", "fxFlex", "50%", 1, "button-toggle", 2, "border-radius", "12px", 3, "disabled", "change"], ["fxFlex", "", 1, "passfield"], ["id", "dot"], ["fxFlex", "", "fxLayoutAlign", "center center", 1, "text"], ["value", "2", "fxFlex", "50%", 1, "button-toggle", 2, "border-radius", "12px", 3, "disabled", "change"], ["fxFlex", "", 1, "otpfield"], ["fxFlex", "", "fxLayoutAlign", "center center", 1, "otptext"], ["class", "form_container option_row", "fxLayout", "row", "fxLayoutGap", "4%", "fxLayoutAlign", "center", 4, "ngIf"], ["class", "ng_otp_field", "fxLayout", "column", "fxLayoutAlign", "center center", 4, "ngIf"], ["fxLayout", "row", "fxLayoutGap", "4%", "fxLayoutAlign", "center", "class", "btn_wrapper", 4, "ngIf"], [3, "value"], ["fxLayout", "row", "fxLayoutGap", "4%", "fxLayoutAlign", "center", 1, "form_container", "option_row"], ["fxFlex", "50%"], [1, "field_heading_text"], ["fxLayout", "row"], ["value", "3", "fxFlex", "50%", 3, "checked", "change"], ["value", "4", "fxFlex", "50%", 3, "checked", "change"], ["appearance", "outline", "class", "otp_select_field", 4, "ngIf"], ["appearance", "outline", 1, "otp_select_field"], [2, "margin-top", "1px"], ["name", "emailId", "formControlName", "emailId", 1, "arrow-design"], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "Nextbtn", 3, "hidden", "disabled", "click"], [1, "submitBtn"], ["name", "mobileNo", "formControlName", "mobileNo"], ["mat-raised-button", "", "color", "primary", "type", "button", 1, "Nextbtn", 3, "disabled", "click"], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "ng_otp_field"], [1, "verifycode"], [3, "ngClass", "config", "onInputChange", 4, "ngIf"], [3, "ngClass", "click", 4, "ngIf"], [3, "ngClass", "config", "onInputChange"], ["otpvalue", ""], [3, "ngClass", "click"], ["fxLayout", "row", "fxLayoutGap", "4%", "fxLayoutAlign", "center", 1, "btn_wrapper"], ["mat-flat-button", "", "fxFlex", "30%", 1, "branch-reset", 3, "click"], ["mat-flat-button", "", "class", "branch_login", "fxFlex", "70%", 3, "disabled", "click", 4, "ngIf"], ["mat-flat-button", "", "fxFlex", "70%", 1, "branch_login", 3, "disabled", "click"]], template: function BranchLoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "DemoBank");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Welcome to DemoBank!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "KIOSK Branch Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "KIOSK System code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-select", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectionChange", function BranchLoginComponent_Template_mat_select_selectionChange_13_listener($event) { return ctx.changeSystemCode($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BranchLoginComponent_mat_option_14_Template, 2, 2, "mat-option", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Branch Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Choose the option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-button-toggle-group", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-button-toggle", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BranchLoginComponent_Template_mat_button_toggle_change_24_listener($event) { return ctx.onChangeOption($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Passcode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "mat-button-toggle", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function BranchLoginComponent_Template_mat_button_toggle_change_29_listener($event) { return ctx.onChangeOption($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "OTP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, BranchLoginComponent_div_34_Template, 12, 4, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](35, BranchLoginComponent_div_35_Template, 6, 4, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, BranchLoginComponent_div_36_Template, 5, 2, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.branchLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.kioskCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.kisoksystemCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx.kisoksystemCode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.optionType == 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.optionType == 1 || ctx.optionType == 2 && ctx.radioType && ctx.otpfield);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.optionType);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultFlexDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_7__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_10__["MatButtonToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioGroup"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_12__["MatRadioButton"], _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButton"], ng_otp_input__WEBPACK_IMPORTED_MODULE_14__["NgOtpInputComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_15__["DefaultClassDirective"]], styles: [".branch_login_page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  background-image: url('branch-login-background.png');\n  background-position: center;\n  background-size: 100% 100%;\n  padding: 0 4rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   header[_ngcontent-%COMP%] {\n  margin: 1rem 0;\n  margin-top: 2rem;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p.logo[_ngcontent-%COMP%] {\n  font: normal normal medium Big Caslon;\n  font-size: 28px;\n  color: #004B94;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p.welcome[_ngcontent-%COMP%] {\n  color: #000;\n  font-size: 33px;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 550;\n  letter-spacing: 0.28px;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   p.login[_ngcontent-%COMP%] {\n  font-size: 17px;\n  font-family: \"Poppins\";\n  color: var(--unnamed-color-051a2d);\n  opacity: 1;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: 0 auto;\n  margin-bottom: 1rem;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%]   .field_heading[_ngcontent-%COMP%] {\n  margin-bottom: 10px !important;\n  margin-left: 20px;\n  font-size: 16px;\n  color: #051A2D;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%]   .field_heading_text[_ngcontent-%COMP%] {\n  margin-bottom: 10px !important;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form_container[_ngcontent-%COMP%]   .fieldtext[_ngcontent-%COMP%] {\n  color: #004C97;\n  top: 135px;\n  left: 235px;\n  width: 102px;\n  height: 23px;\n  text-align: left;\n  font: normal normal medium 16px/25px Poppins;\n  letter-spacing: -0.25px;\n  opacity: 1;\n  font-weight: 500px;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form_container.option_row[_ngcontent-%COMP%]   .otp_select_field[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form_container.option_row[_ngcontent-%COMP%]   .otp_select_field[_ngcontent-%COMP%]   mat-select[_ngcontent-%COMP%] {\n  width: 70%;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form_container.option_row[_ngcontent-%COMP%]   .otp_select_field[_ngcontent-%COMP%]   button.Nextbtn[_ngcontent-%COMP%] {\n  height: 44px;\n  background: transparent linear-gradient(90deg, #051a2d 0%, #004c97 100%) 0% 0% no-repeat padding-box;\n  border-radius: 16px !important;\n  position: absolute;\n  top: 53%;\n  right: -2px;\n  transform: translateY(-50%);\n  z-index: 9;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .form_container.option_row[_ngcontent-%COMP%]   .otp_select_field[_ngcontent-%COMP%]   button.Nextbtn[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 11px;\n  margin-top: 5px;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .ng_otp_field[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .ng_otp_field[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: \"Poppins\", sans-serif;\n  margin-bottom: 1rem;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]   .ng_otp_field[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-family: \"Poppins\", sans-serif;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   .btn_wrapper[_ngcontent-%COMP%] {\n  width: 70%;\n  margin: auto;\n  padding: 2rem 0;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   .btn_wrapper[_ngcontent-%COMP%]   .branch-reset[_ngcontent-%COMP%] {\n  height: 43px;\n  border-radius: 97px;\n  background: #fffefe 0% 0% no-repeat padding-box;\n  box-shadow: 0px 3px 15px #00000017;\n  font-weight: 800;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   .btn_wrapper[_ngcontent-%COMP%]   .branch_login[_ngcontent-%COMP%] {\n  height: 43px;\n  border-radius: 97px;\n  background: transparent linear-gradient(90deg, #051a2d 0%, #004c97 100%) 0% 0% no-repeat padding-box;\n  border: 1px solid #00000000;\n  color: #ffffff;\n}\n\n.branch_login_page[_ngcontent-%COMP%]   .btn_wrapper[_ngcontent-%COMP%]   .branch_login.mat-button-disabled[_ngcontent-%COMP%] {\n  background: #B4B4B4;\n}\n\n \n.branch_login_page\n.mat-form-field-appearance-outline\n.mat-form-field-outline {\n  background-color: white;\n  border-radius: 10px;\n  height: 60px;\n}\n\n  .ng_otp_field .otp-input:focus {\n  outline-color: #004c97;\n}\n\n  .otp-input {\n  color: #004c97;\n}\n\n  .ng_otp_field ng-otp-input.error .otp-input {\n  color: #b20000;\n  border: solid 1px #ff0000 !important;\n}\n\n  .ng_otp_field ng-otp-input.error .otp-input:focus {\n  outline-color: #ff0000;\n}\n\n  .error-msg {\n  color: red !important;\n  border: 2px solid #b20000;\n  background: #FFEDED !important;\n}\n\n#dot[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n  background-color: #FFFFFF;\n  border-radius: 50%;\n  border: 5px solid;\n  margin-top: 15px !important;\n  margin-bottom: 12px;\n}\n\n.text[_ngcontent-%COMP%] {\n  letter-spacing: -0.44px;\n  margin-top: 4px !important;\n}\n\n.otptext[_ngcontent-%COMP%] {\n  letter-spacing: -0.44px;\n  margin-top: 4px !important;\n}\n\n  .mat-form-field-outline .mat-select {\n  color: #58657D65 !important;\n}\n\n  .mat-primary.mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #131523 !important;\n}\n\n  .mat-primary .mat-form-field-outline .mat-select-arrow {\n  color: #58657D65 !important;\n}\n\n  .mat-form-field-appearance-outline .mat-form-field-infix {\n  font-weight: 500;\n}\n\n.button-toggle[_ngcontent-%COMP%] {\n  color: #B4B4B4;\n  letter-spacing: -0.44px;\n  font-size: 16px;\n}\n\n  .egret-navy .mat-button-toggle-checked.mat-button-toggle-appearance-standard {\n  color: #004C97 !important;\n  border: 1px solid #B4B4B4;\n  background-color: #FFFFFF;\n}\n\n.verifycode[_ngcontent-%COMP%] {\n  color: #131523;\n  font-weight: 600;\n  letter-spacing: 0.17px;\n}\n\n  .otp-input {\n  border: solid 1px #ffffff !important;\n}\n\n  .mat-radio-inner-circle {\n  background-color: #004C97 !important;\n}\n\n  .mat-radio-button.mat-accent.mat-radio-checked .mat-radio-outer-circle {\n  border-color: #004C97 !important;\n  border: solid 1px !important;\n}\n\n.resend1[_ngcontent-%COMP%] {\n  color: #131523;\n  font-weight: bold !important;\n}\n\n.resend2[_ngcontent-%COMP%] {\n  color: #b4b4b4;\n}\n\n  .egret-navy .mat-select-value {\n  color: #004C97 !important;\n}\n\n  .egret-navy .mat-input-element {\n  color: #004C97 !important;\n}\n\n.otpfield[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n@media (max-width: 15%) {\n  .otpfield[_ngcontent-%COMP%] {\n    max-width: 15%;\n  }\n}\n\n.passfield[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n}\n\n@media (max-width: 24%) {\n  .passfield[_ngcontent-%COMP%] {\n    max-width: 24%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYnJhbmNoLWxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9EQUE4RTtFQUM5RSwyQkFBMkI7RUFDM0IsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQVJBO0VBU0ksY0FBYztFQUNkLGdCQUFnQjtBQUdwQjs7QUFiQTtFQVlNLGdCQUFnQjtBQUt0Qjs7QUFqQkE7RUFjUSxxQ0FBcUM7RUFDckMsZUFBZTtFQUNmLGNBQWM7QUFPdEI7O0FBdkJBO0VBbUJRLFdBQVc7RUFDWCxlQUFlO0VBQ2Ysa0NBQWtDO0VBQ2xDLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFROUI7O0FBL0JBO0VBMEJRLGVBQWU7RUFDZixzQkFBc0I7RUFFdEIsa0NBQWtDO0VBQ2xDLFVBQVU7QUFRbEI7O0FBdENBO0VBb0NNLFVBQVU7RUFDVixjQUFjO0VBQ2QsbUJBQW1CO0FBTXpCOztBQTVDQTtFQXlDUSw4QkFBOEI7RUFDOUIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixjQUFjO0FBT3RCOztBQW5EQTtFQStDUSw4QkFBOEI7QUFRdEM7O0FBdkRBO0VBa0RRLFlBQVk7QUFTcEI7O0FBM0RBO0VBcURRLGNBQWM7RUFDZCxVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7RUFDWixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLDRDQUE0QztFQUM1Qyx1QkFBdUI7RUFDdkIsVUFBVTtFQUNWLGtCQUFrQjtBQVUxQjs7QUF4RUE7RUFrRVUsV0FBVztFQUNYLGtCQUFrQjtBQVU1Qjs7QUE3RUE7RUFzRVksVUFBVTtBQVd0Qjs7QUFqRkE7RUF5RVksWUFBWTtFQUNaLG9HQUFvRztFQUNwRyw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixXQUFXO0VBQ1gsMkJBQTJCO0VBQzNCLFVBQVU7QUFZdEI7O0FBNUZBO0VBa0ZjLGVBQWU7RUFDZixlQUFlO0FBYzdCOztBQWpHQTtFQTBGTSxnQkFBZ0I7QUFXdEI7O0FBckdBO0VBNEZRLGtDQUFrQztFQUNsQyxtQkFBbUI7QUFhM0I7O0FBMUdBO0VBaUdRLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFhdkI7O0FBakhBO0VBeUdJLFVBQVU7RUFDVixZQUFZO0VBQ1osZUFBZTtBQVluQjs7QUF2SEE7RUE2R00sWUFBWTtFQUNaLG1CQUFtQjtFQUNuQiwrQ0FBK0M7RUFDL0Msa0NBQWtDO0VBQ2xDLGdCQUFnQjtBQWN0Qjs7QUEvSEE7RUFvSE0sWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixvR0FDNkI7RUFDN0IsMkJBQTJCO0VBQzNCLGNBQWM7QUFjcEI7O0FBdklBO0VBMkhRLG1CQUFtQjtBQWdCM0I7O0FBVkE7Ozs7RUFJRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFhZDs7QUFYQTtFQUlJLHNCQUFzQjtBQVcxQjs7QUFQQTtFQUNFLGNBQWM7QUFVaEI7O0FBUEE7RUFDRSxjQUFjO0VBQ2Qsb0NBQW9DO0FBVXRDOztBQVpBO0VBSUksc0JBQXNCO0FBWTFCOztBQVJBO0VBQ0UscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6Qiw4QkFBOEI7QUFXaEM7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLDJCQUEyQjtFQUMzQixtQkFBbUI7QUFFckI7O0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsMEJBQTBCO0FBRTVCOztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDBCQUEwQjtBQUU1Qjs7QUFDQTtFQUNFLDJCQUEyQjtBQUU3Qjs7QUFBQTtFQUNFLHlCQUF5QjtBQUczQjs7QUFEQTtFQUNFLDJCQUEyQjtBQUk3Qjs7QUFGQTtFQUNFLGdCQUFnQjtBQUtsQjs7QUFIQTtFQUNFLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsZUFBZTtBQU1qQjs7QUFKQTtFQUNFLHlCQUF5QjtFQUN6Qix5QkFBeUI7RUFDekIseUJBQXlCO0FBTzNCOztBQUxBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFReEI7O0FBTkE7RUFDRSxvQ0FBb0M7QUFTdEM7O0FBUEE7RUFDRSxvQ0FBb0M7QUFVdEM7O0FBUkE7RUFDRSxnQ0FBaUM7RUFDakMsNEJBQTRCO0FBVzlCOztBQVRBO0VBQ0UsY0FBZTtFQUNmLDRCQUE0QjtBQVk5Qjs7QUFWQTtFQUNDLGNBQWM7QUFhZjs7QUFYQTtFQUNFLHlCQUEwQjtBQWM1Qjs7QUFaQTtFQUNFLHlCQUEwQjtBQWU1Qjs7QUFiQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFnQnJCOztBQWZFO0VBSEY7SUFJSSxjQUFjO0VBbUJoQjtBQUNGOztBQWpCQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFvQnJCOztBQW5CRTtFQUhGO0lBSUksY0FBYztFQXVCaEI7QUFDRiIsImZpbGUiOiJicmFuY2gtbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnJhbmNoX2xvZ2luX3BhZ2Uge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvYnJhbmNoLWxvZ2luLWJhY2tncm91bmQucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICBwYWRkaW5nOiAwIDRyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlYWRlciB7XHJcbiAgICBtYXJnaW46IDFyZW0gMDtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgJi5sb2dvIHtcclxuICAgICAgICBmb250OiBub3JtYWwgbm9ybWFsIG1lZGl1bSBCaWcgQ2FzbG9uO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICBjb2xvcjogIzAwNEI5NDtcclxuICAgICAgfVxyXG4gICAgICAmLndlbGNvbWUge1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzNweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDU1MDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4yOHB4O1xyXG4gICAgICB9XHJcbiAgICAgICYubG9naW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zXCI7XHJcbiAgICAgICAgLy8gZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICBjb2xvcjogdmFyKC0tdW5uYW1lZC1jb2xvci0wNTFhMmQpO1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZm9ybSB7XHJcbiAgICAuZm9ybV9jb250YWluZXIge1xyXG4gICAgICB3aWR0aDogNzAlO1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuXHJcbiAgICAgIC5maWVsZF9oZWFkaW5nIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjMDUxQTJEO1xyXG4gICAgICB9XHJcbiAgICAgIC5maWVsZF9oZWFkaW5nX3RleHQge1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHggIWltcG9ydGFudDtcclxuICAgICAgfVxyXG4gICAgICBtYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCB7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICB9XHJcbiAgICAgIC5maWVsZHRleHQge1xyXG4gICAgICAgIGNvbG9yOiAjMDA0Qzk3O1xyXG4gICAgICAgIHRvcDogMTM1cHg7XHJcbiAgICAgICAgbGVmdDogMjM1cHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMnB4O1xyXG4gICAgICAgIGhlaWdodDogMjNweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIGZvbnQ6IG5vcm1hbCBub3JtYWwgbWVkaXVtIDE2cHgvMjVweCBQb3BwaW5zO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAtMC4yNXB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMHB4O1xyXG4gICAgICB9XHJcbiAgICAgICYub3B0aW9uX3JvdyB7XHJcbiAgICAgICAgLm90cF9zZWxlY3RfZmllbGQge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgbWF0LXNlbGVjdCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBidXR0b24uTmV4dGJ0biB7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDRweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjMDUxYTJkIDAlLCAjMDA0Yzk3IDEwMCUpIDAlIDAlIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogNTMlO1xyXG4gICAgICAgICAgICByaWdodDogLTJweDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubmdfb3RwX2ZpZWxkIHtcclxuICAgICAgbWFyZ2luLXRvcDogMnJlbTtcclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnNcIiwgc2Fucy1zZXJpZjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIC8vIGNvbG9yOiAjYjRiNGI0O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiUG9wcGluc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5idG5fd3JhcHBlciB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcGFkZGluZzogMnJlbSAwO1xyXG4gICAgLmJyYW5jaC1yZXNldCB7XHJcbiAgICAgIGhlaWdodDogNDNweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogOTdweDtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZmVmZSAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAzcHggMTVweCAjMDAwMDAwMTc7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICB9XHJcbiAgICAuYnJhbmNoX2xvZ2luIHtcclxuICAgICAgaGVpZ2h0OiA0M3B4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA5N3B4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwNTFhMmQgMCUsICMwMDRjOTcgMTAwJSlcclxuICAgICAgICAwJSAwJSBuby1yZXBlYXQgcGFkZGluZy1ib3g7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDAwMDtcclxuICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICYubWF0LWJ1dHRvbi1kaXNhYmxlZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0I0QjRCNDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwXHJcbiAgLmJyYW5jaF9sb2dpbl9wYWdlXHJcbiAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZVxyXG4gIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGhlaWdodDogNjBweDtcclxufVxyXG46Om5nLWRlZXAgLm5nX290cF9maWVsZCAub3RwLWlucHV0IHtcclxuICAvLyBjb2xvcjogIzAwNGM5NztcclxuICAvLyBib3JkZXI6IHNvbGlkIDFweCAjMDA0Yzk3ICFpbXBvcnRhbnQ7XHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lLWNvbG9yOiAjMDA0Yzk3O1xyXG4gIH1cclxufVxyXG5cclxuOjpuZy1kZWVwIC5vdHAtaW5wdXQge1xyXG4gIGNvbG9yOiAjMDA0Yzk3O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm5nX290cF9maWVsZCBuZy1vdHAtaW5wdXQuZXJyb3IgLm90cC1pbnB1dCB7XHJcbiAgY29sb3I6ICNiMjAwMDA7XHJcbiAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmMDAwMCAhaW1wb3J0YW50O1xyXG4gICY6Zm9jdXMge1xyXG4gICAgb3V0bGluZS1jb2xvcjogI2ZmMDAwMDtcclxuICB9XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuZXJyb3ItbXNnIHtcclxuICBjb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI2IyMDAwMDtcclxuICBiYWNrZ3JvdW5kOiAjRkZFREVEICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8vIDo6bmctZGVlcCAubWF0LWljb257XHJcbi8vICAgbWFyZ2luLWxlZnQ6IDIwcHggIWltcG9ydGFudCA7XHJcblxyXG4vLyB9XHJcblxyXG4vLyA6Om5nLWRlZXAgLm1hdC1idXR0b24tZm9jdXMtb3ZlcmxheSB7XHJcbi8vICAgZGlzcGxheTogbm9uZTtcclxuLy8gfVxyXG5cclxuI2RvdHtcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgYm9yZGVyOiA1cHggc29saWQ7XHJcbiAgbWFyZ2luLXRvcDogMTVweCAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbn1cclxuXHJcbi50ZXh0e1xyXG4gIGxldHRlci1zcGFjaW5nOiAtMC40NHB4O1xyXG4gIG1hcmdpbi10b3A6IDRweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4ub3RwdGV4dHtcclxuICBsZXR0ZXItc3BhY2luZzogLTAuNDRweDtcclxuICBtYXJnaW4tdG9wOiA0cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtb3V0bGluZSAubWF0LXNlbGVjdCAge1xyXG4gIGNvbG9yOiAjNTg2NTdENjUgIWltcG9ydGFudDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1wcmltYXJ5Lm1hdC1vcHRpb24ubWF0LXNlbGVjdGVkOm5vdCgubWF0LW9wdGlvbi1kaXNhYmxlZCkge1xyXG4gIGNvbG9yOiAjMTMxNTIzICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtcHJpbWFyeSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSAubWF0LXNlbGVjdC1hcnJvdyB7XHJcbiAgY29sb3I6ICM1ODY1N0Q2NSAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1pbmZpeCB7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG4uYnV0dG9uLXRvZ2dsZSB7XHJcbiAgY29sb3I6ICNCNEI0QjQ7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjQ0cHg7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbjo6bmctZGVlcCAuZWdyZXQtbmF2eSAubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZC5tYXQtYnV0dG9uLXRvZ2dsZS1hcHBlYXJhbmNlLXN0YW5kYXJkIHtcclxuICBjb2xvcjogIzAwNEM5NyAhaW1wb3J0YW50O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNCNEI0QjQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxufVxyXG4udmVyaWZ5Y29kZSB7XHJcbiAgY29sb3I6ICMxMzE1MjM7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xN3B4O1xyXG59XHJcbjo6bmctZGVlcCAub3RwLWlucHV0IHtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtcmFkaW8taW5uZXItY2lyY2xlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0Qzk3ICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtcmFkaW8tYnV0dG9uLm1hdC1hY2NlbnQubWF0LXJhZGlvLWNoZWNrZWQgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xyXG4gIGJvcmRlci1jb2xvcjogICMwMDRDOTcgIWltcG9ydGFudDtcclxuICBib3JkZXI6IHNvbGlkIDFweCAhaW1wb3J0YW50O1xyXG59XHJcbi5yZXNlbmQxIHtcclxuICBjb2xvcjogICMxMzE1MjM7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcclxufVxyXG4ucmVzZW5kMiB7XHJcbiBjb2xvcjogI2I0YjRiNDtcclxufVxyXG46Om5nLWRlZXAgLmVncmV0LW5hdnkgLm1hdC1zZWxlY3QtdmFsdWUge1xyXG4gIGNvbG9yOiAgIzAwNEM5NyAhaW1wb3J0YW50O1xyXG59XHJcbjo6bmctZGVlcCAuZWdyZXQtbmF2eSAubWF0LWlucHV0LWVsZW1lbnQge1xyXG4gIGNvbG9yOiAgIzAwNEM5NyAhaW1wb3J0YW50O1xyXG59XHJcbi5vdHBmaWVsZHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgQG1lZGlhKCBtYXgtd2lkdGg6MTUlKSB7XHJcbiAgICBtYXgtd2lkdGg6IDE1JTtcclxuICB9XHJcbn1cclxuLnBhc3NmaWVsZHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgQG1lZGlhKCBtYXgtd2lkdGg6MjQlKSB7XHJcbiAgICBtYXgtd2lkdGg6IDI0JTtcclxuICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BranchLoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: "app-branch-login",
                templateUrl: "./branch-login.component.html",
                styleUrls: ["./branch-login.component.scss"],
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, { newotp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['otpvalue']
        }] }); })();


/***/ }),

/***/ "VVaf":
/*!***************************************************!*\
  !*** ./src/app/views/sessions/sessions.module.ts ***!
  \***************************************************/
/*! exports provided: SessionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsModule", function() { return SessionsModule; });
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/shared-material.module */ "zMWy");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "YUcS");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "sYmb");
/* harmony import */ var _sessions_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sessions.routing */ "WYVF");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./not-found/not-found.component */ "8Wtu");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error/error.component */ "NjAb");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./signin/signin.component */ "Ekgz");
/* harmony import */ var _fingerprint_fingerprint_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fingerprint/fingerprint.component */ "hxFr");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/chips */ "A5z7");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/radio */ "QibW");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tabs */ "wZkO");
/* harmony import */ var _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @swimlane/ngx-datatable */ "lDzL");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! app/shared/shared.module */ "PCNd");
/* harmony import */ var ng2_charts__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ng2-charts */ "LPYB");
/* harmony import */ var _otp_otp_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./otp/otp.component */ "KvEN");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./login/login.component */ "OoMb");
/* harmony import */ var _angular_material_extensions_select_country__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular-material-extensions/select-country */ "6xI8");
/* harmony import */ var _others_scanner_scanner_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../others/scanner/scanner.component */ "qxMs");
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @zxing/ngx-scanner */ "IyRd");
/* harmony import */ var _logout_popup_logout_popup_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./logout-popup/logout-popup.component */ "8n/o");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _otp_onlynumber_directive__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./otp/onlynumber.directive */ "Kj45");
/* harmony import */ var _walk_in_customer_walk_in_customer_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./walk-in-customer/walk-in-customer.component */ "UXNm");
/* harmony import */ var _branch_login_branch_login_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./branch-login/branch-login.component */ "VQ1A");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ng-otp-input */ "9OaD");
/* harmony import */ var _branch_logout_branch_logout_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./branch-logout/branch-logout.component */ "PjJD");













































class SessionsModule {
}
SessionsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SessionsModule });
SessionsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function SessionsModule_Factory(t) { return new (t || SessionsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            ng_otp_input__WEBPACK_IMPORTED_MODULE_40__["NgOtpInputModule"],
            _angular_material_extensions_select_country__WEBPACK_IMPORTED_MODULE_31__["MatSelectCountryModule"].forRoot('en'),
            _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__["MatSlideToggleModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
            _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
            _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_26__["NgxDatatableModule"],
            ng2_charts__WEBPACK_IMPORTED_MODULE_28__["ChartsModule"],
            app_shared_shared_module__WEBPACK_IMPORTED_MODULE_27__["SharedModule"],
            _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_33__["ZXingScannerModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_sessions_routing__WEBPACK_IMPORTED_MODULE_8__["SessionsRoutes"]),
        ], _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SessionsModule, { declarations: [_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"], _others_scanner_scanner_component__WEBPACK_IMPORTED_MODULE_32__["ScannerComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"], _signin_signin_component__WEBPACK_IMPORTED_MODULE_11__["SigninComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_30__["LoginComponent"], _otp_otp_component__WEBPACK_IMPORTED_MODULE_29__["OtpComponent"], _logout_popup_logout_popup_component__WEBPACK_IMPORTED_MODULE_34__["LogoutPopupComponent"], _fingerprint_fingerprint_component__WEBPACK_IMPORTED_MODULE_12__["FingerprintComponent"], _otp_onlynumber_directive__WEBPACK_IMPORTED_MODULE_36__["OnlynumberDirective"], _walk_in_customer_walk_in_customer_component__WEBPACK_IMPORTED_MODULE_37__["WalkInCustomerComponent"], _branch_login_branch_login_component__WEBPACK_IMPORTED_MODULE_38__["BranchLoginComponent"], _branch_logout_branch_logout_component__WEBPACK_IMPORTED_MODULE_41__["BranchLogoutComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"],
        _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
        ng_otp_input__WEBPACK_IMPORTED_MODULE_40__["NgOtpInputModule"], _angular_material_extensions_select_country__WEBPACK_IMPORTED_MODULE_31__["MatSelectCountryModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__["MatSlideToggleModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
        _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
        _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"],
        _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"],
        _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
        _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_26__["NgxDatatableModule"],
        ng2_charts__WEBPACK_IMPORTED_MODULE_28__["ChartsModule"],
        app_shared_shared_module__WEBPACK_IMPORTED_MODULE_27__["SharedModule"],
        _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_33__["ZXingScannerModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]], exports: [_angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](SessionsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                    _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                    app_shared_shared_material_module__WEBPACK_IMPORTED_MODULE_5__["SharedMaterialModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__["PerfectScrollbarModule"],
                    _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                    ng_otp_input__WEBPACK_IMPORTED_MODULE_40__["NgOtpInputModule"],
                    _angular_material_extensions_select_country__WEBPACK_IMPORTED_MODULE_31__["MatSelectCountryModule"].forRoot('en'),
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_20__["MatListModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_18__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_14__["MatCardModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_21__["MatMenuModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_24__["MatSlideToggleModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_17__["MatGridListModule"],
                    _angular_material_chips__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                    _angular_material_radio__WEBPACK_IMPORTED_MODULE_23__["MatRadioModule"],
                    _angular_material_tabs__WEBPACK_IMPORTED_MODULE_25__["MatTabsModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_22__["MatProgressBarModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_35__["MatDialogModule"],
                    _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
                    _swimlane_ngx_datatable__WEBPACK_IMPORTED_MODULE_26__["NgxDatatableModule"],
                    ng2_charts__WEBPACK_IMPORTED_MODULE_28__["ChartsModule"],
                    app_shared_shared_module__WEBPACK_IMPORTED_MODULE_27__["SharedModule"],
                    _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_33__["ZXingScannerModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_39__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_sessions_routing__WEBPACK_IMPORTED_MODULE_8__["SessionsRoutes"]),
                ],
                entryComponents: [_fingerprint_fingerprint_component__WEBPACK_IMPORTED_MODULE_12__["FingerprintComponent"], _logout_popup_logout_popup_component__WEBPACK_IMPORTED_MODULE_34__["LogoutPopupComponent"]],
                declarations: [_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"], _others_scanner_scanner_component__WEBPACK_IMPORTED_MODULE_32__["ScannerComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_10__["ErrorComponent"], _signin_signin_component__WEBPACK_IMPORTED_MODULE_11__["SigninComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_30__["LoginComponent"], _otp_otp_component__WEBPACK_IMPORTED_MODULE_29__["OtpComponent"], _logout_popup_logout_popup_component__WEBPACK_IMPORTED_MODULE_34__["LogoutPopupComponent"], _fingerprint_fingerprint_component__WEBPACK_IMPORTED_MODULE_12__["FingerprintComponent"], _otp_onlynumber_directive__WEBPACK_IMPORTED_MODULE_36__["OnlynumberDirective"], _walk_in_customer_walk_in_customer_component__WEBPACK_IMPORTED_MODULE_37__["WalkInCustomerComponent"], _branch_login_branch_login_component__WEBPACK_IMPORTED_MODULE_38__["BranchLoginComponent"], _branch_logout_branch_logout_component__WEBPACK_IMPORTED_MODULE_41__["BranchLogoutComponent"]],
                exports: [
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "WYVF":
/*!****************************************************!*\
  !*** ./src/app/views/sessions/sessions.routing.ts ***!
  \****************************************************/
/*! exports provided: SessionsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsRoutes", function() { return SessionsRoutes; });
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./not-found/not-found.component */ "8Wtu");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error/error.component */ "NjAb");
/* harmony import */ var _otp_otp_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./otp/otp.component */ "KvEN");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "OoMb");
/* harmony import */ var _others_scanner_scanner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../others/scanner/scanner.component */ "qxMs");
/* harmony import */ var _fingerprint_fingerprint_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fingerprint/fingerprint.component */ "hxFr");
/* harmony import */ var _walk_in_customer_walk_in_customer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./walk-in-customer/walk-in-customer.component */ "UXNm");
/* harmony import */ var _others_appointment_id_appointment_id_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../others/appointment-id/appointment-id.component */ "Rfrn");
/* harmony import */ var _branch_login_branch_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./branch-login/branch-login.component */ "VQ1A");
/* harmony import */ var _branch_logout_branch_logout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./branch-logout/branch-logout.component */ "PjJD");










const SessionsRoutes = [
    {
        path: "",
        children: [
            {
                // path: "signin",
                // component: SigninComponent,
                // data: { title: "Signin" }
                path: 'login',
                component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                data: { title: 'Login', breadcrumb: 'LOGIN' }
            },
            {
                path: 'otp',
                component: _otp_otp_component__WEBPACK_IMPORTED_MODULE_2__["OtpComponent"],
                data: { title: 'otp', breadcrumb: 'OTP' }
            },
            {
                path: 'walkInCustomer',
                component: _walk_in_customer_walk_in_customer_component__WEBPACK_IMPORTED_MODULE_6__["WalkInCustomerComponent"],
                data: { title: 'otp', breadcrumb: 'WALKIN' }
            },
            {
                path: 'appointment-id',
                component: _others_appointment_id_appointment_id_component__WEBPACK_IMPORTED_MODULE_7__["AppointmentIdComponent"],
                data: { title: 'otp', breadcrumb: 'WALKIN' }
            },
            {
                path: "404",
                component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_0__["NotFoundComponent"],
                data: { title: "Not Found" }
            },
            {
                path: "error",
                component: _error_error_component__WEBPACK_IMPORTED_MODULE_1__["ErrorComponent"],
                data: { title: "Error" }
            },
            {
                path: "scanner",
                component: _others_scanner_scanner_component__WEBPACK_IMPORTED_MODULE_4__["ScannerComponent"],
            },
            {
                path: "scanFinger",
                component: _fingerprint_fingerprint_component__WEBPACK_IMPORTED_MODULE_5__["FingerprintComponent"],
            },
            {
                path: "branch-login",
                component: _branch_login_branch_login_component__WEBPACK_IMPORTED_MODULE_8__["BranchLoginComponent"],
            },
            {
                path: "branch-logout",
                component: _branch_logout_branch_logout_component__WEBPACK_IMPORTED_MODULE_9__["BranchLogoutComponent"],
            },
        ]
    }
];
// {
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


/***/ }),

/***/ "hxFr":
/*!*********************************************************************!*\
  !*** ./src/app/views/sessions/fingerprint/fingerprint.component.ts ***!
  \*********************************************************************/
/*! exports provided: FingerprintComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FingerprintComponent", function() { return FingerprintComponent; });
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var _shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/services/finger-print-capture.service */ "rp8y");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");













class FingerprintComponent {
    constructor(router, dialogRef, fpCaptureService, data, cdr, snack) {
        this.router = router;
        this.dialogRef = dialogRef;
        this.fpCaptureService = fpCaptureService;
        this.data = data;
        this.cdr = cdr;
        this.snack = snack;
        this.titleMessage = "Please use your fingerprint to authenticate";
        this.contentMessage = "Please place your thumb on the fingerprint reader to proceed.";
    }
    ngOnInit() {
        this.userId = localStorage.getItem('userId');
        console.log('data :: ', this.data);
    }
    goToClose() {
        this.dialogRef.close();
    }
    goToScanner() {
        this.fpCaptureService.CallingSGIFPCapture()
            .subscribe(capturedData => {
            console.log('capturedData:: ', capturedData);
            const customerId = this.data.userId;
            if (capturedData.ErrorCode == 0) {
                this.getCustInfoById(customerId, capturedData.templateBase64);
            }
        });
    }
    getCustInfoById(custId, templateBase64) {
        this.fpCaptureService.getCustInfoByCustomerId(custId)
            .subscribe(resp => {
            console.log('customer resp :: ', resp); //fpTemplateBase64
            resp.data.forEach((item) => {
                if (item.documentType == 4) {
                    console.log('documentType :: ', item.documentType);
                    this.matchFpFromUi(templateBase64, item.fpTemplateBase64);
                }
            });
        });
    }
    matchFpFromUi(template1, data) {
        console.log('inside match:: ');
        this.fpCaptureService.CallingSGIFPMatch(template1, data)
            .subscribe(fpResp => {
            console.log('fpResp : ', fpResp);
            if (fpResp.MatchingScore >= 100) {
                let custId = this.data.userId;
                this.router.navigateByUrl('/others/kioskHome');
                this.dialogRef.close({
                    message: 'Confirm',
                    custId
                });
                this.snack.open(`User found : ${custId}`, 'OK', {
                    duration: 1000,
                    verticalPosition: 'top',
                    horizontalPosition: 'right'
                });
                return;
            }
        });
    }
    skip() {
        let data = 'skip';
        this.router.navigateByUrl('/others/kioskHome');
        this.dialogRef.close({
            message: 'Confirm',
            data
        });
    }
    saveBiometric(capFingerPrint, fingerName, cId) {
        let screen = 'Kisok Authenticate';
        this.fpCaptureService.saveBiometric(capFingerPrint, fingerName, cId, screen)
            .subscribe(data => {
            console.log("after save ", data);
            this.cdr.markForCheck();
            this.snack.open('Captured ' + fingerName + ' Finger', 'OK', {
                duration: 4000,
                verticalPosition: 'top',
                horizontalPosition: 'right'
            });
        });
    }
}
FingerprintComponent.ɵfac = function FingerprintComponent_Factory(t) { return new (t || FingerprintComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_1__["FingerPrintCaptureService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MatSnackBar"])); };
FingerprintComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: FingerprintComponent, selectors: [["app-fingerprint"]], decls: 22, vars: 2, consts: [[2, "background-color", "white"], ["fxLayout", "row", 1, "contain"], [1, "backIcon", 2, "color", "black", 3, "click"], ["fxLayout", "column", "fxLayoutGap", "5%", "fxLayoutAlign", "space-between center", 1, ""], [1, "card-title", 2, "color", "black"], [1, "para", 2, "color", "black"], [1, "matIcon"], ["mat-flat-button", "", 1, "buttonScan", 3, "click"]], template: function FingerprintComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FingerprintComponent_Template_mat_icon_click_2_listener() { return ctx.goToClose(); });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FingerprintComponent_Template_button_click_17_listener() { return ctx.goToScanner(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "SCAN");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function FingerprintComponent_Template_button_click_20_listener() { return ctx.skip(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, "SKIP");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.titleMessage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.contentMessage);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutDirective"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutGapDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_5__["DefaultLayoutAlignDirective"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"]], styles: [".main-div[_ngcontent-%COMP%] {\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.contain[_ngcontent-%COMP%] {\n  justify-content: flex-end;\n}\n\n.text[_ngcontent-%COMP%] {\n  justify-content: center;\n  padding-top: 25px;\n}\n\n.backIcon[_ngcontent-%COMP%] {\n  cursor: pointer;\n  padding: 0% 0% 0% 0%;\n  font-size: 20px;\n  color: #000000;\n}\n\n.para[_ngcontent-%COMP%] {\n  color: #000000;\n  text-align: center;\n}\n\n.matIcon[_ngcontent-%COMP%] {\n  color: #004c97;\n  padding-right: 4rem;\n  font-size: 6rem;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 24px;\n  text-align: center;\n  color: #000000;\n}\n\np[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: sans-serif;\n  font-size: 12px;\n}\n\n.buttonScan[_ngcontent-%COMP%] {\n  width: 170px;\n  border-radius: 25px;\n  background-color: #004c97;\n  color: #FFFFFF;\n  font-family: sans-serif;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcZmluZ2VycHJpbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyxhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDcEI7O0FBRUE7RUFDSSx5QkFBMEI7QUFDOUI7O0FBQ0E7RUFDSSx1QkFBdUI7RUFDdkIsaUJBQWlCO0FBRXJCOztBQUFBO0VBQ0ksZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixlQUFlO0VBQ2YsY0FBYztBQUdsQjs7QUFBQTtFQUNJLGNBQWM7RUFFZCxrQkFBa0I7QUFFdEI7O0FBQUE7RUFDSSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGVBQWU7QUFHbkI7O0FBREE7RUFDSSx1QkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0FBSWxCOztBQURBO0VBQ0ksY0FBYztFQUNkLHVCQUFzQjtFQUN0QixlQUFlO0FBSW5COztBQUZBO0VBQ0ksWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7RUFDekIsY0FBYztFQUNkLHVCQUFzQjtBQUsxQjs7QUFIRTtFQUNFLG1CQUFtQjtBQU12QiIsImZpbGUiOiJmaW5nZXJwcmludC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLWRpdntcclxuXHRoZWlnaHQ6IDEwMHZoO1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4uY29udGFpbntcclxuICAgIGp1c3RpZnktY29udGVudDogIGZsZXgtZW5kO1xyXG59XHJcbi50ZXh0e1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMjVweDtcclxufVxyXG4uYmFja0ljb257XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiAwJSAwJSAwJSAwJTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgLy8gb3BhY2l0eTogNDAlO1xyXG59XHJcbi5wYXJhe1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAvLyBvcGFjaXR5OiAzNyU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLm1hdEljb257XHJcbiAgICBjb2xvcjogIzAwNGM5NztcclxuICAgIHBhZGRpbmctcmlnaHQ6IDRyZW07XHJcbiAgICBmb250LXNpemU6IDZyZW07XHJcbn1cclxuLmNhcmQtdGl0bGV7XHJcbiAgICBmb250LWZhbWlseTpzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAvLyBvcGFjaXR5OiA2MiU7XHJcbn1cclxucHtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDsgXHJcbn1cclxuLmJ1dHRvblNjYW57XHJcbiAgICB3aWR0aDogMTcwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNGM5NztcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcclxuICB9XHJcbiAgLmZ1bGwtd2lkdGh7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](FingerprintComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-fingerprint',
                templateUrl: './fingerprint.component.html',
                styleUrls: ['./fingerprint.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }, { type: _shared_services_finger_print_capture_service__WEBPACK_IMPORTED_MODULE_1__["FingerPrintCaptureService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_0__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "qxMs":
/*!***********************************************************!*\
  !*** ./src/app/views/others/scanner/scanner.component.ts ***!
  \***********************************************************/
/*! exports provided: ScannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScannerComponent", function() { return ScannerComponent; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/shared/services/api.service */ "nm5K");
/* harmony import */ var app_shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/shared/services/app-confirm/app-confirm.service */ "3kSh");
/* harmony import */ var app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/shared/services/Dialog/dialog.service */ "LP5l");
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/flex-layout/flex */ "XiUz");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @zxing/ngx-scanner */ "IyRd");



// import { MatDialogRef } from '@angular/material/dialog';

















function ScannerComponent_zxing_scanner_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "zxing-scanner", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("scanSuccess", function ScannerComponent_zxing_scanner_7_Template_zxing_scanner_scanSuccess_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.scanSuccessHandler($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formats", ctx_r0.allowedFormats)("torch", true);
} }
class ScannerComponent {
    constructor(router, apiService, fb, http, cdr, dialogService, confirmService) {
        this.router = router;
        this.apiService = apiService;
        this.fb = fb;
        this.http = http;
        this.cdr = cdr;
        this.dialogService = dialogService;
        this.confirmService = confirmService;
        this.allowedFormats = ['QR_CODE', 'EAN_13'];
    }
    ngOnInit() {
        this.getBankBranches();
    }
    getBankBranches() {
        this.apiService.getBranchforKiosk()
            .subscribe((data) => {
            this.branchData = data;
            console.log(this.branchData);
            data.forEach((element, index) => {
                this.branch = data[index].branchName;
                console.log(this.branch);
            });
        });
    }
    scanSuccessHandler(scannedEvent) {
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
                this.confirmService.confirm({ title: "Confirm", message: "Please scan code within 1hr of selected transaction time", ok: "Yes", cancel: "No" }).subscribe(res => {
                    console.log("Response", res);
                    if (res === true) {
                        this.cdr.markForCheck();
                    }
                    else {
                        this.router.navigate(['/sessions/login/']);
                    }
                    ;
                });
            }
            console.log("Same");
            if (this.transcationType == 'CHW') {
                this.router.navigateByUrl('/others/cw-cash-withdrawal');
            }
            else if (this.transcationType == 'CHD') {
                this.router.navigateByUrl('/others/cd-cash-deposit');
            }
            else if (this.transcationType == 'CQW') {
                this.router.navigateByUrl('/others/cheq-withdrawal');
            }
            else if (this.transcationType == 'CQD') {
                this.router.navigateByUrl('/others/cheq-deposit');
            }
        }
        else {
            console.log("Not True");
            this.confirmService
                .confirm({ title: "Confirm", message: "Transaction Branch selected on Mobile and this Kiosk Branch are different. Would you like to continue your transaction in this branch? ", ok: "Yes", cancel: "No" })
                .subscribe(res => {
                console.log("Response", res);
                if (res === true) {
                    if (this.diff.split(':')[0] > 1 || this.diff.split(':')[1] > 1) {
                        this.confirmService.confirm({ title: "Confirm", message: "Please scan code within 1hr of selected transaction time", ok: "Yes", cancel: "No" }).subscribe(res => {
                            console.log("Response", res);
                            if (res === true) {
                                this.cdr.markForCheck();
                            }
                            else {
                                this.router.navigate(['/sessions/login/']);
                            }
                            ;
                        });
                    }
                    console.log("Same");
                    if (this.transcationType == 'CHW') {
                        this.router.navigateByUrl('/others/cw-cash-withdrawal');
                    }
                    else if (this.transcationType == 'CHD') {
                        this.router.navigateByUrl('/others/cd-cash-deposit');
                    }
                    else if (this.transcationType == 'CQW') {
                        this.router.navigateByUrl('/others/cheq-withdrawal');
                    }
                    else if (this.transcationType == 'CQD') {
                        this.router.navigateByUrl('/others/cheq-deposit');
                    }
                }
                else {
                    this.router.navigate(['/sessions/login/']);
                }
                ;
            });
        }
    }
    goBack() {
        this.router.navigate(['/sessions/login/']);
    }
    convertTo24Hours(timeIn12Hrs) {
        const [time, modifier] = timeIn12Hrs.split(" ");
        let [hours, minutes] = time.split(":");
        console.log("hours::", hours);
        if (hours === "12") {
            hours = "00";
        }
        if (modifier === "PM") {
            hours = parseInt(hours, 10) + 12;
        }
        let currentDate = hours + ":" + minutes;
        return currentDate;
    }
    hmsToSeconds(s) {
        var b = s.split(':');
        return b[0] * 3600 + b[1] * 60 + (+b[2] || 0);
    }
    secondsToHMS(secs) {
        function z(n) { return (n < 10 ? '0' : '') + n; }
        var sign = secs < 0 ? '-' : '';
        secs = Math.abs(secs);
        return sign + z(secs / 3600 | 0) + ':' + z((secs % 3600) / 60 | 0) + ':' + z(secs % 60);
    }
}
ScannerComponent.ɵfac = function ScannerComponent_Factory(t) { return new (t || ScannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](app_shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_5__["AppConfirmService"])); };
ScannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ScannerComponent, selectors: [["app-scanner"]], decls: 47, vars: 1, consts: [["fxLayout", "row", "fxLayoutAlign", "center center", 1, "fullcard"], ["fxFlex", "60%"], [1, "chequecard"], ["fxLayout", "row", 1, "contain"], [1, "scanBox"], [1, "scan-area"], ["class", "icust-scanner", 3, "formats", "torch", "scanSuccess", 4, "ngIf"], [1, "card-title"], [1, "arrowBox"], [1, "qrIcon"], [1, "helpcard"], [1, "content"], [1, "mobileBox"], ["fxLayout", "row-wrap", 1, "flex-gap"], [1, "insideDiv"], ["src", "assets/images/scanner1.png", "alt", "", 1, "scannerImg"], [1, "text"], ["src", "assets/images/scan2.png", "alt", "", 1, "scannerImg2"], ["src", "assets/images/scanner3.png", "alt", "", 1, "scannerImg"], ["mat-button", "", "rounded", "", "color", "grey", 3, "click"], [1, "icust-scanner", 3, "formats", "torch", "scanSuccess"]], template: function ScannerComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ScannerComponent_Template_button_click_45_listener() { return ctx.goBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](46, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", true);
    } }, directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_card__WEBPACK_IMPORTED_MODULE_8__["MatCardContent"], _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButton"], _zxing_ngx_scanner__WEBPACK_IMPORTED_MODULE_12__["ZXingScannerComponent"]], styles: [".fullcard[_ngcontent-%COMP%] {\n  background-color: #004c97;\n  width: 100%;\n  height: 100%;\n}\n\n.scan-area[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  position: relative;\n}\n\n.icust-scanner[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  max-width: 100% !important;\n  max-height: 100% !important;\n  -o-object-fit: contain !important;\n     object-fit: contain !important;\n}\n\n.helpcard[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-left: 3%;\n}\n\n.topbar-branding[_ngcontent-%COMP%] {\n  line-height: 30px;\n  margin-left: 5%;\n}\n\n.chequecard[_ngcontent-%COMP%] {\n  margin-top: 10%;\n  height: 540px;\n  border-radius: 10px;\n  background-color: #ECF3F2;\n}\n\n.contain[_ngcontent-%COMP%] {\n  justify-content: flex-start;\n}\n\n.scanBox[_ngcontent-%COMP%] {\n  width: 290px;\n  height: 222px;\n  margin-left: 8%;\n  margin-top: 5%;\n  padding: 9px;\n}\n\n.scanIcon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.card-title[_ngcontent-%COMP%] {\n  font-family: sans-serif;\n  font-size: 20px;\n  text-align: center;\n  color: #000000;\n  padding-top: 50px;\n  padding-left: 20px;\n}\n\n.arrowBox[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 34px;\n  border-radius: 20px;\n  padding-top: 6px;\n  color: #acacac;\n}\n\n.qrIcon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  float: left;\n}\n\n.content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.mobileBox[_ngcontent-%COMP%] {\n  height: 155px;\n  border-radius: 10px;\n}\n\n.phoneIcon[_ngcontent-%COMP%] {\n  font-size: 65px;\n  color: #456EFE;\n  margin-top: -40%;\n}\n\n.flex-gap[_ngcontent-%COMP%] {\n  gap: 22%;\n  justify-content: center;\n  display: flex;\n  flex-wrap: wrap;\n}\n\np[_ngcontent-%COMP%] {\n  color: #000000;\n  font-family: sans-serif;\n  font-size: 10px;\n  padding-left: 10px;\n  padding-top: 5px;\n}\n\n.circle[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  height: 20px;\n  width: 20px;\n  padding: 2px;\n  font: 12px Arial, sans-serif;\n  color: white;\n  background-color: #456EFE;\n  margin-top: 5%;\n}\n\n.insideDiv[_ngcontent-%COMP%] {\n  margin-bottom: 5%;\n  justify-content: space-around;\n}\n\n.scannerImg[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 90px;\n}\n\n.scannerImg2[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 110px;\n}\n\n.text[_ngcontent-%COMP%] {\n  justify-content: center;\n}\n\n.fullcard[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  top: 32%;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: white;\n}\n\n.buttonNext[_ngcontent-%COMP%] {\n  border-radius: 20px;\n  background-color: #FFFFFF;\n  color: #929292;\n  font-family: sans-serif;\n  width: 280px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2Nhbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUEwQjtFQUMxQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxrQkFBa0I7QUFFcEI7O0FBQUE7RUFFSSwwQkFBMEI7RUFDMUIsMkJBQTJCO0VBQzNCLGlDQUE4QjtLQUE5Qiw4QkFBOEI7QUFFbEM7O0FBR0E7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUFqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsMkJBQTRCO0FBRTlCOztBQUFBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixlQUFlO0VBQ2YsY0FBYztFQUNkLFlBQVk7QUFHZDs7QUFEQTtFQUNFLGVBQWU7QUFJakI7O0FBRkE7RUFDRSx1QkFBc0I7RUFDdEIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUtwQjs7QUFGQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixjQUFjO0FBS2hCOztBQUhBO0VBQ0UsZUFBZTtFQUNmLFdBQVU7QUFNWjs7QUFKQTtFQUNFLGtCQUFrQjtBQU9wQjs7QUFMQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFRckI7O0FBTkE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjtBQVNsQjs7QUFQQTtFQUNFLFFBQVE7RUFDUix1QkFBc0I7RUFDdEIsYUFBYTtFQUNiLGVBQWU7QUFVakI7O0FBUkE7RUFDRSxjQUFjO0VBQ2QsdUJBQXNCO0VBQ3RCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBV2xCOztBQVRFO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGNBQWM7QUFZbEI7O0FBVkU7RUFDRSxpQkFBaUI7RUFDakIsNkJBQTZCO0FBYWpDOztBQVZFO0VBQ0UsWUFBWTtFQUNaLFdBQVc7QUFhZjs7QUFYRTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBY2hCOztBQVpFO0VBQ0UsdUJBQXNCO0FBZTFCOztBQVpJO0VBQ0EsV0FBVztFQUNYLGtCQUFrQjtFQUVsQixRQUFRO0VBQ1IsUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0VBQ1AsaUJBQThCO0FBY2xDOztBQVpJO0VBQ0UsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFlbEIiLCJmaWxlIjoic2Nhbm5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mdWxsY2FyZHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzAwNGM5NztcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuLnNjYW4tYXJlYXtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5pY3VzdC1zY2FubmVye1xyXG4gIHZpZGVve1xyXG4gICAgbWF4LXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmhlbHBjYXJke1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1sZWZ0OiAzJTtcclxufVxyXG4udG9wYmFyLWJyYW5kaW5ne1xyXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgLy8gei1pbmRleDogLTE7XHJcbn1cclxuLmNoZXF1ZWNhcmR7XHJcbiAgbWFyZ2luLXRvcDogMTAlO1xyXG4gIGhlaWdodDogNTQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNGM0YyO1xyXG59XHJcbi5jb250YWlue1xyXG4gIGp1c3RpZnktY29udGVudDogIGZsZXgtc3RhcnQ7XHJcbn1cclxuLnNjYW5Cb3h7XHJcbiAgd2lkdGg6IDI5MHB4O1xyXG4gIGhlaWdodDogMjIycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDglO1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIHBhZGRpbmc6IDlweDtcclxufVxyXG4uc2Nhbkljb257XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jYXJkLXRpdGxle1xyXG4gIGZvbnQtZmFtaWx5OnNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogIzAwMDAwMDtcclxuICBwYWRkaW5nLXRvcDogNTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgXHJcbn1cclxuLmFycm93Qm94e1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICBoZWlnaHQ6IDM0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gIGNvbG9yOiAjYWNhY2FjO1xyXG59XHJcbi5xckljb257XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZsb2F0OmxlZnQ7XHJcbn1cclxuLmNvbnRlbnR7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5tb2JpbGVCb3h7XHJcbiAgaGVpZ2h0OiAxNTVweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcbi5waG9uZUljb257XHJcbiAgZm9udC1zaXplOiA2NXB4O1xyXG4gIGNvbG9yOiAjNDU2RUZFO1xyXG4gIG1hcmdpbi10b3A6IC00MCU7XHJcbn1cclxuLmZsZXgtZ2FwIHtcclxuICBnYXA6IDIyJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcbnB7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZm9udC1mYW1pbHk6c2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4OyBcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcbiAgLmNpcmNsZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIHBhZGRpbmc6IDJweDtcclxuICAgIGZvbnQ6IDEycHggQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDU2RUZFO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgfVxyXG4gIC5pbnNpZGVEaXZ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIH1cclxuXHJcbiAgLnNjYW5uZXJJbWd7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICB9XHJcbiAgLnNjYW5uZXJJbWcye1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDExMHB4O1xyXG4gIH1cclxuICAudGV4dHtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAgIC5mdWxsY2FyZDpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIC8vIHotaW5kZXg6IC0xO1xyXG4gICAgdG9wOiAzMiU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICB9XHJcbiAgICAuYnV0dG9uTmV4dHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgICAgY29sb3I6ICM5MjkyOTI7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gICAgICB3aWR0aDogMjgwcHg7XHJcbiAgfVxyXG5cclxuIFxyXG5cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ScannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-scanner',
                templateUrl: './scanner.component.html',
                styleUrls: ['./scanner.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }, { type: app_shared_services_Dialog_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"] }, { type: app_shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_5__["AppConfirmService"] }]; }, null); })();


/***/ }),

/***/ "rp8y":
/*!*****************************************************************!*\
  !*** ./src/app/shared/services/finger-print-capture.service.ts ***!
  \*****************************************************************/
/*! exports provided: FingerPrintCaptureService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FingerPrintCaptureService", function() { return FingerPrintCaptureService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "dNgK");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./api.service */ "nm5K");









class FingerPrintCaptureService {
    constructor(http, snack) {
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
                }
                else {
                    callback(status);
                }
            };
            xhr.send();
        };
    }
    userDataService(data) {
        this.userData.next(data);
    }
    /* NOTE:
    biometric call type: webapi
    lisence: used 60 free trail version
    desc: currently using this service for finger print capturing
     */
    CallingSGIFPGetData() {
        return this.http.get('http://localhost:8000/SGIFPCapture')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((result) => {
            console.log('result-->', result);
            return result;
        }));
    }
    handleError(arg0, arg1) {
        throw new Error('Method not implemented.');
    }
    /* NOTE:
    biometric call type: registered device service
    lisence: paid
    desc: currently not using this service
     */
    rdservice() {
        var port;
        var urlStr = '';
        urlStr = 'http://localhost:11100/';
        this.getJSON_rd(urlStr, function (err, data) {
            if (err != null) {
                alert('Something went wrong: ' + err);
            }
            else {
                alert('Response:-' + String(data));
            }
        });
    }
    saveBiometric(capFingerPrint, fingerName, cId, screen) {
        return this.http.post(`${_api_service__WEBPACK_IMPORTED_MODULE_5__["API_URL"]}/rest/upload/saveOrUpdateBio/${fingerName}/${cId}/${screen}`, capFingerPrint);
    }
    errorCodeService(errorCode) {
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
        this.snack.open(`${error}`, 'OK', {
            duration: 4000,
            verticalPosition: 'top',
            horizontalPosition: 'right'
        });
    }
    getCustInfoByFp(page, size, fingerIndex) {
        var params;
        console.log(`fingerIndex ${fingerIndex} and page ${page}`);
        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append('fingerIndex', fingerIndex); //.append('page', page);
        return this.http.get(`${_api_service__WEBPACK_IMPORTED_MODULE_5__["API_URL"]}/rest/upload/getCustomerDataByFp?${params}`);
    }
    getCustInfoByCustomerId(customerId) {
        var params;
        console.log(`customerId ${customerId}`);
        params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]().append('customerId', customerId);
        return this.http.get(`${_api_service__WEBPACK_IMPORTED_MODULE_5__["API_URL"]}/rest/upload/getCustomerDataByFp?${params}`);
    }
    /* To-Do: https api capture */
    CallingSGIFPCapture() {
        console.log(" in service ");
        return this.http.get('https://localhost:8443/SGIFPCapture')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((result) => {
            console.log('result-->', result);
            return result;
        }));
    }
    /* To-Do: https api capture */
    CallingSGIFPMatch(templeData1, templeData2) {
        var secuLicc = "ae7VmpMA9ZwEGVYVr1LMWrqjCEx+eFmya9VX0v+vNfQ=";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpParams"]()
            .append('template1', templeData1)
            .append('template2', templeData2);
        //  .append('licstr',secuLicc);
        //  .append('licstr',secuLicc);
        // http://localhost:8000/SGIMatchScore
        return this.http.post(`https://localhost:8443/SGIMatchScore`, params)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])((result) => {
            // console.log('result-->', result)
            return result;
        }));
    }
}
FingerPrintCaptureService.ɵfac = function FingerPrintCaptureService_Factory(t) { return new (t || FingerPrintCaptureService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"])); };
FingerPrintCaptureService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: FingerPrintCaptureService, factory: FingerPrintCaptureService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](FingerPrintCaptureService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "uxn7":
/*!*******************************************************************************************!*\
  !*** ./node_modules/ngx-custom-validators/__ivy_ngcc__/fesm2015/ngx-custom-validators.js ***!
  \*******************************************************************************************/
/*! exports provided: CustomFormsModule, CustomValidators, ɵa, ɵb, ɵba, ɵbb, ɵbc, ɵbd, ɵbe, ɵbf, ɵbg, ɵbh, ɵbi, ɵbj, ɵbk, ɵbl, ɵbm, ɵbn, ɵbo, ɵbp, ɵbq, ɵbr, ɵbs, ɵbt, ɵbu, ɵbv, ɵbw, ɵbx, ɵby, ɵbz, ɵc, ɵd, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵk, ɵl, ɵm, ɵn, ɵo, ɵp, ɵq, ɵr, ɵs, ɵt, ɵu, ɵv, ɵw, ɵx, ɵy, ɵz */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomFormsModule", function() { return CustomFormsModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomValidators", function() { return CustomValidators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return arrayLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return base64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵba", function() { return ArrayLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbb", function() { return Base64Validator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbc", function() { return CreditCardValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbd", function() { return DateValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbe", function() { return DateISOValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbf", function() { return DigitsValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbg", function() { return EmailValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbh", function() { return EqualValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbi", function() { return EqualToValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbj", function() { return GreaterThanValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbk", function() { return GreaterThanEqualValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbl", function() { return JSONValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbm", function() { return LessThanValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbn", function() { return LessThanEqualValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbo", function() { return MaxValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbp", function() { return MaxDateValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbq", function() { return MinValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbr", function() { return MinDateValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbs", function() { return NotEqualValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbt", function() { return NotEqualToValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbu", function() { return NumberValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbv", function() { return PropertyValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbw", function() { return RangeValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbx", function() { return RangeLengthValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵby", function() { return UrlValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵbz", function() { return UUIDValidator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return creditCard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return date; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return dateISO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵf", function() { return digits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵg", function() { return email; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵh", function() { return equal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵi", function() { return equalTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵj", function() { return gt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵk", function() { return gte; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵl", function() { return json; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵm", function() { return lt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵn", function() { return lte; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵo", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵp", function() { return maxDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵq", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵr", function() { return minDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵs", function() { return notEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵt", function() { return notEqualTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵu", function() { return number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵv", function() { return property; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵw", function() { return range; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵx", function() { return rangeLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵy", function() { return url; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵz", function() { return uuid; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "7FO4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");





function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
function isDate(obj) {
    try {
        const date = new Date(obj);
        return !isNaN(date.getTime());
    }
    catch (e) {
        return false;
    }
}
function parseDate(obj) {
    try {
        // Moment.js
        if (obj._d instanceof Date) {
            const d = obj._d;
            const month = +d.getMonth() + 1;
            const day = +d.getDate();
            return `${d.getFullYear()}-${formatDayOrMonth(month)}-${formatDayOrMonth(day)}`;
        }
        // NgbDateStruct
        if (typeof obj === 'object' && obj.year != null && obj.month != null && obj.day != null) {
            const month = +obj.month;
            const day = +obj.day;
            return `${obj.year}-${formatDayOrMonth(month)}-${formatDayOrMonth(day)}`;
        }
    }
    catch (e) { }
    return obj;
}
function formatDayOrMonth(month) {
    return month < 10 ? `0${month}` : month;
}

const arrayLength = (value) => {
    return (control) => {
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
        }
        const obj = control.value;
        return Array.isArray(obj) && obj.length >= +value ? null : { arrayLength: { minLength: value } };
    };
};

const base64 = (control) => {
    if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
        return null;
    }
    const v = control.value;
    return /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i.test(v) ? null : { base64: true };
};

const creditCard = (control) => {
    if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
        return null;
    }
    const v = control.value;
    const sanitized = v.replace(/[^0-9]+/g, '');
    // problem with chrome
    /* tslint:disable */
    if (!(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11}|(?:9792)\d{12})$/.test(sanitized))) {
        return { creditCard: true };
    }
    /* tslint:enable */
    let sum = 0;
    let digit;
    let tmpNum;
    let shouldDouble;
    for (let i = sanitized.length - 1; i >= 0; i--) {
        digit = sanitized.substring(i, (i + 1));
        tmpNum = parseInt(digit, 10);
        if (shouldDouble) {
            tmpNum *= 2;
            if (tmpNum >= 10) {
                sum += ((tmpNum % 10) + 1);
            }
            else {
                sum += tmpNum;
            }
        }
        else {
            sum += tmpNum;
        }
        shouldDouble = !shouldDouble;
    }
    if (Boolean((sum % 10) === 0 ? sanitized : false)) {
        return null;
    }
    return { creditCard: true };
};

const date = (control) => {
    if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
        return null;
    }
    let v = control.value;
    v = parseDate(v);
    return isDate(v) ? null : { date: true };
};

const dateISO = (control) => {
    if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
        return null;
    }
    const v = control.value;
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(v) ? null : { dateISO: true };
};

const digits = (control) => {
    if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
        return null;
    }
    const v = control.value;
    return /^\d+$/.test(v) ? null : { digits: true };
};

const email = (control) => {
    if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
        return null;
    }
    const v = control.value;
    /* tslint:disable */
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) ? null : { 'email': true };
    /* tslint:enable */
};

const equal = (val) => {
    return (control) => {
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
        }
        const v = control.value;
        return val === v ? null : { equal: { value: val } };
    };
};

const equalTo = (equalControl) => {
    let subscribe = false;
    return (control) => {
        if (!subscribe) {
            subscribe = true;
            equalControl.valueChanges.subscribe(() => {
                control.updateValueAndValidity();
            });
        }
        const v = control.value;
        return equalControl.value === v ? null : { equalTo: { control: equalControl, value: equalControl.value } };
    };
};

const gt = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
        }
        const v = +control.value;
        return v > +value ? null : { gt: { value: value } };
    };
};

const gte = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
        }
        const v = +control.value;
        return v >= +value ? null : { gte: { value: value } };
    };
};

const json = (control) => {
    if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
        return null;
    }
    const v = control.value;
    try {
        const obj = JSON.parse(v);
        if (Boolean(obj) && typeof obj === 'object') {
            return null;
        }
    }
    catch (e) { }
    return { json: true };
};

const lt = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
        }
        const v = +control.value;
        return v < +value ? null : { lt: { value: value } };
    };
};

const lte = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
        }
        const v = +control.value;
        return v <= +value ? null : { lte: { value: value } };
    };
};

const max = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
        }
        const v = +control.value;
        return v <= +value ? null : { max: { value: value } };
    };
};

const maxDate = (maxInput) => {
    let value;
    let subscribe = false;
    let maxValue = maxInput;
    const isForm = maxInput instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"] || maxInput instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"];
    return (control) => {
        if (!subscribe && isForm) {
            subscribe = true;
            maxInput.valueChanges.subscribe(() => {
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
            }
            else if (isForm) {
                return { maxDate: { error: 'maxDate is invalid' } };
            }
            else {
                throw Error('maxDate value must be or return a formatted date');
            }
        }
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
        }
        const d = new Date(parseDate(control.value)).getTime();
        if (!isDate(d)) {
            return { value: true };
        }
        if (value instanceof Function) {
            value = value();
        }
        return d <= new Date(value).getTime() ? null : (isForm ? { maxDate: { control: maxInput, value: maxInput.value } } : { maxDate: { value: maxValue, control: undefined } });
    };
};

const min = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
        }
        const v = +control.value;
        return v >= +value ? null : { min: { value: value } };
    };
};

const minDate = (minInput) => {
    let value;
    let subscribe = false;
    let minValue = minInput;
    const isForm = minInput instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"] || minInput instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"];
    return (control) => {
        if (!subscribe && isForm) {
            subscribe = true;
            minInput.valueChanges.subscribe(() => {
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
            }
            else if (isForm) {
                return { minDate: { error: 'minDate is invalid' } };
            }
            else {
                throw Error('minDate value must be or return a formatted date');
            }
        }
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
        }
        const d = new Date(parseDate(control.value)).getTime();
        if (!isDate(d)) {
            return { value: true };
        }
        if (value instanceof Function) {
            value = value();
        }
        return d >= new Date(value).getTime() ? null : (isForm ? { minDate: { control: minInput, value: minInput.value } } : { minDate: { value: minValue, control: undefined } });
    };
};

const notEqual = (val) => {
    return (control) => {
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
        }
        const v = control.value;
        return val !== v ? null : { notEqual: { value: val } };
    };
};

const notEqualTo = (notEqualControl) => {
    let subscribe = false;
    return (control) => {
        if (!subscribe) {
            subscribe = true;
            notEqualControl.valueChanges.subscribe(() => {
                control.updateValueAndValidity();
            });
        }
        const v = control.value;
        if (notEqualControl.value == null && v == null) {
            return null;
        }
        return notEqualControl.value !== v ? null : { notEqualTo: { control: notEqualControl, value: notEqualControl.value } };
    };
};

const number = (control) => {
    if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
        return null;
    }
    const v = control.value;
    return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(v) ? null : { 'number': true };
};

const property = (value) => {
    return (control) => {
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
        }
        const properties = value.split(',');
        const obj = control.value;
        let isValid = true;
        for (const prop of properties) {
            if (obj[prop] == null) {
                isValid = false;
                break;
            }
        }
        return isValid ? null : { hasProperty: { value: value } };
    };
};

const range = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
        }
        const v = +control.value;
        return v >= value[0] && v <= value[1] ? null : { range: { value: value } };
    };
};

const rangeLength = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
        }
        const v = control.value;
        return v.length >= value[0] && v.length <= value[1] ? null : { rangeLength: { value: value } };
    };
};

const uuids = {
    '3': /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    '4': /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    '5': /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    'all': /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};
const uuid = (version) => {
    return (control) => {
        if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
            return null;
        }
        const v = control.value;
        const pattern = uuids[version] || uuids.all;
        return (new RegExp(pattern)).test(v) ? null : { uuid: true };
    };
};

const url = (control) => {
    if (isPresent(_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required(control))) {
        return null;
    }
    const v = control.value;
    /* tslint:disable */
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(v) ? null : { 'url': true };
    /* tslint:enable */
};

const ARRAY_LENGTH_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => ArrayLengthValidator),
    multi: true
};
let ArrayLengthValidator = class ArrayLengthValidator {
    ngOnInit() {
        this.validator = arrayLength(this.arrayLength);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'arrayLength') {
                this.validator = arrayLength(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
ArrayLengthValidator.ɵfac = function ArrayLengthValidator_Factory(t) { return new (t || ArrayLengthValidator)(); };
ArrayLengthValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: ArrayLengthValidator, selectors: [["", "arrayLength", "", "formControlName", ""], ["", "arrayLength", "", "formControl", ""], ["", "arrayLength", "", "ngModel", ""]], inputs: { arrayLength: "arrayLength" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([ARRAY_LENGTH_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], ArrayLengthValidator.prototype, "arrayLength", void 0);

const BASE64_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => Base64Validator),
    multi: true
};
let Base64Validator = class Base64Validator {
    validate(c) {
        return base64(c);
    }
};
Base64Validator.ɵfac = function Base64Validator_Factory(t) { return new (t || Base64Validator)(); };
Base64Validator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: Base64Validator, selectors: [["", "base64", "", "formControlName", ""], ["", "base64", "", "formControl", ""], ["", "base64", "", "ngModel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([BASE64_VALIDATOR])] });

const CREDIT_CARD_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => CreditCardValidator),
    multi: true
};
let CreditCardValidator = class CreditCardValidator {
    validate(c) {
        return creditCard(c);
    }
};
CreditCardValidator.ɵfac = function CreditCardValidator_Factory(t) { return new (t || CreditCardValidator)(); };
CreditCardValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: CreditCardValidator, selectors: [["", "creditCard", "", "formControlName", ""], ["", "creditCard", "", "formControl", ""], ["", "creditCard", "", "ngModel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([CREDIT_CARD_VALIDATOR])] });

const DATE_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => DateValidator),
    multi: true
};
let DateValidator = class DateValidator {
    validate(c) {
        return date(c);
    }
};
DateValidator.ɵfac = function DateValidator_Factory(t) { return new (t || DateValidator)(); };
DateValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DateValidator, selectors: [["", "date", "", "formControlName", ""], ["", "date", "", "formControl", ""], ["", "date", "", "ngModel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([DATE_VALIDATOR])] });

const DATE_ISO_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => DateISOValidator),
    multi: true
};
let DateISOValidator = class DateISOValidator {
    validate(c) {
        return dateISO(c);
    }
};
DateISOValidator.ɵfac = function DateISOValidator_Factory(t) { return new (t || DateISOValidator)(); };
DateISOValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DateISOValidator, selectors: [["", "dateISO", "", "formControlName", ""], ["", "dateISO", "", "formControl", ""], ["", "dateISO", "", "ngModel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([DATE_ISO_VALIDATOR])] });

const DIGITS_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => DigitsValidator),
    multi: true
};
let DigitsValidator = class DigitsValidator {
    validate(c) {
        return digits(c);
    }
};
DigitsValidator.ɵfac = function DigitsValidator_Factory(t) { return new (t || DigitsValidator)(); };
DigitsValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: DigitsValidator, selectors: [["", "digits", "", "formControlName", ""], ["", "digits", "", "formControl", ""], ["", "digits", "", "ngModel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([DIGITS_VALIDATOR])] });

const EMAIL_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => EmailValidator),
    multi: true
};
let EmailValidator = class EmailValidator {
    validate(c) {
        return email(c);
    }
};
EmailValidator.ɵfac = function EmailValidator_Factory(t) { return new (t || EmailValidator)(); };
EmailValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: EmailValidator, selectors: [["", "ngvemail", "", "formControlName", ""], ["", "ngvemail", "", "formControl", ""], ["", "ngvemail", "", "ngModel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([EMAIL_VALIDATOR])] });

const EQUAL_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => EqualValidator),
    multi: true
};
let EqualValidator = class EqualValidator {
    ngOnInit() {
        this.validator = equal(this.equal);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'equal') {
                this.validator = equal(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
EqualValidator.ɵfac = function EqualValidator_Factory(t) { return new (t || EqualValidator)(); };
EqualValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: EqualValidator, selectors: [["", "equal", "", "formControlName", ""], ["", "equal", "", "formControl", ""], ["", "equal", "", "ngModel", ""]], inputs: { equal: "equal" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([EQUAL_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], EqualValidator.prototype, "equal", void 0);

const EQUAL_TO_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => EqualToValidator),
    multi: true
};
let EqualToValidator = class EqualToValidator {
    ngOnInit() {
        this.validator = equalTo(this.equalTo);
    }
    validate(c) {
        return this.validator(c);
    }
};
EqualToValidator.ɵfac = function EqualToValidator_Factory(t) { return new (t || EqualToValidator)(); };
EqualToValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: EqualToValidator, selectors: [["", "equalTo", "", "formControlName", ""], ["", "equalTo", "", "formControl", ""], ["", "equalTo", "", "ngModel", ""]], inputs: { equalTo: "equalTo" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([EQUAL_TO_VALIDATOR])] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"])
], EqualToValidator.prototype, "equalTo", void 0);

const GREATER_THAN_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => GreaterThanValidator),
    multi: true
};
let GreaterThanValidator = class GreaterThanValidator {
    ngOnInit() {
        this.validator = gt(this.gt);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'gt') {
                this.validator = gt(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
GreaterThanValidator.ɵfac = function GreaterThanValidator_Factory(t) { return new (t || GreaterThanValidator)(); };
GreaterThanValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: GreaterThanValidator, selectors: [["", "gt", "", "formControlName", ""], ["", "gt", "", "formControl", ""], ["", "gt", "", "ngModel", ""]], inputs: { gt: "gt" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([GREATER_THAN_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], GreaterThanValidator.prototype, "gt", void 0);

const GREATER_THAN_EQUAL_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => GreaterThanEqualValidator),
    multi: true
};
let GreaterThanEqualValidator = class GreaterThanEqualValidator {
    ngOnInit() {
        this.validator = gte(this.gte);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'gte') {
                this.validator = gte(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
GreaterThanEqualValidator.ɵfac = function GreaterThanEqualValidator_Factory(t) { return new (t || GreaterThanEqualValidator)(); };
GreaterThanEqualValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: GreaterThanEqualValidator, selectors: [["", "gte", "", "formControlName", ""], ["", "gte", "", "formControl", ""], ["", "gte", "", "ngModel", ""]], inputs: { gte: "gte" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([GREATER_THAN_EQUAL_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], GreaterThanEqualValidator.prototype, "gte", void 0);

const JSON_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => JSONValidator),
    multi: true
};
let JSONValidator = class JSONValidator {
    validate(c) {
        return json(c);
    }
};
JSONValidator.ɵfac = function JSONValidator_Factory(t) { return new (t || JSONValidator)(); };
JSONValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: JSONValidator, selectors: [["", "json", "", "formControlName", ""], ["", "json", "", "formControl", ""], ["", "json", "", "ngModel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([JSON_VALIDATOR])] });

const LESS_THAN_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => LessThanValidator),
    multi: true
};
let LessThanValidator = class LessThanValidator {
    ngOnInit() {
        this.validator = lt(this.lt);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'lt') {
                this.validator = lt(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
LessThanValidator.ɵfac = function LessThanValidator_Factory(t) { return new (t || LessThanValidator)(); };
LessThanValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: LessThanValidator, selectors: [["", "lt", "", "formControlName", ""], ["", "lt", "", "formControl", ""], ["", "lt", "", "ngModel", ""]], inputs: { lt: "lt" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([LESS_THAN_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], LessThanValidator.prototype, "lt", void 0);

const LESS_THAN_EQUAL_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => LessThanEqualValidator),
    multi: true
};
let LessThanEqualValidator = class LessThanEqualValidator {
    ngOnInit() {
        this.validator = lte(this.lte);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'lte') {
                this.validator = lte(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
LessThanEqualValidator.ɵfac = function LessThanEqualValidator_Factory(t) { return new (t || LessThanEqualValidator)(); };
LessThanEqualValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: LessThanEqualValidator, selectors: [["", "lte", "", "formControlName", ""], ["", "lte", "", "formControl", ""], ["", "lte", "", "ngModel", ""]], inputs: { lte: "lte" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([LESS_THAN_EQUAL_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], LessThanEqualValidator.prototype, "lte", void 0);

const MAX_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => MaxValidator),
    multi: true
};
let MaxValidator = class MaxValidator {
    ngOnInit() {
        this.validator = max(this.max);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'max') {
                this.validator = max(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
MaxValidator.ɵfac = function MaxValidator_Factory(t) { return new (t || MaxValidator)(); };
MaxValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MaxValidator, selectors: [["", "max", "", "formControlName", ""], ["", "max", "", "formControl", ""], ["", "max", "", "ngModel", ""]], inputs: { max: "max" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAX_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], MaxValidator.prototype, "max", void 0);

const MAX_DATE_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => MaxDateValidator),
    multi: true
};
let MaxDateValidator = class MaxDateValidator {
    ngOnInit() {
        this.validator = maxDate(this.maxDate);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'maxDate') {
                this.validator = maxDate(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
MaxDateValidator.ɵfac = function MaxDateValidator_Factory(t) { return new (t || MaxDateValidator)(); };
MaxDateValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MaxDateValidator, selectors: [["", "maxDate", "", "formControlName", ""], ["", "maxDate", "", "formControl", ""], ["", "maxDate", "", "ngModel", ""]], inputs: { maxDate: "maxDate" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MAX_DATE_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], MaxDateValidator.prototype, "maxDate", void 0);

const MIN_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => MinValidator),
    multi: true
};
let MinValidator = class MinValidator {
    ngOnInit() {
        this.validator = min(this.min);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'min') {
                this.validator = min(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
MinValidator.ɵfac = function MinValidator_Factory(t) { return new (t || MinValidator)(); };
MinValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MinValidator, selectors: [["", "min", "", "formControlName", ""], ["", "min", "", "formControl", ""], ["", "min", "", "ngModel", ""]], inputs: { min: "min" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MIN_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], MinValidator.prototype, "min", void 0);

const MIN_DATE_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => MinDateValidator),
    multi: true
};
let MinDateValidator = class MinDateValidator {
    ngOnInit() {
        this.validator = minDate(this.minDate);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'minDate') {
                this.validator = minDate(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
MinDateValidator.ɵfac = function MinDateValidator_Factory(t) { return new (t || MinDateValidator)(); };
MinDateValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: MinDateValidator, selectors: [["", "minDate", "", "formControlName", ""], ["", "minDate", "", "formControl", ""], ["", "minDate", "", "ngModel", ""]], inputs: { minDate: "minDate" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([MIN_DATE_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], MinDateValidator.prototype, "minDate", void 0);

const NOT_EQUAL_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => NotEqualValidator),
    multi: true
};
let NotEqualValidator = class NotEqualValidator {
    ngOnInit() {
        this.validator = notEqual(this.notEqual);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'notEqual') {
                this.validator = notEqual(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
NotEqualValidator.ɵfac = function NotEqualValidator_Factory(t) { return new (t || NotEqualValidator)(); };
NotEqualValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NotEqualValidator, selectors: [["", "notEqual", "", "formControlName", ""], ["", "notEqual", "", "formControl", ""], ["", "notEqual", "", "ngModel", ""]], inputs: { notEqual: "notEqual" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([NOT_EQUAL_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], NotEqualValidator.prototype, "notEqual", void 0);

const NOT_EQUAL_TO_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => NotEqualToValidator),
    multi: true
};
let NotEqualToValidator = class NotEqualToValidator {
    ngOnInit() {
        this.validator = notEqualTo(this.notEqualTo);
    }
    validate(c) {
        return this.validator(c);
    }
};
NotEqualToValidator.ɵfac = function NotEqualToValidator_Factory(t) { return new (t || NotEqualToValidator)(); };
NotEqualToValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NotEqualToValidator, selectors: [["", "notEqualTo", "", "formControlName", ""], ["", "notEqualTo", "", "formControl", ""], ["", "notEqualTo", "", "ngModel", ""]], inputs: { notEqualTo: "notEqualTo" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([NOT_EQUAL_TO_VALIDATOR])] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"])
], NotEqualToValidator.prototype, "notEqualTo", void 0);

const NUMBER_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => NumberValidator),
    multi: true
};
let NumberValidator = class NumberValidator {
    validate(c) {
        return number(c);
    }
};
NumberValidator.ɵfac = function NumberValidator_Factory(t) { return new (t || NumberValidator)(); };
NumberValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: NumberValidator, selectors: [["", "number", "", "formControlName", ""], ["", "number", "", "formControl", ""], ["", "number", "", "ngModel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([NUMBER_VALIDATOR])] });

const PROPERTY_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => PropertyValidator),
    multi: true
};
let PropertyValidator = class PropertyValidator {
    ngOnInit() {
        this.validator = property(this.property);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'property') {
                this.validator = property(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
PropertyValidator.ɵfac = function PropertyValidator_Factory(t) { return new (t || PropertyValidator)(); };
PropertyValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: PropertyValidator, selectors: [["", "property", "", "formControlName", ""], ["", "property", "", "formControl", ""], ["", "property", "", "ngModel", ""]], inputs: { property: "property" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([PROPERTY_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], PropertyValidator.prototype, "property", void 0);

const RANGE_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => RangeValidator),
    multi: true
};
let RangeValidator = class RangeValidator {
    ngOnInit() {
        this.validator = range(this.range);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'range') {
                this.validator = range(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
RangeValidator.ɵfac = function RangeValidator_Factory(t) { return new (t || RangeValidator)(); };
RangeValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: RangeValidator, selectors: [["", "range", "", "formControlName", ""], ["", "range", "", "formControl", ""], ["", "range", "", "ngModel", ""]], inputs: { range: "range" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([RANGE_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], RangeValidator.prototype, "range", void 0);

const RANGE_LENGTH_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => RangeLengthValidator),
    multi: true
};
let RangeLengthValidator = class RangeLengthValidator {
    ngOnInit() {
        this.validator = rangeLength(this.rangeLength);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'rangeLength') {
                this.validator = rangeLength(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
RangeLengthValidator.ɵfac = function RangeLengthValidator_Factory(t) { return new (t || RangeLengthValidator)(); };
RangeLengthValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: RangeLengthValidator, selectors: [["", "rangeLength", "", "formControlName", ""], ["", "rangeLength", "", "formControl", ""], ["", "rangeLength", "", "ngModel", ""]], inputs: { rangeLength: "rangeLength" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([RANGE_LENGTH_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], RangeLengthValidator.prototype, "rangeLength", void 0);

const URL_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => UrlValidator),
    multi: true
};
let UrlValidator = class UrlValidator {
    validate(c) {
        return url(c);
    }
};
UrlValidator.ɵfac = function UrlValidator_Factory(t) { return new (t || UrlValidator)(); };
UrlValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: UrlValidator, selectors: [["", "url", "", "formControlName", ""], ["", "url", "", "formControl", ""], ["", "url", "", "ngModel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([URL_VALIDATOR])] });

const UUID_VALIDATOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => UUIDValidator),
    multi: true
};
let UUIDValidator = class UUIDValidator {
    ngOnInit() {
        this.validator = uuid(this.uuid);
    }
    ngOnChanges(changes) {
        for (const key in changes) {
            if (key === 'uuid') {
                this.validator = uuid(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    validate(c) {
        return this.validator(c);
    }
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
};
UUIDValidator.ɵfac = function UUIDValidator_Factory(t) { return new (t || UUIDValidator)(); };
UUIDValidator.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({ type: UUIDValidator, selectors: [["", "uuid", "", "formControlName", ""], ["", "uuid", "", "formControl", ""], ["", "uuid", "", "ngModel", ""]], inputs: { uuid: "uuid" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([UUID_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]] });
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], UUIDValidator.prototype, "uuid", void 0);

const CustomValidators = {
    arrayLength,
    base64,
    creditCard,
    date,
    dateISO,
    digits,
    email,
    equal,
    equalTo,
    gt,
    gte,
    json,
    lt,
    lte,
    max,
    maxDate,
    min,
    minDate,
    notEqual,
    notEqualTo,
    number,
    property,
    range,
    rangeLength,
    url,
    uuid
};
const CustomDirectives = [
    ArrayLengthValidator,
    Base64Validator,
    CreditCardValidator,
    DateValidator,
    DateISOValidator,
    DigitsValidator,
    EmailValidator,
    EqualValidator,
    EqualToValidator,
    GreaterThanValidator,
    GreaterThanEqualValidator,
    JSONValidator,
    LessThanValidator,
    LessThanEqualValidator,
    MaxValidator,
    MaxDateValidator,
    MinValidator,
    MinDateValidator,
    NotEqualValidator,
    NotEqualToValidator,
    NumberValidator,
    PropertyValidator,
    RangeValidator,
    RangeLengthValidator,
    UrlValidator,
    UUIDValidator
];
let CustomFormsModule = class CustomFormsModule {
};
CustomFormsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CustomFormsModule });
CustomFormsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function CustomFormsModule_Factory(t) { return new (t || CustomFormsModule)(); } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ArrayLengthValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[arrayLength][formControlName],[arrayLength][formControl],[arrayLength][ngModel]',
                providers: [ARRAY_LENGTH_VALIDATOR]
            }]
    }], null, { arrayLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](Base64Validator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[base64][formControlName],[base64][formControl],[base64][ngModel]',
                providers: [BASE64_VALIDATOR]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CreditCardValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]',
                providers: [CREDIT_CARD_VALIDATOR]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DateValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[date][formControlName],[date][formControl],[date][ngModel]',
                providers: [DATE_VALIDATOR]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DateISOValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[dateISO][formControlName],[dateISO][formControl],[dateISO][ngModel]',
                providers: [DATE_ISO_VALIDATOR]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DigitsValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[digits][formControlName],[digits][formControl],[digits][ngModel]',
                providers: [DIGITS_VALIDATOR]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EmailValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[ngvemail][formControlName],[ngvemail][formControl],[ngvemail][ngModel]',
                providers: [EMAIL_VALIDATOR]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EqualValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[equal][formControlName],[equal][formControl],[equal][ngModel]',
                providers: [EQUAL_VALIDATOR]
            }]
    }], null, { equal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EqualToValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[equalTo][formControlName],[equalTo][formControl],[equalTo][ngModel]',
                providers: [EQUAL_TO_VALIDATOR]
            }]
    }], null, { equalTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GreaterThanValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[gt][formControlName],[gt][formControl],[gt][ngModel]',
                providers: [GREATER_THAN_VALIDATOR]
            }]
    }], null, { gt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GreaterThanEqualValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[gte][formControlName],[gte][formControl],[gte][ngModel]',
                providers: [GREATER_THAN_EQUAL_VALIDATOR]
            }]
    }], null, { gte: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](JSONValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[json][formControlName],[json][formControl],[json][ngModel]',
                providers: [JSON_VALIDATOR]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LessThanValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[lt][formControlName],[lt][formControl],[lt][ngModel]',
                providers: [LESS_THAN_VALIDATOR]
            }]
    }], null, { lt: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LessThanEqualValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[lte][formControlName],[lte][formControl],[lte][ngModel]',
                providers: [LESS_THAN_EQUAL_VALIDATOR]
            }]
    }], null, { lte: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaxValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[max][formControlName],[max][formControl],[max][ngModel]',
                providers: [MAX_VALIDATOR]
            }]
    }], null, { max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MaxDateValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[maxDate][formControlName],[maxDate][formControl],[maxDate][ngModel]',
                providers: [MAX_DATE_VALIDATOR]
            }]
    }], null, { maxDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MinValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[min][formControlName],[min][formControl],[min][ngModel]',
                providers: [MIN_VALIDATOR]
            }]
    }], null, { min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MinDateValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[minDate][formControlName],[minDate][formControl],[minDate][ngModel]',
                providers: [MIN_DATE_VALIDATOR]
            }]
    }], null, { minDate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NotEqualValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[notEqual][formControlName],[notEqual][formControl],[notEqual][ngModel]',
                providers: [NOT_EQUAL_VALIDATOR]
            }]
    }], null, { notEqual: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NotEqualToValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[notEqualTo][formControlName],[notEqualTo][formControl],[notEqualTo][ngModel]',
                providers: [NOT_EQUAL_TO_VALIDATOR]
            }]
    }], null, { notEqualTo: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NumberValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[number][formControlName],[number][formControl],[number][ngModel]',
                providers: [NUMBER_VALIDATOR]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PropertyValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[property][formControlName],[property][formControl],[property][ngModel]',
                providers: [PROPERTY_VALIDATOR]
            }]
    }], null, { property: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RangeValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[range][formControlName],[range][formControl],[range][ngModel]',
                providers: [RANGE_VALIDATOR]
            }]
    }], null, { range: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RangeLengthValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[rangeLength][formControlName],[rangeLength][formControl],[rangeLength][ngModel]',
                providers: [RANGE_LENGTH_VALIDATOR]
            }]
    }], null, { rangeLength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UrlValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[url][formControlName],[url][formControl],[url][ngModel]',
                providers: [URL_VALIDATOR]
            }]
    }], null, null); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UUIDValidator, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
                selector: '[uuid][formControlName],[uuid][formControl],[uuid][ngModel]',
                providers: [UUID_VALIDATOR]
            }]
    }], null, { uuid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CustomFormsModule, { declarations: [ArrayLengthValidator, Base64Validator, CreditCardValidator, DateValidator, DateISOValidator, DigitsValidator, EmailValidator, EqualValidator, EqualToValidator, GreaterThanValidator, GreaterThanEqualValidator, JSONValidator, LessThanValidator, LessThanEqualValidator, MaxValidator, MaxDateValidator, MinValidator, MinDateValidator, NotEqualValidator, NotEqualToValidator, NumberValidator, PropertyValidator, RangeValidator, RangeLengthValidator, UrlValidator, UUIDValidator], exports: [ArrayLengthValidator, Base64Validator, CreditCardValidator, DateValidator, DateISOValidator, DigitsValidator, EmailValidator, EqualValidator, EqualToValidator, GreaterThanValidator, GreaterThanEqualValidator, JSONValidator, LessThanValidator, LessThanEqualValidator, MaxValidator, MaxDateValidator, MinValidator, MinDateValidator, NotEqualValidator, NotEqualToValidator, NumberValidator, PropertyValidator, RangeValidator, RangeLengthValidator, UrlValidator, UUIDValidator] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CustomFormsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [CustomDirectives],
                exports: [CustomDirectives]
            }]
    }], null, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-custom-validators.js.map

/***/ })

}]);
//# sourceMappingURL=views-sessions-sessions-module-es2015.js.map