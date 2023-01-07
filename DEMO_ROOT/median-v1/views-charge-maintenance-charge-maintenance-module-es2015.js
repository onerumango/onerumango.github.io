(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-charge-maintenance-charge-maintenance-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/charge-maintenance/charge-maintenance-new/charge-maintenance-new.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/charge-maintenance/charge-maintenance-new/charge-maintenance-new.component.html ***!
  \*********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n    <span>Charge Maintenance </span>\r\n  </mat-toolbar>\r\n \r\n<br>\r\n  <mat-card class=\"FirstMatCard\">\r\n  \r\n    <br>\r\n        <table >\r\n            <tbody>\r\n                <tr>\r\n                        <td>\r\n                            <mat-form-field appearance=\"outline\">\r\n                                <mat-label>Currency</mat-label>\r\n                                <input matInput placeholder=\"Currency\"  style=\"text-transform: uppercase;\" minlength=\"3\" maxlength=\"3\" name=\"chargeMaintenanceCurrency\" [(ngModel)]=\"chargeMaintenanceDTO.currency\"  #currency=\"ngModel\"  \r\n                                (keyup)=\"fun(chargeMaintenanceDTO.currency)\">\r\n                            </mat-form-field>\r\n                        </td>\r\n                </tr>\r\n                <tr>\r\n                        <td>\r\n                            <mat-form-field appearance=\"outline\">\r\n                                <mat-label>Charge Amount</mat-label>\r\n                                <input matInput type=\"number\" placeholder=\"Only Numerics allowed\" name=\"chargeMaintenanceAmount\" [(ngModel)]=\"chargeMaintenanceDTO.chargeAmount\"  #chargeAmount=\"ngModel\" (keyup)=\"fn1(chargeMaintenanceDTO.chargeAmount,chargeMaintenanceDTO.chargePercentage)\"  >\r\n                            </mat-form-field>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>\r\n                            <mat-form-field appearance=\"outline\">\r\n                                <mat-label>Charge Percentage</mat-label>\r\n                                <input matInput type=\"number\" placeholder=\"Only Numerics allowed\" name=\"chargeMaintenancePercentage\" [(ngModel)]=\"chargeMaintenanceDTO.chargePercentage\"  #chargePercentage=\"ngModel\"  (keyup)=\"fn2(chargeMaintenanceDTO.chargePercentage,chargeMaintenanceDTO.chargeAmount)\">\r\n                            \r\n                              </mat-form-field>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>\r\n                            <mat-form-field appearance=\"outline\">\r\n                                <mat-label>Tax Amount</mat-label>\r\n                                <input matInput type=\"number\" placeholder=\"Only Numerics allowed\" name=\"chargeMaintenancetaxAmount\" [(ngModel)]=\"chargeMaintenanceDTO.taxAmount\"  #taxAmount=\"ngModel\"  (keyup)=\"fn3(chargeMaintenanceDTO.taxAmount,chargeMaintenanceDTO.taxPercentage)\">\r\n                            </mat-form-field>\r\n                        </td>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>\r\n                            <mat-form-field appearance=\"outline\">\r\n                                <mat-label>Tax Percentage</mat-label>\r\n                                <input matInput type=\"number\" placeholder=\"Only Numerics allowed\" name=\"chargeMaintenancetaxPercentage\" [(ngModel)]=\"chargeMaintenanceDTO.taxPercentage\"  #taxPercentage=\"ngModel\"  (keyup)=\"fn4(chargeMaintenanceDTO.taxPercentage,chargeMaintenanceDTO.taxAmount)\">\r\n                            </mat-form-field>\r\n                        </td>  \r\n                </tr>\r\n                <br> \r\n            </tbody>\r\n\r\n        </table>\r\n        <div class=\"btn-div\">\r\n            <!-- <button  mat-raised-button  color=\"primary\"  (click)=\"onSubmittingofChargeMaintenance()\" [disabled]=\"submitDisab ||!chargeMaintenanceDTO.currency||!chargeMaintenanceDTO.chargeAmount||!chargePercentage||!chargeMaintenanceDTO.taxAmount||!chargeMaintenanceDTO.taxPercentage\">Submit</button>&nbsp; -->\r\n        <button  mat-raised-button  color=\"primary\"  (click)=\"onSubmittingofChargeMaintenance()\"  [disabled]=\"submitDisab||!charge||!tax||!space\">Submit</button>&nbsp;\r\n        <button  mat-raised-button  color=\"warn\" routerLink=\"/charge-maintenance\">Exit</button>&nbsp;\r\n        </div>\r\n</mat-card>\r\n  \r\n<br><br>\r\n\r\n<div fxLayout=\"row\">\r\n    <div fxFlex></div>\r\n    <div fxFlex=\"95\">\r\n      <mat-card style=\"width: 70%;  margin-left:15%;\">\r\n        <mat-card-title>\r\n  \r\n        </mat-card-title>\r\n        <mat-card-content style=\" margin-left:-30%;\">\r\n          <div fxLayout=\"row\">\r\n  \r\n            <table id=\"customers\">\r\n              <tr>\r\n                <th>Record Status:</th>\r\n                <td>\r\n                  <mat-chip>{{chargeMaintenanceDTO.recordStatus}}</mat-chip>\r\n  \r\n                </td>\r\n                <th>Auth Status:</th>\r\n                <td>\r\n  \r\n                  <mat-chip >{{chargeMaintenanceDTO.verifiedStatus}}</mat-chip>\r\n                \r\n                </td>\r\n                <th>Input By:</th>\r\n                <td>\r\n  \r\n                  <mat-chip >{{chargeMaintenanceDTO.inputBy}}</mat-chip>\r\n                </td>\r\n                <th>Input Date:</th>\r\n                <td>\r\n  \r\n                  <mat-chip>{{chargeMaintenanceDTO.inputTime |  date: 'MM/dd/yyyy, h:mm a'}}</mat-chip>\r\n                </td>\r\n  \r\n              </tr>\r\n              <tr>\r\n                <th>Modification No:</th>\r\n                <td>\r\n                <mat-chip >{{chargeMaintenanceDTO.modNo}}</mat-chip>\r\n                </td>\r\n                <!-- <th>Creation Date:</th>\r\n                              <td>\r\n                                <mat-chip>{{masterresponse.modifiedTime | date:'d/M/yy'}}</mat-chip>\r\n                              </td> -->\r\n                <th>Authorized Date:</th>\r\n                <td>\r\n                  <mat-chip >{{chargeMaintenanceDTO.verifiedTime |  date: 'MM/dd/yyyy, h:mm a'}}</mat-chip>\r\n                </td>\r\n                <th> Frist Auth Status:</th>\r\n                <td>\r\n  \r\n                  <mat-chip >{{chargeMaintenanceDTO.verifiedOnce}}</mat-chip>\r\n                 \r\n                </td>\r\n                <th>Authorized By:</th>\r\n                <td>\r\n                  <mat-chip >{{chargeMaintenanceDTO.verifiedBy}}</mat-chip>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <div fxFlex></div>\r\n  \r\n  </div>\r\n\r\n \r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/charge-maintenance/charge-maintenance-summary/charge-maintenance-summary.component.html":
/*!*****************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/charge-maintenance/charge-maintenance-summary/charge-maintenance-summary.component.html ***!
  \*****************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n    <span>Charge Maintenance Summary </span>\r\n  </mat-toolbar>\r\n  <mat-card>\r\n  <button  mat-raised-button style=\"font-size: 11px; margin-left: 80%\"  color=\"primary\" routerLink=\"/charge-maintenance/charge-maintenance-new\"\r\n  \r\n*ngIf=\"roleCodes.new\" >{{roleCodes.new.labelDescription}}</button>&nbsp;\r\n  <button  mat-raised-button style=\"font-size: 11px;\"  color=\"warn\" routerLink='/dashboard'>Exit</button>\r\n  <br><br>\r\n  \r\n  \r\n  <div class=\"mat-elevation-z8\">\r\n    <table mat-table [dataSource]=\"dataSource\">\r\n        <ng-container matColumnDef=\"currency\">\r\n            <th mat-header-cell *matHeaderCellDef > Currency </th>\r\n            <td mat-cell *matCellDef=\"let row\"> \r\n            <a routerLink =\"/charge-maintenance/charge-maintenance-edit/{{row.currency}}\" style=\"text-transform: uppercase;\" (click)=\"getchargeMaintenance(row)\"> {{row.currency}}</a> </td>\r\n        \r\n          </ng-container>\r\n          \r\n          <ng-container matColumnDef=\"chargeAmount\">\r\n            <th mat-header-cell *matHeaderCellDef > Charge Amount </th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.chargeAmount}} </td>\r\n          </ng-container>\r\n\r\n          <ng-container matColumnDef=\"chargePercentage\">\r\n            <th mat-header-cell *matHeaderCellDef > Charge Percentage </th>\r\n            <td mat-cell *matCellDef=\"let row\"> {{row.chargePercentage}} </td>\r\n          </ng-container>\r\n      <!-- ID Column -->\r\n      <ng-container matColumnDef=\"inputBy\">\r\n        <th mat-header-cell *matHeaderCellDef > Maker </th>\r\n        <td mat-cell *matCellDef=\"let row\"> {{row.inputBy}} </td>\r\n      </ng-container>\r\n  \r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n      </tr>\r\n    </table>\r\n  \r\n    <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n  </div>\r\n  \r\n </mat-card>\r\n     <br><br> <br><br> <br><br> <br><br> <br><br> <br><br> <br><br>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/charge-maintenance/charge-maintenance.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/charge-maintenance/charge-maintenance.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n    <span>Charge Maintenance </span>\r\n  </mat-toolbar>\r\n  <br>\r\n  <mat-card class=\"FirstMatCard\">\r\n    <table >\r\n        <tbody>\r\n            <tr>\r\n                    <td>\r\n                        <mat-form-field appearance=\"outline\">\r\n                            <mat-label>Currency</mat-label>\r\n                            <input matInput placeholder=\"Currency\" style=\"text-transform: uppercase;\" minlength=\"3\" maxlength=\"3\" name=\"chargeMaintenanceCurrency\" [(ngModel)]=\"chargeMaintenanceDTO.currency\"  #currency=\"ngModel\"   (keyup)=\"fun(chargeMaintenanceDTO.currency)\" readonly>\r\n                        </mat-form-field>\r\n                    </td>\r\n            </tr>\r\n            <tr>\r\n                    <td>\r\n                        <mat-form-field appearance=\"outline\">\r\n                            <mat-label>Charge Amount</mat-label>\r\n                            <input matInput type=\"number\" placeholder=\"Only Numerics allowed\" name=\"chargeMaintenanceAmount\" [(ngModel)]=\"chargeMaintenanceDTO.chargeAmount\"  #chargeAmount=\"ngModel\" [disabled]=\"!editFlag\" (keyup)=\"fn1(chargeMaintenanceDTO.chargeAmount,chargeMaintenanceDTO.chargePercentage)\">\r\n                        </mat-form-field>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                        <mat-form-field appearance=\"outline\">\r\n                            <mat-label>Charge Percentage</mat-label>\r\n                            <input matInput type=\"number\" placeholder=\"Only Numerics allowed\" name=\"chargeMaintenancePercentage\" [(ngModel)]=\"chargeMaintenanceDTO.chargePercentage\"  #chargePercentage=\"ngModel\" [disabled]=\"!editFlag\" (keyup)=\"fn2(chargeMaintenanceDTO.chargePercentage,chargeMaintenanceDTO.chargeAmount)\" >\r\n                        </mat-form-field>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                        <mat-form-field appearance=\"outline\">\r\n                            <mat-label>Tax Amount</mat-label>\r\n                            <input matInput type=\"number\" placeholder=\"Only Numerics allowed\" name=\"chargeMaintenancetaxAmount\" [(ngModel)]=\"chargeMaintenanceDTO.taxAmount\"  #taxAmount=\"ngModel\" [disabled]=\"!editFlag\"  (keyup)=\"fn3(chargeMaintenanceDTO.taxAmount,chargeMaintenanceDTO.taxPercentage)\">\r\n                        </mat-form-field>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>\r\n                        <mat-form-field appearance=\"outline\">\r\n                            <mat-label>Tax Percentage</mat-label>\r\n                            <input matInput type=\"number\" placeholder=\"Only Numerics allowed\" name=\"chargeMaintenancetaxPercentage\" [(ngModel)]=\"chargeMaintenanceDTO.taxPercentage\"  #taxPercentage=\"ngModel\" [disabled]=\"!editFlag\" (keyup)=\"fn4(chargeMaintenanceDTO.taxPercentage,chargeMaintenanceDTO.taxAmount)\" >\r\n                        </mat-form-field>\r\n                    </td>  \r\n            </tr>\r\n            <br> \r\n        </tbody>\r\n\r\n    </table>\r\n    <!-- <div style=\"text-align: center;\">\r\n      <button  mat-raised-button  color=\"primary\"  [routerLink]=\"'/charge-maintenance/charge-maintenance-new'\">New</button>&nbsp;  \r\n    <button  mat-raised-button  color=\"primary\"  (click)=\"onSubmitChargeMaintenance()\" [disabled]=\"!space\" *ngIf=\"editFlag\">Update</button>&nbsp;\r\n<button  mat-raised-button  color=\"primary\" (click)= onSubmitEditChargeMaintenance() *ngIf=\"!editFlag && roleCodes.edit\">{{roleCodes.edit.labelDescription}}</button>&nbsp;\r\n<button  mat-raised-button  color=\"primary\" (click)=\"onAuthorizingTheRecord()\" *ngIf=\"chargeMaintenanceDTO.verifiedStatus=='UNAUTHORIZED' && roleCodes.auth\" >{{roleCodes.auth.labelDescription}}</button>\r\n<button  mat-raised-button  color=\"primary\" (click)=\"onClosingTheRecord()\" *ngIf=\"chargeMaintenanceDTO.recordStatus=='OPEN' && chargeMaintenanceDTO.verifiedStatus=='AUTHORIZED' && roleCodes.close\" >{{roleCodes.close.labelDescription}}</button>&nbsp;\r\n<button  mat-raised-button  color=\"warn\"  (click)=\"onReopningTheRecord()\" *ngIf=\"chargeMaintenanceDTO.recordStatus=='CLOSE' && roleCodes.reopen\">{{roleCodes.reopen.labelDescription}}</button>\r\n<button  mat-raised-button  color=\"warn\"  (click)=\"onDeletingTheRecord()\"  *ngIf=\"chargeMaintenanceDTO.verifiedOnce=='NO' && roleCodes.delete\">{{roleCodes.delete.labelDescription}}</button>&nbsp;\r\n<button  mat-raised-button  color=\"warn\" routerLink=\"/charge-maintenance\">Exit</button>&nbsp;\r\n\r\n</div> -->\r\n<div style=\"text-align: center;\">\r\n  <button  mat-raised-button  color=\"primary\"  (click)=\"onNew()\" *ngIf=\"!editFlag &&!onlySubmit\">New</button>&nbsp;  \r\n<button  mat-raised-button  color=\"primary\"  (click)=\"onSubmitChargeMaintenance()\" [disabled]=\"!space||!charge||!tax|| disableSubmit\" *ngIf=\"editFlag\">Update</button>&nbsp;\r\n<button  mat-raised-button  color=\"primary\" (click)= onSubmitEditChargeMaintenance() *ngIf=\"!editFlag && roleCodes.edit && !onlySubmit\">{{roleCodes.edit.labelDescription}}</button>&nbsp;\r\n<button  mat-raised-button  color=\"primary\" (click)=\"onAuthorizingTheRecord()\" *ngIf=\"chargeMaintenanceDTO.verifiedStatus=='UNAUTHORIZED' && roleCodes.auth && !onlySubmit &&!editFlag\" >{{roleCodes.auth.labelDescription}}</button>\r\n<button  mat-raised-button  color=\"primary\" (click)=\"onClosingTheRecord()\" *ngIf=\"chargeMaintenanceDTO.recordStatus=='OPEN' && chargeMaintenanceDTO.verifiedStatus=='AUTHORIZED' && roleCodes.close && !onlySubmit &&!editFlag\" >{{roleCodes.close.labelDescription}}</button>&nbsp;\r\n<button  mat-raised-button  color=\"warn\"  (click)=\"onReopningTheRecord()\" *ngIf=\"chargeMaintenanceDTO.recordStatus=='CLOSE' && roleCodes.reopen && !onlySubmit &&!editFlag\">{{roleCodes.reopen.labelDescription}}</button>\r\n<button  mat-raised-button  color=\"warn\"  (click)=\"onDeletingTheRecord()\"  *ngIf=\"chargeMaintenanceDTO.verifiedOnce=='NO' && roleCodes.delete && !onlySubmit \">{{roleCodes.delete.labelDescription}}</button>&nbsp;\r\n<button  mat-raised-button  color=\"warn\" routerLink=\"/charge-maintenance\">Exit</button>&nbsp;\r\n\r\n</div>\r\n</mat-card>\r\n<br><br>\r\n\r\n<div fxLayout=\"row\">\r\n    <div fxFlex></div>\r\n    <div fxFlex=\"95\">\r\n      <mat-card style=\"width: 70%;  margin-left:15%;\">\r\n        <mat-card-title>\r\n  \r\n        </mat-card-title>\r\n        <mat-card-content style=\" margin-left:-30%;\">\r\n          <div fxLayout=\"row\">\r\n  \r\n            <table id=\"customers\">\r\n              <tr>\r\n                <th>Record Status:</th>\r\n                <td>\r\n                  <mat-chip>{{chargeMaintenanceDTO.recordStatus}}</mat-chip>\r\n  \r\n                </td>\r\n                <th>Auth Status:</th>\r\n                <td>\r\n  \r\n                  <mat-chip >{{chargeMaintenanceDTO.verifiedStatus}}</mat-chip>\r\n                \r\n                </td>\r\n                <th>Input By:</th>\r\n                <td>\r\n  \r\n                  <mat-chip >{{chargeMaintenanceDTO.inputBy}}</mat-chip>\r\n                </td>\r\n                <th>Input Date:</th>\r\n                <td>\r\n  \r\n                  <mat-chip>{{chargeMaintenanceDTO.inputTime |  date: 'MM/dd/yyyy, h:mm a'}}</mat-chip>\r\n                </td>\r\n  \r\n              </tr>\r\n              <tr>\r\n                <th>Modification No:</th>\r\n                <td>\r\n                <mat-chip >{{chargeMaintenanceDTO.modNo}}</mat-chip>\r\n                </td>\r\n                <!-- <th>Creation Date:</th>\r\n                              <td>\r\n                                <mat-chip>{{masterresponse.modifiedTime | date:'d/M/yy'}}</mat-chip>\r\n                              </td> -->\r\n                <th>Authorized Date:</th>\r\n                <td>\r\n                  <mat-chip >{{chargeMaintenanceDTO.verifiedTime |  date: 'MM/dd/yyyy, h:mm a'}}</mat-chip>\r\n                </td>\r\n                <th> Frist Auth Status:</th>\r\n                <td>\r\n  \r\n                  <mat-chip >{{chargeMaintenanceDTO.verifiedOnce}}</mat-chip>\r\n                 \r\n                </td>\r\n                <th>Authorized By:</th>\r\n                <td>\r\n                  <mat-chip >{{chargeMaintenanceDTO.verifiedBy}}</mat-chip>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </mat-card-content>\r\n      </mat-card>\r\n    </div>\r\n    <div fxFlex></div>\r\n  \r\n  </div>\r\n\r\n  \r\n\r\n\r\n<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>\r\n<br>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/views/charge-maintenance/charge-maintenance-new/charge-maintenance-new.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/views/charge-maintenance/charge-maintenance-new/charge-maintenance-new.component.css ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-raised-button {\r\n    width: 100px;\r\n    height: 27px;\r\n    line-height: 20px;\r\n    min-height: 20px;\r\n    vertical-align: top;\r\n    font-size: 11px;\r\n  }\r\n  table{\r\n    height: 100%;\r\n    width: 80%;\r\n    margin-left: 25%;\r\n  }\r\n  tr{\r\n    padding: 2px;\r\n    font-size: 10px;\r\n    \r\n  }\r\n  td {\r\n    font-size: 10px;\r\n  }\r\n  mat-form-field{\r\n    width: 200px;\r\n  }\r\n  .FirstMatCard\r\n  {\r\n    width: 40%;\r\n    margin-left:30%;\r\n  }\r\n  .btn-div\r\n  {\r\n    margin-left:25%;\r\n  }\r\n  #customers {\r\n    border-collapse: collapse;\r\n    width: 70%;\r\n    margin-left: 26%;\r\n    }\r\n  #customers td, #customers th {\r\n    border: 1px solid #ddd;\r\n    \r\n    text-align: center;\r\n    font-size: x-small;\r\n    \r\n    }\r\n  #customers td mat-chip {\r\n    font-size: x-small;\r\n    }\r\n  #customers tr:nth-child(even){background-color: #f2f2f2;}\r\n  #customers th {\r\n    padding-top: 8px;\r\n    padding-bottom: 9px;\r\n    text-align: left;\r\n    background-color:rgb(97, 178, 216);\r\n    color: white;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY2hhcmdlLW1haW50ZW5hbmNlL2NoYXJnZS1tYWludGVuYW5jZS1uZXcvY2hhcmdlLW1haW50ZW5hbmNlLW5ldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtFQUNsQjtFQUNFO0lBQ0EsWUFBWTtJQUNaLGVBQWU7O0VBRWpCO0VBQ0E7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxZQUFZO0VBQ2Q7RUFDQTs7SUFFRSxVQUFVO0lBQ1YsZUFBZTtFQUNqQjtFQUNBOztJQUVFLGVBQWU7RUFDakI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCO0VBQ0E7SUFDQSxzQkFBc0I7O0lBRXRCLGtCQUFrQjtJQUNsQixrQkFBa0I7O0lBRWxCO0VBQ0E7SUFDQSxrQkFBa0I7SUFDbEI7RUFDQSw4QkFBOEIseUJBQXlCLENBQUM7RUFFeEQ7SUFDQSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQ0FBa0M7SUFDbEMsWUFBWTtJQUNaIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvY2hhcmdlLW1haW50ZW5hbmNlL2NoYXJnZS1tYWludGVuYW5jZS1uZXcvY2hhcmdlLW1haW50ZW5hbmNlLW5ldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMjdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWluLWhlaWdodDogMjBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgfVxyXG4gIHRhYmxle1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgfVxyXG4gICAgdHJ7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICBcclxuICB9XHJcbiAgdGQge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gIH1cclxuICBtYXQtZm9ybS1maWVsZHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICB9XHJcbiAgLkZpcnN0TWF0Q2FyZFxyXG4gIHtcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICBtYXJnaW4tbGVmdDozMCU7XHJcbiAgfVxyXG4gIC5idG4tZGl2XHJcbiAge1xyXG4gICAgbWFyZ2luLWxlZnQ6MjUlO1xyXG4gIH1cclxuICAjY3VzdG9tZXJzIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI2JTtcclxuICAgIH1cclxuICAgICNjdXN0b21lcnMgdGQsICNjdXN0b21lcnMgdGgge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAjY3VzdG9tZXJzIHRkIG1hdC1jaGlwIHtcclxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgIH1cclxuICAgICNjdXN0b21lcnMgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxyXG4gICAgXHJcbiAgICAjY3VzdG9tZXJzIHRoIHtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOXB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDk3LCAxNzgsIDIxNik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9Il19 */");

/***/ }),

