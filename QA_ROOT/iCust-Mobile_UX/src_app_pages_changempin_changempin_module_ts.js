"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_changempin_changempin_module_ts"],{

/***/ 39219:
/*!***************************************************************!*\
  !*** ./src/app/pages/changempin/changempin-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangempinPageRoutingModule": () => (/* binding */ ChangempinPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _changempin_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changempin.page */ 39358);




const routes = [
    {
        path: '',
        component: _changempin_page__WEBPACK_IMPORTED_MODULE_0__.ChangempinPage
    }
];
let ChangempinPageRoutingModule = class ChangempinPageRoutingModule {
};
ChangempinPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ChangempinPageRoutingModule);



/***/ }),

/***/ 23040:
/*!*******************************************************!*\
  !*** ./src/app/pages/changempin/changempin.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangempinPageModule": () => (/* binding */ ChangempinPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _changempin_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changempin-routing.module */ 39219);
/* harmony import */ var _changempin_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changempin.page */ 39358);
/* harmony import */ var ng_otp_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-otp-input */ 2981);








let ChangempinPageModule = class ChangempinPageModule {
};
ChangempinPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _changempin_routing_module__WEBPACK_IMPORTED_MODULE_0__.ChangempinPageRoutingModule,
            ng_otp_input__WEBPACK_IMPORTED_MODULE_7__.NgOtpInputModule
        ],
        declarations: [_changempin_page__WEBPACK_IMPORTED_MODULE_1__.ChangempinPage]
    })
], ChangempinPageModule);



/***/ }),

/***/ 39358:
/*!*****************************************************!*\
  !*** ./src/app/pages/changempin/changempin.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ChangempinPage": () => (/* binding */ ChangempinPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _changempin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changempin.page.html?ngResource */ 9856);
/* harmony import */ var _changempin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changempin.page.scss?ngResource */ 73323);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _setmpin_setmpin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../setmpin/setmpin.page */ 76088);
/* harmony import */ var src_app_services_device_access_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/device-access.service */ 34910);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data.service */ 52468);











let ChangempinPage = class ChangempinPage {
    constructor(router, toastCtrl, api, device, dataService) {
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.api = api;
        this.device = device;
        this.dataService = dataService;
        this.currentmpin = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('');
        this.setnewmpin = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('');
        this.confirmnewmpin = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('');
        this.mpinobj = new _setmpin_setmpin_page__WEBPACK_IMPORTED_MODULE_3__.mpinObjects();
        this.config = {
            allowNumbersOnly: true,
            length: 4,
            isPasswordInput: false,
            disableAutoFocus: false,
            placeholder: '*',
            inputStyles: {
                'width': '40px',
                'height': '40px'
            }
        };
    }
    ngOnInit() {
        this.customerPhonenum = localStorage.getItem('customerPhonenum');
    }
    changePin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.currentmpin.value || !this.setnewmpin.value || !this.confirmnewmpin) {
                this.openToast('Fill all mPin fields');
                return;
            }
            if (this.setnewmpin.value !== this.confirmnewmpin.value) {
                this.openToast("New and confirm mPin didn't match");
                return;
            }
            if (this.currentmpin.value == this.setnewmpin.value) {
                this.openToast("New mPin must be different from previous");
                return;
            }
            const deviceId = yield this.device.getDeviceId();
            this.mpinobj.phoneNumber = this.customerPhonenum;
            this.mpinobj.mpin = this.setnewmpin.value;
            this.mpinobj.currentMpin = this.currentmpin.value;
            this.mpinobj.deviceId = deviceId;
            this.api
                .changeMpin(this.mpinobj)
                .subscribe((res) => {
                if (res.status == 200) {
                    console.log("data");
                    localStorage.setItem('customer_details', JSON.stringify(res.data));
                    this.dataService.isLoggedIn.next(true);
                    const navigationExtras = {
                        queryParams: {
                            'screenDetails': 'mPIN Password Changed!',
                            'screenDescription': 'Your mPIN password has been changed successfully',
                            'screenName': 'changempin'
                        },
                    };
                    this.api.sendNavParam(navigationExtras);
                    this.router.navigateByUrl('/success-message');
                }
                else {
                    this.openToast(res.message);
                }
            });
        });
    }
    goToSecuritycenter() {
        this.router.navigate(['securitycenter']);
    }
    openToast(errorMessage) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: `${errorMessage}`,
                duration: 2500,
                position: 'bottom',
            });
            toast.present();
        });
    }
};
ChangempinPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_device_access_service__WEBPACK_IMPORTED_MODULE_4__.DeviceAccess },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__.DataService }
];
ChangempinPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-changempin',
        template: _changempin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_changempin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ChangempinPage);



/***/ }),

