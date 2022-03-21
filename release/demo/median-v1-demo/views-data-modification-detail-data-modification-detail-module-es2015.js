(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-data-modification-detail-data-modification-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/data-modification-detail/data-modification-detail.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/data-modification-detail/data-modification-detail.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div style=\"background-color:rgb(183, 247, 191)\">\r\n  <h1 mat-dialog-title>Data Modification Details</h1>\r\n</div> -->\r\n<mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n  <span>Rejection Queue</span>\r\n</mat-toolbar>\r\n<br />\r\n<div class=\"mat-elevation-z8 \">\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n  </mat-form-field>\r\n  <table mat-table [dataSource]=\"dataSourcePendingForAuth\">\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"getDetails\">\r\n      <th mat-header-cell *matHeaderCellDef>Process Details</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"queryDetailsDataByParam(element)\" style=\"height : 90%\">\r\n          Get Details\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"externalSysName\">\r\n      <th mat-header-cell *matHeaderCellDef>External System</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.externalSysName }}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"processName\">\r\n      <th mat-header-cell *matHeaderCellDef>Process Name</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.processName }}</td>\r\n    </ng-container>\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"batchNumber\">\r\n      <th mat-header-cell *matHeaderCellDef>Batch Number</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.batchNumber }}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"totalNoOfRecord\">\r\n      <th mat-header-cell *matHeaderCellDef>Total Record</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.totalNoOfRecord }}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"totalCredit\">\r\n      <th mat-header-cell *matHeaderCellDef>Total Credit</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.totalCredit }}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"totalDebit\">\r\n      <th mat-header-cell *matHeaderCellDef>Total Dedit</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.totalDebit }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"processingDate\">\r\n      <th mat-header-cell *matHeaderCellDef>Processing Date</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        {{ element.processingDate | date }}\r\n      </td>\r\n    </ng-container>\r\n    <!-- <ng-container matColumnDef=\"currency\">\r\n      <th mat-header-cell *matHeaderCellDef>Currency</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        {{ element.currency }}\r\n      </td>\r\n    </ng-container> -->\r\n\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"filename\">\r\n      <th mat-header-cell *matHeaderCellDef>File Name</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.fileName }}</td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumnsPendingAuth\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumnsPendingAuth\"></tr>\r\n  </table>\r\n\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20, 30, 40, 50, 60]\" showFirstLastButtons></mat-paginator>\r\n</div>\r\n<br />\r\n<mat-spinner *ngIf=\"spinner1\" radius=\"10px;\"> Please Wait Data is Loading.......</mat-spinner>\r\n<div class=\"wrapper\">\r\n  <h3 style=\"font-size: large;\">Failed Data</h3>\r\n</div>\r\n<br />\r\n\r\n<div class=\"mat-elevation-z8 \">\r\n  <!-- <button mat-raised-button color=\"primary\" (click)=\"downloadData()\" *ngIf=\"!modify\">\r\n        Download Uploaded Data\r\n        </button> -->\r\n\r\n        <button\r\n        mat-button >\r\n      \r\n        <mat-label>Export As</mat-label>\r\n      \r\n        <mat-select\r\n          #select>\r\n          <mat-option (click)=\"downloadData()\" >Excel</mat-option>\r\n          <mat-option  (click)=\"convert()\">PDF</mat-option>\r\n        </mat-select>\r\n      \r\n      </button>\r\n  <table mat-table [dataSource]=\"dataSource\">\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"account\">\r\n      <th mat-header-cell *matHeaderCellDef>Account</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.account }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"ccyCd\">\r\n      <th mat-header-cell *matHeaderCellDef>Currency</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.ccyCd }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"branchCode\">\r\n      <th mat-header-cell *matHeaderCellDef>Branch</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.id.branchCode }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"amount\">\r\n      <th mat-header-cell *matHeaderCellDef>Amount</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.amount }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"lcyEquivalent\">\r\n      <th mat-header-cell *matHeaderCellDef>Lcy Amount</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.lcyEquivalent }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"drCr\">\r\n      <th mat-header-cell *matHeaderCellDef>Dr/Cr</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.drCr }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"exchRate\">\r\n      <th mat-header-cell *matHeaderCellDef>Exchange Rate</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.exchRate }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"relatedAccount\">\r\n      <th mat-header-cell *matHeaderCellDef>Related Account</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.relatedAccount }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"addlText\">\r\n      <th mat-header-cell *matHeaderCellDef>Addl Text</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.addlText }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"accDesc\">\r\n      <th mat-header-cell *matHeaderCellDef>Account Description</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.accDesc }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"errorCode\">\r\n      <th mat-header-cell *matHeaderCellDef>Error Code</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.errorCode }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"errorDesc\">\r\n      <th mat-header-cell *matHeaderCellDef>Error Description</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.errorDesc }}</td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"view\">\r\n      <th mat-header-cell *matHeaderCellDef>Process</th>\r\n      <td mat-cell *matCellDef=\"let element\" [style.color]=\"element.color\" data-label=\"color\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"openDialog(element)\" style=\"height : 90%\">\r\n          Edit\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\r\n  </table>\r\n\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20, 30, 40, 50, 60]\" showFirstLastButtons></mat-paginator>\r\n</div>\r\n<br />\r\n<br />\r\n<div class=\"wrapper\">\r\n<!-- <button mat-raised-button color=\"primary\" [disabled]=\"!flag\" (click)=\"approveAndProcess()\" style=\"height : 90%\" *ngIf=\"this.button_permission.authbutton=='T' && dataAvail\">\r\n    Send For Approval\r\n  </button> -->\r\n\r\n</div>\r\n<br>\r\n<div fxLayout=\"row\">\r\n  <div fxFlex></div>\r\n  <div fxFlex=\"95\">\r\n    <mat-card style=\"width: 50%;  margin-left:300px;\">\r\n      <mat-card-title>\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n        <div fxLayout=\"row\">\r\n          <table id=\"customers\" *ngIf=\"audit\" >\r\n            <tr>\r\n              <th>Input By:</th>\r\n              <td>\r\n                <mat-chip>{{this.PendingForAuthDetailsDTOList[0].inputBy}}</mat-chip>\r\n              </td>\r\n              <th>Input Date:</th>\r\n              <td>\r\n                <mat-chip>{{this.PendingForAuthDetailsDTOList[0].inputTime | date:'M/d/yy'}}</mat-chip>\r\n              </td>\r\n              <th>Last Modified By:</th>\r\n              <td>\r\n                <mat-chip>{{this.PendingForAuthDetailsDTOList[0].modifiedBy}}</mat-chip>\r\n              </td>\r\n              <th>Last Modified Date:</th>\r\n              <td>\r\n                <mat-chip>{{this.PendingForAuthDetailsDTOList[0].modifiedDateTime | date:'M/d/yy'}}</mat-chip>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <th>Final Auth By:</th>\r\n              <td>\r\n                <mat-chip>{{this.PendingForAuthDetailsDTOList[0].secondTimeAuthorizer}}</mat-chip>\r\n              </td>\r\n              <th>Final Auth Date:</th>\r\n              <td>\r\n                <mat-chip>{{this.PendingForAuthDetailsDTOList[0].secondTimeAuthTimeStamp | date:'M/d/yy'}}</mat-chip>\r\n              </td>\r\n              <th>Amend Auth By:</th>\r\n              <td>\r\n                <mat-chip>{{this.PendingForAuthDetailsDTOList[0].fristTimeAuthorizer}}</mat-chip>\r\n              </td>\r\n              <th>Amend Auth Date:</th>\r\n              <td>\r\n                <mat-chip>{{this.PendingForAuthDetailsDTOList[0].fristTimeAuthTimeStamp | date:'M/d/yy'}}</mat-chip>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n<br><br><br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/modals/modal-transactions-detail-editable/modal-transactions-detail-editable.component.html":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/modals/modal-transactions-detail-editable/modal-transactions-detail-editable.component.html ***!
  \*********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>Edit Transaction Details</h2>\r\n<div>\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Account Number:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.account\"/>\r\n  </label>\r\n  &nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Amount:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.amount\" />\r\n  </label>\r\n  &nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;\r\n    Account Currency :\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.ccyCd\" maxlength=\"3\"/>\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Account Branch :\r\n    <input type=\"text\"   [(ngModel)]=\"responseDto.accountBranch\" maxlength=\"3\"/>\r\n  </label>\r\n\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    LCY\r\n    Amount:\r\n    <input type=\"text\"   [(ngModel)]=\"responseDto.lcyEquivalent\"/>\r\n  </label>\r\n\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Debit / Credit\r\n    :\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.drCr\"/>\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Branch Code\r\n    :\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.id.branchCode\" maxlength=\"3\"/>\r\n  </label>\r\n  &nbsp;&nbsp;\r\n  <label>\r\n  \r\n    Value\r\n    Date:\r\n        <p>{{responseDto.valueDate | date}}</p>\r\n    <input type=\"date\"  [(ngModel)]=\"responseDto.valueDate\"/>\r\n  </label>\r\n  &nbsp;\r\n  <label>\r\n  \r\n    Initiation Date\r\n    :     <p>{{responseDto.id.initiationDate | date}}</p>\r\n    <input type=\"date\"  [(ngModel)]=\"responseDto.id.initiationDate\" />\r\n  </label>\r\n  <label>\r\n   \r\n    Upload Date\r\n    :<p>{{responseDto.uploadDate | date}}</p>\r\n    <input type=\"date\"  [(ngModel)]=\"responseDto.uploadDate\"/>\r\n  </label>\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    External Reference:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.externalRefNo\"/>\r\n  </label>\r\n  &nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;\r\n    Related Account :\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.relatedAccount\"/>\r\n  </label>\r\n  &nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n    Related Customer :\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.relCust\"/>\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Exchange Rate\r\n    :\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.exchRate\"/>\r\n  </label>\r\n  &nbsp;&nbsp;\r\n  <label>\r\n\r\n    Related Reference :\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.relatedRef\"/>\r\n  </label>\r\n  &nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Additional Text :\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.addlText\"/>\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Instrument Number :\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.instrumentNo\"/>\r\n  </label>\r\n  &nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Batch Number :\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.id.batchNo\"/>\r\n  </label>\r\n \r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Financial Cycle:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.finCycle\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Period Code:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.periodCode\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n    Transaction Code :\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.txnCode\" />\r\n  </label>\r\n  <br />\r\n  <br>\r\n \r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    MIS_CODE:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.misCode\" maxlength=\"4\" />\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    POOL_CODE:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.poolCode\" maxlength=\"9\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    TXN_MIS_1:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.txnMis1\" maxlength=\"9\"/>\r\n  </label>\r\n   <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Error Description:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.errorDesc\" />\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    MIS_GROUP:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.misGroup\" maxlength=\"10\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    MIS_FLAG:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.misFlag\" maxlength=\"1\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    TXN_MIS_2:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.txnMis2\" maxlength=\"9\"/>\r\n  </label>\r\n\r\n  <br>\r\n \r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    MIS_HEAD:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.misHead\" maxlength=\"9\"/>\r\n  </label>\r\n  &nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;\r\n    MIS_GROUP_TXN:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.misGroupTxn\" maxlength=\"1\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    TXN_MIS_3:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.txnMis3\" maxlength=\"9\"/>\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COMP_MIS_1:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.compMis1\" maxlength=\"9\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COMP_MIS_3 :\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.compMis3\" maxlength=\"9\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    TXN_MIS_4:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.txnMis4\" maxlength=\"9\"/>\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COMP_MIS_2:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.compMis2\" maxlength=\"9\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COMP_MIS_4:\r\n    <input type=\"text\" [(ngModel)]=\"responseDto.compMis4\" maxlength=\"9\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    TXN_MIS_5:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.txnMis5\" maxlength=\"9\"/>\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COMP_MIS_5:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.compMis5\" maxlength=\"9\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COST_CODE_1:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.costCode1\" maxlength=\"9\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    TXN_MIS_6:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.txnMis6\" maxlength=\"9\"/>\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COMP_MIS_6:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.compMis6\" maxlength=\"9\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COST_CODE_2:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.costCode2\" maxlength=\"9\" />\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    TXN_MIS_7:\r\n    <input type=\"text\"   [(ngModel)]=\"responseDto.txnMis7\" maxlength=\"9\"/>\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COMP_MIS_7:\r\n    <input type=\"text\"   [(ngModel)]=\"responseDto.compMis7\" maxlength=\"9\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COST_CODE_3:\r\n    <input type=\"text\"   [(ngModel)]=\"responseDto.costCode3\" maxlength=\"9\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    TXN_MIS_8:\r\n    <input type=\"text\"   [(ngModel)]=\"responseDto.txnMis8\" maxlength=\"9\"/>\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COMP_MIS_8:\r\n    <input type=\"text\"   [(ngModel)]=\"responseDto.compMis8\" maxlength=\"9\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n    COST_CODE_4 :\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.costCode4\" maxlength=\"9\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    TXN_MIS_9:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.txnMis9\" maxlength=\"9\"/>\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COMP_MIS_9:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.compMis9\"  maxlength=\"9\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COST_CODE_5:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.costCode5\" maxlength=\"9\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    TXN_MIS_10:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.txnMis10\" maxlength=\"9\"/>\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COMP_MIS_10:\r\n    <input type=\"text\" [(ngModel)]=\"responseDto.compMis10\" maxlength=\"9\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;\r\n    UPLOAD STATUS:\r\n    <input type=\"text\" [(ngModel)]=\"responseDto.uploadStat\"/>\r\n  </label>\r\n</div>\r\n<p>\r\n  <button  mat-raised-button color=\"primary\" matBadge=\"8\" matBadgePosition=\"before\"\r\n    matBadgeColor=\"accent\" (click)=\"insertModifiedDataIntoDetailsData(responseDto)\" *ngIf=\"!saveButtonStatus\">\r\n    Save Data\r\n  </button>&nbsp;&nbsp;\r\n  <button mat-raised-button color=\"primary\" class=\"no-hover-effect\" mat-dialog-close>Exit</button>\r\n</p>\r\n\r\n<!-- <mat-dialog-actions align=\"end\">\r\n\r\n</mat-dialog-actions> -->");

