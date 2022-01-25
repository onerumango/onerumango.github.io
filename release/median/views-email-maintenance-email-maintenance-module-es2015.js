(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-email-maintenance-email-maintenance-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/email-maintenance/email-maintenance.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/email-maintenance/email-maintenance.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n    <span>Email Maintenance</span>\r\n  </mat-toolbar>\r\n</div>\r\n<br>\r\n<div>\r\n  <mat-card style=\"width: 40% ;\r\n    margin-top: 2%; \r\n    display: block;\r\n    margin-left:auto;\r\n    margin-right:auto;  \r\n    \">\r\n    <mat-card-title></mat-card-title>\r\n\r\n\r\n    <mat-card-content style=\"align-content: center;\">\r\n      <mat-card-title style=\"text-align: center;\r\n            font-size: 15px; font-weight: bold;\">Email IDs for Email-Notification</mat-card-title>\r\n      <br><br>\r\n      <form>\r\n        <div style=\"text-align: center;\">\r\n\r\n          <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n            <mat-label>Select an option</mat-label>\r\n            <mat-select [(value)]=\"selected\" >\r\n              <!-- <mat-option>None</mat-option> -->\r\n              <mat-option value=\"{{selected}}\" readonly>{{selected}}</mat-option>\r\n              \r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n      </form>\r\n      <br>\r\n\r\n      <form #heroForm=\"ngForm\" >\r\n        <table>\r\n          <tbody>\r\n\r\n            <tr>\r\n              <section *ngFor=\"let address of email; let i = index;\">\r\n\r\n                <td>\r\n                  <label>Email Id</label>\r\n                  <input type=\"email\" size=\"62\" class=\"form-control\" [(ngModel)]=\"address.emailId\" name=\"address_{{i}} \"\r\n                    #emailId=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" required [email]=\"true\"   [readonly]=\"!editFlag\" />\r\n                  <div *ngIf=\"emailId.touched\">\r\n                    <p *ngIf=\"emailId.errors?.required\" style=\"color: red;\"> Email is a required field!</p>\r\n                    <p *ngIf=\"emailId.errors?.pattern\" style=\"color: red;\">This is not a valid Email!!</p>\r\n\r\n                  </div>\r\n                </td>\r\n\r\n                <td>\r\n                  <button type=\"button\" class=\"btn b\" (click)=\"removeAddress(i,address.emailId)\">\r\n                    <mat-icon>delete</mat-icon>\r\n                  </button>\r\n\r\n                </td>\r\n\r\n              </section>\r\n            </tr>\r\n            <button type=\"button\" class=\"btn\" (click)=\"addAddress()\">\r\n              <mat-icon>add_box</mat-icon>\r\n            </button>\r\n            <!-- <div class=\"text-right\">\r\n                    <input type=\"submit\" class=\"btn btn-success\" value=\"Submit\"   [disabled]=\"!heroForm.form.valid\" />\r\n                </div> -->\r\n            <br> <br>\r\n            \r\n            <div style=\"margin-left: 15%;\">\r\n            \r\n          </div>\r\n        \r\n\r\n          </tbody>\r\n\r\n        </table>\r\n\r\n      </form>\r\n\r\n      <!-- <div fxLayout=\"row\" style=\"margin-left: -43%;\"  fxLayoutGap=\"10px\">\r\n            <button mat-raised-button  color=\"primary\" (click)=\"onFetch(accountForm.value)\">Fetch Data</button>\r\n            &nbsp;&nbsp;\r\n            <button  mat-raised-button  color=\"warn\" routerLink=\"/dashboard\">Exit</button>\r\n            \r\n          </div> -->\r\n      <br><br>\r\n\r\n\r\n    </mat-card-content>\r\n  </mat-card>\r\n  <br>\r\n  <!-- <div style=\"margin-left: 35%;\">\r\n    <button mat-raised-button style=\" color:white; background-color: rgb(70, 150, 182)\"\r\n      (click)=\"onClickOfAuthOfEmailManagement()\">Auth</button>\r\n    &nbsp;\r\n    <button mat-raised-button style=\" color:white; background-color:  rgb(70, 150, 182)\"(click)=\"onclickOfReopenOfEamilManagement()\" *ngIf=\"eamilAuditLog.recordStatus=='C'\">Reopen</button>\r\n    &nbsp;\r\n    <button mat-raised-button style=\" color:white; background-color:  rgb(70, 150, 182)\" (click)=\"onclickOfEditOfEmailManagement()\" *ngIf=\"!editFlag\">Edit</button>\r\n    &nbsp;\r\n    <button mat-raised-button style=\" color:white; background-color:  rgb(70, 150, 182)\" (click)=\"onclickOfCloseOfEmailManagement()\" *ngIf=\"eamilAuditLog.recordStatus=='O'\">Close</button>\r\n    &nbsp;\r\n    <button mat-raised-button style=\" color:white; background-color:  rgb(70, 150, 182)\" (click)=\"onClickOfDeleteOfEmailManagement()\" *ngIf=\"eamilAuditLog.verifiedOnce=='U'\">Delete</button>\r\n    <button mat-raised-button color=\"primary\" type=\"submit\" (click)=\"logValue()\" value=\"Submit\" *ngIf=\"editFlag\">Submit</button>\r\n    &nbsp;\r\n    <button mat-raised-button color=\"warn\" routerLink=\"/email-summary\">Exit</button>\r\n  </div> -->\r\n  <!-- <div style=\"margin-left: 35%;\">\r\n    <button mat-raised-button style=\" color:white; background-color:  rgb(70, 150, 182)\" [routerLink]=\"'/email-summary/email-new'\">New</button>\r\n    &nbsp;\r\n    <button mat-raised-button style=\" color:white; background-color:  rgb(70, 150, 182)\" (click)=\"onclickOfEditOfEmailManagement()\" *ngIf=\"!editFlag && eamilAuditLog.recordStatus=='O' \">Edit</button>\r\n    &nbsp;\r\n    <button mat-raised-button style=\" color:white; background-color: rgb(70, 150, 182)\" *ngIf=\"eamilAuditLog.verifiedStatus=='U'\"\r\n      (click)=\"onClickOfAuthOfEmailManagement()\">Auth</button>\r\n    &nbsp;\r\n    <button mat-raised-button style=\" color:white; background-color:  rgb(70, 150, 182)\"(click)=\"onclickOfReopenOfEamilManagement()\" *ngIf=\"eamilAuditLog.recordStatus=='C' && eamilAuditLog.verifiedStatus=='A'\">Reopen</button>\r\n    &nbsp;\r\n   \r\n    <button mat-raised-button style=\" color:white; background-color:  rgb(70, 150, 182)\" (click)=\"onclickOfCloseOfEmailManagement()\" *ngIf=\"eamilAuditLog.recordStatus=='O' && eamilAuditLog.verifiedOnce=='Y'\">Close</button>\r\n    &nbsp;\r\n    <button mat-raised-button style=\" color:white; background-color:  rgb(70, 150, 182)\" (click)=\"onClickOfDeleteOfEmailManagement()\" *ngIf=\"eamilAuditLog.verifiedOnce=='N'\">Delete</button>\r\n    <button mat-raised-button color=\"primary\" type=\"submit\" (click)=\"logValue()\" value=\"Submit\" *ngIf=\"editFlag\">Submit</button>\r\n    &nbsp;\r\n    <button mat-raised-button color=\"warn\" routerLink=\"/email-summary\">Exit</button>\r\n  </div> -->\r\n  <div style=\"margin-left: 32%;\">\r\n    <button mat-raised-button color=\"primary\" (click)=\"onNew()\" *ngIf=\"!editFlag &&!onlySubmit\">New</button>&nbsp;\r\n    <button mat-raised-button color=\"primary\" (click)=\"onclickOfEditOfEmailManagement()\" *ngIf=\" eamilAuditLog.recordStatus=='O'  && !editFlag  &&!onlySubmit\" >Edit</button>&nbsp;\r\n\r\n    <button mat-raised-button color=\"primary\" *ngIf=\"eamilAuditLog.verifiedStatus=='U' && !editFlag  &&!onlySubmit\"\r\n      (click)=\"onClickOfAuthOfEmailManagement()\">Auth</button>\r\n    &nbsp;\r\n    <button mat-raised-button color=\"primary\" (click)=\"onclickOfReopenOfEamilManagement()\" *ngIf=\"eamilAuditLog.recordStatus=='C' && eamilAuditLog.verifiedStatus=='A' && !editFlag  &&!onlySubmit\">Reopen</button>\r\n    &nbsp;\r\n   \r\n    <button mat-raised-button color=\"primary\"  (click)=\"onclickOfCloseOfEmailManagement()\" *ngIf=\"eamilAuditLog.recordStatus=='O' && eamilAuditLog.verifiedOnce=='Y'&& !editFlag  &&!onlySubmit\">Close</button>\r\n    &nbsp;\r\n    <button mat-raised-button color=\"primary\"   (click)=\"onClickOfDeleteOfEmailManagement()\" *ngIf=\"eamilAuditLog.verifiedOnce=='N'&& !editFlag  &&!onlySubmit\">Delete</button>\r\n    <button mat-raised-button color=\"primary\" type=\"submit\" (click)=\"logValue()\" value=\"Submit\" *ngIf=\"editFlag\" [disabled]=\"onlySubmit\">Submit</button>\r\n    &nbsp;\r\n    <button mat-raised-button color=\"warn\" routerLink=\"/email-summary\">Exit</button>\r\n  </div>\r\n  <br>\r\n  <div fxLayout=\"row\" >\r\n    <div fxFlex></div>\r\n    <div fxFlex=\"100\">\r\n      <mat-card style=\"width: 70%; margin-left: 20%\">\r\n        <mat-card-title>\r\n  \r\n        </mat-card-title>\r\n        <mat-card-content  >\r\n          <div fxLayout=\"row\">\r\n\r\n            <table id=\"customers\">\r\n              <tr>\r\n                <th>Record Status:</th>\r\n                <td>\r\n                  <mat-chip *ngIf=\"masterDatapermission\">{{eamilAuditLog.recordStatus }}</mat-chip>\r\n                </td>\r\n                <th>Auth Status:</th>\r\n                <td>\r\n\r\n                  <mat-chip *ngIf=\"masterDatapermission\">{{eamilAuditLog.verifiedStatus}}</mat-chip>\r\n                  <!-- <mat-form-field appearance=\"fill\">\r\n                            <mat-label>Status</mat-label>\r\n                            <input matInput type=\"text\" placeholder=\"\" #exSys>\r\n                            <mat-icon matSuffix>person</mat-icon>\r\n                          </mat-form-field> -->\r\n                </td>\r\n                <th>Input By:</th>\r\n                <td>\r\n\r\n                  <mat-chip *ngIf=\"masterDatapermission\">{{eamilAuditLog.inputBy}}</mat-chip>\r\n                </td>\r\n                <th>Input Date:</th>\r\n                <td>\r\n\r\n                  <mat-chip *ngIf=\"masterDatapermission\">{{eamilAuditLog.inputTime |  date: 'MM/dd/yyyy, h:mm a'}}</mat-chip>\r\n                </td>\r\n\r\n              </tr>\r\n              <tr>\r\n                <th>Modification No:</th>\r\n                <td>\r\n                  <mat-chip *ngIf=\"masterDatapermission\">{{eamilAuditLog.modNO}}</mat-chip>\r\n                </td>\r\n                <!-- <th>Creation Date:</th>\r\n                        <td>\r\n                          <mat-chip>{{masterresponse.modifiedTime | date:'d/M/yy'}}</mat-chip>\r\n                        </td> -->\r\n                <th>Authorized Date:</th>\r\n                <td>\r\n                  <mat-chip *ngIf=\"masterDatapermission\">{{eamilAuditLog.authorizedTime |  date: 'MM/dd/yyyy, h:mm a'}}</mat-chip>\r\n                </td>\r\n                <th> Frist Auth Status:</th>\r\n                <td>\r\n\r\n                  <mat-chip *ngIf=\"masterDatapermission\">{{eamilAuditLog.verifiedOnce}}</mat-chip>\r\n                  <!-- <mat-form-field appearance=\"fill\">\r\n                            <mat-label>Status</mat-label>\r\n                            <input matInput type=\"text\" placeholder=\"\" #exSys>\r\n                            <mat-icon matSuffix>person</mat-icon>\r\n                          </mat-form-field> -->\r\n                </td>\r\n                <th>Authorized By:</th>\r\n                <td>\r\n                  <mat-chip *ngIf=\"masterDatapermission\">{{eamilAuditLog.verifiedBy}}</mat-chip>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <div fxFlex></div>\r\n\r\n  </div>\r\n\r\n  <br><br><br><br><br><br><br><br><br><br><br><br><br><br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/email-maintenance/email-new/email-new.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/email-maintenance/email-new/email-new.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n      <span>Email Maintenance</span>\r\n    </mat-toolbar>\r\n  </div>\r\n  <br>\r\n  <div>\r\n    <mat-card style=\"width: 40% ;\r\n      margin-top: 2%; \r\n      display: block;\r\n      margin-left:auto;\r\n      margin-right:auto;  \r\n      \">\r\n      <mat-card-title></mat-card-title>\r\n  \r\n  \r\n      <mat-card-content style=\"align-content: center;\">\r\n        <mat-card-title style=\"text-align: center;\r\n              font-size: 15px; font-weight: bold;\">Email IDs for Email-Notification</mat-card-title>\r\n        <br><br>\r\n        <form>\r\n          <div style=\"text-align: center;\">\r\n  \r\n            <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n              <mat-label>Select an option</mat-label>\r\n              <mat-select [(value)]=\"selected\">\r\n                <mat-option value=\"Account_Block\">Account Type</mat-option>\r\n                <mat-option>None</mat-option>\r\n                <!-- <mat-option value=\"option2\">Option 2</mat-option>\r\n            <mat-option value=\"option3\">Option 3</mat-option> -->\r\n              </mat-select>\r\n            </mat-form-field>\r\n          </div>\r\n        </form>\r\n        <br>\r\n  \r\n        <form #heroForm=\"ngForm\" (ngSubmit)=\"logValue()\">\r\n          <table>\r\n            <tbody>\r\n  \r\n              <tr>\r\n                <section *ngFor=\"let address of email; let i = index;\">\r\n  \r\n                  <td>\r\n                    <label>Email Id</label>\r\n                    <input type=\"email\" size=\"62\" class=\"form-control\" [(ngModel)]=\"address.emailId\" name=\"address_{{i}} \"\r\n                      #emailId=\"ngModel\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" required [email]=\"true\" />\r\n                    <div *ngIf=\"emailId.touched\">\r\n                      <p *ngIf=\"emailId.errors?.required\" style=\"color: red;\"> Email is a required field!</p>\r\n                      <p *ngIf=\"emailId.errors?.pattern\" style=\"color: red;\">This is not a valid Email!!</p>\r\n  \r\n                    </div>\r\n                  </td>\r\n  \r\n                  <td>\r\n                    <button type=\"button\" class=\"btn b\" (click)=\"removeAddress(i)\">\r\n                      <mat-icon>delete</mat-icon>\r\n                    </button>\r\n  \r\n                  </td>\r\n  \r\n                </section>\r\n              </tr>\r\n              <button type=\"button\" class=\"btn\" (click)=\"addAddress()\">\r\n                <mat-icon>add_box</mat-icon>\r\n              </button>\r\n              <!-- <div class=\"text-right\">\r\n                      <input type=\"submit\" class=\"btn btn-success\" value=\"Submit\"   [disabled]=\"!heroForm.form.valid\" />\r\n                  </div> -->\r\n              <br> <br>\r\n              <div style=\"margin-left: 15%;\">\r\n                <!-- <button mat-raised-button color=\"primary\" type=\"submit\" value=\"Submit\">Submit</button> -->\r\n                <button mat-raised-button color=\"primary\" type=\"submit\" value=\"Submit\" [disabled]=\"!heroForm.form.valid ||!selected ||showSubmit\">Submit</button>\r\n                &nbsp;\r\n                <button mat-raised-button color=\"warn\" routerLink=\"/email-summary\">Exit</button>\r\n            </div>\r\n          \r\n  \r\n            </tbody>\r\n  \r\n          </table>\r\n  \r\n        </form>\r\n  \r\n        <!-- <div fxLayout=\"row\" style=\"margin-left: -43%;\"  fxLayoutGap=\"10px\">\r\n              <button mat-raised-button  color=\"primary\" (click)=\"onFetch(accountForm.value)\">Fetch Data</button>\r\n              &nbsp;&nbsp;\r\n              <button  mat-raised-button  color=\"warn\" routerLink=\"/dashboard\">Exit</button>\r\n              \r\n            </div> -->\r\n        <br><br>\r\n  \r\n  \r\n      </mat-card-content>\r\n    </mat-card>\r\n    <br><br><br>\r\n    <div fxLayout=\"row\" >\r\n      <div fxFlex></div>\r\n      <div fxFlex=\"95\">\r\n        <mat-card style=\"width: 70%;  margin-left:20%;\">\r\n          <mat-card-title>\r\n    \r\n          </mat-card-title>\r\n          <mat-card-content  style=\" margin-left:-25%;\">\r\n            <div fxLayout=\"row\">\r\n  \r\n              <table id=\"customers\">\r\n                <tr>\r\n                  <th>Record Status:</th>\r\n                  <td>\r\n                    <mat-chip *ngIf=\"masterDatapermission\">{{masterresponse.recordStatus }}</mat-chip>\r\n                  </td>\r\n                  <th>Auth Status:</th>\r\n                  <td>\r\n  \r\n                    <mat-chip *ngIf=\"masterDatapermission\">{{masterresponse.verifiedStatus}}</mat-chip>\r\n                    <!-- <mat-form-field appearance=\"fill\">\r\n                              <mat-label>Status</mat-label>\r\n                              <input matInput type=\"text\" placeholder=\"\" #exSys>\r\n                              <mat-icon matSuffix>person</mat-icon>\r\n                            </mat-form-field> -->\r\n                  </td>\r\n                  <th>Input By:</th>\r\n                  <td>\r\n  \r\n                    <mat-chip *ngIf=\"masterDatapermission\">{{masterresponse.inputBy}}</mat-chip>\r\n                  </td>\r\n                  <th>Input Date:</th>\r\n                  <td>\r\n  \r\n                    <mat-chip *ngIf=\"masterDatapermission\">{{masterresponse.inputTime |  date: 'MM/dd/yyyy, h:mm a'}}</mat-chip>\r\n                  </td>\r\n  \r\n                </tr>\r\n                <tr>\r\n                  <th>Modification No:</th>\r\n                  <td>\r\n                    <mat-chip *ngIf=\"masterDatapermission\">{{masterresponse.modNO}}</mat-chip>\r\n                  </td>\r\n                  <!-- <th>Creation Date:</th>\r\n                          <td>\r\n                            <mat-chip>{{masterresponse.modifiedTime | date:'d/M/yy'}}</mat-chip>\r\n                          </td> -->\r\n                  <th>Authorized Date:</th>\r\n                  <td>\r\n                    <mat-chip *ngIf=\"masterDatapermission\">{{masterresponse.authorizedTime |  date: 'MM/dd/yyyy, h:mm a'}}</mat-chip>\r\n                  </td>\r\n                  <th> Frist Auth Status:</th>\r\n                  <td>\r\n  \r\n                    <mat-chip *ngIf=\"masterDatapermission\">{{masterresponse.verifiedOnce}}</mat-chip>\r\n                    <!-- <mat-form-field appearance=\"fill\">\r\n                              <mat-label>Status</mat-label>\r\n                              <input matInput type=\"text\" placeholder=\"\" #exSys>\r\n                              <mat-icon matSuffix>person</mat-icon>\r\n                            </mat-form-field> -->\r\n                  </td>\r\n                  <th>Authorized By:</th>\r\n                  <td>\r\n                    <mat-chip *ngIf=\"masterDatapermission\">{{masterresponse.verifiedBy}}</mat-chip>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n      <div fxFlex></div>\r\n  \r\n    </div>\r\n  \r\n    <br><br><br><br><br><br><br><br>\r\n    <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>\r\n    <br><br><br><br><br><br><br><br><br><br><br><br><br><br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/email-maintenance/email-summary/email-summary.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/email-maintenance/email-summary/email-summary.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n        <span>Email Manangement</span> \r\n    </mat-toolbar>\r\n    <br>\r\n    <mat-card>\r\n    <button  mat-raised-button style=\"font-size: 11px; margin-left: 80%\"  color=\"primary\" routerLink=\"/email-summary/email-new\">New</button>&nbsp;\r\n    <button  mat-raised-button style=\"font-size: 11px;\"  color=\"warn\" routerLink='/dashboard'>Exit</button>\r\n       <br><br>\r\n       <div class=\"mat-elevation-z8\">\r\n            <table mat-table [dataSource]=\"dataSource\" matSort>\r\n    \r\n                <ng-container matColumnDef=\"emailType\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Account Type </th>\r\n                    <td mat-cell *matCellDef=\"let row\">\r\n                         <a routerLink =\"email-summary/email-maintenance/{{row.emailType}}\" (click)=\"getEmail(row)\"> {{row.emailType}}</a> </td>\r\n                </ng-container>\r\n            \r\n            \r\n            \r\n                <ng-container matColumnDef=\"inputBy\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header> Maker Id </th>\r\n                    <td mat-cell *matCellDef=\"let row\"> {{row.inputBy}}</td>\r\n                </ng-container>\r\n               \r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n                </tr>\r\n                \r\n            </table>\r\n            <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n        </div>\r\n    </mat-card>\r\n    \r\n  \r\n   <br><br><br><br><br><br><br><br><br><br><br><br><br><br>");

