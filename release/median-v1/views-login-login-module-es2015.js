(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar style=\"background-color:#e71a3d;border-bottom-color: 5px solid yellow;\"><img src=\"assets/images/dtb1.png\" alt=\"image\"></mat-toolbar>\r\n\r\n<body class=\"loginContainer\">\r\n  <br> \r\n\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"login-main\">\r\n    <mat-card style=\"border-radius: 25px;height: auto;\">\r\n     \r\n      <mat-card-header>\r\n        &nbsp;<div class=\"logoHolder\" style=\"margin-left: 13%;\">\r\n          <img src=\"assets/images/dtb.jpg\" alt=\"image\">\r\n          <!-- <img src=\"assets/images/med_logo_2.png\" alt=\"image\"> -->\r\n          <br>\r\n          <!-- <a style=\"font-size:12px\">MEDIAN &copy;-Connecting Systems</a> -->\r\n        </div>\r\n      </mat-card-header>\r\n    \r\n   \r\n      <form #loginForm=\"ngForm\" class=\"login-main\">\r\n        <div *ngIf=\"!verifyOTP\">\r\n          <div style=\"text-align: center\">\r\n          <mat-card-content fxLayout=\"column\" >\r\n            <form [formGroup]=\"signin\">\r\n              <br>\r\n              <div>\r\n                   <mat-form-field appearance=\"outline\" >\r\n                      <mat-label>User ID</mat-label>\r\n                      <input matInput type=\"text\" placeholder=\"User Id\" appUppercase  formControlName=\"username\"  required/>\r\n                      <mat-icon matSuffix>username</mat-icon>\r\n                    </mat-form-field>\r\n              </div>\r\n                <div style=\"margin-left: 3px\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Password</mat-label>\r\n                        <input matInput placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\" formControlName=\"password\" required/>\r\n                        <mat-icon matSuffix (click)=\"hide = !hide\">{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n                        <!-- <mat-hint *ngIf=\"!passwordInput.value\">Enter your password</mat-hint> -->\r\n                    </mat-form-field>\r\n                </div>\r\n             \r\n             </form>\r\n           \r\n            <mat-progress-bar mode=\"indeterminate\" *ngIf=\"loginProcessing\"></mat-progress-bar>\r\n            <br>\r\n            <div>\r\n              <button mat-raised-button routerLink=\"/dashboard\">Skip Login</button>\r\n              <button color=\"primary\" mat-raised-button (click)=\"getOtp(signin.value)\"\r\n              >\r\n                Get OTP\r\n              </button>&nbsp;\r\n              <button color=\"warn\" mat-raised-button (click)=\"forgetPwd()\">\r\n                Forgot Password\r\n                </button>\r\n            </div>\r\n            <!-- <span style=\"color:red;\"> Note that you will be locked after 3 failed attempts using wrong credentials. </span> -->\r\n            <br>\r\n            <!-- <div>\r\n              <button mat-raised-button class=\"font-weight-bold \" (click)=\"forgotPassword(loginForm.value)\">Forgot /\r\n                Reset Password</button>\r\n            </div> -->\r\n            <div class=\"content has-text-centered\">\r\n              \r\n                <a href=\"http://rumango.com/\">Developed by\r\n                  <img src=\"assets/images/rmg.png\" alt=\"RUMANGO\">\r\n\r\n                </a>\r\n              \r\n            </div>\r\n            <br>\r\n            <a style=\"font-size:12px\">MEDIAN &copy; 2020-Connecting Systems</a>\r\n           \r\n          </mat-card-content>\r\n        </div>\r\n        </div>\r\n        <div *ngIf=\"verifyOTP\" style=\"text-align: center\">\r\n          <div>\r\n            <p style=\"text-align: center;\">Enter the OTP sent to your Email</p>\r\n          </div>\r\n          <mat-form-field class=\"example-full-width\" appearance=\"outline\">\r\n            <mat-label>OTP</mat-label>\r\n            <input id=\"otp\" matInput autocomplete=\"off\" placeholder=\"OTP\" maxlength=\"6\" minlength=\"6\"\r\n              pattern=\"([0-9])\\d{6}\" name=\"otp\" ngModel required #otp=\"ngModel\" required>\r\n          </mat-form-field>\r\n          <br>\r\n          <mat-progress-bar mode=\"indeterminate\" *ngIf=\"loginProcessing\"></mat-progress-bar>\r\n          <br />\r\n          <div>\r\n            <button color=\"primary\" mat-raised-button (click)=\"test(loginForm.value,signin.value)\" [disabled]=\"!check\">\r\n              Verify\r\n            </button>&nbsp;\r\n\r\n            <button color=\"primary\" mat-raised-button (click)=\"getOtp(signin.value); loginForm.reset()\" [disabled]=\"check\">\r\n              Resend OTP\r\n            </button>&nbsp;\r\n\r\n            <button color=\"warn\" mat-raised-button (click)=\"backToLoginScreen()\">\r\n              Exit\r\n            </button>\r\n          </div>\r\n          <br>\r\n          <div class=\"content has-text-centered\">\r\n            \r\n              <a href=\"http://rumango.com/\">Developed by\r\n                <img src=\"assets/images/rmg.png\" alt=\"RUMANGO\">\r\n              </a>\r\n           \r\n          </div>\r\n        </div>\r\n      </form>\r\n    </mat-card>\r\n  </div>\r\n  <br><br>\r\n  \r\n  <br>\r\n</body>");

/***/ }),

/***/ "./src/app/shared/directives/app-password.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/directives/app-password.directive.ts ***!
  \*************************************************************/
