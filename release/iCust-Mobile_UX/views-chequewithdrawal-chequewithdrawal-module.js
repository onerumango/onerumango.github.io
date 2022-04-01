(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-chequewithdrawal-chequewithdrawal-module"],{

/***/ "1N3d":
/*!*******************************************************************!*\
  !*** ./src/app/views/chequewithdrawal/chequewithdrawal.module.ts ***!
  \*******************************************************************/
/*! exports provided: ChequewithdrawalPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequewithdrawalPageModule", function() { return ChequewithdrawalPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _chequewithdrawal_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chequewithdrawal-routing.module */ "900x");
/* harmony import */ var _chequewithdrawal_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chequewithdrawal.page */ "Prlu");
/* harmony import */ var ngx_flag_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-flag-picker */ "09Zs");
/* harmony import */ var _operation_operation_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../operation/operation.page */ "H7HN");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");











let ChequewithdrawalPageModule = class ChequewithdrawalPageModule {
};
ChequewithdrawalPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _chequewithdrawal_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChequewithdrawalPageRoutingModule"],
            ngx_flag_picker__WEBPACK_IMPORTED_MODULE_7__["NgxFlagPickerModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_10__["ComponentsModule"]
        ],
        declarations: [_chequewithdrawal_page__WEBPACK_IMPORTED_MODULE_6__["ChequewithdrawalPage"], _operation_operation_page__WEBPACK_IMPORTED_MODULE_8__["OperationPage"]]
    })
], ChequewithdrawalPageModule);



/***/ }),

