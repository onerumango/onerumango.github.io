"use strict";
(self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_file-upload_file-upload_module_ts"],{

/***/ 9774:
/*!***********************************************************************!*\
  !*** ./src/app/shared/models/excel-data-processing-dto-audit-resp.ts ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExcelDataProcessingAuditRespDTO": function() { return /* binding */ ExcelDataProcessingAuditRespDTO; }
/* harmony export */ });
class ExcelDataProcessingAuditRespDTO {
}


/***/ }),

/***/ 3131:
/*!************************************************************!*\
  !*** ./src/app/shared/models/excel-data-processing-dto.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExcelDataProcessingReqDTO": function() { return /* binding */ ExcelDataProcessingReqDTO; }
/* harmony export */ });
class ExcelDataProcessingReqDTO {
    constructor() {
        this.proceedDuplicates = false;
    }
}


/***/ }),

/***/ 86471:
/*!*****************************************************************!*\
  !*** ./src/app/shared/models/excel-data-processing-resp-dto.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ExcelDataProcessingRespDTO": function() { return /* binding */ ExcelDataProcessingRespDTO; }
/* harmony export */ });
class ExcelDataProcessingRespDTO {
}


/***/ }),

/***/ 33116:
/*!**************************************************!*\
  !*** ./src/app/shared/services/roles.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RoleService": function() { return /* binding */ RoleService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 33549);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 97361);
/* harmony import */ var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/fmosNewRolePermissions */ 91024);
/* harmony import */ var src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/config/app.constant */ 91486);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1858);






class RoleService {
    constructor(http) {
        this.http = http;
        this.username = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('');
        this.tabData = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        //public screenLabelList = new BehaviorSubject([]);
        this.screenLabelList = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels());
        this.labelData = this.screenLabelList.asObservable();
        this.screenData = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels();
        this.screenwisePermissions = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
        this.httpHeader = { header: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({ 'Content-type': 'application/json' }) };
        this._baseURL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_1__.AppConstants.baseURL + '/role';
        this._fmosbaseURL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_1__.AppConstants.baseURL + '/fmsRoles';
        this.baseURL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_1__.AppConstants.baseURL;
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
    fetchNewRolePermissions(userIdLoggedIn) {
        this.http.get(`${this._fmosbaseURL}/allRolePermissionForUser/${userIdLoggedIn}`).subscribe(data => {
            localStorage.setItem('userPermissions', JSON.stringify(data));
            this.storeuserpermissions = data;
        });
    }
    fetchScreenPermissions(screenName) {
        let userPermissions = JSON.parse(localStorage.getItem('userPermissions'));
        console.log('scr', screenName, userPermissions);
        let labellist = [];
        this.screenData = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels();
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

/***/ 78735:
/*!**************************************************!*\
  !*** ./src/app/shared/services/toast.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ToastService": function() { return /* binding */ ToastService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ng2-izitoast */ 97385);


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


/***/ }),

/***/ 3842:
/*!********************************************************************************!*\
  !*** ./src/app/views/file-upload/authorize-excel/authorize-excel.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthorizeExcelComponent": function() { return /* binding */ AuthorizeExcelComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 30759);
/* harmony import */ var src_app_shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/pending-for-auth-dto */ 26193);
/* harmony import */ var src_app_views_users_users_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/views/users/users.dto */ 41725);
/* harmony import */ var src_app_shared_models_audit_logs_dto_first_second__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/audit-logs-dto-first-second */ 35249);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/fmosNewRolePermissions */ 91024);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jspdf-autotable */ 82011);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jspdf */ 73112);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/api.service */ 31781);
/* harmony import */ var src_app_shared_services_roles_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/roles.service */ 33116);
/* harmony import */ var src_app_views_users_users_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/views/users/users.service */ 69358);
/* harmony import */ var src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/excel.service */ 5362);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 78735);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-datatables */ 98546);

















