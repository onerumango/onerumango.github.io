"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_settings_settings_module_ts"],{

/***/ 82760:
/*!***********************************************************!*\
  !*** ./src/app/pages/settings/settings-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageRoutingModule": () => (/* binding */ SettingsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page */ 41902);




const routes = [
    {
        path: '',
        component: _settings_page__WEBPACK_IMPORTED_MODULE_0__.SettingsPage
    }
];
let SettingsPageRoutingModule = class SettingsPageRoutingModule {
};
SettingsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SettingsPageRoutingModule);



/***/ }),

/***/ 7850:
/*!***************************************************!*\
  !*** ./src/app/pages/settings/settings.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPageModule": () => (/* binding */ SettingsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings-routing.module */ 82760);
/* harmony import */ var _settings_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page */ 41902);







let SettingsPageModule = class SettingsPageModule {
};
SettingsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _settings_routing_module__WEBPACK_IMPORTED_MODULE_0__.SettingsPageRoutingModule
        ],
        declarations: [_settings_page__WEBPACK_IMPORTED_MODULE_1__.SettingsPage]
    })
], SettingsPageModule);



/***/ }),

/***/ 41902:
/*!*************************************************!*\
  !*** ./src/app/pages/settings/settings.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SettingsPage": () => (/* binding */ SettingsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.page.html?ngResource */ 30869);
/* harmony import */ var _settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./settings.page.scss?ngResource */ 60297);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let SettingsPage = class SettingsPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    notificationsPage() {
        this.router.navigate(['notifications']);
    }
    changepasswordPage() {
        this.router.navigate(['changepassword']);
    }
    faqsPage() {
        this.router.navigate(['faqs']);
    }
    feedbackPage() {
        this.router.navigate(['feedback']);
    }
    dashboardPage() {
        this.router.navigate(['profile']);
    }
    profilePage() {
        this.router.navigate(['profile']);
    }
};
SettingsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
SettingsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-settings',
        template: _settings_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_settings_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SettingsPage);



/***/ }),

