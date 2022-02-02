"use strict";
(self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["common"],{

/***/ 77310:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/audit-log-status/audit-log-status.component.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuditLogStatusComponent": function() { return /* binding */ AuditLogStatusComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);

class AuditLogStatusComponent {
    constructor() {
        this.auditLog = {};
    }
    ngOnInit() {
    }
}
AuditLogStatusComponent.ɵfac = function AuditLogStatusComponent_Factory(t) { return new (t || AuditLogStatusComponent)(); };
AuditLogStatusComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuditLogStatusComponent, selectors: [["npr-audit-log-status"]], inputs: { auditLog: ["items", "auditLog"] }, decls: 0, vars: 0, template: function AuditLogStatusComponent_Template(rf, ctx) { }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdWRpdC1sb2ctc3RhdHVzLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 60795:
/*!********************************************************!*\
  !*** ./src/app/shared/components/components.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": function() { return /* binding */ ComponentsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _audit_log_status_audit_log_status_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audit-log-status/audit-log-status.component */ 77310);
/* harmony import */ var _otp_otp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp/otp.component */ 55798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1858);




class ComponentsModule {
}
ComponentsModule.ɵfac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
ComponentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_audit_log_status_audit_log_status_component__WEBPACK_IMPORTED_MODULE_0__.AuditLogStatusComponent, _otp_otp_component__WEBPACK_IMPORTED_MODULE_1__.OtpComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule], exports: [_audit_log_status_audit_log_status_component__WEBPACK_IMPORTED_MODULE_0__.AuditLogStatusComponent] }); })();


/***/ }),

/***/ 55798:
/*!********************************************************!*\
  !*** ./src/app/shared/components/otp/otp.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpComponent": function() { return /* binding */ OtpComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);

class OtpComponent {
    constructor() { }
    ngOnInit() {
    }
}
OtpComponent.ɵfac = function OtpComponent_Factory(t) { return new (t || OtpComponent)(); };
OtpComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OtpComponent, selectors: [["npr-otp"]], decls: 2, vars: 0, template: function OtpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "otp works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 35249:
/*!**************************************************************!*\
  !*** ./src/app/shared/models/audit-logs-dto-first-second.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirstAndSecondAuthAuditLogRespDTO": function() { return /* binding */ FirstAndSecondAuthAuditLogRespDTO; },
/* harmony export */   "DataForProcessScreen": function() { return /* binding */ DataForProcessScreen; }
/* harmony export */ });
class FirstAndSecondAuthAuditLogRespDTO {
}
class DataForProcessScreen {
}


/***/ }),

/***/ 26193:
/*!*******************************************************!*\
  !*** ./src/app/shared/models/pending-for-auth-dto.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PendingForAuthDTO": function() { return /* binding */ PendingForAuthDTO; },
/* harmony export */   "GetDetailsQueryToggleReqDTO": function() { return /* binding */ GetDetailsQueryToggleReqDTO; },
/* harmony export */   "DeUploadReqDTO": function() { return /* binding */ DeUploadReqDTO; },
/* harmony export */   "DeUploadRespStatusEntity": function() { return /* binding */ DeUploadRespStatusEntity; }
/* harmony export */ });
class PendingForAuthDTO {
}
class GetDetailsQueryToggleReqDTO {
}
class DeUploadReqDTO {
}
class DeUploadRespStatusEntity {
}


/***/ }),

/***/ 19307:
/*!****************************************!*\
  !*** ./src/app/shared/models/users.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": function() { return /* binding */ User; }
/* harmony export */ });
class User {
}


/***/ }),

/***/ 5362:
/*!**************************************************!*\
  !*** ./src/app/shared/services/excel.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExcelService": function() { return /* binding */ ExcelService; }
/* harmony export */ });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ 28461);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ 71723);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1858);



const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
class ExcelService {
    constructor() { }
    exportAsExcelFile(json, excelFileName) {
        const worksheet = xlsx__WEBPACK_IMPORTED_MODULE_1__.utils.json_to_sheet(json);
        // console.log('worksheet',worksheet);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_1__.write(workbook, { bookType: 'xlsx', type: 'array' });
        // const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    }
    saveAsExcelFile(buffer, fileName) {
        const data = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        // FileSaver.saveAs(data, fileName + '_export_' + new Date().getDate() +'-'+(new Date().getMonth()+1)+'-'+new Date().getFullYear()+EXCEL_EXTENSION);
        // FileSaver.saveAs(data, fileName + '_export');
        file_saver__WEBPACK_IMPORTED_MODULE_0__.saveAs(data, fileName + EXCEL_EXTENSION);
    }
}
ExcelService.ɵfac = function ExcelService_Factory(t) { return new (t || ExcelService)(); };
ExcelService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ExcelService, factory: ExcelService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 93135:
/*!*************************************************!*\
  !*** ./src/app/shared/services/role.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleService": function() { return /* binding */ RoleService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 33549);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 97361);
