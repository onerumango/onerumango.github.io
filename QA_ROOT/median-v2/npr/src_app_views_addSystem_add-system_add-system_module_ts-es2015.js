"use strict";
(self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_addSystem_add-system_add-system_module_ts"],{

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

/***/ 86312:
/*!************************************************************************************!*\
  !*** ./src/app/views/addSystem/add-system-summary/add-system-summary.component.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSystemSummaryComponent": function() { return /* binding */ AddSystemSummaryComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/config/app.constant */ 3118);
/* harmony import */ var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/fmosNewRolePermissions */ 35383);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/add-system.service */ 91973);
/* harmony import */ var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/role.service */ 77382);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ 53882);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ 50481);











function AddSystemSummaryComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddSystemSummaryComponent_div_6_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r4.new(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.roleCodes.new.labelDescription);
} }
function AddSystemSummaryComponent_tbody_28_tr_1_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddSystemSummaryComponent_tbody_28_tr_1_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13); const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r11.close(data_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AddSystemSummaryComponent_tbody_28_tr_1_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddSystemSummaryComponent_tbody_28_tr_1_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r14.open(data_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AddSystemSummaryComponent_tbody_28_tr_1_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddSystemSummaryComponent_tbody_28_tr_1_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r19); const data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r17.delete(data_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AddSystemSummaryComponent_tbody_28_tr_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddSystemSummaryComponent_tbody_28_tr_1_Template_a_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21); const data_r7 = restoredCtx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r20.getResp(data_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AddSystemSummaryComponent_tbody_28_tr_1_Template_button_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21); const data_r7 = restoredCtx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r22.auth(data_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, AddSystemSummaryComponent_tbody_28_tr_1_button_18_Template, 2, 0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, AddSystemSummaryComponent_tbody_28_tr_1_button_19_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, AddSystemSummaryComponent_tbody_28_tr_1_button_20_Template, 2, 0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r7.systemCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r7.systemName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r7.serviceType);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r7.approvedStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](data_r7.recordStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](14, 10, data_r7.createdTime, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !(data_r7.approvedStatus == "U" || data_r7.approvedStatus == "Unauthorized"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (data_r7.recordStatus == "O" || data_r7.recordStatus == "Open" || data_r7.recordStatus == "OPEN") && (data_r7.approvedEver == "Y" || data_r7.approvedEver == "YES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", data_r7.recordStatus == "C" || data_r7.recordStatus == "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", data_r7.approvedEver == "N" || data_r7.approvedEver == "NO");
} }
function AddSystemSummaryComponent_tbody_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AddSystemSummaryComponent_tbody_28_tr_1_Template, 21, 13, "tr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.respArray);
} }
function AddSystemSummaryComponent_tbody_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AddSystemSummaryComponent_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Please wait... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} }
const _c0 = function () { return ["/dashboard"]; };
class AddSystemSummaryComponent {
    constructor(apiService, roleService, router, cdr, http) {
        this.apiService = apiService;
        this.roleService = roleService;
        this.router = router;
        this.cdr = cdr;
        this.http = http;
        this.respArray = [];
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.isLoading = false;
        this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__.permissionsLabels();
        this.API_URL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL;
        this.statusArr = ['Authorized', 'Unauthorized', 'Open', 'Close'];
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            serverSide: true,
            // processing: true,
            columnDefs: [{ type: 'date', 'targets': [5] }],
            order: [[5, 'desc']],
            // lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]],
            lengthMenu: [
                [5, 10, 20, 30, -1],
                [5, 10, 20, 30, "ALL"],
            ],
            ajax: (dataTablesParameters, callback) => {
                dataTablesParameters.minNumber = dataTablesParameters.start + 1;
                dataTablesParameters.maxNumber =
                    dataTablesParameters.start + dataTablesParameters.length;
                console.log(dataTablesParameters.minNumber, dataTablesParameters.maxNumber);
                const pageNo = Math.floor(dataTablesParameters.minNumber / dataTablesParameters.length);
                const pageSize = dataTablesParameters.length;
                const search = dataTablesParameters.search.value;
                this.http.get(`${this.API_URL}` + `/newExtApi/getAllExternalSys?pageNo=${pageNo}&pageSize=${pageSize}&search=${search}`)
                    .subscribe(resp => {
                    ;
                    console.log(resp);
                    for (let data of resp.result) {
                        data.approvedStatus = this.statusArr.find((i) => i.startsWith(data.approvedStatus));
                        data.recordStatus = this.statusArr.find((i) => i.startsWith(data.recordStatus));
                    }
                    this.totalPages = resp.totalNoOfPages;
                    this.totalRecords = resp.totalRecords;
                    this.respArray = resp.result;
                    this.isLoading = false;
                    this.cdr.markForCheck();
                    callback({
                        recordsTotal: resp.totalRecords,
                        recordsFiltered: resp.totalRecords,
                        data: [],
                    });
                });
            },
        };
        this.currentUser = localStorage.getItem("userFromLogin");
        // this.getDataForMonitor();
        this.roleService.fetchScreenPermissions('Add System');
        this.roleService.screenLabelList.subscribe(message => this.roleCodes = message);
        console.log(this.roleCodes);
    }
    getDataForMonitor() {
        this.isLoading = true;
        this.apiService.fecthingAddSystem().subscribe(dataresp => {
            for (let data of dataresp.result) {
                data.approvedStatus = this.statusArr.find((i) => i.startsWith(data.approvedStatus));
                data.recordStatus = this.statusArr.find((i) => i.startsWith(data.recordStatus));
            }
            // this.respArray = dataresp.result;
            this.isLoading = false;
            this.cdr.markForCheck();
            this.dtTrigger.next();
        });
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
    close(data) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
            //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
            text: "You are trying to Close record. " + " Do you want to proceed?",
            showCancelButton: true,
            confirmButtonColor: "#3e54b8",
            cancelButtonColor: "#d33",
            // confirmButtonText: 'PROCEED.'
            cancelButtonText: "NO",
            confirmButtonText: "YES",
            icon: "info",
            iconColor: "#d33",
        }).then((result) => {
            if (result.isConfirmed === true) {
                this.apiService
                    .editaddsystem("close", this.currentUser, data)
                    .subscribe((response) => {
                    if (response) {
                        this.respData = response;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({ text: "Record is Closed", icon: "success" }).then(() => window.location.reload());
                    }
                });
            }
        });
    }
    open(data) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
            //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
            text: "You are trying to Reopen record. " + " Do you want to proceed?",
            showCancelButton: true,
            confirmButtonColor: "#3e54b8",
            cancelButtonColor: "#d33",
            // confirmButtonText: 'PROCEED.'
            cancelButtonText: "NO",
            confirmButtonText: "YES",
            icon: "info",
            iconColor: "#d33",
        }).then((result) => {
            if (result.isConfirmed === true) {
                //submitAll
                this.apiService
                    .editaddsystem("open", this.currentUser, data)
                    .subscribe((response) => {
                    if (response) {
                        this.respData = response;
                        this.auditLog();
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({ text: "Record is Reopened", icon: "success" }).then(() => window.location.reload());
                    }
                });
            }
        });
    }
    delete(data) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
            //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
            text: "You are trying to Delete record. " + " Do you want to proceed?",
            showCancelButton: true,
            confirmButtonColor: "#3e54b8",
            cancelButtonColor: "#d33",
            // confirmButtonText: 'PROCEED.'
            cancelButtonText: "NO",
            confirmButtonText: "YES",
            icon: "info",
            iconColor: "#d33",
        }).then((result) => {
            console.log("this is reopen ", result);
            if (result.isConfirmed === true) {
                this.apiService
                    .deleteAddSystem(this.currentUser, data.systemId)
                    .subscribe((response) => {
                    if (response) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({ text: "Record is Deleted", icon: "success" }).then(() => window.location.reload());
                    }
                });
            }
        });
    }
    auth(data) {
        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
            //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
            text: "You are trying to Authorize record. " + " Do you want to proceed?",
            showCancelButton: true,
            confirmButtonColor: "#3e54b8",
            cancelButtonColor: "#d33",
            // confirmButtonText: 'PROCEED.'
            cancelButtonText: "NO",
            confirmButtonText: "YES",
            icon: "info",
            iconColor: "#d33",
        }).then((result) => {
            if (result.isConfirmed === true) {
                if (this.currentUser === data.creatorId) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({ text: "Maker Cannot Authorize Record!", icon: "error" });
                    return;
                }
                this.apiService
                    .editaddsystem("auth", this.currentUser, data)
                    .subscribe((response) => {
                    if (response) {
                        this.respData = response;
                        this.auditLog();
                        sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({ text: "Record is Authorized", icon: "success" }).then(() => window.location.reload());
                    }
                });
            }
        });
    }
    auditLog() {
        if (this.respData.approverId === "null") {
            this.respData.approverId = " ";
        }
        if (this.respData.approvedStatus === "N") {
            this.respData.approvedStatus = "UNAUTHORIZED";
        }
        if (this.respData.approvedStatus === "Y") {
            this.respData.approvedStatus = "AUTHORIZED";
        }
        if (this.respData.approvedStatus === "A") {
            this.respData.approvedStatus = "AUTHORIZED";
        }
        if (this.respData.approvedStatus === "U") {
            this.respData.approvedStatus = "UNAUTHORIZED";
        }
        if (this.respData.recordStatus === "O") {
            this.respData.recordStatus = "OPEN";
        }
        if (this.respData.recordStatus === "C") {
            this.respData.recordStatus = "CLOSED";
        }
        if (this.respData.approvedEver === "N") {
            this.respData.approvedEver = "NO";
        }
        if (this.respData.approvedEver === "Y") {
            this.respData.approvedEver = "YES";
        }
    }
    getResp(data) {
        localStorage.removeItem('idValue');
        console.log(data);
        this.apiService.setIndex({
            index: data.systemId,
        });
        localStorage.setItem('idValue', data.systemId);
        this.router.navigateByUrl("/addSystem");
    }
    new() {
        localStorage.removeItem('idValue');
        this.apiService.setIndex({
            index: "",
        });
        this.router.navigateByUrl("/addSystem");
    }
    refreshPage() {
        window.location.reload();
    }
}
AddSystemSummaryComponent.ɵfac = function AddSystemSummaryComponent_Factory(t) { return new (t || AddSystemSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_3__.AddSystemService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_4__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__.HttpClient)); };
AddSystemSummaryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AddSystemSummaryComponent, selectors: [["npr-add-system-summary"]], decls: 31, vars: 7, consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [1, "table-responsive"], ["datatable", "", "id", "dbTable1", 1, "dataTable", "table", "tableStyleSelect", "tableStyle", "nowrap", "vAlignMdl", 2, "width", "100%", 3, "dtOptions"], [4, "ngIf"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 1, "primaryColor", 3, "click"], ["title", "Authorize", 1, "btn", 2, "color", "red", 3, "disabled", "click"], ["src", "assets/images/authorize.svg", "alt", "...", 1, "summaryIcon"], ["class", "btn", "style", "color: red", "title", "Close", 3, "click", 4, "ngIf"], ["class", "btn", "style", "color: red", "title", "Reopen", 3, "click", 4, "ngIf"], ["class", "btn", "style", "color: red", "title", "Delete", 3, "click", 4, "ngIf"], ["title", "Close", 1, "btn", 2, "color", "red", 3, "click"], ["src", "assets/images/CROSS1.svg", "alt", "...", 1, "summaryIcon"], ["title", "Reopen", 1, "btn", 2, "color", "red", 3, "click"], ["src", "assets/images/open.svg", "alt", "...", 1, "summaryIcon"], ["title", "Delete", 1, "btn", 2, "color", "red", 3, "click"], ["src", "assets/images/delete.svg", "alt", "...", 1, "summaryIcon"], [1, "loading-page-center"], [1, "indicator-progress"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"]], template: function AddSystemSummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Add System");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, AddSystemSummaryComponent_div_6_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Exit");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " System Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21, "Auth Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Record Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](27, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](28, AddSystemSummaryComponent_tbody_28_Template, 2, 1, "tbody", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](29, AddSystemSummaryComponent_tbody_29_Template, 2, 0, "tbody", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, AddSystemSummaryComponent_ng_container_30_Template, 5, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.roleCodes.new);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("dtOptions", ctx.dtOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.respArray == null ? null : ctx.respArray.length) != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.respArray == null ? null : ctx.respArray.length) == 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_5__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe], styles: ["th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 11px 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zeXN0ZW0tc3VtbWFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7RUFFSSxrQkFBQTtBQUZKOztBQUtBO0VBQ0ksNkJBQUE7QUFGSiIsImZpbGUiOiJhZGQtc3lzdGVtLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAudmlld3tcclxuLy8gICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuLy8gfVxyXG50aCxcclxudGQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIHBhZGRpbmc6IDExcHggMjBweCAhaW1wb3J0YW50O1xyXG59Il19 */"] });


/***/ }),

/***/ 34865:
/*!*************************************************************************!*\
  !*** ./src/app/views/addSystem/add-system/add-system-routing.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSystemRoutingModule": function() { return /* binding */ AddSystemRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/guards/can-deactivate.guard */ 50215);
/* harmony import */ var _add_system_summary_add_system_summary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add-system-summary/add-system-summary.component */ 86312);
/* harmony import */ var _add_system_add_system_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../add-system/add-system.component */ 88154);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






const routes = [
    {
        path: '',
        component: _add_system_add_system_component__WEBPACK_IMPORTED_MODULE_2__.AddSystemComponent,
        canDeactivate: [src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__.CanDeactivateGuard]
    },
    {
        path: 'summary',
        component: _add_system_summary_add_system_summary_component__WEBPACK_IMPORTED_MODULE_1__.AddSystemSummaryComponent
    }
];
class AddSystemRoutingModule {
}
AddSystemRoutingModule.ɵfac = function AddSystemRoutingModule_Factory(t) { return new (t || AddSystemRoutingModule)(); };
AddSystemRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AddSystemRoutingModule });
AddSystemRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AddSystemRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 88154:
/*!********************************************************************!*\
  !*** ./src/app/views/addSystem/add-system/add-system.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSystemComponent": function() { return /* binding */ AddSystemComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/fmosNewRolePermissions */ 35383);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/add-system.service */ 91973);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/role.service */ 77382);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 31443);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 55314);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ 88660);














