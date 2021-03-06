(function () {
  "use strict";

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_email-management_email-management_module_ts"], {
    /***/
    50481:
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
      9301);
      /* harmony import */


      var _src_angular_datatables_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./src/angular-datatables.module */
      9368);
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
    9301:
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
      2316);
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

        DataTableDirective.??fac = function DataTableDirective_Factory(t) {
          return new (t || DataTableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2));
        };

        DataTableDirective.??dir = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
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
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_DataTableDirective, [{
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
    9368:
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
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_datatables_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./angular-datatables.directive */
      9301);
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

        DataTablesModule.??fac = function DataTablesModule_Factory(t) {
          return new (t || DataTablesModule)();
        };

        DataTablesModule.??mod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineNgModule"]({
          type: DataTablesModule
        });
        DataTablesModule.??inj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjector"]({
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule]]
        });
        return DataTablesModule;
      }();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](_DataTablesModule, [{
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
    53933:
    /*!************************************************!*\
      !*** ./src/app/shared/models/EmailAuditLog.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EamilAuditLog": function EamilAuditLog() {
          return (
            /* binding */
            _EamilAuditLog
          );
        }
        /* harmony export */

      });

      var _EamilAuditLog = /*#__PURE__*/_createClass(function _EamilAuditLog() {
        _classCallCheck(this, _EamilAuditLog);
      });
      /***/

    },

    /***/
    5515:
    /*!*********************************************************************!*\
      !*** ./src/app/shared/services/account-blocking-service.service.ts ***!
      \*********************************************************************/

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
        "AccountBlockingServiceService": function AccountBlockingServiceService() {
          return (
            /* binding */
            _AccountBlockingServiceService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _config_app_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../config/app.constant */
      3118);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      53882);

      var _API_URL = _config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.baseURL;

      var _AccountBlockingServiceService = /*#__PURE__*/function () {
        function _AccountBlockingServiceService(http) {
          _classCallCheck(this, _AccountBlockingServiceService);

          this.http = http;
          this.paramSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({});
          this.getNavParam = this.paramSource.asObservable();
          this.Index = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({
            index: ''
          });
        }

        _createClass(_AccountBlockingServiceService, [{
          key: "sendNavParam",
          value: function sendNavParam(params) {
            this.paramSource.next(params);
          }
        }, {
          key: "setIndexValue",
          value: function setIndexValue(index) {
            this.Index.next(index);
          }
        }, {
          key: "getIndexValue",
          value: function getIndexValue() {
            return this.Index.asObservable();
          } // new module

        }, {
          key: "emailMaintenance",
          value: function emailMaintenance(ac_type, inputBy, tobackend) {
            //console.log("from apiservice ", tobackend, ac_type);
            return this.http.post("".concat(_API_URL, "/emailMaintenence/createEmailNotif/").concat(ac_type, "/").concat(inputBy), tobackend);
          }
        }, {
          key: "getAllEmail",
          value: function getAllEmail() {
            return this.http.get("".concat(_API_URL, "/emailMaintenence/summary?pageNo=", 0, "&pageSize=", 5000));
          }
        }, {
          key: "sendAccType",
          value: function sendAccType(emailType) {
            return this.http.get("".concat(_API_URL, "/emailMaintenence/getDetailsData/").concat(emailType));
          } //audit log --methods
          // onClickOfAuthOfEmailManagement(emailType: string, loginUSer: string) {
          //   //console.log("type:",emailType)
          //   //console.log("loginUSer",loginUSer)
          //   return this.http.get(`${API_URL}/emailMaintenence/verify/${emailType}/${loginUSer}`)
          // }

        }, {
          key: "onClickOfAuthOfEmailManagement",
          value: function onClickOfAuthOfEmailManagement(operation, emailType, makerId) {
            return this.http.put("".concat(_API_URL, "/emailMaintenence/").concat(operation, "/").concat(emailType, "/").concat(makerId), operation);
          }
        }, {
          key: "onclickOfReopenOfEamilManagement",
          value: function onclickOfReopenOfEamilManagement(emailType, loginUSer) {
            return this.http.get("".concat(_API_URL, "/emailMaintenence/reopen/").concat(emailType, "/").concat(loginUSer));
          }
        }, {
          key: "onclickOfCloseOfEmailManagement",
          value: function onclickOfCloseOfEmailManagement(emailType, loginUSer) {
            return this.http.get("".concat(_API_URL, "/emailMaintenence/close/").concat(emailType, "/").concat(loginUSer));
          }
        }, {
          key: "onclickOfEditOfEmailManagement",
          value: function onclickOfEditOfEmailManagement(ac_type, inputBy, tobackend) {
            return this.http.put("".concat(_API_URL, "/emailMaintenence/modifyEmailNotif/").concat(ac_type, "/").concat(inputBy), tobackend);
          }
        }, {
          key: "onclickOfDeleteOfEmailManagement",
          value: function onclickOfDeleteOfEmailManagement(account_type, loginUser) {
            console.log(account_type, loginUser);
            return this.http["delete"]("".concat(_API_URL, "/emailMaintenence/delete/").concat(account_type, "/").concat(loginUser));
          }
        }, {
          key: "deleteingParticluarRow",
          value: function deleteingParticluarRow(emailType, loginUser, id) {
            return this.http["delete"]("".concat(_API_URL, "/emailMaintenence/deleteById/").concat(emailType, "/").concat(loginUser, "/").concat(id));
          }
        }]);

        return _AccountBlockingServiceService;
      }();

      _AccountBlockingServiceService.??fac = function AccountBlockingServiceService_Factory(t) {
        return new (t || _AccountBlockingServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _AccountBlockingServiceService.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjectable"]({
        token: _AccountBlockingServiceService,
        factory: _AccountBlockingServiceService.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    60664:
    /*!*****************************************************************************************************!*\
      !*** ./src/app/views/email-management/email-management-create/email-management-create.component.ts ***!
      \*****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmailManagementCreateComponent": function EmailManagementCreateComponent() {
          return (
            /* binding */
            _EmailManagementCreateComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var src_app_shared_models_EmailAuditLog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/models/EmailAuditLog */
      53933);
      /* harmony import */


      var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/models/fmosNewRolePermissions */
      35383);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_account_blocking_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/account-blocking-service.service */
      5515);
      /* harmony import */


      var _users_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../users/users.service */
      59119);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var ng2_izitoast__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ng2-izitoast */
      27218);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      77382);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function EmailManagementCreateComponent_div_19_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " Please Select Account Type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }
      }

      function EmailManagementCreateComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](1, EmailManagementCreateComponent_div_19_div_1_Template, 2, 0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r0.emailForm.get("accountType").errors.required);
        }
      }

      function EmailManagementCreateComponent_div_25_div_5_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " Please Enter Email Id ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }
      }

      function EmailManagementCreateComponent_div_25_div_5_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](1, " Please Enter Valid Email Id ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }
      }

      function EmailManagementCreateComponent_div_25_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](1, EmailManagementCreateComponent_div_25_div_5_div_1_Template, 2, 0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](2, EmailManagementCreateComponent_div_25_div_5_div_2_Template, 2, 0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var email_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]().$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", email_r6.get("emailId").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r8.emailForm.controls.emails.invalid && !email_r6.get("emailId").errors.required);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "isDisabled": a0
        };
      };

      function EmailManagementCreateComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](2, 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](4, "input", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](5, EmailManagementCreateComponent_div_25_div_5_Template, 3, 2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](6, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](7, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](8, "a", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function EmailManagementCreateComponent_div_25_Template_a_click_8_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r13);

            var i_r7 = restoredCtx.index;
            var email_r6 = restoredCtx.$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

            return ctx_r12.removeAddress(i_r7, email_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](9, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var email_r6 = ctx.$implicit;
          var i_r7 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("formGroup", email_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????propertyInterpolate1"]("name", "address_", i_r7, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("readonly", ctx_r1.editFlag)("email", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", email_r6.get("emailId").invalid && (email_r6.get("emailId").dirty || email_r6.get("emailId").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](6, _c0, ctx_r1.emailForm.controls.emails.invalid || ctx_r1.editFlag));
        }
      }

      function EmailManagementCreateComponent_div_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](3, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function EmailManagementCreateComponent_div_30_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

            return ctx_r14.logValue();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](4, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](5, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](6, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](7, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("disabled", ctx_r2.emailForm.controls.emails.invalid || !ctx_r2.emailForm.value.accountType || !ctx_r2.submitBtn);
        }
      }

      function EmailManagementCreateComponent_div_31_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function EmailManagementCreateComponent_div_31_div_2_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);

            return ctx_r22.editValues();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }
      }

      function EmailManagementCreateComponent_div_31_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "button", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function EmailManagementCreateComponent_div_31_div_3_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);

            return ctx_r24.logValue();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("disabled", ctx_r17.emailForm.controls.emails.invalid || !ctx_r17.emailForm.value.accountType || !ctx_r17.emailForm.dirty);
        }
      }

      function EmailManagementCreateComponent_div_31_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "button", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function EmailManagementCreateComponent_div_31_div_4_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);

            return ctx_r26.onClickOfAuthOfEmailManagement();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }
      }

      function EmailManagementCreateComponent_div_31_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function EmailManagementCreateComponent_div_31_div_5_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);

            return ctx_r28.onclickOfReopenOfEamilManagement();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Reopen");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }
      }

      function EmailManagementCreateComponent_div_31_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "button", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function EmailManagementCreateComponent_div_31_div_6_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);

            return ctx_r30.onclickOfCloseOfEmailManagement();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }
      }

      function EmailManagementCreateComponent_div_31_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function EmailManagementCreateComponent_div_31_div_7_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);

            return ctx_r32.onClickOfDeleteOfEmailManagement();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("disabled", ctx_r21.emails.value.length != 0);
        }
      }

      function EmailManagementCreateComponent_div_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](2, EmailManagementCreateComponent_div_31_div_2_Template, 3, 0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](3, EmailManagementCreateComponent_div_31_div_3_Template, 3, 1, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](4, EmailManagementCreateComponent_div_31_div_4_Template, 3, 0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](5, EmailManagementCreateComponent_div_31_div_5_Template, 3, 0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](6, EmailManagementCreateComponent_div_31_div_6_Template, 3, 0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](7, EmailManagementCreateComponent_div_31_div_7_Template, 3, 1, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](8, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](9, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](10, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r3.editFlag && (ctx_r3.eamilAuditLog.recordStatus == "OPEN" || ctx_r3.eamilAuditLog.recordStatus == "Open"));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", !ctx_r3.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", (ctx_r3.eamilAuditLog.verifiedStatus == "U" || ctx_r3.eamilAuditLog.verifiedStatus == "UNAUTHORIZED") && ctx_r3.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", (ctx_r3.eamilAuditLog.recordStatus == "C" || ctx_r3.eamilAuditLog.recordStatus == "CLOSED" || ctx_r3.eamilAuditLog.recordStatus == "Closed") && ctx_r3.editFlag && ctx_r3.eamilAuditLog.verifiedOnce == "YES");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", (ctx_r3.eamilAuditLog.recordStatus == "O" || ctx_r3.eamilAuditLog.recordStatus == "OPEN" || ctx_r3.eamilAuditLog.recordStatus == "Open") && ctx_r3.editFlag && ctx_r3.eamilAuditLog.verifiedOnce == "YES");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx_r3.editFlag && ctx_r3.roleCodes["delete"] && (ctx_r3.eamilAuditLog.verifiedOnce == "NO" || ctx_r3.eamilAuditLog.verifiedOnce == "N") && (ctx_r3.eamilAuditLog.verifiedStatus == "U" || ctx_r3.eamilAuditLog.verifiedStatus == "UNAUTHORIZED"));
        }
      }

      function EmailManagementCreateComponent_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](3, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](5, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](6, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](7, "i", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](8, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](9, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](11, "Maker");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](14, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](15, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](16, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](17, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](18, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](19, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](20, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](21, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](22, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](23, "Maker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](26, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](27, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](28, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](29, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](30, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](31, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](32, "i", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](33, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](34, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](35, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](36, "Record Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](39, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](40, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](41, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](42, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](43, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](44, "i", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](45, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](46, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](47, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](48, "Checker");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](51, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](52, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](53, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](54, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](55, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](56, "img", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](57, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](58, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](59, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](60, "Checker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](63, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](64, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](65, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](66, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](67, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](68, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](69, "i", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](70, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](71, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](72, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](73, "First Time Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](76, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](77, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](78, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](79, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](80, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](81, "img", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](82, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](83, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](84, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](85, "Auth Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](87);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](88, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](89, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](90, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](91, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](92, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](93, "img", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](94, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](95, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](96, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](97, "Modification Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](98, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](99);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx_r4.eamilAuditLog.inputBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind2"](26, 8, ctx_r4.eamilAuditLog.inputTime, "MM/dd/yyyy, h:mm a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx_r4.eamilAuditLog.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx_r4.eamilAuditLog.verifiedBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind2"](63, 11, ctx_r4.eamilAuditLog.verifiedTime, "MM/dd/yyyy, h:mm a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx_r4.eamilAuditLog.verifiedOnce);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx_r4.eamilAuditLog.verifiedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx_r4.eamilAuditLog.modNo);
        }
      }

      var _EmailManagementCreateComponent = /*#__PURE__*/function () {
        // allDetails: import("d:/GITHUB REPOSITORY_UI/median_v2/src/app/shared/models/EmailDetails").EmailDetails;
        function _EmailManagementCreateComponent(accountBlockingService, ref, userApi, route, iziToast, roleService, formBuilder, cdr, router) {
          _classCallCheck(this, _EmailManagementCreateComponent);

          this.accountBlockingService = accountBlockingService;
          this.ref = ref;
          this.userApi = userApi;
          this.route = route;
          this.iziToast = iziToast;
          this.roleService = roleService;
          this.formBuilder = formBuilder;
          this.cdr = cdr;
          this.router = router; // interface email
          // {
          //   emailId: '',
          //   emailType: '',
          //   emailRequired:'',
          //   id:'',
          // }

          this.emailList = [];
          this.eamilAuditLog = new src_app_shared_models_EmailAuditLog__WEBPACK_IMPORTED_MODULE_0__.EamilAuditLog();
          this.button_permission = {};
          this.editFlag = false;
          this.modifyScreen = false;
          this.submitBtn = true;
          this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__.permissionsLabels();
          this.formTouched = true;
          this.showDialog = false;
          this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        }

        _createClass(_EmailManagementCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.emailNavObj = localStorage.getItem('emailManagementNavObj');
            this.emailNavigationObject = JSON.parse(this.emailNavObj);
            this.accountBlockingService.getIndexValue().subscribe(function (resp) {
              if (resp.index === '') {
                _this2.createEmail();
              }
            });
            this.loggedInUser = localStorage.getItem('userFromLogin').replace(/['"]+/g, '');
            this.navSubscription = this.accountBlockingService.getNavParam.subscribe(function (data) {
              return _this2.editAddSysResp = data;
            });
            this.emailTypes = localStorage.getItem('EmailType');
            this.emailForm = this.formBuilder.group({
              accountType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
              emails: this.formBuilder.array([])
            });
            this.user_id = sessionStorage.getItem('user_id');
            this.role = sessionStorage.getItem('user_role');
            this.eamilAuditLog.modNo = this.editAddSysResp.queryParams.modNo;
            this.eamilAuditLog.inputBy = this.editAddSysResp.queryParams.creator;
            this.eamilAuditLog.recordStatus = this.editAddSysResp.queryParams.rstatus;
            this.eamilAuditLog.verifiedOnce = this.editAddSysResp.queryParams.vStatus;
            this.eamilAuditLog.inputTime = this.editAddSysResp.queryParams.inputDate;
            this.eamilAuditLog.verifiedStatus = this.editAddSysResp.queryParams.vDate;
            this.eamilAuditLog.verifiedTime = this.editAddSysResp.queryParams.authtym;
            this.eamilAuditLog.verifiedBy = this.editAddSysResp.queryParams.authBy;
            this.eamilAuditLog.emailType = this.editAddSysResp.queryParams.emailType;
            console.log(this.eamilAuditLog);

            if (this.editAddSysResp.queryParams.emailType == 'Account_Block') {
              this.buildEmailForm(this.eamilAuditLog);
              this.getScreenDetails();
            }

            if (this.editAddSysResp.queryParams.emailType != 'Account_Block') {
              if (JSON.parse(this.emailNavObj) != null) {
                this.buildEmailForm(this.emailNavigationObject);
                this.getScreenDetails();
                this.modifyScreen = true;
                this.editFlag = true;
              }
            }

            if (this.eamilAuditLog.emailType) {
              this.modifyScreen = true;
              this.editFlag = true;
            }

            this.auditLog();

            if (this.eamilAuditLog.emailType == null) {
              this.addAddress();
            }

            this.roleService.screenLabelList.subscribe(function (message) {
              return _this2.roleCodes = message;
            });
          }
        }, {
          key: "auditLog",
          value: function auditLog() {
            if (this.eamilAuditLog.verifiedStatus === 'U') {
              this.eamilAuditLog.verifiedStatus = 'UNAUTHORIZED';
            }

            if (this.eamilAuditLog.verifiedStatus === 'A') {
              this.eamilAuditLog.verifiedStatus = 'AUTHORIZED';
            }

            if (this.eamilAuditLog.recordStatus === 'O') {
              this.eamilAuditLog.recordStatus = 'OPEN';
            }

            if (this.eamilAuditLog.recordStatus === 'C') {
              this.eamilAuditLog.recordStatus = 'CLOSED';
            }

            if (this.eamilAuditLog.verifiedOnce === 'N') {
              this.eamilAuditLog.verifiedOnce = 'NO';
            }

            if (this.eamilAuditLog.verifiedOnce === 'Y') {
              this.eamilAuditLog.verifiedOnce = 'YES';
            }
          }
        }, {
          key: "getEmailItem",
          value: function getEmailItem() {
            return this.formBuilder.group({
              emailType: ['Account_Block'],
              emailId: [''],
              emailRequired: ['Y'],
              id: [''] // modNo:['']

            });
          }
        }, {
          key: "emails",
          get: function get() {
            return this.emailForm.get('emails');
          }
        }, {
          key: "buildEmailForm",
          value: function buildEmailForm(data, isResponse) {
            this.emailForm = this.formBuilder.group({
              accountType: [data.emailType ? data.emailType : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
              emails: this.formBuilder.array([])
            });
          }
        }, {
          key: "canExit",
          value: function canExit() {
            var _this3 = this;

            var isExit = false;

            if (this.emailForm.touched && this.formTouched == true) {
              return sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                text: 'There are unsaved changes in the screen. Would you like to navigate to other screen?',
                showCancelButton: true,
                confirmButtonColor: '#E6224A',
                cancelButtonColor: '#011945',
                cancelButtonText: 'NO',
                confirmButtonText: 'YES',
                icon: 'info'
              }).then(function (result) {
                if (result.isConfirmed === true) {
                  isExit = true;

                  _this3.cdr.markForCheck();

                  return isExit;
                } else {
                  isExit = false;

                  _this3.cdr.markForCheck();

                  return isExit;
                }
              });
            } else {
              isExit = true;
              return new Promise(function (resolve, reject) {
                if (isExit === true) {
                  isExit = true;

                  _this3.cdr.markForCheck();

                  resolve(true);
                }
              });
            }
          }
        }, {
          key: "getScreenDetails",
          value: function getScreenDetails() {
            var _this4 = this;

            // this.eamilAuditLog=this.emailNavigationObject;
            if (this.eamilAuditLog.emailType == undefined) {
              this.eamilAuditLog = this.emailNavigationObject;
            }

            this.selected = this.eamilAuditLog.emailType;
            this.accountBlockingService.sendAccType(this.eamilAuditLog.emailType).subscribe(function (resp) {
              _this4.emailList = resp;

              for (var index = 0; index < _this4.emailList.length; index++) {
                _this4.addAddress();

                var email = _this4.emailList[index]; // this.emails.at(index).get('emails').patchValue(email);

                _this4.emails.at(index).patchValue(email);
              }
            });
          }
        }, {
          key: "screenpermission",
          value: function screenpermission() {
            var _this5 = this;

            this.screenName = 'roles'; // this.role='ROLE1';

            this.userApi.getRoleScreenPermission(this.loggedInUser, this.screenName, this.role).subscribe(function (res) {
              _this5.rolepermission = res; //console.log(this.rolepermission);

              if (_this5.rolepermission) {
                _this5.button_permission = _this5.rolepermission[0]; //console.log( this.button_permission);
              }
            });
          }
        }, {
          key: "editValues",
          value: function editValues() {
            this.editFlag = false;
          }
        }, {
          key: "selectedChk",
          value: function selectedChk(e) {
            this.selected = e;
          } // TODO

        }, {
          key: "addAddress",
          value: function addAddress() {
            this.emails.push(this.getEmailItem());
          }
        }, {
          key: "removeAddress",
          value: function removeAddress(i, row) {
            var _this6 = this;

            // if(i=== 0){
            //   this.emailForm.controls.emails.reset()
            // }
            // else{
            if (row.value.emailId == "") {
              this.emails.removeAt(i);
            } else {
              this.accountBlockingService.deleteingParticluarRow(this.eamilAuditLog.emailType, this.loggedInUser, row.value.id).subscribe(function (deleteResp) {
                if (deleteResp == true) {
                  _this6.emails.removeAt(i);

                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    text: 'Record is Deleted',
                    icon: 'success'
                  });

                  _this6.router.navigate(['/email-management']);
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    text: 'Once Verifed Record Cannot Be Deleted',
                    icon: 'warning'
                  });
                }

                _this6.ref.markForCheck();
              });
            }
          }
        }, {
          key: "onClickOfDeleteOfEmailManagement",
          value: function onClickOfDeleteOfEmailManagement() {
            var _this7 = this;

            //console.log('this is delete call');
            //  this.eamilAuditLog.inputBy = this.loggedInUser;
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
              text: 'You are trying to Delete record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#E6224A',
              cancelButtonColor: '#011945',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              icon: 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                _this7.accountBlockingService.onclickOfDeleteOfEmailManagement(_this7.selected, _this7.loggedInUser).subscribe(function (deletedRecord) {
                  console.log(deletedRecord);

                  if (deletedRecord == false) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                      text: 'Record Deletion Failed',
                      icon: 'error'
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                      text: 'Record Deleted SuccessFully',
                      icon: 'success'
                    });
                  }
                });

                _this7.ref.markForCheck();
              }
            });
          }
        }, {
          key: "onClickOfAuthOfEmailManagement",
          value: function onClickOfAuthOfEmailManagement() {
            var _this8 = this;

            if (this.loggedInUser === this.eamilAuditLog.inputBy) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                text: "Maker cannot authorize the record",
                icon: 'error'
              });
              return;
            } else {
              sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                text: 'You are trying to Authorize record. ' + ' Do you want to proceed?',
                showCancelButton: true,
                confirmButtonColor: '#E6224A',
                cancelButtonColor: '#011945',
                // confirmButtonText: 'PROCEED.'
                cancelButtonText: 'NO',
                confirmButtonText: 'YES',
                icon: 'info'
              }).then(function (result) {
                if (result.isConfirmed === true) {
                  _this8.accountBlockingService.onClickOfAuthOfEmailManagement('Verify', 'Account_Block', _this8.loggedInUser).subscribe(function (authresp) {
                    if (authresp) {
                      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                        text: 'Record is Authorized',
                        icon: 'success'
                      });
                      _this8.eamilAuditLog = authresp;

                      _this8.auditLog();
                    } else {
                      sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                        text: 'Record Authorization is Failed',
                        icon: 'error'
                      });
                    }
                  });
                }
              });
            }

            this.ref.markForCheck();
          }
        }, {
          key: "onclickOfReopenOfEamilManagement",
          value: function onclickOfReopenOfEamilManagement() {
            var _this9 = this;

            //console.log('this is Reopen');
            // this.eamilAuditLog.inputBy = this.loggedInUser;
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
              text: 'You are trying to Reopen record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#E6224A',
              cancelButtonColor: '#011945',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              icon: 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                _this9.accountBlockingService.onClickOfAuthOfEmailManagement('reopen', 'Account_Block', _this9.loggedInUser).subscribe(function (reopenResp) {
                  if (reopenResp == false) {
                    // this.iziToast.show({
                    //   message: `UnAuthorized Records Cannot Be Reopen`,
                    //   image: "assets/images/user.png",
                    //   icon: 'ico ico-success',
                    //   theme: "dark",
                    //   layout: 2,
                    //   // imageWidth:50,
                    //   balloon: false,
                    //   position: "topRight",
                    //   progressBarColor: "green",
                    //   pauseOnHover: true,
                    // });
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                      text: 'UnAuthorized Records Cannot Be Reopen',
                      icon: 'warning'
                    });
                  } else {
                    _this9.eamilAuditLog = reopenResp;

                    _this9.auditLog();

                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                      text: 'Record is Reopened',
                      icon: 'success'
                    }); // this.iziToast.show({
                    //   message: `You Opened the record`,
                    //   image: "assets/images/user.png",
                    //   icon: 'ico ico-success',
                    //   theme: "dark",
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
            });
          }
        }, {
          key: "onclickOfCloseOfEmailManagement",
          value: function onclickOfCloseOfEmailManagement() {
            var _this10 = this;

            //  this.eamilAuditLog.inputBy = this.loggedInUser;
            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
              text: 'You are trying to Close record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#E6224A',
              cancelButtonColor: '#011945',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              icon: 'info'
            }).then(function (result) {
              if (result.isConfirmed === true) {
                _this10.accountBlockingService.onClickOfAuthOfEmailManagement('close', 'Account_Block', _this10.loggedInUser).subscribe(function (closeResp) {
                  if (closeResp == false) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                      text: 'UnAuthorized Records Cannot Be Closed',
                      icon: 'warning'
                    }); // this.iziToast.show({
                    //   message: `UnAuthorized Records Cannot Be Closed`,
                    //   image: "assets/images/user.png",
                    //   icon: 'ico ico-success',
                    //   theme: "dark",
                    //   layout: 2,
                    //   // imageWidth:50,
                    //   balloon: false,
                    //   position: "topRight",
                    //   progressBarColor: "green",
                    //   pauseOnHover: true,
                    // });
                  } else {
                    _this10.eamilAuditLog = closeResp;

                    _this10.auditLog();

                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                      text: 'Record is Closed',
                      icon: 'success'
                    }); // this.iziToast.show({
                    //   message: `You Closed The Record`,
                    //   image: "assets/images/user.png",
                    //   icon: 'ico ico-success',
                    //   theme: "dark",
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
            });
          }
        }, {
          key: "logValue",
          value: function logValue() {
            var _this11 = this;

            // if (this.eamilAuditLog.emailType != null || this.eamilAuditLog.emailType != undefined) {
            console.log(this.eamilAuditLog.inputBy);
            console.log(this.emailTypes);

            if (this.eamilAuditLog.inputBy != null || this.emailTypes == 'Account_Block') {
              this.accountBlockingService.onclickOfEditOfEmailManagement(this.selected, this.loggedInUser, this.emails.value).subscribe(function (editResp) {
                console.log(editResp, "If");

                if (editResp == null) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    text: 'Failed To Uppdate The Record',
                    icon: 'warning'
                  });
                } else {
                  _this11.eamilAuditLog = editResp;

                  _this11.auditLog();

                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    text: 'Record is Updated',
                    icon: 'success'
                  });
                  _this11.formTouched = !_this11.emailForm.touched;
                  _this11.modifyScreen = true;
                  _this11.submitBtn = false;
                  _this11.editFlag = true;
                }
              });
            }

            if (this.emailTypes != 'Account_Block') {
              console.log("else");
              this.accountBlockingService.emailMaintenance(this.selected, this.loggedInUser, this.emails.value).subscribe(function (resp) {
                _this11.masterresponse = resp;
                _this11.eamilAuditLog = _this11.masterresponse;

                if (resp) {
                  _this11.masterDatapermission = true;
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    text: 'Record is Created',
                    icon: 'success'
                  });

                  _this11.auditLog();

                  _this11.formTouched = !_this11.emailForm.touched;
                  _this11.modifyScreen = true;
                  _this11.submitBtn = false;
                } else if (resp == null) {
                  // this.masterDatapermission=false;
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Email Id Already Exit ');
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire('Unable to Save the Record ');
                }
              });
            } // }
            // this.accountBlockingService.emailMaintenance(this.selected, this.loggedInUser, this.emails.value).subscribe(resp => {
            //   this.masterresponse = resp;
            //   console.log(resp);
            //   if (resp) {
            //     this.editFlag=true;
            //     this.submitBtn=false;
            //     this.masterDatapermission = true;
            //      Swal.fire({
            //        text:'Success ',
            //        icon:'success'});
            //   }
            //   else if (resp == null) {
            //     Swal.fire({
            //       text:'Email Id Already Exit ',
            //       icon:'warning'}
            //       );
            //   }
            //   else {
            //      Swal.fire({
            //        text:'Unable to Save the Record ',
            //        icon:'error'});
            //   }
            // });

          }
        }, {
          key: "createEmail",
          value: function createEmail() {
            var navigationExtras = {
              queryParams: {}
            };
            this.accountBlockingService.sendNavParam(navigationExtras);
          }
        }]);

        return _EmailManagementCreateComponent;
      }();

      _EmailManagementCreateComponent.??fac = function EmailManagementCreateComponent_Factory(t) {
        return new (t || _EmailManagementCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](src_app_shared_services_account_blocking_service_service__WEBPACK_IMPORTED_MODULE_3__.AccountBlockingServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_users_users_service__WEBPACK_IMPORTED_MODULE_4__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](ng2_izitoast__WEBPACK_IMPORTED_MODULE_5__.Ng2IzitoastService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_6__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router));
      };

      _EmailManagementCreateComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineComponent"]({
        type: _EmailManagementCreateComponent,
        selectors: [["npr-email-management-create"]],
        decls: 33,
        vars: 12,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["novalidate", "", 1, "formStyle", 3, "formGroup"], [1, "dbCardStyle", "cardWidth"], [1, "pageTitle", "text-center", "mb-md-4", "mb-3"], [1, "row", "gy-4"], [1, "col-10"], ["for", "roleName", 1, "formLbl"], [1, "colorRed"], ["aria-label", "Default select example", "formControlName", "accountType", 1, "form-select", 3, "value", "valueChange", "change"], ["hidden", "", "value", "", "disabled", "", "selected", ""], ["value", "Account_Block", 3, "disabled"], ["class", "errorColor", 4, "ngIf"], ["formArrayName", "emails"], ["for", "", 1, "formLbl"], ["class", "col-12", 4, "ngFor", "ngForOf"], [1, "col-auto"], [1, "addIcon", "primarybg", 3, "ngClass", "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], ["class", "col-lg-12", 4, "ngIf"], ["class", "", 4, "ngIf"], ["class", "dbCardStyle", 4, "ngIf"], [1, "errorColor"], [4, "ngIf"], [1, "col-12"], [1, "row", "align-items-center"], [3, "formGroup"], ["type", "email", "id", "emailId", "formControlName", "emailId", "pattern", "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$", "required", "", "placeholder", "example@gmail.com", 1, "form-control", 3, "readonly", "name", "email"], [1, "col-2"], [1, "inputHide"], [3, "ngClass", "click"], ["src", "assets/images/delete-icon.svg", "alt", "..."], [1, "col-lg-12"], [1, "row", "g-3", "pb-3", "pt-3"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], ["routerLink", "/email-management", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary"], [1, ""], [1, "row", "pb-3", "justify-content-center", "pt-3"], ["class", "col-auto", "style", "margin-top: 10px;", 4, "ngIf"], [1, "col-auto", 2, "margin-top", "10px"], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "dbCardStyle"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], [1, "fa", "fa-edit", "faClass"], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["aria-hidden", "true", 1, "fa", "fa-files-o", "faRecordStatus"], [1, "csCardStyleIcon", "csCardStyleIconBg4"], [1, "fa", "fa-check-square-o", "faClassChecker"], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], [1, "fa", "fa-shield", "faClassFirstTimeAuth"], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/authorize.svg", "alt", "...", 1, "modImage"], ["src", "assets/images/modification.svg", "alt", "...", 1, "modImage"]],
        template: function EmailManagementCreateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, "Email Manangement");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](6, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](7, "Email IDs for Email-Notification");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](10, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](11, "Select an option");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](12, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](13, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](14, "select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("valueChange", function EmailManagementCreateComponent_Template_select_valueChange_14_listener($event) {
              return ctx.selected = $event;
            })("change", function EmailManagementCreateComponent_Template_select_change_14_listener($event) {
              return ctx.selectedChk($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](15, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](16, "--Please select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](17, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](18, "Account_Block");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](19, EmailManagementCreateComponent_div_19_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerStart"](20, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](21, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](22, "Email Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](23, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](24, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](25, EmailManagementCreateComponent_div_25_Template, 10, 8, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](26, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](27, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function EmailManagementCreateComponent_Template_a_click_27_listener() {
              return ctx.addAddress();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](28, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](29, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](30, EmailManagementCreateComponent_div_30_Template, 8, 1, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](31, EmailManagementCreateComponent_div_31_Template, 11, 6, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](32, EmailManagementCreateComponent_div_32_Template, 100, 14, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("formGroup", ctx.emailForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("value", ctx.selected);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????attribute"]("disabled", ctx.editFlag ? "" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("disabled", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.emailForm.get("accountType").invalid && (ctx.emailForm.get("accountType").dirty || ctx.emailForm.get("accountType").touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngForOf", ctx.emails.controls);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pureFunction1"](10, _c0, ctx.editFlag));

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", !ctx.modifyScreen);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.modifyScreen);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.eamilAuditLog.emailType != null);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["??NgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.EmailValidator, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
        styles: [".errorColor[_ngcontent-%COMP%] {\n  color: #e6224a;\n}\n\n.isDisabled[_ngcontent-%COMP%] {\n  color: currentColor;\n  cursor: not-allowed;\n  pointer-events: none;\n  opacity: 0.4;\n  text-decoration: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLW1hbmFnZW1lbnQtY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKOztBQUNBO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0FBRUoiLCJmaWxlIjoiZW1haWwtbWFuYWdlbWVudC1jcmVhdGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXJyb3JDb2xvcntcclxuICAgIGNvbG9yOiAjZTYyMjRhO1xyXG59XHJcbi5pc0Rpc2FibGVkIHtcclxuICAgIGNvbG9yOiBjdXJyZW50Q29sb3I7XHJcbiAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBvcGFjaXR5OiAwLjQ7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gIH0iXX0= */"]
      });
      /***/
    },

    /***/
    1232:
    /*!***************************************************************************!*\
      !*** ./src/app/views/email-management/email-management-routing.module.ts ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmailManagementRoutingModule": function EmailManagementRoutingModule() {
          return (
            /* binding */
            _EmailManagementRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/guards/can-deactivate.guard */
      50215);
      /* harmony import */


      var _email_management_create_email_management_create_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./email-management-create/email-management-create.component */
      60664);
      /* harmony import */


      var _email_management_email_management_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./email-management/email-management.component */
      33753);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: "",
        component: _email_management_email_management_component__WEBPACK_IMPORTED_MODULE_2__.EmailManagementComponent
      }, {
        path: "create",
        component: _email_management_create_email_management_create_component__WEBPACK_IMPORTED_MODULE_1__.EmailManagementCreateComponent,
        canDeactivate: [src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__.CanDeactivateGuard]
      }];

      var _EmailManagementRoutingModule = /*#__PURE__*/_createClass(function _EmailManagementRoutingModule() {
        _classCallCheck(this, _EmailManagementRoutingModule);
      });

      _EmailManagementRoutingModule.??fac = function EmailManagementRoutingModule_Factory(t) {
        return new (t || _EmailManagementRoutingModule)();
      };

      _EmailManagementRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({
        type: _EmailManagementRoutingModule
      });
      _EmailManagementRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](_EmailManagementRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    81089:
    /*!*******************************************************************!*\
      !*** ./src/app/views/email-management/email-management.module.ts ***!
      \*******************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmailManagementModule": function EmailManagementModule() {
          return (
            /* binding */
            _EmailManagementModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _email_management_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./email-management-routing.module */
      1232);
      /* harmony import */


      var _email_management_email_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./email-management/email-management.component */
      33753);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-datatables */
      50481);
      /* harmony import */


      var _email_management_create_email_management_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./email-management-create/email-management-create.component */
      60664);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _EmailManagementModule = /*#__PURE__*/_createClass(function _EmailManagementModule() {
        _classCallCheck(this, _EmailManagementModule);
      });

      _EmailManagementModule.??fac = function EmailManagementModule_Factory(t) {
        return new (t || _EmailManagementModule)();
      };

      _EmailManagementModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({
        type: _EmailManagementModule
      });
      _EmailManagementModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _email_management_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmailManagementRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](_EmailManagementModule, {
          declarations: [_email_management_email_management_component__WEBPACK_IMPORTED_MODULE_1__.EmailManagementComponent, _email_management_create_email_management_create_component__WEBPACK_IMPORTED_MODULE_3__.EmailManagementCreateComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _email_management_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmailManagementRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule]
        });
      })();
      /***/

    },

    /***/
    33753:
    /*!***************************************************************************************!*\
      !*** ./src/app/views/email-management/email-management/email-management.component.ts ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "EmailManagementComponent": function EmailManagementComponent() {
          return (
            /* binding */
            _EmailManagementComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var src_app_shared_models_EmailAuditLog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/models/EmailAuditLog */
      53933);
      /* harmony import */


      var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/models/fmosNewRolePermissions */
      35383);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_account_blocking_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/account-blocking-service.service */
      5515);
      /* harmony import */


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      77382);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! src/app/shared/services/user.service */
      98613);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular-datatables */
      50481);

      function EmailManagementComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function EmailManagementComponent_div_6_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

            return ctx_r2.createEmail();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](ctx_r0.roleCodes["new"].labelDescription);
        }
      }

      function EmailManagementComponent_tr_25_button_13_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function EmailManagementComponent_tr_25_button_13_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r11);

            var email_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]().$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

            return ctx_r9.close(email_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "close");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }
      }

      function EmailManagementComponent_tr_25_button_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function EmailManagementComponent_tr_25_button_14_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r14);

            var email_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]().$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

            return ctx_r12.reopen(email_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Open");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }
      }

      function EmailManagementComponent_tr_25_button_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }
      }

      function EmailManagementComponent_tr_25_button_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function EmailManagementComponent_tr_25_button_16_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r17);

            var email_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]().$implicit;

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

            return ctx_r15.auth(email_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](2, "Authorize");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????element"](3, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }
      }

      function EmailManagementComponent_tr_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????listener"]("click", function EmailManagementComponent_tr_25_Template_a_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????restoreView"](_r19);

            var email_r4 = restoredCtx.$implicit;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["????nextContext"]();

            return ctx_r18.getEmail(email_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipe"](10, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](12, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](13, EmailManagementComponent_tr_25_button_13_Template, 4, 0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](14, EmailManagementComponent_tr_25_button_14_Template, 4, 0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](15, EmailManagementComponent_tr_25_button_15_Template, 4, 0, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](16, EmailManagementComponent_tr_25_button_16_Template, 4, 0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
        }

        if (rf & 2) {
          var email_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????propertyInterpolate1"]("routerLink", "/email-management/create/", email_r4.emailType, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](email_r4.emailType);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](email_r4.inputBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](email_r4.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["????pipeBind2"](10, 9, email_r4.inputTime, "medium"));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", (email_r4.recordStatus == "O" || email_r4.recordStatus == "Open" || email_r4.recordStatus == "OPEN") && (email_r4.verifiedOnce == "Y" || email_r4.verifiedOnce == "YES"));

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", email_r4.recordStatus == "C");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", email_r4.verifiedOnce == "N" || email_r4.verifiedOnce == "NO");

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", email_r4.verifiedStatus == "U" || email_r4.verifiedStatus == "UNAUTHORIZED");
        }
      }

      var _EmailManagementComponent = /*#__PURE__*/function () {
        function _EmailManagementComponent(accountBlockingService, roleService, router, userApi) {
          _classCallCheck(this, _EmailManagementComponent);

          this.accountBlockingService = accountBlockingService;
          this.roleService = roleService;
          this.router = router;
          this.userApi = userApi;
          this.dtOptions = {};
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
          this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_1__.permissionsLabels();
          this.eamilAuditLog = new src_app_shared_models_EmailAuditLog__WEBPACK_IMPORTED_MODULE_0__.EamilAuditLog();
          this.statusArr = ['Open', 'Close'];
        }

        _createClass(_EmailManagementComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this12 = this;

            this.user_id = sessionStorage.getItem('user_id');
            this.role = sessionStorage.getItem('user_role');
            this.getAllData();
            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 5,
              columnDefs: [{
                type: 'date',
                'targets': [3]
              }],
              order: [[3, 'desc']],
              processing: true,
              lengthMenu: [[5, 10, 20, 30, -1], [5, 10, 20, 30, "ALL"]] // columnDefs: [ { type: 'date', 'targets': [5] } ],
              // order: [[5, 'desc']],

            };
            this.roleService.fetchScreenPermissions('Email-Management');
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this12.roleCodes = message;
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            // Do not forget to unsubscribe the event
            this.dtTrigger.unsubscribe();
          }
        }, {
          key: "getEmail",
          value: function getEmail(email) {
            console.log("email", email);
            this.emaildetails = email; //console.log(row.modNO);

            this.accountBlockingService.setIndexValue({
              index: 'edit'
            });
            var navigationExtras = {
              queryParams: {
                modNo: email.modNO,
                creator: email.inputBy,
                rstatus: email.recordStatus,
                vStatus: email.verifiedOnce,
                inputDate: email.inputTime,
                vDate: email.verifiedStatus,
                authtym: email.verifiedTime,
                authBy: email.verifiedBy,
                emailType: email.emailType
              }
            };
            localStorage.setItem('emailManagementNavObj', JSON.stringify(this.emaildetails));
            this.accountBlockingService.sendNavParam(navigationExtras);
            this.router.navigate(['email-management/create']); // this.router.navigate(['email-management/create'],navigationExtras);

            console.log(navigationExtras);
          }
        }, {
          key: "getAllData",
          value: function getAllData() {
            var _this13 = this;

            this.accountBlockingService.getAllEmail().subscribe(function (emaildata) {
              _this13.emaildata = emaildata.result;
              console.log(_this13.emaildata[0].emailType);

              var _iterator = _createForOfIteratorHelper(emaildata.result),
                  _step;

              try {
                var _loop = function _loop() {
                  var item = _step.value;
                  item.recordStatus = _this13.statusArr.find(function (i) {
                    return i.startsWith(item.recordStatus);
                  });
                };

                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  _loop();
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }

              localStorage.setItem("EmailType", _this13.emaildata[0].emailType);

              _this13.dtTrigger.next();

              console.log(_this13.emaildata);
            });
            localStorage.setItem("EmailSwitch", "existing");
            localStorage.setItem("responseFromEmailSummary", this.emaildata);
          }
        }, {
          key: "createEmail",
          value: function createEmail() {
            localStorage.removeItem('emailManagementNavObj');
            this.router.navigate(['/email-management/create']);
            var navigationExtras = {
              queryParams: {}
            };
            this.accountBlockingService.sendNavParam(navigationExtras);
            this.accountBlockingService.setIndexValue({
              index: 'new'
            });
          }
        }, {
          key: "auth",
          value: function auth(email) {
            var _this14 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Authorize record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3e54b8',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              icon: 'info',
              iconColor: '#d33'
            }).then(function (result) {
              console.log('this is reopen ', result);

              if (result.isConfirmed === true) {
                if (email.createdBy === localStorage.getItem('userFromLogin')) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                    text: 'Maker Cannot Authorize Record!',
                    icon: 'error'
                  });
                  return;
                }

                console.log('this is authorzation');
                email.loggedInUser = _this14.currentUser;

                _this14.accountBlockingService.onClickOfAuthOfEmailManagement('authorize', _this14.currentUser, email).subscribe(function (resp) {
                  console.log(resp);
                  _this14.eamilAuditLog = resp;

                  _this14.auditlog();

                  if (resp) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                      text: 'Record is Authorized',
                      icon: 'success'
                    }).then(function () {
                      return window.location.reload();
                    });
                  }
                } // (error) => {
                //   Swal.fire({ text: error.error.message, icon: 'error' });
                // }
                );
              }
            });
          }
        }, {
          key: "close",
          value: function close(email) {
            var _this15 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Close record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3e54b8',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              icon: 'info',
              iconColor: '#d33'
            }).then(function (result) {
              console.log('this is reopen ', result);

              if (result.isConfirmed === true) {
                console.log('this is close');

                _this15.accountBlockingService.onClickOfAuthOfEmailManagement('close', _this15.loggedInUser, email).subscribe(function (resp) {
                  console.log(resp);
                  _this15.eamilAuditLog = resp;

                  _this15.auditlog();

                  if (_this15.eamilAuditLog) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                      text: 'Record is Closed'
                    }).then(function () {
                      return window.location.reload();
                    });
                  }
                }, function (error) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire(error.error.message);
                });
              }
            });
          }
        }, {
          key: "reopen",
          value: function reopen(email) {
            var _this16 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
              //text: 'Unable to process' + 'Error ' + this.responseforfileupload.errorMessage + 'Do you want to Proceed??',
              text: 'You are trying to Reopen record. ' + ' Do you want to proceed?',
              showCancelButton: true,
              confirmButtonColor: '#3e54b8',
              cancelButtonColor: '#d33',
              // confirmButtonText: 'PROCEED.'
              cancelButtonText: 'NO',
              confirmButtonText: 'YES',
              icon: 'info',
              iconColor: '#d33'
            }).then(function (result) {
              console.log('this is reopen ', result);

              if (result.isConfirmed === true) {
                _this16.accountBlockingService.onClickOfAuthOfEmailManagement('reopen', _this16.loggedInUser, email).subscribe(function (resp) {
                  console.log(resp);
                  _this16.eamilAuditLog = resp;

                  _this16.auditlog();

                  if (_this16.eamilAuditLog) {
                    _this16.auditlog();

                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                      text: 'Record is Reopened'
                    }).then(function () {
                      return window.location.reload();
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire({
                      text: 'Record cannot be opened '
                    });
                  }
                }, function (error) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire(error.error.message);
                });
              }
            });
          }
        }, {
          key: "auditlog",
          value: function auditlog() {
            if (this.eamilAuditLog.verifiedStatus === 'U') {
              this.eamilAuditLog.verifiedStatus = 'UNAUTHORIZED';
            }

            if (this.eamilAuditLog.verifiedStatus === 'A') {
              this.eamilAuditLog.verifiedStatus = 'AUTHORIZED';
            }

            if (this.eamilAuditLog.recordStatus === 'O') {
              this.eamilAuditLog.recordStatus = 'OPEN';
            }

            if (this.eamilAuditLog.recordStatus === 'C') {
              this.eamilAuditLog.recordStatus = 'CLOSED';
            }

            if (this.eamilAuditLog.verifiedOnce === 'N') {
              this.eamilAuditLog.verifiedOnce = 'NO';
            }

            if (this.eamilAuditLog.verifiedOnce === 'Y') {
              this.eamilAuditLog.verifiedOnce = 'YES';
            }
          }
        }]);

        return _EmailManagementComponent;
      }();

      _EmailManagementComponent.??fac = function EmailManagementComponent_Factory(t) {
        return new (t || _EmailManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](src_app_shared_services_account_blocking_service_service__WEBPACK_IMPORTED_MODULE_3__.AccountBlockingServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_4__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["????directiveInject"](src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_5__.UsersService));
      };

      _EmailManagementComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["????defineComponent"]({
        type: _EmailManagementComponent,
        selectors: [["npr-email-management"]],
        decls: 26,
        vars: 4,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary"], [1, "table-responsive"], ["datatable", "", 1, "dataTable", "table", "tableStyle", "nowrap", "vAlignMdl", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "primaryColor", 3, "routerLink", "click"], [2, "display", "flex", "gap", "50px"], ["class", "iconBtn", "color", "primary", 3, "click", 4, "ngIf"], ["class", "iconBtn", "color", "primary", 4, "ngIf"], ["color", "primary", 1, "iconBtn", 3, "click"], [1, "btnTooltip"], ["src", "assets/images/CROSS1.svg", "alt", "..."], ["src", "assets/images/open.svg", "alt", "..."], ["color", "primary", 1, "iconBtn"], ["src", "assets/images/delete.svg", "alt", "..."], ["src", "assets/images/authorize.svg", "alt", "Authorize"]],
        template: function EmailManagementComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](3, "Email Manangement");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](6, EmailManagementComponent_div_6_Template, 3, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](8, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](9, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](11, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](12, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](13, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](14, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](15, "account type ");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](16, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](17, "maker id");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](19, "Record Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](21, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????text"](23, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementStart"](24, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????template"](25, EmailManagementComponent_tr_25_Template, 17, 12, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngIf", ctx.roleCodes["new"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????advance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_7__["????property"]("ngForOf", ctx.emaildata);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, angular_datatables__WEBPACK_IMPORTED_MODULE_6__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkWithHref],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe],
        styles: [".iconBtn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  outline: none;\n  position: relative;\n}\n\n.btnTooltip[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: white;\n  display: none;\n  top: 24px;\n  left: 12px;\n  border: 1px solid black;\n  padding: 4px;\n}\n\n.iconBtn[_ngcontent-%COMP%]:hover   .btnTooltip[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLW1hbmFnZW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSiIsImZpbGUiOiJlbWFpbC1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmljb25CdG4ge1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxufVxyXG5cclxuLmJ0blRvb2x0aXAge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgdG9wOiAyNHB4O1xyXG4gICAgbGVmdDogMTJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG59XHJcblxyXG4uaWNvbkJ0bjpob3ZlciAgLmJ0blRvb2x0aXAge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn0iXX0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_views_email-management_email-management_module_ts-es5.js.map