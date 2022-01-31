function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-data-modification-detail-data-modification-detail-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/data-modification-detail/data-modification-detail.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/data-modification-detail/data-modification-detail.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsDataModificationDetailDataModificationDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div style=\"background-color:rgb(183, 247, 191)\">\r\n  <h1 mat-dialog-title>Data Modification Details</h1>\r\n</div> -->\r\n<mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n  <span>Rejection Queue</span>\r\n</mat-toolbar>\r\n<br />\r\n<div class=\"mat-elevation-z8 \">\r\n  <mat-form-field>\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n  </mat-form-field>\r\n  <table mat-table [dataSource]=\"dataSourcePendingForAuth\">\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"getDetails\">\r\n      <th mat-header-cell *matHeaderCellDef>Process Details</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"queryDetailsDataByParam(element)\" style=\"height : 90%\">\r\n          Get Details\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"externalSysName\">\r\n      <th mat-header-cell *matHeaderCellDef>External System</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.externalSysName }}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"processName\">\r\n      <th mat-header-cell *matHeaderCellDef>Process Name</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.processName }}</td>\r\n    </ng-container>\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"batchNumber\">\r\n      <th mat-header-cell *matHeaderCellDef>Batch Number</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.batchNumber }}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"totalNoOfRecord\">\r\n      <th mat-header-cell *matHeaderCellDef>Total Record</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.totalNoOfRecord }}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"totalCredit\">\r\n      <th mat-header-cell *matHeaderCellDef>Total Credit</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.totalCredit }}</td>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"totalDebit\">\r\n      <th mat-header-cell *matHeaderCellDef>Total Dedit</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.totalDebit }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"processingDate\">\r\n      <th mat-header-cell *matHeaderCellDef>Processing Date</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        {{ element.processingDate | date }}\r\n      </td>\r\n    </ng-container>\r\n    <!-- <ng-container matColumnDef=\"currency\">\r\n      <th mat-header-cell *matHeaderCellDef>Currency</th>\r\n      <td mat-cell *matCellDef=\"let element\">\r\n        {{ element.currency }}\r\n      </td>\r\n    </ng-container> -->\r\n\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"filename\">\r\n      <th mat-header-cell *matHeaderCellDef>File Name</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.fileName }}</td>\r\n    </ng-container>\r\n\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumnsPendingAuth\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumnsPendingAuth\"></tr>\r\n  </table>\r\n\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20, 30, 40, 50, 60]\" showFirstLastButtons></mat-paginator>\r\n</div>\r\n<br />\r\n<mat-spinner *ngIf=\"spinner1\" radius=\"10px;\"> Please Wait Data is Loading.......</mat-spinner>\r\n<div class=\"wrapper\">\r\n  <h3 style=\"font-size: large;\">Failed Data</h3>\r\n</div>\r\n<br />\r\n\r\n<div class=\"mat-elevation-z8 \">\r\n  <!-- <button mat-raised-button color=\"primary\" (click)=\"downloadData()\" *ngIf=\"!modify\">\r\n        Download Uploaded Data\r\n        </button> -->\r\n\r\n        <button\r\n        mat-button >\r\n      \r\n        <mat-label>Export As</mat-label>\r\n      \r\n        <mat-select\r\n          #select>\r\n          <mat-option (click)=\"downloadData()\" >Excel</mat-option>\r\n          <mat-option  (click)=\"convert()\">PDF</mat-option>\r\n        </mat-select>\r\n      \r\n      </button>\r\n  <table mat-table [dataSource]=\"dataSource\">\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"account\">\r\n      <th mat-header-cell *matHeaderCellDef>Account</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.account }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"ccyCd\">\r\n      <th mat-header-cell *matHeaderCellDef>Currency</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.ccyCd }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"branchCode\">\r\n      <th mat-header-cell *matHeaderCellDef>Branch</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.id.branchCode }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"amount\">\r\n      <th mat-header-cell *matHeaderCellDef>Amount</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.amount }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Position Column -->\r\n    <ng-container matColumnDef=\"lcyEquivalent\">\r\n      <th mat-header-cell *matHeaderCellDef>Lcy Amount</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.lcyEquivalent }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Name Column -->\r\n    <ng-container matColumnDef=\"drCr\">\r\n      <th mat-header-cell *matHeaderCellDef>Dr/Cr</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.drCr }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n    <ng-container matColumnDef=\"exchRate\">\r\n      <th mat-header-cell *matHeaderCellDef>Exchange Rate</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.exchRate }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"relatedAccount\">\r\n      <th mat-header-cell *matHeaderCellDef>Related Account</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.relatedAccount }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Weight Column -->\r\n\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"addlText\">\r\n      <th mat-header-cell *matHeaderCellDef>Addl Text</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.addlText }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"accDesc\">\r\n      <th mat-header-cell *matHeaderCellDef>Account Description</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.accDesc }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"errorCode\">\r\n      <th mat-header-cell *matHeaderCellDef>Error Code</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.errorCode }}</td>\r\n    </ng-container>\r\n\r\n    <!-- Symbol Column -->\r\n    <ng-container matColumnDef=\"errorDesc\">\r\n      <th mat-header-cell *matHeaderCellDef>Error Description</th>\r\n      <td mat-cell *matCellDef=\"let element\">{{ element.errorDesc }}</td>\r\n    </ng-container>\r\n\r\n    <ng-container matColumnDef=\"view\">\r\n      <th mat-header-cell *matHeaderCellDef>Process</th>\r\n      <td mat-cell *matCellDef=\"let element\" [style.color]=\"element.color\" data-label=\"color\">\r\n        <button mat-raised-button color=\"primary\" (click)=\"openDialog(element)\" style=\"height : 90%\">\r\n          Edit\r\n        </button>\r\n      </td>\r\n    </ng-container>\r\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns\"></tr>\r\n  </table>\r\n\r\n  <mat-paginator [pageSizeOptions]=\"[5, 10, 20, 30, 40, 50, 60]\" showFirstLastButtons></mat-paginator>\r\n</div>\r\n<br />\r\n<br />\r\n<div class=\"wrapper\">\r\n<!-- <button mat-raised-button color=\"primary\" [disabled]=\"!flag\" (click)=\"approveAndProcess()\" style=\"height : 90%\" *ngIf=\"this.button_permission.authbutton=='T' && dataAvail\">\r\n    Send For Approval\r\n  </button> -->\r\n\r\n</div>\r\n<br>\r\n<div fxLayout=\"row\">\r\n  <div fxFlex></div>\r\n  <div fxFlex=\"95\">\r\n    <mat-card style=\"width: 50%;  margin-left:300px;\">\r\n      <mat-card-title>\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n        <div fxLayout=\"row\">\r\n          <table id=\"customers\" *ngIf=\"audit\" >\r\n            <tr>\r\n              <th>Input By:</th>\r\n              <td>\r\n                <mat-chip>{{this.PendingForAuthDetailsDTOList[0].inputBy}}</mat-chip>\r\n              </td>\r\n              <th>Input Date:</th>\r\n              <td>\r\n                <mat-chip>{{this.PendingForAuthDetailsDTOList[0].inputTime | date:'M/d/yy'}}</mat-chip>\r\n              </td>\r\n              <th>Last Modified By:</th>\r\n              <td>\r\n                <mat-chip>{{this.PendingForAuthDetailsDTOList[0].modifiedBy}}</mat-chip>\r\n              </td>\r\n              <th>Last Modified Date:</th>\r\n              <td>\r\n                <mat-chip>{{this.PendingForAuthDetailsDTOList[0].modifiedDateTime | date:'M/d/yy'}}</mat-chip>\r\n              </td>\r\n            </tr>\r\n            <tr>\r\n              <th>Final Auth By:</th>\r\n              <td>\r\n                <mat-chip>{{this.PendingForAuthDetailsDTOList[0].secondTimeAuthorizer}}</mat-chip>\r\n              </td>\r\n              <th>Final Auth Date:</th>\r\n              <td>\r\n                <mat-chip>{{this.PendingForAuthDetailsDTOList[0].secondTimeAuthTimeStamp | date:'M/d/yy'}}</mat-chip>\r\n              </td>\r\n              <th>Amend Auth By:</th>\r\n              <td>\r\n                <mat-chip>{{this.PendingForAuthDetailsDTOList[0].fristTimeAuthorizer}}</mat-chip>\r\n              </td>\r\n              <th>Amend Auth Date:</th>\r\n              <td>\r\n                <mat-chip>{{this.PendingForAuthDetailsDTOList[0].fristTimeAuthTimeStamp | date:'M/d/yy'}}</mat-chip>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>\r\n<br><br><br>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/modals/modal-transactions-detail-editable/modal-transactions-detail-editable.component.html":
  /*!*********************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/modals/modal-transactions-detail-editable/modal-transactions-detail-editable.component.html ***!
    \*********************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsModalsModalTransactionsDetailEditableModalTransactionsDetailEditableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 mat-dialog-title>Edit Transaction Details</h2>\r\n<div>\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Account Number:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.account\"/>\r\n  </label>\r\n  &nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Amount:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.amount\" />\r\n  </label>\r\n  &nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;\r\n    Account Currency :\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.ccyCd\" maxlength=\"3\"/>\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Account Branch :\r\n    <input type=\"text\"   [(ngModel)]=\"responseDto.accountBranch\" maxlength=\"3\"/>\r\n  </label>\r\n\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    LCY\r\n    Amount:\r\n    <input type=\"text\"   [(ngModel)]=\"responseDto.lcyEquivalent\"/>\r\n  </label>\r\n\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Debit / Credit\r\n    :\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.drCr\"/>\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Branch Code\r\n    :\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.id.branchCode\" maxlength=\"3\"/>\r\n  </label>\r\n  &nbsp;&nbsp;\r\n  <label>\r\n  \r\n    Value\r\n    Date:\r\n        <p>{{responseDto.valueDate | date}}</p>\r\n    <input type=\"date\"  [(ngModel)]=\"responseDto.valueDate\"/>\r\n  </label>\r\n  &nbsp;\r\n  <label>\r\n  \r\n    Initiation Date\r\n    :     <p>{{responseDto.id.initiationDate | date}}</p>\r\n    <input type=\"date\"  [(ngModel)]=\"responseDto.id.initiationDate\" />\r\n  </label>\r\n  <label>\r\n   \r\n    Upload Date\r\n    :<p>{{responseDto.uploadDate | date}}</p>\r\n    <input type=\"date\"  [(ngModel)]=\"responseDto.uploadDate\"/>\r\n  </label>\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    External Reference:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.externalRefNo\"/>\r\n  </label>\r\n  &nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;\r\n    Related Account :\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.relatedAccount\"/>\r\n  </label>\r\n  &nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n    Related Customer :\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.relCust\"/>\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Exchange Rate\r\n    :\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.exchRate\"/>\r\n  </label>\r\n  &nbsp;&nbsp;\r\n  <label>\r\n\r\n    Related Reference :\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.relatedRef\"/>\r\n  </label>\r\n  &nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Additional Text :\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.addlText\"/>\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Instrument Number :\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.instrumentNo\"/>\r\n  </label>\r\n  &nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Batch Number :\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.id.batchNo\"/>\r\n  </label>\r\n \r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Financial Cycle:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.finCycle\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Period Code:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.periodCode\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n    Transaction Code :\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.txnCode\" />\r\n  </label>\r\n  <br />\r\n  <br>\r\n \r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    MIS_CODE:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.misCode\" maxlength=\"4\" />\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    POOL_CODE:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.poolCode\" maxlength=\"9\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    TXN_MIS_1:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.txnMis1\" maxlength=\"9\"/>\r\n  </label>\r\n   <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    Error Description:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.errorDesc\" />\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    MIS_GROUP:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.misGroup\" maxlength=\"10\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    MIS_FLAG:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.misFlag\" maxlength=\"1\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    TXN_MIS_2:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.txnMis2\" maxlength=\"9\"/>\r\n  </label>\r\n\r\n  <br>\r\n \r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    MIS_HEAD:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.misHead\" maxlength=\"9\"/>\r\n  </label>\r\n  &nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;\r\n    MIS_GROUP_TXN:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.misGroupTxn\" maxlength=\"1\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    TXN_MIS_3:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.txnMis3\" maxlength=\"9\"/>\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COMP_MIS_1:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.compMis1\" maxlength=\"9\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COMP_MIS_3 :\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.compMis3\" maxlength=\"9\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    TXN_MIS_4:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.txnMis4\" maxlength=\"9\"/>\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COMP_MIS_2:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.compMis2\" maxlength=\"9\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COMP_MIS_4:\r\n    <input type=\"text\" [(ngModel)]=\"responseDto.compMis4\" maxlength=\"9\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    TXN_MIS_5:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.txnMis5\" maxlength=\"9\"/>\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COMP_MIS_5:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.compMis5\" maxlength=\"9\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COST_CODE_1:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.costCode1\" maxlength=\"9\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    TXN_MIS_6:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.txnMis6\" maxlength=\"9\"/>\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COMP_MIS_6:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.compMis6\" maxlength=\"9\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COST_CODE_2:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.costCode2\" maxlength=\"9\" />\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    TXN_MIS_7:\r\n    <input type=\"text\"   [(ngModel)]=\"responseDto.txnMis7\" maxlength=\"9\"/>\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COMP_MIS_7:\r\n    <input type=\"text\"   [(ngModel)]=\"responseDto.compMis7\" maxlength=\"9\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COST_CODE_3:\r\n    <input type=\"text\"   [(ngModel)]=\"responseDto.costCode3\" maxlength=\"9\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    TXN_MIS_8:\r\n    <input type=\"text\"   [(ngModel)]=\"responseDto.txnMis8\" maxlength=\"9\"/>\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COMP_MIS_8:\r\n    <input type=\"text\"   [(ngModel)]=\"responseDto.compMis8\" maxlength=\"9\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;\r\n    COST_CODE_4 :\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.costCode4\" maxlength=\"9\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    TXN_MIS_9:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.txnMis9\" maxlength=\"9\"/>\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COMP_MIS_9:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.compMis9\"  maxlength=\"9\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COST_CODE_5:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.costCode5\" maxlength=\"9\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    TXN_MIS_10:\r\n    <input type=\"text\"  [(ngModel)]=\"responseDto.txnMis10\" maxlength=\"9\"/>\r\n  </label>\r\n  <br />\r\n  <label>\r\n    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n    COMP_MIS_10:\r\n    <input type=\"text\" [(ngModel)]=\"responseDto.compMis10\" maxlength=\"9\"/>\r\n  </label>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <label>\r\n    &nbsp;&nbsp;\r\n    UPLOAD STATUS:\r\n    <input type=\"text\" [(ngModel)]=\"responseDto.uploadStat\"/>\r\n  </label>\r\n</div>\r\n<p>\r\n  <button  mat-raised-button color=\"primary\" matBadge=\"8\" matBadgePosition=\"before\"\r\n    matBadgeColor=\"accent\" (click)=\"insertModifiedDataIntoDetailsData(responseDto)\" *ngIf=\"!saveButtonStatus\">\r\n    Save Data\r\n  </button>&nbsp;&nbsp;\r\n  <button mat-raised-button color=\"primary\" class=\"no-hover-effect\" mat-dialog-close>Exit</button>\r\n</p>\r\n\r\n<!-- <mat-dialog-actions align=\"end\">\r\n\r\n</mat-dialog-actions> -->";
    /***/
  },

  /***/
  "./src/app/views/data-modification-detail/data-modification-detail-routing.module.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/views/data-modification-detail/data-modification-detail-routing.module.ts ***!
    \*******************************************************************************************/

  /*! exports provided: dataModificationDetailsRoutes */

  /***/
  function srcAppViewsDataModificationDetailDataModificationDetailRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "dataModificationDetailsRoutes", function () {
      return dataModificationDetailsRoutes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _data_modification_detail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./data-modification-detail.component */
    "./src/app/views/data-modification-detail/data-modification-detail.component.ts");

    var dataModificationDetailsRoutes = [{
      path: '',
      component: _data_modification_detail_component__WEBPACK_IMPORTED_MODULE_1__["DataModificationDetailComponent"]
    }];
    /***/
  },

  /***/
  "./src/app/views/data-modification-detail/data-modification-detail.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/views/data-modification-detail/data-modification-detail.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsDataModificationDetailDataModificationDetailComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\n  border-collapse: initial;\n  width: 100%;\n  text-align: center !important;\n}\n\n.mat-header-cell {\n  text-align: center;\n  height: 22px !important;\n}\n\n.mat-cell {\n  text-align: center;\n  height: 22px !important;\n}\n\ntr:nth-child(even) {\n  background-color: #f2f2f2;\n  height: 22px !important;\n  font-weight: lighter;\n}\n\nth {\n  background-color: #1b9ab9;\n  color: #f4fcf6;\n  font-weight: lighter;\n  height: 22px !important;\n}\n\ntr {\n  background-color: #b8def0;\n  color: #221d1d;\n  font-weight: lighter;\n  height: 22px !important;\n}\n\nmat-paginator {\n  width: auto !important;\n  height: 40px !important;\n}\n\nmd-pagination-wrapper {\n  width: auto !important;\n  height: 40px !important;\n}\n\nmd-row:nth-child(even) {\n  background-color: #edf1f5;\n}\n\nmd-row:nth-child(odd) {\n  background-color: #fdfdfb;\n}\n\np {\n  padding-left: 510px;\n}\n\nh1 {\n  color: #b60c61;\n  font-family: Impact, Charcoal, sans-serif;\n  font-size: 32px;\n  font-weight: bold;\n  margin-top: 0px;\n  margin-bottom: 1px;\n}\n\nh3 {\n  color: #070606;\n  font-family: \"Lobster\", Sans-serif;\n  font-size: 35px;\n  font-weight: bold;\n  margin-top: 1px;\n  margin-bottom: 1px;\n}\n\n/*footer*/\n\n.col_white_amrc {\n  color: #fff;\n}\n\nfooter {\n  width: 100%;\n  background-color: #263238;\n  min-height: 250px;\n  padding: 10px 0px 25px 0px;\n}\n\n.pt2 {\n  padding-top: 40px;\n  margin-bottom: 20px;\n}\n\nfooter p {\n  font-size: 13px;\n  color: #ccc;\n  padding-bottom: 0px;\n  margin-bottom: 8px;\n}\n\n.mb10 {\n  padding-bottom: 15px;\n}\n\n.footer_ul_amrc {\n  margin: 0px;\n  list-style-type: none;\n  font-size: 14px;\n  padding: 0px 0px 10px 0px;\n}\n\n.footer_ul_amrc li {\n  padding: 0px 0px 5px 0px;\n}\n\n.footer_ul_amrc li a {\n  color: #ccc;\n}\n\n.footer_ul_amrc li a:hover {\n  color: #fff;\n  text-decoration: none;\n}\n\n.fleft {\n  float: left;\n}\n\n.padding-right {\n  padding-right: 10px;\n}\n\n.footer_ul2_amrc {\n  margin: 0px;\n  list-style-type: none;\n  padding: 0px;\n}\n\n.footer_ul2_amrc li p {\n  display: table;\n}\n\n.footer_ul2_amrc li a:hover {\n  text-decoration: none;\n}\n\n.footer_ul2_amrc li i {\n  margin-top: 5px;\n}\n\n.bottom_border {\n  border-bottom: 1px solid #323f45;\n  padding-bottom: 20px;\n}\n\n.foote_bottom_ul_amrc {\n  list-style-type: none;\n  padding: 0px;\n  display: table;\n  margin-top: 10px;\n  margin-right: auto;\n  margin-bottom: 10px;\n  margin-left: auto;\n}\n\n.foote_bottom_ul_amrc li {\n  display: inline;\n}\n\n.foote_bottom_ul_amrc li a {\n  color: #999;\n  margin: 0 12px;\n}\n\n.social_footer_ul {\n  display: table;\n  margin: 15px auto 0 auto;\n  list-style-type: none;\n}\n\n.social_footer_ul li {\n  padding-left: 20px;\n  padding-top: 10px;\n  float: left;\n}\n\n.social_footer_ul li a {\n  color: #ccc;\n  border: 1px solid #ccc;\n  padding: 8px;\n  border-radius: 50%;\n}\n\n.social_footer_ul li i {\n  width: 20px;\n  height: 20px;\n  text-align: center;\n}\n\n.button {\n  padding: 10px 10px;\n  font-size: 12px;\n  text-align: center;\n  cursor: pointer;\n  outline: none;\n  color: #fff;\n  background-color: #4CAF50;\n  border: none;\n}\n\n.button:hover {\n  background-color: #cc2525;\n}\n\n.button:active {\n  background-color: #3e8e41;\n  box-shadow: 0 5px #666;\n  transform: translateY(4px);\n}\n\n.no-hover-effect.mat-stroked-button {\n  background-color: #4f39cf;\n  color: #fffdfe;\n}\n\n#customers {\n  border-collapse: collapse;\n  width: 100%;\n}\n\n#customers td, #customers th {\n  border: 1px solid #ddd;\n  padding: 8px;\n  text-align: center;\n  font-size: x-small;\n}\n\n#customers td mat-chip {\n  font-size: x-small;\n}\n\n#customers tr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n#customers th {\n  padding-top: 8px;\n  padding-bottom: 9px;\n  text-align: left;\n  background-color: #61b2d8;\n  color: white;\n}\n\n.wrapper {\n  text-align: center;\n}\n\n.centeredButton mat-raised-button {\n  position: absolute;\n  top: 20%;\n}\n\n/*\n*css added by dev on 12/nov\n*/\n\n.mat-raised-button {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 20px;\n  line-height: 27px;\n  min-height: 27px;\n  vertical-align: top;\n  font-size: 11px;\n  padding: 0 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZGF0YS1tb2RpZmljYXRpb24tZGV0YWlsL0Q6XFxJY3VzdC1VaVxcbWVkaWFuLXBoMi11aS9zcmNcXGFwcFxcdmlld3NcXGRhdGEtbW9kaWZpY2F0aW9uLWRldGFpbFxcZGF0YS1tb2RpZmljYXRpb24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9kYXRhLW1vZGlmaWNhdGlvbi1kZXRhaWwvZGF0YS1tb2RpZmljYXRpb24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQUE7RUFDQSxXQUFBO0VBQ0EsNkJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7QUNDRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsdUJBQUE7QUNBRjs7QURLQTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQ0ZGOztBRE1BO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQ0hGOztBREtBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQ0ZGOztBRElBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQ0RGOztBRElBO0VBQ0Usc0JBQUE7RUFDQSx1QkFBQTtBQ0RGOztBRElBO0VBQ0UseUJBQUE7QUNERjs7QURJQTtFQUNFLHlCQUFBO0FDREY7O0FESUE7RUFDRSxtQkFBQTtBQ0RGOztBREdBO0VBQ0UsY0FBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQUY7O0FERUE7RUFDRSxjQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURDQSxTQUFBOztBQUNBO0VBQ0UsV0FBQTtBQ0VGOztBREFBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQ0dGOztBRERBO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtBQ0lGOztBREZBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDS0Y7O0FESEE7RUFDRSxvQkFBQTtBQ01GOztBREpBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FDT0Y7O0FETEE7RUFDRSx3QkFBQTtBQ1FGOztBRE5BO0VBQ0UsV0FBQTtBQ1NGOztBRFBBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0FDVUY7O0FEUkE7RUFDRSxXQUFBO0FDV0Y7O0FEVEE7RUFDRSxtQkFBQTtBQ1lGOztBRFRBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtBQ1lGOztBRFZBO0VBQ0UsY0FBQTtBQ2FGOztBRFhBO0VBQ0UscUJBQUE7QUNjRjs7QURaQTtFQUNFLGVBQUE7QUNlRjs7QURaQTtFQUNFLGdDQUFBO0VBQ0Esb0JBQUE7QUNlRjs7QURiQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ2dCRjs7QURkQTtFQUNFLGVBQUE7QUNpQkY7O0FEZkE7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQ2tCRjs7QURmQTtFQUNFLGNBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FDa0JGOztBRGhCQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FDbUJGOztBRGpCQTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQ29CRjs7QURsQkE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FDcUJGOztBRGxCQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDcUJGOztBRG5CQTtFQUFlLHlCQUFBO0FDdUJmOztBRHJCQTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQ3dCRjs7QURyQkE7RUFDRSx5QkFBQTtFQUNBLGNBQUE7QUN3QkY7O0FEdEJBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0FDeUJGOztBRHZCQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUMwQkY7O0FEdkJBO0VBQ0Usa0JBQUE7QUMwQkY7O0FEeEJBO0VBQThCLHlCQUFBO0FDNEI5Qjs7QUQxQkE7RUFDRSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUM2QkY7O0FEMUJBO0VBQ0Usa0JBQUE7QUM2QkY7O0FEMUJBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0FDNkJGOztBRDFCQTs7Q0FBQTs7QUFHQTtFQUNFLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUM2QkYiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9kYXRhLW1vZGlmaWNhdGlvbi1kZXRhaWwvZGF0YS1tb2RpZmljYXRpb24tZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogaW5pdGlhbDtcclxuICB3aWR0aDoxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LWhlYWRlci1jZWxsIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4ubWF0LWNlbGwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDIycHggIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcblxyXG50cjpudGgtY2hpbGQoZXZlbikge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcblxyXG59XHJcblxyXG50aCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiOWFiOTtcclxuICBjb2xvcjogcmdiKDI0NCwgMjUyLCAyNDYpO1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG4gIGhlaWdodDogMjJweCAhaW1wb3J0YW50O1xyXG59XHJcbnRyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhkZWYwO1xyXG4gIGNvbG9yOiByZ2IoMzQsIDI5LCAyOSk7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbiAgaGVpZ2h0OiAyMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxubWF0LXBhZ2luYXRvciB7XHJcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxubWQtcGFnaW5hdGlvbi13cmFwcGVyIHtcclxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tZC1yb3c6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWRmMWY1O1xyXG59XHJcblxyXG5tZC1yb3c6bnRoLWNoaWxkKG9kZCkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZGZkZmI7XHJcbn1cclxuXHJcbnAge1xyXG4gIHBhZGRpbmctbGVmdDogNTEwcHg7XHJcbn1cclxuaDEge1xyXG4gIGNvbG9yOiAjYjYwYzYxO1xyXG4gIGZvbnQtZmFtaWx5OiBJbXBhY3QsIENoYXJjb2FsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG59XHJcbmgzIHtcclxuICBjb2xvcjogIzA3MDYwNjtcclxuICBmb250LWZhbWlseTogXCJMb2JzdGVyXCIsIFNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi10b3A6IDFweDtcclxuICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbn1cclxuLypmb290ZXIqL1xyXG4uY29sX3doaXRlX2FtcmMge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbmZvb3RlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MzIzODtcclxuICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICBwYWRkaW5nOiAxMHB4IDBweCAyNXB4IDBweDtcclxufVxyXG4ucHQyIHtcclxuICBwYWRkaW5nLXRvcDogNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbmZvb3RlciBwIHtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgY29sb3I6ICNjY2M7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuLm1iMTAge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcbi5mb290ZXJfdWxfYW1yYyB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBwYWRkaW5nOiAwcHggMHB4IDEwcHggMHB4O1xyXG59XHJcbi5mb290ZXJfdWxfYW1yYyBsaSB7XHJcbiAgcGFkZGluZzogMHB4IDBweCA1cHggMHB4O1xyXG59XHJcbi5mb290ZXJfdWxfYW1yYyBsaSBhIHtcclxuICBjb2xvcjogI2NjYztcclxufVxyXG4uZm9vdGVyX3VsX2FtcmMgbGkgYTpob3ZlciB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5mbGVmdCB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLnBhZGRpbmctcmlnaHQge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5mb290ZXJfdWwyX2FtcmMge1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuLmZvb3Rlcl91bDJfYW1yYyBsaSBwIHtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxufVxyXG4uZm9vdGVyX3VsMl9hbXJjIGxpIGE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG4uZm9vdGVyX3VsMl9hbXJjIGxpIGkge1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLmJvdHRvbV9ib3JkZXIge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMzIzZjQ1O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG59XHJcbi5mb290ZV9ib3R0b21fdWxfYW1yYyB7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDBweDtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbi5mb290ZV9ib3R0b21fdWxfYW1yYyBsaSB7XHJcbiAgZGlzcGxheTogaW5saW5lO1xyXG59XHJcbi5mb290ZV9ib3R0b21fdWxfYW1yYyBsaSBhIHtcclxuICBjb2xvcjogIzk5OTtcclxuICBtYXJnaW46IDAgMTJweDtcclxufVxyXG5cclxuLnNvY2lhbF9mb290ZXJfdWwge1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIG1hcmdpbjogMTVweCBhdXRvIDAgYXV0bztcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuLnNvY2lhbF9mb290ZXJfdWwgbGkge1xyXG4gIHBhZGRpbmctbGVmdDogMjBweDtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG4uc29jaWFsX2Zvb3Rlcl91bCBsaSBhIHtcclxuICBjb2xvcjogI2NjYztcclxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbn1cclxuLnNvY2lhbF9mb290ZXJfdWwgbGkgaSB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbiB7XHJcbiAgcGFkZGluZzogMTBweCAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmJ1dHRvbjpob3ZlciB7YmFja2dyb3VuZC1jb2xvcjogI2NjMjUyNX1cclxuXHJcbi5idXR0b246YWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2U4ZTQxO1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4ICM2NjY7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDRweCk7XHJcbn1cclxuXHJcbi5uby1ob3Zlci1lZmZlY3QubWF0LXN0cm9rZWQtYnV0dG9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGYzOWNmO1xyXG4gIGNvbG9yOiAjZmZmZGZlO1xyXG59XHJcbiNjdXN0b21lcnMge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuI2N1c3RvbWVycyB0ZCwgI2N1c3RvbWVycyB0aCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogeC1zbWFsbDtcclxuXHJcbn1cclxuI2N1c3RvbWVycyB0ZCBtYXQtY2hpcCB7XHJcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xyXG59XHJcbiNjdXN0b21lcnMgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxyXG5cclxuI2N1c3RvbWVycyB0aCB7XHJcbiAgcGFkZGluZy10b3A6IDhweDtcclxuICBwYWRkaW5nLWJvdHRvbTogOXB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoOTcsIDE3OCwgMjE2KTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi53cmFwcGVyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jZW50ZXJlZEJ1dHRvbiBtYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMjAlO1xyXG59XHJcblxyXG4vKlxyXG4qY3NzIGFkZGVkIGJ5IGRldiBvbiAxMi9ub3ZcclxuKi9cclxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcclxuICB3aWR0aDogZml0LWNvbnRlbnQ7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gIG1pbi1oZWlnaHQ6IDI3cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgcGFkZGluZzogMCAwO1xyXG4gIG1hcmdpbjogMDtcclxufSIsInRhYmxlIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBpbml0aWFsO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtaGVhZGVyLWNlbGwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMjJweCAhaW1wb3J0YW50O1xufVxuXG4ubWF0LWNlbGwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGhlaWdodDogMjJweCAhaW1wb3J0YW50O1xufVxuXG50cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBoZWlnaHQ6IDIycHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbnRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFiOWFiOTtcbiAgY29sb3I6ICNmNGZjZjY7XG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICBoZWlnaHQ6IDIycHggIWltcG9ydGFudDtcbn1cblxudHIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjhkZWYwO1xuICBjb2xvcjogIzIyMWQxZDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIGhlaWdodDogMjJweCAhaW1wb3J0YW50O1xufVxuXG5tYXQtcGFnaW5hdG9yIHtcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbm1kLXBhZ2luYXRpb24td3JhcHBlciB7XG4gIHdpZHRoOiBhdXRvICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xufVxuXG5tZC1yb3c6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkZjFmNTtcbn1cblxubWQtcm93Om50aC1jaGlsZChvZGQpIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkZmRmYjtcbn1cblxucCB7XG4gIHBhZGRpbmctbGVmdDogNTEwcHg7XG59XG5cbmgxIHtcbiAgY29sb3I6ICNiNjBjNjE7XG4gIGZvbnQtZmFtaWx5OiBJbXBhY3QsIENoYXJjb2FsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbn1cblxuaDMge1xuICBjb2xvcjogIzA3MDYwNjtcbiAgZm9udC1mYW1pbHk6IFwiTG9ic3RlclwiLCBTYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDM1cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAxcHg7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbn1cblxuLypmb290ZXIqL1xuLmNvbF93aGl0ZV9hbXJjIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbmZvb3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYzMjM4O1xuICBtaW4taGVpZ2h0OiAyNTBweDtcbiAgcGFkZGluZzogMTBweCAwcHggMjVweCAwcHg7XG59XG5cbi5wdDIge1xuICBwYWRkaW5nLXRvcDogNDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuZm9vdGVyIHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjY2NjO1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbi5tYjEwIHtcbiAgcGFkZGluZy1ib3R0b206IDE1cHg7XG59XG5cbi5mb290ZXJfdWxfYW1yYyB7XG4gIG1hcmdpbjogMHB4O1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMHB4IDBweCAxMHB4IDBweDtcbn1cblxuLmZvb3Rlcl91bF9hbXJjIGxpIHtcbiAgcGFkZGluZzogMHB4IDBweCA1cHggMHB4O1xufVxuXG4uZm9vdGVyX3VsX2FtcmMgbGkgYSB7XG4gIGNvbG9yOiAjY2NjO1xufVxuXG4uZm9vdGVyX3VsX2FtcmMgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mbGVmdCB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4ucGFkZGluZy1yaWdodCB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5mb290ZXJfdWwyX2FtcmMge1xuICBtYXJnaW46IDBweDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5mb290ZXJfdWwyX2FtcmMgbGkgcCB7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4uZm9vdGVyX3VsMl9hbXJjIGxpIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb290ZXJfdWwyX2FtcmMgbGkgaSB7XG4gIG1hcmdpbi10b3A6IDVweDtcbn1cblxuLmJvdHRvbV9ib3JkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzMyM2Y0NTtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5mb290ZV9ib3R0b21fdWxfYW1yYyB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbiAgcGFkZGluZzogMHB4O1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cblxuLmZvb3RlX2JvdHRvbV91bF9hbXJjIGxpIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uZm9vdGVfYm90dG9tX3VsX2FtcmMgbGkgYSB7XG4gIGNvbG9yOiAjOTk5O1xuICBtYXJnaW46IDAgMTJweDtcbn1cblxuLnNvY2lhbF9mb290ZXJfdWwge1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgbWFyZ2luOiAxNXB4IGF1dG8gMCBhdXRvO1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5zb2NpYWxfZm9vdGVyX3VsIGxpIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5zb2NpYWxfZm9vdGVyX3VsIGxpIGEge1xuICBjb2xvcjogI2NjYztcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgcGFkZGluZzogOHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5zb2NpYWxfZm9vdGVyX3VsIGxpIGkge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5idXR0b24ge1xuICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICBib3JkZXI6IG5vbmU7XG59XG5cbi5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2MyNTI1O1xufVxuXG4uYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZThlNDE7XG4gIGJveC1zaGFkb3c6IDAgNXB4ICM2NjY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0cHgpO1xufVxuXG4ubm8taG92ZXItZWZmZWN0Lm1hdC1zdHJva2VkLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZjM5Y2Y7XG4gIGNvbG9yOiAjZmZmZGZlO1xufVxuXG4jY3VzdG9tZXJzIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNjdXN0b21lcnMgdGQsICNjdXN0b21lcnMgdGgge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xufVxuXG4jY3VzdG9tZXJzIHRkIG1hdC1jaGlwIHtcbiAgZm9udC1zaXplOiB4LXNtYWxsO1xufVxuXG4jY3VzdG9tZXJzIHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG5cbiNjdXN0b21lcnMgdGgge1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFiMmQ4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi53cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY2VudGVyZWRCdXR0b24gbWF0LXJhaXNlZC1idXR0b24ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMjAlO1xufVxuXG4vKlxuKmNzcyBhZGRlZCBieSBkZXYgb24gMTIvbm92XG4qL1xuLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xuICBoZWlnaHQ6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBtaW4taGVpZ2h0OiAyN3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDAgMDtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/views/data-modification-detail/data-modification-detail.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/views/data-modification-detail/data-modification-detail.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: DataModificationDetailComponent */

  /***/
  function srcAppViewsDataModificationDetailDataModificationDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataModificationDetailComponent", function () {
      return DataModificationDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var src_app_shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/models/pending-for-auth-dto */
    "./src/app/shared/models/pending-for-auth-dto.ts");
    /* harmony import */


    var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/services/api.service */
    "./src/app/shared/services/api.service.ts");
    /* harmony import */


    var _modals_modal_transactions_detail_editable_modal_transactions_detail_editable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../modals/modal-transactions-detail-editable/modal-transactions-detail-editable.component */
    "./src/app/views/modals/modal-transactions-detail-editable/modal-transactions-detail-editable.component.ts");
    /* harmony import */


    var src_app_shared_models_user__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! src/app/shared/models/user */
    "./src/app/shared/models/user.ts");
    /* harmony import */


    var _data_modification_details_audit_dto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./data-modification-details-audit-dto */
    "./src/app/views/data-modification-detail/data-modification-details-audit-dto.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_11__);
    /* harmony import */


    var _users_users_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../users/users.service */
    "./src/app/views/users/users.service.ts");
    /* harmony import */


    var src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! src/app/shared/services/excel.service */
    "./src/app/shared/services/excel.service.ts");
    /* harmony import */


    var jspdf_autotable__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! jspdf-autotable */
    "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
    /* harmony import */


    var jspdf_autotable__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_14__);
    /* harmony import */


    var jspdf__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! jspdf */
    "./node_modules/jspdf/dist/jspdf.min.js");
    /* harmony import */


    var jspdf__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_15__); // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: max-line-length


    var DataModificationDetailComponent = /*#__PURE__*/function () {
      function DataModificationDetailComponent(api, dialog, snackBar, userApi, excelService) {
        _classCallCheck(this, DataModificationDetailComponent);

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
        this.displayedColumns = ['account', 'ccyCd', 'branchCode', 'amount', 'lcyEquivalent', 'drCr', 'exchRate', 'relatedAccount', 'addlText', 'accDesc', 'errorCode', 'errorDesc', 'view'];
        this.displayedColumnsPendingAuth = ['getDetails', 'externalSysName', 'batchNumber', 'processName', 'processingDate', 'filename', 'totalNoOfRecord', 'totalCredit', 'totalDebit' // 'currency'
        ];
      } // getDataModDetailsAuditLogData(getDetailsQueryToggleReqDTO: GetDetailsQueryToggleReqDTO) {
      //   this.api
      //   .getDataModDetailsAuditService(this.getDetailsQueryToggleReqDTO)
      //   .subscribe(resp => {
      //     this.dataModificationDetailsAuditRespDTO = resp;
      //     // console.log('audit data: ');
      //     // console.log(this.dataModificationDetailsAuditRespDTO);
      //   });
      // }


      _createClass(DataModificationDetailComponent, [{
        key: "queryDetailsDataByParam",
        value: function queryDetailsDataByParam(pendingForAuthDTO) {
          var _this = this;

          this.spinner1 = true;
          this.getDetailsQueryToggleReqDTO = new src_app_shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_6__["GetDetailsQueryToggleReqDTO"]();
          this.getDetailsQueryToggleReqDTO.externalSysName = pendingForAuthDTO.externalSysName;
          this.getDetailsQueryToggleReqDTO.processName = pendingForAuthDTO.processName;
          this.getDetailsQueryToggleReqDTO.processingDate = pendingForAuthDTO.processingDate;
          this.getDetailsQueryToggleReqDTO.currency = pendingForAuthDTO.currency;
          this.getDetailsQueryToggleReqDTO.filename = pendingForAuthDTO.fileName;
          this.getDetailsQueryToggleReqDTO.batchNumber = pendingForAuthDTO.batchNumber; // console.log('getDetailsQueryToggleReqDTO :');
          // console.log(this.getDetailsQueryToggleReqDTO);
          // this.getDataModDetailsAuditLogData(this.getDetailsQueryToggleReqDTO);
          //

          this.api.queryFailedDetailsDataByParamService(this.getDetailsQueryToggleReqDTO).subscribe(function (resp) {
            _this.PendingForAuthDetailsDTOList = resp; // console.log('hahaha');

            console.log(_this.PendingForAuthDetailsDTOList);

            if (_this.PendingForAuthDetailsDTOList) {
              console.log(_this.PendingForAuthDetailsDTOList[0].inputBy); // if(this.PendingForAuthDetailsDTOList[0].inputBy !== this.user_id){
              //   Swal.fire('We didnot find data uploaded by you.','this data is uploaded by'+this.PendingForAuthDetailsDTOList[0].inputBy);
              //   this.spinner1 = false;
              //   return;
              // }

              _this.audit = true;
              _this.flag = true;
              _this.dataAvail = true;
              _this.spinner1 = false;
              _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.PendingForAuthDetailsDTOList);
              _this.dataSource.paginator = _this.paginator.toArray()[1];
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire('No Data ');
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.PendingForAuthDetailsDTOList = {};
          this.user_id = sessionStorage.getItem('user_id');
          this.role = sessionStorage.getItem('user_role');
          this.getPendingForAuthData(); // this.getAllDetailsData();
          // //console.log(this.pendingForAuthDataDetails);
          // this.screenpermission();
        }
      }, {
        key: "screenpermission",
        value: function screenpermission() {
          var _this2 = this;

          this.screenName = 'DataModificationDetails'; // this.role='ROLE1';

          this.userApi.getRoleScreenPermission(this.user_id, this.screenName, this.role).subscribe(function (res) {
            _this2.rolepermission = res;
            console.log(_this2.rolepermission);

            if (_this2.rolepermission) {
              _this2.button_permission = _this2.rolepermission[0];
              console.log(_this2.button_permission);
            }
          });
        }
      }, {
        key: "getPendingForAuthData",
        value: function getPendingForAuthData() {
          var _this3 = this;

          this.api.getPendingForAuthDataForModification(this.user_id).subscribe(function (resp) {
            // console.log(resp);
            _this3.pendingForAuthData = resp;
            console.log(_this3.pendingForAuthData);
            _this3.dataSourcePendingForAuth = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this3.pendingForAuthData);
            _this3.dataSourcePendingForAuth.paginator = _this3.paginator.toArray()[0];
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.dataSourcePendingForAuth.filter = filterValue.trim().toLowerCase();
        }
      }, {
        key: "openSnackBar",
        value: function openSnackBar(message, action) {
          this.snackBar.open(message, action, {
            duration: 2000
          });
        }
      }, {
        key: "approveAndProcess",
        value: function approveAndProcess() {
          var _this4 = this;

          this.flag = false;
          this.api.excelModifyAuthorization(this.PendingForAuthDetailsDTOList, this.user_id).subscribe(function (authRes) {
            _this4.authRes = authRes;
            console.log(_this4.authRes);

            if (_this4.authRes) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire('Data Send for Authorization .', 'After Authorization you can process the data.');
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_11___default.a.fire('Authorization Failed.');
            }
          });
        }
      }, {
        key: "getAllDetailsData",
        value: function getAllDetailsData() {
          var _this5 = this;

          this.api.getFailedDetailsListService().subscribe(function (resp) {
            _this5.PendingForAuthDetailsDTOList = resp; // console.log(this.PendingForAuthDetailsDTOList);

            _this5.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this5.PendingForAuthDetailsDTOList);
            _this5.dataSource.paginator = _this5.paginator.toArray()[1];
          });
        } // updateFullData(){
        //   //this.PendingForAuthDetailsDTOList
        //   this.
        // }

      }, {
        key: "openDialog",
        value: function openDialog(detailsDto) {
          console.log(detailsDto);
          var dialogRef = this.dialog.open(_modals_modal_transactions_detail_editable_modal_transactions_detail_editable_component__WEBPACK_IMPORTED_MODULE_8__["ModalTransactionsDetailEditableComponent"], {
            data: detailsDto
          });
          dialogRef.afterClosed().subscribe(function (result) {// console.log(`Dialog result: ${result}`);
          });
        }
      }, {
        key: "downloadData",
        value: function downloadData() {
          this.modify = true;
          console.log('response' + this.PendingForAuthDetailsDTOList); // this.allUsersList.forEach(element => {
          //   if(element.creatorDtStamp!==null && element.verifierDtStamp !==null){
          //   element.creatorDtStamp
          //   =this.pipe.transform(element.creatorDtStamp        , 'dd-MMM-yy').toString();
          //   element.verifierDtStamp
          //   =this.pipe.transform(element.verifierDtStamp
          //     , 'dd-MMM-yy').toString();
          //   }
          // });

          this.excelService.exportAsExcelFile(this.PendingForAuthDetailsDTOList, 'Excel_Error_Auth');
        } //downloding records in pdf

      }, {
        key: "convert",
        value: function convert() {
          var doc = new jspdf__WEBPACK_IMPORTED_MODULE_15___default.a();
          var col = [["Account", "Amount", "txnCode", "exchRate", "valueDate", "deleteStat"]];
          var rows = [];
          /* The following array of object as response from the API req  */

          var itemNew = this.PendingForAuthDetailsDTOList;
          itemNew.forEach(function (element) {
            // var date = new Date(element.timeForExport).toLocaleDateString("en-us");
            //  console.log(date)
            var temp = [element.account, element.amount, element.txnCode, element.exchRate, element.valueDate, element.deleteStat];
            rows.push(temp);
          }); //doc.autoTable(col, rows);

          doc.autoTable({
            head: col,
            body: rows
          });
          doc.save('Excel.pdf');
        }
      }]);

      return DataModificationDetailComponent;
    }();

    DataModificationDetailComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }, {
        type: _users_users_service__WEBPACK_IMPORTED_MODULE_12__["UsersService"]
      }, {
        type: src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_13__["ExcelService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], DataModificationDetailComponent.prototype, "paginator", void 0);
    DataModificationDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-data-modification-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./data-modification-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/data-modification-detail/data-modification-detail.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./data-modification-detail.component.scss */
      "./src/app/views/data-modification-detail/data-modification-detail.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _users_users_service__WEBPACK_IMPORTED_MODULE_12__["UsersService"], src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_13__["ExcelService"]])], DataModificationDetailComponent);
    /***/
  },

  /***/
  "./src/app/views/data-modification-detail/data-modification-detail.module.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/views/data-modification-detail/data-modification-detail.module.ts ***!
    \***********************************************************************************/

  /*! exports provided: DataModificationDetailModule */

  /***/
  function srcAppViewsDataModificationDetailDataModificationDetailModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataModificationDetailModule", function () {
      return DataModificationDetailModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/angular-material/angular-material.module */
    "./src/app/shared/angular-material/angular-material.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _data_modification_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./data-modification-detail-routing.module */
    "./src/app/views/data-modification-detail/data-modification-detail-routing.module.ts");
    /* harmony import */


    var _data_modification_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./data-modification-detail.component */
    "./src/app/views/data-modification-detail/data-modification-detail.component.ts");
    /* harmony import */


    var _modals_modal_transactions_detail_editable_modal_transactions_detail_editable_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../modals/modal-transactions-detail-editable/modal-transactions-detail-editable.component */
    "./src/app/views/modals/modal-transactions-detail-editable/modal-transactions-detail-editable.component.ts"); // tslint:disable-next-line: max-line-length


    var DataModificationDetailModule = function DataModificationDetailModule() {
      _classCallCheck(this, DataModificationDetailModule);
    };

    DataModificationDetailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_data_modification_detail_component__WEBPACK_IMPORTED_MODULE_7__["DataModificationDetailComponent"], _modals_modal_transactions_detail_editable_modal_transactions_detail_editable_component__WEBPACK_IMPORTED_MODULE_8__["ModalTransactionsDetailEditableComponent"]],
      entryComponents: [_modals_modal_transactions_detail_editable_modal_transactions_detail_editable_component__WEBPACK_IMPORTED_MODULE_8__["ModalTransactionsDetailEditableComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(_data_modification_detail_routing_module__WEBPACK_IMPORTED_MODULE_6__["dataModificationDetailsRoutes"])]
    })], DataModificationDetailModule);
    /***/
  },

  /***/
  "./src/app/views/data-modification-detail/data-modification-details-audit-dto.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/views/data-modification-detail/data-modification-details-audit-dto.ts ***!
    \***************************************************************************************/

  /*! exports provided: DataModificationDetailsAuditRespDTO */

  /***/
  function srcAppViewsDataModificationDetailDataModificationDetailsAuditDtoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataModificationDetailsAuditRespDTO", function () {
      return DataModificationDetailsAuditRespDTO;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var DataModificationDetailsAuditRespDTO = function DataModificationDetailsAuditRespDTO() {
      _classCallCheck(this, DataModificationDetailsAuditRespDTO);
    };
    /***/

  },

  /***/
  "./src/app/views/modals/modal-transactions-detail-editable/modal-transactions-detail-editable.component.scss":
  /*!*******************************************************************************************************************!*\
    !*** ./src/app/views/modals/modal-transactions-detail-editable/modal-transactions-detail-editable.component.scss ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsModalsModalTransactionsDetailEditableModalTransactionsDetailEditableComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h2 {\n  color: #ca1818;\n  font-family: Impact, Charcoal, sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n  margin-top: 0px;\n  margin-bottom: 0px;\n}\n\ndiv {\n  height: 100%;\n  width: 100%;\n  font-size: 8.5px;\n  font-weight: bolder;\n  border-radius: 1px;\n  background-color: #f2f2f2;\n  padding: 1px;\n}\n\n.div label {\n  height: 2px;\n  display: inline-block;\n  text-align: right;\n}\n\n.mat-raised-button {\n  width: 20px;\n  height: 27px;\n  line-height: 27px;\n  min-height: 27px;\n  vertical-align: top;\n  font-size: 11px;\n  padding: 0 0;\n  margin: 0;\n}\n\n.no-hover-effect.mat-raised-button {\n  float: right;\n  background-color: #ec7f5d;\n  width: 15px;\n  height: 15px;\n  line-height: 27px;\n  min-height: 27px;\n  vertical-align: top;\n  font-size: 11px;\n  padding: 0 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbW9kYWxzL21vZGFsLXRyYW5zYWN0aW9ucy1kZXRhaWwtZWRpdGFibGUvRDpcXEljdXN0LVVpXFxtZWRpYW4tcGgyLXVpL3NyY1xcYXBwXFx2aWV3c1xcbW9kYWxzXFxtb2RhbC10cmFuc2FjdGlvbnMtZGV0YWlsLWVkaXRhYmxlXFxtb2RhbC10cmFuc2FjdGlvbnMtZGV0YWlsLWVkaXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9tb2RhbHMvbW9kYWwtdHJhbnNhY3Rpb25zLWRldGFpbC1lZGl0YWJsZS9tb2RhbC10cmFuc2FjdGlvbnMtZGV0YWlsLWVkaXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0VGOztBREFBO0VBQ0UsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7QUNHRjs7QUREQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDSUY7O0FEREE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtBQ0lGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvbW9kYWxzL21vZGFsLXRyYW5zYWN0aW9ucy1kZXRhaWwtZWRpdGFibGUvbW9kYWwtdHJhbnNhY3Rpb25zLWRldGFpbC1lZGl0YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICBjb2xvcjogI2NhMTgxODtcclxuICBmb250LWZhbWlseTogSW1wYWN0LCBDaGFyY29hbCwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5kaXYge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDoxMDAlO1xyXG4gIGZvbnQtc2l6ZTogOC41cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcclxuICBwYWRkaW5nOiAxcHg7XHJcbn1cclxuLmRpdiBsYWJlbCB7XHJcbiAgaGVpZ2h0OiAycHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbi5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgd2lkdGg6IDIwcHg7XHJcbiAgaGVpZ2h0OiAyN3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gIG1pbi1oZWlnaHQ6IDI3cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgcGFkZGluZzogMCAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLm5vLWhvdmVyLWVmZmVjdC5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlYzdmNWQ7XHJcbiAgd2lkdGg6IDE1cHg7XHJcbiAgaGVpZ2h0OiAxNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gIG1pbi1oZWlnaHQ6IDI3cHg7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBmb250LXNpemU6IDExcHg7XHJcbiAgcGFkZGluZzogMCAwO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuXHJcbiIsImgyIHtcbiAgY29sb3I6ICNjYTE4MTg7XG4gIGZvbnQtZmFtaWx5OiBJbXBhY3QsIENoYXJjb2FsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuZGl2IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiA4LjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xuICBwYWRkaW5nOiAxcHg7XG59XG5cbi5kaXYgbGFiZWwge1xuICBoZWlnaHQ6IDJweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLm1hdC1yYWlzZWQtYnV0dG9uIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjdweDtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gIG1pbi1oZWlnaHQ6IDI3cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogMCAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5uby1ob3Zlci1lZmZlY3QubWF0LXJhaXNlZC1idXR0b24ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYzdmNWQ7XG4gIHdpZHRoOiAxNXB4O1xuICBoZWlnaHQ6IDE1cHg7XG4gIGxpbmUtaGVpZ2h0OiAyN3B4O1xuICBtaW4taGVpZ2h0OiAyN3B4O1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBmb250LXNpemU6IDExcHg7XG4gIHBhZGRpbmc6IDAgMDtcbiAgbWFyZ2luOiAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/views/modals/modal-transactions-detail-editable/modal-transactions-detail-editable.component.ts":
  /*!*****************************************************************************************************************!*\
    !*** ./src/app/views/modals/modal-transactions-detail-editable/modal-transactions-detail-editable.component.ts ***!
    \*****************************************************************************************************************/

  /*! exports provided: ModalTransactionsDetailEditableComponent */

  /***/
  function srcAppViewsModalsModalTransactionsDetailEditableModalTransactionsDetailEditableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalTransactionsDetailEditableComponent", function () {
      return ModalTransactionsDetailEditableComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/services/api.service */
    "./src/app/shared/services/api.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);

    var ModalTransactionsDetailEditableComponent = /*#__PURE__*/function () {
      function ModalTransactionsDetailEditableComponent(data, snackBar, api) {
        _classCallCheck(this, ModalTransactionsDetailEditableComponent);

        this.data = data;
        this.snackBar = snackBar;
        this.api = api;
        this.items = [10, 20, 30, 40];
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('');
      }

      _createClass(ModalTransactionsDetailEditableComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.responseDto = this.data;
          this.histDTO = this.data;
          this.user_id = sessionStorage.getItem('user_id');
          this.role = sessionStorage.getItem('user_role');
        }
      }, {
        key: "insertModifiedDataIntoDetailsData",
        value: function insertModifiedDataIntoDetailsData(reqDTO) {
          var _this6 = this;

          this.saveButtonStatus = true;

          if (reqDTO.inputBy !== this.user_id) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('You Donot have permission for modification.', 'Only maker can modify record.');
            return;
          }

          this.api.sendUpdatedDataToDetailsData(reqDTO, this.user_id).subscribe(function (resp) {
            // console.log(resp);
            _this6.status = resp;
            console.log('insertion status: ' + _this6.status);

            if (_this6.status === true) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire('data saved successfully.', 'success');
            }

            if (_this6.status === false) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                type: 'error',
                text: 'data save to DB Failed.'
              });
            } // this.saveButtonStatus = false;

          });
        }
      }]);

      return ModalTransactionsDetailEditableComponent;
    }();

    ModalTransactionsDetailEditableComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }, {
        type: src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }];
    };

    ModalTransactionsDetailEditableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modal-transactions-detail-editable',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modal-transactions-detail-editable.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/modals/modal-transactions-detail-editable/modal-transactions-detail-editable.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modal-transactions-detail-editable.component.scss */
      "./src/app/views/modals/modal-transactions-detail-editable/modal-transactions-detail-editable.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_4__["MAT_DIALOG_DATA"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]])], ModalTransactionsDetailEditableComponent); // openSnackBar(message: string, action: string) {
    //   this.snackBar.open(message, action, {
    //     duration: 2000
    //   });
    // }
    //}

    /***/
  }
}]);
//# sourceMappingURL=views-data-modification-detail-data-modification-detail-module-es5.js.map