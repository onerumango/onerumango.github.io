(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-excel-data-authorization-first-excel-data-authorization-first-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/excel-data-authorization-first/excel-data-authorization-first.component.html":
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/excel-data-authorization-first/excel-data-authorization-first.component.html ***!
  \******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div style=\"background-color:rgb(183, 247, 191)\">\r\n  <h1>Upload Process Authorization</h1>\r\n</div> -->\r\n<mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n  <span>Authorize Excel</span>\r\n</mat-toolbar>\r\n<br />\r\n<div class=\"wrapper\">\r\n  <h3 style=\"font-size: large;\">Pending for Authorization</h3>\r\n</div>\r\n<br />\r\n\r\n\r\n\r\n<div class=\"mat-elevation-z8 \">\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n  </mat-form-field>\r\n\r\n  <table mat-table [dataSource]=\"dataSourcePendingForAuth\">\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"detailsQueryToggle\">\r\n      <th mat-header-cell *matHeaderCellDef>Process Details</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"queryDetailsDataByParam(element)\">\r\n          Get Details\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"externalSysName\">\r\n      <th mat-header-cell *matHeaderCellDef>External System</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.externalSysName }}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"currency\">\r\n      <th mat-header-cell *matHeaderCellDef>Currency</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.currency }}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"inputBy\">\r\n      <th mat-header-cell *matHeaderCellDef>Uploaded By</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.inputBy }}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"batchNumber\">\r\n      <th mat-header-cell *matHeaderCellDef>Batch Number</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.batchNumber }}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"processName\">\r\n      <th mat-header-cell *matHeaderCellDef>Process Name</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.processName }}</td>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container matColumnDef=\"processingDate\">\r\n      <th mat-header-cell *matHeaderCellDef>Processing Date</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        {{ element.processingDate | date }}\r\n      </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"remarks\" style=\"display: none;\">\r\n      <th mat-header-cell *matHeaderCellDef [style.display]=\"'none'\">Remarks</th>\r\n      <td mat-cell *matCellDef=\"let element\" [style.display]=\"'none'\"><textarea>{{ element.remarks }}</textarea></td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"overrides\" style=\"display: none;\">\r\n      <th mat-header-cell *matHeaderCellDef [style.display]=\"'none'\">Override</th>\r\n      <td mat-cell *matCellDef=\"let element\" [style.display]=\"'none'\"><textarea>{{ element.overrides }}</textarea></td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"totalNoOfRecord\">\r\n      <th mat-header-cell *matHeaderCellDef>Total Record</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.totalNoOfRecord }}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"totalCredit\">\r\n      <th mat-header-cell *matHeaderCellDef>Total Credit</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.totalCredit }}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"totalDebit\">\r\n      <th mat-header-cell *matHeaderCellDef>Total Debit</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.totalDebit }}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"authStatus\">\r\n      <th mat-header-cell *matHeaderCellDef>Auth Status</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.authStatus }}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"uploadStatus\">\r\n      <th mat-header-cell *matHeaderCellDef>Upload Status</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.uploadStatus }}</td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"filename\">\r\n      <th mat-header-cell *matHeaderCellDef>File Name</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.fileName }}</td>\r\n    </ng-container>\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumnsPendingAuth\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumnsPendingAuth\"></tr>\r\n  </table>\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20, 30, 40, 50, 60]\" showFirstLastButtons></mat-paginator>\r\n</div>\r\n<br />\r\n<mat-spinner *ngIf=\"spinner1\" radius=\"10px;\"> Please Wait Data is Loading.......</mat-spinner>\r\n<br />\r\n\r\n\r\n<div class=\"row\" *ngIf=\"flag\">\r\n  <div class=\"col-sm-6\">\r\n    <label>Remarks</label>\r\n    <textarea style=\"width: 100%;\">{{this.remarks}}</textarea>\r\n  </div>\r\n  <div class=\"col-sm-6\">\r\n    <label>Overrides</label>\r\n    <textarea style=\"width: 100%;\">{{this.overrides}}</textarea>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"mat-elevation-z8 \">\r\n  <!-- <button mat-raised-button color=\"primary\" (click)=\"downloadData()\" *ngIf=\"button1\">\r\n        Download Uploaded Data\r\n        </button> -->\r\n  <button mat-button>\r\n\r\n    <mat-label>Export As</mat-label>\r\n\r\n    <mat-select #select>\r\n      <mat-option (click)=\"downloadData()\" *ngIf=\"button1\">Excel</mat-option>\r\n      <mat-option (click)=\"convert()\" *ngIf=\"button1\">PDF</mat-option>\r\n    </mat-select>\r\n\r\n  </button>\r\n  <table mat-table [dataSource]=\"dataSource\">\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"account\">\r\n      <th mat-header-cell *matHeaderCellDef>Account</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.account }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column Added By Fayaz -> AccountDescription column -->\r\n    <ng-container matColumnDef=\"accDesc\">\r\n      <th mat-header-cell *matHeaderCellDef>Account Description</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.accDesc}}</td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"ccyCd\">\r\n      <th mat-header-cell *matHeaderCellDef>Currency</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.ccyCd }}</td>\r\n    </ng-container>\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"branchCode\">\r\n      <th mat-header-cell *matHeaderCellDef>Branch</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.id.branchCode }}</td>\r\n    </ng-container>\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"amount\">\r\n      <th mat-header-cell *matHeaderCellDef>Amount</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.amount }}</td>\r\n    </ng-container>\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"lcyEquivalent\">\r\n      <th mat-header-cell *matHeaderCellDef>Lcy Amount</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.lcyEquivalent }}</td>\r\n    </ng-container>\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"drCr\">\r\n      <th mat-header-cell *matHeaderCellDef>Dr/Cr</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.drCr }}</td>\r\n    </ng-container>\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"exchRate\">\r\n      <th mat-header-cell *matHeaderCellDef>Exchange Rate</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.exchRate }}</td>\r\n    </ng-container>\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"relatedAccount\">\r\n      <th mat-header-cell *matHeaderCellDef>Related Account</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.relatedAccount }}</td>\r\n    </ng-container>\r\n    <!-- Weight Column -->\r\n    \r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"addlText\">\r\n      <th mat-header-cell *matHeaderCellDef style=\"width:auto\">Addl Text</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.addlText }}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"treasuryReference\">\r\n      <th mat-header-cell *matHeaderCellDef>Treasury Reference</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{element.acumenJournal}}</td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"view\">\r\n      <th mat-header-cell *matHeaderCellDef>Process</th>\r\n      <td mat-cell *matCellDef=\"let element\" [style.color]=\"element.color\" data-label=\"color\">\r\n        <button mat-raised-button class=\"hahaha\" color=\"primary\" (click)=\"openDialog(element)\">\r\n          View\r\n        </button>&nbsp;&nbsp;\r\n        <!-- <button mat-raised-button class=\"hahaha\" color=\"primary\" (click)=\"openAuditDetails(element)\">\r\n          Audit\r\n        </button> -->\r\n      </td>\r\n    </ng-container>\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\r\n  </table>\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20, 30, 40, 50, 60]\" showFirstLastButtons></mat-paginator>\r\n</div>\r\n<br />\r\n<mat-form-field *ngIf=\"reasonBoolean\">\r\n  <mat-label>Reject Reason</mat-label>\r\n  <textarea matInput cdkTextareaAutosize cdkAutosizeMinRows=\"1\" cdkAutosizeMaxRows=\"5\" name=\"rejectReason\"\r\n    [(ngModel)]=\"rejectReason\"></textarea>\r\n</mat-form-field>\r\n\r\n<div class=\"wrapper\">\r\n  <button mat-raised-button color=\"primary\" (click)=\"approveDetailsData()\" style=\"height : 90%\"\r\n    *ngIf=\"approveButtonStatus && roleCodes.auth\">Approve and Process </button>\r\n\r\n  &nbsp;\r\n  <!-- Earlier code <button mat-raised-button color=\"primary\" (click)=\"reject()\" style=\"height : 90%\"\r\n  *ngIf=\"approveButtonStatus && roleCodes.reject\">\r\n    {{roleCodes.reject.labelDescription}}\r\n  </button> -->\r\n  <button mat-raised-button color=\"primary\" (click)=\"reject()\" style=\"height : 90%\"\r\n    *ngIf=\"approveButtonStatus && roleCodes.auth\">\r\n    Reject\r\n  </button> &nbsp;\r\n  <!-- <button mat-raised-button color=\"primary\"  (click)=\"Process()\" style=\"height : 90%\" *ngIf=\"process && this.button_permission.newbutton=='T'\">\r\n   Process\r\n  </button> -->\r\n</div>\r\n<br>\r\n<mat-spinner [diameter]=\"70\" *ngIf=\"authprocess\"></mat-spinner>\r\n<!-- <h5 *ngIf=\"spinner\"> Connecting to Flexcube...Please Wait !!!</h5>\r\n<mat-spinner [diameter]=\"70\"  *ngIf=\"authprocess\"></mat-spinner> -->\r\n<!--<mat-progress-bar mode=\"indeterminate\" *ngIf=\"spinner\"></mat-progress-bar>-->\r\n<div fxLayout=\"row\">\r\n  <div fxFlex></div>\r\n  <div fxFlex=\"95\">\r\n    <mat-card style=\"width: 50%; margin-left:300px;\">\r\n      <mat-card-title>\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n        <div fxLayout=\"row\">\r\n          <table id=\"customers\" *ngIf=\"flag\">\r\n            <tr>\r\n              <th>Input By:</th>\r\n              <td>\r\n                <mat-chip *ngIf=\"auth\">{{this.pendingForAuthDetailsDTOList[0].inputBy}}</mat-chip>\r\n              </td>\r\n              <th>Input Date:</th>\r\n              <td>\r\n                <mat-chip *ngIf=\"auth\">{{this.pendingForAuthDetailsDTOList[0].inputTime |  date: 'MM/dd/yyyy, h:mm a'}}\r\n                </mat-chip>\r\n              </td>\r\n            </tr>\r\n\r\n\r\n            <tr>\r\n              <th>Amend Auth By:</th>\r\n              <td>\r\n                <mat-chip *ngIf=\"auth\">{{this.pendingForAuthDetailsDTOList[0].secondTimeAuthorizer}}</mat-chip>\r\n              </td>\r\n              <th>Amend Auth Date:</th>\r\n              <td>\r\n                <mat-chip *ngIf=\"auth\">\r\n                  {{this.pendingForAuthDetailsDTOList[0].secondTimeAuthTimeStamp | date: 'MM/dd/yyyy, h:mm a'}}\r\n                </mat-chip>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <th>Frist Auth By:</th>\r\n              <td>\r\n                <mat-chip *ngIf=\"auth\">{{this.firstLevelAuthorizationStatus.authorizer}}</mat-chip>\r\n              </td>\r\n              <th> Frist Auth Date:</th>\r\n              <td>\r\n                <mat-chip *ngIf=\"auth\">{{this.firstLevelAuthorizationStatus.authDate}}</mat-chip>\r\n              </td>\r\n\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n<!-- footer starts -->\r\n<br><br>");

