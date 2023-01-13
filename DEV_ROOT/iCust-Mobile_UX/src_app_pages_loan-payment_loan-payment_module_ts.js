"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_loan-payment_loan-payment_module_ts"],{

/***/ 77552:
/*!*******************************************************************!*\
  !*** ./src/app/pages/loan-payment/loan-payment-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanPaymentPageRoutingModule": () => (/* binding */ LoanPaymentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _loan_payment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loan-payment.page */ 5696);




const routes = [
    {
        path: '',
        component: _loan_payment_page__WEBPACK_IMPORTED_MODULE_0__.LoanPaymentPage
    }
];
let LoanPaymentPageRoutingModule = class LoanPaymentPageRoutingModule {
};
LoanPaymentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoanPaymentPageRoutingModule);



/***/ }),

/***/ 39576:
/*!***********************************************************!*\
  !*** ./src/app/pages/loan-payment/loan-payment.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanPaymentPageModule": () => (/* binding */ LoanPaymentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _loan_payment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loan-payment-routing.module */ 77552);
/* harmony import */ var _loan_payment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loan-payment.page */ 5696);







let LoanPaymentPageModule = class LoanPaymentPageModule {
};
LoanPaymentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _loan_payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoanPaymentPageRoutingModule
        ],
        declarations: [_loan_payment_page__WEBPACK_IMPORTED_MODULE_1__.LoanPaymentPage]
    })
], LoanPaymentPageModule);



/***/ }),

/***/ 5696:
/*!*********************************************************!*\
  !*** ./src/app/pages/loan-payment/loan-payment.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoanPaymentPage": () => (/* binding */ LoanPaymentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _loan_payment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loan-payment.page.html?ngResource */ 24639);
/* harmony import */ var _loan_payment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loan-payment.page.scss?ngResource */ 58947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);







let LoanPaymentPage = class LoanPaymentPage {
    constructor(fb, api, router) {
        this.fb = fb;
        this.api = api;
        this.router = router;
        this.users = ['789045667', '8789977889'];
        this.a = '678889';
        this.b = 'hjhjhj';
        this.c = '678788';
    }
    ngOnInit() {
        this.api.getLoanInfo('7483316064').subscribe((resp) => {
            console.log('backend dropdown', resp.custAccount);
            this.filteredResponseSavingAccount = resp.custAccount.filter(res => res.accountType != "loan");
            console.log("filteredResponseSave", this.filteredResponseSavingAccount);
            this.savingAccountFun(this.filteredResponseSavingAccount);
            this.filteredResponseLoanAccount = resp.custAccount.filter(res => res.accountType == "loan");
            console.log("filteredResponseSave", this.filteredResponseLoanAccount);
            // this.users=resp;
        });
        this.loanForm = this.fb.group({
            loanAccount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            accountBalance: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            currentArrears: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            currentDue: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            principalOutstanding: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            payFromAccount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            repaymentAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
        });
        console.log(this.loanForm.value);
    }
    savingAccountFun(filteredResponseSavingAccount) {
        console.log(filteredResponseSavingAccount);
        this.savingAccount = filteredResponseSavingAccount.map(a => a.accountId);
        console.log(this.savingAccount);
    }
    save(fb) {
        console.log("inside loan");
        console.log(fb);
        this.router.navigate(['token-generation']);
        //  this.router.navigate(['deposit-topup']);
    }
    previous1() {
        this.router.navigate(['dashboard']);
    }
    accountEvent(event) {
        console.log("event", event.detail.value);
        this.api.accountBalance(event.detail.value).subscribe((accbal) => {
            console.log('backend accbal', accbal.currentBalance);
            this.valueSet(accbal.currentBalance);
            // this.users=dropdown;
        });
    }
    valueSet(currentBalance) {
        this.currentBalance = currentBalance;
    }
};
LoanPaymentPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
LoanPaymentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-loan-payment',
        template: _loan_payment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_loan_payment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoanPaymentPage);



/***/ }),