/***/ "./src/app/views/charge-maintenance/charge-maintenance-new/charge-maintenance-new.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/charge-maintenance/charge-maintenance-new/charge-maintenance-new.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: ChargeMaintenanceNewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargeMaintenanceNewComponent", function() { return ChargeMaintenanceNewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _chargeMaintenanceDTO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chargeMaintenanceDTO */ "./src/app/views/charge-maintenance/chargeMaintenanceDTO.ts");
/* harmony import */ var _charge_maintenance_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../charge-maintenance-service.service */ "./src/app/views/charge-maintenance/charge-maintenance-service.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





let ChargeMaintenanceNewComponent = class ChargeMaintenanceNewComponent {
    constructor(chargeMaintenanceService) {
        this.chargeMaintenanceService = chargeMaintenanceService;
        this.chargeMaintenanceDTO = new _chargeMaintenanceDTO__WEBPACK_IMPORTED_MODULE_2__["chargeMaintenanceDTO"]();
        this.submitDisab = false;
        this.space = false;
    }
    ngOnInit() {
        this.currentUser = localStorage.getItem('userFromLogin');
    }
    onSubmittingofChargeMaintenance() {
        console.log("this is Charge Maintenance", this.chargeMaintenanceDTO);
        this.chargeMaintenanceService.onchargeMaintenanceSubmit(this.currentUser, this.chargeMaintenanceDTO).subscribe(chargeMaintenanceResp => {
            console.log(chargeMaintenanceResp);
            this.commonAuditLog();
            if (chargeMaintenanceResp.currency == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Record Already Exist',
                    type: "warning",
                });
                this.submitDisab = true;
            }
            else {
                this.chargeMaintenanceDTO = chargeMaintenanceResp;
                this.submitDisab = true;
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Record Saved SuccessFully',
                });
            }
        });
    }
    commonAuditLog() {
        console.log("this is common audi log");
        if (this.chargeMaintenanceDTO.recordStatus == 'O') {
            this.chargeMaintenanceDTO.recordStatus = 'OPEN';
        }
        if (this.chargeMaintenanceDTO.recordStatus == 'C') {
            this.chargeMaintenanceDTO.recordStatus = 'CLOSE';
        }
        if (this.chargeMaintenanceDTO.verifiedStatus == 'U') {
            this.chargeMaintenanceDTO.verifiedStatus = 'UNAUTHORIZED';
        }
        if (this.chargeMaintenanceDTO.verifiedStatus == 'A') {
            this.chargeMaintenanceDTO.verifiedStatus = 'AUTHORIZED';
        }
        if (this.chargeMaintenanceDTO.verifiedOnce == 'Y') {
            this.chargeMaintenanceDTO.verifiedOnce = 'YES';
        }
        if (this.chargeMaintenanceDTO.verifiedOnce == 'N') {
            this.chargeMaintenanceDTO.verifiedOnce = 'NO';
        }
    }
    fun(extSysName) {
        console.log(extSysName);
        console.log("enters inside fn");
        const result = extSysName.trim();
        console.log(result);
        if (result) {
            console.log("valid string");
            this.space = true;
            console.log(this.space);
        }
        else {
            console.log("invalid string");
            this.space = false;
            // this.submitted = false;
            console.log(this.space);
        }
    }
    fn1(value, percentage) {
        this.charge = true;
        console.log("charge amount value", value);
        console.log("percentage value", percentage);
        if (value != null || percentage != undefined || percentage != null) {
            this.charge = true;
        }
        else if (value == null || percentage == undefined || percentage == null) {
            this.charge = false;
        }
    }
    fn2(value, charge) {
        this.charge = true;
        console.log("percentage value", value);
        console.log("charge amount", charge);
        if (value != null || charge != undefined || charge != null) {
            this.charge = true;
            if (value > 100) {
                this.chargeMaintenanceDTO.chargePercentage = '100';
            }
            else if (value < 0) {
                this.chargeMaintenanceDTO.chargePercentage = '0';
            }
        }
        else if (value == null || charge == undefined || charge == null) {
            this.charge = false;
        }
    }
    fn3(value, percentage) {
        this.tax = true;
        console.log("charge amount value", value);
        console.log("percentage value", percentage);
        if (value != null || percentage != undefined || percentage != null) {
            this.tax = true;
        }
        else if (value == null || percentage == undefined || percentage == null) {
            this.tax = false;
        }
    }
    fn4(value, tax) {
        this.tax = true;
        console.log("percentage value", value);
        console.log("charge amount", tax);
        if (value != null || tax != undefined || tax != null) {
            this.tax = true;
            if (value > 100) {
                this.chargeMaintenanceDTO.taxPercentage = '100';
            }
            else if (value < 0) {
                this.chargeMaintenanceDTO.taxPercentage = '0';
            }
        }
        else if (value == null || tax == undefined || tax == null) {
            this.tax = false;
        }
    }
};
ChargeMaintenanceNewComponent.ctorParameters = () => [
    { type: _charge_maintenance_service_service__WEBPACK_IMPORTED_MODULE_3__["ChargeMaintenanceServiceService"] }
];
ChargeMaintenanceNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-charge-maintenance-new',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./charge-maintenance-new.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/charge-maintenance/charge-maintenance-new/charge-maintenance-new.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./charge-maintenance-new.component.css */ "./src/app/views/charge-maintenance/charge-maintenance-new/charge-maintenance-new.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_charge_maintenance_service_service__WEBPACK_IMPORTED_MODULE_3__["ChargeMaintenanceServiceService"]])
], ChargeMaintenanceNewComponent);



