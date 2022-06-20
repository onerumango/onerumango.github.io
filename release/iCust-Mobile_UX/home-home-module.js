(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "OonQ":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-item lines=\"none\">\r\n      <ion-avatar slot=\"end\" (click)=\"goToProfile()\">\r\n        <ng-container *ngIf=\"image == null || image == undefined; else showAvatar\">\r\n          <h1 class=\"img\" [style.background]=\"getRandomColor(i+3)\" \r\n               style=\"text-align: center; font-size: 16px; padding-top: 10px;\">\r\n            {{formData?.firstName | uppercase | slice:0:1}}{{formData?.lastName | uppercase | slice:0:1}}</h1>\r\n        </ng-container>\r\n        <ng-template #showAvatar>\r\n          <img class=\"img\" [src]=\"image\" alt=\"profile\">\r\n        </ng-template>\r\n      </ion-avatar>\r\n\r\n      <ion-label style=\"font-size: xx-large;\" class=\"font-black\">Hi {{firstName}}</ion-label>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-searchbar (click)=\"searchModal()\"></ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-app style=\"padding-top:100px;\">\r\n\t<ion-content>\r\n    <ion-slides #slider pager=\"true\" [options]=\"slideOpts\" (ionSlideDidChange)='ionSlideDidChange()'>\r\n      <ion-slide  *ngFor=\"let card of cards; index as i;\"  (click)=\"getAccountNumber(card)\">\r\n     \r\n        <div fxLayout=\"row\" >\r\n\r\n          <div >\r\n            <div class=\"slider1\">\r\n              <ion-grid>\r\n              <ion-row>\r\n                <ion-col class=\"ion-align-self-center\">\r\n                <img src=\"assets\\images\\BL2.png\" class=\"bankLogo\">\r\n                </ion-col>\r\n                <ion-col class=\"ion-align-self-center\">\r\n                <ion-icon name=\"settings-outline\" class=\"settingicon\"></ion-icon> \r\n                </ion-col>\r\n              </ion-row>\r\n              </ion-grid>\r\n            \r\n              <ion-grid>\r\n              <ion-row>\r\n                <ion-col class=\"ion-align-self-end\" size=\"4\">\r\n                <p class=\"acc-type capitalize\" >{{ card?.accountType + ' Account' }}</p>\r\n                 <p class=\"acc-type capitalize\">{{ card?.accountId }}</p>\r\n            \r\n                </ion-col>\r\n                <ion-col class=\"ion-align-self-center\" size=\"8\">\r\n                <p class=\"acc-balance leading-3 capitalize\">Account Balance</p><br>\r\n                <p class=\"acc-balance leading-3 capitalize\">{{ card?.accountCurrency | currencySymbol  }} {{  card?.amount | number: '1.'}}</p>\r\n            \r\n                </ion-col>\r\n              </ion-row>\r\n              <!-- <ion-row class=\"ion-align-items-end\">\r\n                <ion-col class=\"ion-align-self-end\">\r\n                <p class=\"balance leading-3\">{{ card?.accountCurrency | currencySymbol  }} {{  card?.amount | number: '1.'}}</p>\r\n                </ion-col>\r\n              </ion-row> -->\r\n              </ion-grid>\r\n              </div>\r\n          </div>\r\n          <div >\r\n            <ion-card  class=\"ex1\">\r\n              <div class=\"textCard mt-20\">\r\n              <ion-text style=\"font-size:x-large;\">All Transaction</ion-text>\r\n              </div>\r\n              <ion-grid class=\"mt-20\">\r\n              <ion-row>\r\n              <ion-col size=\"4\">\r\n              <ion-card class=\"transactionCards\" [disabled]=\"card?.status !=='APPROVED'\" (click)=\"goToCashWithdrawal()\">\r\n                <!-- <ion-card class=\"transactionCards\" (click)=\"goToCashWithdrawal()\"> -->\r\n                <div>\r\n                <img class=\"grid-icon\" src=\"assets\\icon\\cashw.PNG\"  alt=\"Ionic logo\">\r\n                <p class=\"card-title\" >Cash Withdrawal</p>\r\n                <!-- <h5>Cash Withdrawal</h5> -->\r\n                </div>\r\n              </ion-card>\r\n              </ion-col>\r\n              <ion-col size=\"4\">\r\n              <ion-card class=\"transactionCards\"  (click)=\"goToCashDeposit()\">\r\n                <img class=\"grid-icon\" src=\"assets\\icon\\cashdeposit.PNG\" alt=\"Ionic logo\">\r\n                <p class=\"card-title\">Cash Deposit</p>\r\n               </ion-card>\r\n              </ion-col>\r\n              <ion-col size=\"4\">\r\n              <ion-card class=\"transactionCards\" (click)=\"goToChequeDeposit()\">\r\n                <img class=\"grid-icon\" src=\"assets\\icon\\chequedeposit.PNG\" alt=\"Ionic logo\">\r\n                <p class=\"card-title\">Cheque Deposit</p>\r\n               </ion-card>\r\n              </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n              <ion-col size=\"4\">\r\n              <ion-card  class=\"transactionCards\" [disabled]=\"card?.status !=='APPROVED'\" (click)=\"goToChequeWithdrawal()\">\r\n                <div>\r\n                <img class=\"grid-icon\" src=\"assets\\icon\\cashw.PNG\"  alt=\"Ionic logo\">\r\n                <p class=\"card-title\" >Cheque Withdrawal</p>\r\n                <!-- <h5>Cash Withdrawal</h5> -->\r\n                </div>\r\n              </ion-card>\r\n              </ion-col>\r\n              <ion-col size=\"4\">\r\n              <ion-card class=\"transactionCards\" (click)=\"goToForexTransaction()\">\r\n                <img class=\"grid-icon\" src=\"assets\\icon\\cashdeposit.PNG\" alt=\"Ionic logo\">\r\n                <p class=\"card-title\">Forex Transaction</p>\r\n               </ion-card>\r\n              </ion-col>\r\n               \r\n              <!-- <ion-col>\r\n              <ion-card class=\"transactionCards\" (click)=\"goToChequeDeposit()\">\r\n                <img class=\"image3\" src=\"assets\\icon\\chequedeposit.PNG\" alt=\"Ionic logo\">\r\n                <p class=\"chequedepositcard\">Cheque Deposit</p>\r\n               </ion-card>\r\n              </ion-col> -->\r\n              <ion-col size=\"4\">\r\n              <ion-card class=\"transactionCards\" (click)=\"goToLoanPayment()\">\r\n                <div>\r\n                <img class=\"grid-icon\" src=\"assets\\icon\\cashw.PNG\"  alt=\"Ionic logo\">\r\n                <p class=\"card-title\" >Loan Payment</p>\r\n                <!-- <h5>Cash Withdrawal</h5> -->\r\n                </div>\r\n              </ion-card>\r\n              </ion-col>\r\n              </ion-row>\r\n              <ion-row>\r\n               \r\n              <ion-col size=\"4\">\r\n              <ion-card class=\"transactionCards\" (click)=\"goToUtilityPayment()\">\r\n                <img class=\"grid-icon\" src=\"assets\\icon\\cashdeposit.PNG\" alt=\"Ionic logo\">\r\n                <p class=\"card-title\">Utility Bill Payment</p>\r\n               </ion-card>\r\n              </ion-col>\r\n              <ion-col size=\"4\">\r\n              <ion-card class=\"transactionCards\" (click)=\"goToDepositTopUp()\">\r\n                <img class=\"grid-icon\" src=\"assets\\icon\\chequedeposit.PNG\" alt=\"Ionic logo\">\r\n                <p class=\"card-title\">Deposit Top Up</p>\r\n               </ion-card>\r\n              </ion-col>\r\n              </ion-row>\r\n              </ion-grid>\r\n            </ion-card>\r\n          </div>\r\n\r\n        </div>\r\n          \r\n     \r\n     \r\n     \r\n        </ion-slide>\r\n    </ion-slides>\r\n  </ion-content>\r\n</ion-app>\r\n   \r\n\r\n\r\n");

