"use strict";
(self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["common"],{

/***/ 39330:
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/audit-log-status/audit-log-status.component.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuditLogStatusComponent": function() { return /* binding */ AuditLogStatusComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

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

/***/ 15626:
/*!********************************************************!*\
  !*** ./src/app/shared/components/components.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentsModule": function() { return /* binding */ ComponentsModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _audit_log_status_audit_log_status_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./audit-log-status/audit-log-status.component */ 39330);
/* harmony import */ var _otp_otp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./otp/otp.component */ 51492);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);




class ComponentsModule {
}
ComponentsModule.ɵfac = function ComponentsModule_Factory(t) { return new (t || ComponentsModule)(); };
ComponentsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: ComponentsModule });
ComponentsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](ComponentsModule, { declarations: [_audit_log_status_audit_log_status_component__WEBPACK_IMPORTED_MODULE_0__.AuditLogStatusComponent, _otp_otp_component__WEBPACK_IMPORTED_MODULE_1__.OtpComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule], exports: [_audit_log_status_audit_log_status_component__WEBPACK_IMPORTED_MODULE_0__.AuditLogStatusComponent] }); })();


/***/ }),

/***/ 51492:
/*!********************************************************!*\
  !*** ./src/app/shared/components/otp/otp.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "OtpComponent": function() { return /* binding */ OtpComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2316);

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

/***/ 17283:
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

/***/ 27721:
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

/***/ 92803:
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

/***/ 58219:
/*!**************************************************!*\
  !*** ./src/app/shared/services/excel.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExcelService": function() { return /* binding */ ExcelService; }
/* harmony export */ });
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! file-saver */ 97797);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xlsx */ 88031);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);



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

/***/ 10402:
/*!************************************************************!*\
  !*** ./src/app/shared/services/security-policy.service.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SecurityPolicyService": function() { return /* binding */ SecurityPolicyService; }
/* harmony export */ });
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment.prod */ 89019);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76491);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 53882);




class SecurityPolicyService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.MEDIAN_URL;
        this.securityDetailsEdit = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({
            authStatus: '',
            authorizedBy: '',
            authorizedTime: '',
            createdBy: '',
            createdDate: '',
            isActive: '',
            maxInvLogins: '',
            maxPswdLength: '',
            minPswdLength: '',
            passwordGenerationType: '',
            modifiedBy: '',
            modifiedTime: '',
            notifyPasswordExpiryInDays: '',
            pswdComplexLcase: '',
            pswdComplexNum: '',
            pswdComplexSplc: '',
            pswdComplexUcase: '',
            pswdExpiry: '',
            pswdReuseAft: '',
            recordStatus: '',
            version: '',
            firstTimeAuth: ''
        });
    }
    saveDataSecurity(obj) {
        console.log(obj);
        return this.httpClient.post(`${this.API_URL}/securityPolicy/save`, obj);
    }
    setSecurityPolicy(data) {
        this.securityDetailsEdit.next(data);
    }
    getsecurityDetailsEdit() {
        return this.securityDetailsEdit.asObservable();
    }
    fetchSecurityPolicyService() {
        return this.httpClient.get(`${this.API_URL}/securityPolicy/fetch`);
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
    authSecurity(operation, obj) {
        return this.httpClient.put(`${this.API_URL}/securityPolicy/${operation}`, obj);
    }
    getAllSecurityPolicy(pageNo, pageSize, sortBy) {
        return this.httpClient.get(`${this.API_URL}/securityPolicy/getSecurityPolicies?pageNo=${0}&pageSize=${1000}&sortBy=${sortBy}`);
    }
}
SecurityPolicyService.ɵfac = function SecurityPolicyService_Factory(t) { return new (t || SecurityPolicyService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
SecurityPolicyService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: SecurityPolicyService, factory: SecurityPolicyService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 59119:
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
/* harmony import */ var src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/config/app.constant */ 3118);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 53882);



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
        return this.http.get(`${API_URL}/medRoles/fetchAllRolesSummary`);
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