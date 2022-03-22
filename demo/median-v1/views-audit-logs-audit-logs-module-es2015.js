(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-audit-logs-audit-logs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/audit-logs/audit-logs.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/views/audit-logs/audit-logs.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\" style=\"height:30px; font-size: small;\">\r\n  <span>Audit logs</span>\r\n</mat-toolbar>\r\n<br>\r\n<!-- <div class=\"margin-333\">\r\n  <form #fname novalidate>\r\n    <div fxLayout=\"row\">\r\n      <span fxFlex></span>\r\n      <div fxFlex=\"40\">\r\n        <mat-card>\r\n          <mat-card-title></mat-card-title>\r\n          <mat-card-content>\r\n            <div class=\"pb-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput [matDatepicker]=\"picker\" placeholder=\" From Date\" #to>\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                <mat-datepicker #picker></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"pb-1\">\r\n              <mat-form-field class=\"full-width\">\r\n                <input matInput [matDatepicker]=\"picker1\" placeholder=\" To Date\" #from>\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                <mat-datepicker #picker1></mat-datepicker>\r\n              </mat-form-field>\r\n            </div>\r\n          </mat-card-content>\r\n        </mat-card>\r\n      </div>\r\n      <span fxFlex></span>\r\n    </div>\r\n    <br>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"5px\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"fromTo(from.value,to.value)\">Submit</button>\r\n      <button mat-raised-button color=\"primary\" (click)=\"openDialog()\" *ngIf=\"buttonforexport\">Export as Excel</button>\r\n      <button mat-raised-button color=\"primary\" (click)=\"default()\" *ngIf=\"buttonforexport\">Default</button>\r\n      <button mat-raised-button color=\"warn\" routerLink=\"/dashboard\">Exit</button>\r\n    </div>\r\n  </form>\r\n</div> -->\r\n<br>\r\n<!-- <mat-card *ngIf=\"buttonforexport\">\r\n  <mat-card-content>\r\n    <table class=\"cart-table default-bg\">\r\n      <thead>\r\n        <tr>\r\n          <th>Log</th>\r\n          <th>Time</th>\r\n          <th>Record</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let data of auditlogdataexport\">\r\n          <td>{{ data.log }}</td>\r\n          <td>{{ data.timeForExport  | date: 'M/d/yy, h:mm a' }}</td>\r\n          <td>{{ data.record }}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </mat-card-content>\r\n</mat-card> -->\r\n\r\n<!-- <button (click)=\"exportAsXLSX()\" mat-button color=\"primary\">Download <i class=\"material-icons\">\r\n  cloud_download\r\n  </i></button> -->\r\n  <button\r\n  mat-button >\r\n\r\n  <mat-label>Export As</mat-label>\r\n\r\n  <mat-select\r\n    #select>\r\n    <mat-option (click)=\"exportAsXLSX()\" >Excel</mat-option>\r\n    <mat-option  (click)=\"convert()\">PDF</mat-option>\r\n  </mat-select>\r\n\r\n</button>\r\n    <div class=\"mat-elevation-z8\">\r\n        <mat-form-field>\r\n            <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n          </mat-form-field>\r\n      <!--matSort matSortActive=\"timeForExport\" matSortDirection=\"desc\"-->\r\n      <table mat-table [dataSource]=\"dataSource\"    matSort matSortActive=\"timeForExport\" matSortDirection=\"desc\">\r\n       \r\n        \r\n        <ng-container matColumnDef=\"log\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Screen </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.log}} </td>\r\n        </ng-container>\r\n   \r\n        <ng-container matColumnDef=\"creatorId\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Creator </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.creatorId}} </td>\r\n        </ng-container>\r\n        <ng-container matColumnDef=\"actionPerformBy\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>ActionPerformBy </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.actionPerformBy}} </td>\r\n        </ng-container>\r\n   \r\n        <ng-container matColumnDef=\"record\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Record</th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.record}} </td>\r\n        </ng-container>\r\n    \r\n        <ng-container matColumnDef=\"action\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Action</th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.action}} </td>\r\n        </ng-container>\r\n     \r\n        <ng-container matColumnDef=\"timeForExport\">\r\n          <th mat-header-cell *matHeaderCellDef mat-sort-header>Time</th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.timeForExport | date: 'MM/dd/yyyy, h:mm a'}} </td>\r\n        </ng-container>\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n      </table>\r\n      <mat-paginator [pageSizeOptions]=\"[10, 15, 20]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n\r\n\r\n\r\n<br>");

