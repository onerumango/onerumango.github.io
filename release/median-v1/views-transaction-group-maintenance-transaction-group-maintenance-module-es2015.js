(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-transaction-group-maintenance-transaction-group-maintenance-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/transaction-group-maintenance/trans-group-summary/trans-group-summary.component.html":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/transaction-group-maintenance/trans-group-summary/trans-group-summary.component.html ***!
  \**************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n      <span>Transaction Code Maintenance Summary</span>\r\n    </mat-toolbar>\r\n    <div>\r\n      <br>\r\n        <div style=\"text-align: end\">\r\n            <button mat-raised-button color=\"primary\"\r\n          routerLink=\"/transaction-group-maintenance/transaction-group-new\">New</button>&nbsp;\r\n        <button mat-raised-button  color=\"warn\" routerLink='/dashboard'>Exit</button>\r\n        </div>\r\n      <mat-card>\r\n      \r\n  \r\n        <!-- <mat-form-field appearance=\"outline\" style=\"width:150px;font-size: 10px\">\r\n               <mat-label>UserId</mat-label>\r\n               <mat-select name=\"UserId\" [(ngModel)]=\"UserId\">\r\n                 <mat-option *ngFor=\"let UserId of userData\" [value]=\"UserId\" >{{UserId}} </mat-option>\r\n               </mat-select>\r\n              \r\n             </mat-form-field> -->\r\n         <mat-form-field appearance=\"outline\" style=\"width:150px;font-size: 10px\">\r\n              <mat-label>User Id</mat-label>\r\n               <!-- (keyup.enter)=\"sendit($event.target.value)\" -->\r\n               <!-- (optionSelected)='getUser($event.option.value)' and onKey ($event)added by gayathri on 24th aug -->\r\n         <input type=\"text\" matInput [(ngModel)]=\"UserId\" (keydown)=\"onKey($event)\" \r\n              [matAutocomplete]=\"auto\" oninput=\"this.value = this.value.toUpperCase()\">\r\n              <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)='getUser($event.option.value)'  > \r\n        <!-- -->\r\n       <mat-option *ngFor=\"let UserId of userData \" [value]=\"UserId\" >\r\n                {{UserId}} </mat-option>\r\n               </mat-autocomplete>\r\n          </mat-form-field>\r\n          <div >\r\n            <button color=\"primary\" (click)=\"getTrndata()\" [disabled]=\"enabled\" mat-raised-button>Get Transaction</button>\r\n           </div>\r\n           \r\n  \r\n        <div class=\"mat-elevation-z8\">\r\n          <table mat-table [dataSource]=\"dataSource\" matSort matSortActive=\"creatorDtStamp\" matSortDirection=\"desc\">\r\n  \r\n            <!-- ID Column -->\r\n            <ng-container matColumnDef=\"userId\">\r\n              <th mat-header-cell *matHeaderCellDef> User Id </th>\r\n              <td mat-cell *matCellDef=\"let row\"> <a routerLink=\"/transaction-group-maintenance/transaction-group-edit\"\r\n                  (click)=\"modify(row)\">{{row.userId}}</a> </td>\r\n            </ng-container>\r\n  \r\n            <!-- Progress Column -->\r\n            <ng-container matColumnDef=\"trnCode\">\r\n              <th mat-header-cell *matHeaderCellDef> Status </th>\r\n              <td mat-cell *matCellDef=\"let row\"> {{row.verifiedStatus}} </td>\r\n            </ng-container>\r\n  \r\n            <!-- Name Column -->\r\n            <ng-container matColumnDef=\"trnDesc\">\r\n              <th mat-header-cell *matHeaderCellDef mat-sort-header> Date </th>\r\n              <td mat-cell *matCellDef=\"let row\"> {{row.creatorDtStamp|date}} </td>\r\n            </ng-container>\r\n            <!-- <ng-container matColumnDef=\"action\">\r\n                    <th mat-header-cell *matHeaderCellDef > Action </th>\r\n                    <td mat-cell *matCellDef=\"let row\"> <button mat-raised-button color=\"warn\" (click)=deleteData(row)>delete</button></td>    \r\n                  </ng-container> -->\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n            </tr>\r\n          </table>\r\n  \r\n          <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n        </div>\r\n      </mat-card>\r\n  \r\n    </div>\r\n  </div>\r\n  \r\n   <br><br><br><br><br><br>\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/transaction-group-maintenance/transaction-group-maintenance-edit/transaction-group-maintenance-edit.component.html":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/transaction-group-maintenance/transaction-group-maintenance-edit/transaction-group-maintenance-edit.component.html ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n        <div>\r\n          <mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n            <!-- <span>Transaction Group Maintenance </span> -->\r\n            <span>Transaction Code Maintenance </span>\r\n          </mat-toolbar>\r\n        </div>\r\n        <mat-card class=\"secondMatCard\">\r\n                <mat-card-content style=\"text-align: center\">\r\n                  <form #fn=\"ngForm\" novalidate>\r\n                   <mat-form-field appearance=\"outline\" style=\"width:150px;font-size: 10px\">\r\n                    <!-- <mat-label style=\"color: black\">UserId</mat-label> -->\r\n                    <!-- <mat-select [(value)]=\"selected\" > -->\r\n                      <!-- <mat-option value=\"user_Id\">{{UserId}}</mat-option>\r\n                    </mat-select>\r\n                   </mat-form-field> -->\r\n                  <input  matInput type=\"text\" required *ngIf=\"!editFlag\" readonly>\r\n                  {{UserId}}\r\n                  <mat-select [(value)]=\"selected\" *ngIf=\"editFlag\" readonly > \r\n                       <mat-option>{{UserId}}</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n                   \r\n          \r\n                  \r\n                  \r\n                <table style=\"margin-left: 50px\">\r\n                    <tbody>\r\n            \r\n                      <tr>\r\n            \r\n                        <section  *ngFor=\"let dataOfchargeDetail of trnData;let i=index\">\r\n                          <td style=\"margin-left: 50px\">\r\n                            <mat-form-field  class=\"full-width\" appearance=\"outline\" style=\"width:150px;font-size: 10px\">\r\n                              <mat-label>Transaction Description</mat-label>\r\n                              <input  matInput type=\"text\" required placeholder=\"Transaction Description\"\r\n                             name=\"trnDesc_{{i}}\" \r\n                              [(ngModel)]=\"dataOfchargeDetail.trnDesc\" #trnDesc=\"ngModel\" [readonly]=\"!editFlag\">\r\n                            </mat-form-field>\r\n                              <div *ngIf=\"trnDesc.touched\">\r\n                              <p *ngIf=\"trnDesc.errors?.required\" style=\"color: red; font-size: 9px\"> Transaction Description is\r\n                                Required!</p>\r\n                            </div>\r\n                          </td>\r\n                \r\n            \r\n                          <td>\r\n                            <mat-form-field class=\"full-width\" appearance=\"outline\" style=\"width:150px;font-size: 10px\">\r\n                              <mat-label>Transaction Code</mat-label>\r\n                              <input matInput type=\"text\" required placeholder=\"Transaction Code\"\r\n                             name=\"trnCode_{{i}}\" \r\n                              [(ngModel)]=\"dataOfchargeDetail.trnCode\" #trnCode=\"ngModel\" [readonly]=\"!editFlag\" >\r\n                            </mat-form-field>\r\n                            <div *ngIf=\"trnCode.touched\">\r\n                              <p *ngIf=\"trnCode.errors?.required\" style=\"color: red; font-size: 9px\"> Transaction Code is Required!\r\n                              </p>\r\n                            </div>\r\n                          </td>\r\n            \r\n            \r\n            \r\n                          <td>\r\n                            <button type=\"button\" class=\"btn b\" (click)=\"delete(i)\"\r\n                            (click)=\"removeDataOfTransactionGroup(i)\" [disabled]=\"!editFlag\">\r\n                              <mat-icon>delete</mat-icon>\r\n                            </button>\r\n            \r\n                          </td>\r\n            \r\n                        </section>\r\n                      </tr>\r\n                      <button type=\"button\" class=\"btn\" (click)=\"addAccClass()\" style=\"margin-left: 300px\" [disabled]=\"!editFlag\">\r\n                        <mat-icon>add_box</mat-icon>\r\n                      </button>\r\n                      <br> <br>\r\n                      <!-- <div>\r\n                        <button  mat-raised-button color=\"primary\" routerLink=\"/transaction-group-maintenance/transaction-group-new\" *ngIf=\"!editFlag\">New</button>\r\n                       &nbsp;\r\n                        <button mat-raised-button color=\"primary\" type=\"submit\" value=\"Submit\"\r\n                          (click)=\"modify(UserId)\" *ngIf=\"editFlag\" [disabled]=\"disablesubmit\">Submit</button>\r\n                          &nbsp;\r\n\r\n                        <button mat-raised-button color=\"warn\" routerLink=\"/transaction-group-maintenance\">Exit</button>\r\n                        &nbsp;\r\n                                                                                                                \r\n             \r\n                        <button mat-raised-button color=\"primary\" type=\"submit\" value=\"Submit\"\r\n                        (click)=\"enableEditFlag()\" *ngIf=\"!editFlag && roleCodes.edit \">{{roleCodes.edit.labelDescription}}</button>\r\n                        &nbsp;\r\n                        <button mat-raised-button color=\"primary\" type=\"submit\" value=\"Submit\"\r\n                        (click)=\"onclickOfCloseOfPurgingEdit()\" *ngIf=\"master.recordStatus =='O' && !editFlag && roleCodes.close\">{{roleCodes.close.labelDescription}}</button>\r\n                        &nbsp;\r\n                        <button mat-raised-button color=\"primary\" type=\"submit\" value=\"Submit\"\r\n                        (click)=\"onclickOfReopenOfPurgingEdit()\" *ngIf=\"master.recordStatus =='C' && !editFlag && roleCodes.reopen\">{{roleCodes.reopen.labelDescription}}</button>\r\n                        &nbsp;\r\n                        <br><br>\r\n                        <button mat-raised-button color=\"primary\" type=\"submit\" value=\"Submit\"\r\n                        (click)=\"onClickOfAuthOfPurgingEdit()\" *ngIf=\"master.verifiedStatus=='U'&& !editFlag\">Auth</button>\r\n                        &nbsp;\r\n                        <button mat-raised-button color=\"warn\"\r\n                        *ngIf=\"master.verifiedOnce == 'N' && !editFlag && roleCodes.delete\"\r\n                        (click)=\"onClickOfDeleteOfModifyUser(UserId)\" > {{roleCodes.delete.labelDescription}} </button>&nbsp;\r\n                        \r\n                    \r\n                        \r\n                        \r\n                         <button mat-raised-button color=\"warn\" routerLink=\"/transaction-group-maintenance\">Exit</button>\r\n                      \r\n                      </div>-->\r\n                      <div>\r\n                          <button  mat-raised-button color=\"primary\" routerLink=\"/transaction-group-maintenance/transaction-group-new\" *ngIf=\"!editFlag\">New</button>\r\n                         &nbsp;\r\n                          <!-- <button mat-raised-button color=\"primary\" type=\"submit\" value=\"Submit\"\r\n                            (click)=\"modify(UserId)\" *ngIf=\"editFlag\" [disabled]=\"!fn.form.valid\">Submit</button>\r\n                            &nbsp; -->\r\n                            <!-- disablesubmit added by vidya for issue id 583 -->\r\n                            <button mat-raised-button color=\"primary\" type=\"submit\" value=\"Submit\"\r\n                            (click)=\"modify(UserId)\" *ngIf=\"editFlag\" [disabled]=\"!fn.form.valid ||disablesubmit\">Submit</button>\r\n                            &nbsp;\r\n  \r\n                          \r\n                                                                                                                  \r\n                          \r\n                          <button mat-raised-button color=\"primary\" type=\"submit\" value=\"Submit\"\r\n                          (click)=\"enableEditFlag()\" *ngIf=\"!editFlag && roleCodes.edit && master.recordStatus == 'O'\">{{roleCodes.edit.labelDescription}}</button>\r\n                          &nbsp;\r\n                          <button mat-raised-button color=\"primary\" type=\"submit\" value=\"Submit\"\r\n                          (click)=\"onClickOfAuthOfPurgingEdit()\" *ngIf=\"master.verifiedStatus=='U'&& !editFlag\">Auth</button>\r\n                          &nbsp;\r\n                          <button mat-raised-button color=\"primary\" type=\"submit\" value=\"Submit\"\r\n                          (click)=\"onclickOfCloseOfPurgingEdit()\" *ngIf=\"master.recordStatus =='O' && !editFlag && master.verifiedOnce=='Y'&& roleCodes.close\">{{roleCodes.close.labelDescription}}</button>\r\n                          &nbsp;\r\n                         \r\n                       \r\n                          <button mat-raised-button color=\"primary\" type=\"submit\" value=\"Submit\"\r\n                          (click)=\"onclickOfReopenOfPurgingEdit()\" *ngIf=\"master.recordStatus =='C' && !editFlag && master.verifiedStatus=='A' && roleCodes.reopen\">{{roleCodes.reopen.labelDescription}}</button>\r\n                          &nbsp;\r\n                          \r\n                          \r\n                          <button mat-raised-button color=\"warn\"  \r\n                          *ngIf=\"master.verifiedOnce == 'N' && !editFlag && roleCodes.delete\"\r\n                          (click)=\"onClickOfDeleteOfModifyUser(UserId)\" > {{roleCodes.delete.labelDescription}} </button>&nbsp;\r\n                          \r\n                      \r\n                          \r\n                          \r\n                          <!-- <button mat-raised-button color=\"warn\" routerLink=\"/transaction-group-maintenance\">Exit</button> -->\r\n                          <button mat-raised-button color=\"warn\" routerLink=\"/transaction-group-maintenance\">Exit</button>\r\n                        </div>\r\n                    </tbody>\r\n                  </table>\r\n                </form>\r\n          \r\n              </mat-card-content>\r\n              </mat-card>\r\n</div>\r\n\r\n\r\n<br>\r\n<div fxLayout=\"row\">\r\n  <div fxFlex></div>\r\n  <div fxFlex=\"95\">\r\n    <mat-card style=\"width: 60%;  margin-left:160px;\">\r\n      <mat-card-title>\r\n\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n        <div fxLayout=\"row\">\r\n\r\n          <table id=\"customers\">\r\n            <tr>\r\n              <th>Record Status:</th>\r\n              <td>\r\n                <mat-chip>{{master.recordStatus}}</mat-chip>\r\n              </td>\r\n              <th>Input By:</th>\r\n              <td>\r\n                <mat-chip>{{master.creatorId}}</mat-chip>\r\n              </td>\r\n              <th>Verified By:</th>\r\n              <td>\r\n                <mat-chip>{{master.verifierId}}</mat-chip>\r\n              </td>\r\n              <th>Verified Once:</th>\r\n              <td>\r\n                <mat-chip>{{master.verifiedOnce}}</mat-chip>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <th>Modification No:</th>\r\n              <td>\r\n                <mat-chip>{{master.modNo}}</mat-chip>\r\n              </td>\r\n              <th>Input Date:</th>\r\n              <td>\r\n                <mat-chip>{{master.creatorDtStamp | date: 'MM/dd/yyyy, h:mm a'}}</mat-chip>\r\n              </td>\r\n              <th>Verified Date:</th>\r\n              <td>\r\n                <mat-chip>{{master.verifierDtStamp | date: 'MM/dd/yyyy, h:mm a'}}</mat-chip>\r\n              </td>\r\n\r\n              <th>Verified Status:</th>\r\n              <td>\r\n                <mat-chip>{{master.verifiedStatus}}</mat-chip>\r\n              </td>\r\n\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n<br><br><br><br>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/transaction-group-maintenance/transaction-group-new/transaction-group-new.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/transaction-group-maintenance/transaction-group-new/transaction-group-new.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n  <div>\r\n    <mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n      <span>Transaction Code Maintenance </span>\r\n    </mat-toolbar>\r\n  </div>\r\n\r\n  <mat-card class=\"secondMatCard\">\r\n    <mat-toolbar>Transaction Code For User</mat-toolbar>\r\n    <mat-card-content>\r\n        <form #fn=\"ngForm\" novalidate>\r\n      <!-- <mat-form-field appearance=\"outline\" style=\"font-size: 10px\">\r\n        <mat-label>UserId</mat-label>\r\n        <mat-select name=\"UserId\" [(ngModel)]=\"UserId\">\r\n          <mat-option *ngFor=\"let UserId of userName\" [value]=\"UserId\"> {{UserId}}\r\n          </mat-option>\r\n        </mat-select>\r\n\r\n      </mat-form-field> -->\r\n\r\n      <mat-form-field appearance=\"outline\" style=\"font-size: 10px\">\r\n        <mat-label> \r\n           User Id\r\n        </mat-label>\r\n        <input type=\"text\" matInput [(ngModel)]=\"UserId\" (keyup)=\"keyPress($event.target.value)\" (keyup)=\"validateuserId()\"  [matAutocomplete]=\"auto\"\r\n          placeholder=\"UserId\" name=\"UserId\" oninput=\"this.value = this.value.toUpperCase()\">\r\n\r\n        <mat-autocomplete #auto=\"matAutocomplete\">\r\n          <mat-option *ngFor=\"let UserId of usersList\" [value]=\"UserId\" (click)=\"check()\">\r\n            {{ UserId }}\r\n          </mat-option>\r\n        </mat-autocomplete>\r\n      </mat-form-field>\r\n\r\n      <table>\r\n        <tbody>\r\n\r\n          <tr>\r\n\r\n            <section *ngFor=\"let address of transactionGroupEntries; let i = index;\">\r\n              <td>\r\n                <mat-form-field appearance=\"outline\" style=\"width:150px;font-size: 10px\">\r\n                  <mat-label>Transaction Description</mat-label>\r\n                  <input matInput type=\"text\" required placeholder=\"Transaction Description\" name=\"address_{{i}}\"\r\n                    [(ngModel)]=\"address.trnDesc\" #trnDesc=\"ngModel\">\r\n                </mat-form-field>\r\n                <div *ngIf=\"trnDesc.touched\">\r\n                  <p *ngIf=\"trnDesc.errors?.required\" style=\"color: red; font-size: 9px\"> Transaction Description is\r\n                    Required!</p>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <mat-form-field class=\"full-width\" appearance=\"outline\" style=\"width:150px;font-size: 10px\">\r\n                  <mat-label>Transaction Code</mat-label>\r\n                  <input matInput type=\"text\" required placeholder=\"Transaction Code\" name=\"address1_{{i}}\"\r\n                    [(ngModel)]=\"address.trnCode\" #trnCode=\"ngModel\">\r\n                </mat-form-field>\r\n                <div *ngIf=\"trnCode.touched\">\r\n                  <p *ngIf=\"trnCode.errors?.required\" style=\"color: red; font-size: 9px\"> Transaction Code is Required!\r\n                  </p>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <button type=\"button\" class=\"btn b\"\r\n                  (click)=\"removeDataOfTransactionGroup(i,address.transactionDescription)\">\r\n                  <mat-icon>delete</mat-icon>\r\n                </button>\r\n              </td>\r\n            </section>\r\n          </tr>\r\n          <button type=\"button\" class=\"btn\" (click)=\"addDataOfTransactionGroupEntries()\" style=\"margin-left: 300px\">\r\n            <mat-icon>add_box</mat-icon>\r\n          </button>\r\n\r\n          <div style=\"text-align: center;\">\r\n            <button mat-raised-button color=\"primary\" type=\"submit\" value=\"Submit\"\r\n              (click)=\"onSubmitOfTransactionGroup(UserId)\" [disabled]=\"!fn.form.valid||disblesubmit||!space\">Submit</button>\r\n            &nbsp;\r\n            <button mat-raised-button color=\"warn\" routerLink=\"/transaction-group-maintenance\">Exit</button>\r\n            <!-- <button mat-raised-button color=\"warn\" routerLink=\"/transaction-group-maintenance/transaction-group-edit\">Exit</button> -->\r\n          </div>\r\n        </tbody>\r\n      </table>\r\n    </form>\r\n\r\n    </mat-card-content>\r\n  </mat-card>\r\n\r\n  <mat-card class=\"secondMatCard\" *ngIf>\r\n    <mat-toolbar>GL Code Maintenance</mat-toolbar>\r\n    <mat-card-content>\r\n\r\n      <mat-form-field appearance=\"outline\" style=\"font-size: 10px\">\r\n        <mat-label>User Id</mat-label>\r\n        <mat-select name=\"UserId\" [(ngModel)]=\"UserId\" >\r\n          <mat-option *ngFor=\"let UserId of userName\" [value]=\"UserId\"> {{UserId}}\r\n          </mat-option>\r\n        </mat-select>\r\n\r\n      </mat-form-field>\r\n\r\n      <table>\r\n        <tbody>\r\n\r\n          <tr>\r\n\r\n            <section *ngFor=\"let gl of gllist; let i = index;\">\r\n              <td>\r\n                <mat-form-field appearance=\"outline\" style=\"width:150px;font-size: 10px\">\r\n                  <mat-label>GL Code Description</mat-label>\r\n                  <input matInput type=\"text\" required placeholder=\"Transaction Description\" name=\"address_{{i}}\"\r\n                    [(ngModel)]=\"gl.trnDesc\" #trnDesc=\"ngModel\">\r\n                </mat-form-field>\r\n                <div *ngIf=\"trnDesc.touched\">\r\n                  <p *ngIf=\"trnDesc.errors?.required\" style=\"color: red; font-size: 9px\"> Transaction Description is\r\n                    Required!</p>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <mat-form-field class=\"full-width\" appearance=\"outline\" style=\"width:150px;font-size: 10px\">\r\n                  <mat-label>GL Code</mat-label>\r\n                  <input matInput type=\"text\" required placeholder=\"Transaction Code\" name=\"address_{{i}}\"\r\n                    [(ngModel)]=\"gl.trnCode\" #trnCode=\"ngModel\">\r\n                </mat-form-field>\r\n                <div *ngIf=\"trnCode.touched\">\r\n                  <p *ngIf=\"trnCode.errors?.required\" style=\"color: red; font-size: 9px\"> Transaction Code is Required!\r\n                  </p>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <button type=\"button\" class=\"btn b\" (click)=\"removegllist(i,gl.transactionDescription)\">\r\n                  <mat-icon>delete</mat-icon>\r\n                </button>\r\n              </td>\r\n            </section>\r\n          </tr>\r\n          <button type=\"button\" class=\"btn\" (click)=\"addgllist()\" style=\"margin-left: 300px\">\r\n            <mat-icon>add_box</mat-icon>\r\n          </button>\r\n\r\n          <div style=\"text-align: center;\">\r\n            <button mat-raised-button color=\"primary\" type=\"submit\" value=\"Submit\"\r\n              (click)=\"onSubmitGLCode()\">Submit</button>\r\n            &nbsp;\r\n            <button mat-raised-button color=\"warn\" routerLink=\"/transaction-group-maintenance\">Exit</button>\r\n            <!-- <button mat-raised-button color=\"warn\" routerLink=\"/transaction-group-maintenance/transaction-group-edit\">Exit</button> -->\r\n          </div>\r\n        </tbody>\r\n      </table>\r\n\r\n\r\n    </mat-card-content>\r\n  </mat-card>\r\n\r\n  <mat-card class=\"secondMatCard\" *ngIf>\r\n    <mat-toolbar>Account Class Maintence</mat-toolbar>\r\n    <mat-card-content>\r\n\r\n      <mat-form-field appearance=\"outline\" style=\"font-size: 10px\">\r\n        <mat-label>UserId</mat-label>\r\n        <mat-select name=\"UserId\" [(ngModel)]=\"UserId\">\r\n          <mat-option *ngFor=\"let UserId of userName\" [value]=\"UserId\"> {{UserId}}\r\n          </mat-option>\r\n        </mat-select>\r\n\r\n      </mat-form-field>\r\n\r\n      <table>\r\n        <tbody>\r\n\r\n          <tr>\r\n\r\n            <section *ngFor=\"let address of AccClass; let i = index;\">\r\n              <td>\r\n                <mat-form-field appearance=\"outline\" style=\"width:150px;font-size: 10px\">\r\n                  <mat-label>Account Class Description</mat-label>\r\n                  <input matInput type=\"text\" required placeholder=\"Transaction Description\" name=\"address_{{i}}\"\r\n                    [(ngModel)]=\"address.trnDesc\" #trnDesc=\"ngModel\">\r\n                </mat-form-field>\r\n                <div *ngIf=\"trnDesc.touched\">\r\n                  <p *ngIf=\"trnDesc.errors?.required\" style=\"color: red; font-size: 9px\"> Transaction Description is\r\n                    Required!</p>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <mat-form-field class=\"full-width\" appearance=\"outline\" style=\"width:150px;font-size: 10px\">\r\n                  <mat-label>Account Class </mat-label>\r\n                  <input matInput type=\"text\" required placeholder=\"Transaction Code\" name=\"address_{{i}}\"\r\n                    [(ngModel)]=\"address.trnCode\" #trnCode=\"ngModel\">\r\n                </mat-form-field>\r\n                <div *ngIf=\"trnCode.touched\">\r\n                  <p *ngIf=\"trnCode.errors?.required\" style=\"color: red; font-size: 9px\"> Transaction Code is Required!\r\n                  </p>\r\n                </div>\r\n              </td>\r\n              <td>\r\n                <button type=\"button\" class=\"btn b\" (click)=\"removeaddAccClass(i,address.transactionDescription)\">\r\n                  <mat-icon>delete</mat-icon>\r\n                </button>\r\n              </td>\r\n            </section>\r\n          </tr>\r\n          <button type=\"button\" class=\"btn\" (click)=\"addAccClass()\" style=\"margin-left: 300px\">\r\n            <mat-icon>add_box</mat-icon>\r\n          </button>\r\n\r\n          <div style=\"text-align: center;\">\r\n            <button mat-raised-button color=\"primary\" type=\"submit\" value=\"Submit\"\r\n              (click)=\"onSubmitActClass()\" [disabled]=\"!space\">Submit</button>\r\n            &nbsp;\r\n            <button mat-raised-button color=\"warn\" routerLink=\"/transaction-group-maintenance\">Exit</button>\r\n            <!-- <button mat-raised-button color=\"warn\" routerLink=\"/transaction-group-maintenance/transaction-group-edit\">Exit</button> -->\r\n          </div>\r\n        </tbody>\r\n      </table>\r\n\r\n\r\n    </mat-card-content>\r\n  </mat-card>\r\n\r\n\r\n</div>\r\n<br><br><br>\r\n<div fxLayout=\"row\" *ngIf>\r\n  <div fxFlex></div>\r\n  <div fxFlex=\"95\">\r\n    <mat-card style=\"width: 70%;  margin-left:20%;\">\r\n      <mat-card-title>\r\n\r\n      </mat-card-title>\r\n      <mat-card-content style=\" margin-left:-25%;\">\r\n        <div fxLayout=\"row\">\r\n\r\n          <table id=\"customers\">\r\n            <tr>\r\n              <th>Record Status:</th>\r\n              <td>\r\n                <!-- <mat-chip>{{fetchUserSingle.recordStatus}}</mat-chip> -->\r\n\r\n              </td>\r\n              <th>Auth Status:</th>\r\n              <td>\r\n\r\n                <!-- <mat-chip >{{fetchUserSingle.verifiedStatus}}</mat-chip> -->\r\n\r\n              </td>\r\n              <th>Input By:</th>\r\n              <td>\r\n\r\n                <!-- <mat-chip >{{fetchUserSingle.inputBy}}</mat-chip> -->\r\n              </td>\r\n              <th>Input Date:</th>\r\n              <td>\r\n\r\n                <!-- <mat-chip>{{fetchUserSingle.inputTime | date}}</mat-chip> -->\r\n              </td>\r\n\r\n            </tr>\r\n            <tr>\r\n              <th>Modification No:</th>\r\n              <td>\r\n                <!-- /   <mat-chip >{{fetchUserSingle.modNo}}</mat-chip> -->\r\n              </td>\r\n              <!-- <th>Creation Date:</th>\r\n                              <td>\r\n                                <mat-chip>{{masterresponse.modifiedTime | date:'d/M/yy'}}</mat-chip>\r\n                              </td> -->\r\n              <th>Authorized Date:</th>\r\n              <td>\r\n                <!-- <mat-chip >{{fetchUserSingle.verifiedTime | date:'d/M/yy'}}</mat-chip> -->\r\n              </td>\r\n              <th> Frist Auth Status:</th>\r\n              <td>\r\n\r\n                <!-- <mat-chip >{{fetchUserSingle.verifiedOnce}}</mat-chip> -->\r\n\r\n              </td>\r\n              <th>Authorized By:</th>\r\n              <td>\r\n                <!-- <mat-chip >{{fetchUserSingle.verifiedBy}}</mat-chip> -->\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n  <div fxFlex></div>\r\n\r\n</div>\r\n<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>");

