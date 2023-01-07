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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _securitycenter_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./securitycenter.page.html?ngResource */ 5038);
/* harmony import */ var _securitycenter_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./securitycenter.page.scss?ngResource */ 84046);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let SecuritycenterPage = class SecuritycenterPage {
    constructor(router) {
        this.router = router;
        this.title = 'Security Center';
        this.setmpinFlag = true;
    }
    ngOnInit() {
        this.mpin = localStorage.getItem("mpin");
        console.log(this.mpin);
        // this.mpin=null;
        if (this.mpin == null || this.mpin == '') {
            this.setmpinFlag = true;
        }
        else {
            this.setmpinFlag = false;
        }
    }
    goToHome() {
        this.router.navigate(['/profile']);
    }
    setmpin() {
        this.router.navigate(['/mpinotpvalidate']);
    }
    changempin() {
        this.router.navigate(['/changempin']);
    }
    changePassword() {
        this.router.navigate(['/changepassword']);
    }
};
SecuritycenterPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
SecuritycenterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
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

module.exports = ".new-background-color {\n  --background: #ECF3F2;\n}\n\n.backIcon {\n  font-size: x-large;\n  margin-bottom: 4%;\n  color: #102245;\n  display: inline-block;\n  vertical-align: middle;\n  opacity: 100%;\n}\n\n.text {\n  margin-left: 2%;\n  margin-bottom: 4%;\n  display: inline-block;\n  vertical-align: middle;\n  color: #102245;\n  font-size: 15pt;\n  opacity: 100%;\n  font-weight: 800;\n}\n\n.labelCard {\n  font-family: \"Montserrat\" !important;\n  opacity: 75%;\n  font-size: 13pt;\n  margin-bottom: 10%;\n  margin-left: 5%;\n}\n\n.iconCard {\n  margin-bottom: 8%;\n}\n\n.item {\n  max-width: 95% !important;\n  list-style: none;\n  display: list-item;\n  margin-top: 10%;\n}\n\n.newCard {\n  font-family: \"Montserrat\" !important;\n  opacity: 114%;\n  font-size: large;\n  margin-bottom: 10%;\n  margin-left: 3%;\n}\n\n.icon {\n  margin-left: 25%;\n  margin-top: 10%;\n  font-family: \"Montserrat\";\n}\n\n.icon2 {\n  margin-left: 5%;\n  width: 10%;\n  margin-bottom: 8%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlY3VyaXR5Y2VudGVyLnBhZ2Uuc2NzcyIsIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXEdpdEh1YiUyMFJlcG9zaXRvcnklMjBvbGRcXGlDdXN0TW9iaWxlLXYyXFxzcmNcXGFwcFxccGFnZXNcXHNlY3VyaXR5Y2VudGVyXFxzZWN1cml0eWNlbnRlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFFQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQ0FKOztBREVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0YscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDSSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDRUo7O0FEQUE7RUFDSSxpQkFBQTtBQ0dKOztBREFBO0VBQ0cseUJBQUE7RUFDQSxnQkFBQTtFQUNDLGtCQUFBO0VBQ0EsZUFBQTtBQ0dKOztBRERBO0VBQ0ksb0NBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNJSjs7QURGQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDS0o7O0FESEE7RUFDSSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDTUoiLCJmaWxlIjoic2VjdXJpdHljZW50ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5ldy1iYWNrZ3JvdW5kLWNvbG9ye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjRUNGM0YyO1xyXG4gICAgXHJcbn1cclxuLmJhY2tJY29ue1xyXG4gICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICBcclxuICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gICAgY29sb3I6IzEwMjI0NTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICBvcGFjaXR5OiAxMDAlO1xyXG59XHJcbi50ZXh0e1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgY29sb3I6ICMxMDIyNDU7XHJcbiAgZm9udC1zaXplOiAxNXB0O1xyXG4gIG9wYWNpdHk6IDEwMCU7XHJcbiAgZm9udC13ZWlnaHQ6IDgwMDtcclxufVxyXG4ubGFiZWxDYXJke1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogNzUlO1xyXG4gICAgZm9udC1zaXplOiAxM3B0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG59XHJcbi5pY29uQ2FyZHtcclxuICAgIG1hcmdpbi1ib3R0b206IDglO1xyXG4gICAgXHJcbn1cclxuLml0ZW17XHJcbiAgIG1heC13aWR0aDogOTUlICFpbXBvcnRhbnQ7XHJcbiAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBkaXNwbGF5Omxpc3QtaXRlbTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxufVxyXG4ubmV3Q2FyZHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgIG9wYWNpdHk6IDExNCU7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG59XHJcbi5pY29ue1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI1JTtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCc7XHJcbn1cclxuLmljb24ye1xyXG4gICAgbWFyZ2luLWxlZnQ6IDUlO1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDglO1xyXG5cclxufVxyXG4iLCIubmV3LWJhY2tncm91bmQtY29sb3Ige1xuICAtLWJhY2tncm91bmQ6ICNFQ0YzRjI7XG59XG5cbi5iYWNrSWNvbiB7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgbWFyZ2luLWJvdHRvbTogNCU7XG4gIGNvbG9yOiAjMTAyMjQ1O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIG9wYWNpdHk6IDEwMCU7XG59XG5cbi50ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBtYXJnaW4tYm90dG9tOiA0JTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBjb2xvcjogIzEwMjI0NTtcbiAgZm9udC1zaXplOiAxNXB0O1xuICBvcGFjaXR5OiAxMDAlO1xuICBmb250LXdlaWdodDogODAwO1xufVxuXG4ubGFiZWxDYXJkIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDc1JTtcbiAgZm9udC1zaXplOiAxM3B0O1xuICBtYXJnaW4tYm90dG9tOiAxMCU7XG4gIG1hcmdpbi1sZWZ0OiA1JTtcbn1cblxuLmljb25DYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogOCU7XG59XG5cbi5pdGVtIHtcbiAgbWF4LXdpZHRoOiA5NSUgIWltcG9ydGFudDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZGlzcGxheTogbGlzdC1pdGVtO1xuICBtYXJnaW4tdG9wOiAxMCU7XG59XG5cbi5uZXdDYXJkIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDExNCU7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIG1hcmdpbi1ib3R0b206IDEwJTtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xufVxuXG4uaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAyNSU7XG4gIG1hcmdpbi10b3A6IDEwJTtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiO1xufVxuXG4uaWNvbjIge1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIHdpZHRoOiAxMCU7XG4gIG1hcmdpbi1ib3R0b206IDglO1xufSJdfQ== */";