/***/ }),

/***/ "./src/app/views/charge-maintenance/charge-maintenance-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/charge-maintenance/charge-maintenance-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: chargeMaintenanceroutes, ChargeMaintenanceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chargeMaintenanceroutes", function() { return chargeMaintenanceroutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargeMaintenanceRoutingModule", function() { return ChargeMaintenanceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _charge_maintenance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./charge-maintenance.component */ "./src/app/views/charge-maintenance/charge-maintenance.component.ts");
/* harmony import */ var _charge_maintenance_summary_charge_maintenance_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./charge-maintenance-summary/charge-maintenance-summary.component */ "./src/app/views/charge-maintenance/charge-maintenance-summary/charge-maintenance-summary.component.ts");
/* harmony import */ var _charge_maintenance_new_charge_maintenance_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charge-maintenance-new/charge-maintenance-new.component */ "./src/app/views/charge-maintenance/charge-maintenance-new/charge-maintenance-new.component.ts");




const chargeMaintenanceroutes = [
    {
        path: '',
        component: _charge_maintenance_summary_charge_maintenance_summary_component__WEBPACK_IMPORTED_MODULE_2__["ChargeMaintenanceSummaryComponent"]
    },
    {
        path: 'charge-maintenance-new',
        component: _charge_maintenance_new_charge_maintenance_new_component__WEBPACK_IMPORTED_MODULE_3__["ChargeMaintenanceNewComponent"]
    },
    {
        path: 'charge-maintenance-edit',
        component: _charge_maintenance_component__WEBPACK_IMPORTED_MODULE_1__["ChargeMaintenanceComponent"]
    },
];
class ChargeMaintenanceRoutingModule {
}