/***/ }),

/***/ "./src/app/views/transaction-group-maintenance/trans-group-summary/trans-group-summary.component.css":
/*!***********************************************************************************************************!*\
  !*** ./src/app/views/transaction-group-maintenance/trans-group-summary/trans-group-summary.component.css ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  \r\ntable {\r\n  border-collapse: initial;\r\n  width:100%;\r\n  text-align: center !important;\r\n}\r\n:host ::ng-deep .mat-sort-header-container { \r\n  display: flex;  \r\n  justify-content: center; \r\n}\r\nth.mat-header-cell, td.mat-cell { \r\n  text-align: center; \r\n}\r\n.mat-raised-button {\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n  height: 20px;\r\n  line-height: 27px;\r\n  min-height: 27px;\r\n  vertical-align: top;\r\n  font-size: 11px;\r\n  padding: 0 0;\r\n  margin: 0;\r\n}\r\n.mat-header-cell {\r\n  text-align: center;\r\n  height: 25px !important;\r\n\r\n}\r\n.mat-cell {\r\n  text-align: center;\r\n  height: 25px !important;\r\n\r\n}\r\ntr:nth-child(even) {\r\n  height: 25px !important;\r\n}\r\nth {\r\n  font-weight: small;\r\n  height: 25px !important;\r\n  text-align: center;\r\n}\r\ntr {\r\n  font-weight: small;\r\n  height: 25px !important;\r\n  text-align: center;\r\n}\r\nmat-paginator {\r\n  width: auto !important;\r\n  height: 40px !important;\r\n}\r\nmd-pagination-wrapper {\r\n  width: auto !important;\r\n  height: 40px !important;\r\n}\r\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {\r\n  color: black !important;\r\n}\r\nmat-label\r\n{\r\n  font-size: 12px;\r\n  color: black;\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdHJhbnNhY3Rpb24tZ3JvdXAtbWFpbnRlbmFuY2UvdHJhbnMtZ3JvdXAtc3VtbWFyeS90cmFucy1ncm91cC1zdW1tYXJ5LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLFVBQVU7RUFDViw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsMEJBQWtCO0VBQWxCLHVCQUFrQjtFQUFsQixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixZQUFZO0VBQ1osU0FBUztBQUNYO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCOztBQUV6QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1Qjs7QUFFekI7QUFHQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTs7RUFFRSxlQUFlO0VBQ2YsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvdHJhbnNhY3Rpb24tZ3JvdXAtbWFpbnRlbmFuY2UvdHJhbnMtZ3JvdXAtc3VtbWFyeS90cmFucy1ncm91cC1zdW1tYXJ5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgIFxyXG50YWJsZSB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBpbml0aWFsO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIC5tYXQtc29ydC1oZWFkZXItY29udGFpbmVyIHsgXHJcbiAgZGlzcGxheTogZmxleDsgIFxyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyBcclxufVxyXG5cclxudGgubWF0LWhlYWRlci1jZWxsLCB0ZC5tYXQtY2VsbCB7IFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbn1cclxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gIG1pbi1oZWlnaHQ6IDI3cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgcGFkZGluZzogMCAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4ubWF0LWhlYWRlci1jZWxsIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4ubWF0LWNlbGwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcblxyXG50cjpudGgtY2hpbGQoZXZlbikge1xyXG4gIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG50aCB7XHJcbiAgZm9udC13ZWlnaHQ6IHNtYWxsO1xyXG4gIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG50ciB7XHJcbiAgZm9udC13ZWlnaHQ6IHNtYWxsO1xyXG4gIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5tYXQtcGFnaW5hdG9yIHtcclxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tZC1wYWdpbmF0aW9uLXdyYXBwZXIge1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxufVxyXG5tYXQtbGFiZWxcclxue1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/views/transaction-group-maintenance/trans-group-summary/trans-group-summary.component.ts":
/*!**********************************************************************************************************!*\
  !*** ./src/app/views/transaction-group-maintenance/trans-group-summary/trans-group-summary.component.ts ***!
  \**********************************************************************************************************/
