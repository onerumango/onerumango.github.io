(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-cashdeposit-cashdeposit-module"],{

/***/ "5jju":
/*!*********************************************************!*\
  !*** ./src/app/views/cashdeposit/cashdeposit.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n  font-family: \"Montserrat\" !important;\n  /* Add !important to overwrite all elements */\n}\n\n.box {\n  border-width: thin;\n  border-radius: 13px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  width: 95%;\n  height: 55px;\n  margin-top: 10px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.chequeCard {\n  border-width: thin;\n  border-radius: 10px;\n  box-shadow: 0 5pt 5pt -2pt #D3D3D3;\n  width: 95%;\n  margin-left: 4%;\n  height: 100px;\n  display: inline-block;\n  background-color: #f9fafb;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\nform::-webkit-scrollbar {\n  display: none;\n}\n\n.inputCard1 {\n  padding-top: 7%;\n  padding-left: 5%;\n}\n\n.inputCard2 {\n  padding-top: 3%;\n  padding-left: 3%;\n}\n\n.textCard {\n  padding-left: 5%;\n}\n\n.labelCard {\n  color: gray;\n}\n\n.underline {\n  text-decoration: underline;\n  font-size: 14px;\n  padding-left: 4%;\n}\n\n.ion-padding-top {\n  padding-top: 10%;\n  padding-left: 3%;\n}\n\n.ion-padding-top2 {\n  padding-top: 8%;\n  padding-left: 5%;\n}\n\n.cancelcard {\n  padding-top: 8%;\n  padding-left: 44%;\n  font-size: 14px;\n}\n\n.backcard {\n  padding-top: 8%;\n  padding-left: 47%;\n  font-size: 14px;\n}\n\n.icondate {\n  display: inline-block;\n}\n\nion-searchbar {\n  background-color: #f9fafb;\n}\n\nion-select {\n  font-family: \"Montserrat-SemiBold\" !important;\n  font-size: 14pt;\n}\n\nion-text {\n  font-family: \"Montserrat\" !important;\n  font-size: 14px;\n  opacity: 75%;\n}\n\nion-button {\n  width: 95%;\n  padding-left: 5%;\n  height: 50px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-input {\n  color: black !important;\n  font-size: 14pt;\n  --placeholder-color: black !important;\n  font-family: \"Montserrat\" !important;\n}\n\nion-label {\n  color: #102245;\n  font-family: \"Montserrat\" !important;\n  font-size: 14px;\n  opacity: 75%;\n}\n\nion-back-button {\n  color: #4949e2;\n  margin-bottom: 1%;\n  font-size: larger;\n  text-transform: none;\n}\n\nion-toolbar {\n  margin-top: 5%;\n  box-shadow: 0 5pt 5pt -2pt #D3D3D3;\n}\n\nngx-flag-picker {\n  display: inline-block;\n  font-size: x-large;\n  padding-top: 14px;\n  padding-left: 20px;\n  padding-top: 4%;\n  align-content: center;\n}\n\n.box7 {\n  padding-top: 0%;\n  padding-left: 0%;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.backIcon {\n  font-size: xx-large;\n  color: #466ffe;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.ioncontent {\n  height: 110%;\n  margin-top: -3%;\n}\n\n.ioncontent1 {\n  height: 135%;\n}\n\n.text {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  color: blue;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjYXNoZGVwb3NpdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxvQ0FBQTtFQUNELDZDQUFBO0FBRkg7O0FBSUU7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUZBQUE7RUFDQSwrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFFQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7QUFGTjs7QUFNTTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7QUFIUjs7QUFNTTtFQUNFLGFBQUE7QUFIUjs7QUFLRztFQUdJLGVBQUE7RUFDQSxnQkFBQTtBQUpQOztBQU1HO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0FBSEo7O0FBTUc7RUFFQyxnQkFBQTtBQUpKOztBQU1HO0VBQ0ksV0FBQTtBQUhQOztBQU9HO0VBQ0csMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFKTjs7QUFNSTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFIUjs7QUFNSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQUhOOztBQUtJO0VBQ0YsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUZGOztBQUlJO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUROOztBQUdJO0VBQ0YscUJBQUE7QUFBRjs7QUFJSztFQUNELHlCQUFBO0FBREo7O0FBSUU7RUFDRSw2Q0FBQTtFQUNBLGVBQUE7QUFESjs7QUFHRTtFQUNFLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFBSjs7QUFHRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQUFKOztBQUdHO0VBQ0MsdUJBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7RUFFQSxvQ0FBQTtBQURKOztBQUdJO0VBQ0UsY0FBQTtFQUNDLG9DQUFBO0VBQ0MsZUFBQTtFQUNBLFlBQUE7QUFBUjs7QUFFSTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFDUjs7QUFFSTtFQUNFLGNBQUE7RUFDRCxrQ0FBQTtBQUNMOztBQUNJO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFFTjs7QUFDSTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFFTjs7QUFBRztFQUNLLG1CQUFBO0VBRUEsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFFUjs7QUFDSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBRU47O0FBQUk7RUFDRSxZQUFBO0FBR047O0FBREk7RUFDSSxlQUFBO0VBQ0YscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUFJTiIsImZpbGUiOiJjYXNoZGVwb3NpdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBhcHAtb3BlcmF0aW9ue1xyXG4vLyAgICAgaGVpZ2h0OiA0MDAlO1xyXG4vLyB9XHJcbioge1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAvKiBBZGQgIWltcG9ydGFudCB0byBvdmVyd3JpdGUgYWxsIGVsZW1lbnRzICovXHJcbiAgfVxyXG4gIC5ib3gge1xyXG4gICAgICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkscmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICAgICAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuICAgICAgd2lkdGg6IDk1JTtcclxuICAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgIFxyXG4gICAgICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xyXG4gICAgICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xyXG4gICAgfVxyXG4gIFxyXG4gICBcclxuICAgICAgLmNoZXF1ZUNhcmR7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCA1cHQgNXB0IC0ycHQgI0QzRDNEMztcclxuICAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0JTtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiO1xyXG4gICAgICAgIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcclxuICAgICAgICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcclxuICAgICAgICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgZm9ybTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgIC5pbnB1dENhcmQxe1xyXG4gICAgICAvLyAgcGFkZGluZy10b3A6IDEwJTtcclxuICAgICAgLy8gIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICAgICBwYWRkaW5nLXRvcDogNyU7XHJcbiAgICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICB9XHJcbiAgIC5pbnB1dENhcmQye1xyXG4gICAgcGFkZGluZy10b3A6IDMlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzJTtcclxuICB9XHJcbiAgXHJcbiAgIC50ZXh0Q2FyZHtcclxuICAgIC8vIHBhZGRpbmctdG9wOiAtNiU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIH1cclxuICAgLmxhYmVsQ2FyZHtcclxuICAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAgLy9mb250LXNpemU6IDIwcHg7XHJcbiAgIH1cclxuICBcclxuICAgLnVuZGVybGluZSB7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNCU7XHJcbiAgICB9XHJcbiAgICAuaW9uLXBhZGRpbmctdG9we1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMCU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAzJTtcclxuICAgIH1cclxuICBcclxuICAgIC5pb24tcGFkZGluZy10b3Aye1xyXG4gICAgICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgICB9XHJcbiAgICAuY2FuY2VsY2FyZHtcclxuICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgcGFkZGluZy1sZWZ0OiA0NCU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLmJhY2tjYXJke1xyXG4gICAgICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNDclO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgLmljb25kYXRle1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBcclxuICAgIH1cclxuICAgXHJcbiAgICAgaW9uLXNlYXJjaGJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiO1xyXG4gICB9XHJcbiAgXHJcbiAgaW9uLXNlbGVjdHtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZCcgIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTRwdDtcclxuICB9XHJcbiAgaW9uLXRleHR7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBvcGFjaXR5OiA3NSU7XHJcbiAgfVxyXG4gIFxyXG4gIGlvbi1idXR0b257XHJcbiAgICB3aWR0aDogOTUlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgIFxyXG4gIH1cclxuICAgaW9uLWlucHV0IHtcclxuICAgIGNvbG9yOmJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHQ7XHJcbiAgICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgI2YxZjFmMSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgaW9uLWxhYmVse1xyXG4gICAgICBjb2xvcjojMTAyMjQ1O1xyXG4gICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBvcGFjaXR5OiA3NSU7XHJcbiAgICB9XHJcbiAgICBpb24tYmFjay1idXR0b257XHJcbiAgICAgICAgY29sb3I6IHJnYig3MywgNzMsIDIyNik7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMSU7XHJcbiAgICAgICAgZm9udC1zaXplOiBsYXJnZXI7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAgIG1hcmdpbi10b3A6NSU7XHJcbiAgICAgYm94LXNoYWRvdzogMCA1cHQgNXB0IC0ycHQgI0QzRDNEMztcclxuICB9XHJcbiAgICBuZ3gtZmxhZy1waWNrZXJ7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgICBwYWRkaW5nLXRvcDogMTRweDtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgICBwYWRkaW5nLXRvcDogNCU7XHJcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICBcclxuICAgIH1cclxuICAgIC5ib3g3e1xyXG4gICAgICBwYWRkaW5nLXRvcDogMCU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMCU7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyBcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyBcclxuICAgIH1cclxuICAgLmJhY2tJY29ue1xyXG4gICAgICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICAgICAgLy8gY29sb3I6IGJsdWU7XHJcbiAgICAgICAgY29sb3I6cmdiKDcwLDExMSwyNTQpO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgLmlvbmNvbnRlbnR7XHJcbiAgICAgIGhlaWdodDogMTEwJTtcclxuICAgICAgbWFyZ2luLXRvcDogLTMlO1xyXG4gICAgfVxyXG4gICAgLmlvbmNvbnRlbnQxe1xyXG4gICAgICBoZWlnaHQ6IDEzNSU7XHJcbiAgICB9XHJcbiAgICAudGV4dHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMiU7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgY29sb3I6IGJsdWU7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICBcclxuICBcclxuICAgIC8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDMyMHB4KSB7XHJcbiAgICAvLyAgIC5pb25jb250ZW50e1xyXG4gICAgLy8gICAgIGhlaWdodDogMTMwJTtcclxuICAgIC8vICAgICBtYXJnaW4tdG9wOiAtMyU7XHJcbiAgICAvLyAgIH1cclxuICAgIC8vICAgLmlvbmNvbnRlbnQxe1xyXG4gICAgLy8gICAgIGhlaWdodDogMTY1JTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gfSJdfQ== */");

/***/ }),