/***/ }),

/***/ "./src/app/views/email-maintenance/EmailAuditLog.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/email-maintenance/EmailAuditLog.ts ***!
  \**********************************************************/
/*! exports provided: EamilAuditLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EamilAuditLog", function() { return EamilAuditLog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class EamilAuditLog {
}


/***/ }),

/***/ "./src/app/views/email-maintenance/EmailDetails.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/email-maintenance/EmailDetails.ts ***!
  \*********************************************************/
/*! exports provided: EmailDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailDetails", function() { return EmailDetails; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class EmailDetails {
}


/***/ }),

/***/ "./src/app/views/email-maintenance/email-maintenance-routing.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/email-maintenance/email-maintenance-routing.module.ts ***!
  \*****************************************************************************/
/*! exports provided: emailRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "emailRoutes", function() { return emailRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _email_maintenance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./email-maintenance.component */ "./src/app/views/email-maintenance/email-maintenance.component.ts");
/* harmony import */ var _email_summary_email_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./email-summary/email-summary.component */ "./src/app/views/email-maintenance/email-summary/email-summary.component.ts");
/* harmony import */ var _email_new_email_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./email-new/email-new.component */ "./src/app/views/email-maintenance/email-new/email-new.component.ts");




const emailRoutes = [
    {
        path: '',
        component: _email_summary_email_summary_component__WEBPACK_IMPORTED_MODULE_2__["EmailSummaryComponent"]
    },
    {
        path: 'email-maintenance',
        component: _email_maintenance_component__WEBPACK_IMPORTED_MODULE_1__["EmailMaintenanceComponent"]
    },
    {
        path: 'email-new',
        component: _email_new_email_new_component__WEBPACK_IMPORTED_MODULE_3__["EmailNewComponent"]
    }
];