/*! exports provided: TransGroupSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransGroupSummaryComponent", function() { return TransGroupSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _transaction_group_maintenance_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../transaction-group-maintenance-service.service */ "./src/app/views/transaction-group-maintenance/transaction-group-maintenance-service.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _roles1_roles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../roles1/roles.service */ "./src/app/views/roles1/roles.service.ts");







let TransGroupSummaryComponent = class TransGroupSummaryComponent {
    constructor(transactionGroupService, roleService, route, ref) {
        this.transactionGroupService = transactionGroupService;
        this.roleService = roleService;
        this.route = route;
        this.ref = ref;
        this.enabled = true;
        this.displayedColumns = ['userId', 'trnCode', 'trnDesc'];
    }
    ngOnInit() {
        this.getUserIdOnNgOnInit();
        this.enabled = true;
        this.getUserId();
        this.getSummary();
        setTimeout(() => {
            this.newRolePermissions();
        }, 2000);
    }
    getUserIdOnNgOnInit() {
        this.transactionGroupService.getUserName().subscribe(userData => {
            this.userData = userData;
            console.log(this.userData);
        });
    }
    getUserId() {
        this.transactionGroupService.getUserName().subscribe(userData => {
            this.userData = userData;
            console.log(this.userData);
        });
    }
    getSummary() {
        this.transactionGroupService.getSummary().subscribe(resp => {
            console.log(resp);
            this.trndata = resp;
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](resp);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
        });
    }
    newRolePermissions() {
        this.roleService.fetchScreenPermissions('External Systems');
    }
    getTrndata() {
        this.transactionGroupService.getUserIdTrnData(this.UserId).subscribe(trndata => {
            this.trndata = trndata;
            console.log(this.trndata);
            if (this.trndata.length !== 0) {
                this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.trndata);
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('No transaction code mapped for this user.');
            }
        });
    }
    // getTrndata(){
    //   this.transactionGroupService.getUserIdTrnData(this.UserId).subscribe(trndata=>{
    //     this.trndata=trndata;
    //     console.log( this.trndata);
    //     if(this.trndata.length !==0){
    //     this.dataSource = new MatTableDataSource( this.trndata);
    //     this.dataSource.paginator = this.paginator;
    //     this.dataSource.sort = this.sort;
    //     }else{
    //       Swal.fire('No transaction code mapped for this user.')
    //     }
    //   })
    // }
    // getTransactionData()
    // {
    //   console.log("this is data from summary")
    //   this.transactionGroupService.gettingsummaryDataOfTransactionGroupMaintenance().subscribe(backendResp=>{
    //     console.log(backendResp);
    //   })
    deleteData(row) {
        console.log(row);
        //write a backend call.
        this.transactionGroupService.deleteTrnData(row, this.UserId).subscribe(res => {
            this.res = res;
            if (this.res) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Transaction Mapping deleted successfully.');
                this.dataSource = '';
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Unable to delete');
            }
        });
    }
    modify(row) {
        console.log("user Id", row.userId);
        this.transactionGroupService.getUserIdTrnData(row.userId).subscribe(trndata => {
            this.trndata = trndata;
            console.log(this.trndata);
            console.log("Sending data for Edit", trndata);
            localStorage.setItem("data", JSON.stringify(trndata));
            const navigationExtras = {
                queryParams: {
                // sysCode:chargeSlabForEdit.systemCode,
                }
            };
            let eachrowdata = { userId: row.userId, data: trndata };
            this.transactionGroupService.passingdata(eachrowdata);
            this.route.navigate(['/transaction-group-maintenance/transaction-group-edit'], navigationExtras);
        });
    }
    //added by gayathri issueid=0000571 on 24-08-2020
    getUser(value) {
        console.log(value);
        if (value != this.UserId) {
            console.log(" 2nd If");
            this.enabled = true;
        }
        else {
            console.log(" 2nd else");
            this.enabled = false;
        }
    }
    onKey(event) {
        // console.log(value+"------------",data);
        event.target.value = event.target.value.trim();
        this.UserId = event.target.value;
        console.log("Value : ", this.UserId);
        if (this.UserId != null) {
            for (var value of this.userData) {
                console.log(value + "------------", this.userData);
                if (value != this.UserId) {
                    console.log(" 2nd If");
                    this.enabled = true;
                }
                else {
                    console.log(" 2nd else");
                    this.enabled = false;
                    break;
                }
            }
        }
        else {
            console.log("data else : ", this.userData);
        }
    }
};
TransGroupSummaryComponent.ctorParameters = () => [
    { type: _transaction_group_maintenance_service_service__WEBPACK_IMPORTED_MODULE_3__["TransactionGroupMaintenanceServiceService"] },
    { type: _roles1_roles_service__WEBPACK_IMPORTED_MODULE_6__["RoleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], TransGroupSummaryComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
], TransGroupSummaryComponent.prototype, "sort", void 0);
TransGroupSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-trans-group-summary',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./trans-group-summary.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/transaction-group-maintenance/trans-group-summary/trans-group-summary.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./trans-group-summary.component.css */ "./src/app/views/transaction-group-maintenance/trans-group-summary/trans-group-summary.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_transaction_group_maintenance_service_service__WEBPACK_IMPORTED_MODULE_3__["TransactionGroupMaintenanceServiceService"], _roles1_roles_service__WEBPACK_IMPORTED_MODULE_6__["RoleService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], TransGroupSummaryComponent);



/***/ }),

