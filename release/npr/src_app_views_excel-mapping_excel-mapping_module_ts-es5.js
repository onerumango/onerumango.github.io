(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_excel-mapping_excel-mapping_module_ts"], {
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
    78735:
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
      1858);
      /* harmony import */


      var ng2_izitoast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ng2-izitoast */
      97385);

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
    51997:
    /*!****************************************************************************************!*\
      !*** ./src/app/views/excel-mapping/excel-mapping-edit/excel-mapping-edit.component.ts ***!
      \****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExcelMappingEditComponent": function ExcelMappingEditComponent() {
          return (
            /* binding */
            _ExcelMappingEditComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      33549);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      68465);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      73696);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      1858);
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      31781);
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      78735);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      7005);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      869);

      function ExcelMappingEditComponent_option_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", data_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r6);
        }
      }

      function ExcelMappingEditComponent_option_20_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", data_r7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r7);
        }
      }

      function ExcelMappingEditComponent_option_27_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", data_r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r8);
        }
      }

      function ExcelMappingEditComponent_div_39_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "label", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Data Starting Row");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "input", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r3.editFlag);
        }
      }

      function ExcelMappingEditComponent_div_40_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "input", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Is Header Present");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r4.editFlag);
        }
      }

      function ExcelMappingEditComponent_div_41_tr_27_option_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 53);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r15.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r15.type);
        }
      }

      function ExcelMappingEditComponent_div_41_tr_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "input", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "select", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ExcelMappingEditComponent_div_41_tr_27_Template_select_change_4_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r17);

            var i_r13 = restoredCtx.index;

            var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

            return ctx_r16.checkTypeStatus(i_r13);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "option", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Data Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ExcelMappingEditComponent_div_41_tr_27_option_7_Template, 2, 2, "option", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "label", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Mandatory");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "img", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r13 = ctx.index;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r9.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", !ctx_r9.editFlag ? "" : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r9.dataTypes);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r9.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r9.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r9.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r9.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r9.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r9.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r9.editFlag);
        }
      }

      function ExcelMappingEditComponent_div_41_div_33_button_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExcelMappingEditComponent_div_41_div_33_button_3_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r24.enableEditFlag();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ExcelMappingEditComponent_div_41_div_33_button_5_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExcelMappingEditComponent_div_41_div_33_button_5_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r26.finalSubmit(ctx_r26.updateMappingForm.value, ctx_r26.addForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ExcelMappingEditComponent_div_41_div_33_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 61);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExcelMappingEditComponent_div_41_div_33_div_6_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r28.copyMaping(ctx_r28.addForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Copy");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ExcelMappingEditComponent_div_41_div_33_div_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExcelMappingEditComponent_div_41_div_33_div_7_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r31);

            var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r30.onClickOfAuth(ctx_r30.addForm.value, ctx_r30.updateMappingForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ExcelMappingEditComponent_div_41_div_33_button_9_Template(rf, ctx) {
        if (rf & 1) {
          var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExcelMappingEditComponent_div_41_div_33_button_9_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r33);

            var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r32.onClickOfClose(ctx_r32.addForm.value, ctx_r32.updateMappingForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ExcelMappingEditComponent_div_41_div_33_button_11_Template(rf, ctx) {
        if (rf & 1) {
          var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExcelMappingEditComponent_div_41_div_33_button_11_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r35);

            var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3);

            return ctx_r34.onClickOfReopen(ctx_r34.addForm.value, ctx_r34.updateMappingForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Reopen");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      var _c0 = function _c0() {
        return ["/excel-mapping"];
      };

      function ExcelMappingEditComponent_div_41_div_33_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 54);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 55);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, ExcelMappingEditComponent_div_41_div_33_button_3_Template, 2, 0, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, ExcelMappingEditComponent_div_41_div_33_button_5_Template, 2, 0, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, ExcelMappingEditComponent_div_41_div_33_div_6_Template, 3, 0, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ExcelMappingEditComponent_div_41_div_33_div_7_Template, 3, 0, "div", 58);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, ExcelMappingEditComponent_div_41_div_33_button_9_Template, 2, 0, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, ExcelMappingEditComponent_div_41_div_33_button_11_Template, 2, 0, "button", 57);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "button", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Exit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r10.editFlag && ctx_r10.recordStatus == "OPEN");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx_r10.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.authStatus == "UNAUTHORIZED" && !ctx_r10.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.recordStatus == "OPEN" && !ctx_r10.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.recordStatus == "CLOSED" && !ctx_r10.editFlag && ctx_r10.authStatus == "AUTHORIZED");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c0));
        }
      }

      function ExcelMappingEditComponent_div_41_div_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 62);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 66);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 67);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 69);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "img", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 69);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "img", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 69);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "img", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 69);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "img", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 69);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "img", 79);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "Modification No");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](75);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 63);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 64);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 65);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 56);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "img", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 68);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 69);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r11.modifiedBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 7, ctx_r11.modifiedTime));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r11.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r11.authorizedBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](63, 9, ctx_r11.authorizedTime));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r11.version);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r11.authStatus);
        }
      }

      function ExcelMappingEditComponent_div_41_Template(rf, ctx) {
        if (rf & 1) {
          var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "form", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "table", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, "Name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "data type");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "mandatory");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "header name");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "date format");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "mapping column");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "delimeter");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "default value");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "repeated till next value");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](25, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "tbody", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, ExcelMappingEditComponent_div_41_tr_27_Template, 29, 11, "tr", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "button", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "span", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExcelMappingEditComponent_div_41_Template_span_click_31_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r37);

            var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r36.addSubArray();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](33, ExcelMappingEditComponent_div_41_div_33_Template, 15, 8, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, ExcelMappingEditComponent_div_41_div_34_Template, 88, 11, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx_r5.addForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r5.addForm.get("subArray")["controls"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", !ctx_r5.addForm.controls.subArray.valid ? true : null);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.mappingResponse);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r5.mappingResponse);
        }
      }

      var _ExcelMappingEditComponent = /*#__PURE__*/function () {
        function _ExcelMappingEditComponent(apiService, cdr, fb, toastService) {
          _classCallCheck(this, _ExcelMappingEditComponent);

          this.apiService = apiService;
          this.cdr = cdr;
          this.fb = fb;
          this.toastService = toastService;
          this.editFlag = false;
          this.extSysCode = null;
          this.excelprocess = null;
          this.submitted = false;
          this.tempStore = [];
          this.disablefetchbtn = false;
          this.copyData1 = true;
          this.dataTypes = [{
            id: 3,
            type: 'Clob',
            isActive: false
          }, {
            id: 1,
            type: 'Date',
            isActive: true
          }, {
            id: 2,
            type: 'Number',
            isActive: false
          }, {
            id: 4,
            type: 'VarChar',
            isActive: false
          }];
        }

        _createClass(_ExcelMappingEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.updateMappingForm = this.fb.group({
              extCode: [""],
              proCode: [""],
              startingRow: [""],
              currency: [""],
              sheetNumber: [""],
              headerRepeated: [""]
            });
            this.addForm = this.fb.group({
              subArray: this.fb.array([this.getSubArray()])
            });
            this.getExtCodeforDropdown();
            this.gettingSummaryData();
            this.currentUser = localStorage.getItem("userFromLogin");
          }
        }, {
          key: "getSubArray",
          value: function getSubArray() {
            return this.fb.group({
              columnnName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              dataType: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              mappingColumn: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[a-zA-Z \-#,@,%\']+')]],
              // mandatory: false,
              mandatory: [""],
              headerName: [''],
              dateFormat: [{
                value: '',
                disabled: true
              }],
              authStatus: [''],
              // modifiedBy: [this.currentUser.userId],
              authorizedBy: [''],
              version: [''],
              modifiedTime: [''],
              authorizedTime: [''],
              recordStatus: [''],
              delimeter: [''],
              defaultValue: [''],
              repeatedTillNextValue: ['']
            });
          }
        }, {
          key: "gettingSummaryData",
          value: function gettingSummaryData() {
            var _this2 = this;

            this.apiService.getexcelSummaryData().subscribe(function (resp) {
              console.log("EXT summry for edit screen", resp);
              _this2.summryResponse = resp;

              if (_this2.summryResponse) {
                _this2.extCode = _this2.summryResponse.extCode;

                _this2.updateMappingForm.controls.extCode.setValue(_this2.extCode);

                _this2.getProcess(_this2.extCode);
              }
            });
          }
        }, {
          key: "getExtCodeforDropdown",
          value: function getExtCodeforDropdown() {
            var _this3 = this;

            this.apiService.getAllExtsysNameAndProcessCodeOnAuthStatus().subscribe(function (response) {
              _this3.extSysData = response;
            });
          }
        }, {
          key: "getProcess",
          value: function getProcess(extCode) {
            var _this4 = this;

            this.apiService.getProcessNameByExtSysCode(extCode).subscribe(function (response) {
              _this4.processResp = response;
              _this4.processName = _this4.processResp;

              _this4.getExtSysNameByExtSysCode(extCode);
            });
          }
        }, {
          key: "getExtSysNameByExtSysCode",
          value: function getExtSysNameByExtSysCode(extSysCode) {
            var _this5 = this;

            this.apiService.getExtSysNameByExtSysCode(extSysCode).subscribe(function (data) {
              _this5.extNameValue = data;
            });
          }
        }, {
          key: "getProcessName",
          value: function getProcessName(processCode, extCodefromSummry) {
            var _this6 = this;

            this.extSysCode = extCodefromSummry;
            this.excelprocess = processCode;
            this.apiService.getCurrencyOnExtNameAndProcssCode(this.extSysCode, this.excelprocess, this.extCode).subscribe(function (data) {
              _this6.ccyData = data;
              console.log("Currency", _this6.ccyData);

              if (_this6.ccyData.length == 0) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'No Currency Found For the Process code!',
                  icon: 'warning'
                });
                return;
              }
            });
          }
        }, {
          key: "getCurrencyData",
          value: function getCurrencyData(event, type) {
            console.log("event", event, type); // if(data.sheetNumber != this.sheetNumber  && data.processCode != this.poojaprocess2 && data.currency != this.currency)
            // {
            //   this.disablefetchbtn = false;
            // }
            // if(data.sheetNumber != null  && data.processCode != null && data.currency != null)
            // {
            //   this.disablefetchbtn = false;
            // }
          }
        }, {
          key: "getAllMappingData",
          value: function getAllMappingData(formValue) {
            var _this7 = this;

            console.log("Form", formValue);
            var currenyVal = formValue.currency;
            var extCode = formValue.extCode;
            var proCode = formValue.proCode;
            var sheetNumber = formValue.sheetNumber;
            this.apiService.fetchAllName(extCode, proCode, currenyVal).subscribe(function (filenames) {
              _this7.fileNames = filenames;
            });
            this.apiService.getAllMappingByExtSysAndProcessCode(extCode, proCode, currenyVal, sheetNumber).subscribe(function (mappingResponse) {
              _this7.mappingResponse = mappingResponse;

              if (_this7.mappingResponse == null) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Excel mapping is not available with this sheet number!',
                  text: 'Please enter the correct sheet number',
                  icon: 'warning'
                });
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Data Fetched Successfully!',
                  icon: 'warning'
                });
                var startingRow = _this7.mappingResponse[0].startingRow;
                var headerRepeated = _this7.mappingResponse[0].headerRepeated;

                _this7.updateMappingForm.controls.startingRow.setValue(startingRow);

                _this7.updateMappingForm.controls.headerRepeated.setValue(headerRepeated);

                _this7.auditLog();

                _this7.patchData(_this7.mappingResponse);

                _this7.cdr.markForCheck();

                _this7.cdr.markForCheck();
              }
            });
          }
        }, {
          key: "patchData",
          value: function patchData(formdata) {
            var control = this.addForm.controls.subArray;
            control.controls = [];

            for (var i = 0; i < formdata.length; i++) {
              control.push(this.getSubArray());
            }

            this.addForm.patchValue({
              subArray: formdata
            });
          }
        }, {
          key: "addSubArray",
          value: function addSubArray() {
            var control = this.addForm.controls['subArray'];
            control.push(this.getSubArray());
          }
        }, {
          key: "auditLog",
          value: function auditLog() {
            this.authStatus = this.mappingResponse[0].authStatus;
            this.recordStatus = this.mappingResponse[0].recordStatus;
            this.modifiedBy = this.mappingResponse[0].modifiedBy;
            this.modifiedTime = this.mappingResponse[0].modifiedTime;
            this.authorizedBy = this.mappingResponse[0].authorizedBy;
            this.authorizedTime = this.mappingResponse[0].authorizedTime;
            this.version = this.mappingResponse[0].version;

            if (this.authStatus === 'U') {
              this.authStatus = 'UNAUTHORIZED';
            }

            if (this.authStatus === 'A') {
              this.authStatus = 'AUTHORIZED';
            }

            if (this.recordStatus === 'C') {
              this.recordStatus = 'CLOSED';
            }

            if (this.recordStatus === 'O') {
              this.recordStatus = 'OPEN';
            }
          }
        }, {
          key: "checkTypeStatus",
          value: function checkTypeStatus(i) {
            //console.log(i);
            var control = this.addForm.controls['subArray'];
            var fg = control.get([i]);

            if (fg.value.dataType == 'Date') {
              this.is_edit = false;
              fg.get('dateFormat').enable();
            } else {
              fg.get('dateFormat').disable();
            }
          }
        }, {
          key: "enableEditFlag",
          value: function enableEditFlag() {
            this.editFlag = true;
          }
        }, {
          key: "copyMaping",
          value: function copyMaping(excelCopyData) {
            this.mappingResponse = '';
            this.editafterfetch = true;
            this.copyData1 = false;
            this.processResp = [];
            this.excelprocess = '';
            excelCopyData.subArray.forEach(function (element) {
              element.id = null;
            });
            console.log(excelCopyData.subArray);
          }
        }, {
          key: "onClickOfAuth",
          value: function onClickOfAuth(addForm, updateForm) {
            var _this8 = this;

            this.extCodeValue = updateForm.extCode;
            this.extNameValue = updateForm.extCode;
            this.proCodeValue = updateForm.proCode;
            this.currencyValue = updateForm.currency;

            if (this.mappingResponse.modifiedBy === this.currentUser) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'Maker Cannot Authorized the Record!',
                icon: 'error'
              });
            } else {
              this.apiService.onAuthorizingTheRecordOfExcelMApping(addForm, this.extCodeValue, this.extNameValue, this.proCodeValue, this.currencyValue, this.currentUser).subscribe(function (authResp) {
                _this8.currentUser = authResp;

                _this8.auditLog();

                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'You Authorized the Record!',
                  icon: 'success'
                });
              });
            }
          }
        }, {
          key: "onClickOfClose",
          value: function onClickOfClose(addForm, updateForm) {
            var _this9 = this;

            this.extCodeValue = updateForm.extCode;
            this.extNameValue = updateForm.extCode;
            this.proCodeValue = updateForm.proCode;
            this.currencyValue = updateForm.currency;
            this.currentUser = this.mappingResponse.modifiedBy;
            this.apiService.onClcikOFCloseOfUpdateExcelMApping(addForm, this.extCodeValue, this.extNameValue, this.proCodeValue, this.currencyValue).subscribe(function (closeResp) {
              console.log(closeResp);
              _this9.mappingResponse = closeResp;

              if (_this9.mappingResponse) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'You Closed the Record!',
                  icon: 'success'
                });

                _this9.auditLog();
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Failed to Close the Recored!',
                  icon: 'error'
                });
              }
            }, function (error) {
              if (_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: 'Server Error',
                  icon: 'error'
                });
              }
            });
          }
        }, {
          key: "onClickOfReopen",
          value: function onClickOfReopen(addForm, updateForm) {
            var _this10 = this;

            this.extCodeValue = updateForm.extCode;
            this.extNameValue = updateForm.extCode;
            this.proCodeValue = updateForm.proCode;
            this.currencyValue = updateForm.currency;
            this.currentUser = this.mappingResponse.modifiedBy;
            this.apiService.onClcikOfReopenOfUpdateExcelMapping(addForm, this.extCodeValue, this.extNameValue, this.proCodeValue, this.currencyValue).subscribe(function (openResp) {
              console.log(openResp);
              _this10.mappingResponse = openResp;

              if (_this10.mappingResponse) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'You Re-Opened the Record!',
                  icon: 'success'
                });

                _this10.auditLog();
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Failed to Reopen the Record!',
                  icon: 'error'
                });
              }
            }, function (error) {
              if (_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: 'Server Error',
                  icon: 'error'
                });
              }
            });
          }
        }, {
          key: "removeSubArray",
          value: function removeSubArray(i, data) {
            // this.confirmService
            //   .confirm({ title: 'Confirm', message: 'Are you sure to delete?', ok: 'Yes', cancel: 'No' })
            //   .subscribe(res => {
            //     if (res) {
            this.getRowIdx(i); //   } else { return; }
            // });
          }
        }, {
          key: "getRowIdx",
          value: function getRowIdx(i) {
            var _this11 = this;

            var control = this.addForm.controls.subArray;
            var fg = control.get([i]);
            var idx = fg.get('id').value;
            this.apiService.deleteMappingRow(idx).subscribe(function (e) {
              if (e) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Record Deleted Successfully!',
                  icon: 'success'
                });
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Failed to Delete the Record!',
                  icon: 'error'
                });
              }

              control.removeAt(i);

              _this11.cdr.markForCheck();
            });
          }
        }, {
          key: "finalSubmit",
          value: function finalSubmit(excelForm, subArrayForm) {
            var _this12 = this;

            this.submitted = true;
            this.extCodeValue = excelForm.extCode;
            this.proCodeValue = excelForm.proCode;
            this.isCheckedValue = excelForm.headerRepeated;
            this.startingValue = excelForm.startingRow;
            this.currencyValue = excelForm.currency;
            this.sheetNumberValue = excelForm.sheetNumber;

            if (this.addForm.controls.subArray.invalid) {}

            this.apiService.columnData(subArrayForm, this.extCodeValue, this.proCodeValue, this.isCheckedValue, this.startingValue, this.extCodeValue, this.currencyValue, this.currentUser, this.sheetNumberValue).subscribe(function (response) {
              _this12.mappingResponse = response;

              if (_this12.mappingResponse) {
                _this12.is_edit = true;

                _this12.auditLog();

                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Mapped Successfully!',
                  icon: 'success'
                });

                _this12.updateMappingForm.reset();

                _this12.addForm.reset();

                return;
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Failed ExternalSystem And ProcessCode Already Mapped.',
                  icon: 'error'
                });

                _this12.updateMappingForm.reset();

                _this12.addForm.reset();
              }
            });
          }
        }]);

        return _ExcelMappingEditComponent;
      }();

      _ExcelMappingEditComponent.ɵfac = function ExcelMappingEditComponent_Factory(t) {
        return new (t || _ExcelMappingEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService));
      };

      _ExcelMappingEditComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _ExcelMappingEditComponent,
        selectors: [["npr-excel-mapping-edit"]],
        decls: 42,
        vars: 11,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "row", "gy-4", "align-items-end"], [1, "col-lg-2"], ["for", "extSystem", 1, "formLbl"], ["formControlName", "extCode", "required", "", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["selected", "", 1, "form-class"], ["class", "form-class", 3, "value", 4, "ngFor", "ngForOf"], ["for", "proCode", 1, "formLbl"], ["formControlName", "proCode", "required", "", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["for", "currency", 1, "formLbl"], ["formControlName", "currency", "required", "", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["for", "sheetNumber", 1, "formLbl"], ["id", "sheetNumber", "type", "text", "required", "", "formControlName", "sheetNumber", "placeholder", "Sheet Number", "value", "", 1, "form-control"], [1, "row", "gy-4", "col-lg-4"], [1, "col-lg-4"], ["href", "excel-mapping-new.html", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["class", "col-lg-2", 4, "ngIf"], ["class", "dbCardStyle", 4, "ngIf"], [1, "form-class", 3, "value"], ["for", "startingRow", 1, "formLbl"], ["id", "startingRow", "type", "text", "required", "", "formControlName", "startingRow", "placeholder", "Sheet Number", "value", "", 1, "form-control", 3, "readonly"], [1, "checkStyle"], ["type", "checkbox", "id", "headerRepeated", "formControlName", "headerRepeated", 3, "readonly"], ["for", "headerRepeated"], ["action", "", "novalidate", "", 1, "formStyle", 3, "formGroup"], [1, "table-responsive"], ["id", "dbTable1", 1, "table", "tableStyle", "responsive", "nowrap", "vAlignMdl"], ["formArrayName", "subArray"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 1, "addIcon", "primarybg"], [3, "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], ["class", "col-lg-12", 4, "ngIf"], [3, "formGroupName"], ["id", "sourceCode", "type", "text", "formControlName", "columnnName", "placeholder", "Name", "value", "", 1, "form-control", 3, "readonly"], ["formControlName", "dataType", "placeholder", "Choose DataType", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["selected", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "checkbox", "formControlName", "mandatory", "id", "mandatoryCheck", 3, "readonly"], ["for", "mandatoryCheck"], ["id", "headerName", "type", "text", "formControlName", "headerName", "placeholder", "Header Name", "value", "", 1, "form-control", 3, "readonly"], ["id", "dateFormat", "type", "text", "formControlName", "dateFormat", "placeholder", "Date Format", "value", "", 1, "form-control", 3, "readonly"], ["id", "mappingColumn", "type", "text", "formControlName", "mappingColumn", "placeholder", "Mapping Column", "value", "", 1, "form-control", 3, "readonly"], ["id", "delimeter", "type", "text", "formControlName", "delimeter", "placeholder", "Delimeter", "value", "", 1, "form-control", 3, "readonly"], ["id", "defaultValue", "type", "text", "formControlName", "defaultValue", "placeholder", "Default Value", "value", "", 1, "form-control", 3, "readonly"], ["id", "repeatedTillNextValue", "type", "text", "formControlName", "repeatedTillNextValue", "placeholder", "Repeated Till Next Value", "value", "", 1, "form-control", 3, "readonly"], ["href", "javascript:void(0)", 1, "deleteIcon2"], ["src", "assets/images/delete-icon.svg", "alt", "..."], [3, "value"], [1, "col-lg-12"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], [1, "col-auto"], ["class", "btn smBtn minWdSmBtn btnPrimary", 3, "click", 4, "ngIf"], ["class", "col-auto", 4, "ngIf"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."]],
        template: function ExcelMappingEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Update/Copy Mapping");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "form", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "External System");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ExcelMappingEditComponent_Template_select_change_10_listener() {
              return ctx.getProcess(ctx.updateMappingForm.get("extCode").value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Select External System ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](13, ExcelMappingEditComponent_option_13_Template, 2, 2, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Process Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "select", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ExcelMappingEditComponent_Template_select_change_17_listener() {
              return ctx.getProcessName(ctx.updateMappingForm.get("proCode").value, ctx.updateMappingForm.get("extCode").value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "Select Process Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](20, ExcelMappingEditComponent_option_20_Template, 2, 2, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ExcelMappingEditComponent_Template_select_change_24_listener($event) {
              return ctx.getCurrencyData($event, "currency");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Select Currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, ExcelMappingEditComponent_option_27_Template, 2, 2, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Sheet Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "input", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExcelMappingEditComponent_Template_button_click_34_listener() {
              return ctx.getAllMappingData(ctx.updateMappingForm.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "Fetch ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](38, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](39, ExcelMappingEditComponent_div_39_Template, 4, 1, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](40, ExcelMappingEditComponent_div_40_Template, 5, 1, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](41, ExcelMappingEditComponent_div_41_Template, 35, 5, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.updateMappingForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", !ctx.editFlag ? "" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.extSysData);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.processName);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.ccyData);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.updateMappingForm.invalid);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mappingResponse);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mappingResponse);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.mappingResponse);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupName, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
        styles: [".form-class[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #797979;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-bottom: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-left: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-right: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4Y2VsLW1hcHBpbmctZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBRUEsd0VBQUE7QUFBSiIsImZpbGUiOiJleGNlbC1tYXBwaW5nLWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jbGFzcyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogLjM3NXJlbSAuNzVyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiAjNzk3OTc5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWJlYjtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ViZWJlYjtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    89309:
    /*!**************************************************************************************!*\
      !*** ./src/app/views/excel-mapping/excel-mapping-new/excel-mapping-new.component.ts ***!
      \**************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExcelMappingNewComponent": function ExcelMappingNewComponent() {
          return (
            /* binding */
            _ExcelMappingNewComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      68465);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      73696);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      1858);
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      31781);
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      78735);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      869);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      7005);

      function ExcelMappingNewComponent_option_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", data_r3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r3);
        }
      }

      function ExcelMappingNewComponent_option_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", data_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](data_r4);
        }
      }

      function ExcelMappingNewComponent_tr_75_option_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", item_r8.type);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r8.type);
        }
      }

      function ExcelMappingNewComponent_tr_75_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "input", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "select", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ExcelMappingNewComponent_tr_75_Template_select_change_4_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);

            var i_r6 = restoredCtx.index;

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r9.checkTypeStatus(i_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Data Type");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, ExcelMappingNewComponent_tr_75_option_7_Template, 2, 2, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "input", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "label", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Mandatory");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "input", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "input", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "input", 47);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "input", 48);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "input", 49);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "button", 50);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExcelMappingNewComponent_tr_75_Template_span_click_27_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);

            var i_r6 = restoredCtx.index;

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r11.removeSubArray(i_r6);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](28, "img", 51);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r6 = ctx.index;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r6);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.dataTypes);
        }
      }

      var _c0 = function _c0() {
        return ["/excel-mapping/excel-mapping-edit"];
      };

      var _c1 = function _c1() {
        return ["/dashbaord"];
      };

      var _c2 = function _c2() {
        return ["/excel-mapping"];
      };

      var _ExcelMappingNewComponent = /*#__PURE__*/function () {
        function _ExcelMappingNewComponent(apiService, fb, toastService) {
          _classCallCheck(this, _ExcelMappingNewComponent);

          this.apiService = apiService;
          this.fb = fb;
          this.toastService = toastService;
          this.extSysCode = null;
          this.excelprocess = null;
          this.submitted = false;
          this.dataTypes = [{
            id: 3,
            type: 'Clob',
            isActive: false
          }, {
            id: 1,
            type: 'Date',
            isActive: true
          }, {
            id: 2,
            type: 'Number',
            isActive: false
          }, {
            id: 4,
            type: 'VarChar',
            isActive: false
          }];
        }

        _createClass(_ExcelMappingNewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.excelMappingForm = this.fb.group({
              extCode: [""],
              proCode: [""],
              startingRow: [""],
              currency: [""],
              sheetNumber: [""],
              headerRepeated: [""]
            });
            this.addForm = this.fb.group({
              subArray: this.fb.array([this.getSubArray()])
            });
            this.getAllExtsysNameAndProcessCodeOnAuthStatus(); // localStorage.setItem("userIdForChangePassword", localStorage.getItem("currentUser"));

            this.currentUser = localStorage.getItem("userFromLogin");
          }
        }, {
          key: "getSubArray",
          value: function getSubArray() {
            return this.fb.group({
              columnnName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              dataType: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              mappingColumn: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(1), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern('^[a-zA-Z \-#,@,%\']+')]],
              // mandatory: false,
              mandatory: [""],
              headerName: [''],
              dateFormat: [{
                value: '',
                disabled: true
              }],
              authStatus: [''],
              // modifiedBy: [this.currentUser.userId],
              modifiedBy: ['JILU'],
              authorizedBy: [''],
              version: [''],
              modifiedTime: [''],
              authorizedTime: [''],
              recordStatus: [''],
              delimeter: [''],
              defaultValue: [''],
              repeatedTillNextValue: ['']
            });
          }
        }, {
          key: "getAllExternalSystem",
          value: function getAllExternalSystem() {
            var _this13 = this;

            this.apiService.getAllExtCode().subscribe(function (response) {
              _this13.extSysData = response;
            });
          }
        }, {
          key: "getAllExtsysNameAndProcessCodeOnAuthStatus",
          value: function getAllExtsysNameAndProcessCodeOnAuthStatus() {
            var _this14 = this;

            this.apiService.getAllExtsysNameAndProcessCodeOnAuthStatus().subscribe(function (response) {
              _this14.extSysData = response;
            });
          }
        }, {
          key: "getExtSysNameByExtSysCode",
          value: function getExtSysNameByExtSysCode(extSysCode) {
            var _this15 = this;

            this.apiService.getExtSysNameByExtSysCode(extSysCode).subscribe(function (data) {
              _this15.extNameValue = data;
            });
          }
        }, {
          key: "getProcess",
          value: function getProcess(extSysCode) {
            var _this16 = this;

            this.apiService.getProcessNameByExtSysCode(extSysCode).subscribe(function (response) {
              _this16.processResp = response;
              _this16.processName = _this16.processResp;

              _this16.getExtSysNameByExtSysCode(extSysCode);
            });
          }
        }, {
          key: "getProcessName",
          value: function getProcessName(processCode, extSysCode) {
            this.extSysCode = extSysCode;
            this.excelprocess = processCode;
          }
        }, {
          key: "addSubArray",
          value: function addSubArray() {
            var control = this.addForm.controls['subArray'];
            control.push(this.getSubArray());
          }
        }, {
          key: "patchData",
          value: function patchData(formdata) {
            console.log("formdata");
            var control = this.addForm.controls['subArray'];

            for (var i = 0; i < formdata.length; i++) {
              control.push(this.getSubArray());
            }

            this.addForm.patchValue({
              subArray: formdata
            });
          }
        }, {
          key: "removeSubArray",
          value: function removeSubArray(i) {
            var control = this.addForm.controls['subArray'];
            control.removeAt(i);
          }
        }, {
          key: "clearAllSubArray",
          value: function clearAllSubArray() {
            var control = this.addForm.controls['subArray'];

            while (control.length) {
              control.removeAt(control.length - 1);
            }

            control.clearValidators();
          }
        }, {
          key: "f",
          get: function get() {
            return this.addForm.controls;
          }
        }, {
          key: "t",
          get: function get() {
            return this.f.subArray;
          }
        }, {
          key: "checkTypeStatus",
          value: function checkTypeStatus(i) {
            //console.log(i);
            var control = this.addForm.controls['subArray'];
            var fg = control.get([i]);

            if (fg.value.dataType == 'Date') {
              this.is_edit = false;
              fg.get('dateFormat').enable();
            } else {
              fg.get('dateFormat').disable();
            }
          }
        }, {
          key: "finalSubmit",
          value: function finalSubmit(excelForm, subArrayForm) {
            var _this17 = this;

            this.submitted = true;
            this.extCodeValue = excelForm.extCode;
            this.proCodeValue = excelForm.proCode;
            this.isCheckedValue = excelForm.headerRepeated;
            this.startingValue = excelForm.startingRow;
            this.currencyValue = excelForm.currency;
            this.sheetNumberValue = excelForm.sheetNumber;

            if (this.addForm.controls.subArray.invalid) {}

            this.apiService.columnData(subArrayForm, this.extCodeValue, this.proCodeValue, this.isCheckedValue, this.startingValue, this.extCodeValue, this.currencyValue, this.currentUser, this.sheetNumberValue).subscribe(function (response) {
              _this17.dataFromresponse = response;
              console.log("this.dataFromresponse", _this17.dataFromresponse);

              if (_this17.dataFromresponse) {
                _this17.is_edit = true;
                console.log("sucess");
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Mapped Successfully!',
                  icon: 'success'
                });

                _this17.excelMappingForm.reset();

                _this17.addForm.reset();

                return;
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Failed ExternalSystem And ProcessCode Already Mapped!',
                  icon: 'error'
                });
              }
            });
          }
        }]);

        return _ExcelMappingNewComponent;
      }();

      _ExcelMappingNewComponent.ɵfac = function ExcelMappingNewComponent_Factory(t) {
        return new (t || _ExcelMappingNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService));
      };

      _ExcelMappingNewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _ExcelMappingNewComponent,
        selectors: [["npr-excel-mapping-new"]],
        decls: 88,
        vars: 12,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], [1, "col-auto"], ["href", "excel-mapping-new.html", "routerLinkActive", "router-link-active", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "routerLink"], ["href", "javascript:void(0)", "routerLinkActive", "router-link-active", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "titleStyle", "mt-2", "mb-4"], [1, "pageTitle", "darkgreyClr"], [1, "row", "gy-4", "align-items-end"], [1, "col-lg-4"], ["for", "extSystem", 1, "formLbl"], ["formControlName", "extCode", "required", "", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["selected", "", 1, "form-class"], ["class", "form-class", 3, "value", 4, "ngFor", "ngForOf"], ["for", "proCode", 1, "formLbl"], ["formControlName", "proCode", "required", "", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["for", "startingRow", 1, "formLbl"], ["id", "startingRow", "type", "number", "formControlName", "startingRow", "required", "", "placeholder", "Data Starting Row", "value", "", 1, "form-control"], ["for", "currency", 1, "formLbl"], ["id", "currency", "type", "text", "formControlName", "currency", "name", "currency", "required", "", "placeholder", "Currency", "value", "", 1, "form-control"], ["for", "sheetNumber", 1, "formLbl"], ["id", "sheetNumber", "type", "text", "formControlName", "sheetNumber", "placeholder", "Sheet Number", "value", "", 1, "form-control"], [1, "checkStyle"], ["type", "checkbox", "id", "fcyRate", "formControlName", "headerRepeated"], ["for", "fcyRate"], ["action", "", "novalidate", "", 1, "formStyle", 3, "formGroup"], [1, "table-responsive"], ["id", "dbTable1", 1, "table", "tableStyle", "responsive", "nowrap", "vAlignMdl"], ["formArrayName", "subArray"], [3, "formGroupName", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", 1, "addIcon", "primarybg"], [3, "click"], ["src", "assets/images/plus-icon.svg", "alt", "..."], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "form-class", 3, "value"], [3, "formGroupName"], ["id", "sourceCode", "type", "text", "formControlName", "columnnName", "placeholder", "Name", "value", "", 1, "form-control"], ["formControlName", "dataType", "placeholder", "Choose DataType", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["type", "checkbox", "formControlName", "mandatory", "id", "mandatoryCheck"], ["for", "mandatoryCheck"], ["id", "headerName", "type", "text", "formControlName", "headerName", "placeholder", "Header Name", "value", "", 1, "form-control"], ["id", "dateFormat", "type", "text", "formControlName", "dateFormat", "placeholder", "Date Format", "value", "", 1, "form-control"], ["id", "mappingColumn", "type", "text", "formControlName", "mappingColumn", "placeholder", "Mapping Column", "value", "", 1, "form-control"], ["id", "delimeter", "type", "text", "formControlName", "delimeter", "placeholder", "Delimeter", "value", "", 1, "form-control"], ["id", "defaultValue", "type", "text", "formControlName", "defaultValue", "placeholder", "Default Value", "value", "", 1, "form-control"], ["id", "repeatedTillNextValue", "type", "text", "formControlName", "repeatedTillNextValue", "placeholder", "Repeated Till Next Value", "value", "", 1, "form-control"], ["href", "javascript:void(0)", 1, "deleteIcon2"], ["src", "assets/images/delete-icon.svg", "alt", "..."]],
        template: function ExcelMappingNewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Excel Mapping");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Update Mapping");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "form", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "h2", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Select Minimum two mandatory row");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "label", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "External System");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "select", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ExcelMappingNewComponent_Template_select_change_20_listener() {
              return ctx.getProcess(ctx.excelMappingForm.get("extCode").value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Select External System ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, ExcelMappingNewComponent_option_23_Template, 2, 2, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "label", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Process Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "select", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ExcelMappingNewComponent_Template_select_change_27_listener() {
              return ctx.getProcessName(ctx.excelMappingForm.get("proCode").value, ctx.excelMappingForm.get("extCode").value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Process Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, ExcelMappingNewComponent_option_30_Template, 2, 2, "option", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Data Starting Row");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](34, "input", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "label", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](37, "Currency");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](38, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](41, "Sheet Number");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](42, "input", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](44, "div", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "label", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](47, "Is Header Present");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](48, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "form", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "table", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "data type");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](59, "mandatory");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](61, "header name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](63, "date format");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](65, "mapping column");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "delimeter");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](69, "default value");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "repeated till next value");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](73, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "tbody", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](75, ExcelMappingNewComponent_tr_75_Template, 29, 2, "tr", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "button", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "span", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExcelMappingNewComponent_Template_span_click_79_listener() {
              return ctx.addSubArray();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](80, "img", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "button", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExcelMappingNewComponent_Template_button_click_83_listener() {
              return ctx.finalSubmit(ctx.excelMappingForm.value, ctx.addForm.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "a", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](87, "Cancel");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](9, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](10, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.excelMappingForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.extSysData);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.processName);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.addForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.addForm.get("subArray")["controls"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", !ctx.addForm.controls.subArray.valid ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](11, _c2));
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupName],
        styles: [".form-class[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #797979;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-bottom: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-left: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-right: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4Y2VsLW1hcHBpbmctbmV3LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFFQSx3RUFBQTtBQUFKIiwiZmlsZSI6ImV4Y2VsLW1hcHBpbmctbmV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY2xhc3Mge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzc5Nzk3OTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dFxyXG59Il19 */"]
      });
      /***/
    },

    /***/
    44398:
    /*!*********************************************************************!*\
      !*** ./src/app/views/excel-mapping/excel-mapping-routing.module.ts ***!
      \*********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExcelMappingRoutingModule": function ExcelMappingRoutingModule() {
          return (
            /* binding */
            _ExcelMappingRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      869);
      /* harmony import */


      var _excel_mapping_edit_excel_mapping_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./excel-mapping-edit/excel-mapping-edit.component */
      51997);
      /* harmony import */


      var _excel_mapping_new_excel_mapping_new_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./excel-mapping-new/excel-mapping-new.component */
      89309);
      /* harmony import */


      var _excel_mapping_excel_mapping_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./excel-mapping/excel-mapping.component */
      22001);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      1858);

      var routes = [{
        path: "",
        component: _excel_mapping_excel_mapping_component__WEBPACK_IMPORTED_MODULE_2__.ExcelMappingComponent
      }, {
        path: "excel-mapping-new",
        component: _excel_mapping_new_excel_mapping_new_component__WEBPACK_IMPORTED_MODULE_1__.ExcelMappingNewComponent
      }, {
        path: "excel-mapping-edit",
        component: _excel_mapping_edit_excel_mapping_edit_component__WEBPACK_IMPORTED_MODULE_0__.ExcelMappingEditComponent
      }];

      var _ExcelMappingRoutingModule = /*#__PURE__*/_createClass(function _ExcelMappingRoutingModule() {
        _classCallCheck(this, _ExcelMappingRoutingModule);
      });

      _ExcelMappingRoutingModule.ɵfac = function ExcelMappingRoutingModule_Factory(t) {
        return new (t || _ExcelMappingRoutingModule)();
      };

      _ExcelMappingRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
        type: _ExcelMappingRoutingModule
      });
      _ExcelMappingRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](_ExcelMappingRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    2008:
    /*!*************************************************************!*\
      !*** ./src/app/views/excel-mapping/excel-mapping.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExcelMappingModule": function ExcelMappingModule() {
          return (
            /* binding */
            _ExcelMappingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      7005);
      /* harmony import */


      var _excel_mapping_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./excel-mapping-routing.module */
      44398);
      /* harmony import */


      var _excel_mapping_excel_mapping_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./excel-mapping/excel-mapping.component */
      22001);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-datatables */
      98546);
      /* harmony import */


      var _excel_mapping_new_excel_mapping_new_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./excel-mapping-new/excel-mapping-new.component */
      89309);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      68465);
      /* harmony import */


      var _excel_mapping_edit_excel_mapping_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./excel-mapping-edit/excel-mapping-edit.component */
      51997);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      1858);

      var _ExcelMappingModule = /*#__PURE__*/_createClass(function _ExcelMappingModule() {
        _classCallCheck(this, _ExcelMappingModule);
      });

      _ExcelMappingModule.ɵfac = function ExcelMappingModule_Factory(t) {
        return new (t || _ExcelMappingModule)();
      };

      _ExcelMappingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({
        type: _ExcelMappingModule
      });
      _ExcelMappingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _excel_mapping_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExcelMappingRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](_ExcelMappingModule, {
          declarations: [_excel_mapping_excel_mapping_component__WEBPACK_IMPORTED_MODULE_1__.ExcelMappingComponent, _excel_mapping_new_excel_mapping_new_component__WEBPACK_IMPORTED_MODULE_3__.ExcelMappingNewComponent, _excel_mapping_edit_excel_mapping_edit_component__WEBPACK_IMPORTED_MODULE_4__.ExcelMappingEditComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _excel_mapping_routing_module__WEBPACK_IMPORTED_MODULE_0__.ExcelMappingRoutingModule, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTablesModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule]
        });
      })();
      /***/

    },

    /***/
    22001:
    /*!******************************************************************************!*\
      !*** ./src/app/views/excel-mapping/excel-mapping/excel-mapping.component.ts ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExcelMappingComponent": function ExcelMappingComponent() {
          return (
            /* binding */
            _ExcelMappingComponent
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


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      31781);
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      78735);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      869);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-datatables */
      98546);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      7005);

      function ExcelMappingComponent_tr_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExcelMappingComponent_tr_26_Template_span_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);

            var exdata_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r2.setDataFromSummaryToUpdateExcelMapping(exdata_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](12, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var exdata_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](exdata_r1.extSysCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](exdata_r1.extSys);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](exdata_r1.inputBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](exdata_r1.authStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](12, 5, exdata_r1.inputDtStamp));
        }
      }

      var _c0 = function _c0() {
        return ["/excel-mapping/excel-mapping-new"];
      };

      var _ExcelMappingComponent = /*#__PURE__*/function () {
        function _ExcelMappingComponent(apiService, toastService, router) {
          _classCallCheck(this, _ExcelMappingComponent);

          this.apiService = apiService;
          this.toastService = toastService;
          this.router = router;
          this.dtOptions = {};
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        }

        _createClass(_ExcelMappingComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dtOptions = {
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
            this.getexcelMappingSummary();
          }
        }, {
          key: "getexcelMappingSummary",
          value: function getexcelMappingSummary() {
            var _this18 = this;

            this.apiService.getMappingSummary().subscribe(function (data) {
              _this18.excelData = data;

              _this18.dtTrigger.next();

              if (_this18.excelData != null) {
                // this.toastService.successMessage('Data Fetched Successfully!.', '');
                return;
              } else {
                // this.toastService.errorMessage('Failed to Fetch Data!.', '');
                return;
              }
            });
          }
        }, {
          key: "setDataFromSummaryToUpdateExcelMapping",
          value: function setDataFromSummaryToUpdateExcelMapping(element) {
            console.log("element.extCode", element.extSysCode);
            this.apiService.setexcelSummaryData({
              extCode: element.extSysCode,
              extSysName: element.extSys
            });
            this.router.navigate(['/excel-mapping/excel-mapping-edit']);
          }
        }]);

        return _ExcelMappingComponent;
      }();

      _ExcelMappingComponent.ɵfac = function ExcelMappingComponent_Factory(t) {
        return new (t || _ExcelMappingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
      };

      _ExcelMappingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _ExcelMappingComponent,
        selectors: [["npr-excel-mapping"]],
        decls: 27,
        vars: 5,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "routerLink"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary"], ["id", "dbTable1", "datatable", "", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [1, "primaryColor", 3, "click"]],
        template: function ExcelMappingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Excel Mapping Summary");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 6);

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

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "External System Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "External system name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "input by");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "auth status");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "input date stamp");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, ExcelMappingComponent_tr_26_Template, 13, 7, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.excelData);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleGNlbC1tYXBwaW5nLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_views_excel-mapping_excel-mapping_module_ts-es5.js.map