/***/ 73323:
/*!******************************************************************!*\
  !*** ./src/app/pages/changempin/changempin.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "* {\n  font-family: \"Montserrat\" !important;\n  /* Add !important to overwrite all elements */\n}\n\n.forex_header {\n  padding-top: 4%;\n  padding-bottom: 3%;\n  font-weight: bold;\n}\n\n.text {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n  opacity: 70%;\n  color: #102245;\n}\n\n.backarrow {\n  font-size: x-large;\n  display: inline-block;\n  vertical-align: middle;\n  opacity: 100%;\n  margin-left: 2%;\n  color: #102245;\n}\n\nion-toolbar {\n  margin-top: 5%;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n}\n\n.new-background-color {\n  --background: #ecf3f2;\n  height: 108.5px;\n  display: inline-block;\n  vertical-align: middle;\n  color: #54627a;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n  display: flex;\n  align-items: center;\n}\n\n.new-background-color span.text {\n  font-weight: bold;\n  margin-left: 2%;\n}\n\n.currentmpin-text {\n  font-size: 20px;\n  color: #B1B1B1;\n  padding-left: 24px;\n  padding-top: 15px;\n  padding-bottom: 5px;\n}\n\n.pb-10 {\n  padding-bottom: 10px;\n}\n\n.continue-button {\n  padding-top: 83%;\n  padding-left: 5%;\n  padding-right: 5%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZW1waW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7RUFDQSw2Q0FBQTtBQUNKOztBQUNBO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFFSjs7QUFBRTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7QUFHSjs7QUFBQTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUdKOztBQURBO0VBQ0ksY0FBQTtFQUNBLGtDQUFBO0FBSUo7O0FBRkU7RUFDRSxxQkFBQTtFQUNBLGVBQUE7RUFFQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUlKOztBQUhJO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FBS047O0FBRkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQUtKOztBQUhBO0VBQ0ksb0JBQUE7QUFNSjs7QUFKQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUFPRiIsImZpbGUiOiJjaGFuZ2VtcGluLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbiAgICAvKiBBZGQgIWltcG9ydGFudCB0byBvdmVyd3JpdGUgYWxsIGVsZW1lbnRzICovXHJcbiAgfVxyXG4uZm9yZXhfaGVhZGVyIHtcclxuICAgIHBhZGRpbmctdG9wOiA0JTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAzJTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuICAudGV4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiA3MCU7XHJcbiAgICBjb2xvcjogIzEwMjI0NVxyXG4gIH1cclxuICBcclxuLmJhY2thcnJvdyB7XHJcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgb3BhY2l0eTogMTAwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIGNvbG9yOiAjMTAyMjQ1O1xyXG4gIH1cclxuaW9uLXRvb2xiYXIge1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBib3gtc2hhZG93OiAwIDVwdCA1cHQgLTJwdCAjZDNkM2QzO1xyXG4gIH1cclxuICAubmV3LWJhY2tncm91bmQtY29sb3Ige1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZWNmM2YyO1xyXG4gICAgaGVpZ2h0OiAxMDguNXB4O1xyXG4gICAgLy8gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIGNvbG9yOiAjNTQ2MjdhO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHNwYW4udGV4dCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICB9XHJcbiAgfVxyXG4uY3VycmVudG1waW4tdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBjb2xvcjogI0IxQjFCMTtcclxuICAgIHBhZGRpbmctbGVmdDogMjRweDtcclxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG4ucGItMTAge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuLmNvbnRpbnVlLWJ1dHRvbiB7XHJcbiAgcGFkZGluZy10b3A6IDgzJTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDUlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59Il19 */";

/***/ }),

/***/ 9856:
/*!******************************************************************!*\
  !*** ./src/app/pages/changempin/changempin.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"forex_header\">\r\n    <ion-icon class= \"backarrow\" name=\"chevron-back-outline\" (click)=\"goToSecuritycenter()\"></ion-icon>\r\n    <span class=\"text\">Change mPIN</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n<form>\r\n  <div class=\"currentmpin-text\">\r\n    <h5 class=\"pb-10\">Current mPIN</h5>\r\n    <ng-otp-input [formCtrl]=\"currentmpin\" class=\"text-center p-10\" [config]=\"config\"></ng-otp-input>\r\n  </div>\r\n  <div class=\"currentmpin-text\">\r\n    <h5 class=\"pb-10\">Set new mPIN</h5>\r\n    <ng-otp-input [formCtrl]=\"setnewmpin\" class=\"text-center p-10\" [config]=\"config\"></ng-otp-input>\r\n  </div>\r\n  <div class=\"currentmpin-text\">\r\n    <h5 class=\"pb-10\">Confirm new mPIN</h5>\r\n    <ng-otp-input  [formCtrl]=\"confirmnewmpin\" class=\"text-center p-10\" [config]=\"config\"></ng-otp-input>\r\n  </div>\r\n  <div class=\"continue-button\">\r\n    <ng-container  *ngIf=\"isLoading; else showLoading\">\r\n      <ion-button expand=\"full\" shape=\"round\" class=\"my-5\">\r\n        <ion-spinner name=\"circles\"></ion-spinner>\r\n      </ion-button>\r\n    </ng-container>\r\n    <ng-template #showLoading>\r\n      <ion-button expand=\"full\" shape=\"round\" class=\"my-5\" (click)=\"changePin()\">\r\n        CONTINUE\r\n      </ion-button>\r\n    </ng-template>\r\n  </div>\r\n</form>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_changempin_changempin_module_ts.js.map