/***/ }),

/***/ "XWda":
/*!*******************************************!*\
  !*** ./src/app/views/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "ysP3");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/pipes/pipes.module */ "iTUp");








let HomePageModule = class HomePageModule {
};
HomePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild([{ path: '', component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"] }])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "i9YA":
/*!*******************************************!*\
  !*** ./src/app/views/home/home.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".accTable {\n  margin-left: 20px;\n}\n\n.my-8 {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n\n.my-2 {\n  margin-top: 1.4rem;\n  margin-bottom: 0.75rem;\n}\n\n.acc-type {\n  color: #ffffff;\n  font-size: 10px;\n  opacity: 67%;\n  text-align: center;\n  font-size: 15px;\n}\n\n.acc-balance {\n  color: #ffffff;\n  font-size: 12px;\n  opacity: 67%;\n  float: center;\n  font-size: 15px;\n}\n\n.balance {\n  color: #ffffff;\n  font-size: 16px;\n  float: right;\n  margin-top: 0px;\n}\n\n.bankLogo {\n  width: 45pt;\n  height: 30pt;\n  margin-top: 7px;\n  margin-right: 10px;\n}\n\n.slider1 {\n  height: 230px;\n  width: 500px;\n  margin: 50px 0px 100px 0px;\n  background: linear-gradient(180deg, #ff0303 0%, #d000e2 110%);\n  border-radius: 15px 15px 15px 15px;\n}\n\nion-slides {\n  --bullet-background-active: rgb(214, 18, 18);\n  --bullet-background: rgb(216, 90, 90);\n}\n\n.swiper-pagination {\n  position: unset !important;\n}\n\n.mt-20 {\n  margin-top: 20px;\n}\n\n.textCard {\n  margin-left: 5%;\n  margin-top: 5%;\n}\n\n.transactionCards {\n  box-shadow: 0pt 3pt 6pt #00000017;\n  border-radius: 10pt;\n  background-color: #FFFEFE;\n  text-align: center;\n  width: 100%;\n  height: 160px;\n  margin-left: 1%;\n}\n\n.font-black {\n  font-weight: 900;\n}\n\n.footer-md::before, .tabs-md[tabsPlacement=bottom] > .tabbar::before {\n  background-image: none !important;\n}\n\n.settingicon {\n  color: white;\n  font-size: x-large;\n  margin-left: 30px;\n  margin-top: 20px;\n  float: right;\n}\n\n.leading-3 {\n  line-height: 0.1rem;\n}\n\n.text-xs {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n.capitalize {\n  text-transform: capitalize;\n}\n\n.labelaccount {\n  color: #FFFFFF;\n  font-size: 10pt;\n  margin-left: 50%;\n  opacity: 67%;\n}\n\n.savingaccount {\n  color: #FFFFFF;\n  font-size: 10pt;\n  margin-top: -13%;\n  margin-left: -50%;\n  opacity: 67%;\n}\n\n.balAmt {\n  color: #FFFFFF;\n  margin-left: 50%;\n  font-size: 14px;\n}\n\n.cashdepositcard {\n  margin-top: 5px;\n  font-size: 12px;\n}\n\n.card-title {\n  margin-top: 10px;\n  font-size: 16px;\n}\n\n.cashwithdrawalcard {\n  margin-top: 5px;\n  font-size: 12px;\n}\n\n.cards {\n  margin-top: 5px;\n  font-size: 12px;\n}\n\n.chequewithdrawalcard {\n  margin-top: 5px;\n  font-size: 12px;\n}\n\n.chequedepositcard {\n  margin-top: 5px;\n  font-size: 12px;\n}\n\n.firstrow {\n  display: inline-block !important;\n}\n\n.icon {\n  margin-left: 25%;\n  margin-top: 10%;\n  font-family: \"Montserrat\";\n}\n\n.grid-icon {\n  width: 60px;\n  height: 60px;\n  text-align: center;\n  margin-top: 25px;\n}\n\n.image1 {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 65%;\n}\n\n.image2 {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 55%;\n}\n\n.image3 {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 73%;\n}\n\n.img {\n  width: 30pt;\n  height: 30pt;\n  border-radius: 100%;\n  cursor: pointer;\n  position: absolute;\n  left: 93%;\n  bottom: -25px;\n  transform: translateX(-50%);\n  margin-bottom: 40px;\n  border: 1px solid white;\n}\n\n.logout {\n  width: 27pt;\n  height: 27pt;\n  border-radius: 100%;\n  cursor: pointer;\n  position: absolute;\n  left: 70%;\n  bottom: -25px;\n  transform: translateX(-50%);\n  margin-bottom: 40px;\n  margin-left: 50px;\n  border: 1px solid white;\n}\n\n.ex1 {\n  height: auto;\n  overflow-y: scroll;\n  width: 500px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXQTtFQUVJLGlCQUFBO0FBWEo7O0FBZUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBWko7O0FBZUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0FBWko7O0FBZ0JBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBYko7O0FBZ0JBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFiSjs7QUFnQkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBYko7O0FBZ0JBO0VBQ0ksV0FBQTtFQUFZLFlBQUE7RUFBYSxlQUFBO0VBQWdCLGtCQUFBO0FBVjdDOztBQVlBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLDZEQUFBO0VBQ0Esa0NBQUE7QUFUSjs7QUFZQTtFQUNJLDRDQUFBO0VBQ0EscUNBQUE7QUFUSjs7QUFXQTtFQUNJLDBCQUFBO0FBUko7O0FBV0E7RUFDQyxnQkFBQTtBQVJEOztBQVVBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7QUFQSjs7QUFTQTtFQUNJLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBTko7O0FBU0E7RUFDSSxnQkFBQTtBQU5KOztBQVNBO0VBQ0ksaUNBQUE7QUFOSjs7QUFRQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBTEo7O0FBUUE7RUFDSSxtQkFBQTtBQUxKOztBQVFBO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0FBTEo7O0FBT0E7RUFDSSwwQkFBQTtBQUpKOztBQU1BO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFISjs7QUFLQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDSixpQkFBQTtFQUNBLFlBQUE7QUFGQTs7QUFLQTtFQUNJLGNBQUE7RUFBZSxnQkFBQTtFQUFpQixlQUFBO0FBQXBDOztBQUVBO0VBQ0ksZUFBQTtFQUFnQixlQUFBO0FBRXBCOztBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FBR0o7O0FBREE7RUFDSSxlQUFBO0VBQ0EsZUFBQTtBQUlKOztBQURBO0VBQ0ksZUFBQTtFQUFvQixlQUFBO0FBS3hCOztBQURBO0VBQ0ksZUFBQTtFQUFtQixlQUFBO0FBS3ZCOztBQUZBO0VBQ0ksZUFBQTtFQUFnQixlQUFBO0FBTXBCOztBQUpBO0VBQ0ksZ0NBQUE7QUFPSjs7QUFMQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBUUo7O0FBTkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFTSjs7QUFQQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQVVKOztBQVJBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBV0o7O0FBVEE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFZSjs7QUFSQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQVdKOztBQVJFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUJBQUE7QUFXSjs7QUFQQTtFQUVJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFTSiIsImZpbGUiOiJob21lLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLy8gLmhlYWRlci1yb3cge1xyXG4vLyAgICAgYmFja2dyb3VuZDogIzcxNjNBQTtcclxuLy8gICAgIGNvbG9yOiAjZmZmO1xyXG4vLyAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4vLyAgIH1cclxuICBcclxuLy8gICBpb24tY29sIHtcclxuLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICNFQ0VFRUY7XHJcbi8vICAgfVxyXG4uYWNjVGFibGV7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcblxyXG59XHJcblxyXG4ubXktOHtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xyXG59XHJcblxyXG4ubXktMntcclxuICAgIG1hcmdpbi10b3A6IDEuNHJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XHJcbn1cclxuXHJcblxyXG4uYWNjLXR5cGV7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIG9wYWNpdHk6IDY3JTtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcblxyXG4uYWNjLWJhbGFuY2V7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIG9wYWNpdHk6IDY3JTtcclxuICAgIGZsb2F0OmNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLmJhbGFuY2V7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZsb2F0OnJpZ2h0O1xyXG4gICAgbWFyZ2luLXRvcDowcHg7XHJcbn1cclxuXHJcbi5iYW5rTG9nb3tcclxuICAgIHdpZHRoOiA0NXB0O2hlaWdodDogMzBwdDttYXJnaW4tdG9wOiA3cHg7bWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG59XHJcbi5zbGlkZXIxIHtcclxuICAgIGhlaWdodDogMjMwcHg7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBtYXJnaW46IDUwcHggMHB4IDEwMHB4IDBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjU1LDMsMywxKSAwJSwgcmdiYSgyMDgsMCwyMjYsMSkgMTEwJSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMTVweCAxNXB4O1xyXG59XHJcblxyXG5pb24tc2xpZGVze1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6IHJnYigyMTQsIDE4LCAxOCk7XHJcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiByZ2IoMjE2LCA5MCwgOTApO1xyXG59XHJcbi5zd2lwZXItcGFnaW5hdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogdW5zZXQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm10LTIwe1xyXG4gbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4udGV4dENhcmR7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxufVxyXG4udHJhbnNhY3Rpb25DYXJkc3tcclxuICAgIGJveC1zaGFkb3c6IDBwdCAzcHQgNnB0ICMwMDAwMDAxNztcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRUZFO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDElO1xyXG59XHJcblxyXG4uZm9udC1ibGFja1x0e1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxufVxyXG5cclxuLmZvb3Rlci1tZDo6YmVmb3JlLCAudGFicy1tZFt0YWJzUGxhY2VtZW50PVwiYm90dG9tXCJdID4gLnRhYmJhcjo6YmVmb3JlIHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4uc2V0dGluZ2ljb257XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6eC1sYXJnZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgXHJcbn1cclxuLmxlYWRpbmctM3tcclxuICAgIGxpbmUtaGVpZ2h0OiAuMXJlbTtcclxufVxyXG5cclxuLnRleHQteHNcdHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XHJcbn1cclxuLmNhcGl0YWxpemV7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxufVxyXG4ubGFiZWxhY2NvdW50e1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXNpemU6IDEwcHQ7XHJcbiAgICBtYXJnaW4tbGVmdDogNTAlO1xyXG4gICAgb3BhY2l0eTogNjclO1xyXG59XHJcbi5zYXZpbmdhY2NvdW50e1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LXNpemU6IDEwcHQ7XHJcbiAgICBtYXJnaW4tdG9wOiAtMTMlO1xyXG5tYXJnaW4tbGVmdDogLTUwJTtcclxub3BhY2l0eTogNjclO1xyXG4gICAgXHJcbn1cclxuLmJhbEFtdHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO21hcmdpbi1sZWZ0OiA1MCU7Zm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5jYXNoZGVwb3NpdGNhcmR7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7Zm9udC1zaXplOiAxMnB4O1xyXG59XHJcbi5jYXJkLXRpdGxle1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDsgICAgIFxyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbi5jYXNod2l0aGRyYXdhbGNhcmR7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7ICAgICBcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgXHJcbn1cclxuLmNhcmRze1xyXG4gICAgbWFyZ2luLXRvcDogNXB4OyAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBcclxuICAgXHJcbn1cclxuLmNoZXF1ZXdpdGhkcmF3YWxjYXJke1xyXG4gICAgbWFyZ2luLXRvcDogNXB4OyAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgXHJcbn1cclxuLmNoZXF1ZWRlcG9zaXRjYXJke1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O2ZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uZmlyc3Ryb3d7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2sgIWltcG9ydGFudDtcclxufVxyXG4uaWNvbntcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG59XHJcbi5ncmlkLWljb257XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbn1cclxuLmltYWdlMXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogNjUlO1xyXG59XHJcbi5pbWFnZTJ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDU1JTtcclxufVxyXG4uaW1hZ2Uze1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA3MyU7XHJcbn1cclxuXHJcblxyXG4uaW1nIHtcclxuICAgIHdpZHRoOiAzMHB0O1xyXG4gICAgaGVpZ2h0OiAzMHB0O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDkzJTtcclxuICAgIGJvdHRvbTogLTI1cHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOjQwcHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgLmxvZ291dCB7XHJcbiAgICB3aWR0aDogMjdwdDtcclxuICAgIGhlaWdodDogMjdwdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OjcwJTtcclxuICAgIGJvdHRvbTogLTI1cHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOjQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG5cclxuLmV4MXtcclxuICAgIC8vIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbiAgICB3aWR0aDo1MDBweDtcclxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIH1cclxuIl19 */");

/***/ }),

/***/ "ysP3":
/*!*****************************************!*\
  !*** ./src/app/views/home/home.page.ts ***!
  \*****************************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./home.page.html */ "OonQ");
