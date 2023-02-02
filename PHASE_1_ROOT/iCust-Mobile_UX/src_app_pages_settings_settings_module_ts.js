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

module.exports = ".switch {\n  position: relative;\n  display: inline-block;\n  width: 35px;\n  height: 20px;\n  margin-bottom: 0px;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 12px;\n  width: 12px;\n  left: 4px;\n  bottom: 4px;\n  background-color: #CCC;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background: rgb(1, 170, 39) !important;\n}\n\ninput:checked + .slider:before {\n  background-color: #FFF;\n}\n\ninput:focus + .slider {\n  box-shadow: none;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(15px);\n}\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n\n.help-box {\n  text-align: center;\n  margin-top: 60px;\n}\n\n.help-box .icon {\n  width: 40px;\n  margin: auto;\n  margin-bottom: 5px;\n}\n\n.help-box .name {\n  color: #231F20;\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmdzLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEdJVEhVQiUyMFJFUE9TSVRPUllfVUlcXGlDdXN0TW9iaWxlLXYyXFxzcmNcXGFwcFxccGFnZXNcXHNldHRpbmdzXFxzZXR0aW5ncy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esb0NBQUE7RUFFQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBRUEsZ0JBQUE7QUNDRjs7QURFQTtFQUNBLHNDQUFBO0FDQ0E7O0FEQ0E7RUFDQyxzQkFBQTtBQ0VEOztBRENBO0VBQ0UsZ0JBQUE7QUNFRjs7QURDQTtFQUdFLDJCQUFBO0FDRUY7O0FEQ0Esb0JBQUE7O0FBQ0E7RUFDRSxtQkFBQTtBQ0VGOztBRENBO0VBQ0Usa0JBQUE7QUNFRjs7QURBQTtFQUVBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNFQTs7QURBQTtFQUVHLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNFSDs7QURBQTtFQUVFLGNBQUE7RUFDQSxtQkFBQTtBQ0VGIiwiZmlsZSI6InNldHRpbmdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zd2l0Y2gge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgd2lkdGg6IDM1cHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206MHB4O1xyXG59XHJcblxyXG4uc3dpdGNoIGlucHV0IHsgXHJcbiAgb3BhY2l0eTogMDtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi5zbGlkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC41KTtcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICB0cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuXHJcbi5zbGlkZXI6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6IDEycHg7XHJcbiAgd2lkdGg6IDEycHg7XHJcbiAgbGVmdDogNHB4O1xyXG4gIGJvdHRvbTogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNDQ0M7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAuNHM7XHJcbiAgdHJhbnNpdGlvbjogLjRzO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlciB7XHJcbmJhY2tncm91bmQ6IHJnYigxLCAxNzAsIDM5KSAhaW1wb3J0YW50O1xyXG59XHJcbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XHJcbiBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyArIC5zbGlkZXIge1xyXG4gIGJveC1zaGFkb3c6bm9uZTtcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcclxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1cHgpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KTtcclxufVxyXG5cclxuLyogUm91bmRlZCBzbGlkZXJzICovXHJcbi5zbGlkZXIucm91bmQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDM0cHg7XHJcbn1cclxuXHJcbi5zbGlkZXIucm91bmQ6YmVmb3JlIHtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLmhlbHAtYm94XHJcbntcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbm1hcmdpbi10b3A6NjBweDtcclxufVxyXG4uaGVscC1ib3ggLmljb25cclxue1xyXG4gICB3aWR0aDo0MHB4O1xyXG4gICBtYXJnaW46YXV0bztcclxuICAgbWFyZ2luLWJvdHRvbTo1cHg7XHJcbn1cclxuLmhlbHAtYm94IC5uYW1lXHJcbntcclxuICBjb2xvcjojMjMxRjIwO1xyXG4gIG1hcmdpbi1ib3R0b206MTBweDtcclxufVxyXG4iLCIuc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLnN3aXRjaCBpbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59XG5cbi5zbGlkZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTJweDtcbiAgd2lkdGg6IDEycHg7XG4gIGxlZnQ6IDRweDtcbiAgYm90dG9tOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNDQ0M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kOiByZ2IoMSwgMTcwLCAzOSkgIWltcG9ydGFudDtcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbn1cblxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogbm9uZTtcbn1cblxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMTVweCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNXB4KTtcbn1cblxuLyogUm91bmRlZCBzbGlkZXJzICovXG4uc2xpZGVyLnJvdW5kIHtcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcbn1cblxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5oZWxwLWJveCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cblxuLmhlbHAtYm94IC5pY29uIHtcbiAgd2lkdGg6IDQwcHg7XG4gIG1hcmdpbjogYXV0bztcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uaGVscC1ib3ggLm5hbWUge1xuICBjb2xvcjogIzIzMUYyMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */";

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