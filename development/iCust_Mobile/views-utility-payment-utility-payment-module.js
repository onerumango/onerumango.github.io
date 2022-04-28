(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-utility-payment-utility-payment-module"],{

/***/ "4a49":
/*!*****************************************************************!*\
  !*** ./src/app/views/utility-payment/utility-payment.module.ts ***!
  \*****************************************************************/
/*! exports provided: UtilityPaymentPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityPaymentPageModule", function() { return UtilityPaymentPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _utility_payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utility-payment-routing.module */ "pcVJ");
/* harmony import */ var _utility_payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utility-payment.page */ "yTMH");







let UtilityPaymentPageModule = class UtilityPaymentPageModule {
};
UtilityPaymentPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _utility_payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["UtilityPaymentPageRoutingModule"]
        ],
        declarations: [_utility_payment_page__WEBPACK_IMPORTED_MODULE_6__["UtilityPaymentPage"]]
    })
], UtilityPaymentPageModule);



/***/ }),

/***/ "Yhp8":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/utility-payment/utility-payment.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar>\r\n    <ion-icon name=\"chevron-back-outline\" (click)=\"previous1()\"></ion-icon>\r\n    <span class=\"text\">Utility Bill Payment</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n  <ion-content>\r\n    \r\n    <div>\r\n    <form  [formGroup]=\"utilityForm\">\r\n    <div class=\"inputCard\">\r\n    <ion-label>Biller Name*</ion-label>\r\n    <!-- <ion-input class=\"box\"></ion-input> -->\r\n    <ion-select [compareWith]=\"compareWith\" class=\"box\" formControlName=\"billerName\" ngDefaultControl>\r\n      <ion-select-option *ngFor=\"let user of billNames\" [value]=\"user\">{{user}}</ion-select-option>\r\n    </ion-select>\r\n    </div>\r\n    <div class=\"inputCard\">\r\n      <ion-label position=\"stacked\" class=\"labelCard\" formControlName=\"accountBalance\" ngDefaultControl style=\"font-size: 14px;\">Account Balance : $12,09,89</ion-label>   \r\n      </div>\r\n      \r\n    <div class=\"inputCard\">\r\n      <ion-label>Amount*</ion-label>\r\n      <ion-input class=\"box\" formControlName=\"amount\" ngDefaultControl></ion-input> \r\n      </div>\r\n      <div class=\"inputCard\">\r\n        <ion-label>PayFromAccount*</ion-label>\r\n        <!-- <ion-input class=\"box\"></ion-input> -->\r\n        <ion-select [compareWith]=\"compareWith\" class=\"box\" formControlName=\"payFromAccount\" ngDefaultControl>\r\n          <ion-select-option *ngFor=\"let user of account\" [value]=\"user\">{{user}}</ion-select-option>\r\n        </ion-select>\r\n        </div>\r\n        <div class=\"inputCard\">\r\n          <ion-label>Bill Date*</ion-label>\r\n          \r\n          <!-- <ion-input class=\"box\"></ion-input> -->\r\n          <ion-input type=\"date\" class=\"datepicker-input\" displayFormat=\"DDD. MMM DD, YY\" placeholder=\"Select date\" formControlName=\"billDate\" ngDefaultControl (input)=\"date = $event.target.value\" class=\"box\"></ion-input>\r\n          \r\n          </div>\r\n  \r\n\r\n\r\n\r\n\r\n    <!-- <div class=\"inputCard\">\r\n      <ion-label>Amount</ion-label>\r\n      <ion-input type=\"Number\" class=\"box\" formControlName=\"fxAmount\" ngDefaultControl></ion-input> \r\n      </div> -->\r\n\r\n      \r\n      <!-- <div class=\"inputCard1\">\r\n\r\n        <ion-label style=\"padding-left: 10px;\">Bill Date</ion-label>\r\n      <ion-card class=\"box\">\r\n        <ion-item lines=\"none\">\r\n            <ion-datetime displayFormat=\"DDD. MMM DD, YY\" placeholder=\"Select date\" formControlName=\"billDate\" ngDefaultControl>\r\n            </ion-datetime>\r\n       \r\n\r\n       </ion-item> \r\n      </ion-card>\r\n      </div> -->\r\n      \r\n    <div class=\"inputCard\">\r\n      <ion-label>Bill Number*</ion-label>\r\n      <ion-input class=\"box\" formControlName=\"billNumber\" ngDefaultControl></ion-input> \r\n      </div>\r\n      \r\n      <div class=\"inputCard\">\r\n        <ion-label>Remarks</ion-label>\r\n        \r\n          <ion-textarea class=\"box1\" formControlName=\"remark\" ngDefaultControl></ion-textarea>\r\n      \r\n        </div>\r\n    \r\n  <!-- <div  class=\"ion-padding-top\">\r\n    <div >\r\n    <ion-button expand=\"block\" shape=\"round\" style=\"width: 95%;padding-left: 7%;\"\r\n    (click)=\"next()\">Next</ion-button>\r\n    </div>\r\n    \r\n    <div >\r\n    <ion-button expand=\"block\" shape=\"round\" [disabled]=\"true\" style=\"width: 95%;padding-left: 7%;\"\r\n    (click)=\"previous()\">Back</ion-button>\r\n    </div>\r\n    </div>\r\n     -->\r\n     <div  class=\"ion-padding-top\">\r\n      <div >\r\n      <ion-button expand=\"block\" shape=\"round\" style=\"width: 95%;\"\r\n      (click)=\"next()\">Next</ion-button>\r\n      </div>\r\n      \r\n      <div >\r\n      <ion-button expand=\"block\" shape=\"round\" fill=\"clear\" style=\"width: 95%;color:black\"\r\n      (click)=\"previous1()\">Cancel</ion-button>\r\n      </div>\r\n      </div>\r\n    </form>\r\n    </div>\r\n \r\n    </ion-content>\r\n  \r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <!-- <ion-content *ngIf=!flag>\r\n      <ion-header>\r\n        <ion-toolbar>  \r\n          <ion-icon name=\"chevron-back-outline\" (click)=\"previous()\"></ion-icon>\r\n          <span class=\"text\">Forex Transaction</span>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n      <div>\r\n      <form [formGroup]=\"forexForm\">\r\n      <div class=\"inputCard\">\r\n      <ion-label>Negotiated Rate</ion-label>\r\n      <ion-select [compareWith]=\"compareWith\" class=\"box\" formControlName=\"negotiatedRate\" ngDefaultControl>\r\n        <ion-select-option *ngFor=\"let user of negotiated\" [value]=\"user\">{{user}}</ion-select-option>\r\n      </ion-select>\r\n      </div>\r\n      <div class=\"inputCard\">\r\n        <ion-label position=\"stacked\" class=\"labelCard\" formControlName=\"exchangeRate\" ngDefaultControl>Exchange Rate : $12,09,89</ion-label>   \r\n        </div>\r\n   \r\n  \r\n        <div style=\"margin-left: 19px;margin-top: 19px;\">\r\n          <ion-label >Do you wish to perform this transaction </ion-label>\r\n          <ion-label>in your branch?</ion-label>\r\n          <ion-radio-group formControlName=\"trasactionBranchFlag\" ngDefaultControl>\r\n            <ion-row >\r\n              <ion-col>\r\n                   <ion-item lines=\"none\">\r\n                      <ion-label position=\"start\">Yes</ion-label>\r\n                      <ion-radio mode=\"md\" item-left value=\"yes\"></ion-radio>\r\n                 </ion-item>\r\n               </ion-col>\r\n          \r\n              <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                      <ion-label>No</ion-label>\r\n                      <ion-radio mode=\"md\" item-left value=\"no\"></ion-radio>\r\n                 </ion-item>\r\n              </ion-col>\r\n          \r\n             \r\n          \r\n          </ion-row>\r\n          </ion-radio-group>\r\n  </div>\r\n\r\n  <div class=\"inputCard\">\r\n    <ion-router-link href=\"#\" class=\"underline\">Click here to find nearest branch</ion-router-link>\r\n    </div>\r\n  \r\n      <div class=\"inputCard\">\r\n      <ion-label>Charges</ion-label>\r\n      <ion-input class=\"box\" formControlName=\"charges\" ngDefaultControl></ion-input>\r\n      \r\n      </div>\r\n    \r\n      <div class=\"inputCard\">\r\n        <ion-label>Remarks</ion-label>\r\n        \r\n          <ion-textarea class=\"box1\" formControlName=\"remark\" ngDefaultControl></ion-textarea>\r\n      \r\n        </div>\r\n      \r\n    <div  class=\"ion-padding-top\">\r\n      <div >\r\n      <ion-button expand=\"block\" shape=\"round\" style=\"width: 95%;padding-left: 7%;\" (click)=\"save(forexForm.value)\"\r\n     >Save</ion-button>\r\n      </div>\r\n      \r\n      <div >\r\n      <ion-button expand=\"block\" shape=\"round\"  style=\"width: 95%;padding-left: 7%;\"  (click)=\"previous()\">Back</ion-button>\r\n      </div>\r\n      </div>\r\n      \r\n      </form>\r\n      </div>\r\n   \r\n      </ion-content>\r\n     -->");

