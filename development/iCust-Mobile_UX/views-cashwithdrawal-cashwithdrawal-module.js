(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-cashwithdrawal-cashwithdrawal-module"],{

/***/ "94kh":
/*!***************************************************************!*\
  !*** ./src/app/views/cashwithdrawal/cashwithdrawal.module.ts ***!
  \***************************************************************/
/*! exports provided: CashwithdrawalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashwithdrawalPageModule", function() { return CashwithdrawalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cashwithdrawal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cashwithdrawal-routing.module */ "XfCK");
/* harmony import */ var _cashwithdrawal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cashwithdrawal.page */ "pjGB");
/* harmony import */ var ngx_flag_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-flag-picker */ "09Zs");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");










let CashwithdrawalPageModule = class CashwithdrawalPageModule {
};
CashwithdrawalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cashwithdrawal_routing_module__WEBPACK_IMPORTED_MODULE_5__["CashwithdrawalPageRoutingModule"],
            ngx_flag_picker__WEBPACK_IMPORTED_MODULE_7__["NgxFlagPickerModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_9__["ComponentsModule"]
        ],
        declarations: [_cashwithdrawal_page__WEBPACK_IMPORTED_MODULE_6__["CashwithdrawalPage"]],
    })
], CashwithdrawalPageModule);



/***/ }),

/***/ "XfCK":
/*!***********************************************************************!*\
  !*** ./src/app/views/cashwithdrawal/cashwithdrawal-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: CashwithdrawalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashwithdrawalPageRoutingModule", function() { return CashwithdrawalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cashwithdrawal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cashwithdrawal.page */ "pjGB");




const routes = [
    {
        path: '',
        component: _cashwithdrawal_page__WEBPACK_IMPORTED_MODULE_3__["CashwithdrawalPage"]
    },
];
let CashwithdrawalPageRoutingModule = class CashwithdrawalPageRoutingModule {
};
CashwithdrawalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CashwithdrawalPageRoutingModule);



/***/ }),

