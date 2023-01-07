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

module.exports = ".new-background-color {\n  --background: #ECF3F2;\n}\n\n.backIcon {\n  font-size: x-large;\n  margin-bottom: 4%;\n  color: #102245;\n  display: inline-block;\n  vertical-align: middle;\n  opacity: 100%;\n}\n\n.text {\n  margin-left: 2%;\n  margin-bottom: 4%;\n  display: inline-block;\n  vertical-align: middle;\n  color: #102245;\n  font-size: 15pt;\n  opacity: 100%;\n  font-weight: 800;\n}\n\n.labelCard {\n  font-family: \"Montserrat\" !important;\n  opacity: 75%;\n  font-size: 13pt;\n  margin-bottom: 10%;\n  margin-left: 5%;\n}\n\n.iconCard {\n  margin-bottom: 8%;\n}\n\n.item {\n  max-width: 95% !important;\n  list-style: none;\n  display: list-item;\n  margin-top: 10%;\n}\n\n.newCard {\n  font-family: \"Montserrat\" !important;\n  opacity: 114%;\n  font-size: large;\n  margin-bottom: 10%;\n  margin-left: 3%;\n}\n\n.icon {\n  margin-left: 25%;\n  margin-top: 10%;\n  font-family: \"Montserrat\";\n}\n\n.icon2 {\n  margin-left: 5%;\n  width: 10%;\n  margin-bottom: 8%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHAucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0SHViJTIwUmVwb3NpdG9yeSUyMG9sZFxcaUN1c3RNb2JpbGUtdjJcXHNyY1xcYXBwXFxwYWdlc1xcaGVscFxcaGVscC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFFQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0YscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDSSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUE7RUFDSSxpQkFBQTtBQ0dKOztBREFBO0VBQ0cseUJBQUE7RUFDQSxnQkFBQTtFQUNDLGtCQUFBO0VBQ0EsZUFBQTtBQ0dKOztBRERBO0VBQ0ksb0NBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNJSjs7QURGQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDS0o7O0FESEE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDTUoiLCJmaWxlIjoiaGVscC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmV3LWJhY2tncm91bmQtY29sb3J7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNFQ0YzRjI7XHJcbiAgICBcclxufVxyXG4uYmFja0ljb257XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgIFxyXG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgICBjb2xvcjojMTAyMjQ1O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIG9wYWNpdHk6IDEwMCU7XHJcbn1cclxuLnRleHR7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBjb2xvcjogIzEwMjI0NTtcclxuICBmb250LXNpemU6IDE1cHQ7XHJcbiAgb3BhY2l0eTogMTAwJTtcclxuICBmb250LXdlaWdodDogODAwO1xyXG59XHJcbi5sYWJlbENhcmR7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiA3NSU7XHJcbiAgICBmb250LXNpemU6IDEzcHQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbn1cclxuLmljb25DYXJke1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOCU7XHJcbiAgICBcclxufVxyXG4uaXRlbXtcclxuICAgbWF4LXdpZHRoOiA5NSUgIWltcG9ydGFudDtcclxuICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgIGRpc3BsYXk6bGlzdC1pdGVtO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcbi5uZXdDYXJke1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMTE0JTtcclxuICAgIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMyU7XHJcbn1cclxuLmljb257XHJcbiAgICBtYXJnaW4tbGVmdDogMjUlO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JztcclxufVxyXG4uaWNvbjJ7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOCU7XHJcblxyXG59XHJcbiIsIi5uZXctYmFja2dyb3VuZC1jb2xvciB7XG4gIC0tYmFja2dyb3VuZDogI0VDRjNGMjtcbn1cblxuLmJhY2tJY29uIHtcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xuICBtYXJnaW4tYm90dG9tOiA0JTtcbiAgY29sb3I6ICMxMDIyNDU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgb3BhY2l0eTogMTAwJTtcbn1cblxuLnRleHQge1xuICBtYXJnaW4tbGVmdDogMiU7XG4gIG1hcmdpbi1ib3R0b206IDQlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiAjMTAyMjQ1O1xuICBmb250LXNpemU6IDE1cHQ7XG4gIG9wYWNpdHk6IDEwMCU7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG59XG5cbi5sYWJlbENhcmQge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogNzUlO1xuICBmb250LXNpemU6IDEzcHQ7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xufVxuXG4uaWNvbkNhcmQge1xuICBtYXJnaW4tYm90dG9tOiA4JTtcbn1cblxuLml0ZW0ge1xuICBtYXgtd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG4gIG1hcmdpbi10b3A6IDEwJTtcbn1cblxuLm5ld0NhcmQge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogMTE0JTtcbiAgZm9udC1zaXplOiBsYXJnZTtcbiAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICBtYXJnaW4tbGVmdDogMyU7XG59XG5cbi5pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcbiAgbWFyZ2luLXRvcDogMTAlO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCI7XG59XG5cbi5pY29uMiB7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbiAgd2lkdGg6IDEwJTtcbiAgbWFyZ2luLWJvdHRvbTogOCU7XG59Il19 */";

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