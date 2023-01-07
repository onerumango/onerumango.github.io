(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-deposit-topup-deposit-topup-module"],{

/***/ "+igm":
/*!*********************************************************************!*\
  !*** ./src/app/views/deposit-topup/deposit-topup-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: DepositTopupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositTopupPageRoutingModule", function() { return DepositTopupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _deposit_topup_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deposit-topup.page */ "UchS");




const routes = [
    {
        path: '',
        component: _deposit_topup_page__WEBPACK_IMPORTED_MODULE_3__["DepositTopupPage"]
    }
];
let DepositTopupPageRoutingModule = class DepositTopupPageRoutingModule {
};
DepositTopupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], DepositTopupPageRoutingModule);



/***/ }),

/***/ "7cIl":
/*!*************************************************************!*\
  !*** ./src/app/views/deposit-topup/deposit-topup.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".box {\n  border-width: thin;\n  border-radius: 13px;\n  width: 95%;\n  height: 55px;\n  margin-top: 10px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.inputCard {\n  padding-top: 7%;\n  padding-left: 5%;\n  font-family: \"Montserrat\" !important;\n}\n\nion-label {\n  color: gray;\n  font-size: 14px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-back-button {\n  color: blue;\n}\n\nion-input {\n  color: black !important;\n  font-size: 14px;\n  --placeholder-color: black !important;\n  border: 1px solid #f1f1f1 !important;\n  font-family: \"Montserrat\" !important;\n}\n\n.text {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  color: #466ffe;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-button {\n  width: 95%;\n  padding-left: 5%;\n  height: 50px;\n}\n\n.ion-padding-top {\n  padding-top: 10%;\n}\n\nion-icon {\n  font-size: xx-large;\n  color: #466ffe;\n  display: inline-block;\n  vertical-align: middle;\n}\n\nion-toolbar {\n  margin-top: 5%;\n  box-shadow: 0 5pt 5pt -2pt #D3D3D3;\n}\n\nion-card {\n  margin-inline: 18px;\n  background-color: #ECF3F2;\n  color: black;\n  border-radius: 20px;\n  margin-top: 30pt;\n  background-color: rgba(236, 243, 242, 0.6);\n  box-shadow: 0 3pt 6pt #00000029;\n}\n\n.inputCard1 {\n  width: 341pt;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-left: 17pt;\n  padding-top: 12pt;\n  padding-bottom: 12pt;\n  font-family: \"Montserrat\" !important;\n  background-color: rgba(236, 243, 242, 0.6);\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxkZXBvc2l0LXRvcHVwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBRUEsbUJBQUE7RUFJQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBRUMscUZBQUE7RUFDRCwrQkFBQTtFQUVBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQUxKOztBQVFFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBRUEsb0NBQUE7QUFOSjs7QUFRSTtFQUNJLFdBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUFMUjs7QUFPUTtFQUNBLFdBQUE7QUFKUjs7QUFRUTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtFQUVBLHFDQUFBO0VBRUEsb0NBQUE7RUFDQSxvQ0FBQTtBQVBaOztBQVNRO0VBRUksZUFBQTtFQUNGLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0FBUFY7O0FBU1E7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBTlo7O0FBVVE7RUFDSSxnQkFBQTtBQVBaOztBQVNZO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQU5oQjs7QUFTWTtFQUNJLGNBQUE7RUFDRCxrQ0FBQTtBQU5mOztBQVFZO0VBU0ksbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFFQSwrQkFBQTtBQWRoQjs7QUFpQlk7RUFDSSxZQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUNDLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtFQUdULG9DQUFBO0VBQ0EsMENBQUE7RUFFQSxtQkFBQTtBQWpCUiIsImZpbGUiOiJkZXBvc2l0LXRvcHVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib3gge1xyXG4gICAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gICAgLy8gYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgICAvLyBib3gtc2hhZG93OiAwIDVwdCA1cHQgLTJwdCAjRDNEM0QzO1xyXG4gICAgLy8gYm94LXNoYWRvdzogMCAwIDVwdCAwLjVwdCAjRDNEM0QzO1xyXG4gICAgLy8gYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjRDNEM0QzO1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiOyAgICAgXHJcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxyZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuICBcclxuICAgIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcclxuICAgIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xyXG4gICAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICB9XHJcbiAgXHJcbiAgLmlucHV0Q2FyZHtcclxuICAgIHBhZGRpbmctdG9wOiA3JTtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICBcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgICBjb2xvcjpncmF5O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1iYWNrLWJ1dHRvbntcclxuICAgICAgICBjb2xvcjogYmx1ZTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pbnB1dCB7XHJcbiAgICAgICAgICAgIGNvbG9yOmJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIC8vIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAudGV4dHtcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgIGNvbG9yOnJnYig3MCwxMTEsMjU0KTtcclxuICAgICAgICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAuaW9uLXBhZGRpbmctdG9we1xyXG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1pY29ue1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOnJnYig3MCwxMTEsMjU0KTtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpb24tdG9vbGJhcntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDVwdCA1cHQgLTJwdCAjRDNEM0QzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlvbi1jYXJke1xyXG4gICAgICAgICAgICAgICAgLy8gbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgLy8gZmxleDoxO1xyXG4gICAgICAgICAgICAgICAgLy8gd2lkdGg6MzQxcHQ7XHJcbiAgICAgICAgICAgICAgICAvLyBoZWlnaHQ6MTU5cHQ7XHJcbiAgICAgICAgICAgICAgICAvLyBtYXJnaW4tbGVmdDogMTdwdDtcclxuICAgICAgICAgICAgICAgIC8vIG1hcmdpbi1yaWdodDogMTdwdDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1pbmxpbmU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUNGM0YyO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHQ7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjM2LCAyNDMsIDI0MiwgMC42KTtcclxuICAgICAgICAgICAgICAgIC8vIG9wYWNpdHk6IDYwJTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAtY2FyZHtcclxuICAgICAgICAgICAgLmlucHV0Q2FyZDF7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDozNDFwdDtcclxuICAgICAgICAgICAgICAgIGhlaWdodDpmaXQtY29udGVudDtcclxuICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTdwdDtcclxuICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDoxMnB0O1xyXG4gICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB0O1xyXG4gICAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0VDRjNGMjtcclxuICAgICAgICAgICAgICAgIC8vICBvcGFjaXR5OiA2MCU7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6cmdiYSgyMzYsIDI0MywgMjQyLCAwLjYpO1xyXG4gICAgICAgICBcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgIC8vIG1hcmdpbi1yaWdodDogMTdwdDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9XHJcbiJdfQ== */");

