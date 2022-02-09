(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_email-management_email-management_module_ts"], {
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
    26834:
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
    5074:
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
            return this.http["delete"]("".concat(_API_URL, "/emailMaintenence/deleteUser/").concat(account_type, "/").concat(loginUser));
          }
        }, {
          key: "deleteingParticluarRow",
          value: function deleteingParticluarRow(emailType, loginUser, id) {
            return this.http["delete"]("".concat(_API_URL, "/emailMaintenence/deleteById/").concat(emailType, "/").concat(loginUser, "/").concat(id));
          }
        }]);

        return _AccountBlockingServiceService;
      }();

      _AccountBlockingServiceService.ɵfac = function AccountBlockingServiceService_Factory(t) {
        return new (t || _AccountBlockingServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _AccountBlockingServiceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _AccountBlockingServiceService,
        factory: _AccountBlockingServiceService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    14234:
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


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      68465);
      /* harmony import */


      var src_app_shared_models_EmailAuditLog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/models/EmailAuditLog */
      26834);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      1858);
      /* harmony import */


      var src_app_shared_services_account_blocking_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/account-blocking-service.service */
      5074);
      /* harmony import */


      var _users_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../users/users.service */
      69358);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      869);
      /* harmony import */


      var ng2_izitoast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ng2-izitoast */
      97385);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      7005);

      function EmailManagementCreateComponent_div_15_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please Select Account Type ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function EmailManagementCreateComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, EmailManagementCreateComponent_div_15_div_1_Template, 2, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.emailForm.controls["accountType"].errors.required);
        }
      }

      function EmailManagementCreateComponent_div_17_div_7_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Please Enter EmailId ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function EmailManagementCreateComponent_div_17_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, EmailManagementCreateComponent_div_17_div_7_div_1_Template, 2, 0, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var email_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", email_r6.controls["emailId"].errors.required);
        }
      }

      function EmailManagementCreateComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](2, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Email Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, EmailManagementCreateComponent_div_17_div_7_Template, 2, 1, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmailManagementCreateComponent_div_17_Template_div_click_9_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r12);

            var i_r7 = restoredCtx.index;
            var email_r6 = restoredCtx.$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r11.removeAddress(i_r7, email_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "img", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var email_r6 = ctx.$implicit;
          var i_r7 = ctx.index;

          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", email_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate1"]("name", "address_", i_r7, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("readonly", ctx_r1.editFlag)("email", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", email_r6.controls["emailId"].invalid && (email_r6.controls["emailId"].dirty || email_r6.controls["emailId"].touched));
        }
      }

      function EmailManagementCreateComponent_div_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "button", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmailManagementCreateComponent_div_22_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r13.logValue();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx_r2.emailForm.valid);
        }
      }

      function EmailManagementCreateComponent_div_23_div_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmailManagementCreateComponent_div_23_div_2_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r20.editValues();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function EmailManagementCreateComponent_div_23_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmailManagementCreateComponent_div_23_div_3_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r22.logValue();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function EmailManagementCreateComponent_div_23_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmailManagementCreateComponent_div_23_div_4_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r24.onClickOfAuthOfEmailManagement();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function EmailManagementCreateComponent_div_23_div_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmailManagementCreateComponent_div_23_div_5_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r26.onclickOfReopenOfEamilManagement();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Open");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function EmailManagementCreateComponent_div_23_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmailManagementCreateComponent_div_23_div_6_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);

            return ctx_r28.onclickOfCloseOfEmailManagement();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }
      }

      function EmailManagementCreateComponent_div_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, EmailManagementCreateComponent_div_23_div_2_Template, 3, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, EmailManagementCreateComponent_div_23_div_3_Template, 3, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, EmailManagementCreateComponent_div_23_div_4_Template, 3, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, EmailManagementCreateComponent_div_23_div_5_Template, 3, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, EmailManagementCreateComponent_div_23_div_6_Template, 3, 0, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "button", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmailManagementCreateComponent_div_23_Template_button_click_8_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

            return ctx_r30.onClickOfDeleteOfEmailManagement();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "button", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r3.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.eamilAuditLog.verifiedStatus == "U");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.eamilAuditLog.recordStatus == "C");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.eamilAuditLog.recordStatus == "O");
        }
      }

      function EmailManagementCreateComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "img", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Maker");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "img", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Maker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](26, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](36, "Record Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](44, "img", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](48, "Checker");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](55, "img", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Checker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](61, "Lorem Ipsum");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](67, "img", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "First Time Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](74, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "div", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](79, "img", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](80, "div", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "div", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "Auth Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](85);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.eamilAuditLog.inputBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](26, 5, ctx_r4.eamilAuditLog.inputTime));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.eamilAuditLog.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](35);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.eamilAuditLog.verifiedOnce);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r4.eamilAuditLog.verifiedStatus);
        }
      }

      var _EmailManagementCreateComponent = /*#__PURE__*/function () {
        // allDetails: import("d:/GITHUB REPOSITORY_UI/median_v2/src/app/shared/models/EmailDetails").EmailDetails;
        function _EmailManagementCreateComponent(accountBlockingService, ref, userApi, route, iziToast, formBuilder) {
          _classCallCheck(this, _EmailManagementCreateComponent);

          this.accountBlockingService = accountBlockingService;
          this.ref = ref;
          this.userApi = userApi;
          this.route = route;
          this.iziToast = iziToast;
          this.formBuilder = formBuilder; // interface email
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
        }

        _createClass(_EmailManagementCreateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.navSubscription = this.accountBlockingService.getNavParam.subscribe(function (data) {
              return _this2.editAddSysResp = data;
            });
            console.log(this.editAddSysResp);
            this.loggedInUser = localStorage.getItem('LoggedInUser').replace(/['"]+/g, '');
            this.emailForm = this.formBuilder.group({
              accountType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
              emails: this.formBuilder.array([])
            }); // console.log(this.loggedInUser);

            this.user_id = sessionStorage.getItem('user_id');
            this.role = sessionStorage.getItem('user_role');
            this.screenpermission();
            this.addAddress();
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
              emailType: [this.emailForm.get('accountType').value],
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

                var email = _this3.emailList[index]; // this.emails.at(index).get('emails').patchValue(email);

                _this3.emails.at(index).patchValue(email);
              }
            });
          }
        }, {
          key: "screenpermission",
          value: function screenpermission() {
            var _this4 = this;

            this.screenName = 'roles'; // this.role='ROLE1';

            this.userApi.getRoleScreenPermission(this.user_id, this.screenName, this.role).subscribe(function (res) {
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
          }
        }, {
          key: "removeAddress",
          value: function removeAddress(i, row) {
            var _this5 = this;

            console.log(row);
            this.accountBlockingService.deleteingParticluarRow(this.eamilAuditLog.emailType, this.loggedInUser, row.value.id).subscribe(function (deleteResp) {
              if (deleteResp == true) {
                _this5.emails.removeAt(i);

                _this5.iziToast.show({
                  message: "You Deleted The Record",
                  image: "assets/images/user.png",
                  icon: 'ico ico-success',
                  theme: "dark",
                  layout: 2,
                  // imageWidth:50,
                  balloon: false,
                  position: "topRight",
                  progressBarColor: "green",
                  pauseOnHover: true
                }); // Swal.fire({
                //   text: 'You Deleted The Record',
                // })

              } else {
                _this5.iziToast.show({
                  message: "Once Verifed Record Cannot Be Deleted",
                  image: "assets/images/user.png",
                  icon: 'ico ico-success',
                  theme: "dark",
                  layout: 2,
                  // imageWidth:50,
                  balloon: false,
                  position: "topRight",
                  progressBarColor: "green",
                  pauseOnHover: true
                }); // Swal.fire({
                //   text: 'Once Verifed Record Cannot Be Deleted',
                //   // type: 'warning',
                // });

              }

              _this5.ref.markForCheck();
            });
          }
        }, {
          key: "onClickOfDeleteOfEmailManagement",
          value: function onClickOfDeleteOfEmailManagement() {
            var _this6 = this;

            //console.log('this is delete call');
            this.accountBlockingService.onclickOfDeleteOfEmailManagement(this.selected, this.loggedInUser).subscribe(function (deletedRecord) {
              console.log(deletedRecord);

              if (deletedRecord == false) {
                // Swal.fire({
                //   text: 'Authorized Record Cannot be Deleted',
                //   // type: 'warning',
                // });
                _this6.iziToast.show({
                  message: "Authorized Record Cannot be Deleted",
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
              } else {
                _this6.iziToast.show({
                  message: "Record Deleted SuccessFully",
                  image: "assets/images/user.png",
                  icon: 'ico ico-success',
                  theme: "dark",
                  layout: 2,
                  // imageWidth:50,
                  balloon: false,
                  position: "topRight",
                  progressBarColor: "green",
                  pauseOnHover: true
                }); // Swal.fire('Record Deleted SuccessFully');

              }
            });
            this.ref.markForCheck();
          }
        }, {
          key: "onClickOfAuthOfEmailManagement",
          value: function onClickOfAuthOfEmailManagement() {
            var _this7 = this;

            console.log('this is auth');
            this.accountBlockingService.onClickOfAuthOfEmailManagement(this.selected, this.loggedInUser).subscribe(function (authresp) {
              console.log(authresp);

              if (authresp == false) {
                _this7.iziToast.show({
                  message: "Maker Cannot Authorize The Record",
                  image: "assets/images/user.png",
                  icon: 'ico ico-success',
                  theme: "dark",
                  layout: 2,
                  // imageWidth:50,
                  balloon: false,
                  position: "topRight",
                  progressBarColor: "green",
                  pauseOnHover: true
                }); // Swal.fire({
                //   text: 'Maker Cannot Authorize The Record',
                //   // type: 'warning',
                // });

              } else {
                _this7.iziToast.show({
                  message: "You Authorized The Record",
                  image: "assets/images/user.png",
                  icon: 'ico ico-success',
                  theme: "dark",
                  layout: 2,
                  // imageWidth:50,
                  balloon: false,
                  position: "topRight",
                  progressBarColor: "green",
                  pauseOnHover: true
                }); // Swal.fire({
                //   text: 'You Authorized The Record',
                // });

              }
            });
            this.ref.markForCheck();
          }
        }, {
          key: "onclickOfReopenOfEamilManagement",
          value: function onclickOfReopenOfEamilManagement() {
            var _this8 = this;

            //console.log('this is Reopen');
            this.accountBlockingService.onclickOfReopenOfEamilManagement(this.selected, this.loggedInUser).subscribe(function (reopenResp) {
              console.log(reopenResp);

              if (reopenResp == false) {
                _this8.iziToast.show({
                  message: "UnAuthorized Records Cannot Be Reopen",
                  image: "assets/images/user.png",
                  icon: 'ico ico-success',
                  theme: "dark",
                  layout: 2,
                  // imageWidth:50,
                  balloon: false,
                  position: "topRight",
                  progressBarColor: "green",
                  pauseOnHover: true
                }); // Swal.fire({
                //   text: 'UnAuthorized Records Cannot Be Reopen',
                //   // type: 'warning',
                // });

              } else {
                // Swal.fire({
                //   text: 'You Opened the record',
                //   // type: 'success',
                // });
                _this8.iziToast.show({
                  message: "You Opened the record",
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
          key: "onclickOfCloseOfEmailManagement",
          value: function onclickOfCloseOfEmailManagement() {
            var _this9 = this;

            console.log('this is close', this.selected, this.loggedInUser);
            this.accountBlockingService.onclickOfCloseOfEmailManagement(this.selected, this.loggedInUser).subscribe(function (closeResp) {
              console.log(closeResp);

              if (closeResp == false) {
                // Swal.fire({
                //   text: 'UnAuthorized Records Cannot Be Closed',
                //   // type: 'warning',
                // });
                _this9.iziToast.show({
                  message: "UnAuthorized Records Cannot Be Closed",
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
              } else {
                // Swal.fire({
                //   text: 'You Closed The Record',
                //   // type: 'success',
                // });
                _this9.iziToast.show({
                  message: "You Closed The Record",
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
          key: "logValue",
          value: function logValue() {
            var _this10 = this;

            // this.selected='Account_Block';
            console.log(this.selected); // //console.log(this.accountType);
            //console.log(this.email);
            // this.email.forEach(element => {
            //   element.emailType = this.selected;
            //   element.emailRequired = 'Y';
            // });

            console.log(this.route.snapshot.queryParams.emailType);

            if (this.route.snapshot.queryParams.emailType != null || this.route.snapshot.queryParams.emailType != undefined) {
              this.accountBlockingService.onclickOfEditOfEmailManagement(this.selected, this.loggedInUser, this.emails.value).subscribe(function (editResp) {
                console.log(editResp);

                if (editResp == false) {
                  // Swal.fire({
                  //   text: 'Failed To Modify The Record',
                  //   // type: 'warning',
                  // });
                  _this10.iziToast.show({
                    message: "Failed To Modify The Record",
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
                } else {
                  // Swal.fire({
                  //   text: 'Record Updated SuccessFully',
                  // });
                  _this10.iziToast.show({
                    message: "Record Updated SuccessFully",
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

            this.accountBlockingService.emailMaintenance(this.selected, this.loggedInUser, this.emails.value).subscribe(function (resp) {
              _this10.masterresponse = resp;
              console.log(resp);

              if (resp) {
                _this10.masterDatapermission = true;

                _this10.iziToast.show({
                  message: "Success",
                  image: "assets/images/user.png",
                  icon: 'ico ico-success',
                  theme: "dark",
                  layout: 2,
                  // imageWidth:50,
                  balloon: false,
                  position: "topRight",
                  progressBarColor: "green",
                  pauseOnHover: true
                }); //  Swal.fire('Success ');
                //  this.showSubmit=true;

              } else if (resp == null) {
                // this.masterDatapermission=false;
                // Swal.fire('Email Id Already Exit ');
                _this10.iziToast.show({
                  message: "Email Id Already Exit ",
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
              } else {
                _this10.iziToast.show({
                  message: "Unable to Save the Record",
                  image: "assets/images/user.png",
                  icon: 'ico ico-success',
                  theme: "dark",
                  layout: 2,
                  // imageWidth:50,
                  balloon: false,
                  position: "topRight",
                  progressBarColor: "green",
                  pauseOnHover: true
                }); //  Swal.fire('Unable to Save the Record ');

              }
            });
          }
        }]);

        return _EmailManagementCreateComponent;
      }();

      _EmailManagementCreateComponent.ɵfac = function EmailManagementCreateComponent_Factory(t) {
        return new (t || _EmailManagementCreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_account_blocking_service_service__WEBPACK_IMPORTED_MODULE_1__.AccountBlockingServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_users_users_service__WEBPACK_IMPORTED_MODULE_2__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](ng2_izitoast__WEBPACK_IMPORTED_MODULE_3__.Ng2IzitoastService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder));
      };

      _EmailManagementCreateComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _EmailManagementCreateComponent,
        selectors: [["npr-email-management-create"]],
        decls: 25,
        vars: 8,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["novalidate", "", 1, "formStyle", 3, "formGroup"], [1, "dbCardStyle", "cardWidth"], [1, "pageTitle", "text-center", "mb-md-4", "mb-3"], [1, "row", "gy-4"], [1, "col-10"], ["for", "roleName", 1, "formLbl"], ["aria-label", "Default select example", "formControlName", "accountType", 1, "form-select", 3, "value", "ngModel", "valueChange", "ngModelChange", "change"], ["value", "Account_Block"], ["class", "errorColor", 4, "ngIf"], ["formArrayName", "emails"], ["class", "col-12", 4, "ngFor", "ngForOf"], [1, "col-auto"], [1, "addIcon", "primarybg", 3, "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], ["class", "col-lg-12", 4, "ngIf"], ["class", "dbCardStyle", 4, "ngIf"], [1, "errorColor"], [4, "ngIf"], [1, "col-12"], [1, "row", "align-items-center"], [3, "formGroup"], ["for", "", 1, "formLbl"], ["type", "text", "id", "emailId", "formControlName", "emailId", "pattern", "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$", "required", "", "placeholder", "example@gmail.com", 1, "form-control", 3, "readonly", "name", "email"], [1, "col-2"], [1, "inputHide", 3, "click"], ["src", "assets/images/delete-icon.svg", "alt", "..."], [1, "col-lg-12"], [1, "row", "g-3", "pb-3", "pt-3"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], ["routerLink", "/email-management", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], ["class", "col-auto", 4, "ngIf"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], [1, "dbCardStyle"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."]],
        template: function EmailManagementCreateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Email Manangement");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h2", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Email IDs for Email-Notification");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Select an option");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("valueChange", function EmailManagementCreateComponent_Template_select_valueChange_12_listener($event) {
              return ctx.selected = $event;
            })("ngModelChange", function EmailManagementCreateComponent_Template_select_ngModelChange_12_listener($event) {
              return ctx.eamilAuditLog.emailType = $event;
            })("change", function EmailManagementCreateComponent_Template_select_change_12_listener($event) {
              return ctx.selectedChk($event.target.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Account_Block");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, EmailManagementCreateComponent_div_15_Template, 2, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](16, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, EmailManagementCreateComponent_div_17_Template, 12, 5, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function EmailManagementCreateComponent_Template_button_click_19_listener() {
              return ctx.addAddress();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "img", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, EmailManagementCreateComponent_div_22_Template, 8, 1, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, EmailManagementCreateComponent_div_23_Template, 13, 5, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, EmailManagementCreateComponent_div_24_Template, 86, 7, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.emailForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", ctx.selected)("ngModel", ctx.eamilAuditLog.emailType);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.emailForm.controls["accountType"].invalid && (ctx.emailForm.controls["accountType"].dirty || ctx.emailForm.controls["accountType"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.emails.controls);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.modifyScreen);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.modifyScreen || ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.eamilAuditLog.emailType != null);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.EmailValidator, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
        styles: [".errorColor[_ngcontent-%COMP%] {\n  color: #e6224a;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtYWlsLW1hbmFnZW1lbnQtY3JlYXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtBQUNKIiwiZmlsZSI6ImVtYWlsLW1hbmFnZW1lbnQtY3JlYXRlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yQ29sb3J7XHJcbiAgICBjb2xvcjogI2U2MjI0YTtcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    20829:
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
      869);
      /* harmony import */


      var _email_management_create_email_management_create_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./email-management-create/email-management-create.component */
      14234);
      /* harmony import */


      var _email_management_email_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./email-management/email-management.component */
      78157);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      1858);

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

      _EmailManagementRoutingModule.ɵfac = function EmailManagementRoutingModule_Factory(t) {
        return new (t || _EmailManagementRoutingModule)();
      };

      _EmailManagementRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _EmailManagementRoutingModule
      });
      _EmailManagementRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_EmailManagementRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    23505:
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
      7005);
      /* harmony import */


      var _email_management_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./email-management-routing.module */
      20829);
      /* harmony import */


      var _email_management_email_management_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./email-management/email-management.component */
      78157);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-datatables */
      98546);
      /* harmony import */


      var _email_management_create_email_management_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./email-management-create/email-management-create.component */
      14234);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      68465);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      1858);

      var _EmailManagementModule = /*#__PURE__*/_createClass(function _EmailManagementModule() {
        _classCallCheck(this, _EmailManagementModule);
      });

      _EmailManagementModule.ɵfac = function EmailManagementModule_Factory(t) {
        return new (t || _EmailManagementModule)();
      };

      _EmailManagementModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _EmailManagementModule
      });
      _EmailManagementModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _email_management_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmailManagementRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_EmailManagementModule, {
          declarations: [_email_management_email_management_component__WEBPACK_IMPORTED_MODULE_1__.EmailManagementComponent, _email_management_create_email_management_create_component__WEBPACK_IMPORTED_MODULE_3__.EmailManagementCreateComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _email_management_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmailManagementRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule]
        });
      })();
      /***/

    },

    /***/
    78157:
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
      30759);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      1858);
      /* harmony import */


      var src_app_shared_services_account_blocking_service_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/services/account-blocking-service.service */
      5074);
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

      function EmailManagementComponent_tr_20_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailManagementComponent_tr_20_Template_a_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);

            var email_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r2.getEmail(email_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var email_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate1"]("routerLink", "/email-management/create/", email_r1.emailType, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](email_r1.emailType);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](email_r1.inputBy);
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
            var _this11 = this;

            this.accountBlockingService.getAllEmail().subscribe(function (emaildata) {
              _this11.emaildata = emaildata;

              _this11.dtTrigger.next();

              console.log(_this11.emaildata);
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

      _EmailManagementComponent.ɵfac = function EmailManagementComponent_Factory(t) {
        return new (t || _EmailManagementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_account_blocking_service_service__WEBPACK_IMPORTED_MODULE_0__.AccountBlockingServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UsersService));
      };

      _EmailManagementComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _EmailManagementComponent,
        selectors: [["npr-email-management"]],
        decls: 21,
        vars: 3,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary"], ["datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [1, "primaryColor", 3, "routerLink", "click"]],
        template: function EmailManagementComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Email Manangement");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EmailManagementComponent_Template_a_click_7_listener() {
              return ctx.createEmail();
            });

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

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "account type ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "maker id");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, EmailManagementComponent_tr_20_Template, 6, 3, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.emaildata);
          }
        },
        directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlbWFpbC1tYW5hZ2VtZW50LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_views_email-management_email-management_module_ts-es5.js.map