/***/ }),

/***/ "./src/app/shared/services/fmsapi.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/fmsapi.service.ts ***!
  \***************************************************/
/*! exports provided: FMSApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FMSApiService", function() { return FMSApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _config_app_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/app.constant */ "./src/app/shared/config/app.constant.ts");




let FMSApiService = class FMSApiService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        //private uri = AppConstants.baseURL + '/api';
        this.uri = _config_app_constant__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseURL;
        this.custnew = _config_app_constant__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseURL;
        this.uriForExt = _config_app_constant__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseURL + '/extsys';
        this.uriTag = _config_app_constant__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseURL + '/tag';
        this.API_URL = _config_app_constant__WEBPACK_IMPORTED_MODULE_3__["AppConstants"].baseURL;
    }
    pushFileToStorage(file) {
        const formdata = new FormData();
        formdata.append('file', file);
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', `${this.API_URL}/extSysPro/upload`, formdata, {
            reportProgress: true,
            responseType: 'text'
        });
        return this.httpClient.request(req);
    }
    fetchColumnsExtSysProService(desc) {
        return this.httpClient.get(`${this.API_URL}/extSysPro/columnNames/${desc}`);
    }
    fetchByDateExtSysProService(eodDate) {
        return this.httpClient.get(`${this.API_URL}/extSysPro/fetchEodLogger/${eodDate}`);
    }
    callExtSysProPackageService(desc) {
        return this.httpClient.get(`${this.API_URL}/extSysPro/runExtProPackage/${desc}`);
    }
    fetchExtSysProDescService() {
        return this.httpClient.get(`${this.API_URL}/extSysPro/descList`);
    }
    fetchDataByPcOrCrService(product) {
        return this.httpClient.get(`${this.API_URL}/trade/fetchTrade/${product}`);
    }
    senTradeObjectService(tradeSim) {
        return this.httpClient.post(`${this.API_URL}/trade/fetchProjection`, tradeSim);
    }
    triggerEodFunctionService() {
        return this.httpClient.get(`${this.API_URL}/flexEod/triggerEod`);
    }
    fetchByAccNumService(account) {
        return this.httpClient.get(`${this.API_URL}/simLoan/getByAccount/${account}`);
    }
    loanSimProcessService() {
        return this.httpClient.get(`${this.API_URL}/simLoan/getProjection/`);
    }
    saveExtSysMaintenanceService(rulesDTO) {
        return this.httpClient.post(`${this.API_URL}/extSysMain/saveExtRules`, rulesDTO);
    }
    fetchByExtSysCodeAndFlexModService(sysName, fModule) {
        return this.httpClient.get(`${this.API_URL}/extSysMain/getExtRules/${sysName}/${fModule}`);
    }
    closeRecordExtSysMainService(systemName, status) {
        return this.httpClient.get(`${this.API_URL}/extSysMain/updateStatus/${systemName}/${status}`);
    }
    fetchExtSlabService() {
        return this.httpClient.get(`${this.API_URL}/extSysMain/getExtSlab/`);
    }
    // audit Logs
    getAllAuditData() {
        return this.httpClient.get(`${this.uri}` + '/auditLogs/getAllAuditLogs');
    }
    getAllAuditDataByDate(from, to) {
        return this.httpClient.get(`${this.uri}/dataauditsList/${from}/${to}`);
    }
    // dashboard
    getAllDashboard() {
        return this.httpClient.get(`${this.uri}` + '/dashboardchartdata');
    }
    // external system
    getAllExtSys() {
        return this.httpClient.get(`${this.uriForExt}` + '/extsysdata');
    }
    fetchAllAuthExternalSystem() {
        return this.httpClient.get(`${this.uriForExt}` + '/fetchAuthExtSystem');
    }
    createExtSys(extSys) {
        return this.httpClient.post(`${this.uriForExt}` + '/createExtSys', extSys);
    }
    modifyExtSysService(modifyextSys) {
        return this.httpClient.put(`${this.uriForExt}` + `/modifyextSys`, modifyextSys);
    }
    verifyExtSys(extSysName, userIdLoggedIn) {
        return this.httpClient.get(`${this.uriForExt}/verify/${extSysName}/${userIdLoggedIn}`);
    }
    deleteExtSys(extSysName, userIdLoggedIn) {
        return this.httpClient.delete(`${this.uriForExt}/${extSysName}/${userIdLoggedIn}`, { responseType: 'text' });
    }
    closelockRecordExtSys(extSysName, userIdLoggedIn) {
        return this.httpClient.get(`${this.uriForExt}/close/${extSysName}/${userIdLoggedIn}`);
    }
    reopenRecordExtSys(extSysName, userIdLoggedIn) {
        return this.httpClient.get(`${this.uriForExt}/reOpen/${extSysName}/${userIdLoggedIn}`);
    }
    // tag service
    getAllTags() {
        return this.httpClient.get(`${this.uriTag}` + '/tagdata');
    }
    fetchAllAuthTags() {
        return this.httpClient.get(`${this.uriTag}` + '/fetchAuthTags');
    }
    createTag(tags) {
        return this.httpClient.post(`${this.uriTag}` + '/createTag', tags);
    }
    modifyTagService(modifytag) {
        return this.httpClient.put(`${this.uriTag}` + `/modifytag`, modifytag);
    }
    verifyTag(tagName, userIdLoggedIn) {
        return this.httpClient.get(`${this.uriTag}/verify/${tagName}/${userIdLoggedIn}`);
    }
    deleteTag(tagName, userIdLoggedIn) {
        return this.httpClient.delete(`${this.uriTag}/${tagName}/${userIdLoggedIn}`, { responseType: 'text' });
    }
    closelockTag(tagName, userIdLoggedIn) {
        return this.httpClient.get(`${this.uriTag}/close/${tagName}/${userIdLoggedIn}`);
    }
    reopenRecordTag(tagName, userIdLoggedIn) {
        return this.httpClient.get(`${this.uriTag}/reOpen/${tagName}/${userIdLoggedIn}`);
    }
    saveFetched(obj) {
        // let body = JSON.stringify(gT);
        return this.httpClient.post(`${this.custnew}/generic/save`, obj);
    }
    saveFetched1(obj) {
        // let body = JSON.stringify(gT);
        return this.httpClient.post(`${this.custnew}/generic/saveBase`, obj);
    }
    saveGeneric(obj) {
        return this.httpClient.post(`${this.custnew}/generic/saveObject`, obj);
    }
    saveData(obj) {
        // let body = JSON.stringify(gT);
        return this.httpClient.post(`${this.custnew}/custGroupTran/save`, obj);
    }
    saveData2(obj) {
        // let body = JSON.stringify(gT);
        return this.httpClient.post(`${this.custnew}/custGroupTran/saveBase`, obj);
    }
    saveTransaction(obj) {
        return this.httpClient.post(`${this.custnew}/custGroupTran/saveObject`, obj);
    }
    saveCustomer(obj) {
        return this.httpClient.post(`${this.custnew}/customerPayment/save`, obj);
    }
    saveCustomer2(obj) {
        return this.httpClient.post(`${this.custnew}/customerPayment/saveBase`, obj);
    }
    savePayment(obj) {
        return this.httpClient.post(`${this.custnew}/customer/saveObject`, obj);
    }
    saveMaintainance(obj) {
        return this.httpClient.post(`${this.custnew}/custGroupMaint/saveobject`, obj);
    }
    SaveMaintainanceArray(obj) {
        return this.httpClient.post(`${this.custnew}/custGroupMaint/save`, obj);
    }
    SaveMaintainanceArray2(obj) {
        return this.httpClient.post(`${this.custnew}/custGroupMaint/saveBase`, obj);
    }
    // AuthService(custGroup:string,markerId:string)
    // {
    // return this.httpClient.post<CustomerMaintainance>(`${this.uri}/custGroupMaint/saveBase/${custGroup}/${markerId}`);
    // }
    AuthMaintainance(custGroup, markerId) {
        return this.httpClient.get(`${this.custnew}/custGroupMaint/verify/${custGroup}/${markerId}`);
    }
    AuthTransaction(custGroup, markerId) {
        return this.httpClient.get(`${this.custnew}/custGroupTran/verify/${custGroup}/${markerId}`);
    }
    AuthExternal(id, extSystemCode, extSystemName, makerId) {
        return this.httpClient.get(`${this.custnew}/external/verify/${id}/${extSystemCode}/${extSystemName}/${makerId}`);
    }
    AuthPayment(custGroup, externalGroup, markerId) {
        return this.httpClient.get(`${this.custnew}/customerPayment/verify/${custGroup}/${externalGroup}/${markerId}`);
    }
    AuthGeneric(id, accountType, accountConsideringPeriod, makerId) {
        return this.httpClient.get(`${this.custnew}/generic/verify/${id}/${accountType}/${accountConsideringPeriod}/${makerId}`);
    }
    closeMaintainance(custGroup, markerId) {
        return this.httpClient.get(`${this.custnew}/custGroupMaint/close/${custGroup}/${markerId}`);
    }
    closeTransaction(custGroup, markerId) {
        return this.httpClient.get(`${this.custnew}/custGroupTran/close/${custGroup}/${markerId}`);
    }
    closePayment(custGroup, externalGroup, markerId) {
        return this.httpClient.get(`${this.custnew}/customerPayment/close/${custGroup}/${externalGroup}/${markerId}`);
    }
    closeGeneric(id, accountType, accountConsideringPeriod, makerId) {
        return this.httpClient.get(`${this.custnew}/generic/close/${id}/${accountType}/${accountConsideringPeriod}/${makerId}`);
    }
    closeExternal(id, extSystemCode, extSystemName, makerId) {
        return this.httpClient.get(`${this.custnew}/external/close/${id}/${extSystemCode}/${extSystemName}/${makerId}`);
    }
    openMaintainance(custGroup, markerId) {
        return this.httpClient.get(`${this.custnew}/custGroupMaint/reopen/${custGroup}/${markerId}`);
    }
    openTransaction(custGroup, makerId) {
        return this.httpClient.get(`${this.custnew}/custGroupTran/reOpen/${custGroup}/${makerId}`);
    }
    // deleteGeneric(id:number,accountType:string)
    // {
    //   return this.httpClient.delete<boolean>(`${this.uri}/generic/delete/${id}/${accountType}`);
    // }
    openGeneric(id, accountType, accountConsideringPeriod, makerId) {
        return this.httpClient.get(`${this.custnew}/generic/reopen/${id}/${accountType}/${accountConsideringPeriod}/${makerId}`);
    }
    openPayment(custGroup, externalGroup, markerId) {
        return this.httpClient.get(`${this.custnew}/customerPayment/reOpen/${custGroup}/${externalGroup}/${markerId}`);
    }
    openExternal(id, extSystemCode, extSystemName, makerId) {
        return this.httpClient.get(`${this.custnew}/external/reOpen/${id}/${extSystemCode}/${extSystemName}/${makerId}`);
    }
    saveCustomerUpdate(obj) {
        return this.httpClient.put(`${this.custnew}/custGroupMaint/update`, obj);
    }
    customerMaintainanceDelete(customerNo, custGroup) {
        return this.httpClient.delete(`${this.custnew}/custGroupMaint/delete/${customerNo}/${custGroup}`);
    }
    customerTransactionUpdate(obj) {
        return this.httpClient.put(`${this.custnew}/custGroupTran/update`, obj);
    }
    ExternalTransaction1Update(obj) {
        return this.httpClient.put(`${this.custnew}/external/update1`, obj);
    }
    ExternalTransaction2Update(obj) {
        return this.httpClient.put(`${this.custnew}/external/update2`, obj);
    }
    customerGenericUpdate(obj) {
        return this.httpClient.put(`${this.custnew}/generic/update`, obj);
    }
    customerPaymentUpdate(obj) {
        return this.httpClient.put(`${this.custnew}/customerPayment/update`, obj);
    }
    delete(custGroup) {
        return this.httpClient.delete(`${this.custnew}/custGroupMaint/deleteWholeRecord/${custGroup}`);
    }
    deleteTransaction(custGroup) {
        return this.httpClient.delete(`${this.custnew}/custGroupTran/deleteWholeRecord/${custGroup}`);
    }
    deletePayment(custGroup, externalGroup) {
        return this.httpClient.delete(`${this.custnew}/customerPayment/deleteWholeRecord/${custGroup}/${externalGroup}`);
    }
    deleteGeneric1(id, accountType) {
        return this.httpClient.delete(`${this.custnew}/generic/deleteWholeRecord/${id}/${accountType}`);
    }
    deleteCustomerTransaction(id, custGroup) {
        return this.httpClient.delete(`${this.custnew}/custGroupTran/delete/${id}/${custGroup}`);
    }
    deleteGeneric(id, accountType) {
        return this.httpClient.delete(`${this.custnew}/generic/delete/${id}/${accountType}`);
    }
    deleteExternal1(id, accountType) {
        return this.httpClient.delete(`${this.custnew}/external/delete1/${id}/${accountType}`);
    }
    deleteExternal2(id, accountType) {
        return this.httpClient.delete(`${this.custnew}/external/delete2/${id}/${accountType}`);
    }
    deletePaymentMonitoring(id, custGroup) {
        return this.httpClient.delete(`${this.custnew}/customerPayment/delete/${id}/${custGroup}`);
    }
    saveTableOne(tableOne) {
        //console.log("inside services");
        //console.log("table one is:"+tableOne);
        return this.httpClient.post(`${this.custnew}/external/save/ObjectArray1`, tableOne);
    }
    saveTable1(tableOne) {
        return this.httpClient.post(`${this.custnew}/external/saveBase`, tableOne);
    }
    ontableSecond(secondtab) {
        //console.log("second table is:"+secondtab);
        return this.httpClient.post(`${this.custnew}/external/save/ObjectArray2`, secondtab);
    }
    getBy(custGroup) {
        return this.httpClient.get(`${this.custnew}/custGroupMaint/getByCustGroup/${custGroup}`);
    }
    getCust(custGroup) {
        return this.httpClient.get(`${this.custnew}/custGroupMaint/getBaseLog/${custGroup}`);
    }
    getByCustomerTransaction(custGroup) {
        //console.log(custGroup);
        return this.httpClient.get(`${this.custnew}/custGroupTran/getCustGroup/${custGroup}`);
    }
    getByTransaction(custGroup) {
        //console.log(custGroup);
        return this.httpClient.get(`${this.custnew}/custGroupTran/getBaseLog/${custGroup}`);
    }
    getByPayment2(custGroup, externalGroup) {
        return this.httpClient.get(`${this.custnew}/customerPayment/getBaseLog/${custGroup}/${externalGroup}`);
    }
    getByExternalSystem(extSystemCode) {
        //console.log(extSystemCode);
        return this.httpClient.get(`${this.custnew}/external/getExternalSystemAccsCode/${extSystemCode}`);
    }
    getByExternalSystem2(extSystemCode) {
        //console.log(extSystemCode);
        return this.httpClient.get(`${this.custnew}/external/getExternalSystemTransCode/${extSystemCode}`);
    }
    getByCustomerGeneric(accountType) {
        //console.log(accountType);
        return this.httpClient.get(`${this.custnew}/generic/getByAccountType/${accountType}`);
    }
    getGeneric(id, accountType, accountConsideringPeriod) {
        return this.httpClient.get(`${this.custnew}/generic/getAll/${id}/${accountType}/${accountConsideringPeriod}`);
    }
    getExtern(id, extSystemCode, extSystemName) {
        return this.httpClient.get(`${this.custnew}/external/getAll/${id}/${extSystemCode}/${extSystemName}`);
    }
    getByCustomerPayment(customerGroup) {
        //console.log(customerGroup);
        return this.httpClient.get(`${this.custnew}/customerPayment/getByCustGroupAndExternalGroup/${customerGroup}`);
    }
    getByPayment(customerGroup) {
        return this.httpClient.get(`${this.custnew}/customerPayment/getByCustGroup/${customerGroup}`);
    }
    //  getAll(){
    //   // let body = JSON.stringify(gT);
    //   return this.httpClient.get<string[]>(`${this.uri}/custGroupMaint/get`);
    //   }
    // getAll(): Observable<any> {
    //   return this.httpClient.get(`${${this.uri}}/do/getList`);
    // }
    getAllService() {
        return this.httpClient.get(`${this.custnew}/custGroupMaint/getSummary`);
    }
    getAllTransaction() {
        return this.httpClient.get(`${this.custnew}/custGroupTran/getSummary`);
    }
    getAllGeneric() {
        return this.httpClient.get(`${this.custnew}/generic/getSummary`);
    }
    getAllPayment() {
        return this.httpClient.get(`${this.custnew}/customerPayment/getSummary`);
    }
    getAllExternals() {
        return this.httpClient.get(`${this.custnew}/external/getSummary`);
    }
    getExternal() {
        // let body = JSON.stringify(gT);
        return this.httpClient.get(`${this.custnew}/external/get`);
    }
    getGroups() {
        // let body = JSON.stringify(gT);
        return this.httpClient.get(`${this.custnew}/custGroupMaint/get`);
    }
    getAccounts() {
        return this.httpClient.get(`${this.custnew}/generic/get`);
    }
    saveLogin(obj) {
        return this.httpClient.post(`${this.custnew}/external/saveBase`, obj);
    }
};
FMSApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
FMSApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], FMSApiService);



