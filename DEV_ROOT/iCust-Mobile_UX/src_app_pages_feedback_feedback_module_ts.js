"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_feedback_feedback_module_ts"],{

/***/ 34:
/*!***********************************************************!*\
  !*** ./src/app/pages/feedback/feedback-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedbackPageRoutingModule": () => (/* binding */ FeedbackPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _feedback_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback.page */ 41106);




const routes = [
    {
        path: '',
        component: _feedback_page__WEBPACK_IMPORTED_MODULE_0__.FeedbackPage
    }
];
let FeedbackPageRoutingModule = class FeedbackPageRoutingModule {
};
FeedbackPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FeedbackPageRoutingModule);



/***/ }),

/***/ 97792:
/*!***************************************************!*\
  !*** ./src/app/pages/feedback/feedback.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedbackPageModule": () => (/* binding */ FeedbackPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _feedback_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback-routing.module */ 34);
/* harmony import */ var _feedback_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedback.page */ 41106);







let FeedbackPageModule = class FeedbackPageModule {
};
FeedbackPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _feedback_routing_module__WEBPACK_IMPORTED_MODULE_0__.FeedbackPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_feedback_page__WEBPACK_IMPORTED_MODULE_1__.FeedbackPage]
    })
], FeedbackPageModule);



/***/ }),

/***/ 41106:
/*!*************************************************!*\
  !*** ./src/app/pages/feedback/feedback.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FeedbackPage": () => (/* binding */ FeedbackPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _feedback_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./feedback.page.html?ngResource */ 53880);
/* harmony import */ var _feedback_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedback.page.scss?ngResource */ 13987);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);









let FeedbackPage = class FeedbackPage {
    constructor(router, location, api, toastCtrl) {
        this.router = router;
        this.location = location;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.rating = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl();
        this.message = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl();
    }
    ngOnInit() {
        if (this.router.getCurrentNavigation() != null) {
            this.routerData = this.router.getCurrentNavigation().extras.state;
        }
    }
    onSubmit() {
        const feedback = {
            customerId: localStorage.getItem('customer_id') || '',
            feedback: this.rating.value,
            suggestion: this.message.value
        };
        // console.log(feedback);
        this.api.storeFeedbackInfo(feedback).subscribe(resp => {
            console.log(resp);
            this.onSkip();
        }, err => {
            console.log('ERROR: ', err);
            this.openToast('unable to save feedback');
        });
    }
    onSkip() {
        var _a;
        if ((_a = this.routerData) === null || _a === void 0 ? void 0 : _a.goBack) {
            this.location.back();
        }
        else {
            // NO NEED TO CLEAR THE SESSION AS PER THE DISCUSSION
            // localStorage.clear();
            // sessionStorage.clear();
            this.router.navigate(['login-landing'], { replaceUrl: true });
        }
    }
    previous1() {
        this.router.navigate(['profile']);
    }
    openToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: `${message}`,
                duration: 2500,
                position: 'bottom',
            });
            toast.present();
        });
    }
};
FeedbackPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_6__.Location },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController }
];
FeedbackPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
        selector: 'app-feedback',
        template: _feedback_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_feedback_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FeedbackPage);



/***/ }),

