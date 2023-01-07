"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_deposit-topup_deposit-topup_module_ts"],{

/***/ 98361:
/*!*********************************************************************!*\
  !*** ./src/app/pages/deposit-topup/deposit-topup-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepositTopupPageRoutingModule": () => (/* binding */ DepositTopupPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _deposit_topup_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deposit-topup.page */ 64353);




const routes = [
    {
        path: '',
        component: _deposit_topup_page__WEBPACK_IMPORTED_MODULE_0__.DepositTopupPage
    }
];
let DepositTopupPageRoutingModule = class DepositTopupPageRoutingModule {
};
DepositTopupPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DepositTopupPageRoutingModule);



/***/ }),

/***/ 9161:
/*!*************************************************************!*\
  !*** ./src/app/pages/deposit-topup/deposit-topup.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepositTopupPageModule": () => (/* binding */ DepositTopupPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _deposit_topup_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deposit-topup-routing.module */ 98361);
/* harmony import */ var _deposit_topup_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deposit-topup.page */ 64353);







let DepositTopupPageModule = class DepositTopupPageModule {
};
DepositTopupPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _deposit_topup_routing_module__WEBPACK_IMPORTED_MODULE_0__.DepositTopupPageRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule
        ],
        declarations: [_deposit_topup_page__WEBPACK_IMPORTED_MODULE_1__.DepositTopupPage]
    })
], DepositTopupPageModule);



/***/ }),

/***/ 64353:
/*!***********************************************************!*\
  !*** ./src/app/pages/deposit-topup/deposit-topup.page.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DepositTopupPage": () => (/* binding */ DepositTopupPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _deposit_topup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./deposit-topup.page.html?ngResource */ 93640);
/* harmony import */ var _deposit_topup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deposit-topup.page.scss?ngResource */ 93712);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);






let DepositTopupPage = class DepositTopupPage {
    constructor(fb, router) {
        this.fb = fb;
        this.router = router;
        this.users = ['789045667', '8789977889'];
        this.a = '678889';
        this.b = 'hjhjhj';
        this.c = '678788';
    }
    ngOnInit() {
        this.loanForm = this.fb.group({
            depositAccount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            accountBalance: [' $12,09,89', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            topUpAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            payFromAccount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            revisedPrincipalAmount: [' $12,09,89', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            revisedMaturityAmount: [' $12,09,89', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            // repaymentAmount:['', [Validators.required]]
        });
        console.log(this.loanForm.value);
    }
    save(fb) {
        this.router.navigate(['token-generation']);
    }
    previous1() {
        this.router.navigate(['dashboard']);
    }
};
DepositTopupPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
DepositTopupPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-deposit-topup',
        template: _deposit_topup_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_deposit_topup_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DepositTopupPage);



/***/ }),

