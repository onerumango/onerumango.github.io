(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-chequedeposit-chequedeposit-module"],{

/***/ "6N8C":
/*!*************************************************************!*\
  !*** ./src/app/views/chequedeposit/chequedeposit.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".box {\n  border-width: thin;\n  border-radius: 13px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  width: 95%;\n  height: 55px;\n  margin-top: 10px;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\n.chequeCard {\n  border-width: thin;\n  border-radius: 10px;\n  background-image: linear-gradient(rgba(255, 255, 255, 0.5), rgba(248, 250, 254, 0.5));\n  box-shadow: 0 3pt 6pt #00000029;\n  width: 95%;\n  margin-left: 4%;\n  height: 100px;\n  display: inline-block;\n  border-top-style: hidden;\n  border-right-style: hidden;\n  border-left-style: hidden;\n}\n\nform::-webkit-scrollbar {\n  display: none;\n}\n\n.inputCard1 {\n  padding-top: 7%;\n  padding-left: 5%;\n}\n\n.inputCard2 {\n  padding-top: 3%;\n  padding-left: 3%;\n}\n\n.textCard {\n  padding-left: 5%;\n}\n\n.labelCard {\n  color: gray;\n}\n\n.underline {\n  text-decoration: underline;\n  font-size: 14px;\n  padding-left: 4%;\n}\n\n.ion-padding-top {\n  padding-top: 10%;\n  padding-left: 3%;\n}\n\n.ion-padding-top2 {\n  padding-top: 8%;\n  padding-left: 5%;\n}\n\n.cancelcard {\n  padding-top: 8%;\n  padding-left: 44%;\n  font-size: 14px;\n}\n\n.backcard {\n  padding-top: 8%;\n  padding-left: 47%;\n  font-size: 14px;\n}\n\n.icondate {\n  display: inline-block;\n}\n\nion-searchbar {\n  background-color: #f9fafb;\n}\n\nion-select {\n  font-family: \"Montserrat-SemiBold\" !important;\n  font-size: 14pt;\n}\n\nion-text {\n  font-family: \"Montserrat\" !important;\n  font-size: 14px;\n  opacity: 75%;\n}\n\nion-button {\n  width: 95%;\n  padding-left: 5%;\n  height: 50px;\n  font-family: \"Montserrat\" !important;\n}\n\nion-input {\n  color: black !important;\n  font-size: 14pt;\n  --placeholder-color: black !important;\n  font-family: \"Montserrat\" !important;\n}\n\nion-label {\n  color: #102245;\n  font-family: \"Montserrat\" !important;\n  font-size: 14px;\n  opacity: 75%;\n}\n\nion-back-button {\n  color: #4949e2;\n  margin-bottom: 2%;\n  font-size: larger;\n  text-transform: none;\n}\n\nion-toolbar {\n  margin-top: 5%;\n  box-shadow: 0 5pt 5pt -2pt #D3D3D3;\n}\n\nngx-flag-picker {\n  display: inline-block;\n  font-size: x-large;\n  padding-top: 14px;\n  padding-left: 20px;\n  padding-top: 4%;\n  align-content: center;\n}\n\n.box7 {\n  padding-top: 0%;\n  padding-left: 0%;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.backIcon {\n  font-size: xx-large;\n  color: #466ffe;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.ioncontent {\n  height: 110%;\n  margin-top: -3%;\n}\n\n.ioncontent1 {\n  height: 135%;\n}\n\n.text {\n  margin-left: 2%;\n  display: inline-block;\n  vertical-align: middle;\n  color: blue;\n  font-size: 20px;\n  font-family: \"Montserrat\" !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjaGVxdWVkZXBvc2l0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQztFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxRkFBQTtFQUNBLCtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUVBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQUpMOztBQVFLO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFGQUFBO0VBQ0YsK0JBQUE7RUFDRSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUVBLHdCQUFBO0VBQ0EsMEJBQUE7RUFDQSx5QkFBQTtBQU5QOztBQVNLO0VBQ0UsYUFBQTtBQU5QOztBQVFFO0VBR0ksZUFBQTtFQUNBLGdCQUFBO0FBUE47O0FBU0U7RUFDQyxlQUFBO0VBQ0EsZ0JBQUE7QUFOSDs7QUFTRTtFQUVDLGdCQUFBO0FBUEg7O0FBU0U7RUFDSSxXQUFBO0FBTk47O0FBVUU7RUFDRywwQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQVBMOztBQVNHO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQU5QOztBQVNHO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FBTkw7O0FBUUc7RUFDRixlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTEQ7O0FBT0c7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSkw7O0FBTUc7RUFDRixxQkFBQTtBQUhEOztBQU9JO0VBQ0QseUJBQUE7QUFKSDs7QUFPQztFQUNFLDZDQUFBO0VBQ0EsZUFBQTtBQUpIOztBQU1DO0VBQ0Usb0NBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQUhIOztBQU1DO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FBSEg7O0FBTUU7RUFDQyx1QkFBQTtFQUNBLGVBQUE7RUFDQSxxQ0FBQTtFQUVBLG9DQUFBO0FBSkg7O0FBTUc7RUFDRSxjQUFBO0VBQ0Msb0NBQUE7RUFDQyxlQUFBO0VBQ0EsWUFBQTtBQUhQOztBQUtHO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQUZQOztBQUtHO0VBQ0UsY0FBQTtFQUNELGtDQUFBO0FBRko7O0FBSUc7RUFDRSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtBQURMOztBQUlHO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQURMOztBQUdFO0VBQ0ssbUJBQUE7RUFFQSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQURQOztBQUlHO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFETDs7QUFHRztFQUNFLFlBQUE7QUFBTDs7QUFFRztFQUNJLGVBQUE7RUFDRixxQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtBQUNMIiwiZmlsZSI6ImNoZXF1ZWRlcG9zaXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLy8gKiB7XHJcbi8vICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4vLyAgIC8qIEFkZCAhaW1wb3J0YW50IHRvIG92ZXJ3cml0ZSBhbGwgZWxlbWVudHMgKi9cclxuLy8gIH1cclxuIC5ib3gge1xyXG4gICAgIGJvcmRlci13aWR0aDogdGhpbjtcclxuICAgICBib3JkZXItcmFkaXVzOiAxM3B4O1xyXG4gICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudChyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkscmdiYSgyNDgsIDI1MCwgMjU0LCAwLjUpKTtcclxuICAgICBib3gtc2hhZG93OiAwIDNwdCA2cHQgIzAwMDAwMDI5O1xyXG4gICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBcclxuICAgICBib3JkZXItdG9wLXN0eWxlOiBoaWRkZW47XHJcbiAgICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBoaWRkZW47XHJcbiAgICAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICAgfVxyXG4gXHJcbiAgXHJcbiAgICAgLmNoZXF1ZUNhcmR7XHJcbiAgICAgICBib3JkZXItd2lkdGg6IHRoaW47XHJcbiAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSxyZ2JhKDI0OCwgMjUwLCAyNTQsIDAuNSkpO1xyXG4gICAgIGJveC1zaGFkb3c6IDAgM3B0IDZwdCAjMDAwMDAwMjk7XHJcbiAgICAgICB3aWR0aDogOTUlO1xyXG4gICAgICAgbWFyZ2luLWxlZnQ6IDQlO1xyXG4gICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2Y5ZmFmYjtcclxuICAgICAgIGJvcmRlci10b3Atc3R5bGU6IGhpZGRlbjtcclxuICAgICAgIGJvcmRlci1yaWdodC1zdHlsZTogaGlkZGVuO1xyXG4gICAgICAgYm9yZGVyLWxlZnQtc3R5bGU6IGhpZGRlbjtcclxuICAgICB9XHJcbiAgIFxyXG4gICAgIGZvcm06Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgIH1cclxuICAuaW5wdXRDYXJkMXtcclxuICAgICAvLyAgcGFkZGluZy10b3A6IDEwJTtcclxuICAgICAvLyAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgICAgcGFkZGluZy10b3A6IDclO1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gIH1cclxuICAuaW5wdXRDYXJkMntcclxuICAgcGFkZGluZy10b3A6IDMlO1xyXG4gICBwYWRkaW5nLWxlZnQ6IDMlO1xyXG4gfVxyXG4gXHJcbiAgLnRleHRDYXJke1xyXG4gICAvLyBwYWRkaW5nLXRvcDogLTYlO1xyXG4gICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gfVxyXG4gIC5sYWJlbENhcmR7XHJcbiAgICAgIGNvbG9yOiBncmF5O1xyXG4gICAgICAvL2ZvbnQtc2l6ZTogMjBweDtcclxuICB9XHJcbiBcclxuICAudW5kZXJsaW5lIHtcclxuICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgcGFkZGluZy1sZWZ0OiA0JTtcclxuICAgfVxyXG4gICAuaW9uLXBhZGRpbmctdG9we1xyXG4gICAgICAgcGFkZGluZy10b3A6IDEwJTtcclxuICAgICAgIHBhZGRpbmctbGVmdDogMyU7XHJcbiAgIH1cclxuIFxyXG4gICAuaW9uLXBhZGRpbmctdG9wMntcclxuICAgICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgICAgcGFkZGluZy1sZWZ0OiA1JTtcclxuICAgfVxyXG4gICAuY2FuY2VsY2FyZHtcclxuIHBhZGRpbmctdG9wOiA4JTtcclxuIHBhZGRpbmctbGVmdDogNDQlO1xyXG4gZm9udC1zaXplOiAxNHB4O1xyXG4gICB9XHJcbiAgIC5iYWNrY2FyZHtcclxuICAgICBwYWRkaW5nLXRvcDogOCU7XHJcbiAgICAgcGFkZGluZy1sZWZ0OiA0NyU7XHJcbiAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgfVxyXG4gICAuaWNvbmRhdGV7XHJcbiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiBcclxuICAgfVxyXG4gIFxyXG4gICAgaW9uLXNlYXJjaGJhciB7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XHJcbiAgfVxyXG4gXHJcbiBpb24tc2VsZWN0e1xyXG4gICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQtU2VtaUJvbGQnICFpbXBvcnRhbnQ7XHJcbiAgIGZvbnQtc2l6ZTogMTRwdDtcclxuIH1cclxuIGlvbi10ZXh0e1xyXG4gICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnICFpbXBvcnRhbnQ7XHJcbiAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgb3BhY2l0eTogNzUlO1xyXG4gfVxyXG4gXHJcbiBpb24tYnV0dG9ue1xyXG4gICB3aWR0aDogOTUlO1xyXG4gICBwYWRkaW5nLWxlZnQ6IDUlO1xyXG4gICBoZWlnaHQ6IDUwcHg7XHJcbiAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgXHJcbiB9XHJcbiAgaW9uLWlucHV0IHtcclxuICAgY29sb3I6YmxhY2sgIWltcG9ydGFudDtcclxuICAgZm9udC1zaXplOiAxNHB0O1xyXG4gICAtLXBsYWNlaG9sZGVyLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gIC8vICBib3JkZXI6IDFweCBzb2xpZCAjZjFmMWYxICFpbXBvcnRhbnQ7XHJcbiAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcgIWltcG9ydGFudDtcclxuICAgfVxyXG4gICBpb24tbGFiZWx7XHJcbiAgICAgY29sb3I6IzEwMjI0NTtcclxuICAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgb3BhY2l0eTogNzUlO1xyXG4gICB9XHJcbiAgIGlvbi1iYWNrLWJ1dHRvbntcclxuICAgICAgIGNvbG9yOiByZ2IoNzMsIDczLCAyMjYpO1xyXG4gICAgICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgICAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xyXG4gICB9XHJcbiAgXHJcbiAgIGlvbi10b29sYmFye1xyXG4gICAgIG1hcmdpbi10b3A6NSU7XHJcbiAgICBib3gtc2hhZG93OiAwIDVwdCA1cHQgLTJwdCAjRDNEM0QzO1xyXG4gfVxyXG4gICBuZ3gtZmxhZy1waWNrZXJ7XHJcbiAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcclxuICAgICBwYWRkaW5nLXRvcDogMTRweDtcclxuICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgcGFkZGluZy10b3A6IDQlO1xyXG4gICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuIFxyXG4gICB9XHJcbiAgIC5ib3g3e1xyXG4gICAgIHBhZGRpbmctdG9wOiAwJTtcclxuICAgICBwYWRkaW5nLWxlZnQ6IDAlO1xyXG4gICAgIG1hcmdpbi1sZWZ0OiAxMHB4OyBcclxuICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7IFxyXG4gICB9XHJcbiAgLmJhY2tJY29ue1xyXG4gICAgICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgICAgIC8vIGNvbG9yOiBibHVlO1xyXG4gICAgICAgY29sb3I6cmdiKDcwLDExMSwyNTQpO1xyXG4gICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIFxyXG4gICB9XHJcbiAgIC5pb25jb250ZW50e1xyXG4gICAgIGhlaWdodDogMTEwJTtcclxuICAgICBtYXJnaW4tdG9wOiAtMyU7XHJcbiAgIH1cclxuICAgLmlvbmNvbnRlbnQxe1xyXG4gICAgIGhlaWdodDogMTM1JTtcclxuICAgfVxyXG4gICAudGV4dHtcclxuICAgICAgIG1hcmdpbi1sZWZ0OiAyJTtcclxuICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICBjb2xvcjogYmx1ZTtcclxuICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0JyAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgXHJcbiBcclxuICAgLy8gQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzIwcHgpIHtcclxuICAgLy8gICAuaW9uY29udGVudHtcclxuICAgLy8gICAgIGhlaWdodDogMTMwJTtcclxuICAgLy8gICAgIG1hcmdpbi10b3A6IC0zJTtcclxuICAgLy8gICB9XHJcbiAgIC8vICAgLmlvbmNvbnRlbnQxe1xyXG4gICAvLyAgICAgaGVpZ2h0OiAxNjUlO1xyXG4gICAvLyAgIH1cclxuICAgLy8gfSJdfQ== */");

/***/ }),

