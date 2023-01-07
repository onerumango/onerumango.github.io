"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_faq_faq_module_ts"],{

/***/ 20263:
/*!*************************************************!*\
  !*** ./src/app/pages/faq/faq-routing.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqPageRoutingModule": () => (/* binding */ FaqPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq.page */ 28601);




const routes = [
    {
        path: '',
        component: _faq_page__WEBPACK_IMPORTED_MODULE_0__.FaqPage
    }
];
let FaqPageRoutingModule = class FaqPageRoutingModule {
};
FaqPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], FaqPageRoutingModule);



/***/ }),

/***/ 87119:
/*!*****************************************!*\
  !*** ./src/app/pages/faq/faq.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqPageModule": () => (/* binding */ FaqPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _faq_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq-routing.module */ 20263);
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faq.page */ 28601);







let FaqPageModule = class FaqPageModule {
};
FaqPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _faq_routing_module__WEBPACK_IMPORTED_MODULE_0__.FaqPageRoutingModule
        ],
        declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_1__.FaqPage]
    })
], FaqPageModule);



/***/ }),

/***/ 28601:
/*!***************************************!*\
  !*** ./src/app/pages/faq/faq.page.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqPage": () => (/* binding */ FaqPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _faq_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./faq.page.html?ngResource */ 28953);
/* harmony import */ var _faq_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faq.page.scss?ngResource */ 51114);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let FaqPage = class FaqPage {
    constructor(router) {
        this.router = router;
        this.forwardarrow = true;
        this.downarrow = false;
        this.slno = 0;
        this.List = [
            {
                sno: 1,
                title: 'How can I access/use/utilize the amount credited to my overdraft account ?',
                description: 'The overdraft account will be like any other transaction account with a limit up to which you can utilize the amount. The amount in the account can be transferred using this platform.'
            },
            {
                sno: 2,
                title: 'Can I use same account for accessing multiple accounts ?',
                description: 'Yes you can use same account for accessing multiple accounts.'
            },
            {
                sno: 3,
                title: 'How can I pay my utility bill payment service through this app ?',
                description: 'Yes you can pay your utility bill payment service through this app.'
            },
        ];
    }
    ngOnInit() {
    }
    rotateforwardarrow(item) {
        console.log(item);
        this.faqDesc = item.description;
        this.slno = item.sno;
        this.forwardarrow = false;
        this.downarrow = true;
    }
    rotatedownarrow(item) {
        console.log(item);
        this.faqDesc = item.description;
        this.slno = item.sno;
        this.forwardarrow = true;
        this.downarrow = false;
    }
    goToHome() {
        this.router.navigate(['/profile']);
    }
};
FaqPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
FaqPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-faq',
        template: _faq_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_faq_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], FaqPage);



/***/ }),

