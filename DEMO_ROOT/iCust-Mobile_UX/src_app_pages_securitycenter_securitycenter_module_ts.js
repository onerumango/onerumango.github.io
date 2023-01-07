"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_securitycenter_securitycenter_module_ts"],{

/***/ 4039:
/*!***********************************************************************!*\
  !*** ./src/app/pages/securitycenter/securitycenter-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecuritycenterPageRoutingModule": () => (/* binding */ SecuritycenterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _securitycenter_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./securitycenter.page */ 5108);




const routes = [
    {
        path: '',
        component: _securitycenter_page__WEBPACK_IMPORTED_MODULE_0__.SecuritycenterPage
    }
];
let SecuritycenterPageRoutingModule = class SecuritycenterPageRoutingModule {
};
SecuritycenterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SecuritycenterPageRoutingModule);



/***/ }),

/***/ 50936:
/*!***************************************************************!*\
  !*** ./src/app/pages/securitycenter/securitycenter.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecuritycenterPageModule": () => (/* binding */ SecuritycenterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _securitycenter_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./securitycenter-routing.module */ 4039);
/* harmony import */ var _securitycenter_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./securitycenter.page */ 5108);







let SecuritycenterPageModule = class SecuritycenterPageModule {
};
SecuritycenterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _securitycenter_routing_module__WEBPACK_IMPORTED_MODULE_0__.SecuritycenterPageRoutingModule
        ],
        declarations: [_securitycenter_page__WEBPACK_IMPORTED_MODULE_1__.SecuritycenterPage]
    })
], SecuritycenterPageModule);



/***/ }),

/***/ 5108:
/*!*************************************************************!*\
  !*** ./src/app/pages/securitycenter/securitycenter.page.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecuritycenterPage": () => (/* binding */ SecuritycenterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _securitycenter_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./securitycenter.page.html?ngResource */ 5038);
/* harmony import */ var _securitycenter_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./securitycenter.page.scss?ngResource */ 84046);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/api.service */ 5830);
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ 52468);








let SecuritycenterPage = class SecuritycenterPage {
    constructor(router, cdr, dataService, platform, apiProvider) {
        this.router = router;
        this.cdr = cdr;
        this.dataService = dataService;
        this.platform = platform;
        this.apiProvider = apiProvider;
        this.title = 'Security Center';
        this.setmpinFlag = true;
    }
    ngOnInit() {
        this.mpin = localStorage.getItem("mpin");
        this.currentUser = this.dataService.getCurrentUser();
        this.isDevice = this.platform.is('cordova');
        this.setmpinFlag = this.mpin === "null" ? true : false;
        this.cdr.markForCheck();
    }
    goToHome() {
        this.router.navigate(['/profile']);
    }
    setmpin() {
        this.router.navigate(['/setmpin']);
    }
    changempin() {
        this.router.navigate(['/changempin']);
    }
    changePassword() {
        this.router.navigate(['/changepassword']);
    }
    goToLoginActivity() {
        this.router.navigate(['/loginactivity']);
    }
    setBiometricAuth() {
        var _a;
        let fingerPrint, faceId, customerId;
        customerId = (_a = this.currentUser) === null || _a === void 0 ? void 0 : _a.customerId;
        faceId = false;
        fingerPrint = false;
        this.registerFaceIdOrFingerPrint(customerId, faceId, fingerPrint);
    }
    registerFaceIdOrFingerPrint(customerId, faceId, fingerPrint) {
        this.apiProvider.registerFaceIdORFingerPrint(customerId, faceId, fingerPrint).subscribe(res => {
            console.log("Res", res);
        }, err => {
            console.log("Err", err);
        });
    }
};
SecuritycenterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__.DataService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.Platform },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_2__.ApiService }
];
SecuritycenterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-securitycenter',
        template: _securitycenter_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_securitycenter_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], SecuritycenterPage);



/***/ }),