/***/ }),

/***/ "./src/app/views/audit-logs/audit-logs-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/audit-logs/audit-logs-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: auditRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "auditRoutes", function() { return auditRoutes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _audit_logs_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./audit-logs.component */ "./src/app/views/audit-logs/audit-logs.component.ts");


const auditRoutes = [
    {
        path: '',
        component: _audit_logs_component__WEBPACK_IMPORTED_MODULE_1__["AuditLogsComponent"]
    }
];


/***/ }),

/***/ "./src/app/views/audit-logs/audit-logs.component.css":
/*!***********************************************************!*\
  !*** ./src/app/views/audit-logs/audit-logs.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table {\r\n  border-collapse: initial;\r\n  width:100%;\r\n  /* text-align: center !important; */\r\n}\r\nth {\r\n  font-weight: small;\r\n  height: 25px !important;\r\n\r\n}\r\ntr {\r\n  font-weight: small;\r\n  height: 25px !important;\r\n\r\n}\r\n/* .mat-header-cell {\r\n  text-align: center;\r\n  height: 25px !important;\r\n\r\n}\r\n\r\n.mat-cell {\r\n  text-align: center;\r\n  height: 25px !important;\r\n\r\n}\r\n\r\n\r\ntr:nth-child(even) {\r\n  height: 25px !important;\r\n}\r\n\r\n\r\nmat-paginator {\r\n  width: auto !important;\r\n  height: 40px !important;\r\n}\r\n\r\nmd-pagination-wrapper {\r\n  width: auto !important;\r\n  height: 40px !important;\r\n}\r\n\r\n.mat-raised-button {\r\n  width: 120px;\r\n  height: 27px;\r\n  line-height: 27px;\r\n  min-height: 27px;\r\n  vertical-align: top;\r\n  font-size: 11px;\r\n  padding: 0 0;\r\n  margin: 0;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvYXVkaXQtbG9ncy9hdWRpdC1sb2dzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBd0I7RUFDeEIsVUFBVTtFQUNWLG1DQUFtQztBQUNyQztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1Qjs7QUFFekI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQix1QkFBdUI7O0FBRXpCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FxQ0ciLCJmaWxlIjoic3JjL2FwcC92aWV3cy9hdWRpdC1sb2dzL2F1ZGl0LWxvZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICBib3JkZXItY29sbGFwc2U6IGluaXRpYWw7XHJcbiAgd2lkdGg6MTAwJTtcclxuICAvKiB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDsgKi9cclxufVxyXG50aCB7XHJcbiAgZm9udC13ZWlnaHQ6IHNtYWxsO1xyXG4gIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG50ciB7XHJcbiAgZm9udC13ZWlnaHQ6IHNtYWxsO1xyXG4gIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG5cclxufVxyXG4vKiAubWF0LWhlYWRlci1jZWxsIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgaGVpZ2h0OiAyNXB4ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4ubWF0LWNlbGwge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBoZWlnaHQ6IDI1cHggIWltcG9ydGFudDtcclxuXHJcbn1cclxuXHJcblxyXG50cjpudGgtY2hpbGQoZXZlbikge1xyXG4gIGhlaWdodDogMjVweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5cclxubWF0LXBhZ2luYXRvciB7XHJcbiAgd2lkdGg6IGF1dG8gIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDQwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxubWQtcGFnaW5hdGlvbi13cmFwcGVyIHtcclxuICB3aWR0aDogYXV0byAhaW1wb3J0YW50O1xyXG4gIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWF0LXJhaXNlZC1idXR0b24ge1xyXG4gIHdpZHRoOiAxMjBweDtcclxuICBoZWlnaHQ6IDI3cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI3cHg7XHJcbiAgbWluLWhlaWdodDogMjdweDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIGZvbnQtc2l6ZTogMTFweDtcclxuICBwYWRkaW5nOiAwIDA7XHJcbiAgbWFyZ2luOiAwO1xyXG59ICovIl19 */");