/***/ "./src/app/views/transaction-group-maintenance/transaction-group-maintenance-edit/transaction-group-maintenance-edit.component.css":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/views/transaction-group-maintenance/transaction-group-maintenance-edit/transaction-group-maintenance-edit.component.css ***!
  \*****************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".secondMatCard{\r\n    width: 480px;\r\n    border-radius: 9px;\r\n    margin-top: 5%;\r\n    margin-left: 30%;\r\n    align-items: center  \r\n}\r\n.mat-raised-button {\r\n    width: 100px;\r\n    height: 27px;\r\n    line-height: 20px;\r\n    min-height: 20px;\r\n    vertical-align: top;\r\n    font-size: 11px;\r\n  }\r\n.form{\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n/* p\r\n  {\r\n    margin-top: 20px;\r\n  } */\r\nmat-error{\r\n    margin: 0 !important;\r\n      padding: 0 !important;\r\n  }\r\n.mat-raised-button {\r\n    width: -webkit-fit-content;\r\n    width: -moz-fit-content;\r\n    width: fit-content;\r\n    height: 20px;\r\n    line-height: 27px;\r\n    min-height: 27px;\r\n    vertical-align: top;\r\n    font-size: 11px;\r\n   \r\n    margin: 0;\r\n  }\r\n#customers {\r\n    border-collapse: collapse;\r\n    width: 70%;\r\n    margin-left: 16%;\r\n    }\r\n#customers td, #customers th {\r\n    border: 1px solid #ddd;\r\n    padding: 10px;\r\n    text-align: center;\r\n    font-size: x-small;\r\n    \r\n    }\r\n#customers td mat-chip {\r\n    font-size: x-small;\r\n    }\r\n#customers tr:nth-child(even){background-color: #f2f2f2;}\r\n#customers th {\r\n    padding-top: 8px;\r\n    padding-bottom: px;\r\n    text-align: left;\r\n    background-color:rgb(97, 178, 216);\r\n    color: white;\r\n    }\r\n.pb-1{\r\n      font-size: 12px;\r\n    }\r\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {\r\n      color: black !important;\r\n    }\r\nmat-label\r\n    {\r\n      font-size: 12px;\r\n      color: black;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdHJhbnNhY3Rpb24tZ3JvdXAtbWFpbnRlbmFuY2UvdHJhbnNhY3Rpb24tZ3JvdXAtbWFpbnRlbmFuY2UtZWRpdC90cmFuc2FjdGlvbi1ncm91cC1tYWludGVuYW5jZS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEI7QUFDSjtBQUNBO0lBQ0ksWUFBWTtJQUNaLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixlQUFlO0VBQ2pCO0FBQ0E7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjtBQUVBOzs7S0FHRztBQUNIO0lBQ0Usb0JBQW9CO01BQ2xCLHFCQUFxQjtFQUN6QjtBQUNBO0lBQ0UsMEJBQWtCO0lBQWxCLHVCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGVBQWU7O0lBRWYsU0FBUztFQUNYO0FBRUE7SUFDRSx5QkFBeUI7SUFDekIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQjtBQUNBO0lBQ0Esc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsa0JBQWtCOztJQUVsQjtBQUNBO0lBQ0Esa0JBQWtCO0lBQ2xCO0FBQ0EsOEJBQThCLHlCQUF5QixDQUFDO0FBRXhEO0lBQ0EsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixnQkFBZ0I7SUFDaEIsa0NBQWtDO0lBQ2xDLFlBQVk7SUFDWjtBQUNBO01BQ0UsZUFBZTtJQUNqQjtBQUNBO01BQ0UsdUJBQXVCO0lBQ3pCO0FBQ0E7O01BRUUsZUFBZTtNQUNmLFlBQVk7SUFDZCIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RyYW5zYWN0aW9uLWdyb3VwLW1haW50ZW5hbmNlL3RyYW5zYWN0aW9uLWdyb3VwLW1haW50ZW5hbmNlLWVkaXQvdHJhbnNhY3Rpb24tZ3JvdXAtbWFpbnRlbmFuY2UtZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNlY29uZE1hdENhcmR7XHJcbiAgICB3aWR0aDogNDgwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA5cHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyICBcclxufVxyXG4ubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAyN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyMHB4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICB9XHJcbiAgLmZvcm17XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuIFxyXG4gIC8qIHBcclxuICB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH0gKi9cclxuICBtYXQtZXJyb3J7XHJcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcclxuICAgICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gICAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgICBtaW4taGVpZ2h0OiAyN3B4O1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgXHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIFxyXG4gICNjdXN0b21lcnMge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMTYlO1xyXG4gICAgfVxyXG4gICAgI2N1c3RvbWVycyB0ZCwgI2N1c3RvbWVycyB0aCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgIFxyXG4gICAgfVxyXG4gICAgI2N1c3RvbWVycyB0ZCBtYXQtY2hpcCB7XHJcbiAgICBmb250LXNpemU6IHgtc21hbGw7XHJcbiAgICB9XHJcbiAgICAjY3VzdG9tZXJzIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cclxuICAgIFxyXG4gICAgI2N1c3RvbWVycyB0aCB7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IHB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDk3LCAxNzgsIDIxNik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9XHJcbiAgICAucGItMXtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gICAgOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUge1xyXG4gICAgICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIG1hdC1sYWJlbFxyXG4gICAge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGNvbG9yOiBibGFjaztcclxuICAgIH0iXX0= */");