/***/ "7iK1":
/*!*******************************************************************!*\
  !*** ./src/app/views/chequewithdrawal/chequewithdrawal.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: \"Montserrat\" !important;\n  /* Add !important to overwrite all elements */\n}\n\n.transactionAmounterrormsg {\n  color: red;\n  font-size: small;\n  padding-top: 7px;\n}\n\n.box {\n  border-width: thin;\n  border-radius: 13px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  width: 95%;\n  height: 55px;\n  margin-top: 10px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.chequeCard {\n  border-width: thin;\n  border-radius: 10px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  width: 95%;\n  margin-left: 4%;\n  height: 100px;\n  display: inline-block;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\nform::-webkit-scrollbar {\n  display: none;\n}\n\n.inputCard1 {\n  padding-top: 7%;\n  padding-left: 5%;\n}\n\n.inputCard2 {\n  padding-top: 3%;\n  padding-left: 3%;\n}\n\n.textCard {\n  padding-left: 5%;\n}\n\n.labelCard {\n  color: gray;\n}\n\n.underline {\n  text-decoration: underline;\n  font-size: 14px;\n  padding-left: 4%;\n}\n\n.ion-padding-top {\n  padding-top: 10%;\n  padding-left: 3%;\n}\n\n.ion-padding-top2 {\n  padding-top: 8%;\n  padding-left: 5%;\n}\n\n.cancelcard {\n  padding-top: 8%;\n  padding-left: 44%;\n  font-size: 14px;\n}\n\n.backcard {\n  padding-top: 8%;\n  padding-left: 47%;\n  font-size: 14px;\n}\n\n.icondate {\n  display: inline-block;\n}\n\nion-searchbar {\n  background-color: #f9fafb;\n}\n\nion-select {\n  font-family: \"Montserrat-SemiBold\" !important;\n  font-size: 14pt;\n}\n\nion-text {\n  font-family: \"Montserrat\" !important;\n  font-size: 14px;\n  opacity: 75%;\n}\n\nion-button {\n  width: 95%;\n  padding-left: 5%;\n  height: 50px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-input {\n  color: black !important;\n  font-size: 14pt;\n  --placeholder-color: black !important;\n  font-family: \"Montserrat\" !important;\n}\n\nion-label {\n  color: #102245;\n  font-family: \"Montserrat\" !important;\n  font-size: 14px;\n  opacity: 75%;\n}\n\nion-back-button {\n  color: #4949e2;\n  margin-bottom: 2%;\n  font-size: larger;\n  text-transform: none;\n}\n\nion-toolbar {\n  margin-top: 5%;\n  box-shadow: 0 5pt 5pt -2pt #D3D3D3;\n}\n\nngx-flag-picker {\n  display: inline-block;\n  font-size: x-large;\n  padding-top: 14px;\n  padding-left: 20px;\n  padding-top: 4%;\n  align-content: center;\n}\n\n.box7 {\n  padding-top: 0%;\n  padding-left: 0%;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.backIcon {\n  font-size: xx-large;\n  color: #466ffe;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.ioncontent {\n  height: 110%;\n  margin-top: -3%;\n}\n\n.ioncontent1 {\n  height: 135%;\n}\n\n.text {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  color: blue;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGVxdWV3aXRoZHJhd2FsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLG9DQUFBO0VBQ0QsNkNBQUE7QUFGSDs7QUFJRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBREo7O0FBR0U7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUZBQUE7RUFDQSwrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFFQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7QUFETjs7QUFHTTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxRkFBQTtFQUNBLCtCQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFFQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7QUFEUjs7QUFJTTtFQUNFLGFBQUE7QUFEUjs7QUFHRztFQUdJLGVBQUE7RUFDQSxnQkFBQTtBQUZQOztBQUlHO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0FBREo7O0FBSUc7RUFFQyxnQkFBQTtBQUZKOztBQUlHO0VBQ0ksV0FBQTtBQURQOztBQUtHO0VBQ0csMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFGTjs7QUFJSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFEUjs7QUFJSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUROOztBQUdJO0VBQ0YsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUFGOztBQUVJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUNOOztBQUNJO0VBQ0YscUJBQUE7QUFFRjs7QUFFSztFQUNELHlCQUFBO0FBQ0o7O0FBRUU7RUFDRSw2Q0FBQTtFQUNBLGVBQUE7QUFDSjs7QUFDRTtFQUNFLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFFSjs7QUFDRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQUVKOztBQUNHO0VBQ0MsdUJBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7RUFFQSxvQ0FBQTtBQUNKOztBQUNJO0VBQ0UsY0FBQTtFQUNDLG9DQUFBO0VBQ0MsZUFBQTtFQUNBLFlBQUE7QUFFUjs7QUFBSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFHUjs7QUFBSTtFQUNFLGNBQUE7RUFDRCxrQ0FBQTtBQUdMOztBQURJO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFJTjs7QUFESTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFJTjs7QUFGRztFQUNLLG1CQUFBO0VBRUEsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFJUjs7QUFESTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBSU47O0FBRkk7RUFDRSxZQUFBO0FBS047O0FBSEk7RUFDSSxlQUFBO0VBQ0YscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUFNTiIsImZpbGUiOiJjaGVxdWV3aXRoZHJhd2FsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGFwcC1vcGVyYXRpb257XHJcbi8vICAgICBoZWlnaHQ6IDYwMCU7XHJcbi8vIH1cclxuKiB7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgIC8qIEFkZCAhaW1wb3J0YW50IHRvIG92ZXJ3cml0ZSBhbGwgZWxlbWVudHMgKi9cclxuICB9XHJcbiAgLnRyYW5zYWN0aW9uQW1vdW50ZXJyb3Jtc2d7XHJcbiAgICBjb2xvcjpyZWQ7XHJcbiAgICBmb250LXNpemU6IHNtYWxsO1xyXG4gICAgcGFkZGluZy10b3A6IDdweDtcclxuICB9XHJcbiAgLmJveCB7XHJcbiAgICAgIGJvcmRlci13aWR0aDogdGhpbjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTNweDtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxyZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gICAgICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gICAgICB3aWR0aDogOTUlO1xyXG4gICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgXHJcbiAgICAgIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcclxuICAgICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XHJcbiAgICB9XHJcbiAgICAgIC5jaGVxdWVDYXJke1xyXG4gICAgICAgIGJvcmRlci13aWR0aDogdGhpbjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkscmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQlO1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XHJcbiAgICAgICAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gICAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBoaWRkZW47XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBmb3JtOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgLmlucHV0Q2FyZDF7XHJcbiAgICAgIC8vICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gICAgICAvLyAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgICAgIHBhZGRpbmctdG9wOiA3JTtcclxuICAgICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgIH1cclxuICAgLmlucHV0Q2FyZDJ7XHJcbiAgICBwYWRkaW5nLXRvcDogMyU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG4gIH1cclxuICBcclxuICAgLnRleHRDYXJke1xyXG4gICAgLy8gcGFkZGluZy10b3A6IC02JTtcclxuICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgfVxyXG4gICAubGFiZWxDYXJke1xyXG4gICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgICAvL2ZvbnQtc2l6ZTogMjBweDtcclxuICAgfVxyXG4gIFxyXG4gICAudW5kZXJsaW5lIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA0JTtcclxuICAgIH1cclxuICAgIC5pb24tcGFkZGluZy10b3B7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDEwJTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmlvbi1wYWRkaW5nLXRvcDJ7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA4JTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIH1cclxuICAgIC5jYW5jZWxjYXJke1xyXG4gIHBhZGRpbmctdG9wOiA4JTtcclxuICBwYWRkaW5nLWxlZnQ6IDQ0JTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAuYmFja2NhcmR7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA4JTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiA0NyU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAuaWNvbmRhdGV7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIFxyXG4gICAgfVxyXG4gICBcclxuICAgICBpb24tc2VhcmNoYmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XHJcbiAgIH1cclxuICBcclxuICBpb24tc2VsZWN0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0LVNlbWlCb2xkJyAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNHB0O1xyXG4gIH1cclxuICBpb24tdGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG9wYWNpdHk6IDc1JTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWJ1dHRvbntcclxuICAgIHdpZHRoOiA5NSU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgXHJcbiAgfVxyXG4gICBpb24taW5wdXQge1xyXG4gICAgY29sb3I6YmxhY2sgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTRwdDtcclxuICAgIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICAvLyBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBpb24tbGFiZWx7XHJcbiAgICAgIGNvbG9yOiMxMDIyNDU7XHJcbiAgICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDc1JTtcclxuICAgIH1cclxuICAgIGlvbi1iYWNrLWJ1dHRvbntcclxuICAgICAgICBjb2xvcjogcmdiKDczLCA3MywgMjI2KTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuICAgIH1cclxuICAgXHJcbiAgICBpb24tdG9vbGJhcntcclxuICAgICAgbWFyZ2luLXRvcDo1JTtcclxuICAgICBib3gtc2hhZG93OiAwIDVwdCA1cHQgLTJwdCAjRDNEM0QzO1xyXG4gIH1cclxuICAgIG5neC1mbGFnLXBpY2tlcntcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiA0JTtcclxuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIFxyXG4gICAgfVxyXG4gICAgLmJveDd7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAwJTtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAwJTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7IFxyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IFxyXG4gICAgfVxyXG4gICAuYmFja0ljb257XHJcbiAgICAgICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgICAgICAvLyBjb2xvcjogYmx1ZTtcclxuICAgICAgICBjb2xvcjpyZ2IoNzAsMTExLDI1NCk7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgXHJcbiAgICB9XHJcbiAgICAuaW9uY29udGVudHtcclxuICAgICAgaGVpZ2h0OiAxMTAlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAtMyU7XHJcbiAgICB9XHJcbiAgICAuaW9uY29udGVudDF7XHJcbiAgICAgIGhlaWdodDogMTM1JTtcclxuICAgIH1cclxuICAgIC50ZXh0e1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgICBjb2xvcjogYmx1ZTtcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgIFxyXG4gIFxyXG4gICAgLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAgIC8vICAgLmlvbmNvbnRlbnR7XHJcbiAgICAvLyAgICAgaGVpZ2h0OiAxMzAlO1xyXG4gICAgLy8gICAgIG1hcmdpbi10b3A6IC0zJTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gICAuaW9uY29udGVudDF7XHJcbiAgICAvLyAgICAgaGVpZ2h0OiAxNjUlO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyB9Il19 */");

/***/ }),

/***/ "900x":
/*!***************************************************************************!*\
  !*** ./src/app/views/chequewithdrawal/chequewithdrawal-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: ChequewithdrawalPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequewithdrawalPageRoutingModule", function() { return ChequewithdrawalPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chequewithdrawal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chequewithdrawal.page */ "Prlu");