/*! exports provided: AppPasswordDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppPasswordDirective", function() { return AppPasswordDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppPasswordDirective = class AppPasswordDirective {
    constructor(el) {
        this.el = el;
        this._shown = false;
        this.setup();
    }
    toggle(span) {
        this._shown = !this._shown;
        if (this._shown) {
            this.el.nativeElement.setAttribute('type', 'text');
            span.innerHTML = 'Hide password';
        }
        else {
            this.el.nativeElement.setAttribute('type', 'password');
            span.innerHTML = 'Show password';
        }
    }
    setup() {
        const parent = this.el.nativeElement.parentNode;
        const span = document.createElement('span');
        span.innerHTML = `Show password`;
        span.addEventListener('click', event => {
            this.toggle(span);
        });
        parent.appendChild(span);
    }
};
AppPasswordDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
AppPasswordDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appAppPassword]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], AppPasswordDirective);



/***/ }),

/***/ "./src/app/shared/directives/dropdown-anchor.directive.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/directives/dropdown-anchor.directive.ts ***!
  \****************************************************************/
/*! exports provided: DropdownAnchorDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownAnchorDirective", function() { return DropdownAnchorDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown-link.directive */ "./src/app/shared/directives/dropdown-link.directive.ts");



let DropdownAnchorDirective = class DropdownAnchorDirective {
    constructor(navlink) {
        this.navlink = navlink;
    }
    onClick(e) {
        this.navlink.toggle();
    }
};
DropdownAnchorDirective.ctorParameters = () => [
    { type: _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_2__["DropdownLinkDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_2__["DropdownLinkDirective"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], DropdownAnchorDirective.prototype, "onClick", null);
DropdownAnchorDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appDropdownToggle]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_2__["DropdownLinkDirective"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dropdown_link_directive__WEBPACK_IMPORTED_MODULE_2__["DropdownLinkDirective"]])
], DropdownAnchorDirective);



/***/ }),

/***/ "./src/app/shared/directives/dropdown-link.directive.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/directives/dropdown-link.directive.ts ***!
  \**************************************************************/
/*! exports provided: DropdownLinkDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownLinkDirective", function() { return DropdownLinkDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown.directive */ "./src/app/shared/directives/dropdown.directive.ts");



let DropdownLinkDirective = class DropdownLinkDirective {
    constructor(nav) {
        this.nav = nav;
    }
    get open() {
        return this._open;
    }
    set open(value) {
        this._open = value;
        if (value) {
            this.nav.closeOtherLinks(this);
        }
    }
    ngOnInit() {
        this.nav.addLink(this);
    }
    ngOnDestroy() {
        this.nav.removeGroup(this);
    }
    toggle() {
        this.open = !this.open;
    }
};
DropdownLinkDirective.ctorParameters = () => [
    { type: _dropdown_directive__WEBPACK_IMPORTED_MODULE_2__["AppDropdownDirective"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_dropdown_directive__WEBPACK_IMPORTED_MODULE_2__["AppDropdownDirective"],] }] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DropdownLinkDirective.prototype, "group", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.open'),
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Boolean])
], DropdownLinkDirective.prototype, "open", null);
DropdownLinkDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appDropdownLink]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_dropdown_directive__WEBPACK_IMPORTED_MODULE_2__["AppDropdownDirective"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_dropdown_directive__WEBPACK_IMPORTED_MODULE_2__["AppDropdownDirective"]])
], DropdownLinkDirective);



/***/ }),

/***/ "./src/app/shared/directives/dropdown.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/dropdown.directive.ts ***!
  \*********************************************************/
/*! exports provided: AppDropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDropdownDirective", function() { return AppDropdownDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let AppDropdownDirective = class AppDropdownDirective {
    constructor(router) {
        this.router = router;
        this.navlinks = [];
    }
    closeOtherLinks(openLink) {
        this.navlinks.forEach((link) => {
            if (link !== openLink) {
                link.open = false;
            }
        });
    }
    addLink(link) {
        this.navlinks.push(link);
    }
    removeGroup(link) {
        const index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    }
    getUrl() {
        return this.router.url;
    }
    ngOnInit() {
        this._router = this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"])).subscribe((event) => {
            this.navlinks.forEach((link) => {
                if (link.group) {
                    const routeUrl = this.getUrl();
                    const currentUrl = routeUrl.split('/');
                    if (currentUrl.indexOf(link.group) > 0) {
                        link.open = true;
                        this.closeOtherLinks(link);
                    }
                }
            });
        });
    }
};
AppDropdownDirective.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppDropdownDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appDropdown]'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AppDropdownDirective);



/***/ }),

/***/ "./src/app/shared/directives/font-size.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/font-size.directive.ts ***!
  \**********************************************************/
/*! exports provided: FontSizeDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FontSizeDirective", function() { return FontSizeDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FontSizeDirective = class FontSizeDirective {
    constructor(fontSize, el) {
        this.fontSize = fontSize;
        this.el = el;
    }
    ngOnInit() {
        this.el.nativeElement.fontSize = this.fontSize;
    }
};
FontSizeDirective.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ['fontSize',] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
FontSizeDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[fontSize]' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"])('fontSize')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], FontSizeDirective);



/***/ }),

/***/ "./src/app/shared/directives/scroll-to.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/scroll-to.directive.ts ***!
  \**********************************************************/