/***/ 84046:
/*!**************************************************************************!*\
  !*** ./src/app/pages/securitycenter/securitycenter.page.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = ".new-background-color {\n  --background: #ECF3F2;\n}\n\n.backIcon {\n  font-size: x-large;\n  margin-bottom: 4%;\n  color: #102245;\n  display: inline-block;\n  vertical-align: middle;\n  opacity: 100%;\n}\n\n.mpin-img {\n  width: 10%;\n  margin-bottom: 5%;\n}\n\n.text {\n  margin-left: 2%;\n  margin-bottom: 4%;\n  display: inline-block;\n  vertical-align: middle;\n  color: #102245;\n  font-size: 15pt;\n  opacity: 100%;\n  font-weight: 800;\n}\n\n.labelCard {\n  font-family: \"Montserrat\" !important;\n  opacity: 75%;\n  font-size: 13pt;\n  margin-bottom: 10%;\n  margin-left: 5%;\n}\n\n.iconCard {\n  margin-bottom: 8%;\n}\n\n.item {\n  max-width: 95% !important;\n  list-style: none;\n  display: list-item;\n  margin-top: 10%;\n}\n\n.newCard {\n  font-family: \"Montserrat\" !important;\n  opacity: 114%;\n  font-size: large;\n  margin-bottom: 10%;\n  margin-left: 3%;\n}\n\n.icon {\n  margin-left: 25%;\n  margin-top: 10%;\n  font-family: \"Montserrat\";\n}\n\n.icon2 {\n  margin-left: 5%;\n  width: 10%;\n  margin-bottom: 8%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3VyaXR5Y2VudGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBR0E7RUFDSSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBREo7O0FBSUE7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQURKOztBQUlBO0VBQ0ksb0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksaUJBQUE7QUFESjs7QUFLQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFGSjs7QUFLQTtFQUNJLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRko7O0FBS0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUZKOztBQUtBO0VBQ0ksZUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtBQUZKIiwiZmlsZSI6InNlY3VyaXR5Y2VudGVyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uZXctYmFja2dyb3VuZC1jb2xvciB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNFQ0YzRjI7XHJcblxyXG59XHJcblxyXG4uYmFja0ljb24ge1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG5cclxuICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gICAgY29sb3I6ICMxMDIyNDU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgb3BhY2l0eTogMTAwJTtcclxufVxyXG5cclxuLm1waW4taW1nIHtcclxuICAgIHdpZHRoOiAxMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1JTtcclxufVxyXG5cclxuLnRleHQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgY29sb3I6ICMxMDIyNDU7XHJcbiAgICBmb250LXNpemU6IDE1cHQ7XHJcbiAgICBvcGFjaXR5OiAxMDAlO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG5cclxuLmxhYmVsQ2FyZCB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiA3NSU7XHJcbiAgICBmb250LXNpemU6IDEzcHQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMCU7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbn1cclxuXHJcbi5pY29uQ2FyZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4JTtcclxuXHJcbn1cclxuXHJcbi5pdGVtIHtcclxuICAgIG1heC13aWR0aDogOTUlICFpbXBvcnRhbnQ7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xyXG4gICAgbWFyZ2luLXRvcDogMTAlO1xyXG59XHJcblxyXG4ubmV3Q2FyZCB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiAxMTQlO1xyXG4gICAgZm9udC1zaXplOiBsYXJnZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxufVxyXG5cclxuLmljb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbn1cclxuXHJcbi5pY29uMiB7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOCU7XHJcblxyXG59Il19 */";

/***/ }),