/***/ }),

/***/ "./src/app/views/charge-maintenance/charge-maintenance-service.service.ts":
/*!********************************************************************************!*\
  !*** ./src/app/views/charge-maintenance/charge-maintenance-service.service.ts ***!
  \********************************************************************************/
/*! exports provided: API_URL, ChargeMaintenanceServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API_URL", function() { return API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargeMaintenanceServiceService", function() { return ChargeMaintenanceServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/config/app.constant */ "./src/app/shared/config/app.constant.ts");




const API_URL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].acctCloserUrl;
let ChargeMaintenanceServiceService = class ChargeMaintenanceServiceService {
    constructor(http) {
        this.http = http;
    }
    onchargeMaintenanceSubmit(maker, data) {
        return this.http.post(`${API_URL}/charges/save/${maker}`, data);
    }
    onAuthofChargeMaintenance(maker, id) {
        return this.http.get(`${API_URL}/charges/verify/${maker}/${id}`);
    }
    gettingChargeMaintenance() {
        return this.http.get(`${API_URL}/charges/getSummary`);
    }
    submittingTheEditedRecord(data, inputBy) {
        console.log("in sevice", data);
        return this.http.put(`${API_URL}/charges/modify/${inputBy}`, data);
    }
    sendingIdforchargeMaintenanceEdit(id) {
        return this.http.get(`${API_URL}/charges/getById/${id}`);
    }
    onClosingTheRecord(inputBy, id) {
        return this.http.get(`${API_URL}/charges/close/${inputBy}/${id}`);
    }
    onReopningTheRecord(inputBy, id) {
        return this.http.get(`${API_URL}/charges/reopen/${inputBy}/${id}`);
    }
    onDeletTheRecord(inputBy, id) {
        return this.http.delete(`${API_URL}/charges/delete/${inputBy}/${id}`);
    }
};
ChargeMaintenanceServiceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ChargeMaintenanceServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ChargeMaintenanceServiceService);



