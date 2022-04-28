(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-help-help-module"],{

/***/ "A4lv":
/*!*******************************************!*\
  !*** ./src/app/views/help/help.module.ts ***!
  \*******************************************/
/*! exports provided: HelpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageModule", function() { return HelpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _help_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./help-routing.module */ "kH+F");
/* harmony import */ var _help_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./help.page */ "wphl");







let HelpPageModule = class HelpPageModule {
};
HelpPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _help_routing_module__WEBPACK_IMPORTED_MODULE_5__["HelpPageRoutingModule"]
        ],
        declarations: [_help_page__WEBPACK_IMPORTED_MODULE_6__["HelpPage"]]
    })
], HelpPageModule);



/***/ }),

/***/ "H08T":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/help/help.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header *ngIf=\"flag\">\r\n  <ion-toolbar style=\"padding-top: 7%;\" class=\"new-background-color\">\r\n    <ion-icon class=\"backIcon\" name=\"chevron-back-outline\" (click)=\"goToHome()\"></ion-icon>\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"flag\">\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img style=\"width: 10%; margin-bottom: 5%;\" src=\"assets\\icon\\whatsnew.PNG\" alt=\"Ionic logo\">\r\n      <!-- <ion-icon name=\"albums-outline\" style=\"color: #456EFE;\" class=\"iconCard\" ></ion-icon>&nbsp;&nbsp;&nbsp; -->\r\n      <ion-label class=\"labelCard\">\r\n      What's New\r\n      </ion-label>\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\" class=\"iconCard\" (click)=\"goToWhatsNew()\"></ion-icon>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img style=\"width: 10%; margin-bottom: 5%;\" src=\"assets\\icon\\what2.PNG\" alt=\"Ionic logo\">\r\n      <!-- <ion-icon name=\"albums-outline\" style=\"color: #456EFE;\" class=\"iconCard\"></ion-icon>&nbsp;&nbsp;&nbsp; -->\r\n      <ion-label class=\"labelCard\">\r\n      What Can I Do\r\n       \r\n      </ion-label>\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\" class=\"iconCard\" (click)=\"goToWhatCanIDo()\"></ion-icon>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img style=\"width: 10%; margin-bottom: 5%;\" src=\"assets\\icon\\what3.PNG\" alt=\"Ionic logo\">\r\n      <!-- <ion-icon name=\"albums-outline\" style=\"color: #456EFE;\" class=\"iconCard\"></ion-icon>&nbsp;&nbsp;&nbsp; -->\r\n      <ion-label class=\"labelCard\">\r\n      Security Tips\r\n      </ion-label>\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\" class=\"iconCard\" (click)=\"goToSecurityTip()\"></ion-icon>\r\n    </ion-item>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-header *ngIf=\"isWhatsNew\">\r\n  <ion-toolbar style=\"padding-top: 7%;\" class=\"new-background-color\">\r\n    <ion-icon class=\"backIcon\" name=\"chevron-back-outline\" (click)=\"goToHelp()\"></ion-icon>\r\n    <span class=\"text\">What's New</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"isWhatsNew\">\r\n  <div>\r\n    <h3 style=\"color: #456EFE;margin-left: 10%;\">View Balance</h3>\r\n  </div>\r\n  <div>\r\n    <div>\r\n      <ion-radio-group>\r\n      <ion-item class=\"item\">\r\n        <ion-radio slot=\"start\" value=\"griff\" style=\"margin-bottom: 20%;\"></ion-radio>\r\n        <ion-text class=\"newCard\">You can tap on \"View Balance\" to see balances of your operative ( Savings, Current & Overdraft ) accounts.</ion-text>\r\n      </ion-item>\r\n      </ion-radio-group>\r\n    </div>\r\n    <div>\r\n      <ion-radio-group>\r\n      <ion-item class=\"item\">\r\n        <ion-radio slot=\"start\" value=\"griff\" style=\"margin-bottom: 20%;\"></ion-radio>\r\n        <ion-text class=\"newCard\">You can use either Biometric or User ID & password to authenticate.</ion-text>\r\n      </ion-item>\r\n    </ion-radio-group>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n\r\n<ion-header *ngIf=\"isWhatCanIDo\">\r\n  <ion-toolbar style=\"padding-top: 7%;\" class=\"new-background-color\">\r\n    <ion-icon class=\"backIcon\" name=\"chevron-back-outline\" (click)=\"goToHelp()\"></ion-icon>\r\n    <span class=\"text\">What's Can I Do</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"isWhatCanIDo\">\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <ion-text class=\"newCard\">Hi, I am a Chatbot, your personal digital assistant</ion-text> \r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\" class=\"iconCard\"></ion-icon>\r\n    </ion-item>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-header *ngIf=\"isSecurityTip\">\r\n  <ion-toolbar style=\"padding-top: 7%;\" class=\"new-background-color\">\r\n    <ion-icon class=\"backIcon\" name=\"chevron-back-outline\" (click)=\"goToHelp()\"></ion-icon>\r\n    <span class=\"text\">Security Tips</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"isSecurityTip\">\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img class=\"icon2\" src=\"assets\\icon\\security2.PNG\" alt=\"Ionic logo\">\r\n     \r\n      <ion-text class=\"newCard\">Change your password frequently.</ion-text>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img class=\"icon2\" src=\"assets\\icon\\security2.PNG\" alt=\"Ionic logo\">\r\n      <ion-text class=\"newCard\">Avoid public computers and networks.</ion-text>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img class=\"icon2\" src=\"assets\\icon\\security2.PNG\" alt=\"Ionic logo\"> \r\n           <ion-text class=\"newCard\">Preserve your personal confidentiality.</ion-text>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img class=\"icon2\" src=\"assets\\icon\\security2.PNG\" alt=\"Ionic logo\">      \r\n      <ion-text class=\"newCard\">Lookout for attempted phishing attacks .</ion-text>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img class=\"icon2\" src=\"assets\\icon\\security2.PNG\" alt=\"Ionic logo\">\r\n      <ion-text class=\"newCard\">Do not click on login links on email.</ion-text>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img class=\"icon2\" src=\"assets\\icon\\security2.PNG\" alt=\"Ionic logo\">\r\n      <ion-text class=\"newCard\">Audit and check your account frequently.</ion-text>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img class=\"icon2\" src=\"assets\\icon\\security2.PNG\" alt=\"Ionic logo\">\r\n      <ion-text class=\"newCard\">View the last logged in details.</ion-text>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img class=\"icon2\" src=\"assets\\icon\\security2.PNG\" alt=\"Ionic logo\">\r\n      <ion-text class=\"newCard\">Always logout.</ion-text>\r\n    </ion-item>\r\n  </div>\r\n</ion-content>");