/***/ 5038:
/*!**************************************************************************!*\
  !*** ./src/app/pages/securitycenter/securitycenter.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar style=\"padding-top: 7%; padding-left: 3%;\" class=\"new-background-color\">\r\n    <ion-icon class=\"backIcon\" name=\"chevron-back-outline\" (click)=\"goToHome()\"></ion-icon>\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div>\r\n    <ion-item class=\"item\" (click)=\"changePassword()\">\r\n      <img style=\"width: 10%; margin-bottom: 5%;\" src=\"assets/icon/key.png\" alt=\"Ionic logo\">\r\n      <!-- <ion-icon name=\"albums-outline\" style=\"color: #456EFE;\" class=\"iconCard\" ></ion-icon>&nbsp;&nbsp;&nbsp; -->\r\n      <ion-label class=\"labelCard\">\r\n        Change Password\r\n      </ion-label>\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\" class=\"iconCard\"></ion-icon>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img style=\"width: 10%; margin-bottom: 5%;\" src=\"assets/icon/transactionicon.png\" alt=\"Ionic logo\">\r\n      <!-- <ion-icon name=\"albums-outline\" style=\"color: #456EFE;\" class=\"iconCard\"></ion-icon>&nbsp;&nbsp;&nbsp; -->\r\n      <ion-label class=\"labelCard\">\r\n        My Transaction Limits\r\n\r\n      </ion-label>\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\" class=\"iconCard\"></ion-icon>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img style=\"width: 10%; margin-bottom: 5%;\" src=\"assets/icon/serviceicon.png\" alt=\"Ionic logo\">\r\n      <!-- <ion-icon name=\"albums-outline\" style=\"color: #456EFE;\" class=\"iconCard\"></ion-icon>&nbsp;&nbsp;&nbsp; -->\r\n      <ion-label class=\"labelCard\">\r\n        Manage Your Card\r\n      </ion-label>\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\" class=\"iconCard\"></ion-icon>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\" (click)=\"goToLoginActivity()\">\r\n      <img style=\"width: 10%; margin-bottom: 5%;\" src=\"assets/icon/transactionicon.png\" alt=\"Ionic logo\">\r\n      <!-- <ion-icon name=\"albums-outline\" style=\"color: #456EFE;\" class=\"iconCard\"></ion-icon>&nbsp;&nbsp;&nbsp; -->\r\n      <ion-label class=\"labelCard\">\r\n        Login Activity\r\n      </ion-label>\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\" class=\"iconCard\"></ion-icon>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img style=\"width: 10%; margin-bottom: 5%;\" src=\"assets/icon/Group.png\" alt=\"Ionic logo\">\r\n      <!-- <ion-icon name=\"albums-outline\" style=\"color: #456EFE;\" class=\"iconCard\"></ion-icon>&nbsp;&nbsp;&nbsp; -->\r\n      <!-- <ion-label class=\"labelCard\">\r\n        Enable/Disable Fingerprint\r\n      </ion-label> -->\r\n      <!-- <ion-item> -->\r\n\r\n      <!-- </ion-item> -->\r\n      <!-- <ion-icon slot=\"end\" name=\"chevron-forward-outline\" class=\"iconCard\"></ion-icon> -->\r\n      <!-- <ion-item> -->\r\n      <ion-label class=\"labelCard\"> Enable/Disable Fingerprint</ion-label>\r\n      <ion-toggle slot=\"end\"></ion-toggle>\r\n      <!-- </ion-item> -->\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img style=\"width: 10%; margin-bottom: 5%;\" src=\"assets/icon/face-id.png\" alt=\"Ionic logo\">\r\n      <!-- <ion-icon name=\"albums-outline\" style=\"color: #456EFE;\" class=\"iconCard\"></ion-icon>&nbsp;&nbsp;&nbsp; -->\r\n      <!-- <ion-label class=\"labelCard\">\r\n        Enable/Disable Face ID\r\n      </ion-label> -->\r\n      <ion-label class=\"labelCard\">Enable/Disable Face ID</ion-label>\r\n      <ion-toggle slot=\"end\"></ion-toggle>\r\n    </ion-item>\r\n  </div>\r\n\r\n  <div *ngIf=\"setmpinFlag; else showChangeMpin\">\r\n    <ion-item class=\"item\" lines=\"none\" (click)=\"setmpin()\">\r\n      <img class=\"mpin-img\" src=\"assets/icon/Icon-feather.png\" alt=\"MPIN\">\r\n      <ion-label class=\"labelCard\">\r\n        Set login mPIN\r\n      </ion-label>\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\" class=\"iconCard\"></ion-icon>\r\n    </ion-item>\r\n  </div>\r\n\r\n  <ng-template #showChangeMpin>\r\n    <ion-item class=\"item\" lines=\"none\" (click)=\"changempin()\">\r\n      <img class=\"mpin-img\" src=\"assets/icon/Icon-feather.png\" alt=\"MPIN\">\r\n      <ion-label class=\"labelCard\">\r\n        Change login mPIN\r\n      </ion-label>\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\" class=\"iconCard\"></ion-icon>\r\n    </ion-item>\r\n  </ng-template>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_securitycenter_securitycenter_module_ts.js.map