/* harmony import */ var _home_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.page.scss */ "i9YA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_components_search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/search/search.component */ "RZmA");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");










let HomePage = class HomePage {
    constructor(router, api, sanitizer, cdr, dataService, modalController) {
        this.router = router;
        this.api = api;
        this.sanitizer = sanitizer;
        this.cdr = cdr;
        this.dataService = dataService;
        this.modalController = modalController;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            slidesPerView: 1,
            spaceBetween: 20,
            centeredSlides: true
        };
        this.cards = [];
    }
    ngOnInit() {
        this.phoneNumber = localStorage.getItem('PhoneNumLogin');
        this.firstName = localStorage.getItem('firstName');
        var customerDetails = JSON.parse(localStorage.getItem('customer_details'));
        this.accountType = customerDetails.accountType;
        this.loadCustomerDetails();
        this.dataService.getAvatarUrl.subscribe(data => {
            if (data != null) {
                this.image = data;
                this.cdr.markForCheck();
                console.log(this.image);
            }
        });
    }
    ionSlideDidChange() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const index = yield this.slider.getActiveIndex();
            console.log('in slide :: ', index);
        });
    }
    loadCustomerDetails() {
        this.api.custpomerDetails(this.phoneNumber).subscribe((resp) => {
            console.log('backend resp in cash withdrawal', resp, this.cards[0]);
            this.formData = resp;
            this.cards = resp.custAccount;
            localStorage.setItem('loginRespAccountId', this.cards[0].accountId);
            this.dataService.shareAccountInfo(this.cards[0]);
            this.getProfilePicture(resp.customerId);
            this.cdr.markForCheck();
            //  this.currLoan = getCurrencySymbol(this.loan[0].accountCurrency, "narrow");
        }, (err) => {
            console.log("Err", err);
        });
    }
    getProfilePicture(customerId) {
        const contentType = 'image/png';
        this.api.getProfileDetails(customerId)
            .subscribe((data) => {
            this.cdr.markForCheck();
            this.profileData = data;
            console.log(" profile Image", this.profileData.profileImage.fileUrl);
            if (data.profileImage != null) {
                let objectURL = data.profileImage;
                this.image = data.profileImage != "not_available" ? this.sanitizer.bypassSecurityTrustUrl(objectURL) : undefined;
            }
            else {
                this.image = null;
            }
            this.cdr.markForCheck();
        }, (error) => {
            console.log(error);
        });
    }
    searchModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"],
            });
            return yield modal.present();
        });
    }
    goToCashWithdrawal() {
        this.router.navigate(['cashwithdrawal']);
    }
    goToCashDeposit() {
        this.router.navigate(['cashdeposit']);
    }
    goToChequeDeposit() {
        this.router.navigate(['chequedeposit']);
    }
    goToChequeWithdrawal() {
        this.router.navigate(['chequewithdrawal']);
    }
    goToForexTransaction() {
        this.router.navigate(['forex-transaction']);
    }
    goToLoanPayment() {
        this.router.navigate(['loan-payment']);
    }
    goToUtilityPayment() {
        this.router.navigate(['utility-payment']);
    }
    goToDepositTopUp() {
        this.router.navigate(['deposit-topup']);
    }
    getAccountNumber(info) {
        this.dataService.shareAccountInfo(info);
        this.router.navigate(['/tabs/transaction']);
    }
    goToProfile() {
        this.router.navigate(['/tabs/profile']);
    }
    getRandomColor(idx) {
        var col0 = '#0d856b';
        var col1 = '#d66f1b';
        var col2 = '#9f52e7';
        var col3 = '#e9318d';
        var col4 = '#1175a3';
        var col5 = '#e93131';
        var col6 = '#2316d3';
        var col7 = '#f557f5';
        var col8 = '#d6c31b';
        var col9 = '#40d61b';
        if ((idx % 10) == 0)
            return col0;
        if ((idx % 10) == 1)
            return col1;
        if ((idx % 10) == 2)
            return col2;
        if ((idx % 10) == 3)
            return col3;
        if ((idx % 10) == 4)
            return col4;
        if ((idx % 10) == 5)
            return col5;
        if ((idx % 10) == 6)
            return col6;
        if ((idx % 10) == 7)
            return col7;
        if ((idx % 10) == 8)
            return col8;
        if ((idx % 10) == 9)
            return col9;
        return '#d86315';
        // var randomColor = Math.floor(Math.random()*16777215).toString(16);
        // return '#' + randomColor.slice(-6);
        // var randomColor = Math.floor(0x1000000 * Math.random()).toString(16);
        // return '#' + ('000000' + randomColor).slice(-6);
    }
};
HomePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_9__["DataService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] }
];
HomePage.propDecorators = {
    slider: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['slider', { static: true },] }]
};
HomePage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-home',
        template: _raw_loader_home_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_home_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map