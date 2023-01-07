(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-faq-faq-module"],{

/***/ "CMu8":
/*!***************************************!*\
  !*** ./src/app/views/faq/faq.page.ts ***!
  \***************************************/
/*! exports provided: FaqPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPage", function() { return FaqPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_faq_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./faq.page.html */ "iwG9");
/* harmony import */ var _faq_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq.page.scss */ "J0vF");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





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
        this.router.navigate(['/tabs/profile']);
    }
};
FaqPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
FaqPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-faq',
        template: _raw_loader_faq_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_faq_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FaqPage);



/***/ }),

/***/ "DlsV":
/*!*****************************************!*\
  !*** ./src/app/views/faq/faq.module.ts ***!
  \*****************************************/
/*! exports provided: FaqPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageModule", function() { return FaqPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faq-routing.module */ "LMCD");
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faq.page */ "CMu8");







let FaqPageModule = class FaqPageModule {
};
FaqPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__["FaqPageRoutingModule"]
        ],
        declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_6__["FaqPage"]]
    })
], FaqPageModule);



/***/ }),

/***/ "J0vF":
/*!*****************************************!*\
  !*** ./src/app/views/faq/faq.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".backIcon {\n  font-size: x-large;\n  margin-bottom: 4%;\n  color: #102245;\n  display: inline-block;\n  vertical-align: middle;\n  opacity: 100%;\n}\n\n.text {\n  margin-left: 2%;\n  margin-bottom: 4%;\n  display: inline-block;\n  vertical-align: middle;\n  color: #102245;\n  font-size: large;\n  opacity: 70%;\n}\n\n.new-background-color {\n  --background: #ECF3F2;\n}\n\n.labelcard {\n  font-family: \"Montserrat\" !important;\n  opacity: 75%;\n  font-size: 13pt;\n  margin-bottom: 7%;\n}\n\n.item {\n  max-width: 95% !important;\n  list-style: none;\n  display: list-item;\n  height: 20%;\n}\n\n.newCard1 {\n  font-family: \"Montserrat\" !important;\n  opacity: 55%;\n  font-size: large;\n  margin-top: 4%;\n  margin-bottom: 5%;\n  margin-left: 3%;\n}\n\n.newCard2 {\n  font-family: \"Montserrat-SemiBold\" !important;\n  opacity: 100%;\n  font-size: 16pt;\n  margin-top: 4%;\n  margin-bottom: 5%;\n  margin-left: 3%;\n}\n\n.iconCard {\n  margin-bottom: 8%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmYXEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFFQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQUFKOztBQUVBO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0YscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQ0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNHLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQyxrQkFBQTtFQUNBLFdBQUE7QUFDSjs7QUFHQTtFQUNJLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0MsY0FBQTtFQUNELGlCQUFBO0VBQ0MsZUFBQTtBQUFMOztBQUVBO0VBRUssNkNBQUE7RUFDRCxhQUFBO0VBQ0EsZUFBQTtFQUNDLGNBQUE7RUFDRCxpQkFBQTtFQUNDLGVBQUE7QUFBTDs7QUFLQTtFQUNJLGlCQUFBO0FBRkoiLCJmaWxlIjoiZmFxLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrSWNvbntcclxuICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgXHJcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICAgIGNvbG9yOiMxMDIyNDU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgb3BhY2l0eTogMTAwJTtcclxufVxyXG4udGV4dHtcclxuICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDQlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGNvbG9yOiAjMTAyMjQ1O1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2U7XHJcbiAgb3BhY2l0eTogNzAlO1xyXG59XHJcblxyXG4ubmV3LWJhY2tncm91bmQtY29sb3J7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNFQ0YzRjI7XHJcbiAgICBcclxufVxyXG4ubGFiZWxjYXJke1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogNzUlO1xyXG4gICAgZm9udC1zaXplOiAxM3B0O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNyU7XHJcblxyXG59XHJcbi5pdGVte1xyXG4gICBtYXgtd2lkdGg6IDk1JSAhaW1wb3J0YW50O1xyXG4gICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTpsaXN0LWl0ZW07XHJcbiAgICBoZWlnaHQ6IDIwJTtcclxuICAgIFxyXG59XHJcblxyXG4ubmV3Q2FyZDF7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICBvcGFjaXR5OiA1NSU7XHJcbiAgICBmb250LXNpemU6IGxhcmdlO1xyXG4gICAgIG1hcmdpbi10b3A6IDQlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDMlO1xyXG59XHJcbi5uZXdDYXJkMntcclxuICAgIC8vICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJyAhaW1wb3J0YW50O1xyXG4gICAgb3BhY2l0eTogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTZwdDtcclxuICAgICBtYXJnaW4tdG9wOiA0JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgIG1hcmdpbi1sZWZ0OiAzJTtcclxuICAgIC8vICBjb2xvcjogIzEwMjI0NTtcclxufVxyXG5cclxuXHJcbi5pY29uQ2FyZHtcclxuICAgIG1hcmdpbi1ib3R0b206IDglO1xyXG4gICAgXHJcbn0iXX0= */");