/***/ }),

/***/ "fcnB":
/*!*****************************************************************!*\
  !*** ./src/app/views/utility-payment/utility-payment.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: \"Montserrat\" !important;\n  /* Add !important to overwrite all elements */\n}\n\n.box {\n  border-width: thin;\n  border-radius: 13px;\n  width: 95%;\n  height: 55px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  margin-top: 10px;\n}\n\n.box1 {\n  border-width: thin;\n  border-radius: 13px;\n  width: 95%;\n  height: 100px;\n  margin-top: 10px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n}\n\n.inputCard {\n  padding-top: 7%;\n  padding-left: 5%;\n}\n\n.inputRemarks {\n  padding-top: 7%;\n  padding-left: 5%;\n}\n\n.inputCard1 {\n  padding-top: 10%;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.labelCard {\n  color: gray;\n  font-size: 14px;\n  font-family: \"Montserrat\" !important;\n}\n\n.searchbar {\n  border-radius: 10%;\n}\n\n.underline {\n  text-decoration: underline;\n  font-size: 14px;\n}\n\nion-input {\n  color: #102245 !important;\n  font-size: 14px;\n  --placeholder-color:rgba(16, 34, 69, 1) !important;\n  border: 1px solid #f1f1f1 !important;\n  font-family: \"Montserrat\" !important;\n}\n\nion-label {\n  color: #102245;\n  opacity: 75%;\n  font-size: 14px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-back-button {\n  color: blue;\n}\n\n.inputCard ion-item ion-label {\n  color: gray;\n}\n\n.inputCard ion-item {\n  margin-left: 0px;\n}\n\nion-textarea {\n  height: 500px;\n}\n\nion-icon {\n  font-size: xx-large;\n  color: #466ffe;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.text {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  color: #466ffe;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-button {\n  width: 95%;\n  padding-left: 5%;\n  height: 50px;\n  font-family: \"Montserrat\" !important;\n}\n\n.ion-padding-top {\n  padding-top: 10%;\n}\n\nion-toolbar {\n  margin-top: 5%;\n  box-shadow: 0 5pt 5pt -2pt #D3D3D3;\n}\n\n.boxDrop {\n  display: inline-block;\n  width: 95%;\n  height: 55px;\n  background-color: #f9fafb;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-width: thin;\n  border-style: solid;\n  border-radius: 10px;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n}\n\nngx-flag-picker {\n  display: inline-block;\n  font-size: x-large;\n  padding-top: 14px;\n  padding-left: 20px;\n  padding-top: 4%;\n  align-content: center;\n}\n\n.box7 {\n  padding-top: 0%;\n  padding-left: 0%;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.inputCard5 {\n  padding-top: 5%;\n  padding-left: 5%;\n}\n\nion-select {\n  font-family: \"Montserrat\" !important;\n  font-size: 14px;\n}\n\n.datepicker-toggle {\n  display: inline-block;\n  position: relative;\n  width: 18px;\n  height: 19px;\n}\n\n.datepicker-toggle-button {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(\"data:image/svg+xml;base64,...\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx1dGlsaXR5LXBheW1lbnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksb0NBQUE7RUFDRCw2Q0FBQTtBQUFIOztBQUVBO0VBQ0csa0JBQUE7RUFFQSxtQkFBQTtFQUlBLFVBQUE7RUFDQSxZQUFBO0VBR0YscUZBQUE7RUFDRSwrQkFBQTtFQUVBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBTkg7O0FBUUc7RUFDSSxrQkFBQTtFQUVBLG1CQUFBO0VBRUEsVUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUlILHFGQUFBO0VBQ0EsK0JBQUE7QUFWSjs7QUF1Qkc7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFwQkg7O0FBdUJHO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBcEJQOztBQXlCTztFQUNDLGdCQUFBO0VBQ0Msa0JBQUE7RUFDRCxtQkFBQTtBQXRCUjs7QUEyQkc7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0FBeEJIOztBQTJCRztFQUNBLGtCQUFBO0FBeEJIOztBQTBCRztFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQXZCSDs7QUF5Qkc7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFFQSxrREFBQTtFQUVBLG9DQUFBO0VBQ0Esb0NBQUE7QUF4Qkg7O0FBMEJHO0VBQ0EsY0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUF2Qkg7O0FBMEJHO0VBQ0EsV0FBQTtBQXZCSDs7QUEwQkc7RUFDSSxXQUFBO0FBdkJQOztBQXlCRztFQUNJLGdCQUFBO0FBdEJQOztBQXlCRztFQUNJLGFBQUE7QUF0QlA7O0FBd0JHO0VBQ0ksbUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQXJCUDs7QUF3Qkc7RUFFSSxlQUFBO0VBQ0YscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUF0Qkw7O0FBd0JHO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FBckJQOztBQXlCRztFQUNJLGdCQUFBO0FBdEJQOztBQXdCTztFQUNJLGNBQUE7RUFDRCxrQ0FBQTtBQXJCVjs7QUF1QkE7RUFDRyxxQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FBckJIOztBQTJCTztFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBeEJYOztBQTRCUztFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUF6Qlg7O0FBMkJTO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBeEJYOztBQTBCUztFQUNJLG9DQUFBO0VBQ0EsZUFBQTtBQXZCYjs7QUF5QlM7RUFDQyxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUF0QlY7O0FBd0JRO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0RBQUE7QUFyQlYiLCJmaWxlIjoidXRpbGl0eS1wYXltZW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4qIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgLyogQWRkICFpbXBvcnRhbnQgdG8gb3ZlcndyaXRlIGFsbCBlbGVtZW50cyAqL1xyXG4gfVxyXG4uYm94IHtcclxuICAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gICAvLyBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4vLyAgICBib3gtc2hhZG93OiAwIDVwdCA1cHQgLTJwdCAjRDNEM0QzO1xyXG4gICAvLyBib3gtc2hhZG93OiAwIDAgNXB0IDAuNXB0ICNEM0QzRDM7XHJcbiAgIC8vIGJveC1zaGFkb3c6IDBweCAxNXB4IDEwcHggLTE1cHggI0QzRDNEMztcclxuICAgd2lkdGg6IDk1JTtcclxuICAgaGVpZ2h0OiA1NXB4O1xyXG4gICBcclxuIC8vICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI0ZGRkZGRiwgI0Y4RkFGRSk7XHJcbiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcbi8vICAgIG9wYWNpdHk6IDUwJTtcclxuICAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcclxuICAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICAgbWFyZ2luLXRvcDogMTBweDtcclxuIH1cclxuICAgLmJveDEge1xyXG4gICAgICAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gICAgICAvLyBib3JkZXItc3R5bGU6IHRoaW47XHJcbiAgICAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gICAgICAgXHJcbiAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAvLyAgICBib3gtc2hhZG93OiAwIDVwdCA5cHQgLTJwdCAjRDNEM0QzO1xyXG4gICAgICAgXHJcbiAgICAvLyAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxyZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gICAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuICAgLy8gb3BhY2l0eTogNTAlO1xyXG4gICAgICAgLy8gYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gICAgICAgLy8gYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgICAgICAvLyBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xyXG4gICAgICAgLy8gYm9yZGVyLWJvdHRvbS1zdHlsZTogaGlkZGVuO1xyXG4gICAgICAgfVxyXG4gICAvLyBkaXYge1xyXG4gICAvLyAgICAgb3ZlcmZsb3cteDogaGlkZGVuOyAvKiBIaWRlIGhvcml6b250YWwgc2Nyb2xsYmFyICovXHJcbiAgIC8vICAgICBvdmVyZmxvdy15OiBzY3JvbGw7IC8qIEFkZCB2ZXJ0aWNhbCBzY3JvbGxiYXIgKi9cclxuICAgLy8gICB9XHJcbiAgICAgXHJcbiAgIFxyXG4gICAuaW5wdXRDYXJke1xyXG4gICBwYWRkaW5nLXRvcDogNyU7XHJcbiAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgIFxyXG4gICB9XHJcbiAgIC5pbnB1dFJlbWFya3N7XHJcbiAgICAgICBwYWRkaW5nLXRvcDogNyU7XHJcbiAgICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG5cclxuICAgICAgIFxyXG4gICAgICAgfVxyXG5cclxuICAgICAgIC5pbnB1dENhcmQxe1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgICAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIC8vYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxyZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gICAgICAgIC8vcGFkZGluZy1sZWZ0OiAzJTtcclxuXHJcbiAgICB9XHJcbiAgIC5sYWJlbENhcmR7XHJcbiAgIGNvbG9yOiBncmF5O1xyXG4gICBmb250LXNpemU6IDE0cHg7XHJcbiAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgXHJcbiAgIH1cclxuICAgLnNlYXJjaGJhcntcclxuICAgYm9yZGVyLXJhZGl1czoxMCU7XHJcbiAgIH1cclxuICAgLnVuZGVybGluZSB7XHJcbiAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICBmb250LXNpemU6IDE0cHg7XHJcbiAgIH1cclxuICAgaW9uLWlucHV0IHtcclxuICAgY29sb3I6cmdiYSgxNiwgMzQsIDY5LCAxKSAhaW1wb3J0YW50O1xyXG4gICBmb250LXNpemU6IDE0cHg7XHJcbiAgIFxyXG4gICAtLXBsYWNlaG9sZGVyLWNvbG9yOnJnYmEoMTYsIDM0LCA2OSwgMSkgIWltcG9ydGFudDtcclxuICAgLy8gLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxMDAlO1xyXG4gICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxICFpbXBvcnRhbnQ7XHJcbiAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgfVxyXG4gICBpb24tbGFiZWx7XHJcbiAgIGNvbG9yOnJnYmEoMTYsIDM0LCA2OSk7XHJcbiAgIG9wYWNpdHk6IDc1JTtcclxuICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcblxyXG4gICB9XHJcbiAgIGlvbi1iYWNrLWJ1dHRvbntcclxuICAgY29sb3I6IGJsdWU7XHJcbiAgIFxyXG4gICB9XHJcbiAgIC5pbnB1dENhcmQgaW9uLWl0ZW0gaW9uLWxhYmVse1xyXG4gICAgICAgY29sb3I6ICBncmF5O1xyXG4gICB9XHJcbiAgIC5pbnB1dENhcmQgaW9uLWl0ZW17XHJcbiAgICAgICBtYXJnaW4tbGVmdDogMHB4O1xyXG4gICAgICBcclxuICAgfVxyXG4gICBpb24tdGV4dGFyZWF7XHJcbiAgICAgICBoZWlnaHQ6NTAwcHg7XHJcbiAgIH1cclxuICAgaW9uLWljb257XHJcbiAgICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgICAgY29sb3I6cmdiKDcwLDExMSwyNTQpO1xyXG4gICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIFxyXG4gICB9XHJcbiAgIC50ZXh0e1xyXG4gICAgICBcclxuICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICBjb2xvcjpyZ2IoNzAsMTExLDI1NCk7XHJcbiAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgfVxyXG4gICBpb24tYnV0dG9ue1xyXG4gICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICAgIFxyXG4gICAgICAgXHJcbiAgIH1cclxuICAgLmlvbi1wYWRkaW5nLXRvcHtcclxuICAgICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgICAgICB9XHJcbiAgICAgICBpb24tdG9vbGJhcntcclxuICAgICAgICAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNEM0QzRDM7XHJcbiAgICAgICB9XHJcbi5ib3hEcm9we1xyXG4gICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgIHdpZHRoOiA5NSU7XHJcbiAgIGhlaWdodDogNTVweDtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcclxuICAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcclxuICAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gICAvLzogO1xyXG4gICBib3JkZXItc3R5bGU6IHNvbGlkO1xyXG4gICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICBib3gtc2hhZG93OiAwIDVwdCA1cHQgLTJwdCAjZDNkM2QzO1xyXG4gICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xyXG4gICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xyXG4gICBib3JkZXItYm90dG9tLXN0eWxlOiBoaWRkZW47XHJcbiAgIFxyXG4gICBcclxufVxyXG5cclxuXHJcbiAgICAgICBuZ3gtZmxhZy1waWNrZXJ7XHJcbiAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgICAgICAgICBwYWRkaW5nLXRvcDogMTRweDtcclxuICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICAgcGFkZGluZy10b3A6IDQlO1xyXG4gICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC5ib3g3e1xyXG4gICAgICAgICAgIHBhZGRpbmctdG9wOiAwJTtcclxuICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDAlO1xyXG4gICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyBcclxuICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IFxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIC5pbnB1dENhcmQ1e1xyXG4gICAgICAgICAgIHBhZGRpbmctdG9wOiA1JTtcclxuICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGlvbi1zZWxlY3R7XHJcbiAgICAgICAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgLmRhdGVwaWNrZXItdG9nZ2xlIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgIHdpZHRoOiAxOHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxOXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGF0ZXBpY2tlci10b2dnbGUtYnV0dG9uIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwuLi4nKTtcclxuICAgICAgICB9Il19 */");

/***/ }),

