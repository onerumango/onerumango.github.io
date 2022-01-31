(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_users_users_module_ts"], {
    /***/
    98546:
    /*!**************************************************!*\
      !*** ./node_modules/angular-datatables/index.js ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DataTableDirective": function DataTableDirective() {
          return (
            /* reexport safe */
            _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective
          );
        },

        /* harmony export */
        "DataTablesModule": function DataTablesModule() {
          return (
            /* reexport safe */
            _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__.DataTablesModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _src_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./src/angular-datatables.directive */
      46627);
      /* harmony import */


      var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./src/angular-datatables.module */
      77003);
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

      /***/

    },

    /***/
    46627:
    /*!*****************************************************************************!*\
      !*** ./node_modules/angular-datatables/src/angular-datatables.directive.js ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DataTableDirective": function DataTableDirective() {
          return (
            /* binding */
            _DataTableDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      1858);
      /**
       * @license
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
       */


      var _DataTableDirective =
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
                  rowCallback: function rowCallback(row, data, index) {
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
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_DataTableDirective, [{
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
      /***/

    },

    /***/
    77003:
    /*!**************************************************************************!*\
      !*** ./node_modules/angular-datatables/src/angular-datatables.module.js ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "DataTablesModule": function DataTablesModule() {
          return (
            /* binding */
            _DataTablesModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      1858);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      7005);
      /* harmony import */


      var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./angular-datatables.directive */
      46627);
      /**
       * @license
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://raw.githubusercontent.com/l-lin/angular-datatables/master/LICENSE
       */


      var _DataTablesModule =
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
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](_DataTablesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
            declarations: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective],
            exports: [_angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__.DataTableDirective]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    91024:
    /*!*********************************************************!*\
      !*** ./src/app/shared/models/fmosNewRolePermissions.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "fmosscreenlabels": function fmosscreenlabels() {
          return (
            /* binding */
            _fmosscreenlabels
          );
        },

        /* harmony export */
        "RolePermissions": function RolePermissions() {
          return (
            /* binding */
            _RolePermissions
          );
        },

        /* harmony export */
        "permissionsLabels": function permissionsLabels() {
          return (
            /* binding */
            _permissionsLabels
          );
        }
        /* harmony export */

      });

      var _fmosscreenlabels = /*#__PURE__*/_createClass(function _fmosscreenlabels() {
        _classCallCheck(this, _fmosscreenlabels);

        this.exist = true;
      });

      var _RolePermissions = /*#__PURE__*/_createClass(function _RolePermissions() {
        _classCallCheck(this, _RolePermissions);
      });

      var _permissionsLabels = /*#__PURE__*/_createClass(function _permissionsLabels() {
        _classCallCheck(this, _permissionsLabels);
      });
      /***/

    },

    /***/
    18736:
    /*!*************************************************!*\
      !*** ./src/app/shared/services/user.service.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "API_URL": function API_URL() {
          return (
            /* binding */
            _API_URL
          );
        },

        /* harmony export */
        "rolepermission": function rolepermission() {
          return (
            /* binding */
            _rolepermission
          );
        },

        /* harmony export */
        "UsersService": function UsersService() {
          return (
            /* binding */
            _UsersService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/config/app.constant */
      91486);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      97361);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      1858);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      33549);

      var _API_URL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL;

      var _rolepermission = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/rolePermission'; //export const rolepermission1 = AppConstants.baseURL + '/fmsRoles';
      //export const API_URL = 'http://192.168.0.142:8010';
      //export const API_URL = 'http://localhost:8010';
      //export const API_URL = 'http://192.168.0.113:8010';


      var _UsersService = /*#__PURE__*/function () {
        function _UsersService(http) {
          _classCallCheck(this, _UsersService);

          this.http = http;
          this.paramSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({});
          this.getNavParam = this.paramSource.asObservable();
        }

        _createClass(_UsersService, [{
          key: "sendNavParam",
          value: function sendNavParam(params) {
            this.paramSource.next(params);
          }
        }, {
          key: "getRoleScreenPermission",
          value: function getRoleScreenPermission(userId, screenName, roleName) {
            return this.http.get("".concat(_rolepermission, "/getRolePermission/").concat(userId, "/").concat(screenName, "/").concat(roleName));
          }
        }, {
          key: "getUserAuditService",
          value: function getUserAuditService(userId) {
            return this.http.get("".concat(_API_URL, "/users/getModifiedUser/").concat(userId));
          }
        }, {
          key: "getUserObjModified",
          value: function getUserObjModified(userId) {
            return this.http.get("".concat(_API_URL, "/users/getModifiedUser/").concat(userId));
          }
        }, {
          key: "createUserService",
          value: function createUserService(user) {
            return this.http.post("".concat(_API_URL, "/users/createUser"), user);
          }
        }, {
          key: "modifyUserService",
          value: function modifyUserService(user) {
            return this.http.post("".concat(_API_URL, "/users/modifyUser"), user);
          }
        }, {
          key: "getAllUsersListService",
          value: function getAllUsersListService() {
            return this.http.get("".concat(_API_URL, "/users/getAllUsers"));
          }
        }, {
          key: "getAllRoleNameService",
          value: function getAllRoleNameService() {
            return this.http.get("".concat(_API_URL, "/users/getAllRoleNames"));
          }
        }, {
          key: "getAllRoleNameServiceU",
          value: function getAllRoleNameServiceU() {
            return this.http.get("".concat(_API_URL, "/users/getAllRoleNamesU"));
          }
        }, {
          key: "getAllAuthRole",
          value: function getAllAuthRole() {
            return this.http.get("".concat(_API_URL, "/fmsRoles/fetchAllRolesSummary"));
          } // audit log starts

        }, {
          key: "onClickOfAuthOfUsers",
          value: function onClickOfAuthOfUsers(authUser) {
            return this.http.get("".concat(_API_URL, "/users/getAllRoleNames"));
          }
        }, {
          key: "onClickOfOpenOfUsers",
          value: function onClickOfOpenOfUsers() {} // Audit log  ends for User creatrion
          // -------------------User Modification-------------
          // audit log for User Modification Starts

        }, {
          key: "onClickOfAuthOfModifyUsers",
          value: function onClickOfAuthOfModifyUsers(userId, makerId) {
            return this.http.get("".concat(_API_URL, "/users/authorizeUser/").concat(userId, "/").concat(makerId));
          }
        }, {
          key: "onClickOfCloseOfModifyUsers",
          value: function onClickOfCloseOfModifyUsers(userId, makerId) {
            return this.http.get("".concat(_API_URL, "/users/closeUser/").concat(userId, "/").concat(makerId));
          }
        }, {
          key: "onClickOfReopenOfModifyUser",
          value: function onClickOfReopenOfModifyUser(userId, makerId) {
            return this.http.get("".concat(_API_URL, "/users/reopenUser/").concat(userId, "/").concat(makerId));
          }
        }, {
          key: "onClickOfDeleteOfModifyUser",
          value: function onClickOfDeleteOfModifyUser(userobjForDelete) {
            return this.http.get("".concat(_API_URL, "/users/deleteUser/").concat(userobjForDelete));
          }
        }, {
          key: "statusChangeUser",
          value: function statusChangeUser(user_id) {
            return this.http.get("".concat(_API_URL, "/users/statusUser/").concat(user_id));
          }
        }, {
          key: "refreshGl",
          value: function refreshGl() {
            return this.http.get("".concat(_API_URL, "/refxch"));
          }
        }]);

        return _UsersService;
      }();

      _UsersService.ɵfac = function UsersService_Factory(t) {
        return new (t || _UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _UsersService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _UsersService,
        factory: _UsersService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    45033:
    /*!**************************************************************!*\
      !*** ./src/app/views/users/user-list/user-list.component.ts ***!
      \**************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserListComponent": function UserListComponent() {
          return (
            /* binding */
            _UserListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      30759);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      1858);
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      31781);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      869);
      /* harmony import */


      var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/user.service */
      18736);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-datatables */
      98546);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      7005);

      function UserListComponent_tr_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function UserListComponent_tr_28_Template_a_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);

            var users_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r2.modifyUser(users_r1);
          });

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
        }

        if (rf & 2) {
          var users_r1 = ctx.$implicit;

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 7, users_r1.verifierDtStamp));
        }
      }

      var _c0 = function _c0() {
        return ["/users/new"];
      };

      var _c1 = function _c1() {
        return ["/dashboard"];
      };

      var _UserListComponent = /*#__PURE__*/function () {
        function _UserListComponent(api, route, userApi) {
          _classCallCheck(this, _UserListComponent);

          this.api = api;
          this.route = route;
          this.userApi = userApi;
          this.dtOptions = {}; // this.dtOptions = {};

          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        }

        _createClass(_UserListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getAllUsers();
            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 5,
              processing: true,
              lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]]
            };
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Do not forget to unsubscribe the event
            this.dtTrigger.unsubscribe();
          }
        }, {
          key: "getAllUsers",
          value: function getAllUsers() {
            var _this2 = this;

            this.api.getAllUsersListService().subscribe(function (resp) {
              _this2.allUsersList = resp; // this.allUsersList = (resp as any).resp;
              // this.dataSource = new MatTableDataSource<User>(this.allUsersList);
              // this.dataSource.sort = this.sort;
              // this.dataSource.paginator = this.paginator;

              console.log(_this2.allUsersList); // if(this.allUsersList){

              _this2.dtTrigger.next(); // }

            });
          }
        }, {
          key: "modifyUser",
          value: function modifyUser(user) {
            console.log(user);
            this.currentUser = user; // this.route.navigate(["users/modify"]);

            var navigationExtras = {
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
              }
            }; // console.log(this.currentUser.intime, this.currentUser.outtime);
            //console.log(this.currentUser);department

            this.userApi.sendNavParam(navigationExtras);
            this.route.navigate(['users/new']);
          }
        }]);

        return _UserListComponent;
      }();

      _UserListComponent.ɵfac = function UserListComponent_Factory(t) {
        return new (t || _UserListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UsersService));
      };

      _UserListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _UserListComponent,
        selectors: [["npr-user-list"]],
        decls: 29,
        vars: 7,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "routerLink"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [1, "primaryColor", 3, "routerLink", "click"]],
        template: function UserListComponent_Template(rf, ctx) {
          if (rf & 1) {
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
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.allUsersList);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    19290:
    /*!************************************************************!*\
      !*** ./src/app/views/users/user-new/user-new.component.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UserNewComponent": function UserNewComponent() {
          return (
            /* binding */
            _UserNewComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      68465);
      /* harmony import */


      var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/models/fmosNewRolePermissions */
      91024);
      /* harmony import */


      var src_app_shared_models_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/models/users */
      19307);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      1858);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      93135);
      /* harmony import */


      var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/user.service */
      18736);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      869);
      /* harmony import */


      var ng2_izitoast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng2-izitoast */
      97385);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      7005);

      function UserNewComponent_div_9_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please Enter UserId ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UserNewComponent_div_9_div_1_Template, 2, 0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.userForm.controls["userId"].errors.required);
        }
      }

      function UserNewComponent_div_12_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please Enter UserName ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UserNewComponent_div_12_div_1_Template, 2, 0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r1.userForm.controls["userName"].errors.required);
        }
      }

      function UserNewComponent_img_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 36);
        }
      }

      function UserNewComponent_img_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "img", 37);
        }
      }

      function UserNewComponent_div_19_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please Enter Password ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UserNewComponent_div_19_div_1_Template, 2, 0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r4.userForm.controls["password"].errors.required);
        }
      }

      function UserNewComponent_div_22_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please Enter EmailId ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UserNewComponent_div_22_div_1_Template, 2, 0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r5.userForm.controls["email"].errors.required);
        }
      }

      function UserNewComponent_div_25_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please Enter Mobile ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UserNewComponent_div_25_div_1_Template, 2, 0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.userForm.controls["mobile"].errors.required);
        }
      }

      function UserNewComponent_option_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r21 = ctx.$implicit;

          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r7.editFlag)("value", element_r21);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](element_r21);
        }
      }

      function UserNewComponent_div_31_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please Select Role ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UserNewComponent_div_31_div_1_Template, 2, 0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r8.userForm.controls["newRoleForUser"].errors.required);
        }
      }

      function UserNewComponent_option_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r23 = ctx.$implicit;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r9.editFlag)("value", element_r23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](element_r23);
        }
      }

      function UserNewComponent_div_35_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please Select Department ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UserNewComponent_div_35_div_1_Template, 2, 0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r10.userForm.controls["department"].errors.required);
        }
      }

      function UserNewComponent_div_42_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please Enter Intime ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UserNewComponent_div_42_div_1_Template, 2, 0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r11.userForm.controls["intime"].errors.required);
        }
      }

      function UserNewComponent_div_45_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Please Enter Outime ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_45_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, UserNewComponent_div_45_div_1_Template, 2, 0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r12.userForm.controls["outtime"].errors.required);
        }
      }

      var _c0 = function _c0() {
        return ["/users"];
      };

      function UserNewComponent_div_60_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserNewComponent_div_60_Template_button_click_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r27.onFormSubmit($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](1, _c0));
        }
      }

      function UserNewComponent_div_61_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserNewComponent_div_61_div_2_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r34.editValues();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_61_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserNewComponent_div_61_div_3_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r36.onModifyFormSubmit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_61_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserNewComponent_div_61_div_4_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r39);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r38.onClickOfAuthOfModifyUsers();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_61_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserNewComponent_div_61_div_5_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r41);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r40.onClickOfReOpenOfModifyUsers();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Open");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_61_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserNewComponent_div_61_div_6_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r43);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);

            return ctx_r42.onClickOfCloseOfModifyUSers();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function UserNewComponent_div_61_Template(rf, ctx) {
        if (rf & 1) {
          var _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, UserNewComponent_div_61_div_2_Template, 3, 0, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](3, UserNewComponent_div_61_div_3_Template, 3, 0, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, UserNewComponent_div_61_div_4_Template, 3, 0, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, UserNewComponent_div_61_div_5_Template, 3, 0, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, UserNewComponent_div_61_div_6_Template, 3, 0, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserNewComponent_div_61_Template_a_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r45);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r44.onClickOfDeleteOfModifyUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "a", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r14.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r14.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r14.modifyUserObject.recordStatus == "U");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r14.modifyUserObject.recordStatus == "C");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r14.modifyUserObject.recordStatus == "O");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](6, _c0));
        }
      }

      function UserNewComponent_div_62_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 53);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 53);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 53);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Checker");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50, "Lorem Ipsum");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "img", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Checker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62, "Lorem Ipsum");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](63, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](68, "img", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](69, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](72, "First Time Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](73, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](74, "No");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](75, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](80, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](81, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](84, "Auth Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](85, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](86);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r15.userObjWithAudit.creatorId);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](26, 4, ctx_r15.userObjWithAudit.creatorDtStamp, "MM/dd/yyyy, h:mm a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r15.userObjWithAudit.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](48);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r15.userObjWithAudit.verifiedStatus);
        }
      }

      var _UserNewComponent = /*#__PURE__*/function () {
        function _UserNewComponent(roleService, userApi, route, iziToast) {
          _classCallCheck(this, _UserNewComponent);

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
          this.userObj = new src_app_shared_models_users__WEBPACK_IMPORTED_MODULE_1__.User(); // userForm: FormGroup;

          this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
            userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
            statusForUser: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('Enable'),
            userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(100)]),
            //password: new FormControl(''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required // Validators.compose([Validators.pattern(this.passwordRegex),
            // Validators.maxLength(this.maxPass),
            // Validators.minLength(this.minPass)])
            ]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.emailPattern)]),
            mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(this.phonePattern), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(10)]),
            newRoleForUser: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            department: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(),
            intime: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
            outtime: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required])
          });
          this.modifyScreen = false;
        }

        _createClass(_UserNewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this3 = this;

            setTimeout(function () {
              _this3.newRolePermissions();
            }, 2000);
            this.getAllRolesNames();
            this.navSubscription = this.userApi.getNavParam.subscribe(function (data) {
              return _this3.editUserScreen = data;
            });
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this3.roleCodes = message;
            });
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
            } //this.screenpermission();


            this.getAllDeptNames();
            this.getAllRolesNames();
            this.getUserAuditData(); //console.log('edit flag:department ' + this.editFlag);

            this.userForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({
              userId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
              userName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
              password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]),
              email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
              department: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
              mobile: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
              // rolesForUser: new FormControl(''),
              newRoleForUser: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.modifyUserObject.newRoleForUser, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
              statusForUser: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl(this.modifyUserObject.statusForUser, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
              intime: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required),
              outtime: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required)
            }); // this.getAllRolesNames();
            // this.getAllDeptNames();
          }
        }, {
          key: "getAllRolesNames",
          value: function getAllRolesNames() {
            var _this4 = this;

            this.roleService.getAllRoles().subscribe(function (data) {
              _this4.allRoleNames = data;
              console.log(_this4.allRoleNames, data);
            });
          }
        }, {
          key: "getAllDeptNames",
          value: function getAllDeptNames() {
            var _this5 = this;

            this.roleService.getAllDept().subscribe(function (data) {
              _this5.allDeptNames = data;
              console.log(_this5.allDeptNames);
            });
          }
        }, {
          key: "onClickOfCloseOfModifyUSers",
          value: function onClickOfCloseOfModifyUSers() {
            var _this6 = this;

            //console.log('on click of close of Modify user');
            this.modifyUserObject.creatorId = localStorage.getItem('currentUser');
            this.userApi.onClickOfCloseOfModifyUsers(this.modifyUserObject.userId, this.modifyUserObject.creatorId).subscribe(function (dataofCloseFromBackend) {
              //console.log(dataofCloseFromBackend);
              _this6.statusFlag = dataofCloseFromBackend;

              _this6.iziToast.show({
                message: "You closed the user record",
                image: "assets/images/user.png",
                icon: 'ico ico-success',
                theme: "dark",
                layout: 2,
                // imageWidth:50,
                balloon: false,
                position: "topRight",
                progressBarColor: "green",
                pauseOnHover: true
              });

              if (_this6.statusFlag === true) {
                // Swal.fire( 'You closed the user record');
                // //console.log('coming or not');
                // this.getUpdatedModifiedObject();
                // this.cdr.markForCheck();
                // this.getUserAuditData();
                _this6.iziToast.show({
                  message: "You closed the user record",
                  image: "assets/images/user.png",
                  icon: 'ico ico-success',
                  theme: "dark",
                  layout: 2,
                  // imageWidth:50,
                  balloon: false,
                  position: "topRight",
                  progressBarColor: "green",
                  pauseOnHover: true
                });
              }

              if (_this6.statusFlag === false) {
                // Swal.fire({
                //   type: 'error',
                //   text: 'Failed to close user '
                // });
                _this6.iziToast.show({
                  message: "Failed to close user",
                  image: "assets/images/user.png",
                  icon: 'ico ico-success',
                  theme: "dark",
                  layout: 2,
                  // imageWidth:50,
                  balloon: false,
                  position: "topRight",
                  progressBarColor: "red",
                  pauseOnHover: true
                });
              }
            });
          }
        }, {
          key: "onClickOfReOpenOfModifyUsers",
          value: function onClickOfReOpenOfModifyUsers() {
            var _this7 = this;

            //console.log('on click of reopen of Modify user');
            this.modifyUserObject.creatorId = localStorage.getItem('currentUser');
            this.userApi.onClickOfReopenOfModifyUser(this.modifyUserObject.userId, this.modifyUserObject.creatorId).subscribe(function (dataOfReopen) {
              //console.log('dataOfReopen' + dataOfReopen);
              _this7.statusFlag = dataOfReopen; //console.log(this.modifyUserObject);

              if (_this7.statusFlag === true) {
                // Swal.fire('Record is opened ');
                _this7.iziToast.show({
                  message: "Record is opened",
                  image: "assets/images/user.png",
                  icon: 'ico ico-success',
                  theme: "dark",
                  layout: 2,
                  // imageWidth:50,
                  balloon: false,
                  position: "topRight",
                  progressBarColor: "green",
                  pauseOnHover: true
                }); //console.log('coming or not');


                _this7.getUpdatedModifiedObject(); // this.cdr.markForCheck();


                _this7.getUserAuditData();
              }

              if (_this7.statusFlag === false) {
                // Swal.fire({
                //   type: 'error',
                //   text: 'Failed to create user '
                // });
                _this7.iziToast.show({
                  message: "Failed to create user",
                  image: "assets/images/user.png",
                  icon: 'ico ico-success',
                  theme: "dark",
                  layout: 2,
                  // imageWidth:50,
                  balloon: false,
                  position: "topRight",
                  progressBarColor: "green",
                  pauseOnHover: true
                });
              }
            });
          }
        }, {
          key: "onClickOfDeleteOfModifyUser",
          value: function onClickOfDeleteOfModifyUser() {
            var _this8 = this;

            console.log(this.modifyUserObject); // this.modifyUserObject.intime = new Date(this.modifyUserObject.intime);

            this.userApi.onClickOfDeleteOfModifyUser(this.modifyUserObject.userId).subscribe(function (datafrombackendtoDelete) {
              //console.log('deleteData', datafrombackendtoDelete);
              _this8.deleteStatusFlag = datafrombackendtoDelete;

              if (_this8.deleteStatusFlag === true) {
                // Swal.fire(
                //   'User Deleted ',
                // );
                _this8.iziToast.show({
                  message: "User Deleted",
                  image: "assets/images/user.png",
                  icon: 'ico ico-success',
                  theme: "dark",
                  layout: 2,
                  // imageWidth:50,
                  balloon: false,
                  position: "topRight",
                  progressBarColor: "green",
                  pauseOnHover: true
                });

                _this8.getUserAuditData();
              }

              if (_this8.deleteStatusFlag === false) {
                // Swal.fire({
                //   type: 'error',
                //   text: 'Failed to delete user'
                // });
                _this8.iziToast.show({
                  message: "Failed to delete user",
                  image: "assets/images/user.png",
                  icon: 'ico ico-success',
                  theme: "dark",
                  layout: 2,
                  // imageWidth:50,
                  balloon: false,
                  position: "topRight",
                  progressBarColor: "green",
                  pauseOnHover: true
                });
              } // this.router.navigateByUrl('users');

            }); //console.log('method call fro delete finished');
          }
        }, {
          key: "onClickOfAuthOfModifyUsers",
          value: function onClickOfAuthOfModifyUsers() {
            var _this9 = this;

            console.log('on click of auth ', localStorage.getItem('currentUser'));
            this.userApi.onClickOfAuthOfModifyUsers(this.modifyUserObject.userId, localStorage.getItem('currentUser')).subscribe(function (dataOfModifyUserFromBackEnd) {
              //console.log(dataOfModifyUserFromBackEnd);
              _this9.authStatusFlag = dataOfModifyUserFromBackEnd;
              console.log(_this9.modifyUserObject);
              console.log(_this9.authStatusFlag);

              if (_this9.authStatusFlag === true) {
                // Swal.fire( 'you Authorized the user ');
                _this9.iziToast.show({
                  message: "you Authorized the user ",
                  image: "assets/images/user.png",
                  icon: 'ico ico-success',
                  theme: "dark",
                  layout: 2,
                  // imageWidth:50,
                  balloon: false,
                  position: "topRight",
                  progressBarColor: "green",
                  pauseOnHover: true
                });

                console.log('coming or not');

                _this9.getUpdatedModifiedObject(); // this.cdr.markForCheck();


                _this9.getUserAuditData();
              }

              if (_this9.authStatusFlag === false) {
                // Swal.fire({
                //   type: 'error',
                //   text: 'maker cannot authorize the user '
                // });
                _this9.iziToast.show({
                  message: "maker cannot authorize the user",
                  image: "assets/images/user.png",
                  icon: 'ico ico-success',
                  theme: "dark",
                  layout: 2,
                  // imageWidth:50,
                  balloon: false,
                  position: "topRight",
                  progressBarColor: "green",
                  pauseOnHover: true
                });
              }
            });
          }
        }, {
          key: "getUpdatedModifiedObject",
          value: function getUpdatedModifiedObject() {
            var _this10 = this;

            //console.log('this is get opration');
            //console.log(this.modifyUserObject.userId);
            //console.log('service call');
            this.userApi.getUserObjModified(this.modifyUserObject.userId).subscribe(function (gettingBackendData) {
              //console.log('gettingBackendData', gettingBackendData);
              _this10.modifyUserObject = gettingBackendData; //console.log(this.modifyUserObject);
            });
          }
        }, {
          key: "onModifyFormSubmit",
          value: function onModifyFormSubmit() {
            var _this11 = this;

            this.modifyUserObject.userId = this.userForm.get('userId').value, this.modifyUserObject.userName = this.userForm.get('userName').value;
            this.modifyUserObject.encryptedPassword = this.userForm.get('password').value;
            this.modifyUserObject.mobile = this.userForm.get('mobile').value;
            this.modifyUserObject.statusForUser = this.userForm.get('statusForUser').value;
            this.modifyUserObject.email = this.userForm.get('email').value;
            this.modifyUserObject.department = this.userForm.get('department').value;
            this.modifyUserObject.roleForUser = this.userForm.get('rolesForUser').value;
            this.modifyUserObject.newRoleForUser = this.userForm.get('newRoleForUser').value;
            this.modifyUserObject.creatorId = localStorage.getItem('currentUser'); //console.log('modifyUserObject');
            //console.log(this.modifyUserObject);
            //console.log('Creator', this.modifyUserObject.creatorId);

            if (this.modifyUserObject.intime > this.modifyUserObject.outtime) {
              // Swal.fire("From time should be lower and to time should be higher")
              this.iziToast.show({
                message: "From time should be lower and to time should be higher",
                image: "assets/images/user.png",
                icon: 'ico ico-success',
                theme: "dark",
                layout: 2,
                // imageWidth:50,
                balloon: false,
                position: "topRight",
                progressBarColor: "green",
                pauseOnHover: true
              });
            }

            this.userApi.modifyUserService(this.modifyUserObject).subscribe(function (data) {
              _this11.statusFlag = data;

              if (_this11.statusFlag === true) {
                // Swal.fire('You modified the user.');
                _this11.iziToast.show({
                  message: "You modified the user.",
                  image: "assets/images/user.png",
                  icon: 'ico ico-success',
                  theme: "dark",
                  layout: 2,
                  // imageWidth:50,
                  balloon: false,
                  position: "topRight",
                  progressBarColor: "green",
                  pauseOnHover: true
                });

                _this11.getUserAuditData();

                _this11.editFlag = false;
              }

              if (_this11.statusFlag === false) {
                // Swal.fire({
                //   type: 'error',
                //   text: 'Failed to modify user '
                // });
                _this11.iziToast.show({
                  message: "Failed to modify user.",
                  image: "assets/images/user.png",
                  icon: 'ico ico-error',
                  theme: "dark",
                  layout: 2,
                  // imageWidth:50,
                  balloon: false,
                  position: "topRight",
                  progressBarColor: "red",
                  pauseOnHover: true
                });
              }
            });
          }
        }, {
          key: "getUserAuditData",
          value: function getUserAuditData() {
            var _this12 = this;

            this.userApi.getUserAuditService(this.modifyUserObject.userId).subscribe(function (data) {
              _this12.userObjWithAudit = data;
              console.log('dev code user audit: ', _this12.userObjWithAudit);
              console.log(_this12.userObjWithAudit);

              if (_this12.userObjWithAudit.verifiedStatus === 'U') {
                _this12.userObjWithAudit.verifiedStatus = 'UNAUTHORIZED';
              }

              if (_this12.userObjWithAudit.verifiedStatus === 'A') {
                _this12.userObjWithAudit.verifiedStatus = 'AUTHORIZED';
              }
              /*
              */


              if (_this12.userObjWithAudit.verifiedOnce === 'N') {
                _this12.userObjWithAudit.verifiedOnce = 'NO';
              }

              if (_this12.userObjWithAudit.verifiedOnce === 'Y') {
                _this12.userObjWithAudit.verifiedOnce = 'YES';
              }
              /**
               * setting record status
               */


              if (_this12.userObjWithAudit.recordStatus === 'O') {
                _this12.userObjWithAudit.recordStatus = 'OPEN';
              }

              if (_this12.userObjWithAudit.recordStatus === 'C') {
                _this12.userObjWithAudit.recordStatus = 'CLOSED';
              }
            });
          }
        }, {
          key: "onFormSubmit",
          value: function onFormSubmit(event) {
            var _this13 = this;

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
            this.userObj.intime = this.userForm.get('intime').value; //this.userObj.pwdChangeDate=this.userForm.get('pwdChangeDate').value;

            this.userObj.outtime = this.userForm.get('outtime').value;
            console.log(this.userObj); // if(this.userObj.intime>this.userObj.outtime){
            //   Swal.fire("Intime should not be greater than out time")
            // }
            // else{

            this.userApi.createUserService(this.userObj).subscribe(function (data) {
              //console.log(this.userObj);
              console.log('create');
              _this13.statusFlag = data; //console.log(this.allRoleNames);

              if (_this13.statusFlag === true) {
                // Swal.fire(
                //   'You Created the user ',
                // );
                _this13.iziToast.show({
                  message: "You Created the user",
                  image: "assets/images/user.png",
                  icon: 'ico ico-success',
                  theme: "dark",
                  layout: 2,
                  // imageWidth:50,
                  balloon: false,
                  position: "topRight",
                  progressBarColor: "green",
                  pauseOnHover: true
                }); // /added by vidya for issue id 583
                // this.enableSubmit=true
                //console.log("this is to confirm", this.userObj);


                _this13.getUserAuditData();
              }

              if (_this13.statusFlag === false) {
                // Swal.fire({
                //   type: 'error',
                //   text: 'Failed to create user ',
                // });
                _this13.iziToast.show({
                  message: "Failed to create user",
                  image: "assets/images/user.png",
                  icon: 'ico ico-error',
                  theme: "dark",
                  layout: 2,
                  // imageWidth:50,
                  balloon: false,
                  position: "topRight",
                  progressBarColor: "red",
                  pauseOnHover: true
                });
              }
            }); // }
          }
        }, {
          key: "newRolePermissions",
          value: function newRolePermissions() {
            this.roleService.fetchScreenPermissions('users');
          }
        }, {
          key: "editValues",
          value: function editValues() {
            this.editFlag = false;
          }
        }]);

        return _UserNewComponent;
      }();

      _UserNewComponent.ɵfac = function UserNewComponent_Factory(t) {
        return new (t || _UserNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_2__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ng2_izitoast__WEBPACK_IMPORTED_MODULE_4__.Ng2IzitoastService));
      };

      _UserNewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _UserNewComponent,
        selectors: [["npr-user-new"]],
        decls: 63,
        vars: 35,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "dbCardStyle"], [1, "row", "gy-4"], [1, "col-lg-4"], ["id", "usersId", "oninput", "this.value = this.value.toUpperCase()", "placeholder", "User Id", "required", "", "formControlName", "userId", "type", "text", "value", "", 1, "form-control", 3, "readonly", "ngModel", "ngModelChange"], ["class", "errorColor", 4, "ngIf"], ["id", "usersName", "type", "text", "formControlName", "userName", "placeholder", "User Name", "value", "", "onkeypress", "return /[a-z]/i.test(event.key)", 1, "form-control", 3, "ngModel", "readonly", "ngModelChange"], [1, "form-control", "d-flex"], ["id", "usersPassword", "type", "password", "formControlName", "password", "placeholder", "New Password", "value", "", 1, "noborder", 3, "type", "ngModel", "readonly", "ngModelChange"], ["toggle", "#pwdFld", 1, "visibility", 3, "click"], ["class", "showPwd", "src", "assets/images/show-icon.svg", "alt", "...", 4, "ngIf"], ["class", "hidePwd", "src", "assets/images/hide-icon.svg", "alt", "...", 4, "ngIf"], ["id", "usersPassword", "formControlName", "email", "placeholder", "Email", "value", "", 1, "form-control", 3, "ngModel", "readonly", "ngModelChange"], ["id", "usersPassword", "type", "number", "formControlName", "mobile", "placeholder", "Mobile", "value", "", 1, "form-control", 3, "ngModel", "readonly", "ngModelChange"], ["multiple", "true", "formControlName", "newRoleForUser", "readonly", "", "aria-label", "Default select example", 1, "form-select"], ["selected", ""], [3, "disabled", "value", 4, "ngFor", "ngForOf"], ["formControlName", "department", "aria-label", "Default select example", 1, "form-select", 3, "ngModel", "ngModelChange"], [1, "col-lg-8"], ["for", "roleName", 1, "formLbl"], [1, "col-lg-6"], ["id", "timeStart", "type", "time", "formControlName", "intime", "placeholder", "09:00", "value", "", 1, "form-control", 3, "readonly", "ngModel", "ngModelChange"], ["id", "timeEnd", "type", "time", "formControlName", "outtime", "placeholder", "18:00", "value", "", 1, "form-control", 3, "readonly", "ngModel", "ngModelChange"], ["formControlName", "statusForUser", 1, "row", "g-2"], [1, "radio", "radioStyle"], ["id", "radio-1", "name", "radio", "type", "radio", "checked", "", 3, "disabled"], ["for", "radio-1", 1, "radio-label"], ["id", "radio-2", "name", "radio", "type", "radio", 3, "disabled"], ["for", "radio-2", 1, "radio-label"], ["class", "col-lg-12", 4, "ngIf"], ["class", "dbCardStyle", 4, "ngIf"], [1, "errorColor"], [4, "ngIf"], ["src", "assets/images/show-icon.svg", "alt", "...", 1, "showPwd"], ["src", "assets/images/hide-icon.svg", "alt", "...", 1, "hidePwd"], [3, "disabled", "value"], [1, "col-lg-12"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], [1, "col-auto"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["class", "col-auto", 4, "ngIf"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."]],
        template: function UserNewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "User Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function UserNewComponent_Template_input_ngModelChange_8_listener($event) {
              return ctx.modifyUserObject.userId = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, UserNewComponent_div_9_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function UserNewComponent_Template_input_ngModelChange_11_listener($event) {
              return ctx.modifyUserObject.userName = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](12, UserNewComponent_div_12_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function UserNewComponent_Template_input_ngModelChange_15_listener($event) {
              return ctx.modifyUserObject.encryptedPassword = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function UserNewComponent_Template_span_click_16_listener() {
              return ctx.hide = !ctx.hide;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, UserNewComponent_img_17_Template, 1, 0, "img", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, UserNewComponent_img_18_Template, 1, 0, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, UserNewComponent_div_19_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function UserNewComponent_Template_input_ngModelChange_21_listener($event) {
              return ctx.modifyUserObject.email = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](22, UserNewComponent_div_22_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function UserNewComponent_Template_input_ngModelChange_24_listener($event) {
              return ctx.modifyUserObject.mobile = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](25, UserNewComponent_div_25_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "select", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "option", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](29, "Roles");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, UserNewComponent_option_30_Template, 2, 3, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](31, UserNewComponent_div_31_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "select", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function UserNewComponent_Template_select_ngModelChange_33_listener($event) {
              return ctx.modifyUserObject.department = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](34, UserNewComponent_option_34_Template, 2, 3, "option", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](35, UserNewComponent_div_35_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](38, "Select the time range for operating (in hours)");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function UserNewComponent_Template_input_ngModelChange_41_listener($event) {
              return ctx.modifyUserObject.intime = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](42, UserNewComponent_div_42_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function UserNewComponent_Template_input_ngModelChange_44_listener($event) {
              return ctx.modifyUserObject.outtime = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](45, UserNewComponent_div_45_Template, 2, 1, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "label", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "User Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](52, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "label", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54, "Enable");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](57, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "label", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](59, "Disable");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](60, UserNewComponent_div_60_Template, 8, 2, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](61, UserNewComponent_div_61_Template, 13, 7, "div", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](62, UserNewComponent_div_62_Template, 87, 7, "div", 33);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.userForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx.editFlag)("ngModel", ctx.modifyUserObject.userId);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userForm.controls["userId"].invalid && (ctx.userForm.controls["userId"].dirty || ctx.userForm.controls["userId"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.modifyUserObject.userName)("readonly", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userForm.controls["userName"].invalid && (ctx.userForm.controls["userName"].dirty || ctx.userForm.controls["userName"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx.hide ? "password" : "text")("ngModel", ctx.modifyUserObject.encryptedPassword)("readonly", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.hide);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.hide);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userForm.controls["password"].invalid && (ctx.userForm.controls["password"].dirty || ctx.userForm.controls["password"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.modifyUserObject.email)("readonly", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userForm.controls["email"].invalid && (ctx.userForm.controls["email"].dirty || ctx.userForm.controls["email"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.modifyUserObject.mobile)("readonly", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userForm.controls["mobile"].invalid && (ctx.userForm.controls["mobile"].dirty || ctx.userForm.controls["mobile"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.allRoleNames);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userForm.controls["newRoleForUser"].invalid && (ctx.userForm.controls["newRoleForUser"].dirty || ctx.userForm.controls["newRoleForUser"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx.modifyUserObject.department);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.allDeptNames);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userForm.controls["department"].invalid && (ctx.userForm.controls["department"].dirty || ctx.userForm.controls["department"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx.editFlag)("ngModel", ctx.modifyUserObject.intime);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userForm.controls["intime"].invalid && (ctx.userForm.controls["intime"].dirty || ctx.userForm.controls["intime"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", ctx.editFlag)("ngModel", ctx.modifyUserObject.outtime);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.userForm.controls["outtime"].invalid && (ctx.userForm.controls["outtime"].dirty || ctx.userForm.controls["outtime"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.modifyScreen);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.modifyScreen || ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.modifyUserObject.userId != null);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectMultipleControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
        styles: [".errorColor[_ngcontent-%COMP%] {\n  color: #e6224a;\n}\n\n.noborder[_ngcontent-%COMP%] {\n  border: none;\n}\n\n.visibility[_ngcontent-%COMP%] {\n  margin-left: 100px;\n  margin-top: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItbmV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUNBO0VBQ0ksWUFBQTtBQUVKOztBQUFBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBR0oiLCJmaWxlIjoidXNlci1uZXcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3JDb2xvcntcclxuICAgIGNvbG9yOiAjZTYyMjRhO1xyXG59XHJcbi5ub2JvcmRlcntcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG4udmlzaWJpbGl0eXtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMDBweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    10666:
    /*!*****************************************************!*\
      !*** ./src/app/views/users/users-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UsersRoutingModule": function UsersRoutingModule() {
          return (
            /* binding */
            _UsersRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      869);
      /* harmony import */


      var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./user-list/user-list.component */
      45033);
      /* harmony import */


      var _user_new_user_new_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user-new/user-new.component */
      19290);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      1858);

      var routes = [{
        path: "",
        component: _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_0__.UserListComponent
      }, {
        path: "new",
        component: _user_new_user_new_component__WEBPACK_IMPORTED_MODULE_1__.UserNewComponent
      }];

      var _UsersRoutingModule = /*#__PURE__*/_createClass(function _UsersRoutingModule() {
        _classCallCheck(this, _UsersRoutingModule);
      });

      _UsersRoutingModule.ɵfac = function UsersRoutingModule_Factory(t) {
        return new (t || _UsersRoutingModule)();
      };

      _UsersRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _UsersRoutingModule
      });
      _UsersRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_UsersRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    41462:
    /*!*********************************************!*\
      !*** ./src/app/views/users/users.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "UsersModule": function UsersModule() {
          return (
            /* binding */
            _UsersModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      7005);
      /* harmony import */


      var _users_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./users-routing.module */
      10666);
      /* harmony import */


      var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./user-list/user-list.component */
      45033);
      /* harmony import */


      var _user_new_user_new_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./user-new/user-new.component */
      19290);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-datatables */
      98546);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      68465);
      /* harmony import */


      var ng2_izitoast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng2-izitoast */
      97385);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      1858);

      var _UsersModule = /*#__PURE__*/_createClass(function _UsersModule() {
        _classCallCheck(this, _UsersModule);
      });

      _UsersModule.ɵfac = function UsersModule_Factory(t) {
        return new (t || _UsersModule)();
      };

      _UsersModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _UsersModule
      });
      _UsersModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsersRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, ng2_izitoast__WEBPACK_IMPORTED_MODULE_4__.Ng2IziToastModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_UsersModule, {
          declarations: [_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_1__.UserListComponent, _user_new_user_new_component__WEBPACK_IMPORTED_MODULE_2__.UserNewComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _users_routing_module__WEBPACK_IMPORTED_MODULE_0__.UsersRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTablesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, ng2_izitoast__WEBPACK_IMPORTED_MODULE_4__.Ng2IziToastModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_views_users_users_module_ts-es5.js.map