/***/ 13987:
/*!**************************************************************!*\
  !*** ./src/app/pages/feedback/feedback.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "* {\n  font-family: \"Montserrat\" !important;\n}\n\n.feedback_header {\n  margin-top: 7%;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n  padding-bottom: 3%;\n  font-weight: bold;\n}\n\n.text {\n  display: inline-block;\n  vertical-align: middle;\n  color: #3477c6;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-icon {\n  font-size: xx-large;\n  color: rgb(70, 111, 254);\n  display: inline-block;\n  vertical-align: middle;\n}\n\nion-content .content_div {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\nion-content .content_div .container_text {\n  font-size: 19px;\n  font-weight: 600;\n  text-align: center;\n  line-height: 1.5;\n  margin-top: 1.4rem;\n}\n\nion-content .content_div .emoji_rating {\n  display: flex;\n  justify-content: space-between;\n  margin: 1.5rem 0;\n}\n\nion-content .content_div .emoji_rating .ion_col {\n  position: relative;\n}\n\nion-content .content_div .emoji_rating ion-radio {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n}\n\nion-content .content_div .emoji_rating ion-radio.radio-checked + .emoji_box {\n  background-color: #f8f8f8;\n  box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);\n  border: 2px solid #1e90ff;\n}\n\nion-content .content_div .emoji_rating .emoji_box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 7px;\n  border-radius: 5px;\n}\n\nion-content .content_div .emoji_rating .emoji_box img {\n  height: 70px;\n}\n\nion-content .content_div .btn_group {\n  margin-top: auto;\n  margin-bottom: 1.4rem;\n}\n\nion-content .content_div .btn_group ion-button {\n  width: 100%;\n  height: 50px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-content .content_div .btn_group ion-button.skip_btn {\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlZWRiYWNrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9DQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxrQkFBQTtFQUVBLGlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQUVGOztBQUFBO0VBQ0UsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFHRjs7QUFDRTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFFSjs7QUFESTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQUdOOztBQURJO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZ0JBQUE7QUFHTjs7QUFGTTtFQUNFLGtCQUFBO0FBSVI7O0FBRk07RUFFRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBR1I7O0FBRlE7RUFDRSx5QkFBQTtFQUNBLHNDQUFBO0VBQ0EseUJBQUE7QUFJVjs7QUFETTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBR1I7O0FBRlE7RUFDRSxZQUFBO0FBSVY7O0FBQ0k7RUFDRSxnQkFBQTtFQUNBLHFCQUFBO0FBQ047O0FBQU07RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FBRVI7O0FBRFE7RUFDRSxXQUFBO0FBR1YiLCJmaWxlIjoiZmVlZGJhY2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZlZWRiYWNrX2hlYWRlciB7XHJcbiAgbWFyZ2luLXRvcDogNyU7XHJcbiAgYm94LXNoYWRvdzogMCA1cHQgNXB0IC0ycHQgI2QzZDNkMztcclxuICBwYWRkaW5nLWJvdHRvbTogMyU7XHJcbiAgLy8gcGFkZGluZy10b3A6IDQlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi50ZXh0IHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBjb2xvcjogIzM0NzdjNjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgY29sb3I6IHJnYig3MCwgMTExLCAyNTQpO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgLmNvbnRlbnRfZGl2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgLmNvbnRhaW5lcl90ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAxOXB4O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEuNHJlbTtcclxuICAgIH1cclxuICAgIC5lbW9qaV9yYXRpbmcge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIG1hcmdpbjogMS41cmVtIDA7XHJcbiAgICAgIC5pb25fY29sIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIH1cclxuICAgICAgaW9uLXJhZGlvIHtcclxuICAgICAgICAvLyBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgICAmLnJhZGlvLWNoZWNrZWQgKyAuZW1vamlfYm94IHtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY4Zjg7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDAgN3B4IHJnYmEoMCwwLDAsMC4xKTtcclxuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMxZTkwZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5lbW9qaV9ib3gge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgIC8vIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmJ0bl9ncm91cCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEuNHJlbTtcclxuICAgICAgaW9uLWJ1dHRvbiB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gICAgICAgICYuc2tpcF9idG4ge1xyXG4gICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */";

/***/ }),

/***/ 53880:
/*!**************************************************************!*\
  !*** ./src/app/pages/feedback/feedback.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\" *ngIf=\"routerData?.goBack\">\r\n      <ion-button (click)=\"previous1()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\"></ion-icon>\r\n      </ion-button>\r\n    </ion-buttons>\r\n    <ion-title>Feedback</ion-title>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"container content_div\">\r\n    <h4 class=\"container_text\">Thank you for choosing DemoBank for your banking needs</h4>\r\n    <ion-radio-group [formControl]=\"rating\" ngDefaultControl>\r\n      <div class=\"emoji_rating\">\r\n        <div class=\"ion_col\">\r\n          <ion-radio mode=\"ios\" item-left value=\"1\"></ion-radio>\r\n          <ion-label class=\"emoji_box\">\r\n            <img src=\"assets/icon/emoji/excellent.svg\" alt=\"\">\r\n          </ion-label>\r\n        </div>\r\n        <div class=\"ion_col\">\r\n          <ion-radio mode=\"ios\" item-left value=\"2\"></ion-radio>\r\n          <ion-label class=\"emoji_box\">\r\n            <img src=\"assets/icon/emoji/good.svg\" alt=\"\">\r\n          </ion-label>\r\n        </div>\r\n        <div class=\"ion_col\">\r\n          <ion-radio mode=\"ios\" item-left value=\"3\"></ion-radio>\r\n          <ion-label class=\"emoji_box\">\r\n            <img src=\"assets/icon/emoji/average.svg\" alt=\"\">\r\n          </ion-label>\r\n        </div>\r\n        <div class=\"ion_col\">\r\n          <ion-radio mode=\"ios\" item-left value=\"4\"></ion-radio>\r\n          <ion-label class=\"emoji_box\">\r\n            <img src=\"assets/icon/emoji/poor.svg\" alt=\"\">\r\n          </ion-label>\r\n        </div>\r\n        <div class=\"ion_col\">\r\n          <ion-radio mode=\"ios\" item-left value=\"5\"></ion-radio>\r\n          <ion-label class=\"emoji_box\">\r\n            <img src=\"assets/icon/emoji/very-poor.svg\" alt=\"\">\r\n          </ion-label>\r\n        </div>\r\n      </div>\r\n    </ion-radio-group>\r\n    <ion-item fill=\"outline\">\r\n      <ion-label position=\"floating\" class=\"t-20\">Feedback</ion-label>\r\n      <ion-textarea autoGrow=\"true\" [formControl]=\"message\" rows=\"5\"></ion-textarea>\r\n    </ion-item>\r\n    <div class=\"ion-padding-top btn_group\">\r\n      <div>\r\n        <ion-button expand=\"block\" shape=\"round\" [disabled]=\"!rating.value\" (click)=\"onSubmit()\">Submit</ion-button>\r\n      </div>\r\n      <div>\r\n        <ion-button class=\"skip_btn\" expand=\"block\" shape=\"round\" fill=\"clear\" (click)=\"onSkip()\">Skip</ion-button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_feedback_feedback_module_ts.js.map