/***/ "pcVJ":
/*!*************************************************************************!*\
  !*** ./src/app/views/utility-payment/utility-payment-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: UtilityPaymentPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityPaymentPageRoutingModule", function() { return UtilityPaymentPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _utility_payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utility-payment.page */ "yTMH");




const routes = [
    {
        path: '',
        component: _utility_payment_page__WEBPACK_IMPORTED_MODULE_3__["UtilityPaymentPage"]
    }
];
let UtilityPaymentPageRoutingModule = class UtilityPaymentPageRoutingModule {
};
UtilityPaymentPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UtilityPaymentPageRoutingModule);



/***/ }),

/***/ "yTMH":
/*!***************************************************************!*\
  !*** ./src/app/views/utility-payment/utility-payment.page.ts ***!
  \***************************************************************/
/*! exports provided: UtilityPaymentPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityPaymentPage", function() { return UtilityPaymentPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_utility_payment_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./utility-payment.page.html */ "Yhp8");
/* harmony import */ var _utility_payment_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utility-payment.page.scss */ "fcnB");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");






let UtilityPaymentPage = class UtilityPaymentPage {
    constructor(fb, router) {
        this.fb = fb;
        this.router = router;
        this.billNames = ['1090000 88987 87123', '1090000 88987 87122', '1090000 88987 87128'];
        this.account = ['xxxxxxxx101', 'xxxxxx201'];
    }
    ngOnInit() {
        this.utilityForm = this.fb.group({
            billerName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            accountBalance: ['$12,09,89', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            payFromAccount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            billDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            billNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            remark: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
        console.log(this.utilityForm.value);
    }
    next() {
        console.log(this.utilityForm.value);
        // this.router.navigate(['forex-transaction']);
        this.router.navigate(['token-generation']);
    }
    previous1() {
        this.router.navigate(['tabs']);
    }
};
UtilityPaymentPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
];
UtilityPaymentPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-utility-payment',
        template: _raw_loader_utility_payment_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_utility_payment_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UtilityPaymentPage);



/***/ })

}]);
//# sourceMappingURL=views-utility-payment-utility-payment-module.js.map