/***/ }),

/***/ "./src/app/views/transaction-group-maintenance/transaction-group-maintenance-edit/transaction-group-maintenance-edit.component.ts":
/*!****************************************************************************************************************************************!*\
  !*** ./src/app/views/transaction-group-maintenance/transaction-group-maintenance-edit/transaction-group-maintenance-edit.component.ts ***!
  \****************************************************************************************************************************************/
/*! exports provided: TransactionGroupMaintenanceEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionGroupMaintenanceEditComponent", function() { return TransactionGroupMaintenanceEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _transaction_group_new_transaction_group_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../transaction-group-new/transaction-group-new.component */ "./src/app/views/transaction-group-maintenance/transaction-group-new/transaction-group-new.component.ts");
/* harmony import */ var _transaction_group_maintenance_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../transaction-group-maintenance-service.service */ "./src/app/views/transaction-group-maintenance/transaction-group-maintenance-service.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _roles1_roles_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../roles1/roles.service */ "./src/app/views/roles1/roles.service.ts");
/* harmony import */ var _roles1_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../roles1/models/fmosNewRolePermissions */ "./src/app/views/roles1/models/fmosNewRolePermissions.ts");
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../users/users.service */ "./src/app/views/users/users.service.ts");









let TransactionGroupMaintenanceEditComponent = class TransactionGroupMaintenanceEditComponent {
    constructor(userApi, router, route, roleService, ref, tranService) {
        this.userApi = userApi;
        this.router = router;
        this.route = route;
        this.roleService = roleService;
        this.ref = ref;
        this.tranService = tranService;
        this.button_permission = {};
        this.editFlag = false;
        this.master = new _transaction_group_new_transaction_group_new_component__WEBPACK_IMPORTED_MODULE_3__["TrnDataMaster"];
        this.roleCodes = new _roles1_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_7__["permissionsLabels"]();
        this.modifyUserObject = new _transaction_group_new_transaction_group_new_component__WEBPACK_IMPORTED_MODULE_3__["TrnData"]();
    }
    ngOnInit() {
        setTimeout(() => {
            let data = JSON.parse(localStorage.getItem('data'));
            // this.trnData=data;
            console.log(data);
            this.UserId = data[0].userId;
            this.tranService.getUserIdTransactionMaster(this.UserId).subscribe(resp => {
                console.log(resp);
                this.master = resp;
                // this.trndata=resp;
            });
            this.tranService.getUserIdTrnData(data[0].userId).subscribe(trndata => {
                this.trnData = trndata;
                console.log(this.trnData);
            });
            this.newRolePermissions();
        }, 2000);
        this.roleService.screenLabelList.subscribe(message => this.roleCodes = message);
        console.log(this.roleCodes);
        this.user_id = sessionStorage.getItem('user_id');
        console.log(this.user_id);
        this.role = sessionStorage.getItem('user_role');
        console.log(this.role);
        this.loggedInuser = localStorage.getItem("userFromLogin");
        // console.log(this.trnData);
        // console.log(data[0].userId);
        // this.trn=data[0];
        this.tranService.getUserName().subscribe(userName => {
            this.userName = userName;
            if (this.userName) {
                // this.userName=userName.userI;
                console.log(this.userName);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('No Data For User.');
            }
        });
    }
    enableEditFlag() {
        this.editFlag = true;
    }
    modify(UserId) {
        console.log("UserId", UserId);
        console.log(this.trnData);
        this.master.userId = UserId;
        this.master.creatorId = this.loggedInuser;
        console.log('master', this.master);
        for (let i = 0; i < this.trnData.length; i++) {
            this.trnData[i].userId = this.UserId;
            this.trnData[i].creatorDtStamp = this.master.creatorDtStamp;
            this.trnData[i].creatorId = this.master.creatorId;
            this.trnData[i].verifiedBy = this.master.verifiedBy;
            this.trnData[i].verifiedTime = this.master.verifiedTime;
            this.trnData[i].verifiedStatus = this.master.verifiedStatus;
            this.trnData[i].verifiedOnce = this.master.verifiedOnce;
            this.trnData[i].modNo = this.master.modNo;
            this.trnData[i].recordStatus = this.master.recordStatus;
        }
        console.log(this.trnData);
        this.tranService.modifyMaster(this.master).subscribe(savetrnres => {
            this.savetrnres = savetrnres;
            if (this.savetrnres) {
                this.modifyMAster(this.trnData);
                this.disablesubmit = true;
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Unable to save Data.');
            }
        });
    }
    addAccClass() {
        let chargeSlabAdd = new _transaction_group_new_transaction_group_new_component__WEBPACK_IMPORTED_MODULE_3__["TrnData"]();
        this.trnData.push(chargeSlabAdd);
    }
    modifyMAster(trnData) {
        console.log(trnData);
        this.tranService.modify(this.trnData, this.loggedInuser).subscribe(savetrnres => {
            this.savetrnres = savetrnres;
            if (this.savetrnres) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('Data updated successfully');
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    text: 'Cannot update',
                });
            }
        });
    }
    onClickOfAuthOfPurgingEdit() {
        if (this.master.creatorId === this.loggedInuser) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                text: 'Maker can not Authorized the Record',
            });
        }
        else {
            this.tranService.onClckOfAuthOfPurgingConfig(this.master.userId, this.loggedInuser).subscribe(authResp => {
                console.log(authResp);
                this.master = authResp;
                this.ref.markForCheck();
                console.log(this.master);
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('You Authorized the Record');
                // this.commonAuditLog();
            });
        }
    }
    newRolePermissions() {
        this.roleService.fetchScreenPermissions('Transaction Code Maint');
    }
    onclickOfCloseOfPurgingEdit() {
        console.log("on close");
        this.tranService.onclickOfCloseOfPurgingEdit(this.master.userId, this.loggedInuser).subscribe(closeResp => {
            console.log(closeResp);
            this.master = closeResp;
            this.ref.markForCheck();
            if (this.master == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    text: 'Failed To Close ',
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('You Closed the Record');
            }
        });
    }
    onclickOfReopenOfPurgingEdit() {
        console.log("this is for reopen");
        this.tranService.onclickOfReopenOfPurgingConfig(this.master.userId, this.loggedInuser).subscribe(openResp => {
            console.log(openResp);
            this.master = openResp;
            this.ref.markForCheck();
            // this.purgingConfigDTO = openResp;
            if (this.master == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    text: 'Failed To Re-Open',
                });
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire('You Re-Opened the Record');
            }
        });
    }
    screenpermission() {
        this.screenName = 'roles';
        //this.role='ROLE1';
        console.log("enters inside screen Permission");
        console.log(this.user_id, this.screenName, this.role);
        this.userApi.getRoleScreenPermission(this.user_id, this.screenName, this.role).subscribe(res => {
            this.rolepermission = res;
            //console.log(this.rolepermission);
            if (this.rolepermission) {
                this.button_permission = this.rolepermission[0];
                //console.log( this.button_permission);
            }
        });
    }
    onClickOfDeleteOfModifyUser(userId) {
        console.log("userId", userId);
        this.tranService.deleteFromMaster(this.UserId).subscribe(resp => {
            console.log(resp);
            if (resp === true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire(' Deleted ');
                this.router.navigateByUrl('transaction-group-maintenance');
            }
            if (resp === false) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    text: 'Failed to delete'
                });
            }
        });
        // this.trndata=resp;
    }
    removeDataOfTransactionGroup(i) {
        console.log();
        console.log("on click of delete");
        this.trnData.splice(i, 1);
    }
    delete(i) {
        console.log(this.trnData[i]);
        this.tranService.deleteRow(this.trnData[i].id).subscribe(resp => {
            console.log(resp);
        });
    }
};
TransactionGroupMaintenanceEditComponent.ctorParameters = () => [
    { type: _users_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _roles1_roles_service__WEBPACK_IMPORTED_MODULE_6__["RoleService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _transaction_group_maintenance_service_service__WEBPACK_IMPORTED_MODULE_4__["TransactionGroupMaintenanceServiceService"] }
];
TransactionGroupMaintenanceEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transaction-group-maintenance-edit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./transaction-group-maintenance-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/transaction-group-maintenance/transaction-group-maintenance-edit/transaction-group-maintenance-edit.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./transaction-group-maintenance-edit.component.css */ "./src/app/views/transaction-group-maintenance/transaction-group-maintenance-edit/transaction-group-maintenance-edit.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_users_service__WEBPACK_IMPORTED_MODULE_8__["UsersService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _roles1_roles_service__WEBPACK_IMPORTED_MODULE_6__["RoleService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _transaction_group_maintenance_service_service__WEBPACK_IMPORTED_MODULE_4__["TransactionGroupMaintenanceServiceService"]])
], TransactionGroupMaintenanceEditComponent);



/***/ }),

