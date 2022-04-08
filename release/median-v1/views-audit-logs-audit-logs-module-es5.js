function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-audit-logs-audit-logs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/views/audit-logs/audit-logs.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/audit-logs/audit-logs.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewsAuditLogsAuditLogsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n  <span>Audit logs</span>\r\n</mat-toolbar>\r\n<br>\r\n<!-- <div class=\"margin-333\">\r\n  <form #fname novalidate>\r\n    <div fxLayout=\"row\">\r\n      <span fxFlex></span>\r\n      <div fxFlex=\"40\">\r\n        <mat-card>\r\n          <mat-card-title></mat-card-title>\r\n          <mat-card-content>\r\n            <div class=\"pb-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput [matDatepicker]=\"picker\" placeholder=\" From Date\" #to>\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                <mat-datepicker #picker></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"pb-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput [matDatepicker]=\"picker1\" placeholder=\" To Date\" #from>\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                <mat-datepicker #picker1></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n      <span fxFlex></span>\r\n    </div>\r\n    <br>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"5px\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"fromTo(from.value,to.value)\">Submit</button>\r\n      <button mat-raised-button color=\"primary\" (click)=\"openDialog()\" *ngIf=\"buttonforexport\">Export as Excel</button>\r\n      <button mat-raised-button color=\"primary\" (click)=\"default()\" *ngIf=\"buttonforexport\">Default</button>\r\n      <button mat-raised-button color=\"warn\" routerLink=\"/dashboard\">Exit</button>\r\n    </div>\r\n  </form>\r\n</div> -->\r\n<br>\r\n<!-- <mat-card *ngIf=\"buttonforexport\">\r\n  <mat-card-content>\r\n    <table class=\"cart-table default-bg\">\r\n      <thead>\r\n        <tr>\r\n          <th>Log</th>\r\n          <th>Time</th>\r\n          <th>Record</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let data of auditlogdataexport\">\r\n          <td>{{ data.log }}</td>\r\n          <td>{{ data.timeForExport  | date: 'M/d/yy, h:mm a' }}</td>\r\n          <td>{{ data.record }}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </mat-card-content>\r\n</mat-card> -->\r\n\r\n<!-- <button (click)=\"exportAsXLSX()\" mat-button color=\"primary\">Download <i class=\"material-icons\">\r\n  cloud_download\r\n  </i></button> -->\r\n  <button\r\n  mat-button >\r\n\r\n  <mat-label>Export As</mat-label>\r\n\r\n  <mat-select\r\n    #select>\r\n    <mat-option (click)=\"exportAsXLSX()\" >Excel</mat-option>\r\n    <mat-option  (click)=\"convert()\">PDF</mat-option>\r\n  </mat-select>\r\n\r\n</button>\r\n    <div class=\"mat-elevation-z8\">\r\n        <mat-form-field>\r\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n          </mat-form-field>\r\n      <!--matSort matSortActive=\"timeForExport\" matSortDirection=\"desc\"-->\r\n      <table mat-table [dataSource]=\"dataSource\"    matSort matSortActive=\"timeForExport\" matSortDirection=\"desc\">\r\n       \r\n        \r\n        <ng-container matColumnDef=\"log\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Screen </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.log}} </td>\r\n        </ng-container>\r\n   \r\n        <ng-container matColumnDef=\"creatorId\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Creator </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.creatorId}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"actionPerformBy\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>ActionPerformBy </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.actionPerformBy}} </td>\r\n        </ng-container>\r\n   \r\n        <ng-container matColumnDef=\"record\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Record</th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.record}} </td>\r\n        </ng-container>\r\n    \r\n        <ng-container matColumnDef=\"action\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Action</th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.action}} </td>\r\n        </ng-container>\r\n     \r\n        <ng-container matColumnDef=\"timeForExport\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Time</th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.timeForExport | date: 'MM/dd/yyyy, h:mm a'}} </td>\r\n        </ng-container>\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n      </table>\r\n      <mat-paginator [pageSizeOptions]=\"[10, 15, 20]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n\r\n\r\n\r\n<br>";
    /***/
  },

  /***/
  "./src/app/shared/services/fmsapi.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/shared/services/fmsapi.service.ts ***!
    \***************************************************/

  /*! exports provided: FMSApiService */

  /***/
  function srcAppSharedServicesFmsapiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FMSApiService", function () {
      return FMSApiService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _config_app_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../config/app.constant */
    "./src/app/shared/config/app.constant.ts");

    var FMSApiService = /*#__PURE__*/function () {
      function FMSApiService(httpClient) {
        _classCallCheck(this, FMSApiService);

        this.httpClient = httpClient; //private uri = AppConstants.baseURL + '/api';

        this.uri = _config_app_constant__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseURL;
        this.custnew = _config_app_constant__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseURL;
        this.uriForExt = _config_app_constant__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseURL + '/extsys';
        this.uriTag = _config_app_constant__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseURL + '/tag';
        this.API_URL = _config_app_constant__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseURL;
      }

      _createClass(FMSApiService, [{
        key: "pushFileToStorage",
        value: function pushFileToStorage(file) {
          var formdata = new FormData();
          formdata.append('file', file);
          var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', "".concat(this.API_URL, "/extSysPro/upload"), formdata, {
            reportProgress: true,
            responseType: 'text'
          });
          return this.httpClient.request(req);
        }
      }, {
        key: "fetchColumnsExtSysProService",
        value: function fetchColumnsExtSysProService(desc) {
          return this.httpClient.get("".concat(this.API_URL, "/extSysPro/columnNames/").concat(desc));
        }
      }, {
        key: "fetchByDateExtSysProService",
        value: function fetchByDateExtSysProService(eodDate) {
          return this.httpClient.get("".concat(this.API_URL, "/extSysPro/fetchEodLogger/").concat(eodDate));
        }
      }, {
        key: "callExtSysProPackageService",
        value: function callExtSysProPackageService(desc) {
          return this.httpClient.get("".concat(this.API_URL, "/extSysPro/runExtProPackage/").concat(desc));
        }
      }, {
        key: "fetchExtSysProDescService",
        value: function fetchExtSysProDescService() {
          return this.httpClient.get("".concat(this.API_URL, "/extSysPro/descList"));
        }
      }, {
        key: "fetchDataByPcOrCrService",
        value: function fetchDataByPcOrCrService(product) {
          return this.httpClient.get("".concat(this.API_URL, "/trade/fetchTrade/").concat(product));
        }
      }, {
        key: "senTradeObjectService",
        value: function senTradeObjectService(tradeSim) {
          return this.httpClient.post("".concat(this.API_URL, "/trade/fetchProjection"), tradeSim);
        }
      }, {
        key: "triggerEodFunctionService",
        value: function triggerEodFunctionService() {
          return this.httpClient.get("".concat(this.API_URL, "/flexEod/triggerEod"));
        }
      }, {
        key: "fetchByAccNumService",
        value: function fetchByAccNumService(account) {
          return this.httpClient.get("".concat(this.API_URL, "/simLoan/getByAccount/").concat(account));
        }
      }, {
        key: "loanSimProcessService",
        value: function loanSimProcessService() {
          return this.httpClient.get("".concat(this.API_URL, "/simLoan/getProjection/"));
        }
      }, {
        key: "saveExtSysMaintenanceService",
        value: function saveExtSysMaintenanceService(rulesDTO) {
          return this.httpClient.post("".concat(this.API_URL, "/extSysMain/saveExtRules"), rulesDTO);
        }
      }, {
        key: "fetchByExtSysCodeAndFlexModService",
        value: function fetchByExtSysCodeAndFlexModService(sysName, fModule) {
          return this.httpClient.get("".concat(this.API_URL, "/extSysMain/getExtRules/").concat(sysName, "/").concat(fModule));
        }
      }, {
        key: "closeRecordExtSysMainService",
        value: function closeRecordExtSysMainService(systemName, status) {
          return this.httpClient.get("".concat(this.API_URL, "/extSysMain/updateStatus/").concat(systemName, "/").concat(status));
        }
      }, {
        key: "fetchExtSlabService",
        value: function fetchExtSlabService() {
          return this.httpClient.get("".concat(this.API_URL, "/extSysMain/getExtSlab/"));
        } // audit Logs

      }, {
        key: "getAllAuditData",
        value: function getAllAuditData() {
          return this.httpClient.get("".concat(this.uri) + '/auditLogs/getAllAuditLogs');
        }
      }, {
        key: "getAllAuditDataByDate",
        value: function getAllAuditDataByDate(from, to) {
          return this.httpClient.get("".concat(this.uri, "/dataauditsList/").concat(from, "/").concat(to));
        } // dashboard

      }, {
        key: "getAllDashboard",
        value: function getAllDashboard() {
          return this.httpClient.get("".concat(this.uri) + '/dashboardchartdata');
        } // external system

      }, {
        key: "getAllExtSys",
        value: function getAllExtSys() {
          return this.httpClient.get("".concat(this.uriForExt) + '/extsysdata');
        }
      }, {
        key: "fetchAllAuthExternalSystem",
        value: function fetchAllAuthExternalSystem() {
          return this.httpClient.get("".concat(this.uriForExt) + '/fetchAuthExtSystem');
        }
      }, {
        key: "createExtSys",
        value: function createExtSys(extSys) {
          return this.httpClient.post("".concat(this.uriForExt) + '/createExtSys', extSys);
        }
      }, {
        key: "modifyExtSysService",
        value: function modifyExtSysService(modifyextSys) {
          return this.httpClient.put("".concat(this.uriForExt) + "/modifyextSys", modifyextSys);
        }
      }, {
        key: "verifyExtSys",
        value: function verifyExtSys(extSysName, userIdLoggedIn) {
          return this.httpClient.get("".concat(this.uriForExt, "/verify/").concat(extSysName, "/").concat(userIdLoggedIn));
        }
      }, {
        key: "deleteExtSys",
        value: function deleteExtSys(extSysName, userIdLoggedIn) {
          return this.httpClient["delete"]("".concat(this.uriForExt, "/").concat(extSysName, "/").concat(userIdLoggedIn), {
            responseType: 'text'
          });
        }
      }, {
        key: "closelockRecordExtSys",
        value: function closelockRecordExtSys(extSysName, userIdLoggedIn) {
          return this.httpClient.get("".concat(this.uriForExt, "/close/").concat(extSysName, "/").concat(userIdLoggedIn));
        }
      }, {
        key: "reopenRecordExtSys",
        value: function reopenRecordExtSys(extSysName, userIdLoggedIn) {
          return this.httpClient.get("".concat(this.uriForExt, "/reOpen/").concat(extSysName, "/").concat(userIdLoggedIn));
        } // tag service

      }, {
        key: "getAllTags",
        value: function getAllTags() {
          return this.httpClient.get("".concat(this.uriTag) + '/tagdata');
        }
      }, {
        key: "fetchAllAuthTags",
        value: function fetchAllAuthTags() {
          return this.httpClient.get("".concat(this.uriTag) + '/fetchAuthTags');
        }
      }, {
        key: "createTag",
        value: function createTag(tags) {
          return this.httpClient.post("".concat(this.uriTag) + '/createTag', tags);
        }
      }, {
        key: "modifyTagService",
        value: function modifyTagService(modifytag) {
          return this.httpClient.put("".concat(this.uriTag) + "/modifytag", modifytag);
        }
      }, {
        key: "verifyTag",
        value: function verifyTag(tagName, userIdLoggedIn) {
          return this.httpClient.get("".concat(this.uriTag, "/verify/").concat(tagName, "/").concat(userIdLoggedIn));
        }
      }, {
        key: "deleteTag",
        value: function deleteTag(tagName, userIdLoggedIn) {
          return this.httpClient["delete"]("".concat(this.uriTag, "/").concat(tagName, "/").concat(userIdLoggedIn), {
            responseType: 'text'
          });
        }
      }, {
        key: "closelockTag",
        value: function closelockTag(tagName, userIdLoggedIn) {
          return this.httpClient.get("".concat(this.uriTag, "/close/").concat(tagName, "/").concat(userIdLoggedIn));
        }
      }, {
        key: "reopenRecordTag",
        value: function reopenRecordTag(tagName, userIdLoggedIn) {
          return this.httpClient.get("".concat(this.uriTag, "/reOpen/").concat(tagName, "/").concat(userIdLoggedIn));
        }
      }, {
        key: "saveFetched",
        value: function saveFetched(obj) {
          // let body = JSON.stringify(gT);
          return this.httpClient.post("".concat(this.custnew, "/generic/save"), obj);
        }
      }, {
        key: "saveFetched1",
        value: function saveFetched1(obj) {
          // let body = JSON.stringify(gT);
          return this.httpClient.post("".concat(this.custnew, "/generic/saveBase"), obj);
        }
      }, {
        key: "saveGeneric",
        value: function saveGeneric(obj) {
          return this.httpClient.post("".concat(this.custnew, "/generic/saveObject"), obj);
        }
      }, {
        key: "saveData",
        value: function saveData(obj) {
          // let body = JSON.stringify(gT);
          return this.httpClient.post("".concat(this.custnew, "/custGroupTran/save"), obj);
        }
      }, {
        key: "saveData2",
        value: function saveData2(obj) {
          // let body = JSON.stringify(gT);
          return this.httpClient.post("".concat(this.custnew, "/custGroupTran/saveBase"), obj);
        }
      }, {
        key: "saveTransaction",
        value: function saveTransaction(obj) {
          return this.httpClient.post("".concat(this.custnew, "/custGroupTran/saveObject"), obj);
        }
      }, {
        key: "saveCustomer",
        value: function saveCustomer(obj) {
          return this.httpClient.post("".concat(this.custnew, "/customerPayment/save"), obj);
        }
      }, {
        key: "saveCustomer2",
        value: function saveCustomer2(obj) {
          return this.httpClient.post("".concat(this.custnew, "/customerPayment/saveBase"), obj);
        }
      }, {
        key: "savePayment",
        value: function savePayment(obj) {
          return this.httpClient.post("".concat(this.custnew, "/customer/saveObject"), obj);
        }
      }, {
        key: "saveMaintainance",
        value: function saveMaintainance(obj) {
          return this.httpClient.post("".concat(this.custnew, "/custGroupMaint/saveobject"), obj);
        }
      }, {
        key: "SaveMaintainanceArray",
        value: function SaveMaintainanceArray(obj) {
          return this.httpClient.post("".concat(this.custnew, "/custGroupMaint/save"), obj);
        }
      }, {
        key: "SaveMaintainanceArray2",
        value: function SaveMaintainanceArray2(obj) {
          return this.httpClient.post("".concat(this.custnew, "/custGroupMaint/saveBase"), obj);
        } // AuthService(custGroup:string,markerId:string)
        // {
        // return this.httpClient.post<CustomerMaintainance>(`${this.uri}/custGroupMaint/saveBase/${custGroup}/${markerId}`);
        // }

      }, {
        key: "AuthMaintainance",
        value: function AuthMaintainance(custGroup, markerId) {
          return this.httpClient.get("".concat(this.custnew, "/custGroupMaint/verify/").concat(custGroup, "/").concat(markerId));
        }
      }, {
        key: "AuthTransaction",
        value: function AuthTransaction(custGroup, markerId) {
          return this.httpClient.get("".concat(this.custnew, "/custGroupTran/verify/").concat(custGroup, "/").concat(markerId));
        }
      }, {
        key: "AuthExternal",
        value: function AuthExternal(id, extSystemCode, extSystemName, makerId) {
          return this.httpClient.get("".concat(this.custnew, "/external/verify/").concat(id, "/").concat(extSystemCode, "/").concat(extSystemName, "/").concat(makerId));
        }
      }, {
        key: "AuthPayment",
        value: function AuthPayment(custGroup, externalGroup, markerId) {
          return this.httpClient.get("".concat(this.custnew, "/customerPayment/verify/").concat(custGroup, "/").concat(externalGroup, "/").concat(markerId));
        }
      }, {
        key: "AuthGeneric",
        value: function AuthGeneric(id, accountType, accountConsideringPeriod, makerId) {
          return this.httpClient.get("".concat(this.custnew, "/generic/verify/").concat(id, "/").concat(accountType, "/").concat(accountConsideringPeriod, "/").concat(makerId));
        }
      }, {
        key: "closeMaintainance",
        value: function closeMaintainance(custGroup, markerId) {
          return this.httpClient.get("".concat(this.custnew, "/custGroupMaint/close/").concat(custGroup, "/").concat(markerId));
        }
      }, {
        key: "closeTransaction",
        value: function closeTransaction(custGroup, markerId) {
          return this.httpClient.get("".concat(this.custnew, "/custGroupTran/close/").concat(custGroup, "/").concat(markerId));
        }
      }, {
        key: "closePayment",
        value: function closePayment(custGroup, externalGroup, markerId) {
          return this.httpClient.get("".concat(this.custnew, "/customerPayment/close/").concat(custGroup, "/").concat(externalGroup, "/").concat(markerId));
        }
      }, {
        key: "closeGeneric",
        value: function closeGeneric(id, accountType, accountConsideringPeriod, makerId) {
          return this.httpClient.get("".concat(this.custnew, "/generic/close/").concat(id, "/").concat(accountType, "/").concat(accountConsideringPeriod, "/").concat(makerId));
        }
      }, {
        key: "closeExternal",
        value: function closeExternal(id, extSystemCode, extSystemName, makerId) {
          return this.httpClient.get("".concat(this.custnew, "/external/close/").concat(id, "/").concat(extSystemCode, "/").concat(extSystemName, "/").concat(makerId));
        }
      }, {
        key: "openMaintainance",
        value: function openMaintainance(custGroup, markerId) {
          return this.httpClient.get("".concat(this.custnew, "/custGroupMaint/reopen/").concat(custGroup, "/").concat(markerId));
        }
      }, {
        key: "openTransaction",
        value: function openTransaction(custGroup, makerId) {
          return this.httpClient.get("".concat(this.custnew, "/custGroupTran/reOpen/").concat(custGroup, "/").concat(makerId));
        } // deleteGeneric(id:number,accountType:string)
        // {
        //   return this.httpClient.delete<boolean>(`${this.uri}/generic/delete/${id}/${accountType}`);
        // }

      }, {
        key: "openGeneric",
        value: function openGeneric(id, accountType, accountConsideringPeriod, makerId) {
          return this.httpClient.get("".concat(this.custnew, "/generic/reopen/").concat(id, "/").concat(accountType, "/").concat(accountConsideringPeriod, "/").concat(makerId));
        }
      }, {
        key: "openPayment",
        value: function openPayment(custGroup, externalGroup, markerId) {
          return this.httpClient.get("".concat(this.custnew, "/customerPayment/reOpen/").concat(custGroup, "/").concat(externalGroup, "/").concat(markerId));
        }
      }, {
        key: "openExternal",
        value: function openExternal(id, extSystemCode, extSystemName, makerId) {
          return this.httpClient.get("".concat(this.custnew, "/external/reOpen/").concat(id, "/").concat(extSystemCode, "/").concat(extSystemName, "/").concat(makerId));
        }
      }, {
        key: "saveCustomerUpdate",
        value: function saveCustomerUpdate(obj) {
          return this.httpClient.put("".concat(this.custnew, "/custGroupMaint/update"), obj);
        }
      }, {
        key: "customerMaintainanceDelete",
        value: function customerMaintainanceDelete(customerNo, custGroup) {
          return this.httpClient["delete"]("".concat(this.custnew, "/custGroupMaint/delete/").concat(customerNo, "/").concat(custGroup));
        }
      }, {
        key: "customerTransactionUpdate",
        value: function customerTransactionUpdate(obj) {
          return this.httpClient.put("".concat(this.custnew, "/custGroupTran/update"), obj);
        }
      }, {
        key: "ExternalTransaction1Update",
        value: function ExternalTransaction1Update(obj) {
          return this.httpClient.put("".concat(this.custnew, "/external/update1"), obj);
        }
      }, {
        key: "ExternalTransaction2Update",
        value: function ExternalTransaction2Update(obj) {
          return this.httpClient.put("".concat(this.custnew, "/external/update2"), obj);
        }
      }, {
        key: "customerGenericUpdate",
        value: function customerGenericUpdate(obj) {
          return this.httpClient.put("".concat(this.custnew, "/generic/update"), obj);
        }
      }, {
        key: "customerPaymentUpdate",
        value: function customerPaymentUpdate(obj) {
          return this.httpClient.put("".concat(this.custnew, "/customerPayment/update"), obj);
        }
      }, {
        key: "delete",
        value: function _delete(custGroup) {
          return this.httpClient["delete"]("".concat(this.custnew, "/custGroupMaint/deleteWholeRecord/").concat(custGroup));
        }
      }, {
        key: "deleteTransaction",
        value: function deleteTransaction(custGroup) {
          return this.httpClient["delete"]("".concat(this.custnew, "/custGroupTran/deleteWholeRecord/").concat(custGroup));
        }
      }, {
        key: "deletePayment",
        value: function deletePayment(custGroup, externalGroup) {
          return this.httpClient["delete"]("".concat(this.custnew, "/customerPayment/deleteWholeRecord/").concat(custGroup, "/").concat(externalGroup));
        }
      }, {
        key: "deleteGeneric1",
        value: function deleteGeneric1(id, accountType) {
          return this.httpClient["delete"]("".concat(this.custnew, "/generic/deleteWholeRecord/").concat(id, "/").concat(accountType));
        }
      }, {
        key: "deleteCustomerTransaction",
        value: function deleteCustomerTransaction(id, custGroup) {
          return this.httpClient["delete"]("".concat(this.custnew, "/custGroupTran/delete/").concat(id, "/").concat(custGroup));
        }
      }, {
        key: "deleteGeneric",
        value: function deleteGeneric(id, accountType) {
          return this.httpClient["delete"]("".concat(this.custnew, "/generic/delete/").concat(id, "/").concat(accountType));
        }
      }, {
        key: "deleteExternal1",
        value: function deleteExternal1(id, accountType) {
          return this.httpClient["delete"]("".concat(this.custnew, "/external/delete1/").concat(id, "/").concat(accountType));
        }
      }, {
        key: "deleteExternal2",
        value: function deleteExternal2(id, accountType) {
          return this.httpClient["delete"]("".concat(this.custnew, "/external/delete2/").concat(id, "/").concat(accountType));
        }
      }, {
        key: "deletePaymentMonitoring",
        value: function deletePaymentMonitoring(id, custGroup) {
          return this.httpClient["delete"]("".concat(this.custnew, "/customerPayment/delete/").concat(id, "/").concat(custGroup));
        }
      }, {
        key: "saveTableOne",
        value: function saveTableOne(tableOne) {
          //console.log("inside services");
          //console.log("table one is:"+tableOne);
          return this.httpClient.post("".concat(this.custnew, "/external/save/ObjectArray1"), tableOne);
        }
      }, {
        key: "saveTable1",
        value: function saveTable1(tableOne) {
          return this.httpClient.post("".concat(this.custnew, "/external/saveBase"), tableOne);
        }
      }, {
        key: "ontableSecond",
        value: function ontableSecond(secondtab) {
          //console.log("second table is:"+secondtab);
          return this.httpClient.post("".concat(this.custnew, "/external/save/ObjectArray2"), secondtab);
        }
      }, {
        key: "getBy",
        value: function getBy(custGroup) {
          return this.httpClient.get("".concat(this.custnew, "/custGroupMaint/getByCustGroup/").concat(custGroup));
        }
      }, {
        key: "getCust",
        value: function getCust(custGroup) {
          return this.httpClient.get("".concat(this.custnew, "/custGroupMaint/getBaseLog/").concat(custGroup));
        }
      }, {
        key: "getByCustomerTransaction",
        value: function getByCustomerTransaction(custGroup) {
          //console.log(custGroup);
          return this.httpClient.get("".concat(this.custnew, "/custGroupTran/getCustGroup/").concat(custGroup));
        }
      }, {
        key: "getByTransaction",
        value: function getByTransaction(custGroup) {
          //console.log(custGroup);
          return this.httpClient.get("".concat(this.custnew, "/custGroupTran/getBaseLog/").concat(custGroup));
        }
      }, {
        key: "getByPayment2",
        value: function getByPayment2(custGroup, externalGroup) {
          return this.httpClient.get("".concat(this.custnew, "/customerPayment/getBaseLog/").concat(custGroup, "/").concat(externalGroup));
        }
      }, {
        key: "getByExternalSystem",
        value: function getByExternalSystem(extSystemCode) {
          //console.log(extSystemCode);
          return this.httpClient.get("".concat(this.custnew, "/external/getExternalSystemAccsCode/").concat(extSystemCode));
        }
      }, {
        key: "getByExternalSystem2",
        value: function getByExternalSystem2(extSystemCode) {
          //console.log(extSystemCode);
          return this.httpClient.get("".concat(this.custnew, "/external/getExternalSystemTransCode/").concat(extSystemCode));
        }
      }, {
        key: "getByCustomerGeneric",
        value: function getByCustomerGeneric(accountType) {
          //console.log(accountType);
          return this.httpClient.get("".concat(this.custnew, "/generic/getByAccountType/").concat(accountType));
        }
      }, {
        key: "getGeneric",
        value: function getGeneric(id, accountType, accountConsideringPeriod) {
          return this.httpClient.get("".concat(this.custnew, "/generic/getAll/").concat(id, "/").concat(accountType, "/").concat(accountConsideringPeriod));
        }
      }, {
        key: "getExtern",
        value: function getExtern(id, extSystemCode, extSystemName) {
          return this.httpClient.get("".concat(this.custnew, "/external/getAll/").concat(id, "/").concat(extSystemCode, "/").concat(extSystemName));
        }
      }, {
        key: "getByCustomerPayment",
        value: function getByCustomerPayment(customerGroup) {
          //console.log(customerGroup);
          return this.httpClient.get("".concat(this.custnew, "/customerPayment/getByCustGroupAndExternalGroup/").concat(customerGroup));
        }
      }, {
        key: "getByPayment",
        value: function getByPayment(customerGroup) {
          return this.httpClient.get("".concat(this.custnew, "/customerPayment/getByCustGroup/").concat(customerGroup));
        } //  getAll(){
        //   // let body = JSON.stringify(gT);
        //   return this.httpClient.get<string[]>(`${this.uri}/custGroupMaint/get`);
        //   }
        // getAll(): Observable<any> {
        //   return this.httpClient.get(`${${this.uri}}/do/getList`);
        // }

      }, {
        key: "getAllService",
        value: function getAllService() {
          return this.httpClient.get("".concat(this.custnew, "/custGroupMaint/getSummary"));
        }
      }, {
        key: "getAllTransaction",
        value: function getAllTransaction() {
          return this.httpClient.get("".concat(this.custnew, "/custGroupTran/getSummary"));
        }
      }, {
        key: "getAllGeneric",
        value: function getAllGeneric() {
          return this.httpClient.get("".concat(this.custnew, "/generic/getSummary"));
        }
      }, {
        key: "getAllPayment",
        value: function getAllPayment() {
          return this.httpClient.get("".concat(this.custnew, "/customerPayment/getSummary"));
        }
      }, {
        key: "getAllExternals",
        value: function getAllExternals() {
          return this.httpClient.get("".concat(this.custnew, "/external/getSummary"));
        }
      }, {
        key: "getExternal",
        value: function getExternal() {
          // let body = JSON.stringify(gT);
          return this.httpClient.get("".concat(this.custnew, "/external/get"));
        }
      }, {
        key: "getGroups",
        value: function getGroups() {
          // let body = JSON.stringify(gT);
          return this.httpClient.get("".concat(this.custnew, "/custGroupMaint/get"));
        }
      }, {
        key: "getAccounts",
        value: function getAccounts() {
          return this.httpClient.get("".concat(this.custnew, "/generic/get"));
        }
      }, {
        key: "saveLogin",
        value: function saveLogin(obj) {
          return this.httpClient.post("".concat(this.custnew, "/external/saveBase"), obj);
        }
      }]);

      return FMSApiService;
    }();

    FMSApiService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    FMSApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])], FMSApiService);
    /***/
  },

  /***/
  "./src/app/views/audit-logs/audit-logs-routing.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/views/audit-logs/audit-logs-routing.module.ts ***!
    \***************************************************************/

  /*! exports provided: auditRoutes */

  /***/
  function srcAppViewsAuditLogsAuditLogsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "auditRoutes", function () {
      return auditRoutes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _audit_logs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./audit-logs.component */
    "./src/app/views/audit-logs/audit-logs.component.ts");

    var auditRoutes = [{
      path: '',
      component: _audit_logs_component__WEBPACK_IMPORTED_MODULE_1__["AuditLogsComponent"]
    }];
    /***/
  },

  /***/
  "./src/app/views/audit-logs/audit-logs.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/views/audit-logs/audit-logs.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewsAuditLogsAuditLogsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table {\r\n  border-collapse: initial;\r\n  width:100%;\r\n  /* text-align: center !important; */\r\n}\r\nth {\r\n  font-weight: small;\r\n  height: 25px !important;\r\n\r\n}\r\ntr {\r\n  font-weight: small;\r\n  height: 25px !important;\r\n\r\n}\r\n/* .mat-header-cell {\r\n  text-align: center;\r\n  height: 25px !important;\r\n\r\n}\r\n\r\n.mat-cell {\r\n  text-align: center;\r\n  height: 25px !important;\r\n\r\n}\r\n\r\n\r\ntr:nth-child(even) {\r\n  height: 25px !important;\r\n}\r\n\r\n\r\nmat-paginator {\r\n  width: auto !important;\r\n  height: 40px !important;\r\n}\r\n\r\nmd-pagination-wrapper {\r\n  width: auto !important;\r\n  height: 40px !important;\r\n}\r\n\r\n.mat-raised-button {\r\n  width: 120px;\r\n  height: 27px;\r\n  line-height: 27px;\r\n  min-height: 27px;\r\n  vertical-align: top;\r\n  font-size: 11px;\r\n  padding: 0 0;\r\n  margin: 0;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYXVkaXQtbG9ncy9hdWRpdC1sb2dzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLG1DQUFtQztBQUNyQztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1Qjs7QUFFekI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7O0FBRXpCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQ0ciLCJmaWxlIjoic3JjL2FwcC92aWV3cy9hdWRpdC1sb2dzL2F1ZGl0LWxvZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGluaXRpYWw7XHJcbiAgd2lkdGg6MTAwJTtcclxuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDsgKi9cclxufVxyXG50aCB7XHJcbiAgZm9udC13ZWlnaHQ6IHNtYWxsO1xyXG4gIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG50ciB7XHJcbiAgZm9udC13ZWlnaHQ6IHNtYWxsO1xyXG4gIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4vKiAubWF0LWhlYWRlci1jZWxsIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4ubWF0LWNlbGwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcblxyXG50cjpudGgtY2hpbGQoZXZlbikge1xyXG4gIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxubWF0LXBhZ2luYXRvciB7XHJcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxubWQtcGFnaW5hdGlvbi13cmFwcGVyIHtcclxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDI3cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgbWluLWhlaWdodDogMjdweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBwYWRkaW5nOiAwIDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59ICovIl19 */";
    /***/
  },

  /***/
  "./src/app/views/audit-logs/audit-logs.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/views/audit-logs/audit-logs.component.ts ***!
    \**********************************************************/

  /*! exports provided: AuditLogsComponent */

  /***/
  function srcAppViewsAuditLogsAuditLogsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuditLogsComponent", function () {
      return AuditLogsComponent;
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


    var src_app_shared_services_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/shared/services/date.service */
    "./src/app/shared/services/date.service.ts");
    /* harmony import */


    var src_app_shared_services_fmsapi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/shared/services/fmsapi.service */
    "./src/app/shared/services/fmsapi.service.ts");
    /* harmony import */


    var _excel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./excel.service */
    "./src/app/views/audit-logs/excel.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var jspdf_autotable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! jspdf-autotable */
    "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
    /* harmony import */


    var jspdf_autotable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var jspdf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! jspdf */
    "./node_modules/jspdf/dist/jspdf.min.js");
    /* harmony import */


    var jspdf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_8__);

    var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    var EXCEL_EXTENSION = '.xlsx';

    var AuditLogsComponent = /*#__PURE__*/function () {
      function AuditLogsComponent(auditService, dateService, cdr, excelService) {
        _classCallCheck(this, AuditLogsComponent);

        this.auditService = auditService;
        this.dateService = dateService;
        this.cdr = cdr;
        this.excelService = excelService;
        this.formatsDateTest = ['dd/MM/yyyy', 'dd/MM/yyyy hh:mm:ss', 'dd-MM-yyyy', 'dd-MM-yyyy HH:mm:ss', 'MM/dd/yyyy', 'MM/dd/yyyy hh:mm:ss', 'yyyy/MM/dd', 'yyyy/MM/dd HH:mm:ss', 'dd/MM/yy', 'dd/MM/yy hh:mm:ss'];
        this.formatDate = 'dd/MM/yyyy_hh:mm:ss';
        this.dateNow = new Date();
        this.dateNowISO = this.dateNow.toISOString();
        this.dateNowMilliseconds = this.dateNow.getTime();
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US');
        this.now = Date.now();
        this.myFormattedDate = this.pipe.transform(this.now, 'dd-MMM-yy');
        this.displayedColumns = ['log', 'creatorId', 'actionPerformBy', 'record', 'action', 'timeForExport'];
      }

      _createClass(AuditLogsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getAuditLogList();
        }
      }, {
        key: "getAuditLogList",
        value: function getAuditLogList() {
          var _this = this;

          this.auditService.getAllAuditData().subscribe(function (data) {
            _this.auditlogdata = data; ////console.log(this.auditlogdata);

            _this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](_this.auditlogdata);
            _this.dataSource.paginator = _this.paginator;
            _this.dataSource.sort = _this.sort;
          });
        }
      }, {
        key: "applyFilter",
        value: function applyFilter(filterValue) {
          this.dataSource.filter = filterValue.trim().toLowerCase();
        } // fromTo(from: Date, to: Date) {
        //   //console.log(from);
        //   //console.log(to);
        //   let fromDate: any = this.dateService.convertDate(from);
        //   let toDate: any = this.dateService.convertDate(to);
        //   this.auditService.getAllAuditDataByDate(fromDate, toDate).subscribe(data => {
        //     this.auditlogdataexport = data;
        //     this.cdr.markForCheck();
        //     //console.log(this.auditlogdataexport);
        //   });
        //   this.buttonforexport = true;
        //   this.matTable = false;
        //   this.cdr.markForCheck();
        // }
        // default() {
        //   this.matTable = true;
        //   this.buttonforexport = false;
        // }

      }, {
        key: "exportAsXLSX",
        value: function exportAsXLSX() {
          var _this2 = this;

          this.auditlogdata.forEach(function (element) {
            element.timeForExport = _this2.pipe.transform(element.timeForExport, 'dd-MMM-yy').toString();
            element.updatedAt = _this2.pipe.transform(element.updatedAt, 'dd-MMM-yy').toString();
            element.creatorDtStamp = _this2.pipe.transform(element.creatorDtStamp, 'dd-MMM-yy').toString();
          }); //console.log(this.auditlogdata);

          this.excelService.exportAsExcelFile(this.auditlogdata, 'Audit_Report');
        }
      }, {
        key: "convert",
        value: function convert() {
          var doc = new jspdf__WEBPACK_IMPORTED_MODULE_8___default.a();
          var col = [["Screen", "creatorId", "ActionPerformBy", "Record", "Action", "Time"]];
          var rows = [];
          /* The following array of object as response from the API req  */

          var itemNew = this.auditlogdata;
          itemNew.forEach(function (element) {
            var date = new Date(element.timeForExport).toLocaleDateString("en-us");
            console.log(date);
            var temp = [element.log, element.creatorId, element.actionPerformBy, element.record, element.action, date];
            rows.push(temp);
          }); //doc.autoTable(col, rows);

          doc.autoTable({
            head: col,
            body: rows
          });
          doc.save('AuditLog.pdf');
        }
      }]);

      return AuditLogsComponent;
    }();

    AuditLogsComponent.ctorParameters = function () {
      return [{
        type: src_app_shared_services_fmsapi_service__WEBPACK_IMPORTED_MODULE_4__["FMSApiService"]
      }, {
        type: src_app_shared_services_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _excel_service__WEBPACK_IMPORTED_MODULE_5__["ExcelService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])], AuditLogsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], {
      "static": true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])], AuditLogsComponent.prototype, "sort", void 0);
    AuditLogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-audit-logs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./audit-logs.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/views/audit-logs/audit-logs.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./audit-logs.component.css */
      "./src/app/views/audit-logs/audit-logs.component.css"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_fmsapi_service__WEBPACK_IMPORTED_MODULE_4__["FMSApiService"], src_app_shared_services_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _excel_service__WEBPACK_IMPORTED_MODULE_5__["ExcelService"]])], AuditLogsComponent);
    /***/
  },

  /***/
  "./src/app/views/audit-logs/audit-logs.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/views/audit-logs/audit-logs.module.ts ***!
    \*******************************************************/

  /*! exports provided: AuditLogsModule */

  /***/
  function srcAppViewsAuditLogsAuditLogsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuditLogsModule", function () {
      return AuditLogsModule;
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


    var _audit_logs_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./audit-logs-routing.module */
    "./src/app/views/audit-logs/audit-logs-routing.module.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _audit_logs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./audit-logs.component */
    "./src/app/views/audit-logs/audit-logs.component.ts");
    /* harmony import */


    var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/flex-layout */
    "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/shared/angular-material/angular-material.module */
    "./src/app/shared/angular-material/angular-material.module.ts");
    /* harmony import */


    var _excel_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./excel.service */
    "./src/app/views/audit-logs/excel.service.ts");

    var AuditLogsModule = /*#__PURE__*/_createClass(function AuditLogsModule() {
      _classCallCheck(this, AuditLogsModule);
    });

    AuditLogsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_audit_logs_component__WEBPACK_IMPORTED_MODULE_5__["AuditLogsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"], src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_8__["AngularMaterialModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_audit_logs_routing_module__WEBPACK_IMPORTED_MODULE_3__["auditRoutes"])],
      providers: [_excel_service__WEBPACK_IMPORTED_MODULE_9__["ExcelService"]]
    })], AuditLogsModule);
    /***/
  },

  /***/
  "./src/app/views/audit-logs/excel.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/views/audit-logs/excel.service.ts ***!
    \***************************************************/

  /*! exports provided: ExcelService */

  /***/
  function srcAppViewsAuditLogsExcelServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExcelService", function () {
      return ExcelService;
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


    var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! file-saver */
    "./node_modules/file-saver/dist/FileSaver.min.js");
    /* harmony import */


    var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! xlsx */
    "./node_modules/xlsx/xlsx.js");
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    var EXCEL_EXTENSION = '.xlsx';

    var ExcelService = /*#__PURE__*/function () {
      function ExcelService() {
        _classCallCheck(this, ExcelService);

        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]('en-US');
        this.now = Date.now();
        this.myFormattedDate = this.pipe.transform(this.now, 'dd-MMM-yy');
      }

      _createClass(ExcelService, [{
        key: "exportAsExcelFile",
        value: function exportAsExcelFile(json, excelFileName) {
          var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(json); //console.log('worksheet',worksheet);

          var workbook = {
            Sheets: {
              'data': worksheet
            },
            SheetNames: ['data']
          };
          var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__["write"](workbook, {
            bookType: 'xlsx',
            type: 'array'
          }); //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });

          this.saveAsExcelFile(excelBuffer, excelFileName);
        }
      }, {
        key: "saveAsExcelFile",
        value: function saveAsExcelFile(buffer, fileName) {
          var data = new Blob([buffer], {
            type: EXCEL_TYPE
          });
          file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](data, fileName + '_export_' + this.myFormattedDate + EXCEL_EXTENSION);
        }
      }]);

      return ExcelService;
    }();

    ExcelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])], ExcelService);
    /***/
  }
}]);
//# sourceMappingURL=views-audit-logs-audit-logs-module-es5.js.map