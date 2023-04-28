(function () {
  "use strict";

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_account-closure-maintenance_account-closure-maintenance_module_ts"], {
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
    23637:
    /*!****************************************************************************!*\
      !*** ./src/app/shared/services/acc-closure-maintenance-service.service.ts ***!
      \****************************************************************************/

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
        "AccClosureMaintenanceServiceService": function AccClosureMaintenanceServiceService() {
          return (
            /* binding */
            _AccClosureMaintenanceServiceService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/config/app.constant */
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

      var _API_URL = src_app_shared_config_app_constant__WEBPACK_IMPORTED_MODULE_0__.AppConstants.acctCloserUrl;

      var _AccClosureMaintenanceServiceService = /*#__PURE__*/function () {
        function _AccClosureMaintenanceServiceService(http) {
          _classCallCheck(this, _AccClosureMaintenanceServiceService);

          this.http = http;
          this.Index = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject({
            index: ''
          });
        }

        _createClass(_AccClosureMaintenanceServiceService, [{
          key: "setIndex",
          value: function setIndex(index) {
            this.Index.next(index);
          }
        }, {
          key: "getIndex",
          value: function getIndex() {
            return this.Index.asObservable();
          } // ----------------final submit

        }, {
          key: "onfinalSubmit",
          value: function onfinalSubmit(accType, maker, data) {
            //return this.http.post<any>(`${API_URL}/accClosureMaint/save/${accType}/${maker}`,data);
            if (accType == '') {
              return this.http.post("".concat(_API_URL, "/accClosureMaint/save/").concat(accType, "/").concat(maker), data);
            } else {
              return this.http.post("".concat(_API_URL, "/accClosureMaint/save/").concat(accType, "/").concat(maker), data);
            }
          }
        }, {
          key: "gettingAccountClosureMaintenance",
          value: function gettingAccountClosureMaintenance() {
            return this.http.get("".concat(_API_URL, "/accClosureMaint/getSummary"));
          }
        }, {
          key: "gettingcompleteData",
          value: function gettingcompleteData(accountType) {
            return this.http.get("".concat(_API_URL, "/accClosureMaint/getAccountTypeRecords/").concat(accountType));
          }
        }, {
          key: "submittingTheEditedRecord",
          value: function submittingTheEditedRecord(data, acctype, maker) {
            console.log("in sevice", data);
            return this.http.put("".concat(_API_URL, "/accClosureMaint/modify/").concat(acctype, "/").concat(maker), data);
          }
        }, {
          key: "onAuthofAccMaint",
          value: function onAuthofAccMaint(acctype, maker) {
            return this.http.get("".concat(_API_URL, "/accClosureMaint/verify/").concat(acctype, "/").concat(maker));
          }
        }, {
          key: "deletingParticularRecord",
          value: function deletingParticularRecord(id, type, acctype, maker) {
            return this.http["delete"]("".concat(_API_URL, "/accClosureMaint/delete/").concat(id, "/").concat(type, "/").concat(acctype, "/").concat(maker));
          }
        }, {
          key: "onClosingTheRecord",
          value: function onClosingTheRecord(acctype, maker) {
            return this.http.get("".concat(_API_URL, "/accClosureMaint/close/").concat(acctype, "/").concat(maker));
          }
        }, {
          key: "onReopningTheRecord",
          value: function onReopningTheRecord(acctype, maker) {
            return this.http.get("".concat(_API_URL, "/accClosureMaint/reopen/").concat(acctype, "/").concat(maker));
          }
        }, {
          key: "onDelete",
          value: function onDelete(acctype, maker, data) {
            return this.http.post("".concat(_API_URL, "/accClosureMaint/delete/").concat(acctype, "/").concat(maker), data);
          }
        }]);

        return _AccClosureMaintenanceServiceService;
      }();

      _AccClosureMaintenanceServiceService.ɵfac = function AccClosureMaintenanceServiceService_Factory(t) {
        return new (t || _AccClosureMaintenanceServiceService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient));
      };

      _AccClosureMaintenanceServiceService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
        token: _AccClosureMaintenanceServiceService,
        factory: _AccClosureMaintenanceServiceService.ɵfac,
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

      _ToastService.ɵfac = function ToastService_Factory(t) {
        return new (t || _ToastService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ng2_izitoast__WEBPACK_IMPORTED_MODULE_0__.Ng2IzitoastService));
      };

      _ToastService.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
        token: _ToastService,
        factory: _ToastService.ɵfac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    81:
    /*!*************************************************************************************************!*\
      !*** ./src/app/views/account-closure-maintenance/account-closure-maintenance-routing.module.ts ***!
      \*************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AccountClosureMaintenanceRoutingModule": function AccountClosureMaintenanceRoutingModule() {
          return (
            /* binding */
            _AccountClosureMaintenanceRoutingModule
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


      var _account_closure_maintenance_summary_account_closure_maintenance_summary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./account-closure-maintenance-summary/account-closure-maintenance-summary.component */
      38393);
      /* harmony import */


      var _account_closure_maintenance_account_closure_maintenance_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./account-closure-maintenance/account-closure-maintenance.component */
      41593);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: "",
        component: _account_closure_maintenance_account_closure_maintenance_component__WEBPACK_IMPORTED_MODULE_2__.AccountClosureMaintenanceComponent,
        canDeactivate: [src_app_shared_guards_can_deactivate_guard__WEBPACK_IMPORTED_MODULE_0__.CanDeactivateGuard]
      }, {
        path: "account-closure-summary",
        component: _account_closure_maintenance_summary_account_closure_maintenance_summary_component__WEBPACK_IMPORTED_MODULE_1__.AccountClosureMaintenanceSummaryComponent
      }];

      var _AccountClosureMaintenanceRoutingModule = /*#__PURE__*/_createClass(function _AccountClosureMaintenanceRoutingModule() {
        _classCallCheck(this, _AccountClosureMaintenanceRoutingModule);
      });

      _AccountClosureMaintenanceRoutingModule.ɵfac = function AccountClosureMaintenanceRoutingModule_Factory(t) {
        return new (t || _AccountClosureMaintenanceRoutingModule)();
      };

      _AccountClosureMaintenanceRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _AccountClosureMaintenanceRoutingModule
      });
      _AccountClosureMaintenanceRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_AccountClosureMaintenanceRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    38393:
    /*!****************************************************************************************************************************************!*\
      !*** ./src/app/views/account-closure-maintenance/account-closure-maintenance-summary/account-closure-maintenance-summary.component.ts ***!
      \****************************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AccountClosureMaintenanceSummaryComponent": function AccountClosureMaintenanceSummaryComponent() {
          return (
            /* binding */
            _AccountClosureMaintenanceSummaryComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/models/fmosNewRolePermissions */
      35383);
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


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      77382);
      /* harmony import */


      var src_app_shared_services_acc_closure_maintenance_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/acc-closure-maintenance-service.service */
      23637);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! angular-datatables */
      50481);

      function AccountClosureMaintenanceSummaryComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountClosureMaintenanceSummaryComponent_div_6_Template_a_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r3);

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r2["new"]();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r0.roleCodes["new"].labelDescription);
        }
      }

      function AccountClosureMaintenanceSummaryComponent_tr_27_button_16_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountClosureMaintenanceSummaryComponent_tr_27_button_16_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r10);

            var data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r8.close(data_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function AccountClosureMaintenanceSummaryComponent_tr_27_button_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountClosureMaintenanceSummaryComponent_tr_27_button_17_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13);

            var data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r11.open(data_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function AccountClosureMaintenanceSummaryComponent_tr_27_button_18_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountClosureMaintenanceSummaryComponent_tr_27_button_18_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16);

            var data_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r14["delete"](data_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function AccountClosureMaintenanceSummaryComponent_tr_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "a", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountClosureMaintenanceSummaryComponent_tr_27_Template_a_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);

            var data_r4 = restoredCtx.$implicit;

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r17.edit(data_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountClosureMaintenanceSummaryComponent_tr_27_Template_button_click_14_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18);

            var data_r4 = restoredCtx.$implicit;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r19.auth(data_r4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, AccountClosureMaintenanceSummaryComponent_tr_27_button_16_Template, 2, 0, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, AccountClosureMaintenanceSummaryComponent_tr_27_button_17_Template, 2, 0, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, AccountClosureMaintenanceSummaryComponent_tr_27_button_18_Template, 2, 0, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r4.accountType);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r4.verifiedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r4.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](data_r4.inputBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](12, 9, data_r4.inputTime, "medium"));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !(data_r4.verifiedStatus == "U" || data_r4.verifiedStatus == "UNAUTHORIZED" || data_r4.verifiedStatus == "Unauthorized"));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (data_r4.recordStatus == "O" || data_r4.recordStatus == "Open" || data_r4.recordStatus == "OPEN") && (data_r4.verifiedOnce == "Y" || data_r4.verifiedOnce == "YES"));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", (data_r4.recordStatus == "CLOSED" || data_r4.recordStatus == "Close" || data_r4.recordStatus == "c" || data_r4.recordStatus == "C") && (data_r4.verifiedOnce == "YES" || data_r4.verifiedOnce == "Y"));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", data_r4.verifiedOnce == "N" || data_r4.verifiedOnce == "NO");
        }
      }

      var _c0 = function _c0() {
        return ["/dashboard"];
      };

      var _AccountClosureMaintenanceSummaryComponent = /*#__PURE__*/function () {
        function _AccountClosureMaintenanceSummaryComponent(roleService, accClosureService, router) {
          _classCallCheck(this, _AccountClosureMaintenanceSummaryComponent);

          this.roleService = roleService;
          this.accClosureService = accClosureService;
          this.router = router;
          this.dtOptions = {};
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__.Subject();
          this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels();
          this.statusArr = ['Authorized', 'Unauthorized', 'Open', 'Close'];
        }

        _createClass(_AccountClosureMaintenanceSummaryComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this2 = this;

            this.currentUser = localStorage.getItem("userFromLogin");
            setTimeout(function () {
              _this2.newRolePermissions();
            }, 2000);
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this2.roleCodes = message;
            });
            setTimeout(function () {
              console.log(_this2.roleCodes);
            }, 3000);
            this.dtOptions = {
              pagingType: "full_numbers",
              pageLength: 5,
              processing: true,
              columnDefs: [{
                type: 'date',
                'targets': [4]
              }],
              order: [[4, 'desc']],
              lengthMenu: [[5, 10, 20, 30, -1], [5, 10, 20, 30, "ALL"]]
            };
            this.getAccountClosureMaintenancesummary();
          }
        }, {
          key: "newRolePermissions",
          value: function newRolePermissions() {
            this.roleService.fetchScreenPermissions('Charge Maintenance');
          }
        }, {
          key: "getAccountClosureMaintenancesummary",
          value: function getAccountClosureMaintenancesummary() {
            var _this3 = this;

            this.accClosureService.gettingAccountClosureMaintenance().subscribe(function (summaryResp) {
              _this3.respArray = summaryResp;

              var _iterator = _createForOfIteratorHelper(summaryResp),
                  _step;

              try {
                var _loop = function _loop() {
                  var data = _step.value;
                  data.verifiedStatus = _this3.statusArr.find(function (i) {
                    return i.startsWith(data.verifiedStatus);
                  });
                  data.recordStatus = _this3.statusArr.find(function (i) {
                    return i.startsWith(data.recordStatus);
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

              _this3.dtTrigger.next();
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.dtTrigger.unsubscribe();
          }
        }, {
          key: "new",
          value: function _new() {
            localStorage.removeItem('idValue');
            this.accClosureService.setIndex({
              index: ""
            });
            this.router.navigateByUrl("/account-closure-maintenance");
          }
        }, {
          key: "auditLog",
          value: function auditLog() {
            if (this.accAuditDetails.recordStatus == "O") {
              this.accAuditDetails.recordStatus = "OPEN";
            }

            if (this.accAuditDetails.recordStatus == "C") {
              this.accAuditDetails.recordStatus = "CLOSE";
            }

            if (this.accAuditDetails.verifiedStatus == "U") {
              this.accAuditDetails.verifiedStatus = "UNAUTHORIZED";
            }

            if (this.accAuditDetails.verifiedStatus == "A") {
              this.accAuditDetails.verifiedStatus = "AUTHORIZED";
            }

            if (this.accAuditDetails.verifiedOnce == "Y") {
              this.accAuditDetails.verifiedOnce = "YES";
            }

            if (this.accAuditDetails.verifiedOnce == "N") {
              this.accAuditDetails.verifiedOnce = "NO";
            }
          }
        }, {
          key: "close",
          value: function close(data) {
            var _this4 = this;

            this.index = data.accountType;
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
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
                _this4.accClosureService.onClosingTheRecord(_this4.index, _this4.currentUser).subscribe(function (closeResp) {
                  _this4.accAuditDetails = closeResp;

                  if (_this4.accAuditDetails) {
                    _this4.auditLog();

                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: "Record is Closed",
                      icon: 'success'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "open",
          value: function open(data) {
            var _this5 = this;

            console.log(data);
            this.index = data.accountType;
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
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
                _this5.accClosureService.onReopningTheRecord(_this5.index, _this5.currentUser).subscribe(function (reopnResp) {
                  console.log(reopnResp);
                  _this5.accAuditDetails = reopnResp;

                  if (_this5.accAuditDetails.recordStatus === "O") {
                    _this5.auditLog();

                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: "Record is Reopened",
                      icon: 'success'
                    } // type: "success"
                    );
                  } else {
                    _this5.auditLog();

                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: "Record cannot be opened ",
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "delete",
          value: function _delete(data) {
            var _this6 = this;

            this.index = data;
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
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
              if (result.isConfirmed === true) {
                // this.payload.accountingEntries = this.AccountEntryForm.value.accountingEntries;
                // this.payload.userDefinedFields = this.UdfForm.value.userDefinedFields;
                // console.log("payload ", this.payload);
                console.log(_this6.index, _this6.currentUser, data);

                _this6.accClosureService.onDelete(_this6.index, _this6.currentUser, data).subscribe(function (reopnResp) {
                  console.log({
                    reopnResp: reopnResp
                  });

                  if (reopnResp === "Record Deleted Successfully") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: "Record is Deleted",
                      icon: 'success'
                    } // type: "success"
                    );

                    _this6.router.navigateByUrl('/account-closure-maintenance/account-closure-summary');
                  } else {
                    _this6.auditLog();

                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: "Record cannot be Deleted ",
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  console.log(error.error.text);

                  if (error.error.text === "Record Deleted Successfully") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: "Record is Deleted",
                      icon: 'success'
                    });

                    _this6.router.navigateByUrl('/account-closure-maintenance/account-closure-summary');
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: "Record cannot be Deleted ",
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "auth",
          value: function auth(data) {
            var _this7 = this;

            this.index = data.accountType;
            this.accAuditDetails = data;
            console.log(this.currentUser);
            console.log(this.accAuditDetails);
            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
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
                if (_this7.currentUser === _this7.accAuditDetails.inputBy) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    text: 'Maker Cannot Authorize Record!',
                    icon: 'error'
                  });
                  return;
                }

                _this7.accClosureService.onAuthofAccMaint(_this7.index, _this7.currentUser).subscribe(function (authResp) {
                  _this7.accAuditDetails = authResp;

                  _this7.auditLog();

                  if (_this7.accAuditDetails.accountType === "" || _this7.accAuditDetails.accountType == null) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: "Maker cannot authorize the record",
                      icon: 'error'
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: 'Record is Authorized',
                      icon: 'success'
                    }).then(function () {
                      return window.location.reload();
                    }); // Swal.fire({
                    //   text:"Record is Authorized"
                    // }
                    //   // type: "success"
                    // );
                  }
                });
              }
            });
          }
        }, {
          key: "edit",
          value: function edit(data) {
            this.accClosureService.setIndex({
              index: data.accountType
            });
            localStorage.setItem('idValue', data.accountType);
            this.router.navigateByUrl("/account-closure-maintenance");
          }
        }]);

        return _AccountClosureMaintenanceSummaryComponent;
      }();

      _AccountClosureMaintenanceSummaryComponent.ɵfac = function AccountClosureMaintenanceSummaryComponent_Factory(t) {
        return new (t || _AccountClosureMaintenanceSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_2__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_acc_closure_maintenance_service_service__WEBPACK_IMPORTED_MODULE_3__.AccClosureMaintenanceServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router));
      };

      _AccountClosureMaintenanceSummaryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _AccountClosureMaintenanceSummaryComponent,
        selectors: [["npr-account-closure-maintenance-summary"]],
        decls: 28,
        vars: 6,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [1, "table-responsive"], ["datatable", "", 1, "dataTable", "table", "tableStyle", "nowrap", "vAlignMdl", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["href", "javascript:void(0)", 1, "primaryColor", 3, "click"], ["title", "Authorize", 1, "btn", 2, "color", "red", 3, "disabled", "click"], ["src", "assets/images/authorize.svg", "alt", "Authorize", 1, "summaryIcon"], ["class", "btn", "style", "color: red", "title", "Close", 3, "click", 4, "ngIf"], ["class", "btn", "style", "color: red", "title", "Reopen", 3, "click", 4, "ngIf"], ["class", "btn", "style", "color: red", "title", "Delete", 3, "click", 4, "ngIf"], ["title", "Close", 1, "btn", 2, "color", "red", 3, "click"], ["src", "assets/images/CROSS1.svg", "alt", "...", 1, "summaryIcon"], ["title", "Reopen", 1, "btn", 2, "color", "red", 3, "click"], ["src", "assets/images/open.svg", "alt", "...", 1, "summaryIcon"], ["title", "Delete", 1, "btn", 2, "color", "red", 3, "click"], ["src", "assets/images/delete.svg", "alt", "...", 1, "summaryIcon"]],
        template: function AccountClosureMaintenanceSummaryComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Account Closure Maintenance Summary");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AccountClosureMaintenanceSummaryComponent_div_6_Template, 3, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "table", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Account Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17, "Auth Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19, "Record Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21, "Maker Id");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](25, "Action");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, AccountClosureMaintenanceSummaryComponent_tr_27_Template, 19, 12, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.roleCodes["new"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](5, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.respArray);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_4__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvdW50LWNsb3N1cmUtbWFpbnRlbmFuY2Utc3VtbWFyeS5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    95521:
    /*!*****************************************************************************************!*\
      !*** ./src/app/views/account-closure-maintenance/account-closure-maintenance.module.ts ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AccountClosureMaintenanceModule": function AccountClosureMaintenanceModule() {
          return (
            /* binding */
            _AccountClosureMaintenanceModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _account_closure_maintenance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./account-closure-maintenance-routing.module */
      81);
      /* harmony import */


      var _account_closure_maintenance_account_closure_maintenance_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./account-closure-maintenance/account-closure-maintenance.component */
      41593);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-datatables */
      50481);
      /* harmony import */


      var _account_closure_maintenance_summary_account_closure_maintenance_summary_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./account-closure-maintenance-summary/account-closure-maintenance-summary.component */
      38393);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AccountClosureMaintenanceModule = /*#__PURE__*/_createClass(function _AccountClosureMaintenanceModule() {
        _classCallCheck(this, _AccountClosureMaintenanceModule);
      });

      _AccountClosureMaintenanceModule.ɵfac = function AccountClosureMaintenanceModule_Factory(t) {
        return new (t || _AccountClosureMaintenanceModule)();
      };

      _AccountClosureMaintenanceModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
        type: _AccountClosureMaintenanceModule
      });
      _AccountClosureMaintenanceModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _account_closure_maintenance_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountClosureMaintenanceRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](_AccountClosureMaintenanceModule, {
          declarations: [_account_closure_maintenance_account_closure_maintenance_component__WEBPACK_IMPORTED_MODULE_1__.AccountClosureMaintenanceComponent, _account_closure_maintenance_summary_account_closure_maintenance_summary_component__WEBPACK_IMPORTED_MODULE_3__.AccountClosureMaintenanceSummaryComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _account_closure_maintenance_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccountClosureMaintenanceRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule]
        });
      })();
      /***/

    },

    /***/
    41593:
    /*!************************************************************************************************************************!*\
      !*** ./src/app/views/account-closure-maintenance/account-closure-maintenance/account-closure-maintenance.component.ts ***!
      \************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AccountClosureMaintenanceComponent": function AccountClosureMaintenanceComponent() {
          return (
            /* binding */
            _AccountClosureMaintenanceComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/models/fmosNewRolePermissions */
      35383);
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


      var src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/role.service */
      77382);
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      31443);
      /* harmony import */


      var src_app_shared_services_acc_closure_maintenance_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! src/app/shared/services/acc-closure-maintenance-service.service */
      23637);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function AccountClosureMaintenanceComponent_div_27_label_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Field No");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function AccountClosureMaintenanceComponent_div_27_label_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Field Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function AccountClosureMaintenanceComponent_div_27_label_10_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Field Value");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function AccountClosureMaintenanceComponent_div_27_a_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountClosureMaintenanceComponent_div_27_a_14_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r20);

            var i_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r18["delete"](i_r13, "userDefiendDTO");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "margin-top": a0
        };
      };

      function AccountClosureMaintenanceComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AccountClosureMaintenanceComponent_div_27_label_4_Template, 2, 0, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keypress", function AccountClosureMaintenanceComponent_div_27_Template_input_keypress_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r22);

            var ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r21.numberOnly($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AccountClosureMaintenanceComponent_div_27_label_7_Template, 2, 0, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](8, "input", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AccountClosureMaintenanceComponent_div_27_label_10_Template, 2, 0, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](11, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, AccountClosureMaintenanceComponent_div_27_a_14_Template, 2, 0, "a", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r13 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", i_r13 === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", !ctx_r0.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", i_r13 === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", !ctx_r0.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", i_r13 === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", !ctx_r0.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](9, _c0, i_r13 === 0 ? "30px" : "8px"));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.editFlag);
        }
      }

      function AccountClosureMaintenanceComponent_button_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountClosureMaintenanceComponent_button_30_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r23.addUdf();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function AccountClosureMaintenanceComponent_ng_container_40_label_4_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Charges");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function AccountClosureMaintenanceComponent_ng_container_40_label_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "ChargeType");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function AccountClosureMaintenanceComponent_ng_container_40_label_28_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Debit Credit");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function AccountClosureMaintenanceComponent_ng_container_40_label_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function AccountClosureMaintenanceComponent_ng_container_40_label_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Branch Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function AccountClosureMaintenanceComponent_ng_container_40_label_43_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Amount Tag");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function AccountClosureMaintenanceComponent_ng_container_40_label_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Trans Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function AccountClosureMaintenanceComponent_ng_container_40_label_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "label", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Narration");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function AccountClosureMaintenanceComponent_ng_container_40_a_53_Template(rf, ctx) {
        if (rf & 1) {
          var _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountClosureMaintenanceComponent_ng_container_40_a_53_Template_a_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r44);

            var i_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;

            var ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r42.delete1(i_r26, "accountingEntryDTO");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }
      }

      function AccountClosureMaintenanceComponent_ng_container_40_td_55_Template(rf, ctx) {
        if (rf & 1) {
          var _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountClosureMaintenanceComponent_ng_container_40_td_55_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r47);

            var i_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;

            var ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r45.addDebitCreditPair(i_r26);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Add Pair ");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().index;

          var ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r41.isAddPairVisible[i_r26] || !ctx_r41.AccountEntryForm.valid);
        }
      }

      var _c1 = function _c1(a0) {
        return {
          "display": a0
        };
      };

      function AccountClosureMaintenanceComponent_ng_container_40_Template(rf, ctx) {
        if (rf & 1) {
          var _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0, 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "fieldset", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "tr", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AccountClosureMaintenanceComponent_ng_container_40_label_4_Template, 2, 0, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "select", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AccountClosureMaintenanceComponent_ng_container_40_Template_select_ngModelChange_5_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r50);

            var ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r49.charges = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Please select");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "option", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Balance < Charge");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "option", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Balance >= Charge");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "option", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "None");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, AccountClosureMaintenanceComponent_ng_container_40_label_15_Template, 2, 0, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "select", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AccountClosureMaintenanceComponent_ng_container_40_Template_select_ngModelChange_16_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r50);

            var ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r51.chargeType = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, "Please select");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "option", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Excise Duty");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "option", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22, "None");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "RTGS");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "option", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "TT");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](28, AccountClosureMaintenanceComponent_ng_container_40_label_28_Template, 2, 0, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "select", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("ngModelChange", function AccountClosureMaintenanceComponent_ng_container_40_Template_select_ngModelChange_29_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r50);

            var ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r52.debitOrCredit = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31, "Please select");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "option", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](33, "Credit");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "option", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](35, "Debit");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](37, AccountClosureMaintenanceComponent_ng_container_40_label_37_Template, 2, 0, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "input", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, AccountClosureMaintenanceComponent_ng_container_40_label_40_Template, 2, 0, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](41, "input", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, AccountClosureMaintenanceComponent_ng_container_40_label_43_Template, 2, 0, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "input", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](46, AccountClosureMaintenanceComponent_ng_container_40_label_46_Template, 2, 0, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](47, "input", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](48, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, AccountClosureMaintenanceComponent_ng_container_40_label_49_Template, 2, 0, "label", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](50, "input", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](53, AccountClosureMaintenanceComponent_ng_container_40_a_53_Template, 2, 0, "a", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "tr", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](55, AccountClosureMaintenanceComponent_ng_container_40_td_55_Template, 3, 1, "td", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var i_r26 = ctx.index;
          var last_r29 = ctx.last;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroupName", i_r26);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", i_r26 === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r2.charges);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", null);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", i_r26 === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r2.chargeType);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", null);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", i_r26 === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngModel", ctx_r2.debitOrCredit);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngValue", null);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", i_r26 === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", i_r26 === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", i_r26 === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", i_r26 === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", i_r26 === 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](34, _c0, i_r26 === 0 ? "3rem" : "2rem"));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r2.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](36, _c1, i_r26 % 2 == 0 && last_r29 === false ? "none" : "block"));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r2.arrayAccountEntry && ctx_r2.isAddPairVisible[i_r26]);
        }
      }

      function AccountClosureMaintenanceComponent_button_43_Template(rf, ctx) {
        if (rf & 1) {
          var _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountClosureMaintenanceComponent_button_43_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r54);

            var ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r53.addAccountEntries();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", ctx_r3.isAddDisabled);
        }
      }

      function AccountClosureMaintenanceComponent_button_47_Template(rf, ctx) {
        if (rf & 1) {
          var _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountClosureMaintenanceComponent_button_47_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r56);

            var ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r55.submit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r4.accountTypeForm.valid || !ctx_r4.UdfForm.valid || !ctx_r4.AccountEntryForm.valid || !ctx_r4.submitFlag);
        }
      }

      function AccountClosureMaintenanceComponent_div_48_Template(rf, ctx) {
        if (rf & 1) {
          var _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountClosureMaintenanceComponent_div_48_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r58);

            var ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r57.edit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r5.roleCodes.edit.labelDescription);
        }
      }

      function AccountClosureMaintenanceComponent_div_49_Template(rf, ctx) {
        if (rf & 1) {
          var _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountClosureMaintenanceComponent_div_49_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r60);

            var ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r59.onAuthorizingTheRecord();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.roleCodes.auth.labelDescription);
        }
      }

      function AccountClosureMaintenanceComponent_div_50_Template(rf, ctx) {
        if (rf & 1) {
          var _r62 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountClosureMaintenanceComponent_div_50_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r62);

            var ctx_r61 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r61.ondelete();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r7.roleCodes["delete"].labelDescription);
        }
      }

      function AccountClosureMaintenanceComponent_div_51_Template(rf, ctx) {
        if (rf & 1) {
          var _r64 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountClosureMaintenanceComponent_div_51_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r64);

            var ctx_r63 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r63.onClosingTheRecord();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r8.roleCodes.close.labelDescription);
        }
      }

      function AccountClosureMaintenanceComponent_div_52_Template(rf, ctx) {
        if (rf & 1) {
          var _r66 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountClosureMaintenanceComponent_div_52_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r66);

            var ctx_r65 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r65.onReopningTheRecord();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r9.roleCodes.reopen.labelDescription);
        }
      }

      function AccountClosureMaintenanceComponent_button_54_Template(rf, ctx) {
        if (rf & 1) {
          var _r68 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccountClosureMaintenanceComponent_button_54_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r68);

            var ctx_r67 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

            return ctx_r67.onSubmittingTheAccMaintenanceClosureData();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Save");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx_r10.accountTypeForm.dirty && !ctx_r10.UdfForm.dirty && !ctx_r10.AccountEntryForm.dirty);
        }
      }

      function AccountClosureMaintenanceComponent_div_58_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "i", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 86);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](19, "img", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 86);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](32, "i", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 86);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "i", 92);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](47, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48, "Checker");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](49, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](50);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](51, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](52, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](54, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 93);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](56, "img", 94);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](57, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](58, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](59, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](60, "Checker Time Stamp");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](61, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](62);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](63, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](64, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](65, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](66, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](67, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](68, "div", 95);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](69, "i", 96);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](70, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](71, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](72, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](73, "First Time Authorization");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](76, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](77, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](78, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](79, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](80, "div", 97);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](81, "img", 98);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](82, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](83, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](84, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](85, "Authorization Status");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](86, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](87);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](88, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](89, "div", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](90, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](91, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](92, "div", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](93, "img", 99);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](94, "div", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](95, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](96, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](97, "Modification Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](98, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](99);

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
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r11.accAuditDetails.inputBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](26, 8, ctx_r11.accAuditDetails.inputTime, "MM/dd/yyyy, h:mm a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r11.accAuditDetails.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r11.accAuditDetails.verifiedBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](63, 11, ctx_r11.accAuditDetails.verifiedTime, "MM/dd/yyyy, h:mm a"));

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r11.accAuditDetails.verifiedOnce);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r11.accAuditDetails.verifiedStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r11.accAuditDetails.modNo);
        }
      }

      var _c2 = "/account-closure-maintenance/account-closure-summary";

      var _c3 = function _c3() {
        return [_c2];
      };

      var _AccountClosureMaintenanceComponent = /*#__PURE__*/function () {
        function _AccountClosureMaintenanceComponent(fb, roleService, toastService, accClosureService, router, _location, cdr) {
          _classCallCheck(this, _AccountClosureMaintenanceComponent);

          this.fb = fb;
          this.roleService = roleService;
          this.toastService = toastService;
          this.accClosureService = accClosureService;
          this.router = router;
          this._location = _location;
          this.cdr = cdr;
          this.payload = {};
          this.array = [];
          this.accAuditDetails = {};
          this.editFlag = true;
          this.submitFlag = false;
          this.roleCodes = new src_app_shared_models_fmosNewRolePermissions__WEBPACK_IMPORTED_MODULE_0__.permissionsLabels();
          this.formTouched1 = true;
          this.formTouched2 = true;
          this.isAddPairVisible = [];
          this.isAddDisabled = true;
          this.charges = null;
          this.debitOrCredit = null;
          this.chargeType = null;
        }

        _createClass(_AccountClosureMaintenanceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this8 = this;

            this.idValue = localStorage.getItem('idValue');
            setTimeout(function () {
              _this8.newRolePermissions();
            }, 2000);
            this.roleService.screenLabelList.subscribe(function (message) {
              return _this8.roleCodes = message;
            });
            setTimeout(function () {
              console.log(_this8.roleCodes);
            }, 3000);
            this.currentUser = localStorage.getItem("userFromLogin");
            this.AccountEntryForm = this.fb.group({
              accountingEntries: this.fb.array([this.createAccountingEntries({})])
            });
            this.isAddPairVisible.splice(0, 0, true);
            this.UdfForm = this.fb.group({
              userDefinedFields: this.fb.array([this.createUserDefinedFields()])
            });
            this.buildForm("");

            if (this.idValue != null) {
              this.accClosureService.setIndex({
                index: this.idValue
              });
            }

            this.accClosureService.getIndex().subscribe(function (resp) {
              if (resp.index) {
                _this8.index = resp.index;

                _this8.getRespBasedOnAccountType(resp.index);
              }
            });
            this.auditLog();
          }
        }, {
          key: "newRolePermissions",
          value: function newRolePermissions() {
            this.roleService.fetchScreenPermissions('Account Closure Maintenance');
          }
        }, {
          key: "buildForm",
          value: function buildForm(item) {
            this.accountTypeForm = this.fb.group({
              amountAccountType: [item ? item : ""]
            });
          }
        }, {
          key: "createUserDefinedFields",
          value: function createUserDefinedFields() {
            return this.fb.group({
              fieldName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
              fieldNo: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
              fieldValue: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
            });
          }
        }, {
          key: "createAccountingEntries",
          value: function createAccountingEntries(item) {
            return this.fb.group({
              account: [item ? item.account : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
              amountTag: [item ? item.amountTag : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
              branchCode: [item ? item.branchCode : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
              chargeType: [item ? item.chargeType : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
              charges: [item ? item.charges : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
              transactionCode: [item ? item.transactionCode : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
              debitOrCredit: [item ? item.debitOrCredit : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]],
              narration: [item ? item.narration : "", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
            });
          }
        }, {
          key: "addDebitCreditPair",
          value: function addDebitCreditPair(i) {
            this.accountingEntries = this.AccountEntryForm.get("accountingEntries");
            var len = this.AccountEntryForm.value.accountingEntries.length;
            var item = this.AccountEntryForm.value.accountingEntries[len - 1];
            item.debitOrCredit === 'C' ? item.debitOrCredit = 'D' : item.debitOrCredit = 'C';
            this.accountingEntries.push(this.createAccountingEntries(item));
            this.isAddPairVisible.splice(i, 1, false);
            this.isAddPairVisible.splice(i + 1, 0, false);
            this.isAddDisabled = false;
            this.accountingEntries.disable();
            this.AccountEntryForm.enable();
            this.submitFlag = true;
          }
        }, {
          key: "submit",
          value: function submit() {
            var _this9 = this;

            this.submitFlag = false;
            this.payload.accountingEntries = this.AccountEntryForm.value.accountingEntries;
            this.payload.userDefinedFields = this.UdfForm.value.userDefinedFields;
            console.log("payload ", this.payload);
            this.accClosureService.onfinalSubmit(this.accountTypeForm.value.amountAccountType, this.currentUser, this.payload).subscribe(function (finalBackendResp) {
              console.log("resp from backend ", finalBackendResp);
              _this9.accAuditDetails.recordStatus = "OPEN";
              _this9.accAuditDetails.verifiedStatus = "UNAUTHORIZED";
              _this9.accAuditDetails.verifiedOnce = "NO";
              _this9.accAuditDetails.inputBy = _this9.currentUser;
              _this9.accAuditDetails.inputTime = new Date();
              _this9.accAuditDetails.modNo = 1;
              console.log(_this9.accAuditDetails);
              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                text: "Record is Created",
                icon: 'success'
              });
              _this9.formTouched1 = !_this9.UdfForm.touched;
              _this9.formTouched2 = !_this9.AccountEntryForm.touched;
              _this9.editFlag = false;
              _this9.index = _this9.accountTypeForm.value.amountAccountType;

              _this9.auditLog();
            }), function (error) {
              console.log("error", error.status);
            };
          }
        }, {
          key: "addUdf",
          value: function addUdf() {
            this.userDefinedFields = this.UdfForm.get("userDefinedFields");
            this.userDefinedFields.push(this.createUserDefinedFields());
          }
        }, {
          key: "delete",
          value: function _delete(index, screenType) {
            if (index === 0) {
              this.UdfForm.reset();
            } else {
              console.log(this.UdfForm.value.userDefinedFields[index].id);
              this.onDeleteParticularRecord(this.UdfForm.value.userDefinedFields[index].id, screenType);
              var deleteRecord = this.UdfForm.get("userDefinedFields");
              deleteRecord.removeAt(index);
            }
          }
        }, {
          key: "canExit",
          value: function canExit() {
            var _this10 = this;

            var isExit = false;

            if (this.accountTypeForm.touched && (this.formTouched1 == true || this.formTouched2 == true)) {
              return sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
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

                  _this10.cdr.markForCheck();

                  return isExit;
                } else {
                  isExit = false;

                  _this10.cdr.markForCheck();

                  return isExit;
                }
              });
            } else {
              isExit = true;
              return new Promise(function (resolve, reject) {
                if (isExit === true) {
                  isExit = true;

                  _this10.cdr.markForCheck();

                  resolve(true);
                }
              });
            }
          }
        }, {
          key: "onDeleteParticularRecord",
          value: function onDeleteParticularRecord(id, screentype) {
            var _this11 = this;

            console.log(id, screentype); // console.log(this.accountTypeForm.value.amountAccountType);

            this.accClosureService.deletingParticularRecord(id, screentype, this.accountTypeForm.value.amountAccountType, this.currentUser).subscribe(function (deleteResp) {
              console.log(deleteResp);
              _this11.accAuditDetails = deleteResp; //  if (this.accAuditDetails.verifiedStatus == 'A') {
              // this.auditLog();
              // Swal.fire({
              //   text: 'Authorize Record Cannot be Deleted',
              //   icon: 'error'
              // })
              // }
              // else {

              sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                text: 'Record is Deleted',
                icon: 'success'
              } // type: "success"
              );

              _this11.router.navigate(['/account-closure-maintenance']); // }

            });
          }
        }, {
          key: "ondelete",
          value: function ondelete() {
            var _this12 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
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
              if (result.isConfirmed === true) {
                _this12.payload.accountingEntries = _this12.AccountEntryForm.value.accountingEntries;
                _this12.payload.userDefinedFields = _this12.UdfForm.value.userDefinedFields;
                console.log("payload ", _this12.payload);

                _this12.accClosureService.onDelete(_this12.index, _this12.currentUser, _this12.payload).subscribe(function (reopnResp) {
                  if (reopnResp === "Record Deleted Successfully") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: "Record is Deleted",
                      icon: 'success'
                    } // type: "success"
                    );

                    _this12.router.navigateByUrl('/account-closure-maintenance/account-closure-summary');
                  } else {
                    _this12.auditLog();

                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: "Record cannot be Deleted ",
                      icon: 'error'
                    });
                  }
                }, function (error) {
                  console.log(error.error.text);

                  if (error.error.text === "Record Deleted Successfully") {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: "Record is Deleted",
                      icon: 'success'
                    });

                    _this12.router.navigateByUrl('/account-closure-maintenance/account-closure-summary');
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: "Record cannot be Deleted ",
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "addAccountEntries",
          value: function addAccountEntries() {
            this.accountingEntries = this.AccountEntryForm.get("accountingEntries");
            this.accountingEntries.push(this.createAccountingEntries({}));
            this.isAddPairVisible.push(true);
            this.isAddDisabled = true;
            this.submitFlag = false;
          }
        }, {
          key: "delete1",
          value: function delete1(index, screenType) {
            var _this13 = this;

            if (index === 0) {
              this.AccountEntryForm.reset();
              var deleteRecord1 = this.AccountEntryForm.get("accountingEntries");
              deleteRecord1.removeAt(1);
              this.isAddDisabled = true;
              this.isAddPairVisible = [];
              this.isAddPairVisible.splice(0, 0, true);
              this.accountingEntries.enable();
            } else {
              console.log(this.AccountEntryForm.value.accountingEntries[index].id);

              if (this.AccountEntryForm.value.accountingEntries[index].id === undefined || this.AccountEntryForm.value.accountingEntries[index].id === null) {
                var list = [index + 1, index];
                list.forEach(function (element) {
                  var deleteRecord1 = _this13.AccountEntryForm.get("accountingEntries");

                  deleteRecord1.removeAt(element);
                });
                this.isAddPairVisible.splice(index, 2);
                this.isAddPairVisible.splice(0, 0, true);
                this.isAddDisabled = false;
              } else {
                var _list = [index + 1, index];
                this.onDeleteParticularRecord(this.AccountEntryForm.value.accountingEntries[index].id, screenType);

                _list.forEach(function (element) {
                  // console.log(this.AccountEntryForm.value.accountingEntries[element].id);
                  // this.onDeleteParticularRecord(this.AccountEntryForm.value.accountingEntries[element].id, screenType)
                  // this.onDeleteParticularRecord(this.AccountEntryForm.value.accountingEntries[element].id, screenType)
                  var deleteRecord1 = _this13.AccountEntryForm.get("accountingEntries");

                  deleteRecord1.removeAt(element);
                });

                this.isAddPairVisible.splice(index, 2);
                this.isAddDisabled = false;

                if (index >= 1) {
                  this.submitFlag = true;
                }
              }
            }
          }
        }, {
          key: "getRespBasedOnAccountType",
          value: function getRespBasedOnAccountType(index) {
            var _this14 = this;

            this.isAddPairVisible = [];
            this.editFlag = false;
            this.buildForm(index);
            this.accClosureService.gettingcompleteData(index).subscribe(function (resp) {
              _this14.array = resp.userDefinedFields;

              while (_this14.formArrUDF.length > 0) {
                _this14.formArrUDF.removeAt(_this14.formArrUDF.length - 1);
              }

              _this14.array.forEach(function (x) {
                _this14.formArrUDF.push(_this14.fb.group(x));
              });

              _this14.arrayAccountEntry = resp.accountingEntries;

              while (_this14.formArrAccountEntry.length > 0) {
                _this14.formArrAccountEntry.removeAt(_this14.formArrAccountEntry.length - 1);
              }

              _this14.arrayAccountEntry.forEach(function (x) {
                _this14.formArrAccountEntry.push(_this14.fb.group(x));

                _this14.isAddPairVisible.push(false);

                _this14.isAddDisabled = false;
              });
            });
            this.getAuditLog(index);
          }
        }, {
          key: "getAuditLog",
          value: function getAuditLog(index) {
            var _this15 = this;

            this.accClosureService.gettingAccountClosureMaintenance().subscribe(function (summaryResp) {
              _this15.filterAuditLog(summaryResp, index);

              _this15.auditLog();
            });
          }
        }, {
          key: "filterAuditLog",
          value: function filterAuditLog(summaryResp, index) {
            this.accAuditDetails = summaryResp.find(function (item) {
              return item.accountType == index;
            });
            console.log("audit log details ", this.accAuditDetails);
          }
        }, {
          key: "formArrUDF",
          get: function get() {
            return this.UdfForm.get("userDefinedFields");
          }
        }, {
          key: "formArrAccountEntry",
          get: function get() {
            return this.AccountEntryForm.get("accountingEntries");
          }
        }, {
          key: "edit",
          value: function edit() {
            this.editFlag = true;
          }
        }, {
          key: "onClosingTheRecord",
          value: function onClosingTheRecord() {
            var _this16 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
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
                _this16.accClosureService.onClosingTheRecord(_this16.index, _this16.currentUser).subscribe(function (closeResp) {
                  _this16.accAuditDetails = closeResp;

                  if (_this16.accAuditDetails) {
                    _this16.auditLog();

                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: "Record is Closed",
                      icon: 'success'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "onReopningTheRecord",
          value: function onReopningTheRecord() {
            var _this17 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
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
                _this17.accClosureService.onReopningTheRecord(_this17.index, _this17.currentUser).subscribe(function (reopnResp) {
                  console.log(reopnResp);
                  console.log(_this17.currentUser);
                  _this17.accAuditDetails = reopnResp;

                  if (_this17.accAuditDetails.recordStatus === "O") {
                    _this17.auditLog();

                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: "Record is Reopened",
                      icon: 'success'
                    } // type: "success"
                    );
                  } else {
                    _this17.auditLog();

                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: "Record cannot be opened ",
                      icon: 'error'
                    });
                  }
                });
              }
            });
          }
        }, {
          key: "auditLog",
          value: function auditLog() {
            if (this.accAuditDetails.recordStatus == "O") {
              this.accAuditDetails.recordStatus = "OPEN";
            }

            if (this.accAuditDetails.recordStatus == "C") {
              this.accAuditDetails.recordStatus = "CLOSE";
            }

            if (this.accAuditDetails.verifiedStatus == "U") {
              this.accAuditDetails.verifiedStatus = "UNAUTHORIZED";
            }

            if (this.accAuditDetails.verifiedStatus == "A") {
              this.accAuditDetails.verifiedStatus = "AUTHORIZED";
            }

            if (this.accAuditDetails.verifiedOnce == "Y") {
              this.accAuditDetails.verifiedOnce = "YES";
            }

            if (this.accAuditDetails.verifiedOnce == "N") {
              this.accAuditDetails.verifiedOnce = "NO";
            }
          }
        }, {
          key: "onAuthorizingTheRecord",
          value: function onAuthorizingTheRecord() {
            var _this18 = this;

            sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
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
                if (_this18.currentUser === _this18.accAuditDetails.inputBy) {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                    text: 'Maker Cannot Authorize Record!',
                    icon: 'error'
                  });
                  return;
                }

                _this18.accClosureService.onAuthofAccMaint(_this18.index, _this18.currentUser).subscribe(function (authResp) {
                  _this18.accAuditDetails = authResp;

                  _this18.auditLog();

                  if (_this18.accAuditDetails.accountType === "" || _this18.accAuditDetails.accountType == null) {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: "Maker cannot authorize the record",
                      icon: 'error'
                    });
                  } else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                      text: "Record is Authorized"
                    } // type: "success"
                    );
                  }
                });
              }
            });
          }
        }, {
          key: "onSubmittingTheAccMaintenanceClosureData",
          value: function onSubmittingTheAccMaintenanceClosureData() {
            var _this19 = this;

            this.payload.accountingEntries = this.AccountEntryForm.value.accountingEntries;
            this.payload.userDefinedFields = this.UdfForm.value.userDefinedFields;
            console.log("payload ", this.payload);
            console.log("this is submit of edit screen", this.payload);
            this.accClosureService.submittingTheEditedRecord(this.payload, this.index, this.currentUser).subscribe(function (editScreenResp) {
              console.log(editScreenResp);
              _this19.accAuditDetails = editScreenResp;

              if (!_this19.accAuditDetails) {
                _this19.auditLog();

                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  text: 'cannot save the record',
                  icon: 'error'
                });
              } else {
                _this19.index = _this19.accAuditDetails.accountType;
                _this19.formTouched1 = !_this19.UdfForm.touched;
                _this19.formTouched2 = !_this19.AccountEntryForm.touched;
                sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
                  text: 'Record is Updated ',
                  icon: 'success'
                });
              }

              _this19.getAuditLog(_this19.index);
            }, function (error) {
              console.log(error);
            });
            this.editFlag = false;
          }
        }, {
          key: "numberOnly",
          value: function numberOnly(event) {
            var charCode = event.which ? event.which : event.keyCode;

            if (charCode > 31 && (charCode < 48 || charCode > 57)) {
              return false;
            }

            return true;
          }
        }]);

        return _AccountClosureMaintenanceComponent;
      }();

      _AccountClosureMaintenanceComponent.ɵfac = function AccountClosureMaintenanceComponent_Factory(t) {
        return new (t || _AccountClosureMaintenanceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_role_service__WEBPACK_IMPORTED_MODULE_2__.RoleService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_3__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_acc_closure_maintenance_service_service__WEBPACK_IMPORTED_MODULE_4__.AccClosureMaintenanceServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_8__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef));
      };

      _AccountClosureMaintenanceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _AccountClosureMaintenanceComponent,
        selectors: [["npr-account-closure-maintenance"]],
        decls: 59,
        vars: 20,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [3, "formGroup"], [1, "dbCardStyle"], ["for", "name", 1, "formLbl"], [1, "colorRed"], [1, "row", "gy-4"], [1, "col-lg-4"], ["formControlName", "amountAccountType", "aria-label", "Default select example", 1, "form-select"], ["hidden", "", "value", "", "disabled", "", "selected", ""], ["value", "Dormant", 3, "disabled"], ["value", "OverDrawn", 3, "disabled"], ["value", "Unclaimed", 3, "disabled"], [1, "accountClosureCard", 3, "formGroup"], [1, "dbCardStyle", "p-0"], [1, "titleCol"], ["formArrayName", "userDefinedFields", 4, "ngFor", "ngForOf"], [1, "row", "g-3", "pt-4"], [1, "col-auto", 2, "margin-left", "20px"], ["class", "addIcon primarybg", 3, "click", 4, "ngIf"], [1, "formStyle", 3, "formGroup"], [1, "table-responsive"], ["id", "dbTable1", 1, "table", "tableStyle", "tableStyleSelect", "responsive", "nowrap", "vAlignMdl"], ["formArrayName", "accountingEntries", 4, "ngFor", "ngForOf"], [1, "accountClosureCard2"], [1, "col-auto"], ["class", "addIcon primarybg", 3, "disabled", "click", 4, "ngIf"], [1, ""], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], ["class", "btn smBtn minWdSmBtn btnPrimary", 3, "disabled", "click", 4, "ngIf"], ["class", "col-auto", 4, "ngIf"], ["class", "btn smBtn minWdSmBtn btnPrimary", "color", "primary", 3, "disabled", "click", 4, "ngIf"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["class", "dbCardStyle", 4, "ngIf"], ["formArrayName", "userDefinedFields"], [1, "cardCol"], [1, "row", "g-4", "align-items-center", 2, "margin-top", "5px", 3, "formGroupName"], [1, "col-lg-3"], ["for", "name", "class", "formLbl", 4, "ngIf"], ["id", "defaultValue", "type", "text", "formControlName", "fieldNo", "placeholder", "Field number", "value", "", "onlyNumber", "", 1, "form-control", 3, "readonly", "keypress"], ["id", "encryption", "type", "text", "formControlName", "fieldName", "placeholder", "Field name", "value", "", 1, "form-control", 3, "readonly"], ["id", "encryption", "type", "text", "formControlName", "fieldValue", "placeholder", "Field value", "value", "", 1, "form-control", 3, "readonly"], [3, "ngStyle"], ["class", "deleteIcon2", 3, "click", 4, "ngIf"], [1, "deleteIcon2", 3, "click"], ["src", "assets/images/delete-icon.svg", "alt", "..."], [1, "addIcon", "primarybg", 3, "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], ["formArrayName", "accountingEntries"], [3, "disabled"], [1, "borderStyle", 3, "formGroupName"], ["formControlName", "charges", "aria-label", "Default select example", 1, "form-select", 3, "ngModel", "ngModelChange"], ["hidden", "", "disabled", "", "selected", "", 3, "ngValue"], ["value", "L", 3, "disabled"], ["value", "G", 3, "disabled"], ["value", "N", 3, "disabled"], ["formControlName", "chargeType", "aria-label", "Default select example", 1, "form-select", 3, "ngModel", "ngModelChange"], ["value", "ED", 3, "disabled"], ["value", "RTGS", 3, "disabled"], ["value", "TT", 3, "disabled"], ["formControlName", "debitOrCredit", "aria-label", "Default select example", 1, "form-select", 3, "ngModel", "ngModelChange"], ["value", "C", 3, "disabled"], ["value", "D", 3, "disabled"], ["id", "fieldNo", "formControlName", "account", "type", "text", "placeholder", "Account", "value", "", 1, "form-control", 3, "readonly"], ["id", "branchCode", "formControlName", "branchCode", "type", "text", "placeholder", "Branch Code", "value", "", 1, "form-control", 3, "readonly"], ["id", "amountTag", "formControlName", "amountTag", "type", "text", "placeholder", "Amount Tag", "value", "", 1, "form-control", 3, "readonly"], ["id", "encryption", "formControlName", "transactionCode", "type", "text", "placeholder", "Transaction Code", "value", "", 1, "form-control", 3, "readonly"], ["id", "encryption", "formControlName", "narration", "type", "text", "placeholder", "Narration", "value", "", 1, "form-control", 3, "readonly"], [1, "borderStyle", 3, "ngStyle"], [4, "ngIf"], [1, "btnPrimary", 2, "margin-right", "8px", 3, "disabled", "click"], [1, "addIcon", "primarybg", 3, "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["color", "warn", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["color", "primary", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], [1, "fa", "fa-edit", "faClass"], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["aria-hidden", "true", 1, "fa", "fa-files-o", "faRecordStatus"], [1, "csCardStyleIcon", "csCardStyleIconBg4"], [1, "fa", "fa-check-square-o", "faClassChecker"], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], [1, "fa", "fa-shield", "faClassFirstTimeAuth"], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/authorize.svg", "alt", "...", 1, "modImage"], ["src", "assets/images/modification.svg", "alt", "...", 1, "modImage"]],
        template: function AccountClosureMaintenanceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Account Closure Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "label", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Account Type");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "span", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "select", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14, "--Please select--");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16, "Dormant ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18, " OverDrawn Accounts");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "option", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20, "Unclaimed ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](21, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "form", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](26, "User Defiend Field (UDF)");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](27, AccountClosureMaintenanceComponent_div_27_Template, 15, 11, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](30, AccountClosureMaintenanceComponent_button_30_Template, 3, 0, "button", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](31, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](32, "form", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "h4");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](36, "Accounting Entries");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](38, "table", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](40, AccountClosureMaintenanceComponent_ng_container_40_Template, 56, 38, "ng-container", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](41, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](42, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](43, AccountClosureMaintenanceComponent_button_43_Template, 3, 1, "button", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](44, "div", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](45, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](47, AccountClosureMaintenanceComponent_button_47_Template, 2, 1, "button", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](48, AccountClosureMaintenanceComponent_div_48_Template, 3, 1, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](49, AccountClosureMaintenanceComponent_div_49_Template, 3, 1, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](50, AccountClosureMaintenanceComponent_div_50_Template, 3, 1, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](51, AccountClosureMaintenanceComponent_div_51_Template, 3, 1, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](52, AccountClosureMaintenanceComponent_div_52_Template, 3, 1, "div", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](54, AccountClosureMaintenanceComponent_button_54_Template, 2, 1, "button", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](55, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](56, "a", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](57, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](58, AccountClosureMaintenanceComponent_div_58_Template, 100, 14, "div", 34);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.accountTypeForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("disabled", !ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.UdfForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.UdfForm.get("userDefinedFields")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.AccountEntryForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.AccountEntryForm.get("accountingEntries")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx.index);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.index && !ctx.editFlag && ctx.roleCodes.edit && ctx.accAuditDetails.recordStatus == "OPEN");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.index && !ctx.editFlag && ctx.accAuditDetails.verifiedStatus === "UNAUTHORIZED" && ctx.roleCodes.auth);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.index && !ctx.editFlag && ctx.accAuditDetails.verifiedOnce == "NO" && ctx.roleCodes["delete"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.index && !ctx.editFlag && ctx.accAuditDetails.recordStatus == "OPEN" && ctx.accAuditDetails.verifiedOnce == "YES" && ctx.roleCodes.close);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.index && !ctx.editFlag && ctx.accAuditDetails.recordStatus == "CLOSE" && ctx.accAuditDetails.verifiedOnce == "YES" && ctx.roleCodes.reopen);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.index && ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](19, _c3));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.accAuditDetails);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgStyle],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe],
        styles: [".isDisabled[_ngcontent-%COMP%] {\n  color: currentColor;\n  cursor: not-allowed;\n  pointer-events: none;\n  opacity: 0.4;\n  text-decoration: none;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #F5F5F5;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n  height: 12px;\n  background-color: #F5F5F5;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background-color: #000000;\n}\n\n#dbTable1[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  vertical-align: top;\n  min-width: 120px;\n  width: 50px;\n  border-spacing: 1.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY291bnQtY2xvc3VyZS1tYWludGVuYW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBRUMsb0RBQUE7RUFDQSx5QkFBQTtBQUFEOztBQUdBO0VBRUMsVUFBQTtFQUNDLFlBQUE7RUFDRCx5QkFBQTtBQUREOztBQUlBO0VBRUMseUJBQUE7QUFGRDs7QUFLQztFQUVDLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7QUFIRiIsImZpbGUiOiJhY2NvdW50LWNsb3N1cmUtbWFpbnRlbmFuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXNEaXNhYmxlZCB7XHJcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcclxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIG9wYWNpdHk6IDAuNDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2tcclxue1xyXG5cdC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsMCwwLDAuMyk7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhclxyXG57XHJcblx0d2lkdGg6IDZweDtcclxuICBoZWlnaHQ6IDEycHg7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcclxufVxyXG5cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYlxyXG57XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMDtcclxufVxyXG4jZGJUYWJsZTF7XHJcbiB0ZHsgXHJcbiAvLyBkaXNwbGF5OmlubGluZS1ibG9jazsgXHJcbiAgdmVydGljYWwtYWxpZ246dG9wOyBcclxuICBtaW4td2lkdGg6MTIwcHg7IFxyXG4gIHdpZHRoOjUwcHg7XHJcbiAgYm9yZGVyLXNwYWNpbmc6IDEuNTtcclxuIH1cclxufVxyXG4iXX0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_views_account-closure-maintenance_account-closure-maintenance_module_ts-es5.js.map