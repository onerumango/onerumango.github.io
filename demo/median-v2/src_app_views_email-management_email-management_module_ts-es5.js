(function () {
  "use strict";

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
        }

        _createClass(_AccountBlockingServiceService, [{
          key: "sendNavParam",
          value: function sendNavParam(params) {
            this.paramSource.next(params);
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
            return this.http.get("".concat(_API_URL, "/emailMaintenence/summary"));
          }
        }, {
          key: "sendAccType",
          value: function sendAccType(emailType) {
            return this.http.get("".concat(_API_URL, "/emailMaintenence/getDetailsData/").concat(emailType));
          } //audit log --methods

        }, {
          key: "onClickOfAuthOfEmailManagement",
          value: function onClickOfAuthOfEmailManagement(emailType, loginUSer) {
            //console.log("type:",emailType)
            //console.log("loginUSer",loginUSer)
            return this.http.get("".concat(_API_URL, "/emailMaintenence/verify/").concat(emailType, "/").concat(loginUSer));
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
            return this.http.post("".concat(_API_URL, "/emailMaintenence/modifyEmailNotif/").concat(ac_type, "/").concat(inputBy), tobackend);
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_shared_models_EmailAuditLog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/models/EmailAuditLog */
      53933);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_account_blocking_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/account-blocking-service.service */
      5515);
      /* harmony import */


      var _users_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../users/users.service */
      59119);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var ng2_izitoast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ng2-izitoast */
      27218);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function EmailManagementCreateComponent_div_19_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Please Select Account Type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }
      }

      function EmailManagementCreateComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](1, EmailManagementCreateComponent_div_19_div_1_Template, 2, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r0.emailForm.get("accountType").errors.required);
        }
      }

      function EmailManagementCreateComponent_div_25_div_5_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Please Enter Email Id ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }
      }

      function EmailManagementCreateComponent_div_25_div_5_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](1, " Please Enter Valid Email Id ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }
      }

      function EmailManagementCreateComponent_div_25_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](1, EmailManagementCreateComponent_div_25_div_5_div_1_Template, 2, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](2, EmailManagementCreateComponent_div_25_div_5_div_2_Template, 2, 0, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var email_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]().$implicit;

          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", email_r6.get("emailId").errors.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r8.emailForm.controls.emails.invalid && !email_r6.get("emailId").errors.required);
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "isDisabled": a0
        };
      };

      function EmailManagementCreateComponent_div_25_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](2, 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](4, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](5, EmailManagementCreateComponent_div_25_div_5_Template, 3, 2, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function EmailManagementCreateComponent_div_25_Template_a_click_8_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r13);

            var i_r7 = restoredCtx.index;
            var email_r6 = restoredCtx.$implicit;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

            return ctx_r12.removeAddress(i_r7, email_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](9, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var email_r6 = ctx.$implicit;
          var i_r7 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroup", email_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????propertyInterpolate1"]("name", "address_", i_r7, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("readonly", ctx_r1.editFlag)("email", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", email_r6.get("emailId").invalid && (email_r6.get("emailId").dirty || email_r6.get("emailId").touched));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction1"](6, _c0, ctx_r1.emailForm.controls.emails.invalid || ctx_r1.editFlag));
        }
      }

      function EmailManagementCreateComponent_div_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function EmailManagementCreateComponent_div_30_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

            return ctx_r14.logValue();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](4, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](7, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", ctx_r2.emailForm.controls.emails.invalid || !ctx_r2.emailForm.value.accountType);
        }
      }

      function EmailManagementCreateComponent_div_31_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function EmailManagementCreateComponent_div_31_div_2_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);

            return ctx_r21.editValues();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }
      }

      function EmailManagementCreateComponent_div_31_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "button", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function EmailManagementCreateComponent_div_31_div_3_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);

            return ctx_r23.logValue();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", ctx_r17.emailForm.controls.emails.invalid || !ctx_r17.emailForm.value.accountType);
        }
      }

      function EmailManagementCreateComponent_div_31_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "button", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function EmailManagementCreateComponent_div_31_div_4_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r26);

            var ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);

            return ctx_r25.onClickOfAuthOfEmailManagement();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }
      }

      function EmailManagementCreateComponent_div_31_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function EmailManagementCreateComponent_div_31_div_5_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r28);

            var ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);

            return ctx_r27.onclickOfReopenOfEamilManagement();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Open");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }
      }

      function EmailManagementCreateComponent_div_31_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function EmailManagementCreateComponent_div_31_div_6_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r30);

            var ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"](2);

            return ctx_r29.onclickOfCloseOfEmailManagement();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](2, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }
      }

      function EmailManagementCreateComponent_div_31_Template(rf, ctx) {
        if (rf & 1) {
          var _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](2, EmailManagementCreateComponent_div_31_div_2_Template, 3, 0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](3, EmailManagementCreateComponent_div_31_div_3_Template, 3, 1, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](4, EmailManagementCreateComponent_div_31_div_4_Template, 3, 0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](5, EmailManagementCreateComponent_div_31_div_5_Template, 3, 0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](6, EmailManagementCreateComponent_div_31_div_6_Template, 3, 0, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](7, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function EmailManagementCreateComponent_div_31_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????restoreView"](_r32);

            var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

            return ctx_r31.onClickOfDeleteOfEmailManagement();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](9, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](11, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](12, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r3.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", !ctx_r3.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r3.eamilAuditLog.verifiedStatus == "U");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r3.eamilAuditLog.recordStatus == "C");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx_r3.eamilAuditLog.recordStatus == "O");
        }
      }

      function EmailManagementCreateComponent_div_32_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](3, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](7, "img", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](9, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](11, "Maker");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](14, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](15, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](16, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](17, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](18, "div", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](19, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](20, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](21, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](22, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](23, "Maker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipe"](26, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](27, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](28, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](29, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](30, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](31, "div", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](32, "img", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](33, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](34, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](35, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](36, "Record Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](39, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](40, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](41, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](42, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](43, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](44, "img", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](45, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](46, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](47, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](48, "Checker");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](51, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](52, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](53, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](54, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](55, "div", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](56, "img", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](57, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](58, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](59, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](60, "Checker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](63, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](64, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](65, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](66, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](67, "div", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](68, "img", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](69, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](70, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](71, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](72, "First Time Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](73, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](74);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](75, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](76, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](77, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](78, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](79, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](80, "img", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](81, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](82, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](83, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](84, "Auth Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](85, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](86);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](87, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](88, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](89, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](90, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](91, "div", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](92, "img", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](93, "div", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](94, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](95, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](96, "Modification Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](97, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](98);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["????nextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r4.eamilAuditLog.inputBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["????pipeBind1"](26, 8, ctx_r4.eamilAuditLog.inputTime));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r4.eamilAuditLog.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r4.eamilAuditLog.verifiedBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r4.eamilAuditLog.verifiedTime);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r4.eamilAuditLog.verifiedOnce);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r4.eamilAuditLog.verifiedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["????textInterpolate"](ctx_r4.eamilAuditLog.modNO);
        }
      }

      var _EmailManagementCreateComponent = /*#__PURE__*/function () {
        // allDetails: import("d:/GITHUB REPOSITORY_UI/median_v2/src/app/shared/models/EmailDetails").EmailDetails;
        function _EmailManagementCreateComponent(accountBlockingService, ref, userApi, route, iziToast, formBuilder, router) {
          _classCallCheck(this, _EmailManagementCreateComponent);

          this.accountBlockingService = accountBlockingService;
          this.ref = ref;
          this.userApi = userApi;
          this.route = route;
          this.iziToast = iziToast;
          this.formBuilder = formBuilder;
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
        }

        _createClass(_EmailManagementCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.navSubscription = this.accountBlockingService.getNavParam.subscribe(function (data) {
              return _this2.editAddSysResp = data;
            });
            console.log(this.editAddSysResp);
            this.loggedInUser = localStorage.getItem('userFromLogin').replace(/['"]+/g, '');
            this.emailForm = this.formBuilder.group({
              accountType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
              emails: this.formBuilder.array([])
            }); // console.log(this.loggedInUser);

            this.user_id = sessionStorage.getItem('user_id');
            this.role = sessionStorage.getItem('user_role'); // this.screenpermission();

            this.eamilAuditLog.modNO = this.editAddSysResp.queryParams.modifyNo;
            this.eamilAuditLog.inputBy = this.editAddSysResp.queryParams.creator;
            this.eamilAuditLog.recordStatus = this.editAddSysResp.queryParams.rstatus;
            this.eamilAuditLog.verifiedOnce = this.editAddSysResp.queryParams.vStatus;
            this.eamilAuditLog.inputTime = this.editAddSysResp.queryParams.inputDate;
            this.eamilAuditLog.verifiedStatus = this.editAddSysResp.queryParams.vDate;
            this.eamilAuditLog.verifiedTime = this.editAddSysResp.queryParams.authtym;
            this.eamilAuditLog.verifiedBy = this.editAddSysResp.queryParams.authBy;
            this.eamilAuditLog.emailType = this.editAddSysResp.queryParams.emailType;
            console.log(this.eamilAuditLog);

            if (this.eamilAuditLog.emailType) {
              console.log("Query params");
              this.modifyScreen = true;
              this.editFlag = true;
            }

            this.auditLog();

            if (this.eamilAuditLog.emailType) {
              this.getScreenDetails();
            }

            this.buildEmailForm(this.eamilAuditLog);

            if (this.eamilAuditLog.emailType == null) {
              this.addAddress();
            }

            console.log(this.loggedInUser);
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
              emailId: [''],
              emailType: ['Account_Block'],
              emailRequired: ['Y'],
              id: ['']
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
            console.log(data);
            this.emailForm = this.formBuilder.group({
              accountType: [data.emailType ? data.emailType : '', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
              emails: this.formBuilder.array([])
            });
          }
        }, {
          key: "getScreenDetails",
          value: function getScreenDetails() {
            var _this3 = this;

            this.selected = this.eamilAuditLog.emailType;
            console.log(this.selected);
            this.accountBlockingService.sendAccType(this.eamilAuditLog.emailType).subscribe(function (resp) {
              console.log(resp);
              _this3.emailList = resp;

              for (var index = 0; index < _this3.emailList.length; index++) {
                _this3.addAddress();

                var email = _this3.emailList[index];
                console.log(email); // this.emails.at(index).get('emails').patchValue(email);

                _this3.emails.at(index).patchValue(email);

                console.log(email, "Emails");
              }

              console.log(_this3.emails);
            });
          }
        }, {
          key: "screenpermission",
          value: function screenpermission() {
            var _this4 = this;

            this.screenName = 'roles'; // this.role='ROLE1';

            this.userApi.getRoleScreenPermission(this.loggedInUser, this.screenName, this.role).subscribe(function (res) {
              _this4.rolepermission = res; //console.log(this.rolepermission);

              if (_this4.rolepermission) {
                _this4.button_permission = _this4.rolepermission[0]; //console.log( this.button_permission);
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
            console.log(e);
            this.selected = e;
          } // TODO

        }, {
          key: "addAddress",
          value: function addAddress() {
            console.log("add");
            this.emails.push(this.getEmailItem());
            console.log(this.emails);
          }
        }, {
          key: "removeAddress",
          value: function removeAddress(i, row) {
            var _this5 = this;

            // if(i=== 0){
            //   this.emailForm.controls.emails.reset()
            // }
            // else{
            console.log(row.value.emailId);

            if (row.value.emailId == "") {
              this.emails.removeAt(i);
            } else {
              this.accountBlockingService.deleteingParticluarRow(this.eamilAuditLog.emailType, this.loggedInUser, row.value.id).subscribe(function (deleteResp) {
                if (deleteResp == true) {
                  _this5.emails.removeAt(i);

                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    text: 'Record is Deleted',
                    icon: 'success'
                  });

                  _this5.router.navigate(['/email-management']);
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    text: 'Once Verifed Record Cannot Be Deleted',
                    icon: 'warning'
                  });
                }

                _this5.ref.markForCheck();
              });
            }
          }
        }, {
          key: "onClickOfDeleteOfEmailManagement",
          value: function onClickOfDeleteOfEmailManagement() {
            //console.log('this is delete call');
            this.accountBlockingService.onclickOfDeleteOfEmailManagement(this.selected, this.loggedInUser).subscribe(function (deletedRecord) {
              console.log(deletedRecord);

              if (deletedRecord == false) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  text: 'Authorized Record Cannot be Deleted',
                  icon: 'warning'
                });
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  text: 'Record Deleted SuccessFully',
                  icon: 'success'
                });
              }
            });
            this.ref.markForCheck();
          }
        }, {
          key: "onClickOfAuthOfEmailManagement",
          value: function onClickOfAuthOfEmailManagement() {
            console.log('this is auth');
            this.accountBlockingService.onClickOfAuthOfEmailManagement(this.selected, this.loggedInUser).subscribe(function (authresp) {
              console.log(authresp);

              if (authresp == false) {
                // this.iziToast.show({
                //   message: `Maker Cannot Authorize The Record`,
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
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  text: 'Maker Cannot Authorize The Record',
                  icon: 'warning'
                });
              } else {
                // this.iziToast.show({
                //   message: `You Authorized The Record`,
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
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  text: 'Record is Authorized',
                  icon: 'success'
                });
              }
            });
            this.ref.markForCheck();
          }
        }, {
          key: "onclickOfReopenOfEamilManagement",
          value: function onclickOfReopenOfEamilManagement() {
            //console.log('this is Reopen');
            this.accountBlockingService.onclickOfReopenOfEamilManagement(this.selected, this.loggedInUser).subscribe(function (reopenResp) {
              console.log(reopenResp);

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
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  text: 'UnAuthorized Records Cannot Be Reopen',
                  icon: 'warning'
                });
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
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
        }, {
          key: "onclickOfCloseOfEmailManagement",
          value: function onclickOfCloseOfEmailManagement() {
            console.log('this is close', this.selected, this.loggedInUser);
            this.accountBlockingService.onclickOfCloseOfEmailManagement(this.selected, this.loggedInUser).subscribe(function (closeResp) {
              console.log(closeResp);

              if (closeResp == false) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
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
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
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
        }, {
          key: "logValue",
          value: function logValue() {
            var _this6 = this;

            // if (this.eamilAuditLog.emailType != null || this.eamilAuditLog.emailType != undefined) {
            console.log(this.editAddSysResp);

            if (this.eamilAuditLog.inputBy != null) {
              console.log("If");
              this.accountBlockingService.onclickOfEditOfEmailManagement(this.selected, this.loggedInUser, this.emails.value).subscribe(function (editResp) {
                console.log(editResp);

                if (editResp == false) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    text: 'Failed To Uppdate The Record',
                    icon: 'warning'
                  });
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    text: 'Record is Updated',
                    icon: 'success'
                  });
                }
              });
            } else {
              console.log("else");
              this.accountBlockingService.emailMaintenance(this.selected, this.loggedInUser, this.emails.value).subscribe(function (resp) {
                _this6.masterresponse = resp; //console.log(resp);

                if (resp) {
                  _this6.masterDatapermission = true;
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    text: 'Record is Created',
                    icon: 'success'
                  });
                } else if (resp == null) {
                  // this.masterDatapermission=false;
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Email Id Already Exit ');
                } else {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire('Unable to Save the Record ');
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
        }]);

        return _EmailManagementCreateComponent;
      }();

      _EmailManagementCreateComponent.??fac = function EmailManagementCreateComponent_Factory(t) {
        return new (t || _EmailManagementCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](src_app_shared_services_account_blocking_service_service__WEBPACK_IMPORTED_MODULE_2__.AccountBlockingServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_users_users_service__WEBPACK_IMPORTED_MODULE_3__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](ng2_izitoast__WEBPACK_IMPORTED_MODULE_4__.Ng2IzitoastService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
      };

      _EmailManagementCreateComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["????defineComponent"]({
        type: _EmailManagementCreateComponent,
        selectors: [["npr-email-management-create"]],
        decls: 33,
        vars: 12,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["novalidate", "", 1, "formStyle", 3, "formGroup"], [1, "dbCardStyle", "cardWidth"], [1, "pageTitle", "text-center", "mb-md-4", "mb-3"], [1, "row", "gy-4"], [1, "col-10"], ["for", "roleName", 1, "formLbl"], [1, "colorRed"], ["aria-label", "Default select example", "formControlName", "accountType", 1, "form-select", 3, "value", "valueChange", "change"], ["hidden", "", "value", "", "disabled", "", "selected", ""], ["value", "Account_Block", 3, "disabled"], ["class", "errorColor", 4, "ngIf"], ["formArrayName", "emails"], ["for", "", 1, "formLbl"], ["class", "col-12", 4, "ngFor", "ngForOf"], [1, "col-auto"], [1, "addIcon", "primarybg", 3, "ngClass", "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], ["class", "col-lg-12", 4, "ngIf"], ["class", "dbCardStyle", 4, "ngIf"], [1, "errorColor"], [4, "ngIf"], [1, "col-12"], [1, "row", "align-items-center"], [3, "formGroup"], ["type", "email", "id", "emailId", "formControlName", "emailId", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$", "required", "", "placeholder", "example@gmail.com", 1, "form-control", 3, "readonly", "name", "email"], [1, "col-2"], [1, "inputHide"], [3, "ngClass", "click"], ["src", "assets/images/delete-icon.svg", "alt", "..."], [1, "col-lg-12"], [1, "row", "g-3", "pb-3", "pt-3"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], ["routerLink", "/email-management", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], ["class", "col-auto", 4, "ngIf"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], [1, "dbCardStyle"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."]],
        template: function EmailManagementCreateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](3, "Email Manangement");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](6, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](7, "Email IDs for Email-Notification");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](10, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](11, "Select an option");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](12, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](13, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](14, "select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("valueChange", function EmailManagementCreateComponent_Template_select_valueChange_14_listener($event) {
              return ctx.selected = $event;
            })("change", function EmailManagementCreateComponent_Template_select_change_14_listener($event) {
              return ctx.selectedChk($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](15, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](16, "--Please select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](17, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](18, "Account_Block");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](19, EmailManagementCreateComponent_div_19_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerStart"](20, 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](21, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](22, "Email Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](23, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????text"](24, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](25, EmailManagementCreateComponent_div_25_Template, 10, 8, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](26, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](27, "a", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????listener"]("click", function EmailManagementCreateComponent_Template_a_click_27_listener() {
              return ctx.addAddress();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementStart"](28, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????element"](29, "img", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](30, EmailManagementCreateComponent_div_30_Template, 8, 1, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](31, EmailManagementCreateComponent_div_31_Template, 13, 5, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????template"](32, EmailManagementCreateComponent_div_32_Template, 99, 10, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("formGroup", ctx.emailForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("value", ctx.selected);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????attribute"]("disabled", ctx.editFlag ? "" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("disabled", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.emailForm.get("accountType").invalid && (ctx.emailForm.get("accountType").dirty || ctx.emailForm.get("accountType").touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngForOf", ctx.emails.controls);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["????pureFunction1"](10, _c0, ctx.editFlag));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", !ctx.modifyScreen);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.modifyScreen);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["????property"]("ngIf", ctx.eamilAuditLog.emailType != null);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["??NgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["??NgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.EmailValidator, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _email_management_create_email_management_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./email-management-create/email-management-create.component */
      60664);
      /* harmony import */


      var _email_management_email_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./email-management/email-management.component */
      33753);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: "",
        component: _email_management_email_management_component__WEBPACK_IMPORTED_MODULE_1__.EmailManagementComponent
      }, {
        path: "create",
        component: _email_management_create_email_management_create_component__WEBPACK_IMPORTED_MODULE_0__.EmailManagementCreateComponent
      }];

      var _EmailManagementRoutingModule = /*#__PURE__*/_createClass(function _EmailManagementRoutingModule() {
        _classCallCheck(this, _EmailManagementRoutingModule);
      });

      _EmailManagementRoutingModule.??fac = function EmailManagementRoutingModule_Factory(t) {
        return new (t || _EmailManagementRoutingModule)();
      };

      _EmailManagementRoutingModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineNgModule"]({
        type: _EmailManagementRoutingModule
      });
      _EmailManagementRoutingModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["????setNgModuleScope"](_EmailManagementRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
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


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_account_blocking_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/services/account-blocking-service.service */
      5515);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/user.service */
      98613);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-datatables */
      50481);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function EmailManagementComponent_tr_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????getCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function EmailManagementComponent_tr_22_Template_a_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????restoreView"](_r3);

            var email_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["????nextContext"]();

            return ctx_r2.getEmail(email_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](8, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }

        if (rf & 2) {
          var email_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????propertyInterpolate1"]("routerLink", "/email-management/create/", email_r1.emailType, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](email_r1.emailType);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](email_r1.inputBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????textInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind2"](8, 4, email_r1.inputTime, "medium"));
        }
      }

      var _EmailManagementComponent = /*#__PURE__*/function () {
        function _EmailManagementComponent(accountBlockingService, router, userApi) {
          _classCallCheck(this, _EmailManagementComponent);

          this.accountBlockingService = accountBlockingService;
          this.router = router;
          this.userApi = userApi;
          this.dtOptions = {};
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        }

        _createClass(_EmailManagementComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.user_id = sessionStorage.getItem('user_id');
            this.role = sessionStorage.getItem('user_role');
            this.getAllData();
            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 5,
              columnDefs: [{
                type: 'date',
                'targets': [2]
              }],
              order: [[2, 'desc']],
              processing: true,
              lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]] // columnDefs: [ { type: 'date', 'targets': [5] } ],
              // order: [[5, 'desc']],

            };
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
            console.log("email", email); //console.log(row.modNO);

            var navigationExtras = {
              queryParams: {
                modifyNo: email.modNO,
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
            console.log(email.emailType);
            this.accountBlockingService.sendNavParam(navigationExtras);
            this.router.navigate(['email-management/create']); // this.router.navigate(['email-management/create'],navigationExtras);

            console.log(navigationExtras);
          }
        }, {
          key: "getAllData",
          value: function getAllData() {
            var _this7 = this;

            this.accountBlockingService.getAllEmail().subscribe(function (emaildata) {
              _this7.emaildata = emaildata;

              _this7.dtTrigger.next();

              console.log(_this7.emaildata);
            });
            localStorage.setItem("EmailSwitch", "existing");
            localStorage.setItem("responseFromEmailSummary", this.emaildata);
          }
        }, {
          key: "createEmail",
          value: function createEmail() {
            this.router.navigate(['/email-management/create']);
            var navigationExtras = {
              queryParams: {}
            };
            console.log(navigationExtras);
            this.accountBlockingService.sendNavParam(navigationExtras);
          }
        }]);

        return _EmailManagementComponent;
      }();

      _EmailManagementComponent.??fac = function EmailManagementComponent_Factory(t) {
        return new (t || _EmailManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](src_app_shared_services_account_blocking_service_service__WEBPACK_IMPORTED_MODULE_0__.AccountBlockingServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UsersService));
      };

      _EmailManagementComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
        type: _EmailManagementComponent,
        selectors: [["npr-email-management"]],
        decls: 23,
        vars: 3,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary"], ["datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [1, "primaryColor", 3, "routerLink", "click"]],
        template: function EmailManagementComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](3, "Email Manangement");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](7, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("click", function EmailManagementComponent_Template_a_click_7_listener() {
              return ctx.createEmail();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](8, "New");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](10, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](11, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](12, "table", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](13, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](14, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](15, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](16, "account type ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](18, "maker id");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????text"](20, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](21, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](22, EmailManagementComponent_tr_22_Template, 9, 7, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngForOf", ctx.emaildata);
          }
        },
        directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWFpbC1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_views_email-management_email-management_module_ts-es5.js.map