/***/ }),

/***/ "X3Ey":
/*!*******************************************!*\
  !*** ./src/app/views/help/help.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".new-background-color {\n  --background: #ECF3F2;\n}\n\n.backIcon {\n  font-size: x-large;\n  margin-bottom: 4%;\n  color: #102245;\n  display: inline-block;\n  vertical-align: middle;\n  opacity: 100%;\n}\n\n.text {\n  margin-left: 2%;\n  margin-bottom: 4%;\n  display: inline-block;\n  vertical-align: middle;\n  color: #102245;\n  font-size: 15pt;\n  opacity: 70%;\n}\n\n.labelCard {\n  font-family: \"Montserrat\" !important;\n  opacity: 75%;\n  font-size: 13pt;\n  margin-bottom: 10%;\n  margin-left: 5%;\n}\n\n.iconCard {\n  margin-bottom: 8%;\n}\n\n.item {\n  max-width: 95% !important;\n  list-style: none;\n  display: list-item;\n  margin-top: 10%;\n}\n\n.newCard {\n  font-family: \"Montserrat\" !important;\n  opacity: 55%;\n  font-size: large;\n  margin-bottom: 10%;\n  margin-left: 3%;\n}\n\n.icon {\n  margin-left: 25%;\n  margin-top: 10%;\n  font-family: \"Montserrat\";\n}\n\n.icon2 {\n  margin-left: 5%;\n  width: 10%;\n  margin-bottom: 8%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxoZWxwLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBQUo7O0FBRUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDRixxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDSSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUE7RUFDSSxpQkFBQTtBQUdKOztBQUFBO0VBQ0cseUJBQUE7RUFDQSxnQkFBQTtFQUNDLGtCQUFBO0VBQ0EsZUFBQTtBQUdKOztBQURBO0VBQ0ksb0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFJSjs7QUFGQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBS0o7O0FBSEE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FBTUoiLCJmaWxlIjoiaGVscC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LWJhY2tncm91bmQtY29sb3J7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNFQ0YzRjI7XHJcbiAgICBcclxufVxyXG4uYmFja0ljb257XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgIFxyXG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgICBjb2xvcjojMTAyMjQ1O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG9wYWNpdHk6IDEwMCU7XHJcbn1cclxuLnRleHR7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBjb2xvcjogIzEwMjI0NTtcclxuICBmb250LXNpemU6IDE1cHQ7XHJcbiAgb3BhY2l0eTogNzAlO1xyXG59XHJcbi5sYWJlbENhcmR7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiA3NSU7XHJcbiAgICBmb250LXNpemU6IDEzcHQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbn1cclxuLmljb25DYXJke1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOCU7XHJcbiAgICBcclxufVxyXG4uaXRlbXtcclxuICAgbWF4LXdpZHRoOiA5NSUgIWltcG9ydGFudDtcclxuICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6bGlzdC1pdGVtO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcbi5uZXdDYXJke1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogNTUlO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxufVxyXG4uaWNvbntcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG59XHJcbi5pY29uMntcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4JTtcclxuXHJcbn1cclxuIl19 */");