const routes = [
    {
        path: '',
        component: _chequewithdrawal_page__WEBPACK_IMPORTED_MODULE_3__["ChequewithdrawalPage"]
    }
];
let ChequewithdrawalPageRoutingModule = class ChequewithdrawalPageRoutingModule {
};
ChequewithdrawalPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChequewithdrawalPageRoutingModule);



/***/ }),

/***/ "Dlb8":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/chequewithdrawal/chequewithdrawal.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-operation [title] = \"cashWithdrawal\"></app-operation> -->\r\n<ion-header *ngIf=flag>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=flag >\r\n  <div >\r\n    <!-- <form [formGroup]=\"slideOneForm\" [disabled]=\"customerDetails.custAccount.status !== 'APPROVED'\" > -->\r\n      <form [formGroup]=\"slideOneForm\" >\r\n      \r\n      <div class=\"inputCard1\">\r\n        <ion-label>Account Number*</ion-label>\r\n        <!-- <ion-input class=\"box\"></ion-input> -->\r\n        <ion-select [compareWith]=\"compareWith\" class=\"box\" (ionChange)=\"accountEvent($event)\" formControlName=\"accountNumber\" ngDefaultControl>\r\n          <ion-select-option *ngFor=\"let user of users\" [value]=\"user.accountId\" >{{user.accountId}}</ion-select-option>\r\n        </ion-select>\r\n        </div>\r\n\r\n        <div class=\"inputCard1\">\r\n          <ion-label position=\"stacked\" class=\"labelCard\"  style=\"font-size: 14px;\">Account Balance : {{curr }} {{currentBalance}}</ion-label>   \r\n          </div>\r\n\r\n          <div class=\"inputCard1\">\r\n            <ion-label position=\"stacked\" class=\"labelCard\"  style=\"font-size: 14px;\">Account Branch : {{slideOneForm.controls.accountBranch.value}}</ion-label>\r\n        </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label>Transaction Currency*</ion-label>\r\n        </div>\r\n        <div class=\"box7\">\r\n          \r\n          <ion-card class=\"box\">\r\n            <ion-row>\r\n              <ion-col style=\"width: 10%;\">\r\n                  <ngx-flag-picker\r\n                  [selectedCountryCode]=\"selectedCountryCode\"\r\n                  [showFlags]=\"isShow\"\r\n                  [showLabels]=\"!isShow\"\r\n                  [showArrow]=\"!isShow\">\r\n                </ngx-flag-picker>\r\n               </ion-col>\r\n              <ion-col style=\"width: 20%;\">\r\n                  <ion-select [compareWith]=\"compareWith\" formControlName=\"transactionCurrency\" #code (ionChange)=\"selectCurrencyCode(code.value)\" style=\"font-size: large;margin-left: -40%;\">\r\n                    <ion-select-option *ngFor=\"let currency of currencies\" [value]=\"currency.countryCode\" >\r\n                   {{currency.currencyCode + ' : ' + currency.countryName.toUpperCase()}}\r\n                    </ion-select-option>\r\n                    </ion-select>\r\n              </ion-col>\r\n             </ion-row>\r\n           </ion-card>\r\n          </div>\r\n\r\n      <div class=\"inputCard1\">\r\n          <ion-label position=\"stacked\">Transaction Amount*</ion-label>\r\n          <ion-input \r\n            class=\"box\" \r\n            #myRef [(ngModel)]= \"transAmount\"  \r\n            formControlName=\"transactionAmount\" \r\n            type=\"text\" \r\n            min=\"1\" \r\n            (keyup)=\"numberOnlyValidation($event)\"\r\n          >\r\n          </ion-input>\r\n          <div class=\"transactionAmounterrormsg\" *ngIf=\" transAmt > currentBalance\">\r\n            Transaction  Amount cannot be greater than Account Balance    \r\n          </div>\r\n                 \r\n\r\n      </div>\r\n     \r\n      <div class=\"inputCard1\">\r\n        <ion-label>Cheque Number*</ion-label>\r\n        <!--<ion-input class=\"box\" formcontrolName=\"chequeNumber\" \r\n        type=\"number\" maxLength=\"12\"></ion-input>-->\r\n        <ion-input class=\"box\" formcontrolName=\"chequeNumber\" (keypress)=_keyPress($event)\r\n        type=\"tel\" maxLength=\"12\"></ion-input>\r\n      </div>\r\n\r\n      <!-- <div class=\"inputCard1\">\r\n          <ion-label position=\"stacked\" >Account Branch*</ion-label>\r\n          <ion-input class=\"box\" formControlName=\"accountBranch\"></ion-input>\r\n      </div> -->\r\n\r\n  <div class=\"ion-padding-top\">\r\n  <div>\r\n    <ion-button  expand=\"block\" shape=\"round\"(click)=\"goToNextPage()\"\r\n    [disabled]=\"validateDisablebutton('disable1') ||!transAmount  || submitted ||  transAmt > currentBalance\" style=\"width: 95%;\">Next</ion-button>\r\n  </div>\r\n  <div>\r\n    <ion-button expand=\"block\" shape=\"round\" fill=\"clear\" style=\"color: black;\"\r\n    (click)=\"goToHomepage()\">Cancel</ion-button>\r\n</div>\r\n\r\n\r\n</div>\r\n     \r\n    </form>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-header *ngIf=!flag>\r\n  <ion-toolbar>\r\n    <ion-icon class=\"backIcon\" name=\"chevron-back-outline\" (click)=\"goToPreviousPage()\"></ion-icon>\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=!flag>\r\n  <div>\r\n    <form [formGroup]=\"slideOneForm\">\r\n        <!-- <div class=\"textCard\">\r\n          <ion-text>\r\n            <h5 style=\"color: gray;padding-left: 4%;\">Do you wish to perform this transaction in your home branch</h5>\r\n          </ion-text>\r\n        </div>\r\n\r\n        <div class=\"inputCard2\">\r\n          <ion-radio-group>\r\n            <ion-row>\r\n             <ion-col>\r\n               <ion-item lines=\"none\">\r\n               <ion-radio mode=\"md\" value=\"buy\"></ion-radio>\r\n               <ion-label position=\"start\" style=\"padding-left: 10px;\">yes</ion-label>\r\n               </ion-item>\r\n              </ion-col>\r\n  \r\n             <ion-col>\r\n               <ion-item lines=\"none\">\r\n               <ion-radio mode=\"md\" value=\"sell\"></ion-radio>\r\n               <ion-label style=\"padding-left: 10px;\">No</ion-label>\r\n               </ion-item>\r\n             </ion-col>\r\n            </ion-row>\r\n          </ion-radio-group>\r\n       </div> -->\r\n\r\n       <div style=\"margin-left: 19px;margin-top: 19px;margin-right: 19px\">\r\n        <ion-label >Do you wish to perform this transaction in your branch?</ion-label>\r\n        <!-- <ion-label></ion-label> -->\r\n        <ion-radio-group name=\"branchFlags\" formControlName=\"branchFlag\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label position=\"start\">Yes</ion-label>\r\n                <ion-radio mode=\"md\" item-left name=\"flagYes\" [value]=\"true\"></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label>No</ion-label>\r\n                <ion-radio mode=\"md\" item-left name=\"flagNo\" [value]=\"false\"></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          </ion-radio-group>\r\n</div>\r\n\r\n       <div class=\"inputCard2\">\r\n          <ion-router-link (click)=\"presentModal()\" [hidden]=\"!nearestBrn\" class=\"underline\">Click here to find nearest branch</ion-router-link>\r\n       </div><br>\r\n  \r\n       <div class=\"inputCard2\" >\r\n        <ion-label style=\"padding-left: 5%;\">Transaction Branch*</ion-label>\r\n        <ion-card class=\"box\" >\r\n          <ion-item lines=\"none\">\r\n            <ion-input appearence=\"none\" formControlName=\"transactionBranch\" \r\n            [readonly]=\"slideOneForm.get('branchFlag').value ? true : false\">\r\n           </ion-input>\r\n           <ion-icon *ngIf=\"slideOneForm.get('branchFlag').value == true\" name=\"home-outline\" color=\"primary\" slot=\"end\"></ion-icon>\r\n           <ion-icon *ngIf=\"slideOneForm.get('branchFlag').value == false\" name=\"navigate-circle-outline\" color=\"primary\" slot=\"end\"></ion-icon>\r\n          </ion-item>\r\n        </ion-card>\r\n          <ion-note style=\"color: red; margin-left: 22px;top: 13px;\" *ngIf=\"f.transactionBranch.errors?.required && f.transactionBranch.touched\"> \r\n            <small>Transaction Branch Required</small>\r\n          </ion-note>\r\n       </div>\r\n\r\n      <div class=\"inputCard2\">\r\n\r\n          <ion-label style=\"padding-left: 5%;\">Transaction date*</ion-label>\r\n        <ion-card class=\"box\" >\r\n          <ion-item lines=\"none\">\r\n              <ion-datetime displayFormat=\"DDD. MMM DD, YY\" [min]=\"minDate\"  [max]=\"maxDate\" placeholder=\"Select date\" formControlName=\"transactionDate\" >\r\n              </ion-datetime>\r\n         <ion-icon name=\"calendar\" slot=\"end\"></ion-icon>\r\n\r\n         </ion-item> \r\n     </ion-card>\r\n     </div>\r\n    \r\n\r\n     <div class=\"inputCard2\">\r\n       <ion-label style=\"padding-left: 5%;\">Time Slot*</ion-label>\r\n     <ion-card class=\"box\">\r\n       <ion-item lines=\"none\">\r\n          <ion-input formControlName=\"transactionTime\"></ion-input>\r\n        <!-- <ion-datetime displayFormat=\"hh:mm A\"  placeholder=\"Select time slot\" formControlName=\"transactionTime\"></ion-datetime> -->\r\n        <ion-icon name=\"alarm-outline\" slot=\"end\" (click)=\"openPopup()\"></ion-icon>\r\n      </ion-item>\r\n     </ion-card>\r\n     </div> \r\n\r\n     <div class=\"inputCard2\" *ngIf=\"title == 'Cheque Withdrawal' || title =='Cheque Deposit'\">\r\n      <ion-label position=\"stacked\">Remark</ion-label>\r\n      <ion-input class=\"chequeCard\" formControlName=\"remarks\" ></ion-input>\r\n     </div>\r\n\r\n     \r\n\r\n\r\n     <div class=\"ion-padding-top\">\r\n    <div>\r\n      <ion-button  expand=\"block\" shape=\"round\" (click)=\"save(slideOneForm.value)\">Next</ion-button>\r\n    </div>\r\n\r\n \r\n    <div>\r\n      <ion-button expand=\"block\" shape=\"round\" fill=\"clear\" style=\"width: 95%;color:black;\"\r\n(click)=\"goToPreviousPage()\">Back</ion-button>\r\n  </div>\r\n</div>\r\n  </form>\r\n</div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "Prlu":
/*!*****************************************************************!*\
  !*** ./src/app/views/chequewithdrawal/chequewithdrawal.page.ts ***!
  \*****************************************************************/
