"use strict";
(self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_addSystem_add-System_add-System_module_ts"],{

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
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
        // Post
        this.Index = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            index: '',
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
        return this.http.get(`${API_URL}/db/ping/${url}/${driverClassName}/${username}/${password}`);
    }
    // db connection -->column name
    coulmnNameBasedonTableName(url, driverClassName, username, password, tablename) {
        return this.http.get(`${API_URL}/db/ping/${url}/${driverClassName}/${username}/${password}/${tablename}`);
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
    conversionApi(data) {
        //     const httpOptions = {
        //       headers: new HttpHeaders({
        //         'Content-Type':  'application/xml',
        //         'Accept':  'application/xml',
        //         'Response-Type':'text'
        //       }),
        //     };
        //     var payload=	`<Cust-Account-IO>
        // 		<ACC>5211388001</ACC>
        // 		<BRN>009</BRN>
        // 	</Cust-Account-IO>
        // </FCUBS_BODY>
        // <xmlns>http://fcubs.ofss.com/service/FCUBSAccService</xmlns>
        // <destination_ip>123.32.23.36</destination_ip>
        // <outgoing_msg>xml</outgoing_msg>
        // <destination_port>4353</destination_port>
        // <source_port>4342</source_port>
        // <incoming_msg>json</incoming_msg>
        // <FCUBS_HEADER>
        // 	<BRANCH>009</BRANCH>
        // 	<SOURCE_OPERATION>QueryCustAcc</SOURCE_OPERATION>
        // 	<CORRELID>RMDE73275143</CORRELID>
        // 	<PASSWORD>+sysgQGeOcA=</PASSWORD>
        // 	<OPERATION>QueryCustAcc</OPERATION>
        // 	<MODULEID>ST</MODULEID>
        // 	<UBSCOMP>FCUBS</UBSCOMP>
        // 	<SOURCE>XMLMEDACCLOSE</SOURCE>
        // 	<USERID>XMLMEDIANUSR</USERID>
        // 	<FUNCTIONID>STQCUSAC</FUNCTIONID>
        // 	<SERVICE>FCUBSAccService</SERVICE>
        // 	<MSGID>RMDE73275143</MSGID>
        // </FCUBS_HEADER>
        // <source_ip>123.32.23.34</source_ip>`
        return this.http.post(`${API_URL}/message/readMessage`, data);
    }
    fetchTableName(addSystem) {
        return this.http.post(`${API_URL}/newExtApi/validate/addSystem`, addSystem);
    }
}
AddSystemService.??fac = function AddSystemService_Factory(t) { return new (t || AddSystemService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
AddSystemService.??prov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjectable"]({ token: AddSystemService, factory: AddSystemService.??fac, providedIn: 'root' });


/***/ }),

/***/ 21067:
/*!*****************************************************************!*\
  !*** ./src/app/views/addSystem/add-System/add-System.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSystemModule": function() { return /* binding */ AddSystemModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! angular-datatables */ 50481);
/* harmony import */ var _add_system_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-system-routing.module */ 23340);
/* harmony import */ var _add_system_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-system.component */ 16496);
/* harmony import */ var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/components.module */ 15626);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _add_system_summary_add_system_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../add-system-summary/add-system-summary.component */ 86312);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-spinner */ 55314);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ 88660);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);










class AddSystemModule {
}
AddSystemModule.??fac = function AddSystemModule_Factory(t) { return new (t || AddSystemModule)(); };
AddSystemModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineNgModule"]({ type: AddSystemModule });
AddSystemModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTablesModule,
            _add_system_routing_module__WEBPACK_IMPORTED_MODULE_1__.AddSystemRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
            ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["????setNgModuleScope"](AddSystemModule, { declarations: [_add_system_component__WEBPACK_IMPORTED_MODULE_2__.AddSystemComponent, _add_system_summary_add_system_summary_component__WEBPACK_IMPORTED_MODULE_4__.AddSystemSummaryComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTablesModule,
        _add_system_routing_module__WEBPACK_IMPORTED_MODULE_1__.AddSystemRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule,
        ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule] }); })();


/***/ }),

/***/ 23340:
/*!*************************************************************************!*\
  !*** ./src/app/views/addSystem/add-System/add-system-routing.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSystemRoutingModule": function() { return /* binding */ AddSystemRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/guards/can-deactivate.guard */ 50215);
/* harmony import */ var _add_system_summary_add_system_summary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../add-system-summary/add-system-summary.component */ 86312);
/* harmony import */ var _add_system_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-system.component */ 16496);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);






const routes = [
    {
        path: '',
        component: _add_system_component__WEBPACK_IMPORTED_MODULE_2__.AddSystemComponent,
        canDeactivate: [src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__.CanDeactivateGuard]
    },
    {
        path: 'summary',
        component: _add_system_summary_add_system_summary_component__WEBPACK_IMPORTED_MODULE_1__.AddSystemSummaryComponent
    }
];
class AddSystemRoutingModule {
}
AddSystemRoutingModule.??fac = function AddSystemRoutingModule_Factory(t) { return new (t || AddSystemRoutingModule)(); };
AddSystemRoutingModule.??mod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({ type: AddSystemRoutingModule });
AddSystemRoutingModule.??inj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](AddSystemRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 16496:
/*!********************************************************************!*\
  !*** ./src/app/views/addSystem/add-System/add-system.component.ts ***!
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/add-system.service */ 91973);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/role.service */ 77382);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 31443);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 55314);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-select/ng-select */ 88660);