/***/ }),

/***/ "./src/app/views/data-modification-detail/data-modification-detail-routing.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/views/data-modification-detail/data-modification-detail-routing.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: dataModificationDetailsRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataModificationDetailsRoutes", function() { return dataModificationDetailsRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _data_modification_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data-modification-detail.component */ "./src/app/views/data-modification-detail/data-modification-detail.component.ts");


const dataModificationDetailsRoutes = [
    {
        path: '',
        component: _data_modification_detail_component__WEBPACK_IMPORTED_MODULE_1__["DataModificationDetailComponent"]
    }
];


/***/ }),

/***/ "./src/app/views/data-modification-detail/data-modification-detail.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/views/data-modification-detail/data-modification-detail.component.scss ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\n  border-collapse: initial;\n  width: 100%;\n  text-align: center !important;\n}\n\n.mat-header-cell {\n  text-align: center;\n  height: 22px !important;\n}\n\n.mat-cell {\n  text-align: center;\n  height: 22px !important;\n}\n\ntr:nth-child(even) {\n  background-color: #f2f2f2;\n  height: 22px !important;\n  font-weight: lighter;\n}\n\nth {\n  background-color: #1b9ab9;\n  color: #f4fcf6;\n  font-weight: lighter;\n  height: 22px !important;\n}\n\ntr {\n  background-color: #b8def0;\n  color: #221d1d;\n  font-weight: lighter;\n  height: 22px !important;\n}\n\nmat-paginator {\n  width: auto !important;\n  height: 40px !important;\n}\n\nmd-pagination-wrapper {\n  width: auto !important;\n  height: 40px !important;\n}\n\nmd-row:nth-child(even) {\n  background-color: #edf1f5;\n}\n\nmd-row:nth-child(odd) {\n  background-color: #fdfdfb;\n}\n\np {\n  padding-left: 510px;\n}\n\nh1 {\n  color: #b60c61;\n  font-family: Impact, Charcoal, sans-serif;\n  font-size: 32px;\n  font-weight: bold;\n  margin-top: 0px;\n  margin-bottom: 1px;\n}\n\nh3 {\n  color: #070606;\n  font-family: \"Lobster\", Sans-serif;\n  font-size: 35px;\n  font-weight: bold;\n  margin-top: 1px;\n  margin-bottom: 1px;\n}\n\n/*footer*/\n\n.col_white_amrc {\n  color: #fff;\n}\n\nfooter {\n  width: 100%;\n  background-color: #263238;\n  min-height: 250px;\n  padding: 10px 0px 25px 0px;\n}\n\n.pt2 {\n  padding-top: 40px;\n  margin-bottom: 20px;\n}\n\nfooter p {\n  font-size: 13px;\n  color: #ccc;\n  padding-bottom: 0px;\n  margin-bottom: 8px;\n}\n\n.mb10 {\n  padding-bottom: 15px;\n}\n\n.footer_ul_amrc {\n  margin: 0px;\n  list-style-type: none;\n  font-size: 14px;\n  padding: 0px 0px 10px 0px;\n}\n\n.footer_ul_amrc li {\n  padding: 0px 0px 5px 0px;\n}\n\n.footer_ul_amrc li a {\n  color: #ccc;\n}\n\n.footer_ul_amrc li a:hover {\n  color: #fff;\n  text-decoration: none;\n}\n\n.fleft {\n  float: left;\n}\n\n.padding-right {\n  padding-right: 10px;\n}\n\n.footer_ul2_amrc {\n  margin: 0px;\n  list-style-type: none;\n  padding: 0px;\n}\n\n.footer_ul2_amrc li p {\n  display: table;\n}\n\n.footer_ul2_amrc li a:hover {\n  text-decoration: none;\n}\n\n.footer_ul2_amrc li i {\n  margin-top: 5px;\n}\n\n.bottom_border {\n  border-bottom: 1px solid #323f45;\n  padding-bottom: 20px;\n}\n\n.foote_bottom_ul_amrc {\n  list-style-type: none;\n  padding: 0px;\n  display: table;\n  margin-top: 10px;\n  margin-right: auto;\n  margin-bottom: 10px;\n  margin-left: auto;\n}\n\n.foote_bottom_ul_amrc li {\n  display: inline;\n}\n\n.foote_bottom_ul_amrc li a {\n  color: #999;\n  margin: 0 12px;\n}\n\n.social_footer_ul {\n  display: table;\n  margin: 15px auto 0 auto;\n  list-style-type: none;\n}\n\n.social_footer_ul li {\n  padding-left: 20px;\n  padding-top: 10px;\n  float: left;\n}\n\n.social_footer_ul li a {\n  color: #ccc;\n  border: 1px solid #ccc;\n  padding: 8px;\n  border-radius: 50%;\n}\n\n.social_footer_ul li i {\n  width: 20px;\n  height: 20px;\n  text-align: center;\n}\n\n.button {\n  padding: 10px 10px;\n  font-size: 12px;\n  text-align: center;\n  cursor: pointer;\n  outline: none;\n  color: #fff;\n  background-color: #4CAF50;\n  border: none;\n}\n\n.button:hover {\n  background-color: #cc2525;\n}\n\n.button:active {\n  background-color: #3e8e41;\n  box-shadow: 0 5px #666;\n  transform: translateY(4px);\n}\n\n.no-hover-effect.mat-stroked-button {\n  background-color: #4f39cf;\n  color: #fffdfe;\n}\n\n#customers {\n  border-collapse: collapse;\n  width: 100%;\n}\n\n#customers td, #customers th {\n  border: 1px solid #ddd;\n  padding: 8px;\n  text-align: center;\n  font-size: x-small;\n}\n\n#customers td mat-chip {\n  font-size: x-small;\n}\n\n#customers tr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n#customers th {\n  padding-top: 8px;\n  padding-bottom: 9px;\n  text-align: left;\n  background-color: #61b2d8;\n  color: white;\n}\n\n.wrapper {\n  text-align: center;\n}\n\n.centeredButton mat-raised-button {\n  position: absolute;\n  top: 20%;\n}\n\n/*\n*css added by dev on 12/nov\n*/\n\n.mat-raised-button {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 20px;\n  line-height: 27px;\n  min-height: 27px;\n  vertical-align: top;\n  font-size: 11px;\n  padding: 0 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZGF0YS1tb2RpZmljYXRpb24tZGV0YWlsL0Y6XFxtdXRodS1vbmJvYXJkXFxtZWRpYW4tcGgyLXVpL3NyY1xcYXBwXFx2aWV3c1xcZGF0YS1tb2RpZmljYXRpb24tZGV0YWlsXFxkYXRhLW1vZGlmaWNhdGlvbi1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2RhdGEtbW9kaWZpY2F0aW9uLWRldGFpbC9kYXRhLW1vZGlmaWNhdGlvbi1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtFQUNBLFdBQUE7RUFDQSw2QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSx1QkFBQTtBQ0FGOztBREtBO0VBQ0UseUJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0FDRkY7O0FETUE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FDSEY7O0FES0E7RUFDRSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0FDRkY7O0FESUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FDREY7O0FESUE7RUFDRSxzQkFBQTtFQUNBLHVCQUFBO0FDREY7O0FESUE7RUFDRSx5QkFBQTtBQ0RGOztBRElBO0VBQ0UseUJBQUE7QUNERjs7QURJQTtFQUNFLG1CQUFBO0FDREY7O0FER0E7RUFDRSxjQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBRjs7QURFQTtFQUNFLGNBQUE7RUFDQSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBLFNBQUE7O0FBQ0E7RUFDRSxXQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0FDR0Y7O0FEREE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNLRjs7QURIQTtFQUNFLG9CQUFBO0FDTUY7O0FESkE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNPRjs7QURMQTtFQUNFLHdCQUFBO0FDUUY7O0FETkE7RUFDRSxXQUFBO0FDU0Y7O0FEUEE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUNVRjs7QURSQTtFQUNFLFdBQUE7QUNXRjs7QURUQTtFQUNFLG1CQUFBO0FDWUY7O0FEVEE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDWUY7O0FEVkE7RUFDRSxjQUFBO0FDYUY7O0FEWEE7RUFDRSxxQkFBQTtBQ2NGOztBRFpBO0VBQ0UsZUFBQTtBQ2VGOztBRFpBO0VBQ0UsZ0NBQUE7RUFDQSxvQkFBQTtBQ2VGOztBRGJBO0VBQ0UscUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDZ0JGOztBRGRBO0VBQ0UsZUFBQTtBQ2lCRjs7QURmQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FDa0JGOztBRGZBO0VBQ0UsY0FBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7QUNrQkY7O0FEaEJBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNtQkY7O0FEakJBO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDb0JGOztBRGxCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNxQkY7O0FEbEJBO0VBQ0Usa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNxQkY7O0FEbkJBO0VBQWUseUJBQUE7QUN1QmY7O0FEckJBO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLDBCQUFBO0FDd0JGOztBRHJCQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ3dCRjs7QUR0QkE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUN5QkY7O0FEdkJBO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQzBCRjs7QUR2QkE7RUFDRSxrQkFBQTtBQzBCRjs7QUR4QkE7RUFBOEIseUJBQUE7QUM0QjlCOztBRDFCQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQzZCRjs7QUQxQkE7RUFDRSxrQkFBQTtBQzZCRjs7QUQxQkE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7QUM2QkY7O0FEMUJBOztDQUFBOztBQUdBO0VBQ0UsMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQzZCRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2RhdGEtbW9kaWZpY2F0aW9uLWRldGFpbC9kYXRhLW1vZGlmaWNhdGlvbi1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBpbml0aWFsO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5tYXQtaGVhZGVyLWNlbGwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDIycHggIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcbi5tYXQtY2VsbCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGhlaWdodDogMjJweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG5cclxuXHJcbnRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICBoZWlnaHQ6IDIycHggIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuXHJcbn1cclxuXHJcbnRoIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI5YWI5O1xyXG4gIGNvbG9yOiByZ2IoMjQ0LCAyNTIsIDI0Nik7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxudHIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGRlZjA7XHJcbiAgY29sb3I6IHJnYigzNCwgMjksIDI5KTtcclxuICBmb250LXdlaWdodDogbGlnaHRlcjtcclxuICBoZWlnaHQ6IDIycHggIWltcG9ydGFudDtcclxufVxyXG5tYXQtcGFnaW5hdG9yIHtcclxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tZC1wYWdpbmF0aW9uLXdyYXBwZXIge1xyXG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbm1kLXJvdzpudGgtY2hpbGQoZXZlbikge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZGYxZjU7XHJcbn1cclxuXHJcbm1kLXJvdzpudGgtY2hpbGQob2RkKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmYjtcclxufVxyXG5cclxucCB7XHJcbiAgcGFkZGluZy1sZWZ0OiA1MTBweDtcclxufVxyXG5oMSB7XHJcbiAgY29sb3I6ICNiNjBjNjE7XHJcbiAgZm9udC1mYW1pbHk6IEltcGFjdCwgQ2hhcmNvYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbn1cclxuaDMge1xyXG4gIGNvbG9yOiAjMDcwNjA2O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxvYnN0ZXJcIiwgU2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXRvcDogMXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDFweDtcclxufVxyXG4vKmZvb3RlciovXHJcbi5jb2xfd2hpdGVfYW1yYyB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuZm9vdGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYzMjM4O1xyXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMHB4IDI1cHggMHB4O1xyXG59XHJcbi5wdDIge1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuZm9vdGVyIHAge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBjb2xvcjogI2NjYztcclxuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDhweDtcclxufVxyXG4ubWIxMCB7XHJcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XHJcbn1cclxuLmZvb3Rlcl91bF9hbXJjIHtcclxuICBtYXJnaW46IDBweDtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIHBhZGRpbmc6IDBweCAwcHggMTBweCAwcHg7XHJcbn1cclxuLmZvb3Rlcl91bF9hbXJjIGxpIHtcclxuICBwYWRkaW5nOiAwcHggMHB4IDVweCAwcHg7XHJcbn1cclxuLmZvb3Rlcl91bF9hbXJjIGxpIGEge1xyXG4gIGNvbG9yOiAjY2NjO1xyXG59XHJcbi5mb290ZXJfdWxfYW1yYyBsaSBhOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuLmZsZWZ0IHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4ucGFkZGluZy1yaWdodCB7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmZvb3Rlcl91bDJfYW1yYyB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDBweDtcclxufVxyXG4uZm9vdGVyX3VsMl9hbXJjIGxpIHAge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcbi5mb290ZXJfdWwyX2FtcmMgbGkgYTpob3ZlciB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5mb290ZXJfdWwyX2FtcmMgbGkgaSB7XHJcbiAgbWFyZ2luLXRvcDogNXB4O1xyXG59XHJcblxyXG4uYm90dG9tX2JvcmRlciB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMzMjNmNDU7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuLmZvb3RlX2JvdHRvbV91bF9hbXJjIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbn1cclxuLmZvb3RlX2JvdHRvbV91bF9hbXJjIGxpIHtcclxuICBkaXNwbGF5OiBpbmxpbmU7XHJcbn1cclxuLmZvb3RlX2JvdHRvbV91bF9hbXJjIGxpIGEge1xyXG4gIGNvbG9yOiAjOTk5O1xyXG4gIG1hcmdpbjogMCAxMnB4O1xyXG59XHJcblxyXG4uc29jaWFsX2Zvb3Rlcl91bCB7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgbWFyZ2luOiAxNXB4IGF1dG8gMCBhdXRvO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxufVxyXG4uc29jaWFsX2Zvb3Rlcl91bCBsaSB7XHJcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5zb2NpYWxfZm9vdGVyX3VsIGxpIGEge1xyXG4gIGNvbG9yOiAjY2NjO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uc29jaWFsX2Zvb3Rlcl91bCBsaSBpIHtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBjb2xvcjogI2ZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGJvcmRlcjogbm9uZTtcclxufVxyXG4uYnV0dG9uOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjY2MyNTI1fVxyXG5cclxuLmJ1dHRvbjphY3RpdmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggIzY2NjtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNHB4KTtcclxufVxyXG5cclxuLm5vLWhvdmVyLWVmZmVjdC5tYXQtc3Ryb2tlZC1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZjM5Y2Y7XHJcbiAgY29sb3I6ICNmZmZkZmU7XHJcbn1cclxuI2N1c3RvbWVycyB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4jY3VzdG9tZXJzIHRkLCAjY3VzdG9tZXJzIHRoIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG5cclxufVxyXG4jY3VzdG9tZXJzIHRkIG1hdC1jaGlwIHtcclxuICBmb250LXNpemU6IHgtc21hbGw7XHJcbn1cclxuI2N1c3RvbWVycyB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XHJcblxyXG4jY3VzdG9tZXJzIHRoIHtcclxuICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA5cHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig5NywgMTc4LCAyMTYpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmNlbnRlcmVkQnV0dG9uIG1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAyMCU7XHJcbn1cclxuXHJcbi8qXHJcbipjc3MgYWRkZWQgYnkgZGV2IG9uIDEyL25vdlxyXG4qL1xyXG4ubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgbWluLWhlaWdodDogMjdweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBwYWRkaW5nOiAwIDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59IiwidGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGluaXRpYWw7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcbn1cblxuLm1hdC1oZWFkZXItY2VsbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtY2VsbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XG59XG5cbnRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIGhlaWdodDogMjJweCAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbn1cblxudGgge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI5YWI5O1xuICBjb2xvcjogI2Y0ZmNmNjtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIGhlaWdodDogMjJweCAhaW1wb3J0YW50O1xufVxuXG50ciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNiOGRlZjA7XG4gIGNvbG9yOiAjMjIxZDFkO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XG59XG5cbm1hdC1wYWdpbmF0b3Ige1xuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcbn1cblxubWQtcGFnaW5hdGlvbi13cmFwcGVyIHtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbm1kLXJvdzpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmMWY1O1xufVxuXG5tZC1yb3c6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmRmZGZiO1xufVxuXG5wIHtcbiAgcGFkZGluZy1sZWZ0OiA1MTBweDtcbn1cblxuaDEge1xuICBjb2xvcjogI2I2MGM2MTtcbiAgZm9udC1mYW1pbHk6IEltcGFjdCwgQ2hhcmNvYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xufVxuXG5oMyB7XG4gIGNvbG9yOiAjMDcwNjA2O1xuICBmb250LWZhbWlseTogXCJMb2JzdGVyXCIsIFNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDFweDtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xufVxuXG4vKmZvb3RlciovXG4uY29sX3doaXRlX2FtcmMge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuZm9vdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNjMyMzg7XG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xuICBwYWRkaW5nOiAxMHB4IDBweCAyNXB4IDBweDtcbn1cblxuLnB0MiB7XG4gIHBhZGRpbmctdG9wOiA0MHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5mb290ZXIgcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6ICNjY2M7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDhweDtcbn1cblxuLm1iMTAge1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn1cblxuLmZvb3Rlcl91bF9hbXJjIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBwYWRkaW5nOiAwcHggMHB4IDEwcHggMHB4O1xufVxuXG4uZm9vdGVyX3VsX2FtcmMgbGkge1xuICBwYWRkaW5nOiAwcHggMHB4IDVweCAwcHg7XG59XG5cbi5mb290ZXJfdWxfYW1yYyBsaSBhIHtcbiAgY29sb3I6ICNjY2M7XG59XG5cbi5mb290ZXJfdWxfYW1yYyBsaSBhOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmZsZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5wYWRkaW5nLXJpZ2h0IHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuLmZvb3Rlcl91bDJfYW1yYyB7XG4gIG1hcmdpbjogMHB4O1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmZvb3Rlcl91bDJfYW1yYyBsaSBwIHtcbiAgZGlzcGxheTogdGFibGU7XG59XG5cbi5mb290ZXJfdWwyX2FtcmMgbGkgYTpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuLmZvb3Rlcl91bDJfYW1yYyBsaSBpIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuXG4uYm90dG9tX2JvcmRlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzIzZjQ1O1xuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLmZvb3RlX2JvdHRvbV91bF9hbXJjIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwcHg7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xufVxuXG4uZm9vdGVfYm90dG9tX3VsX2FtcmMgbGkge1xuICBkaXNwbGF5OiBpbmxpbmU7XG59XG5cbi5mb290ZV9ib3R0b21fdWxfYW1yYyBsaSBhIHtcbiAgY29sb3I6ICM5OTk7XG4gIG1hcmdpbjogMCAxMnB4O1xufVxuXG4uc29jaWFsX2Zvb3Rlcl91bCB7XG4gIGRpc3BsYXk6IHRhYmxlO1xuICBtYXJnaW46IDE1cHggYXV0byAwIGF1dG87XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cblxuLnNvY2lhbF9mb290ZXJfdWwgbGkge1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnNvY2lhbF9mb290ZXJfdWwgbGkgYSB7XG4gIGNvbG9yOiAjY2NjO1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiA4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cblxuLnNvY2lhbF9mb290ZXJfdWwgbGkgaSB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmJ1dHRvbiB7XG4gIHBhZGRpbmc6IDEwcHggMTBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIGJvcmRlcjogbm9uZTtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjYzI1MjU7XG59XG5cbi5idXR0b246YWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNlOGU0MTtcbiAgYm94LXNoYWRvdzogMCA1cHggIzY2NjtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XG59XG5cbi5uby1ob3Zlci1lZmZlY3QubWF0LXN0cm9rZWQtYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmMzljZjtcbiAgY29sb3I6ICNmZmZkZmU7XG59XG5cbiNjdXN0b21lcnMge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuI2N1c3RvbWVycyB0ZCwgI2N1c3RvbWVycyB0aCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDhweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IHgtc21hbGw7XG59XG5cbiNjdXN0b21lcnMgdGQgbWF0LWNoaXAge1xuICBmb250LXNpemU6IHgtc21hbGw7XG59XG5cbiNjdXN0b21lcnMgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cblxuI2N1c3RvbWVycyB0aCB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA5cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MWIyZDg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLndyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jZW50ZXJlZEJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMCU7XG59XG5cbi8qXG4qY3NzIGFkZGVkIGJ5IGRldiBvbiAxMi9ub3ZcbiovXG4ubWF0LXJhaXNlZC1idXR0b24ge1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gIG1pbi1oZWlnaHQ6IDI3cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogMCAwO1xuICBtYXJnaW46IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/views/data-modification-detail/data-modification-detail.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/views/data-modification-detail/data-modification-detail.component.ts ***!
  \**************************************************************************************/