/***/ }),

/***/ "kH+F":
/*!***************************************************!*\
  !*** ./src/app/views/help/help-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HelpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPageRoutingModule", function() { return HelpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _help_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./help.page */ "wphl");




const routes = [
    {
        path: '',
        component: _help_page__WEBPACK_IMPORTED_MODULE_3__["HelpPage"]
    }
];
let HelpPageRoutingModule = class HelpPageRoutingModule {
};
HelpPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HelpPageRoutingModule);



/***/ }),

/***/ "wphl":
/*!*****************************************!*\
  !*** ./src/app/views/help/help.page.ts ***!
  \*****************************************/
/*! exports provided: HelpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpPage", function() { return HelpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_help_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./help.page.html */ "H08T");
/* harmony import */ var _help_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./help.page.scss */ "X3Ey");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let HelpPage = class HelpPage {
    constructor(router) {
        this.router = router;
        this.title = 'Help';
        this.isWhatsNew = false;
        this.isWhatCanIDo = false;
        this.isSecurityTip = false;
        this.flag = true;
    }
    ngOnInit() {
    }
    goToHelp() {
        this.flag = true;
        this.isWhatsNew = false;
        this.isWhatCanIDo = false;
        this.isSecurityTip = false;
    }
    goToWhatsNew() {
        this.flag = false;
        this.isWhatsNew = true;
        this.isWhatCanIDo = false;
        this.isSecurityTip = false;
    }
    goToWhatCanIDo() {
        this.isWhatsNew = false;
        this.flag = false;
        this.isWhatCanIDo = true;
        this.isSecurityTip = false;
    }
    goToSecurityTip() {
        this.flag = false;
        this.isWhatsNew = false;
        this.isWhatCanIDo = false;
        this.isSecurityTip = true;
    }
    goToHome() {
        this.router.navigate(['/tabs/profile']);
    }
};
HelpPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HelpPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-help',
        template: _raw_loader_help_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_help_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HelpPage);



/***/ })

}]);
//# sourceMappingURL=views-help-help-module.js.map