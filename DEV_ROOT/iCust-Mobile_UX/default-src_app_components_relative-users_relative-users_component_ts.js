"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_components_relative-users_relative-users_component_ts"],{

/***/ 68252:
/*!***********************************************************************************!*\
  !*** ./src/app/components/relative-user-select/relative-user-select.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RelativeUserSelectComponent": () => (/* binding */ RelativeUserSelectComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _relative_user_select_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./relative-user-select.component.html?ngResource */ 40921);
/* harmony import */ var _relative_user_select_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./relative-user-select.component.scss?ngResource */ 52321);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let RelativeUserSelectComponent = class RelativeUserSelectComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() { }
    onSelect(item) {
        this.selectedUser = item;
    }
    close() {
        this.modalCtrl.dismiss(this.selectedUser);
    }
    back() {
        this.modalCtrl.dismiss();
    }
};
RelativeUserSelectComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
RelativeUserSelectComponent.propDecorators = {
    users: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input }]
};
RelativeUserSelectComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-relative-user-select',
        template: _relative_user_select_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_relative_user_select_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RelativeUserSelectComponent);



/***/ }),

/***/ 46351:
/*!***********************************************************************!*\
  !*** ./src/app/components/relative-users/relative-users.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RelativeUsersComponent": () => (/* binding */ RelativeUsersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _relative_users_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./relative-users.component.html?ngResource */ 63982);
/* harmony import */ var _relative_users_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./relative-users.component.scss?ngResource */ 18634);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _relative_user_select_relative_user_select_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../relative-user-select/relative-user-select.component */ 68252);






let RelativeUsersComponent = class RelativeUsersComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() { }
    onSelect(item) {
        this.selectedUser = item;
        setTimeout(() => {
            this.modalCtrl.dismiss(this.selectedUser);
        }, 500);
    }
    // Opening relative user sheet
    openUserModal() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _relative_user_select_relative_user_select_component__WEBPACK_IMPORTED_MODULE_2__.RelativeUserSelectComponent,
                cssClass: 'user-modal',
                componentProps: {
                    users: this.users,
                },
                backdropDismiss: false,
            });
            yield modal.present();
            modal.onDidDismiss().then((res) => {
                if (res === null || res === void 0 ? void 0 : res.data) {
                    this.modalCtrl.dismiss(res === null || res === void 0 ? void 0 : res.data);
                }
            });
        });
    }
};
RelativeUsersComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController }
];
RelativeUsersComponent.propDecorators = {
    users: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }],
    mobile: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.Input }]
};
RelativeUsersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-relative-users',
        template: _relative_users_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_relative_users_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RelativeUsersComponent);



/***/ }),

/***/ 52321:
/*!************************************************************************************************!*\
  !*** ./src/app/components/relative-user-select/relative-user-select.component.scss?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "ion-searchbar.usersearch {\n  --color: #fff;\n  --placeholder-color: #fff;\n  --icon-color: #fff;\n  --clear-button-color: #fff;\n  --border-radius: 4px;\n}\n\n.box-content {\n  margin-left: 6px;\n  margin-right: 6px;\n}\n\n.search-header {\n  background: #000000;\n  color: #ffffff;\n}\n\nion-avatar {\n  width: 16px !important;\n  height: 16px !important;\n}\n\nion-item.relative-user {\n  --highlight-color-valid: #0d2e4b !important;\n  --background: #001729;\n  color: #ffffff;\n  border: 1px solid #0d2e4b;\n  margin-bottom: 12px;\n  border-radius: 10px;\n}\n\nion-button.back {\n  width: 150px;\n  height: 40px;\n  margin-top: 30px;\n  font-size: 10px;\n  text-transform: capitalize;\n  --background: #ffffff;\n  --color: #B20000 !important;\n}\n\nion-button.accept {\n  width: 150px;\n  height: 40px;\n  margin-top: 30px;\n  font-size: 10px;\n  text-transform: capitalize;\n  --background: linear-gradient(90deg, #051a2d, #004c97);\n  --color: #ffffff;\n}\n\n.footer-bottom {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbGF0aXZlLXVzZXItc2VsZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUFDRjs7QUFFQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLDJDQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLHNEQUFBO0VBQ0EsZ0JBQUE7QUFDRjs7QUFFQTtFQUNJLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFDSiIsImZpbGUiOiJyZWxhdGl2ZS11c2VyLXNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1zZWFyY2hiYXIudXNlcnNlYXJjaCB7XHJcbiAgLS1jb2xvcjogI2ZmZjtcclxuICAtLXBsYWNlaG9sZGVyLWNvbG9yOiAjZmZmO1xyXG4gIC0taWNvbi1jb2xvcjogI2ZmZjtcclxuICAtLWNsZWFyLWJ1dHRvbi1jb2xvcjogI2ZmZjtcclxuICAtLWJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLmJveC1jb250ZW50IHtcclxuICBtYXJnaW4tbGVmdDogNnB4O1xyXG4gIG1hcmdpbi1yaWdodDogNnB4O1xyXG59XHJcblxyXG4uc2VhcmNoLWhlYWRlciB7XHJcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG5cclxuaW9uLWF2YXRhciB7XHJcbiAgd2lkdGg6IDE2cHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDE2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuaW9uLWl0ZW0ucmVsYXRpdmUtdXNlciB7XHJcbiAgLS1oaWdobGlnaHQtY29sb3ItdmFsaWQ6ICMwZDJlNGIgIWltcG9ydGFudDtcclxuICAtLWJhY2tncm91bmQ6ICMwMDE3Mjk7XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzBkMmU0YjtcclxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbmlvbi1idXR0b24uYmFjayB7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAtLWNvbG9yOiAjQjIwMDAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuaW9uLWJ1dHRvbi5hY2NlcHQge1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogMzBweDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMwNTFhMmQsICMwMDRjOTcpO1xyXG4gIC0tY29sb3I6ICNmZmZmZmY7XHJcbn1cclxuXHJcbi5mb290ZXItYm90dG9tIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiJdfQ== */";