/***/ }),

/***/ "./src/app/views/audit-logs/audit-logs.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/audit-logs/audit-logs.component.ts ***!
  \**********************************************************/
/*! exports provided: AuditLogsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditLogsComponent", function() { return AuditLogsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var src_app_shared_services_date_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/date.service */ "./src/app/shared/services/date.service.ts");
/* harmony import */ var src_app_shared_services_fmsapi_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/fmsapi.service */ "./src/app/shared/services/fmsapi.service.ts");
/* harmony import */ var _excel_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./excel.service */ "./src/app/views/audit-logs/excel.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jspdf-autotable */ "./node_modules/jspdf-autotable/dist/jspdf.plugin.autotable.js");
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.min.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_8__);







const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';


let AuditLogsComponent = class AuditLogsComponent {
    constructor(auditService, dateService, cdr, excelService) {
        this.auditService = auditService;
        this.dateService = dateService;
        this.cdr = cdr;
        this.excelService = excelService;
        this.formatsDateTest = [
            'dd/MM/yyyy',
            'dd/MM/yyyy hh:mm:ss',
            'dd-MM-yyyy',
            'dd-MM-yyyy HH:mm:ss',
            'MM/dd/yyyy',
            'MM/dd/yyyy hh:mm:ss',
            'yyyy/MM/dd',
            'yyyy/MM/dd HH:mm:ss',
            'dd/MM/yy',
            'dd/MM/yy hh:mm:ss',
        ];
        this.formatDate = 'dd/MM/yyyy_hh:mm:ss';
        this.dateNow = new Date();
        this.dateNowISO = this.dateNow.toISOString();
        this.dateNowMilliseconds = this.dateNow.getTime();
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"]('en-US');
        this.now = Date.now();
        this.myFormattedDate = this.pipe.transform(this.now, 'dd-MMM-yy');
        this.displayedColumns = ['log', 'creatorId', 'actionPerformBy', 'record', 'action', 'timeForExport'];
    }
    ngOnInit() {
        this.getAuditLogList();
    }
    getAuditLogList() {
        this.auditService.getAllAuditData().subscribe(data => {
            this.auditlogdata = data;
            ////console.log(this.auditlogdata);
            this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.auditlogdata);
            this.dataSource.paginator = this.paginator;
            this.dataSource.sort = this.sort;
        });
    }
    applyFilter(filterValue) {
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }
    // fromTo(from: Date, to: Date) {
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
    exportAsXLSX() {
        this.auditlogdata.forEach(element => {
            element.timeForExport = this.pipe.transform(element.timeForExport, 'dd-MMM-yy').toString();
            element.updatedAt = this.pipe.transform(element.updatedAt, 'dd-MMM-yy').toString();
            element.creatorDtStamp = this.pipe.transform(element.creatorDtStamp, 'dd-MMM-yy').toString();
        });
        //console.log(this.auditlogdata);
        this.excelService.exportAsExcelFile(this.auditlogdata, 'Audit_Report');
    }
    convert() {
        var doc = new jspdf__WEBPACK_IMPORTED_MODULE_8___default.a();
        var col = [["Screen", "creatorId", "ActionPerformBy", "Record", "Action", "Time"]];
        var rows = [];
        /* The following array of object as response from the API req  */
        var itemNew = this.auditlogdata;
        itemNew.forEach(element => {
            var date = new Date(element.timeForExport).toLocaleDateString("en-us");
            console.log(date);
            var temp = [element.log, element.creatorId, element.actionPerformBy, element.record, element.action, date];
            rows.push(temp);
        });
        //doc.autoTable(col, rows);
        doc.autoTable({
            head: col,
            body: rows
        });
        doc.save('AuditLog.pdf');
    }
};
AuditLogsComponent.ctorParameters = () => [
    { type: src_app_shared_services_fmsapi_service__WEBPACK_IMPORTED_MODULE_4__["FMSApiService"] },
    { type: src_app_shared_services_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _excel_service__WEBPACK_IMPORTED_MODULE_5__["ExcelService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"])
], AuditLogsComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"], { static: true }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSort"])
], AuditLogsComponent.prototype, "sort", void 0);
AuditLogsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-audit-logs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./audit-logs.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/views/audit-logs/audit-logs.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./audit-logs.component.css */ "./src/app/views/audit-logs/audit-logs.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_services_fmsapi_service__WEBPACK_IMPORTED_MODULE_4__["FMSApiService"],
        src_app_shared_services_date_service__WEBPACK_IMPORTED_MODULE_3__["DateService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _excel_service__WEBPACK_IMPORTED_MODULE_5__["ExcelService"]])
], AuditLogsComponent);



