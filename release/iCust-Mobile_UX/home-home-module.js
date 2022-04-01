(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "OonQ":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/home/home.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\r\n  <ion-toolbar>\r\n    <ion-item lines=\"none\">\r\n      <ion-avatar slot=\"end\" (click)=\"goToProfile()\">\r\n        <ng-container *ngIf=\"image == null || image == undefined; else showAvatar\">\r\n          <h1 class=\"img\" [style.background]=\"getRandomColor(i+3)\" \r\n               style=\"text-align: center; font-size: 16px; padding-top: 10px;\">\r\n            {{formData?.firstName | uppercase | slice:0:1}}{{formData?.lastName | uppercase | slice:0:1}}</h1>\r\n        </ng-container>\r\n        <ng-template #showAvatar>\r\n          <img class=\"img\" [src]=\"image\" alt=\"profile\">\r\n        </ng-template>\r\n      </ion-avatar>\r\n\r\n      <ion-label style=\"font-size: xx-large;\" class=\"font-black\">Hi {{firstName}}</ion-label>\r\n    </ion-item>\r\n  </ion-toolbar>\r\n  <ion-toolbar>\r\n    <ion-searchbar (click)=\"searchModal()\"></ion-searchbar>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n   \r\n<ion-content *ngFor=\"let card of cards; index as i;\">\r\n\r\n\r\n\r\n    <ion-slides pager=\"true\" [options]=\"slideOpts\" [hidden]=\"card.status !=='APPROVED'\">\r\n      <ion-slide (click)=\"getAccountNumber(card)\" >\r\n        <div class=\"slider1\">\r\n          <ion-grid>\r\n          <ion-row>\r\n            <ion-col class=\"ion-align-self-center\">\r\n              <img src=\"assets\\images\\BL2.png\" class=\"bankLogo\">\r\n            </ion-col>\r\n            <ion-col class=\"ion-align-self-center\">\r\n              <ion-icon name=\"settings-outline\" class=\"settingicon\"></ion-icon> \r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-grid>\r\n\r\n        <ion-grid>\r\n          <ion-row>\r\n            <ion-col class=\"ion-align-self-end\" size=\"4\">\r\n            <p class=\"acc-type capitalize\" >{{ card.accountType + ' Account' }}</p>\r\n             <p class=\"acc-type capitalize\">{{ card.accountId }}</p>\r\n\r\n            </ion-col>\r\n            <ion-col class=\"ion-align-self-center\" size=\"8\">\r\n              <p class=\"acc-balance leading-3 capitalize\">Account Balance</p><br>\r\n              <p class=\"acc-balance leading-3 capitalize\">{{ card.accountCurrency | currencySymbol  }} {{  card.amount | number: '1.'}}</p>\r\n\r\n              </ion-col>\r\n          </ion-row>\r\n          <!-- <ion-row class=\"ion-align-items-end\">\r\n            <ion-col class=\"ion-align-self-end\">\r\n              <p class=\"balance leading-3\">{{ card.accountCurrency | currencySymbol  }} {{  card.amount | number: '1.'}}</p>\r\n            </ion-col>\r\n          </ion-row> -->\r\n        </ion-grid>\r\n        </div>\r\n        \r\n      </ion-slide>\r\n    </ion-slides>\r\n \r\n  \r\n\r\n  \r\n\r\n  <div class=\"textCard mt-20\">\r\n    <ion-text style=\"font-size:x-large;\">All Transaction</ion-text>\r\n  </div>\r\n  <ion-grid class=\"mt-20\">\r\n    <ion-row>\r\n      <ion-col size=\"4\">\r\n        <ion-card class=\"transactionCards\" [disabled]=\"card.status !=='APPROVED'\" (click)=\"goToCashWithdrawal()\">\r\n          <!-- <ion-card class=\"transactionCards\" (click)=\"goToCashWithdrawal()\"> -->\r\n          <div>\r\n            <img class=\"grid-icon\" src=\"assets\\icon\\cashw.PNG\"  alt=\"Ionic logo\">\r\n            <p class=\"card-title\" >Cash Withdrawal</p>\r\n            <!-- <h5>Cash Withdrawal</h5> -->\r\n          </div>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <ion-card class=\"transactionCards\"  (click)=\"goToCashDeposit()\">\r\n            <img class=\"grid-icon\" src=\"assets\\icon\\cashdeposit.PNG\" alt=\"Ionic logo\">\r\n            <p class=\"card-title\">Cash Deposit</p>\r\n         </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <ion-card class=\"transactionCards\" (click)=\"goToChequeDeposit()\">\r\n            <img class=\"grid-icon\" src=\"assets\\icon\\chequedeposit.PNG\" alt=\"Ionic logo\">\r\n            <p class=\"card-title\">Cheque Deposit</p>\r\n         </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n      <ion-col size=\"4\">\r\n        <ion-card  class=\"transactionCards\" [disabled]=\"card.status !=='APPROVED'\" (click)=\"goToChequeWithdrawal()\">\r\n          <div>\r\n            <img class=\"grid-icon\" src=\"assets\\icon\\cashw.PNG\"  alt=\"Ionic logo\">\r\n            <p class=\"card-title\" >Cheque Withdrawal</p>\r\n            <!-- <h5>Cash Withdrawal</h5> -->\r\n          </div>\r\n        </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <ion-card class=\"transactionCards\" (click)=\"goToForexTransaction()\">\r\n            <img class=\"grid-icon\" src=\"assets\\icon\\cashdeposit.PNG\" alt=\"Ionic logo\">\r\n            <p class=\"card-title\">Forex Transaction</p>\r\n         </ion-card>\r\n      </ion-col>\r\n   \r\n      <!-- <ion-col>\r\n        <ion-card class=\"transactionCards\" (click)=\"goToChequeDeposit()\">\r\n            <img class=\"image3\" src=\"assets\\icon\\chequedeposit.PNG\" alt=\"Ionic logo\">\r\n            <p class=\"chequedepositcard\">Cheque Deposit</p>\r\n         </ion-card>\r\n      </ion-col> -->\r\n      <ion-col size=\"4\">\r\n        <ion-card class=\"transactionCards\" (click)=\"goToLoanPayment()\">\r\n          <div>\r\n            <img class=\"grid-icon\" src=\"assets\\icon\\cashw.PNG\"  alt=\"Ionic logo\">\r\n            <p class=\"card-title\" >Loan Payment</p>\r\n            <!-- <h5>Cash Withdrawal</h5> -->\r\n          </div>\r\n        </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n    <ion-row>\r\n   \r\n      <ion-col size=\"4\">\r\n        <ion-card class=\"transactionCards\" (click)=\"goToUtilityPayment()\">\r\n            <img class=\"grid-icon\" src=\"assets\\icon\\cashdeposit.PNG\" alt=\"Ionic logo\">\r\n            <p class=\"card-title\">Utility Bill Payment</p>\r\n         </ion-card>\r\n      </ion-col>\r\n      <ion-col size=\"4\">\r\n        <ion-card class=\"transactionCards\" (click)=\"goToDepositTopUp()\">\r\n            <img class=\"grid-icon\" src=\"assets\\icon\\chequedeposit.PNG\" alt=\"Ionic logo\">\r\n            <p class=\"card-title\">Deposit Top Up</p>\r\n         </ion-card>\r\n      </ion-col>\r\n    </ion-row>\r\n  </ion-grid>\r\n  \r\n</ion-content>\r\n");

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
/* harmony default export */ __webpack_exports__["default"] = (".accTable {\n  margin-left: 20px;\n}\n\n.my-8 {\n  margin-top: 2rem;\n  margin-bottom: 2rem;\n}\n\n.my-2 {\n  margin-top: 1.4rem;\n  margin-bottom: 0.75rem;\n}\n\n.acc-type {\n  color: #ffffff;\n  font-size: 10px;\n  opacity: 67%;\n  text-align: center;\n  font-size: 15px;\n}\n\n.acc-balance {\n  color: #ffffff;\n  font-size: 12px;\n  opacity: 67%;\n  float: center;\n  font-size: 15px;\n}\n\n.balance {\n  color: #ffffff;\n  font-size: 16px;\n  float: right;\n  margin-top: 0px;\n}\n\n.bankLogo {\n  width: 45pt;\n  height: 30pt;\n  margin-top: 7px;\n  margin-right: 10px;\n}\n\n.slider1 {\n  height: 175px;\n  width: 100%;\n  background: linear-gradient(180deg, #ff0303 0%, #d000e2 110%);\n  border-radius: 15px 15px 15px 15px;\n}\n\nion-slides {\n  --bullet-background-active: rgb(214, 18, 18);\n  --bullet-background: rgb(216, 90, 90);\n}\n\n.swiper-pagination {\n  position: unset !important;\n}\n\n.mt-20 {\n  margin-top: 20px;\n}\n\n.textCard {\n  margin-left: 5%;\n  margin-top: 5%;\n}\n\n.transactionCards {\n  box-shadow: 0pt 3pt 6pt #00000017;\n  border-radius: 10pt;\n  background-color: #FFFEFE;\n  text-align: center;\n  width: 100%;\n  height: 160px;\n  margin-left: 1%;\n}\n\n.font-black {\n  font-weight: 900;\n}\n\n.footer-md::before, .tabs-md[tabsPlacement=bottom] > .tabbar::before {\n  background-image: none !important;\n}\n\n.settingicon {\n  color: white;\n  font-size: x-large;\n  margin-left: 30px;\n  margin-top: 20px;\n  float: right;\n}\n\n.leading-3 {\n  line-height: 0.1rem;\n}\n\n.text-xs {\n  font-size: 1rem;\n  line-height: 1.5rem;\n}\n\n.capitalize {\n  text-transform: capitalize;\n}\n\n.labelaccount {\n  color: #FFFFFF;\n  font-size: 10pt;\n  margin-left: 50%;\n  opacity: 67%;\n}\n\n.savingaccount {\n  color: #FFFFFF;\n  font-size: 10pt;\n  margin-top: -13%;\n  margin-left: -50%;\n  opacity: 67%;\n}\n\n.balAmt {\n  color: #FFFFFF;\n  margin-left: 50%;\n  font-size: 14px;\n}\n\n.cashdepositcard {\n  margin-top: 5px;\n  font-size: 12px;\n}\n\n.card-title {\n  margin-top: 10px;\n  font-size: 16px;\n}\n\n.cashwithdrawalcard {\n  margin-top: 5px;\n  font-size: 12px;\n}\n\n.cards {\n  margin-top: 5px;\n  font-size: 12px;\n}\n\n.chequewithdrawalcard {\n  margin-top: 5px;\n  font-size: 12px;\n}\n\n.chequedepositcard {\n  margin-top: 5px;\n  font-size: 12px;\n}\n\n.firstrow {\n  display: inline-block !important;\n}\n\n.icon {\n  margin-left: 25%;\n  margin-top: 10%;\n  font-family: \"Montserrat\";\n}\n\n.grid-icon {\n  width: 60px;\n  height: 60px;\n  text-align: center;\n  margin-top: 25px;\n}\n\n.image1 {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 65%;\n}\n\n.image2 {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 55%;\n}\n\n.image3 {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 73%;\n}\n\n.img {\n  width: 30pt;\n  height: 30pt;\n  border-radius: 100%;\n  cursor: pointer;\n  position: absolute;\n  left: 93%;\n  bottom: -25px;\n  transform: translateX(-50%);\n  margin-bottom: 40px;\n  border: 1px solid white;\n}\n\n.logout {\n  width: 27pt;\n  height: 27pt;\n  border-radius: 100%;\n  cursor: pointer;\n  position: absolute;\n  left: 70%;\n  bottom: -25px;\n  transform: translateX(-50%);\n  margin-bottom: 40px;\n  margin-left: 50px;\n  border: 1px solid white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXQTtFQUVJLGlCQUFBO0FBWEo7O0FBZUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBWko7O0FBZUE7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0FBWko7O0FBZ0JBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBYko7O0FBZ0JBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFiSjs7QUFnQkE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBYko7O0FBZ0JBO0VBQ0ksV0FBQTtFQUFZLFlBQUE7RUFBYSxlQUFBO0VBQWdCLGtCQUFBO0FBVjdDOztBQVlBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSw2REFBQTtFQUNBLGtDQUFBO0FBVEo7O0FBWUE7RUFDSSw0Q0FBQTtFQUNBLHFDQUFBO0FBVEo7O0FBV0E7RUFDSSwwQkFBQTtBQVJKOztBQVdBO0VBQ0MsZ0JBQUE7QUFSRDs7QUFVQTtFQUNJLGVBQUE7RUFDQSxjQUFBO0FBUEo7O0FBU0E7RUFDSSxpQ0FBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQU5KOztBQVNBO0VBQ0ksZ0JBQUE7QUFOSjs7QUFTQTtFQUNJLGlDQUFBO0FBTko7O0FBUUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUxKOztBQVFBO0VBQ0ksbUJBQUE7QUFMSjs7QUFRQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUxKOztBQU9BO0VBQ0ksMEJBQUE7QUFKSjs7QUFNQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBSEo7O0FBS0E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0osaUJBQUE7RUFDQSxZQUFBO0FBRkE7O0FBS0E7RUFDSSxjQUFBO0VBQWUsZ0JBQUE7RUFBaUIsZUFBQTtBQUFwQzs7QUFFQTtFQUNJLGVBQUE7RUFBZ0IsZUFBQTtBQUVwQjs7QUFBQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQUdKOztBQURBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7QUFJSjs7QUFEQTtFQUNJLGVBQUE7RUFBb0IsZUFBQTtBQUt4Qjs7QUFEQTtFQUNJLGVBQUE7RUFBbUIsZUFBQTtBQUt2Qjs7QUFGQTtFQUNJLGVBQUE7RUFBZ0IsZUFBQTtBQU1wQjs7QUFKQTtFQUNJLGdDQUFBO0FBT0o7O0FBTEE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQVFKOztBQU5BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBU0o7O0FBUEE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFVSjs7QUFSQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQVdKOztBQVRBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBWUo7O0FBUkE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFXSjs7QUFSRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBV0oiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbi8vIC5oZWFkZXItcm93IHtcclxuLy8gICAgIGJhY2tncm91bmQ6ICM3MTYzQUE7XHJcbi8vICAgICBjb2xvcjogI2ZmZjtcclxuLy8gICAgIGZvbnQtc2l6ZTogMThweDtcclxuLy8gICB9XHJcbiAgXHJcbi8vICAgaW9uLWNvbCB7XHJcbi8vICAgICBib3JkZXI6IDFweCBzb2xpZCAjRUNFRUVGO1xyXG4vLyAgIH1cclxuLmFjY1RhYmxle1xyXG4gICAgLy8gbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG5cclxufVxyXG5cclxuLm15LTh7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxufVxyXG5cclxuLm15LTJ7XHJcbiAgICBtYXJnaW4tdG9wOiAxLjRyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xyXG59XHJcblxyXG5cclxuLmFjYy10eXBle1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBvcGFjaXR5OiA2NyU7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLmFjYy1iYWxhbmNle1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBvcGFjaXR5OiA2NyU7XHJcbiAgICBmbG9hdDpjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuXHJcbi5iYWxhbmNle1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmbG9hdDpyaWdodDtcclxuICAgIG1hcmdpbi10b3A6MHB4O1xyXG59XHJcblxyXG4uYmFua0xvZ297XHJcbiAgICB3aWR0aDogNDVwdDtoZWlnaHQ6IDMwcHQ7bWFyZ2luLXRvcDogN3B4O21hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uc2xpZGVyMSB7XHJcbiAgICBoZWlnaHQ6IDE3NXB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwzLDMsMSkgMCUsIHJnYmEoMjA4LDAsMjI2LDEpIDExMCUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweCAxNXB4IDE1cHggMTVweDtcclxufVxyXG5cclxuaW9uLXNsaWRlc3tcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiByZ2IoMjE0LCAxOCwgMTgpO1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZDogcmdiKDIxNiwgOTAsIDkwKTtcclxufVxyXG4uc3dpcGVyLXBhZ2luYXRpb24ge1xyXG4gICAgcG9zaXRpb246IHVuc2V0ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tdC0yMHtcclxuIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuLnRleHRDYXJke1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbn1cclxuLnRyYW5zYWN0aW9uQ2FyZHN7XHJcbiAgICBib3gtc2hhZG93OiAwcHQgM3B0IDZwdCAjMDAwMDAwMTc7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkVGRTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxufVxyXG5cclxuLmZvbnQtYmxhY2tcdHtcclxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbn1cclxuXHJcbi5mb290ZXItbWQ6OmJlZm9yZSwgLnRhYnMtbWRbdGFic1BsYWNlbWVudD1cImJvdHRvbVwiXSA+IC50YWJiYXI6OmJlZm9yZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNldHRpbmdpY29ue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOngtbGFyZ2U7XHJcbiAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgIFxyXG59XHJcbi5sZWFkaW5nLTN7XHJcbiAgICBsaW5lLWhlaWdodDogLjFyZW07XHJcbn1cclxuXHJcbi50ZXh0LXhzXHR7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG59XHJcbi5jYXBpdGFsaXple1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbn1cclxuLmxhYmVsYWNjb3VudHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1zaXplOiAxMHB0O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwJTtcclxuICAgIG9wYWNpdHk6IDY3JTtcclxufVxyXG4uc2F2aW5nYWNjb3VudHtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1zaXplOiAxMHB0O1xyXG4gICAgbWFyZ2luLXRvcDogLTEzJTtcclxubWFyZ2luLWxlZnQ6IC01MCU7XHJcbm9wYWNpdHk6IDY3JTtcclxuICAgIFxyXG59XHJcbi5iYWxBbXR7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjttYXJnaW4tbGVmdDogNTAlO2ZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uY2FzaGRlcG9zaXRjYXJke1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O2ZvbnQtc2l6ZTogMTJweDtcclxufVxyXG4uY2FyZC10aXRsZXtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7ICAgICBcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4uY2FzaHdpdGhkcmF3YWxjYXJke1xyXG4gICAgbWFyZ2luLXRvcDogNXB4OyAgICAgXHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgIFxyXG59XHJcbi5jYXJkc3tcclxuICAgIG1hcmdpbi10b3A6IDVweDsgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgXHJcbiAgIFxyXG59XHJcbi5jaGVxdWV3aXRoZHJhd2FsY2FyZHtcclxuICAgIG1hcmdpbi10b3A6IDVweDsgICBmb250LXNpemU6IDEycHg7XHJcbiAgIFxyXG59XHJcbi5jaGVxdWVkZXBvc2l0Y2FyZHtcclxuICAgIG1hcmdpbi10b3A6IDVweDtmb250LXNpemU6IDEycHg7XHJcbn1cclxuLmZpcnN0cm93e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuLmljb257XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxufVxyXG4uZ3JpZC1pY29ue1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG59XHJcbi5pbWFnZTF7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDY1JTtcclxufVxyXG4uaW1hZ2Uye1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA1NSU7XHJcbn1cclxuLmltYWdlM3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICB3aWR0aDogNzMlO1xyXG59XHJcblxyXG5cclxuLmltZyB7XHJcbiAgICB3aWR0aDogMzBwdDtcclxuICAgIGhlaWdodDogMzBwdDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiA5MyU7XHJcbiAgICBib3R0b206IC0yNXB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTo0MHB4O1xyXG4gICAgYm9yZGVyOjFweCBzb2xpZCB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5sb2dvdXQge1xyXG4gICAgd2lkdGg6IDI3cHQ7XHJcbiAgICBoZWlnaHQ6IDI3cHQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDo3MCU7XHJcbiAgICBib3R0b206IC0yNXB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTo0MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbiAgICBib3JkZXI6MXB4IHNvbGlkIHdoaXRlO1xyXG4gIH1cclxuICBcclxuXHJcbiJdfQ== */");

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
            initialSlide: 1,
            speed: 400,
            slidesPerView: 1.5,
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
    loadCustomerDetails() {
        this.api.custpomerDetails(this.phoneNumber).subscribe((resp) => {
            console.log('backend resp in cash withdrawal', resp);
            this.formData = resp;
            this.cards = resp.custAccount;
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