/***/ }),

/***/ "LMCD":
/*!*************************************************!*\
  !*** ./src/app/views/faq/faq-routing.module.ts ***!
  \*************************************************/
/*! exports provided: FaqPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageRoutingModule", function() { return FaqPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _faq_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faq.page */ "CMu8");




const routes = [
    {
        path: '',
        component: _faq_page__WEBPACK_IMPORTED_MODULE_3__["FaqPage"]
    }
];
let FaqPageRoutingModule = class FaqPageRoutingModule {
};
FaqPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], FaqPageRoutingModule);



/***/ }),

/***/ "iwG9":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/faq/faq.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\r\n  <ion-toolbar style=\"padding-top: 7%;\" class=\"new-background-color\">\r\n    <ion-icon class=\"backIcon\" name=\"chevron-back-outline\" (click)=\"goToHome()\"></ion-icon>\r\n    <span class=\"text\">FAQ</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n\r\n  <div>\r\n      <ion-searchbar mode=\"ios\" ></ion-searchbar>\r\n   </div>\r\n \r\n  <ion-list *ngFor=\"let item of List\" >\r\n    <ion-item Lines=\"none\" >\r\n      <ion-text class=\"newCard1\">{{item.title}}</ion-text>\r\n    \r\n        <ion-icon *ngIf=\"forwardarrow || (downarrow && slno!=item.sno) || slno ==0\" slot=\"end\" name=\"chevron-forward-outline\" class=\"iconCard\" (click)=\"rotateforwardarrow(item)\"></ion-icon>\r\n        <ion-icon *ngIf=\"downarrow && slno==item.sno\" slot=\"end\" name=\"chevron-down-outline\" class=\"iconCard\" (click)=\"rotatedownarrow(item)\"></ion-icon>\r\n      \r\n     \r\n  </ion-item>\r\n  <ion-item style=\"margin-top: -4%;\" >\r\n  <ion-text  class=\"newCard2\" *ngIf=\"downarrow && slno==item.sno\">{{item.description}}</ion-text>  \r\n  <!-- <ion-text style=\"display: flex;\" *ngIf=\"downarrow\" class=\"newCard\">{{faqDesc}}</ion-text>   -->\r\n  \r\n</ion-item>\r\n  </ion-list>\r\n  <!-- <div *ngFor=\"let item of List\">\r\n    <ion-item class=\"item\"  Lines=\"none\" >\r\n      <ion-text class=\"newCard\">{{item.title}}</ion-text> \r\n      <ion-icon *ngIf=\"forwardarrow\" slot=\"end\" name=\"chevron-forward-outline\" class=\"iconCard\" (click)=\"rotateforwardarrow()\"></ion-icon>\r\n      <ion-icon *ngIf=\"downarrow\" slot=\"end\" name=\"chevron-down-outline\" class=\"iconCard\" (click)=\"rotatedownarrow()\"></ion-icon>\r\n      </ion-item>\r\n    <ion-item>\r\n      <ion-text *ngIf=\"downarrow\" class=\"newCard\">{{item.description}}</ion-text> \r\n    </ion-item>\r\n  </div> -->\r\n\r\n  \r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=views-faq-faq-module.js.map