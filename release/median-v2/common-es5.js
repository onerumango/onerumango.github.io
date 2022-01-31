(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["common"], {
    /***/
    77310:
    /*!**********************************************************************************!*\
      !*** ./src/app/shared/components/audit-log-status/audit-log-status.component.ts ***!
      \**********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuditLogStatusComponent": function AuditLogStatusComponent() {
          return (
            /* binding */
            _AuditLogStatusComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      1858);

      var _AuditLogStatusComponent = /*#__PURE__*/function () {
        function _AuditLogStatusComponent() {
          _classCallCheck(this, _AuditLogStatusComponent);

          this.auditLog = {};
        }

        _createClass(_AuditLogStatusComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _AuditLogStatusComponent;
      }();

      _AuditLogStatusComponent.ɵfac = function AuditLogStatusComponent_Factory(t) {
        return new (t || _AuditLogStatusComponent)();
      };

      _AuditLogStatusComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _AuditLogStatusComponent,
        selectors: [["npr-audit-log-status"]],
        inputs: {
          auditLog: ["items", "auditLog"]
        },
        decls: 0,
        vars: 0,
        template: function AuditLogStatusComponent_Template(rf, ctx) {},
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhdWRpdC1sb2ctc3RhdHVzLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    60795:
    /*!********************************************************!*\
      !*** ./src/app/shared/components/components.module.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ComponentsModule": function ComponentsModule() {
          return (
            /* binding */
            _ComponentsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      7005);
      /* harmony import */


      var _audit_log_status_audit_log_status_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./audit-log-status/audit-log-status.component */
      77310);
      /* harmony import */


      var _otp_otp_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./otp/otp.component */
      55798);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      1858);

      var _ComponentsModule = /*#__PURE__*/_createClass(function _ComponentsModule() {
        _classCallCheck(this, _ComponentsModule);
      });

      _ComponentsModule.ɵfac = function ComponentsModule_Factory(t) {
        return new (t || _ComponentsModule)();
      };

      _ComponentsModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _ComponentsModule
      });
      _ComponentsModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_ComponentsModule, {
          declarations: [_audit_log_status_audit_log_status_component__WEBPACK_IMPORTED_MODULE_0__.AuditLogStatusComponent, _otp_otp_component__WEBPACK_IMPORTED_MODULE_1__.OtpComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
          exports: [_audit_log_status_audit_log_status_component__WEBPACK_IMPORTED_MODULE_0__.AuditLogStatusComponent]
        });
      })();
      /***/

    },

    /***/
    55798:
    /*!********************************************************!*\
      !*** ./src/app/shared/components/otp/otp.component.ts ***!
      \********************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "OtpComponent": function OtpComponent() {
          return (
            /* binding */
            _OtpComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      1858);

      var _OtpComponent = /*#__PURE__*/function () {
        function _OtpComponent() {
          _classCallCheck(this, _OtpComponent);
        }

        _createClass(_OtpComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _OtpComponent;
      }();

      _OtpComponent.ɵfac = function OtpComponent_Factory(t) {
        return new (t || _OtpComponent)();
      };

      _OtpComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _OtpComponent,
        selectors: [["npr-otp"]],
        decls: 2,
        vars: 0,
        template: function OtpComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "otp works!");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJvdHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    93135:
    /*!*************************************************!*\
      !*** ./src/app/shared/services/role.service.ts ***!
      \*************************************************/

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
      33549);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      97361);
      /* harmony import */


      var src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/config/app.constant */
      91486);
      /* harmony import */


      var _models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../models/fmosNewRolePermissions */
      91024);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      1858); //import { AppConstants } from 'app/config/app.constant';


      var _RoleService = /*#__PURE__*/function () {
        function _RoleService(http) {
          _classCallCheck(this, _RoleService);

          this.http = http;
          this.username = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('');
          this.tabData = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
          this.screenLabelList = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(new _models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__.permissionsLabels());
          this.screenData = new _models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__.permissionsLabels(); //public screenLabelList = new BehaviorSubject([]);

          this.screenwisePermissions = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
          this.httpHeader = {
            header: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
              'Content-type': 'application/json'
            })
          };
          this.paramSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
          this.getNavParam = this.paramSource.asObservable();
          this._baseURL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/role';
          this._fmosbaseURL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL + '/fmsRoles';
          this.baseURL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL;
        }

        _createClass(_RoleService, [{
          key: "sendNavParam",
          value: function sendNavParam(params) {
            this.paramSource.next(params);
          }
        }, {
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
          key: "fetchScreenPermissions",
          value: function fetchScreenPermissions(screenName) {
            var userPermissions = JSON.parse(localStorage.getItem('userPermissions'));
            console.log('scr', screenName, userPermissions);
            var labellist = [];
            this.screenData = new _models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__.permissionsLabels();

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
          }
        }, {
          key: "fetchNewRolePermissions",
          value: function fetchNewRolePermissions(userIdLoggedIn) {
            var _this = this;

            this.http.get("".concat(this._fmosbaseURL, "/allRolePermissionForUser/").concat(userIdLoggedIn)).subscribe(function (data) {
              localStorage.setItem('userPermissions', JSON.stringify(data));
              _this.storeuserpermissions = data;
            });
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
    47819:
    /*!*************************************************!*\
      !*** ./src/app/shared/services/rule.service.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "RuleService": function RuleService() {
          return (
            /* binding */
            _RuleService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./api.service */
      31781);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      1858);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      33549);

      var _RuleService = /*#__PURE__*/function () {
        function _RuleService(http) {
          _classCallCheck(this, _RuleService);

          this.http = http;
        } //post method


        _createClass(_RuleService, [{
          key: "submittingCreateRules",
          value: function submittingCreateRules(createruleData, userIdLoggedIn) {
            return this.http.post("".concat(_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/ruleConfig/newRecord/").concat(userIdLoggedIn), createruleData);
          }
        }, {
          key: "gettingCreateRuleById",
          value: function gettingCreateRuleById(id) {
            return this.http.get("".concat(_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/ruleConfig/getRuleValidationSummary/").concat(id));
          } //get method

        }, {
          key: "fetchingRules",
          value: function fetchingRules() {
            return this.http.get("".concat(_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/ruleConfig/getRuleConfigSummary"));
          } //put method

        }, {
          key: "updateingRules",
          value: function updateingRules(updatingruleData) {
            return this.http.put("".concat(_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL, "//"), updatingruleData);
          } //delete method

        }, {
          key: "deleteingRules",
          value: function deleteingRules() {
            return this.http["delete"]("".concat(_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL, "//"));
          } // rule translation

        }, {
          key: "editruleTranslation",
          value: function editruleTranslation(operation, userIdLoggedIn, messageTranslationDto) {
            return this.http.put("".concat(_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/msgApi/").concat(operation, "/").concat(userIdLoggedIn), messageTranslationDto);
          }
        }, {
          key: "submittingruleTranslation",
          value: function submittingruleTranslation(userIdLoggedIn, messageTranslationDto) {
            return this.http.post("".concat(_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/msgApi/createRecord/").concat(userIdLoggedIn), messageTranslationDto);
          } //get method

        }, {
          key: "fetchingruleTranslation",
          value: function fetchingruleTranslation() {
            return this.http.get("".concat(_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/msgApi/getTranslation"));
          } //getting rule transtion based on id

        }, {
          key: "ruleTranslationBasedonId",
          value: function ruleTranslationBasedonId(id) {
            return this.http.get("".concat(_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/msgApi/getTranslationDetails/").concat(id));
          } //get rule trnasltion

        }, {
          key: "gettingoperationAndService",
          value: function gettingoperationAndService(extSys, msgType, userIdLoggedIn) {
            console.log(extSys, msgType);
            return this.http.get("".concat(_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/newExtApi/getServiceOperation/").concat(extSys, "/").concat(msgType, "/").concat(userIdLoggedIn));
          } //put method

        }, {
          key: "updatingruleTranslation",
          value: function updatingruleTranslation(updateruletranslationData) {
            return this.http.put("".concat(_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL, "//"), updateruletranslationData);
          } //delete method

        }, {
          key: "deletingruleTranslation",
          value: function deletingruleTranslation() {
            return this.http["delete"]("".concat(_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL));
          } //rule validation
          //post method

        }, {
          key: "submittingruleValidation",
          value: function submittingruleValidation(createrulevalidateData) {
            return this.http.post("".concat(_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL, "//"), createrulevalidateData);
          } //get method

        }, {
          key: "fetchingruleValidation",
          value: function fetchingruleValidation() {
            return this.http.get("".concat(_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL, "//"));
          } //put method

        }, {
          key: "updatingruleValidation",
          value: function updatingruleValidation(updaterulevalidateData) {
            return this.http.put("".concat(_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL, "//"), updaterulevalidateData);
          } //delete method

        }, {
          key: "deletingruleValidation",
          value: function deletingruleValidation() {
            return this.http["delete"]("".concat(_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL, "//"));
          } // Rule Mapping
          //post method

        }, {
          key: "submittingruleMapping",
          value: function submittingruleMapping(createrulemappingData, userIdLoggedIn) {
            return this.http.post("".concat(_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/msgApi/createMappingNew/").concat(userIdLoggedIn), createrulemappingData);
          }
        }, {
          key: "updatingRuleMapping",
          value: function updatingRuleMapping(updateMappingNewData, userIdLoggedIn) {
            return this.http.put("".concat(_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/msgApi/msgMapping/update/").concat(userIdLoggedIn), updateMappingNewData);
          }
        }, {
          key: "editRuleMapping",
          value: function editRuleMapping(opeation, userIdLoggedIn, ruleMappingDto) {
            return this.http.put("".concat(_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/msgApi/msgMapping/").concat(opeation, "/").concat(userIdLoggedIn), ruleMappingDto);
          }
        }, {
          key: "ondeleteMapping",
          value: function ondeleteMapping(ruleMappingId, userIdLoggedIn) {
            return this.http["delete"]("".concat(_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/msgApi/deleteMapping/").concat(userIdLoggedIn, "?id=").concat(ruleMappingId));
          } // getting rulemapping edit data absed on id

        }, {
          key: "getruleMappingById",
          value: function getruleMappingById(id, mappingId) {
            return this.http.get("".concat(_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/msgApi/getMappingDetails/").concat(id, "/").concat(mappingId));
          } //get method

        }, {
          key: "fetchingruleMapping",
          value: function fetchingruleMapping() {
            return this.http.get("".concat(_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/msgApi/getAllMapping"));
          } //put method

        }, {
          key: "updatingruleMapping",
          value: function updatingruleMapping(updaterulemappingData) {
            return this.http.put("".concat(_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL, "//"), updaterulemappingData);
          } //delete method

        }, {
          key: "deletingruleMapping",
          value: function deletingruleMapping() {
            return this.http["delete"]("".concat(_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL, "//"));
          } // getting ext sys

        }, {
          key: "gettingExternalsystem",
          value: function gettingExternalsystem() {
            return this.http.get("".concat(_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/newExtApi/getExternalSys"));
          } // Audit log methods--->add System starts

        }, {
          key: "onDeleteRuleCongif",
          value: function onDeleteRuleCongif(ruleId, userIdLoggedIn) {
            return this.http["delete"]("".concat(_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/ruleConfig/deleteRule/").concat(userIdLoggedIn, "?sysRuleId=").concat(ruleId));
          } // Audit log methods--->add System ends

        }, {
          key: "gettingISoBasedonExtsys",
          value: function gettingISoBasedonExtsys() {
            return this.http.get("".concat(_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/msgApi/getIsoMsgFieldbyextsys"));
          }
        }, {
          key: "xmlbasedonExternalsystem",
          value: function xmlbasedonExternalsystem() {
            return this.http.get("".concat(_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/msgApi/getXmlMsgFieldByExtSys"));
          }
        }, {
          key: "saveRuleconfig",
          value: function saveRuleconfig(ruleDto, userIdLoggedIn) {
            return this.http.post("".concat(_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/ruleConfig/create/").concat(userIdLoggedIn), ruleDto);
          }
        }, {
          key: "editRuleConfig",
          value: function editRuleConfig(operation, ruleDto, userIdLoggedIn) {
            return this.http.put("".concat(_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/ruleConfig/").concat(operation, "/").concat(userIdLoggedIn), ruleDto);
          }
        }, {
          key: "gettingTranslationData",
          value: function gettingTranslationData(sysCode) {
            return this.http.get("".concat(_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/msgApi/getTranslation/").concat(sysCode));
          }
        }, {
          key: "getAddSystem",
          value: function getAddSystem(sysCode) {
            return this.http.get("".concat(_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/newExtApi/getRuleTransInfo/").concat(sysCode));
          }
        }, {
          key: "gettingSysCode",
          value: function gettingSysCode(transid) {
            return this.http.get("".concat(_api_service__WEBPACK_IMPORTED_MODULE_0__.API_URL, "/msgApi/getSystemCode/").concat(transid));
          }
        }]);

        return _RuleService;
      }();

      _RuleService.ɵfac = function RuleService_Factory(t) {
        return new (t || _RuleService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _RuleService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _RuleService,
        factory: _RuleService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    67525:
    /*!************************************************************!*\
      !*** ./src/app/shared/services/security-policy.service.ts ***!
      \************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SecurityPolicyService": function SecurityPolicyService() {
          return (
            /* binding */
            _SecurityPolicyService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/environments/environment.prod */
      93963);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      1858);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      33549);

      var _SecurityPolicyService = /*#__PURE__*/function () {
        function _SecurityPolicyService(httpClient) {
          _classCallCheck(this, _SecurityPolicyService);

          this.httpClient = httpClient;
          this.API_URL = src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_0__.environment.MEDIAN_URL;
        }

        _createClass(_SecurityPolicyService, [{
          key: "saveDataSecurity",
          value: function saveDataSecurity(obj) {
            console.log(obj);
            return this.httpClient.post("".concat(this.API_URL, "/config/save"), obj);
          }
        }, {
          key: "fetchSecurityPolicyService",
          value: function fetchSecurityPolicyService() {
            return this.httpClient.get("".concat(this.API_URL, "/config/fetch"));
          }
        }, {
          key: "getSecurityPolicyForAuth",
          value: function getSecurityPolicyForAuth() {
            return this.httpClient.get("".concat(this.API_URL, "/authorization/getSecurityPolicy"));
          }
        }, {
          key: "getMonitorData",
          value: function getMonitorData() {
            return this.httpClient.get("".concat(this.API_URL, "/excelDataForProcessScreeen/getMonitorData"));
          } // fetchSecurityPolicyService() {
          //   return this.httpClient.get<any>(`${API_URL}/securityPolicy/fetch`);
          // }

        }, {
          key: "changePassword",
          value: function changePassword(passwordDTO) {
            return this.httpClient.post("".concat(this.API_URL, "/user/changePassword"), passwordDTO);
          }
        }]);

        return _SecurityPolicyService;
      }();

      _SecurityPolicyService.ɵfac = function SecurityPolicyService_Factory(t) {
        return new (t || _SecurityPolicyService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _SecurityPolicyService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _SecurityPolicyService,
        factory: _SecurityPolicyService.ɵfac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map