/* harmony import */ var src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/config/app.constant */ 91486);
/* harmony import */ var _models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/fmosNewRolePermissions */ 91024);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1858);

//import { AppConstants } from 'app/config/app.constant';





class RoleService {
    constructor(http) {
        this.http = http;
        this.username = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('');
        this.tabData = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.screenLabelList = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(new _models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__.permissionsLabels());
        this.screenData = new _models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__.permissionsLabels();
        //public screenLabelList = new BehaviorSubject([]);
        this.screenwisePermissions = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.httpHeader = { header: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-type': 'application/json' }) };
        this.paramSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
        this.getNavParam = this.paramSource.asObservable();
        this._baseURL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/role';
        this._fmosbaseURL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/fmsRoles';
        this.baseURL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL;
    }
    sendNavParam(params) {
        this.paramSource.next(params);
    }
    createRoles(role) {
        // return this.http.delete(`${this._baseURL}/${userId}/${userIdLoggedIn}`, { responseType: 'text' });
        return this.http.post(`${this._baseURL}` + '/createRole', role);
    }
    getRoleByRoleName(roleName) {
        return this.http.get(`${this._baseURL}/${roleName}`);
    }
    getAllRoles() {
        //return this.http.get(`${this._baseURL}` + '/roles');
        return this.http.get(`${this.baseURL}` + '/users' + '/getAllAuthRole');
    }
    getAllDept() {
        //return this.http.get(`${this._baseURL}` + '/roles');
        return this.http.get(`${this.baseURL}` + '/users' + '/getAllAuthDepts');
    }
    getAllRolesSummary() {
        //return this.http.get(`${this._baseURL}` + '/roles');
        return this.http.get(`${this._fmosbaseURL}` + '/fetchAllRolesSummary');
    }
    fetchAllAuthRoles() {
        return this.http.get(`${this._baseURL}` + '/fetchAuthRoles');
    }
    modifyRoleService(modifyRole) {
        return this.http.put(`${this._baseURL}` + `/modifyRole`, modifyRole);
    }
    newmodifyRoleService(modifyRole) {
        return this.http.put(`${this._fmosbaseURL}` + `/modifyRole`, modifyRole);
    }
    verifyRole(roleName, userIdLoggedIn) {
        // return this.http.get(`${this._baseURL}/${roleName}/${userIdLoggedIn}`);
        return this.http.get(`${this._fmosbaseURL}/authorize/${roleName}/${userIdLoggedIn}`);
    }
    deleteRole(roleName, userIdLoggedIn) {
        return this.http.delete(`${this._fmosbaseURL}/${roleName}/${userIdLoggedIn}`, { responseType: 'text' });
    }
    closelockRecord(roleName, userIdLoggedIn) {
        return this.http.get(`${this._fmosbaseURL}/close/${roleName}/${userIdLoggedIn}`);
    }
    reopenRecord(roleName, userIdLoggedIn) {
        return this.http.get(`${this._fmosbaseURL}/reopen/${roleName}/${userIdLoggedIn}`);
    }
    //permission
    getAllPermission() {
        return this.http.get(`${this._baseURL}` + '/permission');
    }
    fetchScreenData() {
        const userIdLoggedIn = localStorage.getItem('userFromLogin');
        return this.http.get(`${this._fmosbaseURL}/allScreenUser/${userIdLoggedIn}`);
    }
    fetchnewscreenlabels() {
        return this.http.get(`${this._fmosbaseURL}` + '/fetchTabLabelAndScreen');
    }
    createnewrole(roledata) {
        return this.http.post(`${this._fmosbaseURL}` + '/saveRoleDetails', roledata);
    }
    fetchfmosroles() {
        const userIdLoggedIn = localStorage.getItem('userFromLogin');
        return this.http.get(`${this._fmosbaseURL}/allRolePermissionForUser/${userIdLoggedIn}`);
    }
    fetchScreenPermissions(screenName) {
        let userPermissions = JSON.parse(localStorage.getItem('userPermissions'));
        console.log('scr', screenName, userPermissions);
        let labellist = [];
        this.screenData = new _models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__.permissionsLabels();
        if (userPermissions) {
            let labelList = userPermissions.labels;
            if (labelList) {
                labelList.sort((a, b) => a.labelId - b.labelId);
            }
            let permissionList = userPermissions.screenAndPermissionsDTO;
            console.log(permissionList);
            if (permissionList) {
                let idexist = permissionList.findIndex(function (item) { return item.screenName.toLowerCase() == screenName.toLowerCase(); });
                if (idexist >= 0) {
                    let rolelist = permissionList[idexist];
                    let screenvisibility = rolelist.permissions.toString();
                    for (let i = 0; i < screenvisibility.length; i++) {
                        if (screenvisibility.charAt(i) == 1) {
                            labelList[i].exist = true;
                            labelList[i].labellowercase = labelList[i].labelName.toLowerCase();
                            labellist.push(labelList[i]);
                            this.screenData[labelList[i].labellowercase] = labelList[i];
                        }
                    } //for loop endng
                } //if screen data exist
            } //if permission list exist
        } //if permissions exist
        console.log('scr', this.screenData);
        this.screenLabelList.next(this.screenData);
    }
    fetchNewRolePermissions(userIdLoggedIn) {
        this.http.get(`${this._fmosbaseURL}/allRolePermissionForUser/${userIdLoggedIn}`).subscribe(data => {
            localStorage.setItem('userPermissions', JSON.stringify(data));
            this.storeuserpermissions = data;
        });
    }
    //dynamic roles
    fetchdynamicrolesdata(roleName) {
        return this.http.get(`${this._fmosbaseURL}/fetchRoleData/${roleName}`);
    }
    //end of dynamic roles
    preparingrolesdata(data) {
        let arrayC = [];
        let arrayB = data.screenDto;
        let labelsarray = data.labelDto;
        let permissionsarray = data.permissionDto;
        //fetch screens for tabs
        data.tabDto.forEach(function (element) {
            let screen = [];
            let screenslist = [];
            //fetching screen list 
            arrayB.forEach((items) => {
                if (element.tabId == items.screensId.tabId) {
                    let idexist = permissionsarray.findIndex(function (item) { return item.permissionId.screenId == items.screensId.screenId; });
                    screen.push(items.screenName);
                    screenslist.push({ screenname: items.screenName, screenid: items.screensId.screenId, permission: permissionsarray[idexist].permissions });
                }
            });
            //end of fetching screen list
            //fetching labels for screen
            let screenvisibility = element.visibility.toString();
            let label = [];
            let labellist = [];
            for (let i = 0; i < screenvisibility.length; i++) {
                if (screenvisibility.charAt(i) == 1) {
                    label.push(labelsarray[i].labelName);
                    labellist.push(labelsarray[i]);
                }
            }
            //end of fetching labels for screen
            arrayC.push({ tabname: element.tabName, screens: screen, screenlist: screenslist, labels: label, labelslist: labellist });
        });
        this.tabData.next(arrayC);
    }
    EnablescreenPermissions() {
        let userPermissions = JSON.parse(localStorage.getItem('userPermissions'));
        let permissionlist = [];
        if (userPermissions) {
            let labelsdata = userPermissions.labels;
            labelsdata.sort((a, b) => a.labelId - b.labelId);
            let screensdata = userPermissions.screenAndPermissionsDTO;
            let viewindex = labelsdata.findIndex(function (item) { return item.labelName.toLowerCase() == 'view'; });
            ;
            for (let i = 0; i < screensdata.length; i++) {
                let data = screensdata[i].permissions.toString();
                if (data.charAt(viewindex) == 1 || data.charAt(viewindex) == "1") {
                    permissionlist.push(screensdata[i].screenName);
                }
            } //for loop endng
        } //if
        console.log("methods are ", permissionlist);
        this.screenwisePermissions.next(permissionlist);
    }
}
RoleService.ɵfac = function RoleService_Factory(t) { return new (t || RoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
RoleService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: RoleService, factory: RoleService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 47819:
/*!*************************************************!*\
  !*** ./src/app/shared/services/rule.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RuleService": function() { return /* binding */ RuleService; }
/* harmony export */ });
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.service */ 31781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 33549);



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
        return this.http.get(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}/ruleConfig/getRuleConfigSummary`);
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
        return this.http.get(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}/msgApi/getTranslation`);
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
        return this.http.get(`${_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL}/msgApi/getAllMapping`);
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