/***/ "./src/app/views/transaction-group-maintenance/transaction-group-maintenance-routing.module.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/views/transaction-group-maintenance/transaction-group-maintenance-routing.module.ts ***!
  \*****************************************************************************************************/
/*! exports provided: transactionGroupMaintenanceRoutes, TransactionGroupMaintenanceRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transactionGroupMaintenanceRoutes", function() { return transactionGroupMaintenanceRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionGroupMaintenanceRoutingModule", function() { return TransactionGroupMaintenanceRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _trans_group_summary_trans_group_summary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trans-group-summary/trans-group-summary.component */ "./src/app/views/transaction-group-maintenance/trans-group-summary/trans-group-summary.component.ts");
/* harmony import */ var _transaction_group_new_transaction_group_new_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./transaction-group-new/transaction-group-new.component */ "./src/app/views/transaction-group-maintenance/transaction-group-new/transaction-group-new.component.ts");
/* harmony import */ var _transaction_group_maintenance_edit_transaction_group_maintenance_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transaction-group-maintenance-edit/transaction-group-maintenance-edit.component */ "./src/app/views/transaction-group-maintenance/transaction-group-maintenance-edit/transaction-group-maintenance-edit.component.ts");




const transactionGroupMaintenanceRoutes = [
    {
        path: '',
        component: _trans_group_summary_trans_group_summary_component__WEBPACK_IMPORTED_MODULE_1__["TransGroupSummaryComponent"]
    },
    {
        path: 'transaction-group-new',
        component: _transaction_group_new_transaction_group_new_component__WEBPACK_IMPORTED_MODULE_2__["TransactionGroupNewComponent"]
    },
    {
        path: 'transaction-group-edit',
        component: _transaction_group_maintenance_edit_transaction_group_maintenance_edit_component__WEBPACK_IMPORTED_MODULE_3__["TransactionGroupMaintenanceEditComponent"]
    },
];
class TransactionGroupMaintenanceRoutingModule {
}


