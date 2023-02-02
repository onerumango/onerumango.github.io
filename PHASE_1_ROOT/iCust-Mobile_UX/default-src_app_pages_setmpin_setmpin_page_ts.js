"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_setmpin_setmpin_page_ts"],{

/***/ 76088:
/*!***********************************************!*\
  !*** ./src/app/pages/setmpin/setmpin.page.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SetmpinPage": () => (/* binding */ SetmpinPage),
/* harmony export */   "mpinObjects": () => (/* binding */ mpinObjects)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _setmpin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./setmpin.page.html?ngResource */ 15533);
/* harmony import */ var _setmpin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setmpin.page.scss?ngResource */ 61379);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/unique-device-id/ngx */ 83181);











let SetmpinPage = class SetmpinPage {
    constructor(router, location, api, fb, toastCtrl, uniqueDeviceID, dataService) {
        this.router = router;
        this.location = location;
        this.api = api;
        this.fb = fb;
        this.toastCtrl = toastCtrl;
        this.uniqueDeviceID = uniqueDeviceID;
        this.dataService = dataService;
        this.isLoading = false;
        this.newMpin = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl();
        this.mpin = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl();
        this.mpinobj = new mpinObjects();
        this.config = {
            allowNumbersOnly: true,
            length: 4,
            isPasswordInput: false,
            disableAutoFocus: false,
            placeholder: '',
            inputStyles: {
                'width': '50px',
                'height': '50px'
            }
        };
    }
    ngOnInit() {
        this.customerPhonenum = localStorage.getItem('customerPhonenum');
        this.mpinForm = this.fb.group({
            phoneNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            deviceId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            mpin: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            confirmMpin: [],
        });
        this.navSubscription = this.api.getNavParam.subscribe((data) => (this.screenNames = data));
    }
    ionViewWillEnter() {
        this.getUniqueDeviceID();
    }
    back() {
        this.location.back();
    }
    forgotmpin() {
        this.router.navigateByUrl('/forgotmpin');
    }
    openToast(message) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: `${message}`,
                duration: 2500,
                position: 'bottom',
            });
            toast.present();
        });
    }
    getUniqueDeviceID() {
        this.uniqueDeviceID.get()
            .then((uuid) => {
            console.log(uuid);
            this.deviceUUID = uuid;
        })
            .catch((error) => {
            console.log(error);
            this.deviceUUID = "";
        });
    }
    setMpin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            if (!this.newMpin.value || this.newMpin.value < 4 || !this.mpin.value || this.mpin.value.length < 4) {
                this.openToast('Enter valid mPin');
                return;
            }
            if (this.newMpin.value !== this.mpin.value) {
                this.openToast('New and current mPin did not match');
                return;
            }
            this.mpinobj.phoneNumber = this.customerPhonenum;
            this.mpinobj.mpin = this.mpin.value;
            this.mpinobj.deviceId = this.deviceUUID;
            if (this.newMpin.value !== this.mpin.value) {
                this.openToast('mPin did not match');
                return;
            }
            this.api
                .setMpin(this.mpinobj)
                .subscribe((res) => {
                if (res.status == 200) {
                    localStorage.setItem('deviceId', this.deviceUUID);
                    localStorage.setItem('customer_details', JSON.stringify(res.data));
                    this.dataService.isLoggedIn.next(true);
                    const navigationExtras = {
                        queryParams: {
                            'screenDetails': 'Set Login mPIN!',
                            'screenDescription': 'Your mPIN has been registered successfully',
                            'screenName': this.screenNames.queryParams.screenName == "forgotmpin" ? 'forgotmpin' : 'setmpin'
                        },
                    };
                    this.api.sendNavParam(navigationExtras);
                    this.router.navigateByUrl('/success-message');
                }
                else {
                    this.openToast(res.message);
                }
            }, (error) => {
                this.isLoading = false;
            });
        });
    }
};
SetmpinPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__.Location },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.ToastController },
    { type: _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_4__.UniqueDeviceID },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService }
];
SetmpinPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-setmpin',
        template: _setmpin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_setmpin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SetmpinPage);

class mpinObjects {
}


/***/ }),