/***/ 67525:
/*!************************************************************!*\
  !*** ./src/app/shared/services/security-policy.service.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecurityPolicyService": function() { return /* binding */ SecurityPolicyService; }
/* harmony export */ });
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 93963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 33549);



class SecurityPolicyService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.MEDIAN_URL;
    }
    saveDataSecurity(obj) {
        console.log(obj);
        return this.httpClient.post(`${this.API_URL}/config/save`, obj);
    }
    fetchSecurityPolicyService() {
        return this.httpClient.get(`${this.API_URL}/config/fetch`);
    }
    getSecurityPolicyForAuth() {
        return this.httpClient.get(`${this.API_URL}/authorization/getSecurityPolicy`);
    }
    getMonitorData() {
        return this.httpClient.get(`${this.API_URL}/excelDataForProcessScreeen/getMonitorData`);
    }
    // fetchSecurityPolicyService() {
    //   return this.httpClient.get<any>(`${API_URL}/securityPolicy/fetch`);
    // }
    changePassword(passwordDTO) {
        return this.httpClient.post(`${this.API_URL}/user/changePassword`, passwordDTO);
    }
}
SecurityPolicyService.ɵfac = function SecurityPolicyService_Factory(t) { return new (t || SecurityPolicyService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
SecurityPolicyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: SecurityPolicyService, factory: SecurityPolicyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 69358:
/*!**********************************************!*\
  !*** ./src/app/views/users/users.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": function() { return /* binding */ API_URL; },
/* harmony export */   "rolepermission": function() { return /* binding */ rolepermission; },
/* harmony export */   "UsersService": function() { return /* binding */ UsersService; }
/* harmony export */ });
/* harmony import */ var src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/config/app.constant */ 91486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 33549);