/***/ "GsTP":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/chequedeposit/chequedeposit.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-operation [title] = \"cashWithdrawal\"></app-operation> -->\r\n<ion-header *ngIf=flag>\r\n  <ion-toolbar>\r\n    <ion-back-button  class=\"backIcon\" name=\"chevron-back-outline\" (click)=\"goToHomepage()\"></ion-back-button >\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=flag>\r\n  <div>\r\n    <form [formGroup]=\"slideOneForm\">\r\n      \r\n      <div class=\"inputCard1\">\r\n        <ion-label>Account Number*</ion-label>\r\n        <!-- <ion-input class=\"box\"></ion-input> -->\r\n        <ion-select [compareWith]=\"compareWith\" class=\"box\" formControlName=\"accountNumber\" (ionChange)=\"accountEvent($event)\" ngDefaultControl>\r\n          <ion-select-option *ngFor=\"let user of users\" [value]=\"user.accountId\">{{user.accountId}}</ion-select-option>\r\n        </ion-select>\r\n        </div>\r\n\r\n        <div class=\"inputCard1\">\r\n          <ion-label position=\"stacked\" class=\"labelCard\"  style=\"font-size: 14px;\">Account Balance : {{curr }} {{currentBalance}}</ion-label>   \r\n          </div>\r\n\r\n          <div class=\"inputCard1\">\r\n            <ion-label position=\"stacked\" class=\"labelCard\"  style=\"font-size: 14px;\">Account Branch : {{slideOneForm.controls.accountBranch.value}}</ion-label>\r\n        </div>\r\n\r\n      <div class=\"inputCard1\">\r\n        <ion-label>Transaction Currency*</ion-label>\r\n        </div>\r\n        <div class=\"box7\">\r\n          \r\n          <ion-card class=\"box\">\r\n            <ion-row>\r\n              <ion-col style=\"width: 10%;\">\r\n                  <ngx-flag-picker\r\n                  [selectedCountryCode]=\"selectedCountryCode\"\r\n                  [showFlags]=\"isShow\"\r\n                  [showLabels]=\"!isShow\"\r\n                  [showArrow]=\"!isShow\">\r\n                </ngx-flag-picker>\r\n               </ion-col>\r\n              <ion-col style=\"width: 20%;\">\r\n                  <ion-select [compareWith]=\"compareWith\" formControlName=\"transactionCurrency\" #code (ionChange)=\"selectCurrencyCode(code.value)\" style=\"font-size: large;margin-left: -40%;\">\r\n                    <ion-select-option *ngFor=\"let currency of currencies\" [value]=\"currency.countryCode\" >\r\n                      {{currency.currencyCode + ' : ' + currency.countryName.toUpperCase()}}\r\n                    </ion-select-option>\r\n                    </ion-select>\r\n              </ion-col>\r\n             </ion-row>\r\n           </ion-card>\r\n          </div>\r\n\r\n      <div class=\"inputCard1\">\r\n          <ion-label position=\"stacked\">Transaction Amount*</ion-label>\r\n          <ion-input class=\"box\" #myRef [(ngModel)]= \"transAmount\"  formControlName=\"transactionAmount\" \r\n          type=\"text\" min=\"1\" (keyup)=\"numberOnlyValidation($event)\"></ion-input>\r\n      </div>\r\n     \r\n      <div class=\"inputCard1\">\r\n        <ion-label>Cheque Number*</ion-label>\r\n       <!-- <ion-input class=\"box\" type=\"number\" maxlength=\"12\"></ion-input>-->\r\n        <ion-input class=\"box\" type=\"tel\"  (keypress)=keyPress($event) maxlength=\"12\"></ion-input>\r\n      </div>\r\n      <!--<div class=\"inputCard1\">\r\n          <ion-label position=\"stacked\" >Account Branch*</ion-label>\r\n          <ion-input class=\"box\" formControlName=\"accountBranch\"></ion-input>\r\n      </div>-->\r\n      \r\n  <div class=\"ion-padding-top\">\r\n  <div>\r\n    <ion-button  expand=\"block\" shape=\"round\"(click)=\"goToNextPage()\" \r\n    [disabled]=\"validateDisablebutton('disable1') ||!transAmount   || submitted\" style=\"width: 95%;\">Next</ion-button>\r\n  </div>\r\n  <div>\r\n    <ion-button expand=\"block\" shape=\"round\" fill=\"clear\" style=\"color: black;\"\r\n    (click)=\"goToHomepage()\">Cancel</ion-button>\r\n</div>\r\n\r\n\r\n</div>\r\n     \r\n    </form>\r\n  </div>\r\n</ion-content>\r\n\r\n<ion-header *ngIf=!flag>\r\n  <ion-toolbar>\r\n    <ion-icon class=\"backIcon\" name=\"chevron-back-outline\" (click)=\"goToPreviousPage()\"></ion-icon>\r\n    <span class=\"text\">{{title}}</span>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content *ngIf=!flag>\r\n  <div>\r\n    <form [formGroup]=\"slideOneForm\">\r\n        <!-- <div class=\"textCard\">\r\n          <ion-text>\r\n            <h5 style=\"color: gray;padding-left: 4%;\">Do you wish to perform this transaction in your home branch</h5>\r\n          </ion-text>\r\n        </div>\r\n\r\n        <div class=\"inputCard2\">\r\n          <ion-radio-group>\r\n            <ion-row>\r\n             <ion-col>\r\n               <ion-item lines=\"none\">\r\n               <ion-radio mode=\"md\" value=\"buy\"></ion-radio>\r\n               <ion-label position=\"start\" style=\"padding-left: 10px;\">yes</ion-label>\r\n               </ion-item>\r\n              </ion-col>\r\n  \r\n             <ion-col>\r\n               <ion-item lines=\"none\">\r\n               <ion-radio mode=\"md\" value=\"sell\"></ion-radio>\r\n               <ion-label style=\"padding-left: 10px;\">No</ion-label>\r\n               </ion-item>\r\n             </ion-col>\r\n            </ion-row>\r\n          </ion-radio-group>\r\n       </div> -->\r\n\r\n       <div style=\"margin-left: 19px;margin-top: 19px;margin-right: 19px\">\r\n        <ion-label >Do you wish to perform this transaction in your branch?</ion-label>\r\n        <!-- <ion-label></ion-label> -->\r\n        <ion-radio-group name=\"branchFlags\" formControlName=\"branchFlag\">\r\n          <ion-row>\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label position=\"start\">Yes</ion-label>\r\n                <ion-radio mode=\"md\" item-left name=\"flagYes\" [value]=\"true\"></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n\r\n            <ion-col>\r\n              <ion-item lines=\"none\">\r\n                <ion-label>No</ion-label>\r\n                <ion-radio mode=\"md\" item-left name=\"flagNo\" [value]=\"false\"></ion-radio>\r\n              </ion-item>\r\n            </ion-col>\r\n          </ion-row>\r\n          </ion-radio-group>\r\n</div>\r\n\r\n       <div class=\"inputCard2\">\r\n          <ion-router-link (click)=\"presentModal()\" [hidden]=\"!nearestBrn\" class=\"underline\">Click here to find nearest branch</ion-router-link>\r\n       </div><br>\r\n  \r\n       <div class=\"inputCard2\" >\r\n        <ion-label style=\"padding-left: 5%;\">Transaction Branch*</ion-label>\r\n        <ion-card class=\"box\" >\r\n          <ion-item lines=\"none\">\r\n            <ion-input appearence=\"none\" formControlName=\"transactionBranch\" \r\n            [readonly]=\"slideOneForm.get('branchFlag').value ? true : false\">\r\n           </ion-input>\r\n           <ion-icon *ngIf=\"slideOneForm.get('branchFlag').value == true\" name=\"home-outline\" color=\"primary\" slot=\"end\"></ion-icon>\r\n           <ion-icon *ngIf=\"slideOneForm.get('branchFlag').value == false\" name=\"navigate-circle-outline\" color=\"primary\" slot=\"end\"></ion-icon>\r\n          </ion-item>\r\n        </ion-card>\r\n          <ion-note style=\"color: red; margin-left: 22px;top: 13px;\" *ngIf=\"f.transactionBranch.errors?.required && f.transactionBranch.touched\"> \r\n            <small>Transaction Branch Required</small>\r\n          </ion-note>\r\n       </div>\r\n\r\n      <div class=\"inputCard2\">\r\n\r\n          <ion-label style=\"padding-left: 5%;\">Transaction date*</ion-label>\r\n        <ion-card class=\"box\" >\r\n          <ion-item lines=\"none\">\r\n              <ion-datetime displayFormat=\"DDD. MMM DD, YY\" [min]=\"minDate\"  [max]=\"maxDate\" placeholder=\"Select date\" formControlName=\"transactionDate\" >\r\n              </ion-datetime>\r\n         <ion-icon name=\"calendar\" slot=\"end\"></ion-icon>\r\n\r\n         </ion-item> \r\n     </ion-card>\r\n     </div>\r\n    \r\n\r\n     <div class=\"inputCard2\">\r\n       <ion-label style=\"padding-left: 5%;\">Time Slot*</ion-label>\r\n     <ion-card class=\"box\">\r\n       <ion-item  lines=\"none\">\r\n          <ion-input  formControlName=\"transactionTime\"></ion-input>\r\n        <!-- <ion-datetime displayFormat=\"hh:mm A\"  placeholder=\"Select time slot\" formControlName=\"transactionTime\"></ion-datetime> -->\r\n        <ion-icon name=\"alarm-outline\" slot=\"end\" (click)=\"openPopup()\"></ion-icon>\r\n      </ion-item>\r\n     </ion-card>\r\n     </div> \r\n\r\n     <div class=\"inputCard2\" *ngIf=\"title == 'Cheque Withdrawal' || title =='Cheque Deposit'\">\r\n      <ion-label position=\"stacked\">Remark</ion-label>\r\n      <ion-input class=\"chequeCard\" formControlName=\"remarks\" ></ion-input>\r\n     </div>\r\n\r\n     \r\n\r\n\r\n     <div class=\"ion-padding-top\">\r\n    <div>\r\n      <ion-button  expand=\"block\" shape=\"round\" (click)=\"save(slideOneForm.value)\">Next</ion-button>\r\n    </div>\r\n\r\n \r\n    <div>\r\n      <ion-button expand=\"block\" shape=\"round\" fill=\"clear\" style=\"width: 95%;color:black;\"\r\n(click)=\"goToPreviousPage()\">Back</ion-button>\r\n  </div>\r\n</div>\r\n  </form>\r\n</div>\r\n\r\n</ion-content>\r\n");

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