/***/ }),

/***/ "./src/app/views/email-maintenance/email-maintenance.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/views/email-maintenance/email-maintenance.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn {\r\n  width: 50px;\r\n  height: 25px;\r\n \r\n  vertical-align: middle;\r\n  font-size: 10px;\r\n  text-align: center;\r\n  \r\n}\r\n\r\n\r\n  tr{\r\n  /* padding: 5px; */\r\n  font-size: 10px;\r\n}\r\n\r\n\r\n  td {\r\n  font-size: 10px;\r\n\r\n}\r\n\r\n\r\n  .form-control {\r\n  \r\n\r\npadding: 6%;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n  font-size: 10px;\r\n \r\n}\r\n\r\n\r\n  .btn {\r\n  width: 40px;\r\n  height: 25px;\r\n  line-height: 20px;\r\n  min-height: 20px;\r\n  \r\n  vertical-align: top;\r\n  font-size: 10px;\r\n  align-content: center;\r\n}\r\n\r\n\r\n  .b{\r\n  width: 80px;\r\n  height: 25px;\r\n  line-height: 20px;\r\n  min-height: 20px;\r\n  margin-top: 25%;\r\n  vertical-align: top;\r\n  font-size: 10px;\r\n  align-content: center;\r\n}\r\n\r\n\r\n  #customers {\r\nborder-collapse: collapse;\r\nwidth: 100%;\r\n}\r\n\r\n\r\n  #customers td, #customers th {\r\nborder: 1px solid #ddd;\r\n/* padding: 8px; */\r\ntext-align: center;\r\nfont-size: x-small;\r\n\r\n}\r\n\r\n\r\n  #customers td mat-chip {\r\nfont-size: x-small;\r\n}\r\n\r\n\r\n  #customers tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\n\r\n  #customers th {\r\npadding-top: 8px;\r\npadding-bottom: 9px;\r\ntext-align: left;\r\nbackground-color:rgb(97, 178, 216);\r\ncolor: white;\r\n}\r\n\r\n\r\n  .full-width {\r\nwidth: 60%;\r\nfont-size: 10px;\r\n}\r\n\r\n\r\n  .mat-raised-button {\r\n  width: 80px;\r\n  height: 27px;\r\n  line-height: 20px;\r\n  min-height: 20px;\r\n  vertical-align: top;\r\n  font-size: 11px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZW1haWwtbWFpbnRlbmFuY2UvZW1haWwtbWFpbnRlbmFuY2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7RUFDWCxZQUFZOztFQUVaLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2Ysa0JBQWtCOztBQUVwQjs7O0VBR0U7RUFDQSxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7O0VBQ0E7RUFDRSxlQUFlOztBQUVqQjs7O0VBQ0E7OztBQUdBLFdBQVc7RUFDVCxxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsZUFBZTs7QUFFakI7OztFQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCOztFQUVoQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHFCQUFxQjtBQUN2Qjs7O0VBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOzs7RUFFQTtBQUNBLHlCQUF5QjtBQUN6QixXQUFXO0FBQ1g7OztFQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCLGtCQUFrQjtBQUNsQixrQkFBa0I7QUFDbEIsa0JBQWtCOztBQUVsQjs7O0VBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7OztFQUNBLDhCQUE4Qix5QkFBeUIsQ0FBQzs7O0VBRXhEO0FBQ0EsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUNuQixnQkFBZ0I7QUFDaEIsa0NBQWtDO0FBQ2xDLFlBQVk7QUFDWjs7O0VBQ0E7QUFDQSxVQUFVO0FBQ1YsZUFBZTtBQUNmOzs7RUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2VtYWlsLW1haW50ZW5hbmNlL2VtYWlsLW1haW50ZW5hbmNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnRuIHtcclxuICB3aWR0aDogNTBweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiBcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgXHJcbn1cclxuXHJcblxyXG4gIHRye1xyXG4gIC8qIHBhZGRpbmc6IDVweDsgKi9cclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxudGQge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuXHJcbn1cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgXHJcblxyXG5wYWRkaW5nOiA2JTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiBcclxufVxyXG4uYnRuIHtcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgbWluLWhlaWdodDogMjBweDtcclxuICBcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmJ7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbiAgbWFyZ2luLXRvcDogMjUlO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuI2N1c3RvbWVycyB7XHJcbmJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbndpZHRoOiAxMDAlO1xyXG59XHJcbiNjdXN0b21lcnMgdGQsICNjdXN0b21lcnMgdGgge1xyXG5ib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4vKiBwYWRkaW5nOiA4cHg7ICovXHJcbnRleHQtYWxpZ246IGNlbnRlcjtcclxuZm9udC1zaXplOiB4LXNtYWxsO1xyXG5cclxufVxyXG4jY3VzdG9tZXJzIHRkIG1hdC1jaGlwIHtcclxuZm9udC1zaXplOiB4LXNtYWxsO1xyXG59XHJcbiNjdXN0b21lcnMgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxyXG5cclxuI2N1c3RvbWVycyB0aCB7XHJcbnBhZGRpbmctdG9wOiA4cHg7XHJcbnBhZGRpbmctYm90dG9tOiA5cHg7XHJcbnRleHQtYWxpZ246IGxlZnQ7XHJcbmJhY2tncm91bmQtY29sb3I6cmdiKDk3LCAxNzgsIDIxNik7XHJcbmNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZnVsbC13aWR0aCB7XHJcbndpZHRoOiA2MCU7XHJcbmZvbnQtc2l6ZTogMTBweDtcclxufVxyXG4ubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogMjdweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBtaW4taGVpZ2h0OiAyMHB4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/views/email-maintenance/email-maintenance.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/views/email-maintenance/email-maintenance.component.ts ***!
  \************************************************************************/