const API_URL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL;
const rolepermission = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/rolePermission';
class UsersService {
    constructor(http) {
        this.http = http;
    }
    getRoleScreenPermission(userId, screenName, roleName) {
        return this.http.get(`${rolepermission}/getRolePermission/${userId}/${screenName}/${roleName}`);
    }
    getUserAuditService(userId) {
        return this.http.get(`${API_URL}/users/getModifiedUser/${userId}`);
    }
    getUserObjModified(userId) {
        return this.http.get(`${API_URL}/users/getModifiedUser/${userId}`);
    }
    createUserService(user) {
        return this.http.post(`${API_URL}/users/createUser`, user);
    }
    modifyUserService(user) {
        return this.http.post(`${API_URL}/users/modifyUser`, user);
    }
    getAllUsersListService() {
        return this.http.get(`${API_URL}/users/getAllUsers`);
    }
    getAllRoleNameService() {
        return this.http.get(`${API_URL}/users/getAllRoleNames`);
    }
    getAllRoleNameServiceU() {
        return this.http.get(`${API_URL}/users/getAllRoleNamesU`);
    }
    getAllAuthRole() {
        return this.http.get(`${API_URL}/fmsRoles/fetchAllRolesSummary`);
    }
    onClickOfAuthOfUsers(authUser) {
        return this.http.get(`${API_URL}/users/getAllRoleNames`);
    }
    onClickOfOpenOfUsers() {
    }
    onClickOfAuthOfModifyUsers(userId, makerId) {
        return this.http.get(`${API_URL}/users/authorizeUser/${userId}/${makerId}`);
    }
    onClickOfCloseOfModifyUsers(userId, makerId) {
        return this.http.get(`${API_URL}/users/closeUser/${userId}/${makerId}`);
    }
    onClickOfReopenOfModifyUser(userId, makerId) {
        return this.http.get(`${API_URL}/users/reopenUser/${userId}/${makerId}`);
    }
    onClickOfDeleteOfModifyUser(userobjForDelete) {
        return this.http.get(`${API_URL}/users/deleteUser/${userobjForDelete}`);
    }
    statusChangeUser(user_id) {
        return this.http.get(`${API_URL}/users/statusUser/${user_id}`);
    }
    refreshGl() {
        return this.http.get(`${API_URL}/refxch`);
    }
}
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
UsersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map