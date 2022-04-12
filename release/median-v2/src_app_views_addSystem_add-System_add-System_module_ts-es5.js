(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_addSystem_add-System_add-System_module_ts"], {
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

      _AddSystemService.ɵfac = function AddSystemService_Factory(t) {
        return new (t || _AddSystemService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _AddSystemService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
        token: _AddSystemService,
        factory: _AddSystemService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    21067:
    /*!*****************************************************************!*\
      !*** ./src/app/views/addSystem/add-System/add-System.module.ts ***!
      \*****************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddSystemModule": function AddSystemModule() {
          return (
            /* binding */
            _AddSystemModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! angular-datatables */
      50481);
      /* harmony import */


      var _add_system_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-system-routing.module */
      23340);
      /* harmony import */


      var _add_system_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-system.component */
      16496);
      /* harmony import */


      var src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/components/components.module */
      15626);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _add_system_summary_add_system_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../add-system-summary/add-system-summary.component */
      86312);
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-spinner */
      55314);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ng-select/ng-select */
      88660);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AddSystemModule = /*#__PURE__*/_createClass(function _AddSystemModule() {
        _classCallCheck(this, _AddSystemModule);
      });

      _AddSystemModule.ɵfac = function AddSystemModule_Factory(t) {
        return new (t || _AddSystemModule)();
      };

      _AddSystemModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _AddSystemModule
      });
      _AddSystemModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTablesModule, _add_system_routing_module__WEBPACK_IMPORTED_MODULE_1__.AddSystemRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_AddSystemModule, {
          declarations: [_add_system_component__WEBPACK_IMPORTED_MODULE_2__.AddSystemComponent, _add_system_summary_add_system_summary_component__WEBPACK_IMPORTED_MODULE_4__.AddSystemSummaryComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, angular_datatables__WEBPACK_IMPORTED_MODULE_0__.DataTablesModule, _add_system_routing_module__WEBPACK_IMPORTED_MODULE_1__.AddSystemRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, src_app_shared_components_components_module__WEBPACK_IMPORTED_MODULE_3__.ComponentsModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_8__.NgxSpinnerModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__.NgSelectModule]
        });
      })();
      /***/

    },

    /***/
    23340:
    /*!*************************************************************************!*\
      !*** ./src/app/views/addSystem/add-System/add-system-routing.module.ts ***!
      \*************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddSystemRoutingModule": function AddSystemRoutingModule() {
          return (
            /* binding */
            _AddSystemRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _add_system_summary_add_system_summary_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../add-system-summary/add-system-summary.component */
      86312);
      /* harmony import */


      var _add_system_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./add-system.component */
      16496);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: '',
        component: _add_system_component__WEBPACK_IMPORTED_MODULE_1__.AddSystemComponent
      }, {
        path: 'summary',
        component: _add_system_summary_add_system_summary_component__WEBPACK_IMPORTED_MODULE_0__.AddSystemSummaryComponent
      }];

      var _AddSystemRoutingModule = /*#__PURE__*/_createClass(function _AddSystemRoutingModule() {
        _classCallCheck(this, _AddSystemRoutingModule);
      });

      _AddSystemRoutingModule.ɵfac = function AddSystemRoutingModule_Factory(t) {
        return new (t || _AddSystemRoutingModule)();
      };

      _AddSystemRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _AddSystemRoutingModule
      });
      _AddSystemRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_AddSystemRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    16496:
    /*!********************************************************************!*\
      !*** ./src/app/views/addSystem/add-System/add-system.component.ts ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddSystemComponent": function AddSystemComponent() {
          return (
            /* binding */
            _AddSystemComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/add-system.service */
      91973);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      31443);
      /* harmony import */


      var ngx_spinner__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-spinner */
      55314);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ng-select/ng-select */
      88660);

      var _c0 = ["fileWrapper"];
      var _c1 = ["fileWrapper1"];

      function AddSystemComponent_ng_container_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Please wait... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_4_div_51_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " IP Address is not valid");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_4_div_51_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_4_div_51_div_1_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.basicInfoForm.get("sourceIp").errors.pattern);
        }
      }

      function AddSystemComponent_div_1_form_4_div_58_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " External Port must be at least 2 numbers.");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_4_div_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_4_div_58_div_1_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r9.basicInfoForm.get("sourcePort").hasError("minlength"));
        }
      }

      function AddSystemComponent_div_1_form_4_div_65_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " IP Address is not valid");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_4_div_65_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_4_div_65_div_1_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.basicInfoForm.get("medianIp").errors.pattern);
        }
      }

      function AddSystemComponent_div_1_form_4_div_72_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Median Port must be at least 2 numbers.");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_4_div_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_4_div_72_div_1_Template, 2, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r11.basicInfoForm.get("medianPort").hasError("minlength"));
        }
      }

      function AddSystemComponent_div_1_form_4_div_74_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_4_div_74_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r23.next("basicConfiguration");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r12.basicInfoForm.valid);
        }
      }

      function AddSystemComponent_div_1_form_4_div_75_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_4_div_75_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r25.onSubmitEditAddSystem();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_4_div_76_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_4_div_76_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r27.onClickOfAuth();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_4_div_77_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_4_div_77_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r29.onClickOfClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_4_div_78_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_4_div_78_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r32);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r31.onClickOfReopen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Reopen");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_4_div_79_Template(rf, ctx) {
        if (rf & 1) {
          var _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_4_div_79_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r34);

            var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r33.OndeleteofUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_4_div_83_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Maker");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Maker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](26, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "img", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, "Record Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "img", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](48, "Checker");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "img", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](60, "Checker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](63, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "img", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "First Time Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "img", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](84, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](85, "Auth Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](90, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](93, "img", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "Modification Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](99);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r18.respData.creatorId);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 8, ctx_r18.respData.createdTime));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r18.respData.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r18.respData.approverId);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](63, 10, ctx_r18.respData.approvedTime));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r18.respData.approvedEver);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r18.respData.approvedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r18.respData.versionNo);
        }
      }

      var _c2 = function _c2() {
        return ["/addSystem/summary"];
      };

      function AddSystemComponent_div_1_form_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "System Information");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "fieldset", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "select", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "option", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "client");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "option", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "server");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Messages Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "select", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "option", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "All");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "option", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Incoming");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "option", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Outgoing");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "label", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "External Ip");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](49, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](50, "input", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](51, AddSystemComponent_div_1_form_4_div_51_Template, 2, 1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "label", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](54, "External Port");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](56, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](57, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](58, AddSystemComponent_div_1_form_4_div_58_Template, 2, 1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "label", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "Median Ip");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](64, "input", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](65, AddSystemComponent_div_1_form_4_div_65_Template, 2, 1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "label", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](68, "Median Port");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](70, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](71, "input", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](72, AddSystemComponent_div_1_form_4_div_72_Template, 2, 1, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](74, AddSystemComponent_div_1_form_4_div_74_Template, 3, 1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](75, AddSystemComponent_div_1_form_4_div_75_Template, 3, 0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](76, AddSystemComponent_div_1_form_4_div_76_Template, 3, 0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](77, AddSystemComponent_div_1_form_4_div_77_Template, 3, 0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](78, AddSystemComponent_div_1_form_4_div_78_Template, 3, 0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](79, AddSystemComponent_div_1_form_4_div_79_Template, 3, 0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](82, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](83, AddSystemComponent_div_1_form_4_div_83_Template, 100, 12, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r2.basicInfoForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.basicInfoForm.get("sourceIp").touched && !ctx_r2.basicInfoForm.get("sourceIp").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.basicInfoForm.get("sourcePort").touched && !ctx_r2.basicInfoForm.get("sourcePort").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.basicInfoForm.get("medianIp").touched && !ctx_r2.basicInfoForm.get("medianIp").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.basicInfoForm.get("medianPort").touched && !ctx_r2.basicInfoForm.get("medianPort").valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.respData && !ctx_r2.editFlag && ctx_r2.respData.recordStatus == "OPEN");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.respData && !ctx_r2.editFlag && ctx_r2.respData.approvedStatus == "UNAUTHORIZED");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.respData && !ctx_r2.editFlag && ctx_r2.respData.recordStatus == "OPEN" && ctx_r2.respData.approvedEver == "YES");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.respData && !ctx_r2.editFlag && ctx_r2.respData.recordStatus == "CLOSED" && ctx_r2.respData.approvedEver == "YES");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r2.editFlag && ctx_r2.respData && ctx_r2.respData.approvedEver == "NO");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](20, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.respData);
        }
      }

      function AddSystemComponent_div_1_form_5_div_1_option_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r48 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", i_r48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r48);
        }
      }

      function AddSystemComponent_div_1_form_5_div_1_div_28_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r50 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", i_r50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r50);
        }
      }

      function AddSystemComponent_div_1_form_5_div_1_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Type of Queue");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "select", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AddSystemComponent_div_1_form_5_div_1_div_28_option_4_Template, 2, 2, "option", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r39.queArray);
        }
      }

      function AddSystemComponent_div_1_form_5_div_1_div_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Queue Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_5_div_1_div_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Queue Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_5_div_1_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Connection Factory");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_5_div_1_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Connection Channel");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_5_div_1_div_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "User Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_5_div_1_div_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_5_div_1_div_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Database");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_5_div_1_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Connecting String");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_5_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "select", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_5_div_1_Template_select_change_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r52);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r51.onProtocalSlection($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "option", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "TCP/IP");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "option", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "HTTPS/HTTP ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "option", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "MDB");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "option", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "EJB");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "option", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "DB Connection ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Data Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "select", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, AddSystemComponent_div_1_form_5_div_1_option_27_Template, 2, 2, "option", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, AddSystemComponent_div_1_form_5_div_1_div_28_Template, 5, 1, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, AddSystemComponent_div_1_form_5_div_1_div_29_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, AddSystemComponent_div_1_form_5_div_1_div_30_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, AddSystemComponent_div_1_form_5_div_1_div_31_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, AddSystemComponent_div_1_form_5_div_1_div_32_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, AddSystemComponent_div_1_form_5_div_1_div_33_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, AddSystemComponent_div_1_form_5_div_1_div_34_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, AddSystemComponent_div_1_form_5_div_1_div_35_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, AddSystemComponent_div_1_form_5_div_1_div_36_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_5_div_1_Template_button_click_39_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r52);

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r53.next("messageConfiguration");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "button", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_5_div_1_Template_button_click_42_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r52);

            var ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r54.previous("messageConfiguration");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r37 = ctx.index;

          var ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r35.messageType, " Message Configuration");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", ctx_r35.messageType, " MessageProtocol");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r35.dataType);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r35.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r35.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r35.messageConfigurationForm.value.sysChannel[0].queueType);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r35.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r35.messageConfigurationForm.value.sysChannel[0].queueType);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r35.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r35.messageConfigurationForm.value.sysChannel[0].queueType === "IBM");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r35.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r35.messageConfigurationForm.value.sysChannel[0].queueType === "JMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r35.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r35.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r35.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r35.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r35.messageConfigurationForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](15, _c2));
        }
      }

      function AddSystemComponent_div_1_form_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_5_div_1_Template, 47, 16, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r3.messageConfigurationForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r3.messageConfigurationForm.get("sysChannel")["controls"]);
        }
      }

      function AddSystemComponent_div_1_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Folder Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "input", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "button", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_div_6_Template_button_click_10_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r56);

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r55.previous("incomingMessageConfiguration");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r59 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h1", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Header and Service Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 101, 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "input", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_div_7_Template_input_change_10_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r59);

            var ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r58.uploadFileXml($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_8_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "h1", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Header and Service Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_8_div_19_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var header_r72 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", header_r72.headerTag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", header_r72.headerTag, " ");
        }
      }

      function AddSystemComponent_div_1_form_8_div_19_ng_select_6_ng_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ng-option", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var mkey_r74 = ctx.$implicit;

          var ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r73["try"](mkey_r74.fieldNo))("value", mkey_r74.fieldNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", mkey_r74.fieldNo, " ", mkey_r74.fieldName, " ");
        }
      }

      function AddSystemComponent_div_1_form_8_div_19_ng_select_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r77 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ng-select", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_8_div_19_ng_select_6_Template_ng_select_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r77);

            var i_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;

            var ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r75.onSelectingMessageBasis($event, i_r64);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ng-option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Please Select Field No");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AddSystemComponent_div_1_form_8_div_19_ng_select_6_ng_option_3_Template, 2, 4, "ng-option", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r66.isoRespData);
        }
      }

      function AddSystemComponent_div_1_form_8_div_19_ng_select_7_ng_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ng-option", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var mkey_r79 = ctx.$implicit;

          var ctx_r78 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r78["try"](mkey_r79))("value", mkey_r79);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", mkey_r79, " ");
        }
      }

      function AddSystemComponent_div_1_form_8_div_19_ng_select_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r82 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ng-select", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_8_div_19_ng_select_7_Template_ng_select_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r82);

            var i_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;

            var ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r80.onselectingTag($event, i_r64);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ng-option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Please Select Tag");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AddSystemComponent_div_1_form_8_div_19_ng_select_7_ng_option_3_Template, 2, 3, "ng-option", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r67.xmlRespData);
        }
      }

      function AddSystemComponent_div_1_form_8_div_19_input_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 129);
        }
      }

      function AddSystemComponent_div_1_form_8_div_19_ng_select_10_ng_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ng-option", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var type_r84 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", type_r84);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](type_r84);
        }
      }

      function AddSystemComponent_div_1_form_8_div_19_ng_select_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ng-select", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ng-option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Please Select Data Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AddSystemComponent_div_1_form_8_div_19_ng_select_10_ng_option_3_Template, 2, 2, "ng-option", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r69.typeDataIso);
        }
      }

      function AddSystemComponent_div_1_form_8_div_19_select_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "select", 131);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "option", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Numeric ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "option", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Alpha Numeric ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "option", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("name", "dataType_", i_r64, "");
        }
      }

      function AddSystemComponent_div_1_form_8_div_19_a_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r88 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 135);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_8_div_19_a_27_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r88);

            var i_r64 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;

            var ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r86["delete"](i_r64);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_8_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 113);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "select", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AddSystemComponent_div_1_form_8_div_19_option_4_Template, 2, 2, "option", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AddSystemComponent_div_1_form_8_div_19_ng_select_6_Template, 4, 1, "ng-select", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AddSystemComponent_div_1_form_8_div_19_ng_select_7_Template, 4, 1, "ng-select", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AddSystemComponent_div_1_form_8_div_19_input_8_Template, 1, 0, "input", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AddSystemComponent_div_1_form_8_div_19_ng_select_10_Template, 4, 1, "ng-select", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AddSystemComponent_div_1_form_8_div_19_select_11_Template, 8, 1, "select", 118);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "select", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "option", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "No Encryption");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "option", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " BASE 64 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "option", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " SHA 256 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "option", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " SHA 512 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, AddSystemComponent_div_1_form_8_div_19_a_27_Template, 2, 0, "a", 125);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r64 = ctx.index;

          var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r61.headerTagData);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r61.messageConfigurationForm.value.sysChannel[0].messageChannel === "TCP/IP" || ctx_r61.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r61.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML" && !ctx_r61.fileUploadClick);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r61.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML" && ctx_r61.fileUploadClick);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r61.messageConfigurationForm.value.sysChannel[0].messageChannel === "TCP/IP");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r61.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML" || ctx_r61.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r61.submitFlag);
        }
      }

      function AddSystemComponent_div_1_form_8_a_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_8_Template(rf, ctx) {
        if (rf & 1) {
          var _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 104);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "fieldset", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AddSystemComponent_div_1_form_8_div_2_Template, 3, 0, "div", 105);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Header");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Data Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Default Value");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Encryption Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](19, AddSystemComponent_div_1_form_8_div_19_Template, 28, 8, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_8_Template_div_click_21_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r90);

            var ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r89.addBioDocs();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, AddSystemComponent_div_1_form_8_a_22_Template, 3, 0, "a", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_8_Template_button_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r90);

            var ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r91.next("incomingMessageConfiguration");
          })("click", function AddSystemComponent_div_1_form_8_Template_button_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r90);

            var ctx_r92 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r92.submit2();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "button", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_8_Template_button_click_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r90);

            var ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r93.previous("incomingMessageConfiguration");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r6.tcpForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r6.submitFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.messageConfigurationForm.value.sysChannel[0].messageFormat !== "XML");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r6.label2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.tcpForm.get("sysService")["controls"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.submitFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r6.submitFlag || !ctx_r6.tcpForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r6.submitFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c2));
        }
      }

      function AddSystemComponent_div_1_form_9_li_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r101 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 146);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_li_3_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r101);

            var ctx_r100 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r100.value("1");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Incoming");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_li_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r103 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 147);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_li_4_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r103);

            var ctx_r102 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r102.value("1");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Incoming");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_li_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r105 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 148);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_li_5_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r105);

            var ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r104.value("2");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Outgoing");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_li_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r107 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "li", 145);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 149);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_li_6_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r107);

            var ctx_r106 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r106.value("2");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Outgoing");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r113 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 154);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 101, 102);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 103);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_9_div_9_div_1_Template_input_change_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r113);

            var ctx_r112 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

            return ctx_r112.uploadFileXml($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 155);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_9_div_1_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r113);

            var ctx_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

            return ctx_r114.chooseFile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_option_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r128 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", i_r128);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r128);
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_28_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r130 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", i_r130);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r130);
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Type of Queue");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "select", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_28_option_4_Template, 2, 2, "option", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r119.queArray);
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Queue Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Queue Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Connection Factory");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Connection Channel");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "User Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Database");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Connecting String");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Incoming Message Configuration");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Incoming Message Protocol");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "select", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_Template_select_change_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r132);

            var ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

            return ctx_r131.onProtocalSlection($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "option", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "TCP/IP");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "option", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "HTTPS/HTTP ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "option", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "MDB");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "option", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "EJB");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "option", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "DB Connection ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Data Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "select", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_option_27_Template, 2, 2, "option", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_28_Template, 5, 1, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_29_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_30_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_31_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_32_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_33_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_34_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_35_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_div_36_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_Template_button_click_39_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r132);

            var ctx_r133 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

            return ctx_r133.next1();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "button", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_9_form_2_div_1_Template_button_click_42_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r132);

            var ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

            return ctx_r134.previousAll("1");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "button", 156);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r117 = ctx.index;

          var ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r117);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r115.dataType);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r115.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r115.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r115.messageConfigurationForm.value.sysChannel[0].queueType);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r115.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r115.messageConfigurationForm.value.sysChannel[0].queueType);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r115.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r115.messageConfigurationForm.value.sysChannel[0].queueType === "IBM");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r115.messageConfigurationForm.value.sysChannel[0].messageChannel === "MDB" && ctx_r115.messageConfigurationForm.value.sysChannel[0].queueType === "JMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r115.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r115.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r115.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r115.messageConfigurationForm.value.sysChannel[0].messageChannel === "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r115.messageConfigurationForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c2));
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_9_div_9_form_2_div_1_Template, 47, 14, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r109 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r109.messageConfigurationForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r109.messageConfigurationForm.get("sysChannel")["controls"]);
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_3_div_17_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var header_r144 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", header_r144.headerTag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", header_r144.headerTag, " ");
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_3_div_17_ng_select_6_ng_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ng-option", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var mkey_r146 = ctx.$implicit;

          var ctx_r145 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r145["try"](mkey_r146.fieldNo))("value", mkey_r146.fieldNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", mkey_r146.fieldNo, " ", mkey_r146.fieldName, " ");
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_3_div_17_ng_select_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r149 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ng-select", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_9_div_9_form_3_div_17_ng_select_6_Template_ng_select_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r149);

            var i_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;

            var ctx_r147 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

            return ctx_r147.onSelectingMessageBasis($event, i_r137);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ng-option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Please Select Field No");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AddSystemComponent_div_1_form_9_div_9_form_3_div_17_ng_select_6_ng_option_3_Template, 2, 4, "ng-option", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r139 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r139.isoRespData);
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_3_div_17_ng_select_7_ng_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ng-option", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var mkey_r151 = ctx.$implicit;

          var ctx_r150 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r150["try"](mkey_r151))("value", mkey_r151);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", mkey_r151, " ");
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_3_div_17_ng_select_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r154 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ng-select", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_9_div_9_form_3_div_17_ng_select_7_Template_ng_select_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r154);

            var i_r137 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;

            var ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

            return ctx_r152.onselectingTag($event, i_r137);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ng-option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Please Select Tag");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AddSystemComponent_div_1_form_9_div_9_form_3_div_17_ng_select_7_ng_option_3_Template, 2, 3, "ng-option", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r140 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r140.xmlRespData);
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_3_div_17_input_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 129);
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_3_div_17_ng_select_10_ng_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ng-option", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var type_r156 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", type_r156);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", type_r156, " ");
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_3_div_17_ng_select_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ng-select", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ng-option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Please Select Data Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AddSystemComponent_div_1_form_9_div_9_form_3_div_17_ng_select_10_ng_option_3_Template, 2, 2, "ng-option", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r142 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r142.typeDataIso);
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_3_div_17_select_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "select", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "option", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Numeric ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "option", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Alpha Numeric ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "option", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_3_div_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r158 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "select", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AddSystemComponent_div_1_form_9_div_9_form_3_div_17_option_4_Template, 2, 2, "option", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AddSystemComponent_div_1_form_9_div_9_form_3_div_17_ng_select_6_Template, 4, 1, "ng-select", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AddSystemComponent_div_1_form_9_div_9_form_3_div_17_ng_select_7_Template, 4, 1, "ng-select", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AddSystemComponent_div_1_form_9_div_9_form_3_div_17_input_8_Template, 1, 0, "input", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AddSystemComponent_div_1_form_9_div_9_form_3_div_17_ng_select_10_Template, 4, 1, "ng-select", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AddSystemComponent_div_1_form_9_div_9_form_3_div_17_select_11_Template, 8, 0, "select", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "select", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "option", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "No Encryption");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "option", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " BASE 64 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "option", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " SHA 256 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "option", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " SHA 512 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "a", 159);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_9_form_3_div_17_Template_a_click_27_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r158);

            var i_r137 = restoredCtx.index;

            var ctx_r157 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

            return ctx_r157["delete"](i_r137);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "img", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r137 = ctx.index;

          var ctx_r135 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r137);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r135.headerTagData);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r135.messageConfigurationForm.value.sysChannel[0].messageChannel === "TCP/IP" || ctx_r135.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r135.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML" && !ctx_r135.fileUploadClick);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r135.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML" && ctx_r135.fileUploadClick);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r135.messageConfigurationForm.value.sysChannel[0].messageChannel === "TCP/IP");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r135.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML" || ctx_r135.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON");
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_form_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 157);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Header");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Data Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Default Value");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Encryption Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, AddSystemComponent_div_1_form_9_div_9_form_3_div_17_Template, 29, 7, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_9_form_3_Template_div_click_19_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r160);

            var ctx_r159 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

            return ctx_r159.addBioDocs();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "a", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "img", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_9_form_3_Template_button_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r160);

            var ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

            return ctx_r161.allMethod();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "button", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_9_form_3_Template_button_click_28_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r160);

            var ctx_r162 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

            return ctx_r162.previousAll("2");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](32, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r110 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r110.tcpForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r110.label2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r110.tcpForm.get("sysService")["controls"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r110.tcpForm.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c2));
        }
      }

      function AddSystemComponent_div_1_form_9_div_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 150);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_9_div_9_div_1_Template, 8, 0, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AddSystemComponent_div_1_form_9_div_9_form_2_Template, 2, 2, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AddSystemComponent_div_1_form_9_div_9_form_3_Template, 33, 6, "form", 152);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r98 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r98.messageConfigurationForm.value.sysChannel[0].messageFormat == "XML" && ctx_r98.tab12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r98.basicInfoForm.value.messsageType === "A" && ctx_r98.tab11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r98.tab12);
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r168 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 153);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 154);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 100);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 101, 162);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "input", 163);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_9_div_10_div_1_Template_input_change_6_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r168);

            var ctx_r167 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

            return ctx_r167.uploadFileXml1($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 164);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_10_div_1_Template_button_click_7_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r168);

            var ctx_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

            return ctx_r169.chooseFile1();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_option_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r183 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", i_r183);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r183);
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_28_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r185 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", i_r185);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](i_r185);
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Type of Queue");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "select", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_28_option_4_Template, 2, 2, "option", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r174 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r174.queArray);
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_29_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Queue Manager");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Queue Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Connection Factory");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Connection Channel");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "User Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Password");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Database");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_36_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Connecting String");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r187 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h1", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Outgoing Message Configuration");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Outgoing Message Protocol");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "select", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_Template_select_change_8_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r187);

            var ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

            return ctx_r186.onProtocalSlection1($event.target.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "option", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "TCP/IP");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "option", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "HTTPS/HTTP ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "option", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "MDB");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "option", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "EJB");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "option", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "DB Connection ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Data Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "select", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "--Please select--");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_option_27_Template, 2, 2, "option", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_28_Template, 5, 1, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_29_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_30_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](31, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_31_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](32, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_32_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_33_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_34_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_35_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](36, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_div_36_Template, 4, 0, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_Template_button_click_39_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r187);

            var ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

            return ctx_r188.next2();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](40, "Next");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "button", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_10_form_2_div_1_Template_button_click_42_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r187);

            var ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

            return ctx_r189.previousAll("3");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](43, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](46, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r172 = ctx.index;

          var ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r172);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r170.dataType1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r170.messageConfigurationForm1.value.sysChannel[0].messageChannel === "MDB");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r170.messageConfigurationForm1.value.sysChannel[0].messageChannel === "MDB" && ctx_r170.messageConfigurationForm1.value.sysChannel[0].queueType);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r170.messageConfigurationForm1.value.sysChannel[0].messageChannel === "MDB" && ctx_r170.messageConfigurationForm1.value.sysChannel[0].queueType);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r170.messageConfigurationForm1.value.sysChannel[0].messageChannel === "MDB" && ctx_r170.messageConfigurationForm1.value.sysChannel[0].queueType === "IBM");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r170.messageConfigurationForm1.value.sysChannel[0].messageChannel === "MDB" && ctx_r170.messageConfigurationForm1.value.sysChannel[0].queueType === "JMS");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r170.messageConfigurationForm1.value.sysChannel[0].messageChannel === "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r170.messageConfigurationForm1.value.sysChannel[0].messageChannel === "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r170.messageConfigurationForm1.value.sysChannel[0].messageChannel === "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r170.messageConfigurationForm1.value.sysChannel[0].messageChannel === "DB Connection");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r170.messageConfigurationForm1.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c2));
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_9_div_10_form_2_div_1_Template, 47, 14, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r164.messageConfigurationForm1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r164.messageConfigurationForm1.get("sysChannel")["controls"]);
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_3_div_18_option_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var header_r201 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", header_r201.headerTag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", header_r201.headerTag, " ");
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_3_div_18_ng_select_6_ng_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ng-option", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var mkey_r203 = ctx.$implicit;

          var ctx_r202 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r202["try"](mkey_r203.fieldNo))("value", mkey_r203.fieldNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", mkey_r203.fieldNo, " ", mkey_r203.fieldName, " ");
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_3_div_18_ng_select_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r206 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ng-select", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_9_div_10_form_3_div_18_ng_select_6_Template_ng_select_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r206);

            var i_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;

            var ctx_r204 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

            return ctx_r204.onSelectingMessageBasis1($event, i_r193);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ng-option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Please Select Field No");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AddSystemComponent_div_1_form_9_div_10_form_3_div_18_ng_select_6_ng_option_3_Template, 2, 4, "ng-option", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r195 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r195.isoRespData1);
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_3_div_18_ng_select_7_ng_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ng-option", 128);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var mkey_r208 = ctx.$implicit;

          var ctx_r207 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", ctx_r207["try"](mkey_r208))("value", mkey_r208);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", mkey_r208, " ");
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_3_div_18_ng_select_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r211 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ng-select", 126);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AddSystemComponent_div_1_form_9_div_10_form_3_div_18_ng_select_7_Template_ng_select_change_0_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r211);

            var i_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;

            var ctx_r209 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

            return ctx_r209.onselectingTag1($event, i_r193);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ng-option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Please Select Tag");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AddSystemComponent_div_1_form_9_div_10_form_3_div_18_ng_select_7_ng_option_3_Template, 2, 3, "ng-option", 127);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r196.xmlRespData1);
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_3_div_18_input_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 129);
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_3_div_18_ng_select_10_ng_option_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ng-option", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var type_r213 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", type_r213);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", type_r213, " ");
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_3_div_18_ng_select_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "ng-select", 130);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "ng-option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Please Select Data Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AddSystemComponent_div_1_form_9_div_10_form_3_div_18_ng_select_10_ng_option_3_Template, 2, 2, "ng-option", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r198.typeDataIso1);
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_3_div_18_select_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "select", 160);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "option", 132);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, " Numeric ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "option", 133);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, " Alpha Numeric ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "option", 134);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " Date ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_3_div_18_a_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r216 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 159);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_10_form_3_div_18_a_27_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r216);

            var i_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;

            var ctx_r214 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

            return ctx_r214.delete1(i_r193);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "img", 136);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_3_div_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 112);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "select", 114);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AddSystemComponent_div_1_form_9_div_10_form_3_div_18_option_4_Template, 2, 2, "option", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AddSystemComponent_div_1_form_9_div_10_form_3_div_18_ng_select_6_Template, 4, 1, "ng-select", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AddSystemComponent_div_1_form_9_div_10_form_3_div_18_ng_select_7_Template, 4, 1, "ng-select", 115);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AddSystemComponent_div_1_form_9_div_10_form_3_div_18_input_8_Template, 1, 0, "input", 116);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AddSystemComponent_div_1_form_9_div_10_form_3_div_18_ng_select_10_Template, 4, 1, "ng-select", 117);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, AddSystemComponent_div_1_form_9_div_10_form_3_div_18_select_11_Template, 8, 0, "select", 158);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](13, "input", 119);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "select", 120);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "option", 121);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "No Encryption");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "option", 122);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, " BASE 64 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "option", 123);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, " SHA 256 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "option", 124);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, " SHA 512 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](26, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, AddSystemComponent_div_1_form_9_div_10_form_3_div_18_a_27_Template, 2, 0, "a", 165);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r193 = ctx.index;

          var ctx_r190 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r193);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r190.headerTagData);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r190.messageConfigurationForm1.value.sysChannel[0].messageChannel === "TCP/IP" || ctx_r190.messageConfigurationForm1.value.sysChannel[0].messageFormat === "JSON");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r190.messageConfigurationForm1.value.sysChannel[0].messageFormat === "XML" && !ctx_r190.fileUploadClickAll);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r190.messageConfigurationForm1.value.sysChannel[0].messageFormat === "XML" && ctx_r190.fileUploadClickAll);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r190.messageConfigurationForm1.value.sysChannel[0].messageChannel === "TCP/IP");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r190.messageConfigurationForm1.value.sysChannel[0].messageFormat === "XML" || ctx_r190.messageConfigurationForm1.value.sysChannel[0].messageFormat === "JSON");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r190.submitFlagAll);
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_3_a_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "a", 137);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "img", 138);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_form_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r218 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 157);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "fieldset", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5, "Header");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Data Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Default Value");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 106);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "label", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Encryption Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, AddSystemComponent_div_1_form_9_div_10_form_3_div_18_Template, 28, 8, "div", 107);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 108);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 109);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_10_form_3_Template_div_click_20_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r218);

            var ctx_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

            return ctx_r217.addBioDocs1();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](21, AddSystemComponent_div_1_form_9_div_10_form_3_a_21_Template, 3, 0, "a", 110);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "button", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_10_form_3_Template_button_click_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r218);

            var ctx_r219 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

            return ctx_r219.submitAll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "button", 111);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function AddSystemComponent_div_1_form_9_div_10_form_3_Template_button_click_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r218);

            var ctx_r220 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

            return ctx_r220.previousAll("4");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "Previous");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "button", 156);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](31, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r165 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r165.tcpForm1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r165.submitFlagAll);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r165.label2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r165.tcpForm1.get("sysService")["controls"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r165.submitFlagAll);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r165.submitFlagAll || !ctx_r165.tcpForm1.valid);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r165.submitFlagAll);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c2));
        }
      }

      function AddSystemComponent_div_1_form_9_div_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 161);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_form_9_div_10_div_1_Template, 8, 0, "div", 151);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AddSystemComponent_div_1_form_9_div_10_form_2_Template, 2, 2, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AddSystemComponent_div_1_form_9_div_10_form_3_Template, 32, 9, "form", 152);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r99.messageConfigurationForm1.value.sysChannel[0].messageFormat == "XML" && ctx_r99.tab22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r99.basicInfoForm.value.messsageType === "A" && ctx_r99.tab21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r99.tab22);
        }
      }

      function AddSystemComponent_div_1_form_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "form", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 139);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "ul", 140);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AddSystemComponent_div_1_form_9_li_3_Template, 3, 0, "li", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AddSystemComponent_div_1_form_9_li_4_Template, 3, 0, "li", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AddSystemComponent_div_1_form_9_li_5_Template, 3, 0, "li", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AddSystemComponent_div_1_form_9_li_6_Template, 3, 0, "li", 141);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 142);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AddSystemComponent_div_1_form_9_div_9_Template, 4, 3, "div", 143);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](10, AddSystemComponent_div_1_form_9_div_10_Template, 4, 3, "div", 144);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.tab1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r7.tab1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r7.tab2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.tab2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.tab1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.tab2);
        }
      }

      function AddSystemComponent_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Add System");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AddSystemComponent_div_1_form_4_Template, 84, 21, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AddSystemComponent_div_1_form_5_Template, 2, 2, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, AddSystemComponent_div_1_div_6_Template, 12, 0, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, AddSystemComponent_div_1_div_7_Template, 11, 0, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AddSystemComponent_div_1_form_8_Template, 33, 10, "form", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, AddSystemComponent_div_1_form_9_Template, 11, 6, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.basicConfiguration);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.messageConfiguration && ctx_r1.basicInfoForm.value.messsageType !== "A");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.mdb && ctx_r1.basicInfoForm.value.messsageType !== "A");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.messageConfigurationForm.value.sysChannel[0].messageFormat == "XML" && ctx_r1.incomingMessageConfiguration === true);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.incomingMessageConfiguration);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.basicInfoForm.value.messsageType == "A" && ctx_r1.all === true);
        }
      }

      var _AddSystemComponent = /*#__PURE__*/function () {
        function _AddSystemComponent(fb, addSystem, router, toastService, spinner) {
          _classCallCheck(this, _AddSystemComponent);

          this.fb = fb;
          this.addSystem = addSystem;
          this.router = router;
          this.toastService = toastService;
          this.spinner = spinner;
          this.basicConfiguration = true;
          this.isoRespData = [];
          this.messageBasisIso = [];
          this.headerTagData = [];
          this.encryptionArray = [];
          this.xmlRespData = [];
          this.result = [];
          this.tab1 = true;
          this.array = [];
          this.arrayMessageConfig = [];
          this.submitFlag = true;
          this.submitFlagAll = true;
          this.loading = true;
          this.tempArrayList = [];
          this.editFlag = true;
          this.fileUploadClick = false;
          this.fileUploadClickAll = false;
          this.tab11 = true;
        }

        _createClass(_AddSystemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.currentUser = localStorage.getItem("userFromLogin");
            this.tempArrayList = [];
            this.fetchingHeadertag();
            this.messsageTypeArray = ["I", "O", "A"];
            this.queArray = ["IBM", "JMS"];
            this.encryptionArray = ["No Encryption", "BASE 64", "SHA 264", "SHA 512"];
            this.selections = "No Encryption";
            this.serviceTypeArray = ["server", "client"];
            this.protocolArray = ["TCP/IP", "HTTPS/HTTP", "MDB", "EJB", "DB Connection"];
            this.buildForm(null);
            this.tcpForm = this.fb.group({
              sysService: this.fb.array([this.createSysService()])
            });
            this.tcpForm1 = this.fb.group({
              sysService: this.fb.array([this.createSysService1()])
            });
            this.messageConfigurationForm1 = this.fb.group({
              sysChannel: this.fb.array([this.createSysChannel1()])
            });
            this.messageConfigurationForm = this.fb.group({
              sysChannel: this.fb.array([this.createSysChannel()])
            });
            this.addSystem.getIndex().subscribe(function (resp) {
              if (resp.index) {
                _this.index = resp.index;

                _this.addSystem.fecthingAddSystem().subscribe(function (dataresp) {
                  if (dataresp) {
                    _this.getRespBasedOnId(dataresp, resp.index);
                  }
                });
              } else {
                _this.loading = false;
              }
            });
          }
        }, {
          key: "buildForm",
          value: function buildForm(item) {
            this.basicInfoForm = this.fb.group({
              systemId: [item ? item.systemId : ""],
              systemCode: [item ? item.systemCode : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              systemName: [item ? item.systemName : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              serviceType: [item ? item.serviceType : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              messsageType: [item ? item.messsageType : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              medianIp: [item ? item.medianIp : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              medianPort: [item ? item.medianPort : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
              sourceIp: [item ? item.sourceIp : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern("^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$")]],
              sourcePort: [item ? item.sourcePort : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]]
            });
          }
        }, {
          key: "getRespBasedOnId",
          value: function getRespBasedOnId(resp, arg0) {
            var _this2 = this;

            this.fileUploadClick = true;
            this.respData = resp.find(function (item) {
              return item.systemId == arg0;
            });
            this.loading = false;
            this.auditLog(); //messageConfiguration

            this.editFlag = false;
            this.arrayMessageConfig = this.respData.sysChannel;
            this.arrayMessageConfig = this.respData.sysChannel;

            if (this.respData.messsageType == 'A') {
              this.arrayMessageConfig = this.arrayMessageConfig.filter(function (item) {
                return item.messageType == "I" || item.messageType == "O";
              });
            }

            if (this.respData.messsageType === 'A') {
              this.fileUploadClickAll = true;
              this.arrayMessageConfig = this.arrayMessageConfig.filter(function (item) {
                return item.messageType == "I";
              });
            }

            this.onProtocalSlection(this.arrayMessageConfig[0].messageChannel);

            if (this.arrayMessageConfig[0].messageChannel === "TCP/IP" || this.arrayMessageConfig[0].messageFormat === "JSON") {
              this.fetchingIso();
              this.label2 = 'Field No';
            }

            if (this.arrayMessageConfig[0].messageChannel.messageFormat === "XML") {
              this.fetchingXMl();
              this.label2 = 'Tag';
            }

            while (this.formArrMessageConfig.length > 0) {
              this.formArrMessageConfig.removeAt(this.formArrMessageConfig.length - 1);
            }

            this.arrayMessageConfig.forEach(function (x) {
              _this2.formArrMessageConfig.push(_this2.fb.group(x));
            }); //tcForm

            this.array = this.arrayMessageConfig[0].sysService;
            this.onProtocalSlection(this.arrayMessageConfig[0].messageChannel);

            while (this.formArr.length > 0) {
              this.formArr.removeAt(this.formArr.length - 1);
            }

            this.array.forEach(function (x) {
              _this2.formArr.push(_this2.fb.group(x));
            });

            if (this.respData.sysChannel.length > 1) {
              this.arrayMessageConfig1 = this.respData.sysChannel;
              this.arrayMessageConfig1 = this.arrayMessageConfig1.filter(function (item) {
                return item.messageType == "O";
              });
              this.onProtocalSlection1(this.arrayMessageConfig1[0].messageChannel);

              while (this.formArrMessageConfig1.length > 0) {
                this.formArrMessageConfig1.removeAt(this.formArrMessageConfig1.length - 1);
              }

              this.arrayMessageConfig1.forEach(function (x) {
                _this2.formArrMessageConfig1.push(_this2.fb.group(x));
              }); //tcForm1

              this.array1 = this.arrayMessageConfig1[0].sysService;
              this.onProtocalSlection1(this.arrayMessageConfig1[0].messageChannel);

              while (this.formArr1.length > 0) {
                this.formArr1.removeAt(this.formArr1.length - 1);
              }

              this.array1.forEach(function (x) {
                _this2.formArr1.push(_this2.fb.group(x));
              });
            }

            this.buildForm(this.respData);
            this.auditLog();
            this.spinner.hide();
          }
        }, {
          key: "formArr",
          get: function get() {
            return this.tcpForm.get('sysService');
          }
        }, {
          key: "formArr1",
          get: function get() {
            return this.tcpForm1.get('sysService');
          }
        }, {
          key: "formArrMessageConfig",
          get: function get() {
            return this.messageConfigurationForm.get('sysChannel');
          }
        }, {
          key: "formArrMessageConfig1",
          get: function get() {
            return this.messageConfigurationForm1.get('sysChannel');
          }
        }, {
          key: "createSysChannel",
          value: function createSysChannel() {
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
              messageChannel: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              messageFormat: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              messageType: [""]
            });
          }
        }, {
          key: "createSysChannel1",
          value: function createSysChannel1() {
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
              messageChannel: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              messageFormat: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              messageType: [""]
            });
          }
        }, {
          key: "createSysService",
          value: function createSysService() {
            return this.fb.group({
              channelId: [""],
              dataType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              encryption: ["No Encryption", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              headerTag: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              headerValue: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              messageBasis: [""],
              messageKey: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              serviceId: [""],
              systemChannelId: [""]
            });
          }
        }, {
          key: "createSysService1",
          value: function createSysService1() {
            return this.fb.group({
              channelId: [""],
              dataType: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              encryption: ["No Encryption", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              headerTag: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              headerValue: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              messageBasis: [""],
              messageKey: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              serviceId: [""],
              systemChannelId: [""]
            });
          }
        }, {
          key: "allMethod",
          value: function allMethod() {
            this.tab1 = false;
            this.tab2 = true;
            this.tab21 = true;
            this.tab22 = false;
          }
        }, {
          key: "auditLog",
          value: function auditLog() {
            if (this.respData.approverId === 'null') {
              this.respData.approverId = ' ';
            }

            if (this.respData.approvedStatus === 'N') {
              this.respData.approvedStatus = 'UNAUTHORIZED';
            }

            if (this.respData.approvedStatus === 'Y') {
              this.respData.approvedStatus = 'AUTHORIZED';
            }

            if (this.respData.approvedStatus === 'A') {
              this.respData.approvedStatus = 'AUTHORIZED';
            }

            if (this.respData.approvedStatus === 'U') {
              this.respData.approvedStatus = 'UNAUTHORIZED';
            }

            if (this.respData.recordStatus === 'O') {
              this.respData.recordStatus = 'OPEN';
            }

            if (this.respData.recordStatus === 'C') {
              this.respData.recordStatus = 'CLOSED';
            }

            if (this.respData.approvedEver === 'N') {
              this.respData.approvedEver = 'NO';
            }

            if (this.respData.approvedEver === 'Y') {
              this.respData.approvedEver = 'YES';
            }
          }
        }, {
          key: "next",
          value: function next(value) {
            var _this3 = this;

            if (value === "basicConfiguration") {
              console.log(this.index);
              this.addSystem.validateCode(this.basicInfoForm.value.systemCode).subscribe(function (result) {
                console.log(result);
                _this3.isSysCodeAlreadyExist = result.exists;
                _this3.sysCodeError = result.response;

                if (_this3.isSysCodeAlreadyExist === true && _this3.index === undefined) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: _this3.sysCodeError + ' !',
                    icon: 'error'
                  });
                  _this3.all = false;
                  return;
                } else {
                  if (_this3.index === undefined) {
                    _this3.ipAddressValidating();
                  } else {
                    if (_this3.basicInfoForm.value.messsageType == 'I') {
                      _this3.messageType = "Incoming";
                    }

                    if (_this3.basicInfoForm.value.messsageType == 'O') {
                      _this3.messageType = "Outgoing";
                    }

                    _this3.basicConfiguration = false;
                    _this3.messageConfiguration = true;
                    _this3.incomingMessageConfiguration = false;
                    _this3.xml = false;
                    _this3.mdbXml = false;
                    _this3.incomingMdbXml = false;
                    _this3.dbConnection = false;
                  }
                }
              });
            }

            if (value === "messageConfiguration" && this.basicInfoForm.value.messsageType !== 'A') {
              if ((this.messageConfigurationForm.value.sysChannel[0].messageChannel === "TCP/IP" || this.messageConfigurationForm.value.sysChannel[0].messageChannel === "Https/Http" || this.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON" || this.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML") && this.basicInfoForm.value.messsageType != 'A') {
                this.messageConfigurationForm.value.sysChannel[0].messageType = this.basicInfoForm.value.messsageType;
                this.basicConfiguration = false;
                this.messageConfiguration = false;
                this.incomingMessageConfiguration = true;
                this.xml = false;
                this.mdb = false;
                this.mdbXml = false;
                this.incomingMdbXml = false;
                this.dbConnection = false;

                if (this.index === undefined && this.messageConfigurationForm.value.sysChannel[0].messageChannel === "TCP/IP" || this.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON") {
                  this.fetchingIso();
                  this.label2 = 'Field No';
                }

                if (this.index !== undefined && this.messageConfigurationForm.value.sysChannel[0].messageChannel === "TCP/IP" || this.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON") {
                  this.label2 = 'Field No';
                }

                if (this.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML") {
                  this.fetchingXMl();
                  this.label2 = 'Tag';
                }
              }

              if ((this.messageConfigurationForm.value.sysChannel[0].messageFormat === "FLATFILE" || this.messageConfigurationForm.value.sysChannel[0].messageFormat === "CSV/EXCEL") && this.basicInfoForm.value.messsageType != 'A') {
                this.messageConfigurationForm.value.sysChannel[0].messageType = this.basicInfoForm.value.messsageType;
                this.basicConfiguration = false;
                this.messageConfiguration = false;
                this.incomingMessageConfiguration = false;
                this.xml = false;
                this.mdb = true;
                this.mdbXml = false;
                this.incomingMdbXml = false;
                this.dbConnection = false;
              }
            }

            if (value === "basicConfiguration" && this.basicInfoForm.value.messsageType === 'A') {
              this.all = true;
              this.tab1 = true;
              this.tab11 = true;
              this.tab12 = false;
              this.tab2 = false;
            }
          }
        }, {
          key: "ipAddressValidating",
          value: function ipAddressValidating() {
            var _this4 = this;

            var payload = {};
            payload.sourceIp = this.basicInfoForm.value.sourceIp, payload.sourcePort = this.basicInfoForm.value.sourcePort, payload.medianIp = this.basicInfoForm.value.medianIp, payload.medianPort = this.basicInfoForm.value.medianPort;
            this.addSystem.validatePort(payload).subscribe(function (resp) {
              if (resp == true) {
                if (_this4.basicInfoForm.value.messsageType == 'I') {
                  _this4.messageType = "Incoming";
                }

                if (_this4.basicInfoForm.value.messsageType == 'O') {
                  _this4.messageType = "Outgoing";
                }

                _this4.basicConfiguration = false;
                _this4.messageConfiguration = true;
                _this4.incomingMessageConfiguration = false;
                _this4.xml = false;
                _this4.mdbXml = false;
                _this4.incomingMdbXml = false;
                _this4.dbConnection = false;
              }
            }, function (error) {
              console.log(error);
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: error.error.message + ' !',
                icon: 'error'
              });
              _this4.all = false;
              return;
            });
          }
        }, {
          key: "next1",
          value: function next1() {
            if (this.index === undefined && this.messageConfigurationForm.value.sysChannel[0].messageChannel === "TCP/IP" || this.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON") {
              this.fetchingIso();
              this.label2 = 'Field No';
            }

            if (this.messageConfigurationForm.value.sysChannel[0].messageFormat === "XML") {
              this.fetchingXMl();
              this.label2 = 'Tag';
            }

            this.tab1 = true;
            this.tab11 = false;
            this.tab12 = true;
            this.tab2 = false;
          }
        }, {
          key: "next2",
          value: function next2() {
            if (this.messageConfigurationForm1.value.sysChannel[0].messageChannel === "TCP/IP" || this.messageConfigurationForm.value.sysChannel[0].messageFormat === "JSON") {
              this.fetchingIso1();
              this.label3 = 'Field No';
            }

            if (this.messageConfigurationForm1.value.sysChannel[0].messageFormat === "XML") {
              this.fetchingXMl1();
              this.label3 = 'Tag';
            }

            this.tab1 = false;
            this.tab2 = true;
            this.tab21 = false;
            this.tab22 = true;
          }
        }, {
          key: "onClickOfAuth",
          value: function onClickOfAuth() {
            var _this5 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Authorize record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3e54b8',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info',
              iconColor: "#d33"
            }).then(function (result) {
              console.log("this is reopen ", result);

              if (result.isConfirmed === true) {
                if (_this5.currentUser === _this5.respData.creatorId) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    text: 'Maker Cannot Authorize Record!',
                    icon: 'error'
                  });
                  return;
                }

                var obj_test = {};

                if (_this5.basicInfoForm.value.messsageType === "I" || _this5.basicInfoForm.value.messsageType === "O") {
                  obj_test = _this5.basicInfoForm.value;
                  obj_test.sysChannel = _this5.messageConfigurationForm.value.sysChannel;

                  for (var index = 0; index < obj_test.sysChannel.length; index++) {
                    obj_test.sysChannel[index].sysService = _this5.tcpForm.value.sysService;
                  }
                } //submitAll


                if (_this5.basicInfoForm.value.messsageType === "A") {
                  obj_test = _this5.basicInfoForm.value;
                  obj_test.sysChannel = _this5.messageConfigurationForm.value.sysChannel;
                  _this5.messageConfigurationForm.value.sysChannel[0].messageType = "I";
                  _this5.messageConfigurationForm1.value.sysChannel[0].messageType = "O";
                  obj_test.sysChannel.push(_this5.messageConfigurationForm1.value.sysChannel[0]);
                  obj_test.sysChannel[0].sysService = _this5.tcpForm.value.sysService;
                  obj_test.sysChannel[1].sysService = _this5.tcpForm1.value.sysService;
                }

                _this5.addSystem.editaddsystem("auth", _this5.currentUser, obj_test).subscribe(function (response) {
                  if (response) {
                    _this5.respData = response;

                    _this5.auditLog();

                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: 'Record is Authorized',
                      icon: 'success'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "onClickOfClose",
          value: function onClickOfClose() {
            var _this6 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Close record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3e54b8',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info',
              iconColor: "#d33"
            }).then(function (result) {
              console.log("this is reopen ", result);

              if (result.isConfirmed === true) {
                var obj_test = {};

                if (_this6.basicInfoForm.value.messsageType === "I" || _this6.basicInfoForm.value.messsageType === "O") {
                  obj_test = _this6.basicInfoForm.value;
                  obj_test.sysChannel = _this6.messageConfigurationForm.value.sysChannel;

                  for (var index = 0; index < obj_test.sysChannel.length; index++) {
                    obj_test.sysChannel[index].sysService = _this6.tcpForm.value.sysService;
                  }
                } //submitAll


                if (_this6.basicInfoForm.value.messsageType === "A") {
                  obj_test = _this6.basicInfoForm.value;
                  obj_test.sysChannel = _this6.messageConfigurationForm.value.sysChannel;
                  _this6.messageConfigurationForm.value.sysChannel[0].messageType = "I";
                  _this6.messageConfigurationForm1.value.sysChannel[0].messageType = "O";
                  obj_test.sysChannel.push(_this6.messageConfigurationForm1.value.sysChannel[0]);
                  obj_test.sysChannel[0].sysService = _this6.tcpForm.value.sysService;
                  obj_test.sysChannel[1].sysService = _this6.tcpForm1.value.sysService;
                }

                _this6.addSystem.editaddsystem("close", _this6.currentUser, obj_test).subscribe(function (response) {
                  if (response) {
                    _this6.respData = response;

                    _this6.auditLog();

                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: 'Record is Closed',
                      icon: 'success'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "onClickOfReopen",
          value: function onClickOfReopen() {
            var _this7 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Reopen record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3e54b8',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info',
              iconColor: "#d33"
            }).then(function (result) {
              console.log("this is reopen ", result);

              if (result.isConfirmed === true) {
                var obj_test = {};

                if (_this7.basicInfoForm.value.messsageType === "I" || _this7.basicInfoForm.value.messsageType === "O") {
                  obj_test = _this7.basicInfoForm.value;
                  obj_test.sysChannel = _this7.messageConfigurationForm.value.sysChannel;

                  for (var index = 0; index < obj_test.sysChannel.length; index++) {
                    obj_test.sysChannel[index].sysService = _this7.tcpForm.value.sysService;
                  }
                } //submitAll


                if (_this7.basicInfoForm.value.messsageType === "A") {
                  obj_test = _this7.basicInfoForm.value;
                  obj_test.sysChannel = _this7.messageConfigurationForm.value.sysChannel;
                  _this7.messageConfigurationForm.value.sysChannel[0].messageType = "I";
                  _this7.messageConfigurationForm1.value.sysChannel[0].messageType = "O";
                  obj_test.sysChannel.push(_this7.messageConfigurationForm1.value.sysChannel[0]);
                  obj_test.sysChannel[0].sysService = _this7.tcpForm.value.sysService;
                  obj_test.sysChannel[1].sysService = _this7.tcpForm1.value.sysService;
                }

                _this7.addSystem.editaddsystem("open", _this7.currentUser, obj_test).subscribe(function (response) {
                  if (response) {
                    _this7.respData = response;

                    _this7.auditLog();

                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: 'Record is Reopened',
                      icon: 'success'
                    });
                  }
                });
              }
            }); //submit2
          }
        }, {
          key: "OndeleteofUser",
          value: function OndeleteofUser() {
            var _this8 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Delete record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3e54b8',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              'icon': 'info',
              iconColor: "#d33"
            }).then(function (result) {
              console.log("this is reopen ", result);

              if (result.isConfirmed === true) {
                _this8.addSystem.deleteAddSystem(_this8.currentUser, _this8.respData.systemId).subscribe(function (response) {
                  if (response) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: 'Record is Deleted',
                      icon: 'success'
                    });

                    _this8.router.navigate(['/addSystem/summary']);
                  }
                });
              }
            });
          }
        }, {
          key: "previousAll",
          value: function previousAll(value) {
            if (value === '1') {
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
            }

            if (value === '2') {
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
            }

            if (value === '3') {
              this.basicConfiguration = false;
              this.messageConfiguration = false;
              this.incomingMessageConfiguration = false;
              this.xml = false;
              this.mdbXml = false;
              this.incomingMdbXml = false;
              this.dbConnection = false;
              this.tab1 = true;
              this.tab11 = false;
              this.tab12 = true;
              this.tab2 = false;
            }

            if (value === '4') {
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
        }, {
          key: "previous",
          value: function previous(value) {
            if (value === "messageConfiguration") {
              this.basicConfiguration = true;
              this.messageConfiguration = false;
              this.incomingMessageConfiguration = false;
              this.xml = false;
              this.mdbXml = false;
              this.incomingMdbXml = false;
              this.dbConnection = false;
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
            }
          }
        }, {
          key: "onProtocalSlection",
          value: function onProtocalSlection(event) {
            this.tempArrayList = []; // this.messageConfigurationForm.get('messageFormat').setValue("");
            //  this.messageConfigurationForm.get('sysChannel')['controls'][0].get('messageFormat').setValue("");

            if (event === "TCP/IP") {
              this.dataType = [];
              this.dataType = ["ISO 8583 1987", "ISO 8583 1993", "ISO 8583 2003"];
            } else if (event === "Https/Http") {
              this.dataType = [];
              this.dataType = ["XML", "JSON"];
            } else if (event === "EJB" || event === "DB Connection" || event === "MDB") {
              this.dataType = [];
              this.dataType = ["XML", "JSON", "CSV/EXCEL", "FLATFILE"];
            }
          }
        }, {
          key: "onProtocalSlection1",
          value: function onProtocalSlection1(event) {
            //this.messageConfigurationForm1.get('sysChannel')['controls'][0].get('messageFormat').setValue("");
            if (event === "TCP/IP") {
              this.dataType1 = [];
              this.dataType1 = ["ISO 8583 1987", "ISO 8583 1993", "ISO 8583 2003"];
            } else if (event === "Https/Http") {
              this.dataType1 = [];
              this.dataType1 = ["XML", "JSON"];
            } else if (event === "EJB" || event === "DB Connection" || event === "MDB") {
              this.dataType1 = [];
              this.dataType1 = ["XML", "JSON", "CSV/EXCEL", "FLATFILE"];
            }
          }
        }, {
          key: "addBioDocs",
          value: function addBioDocs() {
            this.sysService = this.tcpForm.get('sysService');
            this.sysService.push(this.createSysService());
          }
        }, {
          key: "addBioDocs1",
          value: function addBioDocs1() {
            this.sysService = this.tcpForm1.get('sysService');
            this.sysService.push(this.createSysService());
          }
        }, {
          key: "submit2",
          value: function submit2() {
            var _this9 = this;

            if (this.tcpForm.value.sysService.some(function (sysService) {
              return sysService['headerTag'] === 'OPERATION';
            }) && this.tcpForm.value.sysService.some(function (mdmtSystemService) {
              return mdmtSystemService['headerTag'] === 'SERVICE';
            })) {
              var obj_test = {};
              obj_test = this.basicInfoForm.value;
              obj_test.sysChannel = this.messageConfigurationForm.value.sysChannel;

              for (var index = 0; index < obj_test.sysChannel.length; index++) {
                obj_test.sysChannel[index].sysService = this.tcpForm.value.sysService;
              }

              if (this.index) {
                this.addSystem.editaddsystem("update", this.currentUser, obj_test).subscribe(function (addSysResp) {
                  if (addSysResp) {
                    _this9.submitFlag = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: 'Record is Updated',
                      icon: 'success'
                    });
                  }
                }, function (error) {
                  console.log('error resp :: ', error);
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    text: error.error,
                    icon: 'error'
                  });
                });
              } else {
                this.addSystem.submittingAddSystem(obj_test, this.currentUser).subscribe(function (addSysResp) {
                  if (addSysResp) {
                    _this9.submitFlag = false;
                    sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                      text: 'Record is Created',
                      icon: 'success'
                    });
                  }
                }, function (error) {
                  console.log('error resp :: ', error);
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    text: error.error,
                    icon: 'error'
                  });
                });
              }
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                text: 'Header value OPERATION and SERVICE are mandatory !',
                icon: 'info'
              });
            }
          }
        }, {
          key: "fetchingIso",
          value: function fetchingIso() {
            var _this10 = this;

            this.addSystem.fetchingIsoForTcp().subscribe(function (isoResp) {
              _this10.isoRespData = isoResp;

              if (isoResp) {
                _this10.messageBasisIso = isoResp.map(function (data) {
                  return data.fieldName;
                }); // for dropdown 1

                _this10.messageKeyIso = isoResp.map(function (data) {
                  return data.fieldNo;
                });
                _this10.typeDataIso = isoResp.map(function (data) {
                  return data.dataType;
                });
                _this10.headerValueIso = isoResp.map(function (data) {
                  return data.headerValue;
                });
              }
            });
          }
        }, {
          key: "fetchingIso1",
          value: function fetchingIso1() {
            var _this11 = this;

            this.addSystem.fetchingIsoForTcp().subscribe(function (isoResp) {
              _this11.isoRespData1 = isoResp;

              if (isoResp) {
                _this11.messageBasisIso1 = isoResp.map(function (data) {
                  return data.fieldName;
                }); // for dropdown 1

                _this11.messageKeyIso1 = isoResp.map(function (data) {
                  return data.fieldNo;
                });
                _this11.typeDataIso1 = isoResp.map(function (data) {
                  return data.dataType;
                });
                _this11.headerValueIso1 = isoResp.map(function (data) {
                  return data.headerValue;
                });
              }
            });
          }
        }, {
          key: "fetchingXMl",
          value: function fetchingXMl() {
            var _this12 = this;

            this.addSystem.gettinXMLmsgIncoming().subscribe(function (xmlResp) {
              _this12.xmlRespData = xmlResp;

              if (xmlResp) {
                _this12.messageBasisIso = xmlResp.map(function (data) {
                  return data.messageBasis;
                });
                _this12.messageKeyIso = xmlResp.map(function (data) {
                  return data.messageKey;
                });
                _this12.typeDataIso = xmlResp.map(function (data) {
                  return data.dataType;
                });
                _this12.headerValueIso = xmlResp.map(function (data) {
                  return data.headerValue;
                });
              }
            });
          }
        }, {
          key: "onSubmitEditAddSystem",
          value: function onSubmitEditAddSystem() {
            console.log("This is Edit Charge Maintenance");
            this.editFlag = true;
            console.log(this.editFlag);
          }
        }, {
          key: "fetchingXMl1",
          value: function fetchingXMl1() {
            var _this13 = this;

            this.addSystem.gettinXMLmsgIncoming().subscribe(function (xmlResp) {
              _this13.xmlRespData1 = xmlResp;

              if (xmlResp) {
                _this13.messageBasisIso = xmlResp.map(function (data) {
                  return data.messageBasis;
                });
                _this13.messageKeyIso = xmlResp.map(function (data) {
                  return data.messageKey;
                });
                _this13.typeDataIso = xmlResp.map(function (data) {
                  return data.dataType;
                });
                _this13.headerValueIso = xmlResp.map(function (data) {
                  return data.headerValue;
                });
              }
            });
          }
        }, {
          key: "onSelectingMessageBasis",
          value: function onSelectingMessageBasis(event, i) {
            if (this.tempArrayList[i]) {
              this.tempArrayList[i] = event.target.value;
            } else {
              this.tempArrayList.push(event.target.value);
            }

            var x = this.isoRespData.find(function (item) {
              return item.fieldNo == event.target.value;
            });
            this.tcpForm.get('sysService')['controls'][i].get('messageBasis').setValue(x.fieldName);
            this.tcpForm.get('sysService')['controls'][i].get('dataType').setValue(x.dataType);
          }
        }, {
          key: "onSelectingMessageBasis1",
          value: function onSelectingMessageBasis1(event, i) {
            if (this.tempArrayList[i]) {
              this.tempArrayList[i] = event.target.value;
            } else {
              this.tempArrayList.push(event.target.value);
            }

            var x = this.isoRespData1.find(function (item) {
              return item.fieldNo == event.target.value;
            });
            this.tcpForm1.get('sysService')['controls'][i].get('messageBasis').setValue(x.fieldName);
            this.tcpForm1.get('sysService')['controls'][i].get('dataType').setValue(x.dataType);
          }
        }, {
          key: "try",
          value: function _try(value) {
            if (this.tempArrayList.find(function (item) {
              return item == value;
            })) {
              return true;
            } else {
              return false;
            }
          }
        }, {
          key: "fetchingHeadertag",
          value: function fetchingHeadertag() {
            var _this14 = this;

            this.addSystem.fetchingHeaderTag().subscribe(function (resp) {
              _this14.headerTagData = resp;
            });
          }
        }, {
          key: "chooseFile",
          value: function chooseFile() {
            document.getElementById('chFile').click();
          }
        }, {
          key: "chooseFile1",
          value: function chooseFile1() {
            document.getElementById('chFile1').click();
          }
        }, {
          key: "uploadFileXml",
          value: function uploadFileXml(event) {
            var _this15 = this;

            this.selectedFiles = event.target.files;
            this.sizeOfFile = this.selectedFiles.item(0).size;
            this.currentFileUpload = this.selectedFiles.item(0);
            this.fileName = this.currentFileUpload.name;
            this.fileUploadWrapper.nativeElement.setAttribute('data-text', this.fileName);
            this.addSystem.gettingHederofXMl(this.currentFileUpload).subscribe(function (xmlResp) {
              if (xmlResp) {
                _this15.uploadXmlResp = xmlResp;
                _this15.messageBasisIso = xmlResp.nodeTagList;
                _this15.xmlRespData = xmlResp.nodeTagList;
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: 'File Uploaded Successfully',
                  icon: 'success'
                });
                _this15.fileUploadClick = false;
              }
            });
          }
        }, {
          key: "uploadFileXml1",
          value: function uploadFileXml1(event) {
            var _this16 = this;

            this.selectedFiles1 = event.target.files;
            this.sizeOfFile1 = this.selectedFiles1.item(0).size;
            this.currentFileUpload1 = this.selectedFiles1.item(0);
            this.fileName1 = this.currentFileUpload1.name;
            this.fileUploadWrapper1.nativeElement.setAttribute('data-text', this.fileName1);
            this.addSystem.gettingHederofXMl(this.currentFileUpload1).subscribe(function (xmlResp) {
              if (xmlResp) {
                _this16.uploadXmlResp1 = xmlResp;
                _this16.messageBasisIso1 = xmlResp.nodeTagList;
                _this16.xmlRespData1 = xmlResp.nodeTagList;
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: 'File Uploaded Successfully',
                  icon: 'success'
                });
                _this16.fileUploadClickAll = false;
              }
            });
          }
        }, {
          key: "onselectingTag",
          value: function onselectingTag(event, i) {
            var _this17 = this;

            if (this.tempArrayList[i]) {
              this.tempArrayList[i] = event.target.value;
            } else {
              this.tempArrayList.push(event.target.value);
            }

            var result = Object.keys(this.uploadXmlResp.nodeValueMap).map(function (key) {
              return [key, _this17.uploadXmlResp.nodeValueMap[key]];
            });
            var x = result.find(function (item) {
              return item[0] == event.target.value;
            });
            this.tcpForm.get('sysService')['controls'][i].get('headerValue').setValue(x[1]);
          }
        }, {
          key: "onselectingTag1",
          value: function onselectingTag1(event, i) {
            var _this18 = this;

            if (this.tempArrayList[i]) {
              this.tempArrayList[i] = event.target.value;
            } else {
              this.tempArrayList.push(event.target.value);
            }

            var result = Object.keys(this.uploadXmlResp1.nodeValueMap).map(function (key) {
              return [key, _this18.uploadXmlResp1.nodeValueMap[key]];
            });
            var x = result.find(function (item) {
              return item[0] == event.target.value;
            });
            this.tcpForm1.get('sysService')['controls'][i].get('headerValue').setValue(x[1]);
          }
        }, {
          key: "uploadFileXmlOut",
          value: function uploadFileXmlOut(event) {
            var _this19 = this;

            this.selectedFiles = event.target.files;
            this.sizeOfFile = this.selectedFiles.item(0).size;
            this.currentFileUpload = this.selectedFiles.item(0);
            this.fileNameOut = this.currentFileUpload.name;
            this.addSystem.gettingHederofXMl(this.currentFileUpload).subscribe(function (xmlResp) {
              if (xmlResp) {
                _this19.uploadXmlResp = xmlResp;
                _this19.messageBasisIso = xmlResp.nodeTagList;
              }
            }, function (err) {});
          }
        }, {
          key: "submitAll",
          value: function submitAll() {
            var _this20 = this;

            if (this.tcpForm.value.sysService.some(function (sysService) {
              return sysService['headerTag'] === 'OPERATION';
            }) && this.tcpForm.value.sysService.some(function (mdmtSystemService) {
              return mdmtSystemService['headerTag'] === 'SERVICE';
            }) && this.tcpForm1.value.sysService.some(function (sysService) {
              return sysService['headerTag'] === 'OPERATION';
            }) && this.tcpForm1.value.sysService.some(function (mdmtSystemService) {
              return mdmtSystemService['headerTag'] === 'SERVICE';
            })) {
              var obj_test = {};
              obj_test = this.basicInfoForm.value;
              obj_test.sysChannel = this.messageConfigurationForm.value.sysChannel;
              this.messageConfigurationForm.value.sysChannel[0].messageType = "I";
              this.messageConfigurationForm1.value.sysChannel[0].messageType = "O";
              obj_test.sysChannel.push(this.messageConfigurationForm1.value.sysChannel[0]);
              obj_test.sysChannel[0].sysService = this.tcpForm.value.sysService;
              obj_test.sysChannel[1].sysService = this.tcpForm1.value.sysService;
              console.log("obj_test ", obj_test);
              this.addSystem.submittingAddSystem(obj_test, this.currentUser).subscribe(function (addSysResp) {
                if (addSysResp) {
                  _this20.submitFlagAll = false;
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    text: 'Record is Created',
                    icon: 'success'
                  });
                }
              });
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                text: 'Header value OPERATION and SERVICE are mandatory !',
                icon: 'info'
              });
            }
          }
        }, {
          key: "delete",
          value: function _delete(index) {
            var deleteRecord = this.tcpForm.get('sysService');
            deleteRecord.removeAt(index);
          }
        }, {
          key: "delete1",
          value: function delete1(index) {
            var deleteRecord1 = this.tcpForm1.get('sysService');
            deleteRecord1.removeAt(index);
          }
        }, {
          key: "value",
          value: function value(val) {
            console.log(val);

            if (val === '1') {
              this.tab1 = true;
              this.tab2 = false;
              this.tab11 = true;
              this.tab12 = false;
            }

            if (val === '2') {
              this.tab1 = false;
              this.tab2 = true;
              this.tab21 = true;
              this.tab22 = false;
            }
          }
        }]);

        return _AddSystemComponent;
      }();

      _AddSystemComponent.ɵfac = function AddSystemComponent_Factory(t) {
        return new (t || _AddSystemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_1__.AddSystemService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_6__.NgxSpinnerService));
      };

      _AddSystemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _AddSystemComponent,
        selectors: [["npr-add-system"]],
        viewQuery: function AddSystemComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c0, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.fileUploadWrapper = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.fileUploadWrapper1 = _t.first);
          }
        },
        decls: 2,
        vars: 2,
        consts: [[4, "ngIf"], ["class", "pageContentMain", 4, "ngIf"], [1, "indicator-progress"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"], [1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["action", "", "class", "formStyle", 3, "formGroup", 4, "ngIf"], ["action", "", "class", "formStyle", 4, "ngIf"], ["fxLayout", "row wrap", "class", "file", 4, "ngIf"], ["class", "formStyle", 3, "formGroup", 4, "ngIf"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "dbCardStyle"], [1, "titleStyle", "mt-2", "mb-4"], [3, "disabled"], [1, "row", "gy-4"], [1, "col-lg-4"], ["for", "codeLbl", 1, "formLbl"], [1, "colorRed"], ["id", "codeLbl", "type", "text", "formControlName", "systemCode", "value", "", 1, "form-control", 3, "readonly"], ["for", "name", 1, "formLbl"], ["id", "name", "type", "text", "formControlName", "systemName", "value", "", 1, "form-control", 3, "readonly"], ["formControlName", "serviceType", "aria-label", "Default select example", 1, "form-select"], ["hidden", "", "value", "", "disabled", "", "selected", ""], ["value", "client"], ["value", "server"], ["formControlName", "messsageType", "aria-label", "Default select example", "placeholder", "Please Select", 1, "form-select"], ["value", "A"], ["value", "I"], ["value", "O"], ["for", "externalIp", 1, "formLbl"], ["id", "externalIp", "pattern", "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$", "formControlName", "sourceIp", "type", "text", "value", "", 1, "form-control", 3, "readonly"], ["class", "invalid-feedback", 4, "ngIf"], ["for", "externalPort", 1, "formLbl"], ["id", "externalPort", "type", "number", "maxlength", "4", "minlength", "2", "formControlName", "sourcePort", "type", "text", "value", "", 1, "form-control", 3, "readonly"], ["for", "medianIp", 1, "formLbl"], ["id", "medianIp", "formControlName", "medianIp", "type", "text", "value", "", "pattern", "^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$", 1, "form-control", 3, "readonly"], ["for", "medianPort", 1, "formLbl"], ["id", "medianPort", "type", "number", "maxlength", "4", "minlength", "2", "formControlName", "medianPort", "type", "text", "value", "", 1, "form-control", 3, "readonly"], [1, "row", "g-3", "pb-3", "pt-4", "justify-content-end"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], ["type", "button", "href", "javascript:void(0);", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["class", "dbCardStyle", 4, "ngIf"], [1, "invalid-feedback"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], ["type", "button", "color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."], ["class", "dbCardStyle", "formArrayName", "sysChannel", 4, "ngFor", "ngForOf"], ["formArrayName", "sysChannel", 1, "dbCardStyle"], [1, "pageTitle1"], [1, "row", "gy-4", 3, "formGroupName"], ["formControlName", "messageChannel", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["value", "TCP/IP"], ["value", "Https/Http"], ["value", "MDB"], ["value", "EJB"], ["value", "DB Connection"], ["formControlName", "messageFormat", "aria-label", "Default select example", 1, "form-select"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "col-lg-4", 4, "ngIf"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnDarkGrey", 3, "click"], [3, "value"], ["formControlName", "queueType", "aria-label", "Default select example", 1, "form-select"], ["id", "queueManager", "type", "text", "formControlName", "queueManager", "placeholder", "Queue manager", "value", "", 1, "form-control"], ["id", "queueName", "type", "text", "formControlName", "queueName", "placeholder", "Queue Name", "value", "", 1, "form-control"], ["id", "connectFactory", "type", "text", "formControlName", "queueConnFactory", "placeholder", "Connectiong Factory", "value", "", 1, "form-control"], ["id", "queChannel", "type", "text", "formControlName", "queueChannel", "placeholder", "Queue Channel", "value", "", 1, "form-control"], ["id", "userName", "type", "text", "placeholder", "User Name", "value", "", 1, "form-control"], ["id", "password", "type", "password", "placeholder", "Password", "value", "", 1, "form-control"], ["id", "databaseName", "type", "text", "placeholder", "Database Name", "value", "", 1, "form-control"], ["id", "connectString", "type", "text", "placeholder", "Connecting String", "value", "", 1, "form-control"], ["action", "", 1, "formStyle"], ["type", "text", "value", "", 1, "form-control"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary"], ["fxLayout", "row wrap", 1, "file"], ["fxFlex", "100", 1, "width"], ["fxFlex", "45"], [1, "fileUpload"], [1, "formS"], ["data-text", "File Upload", 1, "file-upload-wrapper"], ["fileWrapper", ""], ["name", "file-upload-field", "type", "file", 1, "file-upload-field", 3, "change"], [1, "formStyle", 3, "formGroup"], ["class", "pageTitleCol", 4, "ngIf"], [1, "col-lg-2"], ["formArrayName", "sysService", 4, "ngFor", "ngForOf"], [1, "row", "g-3", "pt-4"], [1, "col-auto", 3, "click"], ["class", "addIcon primarybg", 4, "ngIf"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnDarkGrey", 3, "disabled", "click"], ["formArrayName", "sysService"], [1, "row", "gy-4", 2, "margin-bottom", "20px", 3, "formGroupName"], ["formControlName", "headerTag", "aria-label", "Default select example", 1, "form-select"], ["id", "outlineNgSelect", "class", "form-select", "formControlName", "messageKey", "aria-label", "Default select example", 3, "change", 4, "ngIf"], ["id", "externalIp", "formControlName", "messageKey", "type", "text", "class", "form-control", "value", "", "readonly", "", 4, "ngIf"], ["id", "outlineNgSelect", "class", "form-select", "formControlName", "dataType", "aria-label", "Default select example", 4, "ngIf"], ["class", "form-select", "formControlName", "dataType", "aria-label", "Default select example", 3, "name", 4, "ngIf"], ["id", "externalIp", "formControlName", "headerValue", "type", "text", "value", "", 1, "form-control"], ["formControlName", "encryption", "aria-label", "Default select example", 1, "form-select"], ["value", "No Encryption"], ["value", "BASE64"], ["value", "SHA256"], ["value", "SHA512"], ["type", "button", "href", "javascript:void(0);", "class", "deleteIcon2", 3, "click", 4, "ngIf"], ["id", "outlineNgSelect", "formControlName", "messageKey", "aria-label", "Default select example", 1, "form-select", 3, "change"], [3, "hidden", "value", 4, "ngFor", "ngForOf"], [3, "hidden", "value"], ["id", "externalIp", "formControlName", "messageKey", "type", "text", "value", "", "readonly", "", 1, "form-control"], ["id", "outlineNgSelect", "formControlName", "dataType", "aria-label", "Default select example", 1, "form-select"], ["formControlName", "dataType", "aria-label", "Default select example", 1, "form-select", 3, "name"], ["value", "numeric"], ["value", "alphaNumeric"], ["value", "date"], ["type", "button", "href", "javascript:void(0);", 1, "deleteIcon2", 3, "click"], ["src", "assets/images/delete-icon.svg", "alt", "..."], [1, "addIcon", "primarybg"], ["src", "assets/images/plus-icon.svg", "alt", "..."], [1, "tabStyleCol"], ["id", "myTab", "role", "tablist", 1, "nav", "nav-tabs"], ["class", "nav-item", "role", "presentation", 4, "ngIf"], ["id", "myTabContent", 1, "tab-content"], ["class", "tab-pane fade show active", "id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 4, "ngIf"], ["class", "tab-pane fade show active", "id", "profile", "role", "tabpanel", "aria-labelledby", "profile-tab", 4, "ngIf"], ["role", "presentation", 1, "nav-item"], ["type", "button", "id", "home-tab", "data-bs-toggle", "tab", "data-bs-target", "#home", "type", "button", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", "active", 3, "click"], ["type", "button", "id", "home-tab", "data-bs-toggle", "tab", "data-bs-target", "#home", "type", "button", "role", "tab", "aria-controls", "home", "aria-selected", "true", 1, "nav-link", 3, "click"], ["type", "button", "id", "profile-tab", "data-bs-toggle", "tab", "data-bs-target", "#profile", "type", "button", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link", 3, "click"], ["type", "button", "id", "profile-tab", "data-bs-toggle", "tab", "data-bs-target", "#profile", "type", "button", "role", "tab", "aria-controls", "profile", "aria-selected", "false", 1, "nav-link", "active", 3, "click"], ["id", "home", "role", "tabpanel", "aria-labelledby", "home-tab", 1, "tab-pane", "fade", "show", "active"], ["style", "width: 60%;", 4, "ngIf"], ["action", "", "class", "row gy-4", "style", "margin-bottom: 20px;", 3, "formGroup", 4, "ngIf"], [2, "width", "60%"], ["fxFlex", "60"], ["type", "button", "type", "button", 1, "btnFile", 3, "click"], ["type", "button", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["action", "", 1, "row", "gy-4", 2, "margin-bottom", "20px", 3, "formGroup"], ["class", "form-select", "formControlName", "dataType", "aria-label", "Default select example", 4, "ngIf"], ["type", "button", 1, "deleteIcon2", 3, "click"], ["formControlName", "dataType", "aria-label", "Default select example", 1, "form-select"], ["id", "profile", "role", "tabpanel", "aria-labelledby", "profile-tab", 1, "tab-pane", "fade", "show", "active"], ["fileWrapper1", ""], ["name", "file-upload-field", "type", "file", "value", "", 1, "file-upload-field", 3, "change"], ["type", "button", "mat-raised-button", "", "type", "button", 1, "btnFile", 3, "click"], ["type", "button", "class", "deleteIcon2", 3, "click", 4, "ngIf"]],
        template: function AddSystemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AddSystemComponent_ng_container_0_Template, 4, 0, "ng-container", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AddSystemComponent_div_1_Template, 10, 6, "div", 1);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.loading);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.loading);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.MinLengthValidator, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgSelectComponent, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_8__.NgOptionComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgForm],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtc3lzdGVtLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    86312:
    /*!************************************************************************************!*\
      !*** ./src/app/views/addSystem/add-system-summary/add-system-summary.component.ts ***!
      \************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AddSystemSummaryComponent": function AddSystemSummaryComponent() {
          return (
            /* binding */
            _AddSystemSummaryComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/services/add-system.service */
      91973);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! angular-datatables */
      50481);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function AddSystemSummaryComponent_tr_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddSystemSummaryComponent_tr_30_Template_a_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4);

            var data_r2 = restoredCtx.$implicit;

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();

            return ctx_r3.getResp(data_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r2.systemId);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r2.systemCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r2.systemName);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r2.serviceType);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r2.sourceIp);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](data_r2.sourcePort);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](16, 7, data_r2.createdTime, "medium"));
        }
      }

      function AddSystemSummaryComponent_ng_container_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Please wait... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        }
      }

      var _c0 = function _c0() {
        return ["/dashboard"];
      };

      var _AddSystemSummaryComponent = /*#__PURE__*/function () {
        function _AddSystemSummaryComponent(apiService, router, cdr) {
          _classCallCheck(this, _AddSystemSummaryComponent);

          this.apiService = apiService;
          this.router = router;
          this.cdr = cdr;
          this.respArray = [];
          this.dtOptions = {};
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
          this.isLoading = false;
        }

        _createClass(_AddSystemSummaryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 5,
              columnDefs: [{
                type: 'date',
                'targets': [6]
              }],
              order: [[6, 'desc']],
              processing: true,
              lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]] // columnDefs: [ { type: 'date', 'targets': [5] } ],
              // order: [[5, 'desc']],

            };
            this.getDataForMonitor();
          }
        }, {
          key: "getDataForMonitor",
          value: function getDataForMonitor() {
            var _this21 = this;

            this.isLoading = true;
            this.apiService.fecthingAddSystem().subscribe(function (dataresp) {
              _this21.respArray = dataresp;
              _this21.isLoading = false;

              _this21.cdr.markForCheck();

              _this21.dtTrigger.next();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.dtTrigger.unsubscribe();
          }
        }, {
          key: "getResp",
          value: function getResp(data) {
            console.log(data);
            this.apiService.setIndex({
              index: data.systemId
            });
            this.router.navigateByUrl("/addSystem");
          }
        }, {
          key: "new",
          value: function _new() {
            this.apiService.setIndex({
              index: ""
            });
            this.router.navigateByUrl("/addSystem");
          }
        }]);

        return _AddSystemSummaryComponent;
      }();

      _AddSystemSummaryComponent.ɵfac = function AddSystemSummaryComponent_Factory(t) {
        return new (t || _AddSystemSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_add_system_service__WEBPACK_IMPORTED_MODULE_0__.AddSystemService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef));
      };

      _AddSystemSummaryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _AddSystemSummaryComponent,
        selectors: [["npr-add-system-summary"]],
        decls: 32,
        vars: 6,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "primaryColor", 3, "click"], [1, "loading-page-center"], [1, "indicator-progress"], [1, "spinner-border", "spinner-border-sm", "align-middle", "ms-2"]],
        template: function AddSystemSummaryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Add System");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AddSystemSummaryComponent_Template_a_click_7_listener() {
              return ctx["new"]();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "New");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "table", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " System Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "System Code\tName");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "External Ip");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "External Port");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](30, AddSystemSummaryComponent_tr_30_Template, 17, 10, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](31, AddSystemSummaryComponent_ng_container_31_Template, 5, 0, "ng-container", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](5, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.respArray);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_1__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtc3lzdGVtLXN1bW1hcnkuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_views_addSystem_add-System_add-System_module_ts-es5.js.map