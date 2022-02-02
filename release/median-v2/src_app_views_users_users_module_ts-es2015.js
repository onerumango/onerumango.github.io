"use strict";
(self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_users_users_module_ts"],{

/***/ 98546:
/*!**************************************************!*\
  !*** ./node_modules/angular-datatables/index.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTableDirective": function() { return /* reexport safe */ _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective; },
/* harmony export */   "DataTablesModule": function() { return /* reexport safe */ _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__.DataTablesModule; }
/* harmony export */ });
/* harmony import */ var _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/angular-datatables.directive */ 46627);
/* harmony import */ var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/angular-datatables.module */ 77003);
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */
/**
 * @module
 * @description
 * Entry point from which you should import all public library APIs.
 */




/***/ }),

/***/ 46627:
/*!*****************************************************************************!*\
  !*** ./node_modules/angular-datatables/src/angular-datatables.directive.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTableDirective": function() { return /* binding */ DataTableDirective; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1858);
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */




var DataTableDirective =
/** @class */
function () {
  function DataTableDirective(el, vcr, renderer) {
    this.el = el;
    this.vcr = vcr;
    this.renderer = renderer;
    /**
     * The DataTable option you pass to configure your table.
     */

    this.dtOptions = {};
  }

  DataTableDirective.prototype.ngOnInit = function () {
    var _this = this;

    if (this.dtTrigger) {
      this.dtTrigger.subscribe(function (options) {
        _this.displayTable(options);
      });
    } else {
      this.displayTable(null);
    }
  };

  DataTableDirective.prototype.ngOnDestroy = function () {
    if (this.dtTrigger) {
      this.dtTrigger.unsubscribe();
    }

    if (this.dt) {
      this.dt.destroy(true);
    }
  };

  DataTableDirective.prototype.displayTable = function (dtOptions) {
    var _this = this; // assign new options if provided


    if (dtOptions) {
      this.dtOptions = dtOptions;
    }

    this.dtInstance = new Promise(function (resolve, reject) {
      Promise.resolve(_this.dtOptions).then(function (resolvedDTOptions) {
        // validate object
        var isTableEmpty = Object.keys(resolvedDTOptions).length === 0 && $('tbody tr', _this.el.nativeElement).length === 0;

        if (isTableEmpty) {
          reject('Both the table and dtOptions cannot be empty');
          return;
        } // Using setTimeout as a "hack" to be "part" of NgZone


        setTimeout(function () {
          // Assign DT properties here
          var options = {
            rowCallback: function (row, data, index) {
              if (resolvedDTOptions.columns) {
                var columns = resolvedDTOptions.columns;

                _this.applyNgPipeTransform(row, columns);

                _this.applyNgRefTemplate(row, columns, data);
              } // run user specified row callback if provided.


              if (resolvedDTOptions.rowCallback) {
                resolvedDTOptions.rowCallback(row, data, index);
              }
            }
          }; // merge user's config with ours

          options = Object.assign({}, resolvedDTOptions, options);
          _this.dt = $(_this.el.nativeElement).DataTable(options);
          resolve(_this.dt);
        });
      });
    });
  };

  DataTableDirective.prototype.applyNgPipeTransform = function (row, columns) {
    // Filter columns with pipe declared
    var colsWithPipe = columns.filter(function (x) {
      return x.ngPipeInstance && !x.ngTemplateRef;
    });
    colsWithPipe.forEach(function (el) {
      var pipe = el.ngPipeInstance; // find index of column using `data` attr

      var i = columns.findIndex(function (e) {
        return e.data === el.data;
      }); // get <td> element which holds data using index

      var rowFromCol = row.childNodes.item(i); // Transform data with Pipe

      var rowVal = $(rowFromCol).text();
      var rowValAfter = pipe.transform(rowVal); // Apply transformed string to <td>

      $(rowFromCol).text(rowValAfter);
    });
  };

  DataTableDirective.prototype.applyNgRefTemplate = function (row, columns, data) {
    var _this = this; // Filter columns using `ngTemplateRef`


    var colsWithTemplate = columns.filter(function (x) {
      return x.ngTemplateRef && !x.ngPipeInstance;
    });
    colsWithTemplate.forEach(function (el) {
      var _a = el.ngTemplateRef,
          ref = _a.ref,
          context = _a.context; // get <td> element which holds data using index

      var i = columns.findIndex(function (e) {
        return e.data === el.data;
      });
      var cellFromIndex = row.childNodes.item(i); // reset cell before applying transform

      $(cellFromIndex).html(''); // render onto DOM
      // finalize context to be sent to user

      var _context = Object.assign({}, context, context === null || context === void 0 ? void 0 : context.userData, {
        adtData: data
      });

      var instance = _this.vcr.createEmbeddedView(ref, _context);

      _this.renderer.appendChild(cellFromIndex, instance.rootNodes[0]);
    });
  };

  DataTableDirective.ɵfac = function DataTableDirective_Factory(t) {
    return new (t || DataTableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
  };

  DataTableDirective.ɵdir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
    type: DataTableDirective,
    selectors: [["", "datatable", ""]],
    inputs: {
      dtOptions: "dtOptions",
      dtTrigger: "dtTrigger"
    }
  });
  return DataTableDirective;
}();



(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataTableDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      selector: '[datatable]'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
    }];
  }, {
    dtOptions: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    dtTrigger: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

/***/ }),

/***/ 77003:
/*!**************************************************************************!*\
  !*** ./node_modules/angular-datatables/src/angular-datatables.module.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTablesModule": function() { return /* binding */ DataTablesModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./angular-datatables.directive */ 46627);
/**
 * @license
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
 */