/***/ "h4H4":
/*!***************************************************************!*\
  !*** ./src/app/views/cashwithdrawal/cashwithdrawal.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: \"Montserrat\" !important;\n  /* Add !important to overwrite all elements */\n}\n\n.transactionAmounterrormsg {\n  color: red;\n  font-size: small;\n  padding-top: 7px;\n}\n\n.box {\n  border-width: thin;\n  border-radius: 13px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  width: 95%;\n  height: 55px;\n  margin-top: 10px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.chequeCard {\n  border-width: thin;\n  border-radius: 10px;\n  box-shadow: 0 5pt 5pt -2pt #D3D3D3;\n  width: 95%;\n  margin-left: 4%;\n  height: 100px;\n  display: inline-block;\n  background-color: #f9fafb;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\nform::-webkit-scrollbar {\n  display: none;\n}\n\n.inputCard1 {\n  padding-top: 7%;\n  padding-left: 5%;\n}\n\n.inputCard2 {\n  padding-top: 3%;\n  padding-left: 3%;\n}\n\n.textCard {\n  padding-left: 5%;\n}\n\n.labelCard {\n  color: gray;\n}\n\n.underline {\n  text-decoration: underline;\n  font-size: 14px;\n  padding-left: 4%;\n}\n\n.ion-padding-top {\n  padding-top: 10%;\n  padding-left: 3%;\n}\n\n.ion-padding-top2 {\n  padding-top: 8%;\n  padding-left: 5%;\n}\n\n.cancelcard {\n  padding-top: 8%;\n  padding-left: 44%;\n  font-size: 14px;\n}\n\n.backcard {\n  padding-top: 8%;\n  padding-left: 47%;\n  font-size: 14px;\n}\n\n.icondate {\n  display: inline-block;\n}\n\nion-searchbar {\n  background-color: #f9fafb;\n}\n\nion-select {\n  font-family: \"Montserrat-SemiBold\" !important;\n  font-size: 14pt;\n}\n\nion-text {\n  font-family: \"Montserrat\" !important;\n  font-size: 14px;\n  opacity: 75%;\n}\n\nion-button {\n  width: 95%;\n  padding-left: 5%;\n  height: 50px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-input {\n  color: black !important;\n  font-size: 14pt;\n  --placeholder-color: black !important;\n  font-family: \"Montserrat\" !important;\n}\n\nion-label {\n  color: #102245;\n  font-family: \"Montserrat\" !important;\n  font-size: 14px;\n  opacity: 75%;\n}\n\nion-back-button {\n  color: #4949e2;\n  margin-bottom: 5%;\n  font-size: larger;\n  text-transform: none;\n}\n\nion-toolbar {\n  margin-top: 5%;\n  box-shadow: 0 5pt 5pt -2pt #D3D3D3;\n}\n\nngx-flag-picker {\n  display: inline-block;\n  font-size: x-large;\n  padding-top: 14px;\n  padding-left: 20px;\n  padding-top: 4%;\n  align-content: center;\n}\n\n.box7 {\n  padding-top: 0%;\n  padding-left: 0%;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.backIcon {\n  font-size: xx-large;\n  color: #466ffe;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.ioncontent {\n  height: 110%;\n  margin-top: -3%;\n}\n\n.ioncontent1 {\n  height: 135%;\n}\n\n.text {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  color: blue;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXNod2l0aGRyYXdhbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxvQ0FBQTtFQUNELDZDQUFBO0FBRkg7O0FBSUU7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQURKOztBQUdFO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFGQUFBO0VBQ0EsK0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBRUEsd0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FBRE47O0FBS007RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FBRlI7O0FBS007RUFDRSxhQUFBO0FBRlI7O0FBSUc7RUFHSSxlQUFBO0VBQ0EsZ0JBQUE7QUFIUDs7QUFLRztFQUNDLGVBQUE7RUFDQSxnQkFBQTtBQUZKOztBQUtHO0VBRUMsZ0JBQUE7QUFISjs7QUFLRztFQUNJLFdBQUE7QUFGUDs7QUFNRztFQUNHLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBSE47O0FBS0k7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBRlI7O0FBS0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFGTjs7QUFJSTtFQUNGLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFERjs7QUFHSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFBTjs7QUFFSTtFQUNGLHFCQUFBO0FBQ0Y7O0FBR0s7RUFDRCx5QkFBQTtBQUFKOztBQUdFO0VBQ0UsNkNBQUE7RUFDQSxlQUFBO0FBQUo7O0FBRUU7RUFDRSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBRUU7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUFDSjs7QUFFRztFQUNDLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0VBRUEsb0NBQUE7QUFBSjs7QUFFSTtFQUNFLGNBQUE7RUFDQyxvQ0FBQTtFQUNDLGVBQUE7RUFDQSxZQUFBO0FBQ1I7O0FBQ0k7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBRVI7O0FBQ0k7RUFDRSxjQUFBO0VBQ0Qsa0NBQUE7QUFFTDs7QUFBSTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBR047O0FBQUk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBR047O0FBREc7RUFDSyxtQkFBQTtFQUVBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBR1I7O0FBQUk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUdOOztBQURJO0VBQ0UsWUFBQTtBQUlOOztBQUZJO0VBQ0ksZUFBQTtFQUNGLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0FBS04iLCJmaWxlIjoiY2FzaHdpdGhkcmF3YWwucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gYXBwLW9wZXJhdGlvbntcclxuLy8gICAgIGhlaWdodDogODAwJTtcclxuLy8gfVxyXG4qIHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgLyogQWRkICFpbXBvcnRhbnQgdG8gb3ZlcndyaXRlIGFsbCBlbGVtZW50cyAqL1xyXG4gIH1cclxuICAudHJhbnNhY3Rpb25BbW91bnRlcnJvcm1zZ3tcclxuICAgIGNvbG9yOnJlZDtcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gIH1cclxuICAuYm94IHtcclxuICAgICAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcbiAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgIGhlaWdodDogNTVweDtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICBcclxuICAgICAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gICAgICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcclxuICAgICAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICAgIH1cclxuICBcclxuICAgXHJcbiAgICAgIC5jaGVxdWVDYXJke1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogdGhpbjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNEM0QzRDM7XHJcbiAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcclxuICAgICAgICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgICAgICAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIGZvcm06Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gICAuaW5wdXRDYXJkMXtcclxuICAgICAgLy8gIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgICAgIC8vICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgICAgcGFkZGluZy10b3A6IDclO1xyXG4gICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgfVxyXG4gICAuaW5wdXRDYXJkMntcclxuICAgIHBhZGRpbmctdG9wOiAzJTtcclxuICAgIHBhZGRpbmctbGVmdDogMyU7XHJcbiAgfVxyXG4gIFxyXG4gICAudGV4dENhcmR7XHJcbiAgICAvLyBwYWRkaW5nLXRvcDogLTYlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICB9XHJcbiAgIC5sYWJlbENhcmR7XHJcbiAgICAgICBjb2xvcjogZ3JheTtcclxuICAgICAgIC8vZm9udC1zaXplOiAyMHB4O1xyXG4gICB9XHJcbiAgXHJcbiAgIC51bmRlcmxpbmUge1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDQlO1xyXG4gICAgfVxyXG4gICAgLmlvbi1wYWRkaW5nLXRvcHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMyU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuaW9uLXBhZGRpbmctdG9wMntcclxuICAgICAgcGFkZGluZy10b3A6IDglO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgfVxyXG4gICAgLmNhbmNlbGNhcmR7XHJcbiAgcGFkZGluZy10b3A6IDglO1xyXG4gIHBhZGRpbmctbGVmdDogNDQlO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICAgIC5iYWNrY2FyZHtcclxuICAgICAgcGFkZGluZy10b3A6IDglO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDQ3JTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIH1cclxuICAgIC5pY29uZGF0ZXtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgIGlvbi1zZWFyY2hiYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcclxuICAgfVxyXG4gIFxyXG4gIGlvbi1zZWxlY3R7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGQnICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHQ7XHJcbiAgfVxyXG4gIGlvbi10ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgb3BhY2l0eTogNzUlO1xyXG4gIH1cclxuICBcclxuICBpb24tYnV0dG9ue1xyXG4gICAgd2lkdGg6IDk1JTtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICBcclxuICB9XHJcbiAgIGlvbi1pbnB1dCB7XHJcbiAgICBjb2xvcjpibGFjayAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB0O1xyXG4gICAgLS1wbGFjZWhvbGRlci1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjEgIWltcG9ydGFudDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIGlvbi1sYWJlbHtcclxuICAgICAgY29sb3I6IzEwMjI0NTtcclxuICAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgb3BhY2l0eTogNzUlO1xyXG4gICAgfVxyXG4gICAgaW9uLWJhY2stYnV0dG9ue1xyXG4gICAgICAgIGNvbG9yOiByZ2IoNzMsIDczLCAyMjYpO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICAgfVxyXG4gICBcclxuICAgIGlvbi10b29sYmFye1xyXG4gICAgICBtYXJnaW4tdG9wOjUlO1xyXG4gICAgIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNEM0QzRDM7XHJcbiAgfVxyXG4gICAgbmd4LWZsYWctcGlja2Vye1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgICAgcGFkZGluZy10b3A6IDE0cHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgcGFkZGluZy10b3A6IDQlO1xyXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgXHJcbiAgICB9XHJcbiAgICAuYm94N3tcclxuICAgICAgcGFkZGluZy10b3A6IDAlO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDAlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDsgXHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDsgXHJcbiAgICB9XHJcbiAgIC5iYWNrSWNvbntcclxuICAgICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgICAgIC8vIGNvbG9yOiBibHVlO1xyXG4gICAgICAgIGNvbG9yOnJnYig3MCwxMTEsMjU0KTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICBcclxuICAgIH1cclxuICAgIC5pb25jb250ZW50e1xyXG4gICAgICBoZWlnaHQ6IDExMCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IC0zJTtcclxuICAgIH1cclxuICAgIC5pb25jb250ZW50MXtcclxuICAgICAgaGVpZ2h0OiAxMzUlO1xyXG4gICAgfVxyXG4gICAgLnRleHR7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgIGNvbG9yOiBibHVlO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgXHJcbiAgXHJcbiAgICAvLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gICAgLy8gICAuaW9uY29udGVudHtcclxuICAgIC8vICAgICBoZWlnaHQ6IDEzMCU7XHJcbiAgICAvLyAgICAgbWFyZ2luLXRvcDogLTMlO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyAgIC5pb25jb250ZW50MXtcclxuICAgIC8vICAgICBoZWlnaHQ6IDE2NSU7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vIH0iXX0= */");

/***/ }),

