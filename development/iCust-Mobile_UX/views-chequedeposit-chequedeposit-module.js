(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-chequedeposit-chequedeposit-module"],{

/***/ "6N8C":
/*!*************************************************************!*\
  !*** ./src/app/views/chequedeposit/chequedeposit.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".crowdsCount {\n  margin-left: 1cm;\n}\n\n.box {\n  border-width: thin;\n  border-radius: 13px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  width: 95%;\n  height: 55px;\n  margin-top: 10px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.chequeCard {\n  border-width: thin;\n  border-radius: 10px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  width: 95%;\n  margin-left: 4%;\n  height: 100px;\n  display: inline-block;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\nform::-webkit-scrollbar {\n  display: none;\n}\n\n.inputCard1 {\n  padding-top: 7%;\n  padding-left: 5%;\n}\n\n.inputCard2 {\n  padding-top: 3%;\n  padding-left: 3%;\n}\n\n.textCard {\n  padding-left: 5%;\n}\n\n.labelCard {\n  color: gray;\n}\n\n.underline {\n  text-decoration: underline;\n  font-size: 14px;\n  padding-left: 4%;\n}\n\n.ion-padding-top {\n  padding-top: 10%;\n  padding-left: 3%;\n}\n\n.ion-padding-top2 {\n  padding-top: 8%;\n  padding-left: 5%;\n}\n\n.cancelcard {\n  padding-top: 8%;\n  padding-left: 44%;\n  font-size: 14px;\n}\n\n.backcard {\n  padding-top: 8%;\n  padding-left: 47%;\n  font-size: 14px;\n}\n\n.icondate {\n  display: inline-block;\n}\n\nion-searchbar {\n  background-color: #f9fafb;\n}\n\nion-select {\n  font-family: \"Montserrat-SemiBold\" !important;\n  font-size: 14pt;\n}\n\nion-text {\n  font-family: \"Montserrat\" !important;\n  font-size: 14px;\n  opacity: 75%;\n}\n\nion-button {\n  width: 95%;\n  padding-left: 5%;\n  height: 50px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-input {\n  color: black !important;\n  font-size: 14pt;\n  --placeholder-color: black !important;\n  font-family: \"Montserrat\" !important;\n}\n\nion-label {\n  color: #102245;\n  font-family: \"Montserrat\" !important;\n  font-size: 14px;\n  opacity: 75%;\n}\n\nion-back-button {\n  color: #4949e2;\n  margin-bottom: 2%;\n  font-size: larger;\n  text-transform: none;\n}\n\nion-toolbar {\n  margin-top: 5%;\n  box-shadow: 0 5pt 5pt -2pt #D3D3D3;\n}\n\nngx-flag-picker {\n  display: inline-block;\n  font-size: x-large;\n  padding-top: 14px;\n  padding-left: 20px;\n  padding-top: 4%;\n  align-content: center;\n}\n\n.box7 {\n  padding-top: 0%;\n  padding-left: 0%;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.backIcon {\n  font-size: xx-large;\n  color: #466ffe;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.ioncontent {\n  height: 110%;\n  margin-top: -3%;\n}\n\n.ioncontent1 {\n  height: 135%;\n}\n\n.text {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  color: blue;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGVxdWVkZXBvc2l0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLGdCQUFBO0FBSEY7O0FBTUM7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUZBQUE7RUFDQSwrQkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFFQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7QUFKTDs7QUFRSztFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxRkFBQTtFQUNGLCtCQUFBO0VBQ0UsVUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFFQSx3QkFBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7QUFOUDs7QUFTSztFQUNFLGFBQUE7QUFOUDs7QUFRRTtFQUdJLGVBQUE7RUFDQSxnQkFBQTtBQVBOOztBQVNFO0VBQ0MsZUFBQTtFQUNBLGdCQUFBO0FBTkg7O0FBU0U7RUFFQyxnQkFBQTtBQVBIOztBQVNFO0VBQ0ksV0FBQTtBQU5OOztBQVVFO0VBQ0csMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFQTDs7QUFTRztFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7QUFOUDs7QUFTRztFQUNFLGVBQUE7RUFDQSxnQkFBQTtBQU5MOztBQVFHO0VBQ0YsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUxEOztBQU9HO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUpMOztBQU1HO0VBQ0YscUJBQUE7QUFIRDs7QUFPSTtFQUNELHlCQUFBO0FBSkg7O0FBT0M7RUFDRSw2Q0FBQTtFQUNBLGVBQUE7QUFKSDs7QUFNQztFQUNFLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFISDs7QUFNQztFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQUhIOztBQU1FO0VBQ0MsdUJBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7RUFFQSxvQ0FBQTtBQUpIOztBQU1HO0VBQ0UsY0FBQTtFQUNDLG9DQUFBO0VBQ0MsZUFBQTtFQUNBLFlBQUE7QUFIUDs7QUFLRztFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFGUDs7QUFLRztFQUNFLGNBQUE7RUFDRCxrQ0FBQTtBQUZKOztBQUlHO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUFETDs7QUFJRztFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFETDs7QUFHRTtFQUNLLG1CQUFBO0VBRUEsY0FBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFEUDs7QUFJRztFQUNFLFlBQUE7RUFDQSxlQUFBO0FBREw7O0FBR0c7RUFDRSxZQUFBO0FBQUw7O0FBRUc7RUFDSSxlQUFBO0VBQ0YscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esb0NBQUE7QUFDTCIsImZpbGUiOiJjaGVxdWVkZXBvc2l0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIC8vICoge1xyXG4vLyAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuLy8gICAvKiBBZGQgIWltcG9ydGFudCB0byBvdmVyd3JpdGUgYWxsIGVsZW1lbnRzICovXHJcbi8vICB9XHJcbi5jcm93ZHNDb3VudHtcclxuICBtYXJnaW4tbGVmdDogMWNtO1xyXG59XHJcblxyXG4gLmJveCB7XHJcbiAgICAgYm9yZGVyLXdpZHRoOiB0aGluO1xyXG4gICAgIGJvcmRlci1yYWRpdXM6IDEzcHg7XHJcbiAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxyZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gICAgIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcbiAgICAgd2lkdGg6IDk1JTtcclxuICAgICBoZWlnaHQ6IDU1cHg7XHJcbiAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIFxyXG4gICAgIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcclxuICAgICBib3JkZXItcmlnaHQtc3R5bGU6IGhpZGRlbjtcclxuICAgICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xyXG4gICB9XHJcbiBcclxuICBcclxuICAgICAuY2hlcXVlQ2FyZHtcclxuICAgICAgIGJvcmRlci13aWR0aDogdGhpbjtcclxuICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpLHJnYmEoMjQ4LCAyNTAsIDI1NCwgMC41KSk7XHJcbiAgICAgYm94LXNoYWRvdzogMCAzcHQgNnB0ICMwMDAwMDAyOTtcclxuICAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgICBtYXJnaW4tbGVmdDogNCU7XHJcbiAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmYWZiO1xyXG4gICAgICAgYm9yZGVyLXRvcC1zdHlsZTogaGlkZGVuO1xyXG4gICAgICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgICAgICBib3JkZXItbGVmdC1zdHlsZTogaGlkZGVuO1xyXG4gICAgIH1cclxuICAgXHJcbiAgICAgZm9ybTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgfVxyXG4gIC5pbnB1dENhcmQxe1xyXG4gICAgIC8vICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gICAgIC8vICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICAgICBwYWRkaW5nLXRvcDogNyU7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgfVxyXG4gIC5pbnB1dENhcmQye1xyXG4gICBwYWRkaW5nLXRvcDogMyU7XHJcbiAgIHBhZGRpbmctbGVmdDogMyU7XHJcbiB9XHJcbiBcclxuICAudGV4dENhcmR7XHJcbiAgIC8vIHBhZGRpbmctdG9wOiAtNiU7XHJcbiAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiB9XHJcbiAgLmxhYmVsQ2FyZHtcclxuICAgICAgY29sb3I6IGdyYXk7XHJcbiAgICAgIC8vZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuIFxyXG4gIC51bmRlcmxpbmUge1xyXG4gICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICBwYWRkaW5nLWxlZnQ6IDQlO1xyXG4gICB9XHJcbiAgIC5pb24tcGFkZGluZy10b3B7XHJcbiAgICAgICBwYWRkaW5nLXRvcDogMTAlO1xyXG4gICAgICAgcGFkZGluZy1sZWZ0OiAzJTtcclxuICAgfVxyXG4gXHJcbiAgIC5pb24tcGFkZGluZy10b3Aye1xyXG4gICAgIHBhZGRpbmctdG9wOiA4JTtcclxuICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICB9XHJcbiAgIC5jYW5jZWxjYXJke1xyXG4gcGFkZGluZy10b3A6IDglO1xyXG4gcGFkZGluZy1sZWZ0OiA0NCU7XHJcbiBmb250LXNpemU6IDE0cHg7XHJcbiAgIH1cclxuICAgLmJhY2tjYXJke1xyXG4gICAgIHBhZGRpbmctdG9wOiA4JTtcclxuICAgICBwYWRkaW5nLWxlZnQ6IDQ3JTtcclxuICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICB9XHJcbiAgIC5pY29uZGF0ZXtcclxuIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuIFxyXG4gICB9XHJcbiAgXHJcbiAgICBpb24tc2VhcmNoYmFyIHtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcclxuICB9XHJcbiBcclxuIGlvbi1zZWxlY3R7XHJcbiAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdC1TZW1pQm9sZCcgIWltcG9ydGFudDtcclxuICAgZm9udC1zaXplOiAxNHB0O1xyXG4gfVxyXG4gaW9uLXRleHR7XHJcbiAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICBvcGFjaXR5OiA3NSU7XHJcbiB9XHJcbiBcclxuIGlvbi1idXR0b257XHJcbiAgIHdpZHRoOiA5NSU7XHJcbiAgIHBhZGRpbmctbGVmdDogNSU7XHJcbiAgIGhlaWdodDogNTBweDtcclxuICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICBcclxuIH1cclxuICBpb24taW5wdXQge1xyXG4gICBjb2xvcjpibGFjayAhaW1wb3J0YW50O1xyXG4gICBmb250LXNpemU6IDE0cHQ7XHJcbiAgIC0tcGxhY2Vob2xkZXItY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XHJcbiAgLy8gIGJvcmRlcjogMXB4IHNvbGlkICNmMWYxZjEgIWltcG9ydGFudDtcclxuICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgIGlvbi1sYWJlbHtcclxuICAgICBjb2xvcjojMTAyMjQ1O1xyXG4gICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICBvcGFjaXR5OiA3NSU7XHJcbiAgIH1cclxuICAgaW9uLWJhY2stYnV0dG9ue1xyXG4gICAgICAgY29sb3I6IHJnYig3MywgNzMsIDIyNik7XHJcbiAgICAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICAgICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgIH1cclxuICBcclxuICAgaW9uLXRvb2xiYXJ7XHJcbiAgICAgbWFyZ2luLXRvcDo1JTtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB0IDVwdCAtMnB0ICNEM0QzRDM7XHJcbiB9XHJcbiAgIG5neC1mbGFnLXBpY2tlcntcclxuICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xyXG4gICAgIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICBwYWRkaW5nLXRvcDogNCU7XHJcbiAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gXHJcbiAgIH1cclxuICAgLmJveDd7XHJcbiAgICAgcGFkZGluZy10b3A6IDAlO1xyXG4gICAgIHBhZGRpbmctbGVmdDogMCU7XHJcbiAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7IFxyXG4gICAgIG1hcmdpbi1yaWdodDogMTBweDsgXHJcbiAgIH1cclxuICAuYmFja0ljb257XHJcbiAgICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgICAgLy8gY29sb3I6IGJsdWU7XHJcbiAgICAgICBjb2xvcjpyZ2IoNzAsMTExLDI1NCk7XHJcbiAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgXHJcbiAgIH1cclxuICAgLmlvbmNvbnRlbnR7XHJcbiAgICAgaGVpZ2h0OiAxMTAlO1xyXG4gICAgIG1hcmdpbi10b3A6IC0zJTtcclxuICAgfVxyXG4gICAuaW9uY29udGVudDF7XHJcbiAgICAgaGVpZ2h0OiAxMzUlO1xyXG4gICB9XHJcbiAgIC50ZXh0e1xyXG4gICAgICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgIGNvbG9yOiBibHVlO1xyXG4gICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuICBcclxuIFxyXG4gICAvLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzMjBweCkge1xyXG4gICAvLyAgIC5pb25jb250ZW50e1xyXG4gICAvLyAgICAgaGVpZ2h0OiAxMzAlO1xyXG4gICAvLyAgICAgbWFyZ2luLXRvcDogLTMlO1xyXG4gICAvLyAgIH1cclxuICAgLy8gICAuaW9uY29udGVudDF7XHJcbiAgIC8vICAgICBoZWlnaHQ6IDE2NSU7XHJcbiAgIC8vICAgfVxyXG4gICAvLyB9Il19 */");

/***/ }),