/***/ 51114:
/*!****************************************************!*\
  !*** ./src/app/pages/faq/faq.page.scss?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = ".backIcon {\n  font-size: x-large;\n  margin-bottom: 4%;\n  color: #102245;\n  display: inline-block;\n  vertical-align: middle;\n  opacity: 100%;\n}\n\n.text {\n  margin-left: 2%;\n  margin-bottom: 4%;\n  display: inline-block;\n  vertical-align: middle;\n  color: #102245;\n  font-size: large;\n  font-weight: bolder;\n  opacity: 70%;\n}\n\n.new-background-color {\n  --background: #ecf3f2;\n}\n\n.labelcard {\n  font-family: \"Montserrat\" !important;\n  opacity: 75%;\n  font-size: 13pt;\n  margin-bottom: 7%;\n}\n\n.item {\n  max-width: 95% !important;\n  list-style: none;\n  display: list-item;\n  height: 20%;\n}\n\n.newCard1 {\n  font-family: \"Montserrat\" !important;\n  opacity: 60%;\n  font-size: large;\n  margin-top: 4%;\n  margin-bottom: 5%;\n  margin-left: 3%;\n  font-weight: bold;\n}\n\n.newCard2 {\n  font-family: \"Montserrat-SemiBold\" !important;\n  opacity: 100%;\n  font-size: 16pt;\n  margin-top: 4%;\n  margin-bottom: 5%;\n  margin-left: 3%;\n}\n\n.iconCard {\n  margin-bottom: 8%;\n}\n\n.searchbar {\n  padding: 4%;\n}\n\n.searchbar ion-searchbar {\n  border: 2px solid #456efe;\n  height: 50px;\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhcS5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxHaXRIdWIlMjBSZXBvc2l0b3J5JTIwb2xkXFxpQ3VzdE1vYmlsZS12Mlxcc3JjXFxhcHBcXHBhZ2VzXFxmYXFcXGZhcS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUVBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FDQUY7O0FERUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtBQ0NGOztBRENBO0VBQ0Usb0NBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQUE7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FDR0Y7O0FEQUE7RUFDRSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0dGOztBRERBO0VBRUUsNkNBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUNHRjs7QURDQTtFQUNFLGlCQUFBO0FDRUY7O0FEQ0E7RUFDRSxXQUFBO0FDRUY7O0FEREU7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtBQ0dKIiwiZmlsZSI6ImZhcS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja0ljb24ge1xyXG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuXHJcbiAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgY29sb3I6ICMxMDIyNDU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgb3BhY2l0eTogMTAwJTtcclxufVxyXG4udGV4dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGNvbG9yOiAjMTAyMjQ1O1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBvcGFjaXR5OiA3MCU7XHJcbn1cclxuXHJcbi5uZXctYmFja2dyb3VuZC1jb2xvciB7XHJcbiAgLS1iYWNrZ3JvdW5kOiAjZWNmM2YyO1xyXG59XHJcbi5sYWJlbGNhcmQge1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIG9wYWNpdHk6IDc1JTtcclxuICBmb250LXNpemU6IDEzcHQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNyU7XHJcbn1cclxuLml0ZW0ge1xyXG4gIG1heC13aWR0aDogOTUlICFpbXBvcnRhbnQ7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICBkaXNwbGF5OiBsaXN0LWl0ZW07XHJcbiAgaGVpZ2h0OiAyMCU7XHJcbn1cclxuXHJcbi5uZXdDYXJkMSB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogNjAlO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgbWFyZ2luLXRvcDogNCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgbWFyZ2luLWxlZnQ6IDMlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5uZXdDYXJkMiB7XHJcbiAgLy8gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0LVNlbWlCb2xkXCIgIWltcG9ydGFudDtcclxuICBvcGFjaXR5OiAxMDAlO1xyXG4gIGZvbnQtc2l6ZTogMTZwdDtcclxuICBtYXJnaW4tdG9wOiA0JTtcclxuICBtYXJnaW4tYm90dG9tOiA1JTtcclxuICBtYXJnaW4tbGVmdDogMyU7XHJcbiAgLy8gIGNvbG9yOiAjMTAyMjQ1O1xyXG59XHJcblxyXG4uaWNvbkNhcmQge1xyXG4gIG1hcmdpbi1ib3R0b206IDglO1xyXG59XHJcblxyXG4uc2VhcmNoYmFyIHtcclxuICBwYWRkaW5nOiA0JTtcclxuICBpb24tc2VhcmNoYmFyIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICM0NTZlZmU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxufVxyXG4iLCIuYmFja0ljb24ge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIG1hcmdpbi1ib3R0b206IDQlO1xuICBjb2xvcjogIzEwMjI0NTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICBvcGFjaXR5OiAxMDAlO1xufVxuXG4udGV4dCB7XG4gIG1hcmdpbi1sZWZ0OiAyJTtcbiAgbWFyZ2luLWJvdHRvbTogNCU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgY29sb3I6ICMxMDIyNDU7XG4gIGZvbnQtc2l6ZTogbGFyZ2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIG9wYWNpdHk6IDcwJTtcbn1cblxuLm5ldy1iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZWNmM2YyO1xufVxuXG4ubGFiZWxjYXJkIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG4gIG9wYWNpdHk6IDc1JTtcbiAgZm9udC1zaXplOiAxM3B0O1xuICBtYXJnaW4tYm90dG9tOiA3JTtcbn1cblxuLml0ZW0ge1xuICBtYXgtd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG4gIGhlaWdodDogMjAlO1xufVxuXG4ubmV3Q2FyZDEge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcbiAgb3BhY2l0eTogNjAlO1xuICBmb250LXNpemU6IGxhcmdlO1xuICBtYXJnaW4tdG9wOiA0JTtcbiAgbWFyZ2luLWJvdHRvbTogNSU7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5uZXdDYXJkMiB7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXQtU2VtaUJvbGRcIiAhaW1wb3J0YW50O1xuICBvcGFjaXR5OiAxMDAlO1xuICBmb250LXNpemU6IDE2cHQ7XG4gIG1hcmdpbi10b3A6IDQlO1xuICBtYXJnaW4tYm90dG9tOiA1JTtcbiAgbWFyZ2luLWxlZnQ6IDMlO1xufVxuXG4uaWNvbkNhcmQge1xuICBtYXJnaW4tYm90dG9tOiA4JTtcbn1cblxuLnNlYXJjaGJhciB7XG4gIHBhZGRpbmc6IDQlO1xufVxuLnNlYXJjaGJhciBpb24tc2VhcmNoYmFyIHtcbiAgYm9yZGVyOiAycHggc29saWQgIzQ1NmVmZTtcbiAgaGVpZ2h0OiA1MHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufSJdfQ== */";

