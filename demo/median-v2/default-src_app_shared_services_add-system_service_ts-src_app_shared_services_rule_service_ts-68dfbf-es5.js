(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["default-src_app_shared_services_add-system_service_ts-src_app_shared_services_rule_service_ts-68dfbf"], {
    /***/
    91973:
    /*!*******************************************************!*\
      !*** ./src/app/shared/services/add-system.service.ts ***!
      \*******************************************************/

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
        "AddSystemService": function AddSystemService() {
          return (
            /* binding */
            _AddSystemService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/config/app.constant */
      3118);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _API_URL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL;

      var _AddSystemService = /*#__PURE__*/function () {
        function _AddSystemService(http) {
          _classCallCheck(this, _AddSystemService);

          this.http = http;
          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject(); // Post

          this.Index = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
            index: ''
          });
          this.paramSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({});
          this.getNavParam = this.paramSource.asObservable();
        }

        _createClass(_AddSystemService, [{
          key: "setIndex",
          value: function setIndex(index) {
            this.Index.next(index);
          }
        }, {
          key: "getIndex",
          value: function getIndex() {
            return this.Index.asObservable();
          }
        }, {
          key: "submittingAddSystem",
          value: function submittingAddSystem(addSsytem, user) {
            return this.http.post("".concat(_API_URL, "/newExtApi/create/").concat(user), addSsytem);
          } //geting external System

        }, {
          key: "fecthingAddSystem",
          value: function fecthingAddSystem() {
            return this.http.get("".concat(_API_URL, "/newExtApi/getAllExternalSys"));
          } //update

        }, {
          key: "editaddsystem",
          value: function editaddsystem(operation, currentUser, addSsytem) {
            return this.http.put("".concat(_API_URL, "/newExtApi/").concat(operation, "/").concat(currentUser), addSsytem);
          } //fetching addsystem based on id

        }, {
          key: "fetchingAddSysBasedonId",
          value: function fetchingAddSysBasedonId(id) {
            return this.http.get("".concat(_API_URL, "/newExtApi/getExternalSysDetails/").concat(id));
          } // delete

        }, {
          key: "deleteingAddSystem",
          value: function deleteingAddSystem() {
            return this.http["delete"]("".concat(_API_URL, "//"));
          } // sendingAddSystemDataToEditScreen

        }, {
          key: "sendingAddSystemDataToEditScreen",
          value: function sendingAddSystemDataToEditScreen(params) {
            this.subject.next(params);
          }
        }, {
          key: "editruleTranslation",
          value: function editruleTranslation(operation, userIdLoggedIn, messageTranslationDto) {
            return this.http.put("".concat(_API_URL, "/msgApi/").concat(operation, "/").concat(userIdLoggedIn), messageTranslationDto);
          }
        }, {
          key: "deleteRuleTranslation",
          value: function deleteRuleTranslation(userIdLoggedIn, transId) {
            var transIddel = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
            transId = transIddel.append('transId', transId);
            console.log("tra", transId);
            return this.http["delete"]("".concat(_API_URL, "/msgApi/deleteRecord/").concat(userIdLoggedIn), {
              params: transId
            });
          }
        }, {
          key: "deleteAddSystem",
          value: function deleteAddSystem(userIdLoggedIn, systemId) {
            return this.http["delete"]("".concat(_API_URL, "/newExtApi/delete/").concat(userIdLoggedIn, "?systemId=").concat(systemId));
          }
        }, {
          key: "getEditOfAddSystem",
          value: function getEditOfAddSystem() {
            return this.subject.asObservable();
          }
        }, {
          key: "sendNavParam",
          value: function sendNavParam(params) {
            this.paramSource.next(params);
          } // Audit log methods--->add System starts

        }, {
          key: "onAuthofAddSystem",
          value: function onAuthofAddSystem(addSsytem, userIdLoggedIn) {
            return this.http.put("".concat(_API_URL, "/newExtApi/authorizetherecord/").concat(userIdLoggedIn), addSsytem);
          }
        }, {
          key: "onCloseOfAddSystem",
          value: function onCloseOfAddSystem(addSsytem, userIdLoggedIn) {
            return this.http.put("".concat(_API_URL, "/newExtApi/toClosingTheRecord/").concat(userIdLoggedIn), addSsytem);
          }
        }, {
          key: "onopenOfAddSystem",
          value: function onopenOfAddSystem(addSsytem, userIdLoggedIn) {
            return this.http.put("".concat(_API_URL, "/newExtApi/closeRecord/").concat(userIdLoggedIn), addSsytem);
          }
        }, {
          key: "onDeleteAddSystem",
          value: function onDeleteAddSystem(addSsytem, userIdLoggedIn) {
            return this.http.put("".concat(_API_URL, "/newExtApi/delete/").concat(userIdLoggedIn), addSsytem);
          } // Audit log methods--->add System ends
          // http and xml incoming
          //add system screen uplaod xml

        }, {
          key: "gettingHederofXMl",
          value: function gettingHederofXMl(files) {
            var formData = new FormData();
            var key = 'header';
            formData.append('file', files);
            formData.append('key', key);
            console.log(formData);
            return this.http.post("".concat(_API_URL, "/convertMsg/convertXmlToNodeTagList"), formData);
          }
        }, {
          key: "gettingBodyOfXml",
          value: function gettingBodyOfXml(files) {
            var formData = new FormData();
            var key = 'body';
            formData.append('file', files);
            formData.append('key', key);
            console.log(formData);
            return this.http.post("".concat(_API_URL, "/convertMsg/convertXmlToNodeTagList"), formData);
          } // For rule transaltion upload xml

        }, {
          key: "selectFileFORHTTPXMLIncoming",
          value: function selectFileFORHTTPXMLIncoming(files) {
            var formData = new FormData();
            formData.append('file', files);
            return this.http.post("".concat(_API_URL, "/file/getHeaders"), formData);
          }
        }, {
          key: "fetchingXMLandHttp",
          value: function fetchingXMLandHttp() {
            return this.http.get("".concat(_API_URL, "/msgApi/getXmlMsgField"));
          }
        }, {
          key: "fetchingIsoForTcp",
          value: function fetchingIsoForTcp() {
            return this.http.get("".concat(_API_URL, "/msgApi/getIsoMsgField"));
          }
        }, {
          key: "gettinXMLmsgIncoming",
          value: function gettinXMLmsgIncoming() {
            return this.http.get("".concat(_API_URL, "/msgApi/getXmlMsgField"));
          } // db cnnection-->credentials api

        }, {
          key: "pingDataSource",
          value: function pingDataSource(url, driverClassName, username, password) {
            return this.http.get("".concat(_API_URL, "/db/ping/").concat(url, "/").concat(driverClassName, "/").concat(username, "/").concat(password));
          } // db connection -->column name

        }, {
          key: "coulmnNameBasedonTableName",
          value: function coulmnNameBasedonTableName(url, driverClassName, username, password, tablename) {
            return this.http.get("".concat(_API_URL, "/db/ping/").concat(url, "/").concat(driverClassName, "/").concat(username, "/").concat(password, "/").concat(tablename));
          } //fetching header tag

        }, {
          key: "fetchingHeaderTag",
          value: function fetchingHeaderTag() {
            return this.http.get("".concat(_API_URL, "/newExtApi/getAllHeadTag"));
          }
        }, {
          key: "validateCode",
          value: function validateCode(code) {
            return this.http.get("".concat(_API_URL, "/newExtApi/addSystem/validateCode/").concat(code));
          }
        }, {
          key: "validatePort",
          value: function validatePort(addSystem) {
            return this.http.post("".concat(_API_URL, "/newExtApi/validate/addSystem"), addSystem);
          }
        }, {
          key: "conversionApi",
          value: function conversionApi(data) {
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
            return this.http.post("".concat(_API_URL, "/message/readMessage"), data);
          }
        }]);

        return _AddSystemService;
      }();

      _AddSystemService.??fac = function AddSystemService_Factory(t) {
        return new (t || _AddSystemService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _AddSystemService.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjectable"]({
        token: _AddSystemService,
        factory: _AddSystemService.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    50511:
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
      94761);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      53882);

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

      _RuleService.??fac = function RuleService_Factory(t) {
        return new (t || _RuleService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient));
      };

      _RuleService.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: _RuleService,
        factory: _RuleService.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    31443:
    /*!**************************************************!*\
      !*** ./src/app/shared/services/toast.service.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ToastService": function ToastService() {
          return (
            /* binding */
            _ToastService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var ng2_izitoast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ng2-izitoast */
      27218);

      var _ToastService = /*#__PURE__*/function () {
        function _ToastService(iziToast) {
          _classCallCheck(this, _ToastService);

          this.iziToast = iziToast;
        }

        _createClass(_ToastService, [{
          key: "successMessage",
          value: function successMessage(title, msg) {
            this.iziToast.success({
              title: title,
              message: msg,
              layout: 2,
              balloon: false,
              position: "topRight",
              progressBarColor: "red",
              pauseOnHover: true
            });
          }
        }, {
          key: "errorMessage",
          value: function errorMessage(title, msg) {
            this.iziToast.error({
              title: title,
              message: msg,
              layout: 2,
              balloon: false,
              position: "topRight",
              progressBarColor: "red",
              pauseOnHover: true
            });
          }
        }, {
          key: "infoMessage",
          value: function infoMessage(title, msg) {
            this.iziToast.info({
              title: title,
              message: msg,
              layout: 2,
              balloon: false,
              position: "topRight",
              progressBarColor: "red",
              pauseOnHover: true
            });
          }
        }]);

        return _ToastService;
      }();

      _ToastService.??fac = function ToastService_Factory(t) {
        return new (t || _ToastService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](ng2_izitoast__WEBPACK_IMPORTED_MODULE_0__.Ng2IzitoastService));
      };

      _ToastService.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: _ToastService,
        factory: _ToastService.??fac,
        providedIn: 'root'
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=default-src_app_shared_services_add-system_service_ts-src_app_shared_services_rule_service_ts-68dfbf-es5.js.map