/***/ 58947:
/*!**********************************************************************!*\
  !*** ./src/app/pages/loan-payment/loan-payment.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".loan_header {\n  padding-top: 4%;\n  padding-bottom: 3%;\n  font-weight: bold;\n}\n\n.box {\n  font-weight: bold;\n  border-width: thin;\n  width: 95%;\n  height: 55px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt rgba(0, 0, 0, 0.1607843137);\n  border-radius: 13px;\n  margin-top: 10px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.inputCard {\n  padding-top: 7%;\n  padding-left: 5%;\n  font-family: \"Montserrat\" !important;\n}\n\n.inputCard1 {\n  padding-top: 7%;\n  padding-left: 5%;\n  border-radius: 13px !important;\n  font-family: \"Montserrat\" !important;\n  background-color: rgba(236, 243, 242, 0.6);\n  box-shadow: 0 3pt 6pt rgba(0, 0, 0, 0.1607843137);\n  border-bottom-style: hidden;\n}\n\n.inputCard1 ion-label {\n  font-size: 14px;\n  color: black;\n  font-family: \"Montserrat\" !important;\n}\n\n.inputCard1 .input {\n  font-weight: bold;\n  font-family: \"Montserrat\" !important;\n}\n\n.labelCard {\n  color: gray;\n  font-size: 16px;\n  font-weight: bold;\n  font-family: \"Montserrat\" !important;\n}\n\n.searchbar {\n  border-radius: 10%;\n}\n\n.underline {\n  text-decoration: underline;\n  font-size: 14px;\n}\n\nion-input {\n  color: black !important;\n  font-size: 14px;\n  font-weight: bold;\n  --placeholder-color: black !important;\n  border: 1px solid #f1f1f1 !important;\n  font-family: \"Montserrat\" !important;\n}\n\nion-label {\n  color: gray;\n  font-size: 16px;\n  font-weight: bold;\n  font-family: \"Montserrat\" !important;\n}\n\nion-back-button {\n  color: blue;\n}\n\n.text {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  color: rgb(70, 111, 254);\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-button {\n  width: 95%;\n  padding-left: 5%;\n  height: 50px;\n}\n\n.ion-padding-top {\n  padding-top: 10%;\n}\n\nion-icon {\n  font-size: xx-large;\n  color: rgb(70, 111, 254);\n  display: inline-block;\n  vertical-align: middle;\n}\n\nion-toolbar {\n  margin-top: 5%;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n}\n\nion-card {\n  margin-right: 20px;\n  margin-left: 20px;\n  border-radius: 10px;\n  flex: 1;\n}\n\nion-select {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYW4tcGF5bWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUdBLFVBQUE7RUFDQSxZQUFBO0VBRUEscUZBQUE7RUFJQSxpREFBQTtFQUVBLG1CQUFBO0VBRUEsZ0JBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7QUFORjs7QUFRQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLG9DQUFBO0FBTkY7O0FBU0E7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0VBQ0EsMENBQUE7RUFFQSxpREFBQTtFQUNBLDJCQUFBO0FBUEY7O0FBU0E7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FBTkY7O0FBUUE7RUFDRSxpQkFBQTtFQUNBLG9DQUFBO0FBTEY7O0FBT0E7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7QUFKRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7O0FBS0E7RUFDRSwwQkFBQTtFQUNBLGVBQUE7QUFGRjs7QUFJQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFFQSxvQ0FBQTtFQUNBLG9DQUFBO0FBRkY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7QUFERjs7QUFHQTtFQUNFLFdBQUE7QUFBRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUFDRjs7QUFDQTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFFRjs7QUFBQTtFQUNFLGdCQUFBO0FBR0Y7O0FBREE7RUFDRSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQUlGOztBQUZBO0VBQ0UsY0FBQTtFQUNBLGtDQUFBO0FBS0Y7O0FBSEE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0FBTUY7O0FBSkE7RUFDRSxpQkFBQTtBQU9GIiwiZmlsZSI6ImxvYW4tcGF5bWVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hbl9oZWFkZXIge1xyXG4gIHBhZGRpbmctdG9wOiA0JTtcclxuICBwYWRkaW5nLWJvdHRvbTogMyU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmJveCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLy8gYm94LXNoYWRvdzogMCA1cHQgNXB0IC0ycHQgI0QzRDNEMztcclxuICB3aWR0aDogOTUlO1xyXG4gIGhlaWdodDogNTVweDtcclxuICAvLyBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI0ZGRkZGRiwgI0Y4RkFGRSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpXHJcbiAgKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gIC8vIG9wYWNpdHk6IDUwJTtcclxuICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxufVxyXG4uaW5wdXRDYXJkIHtcclxuICBwYWRkaW5nLXRvcDogNyU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuXHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5pbnB1dENhcmQxIHtcclxuICBwYWRkaW5nLXRvcDogNyU7XHJcbiAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICBib3JkZXItcmFkaXVzOiAxM3B4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzYsIDI0MywgMjQyLCAwLjYpO1xyXG5cclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IGhpZGRlbjtcclxufVxyXG4uaW5wdXRDYXJkMSBpb24tbGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbn1cclxuLmlucHV0Q2FyZDEgLmlucHV0IHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxufVxyXG4ubGFiZWxDYXJkIHtcclxuICBjb2xvcjogZ3JheTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNlYXJjaGJhciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG59XHJcbi51bmRlcmxpbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5pb24taW5wdXQge1xyXG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIC8vIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTAwJTtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWxhYmVsIHtcclxuICBjb2xvcjogZ3JheTtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWJhY2stYnV0dG9uIHtcclxuICBjb2xvcjogYmx1ZTtcclxufVxyXG4udGV4dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGNvbG9yOiByZ2IoNzAsIDExMSwgMjU0KTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG4uaW9uLXBhZGRpbmctdG9wIHtcclxuICBwYWRkaW5nLXRvcDogMTAlO1xyXG59XHJcbmlvbi1pY29uIHtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIGNvbG9yOiByZ2IoNzAsIDExMSwgMjU0KTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgYm94LXNoYWRvdzogMCA1cHQgNXB0IC0ycHQgI2QzZDNkMztcclxufVxyXG5pb24tY2FyZCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgZmxleDogMTtcclxufVxyXG5pb24tc2VsZWN0IHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 24639:
/*!**********************************************************************!*\
  !*** ./src/app/pages/loan-payment/loan-payment.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"loan_header\">\r\n    <ion-icon name=\"chevron-back-outline\" (click)=\"previous1()\"></ion-icon>\r\n    <span class=\"text\">Loan Payment</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div>\r\n    <form [formGroup]=\"loanForm\">\r\n      <div class=\"inputCard\">\r\n        <ion-label>Loan Account*</ion-label>\r\n        <ion-select\r\n          [compareWith]=\"compareWith\"\r\n          class=\"box\"\r\n          mode=\"ios\"\r\n          formControlName=\"loanAccount\"\r\n          ngDefaultControl\r\n        >\r\n          <ion-select-option *ngFor=\"let user of users\" [value]=\"user\"\r\n            >{{user}}</ion-select-option\r\n          >\r\n        </ion-select>\r\n      </div>\r\n      <div class=\"inputCard\">\r\n        <ion-label\r\n          position=\"stacked\"\r\n          class=\"labelCard\"\r\n          formControlName=\"accountBalance\"\r\n          ngDefaultControl\r\n          >Account Balance : $12,09,89</ion-label\r\n        >\r\n      </div>\r\n      <ion-card>\r\n        <div class=\"inputCard1\">\r\n          <ion-label position=\"stacked\" style=\"opacity: 45%\"\r\n            >Current Arears</ion-label\r\n          >\r\n          <br />\r\n          <br />\r\n          <ion-label\r\n            position=\"stacked\"\r\n            style=\"font-weight: bolder\"\r\n            class=\"input\"\r\n            formControlName=\"currentArrears\"\r\n            ngDefaultControl\r\n            >$12,09,89</ion-label\r\n          >\r\n          <br />\r\n          <br />\r\n          <ion-label position=\"stacked\" style=\"opacity: 45%\"\r\n            >Current Due</ion-label\r\n          >\r\n          <br />\r\n          <br />\r\n          <ion-label\r\n            position=\"stacked\"\r\n            style=\"font-weight: bolder\"\r\n            class=\"input\"\r\n            formControlName=\"currentDue\"\r\n            ngDefaultControl\r\n            >$12,09,89</ion-label\r\n          >\r\n          <br />\r\n          <br />\r\n          <ion-label position=\"stacked\" style=\"opacity: 45%\"\r\n            >Principal Outstanding</ion-label\r\n          >\r\n          <br />\r\n          <br />\r\n          <ion-label\r\n            position=\"stacked\"\r\n            style=\"font-weight: bolder\"\r\n            class=\"input\"\r\n            formControlName=\"principalOutstanding\"\r\n            ngDefaultControl\r\n            >$12,09,89</ion-label\r\n          >\r\n          <br />\r\n          <br />\r\n        </div>\r\n      </ion-card>\r\n\r\n      <div class=\"inputCard\">\r\n        <ion-label>Pay From Account*</ion-label>\r\n        <ion-input\r\n          class=\"box\"\r\n          formControlName=\"payFromAccount\"\r\n          ngDefaultControl\r\n        ></ion-input>\r\n      </div>\r\n\r\n      <div class=\"inputCard\">\r\n        <ion-label>Repayment Amount*</ion-label>\r\n        <ion-input\r\n          class=\"box\"\r\n          formControlName=\"repaymentAmount\"\r\n          ngDefaultControl\r\n        ></ion-input>\r\n      </div>\r\n\r\n      <!-- <div style=\"margin-top:20px;\">\r\n  <div >\r\n  <ion-button expand=\"block\" shape=\"round\" style=\"width: 95%;padding-left: 7%;\"\r\n  (click)=\"save(loanForm.value)\">Pay</ion-button>\r\n  </div>\r\n  \r\n  <div >\r\n  <ion-button expand=\"block\" shape=\"round\" [disabled]=\"true\" style=\"width: 95%;padding-left: 7%;\"\r\n  (click)=\"goToFAQ()\">Back</ion-button>\r\n  </div>\r\n</div>\r\n   -->\r\n      <div class=\"ion-padding-top\">\r\n        <div>\r\n          <ion-button\r\n            expand=\"block\"\r\n            shape=\"round\"\r\n            style=\"width: 95%\"\r\n            (click)=\"save(loanForm.value)\"\r\n            >Pay</ion-button\r\n          >\r\n        </div>\r\n\r\n        <div>\r\n          <ion-button\r\n            expand=\"block\"\r\n            shape=\"round\"\r\n            fill=\"clear\"\r\n            style=\"width: 95%; color: black\"\r\n            (click)=\"previous1()\"\r\n            >Cancel</ion-button\r\n          >\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_loan-payment_loan-payment_module_ts.js.map