/***/ 61379:
/*!************************************************************!*\
  !*** ./src/app/pages/setmpin/setmpin.page.scss?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "section {\n  position: relative;\n  background: url('3@3x.png');\n  background-repeat: round;\n  color: #fff;\n  height: 40%;\n}\n\n.logo-icon {\n  margin: 0 auto;\n  text-align: start;\n  width: 130px;\n  height: 130px;\n  margin-top: 30px;\n}\n\n.back-nav {\n  padding: 19px 0px 0px 0px;\n}\n\n.back-nav-color {\n  color: #000000 !important;\n}\n\n.item-box-white {\n  width: 100%;\n  height: 100%;\n  background: #ffffff;\n  border-radius: 60px 0 0 0;\n  height: 60%;\n  position: absolute;\n}\n\n.login-logo {\n  padding: 20px;\n  min-height: 140px;\n  margin-top: 15%;\n  text-align: center;\n}\n\n.login-logo img {\n  max-width: 120px;\n  margin-top: -9%;\n}\n\n.otp-text {\n  color: #A2A0A8;\n}\n\n.forgot,\na {\n  text-align: center;\n  font-size: 14px;\n  color: #456EFE !important;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n}\n\n.fieldCard {\n  padding-top: 50%;\n  padding-left: 5%;\n}\n\n.subtitle {\n  padding-left: 5%;\n}\n\n.form-box {\n  padding: 25px;\n  height: 250px;\n  position: relative;\n  top: -10%;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldG1waW4ucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcR0lUSFVCJTIwUkVQT1NJVE9SWV9VSVxcaUN1c3RNb2JpbGUtdjJcXHNyY1xcYXBwXFxwYWdlc1xcc2V0bXBpblxcc2V0bXBpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtBQ0NKOztBREVFO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVFO0VBQ0UseUJBQUE7QUNDSjs7QURFRTtFQUNFLHlCQUFBO0FDQ0o7O0FERUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUNFLGFBQUE7RUFFQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0U7RUFDRSxjQUFBO0FDQUo7O0FER0U7O0VBRUUsa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtBQ0FKOztBREdFO0VBQ0UsZ0JBQUE7RUFDQSxnQkFBQTtBQ0FKOztBREdFO0VBQ0UsZ0JBQUE7QUNBSjs7QURHRTtFQUVFLGFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDREoiLCJmaWxlIjoic2V0bXBpbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJzZWN0aW9uIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy8zQDN4LnBuZycpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJvdW5kO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBoZWlnaHQ6IDQwJTtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ28taWNvbiB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgaGVpZ2h0OiAxMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5iYWNrLW5hdiB7XHJcbiAgICBwYWRkaW5nOiAxOXB4IDBweCAwcHggMHB4O1xyXG4gIH1cclxuICBcclxuICAuYmFjay1uYXYtY29sb3Ige1xyXG4gICAgY29sb3I6ICMwMDAwMDAgIWltcG9ydGFudDtcclxuICB9XHJcbiAgXHJcbiAgLml0ZW0tYm94LXdoaXRlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDYwcHggMCAwIDA7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmxvZ2luLWxvZ28ge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIC8vIG1pbi1oZWlnaHQ6IDE5MHB4O1xyXG4gICAgbWluLWhlaWdodDogMTQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNSU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi1sb2dvIGltZyB7XHJcbiAgICBtYXgtd2lkdGg6IDEyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogLTklO1xyXG4gIH1cclxuICBcclxuICAub3RwLXRleHQge1xyXG4gICAgY29sb3I6ICNBMkEwQTg7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3Jnb3QsXHJcbiAgYSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzQ1NkVGRSAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuZmllbGRDYXJkIHtcclxuICAgIHBhZGRpbmctdG9wOiA1MCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIH1cclxuICBcclxuICAuc3VidGl0bGUge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0tYm94IHtcclxuICAgIC8vIHdpZHRoOiAzMDBweDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdG9wOiAtMTAlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICByaWdodDogMHB4XHJcbiAgfSIsInNlY3Rpb24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvM0AzeC5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcbiAgY29sb3I6ICNmZmY7XG4gIGhlaWdodDogNDAlO1xufVxuXG4ubG9nby1pY29uIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHRleHQtYWxpZ246IHN0YXJ0O1xuICB3aWR0aDogMTMwcHg7XG4gIGhlaWdodDogMTMwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5iYWNrLW5hdiB7XG4gIHBhZGRpbmc6IDE5cHggMHB4IDBweCAwcHg7XG59XG5cbi5iYWNrLW5hdi1jb2xvciB7XG4gIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtLWJveC13aGl0ZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDYwcHggMCAwIDA7XG4gIGhlaWdodDogNjAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG5cbi5sb2dpbi1sb2dvIHtcbiAgcGFkZGluZzogMjBweDtcbiAgbWluLWhlaWdodDogMTQwcHg7XG4gIG1hcmdpbi10b3A6IDE1JTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubG9naW4tbG9nbyBpbWcge1xuICBtYXgtd2lkdGg6IDEyMHB4O1xuICBtYXJnaW4tdG9wOiAtOSU7XG59XG5cbi5vdHAtdGV4dCB7XG4gIGNvbG9yOiAjQTJBMEE4O1xufVxuXG4uZm9yZ290LFxuYSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzQ1NkVGRSAhaW1wb3J0YW50O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4uZmllbGRDYXJkIHtcbiAgcGFkZGluZy10b3A6IDUwJTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxuLnN1YnRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxuLmZvcm0tYm94IHtcbiAgcGFkZGluZzogMjVweDtcbiAgaGVpZ2h0OiAyNTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xMCU7XG4gIGJvdHRvbTogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG59Il19 */";