/***/ }),

/***/ "./src/app/views/charge-maintenance/charge-maintenance-summary/charge-maintenance-summary.component.css":
/*!**************************************************************************************************************!*\
  !*** ./src/app/views/charge-maintenance/charge-maintenance-summary/charge-maintenance-summary.component.css ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  \r\ntable {\r\n  border-collapse: initial;\r\n  width:100%;\r\n  text-align: center !important;\r\n}\r\n:host ::ng-deep .mat-sort-header-container { \r\n  display: flex;  \r\n  justify-content: center; \r\n}\r\nth.mat-header-cell, td.mat-cell { \r\n  text-align: center; \r\n}\r\n.mat-raised-button {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  height: 20px;\r\n  line-height: 27px;\r\n  min-height: 27px;\r\n  vertical-align: top;\r\n  font-size: 11px;\r\n  padding: 0 0;\r\n  margin: 0;\r\n}\r\n.mat-header-cell {\r\n  text-align: center;\r\n  height: 25px !important;\r\n\r\n}\r\n.mat-cell {\r\n  text-align: center;\r\n  height: 25px !important;\r\n\r\n}\r\ntr:nth-child(even) {\r\n  height: 25px !important;\r\n}\r\nth {\r\n  font-weight: small;\r\n  height: 25px !important;\r\n  text-align: center;\r\n}\r\ntr {\r\n  font-weight: small;\r\n  height: 25px !important;\r\n  text-align: center;\r\n}\r\nmat-paginator {\r\n  width: auto !important;\r\n  height: 40px !important;\r\n}\r\nmd-pagination-wrapper {\r\n  width: auto !important;\r\n  height: 40px !important;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY2hhcmdlLW1haW50ZW5hbmNlL2NoYXJnZS1tYWludGVuYW5jZS1zdW1tYXJ5L2NoYXJnZS1tYWludGVuYW5jZS1zdW1tYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLFVBQVU7RUFDViw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0VBQ1osU0FBUztBQUNYO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCOztBQUV6QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1Qjs7QUFFekI7QUFHQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvY2hhcmdlLW1haW50ZW5hbmNlL2NoYXJnZS1tYWludGVuYW5jZS1zdW1tYXJ5L2NoYXJnZS1tYWludGVuYW5jZS1zdW1tYXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIFxyXG50YWJsZSB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBpbml0aWFsO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtc29ydC1oZWFkZXItY29udGFpbmVyIHsgXHJcbiAgZGlzcGxheTogZmxleDsgIFxyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcclxufVxyXG5cclxudGgubWF0LWhlYWRlci1jZWxsLCB0ZC5tYXQtY2VsbCB7IFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbn1cclxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gIG1pbi1oZWlnaHQ6IDI3cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgcGFkZGluZzogMCAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4ubWF0LWhlYWRlci1jZWxsIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4ubWF0LWNlbGwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcblxyXG50cjpudGgtY2hpbGQoZXZlbikge1xyXG4gIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50aCB7XHJcbiAgZm9udC13ZWlnaHQ6IHNtYWxsO1xyXG4gIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG50ciB7XHJcbiAgZm9udC13ZWlnaHQ6IHNtYWxsO1xyXG4gIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5tYXQtcGFnaW5hdG9yIHtcclxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tZC1wYWdpbmF0aW9uLXdyYXBwZXIge1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/views/charge-maintenance/charge-maintenance-summary/charge-maintenance-summary.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/views/charge-maintenance/charge-maintenance-summary/charge-maintenance-summary.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: ChargeMaintenanceSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargeMaintenanceSummaryComponent", function() { return ChargeMaintenanceSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _chargeMaintenanceDTO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chargeMaintenanceDTO */ "./src/app/views/charge-maintenance/chargeMaintenanceDTO.ts");