/***/ "7NH0":
/*!*******************************************************!*\
  !*** ./src/app/views/cashdeposit/cashdeposit.page.ts ***!
  \*******************************************************/
/*! exports provided: CashdepositPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashdepositPage", function() { return CashdepositPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_cashdeposit_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./cashdeposit.page.html */ "Yr8K");
/* harmony import */ var _cashdeposit_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cashdeposit.page.scss */ "5jju");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "wd/R");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/api.service */ "H+bZ");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/services/data.service */ "EnSQ");
/* harmony import */ var src_app_components_branch_branch_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/components/branch/branch.component */ "z5an");
/* harmony import */ var src_app_components_time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/components/time-slots/time-slots.component */ "5aLK");
/* harmony import */ var src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/services/loading.service */ "7ch9");
















let CashdepositPage = class CashdepositPage {
    constructor(toastCtrl, router, datepipe, fb, loading, api, toastController, modalController, shareDataService, cdr) {
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.datepipe = datepipe;
        this.fb = fb;
        this.loading = loading;
        this.api = api;
        this.toastController = toastController;
        this.modalController = modalController;
        this.shareDataService = shareDataService;
        this.cdr = cdr;
        this.title = 'Cash Deposit';
        this.productCode = "CHD";
        this.tokenOrigin = "Mobile";
        this.submitted = true;
        this.submitted1 = true;
        //transAmount:number;
        this.isedit = true;
        this.accountBranch = "Loita street";
        this.flag = true;
        this.minDate = new Date().toISOString();
        this.maxDate = new Date(new Date().setDate(new Date().getDate() + 7)).toISOString();
        this.users = [];
        this.trnBrn = null;
        this.isShow = true;
        this.selectedCountryCode = '';
    }
    ngOnInit() {
        this.phoneNumber = localStorage.getItem('PhoneNumLogin');
        this.customerId = sessionStorage.getItem('customer_id');
        console.log("customer_id", this.customerId);
        this.getCountrynameValues();
        // this.api.accountDropDown(this.customerId).subscribe((dropdown) => {
        //   console.log('backend dropdown', dropdown);
        //   this.users = dropdown;
        //   if (dropdown == null) {
        //     this.openToast();
        //   }
        // });
        this.depositForm = this.fb.group({
            transactionId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            customerId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            productCode: ['CHD', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            tokenOrigin: ['Mobile', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            accountNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            accountBalance: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            transactionCurrency: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            transactionAmount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[1-9]\d*$/)]],
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
        console.log(this.depositForm.value);
        this.loadData();
        this.onChanges();
        //  let disableBtn = false;
        // this.depositForm.valueChanges 
        //             .subscribe((changedObj: any) => {
        //                 //  this.disableBtn = this.depositForm.valid;
        //                 console.log('transactionAmount :: ',this.depositForm.controls.transactionAmount)
        //             });
        //  console.log(this.countries);
        this.shareDataService.getAccountInfo.subscribe(data => {
            this.accountInfo = data;
            console.log(data);
        });
    }
    loadData() {
        this.loading.present();
        this.api.custpomerDetails(this.phoneNumber).subscribe((resp) => {
            console.log('backend resp in home', resp);
            this.loading.dismiss();
            this.customerDetails = resp;
            this.savingAccountFun(resp);
        }, (err) => {
            this.loading.dismiss();
        });
    }
    onChanges() {
        this.depositForm.get('branchFlag').valueChanges.subscribe(val => {
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
                this.depositForm.controls.transactionBranch.patchValue(this.trnBrn);
                this.nearestBrn = true;
            }
            else {
                console.log("else");
                this.nearestBrn = false;
                // this.slideOneForm.controls.transactionBranch.patchValue(this.trnBrn);
                this.accBranch = localStorage.getItem("AccBranch");
                console.log(this.accBranch);
                this.depositForm.controls.transactionBranch.patchValue(this.accBranch);
                // this.slideOneForm.get('transactionBranch').patchValue(this.customerDetails.custAccount[0].accountBranch);
            }
            if (this.brnflg == true && val == false) {
                console.log(this.accBranch);
                console.log("2nd if");
                this.depositForm.controls.transactionBranch.patchValue(this.accBranch);
                this.nearestBrn = true;
            }
        });
    }
    get f() { return this.depositForm.controls; }
    getCountrynameValues() {
        this.api.getCurrencyValues().subscribe((allCurrencyValues) => {
            this.currencies = allCurrencyValues;
        });
    }
    numberOnlyValidation(event) {
        this.transAmt = event.target.value;
        console.log(event.target.value);
        this.IntValue = Math.floor(this.depositForm.value.transactionAmount).toString().length;
        // if (this.IntValue > 3) {
        if (this.IntValue > 1) {
            //old changes
            // const pattern = /[0-9.,]/;
            // let inputChar = String.fromCharCode(event.charCode);
            // if (!pattern.test(inputChar)) {
            //   // invalid character, prevent input
            //   event.preventDefault();
            // }
            // new code added for transaction amount comma separator
            // 
            //  console.log(this.slideOneForm)
            //  console.log(event.value);
            //const pattern = /[0-9.,]/;
            let value;
            value = this.depositForm.value.transactionAmount;
            //let inputChar = String.fromCharCode(event.charCode);
            // ;
            this.transAmount = value;
            // 
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
        // if(parseFloat(this.currentBalance) < parseFloat(this.transAmt)){
        //   console.log("Bigger");
        //   this.openToast1();
        //   // this.snack.open(`Transaction Amount should not exceed than Account Balance`, 'OK', {
        //   //   duration: 2000,
        //   //   verticalPosition: 'top',
        //   //   horizontalPosition: 'right'
        //   // });
        // }
        //   // this.slideOneForm.controls['transactionAmount'].setValidators();
        //   else{
        //     return;
        //   }
    }
    method() {
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
                    this.depositForm.get('transactionBranch').patchValue(modelData.data['data'].branchName);
                }
            });
            return yield modal.present();
        });
    }
    selectCurrencyCode(currency) {
        console.log(currency);
        this.currencyData = this.currencies.find(x => x.countryCode == currency);
        this.selectedCountryCode = this.currencyData.countryCode.toLowerCase();
    }
    changeSelectedCountryCode(value) {
        // this.selectedCountryCode = value;
    }
    goToHomepage() {
        this.depositForm.reset();
        this.router.navigate(['/tabs/home']);
    }
    goToNextPage(fb) {
        this.flag = false;
    }
    goToPreviousPage() {
        this.flag = true;
    }
    goToNextScreen(form) {
        this.api.setIndex({
            index: 'CHD'
        });
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
        this.accountNum = form.accountNumber;
        this.transactionAmount = form.transactionAmount;
        console.log(this.transactionAmount);
        this.transDate = moment__WEBPACK_IMPORTED_MODULE_6__(new Date(form.transactionDate)).format("DD-MM-YYYY").toString();
        form.transactionTime = this.format24HrsTo12Hrs(form.transactionTime);
        localStorage.setItem("AccountNumber", this.accountNum);
        localStorage.setItem("TransactionDate", this.transDate);
        // localStorage.setItem("TransactionTime", form.transactionTime);
        localStorage.setItem("TransactionAmount", this.transactionAmount);
        localStorage.setItem("TransactionBranch", form.transactionBranch);
        form.transactionAmount = form.transactionAmount.replace(/,/g, '');
        console.log(this.transactionAmount);
        console.log(form);
        console.log("form::", form);
        this.api.cashDepositSave(form).subscribe((resp) => {
            localStorage.setItem("TransactionTime", resp.transactionTime);
            this.cashDepositResp = resp;
            this.transactionId = this.cashDepositResp.transactionId;
            console.log('transactionId::', this.transactionId);
            if (this.cashDepositResp === 200 || this.cashDepositResp !== null) {
                this.shareDataService.shareTransactionId(this.transactionId);
                this.depositForm.reset();
                this.router.navigate(['token-generation']);
            }
        });
    }
    accountEvent(event) {
        this.isedit = false;
        console.log("event", event.detail.value);
        this.api.accountBalance(event.detail.value).subscribe((accbal) => {
            // console.log('backend accbal', accbal.lastTransactions);
            this.valueSet(accbal.currentBalance);
            // console.log('backend accbal', accbal);
            // console.log(this.slideOneForm.controls.transactionCurrency);
            this.currentBalance = accbal.amount;
            this.depositForm.controls.accountBalance.patchValue(accbal.amount);
            this.depositForm.controls.accountBranch.patchValue(accbal.accountBranch);
            localStorage.setItem("AccBranch", accbal.accountBranch);
            // console.log(this.slideOneForm.controls.transactionBranch.patchValue(accbal.accountBranch));
            // console.log(accbal);
            // this.slideOneForm.controls.transactionCurrency.patchValue(accbal.accountCurrency);
            // this.selectCurrencyCode(accbal.accountCurrency);
            //;
            // console.log(accbal.transactionAmount);
            if (accbal.transactionAmount != null || accbal.transactionAmount != undefined) {
                this.numberOnlyValidation(accbal.transactionAmount);
            }
            // console.log('backend accbal', accbal.lastTransactions);
            if (accbal.lastTransactions != null) {
                if (accbal.lastTransactions.length <= 2) {
                    this.depositForm.controls.transactionBranch.patchValue(accbal.accountBranch);
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
                        this.depositForm.controls.branchFlag.patchValue(false);
                        this.depositForm.controls.transactionBranch.patchValue(this.trnBrn);
                        console.log(localStorage.getItem("BranchFlag"));
                        this.brnflg = localStorage.getItem("BranchFlag");
                        this.brnflg = false;
                        this.nearestBrn = true;
                    }
                    else {
                        this.depositForm.controls.transactionBranch.patchValue(accbal.accountBranch);
                        this.nearestBrn = false;
                        this.brnflg = true;
                        console.log(this.nearestBrn);
                    }
                }
            }
            else {
                this.depositForm.controls.transactionBranch.patchValue(accbal.accountBranch);
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
                this.depositForm.controls.transactionCurrency.patchValue(this.currencies[i].countryCode);
            }
            // this.selectedCountryCode = (currency.code).toLowerCase();
            // this.users=dropdown;
            //8042666041 8042666055
        });
    }
    // accountEvent(event) {
    //   console.log("event", event.detail.value)
    //   this.api.accountBalance(event.detail.value).subscribe((accbal) => {
    //     console.log('backend accbal', accbal.currentBalance);
    //     this.valueSet(accbal.currentBalance);
    //     console.log('backend accbal', accbal.amount);
    //     this.currentBalance = accbal.amount;
    //     console.log(this.depositForm.controls)
    //     //;
    //     console.log(accbal.transactionAmount);
    //     this.depositForm.controls.accountBalance.patchValue(accbal.amount);
    //     this.depositForm.controls.accountBranch.patchValue(accbal.accountBranch);
    //     localStorage.setItem("AccBranch", accbal.accountBranch);
    //     // this.depositForm.controls.transactionCurrency.patchValue(accbal.countryCode);
    //     // this.selectCurrencyCode(accbal.accountCurrency);
    //     // this.depositForm.controls.transactionBranch.patchValue(accbal.accountBranch);
    //     console.log(accbal.transactionAmount);
    //     if (accbal.transactionAmount != null || accbal.transactionAmount != undefined) {
    //       this.numberOnlyValidation(accbal.transactionAmount);
    //     }
    //     if (accbal.lastTransactions != null) {
    //       if (accbal.lastTransactions.length <= 2) {
    //         this.depositForm.controls.transactionBranch.patchValue(accbal.accountBranch);
    //       }
    //       else {
    //         var brnCnt = 0;
    //         var brnOldCnt = 0;
    //         console.log("Else", accbal.lastTransactions);
    //         for (var i = 0; i < accbal.lastTransactions.length; i++) {
    //           if (accbal.lastTransactions[i].transactionBranch != null) {
    //             for (var n = 0; n < accbal.lastTransactions.length; n++) {
    //               if (accbal.lastTransactions[n].transactionBranch != null) {
    //                 if (accbal.lastTransactions[i].transactionBranch === accbal.lastTransactions[n].transactionBranch) {
    //                   brnCnt = brnCnt + 1;
    //                 }
    //               }
    //             }
    //           }
    //           if (brnOldCnt < brnCnt && brnCnt >= 2) {
    //             this.trnBrn = accbal.lastTransactions[i].transactionBranch;
    //             brnOldCnt = brnCnt;
    //           }
    //           brnCnt = 0;
    //         }
    //         if (this.trnBrn != null) {
    //           this.depositForm.controls.transactionBranch.patchValue(this.trnBrn);
    //         } else {
    //           this.depositForm.controls.transactionBranch.patchValue(accbal.accountBranch);
    //         }
    //       }
    //     }
    //     else {
    //       this.depositForm.controls.transactionBranch.patchValue(accbal.accountBranch);
    //     }
    //     // this.users=dropdown;
    //     for (let i in this.currencies) {
    //       this.selectedCountryCode = (this.currencies[i].countryCode).toLowerCase();
    //       this.depositForm.controls.transactionCurrency.patchValue(this.currencies[i].countryCode);
    //     }
    //   });
    // }
    savingAccountFun(filteredResponseSavingAccount) {
        console.log(filteredResponseSavingAccount);
        this.users = filteredResponseSavingAccount.custAccount;
        this.curr = Object(_angular_common__WEBPACK_IMPORTED_MODULE_9__["getCurrencySymbol"])(filteredResponseSavingAccount.custAccount[0].accountCurrency, "narrow");
        this.currentBalance = this.users[0].amount;
        if (this.accountInfo.accountId != null) {
            this.depositForm.get('accountNumber').patchValue(this.accountInfo.accountId);
        }
        else {
            this.depositForm.get('accountNumber').patchValue(this.users[0].accountId);
        }
        this.selectedCountryCode = filteredResponseSavingAccount.countryCode.toLowerCase();
        this.depositForm.controls.accountBranch.patchValue(filteredResponseSavingAccount.custAccount[0].accountBranch);
        this.depositForm.controls.transactionCurrency.patchValue(filteredResponseSavingAccount.countryCode);
        this.depositForm.get('transactionBranch').patchValue(filteredResponseSavingAccount.custAccount[0].accountBranch);
        this.cdr.markForCheck();
    }
    validateDisablebutton(button) {
        this.depositForm.valueChanges.subscribe(v => {
            // console.log("v:: ", v);
            if (button === 'disable1') {
                if (v.accountBranch != '' && v.accountNumber != '' && v.transactionAmount != ''
                    && v.transactionCurrency != '' && v.transactionAmount != 0) {
                    this.submitted = false;
                }
                else {
                    this.submitted = true;
                }
                console.log(this.submitted);
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
    valueSet(currentBalance) {
        this.currentBalance = currentBalance;
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
    format24HrsTo12Hrs(time) {
        var formatted = moment__WEBPACK_IMPORTED_MODULE_6__(time, "HH:mm").format("LT");
        return formatted;
    }
    openPopup() {
        console.log("popup");
        this.modalController.create({
            component: src_app_components_time_slots_time_slots_component__WEBPACK_IMPORTED_MODULE_12__["TimeSlotsComponent"],
            componentProps: {
                date: this.depositForm.get('transactionDate').value
            }
        }).then(modalResp => {
            modalResp.present();
            modalResp.onDidDismiss().then(res => {
                if (res.data != null) {
                    console.log(res);
                    this.depositForm.get('transactionTime').patchValue(res.data);
                }
            });
        });
    }
};
CashdepositPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
    { type: src_app_services_loading_service__WEBPACK_IMPORTED_MODULE_13__["LoadingService"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ToastController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["ModalController"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
CashdepositPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-cashdeposit',
        template: _raw_loader_cashdeposit_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_cashdeposit_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CashdepositPage);



/***/ }),

/***/ "XZVd":
/*!*********************************************************!*\
  !*** ./src/app/views/cashdeposit/cashdeposit.module.ts ***!
  \*********************************************************/
/*! exports provided: CashdepositPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashdepositPageModule", function() { return CashdepositPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _cashdeposit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cashdeposit-routing.module */ "cFyB");
/* harmony import */ var _cashdeposit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cashdeposit.page */ "7NH0");
/* harmony import */ var ngx_flag_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-flag-picker */ "09Zs");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");









let CashdepositPageModule = class CashdepositPageModule {
};
CashdepositPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _cashdeposit_routing_module__WEBPACK_IMPORTED_MODULE_5__["CashdepositPageRoutingModule"],
            ngx_flag_picker__WEBPACK_IMPORTED_MODULE_7__["NgxFlagPickerModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
        ],
        declarations: [_cashdeposit_page__WEBPACK_IMPORTED_MODULE_6__["CashdepositPage"]]
    })
], CashdepositPageModule);