/***/ }),

/***/ 5038:
/*!**************************************************************************!*\
  !*** ./src/app/pages/securitycenter/securitycenter.page.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar style=\"padding-top: 7%; padding-left: 3%;\" class=\"new-background-color\">\r\n    <ion-icon class=\"backIcon\" name=\"chevron-back-outline\" (click)=\"goToHome()\"></ion-icon>\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img style=\"width: 10%; margin-bottom: 5%;\" src=\"assets\\icon\\key.png\" alt=\"Ionic logo\">\r\n      <!-- <ion-icon name=\"albums-outline\" style=\"color: #456EFE;\" class=\"iconCard\" ></ion-icon>&nbsp;&nbsp;&nbsp; -->\r\n      <ion-label class=\"labelCard\">\r\n      Change Password\r\n      </ion-label>\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\" class=\"iconCard\" (click)=\"changePassword()\"></ion-icon>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img style=\"width: 10%; margin-bottom: 5%;\" src=\"assets\\icon\\transactionicon.png\" alt=\"Ionic logo\">\r\n      <!-- <ion-icon name=\"albums-outline\" style=\"color: #456EFE;\" class=\"iconCard\"></ion-icon>&nbsp;&nbsp;&nbsp; -->\r\n      <ion-label class=\"labelCard\">\r\n     My Tranaction Limits\r\n       \r\n      </ion-label>\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\" class=\"iconCard\"></ion-icon>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img style=\"width: 10%; margin-bottom: 5%;\" src=\"assets\\icon\\serviceicon.png\" alt=\"Ionic logo\">\r\n      <!-- <ion-icon name=\"albums-outline\" style=\"color: #456EFE;\" class=\"iconCard\"></ion-icon>&nbsp;&nbsp;&nbsp; -->\r\n      <ion-label class=\"labelCard\">\r\n    Manage Your Card\r\n      </ion-label>\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\" class=\"iconCard\"></ion-icon>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img style=\"width: 10%; margin-bottom: 5%;\" src=\"assets\\icon\\transactionicon.png\" alt=\"Ionic logo\">\r\n      <!-- <ion-icon name=\"albums-outline\" style=\"color: #456EFE;\" class=\"iconCard\"></ion-icon>&nbsp;&nbsp;&nbsp; -->\r\n      <ion-label class=\"labelCard\">\r\n  Login Activity\r\n      </ion-label>\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\" class=\"iconCard\"></ion-icon>\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img style=\"width: 10%; margin-bottom: 5%;\" src=\"assets\\icon\\Group.png\" alt=\"Ionic logo\">\r\n      <!-- <ion-icon name=\"albums-outline\" style=\"color: #456EFE;\" class=\"iconCard\"></ion-icon>&nbsp;&nbsp;&nbsp; -->\r\n      <!-- <ion-label class=\"labelCard\">\r\n        Enable/Disable Fingerprint\r\n      </ion-label> -->\r\n      <!-- <ion-item> -->\r\n       \r\n      <!-- </ion-item> -->\r\n      <!-- <ion-icon slot=\"end\" name=\"chevron-forward-outline\" class=\"iconCard\"></ion-icon> -->\r\n      <!-- <ion-item> -->\r\n        <ion-label class=\"labelCard\"> Enable/Disable Fingerprint</ion-label>\r\n        <ion-toggle slot=\"end\"></ion-toggle>\r\n      <!-- </ion-item> -->\r\n    </ion-item>\r\n  </div>\r\n  <div>\r\n    <ion-item class=\"item\">\r\n      <img style=\"width: 10%; margin-bottom: 5%;\" src=\"assets\\icon\\face-id.png\" alt=\"Ionic logo\">\r\n      <!-- <ion-icon name=\"albums-outline\" style=\"color: #456EFE;\" class=\"iconCard\"></ion-icon>&nbsp;&nbsp;&nbsp; -->\r\n      <!-- <ion-label class=\"labelCard\">\r\n        Enable/Disable Face ID\r\n      </ion-label> -->\r\n      <ion-label class=\"labelCard\">Enable/Disable Face ID</ion-label>\r\n      <ion-toggle slot=\"end\"></ion-toggle>\r\n    </ion-item>\r\n  </div>\r\n  <div *ngIf=\"setmpinFlag\">\r\n    <ion-item class=\"item\" lines=\"none\">\r\n      <img style=\"width: 10%; margin-bottom: 5%;\" src=\"assets\\icon\\Icon-feather.png\" alt=\"Ionic logo\">\r\n      <!-- <ion-icon name=\"albums-outline\" style=\"color: #456EFE;\" class=\"iconCard\"></ion-icon>&nbsp;&nbsp;&nbsp; -->\r\n      <ion-label class=\"labelCard\">\r\n        Set login mPIN\r\n      </ion-label>\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\" class=\"iconCard\" (click)=\"setmpin()\"></ion-icon>\r\n    </ion-item>\r\n  </div>\r\n  <div *ngIf=\"!setmpinFlag\">\r\n    <ion-item class=\"item\" lines=\"none\">\r\n      <img style=\"width: 10%; margin-bottom: 5%;\" src=\"assets\\icon\\Icon-feather.png\" alt=\"Ionic logo\">\r\n      <!-- <ion-icon name=\"albums-outline\" style=\"color: #456EFE;\" class=\"iconCard\"></ion-icon>&nbsp;&nbsp;&nbsp; -->\r\n      <ion-label class=\"labelCard\">\r\n        Change login mPIN\r\n      </ion-label>\r\n      <ion-icon slot=\"end\" name=\"chevron-forward-outline\" class=\"iconCard\" (click)=\"changempin()\"></ion-icon>\r\n    </ion-item>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_securitycenter_securitycenter_module_ts.js.map