/***/ }),

/***/ "./src/app/views/transaction-group-maintenance/transaction-group-maintenance.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/transaction-group-maintenance/transaction-group-maintenance.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: TransactionGroupMaintenanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionGroupMaintenanceModule", function() { return TransactionGroupMaintenanceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _transaction_group_maintenance_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./transaction-group-maintenance-routing.module */ "./src/app/views/transaction-group-maintenance/transaction-group-maintenance-routing.module.ts");
/* harmony import */ var _trans_group_summary_trans_group_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trans-group-summary/trans-group-summary.component */ "./src/app/views/transaction-group-maintenance/trans-group-summary/trans-group-summary.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/angular-material/angular-material.module */ "./src/app/shared/angular-material/angular-material.module.ts");
/* harmony import */ var _transaction_group_new_transaction_group_new_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./transaction-group-new/transaction-group-new.component */ "./src/app/views/transaction-group-maintenance/transaction-group-new/transaction-group-new.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _transaction_group_maintenance_edit_transaction_group_maintenance_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./transaction-group-maintenance-edit/transaction-group-maintenance-edit.component */ "./src/app/views/transaction-group-maintenance/transaction-group-maintenance-edit/transaction-group-maintenance-edit.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");











let TransactionGroupMaintenanceModule = class TransactionGroupMaintenanceModule {
};
TransactionGroupMaintenanceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_trans_group_summary_trans_group_summary_component__WEBPACK_IMPORTED_MODULE_4__["TransGroupSummaryComponent"], _transaction_group_new_transaction_group_new_component__WEBPACK_IMPORTED_MODULE_7__["TransactionGroupNewComponent"], _transaction_group_maintenance_edit_transaction_group_maintenance_edit_component__WEBPACK_IMPORTED_MODULE_9__["TransactionGroupMaintenanceEditComponent"],
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_transaction_group_maintenance_routing_module__WEBPACK_IMPORTED_MODULE_3__["transactionGroupMaintenanceRoutes"]),
            src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_6__["AngularMaterialModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_10__["FlexLayoutModule"]
        ]
    })
], TransactionGroupMaintenanceModule);



/***/ }),