var DataTablesModule =
/** @class */
function () {
  function DataTablesModule() {}

  DataTablesModule.forRoot = function () {
    return {
      ngModule: DataTablesModule
    };
  };

  DataTablesModule.ɵfac = function DataTablesModule_Factory(t) {
    return new (t || DataTablesModule)();
  };

  DataTablesModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
    type: DataTablesModule
  });
  DataTablesModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]]
  });
  return DataTablesModule;
}();



(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataTablesModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
      declarations: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective],
      exports: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective]
    }]
  }], null, null);
})();

/***/ }),

/***/ 91024:
/*!*********************************************************!*\
  !*** ./src/app/shared/models/fmosNewRolePermissions.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fmosscreenlabels": function() { return /* binding */ fmosscreenlabels; },
/* harmony export */   "RolePermissions": function() { return /* binding */ RolePermissions; },
/* harmony export */   "permissionsLabels": function() { return /* binding */ permissionsLabels; }
/* harmony export */ });
class fmosscreenlabels {
    constructor() {
        this.exist = true;
    }
}
class RolePermissions {
}
class permissionsLabels {
}


/***/ }),

/***/ 18736:
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_URL": function() { return /* binding */ API_URL; },
/* harmony export */   "rolepermission": function() { return /* binding */ rolepermission; },
/* harmony export */   "UsersService": function() { return /* binding */ UsersService; }
/* harmony export */ });
/* harmony import */ var src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/config/app.constant */ 91486);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 97361);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 33549);




const API_URL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL;
const rolepermission = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/rolePermission';
//export const rolepermission1 = AppConstants.baseURL + '/fmsRoles';
//export const API_URL = 'http://192.168.0.142:8010';
//export const API_URL = 'http://localhost:8010';
//export const API_URL = 'http://192.168.0.113:8010';
class UsersService {
    constructor(http) {
        this.http = http;
        this.paramSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({});
        this.getNavParam = this.paramSource.asObservable();
    }
    sendNavParam(params) {
        this.paramSource.next(params);
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
    // audit log starts
    onClickOfAuthOfUsers(authUser) {
        return this.http.get(`${API_URL}/users/getAllRoleNames`);
    }
    onClickOfOpenOfUsers() {
    }
    // Audit log  ends for User creatrion
    // -------------------User Modification-------------
    // audit log for User Modification Starts
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
UsersService.ɵfac = function UsersService_Factory(t) { return new (t || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
UsersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: UsersService, factory: UsersService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 45033:
/*!**************************************************************!*\
  !*** ./src/app/views/users/user-list/user-list.component.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserListComponent": function() { return /* binding */ UserListComponent; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 30759);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/services/api.service */ 31781);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/user.service */ 18736);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-datatables */ 98546);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 7005);







function UserListComponent_tr_28_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserListComponent_tr_28_Template_a_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3); const users_r1 = restoredCtx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r2.modifyUser(users_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const users_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("routerLink", "/users/new/", users_r1.userId, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](users_r1.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](users_r1.userName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](users_r1.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](users_r1.mobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](users_r1.recordStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 7, users_r1.creatorDtStamp));
} }
const _c0 = function () { return ["/dashboard"]; };
class UserListComponent {
    constructor(api, route, userApi) {
        this.api = api;
        this.route = route;
        this.userApi = userApi;
        this.dtOptions = {};
        // this.dtOptions = {};
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
    }
    ngOnInit() {
        this.getAllUsers();
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 5,
            columnDefs: [{ type: 'date', 'targets': [5] }],
            order: [[5, 'desc']],
            processing: true,
            lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]],
            // columnDefs: [ { type: 'date', 'targets': [5] } ],
            // order: [[5, 'desc']],
        };
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }
    getAllUsers() {
        this.api.getAllUsersListService().subscribe(resp => {
            this.allUsersList = resp;
            // this.allUsersList = (resp as any).resp;
            // this.dataSource = new MatTableDataSource<User>(this.allUsersList);
            // this.dataSource.sort = this.sort;
            // this.dataSource.paginator = this.paginator;
            console.log(this.allUsersList);
            // if(this.allUsersList){
            this.dtTrigger.next();
            // }
        });
    }
    modifyUser(user) {
        console.log(user);
        this.currentUser = user;
        // this.route.navigate(["users/modify"]);
        const navigationExtras = {
            queryParams: {
                // 'id': this.modifyUserObject.id,
                'userId': this.currentUser.userId,
                'userName': this.currentUser.userName,
                'email': this.currentUser.email,
                'ldapUserId': this.currentUser.ldapUserId,
                'failedAttempts': this.currentUser.failedAttempts,
                'mobile': this.currentUser.mobile,
                'authStatus': this.currentUser.verifiedStatus,
                'recordStatus': this.currentUser.recordStatus,
                'autoAuth': this.currentUser.autoAuth,
                'emailNotification': this.currentUser.emailNotification,
                'maintAllowed': this.currentUser.maintAllowed,
                'smsNotification': this.currentUser.smsNotification,
                'userAccessOption': this.currentUser.userAccessOption,
                'roleForUser': this.currentUser.roleForUser,
                'creatorId': this.currentUser.creatorId,
                'creatorDtStamp': this.currentUser.creatorDtStamp,
                'verifierId': this.currentUser.verifierId,
                'verifierDtStamp': this.currentUser.verifierDtStamp,
                'encryptedPassword': this.currentUser.encryptedPassword,
                'updatedBy': this.currentUser.updatedBy,
                'fristTimeAuth': this.currentUser.verifiedOnce,
                'newRoleForUser': this.currentUser.newRoleForUser,
                'versionNo': this.currentUser.versionNo,
                'statusForUser': this.currentUser.statusForUser,
                'department': this.currentUser.department,
                'intime': this.currentUser.intime,
                'outtime': this.currentUser.outtime,
                'pwdChangeDate': this.currentUser.pwdChangeDate
            },
        };
        // console.log(this.currentUser.intime, this.currentUser.outtime);
        //console.log(this.currentUser);department
        this.userApi.sendNavParam(navigationExtras);
        this.route.navigate(['users/new']);
    }
    createUser() {
        this.route.navigate(['users/new']);
        const navigationExtras = {
            queryParams: {}
        };
        this.userApi.sendNavParam(navigationExtras);
    }
}
UserListComponent.ɵfac = function UserListComponent_Factory(t) { return new (t || UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UsersService)); };
UserListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: UserListComponent, selectors: [["npr-user-list"]], decls: 29, vars: 5, consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [1, "primaryColor", 3, "routerLink", "click"]], template: function UserListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "User Management");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserListComponent_Template_a_click_7_listener() { return ctx.createUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "New");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Exit");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "table", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "User ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Mobile No");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Auth Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, UserListComponent_tr_28_Template, 15, 9, "tr", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.allUsersList);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 19290:
/*!************************************************************!*\
  !*** ./src/app/views/users/user-new/user-new.component.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserNewComponent": function() { return /* binding */ UserNewComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/shared/models/fmosNewRolePermissions */ 91024);
