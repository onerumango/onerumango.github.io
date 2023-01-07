"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_deposit-topup_deposit-topup_module_ts"],{

/***/ 98361:
/*!*********************************************************************!*\
  !*** ./src/app/pages/deposit-topup/deposit-topup-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepositTopupPageRoutingModule": () => (/* binding */ DepositTopupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _deposit_topup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deposit-topup.page */ 64353);




const routes = [
    {
        path: '',
        component: _deposit_topup_page__WEBPACK_IMPORTED_MODULE_0__.DepositTopupPage
    }
];
let DepositTopupPageRoutingModule = class DepositTopupPageRoutingModule {
};
DepositTopupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DepositTopupPageRoutingModule);



/***/ }),

/***/ 9161:
/*!*************************************************************!*\
  !*** ./src/app/pages/deposit-topup/deposit-topup.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepositTopupPageModule": () => (/* binding */ DepositTopupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _deposit_topup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deposit-topup-routing.module */ 98361);
/* harmony import */ var _deposit_topup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deposit-topup.page */ 64353);







let DepositTopupPageModule = class DepositTopupPageModule {
};
DepositTopupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _deposit_topup_routing_module__WEBPACK_IMPORTED_MODULE_0__.DepositTopupPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_deposit_topup_page__WEBPACK_IMPORTED_MODULE_1__.DepositTopupPage]
    })
], DepositTopupPageModule);



/***/ }),

/***/ 64353:
/*!***********************************************************!*\
  !*** ./src/app/pages/deposit-topup/deposit-topup.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepositTopupPage": () => (/* binding */ DepositTopupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _deposit_topup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deposit-topup.page.html?ngResource */ 93640);
/* harmony import */ var _deposit_topup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deposit-topup.page.scss?ngResource */ 93712);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);






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
            depositAccount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            accountBalance: [' $12,09,89', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            topUpAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            payFromAccount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            revisedPrincipalAmount: [' $12,09,89', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            revisedMaturityAmount: [' $12,09,89', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            // repaymentAmount:['', [Validators.required]]
        });
        console.log(this.loanForm.value);
    }
    save(fb) {
        this.router.navigate(['token-generation']);
    }
    previous1() {
        this.router.navigate(['dashboard']);
    }
};
DepositTopupPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
DepositTopupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-deposit-topup',
        template: _deposit_topup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_deposit_topup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DepositTopupPage);



/***/ }),