/*! exports provided: ChequewithdrawalPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequewithdrawalPage", function() { return ChequewithdrawalPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chequewithdrawal_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chequewithdrawal.page.html */ "Dlb8");
/* harmony import */ var _chequewithdrawal_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chequewithdrawal.page.scss */ "7iK1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_components_branch_branch_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/components/branch/branch.component */ "z5an");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var src_app_components_time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/time-slots/time-slots.component */ "5aLK");
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/loading.service */ "7ch9");
















let ChequewithdrawalPage = class ChequewithdrawalPage {
    constructor(router, fb, api, toastCtrl, modalController, datepipe, loading, shareDataService, cdr) {
        this.router = router;
        this.fb = fb;
        this.api = api;
        this.toastCtrl = toastCtrl;
        this.modalController = modalController;
        this.datepipe = datepipe;
        this.loading = loading;
        this.shareDataService = shareDataService;
        this.cdr = cdr;
        this.title = 'Cheque Withdrawal';
        this.productCode = 'CQW';
        this.tokenOrigin = 'Mobile';
        //transAmount:number;
        this.isedit = true;
        this.accountBranch = "Loita street";
        this.flag = true;
        this.submitted = true;
        this.trnBrn = null;
        this.minDate = new Date().toISOString();
        this.maxDate = new Date(new Date().setDate(new Date().getDate() + 7)).toISOString();
        this.isShow = true;
        this.selectedCountryCode = '';
    }
    ngOnInit() {
        this.phoneNumber = localStorage.getItem('PhoneNumLogin');
        this.customerId = sessionStorage.getItem('customer_id');
        // this.api.accountDropDown(this.customerId).subscribe((dropdown) => {
        //   console.log('backend dropdown', dropdown);
        //   this.users=dropdown;
        // });
        console.log("customer_id", this.customerId);
        this.slideOneForm = this.fb.group({
            transactionId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            customerId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            chequeDepositId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            productCode: ['CQW', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            tokenOrigin: ['Mobile', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            accountNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            accountBalance: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            transactionCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            transactionAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            branchFlag: [true, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            accountBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            transactionDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            transactionBranch: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            transactionTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            exchangeRate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            accountAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            totalChargeAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            narrative: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            denomination: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            totalAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            createdBy: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            createdTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            modifiedBy: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            modifiedTime: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            recordStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            authStatus: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            version: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            remarks: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            chequeNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(12)]],
        });
        console.log(this.slideOneForm.value);
        this.getCountrynameValues();
        this.loadData();
        this.slideOneForm.get('branchFlag').valueChanges.subscribe(val => {
            console.log("branch flag? val", val);
            console.log("branch flag?", this.brnflg);
            localStorage.setItem("BranchFlag", val);
            this.brnflg = val;
            // if (val == false) {
            //   console.log("1st if");
            //   this.slideOneForm.get('transactionBranch').patchValue("");
            //   this.nearestBrn = true;
            // }
            if (this.brnflg == false && val == false) {
                console.log("1st if");
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
                console.log(this.accBranch);
                console.log("2nd if");
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
        this.api.custpomerDetails(this.phoneNumber).subscribe((resp) => {
            this.loading.dismiss();
            console.log('backend resp in home', resp);
            this.customerDetails = resp;
            this.savingAccountFun(resp);
            // if(this.customerDetails.accountInfo.status == 'APPROVED'){
            //   this.savingAccountFun(resp);
            //   }
        }, (err) => {
            this.loading.dismiss();
        });
    }
    get f() { return this.slideOneForm.controls; }
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
        });
    }
    numberOnlyValidation(event) {
        this.transAmt = event.target.value;
        console.log(event.target.value);
        this.IntValue = Math.floor(this.slideOneForm.value.transactionAmount).toString().length;
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
            this.cdr.detectChanges();
        }
        // console.log(this.transAmt);
        console.log(this.currentBalance);
        console.log(this.transAmt);
        this.transAmt = this.transAmt.replace(/,/g, '');
        console.log(this.transAmt);
        if (parseFloat(this.currentBalance) < parseFloat(this.transAmt)) {
            console.log("Bigger");
            this.openToast1();
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
    getCountrynameValues() {
        this.api.getCurrencyValues().subscribe((allCurrencyValues) => {
            this.currencies = allCurrencyValues;
        });
    }
    selectCurrencyCode(currency) {
        console.log(currency);
        this.currencyData = this.currencies.find(x => x.countryCode == currency);
        this.selectedCountryCode = this.currencyData.countryCode.toLowerCase();
    }
    savingAccountFun(filteredResponseSavingAccount) {
        console.log(filteredResponseSavingAccount);
        this.users = filteredResponseSavingAccount.custAccount;
        this.curr = Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["getCurrencySymbol"])(filteredResponseSavingAccount.custAccount[0].accountCurrency, "narrow");
        this.currentBalance = this.users[0].amount;
        if (this.accountInfo.accountId != null) {
            this.slideOneForm.get('accountNumber').patchValue(this.accountInfo.accountId);
        }
        else {
            this.slideOneForm.get('accountNumber').patchValue(this.users[0].accountId);
        }
        this.selectedCountryCode = filteredResponseSavingAccount.countryCode.toLowerCase();
        this.slideOneForm.controls.transactionCurrency.patchValue(filteredResponseSavingAccount.countryCode);
        this.slideOneForm.controls.accountBranch.patchValue(filteredResponseSavingAccount.custAccount[0].accountBranch);
        this.slideOneForm.get('transactionBranch').patchValue(filteredResponseSavingAccount.custAccount[0].accountBranch);
        this.cdr.markForCheck();
    }
    changeSelectedCountryCode(value) {
        // this.selectedCountryCode = value;
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
    goToNextScreen() {
        this.api.setIndex({
            index: 'CQW'
        });
        this.router.navigate(['token-generation']);
    }
    save(form) {
        console.log(form);
        form.transactionDate.toString();
        var date = new Date(form.transactionDate);
        console.log(date); //4/
        let latest_date = this.datepipe.transform(date, 'yyyy-MM-dd');
        form.transactionDate = latest_date;
        // form.transactionTime=format(new Date(form.transactionTime), "HH:mm");
        this.currencyData = this.currencies.find(x => x.countryCode == form.transactionCurrency);
        form.transactionCurrency = this.currencyData.currencyCode;
        // form.transactionTime = format(new Date(form.transactionTime), 'hh:mm:ss a');
        form.customerId = this.customerId;
        form.productCode = this.productCode;
        form.tokenOrigin = this.tokenOrigin;
        console.log(form);
        form.transactionTime = this.format24HrsTo12Hrs(form.transactionTime);
        this.accountNum = form.accountNumber;
        this.transactionAmount = form.transactionAmount;
        console.log(this.transactionAmount);
        this.transDate = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(form.transactionDate)).format("DD-MM-YYYY").toString();
        localStorage.setItem("AccountNumber", this.accountNum);
        localStorage.setItem("TransactionDate", this.transDate);
        // localStorage.setItem("TransactionTime", form.transactionTime);
        localStorage.setItem("TransactionAmount", this.transactionAmount);
        localStorage.setItem("TransactionBranch", form.transactionBranch);
        //console.log(this.transactionAmount);
        form.transactionAmount = form.transactionAmount.replace(/,/g, '');
        console.log(this.transactionAmount);
        //console.log(form);
        this.api.cashDepositSave(form).subscribe((resp) => {
            console.log('backend resp', resp);
            this.chequeWithdrawal = resp;
            localStorage.setItem("TransactionTime", resp.transactionTime);
            this.transactionId = this.chequeWithdrawal.transactionId;
            console.log('transactionId::', this.transactionId);
            if (this.chequeWithdrawal === 200 || this.chequeWithdrawal !== null) {
                this.shareDataService.shareTransactionId(this.transactionId);
                this.slideOneForm.reset();
                this.router.navigate(['token-generation']);
            }
        });
    }
    format24HrsTo12Hrs(time) {
        var formatted = moment__WEBPACK_IMPORTED_MODULE_8__(time, "HH:mm").format("LT");
        return formatted;
    }
    openPopup() {
        console.log("popup");
        this.modalController.create({
            component: src_app_components_time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_12__["TimeSlotsComponent"],
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
    // accountEvent(event) {
    //   console.log("event", event.detail.value)
    //   this.api.accountBalance(event.detail.value).subscribe((accbal) => {
    //     console.log('backend accbal', accbal);
    //     this.valueSet(accbal.currentBalance);
    //     this.currentBalance = accbal.amount;
    //     // console.log(this.slideOneForm.controls)
    //     this.slideOneForm.controls.accountBranch.patchValue(accbal.accountBranch);
    //     // this.slideOneForm.controls.transactionAmount.patchValue(accbal.amount);
    //     this.slideOneForm.controls.transactionCurrency.patchValue(accbal.accountCurrency);
    //     this.slideOneForm.controls.transactionBranch.patchValue(accbal.accountBranch);
    //     localStorage.setItem("AccBranch", accbal.accountBranch);
    //     for (let i in this.currencies) {
    //       this.selectedCountryCode = (this.currencies[i].countryCode).toLowerCase();
    //       this.slideOneForm.controls.transactionCurrency.patchValue(this.currencies[i].countryCode);
    //     }
    //     // this.users=dropdown;
    //   });
    // }
    accountEvent(event) {
        this.isedit = false;
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
    _keyPress(event) {
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    presentModal() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_branch_branch_component__WEBPACK_IMPORTED_MODULE_9__["BranchComponent"],
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
};
ChequewithdrawalPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_10__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__["ModalController"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
    { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_13__["LoadingService"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_11__["DataService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"] }
];
ChequewithdrawalPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-chequewithdrawal',
        template: _raw_loader_chequewithdrawal_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chequewithdrawal_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChequewithdrawalPage);



/***/ })

}]);
//# sourceMappingURL=views-chequewithdrawal-chequewithdrawal-module.js.map