/***/ }),

/***/ "UchS":
/*!***********************************************************!*\
  !*** ./src/app/views/deposit-topup/deposit-topup.page.ts ***!
  \***********************************************************/
/*! exports provided: DepositTopupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositTopupPage", function() { return DepositTopupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_deposit_topup_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./deposit-topup.page.html */ "mdDE");
/* harmony import */ var _deposit_topup_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deposit-topup.page.scss */ "7cIl");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let DepositTopupPage = class DepositTopupPage {
    constructor(fb, router) {
        this.fb = fb;
        this.router = router;
        this.users = ['789045667', '8789977889'];
        this.a = '678889';
        this.b = 'hjhjhj';
        this.c = '678788';
    }
    ngOnInit() {
        this.loanForm = this.fb.group({
            depositAccount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            accountBalance: [' $12,09,89', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            topUpAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            payFromAccount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            revisedPrincipalAmount: [' $12,09,89', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            revisedMaturityAmount: [' $12,09,89', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
        console.log(this.loanForm.value);
    }
    save(fb) {
        console.log("inside loan");
        console.log(fb);
        this.router.navigate(['token-generation']);
    }
    previous1() {
        this.router.navigate(['tabs']);
    }
};
DepositTopupPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
DepositTopupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-deposit-topup',
        template: _raw_loader_deposit_topup_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_deposit_topup_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], DepositTopupPage);



/***/ }),

/***/ "jAbY":
/*!*************************************************************!*\
  !*** ./src/app/views/deposit-topup/deposit-topup.module.ts ***!
  \*************************************************************/
/*! exports provided: DepositTopupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepositTopupPageModule", function() { return DepositTopupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _deposit_topup_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deposit-topup-routing.module */ "+igm");
/* harmony import */ var _deposit_topup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./deposit-topup.page */ "UchS");







let DepositTopupPageModule = class DepositTopupPageModule {
};
DepositTopupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _deposit_topup_routing_module__WEBPACK_IMPORTED_MODULE_5__["DepositTopupPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_deposit_topup_page__WEBPACK_IMPORTED_MODULE_6__["DepositTopupPage"]]
    })
], DepositTopupPageModule);



