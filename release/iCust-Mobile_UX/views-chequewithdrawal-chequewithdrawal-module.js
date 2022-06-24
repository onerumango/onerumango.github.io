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
/* harmony default export */ __webpack_exports__["default"] = (".crowdsCount {\n  margin-left: 1cm;\n}\n\n* {\n  font-family: \"Montserrat\" !important;\n  /* Add !important to overwrite all elements */\n}\n\n.transactionAmounterrormsg {\n  color: red;\n  font-size: small;\n  padding-top: 7px;\n}\n\n.box {\n  border-width: thin;\n  border-radius: 13px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  width: 95%;\n  height: 55px;\n  margin-top: 10px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.chequeCard {\n  border-width: thin;\n  border-radius: 10px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  width: 95%;\n  margin-left: 4%;\n  height: 100px;\n  display: inline-block;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\nform::-webkit-scrollbar {\n  display: none;\n}\n\n.inputCard1 {\n  padding-top: 7%;\n  padding-left: 5%;\n}\n\n.inputCard2 {\n  padding-top: 3%;\n  padding-left: 3%;\n}\n\n.textCard {\n  padding-left: 5%;\n}\n\n.labelCard {\n  color: gray;\n}\n\n.underline {\n  text-decoration: underline;\n  font-size: 14px;\n  padding-left: 4%;\n}\n\n.ion-padding-top {\n  padding-top: 10%;\n  padding-left: 3%;\n}\n\n.ion-padding-top2 {\n  padding-top: 8%;\n  padding-left: 5%;\n}\n\n.cancelcard {\n  padding-top: 8%;\n  padding-left: 44%;\n  font-size: 14px;\n}\n\n.backcard {\n  padding-top: 8%;\n  padding-left: 47%;\n  font-size: 14px;\n}\n\n.icondate {\n  display: inline-block;\n}\n\nion-searchbar {\n  background-color: #f9fafb;\n}\n\nion-select {\n  font-family: \"Montserrat-SemiBold\" !important;\n  font-size: 14pt;\n}\n\nion-text {\n  font-family: \"Montserrat\" !important;\n  font-size: 14px;\n  opacity: 75%;\n}\n\nion-button {\n  width: 95%;\n  padding-left: 5%;\n  height: 50px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-input {\n  color: black !important;\n  font-size: 14pt;\n  --placeholder-color: black !important;\n  font-family: \"Montserrat\" !important;\n}\n\nion-label {\n  color: #102245;\n  font-family: \"Montserrat\" !important;\n  font-size: 14px;\n  opacity: 75%;\n}\n\nion-back-button {\n  color: #4949e2;\n  margin-bottom: 2%;\n  font-size: larger;\n  text-transform: none;\n}\n\nion-toolbar {\n  margin-top: 5%;\n  box-shadow: 0 5pt 5pt -2pt #D3D3D3;\n}\n\nngx-flag-picker {\n  display: inline-block;\n  font-size: x-large;\n  padding-top: 14px;\n  padding-left: 20px;\n  padding-top: 4%;\n  align-content: center;\n}\n\n.box7 {\n  padding-top: 0%;\n  padding-left: 0%;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.backIcon {\n  font-size: xx-large;\n  color: #466ffe;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.ioncontent {\n  height: 110%;\n  margin-top: -3%;\n}\n\n.ioncontent1 {\n  height: 135%;\n}\n\n.text {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  color: blue;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGVxdWV3aXRoZHJhd2FsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLGdCQUFBO0FBRkY7O0FBSUE7RUFDSSxvQ0FBQTtFQUNELDZDQUFBO0FBREg7O0FBR0U7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUVFO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFGQUFBO0VBQ0EsK0JBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBRUEsd0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FBQU47O0FBRU07RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUZBQUE7RUFDQSwrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBRUEsd0JBQUE7RUFDQSwwQkFBQTtFQUNBLHlCQUFBO0FBQVI7O0FBR007RUFDRSxhQUFBO0FBQVI7O0FBRUc7RUFHSSxlQUFBO0VBQ0EsZ0JBQUE7QUFEUDs7QUFHRztFQUNDLGVBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUdHO0VBRUMsZ0JBQUE7QUFESjs7QUFHRztFQUNJLFdBQUE7QUFBUDs7QUFJRztFQUNHLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBRE47O0FBR0k7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0FBQVI7O0FBR0k7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUFBTjs7QUFFSTtFQUNGLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFDRjs7QUFDSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFFTjs7QUFBSTtFQUNGLHFCQUFBO0FBR0Y7O0FBQ0s7RUFDRCx5QkFBQTtBQUVKOztBQUNFO0VBQ0UsNkNBQUE7RUFDQSxlQUFBO0FBRUo7O0FBQUU7RUFDRSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBR0o7O0FBQUU7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esb0NBQUE7QUFHSjs7QUFBRztFQUNDLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0VBRUEsb0NBQUE7QUFFSjs7QUFBSTtFQUNFLGNBQUE7RUFDQyxvQ0FBQTtFQUNDLGVBQUE7RUFDQSxZQUFBO0FBR1I7O0FBREk7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FBSVI7O0FBREk7RUFDRSxjQUFBO0VBQ0Qsa0NBQUE7QUFJTDs7QUFGSTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0FBS047O0FBRkk7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBS047O0FBSEc7RUFDSyxtQkFBQTtFQUVBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBS1I7O0FBRkk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUtOOztBQUhJO0VBQ0UsWUFBQTtBQU1OOztBQUpJO0VBQ0ksZUFBQTtFQUNGLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG9DQUFBO0FBT04iLCJmaWxlIjoiY2hlcXVld2l0aGRyYXdhbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAtb3BlcmF0aW9ue1xyXG4vLyAgICAgaGVpZ2h0OiA2MDAlO1xyXG4vLyB9XHJcbi5jcm93ZHNDb3VudHtcclxuICBtYXJnaW4tbGVmdDogMWNtO1xyXG59XHJcbioge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAvKiBBZGQgIWltcG9ydGFudCB0byBvdmVyd3JpdGUgYWxsIGVsZW1lbnRzICovXHJcbiAgfVxyXG4gIC50cmFuc2FjdGlvbkFtb3VudGVycm9ybXNne1xyXG4gICAgY29sb3I6cmVkO1xyXG4gICAgZm9udC1zaXplOiBzbWFsbDtcclxuICAgIHBhZGRpbmctdG9wOiA3cHg7XHJcbiAgfVxyXG4gIC5ib3gge1xyXG4gICAgICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkscmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICAgICAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgIFxyXG4gICAgICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xyXG4gICAgICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xyXG4gICAgfVxyXG4gICAgICAuY2hlcXVlQ2FyZHtcclxuICAgICAgICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0JTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiO1xyXG4gICAgICAgIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcclxuICAgICAgICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcclxuICAgICAgICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgZm9ybTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgIC5pbnB1dENhcmQxe1xyXG4gICAgICAvLyAgcGFkZGluZy10b3A6IDEwJTtcclxuICAgICAgLy8gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICAgICBwYWRkaW5nLXRvcDogNyU7XHJcbiAgICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICB9XHJcbiAgIC5pbnB1dENhcmQye1xyXG4gICAgcGFkZGluZy10b3A6IDMlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzJTtcclxuICB9XHJcbiAgXHJcbiAgIC50ZXh0Q2FyZHtcclxuICAgIC8vIHBhZGRpbmctdG9wOiAtNiU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIH1cclxuICAgLmxhYmVsQ2FyZHtcclxuICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgLy9mb250LXNpemU6IDIwcHg7XHJcbiAgIH1cclxuICBcclxuICAgLnVuZGVybGluZSB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNCU7XHJcbiAgICB9XHJcbiAgICAuaW9uLXBhZGRpbmctdG9we1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzJTtcclxuICAgIH1cclxuICBcclxuICAgIC5pb24tcGFkZGluZy10b3Aye1xyXG4gICAgICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICB9XHJcbiAgICAuY2FuY2VsY2FyZHtcclxuICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA0NCU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLmJhY2tjYXJke1xyXG4gICAgICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNDclO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgLmljb25kYXRle1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBcclxuICAgIH1cclxuICAgXHJcbiAgICAgaW9uLXNlYXJjaGJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiO1xyXG4gICB9XHJcbiAgXHJcbiAgaW9uLXNlbGVjdHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZCcgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTRwdDtcclxuICB9XHJcbiAgaW9uLXRleHR7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBvcGFjaXR5OiA3NSU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1idXR0b257XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgIFxyXG4gIH1cclxuICAgaW9uLWlucHV0IHtcclxuICAgIGNvbG9yOmJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHQ7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgaW9uLWxhYmVse1xyXG4gICAgICBjb2xvcjojMTAyMjQ1O1xyXG4gICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBvcGFjaXR5OiA3NSU7XHJcbiAgICB9XHJcbiAgICBpb24tYmFjay1idXR0b257XHJcbiAgICAgICAgY29sb3I6IHJnYig3MywgNzMsIDIyNik7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAgIG1hcmdpbi10b3A6NSU7XHJcbiAgICAgYm94LXNoYWRvdzogMCA1cHQgNXB0IC0ycHQgI0QzRDNEMztcclxuICB9XHJcbiAgICBuZ3gtZmxhZy1waWNrZXJ7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTRweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogNCU7XHJcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBcclxuICAgIH1cclxuICAgIC5ib3g3e1xyXG4gICAgICBwYWRkaW5nLXRvcDogMCU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMCU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyBcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyBcclxuICAgIH1cclxuICAgLmJhY2tJY29ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICAgICAgLy8gY29sb3I6IGJsdWU7XHJcbiAgICAgICAgY29sb3I6cmdiKDcwLDExMSwyNTQpO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgLmlvbmNvbnRlbnR7XHJcbiAgICAgIGhlaWdodDogMTEwJTtcclxuICAgICAgbWFyZ2luLXRvcDogLTMlO1xyXG4gICAgfVxyXG4gICAgLmlvbmNvbnRlbnQxe1xyXG4gICAgICBoZWlnaHQ6IDEzNSU7XHJcbiAgICB9XHJcbiAgICAudGV4dHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICBcclxuICBcclxuICAgIC8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICAvLyAgIC5pb25jb250ZW50e1xyXG4gICAgLy8gICAgIGhlaWdodDogMTMwJTtcclxuICAgIC8vICAgICBtYXJnaW4tdG9wOiAtMyU7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vICAgLmlvbmNvbnRlbnQxe1xyXG4gICAgLy8gICAgIGhlaWdodDogMTY1JTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-operation [title] = \"cashWithdrawal\"></app-operation> -->\r\n<ion-header *ngIf=flag>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=flag >\r\n  <div >\r\n    <!-- <form [formGroup]=\"slideOneForm\" [disabled]=\"customerDetails.custAccount.status !== 'APPROVED'\" > -->\r\n      <form [formGroup]=\"slideOneForm\" >\r\n      \r\n      <div class=\"inputCard1\">\r\n        <ion-label>Account Number*</ion-label>\r\n        <!-- <ion-input class=\"box\"></ion-input> -->\r\n        <ion-select [compareWith]=\"compareWith\" class=\"box\" (ionChange)=\"accountEvent($event)\" formControlName=\"accountNumber\" ngDefaultControl>\r\n          <ion-select-option *ngFor=\"let user of users\" [value]=\"user.accountId\" >{{user.accountId}}</ion-select-option>\r\n        </ion-select>\r\n        </div>\r\n\r\n        <div class=\"inputCard1\">\r\n          <ion-label position=\"stacked\" class=\"labelCard\"  style=\"font-size: 14px;\">Account Balance : {{curr }} {{currentBalance}}</ion-label>   \r\n          </div>\r\n\r\n          <div class=\"inputCard1\">\r\n            <ion-label position=\"stacked\" class=\"labelCard\"  style=\"font-size: 14px;\">Account Branch : {{slideOneForm.controls.accountBranch.value}}</ion-label>\r\n        </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label>Transaction Currency*</ion-label>\r\n        </div>\r\n        <div class=\"box7\">\r\n          \r\n          <ion-card class=\"box\">\r\n            <ion-row>\r\n              <ion-col style=\"width: 10%;\">\r\n                  <ngx-flag-picker\r\n                  [selectedCountryCode]=\"selectedCountryCode\"\r\n                  [showFlags]=\"isShow\"\r\n                  [showLabels]=\"!isShow\"\r\n                  [showArrow]=\"!isShow\">\r\n                </ngx-flag-picker>\r\n               </ion-col>\r\n              <ion-col style=\"width: 20%;\">\r\n                  <ion-select [compareWith]=\"compareWith\" formControlName=\"transactionCurrency\" #code (ionChange)=\"selectCurrencyCode(code.value)\" style=\"font-size: large;margin-left: -40%;\">\r\n                    <ion-select-option *ngFor=\"let currency of currencies\" [value]=\"currency.countryCode\" >\r\n                   {{currency.currencyCode + ' : ' + currency.countryName.toUpperCase()}}\r\n                    </ion-select-option>\r\n                    </ion-select>\r\n              </ion-col>\r\n             </ion-row>\r\n           </ion-card>\r\n          </div>\r\n\r\n      <div class=\"inputCard1\">\r\n          <ion-label position=\"stacked\">Transaction Amount*</ion-label>\r\n          <ion-input \r\n            class=\"box\" \r\n            #myRef [(ngModel)]= \"transAmount\"  \r\n            formControlName=\"transactionAmount\" \r\n            type=\"text\" \r\n            min=\"1\" \r\n            (keyup)=\"numberOnlyValidation($event)\"\r\n          >\r\n          </ion-input>\r\n          <div class=\"transactionAmounterrormsg\" *ngIf=\" transAmt > currentBalance\">\r\n            Transaction  Amount cannot be greater than Account Balance    \r\n          </div>\r\n                 \r\n\r\n      </div>\r\n     \r\n      <div class=\"inputCard1\">\r\n        <ion-label>Cheque Number*</ion-label>\r\n        <!--<ion-input class=\"box\" formcontrolName=\"chequeNumber\" \r\n        type=\"number\" maxLength=\"12\"></ion-input>-->\r\n        <ion-input class=\"box\" formcontrolName=\"chequeNumber\" (keypress)=_keyPress($event)\r\n        type=\"tel\" maxLength=\"12\"></ion-input>\r\n      </div>\r\n\r\n      <!-- <div class=\"inputCard1\">\r\n          <ion-label position=\"stacked\" >Account Branch*</ion-label>\r\n          <ion-input class=\"box\" formControlName=\"accountBranch\"></ion-input>\r\n      </div> -->\r\n\r\n  <div class=\"ion-padding-top\">\r\n  <div>\r\n    <ion-button  expand=\"block\" shape=\"round\"(click)=\"goToNextPage()\"\r\n    [disabled]=\"validateDisablebutton('disable1') ||!transAmount  || submitted ||  transAmt > currentBalance\" style=\"width: 95%;\">Next</ion-button>\r\n  </div>\r\n  <div>\r\n    <ion-button expand=\"block\" shape=\"round\" fill=\"clear\" style=\"color: black;\"\r\n    (click)=\"goToHomepage()\">Cancel</ion-button>\r\n</div>\r\n\r\n\r\n</div>\r\n     \r\n    </form>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-header *ngIf=!flag>\r\n  <ion-toolbar>\r\n    <ion-icon class=\"backIcon\" name=\"chevron-back-outline\" (click)=\"goToPreviousPage()\"></ion-icon>\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=!flag>\r\n  <div>\r\n    <form [formGroup]=\"slideOneForm\">\r\n        <!-- <div class=\"textCard\">\r\n          <ion-text>\r\n            <h5 style=\"color: gray;padding-left: 4%;\">Do you wish to perform this transaction in your home branch</h5>\r\n          </ion-text>\r\n        </div>\r\n\r\n        <div class=\"inputCard2\">\r\n          <ion-radio-group>\r\n            <ion-row>\r\n             <ion-col>\r\n               <ion-item lines=\"none\">\r\n               <ion-radio mode=\"md\" value=\"buy\"></ion-radio>\r\n               <ion-label position=\"start\" style=\"padding-left: 10px;\">yes</ion-label>\r\n               </ion-item>\r\n              </ion-col>\r\n  \r\n             <ion-col>\r\n               <ion-item lines=\"none\">\r\n               <ion-radio mode=\"md\" value=\"sell\"></ion-radio>\r\n               <ion-label style=\"padding-left: 10px;\">No</ion-label>\r\n               </ion-item>\r\n             </ion-col>\r\n            </ion-row>\r\n          </ion-radio-group>\r\n       </div> -->\r\n\r\n       <div style=\"margin-left: 19px;margin-top: 19px;margin-right: 19px\">\r\n        <ion-label >Do you wish to perform this transaction in your branch?</ion-label>\r\n        <!-- <ion-label></ion-label> -->\r\n        <ion-radio-group name=\"branchFlags\" formControlName=\"branchFlag\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label position=\"start\">Yes</ion-label>\r\n                <ion-radio mode=\"md\" item-left name=\"flagYes\" [value]=\"true\"></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label>No</ion-label>\r\n                <ion-radio mode=\"md\" item-left name=\"flagNo\" [value]=\"false\"></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          </ion-radio-group>\r\n</div>\r\n\r\n       <div class=\"inputCard2\">\r\n          <ion-router-link (click)=\"presentModal()\" [hidden]=\"!nearestBrn\" class=\"underline\">Click here to find nearest branch</ion-router-link>\r\n       </div><br>\r\n  \r\n       <div class=\"inputCard2\" >\r\n        <ion-label style=\"padding-left: 5%;\">Transaction Branch*</ion-label>\r\n        <ion-card class=\"box\" >\r\n          <ion-item lines=\"none\">\r\n            <ion-input appearence=\"none\" formControlName=\"transactionBranch\" \r\n            [readonly]=\"slideOneForm.get('branchFlag').value ? true : false\">\r\n           </ion-input>\r\n           <ion-icon *ngIf=\"slideOneForm.get('branchFlag').value == true\" name=\"home-outline\" color=\"primary\" slot=\"end\"></ion-icon>\r\n           <ion-icon *ngIf=\"slideOneForm.get('branchFlag').value == false\" name=\"navigate-circle-outline\" color=\"primary\" slot=\"end\"></ion-icon>\r\n          </ion-item>\r\n        </ion-card>\r\n          <ion-note style=\"color: red; margin-left: 22px;top: 13px;\" *ngIf=\"f.transactionBranch.errors?.required && f.transactionBranch.touched\"> \r\n            <small>Transaction Branch Required</small>\r\n          </ion-note>\r\n       </div>\r\n       <p class=\"crowdsCount\"><small>Number of Crowds : {{ tokenCount }}</small></p>\r\n\r\n      <div class=\"inputCard2\">\r\n\r\n          <ion-label style=\"padding-left: 5%;\">Transaction date*</ion-label>\r\n        <ion-card class=\"box\" >\r\n          <ion-item lines=\"none\">\r\n              <ion-datetime displayFormat=\"DDD. MMM DD, YY\" [min]=\"minDate\"  [max]=\"maxDate\" placeholder=\"Select date\" formControlName=\"transactionDate\" >\r\n              </ion-datetime>\r\n         <ion-icon name=\"calendar\" slot=\"end\"></ion-icon>\r\n\r\n         </ion-item> \r\n     </ion-card>\r\n     </div>\r\n    \r\n\r\n     <div class=\"inputCard2\">\r\n       <ion-label style=\"padding-left: 5%;\">Time Slot*</ion-label>\r\n     <ion-card class=\"box\">\r\n       <ion-item lines=\"none\">\r\n          <ion-input formControlName=\"transactionTime\"></ion-input>\r\n        <!-- <ion-datetime displayFormat=\"hh:mm A\"  placeholder=\"Select time slot\" formControlName=\"transactionTime\"></ion-datetime> -->\r\n        <ion-icon name=\"alarm-outline\" slot=\"end\" (click)=\"openPopup()\"></ion-icon>\r\n      </ion-item>\r\n     </ion-card>\r\n     </div> \r\n\r\n     <div class=\"inputCard2\" *ngIf=\"title == 'Cheque Withdrawal' || title =='Cheque Deposit'\">\r\n      <ion-label position=\"stacked\">Remark</ion-label>\r\n      <ion-input class=\"chequeCard\" formControlName=\"remarks\" ></ion-input>\r\n     </div>\r\n\r\n     \r\n\r\n\r\n     <div class=\"ion-padding-top\">\r\n    <div>\r\n      <ion-button  expand=\"block\" shape=\"round\" (click)=\"save(slideOneForm.value)\">Next</ion-button>\r\n    </div>\r\n\r\n \r\n    <div>\r\n      <ion-button expand=\"block\" shape=\"round\" fill=\"clear\" style=\"width: 95%;color:black;\"\r\n(click)=\"goToPreviousPage()\">Back</ion-button>\r\n  </div>\r\n</div>\r\n  </form>\r\n</div>\r\n\r\n</ion-content>\r\n");

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
            this.api.getNumberOfCrowd(this.accountInfo.accountBranch)
                .subscribe((data1) => {
                this.tokenCount = data1.tokenCount;
            });
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