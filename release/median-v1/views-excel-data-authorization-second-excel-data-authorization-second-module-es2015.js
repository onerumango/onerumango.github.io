(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-excel-data-authorization-second-excel-data-authorization-second-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/excel-data-authorization-second/excel-data-authorization-second.component.html":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/excel-data-authorization-second/excel-data-authorization-second.component.html ***!
  \********************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div style=\"background-color:rgb(183, 247, 191)\">\r\n  <h1>Data Amend Authorization</h1>\r\n</div> -->\r\n<mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n  <span>Authorize Modifications </span>\r\n</mat-toolbar>\r\n<br />\r\n<div class=\"wrapper\">\r\n  <h3 style=\"font-size: large;\">Pending For Authorization</h3>\r\n</div>\r\n<br />\r\n<div class=\"mat-elevation-z8 \">\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n  </mat-form-field>\r\n  \r\n  <table mat-table [dataSource]=\"dataSourcePendingForAuth\">\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"detailsQueryToggle\">\r\n      <th mat-header-cell *matHeaderCellDef>Process Details</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"queryDetailsDataByParam(element)\" style=\"height : 90%\">\r\n          Get Details\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"externalSysName\">\r\n      <th mat-header-cell *matHeaderCellDef>External System</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.externalSysName }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"processName\">\r\n      <th mat-header-cell *matHeaderCellDef>Process Name</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.processName }}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"batchNumber\">\r\n      <th mat-header-cell *matHeaderCellDef>Batch Number</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.batchNumber }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"processingDate\">\r\n      <th mat-header-cell *matHeaderCellDef>Processing Date</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        {{ element.processingDate | date }}\r\n      </td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"currency\">\r\n      <th mat-header-cell *matHeaderCellDef>Currency</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        {{ element.currency }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"filename\">\r\n      <th mat-header-cell *matHeaderCellDef>File Name</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.fileName }}</td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumnsPendingAuth\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumnsPendingAuth\"></tr>\r\n  </table>\r\n\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20, 30, 40, 50, 60]\" showFirstLastButtons></mat-paginator>\r\n</div>\r\n<br />\r\n<br />\r\n<br />\r\n\r\n<div class=\"mat-elevation-z8 \">\r\n  <button mat-raised-button color=\"primary\" (click)=\"downloadData()\" *ngIf=\"button1\">\r\n    Download Uploaded Data\r\n    </button>\r\n  <table mat-table [dataSource]=\"dataSource\">\r\n    <ng-container matColumnDef=\"versionNo\">\r\n      <th mat-header-cell *matHeaderCellDef></th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        <input size=\"10\" STYLE=\"background-color: rgb(19, 235, 73); height: 20px;\" *ngIf=\"element.versionNo == 0\" value=\"New Value\"\r\n          readonly />\r\n        <input size=\"10\" STYLE=\"background-color: rgb(247, 114, 125); height: 20px;\" *ngIf=\"element.versionNo >= 1\" value=\"Old Value\"\r\n          readonly />\r\n      </td>\r\n    </ng-container>\r\n    <!-- Position Column -->\r\n\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"account\">\r\n      <th mat-header-cell *matHeaderCellDef>Account</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.account }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"ccyCd\">\r\n      <th mat-header-cell *matHeaderCellDef>Currency</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        {{ element.ccyCd }}\r\n      </td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"branchCode\">\r\n      <th mat-header-cell *matHeaderCellDef>Branch</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.branchCode }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"amount\">\r\n      <th mat-header-cell *matHeaderCellDef>Amount</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.amount }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"lcyEquivalent\">\r\n      <th mat-header-cell *matHeaderCellDef>Lcy Amount</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.lcyEquivalent }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"drCr\">\r\n      <th mat-header-cell *matHeaderCellDef>Dr/Cr</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.drCr }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"exchRate\">\r\n      <th mat-header-cell *matHeaderCellDef>Exchange Rate</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.exchRate }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"relatedAccount\">\r\n      <th mat-header-cell *matHeaderCellDef>Related Account</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.relatedAccount }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n  \r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"addlText\">\r\n      <th mat-header-cell *matHeaderCellDef>Addl Text</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.addlText }}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"treasuryReference\">\r\n      <th mat-header-cell *matHeaderCellDef>Treasury Reference</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{element.acumenJournal}}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"view\">\r\n      <th mat-header-cell *matHeaderCellDef>Process</th>\r\n      <td mat-cell *matCellDef=\"let element\" [style.color]=\"element.color\" data-label=\"color\">\r\n        <button mat-raised-button color=\"primary\" *ngIf=\"element.versionNo >= 1\" (click)=\"viewOperation(element)\" style=\"height : 90%\">\r\n          View\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\r\n  </table>\r\n\r\n  <mat-paginator [pageSize]=\"4\" [pageSizeOptions]=\"[5, 10, 20, 30, 40, 50, 60]\" showFirstLastButtons></mat-paginator>\r\n</div>\r\n<br />\r\n<br />\r\n<div class=\"wrapper\">\r\n  <button mat-raised-button color=\"primary\" *ngIf=\"flag\" (click)=\"approveSecondLevel()\" style=\"height : 90%\">\r\n    Approve Data\r\n  </button>\r\n  <mat-progress-bar mode=\"indeterminate\" *ngIf=\"progress\"></mat-progress-bar>\r\n</div>\r\n<br />\r\n<h5 *ngIf=\"spinner\"> Please Wait....</h5>\r\n<mat-progress-bar mode=\"indeterminate\" *ngIf=\"spinner\"></mat-progress-bar>\r\n\r\n<div fxLayout=\"row\">\r\n  <div fxFlex></div>\r\n  <div fxFlex=\"95\">\r\n    <mat-card style=\"width: 50%;  margin-left:300px;\">\r\n      <mat-card-title>\r\n\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n        <div fxLayout=\"row\">\r\n\r\n          <table id=\"customers\" *ngIf=\"flag1\">\r\n            <tr>\r\n              <th>Input By:</th>\r\n              <td>\r\n                <mat-chip>{{pendingForAuthDetailsListAll[0].inputBy}}</mat-chip>\r\n              </td>\r\n              <th>Input Date:</th>\r\n              <td>\r\n                <mat-chip>{{pendingForAuthDetailsListAll[0].inputTime | date:'M/d/yy'}}</mat-chip>\r\n              </td>\r\n\r\n            </tr>\r\n            <tr>\r\n              <th>Frist Auth By:</th>\r\n              <td>\r\n                <mat-chip>{{firstLevelAuthorizationStatus.amendAuthorizer}}</mat-chip>\r\n              </td>\r\n              <th>Frist Auth Date:</th>\r\n              <td>\r\n                <mat-chip>{{firstLevelAuthorizationStatus.amendAuthDate }}</mat-chip>\r\n              </td>\r\n              <th>Second Auth By:</th>\r\n              <td>\r\n                <mat-chip>{{firstLevelAuthorizationStatus.authorizer}}</mat-chip>\r\n              </td>\r\n              <th>Second Auth Date:</th>\r\n              <td>\r\n                <mat-chip>{{firstLevelAuthorizationStatus.authDate }}</mat-chip>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n<br><br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/modals/modal-excel-auth-second/modal-excel-auth-second.component.html":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/modals/modal-excel-auth-second/modal-excel-auth-second.component.html ***!
  \***********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>Transaction Details</h2>\r\n<div>\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    <input type=\"text\" class=\"newcolor\" size=\"14\" value=\"New Values\" readonly />\r\n    <input type=\"text\" class=\"oldcolor\" size=\"14\" value=\"Old Values\" readonly />\r\n  </label>\r\n  &nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    <input type=\"text\" class=\"newcolor\" size=\"14\" value=\"New Values\" readonly />\r\n    <input type=\"text\" class=\"oldcolor\" size=\"14\" value=\"Old Values\" readonly />\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    <input type=\"text\" class=\"newcolor\" size=\"14\" value=\"New Values\" readonly />\r\n    <input type=\"text\" class=\"oldcolor\" size=\"14\" value=\"Old Values\" readonly />\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Account Number :\r\n    <input type=\"text\" size=\"14\" value=\"{{ responseDtoList[0].account }}\" *ngIf=\"comparedValsList[0]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\"{{ responseDtoList[0].account }}\" *ngIf=\"!comparedValsList[0]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].account }}\" *ngIf=\"comparedValsList[0]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].account }}\" *ngIf=\"!comparedValsList[0]\" readonly />\r\n  </label>\r\n  &nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Amount:\r\n    <input type=\"text\" size=\"14\" value=\"{{ responseDtoList[0].amount }}\" *ngIf=\"comparedValsList[1]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\"{{ responseDtoList[0].amount }}\" *ngIf=\"!comparedValsList[1]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\"{{ responseDtoList[1].amount }}\" *ngIf=\"comparedValsList[1]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\"{{ responseDtoList[1].amount }}\" *ngIf=\"!comparedValsList[1]\" readonly />\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;\r\n    Account Currency :\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].ccyCd }}\" *ngIf=\"comparedValsList[2]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].ccyCd }}\" *ngIf=\"!comparedValsList[2]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].ccyCd }}\" *ngIf=\"comparedValsList[2]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].ccyCd }}\" *ngIf=\"!comparedValsList[2]\" readonly />\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Account Branch:\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].accountBranch }} \" *ngIf=\"comparedValsList[3]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].accountBranch }} \" *ngIf=\"!comparedValsList[3]\"\r\n      readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].accountBranch }} \" *ngIf=\"comparedValsList[3]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].accountBranch }} \" *ngIf=\"!comparedValsList[3]\"\r\n      readonly />\r\n  </label>\r\n  &nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    LCY\r\n    Amount:\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].lcyEquivalent }}\" *ngIf=\"comparedValsList[4]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].lcyEquivalent }}\" *ngIf=\"!comparedValsList[4]\"\r\n      readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].lcyEquivalent }}\" *ngIf=\"comparedValsList[4]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].lcyEquivalent }}\" *ngIf=\"!comparedValsList[4]\"\r\n      readonly />\r\n  </label>\r\n  &nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Debit / Credit\r\n    :\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].drCr }}\" *ngIf=\"comparedValsList[5]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].drCr }}\" *ngIf=\"!comparedValsList[5]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].drCr }}\" *ngIf=\"comparedValsList[5]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].drCr }}\" *ngIf=\"!comparedValsList[5]\" readonly />\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Branch Code\r\n    :\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].id.branchCode }}\" *ngIf=\"comparedValsList[6]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].id.branchCode }}\" *ngIf=\"!comparedValsList[6]\"\r\n      readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].id.branchCode }}\" *ngIf=\"comparedValsList[6]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].id.branchCode }}\" *ngIf=\"!comparedValsList[6]\"\r\n      readonly />\r\n  </label>\r\n  &nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Value\r\n    Date:\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].valueDate | date }}\" *ngIf=\"comparedValsList[7]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].valueDate | date}}\" *ngIf=\"!comparedValsList[7]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].valueDate | date}}\" *ngIf=\"comparedValsList[7]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].valueDate | date }}\" *ngIf=\"!comparedValsList[7]\" readonly />\r\n  </label>\r\n  &nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Initiation Date\r\n    :\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].id.initiationDate | date}}\" *ngIf=\"comparedValsList[8]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].id.initiationDate | date}}\" *ngIf=\"!comparedValsList[8]\"\r\n      readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].id.initiationDate | date}}\" *ngIf=\"comparedValsList[8]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].id.initiationDate | date}}\" *ngIf=\"!comparedValsList[8]\"\r\n      readonly />\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    External Reference:\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].externalRefNo }}\" *ngIf=\"comparedValsList[9]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].externalRefNo }}\" *ngIf=\"!comparedValsList[9]\"\r\n      readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].externalRefNo }}\" *ngIf=\"comparedValsList[9]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].externalRefNo }}\" *ngIf=\"!comparedValsList[9]\"\r\n      readonly />\r\n  </label>\r\n  &nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n    Related Account :\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].relatedAccount }}\" *ngIf=\"comparedValsList[10]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].relatedAccount }}\" *ngIf=\"!comparedValsList[10]\"\r\n      readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].relatedAccount }}\" *ngIf=\"comparedValsList[10]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].relatedAccount }}\" *ngIf=\"!comparedValsList[10]\"\r\n      readonly />\r\n  </label>\r\n  &nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;\r\n    Related Customer :\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].relCust }}\" *ngIf=\"comparedValsList[11]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].relCust }}\" *ngIf=\"!comparedValsList[11]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].relCust }}\" *ngIf=\"comparedValsList[11]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].relCust }}\" *ngIf=\"!comparedValsList[11]\" readonly />\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Exchange Rate\r\n    :\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].exchRate }}\" *ngIf=\"comparedValsList[12]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].exchRate }}\" *ngIf=\"!comparedValsList[12]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].exchRate }}\" *ngIf=\"comparedValsList[12]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].exchRate }}\" *ngIf=\"!comparedValsList[12]\" readonly />\r\n  </label>\r\n  &nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;\r\n    Related Reference :\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].relatedRef }}\" *ngIf=\"comparedValsList[13]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].relatedRef }}\" *ngIf=\"!comparedValsList[13]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].relatedRef }}\" *ngIf=\"comparedValsList[13]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].relatedRef }}\" *ngIf=\"!comparedValsList[13]\" readonly />\r\n  </label>\r\n  &nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Additional Text :\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].addlText }}\" *ngIf=\"comparedValsList[14]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].addlText }}\" *ngIf=\"!comparedValsList[14]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].addlText }}\" *ngIf=\"comparedValsList[14]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].addlText }}\" *ngIf=\"!comparedValsList[14]\" readonly />\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Instrument Number:\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].instrumentNo }}\" *ngIf=\"comparedValsList[15]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].instrumentNo }}\" *ngIf=\"!comparedValsList[15]\"\r\n      readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].instrumentNo }}\" *ngIf=\"comparedValsList[15]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].instrumentNo }}\" *ngIf=\"!comparedValsList[15]\"\r\n      readonly />\r\n  </label>\r\n  &nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Batch Number:\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].id.batchNo }}\" *ngIf=\"comparedValsList[16]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].id.batchNo }}\" *ngIf=\"!comparedValsList[16]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].id.batchNo }}\" *ngIf=\"comparedValsList[16]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].id.batchNo }}\" *ngIf=\"!comparedValsList[16]\" readonly />\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Upload Date:\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].uploadDate | date}}\" *ngIf=\"comparedValsList[17]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].uploadDate | date}}\" *ngIf=\"!comparedValsList[17]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].uploadDate | date}}\" *ngIf=\"comparedValsList[17]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].uploadDate | date}}\" *ngIf=\"!comparedValsList[17]\" readonly />\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Financial Cycle:\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].finCycle }}\" *ngIf=\"comparedValsList[18]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].finCycle }}\" *ngIf=\"!comparedValsList[18]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].finCycle }}\" *ngIf=\"comparedValsList[18]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].finCycle }}\" *ngIf=\"!comparedValsList[18]\" readonly />\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Period Code:\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].periodCode }}\" *ngIf=\"comparedValsList[19]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].periodCode }}\" *ngIf=\"!comparedValsList[19]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].periodCode }}\" *ngIf=\"comparedValsList[19]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].periodCode }}\" *ngIf=\"!comparedValsList[19]\" readonly />\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;\r\n    Transaction Code:\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].txnCode }}\" *ngIf=\"comparedValsList[20]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].txnCode }}\" *ngIf=\"!comparedValsList[20]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].txnCode }}\" *ngIf=\"comparedValsList[20]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].txnCode }}\" *ngIf=\"!comparedValsList[20]\" readonly />\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    MIS_CODE:\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].misCode }}\" *ngIf=\"comparedValsList[21]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].misCode }}\" *ngIf=\"!comparedValsList[21]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].misCode }}\" *ngIf=\"comparedValsList[21]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].misCode }}\" *ngIf=\"!comparedValsList[21]\" readonly />\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    POOL_CODE:\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].poolCode }}\" *ngIf=\"comparedValsList[22]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].poolCode }}\" *ngIf=\"!comparedValsList[22]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].poolCode }}\" *ngIf=\"comparedValsList[22]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].poolCode }}\" *ngIf=\"!comparedValsList[22]\" readonly />\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    TXN_MIS_1:\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].txnMis1 }}\" *ngIf=\"comparedValsList[23]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].txnMis1 }}\" *ngIf=\"!comparedValsList[23]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].txnMis1 }}\" *ngIf=\"comparedValsList[23]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].txnMis1 }}\" *ngIf=\"!comparedValsList[23]\" readonly />\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    MIS_GROUP:\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].misGroup }}\" *ngIf=\"comparedValsList[24]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].misGroup }}\" *ngIf=\"!comparedValsList[24]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].misGroup }}\" *ngIf=\"comparedValsList[24]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].misGroup }}\" *ngIf=\"!comparedValsList[24]\" readonly />\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    MIS_FLAG:\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].misFlag }}\" *ngIf=\"comparedValsList[25]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].misFlag }}\" *ngIf=\"!comparedValsList[25]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].misFlag }}\" *ngIf=\"comparedValsList[25]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].misFlag }}\" *ngIf=\"!comparedValsList[25]\" readonly />\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    TXN_MIS_2:\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].txnMis2 }}\" *ngIf=\"comparedValsList[26]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].txnMis2 }}\" *ngIf=\"!comparedValsList[26]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].txnMis2 }}\" *ngIf=\"comparedValsList[26]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].txnMis2 }}\" *ngIf=\"!comparedValsList[26]\" readonly />\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    MIS_HEAD:\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].misHead }}\" *ngIf=\"comparedValsList[27]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].misHead }}\" *ngIf=\"!comparedValsList[27]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].misHead }}\" *ngIf=\"comparedValsList[27]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].misHead }}\" *ngIf=\"!comparedValsList[27]\" readonly />\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;\r\n    MIS_GROUP_TXN :\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].misGroupTxn }}\" *ngIf=\"comparedValsList[28]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].misGroupTxn }}\" *ngIf=\"!comparedValsList[28]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].misGroupTxn }}\" *ngIf=\"comparedValsList[28]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].misGroupTxn }}\" *ngIf=\"!comparedValsList[28]\" readonly />\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    TXN_MIS_3:\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].txnMis3 }}\" *ngIf=\"comparedValsList[29]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].txnMis3 }}\" *ngIf=\"!comparedValsList[29]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].txnMis3 }}\" *ngIf=\"comparedValsList[29]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].txnMis3 }}\" *ngIf=\"!comparedValsList[29]\" readonly />\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COMP_MIS_1:\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].compMis1 }}\" *ngIf=\"comparedValsList[30]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].compMis1 }}\" *ngIf=\"!comparedValsList[30]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].compMis1 }}\" *ngIf=\"comparedValsList[30]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].compMis1 }}\" *ngIf=\"!comparedValsList[30]\" readonly />\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COMP_MIS_3 :\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].compMis3 }}\" *ngIf=\"comparedValsList[31]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].compMis3 }}\" *ngIf=\"!comparedValsList[31]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].compMis3 }}\" *ngIf=\"comparedValsList[31]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].compMis3 }}\" *ngIf=\"!comparedValsList[31]\" readonly />\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    TXN_MIS_4:\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].txnMis4 }}\" *ngIf=\"comparedValsList[32]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].txnMis4 }}\" *ngIf=\"!comparedValsList[32]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].txnMis4 }}\" *ngIf=\"comparedValsList[32]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].txnMis4 }}\" *ngIf=\"!comparedValsList[32]\" readonly />\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COMP_MIS_2\r\n    :\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].compMis2 }}\" *ngIf=\"comparedValsList[33]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].compMis2 }}\" *ngIf=\"!comparedValsList[33]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].compMis2 }}\" *ngIf=\"comparedValsList[33]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].compMis2 }}\" *ngIf=\"!comparedValsList[33]\" readonly />\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COMP_MIS_4 :\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].compMis4 }}\" *ngIf=\"comparedValsList[34]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].compMis4 }}\" *ngIf=\"!comparedValsList[34]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].compMis4 }}\" *ngIf=\"comparedValsList[34]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].compMis4 }}\" *ngIf=\"!comparedValsList[34]\" readonly />\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    TXN_MIS_5\r\n    :\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].txnMis5 }}\" *ngIf=\"comparedValsList[35]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].txnMis5 }}\" *ngIf=\"!comparedValsList[35]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].txnMis5 }}\" *ngIf=\"comparedValsList[35]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].txnMis5 }}\" *ngIf=\"!comparedValsList[35]\" readonly />\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COMP_MIS_5\r\n    :\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].compMis5 }}\" *ngIf=\"comparedValsList[36]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].compMis5 }}\" *ngIf=\"!comparedValsList[36]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].compMis5 }}\" *ngIf=\"comparedValsList[36]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].compMis5 }}\" *ngIf=\"!comparedValsList[36]\" readonly />\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COST_CODE_1 :\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].costCode1 }}\" *ngIf=\"comparedValsList[37]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].costCode1 }}\" *ngIf=\"!comparedValsList[37]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].costCode1 }}\" *ngIf=\"comparedValsList[37]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].costCode1 }}\" *ngIf=\"!comparedValsList[37]\" readonly />\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    TXN_MIS_6\r\n    :\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].txnMis6 }}\" *ngIf=\"comparedValsList[38]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].txnMis6 }}\" *ngIf=\"!comparedValsList[38]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].txnMis6 }}\" *ngIf=\"comparedValsList[38]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].txnMis6 }}\" *ngIf=\"!comparedValsList[38]\" readonly />\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COMP_MIS_6\r\n    :\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].compMis6 }}\" *ngIf=\"comparedValsList[39]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].compMis6 }}\" *ngIf=\"!comparedValsList[39]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].compMis6 }}\" *ngIf=\"comparedValsList[39]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].compMis6 }}\" *ngIf=\"!comparedValsList[39]\" readonly />\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COST_CODE_2 :\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].costCode2 }}\" *ngIf=\"comparedValsList[40]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].costCode2 }}\" *ngIf=\"!comparedValsList[40]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].costCode2 }}\" *ngIf=\"comparedValsList[40]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].costCode2 }}\" *ngIf=\"!comparedValsList[40]\" readonly />\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    TXN_MIS_7\r\n    :\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].txnMis7 }}\" *ngIf=\"comparedValsList[41]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].txnMis7 }}\" *ngIf=\"!comparedValsList[41]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].txnMis7 }}\" *ngIf=\"comparedValsList[41]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].txnMis7 }}\" *ngIf=\"!comparedValsList[41]\" readonly />\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COMP_MIS_7\r\n    :\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].compMis7 }}\" *ngIf=\"comparedValsList[42]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].compMis7 }}\" *ngIf=\"!comparedValsList[42]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].compMis7 }}\" *ngIf=\"comparedValsList[42]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].compMis7 }}\" *ngIf=\"!comparedValsList[42]\" readonly />\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COST_CODE_3 :\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].costCode3 }}\" *ngIf=\"comparedValsList[43]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].costCode3 }}\" *ngIf=\"!comparedValsList[43]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].costCode3 }}\" *ngIf=\"comparedValsList[43]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].costCode3 }}\" *ngIf=\"!comparedValsList[43]\" readonly />\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    TXN_MIS_8\r\n    :\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].txnMis8 }}\" *ngIf=\"comparedValsList[44]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].txnMis8 }}\" *ngIf=\"!comparedValsList[44]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].txnMis8 }}\" *ngIf=\"comparedValsList[44]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].txnMis8 }}\" *ngIf=\"!comparedValsList[44]\" readonly />\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COMP_MIS_8\r\n    :\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].compMis8 }}\" *ngIf=\"comparedValsList[45]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].compMis8 }}\" *ngIf=\"!comparedValsList[45]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].compMis8 }}\" *ngIf=\"comparedValsList[45]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].compMis8 }}\" *ngIf=\"!comparedValsList[45]\" readonly />\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COST_CODE_4 :\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].costCode4 }}\" *ngIf=\"comparedValsList[46]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].costCode4 }}\" *ngIf=\"!comparedValsList[46]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].costCode4 }}\" *ngIf=\"comparedValsList[46]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].costCode4 }}\" *ngIf=\"!comparedValsList[46]\" readonly />\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    TXN_MIS_9\r\n    :\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].txnMis9 }}\" *ngIf=\"comparedValsList[47]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].txnMis9 }}\" *ngIf=\"!comparedValsList[47]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].txnMis9 }}\" *ngIf=\"comparedValsList[47]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].txnMis9 }}\" *ngIf=\"!comparedValsList[47]\" readonly />\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COMP_MIS_9\r\n    :\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].compMis9 }}\" *ngIf=\"comparedValsList[48]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].compMis9 }}\" *ngIf=\"!comparedValsList[48]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].compMis9 }}\" *ngIf=\"comparedValsList[48]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].compMis9 }}\" *ngIf=\"!comparedValsList[48]\" readonly />\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COST_CODE_5 :\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].costCode5 }}\" *ngIf=\"comparedValsList[49]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].costCode5 }}\" *ngIf=\"!comparedValsList[49]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].costCode5 }}\" *ngIf=\"comparedValsList[49]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].costCode5 }}\" *ngIf=\"!comparedValsList[49]\" readonly />\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    TXN_MIS_10\r\n    :\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].txnMis10 }}\" *ngIf=\"comparedValsList[50]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].txnMis10 }}\" *ngIf=\"!comparedValsList[50]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].txnMis10 }}\" *ngIf=\"comparedValsList[50]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].txnMis10 }}\" *ngIf=\"!comparedValsList[50]\" readonly />\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COMP_MIS_10\r\n    :\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].compMis10 }}\" *ngIf=\"comparedValsList[51]\"\r\n      class=\"newcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[0].compMis10 }}\" *ngIf=\"!comparedValsList[51]\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].compMis10 }}\" *ngIf=\"comparedValsList[51]\"\r\n      class=\"oldcolor\" readonly />\r\n    <input type=\"text\" size=\"14\" value=\" {{ responseDtoList[1].compMis10 }}\" *ngIf=\"!comparedValsList[51]\" readonly />\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    Udf Details :\r\n    <input type=\"text\" class=\"newcolor\" size=\"14\" value=\" {{ responseDtoList[1].udfDetails }}\" *ngIf=\"!comparedValsList[51]\" readonly />\r\n    <input type=\"text\" class=\"oldcolor\" size=\"14\" value=\" {{ responseDtoList[0].udfDetails }}\" *ngIf=\"!comparedValsList[51]\" readonly />\r\n    &nbsp;&nbsp;&nbsp;\r\n    UPLOAD STATUS :\r\n    <input type=\"text\" size=\"14\" value=\"{{ responseDtoList[1].uploadStat }}\" STYLE=\"background-color: rgba(203, 233, 122, 0.849);\" readonly />\r\n  </label>\r\n\r\n  <button mat-raised-button color=\"primary\" class=\"no-hover-effect\" mat-dialog-close>Exit</button>\r\n</div>");

