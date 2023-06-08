"use strict";
(self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["default-src_app_shared_services_add-system_service_ts-src_app_shared_services_rule_service_ts-68dfbf"],{

/***/ 91973:
/*!*******************************************************!*\
  !*** ./src/app/shared/services/add-system.service.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": function() { return /* binding */ API_URL; },
/* harmony export */   "AddSystemService": function() { return /* binding */ AddSystemService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/config/app.constant */ 3118);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);





const API_URL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL;
class AddSystemService {
    constructor(http) {
        this.http = http;
        this.api = 'http://192.168.0.14:8082';
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        // Post
        this.Index = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            index: '',
        });
        this.Reference = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            referenceId: '',
        });
        this.paramSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
        this.getNavParam = this.paramSource.asObservable();
    }
    setIndex(index) {
        this.Index.next(index);
    }
    getIndex() {
        return this.Index.asObservable();
    }
    setReference(referenceId) {
        this.Reference.next(referenceId);
    }
    getReference() {
        return this.Reference.asObservable();
    }
    submittingAddSystem(addSsytem, user) {
        return this.http.post(`${API_URL}/newExtApi/create/${user}`, addSsytem);
    }
    //geting external System
    fecthingAddSystem() {
        return this.http.get(`${API_URL}/newExtApi/getAllExternalSys/?pageNo=${0}&pageSize=${1000}`);
    }
    //update
    editaddsystem(operation, currentUser, addSsytem) {
        return this.http.put(`${API_URL}/newExtApi/${operation}/${currentUser}`, addSsytem);
    }
    //fetching addsystem based on id
    fetchingAddSysBasedonId(id) {
        return this.http.get(`${API_URL}/newExtApi/getExternalSysDetails/${id}`);
    }
    // delete
    deleteingAddSystem() {
        return this.http.delete(`${API_URL}//`);
    }
    // sendingAddSystemDataToEditScreen
    sendingAddSystemDataToEditScreen(params) {
        this.subject.next(params);
    }
    editruleTranslation(operation, userIdLoggedIn, messageTranslationDto) {
        return this.http.put(`${API_URL}/msgApi/${operation}/${userIdLoggedIn}`, messageTranslationDto);
    }
    deleteRuleTranslation(userIdLoggedIn, transId) {
        let transIddel = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        transId = transIddel.append('transId', transId);
        console.log("tra", transId);
        return this.http.delete(`${API_URL}/msgApi/deleteRecord/${userIdLoggedIn}`, {
            params: transId
        });
    }
    deleteAddSystem(userIdLoggedIn, systemId) {
        return this.http.delete(`${API_URL}/newExtApi/delete/${userIdLoggedIn}?systemId=${systemId}`);
    }
    getEditOfAddSystem() {
        return this.subject.asObservable();
    }
    sendNavParam(params) {
        this.paramSource.next(params);
    }
    // Audit log methods--->add System starts
    onAuthofAddSystem(addSsytem, userIdLoggedIn) {
        return this.http.put(`${API_URL}/newExtApi/authorizetherecord/${userIdLoggedIn}`, addSsytem);
    }
    onCloseOfAddSystem(addSsytem, userIdLoggedIn) {
        return this.http.put(`${API_URL}/newExtApi/toClosingTheRecord/${userIdLoggedIn}`, addSsytem);
    }
    onopenOfAddSystem(addSsytem, userIdLoggedIn) {
        return this.http.put(`${API_URL}/newExtApi/closeRecord/${userIdLoggedIn}`, addSsytem);
    }
    onDeleteAddSystem(addSsytem, userIdLoggedIn) {
        return this.http.put(`${API_URL}/newExtApi/delete/${userIdLoggedIn}`, addSsytem);
    }
    // Audit log methods--->add System ends
    // http and xml incoming
    //add system screen uplaod xml
    gettingHederofXMl(files) {
        var formData = new FormData();
        let key = 'header';
        formData.append('file', files);
        formData.append('key', key);
        console.log(formData);
        return this.http.post(`${API_URL}/convertMsg/convertXmlToNodeTagList`, formData);
    }
    gettingBodyOfXml(files) {
        var formData = new FormData();
        let key = 'body';
        formData.append('file', files);
        formData.append('key', key);
        console.log(formData);
        return this.http.post(`${API_URL}/convertMsg/convertXmlToNodeTagList`, formData);
    }
    // For rule transaltion upload xml
    selectFileFORHTTPXMLIncoming(files) {
        var formData = new FormData();
        formData.append('file', files);
        return this.http.post(`${API_URL}/file/getHeaders`, formData);
    }
    fetchingXMLandHttp() {
        return this.http.get(`${API_URL}/msgApi/getXmlMsgField`);
    }
    fetchingIsoForTcp() {
        return this.http.get(`${API_URL}/msgApi/getIsoMsgField`);
    }
    gettinXMLmsgIncoming() {
        return this.http.get(`${API_URL}/msgApi/getXmlMsgField`);
    }
    // db cnnection-->credentials api
    pingDataSource(url, driverClassName, username, password) {
        let encodePwd = btoa(password);
        return this.http.get(`${API_URL}/db/ping/${url}/${driverClassName}/${username}/${encodePwd}`);
    }
    // db connection -->column name
    coulmnNameBasedonTableName(url, driverClassName, username, password, tablename) {
        let encodePwd = btoa(password);
        return this.http.get(`${API_URL}/db/ping/${url}/${driverClassName}/${username}/${encodePwd}/${tablename}`);
    }
    //fetching header tag
    fetchingHeaderTag() {
        return this.http.get(`${API_URL}/newExtApi/getAllHeadTag`);
    }
    validateCode(code) {
        return this.http.get(`${API_URL}/newExtApi/addSystem/validateCode/${code}`);
    }
    validatePort(addSystem) {
        return this.http.post(`${API_URL}/newExtApi/validate/addSystem`, addSystem);
    }
    conversionApi() {
        return this.http.get(`${this.api}/MessageConverter/MT-MX`);
    }
    getMxApi() {
        return this.http.get(`${this.api}/MessageConverter/MXBodyInfo`);
    }
    getMtApi() {
        return this.http.get(`${this.api}/MessageConverter/MTBodyInfo`);
    }
    getIncomingOutgoingSummary(value) {
        // http://localhost:8001/fetchSummaryData?reqType=outgoing
        return this.http.get(`${this.api}/MessageConverter/fetchSummaryData?reqType=${value}`);
    }
    getRequestRespBody(value, referenceId) {
        return this.http.get(`${this.api}/MessageConverter/fetchReqRes?reqType=${value}&referenceId=${referenceId}`);
    }
    fetchTableName(addSystem) {
        return this.http.post(`${API_URL}/newExtApi/validate/addSystem`, addSystem);
    }
}
AddSystemService.ɵfac = function AddSystemService_Factory(t) { return new (t || AddSystemService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
AddSystemService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: AddSystemService, factory: AddSystemService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 50511:
/*!*************************************************!*\
  !*** ./src/app/shared/services/rule.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleService": function() { return /* binding */ RuleService; }
/* harmony export */ });
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 94761);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 53882);