/* harmony import */ var src_app_shared_models_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/models/users */ 19307);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 73696);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1858);
/* harmony import */ var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/role.service */ 93135);
/* harmony import */ var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/user.service */ 18736);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-izitoast */ 97385);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 7005);











function UserNewComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please Enter User Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserNewComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, UserNewComponent_div_11_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.userForm.controls["userId"].errors.required);
} }
function UserNewComponent_div_16_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please Enter User Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserNewComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, UserNewComponent_div_16_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.userForm.controls["userName"].errors.required);
} }
function UserNewComponent_img_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 36);
} }
function UserNewComponent_img_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "img", 37);
} }
function UserNewComponent_div_25_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please Enter Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserNewComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, UserNewComponent_div_25_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r4.userForm.controls["password"].errors.required);
} }
function UserNewComponent_div_30_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please Enter Email Id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserNewComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, UserNewComponent_div_30_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.userForm.controls["email"].errors.required);
} }
function UserNewComponent_div_35_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please Enter Mobile Number ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserNewComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, UserNewComponent_div_35_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.userForm.controls["mobile"].errors.required);
} }
function UserNewComponent_option_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r21 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r7.editFlag)("value", element_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r21);
} }
function UserNewComponent_div_43_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please Select Roles ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserNewComponent_div_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, UserNewComponent_div_43_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r8.userForm.controls["newRoleForUser"].errors.required);
} }
function UserNewComponent_option_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r23 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx_r9.editFlag)("value", element_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](element_r23);
} }
function UserNewComponent_div_49_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please Select Department ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserNewComponent_div_49_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, UserNewComponent_div_49_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r10.userForm.controls["department"].errors.required);
} }
function UserNewComponent_div_56_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please Enter In time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserNewComponent_div_56_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, UserNewComponent_div_56_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r11.userForm.controls["intime"].errors.required);
} }
function UserNewComponent_div_59_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Please Enter Out time ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserNewComponent_div_59_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, UserNewComponent_div_59_div_1_Template, 2, 0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r12.userForm.controls["outtime"].errors.required);
} }
const _c0 = function () { return ["/users"]; };
function UserNewComponent_div_74_Template(rf, ctx) { if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "button", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserNewComponent_div_74_Template_button_click_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r28); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r27.onFormSubmit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](1, _c0));
} }
function UserNewComponent_div_75_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserNewComponent_div_75_div_2_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r34.editValues(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserNewComponent_div_75_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserNewComponent_div_75_div_3_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r36.onModifyFormSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserNewComponent_div_75_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserNewComponent_div_75_div_4_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r38.onClickOfAuthOfModifyUsers(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Auth");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserNewComponent_div_75_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserNewComponent_div_75_div_5_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r40.onClickOfReOpenOfModifyUsers(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Open");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserNewComponent_div_75_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserNewComponent_div_75_div_6_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r43); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r42.onClickOfCloseOfModifyUSers(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserNewComponent_div_75_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, UserNewComponent_div_75_div_2_Template, 3, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, UserNewComponent_div_75_div_3_Template, 3, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, UserNewComponent_div_75_div_4_Template, 3, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, UserNewComponent_div_75_div_5_Template, 3, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, UserNewComponent_div_75_div_6_Template, 3, 0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "a", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserNewComponent_div_75_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r45); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r44.onClickOfDeleteOfModifyUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "a", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12, "Exit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r14.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r14.editFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r14.modifyUserObject.recordStatus == "U");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r14.modifyUserObject.recordStatus == "C");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r14.modifyUserObject.recordStatus == "O");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](6, _c0));
} }
function UserNewComponent_div_76_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](7, "img", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Maker");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](19, "img", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](23, "Maker Time Stamp");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](26, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](32, "img", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36, "Record Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "img", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "Checker");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "Lorem Ipsum");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "div", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](56, "img", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Checker Time Stamp");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "Lorem Ipsum");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](68, "img", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "First Time Auth");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74, "No");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](80, "img", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "div", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](83, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84, "Auth Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](86);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r15.userObjWithAudit.creatorId);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](26, 4, ctx_r15.userObjWithAudit.creatorDtStamp, "MM/dd/yyyy, h:mm a"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r15.userObjWithAudit.recordStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r15.userObjWithAudit.verifiedStatus);
} }
class UserNewComponent {
    constructor(roleService, userApi, route, iziToast) {
        this.roleService = roleService;
        this.userApi = userApi;
        this.route = route;
        this.iziToast = iziToast;
        this.hide = true;
        this.editFlag = false;
        this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels();
        this.modifyUserObject = new src_app_shared_models_users__WEBPACK_IMPORTED_MODULE_1__.User();
        this.allRoleNames = [];
        this.allDeptNames = [];
        this.phonePattern = '^[0-9]*$';
        this.emailPattern = '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$';
        this.userObj = new src_app_shared_models_users__WEBPACK_IMPORTED_MODULE_1__.User();
        // userForm: FormGroup;
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            statusForUser: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('Enable'),
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(100)
            ]),
            //password: new FormControl(''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,
                // Validators.compose([Validators.pattern(this.passwordRegex),
                // Validators.maxLength(this.maxPass),
                // Validators.minLength(this.minPass)])
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(this.emailPattern)]),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern(this.phonePattern),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.maxLength(10)
            ]),
            newRoleForUser: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            department: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(),
            intime: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]),
            outtime: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required])
        });
        this.modifyScreen = false;
    }
    ngOnInit() {
        setTimeout(() => {
            this.newRolePermissions();
        }, 2000);
        this.getAllRolesNames();
        this.navSubscription = this.userApi.getNavParam.subscribe(data => this.editUserScreen = data);
        this.roleService.screenLabelList.subscribe(message => this.roleCodes = message);
        this.editFlag = false;
        this.user_id = sessionStorage.getItem('user_id');
        this.role = sessionStorage.getItem('user_role');
        console.log(this.editUserScreen);
        this.modifyUserObject.userId = this.editUserScreen.queryParams.userId;
        this.modifyUserObject.userName = this.editUserScreen.queryParams.userName;
        this.modifyUserObject.email = this.editUserScreen.queryParams.email;
        this.modifyUserObject.mobile = this.editUserScreen.queryParams.mobile;
        this.modifyUserObject.ldapUserId = this.editUserScreen.queryParams.ldapUserId;
        this.modifyUserObject.verifiedStatus = this.editUserScreen.queryParams.authStatus;
        this.modifyUserObject.recordStatus = this.editUserScreen.queryParams.recordStatus;
        this.modifyUserObject.creatorId = this.editUserScreen.queryParams.creatorId;
        this.modifyUserObject.emailNotification = this.editUserScreen.queryParams.emailNotification;
        this.modifyUserObject.maintAllowed = this.editUserScreen.queryParams.maintAllowed;
        this.modifyUserObject.smsNotification = this.editUserScreen.queryParams.smsNotification;
        this.modifyUserObject.userAccessOption = this.editUserScreen.queryParams.userAccessOption;
        this.modifyUserObject.newRoleForUser = this.editUserScreen.queryParams.newRoleForUser;
        this.modifyUserObject.creatorDtStamp = this.editUserScreen.queryParams.creatorDtStamp;
        this.modifyUserObject.verifierId = this.editUserScreen.queryParams.verifierId;
        this.modifyUserObject.verifierDtStamp = this.editUserScreen.queryParams.verifierDtStamp;
        this.modifyUserObject.encryptedPassword = this.editUserScreen.queryParams.encryptedPassword;
        this.modifyUserObject.updatedBy = this.editUserScreen.queryParams.updatedBy;
        this.modifyUserObject.verifiedOnce = this.editUserScreen.queryParams.fristTimeAuth;
        this.modifyUserObject.roleForUser = this.editUserScreen.queryParams.roleForUser;
        this.modifyUserObject.failedAttempts = this.editUserScreen.queryParams.failedAttempts;
        this.modifyUserObject.versionNo = this.editUserScreen.queryParams.versionNo;
        this.modifyUserObject.newRoleForUser = this.editUserScreen.queryParams.newRoleForUser;
        this.modifyUserObject.statusForUser = this.editUserScreen.queryParams.statusForUser;
        this.modifyUserObject.department = this.editUserScreen.queryParams.department;
        this.modifyUserObject.intime = this.editUserScreen.queryParams.intime;
        this.modifyUserObject.outtime = this.editUserScreen.queryParams.outtime;
        this.modifyUserObject.pwdChangeDate = this.editUserScreen.queryParams.pwdChangeDate;
        console.log(this.modifyUserObject);
        this.userObjWithAudit = this.modifyUserObject;
        console.log(this.modifyUserObject);
        if (this.modifyUserObject.userId) {
            console.log("Query params");
            this.modifyScreen = true;
            this.editFlag = true;
        }
        //this.screenpermission();
        this.getAllDeptNames();
        this.getAllRolesNames();
        this.getUserAuditData();
        //console.log('edit flag:department ' + this.editFlag);
        this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required,
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            department: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            // rolesForUser: new FormControl(''),
            newRoleForUser: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.modifyUserObject.newRoleForUser, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            statusForUser: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl(this.modifyUserObject.statusForUser, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            intime: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
            outtime: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required),
        });
        // this.getAllRolesNames();
        // this.getAllDeptNames();
    }
    getAllRolesNames() {
        this.roleService.getAllRoles().subscribe(data => {
            this.allRoleNames = data;
            console.log(this.allRoleNames, data);
        });
    }
    getAllDeptNames() {
        this.roleService.getAllDept().subscribe(data => {
            this.allDeptNames = data;
            console.log(this.allDeptNames);
        });
    }
    onClickOfCloseOfModifyUSers() {
        //console.log('on click of close of Modify user');
        this.modifyUserObject.creatorId = localStorage.getItem('currentUser').replace(/['"]+/g, '');
        this.userApi.onClickOfCloseOfModifyUsers(this.modifyUserObject.userId, this.modifyUserObject.creatorId).subscribe(dataofCloseFromBackend => {
            //console.log(dataofCloseFromBackend);
            this.statusFlag = dataofCloseFromBackend;
            if (this.statusFlag === true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('You closed the user record');
                //console.log('coming or not');
                this.getUpdatedModifiedObject();
                // this.cdr.markForCheck();
                this.getUserAuditData();
                // this.iziToast.show({
                //   message: `You closed the user record`,
                //   image: "assets/images/user.png",
                //   icon: 'ico ico-success',
                //   theme:"dark",
                //   layout: 2,
                //   // imageWidth:50,
                //   balloon: false,
                //   position: "topRight",
                //   progressBarColor: "green",
                //   pauseOnHover: true,
                // });
            }
            if (this.statusFlag === false) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    icon: 'error',
                    text: 'Failed to close user '
                });
            }
        });
    }
    onClickOfReOpenOfModifyUsers() {
        //console.log('on click of reopen of Modify user');
        this.modifyUserObject.creatorId = localStorage.getItem('currentUser');
        this.userApi.onClickOfReopenOfModifyUser(this.modifyUserObject.userId, this.modifyUserObject.creatorId).subscribe(dataOfReopen => {
            //console.log('dataOfReopen' + dataOfReopen);
            this.statusFlag = dataOfReopen;
            //console.log(this.modifyUserObject);
            if (this.statusFlag === true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Record is opened ');
                // this.iziToast.show({
                //   message: `Record is opened`,
                //   image: "assets/images/user.png",
                //   icon: 'ico ico-success',
                //   theme:"dark",
                //   layout: 2,
                //   // imageWidth:50,
                //   balloon: false,
                //   position: "topRight",
                //   progressBarColor: "green",
                //   pauseOnHover: true,
                // });
                //console.log('coming or not');
                this.getUpdatedModifiedObject();
                // this.cdr.markForCheck();
                this.getUserAuditData();
            }
            if (this.statusFlag === false) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    icon: 'error',
                    text: 'Failed to open user '
                });
                // this.iziToast.show({
                //   message: `Failed to create user`,
                //   image: "assets/images/user.png",
                //   icon: 'ico ico-success',
                //   theme:"dark",
                //   layout: 2,
                //   // imageWidth:50,
                //   balloon: false,
                //   position: "topRight",
                //   progressBarColor: "green",
                //   pauseOnHover: true,
                // });
            }
        });
    }
    onClickOfDeleteOfModifyUser() {
        console.log(this.modifyUserObject);
        // this.modifyUserObject.intime = new Date(this.modifyUserObject.intime);
        this.userApi.onClickOfDeleteOfModifyUser(this.modifyUserObject.userId)
            .subscribe(datafrombackendtoDelete => {
            //console.log('deleteData', datafrombackendtoDelete);
            this.deleteStatusFlag = datafrombackendtoDelete;
            if (this.deleteStatusFlag === true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('User Deleted ');
                // this.iziToast.show({
                //   message: `User Deleted`,
                //   image: "assets/images/user.png",
                //   icon: 'ico ico-success',
                //   theme:"dark",
                //   layout: 2,
                //   // imageWidth:50,
                //   balloon: false,
                //   position: "topRight",
                //   progressBarColor: "green",
                //   pauseOnHover: true,
                // });
                this.getUserAuditData();
            }
            if (this.deleteStatusFlag === false) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    icon: 'error',
                    text: 'Failed to delete user'
                });
                // this.iziToast.show({
                //   message: `Failed to delete user`,
                //   image: "assets/images/user.png",
                //   icon: 'ico ico-success',
                //   theme:"dark",
                //   layout: 2,
                //   // imageWidth:50,
                //   balloon: false,
                //   position: "topRight",
                //   progressBarColor: "green",
                //   pauseOnHover: true,
                // });
            }
            // this.router.navigateByUrl('users');
        });
        //console.log('method call fro delete finished');
    }
    onClickOfAuthOfModifyUsers() {
        console.log('on click of auth ', localStorage.getItem('currentUser'));
        this.userApi.onClickOfAuthOfModifyUsers(this.modifyUserObject.userId, localStorage.getItem('currentUser')).subscribe(dataOfModifyUserFromBackEnd => {
            //console.log(dataOfModifyUserFromBackEnd);
            this.authStatusFlag = dataOfModifyUserFromBackEnd;
            console.log(this.modifyUserObject);
            console.log(this.authStatusFlag);
            if (this.authStatusFlag === true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('you Authorized the user ');
                // this.iziToast.show({
                //   message: `you Authorized the user `,
                //   image: "assets/images/user.png",
                //   icon: 'ico ico-success',
                //   theme:"dark",
                //   layout: 2,
                //   // imageWidth:50,
                //   balloon: false,
                //   position: "topRight",
                //   progressBarColor: "green",
                //   pauseOnHover: true,
                // });
                console.log('coming or not');
                this.getUpdatedModifiedObject();
                // this.cdr.markForCheck();
                this.getUserAuditData();
            }
            if (this.authStatusFlag === false) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    icon: 'error',
                    text: 'maker cannot authorize the user '
                });
                // this.iziToast.show({
                //   message: `maker cannot authorize the user`,
                //   image: "assets/images/user.png",
                //   icon: 'ico ico-success',
                //   theme:"dark",
                //   layout: 2,
                //   // imageWidth:50,
                //   balloon: false,
                //   position: "topRight",
                //   progressBarColor: "green",
                //   pauseOnHover: true,
                // });
            }
        });
    }
    getUpdatedModifiedObject() {
        //console.log('this is get opration');
        //console.log(this.modifyUserObject.userId);
        //console.log('service call');
        this.userApi.getUserObjModified(this.modifyUserObject.userId).subscribe(gettingBackendData => {
            //console.log('gettingBackendData', gettingBackendData);
            this.modifyUserObject = gettingBackendData;
            //console.log(this.modifyUserObject);
        });
    }
    onModifyFormSubmit() {
        (this.modifyUserObject.userId = this.userForm.get('userId').value),
            (this.modifyUserObject.userName = this.userForm.get('userName').value);
        this.modifyUserObject.encryptedPassword = this.userForm.get('password').value;
        this.modifyUserObject.mobile = this.userForm.get('mobile').value;
        this.modifyUserObject.statusForUser = this.userForm.get('statusForUser').value;
        this.modifyUserObject.email = this.userForm.get('email').value;
        this.modifyUserObject.department = this.userForm.get('department').value;
        this.modifyUserObject.roleForUser = this.userForm.get('rolesForUser').value;
        this.modifyUserObject.newRoleForUser = this.userForm.get('newRoleForUser').value;
        this.modifyUserObject.creatorId = localStorage.getItem('currentUser');
        //console.log('modifyUserObject');
        //console.log(this.modifyUserObject);
        //console.log('Creator', this.modifyUserObject.creatorId);
        if (this.modifyUserObject.intime > this.modifyUserObject.outtime) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire("From time should be lower and to time should be higher");
            // this.iziToast.show({
            //   message: `From time should be lower and to time should be higher`,
            //   image: "assets/images/user.png",
            //   icon: 'ico ico-success',
            //   theme:"dark",
            //   layout: 2,
            //   // imageWidth:50,
            //   balloon: false,
            //   position: "topRight",
            //   progressBarColor: "green",
            //   pauseOnHover: true,
            // });
        }
        this.userApi.modifyUserService(this.modifyUserObject).subscribe(data => {
            this.statusFlag = data;
            if (this.statusFlag === true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('You modified the user.');
                // this.iziToast.show({
                //   message: `You modified the user.`,
                //   image: "assets/images/user.png",
                //   icon: 'ico ico-success',
                //   theme:"dark",
                //   layout: 2,
                //   // imageWidth:50,
                //   balloon: false,
                //   position: "topRight",
                //   progressBarColor: "green",
                //   pauseOnHover: true,
                // });
                this.getUserAuditData();
                this.editFlag = false;
            }
            if (this.statusFlag === false) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    icon: 'error',
                    text: 'Failed to modify user '
                });
                // this.iziToast.show({
                //   message: `Failed to modify user.`,
                //   image: "assets/images/user.png",
                //   icon: 'ico ico-error',
                //   theme:"dark",
                //   layout: 2,
                //   // imageWidth:50,
                //   balloon: false,
                //   position: "topRight",
                //   progressBarColor: "red",
                //   pauseOnHover: true,
                // });
            }
        });
    }
    getUserAuditData() {
        this.userApi.getUserAuditService(this.modifyUserObject.userId).subscribe(data => {
            this.userObjWithAudit = data;
            console.log('dev code user audit: ', this.userObjWithAudit);
            console.log(this.userObjWithAudit);
            if (this.userObjWithAudit.verifiedStatus === 'U') {
                this.userObjWithAudit.verifiedStatus = 'UNAUTHORIZED';
            }
            if (this.userObjWithAudit.verifiedStatus === 'A') {
                this.userObjWithAudit.verifiedStatus = 'AUTHORIZED';
            }
            /*
            */
            if (this.userObjWithAudit.verifiedOnce === 'N') {
                this.userObjWithAudit.verifiedOnce = 'NO';
            }
            if (this.userObjWithAudit.verifiedOnce === 'Y') {
                this.userObjWithAudit.verifiedOnce = 'YES';
            }
            /**
             * setting record status
             */
            if (this.userObjWithAudit.recordStatus === 'O') {
                this.userObjWithAudit.recordStatus = 'OPEN';
            }
            if (this.userObjWithAudit.recordStatus === 'C') {
                this.userObjWithAudit.recordStatus = 'CLOSED';
            }
        });
    }
    onFormSubmit(event) {
        // event.preventDefault();
        // this.userbutton = true;
        console.log(event);
        this.userObj.userId = this.userForm.get('userId').value;
        this.userObj.userId = this.userObj.userId.toUpperCase();
        this.userObj.userName = this.userForm.get('userName').value;
        this.userObj.encryptedPassword = this.userForm.get('password').value;
        this.userObj.mobile = this.userForm.get('mobile').value;
        this.userObj.email = this.userForm.get('email').value;
        this.userObj.newRoleForUser = this.userForm.get('newRoleForUser').value;
        this.userObj.roleForUser = this.userForm.get('newRoleForUser').value;
        this.userObj.roleForUser.toString();
        this.userObj.creatorId = this.user_id;
        this.userObj.statusForUser = this.userForm.get('statusForUser').value;
        this.userObj.department = this.userForm.get('department').value;
        console.log("this.userForm.get('department').value;", this.userForm.get('department').value);
        this.userObj.intime = this.userForm.get('intime').value;
        //this.userObj.pwdChangeDate=this.userForm.get('pwdChangeDate').value;
        this.userObj.outtime = this.userForm.get('outtime').value;
        console.log(this.userObj);
        // if(this.userObj.intime>this.userObj.outtime){
        //   Swal.fire("Intime should not be greater than out time")
        // }
        // else{
        this.userApi.createUserService(this.userObj).subscribe(data => {
            //console.log(this.userObj);
            console.log('create');
            this.statusFlag = data;
            //console.log(this.allRoleNames);
            if (this.statusFlag === true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('You Created the user ');
                // this.iziToast.show({
                //   message: `You Created the user`,
                //   image: "assets/images/user.png",
                //   icon: 'ico ico-success',
                //   theme:"dark",
                //   layout: 2,
                //   // imageWidth:50,
                //   balloon: false,
                //   position: "topRight",
                //   progressBarColor: "green",
                //   pauseOnHover: true,
                // });
                // /added by vidya for issue id 583
                // this.enableSubmit=true
                //console.log("this is to confirm", this.userObj);
                this.getUserAuditData();
            }
            if (this.statusFlag === false) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    icon: 'error',
                    text: 'Failed to create user ',
                });
                // this.iziToast.show({
                //   message: `Failed to create user`,
                //   image: "assets/images/user.png",
                //   icon: 'ico ico-error',
                //   theme:"dark",
                //   layout: 2,
                //   // imageWidth:50,
                //   balloon: false,
                //   position: "topRight",
                //   progressBarColor: "red",
                //   pauseOnHover: true,
                // });
            }
        });
        // }
    }
    newRolePermissions() {
        this.roleService.fetchScreenPermissions('users');
    }
    editValues() {
        this.editFlag = false;
    }
}
UserNewComponent.ɵfac = function UserNewComponent_Factory(t) { return new (t || UserNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_3__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_4__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](ng2_izitoast__WEBPACK_IMPORTED_MODULE_5__.Ng2IzitoastService)); };
UserNewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: UserNewComponent, selectors: [["npr-user-new"]], decls: 77, vars: 35, consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "dbCardStyle"], [1, "row", "gy-4"], [1, "col-lg-4"], ["for", "roleName", 1, "formLbl"], ["id", "usersId", "oninput", "this.value = this.value.toUpperCase()", "placeholder", "User Id", "required", "", "formControlName", "userId", "type", "text", "value", "", 1, "form-control", 3, "readonly", "ngModel", "ngModelChange"], ["class", "errorColor", 4, "ngIf"], ["id", "usersName", "type", "text", "formControlName", "userName", "placeholder", "User Name", "value", "", "onkeypress", "return /[a-z]/i.test(event.key)", 1, "form-control", 3, "ngModel", "readonly", "ngModelChange"], [1, "form-control", "d-flex"], ["id", "usersPassword", "type", "password", "formControlName", "password", "placeholder", " Password", "value", "", 1, "noborder", 3, "type", "ngModel", "readonly", "ngModelChange"], ["toggle", "#pwdFld", 1, "visibility", 3, "click"], ["class", "showPwd", "src", "assets/images/show-icon.svg", "alt", "...", 4, "ngIf"], ["class", "hidePwd", "src", "assets/images/hide-icon.svg", "alt", "...", 4, "ngIf"], ["id", "usersPassword", "formControlName", "email", "placeholder", "Email", "value", "", 1, "form-control", 3, "ngModel", "readonly", "ngModelChange"], ["id", "usersPassword", "type", "number", "formControlName", "mobile", "placeholder", "Mobile Number", "value", "", 1, "form-control", 3, "ngModel", "readonly", "ngModelChange"], ["multiple", "true", "formControlName", "newRoleForUser", "readonly", "", "aria-label", "Default select example", 1, "form-select"], ["selected", ""], [3, "disabled", "value", 4, "ngFor", "ngForOf"], ["formControlName", "department", "aria-label", "Default select example", 1, "form-select", 3, "ngModel", "ngModelChange"], [1, "col-lg-8"], [1, "col-lg-6"], ["id", "timeStart", "type", "time", "formControlName", "intime", "placeholder", "09:00", "value", "", 1, "form-control", 3, "readonly", "ngModel", "ngModelChange"], ["id", "timeEnd", "type", "time", "formControlName", "outtime", "placeholder", "18:00", "value", "", 1, "form-control", 3, "readonly", "ngModel", "ngModelChange"], ["formControlName", "statusForUser", 1, "row", "g-2"], [1, "radio", "radioStyle"], ["id", "radio-1", "name", "radio", "type", "radio", "checked", "", 3, "disabled"], ["for", "radio-1", 1, "radio-label"], ["id", "radio-2", "name", "radio", "type", "radio", 3, "disabled"], ["for", "radio-2", 1, "radio-label"], ["class", "col-lg-12", 4, "ngIf"], ["class", "dbCardStyle", 4, "ngIf"], [1, "errorColor"], [4, "ngIf"], ["src", "assets/images/show-icon.svg", "alt", "...", 1, "showPwd"], ["src", "assets/images/hide-icon.svg", "alt", "...", 1, "hidePwd"], [3, "disabled", "value"], [1, "col-lg-12"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], [1, "col-auto"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["class", "col-auto", 4, "ngIf"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."]], template: function UserNewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "User Maintenance");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "User Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function UserNewComponent_Template_input_ngModelChange_10_listener($event) { return ctx.modifyUserObject.userId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, UserNewComponent_div_11_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](14, "User Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function UserNewComponent_Template_input_ngModelChange_15_listener($event) { return ctx.modifyUserObject.userName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, UserNewComponent_div_16_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function UserNewComponent_Template_input_ngModelChange_21_listener($event) { return ctx.modifyUserObject.encryptedPassword = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "span", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function UserNewComponent_Template_span_click_22_listener() { return ctx.hide = !ctx.hide; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](23, UserNewComponent_img_23_Template, 1, 0, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](24, UserNewComponent_img_24_Template, 1, 0, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, UserNewComponent_div_25_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Email Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function UserNewComponent_Template_input_ngModelChange_29_listener($event) { return ctx.modifyUserObject.email = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](30, UserNewComponent_div_30_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](33, "Mobile Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function UserNewComponent_Template_input_ngModelChange_34_listener($event) { return ctx.modifyUserObject.mobile = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, UserNewComponent_div_35_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](38, "Roles");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "select", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "option", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "Roles");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](42, UserNewComponent_option_42_Template, 2, 3, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](43, UserNewComponent_div_43_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46, "Department");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "select", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function UserNewComponent_Template_select_ngModelChange_47_listener($event) { return ctx.modifyUserObject.department = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](48, UserNewComponent_option_48_Template, 2, 3, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](49, UserNewComponent_div_49_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "Select the time range for operating (in hours)");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function UserNewComponent_Template_input_ngModelChange_55_listener($event) { return ctx.modifyUserObject.intime = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](56, UserNewComponent_div_56_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](57, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function UserNewComponent_Template_input_ngModelChange_58_listener($event) { return ctx.modifyUserObject.outtime = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](59, UserNewComponent_div_59_Template, 2, 1, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62, "User Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](66, "input", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "label", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68, "Enable");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](71, "input", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "label", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, "Disable");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](74, UserNewComponent_div_74_Template, 8, 2, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](75, UserNewComponent_div_75_Template, 13, 7, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](76, UserNewComponent_div_76_Template, 87, 7, "div", 33);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.userForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("readonly", ctx.editFlag)("ngModel", ctx.modifyUserObject.userId);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userForm.controls["userId"].invalid && (ctx.userForm.controls["userId"].dirty || ctx.userForm.controls["userId"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.modifyUserObject.userName)("readonly", ctx.editFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userForm.controls["userName"].invalid && (ctx.userForm.controls["userName"].dirty || ctx.userForm.controls["userName"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("type", ctx.hide ? "password" : "text")("ngModel", ctx.modifyUserObject.encryptedPassword)("readonly", ctx.editFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.hide);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userForm.controls["password"].invalid && (ctx.userForm.controls["password"].dirty || ctx.userForm.controls["password"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.modifyUserObject.email)("readonly", ctx.editFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userForm.controls["email"].invalid && (ctx.userForm.controls["email"].dirty || ctx.userForm.controls["email"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.modifyUserObject.mobile)("readonly", ctx.editFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userForm.controls["mobile"].invalid && (ctx.userForm.controls["mobile"].dirty || ctx.userForm.controls["mobile"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.allRoleNames);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userForm.controls["newRoleForUser"].invalid && (ctx.userForm.controls["newRoleForUser"].dirty || ctx.userForm.controls["newRoleForUser"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.modifyUserObject.department);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.allDeptNames);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userForm.controls["department"].invalid && (ctx.userForm.controls["department"].dirty || ctx.userForm.controls["department"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("readonly", ctx.editFlag)("ngModel", ctx.modifyUserObject.intime);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userForm.controls["intime"].invalid && (ctx.userForm.controls["intime"].dirty || ctx.userForm.controls["intime"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("readonly", ctx.editFlag)("ngModel", ctx.modifyUserObject.outtime);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.userForm.controls["outtime"].invalid && (ctx.userForm.controls["outtime"].dirty || ctx.userForm.controls["outtime"].touched));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.editFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.editFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.modifyScreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.modifyScreen || ctx.editFlag);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.modifyUserObject.userId != null);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectMultipleControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DatePipe], styles: [".errorColor[_ngcontent-%COMP%] {\n  color: #e6224a;\n}\n\n.noborder[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.visibility[_ngcontent-%COMP%] {\n  margin-left: 100px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbmV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBR0oiLCJmaWxlIjoidXNlci1uZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3JDb2xvcntcclxuICAgIGNvbG9yOiAjZTYyMjRhO1xyXG59XHJcbi5ub2JvcmRlcntcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4udmlzaWJpbGl0eXtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 10666:
/*!*****************************************************!*\
  !*** ./src/app/views/users/users-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersRoutingModule": function() { return /* binding */ UsersRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 869);
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user-list/user-list.component */ 45033);
/* harmony import */ var _user_new_user_new_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-new/user-new.component */ 19290);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1858);