/***/ "GsTP":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/chequedeposit/chequedeposit.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-operation [title] = \"cashWithdrawal\"></app-operation> -->\r\n<ion-header *ngIf=flag>\r\n  <ion-toolbar>\r\n    <ion-back-button  class=\"backIcon\" name=\"chevron-back-outline\" (click)=\"goToHomepage()\"></ion-back-button >\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=flag>\r\n  <div>\r\n    <form [formGroup]=\"slideOneForm\">\r\n      \r\n      <div class=\"inputCard1\">\r\n        <ion-label>Account Number*</ion-label>\r\n        <!-- <ion-input class=\"box\"></ion-input> -->\r\n        <ion-select [compareWith]=\"compareWith\" class=\"box\" formControlName=\"accountNumber\" (ionChange)=\"accountEvent($event)\" ngDefaultControl>\r\n          <ion-select-option *ngFor=\"let user of users\" [value]=\"user.accountId\">{{user.accountId}}</ion-select-option>\r\n        </ion-select>\r\n        </div>\r\n\r\n        <div class=\"inputCard1\">\r\n          <ion-label position=\"stacked\" class=\"labelCard\"  style=\"font-size: 14px;\">Account Balance : {{curr }} {{currentBalance}}</ion-label>   \r\n          </div>\r\n\r\n          <div class=\"inputCard1\">\r\n            <ion-label position=\"stacked\" class=\"labelCard\"  style=\"font-size: 14px;\">Account Branch : {{slideOneForm.controls.accountBranch.value}}</ion-label>\r\n        </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label>Transaction Currency*</ion-label>\r\n        </div>\r\n        <div class=\"box7\">\r\n          \r\n          <ion-card class=\"box\">\r\n            <ion-row>\r\n              <ion-col style=\"width: 10%;\">\r\n                  <ngx-flag-picker\r\n                  [selectedCountryCode]=\"selectedCountryCode\"\r\n                  [showFlags]=\"isShow\"\r\n                  [showLabels]=\"!isShow\"\r\n                  [showArrow]=\"!isShow\">\r\n                </ngx-flag-picker>\r\n               </ion-col>\r\n              <ion-col style=\"width: 20%;\">\r\n                  <ion-select [compareWith]=\"compareWith\" formControlName=\"transactionCurrency\" #code (ionChange)=\"selectCurrencyCode(code.value)\" style=\"font-size: large;margin-left: -40%;\">\r\n                    <ion-select-option *ngFor=\"let currency of currencies\" [value]=\"currency.countryCode\" >\r\n                      {{currency.currencyCode + ' : ' + currency.countryName.toUpperCase()}}\r\n                    </ion-select-option>\r\n                    </ion-select>\r\n              </ion-col>\r\n             </ion-row>\r\n           </ion-card>\r\n          </div>\r\n\r\n      <div class=\"inputCard1\">\r\n          <ion-label position=\"stacked\">Transaction Amount*</ion-label>\r\n          <ion-input class=\"box\" #myRef [(ngModel)]= \"transAmount\"  formControlName=\"transactionAmount\" \r\n          type=\"text\" min=\"1\" (keyup)=\"numberOnlyValidation($event)\"></ion-input>\r\n      </div>\r\n     \r\n      <div class=\"inputCard1\">\r\n        <ion-label>Cheque Number*</ion-label>\r\n       <!-- <ion-input class=\"box\" type=\"number\" maxlength=\"12\"></ion-input>-->\r\n        <ion-input class=\"box\" type=\"tel\"  (keypress)=keyPress($event) maxlength=\"12\"></ion-input>\r\n      </div>\r\n      <!--<div class=\"inputCard1\">\r\n          <ion-label position=\"stacked\" >Account Branch*</ion-label>\r\n          <ion-input class=\"box\" formControlName=\"accountBranch\"></ion-input>\r\n      </div>-->\r\n      \r\n  <div class=\"ion-padding-top\">\r\n  <div>\r\n    <ion-button  expand=\"block\" shape=\"round\"(click)=\"goToNextPage()\" \r\n    [disabled]=\"validateDisablebutton('disable1') ||!transAmount   || submitted\" style=\"width: 95%;\">Next</ion-button>\r\n  </div>\r\n  <div>\r\n    <ion-button expand=\"block\" shape=\"round\" fill=\"clear\" style=\"color: black;\"\r\n    (click)=\"goToHomepage()\">Cancel</ion-button>\r\n</div>\r\n\r\n\r\n</div>\r\n     \r\n    </form>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-header *ngIf=!flag>\r\n  <ion-toolbar>\r\n    <ion-icon class=\"backIcon\" name=\"chevron-back-outline\" (click)=\"goToPreviousPage()\"></ion-icon>\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=!flag>\r\n  <div>\r\n    <form [formGroup]=\"slideOneForm\">\r\n        <!-- <div class=\"textCard\">\r\n          <ion-text>\r\n            <h5 style=\"color: gray;padding-left: 4%;\">Do you wish to perform this transaction in your home branch</h5>\r\n          </ion-text>\r\n        </div>\r\n\r\n        <div class=\"inputCard2\">\r\n          <ion-radio-group>\r\n            <ion-row>\r\n             <ion-col>\r\n               <ion-item lines=\"none\">\r\n               <ion-radio mode=\"md\" value=\"buy\"></ion-radio>\r\n               <ion-label position=\"start\" style=\"padding-left: 10px;\">yes</ion-label>\r\n               </ion-item>\r\n              </ion-col>\r\n  \r\n             <ion-col>\r\n               <ion-item lines=\"none\">\r\n               <ion-radio mode=\"md\" value=\"sell\"></ion-radio>\r\n               <ion-label style=\"padding-left: 10px;\">No</ion-label>\r\n               </ion-item>\r\n             </ion-col>\r\n            </ion-row>\r\n          </ion-radio-group>\r\n       </div> -->\r\n\r\n       <div style=\"margin-left: 19px;margin-top: 19px;margin-right: 19px\">\r\n        <ion-label >Do you wish to perform this transaction in your branch?</ion-label>\r\n        <!-- <ion-label></ion-label> -->\r\n        <ion-radio-group name=\"branchFlags\" formControlName=\"branchFlag\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label position=\"start\">Yes</ion-label>\r\n                <ion-radio mode=\"md\" item-left name=\"flagYes\" [value]=\"true\"></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label>No</ion-label>\r\n                <ion-radio mode=\"md\" item-left name=\"flagNo\" [value]=\"false\"></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          </ion-radio-group>\r\n</div>\r\n\r\n       <div class=\"inputCard2\">\r\n          <ion-router-link (click)=\"presentModal()\" [hidden]=\"!nearestBrn\" class=\"underline\">Click here to find nearest branch</ion-router-link>\r\n       </div><br>\r\n  \r\n       <div class=\"inputCard2\" >\r\n        <ion-label style=\"padding-left: 5%;\">Transaction Branch*</ion-label>\r\n        <ion-card class=\"box\" >\r\n          <ion-item lines=\"none\">\r\n            <ion-input appearence=\"none\" formControlName=\"transactionBranch\" \r\n            [readonly]=\"slideOneForm.get('branchFlag').value ? true : false\">\r\n           </ion-input>\r\n           <ion-icon *ngIf=\"slideOneForm.get('branchFlag').value == true\" name=\"home-outline\" color=\"primary\" slot=\"end\"></ion-icon>\r\n           <ion-icon *ngIf=\"slideOneForm.get('branchFlag').value == false\" name=\"navigate-circle-outline\" color=\"primary\" slot=\"end\"></ion-icon>\r\n          </ion-item>\r\n        </ion-card>\r\n          <ion-note style=\"color: red; margin-left: 22px;top: 13px;\" *ngIf=\"f.transactionBranch.errors?.required && f.transactionBranch.touched\"> \r\n            <small>Transaction Branch Required</small>\r\n          </ion-note>\r\n       </div>\r\n       <p class=\"crowdsCount\"><small>Number of Crowds : {{ tokenCount }}</small></p>\r\n\r\n      <div class=\"inputCard2\">\r\n\r\n          <ion-label style=\"padding-left: 5%;\">Transaction date*</ion-label>\r\n        <ion-card class=\"box\" >\r\n          <ion-item lines=\"none\">\r\n              <ion-datetime displayFormat=\"DDD. MMM DD, YY\" [min]=\"minDate\"  [max]=\"maxDate\" placeholder=\"Select date\" formControlName=\"transactionDate\" >\r\n              </ion-datetime>\r\n         <ion-icon name=\"calendar\" slot=\"end\"></ion-icon>\r\n\r\n         </ion-item> \r\n     </ion-card>\r\n     </div>\r\n    \r\n\r\n     <div class=\"inputCard2\">\r\n       <ion-label style=\"padding-left: 5%;\">Time Slot*</ion-label>\r\n     <ion-card class=\"box\">\r\n       <ion-item  lines=\"none\">\r\n          <ion-input  formControlName=\"transactionTime\"></ion-input>\r\n        <!-- <ion-datetime displayFormat=\"hh:mm A\"  placeholder=\"Select time slot\" formControlName=\"transactionTime\"></ion-datetime> -->\r\n        <ion-icon name=\"alarm-outline\" slot=\"end\" (click)=\"openPopup()\"></ion-icon>\r\n      </ion-item>\r\n     </ion-card>\r\n     </div> \r\n\r\n     <div class=\"inputCard2\" *ngIf=\"title == 'Cheque Withdrawal' || title =='Cheque Deposit'\">\r\n      <ion-label position=\"stacked\">Remark</ion-label>\r\n      <ion-input class=\"chequeCard\" formControlName=\"remarks\" ></ion-input>\r\n     </div>\r\n\r\n     \r\n\r\n\r\n     <div class=\"ion-padding-top\">\r\n    <div>\r\n      <ion-button  expand=\"block\" shape=\"round\" (click)=\"save(slideOneForm.value)\">Next</ion-button>\r\n    </div>\r\n\r\n \r\n    <div>\r\n      <ion-button expand=\"block\" shape=\"round\" fill=\"clear\" style=\"width: 95%;color:black;\"\r\n(click)=\"goToPreviousPage()\">Back</ion-button>\r\n  </div>\r\n</div>\r\n  </form>\r\n</div>\r\n\r\n</ion-content>\r\n");

