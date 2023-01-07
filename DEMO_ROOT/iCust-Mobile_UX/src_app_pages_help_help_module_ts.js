"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_help_help_module_ts"],{

/***/ 38560:
/*!***************************************************!*\
  !*** ./src/app/pages/help/help-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpPageRoutingModule": () => (/* binding */ HelpPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _help_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help.page */ 59509);




const routes = [
    {
        path: '',
        component: _help_page__WEBPACK_IMPORTED_MODULE_0__.HelpPage
    }
];
let HelpPageRoutingModule = class HelpPageRoutingModule {
};
HelpPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HelpPageRoutingModule);



/***/ }),

/***/ 60998:
/*!*******************************************!*\
  !*** ./src/app/pages/help/help.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpPageModule": () => (/* binding */ HelpPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _help_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help-routing.module */ 38560);
/* harmony import */ var _help_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help.page */ 59509);







let HelpPageModule = class HelpPageModule {
};
HelpPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _help_routing_module__WEBPACK_IMPORTED_MODULE_0__.HelpPageRoutingModule
        ],
        declarations: [_help_page__WEBPACK_IMPORTED_MODULE_1__.HelpPage]
    })
], HelpPageModule);



/***/ }),

/***/ 59509:
/*!*****************************************!*\
  !*** ./src/app/pages/help/help.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpPage": () => (/* binding */ HelpPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _help_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help.page.html?ngResource */ 75372);
/* harmony import */ var _help_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help.page.scss?ngResource */ 46907);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





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
        this.router.navigate(['/profile']);
    }
};
HelpPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
HelpPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-help',
        template: _help_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_help_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HelpPage);



/***/ }),

/***/ 46907:
/*!******************************************************!*\
  !*** ./src/app/pages/help/help.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = ".new-background-color {\n  --background: #ECF3F2;\n}\n\n.backIcon {\n  font-size: x-large;\n  margin-bottom: 4%;\n  color: #102245;\n  display: inline-block;\n  vertical-align: middle;\n  opacity: 100%;\n}\n\n.text {\n  margin-left: 2%;\n  margin-bottom: 4%;\n  display: inline-block;\n  vertical-align: middle;\n  color: #102245;\n  font-size: 15pt;\n  opacity: 100%;\n  font-weight: 800;\n}\n\n.labelCard {\n  font-family: \"Montserrat\" !important;\n  opacity: 75%;\n  font-size: 13pt;\n  margin-bottom: 10%;\n  margin-left: 5%;\n}\n\n.iconCard {\n  margin-bottom: 8%;\n}\n\n.item {\n  max-width: 95% !important;\n  list-style: none;\n  display: list-item;\n  margin-top: 10%;\n}\n\n.newCard {\n  font-family: \"Montserrat\" !important;\n  opacity: 114%;\n  font-size: large;\n  margin-bottom: 10%;\n  margin-left: 3%;\n}\n\n.icon {\n  margin-left: 25%;\n  margin-top: 10%;\n  font-family: \"Montserrat\";\n}\n\n.icon2 {\n  margin-left: 5%;\n  width: 10%;\n  margin-bottom: 8%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kscUJBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBRUEsaUJBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFBSjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNGLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUNBO0VBQ0ksb0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUFBO0VBQ0ksaUJBQUE7QUFHSjs7QUFBQTtFQUNHLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQyxrQkFBQTtFQUNBLGVBQUE7QUFHSjs7QUFEQTtFQUNJLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBSUo7O0FBRkE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUtKOztBQUhBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQU1KIiwiZmlsZSI6ImhlbHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRUNGM0YyO1xyXG4gICAgXHJcbn1cclxuLmJhY2tJY29ue1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICBcclxuICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gICAgY29sb3I6IzEwMjI0NTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBvcGFjaXR5OiAxMDAlO1xyXG59XHJcbi50ZXh0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgY29sb3I6ICMxMDIyNDU7XHJcbiAgZm9udC1zaXplOiAxNXB0O1xyXG4gIG9wYWNpdHk6IDEwMCU7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG4ubGFiZWxDYXJke1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogNzUlO1xyXG4gICAgZm9udC1zaXplOiAxM3B0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcbi5pY29uQ2FyZHtcclxuICAgIG1hcmdpbi1ib3R0b206IDglO1xyXG4gICAgXHJcbn1cclxuLml0ZW17XHJcbiAgIG1heC13aWR0aDogOTUlICFpbXBvcnRhbnQ7XHJcbiAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5Omxpc3QtaXRlbTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG4ubmV3Q2FyZHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDExNCU7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG59XHJcbi5pY29ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbn1cclxuLmljb24ye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDglO1xyXG5cclxufVxyXG4iXX0= */";

/***/ }),

