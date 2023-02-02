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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _changempin_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changempin.page.html?ngResource */ 9856);
/* harmony import */ var _changempin_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changempin.page.scss?ngResource */ 73323);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var _setmpin_setmpin_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../setmpin/setmpin.page */ 76088);
/* harmony import */ var src_app_services_device_access_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/device-access.service */ 34910);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data.service */ 52468);
/* harmony import */ var _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/unique-device-id/ngx */ 83181);












let ChangempinPage = class ChangempinPage {
    constructor(router, toastCtrl, api, device, dataService, uniqueDeviceID) {
        this.router = router;
        this.toastCtrl = toastCtrl;
        this.api = api;
        this.device = device;
        this.dataService = dataService;
        this.uniqueDeviceID = uniqueDeviceID;
        this.currentmpin = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('');
        this.setnewmpin = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('');
        this.confirmnewmpin = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('');
        this.mpinobj = new _setmpin_setmpin_page__WEBPACK_IMPORTED_MODULE_3__.mpinObjects();
        this.matchedMpin = false;
        this.ngOtpErr = false;
        this.config = {
            allowNumbersOnly: true,
            length: 4,
            isPasswordInput: false,
            disableAutoFocus: false,
            placeholder: '*',
            inputStyles: {
                'width': '50px',
                'height': '50px'
            }
        };
    }
    ngOnInit() {
        this.customerPhonenum = localStorage.getItem('customerPhonenum');
    }
    ionViewWillEnter() {
        this.getUniqueDeviceID();
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
    changePin() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
            this.mpinobj.phoneNumber = this.customerPhonenum;
            this.mpinobj.mpin = this.setnewmpin.value;
            this.mpinobj.currentMpin = this.currentmpin.value;
            this.mpinobj.deviceId = this.deviceUUID;
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
    onMpinChange(value) {
        if (this.currentmpin.value === this.setnewmpin.value) {
            this.matchedMpin = true;
        }
        else {
            this.matchedMpin = false;
        }
        if (this.setnewmpin.value.length === 4 && this.confirmnewmpin.value.length === 4) {
            if (this.setnewmpin.value !== this.confirmnewmpin.value) {
                this.ngOtpErr = true;
            }
            else {
                this.ngOtpErr = false;
            }
        }
    }
    goToSecuritycenter() {
        this.router.navigate(['securitycenter']);
    }
    checkDisable() {
        return this.currentmpin.value.length < 4
            || this.setnewmpin.value.length < 4
            || this.confirmnewmpin.value.length < 4
            || this.currentmpin.value === this.setnewmpin.value
            || this.setnewmpin.value !== this.confirmnewmpin.value;
    }
    openToast(errorMessage) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
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
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.ToastController },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService },
    { type: src_app_services_device_access_service__WEBPACK_IMPORTED_MODULE_4__.DeviceAccess },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__.DataService },
    { type: _ionic_native_unique_device_id_ngx__WEBPACK_IMPORTED_MODULE_6__.UniqueDeviceID }
];
ChangempinPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
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