/*! exports provided: ScrollToDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollToDirective", function() { return ScrollToDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ScrollToDirective = class ScrollToDirective {
    constructor(elmID, el) {
        this.elmID = elmID;
        this.el = el;
    }
    ngOnInit() { }
    currentYPosition() {
        // Firefox, Chrome, Opera, Safari
        if (self.pageYOffset)
            return self.pageYOffset;
        // Internet Explorer 6 - standards mode
        if (document.documentElement && document.documentElement.scrollTop)
            return document.documentElement.scrollTop;
        // Internet Explorer 6, 7 and 8
        if (document.body.scrollTop)
            return document.body.scrollTop;
        return 0;
    }
    ;
    elmYPosition(eID) {
        var elm = document.getElementById(eID);
        var y = elm.offsetTop;
        var node = elm;
        while (node.offsetParent && node.offsetParent != document.body) {
            node = node.offsetParent;
            y += node.offsetTop;
        }
        return y;
    }
    ;
    smoothScroll() {
        if (!this.elmID)
            return;
        var startY = this.currentYPosition();
        var stopY = this.elmYPosition(this.elmID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY);
            return;
        }
        var speed = Math.round(distance / 50);
        if (speed >= 20)
            speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY += step;
                if (leapY > stopY)
                    leapY = stopY;
                timer++;
            }
            return;
        }
        for (var i = startY; i > stopY; i -= step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY -= step;
            if (leapY < stopY)
                leapY = stopY;
            timer++;
        }
        return false;
    }
    ;
};
ScrollToDirective.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"], args: ['scrollTo',] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], ScrollToDirective.prototype, "smoothScroll", null);
ScrollToDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({ selector: '[scrollTo]' }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Attribute"])('scrollTo')),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
], ScrollToDirective);



/***/ }),

/***/ "./src/app/shared/directives/shared-directives.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/directives/shared-directives.module.ts ***!
  \***************************************************************/
/*! exports provided: SharedDirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedDirectivesModule", function() { return SharedDirectivesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _font_size_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./font-size.directive */ "./src/app/shared/directives/font-size.directive.ts");
/* harmony import */ var _scroll_to_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scroll-to.directive */ "./src/app/shared/directives/scroll-to.directive.ts");
/* harmony import */ var _dropdown_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dropdown.directive */ "./src/app/shared/directives/dropdown.directive.ts");
/* harmony import */ var _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dropdown-anchor.directive */ "./src/app/shared/directives/dropdown-anchor.directive.ts");
/* harmony import */ var _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dropdown-link.directive */ "./src/app/shared/directives/dropdown-link.directive.ts");
/* harmony import */ var _uppercase_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./uppercase.directive */ "./src/app/shared/directives/uppercase.directive.ts");
/* harmony import */ var _app_password_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-password.directive */ "./src/app/shared/directives/app-password.directive.ts");










const directives = [
    _font_size_directive__WEBPACK_IMPORTED_MODULE_3__["FontSizeDirective"],
    _scroll_to_directive__WEBPACK_IMPORTED_MODULE_4__["ScrollToDirective"],
    _dropdown_directive__WEBPACK_IMPORTED_MODULE_5__["AppDropdownDirective"],
    _dropdown_anchor_directive__WEBPACK_IMPORTED_MODULE_6__["DropdownAnchorDirective"],
    _dropdown_link_directive__WEBPACK_IMPORTED_MODULE_7__["DropdownLinkDirective"],
    _uppercase_directive__WEBPACK_IMPORTED_MODULE_8__["UppercaseDirective"],
    _app_password_directive__WEBPACK_IMPORTED_MODULE_9__["AppPasswordDirective"]
];
let SharedDirectivesModule = class SharedDirectivesModule {
};
SharedDirectivesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
        ],
        declarations: directives,
        exports: directives
    })
], SharedDirectivesModule);



/***/ }),

/***/ "./src/app/shared/directives/uppercase.directive.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/directives/uppercase.directive.ts ***!
  \**********************************************************/
/*! exports provided: UppercaseDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UppercaseDirective", function() { return UppercaseDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");

var UppercaseDirective_1;


let UppercaseDirective = UppercaseDirective_1 = class UppercaseDirective {
    constructor(_el, _renderer) {
        this._el = _el;
        this._renderer = _renderer;
    }
    /** Trata as teclas */
    onKeyDown(evt) {
        const keyCode = evt.keyCode;
        const key = evt.key;
        //  //console.log(evt)
        const value = this._el.nativeElement.value.toUpperCase();
        this._renderer.setProperty(this._el.nativeElement, 'value', value);
        this._onChange(value);
        evt.preventDefault();
        // if (keyCode >= A && keyCode <= Z) {
        // }
    }
    onBlur() {
        this._touched();
    }
    /** Implementation for ControlValueAccessor interface */
    writeValue(value) {
        this._renderer.setProperty(this._el.nativeElement, 'value', value);
    }
    /** Implementation for ControlValueAccessor interface */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /** Implementation for ControlValueAccessor interface */
    registerOnTouched(fn) {
        this._touched = fn;
    }
    /** Implementation for ControlValueAccessor interface */
    setDisabledState(isDisabled) {
        this._renderer.setProperty(this._el.nativeElement, 'disabled', isDisabled);
    }
};
UppercaseDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keyup', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], UppercaseDirective.prototype, "onKeyDown", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('blur', ['$event']),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
], UppercaseDirective.prototype, "onBlur", null);
UppercaseDirective = UppercaseDirective_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appUppercase]',
        providers: [
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(() => UppercaseDirective_1),
                multi: true,
            },
        ],
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"])()),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
], UppercaseDirective);



/***/ }),