/*! exports provided: DataModificationDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataModificationDetailComponent", function() { return DataModificationDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var src_app_shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/models/pending-for-auth-dto */ "./src/app/shared/models/pending-for-auth-dto.ts");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var _modals_modal_transactions_detail_editable_modal_transactions_detail_editable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modals/modal-transactions-detail-editable/modal-transactions-detail-editable.component */ "./src/app/views/modals/modal-transactions-detail-editable/modal-transactions-detail-editable.component.ts");
/* harmony import */ var src_app_shared_models_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/models/user */ "./src/app/shared/models/user.ts");
/* harmony import */ var _data_modification_details_audit_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./data-modification-details-audit-dto */ "./src/app/views/data-modification-detail/data-modification-details-audit-dto.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../users/users.service */ "./src/app/views/users/users.service.ts");
/* harmony import */ var src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/shared/services/excel.service */ "./src/app/shared/services/excel.service.ts");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_15__);














// tslint:disable-next-line: max-line-length
// tslint:disable-next-line: max-line-length


let DataModificationDetailComponent = class DataModificationDetailComponent {
    constructor(api, dialog, snackBar, userApi, excelService) {
        this.api = api;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.userApi = userApi;
        this.excelService = excelService;
        this.paginator = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"]();
        this.flag = true;
        this.dataModificationDetailsAuditLog = new src_app_shared_models_user__WEBPACK_IMPORTED_MODULE_9__["User"]();
        this.dataModificationDetailsAuditRespDTO = new _data_modification_details_audit_dto__WEBPACK_IMPORTED_MODULE_10__["DataModificationDetailsAuditRespDTO"]();
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.PendingForAuthDetailsDTOList);
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
            'errorCode',
            'errorDesc',
            'view'
        ];
        this.displayedColumnsPendingAuth = [
            'getDetails',
            'externalSysName',
            'batchNumber',
            'processName',
            'processingDate',
            'filename',
            'totalNoOfRecord',
            'totalCredit',
            'totalDebit'
            // 'currency'
        ];
    }
    // getDataModDetailsAuditLogData(getDetailsQueryToggleReqDTO: GetDetailsQueryToggleReqDTO) {
    //   this.api
    //   .getDataModDetailsAuditService(this.getDetailsQueryToggleReqDTO)
    //   .subscribe(resp => {
    //     this.dataModificationDetailsAuditRespDTO = resp;
    //     // console.log('audit data: ');
    //     // console.log(this.dataModificationDetailsAuditRespDTO);
    //   });
    // }
    queryDetailsDataByParam(pendingForAuthDTO) {
        this.spinner1 = true;
        this.getDetailsQueryToggleReqDTO = new src_app_shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_6__["GetDetailsQueryToggleReqDTO"]();
        this.getDetailsQueryToggleReqDTO.externalSysName =
            pendingForAuthDTO.externalSysName;
        this.getDetailsQueryToggleReqDTO.processName =
            pendingForAuthDTO.processName;
        this.getDetailsQueryToggleReqDTO.processingDate =
            pendingForAuthDTO.processingDate;
        this.getDetailsQueryToggleReqDTO.currency = pendingForAuthDTO.currency;
        this.getDetailsQueryToggleReqDTO.filename = pendingForAuthDTO.fileName;
        this.getDetailsQueryToggleReqDTO.batchNumber = pendingForAuthDTO.batchNumber;
        // console.log('getDetailsQueryToggleReqDTO :');
        // console.log(this.getDetailsQueryToggleReqDTO);
        // this.getDataModDetailsAuditLogData(this.getDetailsQueryToggleReqDTO);
        //
        this.api
            .queryFailedDetailsDataByParamService(this.getDetailsQueryToggleReqDTO)
            .subscribe(resp => {
            this.PendingForAuthDetailsDTOList = resp;
            // console.log('hahaha');
            console.log(this.PendingForAuthDetailsDTOList);
            if (this.PendingForAuthDetailsDTOList) {
                console.log(this.PendingForAuthDetailsDTOList[0].inputBy);
                // if(this.PendingForAuthDetailsDTOList[0].inputBy !== this.user_id){
                //   Swal.fire('We didnot find data uploaded by you.','this data is uploaded by'+this.PendingForAuthDetailsDTOList[0].inputBy);
                //   this.spinner1 = false;
                //   return;
                // }
                this.audit = true;
                this.flag = true;
                this.dataAvail = true;
                this.spinner1 = false;
                this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.PendingForAuthDetailsDTOList);
                this.dataSource.paginator = this.paginator.toArray()[1];
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire('No Data ');
            }
        });
    }
    ngOnInit() {
        this.PendingForAuthDetailsDTOList = {};
        this.user_id = sessionStorage.getItem('user_id');
        this.role = sessionStorage.getItem('user_role');
        this.getPendingForAuthData();
        // this.getAllDetailsData();
        // //console.log(this.pendingForAuthDataDetails);
        // this.screenpermission();
    }
    screenpermission() {
        this.screenName = 'DataModificationDetails';
        // this.role='ROLE1';
        this.userApi.getRoleScreenPermission(this.user_id, this.screenName, this.role).subscribe(res => {
            this.rolepermission = res;
            console.log(this.rolepermission);
            if (this.rolepermission) {
                this.button_permission = this.rolepermission[0];
                console.log(this.button_permission);
            }
        });
    }
    getPendingForAuthData() {
        this.api.getPendingForAuthDataForModification(this.user_id).subscribe(resp => {
            // console.log(resp);
            this.pendingForAuthData = resp;
            console.log(this.pendingForAuthData);
            this.dataSourcePendingForAuth = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.pendingForAuthData);
            this.dataSourcePendingForAuth.paginator = this.paginator.toArray()[0];
        });
    }
    applyFilter(filterValue) {
        this.dataSourcePendingForAuth.filter = filterValue.trim().toLowerCase();
    }
    openSnackBar(message, action) {
        this.snackBar.open(message, action, {
            duration: 2000
        });
    }
    approveAndProcess() {
        this.flag = false;
        this.api.excelModifyAuthorization(this.PendingForAuthDetailsDTOList, this.user_id).subscribe(authRes => {
            this.authRes = authRes;
            console.log(this.authRes);
            if (this.authRes) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire('Data Send for Authorization .', 'After Authorization you can process the data.');
            }
            else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire('Authorization Failed.');
            }
        });
    }
    getAllDetailsData() {
        this.api.getFailedDetailsListService().subscribe(resp => {
            this.PendingForAuthDetailsDTOList = resp;
            // console.log(this.PendingForAuthDetailsDTOList);
            this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](this.PendingForAuthDetailsDTOList);
            this.dataSource.paginator = this.paginator.toArray()[1];
        });
    }
    // updateFullData(){
    //   //this.PendingForAuthDetailsDTOList
    //   this.
    // }
    openDialog(detailsDto) {
        console.log(detailsDto);
        const dialogRef = this.dialog.open(_modals_modal_transactions_detail_editable_modal_transactions_detail_editable_component__WEBPACK_IMPORTED_MODULE_8__["ModalTransactionsDetailEditableComponent"], {
            data: detailsDto
        });
        dialogRef.afterClosed().subscribe(result => {
            // console.log(`Dialog result: ${result}`);
        });
    }
    downloadData() {
        this.modify = true;
        console.log('response' + this.PendingForAuthDetailsDTOList);
        // this.allUsersList.forEach(element => {
        //   if(element.creatorDtStamp!==null && element.verifierDtStamp !==null){
        //   element.creatorDtStamp
        //   =this.pipe.transform(element.creatorDtStamp        , 'dd-MMM-yy').toString();
        //   element.verifierDtStamp
        //   =this.pipe.transform(element.verifierDtStamp
        //     , 'dd-MMM-yy').toString();
        //   }
        // });
        this.excelService.exportAsExcelFile(this.PendingForAuthDetailsDTOList, 'Excel_Error_Auth');
    }
    //downloding records in pdf
    convert() {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_15___default.a();
        var col = [["Account", "Amount", "txnCode", "exchRate", "valueDate", "deleteStat"]];
        var rows = [];
        /* The following array of object as response from the API req  */
        var itemNew = this.PendingForAuthDetailsDTOList;
        itemNew.forEach(element => {
            // var date = new Date(element.timeForExport).toLocaleDateString("en-us");
            //  console.log(date)
            var temp = [element.account, element.amount, element.txnCode, element.exchRate, element.valueDate, element.deleteStat];
            rows.push(temp);
        });
        //doc.autoTable(col, rows);
        doc.autoTable({
            head: col,
            body: rows
        });
        doc.save('Excel.pdf');
    }
};
DataModificationDetailComponent.ctorParameters = () => [
    { type: src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
    { type: _users_users_service__WEBPACK_IMPORTED_MODULE_12__["UsersService"] },
    { type: src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_13__["ExcelService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
], DataModificationDetailComponent.prototype, "paginator", void 0);
DataModificationDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-data-modification-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./data-modification-detail.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/data-modification-detail/data-modification-detail.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./data-modification-detail.component.scss */ "./src/app/views/data-modification-detail/data-modification-detail.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
        _users_users_service__WEBPACK_IMPORTED_MODULE_12__["UsersService"],
        src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_13__["ExcelService"]])
], DataModificationDetailComponent);



