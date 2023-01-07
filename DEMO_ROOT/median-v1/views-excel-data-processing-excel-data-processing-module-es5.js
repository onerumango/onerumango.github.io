function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-excel-data-processing-excel-data-processing-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/excel-data-processing/excel-data-processing.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/excel-data-processing/excel-data-processing.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsExcelDataProcessingExcelDataProcessingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n  <span>Upload Excel</span>\r\n</mat-toolbar>\r\n<br>\r\n<mat-card style=\"width:13% ;margin-left: 40%;\">\r\n  <!-- <mat-label>Click for Refresh CCY</mat-label> -->\r\n\r\n  <button mat-raised-button color=\"primary\" (click)=\"refreshGl()\" *ngIf=\"roleCodes.new\">\r\n    Refresh CCY Rate\r\n  </button>\r\n\r\n</mat-card>\r\n\r\n<div>\r\n\r\n  <div fxLayout=\"row\">\r\n    <div fxFlex>\r\n      <div style=\"display: inline;\" *ngIf=\"spinner\">\r\n        <div style=\"float: left;\">\r\n          <mat-spinner [diameter]=\"40\"> </mat-spinner>\r\n        </div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n        <div style=\"float: left;\">\r\n          <p style=\"color: red;display: inline-block;font-size: 20px;padding-left: 10px\">Please wait we are uploading the data....</p>\r\n        </div>\r\n      </div>\r\n      <!-- <div *ngIf=\"spinner\">\r\n        <mat-spinner [diameter]=\"40\"> </mat-spinner>\r\n        <p style=\"color:red\">Please wait we are uploading the data....</p>\r\n      </div> -->\r\n    </div>\r\n    <br>\r\n    <div fxFlex=\"60%\">\r\n      <mat-card style=\"width:33% ;margin-left: 30%;\">\r\n        <mat-card-content style=\"text-align: center\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"space-between\">\r\n            <div fxFlex=\"100\" class=\"pr-1\">\r\n              <div class=\"pb-1\">\r\n                <mat-form-field class=\"full-width\" appearance=\"outline\" style=\"width: 200px; margin-left: -30px;\">\r\n                  <mat-label>External System </mat-label>\r\n                  <mat-select [(ngModel)]=\"extSysNameData\"\r\n                    (selectionChange)=\"getProcessNamesBasedOnExtSysNameForUpload(extSysNameData)\"\r\n                    [ngModelOptions]=\"{ standalone: true }\">\r\n                    <mat-option *ngFor=\"let extSysName of allExternalSystemNames\" [value]=\"extSysName\">\r\n                      {{ extSysName }}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"pb-1\">\r\n                <mat-form-field class=\"full-width\" appearance=\"outline\" style=\"width: 200px; margin-left: -30px;\">\r\n                  <mat-label>Process Name </mat-label>\r\n                  <mat-select [(ngModel)]=\"processNameData\"\r\n                    (selectionChange)=\"getFileNamesBasedOnExtSysNameAndProcessName(extSysNameData,processNameData)\"\r\n                    [ngModelOptions]=\"{ standalone: true }\">\r\n                    <mat-option required *ngFor=\"let processName of processNames\" [value]=\"processName\">\r\n                      {{ processName }}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"pb-1\">\r\n                <mat-form-field class=\"full-width\" appearance=\"outline\" style=\"width: 200px; margin-left: -30px;\">\r\n                  <mat-label>Processing Date</mat-label>\r\n                  <input matInput placeholder=\"select a date\" name=\"selectorDateData\" [(ngModel)]=\"selectorDateData\"\r\n                    readonly>\r\n                  <!-- <input matInput [matDatepicker]=\"picker\" placeholder=\"select a date\" [(ngModel)]=\"selectorDateData\"\r\n                    [ngModelOptions]=\"{ standalone: true }\" />\r\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #picker></mat-datepicker> -->\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"pb-1\">\r\n                <mat-form-field class=\"full-width\" appearance=\"outline\" style=\"width: 200px; margin-left: -30px;\">\r\n                  <mat-label>Transaction Code</mat-label>\r\n                  <mat-select [(ngModel)]=\"trncode\" (selectionChange)=\"getTrnCode(trncode)\"\r\n                    [ngModelOptions]=\"{ standalone: true }\">\r\n                    <mat-option *ngFor=\"let trncode of trnCodeArray\" [value]=\"trncode.trnCode\">\r\n                      {{ trncode.trnDesc }} {{trncode.trnCode}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <!-- <div class=\"pb-1\">\r\n                <mat-form-field class=\"full-width\" appearance=\"outline\" style=\"width: 200px; margin-left: -30px;\">\r\n                  <mat-label>remarks</mat-label>\r\n                  <input matInput placeholder=\"enter remarks\" name=\"reasonOfDeletion\" [(ngModel)]=\"reasonOfDeletion\"\r\n                    > -->\r\n              <!-- <input matInput [matDatepicker]=\"picker\" placeholder=\"select a date\" [(ngModel)]=\"selectorDateData\"\r\n                    [ngModelOptions]=\"{ standalone: true }\" />\r\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #picker></mat-datepicker> -->\r\n              <!-- </mat-form-field> -->\r\n              <!-- </div> -->\r\n              <div class=\"pb-1\" *ngIf=\"enablefilebrowser\">\r\n                <mat-form-field class=\"full-width\" appearance=\"outline\" style=\"width: 200px; margin-left: -30px;\">\r\n                  <mat-label>File Name</mat-label>\r\n                  <input matInput placeholder=\"FileName\" #fileName [(ngModel)]=\"excelDataProcessingReqDTO.fileName\"\r\n                    #fileName=\"ngModel\" (ngModelChange)=\"valuechange($event)\" (keypress)=\"valuechange($event)\" (keyup)=\"fun(excelDataProcessingReqDTO.fileName)\">\r\n                </mat-form-field>\r\n              </div>\r\n              <!-- <p style=\"color: red;\">Checked for uploading file from local computer.</p> -->\r\n              <!-- <div class=\"pb-1\">\r\n                   <mat-checkbox (change)=\"checkCheckBoxvalue($event)\">Manual Upload</mat-checkbox>\r\n                  </div> -->\r\n              <div class=\"pb-1\" *ngIf=\"enablefilebrowser\">\r\n                <input type=\"file\"\r\n                  (change)=\"getFiledata($event,extSysNameData,processNameData,excelDataProcessingReqDTO.fileName)\" />\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div style=\"text-align: center\">\r\n            <button mat-raised-button color=\"primary\" (click)=\"doFirstValidation()\" [hidden]=\"isShow\" *ngIf=\"enablefilebrowser\"\r\n            [disabled]=\"disbaleBtn || !space||!extSysNameData || !processNameData || !trncode || !excelDataProcessingReqDTO.fileName\"> \r\n            Upload Data\r\n            </button>&nbsp;\r\n            <button mat-raised-button color=\"primary\" (click)=\"doFirstValidation()\" [hidden]=\"isShow\" *ngIf=\"!enablefilebrowser\"\r\n            [disabled]=\"disbaleBtn || !extSysNameData || !processNameData || !trncode\"> \r\n            Upload Data\r\n            </button>&nbsp;\r\n\r\n            <button mat-raised-button color=\"warn\" (click)=\"resetEntries()\">\r\n              Reset\r\n            </button>&nbsp;\r\n            <button mat-raised-button color=\"warn\" [routerLink]=\"'/dashboard'\">\r\n              Exit\r\n            </button>\r\n            <!-- <button mat-raised-button color=\"warn\" (click)=\"testAlert()\">\r\n              Test\r\n            </button> -->\r\n          </div>\r\n\r\n        </mat-card-content>\r\n         <!-- After Upload Please Download Error Excel After Response For More Detail is commented by vidya for the iisue id778 -->\r\n        <!-- <p style=\"color: red;\">\"After Upload Please Download Error Excel After Response For More Detail\"</p> -->\r\n        <p style=\"color: red;text-align: center\">Final excel report can be downloaded from Process Excel screen.</p>\r\n      </mat-card>\r\n    </div>\r\n    <div fxFlex></div>\r\n  </div>\r\n</div>\r\n<br>\r\n\r\n<!-- <div fxLayout=\"row\">\r\n  <div fxFlex></div>\r\n  <div fxFlex=\"95\">\r\n    <mat-card  style=\"width:32% ;margin-left: 30%;\">\r\n      <mat-card-title>\r\n      </mat-card-title>\r\n      <mat-card-content>\r\n        <div fxLayout=\"row\">\r\n          <table id=\"customers\">\r\n            <tr>\r\n            \r\n              <th>Record Status:</th>\r\n              <td>\r\n                <mat-chip *ngIf=\"auditdata\">{{excelDataProcessingAuditlog.recordStatus }}</mat-chip>\r\n              </td>\r\n\r\n             \r\n\r\n\r\n            </tr>\r\n            <tr>\r\n            \r\n              <th>Input Date:</th>\r\n              <td>\r\n                <mat-chip *ngIf=\"auditdata\">{{excelDataProcessingAuditlog.inputDate |  date }}</mat-chip>\r\n              </td>\r\n              <th>Input By:</th>\r\n              <td>\r\n                <mat-chip *ngIf=\"auditdata\">{{excelDataProcessingAuditlog.inputBy}}</mat-chip>\r\n              </td>\r\n            \r\n\r\n\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </mat-card-content>\r\n    </mat-card>\r\n  </div>\r\n</div>*ngIf=\"responsebutton\" -->\r\n\r\n\r\n\r\n\r\n<!--  -->\r\n<div fxLayout=\"row\" *ngIf=\"responsebutton\">\r\n  <div fxFlex=\"40%\">\r\n    <mat-card class=\"hahaha\" style=\"width:32% ;margin-left: 30%;\">\r\n      <mat-card-content>\r\n        <h4>File Upload Summary</h4>\r\n        <div>\r\n          <label for=\"fname\">Batch Number</label>\r\n          <input matInput type=\"text\" placeholder=\"Batch Number\" value=\" {{ responseDto.batchNo }}\" readonly />\r\n        </div>\r\n        <div>\r\n          <label for=\"fname\">Total No Of records</label>\r\n          <input matInput type=\"text\" placeholder=\"0000\" value=\" {{ responseDto.totalNoOfRecords }}\" readonly />\r\n        </div>\r\n        <div>\r\n          <label for=\"lname\">Total Debit Amount</label>\r\n\r\n          <input matInput type=\"text\" id=\"lname\" name=\"lastname\" placeholder=\"0000\"\r\n            value=\" {{ responseDto.totalDebitAmount }}\" readonly />\r\n        </div>\r\n        <div>\r\n          <label for=\"lname\">Total Credit Amount</label>\r\n\r\n          <input matInput type=\"text\" id=\"lname\" name=\"lastname\" placeholder=\"0000\"\r\n            value=\" {{ responseDto.totalCreditAmount }}\" readonly />\r\n        </div>\r\n        <div>\r\n          <label for=\"lname\">Sum(Credit - Debit)</label>\r\n\r\n          <input matInput type=\"text\" id=\"lname\" name=\"lastname\" placeholder=\"0000\" value=\" {{ responseDto.sumAmount }}\"\r\n            readonly />\r\n\r\n        </div>\r\n        <div>\r\n          <label for=\"lname\">Value Date</label>\r\n\r\n          <input matInput type=\"text\" id=\"lname\" name=\"lastname\" value=\" {{valueDate }}\" readonly />\r\n\r\n        </div>\r\n        <div>\r\n          <p><b>Remarks: </b></p>\r\n          <textarea rows=\"3\" cols=\"35\" name=\"remarks\" [(ngModel)]=\"remarks\"> </textarea>\r\n\r\n        </div>\r\n        <div>\r\n          <p><b>Overrides: </b></p>\r\n          <textarea rows=\"3\" cols=\"35\" name=\"remarks\" value=\" {{ responseDto.overrideMessage }}\"> </textarea>\r\n\r\n        </div>\r\n        <div>\r\n          <button mat-raised-button [disabled]=\"flag\" color=\"primary\"\r\n            (click)=\"Datacheck()\">Process</button>&nbsp;\r\n          <button mat-raised-button color=\"warn\" (click)=\"deleteDataService(remarks)\">Delete</button>&nbsp;\r\n          <button mat-raised-button color=\"primary\" (click)=\"downloadData()\">View Excel</button>&nbsp;\r\n          <!--<button mat-raised-button color=\"primary\" (click)=\"downloadData()\" *ngIf=\"button1\">\r\n        Download As Pdf\r\n        </button>-->\r\n          <button mat-raised-button color=\"warn\" (click)=\"exit()\">Hide</button>\r\n        </div>\r\n\r\n\r\n\r\n      </mat-card-content>\r\n    </mat-card>\r\n    <!-- <button class=\"button-good\" [disabled]=\"!flag\" data-title=\"Process Data\" (click)=\"processDataService()\">Process Data</button>\r\n\r\n    <button class=\"newbutton\" [disabled]=\"!flag\" data-title=\"Delete Data\" (click)=\"deleteDataService()\">Delete Data</button>\r\n  \r\n    <button class=\"newbutton\" [disabled]=\"!flag\" data-title=\"Download Uploaded Data\" (click)=\"downloadData()\">Download Uploaded Data</button> -->\r\n  </div>\r\n</div>\r\n<!--  -->\r\n<!-- <mat-dialog-actions align=\"end\">\r\n    \r\n  </mat-dialog-actions> -->\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/excel-data-processing/excel-upload-dialog/excel-upload-dialog.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/excel-data-processing/excel-upload-dialog/excel-upload-dialog.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsExcelDataProcessingExcelUploadDialogExcelUploadDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>excel-upload-dialog works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/excel-data-processing/value-date-error/value-date-error.component.html":
  /*!************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/excel-data-processing/value-date-error/value-date-error.component.html ***!
    \************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsExcelDataProcessingValueDateErrorValueDateErrorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div >\r\n   <p>Unable to process Error {{data.errorMsg}}Do you want to proceed??</p>\r\n \r\n \r\n    \r\n    <button mat-raised-button  color=\"primary\" (click)=\"onProceed()\">Proceed</button>&nbsp;&nbsp;\r\n    <button mat-raised-button  [mat-dialog-close]=\"true\" cdkFocusInitial color=\"warn\">Reject </button>\r\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/modals/modal-dialog/modal-dialog.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/modals/modal-dialog/modal-dialog.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsModalsModalDialogModalDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 mat-dialog-title>File Summary</h2>\r\n<!--  -->\r\n<div layout=\"row\" layout-align=\"start center\" *ngIf=\"responseDto\" flex>\r\n  <label for=\"fname\">Total No Of records :</label>&nbsp;&nbsp;\r\n  <input\r\n    type=\"text\"\r\n    placeholder=\"0000\"\r\n    value=\" {{ responseDto.totalNoOfRecords }}\"\r\n    readonly\r\n  />\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n  <label for=\"lname\" layout-align=\"right\">Total Debit Amount :</label>\r\n  &nbsp;&nbsp;\r\n  <input\r\n    type=\"text\"\r\n    id=\"lname\"\r\n    name=\"lastname\"\r\n    placeholder=\"0000\"\r\n    value=\" {{ responseDto.totalDebitAmount }}\"\r\n    readonly\r\n  />\r\n  <br />\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n  \r\n  <label for=\"lname\" align=\"right\">Total Credit Amount :</label>\r\n  &nbsp;\r\n  <input\r\n    type=\"text\"\r\n    id=\"lname\"\r\n    name=\"lastname\"\r\n    placeholder=\"0000\"\r\n    value=\" {{ responseDto.totalCreditAmount }}\"\r\n    readonly\r\n  />\r\n  <br />\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;\r\n  <label for=\"lname\" align=\"right\">Sum(Credit - Debit) :</label>\r\n  &nbsp;\r\n  <input\r\n    type=\"text\"\r\n    id=\"lname\"\r\n    name=\"lastname\"\r\n    placeholder=\"0000\"\r\n    value=\" {{ responseDto.sumAmount }}\"\r\n    readonly\r\n  />\r\n\r\n  <br />\r\n  <br />\r\n  <p><b>Remarks: </b></p>\r\n  <textarea rows=\"4\" cols=\"50\" [(ngModel)]=\"remarks\"> </textarea>\r\n  <br />\r\n  <button\r\n    class=\"button-good\"\r\n    [disabled]=\"!flag\"\r\n    data-title=\"Process Data\"\r\n    (click)=\"processDataService()\"\r\n  ></button>\r\n  &nbsp;&nbsp;&nbsp;\r\n  <button\r\n    class=\"newbutton\"\r\n    [disabled]=\"!flag\"\r\n    data-title=\"Delete Data\"\r\n    (click)=\"deleteDataService()\"\r\n  ></button>\r\n</div>\r\n\r\n<!--  -->\r\n<mat-dialog-actions align=\"end\">\r\n  <button  mat-raised-button\r\n  color=\"primary\"\r\n  class=\"no-hover-effect\" mat-dialog-close>Exit</button>\r\n</mat-dialog-actions>\r\n";
    /***/
  },

  /***/
  "./src/app/shared/models/excel-data-processing-dto.ts":
  /*!************************************************************!*\
    !*** ./src/app/shared/models/excel-data-processing-dto.ts ***!
    \************************************************************/

  /*! exports provided: ExcelDataProcessingReqDTO */

  /***/
  function srcAppSharedModelsExcelDataProcessingDtoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExcelDataProcessingReqDTO", function () {
      return ExcelDataProcessingReqDTO;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ExcelDataProcessingReqDTO = function ExcelDataProcessingReqDTO() {
      _classCallCheck(this, ExcelDataProcessingReqDTO);

      this.proceedDuplicates = false;
    };
    /***/

  },

  /***/
  "./src/app/shared/models/excel-data-processing-resp-dto.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/shared/models/excel-data-processing-resp-dto.ts ***!
    \*****************************************************************/

  /*! exports provided: ExcelDataProcessingRespDTO */

  /***/
  function srcAppSharedModelsExcelDataProcessingRespDtoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExcelDataProcessingRespDTO", function () {
      return ExcelDataProcessingRespDTO;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ExcelDataProcessingRespDTO = function ExcelDataProcessingRespDTO() {
      _classCallCheck(this, ExcelDataProcessingRespDTO);
    };
    /***/

  },

  /***/
  "./src/app/views/excel-data-processing/excel-data-processing-dto.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/views/excel-data-processing/excel-data-processing-dto.ts ***!
    \**************************************************************************/

  /*! exports provided: ExcelDataProcessingAuditRespDTO */

  /***/
  function srcAppViewsExcelDataProcessingExcelDataProcessingDtoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExcelDataProcessingAuditRespDTO", function () {
      return ExcelDataProcessingAuditRespDTO;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ExcelDataProcessingAuditRespDTO = function ExcelDataProcessingAuditRespDTO() {
      _classCallCheck(this, ExcelDataProcessingAuditRespDTO);
    };
    /***/

  },

  /***/
  "./src/app/views/excel-data-processing/excel-data-processing-routing.module.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/views/excel-data-processing/excel-data-processing-routing.module.ts ***!
    \*************************************************************************************/

  /*! exports provided: excelDataProcessingRoutes */

  /***/
  function srcAppViewsExcelDataProcessingExcelDataProcessingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "excelDataProcessingRoutes", function () {
      return excelDataProcessingRoutes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _excel_data_processing_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./excel-data-processing.component */
    "./src/app/views/excel-data-processing/excel-data-processing.component.ts");

    var excelDataProcessingRoutes = [{
      path: '',
      component: _excel_data_processing_component__WEBPACK_IMPORTED_MODULE_1__["ExcelDataProcessingComponent"]
    }];
    /***/
  },

  /***/
  "./src/app/views/excel-data-processing/excel-data-processing.component.scss":
  /*!**********************************************************************************!*\
    !*** ./src/app/views/excel-data-processing/excel-data-processing.component.scss ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsExcelDataProcessingExcelDataProcessingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h1 {\n  color: #b60c61;\n  font-family: Impact, Charcoal, sans-serif;\n  font-size: 32px;\n  font-weight: bold;\n  margin-top: 0px;\n  margin-bottom: 1px;\n}\n\n.upload-btn-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n  color: green;\n}\n\n.btn {\n  border: 2px solid gray;\n  color: #3a16d6;\n  background-color: white;\n  padding: 8px 20px;\n  border-radius: 8px;\n  font-size: 30px;\n  font-weight: bold;\n}\n\n.button1 {\n  background-color: #534caf;\n  color: #f0e7e7;\n  border: 2px solid #4CAF50;\n}\n\n.button1:hover {\n  background-color: #4CAF50;\n  color: white;\n}\n\na {\n  position: relative;\n  display: inline-block;\n  padding: 0.4em 0.4em;\n  text-decoration: none;\n  text-align: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: white;\n}\n\na::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: linear-gradient(135deg, #6e8efb, #a777e3);\n  border-radius: 4px;\n  transition: box-shadow 0.5s ease, transform 0.2s ease;\n  will-change: transform;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0)) rotateY(var(--ry, 0)) translateZ(var(--tz, -12px));\n}\n\na:hover::before {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n}\n\na::after {\n  position: relative;\n  display: inline-block;\n  content: attr(data-title);\n  transition: transform 0.2s ease;\n  font-weight: bold;\n  letter-spacing: 0.01em;\n  will-change: transform;\n  transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0)) rotateY(var(--ry, 0));\n}\n\nbody {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  transform-style: preserve-3d;\n  transform: perspective(800px);\n}\n\n#tabledata {\n  border-collapse: collapse;\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n  /* table-layout: fixed; */\n  max-width: 1200px;\n  max-height: 1200px;\n  overflow-x: auto;\n  overflow-y: scroll;\n  display: block;\n  /*   overflow: scroll; Scrollbar are always visible */\n  /* overflow: auto;   */\n}\n\n#tabledata #test {\n  margin-right: 200px;\n}\n\n#tabledata .example-fill-remaining-space {\n  flex: 1 1 auto;\n}\n\n#tabledata td, #tabledata th {\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n\n#tabledata tr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n#tabledata tr:hover {\n  background-color: #ddd;\n}\n\n#tabledata th {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #4CAF50;\n  color: white;\n}\n\n#tabledata tfoot {\n  background: #eae8ee;\n  color: #e61212;\n  display: table-footer;\n  border-color: inherit;\n}\n\n.example-form {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  min-width: 150px;\n  max-width: 500px;\n  width: 50%;\n  margin-left: 23%;\n  border: 2px solid #c42d2d;\n  background-color: #e5eef1;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.container {\n  margin-top: 1%;\n  text-align: center;\n}\n\n.navbar {\n  /*  */\n  justify-content: space-between;\n}\n\nspan {\n  padding-right: 1rem;\n}\n\n.newbutton {\n  position: relative;\n  display: inline-block;\n  padding: 0.4em 0.4em;\n  text-decoration: none;\n  text-align: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: white;\n}\n\n.newbutton::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: linear-gradient(135deg, #f738a1, #e0b94e);\n  border-radius: 4px;\n  transition: box-shadow 0.5s ease, transform 0.2s ease;\n  will-change: transform;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0)) rotateY(var(--ry, 0)) translateZ(var(--tz, -12px));\n}\n\n.newbutton:hover::before {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n}\n\n.newbutton::after {\n  position: relative;\n  display: inline-block;\n  content: attr(data-title);\n  transition: transform 0.2s ease;\n  font-weight: bold;\n  letter-spacing: 0.01em;\n  will-change: transform;\n  transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0)) rotateY(var(--ry, 0));\n}\n\nh4 {\n  font-size: 20px;\n  font-weight: normal;\n  margin-top: 0px;\n  margin-bottom: 1px;\n}\n\ntable {\n  width: 100%;\n}\n\nth {\n  /* text-align: center;\n   */\n  align-content: center;\n}\n\ntable td {\n  padding-right: 50px;\n}\n\n#customers {\n  border-collapse: collapse;\n  width: 100%;\n}\n\n#customers td, #customers th {\n  border: 1px solid #ddd;\n  padding: 8px;\n  text-align: center;\n  font-size: xx-small;\n}\n\n#customers td mat-chip {\n  font-size: xx-small;\n}\n\n#customers tr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n#customers th {\n  padding-top: 8px;\n  padding-bottom: 9px;\n  text-align: left;\n  background-color: #61b2d8;\n  color: white;\n}\n\n.wrapper {\n  text-align: center;\n}\n\n/*\n*css added by dev on 12/nov\n*/\n\nmat-card .hahaha {\n  width: 330px;\n  height: 250px;\n}\n\nmat-card mat-form-field {\n  font-size: 10px;\n}\n\nmat-card a {\n  font-size: 11px;\n}\n\nmat-card p {\n  font-size: 11px;\n}\n\nmat-card .hahaha {\n  width: 530px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZXhjZWwtZGF0YS1wcm9jZXNzaW5nL0Y6XFxtdXRodS1vbmJvYXJkXFxtZWRpYW4tcGgyLXVpL3NyY1xcYXBwXFx2aWV3c1xcZXhjZWwtZGF0YS1wcm9jZXNzaW5nXFxleGNlbC1kYXRhLXByb2Nlc3NpbmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL2V4Y2VsLWRhdGEtcHJvY2Vzc2luZy9leGNlbC1kYXRhLXByb2Nlc3NpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EseUNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFRTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFlBQUE7QUNDRjs7QURHQTtFQUNFLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0FGOztBREdBO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNBRjs7QURFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0Msa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLFlBQUE7QUNFRDs7QURBQztFQUNDLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxxREFBQTtFQUNBLGtCQUFBO0VBQ0EscURBQUE7RUFDQSxzQkFBQTtFQUNBLHdDQUFBO0VBQ0EsNEdBQ0M7QUNDSDs7QURLQztFQUNDLHlDQUFBO0FDSEY7O0FETUM7RUFDQyxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLCtFQUNDO0FDTEg7O0FEV0E7RUFDQyxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDUkQ7O0FEV0E7RUFDRSx5QkFBQTtFQUNBLHlEQUFBO0VBQ0EseUJBQUE7RUFDQSxXQUFBO0VBSUEseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0MsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDRixxREFBQTtFQUNELHNCQUFBO0FDWEE7O0FEYUE7RUFDRSxtQkFBQTtBQ1hGOztBRGFBO0VBR0UsY0FBQTtBQ2JGOztBRGlCQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtBQ2RGOztBRGlCQTtFQUE4Qix5QkFBQTtBQ2I5Qjs7QURlQTtFQUFxQixzQkFBQTtBQ1hyQjs7QURhQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ1ZGOztBRHFCQTtFQUNFLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBRUEscUJBQUE7QUNuQkY7O0FEd0JBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FDckJGOztBRHlCQTtFQUNFLFdBQUE7QUN0QkY7O0FEd0JBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDckJGOztBRDRCQTtFQUNFLEtBQUE7RUFDQSw4QkFBQTtBQ3pCRjs7QUQyQkE7RUFDRSxtQkFBQTtBQ3hCRjs7QUQyQkE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsWUFBQTtBQ3hCRjs7QUQwQkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EscURBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0VBQ0Esc0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDRHQUFBO0FDeEJKOztBRDRCRTtFQUNFLHlDQUFBO0FDMUJKOztBRDZCRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0VBQUE7QUMzQko7O0FEK0JBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDNUJGOztBRCtCRTtFQUNFLFdBQUE7QUM1Qko7O0FEK0JFO0VBQ0U7SUFBQTtFQUVGLHFCQUFBO0FDNUJGOztBRCtCRTtFQUNFLG1CQUFBO0FDNUJKOztBRCtCRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtBQzVCSjs7QUQ4QkU7RUFDRSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FDM0JKOztBRDhCRTtFQUNFLG1CQUFBO0FDM0JKOztBRDZCRTtFQUE4Qix5QkFBQTtBQ3pCaEM7O0FEMkJFO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0FDeEJKOztBRDBCRTtFQUNFLGtCQUFBO0FDdkJKOztBRDBCQzs7Q0FBQTs7QUFJQTtFQUNDLFlBQUE7RUFDQSxhQUFBO0FDeEJGOztBRDBCQTtFQUNFLGVBQUE7QUN2QkY7O0FEeUJBO0VBQ0UsZUFBQTtBQ3RCRjs7QUR3QkE7RUFDRSxlQUFBO0FDckJGOztBRHdCQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDckJGIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvZXhjZWwtZGF0YS1wcm9jZXNzaW5nL2V4Y2VsLWRhdGEtcHJvY2Vzc2luZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgxXHR7XHJcbiAgY29sb3I6ICNiNjBjNjE7XHJcbiAgZm9udC1mYW1pbHk6IEltcGFjdCwgQ2hhcmNvYWwsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAzMnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbiAgfVxyXG5cclxuICAudXBsb2FkLWJ0bi13cmFwcGVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgY29sb3I6IGdyZWVuXHJcbn1cclxuXHJcblxyXG4uYnRuIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xyXG4gIGNvbG9yOiByZ2IoNTgsIDIyLCAyMTQpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5idXR0b24xIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDgzLCA3NiwgMTc1KTtcclxuICBjb2xvcjogcmdiKDI0MCwgMjMxLCAyMzEpO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkICM0Q0FGNTA7XHJcbn1cclxuLmJ1dHRvbjE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmEge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0cGFkZGluZzogMC40ZW0gMC40ZW07XHJcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG5cdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0dXNlci1zZWxlY3Q6IG5vbmU7XHJcblx0Y29sb3I6IHdoaXRlO1xyXG5cclxuXHQmOjpiZWZvcmUge1xyXG5cdFx0Y29udGVudDogJyc7XHJcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0XHR0b3A6IDA7XHJcblx0XHRsZWZ0OiAwO1xyXG5cdFx0Ym90dG9tOiAwO1xyXG5cdFx0cmlnaHQ6IDA7XHJcblx0XHRiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNmU4ZWZiLCAjYTc3N2UzKTtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRcdHRyYW5zaXRpb246IGJveC1zaGFkb3cgLjVzIGVhc2UsIHRyYW5zZm9ybSAuMnMgZWFzZTtcclxuXHRcdHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcblx0XHRib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAuMik7XHJcblx0XHR0cmFuc2Zvcm06XHJcblx0XHRcdHRyYW5zbGF0ZVkodmFyKC0tdHksIDApKVxyXG5cdFx0XHRyb3RhdGVYKHZhcigtLXJ4LCAwKSlcclxuXHRcdFx0cm90YXRlWSh2YXIoLS1yeSwgMCkpXHJcblx0XHRcdHRyYW5zbGF0ZVoodmFyKC0tdHosIC0xMnB4KSk7XHJcblx0fVxyXG5cclxuXHQmOmhvdmVyOjpiZWZvcmUge1xyXG5cdFx0Ym94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIC4zKTtcclxuXHR9XHJcblxyXG5cdCY6OmFmdGVyIHtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRcdGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XHJcblx0XHR0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzIGVhc2U7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdGxldHRlci1zcGFjaW5nOiAuMDFlbTtcclxuXHRcdHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcblx0XHR0cmFuc2Zvcm06XHJcblx0XHRcdHRyYW5zbGF0ZVkodmFyKC0tdHksIDApKVxyXG5cdFx0XHRyb3RhdGVYKHZhcigtLXJ4LCAwKSlcclxuXHRcdFx0cm90YXRlWSh2YXIoLS1yeSwgMCkpO1xyXG5cdH1cclxufVxyXG5cclxuYm9keSB7XHJcblx0ZGlzcGxheTogZmxleDtcclxuXHRhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5cdGhlaWdodDogMTAwdmg7XHJcblx0dHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxuXHR0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KTtcclxufVxyXG5cclxuI3RhYmxlZGF0YSB7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICBmb250LWZhbWlseTogXCJUcmVidWNoZXQgTVNcIiwgQXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxuXHJcblxyXG4gIC8qIHRhYmxlLWxheW91dDogZml4ZWQ7ICovXHJcbiAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgbWF4LWhlaWdodDogMTIwMHB4O1xyXG4gICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICBvdmVyZmxvdy15OnNjcm9sbDtcclxuICAgZGlzcGxheTogYmxvY2s7XHJcbiAvKiAgIG92ZXJmbG93OiBzY3JvbGw7IFNjcm9sbGJhciBhcmUgYWx3YXlzIHZpc2libGUgKi9cclxuLyogb3ZlcmZsb3c6IGF1dG87ICAgKi9cclxuXHJcbiN0ZXN0e1xyXG4gIG1hcmdpbi1yaWdodDogMjAwcHg7XHJcbn1cclxuLmV4YW1wbGUtZmlsbC1yZW1haW5pbmctc3BhY2Uge1xyXG4gIC8vIFRoaXMgZmlsbHMgdGhlIHJlbWFpbmluZyBzcGFjZSwgYnkgdXNpbmcgZmxleGJveC5cclxuICAvLyBFdmVyeSB0b29sYmFyIHJvdyB1c2VzIGEgZmxleGJveCByb3cgbGF5b3V0LlxyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG59XHJcbn1cclxuXHJcbiN0YWJsZWRhdGEgdGQsICN0YWJsZWRhdGEgdGgge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgcGFkZGluZzogOHB4O1xyXG59XHJcblxyXG4jdGFibGVkYXRhIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cclxuXHJcbiN0YWJsZWRhdGEgdHI6aG92ZXIge2JhY2tncm91bmQtY29sb3I6ICNkZGQ7fVxyXG5cclxuI3RhYmxlZGF0YSB0aCB7XHJcbiAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuXHJcbi8vICN0YWJsZWRhdGEgdGZvb3Qge1xyXG4vLyAgIGJhY2tncm91bmQtY29sb3I6ICNmMDBiMGI7XHJcbi8vICAgY29sb3I6ICNkZGRkZGQ7XHJcbi8vICAgZm9udC1zaXplOiA4MCU7XHJcbi8vIH1cclxuXHJcblxyXG4jdGFibGVkYXRhIHRmb290IHtcclxuICBiYWNrZ3JvdW5kOiByZ2IoMjM0LCAyMzIsIDIzOCk7XHJcbiAgY29sb3I6IHJnYigyMzAsIDE4LCAxOCk7XHJcbiAgZGlzcGxheTogdGFibGUtZm9vdGVyO1xyXG4gIC8vaG9yaXpvbnRhbCA6IG1pZGRsZTtcclxuICBib3JkZXItY29sb3I6IGluaGVyaXRcclxufVxyXG5cclxuLy9zYWt0aSBjc3NcclxuXHJcbi5leGFtcGxlLWZvcm0ge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogNTAlO1xyXG4gIG1hcmdpbi1sZWZ0OiAyMyU7XHJcbiAgYm9yZGVyOjJweCBzb2xpZCByZ2IoMTk2LCA0NSwgNDUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWVlZjE7XHJcblxyXG59XHJcblxyXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY29udGFpbmVye1xyXG4gIG1hcmdpbi10b3A6IDElO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgLy8gbWFyZ2luLWxlZnQ6IDMwJTtcclxuICAvLyBtYXJnaW4tcmlnaHQ6IDMwJTtcclxuXHJcbiAgLy9cclxufVxyXG4ubmF2YmFye1xyXG4gIC8qICAqL1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5zcGFue1xyXG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbi5uZXdidXR0b24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMC40ZW0gMC40ZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmNzM4YTEsICNlMGI5NGUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2U7XHJcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSh2YXIoLS10eSwgMCkpIHJvdGF0ZVgodmFyKC0tcngsIDApKVxyXG4gICAgICByb3RhdGVZKHZhcigtLXJ5LCAwKSkgdHJhbnNsYXRlWih2YXIoLS10eiwgLTEycHgpKTtcclxuICB9XHJcblxyXG4gICY6aG92ZXI6OmJlZm9yZSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICB9XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSh2YXIoLS10eSwgMCkpIHJvdGF0ZVgodmFyKC0tcngsIDApKVxyXG4gICAgICByb3RhdGVZKHZhcigtLXJ5LCAwKSk7XHJcbiAgfVxyXG59XHJcbmg0XHR7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDFweDtcclxuICB9XHJcblxyXG4gIHRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICB0aHtcclxuICAgIC8qIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAqL1xyXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgdGFibGUgdGQge1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxuICB9XHJcblxyXG4gICNjdXN0b21lcnMge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAjY3VzdG9tZXJzIHRkLCAjY3VzdG9tZXJzIHRoIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IHh4LXNtYWxsO1xyXG4gIFxyXG4gIH1cclxuICAjY3VzdG9tZXJzIHRkIG1hdC1jaGlwIHtcclxuICAgIGZvbnQtc2l6ZTogeHgtc21hbGw7XHJcbiAgfVxyXG4gICNjdXN0b21lcnMgdHI6bnRoLWNoaWxkKGV2ZW4pe2JhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7fVxyXG4gIFxyXG4gICNjdXN0b21lcnMgdGgge1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA5cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoOTcsIDE3OCwgMjE2KTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgLndyYXBwZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuIC8qXHJcbipjc3MgYWRkZWQgYnkgZGV2IG9uIDEyL25vdlxyXG4qL1xyXG5cclxuIG1hdC1jYXJkIC5oYWhhaGEge1xyXG4gIHdpZHRoOiAzMzBweDtcclxuICBoZWlnaHQ6IDI1MHB4O1xyXG59XHJcbm1hdC1jYXJkIG1hdC1mb3JtLWZpZWxkIHtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxubWF0LWNhcmQgYSB7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG59XHJcbm1hdC1jYXJkIHAge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5cclxubWF0LWNhcmQgLmhhaGFoYXtcclxuICB3aWR0aDogNTMwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG59XHJcbiIsImgxIHtcbiAgY29sb3I6ICNiNjBjNjE7XG4gIGZvbnQtZmFtaWx5OiBJbXBhY3QsIENoYXJjb2FsLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDMycHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbn1cblxuLnVwbG9hZC1idG4td3JhcHBlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb2xvcjogZ3JlZW47XG59XG5cbi5idG4ge1xuICBib3JkZXI6IDJweCBzb2xpZCBncmF5O1xuICBjb2xvcjogIzNhMTZkNjtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIHBhZGRpbmc6IDhweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5idXR0b24xIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzUzNGNhZjtcbiAgY29sb3I6ICNmMGU3ZTc7XG4gIGJvcmRlcjogMnB4IHNvbGlkICM0Q0FGNTA7XG59XG5cbi5idXR0b24xOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG5hIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAuNGVtIDAuNGVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuYTo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2ZThlZmIsICNhNzc3ZTMpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cyBlYXNlLCB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkodmFyKC0tdHksIDApKSByb3RhdGVYKHZhcigtLXJ4LCAwKSkgcm90YXRlWSh2YXIoLS1yeSwgMCkpIHRyYW5zbGF0ZVoodmFyKC0tdHosIC0xMnB4KSk7XG59XG5hOmhvdmVyOjpiZWZvcmUge1xuICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbmE6OmFmdGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkodmFyKC0tdHksIDApKSByb3RhdGVYKHZhcigtLXJ4LCAwKSkgcm90YXRlWSh2YXIoLS1yeSwgMCkpO1xufVxuXG5ib2R5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIHRyYW5zZm9ybTogcGVyc3BlY3RpdmUoODAwcHgpO1xufVxuXG4jdGFibGVkYXRhIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xuICAvKiB0YWJsZS1sYXlvdXQ6IGZpeGVkOyAqL1xuICBtYXgtd2lkdGg6IDEyMDBweDtcbiAgbWF4LWhlaWdodDogMTIwMHB4O1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICAvKiAgIG92ZXJmbG93OiBzY3JvbGw7IFNjcm9sbGJhciBhcmUgYWx3YXlzIHZpc2libGUgKi9cbiAgLyogb3ZlcmZsb3c6IGF1dG87ICAgKi9cbn1cbiN0YWJsZWRhdGEgI3Rlc3Qge1xuICBtYXJnaW4tcmlnaHQ6IDIwMHB4O1xufVxuI3RhYmxlZGF0YSAuZXhhbXBsZS1maWxsLXJlbWFpbmluZy1zcGFjZSB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4jdGFibGVkYXRhIHRkLCAjdGFibGVkYXRhIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogOHB4O1xufVxuXG4jdGFibGVkYXRhIHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG5cbiN0YWJsZWRhdGEgdHI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xufVxuXG4jdGFibGVkYXRhIHRoIHtcbiAgcGFkZGluZy10b3A6IDEycHg7XG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xuICBjb2xvcjogd2hpdGU7XG59XG5cbiN0YWJsZWRhdGEgdGZvb3Qge1xuICBiYWNrZ3JvdW5kOiAjZWFlOGVlO1xuICBjb2xvcjogI2U2MTIxMjtcbiAgZGlzcGxheTogdGFibGUtZm9vdGVyO1xuICBib3JkZXItY29sb3I6IGluaGVyaXQ7XG59XG5cbi5leGFtcGxlLWZvcm0ge1xuICBwYWRkaW5nLXRvcDogMjBweDtcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAyMyU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNjNDJkMmQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNWVlZjE7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNvbnRhaW5lciB7XG4gIG1hcmdpbi10b3A6IDElO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uYXZiYXIge1xuICAvKiAgKi9cbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG5zcGFuIHtcbiAgcGFkZGluZy1yaWdodDogMXJlbTtcbn1cblxuLm5ld2J1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwLjRlbSAwLjRlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5uZXdidXR0b246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjczOGExLCAjZTBiOTRlKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXMgZWFzZSwgdHJhbnNmb3JtIDAuMnMgZWFzZTtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKHZhcigtLXR5LCAwKSkgcm90YXRlWCh2YXIoLS1yeCwgMCkpIHJvdGF0ZVkodmFyKC0tcnksIDApKSB0cmFuc2xhdGVaKHZhcigtLXR6LCAtMTJweCkpO1xufVxuLm5ld2J1dHRvbjpob3Zlcjo6YmVmb3JlIHtcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG4ubmV3YnV0dG9uOjphZnRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKHZhcigtLXR5LCAwKSkgcm90YXRlWCh2YXIoLS1yeCwgMCkpIHJvdGF0ZVkodmFyKC0tcnksIDApKTtcbn1cblxuaDQge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50aCB7XG4gIC8qIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICovXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxudGFibGUgdGQge1xuICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xufVxuXG4jY3VzdG9tZXJzIHtcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbiNjdXN0b21lcnMgdGQsICNjdXN0b21lcnMgdGgge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiA4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiB4eC1zbWFsbDtcbn1cblxuI2N1c3RvbWVycyB0ZCBtYXQtY2hpcCB7XG4gIGZvbnQtc2l6ZTogeHgtc21hbGw7XG59XG5cbiNjdXN0b21lcnMgdHI6bnRoLWNoaWxkKGV2ZW4pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbn1cblxuI2N1c3RvbWVycyB0aCB7XG4gIHBhZGRpbmctdG9wOiA4cHg7XG4gIHBhZGRpbmctYm90dG9tOiA5cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2MWIyZDg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLndyYXBwZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qXG4qY3NzIGFkZGVkIGJ5IGRldiBvbiAxMi9ub3ZcbiovXG5tYXQtY2FyZCAuaGFoYWhhIHtcbiAgd2lkdGg6IDMzMHB4O1xuICBoZWlnaHQ6IDI1MHB4O1xufVxuXG5tYXQtY2FyZCBtYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxubWF0LWNhcmQgYSB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxubWF0LWNhcmQgcCB7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn1cblxubWF0LWNhcmQgLmhhaGFoYSB7XG4gIHdpZHRoOiA1MzBweDtcbiAgaGVpZ2h0OiA1MHB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/views/excel-data-processing/excel-data-processing.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/views/excel-data-processing/excel-data-processing.component.ts ***!
    \********************************************************************************/

  /*! exports provided: ExcelDataProcessingComponent, ResponseData */

  /***/
  function srcAppViewsExcelDataProcessingExcelDataProcessingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExcelDataProcessingComponent", function () {
      return ExcelDataProcessingComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResponseData", function () {
      return ResponseData;
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


    var src_app_shared_models_excel_data_processing_resp_dto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/shared/models/excel-data-processing-resp-dto */
    "./src/app/shared/models/excel-data-processing-resp-dto.ts");
    /* harmony import */


    var src_app_shared_models_excel_data_processing_dto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/models/excel-data-processing-dto */
    "./src/app/shared/models/excel-data-processing-dto.ts");
    /* harmony import */


    var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/api.service */
    "./src/app/shared/services/api.service.ts");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _excel_data_processing_dto__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./excel-data-processing-dto */
    "./src/app/views/excel-data-processing/excel-data-processing-dto.ts");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var _users_users_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../users/users.service */
    "./src/app/views/users/users.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/shared/services/excel.service */
    "./src/app/shared/services/excel.service.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _roles1_roles_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../roles1/roles.service */
    "./src/app/views/roles1/roles.service.ts");
    /* harmony import */


    var _roles1_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../roles1/models/fmosNewRolePermissions */
    "./src/app/views/roles1/models/fmosNewRolePermissions.ts");
    /* harmony import */


    var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! src/environments/environment.prod */
    "./src/environments/environment.prod.ts");
    /* harmony import */


    var _transaction_group_maintenance_transaction_group_maintenance_service_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ../transaction-group-maintenance/transaction-group-maintenance-service.service */
    "./src/app/views/transaction-group-maintenance/transaction-group-maintenance-service.service.ts");

    var ExcelDataProcessingComponent = /*#__PURE__*/function () {
      function ExcelDataProcessingComponent(api, testSer, dialog, userApi, snackBar, excelService, roleService) {
        _classCallCheck(this, ExcelDataProcessingComponent);

        this.api = api;
        this.testSer = testSer;
        this.dialog = dialog;
        this.userApi = userApi;
        this.snackBar = snackBar;
        this.excelService = excelService;
        this.roleService = roleService;
        this.allExternalSystemNames = [];
        this.space = false;
        this.excelDataProcessingAuditlog = new _excel_data_processing_dto__WEBPACK_IMPORTED_MODULE_7__["ExcelDataProcessingAuditRespDTO"]();
        this.allFileNames = [];
        this.selectorDateData = new Date();
        this.selected = 'option2';
        this.listMedMaster = new Array();
        this.excelDataProcessingRespDTO = new src_app_shared_models_excel_data_processing_resp_dto__WEBPACK_IMPORTED_MODULE_2__["ExcelDataProcessingRespDTO"]();
        this.excelDataProcessingReqDTO = new src_app_shared_models_excel_data_processing_dto__WEBPACK_IMPORTED_MODULE_3__["ExcelDataProcessingReqDTO"]();
        this.button_permission = {};
        this.button = true;
        this.flag = false;
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_10__["DatePipe"]('en-US');
        this.now = Date.now();
        this.myFormattedDate = this.pipe.transform(this.now, 'dd-MMM-yy');
        this.roleCodes = new _roles1_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_14__["permissionsLabels"](); //  this.selectorDateData = this.datePipe.transform(this.selectorDateData, 'yyyy-MM-dd');
      }

      _createClass(ExcelDataProcessingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          console.log(this.myFormattedDate);
          setTimeout(function () {
            _this.newRolePermissions();
          }, 2000);
          this.roleService.screenLabelList.subscribe(function (message) {
            return _this.roleCodes = message;
          });
          this.user_id = sessionStorage.getItem('user_id');
          this.role = sessionStorage.getItem('user_role'); //this.screenpermission();

          this.getTrnCodeArray();
          this.extSysNameData = '';
          this.processNameData = '';
          this.fileNameData = '';
          this.getAllExternalSystemNames();
          console.log('user id', this.user_id);
        }
      }, {
        key: "getAuditLogData",
        value: function getAuditLogData(excelDataProcessingReqDTO) {
          var _this2 = this;

          this.api.getAuditLogService(excelDataProcessingReqDTO, this.user_id).subscribe(function (resp) {
            _this2.excelDataProcessingAuditlog = resp; // //console.log('audit data: ');
            //// console.log('Audit log data' + this.excelDataProcessingAuditlog);

            if (_this2.excelDataProcessingAuditlog) {
              _this2.auditdata = true;

              if (_this2.excelDataProcessingAuditlog.recordStatus === 'P') {
                _this2.excelDataProcessingAuditlog.recordStatus = 'PROCESSED';
              }

              if (_this2.excelDataProcessingAuditlog.recordStatus === 'D') {
                _this2.excelDataProcessingAuditlog.recordStatus = 'DELETED';
              }

              if (_this2.excelDataProcessingAuditlog.recordStatus === 'U') {
                _this2.excelDataProcessingAuditlog.recordStatus = 'UNPROCESSED';
              }
            }
          });
        } // openSnackBar(message: string, action: string) {
        //   this.snackBar.open(message, action, {
        //     duration: 2000
        //   });
        // }

      }, {
        key: "refreshGl",
        value: function refreshGl() {
          var _this3 = this;

          var url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_15__["environment"].MEDIAN_URL;
          this.userApi.refreshGl().subscribe(function (data) {
            _this3.data = data;
            console.log(_this3.data);
          });
        }
      }, {
        key: "newRolePermissions",
        value: function newRolePermissions() {
          this.roleService.fetchScreenPermissions('Upload Excel');
        }
      }, {
        key: "doFirstValidation",
        value: function doFirstValidation() {
          var _this4 = this;

          this.button = false;
          console.log('method call');

          if (!this.trncode) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Enter Data for Trnsaction Code.');
            return;
          }

          if (this.enablefilebrowser) {
            if (!this.selectedFiles) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Please select a file to upload.');
              return;
            }
          }

          this.spinner = true;

          if (this.extSysNameData === '' || this.processNameData === '' || this.selectorDateData === undefined) {
            this.spinner = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
              type: 'error',
              title: 'Provide mandatory data.',
              text: 'Please fill all the details '
            });
          } else {
            this.disbaleBtn = true;
            var dateString = '1968-11-16T00:00:00';
            var newDate = new Date(dateString); // console.log(newDate);

            this.excelDataProcessingReqDTO.extSysName = this.extSysNameData;
            this.excelDataProcessingReqDTO.processName = this.processNameData;
            this.excelDataProcessingReqDTO.processingDate = newDate; // this.excelDataProcessingReqDTO.fileName = this.fileNameData;

            this.excelDataProcessingReqDTO.trnCode = this.trncode;
            console.log("calling api", this.excelDataProcessingReqDTO.fileName); // frist call
            // performance test patch

            this.api.showDetailServiceInExcelDataProcessing(this.excelDataProcessingReqDTO, this.user_id).subscribe(function (responseforfileupload) {
              //   for audit log in excel UploadProcessAuthorizationScreenPermission.
              //  this.getAuditLogData(this.excelDataProcessingReqDTO);
              _this4.responseforfileupload = responseforfileupload;
              _this4.responseDto = responseforfileupload;
              console.log("response from bc", _this4.responseforfileupload);
              console.log(_this4.responseforfileupload.batchNo);
              console.log(_this4.responseforfileupload);
              _this4.spinner = false;
              _this4.disbaleBtn = false;
              _this4.disablebtn2 = false;

              if (_this4.responseforfileupload == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Server error.');
                return;
              } // need to modify based on the list of object.list1=download data 2-response.


              _this4.spinner = false;

              if (_this4.responseforfileupload.errorMessage) {
                console.log("here is error of duplicate record");
                _this4.disablebtn2 = true;
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Unable to upload', 'Error:' + _this4.responseforfileupload.errorMessage);

                if (_this4.responseforfileupload.errorMessage === "possible duplicate data") {
                  _this4.excelDataProcessingReqDTO.proceedDuplicates = true;
                  console.log("here duplicate");
                  sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                    //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
                    text: 'You are trying to upload duplicate data. ' + ' Do you want to proceed?',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                    // confirmButtonText: 'PROCEED.'
                    cancelButtonText: 'NO',
                    confirmButtonText: 'YES.'
                  }).then(function (result) {
                    if (result.value) {
                      _this4.api.showDetailServiceInExcelDataProcessing(_this4.excelDataProcessingReqDTO, _this4.user_id).subscribe(function (dupliacteResp) {
                        console.log("dupliacteResp", dupliacteResp); // Swal.fire('Unable to process', 'Error ' + this.responseforfileupload.errorMessage);

                        _this4.responseforfileupload = dupliacteResp; // added by vidya M B for the issue 0001047

                        if (_this4.responseforfileupload.errorMessage === "Amount and LCY amount mismatch") {
                          sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Unable to upload', 'Error:' + _this4.responseforfileupload.errorMessage);
                        }

                        if (_this4.responseDto.totalNoOfRecords !== 0) {
                          sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                            title: "Data uploaded successfully ",
                            text: "For the Batch " + _this4.responseDto.batchNo
                          });
                          _this4.excelFileFlag = true;
                          console.log("excelFileFlag value ", _this4.excelFileFlag);
                          _this4.flag = false;
                          _this4.isShow = true;
                        }
                      });
                    }
                  });
                }

                _this4.flag = true;
                _this4.disbaleBtn = true;
              }

              _this4.valueDate = _this4.responseforfileupload.valueDate == "Today" ? "Today" : "not Today";
              _this4.spinner = false;
              _this4.responsebutton = true;
              _this4.spinner = false;
              _this4.responseDto = _this4.responseforfileupload;

              if (_this4.responseDto.totalNoOfRecords !== 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                  title: "Data uploaded successfully ",
                  text: "For the Batch " + _this4.responseDto.batchNo
                });
                _this4.excelFileFlag = true;
                _this4.flag = false;
                _this4.isShow = true;
              }
            }, function (err) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('server error.');
            }); // first api call
          }
        } // openDialog() {
        //   this.doFirstValidation();
        // }

      }, {
        key: "getAllExternalSystemNames",
        value: function getAllExternalSystemNames() {
          var _this5 = this;

          this.api.getAllExtSysNamesService(this.user_id).subscribe(function (resp) {
            //// console.log(resp);
            _this5.allExternalSystemNames = resp;
          });
        }
      }, {
        key: "resetEntries",
        value: function resetEntries() {
          this.extSysNameData = '';
          this.processNameData = '';
          this.fileNameData = '';
          this.trncode = '';
          this.enablefilebrowser = false;
          this.button = true;
          this.disablebtn2 = false;
          this.excelDataProcessingReqDTO.fileName = '';
          this.disbaleBtn = false;
          this.excelDataProcessingReqDTO.proceedDuplicates = false; // this.excelDataProcessingAuditlog = new ExcelDataProcessingAuditRespDTO();
        }
      }, {
        key: "valuechange",
        value: function valuechange($event) {
          if (this.disablebtn2) {
            this.disbaleBtn = false;
          }

          console.log('event', this.disablebtn2);
        }
      }, {
        key: "getFileNamesBasedOnExtSysNameAndProcessName",
        value: function getFileNamesBasedOnExtSysNameAndProcessName(extSysName, processName) {
          var _this6 = this;

          if (this.disablebtn2) {
            this.disbaleBtn = false;
          } // console.log('inside getFileName', extSysName, processName);


          this.api.getUploadPermission(extSysName, processName).subscribe(function (resp) {
            _this6.permission = resp; // console.log('all file names', this.permission);

            if (_this6.permission[0] == 'false') {
              // console.log('true');
              _this6.enablefilebrowser = true; // console.log(this.enablefilebrowser);
            } else {
              // console.log('false');
              _this6.enablefilebrowser = false; // console.log(this.enablefilebrowser);
            }
          });
        }
      }, {
        key: "getProcessNamesBasedOnExtSysNameForUpload",
        value: function getProcessNamesBasedOnExtSysNameForUpload(extSysName) {
          var _this7 = this;

          //// console.log('inside get ProcessName');
          if (this.disablebtn2) {
            this.disbaleBtn = false;
          }

          this.api.getProcessNamesBasedOnExtSysNameService(extSysName).subscribe(function (resp) {
            //// console.log(resp);
            _this7.processNames = resp;
          });
        }
      }, {
        key: "getTrnCode",
        value: function getTrnCode(trncode) {
          if (this.disablebtn2) this.disbaleBtn = false; // console.log(trncode);
        }
      }, {
        key: "getTrnCodeArray",
        value: function getTrnCodeArray() {
          var _this8 = this;

          // this.trnCodeArray = ["ram","mohan"];
          this.api.getAllTransactionCode(this.user_id).subscribe(function (res) {
            _this8.trnCodeArray = res;
            console.log(_this8.trnCodeArray);
          });
        }
      }, {
        key: "deleteDataService",
        value: function deleteDataService(remarks) {
          this.flag = false;
          sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('data deleted successfully.');
          this.exit(); // this.modalDeleteDataReqDTO = new ModalDelDataReqDTO();
          // this.modalDeleteDataReqDTO.totalCreditAmount = this.responseDto.totalCreditAmount;
          // this.modalDeleteDataReqDTO.totalDebitAmount = this.responseDto.totalDebitAmount;
          // this.modalDeleteDataReqDTO.sumAmount = this.responseDto.sumAmount;
          // this.modalDeleteDataReqDTO.totalNoOfRecords = this.responseDto.totalNoOfRecords;
          // this.modalDeleteDataReqDTO.batchNo = this.responseDto.batchNo;
          // this.modalDeleteDataReqDTO.branchCode = this.responseDto.branchCode;
          // this.modalDeleteDataReqDTO.deletionComment = this.reasonOfDeletion;
          // // //console.log(
          // //   "delete data req object: " + this.modalDeleteDataReqDTO.deletionComment
          // // );
          // this.api.deleteDataService(this.modalDeleteDataReqDTO, localStorage.getItem("currentUser"), this.remarks).subscribe(resp => {
          //   //console.log(resp);
          //   this.processDataStatus = resp;
          //   if (this.processDataStatus === true) {
          //     this.openSnackBar(
          //       "Data Assigned For Deletion.   STATUS :",
          //       "Success  !!!!"
          //     );
          //   }
          //   if (this.processDataStatus === false) {
          //     this.openSnackBar(
          //       "Data Assigned For Deletion.   STATUS :",
          //       "Failed  !!!!"
          //     );
          //   }
          // });
        }
      }, {
        key: "Datacheck",
        value: function Datacheck() {
          var _this9 = this;

          console.log("valueDate", this.valueDate);

          if (this.valueDate != "Today") {
            this.processDataService();
          } else {
            if (this.responseDto.totalNoOfRecords == 0) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('total no. of record is 0', 'Unable to process.');
              return;
            }

            if (!this.remarks) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Remark is mandatory for process.');
              return;
            }

            this.flag = true; // this.responseforfileupload.excelData .forEach(element => {
            //   element.inputBy=this.user_id;
            // });

            this.api.processDataService(this.responseforfileupload, this.user_id, this.remarks).subscribe(function (resp) {
              _this9.processDataStatus = resp;
              console.log('this.processDataStatus');

              if (_this9.processDataStatus) {
                // Swal.fire('Data processed Successfully.', 'you can view data in Process Excel Screen.');
                // Swal.fire("Data uploaded successfully.")
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                  title: "Data processed successfully",
                  text: "For the Batch " + _this9.responseDto.batchNo
                });
                _this9.isShow = true;
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Unable to process.');
              }
            });
          }
        }
      }, {
        key: "processDataService",
        value: function processDataService() {
          var _this10 = this;

          // console.log(this.responseforfileupload);
          // value date popup
          sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
            text: 'Value Date is ' + this.responseDto.valueDate + ' in few or all uploading records. Would you like to proceed?',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'PROCEED.'
          }).then(function (result) {
            console.log(result.value);

            if (result.value) {
              console.log('user choose to proceed.');

              if (_this10.responseDto.totalNoOfRecords == 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('total no. of record is 0', 'Unable to process.');
                return;
              }

              if (!_this10.remarks) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Remark is mandatory for process.');
                return;
              }

              _this10.flag = true; // this.responseforfileupload.excelData .forEach(element => {
              //   element.inputBy=this.user_id;
              // });

              _this10.api.processDataService(_this10.responseforfileupload, _this10.user_id, _this10.remarks).subscribe(function (resp) {
                _this10.processDataStatus = resp;
                console.log('this.processDataStatus');

                if (_this10.processDataStatus) {
                  // Swal.fire('Data processed Successfully.', 'you can view data in Process Excel Screen.');
                  // Swal.fire("Data uploaded successfully.")
                  sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                    title: "Data processed successfully",
                    text: "For the Batch " + _this10.responseDto.batchNo
                  });
                  _this10.isShow = true;
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Unable to process.');
                }
              });
            } else {
              return;
            }
          });
        }
      }, {
        key: "downloadData",
        value: function downloadData() {
          console.log("this.responseforfileupload.fileDownloadUrl", this.responseforfileupload.fileDownloadUrl);
          var link = document.createElement('a');
          link.setAttribute('target', '_blank');
          link.setAttribute('href', "".concat(this.responseforfileupload.fileDownloadUrl));
          var url = "".concat(this.responseforfileupload.fileDownloadUrl);
          var filename = url.substring(url.lastIndexOf('/') + 1);
          link.setAttribute('download', "".concat(filename));
          document.body.appendChild(link);
          link.click();
          link.remove();
        }
      }, {
        key: "exit",
        value: function exit() {
          this.responsebutton = false;
        }
      }, {
        key: "checkCheckBoxvalue",
        value: function checkCheckBoxvalue(event) {
          // console.log(event.checked);
          if (this.permission[0] == 'false') {
            if (!this.enablefilebrowser) {
              this.enablefilebrowser = true;
            } else {
              this.enablefilebrowser = false;
            } // console.log( this.enablefilebrowser);

          }
        }
      }, {
        key: "getFiledata",
        value: function getFiledata(event, extSysNameData, processNameData, filename) {
          var _this11 = this;

          console.log(event.target.value);

          if (!filename) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Enter the file name .');
            this.resetEntries();
            return;
          }

          if (!extSysNameData && !processNameData && !filename) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Enter all the field.');
          }

          console.log('getFiledatafilename', filename);
          this.selectedFiles = event.target.files;
          this.api.showDetailServiceInExcelDataWithFile(this.selectedFiles.item(0), extSysNameData, processNameData, filename).subscribe(function (responseforfileupload) {
            _this11.responseforfileupload = responseforfileupload; // console.log(this.responseforfileupload);

            if (event) {
              if (event.status == 200) {
                if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_12__["HttpResponse"]) {
                  // console.log('method call', event.body);
                  sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire(event.body);
                }
              }
            }
          });
        }
      }, {
        key: "fun",
        value: function fun(extSysName) {
          console.log(extSysName);
          console.log("enters inside fn");
          var result = extSysName.trim();
          console.log(result);

          if (result) {
            console.log("valid string");
            this.space = true;
            console.log(this.space);
          } else {
            console.log("invalid string");
            this.space = false; // this.submitted = false;

            console.log(this.space);
          }
        }
      }]);

      return ExcelDataProcessingComponent;
    }();

    ExcelDataProcessingComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _transaction_group_maintenance_transaction_group_maintenance_service_service__WEBPACK_IMPORTED_MODULE_16__["TransactionGroupMaintenanceServiceService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }, {
        type: _users_users_service__WEBPACK_IMPORTED_MODULE_9__["UsersService"]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }, {
        type: src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_11__["ExcelService"]
      }, {
        type: _roles1_roles_service__WEBPACK_IMPORTED_MODULE_13__["RoleService"]
      }];
    };

    ExcelDataProcessingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-excel-data-processing',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./excel-data-processing.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/excel-data-processing/excel-data-processing.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./excel-data-processing.component.scss */
      "./src/app/views/excel-data-processing/excel-data-processing.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _transaction_group_maintenance_transaction_group_maintenance_service_service__WEBPACK_IMPORTED_MODULE_16__["TransactionGroupMaintenanceServiceService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], _users_users_service__WEBPACK_IMPORTED_MODULE_9__["UsersService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_11__["ExcelService"], _roles1_roles_service__WEBPACK_IMPORTED_MODULE_13__["RoleService"]])], ExcelDataProcessingComponent);

    var ResponseData = function ResponseData() {
      _classCallCheck(this, ResponseData);
    };
    /***/

  },

  /***/
  "./src/app/views/excel-data-processing/excel-data-processing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/views/excel-data-processing/excel-data-processing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: ExcelDataProcessingModule */

  /***/
  function srcAppViewsExcelDataProcessingExcelDataProcessingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExcelDataProcessingModule", function () {
      return ExcelDataProcessingModule;
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


    var _excel_data_processing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./excel-data-processing.component */
    "./src/app/views/excel-data-processing/excel-data-processing.component.ts");
    /* harmony import */


    var _modals_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../modals/modal-dialog/modal-dialog.component */
    "./src/app/views/modals/modal-dialog/modal-dialog.component.ts");
    /* harmony import */


    var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _excel_data_processing_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./excel-data-processing-routing.module */
    "./src/app/views/excel-data-processing/excel-data-processing-routing.module.ts");
    /* harmony import */


    var src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/angular-material/angular-material.module */
    "./src/app/shared/angular-material/angular-material.module.ts");
    /* harmony import */


    var _excel_upload_dialog_excel_upload_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./excel-upload-dialog/excel-upload-dialog.component */
    "./src/app/views/excel-data-processing/excel-upload-dialog/excel-upload-dialog.component.ts");
    /* harmony import */


    var _value_date_error_value_date_error_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./value-date-error/value-date-error.component */
    "./src/app/views/excel-data-processing/value-date-error/value-date-error.component.ts");

    var ExcelDataProcessingModule = function ExcelDataProcessingModule() {
      _classCallCheck(this, ExcelDataProcessingModule);
    };

    ExcelDataProcessingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_excel_data_processing_component__WEBPACK_IMPORTED_MODULE_3__["ExcelDataProcessingComponent"], _modals_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ModalDialogComponent"], _excel_upload_dialog_excel_upload_dialog_component__WEBPACK_IMPORTED_MODULE_9__["ExcelUploadDialogComponent"], _value_date_error_value_date_error_component__WEBPACK_IMPORTED_MODULE_10__["ValueDateErrorComponent"]],
      entryComponents: [_modals_modal_dialog_modal_dialog_component__WEBPACK_IMPORTED_MODULE_4__["ModalDialogComponent"], _value_date_error_value_date_error_component__WEBPACK_IMPORTED_MODULE_10__["ValueDateErrorComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(_excel_data_processing_routing_module__WEBPACK_IMPORTED_MODULE_7__["excelDataProcessingRoutes"]), src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_8__["AngularMaterialModule"]]
    })], ExcelDataProcessingModule);
    /***/
  },

  /***/
  "./src/app/views/excel-data-processing/excel-upload-dialog/excel-upload-dialog.component.css":
  /*!***************************************************************************************************!*\
    !*** ./src/app/views/excel-data-processing/excel-upload-dialog/excel-upload-dialog.component.css ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsExcelDataProcessingExcelUploadDialogExcelUploadDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2V4Y2VsLWRhdGEtcHJvY2Vzc2luZy9leGNlbC11cGxvYWQtZGlhbG9nL2V4Y2VsLXVwbG9hZC1kaWFsb2cuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/views/excel-data-processing/excel-upload-dialog/excel-upload-dialog.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/views/excel-data-processing/excel-upload-dialog/excel-upload-dialog.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: ExcelUploadDialogComponent */

  /***/
  function srcAppViewsExcelDataProcessingExcelUploadDialogExcelUploadDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExcelUploadDialogComponent", function () {
      return ExcelUploadDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ExcelUploadDialogComponent = /*#__PURE__*/function () {
      function ExcelUploadDialogComponent() {
        _classCallCheck(this, ExcelUploadDialogComponent);
      }

      _createClass(ExcelUploadDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ExcelUploadDialogComponent;
    }();

    ExcelUploadDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-excel-upload-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./excel-upload-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/excel-data-processing/excel-upload-dialog/excel-upload-dialog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./excel-upload-dialog.component.css */
      "./src/app/views/excel-data-processing/excel-upload-dialog/excel-upload-dialog.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ExcelUploadDialogComponent);
    /***/
  },

  /***/
  "./src/app/views/excel-data-processing/value-date-error/value-date-error.component.css":
  /*!*********************************************************************************************!*\
    !*** ./src/app/views/excel-data-processing/value-date-error/value-date-error.component.css ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsExcelDataProcessingValueDateErrorValueDateErrorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2V4Y2VsLWRhdGEtcHJvY2Vzc2luZy92YWx1ZS1kYXRlLWVycm9yL3ZhbHVlLWRhdGUtZXJyb3IuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/views/excel-data-processing/value-date-error/value-date-error.component.ts":
  /*!********************************************************************************************!*\
    !*** ./src/app/views/excel-data-processing/value-date-error/value-date-error.component.ts ***!
    \********************************************************************************************/

  /*! exports provided: ValueDateErrorComponent */

  /***/
  function srcAppViewsExcelDataProcessingValueDateErrorValueDateErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ValueDateErrorComponent", function () {
      return ValueDateErrorComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/api.service */
    "./src/app/shared/services/api.service.ts");

    var ValueDateErrorComponent = /*#__PURE__*/function () {
      function ValueDateErrorComponent(api, dialogRef, router, data) {
        _classCallCheck(this, ValueDateErrorComponent);

        this.api = api;
        this.dialogRef = dialogRef;
        this.router = router;
        this.data = data;
        this.proceedDuplicates = false;
        this.user_id = sessionStorage.getItem('user_id');
      }

      _createClass(ValueDateErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("errormessage", this.data);
        }
      }, {
        key: "onProceed",
        value: function onProceed() {
          this.data.excelDataProcessingObj.proceedDuplicates = true;
          console.log(this.data.excelDataProcessingObj);
          this.api.showDetailServiceInExcelDataProcessing(this.data.excelDataProcessingObj, this.user_id).subscribe(function (proceedResp) {
            console.log(proceedResp);
          });
        }
      }]);

      return ValueDateErrorComponent;
    }();

    ValueDateErrorComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }];
    };

    ValueDateErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-value-date-error',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./value-date-error.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/excel-data-processing/value-date-error/value-date-error.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./value-date-error.component.css */
      "./src/app/views/excel-data-processing/value-date-error/value-date-error.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], Object])], ValueDateErrorComponent);
    /***/
  },

  /***/
  "./src/app/views/modals/modal-dialog/modal-delete-data-req-dto.ts":
  /*!************************************************************************!*\
    !*** ./src/app/views/modals/modal-dialog/modal-delete-data-req-dto.ts ***!
    \************************************************************************/

  /*! exports provided: ModalDelDataReqDTO */

  /***/
  function srcAppViewsModalsModalDialogModalDeleteDataReqDtoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalDelDataReqDTO", function () {
      return ModalDelDataReqDTO;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ModalDelDataReqDTO = function ModalDelDataReqDTO() {
      _classCallCheck(this, ModalDelDataReqDTO);
    };
    /***/

  },

  /***/
  "./src/app/views/modals/modal-dialog/modal-dialog.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/views/modals/modal-dialog/modal-dialog.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsModalsModalDialogModalDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "h2 {\n  color: #b60c61;\n  font-family: Impact, Charcoal, sans-serif;\n  font-size: 18px;\n  font-weight: bold;\n  margin-top: 0px;\n  margin-bottom: 1px;\n}\n\ndiv {\n  border-radius: 2px;\n  background-color: #f2f2f2;\n  padding: 4px;\n}\n\n.div label {\n  display: inline-block;\n  text-align: right;\n}\n\n.button-good {\n  position: relative;\n  display: inline-block;\n  padding: 0.8em 0.8em;\n  text-decoration: none;\n  text-align: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: white;\n}\n\n.button-good::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: linear-gradient(135deg, #6e8efb, #a777e3);\n  border-radius: 4px;\n  transition: box-shadow 0.5s ease, transform 0.2s ease;\n  will-change: transform;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0)) rotateY(var(--ry, 0)) translateZ(var(--tz, -12px));\n}\n\n.button-good:hover::before {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n}\n\n.button-good::after {\n  position: relative;\n  display: inline-block;\n  content: attr(data-title);\n  transition: transform 0.2s ease;\n  font-weight: bold;\n  letter-spacing: 0.01em;\n  will-change: transform;\n  transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0)) rotateY(var(--ry, 0));\n}\n\n.newbutton {\n  position: relative;\n  display: inline-block;\n  padding: 0.8em 0.8em;\n  text-decoration: none;\n  text-align: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: white;\n}\n\n.newbutton::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: linear-gradient(135deg, #f738a1, #e0b94e);\n  border-radius: 4px;\n  transition: box-shadow 0.5s ease, transform 0.2s ease;\n  will-change: transform;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0)) rotateY(var(--ry, 0)) translateZ(var(--tz, -12px));\n}\n\n.newbutton:hover::before {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n}\n\n.newbutton::after {\n  position: relative;\n  display: inline-block;\n  content: attr(data-title);\n  transition: transform 0.2s ease;\n  font-weight: bold;\n  letter-spacing: 0.01em;\n  will-change: transform;\n  transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0)) rotateY(var(--ry, 0));\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.no-hover-effect.mat-raised-button {\n  background-color: #ec7f5d;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 20px;\n  line-height: 27px;\n  min-height: 27px;\n  vertical-align: top;\n  font-size: 11px;\n  padding: 0 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbW9kYWxzL21vZGFsLWRpYWxvZy9GOlxcbXV0aHUtb25ib2FyZFxcbWVkaWFuLXBoMi11aS9zcmNcXGFwcFxcdmlld3NcXG1vZGFsc1xcbW9kYWwtZGlhbG9nXFxtb2RhbC1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3ZpZXdzL21vZGFscy9tb2RhbC1kaWFsb2cvbW9kYWwtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0VGOztBREFBO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtBQ0dGOztBRERBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLFlBQUE7QUNJRjs7QURGRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxxREFBQTtFQUNBLGtCQUFBO0VBQ0EscURBQUE7RUFDQSxzQkFBQTtFQUNBLHdDQUFBO0VBQ0EsNEdBQUE7QUNJSjs7QURBRTtFQUNFLHlDQUFBO0FDRUo7O0FEQ0U7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLCtFQUFBO0FDQ0o7O0FER0E7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREVFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHFEQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtFQUNBLHNCQUFBO0VBQ0Esd0NBQUE7RUFDQSw0R0FBQTtBQ0FKOztBRElFO0VBQ0UseUNBQUE7QUNGSjs7QURLRTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0VBQUE7QUNISjs7QURPQTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0FDSkY7O0FET0E7RUFDRSxXQUFBO0FDSkY7O0FETUE7RUFDRSx5QkFBQTtFQUNBLDBCQUFBO0VBQUEsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL21vZGFscy9tb2RhbC1kaWFsb2cvbW9kYWwtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xyXG4gIGNvbG9yOiAjYjYwYzYxO1xyXG4gIGZvbnQtZmFtaWx5OiBJbXBhY3QsIENoYXJjb2FsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG59XHJcbmRpdiB7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XHJcbiAgcGFkZGluZzogNHB4O1xyXG59XHJcbi5kaXYgbGFiZWwge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4uYnV0dG9uLWdvb2Qge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMC44ZW0gMC44ZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2ZThlZmIsICNhNzc3ZTMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2U7XHJcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSh2YXIoLS10eSwgMCkpIHJvdGF0ZVgodmFyKC0tcngsIDApKVxyXG4gICAgICByb3RhdGVZKHZhcigtLXJ5LCAwKSkgdHJhbnNsYXRlWih2YXIoLS10eiwgLTEycHgpKTtcclxuICB9XHJcblxyXG4gICY6aG92ZXI6OmJlZm9yZSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICB9XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSh2YXIoLS10eSwgMCkpIHJvdGF0ZVgodmFyKC0tcngsIDApKVxyXG4gICAgICByb3RhdGVZKHZhcigtLXJ5LCAwKSk7XHJcbiAgfVxyXG59XHJcbi5uZXdidXR0b24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogMC44ZW0gMC44ZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmNzM4YTEsICNlMGI5NGUpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2U7XHJcbiAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSh2YXIoLS10eSwgMCkpIHJvdGF0ZVgodmFyKC0tcngsIDApKVxyXG4gICAgICByb3RhdGVZKHZhcigtLXJ5LCAwKSkgdHJhbnNsYXRlWih2YXIoLS10eiwgLTEycHgpKTtcclxuICB9XHJcblxyXG4gICY6aG92ZXI6OmJlZm9yZSB7XHJcbiAgICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICB9XHJcblxyXG4gICY6OmFmdGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xyXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSh2YXIoLS10eSwgMCkpIHJvdGF0ZVgodmFyKC0tcngsIDApKVxyXG4gICAgICByb3RhdGVZKHZhcigtLXJ5LCAwKSk7XHJcbiAgfVxyXG59XHJcbi5leGFtcGxlLWZvcm0ge1xyXG4gIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLm5vLWhvdmVyLWVmZmVjdC5tYXQtcmFpc2VkLWJ1dHRvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogICNlYzdmNWQ7XHJcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xyXG4gIGhlaWdodDogMjBweDtcclxuICBsaW5lLWhlaWdodDogMjdweDtcclxuICBtaW4taGVpZ2h0OiAyN3B4O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIHBhZGRpbmc6IDAgMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcblxyXG4iLCJoMiB7XG4gIGNvbG9yOiAjYjYwYzYxO1xuICBmb250LWZhbWlseTogSW1wYWN0LCBDaGFyY29hbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5cbmRpdiB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjtcbiAgcGFkZGluZzogNHB4O1xufVxuXG4uZGl2IGxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbn1cblxuLmJ1dHRvbi1nb29kIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAuOGVtIDAuOGVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmJ1dHRvbi1nb29kOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzZlOGVmYiwgI2E3NzdlMyk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2U7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSh2YXIoLS10eSwgMCkpIHJvdGF0ZVgodmFyKC0tcngsIDApKSByb3RhdGVZKHZhcigtLXJ5LCAwKSkgdHJhbnNsYXRlWih2YXIoLS10eiwgLTEycHgpKTtcbn1cbi5idXR0b24tZ29vZDpob3Zlcjo6YmVmb3JlIHtcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG4uYnV0dG9uLWdvb2Q6OmFmdGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkodmFyKC0tdHksIDApKSByb3RhdGVYKHZhcigtLXJ4LCAwKSkgcm90YXRlWSh2YXIoLS1yeSwgMCkpO1xufVxuXG4ubmV3YnV0dG9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDAuOGVtIDAuOGVtO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm5ld2J1dHRvbjo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmNzM4YTEsICNlMGI5NGUpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cyBlYXNlLCB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkodmFyKC0tdHksIDApKSByb3RhdGVYKHZhcigtLXJ4LCAwKSkgcm90YXRlWSh2YXIoLS1yeSwgMCkpIHRyYW5zbGF0ZVoodmFyKC0tdHosIC0xMnB4KSk7XG59XG4ubmV3YnV0dG9uOmhvdmVyOjpiZWZvcmUge1xuICBib3gtc2hhZG93OiAwIDVweCAxNXB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbn1cbi5uZXdidXR0b246OmFmdGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGNvbnRlbnQ6IGF0dHIoZGF0YS10aXRsZSk7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2U7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkodmFyKC0tdHksIDApKSByb3RhdGVYKHZhcigtLXJ4LCAwKSkgcm90YXRlWSh2YXIoLS1yeSwgMCkpO1xufVxuXG4uZXhhbXBsZS1mb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm5vLWhvdmVyLWVmZmVjdC5tYXQtcmFpc2VkLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlYzdmNWQ7XG4gIHdpZHRoOiBmaXQtY29udGVudDtcbiAgaGVpZ2h0OiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjdweDtcbiAgbWluLWhlaWdodDogMjdweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgZm9udC1zaXplOiAxMXB4O1xuICBwYWRkaW5nOiAwIDA7XG4gIG1hcmdpbjogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/views/modals/modal-dialog/modal-dialog.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/views/modals/modal-dialog/modal-dialog.component.ts ***!
    \*********************************************************************/

  /*! exports provided: ModalDialogComponent */

  /***/
  function srcAppViewsModalsModalDialogModalDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalDialogComponent", function () {
      return ModalDialogComponent;
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


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _modal_process_data_req_dto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./modal-process-data-req-dto */
    "./src/app/views/modals/modal-dialog/modal-process-data-req-dto.ts");
    /* harmony import */


    var _modal_delete_data_req_dto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./modal-delete-data-req-dto */
    "./src/app/views/modals/modal-dialog/modal-delete-data-req-dto.ts");
    /* harmony import */


    var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/services/api.service */
    "./src/app/shared/services/api.service.ts");

    var ModalDialogComponent = /*#__PURE__*/function () {
      function ModalDialogComponent(data, snackBar, api) {
        _classCallCheck(this, ModalDialogComponent);

        this.data = data;
        this.snackBar = snackBar;
        this.api = api;
        this.flag = true;
        this.responseDto = this.data;
      }

      _createClass(ModalDialogComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {//console.log("From modal", this.responseDto);
        }
      }, {
        key: "deleteDataService",
        value: function deleteDataService() {
          var _this12 = this;

          this.modalDeleteDataReqDTO = new _modal_delete_data_req_dto__WEBPACK_IMPORTED_MODULE_5__["ModalDelDataReqDTO"]();
          this.modalDeleteDataReqDTO.totalCreditAmount = this.responseDto.totalCreditAmount;
          this.modalDeleteDataReqDTO.totalDebitAmount = this.responseDto.totalDebitAmount;
          this.modalDeleteDataReqDTO.sumAmount = this.responseDto.sumAmount;
          this.modalDeleteDataReqDTO.totalNoOfRecords = this.responseDto.totalNoOfRecords;
          this.modalDeleteDataReqDTO.batchNo = this.responseDto.batchNo;
          this.modalDeleteDataReqDTO.branchCode = this.responseDto.branchCode;
          this.modalDeleteDataReqDTO.deletionComment = this.remarks; // //console.log(
          //   "delete data req object: " + this.modalDeleteDataReqDTO.deletionComment
          // );

          this.api.deleteDataService(this.modalDeleteDataReqDTO, localStorage.getItem("currentUser"), this.remarks).subscribe(function (resp) {
            //console.log(resp);
            _this12.processDataStatus = resp;

            if (_this12.processDataStatus === true) {
              _this12.openSnackBar("Data Assigned For Deletion.   STATUS :", "Success  ");
            }

            if (_this12.processDataStatus === false) {
              _this12.openSnackBar("Data Assigned For Deletion.   STATUS :", "Failed  ");
            }
          });
        }
      }, {
        key: "processDataService",
        value: function processDataService() {
          this.modalProcessDataReqDTO = new _modal_process_data_req_dto__WEBPACK_IMPORTED_MODULE_4__["ModalProcessDataReqDTO"]();
          this.modalProcessDataReqDTO.totalCreditAmount = this.responseDto.totalCreditAmount;
          this.modalProcessDataReqDTO.totalDebitAmount = this.responseDto.totalDebitAmount;
          this.modalProcessDataReqDTO.sumAmount = this.responseDto.sumAmount;
          this.modalProcessDataReqDTO.totalNoOfRecords = this.responseDto.totalNoOfRecords;
          this.modalProcessDataReqDTO.batchNo = this.responseDto.batchNo;
          this.modalProcessDataReqDTO.branchCode = this.responseDto.branchCode; // //console.log(
          //   "process data req object: " + this.modalProcessDataReqDTO.branchCode
          // );
          // this.api.processDataService(this.modalProcessDataReqDTO,localStorage.getItem("currentUser"), this.remarks).subscribe(resp => {
          //   //console.log(resp);
          //   this.processDataStatus = resp;
          //   if (this.processDataStatus === true) {
          //     this.openSnackBar(
          //       "Data Assigned For process.   STATUS :",
          //       "Success  !!!!"
          //     );
          //   }
          //   if (this.processDataStatus === false) {
          //     this.openSnackBar(
          //       "Data Assigned For process.   STATUS :",
          //       "Failed  !!!!"
          //     );
          //   }
          // });
        }
      }, {
        key: "openSnackBar",
        value: function openSnackBar(message, action) {
          this.flag = false;
          this.snackBar.open(message, action, {
            duration: 2000
          });
        }
      }]);

      return ModalDialogComponent;
    }();

    ModalDialogComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
      }, {
        type: src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
      }];
    };

    ModalDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-modal-dialog",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modal-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/modals/modal-dialog/modal-dialog.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modal-dialog.component.scss */
      "./src/app/views/modals/modal-dialog/modal-dialog.component.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]])], ModalDialogComponent);
    /***/
  },

  /***/
  "./src/app/views/modals/modal-dialog/modal-process-data-req-dto.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/views/modals/modal-dialog/modal-process-data-req-dto.ts ***!
    \*************************************************************************/

  /*! exports provided: ModalProcessDataReqDTO */

  /***/
  function srcAppViewsModalsModalDialogModalProcessDataReqDtoTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalProcessDataReqDTO", function () {
      return ModalProcessDataReqDTO;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var ModalProcessDataReqDTO = function ModalProcessDataReqDTO() {
      _classCallCheck(this, ModalProcessDataReqDTO);
    };
    /***/

  }
}]);
//# sourceMappingURL=views-excel-data-processing-excel-data-processing-module-es5.js.map