/***/ }),

/***/ "mdDE":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/deposit-topup/deposit-topup.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-icon name=\"chevron-back-outline\" (click)=\"previous1()\"></ion-icon>\r\n    <span class=\"text\">Deposit Top Up</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n  <ion-content>\r\n\r\n    \r\n    <div>\r\n    <form  [formGroup]=\"loanForm\">\r\n    <div class=\"inputCard\">\r\n    <ion-label>Deposit Account*</ion-label>\r\n    <ion-select [compareWith]=\"compareWith\" class=\"box\" formControlName=\"depositAccount\" ngDefaultControl>\r\n      <ion-select-option *ngFor=\"let user of users\" [value]=\"user\">{{user}}</ion-select-option>\r\n    </ion-select>\r\n  \r\n    </div>\r\n    <div class=\"inputCard\">\r\n      <ion-label position=\"stacked\" class=\"labelCard\" formControlName=\"accountBalance\" ngDefaultControl>Account Balance : $12,09,89</ion-label>   \r\n      </div>\r\n\r\n      \r\n      <div class=\"inputCard\">\r\n        <ion-label>Top Up Amount*</ion-label>\r\n        <ion-input class=\"box\" formControlName=\"topUpAmount\" ngDefaultControl></ion-input>\r\n        \r\n        </div>\r\n\r\n        <div class=\"inputCard\">\r\n          <ion-label>Pay From Account*</ion-label>\r\n          <ion-input class=\"box\" formControlName=\"payFromAccount\" ngDefaultControl></ion-input>\r\n          \r\n          </div>\r\n     \r\n      <ion-card >\r\n\r\n    <div class=\"inputCard1\" >\r\n         <ion-label position=\"stacked\" style=\"opacity:75%;\">Revised Principal Amount</ion-label>\r\n         <br>\r\n         <br>\r\n         <ion-label position='stacked' class=\"input\" style=\"font-weight:bolder;color: black;\" formControlName=\"revisedPrincipalAmount\" ngDefaultControl>$12,09,89</ion-label>\r\n         <br>\r\n         <br>\r\n         <ion-label position=\"stacked\" style=\"opacity:75%;\">Revised Maturity Amount</ion-label>\r\n         <br>\r\n         <br>\r\n         <ion-label position=\"stacked\" class=\"input\"  style=\"font-weight:bolder;color: black;\" formControlName=\"revisedMaturityAmount\" ngDefaultControl>$12,09,89</ion-label>\r\n         \r\n  \r\n    </div>\r\n  \r\n  </ion-card>\r\n    \r\n   \r\n  \r\n    <!-- <div class=\"inputCard\">\r\n      <ion-label>Repayment Amount</ion-label>\r\n      <ion-input class=\"box\" formControlName=\"repaymentAmount\" ngDefaultControl></ion-input>\r\n      \r\n      </div>\r\n     -->\r\n      <!-- <div style=\"margin-top:20px;\">\r\n    <div >\r\n    <ion-button expand=\"block\" shape=\"round\" style=\"width: 95%;padding-left: 7%;\"\r\n    (click)=\"save(loanForm.value)\">Top Up</ion-button>\r\n    </div>\r\n    \r\n    <div >\r\n    <ion-button expand=\"block\" shape=\"round\" [disabled]=\"true\" style=\"width: 95%;padding-left: 7%;\"\r\n    (click)=\"goToFAQ()\">Cancel</ion-button>\r\n    </div>\r\n  </div>\r\n     -->\r\n   \r\n     <div  class=\"ion-padding-top\">\r\n      <div >\r\n      <ion-button expand=\"block\" shape=\"round\" style=\"width: 95%;\"\r\n      (click)=\"save(loanForm.value)\">Top Up</ion-button>\r\n      </div>\r\n      \r\n      <div >\r\n      <ion-button expand=\"block\" shape=\"round\" fill=\"clear\" style=\"width: 95%;color:black\"\r\n      (click)=\"previous1()\">Cancel</ion-button>\r\n      </div>\r\n      </div>\r\n      \r\n    </form>\r\n    </div>\r\n    </ion-content>\r\n  \r\n");

/***/ })

}]);
//# sourceMappingURL=views-deposit-topup-deposit-topup-module.js.map