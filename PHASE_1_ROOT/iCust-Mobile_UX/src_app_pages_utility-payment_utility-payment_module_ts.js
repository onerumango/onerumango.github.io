"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_utility-payment_utility-payment_module_ts"],{

/***/ 12047:
/*!*************************************************************************!*\
  !*** ./src/app/pages/utility-payment/utility-payment-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilityPaymentPageRoutingModule": () => (/* binding */ UtilityPaymentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _utility_payment_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility-payment.page */ 22185);




const routes = [
    {
        path: '',
        component: _utility_payment_page__WEBPACK_IMPORTED_MODULE_0__.UtilityPaymentPage
    }
];
let UtilityPaymentPageRoutingModule = class UtilityPaymentPageRoutingModule {
};
UtilityPaymentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], UtilityPaymentPageRoutingModule);



/***/ }),

/***/ 14200:
/*!*****************************************************************!*\
  !*** ./src/app/pages/utility-payment/utility-payment.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilityPaymentPageModule": () => (/* binding */ UtilityPaymentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _utility_payment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility-payment-routing.module */ 12047);
/* harmony import */ var _utility_payment_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility-payment.page */ 22185);







let UtilityPaymentPageModule = class UtilityPaymentPageModule {
};
UtilityPaymentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _utility_payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.UtilityPaymentPageRoutingModule
        ],
        declarations: [_utility_payment_page__WEBPACK_IMPORTED_MODULE_1__.UtilityPaymentPage]
    })
], UtilityPaymentPageModule);



/***/ }),

/***/ 22185:
/*!***************************************************************!*\
  !*** ./src/app/pages/utility-payment/utility-payment.page.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UtilityPaymentPage": () => (/* binding */ UtilityPaymentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _utility_payment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utility-payment.page.html?ngResource */ 67973);
/* harmony import */ var _utility_payment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utility-payment.page.scss?ngResource */ 55099);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);






let UtilityPaymentPage = class UtilityPaymentPage {
    constructor(fb, router) {
        this.fb = fb;
        this.router = router;
        this.billNames = ['1090000 88987 87123', '1090000 88987 87122', '1090000 88987 87128'];
        this.account = ['xxxxxxxx101', 'xxxxxx201'];
    }
    ngOnInit() {
        this.utilityForm = this.fb.group({
            billerName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            accountBalance: ['$12,09,89', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            payFromAccount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            billDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            billNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
            remark: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        });
        console.log(this.utilityForm.value);
    }
    next() {
        console.log(this.utilityForm.value);
        // this.router.navigate(['forex-transaction']);
        this.router.navigate(['token-generation']);
    }
    previous1() {
        this.router.navigate(['dashboard']);
    }
};
UtilityPaymentPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
UtilityPaymentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-utility-payment',
        template: _utility_payment_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_utility_payment_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], UtilityPaymentPage);



/***/ }),