const _c0 = ["fileWrapper"];
const _c1 = ["fileWrapper1"];
function AddSystemComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Please wait... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
} }
function AddSystemComponent_div_1_form_4_span_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_4_span_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_4_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "System Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "fieldset", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown.space", function AddSystemComponent_div_1_form_4_Template_input_keydown_space_12_listener($event) { return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown.space", function AddSystemComponent_div_1_form_4_Template_input_keydown_space_18_listener($event) { return $event.preventDefault(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, " --Please select-- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "client");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](30, "server");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Messages Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, " --Please select-- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](40, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](42, "Incoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44, "Outgoing");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "External IP/Domain");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function AddSystemComponent_div_1_form_4_Template_input_keyup_51_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r15.extAddressValidation($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "External Port");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, AddSystemComponent_div_1_form_4_span_55_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Median IP/Domain");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keyup", function AddSystemComponent_div_1_form_4_Template_input_keyup_63_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r17.medAddressValidation($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](66, "Median Port");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](67, AddSystemComponent_div_1_form_4_span_67_Template, 2, 0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](68, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r2.basicInfoForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r2.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.externalPort);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.medianPort);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);
} }
function AddSystemComponent_div_1_form_5_div_1_div_16_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", i_r33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r33);
} }
function AddSystemComponent_div_1_form_5_div_1_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Data Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "select", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " --Please select-- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AddSystemComponent_div_1_form_5_div_1_div_16_option_6_Template, 2, 2, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r21.dataType);
} }
function AddSystemComponent_div_1_form_5_div_1_div_17_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", i_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r35);
} }
function AddSystemComponent_div_1_form_5_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Type of Queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "select", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AddSystemComponent_div_1_form_5_div_1_div_17_option_4_Template, 2, 2, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r22.queArray);
} }
function AddSystemComponent_div_1_form_5_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Queue Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_5_div_1_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Queue Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_5_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Connection Factory");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_5_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Connection Channel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_5_div_1_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "User Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_5_div_1_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_5_div_1_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Database");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_5_div_1_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Connecting String");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
const _c2 = function () { return ["/addSystem/summary"]; };
function AddSystemComponent_div_1_form_5_div_1_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_5_div_1_div_26_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4); return ctx_r36.next("messageConfiguration"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_5_div_1_div_26_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4); return ctx_r38.previous("messageConfiguration"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Exit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](1, _c2));
} }
function AddSystemComponent_div_1_form_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "fieldset", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_5_div_1_Template_select_change_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r39.onProtocalSlection($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " --Please select-- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "MT");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "MX");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, AddSystemComponent_div_1_form_5_div_1_div_16_Template, 7, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, AddSystemComponent_div_1_form_5_div_1_div_17_Template, 5, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, AddSystemComponent_div_1_form_5_div_1_div_18_Template, 4, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, AddSystemComponent_div_1_form_5_div_1_div_19_Template, 4, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, AddSystemComponent_div_1_form_5_div_1_div_20_Template, 4, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, AddSystemComponent_div_1_form_5_div_1_div_21_Template, 4, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, AddSystemComponent_div_1_form_5_div_1_div_22_Template, 4, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, AddSystemComponent_div_1_form_5_div_1_div_23_Template, 4, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, AddSystemComponent_div_1_form_5_div_1_div_24_Template, 4, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, AddSystemComponent_div_1_form_5_div_1_div_25_Template, 4, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, AddSystemComponent_div_1_form_5_div_1_div_26_Template, 10, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r20 = ctx.index;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r18.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r18.messageType, " Message Configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", ctx_r18.messageType, " Message Protocol");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r18.messageConfigurationForm.value.sysChannel[0].messageChannel !== "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r18.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r18.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r18.messageConfigurationForm.value.sysChannel[0].queueType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r18.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r18.messageConfigurationForm.value.sysChannel[0].queueType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r18.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r18.messageConfigurationForm.value.sysChannel[0].queueType === "IBM");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r18.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r18.messageConfigurationForm.value.sysChannel[0].queueType === "JMS");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r18.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r18.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r18.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r18.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r18.editFlag);
} }
function AddSystemComponent_div_1_form_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_5_div_1_Template, 27, 15, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r3.messageConfigurationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.messageConfigurationForm.get("sysChannel")["controls"]);
} }
function AddSystemComponent_div_1_div_6_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSystemComponent_div_1_div_6_div_5_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r42.previous("incomingMessageConfiguration"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Folder Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "input", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AddSystemComponent_div_1_div_6_div_5_Template, 7, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.editFlag);
} }
function AddSystemComponent_div_1_div_7_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r45 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", i_r45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r45);
} }
function AddSystemComponent_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Table");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "select", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddSystemComponent_div_1_div_7_Template_select_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r46.onTableSlection($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AddSystemComponent_div_1_div_7_option_6_Template, 2, 2, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r5.table);
} }
function AddSystemComponent_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Header and Service Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 81, 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_9_div_1_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r53.uploadFileXml($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_9_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Header and Service Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_9_div_20_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const header_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", header_r69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", header_r69, " ");
} }
function AddSystemComponent_div_1_form_9_div_20_ng_select_6_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-select", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_9_div_20_ng_select_6_Template_ng_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r72); const i_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r70.changeSelectedFieldNo($event, i_r56); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx_r58.isoRespDataFiltered)("readonly", !ctx_r58.editFlag)("disabled", !ctx_r58.editFlag);
} }
function AddSystemComponent_div_1_form_9_div_20_ng_select_7_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-select", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_9_div_20_ng_select_7_Template_ng_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r75); const i_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r73.onselectingTag($event, i_r56); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx_r59.xmlRespDataFiltered)("readonly", !ctx_r59.editFlag);
} }
function AddSystemComponent_div_1_form_9_div_20_select_8_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mkey_r77 = ctx.$implicit;
    const ctx_r76 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("hidden", ctx_r76.shouldHideOption(mkey_r77))("value", mkey_r77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", mkey_r77[1], " ");
} }
function AddSystemComponent_div_1_form_9_div_20_select_8_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "select", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_9_div_20_select_8_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r80); const i_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r78.onDbConnectionOption($event, i_r56); })("change", function AddSystemComponent_div_1_form_9_div_20_select_8_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r80); const i_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r81.onselectingColumnName($event.target.value, i_r56); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Please Select Tag ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddSystemComponent_div_1_form_9_div_20_select_8_option_3_Template, 2, 3, "option", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r60.tabelData);
} }
function AddSystemComponent_div_1_form_9_div_20_select_9_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mkey_r84 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", mkey_r84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", mkey_r84, " ");
} }
function AddSystemComponent_div_1_form_9_div_20_select_9_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "select", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_9_div_20_select_9_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r87); const i_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r85.onselectingFieldName($event.target.value, i_r56); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Please Select Tag ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddSystemComponent_div_1_form_9_div_20_select_9_option_3_Template, 2, 2, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r61.fieldValues[i_r56]);
} }
function AddSystemComponent_div_1_form_9_div_20_input_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 107);
} }
function AddSystemComponent_div_1_form_9_div_20_input_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 107);
} }
function AddSystemComponent_div_1_form_9_div_20_input_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 108);
} }
function AddSystemComponent_div_1_form_9_div_20_ng_select_14_ng_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r90 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", type_r90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](type_r90);
} }
function AddSystemComponent_div_1_form_9_div_20_ng_select_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-select", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ng-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Please Select Data Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddSystemComponent_div_1_form_9_div_20_ng_select_14_ng_option_3_Template, 2, 2, "ng-option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", !ctx_r65.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r65.typeDataIso);
} }
function AddSystemComponent_div_1_form_9_div_20_select_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "select", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "option", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Numeric");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "option", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Alpha Numeric");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "option", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate1"]("name", "dataType_", i_r56, "");
} }
function AddSystemComponent_div_1_form_9_div_20_input_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 114);
} }
function AddSystemComponent_div_1_form_9_div_20_div_29_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_20_div_29_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r95); const i_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).index; const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r93.delete(i_r56); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_9_div_20_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddSystemComponent_div_1_form_9_div_20_div_29_a_3_Template, 2, 0, "a", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r68.submitFlag);
} }
function AddSystemComponent_div_1_form_9_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "select", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_9_div_20_Template_select_change_3_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r97); const i_r56 = restoredCtx.index; const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r96.onHeaderSelection($event.target.value, i_r56); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AddSystemComponent_div_1_form_9_div_20_option_4_Template, 2, 2, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AddSystemComponent_div_1_form_9_div_20_ng_select_6_Template, 1, 3, "ng-select", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AddSystemComponent_div_1_form_9_div_20_ng_select_7_Template, 1, 2, "ng-select", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AddSystemComponent_div_1_form_9_div_20_select_8_Template, 4, 1, "select", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AddSystemComponent_div_1_form_9_div_20_select_9_Template, 4, 1, "select", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AddSystemComponent_div_1_form_9_div_20_input_10_Template, 1, 0, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AddSystemComponent_div_1_form_9_div_20_input_11_Template, 1, 0, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, AddSystemComponent_div_1_form_9_div_20_input_12_Template, 1, 0, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, AddSystemComponent_div_1_form_9_div_20_ng_select_14_Template, 4, 2, "ng-select", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, AddSystemComponent_div_1_form_9_div_20_select_15_Template, 7, 1, "select", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, AddSystemComponent_div_1_form_9_div_20_input_16_Template, 1, 0, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "select", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "No Encryption");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "option", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "BASE 64");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "option", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "SHA 256");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "option", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28, "SHA 512");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, AddSystemComponent_div_1_form_9_div_20_div_29_Template, 4, 1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r56 = ctx.index;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r50.headerValues);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r50.messageConfigurationForm.value.sysChannel[0].messageChannel === "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r50.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML" && !ctx_r50.fileUploadClick);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r50.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection" && ctx_r50.tableDropDownClick);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r50.messageConfigurationForm.value.sysChannel[0].messageChannel === "MT" || ctx_r50.messageConfigurationForm.value.sysChannel[0].messageChannel === "MX");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r50.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection" && !ctx_r50.tableDropDownClick);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r50.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML" && ctx_r50.fileUploadClick);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r50.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r50.messageConfigurationForm.value.sysChannel[0].messageChannel === "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r50.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML" || ctx_r50.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON" || ctx_r50.messageConfigurationForm.value.sysChannel[0].messageChannel === "MX" || ctx_r50.messageConfigurationForm.value.sysChannel[0].messageChannel === "MT");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r50.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r50.editFlag);
} }
function AddSystemComponent_div_1_form_9_div_21_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_9_div_21_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_21_div_3_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r101); const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4); return ctx_r100.next("incomingMessageConfiguration"); })("click", function AddSystemComponent_div_1_form_9_div_21_div_3_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r101); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4); return ctx_r102.submit2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_21_div_3_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r101); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4); return ctx_r103.previous("incomingMessageConfiguration"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Exit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r99.submitFlag || !ctx_r99.tcpForm.dirty || !ctx_r99.tcpForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r99.submitFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](3, _c2));
} }
function AddSystemComponent_div_1_form_9_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_21_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r105); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r104.addBioDocs(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddSystemComponent_div_1_form_9_div_21_a_2_Template, 3, 0, "a", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddSystemComponent_div_1_form_9_div_21_div_3_Template, 10, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r51.submitFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r51.editFlag);
} }
function AddSystemComponent_div_1_form_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_9_div_1_Template, 6, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "fieldset", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddSystemComponent_div_1_form_9_div_3_Template, 4, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Data Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Default Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Encryption Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, AddSystemComponent_div_1_form_9_div_20_Template, 30, 13, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, AddSystemComponent_div_1_form_9_div_21_Template, 4, 2, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r7.tcpForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.messageConfigurationForm.value.sysChannel[0].messageFormat == "XML");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r7.submitFlag || !ctx_r7.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.messageConfigurationForm.value.sysChannel[0].messageFormat !== "XML");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r7.label2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r7.tcpForm.get("sysService")["controls"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r7.editFlag);
} }
function AddSystemComponent_div_1_form_10_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_10_li_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r113); const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r112.value("1"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Incoming ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_10_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r115 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_10_li_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r115); const ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r114.value("1"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Incoming ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_10_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r117 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_10_li_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r117); const ctx_r116 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r116.value("2"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Outgoing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_10_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r119 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "li", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_10_li_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r119); const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r118.value("2"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Outgoing ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r126 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 81, 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "input", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_10_div_9_div_1_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r126); const ctx_r125 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4); return ctx_r125.uploadFileXml($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_10_div_9_div_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r126); const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4); return ctx_r127.chooseFile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_18_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r143 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", i_r143);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", i_r143, " ");
} }
function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Data Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "select", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " --Please select-- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_18_option_8_Template, 2, 2, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r131.dataType);
} }
function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_19_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r145 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", i_r145);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", i_r145, " ");
} }
function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Type of Queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "select", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_19_option_4_Template, 2, 2, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r132 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r132.queArray);
} }
function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Queue Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Queue Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Connection Factory");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Connection Channel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "User Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Database");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Connecting String");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r147 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_28_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r147); const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](6); return ctx_r146.next1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_28_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r147); const ctx_r148 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](6); return ctx_r148.previousAll("1"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Exit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r141.messageConfigurationForm1.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](2, _c2));
} }
function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r150 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Incoming Message Configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "fieldset", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Incoming Message Protocol ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "select", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_Template_select_change_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r150); const ctx_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5); return ctx_r149.onProtocalSlection($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " --Please select-- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "option", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "MT");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "option", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "MX");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_18_Template, 9, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_19_Template, 5, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_20_Template, 4, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](21, AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_21_Template, 4, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_22_Template, 4, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](23, AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_23_Template, 4, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_24_Template, 4, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_25_Template, 4, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_26_Template, 4, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_27_Template, 4, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_28_Template, 10, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r130 = ctx.index;
    const ctx_r128 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r128.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r128.messageConfigurationForm.value.sysChannel[0].messageChannel !== "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r128.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r128.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r128.messageConfigurationForm.value.sysChannel[0].queueType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r128.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r128.messageConfigurationForm.value.sysChannel[0].queueType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r128.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r128.messageConfigurationForm.value.sysChannel[0].queueType === "IBM");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r128.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r128.messageConfigurationForm.value.sysChannel[0].queueType === "JMS");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r128.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r128.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r128.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r128.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r128.editFlag);
} }
function AddSystemComponent_div_1_form_10_div_9_form_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_10_div_9_form_2_div_1_Template, 29, 13, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r121.messageConfigurationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r121.messageConfigurationForm.get("sysChannel")["controls"]);
} }
function AddSystemComponent_div_1_form_10_div_9_div_3_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r152 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", i_r152);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r152);
} }
function AddSystemComponent_div_1_form_10_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Table");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "select", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_10_div_9_div_3_Template_select_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r154); const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4); return ctx_r153.onTableSlection($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " --Please select-- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AddSystemComponent_div_1_form_10_div_9_div_3_option_6_Template, 2, 2, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r122.table);
} }
function AddSystemComponent_div_1_form_10_div_9_form_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Header and Service Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const header_r171 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", header_r171.headerTag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", header_r171.headerTag, " ");
} }
function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_ng_select_6_Template(rf, ctx) { if (rf & 1) {
    const _r174 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-select", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_ng_select_6_Template_ng_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r174); const i_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5); return ctx_r172.changeSelectedFieldNo($event, i_r159); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ng-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "--Please Select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx_r161.isoRespDataFiltered)("disabled", !ctx_r161.editFlag);
} }
function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_ng_select_7_Template(rf, ctx) { if (rf & 1) {
    const _r177 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-select", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_ng_select_7_Template_ng_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r177); const i_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5); return ctx_r175.onselectingTag($event, i_r159); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx_r162.xmlRespDataFiltered);
} }
function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_select_8_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mkey_r179 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", mkey_r179);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", mkey_r179[1], " ");
} }
function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_select_8_Template(rf, ctx) { if (rf & 1) {
    const _r182 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "select", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_select_8_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r182); const i_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5); return ctx_r180.onselectingColumnName($event.target.value, i_r159); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Please Select Tag ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddSystemComponent_div_1_form_10_div_9_form_4_div_19_select_8_option_3_Template, 2, 2, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r163 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r163.tabelData);
} }
function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_input_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 107);
} }
function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_input_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 107);
} }
function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_input_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 108);
} }
function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_ng_select_13_ng_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r184 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", type_r184);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", type_r184, " ");
} }
function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_ng_select_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-select", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ng-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Please Select Data Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddSystemComponent_div_1_form_10_div_9_form_4_div_19_ng_select_13_ng_option_3_Template, 2, 2, "ng-option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", !ctx_r167.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r167.typeDataIso);
} }
function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_select_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "select", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "option", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Numeric");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "option", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Alpha Numeric");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "option", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_input_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 114);
} }
function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r187 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "a", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_div_28_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r187); const i_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5); return ctx_r185.delete(i_r159); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "select", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AddSystemComponent_div_1_form_10_div_9_form_4_div_19_option_4_Template, 2, 2, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AddSystemComponent_div_1_form_10_div_9_form_4_div_19_ng_select_6_Template, 3, 2, "ng-select", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AddSystemComponent_div_1_form_10_div_9_form_4_div_19_ng_select_7_Template, 1, 1, "ng-select", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AddSystemComponent_div_1_form_10_div_9_form_4_div_19_select_8_Template, 4, 1, "select", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AddSystemComponent_div_1_form_10_div_9_form_4_div_19_input_9_Template, 1, 0, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AddSystemComponent_div_1_form_10_div_9_form_4_div_19_input_10_Template, 1, 0, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AddSystemComponent_div_1_form_10_div_9_form_4_div_19_input_11_Template, 1, 0, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, AddSystemComponent_div_1_form_10_div_9_form_4_div_19_ng_select_13_Template, 4, 2, "ng-select", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, AddSystemComponent_div_1_form_10_div_9_form_4_div_19_select_14_Template, 8, 0, "select", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, AddSystemComponent_div_1_form_10_div_9_form_4_div_19_input_15_Template, 1, 0, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "select", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "No Encryption");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "option", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "BASE 64");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "option", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "SHA 256");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "option", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "SHA 512");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, AddSystemComponent_div_1_form_10_div_9_form_4_div_19_div_28_Template, 5, 0, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r159 = ctx.index;
    const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r159);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r156.headerTagData);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r156.messageConfigurationForm.value.sysChannel[0].messageChannel === "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r156.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML" && !ctx_r156.fileUploadClick);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r156.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection" && ctx_r156.tableDropDownClick);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r156.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection" && !ctx_r156.tableDropDownClick);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r156.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML" && ctx_r156.fileUploadClick);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r156.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r156.messageConfigurationForm.value.sysChannel[0].messageChannel === "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r156.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML" || ctx_r156.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r156.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r156.editFlag);
} }
function AddSystemComponent_div_1_form_10_div_9_form_4_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r189 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_10_div_9_form_4_div_20_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r189); const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5); return ctx_r188.addBioDocs(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_10_div_9_form_4_div_20_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r189); const ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5); return ctx_r190.allMethod(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_10_div_9_form_4_div_20_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r189); const ctx_r191 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5); return ctx_r191.previousAll("2"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, " Exit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r157.tcpForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](2, _c2));
} }
function AddSystemComponent_div_1_form_10_div_9_form_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_10_div_9_form_4_div_1_Template, 3, 0, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "Header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Data Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "Default Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Encryption Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "fieldset", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, AddSystemComponent_div_1_form_10_div_9_form_4_div_19_Template, 29, 12, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, AddSystemComponent_div_1_form_10_div_9_form_4_div_20_Template, 15, 3, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r123.tcpForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r123.messageConfigurationForm.value.sysChannel[0].messageFormat !== "XML");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r123.label2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r123.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r123.tcpForm.get("sysService")["controls"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r123.editFlag);
} }
function AddSystemComponent_div_1_form_10_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_10_div_9_div_1_Template, 8, 0, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddSystemComponent_div_1_form_10_div_9_form_2_Template, 2, 2, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddSystemComponent_div_1_form_10_div_9_div_3_Template, 7, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AddSystemComponent_div_1_form_10_div_9_form_4_Template, 21, 6, "form", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r110.messageConfigurationForm.value.sysChannel[0].messageFormat == "XML" && ctx_r110.tab12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r110.basicInfoForm.value.messsageType === "A" && ctx_r110.tab11 || ctx_r110.basicInfoForm.value.messsageType === "A" && !ctx_r110.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r110.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection" && ctx_r110.tableFlag1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r110.tab12 || !ctx_r110.editFlag);
} }
function AddSystemComponent_div_1_form_10_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r198 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 81, 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "input", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_10_div_10_div_1_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r198); const ctx_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4); return ctx_r197.uploadFileXml1($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "button", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_10_div_10_div_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r198); const ctx_r199 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4); return ctx_r199.chooseFile1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_24_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r215 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", i_r215);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", i_r215, " ");
} }
function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Data Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "select", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, " --Please select-- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_24_option_8_Template, 2, 2, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r203.dataType1);
} }
function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_25_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r217 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", i_r217);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", i_r217, " ");
} }
function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Type of Queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "select", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_25_option_4_Template, 2, 2, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r204.queArray);
} }
function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Queue Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Queue Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Connection Factory");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Connection Channel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "User Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Database");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Connecting String");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](3, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_34_Template(rf, ctx) { if (rf & 1) {
    const _r219 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_34_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r219); const ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](6); return ctx_r218.next2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_34_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r219); const ctx_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](6); return ctx_r220.previousAll("3"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Exit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r213 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r213.messageConfigurationForm1.valid && !ctx_r213.messageConfigurationForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](2, _c2));
} }
function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r222 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Outgoing Message Configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "fieldset", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Outgoing Message Protocol ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "select", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_Template_select_change_11_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r222); const ctx_r221 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5); return ctx_r221.onProtocalSlection1($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, " --Please select-- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "option", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "option", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "HTTPS/HTTP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "option", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "MDB");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "option", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "EJB");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "option", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](24, AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_24_Template, 9, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_25_Template, 5, 1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](26, AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_26_Template, 4, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_27_Template, 4, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_28_Template, 4, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](29, AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_29_Template, 4, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_30_Template, 4, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_31_Template, 4, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](32, AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_32_Template, 4, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](33, AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_33_Template, 4, 0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_34_Template, 10, 3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r202 = ctx.index;
    const ctx_r200 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r200.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r202);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r200.messageConfigurationForm1.value.sysChannel[0].messageChannel !== "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r200.messageConfigurationForm1.value.sysChannel[0].messageChannel === "MDB");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r200.messageConfigurationForm1.value.sysChannel[0].messageChannel === "MDB" && ctx_r200.messageConfigurationForm1.value.sysChannel[0].queueType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r200.messageConfigurationForm1.value.sysChannel[0].messageChannel === "MDB" && ctx_r200.messageConfigurationForm1.value.sysChannel[0].queueType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r200.messageConfigurationForm1.value.sysChannel[0].messageChannel === "MDB" && ctx_r200.messageConfigurationForm1.value.sysChannel[0].queueType === "IBM");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r200.messageConfigurationForm1.value.sysChannel[0].messageChannel === "MDB" && ctx_r200.messageConfigurationForm1.value.sysChannel[0].queueType === "JMS");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r200.messageConfigurationForm1.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r200.messageConfigurationForm1.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r200.messageConfigurationForm1.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r200.messageConfigurationForm1.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r200.editFlag);
} }
function AddSystemComponent_div_1_form_10_div_10_form_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_10_div_10_form_2_div_1_Template, 35, 13, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r193.messageConfigurationForm1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r193.messageConfigurationForm1.get("sysChannel")["controls"]);
} }
function AddSystemComponent_div_1_form_10_div_10_div_3_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r224 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", i_r224);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](i_r224);
} }
function AddSystemComponent_div_1_form_10_div_10_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r226 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Table");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "select", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_10_div_10_div_3_Template_select_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r226); const ctx_r225 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4); return ctx_r225.onTableSlection1($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " --Please select-- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AddSystemComponent_div_1_form_10_div_10_div_3_option_6_Template, 2, 2, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r194.table2);
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Header and Service Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const header_r243 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", header_r243.headerTag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", header_r243.headerTag, " ");
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_ng_select_6_Template(rf, ctx) { if (rf & 1) {
    const _r246 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-select", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_ng_select_6_Template_ng_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r246); const i_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r244 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5); return ctx_r244.onSelectingMessageBasis1($event, i_r231); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx_r233.isoRespDataFiltered1)("disabled", !ctx_r233.editFlag);
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_ng_select_7_Template(rf, ctx) { if (rf & 1) {
    const _r249 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-select", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_ng_select_7_Template_ng_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r249); const i_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r247 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5); return ctx_r247.onselectingTag1($event, i_r231); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r234 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx_r234.xmlRespDataFiltered1);
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_select_8_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mkey_r251 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", mkey_r251);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", mkey_r251[1], " ");
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_select_8_Template(rf, ctx) { if (rf & 1) {
    const _r254 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "select", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_select_8_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r254); const i_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index; const ctx_r252 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5); return ctx_r252.onselectingColumnName1($event.target.value, i_r231); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Please Select Tag ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddSystemComponent_div_1_form_10_div_10_form_4_div_19_select_8_option_3_Template, 2, 2, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r235.tabelData1);
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_input_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 107);
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_input_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 107);
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_input_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 108);
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_ng_select_13_ng_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const type_r256 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("value", type_r256);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("", type_r256, " ");
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_ng_select_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "ng-select", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "ng-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Please Select Data Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddSystemComponent_div_1_form_10_div_10_form_4_div_19_ng_select_13_ng_option_3_Template, 2, 2, "ng-option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r239 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", !ctx_r239.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r239.typeDataIso1);
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_select_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "select", 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "option", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Numeric");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "option", 112);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Alpha Numeric");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "option", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_input_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "input", 114);
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_div_28_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r260 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_div_28_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r260); const i_r231 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2).index; const ctx_r258 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5); return ctx_r258.delete1(i_r231); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddSystemComponent_div_1_form_10_div_10_form_4_div_19_div_28_a_3_Template, 2, 0, "a", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r242 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r242.submitFlagAll);
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "select", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AddSystemComponent_div_1_form_10_div_10_form_4_div_19_option_4_Template, 2, 2, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AddSystemComponent_div_1_form_10_div_10_form_4_div_19_ng_select_6_Template, 1, 2, "ng-select", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AddSystemComponent_div_1_form_10_div_10_form_4_div_19_ng_select_7_Template, 1, 1, "ng-select", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AddSystemComponent_div_1_form_10_div_10_form_4_div_19_select_8_Template, 4, 1, "select", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AddSystemComponent_div_1_form_10_div_10_form_4_div_19_input_9_Template, 1, 0, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AddSystemComponent_div_1_form_10_div_10_form_4_div_19_input_10_Template, 1, 0, "input", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AddSystemComponent_div_1_form_10_div_10_form_4_div_19_input_11_Template, 1, 0, "input", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, AddSystemComponent_div_1_form_10_div_10_form_4_div_19_ng_select_13_Template, 4, 2, "ng-select", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, AddSystemComponent_div_1_form_10_div_10_form_4_div_19_select_14_Template, 8, 0, "select", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, AddSystemComponent_div_1_form_10_div_10_form_4_div_19_input_15_Template, 1, 0, "input", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](17, "input", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "select", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "option", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "No Encryption");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "option", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "BASE 64");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "option", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "SHA 256");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "option", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27, "SHA 512");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, AddSystemComponent_div_1_form_10_div_10_form_4_div_19_div_28_Template, 4, 1, "div", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r231 = ctx.index;
    const ctx_r228 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r231);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r228.headerTagData);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r228.messageConfigurationForm1.value.sysChannel[0].messageChannel === "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r228.messageConfigurationForm1.value.sysChannel[0].messageFormat === "XML" && !ctx_r228.fileUploadClick);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r228.messageConfigurationForm1.value.sysChannel[0].messageChannel === "DB Connection" && ctx_r228.tableDropDownClick1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r228.messageConfigurationForm1.value.sysChannel[0].messageChannel === "DB Connection" && !ctx_r228.tableDropDownClick1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r228.messageConfigurationForm1.value.sysChannel[0].messageFormat === "XML" && ctx_r228.fileUploadClickAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r228.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r228.messageConfigurationForm1.value.sysChannel[0].messageChannel === "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r228.messageConfigurationForm1.value.sysChannel[0].messageFormat === "XML" || ctx_r228.messageConfigurationForm1.value.sysChannel[0].messageFormat === "JSON");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r228.messageConfigurationForm1.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r228.editFlag);
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_20_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r263 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 118);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_10_div_10_form_4_div_20_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r263); const ctx_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5); return ctx_r262.addBioDocs1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddSystemComponent_div_1_form_10_div_10_form_4_div_20_a_2_Template, 3, 0, "a", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_10_div_10_form_4_div_20_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r263); const ctx_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5); return ctx_r264.submitAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, " Save ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_10_div_10_form_4_div_20_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r263); const ctx_r265 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5); return ctx_r265.previousAll("4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, " Exit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r229.submitFlagAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r229.submitFlagAll || !ctx_r229.tcpForm1.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r229.submitFlagAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](4, _c2));
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "fieldset", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddSystemComponent_div_1_form_10_div_10_form_4_div_2_Template, 3, 0, "div", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6, "Header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Data Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Default Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Encryption Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, AddSystemComponent_div_1_form_10_div_10_form_4_div_19_Template, 29, 12, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](20, AddSystemComponent_div_1_form_10_div_10_form_4_div_20_Template, 13, 5, "div", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r195.tcpForm1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r195.submitFlagAll || !ctx_r195.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r195.messageConfigurationForm.value.sysChannel[0].messageFormat !== "XML");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r195.label2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r195.tcpForm1.get("sysService")["controls"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r195.editFlag);
} }
function AddSystemComponent_div_1_form_10_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_10_div_10_div_1_Template, 8, 0, "div", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddSystemComponent_div_1_form_10_div_10_form_2_Template, 2, 2, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddSystemComponent_div_1_form_10_div_10_div_3_Template, 7, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AddSystemComponent_div_1_form_10_div_10_form_4_Template, 21, 6, "form", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r111.messageConfigurationForm1.value.sysChannel[0].messageFormat == "XML" && ctx_r111.tab22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r111.basicInfoForm.value.messsageType === "A" && ctx_r111.tab21 || ctx_r111.basicInfoForm.value.messsageType === "A" && !ctx_r111.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r111.messageConfigurationForm1.value.sysChannel[0].messageChannel === "DB Connection" && ctx_r111.tableFlag2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r111.tab22 || !ctx_r111.editFlag);
} }
function AddSystemComponent_div_1_form_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "form", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "ul", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddSystemComponent_div_1_form_10_li_3_Template, 3, 0, "li", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AddSystemComponent_div_1_form_10_li_4_Template, 3, 0, "li", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AddSystemComponent_div_1_form_10_li_5_Template, 3, 0, "li", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AddSystemComponent_div_1_form_10_li_6_Template, 3, 0, "li", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AddSystemComponent_div_1_form_10_div_9_Template, 5, 4, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AddSystemComponent_div_1_form_10_div_10_Template, 5, 4, "div", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.tab1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r8.tab1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r8.tab2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.tab2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.tab1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.tab2);
} }
function AddSystemComponent_div_1_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r273 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSystemComponent_div_1_div_11_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r273); const ctx_r272 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r272.next("basicConfiguration"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Next ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r266.basicInfoForm.valid);
} }
function AddSystemComponent_div_1_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r275 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSystemComponent_div_1_div_11_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r275); const ctx_r274 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r274.onSubmitEditAddSystem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_div_11_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r277 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSystemComponent_div_1_div_11_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r277); const ctx_r276 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r276.onClickOfAuth(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Auth ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_div_11_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r279 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSystemComponent_div_1_div_11_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r279); const ctx_r278 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r278.onClickOfClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Close ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_div_11_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r281 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSystemComponent_div_1_div_11_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r281); const ctx_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r280.onClickOfReopen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Reopen ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_div_11_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r283 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AddSystemComponent_div_1_div_11_div_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r283); const ctx_r282 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r282.OndeleteofUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AddSystemComponent_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddSystemComponent_div_1_div_11_div_1_Template, 3, 1, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AddSystemComponent_div_1_div_11_div_2_Template, 3, 0, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, AddSystemComponent_div_1_div_11_div_3_Template, 3, 0, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AddSystemComponent_div_1_div_11_div_4_Template, 3, 0, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AddSystemComponent_div_1_div_11_div_5_Template, 3, 0, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AddSystemComponent_div_1_div_11_div_6_Template, 3, 0, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, " Exit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.respData && !ctx_r9.editFlag && (ctx_r9.respData.recordStatus == "OPEN" || ctx_r9.respData.recordStatus == "O"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.respData && !ctx_r9.editFlag && (ctx_r9.respData.approvedStatus == "UNAUTHORIZED" || ctx_r9.respData.approvedStatus == "U"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.respData && !ctx_r9.editFlag && (ctx_r9.respData.recordStatus == "OPEN" || ctx_r9.respData.recordStatus == "O") && (ctx_r9.respData.approvedEver == "YES" || ctx_r9.respData.approvedEver == "Y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r9.respData && !ctx_r9.editFlag && (ctx_r9.respData.recordStatus == "CLOSED" || ctx_r9.respData.recordStatus == "C") && (ctx_r9.respData.approvedEver == "YES" || ctx_r9.respData.approvedEver == "Y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r9.editFlag && ctx_r9.respData && (ctx_r9.respData.approvedEver == "NO" || ctx_r9.respData.approvedEver == "N"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](7, _c2));
} }
function AddSystemComponent_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Maker");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "img", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Maker Time Stamp");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "i", 184);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Record Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 185);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "i", 186);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Checker");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 187);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "img", 188);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Checker Time Stamp");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](63, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 189);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](69, "i", 190);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "First Time Authorization");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](81, "img", 192);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "Authorization Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "div", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div", 191);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](93, "img", 193);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "div", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97, "Modification Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r10.respData.creatorId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](26, 8, ctx_r10.respData.createdTime, "MM/dd/yyyy, h:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r10.respData.recordStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r10.respData.approverId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](63, 11, ctx_r10.respData.approvedTime, "MM/dd/yyyy, h:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r10.respData.approvedEver);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r10.respData.approvedStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r10.respData.versionNo);
} }
function AddSystemComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Add System");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AddSystemComponent_div_1_form_4_Template, 69, 10, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, AddSystemComponent_div_1_form_5_Template, 2, 2, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AddSystemComponent_div_1_div_6_Template, 6, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AddSystemComponent_div_1_div_7_Template, 7, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, AddSystemComponent_div_1_div_8_Template, 5, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, AddSystemComponent_div_1_form_9_Template, 22, 7, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AddSystemComponent_div_1_form_10_Template, 11, 6, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, AddSystemComponent_div_1_div_11_Template, 10, 8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, AddSystemComponent_div_1_div_12_Template, 100, 14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.basicConfiguration);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.messageConfiguration && ctx_r1.basicInfoForm.value.messsageType !== "A" || !ctx_r1.editFlag && ctx_r1.basicInfoForm.value.messsageType !== "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.mdb && ctx_r1.basicInfoForm.value.messsageType !== "A" || (ctx_r1.messageConfigurationForm.value.sysChannel[0].messageFormat === "FLATFILE" || ctx_r1.messageConfigurationForm.value.sysChannel[0].messageFormat === "CSV/EXCEL") && ctx_r1.basicInfoForm.value.messsageType != "A" && !ctx_r1.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection" && ctx_r1.tableFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.messageConfigurationForm.value.sysChannel[0].messageFormat == "XML" && ctx_r1.incomingMessageConfiguration === true || ctx_r1.messageConfigurationForm.value.sysChannel[0].messageFormat == "XML" && !ctx_r1.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.incomingMessageConfiguration || !ctx_r1.editFlag && ctx_r1.basicInfoForm.value.messsageType !== "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.basicInfoForm.value.messsageType == "A" && ctx_r1.all === true || ctx_r1.basicInfoForm.value.messsageType == "A" && !ctx_r1.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.basicConfiguration);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.respData);
} }
class AddSystemComponent {
    // fieldValues: any[];
    constructor(fb, addSystem, router, roleService, toastService, spinner, cdr, datePipe) {
        this.fb = fb;
        this.addSystem = addSystem;
        this.router = router;
        this.roleService = roleService;
        this.toastService = toastService;
        this.spinner = spinner;
        this.cdr = cdr;
        this.datePipe = datePipe;
        this.basicConfiguration = true;
        this.isoRespData = [];
        this.messageBasisIso = [];
        this.headerTagData = [];
        this.encryptionArray = [];
        this.xmlRespData = [];
        this.result = [];
        this.tab1 = true;
        this.array = [];
        this.array1 = [];
        this.arrayMessageConfig = [];
        this.submitFlag = true;
        this.submitFlagAll = true;
        this.loading = true;
        this.tempArrayList = [];
        this.editFlag = true;
        this.fileUploadClick = false;
        this.fileUploadClickAll = false;
        this.tab11 = true;
        this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels();
        this.table = [];
        this.tabelData = [];
        this.table2 = [];
        this.formTouched1 = true;
        this.formTouched2 = true;
        this.formTouched3 = true;
        this.formTouched4 = true;
        this.formTouched5 = true;
        this.headerArray = [];
        this.dbConnectionOption = [];
        this.selectedMessageKeys = [];
        this.selectedMessageKeys1 = [];
        this.showDialog = false;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.saved = "";
        this.fieldValues = [];
    }
    ngOnInit() {
        this.idValue = localStorage.getItem("idValue");
        this.currentUser = localStorage.getItem("userFromLogin");
        this.tempArrayList = [];
        this.fetchingHeadertag();
        this.messsageTypeArray = ["I", "O", "A"];
        this.queArray = ["IBM", "JMS"];
        this.encryptionArray = ["No Encryption", "BASE 64", "SHA 264", "SHA 512"];
        this.selections = "No Encryption";
        this.serviceTypeArray = ["server", "client"];
        this.protocolArray = [
            "TCP/IP",
            "HTTPS/HTTP",
            "MDB",
            "EJB",
            "DB Connection",
        ];
        this.buildForm(null);
        this.tcpForm = this.fb.group({
            sysService: this.fb.array([this.createSysService()]),
        });
        this.tcpForm1 = this.fb.group({
            sysService: this.fb.array([this.createSysService1()]),
        });
        this.messageConfigurationForm1 = this.fb.group({
            sysChannel: this.fb.array([this.createSysChannel1()]),
        });
        this.messageConfigurationForm = this.fb.group({
            sysChannel: this.fb.array([this.createSysChannel()]),
        });
        if (this.idValue != null) {
            this.addSystem.setIndex({
                index: this.idValue,
            });
        }
        this.addSystem.getIndex().subscribe((resp) => {
            if (resp.index) {
                this.index = resp.index;
                this.addSystem.fecthingAddSystem().subscribe((dataresp) => {
                    if (dataresp.result) {
                        this.getRespBasedOnId(dataresp.result, resp.index);
                    }
                });
            }
            else {
                this.loading = false;
            }
        });
        this.roleService.fetchScreenPermissions("Add System");
        this.roleService.screenLabelList.subscribe((message) => (this.roleCodes = message));
        setTimeout(() => {
            console.log(this.roleCodes);
        }, 100);
    }
    buildForm(item) {
        this.basicInfoForm = this.fb.group({
            createdTime: [item ? item.createdTime : ""],
            creatorId: [item ? item.creatorId : ""],
            systemId: [item ? item.systemId : ""],
            systemCode: [item ? item.systemCode : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            systemName: [item ? item.systemName : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            serviceType: [item ? item.serviceType : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            messsageType: [item ? item.messsageType : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            medianIp: [item ? item.medianIp : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            sourceUri: [item ? item.sourceUri : ""],
            medianUri: [item ? item.medianUri : ""],
            medianPort: [item ? item.medianPort : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            sourceIp: [item ? item.sourceIp : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            sourcePort: [item ? item.sourcePort : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        });
    }
    canExit() {
        let isExit = false;
        if ((this.basicInfoForm.touched ||
            this.messageConfigurationForm.touched ||
            this.tcpForm.touched ||
            this.messageConfigurationForm1.touched ||
            this.tcpForm1.touched) &&
            (this.formTouched1 == true ||
                this.formTouched2 == true ||
                this.formTouched3 == true ||
                this.formTouched4 == true ||
                this.formTouched5 == true) &&
            this.saved != "saved") {
            return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                text: "There are unsaved changes in the screen. Would you like to navigate to other screen?",
                showCancelButton: true,
                confirmButtonColor: "#E6224A",
                cancelButtonColor: "#011945",
                cancelButtonText: "NO",
                confirmButtonText: "YES",
                icon: "info",
            }).then((result) => {
                if (result.isConfirmed === true) {
                    isExit = true;
                    this.cdr.markForCheck();
                    return isExit;
                }
                else {
                    isExit = false;
                    this.cdr.markForCheck();
                    return isExit;
                }
            });
        }
        else {
            isExit = true;
            return new Promise((resolve, reject) => {
                if (isExit === true) {
                    isExit = true;
                    this.cdr.markForCheck();
                    resolve(true);
                }
            });
        }
    }
    getRespBasedOnId(resp, arg0) {
        var _a, _b, _c, _d;
        this.fileUploadClick = true;
        this.respData = resp.find((item) => item.systemId == arg0);
        this.loading = false;
        this.auditLog();
        //messageConfiguration
        this.editFlag = false;
        this.arrayMessageConfig = this.respData.sysChannel;
        this.arrayMessageConfig = this.respData.sysChannel;
        if (this.respData.messsageType == "A") {
            this.arrayMessageConfig = this.arrayMessageConfig.filter((item) => item.messageType == "I" || item.messageType == "O");
        }
        if (this.respData.messsageType === "A") {
            this.fileUploadClickAll = true;
            this.arrayMessageConfig = this.arrayMessageConfig.filter((item) => item.messageType == "I");
        }
        this.onProtocalSlection(this.arrayMessageConfig[0].messageChannel);
        if (this.arrayMessageConfig[0].messageChannel === "TCP/IP") {
            this.fetchingIso();
            this.label2 = "Field No";
        }
        if (this.arrayMessageConfig[0].messageChannel === "MT") {
            this.fetchingMT();
            for (let index = 0; index < this.arrayMessageConfig[0].sysService.length; index++) {
                this.onHeaderSelection(this.arrayMessageConfig[0].sysService[index].headerTag, index);
            }
            this.label2 = "Field No";
        }
        if (this.arrayMessageConfig[0].messageChannel === "MX") {
            this.fetchingMX();
            for (let index = 0; index < this.arrayMessageConfig[0].sysService.length; index++) {
                this.onHeaderSelection(this.arrayMessageConfig[0].sysService[index].headerTag, index);
            }
            this.label2 = "Field No";
        }
        if (this.arrayMessageConfig[0].messageFormat === "XML") {
            this.fetchingXMl();
            this.label2 = "Tag";
        }
        if (this.arrayMessageConfig[0].messageChannel === "DB Connection") {
            this.label2 = "Column Name";
        }
        if (this.arrayMessageConfig[0].messageFormat === "JSON") {
            this.label2 = "Key";
        }
        while (this.formArrMessageConfig.length > 0) {
            this.formArrMessageConfig.removeAt(this.formArrMessageConfig.length - 1);
        }
        this.arrayMessageConfig.forEach((x) => {
            this.formArrMessageConfig.push(this.fb.group(x));
        });
        //tcForm
        this.array = this.arrayMessageConfig[0].sysService;
        this.onProtocalSlection(this.arrayMessageConfig[0].messageChannel);
        while (this.formArr.length > 0) {
            this.formArr.removeAt(this.formArr.length - 1);
        }
        if (((_b = (_a = this.messageConfigurationForm.value) === null || _a === void 0 ? void 0 : _a.sysChannel[0]) === null || _b === void 0 ? void 0 : _b.messageChannel) !==
            "TCP/IP") {
            this.array.forEach((x) => {
                this.formArr.push(this.fb.group(x));
            });
        }
        if (this.respData.sysChannel.length > 1) {
            this.arrayMessageConfig1 = this.respData.sysChannel;
            this.arrayMessageConfig1 = this.arrayMessageConfig1.filter((item) => item.messageType == "O");
            this.onProtocalSlection1(this.arrayMessageConfig1[0].messageChannel);
            while (this.formArrMessageConfig1.length > 0) {
                this.formArrMessageConfig1.removeAt(this.formArrMessageConfig1.length - 1);
            }
            this.arrayMessageConfig1.forEach((x) => {
                this.formArrMessageConfig1.push(this.fb.group(x));
            });
            //tcForm1
            this.array1 = this.arrayMessageConfig1[0].sysService;
            this.onProtocalSlection1(this.arrayMessageConfig1[0].messageChannel);
            while (this.formArr1.length > 0) {
                this.formArr1.removeAt(this.formArr1.length - 1);
            }
            if (((_d = (_c = this.messageConfigurationForm1.value) === null || _c === void 0 ? void 0 : _c.sysChannel[0]) === null || _d === void 0 ? void 0 : _d.messageChannel) !==
                "TCP/IP") {
                this.array1.forEach((x) => {
                    this.formArr1.push(this.fb.group(x));
                });
            }
        }
        this.buildForm(this.respData);
        this.auditLog();
        this.spinner.hide();
    }
    get formArr() {
        return this.tcpForm.get("sysService");
    }
    get formArr1() {
        return this.tcpForm1.get("sysService");
    }
    get formArrMessageConfig() {
        return this.messageConfigurationForm.get("sysChannel");
    }
    get formArrMessageConfig1() {
        return this.messageConfigurationForm1.get("sysChannel");
    }
    createSysChannel() {
        return this.fb.group({
            channelId: [""],
            dbConnectString: [""],
            dbPassword: [""],
            dbServiceName: [""],
            dbUsername: [""],
            queueChannel: [""],
            queueConnFactory: [""],
            queueManager: [""],
            queueName: [""],
            queueType: [""],
            messageChannel: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            messageFormat: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            messageType: [""],
        });
    }
    createSysChannel1() {
        return this.fb.group({
            channelId: [""],
            dbConnectString: [""],
            dbPassword: [""],
            dbServiceName: [""],
            dbUsername: [""],
            queueChannel: [""],
            queueConnFactory: [""],
            queueManager: [""],
            queueName: [""],
            queueType: [""],
            messageChannel: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            messageFormat: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            messageType: [""],
        });
    }
    createSysService() {
        return this.fb.group({
            channelId: [""],
            dataType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            encryption: ["No Encryption", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            headerTag: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            headerValue: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            messageBasis: [""],
            messageKey: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            serviceId: [""],
            systemChannelId: [""],
        });
    }
    createSysService1() {
        return this.fb.group({
            channelId: [""],
            dataType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            encryption: ["No Encryption", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            headerTag: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            headerValue: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            messageBasis: [""],
            messageKey: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            serviceId: [""],
            systemChannelId: [""],
        });
    }
    allMethod() {
        this.tab1 = false;
        this.tab2 = true;
        this.tab21 = true;
        this.tab22 = false;
    }
    auditLog() {
        if (this.respData.approverId === "null") {
            this.respData.approverId = " ";
        }
        if (this.respData.approvedStatus === "N") {
            this.respData.approvedStatus = "UNAUTHORIZED";
        }
        if (this.respData.approvedStatus === "Y") {
            this.respData.approvedStatus = "AUTHORIZED";
        }
        if (this.respData.approvedStatus === "A") {
            this.respData.approvedStatus = "AUTHORIZED";
        }
        if (this.respData.approvedStatus === "U") {
            this.respData.approvedStatus = "UNAUTHORIZED";
        }
        if (this.respData.recordStatus === "O") {
            this.respData.recordStatus = "OPEN";
        }
        if (this.respData.recordStatus === "C") {
            this.respData.recordStatus = "CLOSED";
        }
        if (this.respData.approvedEver === "N") {
            this.respData.approvedEver = "NO";
        }
        if (this.respData.approvedEver === "Y") {
            this.respData.approvedEver = "YES";
        }
    }
    next(value) {
        if (value === "basicConfiguration") {
            console.log(this.index);
            console.log(this.messageConfigurationForm.value);
            console.log(this.basicInfoForm.value);
            this.addSystem
                .validateCode(this.basicInfoForm.value.systemCode)
                .subscribe((result) => {
                console.log(result);
                this.isSysCodeAlreadyExist = result.exists;
                this.sysCodeError = result.response;
                if (this.isSysCodeAlreadyExist === true && this.index === undefined) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ title: this.sysCodeError + " !", icon: "error" });
                    this.all = false;
                    return;
                }
                else {
                    if (this.index === undefined) {
                        this.ipAddressValidating();
                    }
                    else {
                        if (this.basicInfoForm.value.messsageType == "I") {
                            this.messageType = "Incoming";
                        }
                        if (this.basicInfoForm.value.messsageType == "O") {
                            this.messageType = "Outgoing";
                        }
                        this.basicConfiguration = false;
                        this.messageConfiguration = true;
                        this.incomingMessageConfiguration = false;
                        this.xml = false;
                        this.mdbXml = false;
                        this.incomingMdbXml = false;
                        this.dbConnection = false;
                    }
                }
            });
        }
        if (value === "messageConfiguration" &&
            this.basicInfoForm.value.messsageType !== "A") {
            if ((this.messageConfigurationForm.value.sysChannel[0].messageChannel ===
                "TCP/IP" ||
                this.messageConfigurationForm.value.sysChannel[0].messageChannel ===
                    "Https/Http" ||
                this.messageConfigurationForm.value.sysChannel[0].messageFormat ===
                    "JSON" ||
                this.messageConfigurationForm.value.sysChannel[0].messageFormat ===
                    "XML" ||
                this.messageConfigurationForm.value.sysChannel[0].messageChannel ===
                    "DB Connection" ||
                this.messageConfigurationForm.value.sysChannel[0].messageChannel ===
                    "MT" ||
                this.messageConfigurationForm.value.sysChannel[0].messageChannel ===
                    "MX") &&
                this.basicInfoForm.value.messsageType != "A") {
                this.messageConfigurationForm.value.sysChannel[0].messageType =
                    this.basicInfoForm.value.messsageType;
                this.basicConfiguration = false;
                this.messageConfiguration = false;
                this.incomingMessageConfiguration = true;
                this.xml = false;
                this.mdb = false;
                this.mdbXml = false;
                this.incomingMdbXml = false;
                this.dbConnection = false;
                this.tableFlag = false;
                if (this.index === undefined &&
                    this.messageConfigurationForm.value.sysChannel[0].messageChannel ===
                        "TCP/IP") {
                    this.fetchingIso();
                    this.label2 = "Field No";
                }
                if (this.index !== undefined &&
                    this.messageConfigurationForm.value.sysChannel[0].messageChannel ===
                        "TCP/IP") {
                    this.label2 = "Field No";
                }
                if (this.messageConfigurationForm.value.sysChannel[0].messageFormat ===
                    "XML") {
                    this.fetchingXMl();
                    this.label2 = "Tag";
                }
                if (this.messageConfigurationForm.value.sysChannel[0].messageFormat ===
                    "JSON") {
                    this.fetchingXMl();
                    this.label2 = "Key";
                }
            }
            if ((this.messageConfigurationForm.value.sysChannel[0].messageFormat ===
                "FLATFILE" ||
                this.messageConfigurationForm.value.sysChannel[0].messageFormat ===
                    "CSV/EXCEL") &&
                this.basicInfoForm.value.messsageType != "A") {
                this.messageConfigurationForm.value.sysChannel[0].messageType =
                    this.basicInfoForm.value.messsageType;
                this.basicConfiguration = false;
                this.messageConfiguration = false;
                this.incomingMessageConfiguration = false;
                this.xml = false;
                this.mdb = true;
                this.mdbXml = false;
                this.incomingMdbXml = false;
                this.dbConnection = false;
                this.tableFlag = false;
            }
            if (this.messageConfigurationForm.value.sysChannel[0].messageChannel ===
                "DB Connection") {
                this.fetchDatabaseTable();
                this.label2 = "Column Name";
                this.basicInfoForm.value.messsageType;
                this.basicConfiguration = false;
                this.messageConfiguration = false;
                this.incomingMessageConfiguration = true;
                this.xml = false;
                this.mdb = false;
                this.mdbXml = false;
                this.incomingMdbXml = false;
                this.dbConnection = false;
                this.tableFlag = true;
            }
            if (this.messageConfigurationForm.value.sysChannel[0].messageChannel ===
                "MT") {
                this.fetchingMT();
                this.label2 = "Field No";
            }
            if (this.messageConfigurationForm.value.sysChannel[0].messageChannel ===
                "MX") {
                this.fetchingMX();
                this.label2 = "Field No";
            }
        }
        if (value === "basicConfiguration" &&
            this.basicInfoForm.value.messsageType === "A") {
            this.all = true;
            this.tab1 = true;
            this.tab11 = true;
            this.tab12 = false;
            this.tab2 = false;
        }
    }
    fetchingMX() {
        this.headerValues = [];
        this.headerValues = ["AppHdr"];
    }
    fetchingMT() {
        this.headerValues = [];
        this.headerValues = ["Block 1", "Block 2", "Block 3", "Block 5"];
    }
    fetchDatabaseTable() {
        this.messageConfigurationForm.value.sysChannel[0].messageType =
            this.basicInfoForm.value.messsageType;
        console.log(this.messageConfigurationForm.value.sysChannel[0]);
        this.addSystem
            .pingDataSource(this.messageConfigurationForm.value.sysChannel[0].dbConnectString, this.messageConfigurationForm.value.sysChannel[0].dbServiceName, this.messageConfigurationForm.value.sysChannel[0].dbUsername, this.messageConfigurationForm.value.sysChannel[0].dbPassword)
            .subscribe((resp) => {
            console.log("resp from backend for fetching database tables ", resp);
            this.table = resp;
        });
        if (this.index !== undefined) {
            for (let index = 0; index < this.tcpForm.value.sysService.length; index++) {
                const filteredHomes = this.tcpForm.value.sysService[index].messageKey.split(",");
                this.tcpForm
                    .get("sysService")["controls"][index].get("messageKey")
                    .setValue(filteredHomes[1]);
            }
        }
        this.label2 = "Column Name";
    }
    fetchDatabaseTable1() {
        console.log(this.messageConfigurationForm.value.sysChannel[0]);
        this.addSystem
            .pingDataSource(this.messageConfigurationForm1.value.sysChannel[0].dbConnectString, this.messageConfigurationForm1.value.sysChannel[0].dbServiceName, this.messageConfigurationForm1.value.sysChannel[0].dbUsername, this.messageConfigurationForm1.value.sysChannel[0].dbPassword)
            .subscribe((resp) => {
            console.log("resp from backend for fetching database tables ", resp);
            this.table2 = resp;
        });
        if (this.index !== undefined) {
            for (let index = 0; index < this.tcpForm1.value.sysService.length; index++) {
                const filteredHomes = this.tcpForm1.value.sysService[index].messageKey.split(",");
                this.tcpForm1
                    .get("sysService")["controls"][index].get("messageKey")
                    .setValue(filteredHomes[1]);
            }
        }
        this.label2 = "Column Name";
    }
    onTableSlection(event) {
        this.tableDropDownClick = true;
        this.addSystem
            .coulmnNameBasedonTableName(this.messageConfigurationForm.value.sysChannel[0].dbConnectString, this.messageConfigurationForm.value.sysChannel[0].dbServiceName, this.messageConfigurationForm.value.sysChannel[0].dbUsername, this.messageConfigurationForm.value.sysChannel[0].dbPassword, event)
            .subscribe((resp) => {
            console.log("resp from backend for fetching database tables ", resp);
            this.tabelData = resp;
        });
    }
    onTableSlection1(event) {
        this.tableDropDownClick1 = true;
        this.addSystem
            .coulmnNameBasedonTableName(this.messageConfigurationForm1.value.sysChannel[0].dbConnectString, this.messageConfigurationForm1.value.sysChannel[0].dbServiceName, this.messageConfigurationForm1.value.sysChannel[0].dbUsername, this.messageConfigurationForm1.value.sysChannel[0].dbPassword, event)
            .subscribe((resp) => {
            console.log("resp from backend for fetching database tables ", resp);
            this.tabelData1 = resp;
        });
    }
    ipAddressValidating() {
        let payload = {};
        (payload.sourceIp = this.basicInfoForm.value.sourceIp),
            (payload.sourcePort = this.basicInfoForm.value.sourcePort),
            (payload.medianIp = this.basicInfoForm.value.medianIp),
            (payload.medianPort = this.basicInfoForm.value.medianPort);
        this.addSystem.validatePort(payload).subscribe((resp) => {
            if (resp == true) {
                if (this.basicInfoForm.value.messsageType == "I") {
                    this.messageType = "Incoming";
                }
                if (this.basicInfoForm.value.messsageType == "O") {
                    this.messageType = "Outgoing";
                }
                this.basicConfiguration = false;
                this.messageConfiguration = true;
                this.incomingMessageConfiguration = false;
                this.xml = false;
                this.mdbXml = false;
                this.incomingMdbXml = false;
                this.dbConnection = false;
                this.tableFlag = false;
            }
        }, (error) => {
            console.log(error);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ title: error.error.message + " !", icon: "error" });
            this.all = false;
            return;
        });
    }
    next1() {
        if ((this.index === undefined &&
            this.messageConfigurationForm.value.sysChannel[0].messageChannel ===
                "TCP/IP") ||
            this.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON") {
            this.fetchingIso();
            this.label2 = "Field No";
        }
        if (this.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML") {
            this.fetchingXMl();
            this.label2 = "Tag";
        }
        if (this.messageConfigurationForm.value.sysChannel[0].messageChannel ===
            "DB Connection") {
            // this.fetchingXMl();
            this.label2 = "Column name";
            this.tableFlag1 = true;
            this.fetchDatabaseTable();
        }
        this.tab1 = true;
        this.tab11 = false;
        this.tab12 = true;
        this.tab2 = false;
    }
    next2() {
        if (this.messageConfigurationForm1.value.sysChannel[0].messageChannel ===
            "TCP/IP" ||
            this.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON") {
            this.fetchingIso1();
            this.label3 = "Field No";
        }
        if (this.messageConfigurationForm1.value.sysChannel[0].messageFormat === "XML") {
            this.fetchingXMl1();
            this.label3 = "Tag";
        }
        if (this.messageConfigurationForm1.value.sysChannel[0].messageChannel ===
            "DB Connection") {
            this.fetchDatabaseTable1();
            (this.label3 = "Column Name"), (this.tableFlag2 = true);
        }
        this.tab1 = false;
        this.tab2 = true;
        this.tab21 = false;
        this.tab22 = true;
        this.basicConfiguration = false;
    }
    onClickOfAuth() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
            text: "You are trying to Authorize record. " + " Do you want to proceed?",
            showCancelButton: true,
            confirmButtonColor: "#3e54b8",
            cancelButtonColor: "#d33",
            // confirmButtonText: 'PROCEED.'
            cancelButtonText: "NO",
            confirmButtonText: "YES",
            icon: "info",
            iconColor: "#d33",
        }).then((result) => {
            console.log("this is reopen ", result);
            if (result.isConfirmed === true) {
                if (this.currentUser === this.respData.creatorId) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "Maker Cannot Authorize Record!", icon: "error" });
                    return;
                }
                let obj_test = {};
                if (this.basicInfoForm.value.messsageType === "I" ||
                    this.basicInfoForm.value.messsageType === "O") {
                    obj_test = this.basicInfoForm.value;
                    obj_test.sysChannel = this.messageConfigurationForm.value.sysChannel;
                    for (let index = 0; index < obj_test.sysChannel.length; index++) {
                        obj_test.sysChannel[index].sysService =
                            this.tcpForm.value.sysService;
                    }
                }
                //submitAll
                if (this.basicInfoForm.value.messsageType === "A") {
                    obj_test = this.basicInfoForm.value;
                    obj_test.sysChannel = this.messageConfigurationForm.value.sysChannel;
                    this.messageConfigurationForm.value.sysChannel[0].messageType = "I";
                    this.messageConfigurationForm1.value.sysChannel[0].messageType = "O";
                    obj_test.sysChannel.push(this.messageConfigurationForm1.value.sysChannel[0]);
                    obj_test.sysChannel[0].sysService = this.tcpForm.value.sysService;
                    obj_test.sysChannel[1].sysService = this.tcpForm1.value.sysService;
                }
                this.addSystem
                    .editaddsystem("auth", this.currentUser, obj_test)
                    .subscribe((response) => {
                    if (response) {
                        this.respData = response;
                        this.auditLog();
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "Record is Authorized", icon: "success" });
                    }
                });
            }
        });
    }
    onClickOfClose() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
            text: "You are trying to Close record. " + " Do you want to proceed?",
            showCancelButton: true,
            confirmButtonColor: "#3e54b8",
            cancelButtonColor: "#d33",
            // confirmButtonText: 'PROCEED.'
            cancelButtonText: "NO",
            confirmButtonText: "YES",
            icon: "info",
            iconColor: "#d33",
        }).then((result) => {
            console.log("this is reopen ", result);
            if (result.isConfirmed === true) {
                let obj_test = {};
                if (this.basicInfoForm.value.messsageType === "I" ||
                    this.basicInfoForm.value.messsageType === "O") {
                    obj_test = this.basicInfoForm.value;
                    console.log(this.messageConfigurationForm);
                    console.log(this.messageConfigurationForm.value);
                    console.log(this.messageConfigurationForm.value.sysChannel);
                    obj_test.sysChannel = this.messageConfigurationForm.value.sysChannel;
                    for (let index = 0; index < obj_test.sysChannel.length; index++) {
                        obj_test.sysChannel[index].sysService =
                            this.tcpForm.value.sysService;
                    }
                }
                //submitAll
                if (this.basicInfoForm.value.messsageType === "A") {
                    obj_test = this.basicInfoForm.value;
                    obj_test.sysChannel = this.messageConfigurationForm.value.sysChannel;
                    this.messageConfigurationForm.value.sysChannel[0].messageType = "I";
                    this.messageConfigurationForm1.value.sysChannel[0].messageType = "O";
                    obj_test.sysChannel.push(this.messageConfigurationForm1.value.sysChannel[0]);
                    obj_test.sysChannel[0].sysService = this.tcpForm.value.sysService;
                    obj_test.sysChannel[1].sysService = this.tcpForm1.value.sysService;
                }
                this.addSystem
                    .editaddsystem("close", this.currentUser, obj_test)
                    .subscribe((response) => {
                    if (response) {
                        this.respData = response;
                        this.auditLog();
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "Record is Closed", icon: "success" });
                    }
                });
            }
        });
    }
    onClickOfReopen() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
            text: "You are trying to Reopen record. " + " Do you want to proceed?",
            showCancelButton: true,
            confirmButtonColor: "#3e54b8",
            cancelButtonColor: "#d33",
            // confirmButtonText: 'PROCEED.'
            cancelButtonText: "NO",
            confirmButtonText: "YES",
            icon: "info",
            iconColor: "#d33",
        }).then((result) => {
            console.log("this is reopen ", result);
            if (result.isConfirmed === true) {
                let obj_test = {};
                if (this.basicInfoForm.value.messsageType === "I" ||
                    this.basicInfoForm.value.messsageType === "O") {
                    obj_test = this.basicInfoForm.value;
                    obj_test.sysChannel = this.messageConfigurationForm.value.sysChannel;
                    for (let index = 0; index < obj_test.sysChannel.length; index++) {
                        obj_test.sysChannel[index].sysService =
                            this.tcpForm.value.sysService;
                    }
                }
                //submitAll
                if (this.basicInfoForm.value.messsageType === "A") {
                    obj_test = this.basicInfoForm.value;
                    obj_test.sysChannel = this.messageConfigurationForm.value.sysChannel;
                    this.messageConfigurationForm.value.sysChannel[0].messageType = "I";
                    this.messageConfigurationForm1.value.sysChannel[0].messageType = "O";
                    obj_test.sysChannel.push(this.messageConfigurationForm1.value.sysChannel[0]);
                    obj_test.sysChannel[0].sysService = this.tcpForm.value.sysService;
                    obj_test.sysChannel[1].sysService = this.tcpForm1.value.sysService;
                }
                this.addSystem
                    .editaddsystem("open", this.currentUser, obj_test)
                    .subscribe((response) => {
                    if (response) {
                        this.respData = response;
                        this.auditLog();
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "Record is Reopened", icon: "success" });
                    }
                });
            }
        });
        //submit2
    }
    OndeleteofUser() {
        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
            //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
            text: "You are trying to Delete record. " + " Do you want to proceed?",
            showCancelButton: true,
            confirmButtonColor: "#3e54b8",
            cancelButtonColor: "#d33",
            // confirmButtonText: 'PROCEED.'
            cancelButtonText: "NO",
            confirmButtonText: "YES",
            icon: "info",
            iconColor: "#d33",
        }).then((result) => {
            console.log("this is reopen ", result);
            if (result.isConfirmed === true) {
                this.addSystem
                    .deleteAddSystem(this.currentUser, this.respData.systemId)
                    .subscribe((response) => {
                    if (response) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "Record is Deleted", icon: "success" });
                        this.router.navigate(["/addSystem/summary"]);
                    }
                });
            }
        });
    }
    previousAll(value) {
        if (value === "1") {
            this.basicConfiguration = true;
            this.messageConfiguration = false;
            this.incomingMessageConfiguration = false;
            this.xml = false;
            this.mdbXml = false;
            this.incomingMdbXml = false;
            this.dbConnection = false;
            this.tab1 = false;
            this.tab2 = false;
            this.all = false;
            this.tableFlag = false;
        }
        if (value === "2") {
            this.basicConfiguration = false;
            this.messageConfiguration = false;
            this.incomingMessageConfiguration = false;
            this.xml = false;
            this.mdbXml = false;
            this.incomingMdbXml = false;
            this.dbConnection = false;
            this.tab1 = true;
            this.tab11 = true;
            this.tab12 = false;
            this.tab2 = false;
            this.tableFlag = false;
        }
        if (value === "3") {
            this.basicConfiguration = false;
            this.messageConfiguration = false;
            this.incomingMessageConfiguration = false;
            this.xml = false;
            this.mdbXml = false;
            this.incomingMdbXml = false;
            this.dbConnection = false;
            this.tableFlag = false;
            this.tab1 = true;
            this.tab11 = false;
            this.tab12 = true;
            this.tab2 = false;
        }
        if (value === "4") {
            this.tableFlag = false;
            this.basicConfiguration = false;
            this.messageConfiguration = false;
            this.incomingMessageConfiguration = false;
            this.xml = false;
            this.mdbXml = false;
            this.incomingMdbXml = false;
            this.dbConnection = false;
            this.tab1 = false;
            this.tab2 = true;
            this.tab21 = true;
            this.tab22 = false;
        }
    }
    previous(value) {
        if (value === "messageConfiguration") {
            this.basicConfiguration = true;
            this.messageConfiguration = false;
            this.incomingMessageConfiguration = false;
            this.xml = false;
            this.mdbXml = false;
            this.incomingMdbXml = false;
            this.dbConnection = false;
            this.tableFlag = false;
            this.all = false;
            this.mdb = false;
        }
        if (value === "incomingMessageConfiguration") {
            this.incomingMessageConfiguration = false;
            this.xml = false;
            this.basicConfiguration = false;
            this.messageConfiguration = true;
            this.mdbXml = false;
            this.incomingMdbXml = false;
            this.dbConnection = false;
            this.mdb = false;
            this.tableFlag = false;
        }
    }
    onProtocalSlection(event) {
        this.tempArrayList = [];
        // this.messageConfigurationForm.get('messageFormat').setValue("");
        if (this.index === undefined) {
            this.messageConfigurationForm
                .get("sysChannel")["controls"][0].get("messageFormat")
                .setValue("");
        }
        if (event === "TCP/IP") {
            this.dataType = [];
            this.dataType = ["ISO 8583 1987", "ISO 8583 1993", "ISO 8583 2003"];
        }
        else if (event === "Https/Http") {
            this.dataType = [];
            this.dataType = ["XML", "JSON"];
        }
        else if (event === "EJB" ||
            event === "DB Connection" ||
            event === "MDB") {
            this.dataType = [];
            this.dataType = ["XML", "JSON", "CSV/EXCEL", "FLATFILE"];
        }
        else if (event === "MT") {
            this.dataType = [];
            this.dataType = ["MT103"];
        }
        else if (event === "MX") {
            this.dataType = [];
            this.dataType = ["PAC008"];
        }
    }
    onProtocalSlection1(event) {
        if (this.index === undefined) {
            this.messageConfigurationForm1
                .get("sysChannel")["controls"][0].get("messageFormat")
                .setValue("");
        }
        if (event === "TCP/IP") {
            this.dataType1 = [];
            this.dataType1 = ["ISO 8583 1987", "ISO 8583 1993", "ISO 8583 2003"];
        }
        else if (event === "Https/Http") {
            this.dataType1 = [];
            this.dataType1 = ["XML", "JSON"];
        }
        else if (event === "EJB" ||
            event === "DB Connection" ||
            event === "MDB") {
            this.dataType1 = [];
            this.dataType1 = ["XML", "JSON", "CSV/EXCEL", "FLATFILE"];
        }
    }
    addBioDocs() {
        var _a, _b;
        this.sysService = this.tcpForm.get("sysService");
        console.log(this.sysService);
        const enteredRecord = this.tcpForm.get("sysService");
        const selectedHeaderTags = new Set(enteredRecord.value.map((d) => d.headerTag));
        this.headerArray = this.headerTagData
            .filter((data) => selectedHeaderTags.has(data.headerTag))
            .map((val) => val.headerTag);
        if (((_b = (_a = this.messageConfigurationForm.value) === null || _a === void 0 ? void 0 : _a.sysChannel[0]) === null || _b === void 0 ? void 0 : _b.messageChannel) !==
            "TCP/IP") {
            console.log(this.tcpForm.value, "Inside add bio");
            const messageKeys = new Set(this.sysService.value.map((val) => val.messageKey));
            this.xmlRespDataFiltered = this.xmlRespData.filter((val) => !messageKeys.has(val));
        }
        this.sysService.push(this.createSysService());
    }
    addBioDocs1() {
        var _a, _b;
        this.sysService = this.tcpForm1.get("sysService");
        this.sysService.push(this.createSysService());
        if (((_b = (_a = this.messageConfigurationForm.value) === null || _a === void 0 ? void 0 : _a.sysChannel[0]) === null || _b === void 0 ? void 0 : _b.messageChannel) !==
            "TCP/IP") {
            const messageKeys = new Set(this.sysService.value.map((val) => val.messageKey));
            this.xmlRespDataFiltered1 = this.xmlRespData1.filter((val) => !messageKeys.has(val));
        }
    }
    submit2() {
        let obj_test = {};
        obj_test = this.basicInfoForm.value;
        obj_test.sysChannel = this.messageConfigurationForm.value.sysChannel;
        console.log(obj_test);
        console.log(this.tcpForm.value);
        for (let index = 0; index < obj_test.sysChannel.length; index++) {
            obj_test.sysChannel[index].sysService = this.tcpForm.value.sysService.map((val) => {
                var _a, _b;
                console.log(val);
                if (((_b = (_a = this.messageConfigurationForm.value) === null || _a === void 0 ? void 0 : _a.sysChannel[0]) === null || _b === void 0 ? void 0 : _b.messageChannel) !== "TCP/IP") {
                    return Object.assign({}, val);
                }
                return Object.assign(Object.assign({}, val), { messageKey: val.messageKey.fieldNo
                        ? val.messageKey.fieldNo
                        : Number(val.messageKey.split(" ")[0]), messageBasis: val.messageKey.fieldName
                        ? val.messageKey.fieldName
                        : val.messageKey });
            });
        }
        if (this.index) {
            this.addSystem
                .editaddsystem("update", this.currentUser, obj_test)
                .subscribe((addSysResp) => {
                if (addSysResp) {
                    this.saved = "saved";
                    this.index = addSysResp.systemId;
                    this.respData = addSysResp;
                    // this.respData.approvedEver = 'N'
                    // this.respData.createdTime=new Date();
                    this.auditLog();
                    this.previous("messageConfiguration");
                    this.editFlag = false;
                    // this.submitFlag=false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "Record is Updated", icon: "success" });
                    this.formTouched1 = !this.basicInfoForm.touched;
                    this.formTouched2 = !this.messageConfigurationForm.touched;
                    this.formTouched3 = !this.tcpForm.touched;
                    this.formTouched4 = !this.messageConfigurationForm1.touched;
                    this.formTouched5 = !this.tcpForm1.touched;
                }
            }, (error) => {
                console.log("error resp :: ", error);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: error.error, icon: "error" });
            });
        }
        else {
            this.addSystem.submittingAddSystem(obj_test, this.currentUser).subscribe((addSysResp) => {
                if (addSysResp) {
                    // this.submitFlag=false;
                    this.saved = "saved";
                    this.index = addSysResp.systemId;
                    this.respData = addSysResp;
                    //  this.respData.approvedEver = 'N'
                    // this.respData.createdTime=new Date();
                    this.auditLog();
                    this.previous("messageConfiguration");
                    this.editFlag = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "Record is Created", icon: "success" });
                    this.formTouched1 = !this.basicInfoForm.touched;
                    this.formTouched2 = !this.messageConfigurationForm.touched;
                    this.formTouched3 = !this.tcpForm.touched;
                    this.formTouched4 = !this.messageConfigurationForm1.touched;
                    this.formTouched5 = !this.tcpForm1.touched;
                }
            }, (error) => {
                console.log("error resp :: ", error);
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: error.error, icon: "error" });
            });
        }
    }
    fetchingIso() {
        this.addSystem.fetchingIsoForTcp().subscribe((isoResp) => {
            this.isoRespData = isoResp;
            this.isoRespDataFiltered = this.isoRespData.map((mKey) => (Object.assign(Object.assign({}, mKey), { formattedmKey: `${mKey.fieldNo} ${mKey.fieldName}` })));
            if (isoResp) {
                this.messageBasisIso = isoResp.map((data) => {
                    return data.fieldName;
                });
                // for dropdown 1
                this.messageKeyIso = isoResp.map((data) => {
                    return data.fieldNo;
                });
                this.typeDataIso = isoResp.map((data) => {
                    return data.dataType;
                });
                this.headerValueIso = isoResp.map((data) => {
                    return data.headerValue;
                });
                const valFieldMapper = this.isoRespData.reduce((acc, val) => {
                    acc[val.fieldNo] = val.fieldName;
                    return acc;
                }, {});
                const selectedMessageKeys = new Set(this.array.map((x) => valFieldMapper[x.messageKey]));
                this.isoRespDataFiltered = this.isoRespDataFiltered.filter((val) => !selectedMessageKeys.has(val.fieldName));
                this.array.forEach((x) => {
                    const data = this.isoRespData.find((val) => val.fieldNo == x.messageKey);
                    x.messageKey = `${x.messageKey || ""} ${(data === null || data === void 0 ? void 0 : data.fieldName) || ""}`;
                    this.formArr.push(this.fb.group(x));
                });
            }
        });
    }
    fetchingIso1() {
        this.addSystem.fetchingIsoForTcp().subscribe((isoResp) => {
            var _a;
            this.isoRespData1 = isoResp;
            this.isoRespDataFiltered1 = this.isoRespData1.map((mKey) => (Object.assign(Object.assign({}, mKey), { formattedmKey: `${mKey.fieldNo} ${mKey.fieldName}` })));
            if (isoResp) {
                this.messageBasisIso1 = isoResp.map((data) => {
                    return data.fieldName;
                });
                // for dropdown 1
                this.messageKeyIso1 = isoResp.map((data) => {
                    return data.fieldNo;
                });
                this.typeDataIso1 = isoResp.map((data) => {
                    return data.dataType;
                });
                this.headerValueIso1 = isoResp.map((data) => {
                    return data.headerValue;
                });
                const valFieldMapper = this.isoRespData1.reduce((acc, val) => {
                    acc[val.fieldNo] = val.fieldName;
                    return acc;
                }, {});
                const selectedMessageKeys = new Set((_a = this.array1) === null || _a === void 0 ? void 0 : _a.map((x) => valFieldMapper[x.messageKey]));
                this.isoRespDataFiltered1 = this.isoRespDataFiltered1.filter((val) => !selectedMessageKeys.has(val.fieldName));
                this.array1.forEach((x) => {
                    const data = this.isoRespData1.find((val) => val.fieldNo == x.messageKey);
                    x.messageKey = `${x.messageKey || ""} ${(data === null || data === void 0 ? void 0 : data.fieldName) || ""}`;
                    this.formArr1.push(this.fb.group(x));
                });
            }
        });
    }
    fetchingXMl() {
        this.addSystem.gettinXMLmsgIncoming().subscribe((xmlResp) => {
            this.xmlRespData = xmlResp;
            this.xmlRespDataFiltered = [...this.xmlRespData];
            if (xmlResp) {
                this.messageBasisIso = xmlResp.map((data) => {
                    return data.messageBasis;
                });
                this.messageKeyIso = xmlResp.map((data) => {
                    return data.messageKey;
                });
                this.typeDataIso = xmlResp.map((data) => {
                    return data.dataType;
                });
                this.headerValueIso = xmlResp.map((data) => {
                    return data.headerValue;
                });
            }
        });
    }
    onSubmitEditAddSystem() {
        console.log("This is Edit Charge Maintenance");
        this.editFlag = true;
        console.log(this.editFlag);
    }
    fetchingXMl1() {
        this.addSystem.gettinXMLmsgIncoming().subscribe((xmlResp) => {
            this.xmlRespData1 = xmlResp;
            console.log(xmlResp);
            this.xmlRespDataFiltered1 = [...this.xmlRespData1];
            if (xmlResp) {
                this.messageBasisIso = xmlResp.map((data) => {
                    return data.messageBasis;
                });
                this.messageKeyIso = xmlResp.map((data) => {
                    return data.messageKey;
                });
                this.typeDataIso = xmlResp.map((data) => {
                    return data.dataType;
                });
                this.headerValueIso = xmlResp.map((data) => {
                    return data.headerValue;
                });
            }
        });
    }
    onSelectingMessageBasis(value, i) {
        if (this.tempArrayList[i]) {
            this.tempArrayList[i] = value;
        }
        else {
            this.tempArrayList.push(value);
        }
        var x = this.isoRespData.find((item) => item.fieldNo == value);
        this.tcpForm
            .get("sysService")["controls"][i].get("messageBasis")
            .setValue(x.fieldName);
        this.tcpForm
            .get("sysService")["controls"][i].get("dataType")
            .setValue(x.dataType);
        console.log(this.tcpForm.get("sysService"));
    }
    onSelectingMessageBasis1(event, i) {
        this.selectedMessageKeys1[i] = event.fieldName;
        const selectedMessageKeySet = new Set(this.selectedMessageKeys1);
        this.isoRespDataFiltered1 = this.isoRespData1
            .filter((val) => !selectedMessageKeySet.has(val.fieldName))
            .map((mKey) => (Object.assign(Object.assign({}, mKey), { formattedmKey: `${mKey.fieldNo} ${mKey.fieldName}` })));
        var x = this.isoRespData1.find((item) => item.fieldNo == event.fieldNo);
        this.tcpForm1
            .get("sysService")["controls"][i].get("messageBasis")
            .setValue(x.fieldName);
        this.tcpForm1
            .get("sysService")["controls"][i].get("dataType")
            .setValue(x.dataType);
    }
    try(value) {
        return true;
        /* if (this.tempArrayList.find(item=>item==value)) {
        return true;
      }
      else {
        return false;
      }*/
    }
    fetchingHeadertag() {
        this.addSystem.fetchingHeaderTag().subscribe((resp) => {
            this.headerTagData = resp;
        });
    }
    chooseFile() {
        document.getElementById("chFile").click();
    }
    chooseFile1() {
        document.getElementById("chFile1").click();
    }
    uploadFileXml(event) {
        this.selectedFiles = event.target.files;
        this.sizeOfFile = this.selectedFiles.item(0).size;
        this.currentFileUpload = this.selectedFiles.item(0);
        this.fileName = this.currentFileUpload.name;
        this.fileUploadWrapper.nativeElement.setAttribute("data-text", this.fileName);
        this.addSystem
            .gettingHederofXMl(this.currentFileUpload)
            .subscribe((xmlResp) => {
            if (xmlResp) {
                this.uploadXmlResp = xmlResp;
                this.messageBasisIso = xmlResp.nodeTagList;
                this.xmlRespData = xmlResp.nodeTagList;
                this.xmlRespDataFiltered = this.xmlRespData;
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "File Uploaded Successfully", icon: "success" });
                this.fileUploadClick = false;
            }
        });
    }
    uploadFileXml1(event) {
        this.selectedFiles1 = event.target.files;
        this.sizeOfFile1 = this.selectedFiles1.item(0).size;
        this.currentFileUpload1 = this.selectedFiles1.item(0);
        this.fileName1 = this.currentFileUpload1.name;
        this.fileUploadWrapper1.nativeElement.setAttribute("data-text", this.fileName1);
        this.addSystem
            .gettingHederofXMl(this.currentFileUpload1)
            .subscribe((xmlResp) => {
            if (xmlResp) {
                this.uploadXmlResp1 = xmlResp;
                this.messageBasisIso1 = xmlResp.nodeTagList;
                this.xmlRespData1 = xmlResp.nodeTagList;
                this.xmlRespDataFiltered1 = this.xmlRespData1;
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "File Uploaded Successfully", icon: "success" });
                this.fileUploadClickAll = false;
            }
        });
    }
    onselectingTag(event, i) {
        if (this.tempArrayList[i]) {
            this.tempArrayList[i] = event;
        }
        else {
            this.tempArrayList.push(event);
        }
        var result = Object.keys(this.uploadXmlResp.nodeValueMap).map((key) => [
            key,
            this.uploadXmlResp.nodeValueMap[key],
        ]);
        var x = result.find((item) => item[0] == event);
        this.tcpForm
            .get("sysService")["controls"][i].get("headerValue")
            .setValue(x[1]);
        this.selectedMessageKeys[i] = event;
        const selectedMessageKeySet = new Set(this.selectedMessageKeys);
        this.xmlRespDataFiltered = this.xmlRespData.filter((val) => !selectedMessageKeySet.has(val));
    }
    onselectingTag1(event, i) {
        if (this.tempArrayList[i]) {
            this.tempArrayList[i] = event;
        }
        else {
            this.tempArrayList.push(event);
        }
        var result = Object.keys(this.uploadXmlResp1.nodeValueMap).map((key) => [
            key,
            this.uploadXmlResp1.nodeValueMap[key],
        ]);
        var x = result.find((item) => item[0] == event);
        this.tcpForm1
            .get("sysService")["controls"][i].get("headerValue")
            .setValue(x[1]);
        this.selectedMessageKeys1[i] = event;
        const selectedMessageKeySet = new Set(this.selectedMessageKeys1);
        this.xmlRespDataFiltered1 = this.xmlRespData1.filter((val) => !selectedMessageKeySet.has(val));
    }
    uploadFileXmlOut(event) {
        this.selectedFiles = event.target.files;
        this.sizeOfFile = this.selectedFiles.item(0).size;
        this.currentFileUpload = this.selectedFiles.item(0);
        this.fileNameOut = this.currentFileUpload.name;
        this.addSystem.gettingHederofXMl(this.currentFileUpload).subscribe((xmlResp) => {
            if (xmlResp) {
                this.uploadXmlResp = xmlResp;
                this.messageBasisIso = xmlResp.nodeTagList;
            }
        }, (err) => { });
    }
    submitAll() {
        var _a, _b, _c, _d;
        if (this.tcpForm.value.sysService.some((sysService) => sysService["headerTag"] === "OPERATION") &&
            this.tcpForm.value.sysService.some((mdmtSystemService) => mdmtSystemService["headerTag"] === "SERVICE") &&
            this.tcpForm1.value.sysService.some((sysService) => sysService["headerTag"] === "OPERATION") &&
            this.tcpForm1.value.sysService.some((mdmtSystemService) => mdmtSystemService["headerTag"] === "SERVICE")) {
            let obj_test = {};
            obj_test = this.basicInfoForm.value;
            obj_test.sysChannel =
                this.messageConfigurationForm.value.sysChannel.slice(0, 2);
            this.messageConfigurationForm.value.sysChannel[0].messageType = "I";
            this.messageConfigurationForm1.value.sysChannel[0].messageType = "O";
            obj_test.sysChannel.push(this.messageConfigurationForm1.value.sysChannel[0]);
            if (((_b = (_a = this.messageConfigurationForm.value) === null || _a === void 0 ? void 0 : _a.sysChannel[0]) === null || _b === void 0 ? void 0 : _b.messageChannel) !==
                "TCP/IP") {
                obj_test.sysChannel[0].sysService = this.tcpForm.value.sysService;
            }
            else {
                obj_test.sysChannel[0].sysService = this.tcpForm.value.sysService.map((val) => {
                    return Object.assign(Object.assign({}, val), { messageKey: val.messageKey.fieldNo
                            ? val.messageKey.fieldNo
                            : Number(val.messageKey.split(" ")[0]) });
                });
            }
            if (((_d = (_c = this.messageConfigurationForm1.value) === null || _c === void 0 ? void 0 : _c.sysChannel[0]) === null || _d === void 0 ? void 0 : _d.messageChannel) !==
                "TCP/IP") {
                obj_test.sysChannel[1].sysService = this.tcpForm1.value.sysService;
            }
            else {
                obj_test.sysChannel[1].sysService = this.tcpForm1.value.sysService.map((val) => {
                    return Object.assign(Object.assign({}, val), { messageKey: val.messageKey.fieldNo
                            ? val.messageKey.fieldNo
                            : Number(val.messageKey.split(" ")[0]) });
                });
            }
            console.log("obj_test ", obj_test);
            this.addSystem
                .submittingAddSystem(obj_test, this.currentUser)
                .subscribe((addSysResp) => {
                if (addSysResp) {
                    this.saved = "saved";
                    this.submitFlagAll = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "Record is Created", icon: "success" });
                }
            });
        }
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                text: "Header value OPERATION and SERVICE are mandatory !",
                icon: "info",
            });
        }
    }
    delete(index) {
        var _a, _b;
        const deleteRecord = this.tcpForm.get("sysService");
        deleteRecord.removeAt(index);
        const selectedHeaderTags = new Set(deleteRecord.value.map((d) => d.headerTag));
        this.dbConnectionOption.splice(index, 1);
        this.headerArray = this.headerTagData
            .filter((data) => selectedHeaderTags.has(data.headerTag))
            .map((val) => val.headerTag);
        if (((_b = (_a = this.messageConfigurationForm.value) === null || _a === void 0 ? void 0 : _a.sysChannel[0]) === null || _b === void 0 ? void 0 : _b.messageChannel) !==
            "TCP/IP") {
            this.selectedMessageKeys = deleteRecord.value.map((d) => d.messageKey);
            const selectedMessageKeysSet = new Set(this.selectedMessageKeys);
            this.xmlRespDataFiltered = this.xmlRespData.filter((val) => !selectedMessageKeysSet.has(val));
        }
        else {
            this.selectedMessageKeys = deleteRecord.value
                .map((d) => { var _a; return (_a = d.messageKey) === null || _a === void 0 ? void 0 : _a.fieldName; })
                .filter((val) => !!val);
            const selectedMessageKeysSet = new Set(this.selectedMessageKeys);
            this.isoRespDataFiltered = this.isoRespData
                .filter((data) => !selectedMessageKeysSet.has(data.fieldName))
                .map((mKey) => (Object.assign(Object.assign({}, mKey), { formattedmKey: `${(mKey === null || mKey === void 0 ? void 0 : mKey.fieldNo) || ""} ${(mKey === null || mKey === void 0 ? void 0 : mKey.fieldName) || ""}` })));
        }
    }
    delete1(index) {
        var _a, _b;
        const deleteRecord1 = this.tcpForm1.get("sysService");
        deleteRecord1.removeAt(index);
        if (((_b = (_a = this.messageConfigurationForm1.value) === null || _a === void 0 ? void 0 : _a.sysChannel[0]) === null || _b === void 0 ? void 0 : _b.messageChannel) !==
            "TCP/IP") {
            this.selectedMessageKeys1 = deleteRecord1.value.map((d) => d.messageKey);
            const selectedMessageKeysSet = new Set(this.selectedMessageKeys);
            this.xmlRespDataFiltered1 = this.xmlRespData1.filter((val) => !selectedMessageKeysSet.has(val));
        }
        else {
            this.selectedMessageKeys1 = deleteRecord1.value
                .map((d) => { var _a; return (_a = d.messageKey) === null || _a === void 0 ? void 0 : _a.fieldName; })
                .filter((val) => !!val);
            const selectedMessageKeysSet = new Set(this.selectedMessageKeys);
            this.isoRespDataFiltered1 = this.isoRespData1
                .filter((data) => !selectedMessageKeysSet.has(data.fieldName))
                .map((mKey) => (Object.assign(Object.assign({}, mKey), { formattedmKey: `${(mKey === null || mKey === void 0 ? void 0 : mKey.fieldNo) || ""} ${(mKey === null || mKey === void 0 ? void 0 : mKey.fieldName) || ""}` })));
        }
    }
    value(val) {
        console.log(val);
        if (val === "1") {
            this.tab1 = true;
            this.tab2 = false;
            this.tab11 = true;
            this.tab12 = false;
        }
        if (val === "2") {
            this.tab1 = false;
            this.tab2 = true;
            this.tab21 = true;
            this.tab22 = false;
        }
    }
    onselectingFieldName(event, i) {
        if (event === "MIRDate" ||
            event === "ReceiverOutputDate" ||
            event === "CreDt") {
            const dateValue = this.datePipe.transform(new Date(), "yyyy-MM-dd");
            this.tcpForm
                .get("sysService")["controls"][i].get("headerValue")
                .setValue(dateValue);
        }
        if (event === "ReceiverOutputTime" || event === "SenderInputTime") {
            var d = new Date(); // for now
            this.tcpForm
                .get("sysService")["controls"][i].get("headerValue")
                .setValue(d.getHours() + ":" + d.getMinutes());
        }
        if (event === "MessagePriority") {
            this.tcpForm
                .get("sysService")["controls"][i].get("headerValue")
                .setValue("N");
        }
        if (event === "MessageType") {
            this.tcpForm
                .get("sysService")["controls"][i].get("headerValue")
                .setValue("103");
        }
        if (event === "blockType") {
            this.tcpForm
                .get("sysService")["controls"][i].get("headerValue")
                .setValue("O");
        }
        if (event === "MsgDefIdr") {
            this.tcpForm
                .get("sysService")["controls"][i].get("headerValue")
                .setValue("pacs.008.001.07");
        }
        if (event === "PssblDplct") {
            this.tcpForm
                .get("sysService")["controls"][i].get("headerValue")
                .setValue(false);
        }
    }
    onselectingColumnName(event, i) {
        console.log(this.tabelData);
        this.filteredHomes = event.split(",");
        console.log(this.filteredHomes);
        // this.selectedFilterData=filteredHomes;
        // console.log(this.selectedFilterData);
        this.tcpForm
            .get("sysService")["controls"][i].get("dataType")
            .setValue(this.filteredHomes[2]);
        this.tcpForm
            .get("sysService")["controls"][i].get("headerValue")
            .setValue(this.filteredHomes[3]);
        this.jhnbn = this.filteredHomes[1];
        console.log(this.jhnbn);
        // var stringWithoutCommas = this.tcpForm.value.sysService[0].messageKey.replace(/,/g, '');
        // console.log(stringWithoutCommas);
        // for(let j=0 ;j<this.tcpForm.value.sysService.length;j++){
        //     this.tcpForm.value.sysService[j].messageKey=this.filteredHomes[1];
        // }
        // this.tcpForm.value.sysService[0].messageKey =this.filteredHomes[1];
        // this.tcpForm.value.sysService[1].messageKey = this.filteredHomes[1];
        // this.tcpForm.value.sysService[2].messageKey = this.filteredHomes[1];
        // this.tcpForm.value.sysService[3].messageKey = this.filteredHomes[1];
        console.log(this.tcpForm.value);
    }
    onselectingColumnName1(event, i) {
        console.log(this.tabelData1);
        const filteredHomes = event.split(",");
        console.log(filteredHomes);
        this.tcpForm1
            .get("sysService")["controls"][i].get("dataType")
            .setValue(filteredHomes[2]);
        this.tcpForm1
            .get("sysService")["controls"][i].get("headerValue")
            .setValue(filteredHomes[3]);
    }
    onHeaderTagSelect(event, i) {
        this.headerArray[i] = event.target.value;
    }
    onDbConnectionOption(event, i) {
        this.dbConnectionOption[i] = event.target.value.split(",")[1];
    }
    shouldHideOption(value) {
        return this.dbConnectionOption.some((opt) => opt === value[1]);
    }
    changeSelectedFieldNo(evt, index) {
        this.selectedMessageKeys[index] = evt.fieldName;
        const selectedMessageKeySet = new Set(this.selectedMessageKeys);
        this.isoRespDataFiltered = this.isoRespData
            .filter((val) => !selectedMessageKeySet.has(val.fieldName))
            .map((mKey) => (Object.assign(Object.assign({}, mKey), { formattedmKey: `${mKey.fieldNo} ${mKey.fieldName}` })));
    }
    extAddressValidation(event) {
        const regex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        if (regex.test(event.target.value) === false) {
            this.basicInfoForm.get("sourcePort").setValue("");
            this.basicInfoForm.get("sourcePort").clearValidators();
            this.basicInfoForm.get("sourcePort").updateValueAndValidity();
            this.externalPort = false;
        }
        else {
            this.basicInfoForm.get("sourcePort").setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]);
            this.basicInfoForm.get("sourcePort").updateValueAndValidity();
            this.externalPort = true;
        }
    }
    medAddressValidation(event) {
        const regex = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
        if (regex.test(event.target.value) === false) {
            this.basicInfoForm.get("medianPort").setValue("");
            this.basicInfoForm.get("medianPort").clearValidators();
            this.basicInfoForm.get("medianPort").updateValueAndValidity();
            this.medianPort = false;
        }
        else {
            this.basicInfoForm.get("medianPort").setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]);
            this.basicInfoForm.get("medianPort").updateValueAndValidity();
            this.medianPort = true;
        }
    }
    onHeaderSelection(event, i) {
        this.fieldValues[i] = [];
        if (event === "Block 1") {
            this.fieldValues[i] = [
                "ApplicationId",
                "LogicalTerminal",
                "SequenceNumber",
                "ServiceId",
                "sSessionNumber",
            ];
        }
        if (event === "Block 2") {
            this.fieldValues[i] = [
                "MIRDate",
                "MIRLogicalTerminal",
                "MIRSequenceNumber",
                "MIRSessionNumber",
                "ReceiverOutputDate",
                "ReceiverOutputTime",
                "SenderInputTime",
                "MessagePriority",
                "MessageType",
                "blockType",
            ];
        }
        if (event === "Block 3") {
            this.fieldValues[i] = ["113", "108", "119"];
        }
        if (event === "Block 5") {
            this.fieldValues[i] = ["MAC", "CHK"];
        }
        if (event === "AppHdr") {
            this.fieldValues[i] = [
                "Fr>FIId>FinInstnId>BICFI",
                "To>FIId>FinInstnId>BICFI",
                "BizMsgIdr",
                "MsgDefIdr",
                "CreDt",
                "PssblDplct",
            ];
        }
    }
}
AddSystemComponent.ɵfac = function AddSystemComponent_Factory(t) { return new (t || AddSystemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_2__.AddSystemService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe)); };
AddSystemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AddSystemComponent, selectors: [["npr-add-system"]], viewQuery: function AddSystemComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.fileUploadWrapper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.fileUploadWrapper1 = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵProvidersFeature"]([_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe])], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "pageContentMain", 4, "ngIf"], [1, "indicator-progress"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"], [1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["action", "", "class", "formStyle", 3, "formGroup", 4, "ngIf"], ["action", "", "class", "formStyle", 4, "ngIf"], ["fxLayout", "row wrap", "class", "file", 4, "ngIf"], ["class", "formStyle dbCardStyle", 3, "formGroup", 4, "ngIf"], ["class", "row g-3 pb-3 pt-4 justify-content-end", 4, "ngIf"], ["class", "dbCardStyle", 4, "ngIf"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "dbCardStyle"], [1, "titleStyle", "mt-2", "mb-4"], [3, "disabled"], [1, "row", "gy-4"], [1, "col-lg-3"], ["for", "codeLbl", 1, "formLbl"], [1, "colorRed"], ["id", "codeLbl", "type", "text", "placeholder", "code", "formControlName", "systemCode", "value", "", 1, "form-control", 3, "readonly", "keydown.space"], ["for", "name", 1, "formLbl"], ["id", "name", "type", "text", "placeholder", "name", "formControlName", "systemName", "value", "", 1, "form-control", 3, "readonly", "keydown.space"], ["formControlName", "serviceType", "aria-label", "Default select example", 1, "form-select"], ["hidden", "", "value", "", "disabled", "", "selected", ""], ["value", "client"], ["value", "server"], ["formControlName", "messsageType", "aria-label", "Default select example", "placeholder", "Please Select", 1, "form-select"], ["value", "A"], ["value", "I"], ["value", "O"], [1, "row", "gy-4", "mt-2"], ["for", "externalIp", 1, "formLbl"], ["id", "externalIp", "formControlName", "sourceIp", "placeholder", "external IP/Domain", "type", "text", "value", "", 1, "form-control", 3, "readonly", "keyup"], ["for", "externalPort", 1, "formLbl"], ["class", "colorRed", 4, "ngIf"], ["id", "externalPort", "placeholder", "external port", "type", "number", "formControlName", "sourcePort", "type", "text", "value", "", 1, "form-control", 3, "readonly"], ["for", "medianIp", 1, "formLbl"], ["id", "medianIp", "formControlName", "medianIp", "type", "text", "placeholder", "median Ip/Domain", "value", "", 1, "form-control", 3, "readonly", "keyup"], ["for", "medianPort", 1, "formLbl"], ["id", "medianPort", "placeholder", "median Port", "type", "number", "formControlName", "medianPort", "type", "text", "value", "", 1, "form-control", 3, "readonly"], ["class", "dbCardStyle", "formArrayName", "sysChannel", 4, "ngFor", "ngForOf"], ["formArrayName", "sysChannel", 1, "dbCardStyle"], [1, "row", "gy-4", 3, "formGroupName"], [1, "col-lg-4"], ["formControlName", "messageChannel", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["value", "MT"], ["value", "MX"], ["class", "col-lg-4", 4, "ngIf"], ["formControlName", "messageFormat", "aria-label", "Default select example", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["formControlName", "queueType", "aria-label", "Default select example", 1, "form-select"], ["id", "queueManager", "type", "text", "formControlName", "queueManager", "placeholder", "Queue manager", "value", "", 1, "form-control"], ["id", "queueName", "type", "text", "formControlName", "queueName", "placeholder", "Queue Name", "value", "", 1, "form-control"], ["id", "connectFactory", "type", "text", "formControlName", "queueConnFactory", "placeholder", "Connectiong Factory", "value", "", 1, "form-control"], ["id", "queChannel", "type", "text", "formControlName", "queueChannel", "placeholder", "Queue Channel", "value", "", 1, "form-control"], ["id", "userName", "type", "text", "formControlName", "dbUsername", "placeholder", "User Name", "value", "", 1, "form-control"], ["id", "password", "type", "password", "formControlName", "dbPassword", "placeholder", "Password", "value", "", 1, "form-control"], ["id", "databaseName", "type", "text", "formControlName", "dbServiceName", "placeholder", "Database Name", "value", "", 1, "form-control"], ["id", "connectString", "type", "text", "formControlName", "dbConnectString", "placeholder", "Connecting String", "value", "", 1, "form-control"], [1, "row", "g-3", "pb-3", "pt-4", "justify-content-end"], [1, "col-auto"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnDarkGrey", 3, "click"], ["type", "button", "href", "javascript:void(0);", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["action", "", 1, "formStyle"], ["type", "text", "value", "", 1, "form-control"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary"], ["fxLayout", "row wrap", 1, "file"], ["aria-label", "Default select example", 1, "form-select", 3, "change"], ["fxFlex", "100", 1, "width"], [1, "formStyle", "dbCardStyle", 3, "formGroup"], ["style", "width: 100%; margin-bottom: 20px", 4, "ngIf"], [1, "col-lg-2"], ["formArrayName", "sysService", 4, "ngFor", "ngForOf"], ["class", "row g-3 pt-4", 4, "ngIf"], [2, "width", "100%", "margin-bottom", "20px"], [1, "fileUpload"], [1, "formS"], ["data-text", "File Upload", 1, "file-upload-wrapper"], ["fileWrapper", ""], ["name", "file-upload-field", "type", "file", 1, "file-upload-field", 3, "change"], ["formArrayName", "sysService"], [1, "row", "gy-4", 2, "margin-bottom", "20px", 3, "formGroupName"], ["formControlName", "headerTag", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["aria-label", "Default select example", "bindLabel", "formattedmKey", "formControlName", "messageKey", "placeholder", "Select city", 3, "items", "readonly", "disabled", "change", 4, "ngIf"], ["aria-label", "Default select example", "bindLabel", "messageKey", "formControlName", "messageKey", 3, "items", "readonly", "change", 4, "ngIf"], ["class", "form-select", "formControlName", "messageKey", "aria-label", "Default select example", 3, "change", 4, "ngIf"], ["id", "externalIp", "formControlName", "messageKey", "type", "text", "class", "form-control", "value", "", "readonly", "", 4, "ngIf"], ["id", "externalIp", "formControlName", "messageKey", "type", "text", "class", "form-control", "value", "", 4, "ngIf"], ["id", "outlineNgSelect", "formControlName", "dataType", "aria-label", "Default select example", 3, "readonly", 4, "ngIf"], ["class", "form-select", "formControlName", "dataType", "aria-label", "Default select example", 3, "name", 4, "ngIf"], ["id", "externalIp", "formControlName", "dataType", "type", "text", "class", "form-control", "readonly", "", "value", "", 4, "ngIf"], ["id", "externalIp", "formControlName", "headerValue", "type", "text", "value", "", 1, "form-control"], ["formControlName", "encryption", "aria-label", "Default select example", 1, "form-select"], ["value", "No Encryption"], ["value", "BASE64"], ["value", "SHA256"], ["value", "SHA512"], ["class", "col-lg-2", 4, "ngIf"], ["aria-label", "Default select example", "bindLabel", "formattedmKey", "formControlName", "messageKey", "placeholder", "Select city", 3, "items", "readonly", "disabled", "change"], ["aria-label", "Default select example", "bindLabel", "messageKey", "formControlName", "messageKey", 3, "items", "readonly", "change"], ["formControlName", "messageKey", "aria-label", "Default select example", 1, "form-select", 3, "change"], [3, "hidden", "value", 4, "ngFor", "ngForOf"], [3, "hidden", "value"], ["id", "externalIp", "formControlName", "messageKey", "type", "text", "value", "", "readonly", "", 1, "form-control"], ["id", "externalIp", "formControlName", "messageKey", "type", "text", "value", "", 1, "form-control"], ["id", "outlineNgSelect", "formControlName", "dataType", "aria-label", "Default select example", 3, "readonly"], ["formControlName", "dataType", "aria-label", "Default select example", 1, "form-select", 3, "name"], ["value", "numeric"], ["value", "alphaNumeric"], ["value", "date"], ["id", "externalIp", "formControlName", "dataType", "type", "text", "readonly", "", "value", "", 1, "form-control"], ["type", "button", "href", "javascript:void(0);", "class", "deleteIcon2", 3, "click", 4, "ngIf"], ["type", "button", "href", "javascript:void(0);", 1, "deleteIcon2", 3, "click"], ["src", "assets/images/delete-icon.svg", "alt", "..."], [1, "row", "g-3", "pt-4"], [1, "col-auto", 3, "click"], ["class", "addIcon primarybg", 4, "ngIf"], [1, "addIcon", "primarybg"], ["src", "assets/images/plus-icon.svg", "alt", "..."], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnDarkGrey", 3, "disabled", "click"], [1, "tabStyleCol", 2, "margin-top", "30px"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["class", "nav-item", "role", "presentation", 4, "ngIf"], ["id", "myTabContent", 1, "tab-content"], ["class", "tab-pane fade show active", "id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 4, "ngIf"], ["class", "tab-pane fade show active", "id", "profile", "role", "tabpanel", "aria-labelledby", "profile-tab", 4, "ngIf"], ["role", "presentation", 1, "nav-item"], ["type", "button", "id", "home-tab", "data-bs-toggle", "tab", "data-bs-target", "#home", "type", "button", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", "active", 3, "click"], ["type", "button", "id", "home-tab", "data-bs-toggle", "tab", "data-bs-target", "#home", "type", "button", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", 3, "click"], ["type", "button", "id", "profile-tab", "data-bs-toggle", "tab", "data-bs-target", "#profile", "type", "button", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link", 3, "click"], ["type", "button", "id", "profile-tab", "data-bs-toggle", "tab", "data-bs-target", "#profile", "type", "button", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link", "active", 3, "click"], ["id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "active"], ["style", "width: 60%", 4, "ngIf"], ["action", "", "class", "formStyle dbCardStyle", "style", "margin-bottom: 20px", 3, "formGroup", 4, "ngIf"], [2, "width", "60%"], ["fxFlex", "60"], ["type", "button", "type", "button", 1, "btnFile", 3, "click"], ["formControlName", "messageChannel", "aria-label", "Default select example", "required", "", 1, "form-select", 3, "change"], ["formControlName", "messageFormat", "aria-label", "Default select example", "required", "", 1, "form-select"], ["id", "databaseName", "formControlName", "dbServiceName", "type", "text", "placeholder", "Database Name", "value", "", 1, "form-control"], ["id", "connectString", "formControlName", "dbConnectString", "type", "text", "placeholder", "Connecting String", "value", "", 1, "form-control"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["action", "", 1, "formStyle", "dbCardStyle", 2, "margin-bottom", "20px", 3, "formGroup"], ["class", "titleStyle mt-2 mb-4", 4, "ngIf"], [1, "row", "gy-4", 2, "margin-bottom", "30px", 3, "formGroupName"], ["formControlName", "headerTag", "aria-label", "Default select example", 1, "form-select"], ["aria-label", "Default select example", "bindLabel", "formattedmKey", "formControlName", "messageKey", 3, "items", "disabled", "change", 4, "ngIf"], ["aria-label", "Default select example", "bindLabel", "messageKey", "formControlName", "messageKey", 3, "items", "change", 4, "ngIf"], ["class", "form-select", "formControlName", "dataType", "aria-label", "Default select example", 4, "ngIf"], ["aria-label", "Default select example", "bindLabel", "formattedmKey", "formControlName", "messageKey", 3, "items", "disabled", "change"], ["aria-label", "Default select example", "bindLabel", "messageKey", "formControlName", "messageKey", 3, "items", "change"], ["formControlName", "dataType", "aria-label", "Default select example", 1, "form-select"], ["type", "button", 1, "deleteIcon2", 3, "click"], ["id", "profile", "role", "tabpanel", "aria-labelledby", "profile-tab", 1, "tab-pane", "fade", "show", "active"], ["fileWrapper1", ""], ["name", "file-upload-field", "type", "file", "value", "", 1, "file-upload-field", 3, "change"], ["type", "button", "mat-raised-button", "", "type", "button", 1, "btnFile", 3, "click"], ["value", "TCP/IP"], ["value", "Https/Http"], ["value", "MDB"], ["value", "EJB"], ["value", "DB Connection"], ["aria-label", "Default select example", "bindLabel", "formattedmKey", "formControlName", "messageKey", "placeholder", "Select city", 3, "items", "disabled", "change", 4, "ngIf"], ["aria-label", "Default select example", "bindLabel", "formattedmKey", "formControlName", "messageKey", "placeholder", "Select city", 3, "items", "disabled", "change"], ["type", "button", "class", "deleteIcon2", 3, "click", 4, "ngIf"], ["class", "col-auto", 4, "ngIf"], ["type", "button", "color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], [1, "fa", "fa-edit", "faClass"], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["aria-hidden", "true", 1, "fa", "fa-files-o", "faRecordStatus"], [1, "csCardStyleIcon", "csCardStyleIconBg4"], [1, "fa", "fa-check-square-o", "faClassChecker"], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], [1, "fa", "fa-shield", "faClassFirstTimeAuth"], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/authorize.svg", "alt", "...", 1, "modImage"], ["src", "assets/images/modification.svg", "alt", "...", 1, "modImage"]], template: function AddSystemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AddSystemComponent_ng_container_0_Template, 4, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AddSystemComponent_div_1_Template, 13, 9, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupName, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgOptionComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe], styles: [".fileUpload[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zeXN0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJhZGQtc3lzdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGVVcGxvYWR7XHJcbiAgICB3aWR0aDo1MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 18396:
/*!*****************************************************************!*\
  !*** ./src/app/views/addSystem/add-system/add-system.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSystemModule": function() { return /* binding */ AddSystemModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-datatables */ 50481);
/* harmony import */ var _add_system_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-system-routing.module */ 34865);
/* harmony import */ var _add_system_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-system.component */ 88154);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/components.module */ 15626);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _add_system_summary_add_system_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-system-summary/add-system-summary.component */ 86312);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 55314);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 88660);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);










class AddSystemModule {
}
AddSystemModule.ɵfac = function AddSystemModule_Factory(t) { return new (t || AddSystemModule)(); };
AddSystemModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AddSystemModule });
AddSystemModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTablesModule,
            _add_system_routing_module__WEBPACK_IMPORTED_MODULE_1__.AddSystemRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AddSystemModule, { declarations: [_add_system_component__WEBPACK_IMPORTED_MODULE_2__.AddSystemComponent, _add_system_summary_add_system_summary_component__WEBPACK_IMPORTED_MODULE_4__.AddSystemSummaryComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTablesModule,
        _add_system_routing_module__WEBPACK_IMPORTED_MODULE_1__.AddSystemRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_views_addSystem_add-system_add-system_module_ts-es2015.js.map