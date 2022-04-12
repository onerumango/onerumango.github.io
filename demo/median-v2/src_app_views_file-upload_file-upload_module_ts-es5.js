(function () {
  "use strict";

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_file-upload_file-upload_module_ts"], {
    /***/
    31484:
    /*!***********************************************************************!*\
      !*** ./src/app/shared/models/excel-data-processing-dto-audit-resp.ts ***!
      \***********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExcelDataProcessingAuditRespDTO": function ExcelDataProcessingAuditRespDTO() {
          return (
            /* binding */
            _ExcelDataProcessingAuditRespDTO
          );
        }
        /* harmony export */

      });

      var _ExcelDataProcessingAuditRespDTO = /*#__PURE__*/_createClass(function _ExcelDataProcessingAuditRespDTO() {
        _classCallCheck(this, _ExcelDataProcessingAuditRespDTO);
      });
      /***/

    },

    /***/
    86981:
    /*!************************************************************!*\
      !*** ./src/app/shared/models/excel-data-processing-dto.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExcelDataProcessingReqDTO": function ExcelDataProcessingReqDTO() {
          return (
            /* binding */
            _ExcelDataProcessingReqDTO
          );
        }
        /* harmony export */

      });

      var _ExcelDataProcessingReqDTO = /*#__PURE__*/_createClass(function _ExcelDataProcessingReqDTO() {
        _classCallCheck(this, _ExcelDataProcessingReqDTO);

        this.proceedDuplicates = false;
      });
      /***/

    },

    /***/
    19130:
    /*!*****************************************************************!*\
      !*** ./src/app/shared/models/excel-data-processing-resp-dto.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExcelDataProcessingRespDTO": function ExcelDataProcessingRespDTO() {
          return (
            /* binding */
            _ExcelDataProcessingRespDTO
          );
        }
        /* harmony export */

      });

      var _ExcelDataProcessingRespDTO = /*#__PURE__*/_createClass(function _ExcelDataProcessingRespDTO() {
        _classCallCheck(this, _ExcelDataProcessingRespDTO);
      });
      /***/

    },

    /***/
    21597:
    /*!**************************************************!*\
      !*** ./src/app/shared/services/roles.service.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RoleService": function RoleService() {
          return (
            /* binding */
            _RoleService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/models/fmosNewRolePermissions */
      35383);
      /* harmony import */


      var src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/config/app.constant */
      3118);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _RoleService = /*#__PURE__*/function () {
        function _RoleService(http) {
          _classCallCheck(this, _RoleService);

          this.http = http;
          this.username = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('');
          this.tabData = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]); //public screenLabelList = new BehaviorSubject([]);

          this.screenLabelList = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels());
          this.labelData = this.screenLabelList.asObservable();
          this.screenData = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels();
          this.screenwisePermissions = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
          this.httpHeader = {
            header: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
              'Content-type': 'application/json'
            })
          };
          this._baseURL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_1__.AppConstants.baseURL + '/role';
          this._fmosbaseURL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_1__.AppConstants.baseURL + '/fmsRoles';
          this.baseURL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_1__.AppConstants.baseURL;
        }

        _createClass(_RoleService, [{
          key: "createRoles",
          value: function createRoles(role) {
            // return this.http.delete(`${this._baseURL}/${userId}/${userIdLoggedIn}`, { responseType: 'text' });
            return this.http.post("".concat(this._baseURL) + '/createRole', role);
          }
        }, {
          key: "getRoleByRoleName",
          value: function getRoleByRoleName(roleName) {
            return this.http.get("".concat(this._baseURL, "/").concat(roleName));
          }
        }, {
          key: "getAllRoles",
          value: function getAllRoles() {
            //return this.http.get(`${this._baseURL}` + '/roles');
            return this.http.get("".concat(this.baseURL) + '/users' + '/getAllAuthRole');
          }
        }, {
          key: "getAllDept",
          value: function getAllDept() {
            //return this.http.get(`${this._baseURL}` + '/roles');
            return this.http.get("".concat(this.baseURL) + '/users' + '/getAllAuthDepts');
          }
        }, {
          key: "getAllRolesSummary",
          value: function getAllRolesSummary() {
            //return this.http.get(`${this._baseURL}` + '/roles');
            return this.http.get("".concat(this._fmosbaseURL) + '/fetchAllRolesSummary');
          }
        }, {
          key: "fetchAllAuthRoles",
          value: function fetchAllAuthRoles() {
            return this.http.get("".concat(this._baseURL) + '/fetchAuthRoles');
          }
        }, {
          key: "modifyRoleService",
          value: function modifyRoleService(modifyRole) {
            return this.http.put("".concat(this._baseURL) + "/modifyRole", modifyRole);
          }
        }, {
          key: "newmodifyRoleService",
          value: function newmodifyRoleService(modifyRole) {
            return this.http.put("".concat(this._fmosbaseURL) + "/modifyRole", modifyRole);
          }
        }, {
          key: "verifyRole",
          value: function verifyRole(roleName, userIdLoggedIn) {
            // return this.http.get(`${this._baseURL}/${roleName}/${userIdLoggedIn}`);
            return this.http.get("".concat(this._fmosbaseURL, "/authorize/").concat(roleName, "/").concat(userIdLoggedIn));
          }
        }, {
          key: "deleteRole",
          value: function deleteRole(roleName, userIdLoggedIn) {
            return this.http["delete"]("".concat(this._fmosbaseURL, "/").concat(roleName, "/").concat(userIdLoggedIn), {
              responseType: 'text'
            });
          }
        }, {
          key: "closelockRecord",
          value: function closelockRecord(roleName, userIdLoggedIn) {
            return this.http.get("".concat(this._fmosbaseURL, "/close/").concat(roleName, "/").concat(userIdLoggedIn));
          }
        }, {
          key: "reopenRecord",
          value: function reopenRecord(roleName, userIdLoggedIn) {
            return this.http.get("".concat(this._fmosbaseURL, "/reopen/").concat(roleName, "/").concat(userIdLoggedIn));
          } //permission

        }, {
          key: "getAllPermission",
          value: function getAllPermission() {
            return this.http.get("".concat(this._baseURL) + '/permission');
          }
        }, {
          key: "fetchScreenData",
          value: function fetchScreenData() {
            var userIdLoggedIn = localStorage.getItem('userFromLogin');
            return this.http.get("".concat(this._fmosbaseURL, "/allScreenUser/").concat(userIdLoggedIn));
          }
        }, {
          key: "fetchnewscreenlabels",
          value: function fetchnewscreenlabels() {
            return this.http.get("".concat(this._fmosbaseURL) + '/fetchTabLabelAndScreen');
          }
        }, {
          key: "createnewrole",
          value: function createnewrole(roledata) {
            return this.http.post("".concat(this._fmosbaseURL) + '/saveRoleDetails', roledata);
          }
        }, {
          key: "fetchfmosroles",
          value: function fetchfmosroles() {
            var userIdLoggedIn = localStorage.getItem('userFromLogin');
            return this.http.get("".concat(this._fmosbaseURL, "/allRolePermissionForUser/").concat(userIdLoggedIn));
          }
        }, {
          key: "fetchNewRolePermissions",
          value: function fetchNewRolePermissions(userIdLoggedIn) {
            var _this = this;

            this.http.get("".concat(this._fmosbaseURL, "/allRolePermissionForUser/").concat(userIdLoggedIn)).subscribe(function (data) {
              localStorage.setItem('userPermissions', JSON.stringify(data));
              _this.storeuserpermissions = data;
            });
          }
        }, {
          key: "fetchScreenPermissions",
          value: function fetchScreenPermissions(screenName) {
            var userPermissions = JSON.parse(localStorage.getItem('userPermissions'));
            console.log('scr', screenName, userPermissions);
            var labellist = [];
            this.screenData = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels();

            if (userPermissions) {
              var labelList = userPermissions.labels;

              if (labelList) {
                labelList.sort(function (a, b) {
                  return a.labelId - b.labelId;
                });
              }

              var permissionList = userPermissions.screenAndPermissionsDTO;
              console.log(permissionList);

              if (permissionList) {
                var idexist = permissionList.findIndex(function (item) {
                  return item.screenName.toLowerCase() == screenName.toLowerCase();
                });

                if (idexist >= 0) {
                  var rolelist = permissionList[idexist];
                  var screenvisibility = rolelist.permissions.toString();

                  for (var i = 0; i < screenvisibility.length; i++) {
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
          } //dynamic roles

        }, {
          key: "fetchdynamicrolesdata",
          value: function fetchdynamicrolesdata(roleName) {
            return this.http.get("".concat(this._fmosbaseURL, "/fetchRoleData/").concat(roleName));
          } //end of dynamic roles

        }, {
          key: "preparingrolesdata",
          value: function preparingrolesdata(data) {
            var arrayC = [];
            var arrayB = data.screenDto;
            var labelsarray = data.labelDto;
            var permissionsarray = data.permissionDto; //fetch screens for tabs

            data.tabDto.forEach(function (element) {
              var screen = [];
              var screenslist = []; //fetching screen list 

              arrayB.forEach(function (items) {
                if (element.tabId == items.screensId.tabId) {
                  var idexist = permissionsarray.findIndex(function (item) {
                    return item.permissionId.screenId == items.screensId.screenId;
                  });
                  screen.push(items.screenName);
                  screenslist.push({
                    screenname: items.screenName,
                    screenid: items.screensId.screenId,
                    permission: permissionsarray[idexist].permissions
                  });
                }
              }); //end of fetching screen list
              //fetching labels for screen

              var screenvisibility = element.visibility.toString();
              var label = [];
              var labellist = [];

              for (var i = 0; i < screenvisibility.length; i++) {
                if (screenvisibility.charAt(i) == 1) {
                  label.push(labelsarray[i].labelName);
                  labellist.push(labelsarray[i]);
                }
              } //end of fetching labels for screen


              arrayC.push({
                tabname: element.tabName,
                screens: screen,
                screenlist: screenslist,
                labels: label,
                labelslist: labellist
              });
            });
            this.tabData.next(arrayC);
          }
        }, {
          key: "EnablescreenPermissions",
          value: function EnablescreenPermissions() {
            var userPermissions = JSON.parse(localStorage.getItem('userPermissions'));
            var permissionlist = [];

            if (userPermissions) {
              var labelsdata = userPermissions.labels;
              labelsdata.sort(function (a, b) {
                return a.labelId - b.labelId;
              });
              var screensdata = userPermissions.screenAndPermissionsDTO;
              var viewindex = labelsdata.findIndex(function (item) {
                return item.labelName.toLowerCase() == 'view';
              });
              ;

              for (var i = 0; i < screensdata.length; i++) {
                var data = screensdata[i].permissions.toString();

                if (data.charAt(viewindex) == 1 || data.charAt(viewindex) == "1") {
                  permissionlist.push(screensdata[i].screenName);
                }
              } //for loop endng

            } //if


            console.log("methods are ", permissionlist);
            this.screenwisePermissions.next(permissionlist);
          }
        }]);

        return _RoleService;
      }();

      _RoleService.ɵfac = function RoleService_Factory(t) {
        return new (t || _RoleService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _RoleService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _RoleService,
        factory: _RoleService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    12828:
    /*!********************************************************************************!*\
      !*** ./src/app/views/file-upload/authorize-excel/authorize-excel.component.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthorizeExcelComponent": function AuthorizeExcelComponent() {
          return (
            /* binding */
            _AuthorizeExcelComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var src_app_shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/models/pending-for-auth-dto */
      27721);
      /* harmony import */


      var src_app_views_users_users_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/views/users/users.dto */
      56015);
      /* harmony import */


      var src_app_shared_models_audit_logs_dto_first_second__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/models/audit-logs-dto-first-second */
      17283);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/models/fmosNewRolePermissions */
      35383);
      /* harmony import */


      var jspdf_autotable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! jspdf-autotable */
      56587);
      /* harmony import */


      var jspdf_autotable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! jspdf */
      75585);
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular-datatables */
      50481);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      97544);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var src_app_shared_services_roles_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/roles.service */
      21597);
      /* harmony import */


      var src_app_views_users_users_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! src/app/views/users/users.service */
      59119);
      /* harmony import */


      var src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! src/app/shared/services/excel.service */
      58219); // import { ToastService } from 'src/app/shared/services/toast.service';


      function AuthorizeExcelComponent_tr_37_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuthorizeExcelComponent_tr_37_Template_button_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);

            var data_r10 = restoredCtx.$implicit;
            var i_r11 = restoredCtx.index;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

            return ctx_r12.queryDetailsDataByParam(data_r10, i_r11);
          });

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

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r10 = ctx.$implicit;
          var i_r11 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("id", "btnGetDetails" + i_r11);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r10.externalSysName);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r10.currency);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r10.inputBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r10.batchNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r10.processName);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](16, 13, data_r10.processingDate, "medium"));

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r10.authStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r10.uploadStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r10.fileName);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r10.totalNoOfRecord);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r10.totalCredit);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r10.totalDebit);
        }
      }

      function AuthorizeExcelComponent_div_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Remarks");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "textarea", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](8, "Overrides");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "textarea", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.remarks);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r1.overrides);
        }
      }

      function AuthorizeExcelComponent_div_42_tr_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuthorizeExcelComponent_div_42_tr_29_Template_button_click_24_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r17);

            var data_r15 = restoredCtx.$implicit;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);

            var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](54);

            return ctx_r16.openDialog(_r8, data_r15);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, " View ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r15.account);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r15.ccyCd);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r15.id.branchCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r15.amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r15.lcyEquivalent);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r15.drCr);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r15.exchRate);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r15.relatedAccount);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r15.addlText);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r15.accDesc);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r15.acumenJournal);
        }
      }

      function AuthorizeExcelComponent_div_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "table", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "account");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](7, "currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "branch");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11, "amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "lcy ammount");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15, "dR/cr");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "exchange rate");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](19, "related acc");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "add text");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, "account description");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, "Treasury Reference");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](26, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](27, "Process");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](29, AuthorizeExcelComponent_div_42_tr_29_Template, 26, 11, "tr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dtOptions", ctx_r2.dtOptions[1])("dtTrigger", ctx_r2.dtTrigger2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](28);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx_r2.pendingForAuthDetailsDTOList);
        }
      }

      function AuthorizeExcelComponent_button_44_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuthorizeExcelComponent_button_44_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

            return ctx_r18.downloadData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Export Excel");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
      }

      function AuthorizeExcelComponent_button_46_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuthorizeExcelComponent_button_46_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

            return ctx_r20.convert();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Export PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
      }

      function AuthorizeExcelComponent_button_48_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuthorizeExcelComponent_button_48_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

            return ctx_r22.approveDetailsData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Approve and Process ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
      }

      function AuthorizeExcelComponent_button_50_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuthorizeExcelComponent_button_50_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

            return ctx_r24.reject();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Reject ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
      }

      function AuthorizeExcelComponent_div_52_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](7, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11, "Maker");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](17, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](18, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "img", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](22, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](23, "Maker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](26, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](29, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](32, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](36, "Record Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](38, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](41, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](42, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](43, "img", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](44, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](47, "Checker");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](48, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](49);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](51, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](52, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](53, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](54, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](55, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](56, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](57, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](58, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](59, "Modification No");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](60, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](61, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](62, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](63, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](64, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](65, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](66, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](67, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](68, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](69, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](70, "Checker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](71, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](72);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](73, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](74, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](75, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](76, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](77, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](78, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](79, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](80, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](81, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](82, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](83, "First Time Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](84, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](85, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](86, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](87, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](88, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](89, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](90, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](91, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](92, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](93, "Auth Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](94, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r7.pendingForAuthDetailsDTOList[0].inputBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](26, 4, ctx_r7.pendingForAuthDetailsDTOList[0].inputTime));

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r7.firstLevelAuthorizationStatus.authorizer);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](73, 6, ctx_r7.firstLevelAuthorizationStatus.authDate));
        }
      }

      function AuthorizeExcelComponent_ng_template_53_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Transaction Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](6, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](8, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](9, "Account Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](12, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](13, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](14, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "Account Currency");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](18, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21, "Account Branch");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](22, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](24, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](25, " LCY Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](26, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](27, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](29, " Debit / Credit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](30, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](33, " Branch Code ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](34, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](35, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](37, " Value Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](38, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](39, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](40, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](41, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](42, " Initiation Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](43, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](44, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](45, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](46, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](47, " External Reference ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](48, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](49, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](50, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](51, " Related Account ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](52, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](53, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](54, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](55, " Related Customer ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](56, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](57, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](58, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](59, " Exchange Rate ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](60, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](61, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](62, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](63, " Related Reference ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](64, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](65, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](66, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](67, " Additional Text ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](68, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](69, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](70, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](71, " Instrument Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](72, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](73, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](74, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](75, " Batch Number ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](76, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](77, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](78, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](79, " Upload Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](80, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](81, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](82, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](83, " Financial Cycle ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](84, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](85, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](86, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](87, " Period Code ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](88, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](89, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](90, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](91, " Transaction Code ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](92, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](93, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](94, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](95, " MIS_CODE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](96, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](97, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](98, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](99, " POOL_CODE ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](100, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](101, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](102, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](103, " TXN_MIS_1 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](104, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](105, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](106, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](107, " MIS_GROUP ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](108, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](109, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](110, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](111, " MIS_FLAG ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](112, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](113, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](114, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](115, " TXN_MIS_2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](116, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](117, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](118, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](119, " MIS_HEAD ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](120, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](121, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](122, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](123, " MIS_GROUP_TXN ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](124, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](125, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](126, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](127, " TXN_MIS_3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](128, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](129, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](130, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](131, " COMP_MIS_1 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](132, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](133, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](134, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](135, " COMP_MIS_3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](136, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](137, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](138, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](139, " TXN_MIS_4 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](140, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](141, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](142, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](143, " COMP_MIS_2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](144, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](145, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](146, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](147, " COMP_MIS_4 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](148, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](149, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](150, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](151, " TXN_MIS_5 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](152, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](153, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](154, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](155, " COMP_MIS_5 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](156, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](157, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](158, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](159, " COST_CODE_1 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](160, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](161, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](162, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](163, " TXN_MIS_6 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](164, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](165, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](166, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](167, " COMP_MIS_6 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](168, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](169, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](170, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](171, " COST_CODE_2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](172, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](173, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](174, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](175, " TXN_MIS_7 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](176, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](177, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](178, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](179, " COMP_MIS_7 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](180, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](181, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](182, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](183, " COST_CODE_3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](184, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](185, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](186, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](187, " TXN_MIS_8 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](188, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](189, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](190, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](191, " COMP_MIS_8 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](192, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](193, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](194, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](195, " COST_CODE_4 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](196, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](197, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](198, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](199, " TXN_MIS_9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](200, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](201, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](202, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](203, " COMP_MIS_9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](204, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](205, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](206, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](207, " COST_CODE_5 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](208, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](209, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](210, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](211, " TXN_MIS_10 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](212, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](213, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](214, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](215, " COMP_MIS_10 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](216, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](217, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](218, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](219, " UDF DETAILS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](220, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](221, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](222, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](223, " UPLOAD STATUS ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](224, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](225, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](226, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](227, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuthorizeExcelComponent_ng_template_53_Template_button_click_227_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r28);

            var modal_r26 = restoredCtx.$implicit;
            return modal_r26.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](228, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.account);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.ccyCd);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.accountBranch);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.lcyEquivalent);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.drCr);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.id.branchCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](39, 53, ctx_r9.responseDto.valueDate));

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](44, 55, ctx_r9.responseDto.id.initiationDate));

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.externalRefNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.relatedAccount);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.relCust);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.exchRate);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.relatedRef);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.addlText);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.instrumentNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.id.batchNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.uploadDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.finCycle);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.periodCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.txnCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.misCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.poolCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.txnMis1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.misGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.misFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.txnMis2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.misHead);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.misGroupTxn);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.txnMis3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.compMis1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.compMis3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.txnMis4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.compMis2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.compMis4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.txnMis5);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.compMis5);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.costCode1);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.txnMis6);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.compMis6);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.costCode2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.txnMis7);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.compMis7);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.costCode3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.txnMis8);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.compMis8);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.costCode4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.txnMis9);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.compMis9);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.costCode5);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.txnMis10);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.compMis10);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate"]("value", ctx_r9.responseDto.udfDetails);
        }
      }

      var _AuthorizeExcelComponent = /*#__PURE__*/function () {
        function _AuthorizeExcelComponent(api, roleService, userApi, excelService, modalService // private toastService : ToastService,
        ) {
          _classCallCheck(this, _AuthorizeExcelComponent);

          this.api = api;
          this.roleService = roleService;
          this.userApi = userApi;
          this.excelService = excelService;
          this.modalService = modalService;
          this.respArray = [];
          this.dtOptions = [];
          this.dtTrigger1 = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
          this.dtTrigger2 = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
          this.closeResult = '';
          this.rejectReason = "Testing";
          this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_3__.permissionsLabels();
          this.approveButtonStatus = true;
          this.spinner = false;
          this.firstAndSecondAuthAuditLogRespDTO = new src_app_shared_models_audit_logs_dto_first_second__WEBPACK_IMPORTED_MODULE_2__.FirstAndSecondAuthAuditLogRespDTO();
          this.excelDataAuthFirstDetails = new src_app_views_users_users_dto__WEBPACK_IMPORTED_MODULE_1__.User();
          this.flag = false;
          this.pendingForAuthData = [];
          this.isLoading = false;
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

        _createClass(_AuthorizeExcelComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.dtOptions[0] = {
              pagingType: 'full_numbers',
              pageLength: 5,
              processing: true,
              retrieve: true,
              order: [[6, 'desc']],
              columnDefs: [{
                type: 'date',
                'targets': [6]
              }],
              lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]]
            };
            this.dtOptions[1] = {
              pagingType: 'full_numbers',
              pageLength: 5,
              processing: true,
              retrieve: true,
              // order: [[6, 'desc']],
              // columnDefs: [ { type: 'date', 'targets': [6] } ],
              lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]]
            };
            setTimeout(function () {
              _this2.newRolePermissions();
            }, 2000);
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this2.roleCodes = message;
            });
            this.flag = false;
            this.firstLevelAuthorizationStatus = {};
            this.approveButtonStatus = false;
            this.user_id = localStorage.getItem('userFromLogin').replace(/['"]+/g, '');
            this.role = sessionStorage.getItem('user_role');
            this.getPendingForAuthData();
            this.dummyQenPMJNuqUwhg5W8UMFs66YBXrBVhhZzMFt = new Array();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.dtTrigger1.unsubscribe();
            this.dtTrigger2.unsubscribe();
          }
        }, {
          key: "screenpermission",
          value: function screenpermission() {
            var _this3 = this;

            this.screenName = 'UploadProcessAuthorization';
            this.userApi.getRoleScreenPermission(this.user_id, this.screenName, this.role).subscribe(function (res) {
              _this3.rolepermission = res;

              if (_this3.rolepermission) {
                _this3.button_permission = _this3.rolepermission[0];
              }
            });
          }
        }, {
          key: "reject",
          value: function reject() {
            var _this4 = this;

            this.reasonBoolean = true;

            if (!this.rejectReason) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('Enter the reason for Rejection');
            }

            console.log("rejectreason" + this.rejectReason);

            if (this.pendingForAuthDetailsDTOList[0].inputBy == this.user_id) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('Maker cannot reject the record.');
              return;
            }

            this.authprocess = true;
            this.approveButtonStatus = false;
            this.deUploadReqDTO = new src_app_shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_0__.DeUploadReqDTO();
            this.deUploadReqDTO.pendingForAuthDTO = this.deUploadPendingForAuthDTO;
            this.deUploadReqDTO.pendingForAuthDetailsDTOList = this.pendingForAuthDetailsDTOList;
            this.api.rejectCallApi(this.deUploadReqDTO, this.user_id, this.rejectReason).subscribe(function (resp) {
              _this4.datarejection = resp;
              console.log(_this4.datarejection);

              if (_this4.datarejection) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('Rejection successful.');
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('Rejection failed.');
              }

              _this4.reasonBoolean = false;
              _this4.authprocess = false;
            });
            this.getPendingForAuthData();
            this.dummyPendingForAuthDataDetails = [];
            this.dtTrigger2.next();
          }
        }, {
          key: "newRolePermissions",
          value: function newRolePermissions() {
            this.roleService.fetchScreenPermissions('Authorize Excel');
          }
        }, {
          key: "approveDetailsData",
          value: function approveDetailsData() {
            var _this5 = this;

            if (this.pendingForAuthDetailsDTOList) {
              this.todaydate = this.pipe.transform(this.now, 'dd-MMM-yy');
              this.uploaddate = this.pipe.transform(this.pendingForAuthDetailsDTOList[0].uploadDate, 'dd-MMM-yy');
              console.log('date for compare', this.todaydate, this.uploaddate);

              if (this.todaydate === this.uploaddate) {} else {
                console.log('inside if');
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('Unable to authorized. Backdated authorization not allowed.');
                return;
              }
            }

            if (this.pendingForAuthDetailsDTOList[0].inputBy == this.user_id) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('Maker cannot authorize and process the record.');
              return;
            }

            this.authprocess = true;
            this.approveButtonStatus = false;
            this.deUploadReqDTO = new src_app_shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_0__.DeUploadReqDTO();
            this.deUploadReqDTO.pendingForAuthDTO = this.deUploadPendingForAuthDTO;
            this.deUploadReqDTO.pendingForAuthDetailsDTOList = this.pendingForAuthDetailsDTOList;
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
              text: 'You are trying to Authorize Record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#E6224A',
              cancelButtonColor: '#011945',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              icon: 'info'
            }).then(function (result) {
              console.log(result);

              if (result.isConfirmed === true) {
                _this5.api.approveDetailsData(_this5.deUploadReqDTO, _this5.user_id).subscribe(function (resp) {
                  _this5.firstLevelAuthorizationStatus = resp;
                  console.log(_this5.firstLevelAuthorizationStatus);
                  _this5.authprocess = false;

                  if (!_this5.firstLevelAuthorizationStatus) {
                    console.log(_this5.approveButtonStatus);
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
                      text: "Data authorization is failed",
                      icon: 'error'
                    });
                  }

                  if (_this5.firstLevelAuthorizationStatus) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire({
                      text: "Record is Approved and Processed",
                      icon: 'success'
                    });
                    _this5.process = true;

                    _this5.getPendingForAuthData();

                    _this5.approval = false;

                    _this5.Process();
                  }
                }, function (error) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('Data authorization is failed.');
                });
              }

              if (result.isConfirmed == false) {
                _this5.approveButtonStatus = true;
              }
            }); // console.log('for authorization', this.deUploadReqDTO);
            // this.api.approveDetailsData(this.deUploadReqDTO, this.user_id).subscribe(resp => {
            //   this.firstLevelAuthorizationStatus = resp;
            //   console.log(this.firstLevelAuthorizationStatus);
            //   this.authprocess = false;
            //   if (!this.firstLevelAuthorizationStatus) {
            //     Swal.fire('Data authorization is failed.');
            //     return;
            //   }
            //   if (this.firstLevelAuthorizationStatus) {
            //     this.process = true;
            //     this.getPendingForAuthData();
            //     this.approval = false;
            //     this.Process();
            //   }
            // },
            //   error => {
            //     Swal.fire('Data authorization is failed.');
            //   });

            this.getPendingForAuthData();
            this.dummyPendingForAuthDataDetails = [];
            this.dtTrigger2.next();
          }
        }, {
          key: "Process",
          value: function Process() {
            var _this6 = this;

            this.spinner = true;
            this.deUploadReqDTO = new src_app_shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_0__.DeUploadReqDTO();
            this.deUploadReqDTO.pendingForAuthDTO = this.deUploadPendingForAuthDTO;
            this.deUploadReqDTO.pendingForAuthDetailsDTOList = this.pendingForAuthDetailsDTOList;
            this.flag = false;
            console.log(this.deUploadReqDTO);
            this.api.processDeUploadt(this.deUploadReqDTO, this.user_id).subscribe(function (resp) {
              _this6.responseforDE = resp;
              console.log('Response ::' + _this6.responseforDE);

              if (!_this6.responseforDE) {
                _this6.spinner = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('Unable to connect core banking. Server Failed to process the request.');
              } else {
                _this6.spinner = false;
              }
            });
          }
        }, {
          key: "getAuditLogData",
          value: function getAuditLogData(getDetailsQueryToggleReqDTO) {
            var _this7 = this;

            this.api.getFirstAndSecondAuthAuditService(this.getDetailsQueryToggleReqDTO).subscribe(function (resp) {
              _this7.firstAndSecondAuthAuditLogRespDTO = resp;
            });
          }
        }, {
          key: "queryDetailsDataByParam",
          value: function queryDetailsDataByParam(pendingForAuthDTO, i) {
            var _this8 = this;

            var btn = document.getElementById("btnGetDetails" + i);
            btn.innerHTML = '<span class="indicator-progress" >Please wait... <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>';
            this.isLoading = true;
            this.process = false;
            this.approveButtonStatus = false;
            console.log(pendingForAuthDTO);
            this.spinner1 = true;
            this.remarks = pendingForAuthDTO.remarks;
            this.overrides = pendingForAuthDTO.overrides;
            this.deUploadPendingForAuthDTO = pendingForAuthDTO;
            this.getDetailsQueryToggleReqDTO = new src_app_shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_0__.GetDetailsQueryToggleReqDTO();
            this.getDetailsQueryToggleReqDTO.externalSysName = pendingForAuthDTO.externalSysName;
            this.getDetailsQueryToggleReqDTO.processName = pendingForAuthDTO.processName;
            this.getDetailsQueryToggleReqDTO.processingDate = pendingForAuthDTO.processingDate;
            this.getDetailsQueryToggleReqDTO.currency = pendingForAuthDTO.currency;
            this.getDetailsQueryToggleReqDTO.filename = pendingForAuthDTO.fileName;
            this.getDetailsQueryToggleReqDTO.batchNumber = pendingForAuthDTO.batchNumber;
            this.getDetailsQueryToggleReqDTO.overrides = this.overrides;
            console.log(this.getDetailsQueryToggleReqDTO);
            this.api.queryDetailsDataByParamService(this.getDetailsQueryToggleReqDTO).subscribe(function (resp) {
              _this8.isLoading = false;
              console.log("backend row data after query", resp);
              btn.innerHTML = '<span>Get Details</span>';
              _this8.pendingForAuthDetailsDTOList = resp;

              if (_this8.pendingForAuthDetailsDTOList[0].inputBy == _this8.user_id) {
                console.log(_this8.user_id);
                console.log("true");
                _this8.reject1 = true;
              }

              if (_this8.pendingForAuthDetailsDTOList.length > 0) {
                _this8.approveButtonStatus = true;
                _this8.auth = true;
                _this8.spinner1 = false;
                _this8.approval = true;
                _this8.flag = true;
                _this8.button1 = true;
                _this8.dummyPendingForAuthDataDetails = _this8.pendingForAuthDetailsDTOList;

                _this8.dtTrigger2.next();
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('Data Not Found');
              }
            }, function (err) {
              _this8.isLoading = false;
            });
            this.spinner1 = false;
          }
        }, {
          key: "getAllDetailsData",
          value: function getAllDetailsData() {
            var _this9 = this;

            this.api.getDetailsListServiceFirst().subscribe(function (resp) {
              _this9.queriedPendingForAuthDetailsDTOList = resp;
              _this9.dummyPendingForAuthDataDetails = _this9.queriedPendingForAuthDetailsDTOList;

              _this9.dtTrigger2.next();
            });
          }
        }, {
          key: "getPendingForAuthData",
          value: function getPendingForAuthData() {
            var _this10 = this;

            this.api.getPendingForAuthDataFirst(this.user_id).subscribe(function (resp) {
              _this10.pendingForAuthData = resp;

              _this10.dtTrigger1.next();

              if (_this10.pendingForAuthData) {
                for (var index = 0; index < _this10.pendingForAuthData.length; index++) {
                  _this10.pendingForAuthData[index].fileName = JSON.stringify(_this10.pendingForAuthData[index].fileName).split('/').pop().split('"')[0];
                }

                if (_this10.pendingForAuthData.authStatus === 'A') {
                  _this10.getAllDetailsData();

                  _this10.process = true;
                } else {}
              }
            });
          }
        }, {
          key: "openSnackBar",
          value: function openSnackBar(message, action) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire(message);
          }
        }, {
          key: "openSnackBarLongDuration",
          value: function openSnackBarLongDuration(message, action) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire(message);
          }
        }, {
          key: "findRowsPerExtSys",
          value: function findRowsPerExtSys(extSysName) {
            this.dummyPendingForAuthDataDetails = new Array();

            var _iterator = _createForOfIteratorHelper(this.pendingForAuthDetailsDTOList),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var entry = _step.value;

                if (entry.sourceCode === extSysName) {
                  this.dummyPendingForAuthDataDetails.push(entry);
                }
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.dtTrigger2.next();
          }
        }, {
          key: "openDialog",
          value: function openDialog(content, data) {
            var _this11 = this;

            this.responseDto = data;
            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title',
              size: 'xl'
            }).result.then(function (result) {
              _this11.closeResult = "Closed with: ".concat(result);
            }, function (reason) {
              _this11.closeResult = "Dismissed ".concat(_this11.getDismissReason(reason));
            });
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.ModalDismissReasons.ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.ModalDismissReasons.BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }, {
          key: "openAuditDetails",
          value: function openAuditDetails(detailsDto) {
            var _this12 = this;

            this.api.getAuditDataOfDetailsRecord(detailsDto).subscribe(function (resp) {
              _this12.medDeUploadDetailHistEntityList = resp; // //console.log(this.medDeUploadDetailHistEntityList);
              // const dialogRef = this.dialog.open(ModalAuditTransactionDetailsComponent, {
              //   data: this.medDeUploadDetailHistEntityList
              // });
              // dialogRef.afterClosed().subscribe(result => {
              //   // console.log(`Dialog result: ${result}`);
              // });
            });
          }
        }, {
          key: "downloadData",
          value: function downloadData() {
            var _this13 = this;

            console.log(this.pendingForAuthDetailsDTOList);
            this.pendingForAuthDetailsDTOList.forEach(function (element) {
              if (element.drCr == 'C') {
                _this13.credit = element.lcyEquivalent;
                _this13.debit = 0;
              } else {
                _this13.debit = element.lcyEquivalent;
                _this13.credit = 0;
              }

              _this13.dataForProcessScreen1.push({
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
                DrLcyAmt: _this13.debit,
                CrLcyAmt: _this13.credit,
                Instr_code: element.instrumentNo,
                Value_Date: _this13.pipe.transform(element.valueDate, 'dd-MMM-yy'),
                User_Id: element.inputBy,
                Authorizer_ID: element.firstTimeAuthorizer //16

              });

              console.log(_this13.dataForProcessScreen1);
            });
            console.log('final data', this.dataForProcessScreen1);
            this.excelService.exportAsExcelFile(this.dataForProcessScreen1, 'Excel_Upload_Data');
            this.dataForProcessScreen1 = [];
          } //pdf download

        }, {
          key: "convert",
          value: function convert() {
            var _this14 = this;

            var doc = new (jspdf__WEBPACK_IMPORTED_MODULE_5___default())({
              orientation: "landscape"
            });
            doc.setFont("helvetica");
            doc.setFontSize("bold");
            doc.setFontSize(9);
            var col = [["BatchNo", //Refrence No : // 2 skiiping this, user can see this in FlexCube
            "AccBranch", "Acc", "AccDesc", "DrCr", "TrnCode", "TrnDesc", "FcyAmt", "Rate", "DrLcyAmt", "CrLcyAmt", "InstrCode", "ValueDate", "UserId", "AuthId"]]; // 16

            var rows = [];
            console.log(this.pendingForAuthDetailsDTOList);
            var itemNew = this.pendingForAuthDetailsDTOList;
            itemNew.forEach(function (element) {
              if (element.drCr == 'C') {
                _this14.pdfCreditVar = element.lcyEquivalent;
                _this14.pdfDebitVar = 0;
              } else {
                _this14.pdfDebitVar = element.lcyEquivalent;
                _this14.pdfCreditVar = 0;
              }

              _this14.valueDate = _this14.pipe.transform(element.valueDate, 'dd-MMM-yy'); //14

              var date = new Date(element.timeForExport).toLocaleDateString("en-us");
              console.log(date);
              var temp = [element.id.batchNo, // Refrence No : element.id.refNo, // 2 skiiping this user can see this in FlexCube
              element.accountBranch, element.account, element.accDesc, element.drCr, element.txnCode, element.trnDesc, element.amount, element.exchRate, _this14.pdfDebitVar, _this14.pdfCreditVar, element.instrumentNo, _this14.valueDate, element.inputBy, element.firstTimeAuthorizer]; //16

              rows.push(temp);
            });
            doc.autoTable({
              head: col,
              body: rows,
              theme: 'striped',
              margin: {
                top: 25,
                bottom: 15
              },
              styles: {
                overflow: 'linebreak',
                fontSize: 8
              },
              showHeader: 'everyPage'
            });
            doc.save('ExcelDAtaAuthFirst.pdf');
          }
        }]);

        return _AuthorizeExcelComponent;
      }();

      _AuthorizeExcelComponent.ɵfac = function AuthorizeExcelComponent_Factory(t) {
        return new (t || _AuthorizeExcelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_8__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_shared_services_roles_service__WEBPACK_IMPORTED_MODULE_9__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_views_users_users_service__WEBPACK_IMPORTED_MODULE_10__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_11__.ExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbModal));
      };

      _AuthorizeExcelComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
        type: _AuthorizeExcelComponent,
        selectors: [["npr-authorize-excel"]],
        viewQuery: function AuthorizeExcelComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵviewQuery"](angular_datatables__WEBPACK_IMPORTED_MODULE_7__.DataTableDirective, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵloadQuery"]()) && (ctx.dtElements = _t);
          }
        },
        decls: 55,
        vars: 10,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "pageTitle", "my-3", "text-center"], [1, "dbCardStyle"], ["id", "dbTable1", "datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], ["class", "dbCardStyle", 4, "ngIf"], [1, "btnCol", "mt-md-4", "mt-3"], ["class", "btn smBtn btnDarkGrey", 3, "click", 4, "ngIf"], ["class", "btn smBtn btnPrimary ", 3, "click", 4, "ngIf"], [1, "pt-3"], ["content", ""], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "id", "click"], [1, "row"], [1, "col-sm-6"], [2, "width", "100%"], ["id", "dbTable2", "datatable", "", 1, "dataTable", "table", "tableStyle", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [1, "btn", "smBtn", "btnPrimary", 3, "click"], [1, "btn", "smBtn", "btnDarkGrey", 3, "click"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "col-auto"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."], [1, "row", "gy-3"], [1, "col-lg-3"], ["for", "securityLogins", 1, "formLbl"], ["id", "securityLogins", "type", "text", "readonly", "", 1, "form-control", 3, "value"], ["id", "securityLogins", "type", "text", "value", "Unprocessed", "readonly", "", 1, "form-control"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], [1, "col-auto", "prClass", "pb-3", "pt-3"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "click"]],
        template: function AuthorizeExcelComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3, "Authorize Excel");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "h2", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5, "Authorization");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17, "Uploaded by");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](29, "File Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](31, "Total Record");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](32, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](33, "Total Credit");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](34, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](35, "Total Debit");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](36, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](37, AuthorizeExcelComponent_tr_37_Template, 29, 16, "tr", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](38, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](39, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](40, AuthorizeExcelComponent_div_40_Template, 11, 2, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](41, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](42, AuthorizeExcelComponent_div_42_Template, 30, 3, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](43, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](44, AuthorizeExcelComponent_button_44_Template, 2, 0, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](45, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](46, AuthorizeExcelComponent_button_46_Template, 2, 0, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](47, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](48, AuthorizeExcelComponent_button_48_Template, 2, 0, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](49, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](50, AuthorizeExcelComponent_button_50_Template, 2, 0, "button", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](51, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](52, AuthorizeExcelComponent_div_52_Template, 95, 8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](53, AuthorizeExcelComponent_ng_template_53_Template, 229, 57, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dtOptions", ctx.dtOptions[0])("dtTrigger", ctx.dtTrigger1);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.pendingForAuthData);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.flag);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.pendingForAuthDetailsDTOList != null);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.button1);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.button1);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.approveButtonStatus && ctx.roleCodes.auth);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.approveButtonStatus && ctx.roleCodes.auth);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.pendingForAuthDetailsDTOList != null);
          }
        },
        directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_7__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe],
        styles: ["table.tableStyle[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #A6AAB5;\n  font-size: 9px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  padding: 16px 13px;\n  border-bottom: 1px solid #F5F5F5;\n}\n\n.prClass[_ngcontent-%COMP%] {\n  padding-right: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvcml6ZS1leGNlbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0YiLCJmaWxlIjoiYXV0aG9yaXplLWV4Y2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUudGFibGVTdHlsZSB0aGVhZCB0ciB0aCB7XHJcbiAgY29sb3I6ICNBNkFBQjU7XHJcbiAgZm9udC1zaXplOiA5cHg7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIHBhZGRpbmc6IDE2cHggMTNweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Y1RjVGNSA7XHJcbn1cclxuXHJcbi5wckNsYXNze1xyXG4gIHBhZGRpbmctcmlnaHQ6IDQwcHg7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    91425:
    /*!*****************************************************************!*\
      !*** ./src/app/views/file-upload/file-upload-routing.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FileUploadRoutingModule": function FileUploadRoutingModule() {
          return (
            /* binding */
            _FileUploadRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./file-upload/file-upload.component */
      51450);
      /* harmony import */


      var _rejection_queue_rejection_queue_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./rejection-queue/rejection-queue.component */
      59366);
      /* harmony import */


      var _authorize_excel_authorize_excel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./authorize-excel/authorize-excel.component */
      12828);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: "upload-excel",
        component: _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_0__.FileUploadComponent
      }, {
        path: "rejection_queue",
        component: _rejection_queue_rejection_queue_component__WEBPACK_IMPORTED_MODULE_1__.RejectionQueueComponent
      }, {
        path: "authorize_excel",
        component: _authorize_excel_authorize_excel_component__WEBPACK_IMPORTED_MODULE_2__.AuthorizeExcelComponent
      }];

      var _FileUploadRoutingModule = /*#__PURE__*/_createClass(function _FileUploadRoutingModule() {
        _classCallCheck(this, _FileUploadRoutingModule);
      });

      _FileUploadRoutingModule.ɵfac = function FileUploadRoutingModule_Factory(t) {
        return new (t || _FileUploadRoutingModule)();
      };

      _FileUploadRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _FileUploadRoutingModule
      });
      _FileUploadRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_FileUploadRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    9775:
    /*!*********************************************************!*\
      !*** ./src/app/views/file-upload/file-upload.module.ts ***!
      \*********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FileUploadModule": function FileUploadModule() {
          return (
            /* binding */
            _FileUploadModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _file_upload_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./file-upload-routing.module */
      91425);
      /* harmony import */


      var _file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./file-upload/file-upload.component */
      51450);
      /* harmony import */


      var _rejection_queue_rejection_queue_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./rejection-queue/rejection-queue.component */
      59366);
      /* harmony import */


      var _authorize_excel_authorize_excel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./authorize-excel/authorize-excel.component */
      12828);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular-datatables */
      50481);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      97544);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-select/ng-select */
      88660);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _FileUploadModule = /*#__PURE__*/_createClass(function _FileUploadModule() {
        _classCallCheck(this, _FileUploadModule);
      });

      _FileUploadModule.ɵfac = function FileUploadModule_Factory(t) {
        return new (t || _FileUploadModule)();
      };

      _FileUploadModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _FileUploadModule
      });
      _FileUploadModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _file_upload_routing_module__WEBPACK_IMPORTED_MODULE_0__.FileUploadRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, angular_datatables__WEBPACK_IMPORTED_MODULE_4__.DataTablesModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_FileUploadModule, {
          declarations: [_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_1__.FileUploadComponent, _rejection_queue_rejection_queue_component__WEBPACK_IMPORTED_MODULE_2__.RejectionQueueComponent, _authorize_excel_authorize_excel_component__WEBPACK_IMPORTED_MODULE_3__.AuthorizeExcelComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _file_upload_routing_module__WEBPACK_IMPORTED_MODULE_0__.FileUploadRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, angular_datatables__WEBPACK_IMPORTED_MODULE_4__.DataTablesModule, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__.NgbModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule]
        });
      })();
      /***/

    },

    /***/
    51450:
    /*!************************************************************************!*\
      !*** ./src/app/views/file-upload/file-upload/file-upload.component.ts ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FileUploadComponent": function FileUploadComponent() {
          return (
            /* binding */
            _FileUploadComponent
          );
        },

        /* harmony export */
        "ResponseData": function ResponseData() {
          return (
            /* binding */
            _ResponseData
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_shared_models_excel_data_processing_resp_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/models/excel-data-processing-resp-dto */
      19130);
      /* harmony import */


      var src_app_shared_models_excel_data_processing_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/models/excel-data-processing-dto */
      86981);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_shared_models_excel_data_processing_dto_audit_resp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/models/excel-data-processing-dto-audit-resp */
      31484);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/models/fmosNewRolePermissions */
      35383);
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/environments/environment.prod */
      89019);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var src_app_views_users_users_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/views/users/users.service */
      59119);
      /* harmony import */


      var src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! src/app/shared/services/excel.service */
      58219);
      /* harmony import */


      var src_app_shared_services_roles_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! src/app/shared/services/roles.service */
      21597);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      71258); // import { ToastService } from 'src/app/shared/services/toast.service';


      var _c0 = ["fileWrapper"];

      function FileUploadComponent_button_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function FileUploadComponent_button_8_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r10.refreshGl();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Refresh CCY Rate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function FileUploadComponent_option_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var extSysName_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", extSysName_r12);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](extSysName_r12);
        }
      }

      function FileUploadComponent_option_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var processName_r13 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", processName_r13);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](processName_r13);
        }
      }

      function FileUploadComponent_option_42_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var trncode_r14 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("value", trncode_r14.trnCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate2"]("", trncode_r14.trnDesc, " ", trncode_r14.trnCode, "");
        }
      }

      function FileUploadComponent_div_43_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "File Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](4, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keypress", function FileUploadComponent_div_43_Template_input_keypress_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r15.valuechange($event);
          })("keyup", function FileUploadComponent_div_43_Template_input_keyup_5_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r17.fun(ctx_r17.excelDataProcessingReqDTO.fileName);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function FileUploadComponent_div_44_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 35, 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "input", 37, 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function FileUploadComponent_div_44_Template_input_change_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r20.getFiledata($event, ctx_r20.uploadExcelForm.get("extSysNameData").value, ctx_r20.uploadExcelForm.get("processNameData").value, ctx_r20.uploadExcelForm.get("fileName").value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function FileUploadComponent_ng_container_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Uploading, Please wait... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        }
      }

      function FileUploadComponent_ng_template_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Upload Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function FileUploadComponent_div_57_p_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r22.date);
        }
      }

      function FileUploadComponent_div_57_ng_container_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Processing, Please wait... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "span", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        }
      }

      function FileUploadComponent_div_57_ng_template_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Process");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function FileUploadComponent_div_57_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "h2", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "File Upload Summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "label", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Batch Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "label", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Total No Of records");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "label", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "Total Debit Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "label", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "Total Credit Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "label", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "Sum (Credit - Debit)");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "p", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "label", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "Transaction Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](33, FileUploadComponent_div_57_p_33_Template, 2, 1, "p", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "label", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, "Remarks *");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](37, "textarea", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "label", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](40, "Overrides");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](41, "textarea", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](42);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function FileUploadComponent_div_57_Template_button_click_45_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r26.Datacheck();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](46, FileUploadComponent_div_57_ng_container_46_Template, 4, 0, "ng-container", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](47, FileUploadComponent_div_57_ng_template_47_Template, 2, 0, "ng-template", null, 54, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "button", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function FileUploadComponent_div_57_Template_button_click_50_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r28.deleteDataService(ctx_r28.uploadExcelForm.get("remarks").value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "a", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function FileUploadComponent_div_57_Template_a_click_53_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r29.downloadData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](54, "View Excel");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "button", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function FileUploadComponent_div_57_Template_button_click_56_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r27);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r30.exit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](57, "Hide");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](48);

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r9.responseDto.batchNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r9.responseDto.totalNoOfRecords);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r9.responseDto.totalDebitAmount);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", ctx_r9.responseDto.totalCreditAmount, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r9.responseDto.sumAmount);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r9.valueDate === "Today" || ctx_r9.valueDate != "Today");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r9.responseDto.overrideMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r9.flag);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r9.isProcessing)("ngIfElse", _r24);
        }
      }

      var _c1 = function _c1() {
        return ["/dashboard"];
      };

      var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      });

      var _FileUploadComponent = /*#__PURE__*/function () {
        function _FileUploadComponent(api, userApi, fb, // private toastService : ToastService,
        excelService, roleService, router) {
          _classCallCheck(this, _FileUploadComponent);

          this.api = api;
          this.userApi = userApi;
          this.fb = fb;
          this.excelService = excelService;
          this.roleService = roleService;
          this.router = router;
          this.isSelected = true;
          this.showSelectedFilename = false;
          this.allExternalSystemNames = [];
          this.space = false;
          this.excelDataProcessingAuditlog = new src_app_shared_models_excel_data_processing_dto_audit_resp__WEBPACK_IMPORTED_MODULE_2__.ExcelDataProcessingAuditRespDTO();
          this.allFileNames = [];
          this.selectorDateData = new Date();
          this.selected = 'option2';
          this.listMedMaster = new Array();
          this.excelDataProcessingRespDTO = new src_app_shared_models_excel_data_processing_resp_dto__WEBPACK_IMPORTED_MODULE_0__.ExcelDataProcessingRespDTO();
          this.excelDataProcessingReqDTO = new src_app_shared_models_excel_data_processing_dto__WEBPACK_IMPORTED_MODULE_1__.ExcelDataProcessingReqDTO();
          this.isUploading = false;
          this.isProcessing = false;
          this.button_permission = {};
          this.button = true;
          this.flag = false;
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe('en-US');
          this.now = Date.now();
          this.myFormattedDate = this.pipe.transform(this.now, 'dd-MMM-yy');
          this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_3__.permissionsLabels();
        }

        _createClass(_FileUploadComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this15 = this;

            this.user_id = localStorage.getItem('userFromLogin');
            this.uploadExcelForm = this.fb.group({
              extSysNameData: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
              processNameData: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
              selectorDateData: [new Date()],
              trncode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
              fileName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_12__.Validators.required]],
              remarks: [""]
            });
            setTimeout(function () {
              _this15.newRolePermissions();
            }, 2000);
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this15.roleCodes = message;
            }); // this.user_id = "GOKUL";

            this.role = sessionStorage.getItem('user_role'); //this.screenpermission();

            this.getTrnCodeArray();
            this.extSysNameData = '';
            this.processNameData = '';
            this.fileNameData = '';
            this.getAllExternalSystemNames();
            console.log('user id', this.user_id);
          }
        }, {
          key: "getAuditLogData",
          value: function getAuditLogData(excelDataProcessingReqDTO) {
            var _this16 = this;

            this.api.getAuditLogService(excelDataProcessingReqDTO, this.user_id).subscribe(function (resp) {
              _this16.excelDataProcessingAuditlog = resp;

              if (_this16.excelDataProcessingAuditlog) {
                _this16.auditdata = true;

                if (_this16.excelDataProcessingAuditlog.recordStatus === 'P') {
                  _this16.excelDataProcessingAuditlog.recordStatus = 'PROCESSED';
                }

                if (_this16.excelDataProcessingAuditlog.recordStatus === 'D') {
                  _this16.excelDataProcessingAuditlog.recordStatus = 'DELETED';
                }

                if (_this16.excelDataProcessingAuditlog.recordStatus === 'U') {
                  _this16.excelDataProcessingAuditlog.recordStatus = 'UNPROCESSED';
                }
              }
            });
          }
        }, {
          key: "refreshGl",
          value: function refreshGl() {
            var _this17 = this;

            var url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__.environment.MEDIAN_URL;
            this.userApi.refreshGl().subscribe(function (data) {
              _this17.data = data;
              console.log(_this17.data);
            });
          }
        }, {
          key: "newRolePermissions",
          value: function newRolePermissions() {
            this.roleService.fetchScreenPermissions('Upload Excel');
          }
        }, {
          key: "doFirstValidation",
          value: function doFirstValidation() {
            var _this18 = this;

            this.button = false;
            this.isUploading = true; // this.uploadExcelForm.get('selectorDateData').setValue(new Date());

            console.log('method call');

            if (!this.uploadExcelForm.get('trncode').value) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire('Enter Data for Trnsaction Code.');
              this.isUploading = false;
              return;
            }

            if (this.enablefilebrowser) {
              if (!this.selectedFiles) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire('Please select a file to upload.');
                this.isUploading = false;
                return;
              }
            }

            if (this.uploadExcelForm.invalid) {
              this.isUploading = false;
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire('Please fill all the details');
            } else {
              var newDate = new Date();
              this.excelDataProcessingReqDTO.extSysName = this.uploadExcelForm.get('extSysNameData').value;
              this.excelDataProcessingReqDTO.processName = this.uploadExcelForm.get('processNameData').value;
              this.excelDataProcessingReqDTO.processingDate = newDate;
              this.excelDataProcessingReqDTO.trnCode = this.uploadExcelForm.get('trncode').value;
              this.excelDataProcessingReqDTO.fileName = this.uploadExcelForm.get('fileName').value;
              this.api.showDetailServiceInExcelDataProcessing(this.excelDataProcessingReqDTO, this.user_id).subscribe(function (responseforfileupload) {
                _this18.isUploading = false;
                _this18.responseforfileupload = responseforfileupload;

                if (_this18.responseforfileupload == null) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire('Server error.');
                  return;
                }

                if (_this18.responseforfileupload.errorMessage) {
                  console.log("here is error of duplicate record");
                  _this18.disablebtn2 = true;
                  sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire('Unable to upload', 'Error: ' + _this18.responseforfileupload.errorMessage);

                  if (_this18.responseforfileupload.errorMessage === "Ppossible duplicate data") {
                    _this18.excelDataProcessingReqDTO.proceedDuplicates = true;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                      title: 'Do you want to proceed?',
                      text: 'You\'re trying to upload duplicate data',
                      showCancelButton: true,
                      confirmButtonColor: '#3085d6',
                      cancelButtonColor: '#d33',
                      cancelButtonText: 'NO',
                      confirmButtonText: 'YES'
                    }).then(function (result) {
                      if (result.isConfirmed) {
                        _this18.api.showDetailServiceInExcelDataProcessing(_this18.excelDataProcessingReqDTO, _this18.user_id).subscribe(function (dupliacteResp) {
                          _this18.responseforfileupload = dupliacteResp;
                          _this18.valueDate = _this18.responseforfileupload.valueDate == "Today" ? "Today" : "not Today"; // 
                          // this.date=new Date().toLocaleDateString();
                          // this.valueDate = this.responseforfileupload.valueDate == "Today" ?  this.date : "not Today";

                          _this18.responsebutton = true;
                          _this18.responseDto = _this18.responseforfileupload;

                          if (_this18.responseforfileupload.errorMessage === "Amount and LCY amount mismatch") {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire('Unable to upload', 'Error:' + _this18.responseforfileupload.errorMessage, 'error');
                          }

                          if (_this18.responseDto.totalNoOfRecords !== 0) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                              title: "Data uploaded successfully ",
                              text: "For the Batch " + _this18.responseDto.batchNo
                            });
                            _this18.excelFileFlag = true;
                            _this18.flag = false;
                            _this18.isShow = true;
                          }
                        });
                      } else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().DismissReason.cancel) {
                        swalWithBootstrapButtons.fire('Cancelled', 'Duplicate data uploading cancelled, successfully :)', 'error');
                      }

                      ;

                      _this18.resetEntries();
                    });
                  }

                  _this18.flag = true;
                  _this18.disbaleBtn = true;
                }

                _this18.date = new Date().toLocaleDateString();
                _this18.date = _this18.pipe.transform(_this18.date, "MMM dd, yyyy");
                _this18.valueDate = _this18.responseforfileupload.valueDate == "Today" ? "Today" : "not Today";
                _this18.responsebutton = true;
                _this18.responseDto = _this18.responseforfileupload;

                if (_this18.responseDto.totalNoOfRecords !== 0) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                    title: "Data uploaded successfully ",
                    text: "For the Batch " + _this18.responseDto.batchNo
                  }).then(function (result) {
                    setTimeout(function () {
                      window.scrollTo(0, document.body.scrollHeight);
                    });
                  });
                  _this18.excelFileFlag = true;
                  _this18.flag = false;
                  _this18.isShow = true;
                }
              }, function (err) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire('Server error.');
                _this18.isUploading = false;
              });
            }
          }
        }, {
          key: "getAllExternalSystemNames",
          value: function getAllExternalSystemNames() {
            var _this19 = this;

            this.api.getAllExtSysNamesService(this.user_id).subscribe(function (resp) {
              _this19.allExternalSystemNames = resp.sort();
            });
          }
        }, {
          key: "resetEntries",
          value: function resetEntries() {
            // this.uploadExcelForm.reset();
            this.extSysNameData = '';
            this.isUploading = false;
            this.processNameData = '';
            this.fileNameData = '';
            this.trncode = '';
            this.showSelectedFilename = false;
            this.enablefilebrowser = false;
            this.button = true;
            this.disablebtn2 = false;
            this.excelDataProcessingReqDTO.fileName = '';
            this.disbaleBtn = false;
            this.excelDataProcessingReqDTO.proceedDuplicates = false;
            this.uploadExcelForm.get('selectorDateData').setValue(new Date());
            this.fileUploadWrapper.nativeElement.setAttribute('data-text', 'File Upload');
            this.responsebutton = false;
          }
        }, {
          key: "valuechange",
          value: function valuechange($event) {
            if (this.disablebtn2) {
              this.disbaleBtn = false;
            }

            console.log('event', this.disablebtn2);
          }
        }, {
          key: "getFileNamesBasedOnExtSysNameAndProcessName",
          value: function getFileNamesBasedOnExtSysNameAndProcessName(extSysName, processName) {
            var _this20 = this;

            if (this.disablebtn2) {
              this.disbaleBtn = false;
            }

            this.api.getUploadPermission(extSysName, processName).subscribe(function (resp) {
              _this20.permission = resp;

              if (_this20.permission[0] == 'false') {
                _this20.enablefilebrowser = true;
              } else {
                _this20.enablefilebrowser = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire('Permission denied! ', 'Try with some other external system or process name.');
              }
            });
          }
        }, {
          key: "getProcessNamesBasedOnExtSysNameForUpload",
          value: function getProcessNamesBasedOnExtSysNameForUpload(extSysName) {
            var _this21 = this;

            if (this.disablebtn2) {
              this.disbaleBtn = false;
            }

            this.api.getProcessNamesBasedOnExtSysNameService(extSysName).subscribe(function (resp) {
              _this21.processNames = resp;
            });
          }
        }, {
          key: "getTrnCode",
          value: function getTrnCode(trncode) {
            if (this.disablebtn2) this.disbaleBtn = false;
          }
        }, {
          key: "getTrnCodeArray",
          value: function getTrnCodeArray() {
            var _this22 = this;

            this.api.getAllTransactionCode(this.user_id).subscribe(function (res) {
              _this22.trnCodeArray = res;
              console.log(_this22.trnCodeArray);
            });
          }
        }, {
          key: "deleteDataService",
          value: function deleteDataService(remarks) {
            this.flag = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire('Record is Deleted');
            this.router.navigate(['/file-upload/upload-excel']);
            this.exit();
          }
        }, {
          key: "Datacheck",
          value: function Datacheck() {
            var _this23 = this;

            console.log("valueDate", this.valueDate);

            if (this.valueDate != "Today") {
              this.processDataService();
            } else {
              this.isProcessing = true;

              if (this.responseDto.totalNoOfRecords == 0) {
                this.isProcessing = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire('total no. of record is 0', 'Unable to process.');
                return;
              }

              if (!this.uploadExcelForm.get('remarks').value) {
                this.isProcessing = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire('Remark is mandatory for process.');
                return;
              }

              this.flag = true;
              this.api.processDataService(this.responseforfileupload, this.user_id, this.uploadExcelForm.get('remarks').value).subscribe(function (resp) {
                _this23.isProcessing = false;
                _this23.processDataStatus = resp;
                console.log('this.processDataStatus');

                if (_this23.processDataStatus) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire('Data processed successfully', 'For the Batch ' + _this23.responseDto.batchNo);
                  _this23.isShow = true;
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire('Unable to process.');
                }
              }, function (err) {
                _this23.isProcessing = false;
              });
            }
          }
        }, {
          key: "processDataService",
          value: function processDataService() {
            var _this24 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
              text: 'Value Date is ' + this.responseDto.valueDate + ' in few or all uploading records. Would you like to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'PROCEED.'
            }).then(function (result) {
              console.log(result.value);

              if (result.value) {
                console.log('user choose to proceed.');
                _this24.isProcessing = true;

                if (_this24.responseDto.totalNoOfRecords == 0) {
                  _this24.isProcessing = false;
                  sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire('total no. of record is 0', 'Unable to process.');
                  return;
                }

                if (!_this24.remarks) {
                  _this24.isProcessing = false;
                  sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire('Remark is mandatory for process.');
                  return;
                }

                _this24.flag = true;

                _this24.api.processDataService(_this24.responseforfileupload, _this24.user_id, _this24.remarks).subscribe(function (resp) {
                  _this24.isProcessing = false;
                  _this24.processDataStatus = resp;
                  console.log('this.processDataStatus');

                  if (_this24.processDataStatus) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                      title: "Data processed successfully",
                      text: "For the Batch " + _this24.responseDto.batchNo
                    });
                    _this24.isShow = true;
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire('Unable to process.');
                  }
                }, function (err) {
                  _this24.isProcessing = false;
                });
              } else {
                return;
              }
            });
          }
        }, {
          key: "downloadData",
          value: function downloadData() {
            console.log("this.responseforfileupload.fileDownloadUrl", this.responseforfileupload.fileDownloadUrl);
            var link = document.createElement('a');
            link.setAttribute('target', '_blank');
            link.setAttribute('href', "".concat(this.responseforfileupload.fileDownloadUrl));
            var url = "".concat(this.responseforfileupload.fileDownloadUrl);
            var filename = url.substring(url.lastIndexOf('/') + 1);
            link.setAttribute('download', "".concat(filename));
            document.body.appendChild(link);
            link.click();
            link.remove();
          }
        }, {
          key: "exit",
          value: function exit() {
            this.responsebutton = false;
          }
        }, {
          key: "checkCheckBoxvalue",
          value: function checkCheckBoxvalue(event) {
            if (this.permission[0] == 'false') {
              if (!this.enablefilebrowser) {
                this.enablefilebrowser = true;
              } else {
                this.enablefilebrowser = false;
              }
            }
          }
        }, {
          key: "getFiledata",
          value: function getFiledata(event, extSysNameData, processNameData, filename) {
            var _this25 = this;

            this.showSelectedFilename = true;
            console.log(event.target.value);
            var selectedFiles = event.target.files;
            var fileName = selectedFiles[0].name;
            this.fileUploadWrapper.nativeElement.setAttribute('data-text', fileName);
            console.log(event, extSysNameData, processNameData, filename);

            if (!filename) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire('Enter the file name');
              this.resetEntries();
              return;
            }

            if (!extSysNameData && !processNameData && !filename) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire('Enter all the field');
            }

            console.log('getFiledatafilename', filename);
            this.selectedFiles = event.target.files;
            this.api.showDetailServiceInExcelDataWithFile(this.selectedFiles.item(0), extSysNameData, processNameData, filename).subscribe(function (responseforfileupload) {
              _this25.responseforfileupload = responseforfileupload;

              if (event) {
                if (event.status == 200) {
                  if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpResponse) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire(event.body);
                  }
                }
              }
            });
          }
        }, {
          key: "fun",
          value: function fun(extSysName) {
            console.log(extSysName);
            console.log("enters inside fn");
            var result = extSysName === null || extSysName === void 0 ? void 0 : extSysName.trim();
            console.log(result);

            if (result) {
              console.log("valid string");
              this.space = true;
              console.log(this.space);
            } else {
              console.log("invalid string");
              this.space = false;
              console.log(this.space);
            }
          }
        }]);

        return _FileUploadComponent;
      }();

      _FileUploadComponent.ɵfac = function FileUploadComponent_Factory(t) {
        return new (t || _FileUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_views_users_users_service__WEBPACK_IMPORTED_MODULE_7__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_8__.ExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_roles_service__WEBPACK_IMPORTED_MODULE_9__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router));
      };

      _FileUploadComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
        type: _FileUploadComponent,
        selectors: [["npr-file-upload"]],
        viewQuery: function FileUploadComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵloadQuery"]()) && (ctx.fileUploadWrapper = _t.first);
          }
        },
        decls: 58,
        vars: 13,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], [1, "col-auto"], ["class", "btn smBtn minWdSmBtn btnPrimary", 3, "click", 4, "ngIf"], [1, "row", "gy-4", "align-items-end"], [1, "col-lg-3"], ["for", "extSystem", 1, "formLbl"], [1, "colorRed"], ["formControlName", "extSysNameData", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["hidden", "", "value", "", "disabled", "", "selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "processNameData", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["for", "transactionDate", 1, "formLbl"], ["id", "transactionDate", "formControlName", "selectorDateData", "type", "text", "value", "", "readonly", "", 1, "form-control"], ["formControlName", "trncode", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["class", "col-lg-3", 4, "ngIf"], ["class", "col-lg-5", 4, "ngIf"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-4"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], [4, "ngIf", "ngIfElse"], ["showText", ""], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [1, "titleStyle", "mt-2", "mb-4", "text-end"], [1, "pageTitle", "darkgreyClr"], ["class", "dbCardStyle", 4, "ngIf"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [3, "value"], ["required", "", "id", "fileName", "formControlName", "fileName", "type", "text", "value", "", 1, "form-control", 3, "keypress", "keyup"], [1, "col-lg-5"], [1, "fileUpload"], [1, "formS"], ["data-text", "File Upload", 1, "file-upload-wrapper"], ["fileWrapper", ""], ["name", "file-upload-field", "type", "file", "value", "", 1, "file-upload-field", 3, "change"], ["fileInput", ""], [1, "indicator-progress"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"], [1, "indicator-label"], [1, "titleStyle", "mt-2", "mb-4"], [1, "row", "gy-4"], [1, "col-lg-4"], ["for", "codeLbl", 1, "formLbl"], [1, "readonlyText"], ["class", "readonlyText", 4, "ngIf"], [1, "col-lg-6"], ["for", "remarks", 1, "formLbl"], ["id", "remarks", "formControlName", "remarks", "rows", "3", "placeholder", "Remarks", 1, "form-control", "textAreaCol"], ["for", "overrides", 1, "formLbl"], ["id", "exampleFormControlTextarea1", "rows", "3", 1, "form-control", "textAreaCol"], [1, "row", "g-3", "pb-3", "pt-4", "justify-content-end"], ["showProcess", ""], [1, "btn", "smBtn", "minWdSmBtn", "btnDarkGrey", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "click"]],
        template: function FileUploadComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "select", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function FileUploadComponent_Template_select_change_15_listener($event) {
              return ctx.getProcessNamesBasedOnExtSysNameForUpload($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "--Please select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](18, FileUploadComponent_option_18_Template, 2, 2, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](19, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](21, "Process Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](22, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](23, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](24, "select", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function FileUploadComponent_Template_select_change_24_listener($event) {
              return ctx.getFileNamesBasedOnExtSysNameAndProcessName(ctx.uploadExcelForm.get("extSysNameData").value, $event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](26, "--Please select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](27, FileUploadComponent_option_27_Template, 2, 2, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](29, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](30, "Transaction Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](33, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](34, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](36, "Transaction Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](38, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function FileUploadComponent_Template_select_change_39_listener($event) {
              return ctx.getTrnCode($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "--Please select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](42, FileUploadComponent_option_42_Template, 2, 3, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](43, FileUploadComponent_div_43_Template, 6, 0, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](44, FileUploadComponent_div_44_Template, 7, 0, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "button", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function FileUploadComponent_Template_button_click_47_listener() {
              return ctx.doFirstValidation();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](48, FileUploadComponent_ng_container_48_Template, 4, 0, "ng-container", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](49, FileUploadComponent_ng_template_49_Template, 2, 0, "ng-template", null, 24, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](52, "a", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](53, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](55, "h2", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](56, "Final excel report can be downloaded from Process Excel Screen.");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](57, FileUploadComponent_div_57_Template, 58, 10, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](50);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.uploadExcelForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.roleCodes["new"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.allExternalSystemNames);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.processNames);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.trnCodeArray);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.enablefilebrowser);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.enablefilebrowser);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", !ctx.uploadExcelForm.valid || !ctx.showSelectedFilename);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isUploading)("ngIfElse", _r7);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](12, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.responsebutton);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.DefaultValueAccessor, _angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.RequiredValidator],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmaWxlLXVwbG9hZC5jb21wb25lbnQuc2NzcyJ9 */"]
      });

      var _ResponseData = /*#__PURE__*/_createClass(function _ResponseData() {
        _classCallCheck(this, _ResponseData);
      });
      /***/

    },

    /***/
    59366:
    /*!********************************************************************************!*\
      !*** ./src/app/views/file-upload/rejection-queue/rejection-queue.component.ts ***!
      \********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RejectionQueueComponent": function RejectionQueueComponent() {
          return (
            /* binding */
            _RejectionQueueComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/models/pending-for-auth-dto */
      27721);
      /* harmony import */


      var src_app_shared_models_users__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/models/users */
      92803);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! jspdf-autotable */
      56587);
      /* harmony import */


      var jspdf_autotable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jspdf_autotable__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! jspdf */
      75585);
      /* harmony import */


      var jspdf__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jspdf__WEBPACK_IMPORTED_MODULE_3__);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ng-bootstrap/ng-bootstrap */
      97544);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var src_app_views_users_users_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/views/users/users.service */
      59119);
      /* harmony import */


      var src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/shared/services/excel.service */
      58219);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! angular-datatables */
      50481);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/forms */
      1707); // import { ModalTransactionsDetailEditableComponent } from '../modals/modal-transactions-detail-editable/modal-transactions-detail-editable.component';
      // import { ToastService } from 'src/app/shared/services/toast.service';


      function RejectionQueueComponent_tr_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RejectionQueueComponent_tr_27_Template_button_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7);

            var data_r4 = restoredCtx.$implicit;
            var i_r5 = restoredCtx.index;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r6.queryDetailsDataByParam(data_r4, i_r5);
          });

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
        }

        if (rf & 2) {
          var data_r4 = ctx.$implicit;
          var i_r5 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("id", "btnGetDetails" + i_r5);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r4.externalSysName);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r4.batchNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r4.processName);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](12, 9, data_r4.processingDate, "medium"));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.extractFilename(data_r4.fileName));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r4.totalNoOfRecord);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r4.totalCredit);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r4.totalDebit);
        }
      }

      function RejectionQueueComponent_tr_61_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RejectionQueueComponent_tr_61_Template_button_click_18_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10);

            var data_r8 = restoredCtx.$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](70);

            return ctx_r9.openDialog(_r2, data_r8);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, " Edit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r8.account);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r8.ccyCd);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r8.id.branchCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r8.amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r8.lcyEquivalent);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r8.drCr);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r8.exchRate);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r8.relatedAccount);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r8.addlText);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r8.accDesc);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r8.errorCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r8.errorDesc);
        }
      }

      function RejectionQueueComponent_ng_template_69_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2, "Edit Transaction Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8, "Account Number :");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_9_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r12.responseDto.account = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "label", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](12, " Amount :");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_13_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r14.responseDto.amount = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](14, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](15, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](16, "Account Currency :");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_17_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r15.responseDto.ccyCd = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20, "Account Branch : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_21_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r16.responseDto.accountBranch = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](23, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](24, "LCY Amount: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_25_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r17.responseDto.lcyEquivalent = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](28, " Debit / Credit : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r18.responseDto.drCr = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](32, " Branch Code: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "input", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_33_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r19.responseDto.id.branchCode = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](36, " Value Date: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](39, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_40_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r20.responseDto.valueDate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, " Initiation Date : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](46, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_47_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r21.responseDto.id.initiationDate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50, " Upload Date :");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](52);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](53, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_54_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r22.responseDto.uploadDate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](57, " External Reference:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_58_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r23.responseDto.externalRefNo = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](59, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](61, " Related Account :");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_62_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r24.responseDto.relatedAccount = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](65, " Related Customer :");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_66_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r25.responseDto.relCust = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](67, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](68, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](69, " Exchange Rate :");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_70_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r26.responseDto.exchRate = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](72, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](73, " Related Reference :");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_74_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r27.responseDto.relatedRef = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](75, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](77, "Additional Text :");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](78, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_78_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r28.responseDto.addlText = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](79, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](80, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](81, "Instrument Number :");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](82, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_82_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r29.responseDto.instrumentNo = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](83, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](84, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](85, "Batch Number :");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](86, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_86_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r30.responseDto.id.batchNo = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](87, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](88, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](89, " Financial Cycle:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](90, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_90_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r31.responseDto.finCycle = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](91, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](92, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](93, " Period Code:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](94, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_94_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r32.responseDto.periodCode = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](95, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](96, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](97, " Transaction Code :");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](98, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_98_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r33.responseDto.txnCode = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](99, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](100, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](101, " MIS_CODE:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](102, "input", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_102_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r34.responseDto.misCode = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](103, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](104, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](105, " POOL_CODE:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](106, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_106_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r35.responseDto.poolCode = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](107, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](108, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](109, "TXN_MIS_1:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](110, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_110_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r36.responseDto.txnMis1 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](111, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](112, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](113, "Error Description:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](114, "input", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](115, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](116, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](117, "MIS_GROUP:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](118, "input", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_118_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r37.responseDto.misGroup = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](119, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](120, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](121, " MIS_FLAG:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](122, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_122_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r38.responseDto.misFlag = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](123, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](124, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](125, "TXN_MIS_2:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](126, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_126_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r39.responseDto.txnMis2 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](127, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](128, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](129, "MIS_HEAD:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](130, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_130_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r40.responseDto.misHead = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](131, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](132, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](133, "MIS_GROUP_TXN:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](134, "input", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_134_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r41.responseDto.misGroupTxn = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](135, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](136, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](137, "TXN_MIS_3:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](138, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_138_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r42.responseDto.txnMis3 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](139, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](140, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](141, "COMP_MIS_1:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](142, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_142_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r43.responseDto.compMis1 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](143, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](144, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](145, "COMP_MIS_3 :");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](146, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_146_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r44.responseDto.compMis3 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](147, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](148, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](149, "TXN_MIS_4:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](150, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_150_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r45.responseDto.txnMis4 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](151, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](152, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](153, "COMP_MIS_2:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](154, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_154_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r46.responseDto.compMis2 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](155, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](156, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](157, "COMP_MIS_4:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](158, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_158_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r47.responseDto.compMis4 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](159, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](160, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](161, "TXN_MIS_5:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](162, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_162_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r48.responseDto.txnMis5 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](163, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](164, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](165, " COMP_MIS_5:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](166, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_166_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r49.responseDto.compMis5 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](167, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](168, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](169, " COST_CODE_1:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](170, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_170_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r50.responseDto.costCode1 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](171, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](172, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](173, " TXN_MIS_6:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](174, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_174_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r51.responseDto.txnMis6 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](175, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](176, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](177, " COMP_MIS_6:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](178, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_178_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r52.responseDto.compMis6 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](179, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](180, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](181, "COST_CODE_2:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](182, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_182_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r53.responseDto.costCode2 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](183, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](184, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](185, "TXN_MIS_7:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](186, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_186_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r54.responseDto.txnMis7 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](187, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](188, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](189, "COMP_MIS_7:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](190, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_190_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r55.responseDto.compMis7 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](191, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](192, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](193, "COST_CODE_3:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](194, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_194_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r56.responseDto.costCode3 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](195, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](196, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](197, "TXN_MIS_8:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](198, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_198_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r57.responseDto.txnMis8 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](199, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](200, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](201, "COMP_MIS_8:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](202, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_202_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r58.responseDto.compMis8 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](203, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](204, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](205, " COST_CODE_4 :");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](206, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_206_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r59.responseDto.costCode4 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](207, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](208, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](209, "TXN_MIS_9:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](210, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_210_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r60.responseDto.txnMis9 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](211, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](212, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](213, "COMP_MIS_9:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](214, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_214_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r61.responseDto.compMis9 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](215, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](216, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](217, "COST_CODE_5:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](218, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_218_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r62.responseDto.costCode5 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](219, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](220, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](221, "TXN_MIS_10:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](222, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_222_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r63.responseDto.txnMis10 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](223, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](224, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](225, "COMP_MIS_10:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](226, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_226_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r64.responseDto.compMis10 = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](227, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](228, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](229, "UPLOAD STATUS:");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](230, "input", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngModelChange", function RejectionQueueComponent_ng_template_69_Template_input_ngModelChange_230_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r65.responseDto.uploadStat = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](231, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](232, "p", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](233, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RejectionQueueComponent_ng_template_69_Template_button_click_233_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r66.insertModifiedDataIntoDetailsData(ctx_r66.responseDto);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](234, " Save Data ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](235, "\xA0\xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](236, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RejectionQueueComponent_ng_template_69_Template_button_click_236_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var modal_r11 = restoredCtx.$implicit;
            return modal_r11.dismiss("Cross click");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](237, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.account);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.ccyCd);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.accountBranch);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.lcyEquivalent);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.drCr);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.id.branchCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](39, 56, ctx_r3.responseDto.valueDate));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.valueDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](46, 58, ctx_r3.responseDto.id.initiationDate));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.id.initiationDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](53, 60, ctx_r3.responseDto.uploadDate));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.uploadDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.externalRefNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.relatedAccount);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.relCust);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.exchRate);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.relatedRef);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.addlText);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.instrumentNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.id.batchNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.finCycle);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.periodCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.txnCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.misCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.poolCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.txnMis1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.misGroup);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.misFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.txnMis2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.misHead);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.misGroupTxn);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.txnMis3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.compMis1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.compMis3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.txnMis4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.compMis2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.compMis4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.txnMis5);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.compMis5);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.costCode1);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.txnMis6);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.compMis6);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.costCode2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.txnMis7);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.compMis7);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.costCode3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.txnMis8);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.compMis8);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.costCode4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.txnMis9);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.compMis9);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.costCode5);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.txnMis10);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.compMis10);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngModel", ctx_r3.responseDto.uploadStat);
        }
      }

      var _RejectionQueueComponent = /*#__PURE__*/function () {
        function _RejectionQueueComponent(api, // private toastService : ToastService,
        userApi, excelService, modalService) {
          _classCallCheck(this, _RejectionQueueComponent);

          this.api = api;
          this.userApi = userApi;
          this.excelService = excelService;
          this.modalService = modalService;
          this.respArray = [];
          this.closeResult = '';
          this.dtOptions = {};
          this.dtTrigger1 = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
          this.dtTrigger2 = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
          this.pendingForAuthData = [];
          this.PendingForAuthDetailsDTOList = [];
          this.flag = true;
          this.dataModificationDetailsAuditLog = new src_app_shared_models_users__WEBPACK_IMPORTED_MODULE_1__.User();
        }

        _createClass(_RejectionQueueComponent, [{
          key: "queryDetailsDataByParam",
          value: function queryDetailsDataByParam(pendingForAuthDTO, i) {
            var _this26 = this;

            var btn = document.getElementById("btnGetDetails" + i);
            btn.innerHTML = '<span class="indicator-progress" >Please wait... <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>';
            this.spinner1 = true;
            this.getDetailsQueryToggleReqDTO = new src_app_shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_0__.GetDetailsQueryToggleReqDTO();
            this.getDetailsQueryToggleReqDTO.externalSysName = pendingForAuthDTO.externalSysName;
            this.getDetailsQueryToggleReqDTO.processName = pendingForAuthDTO.processName;
            this.getDetailsQueryToggleReqDTO.processingDate = pendingForAuthDTO.processingDate;
            this.getDetailsQueryToggleReqDTO.currency = pendingForAuthDTO.currency;
            this.getDetailsQueryToggleReqDTO.filename = pendingForAuthDTO.fileName;
            this.getDetailsQueryToggleReqDTO.batchNumber = pendingForAuthDTO.batchNumber;
            this.api.queryFailedDetailsDataByParamService(this.getDetailsQueryToggleReqDTO).subscribe(function (resp) {
              _this26.PendingForAuthDetailsDTOList = resp;
              btn.innerHTML = '<span>Get Details</span>';

              _this26.dtTrigger2.next();

              console.log(_this26.PendingForAuthDetailsDTOList);

              if (_this26.PendingForAuthDetailsDTOList) {
                console.log(_this26.PendingForAuthDetailsDTOList[0].inputBy);
                _this26.audit = true;
                _this26.flag = true;
                _this26.dataAvail = true;
                _this26.spinner1 = false;
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire('No Data');
              }
            });
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.PendingForAuthDetailsDTOList = {};
            this.user_id = localStorage.getItem('user_id');
            this.role = sessionStorage.getItem('user_role');
            this.getPendingForAuthData();
            this.dtOptions[0] = {
              pagingType: 'full_numbers',
              pageLength: 5,
              columnDefs: [{
                type: 'date',
                'targets': [4]
              }],
              order: [[4, 'desc']],
              processing: true,
              lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]]
            };
            this.dtOptions[1] = {
              pagingType: 'full_numbers',
              pageLength: 5,
              processing: true,
              retrieve: true,
              lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]]
            };
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.dtTrigger1.unsubscribe();
            this.dtTrigger2.unsubscribe();
          }
        }, {
          key: "extractFilename",
          value: function extractFilename(path) {
            var pathArray = path.split("/");
            var lastIndex = pathArray.length - 1;
            return pathArray[lastIndex];
          }
        }, {
          key: "screenpermission",
          value: function screenpermission() {
            var _this27 = this;

            this.screenName = 'DataModificationDetails';
            this.userApi.getRoleScreenPermission(this.user_id, this.screenName, this.role).subscribe(function (res) {
              _this27.rolepermission = res;
              console.log(_this27.rolepermission);

              if (_this27.rolepermission) {
                _this27.button_permission = _this27.rolepermission[0];
                console.log(_this27.button_permission);
              }
            });
          }
        }, {
          key: "getPendingForAuthData",
          value: function getPendingForAuthData() {
            var _this28 = this;

            this.api.getPendingForAuthDataForModification(this.user_id).subscribe(function (resp) {
              _this28.pendingForAuthData = resp;

              _this28.dtTrigger1.next();

              console.log(_this28.pendingForAuthData);
            });
          }
        }, {
          key: "openSnackBar",
          value: function openSnackBar(message, action) {
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire(message);
          }
        }, {
          key: "approveAndProcess",
          value: function approveAndProcess() {
            var _this29 = this;

            this.flag = false;
            this.api.excelModifyAuthorization(this.PendingForAuthDetailsDTOList, this.user_id).subscribe(function (authRes) {
              _this29.authRes = authRes;
              console.log(_this29.authRes);

              if (_this29.authRes) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire('Data Send for Authorization. After Authorization you can process the data.');
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire('Authorization Failed.');
              }
            });
          }
        }, {
          key: "getAllDetailsData",
          value: function getAllDetailsData() {
            var _this30 = this;

            this.api.getFailedDetailsListService().subscribe(function (resp) {
              _this30.PendingForAuthDetailsDTOList = resp;

              _this30.dtTrigger2.next();
            });
          }
        }, {
          key: "openDialog",
          value: function openDialog(content, data) {
            var _this31 = this;

            console.log(content, "DetailsDTO");
            console.log(data, "data");
            this.responseDto = data;
            this.modalService.open(content, {
              ariaLabelledBy: 'modal-basic-title',
              windowClass: "my-class"
            }).result.then(function (result) {
              _this31.closeResult = "Closed with: ".concat(result);
            }, function (reason) {
              _this31.closeResult = "Dismissed ".concat(_this31.getDismissReason(reason));
            });
          }
        }, {
          key: "getDismissReason",
          value: function getDismissReason(reason) {
            if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.ModalDismissReasons.ESC) {
              return 'by pressing ESC';
            } else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.ModalDismissReasons.BACKDROP_CLICK) {
              return 'by clicking on a backdrop';
            } else {
              return "with: ".concat(reason);
            }
          }
        }, {
          key: "insertModifiedDataIntoDetailsData",
          value: function insertModifiedDataIntoDetailsData(reqDTO) {
            var _this32 = this;

            if (reqDTO.inputBy !== this.user_id) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire('You Donot have permission for modification.', 'Only maker can modify record.');
              return;
            }

            this.api.sendUpdatedDataToDetailsData(reqDTO, this.user_id).subscribe(function (resp) {
              // console.log(resp);
              _this32.status = resp;
              console.log('insertion status: ' + _this32.status);

              if (_this32.status === true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire('data saved successfully.', 'success');
              }

              if (_this32.status === false) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire({
                  icon: 'error',
                  text: 'data save to DB Failed.'
                });
              } // this.saveButtonStatus = false;

            });
          }
        }, {
          key: "openDialog1",
          value: function openDialog1(detailsDto) {
            console.log(detailsDto); // const dialogRef = this.dialog.open(
            //   RejectionQueueEditComponent,
            //   {
            //     data: detailsDto
            //   }
            // );
            // dialogRef.afterClosed().subscribe(result => {
            //   // console.log(`Dialog result: ${result}`);
            // });
          }
        }, {
          key: "downloadData",
          value: function downloadData() {
            this.modify = true;
            console.log('response' + this.PendingForAuthDetailsDTOList);
            this.excelService.exportAsExcelFile(this.PendingForAuthDetailsDTOList, 'Excel_Error_Auth');
          } //downloding records in pdf

        }, {
          key: "convert",
          value: function convert() {
            var doc = new (jspdf__WEBPACK_IMPORTED_MODULE_3___default())();
            var col = [["Account", "Amount", "txnCode", "exchRate", "valueDate", "deleteStat"]];
            var rows = [];
            /* The following array of object as response from the API req  */

            var itemNew = this.PendingForAuthDetailsDTOList;
            itemNew.forEach(function (element) {
              // var date = new Date(element.timeForExport).toLocaleDateString("en-us");
              //  console.log(date)
              var temp = [element.account, element.amount, element.txnCode, element.exchRate, element.valueDate, element.deleteStat];
              rows.push(temp);
            }); //doc.autoTable(col, rows);

            doc.autoTable({
              head: col,
              body: rows
            });
            doc.save('Excel.pdf');
          }
        }]);

        return _RejectionQueueComponent;
      }();

      _RejectionQueueComponent.ɵfac = function RejectionQueueComponent_Factory(t) {
        return new (t || _RejectionQueueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_views_users_users_service__WEBPACK_IMPORTED_MODULE_6__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_7__.ExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__.NgbModal));
      };

      _RejectionQueueComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
        type: _RejectionQueueComponent,
        selectors: [["npr-rejection-queue"]],
        decls: 71,
        vars: 6,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], ["id", "dbTable1", "datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [1, "pageTitle", "my-3", "text-center"], ["id", "dbTable2", "datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [1, "btnCol", "mt-md-4", "mt-3"], [1, "btn", "smBtn", "btnDarkGrey", 3, "click"], ["content", ""], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "id", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "templatecontent"], [1, "row", "gy-4"], [1, "col-lg-2"], [1, "formLbl"], ["type", "text", 3, "ngModel", "ngModelChange"], ["type", "text", "maxlength", "3", 3, "ngModel", "ngModelChange"], ["type", "date", 3, "ngModel", "ngModelChange"], ["type", "text", "maxlength", "4", 3, "ngModel", "ngModelChange"], ["type", "text", "maxlength", "9", 3, "ngModel", "ngModelChange"], ["type", "text"], ["type", "text", "maxlength", "10", 3, "ngModel", "ngModelChange"], ["type", "text", "maxlength", "1", 3, "ngModel", "ngModelChange"], [2, "margin-left", "80%"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "click"]],
        template: function RejectionQueueComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, RejectionQueueComponent_tr_27_Template, 21, 12, "tr", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "h2", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "Failed Data");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](31, "table", 7);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49, "Related Account");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](51, "Process");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](53, "add text");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](55, "account description");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](56, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](57, "Error Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](59, "Error Description");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](60, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](61, RejectionQueueComponent_tr_61_Template, 28, 12, "tr", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RejectionQueueComponent_Template_button_click_63_listener() {
              return ctx.downloadData();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](64, "Export Excel");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](65, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](66, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RejectionQueueComponent_Template_button_click_66_listener() {
              return ctx.convert();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](67, "Export PDF");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](68, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](69, RejectionQueueComponent_ng_template_69_Template, 238, 62, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dtOptions", ctx.dtOptions[0])("dtTrigger", ctx.dtTrigger1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.pendingForAuthData);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dtOptions", ctx.dtOptions[1])("dtTrigger", ctx.dtTrigger2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](30);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.PendingForAuthDetailsDTOList);
          }
        },
        directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_8__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.MaxLengthValidator],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe],
        styles: ["table.tableStyle[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #A6AAB5;\n  font-size: 9px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  padding: 16px 13px;\n  border-bottom: 1px solid #F5F5F5;\n}\n\n.templatecontent[_ngcontent-%COMP%] {\n  margin-left: 2%;\n}\n\n  .my-class .modal-dialog {\n  max-width: 90%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlamVjdGlvbi1xdWV1ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGNBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNDLGtCQUFBO0VBQ0EsZ0NBQUE7QUFDRjs7QUFDQTtFQUNDLGVBQUE7QUFFRDs7QUFBQTtFQUNDLGNBQUE7RUFDQSxXQUFBO0FBR0QiLCJmaWxlIjoicmVqZWN0aW9uLXF1ZXVlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGUudGFibGVTdHlsZSB0aGVhZCB0ciB0aCB7XHJcblx0Y29sb3I6ICNBNkFBQjU7XHJcblx0Zm9udC1zaXplOiA5cHg7XHJcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHRsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gIHBhZGRpbmc6IDE2cHggMTNweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0Y1RjVGNSA7XHJcbn1cclxuLnRlbXBsYXRlY29udGVudHtcclxuXHRtYXJnaW4tbGVmdDogMiU7XHJcbn1cclxuOjpuZy1kZWVwIC5teS1jbGFzcyAubW9kYWwtZGlhbG9nIHsgXHJcblx0bWF4LXdpZHRoOiA5MCU7XHJcblx0d2lkdGg6IDEwMCU7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    56015:
    /*!******************************************!*\
      !*** ./src/app/views/users/users.dto.ts ***!
      \******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "User": function User() {
          return (
            /* binding */
            _User
          );
        }
        /* harmony export */

      });

      var _User = /*#__PURE__*/_createClass(function _User() {
        _classCallCheck(this, _User);
      });
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_views_file-upload_file-upload_module_ts-es5.js.map