/***/ }),

/***/ "./src/app/views/data-modification-detail/data-modification-detail.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/views/data-modification-detail/data-modification-detail.module.ts ***!
  \***********************************************************************************/
/*! exports provided: DataModificationDetailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataModificationDetailModule", function() { return DataModificationDetailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/angular-material/angular-material.module */ "./src/app/shared/angular-material/angular-material.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _data_modification_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./data-modification-detail-routing.module */ "./src/app/views/data-modification-detail/data-modification-detail-routing.module.ts");
/* harmony import */ var _data_modification_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./data-modification-detail.component */ "./src/app/views/data-modification-detail/data-modification-detail.component.ts");
/* harmony import */ var _modals_modal_transactions_detail_editable_modal_transactions_detail_editable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modals/modal-transactions-detail-editable/modal-transactions-detail-editable.component */ "./src/app/views/modals/modal-transactions-detail-editable/modal-transactions-detail-editable.component.ts");








// tslint:disable-next-line: max-line-length

let DataModificationDetailModule = class DataModificationDetailModule {
};
DataModificationDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_data_modification_detail_component__WEBPACK_IMPORTED_MODULE_7__["DataModificationDetailComponent"], _modals_modal_transactions_detail_editable_modal_transactions_detail_editable_component__WEBPACK_IMPORTED_MODULE_8__["ModalTransactionsDetailEditableComponent"]],
        entryComponents: [_modals_modal_transactions_detail_editable_modal_transactions_detail_editable_component__WEBPACK_IMPORTED_MODULE_8__["ModalTransactionsDetailEditableComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_data_modification_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__["dataModificationDetailsRoutes"]),
        ]
    })
], DataModificationDetailModule);