/***/ 93712:
/*!************************************************************************!*\
  !*** ./src/app/pages/deposit-topup/deposit-topup.page.scss?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = ".dep_header {\n  padding-top: 4%;\n  padding-bottom: 3%;\n  font-weight: bold;\n}\n\n.box {\n  font-weight: bold;\n  border-width: thin;\n  border-radius: 13px;\n  width: 95%;\n  height: 55px;\n  margin-top: 10px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt rgba(0, 0, 0, 0.1607843137);\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.inputCard {\n  padding-top: 7%;\n  padding-left: 5%;\n  font-family: \"Montserrat\" !important;\n}\n\nion-label {\n  color: gray;\n  font-size: 16px;\n  font-weight: bold;\n  font-family: \"Montserrat\" !important;\n}\n\nion-back-button {\n  color: blue;\n}\n\nion-input {\n  color: black !important;\n  font-size: 14px;\n  font-weight: bold;\n  --placeholder-color: black !important;\n  border: 1px solid #f1f1f1 !important;\n  font-family: \"Montserrat\" !important;\n}\n\n.text {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  color: rgb(70, 111, 254);\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-button {\n  width: 95%;\n  padding-left: 5%;\n  height: 50px;\n}\n\n.ion-padding-top {\n  padding-top: 10%;\n}\n\nion-icon {\n  font-size: xx-large;\n  color: rgb(70, 111, 254);\n  display: inline-block;\n  vertical-align: middle;\n}\n\nion-toolbar {\n  margin-top: 5%;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n}\n\nion-card {\n  margin-inline: 18px;\n  background-color: #ecf3f2;\n  color: black;\n  border-radius: 20px;\n  margin-top: 30pt;\n  background-color: rgba(236, 243, 242, 0.6);\n  box-shadow: 0 3pt 6pt rgba(0, 0, 0, 0.1607843137);\n}\n\n.inputCard1 {\n  width: 341pt;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-left: 17pt;\n  padding-top: 12pt;\n  padding-bottom: 12pt;\n  font-family: \"Montserrat\" !important;\n  background-color: rgba(236, 243, 242, 0.6);\n  border-radius: 20px;\n}\n\nion-select {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcG9zaXQtdG9wdXAucGFnZS5zY3NzIiwiLi5cXC4uXFwuLlxcLi5cXC4uXFwuLlxcR2l0SHViJTIwUmVwb3NpdG9yeSUyMG9sZFxcaUN1c3RNb2JpbGUtdjJcXHNyY1xcYXBwXFxwYWdlc1xcZGVwb3NpdC10b3B1cFxcZGVwb3NpdC10b3B1cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0VBSUEsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBLHFGQUFBO0VBSUEsaURBQUE7RUFFQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7QUNQRjs7QURVQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLG9DQUFBO0FDUkY7O0FEVUE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0NBQUE7QUNQRjs7QURTQTtFQUNFLFdBQUE7QUNORjs7QURRQTtFQUNFLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EscUNBQUE7RUFFQSxvQ0FBQTtFQUNBLG9DQUFBO0FDTkY7O0FEUUE7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0FDTEY7O0FET0E7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FDSkY7O0FETUE7RUFDRSxnQkFBQTtBQ0hGOztBREtBO0VBQ0UsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUNGRjs7QURJQTtFQUNFLGNBQUE7RUFDQSxrQ0FBQTtBQ0RGOztBREdBO0VBU0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMENBQUE7RUFFQSxpREFBQTtBQ1RGOztBRFlBO0VBQ0UsWUFBQTtFQUNBLHdCQUFBO0VBQUEsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7RUFHQSxvQ0FBQTtFQUNBLDBDQUFBO0VBRUEsbUJBQUE7QUNaRjs7QURpQkE7RUFDRSxpQkFBQTtBQ2RGIiwiZmlsZSI6ImRlcG9zaXQtdG9wdXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlcF9oZWFkZXIge1xyXG4gIHBhZGRpbmctdG9wOiA0JTtcclxuICBwYWRkaW5nLWJvdHRvbTogMyU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmJveCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gIC8vIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICAvLyBib3gtc2hhZG93OiAwIDVwdCA1cHQgLTJwdCAjRDNEM0QzO1xyXG4gIC8vIGJveC1zaGFkb3c6IDAgMCA1cHQgMC41cHQgI0QzRDNEMztcclxuICAvLyBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xNXB4ICNEM0QzRDM7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBoZWlnaHQ6IDU1cHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChcclxuICAgIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxcclxuICAgIHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KVxyXG4gICk7XHJcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuXHJcbiAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XHJcbn1cclxuXHJcbi5pbnB1dENhcmQge1xyXG4gIHBhZGRpbmctdG9wOiA3JTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG5cclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxufVxyXG5pb24tbGFiZWwge1xyXG4gIGNvbG9yOiBncmF5O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxufVxyXG5pb24tYmFjay1idXR0b24ge1xyXG4gIGNvbG9yOiBibHVlO1xyXG59XHJcbmlvbi1pbnB1dCB7XHJcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgLy8gLS1wbGFjZWhvbGRlci1vcGFjaXR5OiAxMDAlO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjEgIWltcG9ydGFudDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxufVxyXG4udGV4dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGNvbG9yOiByZ2IoNzAsIDExMSwgMjU0KTtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbn1cclxuaW9uLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG4uaW9uLXBhZGRpbmctdG9wIHtcclxuICBwYWRkaW5nLXRvcDogMTAlO1xyXG59XHJcbmlvbi1pY29uIHtcclxuICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gIGNvbG9yOiByZ2IoNzAsIDExMSwgMjU0KTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5pb24tdG9vbGJhciB7XHJcbiAgbWFyZ2luLXRvcDogNSU7XHJcbiAgYm94LXNoYWRvdzogMCA1cHQgNXB0IC0ycHQgI2QzZDNkMztcclxufVxyXG5pb24tY2FyZCB7XHJcbiAgLy8gbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIC8vIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIC8vIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLy8gZmxleDoxO1xyXG4gIC8vIHdpZHRoOjM0MXB0O1xyXG4gIC8vIGhlaWdodDoxNTlwdDtcclxuICAvLyBtYXJnaW4tbGVmdDogMTdwdDtcclxuICAvLyBtYXJnaW4tcmlnaHQ6IDE3cHQ7XHJcbiAgbWFyZ2luLWlubGluZTogMThweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNmM2YyO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDMwcHQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzYsIDI0MywgMjQyLCAwLjYpO1xyXG4gIC8vIG9wYWNpdHk6IDYwJTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG59XHJcbi8vIC1jYXJke1xyXG4uaW5wdXRDYXJkMSB7XHJcbiAgd2lkdGg6IDM0MXB0O1xyXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDE3cHQ7XHJcbiAgcGFkZGluZy10b3A6IDEycHQ7XHJcbiAgcGFkZGluZy1ib3R0b206IDEycHQ7XHJcbiAgLy8gYmFja2dyb3VuZC1jb2xvcjogI0VDRjNGMjtcclxuICAvLyAgb3BhY2l0eTogNjAlO1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjM2LCAyNDMsIDI0MiwgMC42KTtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuXHJcbiAgLy8gbWFyZ2luLXJpZ2h0OiAxN3B0O1xyXG59XHJcbi8vICAgICB9XHJcbmlvbi1zZWxlY3Qge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbiIsIi5kZXBfaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDQlO1xuICBwYWRkaW5nLWJvdHRvbTogMyU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYm94IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlci13aWR0aDogdGhpbjtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiA1NXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgcmdiYSgwLCAwLCAwLCAwLjE2MDc4NDMxMzcpO1xuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XG4gIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xuICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xufVxuXG4uaW5wdXRDYXJkIHtcbiAgcGFkZGluZy10b3A6IDclO1xuICBwYWRkaW5nLWxlZnQ6IDUlO1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcbn1cblxuaW9uLWxhYmVsIHtcbiAgY29sb3I6IGdyYXk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuaW9uLWlucHV0IHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjEgIWltcG9ydGFudDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG59XG5cbi50ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiByZ2IoNzAsIDExMSwgMjU0KTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiA5NSU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIGhlaWdodDogNTBweDtcbn1cblxuLmlvbi1wYWRkaW5nLXRvcCB7XG4gIHBhZGRpbmctdG9wOiAxMCU7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgY29sb3I6IHJnYig3MCwgMTExLCAyNTQpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNkM2QzZDM7XG59XG5cbmlvbi1jYXJkIHtcbiAgbWFyZ2luLWlubGluZTogMThweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZjNmMjtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzNiwgMjQzLCAyNDIsIDAuNik7XG4gIGJveC1zaGFkb3c6IDAgM3B0IDZwdCByZ2JhKDAsIDAsIDAsIDAuMTYwNzg0MzEzNyk7XG59XG5cbi5pbnB1dENhcmQxIHtcbiAgd2lkdGg6IDM0MXB0O1xuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICBtYXJnaW4tbGVmdDogMTdwdDtcbiAgcGFkZGluZy10b3A6IDEycHQ7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB0O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzYsIDI0MywgMjQyLCAwLjYpO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xufVxuXG5pb24tc2VsZWN0IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */";