/***/ }),

/***/ "./src/app/views/excel-data-authorization-first/excel-data-authorization-first-routing.module.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/views/excel-data-authorization-first/excel-data-authorization-first-routing.module.ts ***!
  \*******************************************************************************************************/
/*! exports provided: firstAuthRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firstAuthRoutes", function() { return firstAuthRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _excel_data_authorization_first_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./excel-data-authorization-first.component */ "./src/app/views/excel-data-authorization-first/excel-data-authorization-first.component.ts");


const firstAuthRoutes = [
    {
        path: "",
        component: _excel_data_authorization_first_component__WEBPACK_IMPORTED_MODULE_1__["ExcelDataAuthorizationFirstComponent"]
    }
];


/***/ }),

/***/ "./src/app/views/excel-data-authorization-first/excel-data-authorization-first.component.scss":
/*!****************************************************************************************************!*\
  !*** ./src/app/views/excel-data-authorization-first/excel-data-authorization-first.component.scss ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  border-collapse: initial;\n  width: 100%;\n  text-align: center !important;\n}\n\n.mat-header-cell {\n  text-align: center;\n  height: 22px !important;\n}\n\n.mat-cell {\n  text-align: center;\n  height: 22px !important;\n}\n\ntr:nth-child(even) {\n  background-color: #f2f2f2;\n  height: 22px !important;\n  font-weight: lighter;\n}\n\nth {\n  background-color: #1b9ab9;\n  color: #f4fcf6;\n  font-weight: lighter;\n  height: 22px !important;\n}\n\ntr {\n  background-color: #b8def0;\n  color: #221d1d;\n  font-weight: lighter;\n  height: 22px !important;\n  padding-top: 5px;\n}\n\nmat-paginator {\n  width: auto !important;\n  height: 40px !important;\n}\n\nmd-pagination-wrapper {\n  width: auto !important;\n  height: 40px !important;\n}\n\nmd-row:nth-child(even) {\n  background-color: #edf1f5;\n}\n\nmd-row:nth-child(odd) {\n  background-color: #fdfdfb;\n}\n\np {\n  padding-left: 510px;\n}\n\nh1 {\n  color: #b60c61;\n  font-family: Impact, Charcoal, sans-serif;\n  font-size: 32px;\n  font-weight: bold;\n  margin-top: 0px;\n  margin-bottom: 1px;\n}\n\nh3 {\n  color: #06010e;\n  font-family: Charcoal, sans-serif;\n  font-size: 30px;\n  font-weight: bold;\n  margin-top: 0px;\n  margin-bottom: 1px;\n}\n\n/*footer*/\n\n.no-hover-effect.mat-raised-button {\n  background-color: #4f39cf;\n  color: #f3edf0;\n}\n\n.no-hover-effect.mat-stroked-button {\n  background-color: #4f39cf;\n  color: #fffdfe;\n}\n\nh5 {\n  font-size: 14px;\n}\n\n#customers {\n  border-collapse: collapse;\n  width: 100%;\n}\n\n#customers td, #customers th {\n  border: 1px solid #ddd;\n  padding: 8px;\n  text-align: center;\n  font-size: x-small;\n}\n\n#customers td mat-chip {\n  font-size: x-small;\n}\n\n#customers tr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n#customers th {\n  padding-top: 8px;\n  padding-bottom: 9px;\n  text-align: left;\n  background-color: #61b2d8;\n  color: white;\n}\n\n.devDiv {\n  align-items: center;\n}\n\n.pendingAuthCss {\n  background-color: #fcf9f9;\n  right: 50px;\n  left: 50px;\n}\n\n.wrapper {\n  text-align: center;\n}\n\n.centeredButton mat-raised-button {\n  position: absolute;\n  top: 20%;\n}\n\n/*\n*css added by dev on 12/nov\n*/\n\n.mat-raised-button {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 0.2ch;\n  line-height: 27px;\n  min-height: 27px;\n  vertical-align: top;\n  font-size: 11px;\n  padding: 0 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZXhjZWwtZGF0YS1hdXRob3JpemF0aW9uLWZpcnN0L0Q6XFxJY3VzdC1VaVxcbWVkaWFuLXBoMi11aS9zcmNcXGFwcFxcdmlld3NcXGV4Y2VsLWRhdGEtYXV0aG9yaXphdGlvbi1maXJzdFxcZXhjZWwtZGF0YS1hdXRob3JpemF0aW9uLWZpcnN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9leGNlbC1kYXRhLWF1dGhvcml6YXRpb24tZmlyc3QvZXhjZWwtZGF0YS1hdXRob3JpemF0aW9uLWZpcnN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURNQTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQ0hGOztBRE9BO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQ0pGOztBRE1BO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0FDSEY7O0FES0E7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FDRkY7O0FES0E7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FDRkY7O0FES0E7RUFDRSx5QkFBQTtBQ0ZGOztBREtBO0VBQ0UseUJBQUE7QUNGRjs7QURJQTtFQUNFLG1CQUFBO0FDREY7O0FER0E7RUFDRSxjQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBLFNBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUNFRjs7QURBQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ0dGOztBRERBO0VBQ0UsZUFBQTtBQ0lGOztBREZBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FDS0Y7O0FESEE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDTUY7O0FESEE7RUFDRSxrQkFBQTtBQ01GOztBREpBO0VBQThCLHlCQUFBO0FDUTlCOztBRE5BO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDU0Y7O0FEUEE7RUFDRSxtQkFBQTtBQ1VGOztBRFJBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQ1dGOztBRE5BO0VBQ0Usa0JBQUE7QUNTRjs7QUROQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtBQ1NGOztBRE5BOztDQUFBOztBQUtBO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ09GIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvZXhjZWwtZGF0YS1hdXRob3JpemF0aW9uLWZpcnN0L2V4Y2VsLWRhdGEtYXV0aG9yaXphdGlvbi1maXJzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGluaXRpYWw7XHJcbiAgd2lkdGg6MTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm1hdC1oZWFkZXItY2VsbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogMjJweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuLm1hdC1jZWxsIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbnRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICBoZWlnaHQ6IDIycHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuXHJcbn1cclxuXHJcbnRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI5YWI5O1xyXG4gIGNvbG9yOiByZ2IoMjQ0LCAyNTIsIDI0Nik7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxudHIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGRlZjA7XHJcbiAgY29sb3I6IHJnYigzNCwgMjksIDI5KTtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBoZWlnaHQ6IDIycHggIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG59XHJcbm1hdC1wYWdpbmF0b3Ige1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm1kLXBhZ2luYXRpb24td3JhcHBlciB7XHJcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxubWQtcm93Om50aC1jaGlsZChldmVuKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjFmNTtcclxufVxyXG5cclxubWQtcm93Om50aC1jaGlsZChvZGQpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZiO1xyXG59XHJcbnAge1xyXG4gIHBhZGRpbmctbGVmdDogNTEwcHg7XHJcbn1cclxuaDEge1xyXG4gIGNvbG9yOiAjYjYwYzYxO1xyXG4gIGZvbnQtZmFtaWx5OiBJbXBhY3QsIENoYXJjb2FsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG59XHJcbmgzIHtcclxuICBjb2xvcjogIzA2MDEwZTtcclxuICBmb250LWZhbWlseTogQ2hhcmNvYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbn1cclxuLypmb290ZXIqL1xyXG4ubm8taG92ZXItZWZmZWN0Lm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGYzOWNmO1xyXG4gIGNvbG9yOiAjZjNlZGYwO1xyXG59XHJcbi5uby1ob3Zlci1lZmZlY3QubWF0LXN0cm9rZWQtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGYzOWNmO1xyXG4gIGNvbG9yOiAjZmZmZGZlO1xyXG59XHJcbmg1IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuI2N1c3RvbWVycyB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4jY3VzdG9tZXJzIHRkLCAjY3VzdG9tZXJzIHRoIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG59XHJcblxyXG4jY3VzdG9tZXJzIHRkIG1hdC1jaGlwIHtcclxuICBmb250LXNpemU6IHgtc21hbGw7XHJcbn1cclxuI2N1c3RvbWVycyB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XHJcblxyXG4jY3VzdG9tZXJzIHRoIHtcclxuICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA5cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig5NywgMTc4LCAyMTYpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4uZGV2RGl2IHtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5wZW5kaW5nQXV0aENzcyB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MiwgMjQ5LCAyNDkpO1xyXG4gIHJpZ2h0OiA1MHB4O1xyXG4gIGxlZnQ6IDUwcHg7XHJcblxyXG59XHJcblxyXG5cclxuLndyYXBwZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNlbnRlcmVkQnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMCU7XHJcbn1cclxuXHJcbi8qXHJcbipjc3MgYWRkZWQgYnkgZGV2IG9uIDEyL25vdlxyXG4qL1xyXG5cclxuXHJcbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGhlaWdodDogMC4yY2g7XHJcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgbWluLWhlaWdodDogMjdweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBwYWRkaW5nOiAwIDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59IiwidGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGluaXRpYWw7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLm1hdC1oZWFkZXItY2VsbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY2VsbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XG59XG5cbnRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIGhlaWdodDogMjJweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxudGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI5YWI5O1xuICBjb2xvcjogI2Y0ZmNmNjtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIGhlaWdodDogMjJweCAhaW1wb3J0YW50O1xufVxuXG50ciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGRlZjA7XG4gIGNvbG9yOiAjMjIxZDFkO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG59XG5cbm1hdC1wYWdpbmF0b3Ige1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cblxubWQtcGFnaW5hdGlvbi13cmFwcGVyIHtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbm1kLXJvdzpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmMWY1O1xufVxuXG5tZC1yb3c6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZiO1xufVxuXG5wIHtcbiAgcGFkZGluZy1sZWZ0OiA1MTBweDtcbn1cblxuaDEge1xuICBjb2xvcjogI2I2MGM2MTtcbiAgZm9udC1mYW1pbHk6IEltcGFjdCwgQ2hhcmNvYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xufVxuXG5oMyB7XG4gIGNvbG9yOiAjMDYwMTBlO1xuICBmb250LWZhbWlseTogQ2hhcmNvYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xufVxuXG4vKmZvb3RlciovXG4ubm8taG92ZXItZWZmZWN0Lm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmMzljZjtcbiAgY29sb3I6ICNmM2VkZjA7XG59XG5cbi5uby1ob3Zlci1lZmZlY3QubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmMzljZjtcbiAgY29sb3I6ICNmZmZkZmU7XG59XG5cbmg1IHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4jY3VzdG9tZXJzIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNjdXN0b21lcnMgdGQsICNjdXN0b21lcnMgdGgge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xufVxuXG4jY3VzdG9tZXJzIHRkIG1hdC1jaGlwIHtcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xufVxuXG4jY3VzdG9tZXJzIHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG5cbiNjdXN0b21lcnMgdGgge1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFiMmQ4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5kZXZEaXYge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucGVuZGluZ0F1dGhDc3Mge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmOWY5O1xuICByaWdodDogNTBweDtcbiAgbGVmdDogNTBweDtcbn1cblxuLndyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jZW50ZXJlZEJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMCU7XG59XG5cbi8qXG4qY3NzIGFkZGVkIGJ5IGRldiBvbiAxMi9ub3ZcbiovXG4ubWF0LXJhaXNlZC1idXR0b24ge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogMC4yY2g7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBtaW4taGVpZ2h0OiAyN3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDAgMDtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/views/excel-data-authorization-first/excel-data-authorization-first.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/views/excel-data-authorization-first/excel-data-authorization-first.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: ExcelDataAuthorizationFirstComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelDataAuthorizationFirstComponent", function() { return ExcelDataAuthorizationFirstComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/models/pending-for-auth-dto */ "./src/app/shared/models/pending-for-auth-dto.ts");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var _modals_modal_excel_auth_first_modal_excel_auth_first_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modals/modal-excel-auth-first/modal-excel-auth-first.component */ "./src/app/views/modals/modal-excel-auth-first/modal-excel-auth-first.component.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_shared_models_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/shared/models/user */ "./src/app/shared/models/user.ts");
/* harmony import */ var _audit_logs_dto_first_second__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./audit-logs-dto-first-second */ "./src/app/views/excel-data-authorization-first/audit-logs-dto-first-second.ts");
/* harmony import */ var _modals_modal_audit_transaction_details_modal_audit_transaction_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../modals/modal-audit-transaction-details/modal-audit-transaction-details.component */ "./src/app/views/modals/modal-audit-transaction-details/modal-audit-transaction-details.component.ts");
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../users/users.service */ "./src/app/views/users/users.service.ts");
/* harmony import */ var src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/shared/services/excel.service */ "./src/app/shared/services/excel.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _roles1_roles_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../roles1/roles.service */ "./src/app/views/roles1/roles.service.ts");
/* harmony import */ var _roles1_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../roles1/models/fmosNewRolePermissions */ "./src/app/views/roles1/models/fmosNewRolePermissions.ts");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_20__);





