/***/ }),

/***/ "Yr8K":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/cashdeposit/cashdeposit.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-operation [title] = \"cashWithdrawal\"></app-operation> -->\r\n<ion-header *ngIf=flag>\r\n  <ion-toolbar>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button></ion-back-button>\r\n    </ion-buttons>\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=flag>\r\n  <div>\r\n    <form [formGroup]=\"depositForm\" >\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label>Account Number*</ion-label>\r\n        <!-- <ion-input class=\"box\"></ion-input> -->\r\n        <ion-select [compareWith]=\"compareWith\" class=\"box\" (ionChange)=\"accountEvent($event)\"\r\n          formControlName=\"accountNumber\" ngDefaultControl>\r\n          <ion-select-option *ngFor=\"let user of users\" [value]=\"user.accountId\">{{user.accountId}}</ion-select-option>\r\n        </ion-select>\r\n      </div>\r\n      \r\n      <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\" class=\"labelCard\" style=\"font-size: 14px;\">Account Balance : {{curr }} {{currentBalance}}\r\n        </ion-label>\r\n      </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\" class=\"labelCard\"  style=\"font-size: 14px;\">Account Branch : {{depositForm.controls.accountBranch.value}}</ion-label>\r\n    </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label>Transaction Currency*</ion-label>\r\n      </div>\r\n      <div class=\"box7\">\r\n        <ion-card class=\"box\">\r\n          <ion-row>\r\n            <ion-col style=\"width: 10%;\">\r\n              <ngx-flag-picker [selectedCountryCode]=\"selectedCountryCode\" [showFlags]=\"isShow\" [showLabels]=\"!isShow\"\r\n                [showArrow]=\"!isShow\">\r\n              </ngx-flag-picker>\r\n            </ion-col>\r\n            <ion-col style=\"width: 20%;\">\r\n              <ion-select [compareWith]=\"compareWith\" formControlName=\"transactionCurrency\"\r\n              #code (ionChange)=\"selectCurrencyCode(code.value)\"style=\"font-size: large;margin-left: -40%;\">\r\n                <ion-select-option *ngFor=\"let currency of currencies\" [value]=\"currency.countryCode\">\r\n                  {{currency.currencyCode + ' : ' + currency.countryName.toUpperCase()}}\r\n                </ion-select-option>\r\n              </ion-select>\r\n            </ion-col>\r\n          </ion-row>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\">Transaction Amount*</ion-label>\r\n        <ion-input class=\"box\" #myRef [(ngModel)]= \"transAmount\"  formControlName=\"transactionAmount\" \r\n        type=\"text\" min=\"1\" (keyup)=\"numberOnlyValidation($event)\"></ion-input>\r\n      </div>\r\n\r\n\r\n      <!-- <div class=\"inputCard1\">\r\n        <ion-label position=\"stacked\">Account Branch*</ion-label>\r\n        <ion-input class=\"box\" formControlName=\"accountBranch\" readonly #accountBranch></ion-input>\r\n      </div> -->\r\n\r\n      <div class=\"ion-padding-top\">\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\" (click)=\"goToNextPage()\"\r\n          [disabled]=\"validateDisablebutton('disable1')||!transAmount  || submitted\" style=\"width: 95%;\">\r\n            Next</ion-button>\r\n        </div>\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\" fill=\"clear\" style=\"color: black;\" (click)=\"goToHomepage()\">Cancel\r\n          </ion-button>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-header *ngIf=!flag>\r\n  <ion-toolbar>\r\n    <ion-icon class=\"backIcon\" name=\"chevron-back-outline\" (click)=\"goToPreviousPage()\"></ion-icon>\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=!flag>\r\n  <div>\r\n    <form [formGroup]=\"depositForm\">\r\n      <!-- <div class=\"textCard\">\r\n            <ion-text>\r\n              <h5 style=\"color: gray;padding-left: 4%;\">Do you wish to perform this transaction in your home branch</h5>\r\n            </ion-text>\r\n          </div>\r\n  \r\n          <div class=\"inputCard2\">\r\n            <ion-radio-group>\r\n              <ion-row>\r\n               <ion-col>\r\n                 <ion-item lines=\"none\">\r\n                 <ion-radio mode=\"md\" value=\"buy\"></ion-radio>\r\n                 <ion-label position=\"start\" style=\"padding-left: 10px;\">yes</ion-label>\r\n                 </ion-item>\r\n                </ion-col>\r\n    \r\n               <ion-col>\r\n                 <ion-item lines=\"none\">\r\n                 <ion-radio mode=\"md\" value=\"sell\"></ion-radio>\r\n                 <ion-label style=\"padding-left: 10px;\">No</ion-label>\r\n                 </ion-item>\r\n               </ion-col>\r\n              </ion-row>\r\n            </ion-radio-group>\r\n         </div> -->\r\n\r\n      <div style=\"margin-left: 19px;margin-top: 19px;margin-right: 19px\">\r\n        <ion-label>Do you wish to perform this transaction in your branch?</ion-label>\r\n        <!-- <ion-label></ion-label> -->\r\n        <ion-radio-group name=\"branchFlags\" formControlName=\"branchFlag\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label position=\"start\">Yes</ion-label>\r\n                <ion-radio mode=\"md\" item-left name=\"flagYes\" [value]=\"true\"></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label>No</ion-label>\r\n                <ion-radio mode=\"md\" item-left name=\"flagNo\" [value]=\"false\"></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          </ion-radio-group>\r\n      </div>\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-router-link (click)=\"presentModal()\" [hidden]=\"!nearestBrn\" class=\"underline\">Click here to find nearest branch</ion-router-link>\r\n      </div><br>\r\n\r\n      <div class=\"inputCard2\" >\r\n        <ion-label style=\"padding-left: 5%;\">Transaction Branch*</ion-label>\r\n        <ion-card class=\"box\" >\r\n          <ion-item lines=\"none\">\r\n            <ion-input appearence=\"none\" formControlName=\"transactionBranch\" \r\n            [readonly]=\"depositForm.get('branchFlag').value ? true : false\">\r\n           </ion-input>\r\n           <ion-icon *ngIf=\"depositForm.get('branchFlag').value == true\" name=\"home-outline\" color=\"primary\" slot=\"end\"></ion-icon>\r\n           <ion-icon *ngIf=\"depositForm.get('branchFlag').value == false\" name=\"navigate-circle-outline\" color=\"primary\" slot=\"end\"></ion-icon>\r\n          </ion-item>\r\n        </ion-card>\r\n          <ion-note style=\"color: red; margin-left: 22px;top: 13px;\" *ngIf=\"f.transactionBranch.errors?.required && f.transactionBranch.touched\"> \r\n            <small>Transaction Branch Required</small>\r\n          </ion-note>\r\n       </div>\r\n\r\n      <div class=\"inputCard2\">\r\n\r\n        <ion-label style=\"padding-left: 5%;\">Transaction date*</ion-label>\r\n        <ion-card class=\"box\">\r\n          <ion-item lines=\"none\">\r\n            <ion-datetime displayFormat=\"DDD. MMM DD, YY\" [min]=\"minDate\"  [max]=\"maxDate\" placeholder=\"Select date\" formControlName=\"transactionDate\">\r\n            </ion-datetime>\r\n            <ion-icon name=\"calendar\" slot=\"end\"></ion-icon>\r\n\r\n          </ion-item>\r\n        </ion-card>\r\n      </div>\r\n\r\n\r\n      <div class=\"inputCard2\">\r\n        <ion-label style=\"padding-left: 5%;\">Time Slot*</ion-label>\r\n        <ion-card class=\"box\" >\r\n          <ion-item lines=\"none\">\r\n             \r\n                  <ion-input  formControlName=\"transactionTime\"></ion-input>\r\n               <!-- <ion-datetime displayFormat=\"hh:mm A\"  placeholder=\"Select time slot\" formControlName=\"transactionTime\"></ion-datetime> -->\r\n               <ion-icon name=\"alarm-outline\" slot=\"end\"  (click)=\"openPopup()\"></ion-icon>\r\n             \r\n            <!-- <ion-datetime displayFormat=\"hh:mm A\" placeholder=\" Select Time Slot\" formControlName=\"transactionTime\">\r\n            </ion-datetime> -->\r\n            <!-- <ion-icon name=\"alarm-outline\" slot=\"end\"></ion-icon> -->\r\n          </ion-item>\r\n        </ion-card>\r\n      </div>\r\n\r\n      <div class=\"inputCard2\" *ngIf=\"title == 'Cheque Withdrawal' || title =='Cheque Deposit'\">\r\n        <ion-label position=\"stacked\">Remark</ion-label>\r\n        <ion-input class=\"chequeCard\" formControlName=\"accountNo\"></ion-input>\r\n      </div>\r\n\r\n\r\n\r\n\r\n      <div class=\"ion-padding-top\">\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\" \r\n          [disabled]=\"validateDisablebutton('disable2')  || submitted1\"\r\n          (click)=\"goToNextScreen(depositForm.value)\">Next</ion-button>\r\n        </div>\r\n\r\n\r\n        <div>\r\n          <ion-button expand=\"block\" shape=\"round\" fill=\"clear\" style=\"width: 95%;color:black;\"\r\n            (click)=\"goToPreviousPage()\">Back</ion-button>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "cFyB":
/*!*****************************************************************!*\
  !*** ./src/app/views/cashdeposit/cashdeposit-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: CashdepositPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CashdepositPageRoutingModule", function() { return CashdepositPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _cashdeposit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cashdeposit.page */ "7NH0");




const routes = [
    {
        path: '',
        component: _cashdeposit_page__WEBPACK_IMPORTED_MODULE_3__["CashdepositPage"]
    }
];
let CashdepositPageRoutingModule = class CashdepositPageRoutingModule {
};
CashdepositPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CashdepositPageRoutingModule);



/***/ })

}]);
//# sourceMappingURL=views-cashdeposit-cashdeposit-module.js.map