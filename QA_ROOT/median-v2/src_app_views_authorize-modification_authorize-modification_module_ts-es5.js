(function () {
  "use strict";

  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_authorize-modification_authorize-modification_module_ts"], {
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

      var __spreadArray = undefined && undefined.__spreadArray || function (to, from, pack) {
        if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
        return to.concat(ar || Array.prototype.slice.call(from));
      };
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
            var pipe = el.ngPipeInstance;
            var pipeArgs = el.ngPipeArgs || []; // find index of column using `data` attr

            var i = columns.findIndex(function (e) {
              return e.data === el.data;
            }); // get <td> element which holds data using index

            var rowFromCol = row.childNodes.item(i); // Transform data with Pipe and PipeArgs

            var rowVal = $(rowFromCol).text();
            var rowValAfter = pipe.transform.apply(pipe, __spreadArray([rowVal], pipeArgs, false)); // Apply transformed string to <td>

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
    12291:
    /*!***************************************************************!*\
      !*** ./src/app/shared/models/pending-for-auth-details-dto.ts ***!
      \***************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "PendingForAuthDetailsDTO": function PendingForAuthDetailsDTO() {
          return (
            /* binding */
            _PendingForAuthDetailsDTO
          );
        },

        /* harmony export */
        "MedDeUploadDetailPKEntity": function MedDeUploadDetailPKEntity() {
          return (
            /* binding */
            _MedDeUploadDetailPKEntity
          );
        },

        /* harmony export */
        "MedDeUploadDetailHistPKEntity": function MedDeUploadDetailHistPKEntity() {
          return (
            /* binding */
            _MedDeUploadDetailHistPKEntity
          );
        },

        /* harmony export */
        "PendingForAuthDetailsHistEntity": function PendingForAuthDetailsHistEntity() {
          return (
            /* binding */
            _PendingForAuthDetailsHistEntity
          );
        }
        /* harmony export */

      });

      var _PendingForAuthDetailsDTO = /*#__PURE__*/_createClass(function _PendingForAuthDetailsDTO() {
        _classCallCheck(this, _PendingForAuthDetailsDTO);
      });

      var _MedDeUploadDetailPKEntity = /*#__PURE__*/_createClass(function _MedDeUploadDetailPKEntity() {
        _classCallCheck(this, _MedDeUploadDetailPKEntity);
      });

      var _MedDeUploadDetailHistPKEntity = /*#__PURE__*/_createClass(function _MedDeUploadDetailHistPKEntity() {
        _classCallCheck(this, _MedDeUploadDetailHistPKEntity);
      });

      var _PendingForAuthDetailsHistEntity = /*#__PURE__*/_createClass(function _PendingForAuthDetailsHistEntity() {
        _classCallCheck(this, _PendingForAuthDetailsHistEntity);
      });
      /***/

    },

    /***/
    28840:
    /*!***************************************************************************************!*\
      !*** ./src/app/views/authorize-modification/authorize-modification-routing.module.ts ***!
      \***************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthorizeModificationRoutingModule": function AuthorizeModificationRoutingModule() {
          return (
            /* binding */
            _AuthorizeModificationRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _authorize_modification_authorize_modification_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./authorize-modification/authorize-modification.component */
      95938);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: "",
        component: _authorize_modification_authorize_modification_component__WEBPACK_IMPORTED_MODULE_0__.AuthorizeModificationComponent
      }];

      var _AuthorizeModificationRoutingModule = /*#__PURE__*/_createClass(function _AuthorizeModificationRoutingModule() {
        _classCallCheck(this, _AuthorizeModificationRoutingModule);
      });

      _AuthorizeModificationRoutingModule.ɵfac = function AuthorizeModificationRoutingModule_Factory(t) {
        return new (t || _AuthorizeModificationRoutingModule)();
      };

      _AuthorizeModificationRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: _AuthorizeModificationRoutingModule
      });
      _AuthorizeModificationRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](_AuthorizeModificationRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    49136:
    /*!*******************************************************************************!*\
      !*** ./src/app/views/authorize-modification/authorize-modification.module.ts ***!
      \*******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthorizeModificationModule": function AuthorizeModificationModule() {
          return (
            /* binding */
            _AuthorizeModificationModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _authorize_modification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./authorize-modification-routing.module */
      28840);
      /* harmony import */


      var _authorize_modification_authorize_modification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./authorize-modification/authorize-modification.component */
      95938);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-datatables */
      50481);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _AuthorizeModificationModule = /*#__PURE__*/_createClass(function _AuthorizeModificationModule() {
        _classCallCheck(this, _AuthorizeModificationModule);
      });

      _AuthorizeModificationModule.ɵfac = function AuthorizeModificationModule_Factory(t) {
        return new (t || _AuthorizeModificationModule)();
      };

      _AuthorizeModificationModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _AuthorizeModificationModule
      });
      _AuthorizeModificationModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _authorize_modification_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthorizeModificationRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_AuthorizeModificationModule, {
          declarations: [_authorize_modification_authorize_modification_component__WEBPACK_IMPORTED_MODULE_1__.AuthorizeModificationComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _authorize_modification_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthorizeModificationRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule]
        });
      })();
      /***/

    },

    /***/
    95938:
    /*!*********************************************************************************************************!*\
      !*** ./src/app/views/authorize-modification/authorize-modification/authorize-modification.component.ts ***!
      \*********************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AuthorizeModificationComponent": function AuthorizeModificationComponent() {
          return (
            /* binding */
            _AuthorizeModificationComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_shared_models_pending_for_auth_details_dto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/models/pending-for-auth-details-dto */
      12291);
      /* harmony import */


      var src_app_shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/models/pending-for-auth-dto */
      27721);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var src_app_shared_models_users__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/models/users */
      92803);
      /* harmony import */


      var src_app_shared_models_audit_logs_dto_first_second__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/shared/models/audit-logs-dto-first-second */
      17283);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs */
      79441);
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
      50481); // import { ModalExcelAuthSecondComponent } from '../modals/modal-excel-auth-second/modal-excel-auth-second.component';
      // import { ToastService } from 'src/app/shared/services/toast.service';


      function AuthorizeModificationComponent_tr_23_Template(rf, ctx) {
        if (rf & 1) {
          var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AuthorizeModificationComponent_tr_23_Template_button_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r6);

            var data_r3 = restoredCtx.$implicit;
            var i_r4 = restoredCtx.index;

            var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r5.queryDetailsDataByParam(data_r3, i_r4);
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

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r3 = ctx.$implicit;
          var i_r4 = ctx.index;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpropertyInterpolate"]("id", "btnGetDetails" + i_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r3 == null ? null : data_r3.externalSysName);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r3 == null ? null : data_r3.batchNumber);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r3 == null ? null : data_r3.processName);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](12, 7, data_r3 == null ? null : data_r3.processingDate, "medium"));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](ctx_r0.extractFilename(data_r3 == null ? null : data_r3.fileName));

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r3 == null ? null : data_r3.currency);
        }
      }

      function AuthorizeModificationComponent_tr_51_button_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AuthorizeModificationComponent_tr_51_button_22_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r11);

            var data_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r9.viewOperation(data_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " View ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      function AuthorizeModificationComponent_tr_51_Template(rf, ctx) {
        if (rf & 1) {
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

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](22, AuthorizeModificationComponent_tr_51_button_22_Template, 2, 0, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r7 == null ? null : data_r7.account);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r7 == null ? null : data_r7.ccyCd);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r7 == null ? null : data_r7.branchCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r7 == null ? null : data_r7.amount);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r7 == null ? null : data_r7.lcyEquivalent);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r7 == null ? null : data_r7.drCr);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r7 == null ? null : data_r7.exchRate);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r7 == null ? null : data_r7.relatedAccount);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r7 == null ? null : data_r7.addlText);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](data_r7 == null ? null : data_r7.acumenJournal);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", data_r7.versionNo >= 1);
        }
      }

      function AuthorizeModificationComponent_button_55_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AuthorizeModificationComponent_button_55_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();

            return ctx_r12.approveSecondLevel();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Approve Data ");

          _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        }
      }

      var _AuthorizeModificationComponent = /*#__PURE__*/function () {
        function _AuthorizeModificationComponent(api, // public dialog: MatDialog,
        userApi, excelService // private toastService : ToastService,
        ) {
          _classCallCheck(this, _AuthorizeModificationComponent);

          this.api = api;
          this.userApi = userApi;
          this.excelService = excelService;
          this.respArray = [];
          this.dtOptions = {};
          this.dtTrigger1 = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
          this.dtTrigger2 = new rxjs__WEBPACK_IMPORTED_MODULE_10__.Subject();
          this.pendingForAuthData = [];
          this.pendingForAuthDetailsListAll = [];
          this.excelDataAuthSecondAuditlog = new src_app_shared_models_users__WEBPACK_IMPORTED_MODULE_2__.User();
          this.pipe = new _angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe('en-US');
          this.firstAndSecondAuthAuditLogRespDTO = new src_app_shared_models_audit_logs_dto_first_second__WEBPACK_IMPORTED_MODULE_3__.FirstAndSecondAuthAuditLogRespDTO(); // dataSource = new MatTableDataSource<PendingForAuthDetailsDTO>();
          // dataSourcePendingForAuth = new MatTableDataSource<PendingForAuthDTO>();

          this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormControl('');
          this.button_permission = {}; // pipe = new DatePipe('en-US');

          this.now = Date.now();
          this.dataForProcessScreen1 = [];
        }

        _createClass(_AuthorizeModificationComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            //     this.dataSource = new MatTableDataSource<PendingForAuthDetailsDTO>(
            //   this.pendingForAuthDetailsListAll
            // );
            // this.dataSourcePendingForAuth = new MatTableDataSource<PendingForAuthDTO>(
            //   this.pendingForAuthData
            // );
            this.firstLevelAuthorizationStatus = {};
            this.user_id = sessionStorage.getItem('user_id');
            this.role = sessionStorage.getItem('user_role');
            this.getPendingForAuthData();
            this.dtOptions[0] = {
              pagingType: 'full_numbers',
              pageLength: 5,
              columnDefs: [{
                type: 'date',
                targets: [4]
              }],
              order: [[4, 'desc']],
              processing: true,
              lengthMenu: [[5, 10, 20, 30, -1], [5, 10, 20, 30, "ALL"]],
              retrieve: true
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
            var _this2 = this;

            this.screenName = 'DataAmendAuthorization'; // this.role='ROLE1';

            this.userApi.getRoleScreenPermission(this.user_id, this.screenName, this.role).subscribe(function (res) {
              _this2.rolepermission = res;
              console.log(_this2.rolepermission);

              if (_this2.rolepermission) {
                _this2.button_permission = _this2.rolepermission[0]; // console.log( this.button_permission);
              }
            });
          }
        }, {
          key: "extractFilename",
          value: function extractFilename(path) {
            var pathArray = path.split('/');
            var lastIndex = pathArray.length - 1;
            return pathArray[lastIndex];
          }
        }, {
          key: "getAuditLogData",
          value: function getAuditLogData(getDetailsQueryToggleReqDTO) {
            var _this3 = this;

            this.api.getFirstAndSecondAuthAuditService(this.getDetailsQueryToggleReqDTO).subscribe(function (resp) {
              _this3.firstAndSecondAuthAuditLogRespDTO = resp;
            });
          }
        }, {
          key: "approveSecondLevel",
          value: function approveSecondLevel() {
            var _this4 = this;

            // console.log(this.pendingForAuthDetailsListAll);
            if (this.pendingForAuthDetailsListAll) {
              this.todaydate = this.pipe.transform(this.now, 'dd-MMM-yy');
              this.uploaddate = this.pipe.transform(this.pendingForAuthDetailsListAll[0].uploadDate, 'dd-MMM-yy');
              console.log('date for compare', this.todaydate, this.uploaddate);

              if (this.todaydate === this.uploaddate) {} else {
                console.log('inside if');
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire('Unable to authorized.', 'backdated authorization not allowed.');
                return;
              }
            }

            if (this.user_id === this.pendingForAuthDetailsListAll[0].inputBy) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire('Maker do not have permission to authorized.');
              return;
            }

            this.flag = false;
            this.progress = true;
            this.api.authorizeSecondLevel(this.pendingForAuthDetailsListAll, localStorage.getItem('currentUser')).subscribe(function (resp) {
              _this4.firstLevelAuthorizationStatus = resp;
              console.log(_this4.firstLevelAuthorizationStatus);

              if (_this4.firstLevelAuthorizationStatus) {
                _this4.progress = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire('You authorized the record to second level ');
              }

              if (!_this4.firstLevelAuthorizationStatus) {
                _this4.progress = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire('Error', 'You failed to authorize the record.');
              }
            });
            this.getPendingForAuthData(); // this.pendingForAuthDetailsListAll=[];
            // this.dataSource = new MatTableDataSource<PendingForAuthDetailsDTO>(
            //   this.pendingForAuthDetailsListAll
            // );
          }
        }, {
          key: "getAllSecondLevelAuthDetailsData",
          value: function getAllSecondLevelAuthDetailsData() {
            var _this5 = this;

            this.api.getSecondLevelAuthDetailsData().subscribe(function (resp) {
              _this5.pendingForAuthDetailsListAll = resp;

              _this5.dtTrigger2.next();
            });
          }
        }, {
          key: "queryDetailsDataByParam",
          value: function queryDetailsDataByParam(pendingForAuthDTO, i) {
            var _this6 = this;

            var btn = document.getElementById('btnGetDetails' + i);
            btn.innerHTML = '<span class="indicator-progress" >Please wait... <span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>';
            this.getDetailsQueryToggleReqDTO = new src_app_shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_1__.GetDetailsQueryToggleReqDTO(); // this.getDetailsQueryToggleReqDTO.externalSysName =
            //   pendingForAuthDTO.externalSysName;
            // this.getDetailsQueryToggleReqDTO.processName =
            //   pendingForAuthDTO.processName;
            // this.getDetailsQueryToggleReqDTO.processingDate =
            //   pendingForAuthDTO.processingDate;
            // this.getDetailsQueryToggleReqDTO.currency =
            //   pendingForAuthDTO.currency;

            this.getDetailsQueryToggleReqDTO.batchNumber = pendingForAuthDTO.batchNumber; // console.log("getDetailsQueryToggleReqDTO :");
            // console.log(this.getDetailsQueryToggleReqDTO);
            //

            this.api.queryDetailsDataByParamServiceSecond(pendingForAuthDTO.batchNumber).subscribe(function (resp) {
              _this6.pendingForAuthDetailsListAll = resp;
              btn.innerHTML = '<span>Get Details</span>';

              _this6.dtTrigger2.next();

              console.log(_this6.pendingForAuthDetailsListAll);

              if (_this6.pendingForAuthDetailsListAll.length > 0) {
                _this6.flag = true;
                _this6.flag1 = true;

                _this6.getAuditLogData(_this6.getDetailsQueryToggleReqDTO);
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire('Edit the data from modify excel screen', 'No data found.');
              }
            }); // new implementation on 23 aug
            // code changes
            // get audit log data
            // console.log(this.getDetailsQueryToggleReqDTO);
          }
        }, {
          key: "getDataWithOldAndNewValue",
          value: function getDataWithOldAndNewValue(pendingForAuthDTO) {
            var _this7 = this;

            this.deUploadPendingForAuthDTO = pendingForAuthDTO;
            this.getDetailsQueryToggleReqDTO = new src_app_shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_1__.GetDetailsQueryToggleReqDTO();
            this.getDetailsQueryToggleReqDTO.externalSysName = this.deUploadPendingForAuthDTO.externalSysName;
            this.getDetailsQueryToggleReqDTO.processName = this.deUploadPendingForAuthDTO.processName;
            this.getDetailsQueryToggleReqDTO.processingDate = this.deUploadPendingForAuthDTO.processingDate;
            this.getDetailsQueryToggleReqDTO.currency = this.deUploadPendingForAuthDTO.currency; //

            this.api.queryDetailsDataByParamService(this.getDetailsQueryToggleReqDTO).subscribe(function (resp) {
              _this7.detailsDataForFlex = resp; // console.log("hahaha");
              // console.log(this.detailsDataForFlex);
              //  this.flag = true;
            });
          }
        }, {
          key: "approveAndProcess",
          value: function approveAndProcess() {
            var _this8 = this;

            this.spinner = true;
            this.deUploadReqDTO = new src_app_shared_models_pending_for_auth_dto__WEBPACK_IMPORTED_MODULE_1__.DeUploadReqDTO();
            this.deUploadReqDTO.pendingForAuthDTO = this.deUploadPendingForAuthDTO;
            this.deUploadReqDTO.pendingForAuthDetailsDTOList = this.detailsDataForFlex; // this.flag = false;

            this.api.processDeUpload(this.deUploadReqDTO, this.user_id).subscribe(function (resp) {
              _this8.deUploadStatus = resp; // console.log(this.deUploadStatus);

              if (_this8.deUploadStatus.statusMessage === 'FAILURE') {
                _this8.spinner = false;

                _this8.openSnackBar('Data Failed to Upload In Demodule', '');
              }

              if (_this8.deUploadStatus.statusMessage === 'SUCCESS') {
                _this8.spinner = false;

                _this8.openSnackBar('Data Successfully Uploaded TO DeUpload', '');
              }
            }, function (error) {
              if (_angular_common_http__WEBPACK_IMPORTED_MODULE_13__.HttpErrorResponse) {
                _this8.spinner = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire('Error', 'Failed to connect to flexcube');
              }
            });
          }
        }, {
          key: "getPendingForAuthData",
          value: function getPendingForAuthData() {
            var _this9 = this;

            this.api.getPendingForAuthDataFirstError(this.user_id).subscribe(function (resp) {
              // console.log(resp);
              _this9.pendingForAuthData = resp;

              _this9.dtTrigger1.next();

              _this9.dtTrigger1.complete();

              console.log(_this9.pendingForAuthData);
            });
          }
        }, {
          key: "doValidationOfString",
          value: function doValidationOfString(a, b) {
            return a === b;
          }
        }, {
          key: "openSnackBar",
          value: function openSnackBar(message, action) {
            // this.snackBar.open(message, action, {
            //   duration: 2000
            // });
            sweetalert2__WEBPACK_IMPORTED_MODULE_4___default().fire(message);
          }
        }, {
          key: "viewOperation",
          value: function viewOperation(detailsObj) {
            // updated code on 3rd january by prabhat for view the detail data
            this.getDataWithOldAndNewValue(detailsObj);
            console.log(detailsObj);
            console.log(src_app_shared_models_pending_for_auth_details_dto__WEBPACK_IMPORTED_MODULE_0__.PendingForAuthDetailsDTO);
            this.dummyPendingForAuthDataDetailsSecond = new Array();
            var sourceCode = detailsObj.id.sourceCode;
            var branchCode = detailsObj.id.branchCode;
            var batchNo = detailsObj.id.batchNo;
            var initiationDate = detailsObj.id.initiationDate;
            var currNo = detailsObj.id.currNo;

            var _iterator = _createForOfIteratorHelper(this.pendingForAuthDetailsListAll),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var entry = _step.value;

                if (entry.id.sourceCode === sourceCode && entry.id.branchCode === branchCode && entry.id.batchNo === batchNo && entry.id.initiationDate === initiationDate && entry.id.currNo === currNo) {
                  this.dummyPendingForAuthDataDetailsSecond.push(entry);
                }
              } // console.log(this.dummyPendingForAuthDataDetailsSecond); // 1, 'string', false

            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            this.openDialog(this.dummyPendingForAuthDataDetailsSecond);
          }
        }, {
          key: "openDialog",
          value: function openDialog(detailsDtoList) {// const dialogRef = this.dialog.open(ModalExcelAuthSecondComponent, {
            //   data: detailsDtoList
            // });
            // dialogRef.afterClosed().subscribe(result => {
            // });
          }
        }, {
          key: "downloadData",
          value: function downloadData() {
            var _this10 = this;

            this.button1 = false;
            console.log(this.dummyPendingForAuthDataDetailsSecond);
            this.dummyPendingForAuthDataDetailsSecond.forEach(function (element) {
              _this10.dataForProcessScreen1.push({
                Source_Code: element.id.sourceCode,
                Process_Code: element.processCode,
                Branch_Code: element.id.branchCode,
                Batch_No: element.id.batchNo,
                Value_Date: _this10.pipe.transform(element.valueDate, 'dd-MMM-yy'),
                Account: element.account,
                Account_Branch: element.accountBranch,
                Currency: element.ccyCd,
                Amount: element.amount,
                DrCr: element.drCr,
                LcyEquivalent: element.lcyEquivalent,
                // Exch_Rate: element.id.exchRate,
                Curr_No: element.id.currNo,
                Addl_Text: element.addlText,
                TreasuryReference: element.acumenJournal,
                Trn_Code: element.txnCode,
                Period_Code: element.periodCode,
                Financial_Cycle: element.finCycle,
                //  Initiation_Date: this.pipe.transform(element.initiationDate, 'dd-MMM-yy'),
                Upload_Date: _this10.pipe.transform(element.uploadDate, 'dd-MMM-yy'),
                Input_By: element.inputBy,
                Input_Time: _this10.pipe.transform(element.inputTime, 'dd-MMM-yy'),
                //   UDF_Detail: element.udfDetails,
                //   Error_Desc:element.errorDesc,
                //   Validation_Error: element.validationError,
                Related_Customer: element.relCust,
                Related_Account: element.relatedAccount,
                Related_Reference: element.relatedRef
              });

              console.log(_this10.dataForProcessScreen1);
            });
            console.log('final data', this.dataForProcessScreen1);
            this.excelService.exportAsExcelFile(this.dataForProcessScreen1, 'Excel_Upload_Data'); // this.pendingForAuthDetailsDTOList[0]

            this.dataForProcessScreen1 = [''];
          }
        }]);

        return _AuthorizeModificationComponent;
      }();

      _AuthorizeModificationComponent.ɵfac = function AuthorizeModificationComponent_Factory(t) {
        return new (t || _AuthorizeModificationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_views_users_users_service__WEBPACK_IMPORTED_MODULE_6__.UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_excel_service__WEBPACK_IMPORTED_MODULE_7__.ExcelService));
      };

      _AuthorizeModificationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
        type: _AuthorizeModificationComponent,
        selectors: [["npr-authorize-modification"]],
        decls: 56,
        vars: 7,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle", "table-responsive"], ["id", "dbTable1", "datatable", "", 1, "dataTable", "table", "tableStyle", "nowrap", "vAlignMdl", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], ["id", "dbTable2", "datatable", "", 1, "dataTable", "table", "tableStyle", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [1, "btnCol", "mt-md-4", "mt-3"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "btnDarkGrey"], ["class", "btn smBtn btnPrimary", "style", "height: 90%", 3, "click", 4, "ngIf"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "id", "click"], [3, "click", 4, "ngIf"], [3, "click"], [1, "btn", "smBtn", "btnPrimary", 2, "height", "90%", 3, "click"]],
        template: function AuthorizeModificationComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3, "Authorize Modifications");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21, "currancy");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, AuthorizeModificationComponent_tr_23_Template, 17, 10, "tr", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](24, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](27, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](29, "account");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](30, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](31, "currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](32, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](33, "branch");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](35, "amount");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "lcy ammount");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](38, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](39, "dR/cr");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](41, "exchange rate");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, "related acc");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](44, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](45, "add text");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](47, "treasury reference");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](49, "Process");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](50, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](51, AuthorizeModificationComponent_tr_51_Template, 23, 11, "tr", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](52, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "a", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](54, "Export +");

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](55, AuthorizeModificationComponent_button_55_Template, 2, 0, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dtOptions", ctx.dtOptions[0])("dtTrigger", ctx.dtTrigger1);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](18);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.pendingForAuthData);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("dtOptions", ctx.dtOptions[1])("dtTrigger", ctx.dtTrigger2);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.pendingForAuthDetailsListAll);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.flag);
          }
        },
        directives: [angular_datatables__WEBPACK_IMPORTED_MODULE_8__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe],
        styles: ["table.tableStyle[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  color: #A6AAB5;\n  font-size: 9px;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  padding: 16px 13px;\n  border-bottom: 1px solid #F5F5F5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGhvcml6ZS1tb2RpZmljYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0FBQ0YiLCJmaWxlIjoiYXV0aG9yaXplLW1vZGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlLnRhYmxlU3R5bGUgdGhlYWQgdHIgdGgge1xyXG4gIGNvbG9yOiAjQTZBQUI1O1xyXG4gIGZvbnQtc2l6ZTogOXB4O1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDFweDtcclxuICBwYWRkaW5nOiAxNnB4IDEzcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNGNUY1RjUgO1xyXG59Il19 */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_views_authorize-modification_authorize-modification_module_ts-es5.js.map