/***/ "pjGB":
/*!*************************************************************!*\
  !*** ./src/app/views/cashwithdrawal/cashwithdrawal.page.ts ***!
  \*************************************************************/
/*! exports provided: CashwithdrawalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashwithdrawalPage", function() { return CashwithdrawalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cashwithdrawal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cashwithdrawal.page.html */ "wS3Y");
/* harmony import */ var _cashwithdrawal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cashwithdrawal.page.scss */ "h4H4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var src_app_components_branch_branch_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/branch/branch.component */ "z5an");
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/services/loading.service */ "7ch9");
/* harmony import */ var src_app_components_time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/components/time-slots/time-slots.component */ "5aLK");
















let CashwithdrawalPage = class CashwithdrawalPage {
    constructor(router, modalController, fb, loading, datepipe, api, toastCtrl, shareDataService, cdr) {
        this.router = router;
        this.modalController = modalController;
        this.fb = fb;
        this.loading = loading;
        this.datepipe = datepipe;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.shareDataService = shareDataService;
        this.cdr = cdr;
        this.title = 'Cash Withdrawal';
        // maxData : any = (new Date()).getFullYear() + 3;
        this.minDate = new Date().toISOString();
        this.maxDate = new Date(new Date().setDate(new Date().getDate() + 7)).toISOString();
        this.submitted = true;
        this.submitted1 = true;
        this.productCode = "CHW";
        this.tokenOrigin = "Mobile";
        //transAmount:number;
        this.isedit = true;
        //transactionAmount: string;
        this.accountBranch = 'Loita street';
        this.flag = true;
        this.users = [];
        this.selectAbleColor = "secondary";
        this.trnBrn = null;
        this.isShow = true;
        this.selectedCountryCode = '';
        this.lastTranc = [
            {
                transBranch: 'asds',
                accBranch: 'Test'
            },
            {
                transBranch: 'Test',
                accBranch: 'Test'
            },
            {
                transBranch: 'Mananthavady',
                accBranch: 'Test'
            },
            {
                transBranch: 'Mananthavady',
                accBranch: 'Test'
            },
            {
                transBranch: 'Mananthavady',
                accBranch: 'Test'
            },
            {
                transBranch: 'Mananthavady',
                accBranch: 'Test'
            }
        ];
    }
    ngOnInit() {
        this.customerId = sessionStorage.getItem('customer_id');
        this.phoneNumber = localStorage.getItem('PhoneNumLogin');
        console.log("phoneNumber", this.phoneNumber);
        this.getCountrynameValues();
        console.log("customer_id", this.customerId);
        // this.customerId = sessionStorage.getItem('customer_id');
        //   this.api.accountDropDown(this.customerId).subscribe((dropdown) => {
        //     console.log('backend dropdown', dropdown);
        //     this.users=dropdown;
        //     if(dropdown==null){
        //       this.openToast();
        //     }
        //   });
        this.slideOneForm = this.fb.group({
            transactionId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            customerId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            productCode: ['CHW', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            tokenOrigin: ['Mobile', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            accountNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            accountBalance: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            transactionCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            transactionAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,]],
            branchFlag: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            accountBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            transactionDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            transactionBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            transactionTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            exchangeRate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            accountAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            totalChargeAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            narrative: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            denomination: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            totalAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            createdBy: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            createdTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            modifiedBy: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            modifiedTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            recordStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            authStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            version: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
        console.log(this.slideOneForm.value);
        this.loadData();
        this.slideOneForm.get('branchFlag').valueChanges.subscribe(val => {
            console.log("branch flag? val", val);
            console.log("branch flag?", this.brnflg);
            localStorage.setItem("BranchFlag", val);
            // if (val == false) {
            //   console.log("1st if");
            //   this.slideOneForm.get('transactionBranch').patchValue("");
            //   this.nearestBrn = true;
            // }
            this.brnflg = val;
            if (this.brnflg == false && val == false) {
                console.log("2nd if");
                this.slideOneForm.controls.transactionBranch.patchValue(this.trnBrn);
                this.nearestBrn = true;
            }
            else {
                console.log("else");
                this.nearestBrn = false;
                // this.slideOneForm.controls.transactionBranch.patchValue(this.trnBrn);
                this.accBranch = localStorage.getItem("AccBranch");
                console.log(this.accBranch);
                this.slideOneForm.controls.transactionBranch.patchValue(this.accBranch);
                // this.slideOneForm.get('transactionBranch').patchValue(this.customerDetails.custAccount[0].accountBranch);
            }
            if (this.brnflg == true && val == false) {
                this.slideOneForm.controls.transactionBranch.patchValue(this.accBranch);
                this.nearestBrn = true;
            }
        });
        this.shareDataService.getAccountInfo.subscribe(data => {
            this.accountInfo = data;
            console.log(data);
        });
    }
    loadData() {
        this.loading.present();
        this.api.custpomerDetails(this.phoneNumber)
            .subscribe((resp) => {
            this.loading.dismiss();
            console.log('backend resp in home', resp);
            this.customerDetails = resp;
            this.savingAccountFun(resp);
            // if(this.customerDetails.accountInfo.status == 'APPROVED'){
            // this.savingAccountFun(resp);
            // }
        }, (err) => {
            this.loading.dismiss();
        });
    }
    get f() { return this.slideOneForm.controls; }
    getCountrynameValues() {
        this.api.getCurrencyValues().subscribe((allCurrencyValues) => {
            this.currencies = allCurrencyValues;
        });
    }
    numberOnlyValidation(event) {
        this.transAmt = event.target.value;
        console.log(event.target.value);
        this.IntValue = Math.floor(this.slideOneForm.value.transactionAmount).toString().length;
        // if (this.IntValue > 3) {
        if (this.IntValue > 1) {
            let value;
            value = this.slideOneForm.value.transactionAmount;
            //let inputChar = String.fromCharCode(event.charCode);
            // debugger;
            this.transAmount = value;
            // debugger
            const pattern = value;
            let lastCharIsPoint = false;
            if (pattern.charAt(pattern.length - 1) === '.') {
                lastCharIsPoint = true;
            }
            const num = pattern.replace(/[^0-9.]/g, '');
            this.transAmt = Number(num);
            this.transAmount = this.transAmt.toLocaleString('en-US');
            if (lastCharIsPoint) {
                this.transAmount = this.transAmount.concat('.');
            }
            this.cdr.markForCheck();
        }
        // console.log(this.transAmt);
        console.log(this.currentBalance);
        console.log(this.transAmt);
        this.transAmt = this.transAmt.replace(/,/g, '');
        console.log(this.transAmt);
        if (parseFloat(this.currentBalance) < parseFloat(this.transAmt)) {
            console.log("Bigger");
            this.openToast1();
            // this.snack.open(`Transaction Amount should not exceed than Account Balance`, 'OK', {
            //   duration: 2000,
            //   verticalPosition: 'top',
            //   horizontalPosition: 'right'
            // });
        }
        // this.slideOneForm.controls['transactionAmount'].setValidators();
        else {
            return;
        }
    }
    openToast1() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Transaction Amount should not exceed than Account Balance',
                duration: 2000
            });
            toast.present();
        });
    }
    validateDisablebutton(button) {
        this.slideOneForm.valueChanges.subscribe(v => {
            // console.log("v:: ", v);
            if (button === 'disable1') {
                if (v.accountBranch != '' && v.accountNumber != '' && v.transactionAmount != ''
                    && v.transactionCurrency != '' && v.transactionAmount != 0) {
                    this.submitted = false;
                }
                else {
                    this.submitted = true;
                }
            }
            if (button === 'disable2') {
                if (v.transactionBranch != '' && v.transactionDate != '' && v.transactionTime != '' && v.accountNo != '') {
                    this.submitted1 = false;
                }
                else {
                    this.submitted1 = true;
                }
            }
        });
    }
    selectCurrencyCode(currency) {
        console.log(currency);
        console.log(this.currencies);
        this.currencyData = this.currencies.find(x => x.countryCode == currency);
        this.selectedCountryCode = this.currencyData.countryCode.toLowerCase();
    }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_branch_branch_component__WEBPACK_IMPORTED_MODULE_11__["BranchComponent"],
                id: "branchModal",
                componentProps: {}
            });
            modal.onDidDismiss().then((modelData) => {
                if (modelData !== null) {
                    let branch = modelData.data;
                    console.log('Modal Data for branch: ', modelData.data);
                    this.slideOneForm.get('transactionBranch').patchValue(modelData.data['data'].branchName);
                }
            });
            return yield modal.present();
        });
    }
    goToBranch() {
        this.router.navigate(['cashwithdrawal/branch']);
    }
    goToHomepage() {
        this.router.navigate(['/tabs/home']);
    }
    goToNextPage(fb) {
        this.flag = false;
    }
    goToPreviousPage() {
        this.flag = true;
    }
    goToNextScreen(form) {
        console.log(form);
        this.api.setIndex({
            index: 'CHW'
        });
        form.transactionDate.toString();
        var date = new Date(form.transactionDate);
        console.log(date); //4/
        let latest_date = this.datepipe.transform(date, 'yyyy-MM-dd');
        form.transactionDate = latest_date;
        // form.transactionTime=format(new Date(form.transactionTime), "HH:mm");
        this.currencyData = this.currencies.find(x => x.countryCode == form.transactionCurrency);
        form.transactionCurrency = this.currencyData.currencyCode;
        form.accountNumber = form.accountNumber;
        form.productCode = this.productCode;
        form.transactionTime = this.format24HrsTo12Hrs(form.transactionTime);
        // form.transactionTime = format(new Date(form.transactionTime), 'hh:mm:ss a');
        form.customerId = this.customerId;
        form.tokenOrigin = 'Mobile';
        console.log(form);
        this.accountNum = form.accountNumber;
        this.transactionAmount = form.transactionAmount;
        console.log(this.transactionAmount);
        this.transDate = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(form.transactionDate)).format("DD-MM-YYYY").toString();
        localStorage.setItem("AccountNumber", form.accountNumber);
        localStorage.setItem("TransactionDate", this.transDate);
        localStorage.setItem("TransactionAmount", form.transactionAmount);
        form.transactionAmount = form.transactionAmount.replace(/,/g, '');
        console.log(this.transactionAmount);
        console.log(form);
        localStorage.setItem("TransactionBranch", form.transactionBranch);
        console.log(form);
        console.log("after", form);
        // this.format24HrsTo12Hrs(form.transactionTime);
        this.api.cashDepositSave(form).subscribe((resp) => {
            console.log('backend resp', resp);
            this.cashWithdrawResponse = resp;
            this.transactionId = this.cashWithdrawResponse.transactionId;
            localStorage.setItem("TransactionTime", resp.transactionTime);
            if (this.cashWithdrawResponse === 200 || this.cashWithdrawResponse !== null) {
                this.shareDataService.shareTransactionId(this.transactionId);
                this.slideOneForm.reset();
                this.router.navigate(['token-generation']);
                console.log('transactionId::', this.transactionId);
            }
        });
    }
    openToast() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: 'Account Number is not existing for this customer Id',
                duration: 5000
            });
            toast.present();
        });
    }
    accountEvent(event) {
        this.isedit = false;
        console.log("events::", event);
        console.log("events details::", event.detail);
        console.log("event", event.detail.value);
        this.api.accountBalance(event.detail.value).subscribe((accbal) => {
            // console.log('backend accbal', accbal.lastTransactions);
            this.valueSet(accbal.currentBalance);
            // console.log('backend accbal', accbal);
            // console.log(this.slideOneForm.controls.transactionCurrency);
            this.currentBalance = accbal.amount;
            this.slideOneForm.controls.accountBalance.patchValue(accbal.amount);
            this.slideOneForm.controls.accountBranch.patchValue(accbal.accountBranch);
            localStorage.setItem("AccBranch", accbal.accountBranch);
            // console.log(this.slideOneForm.controls.transactionBranch.patchValue(accbal.accountBranch));
            // console.log(accbal);
            // this.slideOneForm.controls.transactionCurrency.patchValue(accbal.accountCurrency);
            // this.selectCurrencyCode(accbal.accountCurrency);
            //debugger;
            // console.log(accbal.transactionAmount);
            if (accbal.transactionAmount != null || accbal.transactionAmount != undefined) {
                this.numberOnlyValidation(accbal.transactionAmount);
            }
            // console.log('backend accbal', accbal.lastTransactions);
            if (accbal.lastTransactions != null) {
                if (accbal.lastTransactions.length <= 2) {
                    this.slideOneForm.controls.transactionBranch.patchValue(accbal.accountBranch);
                }
                else {
                    var brnCnt = 0;
                    var brnOldCnt = 0;
                    console.log("Else", accbal.lastTransactions);
                    for (var i = 0; i < accbal.lastTransactions.length; i++) {
                        if (accbal.lastTransactions[i].transactionBranch != null) {
                            for (var n = 0; n < accbal.lastTransactions.length; n++) {
                                if (accbal.lastTransactions[n].transactionBranch != null) {
                                    if (accbal.lastTransactions[i].transactionBranch === accbal.lastTransactions[n].transactionBranch) {
                                        brnCnt = brnCnt + 1;
                                    }
                                }
                            }
                        }
                        if (brnOldCnt < brnCnt && brnCnt >= 2) {
                            this.trnBrn = accbal.lastTransactions[i].transactionBranch;
                            brnOldCnt = brnCnt;
                            console.log("yhjghguuyjgh");
                        }
                        brnCnt = 0;
                    }
                    if (this.trnBrn != null && this.trnBrn !== accbal.accountBranch) {
                        console.log(this.trnBrn);
                        this.slideOneForm.controls.branchFlag.patchValue(false);
                        this.slideOneForm.controls.transactionBranch.patchValue(this.trnBrn);
                        console.log(localStorage.getItem("BranchFlag"));
                        this.brnflg = localStorage.getItem("BranchFlag");
                        this.brnflg = false;
                        this.nearestBrn = true;
                    }
                    else {
                        this.slideOneForm.controls.transactionBranch.patchValue(accbal.accountBranch);
                        this.nearestBrn = false;
                        this.brnflg = true;
                        console.log(this.nearestBrn);
                    }
                }
            }
            else {
                this.slideOneForm.controls.transactionBranch.patchValue(accbal.accountBranch);
                this.nearestBrn = false;
            }
            // if (accbal.lastTransactions != null) {
            //   if (accbal.lastTransactions.length <= 2) {
            //     this.slideOneForm.controls.transactionBranch.patchValue(accbal.accountBranch);
            //   }
            //   else {
            //     var trnBrn = null;
            //     var brnCnt = 0;
            //     var brnOldCnt = 0;
            //     console.log("Else", accbal.lastTransactions);
            //     for (var i = 0; i < accbal.lastTransactions.length; i++) {
            //       if (accbal.lastTransactions[i].transactionBranch != null) {
            //         for (var n = 0; n < accbal.lastTransactions.length; n++) {
            //           if (accbal.lastTransactions[n].transactionBranch != null) {
            //             if (accbal.lastTransactions[i].transactionBranch === accbal.lastTransactions[n].transactionBranch) {
            //               brnCnt = brnCnt + 1;
            //             }
            //             if (accbal.lastTransactions[i].transactionBranch != accbal.lastTransactions[n].transactionBranch) {
            //               trnBrn = accbal.lastTransactions[i].accountBranch;
            //             }
            //           }
            //         }
            //       }
            //       if (brnOldCnt < brnCnt && brnCnt >= 2) {
            //         trnBrn = accbal.lastTransactions[i].transactionBranch;
            //         brnOldCnt = brnCnt;
            //       }
            //       brnCnt = 0;
            //     }
            //     if (trnBrn != null) {
            //       this.slideOneForm.controls.transactionBranch.patchValue(trnBrn);
            //     } else {
            //       this.slideOneForm.controls.transactionBranch.patchValue(accbal.accountBranch);
            //     }
            //   }
            // }
            // else {
            //   this.slideOneForm.controls.transactionBranch.patchValue(accbal.accountBranch);
            // }
            // console.log(accbal.accountCurrency.countryName);
            for (let i in this.currencies) {
                this.selectedCountryCode = (this.currencies[i].countryCode).toLowerCase();
                this.slideOneForm.controls.transactionCurrency.patchValue(this.currencies[i].countryCode);
            }
            // this.selectedCountryCode = (currency.code).toLowerCase();
            // this.users=dropdown;
            //8042666041 8042666055
        });
    }
    valueSet(currentBalance) {
        this.currentBalance = currentBalance;
    }
    savingAccountFun(filteredResponseSavingAccount) {
        console.log(filteredResponseSavingAccount);
        this.users = filteredResponseSavingAccount.custAccount;
        this.curr = Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["getCurrencySymbol"])(filteredResponseSavingAccount.custAccount[0].accountCurrency, "narrow");
        this.currentBalance = this.users[0].amount;
        if (this.accountInfo.accountId != null) {
            this.slideOneForm.get('accountNumber').patchValue(this.accountInfo.accountId);
        }
        else {
            this.slideOneForm.get('accountNumber').patchValue(this.users[0].accountId);
        }
        console.log("user::", this.users);
        this.selectedCountryCode = filteredResponseSavingAccount.countryCode.toLowerCase();
        this.slideOneForm.controls.transactionCurrency.patchValue(filteredResponseSavingAccount.countryCode);
        this.slideOneForm.controls.accountBranch.patchValue(filteredResponseSavingAccount.custAccount[0].accountBranch);
        this.slideOneForm.get('transactionBranch').patchValue(filteredResponseSavingAccount.custAccount[0].accountBranch);
        this.cdr.markForCheck();
    }
    showToast(errorMessage) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: `${errorMessage}`,
                duration: 5000
            });
            toast.present();
        });
    }
    gettingAvailableSlots() {
        console.log("here in availabel slotshhhhhhhh");
        console.log(this.slideOneForm.controls.transactionDate.value);
        // let date=new Date()
        if (this.slideOneForm.controls.transactionDate.value != null) {
            let date = this.datepipe.transform(this.slideOneForm.controls.transactionDate.value, 'yyyy-MM-dd');
            let date1 = this.datepipe.transform(date, 'yyyy-MM-dd');
            console.log("here in slots", date1);
            this.api.gettingAvailableSlots(date1).subscribe(resp => {
                console.log(resp);
                this.timeSlots = resp;
            });
        }
        else {
            return;
        }
    }
    onSelectiongTimeSlots(event, data) {
        console.log("hitting", data);
        this.slideOneForm.get('transactionTime').patchValue(data);
        console.log(this.slideOneForm.value);
        if (this.selectAbleColor === "secondary") {
            this.selectAbleColor = "primary";
        }
        else {
            this.selectAbleColor = "secondary";
        }
    }
    format24HrsTo12Hrs(time) {
        var formatted = moment__WEBPACK_IMPORTED_MODULE_8__(time, "HH:mm").format("LT");
        return formatted;
    }
    openPopup() {
        console.log("popup");
        this.modalController.create({
            component: src_app_components_time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_13__["TimeSlotsComponent"],
            componentProps: {
                date: this.slideOneForm.get('transactionDate').value,
            }
        }).then(modalResp => {
            modalResp.present();
            modalResp.onDidDismiss().then(res => {
                if (res.data != null) {
                    console.log(res);
                    this.slideOneForm.get('transactionTime').patchValue(res.data);
                }
            });
        });
    }
};
CashwithdrawalPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_12__["LoadingService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ToastController"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
CashwithdrawalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cashwithdrawal',
        template: _raw_loader_cashwithdrawal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cashwithdrawal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CashwithdrawalPage);