/***/ 55099:
/*!****************************************************************************!*\
  !*** ./src/app/pages/utility-payment/utility-payment.page.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "* {\n  font-family: \"Montserrat\" !important;\n  /* Add !important to overwrite all elements */\n}\n\n.util_header {\n  padding-top: 4%;\n  padding-bottom: 3%;\n  font-weight: bold;\n}\n\n.box {\n  font-weight: bold;\n  border-width: thin;\n  border-radius: 13px;\n  width: 95%;\n  height: 55px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt rgba(0, 0, 0, 0.1607843137);\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  margin-top: 10px;\n}\n\n.box1 {\n  border-width: thin;\n  border-radius: 13px;\n  width: 95%;\n  height: 100px;\n  margin-top: 10px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt rgba(0, 0, 0, 0.1607843137);\n}\n\n.inputCard {\n  padding-top: 7%;\n  padding-left: 5%;\n}\n\n.inputRemarks {\n  padding-top: 7%;\n  padding-left: 5%;\n}\n\n.inputCard1 {\n  padding-top: 10%;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.labelCard {\n  color: gray;\n  font-size: 14px;\n  font-family: \"Montserrat\" !important;\n}\n\n.searchbar {\n  border-radius: 10%;\n}\n\n.underline {\n  text-decoration: underline;\n  font-size: 14px;\n}\n\nion-input {\n  color: rgb(16, 34, 69) !important;\n  font-size: 14px;\n  font-weight: bold;\n  --placeholder-color: rgba(16, 34, 69, 1) !important;\n  border: 1px solid #f1f1f1 !important;\n  font-family: \"Montserrat\" !important;\n}\n\nion-label {\n  color: rgb(16, 34, 69);\n  opacity: 75%;\n  font-size: 16px;\n  font-weight: bold;\n  font-family: \"Montserrat\" !important;\n}\n\nion-back-button {\n  color: blue;\n}\n\n.inputCard ion-item ion-label {\n  color: gray;\n}\n\n.inputCard ion-item {\n  margin-left: 0px;\n}\n\nion-textarea {\n  height: 500px;\n  padding: 4px;\n  font-weight: bold;\n}\n\nion-icon {\n  font-size: xx-large;\n  color: rgb(70, 111, 254);\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.text {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  color: rgb(70, 111, 254);\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-button {\n  width: 95%;\n  padding-left: 5%;\n  height: 50px;\n  font-family: \"Montserrat\" !important;\n}\n\n.ion-padding-top {\n  padding-top: 10%;\n}\n\nion-toolbar {\n  margin-top: 5%;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n}\n\n.boxDrop {\n  display: inline-block;\n  width: 95%;\n  height: 55px;\n  background-color: #f9fafb;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-width: thin;\n  border-style: solid;\n  border-radius: 10px;\n  box-shadow: 0 5pt 5pt -2pt #d3d3d3;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n  border-bottom-style: hidden;\n}\n\nngx-flag-picker {\n  display: inline-block;\n  font-size: x-large;\n  padding-top: 5px;\n  padding-left: 20px;\n  align-content: center;\n}\n\n.box7 {\n  padding-top: 0%;\n  padding-left: 0%;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.inputCard5 {\n  padding-top: 5%;\n  padding-left: 5%;\n}\n\nion-select {\n  font-family: \"Montserrat\" !important;\n  font-size: 14px;\n  font-weight: bold;\n}\n\n.datepicker-toggle {\n  display: inline-block;\n  position: relative;\n  width: 18px;\n  height: 19px;\n}\n\n.datepicker-toggle-button {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  background-image: url(\"data:image/svg+xml;base64,...\");\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxpdHktcGF5bWVudC5wYWdlLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxHSVRIVUIlMjBSRVBPU0lUT1JZX1VJXFxpQ3VzdE1vYmlsZS12Mlxcc3JjXFxhcHBcXHBhZ2VzXFx1dGlsaXR5LXBheW1lbnRcXHV0aWxpdHktcGF5bWVudC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQ0FBQTtFQUNBLDZDQUFBO0FDQ0Y7O0FERUE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQ0NGOztBRENBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0VBSUEsVUFBQTtFQUNBLFlBQUE7RUFHQSxxRkFBQTtFQUlBLGlEQUFBO0VBRUEsd0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUNSRjs7QURVQTtFQUNFLGtCQUFBO0VBRUEsbUJBQUE7RUFFQSxVQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBSUEscUZBQUE7RUFJQSxpREFBQTtBQ2ZGOztBRDJCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ3hCRjs7QUQwQkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUN2QkY7O0FEMEJBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDdkJGOztBRDJCQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUN4QkY7O0FEMEJBO0VBQ0Usa0JBQUE7QUN2QkY7O0FEeUJBO0VBQ0UsMEJBQUE7RUFDQSxlQUFBO0FDdEJGOztBRHdCQTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbURBQUE7RUFFQSxvQ0FBQTtFQUNBLG9DQUFBO0FDdEJGOztBRHdCQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9DQUFBO0FDckJGOztBRHVCQTtFQUNFLFdBQUE7QUNwQkY7O0FEc0JBO0VBQ0UsV0FBQTtBQ25CRjs7QURxQkE7RUFDRSxnQkFBQTtBQ2xCRjs7QURvQkE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDakJGOztBRG1CQTtFQUNFLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FDaEJGOztBRGtCQTtFQUNFLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUNmRjs7QURpQkE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUNkRjs7QURnQkE7RUFDRSxnQkFBQTtBQ2JGOztBRGVBO0VBQ0UsY0FBQTtFQUNBLGtDQUFBO0FDWkY7O0FEY0E7RUFDRSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtFQUNBLDJCQUFBO0FDWkY7O0FEZUE7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFFQSxrQkFBQTtFQUVBLHFCQUFBO0FDZEY7O0FEaUJBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ2RGOztBRGdCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQ2JGOztBRGVBO0VBQ0Usb0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNaRjs7QURjQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ1hGOztBRGFBO0VBQ0Usa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esc0RBQUE7QUNWRiIsImZpbGUiOiJ1dGlsaXR5LXBheW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbiAgLyogQWRkICFpbXBvcnRhbnQgdG8gb3ZlcndyaXRlIGFsbCBlbGVtZW50cyAqL1xyXG59XHJcblxyXG4udXRpbF9oZWFkZXIge1xyXG4gIHBhZGRpbmctdG9wOiA0JTtcclxuICBwYWRkaW5nLWJvdHRvbTogMyU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmJveCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gIC8vIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICAvLyAgICBib3gtc2hhZG93OiAwIDVwdCA1cHQgLTJwdCAjRDNEM0QzO1xyXG4gIC8vIGJveC1zaGFkb3c6IDAgMCA1cHQgMC41cHQgI0QzRDNEMztcclxuICAvLyBib3gtc2hhZG93OiAwcHggMTVweCAxMHB4IC0xNXB4ICNEM0QzRDM7XHJcbiAgd2lkdGg6IDk1JTtcclxuICBoZWlnaHQ6IDU1cHg7XHJcblxyXG4gIC8vICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI0ZGRkZGRiwgI0Y4RkFGRSk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpXHJcbiAgKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gIC8vICAgIG9wYWNpdHk6IDUwJTtcclxuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5ib3gxIHtcclxuICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgLy8gYm9yZGVyLXN0eWxlOiB0aGluO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcblxyXG4gIHdpZHRoOiA5NSU7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIC8vICAgIGJveC1zaGFkb3c6IDAgNXB0IDlwdCAtMnB0ICNEM0QzRDM7XHJcblxyXG4gIC8vICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLFxyXG4gICAgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpXHJcbiAgKTtcclxuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gIC8vIG9wYWNpdHk6IDUwJTtcclxuICAvLyBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgLy8gYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgLy8gYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICAvLyBib3JkZXItYm90dG9tLXN0eWxlOiBoaWRkZW47XHJcbn1cclxuLy8gZGl2IHtcclxuLy8gICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgLyogSGlkZSBob3Jpem9udGFsIHNjcm9sbGJhciAqL1xyXG4vLyAgICAgb3ZlcmZsb3cteTogc2Nyb2xsOyAvKiBBZGQgdmVydGljYWwgc2Nyb2xsYmFyICovXHJcbi8vICAgfVxyXG5cclxuLmlucHV0Q2FyZCB7XHJcbiAgcGFkZGluZy10b3A6IDclO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbn1cclxuLmlucHV0UmVtYXJrcyB7XHJcbiAgcGFkZGluZy10b3A6IDclO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbn1cclxuXHJcbi5pbnB1dENhcmQxIHtcclxuICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIC8vYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxyZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gIC8vcGFkZGluZy1sZWZ0OiAzJTtcclxufVxyXG4ubGFiZWxDYXJkIHtcclxuICBjb2xvcjogZ3JheTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbn1cclxuLnNlYXJjaGJhciB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xyXG59XHJcbi51bmRlcmxpbmUge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5pb24taW5wdXQge1xyXG4gIGNvbG9yOiByZ2JhKDE2LCAzNCwgNjksIDEpICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIC0tcGxhY2Vob2xkZXItY29sb3I6IHJnYmEoMTYsIDM0LCA2OSwgMSkgIWltcG9ydGFudDtcclxuICAvLyAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDEwMCU7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG59XHJcbmlvbi1sYWJlbCB7XHJcbiAgY29sb3I6IHJnYmEoMTYsIDM0LCA2OSk7XHJcbiAgb3BhY2l0eTogNzUlO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxufVxyXG5pb24tYmFjay1idXR0b24ge1xyXG4gIGNvbG9yOiBibHVlO1xyXG59XHJcbi5pbnB1dENhcmQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcclxuICBjb2xvcjogZ3JheTtcclxufVxyXG4uaW5wdXRDYXJkIGlvbi1pdGVtIHtcclxuICBtYXJnaW4tbGVmdDogMHB4O1xyXG59XHJcbmlvbi10ZXh0YXJlYSB7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBwYWRkaW5nOiA0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuaW9uLWljb24ge1xyXG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgY29sb3I6IHJnYig3MCwgMTExLCAyNTQpO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcbi50ZXh0IHtcclxuICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgY29sb3I6IHJnYig3MCwgMTExLCAyNTQpO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcclxufVxyXG5pb24tYnV0dG9uIHtcclxuICB3aWR0aDogOTUlO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xyXG59XHJcbi5pb24tcGFkZGluZy10b3Age1xyXG4gIHBhZGRpbmctdG9wOiAxMCU7XHJcbn1cclxuaW9uLXRvb2xiYXIge1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNkM2QzZDM7XHJcbn1cclxuLmJveERyb3Age1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogOTUlO1xyXG4gIGhlaWdodDogNTVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiO1xyXG4gIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci13aWR0aDogdGhpbjtcclxuICAvLzogO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDVwdCA1cHQgLTJwdCAjZDNkM2QzO1xyXG4gIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcclxuICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xyXG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IGhpZGRlbjtcclxufVxyXG5cclxubmd4LWZsYWctcGlja2VyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgLy8gIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAvLyAgcGFkZGluZy10b3A6IDQlO1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmJveDcge1xyXG4gIHBhZGRpbmctdG9wOiAwJTtcclxuICBwYWRkaW5nLWxlZnQ6IDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4uaW5wdXRDYXJkNSB7XHJcbiAgcGFkZGluZy10b3A6IDUlO1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbn1cclxuaW9uLXNlbGVjdCB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5kYXRlcGlja2VyLXRvZ2dsZSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMThweDtcclxuICBoZWlnaHQ6IDE5cHg7XHJcbn1cclxuLmRhdGVwaWNrZXItdG9nZ2xlLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LC4uLlwiKTtcclxufVxyXG4iLCIqIHtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG4gIC8qIEFkZCAhaW1wb3J0YW50IHRvIG92ZXJ3cml0ZSBhbGwgZWxlbWVudHMgKi9cbn1cblxuLnV0aWxfaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDQlO1xuICBwYWRkaW5nLWJvdHRvbTogMyU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYm94IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlci13aWR0aDogdGhpbjtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiA1NXB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLCByZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xuICBib3gtc2hhZG93OiAwIDNwdCA2cHQgcmdiYSgwLCAwLCAwLCAwLjE2MDc4NDMxMzcpO1xuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XG4gIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xuICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYm94MSB7XG4gIGJvcmRlci13aWR0aDogdGhpbjtcbiAgYm9yZGVyLXJhZGl1czogMTNweDtcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSwgcmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcbiAgYm94LXNoYWRvdzogMCAzcHQgNnB0IHJnYmEoMCwgMCwgMCwgMC4xNjA3ODQzMTM3KTtcbn1cblxuLmlucHV0Q2FyZCB7XG4gIHBhZGRpbmctdG9wOiA3JTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxuLmlucHV0UmVtYXJrcyB7XG4gIHBhZGRpbmctdG9wOiA3JTtcbiAgcGFkZGluZy1sZWZ0OiA1JTtcbn1cblxuLmlucHV0Q2FyZDEge1xuICBwYWRkaW5nLXRvcDogMTAlO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5sYWJlbENhcmQge1xuICBjb2xvcjogZ3JheTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcbn1cblxuLnNlYXJjaGJhciB7XG4gIGJvcmRlci1yYWRpdXM6IDEwJTtcbn1cblxuLnVuZGVybGluZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gIGNvbG9yOiByZ2IoMTYsIDM0LCA2OSkgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgLS1wbGFjZWhvbGRlci1jb2xvcjogcmdiYSgxNiwgMzQsIDY5LCAxKSAhaW1wb3J0YW50O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxICFpbXBvcnRhbnQ7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xufVxuXG5pb24tbGFiZWwge1xuICBjb2xvcjogcmdiKDE2LCAzNCwgNjkpO1xuICBvcGFjaXR5OiA3NSU7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiAhaW1wb3J0YW50O1xufVxuXG5pb24tYmFjay1idXR0b24ge1xuICBjb2xvcjogYmx1ZTtcbn1cblxuLmlucHV0Q2FyZCBpb24taXRlbSBpb24tbGFiZWwge1xuICBjb2xvcjogZ3JheTtcbn1cblxuLmlucHV0Q2FyZCBpb24taXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiAwcHg7XG59XG5cbmlvbi10ZXh0YXJlYSB7XG4gIGhlaWdodDogNTAwcHg7XG4gIHBhZGRpbmc6IDRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1pY29uIHtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbiAgY29sb3I6IHJnYig3MCwgMTExLCAyNTQpO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG59XG5cbi50ZXh0IHtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gIGNvbG9yOiByZ2IoNzAsIDExMSwgMjU0KTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gIHdpZHRoOiA5NSU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG4gIGhlaWdodDogNTBweDtcbiAgZm9udC1mYW1pbHk6IFwiTW9udHNlcnJhdFwiICFpbXBvcnRhbnQ7XG59XG5cbi5pb24tcGFkZGluZy10b3Age1xuICBwYWRkaW5nLXRvcDogMTAlO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBib3gtc2hhZG93OiAwIDVwdCA1cHQgLTJwdCAjZDNkM2QzO1xufVxuXG4uYm94RHJvcCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDk1JTtcbiAgaGVpZ2h0OiA1NXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiO1xuICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XG4gIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xuICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xuICBib3JkZXItd2lkdGg6IHRoaW47XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNkM2QzZDM7XG4gIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcbiAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XG4gIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XG4gIGJvcmRlci1ib3R0b20tc3R5bGU6IGhpZGRlbjtcbn1cblxubmd4LWZsYWctcGlja2VyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIHBhZGRpbmctbGVmdDogMjBweDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xufVxuXG4uYm94NyB7XG4gIHBhZGRpbmctdG9wOiAwJTtcbiAgcGFkZGluZy1sZWZ0OiAwJTtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmlucHV0Q2FyZDUge1xuICBwYWRkaW5nLXRvcDogNSU7XG4gIHBhZGRpbmctbGVmdDogNSU7XG59XG5cbmlvbi1zZWxlY3Qge1xuICBmb250LWZhbWlseTogXCJNb250c2VycmF0XCIgIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmRhdGVwaWNrZXItdG9nZ2xlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxOHB4O1xuICBoZWlnaHQ6IDE5cHg7XG59XG5cbi5kYXRlcGlja2VyLXRvZ2dsZS1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCwuLi5cIik7XG59Il19 */";

/***/ }),