class RuleService {
    constructor(http) {
        this.http = http;
    }
    //post method
    submittingCreateRules(createruleData, userIdLoggedIn) {
        return this.http.post(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}/ruleConfig/newRecord/${userIdLoggedIn}`, createruleData);
    }
    gettingCreateRuleById(id) {
        return this.http.get(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}/ruleConfig/getRuleValidationSummary/${id}`);
    }
    //get method
    fetchingRules() {
        return this.http.get(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}/ruleConfig/getRuleConfigSummary?pageNo=${0}&pageSize=${1000}`);
    }
    //put method
    updateingRules(updatingruleData) {
        return this.http.put(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}//`, updatingruleData);
    }
    //delete method
    deleteingRules() {
        return this.http.delete(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}//`);
    }
    // rule translation
    editruleTranslation(operation, userIdLoggedIn, messageTranslationDto) {
        return this.http.put(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}/msgApi/${operation}/${userIdLoggedIn}`, messageTranslationDto);
    }
    submittingruleTranslation(userIdLoggedIn, messageTranslationDto) {
        return this.http.post(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}/msgApi/createRecord/${userIdLoggedIn}`, messageTranslationDto);
    }
    //get method
    fetchingruleTranslation() {
        return this.http.get(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}/msgApi/getTranslation?pageNo=${0}&pageSize=${1000}`);
    }
    //getting rule transtion based on id
    ruleTranslationBasedonId(id) {
        return this.http.get(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}/msgApi/getTranslationDetails/${id}`);
    }
    //get rule trnasltion
    gettingoperationAndService(extSys, msgType, userIdLoggedIn) {
        console.log(extSys, msgType);
        return this.http.get(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}/newExtApi/getServiceOperation/${extSys}/${msgType}/${userIdLoggedIn}`);
    }
    //put method
    updatingruleTranslation(updateruletranslationData) {
        return this.http.put(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}//`, updateruletranslationData);
    }
    //delete method
    deletingruleTranslation() {
        return this.http.delete(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}`);
    }
    //rule validation
    //post method
    submittingruleValidation(createrulevalidateData) {
        return this.http.post(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}//`, createrulevalidateData);
    }
    //get method
    fetchingruleValidation() {
        return this.http.get(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}//`);
    }
    //put method
    updatingruleValidation(updaterulevalidateData) {
        return this.http.put(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}//`, updaterulevalidateData);
    }
    //delete method
    deletingruleValidation() {
        return this.http.delete(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}//`);
    }
    // Rule Mapping
    //post method
    submittingruleMapping(createrulemappingData, userIdLoggedIn) {
        return this.http.post(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}/msgApi/createMappingNew/${userIdLoggedIn}`, createrulemappingData);
    }
    updatingRuleMapping(updateMappingNewData, userIdLoggedIn) {
        return this.http.put(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}/msgApi/msgMapping/update/${userIdLoggedIn}`, updateMappingNewData);
    }
    editRuleMapping(opeation, userIdLoggedIn, ruleMappingDto) {
        return this.http.put(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}/msgApi/msgMapping/${opeation}/${userIdLoggedIn}`, ruleMappingDto);
    }
    ondeleteMapping(ruleMappingId, userIdLoggedIn) {
        return this.http.delete(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}/msgApi/deleteMapping/${userIdLoggedIn}?id=${ruleMappingId}`);
    }
    // getting rulemapping edit data absed on id
    getruleMappingById(id, mappingId) {
        return this.http.get(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}/msgApi/getMappingDetails/${id}/${mappingId}`);
    }
    //get method
    fetchingruleMapping() {
        return this.http.get(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}/msgApi/getAllMapping?pageNo=${0}&pageSize=${1000}`);
    }
    //put method
    updatingruleMapping(updaterulemappingData) {
        return this.http.put(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}//`, updaterulemappingData);
    }
    //delete method
    deletingruleMapping() {
        return this.http.delete(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}//`);
    }
    // getting ext sys
    gettingExternalsystem() {
        return this.http.get(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}/newExtApi/getExternalSys`);
    }
    // Audit log methods--->add System starts
    onDeleteRuleCongif(ruleId, userIdLoggedIn) {
        return this.http.delete(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}/ruleConfig/deleteRule/${userIdLoggedIn}?sysRuleId=${ruleId}`);
    }
    // Audit log methods--->add System ends
    gettingISoBasedonExtsys() {
        return this.http.get(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}/msgApi/getIsoMsgFieldbyextsys`);
    }
    xmlbasedonExternalsystem() {
        return this.http.get(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}/msgApi/getXmlMsgFieldByExtSys`);
    }
    saveRuleconfig(ruleDto, userIdLoggedIn) {
        return this.http.post(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}/ruleConfig/create/${userIdLoggedIn}`, ruleDto);
    }
    editRuleConfig(operation, ruleDto, userIdLoggedIn) {
        return this.http.put(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}/ruleConfig/${operation}/${userIdLoggedIn}`, ruleDto);
    }
    gettingTranslationData(sysCode) {
        return this.http.get(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}/msgApi/getTranslation/${sysCode}`);
    }
    getAddSystem(sysCode) {
        return this.http.get(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}/newExtApi/getRuleTransInfo/${sysCode}`);
    }
    gettingSysCode(transid) {
        return this.http.get(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}/msgApi/getSystemCode/${transid}`);
    }
}
RuleService.ɵfac = function RuleService_Factory(t) { return new (t || RuleService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
RuleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: RuleService, factory: RuleService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 31443:
/*!**************************************************!*\
  !*** ./src/app/shared/services/toast.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastService": function() { return /* binding */ ToastService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-izitoast */ 27218);


class ToastService {
    constructor(iziToast) {
        this.iziToast = iziToast;
    }
    successMessage(title, msg) {
        this.iziToast.success({
            title: title,
            message: msg,
            layout: 2,
            balloon: false,
            position: "topRight",
            progressBarColor: "red",
            pauseOnHover: true,
        });
    }
    errorMessage(title, msg) {
        this.iziToast.error({
            title: title,
            message: msg,
            layout: 2,
            balloon: false,
            position: "topRight",
            progressBarColor: "red",
            pauseOnHover: true,
        });
    }
    infoMessage(title, msg) {
        this.iziToast.info({
            title: title,
            message: msg,
            layout: 2,
            balloon: false,
            position: "topRight",
            progressBarColor: "red",
            pauseOnHover: true,
        });
    }
}
ToastService.ɵfac = function ToastService_Factory(t) { return new (t || ToastService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ng2_izitoast__WEBPACK_IMPORTED_MODULE_0__.Ng2IzitoastService)); };
ToastService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ToastService, factory: ToastService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default-src_app_shared_services_add-system_service_ts-src_app_shared_services_rule_service_ts-68dfbf-es2015.js.map