/***/ }),

/***/ "./src/app/views/data-modification-detail/data-modification-details-audit-dto.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/views/data-modification-detail/data-modification-details-audit-dto.ts ***!
  \***************************************************************************************/
/*! exports provided: DataModificationDetailsAuditRespDTO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataModificationDetailsAuditRespDTO", function() { return DataModificationDetailsAuditRespDTO; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class DataModificationDetailsAuditRespDTO {
}


/***/ }),

/***/ "./src/app/views/modals/modal-transactions-detail-editable/modal-transactions-detail-editable.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/views/modals/modal-transactions-detail-editable/modal-transactions-detail-editable.component.scss ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h2 {\n  color: #ca1818;\n  font-family: Impact, Charcoal, sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\ndiv {\n  height: 100%;\n  width: 100%;\n  font-size: 8.5px;\n  font-weight: bolder;\n  border-radius: 1px;\n  background-color: #f2f2f2;\n  padding: 1px;\n}\n\n.div label {\n  height: 2px;\n  display: inline-block;\n  text-align: right;\n}\n\n.mat-raised-button {\n  width: 20px;\n  height: 27px;\n  line-height: 27px;\n  min-height: 27px;\n  vertical-align: top;\n  font-size: 11px;\n  padding: 0 0;\n  margin: 0;\n}\n\n.no-hover-effect.mat-raised-button {\n  float: right;\n  background-color: #ec7f5d;\n  width: 15px;\n  height: 15px;\n  line-height: 27px;\n  min-height: 27px;\n  vertical-align: top;\n  font-size: 11px;\n  padding: 0 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbW9kYWxzL21vZGFsLXRyYW5zYWN0aW9ucy1kZXRhaWwtZWRpdGFibGUvRjpcXG11dGh1LW9uYm9hcmRcXG1lZGlhbi1waDItdWkvc3JjXFxhcHBcXHZpZXdzXFxtb2RhbHNcXG1vZGFsLXRyYW5zYWN0aW9ucy1kZXRhaWwtZWRpdGFibGVcXG1vZGFsLXRyYW5zYWN0aW9ucy1kZXRhaWwtZWRpdGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL21vZGFscy9tb2RhbC10cmFuc2FjdGlvbnMtZGV0YWlsLWVkaXRhYmxlL21vZGFsLXRyYW5zYWN0aW9ucy1kZXRhaWwtZWRpdGFibGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtBQ0dGOztBRERBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNJRjs7QUREQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDSUYiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9tb2RhbHMvbW9kYWwtdHJhbnNhY3Rpb25zLWRldGFpbC1lZGl0YWJsZS9tb2RhbC10cmFuc2FjdGlvbnMtZGV0YWlsLWVkaXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gIGNvbG9yOiAjY2ExODE4O1xyXG4gIGZvbnQtZmFtaWx5OiBJbXBhY3QsIENoYXJjb2FsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG59XHJcbmRpdiB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgZm9udC1zaXplOiA4LjVweDtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gIHBhZGRpbmc6IDFweDtcclxufVxyXG4uZGl2IGxhYmVsIHtcclxuICBoZWlnaHQ6IDJweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDI3cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgbWluLWhlaWdodDogMjdweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBwYWRkaW5nOiAwIDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG4ubm8taG92ZXItZWZmZWN0Lm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjN2Y1ZDtcclxuICB3aWR0aDogMTVweDtcclxuICBoZWlnaHQ6IDE1cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgbWluLWhlaWdodDogMjdweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBwYWRkaW5nOiAwIDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5cclxuIiwiaDIge1xuICBjb2xvcjogI2NhMTgxODtcbiAgZm9udC1mYW1pbHk6IEltcGFjdCwgQ2hhcmNvYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuXG5kaXYge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDguNXB4O1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICBib3JkZXItcmFkaXVzOiAxcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIHBhZGRpbmc6IDFweDtcbn1cblxuLmRpdiBsYWJlbCB7XG4gIGhlaWdodDogMnB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG4ubWF0LXJhaXNlZC1idXR0b24ge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyN3B4O1xuICBsaW5lLWhlaWdodDogMjdweDtcbiAgbWluLWhlaWdodDogMjdweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nOiAwIDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLm5vLWhvdmVyLWVmZmVjdC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjN2Y1ZDtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gIG1pbi1oZWlnaHQ6IDI3cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogMCAwO1xuICBtYXJnaW46IDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/views/modals/modal-transactions-detail-editable/modal-transactions-detail-editable.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/views/modals/modal-transactions-detail-editable/modal-transactions-detail-editable.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: ModalTransactionsDetailEditableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalTransactionsDetailEditableComponent", function() { return ModalTransactionsDetailEditableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);