/*! exports provided: EmailMaintenanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailMaintenanceComponent", function() { return EmailMaintenanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_account_blocking_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/account-blocking-service.service */ "./src/app/shared/services/account-blocking-service.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _EmailAuditLog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EmailAuditLog */ "./src/app/views/email-maintenance/EmailAuditLog.ts");
/* harmony import */ var src_app_shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/app-confirm/app-confirm.service */ "./src/app/shared/services/app-confirm/app-confirm.service.ts");
/* harmony import */ var _EmailDetails__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./EmailDetails */ "./src/app/views/email-maintenance/EmailDetails.ts");
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../users/users.service */ "./src/app/views/users/users.service.ts");




// import { Food } from '../sias-v2/ext-system/ext-system.component';






let EmailMaintenanceComponent = class EmailMaintenanceComponent {
    constructor(formBuilder, ref, userApi, router, confirmService, accountBlockingService, route) {
        this.formBuilder = formBuilder;
        this.ref = ref;
        this.userApi = userApi;
        this.router = router;
        this.confirmService = confirmService;
        this.accountBlockingService = accountBlockingService;
        this.route = route;
        this.emailDetails = new _EmailDetails__WEBPACK_IMPORTED_MODULE_8__["EmailDetails"]();
        this.editFlag = false;
        this.submitFalg = false;
        this.button_permission = {};
        this.eamilAuditLog = new _EmailAuditLog__WEBPACK_IMPORTED_MODULE_6__["EamilAuditLog"]();
        this.email = [{
                emailId: '',
                emailType: '',
                emailRequired: '',
                id: '',
            }];
    }
    ngOnInit() {
        this.user_id = sessionStorage.getItem('user_id');
        this.role = sessionStorage.getItem('user_role');
        this.screenpermission();
        this.route.queryParams.subscribe(params => {
            this.eamilAuditLog.modNO = params.modifyNo,
                this.eamilAuditLog.inputBy = params.creator,
                this.eamilAuditLog.recordStatus = params.rstatus,
                this.eamilAuditLog.verifiedOnce = params.vStatus,
                this.eamilAuditLog.inputTime = params.inputDate,
                this.eamilAuditLog.verifiedStatus = params.vDate,
                this.eamilAuditLog.verifiedTime = params.authtym,
                this.eamilAuditLog.verifiedBy = params.authBy;
            this.eamilAuditLog.emailType = params.emailType;
            //console.log(this.eamilAuditLog);
            this.masterDatapermission = true;
        });
        if (this.eamilAuditLog.emailType) {
            this.selected = this.eamilAuditLog.emailType;
            this.accountBlockingService.sendAccType(this.eamilAuditLog.emailType).subscribe(data => {
                this.data = data;
                //console.log(data);
                this.email = this.data;
            });
        }
    }
    screenpermission() {
        this.screenName = 'roles';
        // this.role='ROLE1';
        this.userApi.getRoleScreenPermission(this.user_id, this.screenName, this.role).subscribe(res => {
            this.rolepermission = res;
            //console.log(this.rolepermission);
            if (this.rolepermission) {
                this.button_permission = this.rolepermission[0];
                //console.log( this.button_permission);
            }
        });
    }
    addAddress() {
        this.email.push({
            emailId: '',
        });
    }
    removeAddress(i, email) {
        //console.log(i);
        //console.log(email);
        // const index = this.recieved.indexOf(i);
        // //console.log(index);
        this.email.forEach(element => {
            if (email == element.emailId) {
                this.rowId = element.id;
                //console.log(this.rowId);
            }
        });
        // this.emailDetails  = this.recieved[i];
        // //console.log('one ob', this.emailDetails.id);
        // let rowId = this.emailDetails.id;
        // //console.log(rowId);
        // this.recieved.splice(i, 1);
        this.accountBlockingService.deleteingParticluarRow(this.selected, this.user_id, this.rowId)
            .subscribe(deleteResp => {
            //console.log(deleteResp);
            if (deleteResp == true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    text: 'You Deleted The Record',
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    text: 'Once Verifed Record Cannot Be Deleted',
                });
            }
            this.ref.markForCheck();
        });
    }
    logValue() {
        //console.log('submit call');
        this.editFlag = false;
        //console.log(this.selected);
        // //console.log(this.accountType);
        //console.log(this.email);
        this.email.forEach(element => {
            element.emailType = this.selected;
            element.emailRequired = 'Y';
        });
        this.accountBlockingService.onclickOfEditOfEmailManagement(this.selected, this.user_id, this.email).subscribe(editResp => {
            //console.log(editResp);
            if (editResp == false) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    text: 'Failed To Modify The Record',
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    text: 'Record Updated SuccessFully',
                });
            }
            this.editFlag = true;
            this.onlySubmit = true;
            this.commonAuditLog();
        });
        this.ref.markForCheck();
    }
    onClickOfAuthOfEmailManagement() {
        //console.log('this is auth');
        this.accountBlockingService.onClickOfAuthOfEmailManagement(this.selected, this.user_id).subscribe(authresp => {
            //console.log(authresp);
            if (authresp == false) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    text: 'Maker Cannot Authorize The Record',
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    text: 'You Authorized The Record',
                });
            }
            this.commonAuditLog();
        });
        this.ref.markForCheck();
    }
    onclickOfReopenOfEamilManagement() {
        //console.log('this is Reopen');
        this.accountBlockingService.onclickOfReopenOfEamilManagement(this.selected, this.user_id).subscribe(reopenResp => {
            //console.log(reopenResp);
            if (reopenResp == false) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    text: 'UnAuthorized Records Cannot Be Reopen',
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    text: 'You Opened the record',
                });
            }
        });
        this.commonAuditLog();
    }
    onclickOfCloseOfEmailManagement() {
        //console.log('this is close');
        this.accountBlockingService.onclickOfCloseOfEmailManagement(this.selected, this.user_id).subscribe(closeResp => {
            //console.log(closeResp);
            if (closeResp == false) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    text: 'UnAuthorized Records Cannot Be Closed',
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    text: 'You Closed The Record',
                });
            }
            this.commonAuditLog();
        });
    }
    onclickOfEditOfEmailManagement() {
        //console.log('this is edit');
        this.editFlag = true;
    }
    onClickOfDeleteOfEmailManagement() {
        //console.log('this is delete call');
        this.accountBlockingService.onclickOfDeleteOfEmailManagement(this.selected, this.user_id).subscribe(deletedRecord => {
            console.log(deletedRecord);
            if (deletedRecord == false) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    text: 'Authorized Record Cannot be Deleted',
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Record Deleted SuccessFully');
            }
        });
        this.ref.markForCheck();
    }
    commonAuditLog() {
        this.accountBlockingService.auditLogResponse(this.selected).subscribe(closedResp => {
            //console.log(closedResp);
            this.masterDatapermission = true;
            this.eamilAuditLog = closedResp;
        });
        this.ref.markForCheck();
    }
    onNew() {
        this.editFlag = true;
        this.onlySubmit = true;
        this.router.navigateByUrl('/email-summary/email-new');
    }
};
EmailMaintenanceComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _users_users_service__WEBPACK_IMPORTED_MODULE_9__["UsersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_7__["AppConfirmService"] },
    { type: src_app_shared_services_account_blocking_service_service__WEBPACK_IMPORTED_MODULE_3__["AccountBlockingServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
EmailMaintenanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-email-maintenance',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./email-maintenance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/email-maintenance/email-maintenance.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./email-maintenance.component.css */ "./src/app/views/email-maintenance/email-maintenance.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _users_users_service__WEBPACK_IMPORTED_MODULE_9__["UsersService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
        src_app_shared_services_app_confirm_app_confirm_service__WEBPACK_IMPORTED_MODULE_7__["AppConfirmService"], src_app_shared_services_account_blocking_service_service__WEBPACK_IMPORTED_MODULE_3__["AccountBlockingServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
], EmailMaintenanceComponent);



/***/ }),

