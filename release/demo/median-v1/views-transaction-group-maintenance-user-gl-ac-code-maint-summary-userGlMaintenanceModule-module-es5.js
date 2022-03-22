function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-transaction-group-maintenance-user-gl-ac-code-maint-summary-userGlMaintenanceModule-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/transaction-group-maintenance/user-gl-ac-code-maint-summary/user-gl-ac-code-maint-summary.component.html":
  /*!**********************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/transaction-group-maintenance/user-gl-ac-code-maint-summary/user-gl-ac-code-maint-summary.component.html ***!
    \**********************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsTransactionGroupMaintenanceUserGlAcCodeMaintSummaryUserGlAcCodeMaintSummaryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n    <mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n        <span>User GL/ACC Maintenance Summary</span>\r\n    </mat-toolbar>\r\n    <div class=\"navigation\">\r\n        <mat-card>\r\n            <button mat-raised-button style=\"font-size: 11px; margin-left: 80%\" color=\"primary\"\r\n                routerLink=\"/user-gl-acc-maintenance/gl-maint-user-new\">New</button>&nbsp;\r\n            <button mat-raised-button style=\"font-size: 11px;\" color=\"warn\" routerLink='/dashboard'>Exit</button>\r\n\r\n            <!-- <mat-form-field appearance=\"outline\" style=\"width:150px;font-size: 10px\">\r\n                <mat-label>UserId</mat-label>\r\n                <mat-select name=\"UserId\" [(ngModel)]=\"UserId\">\r\n                    <mat-option *ngFor=\"let UserId of userData\" [value]=\"UserId\">{{UserId}} </mat-option>\r\n                </mat-select>\r\n            </mat-form-field> -->\r\n\r\n            <!--Added By Fayaz -- start 04/08/20202-->\r\n    <mat-form-field appearance=\"outline\" style=\"width:150px;font-size: 10px\">\r\n            <mat-label>User Id</mat-label>\r\n            <input type=\"text\" matInput [(ngModel)]=\"UserId\" \r\n            (keyup)=\"onKey($event)\"\r\n            (keyup)=\"keyPress($event)\" \r\n            [matAutocomplete]=\"auto\" \r\n            oninput=\"this.value = this.value.toUpperCase()\">\r\n        \r\n            <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)='getUser($event.option.value)' >\r\n            <mat-option *ngFor=\"let UserId of userData \" [value]=\"UserId\" >\r\n            {{UserId}} \r\n            </mat-option>\r\n            </mat-autocomplete>\r\n        </mat-form-field>\r\n        <!--end-->\r\n <!-- added by gayathri issueid=0000652 on 18-08-2020 -->\r\n            <div>\r\n                <button mat-raised-button color=\"primary\" [disabled]=\"enabled\" (click)=\"getGlTrndata()\">Get Transaction</button>\r\n            </div>\r\n\r\n\r\n            <div class=\"mat-elevation-z8\">\r\n                <table mat-table [dataSource]=\"dataSource\">\r\n\r\n                    <!-- ID Column -->\r\n                    <ng-container matColumnDef=\"userId\">\r\n                        <th mat-header-cell *matHeaderCellDef> User Id </th>\r\n                        <td mat-cell *matCellDef=\"let row\"> <a\r\n                                routerLink=\"/transaction-group-maintenance/transaction-group-edit\"></a>{{row.userId}}\r\n                        </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"permission\">\r\n                        <th mat-header-cell *matHeaderCellDef> Permission </th>\r\n                        <td mat-cell *matCellDef=\"let row\"> {{row.permission}} </td>\r\n                    </ng-container>\r\n                    <!-- Progress Column -->\r\n                    <ng-container matColumnDef=\"trnCode\">\r\n                        <th mat-header-cell *matHeaderCellDef> Transaction Code </th>\r\n                        <td mat-cell *matCellDef=\"let row\"> {{row.trnCode}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Name Column -->\r\n                    <ng-container matColumnDef=\"trnDesc\">\r\n                        <th mat-header-cell *matHeaderCellDef> Transaction Code Descreption </th>\r\n                        <td mat-cell *matCellDef=\"let row\"> {{row.trnDesc}} </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"action\">\r\n                        <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                        <td mat-cell *matCellDef=\"let row\"> <button mat-raised-button color=\"warn\"\r\n                                (click)=deleteData(row)>delete</button></td>\r\n                    </ng-container>\r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\">\r\n                    </tr>\r\n                </table>\r\n\r\n                <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n            </div>\r\n        </mat-card>\r\n        <mat-card>\r\n            <mat-toolbar>Account Class Summary</mat-toolbar>\r\n            <p>Choose the user id and click get transaction.</p>\r\n            \r\n            <!-- <mat-form-field appearance=\"outline\" style=\"width:150px;font-size: 10px\">\r\n                <mat-label>UserId</mat-label>\r\n                <mat-select name=\"UserId\" [(ngModel)]=\"UserId\">\r\n                    <mat-option *ngFor=\"let UserId of userData\" [value]=\"UserId\">{{UserId}} </mat-option>\r\n                </mat-select>\r\n            </mat-form-field> -->\r\n\r\n            <!--Added By Fayaz -- start 04/08/20202-->\r\n    <mat-form-field appearance=\"outline\" style=\"width:150px;font-size: 10px\">\r\n            <mat-label>User Id</mat-label>\r\n            <input type=\"text\" matInput [(ngModel)]=\"UserId\" \r\n            (keyup)=\"keyPress($event)\" \r\n            (keyup)=\"onKey1($event)\"\r\n            [matAutocomplete]=\"auto\" \r\n            oninput=\"this.value = this.value.toUpperCase()\">\r\n        \r\n            <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)='getUser2($event.option.value)' >\r\n            <mat-option *ngFor=\"let UserId of userData \" [value]=\"UserId\" >\r\n            {{UserId}} \r\n            </mat-option>\r\n            </mat-autocomplete>\r\n        </mat-form-field>\r\n        <!--end-->\r\n<!-- added by gayathri issueid=0000652 on 18-08-2020 -->\r\n            <div>\r\n                <button mat-raised-button color=\"primary\" [disabled]=\"enabled\" (click)=\"getTrndata()\">Get Transaction</button>\r\n            </div>\r\n\r\n\r\n            <div class=\"mat-elevation-z8\">\r\n                <table mat-table [dataSource]=\"dataSource1\">\r\n\r\n                    <!-- ID Column -->\r\n                    <ng-container matColumnDef=\"userId\">\r\n                        <th mat-header-cell *matHeaderCellDef> User Id </th>\r\n                        <td mat-cell *matCellDef=\"let row\"> <a\r\n                                routerLink=\"/transaction-group-maintenance/transaction-group-edit\"></a>{{row.userId}}\r\n                        </td>\r\n                    </ng-container>\r\n                    <!-- Progress Column permission-->\r\n                    <ng-container matColumnDef=\"permission\">\r\n                        <th mat-header-cell *matHeaderCellDef> Permission </th>\r\n                        <td mat-cell *matCellDef=\"let row\"> {{row.permission}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Progress Column permission-->\r\n                    <ng-container matColumnDef=\"trnCode\">\r\n                        <th mat-header-cell *matHeaderCellDef> Account Class </th>\r\n                        <td mat-cell *matCellDef=\"let row\"> {{row.trnCode}} </td>\r\n                    </ng-container>\r\n\r\n                    <!-- Name Column -->\r\n                    <ng-container matColumnDef=\"trnDesc\">\r\n                        <th mat-header-cell *matHeaderCellDef> Account Class Descreption </th>\r\n                        <td mat-cell *matCellDef=\"let row\"> {{row.trnDesc}} </td>\r\n                    </ng-container>\r\n                    <ng-container matColumnDef=\"action\">\r\n                        <th mat-header-cell *matHeaderCellDef> Action </th>\r\n                        <td mat-cell *matCellDef=\"let row\"> <button mat-raised-button color=\"warn\"\r\n                                (click)=deleteData1(row)>delete</button></td>\r\n                    </ng-container>\r\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns1\"></tr>\r\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns1;\">\r\n                    </tr>\r\n                </table>\r\n\r\n                <mat-paginator [pageSizeOptions]=\"[5, 10, 25, 100]\"></mat-paginator>\r\n            </div>\r\n        </mat-card>\r\n    </div>\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/transaction-group-maintenance/user-gl-ac-code-maint/user-gl-ac-code-maint.component.html":
  /*!******************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/transaction-group-maintenance/user-gl-ac-code-maint/user-gl-ac-code-maint.component.html ***!
    \******************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsTransactionGroupMaintenanceUserGlAcCodeMaintUserGlAcCodeMaintComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n  <div>\r\n  <mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n  <span>GL/Acc Code Maintenance </span>\r\n  </mat-toolbar>\r\n  </div>\r\n  \r\n  <mat-tab-group>\r\n  <mat-tab label=\"User GL maintenace\">\r\n  \r\n  <mat-card class=\"secondMatCard\">\r\n  <mat-toolbar>GL Code Maintenance</mat-toolbar>\r\n  <mat-card-content>\r\n  \r\n\r\n  \r\n  <!-- <mat-form-field appearance=\"outline\" style=\"font-size: 10px\">\r\n  <mat-label>UserId</mat-label>\r\n  <mat-select name=\"UserId\" [(ngModel)]=\"UserId\">\r\n  <mat-option *ngFor=\"let UserId of userName\" [value]=\"UserId\"> {{UserId}}\r\n  </mat-option>\r\n  </mat-select>\r\n  </mat-form-field> -->\r\n  \r\n  <!--af=dde by fayaz 04/08/2020-->\r\n  <mat-form-field appearance=\"outline\" style=\"width:150px;font-size: 10px\">\r\n  <mat-label>User Id</mat-label>\r\n  <input type=\"text\" matInput [(ngModel)]=\"UserId\"\r\n  (keyup)=\"keyPress($event.target.value)\" (keyup)=\"validateuserId()\"\r\n  [matAutocomplete]=\"auto\"\r\n  oninput=\"this.value = this.value.toUpperCase()\">\r\n  \r\n  <mat-autocomplete #auto=\"matAutocomplete\" [(ngModel)]=\"UserId\" name=\"UserId\" ngDefaultControl >\r\n  <mat-option *ngFor=\"let UserId of usersList \" [value]=\"UserId\" (click)=\"getGlTrndata()\">\r\n  {{UserId}}\r\n  </mat-option>\r\n  </mat-autocomplete>\r\n  </mat-form-field>\r\n  <!--end-->\r\n  <mat-form-field appearance=\"outline\" style=\"font-size: 10px\">\r\n    <mat-label>Code permission</mat-label>\r\n    <mat-select name=\"permission\" [(ngModel)]=\"permission\">\r\n    <mat-option *ngFor=\"let permission of permissionvalue\" [value]=\"permission\"> {{permission}}\r\n    </mat-option>\r\n    </mat-select>\r\n    </mat-form-field>\r\n  \r\n  <table>\r\n  <tbody>\r\n  \r\n  <tr>\r\n  \r\n  <section *ngFor=\"let gl of gllist; let i = index;\">\r\n  \r\n  <td>\r\n  <mat-form-field class=\"full-width\" appearance=\"outline\"\r\n  style=\"width:150px;font-size: 10px\">\r\n  <mat-label>GL Code</mat-label>\r\n  <input matInput type=\"text\" required placeholder=\"Transaction Code\"\r\n  name=\"address_{{i}}\" [(ngModel)]=\"gl.trnCode\" #trnCode=\"ngModel\">\r\n  </mat-form-field>\r\n  <div *ngIf=\"trnCode.touched\">\r\n  <p *ngIf=\"trnCode.errors?.required\" style=\"color: red; font-size: 9px\">\r\n  Transaction\r\n  Code is Required!\r\n  </p>\r\n  </div>\r\n  </td>\r\n  <td>\r\n  <mat-form-field appearance=\"outline\" style=\"width:150px;font-size: 10px\">\r\n  <mat-label>GL Code Description</mat-label>\r\n  <input matInput type=\"text\" required placeholder=\"Transaction Description\"\r\n  name=\"address_{{i}}\" [(ngModel)]=\"gl.trnDesc\" #trnDesc=\"ngModel\">\r\n  </mat-form-field>\r\n  <div *ngIf=\"trnDesc.touched\">\r\n  <p *ngIf=\"trnDesc.errors?.required\" style=\"color: red; font-size: 9px\">\r\n  Transaction\r\n  Description is\r\n  Required!</p>\r\n  </div>\r\n  </td>\r\n  <td>\r\n  <button type=\"button\" class=\"btn b\"\r\n  (click)=\"removegllist(i,gl.transactionDescription)\">\r\n  <mat-icon>delete</mat-icon>\r\n  </button>\r\n  </td>\r\n  </section>\r\n  </tr>\r\n  <button type=\"button\" class=\"btn\" (click)=\"addgllist()\" style=\"margin-left: 300px\">\r\n  <mat-icon>add_box</mat-icon>\r\n  </button>\r\n  \r\n  <div>\r\n  <button mat-raised-button color=\"primary\" type=\"submit\" value=\"Submit\" [disabled]=\"showSubmit || !space\"\r\n  (click)=\"onSubmitGLCode()\">Submit</button>\r\n  &nbsp;\r\n  <button mat-raised-button color=\"warn\"\r\n  routerLink=\"/user-gl-acc-maintenance\">Exit</button>\r\n  <!-- <button mat-raised-button color=\"warn\" routerLink=\"/transaction-group-maintenance/transaction-group-edit\">Exit</button> -->\r\n  </div>\r\n  </tbody>\r\n  </table>\r\n  \r\n  \r\n  </mat-card-content>\r\n  </mat-card>\r\n  </mat-tab>\r\n  <mat-tab label=\"Account Class Maintenance\">\r\n  <mat-card class=\"secondMatCard\">\r\n  <mat-toolbar>Account Class Maintence</mat-toolbar>\r\n  \r\n  <mat-card-content>\r\n  \r\n  \r\n  <!-- <mat-form-field appearance=\"outline\" style=\"font-size: 10px\">\r\n  <mat-label>UserId</mat-label>\r\n  <mat-select name=\"UserId\" [(ngModel)]=\"UserId\">\r\n  <mat-option *ngFor=\"let UserId of userName\" [value]=\"UserId\"> {{UserId}}\r\n  </mat-option>\r\n  </mat-select>\r\n  </mat-form-field> -->\r\n  \r\n  <!--Added By Fayaz -- start-->\r\n  <mat-form-field appearance=\"outline\" style=\"width:150px;font-size: 10px\">\r\n  <mat-label>User Id</mat-label>\r\n  <input type=\"text\" matInput [(ngModel)]=\"UserId1\"\r\n  (keyup)=\"keyPress1($event.target.value)\" (keyup)=\"validateuserId1()\"\r\n  [matAutocomplete]=\"auto1\"\r\n  oninput=\"this.value = this.value.toUpperCase()\">\r\n  \r\n  <mat-autocomplete #auto1=\"matAutocomplete\" [(ngModel)]=\"UserId1\" name=\"UserId1\" ngDefaultControl >\r\n  <mat-option *ngFor=\"let UserId1 of usersList1 \" [value]=\"UserId1\" (click)=\"getTrndata()\">\r\n  {{UserId1}}\r\n  </mat-option>\r\n  </mat-autocomplete>\r\n  </mat-form-field>\r\n  <!--end-->\r\n  <mat-form-field appearance=\"outline\" style=\"font-size: 10px\">\r\n    <mat-label>Code permission</mat-label>\r\n    <mat-select name=\"permission_1\" [(ngModel)]=\"permission_1\">\r\n    <mat-option *ngFor=\"let permission_1 of permissionvalue1\" [value]=\"permission_1\"> {{permission_1}}\r\n    </mat-option>\r\n    </mat-select>\r\n    </mat-form-field>\r\n  <table>\r\n  <tbody>\r\n  \r\n  <tr>\r\n  \r\n  <section *ngFor=\"let address of AccClass; let i = index;\">\r\n  \r\n  <td>\r\n  <mat-form-field class=\"full-width\" appearance=\"outline\"\r\n  style=\"width:150px;font-size: 10px\">\r\n  <mat-label>Account Class</mat-label>\r\n  <input matInput type=\"text\" required placeholder=\"Account Class\"\r\n  name=\"address_{{i}}\" [(ngModel)]=\"address.trnCode\" #trnCode=\"ngModel\">\r\n  </mat-form-field>\r\n  <div *ngIf=\"trnCode.touched\">\r\n  <p *ngIf=\"trnCode.errors?.required\" style=\"color: red; font-size: 9px\">\r\n  Account Class is Required!\r\n  </p>\r\n  </div>\r\n  </td>\r\n  <td>\r\n  <mat-form-field appearance=\"outline\" style=\"width:150px;font-size: 10px\">\r\n  <mat-label>Account Class Descreption</mat-label>\r\n  <input matInput type=\"text\" required placeholder=\"Transaction Description\"\r\n  name=\"address_{{i}}\" [(ngModel)]=\"address.trnDesc\" #trnDesc=\"ngModel\">\r\n  </mat-form-field>\r\n  <div *ngIf=\"trnDesc.touched\">\r\n  <p *ngIf=\"trnDesc.errors?.required\" style=\"color: red; font-size: 9px\">\r\n  Account Class Descreption is\r\n  Required!</p>\r\n  </div>\r\n  </td>\r\n  <td>\r\n  <button type=\"button\" class=\"btn b\"\r\n  (click)=\"removeaddAccClass(i,address.transactionDescription)\">\r\n  <mat-icon>delete</mat-icon>\r\n  </button>\r\n  </td>\r\n  </section>\r\n  </tr>\r\n  <button type=\"button\" class=\"btn\" (click)=\"addAccClass()\" style=\"margin-left: 300px\">\r\n  <mat-icon>add_box</mat-icon>\r\n  </button>\r\n  \r\n  <div>\r\n  <button mat-raised-button color=\"primary\" type=\"submit\" value=\"Submit\"  [disabled]=\"showSubmit1||!space1\"\r\n  (click)=\"onSubmitActClass()\">Submit</button>\r\n  &nbsp;\r\n  <button mat-raised-button color=\"warn\"\r\n  routerLink=\"/user-gl-acc-maintenance\">Exit</button>\r\n  <!-- <button mat-raised-button color=\"warn\" routerLink=\"/transaction-group-maintenance/transaction-group-edit\">Exit</button> -->\r\n  </div>\r\n  </tbody>\r\n  </table>\r\n  \r\n  \r\n  </mat-card-content>\r\n  </mat-card>\r\n  </mat-tab>\r\n  \r\n  </mat-tab-group>\r\n  \r\n  \r\n  \r\n  <mat-card class=\"secondMatCard\" *ngIf>\r\n  <mat-toolbar>Transaction Code For User</mat-toolbar>\r\n  <mat-card-content>\r\n  <mat-form-field appearance=\"outline\" style=\"font-size: 10px\">\r\n  <mat-label>User Id</mat-label>\r\n  <mat-select name=\"UserId\" [(ngModel)]=\"UserId\">\r\n  <mat-option *ngFor=\"let UserId of userName\" [value]=\"UserId\"> {{UserId}}\r\n  </mat-option>\r\n  </mat-select>\r\n  \r\n  </mat-form-field>\r\n  \r\n  <table>\r\n  <tbody>\r\n  \r\n  <tr>\r\n  \r\n  <section *ngFor=\"let address of transactionGroupEntries; let i = index;\">\r\n  <td>\r\n  <mat-form-field appearance=\"outline\" style=\"width:150px;font-size: 10px\">\r\n  <mat-label>Transaction Description</mat-label>\r\n  <input matInput type=\"text\" required placeholder=\"Transaction Description\"\r\n  name=\"address_{{i}}\" [(ngModel)]=\"address.trnDesc\" #trnDesc=\"ngModel\">\r\n  </mat-form-field>\r\n  <div *ngIf=\"trnDesc.touched\">\r\n  <p *ngIf=\"trnDesc.errors?.required\" style=\"color: red; font-size: 9px\"> Transaction\r\n  Description is\r\n  Required!</p>\r\n  </div>\r\n  </td>\r\n  <td>\r\n  <mat-form-field class=\"full-width\" appearance=\"outline\"\r\n  style=\"width:150px;font-size: 10px\">\r\n  <mat-label>Transaction Code</mat-label>\r\n  <input matInput type=\"text\" required placeholder=\"Transaction Code\"\r\n  name=\"address_{{i}}\" [(ngModel)]=\"address.trnCode\" #trnCode=\"ngModel\">\r\n  </mat-form-field>\r\n  <div *ngIf=\"trnCode.touched\">\r\n  <p *ngIf=\"trnCode.errors?.required\" style=\"color: red; font-size: 9px\"> Transaction\r\n  Code is Required!\r\n  </p>\r\n  </div>\r\n  </td>\r\n  <td>\r\n  <button type=\"button\" class=\"btn b\"\r\n  (click)=\"removeDataOfTransactionGroup(i,address.transactionDescription)\">\r\n  <mat-icon>delete</mat-icon>\r\n  </button>\r\n  </td>\r\n  </section>\r\n  </tr>\r\n  <button type=\"button\" class=\"btn\" (click)=\"addDataOfTransactionGroupEntries()\"\r\n  style=\"margin-left: 300px\">\r\n  <mat-icon>add_box</mat-icon>\r\n  </button>\r\n  \r\n  <div>\r\n  <button mat-raised-button color=\"primary\" type=\"submit\" value=\"Submit\"\r\n  (click)=\"onSubmitOfTransactionGroup()\">Submit</button>\r\n  &nbsp;\r\n  <button mat-raised-button color=\"warn\" routerLink=\"/transaction-group-maintenance\">Exit</button>\r\n  <!-- <button mat-raised-button color=\"warn\" routerLink=\"/transaction-group-maintenance/transaction-group-edit\">Exit</button> -->\r\n  </div>\r\n  </tbody>\r\n  </table>\r\n  \r\n  \r\n  </mat-card-content>\r\n  </mat-card>\r\n  \r\n  \r\n  \r\n  \r\n  \r\n  \r\n  </div>\r\n  <br><br><br>\r\n  <div fxLayout=\"row\" *ngIf>\r\n  <div fxFlex></div>\r\n  <div fxFlex=\"95\">\r\n  <mat-card style=\"width: 70%; margin-left:20%;\">\r\n  <mat-card-title>\r\n  \r\n  </mat-card-title>\r\n  <mat-card-content style=\" margin-left:-25%;\">\r\n  <div fxLayout=\"row\">\r\n  \r\n  <table id=\"customers\">\r\n  <tr>\r\n  <th>Record Status:</th>\r\n  <td>\r\n  <!-- <mat-chip>{{fetchUserSingle.recordStatus}}</mat-chip> -->\r\n  \r\n  </td>\r\n  <th>Auth Status:</th>\r\n  <td>\r\n  \r\n  <!-- <mat-chip >{{fetchUserSingle.verifiedStatus}}</mat-chip> -->\r\n  \r\n  </td>\r\n  <th>Input By:</th>\r\n  <td>\r\n  \r\n  <!-- <mat-chip >{{fetchUserSingle.inputBy}}</mat-chip> -->\r\n  </td>\r\n  <th>Input Date:</th>\r\n  <td>\r\n  \r\n  <!-- <mat-chip>{{fetchUserSingle.inputTime | date}}</mat-chip> -->\r\n  </td>\r\n  \r\n  </tr>\r\n  <tr>\r\n  <th>Modification No:</th>\r\n  <td>\r\n  <!-- / <mat-chip >{{fetchUserSingle.modNo}}</mat-chip> -->\r\n  </td>\r\n  <!-- <th>Creation Date:</th>\r\n  <td>\r\n  <mat-chip>{{masterresponse.modifiedTime | date:'d/M/yy'}}</mat-chip>\r\n  </td> -->\r\n  <th>Authorized Date:</th>\r\n  <td>\r\n  <!-- <mat-chip >{{fetchUserSingle.verifiedTime | date:'d/M/yy'}}</mat-chip> -->\r\n  </td>\r\n  <th> Frist Auth Status:</th>\r\n  <td>\r\n  \r\n  <!-- <mat-chip >{{fetchUserSingle.verifiedOnce}}</mat-chip> -->\r\n  \r\n  </td>\r\n  <th>Authorized By:</th>\r\n  <td>\r\n  <!-- <mat-chip >{{fetchUserSingle.verifiedBy}}</mat-chip> -->\r\n  </td>\r\n  </tr>\r\n  </table>\r\n  </div>\r\n  </mat-card-content>\r\n  </mat-card>\r\n  </div>\r\n  <div fxFlex></div>\r\n  \r\n  </div>\r\n  <br><br><br><br><br><br><br><br><br><br><br><br>";
    /***/
  },

  /***/
  "./src/app/views/transaction-group-maintenance/user-gl-ac-code-maint-summary/transaction-group-maintenance-routing.module.ts":
  /*!***********************************************************************************************************************************!*\
    !*** ./src/app/views/transaction-group-maintenance/user-gl-ac-code-maint-summary/transaction-group-maintenance-routing.module.ts ***!
    \***********************************************************************************************************************************/

  /*! exports provided: userglRoutes, TransactionGroupMaintenanceRoutingModule */

  /***/
  function srcAppViewsTransactionGroupMaintenanceUserGlAcCodeMaintSummaryTransactionGroupMaintenanceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "userglRoutes", function () {
      return userglRoutes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TransactionGroupMaintenanceRoutingModule", function () {
      return TransactionGroupMaintenanceRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _user_gl_ac_code_maint_user_gl_ac_code_maint_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../user-gl-ac-code-maint/user-gl-ac-code-maint.component */
    "./src/app/views/transaction-group-maintenance/user-gl-ac-code-maint/user-gl-ac-code-maint.component.ts");
    /* harmony import */


    var _user_gl_ac_code_maint_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./user-gl-ac-code-maint-summary.component */
    "./src/app/views/transaction-group-maintenance/user-gl-ac-code-maint-summary/user-gl-ac-code-maint-summary.component.ts");

    var userglRoutes = [{
      path: 'gl-maint-user-new',
      component: _user_gl_ac_code_maint_user_gl_ac_code_maint_component__WEBPACK_IMPORTED_MODULE_1__["UserGlAcCodeMaintComponent"]
    }, {
      path: '',
      component: _user_gl_ac_code_maint_summary_component__WEBPACK_IMPORTED_MODULE_2__["UserGlAcCodeMaintSummaryComponent"]
    }];

    var TransactionGroupMaintenanceRoutingModule = function TransactionGroupMaintenanceRoutingModule() {
      _classCallCheck(this, TransactionGroupMaintenanceRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/views/transaction-group-maintenance/user-gl-ac-code-maint-summary/user-gl-ac-code-maint-summary.component.css":
  /*!*******************************************************************************************************************************!*\
    !*** ./src/app/views/transaction-group-maintenance/user-gl-ac-code-maint-summary/user-gl-ac-code-maint-summary.component.css ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsTransactionGroupMaintenanceUserGlAcCodeMaintSummaryUserGlAcCodeMaintSummaryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".navigation {\r\n    /* width: 300px; */\r\n    height: 500px;\r\n    /* background-image: url('src/assets/images/backgrounds/navbar2.jpg'); */\r\n  \r\n  }\r\n\r\n\r\ntable{\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdHJhbnNhY3Rpb24tZ3JvdXAtbWFpbnRlbmFuY2UvdXNlci1nbC1hYy1jb2RlLW1haW50LXN1bW1hcnkvdXNlci1nbC1hYy1jb2RlLW1haW50LXN1bW1hcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isd0VBQXdFOztFQUUxRTs7O0FBR0Y7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC92aWV3cy90cmFuc2FjdGlvbi1ncm91cC1tYWludGVuYW5jZS91c2VyLWdsLWFjLWNvZGUtbWFpbnQtc3VtbWFyeS91c2VyLWdsLWFjLWNvZGUtbWFpbnQtc3VtbWFyeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmlnYXRpb24ge1xyXG4gICAgLyogd2lkdGg6IDMwMHB4OyAqL1xyXG4gICAgaGVpZ2h0OiA1MDBweDtcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnc3JjL2Fzc2V0cy9pbWFnZXMvYmFja2dyb3VuZHMvbmF2YmFyMi5qcGcnKTsgKi9cclxuICBcclxuICB9XHJcblxyXG5cclxudGFibGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/views/transaction-group-maintenance/user-gl-ac-code-maint-summary/user-gl-ac-code-maint-summary.component.ts":
  /*!******************************************************************************************************************************!*\
    !*** ./src/app/views/transaction-group-maintenance/user-gl-ac-code-maint-summary/user-gl-ac-code-maint-summary.component.ts ***!
    \******************************************************************************************************************************/

  /*! exports provided: UserGlAcCodeMaintSummaryComponent */

  /***/
  function srcAppViewsTransactionGroupMaintenanceUserGlAcCodeMaintSummaryUserGlAcCodeMaintSummaryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserGlAcCodeMaintSummaryComponent", function () {
      return UserGlAcCodeMaintSummaryComponent;
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _transaction_group_maintenance_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../transaction-group-maintenance-service.service */
    "./src/app/views/transaction-group-maintenance/transaction-group-maintenance-service.service.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);

    var UserGlAcCodeMaintSummaryComponent = /*#__PURE__*/function () {
      function UserGlAcCodeMaintSummaryComponent(ref, transactionGroupService) {
        _classCallCheck(this, UserGlAcCodeMaintSummaryComponent);

        this.ref = ref;
        this.transactionGroupService = transactionGroupService;
        this.enabled = true;
        this.displayedColumns1 = ['userId', 'permission', 'trnCode', 'trnDesc', 'action'];
        this.displayedColumns = ['userId', 'permission', 'trnCode', 'trnDesc', 'action'];
      }

      _createClass(UserGlAcCodeMaintSummaryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUserIdOnNgOnInit();
          this.enabled = true;
          this.getUserId();
        } // added by gayathri issueid=0000652 on 18-08-2020 

      }, {
        key: "getUserIdOnNgOnInit",
        value: function getUserIdOnNgOnInit() {
          var _this = this;

          this.transactionGroupService.getUserName().subscribe(function (userData) {
            _this.userData = userData;
            console.log(_this.userData);
          });
        } //added by Fayaz 04/08/2020

      }, {
        key: "keyPress",
        value: function keyPress(event) {
          console.log(event.target.value);
          console.log(event);
          console.log(this.userData);
          this.result = this.userData.filter(function (s) {
            return s.includes(event.target.value);
          });
          console.log(this.result);
          this.userData = this.result;
          this.ref.markForCheck();

          if (event.target.value == '') {
            this.getUserId();
          }
        } //

      }, {
        key: "getUser",
        value: function getUser(value) {
          console.log(value);

          if (value != this.UserId) {
            console.log(" 2nd If");
            this.enabled = true;
          } else {
            console.log(" 2nd else");
            this.enabled = false;
          }
        } //added by gayathri on 24-08-2020

      }, {
        key: "onKey",
        value: function onKey(event) {
          // console.log(value+"------------",data);
          event.target.value = event.target.value.trim();
          this.UserId = event.target.value;
          console.log("Value : ", this.UserId);

          if (this.UserId != null) {
            var _iterator = _createForOfIteratorHelper(this.userData),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var value = _step.value;
                console.log(value + "------------", this.userData);

                if (value != this.UserId) {
                  console.log(" 2nd If");
                  this.enabled = true;
                } else {
                  console.log(" 2nd else");
                  this.enabled = false;
                  break;
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          } else {
            console.log("data else : ", this.userData);
          }
        } //added by gayathri issueid=0000652 on 24-08-2020

      }, {
        key: "getUser2",
        value: function getUser2(value) {
          console.log(value);

          if (value != this.UserId) {
            console.log(" 2nd If");
            this.enabled = true;
          } else {
            console.log(" 2nd else");
            this.enabled = false;
          }
        }
      }, {
        key: "onKey1",
        value: function onKey1(event) {
          // console.log(value+"------------",data);
          event.target.value = event.target.value.trim();
          this.UserId = event.target.value;
          console.log("Value : ", this.UserId);

          if (this.UserId != null) {
            var _iterator2 = _createForOfIteratorHelper(this.userData),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var value = _step2.value;
                console.log(value + "------------", this.userData);

                if (value != this.UserId) {
                  console.log(" 2nd If");
                  this.enabled = true;
                } else {
                  console.log(" 2nd else");
                  this.enabled = false;
                  break;
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          } else {
            console.log("data else : ", this.userData);
          }
        }
      }, {
        key: "getUserId",
        value: function getUserId() {
          var _this2 = this;

          this.transactionGroupService.getUserName().subscribe(function (userData) {
            _this2.userData = userData;
            console.log(_this2.userData);
          });
        }
      }, {
        key: "getGlTrndata",
        value: function getGlTrndata() {
          var _this3 = this;

          this.transactionGroupService.getUserIdGlData(this.UserId).subscribe(function (trndata) {
            _this3.trndata = trndata;
            console.log(_this3.trndata);

            if (_this3.trndata.length !== 0) {
              _this3.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this3.trndata);
              _this3.dataSource.paginator = _this3.paginator;
              _this3.dataSource.sort = _this3.sort;
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('No transaction code mapped for this user.');
            }
          });
        }
      }, {
        key: "getTrndata",
        value: function getTrndata() {
          var _this4 = this;

          this.transactionGroupService.getUserIdAccData(this.UserId).subscribe(function (trndata) {
            _this4.trndata1 = trndata;
            console.log(_this4.trndata);

            if (_this4.trndata1.length !== 0) {
              _this4.dataSource1 = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this4.trndata1);
              _this4.dataSource1.paginator = _this4.paginator;
              _this4.dataSource1.sort = _this4.sort;
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('No transaction code mapped for this user.');
            }
          });
        } // getTransactionData()
        // {
        //   console.log("this is data from summary")
        //   this.transactionGroupService.gettingsummaryDataOfTransactionGroupMaintenance().subscribe(backendResp=>{
        //     console.log(backendResp);
        //   })

      }, {
        key: "deleteData",
        value: function deleteData(row) {
          var _this5 = this;

          console.log(row); //write a backend call.

          this.transactionGroupService.deleteGlDataUser(row, this.UserId).subscribe(function (res) {
            _this5.res = res;

            if (_this5.res) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Transaction Mapping deleted successfully.');
              _this5.dataSource = '';
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Unable to delete');
            }
          });
        }
      }, {
        key: "deleteData1",
        value: function deleteData1(row) {
          var _this6 = this;

          console.log(row); //write a backend call.

          this.transactionGroupService.deleteAcDataUser(row, this.UserId).subscribe(function (res) {
            _this6.res = res;

            if (_this6.res) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Transaction Mapping deleted successfully.');
              _this6.dataSource = '';
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.fire('Unable to delete');
            }
          });
        }
      }]);

      return UserGlAcCodeMaintSummaryComponent;
    }();

    UserGlAcCodeMaintSummaryComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _transaction_group_maintenance_service_service__WEBPACK_IMPORTED_MODULE_3__["TransactionGroupMaintenanceServiceService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])], UserGlAcCodeMaintSummaryComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])], UserGlAcCodeMaintSummaryComponent.prototype, "sort", void 0);
    UserGlAcCodeMaintSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-gl-ac-code-maint-summary',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-gl-ac-code-maint-summary.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/transaction-group-maintenance/user-gl-ac-code-maint-summary/user-gl-ac-code-maint-summary.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-gl-ac-code-maint-summary.component.css */
      "./src/app/views/transaction-group-maintenance/user-gl-ac-code-maint-summary/user-gl-ac-code-maint-summary.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _transaction_group_maintenance_service_service__WEBPACK_IMPORTED_MODULE_3__["TransactionGroupMaintenanceServiceService"]])], UserGlAcCodeMaintSummaryComponent);
    /***/
  },

  /***/
  "./src/app/views/transaction-group-maintenance/user-gl-ac-code-maint-summary/userGlMaintenanceModule.module.ts":
  /*!*********************************************************************************************************************!*\
    !*** ./src/app/views/transaction-group-maintenance/user-gl-ac-code-maint-summary/userGlMaintenanceModule.module.ts ***!
    \*********************************************************************************************************************/

  /*! exports provided: UserGlMaintenanceModule */

  /***/
  function srcAppViewsTransactionGroupMaintenanceUserGlAcCodeMaintSummaryUserGlMaintenanceModuleModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserGlMaintenanceModule", function () {
      return UserGlMaintenanceModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/angular-material/angular-material.module */
    "./src/app/shared/angular-material/angular-material.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _transaction_group_maintenance_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./transaction-group-maintenance-routing.module */
    "./src/app/views/transaction-group-maintenance/user-gl-ac-code-maint-summary/transaction-group-maintenance-routing.module.ts");
    /* harmony import */


    var _user_gl_ac_code_maint_user_gl_ac_code_maint_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../user-gl-ac-code-maint/user-gl-ac-code-maint.component */
    "./src/app/views/transaction-group-maintenance/user-gl-ac-code-maint/user-gl-ac-code-maint.component.ts");
    /* harmony import */


    var _user_gl_ac_code_maint_summary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./user-gl-ac-code-maint-summary.component */
    "./src/app/views/transaction-group-maintenance/user-gl-ac-code-maint-summary/user-gl-ac-code-maint-summary.component.ts");

    var UserGlMaintenanceModule = function UserGlMaintenanceModule() {
      _classCallCheck(this, UserGlMaintenanceModule);
    };

    UserGlMaintenanceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_user_gl_ac_code_maint_user_gl_ac_code_maint_component__WEBPACK_IMPORTED_MODULE_8__["UserGlAcCodeMaintComponent"], _user_gl_ac_code_maint_summary_component__WEBPACK_IMPORTED_MODULE_9__["UserGlAcCodeMaintSummaryComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_transaction_group_maintenance_routing_module__WEBPACK_IMPORTED_MODULE_7__["userglRoutes"]), src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_4__["AngularMaterialModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"]]
    })], UserGlMaintenanceModule);
    /***/
  },

  /***/
  "./src/app/views/transaction-group-maintenance/user-gl-ac-code-maint/user-gl-ac-code-maint.component.css":
  /*!***************************************************************************************************************!*\
    !*** ./src/app/views/transaction-group-maintenance/user-gl-ac-code-maint/user-gl-ac-code-maint.component.css ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsTransactionGroupMaintenanceUserGlAcCodeMaintUserGlAcCodeMaintComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".secondMatCard{\r\n    width: 450px;\r\n    border-radius: 9px;\r\n    margin-top: 5%;\r\n    margin-left: 30%;\r\n   \r\n}\r\nbody{\r\n    height: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvdHJhbnNhY3Rpb24tZ3JvdXAtbWFpbnRlbmFuY2UvdXNlci1nbC1hYy1jb2RlLW1haW50L3VzZXItZ2wtYWMtY29kZS1tYWludC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL3RyYW5zYWN0aW9uLWdyb3VwLW1haW50ZW5hbmNlL3VzZXItZ2wtYWMtY29kZS1tYWludC91c2VyLWdsLWFjLWNvZGUtbWFpbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWNvbmRNYXRDYXJke1xyXG4gICAgd2lkdGg6IDQ1MHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogOXB4O1xyXG4gICAgbWFyZ2luLXRvcDogNSU7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAlO1xyXG4gICBcclxufVxyXG5ib2R5e1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/views/transaction-group-maintenance/user-gl-ac-code-maint/user-gl-ac-code-maint.component.ts":
  /*!**************************************************************************************************************!*\
    !*** ./src/app/views/transaction-group-maintenance/user-gl-ac-code-maint/user-gl-ac-code-maint.component.ts ***!
    \**************************************************************************************************************/

  /*! exports provided: UserGlAcCodeMaintComponent, TrnData, GlData, AccClassData */

  /***/
  function srcAppViewsTransactionGroupMaintenanceUserGlAcCodeMaintUserGlAcCodeMaintComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserGlAcCodeMaintComponent", function () {
      return UserGlAcCodeMaintComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TrnData", function () {
      return TrnData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlData", function () {
      return GlData;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccClassData", function () {
      return AccClassData;
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


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _transaction_group_maintenance_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../transaction-group-maintenance-service.service */
    "./src/app/views/transaction-group-maintenance/transaction-group-maintenance-service.service.ts");

    var UserGlAcCodeMaintComponent = /*#__PURE__*/function () {
      function UserGlAcCodeMaintComponent(tranService, ref) {
        _classCallCheck(this, UserGlAcCodeMaintComponent);

        this.tranService = tranService;
        this.ref = ref;
        this.space1 = false;
        this.space = false;
        this.permissionvalue = ['Allow', 'Disallow'];
        this.permissionvalue1 = ['Allow', 'Disallow'];
        this.transactionGroupEntries = [{
          trnDesc: '',
          trnCode: ''
        }];
        this.gllist = [{
          trnDesc: '',
          trnCode: ''
        }];
        this.gllist1 = [{
          permission: '',
          trnDesc: '',
          trnCode: ''
        }];
        this.AccClass = [{
          trnDesc: '',
          trnCode: ''
        }];
        this.AccClass1 = [{
          permission: '',
          trnDesc: '',
          trnCode: ''
        }];
      }

      _createClass(UserGlAcCodeMaintComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loggedInuser = localStorage.getItem("userFromLogin"); //added by fayaz

          this.getUserId(); //
        } //added by fayaz

      }, {
        key: "getUserId",
        value: function getUserId() {
          var _this7 = this;

          this.tranService.getUserName().subscribe(function (userName) {
            _this7.userName = userName;
            _this7.usersList = userName;
            _this7.userName1 = userName;

            if (_this7.userName) {
              // this.userName=userName.userI;
              console.log(_this7.userName);
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('No Data For User.');
            }
          });
        } //
        //added by fayaz
        // keyPress(event: any) {
        //   console.log(event.target.value);
        //  console.log(event);
        //   console.log(this.userName);
        //   this.result = this.userName.filter(s => s.includes(event.target.value));
        //   console.log(this.result);
        //   this.userName=this.result;
        //   this.ref.markForCheck();
        //   if(event.target.value=='')
        //   {
        //   this.getUserId();
        //   }  
        // }

      }, {
        key: "keyPress",
        value: function keyPress(user) {
          console.log(user);
          var list = this.userName.filter(function (option) {
            return option.includes(user);
          });
          this.usersList = list;
          console.log(list);
        } // keyPress1(event: any) {
        //   console.log(event.target.value);
        //  console.log(event);
        //   console.log(this.userName1);
        //   this.result1 = this.userName1.filter(s => s.includes(event.target.value));
        //   console.log(this.result1);
        //   this.userName1=this.result1;
        //   this.ref.markForCheck();
        //   if(event.target.value=='')
        //   {
        //   this.getUserId();
        //   }  

      }, {
        key: "keyPress1",
        value: function keyPress1(user) {
          console.log(user);
          var list = this.userName1.filter(function (option) {
            return option.includes(user);
          });
          this.usersList1 = list;
          console.log(list);
        }
      }, {
        key: "validateuserId",
        value: function validateuserId() {
          console.log("enter inside for gl");
          console.log(this.UserId); // this.UserId = this.UserId.trim();
          //  console.log("value of UserId after trim",this.UserId);

          console.log('list', this.userName); //console.log(this.UserId,  this.userName);

          if (this.UserId && this.userName) {
            var userexist = this.userName.indexOf(this.UserId);
            console.log("value of userexist", userexist);

            if (userexist == -1) {
              console.log("PLease enter valid user Id");
              this.space = false;
              console.log("space : ", this.space);
              this.permissionvalue = ['Allow', 'Disallow'];
            } else if (userexist >= 0) {
              console.log("enter inside else method");
              this.space = true;
              console.log("space : ", this.space);
              this.getGlTrndata();
            }
          } else {
            console.log("this is space");
            this.space = false;
            console.log("space : ", this.space);
            this.permissionvalue = ['Allow', 'Disallow'];
          } // else
          // {
          //   this.space=true;
          //    this.onSubmitOfTransactionGroup(this.UserId);
          // }

        }
      }, {
        key: "validateuserId1",
        value: function validateuserId1() {
          console.log("enter inside for user");
          console.log(this.UserId1); // this.UserId = this.UserId.trim();
          //  console.log("value of UserId after trim",this.UserId);

          console.log('list', this.userName); //console.log(this.UserId,  this.userName);

          if (this.UserId1 && this.userName) {
            var userexist = this.userName.indexOf(this.UserId1);
            console.log("value of userexist", userexist);

            if (userexist == -1) {
              console.log("PLease enter valid user Id");
              this.space1 = false;
              console.log("space1 : ", this.space1);
              this.permissionvalue1 = ['Allow', 'Disallow'];
            } else if (userexist >= 0) {
              console.log("enter inside else method");
              this.space1 = true;
              console.log("space1 : ", this.space1);
              this.getTrndata();
            }
          } else {
            console.log("this is space");
            this.space1 = false;
            console.log("space : ", this.space1);
            this.permissionvalue1 = ['Allow', 'Disallow'];
          } // else
          // {
          //   this.space=true;
          //    this.onSubmitOfTransactionGroup(this.UserId);
          // }

        }
      }, {
        key: "getGlTrndata",
        value: function getGlTrndata() {
          var _this8 = this;

          this.space = true;
          console.log("calling gl class api");
          this.tranService.getUserIdGlData(this.UserId).subscribe(function (trndata) {
            _this8.gllist1 = trndata;
            console.log('backend gl data', trndata); // console.log(this.trnData[0].permission);

            console.log(_this8.gllist1.length);

            if (_this8.gllist1.length != 0) {
              _this8.permission = _this8.gllist1[0].permission;
              console.log("trnDAta", _this8.gllist);
              console.log("permission is " + _this8.permission);

              _this8.permission1(_this8.permission);
            } else {
              _this8.permission2();

              console.log("**************************");
            }
          });
        }
      }, {
        key: "permission1",
        value: function permission1(permission) {
          console.log(permission);
          this.permissionvalue = [permission];
        }
      }, {
        key: "permission2",
        value: function permission2() {
          this.permissionvalue = ['Allow', 'Disallow'];
        }
      }, {
        key: "getTrndata",
        value: function getTrndata() {
          var _this9 = this;

          this.space1 = true;
          console.log("calling account class api");
          this.tranService.getUserIdAccData(this.UserId1).subscribe(function (accdata) {
            _this9.AccClass1 = accdata;
            console.log(_this9.AccClass1);

            if (_this9.AccClass1.length != 0) {
              _this9.permission_1 = _this9.AccClass1[0].permission;

              _this9.permission3(_this9.permission_1);
            } else {
              _this9.permission4();

              console.log("**************************");
            }
          });
        }
      }, {
        key: "permission3",
        value: function permission3(permission) {
          console.log(permission);
          this.permissionvalue1 = [permission];
        }
      }, {
        key: "permission4",
        value: function permission4() {
          this.permissionvalue1 = ['Allow', 'Disallow'];
        }
      }, {
        key: "addDataOfTransactionGroupEntries",
        value: function addDataOfTransactionGroupEntries() {
          this.transactionGroupEntries.push({
            trnDesc: '',
            trnCode: ''
          }); //console.log(this.transactionGroupEntries);
        }
      }, {
        key: "removeDataOfTransactionGroup",
        value: function removeDataOfTransactionGroup(i) {
          this.transactionGroupEntries.splice(i, 1);
        } //gl

      }, {
        key: "addgllist",
        value: function addgllist() {
          this.gllist.push({
            trnDesc: '',
            trnCode: ''
          }); //console.log(this.transactionGroupEntries);
        }
      }, {
        key: "removegllist",
        value: function removegllist(i) {
          this.gllist.splice(i, 1);
        } //for account

      }, {
        key: "addAccClass",
        value: function addAccClass() {
          this.AccClass.push({
            trnDesc: '',
            trnCode: ''
          }); //console.log(this.transactionGroupEntries);
        }
      }, {
        key: "removeaddAccClass",
        value: function removeaddAccClass(i) {
          this.AccClass.splice(i, 1);
        }
      }, {
        key: "onSubmitOfTransactionGroup",
        value: function onSubmitOfTransactionGroup() {
          var _this10 = this;

          // console.log('this is transaction Grpup');
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
          } else {
            // this.trnData.userId = this.UserId;
            // console.log(this.UserId);
            // console.log(this.transactionGroupEntries);
            this.tranService.saveTrnCode(this.transactionGroupEntries, this.UserId, this.loggedInuser).subscribe(function (savetrnres) {
              _this10.savetrnres = savetrnres;

              if (_this10.savetrnres) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Data Saved.');
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Unable to save Data.');
              }
            });
          }
        }
      }, {
        key: "onSubmitGLCode",
        value: function onSubmitGLCode() {
          var _this11 = this;

          // console.log('this is transaction Grpup');
          // console.log(this.UserId);
          if (!this.UserId) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Enter User Id.');
            return;
          }

          if (!this.gllist[0].trnDesc && !this.gllist[0].trnCode) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
              title: 'Please Enter All The Fields'
            });
            return;
          } else {
            // this.trnData.userId = this.UserId;
            // console.log(this.UserId);
            // console.log(this.transactionGroupEntries);
            this.tranService.saveGlCode(this.gllist, this.UserId, this.permission).subscribe(function (savetrnres) {
              _this11.savetrnres = savetrnres;

              if (_this11.savetrnres) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Data Saved.');
                _this11.showSubmit = true;
              } else {
                // Swal.fire('Unable to save Data.');
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Duplicates not allowed');
              }
            });
          }
        }
      }, {
        key: "onSubmitActClass",
        value: function onSubmitActClass() {
          var _this12 = this;

          // console.log('this is transaction Grpup');
          // console.log(this.UserId);
          if (!this.UserId1) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Enter User Id.');
            return;
          }

          if (!this.AccClass[0].trnDesc && !this.AccClass[0].trnCode) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire({
              title: 'Please Enter All The Fields'
            });
            return;
          } else {
            // this.trnData.userId = this.UserId;
            // console.log(this.UserId);
            // console.log(this.transactionGroupEntries);
            this.tranService.saveAccountCode(this.AccClass, this.UserId1, this.permission_1).subscribe(function (savetrnres) {
              _this12.savetrnres = savetrnres;

              if (_this12.savetrnres) {
                _this12.showSubmit1 = true;
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Data Saved.');
              } else {
                // Swal.fire('Unable to save Data.');
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.fire('Duplicates not allowed');
              }
            });
          }
        }
      }, {
        key: "gl",
        value: function gl() {
          console.log("enter inside gl");
        }
      }, {
        key: "user",
        value: function user() {
          console.log("enter inside user");
        }
      }]);

      return UserGlAcCodeMaintComponent;
    }();

    UserGlAcCodeMaintComponent.ctorParameters = function () {
      return [{
        type: _transaction_group_maintenance_service_service__WEBPACK_IMPORTED_MODULE_3__["TransactionGroupMaintenanceServiceService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }];
    };

    UserGlAcCodeMaintComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-gl-ac-code-maint',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-gl-ac-code-maint.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/transaction-group-maintenance/user-gl-ac-code-maint/user-gl-ac-code-maint.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-gl-ac-code-maint.component.css */
      "./src/app/views/transaction-group-maintenance/user-gl-ac-code-maint/user-gl-ac-code-maint.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_transaction_group_maintenance_service_service__WEBPACK_IMPORTED_MODULE_3__["TransactionGroupMaintenanceServiceService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], UserGlAcCodeMaintComponent);

    var TrnData = function TrnData() {
      _classCallCheck(this, TrnData);
    };

    var GlData = function GlData() {
      _classCallCheck(this, GlData);
    };

    var AccClassData = function AccClassData() {
      _classCallCheck(this, AccClassData);
    };
    /***/

  }
}]);
//# sourceMappingURL=views-transaction-group-maintenance-user-gl-ac-code-maint-summary-userGlMaintenanceModule-module-es5.js.map