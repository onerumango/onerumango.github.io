"use strict";
(self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["default-src_app_shared_services_api_service_ts"],{

/***/ 91486:
/*!***********************************************!*\
  !*** ./src/app/shared/config/app.constant.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppConstants": function() { return /* binding */ AppConstants; }
/* harmony export */ });
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 93963);

class AppConstants {
    /*
    *Base URL is not used anywhere so dont change it and dont delete it
    */
    static get baseURL() {
        return src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.MEDIAN_URL;
    }
    static get acctCloserUrl() {
        return src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.ACC_CLOSER_URL;
    }
}


/***/ }),

/***/ 31781:
/*!************************************************!*\
  !*** ./src/app/shared/services/api.service.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "median": function() { return /* binding */ median; },
/* harmony export */   "API_URL": function() { return /* binding */ API_URL; },
/* harmony export */   "ApiService": function() { return /* binding */ ApiService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 33549);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 97361);
/* harmony import */ var _config_app_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config/app.constant */ 91486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1858);






// import { User } from "src/app/views/users/users.dto";
const median = _config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL;
const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({ 'Content-Type': 'application/json' })
};
const API_URL = _config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL;
class ApiService {
    constructor(http) {
        this.http = http;
        this.uriForExt = median + '/extsys';
        this.ext = median + '/excelExt';
        this.excelmap = median + '/excelmap';
        this.uriForMap = median + '/excelmap';
        this.dashboardapi = _config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/dashboard';
        this.API_URL = _config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL;
        this.processCodeMappingObject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            id: '',
            extSysCode: '',
            extSysName: '',
            commChannel: '',
            creatorDtStamp: '',
            creatorId: '',
            destination: '',
            destinationTag: '',
            dtdFile: '',
            errDirectoryName: '',
            errQueueName: '',
            errSchemaName: '',
            errXsltName: '',
            extSysTag: '',
            formatType: '',
            isDestNode: '',
            isExtSysNode: '',
            isModuleNode: '',
            isProcessNode: '',
            isServiceNode: '',
            latestAmendNo: '',
            messageType: '',
            moduleCode: '',
            moduleTag: '',
            msgDuplication: '',
            processCode: '',
            processTag: '',
            recordStatus: '',
            reqDirectoryName: '',
            reqQueueName: '',
            reqSchemaName: '',
            reqXsltName: '',
            requestTag: '',
            respDirectoryName: '',
            respQueueName: '',
            respSchemaName: '',
            respXsltName: '',
            responseTag: '',
            serviceCode: '',
            serviceTag: '',
            updatedAt: '',
            verifiedEver: '',
            verifierDtStamp: '',
            verifierId: '',
            xsdFile: '',
            authStatus: '',
            updatedBy: '',
            fristTimeAuth: '',
            versionNo: '',
            maxUploadLimit: '',
            fileName: '',
            bdav: '',
            backDateAllow: '',
            futureDateAllow: '',
            fdav: '',
            acft: '',
            autoUpload: '',
            filePath: '',
            fcyvariance: '',
            fcypercenatage: '',
            userName: '',
            password: '',
            port: '',
            ipAddress: '',
            sftpRequired: '',
            path: '',
            mandatoryFieldImposed: '',
            treasuryrefRequired: '',
            wuFile: '',
            verifiedOnce: ''
        });
        // -- Sytstem Param Maintenance  --
        // 1. Transaction Code Maintenance
        this.transactionCodeSummryData = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            userID: '',
            creatorDtStamp: '',
            creatorId: '',
            modNo: '',
            recordStatus: '',
            verifiedStatus: '',
            verifiedBy: '',
            verifiedOnce: '',
            verifiedTime: '',
            formValues: []
        });
        //File upload end
        // External System
        this.externalSystemData = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            authStatus: '',
            authorizedBy: '',
            authorizedTime: '',
            department: '',
            extSysCode: '',
            extSysName: '',
            modifiedBy: '',
            modifiedTime: '',
            recordStatus: '',
            verifiedOnce: '',
            version: '',
        });
        // Excel Mapping
        this.excelSummaryObject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            extCode: '',
            // processName: '',
            extSysName: '',
        });
        // this._baseURL = AppConstants.baseURL + '/role';
        this._baseURL = _config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/fmsRoles' + '/fetchAllRolesSummary';
        this._fmosbaseURL = _config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/fmsRoles';
    }
    getAllExtSys() {
        return this.http.get(`${this.uriForExt}` + '/extsysdata');
    }
    fetchnewscreenlabels() {
        return this.http.get(`${this._fmosbaseURL}` + '/fetchTabLabelAndScreen');
    }
    getProcessCode() {
        return this.processCodeMappingObject.asObservable();
    }
    setProcessCodeData(processCode) {
        this.processCodeMappingObject.next(processCode);
    }
    getAllExt() {
        return this.http.get(`${this.ext}` + '/getExt');
    }
    modifyExtSysService(modifyextSys) {
        return this.http.put(`${this.uriForExt}` + `/modifyextSys`, modifyextSys);
    }
    getMonitorData() {
        return this.http.get(`${API_URL}/excelDataForProcessScreeen/getMonitorData`);
    }
    getData() {
        // //console.log(this.http.get(`${this.dashboardapi}/dashboardchartdata`));
        return this.http.get(`${this.dashboardapi}/dashboardchartdata`);
    }
    createExtSys(extSys) {
        return this.http.post(`${this.uriForExt}` + '/createExtSys', extSys);
    }
    fetchMedUser(userId) {
        return this.http.get(`${API_URL}/login/getUserByUserId/${userId}`);
    }
    fetchSecurityPolicyService() {
        return this.http.get(`${API_URL}/securityPolicy/fetch`);
    }
    accountBlock(data) {
        return this.http.post(`${API_URL}/api/blockCustAcc`, data);
    }
    getAuthorizedExt() {
        return this.http.get(`${this.ext}/gettingExtsysCodeonAuthSatus`);
    }
    getOtp(login) {
        return this.http.post(`${API_URL}/login/otp`, login);
    }
    loginService(login) {
        return this.http.post(`${API_URL}/login/credentials`, login);
    }
    gettingTransactionCodeSummary() {
        return this.http.get(`${median}/config/getSummaryForTransactionCodeMapping`);
    }
    saveTrnCodeMaster(master) {
        return this.http.post(`${median}/config/saveTrnMaster`, master);
    }
    saveTrnCode(trnData, userId, loggedInuser) {
        return this.http.post(`${median}/config/saveTrn/${userId}/${loggedInuser}`, trnData);
    }
    getUserName() {
        return this.http.get(`${median}/config/getAllUsername`);
    }
    gettingTransactionDatabyID(UserId) {
        return this.http.get(`${API_URL}/config/getTrnData/${UserId}`);
    }
    setSummaryDataTransactionCode(summaryData) {
        this.transactionCodeSummryData.next(summaryData);
    }
    getSummaryDataTransactionCode() {
        return this.transactionCodeSummryData.asObservable();
    }
    deleteRow(id) {
        return this.http.delete(`${API_URL}/config/deleteRow/${id}`);
    }
    deleteUserData(UserId) {
        return this.http.delete(`${API_URL}/config/deleteWholeRecord/${UserId}`);
    }
    onClckOfAuthTransactionCode(userId, userIdLoggedIn) {
        return this.http.get(`${API_URL}/config/verify/${userId}/${userIdLoggedIn}`);
    }
    onclickOfCloseTransactionCode(userId, userIdLoggedIn) {
        return this.http.get(`${API_URL}/config/close/${userId}/${userIdLoggedIn}`);
    }
    onclickOfReopenTransactionCode(userId, userIdLoggedIn) {
        return this.http.get(`${API_URL}/config/reOpen/${userId}/${userIdLoggedIn}`);
    }
    updateAuditData(master) {
        return this.http.put(`${API_URL}/config/modifyMaster`, master);
    }
    updateTransactionCode(trnData, loggedInuser) {
        return this.http.put(`${API_URL}/config/modify/${loggedInuser}`, trnData);
    }
    todayUploadedBatches(userName) {
        return this.http.get(`${this.dashboardapi}/getUploadBatches/${userName}`);
    }
    getChartDetails() {
        return this.http.get(`${this.dashboardapi}/dashboardchartdata`);
    }
    pendingUnauthorizeBatches(userName) {
        return this.http.get(`${this.dashboardapi}/getPendingBatches/${userName}`);
    }
    authorizedBatchesByuser(userName) {
        return this.http.get(`${this.dashboardapi}/getAuthorizedBatches/${userName}`);
    }
    getAllRoles() {
        // return this.http.get(`${this._baseURL}` + '/roles');
        return this.http.get(`${this._baseURL}`);
    }
    getAllUsersListService() {
        return this.http.get(`${this.API_URL}/users/getAllUsers`);
    }
    // audit Logs
    getAllAuditData() {
        return this.http.get(`${this.API_URL}` + '/auditLogs/getAllAuditLogs');
    }
    getAllAuditDataByDate(from, to) {
        return this.http.get(`${this.API_URL}/dataauditsList/${from}/${to}`);
    }
    // 2. Global GI/ACC Maintenance
    getGlData() {
        return this.http.get(`${median}/config/globalsaveGlData`);
    }
    getAccData() {
        return this.http.get(`${median}/config/getAccData`);
    }
    deleteGlData(row, UserId) {
        return this.http.post(`${median}/config/deletegGlData/${UserId}`, row);
    }
    deleteAcData(row, UserId) {
        return this.http.post(`${median}/config/deleteAcData/${UserId}`, row);
    }
    saveGlCodeData(trnData, userId) {
        return this.http.post(`${median}/config/globalsaveGl/${userId}`, trnData);
    }
    saveAccountCodeData(trnData, userId) {
        return this.http.post(`${median}/config/gsaveActClass/${userId}`, trnData);
    }
    // 3. User GL Maintenance
    getUserIdGlData(UserId) {
        return this.http.get(`${API_URL}/config/getGlData/${UserId}`);
    }
    getUserIdAccData(UserId) {
        return this.http.get(`${API_URL}/config/getAccData/${UserId}`);
    }
    saveuserGlCode(trnData, userId, permission) {
        return this.http.post(`${API_URL}/config/saveGl/${userId}/${permission}`, trnData);
    }
    saveAccountClassCode(trnData, userId, permission) {
        return this.http.post(`${API_URL}/config/saveActClass/${userId}/${permission}`, trnData);
    }
    deleteAcDataUser(row, UserId) {
        return this.http.post(`${API_URL}/config/deleteAccountData/${UserId}`, row);
    }
    deleteGlDataUser(row, UserId) {
        return this.http.post(`${API_URL}/config/deleteUserGlData/${UserId}`, row);
    }
    //File upload start
    getAuditLogService(excelDataProcessingReqDTO, user_id) {
        return this.http.post(`${API_URL}/excelDataProcessing/getExcelDataProcessingAuditLog/${user_id}`, excelDataProcessingReqDTO);
    }
    showDetailServiceInExcelDataProcessing(excelDataProcessingReqDTO, user_id) {
        return this.http.post(`${API_URL}/excelDataProcessing/showDetails/${user_id}`, excelDataProcessingReqDTO);
    }
    getAllExtSysNamesService(userId) {
        return this.http.get(`${API_URL}/excelDataProcessing/getAllExtSysNames/${userId}`);
    }
    getUploadPermission(extSysName, processName) {
        return this.http.get(`${API_URL}/excelDataProcessing/getUploadPermission/${extSysName}/${processName}`);
    }
    getProcessNamesBasedOnExtSysNameService(extSysName) {
        return this.http.get(`${API_URL}/excelDataProcessing/getProcessCodeByExtSysName/${extSysName}`);
    }
    getAllTransactionCode(user_id) {
        return this.http.get(`${API_URL}/config/getTrnData/${user_id}`);
    }
    processDataService(modalProcessDataReqDTO, userName, remarks) {
        return this.http.post(`${API_URL}/excelDataForProcessScreeen/processData/${userName}/${remarks}`, modalProcessDataReqDTO);
    }
    test(userid) {
        // return this.http.get<any>(`${API_URL}/excelDataProcessing/t`);
        return this.http.get(`${API_URL}/excelDataProcessing/get/${userid}`);
    }
    showDetailServiceInExcelDataWithFile(file, extSysNameData, processNameData, filename) {
        // return this.http.post(
        //   `${API_URL}/excelDataProcessing/getExcelFile`,file
        const formdata = new FormData();
        formdata.append('file', file);
        const req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpRequest('POST', `${API_URL}/excelDataProcessing/getExcelFile/${extSysNameData}/${processNameData}/${filename}`, formdata, {
            reportProgress: true,
            responseType: 'text'
        });
        return this.http.request(req);
    }
    rejectCallApi(deUploadReqDTO, authorizer, rejectReason) {
        return this.http.post(`${API_URL}/excelDataAuthFirst/reject/${authorizer}/${rejectReason}`, deUploadReqDTO);
    }
    approveDetailsData(deUploadReqDTO, authorizer) {
        return this.http.post(`${API_URL}/excelDataAuthFirst/doFirstLevelAuthorization/${authorizer}`, deUploadReqDTO);
    }
    processDeUploadt(deUploadReqDTO, user_id) {
        return this.http.post(`${API_URL}/excelDataAuthFirst/processDeUpload/${user_id}`, deUploadReqDTO);
    }
    getFirstAndSecondAuthAuditService(getDetailsQueryToggleReqDTO) {
        return this.http.post(`${API_URL}/excelDataAuthFirst/getFirstAndSecondLevelAuthAuditLog/`, getDetailsQueryToggleReqDTO);
    }
    queryDetailsDataByParamService(getDetailsQueryToggleReqDTO) {
        return this.http.post(`${API_URL}/excelDataAuthFirst/getDetailsDataByToggleQuery`, getDetailsQueryToggleReqDTO);
    }
    getDetailsListServiceFirst() {
        return this.http.get(`${API_URL}/excelDataAuthFirst/getExcelDetail`);
    }
    getPendingForAuthDataFirst(userId) {
        return this.http.get(`${API_URL}/excelDataAuthFirst/getPendingAuth/${userId}`);
    }
    getAuditDataOfDetailsRecord(detailsDto) {
        return this.http.post(`${API_URL}/excelDataAuthFirst/getAuditLogOfDetailRecord/`, detailsDto);
    }
    queryFailedDetailsDataByParamService(getDetailsQueryToggleReqDTO) {
        return this.http.post(`${API_URL}/dataModificationDetails/getDetailsDataByToggleQuery`, getDetailsQueryToggleReqDTO);
    }
    getPendingForAuthDataForModification(user_id) {
        return this.http.get(`${API_URL}/dataModificationDetails/getPendingAuth/${user_id}`);
    }
    excelModifyAuthorization(PendingForAuthDetailsDTOList, user) {
        return this.http.post(`${API_URL}/dataModificationDetails/sendforAuth/${user}`, PendingForAuthDetailsDTOList);
    }
    getFailedDetailsListService() {
        return this.http.get(`${API_URL}/dataModificationDetails/getFailedDetailsList`);
    }
    authorizeSecondLevel(pendingForAuthDetailsListAll, authorizer) {
        return this.http.post(`${API_URL}/excelDataAuthSecond/doSecondLevelAuthorization/${authorizer}`, pendingForAuthDetailsListAll);
    }
    getSecondLevelAuthDetailsData() {
        return this.http.get(`${API_URL}/excelDataAuthSecond/getSecondAuthDetailsData`);
    }
    queryDetailsDataByParamServiceSecond(getDetailsQueryToggleReqDTO) {
        return this.http.post(`${API_URL}/excelDataAuthSecond/getDetailsDataByToggleQuery`, getDetailsQueryToggleReqDTO);
    }
    processDeUpload(deUploadReqDTO, user_id) {
        return this.http.post(`${API_URL}/excelDataAuthFirst/processDeUpload/${user_id}`, deUploadReqDTO);
    }
    getPendingForAuthDataFirstError(userId) {
        return this.http.get(`${API_URL}/dataModificationDetails/getPendingAuth/${userId}`);
    }
    getAllDept() {
        return this.http.get(`${this.ext}` + '/getAllAuthDepts');
    }
    saveExternalSystem(customer) {
        return this.http.post(`${this.ext}` + `/create`, customer);
    }
    setExternalSystemSummry(summaryData) {
        this.externalSystemData.next(summaryData);
    }
    getExternalSystemSummry() {
        return this.externalSystemData.asObservable();
    }
    updateexternalSystemEdit(formData) {
        return this.http.put(`${this.ext}` + `/update`, formData);
    }
    authorizingTheRecord(formData, name) {
        return this.http.put(`${this.ext}` + `/authorizetherecord/${name}`, formData);
    }
    closingTheRecord(formData) {
        return this.http.put(`${this.ext}` + `/toClosingTheRecord`, formData);
    }
    reopeningTheRecord(formData) {
        return this.http.put(`${this.ext}` + `/reopeningTheRecord`, formData);
    }
    onClickOfDeleteOfUpdateExcel(formData) {
        return this.http.put(`${this.ext}` + `/delete`, formData);
    }
    fetchingBatchNo() {
        return this.http.get(`${API_URL}/medUpload/getModule`);
    }
    getMappingSummary() {
        return this.http.get(`${this.excelmap}/fetchAllMappingData/`);
    }
    getAllExtsysNameAndProcessCodeOnAuthStatus() {
        return this.http.get(`${this.uriForExt}/gettingExtsysNameAndProcessCodeOnAuthStatus`);
    }
    getAllExtCode() {
        return this.http.get(`${this.uriForExt}` + '/getAllExtCode');
    }
    getProcessNameByExtSysCode(extSysCode) {
        return this.http.get(`${this.uriForExt}/processCodeByExtCode/${extSysCode}`);
    }
    getExtSysNameByExtSysCode(extSysCode) {
        return this.http.get(`${this.uriForMap}/getExtsysByExtCode/${extSysCode}`, { responseType: 'text' });
    }
    columnData(formData, extSys, processName, headerRepeated, startingRow, extCode, currency, userId, sheetNumber) {
        return this.http.post(`${this.excelmap}/postColumnMapping/${extSys}/${processName}/${headerRepeated}/${startingRow}/${extCode}/${currency}/${userId}/${sheetNumber}`, formData);
    }
    fetchAllName(externalSystem, processCode, ccy) {
        return this.http.get(`${this.uriForMap}/fetchAllName/${externalSystem}/${processCode}/${ccy}`);
    }
    getCurrencyOnExtNameAndProcssCode(extSysCode, processCode, extNameValue) {
        return this.http.get(`${this.uriForMap}/gettingCurrency/${extSysCode}/${processCode}/${extNameValue}`);
    }
    setexcelSummaryData(excelsummary) {
        this.excelSummaryObject.next(excelsummary);
    }
    getexcelSummaryData() {
        return this.excelSummaryObject.asObservable();
    }
    getAllMappingByExtSysAndProcessCode(externalSystem, processCode, ccy, sheetNumber) {
        return this.http.get(`${this.uriForMap}/fetchAllMapping/${externalSystem}/${processCode}/${ccy}/${sheetNumber}`);
    }
    updateMappingData(model, extNameValue, processCode, extSysCode, starting, isChecked, modifiedBy, ccy, sheetNumber) {
        return this.http.put(`${this.uriForMap}/updateMapping/${extNameValue}/${processCode}/${extSysCode}/${starting}/${isChecked}/${modifiedBy}/${ccy}/${sheetNumber}`, model);
    }
    deleteMappingRow(id) {
        return this.http.delete(`${this.uriForMap}/deleteMappingRow/${id}`);
    }
    onAuthorizingTheRecordOfExcelMApping(model, extNameValue, processCode, extSysCode, userId, ccy) {
        return this.http.put(`${this.uriForMap}/authOfRecord/${extNameValue}/${processCode}/${extSysCode}/${userId}/${ccy}`, model);
    }
    onClcikOFCloseOfUpdateExcelMApping(model, extNameValue, processCode, extSysCode, ccy) {
        return this.http.put(`${this.uriForMap}/closeOfRecord/${extNameValue}/${processCode}/${extSysCode}/${ccy}`, model);
    }
    onClcikOfReopenOfUpdateExcelMapping(model, extNameValue, processCode, extSysCode, ccy) {
        return this.http.put(`${this.uriForMap}/reOpenOfRecord/${extNameValue}/${processCode}/${extSysCode}/${ccy}`, model);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
ApiService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 93963:
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
const environment = {
    production: true,
    //MEDIAN_URL: 'http://10.127.43.228:8080/median',
    //ACC_CLOSER_URL: 'http://10.127.43.228:8080/medianAccountClosure'//account closer new
    //MEDIAN_URL: 'https://10.137.160.96:8443/medianv2.2',
    //ACC_CLOSER_URL: 'https://10.137.160.96:8443/medianAccountClosure'//account closer new
    // MEDIAN_URL: 'https://10.137.145.90:8443/medianv2.2',
    //ACC_CLOSER_URL: 'https://10.137.145.90:8443/medianAccountClosure'//account closer new
    //MEDIAN_URL: 'https://10.137.160.96:8443/medianv2',
    //ACC_CLOSER_URL: 'https://10.137.160.96:8443/medianv2'//account closer new
    // MEDIAN_URL: 'http://localhost:9191', // phase2 for local testing
    // ACC_CLOSER_URL: 'http://localhost:9192'//account closer for local testing
    // MEDIAN_URL: 'http://localhost:9192', // phase2 for local testing
    // ACC_CLOSER_URL: 'http://localhost:9191'//account closer for local testing
    MEDIAN_URL: 'http://192.168.0.14:8082/medianv2',
    ACC_CLOSER_URL: 'http://192.168.0.14:8089/medianAccountClosure'
};


/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_services_api_service_ts-es2015.js.map