/***/ 67973:
/*!****************************************************************************!*\
  !*** ./src/app/pages/utility-payment/utility-payment.page.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar class=\"util_header\">\r\n    <ion-icon name=\"chevron-back-outline\" (click)=\"previous1()\"></ion-icon>\r\n    <span class=\"text\">Utility Bill Payment</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n  <div>\r\n    <form [formGroup]=\"utilityForm\">\r\n      <div class=\"inputCard\">\r\n        <ion-label>Biller Name*</ion-label>\r\n        <!-- <ion-input class=\"box\"></ion-input> -->\r\n        <ion-select\r\n          [compareWith]=\"compareWith\"\r\n          class=\"box\"\r\n          mode=\"ios\"\r\n          formControlName=\"billerName\"\r\n          ngDefaultControl\r\n        >\r\n          <ion-select-option *ngFor=\"let user of billNames\" [value]=\"user\"\r\n            >{{user}}</ion-select-option\r\n          >\r\n        </ion-select>\r\n      </div>\r\n      <div class=\"inputCard\">\r\n        <ion-label\r\n          position=\"stacked\"\r\n          class=\"labelCard\"\r\n          formControlName=\"accountBalance\"\r\n          ngDefaultControl\r\n          style=\"font-size: 14px\"\r\n          >Account Balance : $12,09,89</ion-label\r\n        >\r\n      </div>\r\n\r\n      <div class=\"inputCard\">\r\n        <ion-label>Amount*</ion-label>\r\n        <ion-input\r\n          class=\"box\"\r\n          formControlName=\"amount\"\r\n          ngDefaultControl\r\n        ></ion-input>\r\n      </div>\r\n      <div class=\"inputCard\">\r\n        <ion-label>PayFromAccount*</ion-label>\r\n        <!-- <ion-input class=\"box\"></ion-input> -->\r\n        <ion-select\r\n          [compareWith]=\"compareWith\"\r\n          class=\"box\"\r\n          formControlName=\"payFromAccount\"\r\n          ngDefaultControl\r\n        >\r\n          <ion-select-option *ngFor=\"let user of account\" [value]=\"user\"\r\n            >{{user}}</ion-select-option\r\n          >\r\n        </ion-select>\r\n      </div>\r\n      <div class=\"inputCard\">\r\n        <ion-label>Bill Date*</ion-label>\r\n\r\n        <!-- <ion-input class=\"box\"></ion-input> -->\r\n        <ion-input\r\n          type=\"date\"\r\n          class=\"datepicker-input\"\r\n          displayFormat=\"DDD. MMM DD, YY\"\r\n          placeholder=\"Select date\"\r\n          formControlName=\"billDate\"\r\n          ngDefaultControl\r\n          (input)=\"date = $event.target.value\"\r\n          class=\"box\"\r\n        ></ion-input>\r\n      </div>\r\n\r\n      <!-- <div class=\"inputCard\">\r\n      <ion-label>Amount</ion-label>\r\n      <ion-input type=\"Number\" class=\"box\" formControlName=\"fxAmount\" ngDefaultControl></ion-input> \r\n      </div> -->\r\n\r\n      <!-- <div class=\"inputCard1\">\r\n\r\n        <ion-label style=\"padding-left: 10px;\">Bill Date</ion-label>\r\n      <ion-card class=\"box\">\r\n        <ion-item lines=\"none\">\r\n            <ion-datetime displayFormat=\"DDD. MMM DD, YY\" placeholder=\"Select date\" formControlName=\"billDate\" ngDefaultControl>\r\n            </ion-datetime>\r\n       \r\n\r\n       </ion-item> \r\n      </ion-card>\r\n      </div> -->\r\n\r\n      <div class=\"inputCard\">\r\n        <ion-label>Bill Number*</ion-label>\r\n        <ion-input\r\n          class=\"box\"\r\n          formControlName=\"billNumber\"\r\n          ngDefaultControl\r\n        ></ion-input>\r\n      </div>\r\n\r\n      <div class=\"inputCard\">\r\n        <ion-label>Remarks</ion-label>\r\n\r\n        <ion-textarea\r\n          class=\"box1\"\r\n          formControlName=\"remark\"\r\n          ngDefaultControl\r\n        ></ion-textarea>\r\n      </div>\r\n\r\n      <!-- <div  class=\"ion-padding-top\">\r\n    <div >\r\n    <ion-button expand=\"block\" shape=\"round\" style=\"width: 95%;padding-left: 7%;\"\r\n    (click)=\"next()\">Next</ion-button>\r\n    </div>\r\n    \r\n    <div >\r\n    <ion-button expand=\"block\" shape=\"round\" [disabled]=\"true\" style=\"width: 95%;padding-left: 7%;\"\r\n    (click)=\"previous()\">Back</ion-button>\r\n    </div>\r\n    </div>\r\n     -->\r\n      <div class=\"ion-padding-top\">\r\n        <div>\r\n          <ion-button\r\n            expand=\"block\"\r\n            shape=\"round\"\r\n            style=\"width: 95%\"\r\n            (click)=\"next()\"\r\n            >Next</ion-button\r\n          >\r\n        </div>\r\n\r\n        <div>\r\n          <ion-button\r\n            expand=\"block\"\r\n            shape=\"round\"\r\n            fill=\"clear\"\r\n            style=\"width: 95%; color: black\"\r\n            (click)=\"previous1()\"\r\n            >Cancel</ion-button\r\n          >\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n\r\n<!-- <ion-content *ngIf=!flag>\r\n      <ion-header>\r\n        <ion-toolbar>  \r\n          <ion-icon name=\"chevron-back-outline\" (click)=\"previous()\"></ion-icon>\r\n          <span class=\"text\">Forex Transaction</span>\r\n        </ion-toolbar>\r\n      </ion-header>\r\n      <div>\r\n      <form [formGroup]=\"forexForm\">\r\n      <div class=\"inputCard\">\r\n      <ion-label>Negotiated Rate</ion-label>\r\n      <ion-select [compareWith]=\"compareWith\" class=\"box\" formControlName=\"negotiatedRate\" ngDefaultControl>\r\n        <ion-select-option *ngFor=\"let user of negotiated\" [value]=\"user\">{{user}}</ion-select-option>\r\n      </ion-select>\r\n      </div>\r\n      <div class=\"inputCard\">\r\n        <ion-label position=\"stacked\" class=\"labelCard\" formControlName=\"exchangeRate\" ngDefaultControl>Exchange Rate : $12,09,89</ion-label>   \r\n        </div>\r\n   \r\n  \r\n        <div style=\"margin-left: 19px;margin-top: 19px;\">\r\n          <ion-label >Do you wish to perform this transaction </ion-label>\r\n          <ion-label>in your branch?</ion-label>\r\n          <ion-radio-group formControlName=\"trasactionBranchFlag\" ngDefaultControl>\r\n            <ion-row >\r\n              <ion-col>\r\n                   <ion-item lines=\"none\">\r\n                      <ion-label position=\"start\">Yes</ion-label>\r\n                      <ion-radio mode=\"md\" item-left value=\"yes\"></ion-radio>\r\n                 </ion-item>\r\n               </ion-col>\r\n          \r\n              <ion-col>\r\n                  <ion-item lines=\"none\">\r\n                      <ion-label>No</ion-label>\r\n                      <ion-radio mode=\"md\" item-left value=\"no\"></ion-radio>\r\n                 </ion-item>\r\n              </ion-col>\r\n          \r\n             \r\n          \r\n          </ion-row>\r\n          </ion-radio-group>\r\n  </div>\r\n\r\n  <div class=\"inputCard\">\r\n    <ion-router-link href=\"#\" class=\"underline\">Click here to find nearest branch</ion-router-link>\r\n    </div>\r\n  \r\n      <div class=\"inputCard\">\r\n      <ion-label>Charges</ion-label>\r\n      <ion-input class=\"box\" formControlName=\"charges\" ngDefaultControl></ion-input>\r\n      \r\n      </div>\r\n    \r\n      <div class=\"inputCard\">\r\n        <ion-label>Remarks</ion-label>\r\n        \r\n          <ion-textarea class=\"box1\" formControlName=\"remark\" ngDefaultControl></ion-textarea>\r\n      \r\n        </div>\r\n      \r\n    <div  class=\"ion-padding-top\">\r\n      <div >\r\n      <ion-button expand=\"block\" shape=\"round\" style=\"width: 95%;padding-left: 7%;\" (click)=\"save(forexForm.value)\"\r\n     >Save</ion-button>\r\n      </div>\r\n      \r\n      <div >\r\n      <ion-button expand=\"block\" shape=\"round\"  style=\"width: 95%;padding-left: 7%;\"  (click)=\"previous()\">Back</ion-button>\r\n      </div>\r\n      </div>\r\n      \r\n      </form>\r\n      </div>\r\n   \r\n      </ion-content>\r\n     -->\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_utility-payment_utility-payment_module_ts.js.map