const _c0 = ["fileWrapper"];
const _c1 = ["fileWrapper1"];
function AddSystemComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Please wait... ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();
} }
function AddSystemComponent_div_1_form_4_div_52_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " IP Address is not valid");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_4_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](1, AddSystemComponent_div_1_form_4_div_52_div_1_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r11.basicInfoForm.get("sourceIp").errors.pattern);
} }
function AddSystemComponent_div_1_form_4_div_59_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " External Port must be at least 2 numbers.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_4_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](1, AddSystemComponent_div_1_form_4_div_59_div_1_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r12.basicInfoForm.get("sourcePort").hasError("minlength"));
} }
function AddSystemComponent_div_1_form_4_div_73_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " IP Address is not valid");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_4_div_73_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](1, AddSystemComponent_div_1_form_4_div_73_div_1_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r13.basicInfoForm.get("medianIp").errors.pattern);
} }
function AddSystemComponent_div_1_form_4_div_80_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Median Port must be at least 2 numbers.");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_4_div_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](1, AddSystemComponent_div_1_form_4_div_80_div_1_Template, 2, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r14.basicInfoForm.get("medianPort").hasError("minlength"));
} }
function AddSystemComponent_div_1_form_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](4, "System Information");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "fieldset", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](9, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](11, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](12, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](13, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](14, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](15, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](17, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](18, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](19, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](20, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](21, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](22, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](23, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](24, "select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](25, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](26, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](27, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](28, "client");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](29, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](30, "server");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](31, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](32, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](33, "Messages Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](34, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](35, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](36, "select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](37, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](38, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](39, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](40, "All");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](41, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](42, "Incoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](43, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](44, "Outgoing");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](45, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](46, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](47, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](48, "External IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](49, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](50, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](51, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](52, AddSystemComponent_div_1_form_4_div_52_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](53, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](54, "label", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](55, "External Port");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](56, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](57, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](58, "input", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](59, AddSystemComponent_div_1_form_4_div_59_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](60, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](61, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](62, "External URI");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](63, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](64, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](65, "input", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](66, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](67, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](68, "label", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](69, "Median IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](70, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](71, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](72, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](73, AddSystemComponent_div_1_form_4_div_73_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](74, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](75, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](76, "Median Port");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](77, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](78, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](79, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](80, AddSystemComponent_div_1_form_4_div_80_Template, 2, 1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](81, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](82, "label", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](83, "Median URI");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](84, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](85, "*");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](86, "input", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroup", ctx_r2.basicInfoForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", !ctx_r2.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("readonly", !ctx_r2.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("readonly", !ctx_r2.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("readonly", !ctx_r2.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r2.basicInfoForm.get("sourceIp").touched && !ctx_r2.basicInfoForm.get("sourceIp").valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("readonly", !ctx_r2.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r2.basicInfoForm.get("sourcePort").touched && !ctx_r2.basicInfoForm.get("sourcePort").valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("readonly", !ctx_r2.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("readonly", !ctx_r2.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r2.basicInfoForm.get("medianIp").touched && !ctx_r2.basicInfoForm.get("medianIp").valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("readonly", !ctx_r2.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r2.basicInfoForm.get("medianPort").touched && !ctx_r2.basicInfoForm.get("medianPort").valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("readonly", !ctx_r2.editFlag);
} }
function AddSystemComponent_div_1_form_5_div_1_div_22_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const i_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("value", i_r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](i_r34);
} }
function AddSystemComponent_div_1_form_5_div_1_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Data Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "select", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](5, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](6, AddSystemComponent_div_1_form_5_div_1_div_22_option_6_Template, 2, 2, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx_r22.dataType);
} }
function AddSystemComponent_div_1_form_5_div_1_div_23_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const i_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("value", i_r36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](i_r36);
} }
function AddSystemComponent_div_1_form_5_div_1_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Type of Queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "select", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](4, AddSystemComponent_div_1_form_5_div_1_div_23_option_4_Template, 2, 2, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx_r23.queArray);
} }
function AddSystemComponent_div_1_form_5_div_1_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Queue Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_5_div_1_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Queue Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_5_div_1_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Connection Factory");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_5_div_1_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Connection Channel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_5_div_1_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "User Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_5_div_1_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_5_div_1_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Database");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_5_div_1_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Connecting String");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
const _c2 = function () { return ["/addSystem/summary"]; };
function AddSystemComponent_div_1_form_5_div_1_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemComponent_div_1_form_5_div_1_div_32_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](4); return ctx_r37.next("messageConfiguration"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](3, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemComponent_div_1_form_5_div_1_div_32_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](4); return ctx_r39.previous("messageConfiguration"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](6, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](9, "Exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction0"](1, _c2));
} }
function AddSystemComponent_div_1_form_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "fieldset", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](9, "select", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("change", function AddSystemComponent_div_1_form_5_div_1_Template_select_change_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3); return ctx_r40.onProtocalSlection($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](11, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](12, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](13, "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](14, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](15, "HTTPS/HTTP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](17, "MDB");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](18, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](19, "EJB");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](20, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](21, "DB Connection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](22, AddSystemComponent_div_1_form_5_div_1_div_22_Template, 7, 1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](23, AddSystemComponent_div_1_form_5_div_1_div_23_Template, 5, 1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](24, AddSystemComponent_div_1_form_5_div_1_div_24_Template, 4, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](25, AddSystemComponent_div_1_form_5_div_1_div_25_Template, 4, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](26, AddSystemComponent_div_1_form_5_div_1_div_26_Template, 4, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](27, AddSystemComponent_div_1_form_5_div_1_div_27_Template, 4, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](28, AddSystemComponent_div_1_form_5_div_1_div_28_Template, 4, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](29, AddSystemComponent_div_1_form_5_div_1_div_29_Template, 4, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](30, AddSystemComponent_div_1_form_5_div_1_div_30_Template, 4, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](31, AddSystemComponent_div_1_form_5_div_1_div_31_Template, 4, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](32, AddSystemComponent_div_1_form_5_div_1_div_32_Template, 10, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const i_r21 = ctx.index;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", !ctx_r19.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"]("", ctx_r19.messageType, " Message Configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroupName", i_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"]("", ctx_r19.messageType, " MessageProtocol");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r19.messageConfigurationForm.value.sysChannel[0].messageChannel !== "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r19.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r19.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r19.messageConfigurationForm.value.sysChannel[0].queueType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r19.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r19.messageConfigurationForm.value.sysChannel[0].queueType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r19.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r19.messageConfigurationForm.value.sysChannel[0].queueType === "IBM");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r19.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r19.messageConfigurationForm.value.sysChannel[0].queueType === "JMS");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r19.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r19.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r19.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r19.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r19.editFlag);
} }
function AddSystemComponent_div_1_form_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](1, AddSystemComponent_div_1_form_5_div_1_Template, 33, 15, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroup", ctx_r3.messageConfigurationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx_r3.messageConfigurationForm.get("sysChannel")["controls"]);
} }
function AddSystemComponent_div_1_div_6_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "button", 75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](3, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemComponent_div_1_div_6_div_5_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3); return ctx_r43.previous("incomingMessageConfiguration"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](6, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](3, "Folder Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](4, "input", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](5, AddSystemComponent_div_1_div_6_div_5_Template, 7, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r4.editFlag);
} }
function AddSystemComponent_div_1_div_7_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const i_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("value", i_r46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](i_r46);
} }
function AddSystemComponent_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r48 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Table");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "select", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("change", function AddSystemComponent_div_1_div_7_Template_select_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r48); const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2); return ctx_r47.onTableSlection($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](5, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](6, AddSystemComponent_div_1_div_7_option_6_Template, 2, 2, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx_r5.table);
} }
function AddSystemComponent_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](4, "Header and Service Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "div", 87, 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("change", function AddSystemComponent_div_1_form_9_div_1_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r55); const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3); return ctx_r54.uploadFileXml($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_9_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](3, "Header and Service Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_9_div_20_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const header_r69 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("value", header_r69.headerTag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", header_r69.headerTag, " ");
} }
function AddSystemComponent_div_1_form_9_div_20_ng_select_6_Template(rf, ctx) { if (rf & 1) {
    const _r72 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "ng-select", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("change", function AddSystemComponent_div_1_form_9_div_20_ng_select_6_Template_ng_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r72); const i_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]().index; const ctx_r70 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3); return ctx_r70.changeSelectedFieldNo($event, i_r57); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("items", ctx_r59.isoRespDataFiltered)("disabled", !ctx_r59.editFlag);
} }
function AddSystemComponent_div_1_form_9_div_20_ng_select_7_Template(rf, ctx) { if (rf & 1) {
    const _r75 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "ng-select", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("change", function AddSystemComponent_div_1_form_9_div_20_ng_select_7_Template_ng_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r75); const i_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]().index; const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3); return ctx_r73.onselectingTag($event, i_r57); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("items", ctx_r60.xmlRespDataFiltered);
} }
function AddSystemComponent_div_1_form_9_div_20_select_8_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const mkey_r77 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("value", mkey_r77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", mkey_r77[1], " ");
} }
function AddSystemComponent_div_1_form_9_div_20_select_8_Template(rf, ctx) { if (rf & 1) {
    const _r80 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "select", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("change", function AddSystemComponent_div_1_form_9_div_20_select_8_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r80); const i_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]().index; const ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3); return ctx_r78.onselectingColumnName($event.target.value, i_r57); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Please Select Tag");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](3, AddSystemComponent_div_1_form_9_div_20_select_8_option_3_Template, 2, 2, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx_r61.tabelData);
} }
function AddSystemComponent_div_1_form_9_div_20_input_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "input", 111);
} }
function AddSystemComponent_div_1_form_9_div_20_input_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "input", 111);
} }
function AddSystemComponent_div_1_form_9_div_20_input_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "input", 112);
} }
function AddSystemComponent_div_1_form_9_div_20_ng_select_13_ng_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "ng-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const type_r82 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("value", type_r82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](type_r82);
} }
function AddSystemComponent_div_1_form_9_div_20_ng_select_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "ng-select", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "ng-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Please Select Data Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](3, AddSystemComponent_div_1_form_9_div_20_ng_select_13_ng_option_3_Template, 2, 2, "ng-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("readonly", !ctx_r65.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx_r65.typeDataIso);
} }
function AddSystemComponent_div_1_form_9_div_20_select_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "select", 114);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "option", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, " Numeric ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "option", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](4, " Alpha Numeric ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "option", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](6, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const i_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]().index;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate1"]("name", "dataType_", i_r57, "");
} }
function AddSystemComponent_div_1_form_9_div_20_input_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "input", 118);
} }
function AddSystemComponent_div_1_form_9_div_20_div_28_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "a", 120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemComponent_div_1_form_9_div_20_div_28_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r87); const i_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2).index; const ctx_r85 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3); return ctx_r85.delete(i_r57); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](1, "img", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_9_div_20_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](3, AddSystemComponent_div_1_form_9_div_20_div_28_a_3_Template, 2, 0, "a", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r68.submitFlag);
} }
function AddSystemComponent_div_1_form_9_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "select", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](4, AddSystemComponent_div_1_form_9_div_20_option_4_Template, 2, 2, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](6, AddSystemComponent_div_1_form_9_div_20_ng_select_6_Template, 1, 2, "ng-select", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](7, AddSystemComponent_div_1_form_9_div_20_ng_select_7_Template, 1, 1, "ng-select", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](8, AddSystemComponent_div_1_form_9_div_20_select_8_Template, 4, 1, "select", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](9, AddSystemComponent_div_1_form_9_div_20_input_9_Template, 1, 0, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](10, AddSystemComponent_div_1_form_9_div_20_input_10_Template, 1, 0, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](11, AddSystemComponent_div_1_form_9_div_20_input_11_Template, 1, 0, "input", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](12, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](13, AddSystemComponent_div_1_form_9_div_20_ng_select_13_Template, 4, 2, "ng-select", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](14, AddSystemComponent_div_1_form_9_div_20_select_14_Template, 7, 1, "select", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](15, AddSystemComponent_div_1_form_9_div_20_input_15_Template, 1, 0, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](17, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](18, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](19, "select", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](20, "option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](21, "No Encryption");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](22, "option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](23, " BASE 64 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](24, "option", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](25, " SHA 256 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](26, "option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](27, " SHA 512 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](28, AddSystemComponent_div_1_form_9_div_20_div_28_Template, 4, 1, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const i_r57 = ctx.index;
    const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroupName", i_r57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx_r51.headerTagData);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r51.messageConfigurationForm.value.sysChannel[0].messageChannel === "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r51.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML" && !ctx_r51.fileUploadClick);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r51.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection" && ctx_r51.tableDropDownClick);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r51.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection" && !ctx_r51.tableDropDownClick);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r51.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML" && ctx_r51.fileUploadClick);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r51.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r51.messageConfigurationForm.value.sysChannel[0].messageChannel === "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r51.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML" || ctx_r51.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r51.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r51.editFlag);
} }
function AddSystemComponent_div_1_form_9_div_21_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "a", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](2, "img", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_9_div_21_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "button", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemComponent_div_1_form_9_div_21_div_3_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r91); const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](4); return ctx_r90.next("incomingMessageConfiguration"); })("click", function AddSystemComponent_div_1_form_9_div_21_div_3_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r91); const ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](4); return ctx_r92.submit2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](3, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemComponent_div_1_form_9_div_21_div_3_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r91); const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](4); return ctx_r93.previous("incomingMessageConfiguration"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](6, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](9, "Exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", !ctx_r89.submitFlag || !ctx_r89.tcpForm.dirty || !ctx_r89.tcpForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", !ctx_r89.submitFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction0"](3, _c2));
} }
function AddSystemComponent_div_1_form_9_div_21_Template(rf, ctx) { if (rf & 1) {
    const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemComponent_div_1_form_9_div_21_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r95); const ctx_r94 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3); return ctx_r94.addBioDocs(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](2, AddSystemComponent_div_1_form_9_div_21_a_2_Template, 3, 0, "a", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](3, AddSystemComponent_div_1_form_9_div_21_div_3_Template, 10, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r52.submitFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r52.editFlag);
} }
function AddSystemComponent_div_1_form_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "form", 79);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](1, AddSystemComponent_div_1_form_9_div_1_Template, 6, 0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "fieldset", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](3, AddSystemComponent_div_1_form_9_div_3_Template, 4, 0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](7, "Header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](9, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](11, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](12, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](13, "Data Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](14, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](15, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](16, "Default Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](17, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](18, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](19, "Encryption Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](20, AddSystemComponent_div_1_form_9_div_20_Template, 29, 12, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](21, AddSystemComponent_div_1_form_9_div_21_Template, 4, 2, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroup", ctx_r7.tcpForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r7.messageConfigurationForm.value.sysChannel[0].messageFormat == "XML");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", !ctx_r7.submitFlag || !ctx_r7.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r7.messageConfigurationForm.value.sysChannel[0].messageFormat !== "XML");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r7.label2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx_r7.tcpForm.get("sysService")["controls"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r7.editFlag);
} }
function AddSystemComponent_div_1_form_10_li_3_Template(rf, ctx) { if (rf & 1) {
    const _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "li", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "button", 136);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemComponent_div_1_form_10_li_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r103); const ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3); return ctx_r102.value("1"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Incoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_10_li_4_Template(rf, ctx) { if (rf & 1) {
    const _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "li", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "button", 137);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemComponent_div_1_form_10_li_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r105); const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3); return ctx_r104.value("1"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Incoming");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_10_li_5_Template(rf, ctx) { if (rf & 1) {
    const _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "li", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "button", 138);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemComponent_div_1_form_10_li_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r107); const ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3); return ctx_r106.value("2"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Outgoing");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_10_li_6_Template(rf, ctx) { if (rf & 1) {
    const _r109 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "li", 135);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "button", 139);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemComponent_div_1_form_10_li_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r109); const ctx_r108 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3); return ctx_r108.value("2"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Outgoing");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r116 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "div", 87, 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "input", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("change", function AddSystemComponent_div_1_form_10_div_9_div_1_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r116); const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](4); return ctx_r115.uploadFileXml($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "button", 145);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemComponent_div_1_form_10_div_9_div_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r116); const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](4); return ctx_r117.chooseFile(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_22_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const i_r133 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("value", i_r133);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](i_r133);
} }
function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Data Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "select", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](5, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](6, AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_22_option_6_Template, 2, 2, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx_r121.dataType);
} }
function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_23_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const i_r135 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("value", i_r135);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](i_r135);
} }
function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Type of Queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "select", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](4, AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_23_option_4_Template, 2, 2, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r122 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx_r122.queArray);
} }
function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Queue Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Queue Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Connection Factory");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Connection Channel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "User Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Database");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "input", 146);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Connecting String");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "input", 147);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_32_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r137); const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](6); return ctx_r136.next1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](3, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_32_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r137); const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](6); return ctx_r138.previousAll("1"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](6, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "button", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](9, "Exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction0"](1, _c2));
} }
function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r140 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](3, "Incoming Message Configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "fieldset", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](8, "Incoming Message Protocol");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](9, "select", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("change", function AddSystemComponent_div_1_form_10_div_9_form_2_div_1_Template_select_change_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r140); const ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](5); return ctx_r139.onProtocalSlection($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](11, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](12, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](13, "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](14, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](15, "HTTPS/HTTP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](17, "MDB");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](18, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](19, "EJB");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](20, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](21, "DB Connection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](22, AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_22_Template, 7, 1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](23, AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_23_Template, 5, 1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](24, AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_24_Template, 4, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](25, AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_25_Template, 4, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](26, AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_26_Template, 4, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](27, AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_27_Template, 4, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](28, AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_28_Template, 4, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](29, AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_29_Template, 4, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](30, AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_30_Template, 4, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](31, AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_31_Template, 4, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](32, AddSystemComponent_div_1_form_10_div_9_form_2_div_1_div_32_Template, 10, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const i_r120 = ctx.index;
    const ctx_r118 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", !ctx_r118.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroupName", i_r120);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r118.messageConfigurationForm.value.sysChannel[0].messageChannel !== "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r118.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r118.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r118.messageConfigurationForm.value.sysChannel[0].queueType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r118.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r118.messageConfigurationForm.value.sysChannel[0].queueType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r118.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r118.messageConfigurationForm.value.sysChannel[0].queueType === "IBM");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r118.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r118.messageConfigurationForm.value.sysChannel[0].queueType === "JMS");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r118.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r118.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r118.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r118.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r118.editFlag);
} }
function AddSystemComponent_div_1_form_10_div_9_form_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](1, AddSystemComponent_div_1_form_10_div_9_form_2_div_1_Template, 33, 13, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r111 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroup", ctx_r111.messageConfigurationForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx_r111.messageConfigurationForm.get("sysChannel")["controls"]);
} }
function AddSystemComponent_div_1_form_10_div_9_div_3_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const i_r142 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("value", i_r142);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](i_r142);
} }
function AddSystemComponent_div_1_form_10_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r144 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Table");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "select", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("change", function AddSystemComponent_div_1_form_10_div_9_div_3_Template_select_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r144); const ctx_r143 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](4); return ctx_r143.onTableSlection($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](5, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](6, AddSystemComponent_div_1_form_10_div_9_div_3_option_6_Template, 2, 2, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx_r112.table);
} }
function AddSystemComponent_div_1_form_10_div_9_form_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Header and Service Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const header_r160 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("value", header_r160.headerTag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", header_r160.headerTag, " ");
} }
function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_ng_select_6_Template(rf, ctx) { if (rf & 1) {
    const _r163 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "ng-select", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("change", function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_ng_select_6_Template_ng_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r163); const i_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]().index; const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](5); return ctx_r161.changeSelectedFieldNo($event, i_r149); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("items", ctx_r151.isoRespDataFiltered)("disabled", !ctx_r151.editFlag);
} }
function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_ng_select_7_Template(rf, ctx) { if (rf & 1) {
    const _r166 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "ng-select", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("change", function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_ng_select_7_Template_ng_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r166); const i_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]().index; const ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](5); return ctx_r164.onselectingTag($event, i_r149); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("items", ctx_r152.xmlRespDataFiltered);
} }
function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_select_8_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const mkey_r168 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("value", mkey_r168);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", mkey_r168[1], " ");
} }
function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_select_8_Template(rf, ctx) { if (rf & 1) {
    const _r171 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "select", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("change", function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_select_8_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r171); const i_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]().index; const ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](5); return ctx_r169.onselectingColumnName($event.target.value, i_r149); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Please Select Tag");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](3, AddSystemComponent_div_1_form_10_div_9_form_4_div_19_select_8_option_3_Template, 2, 2, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r153 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx_r153.tabelData);
} }
function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_input_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "input", 111);
} }
function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_input_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "input", 111);
} }
function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_ng_select_12_ng_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "ng-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const type_r173 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("value", type_r173);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"]("", type_r173, " ");
} }
function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_ng_select_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "ng-select", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "ng-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Please Select Data Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](3, AddSystemComponent_div_1_form_10_div_9_form_4_div_19_ng_select_12_ng_option_3_Template, 2, 2, "ng-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("readonly", !ctx_r156.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx_r156.typeDataIso);
} }
function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_select_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "select", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "option", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, " Numeric ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "option", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](4, " Alpha Numeric ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "option", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](6, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](7, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_input_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "input", 118);
} }
function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_div_27_Template(rf, ctx) { if (rf & 1) {
    const _r176 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "a", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_div_27_Template_a_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r176); const i_r149 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]().index; const ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](5); return ctx_r174.delete(i_r149); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](4, "img", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_9_form_4_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "select", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](4, AddSystemComponent_div_1_form_10_div_9_form_4_div_19_option_4_Template, 2, 2, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](6, AddSystemComponent_div_1_form_10_div_9_form_4_div_19_ng_select_6_Template, 1, 2, "ng-select", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](7, AddSystemComponent_div_1_form_10_div_9_form_4_div_19_ng_select_7_Template, 1, 1, "ng-select", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](8, AddSystemComponent_div_1_form_10_div_9_form_4_div_19_select_8_Template, 4, 1, "select", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](9, AddSystemComponent_div_1_form_10_div_9_form_4_div_19_input_9_Template, 1, 0, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](10, AddSystemComponent_div_1_form_10_div_9_form_4_div_19_input_10_Template, 1, 0, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](11, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](12, AddSystemComponent_div_1_form_10_div_9_form_4_div_19_ng_select_12_Template, 4, 2, "ng-select", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](13, AddSystemComponent_div_1_form_10_div_9_form_4_div_19_select_13_Template, 8, 0, "select", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](14, AddSystemComponent_div_1_form_10_div_9_form_4_div_19_input_14_Template, 1, 0, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](15, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](16, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](17, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](18, "select", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](19, "option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](20, "No Encryption");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](21, "option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](22, " BASE 64 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](23, "option", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](24, " SHA 256 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](25, "option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](26, " SHA 512 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](27, AddSystemComponent_div_1_form_10_div_9_form_4_div_19_div_27_Template, 5, 0, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const i_r149 = ctx.index;
    const ctx_r146 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroupName", i_r149);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx_r146.headerTagData);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r146.messageConfigurationForm.value.sysChannel[0].messageChannel === "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r146.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML" && !ctx_r146.fileUploadClick);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r146.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection" && ctx_r146.tableDropDownClick);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r146.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection" && !ctx_r146.tableDropDownClick);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r146.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML" && ctx_r146.fileUploadClick);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r146.messageConfigurationForm.value.sysChannel[0].messageChannel === "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r146.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML" || ctx_r146.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r146.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r146.editFlag);
} }
function AddSystemComponent_div_1_form_10_div_9_form_4_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r178 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemComponent_div_1_form_10_div_9_form_4_div_20_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r178); const ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](5); return ctx_r177.addBioDocs(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "a", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](4, "img", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "button", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemComponent_div_1_form_10_div_9_form_4_div_20_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r178); const ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](5); return ctx_r179.allMethod(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](8, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](9, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemComponent_div_1_form_10_div_9_form_4_div_20_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r178); const ctx_r180 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](5); return ctx_r180.previousAll("2"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](11, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](12, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](13, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](14, "Exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", !ctx_r147.tcpForm.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction0"](2, _c2));
} }
function AddSystemComponent_div_1_form_10_div_9_form_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "form", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](1, AddSystemComponent_div_1_form_10_div_9_form_4_div_1_Template, 3, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](5, "Header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](9, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](11, "Data Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](12, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](13, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](14, "Default Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](15, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](17, "Encryption Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](18, "fieldset", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](19, AddSystemComponent_div_1_form_10_div_9_form_4_div_19_Template, 28, 11, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](20, AddSystemComponent_div_1_form_10_div_9_form_4_div_20_Template, 15, 3, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r113 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroup", ctx_r113.tcpForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r113.messageConfigurationForm.value.sysChannel[0].messageFormat !== "XML");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r113.label2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", !ctx_r113.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx_r113.tcpForm.get("sysService")["controls"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r113.editFlag);
} }
function AddSystemComponent_div_1_form_10_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 140);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](1, AddSystemComponent_div_1_form_10_div_9_div_1_Template, 8, 0, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](2, AddSystemComponent_div_1_form_10_div_9_form_2_Template, 2, 2, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](3, AddSystemComponent_div_1_form_10_div_9_div_3_Template, 7, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](4, AddSystemComponent_div_1_form_10_div_9_form_4_Template, 21, 6, "form", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r100.messageConfigurationForm.value.sysChannel[0].messageFormat == "XML" && ctx_r100.tab12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r100.basicInfoForm.value.messsageType === "A" && ctx_r100.tab11 || ctx_r100.basicInfoForm.value.messsageType === "A" && !ctx_r100.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r100.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection" && ctx_r100.tableFlag1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r100.tab12 || !ctx_r100.editFlag);
} }
function AddSystemComponent_div_1_form_10_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r187 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 143);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 144);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "div", 87, 156);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "input", 157);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("change", function AddSystemComponent_div_1_form_10_div_10_div_1_Template_input_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r187); const ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](4); return ctx_r186.uploadFileXml1($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "button", 158);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemComponent_div_1_form_10_div_10_div_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r187); const ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](4); return ctx_r188.chooseFile1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_22_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const i_r204 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("value", i_r204);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](i_r204);
} }
function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Data Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "select", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](5, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](6, AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_22_option_6_Template, 2, 2, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r192 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx_r192.dataType1);
} }
function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_23_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const i_r206 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("value", i_r206);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](i_r206);
} }
function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Type of Queue");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "select", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](4, AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_23_option_4_Template, 2, 2, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx_r193.queArray);
} }
function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Queue Manager");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "input", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Queue Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "input", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Connection Factory");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "input", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Connection Channel");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "input", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "User Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "input", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "input", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Database");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "input", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Connecting String");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](3, "input", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r208 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_32_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r208); const ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](6); return ctx_r207.next2(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](3, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "button", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_32_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r208); const ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](6); return ctx_r209.previousAll("3"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](6, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](9, "Exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction0"](1, _c2));
} }
function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r211 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](3, "Outgoing Message Configuration");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "fieldset", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](8, "Outgoing Message Protocol");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](9, "select", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("change", function AddSystemComponent_div_1_form_10_div_10_form_2_div_1_Template_select_change_9_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r211); const ctx_r210 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](5); return ctx_r210.onProtocalSlection1($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](11, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](12, "option", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](13, "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](14, "option", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](15, "HTTPS/HTTP ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "option", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](17, "MDB");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](18, "option", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](19, "EJB");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](20, "option", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](21, "DB Connection ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](22, AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_22_Template, 7, 1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](23, AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_23_Template, 5, 1, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](24, AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_24_Template, 4, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](25, AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_25_Template, 4, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](26, AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_26_Template, 4, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](27, AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_27_Template, 4, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](28, AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_28_Template, 4, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](29, AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_29_Template, 4, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](30, AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_30_Template, 4, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](31, AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_31_Template, 4, 0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](32, AddSystemComponent_div_1_form_10_div_10_form_2_div_1_div_32_Template, 10, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const i_r191 = ctx.index;
    const ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", !ctx_r189.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroupName", i_r191);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r189.messageConfigurationForm1.value.sysChannel[0].messageChannel !== "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r189.messageConfigurationForm1.value.sysChannel[0].messageChannel === "MDB");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r189.messageConfigurationForm1.value.sysChannel[0].messageChannel === "MDB" && ctx_r189.messageConfigurationForm1.value.sysChannel[0].queueType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r189.messageConfigurationForm1.value.sysChannel[0].messageChannel === "MDB" && ctx_r189.messageConfigurationForm1.value.sysChannel[0].queueType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r189.messageConfigurationForm1.value.sysChannel[0].messageChannel === "MDB" && ctx_r189.messageConfigurationForm1.value.sysChannel[0].queueType === "IBM");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r189.messageConfigurationForm1.value.sysChannel[0].messageChannel === "MDB" && ctx_r189.messageConfigurationForm1.value.sysChannel[0].queueType === "JMS");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r189.messageConfigurationForm1.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r189.messageConfigurationForm1.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r189.messageConfigurationForm1.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r189.messageConfigurationForm1.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r189.editFlag);
} }
function AddSystemComponent_div_1_form_10_div_10_form_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](1, AddSystemComponent_div_1_form_10_div_10_form_2_div_1_Template, 33, 13, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroup", ctx_r182.messageConfigurationForm1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx_r182.messageConfigurationForm1.get("sysChannel")["controls"]);
} }
function AddSystemComponent_div_1_form_10_div_10_div_3_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const i_r213 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("value", i_r213);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](i_r213);
} }
function AddSystemComponent_div_1_form_10_div_10_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r215 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Table");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "select", 77);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("change", function AddSystemComponent_div_1_form_10_div_10_div_3_Template_select_change_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r215); const ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](4); return ctx_r214.onTableSlection1($event.target.value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](5, "--Please select--");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](6, AddSystemComponent_div_1_form_10_div_10_div_3_option_6_Template, 2, 2, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r183 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx_r183.table2);
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "h1", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Header and Service Details");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const header_r231 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("value", header_r231.headerTag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", header_r231.headerTag, " ");
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_ng_select_6_Template(rf, ctx) { if (rf & 1) {
    const _r234 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "ng-select", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("change", function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_ng_select_6_Template_ng_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r234); const i_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]().index; const ctx_r232 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](5); return ctx_r232.onSelectingMessageBasis1($event, i_r220); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r222 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("items", ctx_r222.isoRespDataFiltered1)("disabled", !ctx_r222.editFlag);
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_ng_select_7_Template(rf, ctx) { if (rf & 1) {
    const _r237 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "ng-select", 109);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("change", function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_ng_select_7_Template_ng_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r237); const i_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]().index; const ctx_r235 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](5); return ctx_r235.onselectingTag1($event, i_r220); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("items", ctx_r223.xmlRespDataFiltered1);
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_select_8_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const mkey_r239 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("value", mkey_r239);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"](" ", mkey_r239[1], " ");
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_select_8_Template(rf, ctx) { if (rf & 1) {
    const _r242 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "select", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("change", function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_select_8_Template_select_change_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r242); const i_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]().index; const ctx_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](5); return ctx_r240.onselectingColumnName1($event.target.value, i_r220); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Please Select Tag");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](3, AddSystemComponent_div_1_form_10_div_10_form_4_div_19_select_8_option_3_Template, 2, 2, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r224 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx_r224.tabelData1);
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_input_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "input", 111);
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_input_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "input", 111);
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_ng_select_12_ng_option_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "ng-option", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const type_r244 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("value", type_r244);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate1"]("", type_r244, " ");
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_ng_select_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "ng-select", 113);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "ng-option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Please Select Data Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](3, AddSystemComponent_div_1_form_10_div_10_form_4_div_19_ng_select_12_ng_option_3_Template, 2, 2, "ng-option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("readonly", !ctx_r227.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx_r227.typeDataIso1);
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_select_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "select", 153);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "option", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, " Numeric ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "option", 116);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](4, " Alpha Numeric ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "option", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](6, " Date ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](7, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_input_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](0, "input", 118);
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_div_27_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r248 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "a", 154);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_div_27_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r248); const i_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2).index; const ctx_r246 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](5); return ctx_r246.delete1(i_r220); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](1, "img", 121);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](1, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](3, AddSystemComponent_div_1_form_10_div_10_form_4_div_19_div_27_a_3_Template, 2, 0, "a", 159);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r230 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r230.submitFlagAll);
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 151);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "select", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](4, AddSystemComponent_div_1_form_10_div_10_form_4_div_19_option_4_Template, 2, 2, "option", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](6, AddSystemComponent_div_1_form_10_div_10_form_4_div_19_ng_select_6_Template, 1, 2, "ng-select", 93);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](7, AddSystemComponent_div_1_form_10_div_10_form_4_div_19_ng_select_7_Template, 1, 1, "ng-select", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](8, AddSystemComponent_div_1_form_10_div_10_form_4_div_19_select_8_Template, 4, 1, "select", 95);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](9, AddSystemComponent_div_1_form_10_div_10_form_4_div_19_input_9_Template, 1, 0, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](10, AddSystemComponent_div_1_form_10_div_10_form_4_div_19_input_10_Template, 1, 0, "input", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](11, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](12, AddSystemComponent_div_1_form_10_div_10_form_4_div_19_ng_select_12_Template, 4, 2, "ng-select", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](13, AddSystemComponent_div_1_form_10_div_10_form_4_div_19_select_13_Template, 8, 0, "select", 152);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](14, AddSystemComponent_div_1_form_10_div_10_form_4_div_19_input_14_Template, 1, 0, "input", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](15, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](16, "input", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](17, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](18, "select", 102);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](19, "option", 103);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](20, "No Encryption");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](21, "option", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](22, " BASE 64 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](23, "option", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](24, " SHA 256 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](25, "option", 106);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](26, " SHA 512 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](27, AddSystemComponent_div_1_form_10_div_10_form_4_div_19_div_27_Template, 4, 1, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const i_r220 = ctx.index;
    const ctx_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroupName", i_r220);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx_r217.headerTagData);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r217.messageConfigurationForm1.value.sysChannel[0].messageChannel === "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r217.messageConfigurationForm1.value.sysChannel[0].messageFormat === "XML" && !ctx_r217.fileUploadClick);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r217.messageConfigurationForm1.value.sysChannel[0].messageChannel === "DB Connection" && ctx_r217.tableDropDownClick1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r217.messageConfigurationForm1.value.sysChannel[0].messageChannel === "DB Connection" && !ctx_r217.tableDropDownClick1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r217.messageConfigurationForm1.value.sysChannel[0].messageFormat === "XML" && ctx_r217.fileUploadClickAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r217.messageConfigurationForm1.value.sysChannel[0].messageChannel === "TCP/IP");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r217.messageConfigurationForm1.value.sysChannel[0].messageFormat === "XML" || ctx_r217.messageConfigurationForm1.value.sysChannel[0].messageFormat === "JSON");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r217.messageConfigurationForm1.value.sysChannel[0].messageChannel === "DB Connection");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r217.editFlag);
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_20_a_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "a", 125);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](2, "img", 126);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_div_20_Template(rf, ctx) { if (rf & 1) {
    const _r251 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 122);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 123);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemComponent_div_1_form_10_div_10_form_4_div_20_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r251); const ctx_r250 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](5); return ctx_r250.addBioDocs1(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](2, AddSystemComponent_div_1_form_10_div_10_form_4_div_20_a_2_Template, 3, 0, "a", 124);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "button", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemComponent_div_1_form_10_div_10_form_4_div_20_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r251); const ctx_r252 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](5); return ctx_r252.submitAll(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](6, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "button", 128);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemComponent_div_1_form_10_div_10_form_4_div_20_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r251); const ctx_r253 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](5); return ctx_r253.previousAll("4"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](9, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](11, "button", 148);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](12, "Exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r218 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r218.submitFlagAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", !ctx_r218.submitFlagAll || !ctx_r218.tcpForm1.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", !ctx_r218.submitFlagAll);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction0"](4, _c2));
} }
function AddSystemComponent_div_1_form_10_div_10_form_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "form", 149);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "fieldset", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](2, AddSystemComponent_div_1_form_10_div_10_form_4_div_2_Template, 3, 0, "div", 150);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](6, "Header");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](11, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](12, "Data Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](13, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](14, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](15, "Default Value");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](17, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](18, "Encryption Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](19, AddSystemComponent_div_1_form_10_div_10_form_4_div_19_Template, 28, 11, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](20, AddSystemComponent_div_1_form_10_div_10_form_4_div_20_Template, 13, 5, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r184 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroup", ctx_r184.tcpForm1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", !ctx_r184.submitFlagAll || !ctx_r184.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r184.messageConfigurationForm.value.sysChannel[0].messageFormat !== "XML");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r184.label2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx_r184.tcpForm1.get("sysService")["controls"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r184.editFlag);
} }
function AddSystemComponent_div_1_form_10_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 155);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](1, AddSystemComponent_div_1_form_10_div_10_div_1_Template, 8, 0, "div", 141);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](2, AddSystemComponent_div_1_form_10_div_10_form_2_Template, 2, 2, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](3, AddSystemComponent_div_1_form_10_div_10_div_3_Template, 7, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](4, AddSystemComponent_div_1_form_10_div_10_form_4_Template, 21, 6, "form", 142);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r101 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r101.messageConfigurationForm1.value.sysChannel[0].messageFormat == "XML" && ctx_r101.tab22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r101.basicInfoForm.value.messsageType === "A" && ctx_r101.tab21 || ctx_r101.basicInfoForm.value.messsageType === "A" && !ctx_r101.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r101.messageConfigurationForm1.value.sysChannel[0].messageChannel === "DB Connection" && ctx_r101.tableFlag2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r101.tab22 || !ctx_r101.editFlag);
} }
function AddSystemComponent_div_1_form_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "form", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 129);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "ul", 130);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](3, AddSystemComponent_div_1_form_10_li_3_Template, 3, 0, "li", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](4, AddSystemComponent_div_1_form_10_li_4_Template, 3, 0, "li", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](5, AddSystemComponent_div_1_form_10_li_5_Template, 3, 0, "li", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](6, AddSystemComponent_div_1_form_10_li_6_Template, 3, 0, "li", 131);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "div", 132);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](9, AddSystemComponent_div_1_form_10_div_9_Template, 5, 4, "div", 133);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](10, AddSystemComponent_div_1_form_10_div_10_Template, 5, 4, "div", 134);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r8.tab1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", !ctx_r8.tab1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", !ctx_r8.tab2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r8.tab2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r8.tab1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r8.tab2);
} }
function AddSystemComponent_div_1_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r261 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "button", 127);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemComponent_div_1_div_11_div_1_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r261); const ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3); return ctx_r260.next("basicConfiguration"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", !ctx_r254.basicInfoForm.valid);
} }
function AddSystemComponent_div_1_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r263 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "button", 161);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemComponent_div_1_div_11_div_2_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r263); const ctx_r262 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3); return ctx_r262.onSubmitEditAddSystem(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_div_11_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r265 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "button", 162);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemComponent_div_1_div_11_div_3_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r265); const ctx_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3); return ctx_r264.onClickOfAuth(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Auth");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_div_11_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r267 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemComponent_div_1_div_11_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r267); const ctx_r266 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3); return ctx_r266.onClickOfClose(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_div_11_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r269 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemComponent_div_1_div_11_div_5_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r269); const ctx_r268 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3); return ctx_r268.onClickOfReopen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Reopen");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_div_11_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r271 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "button", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemComponent_div_1_div_11_div_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r271); const ctx_r270 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](3); return ctx_r270.OndeleteofUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemComponent_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](1, AddSystemComponent_div_1_div_11_div_1_Template, 3, 1, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](2, AddSystemComponent_div_1_div_11_div_2_Template, 3, 0, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](3, AddSystemComponent_div_1_div_11_div_3_Template, 3, 0, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](4, AddSystemComponent_div_1_div_11_div_4_Template, 3, 0, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](5, AddSystemComponent_div_1_div_11_div_5_Template, 3, 0, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](6, AddSystemComponent_div_1_div_11_div_6_Template, 3, 0, "div", 160);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "button", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](9, "Exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r9.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r9.respData && !ctx_r9.editFlag && (ctx_r9.respData.recordStatus == "OPEN" || ctx_r9.respData.recordStatus == "O"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r9.respData && !ctx_r9.editFlag && (ctx_r9.respData.approvedStatus == "UNAUTHORIZED" || ctx_r9.respData.approvedStatus == "U"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r9.respData && !ctx_r9.editFlag && (ctx_r9.respData.recordStatus == "OPEN" || ctx_r9.respData.recordStatus == "O") && (ctx_r9.respData.approvedEver == "YES" || ctx_r9.respData.approvedEver == "Y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r9.respData && !ctx_r9.editFlag && (ctx_r9.respData.recordStatus == "CLOSED" || ctx_r9.respData.recordStatus == "C") && (ctx_r9.respData.approvedEver == "YES" || ctx_r9.respData.approvedEver == "Y"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", !ctx_r9.editFlag && ctx_r9.respData && (ctx_r9.respData.approvedEver == "NO" || ctx_r9.respData.approvedEver == "N"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction0"](7, _c2));
} }
function AddSystemComponent_div_1_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 163);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "div", 167);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](7, "i", 168);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](9, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](11, "Maker");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](14, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](15, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](17, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](18, "div", 171);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](19, "img", 172);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](20, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](21, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](22, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](23, "Maker Time Stamp");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](27, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](28, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](29, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](30, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](31, "div", 173);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](32, "i", 174);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](33, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](34, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](35, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](36, "Record Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](39, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](40, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](41, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](42, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](43, "div", 175);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](44, "i", 176);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](45, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](46, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](47, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](48, "Checker");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](49, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](50);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](51, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](52, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](53, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](54, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](55, "div", 177);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](56, "img", 178);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](57, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](58, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](59, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](60, "Checker Time Stamp");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](61, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipe"](63, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](64, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](65, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](66, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](67, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](68, "div", 179);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](69, "i", 180);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](70, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](71, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](72, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](73, "First Time Auth");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](74, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](75);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](76, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](77, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](78, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](79, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](80, "div", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](81, "img", 182);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](82, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](83, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](84, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](85, "Auth Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](86, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](87);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](88, "div", 164);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](89, "div", 165);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](90, "div", 166);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](91, "div", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](92, "div", 181);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](93, "img", 183);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](94, "div", 169);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](95, "div", 170);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](96, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](97, "Modification Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](98, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](99);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r10.respData.creatorId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipeBind2"](26, 8, ctx_r10.respData.createdTime, "MM/dd/yyyy, h:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r10.respData.recordStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r10.respData.approverId);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipeBind2"](63, 11, ctx_r10.respData.approvedTime, "MM/dd/yyyy, h:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r10.respData.approvedEver);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r10.respData.approvedStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r10.respData.versionNo);
} }
function AddSystemComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](3, "Add System");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](4, AddSystemComponent_div_1_form_4_Template, 87, 14, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](5, AddSystemComponent_div_1_form_5_Template, 2, 2, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](6, AddSystemComponent_div_1_div_6_Template, 6, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](7, AddSystemComponent_div_1_div_7_Template, 7, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](8, AddSystemComponent_div_1_div_8_Template, 5, 0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](9, AddSystemComponent_div_1_form_9_Template, 22, 7, "form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](10, AddSystemComponent_div_1_form_10_Template, 11, 6, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](11, AddSystemComponent_div_1_div_11_Template, 10, 8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](12, AddSystemComponent_div_1_div_12_Template, 100, 14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r1.basicConfiguration);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r1.messageConfiguration && ctx_r1.basicInfoForm.value.messsageType !== "A" || !ctx_r1.editFlag && ctx_r1.basicInfoForm.value.messsageType !== "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r1.mdb && ctx_r1.basicInfoForm.value.messsageType !== "A" || (ctx_r1.messageConfigurationForm.value.sysChannel[0].messageFormat === "FLATFILE" || ctx_r1.messageConfigurationForm.value.sysChannel[0].messageFormat === "CSV/EXCEL") && ctx_r1.basicInfoForm.value.messsageType != "A" && !ctx_r1.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r1.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection" && ctx_r1.tableFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r1.messageConfigurationForm.value.sysChannel[0].messageFormat == "XML" && ctx_r1.incomingMessageConfiguration === true || ctx_r1.messageConfigurationForm.value.sysChannel[0].messageFormat == "XML" && !ctx_r1.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r1.incomingMessageConfiguration || !ctx_r1.editFlag && ctx_r1.basicInfoForm.value.messsageType !== "A");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r1.basicInfoForm.value.messsageType == "A" && ctx_r1.all === true || ctx_r1.basicInfoForm.value.messsageType == "A" && !ctx_r1.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r1.basicConfiguration);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r1.respData);
} }
class AddSystemComponent {
    constructor(fb, addSystem, router, roleService, toastService, spinner, cdr) {
        this.fb = fb;
        this.addSystem = addSystem;
        this.router = router;
        this.roleService = roleService;
        this.toastService = toastService;
        this.spinner = spinner;
        this.cdr = cdr;
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
        this.selectedMessageKeys = [];
        this.selectedMessageKeys1 = [];
        this.showDialog = false;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
    }
    ngOnInit() {
        this.idValue = localStorage.getItem('idValue');
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
            sourceUri: [item ? item.sourceUri : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            medianUri: [item ? item.medianUri : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            medianPort: [
                item ? item.medianPort : "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2)],
            ],
            sourceIp: [
                item ? item.sourceIp : "",
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern("^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?).){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$"),
                ],
            ],
            sourcePort: [
                item ? item.sourcePort : "",
                [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(2)],
            ],
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
                this.formTouched5 == true)) {
            return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                text: 'There are unsaved changes in the screen. Would you like to navigate to other screen?',
                showCancelButton: true,
                confirmButtonColor: '#E6224A',
                cancelButtonColor: '#011945',
                cancelButtonText: 'NO',
                confirmButtonText: 'YES',
                icon: 'info',
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
        if (this.arrayMessageConfig[0].messageFormat === "XML") {
            this.fetchingXMl();
            this.label2 = "Tag";
        }
        if (this.arrayMessageConfig[0].messageFormat === "DB Connection") {
            this.label2 = "Column Name";
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
                    "DB Connection") &&
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
    fetchDatabaseTable() {
        this.messageConfigurationForm.value.sysChannel[0].messageType = this.basicInfoForm.value.messsageType;
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
                    debugger;
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
        const enteredRecord = this.tcpForm.get("sysService");
        const selectedHeaderTags = new Set(enteredRecord.value.map((d) => d.headerTag));
        this.headerArray = this.headerTagData
            .filter((data) => selectedHeaderTags.has(data.headerTag))
            .map((val) => val.headerTag);
        if (((_b = (_a = this.messageConfigurationForm.value) === null || _a === void 0 ? void 0 : _a.sysChannel[0]) === null || _b === void 0 ? void 0 : _b.messageChannel) !==
            "TCP/IP") {
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
        if (this.tcpForm.value.sysService.some((sysService) => sysService["headerTag"] === "OPERATION") &&
            this.tcpForm.value.sysService.some((mdmtSystemService) => mdmtSystemService["headerTag"] === "SERVICE")) {
            let obj_test = {};
            obj_test = this.basicInfoForm.value;
            obj_test.sysChannel = this.messageConfigurationForm.value.sysChannel;
            for (let index = 0; index < obj_test.sysChannel.length; index++) {
                obj_test.sysChannel[index].sysService =
                    this.tcpForm.value.sysService.map((val) => {
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
                this.addSystem
                    .submittingAddSystem(obj_test, this.currentUser)
                    .subscribe((addSysResp) => {
                    if (addSysResp) {
                        // this.submitFlag=false;
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
        else {
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                text: "Header value OPERATION and SERVICE are mandatory !",
                icon: "info",
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
    onselectingColumnName(event, i) {
        console.log(this.tabelData);
        const filteredHomes = event.split(",");
        console.log(filteredHomes);
        this.tcpForm
            .get("sysService")["controls"][i].get("dataType")
            .setValue(filteredHomes[2]);
        this.tcpForm
            .get("sysService")["controls"][i].get("headerValue")
            .setValue(filteredHomes[3]);
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
    shouldHideOption(value) {
        console.log("Re-rendering option");
        return this.headerArray.includes(value.headerTag);
    }
    changeSelectedFieldNo(evt, index) {
        this.selectedMessageKeys[index] = evt.fieldName;
        const selectedMessageKeySet = new Set(this.selectedMessageKeys);
        this.isoRespDataFiltered = this.isoRespData
            .filter((val) => !selectedMessageKeySet.has(val.fieldName))
            .map((mKey) => (Object.assign(Object.assign({}, mKey), { formattedmKey: `${mKey.fieldNo} ${mKey.fieldName}` })));
    }
}
AddSystemComponent.??fac = function AddSystemComponent_Factory(t) { return new (t || AddSystemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_2__.AddSystemService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_4__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef)); };
AddSystemComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({ type: AddSystemComponent, selectors: [["npr-add-system"]], viewQuery: function AddSystemComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????viewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????viewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????loadQuery"]()) && (ctx.fileUploadWrapper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????queryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????loadQuery"]()) && (ctx.fileUploadWrapper1 = _t.first);
    } }, decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "pageContentMain", 4, "ngIf"], [1, "indicator-progress"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"], [1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["action", "", "class", "formStyle", 3, "formGroup", 4, "ngIf"], ["action", "", "class", "formStyle", 4, "ngIf"], ["fxLayout", "row wrap", "class", "file", 4, "ngIf"], ["class", "formStyle dbCardStyle", 3, "formGroup", 4, "ngIf"], ["class", "row g-3 pb-3 pt-4 justify-content-end", 4, "ngIf"], ["class", "dbCardStyle", 4, "ngIf"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "dbCardStyle"], [1, "titleStyle", "mt-2", "mb-4"], [3, "disabled"], [1, "row", "gy-4"], [1, "col-lg-3"], ["for", "codeLbl", 1, "formLbl"], [1, "colorRed"], ["id", "codeLbl", "type", "text", "formControlName", "systemCode", "value", "", 1, "form-control", 3, "readonly"], ["for", "name", 1, "formLbl"], ["id", "name", "type", "text", "formControlName", "systemName", "value", "", 1, "form-control", 3, "readonly"], ["formControlName", "serviceType", "aria-label", "Default select example", 1, "form-select"], ["hidden", "", "value", "", "disabled", "", "selected", ""], ["value", "client"], ["value", "server"], ["formControlName", "messsageType", "aria-label", "Default select example", "placeholder", "Please Select", 1, "form-select"], ["value", "A"], ["value", "I"], ["value", "O"], [1, "row", "gy-4", "mt-2"], ["for", "externalIp", 1, "formLbl"], ["id", "externalIp", "pattern", "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$", "formControlName", "sourceIp", "type", "text", "value", "", 1, "form-control", 3, "readonly"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "externalPort", 1, "formLbl"], ["id", "externalPort", "type", "number", "maxlength", "4", "minlength", "2", "formControlName", "sourcePort", "type", "text", "value", "", 1, "form-control", 3, "readonly"], ["for", "medianPort", 1, "formLbl"], ["id", "medianPort", "type", "text", "formControlName", "sourceUri", "type", "text", "value", "", 1, "form-control", 3, "readonly"], ["for", "medianIp", 1, "formLbl"], ["id", "medianIp", "formControlName", "medianIp", "type", "text", "value", "", "pattern", "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$", 1, "form-control", 3, "readonly"], ["id", "medianPort", "type", "number", "maxlength", "4", "minlength", "2", "formControlName", "medianPort", "type", "text", "value", "", 1, "form-control", 3, "readonly"], ["id", "medianPort", "type", "text", "formControlName", "medianUri", "type", "text", "value", "", 1, "form-control", 3, "readonly"], [1, "invalid-feedback"], ["class", "dbCardStyle", "formArrayName", "sysChannel", 4, "ngFor", "ngForOf"], ["formArrayName", "sysChannel", 1, "dbCardStyle"], [1, "row", "gy-4", 3, "formGroupName"], [1, "col-lg-4"], ["formControlName", "messageChannel", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["value", "TCP/IP"], ["value", "Https/Http"], ["value", "MDB"], ["value", "EJB"], ["value", "DB Connection"], ["class", "col-lg-4", 4, "ngIf"], ["formControlName", "messageFormat", "aria-label", "Default select example", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["formControlName", "queueType", "aria-label", "Default select example", 1, "form-select"], ["id", "queueManager", "type", "text", "formControlName", "queueManager", "placeholder", "Queue manager", "value", "", 1, "form-control"], ["id", "queueName", "type", "text", "formControlName", "queueName", "placeholder", "Queue Name", "value", "", 1, "form-control"], ["id", "connectFactory", "type", "text", "formControlName", "queueConnFactory", "placeholder", "Connectiong Factory", "value", "", 1, "form-control"], ["id", "queChannel", "type", "text", "formControlName", "queueChannel", "placeholder", "Queue Channel", "value", "", 1, "form-control"], ["id", "userName", "type", "text", "formControlName", "dbUsername", "placeholder", "User Name", "value", "", 1, "form-control"], ["id", "password", "type", "password", "formControlName", "dbPassword", "placeholder", "Password", "value", "", 1, "form-control"], ["id", "databaseName", "type", "text", "formControlName", "dbServiceName", "placeholder", "Database Name", "value", "", 1, "form-control"], ["id", "connectString", "type", "text", "formControlName", "dbConnectString", "placeholder", "Connecting String", "value", "", 1, "form-control"], [1, "row", "g-3", "pb-3", "pt-4", "justify-content-end"], [1, "col-auto"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnDarkGrey", 3, "click"], ["type", "button", "href", "javascript:void(0);", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["action", "", 1, "formStyle"], ["type", "text", "value", "", 1, "form-control"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary"], ["fxLayout", "row wrap", 1, "file"], ["aria-label", "Default select example", 1, "form-select", 3, "change"], ["fxFlex", "100", 1, "width"], [1, "formStyle", "dbCardStyle", 3, "formGroup"], ["style", "width:100%;margin-bottom:20px", 4, "ngIf"], [1, "col-lg-2"], ["formArrayName", "sysService", 4, "ngFor", "ngForOf"], ["class", "row g-3 pt-4", 4, "ngIf"], [2, "width", "100%", "margin-bottom", "20px"], [1, "fileUpload"], [1, "formS"], ["data-text", "File Upload", 1, "file-upload-wrapper"], ["fileWrapper", ""], ["name", "file-upload-field", "type", "file", 1, "file-upload-field", 3, "change"], ["formArrayName", "sysService"], [1, "row", "gy-4", 2, "margin-bottom", "20px", 3, "formGroupName"], ["formControlName", "headerTag", "aria-label", "Default select example", 1, "form-select"], ["aria-label", "Default select example", "class", "form-select", "bindLabel", "formattedmKey", "formControlName", "messageKey", "placeholder", "Select city", 3, "items", "disabled", "change", 4, "ngIf"], ["aria-label", "Default select example", "class", "form-select", "bindLabel", "messageKey", "formControlName", "messageKey", 3, "items", "change", 4, "ngIf"], ["class", "form-select", "formControlName", "messageKey", "aria-label", "Default select example", 3, "change", 4, "ngIf"], ["id", "externalIp", "formControlName", "messageKey", "type", "text", "class", "form-control", "value", "", "readonly", "", 4, "ngIf"], ["id", "externalIp", "formControlName", "messageKey", "type", "text", "class", "form-control", "value", "", 4, "ngIf"], ["id", "outlineNgSelect", "class", "form-select", "formControlName", "dataType", "aria-label", "Default select example", 3, "readonly", 4, "ngIf"], ["class", "form-select", "formControlName", "dataType", "aria-label", "Default select example", 3, "name", 4, "ngIf"], ["id", "externalIp", "formControlName", "dataType", "type", "text", "class", "form-control", "readonly", "", "value", "", 4, "ngIf"], ["id", "externalIp", "formControlName", "headerValue", "type", "text", "value", "", 1, "form-control"], ["formControlName", "encryption", "aria-label", "Default select example", 1, "form-select"], ["value", "No Encryption"], ["value", "BASE64"], ["value", "SHA256"], ["value", "SHA512"], ["class", "col-lg-2", 4, "ngIf"], ["aria-label", "Default select example", "bindLabel", "formattedmKey", "formControlName", "messageKey", "placeholder", "Select city", 1, "form-select", 3, "items", "disabled", "change"], ["aria-label", "Default select example", "bindLabel", "messageKey", "formControlName", "messageKey", 1, "form-select", 3, "items", "change"], ["formControlName", "messageKey", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["id", "externalIp", "formControlName", "messageKey", "type", "text", "value", "", "readonly", "", 1, "form-control"], ["id", "externalIp", "formControlName", "messageKey", "type", "text", "value", "", 1, "form-control"], ["id", "outlineNgSelect", "formControlName", "dataType", "aria-label", "Default select example", 1, "form-select", 3, "readonly"], ["formControlName", "dataType", "aria-label", "Default select example", 1, "form-select", 3, "name"], ["value", "numeric"], ["value", "alphaNumeric"], ["value", "date"], ["id", "externalIp", "formControlName", "dataType", "type", "text", "readonly", "", "value", "", 1, "form-control"], ["type", "button", "href", "javascript:void(0);", "class", "deleteIcon2", 3, "click", 4, "ngIf"], ["type", "button", "href", "javascript:void(0);", 1, "deleteIcon2", 3, "click"], ["src", "assets/images/delete-icon.svg", "alt", "..."], [1, "row", "g-3", "pt-4"], [1, "col-auto", 3, "click"], ["class", "addIcon primarybg", 4, "ngIf"], [1, "addIcon", "primarybg"], ["src", "assets/images/plus-icon.svg", "alt", "..."], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnDarkGrey", 3, "disabled", "click"], [1, "tabStyleCol", 2, "margin-top", "30px"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["class", "nav-item", "role", "presentation", 4, "ngIf"], ["id", "myTabContent", 1, "tab-content"], ["class", "tab-pane fade show active", "id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 4, "ngIf"], ["class", "tab-pane fade show active", "id", "profile", "role", "tabpanel", "aria-labelledby", "profile-tab", 4, "ngIf"], ["role", "presentation", 1, "nav-item"], ["type", "button", "id", "home-tab", "data-bs-toggle", "tab", "data-bs-target", "#home", "type", "button", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", "active", 3, "click"], ["type", "button", "id", "home-tab", "data-bs-toggle", "tab", "data-bs-target", "#home", "type", "button", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", 3, "click"], ["type", "button", "id", "profile-tab", "data-bs-toggle", "tab", "data-bs-target", "#profile", "type", "button", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link", 3, "click"], ["type", "button", "id", "profile-tab", "data-bs-toggle", "tab", "data-bs-target", "#profile", "type", "button", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link", "active", 3, "click"], ["id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "active"], ["style", "width: 60%;", 4, "ngIf"], ["action", "", "class", "formStyle dbCardStyle", "style", "margin-bottom: 20px;", 3, "formGroup", 4, "ngIf"], [2, "width", "60%"], ["fxFlex", "60"], ["type", "button", "type", "button", 1, "btnFile", 3, "click"], ["id", "databaseName", "formControlName", "dbServiceName", "type", "text", "placeholder", "Database Name", "value", "", 1, "form-control"], ["id", "connectString", "formControlName", "dbConnectString", "type", "text", "placeholder", "Connecting String", "value", "", 1, "form-control"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["action", "", 1, "formStyle", "dbCardStyle", 2, "margin-bottom", "20px", 3, "formGroup"], ["class", "titleStyle mt-2 mb-4", 4, "ngIf"], [1, "row", "gy-4", 2, "margin-bottom", "30px", 3, "formGroupName"], ["class", "form-select", "formControlName", "dataType", "aria-label", "Default select example", 4, "ngIf"], ["formControlName", "dataType", "aria-label", "Default select example", 1, "form-select"], ["type", "button", 1, "deleteIcon2", 3, "click"], ["id", "profile", "role", "tabpanel", "aria-labelledby", "profile-tab", 1, "tab-pane", "fade", "show", "active"], ["fileWrapper1", ""], ["name", "file-upload-field", "type", "file", "value", "", 1, "file-upload-field", 3, "change"], ["type", "button", "mat-raised-button", "", "type", "button", 1, "btnFile", 3, "click"], ["type", "button", "class", "deleteIcon2", 3, "click", 4, "ngIf"], ["class", "col-auto", 4, "ngIf"], ["type", "button", "color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], [1, "fa", "fa-edit", "faClass"], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["aria-hidden", "true", 1, "fa", "fa-files-o", "faRecordStatus"], [1, "csCardStyleIcon", "csCardStyleIconBg4"], [1, "fa", "fa-check-square-o", "faClassChecker"], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], [1, "fa", "fa-shield", "faClassFirstTimeAuth"], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/authorize.svg", "alt", "...", 1, "modImage"], ["src", "assets/images/modification.svg", "alt", "...", 1, "modImage"]], template: function AddSystemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](0, AddSystemComponent_ng_container_0_Template, 4, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](1, AddSystemComponent_div_1_Template, 13, 9, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["??NgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MinLengthValidator, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupName, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_11__.NgOptionComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgForm], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe], styles: [".fileUpload[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zeXN0ZW0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxVQUFBO0VBQ0EsbUJBQUE7QUFDSiIsImZpbGUiOiJhZGQtc3lzdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGVVcGxvYWR7XHJcbiAgICB3aWR0aDo1MCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbn0iXX0= */"] });


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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 79441);
/* harmony import */ var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/fmosNewRolePermissions */ 35383);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 18190);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/add-system.service */ 91973);
/* harmony import */ var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/role.service */ 77382);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ 50481);









function AddSystemSummaryComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemSummaryComponent_div_6_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r2.new(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r0.roleCodes.new.labelDescription);
} }
function AddSystemSummaryComponent_tr_29_button_18_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemSummaryComponent_tr_29_button_18_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r10); const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r8.close(data_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemSummaryComponent_tr_29_button_19_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemSummaryComponent_tr_29_button_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r13); const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]().$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r11.open(data_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](1, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemSummaryComponent_tr_29_button_20_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemSummaryComponent_tr_29_button_20_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r16); const data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]().$implicit; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r14.delete(data_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](1, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} }
function AddSystemSummaryComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemSummaryComponent_tr_29_Template_a_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r18); const data_r4 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r17.getResp(data_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function AddSystemSummaryComponent_tr_29_Template_button_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r18); const data_r4 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](); return ctx_r19.auth(data_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](17, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](18, AddSystemSummaryComponent_tr_29_button_18_Template, 2, 0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](19, AddSystemSummaryComponent_tr_29_button_19_Template, 2, 0, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](20, AddSystemSummaryComponent_tr_29_button_20_Template, 2, 0, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
} if (rf & 2) {
    const data_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](data_r4.systemCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](data_r4.systemName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](data_r4.messsageType);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](data_r4.approvedStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](data_r4.recordStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipeBind2"](14, 10, data_r4.createdTime, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", !(data_r4.approvedStatus == "U" || data_r4.approvedStatus == "Unauthorized"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", (data_r4.recordStatus == "O" || data_r4.recordStatus == "Open" || data_r4.recordStatus == "OPEN") && (data_r4.approvedEver == "Y" || data_r4.approvedEver == "YES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", data_r4.recordStatus == "C" || data_r4.recordStatus == "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", data_r4.approvedEver == "N" || data_r4.approvedEver == "NO");
} }
const _c0 = function () { return ["/dashboard"]; };
class AddSystemSummaryComponent {
    constructor(apiService, roleService, router, cdr) {
        this.apiService = apiService;
        this.roleService = roleService;
        this.router = router;
        this.cdr = cdr;
        this.respArray = [];
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
        this.isLoading = false;
        this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels();
        this.statusArr = ['Authorized', 'Unauthorized', 'Open', 'Close'];
    }
    ngOnInit() {
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            columnDefs: [{ type: 'date', 'targets': [5] }],
            order: [[5, 'desc']],
            processing: true,
            // lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]],
            lengthMenu: [
                [5, 10, 20, 30, -1],
                [5, 10, 20, 30, "ALL"],
            ],
            // columnDefs: [ { type: 'date', 'targets': [5] } ],
            // order: [[5, 'desc']],
        };
        this.currentUser = localStorage.getItem("userFromLogin");
        this.getDataForMonitor();
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
            this.respArray = dataresp.result;
            this.isLoading = false;
            this.cdr.markForCheck();
            this.dtTrigger.next();
        });
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
    close(data) {
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
            if (result.isConfirmed === true) {
                this.apiService
                    .editaddsystem("close", this.currentUser, data)
                    .subscribe((response) => {
                    if (response) {
                        this.respData = response;
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "Record is Closed", icon: "success" }).then(() => window.location.reload());
                    }
                });
            }
        });
    }
    open(data) {
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
            if (result.isConfirmed === true) {
                //submitAll
                this.apiService
                    .editaddsystem("open", this.currentUser, data)
                    .subscribe((response) => {
                    if (response) {
                        this.respData = response;
                        this.auditLog();
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "Record is Reopened", icon: "success" }).then(() => window.location.reload());
                    }
                });
            }
        });
    }
    delete(data) {
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
                this.apiService
                    .deleteAddSystem(this.currentUser, data.systemId)
                    .subscribe((response) => {
                    if (response) {
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "Record is Deleted", icon: "success" }).then(() => window.location.reload());
                    }
                });
            }
        });
    }
    auth(data) {
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
            if (result.isConfirmed === true) {
                if (this.currentUser === data.creatorId) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "Maker Cannot Authorize Record!", icon: "error" });
                    return;
                }
                this.apiService
                    .editaddsystem("auth", this.currentUser, data)
                    .subscribe((response) => {
                    if (response) {
                        this.respData = response;
                        this.auditLog();
                        sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({ text: "Record is Authorized", icon: "success" }).then(() => window.location.reload());
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
AddSystemSummaryComponent.??fac = function AddSystemSummaryComponent_Factory(t) { return new (t || AddSystemSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_2__.AddSystemService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef)); };
AddSystemSummaryComponent.??cmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({ type: AddSystemSummaryComponent, selectors: [["npr-add-system-summary"]], decls: 30, vars: 6, consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [1, "table-responsive"], ["datatable", "", "id", "dbTable1", 1, "dataTable", "table", "tableStyleSelect", "tableStyle", "nowrap", "vAlignMdl", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["href", "javascript:void(0)", 1, "primaryColor", 3, "click"], ["title", "Authorize", 1, "btn", 2, "color", "red", 3, "disabled", "click"], ["src", "assets/images/authorize.svg", "alt", "..."], ["class", "btn", "style", "color: red", "title", "Close", 3, "click", 4, "ngIf"], ["class", "btn", "style", "color: red", "title", "Reopen", 3, "click", 4, "ngIf"], ["class", "btn", "style", "color: red", "title", "Delete", 3, "click", 4, "ngIf"], ["title", "Close", 1, "btn", 2, "color", "red", 3, "click"], ["src", "assets/images/CROSS1.svg", "alt", "..."], ["title", "Reopen", 1, "btn", 2, "color", "red", 3, "click"], ["src", "assets/images/open.svg", "alt", "..."], ["title", "Delete", 1, "btn", 2, "color", "red", 3, "click"], ["src", "assets/images/delete.svg", "alt", "..."]], template: function AddSystemSummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](3, "Add System");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](6, AddSystemSummaryComponent_div_6_Template, 3, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](9, "Exit");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](11, "table", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](12, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](13, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](15, " System Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](17, "System Code\tName");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](19, "Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](21, "Auth Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](23, "Record Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](25, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](27, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](28, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](29, AddSystemSummaryComponent_tr_29_Template, 21, 13, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.roleCodes.new);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx.respArray);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_4__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe], styles: ["th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.btn[_ngcontent-%COMP%] {\n  padding: 11px 20px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zeXN0ZW0tc3VtbWFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7RUFFSSxrQkFBQTtBQUZKOztBQUtBO0VBQ0ksNkJBQUE7QUFGSiIsImZpbGUiOiJhZGQtc3lzdGVtLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAudmlld3tcclxuLy8gICAgIG92ZXJmbG93LXg6IHNjcm9sbDtcclxuLy8gfVxyXG50aCxcclxudGQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uYnRuIHtcclxuICAgIHBhZGRpbmc6IDExcHggMjBweCAhaW1wb3J0YW50O1xyXG59Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_views_addSystem_add-System_add-System_module_ts-es2015.js.map