function AuthorizeExcelComponent_tr_29_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuthorizeExcelComponent_tr_29_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); const data_r6 = restoredCtx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r7.queryDetailsDataByParam(data_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, " Get Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](16, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r6.externalSysName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r6.currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r6.inputBy);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r6.batchNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r6.processName);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](16, 8, data_r6.processingDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r6.authStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r6.uploadStatus);
} }
function AuthorizeExcelComponent_tr_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r9.account);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r9.ccyCd);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r9.id.branchCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r9.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r9.lcyEquivalent);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r9.drCr);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r9.exchRate);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r9.relatedAccount);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r9.addlText);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r9.accDesc);
} }
function AuthorizeExcelComponent_button_57_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuthorizeExcelComponent_button_57_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r10.downloadData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Export Excel");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function AuthorizeExcelComponent_button_59_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuthorizeExcelComponent_button_59_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r12.convert(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Export PDF");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function AuthorizeExcelComponent_button_61_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuthorizeExcelComponent_button_61_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r14.approveDetailsData(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Approve and Process ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
function AuthorizeExcelComponent_button_63_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuthorizeExcelComponent_button_63_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r16.reject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Reject ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} }
class AuthorizeExcelComponent {
    constructor(api, roleService, userApi, excelService, toastService) {
        this.api = api;
        this.roleService = roleService;
        this.userApi = userApi;
        this.excelService = excelService;
        this.toastService = toastService;
        this.respArray = [];
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
        this.rejectReason = "Testing";
        this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_3__.permissionsLabels();
        this.approveButtonStatus = true;
        this.spinner = false;
        this.firstAndSecondAuthAuditLogRespDTO = new src_app_shared_models_audit_logs_dto_first_second__WEBPACK_IMPORTED_MODULE_2__.FirstAndSecondAuthAuditLogRespDTO();
        this.excelDataAuthFirstDetails = new src_app_views_users_users_dto__WEBPACK_IMPORTED_MODULE_1__.User();
        this.flag = false;
        this.pendingForAuthData = [];
        this.dummyQenPMJNuqUwhg5W8UMFs66YBXrBVhhZzMFt = new Array();
        this.dummyPendingForAuthDataDetails = [];
        this.items = [10, 20, 30, 40];
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_14__.FormControl('');
        this.button_permission = {};
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe('en-US');
        this.now = Date.now();
        this.dataForProcessScreen = new Array();
        this.dataForProcessScreenSingle = new src_app_shared_models_audit_logs_dto_first_second__WEBPACK_IMPORTED_MODULE_2__.DataForProcessScreen();
        this.dataForProcessScreen1 = [];
    }
    ngOnInit() {
        setTimeout(() => {
            this.newRolePermissions();
        }, 2000);
        this.roleService.screenLabelList.subscribe(message => this.roleCodes = message);
        this.flag = false;
        this.firstLevelAuthorizationStatus = {};
        this.approveButtonStatus = false;
        this.user_id = localStorage.getItem('LoggedInUser').replace(/['"]+/g, '');
        this.role = sessionStorage.getItem('user_role');
        this.getPendingForAuthData();
        this.dummyQenPMJNuqUwhg5W8UMFs66YBXrBVhhZzMFt = new Array();
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true,
            lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]]
        };
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
    screenpermission() {
        this.screenName = 'UploadProcessAuthorization';
        this.userApi.getRoleScreenPermission(this.user_id, this.screenName, this.role).subscribe(res => {
            this.rolepermission = res;
            if (this.rolepermission) {
                this.button_permission = this.rolepermission[0];
            }
        });
    }
    reject() {
        this.reasonBoolean = true;
        if (!this.rejectReason) {
            this.toastService.infoMessage('Enter the reason for Rejection', '');
        }
        console.log("rejectreason" + this.rejectReason);
        if (this.pendingForAuthDetailsDTOList[0].inputBy == this.user_id) {
            this.toastService.errorMessage('Maker cannot reject the record.', '');
            return;
        }
        this.authprocess = true;
        this.approveButtonStatus = false;
        this.deUploadReqDTO = new src_app_shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_0__.DeUploadReqDTO();
        this.deUploadReqDTO.pendingForAuthDTO = this.deUploadPendingForAuthDTO;
        this.deUploadReqDTO.pendingForAuthDetailsDTOList = this.pendingForAuthDetailsDTOList;
        this.api.rejectCallApi(this.deUploadReqDTO, this.user_id, this.rejectReason).subscribe(resp => {
            this.datarejection = resp;
            console.log(this.datarejection);
            if (this.datarejection) {
                this.toastService.successMessage('Rejection successful.', '');
            }
            else {
                this.toastService.errorMessage('Rejection failed.', '');
            }
            this.reasonBoolean = false;
            this.authprocess = false;
        });
        this.getPendingForAuthData();
        this.dummyPendingForAuthDataDetails = [];
        this.dtTrigger.next();
    }
    newRolePermissions() {
        this.roleService.fetchScreenPermissions('Authorize Excel');
    }
    approveDetailsData() {
        if (this.pendingForAuthDetailsDTOList) {
            this.todaydate = this.pipe.transform(this.now, 'dd-MMM-yy');
            this.uploaddate = this.pipe.transform(this.pendingForAuthDetailsDTOList[0].uploadDate, 'dd-MMM-yy');
            console.log('date for compare', this.todaydate, this.uploaddate);
            if (this.todaydate === this.uploaddate) {
            }
            else {
                console.log('inside if');
                this.toastService.errorMessage('Unable to authorized. Backdated authorization not allowed.', '');
                return;
            }
        }
        if (this.pendingForAuthDetailsDTOList[0].inputBy == this.user_id) {
            this.toastService.errorMessage('Maker cannot authorize and process the record.', '');
            return;
        }
        this.authprocess = true;
        this.approveButtonStatus = false;
        this.deUploadReqDTO = new src_app_shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_0__.DeUploadReqDTO();
        this.deUploadReqDTO.pendingForAuthDTO = this.deUploadPendingForAuthDTO;
        this.deUploadReqDTO.pendingForAuthDetailsDTOList = this.pendingForAuthDetailsDTOList;
        console.log('for authorization', this.deUploadReqDTO);
        this.api.approveDetailsData(this.deUploadReqDTO, this.user_id).subscribe(resp => {
            this.firstLevelAuthorizationStatus = resp;
            console.log(this.firstLevelAuthorizationStatus);
            this.authprocess = false;
            if (!this.firstLevelAuthorizationStatus) {
                this.toastService.errorMessage('Data authorization is failed.', '');
                return;
            }
            if (this.firstLevelAuthorizationStatus) {
                this.process = true;
                this.getPendingForAuthData();
                this.approval = false;
                this.Process();
            }
        }, error => {
            this.toastService.errorMessage('Data authorization is failed.', '');
        });
        this.getPendingForAuthData();
        this.dummyPendingForAuthDataDetails = [];
        this.dtTrigger.next();
    }
    Process() {
        this.spinner = true;
        this.deUploadReqDTO = new src_app_shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_0__.DeUploadReqDTO();
        this.deUploadReqDTO.pendingForAuthDTO = this.deUploadPendingForAuthDTO;
        this.deUploadReqDTO.pendingForAuthDetailsDTOList = this.pendingForAuthDetailsDTOList;
        this.flag = false;
        console.log(this.deUploadReqDTO);
        this.api.processDeUploadt(this.deUploadReqDTO, this.user_id).subscribe(resp => {
            this.responseforDE = resp;
            console.log('Response ::' + this.responseforDE);
            if (!this.responseforDE) {
                this.spinner = false;
                this.toastService.errorMessage('Unable to connect core banking. Server Failed to process the request.', '');
            }
            else {
                this.spinner = false;
            }
        });
    }
    getAuditLogData(getDetailsQueryToggleReqDTO) {
        this.api
            .getFirstAndSecondAuthAuditService(this.getDetailsQueryToggleReqDTO)
            .subscribe(resp => {
            this.firstAndSecondAuthAuditLogRespDTO = resp;
        });
    }
    queryDetailsDataByParam(pendingForAuthDTO) {
        this.process = false;
        this.approveButtonStatus = false;
        console.log(pendingForAuthDTO);
        this.spinner1 = true;
        this.remarks = pendingForAuthDTO.remarks;
        this.overrides = pendingForAuthDTO.overrides;
        this.deUploadPendingForAuthDTO = pendingForAuthDTO;
        this.getDetailsQueryToggleReqDTO = new src_app_shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_0__.GetDetailsQueryToggleReqDTO();
        this.getDetailsQueryToggleReqDTO.externalSysName =
            pendingForAuthDTO.externalSysName;
        this.getDetailsQueryToggleReqDTO.processName =
            pendingForAuthDTO.processName;
        this.getDetailsQueryToggleReqDTO.processingDate =
            pendingForAuthDTO.processingDate;
        this.getDetailsQueryToggleReqDTO.currency =
            pendingForAuthDTO.currency;
        this.getDetailsQueryToggleReqDTO.filename =
            pendingForAuthDTO.fileName;
        this.getDetailsQueryToggleReqDTO.batchNumber =
            pendingForAuthDTO.batchNumber;
        this.getDetailsQueryToggleReqDTO.overrides = this.overrides;
        console.log(this.getDetailsQueryToggleReqDTO);
        this.api
            .queryDetailsDataByParamService(this.getDetailsQueryToggleReqDTO)
            .subscribe(resp => {
            console.log("backend row data after query", resp);
            this.pendingForAuthDetailsDTOList = resp;
            if (this.pendingForAuthDetailsDTOList[0].inputBy == this.user_id) {
                console.log(this.user_id);
                console.log("true");
                this.reject1 = true;
            }
            if (this.pendingForAuthDetailsDTOList.length > 0) {
                this.approveButtonStatus = true;
                this.auth = true;
                this.spinner1 = false;
                this.approval = true;
                this.flag = true;
                this.button1 = true;
                this.dummyPendingForAuthDataDetails = this.pendingForAuthDetailsDTOList;
                this.dtTrigger.next();
            }
            else {
                this.toastService.errorMessage('Data Not Found', '');
            }
        });
        this.spinner1 = false;
    }
    getAllDetailsData() {
        this.api.getDetailsListServiceFirst().subscribe(resp => {
            this.queriedPendingForAuthDetailsDTOList = resp;
            this.dummyPendingForAuthDataDetails = this.queriedPendingForAuthDetailsDTOList;
            this.dtTrigger.next();
        });
    }
    getPendingForAuthData() {
        this.api.getPendingForAuthDataFirst(this.user_id).subscribe(resp => {
            this.pendingForAuthData = resp;
            this.dtTrigger.next();
            if (this.pendingForAuthData) {
                if (this.pendingForAuthData.authStatus === 'A') {
                    this.getAllDetailsData();
                    this.process = true;
                }
                else {
                }
            }
        });
    }
    openSnackBar(message, action) {
        this.toastService.infoMessage(message, '');
    }
    openSnackBarLongDuration(message, action) {
        this.toastService.infoMessage(message, '');
    }
    findRowsPerExtSys(extSysName) {
        this.dummyPendingForAuthDataDetails = new Array();
        for (const entry of this.pendingForAuthDetailsDTOList) {
            if (entry.sourceCode === extSysName) {
                this.dummyPendingForAuthDataDetails.push(entry);
            }
        }
        this.dtTrigger.next();
    }
    // openDialog(detailsDto: PendingForAuthDetailsDTO) {
    //   const dialogRef = this.dialog.open(ModalExcelAuthFirstComponent, {
    //     data: detailsDto
    //   });
    //   dialogRef.afterClosed().subscribe(result => {
    //     // console.log(`Dialog result: ${result}`);
    //   });
    // }
    openAuditDetails(detailsDto) {
        this.api.getAuditDataOfDetailsRecord(detailsDto).subscribe(resp => {
            this.medDeUploadDetailHistEntityList = resp;
            // //console.log(this.medDeUploadDetailHistEntityList);
            // const dialogRef = this.dialog.open(ModalAuditTransactionDetailsComponent, {
            //   data: this.medDeUploadDetailHistEntityList
            // });
            // dialogRef.afterClosed().subscribe(result => {
            //   // console.log(`Dialog result: ${result}`);
            // });
        });
    }
    downloadData() {
        this.button1 = false;
        console.log(this.pendingForAuthDetailsDTOList);
        this.pendingForAuthDetailsDTOList.forEach((element) => {
            if (element.drCr == 'C') {
                this.credit = element.lcyEquivalent;
                this.debit = 0;
            }
            else {
                this.debit = element.lcyEquivalent;
                this.credit = 0;
            }
            this.dataForProcessScreen1.push({
                Batch_No: element.id.batchNo,
                //Refrence No : element.id.refNo, // 2 skiiping this user can see this in FlexCube
                Account_Branch: element.accountBranch,
                Account: element.account,
                Acc_Desc: element.accDesc,
                DrCr: element.drCr,
                Trn_Code: element.txnCode,
                Transaction_Desc: element.trnDesc,
                FcyAmount: element.amount,
                Exch_Rate: element.exchRate,
                DrLcyAmt: this.debit,
                CrLcyAmt: this.credit,
                Instr_code: element.instrumentNo,
                Value_Date: this.pipe.transform(element.valueDate, 'dd-MMM-yy'),
                User_Id: element.inputBy,
                Authorizer_ID: element.firstTimeAuthorizer, //16
            });
            console.log(this.dataForProcessScreen1);
        });
        console.log('final data', this.dataForProcessScreen1);
        this.excelService.exportAsExcelFile(this.dataForProcessScreen1, 'Excel_Upload_Data');
        this.dataForProcessScreen1 = [];
    }
    //pdf download
    convert() {
        var doc = new (jspdf__WEBPACK_IMPORTED_MODULE_5___default())({
            orientation: "landscape",
        });
        doc.setFont("helvetica");
        doc.setFontSize("bold");
        doc.setFontSize(9);
        var col = [["BatchNo",
                //Refrence No : // 2 skiiping this, user can see this in FlexCube
                "AccBranch",
                "Acc",
                "AccDesc",
                "DrCr",
                "TrnCode",
                "TrnDesc",
                "FcyAmt",
                "Rate",
                "DrLcyAmt",
                "CrLcyAmt",
                "InstrCode",
                "ValueDate",
                "UserId",
                "AuthId"]]; // 16
        var rows = [];
        console.log(this.pendingForAuthDetailsDTOList);
        var itemNew = this.pendingForAuthDetailsDTOList;
        itemNew.forEach(element => {
            if (element.drCr == 'C') {
                this.pdfCreditVar = element.lcyEquivalent;
                this.pdfDebitVar = 0;
            }
            else {
                this.pdfDebitVar = element.lcyEquivalent;
                this.pdfCreditVar = 0;
            }
            this.valueDate = this.pipe.transform(element.valueDate, 'dd-MMM-yy'); //14
            var date = new Date(element.timeForExport).toLocaleDateString("en-us");
            console.log(date);
            var temp = [element.id.batchNo,
                // Refrence No : element.id.refNo, // 2 skiiping this user can see this in FlexCube
                element.accountBranch,
                element.account,
                element.accDesc,
                element.drCr,
                element.txnCode,
                element.trnDesc,
                element.amount,
                element.exchRate,
                this.pdfDebitVar,
                this.pdfCreditVar,
                element.instrumentNo,
                this.valueDate,
                element.inputBy,
                element.firstTimeAuthorizer]; //16
            rows.push(temp);
        });
        doc.autoTable({
            head: col,
            body: rows,
            theme: 'striped',
            margin: { top: 25, bottom: 15 },
            styles: { overflow: 'linebreak',
                fontSize: 8 },
            showHeader: 'everyPage',
        });
        doc.save('ExcelDAtaAuthFirst.pdf');
    }
}
AuthorizeExcelComponent.ɵfac = function AuthorizeExcelComponent_Factory(t) { return new (t || AuthorizeExcelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_shared_services_roles_service__WEBPACK_IMPORTED_MODULE_7__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_views_users_users_service__WEBPACK_IMPORTED_MODULE_8__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_9__.ExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_10__.ToastService)); };
AuthorizeExcelComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: AuthorizeExcelComponent, selectors: [["npr-authorize-excel"]], decls: 64, vars: 10, consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "pageTitle", "my-3", "text-center"], [1, "dbCardStyle"], ["id", "dbTable1", "datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [1, "btnCol", "mt-md-4", "mt-3"], ["class", "btn smBtn btnDarkGrey", 3, "click", 4, "ngIf"], ["class", "btn smBtn btnPrimary ", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "btn", "smBtn", "btnDarkGrey", 3, "click"], [1, "btn", "smBtn", "btnPrimary", 3, "click"]], template: function AuthorizeExcelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Authorize Excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Pending for Authorization");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11, "process detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "external system");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "updated by");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19, "batch number");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "process name");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, "processing date");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "auth status");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27, "upload status");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](29, AuthorizeExcelComponent_tr_29_Template, 21, 10, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "table", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](35, "account");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](37, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](39, "branch");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](41, "amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](43, "lcy ammount");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](45, "dR/cr");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](47, "exchange rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](49, "related acc");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](51, "add text");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](52, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](53, "account description");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](54, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](55, AuthorizeExcelComponent_tr_55_Template, 21, 10, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](56, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](57, AuthorizeExcelComponent_button_57_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](58, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](59, AuthorizeExcelComponent_button_59_Template, 2, 0, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](60, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](61, AuthorizeExcelComponent_button_61_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](62, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](63, AuthorizeExcelComponent_button_63_Template, 2, 0, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.pendingForAuthData);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.dummyPendingForAuthDataDetails);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.button1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.button1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.approveButtonStatus && ctx.roleCodes.auth);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.approveButtonStatus && ctx.roleCodes.auth);
    } }, directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_11__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRob3JpemUtZXhjZWwuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 13908:
/*!*****************************************************************!*\
  !*** ./src/app/views/file-upload/file-upload-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUploadRoutingModule": function() { return /* binding */ FileUploadRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-upload/file-upload.component */ 32174);
/* harmony import */ var _rejection_queue_rejection_queue_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rejection-queue/rejection-queue.component */ 11123);
/* harmony import */ var _authorize_excel_authorize_excel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./authorize-excel/authorize-excel.component */ 3842);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1858);






const routes = [
    {
        path: "",
        component: _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_0__.FileUploadComponent
    },
    {
        path: "rejection_queue",
        component: _rejection_queue_rejection_queue_component__WEBPACK_IMPORTED_MODULE_1__.RejectionQueueComponent
    },
    {
        path: "authorize_excel",
        component: _authorize_excel_authorize_excel_component__WEBPACK_IMPORTED_MODULE_2__.AuthorizeExcelComponent
    }
];
class FileUploadRoutingModule {
}
FileUploadRoutingModule.ɵfac = function FileUploadRoutingModule_Factory(t) { return new (t || FileUploadRoutingModule)(); };
FileUploadRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: FileUploadRoutingModule });
FileUploadRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](FileUploadRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 47799:
/*!*********************************************************!*\
  !*** ./src/app/views/file-upload/file-upload.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUploadModule": function() { return /* binding */ FileUploadModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _file_upload_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./file-upload-routing.module */ 13908);