/* harmony import */ var _charge_maintenance_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../charge-maintenance-service.service */ "./src/app/views/charge-maintenance/charge-maintenance-service.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _roles1_roles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../roles1/roles.service */ "./src/app/views/roles1/roles.service.ts");
/* harmony import */ var _roles1_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../roles1/models/fmosNewRolePermissions */ "./src/app/views/roles1/models/fmosNewRolePermissions.ts");








let ChargeMaintenanceSummaryComponent = class ChargeMaintenanceSummaryComponent {
    constructor(chargeMaintenanceService, roleService, router, cdr) {
        this.chargeMaintenanceService = chargeMaintenanceService;
        this.roleService = roleService;
        this.router = router;
        this.cdr = cdr;
        this.roleCodes = new _roles1_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_7__["permissionsLabels"]();
        this.displayedColumns = ['currency', 'chargeAmount', 'chargePercentage', 'inputBy'];
        this.chargesRespDto = new _chargeMaintenanceDTO__WEBPACK_IMPORTED_MODULE_2__["chargeMaintenanceDTO"]();
    }
    ngOnInit() {
        setTimeout(() => {
            this.newRolePermissions();
        }, 2000);
        this.roleService.screenLabelList.subscribe(message => this.roleCodes = message);
        this.getAccountClosureMaintenancesummary();
        this.cdr.markForCheck();
    }
    newRolePermissions() {
        this.roleService.fetchScreenPermissions('Charge Maintenance');
    }
    getAccountClosureMaintenancesummary() {
        console.log("page loads this data should come");
        this.chargeMaintenanceService.gettingChargeMaintenance().subscribe(summaryResp => {
            console.log(summaryResp);
            this.chargeMaintenanceDTO = summaryResp;
            console.log("this is data", this.chargeMaintenanceDTO);
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.chargeMaintenanceDTO);
            this.dataSource.paginator = this.paginator;
        });
    }
    getchargeMaintenance(row) {
        this.chargeId = row.id;
        console.log("id", this.chargeId);
        const navigationExtras = {
            queryParams: {
                modifyNo: row.modNo,
                id: row.id,
                ccy: row.currency,
                chargeAmt: row.chargeAmount,
                chargePercet: row.chargePercentage,
                taxAmt: row.taxAmount,
                taxPercet: row.taxPercentage,
                inputby: row.inputBy,
                inputtime: row.inputTime,
                recordstatus: row.recordStatus,
                verifiedonce: row.verifiedOnce,
                verifiedby: row.verifiedBy,
                verifiedtime: row.verifiedTime,
                verifiedstatus: row.verifiedStatus,
                modno: row.modNo,
            }
        };
        console.log("this is row", row);
        console.log("row id", row.id);
        this.chargeMaintenanceService.sendingIdforchargeMaintenanceEdit(this.chargeId).subscribe(editResp => {
            console.log(editResp);
            this.chargesRespDto = editResp;
            console.log("chargeMaintenanceDTO", this.chargesRespDto);
        });
        this.router.navigate(['charge-maintenance/charge-maintenance-edit'], navigationExtras);
    }
};
ChargeMaintenanceSummaryComponent.ctorParameters = () => [
    { type: _charge_maintenance_service_service__WEBPACK_IMPORTED_MODULE_3__["ChargeMaintenanceServiceService"] },
    { type: _roles1_roles_service__WEBPACK_IMPORTED_MODULE_6__["RoleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatPaginator"])
], ChargeMaintenanceSummaryComponent.prototype, "paginator", void 0);
ChargeMaintenanceSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-charge-maintenance-summary',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./charge-maintenance-summary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/charge-maintenance/charge-maintenance-summary/charge-maintenance-summary.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./charge-maintenance-summary.component.css */ "./src/app/views/charge-maintenance/charge-maintenance-summary/charge-maintenance-summary.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_charge_maintenance_service_service__WEBPACK_IMPORTED_MODULE_3__["ChargeMaintenanceServiceService"],
        _roles1_roles_service__WEBPACK_IMPORTED_MODULE_6__["RoleService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], ChargeMaintenanceSummaryComponent);



/***/ }),

/***/ "./src/app/views/charge-maintenance/charge-maintenance.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/views/charge-maintenance/charge-maintenance.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-raised-button {\r\n  width: 80px;\r\n  height: 27px;\r\n  line-height: 20px;\r\n  min-height: 20px;\r\n  vertical-align: top;\r\n  font-size: 11px;\r\n}\r\ntable{\r\n  height: 100%;\r\n  width: 80%;\r\n  margin-left: 25%;\r\n}\r\ntr{\r\n  padding: 2px;\r\n  font-size: 10px;\r\n  \r\n}\r\ntd {\r\n  font-size: 10px;\r\n}\r\nmat-form-field{\r\n  width: 200px;\r\n}\r\n.FirstMatCard\r\n{\r\n  width: 45%;\r\n  margin-left:30%;\r\n}\r\n.btn-div\r\n{\r\n  margin-left:25%;\r\n}\r\n#customers {\r\n  border-collapse: collapse;\r\n  width: 70%;\r\n  margin-left: 26%;\r\n  }\r\n#customers td, #customers th {\r\n  border: 1px solid #ddd;\r\n  \r\n  text-align: center;\r\n  font-size: x-small;\r\n  \r\n  }\r\n#customers td mat-chip {\r\n  font-size: x-small;\r\n  }\r\n#customers tr:nth-child(even){background-color: #f2f2f2;}\r\n#customers th {\r\n  padding-top: 8px;\r\n  padding-bottom: 9px;\r\n  text-align: left;\r\n  background-color:rgb(97, 178, 216);\r\n  color: white;\r\n  }\r\n/* .div1\r\n  {\r\nmargin-left:30px;\r\n  }\r\n  */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY2hhcmdlLW1haW50ZW5hbmNlL2NoYXJnZS1tYWludGVuYW5jZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osVUFBVTtFQUNWLGdCQUFnQjtBQUNsQjtBQUNFO0VBQ0EsWUFBWTtFQUNaLGVBQWU7O0FBRWpCO0FBQ0E7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTs7RUFFRSxVQUFVO0VBQ1YsZUFBZTtBQUNqQjtBQUNBOztFQUVFLGVBQWU7QUFDakI7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCO0FBQ0E7RUFDQSxzQkFBc0I7O0VBRXRCLGtCQUFrQjtFQUNsQixrQkFBa0I7O0VBRWxCO0FBQ0E7RUFDQSxrQkFBa0I7RUFDbEI7QUFDQSw4QkFBOEIseUJBQXlCLENBQUM7QUFFeEQ7RUFDQSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaO0FBQ0E7Ozs7R0FJQyIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NoYXJnZS1tYWludGVuYW5jZS9jaGFyZ2UtbWFpbnRlbmFuY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiAyN3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDIwcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxudGFibGV7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1JTtcclxufVxyXG4gIHRye1xyXG4gIHBhZGRpbmc6IDJweDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgXHJcbn1cclxudGQge1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5tYXQtZm9ybS1maWVsZHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuLkZpcnN0TWF0Q2FyZFxyXG57XHJcbiAgd2lkdGg6IDQ1JTtcclxuICBtYXJnaW4tbGVmdDozMCU7XHJcbn1cclxuLmJ0bi1kaXZcclxue1xyXG4gIG1hcmdpbi1sZWZ0OjI1JTtcclxufVxyXG4jY3VzdG9tZXJzIHtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHdpZHRoOiA3MCU7XHJcbiAgbWFyZ2luLWxlZnQ6IDI2JTtcclxuICB9XHJcbiAgI2N1c3RvbWVycyB0ZCwgI2N1c3RvbWVycyB0aCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gIFxyXG4gIH1cclxuICAjY3VzdG9tZXJzIHRkIG1hdC1jaGlwIHtcclxuICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgfVxyXG4gICNjdXN0b21lcnMgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxyXG4gIFxyXG4gICNjdXN0b21lcnMgdGgge1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDlweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDk3LCAxNzgsIDIxNik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICAvKiAuZGl2MVxyXG4gIHtcclxubWFyZ2luLWxlZnQ6MzBweDtcclxuICB9XHJcbiAgKi8iXX0= */");

