"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_pages_unlockapp_unlockapp_page_ts"],{

/***/ 80581:
/*!***************************************************!*\
  !*** ./src/app/pages/unlockapp/unlockapp.page.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UnlockappPage": () => (/* binding */ UnlockappPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _unlockapp_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./unlockapp.page.html?ngResource */ 23685);
/* harmony import */ var _unlockapp_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./unlockapp.page.scss?ngResource */ 97363);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ 93819);






let UnlockappPage = class UnlockappPage {
    constructor(modalCtrl, router) {
        this.modalCtrl = modalCtrl;
        this.router = router;
    }
    ngOnInit() {
    }
    next() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalCtrl.dismiss();
        });
    }
    confirm() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.modalCtrl.dismiss();
            this.router.navigateByUrl('/securitycenter');
        });
    }
};
UnlockappPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__.ModalController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
UnlockappPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-unlockapp',
        template: _unlockapp_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_unlockapp_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UnlockappPage);



/***/ }),

/***/ 97363:
/*!****************************************************************!*\
  !*** ./src/app/pages/unlockapp/unlockapp.page.scss?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = ".mainDiv {\n  margin-top: 30px;\n}\n\n.new-background-color {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  --background: white;\n  height: -moz-fit-content;\n  height: fit-content;\n  display: inline-block;\n  vertical-align: middle;\n  color: #3477C6;\n  font-size: 13pt;\n  font-family: \"Montserrat\" !important;\n  box-shadow: none;\n}\n\n.selectAccId {\n  width: 100%;\n}\n\n.unlockImg {\n  margin-left: 40%;\n}\n\n.closeIcon {\n  margin-left: 90%;\n  font-size: 20px;\n  margin-top: -5%;\n}\n\n.btnclass {\n  font-size: 12px;\n  width: 140px;\n  height: 44px;\n  margin-left: 15px;\n}\n\n.dateRange {\n  margin-left: 10px;\n}\n\n.dateInput {\n  border: none;\n  width: 350px;\n}\n\n:host(.ion-focused) .item-native {\n  background: none;\n  opacity: var(--background-focused-opacity);\n}\n\n.id-text {\n  margin-left: 20%;\n}\n\n.otp-text {\n  margin-left: 7%;\n}\n\n.inputCardButton {\n  padding-left: 12%;\n  padding-right: 5%;\n}\n\n.inputCardButton ion-button {\n  width: 90%;\n  height: 45px;\n  --background: var(--primary-color);\n}\n\nion-label {\n  color: darkblue;\n  font-size: 20px;\n  margin-left: 20px;\n}\n\nion-row {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVubG9ja2FwcC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxHaXRIdWIlMjBSZXBvc2l0b3J5JTIwb2xkXFxpQ3VzdE1vYmlsZS12Mlxcc3JjXFxhcHBcXHBhZ2VzXFx1bmxvY2thcHBcXHVubG9ja2FwcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksNEJBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtFQUdBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUdBLG9DQUFBO0VBQ0EsZ0JBQUE7QUNISjs7QURPQTtFQUNJLFdBQUE7QUNKSjs7QURNQTtFQUNJLGdCQUFBO0FDSEo7O0FETUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDSEo7O0FETUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQ0hKOztBRE1BO0VBQ0ksaUJBQUE7QUNISjs7QURNQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDSEo7O0FETUE7RUFDSSxnQkFBQTtFQUNBLDBDQUFBO0FDSEo7O0FES0E7RUFDQSxnQkFBQTtBQ0ZBOztBRElBO0VBQ0ksZUFBQTtBQ0RKOztBRElBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQ0RKOztBREdJO0VBQ0UsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtBQ0ROOztBREtBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0ZKOztBREtBO0VBQ0ksZ0JBQUE7QUNGSiIsImZpbGUiOiJ1bmxvY2thcHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5EaXYge1xyXG4gICAgbWFyZ2luLXRvcDogMzBweFxyXG59XHJcblxyXG4ubmV3LWJhY2tncm91bmQtY29sb3Ige1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAvLyAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAvLyBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgY29sb3I6ICMzNDc3QzY7XHJcbiAgICBmb250LXNpemU6IDEzcHQ7XHJcbiAgICAvLyBwYWRkaW5nLXRvcDoyNHB0O1xyXG4gICAgLy8gcGFkZGluZy1sZWZ0OjRwdDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcblxyXG59XHJcblxyXG4uc2VsZWN0QWNjSWQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnVubG9ja0ltZ3tcclxuICAgIG1hcmdpbi1sZWZ0OiA0MCU7XHJcbn1cclxuXHJcbi5jbG9zZUljb24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDkwJTtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IC01JTtcclxufVxyXG5cclxuLmJ0bmNsYXNzIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIGhlaWdodDogNDRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4uZGF0ZVJhbmdlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG4uZGF0ZUlucHV0IHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHdpZHRoOiAzNTBweDtcclxufVxyXG5cclxuOmhvc3QoLmlvbi1mb2N1c2VkKSAuaXRlbS1uYXRpdmUge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIG9wYWNpdHk6IHZhcigtLWJhY2tncm91bmQtZm9jdXNlZC1vcGFjaXR5KTtcclxufVxyXG4uaWQtdGV4dHtcclxubWFyZ2luLWxlZnQ6IDIwJTtcclxufVxyXG4ub3RwLXRleHR7XHJcbiAgICBtYXJnaW4tbGVmdDogNyU7XHJcbn1cclxuXHJcbi5pbnB1dENhcmRCdXR0b24ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMiU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1JTtcclxuXHJcbiAgICBpb24tYnV0dG9uIHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAtLWJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbmlvbi1sYWJlbCB7XHJcbiAgICBjb2xvcjogZGFya2JsdWU7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5cclxuaW9uLXJvdyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4XHJcbn1cclxuXHJcbiIsIi5tYWluRGl2IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6ICMzNDc3QzY7XG4gIGZvbnQtc2l6ZTogMTNwdDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5zZWxlY3RBY2NJZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4udW5sb2NrSW1nIHtcbiAgbWFyZ2luLWxlZnQ6IDQwJTtcbn1cblxuLmNsb3NlSWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiA5MCU7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbWFyZ2luLXRvcDogLTUlO1xufVxuXG4uYnRuY2xhc3Mge1xuICBmb250LXNpemU6IDEycHg7XG4gIHdpZHRoOiAxNDBweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLmRhdGVSYW5nZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4uZGF0ZUlucHV0IHtcbiAgYm9yZGVyOiBub25lO1xuICB3aWR0aDogMzUwcHg7XG59XG5cbjpob3N0KC5pb24tZm9jdXNlZCkgLml0ZW0tbmF0aXZlIHtcbiAgYmFja2dyb3VuZDogbm9uZTtcbiAgb3BhY2l0eTogdmFyKC0tYmFja2dyb3VuZC1mb2N1c2VkLW9wYWNpdHkpO1xufVxuXG4uaWQtdGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG59XG5cbi5vdHAtdGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiA3JTtcbn1cblxuLmlucHV0Q2FyZEJ1dHRvbiB7XG4gIHBhZGRpbmctbGVmdDogMTIlO1xuICBwYWRkaW5nLXJpZ2h0OiA1JTtcbn1cbi5pbnB1dENhcmRCdXR0b24gaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogNDVweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbn1cblxuaW9uLWxhYmVsIHtcbiAgY29sb3I6IGRhcmtibHVlO1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG5pb24tcm93IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn0iXX0= */";