/***/ 60297:
/*!**************************************************************!*\
  !*** ./src/app/pages/settings/settings.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".switch {\n  position: relative;\n  display: inline-block;\n  width: 35px;\n  height: 20px;\n  margin-bottom: 0px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 12px;\n  width: 12px;\n  left: 4px;\n  bottom: 4px;\n  background-color: #CCC;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background: rgb(1, 170, 39) !important;\n}\n\ninput:checked + .slider:before {\n  background-color: #FFF;\n}\n\ninput:focus + .slider {\n  box-shadow: none;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(15px);\n}\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.help-box {\n  text-align: center;\n  margin-top: 60px;\n}\n\n.help-box .icon {\n  width: 40px;\n  margin: auto;\n  margin-bottom: 5px;\n}\n\n.help-box .name {\n  color: #231F20;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxvQ0FBQTtFQUVBLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFFQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0Esc0NBQUE7QUFDQTs7QUFDQTtFQUNDLHNCQUFBO0FBRUQ7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGOztBQUNBO0VBR0UsMkJBQUE7QUFFRjs7QUFDQSxvQkFBQTs7QUFDQTtFQUNFLG1CQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtBQUVGOztBQUFBO0VBRUEsa0JBQUE7RUFDQSxnQkFBQTtBQUVBOztBQUFBO0VBRUcsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUVIOztBQUFBO0VBRUUsY0FBQTtFQUNBLG1CQUFBO0FBRUYiLCJmaWxlIjoic2V0dGluZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN3aXRjaCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogMzVweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTowcHg7XHJcbn1cclxuXHJcbi5zd2l0Y2ggaW5wdXQgeyBcclxuICBvcGFjaXR5OiAwO1xyXG4gIHdpZHRoOiAwO1xyXG4gIGhlaWdodDogMDtcclxufVxyXG5cclxuLnNsaWRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gIHRyYW5zaXRpb246IC40cztcclxufVxyXG5cclxuLnNsaWRlcjpiZWZvcmUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGhlaWdodDogMTJweDtcclxuICB3aWR0aDogMTJweDtcclxuICBsZWZ0OiA0cHg7XHJcbiAgYm90dG9tOiA0cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NDQztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICB0cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuXHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcclxuYmFja2dyb3VuZDogcmdiKDEsIDE3MCwgMzkpICFpbXBvcnRhbnQ7XHJcbn1cclxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcclxuIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XHJcbiAgYm94LXNoYWRvdzpub25lO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1cHgpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1cHgpO1xyXG59XHJcblxyXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cclxuLnNsaWRlci5yb3VuZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcclxufVxyXG5cclxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uaGVscC1ib3hcclxue1xyXG50ZXh0LWFsaWduOmNlbnRlcjtcclxubWFyZ2luLXRvcDo2MHB4O1xyXG59XHJcbi5oZWxwLWJveCAuaWNvblxyXG57XHJcbiAgIHdpZHRoOjQwcHg7XHJcbiAgIG1hcmdpbjphdXRvO1xyXG4gICBtYXJnaW4tYm90dG9tOjVweDtcclxufVxyXG4uaGVscC1ib3ggLm5hbWVcclxue1xyXG4gIGNvbG9yOiMyMzFGMjA7XHJcbiAgbWFyZ2luLWJvdHRvbToxMHB4O1xyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 30869:
/*!**************************************************************!*\
  !*** ./src/app/pages/settings/settings.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<app-sidebar></app-sidebar>\r\n<ion-content class=\"mainbackground\">\r\n  <div class=\"container\">\r\n    <div class=\"header\">\r\n      <div class=\"row\">\r\n        <div class=\"col-8\">\r\n          <div class=\"title\"><a (click)=\"profilePage()\" class=\"back-btn\"><i class=\"fas fa-angle-left\"></i></a>\r\n            Settings</div>\r\n        </div>\r\n        <div class=\"col-4 text-right\"><a class=\"pulse-animation notification-btn\" (click)=\"notificationsPage()\"><i\r\n              class=\"far fa-bell\"></i></a>\r\n          <div class=\"profile-pic\" (click)=\"profilePage()\"><img src=\"assets/images/user-profile.jpg\"\r\n              class=\"width-100\" /></div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"body\">\r\n      <div class=\"settings\">\r\n        <div class=\"box\">\r\n          <div class=\"float-left\"><span class=\"label\">Language</span></div>\r\n          <div class=\"float-right\"><span class=\"value\"><span class=\"text-success\">EN</span> <i\r\n                class=\"fas fa-angle-right\"></i></span></div>\r\n        </div>\r\n        <div class=\"box\" (click)=\"changepasswordPage()\">\r\n          <div class=\"float-left\"><span class=\"label\">Change password</span></div>\r\n          <div class=\"float-right\"><span class=\"value\" (click)=\"changepasswordPage()\"><i\r\n                class=\"fas fa-angle-right\"></i></span></div>\r\n        </div>\r\n        <div class=\"box\" (click)=\"faqsPage()\">\r\n          <div class=\"float-left\"><span class=\"label\">FAQs</span></div>\r\n          <div class=\"float-right\"><span class=\"value\" (click)=\"faqsPage()\"><i class=\"fas fa-angle-right\"></i></span>\r\n          </div>\r\n        </div>\r\n        <div class=\"box\">\r\n          <div class=\"float-left\"><span class=\"label\">Night Mode</span></div>\r\n          <div class=\"float-right\"><label class=\"switch\">\r\n              <input type=\"checkbox\" checked>\r\n              <span class=\"slider round\"></span>\r\n            </label></div>\r\n        </div>\r\n        <div class=\"box\">\r\n          <div class=\"float-left\"><span class=\"label\">Fingerprint login</span></div>\r\n          <div class=\"float-right\"><label class=\"switch\">\r\n              <input type=\"checkbox\">\r\n              <span class=\"slider round\"></span>\r\n            </label></div>\r\n        </div>\r\n        <div class=\"box\" (click)=\"feedbackPage()\">\r\n          <div class=\"float-left\"><span class=\"label\">Give feedback</span></div>\r\n          <div class=\"float-right\"><span class=\"value\" (click)=\"feedbackPage()\"><i\r\n                class=\"fas fa-angle-right\"></i></span></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"help-box\">\r\n        <div class=\"icon\"><img src=\"assets/images/help.svg\" class=\"w-100\" /></div>\r\n        <div class=\"name\">Help & Supports</div>\r\n        <a class=\"theme btn btn-primary\">Logout</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_settings_settings_module_ts.js.map