/***/ "./src/app/views/email-maintenance/email-maintenance.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/views/email-maintenance/email-maintenance.module.ts ***!
  \*********************************************************************/
/*! exports provided: EmailMaintenanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailMaintenanceModule", function() { return EmailMaintenanceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _email_maintenance_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./email-maintenance-routing.module */ "./src/app/views/email-maintenance/email-maintenance-routing.module.ts");
/* harmony import */ var _email_maintenance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./email-maintenance.component */ "./src/app/views/email-maintenance/email-maintenance.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/angular-material/angular-material.module */ "./src/app/shared/angular-material/angular-material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _email_summary_email_summary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./email-summary/email-summary.component */ "./src/app/views/email-maintenance/email-summary/email-summary.component.ts");
/* harmony import */ var _email_new_email_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./email-new/email-new.component */ "./src/app/views/email-maintenance/email-new/email-new.component.ts");











//import { FlexLayoutModule } from '@angular/flex-layout';
let EmailMaintenanceModule = class EmailMaintenanceModule {
};
EmailMaintenanceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_email_maintenance_component__WEBPACK_IMPORTED_MODULE_5__["EmailMaintenanceComponent"], _email_summary_email_summary_component__WEBPACK_IMPORTED_MODULE_9__["EmailSummaryComponent"], _email_new_email_new_component__WEBPACK_IMPORTED_MODULE_10__["EmailNewComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_8__["FlexLayoutModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_email_maintenance_routing_module__WEBPACK_IMPORTED_MODULE_4__["emailRoutes"])
        ],
    })
], EmailMaintenanceModule);