/***/ }),

/***/ 23685:
/*!****************************************************************!*\
  !*** ./src/app/pages/unlockapp/unlockapp.page.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <!-- <ion-icon name=\"close\" slot=\"end\"></ion-icon> -->\r\n<div class=\"mainDiv\">\r\n  <div>\r\n    <!-- <ion-label>Duration</ion-label> -->\r\n    <ion-icon name=\"close\" slot=\"end\" (click)=\"next()\" class=\"closeIcon\"></ion-icon>\r\n    <!-- <ion-item class=\"dateRange\"> -->\r\n      <!-- <ion-select class=\"selectAccId\" interface=\"popover\" placeholder=\"Select date Range\">\r\n        <ion-select-option\r\n          [value]=\"item\">\r\n            <div class=\"acc_num\">\r\n             Select Date Range\r\n            </div>\r\n        </ion-select-option>\r\n      </ion-select> -->\r\n    <!-- </ion-item> -->\r\n  </div>\r\n\r\n  <div>\r\n    <div class=\"unlockImg\">\r\n      <img src=\"assets/images/unlockId.png\"></div>\r\n      <div></div>\r\n      <!-- <ion-item lines=\"none\">\r\n        <h5>Unlock Demobank app</h5>\r\n        <p>Confirm your Fingerprint, Face ID & mPIN to quickly Sign in</p>\r\n      </ion-item> -->\r\n      <div>\r\n        <ion-text>\r\n          <h5 class=\"id-text\">Unlock Demobank app</h5>\r\n          <p class=\"otp-text\">Confirm your Fingerprint, Face ID & mPIN \r\n            <span style=\"margin-left:30%\">to quickly Sign in</span></p>\r\n          <!-- <h6>{{customerPhonenum}}</h6> -->\r\n        </ion-text>\r\n      </div>\r\n      <div class=\"inputCardButton\">\r\n        <ion-button\r\n          expand=\"block\"\r\n          shape=\"round\"\r\n          (click)=\"confirm()\"\r\n          >Confirm</ion-button\r\n        >\r\n      </div>\r\n\r\n    <!-- <ion-label>Date Range</ion-label> -->\r\n    <!-- <ion-item>\r\n      <input placeholder=\"From Date\" [owlDateTime]=\"dt1\" class=\"dateInput\" >\r\n        <span class=\"example-trigger\" [owlDateTimeTrigger]=\"dt1\">\r\n            <i class=\"fas fa-calendar-alt\"></i>\r\n        </span>\r\n        <owl-date-time [pickerType]=\"'calendar'\" #dt1></owl-date-time>\r\n       \r\n     </ion-item> -->\r\n     <!-- <ion-item>\r\n      <ion-datetime-button datetime=\"datetime2\" showTimeLabel=\"false\"></ion-datetime-button>\r\n      <ion-modal [keepContentsMounted]=\"true\" > \r\n        <ng-template>\r\n          <ion-datetime presentation=\"date\" id=\"datetime2\" displayFormat=\"DDD. MMM DD, YY\"></ion-datetime>\r\n        </ng-template>\r\n      </ion-modal>\r\n      <ion-icon name=\"calendar\" slot=\"end\"></ion-icon>\r\n     </ion-item> -->\r\n     <!-- <ion-item>\r\n      <ion-datetime-button datetime=\"datetime\" showTimeLabel=\"false\"></ion-datetime-button>\r\n      <ion-modal [keepContentsMounted]=\"true\" > \r\n        <ng-template>\r\n          <ion-datetime presentation=\"date\" id=\"datetime\" displayFormat=\"DDD. MMM DD, YY\"></ion-datetime>\r\n        </ng-template>\r\n      </ion-modal>\r\n      <ion-icon name=\"calendar\" slot=\"end\"></ion-icon>\r\n     </ion-item> -->\r\n     <!-- <ion-item>\r\n      <input placeholder=\"To Date\" [owlDateTime]=\"dt2\" class=\"dateInput\">\r\n      <span class=\"example-trigger\" [owlDateTimeTrigger]=\"dt2\">\r\n          <i class=\"fas fa-calendar-alt\"></i>\r\n      </span>\r\n      <owl-date-time [pickerType]=\"'calendar'\" #dt2></owl-date-time>\r\n     </ion-item> -->\r\n  </div>\r\n\r\n  <!-- <div>\r\n    <ion-row style=\"margin-top:20px\">\r\n      <ion-button shape=\"round\" size=\"large\" class=\"btnclass\" >Confirm</ion-button>\r\n      <ion-button shape=\"round\" color=\"danger\"  class=\"btnclass\"  (click)=\"next()\" size=\"large\">Cancle</ion-button>\r\n    </ion-row>\r\n \r\n  </div> -->\r\n</div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_pages_unlockapp_unlockapp_page_ts.js.map