let ExcelDataAuthorizationFirstComponent = class ExcelDataAuthorizationFirstComponent {
    constructor(api, roleService, dialog, userApi, snackBar, excelService, datepipe) {
        this.api = api;
        this.roleService = roleService;
        this.dialog = dialog;
        this.userApi = userApi;
        this.snackBar = snackBar;
        this.excelService = excelService;
        this.datepipe = datepipe;
        this.roleCodes = new _roles1_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_18__["permissionsLabels"]();
        this.paginator = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
        this.approveButtonStatus = true;
        // tslint:disable-next-line: no-inferrable-types
        this.spinner = false;
        this.firstAndSecondAuthAuditLogRespDTO = new _audit_logs_dto_first_second__WEBPACK_IMPORTED_MODULE_12__["FirstAndSecondAuthAuditLogRespDTO"]();
        this.excelDataAuthFirstDetails = new src_app_shared_models_user__WEBPACK_IMPORTED_MODULE_11__["User"]();
        this.flag = false;
        this.dummyQenPMJNuqUwhg5W8UMFs66YBXrBVhhZzMFt = new Array();
        this.items = [10, 20, 30, 40];
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.dummyPendingForAuthDataDetails);
        this.dataSourcePendingForAuth = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.pendingForAuthData);
        this.displayedColumns = [
            'account',
            'ccyCd',
            'branchCode',
            'amount',
            'lcyEquivalent',
            'drCr',
            'exchRate',
            'relatedAccount',
            'addlText',
            'accDesc',
            'treasuryReference',
            'view'
        ];
        this.displayedColumnsPendingAuth = [
            'detailsQueryToggle',
            'externalSysName',
            'currency',
            'inputBy',
            'batchNumber',
            'processName',
            'processingDate',
            'authStatus',
            'uploadStatus',
            'filename',
            'remarks',
            'overrides',
            'totalNoOfRecord',
            'totalCredit',
            'totalDebit'
        ];
        this.button_permission = {};
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"]('en-US');
        this.now = Date.now();
        this.dataForProcessScreen = new Array();
        this.dataForProcessScreenSingle = new _audit_logs_dto_first_second__WEBPACK_IMPORTED_MODULE_12__["DataForProcessScreen"]();
        this.dataForProcessScreen1 = [];
    }
    ngOnInit() {
        setTimeout(() => {
            this.newRolePermissions();
        }, 2000);
        this.roleService.screenLabelList.subscribe(message => this.roleCodes = message);
        this.flag = false;
        this.firstLevelAuthorizationStatus = {};
        this.approveButtonStatus = false;
        this.user_id = sessionStorage.getItem('user_id');
        this.role = sessionStorage.getItem('user_role');
        this.getPendingForAuthData();
        // this.screenpermission();
        this.dummyQenPMJNuqUwhg5W8UMFs66YBXrBVhhZzMFt = new Array();
    }
    screenpermission() {
        this.screenName = 'UploadProcessAuthorization';
        // this.role='ROLE1';
        this.userApi.getRoleScreenPermission(this.user_id, this.screenName, this.role).subscribe(res => {
            this.rolepermission = res;
            // console.log(this.rolepermission);
            if (this.rolepermission) {
                this.button_permission = this.rolepermission[0];
                // console.log( this.button_permission);
            }
        });
    }
    applyFilter(filterValue) {
        this.dataSourcePendingForAuth.filter = filterValue.trim().toLowerCase();
    }
    reject() {
        this.reasonBoolean = true;
        if (!this.rejectReason) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire("Enter the reason for Rejection");
        }
        console.log("rejectreason" + this.rejectReason);
        if (this.pendingForAuthDetailsDTOList[0].inputBy == this.user_id) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire('Maker cannot reject the record.');
            return;
        }
        this.authprocess = true;
        this.approveButtonStatus = false;
        this.deUploadReqDTO = new _shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_7__["DeUploadReqDTO"]();
        this.deUploadReqDTO.pendingForAuthDTO = this.deUploadPendingForAuthDTO;
        this.deUploadReqDTO.pendingForAuthDetailsDTOList = this.pendingForAuthDetailsDTOList;
        this.api.rejectCallApi(this.deUploadReqDTO, this.user_id, this.rejectReason).subscribe(resp => {
            this.datarejection = resp;
            console.log(this.datarejection);
            if (this.datarejection) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire('Rejection successful.');
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire('Rejection failed.');
            }
            this.reasonBoolean = false;
            this.authprocess = false;
        });
        this.getPendingForAuthData();
        this.dummyPendingForAuthDataDetails = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.dummyPendingForAuthDataDetails);
    }
    newRolePermissions() {
        this.roleService.fetchScreenPermissions('Authorize Excel');
    }
    approveDetailsData() {
        if (this.pendingForAuthDetailsDTOList) {
            this.todaydate = this.pipe.transform(this.now, 'dd-MMM-yy');
            this.uploaddate = this.pipe.transform(this.pendingForAuthDetailsDTOList[0].uploadDate, 'dd-MMM-yy');
            console.log('date for compare', this.todaydate, this.uploaddate);
            if (this.todaydate === this.uploaddate) {
            }
            else {
                console.log('inside if');
                sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire('Unable to authorized.', 'backdated authorization not allowed.');
                return;
            }
        }
        if (this.pendingForAuthDetailsDTOList[0].inputBy == this.user_id) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire('Maker cannot authorize and process the record.');
            return;
        }
        this.authprocess = true;
        this.approveButtonStatus = false;
        this.deUploadReqDTO = new _shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_7__["DeUploadReqDTO"]();
        this.deUploadReqDTO.pendingForAuthDTO = this.deUploadPendingForAuthDTO;
        this.deUploadReqDTO.pendingForAuthDetailsDTOList = this.pendingForAuthDetailsDTOList;
        console.log('for authorization', this.deUploadReqDTO);
        this.api.approveDetailsData(this.deUploadReqDTO, this.user_id).subscribe(resp => {
            this.firstLevelAuthorizationStatus = resp;
            console.log(this.firstLevelAuthorizationStatus);
            this.authprocess = false;
            if (!this.firstLevelAuthorizationStatus) {
                // this.openSnackBarLongDuration('Data Failed for first Level authorization', '');
                sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire('Data authorization is failed.');
                return;
            }
            if (this.firstLevelAuthorizationStatus) {
                this.process = true;
                // refresh the data
                this.getPendingForAuthData();
                this.approval = false;
                // this.openSnackBarLongDuration('Data Successfully authorized to first level', '');
                // console.log('Data Successfully authorized to first level');
                // Swal.fire(
                //   'Data Successfully authorized.',
                //   'We are processing the data .....',
                // );
                // 2nd api calling FOR AUDIT LOG REFRESH
                // console.log(this.getDetailsQueryToggleReqDTO);
                // this.getDataWithAudit(this.getDetailsQueryToggleReqDTO);
                // call the process.
                this.Process();
            }
        }, error => {
            sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                type: 'error',
                title: 'Server Error.',
                text: 'Data authorization failed.',
            });
        });
        this.getPendingForAuthData();
        this.dummyPendingForAuthDataDetails = [];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.dummyPendingForAuthDataDetails);
    }
    // getDataWithAudit(getDetailsQueryToggleReqDTO){
    //   this.api
    //   .queryDetailsDataByParamService(getDetailsQueryToggleReqDTO)
    //   .subscribe(resp => {
    //     this.data2=resp;
    //     console.log('for audit log',this.data2);
    //   });
    // }
    Process() {
        this.spinner = true;
        this.deUploadReqDTO = new _shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_7__["DeUploadReqDTO"]();
        this.deUploadReqDTO.pendingForAuthDTO = this.deUploadPendingForAuthDTO;
        this.deUploadReqDTO.pendingForAuthDetailsDTOList = this.pendingForAuthDetailsDTOList;
        this.flag = false;
        console.log(this.deUploadReqDTO);
        // processDeUpload
        this.api.processDeUploadt(this.deUploadReqDTO, this.user_id).subscribe(resp => {
            // this.deUploadStatus = resp;
            this.responseforDE = resp;
            console.log('Response ::' + this.responseforDE);
            if (!this.responseforDE) {
                this.spinner = false;
                // this.openSnackBarLongDuration('Data Failed to Upload In Demodule', '');
                sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire({
                    type: 'error',
                    title: 'Unable to connect core banking.',
                    text: 'Server Failed to process the request.',
                });
            }
            else {
                this.spinner = false;
                // Swal.fire(
                //   'Response for the process : ' + this.responseforDE,
                // );
            }
            // if (this.deUploadStatus.statusMessage == 'SUCCESS') {
            //   this.spinner = false;
            //   // this.openSnackBarLongDuration('Data Successfully Uploaded TO DeUpload', '');
            //   Swal.fire(
            //     
            //     'Data Successfully Uploaded TO DeUpload ',
            //     'success'
            //   );
            // }
        });
        // this.spinner = false;
    }
    getAuditLogData(getDetailsQueryToggleReqDTO) {
        this.api
            .getFirstAndSecondAuthAuditService(this.getDetailsQueryToggleReqDTO)
            .subscribe(resp => {
            this.firstAndSecondAuthAuditLogRespDTO = resp;
        });
    }
    queryDetailsDataByParam(pendingForAuthDTO) {
        this.process = false;
        this.approveButtonStatus = false;
        console.log(pendingForAuthDTO);
        // if (pendingForAuthDTO.uploadStatus == 'U') {
        //     this.approveButtonStatus = true;
        // }
        this.spinner1 = true;
        this.remarks = pendingForAuthDTO.remarks;
        //var arrayOfLines = $('#textAreaID').val().split('\n');
        this.overrides = pendingForAuthDTO.overrides;
        this.deUploadPendingForAuthDTO = pendingForAuthDTO;
        this.getDetailsQueryToggleReqDTO = new _shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_7__["GetDetailsQueryToggleReqDTO"]();
        this.getDetailsQueryToggleReqDTO.externalSysName =
            pendingForAuthDTO.externalSysName;
        this.getDetailsQueryToggleReqDTO.processName =
            pendingForAuthDTO.processName;
        this.getDetailsQueryToggleReqDTO.processingDate =
            pendingForAuthDTO.processingDate;
        this.getDetailsQueryToggleReqDTO.currency =
            pendingForAuthDTO.currency;
        this.getDetailsQueryToggleReqDTO.filename =
            pendingForAuthDTO.fileName;
        this.getDetailsQueryToggleReqDTO.batchNumber =
            pendingForAuthDTO.batchNumber;
        this.getDetailsQueryToggleReqDTO.overrides = this.overrides;
        console.log(this.getDetailsQueryToggleReqDTO);
        // api call
        this.api
            .queryDetailsDataByParamService(this.getDetailsQueryToggleReqDTO)
            .subscribe(resp => {
            console.log("backend row data after query", resp);
            this.pendingForAuthDetailsDTOList = resp;
            // console.log(this.pendingForAuthDetailsDTOList);
            // console.log(this.pendingForAuthDetailsDTOList[0].secondTimeAuthorizer);
            // edited by pbt
            if (this.pendingForAuthDetailsDTOList[0].inputBy == this.user_id) {
                console.log(this.user_id);
                console.log("true");
                this.reject1 = true;
            }
            if (this.pendingForAuthDetailsDTOList.length > 0) {
                this.approveButtonStatus = true;
                this.auth = true;
                this.spinner1 = false;
                this.approval = true;
                this.flag = true;
                this.button1 = true;
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.pendingForAuthDetailsDTOList);
                this.dataSource.paginator = this.paginator.toArray()[1];
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_10___default.a.fire('Data Not Found ');
            }
        });
        this.spinner1 = false;
    }
    getAllDetailsData() {
        this.api.getDetailsListServiceFirst().subscribe(resp => {
            this.queriedPendingForAuthDetailsDTOList = resp;
            // console.log('data from getAllDetailsData');
            // //console.log(this.queriedPendingForAuthDetailsDTOList.);
            console.log("loged in user ", this.user_id);
            // if(this.queriedPendingForAuthDetailsDTOList[0].inputBy== this.user_id)
            // {
            //   console.log(true);
            // }
            // if(this.queriedPendingForAuthDetailsDTOList[0].inputBy!= this.user_id)
            // {
            //   console.log(false);
            // }
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.queriedPendingForAuthDetailsDTOList);
            this.dataSource.paginator = this.paginator.toArray()[1];
        });
    }
    getPendingForAuthData() {
        this.api.getPendingForAuthDataFirst(this.user_id).subscribe(resp => {
            // console.log(resp);
            this.pendingForAuthData = resp;
            // console.log(this.pendingForAuthData);
            // console.log("*** data will use for audit also"+this.pendingForAuthData)
            this.dataSourcePendingForAuth = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.pendingForAuthData);
            if (this.pendingForAuthData) {
                if (this.pendingForAuthData.authStatus === 'A') {
                    // detailed data for 2nd table
                    this.getAllDetailsData();
                    this.process = true;
                }
                else {
                }
            }
            this.dataSourcePendingForAuth.paginator = this.paginator.toArray()[0];
        });
    }
    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 2000
        });
    }
    openSnackBarLongDuration(message, action) {
        this.snackBar.open(message, action, {
            duration: 3000
        });
    }
    findRowsPerExtSys(extSysName) {
        this.dummyPendingForAuthDataDetails = new Array();
        for (const entry of this.pendingForAuthDetailsDTOList) {
            if (entry.sourceCode === extSysName) {
                // console.log(entry); // 1, "string", false
                this.dummyPendingForAuthDataDetails.push(entry);
            }
        }
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.dummyPendingForAuthDataDetails);
    }
    openDialog(detailsDto) {
        const dialogRef = this.dialog.open(_modals_modal_excel_auth_first_modal_excel_auth_first_component__WEBPACK_IMPORTED_MODULE_9__["ModalExcelAuthFirstComponent"], {
            data: detailsDto
        });
        dialogRef.afterClosed().subscribe(result => {
            // console.log(`Dialog result: ${result}`);
        });
    }
    openAuditDetails(detailsDto) {
        // //console.log("inside open audit details");
        this.api.getAuditDataOfDetailsRecord(detailsDto).subscribe(resp => {
            this.medDeUploadDetailHistEntityList = resp;
            // //console.log(this.medDeUploadDetailHistEntityList);
            const dialogRef = this.dialog.open(_modals_modal_audit_transaction_details_modal_audit_transaction_details_component__WEBPACK_IMPORTED_MODULE_13__["ModalAuditTransactionDetailsComponent"], {
                data: this.medDeUploadDetailHistEntityList
            });
            dialogRef.afterClosed().subscribe(result => {
                // console.log(`Dialog result: ${result}`);
            });
        });
    }
    downloadData() {
        this.button1 = false;
        console.log(this.pendingForAuthDetailsDTOList);
        this.pendingForAuthDetailsDTOList.forEach((element) => {
            if (element.drCr == 'C') {
                this.credit = element.lcyEquivalent;
                this.debit = 0;
            }
            else {
                this.debit = element.lcyEquivalent;
                this.credit = 0;
            }
            this.dataForProcessScreen1.push({
                Batch_No: element.id.batchNo,
                //Refrence No : element.id.refNo, // 2 skiiping this user can see this in FlexCube
                Account_Branch: element.accountBranch,
                Account: element.account,
                Acc_Desc: element.accDesc,
                DrCr: element.drCr,
                Trn_Code: element.txnCode,
                Transaction_Desc: element.trnDesc,
                FcyAmount: element.amount,
                Exch_Rate: element.exchRate,
                DrLcyAmt: this.debit,
                CrLcyAmt: this.credit,
                Instr_code: element.instrumentNo,
                Value_Date: this.pipe.transform(element.valueDate, 'dd-MMM-yy'),
                User_Id: element.inputBy,
                Authorizer_ID: element.firstTimeAuthorizer,
            });
            console.log(this.dataForProcessScreen1);
        });
        console.log('final data', this.dataForProcessScreen1);
        this.excelService.exportAsExcelFile(this.dataForProcessScreen1, 'Excel_Upload_Data'); // this.pendingForAuthDetailsDTOList[0]
        this.dataForProcessScreen1 = [];
    }
    //pdf download
    convert() {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_20___default.a({
            orientation: "landscape",
        });
        doc.setFont("helvetica");
        doc.setFontType("bold");
        doc.setFontSize(9);
        var col = [["BatchNo",
                //Refrence No : // 2 skiiping this, user can see this in FlexCube
                "AccBranch",
                "Acc",
                "AccDesc",
                "DrCr",
                "TrnCode",
                "TrnDesc",
                "FcyAmt",
                "Rate",
                "DrLcyAmt",
                "CrLcyAmt",
                "InstrCode",
                "ValueDate",
                "UserId",
                "AuthId"]]; // 16
        var rows = [];
        /* The following array of object as response from the API req */
        console.log(this.pendingForAuthDetailsDTOList);
        var itemNew = this.pendingForAuthDetailsDTOList;
        itemNew.forEach(element => {
            /** For finding out is lcyAmount
             * is debited or credited based on that will
             * assign value to credit/debit field
            */
            if (element.drCr == 'C') {
                this.pdfCreditVar = element.lcyEquivalent;
                this.pdfDebitVar = 0;
            }
            else {
                this.pdfDebitVar = element.lcyEquivalent;
                this.pdfCreditVar = 0;
            }
            this.valueDate = this.pipe.transform(element.valueDate, 'dd-MMM-yy'); //14
            // this.valueDate = new Date(element.valueDate);
            var date = new Date(element.timeForExport).toLocaleDateString("en-us");
            console.log(date);
            var temp = [element.id.batchNo,
                // Refrence No : element.id.refNo, // 2 skiiping this user can see this in FlexCube
                element.accountBranch,
                element.account,
                element.accDesc,
                element.drCr,
                element.txnCode,
                element.trnDesc,
                element.amount,
                element.exchRate,
                this.pdfDebitVar,
                this.pdfCreditVar,
                element.instrumentNo,
                this.valueDate,
                element.inputBy,
                element.firstTimeAuthorizer]; //16
            rows.push(temp);
        });
        //doc.autoTable(col, rows);
        doc.autoTable({
            head: col,
            body: rows,
            theme: 'striped',
            margin: { top: 25, bottom: 15 },
            styles: { overflow: 'linebreak',
                fontSize: 8 },
            showHeader: 'everyPage',
        });
        doc.save('ExcelDAtaAuthFirst.pdf');
    }
};
ExcelDataAuthorizationFirstComponent.ctorParameters = () => [
    { type: src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: _roles1_roles_service__WEBPACK_IMPORTED_MODULE_17__["RoleService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _users_users_service__WEBPACK_IMPORTED_MODULE_14__["UsersService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
    { type: src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_15__["ExcelService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ExcelDataAuthorizationFirstComponent.prototype, "paginator", void 0);
ExcelDataAuthorizationFirstComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-excel-data-authorization-first',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./excel-data-authorization-first.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/excel-data-authorization-first/excel-data-authorization-first.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./excel-data-authorization-first.component.scss */ "./src/app/views/excel-data-authorization-first/excel-data-authorization-first.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"],
        _roles1_roles_service__WEBPACK_IMPORTED_MODULE_17__["RoleService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
        _users_users_service__WEBPACK_IMPORTED_MODULE_14__["UsersService"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
        src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_15__["ExcelService"],
        _angular_common__WEBPACK_IMPORTED_MODULE_16__["DatePipe"]])
], ExcelDataAuthorizationFirstComponent);



/***/ }),

/***/ "./src/app/views/excel-data-authorization-first/excel-data-authorization-first.module.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/excel-data-authorization-first/excel-data-authorization-first.module.ts ***!
  \***********************************************************************************************/
/*! exports provided: ExcelDataAuthorizationFirstModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelDataAuthorizationFirstModule", function() { return ExcelDataAuthorizationFirstModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _excel_data_authorization_first_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./excel-data-authorization-first.component */ "./src/app/views/excel-data-authorization-first/excel-data-authorization-first.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _excel_data_authorization_first_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./excel-data-authorization-first-routing.module */ "./src/app/views/excel-data-authorization-first/excel-data-authorization-first-routing.module.ts");
/* harmony import */ var src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/angular-material/angular-material.module */ "./src/app/shared/angular-material/angular-material.module.ts");








let ExcelDataAuthorizationFirstModule = class ExcelDataAuthorizationFirstModule {
};
ExcelDataAuthorizationFirstModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_excel_data_authorization_first_component__WEBPACK_IMPORTED_MODULE_3__["ExcelDataAuthorizationFirstComponent"]],
        entryComponents: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_excel_data_authorization_first_routing_module__WEBPACK_IMPORTED_MODULE_6__["firstAuthRoutes"]),
        ]
    })
], ExcelDataAuthorizationFirstModule);



/***/ })

}]);
//# sourceMappingURL=views-excel-data-authorization-first-excel-data-authorization-first-module-es2015.js.map