/***/ }),

/***/ "./src/app/views/email-maintenance/email-new/email-new.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/views/email-maintenance/email-new/email-new.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".btn {\r\n  width: 50px;\r\n  height: 25px;\r\n \r\n  vertical-align: middle;\r\n  font-size: 10px;\r\n  text-align: center;\r\n  \r\n}\r\n\r\ntable{\r\n  margin-left: 20%;\r\n}\r\n\r\ntr{\r\n  padding: 5px;\r\n  font-size: 10px;\r\n}\r\n\r\ntd {\r\n  font-size: 10px;\r\n\r\n}\r\n\r\n.form-control {\r\n  \r\n\r\npadding: 6%;\r\n  display: inline-block;\r\n  border: 1px solid #ccc;\r\n  border-radius: 4px;\r\n  box-sizing: border-box;\r\n  font-size: 10px;\r\n \r\n}\r\n\r\n.btn {\r\n  width: 40px;\r\n  height: 25px;\r\n  line-height: 20px;\r\n  min-height: 20px;\r\n  \r\n  vertical-align: top;\r\n  font-size: 10px;\r\n  align-content: center;\r\n}\r\n\r\n.b{\r\n  width: 80px;\r\n  height: 25px;\r\n  line-height: 20px;\r\n  min-height: 20px;\r\n  margin-top: 25%;\r\n  vertical-align: top;\r\n  font-size: 10px;\r\n  align-content: center;\r\n}\r\n\r\n#customers {\r\nborder-collapse: collapse;\r\nwidth: 100%;\r\n}\r\n\r\n#customers td, #customers th {\r\nborder: 1px solid #ddd;\r\npadding: 8px;\r\ntext-align: center;\r\nfont-size: x-small;\r\n\r\n}\r\n\r\n#customers td mat-chip {\r\nfont-size: x-small;\r\n}\r\n\r\n#customers tr:nth-child(even){background-color: #f2f2f2;}\r\n\r\n#customers th {\r\npadding-top: 8px;\r\npadding-bottom: 9px;\r\ntext-align: left;\r\nbackground-color:rgb(97, 178, 216);\r\ncolor: white;\r\n}\r\n\r\n.full-width {\r\nwidth: 60%;\r\nfont-size: 10px;\r\n}\r\n\r\n.mat-raised-button {\r\n  width: 80px;\r\n  height: 27px;\r\n  line-height: 20px;\r\n  min-height: 20px;\r\n  vertical-align: top;\r\n  font-size: 11px;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZW1haWwtbWFpbnRlbmFuY2UvZW1haWwtbmV3L2VtYWlsLW5ldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7O0VBRVosc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixrQkFBa0I7O0FBRXBCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNFO0VBQ0EsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBQ0E7RUFDRSxlQUFlOztBQUVqQjs7QUFDQTs7O0FBR0EsV0FBVztFQUNULHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixlQUFlOztBQUVqQjs7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGdCQUFnQjs7RUFFaEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YscUJBQXFCO0FBQ3ZCOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCLFdBQVc7QUFDWDs7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QixZQUFZO0FBQ1osa0JBQWtCO0FBQ2xCLGtCQUFrQjs7QUFFbEI7O0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBQ0EsOEJBQThCLHlCQUF5QixDQUFDOztBQUV4RDtBQUNBLGdCQUFnQjtBQUNoQixtQkFBbUI7QUFDbkIsZ0JBQWdCO0FBQ2hCLGtDQUFrQztBQUNsQyxZQUFZO0FBQ1o7O0FBQ0E7QUFDQSxVQUFVO0FBQ1YsZUFBZTtBQUNmOztBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvZW1haWwtbWFpbnRlbmFuY2UvZW1haWwtbmV3L2VtYWlsLW5ldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0biB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiAyNXB4O1xyXG4gXHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIFxyXG59XHJcblxyXG50YWJsZXtcclxuICBtYXJnaW4tbGVmdDogMjAlO1xyXG59XHJcbiAgdHJ7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG50ZCB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG5cclxufVxyXG4uZm9ybS1jb250cm9sIHtcclxuICBcclxuXHJcbnBhZGRpbmc6IDYlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxuIFxyXG59XHJcbi5idG4ge1xyXG4gIHdpZHRoOiA0MHB4O1xyXG4gIGhlaWdodDogMjVweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBtaW4taGVpZ2h0OiAyMHB4O1xyXG4gIFxyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uYntcclxuICB3aWR0aDogODBweDtcclxuICBoZWlnaHQ6IDI1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgbWluLWhlaWdodDogMjBweDtcclxuICBtYXJnaW4tdG9wOiAyNSU7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4jY3VzdG9tZXJzIHtcclxuYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxud2lkdGg6IDEwMCU7XHJcbn1cclxuI2N1c3RvbWVycyB0ZCwgI2N1c3RvbWVycyB0aCB7XHJcbmJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbnBhZGRpbmc6IDhweDtcclxudGV4dC1hbGlnbjogY2VudGVyO1xyXG5mb250LXNpemU6IHgtc21hbGw7XHJcblxyXG59XHJcbiNjdXN0b21lcnMgdGQgbWF0LWNoaXAge1xyXG5mb250LXNpemU6IHgtc21hbGw7XHJcbn1cclxuI2N1c3RvbWVycyB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XHJcblxyXG4jY3VzdG9tZXJzIHRoIHtcclxucGFkZGluZy10b3A6IDhweDtcclxucGFkZGluZy1ib3R0b206IDlweDtcclxudGV4dC1hbGlnbjogbGVmdDtcclxuYmFja2dyb3VuZC1jb2xvcjpyZ2IoOTcsIDE3OCwgMjE2KTtcclxuY29sb3I6IHdoaXRlO1xyXG59XHJcbi5mdWxsLXdpZHRoIHtcclxud2lkdGg6IDYwJTtcclxuZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiAyN3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/views/email-maintenance/email-new/email-new.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/email-maintenance/email-new/email-new.component.ts ***!
  \**************************************************************************/
/*! exports provided: EmailNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailNewComponent", function() { return EmailNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_services_account_blocking_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/account-blocking-service.service */ "./src/app/shared/services/account-blocking-service.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");