/***/ }),

/***/ 18634:
/*!************************************************************************************!*\
  !*** ./src/app/components/relative-users/relative-users.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "ion-content {\n  --background: #051a2d;\n  --padding-start: 26px;\n  --padding-end: 26px;\n}\n\nion-list {\n  background: transparent !important;\n}\n\nion-item.relative-user {\n  --highlight-color-valid: #0d2e4b !important;\n  --background: #001729;\n  color: #ffffff;\n  border: 1px solid #0d2e4b;\n  margin-bottom: 12px;\n  border-radius: 10px;\n}\n\nion-item.add-user {\n  --background: transparent !important;\n  --padding-start: 3px;\n  color: #ffffff;\n  margin-bottom: 12px;\n}\n\nion-item.add-user p {\n  font-size: 10px;\n}\n\n.box {\n  width: 60px;\n  height: 60px;\n  text-align: center;\n  border: 1px dashed rgba(255, 255, 255, 0.5019607843);\n  padding: 6px;\n  font-size: 36px;\n  border-radius: 6px;\n}\n\nion-avatar {\n  width: 16px !important;\n  height: 16px !important;\n}\n\n.header-content h3 {\n  color: #ffffff;\n  font-size: 20px;\n}\n\n.header-content p {\n  color: #707070;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlbGF0aXZlLXVzZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0UsMkNBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLG9DQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDRTtFQUNFLGVBQUE7QUFDSjs7QUFHQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxvREFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFBSjs7QUFHQTtFQUNFLHNCQUFBO0VBQ0EsdUJBQUE7QUFBRjs7QUFJRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBREo7O0FBR0U7RUFDRSxjQUFBO0VBQ0EsZUFBQTtBQURKIiwiZmlsZSI6InJlbGF0aXZlLXVzZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC0tYmFja2dyb3VuZDogIzA1MWEyZDtcclxuICAtLXBhZGRpbmctc3RhcnQ6IDI2cHg7XHJcbiAgLS1wYWRkaW5nLWVuZDogMjZweDtcclxufVxyXG5cclxuaW9uLWxpc3Qge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbmlvbi1pdGVtLnJlbGF0aXZlLXVzZXIge1xyXG4gIC0taGlnaGxpZ2h0LWNvbG9yLXZhbGlkOiAjMGQyZTRiICFpbXBvcnRhbnQ7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjMDAxNzI5O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwZDJlNGI7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG5pb24taXRlbS5hZGQtdXNlciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xyXG4gIC0tcGFkZGluZy1zdGFydDogM3B4O1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmJveCB7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlcjogMXB4IGRhc2hlZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTAxOTYwNzg0Myk7XHJcbiAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuXHJcbmlvbi1hdmF0YXIge1xyXG4gIHdpZHRoOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAxNnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5oZWFkZXItY29udGVudCB7XHJcbiAgaDMge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgY29sb3I6ICM3MDcwNzA7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";

/***/ }),