/***/ }),

/***/ "./src/app/views/charge-maintenance/charge-maintenance.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/views/charge-maintenance/charge-maintenance.component.ts ***!
  \**************************************************************************/
/*! exports provided: ChargeMaintenanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargeMaintenanceComponent", function() { return ChargeMaintenanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _chargeMaintenanceDTO__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chargeMaintenanceDTO */ "./src/app/views/charge-maintenance/chargeMaintenanceDTO.ts");
/* harmony import */ var _charge_maintenance_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charge-maintenance-service.service */ "./src/app/views/charge-maintenance/charge-maintenance-service.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _roles1_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../roles1/models/fmosNewRolePermissions */ "./src/app/views/roles1/models/fmosNewRolePermissions.ts");
/* harmony import */ var _roles1_roles_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../roles1/roles.service */ "./src/app/views/roles1/roles.service.ts");








let ChargeMaintenanceComponent = class ChargeMaintenanceComponent {
    constructor(chargeMaintenanceService, roleService, route, router, cdr) {
        this.chargeMaintenanceService = chargeMaintenanceService;
        this.roleService = roleService;
        this.route = route;
        this.router = router;
        this.cdr = cdr;
        this.charge = true;
        this.tax = true;
        this.editFlag = false;
        this.space = true;
        this.currentUser = localStorage.getItem('userFromLogin');
        this.roleCodes = new _roles1_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_6__["permissionsLabels"]();
        this.chargeMaintenanceDTO = new _chargeMaintenanceDTO__WEBPACK_IMPORTED_MODULE_2__["chargeMaintenanceDTO"]();
    }
    ngOnInit() {
        setTimeout(() => {
            this.newRolePermissions();
        }, 2000);
        this.roleService.screenLabelList.subscribe(message => this.roleCodes = message);
        this.currentUser = localStorage.getItem('userFromLogin');
        this.route.queryParams.subscribe(params => {
            this.chargeMaintenanceDTO.currency = params.ccy;
            this.chargeMaintenanceDTO.id = params.id;
            this.chargeMaintenanceDTO.chargeAmount = params.chargeAmt;
            this.chargeMaintenanceDTO.chargePercentage = params.chargePercet;
            this.chargeMaintenanceDTO.taxAmount = params.taxAmt;
            this.chargeMaintenanceDTO.taxPercentage = params.taxPercet;
            this.chargeMaintenanceDTO.inputBy = params.inputby;
            this.chargeMaintenanceDTO.inputTime = params.inputtime;
            this.chargeMaintenanceDTO.recordStatus = params.recordstatus;
            this.chargeMaintenanceDTO.verifiedOnce = params.verifiedonce;
            this.chargeMaintenanceDTO.verifiedBy = params.verifiedby;
            this.chargeMaintenanceDTO.verifiedTime = params.verifiedtime;
            this.chargeMaintenanceDTO.verifiedStatus = params.verifiedstatus;
            this.chargeMaintenanceDTO.modNo = params.modno;
        });
        console.log(this.chargeMaintenanceDTO);
        this.commonAuditLog();
    }
    newRolePermissions() {
        this.roleService.fetchScreenPermissions('Charge Maintenance');
    }
    onSubmitEditChargeMaintenance() {
        console.log("This is Edit Charge Maintenance");
        this.editFlag = true;
        console.log(this.editFlag);
    }
    onSubmitChargeMaintenance() {
        console.log("This is Submit Charge Maintenance", this.chargeMaintenanceDTO);
        this.chargeMaintenanceService.submittingTheEditedRecord(this.chargeMaintenanceDTO, this.currentUser).subscribe(editScreenResp => {
            console.log(editScreenResp);
            this.chargeMaintenanceDTO = editScreenResp;
            console.log("this is edit response", this.chargeMaintenanceDTO);
            this.chargeMaintenanceDTO = editScreenResp;
            if (!this.chargeMaintenanceDTO) {
                {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        title: 'Cannot update the record',
                        type: "warning"
                    });
                }
            }
            else {
                {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                        title: 'Record Updated SuccesFully',
                    });
                }
            }
            this.commonAuditLog();
        });
        // this.editFlag=false;
        this.disableSubmit = true;
    }
    onAuthorizingTheRecord() {
        console.log("this is authorzation");
        this.chargeMaintenanceService.onAuthofChargeMaintenance(this.currentUser, this.chargeMaintenanceDTO.id).subscribe(authResp => {
            console.log(authResp);
            this.chargeMaintenanceDTO = authResp;
            console.log("This is Auth Response", this.chargeMaintenanceDTO);
            if (this.chargeMaintenanceDTO.inputBy != this.currentUser) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'You authorized the Record',
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Maker cannot authorize the record',
                    type: "warning"
                });
            }
            this.commonAuditLog();
        });
    }
    onClosingTheRecord() {
        console.log("this is close");
        this.chargeMaintenanceService.onClosingTheRecord(this.currentUser, this.chargeMaintenanceDTO.id).subscribe(closeResp => {
            console.log(closeResp);
            this.chargeMaintenanceDTO = closeResp;
            if (this.chargeMaintenanceDTO.verifiedStatus == 'U') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Unauthorize Record Cannot be Closed',
                    type: "warning"
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Record closed succefully',
                });
            }
            this.commonAuditLog();
        });
    }
    onReopningTheRecord() {
        console.log("this is reopen");
        this.chargeMaintenanceService.onReopningTheRecord(this.currentUser, this.chargeMaintenanceDTO.id).subscribe(reopnResp => {
            console.log(reopnResp);
            this.chargeMaintenanceDTO = reopnResp;
            if (this.chargeMaintenanceDTO.recordStatus == 'O') {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Record opened succefully',
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Record cannot be opened ',
                    type: "warning"
                });
            }
            this.commonAuditLog();
        });
    }
    onDeletingTheRecord() {
        console.log("this is delete");
        this.chargeMaintenanceService.onDeletTheRecord(this.currentUser, this.chargeMaintenanceDTO.id).subscribe(deleteResp => {
            console.log(deleteResp);
            this.chargeMaintenanceDTO = deleteResp;
            this.cdr.markForCheck();
            // console.log(this.chargeMaintenanceDTO.currency);
            if (this.chargeMaintenanceDTO.chargeAmount == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Record deleted succefully',
                });
            }
            else {
                this.cdr.markForCheck();
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Record cannot be Deleted ',
                    type: "warning"
                });
            }
        });
        this.router.navigateByUrl('/charge-maintenance');
    }
    commonAuditLog() {
        console.log("this is common audi log");
        if (this.chargeMaintenanceDTO.recordStatus == 'O') {
            this.chargeMaintenanceDTO.recordStatus = 'OPEN';
        }
        if (this.chargeMaintenanceDTO.recordStatus == 'C') {
            this.chargeMaintenanceDTO.recordStatus = 'CLOSE';
        }
        if (this.chargeMaintenanceDTO.verifiedStatus == 'U') {
            this.chargeMaintenanceDTO.verifiedStatus = 'UNAUTHORIZED';
        }
        if (this.chargeMaintenanceDTO.verifiedStatus == 'A') {
            this.chargeMaintenanceDTO.verifiedStatus = 'AUTHORIZED';
        }
        if (this.chargeMaintenanceDTO.verifiedOnce == 'Y') {
            this.chargeMaintenanceDTO.verifiedOnce = 'YES';
        }
        if (this.chargeMaintenanceDTO.verifiedOnce == 'N') {
            this.chargeMaintenanceDTO.verifiedOnce = 'NO';
        }
    }
    fun(extSysName) {
        console.log(extSysName);
        console.log("enters inside fn");
        const result = extSysName.trim();
        console.log(result);
        if (result) {
            console.log("valid string");
            this.space = true;
            console.log(this.space);
        }
        else {
            console.log("invalid string");
            this.space = false;
            // this.submitted = false;
            console.log(this.space);
        }
    }
    onNew() {
        this.editFlag = true;
        this.onlySubmit = false;
        this.router.navigateByUrl('/charge-maintenance/charge-maintenance-new');
    }
    fn1(value, percentage) {
        this.charge = true;
        console.log("charge amount value", value);
        console.log("percentage value", percentage);
        if (value != null || percentage != undefined || percentage != null) {
            this.charge = true;
        }
        else if (value == null || percentage == undefined || percentage == null) {
            this.charge = false;
        }
    }
    fn2(value, charge) {
        this.charge = true;
        console.log("percentage value", value);
        console.log("charge amount", charge);
        if (value != null || charge != undefined || charge != null) {
            this.charge = true;
            if (value > 100) {
                this.chargeMaintenanceDTO.chargePercentage = '100';
            }
            else if (value < 0) {
                this.chargeMaintenanceDTO.chargePercentage = '0';
            }
        }
        else if (value == null || charge == undefined || charge == null) {
            this.charge = false;
        }
    }
    fn3(value, percentage) {
        this.tax = true;
        console.log("charge amount value", value);
        console.log("percentage value", percentage);
        if (value != null || percentage != undefined || percentage != null) {
            this.tax = true;
        }
        else if (value == null || percentage == undefined || percentage == null) {
            this.tax = false;
        }
    }
    fn4(value, tax) {
        this.tax = true;
        console.log("percentage value", value);
        console.log("charge amount", tax);
        if (value != null || tax != undefined || tax != null) {
            this.tax = true;
            if (value > 100) {
                this.chargeMaintenanceDTO.taxPercentage = '100';
            }
            else if (value < 0) {
                this.chargeMaintenanceDTO.taxPercentage = '0';
            }
        }
        else if (value == null || tax == undefined || tax == null) {
            this.tax = false;
        }
    }
};
ChargeMaintenanceComponent.ctorParameters = () => [
    { type: _charge_maintenance_service_service__WEBPACK_IMPORTED_MODULE_3__["ChargeMaintenanceServiceService"] },
    { type: _roles1_roles_service__WEBPACK_IMPORTED_MODULE_7__["RoleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
ChargeMaintenanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-charge-maintenance',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./charge-maintenance.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/charge-maintenance/charge-maintenance.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./charge-maintenance.component.css */ "./src/app/views/charge-maintenance/charge-maintenance.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_charge_maintenance_service_service__WEBPACK_IMPORTED_MODULE_3__["ChargeMaintenanceServiceService"], _roles1_roles_service__WEBPACK_IMPORTED_MODULE_7__["RoleService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], ChargeMaintenanceComponent);



/***/ }),

/***/ "./src/app/views/charge-maintenance/charge-maintenance.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/charge-maintenance/charge-maintenance.module.ts ***!
  \***********************************************************************/
/*! exports provided: ChargeMaintenanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChargeMaintenanceModule", function() { return ChargeMaintenanceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _charge_maintenance_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./charge-maintenance-routing.module */ "./src/app/views/charge-maintenance/charge-maintenance-routing.module.ts");
/* harmony import */ var _charge_maintenance_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./charge-maintenance.component */ "./src/app/views/charge-maintenance/charge-maintenance.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/angular-material/angular-material.module */ "./src/app/shared/angular-material/angular-material.module.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _charge_maintenance_new_charge_maintenance_new_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./charge-maintenance-new/charge-maintenance-new.component */ "./src/app/views/charge-maintenance/charge-maintenance-new/charge-maintenance-new.component.ts");
/* harmony import */ var _charge_maintenance_summary_charge_maintenance_summary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./charge-maintenance-summary/charge-maintenance-summary.component */ "./src/app/views/charge-maintenance/charge-maintenance-summary/charge-maintenance-summary.component.ts");