let EmailNewComponent = class EmailNewComponent {
    constructor(formBuilder, accountBlockingService, route) {
        this.formBuilder = formBuilder;
        this.accountBlockingService = accountBlockingService;
        this.route = route;
        // emailMaitenanceDto=new EmailMaitenanceDto();
        this.fieldArray = [];
        this.newAttribute = {};
        this.email = [{
                emailId: '',
                emailType: '',
                emailRequired: '',
                id: '',
            }];
    }
    ngOnInit() {
        this.loggedInUser = localStorage.getItem('userFromLogin');
    }
    addFieldValue() {
        this.fieldArray.push(this.newAttribute);
        this.newAttribute = {};
    }
    deleteFieldValue(index) {
        this.fieldArray.splice(index, 1);
    }
    onClickOfSubmit(data) {
        //console.log("submit", data)
        //console.log(this.fieldArray);
    }
    addAddress() {
        this.email.push({
            emailId: '',
        });
    }
    removeAddress(i) {
        this.email.splice(i, 1);
    }
    logValue() {
        //console.log(this.selected);
        // //console.log(this.accountType);
        //console.log(this.email);
        this.email.forEach(element => {
            element.emailType = this.selected;
            element.emailRequired = 'Y';
        });
        this.accountBlockingService.emailMaintenance(this.selected, this.loggedInUser, this.email).subscribe(resp => {
            this.masterresponse = resp;
            //console.log(resp);
            if (resp) {
                this.masterDatapermission = true;
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Success ');
                this.showSubmit = true;
            }
            else if (resp == null) {
                // this.masterDatapermission=false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Email Id Already Exit ');
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Unable to Save the Record ');
            }
        });
    }
};
EmailNewComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_shared_services_account_blocking_service_service__WEBPACK_IMPORTED_MODULE_4__["AccountBlockingServiceService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
];
EmailNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-email-new',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./email-new.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/email-maintenance/email-new/email-new.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./email-new.component.css */ "./src/app/views/email-maintenance/email-new/email-new.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], src_app_shared_services_account_blocking_service_service__WEBPACK_IMPORTED_MODULE_4__["AccountBlockingServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]])
], EmailNewComponent);