/***/ }),

/***/ "./src/app/views/excel-data-authorization-second/excel-data-authorization-second-routing.module.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/views/excel-data-authorization-second/excel-data-authorization-second-routing.module.ts ***!
  \*********************************************************************************************************/
/*! exports provided: secondAuthRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "secondAuthRoutes", function() { return secondAuthRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _excel_data_authorization_second_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./excel-data-authorization-second.component */ "./src/app/views/excel-data-authorization-second/excel-data-authorization-second.component.ts");


const secondAuthRoutes = [
    {
        path: '',
        component: _excel_data_authorization_second_component__WEBPACK_IMPORTED_MODULE_1__["ExcelDataAuthorizationSecondComponent"]
    }
];


/***/ }),

/***/ "./src/app/views/excel-data-authorization-second/excel-data-authorization-second.component.scss":
/*!******************************************************************************************************!*\
  !*** ./src/app/views/excel-data-authorization-second/excel-data-authorization-second.component.scss ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  border-collapse: initial;\n  width: 100%;\n  text-align: center !important;\n}\n\n.mat-header-cell {\n  text-align: center;\n  height: 25px !important;\n}\n\n.mat-cell {\n  text-align: center;\n  height: 25px !important;\n}\n\ntr:nth-child(even) {\n  background-color: #f2f2f2;\n  height: 25px !important;\n}\n\nth {\n  background-color: #1b9ab9;\n  color: #f4fcf6;\n  font-weight: small;\n  height: 25px !important;\n}\n\ntr {\n  background-color: #b8def0;\n  color: #221d1d;\n  font-weight: small;\n  height: 25px !important;\n}\n\nmat-paginator {\n  width: auto !important;\n  height: 40px !important;\n}\n\nmd-pagination-wrapper {\n  width: auto !important;\n  height: 40px !important;\n}\n\nmd-row:nth-child(even) {\n  background-color: #edf1f5;\n}\n\nmd-row:nth-child(odd) {\n  background-color: #fdfdfb;\n}\n\np {\n  padding-left: 510px;\n}\n\nh1 {\n  color: #b60c61;\n  font-family: Impact, Charcoal, sans-serif;\n  font-size: 32px;\n  font-weight: bold;\n  margin-top: 0px;\n  margin-bottom: 1px;\n}\n\nh3 {\n  color: #0a0a0a;\n  font-family: Charcoal, sans-serif;\n  font-size: 30px;\n  font-weight: bold;\n  margin-top: 0px;\n  margin-bottom: 1px;\n}\n\n.button {\n  padding: 10px 10px;\n  font-size: 12px;\n  text-align: center;\n  cursor: pointer;\n  outline: none;\n  color: #fff;\n  background-color: #4caf50;\n  border: none;\n}\n\n.button:hover {\n  background-color: #cc2525;\n}\n\n.button:active {\n  background-color: #3e8e41;\n  box-shadow: 0 5px #666;\n  transform: translateY(4px);\n}\n\n.no-hover-effect.mat-raised-button {\n  background-color: #4f39cf;\n  color: #f3edf0;\n}\n\n.no-hover-effect.mat-stroked-button {\n  background-color: #4f39cf;\n  color: #fffdfe;\n}\n\nh5 {\n  font-size: 14px;\n}\n\n#customers {\n  border-collapse: collapse;\n  width: 100%;\n}\n\n#customers td, #customers th {\n  border: 1px solid #ddd;\n  padding: 8px;\n  text-align: center;\n  font-size: xx-small;\n}\n\n#customers td mat-chip {\n  font-size: xx-small;\n}\n\n#customers tr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n#customers th {\n  padding-top: 8px;\n  padding-bottom: 9px;\n  text-align: left;\n  background-color: #61b2d8;\n  color: white;\n}\n\n.devDiv {\n  align-items: center;\n}\n\n.wrapper {\n  text-align: center;\n}\n\n.centeredButton mat-raised-button {\n  position: absolute;\n  top: 60%;\n}\n\n/*\n*css added by dev on 12/nov\n*/\n\n.mat-raised-button {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 27px;\n  line-height: 27px;\n  min-height: 27px;\n  vertical-align: top;\n  font-size: 11px;\n  padding: 0 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZXhjZWwtZGF0YS1hdXRob3JpemF0aW9uLXNlY29uZC9GOlxcbXV0aHUtb25ib2FyZFxcbWVkaWFuLXBoMi11aS9zcmNcXGFwcFxcdmlld3NcXGV4Y2VsLWRhdGEtYXV0aG9yaXphdGlvbi1zZWNvbmRcXGV4Y2VsLWRhdGEtYXV0aG9yaXphdGlvbi1zZWNvbmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2V4Y2VsLWRhdGEtYXV0aG9yaXphdGlvbi1zZWNvbmQvZXhjZWwtZGF0YS1hdXRob3JpemF0aW9uLXNlY29uZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdCQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0FDQ0Y7O0FER0E7RUFDRSxrQkFBQTtFQUNBLHVCQUFBO0FDQUY7O0FES0E7RUFDRSx5QkFBQTtFQUNBLHVCQUFBO0FDRkY7O0FET0E7RUFFRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDTEY7O0FEUUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0FDTEY7O0FEUUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FDTEY7O0FEUUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FDTEY7O0FET0E7RUFDRSx5QkFBQTtBQ0pGOztBRE9BO0VBQ0UseUJBQUE7QUNKRjs7QURRQTtFQUNFLG1CQUFBO0FDTEY7O0FET0E7RUFDRSxjQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNKRjs7QURNQTtFQUNFLGNBQUE7RUFDQSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0hGOztBRE1BO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNIRjs7QURLQTtFQUNFLHlCQUFBO0FDRkY7O0FES0E7RUFDRSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUNGRjs7QURLQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ0ZGOztBRElBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDREY7O0FER0E7RUFDRSxlQUFBO0FDQUY7O0FERUE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUNDRjs7QURDQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNFRjs7QURDQTtFQUNFLG1CQUFBO0FDRUY7O0FEQUE7RUFBOEIseUJBQUE7QUNJOUI7O0FERkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNLRjs7QURIQTtFQUNFLG1CQUFBO0FDTUY7O0FESEE7RUFDRSxrQkFBQTtBQ01GOztBREhBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FDTUY7O0FESkE7O0NBQUE7O0FBR0E7RUFDRSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDT0YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9leGNlbC1kYXRhLWF1dGhvcml6YXRpb24tc2Vjb25kL2V4Y2VsLWRhdGEtYXV0aG9yaXphdGlvbi1zZWNvbmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBpbml0aWFsO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi5tYXQtY2VsbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuXHJcbnRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuXHJcbiAgXHJcbn1cclxuXHJcbnRoIHtcclxuICAvL2JhY2tncm91bmQtY29sb3I6ICM3NzYxZDQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiOWFiOTtcclxuICBjb2xvcjogcmdiKDI0NCwgMjUyLCAyNDYpO1xyXG4gIGZvbnQtd2VpZ2h0OiBzbWFsbDtcclxuICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuXHJcbn1cclxudHIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGRlZjA7XHJcbiAgY29sb3I6IHJnYigzNCwgMjksIDI5KTtcclxuICBmb250LXdlaWdodDogc21hbGw7XHJcbiAgaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbm1hdC1wYWdpbmF0b3Ige1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm1kLXBhZ2luYXRpb24td3JhcHBlciB7XHJcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxufVxyXG5tZC1yb3c6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmMWY1O1xyXG59XHJcblxyXG5tZC1yb3c6bnRoLWNoaWxkKG9kZCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmI7XHJcbn1cclxuXHJcblxyXG5wIHtcclxuICBwYWRkaW5nLWxlZnQ6IDUxMHB4O1xyXG59XHJcbmgxIHtcclxuICBjb2xvcjogI2I2MGM2MTtcclxuICBmb250LWZhbWlseTogSW1wYWN0LCBDaGFyY29hbCwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDMycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDFweDtcclxufVxyXG5oMyB7XHJcbiAgY29sb3I6ICMwYTBhMGE7XHJcbiAgZm9udC1mYW1pbHk6IENoYXJjb2FsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGNhZjUwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4uYnV0dG9uOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2MyNTI1O1xyXG59XHJcblxyXG4uYnV0dG9uOmFjdGl2ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTtcclxuICBib3gtc2hhZG93OiAwIDVweCAjNjY2O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xyXG59XHJcblxyXG4ubm8taG92ZXItZWZmZWN0Lm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGYzOWNmO1xyXG4gIGNvbG9yOiAjZjNlZGYwO1xyXG59XHJcbi5uby1ob3Zlci1lZmZlY3QubWF0LXN0cm9rZWQtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGYzOWNmO1xyXG4gIGNvbG9yOiAjZmZmZGZlO1xyXG59XHJcbmg1IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuI2N1c3RvbWVycyB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4jY3VzdG9tZXJzIHRkLCAjY3VzdG9tZXJzIHRoIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiB4eC1zbWFsbDtcclxuXHJcbn1cclxuI2N1c3RvbWVycyB0ZCBtYXQtY2hpcCB7XHJcbiAgZm9udC1zaXplOiB4eC1zbWFsbDtcclxufVxyXG4jY3VzdG9tZXJzIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cclxuXHJcbiNjdXN0b21lcnMgdGgge1xyXG4gIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDlweDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiKDk3LCAxNzgsIDIxNik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5kZXZEaXYge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jZW50ZXJlZEJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNjAlO1xyXG59XHJcbi8qXHJcbipjc3MgYWRkZWQgYnkgZGV2IG9uIDEyL25vdlxyXG4qL1xyXG4ubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBoZWlnaHQ6IDI3cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgbWluLWhlaWdodDogMjdweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBwYWRkaW5nOiAwIDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59IiwidGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGluaXRpYWw7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLm1hdC1oZWFkZXItY2VsbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY2VsbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XG59XG5cbnRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xufVxuXG50aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMxYjlhYjk7XG4gIGNvbG9yOiAjZjRmY2Y2O1xuICBmb250LXdlaWdodDogc21hbGw7XG4gIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xufVxuXG50ciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGRlZjA7XG4gIGNvbG9yOiAjMjIxZDFkO1xuICBmb250LXdlaWdodDogc21hbGw7XG4gIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xufVxuXG5tYXQtcGFnaW5hdG9yIHtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbm1kLXBhZ2luYXRpb24td3JhcHBlciB7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuXG5tZC1yb3c6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjFmNTtcbn1cblxubWQtcm93Om50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmYjtcbn1cblxucCB7XG4gIHBhZGRpbmctbGVmdDogNTEwcHg7XG59XG5cbmgxIHtcbiAgY29sb3I6ICNiNjBjNjE7XG4gIGZvbnQtZmFtaWx5OiBJbXBhY3QsIENoYXJjb2FsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbn1cblxuaDMge1xuICBjb2xvcjogIzBhMGEwYTtcbiAgZm9udC1mYW1pbHk6IENoYXJjb2FsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbn1cblxuLmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Y2FmNTA7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYzI1MjU7XG59XG5cbi5idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTtcbiAgYm94LXNoYWRvdzogMCA1cHggIzY2NjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG59XG5cbi5uby1ob3Zlci1lZmZlY3QubWF0LXJhaXNlZC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGYzOWNmO1xuICBjb2xvcjogI2YzZWRmMDtcbn1cblxuLm5vLWhvdmVyLWVmZmVjdC5tYXQtc3Ryb2tlZC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGYzOWNmO1xuICBjb2xvcjogI2ZmZmRmZTtcbn1cblxuaDUge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbiNjdXN0b21lcnMge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuI2N1c3RvbWVycyB0ZCwgI2N1c3RvbWVycyB0aCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IHh4LXNtYWxsO1xufVxuXG4jY3VzdG9tZXJzIHRkIG1hdC1jaGlwIHtcbiAgZm9udC1zaXplOiB4eC1zbWFsbDtcbn1cblxuI2N1c3RvbWVycyB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuXG4jY3VzdG9tZXJzIHRoIHtcbiAgcGFkZGluZy10b3A6IDhweDtcbiAgcGFkZGluZy1ib3R0b206IDlweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYxYjJkODtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4uZGV2RGl2IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLndyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jZW50ZXJlZEJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA2MCU7XG59XG5cbi8qXG4qY3NzIGFkZGVkIGJ5IGRldiBvbiAxMi9ub3ZcbiovXG4ubWF0LXJhaXNlZC1idXR0b24ge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogMjdweDtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gIG1pbi1oZWlnaHQ6IDI3cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogMCAwO1xuICBtYXJnaW46IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/views/excel-data-authorization-second/excel-data-authorization-second.component.ts":
/*!****************************************************************************************************!*\
  !*** ./src/app/views/excel-data-authorization-second/excel-data-authorization-second.component.ts ***!
  \****************************************************************************************************/
/*! exports provided: ExcelDataAuthorizationSecondComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelDataAuthorizationSecondComponent", function() { return ExcelDataAuthorizationSecondComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _shared_models_pending_for_auth_datails_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/models/pending-for-auth-datails-dto */ "./src/app/shared/models/pending-for-auth-datails-dto.ts");
/* harmony import */ var _shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/models/pending-for-auth-dto */ "./src/app/shared/models/pending-for-auth-dto.ts");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var _modals_modal_excel_auth_second_modal_excel_auth_second_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modals/modal-excel-auth-second/modal-excel-auth-second.component */ "./src/app/views/modals/modal-excel-auth-second/modal-excel-auth-second.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var src_app_shared_models_user__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/models/user */ "./src/app/shared/models/user.ts");
/* harmony import */ var _excel_data_authorization_first_audit_logs_dto_first_second__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../excel-data-authorization-first/audit-logs-dto-first-second */ "./src/app/views/excel-data-authorization-first/audit-logs-dto-first-second.ts");
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../users/users.service */ "./src/app/views/users/users.service.ts");
/* harmony import */ var src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/shared/services/excel.service */ "./src/app/shared/services/excel.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");












