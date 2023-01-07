"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_faceidrecognition_faceidrecognition_module_ts"],{

/***/ 34400:
/*!*****************************************************************************!*\
  !*** ./src/app/pages/faceidrecognition/faceidrecognition-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaceidrecognitionPageRoutingModule": () => (/* binding */ FaceidrecognitionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _faceidrecognition_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faceidrecognition.page */ 21110);




const routes = [
    {
        path: '',
        component: _faceidrecognition_page__WEBPACK_IMPORTED_MODULE_0__.FaceidrecognitionPage
    }
];
let FaceidrecognitionPageRoutingModule = class FaceidrecognitionPageRoutingModule {
};
FaceidrecognitionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FaceidrecognitionPageRoutingModule);



/***/ }),

/***/ 4051:
/*!*********************************************************************!*\
  !*** ./src/app/pages/faceidrecognition/faceidrecognition.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaceidrecognitionPageModule": () => (/* binding */ FaceidrecognitionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _faceidrecognition_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faceidrecognition-routing.module */ 34400);
/* harmony import */ var _faceidrecognition_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faceidrecognition.page */ 21110);







let FaceidrecognitionPageModule = class FaceidrecognitionPageModule {
};
FaceidrecognitionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _faceidrecognition_routing_module__WEBPACK_IMPORTED_MODULE_0__.FaceidrecognitionPageRoutingModule
        ],
        declarations: [_faceidrecognition_page__WEBPACK_IMPORTED_MODULE_1__.FaceidrecognitionPage]
    })
], FaceidrecognitionPageModule);



/***/ }),

/***/ 21110:
/*!*******************************************************************!*\
  !*** ./src/app/pages/faceidrecognition/faceidrecognition.page.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaceidrecognitionPage": () => (/* binding */ FaceidrecognitionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _faceidrecognition_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faceidrecognition.page.html?ngResource */ 59398);
/* harmony import */ var _faceidrecognition_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faceidrecognition.page.scss?ngResource */ 77225);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ 52468);






let FaceidrecognitionPage = class FaceidrecognitionPage {
    constructor(router, dataService) {
        this.router = router;
        this.dataService = dataService;
    }
    ngOnInit() {
        this.currentUser = this.dataService.getCurrentUser();
    }
    back() {
        this.router.navigateByUrl('/login-landing');
    }
};
FaceidrecognitionPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
FaceidrecognitionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-faceidrecognition',
        template: _faceidrecognition_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_faceidrecognition_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FaceidrecognitionPage);



/***/ }),

/***/ 77225:
/*!********************************************************************************!*\
  !*** ./src/app/pages/faceidrecognition/faceidrecognition.page.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "section {\n  position: relative;\n  padding: 10em;\n  background: url(\"/assets/images/Group_750.png\");\n  color: #fff;\n  text-align: center;\n  height: 100%;\n}\n\n.otp-text {\n  color: #A2A0A8;\n  width: 240%;\n  margin-left: -60%;\n}\n\n.logo-icon {\n  margin: 0 auto;\n  text-align: start;\n  width: 130px;\n  height: 130px;\n  margin-top: -40px;\n}\n\n.logo {\n  width: 150px;\n}\n\n.back-nav {\n  margin-top: -110px;\n  margin-left: -190% !important;\n  width: 60px;\n}\n\n.back-nav-color {\n  color: #000000 !important;\n  width: 290px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY2VpZHJlY29nbml0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUVBLCtDQUFBO0VBRUEsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQURKOztBQUdBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUFKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtBQUVKOztBQUNBO0VBQ0ksa0JBQUE7RUFDQSw2QkFBQTtFQUVBLFdBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6ImZhY2VpZHJlY29nbml0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInNlY3Rpb24ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTBlbTtcclxuICAgIC8vIGJhY2tncm91bmQ6ICNmNWY1ZjU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy9hc3NldHMvaW1hZ2VzL0dyb3VwXzc1MC5wbmcnKTtcclxuICAgIC8vIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5vdHAtdGV4dCB7XHJcbiAgICBjb2xvcjogI0EyQTBBODtcclxuICAgIHdpZHRoOiAyNDAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IC02MCU7XHJcbiAgfVxyXG4ubG9nby1pY29uIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgICB3aWR0aDogMTMwcHg7XHJcbiAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTQwcHg7XHJcbiAgfVxyXG4ubG9nbyB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAtMTUwcHg7XHJcbn1cclxuLmJhY2stbmF2IHtcclxuICAgIG1hcmdpbi10b3A6IC0xMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTkwJSAhaW1wb3J0YW50O1xyXG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gIH1cclxuICBcclxuICAuYmFjay1uYXYtY29sb3Ige1xyXG4gICAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxuICAgIHdpZHRoOiAyOTBweDtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiAtNjBweCAhaW1wb3J0YW50O1xyXG4gICAgLy8gd2lkdGg6IDIwMCU7XHJcbiAgfVxyXG4gICJdfQ== */";

/***/ }),

/***/ 59398:
/*!********************************************************************************!*\
  !*** ./src/app/pages/faceidrecognition/faceidrecognition.page.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <section>\r\n    <div class=\"back-nav\">\r\n      <ion-button fill=\"clear\" (click)=\"back()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" class=\"back-nav-color\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n\r\n    <div class=\"logo-icon\">\r\n      <div class=\"logo\"><img src=\"assets/images/Demobank.svg\" class=\"w-100\"></div>\r\n    </div>\r\n\r\n    <div>\r\n      <ion-text>\r\n        <h4 style=\"color: #000000;font-weight: bold;\">Face ID</h4>\r\n        <p class=\"otp-text\">{{ currentUser?.firstName }} {{ currentUser?.lastName }} logs into his bank account using his Face ID</p>\r\n      </ion-text>\r\n    </div>\r\n  </section>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_faceidrecognition_faceidrecognition_module_ts.js.map