/***/ }),

/***/ "./src/app/views/email-maintenance/email-summary/email-summary.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/views/email-maintenance/email-summary/email-summary.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  \r\ntable {\r\n  border-collapse: initial;\r\n  width:100%;\r\n  text-align: center !important;\r\n}\r\n:host ::ng-deep .mat-sort-header-container { \r\n  display: flex;  \r\n  justify-content: center; \r\n}\r\nth.mat-header-cell, td.mat-cell { \r\n  text-align: center; \r\n}\r\n.mat-raised-button {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  height: 20px;\r\n  line-height: 27px;\r\n  min-height: 27px;\r\n  vertical-align: top;\r\n  font-size: 11px;\r\n  padding: 0 0;\r\n  margin: 0;\r\n}\r\n.mat-header-cell {\r\n  text-align: center;\r\n  height: 25px !important;\r\n\r\n}\r\n.mat-cell {\r\n  text-align: center;\r\n  height: 25px !important;\r\n\r\n}\r\ntr:nth-child(even) {\r\n  height: 25px !important;\r\n}\r\nth {\r\n  font-weight: small;\r\n  height: 25px !important;\r\n  text-align: center;\r\n}\r\ntr {\r\n  font-weight: small;\r\n  height: 25px !important;\r\n  text-align: center;\r\n}\r\nmat-paginator {\r\n  width: auto !important;\r\n  height: 40px !important;\r\n}\r\nmd-pagination-wrapper {\r\n  width: auto !important;\r\n  height: 40px !important;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZW1haWwtbWFpbnRlbmFuY2UvZW1haWwtc3VtbWFyeS9lbWFpbC1zdW1tYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLFVBQVU7RUFDViw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0VBQ1osU0FBUztBQUNYO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCOztBQUV6QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1Qjs7QUFFekI7QUFHQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvZW1haWwtbWFpbnRlbmFuY2UvZW1haWwtc3VtbWFyeS9lbWFpbC1zdW1tYXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIFxyXG50YWJsZSB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBpbml0aWFsO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtc29ydC1oZWFkZXItY29udGFpbmVyIHsgXHJcbiAgZGlzcGxheTogZmxleDsgIFxyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcclxufVxyXG5cclxudGgubWF0LWhlYWRlci1jZWxsLCB0ZC5tYXQtY2VsbCB7IFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbn1cclxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gIG1pbi1oZWlnaHQ6IDI3cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgcGFkZGluZzogMCAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4ubWF0LWhlYWRlci1jZWxsIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4ubWF0LWNlbGwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcblxyXG50cjpudGgtY2hpbGQoZXZlbikge1xyXG4gIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50aCB7XHJcbiAgZm9udC13ZWlnaHQ6IHNtYWxsO1xyXG4gIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG50ciB7XHJcbiAgZm9udC13ZWlnaHQ6IHNtYWxsO1xyXG4gIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5tYXQtcGFnaW5hdG9yIHtcclxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tZC1wYWdpbmF0aW9uLXdyYXBwZXIge1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/views/email-maintenance/email-summary/email-summary.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/views/email-maintenance/email-summary/email-summary.component.ts ***!
  \**********************************************************************************/
/*! exports provided: EmailSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailSummaryComponent", function() { return EmailSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_services_account_blocking_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/account-blocking-service.service */ "./src/app/shared/services/account-blocking-service.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../users/users.service */ "./src/app/views/users/users.service.ts");






let EmailSummaryComponent = class EmailSummaryComponent {
    constructor(router, userApi, accountBlockingService) {
        this.router = router;
        this.userApi = userApi;
        this.accountBlockingService = accountBlockingService;
        this.displayedColumns = ['emailType', 'inputBy'];
        this.button_permission = {};
    }
    ngOnInit() {
        this.user_id = sessionStorage.getItem('user_id');
        this.role = sessionStorage.getItem('user_role');
        this.getAllData();
        this.screenpermission();
    }
    screenpermission() {
        this.screenName = 'roles';
        //this.role='ROLE1';
        this.userApi.getRoleScreenPermission(this.user_id, this.screenName, this.role).subscribe(res => {
            this.rolepermission = res;
            //console.log(this.rolepermission);
            if (this.rolepermission) {
                this.button_permission = this.rolepermission[0];
                //console.log( this.button_permission);
            }
        });
    }
    getEmail(row) {
        //console.log("row",row);
        //console.log(row.modNO);
        const navigationExtras = {
            queryParams: {
                modifyNo: row.modNO,
                creator: row.inputBy,
                rstatus: row.recordStatus,
                vStatus: row.verifiedOnce,
                inputDate: row.inputTime,
                vDate: row.verifiedStatus,
                authtym: row.verifiedTime,
                authBy: row.verifiedBy,
                emailType: row.emailType
            }
        };
        //console.log(row.emailType);
        this.router.navigate(['email-summary/email-maintenance'], navigationExtras);
    }
    getAllData() {
        this.accountBlockingService.getAllEmail().subscribe(emaildata => {
            this.emaildata = emaildata;
            //console.log(this.emaildata);
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.emaildata);
            this.dataSource.paginator = this.paginator;
        });
        let response = JSON.stringify(this.dataSource);
        //console.log(response)
        localStorage.setItem("EmailSwitch", "existing");
        localStorage.setItem("responseFromEmailSummary", response);
    }
};
EmailSummaryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _users_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"] },
    { type: src_app_shared_services_account_blocking_service_service__WEBPACK_IMPORTED_MODULE_3__["AccountBlockingServiceService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
], EmailSummaryComponent.prototype, "paginator", void 0);
EmailSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-email-summary',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./email-summary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/email-maintenance/email-summary/email-summary.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./email-summary.component.css */ "./src/app/views/email-maintenance/email-summary/email-summary.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _users_users_service__WEBPACK_IMPORTED_MODULE_5__["UsersService"],
        src_app_shared_services_account_blocking_service_service__WEBPACK_IMPORTED_MODULE_3__["AccountBlockingServiceService"]])
], EmailSummaryComponent);



/***/ })

}]);
//# sourceMappingURL=views-email-maintenance-email-maintenance-module-es2015.js.map