// import swal from 'sweetalert';
// ES6 Modules or TypeScript






let ExcelDataAuthorizationSecondComponent = class ExcelDataAuthorizationSecondComponent {
    constructor(api, dialog, userApi, snackBar, excelService) {
        this.api = api;
        this.dialog = dialog;
        this.userApi = userApi;
        this.snackBar = snackBar;
        this.excelService = excelService;
        this.excelDataAuthSecondAuditlog = new src_app_shared_models_user__WEBPACK_IMPORTED_MODULE_13__["User"]();
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_17__["DatePipe"]('en-US');
        this.paginator = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
        this.firstAndSecondAuthAuditLogRespDTO = new _excel_data_authorization_first_audit_logs_dto_first_second__WEBPACK_IMPORTED_MODULE_14__["FirstAndSecondAuthAuditLogRespDTO"]();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.dataSourcePendingForAuth = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"]();
        this.items = [10, 20, 30, 40];
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('');
        this.displayedColumns = [
            'versionNo',
            'account',
            'ccyCd',
            'branchCode',
            'amount',
            'lcyEquivalent',
            'drCr',
            'exchRate',
            'relatedAccount',
            'addlText',
            'treasuryReference',
            'view'
        ];
        this.displayedColumnsPendingAuth = [
            'detailsQueryToggle',
            'externalSysName',
            'batchNumber',
            'processName',
            'processingDate',
            'filename',
            'currency'
        ];
        this.button_permission = {};
        // pipe = new DatePipe('en-US');
        this.now = Date.now();
        this.dataForProcessScreen1 = [];
    }
    ngOnInit() {
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.pendingForAuthDetailsListAll);
        this.dataSourcePendingForAuth = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.pendingForAuthData);
        this.firstLevelAuthorizationStatus = {};
        this.user_id = sessionStorage.getItem('user_id');
        this.role = sessionStorage.getItem('user_role');
        //this.screenpermission();
        this.getPendingForAuthData();
        // this.getAllSecondLevelAuthDetailsData();
        this.dataSource.paginator = this.paginator.toArray()[0];
        // this.medDeUplDetailElementFull = new MedDeUplDetailElementFull();
    }
    screenpermission() {
        this.screenName = 'DataAmendAuthorization';
        // this.role='ROLE1';
        this.userApi.getRoleScreenPermission(this.user_id, this.screenName, this.role).subscribe(res => {
            this.rolepermission = res;
            console.log(this.rolepermission);
            if (this.rolepermission) {
                this.button_permission = this.rolepermission[0];
                // console.log( this.button_permission);
            }
        });
    }
    getAuditLogData(getDetailsQueryToggleReqDTO) {
        this.api
            .getFirstAndSecondAuthAuditService(this.getDetailsQueryToggleReqDTO)
            .subscribe(resp => {
            this.firstAndSecondAuthAuditLogRespDTO = resp;
        });
    }
    approveSecondLevel() {
        // console.log(this.pendingForAuthDetailsListAll);
        if (this.pendingForAuthDetailsListAll) {
            this.todaydate = this.pipe.transform(this.now, 'dd-MMM-yy');
            this.uploaddate = this.pipe.transform(this.pendingForAuthDetailsListAll[0].uploadDate, 'dd-MMM-yy');
            console.log('date for compare', this.todaydate, this.uploaddate);
            if (this.todaydate === this.uploaddate) {
            }
            else {
                console.log('inside if');
                sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire('Unable to authorized.', 'backdated authorization not allowed.');
                return;
            }
        }
        if (this.user_id === this.pendingForAuthDetailsListAll[0].inputBy) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire('Maker do not have permission to authorized.');
            return;
        }
        this.flag = false;
        this.progress = true;
        this.api.authorizeSecondLevel(this.pendingForAuthDetailsListAll, localStorage.getItem('currentUser')).subscribe(resp => {
            this.firstLevelAuthorizationStatus = resp;
            console.log(this.firstLevelAuthorizationStatus);
            if (this.firstLevelAuthorizationStatus) {
                this.progress = false;
                // this.flag = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire('You authorized the record to second level ');
            }
            if (!this.firstLevelAuthorizationStatus) {
                this.progress = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
                    type: 'error',
                    title: 'You failed to authorize the record.'
                });
            }
        });
        this.getPendingForAuthData();
        // this.pendingForAuthDetailsListAll=[];
        // this.dataSource = new MatTableDataSource<PendingForAuthDetailsDTO>(
        //   this.pendingForAuthDetailsListAll
        // );
    }
    getAllSecondLevelAuthDetailsData() {
        this.api.getSecondLevelAuthDetailsData().subscribe(resp => {
            this.pendingForAuthDetailsListAll = resp;
            // console.log(this.pendingForAuthDetailsListAll);
            if (this.pendingForAuthDetailsListAll) {
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.pendingForAuthDetailsListAll);
                this.dataSource.paginator = this.paginator.toArray()[1];
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire('No Data ');
            }
        });
    }
    queryDetailsDataByParam(pendingForAuthDTO) {
        this.getDetailsQueryToggleReqDTO = new _shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_8__["GetDetailsQueryToggleReqDTO"]();
        this.getDetailsQueryToggleReqDTO.externalSysName =
            pendingForAuthDTO.externalSysName;
        this.getDetailsQueryToggleReqDTO.processName =
            pendingForAuthDTO.processName;
        this.getDetailsQueryToggleReqDTO.processingDate =
            pendingForAuthDTO.processingDate;
        this.getDetailsQueryToggleReqDTO.currency =
            pendingForAuthDTO.currency;
        this.getDetailsQueryToggleReqDTO.batchNumber =
            pendingForAuthDTO.batchNumber;
        // console.log("getDetailsQueryToggleReqDTO :");
        // console.log(this.getDetailsQueryToggleReqDTO);
        //
        this.api
            .queryDetailsDataByParamServiceSecond(this.getDetailsQueryToggleReqDTO)
            .subscribe(resp => {
            this.pendingForAuthDetailsListAll = resp;
            console.log(this.pendingForAuthDetailsListAll);
            if (this.pendingForAuthDetailsListAll.length > 0) {
                this.flag = true;
                this.flag1 = true;
                this.getAuditLogData(this.getDetailsQueryToggleReqDTO);
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire('Edit the data from modify excel screen', 'No data found.');
            }
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.pendingForAuthDetailsListAll);
            this.dataSource.paginator = this.paginator.toArray()[1];
        });
        // new implementation on 23 aug
        // code changes
        // get audit log data
        // console.log(this.getDetailsQueryToggleReqDTO);
    }
    applyFilter(filterValue) {
        this.dataSourcePendingForAuth.filter = filterValue.trim().toLowerCase();
    }
    getDataWithOldAndNewValue(pendingForAuthDTO) {
        this.deUploadPendingForAuthDTO = pendingForAuthDTO;
        this.getDetailsQueryToggleReqDTO = new _shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_8__["GetDetailsQueryToggleReqDTO"]();
        this.getDetailsQueryToggleReqDTO.externalSysName = this.deUploadPendingForAuthDTO.externalSysName;
        this.getDetailsQueryToggleReqDTO.processName = this.deUploadPendingForAuthDTO.processName;
        this.getDetailsQueryToggleReqDTO.processingDate = this.deUploadPendingForAuthDTO.processingDate;
        this.getDetailsQueryToggleReqDTO.currency = this.deUploadPendingForAuthDTO.currency;
        //
        this.api
            .queryDetailsDataByParamService(this.getDetailsQueryToggleReqDTO)
            .subscribe(resp => {
            this.detailsDataForFlex = resp;
            // console.log("hahaha");
            // console.log(this.detailsDataForFlex);
            //  this.flag = true;
        });
    }
    approveAndProcess() {
        this.spinner = true;
        this.deUploadReqDTO = new _shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_8__["DeUploadReqDTO"]();
        this.deUploadReqDTO.pendingForAuthDTO = this.deUploadPendingForAuthDTO;
        this.deUploadReqDTO.pendingForAuthDetailsDTOList = this.detailsDataForFlex;
        // this.flag = false;
        this.api.processDeUpload(this.deUploadReqDTO, this.user_id).subscribe(resp => {
            this.deUploadStatus = resp;
            // console.log(this.deUploadStatus);
            if (this.deUploadStatus.statusMessage === 'FAILURE') {
                this.spinner = false;
                this.openSnackBar('Data Failed to Upload In Demodule', '');
            }
            if (this.deUploadStatus.statusMessage === 'SUCCESS') {
                this.spinner = false;
                this.openSnackBar('Data Successfully Uploaded TO DeUpload', '');
            }
        }, error => {
            if (_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpErrorResponse"]) {
                this.spinner = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_12___default.a.fire({
                    type: 'error',
                    text: 'Failed to connect to flexcube',
                });
                // swal("Failed to Connect to Flexcube");
            }
        });
    }
    getPendingForAuthData() {
        this.api.getPendingForAuthDataFirstError(this.user_id).subscribe(resp => {
            // console.log(resp);
            this.pendingForAuthData = resp;
            console.log(this.pendingForAuthData);
            this.dataSourcePendingForAuth = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.pendingForAuthData);
            this.dataSourcePendingForAuth.paginator = this.paginator.toArray()[0];
        });
    }
    doValidationOfString(a, b) {
        return a === b;
    }
    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 2000
        });
    }
    viewOperation(detailsObj) {
        // updated code on 3rd january by prabhat for view the detail data
        this.getDataWithOldAndNewValue(detailsObj);
        console.log(detailsObj);
        console.log(_shared_models_pending_for_auth_datails_dto__WEBPACK_IMPORTED_MODULE_7__["PendingForAuthDetailsDTO"]);
        this.dummyPendingForAuthDataDetailsSecond = new Array();
        const sourceCode = detailsObj.id.sourceCode;
        const branchCode = detailsObj.id.branchCode;
        const batchNo = detailsObj.id.batchNo;
        const initiationDate = detailsObj.id.initiationDate;
        const currNo = detailsObj.id.currNo;
        for (const entry of this.pendingForAuthDetailsListAll) {
            if (entry.id.sourceCode === sourceCode &&
                entry.id.branchCode === branchCode &&
                entry.id.batchNo === batchNo &&
                entry.id.initiationDate === initiationDate &&
                entry.id.currNo === currNo) {
                this.dummyPendingForAuthDataDetailsSecond.push(entry);
            }
        }
        // console.log(this.dummyPendingForAuthDataDetailsSecond); // 1, 'string', false
        this.openDialog(this.dummyPendingForAuthDataDetailsSecond);
    }
    openDialog(detailsDtoList) {
        // console.log("comparable Dtos list for old and new  in  modal :");
        // console.log(detailsDtoList);
        const dialogRef = this.dialog.open(_modals_modal_excel_auth_second_modal_excel_auth_second_component__WEBPACK_IMPORTED_MODULE_10__["ModalExcelAuthSecondComponent"], {
            data: detailsDtoList
        });
        dialogRef.afterClosed().subscribe(result => {
            // console.log(`Dialog result: ${result}`);
        });
    }
    downloadData() {
        this.button1 = false;
        console.log(this.dummyPendingForAuthDataDetailsSecond);
        this.dummyPendingForAuthDataDetailsSecond.forEach((element) => {
            this.dataForProcessScreen1.push({
                Source_Code: element.id.sourceCode,
                Process_Code: element.processCode,
                Branch_Code: element.id.branchCode,
                Batch_No: element.id.batchNo,
                Value_Date: this.pipe.transform(element.valueDate, 'dd-MMM-yy'),
                Account: element.account,
                Account_Branch: element.accountBranch,
                Currency: element.ccyCd,
                Amount: element.amount,
                DrCr: element.drCr,
                LcyEquivalent: element.lcyEquivalent,
                // Exch_Rate: element.id.exchRate,
                Curr_No: element.id.currNo,
                Addl_Text: element.addlText,
                TreasuryReference: element.acumenJournal,
                Trn_Code: element.txnCode,
                Period_Code: element.periodCode,
                Financial_Cycle: element.finCycle,
                //  Initiation_Date: this.pipe.transform(element.initiationDate, 'dd-MMM-yy'),
                Upload_Date: this.pipe.transform(element.uploadDate, 'dd-MMM-yy'),
                Input_By: element.inputBy,
                Input_Time: this.pipe.transform(element.inputTime, 'dd-MMM-yy'),
                //   UDF_Detail: element.udfDetails,
                //   Error_Desc:element.errorDesc,
                //   Validation_Error: element.validationError,
                Related_Customer: element.relCust,
                Related_Account: element.relatedAccount,
                Related_Reference: element.relatedRef
            });
            console.log(this.dataForProcessScreen1);
        });
        console.log('final data', this.dataForProcessScreen1);
        this.excelService.exportAsExcelFile(this.dataForProcessScreen1, 'Excel_Upload_Data'); // this.pendingForAuthDetailsDTOList[0]
        this.dataForProcessScreen1 = [''];
    }
};
ExcelDataAuthorizationSecondComponent.ctorParameters = () => [
    { type: src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] },
    { type: _users_users_service__WEBPACK_IMPORTED_MODULE_15__["UsersService"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
    { type: src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_16__["ExcelService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], ExcelDataAuthorizationSecondComponent.prototype, "paginator", void 0);
ExcelDataAuthorizationSecondComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-excel-data-authorization-second',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./excel-data-authorization-second.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/excel-data-authorization-second/excel-data-authorization-second.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./excel-data-authorization-second.component.scss */ "./src/app/views/excel-data-authorization-second/excel-data-authorization-second.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_9__["ApiService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
        _users_users_service__WEBPACK_IMPORTED_MODULE_15__["UsersService"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
        src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_16__["ExcelService"]])
], ExcelDataAuthorizationSecondComponent);



/***/ }),

