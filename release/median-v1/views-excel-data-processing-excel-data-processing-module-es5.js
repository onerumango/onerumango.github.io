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


    __webpack_exports__["default"] = "h1 {\n  color: #b60c61;\n  font-family: Impact, Charcoal, sans-serif;\n  font-size: 32px;\n  font-weight: bold;\n  margin-top: 0px;\n  margin-bottom: 1px;\n}\n\n.upload-btn-wrapper {\n  position: relative;\n  overflow: hidden;\n  display: inline-block;\n  color: green;\n}\n\n.btn {\n  border: 2px solid gray;\n  color: #3a16d6;\n  background-color: white;\n  padding: 8px 20px;\n  border-radius: 8px;\n  font-size: 30px;\n  font-weight: bold;\n}\n\n.button1 {\n  background-color: #534caf;\n  color: #f0e7e7;\n  border: 2px solid #4CAF50;\n}\n\n.button1:hover {\n  background-color: #4CAF50;\n  color: white;\n}\n\na {\n  position: relative;\n  display: inline-block;\n  padding: 0.4em 0.4em;\n  text-decoration: none;\n  text-align: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: white;\n}\n\na::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: linear-gradient(135deg, #6e8efb, #a777e3);\n  border-radius: 4px;\n  transition: box-shadow 0.5s ease, transform 0.2s ease;\n  will-change: transform;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0)) rotateY(var(--ry, 0)) translateZ(var(--tz, -12px));\n}\n\na:hover::before {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n}\n\na::after {\n  position: relative;\n  display: inline-block;\n  content: attr(data-title);\n  transition: transform 0.2s ease;\n  font-weight: bold;\n  letter-spacing: 0.01em;\n  will-change: transform;\n  transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0)) rotateY(var(--ry, 0));\n}\n\nbody {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  transform-style: preserve-3d;\n  transform: perspective(800px);\n}\n\n#tabledata {\n  border-collapse: collapse;\n  font-family: \"Trebuchet MS\", Arial, Helvetica, sans-serif;\n  border-collapse: collapse;\n  width: 100%;\n  /* table-layout: fixed; */\n  max-width: 1200px;\n  max-height: 1200px;\n  overflow-x: auto;\n  overflow-y: scroll;\n  display: block;\n  /*   overflow: scroll; Scrollbar are always visible */\n  /* overflow: auto;   */\n}\n\n#tabledata #test {\n  margin-right: 200px;\n}\n\n#tabledata .example-fill-remaining-space {\n  flex: 1 1 auto;\n}\n\n#tabledata td, #tabledata th {\n  border: 1px solid #ddd;\n  padding: 8px;\n}\n\n#tabledata tr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n#tabledata tr:hover {\n  background-color: #ddd;\n}\n\n#tabledata th {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  text-align: left;\n  background-color: #4CAF50;\n  color: white;\n}\n\n#tabledata tfoot {\n  background: #eae8ee;\n  color: #e61212;\n  display: table-footer;\n  border-color: inherit;\n}\n\n.example-form {\n  padding-top: 20px;\n  padding-bottom: 20px;\n  min-width: 150px;\n  max-width: 500px;\n  width: 50%;\n  margin-left: 23%;\n  border: 2px solid #c42d2d;\n  background-color: #e5eef1;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.container {\n  margin-top: 1%;\n  text-align: center;\n}\n\n.navbar {\n  /*  */\n  justify-content: space-between;\n}\n\nspan {\n  padding-right: 1rem;\n}\n\n.newbutton {\n  position: relative;\n  display: inline-block;\n  padding: 0.4em 0.4em;\n  text-decoration: none;\n  text-align: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: white;\n}\n\n.newbutton::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: linear-gradient(135deg, #f738a1, #e0b94e);\n  border-radius: 4px;\n  transition: box-shadow 0.5s ease, transform 0.2s ease;\n  will-change: transform;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0)) rotateY(var(--ry, 0)) translateZ(var(--tz, -12px));\n}\n\n.newbutton:hover::before {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n}\n\n.newbutton::after {\n  position: relative;\n  display: inline-block;\n  content: attr(data-title);\n  transition: transform 0.2s ease;\n  font-weight: bold;\n  letter-spacing: 0.01em;\n  will-change: transform;\n  transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0)) rotateY(var(--ry, 0));\n}\n\nh4 {\n  font-size: 20px;\n  font-weight: normal;\n  margin-top: 0px;\n  margin-bottom: 1px;\n}\n\ntable {\n  width: 100%;\n}\n\nth {\n  /* text-align: center;\n   */\n  align-content: center;\n}\n\ntable td {\n  padding-right: 50px;\n}\n\n#customers {\n  border-collapse: collapse;\n  width: 100%;\n}\n\n#customers td, #customers th {\n  border: 1px solid #ddd;\n  padding: 8px;\n  text-align: center;\n  font-size: xx-small;\n}\n\n#customers td mat-chip {\n  font-size: xx-small;\n}\n\n#customers tr:nth-child(even) {\n  background-color: #f2f2f2;\n}\n\n#customers th {\n  padding-top: 8px;\n  padding-bottom: 9px;\n  text-align: left;\n  background-color: #61b2d8;\n  color: white;\n}\n\n.wrapper {\n  text-align: center;\n}\n\n/*\n*css added by dev on 12/nov\n*/\n\nmat-card .hahaha {\n  width: 330px;\n  height: 250px;\n}\n\nmat-card mat-form-field {\n  font-size: 10px;\n}\n\nmat-card a {\n  font-size: 11px;\n}\n\nmat-card p {\n  font-size: 11px;\n}\n\nmat-card .hahaha {\n  width: 530px;\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvZXhjZWwtZGF0YS1wcm9jZXNzaW5nL0Q6XFxJY3VzdC1VaVxcbWVkaWFuLXBoMi11aS9zcmNcXGFwcFxcdmlld3NcXGV4Y2VsLWRhdGEtcHJvY2Vzc2luZ1xcZXhjZWwtZGF0YS1wcm9jZXNzaW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9leGNlbC1kYXRhLXByb2Nlc3NpbmcvZXhjZWwtZGF0YS1wcm9jZXNzaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLHlDQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUU7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FER0E7RUFDRSxzQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDQUY7O0FERUE7RUFDRSx5QkFBQTtFQUNBLFlBQUE7QUNDRjs7QURDQTtFQUNDLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxZQUFBO0FDRUQ7O0FEQUM7RUFDQyxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EscURBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0VBQ0Esc0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDRHQUNDO0FDQ0g7O0FES0M7RUFDQyx5Q0FBQTtBQ0hGOztBRE1DO0VBQ0Msa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSwrRUFDQztBQ0xIOztBRFdBO0VBQ0MsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtBQ1JEOztBRFdBO0VBQ0UseUJBQUE7RUFDQSx5REFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUlBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNDLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0YscURBQUE7RUFDRCxzQkFBQTtBQ1hBOztBRGFBO0VBQ0UsbUJBQUE7QUNYRjs7QURhQTtFQUdFLGNBQUE7QUNiRjs7QURpQkE7RUFDRSxzQkFBQTtFQUNBLFlBQUE7QUNkRjs7QURpQkE7RUFBOEIseUJBQUE7QUNiOUI7O0FEZUE7RUFBcUIsc0JBQUE7QUNYckI7O0FEYUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNWRjs7QURxQkE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUVBLHFCQUFBO0FDbkJGOztBRHdCQTtFQUNFLGlCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQ3JCRjs7QUR5QkE7RUFDRSxXQUFBO0FDdEJGOztBRHdCQTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtBQ3JCRjs7QUQ0QkE7RUFDRSxLQUFBO0VBQ0EsOEJBQUE7QUN6QkY7O0FEMkJBO0VBQ0UsbUJBQUE7QUN4QkY7O0FEMkJBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLFlBQUE7QUN4QkY7O0FEMEJFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsUUFBQTtFQUNBLHFEQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtFQUNBLHNCQUFBO0VBQ0Esd0NBQUE7RUFDQSw0R0FBQTtBQ3hCSjs7QUQ0QkU7RUFDRSx5Q0FBQTtBQzFCSjs7QUQ2QkU7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLCtFQUFBO0FDM0JKOztBRCtCQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQzVCRjs7QUQrQkU7RUFDRSxXQUFBO0FDNUJKOztBRCtCRTtFQUNFO0lBQUE7RUFFRixxQkFBQTtBQzVCRjs7QUQrQkU7RUFDRSxtQkFBQTtBQzVCSjs7QUQrQkU7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUM1Qko7O0FEOEJFO0VBQ0Usc0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQzNCSjs7QUQ4QkU7RUFDRSxtQkFBQTtBQzNCSjs7QUQ2QkU7RUFBOEIseUJBQUE7QUN6QmhDOztBRDJCRTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ3hCSjs7QUQwQkU7RUFDRSxrQkFBQTtBQ3ZCSjs7QUQwQkM7O0NBQUE7O0FBSUE7RUFDQyxZQUFBO0VBQ0EsYUFBQTtBQ3hCRjs7QUQwQkE7RUFDRSxlQUFBO0FDdkJGOztBRHlCQTtFQUNFLGVBQUE7QUN0QkY7O0FEd0JBO0VBQ0UsZUFBQTtBQ3JCRjs7QUR3QkE7RUFDRSxZQUFBO0VBQ0EsWUFBQTtBQ3JCRiIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2V4Y2VsLWRhdGEtcHJvY2Vzc2luZy9leGNlbC1kYXRhLXByb2Nlc3NpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMVx0e1xyXG4gIGNvbG9yOiAjYjYwYzYxO1xyXG4gIGZvbnQtZmFtaWx5OiBJbXBhY3QsIENoYXJjb2FsLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xyXG4gIH1cclxuXHJcbiAgLnVwbG9hZC1idG4td3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGNvbG9yOiBncmVlblxyXG59XHJcblxyXG5cclxuLmJ0biB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcclxuICBjb2xvcjogcmdiKDU4LCAyMiwgMjE0KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA4cHggMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcblxyXG4uYnV0dG9uMSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIHJnYig4MywgNzYsIDE3NSk7XHJcbiAgY29sb3I6IHJnYigyNDAsIDIzMSwgMjMxKTtcclxuICBib3JkZXI6IDJweCBzb2xpZCAjNENBRjUwO1xyXG59XHJcbi5idXR0b24xOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNENBRjUwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5hIHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdHBhZGRpbmc6IDAuNGVtIDAuNGVtO1xyXG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdHVzZXItc2VsZWN0OiBub25lO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuXHJcblx0Jjo6YmVmb3JlIHtcclxuXHRcdGNvbnRlbnQ6ICcnO1xyXG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFx0dG9wOiAwO1xyXG5cdFx0bGVmdDogMDtcclxuXHRcdGJvdHRvbTogMDtcclxuXHRcdHJpZ2h0OiAwO1xyXG5cdFx0YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzZlOGVmYiwgI2E3NzdlMyk7XHJcblx0XHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0XHR0cmFuc2l0aW9uOiBib3gtc2hhZG93IC41cyBlYXNlLCB0cmFuc2Zvcm0gLjJzIGVhc2U7XHJcblx0XHR3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG5cdFx0Ym94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgLjIpO1xyXG5cdFx0dHJhbnNmb3JtOlxyXG5cdFx0XHR0cmFuc2xhdGVZKHZhcigtLXR5LCAwKSlcclxuXHRcdFx0cm90YXRlWCh2YXIoLS1yeCwgMCkpXHJcblx0XHRcdHJvdGF0ZVkodmFyKC0tcnksIDApKVxyXG5cdFx0XHR0cmFuc2xhdGVaKHZhcigtLXR6LCAtMTJweCkpO1xyXG5cdH1cclxuXHJcblx0Jjpob3Zlcjo6YmVmb3JlIHtcclxuXHRcdGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAuMyk7XHJcblx0fVxyXG5cclxuXHQmOjphZnRlciB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHRjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xyXG5cdFx0dHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycyBlYXNlO1xyXG5cdFx0Zm9udC13ZWlnaHQ6IGJvbGQ7XHJcblx0XHRsZXR0ZXItc3BhY2luZzogLjAxZW07XHJcblx0XHR3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG5cdFx0dHJhbnNmb3JtOlxyXG5cdFx0XHR0cmFuc2xhdGVZKHZhcigtLXR5LCAwKSlcclxuXHRcdFx0cm90YXRlWCh2YXIoLS1yeCwgMCkpXHJcblx0XHRcdHJvdGF0ZVkodmFyKC0tcnksIDApKTtcclxuXHR9XHJcbn1cclxuXHJcbmJvZHkge1xyXG5cdGRpc3BsYXk6IGZsZXg7XHJcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHRoZWlnaHQ6IDEwMHZoO1xyXG5cdHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcblx0dHJhbnNmb3JtOiBwZXJzcGVjdGl2ZSg4MDBweCk7XHJcbn1cclxuXHJcbiN0YWJsZWRhdGEge1xyXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgZm9udC1mYW1pbHk6IFwiVHJlYnVjaGV0IE1TXCIsIEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcblxyXG5cclxuICAvKiB0YWJsZS1sYXlvdXQ6IGZpeGVkOyAqL1xyXG4gIG1heC13aWR0aDogMTIwMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDEyMDBweDtcclxuICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgb3ZlcmZsb3cteTpzY3JvbGw7XHJcbiAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gLyogICBvdmVyZmxvdzogc2Nyb2xsOyBTY3JvbGxiYXIgYXJlIGFsd2F5cyB2aXNpYmxlICovXHJcbi8qIG92ZXJmbG93OiBhdXRvOyAgICovXHJcblxyXG4jdGVzdHtcclxuICBtYXJnaW4tcmlnaHQ6IDIwMHB4O1xyXG59XHJcbi5leGFtcGxlLWZpbGwtcmVtYWluaW5nLXNwYWNlIHtcclxuICAvLyBUaGlzIGZpbGxzIHRoZSByZW1haW5pbmcgc3BhY2UsIGJ5IHVzaW5nIGZsZXhib3guXHJcbiAgLy8gRXZlcnkgdG9vbGJhciByb3cgdXNlcyBhIGZsZXhib3ggcm93IGxheW91dC5cclxuICBmbGV4OiAxIDEgYXV0bztcclxufVxyXG59XHJcblxyXG4jdGFibGVkYXRhIHRkLCAjdGFibGVkYXRhIHRoIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuI3RhYmxlZGF0YSB0cjpudGgtY2hpbGQoZXZlbil7YmFja2dyb3VuZC1jb2xvcjogI2YyZjJmMjt9XHJcblxyXG4jdGFibGVkYXRhIHRyOmhvdmVyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO31cclxuXHJcbiN0YWJsZWRhdGEgdGgge1xyXG4gIHBhZGRpbmctdG9wOiAxMnB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG4vLyAjdGFibGVkYXRhIHRmb290IHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjAwYjBiO1xyXG4vLyAgIGNvbG9yOiAjZGRkZGRkO1xyXG4vLyAgIGZvbnQtc2l6ZTogODAlO1xyXG4vLyB9XHJcblxyXG5cclxuI3RhYmxlZGF0YSB0Zm9vdCB7XHJcbiAgYmFja2dyb3VuZDogcmdiKDIzNCwgMjMyLCAyMzgpO1xyXG4gIGNvbG9yOiByZ2IoMjMwLCAxOCwgMTgpO1xyXG4gIGRpc3BsYXk6IHRhYmxlLWZvb3RlcjtcclxuICAvL2hvcml6b250YWwgOiBtaWRkbGU7XHJcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0XHJcbn1cclxuXHJcbi8vc2FrdGkgY3NzXHJcblxyXG4uZXhhbXBsZS1mb3JtIHtcclxuICBwYWRkaW5nLXRvcDogMjBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgd2lkdGg6IDUwJTtcclxuICBtYXJnaW4tbGVmdDogMjMlO1xyXG4gIGJvcmRlcjoycHggc29saWQgcmdiKDE5NiwgNDUsIDQ1KTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlZWYxO1xyXG5cclxufVxyXG5cclxuLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRhaW5lcntcclxuICBtYXJnaW4tdG9wOiAxJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gIC8vIG1hcmdpbi1sZWZ0OiAzMCU7XHJcbiAgLy8gbWFyZ2luLXJpZ2h0OiAzMCU7XHJcblxyXG4gIC8vXHJcbn1cclxuLm5hdmJhcntcclxuICAvKiAgKi9cclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuc3BhbntcclxuICBwYWRkaW5nLXJpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4ubmV3YnV0dG9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDAuNGVtIDAuNGVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjczOGExLCAjZTBiOTRlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cyBlYXNlLCB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xyXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkodmFyKC0tdHksIDApKSByb3RhdGVYKHZhcigtLXJ4LCAwKSlcclxuICAgICAgcm90YXRlWSh2YXIoLS1yeSwgMCkpIHRyYW5zbGF0ZVoodmFyKC0tdHosIC0xMnB4KSk7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgfVxyXG5cclxuICAmOjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkodmFyKC0tdHksIDApKSByb3RhdGVYKHZhcigtLXJ4LCAwKSlcclxuICAgICAgcm90YXRlWSh2YXIoLS1yeSwgMCkpO1xyXG4gIH1cclxufVxyXG5oNFx0e1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIG1hcmdpbi10b3A6IDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbiAgfVxyXG5cclxuICB0YWJsZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgXHJcbiAgdGh7XHJcbiAgICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgKi9cclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIHRhYmxlIHRkIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XHJcbiAgfVxyXG5cclxuICAjY3VzdG9tZXJzIHtcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgI2N1c3RvbWVycyB0ZCwgI2N1c3RvbWVycyB0aCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgcGFkZGluZzogOHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiB4eC1zbWFsbDtcclxuICBcclxuICB9XHJcbiAgI2N1c3RvbWVycyB0ZCBtYXQtY2hpcCB7XHJcbiAgICBmb250LXNpemU6IHh4LXNtYWxsO1xyXG4gIH1cclxuICAjY3VzdG9tZXJzIHRyOm50aC1jaGlsZChldmVuKXtiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO31cclxuICBcclxuICAjY3VzdG9tZXJzIHRoIHtcclxuICAgIHBhZGRpbmctdG9wOiA4cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogOXB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDk3LCAxNzgsIDIxNik7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC53cmFwcGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAvKlxyXG4qY3NzIGFkZGVkIGJ5IGRldiBvbiAxMi9ub3ZcclxuKi9cclxuXHJcbiBtYXQtY2FyZCAuaGFoYWhhIHtcclxuICB3aWR0aDogMzMwcHg7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxufVxyXG5tYXQtY2FyZCBtYXQtZm9ybS1maWVsZCB7XHJcbiAgZm9udC1zaXplOiAxMHB4O1xyXG59XHJcbm1hdC1jYXJkIGEge1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxufVxyXG5tYXQtY2FyZCBwIHtcclxuICBmb250LXNpemU6IDExcHg7XHJcbn1cclxuXHJcbm1hdC1jYXJkIC5oYWhhaGF7XHJcbiAgd2lkdGg6IDUzMHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxufVxyXG4iLCJoMSB7XG4gIGNvbG9yOiAjYjYwYzYxO1xuICBmb250LWZhbWlseTogSW1wYWN0LCBDaGFyY29hbCwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxcHg7XG59XG5cbi51cGxvYWQtYnRuLXdyYXBwZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29sb3I6IGdyZWVuO1xufVxuXG4uYnRuIHtcbiAgYm9yZGVyOiAycHggc29saWQgZ3JheTtcbiAgY29sb3I6ICMzYTE2ZDY7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiA4cHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYnV0dG9uMSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1MzRjYWY7XG4gIGNvbG9yOiAjZjBlN2U3O1xuICBib3JkZXI6IDJweCBzb2xpZCAjNENBRjUwO1xufVxuXG4uYnV0dG9uMTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTA7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuYSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwLjRlbSAwLjRlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmE6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNmU4ZWZiLCAjYTc3N2UzKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXMgZWFzZSwgdHJhbnNmb3JtIDAuMnMgZWFzZTtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKHZhcigtLXR5LCAwKSkgcm90YXRlWCh2YXIoLS1yeCwgMCkpIHJvdGF0ZVkodmFyKC0tcnksIDApKSB0cmFuc2xhdGVaKHZhcigtLXR6LCAtMTJweCkpO1xufVxuYTpob3Zlcjo6YmVmb3JlIHtcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG5hOjphZnRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKHZhcigtLXR5LCAwKSkgcm90YXRlWCh2YXIoLS1yeCwgMCkpIHJvdGF0ZVkodmFyKC0tcnksIDApKTtcbn1cblxuYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBoZWlnaHQ6IDEwMHZoO1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xuICB0cmFuc2Zvcm06IHBlcnNwZWN0aXZlKDgwMHB4KTtcbn1cblxuI3RhYmxlZGF0YSB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIGZvbnQtZmFtaWx5OiBcIlRyZWJ1Y2hldCBNU1wiLCBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICB3aWR0aDogMTAwJTtcbiAgLyogdGFibGUtbGF5b3V0OiBmaXhlZDsgKi9cbiAgbWF4LXdpZHRoOiAxMjAwcHg7XG4gIG1heC1oZWlnaHQ6IDEyMDBweDtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBkaXNwbGF5OiBibG9jaztcbiAgLyogICBvdmVyZmxvdzogc2Nyb2xsOyBTY3JvbGxiYXIgYXJlIGFsd2F5cyB2aXNpYmxlICovXG4gIC8qIG92ZXJmbG93OiBhdXRvOyAgICovXG59XG4jdGFibGVkYXRhICN0ZXN0IHtcbiAgbWFyZ2luLXJpZ2h0OiAyMDBweDtcbn1cbiN0YWJsZWRhdGEgLmV4YW1wbGUtZmlsbC1yZW1haW5pbmctc3BhY2Uge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuI3RhYmxlZGF0YSB0ZCwgI3RhYmxlZGF0YSB0aCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IDhweDtcbn1cblxuI3RhYmxlZGF0YSB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xufVxuXG4jdGFibGVkYXRhIHRyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcbn1cblxuI3RhYmxlZGF0YSB0aCB7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRDQUY1MDtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4jdGFibGVkYXRhIHRmb290IHtcbiAgYmFja2dyb3VuZDogI2VhZThlZTtcbiAgY29sb3I6ICNlNjEyMTI7XG4gIGRpc3BsYXk6IHRhYmxlLWZvb3RlcjtcbiAgYm9yZGVyLWNvbG9yOiBpbmhlcml0O1xufVxuXG4uZXhhbXBsZS1mb3JtIHtcbiAgcGFkZGluZy10b3A6IDIwcHg7XG4gIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICBtaW4td2lkdGg6IDE1MHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tbGVmdDogMjMlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjYzQyZDJkO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlZWYxO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubmF2YmFyIHtcbiAgLyogICovXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuc3BhbiB7XG4gIHBhZGRpbmctcmlnaHQ6IDFyZW07XG59XG5cbi5uZXdidXR0b24ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcGFkZGluZzogMC40ZW0gMC40ZW07XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubmV3YnV0dG9uOjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y3MzhhMSwgI2UwYjk0ZSk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAwLjVzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2U7XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSh2YXIoLS10eSwgMCkpIHJvdGF0ZVgodmFyKC0tcngsIDApKSByb3RhdGVZKHZhcigtLXJ5LCAwKSkgdHJhbnNsYXRlWih2YXIoLS10eiwgLTEycHgpKTtcbn1cbi5uZXdidXR0b246aG92ZXI6OmJlZm9yZSB7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuLm5ld2J1dHRvbjo6YWZ0ZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgY29udGVudDogYXR0cihkYXRhLXRpdGxlKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSh2YXIoLS10eSwgMCkpIHJvdGF0ZVgodmFyKC0tcngsIDApKSByb3RhdGVZKHZhcigtLXJ5LCAwKSk7XG59XG5cbmg0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDFweDtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxudGgge1xuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAqL1xuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG59XG5cbnRhYmxlIHRkIHtcbiAgcGFkZGluZy1yaWdodDogNTBweDtcbn1cblxuI2N1c3RvbWVycyB7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jY3VzdG9tZXJzIHRkLCAjY3VzdG9tZXJzIHRoIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgcGFkZGluZzogOHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogeHgtc21hbGw7XG59XG5cbiNjdXN0b21lcnMgdGQgbWF0LWNoaXAge1xuICBmb250LXNpemU6IHh4LXNtYWxsO1xufVxuXG4jY3VzdG9tZXJzIHRyOm50aC1jaGlsZChldmVuKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG59XG5cbiNjdXN0b21lcnMgdGgge1xuICBwYWRkaW5nLXRvcDogOHB4O1xuICBwYWRkaW5nLWJvdHRvbTogOXB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjFiMmQ4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi53cmFwcGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4vKlxuKmNzcyBhZGRlZCBieSBkZXYgb24gMTIvbm92XG4qL1xubWF0LWNhcmQgLmhhaGFoYSB7XG4gIHdpZHRoOiAzMzBweDtcbiAgaGVpZ2h0OiAyNTBweDtcbn1cblxubWF0LWNhcmQgbWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbm1hdC1jYXJkIGEge1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbm1hdC1jYXJkIHAge1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbm1hdC1jYXJkIC5oYWhhaGEge1xuICB3aWR0aDogNTMwcHg7XG4gIGhlaWdodDogNTBweDtcbn0iXX0= */";
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
        this.roleCodes = new _roles1_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_14__["permissionsLabels"]();
        this.dataForProcessScreen1 = []; //  this.selectorDateData = this.datePipe.transform(this.selectorDateData, 'yyyy-MM-dd');
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

            this.api.showDetailServiceInExcelDataProcessing(this.excelDataProcessingReqDTO, this.user_id).subscribe(function (responseforfileupload) {
              //   for audit log in excel UploadProcessAuthorizationScreenPermission.
              //  this.getAuditLogData(this.excelDataProcessingReqDTO);
              _this4.responseforfileupload = responseforfileupload;
              console.log("response from bc", _this4.responseforfileupload);
              console.log(_this4.responseforfileupload.respDto.batchNo);
              console.log(_this4.responseforfileupload.respDto);
              _this4.spinner = false;
              _this4.disbaleBtn = false;
              _this4.disablebtn2 = false;

              if (_this4.responseforfileupload == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Server error.');
                return;
              } // need to modify based on the list of object.list1=download data 2-response.


              _this4.spinner = false;

              if (_this4.responseforfileupload.respDto.errorMessage) {
                console.log("here is error of duplicate record");
                _this4.disablebtn2 = true;
                sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Unable to upload', 'Error:' + _this4.responseforfileupload.respDto.errorMessage);

                if (_this4.responseforfileupload.respDto.errorMessage === "possible duplicate data") {
                  _this4.excelDataProcessingReqDTO.proceedDuplicates = true;
                  console.log("here duplicate");
                  sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                    //text: 'Unable to process' + 'Error ' + this.responseforfileupload.respDto.errorMessage + 'Do you want to Proceed??',
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
                        console.log("dupliacteResp", dupliacteResp); // Swal.fire('Unable to process', 'Error ' + this.responseforfileupload.respDto.errorMessage);

                        _this4.responseforfileupload = dupliacteResp;
                        _this4.responseDto = _this4.responseforfileupload.respDto; // added by vidya M B for the issue 0001047

                        if (_this4.responseforfileupload.respDto.errorMessage === "Amount and LCY amount mismatch") {
                          sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire('Unable to upload', 'Error:' + _this4.responseforfileupload.respDto.errorMessage);
                        }

                        if (_this4.responseDto.totalNoOfRecords !== 0) {
                          // Swal.fire('Data processed successfully for the Batch  ',this.responseforfileupload.respDto.batchNo);
                          sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                            title: "Data uploaded successfully ",
                            text: "For the Batch " + _this4.responseDto.batchNo
                          });
                          _this4.excelFileFlag = true;
                          console.log("excelFileFlag value ", _this4.excelFileFlag);
                          _this4.flag = false;
                          _this4.isShow = true;
                        }

                        console.log("________", _this4.responseforfileupload.respDto.errorMessage);
                      });
                    }
                  });
                }

                _this4.flag = true;
                _this4.disbaleBtn = true;
              }

              if (_this4.responseforfileupload.excelData) {
                console.log('value date', _this4.pipe.transform(_this4.responseforfileupload.excelData[0].valueDate, 'dd-MMM-yy'));

                d: new Date();

                console.log(_this4.pipe.transform(new Date(), 'dd-MMM-yy'));
                _this4.a = _this4.pipe.transform(_this4.responseforfileupload.excelData[0].valueDate, 'dd-MMM-yy');
                _this4.b = _this4.pipe.transform(new Date(), 'dd-MMM-yy');
                console.log("inside second if of value date");
                console.log('value date', _this4.responseforfileupload.excelData[0].valueDate);
                console.log('a', _this4.a);
                console.log('b', _this4.b);

                if (_this4.a == _this4.b) {
                  _this4.valueDate = "Today";
                } else {
                  _this4.valueDate = "not Today";
                }

                console.log(_this4.valueDate);
                _this4.spinner = false;
                _this4.responsebutton = true;
                _this4.spinner = false;
                _this4.responseDto = _this4.responseforfileupload.respDto;

                if (_this4.responseDto.totalNoOfRecords !== 0) {
                  // Swal.fire('Data processed successfully for the Batch  ',this.responseforfileupload.respDto.batchNo);
                  sweetalert2__WEBPACK_IMPORTED_MODULE_8___default.a.fire({
                    title: "Data uploaded successfully ",
                    text: "For the Batch " + _this4.responseDto.batchNo
                  });
                  _this4.excelFileFlag = true;
                  console.log("excelFileFlag value ", _this4.excelFileFlag);
                  _this4.flag = false;
                  _this4.isShow = true;
                }

                console.log("________", _this4.responseforfileupload.respDto.errorMessage);
              }
            }, // this.excelDataProcessingRespDTO = this.data;
            // //// console.log('this.excelDataProcessingRespDTO' + this.excelDataProcessingRespDTO);
            // this.getAuditLogData(this.excelDataProcessingRespDTO);
            // if (!this.excelDataProcessingRespDTO) {
            //   this.spinner = false;
            //   Swal.fire(
            //     'Unable to upload data.',
            //   );
            // } else {
            //   this.spinner = false;
            //   this.totalrecord = this.data.totalNoOfRecords;
            //   if (this.totalrecord !== 0) {
            //     Swal.fire('Processing is Successful ', 'Total processed Record ' + this.totalrecord);
            //   }
            //   if (this.data.errorMessage) {
            //     Swal.fire('Unable to process', 'Error' + this.data.errorMessage);
            //   }
            // }
            // },
            function (err) {
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
        key: "delay",
        value: function delay(ms) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return new Promise(function (resolve) {
                      return setTimeout(function () {
                        return resolve();
                      }, ms);
                    }).then(function () {
                      return console.log('fired');
                    });

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));
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
        key: "testAlert",
        value: function testAlert() {
          var _this11 = this;

          // this.responseDto.valueDate = 'Today';
          // Swal.fire({
          //   text: 'Value Date',
          //   showCancelButton: true,
          //   confirmButtonColor: '#3085d6',
          //   cancelButtonColor: '#d33',
          //   confirmButtonText: 'PROCEED.'
          // }).then((result) => {
          //   console.log(result.value);
          //   if (result.value) {
          //     console.log('user choose to proceed.');
          //   } else {
          //     return;
          //   }
          // })
          this.api.test(this.user_id).subscribe(function (resp) {
            _this11.test = _this11.test;
            console.log(_this11.test);
          });
        }
      }, {
        key: "downloadData",
        value: function downloadData() {
          var _this12 = this;

          console.log('response', this.responseforfileupload.excelData);
          this.responseforfileupload.excelData.forEach(function (element) {//   if(element.uploadDate!==null ){
            //   element.uploadDate
            //   =this.pipe.transform(element.uploadDate, 'dd-MMM-yy').toString();
            //   }
            //   if( element.valueDate !==null){
            //     element.valueDate
            //     =this.pipe.transform(element.valueDate
            //       , 'dd-MMM-yy').toString();
            //   }
            //  if(element.inputTime !==null){
            //   element.inputTime
            //   =this.pipe.transform(element.inputTime
            //     , 'dd-MMM-yy').toString();
            //  }
            // this.dataForProcessScreen1.push({
            //   'Source_Code':element.id.sourceCode,
            //   'Process_Code': element.processCode,
            //   'Branch_Code': element.id.branchCode,
            //   'Batch_No': element.id.batchNo,
            //   'Value_Date': this.pipe.transform(element.valueDate, 'dd-MMM-yy'),
            //   Account: element.account,
            //   Account_Branch: element.accountBranch,
            //   Currency: element.ccyCd,
            //   Amount: element.amount,
            //   DrCr: element.drCr,
            //   LcyEquivalent: element.lcyEquivalent,
            //   Exch_Rate: element.id.exchRate,
            //   Curr_No: element.id.currNo,
            //   Addl_Text: element.addlText,
            //   Trn_Code: element.txnCode,
            //   Period_Code: element.periodCode,
            //   Financial_Cycle: element.finCycle,
            //   Initiation_Date: this.pipe.transform(element.initiationDate, 'dd-MMM-yy'),
            //   Upload_Date: this.pipe.transform(element.uploadDate, 'dd-MMM-yy'),
            //   Input_By: element.inputBy,
            //   Input_Time: this.pipe.transform(element.inputTime, 'dd-MMM-yy'),
            //   UDF_Detail: element.udfDetails,
            //   Error_Desc:element.errorDesc,
            //   Validation_Error: element.validationError,
            //   Related_Customer: element.relCust,
            //   Related_Account: element.relatedAccount,
            //   Related_Reference: element.relatedRef
            // });
          });
          console.log('data for down', this.responseforfileupload.excelData);
          this.responseforfileupload.excelData.forEach(function (element) {
            console.log(element.id.sourceCode);
            console.log(element);

            if (element.drCr == 'C') {
              _this12.credit = element.lcyEquivalent;
              _this12.debit = 0;
            } else {
              _this12.debit = element.lcyEquivalent;
              _this12.credit = 0;
            }

            _this12.dataForProcessScreen1.push({
              // 'Source_Code': element.id.sourceCode,
              // 'Process_Code': element.processCode,
              // 'Branch_Code': element.id.branchCode,
              'Batch_No': element.id.batchNo,
              //Refrence No : element.id.refNo, // 2 skiiping this Field, user can see this in FlexCube
              Account_Branch: element.accountBranch,
              Account: element.account,
              Account_name: element.accDesc,
              DrCr: element.drCr,
              Trn_Code: element.txnCode,
              Transaction_Desc: element.trnDesc,
              FcyAmount: element.amount,
              Exch_Rate: element.exchRate,
              DrLcyAmt: _this12.debit,
              CrLcyAmt: _this12.credit,
              Instr_code: element.instrumentNo,
              'Value_Date': _this12.pipe.transform(element.valueDate, 'dd-MMM-yy'),
              User_Id: element.inputBy,
              Authorizer_ID: element.firstTimeAuthorizer,
              //below fields we are showing only when upload excel failes to upload file else it show below fields in report 
              Validation_Error: element.validationError,
              Error_Desc: element.errorDesc
            });

            console.log(_this12.dataForProcessScreen1, 'screen', _this12.excelFileFlag);

            if (_this12.excelFileFlag) {
              for (var i = 0; i < _this12.dataForProcessScreen1.length; i++) {
                delete _this12.dataForProcessScreen1[i].Validation_Error;
                delete _this12.dataForProcessScreen1[i].Error_Desc;
              } //for loop endning

            } else {//Validation_Error: element.validationError,
                //Error_Desc: element.errorDesc,
              }
          });
          console.log('final data', this.dataForProcessScreen1); //this.excelService.exportAsExcelFile(this.dataForProcessScreen1, 'Upload_Error');

          this.excelService.exportAsExcelFile(this.dataForProcessScreen1, this.excelDataProcessingReqDTO.fileName);
          this.dataForProcessScreen1 = [];
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
          var _this13 = this;

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
            _this13.responseforfileupload = responseforfileupload; // console.log(this.responseforfileupload);

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


    __webpack_exports__["default"] = "h2 {\n  color: #b60c61;\n  font-family: Impact, Charcoal, sans-serif;\n  font-size: 18px;\n  font-weight: bold;\n  margin-top: 0px;\n  margin-bottom: 1px;\n}\n\ndiv {\n  border-radius: 2px;\n  background-color: #f2f2f2;\n  padding: 4px;\n}\n\n.div label {\n  display: inline-block;\n  text-align: right;\n}\n\n.button-good {\n  position: relative;\n  display: inline-block;\n  padding: 0.8em 0.8em;\n  text-decoration: none;\n  text-align: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: white;\n}\n\n.button-good::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: linear-gradient(135deg, #6e8efb, #a777e3);\n  border-radius: 4px;\n  transition: box-shadow 0.5s ease, transform 0.2s ease;\n  will-change: transform;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0)) rotateY(var(--ry, 0)) translateZ(var(--tz, -12px));\n}\n\n.button-good:hover::before {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n}\n\n.button-good::after {\n  position: relative;\n  display: inline-block;\n  content: attr(data-title);\n  transition: transform 0.2s ease;\n  font-weight: bold;\n  letter-spacing: 0.01em;\n  will-change: transform;\n  transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0)) rotateY(var(--ry, 0));\n}\n\n.newbutton {\n  position: relative;\n  display: inline-block;\n  padding: 0.8em 0.8em;\n  text-decoration: none;\n  text-align: center;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  color: white;\n}\n\n.newbutton::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  background: linear-gradient(135deg, #f738a1, #e0b94e);\n  border-radius: 4px;\n  transition: box-shadow 0.5s ease, transform 0.2s ease;\n  will-change: transform;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n  transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0)) rotateY(var(--ry, 0)) translateZ(var(--tz, -12px));\n}\n\n.newbutton:hover::before {\n  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);\n}\n\n.newbutton::after {\n  position: relative;\n  display: inline-block;\n  content: attr(data-title);\n  transition: transform 0.2s ease;\n  font-weight: bold;\n  letter-spacing: 0.01em;\n  will-change: transform;\n  transform: translateY(var(--ty, 0)) rotateX(var(--rx, 0)) rotateY(var(--ry, 0));\n}\n\n.example-form {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width {\n  width: 100%;\n}\n\n.no-hover-effect.mat-raised-button {\n  background-color: #ec7f5d;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: 20px;\n  line-height: 27px;\n  min-height: 27px;\n  vertical-align: top;\n  font-size: 11px;\n  padding: 0 0;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvbW9kYWxzL21vZGFsLWRpYWxvZy9EOlxcSWN1c3QtVWlcXG1lZGlhbi1waDItdWkvc3JjXFxhcHBcXHZpZXdzXFxtb2RhbHNcXG1vZGFsLWRpYWxvZ1xcbW9kYWwtZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC92aWV3cy9tb2RhbHMvbW9kYWwtZGlhbG9nL21vZGFsLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSx5Q0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7QUNFRjs7QURBQTtFQUNFLHFCQUFBO0VBQ0EsaUJBQUE7QUNHRjs7QUREQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSxZQUFBO0FDSUY7O0FERkU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EscURBQUE7RUFDQSxrQkFBQTtFQUNBLHFEQUFBO0VBQ0Esc0JBQUE7RUFDQSx3Q0FBQTtFQUNBLDRHQUFBO0FDSUo7O0FEQUU7RUFDRSx5Q0FBQTtBQ0VKOztBRENFO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSwrRUFBQTtBQ0NKOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFQUNBLFlBQUE7QUNBRjs7QURFRTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxxREFBQTtFQUNBLGtCQUFBO0VBQ0EscURBQUE7RUFDQSxzQkFBQTtFQUNBLHdDQUFBO0VBQ0EsNEdBQUE7QUNBSjs7QURJRTtFQUNFLHlDQUFBO0FDRko7O0FES0U7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxzQkFBQTtFQUNBLCtFQUFBO0FDSEo7O0FET0E7RUFDRSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQ0pGOztBRE9BO0VBQ0UsV0FBQTtBQ0pGOztBRE1BO0VBQ0UseUJBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0FDSEYiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9tb2RhbHMvbW9kYWwtZGlhbG9nL21vZGFsLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImgyIHtcclxuICBjb2xvcjogI2I2MGM2MTtcclxuICBmb250LWZhbWlseTogSW1wYWN0LCBDaGFyY29hbCwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLXRvcDogMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDFweDtcclxufVxyXG5kaXYge1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMmYyO1xyXG4gIHBhZGRpbmc6IDRweDtcclxufVxyXG4uZGl2IGxhYmVsIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmJ1dHRvbi1nb29kIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDAuOGVtIDAuOGVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNmU4ZWZiLCAjYTc3N2UzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cyBlYXNlLCB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xyXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkodmFyKC0tdHksIDApKSByb3RhdGVYKHZhcigtLXJ4LCAwKSlcclxuICAgICAgcm90YXRlWSh2YXIoLS1yeSwgMCkpIHRyYW5zbGF0ZVoodmFyKC0tdHosIC0xMnB4KSk7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgfVxyXG5cclxuICAmOjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkodmFyKC0tdHksIDApKSByb3RhdGVYKHZhcigtLXJ4LCAwKSlcclxuICAgICAgcm90YXRlWSh2YXIoLS1yeSwgMCkpO1xyXG4gIH1cclxufVxyXG4ubmV3YnV0dG9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmc6IDAuOGVtIDAuOGVtO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgJjo6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjczOGExLCAjZTBiOTRlKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cyBlYXNlLCB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xyXG4gICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcclxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMik7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkodmFyKC0tdHksIDApKSByb3RhdGVYKHZhcigtLXJ4LCAwKSlcclxuICAgICAgcm90YXRlWSh2YXIoLS1yeSwgMCkpIHRyYW5zbGF0ZVoodmFyKC0tdHosIC0xMnB4KSk7XHJcbiAgfVxyXG5cclxuICAmOmhvdmVyOjpiZWZvcmUge1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbiAgfVxyXG5cclxuICAmOjphZnRlciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcclxuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkodmFyKC0tdHksIDApKSByb3RhdGVYKHZhcigtLXJ4LCAwKSlcclxuICAgICAgcm90YXRlWSh2YXIoLS1yeSwgMCkpO1xyXG4gIH1cclxufVxyXG4uZXhhbXBsZS1mb3JtIHtcclxuICBtaW4td2lkdGg6IDE1MHB4O1xyXG4gIG1heC13aWR0aDogNTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5uby1ob3Zlci1lZmZlY3QubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICAjZWM3ZjVkO1xyXG4gIHdpZHRoOiBmaXQtY29udGVudDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgbWluLWhlaWdodDogMjdweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBwYWRkaW5nOiAwIDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5cclxuIiwiaDIge1xuICBjb2xvcjogI2I2MGM2MTtcbiAgZm9udC1mYW1pbHk6IEltcGFjdCwgQ2hhcmNvYWwsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMXB4O1xufVxuXG5kaXYge1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMmYyZjI7XG4gIHBhZGRpbmc6IDRweDtcbn1cblxuLmRpdiBsYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG5cbi5idXR0b24tZ29vZCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwLjhlbSAwLjhlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5idXR0b24tZ29vZDo6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2ZThlZmIsICNhNzc3ZTMpO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC41cyBlYXNlLCB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkodmFyKC0tdHksIDApKSByb3RhdGVYKHZhcigtLXJ4LCAwKSkgcm90YXRlWSh2YXIoLS1yeSwgMCkpIHRyYW5zbGF0ZVoodmFyKC0tdHosIC0xMnB4KSk7XG59XG4uYnV0dG9uLWdvb2Q6aG92ZXI6OmJlZm9yZSB7XG4gIGJveC1zaGFkb3c6IDAgNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xufVxuLmJ1dHRvbi1nb29kOjphZnRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKHZhcigtLXR5LCAwKSkgcm90YXRlWCh2YXIoLS1yeCwgMCkpIHJvdGF0ZVkodmFyKC0tcnksIDApKTtcbn1cblxuLm5ld2J1dHRvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiAwLjhlbSAwLjhlbTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5uZXdidXR0b246OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjczOGExLCAjZTBiOTRlKTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuNXMgZWFzZSwgdHJhbnNmb3JtIDAuMnMgZWFzZTtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKHZhcigtLXR5LCAwKSkgcm90YXRlWCh2YXIoLS1yeCwgMCkpIHJvdGF0ZVkodmFyKC0tcnksIDApKSB0cmFuc2xhdGVaKHZhcigtLXR6LCAtMTJweCkpO1xufVxuLm5ld2J1dHRvbjpob3Zlcjo6YmVmb3JlIHtcbiAgYm94LXNoYWRvdzogMCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG59XG4ubmV3YnV0dG9uOjphZnRlciB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjb250ZW50OiBhdHRyKGRhdGEtdGl0bGUpO1xuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKHZhcigtLXR5LCAwKSkgcm90YXRlWCh2YXIoLS1yeCwgMCkpIHJvdGF0ZVkodmFyKC0tcnksIDApKTtcbn1cblxuLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5uby1ob3Zlci1lZmZlY3QubWF0LXJhaXNlZC1idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWM3ZjVkO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gIGhlaWdodDogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XG4gIG1pbi1oZWlnaHQ6IDI3cHg7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGZvbnQtc2l6ZTogMTFweDtcbiAgcGFkZGluZzogMCAwO1xuICBtYXJnaW46IDA7XG59Il19 */";
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
          var _this14 = this;

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
            _this14.processDataStatus = resp;

            if (_this14.processDataStatus === true) {
              _this14.openSnackBar("Data Assigned For Deletion.   STATUS :", "Success  ");
            }

            if (_this14.processDataStatus === false) {
              _this14.openSnackBar("Data Assigned For Deletion.   STATUS :", "Failed  ");
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