/***/ }),

/***/ 15533:
/*!************************************************************!*\
  !*** ./src/app/pages/setmpin/setmpin.page.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <section>\r\n    <div class=\"back-nav\">\r\n      <ion-button fill=\"clear\" (click)=\"back()\">\r\n        <ion-icon slot=\"icon-only\" name=\"chevron-back-outline\" class=\"back-nav-color\"></ion-icon>\r\n      </ion-button>\r\n    </div>\r\n\r\n    <div class=\"logo-icon\">\r\n      <div class=\"logo\"><img src=\"assets/images/Demobank.svg\" class=\"w-100\"></div>\r\n    </div>\r\n  </section>\r\n  <div class=\"item-box-white\">\r\n    <div class=\"form-box\">\r\n      <form class=\"form_container\" [formGroup]=\"mpinForm\" novalidate>\r\n        <div class=\"otp-box text-left\">\r\n          <ion-text>\r\n            <h4>Set mPIN</h4>\r\n            <p class=\"otp-text\">Set a Permanent mPIN of your choice for Your account.</p>\r\n            <!-- <h6>{{customerPhonenum}}</h6> -->\r\n          </ion-text>\r\n        </div>\r\n        <!-- OTP INPUT START -->\r\n        <div>\r\n          <p class=\"text-center\">Set new mPIN</p>\r\n        </div>\r\n        <div class=\"text-center my-5\">\r\n          <ng-otp-input [formCtrl]=\"newMpin\" [config]=\"config\"></ng-otp-input>\r\n        </div>\r\n        <div>\r\n          <p class=\"text-center\">Confirm new mPIN</p>\r\n        </div>\r\n        <div class=\"text-center my-5\">\r\n          <ng-otp-input [formCtrl]=\"mpin\" [config]=\"config\"></ng-otp-input>\r\n        </div>\r\n         <!-- OTP INPUT END -->\r\n        <!-- <div class=\"forgot my-5\" (click)=\"forgotmpin()\">\r\n          <a class=\"text-center\">Forgot mPIN</a>\r\n        </div> -->\r\n      </form>\r\n      <div class=\"my-5\">\r\n        <ng-container *ngIf=\"isLoading; else showLoading\">\r\n          <ion-button expand=\"full\" shape=\"round\" class=\"my-5\">\r\n            <ion-spinner name=\"circles\"></ion-spinner>\r\n          </ion-button>\r\n        </ng-container>\r\n        <ng-template #showLoading>\r\n          <ion-button expand=\"full\" shape=\"round\" class=\"my-5\" (click)=\"setMpin()\">\r\n            CONTINUE\r\n          </ion-button>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_setmpin_setmpin_page_ts.js.map