/***/ }),

/***/ 93640:
/*!************************************************************************!*\
  !*** ./src/app/pages/deposit-topup/deposit-topup.page.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"dep_header\">\r\n    <ion-icon name=\"chevron-back-outline\" (click)=\"previous1()\"></ion-icon>\r\n    <span class=\"text\">Deposit Top Up</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div>\r\n    <form [formGroup]=\"loanForm\">\r\n      <div class=\"inputCard\">\r\n        <ion-label>Deposit Account*</ion-label>\r\n        <ion-select\r\n          [compareWith]=\"compareWith\"\r\n          class=\"box\"\r\n          formControlName=\"depositAccount\"\r\n          ngDefaultControl\r\n        >\r\n          <ion-select-option *ngFor=\"let user of users\" [value]=\"user\"\r\n            >{{user}}</ion-select-option\r\n          >\r\n        </ion-select>\r\n      </div>\r\n      <div class=\"inputCard\">\r\n        <ion-label\r\n          position=\"stacked\"\r\n          class=\"labelCard\"\r\n          formControlName=\"accountBalance\"\r\n          ngDefaultControl\r\n          >Account Balance : $12,09,89</ion-label\r\n        >\r\n      </div>\r\n\r\n      <div class=\"inputCard\">\r\n        <ion-label>Top Up Amount*</ion-label>\r\n        <ion-input\r\n          class=\"box\"\r\n          formControlName=\"topUpAmount\"\r\n          ngDefaultControl\r\n        ></ion-input>\r\n      </div>\r\n\r\n      <div class=\"inputCard\">\r\n        <ion-label>Pay From Account*</ion-label>\r\n        <ion-input\r\n          class=\"box\"\r\n          formControlName=\"payFromAccount\"\r\n          ngDefaultControl\r\n        ></ion-input>\r\n      </div>\r\n\r\n      <ion-card>\r\n        <div class=\"inputCard1\">\r\n          <ion-label position=\"stacked\" style=\"opacity: 75%\"\r\n            >Revised Principal Amount</ion-label\r\n          >\r\n          <br />\r\n          <br />\r\n          <ion-label\r\n            position=\"stacked\"\r\n            class=\"input\"\r\n            style=\"font-weight: bolder; color: black\"\r\n            formControlName=\"revisedPrincipalAmount\"\r\n            ngDefaultControl\r\n            >$12,09,89</ion-label\r\n          >\r\n          <br />\r\n          <br />\r\n          <ion-label position=\"stacked\" style=\"opacity: 75%\"\r\n            >Revised Maturity Amount</ion-label\r\n          >\r\n          <br />\r\n          <br />\r\n          <ion-label\r\n            position=\"stacked\"\r\n            class=\"input\"\r\n            style=\"font-weight: bolder; color: black\"\r\n            formControlName=\"revisedMaturityAmount\"\r\n            ngDefaultControl\r\n            >$12,09,89</ion-label\r\n          >\r\n        </div>\r\n      </ion-card>\r\n\r\n      <!-- <div class=\"inputCard\">\r\n      <ion-label>Repayment Amount</ion-label>\r\n      <ion-input class=\"box\" formControlName=\"repaymentAmount\" ngDefaultControl></ion-input>\r\n      \r\n      </div>\r\n     -->\r\n      <!-- <div style=\"margin-top:20px;\">\r\n    <div >\r\n    <ion-button expand=\"block\" shape=\"round\" style=\"width: 95%;padding-left: 7%;\"\r\n    (click)=\"save(loanForm.value)\">Top Up</ion-button>\r\n    </div>\r\n    \r\n    <div >\r\n    <ion-button expand=\"block\" shape=\"round\" [disabled]=\"true\" style=\"width: 95%;padding-left: 7%;\"\r\n    (click)=\"goToFAQ()\">Cancel</ion-button>\r\n    </div>\r\n  </div>\r\n     -->\r\n\r\n      <div class=\"ion-padding-top\">\r\n        <div>\r\n          <ion-button\r\n            expand=\"block\"\r\n            shape=\"round\"\r\n            style=\"width: 95%\"\r\n            (click)=\"save(loanForm.value)\"\r\n            >Top Up</ion-button\r\n          >\r\n        </div>\r\n\r\n        <div>\r\n          <ion-button\r\n            expand=\"block\"\r\n            shape=\"round\"\r\n            fill=\"clear\"\r\n            style=\"width: 95%; color: black\"\r\n            (click)=\"previous1()\"\r\n            >Cancel</ion-button\r\n          >\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_deposit-topup_deposit-topup_module_ts.js.map