/***/ "./src/app/views/excel-data-authorization-second/excel-data-authorization-second.module.ts":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/excel-data-authorization-second/excel-data-authorization-second.module.ts ***!
  \*************************************************************************************************/
/*! exports provided: ExcelDataAuthorizationSecondModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelDataAuthorizationSecondModule", function() { return ExcelDataAuthorizationSecondModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _excel_data_authorization_second_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./excel-data-authorization-second.component */ "./src/app/views/excel-data-authorization-second/excel-data-authorization-second.component.ts");
/* harmony import */ var _modals_modal_excel_auth_second_modal_excel_auth_second_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modals/modal-excel-auth-second/modal-excel-auth-second.component */ "./src/app/views/modals/modal-excel-auth-second/modal-excel-auth-second.component.ts");
/* harmony import */ var src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/angular-material/angular-material.module */ "./src/app/shared/angular-material/angular-material.module.ts");
/* harmony import */ var _excel_data_authorization_second_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./excel-data-authorization-second-routing.module */ "./src/app/views/excel-data-authorization-second/excel-data-authorization-second-routing.module.ts");









let ExcelDataAuthorizationSecondModule = class ExcelDataAuthorizationSecondModule {
};
ExcelDataAuthorizationSecondModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_excel_data_authorization_second_component__WEBPACK_IMPORTED_MODULE_5__["ExcelDataAuthorizationSecondComponent"], _modals_modal_excel_auth_second_modal_excel_auth_second_component__WEBPACK_IMPORTED_MODULE_6__["ModalExcelAuthSecondComponent"]],
        entryComponents: [_modals_modal_excel_auth_second_modal_excel_auth_second_component__WEBPACK_IMPORTED_MODULE_6__["ModalExcelAuthSecondComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_7__["AngularMaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_excel_data_authorization_second_routing_module__WEBPACK_IMPORTED_MODULE_8__["secondAuthRoutes"]),
        ]
    })
], ExcelDataAuthorizationSecondModule);