/* harmony import */ var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./file-upload/file-upload.component */ 32174);
/* harmony import */ var _rejection_queue_rejection_queue_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rejection-queue/rejection-queue.component */ 11123);
/* harmony import */ var _authorize_excel_authorize_excel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authorize-excel/authorize-excel.component */ 3842);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ 98546);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1858);








class FileUploadModule {
}
FileUploadModule.ɵfac = function FileUploadModule_Factory(t) { return new (t || FileUploadModule)(); };
FileUploadModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: FileUploadModule });
FileUploadModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _file_upload_routing_module__WEBPACK_IMPORTED_MODULE_0__.FileUploadRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_4__.DataTablesModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](FileUploadModule, { declarations: [_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_1__.FileUploadComponent,
        _rejection_queue_rejection_queue_component__WEBPACK_IMPORTED_MODULE_2__.RejectionQueueComponent,
        _authorize_excel_authorize_excel_component__WEBPACK_IMPORTED_MODULE_3__.AuthorizeExcelComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _file_upload_routing_module__WEBPACK_IMPORTED_MODULE_0__.FileUploadRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_4__.DataTablesModule] }); })();


/***/ }),

/***/ 32174:
/*!************************************************************************!*\
  !*** ./src/app/views/file-upload/file-upload/file-upload.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FileUploadComponent": function() { return /* binding */ FileUploadComponent; },
/* harmony export */   "ResponseData": function() { return /* binding */ ResponseData; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 52682);
/* harmony import */ var src_app_shared_models_excel_data_processing_resp_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/excel-data-processing-resp-dto */ 86471);
/* harmony import */ var src_app_shared_models_excel_data_processing_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/excel-data-processing-dto */ 3131);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var ngx_dialogs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-dialogs */ 92676);
/* harmony import */ var src_app_shared_models_excel_data_processing_dto_audit_resp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/models/excel-data-processing-dto-audit-resp */ 9774);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 33549);
/* harmony import */ var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/models/fmosNewRolePermissions */ 91024);
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment.prod */ 93963);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/api.service */ 31781);
/* harmony import */ var src_app_views_users_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/views/users/users.service */ 69358);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 78735);
/* harmony import */ var src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/excel.service */ 5362);
/* harmony import */ var src_app_shared_services_roles_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared/services/roles.service */ 33116);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 869);



















function FileUploadComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function FileUploadComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r7.refreshGl(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Refresh CCY Rate");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function FileUploadComponent_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const extSysName_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", extSysName_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](extSysName_r9);
} }
function FileUploadComponent_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const processName_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", processName_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](processName_r10);
} }
function FileUploadComponent_option_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trncode_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", trncode_r11.trnCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", trncode_r11.trnDesc, " ", trncode_r11.trnCode, "");
} }
function FileUploadComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "File Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keypress", function FileUploadComponent_div_35_Template_input_keypress_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r12.valuechange($event); })("keyup", function FileUploadComponent_div_35_Template_input_keyup_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r14.fun(ctx_r14.excelDataProcessingReqDTO.fileName); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function FileUploadComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function FileUploadComponent_div_36_Template_input_change_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r15.getFiledata($event, ctx_r15.uploadExcelForm.get("extSysNameData").value, ctx_r15.uploadExcelForm.get("processNameData").value, ctx_r15.uploadExcelForm.get("fileName").value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} }
function FileUploadComponent_div_50_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "h2", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "File Upload Summary");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Batch Number");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Total No Of records");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "Total Debit Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "Total Credit Amount");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "Sum (Credit - Debit)");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "label", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "Value Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "Remarks");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](38, "textarea", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "Overrides");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "textarea", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function FileUploadComponent_div_50_Template_button_click_46_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r17.Datacheck(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](47, "Process");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function FileUploadComponent_div_50_Template_button_click_49_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r19.deleteDataService(ctx_r19.uploadExcelForm.get("remarks").value); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](50, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "View Excel");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function FileUploadComponent_div_50_Template_button_click_55_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r18); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](); return ctx_r20.exit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56, "Hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r6.responseDto.batchNo);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r6.responseDto.totalNoOfRecords);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r6.responseDto.totalDebitAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r6.responseDto.totalCreditAmount, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r6.responseDto.sumAmount);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r6.valueDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r6.responseDto.overrideMessage);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r6.flag);
} }
const _c0 = function () { return ["/dashboard"]; };
class FileUploadComponent {
    constructor(api, userApi, fb, toastService, excelService, roleService) {
        this.api = api;
        this.userApi = userApi;
        this.fb = fb;
        this.toastService = toastService;
        this.excelService = excelService;
        this.roleService = roleService;
        this.allExternalSystemNames = [];
        this.space = false;
        this.excelDataProcessingAuditlog = new src_app_shared_models_excel_data_processing_dto_audit_resp__WEBPACK_IMPORTED_MODULE_2__.ExcelDataProcessingAuditRespDTO();
        this.allFileNames = [];
        this.selectorDateData = new Date();
        this.selected = 'option2';
        this.listMedMaster = new Array();
        this.excelDataProcessingRespDTO = new src_app_shared_models_excel_data_processing_resp_dto__WEBPACK_IMPORTED_MODULE_0__.ExcelDataProcessingRespDTO();
        this.excelDataProcessingReqDTO = new src_app_shared_models_excel_data_processing_dto__WEBPACK_IMPORTED_MODULE_1__.ExcelDataProcessingReqDTO();
        this.button_permission = {};
        this.button = true;
        this.flag = false;
        this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe('en-US');
        this.now = Date.now();
        this.myFormattedDate = this.pipe.transform(this.now, 'dd-MMM-yy');
        this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_3__.permissionsLabels();
        this.dataForProcessScreen1 = [];
    }
    ngOnInit() {
        console.log(this.myFormattedDate);
        this.uploadExcelForm = this.fb.group({
            extSysNameData: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            processNameData: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            selectorDateData: [""],
            trncode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            fileName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
            remarks: [""]
        });
        setTimeout(() => {
            this.newRolePermissions();
        }, 2000);
        this.roleService.screenLabelList.subscribe(message => this.roleCodes = message);
        this.user_id = sessionStorage.getItem('user_id');
        this.user_id = "GOKUL";
        this.role = sessionStorage.getItem('user_role');
        //this.screenpermission();
        this.getTrnCodeArray();
        this.extSysNameData = '';
        this.processNameData = '';
        this.fileNameData = '';
        this.getAllExternalSystemNames();
        console.log('user id', this.user_id);
    }
    getAuditLogData(excelDataProcessingReqDTO) {
        this.api.getAuditLogService(excelDataProcessingReqDTO, this.user_id).subscribe(resp => {
            this.excelDataProcessingAuditlog = resp;
            if (this.excelDataProcessingAuditlog) {
                this.auditdata = true;
                if (this.excelDataProcessingAuditlog.recordStatus === 'P') {
                    this.excelDataProcessingAuditlog.recordStatus = 'PROCESSED';
                }
                if (this.excelDataProcessingAuditlog.recordStatus === 'D') {
                    this.excelDataProcessingAuditlog.recordStatus = 'DELETED';
                }
                if (this.excelDataProcessingAuditlog.recordStatus === 'U') {
                    this.excelDataProcessingAuditlog.recordStatus = 'UNPROCESSED';
                }
            }
        });
    }
    refreshGl() {
        const url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__.environment.MEDIAN_URL;
        this.userApi.refreshGl().subscribe(data => {
            this.data = data;
            console.log(this.data);
        });
    }
    newRolePermissions() {
        this.roleService.fetchScreenPermissions('Upload Excel');
    }
    doFirstValidation() {
        this.button = false;
        this.uploadExcelForm.get('selectorDateData').setValue(new Date());
        console.log('method call');
        if (!this.uploadExcelForm.get('trncode').value) {
            this.toastService.infoMessage('Enter Data for Trnsaction Code.', '');
            return;
        }
        if (this.enablefilebrowser) {
            if (!this.selectedFiles) {
                this.toastService.infoMessage('Please select a file to upload.', '');
                return;
            }
        }
        this.spinner = true;
        if (this.uploadExcelForm.invalid) {
            this.spinner = false;
            this.toastService.infoMessage('Please fill all the details', '');
        }
        else {
            this.disbaleBtn = true;
            // const dateString = '2022-11-16T00:00:00';
            const newDate = new Date();
            this.excelDataProcessingReqDTO.extSysName = this.uploadExcelForm.get('extSysNameData').value;
            this.excelDataProcessingReqDTO.processName = this.uploadExcelForm.get('processNameData').value;
            this.excelDataProcessingReqDTO.processingDate = newDate;
            this.excelDataProcessingReqDTO.trnCode = this.uploadExcelForm.get('trncode').value;
            this.excelDataProcessingReqDTO.fileName = this.uploadExcelForm.get('fileName').value;
            this.api
                .showDetailServiceInExcelDataProcessing(this.excelDataProcessingReqDTO, this.user_id)
                .subscribe(responseforfileupload => {
                this.responseforfileupload = responseforfileupload;
                console.log("response from bc", this.responseforfileupload);
                console.log(this.responseforfileupload.respDto.batchNo);
                console.log(this.responseforfileupload.respDto);
                this.spinner = false;
                this.disbaleBtn = false;
                this.disablebtn2 = false;
                if (this.responseforfileupload == null) {
                    this.toastService.errorMessage('Server error.', '');
                    return;
                }
                this.spinner = false;
                if (this.responseforfileupload.respDto.errorMessage) {
                    console.log("here is error of duplicate record");
                    this.disablebtn2 = true;
                    this.toastService.errorMessage('Unable to upload', 'Error: ' + this.responseforfileupload.respDto.errorMessage);
                    if (this.responseforfileupload.respDto.errorMessage === "possible duplicate data") {
                        this.excelDataProcessingReqDTO.proceedDuplicates = true;
                        console.log("here duplicate");
                        let showDialog = new ngx_dialogs__WEBPACK_IMPORTED_MODULE_13__.Ngxalert();
                        showDialog.create({
                            title: 'You are trying to upload duplicate data. ',
                            message: 'Do you want to proceed?',
                            confirm: () => {
                                this.api.showDetailServiceInExcelDataProcessing(this.excelDataProcessingReqDTO, this.user_id).subscribe(dupliacteResp => {
                                    console.log("dupliacteResp", dupliacteResp);
                                    this.responseforfileupload = dupliacteResp;
                                    this.responseDto = this.responseforfileupload.respDto;
                                    if (this.responseforfileupload.respDto.errorMessage === "Amount and LCY amount mismatch") {
                                        this.toastService.errorMessage('Unable to upload. ', 'Error: ' + this.responseforfileupload.respDto.errorMessage);
                                    }
                                    if (this.responseDto.totalNoOfRecords !== 0) {
                                        this.toastService.successMessage('Data uploaded successfully', 'For the Batch ' + this.responseDto.batchNo);
                                        this.excelFileFlag = true;
                                        console.log("excelFileFlag value ", this.excelFileFlag);
                                        this.flag = false;
                                        this.isShow = true;
                                    }
                                    console.log("________", this.responseforfileupload.respDto.errorMessage);
                                });
                            },
                        });
                    }
                    this.flag = true;
                    this.disbaleBtn = true;
                }
                if (this.responseforfileupload.excelData) {
                    console.log('value date', this.pipe.transform(this.responseforfileupload.excelData[0].valueDate, 'dd-MMM-yy'));
                    d: new Date();
                    console.log(this.pipe.transform(new Date(), 'dd-MMM-yy'));
                    this.a = this.pipe.transform(this.responseforfileupload.excelData[0].valueDate, 'dd-MMM-yy');
                    this.b = this.pipe.transform(new Date(), 'dd-MMM-yy');
                    console.log("inside second if of value date");
                    console.log('value date', this.responseforfileupload.excelData[0].valueDate);
                    console.log('a', this.a);
                    console.log('b', this.b);
                    if (this.a == this.b) {
                        this.valueDate = "Today";
                    }
                    else {
                        this.valueDate = "not Today";
                    }
                    console.log(this.valueDate);
                    this.spinner = false;
                    this.responsebutton = true;
                    this.spinner = false;
                    this.responseDto = this.responseforfileupload.respDto;
                    if (this.responseDto.totalNoOfRecords !== 0) {
                        this.toastService.successMessage('Data uploaded successfully', 'For the Batch ' + this.responseDto.batchNo);
                        this.excelFileFlag = true;
                        console.log("excelFileFlag value ", this.excelFileFlag);
                        this.flag = false;
                        this.isShow = true;
                    }
                    console.log("________", this.responseforfileupload.respDto.errorMessage);
                }
            }, (err) => {
                this.toastService.errorMessage('Server error.', '');
            });
        }
    }
    getAllExternalSystemNames() {
        this.api.getAllExtSysNamesService(this.user_id).subscribe(resp => {
            this.allExternalSystemNames = resp;
        });
    }
    resetEntries() {
        this.uploadExcelForm.reset();
        this.extSysNameData = '';
        this.processNameData = '';
        this.fileNameData = '';
        this.trncode = '';
        this.enablefilebrowser = false;
        this.button = true;
        this.disablebtn2 = false;
        this.excelDataProcessingReqDTO.fileName = '';
        this.disbaleBtn = false;
        this.excelDataProcessingReqDTO.proceedDuplicates = false;
    }
    delay(ms) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__awaiter)(this, void 0, void 0, function* () {
            yield new Promise(resolve => setTimeout(resolve, ms)).then(() => console.log('fired'));
        });
    }
    valuechange($event) {
        if (this.disablebtn2) {
            this.disbaleBtn = false;
        }
        console.log('event', this.disablebtn2);
    }
    getFileNamesBasedOnExtSysNameAndProcessName(extSysName, processName) {
        if (this.disablebtn2) {
            this.disbaleBtn = false;
        }
        this.api.getUploadPermission(extSysName, processName).subscribe(resp => {
            this.permission = resp;
            if (this.permission[0] == 'false') {
                this.enablefilebrowser = true;
            }
            else {
                this.enablefilebrowser = false;
            }
        });
    }
    getProcessNamesBasedOnExtSysNameForUpload(extSysName) {
        if (this.disablebtn2) {
            this.disbaleBtn = false;
        }
        this.api
            .getProcessNamesBasedOnExtSysNameService(extSysName)
            .subscribe(resp => {
            this.processNames = resp;
        });
    }
    getTrnCode(trncode) {
        if (this.disablebtn2)
            this.disbaleBtn = false;
    }
    getTrnCodeArray() {
        this.api.getAllTransactionCode(this.user_id).subscribe(res => {
            this.trnCodeArray = res;
            console.log(this.trnCodeArray);
        });
    }
    deleteDataService(remarks) {
        this.flag = false;
        this.toastService.successMessage('Data deleted successfully.', '');
        this.exit();
    }
    Datacheck() {
        console.log("valueDate", this.valueDate);
        if (this.valueDate != "Today") {
            this.processDataService();
        }
        else {
            if (this.responseDto.totalNoOfRecords == 0) {
                this.toastService.errorMessage('Unable to process.', 'Total no. of record is 0.');
                return;
            }
            if (!this.uploadExcelForm.get('remarks').value) {
                this.toastService.errorMessage('Remark is mandatory for process.', '');
                return;
            }
            this.flag = true;
            this.api.processDataService(this.responseforfileupload, this.user_id, this.uploadExcelForm.get('remarks').value).subscribe(resp => {
                this.processDataStatus = resp;
                console.log('this.processDataStatus');
                if (this.processDataStatus) {
                    this.toastService.successMessage('Data processed successfully', 'For the Batch ' + this.responseDto.batchNo);
                    this.isShow = true;
                }
                else {
                    this.toastService.errorMessage('Unable to process.', '');
                }
            });
        }
    }
    processDataService() {
        let showDialog = new ngx_dialogs__WEBPACK_IMPORTED_MODULE_13__.Ngxalert();
        showDialog.create({
            title: 'Value Date is ' + this.responseDto.valueDate + ' in few or all uploading records.',
            message: 'Do you want to proceed?',
            confirm: () => {
                console.log('user choose to proceed.');
                if (this.responseDto.totalNoOfRecords == 0) {
                    this.toastService.errorMessage('Unable to process.', 'Total no. of record is 0.');
                    return;
                }
                if (!this.uploadExcelForm.get('remarks').value) {
                    this.toastService.errorMessage('Remark is mandatory for process.', '');
                    return;
                }
                this.flag = true;
                this.api.processDataService(this.responseforfileupload, this.user_id, this.uploadExcelForm.get('remarks').value).subscribe(resp => {
                    this.processDataStatus = resp;
                    console.log('this.processDataStatus');
                    if (this.processDataStatus) {
                        this.toastService.successMessage('Data processed successfully', 'For the Batch ' + this.responseDto.batchNo);
                        this.isShow = true;
                    }
                    else {
                        this.toastService.errorMessage('Unable to process.', '');
                    }
                });
            },
        });
    }
    testAlert() {
        this.api.test(this.user_id).subscribe(resp => {
            this.test = this.test;
            console.log(this.test);
        });
    }
    downloadData() {
        console.log('response', this.responseforfileupload.excelData);
        this.responseforfileupload.excelData.forEach(element => {
        });
        console.log('data for down', this.responseforfileupload.excelData);
        this.responseforfileupload.excelData.forEach(element => {
            console.log(element.id.sourceCode);
            console.log(element);
            if (element.drCr == 'C') {
                this.credit = element.lcyEquivalent;
                this.debit = 0;
            }
            else {
                this.debit = element.lcyEquivalent;
                this.credit = 0;
            }
            this.dataForProcessScreen1.push({
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
                DrLcyAmt: this.debit,
                CrLcyAmt: this.credit,
                Instr_code: element.instrumentNo,
                'Value_Date': this.pipe.transform(element.valueDate, 'dd-MMM-yy'),
                User_Id: element.inputBy,
                Authorizer_ID: element.firstTimeAuthorizer,
                //below fields we are showing only when upload excel failes to upload file else it show below fields in report 
                Validation_Error: element.validationError,
                Error_Desc: element.errorDesc, //18 
            });
            console.log(this.dataForProcessScreen1, 'screen', this.excelFileFlag);
            if (this.excelFileFlag) {
                for (let i = 0; i < this.dataForProcessScreen1.length; i++) {
                    delete this.dataForProcessScreen1[i].Validation_Error;
                    delete this.dataForProcessScreen1[i].Error_Desc;
                } //for loop endning
            }
            else {
            }
        });
        console.log('final data', this.dataForProcessScreen1);
        this.excelService.exportAsExcelFile(this.dataForProcessScreen1, this.excelDataProcessingReqDTO.fileName);
        this.dataForProcessScreen1 = [];
    }
    exit() {
        this.responsebutton = false;
    }
    checkCheckBoxvalue(event) {
        if (this.permission[0] == 'false') {
            if (!this.enablefilebrowser) {
                this.enablefilebrowser = true;
            }
            else {
                this.enablefilebrowser = false;
            }
        }
    }
    getFiledata(event, extSysNameData, processNameData, filename) {
        console.log(event.target.value);
        console.log(event, extSysNameData, processNameData, filename);
        if (!filename) {
            this.toastService.errorMessage('Enter the file name', '');
            this.resetEntries();
            return;
        }
        if (!extSysNameData && !processNameData && !filename) {
            this.toastService.errorMessage('Enter all the field', '');
        }
        console.log('getFiledatafilename', filename);
        this.selectedFiles = event.target.files;
        this.api
            .showDetailServiceInExcelDataWithFile(this.selectedFiles.item(0), extSysNameData, processNameData, filename)
            .subscribe(responseforfileupload => {
            this.responseforfileupload = responseforfileupload;
            if (event) {
                if (event.status == 200) {
                    if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpResponse) {
                        this.toastService.infoMessage(event.body, '');
                    }
                }
            }
        });
    }
    fun(extSysName) {
        console.log(extSysName);
        console.log("enters inside fn");
        const result = extSysName.trim();
        console.log(result);
        if (result) {
            console.log("valid string");
            this.space = true;
            console.log(this.space);
        }
        else {
            console.log("invalid string");
            this.space = false;
            console.log(this.space);
        }
    }
}
FileUploadComponent.ɵfac = function FileUploadComponent_Factory(t) { return new (t || FileUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_views_users_users_service__WEBPACK_IMPORTED_MODULE_6__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_7__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_8__.ExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_roles_service__WEBPACK_IMPORTED_MODULE_9__.RoleService)); };
FileUploadComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: FileUploadComponent, selectors: [["npr-file-upload"]], decls: 51, vars: 10, consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], [1, "col-auto"], ["class", "btn smBtn minWdSmBtn btnPrimary", 3, "click", 4, "ngIf"], [1, "row", "gy-4", "align-items-end"], [1, "col-lg-4"], ["for", "extSystem", 1, "formLbl"], ["formControlName", "extSysNameData", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "processNameData", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["for", "transactionDate", 1, "formLbl"], ["id", "transactionDate", "formControlName", "selectorDateData", "type", "text", "value", "", 1, "form-control"], ["formControlName", "trncode", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["class", "col-lg-4", 4, "ngIf"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-4"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["type", "reset", 1, "btn", "smBtn", "minWdSmBtn", "btnDarkGrey"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [1, "titleStyle", "mt-2", "mb-4", "text-end"], [1, "pageTitle", "darkgreyClr"], ["class", "dbCardStyle", 4, "ngIf"], [3, "value"], ["required", "", "id", "fileName", "formControlName", "fileName", "type", "text", "value", "", 1, "form-control", 3, "keypress", "keyup"], [1, "fileUpload"], [1, "formS"], ["data-text", "File Upload", 1, "file-upload-wrapper"], ["name", "file-upload-field", "type", "file", "value", "", 1, "file-upload-field", 3, "change"], [1, "titleStyle", "mt-2", "mb-4"], [1, "row", "gy-4"], ["for", "codeLbl", 1, "formLbl"], [1, "readonlyText"], [1, "col-lg-6"], ["for", "remarks", 1, "formLbl"], ["id", "remarks", "formControlName", "remarks", "rows", "3", "placeholder", "External System", 1, "form-control", "textAreaCol"], ["for", "overrides", 1, "formLbl"], ["id", "exampleFormControlTextarea1", "rows", "3", 1, "form-control", "textAreaCol"], [1, "row", "g-3", "pb-3", "pt-4", "justify-content-end"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", "btnLight", 3, "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnDarkGrey"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "click"]], template: function FileUploadComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "Upload Excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](8, FileUploadComponent_button_8_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "External System");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "select", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function FileUploadComponent_Template_select_change_13_listener($event) { return ctx.getProcessNamesBasedOnExtSysNameForUpload($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](14, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](15, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](16, FileUploadComponent_option_16_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19, "Process Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "select", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function FileUploadComponent_Template_select_change_20_listener($event) { return ctx.getFileNamesBasedOnExtSysNameAndProcessName(ctx.uploadExcelForm.get("extSysNameData").value, $event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](23, FileUploadComponent_option_23_Template, 2, 2, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "Transaction Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](27, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "Transaction Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "select", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function FileUploadComponent_Template_select_change_31_listener($event) { return ctx.getTrnCode($event.target.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](34, FileUploadComponent_option_34_Template, 2, 3, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](35, FileUploadComponent_div_35_Template, 4, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](36, FileUploadComponent_div_36_Template, 5, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function FileUploadComponent_Template_button_click_39_listener() { return ctx.doFirstValidation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "Upload Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43, "Reset");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](46, "Exit");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](48, "h2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](49, "Final excel report can be downloaded from Process Excel Screen.");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](50, FileUploadComponent_div_50_Template, 57, 8, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.uploadExcelForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.roleCodes.new);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.allExternalSystemNames);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.processNames);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.trnCodeArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.enablefilebrowser);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.enablefilebrowser);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.responsebutton);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_router__WEBPACK_IMPORTED_MODULE_16__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RequiredValidator], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyJ9 */"] });
class ResponseData {
}