module.exports = ".forex_header {\n  padding-top: 4%;\n  padding-bottom: 3%;\n  font-weight: bold;\n}\n\n.text {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n  opacity: 70%;\n  color: #102245;\n}\n\n.backarrow {\n  font-size: x-large;\n  display: inline-block;\n  vertical-align: middle;\n  opacity: 100%;\n  margin-left: 2%;\n  color: #102245;\n}\n\nion-toolbar {\n  margin-top: 5%;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n}\n\n.new-background-color {\n  --background: #ecf3f2;\n  height: 108.5px;\n  display: inline-block;\n  vertical-align: middle;\n  color: #54627a;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n  display: flex;\n  align-items: center;\n}\n\n.new-background-color span.text {\n  font-weight: bold;\n  margin-left: 2%;\n}\n\n.currentmpin-text {\n  font-size: 20px;\n  color: #B1B1B1;\n  padding-left: 24px;\n  padding-top: 15px;\n  padding-bottom: 5px;\n}\n\n.pb-10 {\n  padding-bottom: 10px;\n}\n\n.continue-button {\n  bottom: 20px;\n  width: 80%;\n  left: 0;\n  right: 0;\n  position: relative;\n  margin: 0 auto;\n}\n\np.errMsg {\n  color: #b20000;\n  font-size: 12px;\n  margin-bottom: 0;\n}\n\n::ng-deep .currentmpin-text ng-otp-input.error .otp-input {\n  color: #b20000;\n  border: solid 1px #ff0000 !important;\n}\n\n::ng-deep .currentmpin-text ng-otp-input.error .otp-input:focus {\n  outline-color: #ff0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoYW5nZW1waW4ucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcR0lUSFVCJTIwUkVQT1NJVE9SWV9VSVxcaUN1c3RNb2JpbGUtdjJcXHNyY1xcYXBwXFxwYWdlc1xcY2hhbmdlbXBpblxcY2hhbmdlbXBpbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxjQUFBO0VBQ0Esa0NBQUE7QUNDRjs7QURFQTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtFQUVBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQUY7O0FERUU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUNBSjs7QURJQTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDREY7O0FESUE7RUFDRSxvQkFBQTtBQ0RGOztBRElBO0VBQ0UsWUFBQTtFQUNBLFVBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQ0RGOztBRElBO0VBQ0UsY0FBQTtFQUNBLG9DQUFBO0FDREY7O0FERUU7RUFDRSxzQkFBQTtBQ0FKIiwiZmlsZSI6ImNoYW5nZW1waW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcmV4X2hlYWRlciB7XHJcbiAgcGFkZGluZy10b3A6IDQlO1xyXG4gIHBhZGRpbmctYm90dG9tOiAzJTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLnRleHQge1xyXG4gIG1hcmdpbi1sZWZ0OiAyJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogNzAlO1xyXG4gIGNvbG9yOiAjMTAyMjQ1XHJcbn1cclxuXHJcbi5iYWNrYXJyb3cge1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBvcGFjaXR5OiAxMDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyJTtcclxuICBjb2xvcjogIzEwMjI0NTtcclxufVxyXG5cclxuaW9uLXRvb2xiYXIge1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNkM2QzZDM7XHJcbn1cclxuXHJcbi5uZXctYmFja2dyb3VuZC1jb2xvciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZWNmM2YyO1xyXG4gIGhlaWdodDogMTA4LjVweDtcclxuICAvLyAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgY29sb3I6ICM1NDYyN2E7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgc3Bhbi50ZXh0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIH1cclxufVxyXG5cclxuLmN1cnJlbnRtcGluLXRleHQge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBjb2xvcjogI0IxQjFCMTtcclxuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XHJcbiAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnBiLTEwIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmNvbnRpbnVlLWJ1dHRvbiB7XHJcbiAgYm90dG9tOiAyMHB4O1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbnAuZXJyTXNnIHtcclxuICBjb2xvcjogI2IyMDAwMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5jdXJyZW50bXBpbi10ZXh0IG5nLW90cC1pbnB1dC5lcnJvciAub3RwLWlucHV0IHtcclxuICBjb2xvcjogI2IyMDAwMDtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjZmYwMDAwICFpbXBvcnRhbnQ7XHJcbiAgJjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lLWNvbG9yOiAjZmYwMDAwO1xyXG4gIH1cclxufSIsIi5mb3JleF9oZWFkZXIge1xuICBwYWRkaW5nLXRvcDogNCU7XG4gIHBhZGRpbmctYm90dG9tOiAzJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi50ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDcwJTtcbiAgY29sb3I6ICMxMDIyNDU7XG59XG5cbi5iYWNrYXJyb3cge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgb3BhY2l0eTogMTAwJTtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBjb2xvcjogIzEwMjI0NTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgYm94LXNoYWRvdzogMCA1cHQgNXB0IC0ycHQgI2QzZDNkMztcbn1cblxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZWNmM2YyO1xuICBoZWlnaHQ6IDEwOC41cHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6ICM1NDYyN2E7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ubmV3LWJhY2tncm91bmQtY29sb3Igc3Bhbi50ZXh0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbn1cblxuLmN1cnJlbnRtcGluLXRleHQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjQjFCMUIxO1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gIHBhZGRpbmctdG9wOiAxNXB4O1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xufVxuXG4ucGItMTAge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbn1cblxuLmNvbnRpbnVlLWJ1dHRvbiB7XG4gIGJvdHRvbTogMjBweDtcbiAgd2lkdGg6IDgwJTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbnAuZXJyTXNnIHtcbiAgY29sb3I6ICNiMjAwMDA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuOjpuZy1kZWVwIC5jdXJyZW50bXBpbi10ZXh0IG5nLW90cC1pbnB1dC5lcnJvciAub3RwLWlucHV0IHtcbiAgY29sb3I6ICNiMjAwMDA7XG4gIGJvcmRlcjogc29saWQgMXB4ICNmZjAwMDAgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAuY3VycmVudG1waW4tdGV4dCBuZy1vdHAtaW5wdXQuZXJyb3IgLm90cC1pbnB1dDpmb2N1cyB7XG4gIG91dGxpbmUtY29sb3I6ICNmZjAwMDA7XG59Il19 */";