/***/ }),

/***/ "./src/app/views/audit-logs/audit-logs.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/audit-logs/audit-logs.module.ts ***!
  \*******************************************************/
/*! exports provided: AuditLogsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuditLogsModule", function() { return AuditLogsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _audit_logs_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./audit-logs-routing.module */ "./src/app/views/audit-logs/audit-logs-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _audit_logs_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./audit-logs.component */ "./src/app/views/audit-logs/audit-logs.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/angular-material/angular-material.module */ "./src/app/shared/angular-material/angular-material.module.ts");
/* harmony import */ var _excel_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./excel.service */ "./src/app/views/audit-logs/excel.service.ts");










let AuditLogsModule = class AuditLogsModule {
};
AuditLogsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_audit_logs_component__WEBPACK_IMPORTED_MODULE_5__["AuditLogsComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            src_app_shared_angular_material_angular_material_module__WEBPACK_IMPORTED_MODULE_8__["AngularMaterialModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_audit_logs_routing_module__WEBPACK_IMPORTED_MODULE_3__["auditRoutes"])
        ],
        providers: [_excel_service__WEBPACK_IMPORTED_MODULE_9__["ExcelService"]]
    })
], AuditLogsModule);



/***/ }),

/***/ "./src/app/views/audit-logs/excel.service.ts":
/*!***************************************************!*\
  !*** ./src/app/views/audit-logs/excel.service.ts ***!
  \***************************************************/
/*! exports provided: ExcelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelService", function() { return ExcelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");





const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
let ExcelService = class ExcelService {
    constructor() {
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]('en-US');
        this.now = Date.now();
        this.myFormattedDate = this.pipe.transform(this.now, 'dd-MMM-yy');
    }
    exportAsExcelFile(json, excelFileName) {
        const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(json);
        //console.log('worksheet',worksheet);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    }
    saveAsExcelFile(buffer, fileName) {
        const data = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](data, fileName + '_export_' + this.myFormattedDate + EXCEL_EXTENSION);
    }
};
ExcelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
], ExcelService);



/***/ })

}]);
//# sourceMappingURL=views-audit-logs-audit-logs-module-es2015.js.map