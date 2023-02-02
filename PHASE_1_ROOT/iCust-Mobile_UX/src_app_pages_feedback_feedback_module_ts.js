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

module.exports = "* {\n  font-family: \"Montserrat\" !important;\n}\n\n.feedback_header {\n  margin-top: 7%;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n  padding-bottom: 3%;\n  font-weight: bold;\n}\n\n.text {\n  display: inline-block;\n  vertical-align: middle;\n  color: #3477c6;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-icon {\n  font-size: xx-large;\n  color: rgb(70, 111, 254);\n  display: inline-block;\n  vertical-align: middle;\n}\n\nion-content .content_div {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\nion-content .content_div .container_text {\n  font-size: 19px;\n  font-weight: 600;\n  text-align: center;\n  line-height: 1.5;\n  margin-top: 1.4rem;\n}\n\nion-content .content_div .emoji_rating {\n  display: flex;\n  justify-content: space-between;\n  margin: 1.5rem 0;\n}\n\nion-content .content_div .emoji_rating .ion_col {\n  position: relative;\n}\n\nion-content .content_div .emoji_rating ion-radio {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  opacity: 0;\n}\n\nion-content .content_div .emoji_rating ion-radio.radio-checked + .emoji_box {\n  background-color: #f8f8f8;\n  box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);\n  border: 2px solid #1e90ff;\n}\n\nion-content .content_div .emoji_rating .emoji_box {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 7px;\n  border-radius: 5px;\n}\n\nion-content .content_div .emoji_rating .emoji_box img {\n  height: 70px;\n}\n\nion-content .content_div .btn_group {\n  margin-top: auto;\n  margin-bottom: 1.4rem;\n}\n\nion-content .content_div .btn_group ion-button {\n  width: 100%;\n  height: 50px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-content .content_div .btn_group ion-button.skip_btn {\n  color: #000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlZWRiYWNrLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEdJVEhVQiUyMFJFUE9TSVRPUllfVUlcXGlDdXN0TW9iaWxlLXYyXFxzcmNcXGFwcFxccGFnZXNcXGZlZWRiYWNrXFxmZWVkYmFjay5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtBQ0NGOztBRENBO0VBQ0UsY0FBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7RUFFQSxpQkFBQTtBQ0NGOztBRENBO0VBQ0UscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUNFRjs7QURBQTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDR0Y7O0FEQ0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FDRUo7O0FEREk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNHTjs7QURESTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0FDR047O0FERk07RUFDRSxrQkFBQTtBQ0lSOztBREZNO0VBRUUsa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ0dSOztBREZRO0VBQ0UseUJBQUE7RUFDQSxzQ0FBQTtFQUNBLHlCQUFBO0FDSVY7O0FERE07RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ0dSOztBREZRO0VBQ0UsWUFBQTtBQ0lWOztBRENJO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtBQ0NOOztBREFNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQ0VSOztBRERRO0VBQ0UsV0FBQTtBQ0dWIiwiZmlsZSI6ImZlZWRiYWNrLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG59XHJcbi5mZWVkYmFja19oZWFkZXIge1xyXG4gIG1hcmdpbi10b3A6IDclO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNkM2QzZDM7XHJcbiAgcGFkZGluZy1ib3R0b206IDMlO1xyXG4gIC8vIHBhZGRpbmctdG9wOiA0JTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4udGV4dCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgY29sb3I6ICMzNDc3YzY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1pY29uIHtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIGNvbG9yOiByZ2IoNzAsIDExMSwgMjU0KTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gIC5jb250ZW50X2RpdiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC5jb250YWluZXJfdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxLjRyZW07XHJcbiAgICB9XHJcbiAgICAuZW1vamlfcmF0aW5nIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBtYXJnaW46IDEuNXJlbSAwO1xyXG4gICAgICAuaW9uX2NvbCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICB9XHJcbiAgICAgIGlvbi1yYWRpbyB7XHJcbiAgICAgICAgLy8gZGlzcGxheTogbm9uZTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgJi5yYWRpby1jaGVja2VkICsgLmVtb2ppX2JveCB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAwIDdweCByZ2JhKDAsMCwwLDAuMSk7XHJcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjMWU5MGZmO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZW1vamlfYm94IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgICAvLyB3aWR0aDogNDBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5idG5fZ3JvdXAge1xyXG4gICAgICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjRyZW07XHJcbiAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxuICAgICAgICAmLnNraXBfYnRuIHtcclxuICAgICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuIiwiKiB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xufVxuXG4uZmVlZGJhY2tfaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogNyU7XG4gIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNkM2QzZDM7XG4gIHBhZGRpbmctYm90dG9tOiAzJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50ZXh0IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjb2xvcjogIzM0NzdjNjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcbn1cblxuaW9uLWljb24ge1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICBjb2xvcjogcmdiKDcwLCAxMTEsIDI1NCk7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuaW9uLWNvbnRlbnQgLmNvbnRlbnRfZGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuaW9uLWNvbnRlbnQgLmNvbnRlbnRfZGl2IC5jb250YWluZXJfdGV4dCB7XG4gIGZvbnQtc2l6ZTogMTlweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBtYXJnaW4tdG9wOiAxLjRyZW07XG59XG5pb24tY29udGVudCAuY29udGVudF9kaXYgLmVtb2ppX3JhdGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiAxLjVyZW0gMDtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50X2RpdiAuZW1vamlfcmF0aW5nIC5pb25fY29sIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuaW9uLWNvbnRlbnQgLmNvbnRlbnRfZGl2IC5lbW9qaV9yYXRpbmcgaW9uLXJhZGlvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIG9wYWNpdHk6IDA7XG59XG5pb24tY29udGVudCAuY29udGVudF9kaXYgLmVtb2ppX3JhdGluZyBpb24tcmFkaW8ucmFkaW8tY2hlY2tlZCArIC5lbW9qaV9ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOGY4O1xuICBib3gtc2hhZG93OiAwIDAgN3B4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYm9yZGVyOiAycHggc29saWQgIzFlOTBmZjtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50X2RpdiAuZW1vamlfcmF0aW5nIC5lbW9qaV9ib3gge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nOiA3cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cbmlvbi1jb250ZW50IC5jb250ZW50X2RpdiAuZW1vamlfcmF0aW5nIC5lbW9qaV9ib3ggaW1nIHtcbiAgaGVpZ2h0OiA3MHB4O1xufVxuaW9uLWNvbnRlbnQgLmNvbnRlbnRfZGl2IC5idG5fZ3JvdXAge1xuICBtYXJnaW4tdG9wOiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxLjRyZW07XG59XG5pb24tY29udGVudCAuY29udGVudF9kaXYgLmJ0bl9ncm91cCBpb24tYnV0dG9uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAuY29udGVudF9kaXYgLmJ0bl9ncm91cCBpb24tYnV0dG9uLnNraXBfYnRuIHtcbiAgY29sb3I6ICMwMDA7XG59Il19 */";

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