/***/ 40921:
/*!************************************************************************************************!*\
  !*** ./src/app/components/relative-user-select/relative-user-select.component.html?ngResource ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <div class=\"search-header\">\r\n    <ion-searchbar\r\n      placeholder=\"Search\"\r\n      class=\"usersearch\"\r\n      [(ngModel)]=\"term\"\r\n      showClearButton=\"never\"\r\n    ></ion-searchbar>\r\n  </div>\r\n  <div class=\"my-1 box-content\">\r\n    <ion-list lines=\"none\" mode=\"md\" class=\"\">\r\n      <ion-item\r\n        class=\"relative-user\"\r\n        *ngFor=\"let item of users | filter : term\"\r\n        (click)=\"onSelect(item)\"\r\n      >\r\n        <ion-avatar slot=\"start\">\r\n          <img\r\n            alt=\"ring\"\r\n            [src]=\"\r\n            selectedUser?.customerId === item?.customerId\r\n                ? '/assets/radio_ring_dark.svg'\r\n                : '/assets/radio_ring_light.svg'\r\n            \"\r\n          />\r\n        </ion-avatar>\r\n        <ion-label>\r\n          <h3>{{ item?.prefix }} {{ item?.firstName }} {{item?.middleName}} {{item.lastName}}</h3>\r\n          <p>{{ item?.customerId }}</p>\r\n        </ion-label>\r\n      </ion-item>\r\n    </ion-list>\r\n  </div>\r\n\r\n  <div\r\n    fxLayout=\"row\"\r\n    fxLayoutAlign=\"center center\"\r\n    fxLayoutGap=\"20px\"\r\n    class=\"pb-2 footer-bottom\"\r\n  >\r\n    <div>\r\n      <ion-button\r\n        shape=\"round\"\r\n        class=\"accept\"\r\n        [disabled]=\"!selectedUser\"\r\n        (click)=\"close()\"\r\n        >Confirm</ion-button\r\n      >\r\n    </div>\r\n    <div>\r\n      <ion-button shape=\"round\" class=\"back\" (click)=\"back()\">Back</ion-button>\r\n    </div>\r\n  </div>\r\n</ion-content>\r\n";

/***/ }),

/***/ 63982:
/*!************************************************************************************!*\
  !*** ./src/app/components/relative-users/relative-users.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"relative-modal\">\r\n  <div class=\"header-content text-center\">\r\n    <h3>Select Customer</h3>\r\n    <p>\r\n      You are having {{users.length}} Customers using this number <br />\r\n      (+91) {{mobile}}\r\n    </p>\r\n  </div>\r\n  <ion-list lines=\"none\" mode=\"md\">\r\n    <ion-item\r\n      class=\"relative-user\"\r\n      *ngFor=\"let item of users; let i = index\"\r\n      (click)=\"onSelect(item)\"\r\n    >\r\n      <ion-avatar slot=\"start\">\r\n        <img\r\n          alt=\"ring\"\r\n          [src]=\"\r\n            selectedUser?.customerId === item?.customerId\r\n              ? '/assets/radio_ring_dark.svg'\r\n              : '/assets/radio_ring_light.svg'\r\n          \"\r\n        />\r\n      </ion-avatar>\r\n      <ion-label>\r\n        <h3>{{ item?.prefix }} {{ item?.firstName }} {{item?.middleName}} {{item.lastName}}</h3>\r\n        <p>{{ item?.customerId }}</p>\r\n      </ion-label>\r\n      <ion-icon\r\n        *ngIf=\"selectedUser?.customerId === item?.customerId\"\r\n        [src]=\"'/assets/icon/v2/tick.svg'\"\r\n        slot=\"end\"\r\n      ></ion-icon>\r\n    </ion-item>\r\n  </ion-list>\r\n\r\n  \r\n    <ion-item class=\"add-user\" (click)=\"openUserModal()\">\r\n      <div class=\"box\">\r\n        <ion-icon name=\"add-outline\" slot=\"start\"></ion-icon>\r\n      </div>\r\n      <ion-label class=\"mx-2\">\r\n        <h3>Add Customer</h3>\r\n        <p>Search using Account number, Customer ID</p>\r\n      </ion-label>\r\n    </ion-item>\r\n \r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=default-src_app_components_relative-users_relative-users_component_ts.js.map