/***/ }),

/***/ 9856:
/*!******************************************************************!*\
  !*** ./src/app/pages/changempin/changempin.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"forex_header\">\r\n    <ion-icon class=\"backarrow\" name=\"chevron-back-outline\" (click)=\"goToSecuritycenter()\"></ion-icon>\r\n    <span class=\"text\">Change mPIN</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <form>\r\n    <div class=\"currentmpin-text\">\r\n      <h5 class=\"pb-10\">Current mPIN</h5>\r\n      <ng-otp-input [formCtrl]=\"currentmpin\" class=\"text-center p-10\" [config]=\"config\"></ng-otp-input>\r\n    </div>\r\n    <div class=\"currentmpin-text\">\r\n      <h5 class=\"pb-10\">Set new mPIN</h5>\r\n      <ng-otp-input [formCtrl]=\"setnewmpin\" [ngClass]=\"ngOtpErr || matchedMpin ? 'text-center p-10 error' : 'text-center p-10'\" (onInputChange)=\"onMpinChange($event)\" [config]=\"config\"></ng-otp-input>\r\n      <p class=\"errMsg\" *ngIf=\"matchedMpin\">Current mPin and new mPin can not be same.</p>\r\n    </div>\r\n    <div class=\"currentmpin-text\">\r\n      <h5 class=\"pb-10\">Confirm new mPIN</h5>\r\n      <ng-otp-input [formCtrl]=\"confirmnewmpin\" [ngClass]=\"ngOtpErr ? 'text-center p-10 error' : 'text-center p-10'\" (onInputChange)=\"onMpinChange($event)\" [config]=\"config\"></ng-otp-input>\r\n      <p class=\"errMsg\" *ngIf=\"ngOtpErr\">mPin do not match!</p>\r\n    </div>\r\n  </form>\r\n\r\n  <div class=\"continue-button\">\r\n    <ng-container *ngIf=\"isLoading; else showLoading\">\r\n      <ion-button expand=\"full\" shape=\"round\" class=\"my-5\">\r\n        <ion-spinner name=\"circles\"></ion-spinner>\r\n      </ion-button>\r\n    </ng-container>\r\n    <ng-template #showLoading>\r\n      <ion-button expand=\"full\" shape=\"round\" class=\"my-5\" (click)=\"changePin()\"[disabled]=\"checkDisable()\">\r\n        CONTINUE\r\n      </ion-button>\r\n    </ng-template>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_changempin_changempin_module_ts.js.map