let ChargeMaintenanceModule = class ChargeMaintenanceModule {
};
ChargeMaintenanceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_charge_maintenance_component__WEBPACK_IMPORTED_MODULE_4__["ChargeMaintenanceComponent"], _charge_maintenance_new_charge_maintenance_new_component__WEBPACK_IMPORTED_MODULE_10__["ChargeMaintenanceNewComponent"], _charge_maintenance_summary_charge_maintenance_summary_component__WEBPACK_IMPORTED_MODULE_11__["ChargeMaintenanceSummaryComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__["NgxSpinnerModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_9__["FlexLayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_charge_maintenance_routing_module__WEBPACK_IMPORTED_MODULE_3__["chargeMaintenanceroutes"]),
        ]
    })
], ChargeMaintenanceModule);



/***/ }),

/***/ "./src/app/views/charge-maintenance/chargeMaintenanceDTO.ts":
/*!******************************************************************!*\
  !*** ./src/app/views/charge-maintenance/chargeMaintenanceDTO.ts ***!
  \******************************************************************/
/*! exports provided: chargeMaintenanceDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chargeMaintenanceDTO", function() { return chargeMaintenanceDTO; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class chargeMaintenanceDTO {
}


/***/ })

}]);
//# sourceMappingURL=views-charge-maintenance-charge-maintenance-module-es2015.js.map