const routes = [
    {
        path: "",
        component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_0__.UserListComponent
    }, {
        path: "new",
        component: _user_new_user_new_component__WEBPACK_IMPORTED_MODULE_1__.UserNewComponent
    }
];
class UsersRoutingModule {
}
UsersRoutingModule.ɵfac = function UsersRoutingModule_Factory(t) { return new (t || UsersRoutingModule)(); };
UsersRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: UsersRoutingModule });
UsersRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](UsersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 41462:
/*!*********************************************!*\
  !*** ./src/app/views/users/users.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UsersModule": function() { return /* binding */ UsersModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 7005);
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./users-routing.module */ 10666);
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-list/user-list.component */ 45033);
/* harmony import */ var _user_new_user_new_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user-new/user-new.component */ 19290);
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-datatables */ 98546);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 68465);
/* harmony import */ var ng2_izitoast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-izitoast */ 97385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 1858);








class UsersModule {
}
UsersModule.ɵfac = function UsersModule_Factory(t) { return new (t || UsersModule)(); };
UsersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: UsersModule });
UsersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsersRoutingModule,
            angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
            ng2_izitoast__WEBPACK_IMPORTED_MODULE_4__.Ng2IziToastModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](UsersModule, { declarations: [_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_1__.UserListComponent,
        _user_new_user_new_component__WEBPACK_IMPORTED_MODULE_2__.UserNewComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
        _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsersRoutingModule,
        angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule,
        ng2_izitoast__WEBPACK_IMPORTED_MODULE_4__.Ng2IziToastModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_views_users_users_module_ts-es2015.js.map