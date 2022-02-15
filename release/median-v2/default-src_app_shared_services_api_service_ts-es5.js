(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["default-src_app_shared_services_api_service_ts"], {
    /***/
    94761:
    /*!************************************************!*\
      !*** ./src/app/shared/services/api.service.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "median": function median() {
          return (
            /* binding */
            _median
          );
        },

        /* harmony export */
        "API_URL": function API_URL() {
          return (
            /* binding */
            _API_URL
          );
        },

        /* harmony export */
        "ApiService": function ApiService() {
          return (
            /* binding */
            _ApiService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var _config_app_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../config/app.constant */
      3118);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316); // import { User } from "src/app/views/users/users.dto";


      var _median = _config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL;
      var httpOptions = {
        headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpHeaders({
          'Content-Type': 'application/json'
        })
      };
      var _API_URL = _config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL;

      var _ApiService = /*#__PURE__*/function () {
        function _ApiService(http) {
          _classCallCheck(this, _ApiService);

          this.http = http;
          this.uriForExt = _median + '/extsys';
          this.ext = _median + '/excelExt';
          this.excelmap = _median + '/excelmap';
          this.uriForMap = _median + '/excelmap';
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
          }); // -- Sytstem Param Maintenance  --
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
          }); //File upload end
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
            version: ''
          }); // Excel Mapping

          this.excelSummaryObject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            extCode: '',
            // processName: '',
            extSysName: ''
          }); // this._baseURL = AppConstants.baseURL + '/role';

          this._baseURL = _config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/fmsRoles' + '/fetchAllRolesSummary';
          this._fmosbaseURL = _config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/fmsRoles';
        }

        _createClass(_ApiService, [{
          key: "getAllExtSys",
          value: function getAllExtSys() {
            return this.http.get("".concat(this.uriForExt) + '/extsysdata');
          }
        }, {
          key: "fetchnewscreenlabels",
          value: function fetchnewscreenlabels() {
            return this.http.get("".concat(this._fmosbaseURL) + '/fetchTabLabelAndScreen');
          }
        }, {
          key: "changePasswordService",
          value: function changePasswordService(obj) {
            return this.http.post("".concat(_API_URL, "/login/changePassword/"), obj);
          }
        }, {
          key: "getProcessCode",
          value: function getProcessCode() {
            return this.processCodeMappingObject.asObservable();
          }
        }, {
          key: "setProcessCodeData",
          value: function setProcessCodeData(processCode) {
            this.processCodeMappingObject.next(processCode);
          }
        }, {
          key: "getAllExt",
          value: function getAllExt() {
            return this.http.get("".concat(this.ext) + '/getExt');
          }
        }, {
          key: "modifyExtSysService",
          value: function modifyExtSysService(modifyextSys) {
            return this.http.put("".concat(this.uriForExt) + "/modifyextSys", modifyextSys);
          }
        }, {
          key: "getMonitorData",
          value: function getMonitorData() {
            return this.http.get("".concat(_API_URL, "/excelDataForProcessScreeen/getMonitorData"));
          }
        }, {
          key: "getData",
          value: function getData() {
            // //console.log(this.http.get(`${this.dashboardapi}/dashboardchartdata`));
            return this.http.get("".concat(this.dashboardapi, "/dashboardchartdata"));
          }
        }, {
          key: "createExtSys",
          value: function createExtSys(extSys) {
            return this.http.post("".concat(this.uriForExt) + '/createExtSys', extSys);
          }
        }, {
          key: "fetchMedUser",
          value: function fetchMedUser(userId) {
            return this.http.get("".concat(_API_URL, "/login/getUserByUserId/").concat(userId));
          }
        }, {
          key: "fetchSecurityPolicyService",
          value: function fetchSecurityPolicyService() {
            return this.http.get("".concat(_API_URL, "/securityPolicy/fetch"));
          }
        }, {
          key: "accountBlock",
          value: function accountBlock(data) {
            return this.http.post("".concat(_API_URL, "/api/blockCustAcc"), data);
          }
        }, {
          key: "getAuthorizedExt",
          value: function getAuthorizedExt() {
            return this.http.get("".concat(this.ext, "/gettingExtsysCodeonAuthSatus"));
          }
        }, {
          key: "getOtp",
          value: function getOtp(login) {
            return this.http.post("".concat(_API_URL, "/login/otp"), login);
          }
        }, {
          key: "loginService",
          value: function loginService(login) {
            return this.http.post("".concat(_API_URL, "/login/credentials"), login);
          }
        }, {
          key: "gettingTransactionCodeSummary",
          value: function gettingTransactionCodeSummary() {
            return this.http.get("".concat(_median, "/config/getSummaryForTransactionCodeMapping"));
          }
        }, {
          key: "saveTrnCodeMaster",
          value: function saveTrnCodeMaster(master) {
            return this.http.post("".concat(_median, "/config/saveTrnMaster"), master);
          }
        }, {
          key: "saveTrnCode",
          value: function saveTrnCode(trnData, userId, loggedInuser) {
            return this.http.post("".concat(_median, "/config/saveTrn/").concat(userId, "/").concat(loggedInuser), trnData);
          }
        }, {
          key: "getUserName",
          value: function getUserName() {
            return this.http.get("".concat(_median, "/config/getAllUsername"));
          }
        }, {
          key: "gettingTransactionDatabyID",
          value: function gettingTransactionDatabyID(UserId) {
            return this.http.get("".concat(_API_URL, "/config/getTrnData/").concat(UserId));
          }
        }, {
          key: "setSummaryDataTransactionCode",
          value: function setSummaryDataTransactionCode(summaryData) {
            this.transactionCodeSummryData.next(summaryData);
          }
        }, {
          key: "getSummaryDataTransactionCode",
          value: function getSummaryDataTransactionCode() {
            return this.transactionCodeSummryData.asObservable();
          }
        }, {
          key: "deleteRow",
          value: function deleteRow(id) {
            return this.http["delete"]("".concat(_API_URL, "/config/deleteRow/").concat(id));
          }
        }, {
          key: "deleteUserData",
          value: function deleteUserData(UserId) {
            return this.http["delete"]("".concat(_API_URL, "/config/deleteWholeRecord/").concat(UserId));
          }
        }, {
          key: "onClckOfAuthTransactionCode",
          value: function onClckOfAuthTransactionCode(userId, userIdLoggedIn) {
            return this.http.get("".concat(_API_URL, "/config/verify/").concat(userId, "/").concat(userIdLoggedIn));
          }
        }, {
          key: "onclickOfCloseTransactionCode",
          value: function onclickOfCloseTransactionCode(userId, userIdLoggedIn) {
            return this.http.get("".concat(_API_URL, "/config/close/").concat(userId, "/").concat(userIdLoggedIn));
          }
        }, {
          key: "onclickOfReopenTransactionCode",
          value: function onclickOfReopenTransactionCode(userId, userIdLoggedIn) {
            return this.http.get("".concat(_API_URL, "/config/reOpen/").concat(userId, "/").concat(userIdLoggedIn));
          }
        }, {
          key: "updateAuditData",
          value: function updateAuditData(master) {
            return this.http.put("".concat(_API_URL, "/config/modifyMaster"), master);
          }
        }, {
          key: "updateTransactionCode",
          value: function updateTransactionCode(trnData, loggedInuser) {
            return this.http.put("".concat(_API_URL, "/config/modify/").concat(loggedInuser), trnData);
          }
        }, {
          key: "todayUploadedBatches",
          value: function todayUploadedBatches(userName) {
            return this.http.get("".concat(this.dashboardapi, "/getUploadBatches/").concat(userName));
          }
        }, {
          key: "getChartDetails",
          value: function getChartDetails() {
            return this.http.get("".concat(this.dashboardapi, "/dashboardchartdata"));
          }
        }, {
          key: "pendingUnauthorizeBatches",
          value: function pendingUnauthorizeBatches(userName) {
            return this.http.get("".concat(this.dashboardapi, "/getPendingBatches/").concat(userName));
          }
        }, {
          key: "authorizedBatchesByuser",
          value: function authorizedBatchesByuser(userName) {
            return this.http.get("".concat(this.dashboardapi, "/getAuthorizedBatches/").concat(userName));
          }
        }, {
          key: "getAllRoles",
          value: function getAllRoles() {
            // return this.http.get(`${this._baseURL}` + '/roles');
            return this.http.get("".concat(this._baseURL));
          }
        }, {
          key: "getAllUsersListService",
          value: function getAllUsersListService() {
            return this.http.get("".concat(this.API_URL, "/users/getAllUsers"));
          } // audit Logs

        }, {
          key: "getAllAuditData",
          value: function getAllAuditData() {
            return this.http.get("".concat(this.API_URL) + '/auditLogs/getAllAuditLogs');
          }
        }, {
          key: "getAllAuditDataByDate",
          value: function getAllAuditDataByDate(from, to) {
            return this.http.get("".concat(this.API_URL, "/dataauditsList/").concat(from, "/").concat(to));
          } // 2. Global GI/ACC Maintenance

        }, {
          key: "getGlData",
          value: function getGlData() {
            return this.http.get("".concat(_median, "/config/globalsaveGlData"));
          }
        }, {
          key: "getAccData",
          value: function getAccData() {
            return this.http.get("".concat(_median, "/config/getAccData"));
          }
        }, {
          key: "deleteGlData",
          value: function deleteGlData(row, UserId) {
            return this.http.post("".concat(_median, "/config/deletegGlData/").concat(UserId), row);
          }
        }, {
          key: "deleteAcData",
          value: function deleteAcData(row, UserId) {
            return this.http.post("".concat(_median, "/config/deleteAcData/").concat(UserId), row);
          }
        }, {
          key: "saveGlCodeData",
          value: function saveGlCodeData(trnData, userId) {
            return this.http.post("".concat(_median, "/config/globalsaveGl/").concat(userId), trnData);
          }
        }, {
          key: "saveAccountCodeData",
          value: function saveAccountCodeData(trnData, userId) {
            return this.http.post("".concat(_median, "/config/gsaveActClass/").concat(userId), trnData);
          } // 3. User GL Maintenance

        }, {
          key: "getUserIdGlData",
          value: function getUserIdGlData(UserId) {
            return this.http.get("".concat(_API_URL, "/config/getGlData/").concat(UserId));
          }
        }, {
          key: "getUserIdAccData",
          value: function getUserIdAccData(UserId) {
            return this.http.get("".concat(_API_URL, "/config/getAccData/").concat(UserId));
          }
        }, {
          key: "saveuserGlCode",
          value: function saveuserGlCode(trnData, userId, permission) {
            return this.http.post("".concat(_API_URL, "/config/saveGl/").concat(userId, "/").concat(permission), trnData);
          }
        }, {
          key: "saveAccountClassCode",
          value: function saveAccountClassCode(trnData, userId, permission) {
            return this.http.post("".concat(_API_URL, "/config/saveActClass/").concat(userId, "/").concat(permission), trnData);
          }
        }, {
          key: "deleteAcDataUser",
          value: function deleteAcDataUser(row, UserId) {
            return this.http.post("".concat(_API_URL, "/config/deleteAccountData/").concat(UserId), row);
          }
        }, {
          key: "deleteGlDataUser",
          value: function deleteGlDataUser(row, UserId) {
            return this.http.post("".concat(_API_URL, "/config/deleteUserGlData/").concat(UserId), row);
          } //File upload start

        }, {
          key: "getAuditLogService",
          value: function getAuditLogService(excelDataProcessingReqDTO, user_id) {
            return this.http.post("".concat(_API_URL, "/excelDataProcessing/getExcelDataProcessingAuditLog/").concat(user_id), excelDataProcessingReqDTO);
          }
        }, {
          key: "showDetailServiceInExcelDataProcessing",
          value: function showDetailServiceInExcelDataProcessing(excelDataProcessingReqDTO, user_id) {
            // return this.http.post(
            //   `${API_URL}/excelDataProcessing/showDetails/${user_id}`,
            //   excelDataProcessingReqDTO
            // );
            return this.http.post("".concat(_API_URL, "/excelDataProcessing/uploadExcelFile/").concat(user_id), excelDataProcessingReqDTO);
          }
        }, {
          key: "getAllExtSysNamesService",
          value: function getAllExtSysNamesService(userId) {
            return this.http.get("".concat(_API_URL, "/excelDataProcessing/getAllExtSysNames/").concat(userId));
          }
        }, {
          key: "getUploadPermission",
          value: function getUploadPermission(extSysName, processName) {
            return this.http.get("".concat(_API_URL, "/excelDataProcessing/getUploadPermission/").concat(extSysName, "/").concat(processName));
          }
        }, {
          key: "getProcessNamesBasedOnExtSysNameService",
          value: function getProcessNamesBasedOnExtSysNameService(extSysName) {
            return this.http.get("".concat(_API_URL, "/excelDataProcessing/getProcessCodeByExtSysName/").concat(extSysName));
          }
        }, {
          key: "getAllTransactionCode",
          value: function getAllTransactionCode(user_id) {
            return this.http.get("".concat(_API_URL, "/config/getTrnData/").concat(user_id));
          }
        }, {
          key: "processDataService",
          value: function processDataService(modalProcessDataReqDTO, userName, remarks) {
            // return this.http.post<boolean>(
            //   `${API_URL}/excelDataForProcessScreeen/processData/${userName}/${remarks}`,
            //   modalProcessDataReqDTO
            // );
            return this.http.post("".concat(_API_URL, "/excelDataForProcessScreeen/processExcelData/").concat(userName, "/").concat(remarks), modalProcessDataReqDTO);
          }
        }, {
          key: "test",
          value: function test(userid) {
            // return this.http.get<any>(`${API_URL}/excelDataProcessing/t`);
            return this.http.get("".concat(_API_URL, "/excelDataProcessing/get/").concat(userid));
          }
        }, {
          key: "showDetailServiceInExcelDataWithFile",
          value: function showDetailServiceInExcelDataWithFile(file, extSysNameData, processNameData, filename) {
            // return this.http.post(
            //   `${API_URL}/excelDataProcessing/getExcelFile`,file
            var formdata = new FormData();
            formdata.append('file', file);
            var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpRequest('POST', "".concat(_API_URL, "/excelDataProcessing/getExcelFile/").concat(extSysNameData, "/").concat(processNameData, "/").concat(filename), formdata, {
              reportProgress: true,
              responseType: 'text'
            });
            return this.http.request(req);
          }
        }, {
          key: "rejectCallApi",
          value: function rejectCallApi(deUploadReqDTO, authorizer, rejectReason) {
            return this.http.post("".concat(_API_URL, "/excelDataAuthFirst/reject/").concat(authorizer, "/").concat(rejectReason), deUploadReqDTO);
          }
        }, {
          key: "approveDetailsData",
          value: function approveDetailsData(deUploadReqDTO, authorizer) {
            return this.http.post("".concat(_API_URL, "/excelDataAuthFirst/doFirstLevelAuthorization/").concat(authorizer), deUploadReqDTO);
          }
        }, {
          key: "processDeUploadt",
          value: function processDeUploadt(deUploadReqDTO, user_id) {
            return this.http.post("".concat(_API_URL, "/excelDataAuthFirst/processDeUpload/").concat(user_id), deUploadReqDTO);
          }
        }, {
          key: "getFirstAndSecondAuthAuditService",
          value: function getFirstAndSecondAuthAuditService(getDetailsQueryToggleReqDTO) {
            return this.http.post("".concat(_API_URL, "/excelDataAuthFirst/getFirstAndSecondLevelAuthAuditLog/"), getDetailsQueryToggleReqDTO);
          }
        }, {
          key: "queryDetailsDataByParamService",
          value: function queryDetailsDataByParamService(getDetailsQueryToggleReqDTO) {
            return this.http.post("".concat(_API_URL, "/excelDataAuthFirst/getDetailsDataByToggleQuery"), getDetailsQueryToggleReqDTO);
          }
        }, {
          key: "getDetailsListServiceFirst",
          value: function getDetailsListServiceFirst() {
            return this.http.get("".concat(_API_URL, "/excelDataAuthFirst/getExcelDetail"));
          }
        }, {
          key: "getPendingForAuthDataFirst",
          value: function getPendingForAuthDataFirst(userId) {
            return this.http.get("".concat(_API_URL, "/excelDataAuthFirst/getPendingAuth/").concat(userId));
          }
        }, {
          key: "getAuditDataOfDetailsRecord",
          value: function getAuditDataOfDetailsRecord(detailsDto) {
            return this.http.post("".concat(_API_URL, "/excelDataAuthFirst/getAuditLogOfDetailRecord/"), detailsDto);
          }
        }, {
          key: "queryFailedDetailsDataByParamService",
          value: function queryFailedDetailsDataByParamService(getDetailsQueryToggleReqDTO) {
            return this.http.post("".concat(_API_URL, "/dataModificationDetails/getDetailsDataByToggleQuery"), getDetailsQueryToggleReqDTO);
          }
        }, {
          key: "getPendingForAuthDataForModification",
          value: function getPendingForAuthDataForModification(user_id) {
            return this.http.get("".concat(_API_URL, "/dataModificationDetails/getPendingAuth/").concat(user_id));
          }
        }, {
          key: "excelModifyAuthorization",
          value: function excelModifyAuthorization(PendingForAuthDetailsDTOList, user) {
            return this.http.post("".concat(_API_URL, "/dataModificationDetails/sendforAuth/").concat(user), PendingForAuthDetailsDTOList);
          }
        }, {
          key: "getFailedDetailsListService",
          value: function getFailedDetailsListService() {
            return this.http.get("".concat(_API_URL, "/dataModificationDetails/getFailedDetailsList"));
          }
        }, {
          key: "authorizeSecondLevel",
          value: function authorizeSecondLevel(pendingForAuthDetailsListAll, authorizer) {
            return this.http.post("".concat(_API_URL, "/excelDataAuthSecond/doSecondLevelAuthorization/").concat(authorizer), pendingForAuthDetailsListAll);
          }
        }, {
          key: "getSecondLevelAuthDetailsData",
          value: function getSecondLevelAuthDetailsData() {
            return this.http.get("".concat(_API_URL, "/excelDataAuthSecond/getSecondAuthDetailsData"));
          }
        }, {
          key: "queryDetailsDataByParamServiceSecond",
          value: function queryDetailsDataByParamServiceSecond(getDetailsQueryToggleReqDTO) {
            return this.http.post("".concat(_API_URL, "/excelDataAuthSecond/getDetailsDataByToggleQuery"), getDetailsQueryToggleReqDTO);
          }
        }, {
          key: "processDeUpload",
          value: function processDeUpload(deUploadReqDTO, user_id) {
            return this.http.post("".concat(_API_URL, "/excelDataAuthFirst/processDeUpload/").concat(user_id), deUploadReqDTO);
          }
        }, {
          key: "getPendingForAuthDataFirstError",
          value: function getPendingForAuthDataFirstError(userId) {
            return this.http.get("".concat(_API_URL, "/dataModificationDetails/getPendingAuth/").concat(userId));
          }
        }, {
          key: "getAllDept",
          value: function getAllDept() {
            return this.http.get("".concat(this.ext) + '/getAllAuthDepts');
          }
        }, {
          key: "saveExternalSystem",
          value: function saveExternalSystem(customer) {
            return this.http.post("".concat(this.ext) + "/create", customer);
          }
        }, {
          key: "setExternalSystemSummry",
          value: function setExternalSystemSummry(summaryData) {
            this.externalSystemData.next(summaryData);
          }
        }, {
          key: "getExternalSystemSummry",
          value: function getExternalSystemSummry() {
            return this.externalSystemData.asObservable();
          }
        }, {
          key: "updateexternalSystemEdit",
          value: function updateexternalSystemEdit(formData) {
            return this.http.put("".concat(this.ext) + "/update", formData);
          }
        }, {
          key: "authorizingTheRecord",
          value: function authorizingTheRecord(formData, name) {
            return this.http.put("".concat(this.ext) + "/authorizetherecord/".concat(name), formData);
          }
        }, {
          key: "closingTheRecord",
          value: function closingTheRecord(formData) {
            return this.http.put("".concat(this.ext) + "/toClosingTheRecord", formData);
          }
        }, {
          key: "reopeningTheRecord",
          value: function reopeningTheRecord(formData) {
            return this.http.put("".concat(this.ext) + "/reopeningTheRecord", formData);
          }
        }, {
          key: "onClickOfDeleteOfUpdateExcel",
          value: function onClickOfDeleteOfUpdateExcel(formData) {
            return this.http.put("".concat(this.ext) + "/delete", formData);
          }
        }, {
          key: "fetchingBatchNo",
          value: function fetchingBatchNo() {
            return this.http.get("".concat(_API_URL, "/medUpload/getModule"));
          }
        }, {
          key: "getMappingSummary",
          value: function getMappingSummary() {
            return this.http.get("".concat(this.excelmap, "/fetchAllMappingData/"));
          }
        }, {
          key: "getAllExtsysNameAndProcessCodeOnAuthStatus",
          value: function getAllExtsysNameAndProcessCodeOnAuthStatus() {
            return this.http.get("".concat(this.uriForExt, "/gettingExtsysNameAndProcessCodeOnAuthStatus"));
          }
        }, {
          key: "getAllExtCode",
          value: function getAllExtCode() {
            return this.http.get("".concat(this.uriForExt) + '/getAllExtCode');
          }
        }, {
          key: "getProcessNameByExtSysCode",
          value: function getProcessNameByExtSysCode(extSysCode) {
            return this.http.get("".concat(this.uriForExt, "/processCodeByExtCode/").concat(extSysCode));
          }
        }, {
          key: "getExtSysNameByExtSysCode",
          value: function getExtSysNameByExtSysCode(extSysCode) {
            return this.http.get("".concat(this.uriForMap, "/getExtsysByExtCode/").concat(extSysCode), {
              responseType: 'text'
            });
          }
        }, {
          key: "columnData",
          value: function columnData(formData, extSys, processName, headerRepeated, startingRow, extCode, currency, userId, sheetNumber) {
            return this.http.post("".concat(this.excelmap, "/postColumnMapping/").concat(extSys, "/").concat(processName, "/").concat(headerRepeated, "/").concat(startingRow, "/").concat(extCode, "/").concat(currency, "/").concat(userId, "/").concat(sheetNumber), formData);
          }
        }, {
          key: "fetchAllName",
          value: function fetchAllName(externalSystem, processCode, ccy) {
            return this.http.get("".concat(this.uriForMap, "/fetchAllName/").concat(externalSystem, "/").concat(processCode, "/").concat(ccy));
          }
        }, {
          key: "getCurrencyOnExtNameAndProcssCode",
          value: function getCurrencyOnExtNameAndProcssCode(extSysCode, processCode, extNameValue) {
            return this.http.get("".concat(this.uriForMap, "/gettingCurrency/").concat(extSysCode, "/").concat(processCode, "/").concat(extNameValue));
          }
        }, {
          key: "setexcelSummaryData",
          value: function setexcelSummaryData(excelsummary) {
            this.excelSummaryObject.next(excelsummary);
          }
        }, {
          key: "getexcelSummaryData",
          value: function getexcelSummaryData() {
            return this.excelSummaryObject.asObservable();
          }
        }, {
          key: "getAllMappingByExtSysAndProcessCode",
          value: function getAllMappingByExtSysAndProcessCode(externalSystem, processCode, ccy, sheetNumber) {
            return this.http.get("".concat(this.uriForMap, "/fetchAllMapping/").concat(externalSystem, "/").concat(processCode, "/").concat(ccy, "/").concat(sheetNumber));
          }
        }, {
          key: "updateMappingData",
          value: function updateMappingData(model, extNameValue, processCode, extSysCode, starting, isChecked, modifiedBy, ccy, sheetNumber) {
            return this.http.put("".concat(this.uriForMap, "/updateMapping/").concat(extNameValue, "/").concat(processCode, "/").concat(extSysCode, "/").concat(starting, "/").concat(isChecked, "/").concat(modifiedBy, "/").concat(ccy, "/").concat(sheetNumber), model);
          }
        }, {
          key: "deleteMappingRow",
          value: function deleteMappingRow(id) {
            return this.http["delete"]("".concat(this.uriForMap, "/deleteMappingRow/").concat(id));
          }
        }, {
          key: "onAuthorizingTheRecordOfExcelMApping",
          value: function onAuthorizingTheRecordOfExcelMApping(model, extNameValue, processCode, extSysCode, userId, ccy) {
            return this.http.put("".concat(this.uriForMap, "/authOfRecord/").concat(extNameValue, "/").concat(processCode, "/").concat(extSysCode, "/").concat(userId, "/").concat(ccy), model);
          }
        }, {
          key: "onClcikOFCloseOfUpdateExcelMApping",
          value: function onClcikOFCloseOfUpdateExcelMApping(model, extNameValue, processCode, extSysCode, ccy) {
            return this.http.put("".concat(this.uriForMap, "/closeOfRecord/").concat(extNameValue, "/").concat(processCode, "/").concat(extSysCode, "/").concat(ccy), model);
          }
        }, {
          key: "onClcikOfReopenOfUpdateExcelMapping",
          value: function onClcikOfReopenOfUpdateExcelMapping(model, extNameValue, processCode, extSysCode, ccy) {
            return this.http.put("".concat(this.uriForMap, "/reOpenOfRecord/").concat(extNameValue, "/").concat(processCode, "/").concat(extSysCode, "/").concat(ccy), model);
          }
        }, {
          key: "sendingBatchNumber",
          value: function sendingBatchNumber(batchNo) {
            console.log(batchNo);
            return this.http.get("".concat(_API_URL, "/medUpload/get/").concat(batchNo));
          }
        }]);

        return _ApiService;
      }();

      _ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || _ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient));
      };

      _ApiService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
        token: _ApiService,
        factory: _ApiService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_shared_services_api_service_ts-es5.js.map