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
                            'screenName': 'setmpin'
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

module.exports = "section {\n  position: relative;\n  background: url('3@3x.png');\n  background-repeat: round;\n  color: #fff;\n  height: 40%;\n}\n\n.logo-icon {\n  margin: 0 auto;\n  text-align: start;\n  width: 130px;\n  height: 130px;\n  margin-top: 30px;\n}\n\n.back-nav {\n  padding: 19px 0px 0px 0px;\n}\n\n.back-nav-color {\n  color: #000000 !important;\n}\n\n.item-box-white {\n  width: 100%;\n  height: 100%;\n  background: #ffffff;\n  border-radius: 60px 0 0 0;\n  height: 60%;\n  position: absolute;\n}\n\n.login-logo {\n  padding: 20px;\n  min-height: 140px;\n  margin-top: 15%;\n  text-align: center;\n}\n\n.login-logo img {\n  max-width: 120px;\n  margin-top: -9%;\n}\n\n.otp-text {\n  color: #A2A0A8;\n}\n\n.forgot,\na {\n  text-align: center;\n  font-size: 14px;\n  color: #456EFE !important;\n  margin-top: 10px;\n  display: block;\n  text-decoration: none;\n}\n\n.fieldCard {\n  padding-top: 50%;\n  padding-left: 5%;\n}\n\n.subtitle {\n  padding-left: 5%;\n}\n\n.form-box {\n  padding: 25px;\n  height: 250px;\n  position: relative;\n  top: -10%;\n  bottom: 0px;\n  left: 0px;\n  right: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldG1waW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtBQUNKOztBQUVFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUU7RUFDRSxhQUFBO0VBRUEsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUdFO0VBQ0UsY0FBQTtBQUFKOztBQUdFOztFQUVFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EscUJBQUE7QUFBSjs7QUFHRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7QUFBSjs7QUFHRTtFQUNFLGdCQUFBO0FBQUo7O0FBR0U7RUFFRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQURKIiwiZmlsZSI6InNldG1waW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsic2VjdGlvbiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9pbWFnZXMvM0AzeC5wbmcnKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByb3VuZDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgaGVpZ2h0OiA0MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dvLWljb24ge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICAgIHdpZHRoOiAxMzBweDtcclxuICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAuYmFjay1uYXYge1xyXG4gICAgcGFkZGluZzogMTlweCAwcHggMHB4IDBweDtcclxuICB9XHJcbiAgXHJcbiAgLmJhY2stbmF2LWNvbG9yIHtcclxuICAgIGNvbG9yOiAjMDAwMDAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5pdGVtLWJveC13aGl0ZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2MHB4IDAgMCAwO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgfVxyXG4gIFxyXG4gIC5sb2dpbi1sb2dvIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAvLyBtaW4taGVpZ2h0OiAxOTBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDE0MHB4O1xyXG4gICAgbWFyZ2luLXRvcDogMTUlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAubG9naW4tbG9nbyBpbWcge1xyXG4gICAgbWF4LXdpZHRoOiAxMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC05JTtcclxuICB9XHJcbiAgXHJcbiAgLm90cC10ZXh0IHtcclxuICAgIGNvbG9yOiAjQTJBMEE4O1xyXG4gIH1cclxuICBcclxuICAuZm9yZ290LFxyXG4gIGEge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgY29sb3I6ICM0NTZFRkUgIWltcG9ydGFudDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLmZpZWxkQ2FyZCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNTAlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICB9XHJcbiAgXHJcbiAgLnN1YnRpdGxlIHtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JtLWJveCB7XHJcbiAgICAvLyB3aWR0aDogMzAwcHg7XHJcbiAgICBwYWRkaW5nOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiAyNTBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTEwJTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgcmlnaHQ6IDBweFxyXG4gIH0iXX0= */";

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