/***/ }),

/***/ "./src/app/views/modals/modal-excel-auth-second/modal-excel-auth-second.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/views/modals/modal-excel-auth-second/modal-excel-auth-second.component.scss ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  color: #ca1818;\n  font-family: Impact, Charcoal, sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\ndiv {\n  height: 100%;\n  width: 100%;\n  font-size: 9px;\n  font-weight: bold;\n  border-radius: 0px;\n  background-color: #f2f2f2;\n  padding: 0px;\n}\n\n.div label {\n  display: inline-block;\n  text-align: right;\n}\n\n.no-hover-effect.mat-raised-button {\n  float: right;\n  background-color: #ec7f5d;\n  width: 15px;\n  height: 15px;\n  line-height: 27px;\n  min-height: 27px;\n  vertical-align: top;\n  font-size: 11px;\n  padding: 0 0;\n  margin: 0;\n}\n\n.newcolor {\n  background-color: lightgreen;\n}\n\n.oldcolor {\n  background-color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbW9kYWxzL21vZGFsLWV4Y2VsLWF1dGgtc2Vjb25kL0Y6XFxtdXRodS1vbmJvYXJkXFxtZWRpYW4tcGgyLXVpL3NyY1xcYXBwXFx2aWV3c1xcbW9kYWxzXFxtb2RhbC1leGNlbC1hdXRoLXNlY29uZFxcbW9kYWwtZXhjZWwtYXV0aC1zZWNvbmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL21vZGFscy9tb2RhbC1leGNlbC1hdXRoLXNlY29uZC9tb2RhbC1leGNlbC1hdXRoLXNlY29uZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0VKOztBREFFO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0dGOztBREFFO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNHSjs7QURERTtFQUNFLDRCQUFBO0FDSUo7O0FERkU7RUFDRSxxQkFBQTtBQ0tKIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbW9kYWxzL21vZGFsLWV4Y2VsLWF1dGgtc2Vjb25kL21vZGFsLWV4Y2VsLWF1dGgtc2Vjb25kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDJcdHtcclxuICBjb2xvcjogI2NhMTgxODtcclxuICBmb250LWZhbWlseTogSW1wYWN0LCBDaGFyY29hbCwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxuICB9XHJcbiAgZGl2IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBmb250LXNpemU6IDlweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICAgIHBhZGRpbmc6IDBweDtcclxuICB9XHJcbiAgLmRpdiBsYWJlbHtcclxuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIH1cclxuICBcclxuICAubm8taG92ZXItZWZmZWN0Lm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlYzdmNWQ7XHJcbiAgICB3aWR0aDogMTVweDtcclxuICAgIGhlaWdodDogMTVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gICAgbWluLWhlaWdodDogMjdweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICBwYWRkaW5nOiAwIDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIC5uZXdjb2xvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XHJcbiAgfVxyXG4gIC5vbGRjb2xvcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICB9IiwiaDIge1xuICBjb2xvcjogI2NhMTgxODtcbiAgZm9udC1mYW1pbHk6IEltcGFjdCwgQ2hhcmNvYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG5kaXYge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDlweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgcGFkZGluZzogMHB4O1xufVxuXG4uZGl2IGxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm5vLWhvdmVyLWVmZmVjdC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjN2Y1ZDtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gIG1pbi1oZWlnaHQ6IDI3cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogMCAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5uZXdjb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XG59XG5cbi5vbGRjb2xvciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/views/modals/modal-excel-auth-second/modal-excel-auth-second.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/modals/modal-excel-auth-second/modal-excel-auth-second.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ModalExcelAuthSecondComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalExcelAuthSecondComponent", function() { return ModalExcelAuthSecondComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");





let ModalExcelAuthSecondComponent = class ModalExcelAuthSecondComponent {
    constructor(data, snackBar) {
        this.data = data;
        this.snackBar = snackBar;
        this.show = false;
        this.items = [10, 20, 30, 40];
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]("");
    }
    ngOnInit() {
        this.responseDtoList = this.data;
        //console.log("from modal old data : " );
        //console.log( this.responseDtoList);
        this.compareValues(this.responseDtoList);
        //console.log("true false compared vals list: " );
        //console.log( this.comparedValsList);
    }
    compareValues(responseDtoList) {
        this.comparedValsList = new Array();
        for (const entry of responseDtoList) {
            if (entry.account === responseDtoList[1].account) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.amount === responseDtoList[1].amount) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.ccyCd === responseDtoList[1].ccyCd) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.accountBranch === responseDtoList[1].accountBranch) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.lcyEquivalent === responseDtoList[1].lcyEquivalent) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.drCr === responseDtoList[1].drCr) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.id.branchCode === responseDtoList[1].id.branchCode) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.valueDate === responseDtoList[1].valueDate) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.id.initiationDate === responseDtoList[1].id.initiationDate) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.externalRefNo === responseDtoList[1].externalRefNo) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.relatedAccount === responseDtoList[1].relatedAccount) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.relCust === responseDtoList[1].relCust) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.exchRate === responseDtoList[1].exchRate) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.relatedRef === responseDtoList[1].relatedRef) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.addlText === responseDtoList[1].addlText) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.instrumentNo === responseDtoList[1].instrumentNo) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.id.batchNo === responseDtoList[1].id.batchNo) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.uploadDate === responseDtoList[1].uploadDate) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.finCycle === responseDtoList[1].finCycle) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.periodCode === responseDtoList[1].periodCode) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.txnCode === responseDtoList[1].txnCode) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.misCode === responseDtoList[1].misCode) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.poolCode === responseDtoList[1].poolCode) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.txnMis1 === responseDtoList[1].txnMis1) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.misGroup === responseDtoList[1].misGroup) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.misFlag === responseDtoList[1].misFlag) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.txnMis2 === responseDtoList[1].txnMis2) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.misHead === responseDtoList[1].misHead) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.misGroupTxn === responseDtoList[1].misGroupTxn) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.txnMis3 === responseDtoList[1].txnMis3) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.compMis1 === responseDtoList[1].compMis1) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.compMis3 === responseDtoList[1].compMis3) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.txnMis4 === responseDtoList[1].txnMis4) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.compMis2 === responseDtoList[1].compMis2) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.compMis4 === responseDtoList[1].compMis4) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.txnMis5 === responseDtoList[1].txnMis5) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.compMis5 === responseDtoList[1].compMis5) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.costCode1 === responseDtoList[1].costCode1) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.txnMis6 === responseDtoList[1].txnMis6) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.compMis6 === responseDtoList[1].compMis6) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.costCode2 === responseDtoList[1].costCode2) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.txnMis7 === responseDtoList[1].txnMis7) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.compMis7 === responseDtoList[1].compMis7) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.costCode3 === responseDtoList[1].costCode3) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.txnMis8 === responseDtoList[1].txnMis8) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.compMis8 === responseDtoList[1].compMis8) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.costCode4 === responseDtoList[1].costCode4) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.txnMis9 === responseDtoList[1].txnMis9) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.compMis9 === responseDtoList[1].compMis9) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.costCode5 === responseDtoList[1].costCode5) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.txnMis10 === responseDtoList[1].txnMis10) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            if (entry.compMis10 === responseDtoList[1].compMis10) {
                this.comparedValsList.push(false);
            }
            else {
                this.comparedValsList.push(true);
            }
            break;
        }
    }
};
ModalExcelAuthSecondComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] }
];
ModalExcelAuthSecondComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-modal-excel-auth-second",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal-excel-auth-second.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/modals/modal-excel-auth-second/modal-excel-auth-second.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal-excel-auth-second.component.scss */ "./src/app/views/modals/modal-excel-auth-second/modal-excel-auth-second.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
], ModalExcelAuthSecondComponent);



/***/ })

}]);
//# sourceMappingURL=views-excel-data-authorization-second-excel-data-authorization-second-module-es2015.js.map