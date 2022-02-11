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


      function AuthorizeExcelComponent_tr_29_ng_container_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2, "Please wait... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](3, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
        }
      }

      function AuthorizeExcelComponent_tr_29_ng_template_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Get Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
      }

      function AuthorizeExcelComponent_tr_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuthorizeExcelComponent_tr_29_Template_button_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r11);

            var data_r6 = restoredCtx.$implicit;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

            return ctx_r10.queryDetailsDataByParam(data_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, AuthorizeExcelComponent_tr_29_ng_container_3_Template, 4, 0, "ng-container", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, AuthorizeExcelComponent_tr_29_ng_template_4_Template, 2, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](16, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](18, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r6 = ctx.$implicit;

          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵreference"](5);

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.isLoading)("ngIfElse", _r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](18, 10, data_r6.processingDate, "medium"));

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r6.authStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r6.uploadStatus);
        }
      }

      function AuthorizeExcelComponent_tr_55_Template(rf, ctx) {
        if (rf & 1) {
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
        }

        if (rf & 2) {
          var data_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r12.account);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r12.ccyCd);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r12.id.branchCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r12.amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r12.lcyEquivalent);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r12.drCr);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r12.exchRate);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r12.relatedAccount);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r12.addlText);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](data_r12.accDesc);
        }
      }

      function AuthorizeExcelComponent_button_57_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuthorizeExcelComponent_button_57_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

            return ctx_r13.downloadData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Export Excel");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
      }

      function AuthorizeExcelComponent_button_59_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuthorizeExcelComponent_button_59_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

            return ctx_r15.convert();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, "Export PDF");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
      }

      function AuthorizeExcelComponent_button_61_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuthorizeExcelComponent_button_61_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

            return ctx_r17.approveDetailsData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Approve and Process ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
      }

      function AuthorizeExcelComponent_button_63_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function AuthorizeExcelComponent_button_63_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();

            return ctx_r19.reject();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1, " Reject ");

          _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        }
      }

      var _AuthorizeExcelComponent = /*#__PURE__*/function () {
        function _AuthorizeExcelComponent(api, roleService, userApi, excelService) {
          _classCallCheck(this, _AuthorizeExcelComponent);

          this.api = api;
          this.roleService = roleService;
          this.userApi = userApi;
          this.excelService = excelService;
          this.respArray = [];
          this.dtOptions = [];
          this.dtTrigger1 = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
          this.dtTrigger2 = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
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
            this.user_id = localStorage.getItem('LoggedInUser').replace(/['"]+/g, '');
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
            console.log('for authorization', this.deUploadReqDTO);
            this.api.approveDetailsData(this.deUploadReqDTO, this.user_id).subscribe(function (resp) {
              _this5.firstLevelAuthorizationStatus = resp;
              console.log(_this5.firstLevelAuthorizationStatus);
              _this5.authprocess = false;

              if (!_this5.firstLevelAuthorizationStatus) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('Data authorization is failed.');
                return;
              }

              if (_this5.firstLevelAuthorizationStatus) {
                _this5.process = true;

                _this5.getPendingForAuthData();

                _this5.approval = false;

                _this5.Process();
              }
            }, function (error) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_6___default().fire('Data authorization is failed.');
            });
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
          value: function queryDetailsDataByParam(pendingForAuthDTO) {
            var _this8 = this;

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
          } // openDialog(detailsDto: PendingForAuthDetailsDTO) {
          //   const dialogRef = this.dialog.open(ModalExcelAuthFirstComponent, {
          //     data: detailsDto
          //   });
          //   dialogRef.afterClosed().subscribe(result => {
          //     // console.log(`Dialog result: ${result}`);
          //   });
          // }

        }, {
          key: "openAuditDetails",
          value: function openAuditDetails(detailsDto) {
            var _this11 = this;

            this.api.getAuditDataOfDetailsRecord(detailsDto).subscribe(function (resp) {
              _this11.medDeUploadDetailHistEntityList = resp; // //console.log(this.medDeUploadDetailHistEntityList);
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
            var _this12 = this;

            this.button1 = false;
            console.log(this.pendingForAuthDetailsDTOList);
            this.pendingForAuthDetailsDTOList.forEach(function (element) {
              if (element.drCr == 'C') {
                _this12.credit = element.lcyEquivalent;
                _this12.debit = 0;
              } else {
                _this12.debit = element.lcyEquivalent;
                _this12.credit = 0;
              }

              _this12.dataForProcessScreen1.push({
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
                DrLcyAmt: _this12.debit,
                CrLcyAmt: _this12.credit,
                Instr_code: element.instrumentNo,
                Value_Date: _this12.pipe.transform(element.valueDate, 'dd-MMM-yy'),
                User_Id: element.inputBy,
                Authorizer_ID: element.firstTimeAuthorizer //16

              });

              console.log(_this12.dataForProcessScreen1);
            });
            console.log('final data', this.dataForProcessScreen1);
            this.excelService.exportAsExcelFile(this.dataForProcessScreen1, 'Excel_Upload_Data');
            this.dataForProcessScreen1 = [];
          } //pdf download

        }, {
          key: "convert",
          value: function convert() {
            var _this13 = this;

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
                _this13.pdfCreditVar = element.lcyEquivalent;
                _this13.pdfDebitVar = 0;
              } else {
                _this13.pdfDebitVar = element.lcyEquivalent;
                _this13.pdfCreditVar = 0;
              }

              _this13.valueDate = _this13.pipe.transform(element.valueDate, 'dd-MMM-yy'); //14

              var date = new Date(element.timeForExport).toLocaleDateString("en-us");
              console.log(date);
              var temp = [element.id.batchNo, // Refrence No : element.id.refNo, // 2 skiiping this user can see this in FlexCube
              element.accountBranch, element.account, element.accDesc, element.drCr, element.txnCode, element.trnDesc, element.amount, element.exchRate, _this13.pdfDebitVar, _this13.pdfCreditVar, element.instrumentNo, _this13.valueDate, element.inputBy, element.firstTimeAuthorizer]; //16

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
        return new (t || _AuthorizeExcelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_8__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_shared_services_roles_service__WEBPACK_IMPORTED_MODULE_9__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_views_users_users_service__WEBPACK_IMPORTED_MODULE_10__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_11__.ExcelService));
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
        decls: 64,
        vars: 10,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "pageTitle", "my-3", "text-center"], [1, "dbCardStyle"], ["id", "dbTable1", "datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], ["id", "dbTable2", "datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [1, "btnCol", "mt-md-4", "mt-3"], ["class", "btn smBtn btnDarkGrey", 3, "click", 4, "ngIf"], ["class", "btn smBtn btnPrimary ", 3, "click", 4, "ngIf"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", "btnLight", 3, "click"], [4, "ngIf", "ngIfElse"], ["showDetails", ""], [1, "indicator-progress"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"], [1, "indicator-label"], [1, "btn", "smBtn", "btnDarkGrey", 3, "click"], [1, "btn", "smBtn", "btnPrimary", 3, "click"]],
        template: function AuthorizeExcelComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](29, AuthorizeExcelComponent_tr_29_Template, 23, 13, "tr", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](30, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](31, "table", 7);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](56, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](57, AuthorizeExcelComponent_button_57_Template, 2, 0, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](58, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](59, AuthorizeExcelComponent_button_59_Template, 2, 0, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](60, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](61, AuthorizeExcelComponent_button_61_Template, 2, 0, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](62, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](63, AuthorizeExcelComponent_button_63_Template, 2, 0, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dtOptions", ctx.dtOptions[0])("dtTrigger", ctx.dtTrigger1);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngForOf", ctx.pendingForAuthData);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("dtOptions", ctx.dtOptions[1])("dtTrigger", ctx.dtTrigger2);

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
          }
        },
        directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_7__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdXRob3JpemUtZXhjZWwuY29tcG9uZW50LnNjc3MifQ== */"]
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
        path: "",
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
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _file_upload_routing_module__WEBPACK_IMPORTED_MODULE_0__.FileUploadRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, angular_datatables__WEBPACK_IMPORTED_MODULE_4__.DataTablesModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_FileUploadModule, {
          declarations: [_file_upload_file_upload_component__WEBPACK_IMPORTED_MODULE_1__.FileUploadComponent, _rejection_queue_rejection_queue_component__WEBPACK_IMPORTED_MODULE_2__.RejectionQueueComponent, _authorize_excel_authorize_excel_component__WEBPACK_IMPORTED_MODULE_3__.AuthorizeExcelComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _file_upload_routing_module__WEBPACK_IMPORTED_MODULE_0__.FileUploadRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, angular_datatables__WEBPACK_IMPORTED_MODULE_4__.DataTablesModule]
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


      function FileUploadComponent_button_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function FileUploadComponent_button_8_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r11);

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r10.refreshGl();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, "Refresh CCY Rate");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function FileUploadComponent_option_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 28);

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

      function FileUploadComponent_option_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 28);

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

      function FileUploadComponent_option_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "option", 28);

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

      function FileUploadComponent_div_35_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "label", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "File Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "input", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("keypress", function FileUploadComponent_div_35_Template_input_keypress_3_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r15.valuechange($event);
          })("keyup", function FileUploadComponent_div_35_Template_input_keyup_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r16);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r17.fun(ctx_r17.excelDataProcessingReqDTO.fileName);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function FileUploadComponent_div_36_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](3, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "input", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function FileUploadComponent_div_36_Template_input_change_4_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r18.getFiledata($event, ctx_r18.uploadExcelForm.get("extSysNameData").value, ctx_r18.uploadExcelForm.get("processNameData").value, ctx_r18.uploadExcelForm.get("fileName").value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r5.selectedFiles[0].name);
        }
      }

      function FileUploadComponent_ng_container_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Uploading, Please wait... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        }
      }

      function FileUploadComponent_ng_template_41_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Upload Data");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function FileUploadComponent_div_52_ng_container_47_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](2, "Processing, Please wait... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](3, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementContainerEnd"]();
        }
      }

      function FileUploadComponent_div_52_ng_template_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "span", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](1, " Process");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }
      }

      function FileUploadComponent_div_52_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](2, "h2", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](3, "File Upload Summary");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](4, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](5, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](6, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](7, "Batch Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "p", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](11, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](12, "Total No Of records");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "p", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](14);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](15, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](16, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](17, "Total Debit Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](18, "p", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](19);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](20, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](21, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](22, "Total Credit Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](23, "p", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](24);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](25, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](26, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](27, "Sum (Credit - Debit)");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](28, "p", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](29);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](30, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](31, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](32, "Value Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](33, "p", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](34);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](35, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](36, "label", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](37, "Remarks");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelement"](38, "textarea", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](40, "label", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](41, "Overrides");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](42, "textarea", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](43);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](45, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function FileUploadComponent_div_52_Template_button_click_46_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r23.Datacheck();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](47, FileUploadComponent_div_52_ng_container_47_Template, 4, 0, "ng-container", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](48, FileUploadComponent_div_52_ng_template_48_Template, 2, 0, "ng-template", null, 48, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](51, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function FileUploadComponent_div_52_Template_button_click_51_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r24);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r25.deleteDataService(ctx_r25.uploadExcelForm.get("remarks").value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](52, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](53, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](54, "a", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function FileUploadComponent_div_52_Template_a_click_54_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r24);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r26.downloadData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](55, "View Excel");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](56, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](57, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function FileUploadComponent_div_52_Template_button_click_57_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵrestoreView"](_r24);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵnextContext"]();

            return ctx_r27.exit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](58, "Hide");

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](49);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r9.valueDate);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate"](ctx_r9.responseDto.overrideMessage);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("disabled", ctx_r9.flag);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx_r9.isProcessing)("ngIfElse", _r21);
        }
      }

      var _c0 = function _c0() {
        return ["/dashboard"];
      };

      var _FileUploadComponent = /*#__PURE__*/function () {
        function _FileUploadComponent(api, userApi, fb, // private toastService : ToastService,
        excelService, roleService) {
          _classCallCheck(this, _FileUploadComponent);

          this.api = api;
          this.userApi = userApi;
          this.fb = fb;
          this.excelService = excelService;
          this.roleService = roleService;
          this.isSelected = true;
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
            var _this14 = this;

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
              _this14.newRolePermissions();
            }, 2000);
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this14.roleCodes = message;
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
            var _this15 = this;

            this.api.getAuditLogService(excelDataProcessingReqDTO, this.user_id).subscribe(function (resp) {
              _this15.excelDataProcessingAuditlog = resp;

              if (_this15.excelDataProcessingAuditlog) {
                _this15.auditdata = true;

                if (_this15.excelDataProcessingAuditlog.recordStatus === 'P') {
                  _this15.excelDataProcessingAuditlog.recordStatus = 'PROCESSED';
                }

                if (_this15.excelDataProcessingAuditlog.recordStatus === 'D') {
                  _this15.excelDataProcessingAuditlog.recordStatus = 'DELETED';
                }

                if (_this15.excelDataProcessingAuditlog.recordStatus === 'U') {
                  _this15.excelDataProcessingAuditlog.recordStatus = 'UNPROCESSED';
                }
              }
            });
          }
        }, {
          key: "refreshGl",
          value: function refreshGl() {
            var _this16 = this;

            var url = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_4__.environment.MEDIAN_URL;
            this.userApi.refreshGl().subscribe(function (data) {
              _this16.data = data;
              console.log(_this16.data);
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
            var _this17 = this;

            this.button = false;
            this.isUploading = true; // this.uploadExcelForm.get('selectorDateData').setValue(new Date());

            console.log('method call');

            if (!this.uploadExcelForm.get('trncode').value) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire('Enter Data for Trnsaction Code.');
              this.isUploading = true;
              return;
            }

            if (this.enablefilebrowser) {
              if (!this.selectedFiles) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire('Please select a file to upload.');
                this.isUploading = true;
                return;
              }
            }

            this.spinner = true;

            if (this.uploadExcelForm.invalid) {
              this.spinner = false;
              this.isUploading = false;
              sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire('Please fill all the details');
            } else {
              this.disbaleBtn = true; // const dateString = '2022-11-16T00:00:00';

              var newDate = new Date();
              this.excelDataProcessingReqDTO.extSysName = this.uploadExcelForm.get('extSysNameData').value;
              this.excelDataProcessingReqDTO.processName = this.uploadExcelForm.get('processNameData').value;
              this.excelDataProcessingReqDTO.processingDate = newDate;
              this.excelDataProcessingReqDTO.trnCode = this.uploadExcelForm.get('trncode').value;
              this.excelDataProcessingReqDTO.fileName = this.uploadExcelForm.get('fileName').value;
              this.api.showDetailServiceInExcelDataProcessing(this.excelDataProcessingReqDTO, this.user_id).subscribe(function (responseforfileupload) {
                _this17.isUploading = false;
                _this17.responseforfileupload = responseforfileupload;
                console.log("response from bc", _this17.responseforfileupload);
                console.log(_this17.responseforfileupload.batchNo);
                console.log(_this17.responseforfileupload);
                _this17.spinner = false;
                _this17.disbaleBtn = false;
                _this17.disablebtn2 = false;

                if (_this17.responseforfileupload == null) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire('Server error.');
                  return;
                }

                _this17.spinner = false;

                if (_this17.responseforfileupload.errorMessage) {
                  console.log("here is error of duplicate record");
                  _this17.disablebtn2 = true;
                  sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire('Unable to upload', 'Error: ' + _this17.responseforfileupload.errorMessage);

                  if (_this17.responseforfileupload.errorMessage === "possible duplicate data") {
                    _this17.excelDataProcessingReqDTO.proceedDuplicates = true;
                    console.log("here duplicate");
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                      //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
                      text: 'You are trying to upload duplicate data. ' + ' Do you want to proceed?',
                      showCancelButton: true,
                      confirmButtonColor: '#3085d6',
                      cancelButtonColor: '#d33',
                      // confirmButtonText: 'PROCEED.'
                      cancelButtonText: 'NO',
                      confirmButtonText: 'YES.'
                    }).then(function (result) {
                      if (result.value) {
                        _this17.api.showDetailServiceInExcelDataProcessing(_this17.excelDataProcessingReqDTO, _this17.user_id).subscribe(function (dupliacteResp) {
                          console.log("dupliacteResp", dupliacteResp); // Swal.fire('Unable to process', 'Error ' + this.responseforfileupload.errorMessage);

                          _this17.responseforfileupload = dupliacteResp; // added by vidya M B for the issue 0001047

                          if (_this17.responseforfileupload.errorMessage === "Amount and LCY amount mismatch") {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire('Unable to upload', 'Error:' + _this17.responseforfileupload.errorMessage);
                          }

                          if (_this17.responseDto.totalNoOfRecords !== 0) {
                            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                              title: "Data uploaded successfully ",
                              text: "For the Batch " + _this17.responseDto.batchNo
                            });
                            _this17.excelFileFlag = true;
                            console.log("excelFileFlag value ", _this17.excelFileFlag);
                            _this17.flag = false;
                            _this17.isShow = true;
                          }
                        });
                      }
                    });
                  }

                  _this17.flag = true;
                  _this17.disbaleBtn = true;
                }

                _this17.valueDate = _this17.responseforfileupload.valueDate == "Today" ? "Today" : "not Today";
                _this17.spinner = false;
                _this17.responsebutton = true;
                _this17.spinner = false;
                _this17.responseDto = _this17.responseforfileupload;

                if (_this17.responseDto.totalNoOfRecords !== 0) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                    title: "Data uploaded successfully ",
                    text: "For the Batch " + _this17.responseDto.batchNo
                  });
                  _this17.excelFileFlag = true;
                  _this17.flag = false;
                  _this17.isShow = true;
                }
              }, function (err) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire('Server error.');
                _this17.isUploading = false;
              });
            }
          }
        }, {
          key: "getAllExternalSystemNames",
          value: function getAllExternalSystemNames() {
            var _this18 = this;

            this.api.getAllExtSysNamesService(this.user_id).subscribe(function (resp) {
              _this18.allExternalSystemNames = resp;
            });
          }
        }, {
          key: "resetEntries",
          value: function resetEntries() {
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
            var _this19 = this;

            if (this.disablebtn2) {
              this.disbaleBtn = false;
            }

            this.api.getUploadPermission(extSysName, processName).subscribe(function (resp) {
              _this19.permission = resp;

              if (_this19.permission[0] == 'false') {
                _this19.enablefilebrowser = true;
              } else {
                _this19.enablefilebrowser = false;
              }
            });
          }
        }, {
          key: "getProcessNamesBasedOnExtSysNameForUpload",
          value: function getProcessNamesBasedOnExtSysNameForUpload(extSysName) {
            var _this20 = this;

            if (this.disablebtn2) {
              this.disbaleBtn = false;
            }

            this.api.getProcessNamesBasedOnExtSysNameService(extSysName).subscribe(function (resp) {
              _this20.processNames = resp;
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
            var _this21 = this;

            this.api.getAllTransactionCode(this.user_id).subscribe(function (res) {
              _this21.trnCodeArray = res;
              console.log(_this21.trnCodeArray);
            });
          }
        }, {
          key: "deleteDataService",
          value: function deleteDataService(remarks) {
            this.flag = false;
            sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire('Data deleted successfully.');
            this.exit();
          }
        }, {
          key: "Datacheck",
          value: function Datacheck() {
            var _this22 = this;

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
                _this22.isProcessing = false;
                _this22.processDataStatus = resp;
                console.log('this.processDataStatus');

                if (_this22.processDataStatus) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire('Data processed successfully', 'For the Batch ' + _this22.responseDto.batchNo);
                  _this22.isShow = true;
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire('Unable to process.');
                }
              }, function (err) {
                _this22.isProcessing = false;
              });
            }
          }
        }, {
          key: "processDataService",
          value: function processDataService() {
            var _this23 = this;

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
                _this23.isProcessing = true;

                if (_this23.responseDto.totalNoOfRecords == 0) {
                  _this23.isProcessing = false;
                  sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire('total no. of record is 0', 'Unable to process.');
                  return;
                }

                if (!_this23.remarks) {
                  _this23.isProcessing = false;
                  sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire('Remark is mandatory for process.');
                  return;
                }

                _this23.flag = true;

                _this23.api.processDataService(_this23.responseforfileupload, _this23.user_id, _this23.remarks).subscribe(function (resp) {
                  _this23.isProcessing = false;
                  _this23.processDataStatus = resp;
                  console.log('this.processDataStatus');

                  if (_this23.processDataStatus) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire({
                      title: "Data processed successfully",
                      text: "For the Batch " + _this23.responseDto.batchNo
                    });
                    _this23.isShow = true;
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_5___default().fire('Unable to process.');
                  }
                }, function (err) {
                  _this23.isProcessing = false;
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
            var _this24 = this;

            console.log(event.target.value);
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
              _this24.responseforfileupload = responseforfileupload;

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
            var result = extSysName.trim();
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
        return new (t || _FileUploadComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_6__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_views_users_users_service__WEBPACK_IMPORTED_MODULE_7__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_8__.ExcelService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](src_app_shared_services_roles_service__WEBPACK_IMPORTED_MODULE_9__.RoleService));
      };

      _FileUploadComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({
        type: _FileUploadComponent,
        selectors: [["npr-file-upload"]],
        decls: 53,
        vars: 15,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], [1, "col-auto"], ["class", "btn smBtn minWdSmBtn btnPrimary", 3, "click", 4, "ngIf"], [1, "row", "gy-4", "align-items-end"], [1, "col-lg-4"], ["for", "extSystem", 1, "formLbl"], ["formControlName", "extSysNameData", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["value", "", 3, "selected"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "processNameData", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["for", "transactionDate", 1, "formLbl"], ["id", "transactionDate", "formControlName", "selectorDateData", "type", "text", "value", "", "readonly", "", 1, "form-control"], ["formControlName", "trncode", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["class", "col-lg-4", 4, "ngIf"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-4"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [4, "ngIf", "ngIfElse"], ["showText", ""], ["type", "reset", 1, "btn", "smBtn", "minWdSmBtn", "btnDarkGrey"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [1, "titleStyle", "mt-2", "mb-4", "text-end"], [1, "pageTitle", "darkgreyClr"], ["class", "dbCardStyle", 4, "ngIf"], [3, "value"], ["required", "", "id", "fileName", "formControlName", "fileName", "type", "text", "value", "", 1, "form-control", 3, "keypress", "keyup"], [1, "fileUpload"], [1, "formS"], ["data-text", "File Upload", 1, "file-upload-wrapper"], ["name", "file-upload-field", "type", "file", "value", "", 1, "file-upload-field", 3, "change"], [1, "indicator-progress"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"], [1, "indicator-label"], [1, "titleStyle", "mt-2", "mb-4"], [1, "row", "gy-4"], ["for", "codeLbl", 1, "formLbl"], [1, "readonlyText"], [1, "col-lg-6"], ["for", "remarks", 1, "formLbl"], ["id", "remarks", "formControlName", "remarks", "rows", "3", "placeholder", "External System", 1, "form-control", "textAreaCol"], ["for", "overrides", 1, "formLbl"], ["id", "exampleFormControlTextarea1", "rows", "3", 1, "form-control", "textAreaCol"], [1, "row", "g-3", "pb-3", "pt-4", "justify-content-end"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", "btnLight", 3, "disabled", "click"], ["showProcess", ""], [1, "btn", "smBtn", "minWdSmBtn", "btnDarkGrey", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "click"]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](13, "select", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function FileUploadComponent_Template_select_change_13_listener($event) {
              return ctx.getProcessNamesBasedOnExtSysNameForUpload($event.target.value);
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function FileUploadComponent_Template_select_change_20_listener($event) {
              return ctx.getFileNamesBasedOnExtSysNameAndProcessName(ctx.uploadExcelForm.get("extSysNameData").value, $event.target.value);
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("change", function FileUploadComponent_Template_select_change_31_listener($event) {
              return ctx.getTrnCode($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](32, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](33, "Select");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](34, FileUploadComponent_option_34_Template, 2, 3, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](35, FileUploadComponent_div_35_Template, 4, 0, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](36, FileUploadComponent_div_36_Template, 7, 1, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](37, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](38, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](39, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function FileUploadComponent_Template_button_click_39_listener() {
              return ctx.doFirstValidation();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](40, FileUploadComponent_ng_container_40_Template, 4, 0, "ng-container", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](41, FileUploadComponent_ng_template_41_Template, 2, 0, "ng-template", null, 22, _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplateRefExtractor"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](43, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](44, "button", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](45, "Reset");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](46, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](47, "a", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](48, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](49, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](50, "h2", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](51, "Final excel report can be downloaded from Process Excel Screen.");

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtemplate"](52, FileUploadComponent_div_52_Template, 59, 10, "div", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵreference"](42);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("formGroup", ctx.uploadExcelForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.roleCodes["new"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("selected", ctx.isSelected);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.allExternalSystemNames);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("selected", ctx.isSelected);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.processNames);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("selected", ctx.isSelected);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngForOf", ctx.trnCodeArray);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.enablefilebrowser);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.enablefilebrowser);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("ngIf", ctx.isUploading)("ngIfElse", _r7);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](14, _c0));

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


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364); // import { ModalTransactionsDetailEditableComponent } from '../modals/modal-transactions-detail-editable/modal-transactions-detail-editable.component';
      // import { ToastService } from 'src/app/shared/services/toast.service';


      function RejectionQueueComponent_tr_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RejectionQueueComponent_tr_27_Template_button_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r4);

            var data_r2 = restoredCtx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r3.queryDetailsDataByParam(data_r2);
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
          var data_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r2.externalSysName);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r2.batchNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r2.processName);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](12, 8, data_r2.processingDate, "medium"));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r2.fileName);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r2.totalNoOfRecord);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r2.totalCredit);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r2.totalDebit);
        }
      }

      function RejectionQueueComponent_tr_53_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

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

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RejectionQueueComponent_tr_53_Template_button_click_18_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r7);

            var data_r5 = restoredCtx.$implicit;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r6.openDialog(data_r5);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, " Edit ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r5 = ctx.$implicit;

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
        }
      }

      var _RejectionQueueComponent = /*#__PURE__*/function () {
        function _RejectionQueueComponent(api, // private toastService : ToastService,
        userApi, excelService) {
          _classCallCheck(this, _RejectionQueueComponent);

          this.api = api;
          this.userApi = userApi;
          this.excelService = excelService;
          this.respArray = [];
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
          value: function queryDetailsDataByParam(pendingForAuthDTO) {
            var _this25 = this;

            this.spinner1 = true;
            this.getDetailsQueryToggleReqDTO = new src_app_shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_0__.GetDetailsQueryToggleReqDTO();
            this.getDetailsQueryToggleReqDTO.externalSysName = pendingForAuthDTO.externalSysName;
            this.getDetailsQueryToggleReqDTO.processName = pendingForAuthDTO.processName;
            this.getDetailsQueryToggleReqDTO.processingDate = pendingForAuthDTO.processingDate;
            this.getDetailsQueryToggleReqDTO.currency = pendingForAuthDTO.currency;
            this.getDetailsQueryToggleReqDTO.filename = pendingForAuthDTO.fileName;
            this.getDetailsQueryToggleReqDTO.batchNumber = pendingForAuthDTO.batchNumber;
            this.api.queryFailedDetailsDataByParamService(this.getDetailsQueryToggleReqDTO).subscribe(function (resp) {
              _this25.PendingForAuthDetailsDTOList = resp;

              _this25.dtTrigger2.next();

              console.log(_this25.PendingForAuthDetailsDTOList);

              if (_this25.PendingForAuthDetailsDTOList) {
                console.log(_this25.PendingForAuthDetailsDTOList[0].inputBy);
                _this25.audit = true;
                _this25.flag = true;
                _this25.dataAvail = true;
                _this25.spinner1 = false;
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
          key: "screenpermission",
          value: function screenpermission() {
            var _this26 = this;

            this.screenName = 'DataModificationDetails';
            this.userApi.getRoleScreenPermission(this.user_id, this.screenName, this.role).subscribe(function (res) {
              _this26.rolepermission = res;
              console.log(_this26.rolepermission);

              if (_this26.rolepermission) {
                _this26.button_permission = _this26.rolepermission[0];
                console.log(_this26.button_permission);
              }
            });
          }
        }, {
          key: "getPendingForAuthData",
          value: function getPendingForAuthData() {
            var _this27 = this;

            this.api.getPendingForAuthDataForModification(this.user_id).subscribe(function (resp) {
              _this27.pendingForAuthData = resp;

              _this27.dtTrigger1.next();

              console.log(_this27.pendingForAuthData);
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
            var _this28 = this;

            this.flag = false;
            this.api.excelModifyAuthorization(this.PendingForAuthDetailsDTOList, this.user_id).subscribe(function (authRes) {
              _this28.authRes = authRes;
              console.log(_this28.authRes);

              if (_this28.authRes) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire('Data Send for Authorization. After Authorization you can process the data.');
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire('Authorization Failed.');
              }
            });
          }
        }, {
          key: "getAllDetailsData",
          value: function getAllDetailsData() {
            var _this29 = this;

            this.api.getFailedDetailsListService().subscribe(function (resp) {
              _this29.PendingForAuthDetailsDTOList = resp;

              _this29.dtTrigger2.next();
            });
          }
        }, {
          key: "openDialog",
          value: function openDialog(detailsDto) {
            console.log(detailsDto); // const dialogRef = this.dialog.open(
            //   ModalTransactionsDetailEditableComponent,
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
        return new (t || _RejectionQueueComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_views_users_users_service__WEBPACK_IMPORTED_MODULE_6__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_7__.ExcelService));
      };

      _RejectionQueueComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
        type: _RejectionQueueComponent,
        selectors: [["npr-rejection-queue"]],
        decls: 61,
        vars: 6,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], ["id", "dbTable1", "datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [1, "pageTitle", "my-3", "text-center"], ["id", "dbTable2", "datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [1, "btnCol", "mt-md-4", "mt-3"], [1, "btn", "smBtn", "btnDarkGrey", 3, "click"], ["mat-raised-button", "", "color", "primary", 2, "height", "90%", 3, "click"], [3, "click"]],
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

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](27, RejectionQueueComponent_tr_27_Template, 21, 11, "tr", 5);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RejectionQueueComponent_Template_button_click_55_listener() {
              return ctx.downloadData();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](56, "Export Excel");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](57, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function RejectionQueueComponent_Template_button_click_58_listener() {
              return ctx.convert();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](59, "Export PDF");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](60, "\xA0 ");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dtOptions", ctx.dtOptions[0])("dtTrigger", ctx.dtTrigger1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.pendingForAuthData);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dtOptions", ctx.dtOptions[1])("dtTrigger", ctx.dtTrigger2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.PendingForAuthDetailsDTOList);
          }
        },
        directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_8__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyZWplY3Rpb24tcXVldWUuY29tcG9uZW50LnNjc3MifQ== */"]
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