/***/ "./src/app/views/login/login-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/views/login/login-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: loginRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginRoutes", function() { return loginRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ "./src/app/views/login/login.component.ts");


const loginRoutes = [
    {
        path: '',
        component: _login_component__WEBPACK_IMPORTED_MODULE_1__["LoginComponent"]
    }
];


/***/ }),

/***/ "./src/app/views/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/views/login/login.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button-loading {\n  width: 100% !important;\n}\n\n.space-code {\n  border-right: 1px solid rgba(0, 0, 0, 0.1);\n  height: 310px;\n  margin-top: 5%;\n  margin-left: 15px;\n}\n\ninput#otp {\n  letter-spacing: 5px;\n  border-radius: 2px;\n  z-index: 1;\n  text-align: center;\n}\n\n.loginDev {\n  background-image: url('med.jpg');\n}\n\n.loginContainer {\n  background-image: url('med.jpg');\n}\n\nbody {\n  background-color: #004e92;\n}\n\n.login-main {\n  margin-top: 0%;\n}\n\nmat-card {\n  min-width: 30%;\n}\n\n.logoHolder {\n  align-items: flex-start;\n}\n\n/*\n*css added by dev on 12/nov\n*/\n\n.mat-raised-button {\n  width: 100px;\n  height: 27px;\n  line-height: 27px;\n  vertical-align: top;\n  font-size: 11px;\n  padding: 0 0;\n  margin: 0;\n}\n\nmat-card {\n  width: 100px;\n}\n\nmat-form-field {\n  font-size: 12px;\n  width: 55%;\n  border: 1p solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbG9naW4vRjpcXG11dGh1LW9uYm9hcmRcXG1lZGlhbi1waDItdWkvc3JjXFxhcHBcXHZpZXdzXFxsb2dpblxcbG9naW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksc0JBQUE7QUNDSjs7QURFQTtFQUNJLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQ0NKOztBRENDO0VBQ0csZ0NBQUE7QUNFSjs7QURDQztFQUNHLGdDQUFBO0FDRUo7O0FEQUE7RUFDSSx5QkFBQTtBQ0dKOztBREFDO0VBQ0csY0FBQTtBQ0dKOztBRERJO0VBQ0EsY0FBQTtBQ0lKOztBRERBO0VBQ0ksdUJBQUE7QUNJSjs7QURDQTs7Q0FBQTs7QUFHQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFFQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0NKOztBREVFO0VBQ0UsWUFBQTtBQ0NKOztBREdFO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJidXR0b24tbG9hZGluZ3tcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5zcGFjZS1jb2Rle1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG4gICAgaGVpZ2h0OiAzMTBweDtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbmlucHV0I290cCB7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4gLmxvZ2luRGV2IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvbWVkLmpwZycpO1xyXG4gfVxyXG5cclxuIC5sb2dpbkNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ3NyYy9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmRzL21lZC5qcGcnKTtcclxuIH1cclxuYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDRlOTI7XHJcbn1cclxuXHJcbiAubG9naW4tbWFpbntcclxuICAgIG1hcmdpbi10b3A6IDAlO1xyXG4gICAgfVxyXG4gICAgbWF0LWNhcmR7XHJcbiAgICBtaW4td2lkdGg6IDMwJTtcclxuICAgIH1cclxuXHJcbi5sb2dvSG9sZGVyIHtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgLy8gdGV4dC1hbGlnbjogY2VudGVyXHJcblxyXG59XHJcblxyXG4vKlxyXG4qY3NzIGFkZGVkIGJ5IGRldiBvbiAxMi9ub3ZcclxuKi9cclxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMjdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gICBcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBcclxuICB9XHJcbiAgbWF0LWNhcmQge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICBcclxuICB9XHJcbiBcclxuICBtYXQtZm9ybS1maWVsZCB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB3aWR0aDogNTUlO1xyXG4gICAgYm9yZGVyOjFwIHNvbGlkIHdoaXRlO1xyXG4gICBcclxuICAgIFxyXG4gIH1cclxuICAvLyBtYXQtY2FyZCBtYXQtZm9ybS1maWVsZCB7XHJcbiAgLy8gICBmb250LXNpemU6IDEwcHg7XHJcbiAgLy8gfVxyXG4gIC8vIG1hdC1jYXJkIGEge1xyXG4gIC8vICAgZm9udC1zaXplOiAxMXB4O1xyXG4gIC8vIH1cclxuICAvLyBtYXQtY2FyZCBwIHtcclxuICAvLyAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAvLyB9XHJcbiAgIiwiYnV0dG9uLWxvYWRpbmcge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xufVxuXG4uc3BhY2UtY29kZSB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgaGVpZ2h0OiAzMTBweDtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG5pbnB1dCNvdHAge1xuICBsZXR0ZXItc3BhY2luZzogNXB4O1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHotaW5kZXg6IDE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmxvZ2luRGV2IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvbWVkLmpwZ1wiKTtcbn1cblxuLmxvZ2luQ29udGFpbmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvbWVkLmpwZ1wiKTtcbn1cblxuYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDRlOTI7XG59XG5cbi5sb2dpbi1tYWluIHtcbiAgbWFyZ2luLXRvcDogMCU7XG59XG5cbm1hdC1jYXJkIHtcbiAgbWluLXdpZHRoOiAzMCU7XG59XG5cbi5sb2dvSG9sZGVyIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbi8qXG4qY3NzIGFkZGVkIGJ5IGRldiBvbiAxMi9ub3ZcbiovXG4ubWF0LXJhaXNlZC1idXR0b24ge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMjdweDtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogMCAwO1xuICBtYXJnaW46IDA7XG59XG5cbm1hdC1jYXJkIHtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgd2lkdGg6IDU1JTtcbiAgYm9yZGVyOiAxcCBzb2xpZCB3aGl0ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/views/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/views/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login.service */ "./src/app/views/login/login.service.ts");
/* harmony import */ var src_app_shared_models_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/models/login */ "./src/app/shared/models/login.ts");
/* harmony import */ var src_app_shared_animations_rumango_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/animations/rumango-animations */ "./src/app/shared/animations/rumango-animations.ts");
/* harmony import */ var src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var src_app_shared_enc_EncrDecrService_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/enc/EncrDecrService.service */ "./src/app/shared/enc/EncrDecrService.service.ts");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _roles1_roles_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../roles1/roles.service */ "./src/app/views/roles1/roles.service.ts");






