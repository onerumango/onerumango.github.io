(function () {
  "use strict";

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (self["webpackChunkmedian"] = self["webpackChunkmedian"] || []).push([["src_app_views_file-upload-maintenance_file-upload-maintenance_module_ts"], {
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
    97643:
    /*!******************************************************************************************************!*\
      !*** ./src/app/views/file-upload-maintenance/external-system-edit/external-system-edit.component.ts ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExternalSystemEditComponent": function ExternalSystemEditComponent() {
          return (
            /* binding */
            _ExternalSystemEditComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
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


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      31443);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function ExternalSystemEditComponent_option_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dept_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", dept_r8);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", dept_r8, "");
        }
      }

      function ExternalSystemEditComponent_div_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExternalSystemEditComponent_div_24_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r9.enableEditFlag();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ExternalSystemEditComponent_button_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExternalSystemEditComponent_button_26_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r11.onSubmit(ctx_r11.externalSystemEditForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r2.submitDisable);
        }
      }

      function ExternalSystemEditComponent_div_27_Template(rf, ctx) {
        if (rf & 1) {
          var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExternalSystemEditComponent_div_27_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14);

            var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r13.onClickOfAuth();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ExternalSystemEditComponent_div_28_Template(rf, ctx) {
        if (rf & 1) {
          var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExternalSystemEditComponent_div_28_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r16);

            var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r15.onClickOfClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ExternalSystemEditComponent_div_29_Template(rf, ctx) {
        if (rf & 1) {
          var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExternalSystemEditComponent_div_29_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18);

            var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r17.onClickOfReopen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Reopen");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ExternalSystemEditComponent_div_30_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "button", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExternalSystemEditComponent_div_30_Template_button_click_1_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20);

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r19.OndeleteofUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ExternalSystemEditComponent_div_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 34);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "img", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 34);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "img", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 34);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "img", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 34);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "img", 42);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 34);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 43);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "img", 44);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 34);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 45);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "img", 46);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 34);

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
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.externalSystemSummry.modifiedBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 7, ctx_r7.externalSystemSummry.modifiedTime));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.externalSystemSummry.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.externalSystemSummry.authorizedBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](63, 9, ctx_r7.externalSystemSummry.authorizedTime));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.externalSystemSummry.verifiedOnce);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r7.externalSystemSummry.authStatus);
        }
      }

      var _c0 = function _c0() {
        return ["/external-system/external-system-summary"];
      };

      var _ExternalSystemEditComponent = /*#__PURE__*/function () {
        function _ExternalSystemEditComponent(apiService, router, formBuilder, toastService) {
          _classCallCheck(this, _ExternalSystemEditComponent);

          this.apiService = apiService;
          this.router = router;
          this.formBuilder = formBuilder;
          this.toastService = toastService;
          this.editFlag = false;
          this.externalSystemUpdate = {
            extSysCode: '',
            extSysName: '',
            department: '',
            modifiedBy: '',
            authStatus: '',
            authorizedBy: '',
            authorizedTime: '',
            modifiedTime: '',
            recordStatus: '',
            updatedBy: '',
            verifiedOnce: '',
            version: ''
          };
        }

        _createClass(_ExternalSystemEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentUser = localStorage.getItem("userFromLogin");
            this.externalSystemEditForm = this.formBuilder.group({
              extSysCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              extSysName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              department: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              verifiedBy: [""],
              verifiedTime: [""],
              recordStatus: [""],
              verifiedOnce: [""],
              modNo: [""],
              verifiedStatus: [""],
              creatorDtStamp: [""],
              creatorId: [""]
            });
            this.getAllDeptNames();
            this.getExternalSystemSummry();
          }
        }, {
          key: "getAllDeptNames",
          value: function getAllDeptNames() {
            var _this2 = this;

            this.apiService.getAllDept().subscribe(function (deptData) {
              _this2.allDeptNames = deptData;
            });
          }
        }, {
          key: "auditLog",
          value: function auditLog() {
            if (this.externalSystemSummry.authStatus === 'U') {
              this.externalSystemSummry.authStatus = 'UNAUTHORIZED';
            }

            if (this.externalSystemSummry.authStatus === 'A') {
              this.externalSystemSummry.authStatus = 'AUTHORIZED';
            }

            if (this.externalSystemSummry.recordStatus === 'O') {
              this.externalSystemSummry.recordStatus = 'OPEN';
            }

            if (this.externalSystemSummry.recordStatus === 'C') {
              this.externalSystemSummry.recordStatus = 'CLOSED';
            }

            if (this.externalSystemSummry.verifiedOnce === 'N') {
              this.externalSystemSummry.verifiedOnce = 'NO';
            }

            if (this.externalSystemSummry.verifiedOnce === 'Y') {
              this.externalSystemSummry.verifiedOnce = 'YES';
            }
          }
        }, {
          key: "getExternalSystemSummry",
          value: function getExternalSystemSummry() {
            var _this3 = this;

            this.apiService.getExternalSystemSummry().subscribe(function (summaryData) {
              _this3.externalSystemSummry = summaryData;
              console.log("this.externalSystemSummry", _this3.externalSystemSummry);
              var extCode = _this3.externalSystemSummry.extSysCode;
              var extName = _this3.externalSystemSummry.extSysName;
              var department = _this3.externalSystemSummry.department;

              _this3.externalSystemEditForm.controls.extSysCode.setValue(extCode);

              _this3.externalSystemEditForm.controls.extSysName.setValue(extName);

              _this3.externalSystemEditForm.controls.department.setValue(department);

              _this3.auditLog();
            });
          }
        }, {
          key: "onOptionsChange",
          value: function onOptionsChange(event) {
            var value = event.target.value;

            if (value) {
              this.externalSystemEditForm.controls.department.setValue(value);
            }
          }
        }, {
          key: "enableEditFlag",
          value: function enableEditFlag() {
            this.editFlag = true;
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(externalSystemEditForm) {
            var _this4 = this;

            this.externalSystemUpdate.extSysCode = externalSystemEditForm.extSysCode;
            this.externalSystemUpdate.extSysName = externalSystemEditForm.extSysName;
            this.externalSystemUpdate.department = externalSystemEditForm.department;
            this.externalSystemUpdate.modifiedBy = this.currentUser;
            this.externalSystemUpdate.authStatus = this.externalSystemSummry.authStatus;
            this.externalSystemUpdate.authorizedBy = this.externalSystemSummry.authorizedBy;
            this.externalSystemUpdate.authorizedTime = this.externalSystemSummry.authorizedTime;
            this.externalSystemUpdate.modifiedTime = this.externalSystemSummry.modifiedTime;
            this.externalSystemUpdate.recordStatus = this.externalSystemSummry.recordStatus;
            this.externalSystemUpdate.updatedBy = this.currentUser;
            this.externalSystemUpdate.verifiedOnce = this.externalSystemSummry.verifiedOnce;
            this.externalSystemUpdate.version = this.externalSystemSummry.version;
            this.apiService.updateexternalSystemEdit(this.externalSystemUpdate).subscribe(function (data) {
              _this4.externalSystemSummry = data;

              if (_this4.externalSystemSummry) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Data Updated Successfully!',
                  icon: 'success'
                });
                _this4.submitDisable = true;

                _this4.auditLog();
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Failed to Update Data!',
                  icon: 'error'
                });
              }
            }, function (error) {
              if (_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: 'Server Error!',
                  icon: 'error'
                });
              }
            });
          }
        }, {
          key: "onClickOfAuth",
          value: function onClickOfAuth() {
            var _this5 = this;

            debugger;

            if (this.externalSystemSummry.modifiedBy === this.currentUser) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                text: "Maker cannot authorize the record",
                icon: 'error'
              });
              return;
            }

            this.apiService.authorizingTheRecord(this.externalSystemSummry, this.currentUser).subscribe(function (authResp) {
              //this.externalSystemSummry = authResp;
              _this5.auditLog();

              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'You Authorized the Record!',
                icon: 'success'
              });
            }); // }
          }
        }, {
          key: "onClickOfClose",
          value: function onClickOfClose() {
            var _this6 = this;

            this.externalSystemSummry.modifiedBy = this.currentUser;
            this.apiService.closingTheRecord(this.externalSystemSummry).subscribe(function (closeResp) {
              console.log(closeResp);
              _this6.externalSystemSummry = closeResp;

              if (_this6.externalSystemSummry) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'You Closed the Record!',
                  icon: 'success'
                });

                _this6.auditLog();
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Failed to Close the Recored!',
                  icon: 'error'
                });
              }
            }, function (error) {
              if (_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: 'Server Error!',
                  icon: 'error'
                });
              }
            });
          }
        }, {
          key: "onClickOfReopen",
          value: function onClickOfReopen() {
            var _this7 = this;

            this.apiService.reopeningTheRecord(this.externalSystemSummry).subscribe(function (openResp) {
              console.log(openResp);
              _this7.externalSystemSummry = openResp;

              if (_this7.externalSystemSummry) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'You Re-Opened the Record!',
                  icon: 'success'
                });

                _this7.auditLog();
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Failed to Reopen the Record!',
                  icon: 'error'
                });
              }
            }, function (error) {
              if (_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: 'Server Error!',
                  icon: 'error'
                });
              }
            });
          }
        }, {
          key: "OndeleteofUser",
          value: function OndeleteofUser() {
            var _this8 = this;

            this.apiService.onClickOfDeleteOfUpdateExcel(this.externalSystemSummry).subscribe(function (resp) {
              console.log(resp);

              if (resp === true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'User Deleted Successfully!',
                  icon: 'success'
                });

                _this8.router.navigateByUrl('/external-system/external-system-summary');
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Failed to Delete User Data!',
                  icon: 'error'
                });
              }
            });
          }
        }]);

        return _ExternalSystemEditComponent;
      }();

      _ExternalSystemEditComponent.ɵfac = function ExternalSystemEditComponent_Factory(t) {
        return new (t || _ExternalSystemEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService));
      };

      _ExternalSystemEditComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _ExternalSystemEditComponent,
        selectors: [["npr-external-system-edit"]],
        decls: 35,
        vars: 14,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "formStyle", 3, "formGroup"], [1, "dbCardStyle"], [3, "disabled"], [1, "row", "gy-4"], [1, "col-lg-4"], ["for", "extCode", 1, "formLbl"], ["id", "extCode", "type", "text", "formControlName", "extSysCode", "readonly", "", "placeholder", "External System Code", "value", "", 1, "form-control"], ["for", "extName", 1, "formLbl"], ["id", "extName", "formControlName", "extSysName", "type", "text", "placeholder", "External System Name", "value", "", 1, "form-control", 3, "readonly"], ["for", "department", 1, "formLbl"], ["formControlName", "department", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["disabled", "", "selected", "", 1, "form-class"], [3, "value", 4, "ngFor", "ngForOf"], [1, "row", "g-3", "pb-3", "pt-4", "justify-content-end"], ["class", "col-auto", 4, "ngIf"], [1, "col-auto"], ["class", "btn smBtn minWdSmBtn btnPrimary", 3, "disabled", "click", 4, "ngIf"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["class", "dbCardStyle", 4, "ngIf"], [3, "value"], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."]],
        template: function ExternalSystemEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "External System");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "fieldset", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "External System Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "External System Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Department");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ExternalSystemEditComponent_Template_select_change_19_listener($event) {
              return ctx.onOptionsChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Select Department");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ExternalSystemEditComponent_option_22_Template, 2, 2, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, ExternalSystemEditComponent_div_24_Template, 3, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, ExternalSystemEditComponent_button_26_Template, 2, 1, "button", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](27, ExternalSystemEditComponent_div_27_Template, 3, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, ExternalSystemEditComponent_div_28_Template, 3, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](29, ExternalSystemEditComponent_div_29_Template, 3, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, ExternalSystemEditComponent_div_30_Template, 3, 0, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "a", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, ExternalSystemEditComponent_div_34_Template, 88, 11, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.externalSystemEditForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.submitDisable);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", !ctx.editFlag ? "" : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.allDeptNames);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.externalSystemSummry.recordStatus == "OPEN" && ctx.externalSystemSummry.authStatus == "AUTHORIZED");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.externalSystemSummry.authStatus == "UNAUTHORIZED");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.externalSystemSummry.recordStatus == "OPEN" && ctx.externalSystemSummry.authStatus == "AUTHORIZED");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.externalSystemSummry.recordStatus == "CLOSED" && ctx.externalSystemSummry.verifiedOnce == "YES");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.externalSystemSummry.verifiedOnce == "NO" && !ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.externalSystemSummry);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
        styles: [".form-class[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #797979;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-bottom: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-left: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-right: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsLXN5c3RlbS1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQ0FBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFFQSx3RUFBQTtBQUFKIiwiZmlsZSI6ImV4dGVybmFsLXN5c3RlbS1lZGl0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY2xhc3Mge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzc5Nzk3OTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dFxyXG59Il19 */"]
      });
      /***/
    },

    /***/
    94057:
    /*!****************************************************************************************************!*\
      !*** ./src/app/views/file-upload-maintenance/external-system-new/external-system-new.component.ts ***!
      \****************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExternalSystemNewComponent": function ExternalSystemNewComponent() {
          return (
            /* binding */
            _ExternalSystemNewComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
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


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      31443);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);

      function ExternalSystemNewComponent_option_22_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var dept_r2 = ctx.$implicit;

          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", dept_r2)("disabled", ctx_r0.editFlag);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", dept_r2, "");
        }
      }

      function ExternalSystemNewComponent_div_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 29);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "img", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 29);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "img", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 29);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "img", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 29);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "img", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 29);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "img", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 29);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 40);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "img", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 29);

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
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.externalSystemResponse.modifiedBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 7, ctx_r1.externalSystemResponse.modifiedTime));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.externalSystemResponse.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.externalSystemResponse.authorizedBy);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](63, 9, ctx_r1.externalSystemResponse.authorizedTime));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.externalSystemResponse.verifiedOnce);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r1.externalSystemResponse.authStatus);
        }
      }

      var _c0 = function _c0() {
        return ["/external-system/external-system-summary"];
      };

      var _ExternalSystemNewComponent = /*#__PURE__*/function () {
        function _ExternalSystemNewComponent(apiService, formBuilder, toastService) {
          _classCallCheck(this, _ExternalSystemNewComponent);

          this.apiService = apiService;
          this.formBuilder = formBuilder;
          this.toastService = toastService;
          this.externalSystem = {
            extSysCode: '',
            extSysName: '',
            department: '',
            modifiedBy: ''
          };
          this.editFlag = false;
          this.submitBtn = true;
        }

        _createClass(_ExternalSystemNewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentUser = localStorage.getItem("userFromLogin");
            this.externalSystemForm = this.formBuilder.group({
              extSysCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              extSysName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              department: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              verifiedBy: [""],
              verifiedTime: [""],
              recordStatus: [""],
              verifiedOnce: [""],
              modNo: [""],
              verifiedStatus: [""],
              creatorDtStamp: [""],
              creatorId: [""]
            });
            this.getAllDeptNames();
          }
        }, {
          key: "getAllDeptNames",
          value: function getAllDeptNames() {
            var _this9 = this;

            this.apiService.getAllDept().subscribe(function (deptData) {
              _this9.allDeptNames = deptData;
            });
          }
        }, {
          key: "onOptionsChange",
          value: function onOptionsChange(event) {
            var value = event.target.value;

            if (value) {
              this.externalSystemForm.controls.department.setValue(value);
            }
          }
        }, {
          key: "auditLog",
          value: function auditLog() {
            if (this.externalSystemResponse.authStatus === 'U') {
              this.externalSystemResponse.authStatus = 'UNAUTHORIZED';
            }

            if (this.externalSystemResponse.authStatus === 'A') {
              this.externalSystemResponse.authStatus = 'AUTHORIZED';
            }

            if (this.externalSystemResponse.recordStatus === 'O') {
              this.externalSystemResponse.recordStatus = 'OPEN';
            }

            if (this.externalSystemResponse.recordStatus === 'C') {
              this.externalSystemResponse.recordStatus = 'CLOSED';
            }

            if (this.externalSystemResponse.verifiedOnce === 'N') {
              this.externalSystemResponse.verifiedOnce = 'NO';
            }

            if (this.externalSystemResponse.verifiedOnce === 'Y') {
              this.externalSystemResponse.verifiedOnce = 'YES';
            }
          }
        }, {
          key: "onSubmit",
          value: function onSubmit(externalSystemFormValue) {
            var _this10 = this;

            this.externalSystem.extSysCode = externalSystemFormValue.extSysCode;
            this.externalSystem.extSysName = externalSystemFormValue.extSysName;
            this.externalSystem.department = externalSystemFormValue.department;
            this.externalSystem.modifiedBy = this.currentUser;
            this.apiService.saveExternalSystem(this.externalSystem).subscribe(function (res) {
              _this10.externalSystemResponse = res;

              if (_this10.externalSystemResponse != null) {
                _this10.editFlag = true;
                _this10.submitBtn = false;
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Data Saved Successfully!',
                  icon: 'success'
                });

                _this10.auditLog(); // this.externalSystemForm.reset();

              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: 'Given External System Code/External System Already Present!',
                  icon: 'warning'
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
          key: "onRest",
          value: function onRest() {
            this.externalSystemForm.reset();
            this.externalSystemResponse = [];
          }
        }]);

        return _ExternalSystemNewComponent;
      }();

      _ExternalSystemNewComponent.ɵfac = function ExternalSystemNewComponent_Factory(t) {
        return new (t || _ExternalSystemNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService));
      };

      _ExternalSystemNewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _ExternalSystemNewComponent,
        selectors: [["npr-external-system-new"]],
        decls: 31,
        vars: 9,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "formStyle", 3, "formGroup"], [1, "dbCardStyle"], [3, "disabled"], [1, "row", "gy-4"], [1, "col-lg-4"], ["for", "extCode", 1, "formLbl"], ["id", "extCode", "type", "text", "formControlName", "extSysCode", "placeholder", "External System Code", "value", "", 1, "form-control", 3, "readonly"], ["for", "extName", 1, "formLbl"], ["id", "extName", "formControlName", "extSysName", "type", "text", "placeholder", "External System Name", "value", "", 1, "form-control", 3, "readonly"], ["for", "department", 1, "formLbl"], ["formControlName", "department", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["disabled", "", "selected", "", 1, "form-class"], [3, "value", "disabled", 4, "ngFor", "ngForOf"], [1, "row", "g-3", "pb-3", "pt-4", "justify-content-end"], [1, "col-auto"], ["href", "javascript:void(0);", 1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["class", "dbCardStyle", 4, "ngIf"], [3, "value", "disabled"], [1, "row"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."]],
        template: function ExternalSystemNewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "External System");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "fieldset", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "External System Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "External System Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Department");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "select", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ExternalSystemNewComponent_Template_select_change_19_listener($event) {
              return ctx.onOptionsChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "option", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Select Department");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](22, ExternalSystemNewComponent_option_22_Template, 2, 3, "option", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExternalSystemNewComponent_Template_button_click_25_listener() {
              return ctx.onSubmit(ctx.externalSystemForm.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Submit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "a", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](29, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, ExternalSystemNewComponent_div_30_Template, 88, 11, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.externalSystemForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.submitBtn);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.allDeptNames);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.externalSystemForm.valid || !ctx.submitBtn);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.externalSystemResponse);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
        styles: [".form-class[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #797979;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-bottom: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-left: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-right: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4dGVybmFsLXN5c3RlbS1uZXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsOEJBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUVBLHdFQUFBO0FBQUoiLCJmaWxlIjoiZXh0ZXJuYWwtc3lzdGVtLW5ldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNsYXNzIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAuMzc1cmVtIC43NXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41O1xyXG4gICAgY29sb3I6ICM3OTc5Nzk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYmFja2dyb3VuZC1jbGlwOiBwYWRkaW5nLWJveDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2ViZWJlYjtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC8vIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXRcclxufSJdfQ== */"]
      });
      /***/
    },

    /***/
    4846:
    /*!********************************************************************************************!*\
      !*** ./src/app/views/file-upload-maintenance/external-system/external-system.component.ts ***!
      \********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ExternalSystemComponent": function ExternalSystemComponent() {
          return (
            /* binding */
            _ExternalSystemComponent
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


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      31443);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-datatables */
      50481);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function ExternalSystemComponent_tr_24_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ExternalSystemComponent_tr_24_Template_span_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);

            var item_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r2.sendingDataforEdit(item_r1);
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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.extSysCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.extSysName);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.authStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 4, item_r1.modifiedTime, "medium"));
        }
      }

      var _c0 = function _c0() {
        return ["/external-system/external-system-new"];
      };

      var _c1 = function _c1() {
        return ["active"];
      };

      var _ExternalSystemComponent = /*#__PURE__*/function () {
        function _ExternalSystemComponent(apiService, toastService, router) {
          _classCallCheck(this, _ExternalSystemComponent);

          this.apiService = apiService;
          this.toastService = toastService;
          this.router = router;
          this.dtOptions = {};
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        }

        _createClass(_ExternalSystemComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 5,
              columnDefs: [{
                type: 'date',
                'targets': [3]
              }],
              order: [[3, 'desc']],
              processing: true,
              lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]]
            };
            this.gettingExternalSummry();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.dtTrigger.unsubscribe();
          }
        }, {
          key: "gettingExternalSummry",
          value: function gettingExternalSummry() {
            var _this11 = this;

            this.apiService.getAllExt().subscribe(function (summryResp) {
              _this11.externalSummaryData = summryResp;
              console.log(_this11.externalSummaryData);

              _this11.dtTrigger.next();

              if (_this11.externalSummaryData != null) {
                // this.toastService.successMessage('Data Fetched Successfully!.', '');
                return;
              } else {
                // this.toastService.errorMessage('Failed to Fetch Data!.', '');
                return;
              }
            });
          }
        }, {
          key: "sendingDataforEdit",
          value: function sendingDataforEdit(dataForEdit) {
            if (dataForEdit) {
              this.apiService.setExternalSystemSummry({
                authStatus: dataForEdit.authStatus,
                authorizedBy: dataForEdit.authorizedBy,
                authorizedTime: dataForEdit.authorizedTime,
                department: dataForEdit.department,
                extSysCode: dataForEdit.extSysCode,
                extSysName: dataForEdit.extSysName,
                modifiedBy: dataForEdit.modifiedBy,
                modifiedTime: dataForEdit.modifiedTime,
                recordStatus: dataForEdit.recordStatus,
                verifiedOnce: dataForEdit.verifiedOnce,
                version: dataForEdit.version
              });
              this.router.navigate(['/external-system/external-system-edit']);
            }
          }
        }]);

        return _ExternalSystemComponent;
      }();

      _ExternalSystemComponent.ɵfac = function ExternalSystemComponent_Factory(t) {
        return new (t || _ExternalSystemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router));
      };

      _ExternalSystemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _ExternalSystemComponent,
        selectors: [["npr-external-system"]],
        decls: 25,
        vars: 7,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "routerLink", "routerLinkActive"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary"], ["datatable", "", "id", "dbTable1", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [1, "primaryColor", 3, "click"]],
        template: function ExternalSystemComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "External System");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "External System Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](24, ExternalSystemComponent_tr_24_Template, 11, 7, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](5, _c0))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.externalSummaryData);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJleHRlcm5hbC1zeXN0ZW0uY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /***/
    },

    /***/
    9091:
    /*!*****************************************************************************************!*\
      !*** ./src/app/views/file-upload-maintenance/file-upload-maintenance-routing.module.ts ***!
      \*****************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FileUploadMaintenanceRoutingModule": function FileUploadMaintenanceRoutingModule() {
          return (
            /* binding */
            _FileUploadMaintenanceRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _external_system_edit_external_system_edit_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./external-system-edit/external-system-edit.component */
      97643);
      /* harmony import */


      var _external_system_new_external_system_new_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./external-system-new/external-system-new.component */
      94057);
      /* harmony import */


      var _external_system_external_system_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./external-system/external-system.component */
      4846);
      /* harmony import */


      var _process_code_mapping_edit_process_code_mapping_edit_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./process-code-mapping-edit/process-code-mapping-edit.component */
      9598);
      /* harmony import */


      var _process_code_mapping_new_process_code_mapping_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./process-code-mapping-new/process-code-mapping-new.component */
      8972);
      /* harmony import */


      var _process_code_mapping_process_code_mapping_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./process-code-mapping/process-code-mapping.component */
      87873);
      /* harmony import */


      var _treasury_reference_treasury_reference_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./treasury-reference/treasury-reference.component */
      42034);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var routes = [{
        path: 'external-system-summary',
        component: _external_system_external_system_component__WEBPACK_IMPORTED_MODULE_2__.ExternalSystemComponent
      }, {
        path: 'external-system-new',
        component: _external_system_new_external_system_new_component__WEBPACK_IMPORTED_MODULE_1__.ExternalSystemNewComponent
      }, {
        path: 'external-system-edit',
        component: _external_system_edit_external_system_edit_component__WEBPACK_IMPORTED_MODULE_0__.ExternalSystemEditComponent
      }, {
        path: 'processCodeMapping',
        component: _process_code_mapping_process_code_mapping_component__WEBPACK_IMPORTED_MODULE_5__.ProcessCodeMappingComponent
      }, {
        path: 'processCodeMappingNew',
        component: _process_code_mapping_new_process_code_mapping_new_component__WEBPACK_IMPORTED_MODULE_4__.ProcessCodeMappingNewComponent
      }, {
        path: 'processCodeMappingEdit',
        component: _process_code_mapping_edit_process_code_mapping_edit_component__WEBPACK_IMPORTED_MODULE_3__.ProcessCodeMappingEditComponent
      }, {
        path: 'treasuryReference',
        component: _treasury_reference_treasury_reference_component__WEBPACK_IMPORTED_MODULE_6__.TreasuryReferenceComponent
      }];

      var _FileUploadMaintenanceRoutingModule = /*#__PURE__*/_createClass(function _FileUploadMaintenanceRoutingModule() {
        _classCallCheck(this, _FileUploadMaintenanceRoutingModule);
      });

      _FileUploadMaintenanceRoutingModule.ɵfac = function FileUploadMaintenanceRoutingModule_Factory(t) {
        return new (t || _FileUploadMaintenanceRoutingModule)();
      };

      _FileUploadMaintenanceRoutingModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _FileUploadMaintenanceRoutingModule
      });
      _FileUploadMaintenanceRoutingModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_FileUploadMaintenanceRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
        });
      })();
      /***/

    },

    /***/
    99776:
    /*!*********************************************************************************!*\
      !*** ./src/app/views/file-upload-maintenance/file-upload-maintenance.module.ts ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "FileUploadMaintenanceModule": function FileUploadMaintenanceModule() {
          return (
            /* binding */
            _FileUploadMaintenanceModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _file_upload_maintenance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./file-upload-maintenance-routing.module */
      9091);
      /* harmony import */


      var _external_system_external_system_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./external-system/external-system.component */
      4846);
      /* harmony import */


      var _external_system_new_external_system_new_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./external-system-new/external-system-new.component */
      94057);
      /* harmony import */


      var _process_code_mapping_process_code_mapping_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./process-code-mapping/process-code-mapping.component */
      87873);
      /* harmony import */


      var _process_code_mapping_new_process_code_mapping_new_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./process-code-mapping-new/process-code-mapping-new.component */
      8972);
      /* harmony import */


      var _treasury_reference_treasury_reference_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./treasury-reference/treasury-reference.component */
      42034);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _external_system_edit_external_system_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./external-system-edit/external-system-edit.component */
      97643);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! angular-datatables */
      50481);
      /* harmony import */


      var _process_code_mapping_edit_process_code_mapping_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./process-code-mapping-edit/process-code-mapping-edit.component */
      9598);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _FileUploadMaintenanceModule = /*#__PURE__*/_createClass(function _FileUploadMaintenanceModule() {
        _classCallCheck(this, _FileUploadMaintenanceModule);
      });

      _FileUploadMaintenanceModule.ɵfac = function FileUploadMaintenanceModule_Factory(t) {
        return new (t || _FileUploadMaintenanceModule)();
      };

      _FileUploadMaintenanceModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
        type: _FileUploadMaintenanceModule
      });
      _FileUploadMaintenanceModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _file_upload_maintenance_routing_module__WEBPACK_IMPORTED_MODULE_0__.FileUploadMaintenanceRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, angular_datatables__WEBPACK_IMPORTED_MODULE_7__.DataTablesModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](_FileUploadMaintenanceModule, {
          declarations: [_external_system_external_system_component__WEBPACK_IMPORTED_MODULE_1__.ExternalSystemComponent, _external_system_new_external_system_new_component__WEBPACK_IMPORTED_MODULE_2__.ExternalSystemNewComponent, _process_code_mapping_process_code_mapping_component__WEBPACK_IMPORTED_MODULE_3__.ProcessCodeMappingComponent, _process_code_mapping_new_process_code_mapping_new_component__WEBPACK_IMPORTED_MODULE_4__.ProcessCodeMappingNewComponent, _treasury_reference_treasury_reference_component__WEBPACK_IMPORTED_MODULE_5__.TreasuryReferenceComponent, _external_system_edit_external_system_edit_component__WEBPACK_IMPORTED_MODULE_6__.ExternalSystemEditComponent, _process_code_mapping_edit_process_code_mapping_edit_component__WEBPACK_IMPORTED_MODULE_8__.ProcessCodeMappingEditComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _file_upload_maintenance_routing_module__WEBPACK_IMPORTED_MODULE_0__.FileUploadMaintenanceRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, angular_datatables__WEBPACK_IMPORTED_MODULE_7__.DataTablesModule]
        });
      })();
      /***/

    },

    /***/
    9598:
    /*!****************************************************************************************************************!*\
      !*** ./src/app/views/file-upload-maintenance/process-code-mapping-edit/process-code-mapping-edit.component.ts ***!
      \****************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProcessCodeMappingEditComponent": function ProcessCodeMappingEditComponent() {
          return (
            /* binding */
            _ProcessCodeMappingEditComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
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


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      31443);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function ProcessCodeMappingEditComponent_label_34_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "SFTP Details");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ProcessCodeMappingEditComponent_input_35_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 59);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r1.editFlag);
        }
      }

      function ProcessCodeMappingEditComponent_input_44_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 60);
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r2.editFlag);
        }
      }

      function ProcessCodeMappingEditComponent_input_46_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 61);
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r3.editFlag);
        }
      }

      function ProcessCodeMappingEditComponent_input_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 62);
        }

        if (rf & 2) {
          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r4.editFlag);
        }
      }

      function ProcessCodeMappingEditComponent_input_57_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 63);
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r5.editFlag);
        }
      }

      function ProcessCodeMappingEditComponent_input_60_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 64);
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r6.editFlag);
        }
      }

      function ProcessCodeMappingEditComponent_input_69_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 65);
        }

        if (rf & 2) {
          var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r7.editFlag);
        }
      }

      function ProcessCodeMappingEditComponent_input_72_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 66);
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r8.editFlag);
        }
      }

      function ProcessCodeMappingEditComponent_input_81_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 67);
        }

        if (rf & 2) {
          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r9.editFlag);
        }
      }

      function ProcessCodeMappingEditComponent_input_84_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 68);
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx_r10.editFlag);
        }
      }

      function ProcessCodeMappingEditComponent_button_107_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcessCodeMappingEditComponent_button_107_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r19);

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r18.enableEditFlag();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ProcessCodeMappingEditComponent_button_109_Template(rf, ctx) {
        if (rf & 1) {
          var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 70);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcessCodeMappingEditComponent_button_109_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21);

            var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r20.finalSubmitofEditForm(ctx_r20.processCodeEditForm.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx_r12.processCodeEditForm.valid || ctx_r12.submitEdit);
        }
      }

      function ProcessCodeMappingEditComponent_button_111_Template(rf, ctx) {
        if (rf & 1) {
          var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 71);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcessCodeMappingEditComponent_button_111_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23);

            var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r22.onClickOfAuth();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Auth");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ProcessCodeMappingEditComponent_button_113_Template(rf, ctx) {
        if (rf & 1) {
          var _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 69);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcessCodeMappingEditComponent_button_113_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r25);

            var ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r24.onClickOfClose();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Close");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ProcessCodeMappingEditComponent_button_115_Template(rf, ctx) {
        if (rf & 1) {
          var _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcessCodeMappingEditComponent_button_115_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r27);

            var ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r26.onClickOfReopen();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Reopen");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ProcessCodeMappingEditComponent_button_117_Template(rf, ctx) {
        if (rf & 1) {
          var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 72);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcessCodeMappingEditComponent_button_117_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r29);

            var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r28.OndeleteofUser();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "Delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ProcessCodeMappingEditComponent_div_121_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 41);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 76);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](7, "img", 77);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 79);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 80);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "img", 81);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "div", 79);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](30, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 82);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "img", 83);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "div", 79);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 84);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](44, "img", 85);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](46, "div", 79);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "div", 86);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](56, "img", 87);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](57, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 79);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 88);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](69, "img", 89);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 79);

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

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 73);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "div", 74);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 75);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 52);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 90);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](81, "img", 91);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "div", 78);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 79);

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
          var ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r17.processCodeSummary.creatorId);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](26, 7, ctx_r17.processCodeSummary.creatorDtStamp));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r17.processCodeSummary.recordStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r17.processCodeSummary.verifierId);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](63, 9, ctx_r17.processCodeSummary.verifierDtStamp));

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r17.processCodeSummary.verifiedOnce);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r17.processCodeSummary.authStatus);
        }
      }

      var _c0 = function _c0() {
        return ["/external-system/processCodeMapping"];
      };

      var _ProcessCodeMappingEditComponent = /*#__PURE__*/function () {
        function _ProcessCodeMappingEditComponent(router, apiService, formBuilder, toastService) {
          _classCallCheck(this, _ProcessCodeMappingEditComponent);

          this.router = router;
          this.apiService = apiService;
          this.formBuilder = formBuilder;
          this.toastService = toastService;
          this.showFilefield = false;
          this.showFutureDate = false;
          this.showfCYExchangeValue = false;
          this.showbackDateValue = false;
          this.showsftpValues = false;
          this.editFlag = false;
        }

        _createClass(_ProcessCodeMappingEditComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentUser = localStorage.getItem("userFromLogin");
            this.processCodeEditForm = this.formBuilder.group({
              extSysCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              extSysName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              processCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              maxUploadLimit: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              acft: [""],
              autoUpload: [""],
              backDateAllow: [""],
              bdav: [""],
              creatorId: [""],
              fCYPercentage: [""],
              fCYRateVariance: [""],
              fdav: [""],
              fileName: [""],
              filePath: [""],
              futureDateAllow: [""],
              mandatoryFieldImposed: [""],
              sftpIpaddress: [""],
              sftpPassword: [""],
              sftpPath: [""],
              sftpPort: [""],
              sftpRequired: [""],
              sftpUsername: [""],
              treasuryrefRequired: [""],
              wuFile: [""]
            });
            this.gettingProcessCode();
          }
        }, {
          key: "auditLog",
          value: function auditLog() {
            if (this.processCodeSummary.authStatus === 'U') {
              this.processCodeSummary.authStatus = 'UNAUTHORIZED';
            }

            if (this.processCodeSummary.authStatus === 'A') {
              this.processCodeSummary.authStatus = 'AUTHORIZED';
            }

            if (this.processCodeSummary.recordStatus === 'O') {
              this.processCodeSummary.recordStatus = 'OPEN';
            }

            if (this.processCodeSummary.recordStatus === 'C') {
              this.processCodeSummary.recordStatus = 'CLOSED';
            }

            if (this.processCodeSummary.verifiedOnce === 'N') {
              this.processCodeSummary.verifiedOnce = 'NO';
            }

            if (this.processCodeSummary.verifiedOnce === 'Y') {
              this.processCodeSummary.verifiedOnce = 'YES';
            }
          }
        }, {
          key: "gettingProcessCode",
          value: function gettingProcessCode() {
            var _this12 = this;

            this.apiService.getProcessCode().subscribe(function (summaryData) {
              _this12.processCodeSummary = summaryData;
              console.log("this.processCodeSummary", _this12.processCodeSummary);
              var extCode = _this12.processCodeSummary.extSysCode;
              var extSysName = _this12.processCodeSummary.extSysName;
              var minlimit = _this12.processCodeSummary.maxUploadLimit;
              var process = _this12.processCodeSummary.processCode;
              var treasuryrefReq = _this12.processCodeSummary.treasuryrefRequired;
              var autoUpload = _this12.processCodeSummary.autoUpload;
              var backDateAllow = _this12.processCodeSummary.backDateAllow;
              var fCYRateVariance = _this12.processCodeSummary.treasuryrefRequired;
              var sftpRequired = _this12.processCodeSummary.sftpRequired;
              var futureDateAllow = _this12.processCodeSummary.futureDateAllow;
              var wuFile = _this12.processCodeSummary.wuFile;

              _this12.processCodeEditForm.controls.wuFile.setValue(wuFile);

              var mandatoryFieldImposed = _this12.processCodeSummary.mandatoryFieldImposed;

              _this12.processCodeEditForm.controls.mandatoryFieldImposed.setValue(mandatoryFieldImposed);

              var acft = _this12.processCodeSummary.acft;

              _this12.processCodeEditForm.controls.acft.setValue(acft);

              _this12.processCodeEditForm.controls.extSysCode.setValue(extCode);

              _this12.processCodeEditForm.controls.extSysName.setValue(extSysName);

              _this12.processCodeEditForm.controls.processCode.setValue(process);

              _this12.processCodeEditForm.controls.maxUploadLimit.setValue(minlimit);

              _this12.processCodeEditForm.controls.treasuryrefRequired.setValue(treasuryrefReq);

              _this12.processCodeEditForm.controls.autoUpload.setValue(autoUpload);

              _this12.processCodeEditForm.controls.backDateAllow.setValue(backDateAllow);

              _this12.processCodeEditForm.controls.fCYRateVariance.setValue(fCYRateVariance);

              _this12.processCodeEditForm.controls.sftpRequired.setValue(sftpRequired);

              _this12.processCodeEditForm.controls.futureDateAllow.setValue(futureDateAllow);

              if (autoUpload == true) {
                _this12.showFilefield = true;
                var fileName = _this12.processCodeSummary.fileName;
                var filePath = _this12.processCodeSummary.filePath;

                _this12.processCodeEditForm.controls.fileName.setValue(fileName);

                _this12.processCodeEditForm.controls.filePath.setValue(filePath);
              }

              if (backDateAllow == true) {
                _this12.showbackDateValue = true;
                var bdav = _this12.processCodeSummary.bdav;

                _this12.processCodeEditForm.controls.bdav.setValue(bdav);
              }

              if (fCYRateVariance == true) {
                _this12.showfCYExchangeValue = true;
                var fCYPercentage = _this12.processCodeSummary.fcypercenatage;

                _this12.processCodeEditForm.controls.fCYPercentage.setValue(fCYPercentage);
              }

              if (futureDateAllow == true) {
                _this12.showFutureDate = true;
                var fdav = _this12.processCodeSummary.fdav;

                _this12.processCodeEditForm.controls.fdav.setValue(fdav);
              }

              if (sftpRequired == true) {
                _this12.showsftpValues = true;
                var ipAddress = _this12.processCodeSummary.ipAddress;

                _this12.processCodeEditForm.controls.sftpIpaddress.setValue(ipAddress);

                var userName = _this12.processCodeSummary.userName;

                _this12.processCodeEditForm.controls.sftpUsername.setValue(userName);

                var path = _this12.processCodeSummary.path;

                _this12.processCodeEditForm.controls.sftpPath.setValue(path);

                var port = _this12.processCodeSummary.port;

                _this12.processCodeEditForm.controls.sftpPort.setValue(port);

                var password = _this12.processCodeSummary.password;

                _this12.processCodeEditForm.controls.sftpPassword.setValue(password);
              }

              _this12.auditLog();
            });
          }
        }, {
          key: "enableEditFlag",
          value: function enableEditFlag() {
            this.editFlag = true;
          }
        }, {
          key: "getextSysCodeData",
          value: function getextSysCodeData() {
            var _this13 = this;

            this.apiService.getAllExt().subscribe(function (data) {
              _this13.extSysCodeData = data;
            });
          }
        }, {
          key: "onOptionsChange",
          value: function onOptionsChange(event) {
            var value = event.target.value;
            console.log("Value", value);

            if (value) {
              this.processCodeEditForm.controls.extSysCode.setValue(value);
              this.processCodeEditForm.controls.extSysName.setValue(value);
            }
          }
        }, {
          key: "treasuryRequired",
          value: function treasuryRequired(values) {
            var value = values.currentTarget.checked;
            this.processCodeEditForm.controls.treasuryrefRequired.setValue(value);
          }
        }, {
          key: "backdatingRequired",
          value: function backdatingRequired(backData) {
            console.log("backData", backData);
            this.backDateValue = backData.currentTarget.checked;
            console.log("Back data", this.backDateValue);

            if (this.backDateValue == true) {
              this.showbackDateValue = true;
              this.processCodeEditForm.controls.backDateAllow.setValue(this.backDateValue);
            } else {
              this.showbackDateValue = false;
              this.processCodeEditForm.controls.backDateAllow.setValue(this.backDateValue);
            }
          }
        }, {
          key: "autoUploadRequired",
          value: function autoUploadRequired(values) {
            console.log("autoUploadRequired", values);
            this.autoUploadValue = values.currentTarget.checked;
            console.log("File", this.autoUploadValue);

            if (this.autoUploadValue == true) {
              this.showFilefield = true;
              this.processCodeEditForm.controls.autoUpload.setValue(this.autoUploadValue);
            } else {
              this.showFilefield = false;
              this.processCodeEditForm.controls.autoUpload.setValue(this.autoUploadValue);
            }
          }
        }, {
          key: "futureDateAllowRequired",
          value: function futureDateAllowRequired(futuredataValue) {
            this.futuredataValue = futuredataValue.currentTarget.checked;
            console.log("values", this.futuredataValue);

            if (this.futuredataValue == true) {
              this.showFutureDate = true;
              this.processCodeEditForm.controls.futureDateAllow.setValue(this.futuredataValue);
            } else {
              this.showFutureDate = false;
              this.processCodeEditForm.controls.futureDateAllow.setValue(this.futuredataValue);
            }
          }
        }, {
          key: "fCYExchangeRequired",
          value: function fCYExchangeRequired(fcyValue) {
            this.fCYExchangeValue = fcyValue.currentTarget.checked;

            if (this.fCYExchangeValue == true) {
              this.showfCYExchangeValue = true;
              this.processCodeEditForm.controls.fCYRateVariance.setValue(this.fCYExchangeValue);
            } else {
              this.showfCYExchangeValue = false;
              this.processCodeEditForm.controls.fCYRateVariance.setValue(this.fCYExchangeValue);
            }
          }
        }, {
          key: "sftpRequired",
          value: function sftpRequired(sftpValue) {
            this.sftpValues = sftpValue.currentTarget.checked;

            if (this.sftpValues == true) {
              this.showsftpValues = true;
              this.processCodeEditForm.controls.sftpRequired.setValue(this.sftpValues);
            } else {
              this.showsftpValues = false;
              this.processCodeEditForm.controls.sftpRequired.setValue(this.sftpValues);
            }
          }
        }, {
          key: "finalSubmitofEditForm",
          value: function finalSubmitofEditForm(formValue) {
            var _this14 = this;

            this.processCodeEditForm.controls.creatorId.setValue(this.currentUser);
            this.apiService.createExtSys(this.processCodeEditForm.value).subscribe(function (resp) {
              if (resp) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Data Updated Successfully!',
                  icon: 'success'
                });
                _this14.submitEdit = true;

                _this14.processCodeEditForm.reset();
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Failed to Update Data!',
                  icon: 'error'
                });
              }
            }, function (error) {
              if (_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: 'Server Error!',
                  icon: 'error'
                });
              }
            });
          }
        }, {
          key: "onClickOfAuth",
          value: function onClickOfAuth() {
            var _this15 = this;

            if (this.processCodeSummary.creatorId == this.currentUser) {
              sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                title: 'Maker Cannot Authorized the Record!',
                icon: 'error'
              });
            } else {
              this.apiService.authorizingTheRecord(this.processCodeSummary, this.currentUser).subscribe(function (authResp) {
                _this15.processCodeSummary = authResp;

                _this15.auditLog();

                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'You Authorized the Record!',
                  icon: 'success'
                });
              });
            }
          }
        }, {
          key: "onClickOfClose",
          value: function onClickOfClose() {
            var _this16 = this;

            this.processCodeSummary.modifiedBy = this.currentUser;
            this.apiService.closingTheRecord(this.processCodeSummary).subscribe(function (closeResp) {
              console.log(closeResp);
              _this16.processCodeSummary = closeResp;

              if (_this16.processCodeSummary) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'You Closed the Record!',
                  icon: 'success'
                });

                _this16.auditLog();
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Failed to Close the Recored!',
                  icon: 'error'
                });
              }
            }, function (error) {
              if (_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: 'Server Error!',
                  icon: 'error'
                });
              }
            });
          }
        }, {
          key: "onClickOfReopen",
          value: function onClickOfReopen() {
            var _this17 = this;

            this.apiService.reopeningTheRecord(this.processCodeSummary).subscribe(function (openResp) {
              console.log(openResp);
              _this17.processCodeSummary = openResp;

              if (_this17.processCodeSummary) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'You Re-opend the Record!',
                  icon: 'success'
                });

                _this17.auditLog();
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Failed to Reoped the Recored!',
                  icon: 'error'
                });
              }
            }, function (error) {
              if (_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: 'Server Error!',
                  icon: 'error'
                });
              }
            });
          }
        }, {
          key: "OndeleteofUser",
          value: function OndeleteofUser() {
            var _this18 = this;

            this.apiService.onClickOfDeleteOfUpdateExcel(this.processCodeSummary).subscribe(function (resp) {
              console.log(resp);

              if (resp === true) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'User Deleted Successfully!',
                  icon: 'success'
                });

                _this18.router.navigateByUrl('/external-system/processCodeMappingEdit');
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: 'Failed to Delete User Data!',
                  icon: 'error'
                });
              }
            });
          }
        }]);

        return _ProcessCodeMappingEditComponent;
      }();

      _ProcessCodeMappingEditComponent.ɵfac = function ProcessCodeMappingEditComponent_Factory(t) {
        return new (t || _ProcessCodeMappingEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService));
      };

      _ProcessCodeMappingEditComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _ProcessCodeMappingEditComponent,
        selectors: [["npr-process-code-mapping-edit"]],
        decls: 122,
        vars: 33,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "dbCardStyle"], [3, "disabled"], [1, "row", "gy-3"], [1, "col-lg-3"], ["for", "extCode", 1, "formLbl"], ["id", "processCode", "formControlName", "extSysCode", "readonly", "", "type", "text", "placeholder", "External System Code", "value", "", 1, "form-control"], ["for", "processCode", 1, "formLbl"], ["id", "processCode", "formControlName", "extSysName", "readonly", "", "type", "text", "placeholder", "External System Name", "value", "", 1, "form-control"], ["for", "extName", 1, "formLbl"], ["id", "extName", "type", "text", "formControlName", "processCode", "placeholder", "Process Code", "value", "", 1, "form-control", 3, "readonly"], ["for", "uploadLimit", 1, "formLbl"], ["id", "uploadLimit", "formControlName", "maxUploadLimit", "type", "number", "placeholder", "Maximum Upload Limit", "value", "", 1, "form-control", 3, "readonly"], [1, "col-lg-12"], [1, "checkStyle"], ["type", "checkbox", "formControlName", "treasuryrefRequired", "id", "referenceRequired", 3, "change"], ["for", "referenceRequired"], [4, "ngIf"], ["id", "sftpUsername", "formControlName", "sftpUsername", "type", "text", "class", "form-control", "placeholder", "Username", "value", "", 3, "readonly", 4, "ngIf"], [1, "row", "gy-4", "align-items-center"], ["type", "checkbox", "formControlName", "autoUpload", "id", "autoUpload", 3, "change"], ["for", "autoUpload"], ["id", "fileName", "type", "text", "formControlName", "fileName", "class", "form-control", "placeholder", "File Name", "value", "", 3, "readonly", 4, "ngIf"], ["id", "filePath", "type", "text", "formControlName", "filePath", "class", "form-control", "placeholder", "File Path", "value", "", 3, "readonly", 4, "ngIf"], ["id", "sftpIpaddress", "type", "text", "formControlName", "sftpIpaddress", "class", "form-control", "placeholder", "Password", "value", "", 3, "readonly", 4, "ngIf"], ["type", "checkbox", "formControlName", "backDateAllow", "id", "backDateAllow", 3, "change"], ["for", "backDateAllow"], ["id", "bdav", "type", "text", "formControlName", "bdav", "class", "form-control", "placeholder", "Back Dating", "value", "", 3, "readonly", 4, "ngIf"], ["id", "sftpPort", "type", "text", "formControlName", "sftpIpaddress", "class", "form-control", "placeholder", "IP Address", "value", "", 3, "readonly", 4, "ngIf"], ["type", "checkbox", "formControlName", "futureDateAllow", "id", "futureDating", 3, "change"], ["for", "futureDating"], ["id", "futureDating", "type", "text", "formControlName", "fdav", "class", "form-control", "placeholder", "Future Dating", "value", "", 3, "readonly", 4, "ngIf"], ["id", "sftpPort", "type", "text", "formControlName", "sftpPort", "class", "form-control", "placeholder", "Port", "value", "", 3, "readonly", 4, "ngIf"], ["type", "checkbox", "formControlName", "fCYRateVariance", "id", "fCYRateVariance", 3, "change"], ["for", "fCYRateVariance"], ["id", "fCYPercentage", "type", "number", "formControlName", "fCYPercentage", "class", "form-control", "placeholder", "FCY Percentage", "value", "", 3, "readonly", 4, "ngIf"], ["id", "sftpPath", "type", "text", "formControlName", "sftpPath", "class", "form-control", "placeholder", "Path", "value", "", 3, "readonly", 4, "ngIf"], [1, "col-12"], [1, "row"], [1, "checkListCol", "mt-2", "pt-3"], ["type", "checkbox", "formControlName", "acft", "id", "uppercaseCheck"], ["for", "uppercaseCheck"], ["type", "checkbox", "formControlName", "mandatoryFieldImposed", "id", "lowercaseCheck"], ["for", "lowercaseCheck"], ["type", "checkbox", "formControlName", "sftpRequired", "id", "numberCheck", 3, "change"], ["for", "numberCheck"], ["type", "checkbox", "formControlName", "wuFile", "id", "charactersCheck"], ["for", "charactersCheck"], [1, "row", "g-3", "pb-3", "pt-4", "justify-content-end"], [1, "col-auto"], ["class", "btn smBtn minWdSmBtn btnUpdate", 3, "click", 4, "ngIf"], ["class", "btn smBtn minWdSmBtn btnPrimary", 3, "disabled", "click", 4, "ngIf"], ["class", "btn smBtn minWdSmBtn btnAuth", 3, "click", 4, "ngIf"], ["class", "btn smBtn minWdSmBtn btnPrimary", 3, "click", 4, "ngIf"], ["href", "javascript:void(0)", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["class", "dbCardStyle", 4, "ngIf"], ["id", "sftpUsername", "formControlName", "sftpUsername", "type", "text", "placeholder", "Username", "value", "", 1, "form-control", 3, "readonly"], ["id", "fileName", "type", "text", "formControlName", "fileName", "placeholder", "File Name", "value", "", 1, "form-control", 3, "readonly"], ["id", "filePath", "type", "text", "formControlName", "filePath", "placeholder", "File Path", "value", "", 1, "form-control", 3, "readonly"], ["id", "sftpIpaddress", "type", "text", "formControlName", "sftpIpaddress", "placeholder", "Password", "value", "", 1, "form-control", 3, "readonly"], ["id", "bdav", "type", "text", "formControlName", "bdav", "placeholder", "Back Dating", "value", "", 1, "form-control", 3, "readonly"], ["id", "sftpPort", "type", "text", "formControlName", "sftpIpaddress", "placeholder", "IP Address", "value", "", 1, "form-control", 3, "readonly"], ["id", "futureDating", "type", "text", "formControlName", "fdav", "placeholder", "Future Dating", "value", "", 1, "form-control", 3, "readonly"], ["id", "sftpPort", "type", "text", "formControlName", "sftpPort", "placeholder", "Port", "value", "", 1, "form-control", 3, "readonly"], ["id", "fCYPercentage", "type", "number", "formControlName", "fCYPercentage", "placeholder", "FCY Percentage", "value", "", 1, "form-control", 3, "readonly"], ["id", "sftpPath", "type", "text", "formControlName", "sftpPath", "placeholder", "Path", "value", "", 1, "form-control", 3, "readonly"], [1, "btn", "smBtn", "minWdSmBtn", "btnUpdate", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnAuth", 3, "click"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "click"], [1, "col-sm-6", "col-md-4", "col-lg-3"], [1, "csCardStyle"], [1, "row", "g-2", "align-items-center"], [1, "csCardStyleIcon", "csCardStyleIconBg1"], ["src", "assets/images/maker-icon.svg", "alt", "..."], [1, "col"], [1, "csCardStyleText"], [1, "csCardStyleIcon", "csCardStyleIconBg2"], ["src", "assets/images/time-stamp-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg3"], ["src", "assets/images/record-status-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg4"], ["src", "assets/images/checker-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg5"], ["src", "assets/images/checker-time-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg6"], ["src", "assets/images/first-auth-icon.svg", "alt", "..."], [1, "csCardStyleIcon", "csCardStyleIconBg7"], ["src", "assets/images/auth-status-icon.svg", "alt", "..."]],
        template: function ProcessCodeMappingEditComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Process Code Mapping");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "fieldset", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "External System Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "External System Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](15, "input", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "label", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Process Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "input", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Maximum Upload Limit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](28, "input", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ProcessCodeMappingEditComponent_Template_input_change_28_listener($event) {
              return ctx.treasuryRequired($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](29, "label", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](30, "Treasury Reference Required");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](31, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](32, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](34, ProcessCodeMappingEditComponent_label_34_Template, 2, 0, "label", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](35, ProcessCodeMappingEditComponent_input_35_Template, 1, 1, "input", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](36, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "input", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ProcessCodeMappingEditComponent_Template_input_change_40_listener($event) {
              return ctx.autoUploadRequired($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](42, "Auto Upload");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](44, ProcessCodeMappingEditComponent_input_44_Template, 1, 1, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](45, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](46, ProcessCodeMappingEditComponent_input_46_Template, 1, 1, "input", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, ProcessCodeMappingEditComponent_input_48_Template, 1, 1, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](49, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](50, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "input", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ProcessCodeMappingEditComponent_Template_input_change_53_listener($event) {
              return ctx.backdatingRequired($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "label", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](55, "Back Dating");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](57, ProcessCodeMappingEditComponent_input_57_Template, 1, 1, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](58, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](59, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](60, ProcessCodeMappingEditComponent_input_60_Template, 1, 1, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](61, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](63, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](64, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ProcessCodeMappingEditComponent_Template_input_change_65_listener($event) {
              return ctx.futureDateAllowRequired($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "label", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](67, "Future Dating");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](69, ProcessCodeMappingEditComponent_input_69_Template, 1, 1, "input", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](70, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](71, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](72, ProcessCodeMappingEditComponent_input_72_Template, 1, 1, "input", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](73, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](74, "div", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](76, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](77, "input", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ProcessCodeMappingEditComponent_Template_input_change_77_listener($event) {
              return ctx.fCYExchangeRequired($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "label", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](79, "FCY Exchange Rate Variance");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](81, ProcessCodeMappingEditComponent_input_81_Template, 1, 1, "input", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](82, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](84, ProcessCodeMappingEditComponent_input_84_Template, 1, 1, "input", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](86, "div", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](87, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](89, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](90, "input", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "label", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](92, "Cross Financial Transaction");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](94, "input", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "label", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](96, "Mandatory Field Impose");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](97, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "input", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ProcessCodeMappingEditComponent_Template_input_change_98_listener($event) {
              return ctx.sftpRequired($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](99, "label", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](100, "SFTP Required");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](102, "input", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](103, "label", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](104, "WU File Upload");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](107, ProcessCodeMappingEditComponent_button_107_Template, 2, 0, "button", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](109, ProcessCodeMappingEditComponent_button_109_Template, 2, 1, "button", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](111, ProcessCodeMappingEditComponent_button_111_Template, 2, 0, "button", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](113, ProcessCodeMappingEditComponent_button_113_Template, 2, 0, "button", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](115, ProcessCodeMappingEditComponent_button_115_Template, 2, 0, "button", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](117, ProcessCodeMappingEditComponent_button_117_Template, 2, 0, "button", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "div", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](119, "a", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](120, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](121, ProcessCodeMappingEditComponent_div_121_Template, 88, 11, "div", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.processCodeEditForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.submitEdit);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("readonly", !ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", !ctx.editFlag ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", !ctx.editFlag ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showFilefield);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showFilefield);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", !ctx.editFlag ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showbackDateValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", !ctx.editFlag ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showFutureDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", !ctx.editFlag ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showfCYExchangeValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", !ctx.editFlag ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", !ctx.editFlag ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", !ctx.editFlag ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", !ctx.editFlag ? true : null);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.editFlag && ctx.processCodeSummary.recordStatus == "OPEN");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.processCodeSummary.authStatus == "UNAUTHORIZED" && !ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.processCodeSummary.recordStatus == "OPEN" && !ctx.editFlag && ctx.processCodeSummary.verifiedOnce == "Y");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.processCodeSummary.recordStatus == "CLOSED" && !ctx.editFlag && ctx.processCodeSummary.authStatus == "AUTHORIZED");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.processCodeSummary.verifiedOnce == "NO" && !ctx.editFlag);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](32, _c0));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.processCodeSummary);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9jZXNzLWNvZGUtbWFwcGluZy1lZGl0LmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /***/
    },

    /***/
    8972:
    /*!**************************************************************************************************************!*\
      !*** ./src/app/views/file-upload-maintenance/process-code-mapping-new/process-code-mapping-new.component.ts ***!
      \**************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProcessCodeMappingNewComponent": function ProcessCodeMappingNewComponent() {
          return (
            /* binding */
            _ProcessCodeMappingNewComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
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


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      31443);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      71258);

      function ProcessCodeMappingNewComponent_option_16_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 59);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var extCode_r20 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("value", extCode_r20.extSysCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", extCode_r20.extSysCode, "");
        }
      }

      function ProcessCodeMappingNewComponent_div_17_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please Select External System Code! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ProcessCodeMappingNewComponent_div_17_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProcessCodeMappingNewComponent_div_17_div_1_Template, 2, 0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.processCodeForm.controls["extSysCode"].errors.required);
        }
      }

      function ProcessCodeMappingNewComponent_div_30_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please Enter Process Code! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ProcessCodeMappingNewComponent_div_30_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProcessCodeMappingNewComponent_div_30_div_1_Template, 2, 0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.processCodeForm.controls["processCode"].errors.required);
        }
      }

      function ProcessCodeMappingNewComponent_div_37_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please Enter Maximum Upload Limit! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ProcessCodeMappingNewComponent_div_37_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProcessCodeMappingNewComponent_div_37_div_1_Template, 2, 0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r3.processCodeForm.controls["maxUploadLimit"].errors.required);
        }
      }

      function ProcessCodeMappingNewComponent_label_48_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "SFTP Details ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "*");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ProcessCodeMappingNewComponent_input_49_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 61);
        }
      }

      function ProcessCodeMappingNewComponent_div_50_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please Enter Username! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ProcessCodeMappingNewComponent_div_50_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProcessCodeMappingNewComponent_div_50_div_1_Template, 2, 0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.processCodeForm.controls["sftpUsername"].errors.required);
        }
      }

      function ProcessCodeMappingNewComponent_input_59_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 62);
        }
      }

      function ProcessCodeMappingNewComponent_input_61_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 63);
        }
      }

      function ProcessCodeMappingNewComponent_input_63_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 64);
        }
      }

      function ProcessCodeMappingNewComponent_div_64_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please Enter Password! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ProcessCodeMappingNewComponent_div_64_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProcessCodeMappingNewComponent_div_64_div_1_Template, 2, 0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r10.processCodeForm.controls["sftpPassword"].errors.required);
        }
      }

      function ProcessCodeMappingNewComponent_input_73_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 65);
        }
      }

      function ProcessCodeMappingNewComponent_input_76_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 66);
        }
      }

      function ProcessCodeMappingNewComponent_div_77_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please Enter IP Address! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ProcessCodeMappingNewComponent_div_77_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProcessCodeMappingNewComponent_div_77_div_1_Template, 2, 0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r13.processCodeForm.controls["sftpIpaddress"].errors.required);
        }
      }

      function ProcessCodeMappingNewComponent_input_86_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 67);
        }
      }

      function ProcessCodeMappingNewComponent_input_89_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 68);
        }
      }

      function ProcessCodeMappingNewComponent_div_90_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please Enter Port! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ProcessCodeMappingNewComponent_div_90_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProcessCodeMappingNewComponent_div_90_div_1_Template, 2, 0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r16.processCodeForm.controls["sftpPort"].errors.required);
        }
      }

      function ProcessCodeMappingNewComponent_input_99_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 69);
        }
      }

      function ProcessCodeMappingNewComponent_input_102_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "input", 70);
        }
      }

      function ProcessCodeMappingNewComponent_div_103_div_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Please Enter Path! ");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }
      }

      function ProcessCodeMappingNewComponent_div_103_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 60);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, ProcessCodeMappingNewComponent_div_103_div_1_Template, 2, 0, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r19.processCodeForm.controls["sftpPath"].errors.required);
        }
      }

      var _c0 = function _c0() {
        return ["/external-system/processCodeMapping"];
      };

      var _ProcessCodeMappingNewComponent = /*#__PURE__*/function () {
        function _ProcessCodeMappingNewComponent(apiService, formBuilder, toastService) {
          _classCallCheck(this, _ProcessCodeMappingNewComponent);

          this.apiService = apiService;
          this.formBuilder = formBuilder;
          this.toastService = toastService;
          this.showFilefield = false;
          this.showFutureDate = false;
          this.showfCYExchangeValue = false;
          this.showbackDateValue = false;
          this.showsftpValues = false;
        }

        _createClass(_ProcessCodeMappingNewComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.currentUser = localStorage.getItem("userFromLogin");
            this.processCodeForm = this.formBuilder.group({
              extSysCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              extSysName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              processCode: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              maxUploadLimit: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
              acft: [""],
              autoUpload: [""],
              backDateAllow: [""],
              bdav: [""],
              creatorId: [""],
              fCYPercentage: [""],
              fCYRateVariance: [""],
              fdav: [""],
              fileName: [""],
              filePath: [""],
              futureDateAllow: [""],
              mandatoryFieldImposed: [""],
              sftpIpaddress: [""],
              sftpPassword: [""],
              sftpPath: [""],
              sftpPort: [""],
              sftpRequired: [""],
              sftpUsername: [""],
              treasuryrefRequired: [""],
              wuFile: [""]
            });
            this.getextSysCodeData();
          }
        }, {
          key: "getextSysCodeData",
          value: function getextSysCodeData() {
            var _this19 = this;

            this.apiService.getAllExt().subscribe(function (data) {
              _this19.extSysCodeData = data;
            });
          }
        }, {
          key: "onOptionsChange",
          value: function onOptionsChange(event) {
            var value = event.target.value;
            console.log("Value", value);

            if (value) {
              this.processCodeForm.controls.extSysCode.setValue(value);
              this.processCodeForm.controls.extSysName.setValue(this.extSysCodeData.filter(function (item) {
                return item.extSysCode === value;
              })[0].extSysName);
            }
          }
        }, {
          key: "treasuryRequired",
          value: function treasuryRequired(values) {
            var value = values.currentTarget.checked;
            this.processCodeForm.controls.treasuryrefRequired.setValue(value);
          }
        }, {
          key: "backdatingRequired",
          value: function backdatingRequired(backData) {
            console.log("backData", backData);
            this.backDateValue = backData.currentTarget.checked;
            console.log("Back data", this.backDateValue);

            if (this.backDateValue == true) {
              this.showbackDateValue = true;
              this.processCodeForm.controls.backDateAllow.setValue(this.backDateValue);
            } else {
              this.showbackDateValue = false;
              this.processCodeForm.controls.backDateAllow.setValue(this.backDateValue);
            }
          }
        }, {
          key: "autoUploadRequired",
          value: function autoUploadRequired(values) {
            console.log("autoUploadRequired", values);
            this.autoUploadValue = values.currentTarget.checked;
            console.log("File", this.autoUploadValue);

            if (this.autoUploadValue == true) {
              this.showFilefield = true;
              this.processCodeForm.controls.autoUpload.setValue(this.autoUploadValue);
            } else {
              this.showFilefield = false;
              this.processCodeForm.controls.autoUpload.setValue(this.autoUploadValue);
            }
          }
        }, {
          key: "futureDateAllowRequired",
          value: function futureDateAllowRequired(futuredataValue) {
            this.futuredataValue = futuredataValue.currentTarget.checked;

            if (this.futuredataValue == true) {
              this.showFutureDate = true;
              this.processCodeForm.controls.futureDateAllow.setValue(this.futuredataValue);
            } else {
              this.showFutureDate = false;
              this.processCodeForm.controls.futureDateAllow.setValue(this.futuredataValue);
            }
          }
        }, {
          key: "fCYExchangeRequired",
          value: function fCYExchangeRequired(fcyValue) {
            this.fCYExchangeValue = fcyValue.currentTarget.checked;

            if (this.fCYExchangeValue == true) {
              this.showfCYExchangeValue = true;
              this.processCodeForm.controls.fCYRateVariance.setValue(this.fCYExchangeValue);
            } else {
              this.showfCYExchangeValue = false;
              this.processCodeForm.controls.fCYRateVariance.setValue(this.fCYExchangeValue);
            }
          }
        }, {
          key: "sftpRequired",
          value: function sftpRequired(sftpValue) {
            this.sftpValues = sftpValue.currentTarget.checked;

            if (this.sftpValues == true) {
              this.showsftpValues = true;
              this.processCodeForm.controls.sftpRequired.setValue(this.sftpValues);
            } else {
              this.showsftpValues = false;
              this.processCodeForm.controls.sftpRequired.setValue(this.sftpValues);
            }
          }
        }, {
          key: "finalSubmitofForm",
          value: function finalSubmitofForm(formValue) {
            var _this20 = this;

            this.processCodeForm.controls.creatorId.setValue(this.currentUser);
            this.apiService.createExtSys(this.processCodeForm.value).subscribe(function (resp) {
              if (resp) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Data Saved Successfully!',
                  icon: 'success'
                });
                _this20.submit = true; // this.processCodeForm.reset();
              } else {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  title: 'Failed to Save Data!',
                  icon: 'error'
                });
              }
            }, function (error) {
              if (_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpErrorResponse) {
                sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                  text: 'Server Error!',
                  icon: 'error'
                });
              }
            });
          }
        }]);

        return _ProcessCodeMappingNewComponent;
      }();

      _ProcessCodeMappingNewComponent.ɵfac = function ProcessCodeMappingNewComponent_Factory(t) {
        return new (t || _ProcessCodeMappingNewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService));
      };

      _ProcessCodeMappingNewComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _ProcessCodeMappingNewComponent,
        selectors: [["npr-process-code-mapping-new"]],
        decls: 131,
        vars: 25,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "dbCardStyle"], [3, "disabled"], [1, "row", "gy-3"], [1, "col-lg-3"], ["for", "extCode", 1, "formLbl"], [1, "colorRed"], ["placeholder", "External System Code", "formControlName", "extSysCode", "aria-label", "Default select example", "required", "", 1, "form-select", 3, "change"], ["disabled", "", "selected", "", 1, "form-class"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "errorColor", 4, "ngIf"], ["for", "processCode", 1, "formLbl"], ["id", "processCode", "formControlName", "extSysName", "type", "text", "placeholder", "External System Name", "value", "", "required", "", 1, "form-control"], ["for", "extName", 1, "formLbl"], ["id", "extName", "type", "text", "formControlName", "processCode", "placeholder", "Process Code", "value", "", "required", "", 1, "form-control"], ["for", "uploadLimit", 1, "formLbl"], ["id", "uploadLimit", "formControlName", "maxUploadLimit", "type", "number", "placeholder", "Maximum Upload Limit", "value", "", "required", "", 1, "form-control"], [1, "col-lg-12"], [1, "checkStyle"], ["type", "checkbox", "formControlName", "treasuryrefRequired", "id", "referenceRequired", 3, "change"], ["for", "referenceRequired"], [4, "ngIf"], ["id", "sftpUsername", "formControlName", "sftpUsername", "type", "text", "class", "form-control", "placeholder", "Username", "value", "", "required", "", 4, "ngIf"], [1, "row", "gy-4", "align-items-center"], ["type", "checkbox", "formControlName", "autoUpload", "id", "autoUpload", 3, "change"], ["for", "autoUpload"], ["id", "fileName", "type", "text", "formControlName", "fileName", "class", "form-control", "placeholder", "File Name", "value", "", 4, "ngIf"], ["id", "filePath", "type", "text", "formControlName", "filePath", "class", "form-control", "placeholder", "File Path", "value", "", 4, "ngIf"], ["id", "sftpPassword", "type", "text", "formControlName", "sftpPassword", "class", "form-control", "placeholder", "Password", "value", "", "required", "", 4, "ngIf"], ["type", "checkbox", "formControlName", "backDateAllow", "id", "backDateAllow", 3, "change"], ["for", "backDateAllow"], ["id", "bdav", "type", "text", "formControlName", "bdav", "class", "form-control", "placeholder", "Back Dating", "value", "", 4, "ngIf"], ["id", "sftpPort", "type", "text", "formControlName", "sftpIpaddress", "class", "form-control", "placeholder", "IP Address", "value", "", "required", "", 4, "ngIf"], ["type", "checkbox", "formControlName", "futureDateAllow", "id", "futureDating", 3, "change"], ["for", "futureDating"], ["id", "futureDating", "type", "text", "formControlName", "fdav", "class", "form-control", "placeholder", "Future Dating", "value", "", 4, "ngIf"], ["id", "sftpPort", "type", "text", "formControlName", "sftpPort", "class", "form-control", "placeholder", "Port", "value", "", "required", "", 4, "ngIf"], ["type", "checkbox", "formControlName", "fCYRateVariance", "id", "fCYRateVariance", 3, "change"], ["for", "fCYRateVariance"], ["id", "fCYPercentage", "type", "number", "formControlName", "fCYPercentage", "class", "form-control", "placeholder", "FCY Percentage", "value", "", 4, "ngIf"], ["id", "sftpPath", "type", "text", "formControlName", "sftpPath", "class", "form-control", "placeholder", "Path", "value", "", "required", "", 4, "ngIf"], [1, "col-12"], [1, "row"], [1, "checkListCol", "mt-2", "pt-3"], ["type", "checkbox", "formControlName", "acft", "id", "uppercaseCheck"], ["for", "uppercaseCheck"], ["type", "checkbox", "formControlName", "mandatoryFieldImposed", "id", "lowercaseCheck"], ["for", "lowercaseCheck"], ["type", "checkbox", "formControlName", "sftpRequired", "id", "numberCheck", 3, "change"], ["for", "numberCheck"], ["type", "checkbox", "formControlName", "wuFile", "id", "charactersCheck"], ["for", "charactersCheck"], [1, "row", "g-3", "pb-3", "justify-content-end", "pt-3"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "disabled", "click"], ["href", "javascript:void(0)", "routerLinkActive", "router-link-active", 1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], [3, "value"], [1, "errorColor"], ["id", "sftpUsername", "formControlName", "sftpUsername", "type", "text", "placeholder", "Username", "value", "", "required", "", 1, "form-control"], ["id", "fileName", "type", "text", "formControlName", "fileName", "placeholder", "File Name", "value", "", 1, "form-control"], ["id", "filePath", "type", "text", "formControlName", "filePath", "placeholder", "File Path", "value", "", 1, "form-control"], ["id", "sftpPassword", "type", "text", "formControlName", "sftpPassword", "placeholder", "Password", "value", "", "required", "", 1, "form-control"], ["id", "bdav", "type", "text", "formControlName", "bdav", "placeholder", "Back Dating", "value", "", 1, "form-control"], ["id", "sftpPort", "type", "text", "formControlName", "sftpIpaddress", "placeholder", "IP Address", "value", "", "required", "", 1, "form-control"], ["id", "futureDating", "type", "text", "formControlName", "fdav", "placeholder", "Future Dating", "value", "", 1, "form-control"], ["id", "sftpPort", "type", "text", "formControlName", "sftpPort", "placeholder", "Port", "value", "", "required", "", 1, "form-control"], ["id", "fCYPercentage", "type", "number", "formControlName", "fCYPercentage", "placeholder", "FCY Percentage", "value", "", 1, "form-control"], ["id", "sftpPath", "type", "text", "formControlName", "sftpPath", "placeholder", "Path", "value", "", "required", "", 1, "form-control"]],
        template: function ProcessCodeMappingNewComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Process Code Mapping");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "fieldset", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "External System Code ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "select", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ProcessCodeMappingNewComponent_Template_select_change_13_listener($event) {
              return ctx.onOptionsChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "option", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15, "Select External System Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, ProcessCodeMappingNewComponent_option_16_Template, 2, 2, "option", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](17, ProcessCodeMappingNewComponent_div_17_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "label", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "External System Name ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](23, "input", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](24, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "label", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Process Code ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](28, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](29, "input", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](30, ProcessCodeMappingNewComponent_div_30_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "label", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](33, "Maximum Upload Limit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "span", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](35, "*");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](36, "input", 19);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](37, ProcessCodeMappingNewComponent_div_37_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](38, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](39, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](40, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](41, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](42, "input", 22);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ProcessCodeMappingNewComponent_Template_input_change_42_listener($event) {
              return ctx.treasuryRequired($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](43, "label", 23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](44, "Treasury Reference Required");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](45, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](46, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](47, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](48, ProcessCodeMappingNewComponent_label_48_Template, 4, 0, "label", 24);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](49, ProcessCodeMappingNewComponent_input_49_Template, 1, 0, "input", 25);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](50, ProcessCodeMappingNewComponent_div_50_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](51, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](52, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](53, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](54, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](55, "input", 27);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ProcessCodeMappingNewComponent_Template_input_change_55_listener($event) {
              return ctx.autoUploadRequired($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](56, "label", 28);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](57, "Auto Upload");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](58, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](59, ProcessCodeMappingNewComponent_input_59_Template, 1, 0, "input", 29);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](60, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](61, ProcessCodeMappingNewComponent_input_61_Template, 1, 0, "input", 30);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](62, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](63, ProcessCodeMappingNewComponent_input_63_Template, 1, 0, "input", 31);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](64, ProcessCodeMappingNewComponent_div_64_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](65, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](66, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](67, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](68, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](69, "input", 32);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ProcessCodeMappingNewComponent_Template_input_change_69_listener($event) {
              return ctx.backdatingRequired($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](70, "label", 33);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](71, "Back Dating");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](72, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](73, ProcessCodeMappingNewComponent_input_73_Template, 1, 0, "input", 34);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](74, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](75, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](76, ProcessCodeMappingNewComponent_input_76_Template, 1, 0, "input", 35);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](77, ProcessCodeMappingNewComponent_div_77_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](78, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](79, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](80, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](81, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](82, "input", 36);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ProcessCodeMappingNewComponent_Template_input_change_82_listener($event) {
              return ctx.futureDateAllowRequired($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](83, "label", 37);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](84, "Future Dating");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](85, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](86, ProcessCodeMappingNewComponent_input_86_Template, 1, 0, "input", 38);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](87, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](88, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](89, ProcessCodeMappingNewComponent_input_89_Template, 1, 0, "input", 39);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](90, ProcessCodeMappingNewComponent_div_90_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](91, "div", 20);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](92, "div", 26);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](93, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](94, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](95, "input", 40);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ProcessCodeMappingNewComponent_Template_input_change_95_listener($event) {
              return ctx.fCYExchangeRequired($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](96, "label", 41);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](97, "FCY Exchange Rate Variance");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](98, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](99, ProcessCodeMappingNewComponent_input_99_Template, 1, 0, "input", 42);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](100, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](101, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](102, ProcessCodeMappingNewComponent_input_102_Template, 1, 0, "input", 43);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](103, ProcessCodeMappingNewComponent_div_103_Template, 2, 1, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](104, "div", 44);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](105, "div", 45);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](106, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](107, "div", 46);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](108, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](109, "input", 47);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](110, "label", 48);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](111, "Cross Financial Transaction");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](112, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](113, "input", 49);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](114, "label", 50);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](115, "Mandatory Field Impose");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](116, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](117, "input", 51);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function ProcessCodeMappingNewComponent_Template_input_change_117_listener($event) {
              return ctx.sftpRequired($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](118, "label", 52);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](119, "SFTP Required");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](120, "div", 21);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](121, "input", 53);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](122, "label", 54);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](123, "WU File Upload");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](124, "div", 55);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](125, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](126, "button", 57);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcessCodeMappingNewComponent_Template_button_click_126_listener() {
              return ctx.finalSubmitofForm(ctx.processCodeForm.value);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](127, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](128, "div", 56);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](129, "a", 58);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](130, "Exit");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.processCodeForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx.submit);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.extSysCodeData);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.processCodeForm.controls["extSysCode"].invalid && (ctx.processCodeForm.controls["extSysCode"].dirty || ctx.processCodeForm.controls["extSysCode"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.processCodeForm.controls["processCode"].invalid && (ctx.processCodeForm.controls["processCode"].dirty || ctx.processCodeForm.controls["processCode"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.processCodeForm.controls["maxUploadLimit"].invalid && (ctx.processCodeForm.controls["maxUploadLimit"].dirty || ctx.processCodeForm.controls["maxUploadLimit"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.processCodeForm.controls["sftpUsername"].invalid && (ctx.processCodeForm.controls["sftpUsername"].dirty || ctx.processCodeForm.controls["sftpUsername"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showFilefield);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showFilefield);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.processCodeForm.controls["sftpPassword"].invalid && (ctx.processCodeForm.controls["sftpPassword"].dirty || ctx.processCodeForm.controls["sftpPassword"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showbackDateValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.processCodeForm.controls["sftpIpaddress"].invalid && (ctx.processCodeForm.controls["sftpIpaddress"].dirty || ctx.processCodeForm.controls["sftpIpaddress"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showFutureDate);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.processCodeForm.controls["sftpPort"].invalid && (ctx.processCodeForm.controls["sftpPort"].dirty || ctx.processCodeForm.controls["sftpPort"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showfCYExchangeValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.showsftpValues);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.processCodeForm.controls["sftpPath"].invalid && (ctx.processCodeForm.controls["sftpPath"].dirty || ctx.processCodeForm.controls["sftpPath"].touched));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", !ctx.processCodeForm.valid || ctx.submit);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](24, _c0));
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.CheckboxControlValueAccessor, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkActive],
        styles: [".form-class[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #797979;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-bottom: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-left: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-right: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n\n.errorColor[_ngcontent-%COMP%] {\n  color: #e6224a;\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2Nlc3MtY29kZS1tYXBwaW5nLW5ldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBRUEsd0VBQUE7QUFBSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBQ0oiLCJmaWxlIjoicHJvY2Vzcy1jb2RlLW1hcHBpbmctbmV3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0tY2xhc3Mge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IC4zNzVyZW0gLjc1cmVtO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgICBjb2xvcjogIzc5Nzk3OTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWJlYmViO1xyXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgLy8gYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dFxyXG59XHJcbi5lcnJvckNvbG9ye1xyXG4gICAgY29sb3I6ICNlNjIyNGE7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbn0iXX0= */"]
      });
      /***/
    },

    /***/
    87873:
    /*!******************************************************************************************************!*\
      !*** ./src/app/views/file-upload-maintenance/process-code-mapping/process-code-mapping.component.ts ***!
      \******************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProcessCodeMappingComponent": function ProcessCodeMappingComponent() {
          return (
            /* binding */
            _ProcessCodeMappingComponent
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


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      31443);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! angular-datatables */
      50481);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);

      function ProcessCodeMappingComponent_tr_26_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ProcessCodeMappingComponent_tr_26_Template_span_click_2_listener() {
            var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r3);

            var item_r1 = restoredCtx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();

            return ctx_r2.sendingDataforEdit(item_r1);
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
          var item_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.extSysName);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.extSysCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.processCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](item_r1.authStatus);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](12, 5, item_r1.creatorDtStamp, "medium"));
        }
      }

      var _c0 = function _c0() {
        return ["/external-system/processCodeMappingNew"];
      };

      var _c1 = function _c1() {
        return ["active"];
      };

      var _c2 = function _c2() {
        return ["/dashboard"];
      };

      var _ProcessCodeMappingComponent = /*#__PURE__*/function () {
        function _ProcessCodeMappingComponent(apiService, router, formBuilder, toastService) {
          _classCallCheck(this, _ProcessCodeMappingComponent);

          this.apiService = apiService;
          this.router = router;
          this.formBuilder = formBuilder;
          this.toastService = toastService;
          this.dtOptions = {};
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subject();
        }

        _createClass(_ProcessCodeMappingComponent, [{
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
            this.getprocessCodeMappingSummry();
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.dtTrigger.unsubscribe();
          }
        }, {
          key: "getprocessCodeMappingSummry",
          value: function getprocessCodeMappingSummry() {
            var _this21 = this;

            this.apiService.getAllExtSys().subscribe(function (data) {
              _this21.processCodeMappingSummry = data;

              _this21.dtTrigger.next();

              if (_this21.processCodeMappingSummry != null) {
                // this.toastService.successMessage('Data Fetched Successfully!.', '');
                return;
              } else {
                // this.toastService.errorMessage('Failed to Fetch Data!.', '');
                return;
              }
            });
          }
        }, {
          key: "sendingDataforEdit",
          value: function sendingDataforEdit(element) {
            if (element) {
              this.apiService.setProcessCodeData({
                id: element.id,
                extSysCode: element.extSysCode,
                extSysName: element.extSysName,
                commChannel: element.commChannel,
                creatorDtStamp: element.creatorDtStamp,
                creatorId: element.creatorId,
                destination: element.destination,
                destinationTag: element.destinationTag,
                dtdFile: element.dtdFile,
                errDirectoryName: element.errDirectoryName,
                errQueueName: element.errQueueName,
                errSchemaName: element.errSchemaName,
                errXsltName: element.errXsltName,
                extSysTag: element.extSysTag,
                formatType: element.formatType,
                isDestNode: element.isDestNode,
                isExtSysNode: element.isExtSysNode,
                isModuleNode: element.isModuleNode,
                isProcessNode: element.isProcessNode,
                isServiceNode: element.isServiceNode,
                latestAmendNo: element.latestAmendNo,
                messageType: element.messageType,
                moduleCode: element.moduleCode,
                moduleTag: element.moduleTag,
                msgDuplication: element.msgDuplication,
                processCode: element.processCode,
                processTag: element.processTag,
                recordStatus: element.recordStatus,
                reqDirectoryName: element.reqDirectoryName,
                reqQueueName: element.reqQueueName,
                reqSchemaName: element.reqSchemaName,
                reqXsltName: element.reqXsltName,
                requestTag: element.requestTag,
                respDirectoryName: element.respDirectoryName,
                respQueueName: element.respQueueName,
                respSchemaName: element.respSchemaName,
                respXsltName: element.respXsltName,
                responseTag: element.responseTag,
                serviceCode: element.serviceCode,
                serviceTag: element.serviceTag,
                updatedAt: element.updatedAt,
                verifiedEver: element.verifiedEver,
                verifierDtStamp: element.verifierDtStamp,
                verifierId: element.verifierId,
                xsdFile: element.xsdFile,
                authStatus: element.authStatus,
                updatedBy: element.updatedBy,
                fristTimeAuth: element.fristTimeAuth,
                versionNo: element.versionNo,
                maxUploadLimit: element.maxUploadLimit,
                fileName: element.fileName,
                bdav: element.bdav,
                backDateAllow: element.backDateAllow,
                futureDateAllow: element.futureDateAllow,
                fdav: element.fdav,
                acft: element.acft,
                autoUpload: element.autoUpload,
                filePath: element.filePath,
                fcyvariance: element.fCYRateVariance,
                fcypercenatage: element.fCYPercentage,
                userName: element.sftpUsername,
                password: element.sftpPassword,
                port: element.sftpPort,
                ipAddress: element.sftpIpaddress,
                sftpRequired: element.sftpRequired,
                path: element.sftpPath,
                mandatoryFieldImposed: element.mandatoryFieldImposed,
                treasuryrefRequired: element.treasuryrefRequired,
                wuFile: element.wuFile,
                verifiedOnce: element.verifiedOnce
              });
              this.router.navigate(['/external-system/processCodeMappingEdit']);
            }
          }
        }]);

        return _ProcessCodeMappingComponent;
      }();

      _ProcessCodeMappingComponent.ɵfac = function ProcessCodeMappingComponent_Factory(t) {
        return new (t || _ProcessCodeMappingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_1__.ToastService));
      };

      _ProcessCodeMappingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
        type: _ProcessCodeMappingComponent,
        selectors: [["npr-process-code-mapping"]],
        decls: 27,
        vars: 9,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], [1, "dbCardStyle"], [1, "row", "g-3", "pb-3", "justify-content-end"], [1, "col-auto"], [1, "btn", "smBtn", "minWdSmBtn", "btnPrimary", 3, "routerLink", "routerLinkActive"], [1, "btn", "smBtn", "minWdSmBtn", "btnSecondary", 3, "routerLink"], ["datatable", "", "id", "dbTable1", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"], [1, "primaryColor", 3, "click"]],
        template: function ProcessCodeMappingComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, "Process Code Mapping");

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

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "External System Name");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "External System Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Process Code");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Status");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, ProcessCodeMappingComponent_tr_26_Template, 13, 8, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](6, _c0))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](7, _c1));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](8, _c2));

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("dtOptions", ctx.dtOptions)("dtTrigger", ctx.dtTrigger);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.processCodeMappingSummry);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, angular_datatables__WEBPACK_IMPORTED_MODULE_2__.DataTableDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9jZXNzLWNvZGUtbWFwcGluZy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /***/
    },

    /***/
    42034:
    /*!**************************************************************************************************!*\
      !*** ./src/app/views/file-upload-maintenance/treasury-reference/treasury-reference.component.ts ***!
      \**************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TreasuryReferenceComponent": function TreasuryReferenceComponent() {
          return (
            /* binding */
            _TreasuryReferenceComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs */
      79441);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! sweetalert2 */
      18190);
      /* harmony import */


      var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/api.service */
      94761);
      /* harmony import */


      var src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/shared/services/toast.service */
      31443);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var angular_datatables__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! angular-datatables */
      50481);

      function TreasuryReferenceComponent_option_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var batch_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", batch_r2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", batch_r2, "");
        }
      }

      function TreasuryReferenceComponent_div_15_tr_23_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var data_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r4.id.batchNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r4.id.branchCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r4.id.currNo);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](9, 6, data_r4.id.initiationDate));

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r4.account);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](data_r4.amount);
        }
      }

      function TreasuryReferenceComponent_div_15_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "table", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Batch No");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Branch Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Curr No");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Initiation Date");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Source Code");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Account");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19, "Amount");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Treasury Reference");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](23, TreasuryReferenceComponent_div_15_tr_23_Template, 15, 8, "tr", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("dtOptions", ctx_r1.dtOptions)("dtTrigger", ctx_r1.dtTrigger);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](20);

          _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.treasuryReferenceData);
        }
      }

      var _TreasuryReferenceComponent = /*#__PURE__*/function () {
        function _TreasuryReferenceComponent(apiService, formBuilder, toastService) {
          _classCallCheck(this, _TreasuryReferenceComponent);

          this.apiService = apiService;
          this.formBuilder = formBuilder;
          this.toastService = toastService;
          this.dtOptions = {};
          this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
          this.showTable = false;
        }

        _createClass(_TreasuryReferenceComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.treasuryReferenceForm = this.formBuilder.group({
              batch: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required]]
            });
            this.fetchingBatchNumber();
            this.dtOptions = {
              pagingType: 'full_numbers',
              pageLength: 5,
              processing: true,
              lengthMenu: [[5, 10, 20, -1], [5, 10, 20, 30]]
            };
          }
        }, {
          key: "fetchingBatchNumber",
          value: function fetchingBatchNumber() {
            var _this22 = this;

            this.apiService.fetchingBatchNo().subscribe(function (batchNumberResp) {
              _this22.selectedBatchNumber = batchNumberResp;
              console.log("this.selectedBatchNumber", _this22.selectedBatchNumber);
            });
          }
        }, {
          key: "onOptionsChange",
          value: function onOptionsChange(event) {
            var _this23 = this;

            var value = event.target.value;

            if (value) {
              this.treasuryReferenceForm.controls.batch.setValue(value);
              this.apiService.sendingBatchNumber(value).subscribe(function (batchResp) {
                if (batchResp == '') {
                  sweetalert2__WEBPACK_IMPORTED_MODULE_0___default().fire({
                    title: "No Data for Batch:" + value,
                    icon: 'warning'
                  });
                  _this23.showTable = false;
                } else {
                  _this23.treasuryReferenceData = batchResp;
                  _this23.showTable = true;
                }
              });
            }
          }
        }]);

        return _TreasuryReferenceComponent;
      }();

      _TreasuryReferenceComponent.ɵfac = function TreasuryReferenceComponent_Factory(t) {
        return new (t || _TreasuryReferenceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_api_service__WEBPACK_IMPORTED_MODULE_1__.ApiService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_toast_service__WEBPACK_IMPORTED_MODULE_2__.ToastService));
      };

      _TreasuryReferenceComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
        type: _TreasuryReferenceComponent,
        selectors: [["npr-treasury-reference"]],
        decls: 16,
        vars: 3,
        consts: [[1, "pageContentMain"], [1, "pageTitleCol"], [1, "pageTitle"], ["action", "", 1, "formStyle", 3, "formGroup"], [1, "dbCardStyle"], [1, "row", "gy-4"], [1, "col-lg-4"], ["for", "selectBatch", 1, "formLbl"], ["formControlName", "batch", "aria-label", "Default select example", 1, "form-select", 3, "change"], ["disabled", "", "selected", "", 1, "form-class"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "dbCardStyle dbCardStyle2 p-0", 4, "ngIf"], [3, "value"], [1, "dbCardStyle", "dbCardStyle2", "p-0"], [1, "titleCol"], ["datatable", "", "id", "dbTable1", 1, "dataTable", "table", "tableStyle", "responsive", "nowrap", 2, "width", "100%", 3, "dtOptions", "dtTrigger"], [4, "ngFor", "ngForOf"]],
        template: function TreasuryReferenceComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, "Treasury Reference Input");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "form", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "label", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Select Batch No");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function TreasuryReferenceComponent_Template_select_change_10_listener($event) {
              return ctx.onOptionsChange($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "option", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "Select Batch No");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, TreasuryReferenceComponent_option_13_Template, 2, 2, "option", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "br");

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, TreasuryReferenceComponent_div_15_Template, 24, 3, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.treasuryReferenceForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.selectedBatchNumber);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.showTable);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, angular_datatables__WEBPACK_IMPORTED_MODULE_3__.DataTableDirective],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe],
        styles: [".form-class[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  padding: 0.375rem 0.75rem;\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5;\n  color: #797979;\n  background-color: #fff;\n  background-clip: padding-box;\n  border-bottom: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-left: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  border-right: 1px solid #ebebeb;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyZWFzdXJ5LXJlZmVyZW5jZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBRUEsd0VBQUE7QUFBSiIsImZpbGUiOiJ0cmVhc3VyeS1yZWZlcmVuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jbGFzcyB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogLjM3NXJlbSAuNzVyZW07XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxuICAgIGNvbG9yOiAjNzk3OTc5O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ViZWJlYjtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNlYmViZWI7XHJcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICBhcHBlYXJhbmNlOiBub25lO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2ViZWJlYjtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcclxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0XHJcbn0iXX0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_views_file-upload-maintenance_file-upload-maintenance_module_ts-es5.js.map