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

module.exports = ".text {\n  margin-left: 2%;\n  margin-bottom: 4%;\n  display: inline-block;\n  vertical-align: middle;\n  color: #102245;\n  font-size: 15pt;\n  opacity: 100%;\n  font-weight: 800;\n}\n\n.labelCard {\n  font-family: \"Montserrat\" !important;\n  opacity: 75%;\n  font-size: 13pt;\n  margin-bottom: 10%;\n  margin-left: 5%;\n}\n\n.iconCard {\n  margin-bottom: 8%;\n}\n\n.item {\n  margin-top: 16px;\n}\n\n.newCard {\n  font-family: \"Montserrat\" !important;\n  opacity: 114%;\n  font-size: large;\n  margin-bottom: 10%;\n  margin-left: 3%;\n}\n\n.icon {\n  margin-left: 25%;\n  margin-top: 10%;\n  font-family: \"Montserrat\";\n}\n\n.icon2 {\n  margin-left: 5%;\n  width: 10%;\n  margin-bottom: 8%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUE7RUFDSSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBREo7O0FBSUE7RUFDSSxpQkFBQTtBQURKOztBQUtBO0VBQ0ksZ0JBQUE7QUFGSjs7QUFLQTtFQUNJLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRko7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUZKOztBQUtBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQUZKIiwiZmlsZSI6ImhlbHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4udGV4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBjb2xvcjogIzEwMjI0NTtcclxuICAgIGZvbnQtc2l6ZTogMTVwdDtcclxuICAgIG9wYWNpdHk6IDEwMCU7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG59XHJcblxyXG4ubGFiZWxDYXJkIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDc1JTtcclxuICAgIGZvbnQtc2l6ZTogMTNwdDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxufVxyXG5cclxuLmljb25DYXJkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDglO1xyXG5cclxufVxyXG5cclxuLml0ZW0ge1xyXG4gICAgbWFyZ2luLXRvcDogMTZweDtcclxufVxyXG5cclxuLm5ld0NhcmQge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMTE0JTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMyU7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnO1xyXG59XHJcblxyXG4uaWNvbjIge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDglO1xyXG5cclxufSJdfQ== */";

/***/ }),

/***/ 75372:
/*!******************************************************!*\
  !*** ./src/app/pages/help/help.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header *ngIf=\"flag\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goToHome()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>{{title}}</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"flag\">\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img style=\"width: 10%; margin-bottom: 5%;\" src=\"assets\\icon\\whatsnew.PNG\" alt=\"Ionic logo\">\r\n      <!-- <ion-icon name=\"albums-outline\" style=\"color: #456EFE;\" class=\"iconCard\" ></ion-icon>&nbsp;&nbsp;&nbsp; -->\r\n      <ion-label class=\"labelCard\">\r\n        What's New\r\n      </ion-label>\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\" class=\"iconCard\" (click)=\"goToWhatsNew()\"></ion-icon>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img style=\"width: 10%; margin-bottom: 5%;\" src=\"assets\\icon\\what2.PNG\" alt=\"Ionic logo\">\r\n      <!-- <ion-icon name=\"albums-outline\" style=\"color: #456EFE;\" class=\"iconCard\"></ion-icon>&nbsp;&nbsp;&nbsp; -->\r\n      <ion-label class=\"labelCard\">\r\n        What Can I Do\r\n\r\n      </ion-label>\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\" class=\"iconCard\" (click)=\"goToWhatCanIDo()\"></ion-icon>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img style=\"width: 10%; margin-bottom: 5%;\" src=\"assets\\icon\\what3.PNG\" alt=\"Ionic logo\">\r\n      <!-- <ion-icon name=\"albums-outline\" style=\"color: #456EFE;\" class=\"iconCard\"></ion-icon>&nbsp;&nbsp;&nbsp; -->\r\n      <ion-label class=\"labelCard\">\r\n        Security Tips\r\n      </ion-label>\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\" class=\"iconCard\" (click)=\"goToSecurityTip()\"></ion-icon>\r\n    </ion-item>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-header *ngIf=\"isWhatsNew\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goToHelp()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>What's New</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"isWhatsNew\">\r\n  <div class=\"container my-2\">\r\n    <p style=\"color: #456EFE;margin-left: 10%; font-size: 16px;\">View Balance</p>\r\n </div>\r\n\r\n\r\n  <ion-radio-group value=\"griff\">\r\n    <ion-item class=\"item\">\r\n      <ion-radio slot=\"start\" value=\"griff\" [checked]=\"true\"></ion-radio>\r\n      <ion-text class=\"newCard\">You can tap on \"View Balance\" to see balances of your operative ( Savings, Current &\r\n        Overdraft ) accounts.</ion-text>\r\n    </ion-item>\r\n\r\n    <ion-item class=\"item\">\r\n      <ion-radio slot=\"start\" value=\"bio\"></ion-radio>\r\n      <ion-text class=\"newCard\">You can use either Biometric or User ID & password to authenticate.</ion-text>\r\n    </ion-item>\r\n  </ion-radio-group>\r\n\r\n\r\n</ion-content>\r\n\r\n\r\n<ion-header *ngIf=\"isWhatCanIDo\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goToHelp()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>What's Can I Do</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"isWhatCanIDo\">\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <ion-text class=\"newCard\">Hi, I am a Chatbot, your personal digital assistant</ion-text>\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\" class=\"iconCard\"></ion-icon>\r\n    </ion-item>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-header *ngIf=\"isSecurityTip\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-button (click)=\"goToHelp()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Security Tips</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"isSecurityTip\">\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img class=\"icon2\" src=\"assets\\icon\\security2.PNG\" alt=\"Ionic logo\">\r\n\r\n      <ion-text class=\"newCard\">Change your password frequently.</ion-text>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img class=\"icon2\" src=\"assets\\icon\\security2.PNG\" alt=\"Ionic logo\">\r\n      <ion-text class=\"newCard\">Avoid public computers and networks.</ion-text>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img class=\"icon2\" src=\"assets\\icon\\security2.PNG\" alt=\"Ionic logo\">\r\n      <ion-text class=\"newCard\">Preserve your personal confidentiality.</ion-text>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img class=\"icon2\" src=\"assets\\icon\\security2.PNG\" alt=\"Ionic logo\">\r\n      <ion-text class=\"newCard\">Lookout for attempted phishing attacks .</ion-text>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img class=\"icon2\" src=\"assets\\icon\\security2.PNG\" alt=\"Ionic logo\">\r\n      <ion-text class=\"newCard\">Do not click on login links on email.</ion-text>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img class=\"icon2\" src=\"assets\\icon\\security2.PNG\" alt=\"Ionic logo\">\r\n      <ion-text class=\"newCard\">Audit and check your account frequently.</ion-text>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img class=\"icon2\" src=\"assets\\icon\\security2.PNG\" alt=\"Ionic logo\">\r\n      <ion-text class=\"newCard\">View the last logged in details.</ion-text>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img class=\"icon2\" src=\"assets\\icon\\security2.PNG\" alt=\"Ionic logo\">\r\n      <ion-text class=\"newCard\">Always logout.</ion-text>\r\n    </ion-item>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_help_help_module_ts.js.map