/***/ }),

/***/ 28953:
/*!****************************************************!*\
  !*** ./src/app/pages/faq/faq.page.html?ngResource ***!
  \****************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar style=\"padding-top: 7%\" class=\"new-background-color\">\r\n    <ion-icon\r\n      class=\"backIcon\"\r\n      name=\"chevron-back-outline\"\r\n      (click)=\"goToHome()\"\r\n    ></ion-icon>\r\n    <span class=\"text\">FAQ</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"searchbar\">\r\n    <ion-searchbar mode=\"ios\"></ion-searchbar>\r\n  </div>\r\n\r\n  <ion-list *ngFor=\"let item of List\">\r\n    <ion-item Lines=\"none\">\r\n      <ion-text class=\"newCard1\">{{item.title}}</ion-text>\r\n\r\n      <ion-icon\r\n        *ngIf=\"forwardarrow || (downarrow && slno!=item.sno) || slno ==0\"\r\n        slot=\"end\"\r\n        name=\"chevron-forward-outline\"\r\n        class=\"iconCard\"\r\n        (click)=\"rotateforwardarrow(item)\"\r\n      ></ion-icon>\r\n      <ion-icon\r\n        *ngIf=\"downarrow && slno==item.sno\"\r\n        slot=\"end\"\r\n        name=\"chevron-down-outline\"\r\n        class=\"iconCard\"\r\n        (click)=\"rotatedownarrow(item)\"\r\n      ></ion-icon>\r\n    </ion-item>\r\n    <ion-item style=\"margin-top: -4%\">\r\n      <ion-text class=\"newCard2\" *ngIf=\"downarrow && slno==item.sno\"\r\n        >{{item.description}}</ion-text\r\n      >\r\n      <!-- <ion-text style=\"display: flex;\" *ngIf=\"downarrow\" class=\"newCard\">{{faqDesc}}</ion-text>   -->\r\n    </ion-item>\r\n  </ion-list>\r\n  <!-- <div *ngFor=\"let item of List\">\r\n    <ion-item class=\"item\"  Lines=\"none\" >\r\n      <ion-text class=\"newCard\">{{item.title}}</ion-text> \r\n      <ion-icon *ngIf=\"forwardarrow\" slot=\"end\" name=\"chevron-forward-outline\" class=\"iconCard\" (click)=\"rotateforwardarrow()\"></ion-icon>\r\n      <ion-icon *ngIf=\"downarrow\" slot=\"end\" name=\"chevron-down-outline\" class=\"iconCard\" (click)=\"rotatedownarrow()\"></ion-icon>\r\n      </ion-item>\r\n    <ion-item>\r\n      <ion-text *ngIf=\"downarrow\" class=\"newCard\">{{item.description}}</ion-text> \r\n    </ion-item>\r\n  </div> -->\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_faq_faq_module_ts.js.map