/***/ }),

/***/ "wS3Y":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/cashwithdrawal/cashwithdrawal.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-operation [title] = \"cashWithdrawal\"></app-operation> -->\r\n<ion-header *ngIf=\"flag\">\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"flag\">\r\n  <div>\r\n    <!-- <form [formGroup]=\"slideOneForm\" [disabled]=\"customerDetails.custAccount.status !== 'APPROVED'\"> -->\r\n      <form [formGroup]=\"slideOneForm\">\r\n      <div class=\"inputCard1\">\r\n        <ion-label>Account Number*</ion-label>\r\n        <!-- <ion-input class=\"box\"></ion-input> -->\r\n        <ion-select\r\n          [compareWith]=\"compareWith\"\r\n          class=\"box\"\r\n          formControlName=\"accountNumber\"\r\n          (ionChange)=\"accountEvent($event)\"\r\n          ngDefaultControl\r\n        >\r\n          <ion-select-option *ngFor=\"let user of users\" [value]=\"user.accountId\"\r\n            >{{user.accountId}}</ion-select-option\r\n          >\r\n        </ion-select>\r\n        \r\n      </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\" class=\"labelCard\" style=\"font-size: 14px\"\r\n          >Account Balance : {{curr }} {{currentBalance}}</ion-label>\r\n      </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\" class=\"labelCard\"  style=\"font-size: 14px;\">Account Branch : {{slideOneForm.controls.accountBranch.value}}</ion-label>\r\n    </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label>Transaction Currency*</ion-label>\r\n      </div>\r\n      <div class=\"box7\">\r\n        <ion-card class=\"box\">\r\n          <ion-row>\r\n            <ion-col style=\"width: 10%\">\r\n              <ngx-flag-picker\r\n                [selectedCountryCode]=\"selectedCountryCode\"\r\n                [showFlags]=\"isShow\"\r\n                [showLabels]=\"!isShow\"\r\n                [showArrow]=\"!isShow\"\r\n              >\r\n              </ngx-flag-picker>\r\n            </ion-col>\r\n            <ion-col style=\"width: 20%\">\r\n              <ion-select\r\n                [compareWith]=\"compareWith\"\r\n                formControlName=\"transactionCurrency\" #code\r\n                (ionChange)=\"selectCurrencyCode(code.value)\"\r\n                style=\"font-size: large; margin-left: -40%\"\r\n              >\r\n                <ion-select-option\r\n                  *ngFor=\"let currency of currencies\"\r\n                  [value]=\"currency.countryCode\"\r\n                >\r\n                {{currency.currencyCode + ' : ' + currency.countryName.toUpperCase()}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\">Transaction Amount*</ion-label>\r\n        <ion-input \r\n          class=\"box\"  \r\n          #myRef [(ngModel)]= \"transAmount\"  \r\n          formControlName=\"transactionAmount\"\r\n          type=\"text\" \r\n          min=\"1\" \r\n          (keyup)=\"numberOnlyValidation($event)\" \r\n        >\r\n        </ion-input> \r\n        <div class=\"transactionAmounterrormsg\" *ngIf=\"  transAmt > currentBalance\">\r\n            Transaction  Amount cannot be greater than Account Balance        \r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"ion-padding-top\">\r\n      \r\n      \r\n        <div>\r\n          <ion-button\r\n            expand=\"block\"\r\n            shape=\"round\"\r\n            [disabled]=\"validateDisablebutton('disable1') ||!transAmount  || submitted ||   transAmt > currentBalance\" \r\n            (click)=\"goToNextPage()\"\r\n            style=\"width: 95%\"\r\n            >Next</ion-button\r\n          >\r\n          <!-- [disabled]=\"validateDisablebutton('disable1') ||!transAmount  || submitted ||  currentBalance < slideOneForm.controls['transactionAmount'].value\" -->\r\n        </div>\r\n        <div>\r\n          <ion-button\r\n            expand=\"block\"\r\n            shape=\"round\"\r\n            fill=\"clear\"\r\n            style=\"color: black\"\r\n            (click)=\"goToHomepage()\"\r\n            >Cancel</ion-button\r\n          >\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-header *ngIf=\"!flag\">\r\n  <ion-toolbar>\r\n    <ion-icon\r\n      class=\"backIcon\"\r\n      name=\"chevron-back-outline\"\r\n      (click)=\"goToPreviousPage()\"\r\n    ></ion-icon>\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=\"!flag\">\r\n  <div>\r\n    <form [formGroup]=\"slideOneForm\">\r\n      <!-- <div class=\"textCard\">\r\n            <ion-text>\r\n              <h5 style=\"color: gray;padding-left: 4%;\">Do you wish to perform this transaction in your home branch</h5>\r\n            </ion-text>\r\n          </div>\r\n  \r\n          <div class=\"inputCard2\">\r\n            <ion-radio-group>\r\n              <ion-row>\r\n               <ion-col>\r\n                 <ion-item lines=\"none\">\r\n                 <ion-radio mode=\"md\" value=\"buy\"></ion-radio>\r\n                 <ion-label position=\"start\" style=\"padding-left: 10px;\">yes</ion-label>\r\n                 </ion-item>\r\n                </ion-col>\r\n    \r\n               <ion-col>\r\n                 <ion-item lines=\"none\">\r\n                 <ion-radio mode=\"md\" value=\"sell\"></ion-radio>\r\n                 <ion-label style=\"padding-left: 10px;\">No</ion-label>\r\n                 </ion-item>\r\n               </ion-col>\r\n              </ion-row>\r\n            </ion-radio-group>\r\n         </div> -->\r\n\r\n      <div style=\"margin-left: 19px; margin-top: 19px; margin-right: 19px\">\r\n        <ion-label\r\n          >Do you wish to perform this transaction in your branch?</ion-label\r\n        >\r\n        <!-- <ion-label></ion-label> -->\r\n        <ion-radio-group name=\"branchFlags\" formControlName=\"branchFlag\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label position=\"start\">Yes</ion-label>\r\n                <ion-radio mode=\"md\" item-left name=\"flagYes\" [value]=\"true\"></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label>No</ion-label>\r\n                <ion-radio mode=\"md\" item-left name=\"flagNo\" [value]=\"false\"></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          </ion-radio-group>\r\n  </div>\r\n  \r\n         <div class=\"inputCard2\">\r\n          <ion-router-link (click)=\"presentModal()\" [hidden]=\"!nearestBrn\" class=\"underline\">Click here to find nearest branch</ion-router-link>\r\n         </div>\r\n         <br>\r\n    \r\n         <div class=\"inputCard2\" >\r\n          <ion-label style=\"padding-left: 5%;\">Transaction Branch*</ion-label>\r\n          <ion-card class=\"box\" >\r\n            <ion-item lines=\"none\">\r\n              <ion-input appearence=\"none\" formControlName=\"transactionBranch\" \r\n              [readonly]=\"slideOneForm.get('branchFlag').value ? true : false\">\r\n             </ion-input>\r\n             <ion-icon *ngIf=\"slideOneForm.get('branchFlag').value == true\" name=\"home-outline\" color=\"primary\" slot=\"end\"></ion-icon>\r\n             <ion-icon *ngIf=\"slideOneForm.get('branchFlag').value == false\" name=\"navigate-circle-outline\" color=\"primary\" slot=\"end\"></ion-icon>\r\n            </ion-item>\r\n          </ion-card>\r\n            <ion-note style=\"color: red; margin-left: 22px;top: 13px;\" *ngIf=\"f.transactionBranch.errors?.required && f.transactionBranch.touched\"> \r\n              <small>Transaction Branch Required</small>\r\n            </ion-note>\r\n         </div>\r\n  \r\n        <div class=\"inputCard2\">\r\n  \r\n            <ion-label style=\"padding-left: 5%;\">Transaction date*</ion-label>\r\n          <ion-card class=\"box\" >\r\n            <ion-item lines=\"none\">\r\n                <ion-datetime  [min]=\"minDate\"  (ionChange)=\"gettingAvailableSlots()\" [max]=\"maxDate\" placeholder=\"Select date\" formControlName=\"transactionDate\" >\r\n                </ion-datetime>\r\n              <ion-icon name=\"calendar\" slot=\"end\" ></ion-icon>\r\n  \r\n           </ion-item> \r\n       </ion-card>\r\n       </div>\r\n      \r\n  \r\n      \r\n        <div class=\"inputCard2\">\r\n            <ion-label style=\"padding-left: 5%;\">Time Slot*</ion-label>\r\n          <ion-card class=\"box\">\r\n            <ion-item  lines=\"none\">\r\n                <ion-input  formControlName=\"transactionTime\"></ion-input>\r\n             <!-- <ion-datetime displayFormat=\"hh:mm A\"  placeholder=\"Select time slot\" formControlName=\"transactionTime\"></ion-datetime> -->\r\n             <ion-icon name=\"alarm-outline\" slot=\"end\"  (click)=\"openPopup()\"></ion-icon>\r\n           </ion-item>\r\n          </ion-card>\r\n          </div> \r\n         <!-- <ion-label style=\"padding-left: 5%;\">Time Slot*</ion-label>\r\n      \r\n  \r\n             <ion-chip *ngFor=\"let slot of timeSlots;let i=index;\" [id]=\"i+1\"  color=\"warn\" >\r\n                <ion-label (click)=\"onSelectiongTimeSlots($event,slot)\">{{format24HrsTo12Hrs(slot)}}</ion-label>\r\n              \r\n              </ion-chip>\r\n            \r\n              <input type=\"text\" hidden formControlName=\"transactionTime\"> -->\r\n            \r\n            \r\n      \r\n  \r\n       <div class=\"inputCard2\" *ngIf=\"title == 'Cheque Withdrawal' || title =='Cheque Deposit'\">\r\n        <ion-label position=\"stacked\">Remark</ion-label>\r\n        <ion-input class=\"chequeCard\" formControlName=\"accountNo\"></ion-input>\r\n      </div>\r\n\r\n      <div class=\"ion-padding-top\">\r\n        <div>\r\n          <ion-button\r\n            expand=\"block\"\r\n            shape=\"round\"\r\n            [disabled]=\"validateDisablebutton('disable2')  || submitted1\"\r\n            (click)=\"goToNextScreen(slideOneForm.value)\"\r\n            >Next</ion-button\r\n          >\r\n        </div>\r\n\r\n        <div>\r\n          <ion-button\r\n            expand=\"block\"\r\n            shape=\"round\"\r\n            fill=\"clear\"\r\n            style=\"width: 95%; color: black\"\r\n            (click)=\"goToPreviousPage()\"\r\n            >Back</ion-button\r\n          >\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n");

/***/ })

}]);
//# sourceMappingURL=views-cashwithdrawal-cashwithdrawal-module.js.map