/***/ 75372:
/*!******************************************************!*\
  !*** ./src/app/pages/help/help.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header *ngIf=\"flag\">\r\n  <ion-toolbar style=\"padding-top: 7%; padding-left: 3%;\" class=\"new-background-color\">\r\n    <ion-icon class=\"backIcon\" name=\"chevron-back-outline\" (click)=\"goToHome()\"></ion-icon>\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"flag\">\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img style=\"width: 10%; margin-bottom: 5%;\" src=\"assets\\icon\\whatsnew.PNG\" alt=\"Ionic logo\">\r\n      <!-- <ion-icon name=\"albums-outline\" style=\"color: #456EFE;\" class=\"iconCard\" ></ion-icon>&nbsp;&nbsp;&nbsp; -->\r\n      <ion-label class=\"labelCard\">\r\n      What's New\r\n      </ion-label>\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\" class=\"iconCard\" (click)=\"goToWhatsNew()\"></ion-icon>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img style=\"width: 10%; margin-bottom: 5%;\" src=\"assets\\icon\\what2.PNG\" alt=\"Ionic logo\">\r\n      <!-- <ion-icon name=\"albums-outline\" style=\"color: #456EFE;\" class=\"iconCard\"></ion-icon>&nbsp;&nbsp;&nbsp; -->\r\n      <ion-label class=\"labelCard\">\r\n      What Can I Do\r\n       \r\n      </ion-label>\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\" class=\"iconCard\" (click)=\"goToWhatCanIDo()\"></ion-icon>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img style=\"width: 10%; margin-bottom: 5%;\" src=\"assets\\icon\\what3.PNG\" alt=\"Ionic logo\">\r\n      <!-- <ion-icon name=\"albums-outline\" style=\"color: #456EFE;\" class=\"iconCard\"></ion-icon>&nbsp;&nbsp;&nbsp; -->\r\n      <ion-label class=\"labelCard\">\r\n      Security Tips\r\n      </ion-label>\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\" class=\"iconCard\" (click)=\"goToSecurityTip()\"></ion-icon>\r\n    </ion-item>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-header *ngIf=\"isWhatsNew\">\r\n  <ion-toolbar style=\"padding-top: 7%;\" class=\"new-background-color\">\r\n    <ion-icon class=\"backIcon\" name=\"chevron-back-outline\" (click)=\"goToHelp()\"></ion-icon>\r\n    <span class=\"text\">What's New</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"isWhatsNew\">\r\n  <div>\r\n    <p style=\"color: #456EFE;margin-left: 10%; font-size: 16px;\">View Balance</p>\r\n  </div>\r\n  <div>\r\n    <div>\r\n      <ion-radio-group>\r\n      <ion-item class=\"item\">\r\n        <ion-radio slot=\"start\" value=\"griff\" style=\"margin-bottom: 20%;\"></ion-radio>\r\n        <ion-text class=\"newCard\">You can tap on \"View Balance\" to see balances of your operative ( Savings, Current & Overdraft ) accounts.</ion-text>\r\n      </ion-item>\r\n      </ion-radio-group>\r\n    </div>\r\n    <div>\r\n      <ion-radio-group>\r\n      <ion-item class=\"item\">\r\n        <ion-radio slot=\"start\" value=\"griff\" style=\"margin-bottom: 20%;\"></ion-radio>\r\n        <ion-text class=\"newCard\">You can use either Biometric or User ID & password to authenticate.</ion-text>\r\n      </ion-item>\r\n    </ion-radio-group>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n\r\n\r\n<ion-header *ngIf=\"isWhatCanIDo\">\r\n  <ion-toolbar style=\"padding-top: 7%;\" class=\"new-background-color\">\r\n    <ion-icon class=\"backIcon\" name=\"chevron-back-outline\" (click)=\"goToHelp()\"></ion-icon>\r\n    <span class=\"text\">What's Can I Do</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"isWhatCanIDo\">\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <ion-text class=\"newCard\">Hi, I am a Chatbot, your personal digital assistant</ion-text> \r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\" class=\"iconCard\"></ion-icon>\r\n    </ion-item>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-header *ngIf=\"isSecurityTip\">\r\n  <ion-toolbar style=\"padding-top: 7%;\" class=\"new-background-color\">\r\n    <ion-icon class=\"backIcon\" name=\"chevron-back-outline\" (click)=\"goToHelp()\"></ion-icon>\r\n    <span class=\"text\">Security Tips</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"isSecurityTip\">\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img class=\"icon2\" src=\"assets\\icon\\security2.PNG\" alt=\"Ionic logo\">\r\n     \r\n      <ion-text class=\"newCard\">Change your password frequently.</ion-text>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img class=\"icon2\" src=\"assets\\icon\\security2.PNG\" alt=\"Ionic logo\">\r\n      <ion-text class=\"newCard\">Avoid public computers and networks.</ion-text>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img class=\"icon2\" src=\"assets\\icon\\security2.PNG\" alt=\"Ionic logo\"> \r\n           <ion-text class=\"newCard\">Preserve your personal confidentiality.</ion-text>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img class=\"icon2\" src=\"assets\\icon\\security2.PNG\" alt=\"Ionic logo\">      \r\n      <ion-text class=\"newCard\">Lookout for attempted phishing attacks .</ion-text>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img class=\"icon2\" src=\"assets\\icon\\security2.PNG\" alt=\"Ionic logo\">\r\n      <ion-text class=\"newCard\">Do not click on login links on email.</ion-text>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img class=\"icon2\" src=\"assets\\icon\\security2.PNG\" alt=\"Ionic logo\">\r\n      <ion-text class=\"newCard\">Audit and check your account frequently.</ion-text>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img class=\"icon2\" src=\"assets\\icon\\security2.PNG\" alt=\"Ionic logo\">\r\n      <ion-text class=\"newCard\">View the last logged in details.</ion-text>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img class=\"icon2\" src=\"assets\\icon\\security2.PNG\" alt=\"Ionic logo\">\r\n      <ion-text class=\"newCard\">Always logout.</ion-text>\r\n    </ion-item>\r\n  </div>\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_help_help_module_ts.js.map