/***/ 93712:
/*!************************************************************************!*\
  !*** ./src/app/pages/deposit-topup/deposit-topup.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".dep_header {\n  padding-top: 4%;\n  padding-bottom: 3%;\n  font-weight: bold;\n}\n\n.box {\n  font-weight: bold;\n  border-width: thin;\n  border-radius: 13px;\n  width: 95%;\n  height: 55px;\n  margin-top: 10px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt rgba(0, 0, 0, 0.1607843137);\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.inputCard {\n  padding-top: 7%;\n  padding-left: 5%;\n  font-family: \"Montserrat\" !important;\n}\n\nion-label {\n  color: gray;\n  font-size: 16px;\n  font-weight: bold;\n  font-family: \"Montserrat\" !important;\n}\n\nion-back-button {\n  color: blue;\n}\n\nion-input {\n  color: black !important;\n  font-size: 14px;\n  font-weight: bold;\n  --placeholder-color: black !important;\n  border: 1px solid #f1f1f1 !important;\n  font-family: \"Montserrat\" !important;\n}\n\n.text {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  color: rgb(70, 111, 254);\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-button {\n  width: 95%;\n  padding-left: 5%;\n  height: 50px;\n}\n\n.ion-padding-top {\n  padding-top: 10%;\n}\n\nion-icon {\n  font-size: xx-large;\n  color: rgb(70, 111, 254);\n  display: inline-block;\n  vertical-align: middle;\n}\n\nion-toolbar {\n  margin-top: 5%;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n}\n\nion-card {\n  margin-inline: 18px;\n  background-color: #ecf3f2;\n  color: black;\n  border-radius: 20px;\n  margin-top: 30pt;\n  background-color: rgba(236, 243, 242, 0.6);\n  box-shadow: 0 3pt 6pt rgba(0, 0, 0, 0.1607843137);\n}\n\n.inputCard1 {\n  width: 341pt;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-left: 17pt;\n  padding-top: 12pt;\n  padding-bottom: 12pt;\n  font-family: \"Montserrat\" !important;\n  background-color: rgba(236, 243, 242, 0.6);\n  border-radius: 20px;\n}\n\nion-select {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcG9zaXQtdG9wdXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFDRjs7QUFDQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFFQSxtQkFBQTtFQUlBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFFQSxxRkFBQTtFQUlBLGlEQUFBO0VBRUEsd0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FBUEY7O0FBVUE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSxvQ0FBQTtBQVJGOztBQVVBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0FBUEY7O0FBU0E7RUFDRSxXQUFBO0FBTkY7O0FBUUE7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBRUEsb0NBQUE7RUFDQSxvQ0FBQTtBQU5GOztBQVFBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQUxGOztBQU9BO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUpGOztBQU1BO0VBQ0UsZ0JBQUE7QUFIRjs7QUFLQTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBRkY7O0FBSUE7RUFDRSxjQUFBO0VBQ0Esa0NBQUE7QUFERjs7QUFHQTtFQVNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBDQUFBO0VBRUEsaURBQUE7QUFURjs7QUFZQTtFQUNFLFlBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBR0Esb0NBQUE7RUFDQSwwQ0FBQTtFQUVBLG1CQUFBO0FBWkY7O0FBaUJBO0VBQ0UsaUJBQUE7QUFkRiIsImZpbGUiOiJkZXBvc2l0LXRvcHVwLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kZXBfaGVhZGVyIHtcclxuICBwYWRkaW5nLXRvcDogNCU7XHJcbiAgcGFkZGluZy1ib3R0b206IDMlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5ib3gge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGJvcmRlci13aWR0aDogdGhpbjtcclxuICAvLyBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgLy8gYm94LXNoYWRvdzogMCA1cHQgNXB0IC0ycHQgI0QzRDNEMztcclxuICAvLyBib3gtc2hhZG93OiAwIDAgNXB0IDAuNXB0ICNEM0QzRDM7XHJcbiAgLy8gYm94LXNoYWRvdzogMHB4IDE1cHggMTBweCAtMTVweCAjRDNEM0QzO1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgaGVpZ2h0OiA1NXB4O1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSksXHJcbiAgICByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSlcclxuICApO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcblxyXG4gIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xyXG59XHJcblxyXG4uaW5wdXRDYXJkIHtcclxuICBwYWRkaW5nLXRvcDogNyU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuXHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWxhYmVsIHtcclxuICBjb2xvcjogZ3JheTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWJhY2stYnV0dG9uIHtcclxuICBjb2xvcjogYmx1ZTtcclxufVxyXG5pb24taW5wdXQge1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIC8vIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbn1cclxuLnRleHQge1xyXG4gIG1hcmdpbi1sZWZ0OiAyJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBjb2xvcjogcmdiKDcwLCAxMTEsIDI1NCk7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1idXR0b24ge1xyXG4gIHdpZHRoOiA5NSU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuLmlvbi1wYWRkaW5nLXRvcCB7XHJcbiAgcGFkZGluZy10b3A6IDEwJTtcclxufVxyXG5pb24taWNvbiB7XHJcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICBjb2xvcjogcmdiKDcwLCAxMTEsIDI1NCk7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbn1cclxuaW9uLXRvb2xiYXIge1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNkM2QzZDM7XHJcbn1cclxuaW9uLWNhcmQge1xyXG4gIC8vIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAvLyBtYXJnaW4tbGVmdDogMjBweDtcclxuICAvLyBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIC8vIGZsZXg6MTtcclxuICAvLyB3aWR0aDozNDFwdDtcclxuICAvLyBoZWlnaHQ6MTU5cHQ7XHJcbiAgLy8gbWFyZ2luLWxlZnQ6IDE3cHQ7XHJcbiAgLy8gbWFyZ2luLXJpZ2h0OiAxN3B0O1xyXG4gIG1hcmdpbi1pbmxpbmU6IDE4cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjNmMjtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBtYXJnaW4tdG9wOiAzMHB0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM2LCAyNDMsIDI0MiwgMC42KTtcclxuICAvLyBvcGFjaXR5OiA2MCU7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxufVxyXG4vLyAtY2FyZHtcclxuLmlucHV0Q2FyZDEge1xyXG4gIHdpZHRoOiAzNDFwdDtcclxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xyXG4gIG1hcmdpbi1sZWZ0OiAxN3B0O1xyXG4gIHBhZGRpbmctdG9wOiAxMnB0O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMnB0O1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNFQ0YzRjI7XHJcbiAgLy8gIG9wYWNpdHk6IDYwJTtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNiwgMjQzLCAyNDIsIDAuNik7XHJcblxyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcblxyXG4gIC8vIG1hcmdpbi1yaWdodDogMTdwdDtcclxufVxyXG4vLyAgICAgfVxyXG5pb24tc2VsZWN0IHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 93640:
/*!************************************************************************!*\
  !*** ./src/app/pages/deposit-topup/deposit-topup.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"dep_header\">\r\n    <ion-icon name=\"chevron-back-outline\" (click)=\"previous1()\"></ion-icon>\r\n    <span class=\"text\">Deposit Top Up</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div>\r\n    <form [formGroup]=\"loanForm\">\r\n      <div class=\"inputCard\">\r\n        <ion-label>Deposit Account*</ion-label>\r\n        <ion-select\r\n          [compareWith]=\"compareWith\"\r\n          class=\"box\"\r\n          mode=\"ios\"\r\n          formControlName=\"depositAccount\"\r\n          ngDefaultControl\r\n        >\r\n          <ion-select-option *ngFor=\"let user of users\" [value]=\"user\"\r\n            >{{user}}</ion-select-option\r\n          >\r\n        </ion-select>\r\n      </div>\r\n      <div class=\"inputCard\">\r\n        <ion-label\r\n          position=\"stacked\"\r\n          class=\"labelCard\"\r\n          formControlName=\"accountBalance\"\r\n          ngDefaultControl\r\n          >Account Balance : $12,09,89</ion-label\r\n        >\r\n      </div>\r\n\r\n      <div class=\"inputCard\">\r\n        <ion-label>Top Up Amount*</ion-label>\r\n        <ion-input\r\n          class=\"box\"\r\n          formControlName=\"topUpAmount\"\r\n          ngDefaultControl\r\n        ></ion-input>\r\n      </div>\r\n\r\n      <div class=\"inputCard\">\r\n        <ion-label>Pay From Account*</ion-label>\r\n        <ion-input\r\n          class=\"box\"\r\n          formControlName=\"payFromAccount\"\r\n          ngDefaultControl\r\n        ></ion-input>\r\n      </div>\r\n\r\n      <ion-card>\r\n        <div class=\"inputCard1\">\r\n          <ion-label position=\"stacked\" style=\"opacity: 75%\"\r\n            >Revised Principal Amount</ion-label\r\n          >\r\n          <br />\r\n          <br />\r\n          <ion-label\r\n            position=\"stacked\"\r\n            class=\"input\"\r\n            style=\"font-weight: bolder; color: black\"\r\n            formControlName=\"revisedPrincipalAmount\"\r\n            ngDefaultControl\r\n            >$12,09,89</ion-label\r\n          >\r\n          <br />\r\n          <br />\r\n          <ion-label position=\"stacked\" style=\"opacity: 75%\"\r\n            >Revised Maturity Amount</ion-label\r\n          >\r\n          <br />\r\n          <br />\r\n          <ion-label\r\n            position=\"stacked\"\r\n            class=\"input\"\r\n            style=\"font-weight: bolder; color: black\"\r\n            formControlName=\"revisedMaturityAmount\"\r\n            ngDefaultControl\r\n            >$12,09,89</ion-label\r\n          >\r\n        </div>\r\n      </ion-card>\r\n\r\n      <!-- <div class=\"inputCard\">\r\n      <ion-label>Repayment Amount</ion-label>\r\n      <ion-input class=\"box\" formControlName=\"repaymentAmount\" ngDefaultControl></ion-input>\r\n      \r\n      </div>\r\n     -->\r\n      <!-- <div style=\"margin-top:20px;\">\r\n    <div >\r\n    <ion-button expand=\"block\" shape=\"round\" style=\"width: 95%;padding-left: 7%;\"\r\n    (click)=\"save(loanForm.value)\">Top Up</ion-button>\r\n    </div>\r\n    \r\n    <div >\r\n    <ion-button expand=\"block\" shape=\"round\" [disabled]=\"true\" style=\"width: 95%;padding-left: 7%;\"\r\n    (click)=\"goToFAQ()\">Cancel</ion-button>\r\n    </div>\r\n  </div>\r\n     -->\r\n\r\n      <div class=\"ion-padding-top\">\r\n        <div>\r\n          <ion-button\r\n            expand=\"block\"\r\n            shape=\"round\"\r\n            style=\"width: 95%\"\r\n            (click)=\"save(loanForm.value)\"\r\n            >Top Up</ion-button\r\n          >\r\n        </div>\r\n\r\n        <div>\r\n          <ion-button\r\n            expand=\"block\"\r\n            shape=\"round\"\r\n            fill=\"clear\"\r\n            style=\"width: 95%; color: black\"\r\n            (click)=\"previous1()\"\r\n            >Cancel</ion-button\r\n          >\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_deposit-topup_deposit-topup_module_ts.js.map