/***/ }),

/***/ 11123:
/*!********************************************************************************!*\
  !*** ./src/app/views/file-upload/rejection-queue/rejection-queue.component.ts ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RejectionQueueComponent": function() { return /* binding */ RejectionQueueComponent; }
/* harmony export */ });
/* harmony import */ var src_app_shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/pending-for-auth-dto */ 26193);
/* harmony import */ var src_app_shared_models_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/users */ 19307);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 30759);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jspdf-autotable */ 82011);
/* harmony import */ var jspdf_autotable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jspdf */ 73112);
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/api.service */ 31781);
/* harmony import */ var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/toast.service */ 78735);
/* harmony import */ var src_app_views_users_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/views/users/users.service */ 69358);
/* harmony import */ var src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/excel.service */ 5362);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-datatables */ 98546);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 7005);

// import { ModalTransactionsDetailEditableComponent } from '../modals/modal-transactions-detail-editable/modal-transactions-detail-editable.component';











function RejectionQueueComponent_tr_27_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RejectionQueueComponent_tr_27_Template_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4); const data_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r3.queryDetailsDataByParam(data_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, " Get Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](12, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r2.externalSysName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r2.batchNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r2.processName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](12, 8, data_r2.processingDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r2.fileName);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r2.totalNoOfRecord);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r2.totalCredit);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r2.totalDebit);
} }
function RejectionQueueComponent_tr_53_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RejectionQueueComponent_tr_53_Template_button_click_18_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7); const data_r5 = restoredCtx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r6.openDialog(data_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, " Edit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r5.account);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r5.ccyCd);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r5.id.branchCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r5.amount);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r5.lcyEquivalent);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r5.drCr);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r5.exchRate);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r5.accDesc);
} }
class RejectionQueueComponent {
    constructor(api, toastService, userApi, excelService) {
        this.api = api;
        this.toastService = toastService;
        this.userApi = userApi;
        this.excelService = excelService;
        this.respArray = [];
        this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
        this.pendingForAuthData = [];
        this.PendingForAuthDetailsDTOList = [];
        this.flag = true;
        this.dataModificationDetailsAuditLog = new src_app_shared_models_users__WEBPACK_IMPORTED_MODULE_1__.User();
    }
    queryDetailsDataByParam(pendingForAuthDTO) {
        this.spinner1 = true;
        this.getDetailsQueryToggleReqDTO = new src_app_shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_0__.GetDetailsQueryToggleReqDTO();
        this.getDetailsQueryToggleReqDTO.externalSysName =
            pendingForAuthDTO.externalSysName;
        this.getDetailsQueryToggleReqDTO.processName =
            pendingForAuthDTO.processName;
        this.getDetailsQueryToggleReqDTO.processingDate =
            pendingForAuthDTO.processingDate;
        this.getDetailsQueryToggleReqDTO.currency = pendingForAuthDTO.currency;
        this.getDetailsQueryToggleReqDTO.filename = pendingForAuthDTO.fileName;
        this.getDetailsQueryToggleReqDTO.batchNumber = pendingForAuthDTO.batchNumber;
        this.api
            .queryFailedDetailsDataByParamService(this.getDetailsQueryToggleReqDTO)
            .subscribe(resp => {
            this.PendingForAuthDetailsDTOList = resp;
            this.dtTrigger.next();
            console.log(this.PendingForAuthDetailsDTOList);
            if (this.PendingForAuthDetailsDTOList) {
                console.log(this.PendingForAuthDetailsDTOList[0].inputBy);
                this.audit = true;
                this.flag = true;
                this.dataAvail = true;
                this.spinner1 = false;
            }
            else {
                this.toastService.errorMessage('No Data ', '');
            }
        });
    }
    ngOnInit() {
        this.PendingForAuthDetailsDTOList = {};
        this.user_id = localStorage.getItem('user_id');
        this.role = sessionStorage.getItem('user_role');
        this.getPendingForAuthData();
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            processing: true,
            lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]]
        };
    }
    ngOnDestroy() {
        this.dtTrigger.unsubscribe();
    }
    screenpermission() {
        this.screenName = 'DataModificationDetails';
        this.userApi.getRoleScreenPermission(this.user_id, this.screenName, this.role).subscribe(res => {
            this.rolepermission = res;
            console.log(this.rolepermission);
            if (this.rolepermission) {
                this.button_permission = this.rolepermission[0];
                console.log(this.button_permission);
            }
        });
    }
    getPendingForAuthData() {
        this.api.getPendingForAuthDataForModification(this.user_id).subscribe(resp => {
            this.pendingForAuthData = resp;
            this.dtTrigger.next();
            console.log(this.pendingForAuthData);
        });
    }
    openSnackBar(message, action) {
        this.toastService.infoMessage(message, '');
    }
    approveAndProcess() {
        this.flag = false;
        this.api.excelModifyAuthorization(this.PendingForAuthDetailsDTOList, this.user_id).subscribe(authRes => {
            this.authRes = authRes;
            console.log(this.authRes);
            if (this.authRes) {
                this.toastService.infoMessage('Data Send for Authorization. After Authorization you can process the data.', '');
            }
            else {
                this.toastService.errorMessage('Authorization Failed.', '');
            }
        });
    }
    getAllDetailsData() {
        this.api.getFailedDetailsListService().subscribe(resp => {
            this.PendingForAuthDetailsDTOList = resp;
            this.dtTrigger.next();
        });
    }
    openDialog(detailsDto) {
        console.log(detailsDto);
        // const dialogRef = this.dialog.open(
        //   ModalTransactionsDetailEditableComponent,
        //   {
        //     data: detailsDto
        //   }
        // );
        // dialogRef.afterClosed().subscribe(result => {
        //   // console.log(`Dialog result: ${result}`);
        // });
    }
    downloadData() {
        this.modify = true;
        console.log('response' + this.PendingForAuthDetailsDTOList);
        this.excelService.exportAsExcelFile(this.PendingForAuthDetailsDTOList, 'Excel_Error_Auth');
    }
    //downloding records in pdf
    convert() {
        var doc = new (jspdf__WEBPACK_IMPORTED_MODULE_3___default())();
        var col = [["Account", "Amount", "txnCode", "exchRate", "valueDate", "deleteStat"]];
        var rows = [];
        /* The following array of object as response from the API req  */
        var itemNew = this.PendingForAuthDetailsDTOList;
        itemNew.forEach(element => {
            // var date = new Date(element.timeForExport).toLocaleDateString("en-us");
            //  console.log(date)
            var temp = [element.account, element.amount, element.txnCode, element.exchRate, element.valueDate, element.deleteStat];
            rows.push(temp);
        });
        //doc.autoTable(col, rows);
        doc.autoTable({
            head: col,
            body: rows
        });
        doc.save('Excel.pdf');
    }
}
RejectionQueueComponent.ɵfac = function RejectionQueueComponent_Factory(t) { return new (t || RejectionQueueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_5__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_views_users_users_service__WEBPACK_IMPORTED_MODULE_6__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_7__.ExcelService)); };
RejectionQueueComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: RejectionQueueComponent, selectors: [["npr-rejection-queue"]], decls: 61, vars: 6, consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], ["id", "dbTable1", "datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [1, "pageTitle", "my-3", "text-center"], [1, "btnCol", "mt-md-4", "mt-3"], [1, "btn", "smBtn", "btnDarkGrey", 3, "click"], ["mat-raised-button", "", "color", "primary", 2, "height", "90%", 3, "click"], [3, "click"]], template: function RejectionQueueComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Rejection Queue");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](9, "process detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](11, "external system");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "batch number");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15, "process name");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](17, "processing date");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "file name");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "total record");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "total credit");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25, "total debit");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, RejectionQueueComponent_tr_27_Template, 21, 10, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "Failed Data");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, "account");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, "branch");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, "amount");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, "lcy ammount");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45, "dR/cr");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, "exchange rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49, "account description");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51, "Process");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](53, RejectionQueueComponent_tr_53_Template, 20, 8, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RejectionQueueComponent_Template_button_click_55_listener() { return ctx.downloadData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](56, "Export Excel");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](57, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RejectionQueueComponent_Template_button_click_58_listener() { return ctx.convert(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](59, "Export PDF");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](60, "\u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.pendingForAuthData);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.PendingForAuthDetailsDTOList);
    } }, directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_8__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWplY3Rpb24tcXVldWUuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 41725:
/*!******************************************!*\
  !*** ./src/app/views/users/users.dto.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": function() { return /* binding */ User; }
/* harmony export */ });
class User {
}


/***/ })

}]);
//# sourceMappingURL=src_app_views_file-upload_file-upload_module_ts-es2015.js.map