// import { User } from '../users.dto';







let LoginComponent = class LoginComponent {
    constructor(fb, route, router, apiService, authService, matSnackBar, roleService, EncrDecr) {
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.apiService = apiService;
        this.authService = authService;
        this.matSnackBar = matSnackBar;
        this.roleService = roleService;
        this.EncrDecr = EncrDecr;
        this.signin = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(3)])
        });
        this.hide = true;
        this.loginProcessing = false;
        this.verifyOTP = false;
        this.show = false;
        this.check = true;
        this.loginStatus = false;
        this.logindata1 = new src_app_shared_models_login__WEBPACK_IMPORTED_MODULE_5__["Login"]();
        this.logindata = new src_app_shared_models_login__WEBPACK_IMPORTED_MODULE_5__["Login"]();
        this.status = true;
    }
    get emailInput() { return this.signin.get('email'); }
    get passwordInput() { return this.signin.get('password'); }
    ngOnInit() {
        this.progress = false;
    }
    setActive() {
        this.verifyOTP = false;
    }
    backToLoginScreen() {
        //// console.log(this.username+'**'+this.password);
        this.verifyOTP = false;
        this.logindata.username = this.username;
        this.logindata.password = this.password;
    }
    set(keys, value) {
        var key = crypto_js__WEBPACK_IMPORTED_MODULE_11__["enc"].Utf8.parse(keys);
        var iv = crypto_js__WEBPACK_IMPORTED_MODULE_11__["enc"].Utf8.parse(keys);
        var encrypted = crypto_js__WEBPACK_IMPORTED_MODULE_11__["AES"].encrypt(crypto_js__WEBPACK_IMPORTED_MODULE_11__["enc"].Utf8.parse(value.toString()), key, {
            keySize: 128 / 8,
            iv: iv,
            mode: crypto_js__WEBPACK_IMPORTED_MODULE_11__["mode"].CBC,
            padding: crypto_js__WEBPACK_IMPORTED_MODULE_11__["pad"].Pkcs7
        });
        return encrypted.toString();
    }
    get(keys, value) {
        var key = crypto_js__WEBPACK_IMPORTED_MODULE_11__["enc"].Utf8.parse(keys);
        var iv = crypto_js__WEBPACK_IMPORTED_MODULE_11__["enc"].Utf8.parse(keys);
        var decrypted = crypto_js__WEBPACK_IMPORTED_MODULE_11__["AES"].decrypt(value, key, {
            keySize: 128 / 8,
            iv: iv,
            mode: crypto_js__WEBPACK_IMPORTED_MODULE_11__["mode"].CBC,
            padding: crypto_js__WEBPACK_IMPORTED_MODULE_11__["pad"].Pkcs7
        });
        return decrypted.toString(crypto_js__WEBPACK_IMPORTED_MODULE_11__["enc"].Utf8);
    }
    getOtp(login) {
        this.check = true;
        this.loginProcessing = true;
        //// console.log(login);
        if (login.password === '' || login.username === '') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                type: 'error',
                text: 'Please enter login credentials.',
            });
            this.loginProcessing = false;
        }
        else {
            //   login.password=this.set(7061737323313233,login.password);
            //   console.log(login.password);
            //  const d=this.get('7061737323313233',login.password);
            //   console.log(d);
            var encryptedAES = crypto_js__WEBPACK_IMPORTED_MODULE_11__["AES"].encrypt(login.password, "@12#90!^*NPR*g&*()$34#$");
            var USERNAME = crypto_js__WEBPACK_IMPORTED_MODULE_11__["AES"].encrypt(login.username, "@12#90!^*NPR*g&*()$34#$");
            //console.log(encryptedAES) ;
            var data = encryptedAES.toString();
            var uname = USERNAME.toString();
            // console.log(data);
            this.logindata1.password = data;
            this.logindata1.username = uname;
            console.log(this.logindata1);
            //   this.apiService.getOtp(this.logindata1).subscribe(
            //     res => {
            //       this.variable = res;
            //       this.otpreceivedtime = new Date();
            //       console.log(this.variable);
            //       if (this.variable) {
            //         // Swal.fire({
            //         //   type: 'error',
            //         //   text: 'Invalid Username or Password !!!',
            //         // });
            //         //// console.log("Response from backend login "+this.variable[0]);
            //         // ---------- Password Policy Implementation (BEGIN) ----------
            //         if (res.failLgnCounter != 0) {
            //           this.apiService.fetchSecurityPolicyService().subscribe(sp => {
            //             this.security = sp;
            //             this.invLogins = this.security.maxInvLogins;
            //             if (this.invLogins !== 0) {
            //               this.invLogins = this.invLogins - 1;
            //               console.log("Counter from SP ", this.invLogins);
            //               console.log("Counter in User table ", res.failLgnCounter);
            //               if (this.invLogins === res.failLgnCounter) {
            //                 Swal.fire('Contact Admin, User Account locked after ' + `${(res.failLgnCounter + 1)}` + ' wrong attempts.');
            //               }
            //             }
            //           });
            //         }
            //         // ---------- Password Policy Implementation (END) ----------
            //         if (this.variable[0] === 'true') {
            //           this.progress = true;
            //           //  console.log('inside true');
            //           this.loginProcessing = false;
            //           this.verifyOTP = true;
            //         } else {
            //           //// console.log('inside false');
            //           Swal.fire(this.variable[0]);
            //           this.loginProcessing = false;
            //         }
            //       }
            //       // else {
            //       //   if (this.variable) {
            //       //     this.progress = false;
            //       //     this.loginProcessing = false;
            //       //   }
            //       //   this.verifyOTP = true;
            //       //   this.loginProcessing = false;
            //       // }
            //     },
            //     err => {
            //       //// console.log(err)
            //       Swal.fire({
            //         text: 'Server Error',
            //       });
            //       this.loginProcessing = false;
            //     }
            //   );
            // }
            this.apiService.fetchMedUser(login.username).subscribe(response => {
                this.user = response;
                console.log(login.username);
                console.log(this.user);
                // if (this.responseforotp) {
                localStorage.setItem('userFromLogin', this.user.userId);
                sessionStorage.setItem('user_id', this.user.userId);
                //   if (this.user.newRoleForUser) {
                //   sessionStorage.setItem('user_role', this.user.newRoleForUser);
                //   // this.toString = res.logoutTime;
                //   // localStorage.setItem('lastLoginTime', this.toString);
                //   const userRoles = this.user.newRoleForUser;
                // }
                console.log("disable user -- ", this.user.statusForUser);
                console.log("auth status -- ", this.user.verifiedStatus);
                if (this.user.statusForUser === "Enable" && this.user.verifiedStatus === "A") {
                    //---------- Password Policy Implementation (BEGIN) ----------
                    console.log("Inside If ----> DisableUser :", this.user.disableUser);
                    this.apiService.fetchSecurityPolicyService().subscribe(resp => {
                        this.security = resp;
                        console.log("security", this.security);
                        this.notifyPswdExpry = this.security.notifyPasswordExpiryInDays;
                        this.pswdExpiry = this.security.pswdExpiry;
                        if (this.pswdExpiry === 0 && this.notifyPswdExpry === 0) {
                            console.log("Hitting dashboard");
                            this.router.navigate(["/dashboard"]).then(data => console.log("dashboard hit", data));
                        }
                        else {
                            console.log("Security policy - else part");
                            this.currentDate = new Date();
                            // console.log(this.user.pwdChangeDate);
                            this.changePwdDate = new Date(this.user.pwdChangeDate);
                            this.differnceInTime = this.currentDate - this.changePwdDate;
                            this.differnceInDays = Math.floor(this.differnceInTime / (1000 * 3600 * 24));
                            console.log("today's date ", this.currentDate);
                            console.log("pswd created date ", this.changePwdDate);
                            console.log("no of days diff ", this.differnceInDays);
                            this.finalDiff = this.pswdExpiry - this.differnceInDays;
                            console.log("notify user on password expiry", this.notifyPswdExpry);
                            console.log("pwd expiry ", this.security.pswdExpiry);
                            console.log("final diff", this.finalDiff);
                            if (this.finalDiff === 0 || this.finalDiff <= 0) {
                                // Swal.fire('Your password expired, Please change your password');
                                // this.router.navigate(["/forget-password"]).then(data => console.log("Forget password hit", data));
                                this.loginProcessing = false;
                                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                                    text: 'Your Password is expired. Please reset your password.',
                                    showCancelButton: true,
                                    confirmButtonColor: '#3085d6',
                                    cancelButtonColor: '#d33',
                                    confirmButtonText: 'Reset Password'
                                }).then((result) => {
                                    console.log(result.value);
                                    if (result.value) {
                                        this.router.navigate(["/forget-password"]);
                                    }
                                    else {
                                        this.router.navigate(["/"]);
                                        this.signin.reset();
                                    }
                                });
                            }
                            else {
                                this.check = true;
                                this.loginProcessing = true;
                                //// console.log(login);
                                if (login.password === '' || login.username === '') {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                                        type: 'error',
                                        text: 'Please enter login credentials.',
                                    });
                                    this.loginProcessing = false;
                                }
                                else {
                                    //   login.password=this.set(7061737323313233,login.password);
                                    //   console.log(login.password);
                                    //  const d=this.get('7061737323313233',login.password);
                                    //   console.log(d);
                                    var encryptedAES = crypto_js__WEBPACK_IMPORTED_MODULE_11__["AES"].encrypt(login.password, "@12#90!^*NPR*g&*()$34#$");
                                    var USERNAME = crypto_js__WEBPACK_IMPORTED_MODULE_11__["AES"].encrypt(login.username, "@12#90!^*NPR*g&*()$34#$");
                                    //console.log(encryptedAES) ;
                                    var data = encryptedAES.toString();
                                    var uname = USERNAME.toString();
                                    // console.log(data);
                                    this.logindata1.password = data;
                                    this.logindata1.username = uname;
                                    console.log(this.logindata1);
                                    this.apiService.getOtp(this.logindata1).subscribe(res => {
                                        this.variable = res;
                                        this.otpreceivedtime = new Date();
                                        console.log(this.variable);
                                        if (this.variable) {
                                            // Swal.fire({
                                            //   type: 'error',
                                            //   text: 'Invalid Username or Password !!!',
                                            // });
                                            //// console.log("Response from backend login "+this.variable[0]);
                                            // ---------- Password Policy Implementation (BEGIN) ----------
                                            if (res.failLgnCounter != 0) {
                                                this.apiService.fetchSecurityPolicyService().subscribe(sp => {
                                                    this.security = sp;
                                                    this.invLogins = this.security.maxInvLogins;
                                                    if (this.invLogins !== 0) {
                                                        this.invLogins = this.invLogins - 1;
                                                        console.log("Counter from SP ", this.invLogins);
                                                        console.log("Counter in User table ", res.failLgnCounter);
                                                        if (this.invLogins === res.failLgnCounter) {
                                                            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Contact Admin, User Account locked after ' + `${(res.failLgnCounter + 1)}` + ' wrong attempts.');
                                                        }
                                                    }
                                                });
                                            }
                                            // ---------- Password Policy Implementation (END) ----------
                                            if (this.variable[0] === 'true') {
                                                this.progress = true;
                                                //  console.log('inside true');
                                                this.loginProcessing = false;
                                                this.verifyOTP = true;
                                            }
                                            else {
                                                //// console.log('inside false');
                                                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire(this.variable[0]);
                                                this.loginProcessing = false;
                                            }
                                        }
                                        // else {
                                        //   if (this.variable) {
                                        //     this.progress = false;
                                        //     this.loginProcessing = false;
                                        //   }
                                        //   this.verifyOTP = true;
                                        //   this.loginProcessing = false;
                                        // }
                                    }, err => {
                                        //// console.log(err)
                                        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                                            text: 'Server Error',
                                        });
                                        this.loginProcessing = false;
                                    });
                                }
                            }
                        }
                    });
                }
            });
        }
    }
    verifyOtp(login, formdata) {
        if (!login.otp) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Provide OTP.');
            return;
        }
        this.loginProcessing = true;
        this.msg = '';
        login.username = formdata.username;
        // console.log(formdata);
        // console.log(login);
        // this.user = null;
        this.apiService.loginService(login).subscribe(res => {
            // this.user = res;
            this.responseforotp = res;
            console.log(this.responseforotp);
            if (this.responseforotp[0] == "OTP is invalid") {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                    type: 'error',
                    text: 'Enter the Valid OTP.',
                });
            }
            this.apiService.fetchMedUser(login.username).subscribe(response => {
                this.user = response;
                console.log(login.username);
                console.log(this.user);
                // if (this.responseforotp) {
                if (this.user != null) {
                    if (this.responseforotp[0] == "Time Expired") {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                            type: 'error',
                            text: 'This OTP is expired. Please click on Resend OTP to get a new OTP.',
                        });
                        this.check = false;
                    }
                    this.loginProcessing = false;
                    this.user = this.responseforotp[1];
                    console.log(this.user);
                    this.loginProcessing = false;
                    localStorage.setItem('userFromLogin', this.user.userId);
                    sessionStorage.setItem('user_id', this.user.userId);
                    //   if (this.user.newRoleForUser) {
                    //   sessionStorage.setItem('user_role', this.user.newRoleForUser);
                    //   // this.toString = res.logoutTime;
                    //   // localStorage.setItem('lastLoginTime', this.toString);
                    //   const userRoles = this.user.newRoleForUser;
                    // }
                    console.log("disable user -- ", this.user.statusForUser);
                    console.log("auth status -- ", this.user.verifiedStatus);
                    if (this.user.statusForUser === "Enable" && this.user.verifiedStatus === "A") {
                        //---------- Password Policy Implementation (BEGIN) ----------
                        console.log("Inside If ----> DisableUser :", this.user.disableUser);
                        this.apiService.fetchSecurityPolicyService().subscribe(resp => {
                            this.security = resp;
                            this.notifyPswdExpry = this.security.notifyPasswordExpiryInDays;
                            this.pswdExpiry = this.security.pswdExpiry;
                            if (this.pswdExpiry === 0 && this.notifyPswdExpry === 0) {
                                console.log("Hitting dashboard");
                                this.router.navigate(["/dashboard"]).then(data => console.log("dashboard hit", data));
                            }
                            else {
                                console.log("Security policy - else part");
                                this.currentDate = new Date();
                                // console.log(this.user.pwdChangeDate);
                                this.changePwdDate = new Date(this.user.pwdChangeDate);
                                this.differnceInTime = this.currentDate - this.changePwdDate;
                                this.differnceInDays = Math.floor(this.differnceInTime / (1000 * 3600 * 24));
                                console.log("today's date ", this.currentDate);
                                console.log("pswd created date ", this.changePwdDate);
                                console.log("no of days diff ", this.differnceInDays);
                                this.finalDiff = this.pswdExpiry - this.differnceInDays;
                                console.log("notify user on password expiry", this.notifyPswdExpry);
                                console.log("pwd expiry ", this.security.pswdExpiry);
                                console.log("final diff", this.finalDiff);
                                if (this.finalDiff === 0 || this.finalDiff <= 0) {
                                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Your password expired, Please change your password');
                                    this.router.navigate(["/forget-password"]).then(data => console.log("Forget password hit", data));
                                }
                                else {
                                    //---------- Password Policy Implementation (END) ----------
                                    console.log("Hitting dashboard");
                                    this.router.navigate(["/dashboard"]).then(data => console.log("dashboard hit", data));
                                    //---------- Password Policy Implementation (BEGIN) ----------
                                    this.currentUser = localStorage.getItem('currentUser');
                                    this.apiService.fetchMedUser(this.currentUser).subscribe(response => {
                                        this.userEntity = response;
                                        console.log(this.userEntity);
                                        this.apiService.fetchSecurityPolicyService().subscribe(resp => {
                                            this.security = resp;
                                            this.notifyPswdExpry = this.security.notifyPasswordExpiryInDays;
                                            this.pswdExpiry = this.security.pswdExpiry;
                                            if (this.pswdExpiry !== 0 && this.notifyPswdExpry !== 0) {
                                                console.log(this.currentUser);
                                                this.currentDate = new Date();
                                                this.changePwdDate = new Date(this.userEntity.pwdChangeDate);
                                                this.differnceInTime = this.currentDate - this.changePwdDate;
                                                this.differnceInDays = Math.floor(this.differnceInTime / (1000 * 3600 * 24));
                                                console.log("today's date ", this.currentDate);
                                                console.log("pswd created date ", this.changePwdDate);
                                                console.log("no of days diff ", this.differnceInDays);
                                                this.finalDiff = this.pswdExpiry - this.differnceInDays;
                                                console.log("notify user on password expiry", this.notifyPswdExpry);
                                                console.log("pwd expiry ", this.security.pswdExpiry);
                                                console.log("final diff", this.finalDiff);
                                                if (this.finalDiff > 0 && this.finalDiff <= this.notifyPswdExpry) {
                                                    sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Your password will expire in ' + `${this.finalDiff}` + ' day(s)');
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
                    this.authService.sendToken(this.user.userId);
                    this.username = this.user.userName;
                    // this.router.navigate(['/dashboard']);
                }
            });
        }, err => {
            this.loginProcessing = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Server Error ');
        });
    }
    forgotPassword(login) {
        //// console.log(login);
        if (login.username === '') {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                type: 'error',
                text: 'Please enter the username ',
            });
        }
        else {
            this.router.navigate(['forget-password']);
        }
    }
    openSnackBar(message, action) {
        this.matSnackBar.open(message, action, {
            duration: 2000
        });
    }
    forgetPwd() {
        // this.router.navigate(['/login']);
        this.router.navigate(['/forget-password']);
    }
    test(login, formdata) {
        console.log("time" + this.otpreceivedtime);
        let currentTime = new Date();
        console.log("current time", currentTime);
        var diff = currentTime.getTime() - this.otpreceivedtime.getTime();
        var minutes = diff / 60000;
        console.log(minutes);
        if (minutes >= 3) {
            if (!login.otp) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Provide OTP.');
                return;
            }
            if (this.check = true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                    type: 'error',
                    text: 'This OTP is expired. Please click on Resend OTP to get a new OTP.',
                });
            }
            this.check = false;
            console.log(this.check);
        }
        else {
            this.check = true;
            console.log(this.check);
            this.verifyOtp(login, formdata);
        }
    }
    //   gettingLogoutTimeAndDepartment()
    // {
    //   this.apiService.gettingloginTimeandDepartment(this.currentUser).subscribe(gettingTimeAndDepartemnt=>
    //     {
    //       // this.ref.markForCheck()
    //       console.log(gettingTimeAndDepartemnt);
    //       this.user=gettingTimeAndDepartemnt;
    //       console.log(this.user.logoutTime);
    //       console.log(this.user.department);
    //       this.apiService.settingdepartmentlogged(this.user.department,this.user.logoutTime);
    //       localStorage.setItem("userobj",this.user.logoutTime);
    //       localStorage.setItem("departmet",this.user.department)
    //     }
    //   );
    // }
    resend() {
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
    { type: src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"] },
    { type: _roles1_roles_service__WEBPACK_IMPORTED_MODULE_12__["RoleService"] },
    { type: src_app_shared_enc_EncrDecrService_service__WEBPACK_IMPORTED_MODULE_10__["EncrDecrService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])('pass'),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
], LoginComponent.prototype, "input", void 0);
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/login/login.component.html")).default,
        animations: src_app_shared_animations_rumango_animations__WEBPACK_IMPORTED_MODULE_6__["rumangoAnimations"],
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/views/login/login.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
        src_app_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_9__["MatSnackBar"], _roles1_roles_service__WEBPACK_IMPORTED_MODULE_12__["RoleService"],
        src_app_shared_enc_EncrDecrService_service__WEBPACK_IMPORTED_MODULE_10__["EncrDecrService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/views/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/views/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/views/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login.component */ "./src/app/views/login/login.component.ts");
/* harmony import */ var src_app_shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/directives/shared-directives.module */ "./src/app/shared/directives/shared-directives.module.ts");
/* harmony import */ var src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/angular-material/angular-material.module */ "./src/app/shared/angular-material/angular-material.module.ts");









//import { SharedComponentsModule } from 'app/shared/components/shared-components.module';


let LoginModule = class LoginModule {
};
LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            //SharedComponentsModule,
            src_app_shared_directives_shared_directives_module__WEBPACK_IMPORTED_MODULE_9__["SharedDirectivesModule"],
            src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_10__["AngularMaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__["PerfectScrollbarModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(_login_routing_module__WEBPACK_IMPORTED_MODULE_7__["loginRoutes"])
        ]
    })
], LoginModule);



/***/ })

}]);
//# sourceMappingURL=views-login-login-module-es2015.js.map