let ModalTransactionsDetailEditableComponent = class ModalTransactionsDetailEditableComponent {
    constructor(data, snackBar, api) {
        this.data = data;
        this.snackBar = snackBar;
        this.api = api;
        this.items = [10, 20, 30, 40];
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
    }
    ngOnInit() {
        this.responseDto = this.data;
        this.histDTO = this.data;
        this.user_id = sessionStorage.getItem('user_id');
        this.role = sessionStorage.getItem('user_role');
    }
    insertModifiedDataIntoDetailsData(reqDTO) {
        this.saveButtonStatus = true;
        if (reqDTO.inputBy !== this.user_id) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('You Donot have permission for modification.', 'Only maker can modify record.');
            return;
        }
        this.api.sendUpdatedDataToDetailsData(reqDTO, this.user_id).subscribe(resp => {
            // console.log(resp);
            this.status = resp;
            console.log('insertion status: ' + this.status);
            if (this.status === true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('data saved successfully.', 'success');
            }
            if (this.status === false) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    type: 'error',
                    text: 'data save to DB Failed.',
                });
            }
            // this.saveButtonStatus = false;
        });
    }
};
ModalTransactionsDetailEditableComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }
];
ModalTransactionsDetailEditableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-transactions-detail-editable',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal-transactions-detail-editable.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/modals/modal-transactions-detail-editable/modal-transactions-detail-editable.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal-transactions-detail-editable.component.scss */ "./src/app/views/modals/modal-transactions-detail-editable/modal-transactions-detail-editable.component.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
        src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])
], ModalTransactionsDetailEditableComponent);

// openSnackBar(message: string, action: string) {
//   this.snackBar.open(message, action, {
//     duration: 2000
//   });
// }
//}


/***/ })

}]);
//# sourceMappingURL=views-data-modification-detail-data-modification-detail-module-es2015.js.map