/***/ }),

/***/ "TdyZ":
/*!***********************************************************!*\
  !*** ./src/app/views/chequedeposit/chequedeposit.page.ts ***!
  \***********************************************************/
/*! exports provided: ChequedepositPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequedepositPage", function() { return ChequedepositPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_chequedeposit_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./chequedeposit.page.html */ "GsTP");
/* harmony import */ var _chequedeposit_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chequedeposit.page.scss */ "6N8C");
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
















let ChequedepositPage = class ChequedepositPage {
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
        this.title = 'Cheque Deposit';
        this.productCode = 'CQD';
        this.tokenOrigin = 'Mobile';
        this.submitted = true;
        this.submitted1 = true;
        this.trnBrn = null;
        //transAmount:number;
        this.isedit = true;
        this.accountBranch = "Loita street";
        this.flag = true;
        this.users = [];
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
        this.slideOneForm = this.fb.group({
            transactionId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            customerId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            chequeDepositId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            accountNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            productCode: ['CQD', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
            tokenOrigin: ['Mobile', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
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
            remarks: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
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
        this.api.custpomerDetails(this.phoneNumber)
            .subscribe((resp) => {
            this.loading.dismiss();
            console.log('backend resp in home', resp);
            this.customerDetails = resp;
            this.savingAccountFun(resp);
        }, (err) => {
            this.loading.dismiss();
        });
    }
    keyPress(event) {
        const pattern = /[0-9]/;
        let inputChar = String.fromCharCode(event.charCode);
        if (!pattern.test(inputChar)) {
            event.preventDefault();
        }
    }
    numberOnlyValidation(event) {
        this.transAmt = event.target.value;
        console.log(event.target.value);
        this.IntValue = Math.floor(this.slideOneForm.value.transactionAmount).toString().length;
        if (this.IntValue > 3) {
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
        //   // this.slideOneForm.controls['transactionAmount'].setValidators();
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
                // console.log(this.submitted);
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
    get f() { return this.slideOneForm.controls; }
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
    changeSelectedCountryCode(value) {
        // this.selectedCountryCode = value;
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
                    this.tokenCount = modelData.data.data.tokenCount;
                    this.slideOneForm.get('transactionBranch').patchValue(modelData.data['data'].branchName);
                }
            });
            return yield modal.present();
        });
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
            index: 'CQD'
        });
        this.router.navigate(['token-generation']);
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
    save(form) {
        console.log(form);
        form.transactionDate.toString();
        var date = new Date(form.transactionDate);
        console.log(date); //4/
        let latest_date = this.datepipe.transform(date, 'yyyy-MM-dd');
        form.transactionDate = latest_date;
        this.currencyData = this.currencies.find(x => x.countryCode == form.transactionCurrency);
        form.transactionCurrency = this.currencyData.currencyCode;
        // form.transactionTime=format(new Date(form.transactionTime), "HH:mm"); 
        // form.transactionTime = format(new Date(form.transactionTime), 'hh:mm:ss a');
        form.customerId = this.customerId;
        form.productCode = this.productCode;
        form.tokenOrigin = this.tokenOrigin;
        console.log(form);
        this.accountNum = form.accountNumber;
        this.transactionAmount = form.transactionAmount;
        console.log(this.transactionAmount);
        this.transDate = moment__WEBPACK_IMPORTED_MODULE_8__(new Date(form.transactionDate)).format("DD-MM-YYYY").toString();
        form.transactionTime = this.format24HrsTo12Hrs(form.transactionTime);
        localStorage.setItem("AccountNumber", this.accountNum);
        localStorage.setItem("TransactionDate", this.transDate);
        // localStorage.setItem("TransactionTime", form.transactionTime);
        localStorage.setItem("TransactionAmount", this.transactionAmount);
        localStorage.setItem("TransactionBranch", form.transactionBranch);
        //console.log(this.transactionAmount);
        form.transactionAmount = form.transactionAmount.replace(/,/g, '');
        console.log(this.transactionAmount);
        this.api.cashDepositSave(form).subscribe((resp) => {
            console.log('backend resp', resp);
            localStorage.setItem("TransactionTime", resp.transactionTime);
            this.chequeDeposit = resp;
            this.transactionId = this.chequeDeposit.transactionId;
            console.log('transactionId::', this.transactionId);
            if (this.chequeDeposit === 200 || this.chequeDeposit !== null) {
                this.shareDataService.shareTransactionId(this.transactionId);
                this.slideOneForm.reset();
                this.router.navigate(['token-generation']);
            }
        });
    }
    // accountEvent(event) {
    //   console.log("event", event.detail.value)
    //   this.api.accountBalance(event.detail.value).subscribe((accbal) => {
    //     console.log('backend accbal', accbal.currentBalance);
    //     this.valueSet(accbal.currentBalance);
    //     this.currentBalance = accbal.amount;
    //     this.slideOneForm.controls.transactionCurrency.patchValue(accbal.accountCurrency);
    //     // this.slideOneForm.controls.transactionAmount.patchValue(accbal.amount);
    //     this.slideOneForm.controls.accountBranch.patchValue(accbal.accountBranch);
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
    format24HrsTo12Hrs(time) {
        var formatted = moment__WEBPACK_IMPORTED_MODULE_8__(time, "HH:mm").format("LT");
        return formatted;
    }
};
ChequedepositPage.ctorParameters = () => [
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
ChequedepositPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"])({
        selector: 'app-chequedeposit',
        template: _raw_loader_chequedeposit_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_chequedeposit_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ChequedepositPage);



