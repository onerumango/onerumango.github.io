"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_success-message_success-message_module_ts"],{

/***/ 18170:
/*!*************************************************************************!*\
  !*** ./src/app/pages/success-message/success-message-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuccessMessagePageRoutingModule": () => (/* binding */ SuccessMessagePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _success_message_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./success-message.page */ 37749);




const routes = [
    {
        path: '',
        component: _success_message_page__WEBPACK_IMPORTED_MODULE_0__.SuccessMessagePage
    }
];
let SuccessMessagePageRoutingModule = class SuccessMessagePageRoutingModule {
};
SuccessMessagePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SuccessMessagePageRoutingModule);



/***/ }),

/***/ 81178:
/*!*****************************************************************!*\
  !*** ./src/app/pages/success-message/success-message.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuccessMessagePageModule": () => (/* binding */ SuccessMessagePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _success_message_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./success-message-routing.module */ 18170);
/* harmony import */ var _success_message_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./success-message.page */ 37749);







let SuccessMessagePageModule = class SuccessMessagePageModule {
};
SuccessMessagePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _success_message_routing_module__WEBPACK_IMPORTED_MODULE_0__.SuccessMessagePageRoutingModule
        ],
        declarations: [_success_message_page__WEBPACK_IMPORTED_MODULE_1__.SuccessMessagePage]
    })
], SuccessMessagePageModule);



/***/ }),

/***/ 37749:
/*!***************************************************************!*\
  !*** ./src/app/pages/success-message/success-message.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SuccessMessagePage": () => (/* binding */ SuccessMessagePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _success_message_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./success-message.page.html?ngResource */ 37480);
/* harmony import */ var _success_message_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./success-message.page.scss?ngResource */ 90994);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);






let SuccessMessagePage = class SuccessMessagePage {
    constructor(api, router) {
        this.api = api;
        this.router = router;
    }
    ngOnInit() {
        this.navSubscription = this.api.getNavParam.subscribe((data) => (this.screenNames = data));
        console.log(this.screenNames);
        this.title = this.screenNames.queryParams.screenDetails;
        this.description = this.screenNames.queryParams.screenDescription;
    }
    goBack() {
        if (this, this.screenNames.queryParams.screenName == "setmpin") {
            this.router.navigateByUrl('/mpin');
        }
        else {
            this.router.navigate(['securitycenter']);
        }
    }
};
SuccessMessagePage.ctorParameters = () => [
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
SuccessMessagePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-success-message',
        template: _success_message_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_success_message_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SuccessMessagePage);



/***/ }),

/***/ 90994:
/*!****************************************************************************!*\
  !*** ./src/app/pages/success-message/success-message.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = ".otp-text {\n  color: #A2A0A8;\n}\n\n.otp-box {\n  margin-top: 60%;\n}\n\n.inputCardButton {\n  padding-top: 70%;\n  padding-left: 5%;\n  padding-right: 5%;\n}\n\n.inputCardButton ion-button {\n  width: 100%;\n  height: 45px;\n  --background: var(--primary-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN1Y2Nlc3MtbWVzc2FnZS5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxHaXRIdWIlMjBSZXBvc2l0b3J5JTIwb2xkXFxpQ3VzdE1vYmlsZS12Mlxcc3JjXFxhcHBcXHBhZ2VzXFxzdWNjZXNzLW1lc3NhZ2VcXHN1Y2Nlc3MtbWVzc2FnZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0FDQ0o7O0FEQ0U7RUFDRSxlQUFBO0FDRUo7O0FEQUU7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUNHSjs7QURESTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0NBQUE7QUNHTiIsImZpbGUiOiJzdWNjZXNzLW1lc3NhZ2UucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm90cC10ZXh0IHtcclxuICAgIGNvbG9yOiAjQTJBMEE4O1xyXG4gIH1cclxuICAub3RwLWJveHtcclxuICAgIG1hcmdpbi10b3A6IDYwJTtcclxuICB9XHJcbiAgLmlucHV0Q2FyZEJ1dHRvbiB7XHJcbiAgICBwYWRkaW5nLXRvcDogNzAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG5cclxuICAgIGlvbi1idXR0b24ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgfVxyXG4gIH0iLCIub3RwLXRleHQge1xuICBjb2xvcjogI0EyQTBBODtcbn1cblxuLm90cC1ib3gge1xuICBtYXJnaW4tdG9wOiA2MCU7XG59XG5cbi5pbnB1dENhcmRCdXR0b24ge1xuICBwYWRkaW5nLXRvcDogNzAlO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbn1cbi5pbnB1dENhcmRCdXR0b24gaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDQ1cHg7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1jb2xvcik7XG59Il19 */";

/***/ }),

/***/ 37480:
/*!****************************************************************************!*\
  !*** ./src/app/pages/success-message/success-message.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<!-- <ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>successMessage</ion-title>\r\n  </ion-toolbar>\r\n</ion-header> -->\r\n\r\n<ion-content>\r\n  <div class=\"otp-box text-center\">\r\n    <img src=\"assets/images/success.png\" alt=\"success logo\">\r\n    <ion-text>\r\n      <h4 style=\"font-weight: bold\">{{title}}</h4>\r\n      <p class=\"otp-text\">{{description}}</p>\r\n      <!-- <h6>{{customerPhonenum}}</h6> -->\r\n    </ion-text>\r\n  </div>\r\n  <div class=\"inputCardButton\">\r\n    <ion-button\r\n      expand=\"block\"\r\n      shape=\"round\"\r\n      (click)=\"goBack()\"\r\n     \r\n      >Back</ion-button\r\n    >\r\n  </div>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_success-message_success-message_module_ts.js.map