/***/ "./src/app/views/transaction-group-maintenance/transaction-group-new/transaction-group-new.component.css":
/*!***************************************************************************************************************!*\
  !*** ./src/app/views/transaction-group-maintenance/transaction-group-new/transaction-group-new.component.css ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".secondMatCard{\r\n    width: 450px;\r\n    border-radius: 9px;\r\n    margin-top: 5%;\r\n    margin-left: 30%;\r\n   \r\n}\r\n/* .mat-raised-button {\r\n    width: 100px;\r\n    height: 27px;\r\n    line-height: 20px;\r\n    min-height: 20px;\r\n    vertical-align: top;\r\n    font-size: 11px;\r\n  } */\r\n/* #customers {\r\n    border-collapse: collapse;\r\n    width: 70%;\r\n    margin-left: 26%;\r\n    }\r\n    #customers td, #customers th {\r\n    border: 1px solid #ddd;\r\n    \r\n    text-align: center;\r\n    font-size: x-small;\r\n    \r\n    }\r\n    #customers td mat-chip {\r\n    font-size: x-small;\r\n    }\r\n    #customers tr:nth-child(even){background-color: #f2f2f2;}\r\n    \r\n    #customers th {\r\n    padding-top: 8px;\r\n    padding-bottom: 9px;\r\n    text-align: left;\r\n    background-color:rgb(97, 178, 216);\r\n    color: white;\r\n    } */\r\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {\r\n      color: black !important;\r\n    }\r\nmat-label\r\n    {\r\n      font-size: 12px;\r\n      color: black;\r\n    }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdHJhbnNhY3Rpb24tZ3JvdXAtbWFpbnRlbmFuY2UvdHJhbnNhY3Rpb24tZ3JvdXAtbmV3L3RyYW5zYWN0aW9uLWdyb3VwLW5ldy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCOztBQUVwQjtBQUNBOzs7Ozs7O0tBT0s7QUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7T0F1Qk87QUFDSDtNQUNFLHVCQUF1QjtJQUN6QjtBQUNBOztNQUVFLGVBQWU7TUFDZixZQUFZO0lBQ2QiLCJmaWxlIjoic3JjL2FwcC92aWV3cy90cmFuc2FjdGlvbi1ncm91cC1tYWludGVuYW5jZS90cmFuc2FjdGlvbi1ncm91cC1uZXcvdHJhbnNhY3Rpb24tZ3JvdXAtbmV3LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2Vjb25kTWF0Q2FyZHtcclxuICAgIHdpZHRoOiA0NTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDlweDtcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICAgXHJcbn1cclxuLyogLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMjdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgbWluLWhlaWdodDogMjBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgfSAqL1xyXG4gIFxyXG4vKiAjY3VzdG9tZXJzIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDI2JTtcclxuICAgIH1cclxuICAgICNjdXN0b21lcnMgdGQsICNjdXN0b21lcnMgdGgge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgIFxyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG4gICAgXHJcbiAgICB9XHJcbiAgICAjY3VzdG9tZXJzIHRkIG1hdC1jaGlwIHtcclxuICAgIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuICAgIH1cclxuICAgICNjdXN0b21lcnMgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxyXG4gICAgXHJcbiAgICAjY3VzdG9tZXJzIHRoIHtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOXB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDk3LCAxNzgsIDIxNik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB9ICovXHJcbiAgICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWFwcGVhcmFuY2Utb3V0bGluZSAubWF0LWZvcm0tZmllbGQtb3V0bGluZSB7XHJcbiAgICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgbWF0LWxhYmVsXHJcbiAgICB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6IGJsYWNrO1xyXG4gICAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/views/transaction-group-maintenance/transaction-group-new/transaction-group-new.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/views/transaction-group-maintenance/transaction-group-new/transaction-group-new.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: TransactionGroupNewComponent, TrnData, TrnDataMaster, GlData, AccClassData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionGroupNewComponent", function() { return TransactionGroupNewComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrnData", function() { return TrnData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrnDataMaster", function() { return TrnDataMaster; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlData", function() { return GlData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccClassData", function() { return AccClassData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _transaction_group_maintenance_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../transaction-group-maintenance-service.service */ "./src/app/views/transaction-group-maintenance/transaction-group-maintenance-service.service.ts");




let TransactionGroupNewComponent = class TransactionGroupNewComponent {
    constructor(tranService, ref) {
        this.tranService = tranService;
        this.ref = ref;
        this.space = false;
        this.master = new TrnDataMaster;
        this.transactionGroupEntries = [{
                trnDesc: '',
                trnCode: ''
            }];
        this.gllist = [{
                trnDesc: '',
                trnCode: ''
            }];
        this.AccClass = [{
                trnDesc: '',
                trnCode: ''
            }];
    }
    validateuserId() {
        console.log(this.UserId);
        this.UserId = this.UserId.trim();
        console.log("value of UserId after trim", this.UserId);
        console.log('list', this.userName);
        //console.log(this.UserId,  this.userName);
        if (this.UserId && this.userName) {
            let userexist = this.userName.indexOf(this.UserId);
            console.log("value of userexist", userexist);
            if (userexist == -1) {
                console.log("PLease enter valid user Id");
                this.space = false;
                console.log("space : ", this.space);
            }
            else if (userexist >= 0) {
                console.log("enter inside else method");
                this.space = true;
                console.log("space : ", this.space);
            }
        }
        else {
            console.log("this is space");
            this.space = false;
            console.log("space : ", this.space);
        }
        // else
        // {
        //   this.space=true;
        //    this.onSubmitOfTransactionGroup(this.UserId);
        // }
    }
    ngOnInit() {
        // this.getAllUserId();
        this.loggedInuser = localStorage.getItem("userFromLogin");
        this.tranService.getUserName().subscribe(userName => {
            this.userName = userName;
            this.usersList = userName;
            if (this.userName) {
                // this.userName=userName.userI;
                console.log(this.userName);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('No Data For User.');
            }
        });
    }
    getAllUserId() {
        this.tranService.getUserName().subscribe(userName => {
            this.userName = userName;
            if (this.userName) {
                // this.userName=userName.userI;
                console.log(this.userName);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('No Data For User.');
            }
        });
    }
    keyPress(user) {
        console.log(user);
        let list = this.userName.filter(option => option.includes(user));
        this.usersList = list;
        console.log(list);
    }
    //added By Fayaz
    /*  keyPress(user: any) {
       console.log(this.userName);
       this.result = this.userName.filter(s => s.includes(user));
       console.log(this.result);
   
      // this.userName = this.result;
       this.ref.markForCheck();
      /* if (event == '') {
      
       this.getAllUserId();
   
       }
     } */
    addDataOfTransactionGroupEntries() {
        this.transactionGroupEntries.push({
            trnDesc: '',
            trnCode: ''
        });
        //console.log(this.transactionGroupEntries);
    }
    removeDataOfTransactionGroup(i) {
        this.transactionGroupEntries.splice(i, 1);
    }
    //gl
    addgllist() {
        this.gllist.push({
            trnDesc: '',
            trnCode: ''
        });
        //console.log(this.transactionGroupEntries);
    }
    removegllist(i) {
        this.gllist.splice(i, 1);
    }
    //for account
    addAccClass() {
        this.AccClass.push({
            trnDesc: '',
            trnCode: ''
        });
        //console.log(this.transactionGroupEntries);
    }
    removeaddAccClass(i) {
        this.AccClass.splice(i, 1);
    }
    onSubmitOfTransactionGroup(UserId) {
        console.log(UserId);
        this.master.userId = UserId;
        this.master.creatorId = this.loggedInuser;
        console.log('master', this.master);
        // console.log(this.UserId);
        if (!this.UserId) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Enter User Id.');
            return;
        }
        if (!this.transactionGroupEntries[0].trnDesc && !this.transactionGroupEntries[0].trnCode) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Please Enter All The Fields',
                type: 'warning'
            });
            return;
        }
        else {
            // this.trnData.userId = this.UserId;
            // console.log(this.UserId);
            // console.log(this.transactionGroupEntries);
            this.tranService.saveTrnCodeMaster(this.master).subscribe(res => {
                console.log(res);
                if (res) {
                    this.modify(this.transactionGroupEntries);
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Unable to save Data.');
                }
            });
        }
    }
    modify(transactionGroupEntries) {
        console.log("entering inside detail", transactionGroupEntries);
        this.tranService.saveTrnCode(this.transactionGroupEntries, this.UserId, this.loggedInuser).subscribe(savetrnres => {
            this.savetrnres = savetrnres;
            if (this.savetrnres) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Data Saved.');
                this.disblesubmit = true;
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Unable to save Data.');
            }
        });
    }
    onSubmitGLCode() {
        // console.log('this is transaction Grpup');
        // console.log(this.UserId);
        if (!this.UserId) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Enter User Id.');
            return;
        }
        if (!this.gllist[0].trnDesc && !this.gllist[0].trnCode) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Please Enter All The Fields',
                type: 'warning'
            });
            return;
        }
        else {
            // this.trnData.userId = this.UserId;
            // console.log(this.UserId);
            // console.log(this.transactionGroupEntries);
            // this.tranService.saveGlCode(this.gllist, this.UserId).subscribe(savetrnres => {
            //   this.savetrnres = savetrnres;
            //   if (this.savetrnres) {
            //     Swal.fire('Data Saved.');
            //   } else {
            //     Swal.fire('Unable to save Data.');
            //   }
            // });
        }
    }
    onSubmitActClass() {
        // console.log('this is transaction Grpup');
        console.log("masterDetails", this.master);
        if (!this.UserId) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Enter User Id.');
            return;
        }
        if (!this.AccClass[0].trnDesc && !this.AccClass[0].trnCode) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
                title: 'Please Enter All The Fields',
            });
            return;
        }
        else {
            // this.trnData.userId = this.UserId;
            // console.log(this.UserId);
            // console.log(this.transactionGroupEntries);
            // this.tranService.saveAccountCode(this.AccClass, this.UserId).subscribe(savetrnres => {
            //   this.savetrnres = savetrnres;
            //   if (this.savetrnres) {
            //     Swal.fire('Data Saved.');
            //   } else {
            //     Swal.fire('Unable to save Data.');
            //   }
            // });
        }
    }
    fun(event) {
        console.log(event);
        console.log(event);
        // console.log(this.userName);
        this.result = this.userName.filter(s => s.includes(event));
        // console.log("enters inside fn")
        // console.log(userId);
        // const result=userId.trim();
        // console.log(result);
        // if(this.result)
        // {
        //   console.log("valid string");
        //   // this.submitted=true
        //   console.log(this.space);
        // }
        // else{
        //   console.log("invalid string");
        //   this.space=false;
        //     // this.submitted = false;
        //     console.log(this.space);
        // }
        //   }
    }
    check() {
        this.space = true;
    }
};
TransactionGroupNewComponent.ctorParameters = () => [
    { type: _transaction_group_maintenance_service_service__WEBPACK_IMPORTED_MODULE_3__["TransactionGroupMaintenanceServiceService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
TransactionGroupNewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transaction-group-new',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./transaction-group-new.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/transaction-group-maintenance/transaction-group-new/transaction-group-new.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./transaction-group-new.component.css */ "./src/app/views/transaction-group-maintenance/transaction-group-new/transaction-group-new.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_transaction_group_maintenance_service_service__WEBPACK_IMPORTED_MODULE_3__["TransactionGroupMaintenanceServiceService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], TransactionGroupNewComponent);

class TrnData {
}
class TrnDataMaster {
}
class GlData {
}
class AccClassData {
}


/***/ })

}]);
//# sourceMappingURL=views-transaction-group-maintenance-transaction-group-maintenance-module-es2015.js.map