/***/ }),

/***/ "cWAX":
/*!*********************************************************************!*\
  !*** ./src/app/views/chequedeposit/chequedeposit-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: ChequedepositPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequedepositPageRoutingModule", function() { return ChequedepositPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _chequedeposit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chequedeposit.page */ "TdyZ");




const routes = [
    {
        path: '',
        component: _chequedeposit_page__WEBPACK_IMPORTED_MODULE_3__["ChequedepositPage"]
    }
];
let ChequedepositPageRoutingModule = class ChequedepositPageRoutingModule {
};
ChequedepositPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ChequedepositPageRoutingModule);



/***/ }),

/***/ "yGZL":
/*!*************************************************************!*\
  !*** ./src/app/views/chequedeposit/chequedeposit.module.ts ***!
  \*************************************************************/
/*! exports provided: ChequedepositPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChequedepositPageModule", function() { return ChequedepositPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _chequedeposit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chequedeposit-routing.module */ "cWAX");
/* harmony import */ var _chequedeposit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chequedeposit.page */ "TdyZ");
/* harmony import */ var ngx_flag_picker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-flag-picker */ "09Zs");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "j1ZV");









let ChequedepositPageModule = class ChequedepositPageModule {
};
ChequedepositPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            ngx_flag_picker__WEBPACK_IMPORTED_MODULE_7__["NgxFlagPickerModule"],
            _chequedeposit_routing_module__WEBPACK_IMPORTED_MODULE_5__["ChequedepositPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
        ],
        declarations: [
            _chequedeposit_page__WEBPACK_IMPORTED_MODULE_6__["ChequedepositPage"]
        ]
    })
], ChequedepositPageModule);



/***/ })

}]);
//# sourceMappingURL=views-chequedeposit-chequedeposit-module.js.map